// src/pages/OracleMystiqueApp.tsx
// ✅ v6 — Layout corrigé + préchargement agressif au step oracle

import { useState, useEffect, lazy, Suspense } from 'react';
import { scrollToTop } from '@/App';
import { ZodiacSign, OracleCard } from '@shared/schema';
import { oracleData } from '@/data/oracleData';
import { useUser } from '@/contexts/UserContext';

// Pages légères — import direct, zéro délai
import LandingPage      from './LandingPage';
import NamePage         from './NamePage';
import DatePage         from './DatePage';
import GenderPage       from './GenderPage';
import OracleSelection  from './OracleSelection';

// Pages lourdes — lazy, mais préchargées dès le step oracle
const GameModeSelection         = lazy(() => import('./GameModeSelection'));
const CardGame                  = lazy(() => import('./CardGame'));
const CrossSpreadGame           = lazy(() => import('@/components/CrossSpreadGame'));
const RevelationPage            = lazy(() => import('./RevelationPage'));
const InterpretationPage        = lazy(() => import('./InterpretationPage'));
const CrossSpreadInterpretation = lazy(() => import('./CrossSpreadInterpretation'));
const WheelPage                 = lazy(() => import('./WheelPage'));
const LoveCalculatorPage        = lazy(() => import('./LoveCalculatorPage'));
const WizardPage                = lazy(() => import('./WizardPage'));
const LunarPhasePage            = lazy(() => import('./LunarPhasePage'));
const LunarCardGame             = lazy(() => import('./LunarCardGame'));
const LunarInterpretation       = lazy(() => import('./LunarInterpretation'));
const ResponsiveTest            = lazy(() => import('@/components/ResponsiveTest'));

// Fallback transparent — pas de flash blanc
const PageFallback = () => <div style={{ minHeight: '100dvh' }} />;

type AppStep =
  | 'landing' | 'name' | 'date' | 'gender'
  | 'oracle' | 'modeSelection' | 'game' | 'revelation' | 'interpretation'
  | 'wizard' | 'wheel' | 'loveCalculator'
  | 'lunarPhase' | 'lunarGame' | 'lunarInterpretation'
  | 'responsiveTest';

type CardBasedOracleType = 'loveOracle' | 'lunar' | 'runes';
type OracleType = CardBasedOracleType | 'wizard' | 'wheel' | 'loveCalculator';
type GameMode = 'classic' | 'cross';

// ✅ Pages qui prennent toute la largeur sans padding ni centrage
const FULL_WIDTH_STEPS: AppStep[] = ['oracle'];

interface OracleMystiqueAppProps {
  onSaveReading?: (reading: any) => Promise<void>;
  onStepChange?: ((step: AppStep) => void) | ((step: AppStep) => Promise<void>);
  shouldShowAdBeforeReading?: (oracleType: string) => Promise<boolean>;
  onReadingComplete?: (oracleType: string) => void;
  isPremium?: boolean;
  wheelCounter?: number;
  onWheelComplete?: () => void;
  onOpenPremium?: () => void;
  onOpenMenu?: () => void;
  bannerHeight?: number;
  onOpenProfile?: () => void;
}

const IS_DEV_MODE = import.meta.env.DEV;

