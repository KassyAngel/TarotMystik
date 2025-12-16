// client/src/App.tsx - VERSION SANS API
import { useState, useEffect } from "react";
import GrimoireModal from './pages/GrimoireModal';
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
import { getDeviceId } from '@/lib/deviceId';

export interface Reading {
  id: string;
  type: 'loveOracle' | 'oracle' | 'pendulum' | 'angels' | 'runes' | 'wheel' | 'loveCalculator';
  oracleTitle?: string;
  date: Date;
  cards?: string[];
  question?: string;
  answer?: string;
  notes: string;
  isFavorite: boolean;
}

type AppStep =
  | 'landing' | 'name' | 'date' | 'gender'
  | 'oracle' | 'game' | 'revelation' | 'interpretation'
  | 'pendulum' | 'wheel' | 'loveCalculator';  

function Router({ onSaveReading, onStepChange, shouldShowAdBeforeReading, isPremium }: {
  onSaveReading: (reading: any) => Promise<void>;
  onStepChange: (step: AppStep) => void;
  shouldShowAdBeforeReading: (oracleType: string) => Promise<boolean>;
  isPremium: boolean;
}) {
  return (
    <Switch>
      <Route path="/success" component={PaymentSuccessPage} />
      <Route path="/cancel" component={PaymentCancelPage} />
      <Route path="/">
        <OracleMystiqueApp
          onSaveReading={onSaveReading}
          onStepChange={onStepChange as any}
          shouldShowAdBeforeReading={shouldShowAdBeforeReading}
          isPremium={isPremium}
        />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

// ✅ Stockage local pour les lectures
const STORAGE_KEY = 'tarotmystik_readings';

function loadReadingsFromStorage(): Reading[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    const parsed = JSON.parse(stored);
    return parsed.map((r: any) => ({
      ...r,
      date: new Date(r.date)
    }));
  } catch (error) {
    console.error('❌ Erreur chargement lectures:', error);
    return [];
  }
}

function saveReadingsToStorage(readings: Reading[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(readings));
    console.log('✅ Lectures sauvegardées:', readings.length);
  } catch (error) {
    console.error('❌ Erreur sauvegarde lectures:', error);
  }
}

