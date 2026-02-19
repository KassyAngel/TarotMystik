// src/App.tsx

import { useState, useEffect } from "react";
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import PaymentCancelPage from './pages/PaymentCancelPage';
import PremiumModal from './components/PremiumModal';
import NotificationPermissionModal from './components/NotificationPermissionModal';
import RatingModal from './components/RatingModal'; // ✅ AJOUTÉ
import TopBar from './components/TopBar';
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { UserProvider } from "@/contexts/UserContext";
import OracleMystiqueApp from "@/pages/OracleMystiqueApp";
import NotFound from "@/pages/not-found";
import { initialize as initializeAdMob, showBanner, hideBanner, showInterstitialAd, preloadInterstitial } from './admobService';
import { initializeRevenueCat } from './services/revenueCatService';
import { useRatingPrompt } from './hooks/useRatingPrompt'; // ✅ AJOUTÉ

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

function App() {
  const [isPremium] = useState(false);
  const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<AppStep>('landing');
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [bannerShown, setBannerShown] = useState(false);

  const [oracleCounters, setOracleCounters] = useState<OracleCounters>({
    lunar: 0,
    wizard: 0,
    loveCalculator: 0,
    cardDrawing: 0,
    wheel: 0
  });

  // ✅ AJOUT : Hook pour gérer la popup d'évaluation
  const { showRating, handleRate, handleClose } = useRatingPrompt({
    minUsageCount: 2,
    postponeDays: 3,
    daysAfterInstall: 2
  });

  // ✅ MODIF 1 : Init en parallèle au lieu de séquentiel (~500ms de gain au démarrage)
  useEffect(() => {
    const initServices = async () => {
      await Promise.allSettled([
        initializeAdMob(),
        initializeRevenueCat()
      ]);
      console.log('✅ Services AdMob + RevenueCat initialisés');
    };
    initServices();
  }, []);

  // ✅ GESTION BANNIÈRE : Permanente à partir de la page Oracle (sauf Premium)
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
      }, 2500); // ← 2 secondes, laisse le temps à la WebView de se charger
      return () => clearTimeout(timer);
    }

    if (!shouldShowBanner && bannerShown) {
      console.log('👋 Retour à l\'onboarding → Masquer la bannière');
      hideBanner();
      setBannerShown(false);
    }
  }, [currentStep, isPremium, bannerShown]);

  const showTopBar = !['landing', 'name', 'date', 'gender'].includes(currentStep);

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

    console.log(`🎯 [PUB CHECK] Oracle: "${oracleType}" | Compteurs actuels:`, oracleCounters);

    if (oracleType === 'wheel') {
      console.log(`⏭️ "wheel" : pub récompensée gérée dans WheelPage`);
      return false;
    }

    let counterKey: keyof OracleCounters;
    let shouldShowPub = false;

    const currentCount = oracleCounters[oracleType === 'loveOracle' || oracleType === 'threeCards' || oracleType === 'crossSpread' ? 'cardDrawing' : oracleType as keyof OracleCounters];
    const nextCount = currentCount + 1;

    switch (oracleType) {
      case 'lunar':
        counterKey = 'lunar';
        shouldShowPub = nextCount === 2 || (nextCount > 2 && (nextCount - 2) % 3 === 0);
        console.log(`📊 LUNAR: current=${currentCount}, next=${nextCount} | Pub: ${shouldShowPub ? 'OUI ✅' : 'NON ❌'}`);
        break;

      case 'wizard':
        counterKey = 'wizard';
        shouldShowPub = nextCount === 2 || (nextCount > 2 && (nextCount - 2) % 3 === 0);
        console.log(`📊 WIZARD: current=${currentCount}, next=${nextCount} | Pub: ${shouldShowPub ? 'OUI ✅' : 'NON ❌'}`);
        break;

      case 'loveCalculator':
        counterKey = 'loveCalculator';
        shouldShowPub = nextCount % 2 === 0;
        console.log(`📊 LOVE_CALCULATOR: current=${currentCount}, next=${nextCount} | Pub: ${shouldShowPub ? 'OUI ✅' : 'NON ❌'}`);
        break;

      case 'loveOracle':
      case 'threeCards':
      case 'crossSpread':
        counterKey = 'cardDrawing';
        shouldShowPub = nextCount === 2 || (nextCount > 2 && (nextCount - 2) % 3 === 0);
        console.log(`📊 CARD_DRAWING (${oracleType}): current=${currentCount}, next=${nextCount} | Pub: ${shouldShowPub ? 'OUI ✅' : 'NON ❌'}`);
        break;

      default:
        console.log(`⚠️ Oracle "${oracleType}" non reconnu, pas de pub`);
        return false;
    }

    if (shouldShowPub) {
      console.log('🎬 Affichage pub interstitielle AVANT le tirage');
      try {
        await showInterstitialAd(`before_${oracleType}`);
        console.log('✅ Pub interstitielle affichée avec succès');
      } catch (error) {
        console.error('❌ Erreur pub interstitielle:', error);
      }
    }

    const followingCount = nextCount + 1;
    let shouldPreloadNext = false;

    switch (counterKey) {
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
      console.log(`🔄 Pré-chargement pub pour le prochain tirage (count=${followingCount})`);
      // ✅ MODIF 2 : requestIdleCallback pour ne pas bloquer le thread principal sur Android
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => preloadInterstitial());
      } else {
        setTimeout(() => preloadInterstitial(), 2000);
      }
    }

    return shouldShowPub;
  };

  const handleReadingComplete = (oracleType: string) => {
    console.log(`📈 [COMPTEUR] Tirage complété: ${oracleType}`);

    setOracleCounters(prev => {
      const newCounters = { ...prev };

      switch (oracleType) {
        case 'lunar':
          newCounters.lunar += 1;
          console.log(`✅ LUNAR: ${prev.lunar} → ${newCounters.lunar}`);
          break;
        case 'wizard':
          newCounters.wizard += 1;
          console.log(`✅ WIZARD: ${prev.wizard} → ${newCounters.wizard}`);
          break;
        case 'loveCalculator':
          newCounters.loveCalculator += 1;
          console.log(`✅ LOVE_CALCULATOR: ${prev.loveCalculator} → ${newCounters.loveCalculator}`);
          break;
        case 'loveOracle':
        case 'threeCards':
        case 'crossSpread':
          newCounters.cardDrawing += 1;
          console.log(`✅ CARD_DRAWING (${oracleType}): ${prev.cardDrawing} → ${newCounters.cardDrawing}`);
          break;
        case 'wheel':
          newCounters.wheel += 1;
          console.log(`✅ WHEEL: ${prev.wheel} → ${newCounters.wheel}`);
          break;
        default:
          console.log(`⚠️ Type "${oracleType}" non comptabilisé`);
      }

      return newCounters;
    });
  };

  const handleWheelComplete = () => {
    console.log(`🎡 [WHEEL] Tirage terminé`);
    handleReadingComplete('wheel');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <UserProvider>
          <TooltipProvider>
            {/* ✅ MODIF 3 : style height 100dvh au lieu de h-screen — corrige le décalage Android */}
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
                  onPurchase={() => {
                    setIsPremiumModalOpen(false);
                  }}
                />
              )}

              <RatingModal
                isOpen={showRating}
                onClose={handleClose}
                onRate={handleRate}
              />

              <Toaster />

              {/* ✅ overscrollBehavior none : empêche le rebond Android qui freeze l'UI */}
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
          </TooltipProvider>
        </UserProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;