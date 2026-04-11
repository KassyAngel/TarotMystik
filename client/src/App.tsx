// src/App.tsx
// ✅ v5 — Préchargement immédiat du bundle principal pour réduire le délai d'affichage

import { useState, useEffect, lazy, Suspense } from "react";
import PremiumModal from './components/PremiumModal';
import NotificationPermissionModal from './components/NotificationPermissionModal';
import RatingModal from './components/RatingModal';
import TopBar from './components/TopBar';
import MenuDrawer from './components/MenuDrawer';
import UserProfileModal from './components/UserProfileModal';
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { UserProvider, useUser } from "@/contexts/UserContext";
import { initialize as initializeAdMob, showBanner, hideBanner, showInterstitialAd, preloadInterstitial } from './admobService';
import { initializeRevenueCat, checkPremiumStatus } from './services/revenueCatService';
import { getUserEmail } from './lib/userStorage';
import { useRatingPrompt } from './hooks/useRatingPrompt';

// ✅ Import déclenché IMMÉDIATEMENT au niveau module — avant même le mount de React.
// Le navigateur télécharge le bundle dès que App.tsx est parsé,
// en parallèle du rendu du fond et de l'hydratation React.
// Résultat : quand Suspense en a besoin, le bundle est souvent déjà prêt.
const OracleMystiqueAppPromise = import("@/pages/OracleMystiqueApp");
const OracleMystiqueApp = lazy(() => OracleMystiqueAppPromise);

// Pages secondaires — lazy classique, pas critiques au démarrage
const PaymentSuccessPage = lazy(() => import('./pages/PaymentSuccessPage'));
const PaymentCancelPage  = lazy(() => import('./pages/PaymentCancelPage'));
const NotFound           = lazy(() => import("@/pages/not-found"));

// ✅ Fallback totalement transparent — le fond reste visible pendant le chargement
const PageFallback = () => (
  <div style={{ minHeight: '100dvh' }} />
);

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

export function scrollToTop() {
  const root = document.querySelector('[data-scroll-root]') as HTMLElement | null;
  if (root) {
    root.scrollTop = 0;
    return;
  }
  window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
}