function App() {
  const [isPremium] = useState(false); // TODO: Intégrer RevenueCat pour vérifier le statut
  const [readings, setReadings] = useState<Reading[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isGrimoireOpen, setIsGrimoireOpen] = useState(false);
  const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<AppStep>('landing');
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [readingCount, setReadingCount] = useState(0);
  const [bannerShown, setBannerShown] = useState(false);
  const [deviceId, setDeviceId] = useState<string>('');

  // ✅ Initialiser Device ID
  useEffect(() => {
    const initDeviceId = async () => {
      const id = await getDeviceId();
      setDeviceId(id);
      console.log('🔑 Device ID initialisé:', id);
    };
    initDeviceId();
  }, []);

  // ✅ Initialiser services (AdMob + RevenueCat)
  useEffect(() => {
    const initServices = async () => {
      try {
        await initializeAdMob();
        await initializeRevenueCat();
        console.log('✅ Services AdMob + RevenueCat initialisés');

        // TODO: Vérifier le statut Premium via RevenueCat
        // setIsPremium(await checkPremiumStatus());
      } catch (error) {
        console.error('❌ Erreur initialisation services:', error);
      }
    };
    initServices();
  }, []);

  // ✅ Gérer l'affichage de la bannière
  useEffect(() => {
    if (isPremium) {
      console.log('👑 Premium actif : bannière cachée');
      if (bannerShown) {
        hideBanner();
        setBannerShown(false);
      }
      return;
    }

    if (currentStep === 'oracle' && !bannerShown) {
      console.log('🎯 Page Oracle atteinte → Affichage de la bannière');
      const timer = setTimeout(() => {
        showBanner();
        setBannerShown(true);
        console.log('📺 Bannière affichée (utilisateur gratuit)');
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [currentStep, isPremium, bannerShown]);

  const showTopBar = !['landing', 'name', 'date', 'gender'].includes(currentStep);

  // ✅ Vérifier permissions notifications
  useEffect(() => {
    const checkNotificationPermission = () => {
      const permission = localStorage.getItem('notificationPermission');
      if (!permission && currentStep === 'oracle') {
        setShowNotificationModal(true);
      }
    };
    checkNotificationPermission();
  }, [currentStep]);

  // ✅ Charger les lectures depuis le localStorage
  useEffect(() => {
    if (!deviceId) return;

    console.log('📖 Chargement lectures depuis localStorage...');
    const stored = loadReadingsFromStorage();
    setReadings(stored);
    setIsLoading(false);
    console.log('✅ Lectures chargées:', stored.length);
  }, [deviceId]);

  // ✅ Sauvegarder une note
  const handleSaveNote = async (readingId: string, note: string) => {
    setReadings(prev => {
      const updated = prev.map(r => 
        r.id === readingId ? { ...r, notes: note } : r
      );
      saveReadingsToStorage(updated);
      return updated;
    });
    console.log('✅ Note sauvegardée pour:', readingId);
  };

  // ✅ Toggle favori
  const handleToggleFavorite = async (readingId: string) => {
    setReadings(prev => {
      const updated = prev.map(r =>
        r.id === readingId ? { ...r, isFavorite: !r.isFavorite } : r
      );
      saveReadingsToStorage(updated);
      return updated;
    });
    console.log('✅ Favori togglé pour:', readingId);
  };

  // ✅ Vider le grimoire
  const clearAllReadings = async () => {
    console.log('🗑️ Suppression de tous les tirages du Grimoire...');
    setReadings([]);
    localStorage.removeItem(STORAGE_KEY);
    console.log('🔥 Grimoire vidé !');
  };

  // ✅ Vérifier si on doit afficher une pub
  const shouldShowAdBeforeReading = async (oracleType: string): Promise<boolean> => {
    console.log(`🎯 [PUB CHECK] Oracle sélectionné: "${oracleType}"`);

    if (isPremium) {
      console.log('👑 Premium actif : pas de pub');
      return false;
    }

    if (oracleType === 'wheel') {  
      console.log(`⏭️ "${oracleType}" exclu : pas de pub interstitielle`);
      return false;
    }

    const nextCount = readingCount + 1;
    const shouldShow = nextCount % 3 === 0;

    console.log(`📊 Compteur: ${readingCount} → ${nextCount} | Pub: ${shouldShow ? 'OUI ✅' : 'NON ❌'}`);

    if (shouldShow) {
      console.log('🎬 Affichage pub interstitielle AVANT le tirage');
      try {
        await showInterstitialAd(`before_${oracleType}`);
        console.log('✅ Pub interstitielle affichée avec succès');
      } catch (error) {
        console.error('❌ Erreur pub interstitielle:', error);
      }
    }

    if ((nextCount + 1) % 3 === 0) {
      console.log(`🔄 Pré-chargement pub pour le tirage #${nextCount + 1}`);
      setTimeout(() => preloadInterstitial(), 1000);
    }

    return shouldShow;
  };

  // ✅ Ajouter une lecture
  const addReading = async (reading: Omit<Reading, 'id' | 'notes' | 'isFavorite'>) => {
    const typesExcludedFromGrimoire = ['pendulum', 'mysteryDice', 'wheel'];
    const shouldSaveInGrimoire = !typesExcludedFromGrimoire.includes(reading.type);

    const typesCountedForAds = ['loveOracle', 'lunar', 'runes', 'pendulum'];
    const shouldIncrementCounter = typesCountedForAds.includes(reading.type);

    console.log(`📤 Nouveau tirage: "${reading.type}" | Grimoire: ${shouldSaveInGrimoire} | Compteur: ${shouldIncrementCounter}`);

    if (shouldSaveInGrimoire) {
      const newReading: Reading = {
        ...reading,
        id: `reading_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`,
        notes: '',
        isFavorite: false
      };

      setReadings(prev => {
        const updated = [newReading, ...prev];
        saveReadingsToStorage(updated);
        return updated;
      });

      console.log('✅ Tirage enregistré dans le Grimoire:', newReading.id);
    }

    if (shouldIncrementCounter) {
      setReadingCount(prev => {
        const newCount = prev + 1;
        console.log(`📊 ✅ Compteur mis à jour: ${prev} → ${newCount}`);
        return newCount;
      });
    }
  };

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gray-900">
        <div className="text-purple-400 text-xl">Chargement...</div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <UserProvider>
          <TooltipProvider>
            <div className="dark relative w-screen h-screen overflow-hidden">
              {!isPremium && bannerShown && (
                <style>{`
                  .main-content {
                    padding-bottom: 110px !important;
                  }
                  @media (min-width: 640px) {
                    .main-content {
                      padding-bottom: 120px !important;
                    }
                  }
                `}</style>
              )}

              {showTopBar && (
                <TopBar
                  onOpenGrimoire={() => setIsGrimoireOpen(true)}
                  onOpenPremium={() => setIsPremiumModalOpen(true)}
                  isPremium={isPremium}
                />
              )}

              {showNotificationModal && (
                <NotificationPermissionModal
                  onClose={() => setShowNotificationModal(false)}
                />
              )}

              {isGrimoireOpen && (
                <GrimoireModal
                  isPremium={isPremium}
                  readings={readings}
                  onSaveNote={handleSaveNote}
                  onToggleFavorite={handleToggleFavorite}
                  onClose={() => setIsGrimoireOpen(false)}
                  onClearAll={clearAllReadings}
                />
              )}

              {isPremiumModalOpen && (
                <PremiumModal
                  isOpen={isPremiumModalOpen}
                  onClose={() => setIsPremiumModalOpen(false)}
                  onPurchase={() => {
                    setIsPremiumModalOpen(false);
                    window.location.reload();
                  }}
                />
              )}

              <Toaster />

              <div className="w-full h-full overflow-y-auto">
                <Router
                  onSaveReading={addReading}
                  onStepChange={setCurrentStep}
                  shouldShowAdBeforeReading={shouldShowAdBeforeReading}
                  isPremium={isPremium}
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