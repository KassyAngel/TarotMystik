// src/App.tsx

import { useState, useEffect } from "react";
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import PaymentCancelPage from './pages/PaymentCancelPage';
import PremiumModal from './components/PremiumModal';
import NotificationPermissionModal from './components/NotificationPermissionModal';
import RatingModal from './components/RatingModal';
import TopBar from './components/TopBar';
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { UserProvider, useUser } from "@/contexts/UserContext";
import OracleMystiqueApp from "@/pages/OracleMystiqueApp";
import NotFound from "@/pages/not-found";
import { initialize as initializeAdMob, showBanner, hideBanner, showInterstitialAd, preloadInterstitial } from './admobService';
import { initializeRevenueCat, checkPremiumStatus } from './services/revenueCatService';
import { getUserEmail } from './lib/userStorage';
import { useRatingPrompt } from './hooks/useRatingPrompt';

type AppStep =
  | 'landing' | 'name' | 'date' | 'gender'
  | 'oracle' | 'game' | 'revelation' | 'interpretation'
  | 'wizard' | 'wheel' | 'loveCalculator';

interface OracleCounters {
  lunar: number;
  wizard: number;
  loveCalculator: number;
  cardDrawing: number;
  wheel: number;
}

function Router({
  onStepChange,
  shouldShowAdBeforeReading,
  onReadingComplete,
  isPremium,
  wheelCounter,
  onWheelComplete
}: {
  onStepChange: (step: AppStep) => void;
  shouldShowAdBeforeReading: (oracleType: string) => Promise<boolean>;
  onReadingComplete: (oracleType: string) => void;
  isPremium: boolean;
  wheelCounter: number;
  onWheelComplete: () => void;
}) {
  return (
    <Switch>
      <Route path="/success" component={PaymentSuccessPage} />
      <Route path="/cancel" component={PaymentCancelPage} />
      <Route path="/">
        <OracleMystiqueApp
          onStepChange={onStepChange as any}
          shouldShowAdBeforeReading={shouldShowAdBeforeReading}
          onReadingComplete={onReadingComplete}
          isPremium={isPremium}
          wheelCounter={wheelCounter}
          onWheelComplete={onWheelComplete}
        />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function AppContent() {
  const [isPremium, setIsPremium] = useState(false);
  const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<AppStep>('landing');
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [bannerShown, setBannerShown] = useState(false);

  const { updatePremiumStatus } = useUser();

  const [oracleCounters, setOracleCounters] = useState<OracleCounters>({
    lunar: 0,
    wizard: 0,
    loveCalculator: 0,
    cardDrawing: 0,
    wheel: 0
  });

  const { showRating, handleRate, handleClose } = useRatingPrompt({
    minUsageCount: 2,
    postponeDays: 3,
    daysAfterInstall: 2
  });

  useEffect(() => {
    const initServices = async () => {
      await Promise.allSettled([
        initializeAdMob(),
        initializeRevenueCat()
      ]);
      console.log('✅ Services AdMob + RevenueCat initialisés');

      const savedEmail = await getUserEmail();

      if (savedEmail) {
        try {
          console.log(`🔍 Vérification statut Premium pour: ${savedEmail}`);
          const status = await checkPremiumStatus(savedEmail);
          setIsPremium(status);
          updatePremiumStatus(status);
          console.log(`👑 Statut Premium au démarrage: ${status ? 'ACTIF ✅' : 'INACTIF ❌'}`);
        } catch (error) {
          console.error('❌ Erreur vérification Premium au démarrage:', error);
          const cached = localStorage.getItem(`tarotmystik_premium_${savedEmail.toLowerCase().trim()}`);
          if (cached) {
            const data = JSON.parse(cached);
            let premiumStatus = data.isPremium;
            if (data.expirationDate) {
              const isExpired = new Date(data.expirationDate) < new Date();
              premiumStatus = !isExpired && data.isPremium;
            }
            setIsPremium(premiumStatus);
            updatePremiumStatus(premiumStatus);
            console.log('💾 Statut Premium récupéré depuis le cache local');
          }
        }
      } else {
        console.log('ℹ️ Aucun email sauvegardé, utilisateur non Premium');
      }
    };

    initServices();
  }, []);

  useEffect(() => {
    if (isPremium) {
      console.log('👑 Premium actif : bannière cachée');
      if (bannerShown) {
        hideBanner();
        setBannerShown(false);
      }
      return;
    }

    const noBannerPages = ['landing', 'name', 'date', 'gender'];
    const shouldShowBanner = !noBannerPages.includes(currentStep);

    if (shouldShowBanner && !bannerShown) {
      console.log(`🎯 Page "${currentStep}" atteinte → Affichage de la bannière permanente`);
      const timer = setTimeout(() => {
        showBanner();
        setBannerShown(true);
      }, 2500);
      return () => clearTimeout(timer);
    }

    if (!shouldShowBanner && bannerShown) {
      console.log('👋 Retour à l\'onboarding → Masquer la bannière');
      hideBanner();
      setBannerShown(false);
    }
  }, [currentStep, isPremium, bannerShown]);

  const showTopBar = !['landing', 'name', 'date', 'gender'].includes(currentStep);

  // ✅ Scroll en haut à chaque changement de page
  useEffect(() => {
    const scrollContainer = document.querySelector('.overflow-y-auto');
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
  }, [currentStep]);

  useEffect(() => {
    const checkNotificationPermission = () => {
      const permission = localStorage.getItem('notificationPermission');
      if (!permission && currentStep === 'oracle') {
        setShowNotificationModal(true);
      }
    };
    checkNotificationPermission();
  }, [currentStep]);

  const shouldShowAdBeforeReading = async (oracleType: string): Promise<boolean> => {
    if (isPremium) {
      console.log('👑 Utilisateur Premium - Pas de pub');
      return false;
    }

    if (oracleType === 'wheel') {
      console.log(`⏭️ "wheel" : pub récompensée gérée dans WheelPage`);
      return false;
    }

    let counterKey: keyof OracleCounters;
    let shouldShowPub = false;

    const currentCount = oracleCounters[
      oracleType === 'loveOracle' || oracleType === 'threeCards' || oracleType === 'crossSpread'
        ? 'cardDrawing'
        : oracleType as keyof OracleCounters
    ];
    const nextCount = currentCount + 1;

    switch (oracleType) {
      case 'lunar':
        counterKey = 'lunar';
        shouldShowPub = nextCount === 2 || (nextCount > 2 && (nextCount - 2) % 3 === 0);
        break;
      case 'wizard':
        counterKey = 'wizard';
        shouldShowPub = nextCount === 2 || (nextCount > 2 && (nextCount - 2) % 3 === 0);
        break;
      case 'loveCalculator':
        counterKey = 'loveCalculator';
        shouldShowPub = nextCount % 2 === 0;
        break;
      case 'loveOracle':
      case 'threeCards':
      case 'crossSpread':
        counterKey = 'cardDrawing';
        shouldShowPub = nextCount === 2 || (nextCount > 2 && (nextCount - 2) % 3 === 0);
        break;
      default:
        return false;
    }

    if (shouldShowPub) {
      try {
        await showInterstitialAd(`before_${oracleType}`);
      } catch (error) {
        console.error('❌ Erreur pub interstitielle:', error);
      }
    }

    const followingCount = nextCount + 1;
    let shouldPreloadNext = false;
    switch (counterKey!) {
      case 'lunar':
      case 'wizard':
      case 'cardDrawing':
        shouldPreloadNext = followingCount === 2 || (followingCount > 2 && (followingCount - 2) % 3 === 0);
        break;
      case 'loveCalculator':
        shouldPreloadNext = followingCount % 2 === 0;
        break;
    }

    if (shouldPreloadNext) {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => preloadInterstitial());
      } else {
        setTimeout(() => preloadInterstitial(), 2000);
      }
    }

    return shouldShowPub;
  };

  const handleReadingComplete = (oracleType: string) => {
    setOracleCounters(prev => {
      const newCounters = { ...prev };
      switch (oracleType) {
        case 'lunar':          newCounters.lunar += 1; break;
        case 'wizard':         newCounters.wizard += 1; break;
        case 'loveCalculator': newCounters.loveCalculator += 1; break;
        case 'loveOracle':
        case 'threeCards':
        case 'crossSpread':    newCounters.cardDrawing += 1; break;
        case 'wheel':          newCounters.wheel += 1; break;
      }
      return newCounters;
    });
  };

  const handleWheelComplete = () => handleReadingComplete('wheel');

  const handlePremiumActivated = () => {
    console.log('👑 Premium activé !');
    setIsPremium(true);
    updatePremiumStatus(true);
    setIsPremiumModalOpen(false);
  };

  return (
    <div className="dark relative w-screen overflow-hidden" style={{ height: '100dvh' }}>

      {!isPremium && bannerShown && (
        <style>{`
          :root {
            --admob-banner-height: 60px;
            --admob-safe-spacing: 50px;
            --admob-total-spacing: calc(var(--admob-banner-height) + var(--admob-safe-spacing));
          }
          .has-banner-padding { padding-bottom: var(--admob-total-spacing) !important; }
          .safe-bottom-buttons { padding-bottom: max(110px, calc(110px + env(safe-area-inset-bottom))) !important; }
          .main-content { padding-bottom: var(--admob-total-spacing) !important; }
          .fixed-bottom-controls { bottom: calc(var(--admob-banner-height) + 10px) !important; }
          button, a[role="button"] { position: relative; z-index: 10; }
          @media (min-width: 640px) {
            .main-content, .has-banner-padding, .safe-bottom-buttons { padding-bottom: 120px !important; }
            .fixed-bottom-controls { bottom: calc(var(--admob-banner-height) + 15px) !important; }
          }
          button { min-height: 48px; min-width: 48px; }
        `}</style>
      )}

      {showTopBar && (
        <TopBar
          onOpenPremium={() => setIsPremiumModalOpen(true)}
          isPremium={isPremium}
        />
      )}

      {showNotificationModal && (
        <NotificationPermissionModal
          onClose={() => setShowNotificationModal(false)}
        />
      )}

      {isPremiumModalOpen && (
        <PremiumModal
          isOpen={isPremiumModalOpen}
          onClose={() => setIsPremiumModalOpen(false)}
          onPurchase={handlePremiumActivated}
        />
      )}

      <RatingModal
        isOpen={showRating}
        onClose={handleClose}
        onRate={handleRate}
      />

      <Toaster />

      <div
        className={`w-full h-full overflow-y-auto ${!isPremium && bannerShown ? 'main-content' : ''}`}
        style={{ overscrollBehavior: 'none' }}
      >
        <Router
          onStepChange={setCurrentStep}
          shouldShowAdBeforeReading={shouldShowAdBeforeReading}
          onReadingComplete={handleReadingComplete}
          isPremium={isPremium}
          wheelCounter={oracleCounters.wheel}
          onWheelComplete={handleWheelComplete}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <UserProvider>
          <TooltipProvider>
            <AppContent />
          </TooltipProvider>
        </UserProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;