function Router({
  onStepChange,
  shouldShowAdBeforeReading,
  onReadingComplete,
  isPremium,
  wheelCounter,
  onWheelComplete,
  onOpenPremium,
  onOpenMenu,
  onOpenProfile,
  bannerHeight,
}: {
  onStepChange: (step: AppStep) => void;
  shouldShowAdBeforeReading: (oracleType: string) => Promise<boolean>;
  onReadingComplete: (oracleType: string) => void;
  isPremium: boolean;
  wheelCounter: number;
  onWheelComplete: () => void;
  onOpenPremium: () => void;
  onOpenMenu: () => void;
  onOpenProfile: () => void;
  bannerHeight: number;
}) {
  return (
    <Suspense fallback={<PageFallback />}>
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
            onOpenPremium={onOpenPremium}
            onOpenMenu={onOpenMenu}
            onOpenProfile={onOpenProfile}
            bannerHeight={bannerHeight}
          />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function AppContent() {
  const [isPremium, setIsPremium] = useState(false);
  const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);
  const [premiumOpenOnRestore, setPremiumOpenOnRestore] = useState(false);
  const [currentStep, setCurrentStep] = useState<AppStep>('landing');
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [bannerShown, setBannerShown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const { updatePremiumStatus } = useUser();

  const [oracleCounters, setOracleCounters] = useState<OracleCounters>({
    lunar: 0, wizard: 0, loveCalculator: 0, cardDrawing: 0, wheel: 0,
  });

  const { showRating, handleRate, handleClose } = useRatingPrompt({
    minUsageCount: 2, postponeDays: 3, daysAfterInstall: 2,
  });

  useEffect(() => {
    const initServices = async () => {
      await Promise.allSettled([initializeAdMob(), initializeRevenueCat()]);
      const savedEmail = await getUserEmail();
      if (savedEmail) {
        try {
          const status = await checkPremiumStatus(savedEmail);
          setIsPremium(status);
          updatePremiumStatus(status);
        } catch {
          const cached = localStorage.getItem(`tarotmystik_premium_${savedEmail.toLowerCase().trim()}`);
          if (cached) {
            const data = JSON.parse(cached);
            let premiumStatus = data.isPremium;
            if (data.expirationDate) {
              premiumStatus = new Date(data.expirationDate) >= new Date() && data.isPremium;
            }
            setIsPremium(premiumStatus);
            updatePremiumStatus(premiumStatus);
          }
        }
      }
    };
    initServices();
  }, []);

  useEffect(() => {
    if (isPremium) {
      if (bannerShown) { hideBanner(); setBannerShown(false); }
      return;
    }
    const noBannerPages = ['landing', 'name', 'date', 'gender'];
    const shouldShow = !noBannerPages.includes(currentStep);
    if (shouldShow && !bannerShown) {
      const timer = setTimeout(() => { showBanner(); setBannerShown(true); }, 2500);
      return () => clearTimeout(timer);
    }
    if (!shouldShow && bannerShown) { hideBanner(); setBannerShown(false); }
  }, [currentStep, isPremium, bannerShown]);

  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => { scrollToTop(); });
    });
  }, [currentStep]);

  useEffect(() => {
    if (!localStorage.getItem('notificationPermission') && currentStep === 'oracle') {
      setShowNotificationModal(true);
    }
  }, [currentStep]);

  useEffect(() => {
    if (currentStep !== 'oracle') {
      setIsMenuOpen(false);
      setIsProfileOpen(false);
    }
  }, [currentStep]);

  const shouldShowAdBeforeReading = async (oracleType: string): Promise<boolean> => {
    if (isPremium) return false;
    if (oracleType === 'wheel') return false;
    let counterKey: keyof OracleCounters;
    let shouldShowPub = false;
    const currentCount = oracleCounters[
      oracleType === 'loveOracle' || oracleType === 'threeCards' || oracleType === 'crossSpread'
        ? 'cardDrawing' : oracleType as keyof OracleCounters
    ];
    const nextCount = currentCount + 1;
    switch (oracleType) {
      case 'lunar': counterKey = 'lunar'; shouldShowPub = nextCount === 2 || (nextCount > 2 && (nextCount - 2) % 3 === 0); break;
      case 'wizard': counterKey = 'wizard'; shouldShowPub = nextCount === 2 || (nextCount > 2 && (nextCount - 2) % 3 === 0); break;
      case 'loveCalculator': counterKey = 'loveCalculator'; shouldShowPub = nextCount % 2 === 0; break;
      case 'loveOracle': case 'threeCards': case 'crossSpread': counterKey = 'cardDrawing'; shouldShowPub = nextCount === 2 || (nextCount > 2 && (nextCount - 2) % 3 === 0); break;
      default: return false;
    }
    if (shouldShowPub) { try { await showInterstitialAd(`before_${oracleType}`); } catch {} }
    const followingCount = nextCount + 1;
    let shouldPreload = false;
    switch (counterKey!) {
      case 'lunar': case 'wizard': case 'cardDrawing': shouldPreload = followingCount === 2 || (followingCount > 2 && (followingCount - 2) % 3 === 0); break;
      case 'loveCalculator': shouldPreload = followingCount % 2 === 0; break;
    }
    if (shouldPreload) {
      if ('requestIdleCallback' in window) (window as any).requestIdleCallback(() => preloadInterstitial());
      else setTimeout(() => preloadInterstitial(), 2000);
    }
    return shouldShowPub;
  };

  const handleReadingComplete = (oracleType: string) => {
    setOracleCounters(prev => {
      const n = { ...prev };
      switch (oracleType) {
        case 'lunar': n.lunar += 1; break;
        case 'wizard': n.wizard += 1; break;
        case 'loveCalculator': n.loveCalculator += 1; break;
        case 'loveOracle': case 'threeCards': case 'crossSpread': n.cardDrawing += 1; break;
        case 'wheel': n.wheel += 1; break;
      }
      return n;
    });
  };

  const handleWheelComplete     = () => handleReadingComplete('wheel');
  const handlePremiumActivated  = () => { setIsPremium(true); updatePremiumStatus(true); setIsPremiumModalOpen(false); };
  const handleOpenPremium       = (openOnRestore = false) => { setIsMenuOpen(false); setIsProfileOpen(false); setPremiumOpenOnRestore(openOnRestore); setIsPremiumModalOpen(true); };
  const handleOpenMenu          = () => { setIsProfileOpen(false); setIsMenuOpen(true); };
  const handleOpenProfile       = () => { setIsMenuOpen(false); setIsProfileOpen(true); };
  const handleCloseAll          = () => { setIsMenuOpen(false); setIsProfileOpen(false); };

  return (
    <div className="dark relative w-screen" style={{ height: '100dvh', overflow: 'hidden' }}>

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

      <MenuDrawer isOpen={isMenuOpen} onClose={handleCloseAll} onOpenPremium={handleOpenPremium} isPremium={isPremium} />
      {!isMenuOpen && isProfileOpen && <UserProfileModal isOpen={isProfileOpen} onClose={handleCloseAll} />}
      {showNotificationModal && <NotificationPermissionModal onClose={() => setShowNotificationModal(false)} />}
      {isPremiumModalOpen && (
        <PremiumModal isOpen={isPremiumModalOpen} onClose={() => setIsPremiumModalOpen(false)} onPurchase={handlePremiumActivated} openOnRestore={premiumOpenOnRestore} />
      )}
      <RatingModal isOpen={showRating} onClose={handleClose} onRate={handleRate} />
      <Toaster />

      <div
        data-scroll-root
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
          onOpenPremium={handleOpenPremium}
          onOpenMenu={handleOpenMenu}
          onOpenProfile={handleOpenProfile}
          bannerHeight={bannerShown ? 60 : 0}
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