import { useState, useEffect } from "react";
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import PaymentCancelPage from './pages/PaymentCancelPage';
import PremiumModal from './components/PremiumModal';
import NotificationPermissionModal from './components/NotificationPermissionModal';
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

  useEffect(() => {
    const initServices = async () => {
      try {
        await initializeAdMob();
        await initializeRevenueCat();
        console.log('✅ Services AdMob + RevenueCat initialisés');
      } catch (error) {
        console.error('❌ Erreur initialisation services:', error);
      }
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

    // Pages où la bannière NE doit PAS s'afficher (onboarding uniquement)
    const noBannerPages = ['landing', 'name', 'date', 'gender'];
    const shouldShowBanner = !noBannerPages.includes(currentStep);

    // Afficher la bannière sur toutes les pages après l'onboarding
    if (shouldShowBanner && !bannerShown) {
      console.log(`🎯 Page "${currentStep}" atteinte → Affichage de la bannière permanente`);
      const timer = setTimeout(() => {
        showBanner();
        setBannerShown(true);
        console.log('📺 Bannière affichée en permanence (utilisateur gratuit)');
      }, 500);

      return () => clearTimeout(timer);
    }

    // Cacher la bannière uniquement si on retourne sur les pages d'onboarding
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

  /**
   * 🎯 Vérifie si on doit afficher une pub AVANT le tirage
   * ✅ FIX : On vérifie le PROCHAIN compteur (nextCount) au lieu du current
   */
  const shouldShowAdBeforeReading = async (oracleType: string): Promise<boolean> => {
    if (isPremium) {
      console.log('👑 Utilisateur Premium - Pas de pub');
      return false;
    }

    console.log(`🎯 [PUB CHECK] Oracle: "${oracleType}" | Compteurs actuels:`, oracleCounters);

    // La roue est un cas spécial (pub récompensée au 1er tirage, gérée dans WheelPage)
    if (oracleType === 'wheel') {
      console.log(`⏭️ "wheel" : pub récompensée gérée dans WheelPage`);
      return false;
    }

    let counterKey: keyof OracleCounters;
    let shouldShowPub = false;

    // ✅ FIX : On calcule le PROCHAIN compteur pour savoir si on doit afficher la pub MAINTENANT
    const currentCount = oracleCounters[oracleType === 'loveOracle' || oracleType === 'threeCards' || oracleType === 'crossSpread' ? 'cardDrawing' : oracleType as keyof OracleCounters];
    const nextCount = currentCount + 1; // Le compteur qui sera après ce tirage

    switch (oracleType) {
      case 'lunar':
        counterKey = 'lunar';
        // Pub au 2ème tirage (nextCount=2), puis tous les 3 (nextCount=5, 8, 11...)
        shouldShowPub = nextCount === 2 || (nextCount > 2 && (nextCount - 2) % 3 === 0);
        console.log(`📊 LUNAR: current=${currentCount}, next=${nextCount} | Pub: ${shouldShowPub ? 'OUI ✅' : 'NON ❌'}`);
        break;

      case 'wizard':
        counterKey = 'wizard';
        // Pub au 2ème tirage (nextCount=2), puis tous les 3 (nextCount=5, 8, 11...)
        shouldShowPub = nextCount === 2 || (nextCount > 2 && (nextCount - 2) % 3 === 0);
        console.log(`📊 WIZARD: current=${currentCount}, next=${nextCount} | Pub: ${shouldShowPub ? 'OUI ✅' : 'NON ❌'}`);
        break;

      case 'loveCalculator':
        counterKey = 'loveCalculator';
        // Pub tous les 2 tirages (nextCount=2, 4, 6, 8...)
        shouldShowPub = nextCount % 2 === 0;
        console.log(`📊 LOVE_CALCULATOR: current=${currentCount}, next=${nextCount} | Pub: ${shouldShowPub ? 'OUI ✅' : 'NON ❌'}`);
        break;

      case 'loveOracle':
      case 'threeCards':
      case 'crossSpread':
        counterKey = 'cardDrawing';
        // Pub au 2ème tirage (nextCount=2), puis tous les 3 (nextCount=5, 8, 11...)
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

    // Pré-charger la prochaine pub
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
      setTimeout(() => preloadInterstitial(), 1000);
    }

    return shouldShowPub;
  };

  /**
   * 📈 Incrémenter le compteur APRÈS un tirage
   */
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

  /**
   * 🎡 Callback pour la roue
   */
  const handleWheelComplete = () => {
    console.log(`🎡 [WHEEL] Tirage terminé`);
    handleReadingComplete('wheel');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <UserProvider>
          <TooltipProvider>
            <div className="dark relative w-screen h-screen overflow-hidden">
              {/* ✅ CSS pour éviter que la bannière cache les boutons */}
              {!isPremium && bannerShown && (
                <style>{`
                  /* ✅ Espace réservé pour la bannière AdMob (60px) + marge de sécurité (50px) */
                  .main-content {
                    padding-bottom: 110px !important;
                  }

                  /* ✅ Classe pour les éléments qui doivent rester visibles */
                  .pb-safe {
                    padding-bottom: 110px !important;
                  }

                  /* ✅ Responsive desktop */
                  @media (min-width: 640px) {
                    .main-content, .pb-safe {
                      padding-bottom: 120px !important;
                    }
                  }

                  /* ⚠️ CRITIQUE : Empêcher l'overlap des boutons avec la bannière */
                  button, a, input, textarea {
                    position: relative;
                    z-index: 10;
                  }

                  /* ⚠️ Bannière au-dessus du fond mais sous les overlays */
                  #admob-banner {
                    z-index: 5 !important;
                  }
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

              <Toaster />

              <div className={`w-full h-full overflow-y-auto ${!isPremium && bannerShown ? 'main-content' : ''}`}>
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