export default function OracleMystiqueApp({
  onSaveReading,
  onStepChange,
  shouldShowAdBeforeReading,
  onReadingComplete,
  isPremium = false,
  wheelCounter = 0,
  onWheelComplete,
  onOpenPremium,
  onOpenMenu,
  onOpenProfile,
  bannerHeight = 0,
}: OracleMystiqueAppProps) {
  const { user, setUser, clearUser } = useUser();

  const [currentStep, setCurrentStep] = useState<AppStep>(() => {
    if (user?.name && user?.birthDate && user?.gender) return 'oracle';
    return 'landing';
  });

  const [selectedOracle, setSelectedOracle]         = useState<OracleType | ''>('');
  const [selectedGameMode, setSelectedGameMode]     = useState<GameMode>('classic');
  const [selectedCardIndices, setSelectedCardIndices] = useState<number[]>([]);
  const [selectedLunarPhase, setSelectedLunarPhase] = useState<string>('');
  const [selectedLunarCard, setSelectedLunarCard]   = useState<OracleCard | null>(null);

  // Scroll haut à chaque changement
  useEffect(() => {
    requestAnimationFrame(() => requestAnimationFrame(() => scrollToTop()));
  }, [currentStep]);

  // ✅ Préchargement agressif dès que l'user arrive sur la grille oracle
  // Tous les bundles lourds sont téléchargés en idle → clic = instantané
  useEffect(() => {
    if (currentStep !== 'oracle') return;
    const preload = () => {
      import('./GameModeSelection');
      import('./CardGame');
      import('@/components/CrossSpreadGame');
      import('./RevelationPage');
      import('./InterpretationPage');
      import('./CrossSpreadInterpretation');
      import('./WheelPage');
      import('./LoveCalculatorPage');
      import('./WizardPage');
      import('./LunarPhasePage');
      import('./LunarCardGame');
      import('./LunarInterpretation');
    };
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(preload, { timeout: 2000 });
    } else {
      setTimeout(preload, 600);
    }
  }, [currentStep]);

  // Préchargement anticipé dès gender (étape précédente)
  useEffect(() => {
    if (currentStep === 'gender') import('./OracleSelection');
    if (currentStep === 'modeSelection') {
      import('./CardGame');
      import('@/components/CrossSpreadGame');
    }
  }, [currentStep]);

  // Notifie App.tsx du step courant
  useEffect(() => {
    if (!onStepChange) return;
    const result = onStepChange(currentStep);
    if (result instanceof Promise) result.catch(console.error);
  }, [currentStep, onStepChange]);

  const safeShowAd = async (type: string): Promise<boolean> =>
    shouldShowAdBeforeReading ? await shouldShowAdBeforeReading(type) : false;

  const safeReadingComplete = (type: string) => onReadingComplete?.(type);
  const safeWheelComplete   = ()              => onWheelComplete?.();

  // Handlers navigation
  const handleEnter          = ()              => setCurrentStep('name');
  const handleNameSubmit     = (name: string) => { setUser({ ...user, name }); setCurrentStep('date'); };
  const handleDateSubmit     = (birthDate: string, zodiacSign?: ZodiacSign) => {
    setUser(zodiacSign ? { ...user, birthDate, zodiacSign } : { ...user, birthDate });
    setCurrentStep('gender');
  };
  const handleGenderSubmit   = (gender: string) => { setUser({ ...user, gender }); setCurrentStep('oracle'); };

  const handleOracleSelect = async (oracleType: string) => {
    setSelectedOracle(oracleType as OracleType);
    if      (oracleType === 'wizard')          setCurrentStep('wizard');
    else if (oracleType === 'wheel')           setCurrentStep('wheel');
    else if (oracleType === 'loveCalculator')  setCurrentStep('loveCalculator');
    else if (oracleType === 'lunar')           setCurrentStep('lunarPhase');
    else if (isCardBased(oracleType as OracleType)) setCurrentStep('modeSelection');
    else                                       setCurrentStep('game');
  };

  const handleLunarPhaseSelect = async (phase: string) => {
    setSelectedLunarPhase(phase);
    await safeShowAd('lunar');
    setCurrentStep('lunarGame');
  };

  const handleLunarCardSelect  = (data: { card: OracleCard; phase: string }) => {
    setSelectedLunarCard(data.card);
    setCurrentStep('lunarInterpretation');
  };

  const handleGameModeSelect   = (mode: GameMode)       => { setSelectedGameMode(mode); setCurrentStep('game'); };
  const handleCardsSelected    = (indices: number[])    => { setSelectedCardIndices(indices); setCurrentStep('revelation'); };
  const handleRevealInterp     = ()                     => setCurrentStep('interpretation');

  const goTo = (step: AppStep) => () => setCurrentStep(step);

  const handleBackToHome = () => {
    clearUser();
    setCurrentStep('landing');
    setSelectedOracle('');
    setSelectedCardIndices([]);
    setSelectedLunarPhase('');
    setSelectedLunarCard(null);
  };

  const oracle      = selectedOracle ? oracleData[selectedOracle] : null;
  const cardBased   = ['loveOracle', 'lunar', 'runes'] as CardBasedOracleType[];
  const isCardBased = (t: OracleType | ''): t is CardBasedOracleType => cardBased.includes(t as CardBasedOracleType);
  const isFullWidth = FULL_WIDTH_STEPS.includes(currentStep);

  return (
    <div style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>

      {IS_DEV_MODE && (
        <button
          onClick={() => { localStorage.clear(); sessionStorage.clear(); window.location.reload(); }}
          className="fixed bottom-4 left-4 z-[9999] bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm"
        >
          🔄 RESET
        </button>
      )}

      {/* ✅ Layout : pleine largeur pour oracle, centré+paddé pour le reste */}
      <main
        style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          ...(isFullWidth
            ? { width: '100%', padding: 0 }
            : {
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '72rem',
                margin: '0 auto',
                padding: '1.25rem',
              }
          ),
        }}
      >
        <Suspense fallback={<PageFallback />}>

          {currentStep === 'responsiveTest' && <ResponsiveTest />}

          {currentStep === 'landing' && <LandingPage onEnter={handleEnter} />}
          {currentStep === 'name'    && <NamePage onNext={handleNameSubmit} />}
          {currentStep === 'date'    && <DatePage onNext={handleDateSubmit} onBack={goTo('name')} />}
          {currentStep === 'gender'  && <GenderPage onNext={handleGenderSubmit} onBack={goTo('date')} />}

          {currentStep === 'oracle' && (
            <OracleSelection
              user={user}
              onOracleSelect={handleOracleSelect}
              onBack={goTo('gender')}
              onHome={handleBackToHome}
              isPremium={isPremium}
              onOpenPremium={onOpenPremium}
              onOpenMenu={onOpenMenu}
              onOpenProfile={onOpenProfile}
              bannerHeight={bannerHeight}
            />
          )}

          {currentStep === 'lunarPhase' && (
            <LunarPhasePage user={user} onPhaseSelect={handleLunarPhaseSelect} onBack={goTo('oracle')} />
          )}

          {currentStep === 'lunarGame' && (
            <LunarCardGame
              user={user}
              selectedPhase={selectedLunarPhase}
              onCardSelected={handleLunarCardSelect}
              onBack={goTo('lunarPhase')}
              onSaveReading={onSaveReading}
              onReadingComplete={safeReadingComplete}
              shouldShowAdBeforeReading={safeShowAd}
            />
          )}

          {currentStep === 'lunarInterpretation' && selectedLunarCard && (
            <LunarInterpretation
              user={user}
              selectedCard={selectedLunarCard}
              selectedPhase={selectedLunarPhase}
              onBack={() => { setSelectedLunarCard(null); setCurrentStep('lunarPhase'); }}
              onHome={goTo('oracle')}
            />
          )}

          {currentStep === 'modeSelection' && oracle && isCardBased(selectedOracle) && (
            <GameModeSelection
              user={user}
              oracleTitle={oracle.title}
              oracleDescription={oracle.description}
              onModeSelect={handleGameModeSelect}
              onBack={goTo('oracle')}
            />
          )}

          {currentStep === 'game' && oracle && isCardBased(selectedOracle) && (
            selectedGameMode === 'classic' ? (
              <CardGame
                user={user} oracle={oracle} oracleType={selectedOracle}
                onCardsSelected={handleCardsSelected} onSaveReading={onSaveReading}
                onBack={goTo('modeSelection')} shouldShowAdBeforeReading={safeShowAd}
                onReadingComplete={safeReadingComplete}
              />
            ) : (
              <CrossSpreadGame
                user={user} oracle={oracle} oracleType={selectedOracle}
                onCardsSelected={handleCardsSelected} onSaveReading={onSaveReading}
                onBack={goTo('modeSelection')} shouldShowAdBeforeReading={safeShowAd}
                onReadingComplete={safeReadingComplete}
              />
            )
          )}

          {currentStep === 'revelation' && oracle && isCardBased(selectedOracle) && (
            <RevelationPage
              user={user} oracle={oracle} oracleType={selectedOracle}
              selectedCardIndices={selectedCardIndices}
              onBack={goTo('oracle')} onRevealInterpretation={handleRevealInterp}
            />
          )}

          {currentStep === 'interpretation' && oracle && isCardBased(selectedOracle) && (
            selectedCardIndices.length === 5 ? (
              <CrossSpreadInterpretation
                user={user} oracle={oracle} oracleType={selectedOracle}
                selectedCardIndices={selectedCardIndices}
                selectedCards={selectedCardIndices.map(i => oracle.cards[i])}
                onHome={goTo('oracle')} onBackToMode={goTo('modeSelection')}
                onSaveReading={onSaveReading} shouldShowAdBeforeReading={safeShowAd}
                onReadingComplete={safeReadingComplete}
              />
            ) : (
              <InterpretationPage
                user={user} oracle={oracle} oracleType={selectedOracle}
                selectedCardIndices={selectedCardIndices}
                selectedCards={selectedCardIndices.map(i => oracle.cards[i])}
                onBack={goTo('revelation')} onHome={goTo('oracle')}
                onBackToMode={goTo('modeSelection')} onSaveReading={onSaveReading}
                shouldShowAdBeforeReading={safeShowAd}
                onReadingComplete={safeReadingComplete}
              />
            )
          )}

          {currentStep === 'wizard' && (
            <WizardPage
              user={user} onBack={goTo('oracle')} onSaveReading={onSaveReading}
              shouldShowAdBeforeReading={safeShowAd} onReadingComplete={safeReadingComplete}
            />
          )}

          {currentStep === 'wheel' && (
            <WheelPage
              user={user} onBack={goTo('oracle')} isPremium={isPremium}
              onReadingComplete={safeReadingComplete}
              wheelCounter={wheelCounter} onWheelComplete={safeWheelComplete}
            />
          )}

          {currentStep === 'loveCalculator' && (
            <LoveCalculatorPage
              user={user} onBack={goTo('oracle')} onSaveReading={onSaveReading}
              isPremium={isPremium} shouldShowAdBeforeReading={safeShowAd}
              onReadingComplete={safeReadingComplete}
            />
          )}

        </Suspense>
      </main>
    </div>
  );
}