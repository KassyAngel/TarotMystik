// src/pages/OracleMystiqueApp.tsx
// ✅ v2 — Lazy loading pages lourdes + scroll en haut à chaque changement d'étape

import { useState, useEffect, lazy, Suspense } from 'react';
import StarsBackground from '@/components/StarsBackground';
import { scrollToTop } from '@/App';
import { ZodiacSign, OracleCard } from '@shared/schema';
import { oracleData } from '@/data/oracleData';
import { useUser } from '@/contexts/UserContext';

// ✅ Pages légères — chargées immédiatement (onboarding critique)
import LandingPage from './LandingPage';
import NamePage from './NamePage';
import DatePage from './DatePage';
import GenderPage from './GenderPage';
import OracleSelection from './OracleSelection';

// ✅ Pages lourdes — lazy loaded, chargées seulement quand l'utilisateur y accède
const GameModeSelection     = lazy(() => import('./GameModeSelection'));
const CardGame              = lazy(() => import('./CardGame'));
const CrossSpreadGame       = lazy(() => import('@/components/CrossSpreadGame'));
const RevelationPage        = lazy(() => import('./RevelationPage'));
const InterpretationPage    = lazy(() => import('./InterpretationPage'));
const CrossSpreadInterpretation = lazy(() => import('./CrossSpreadInterpretation'));
const WheelPage             = lazy(() => import('./WheelPage'));
const LoveCalculatorPage    = lazy(() => import('./LoveCalculatorPage'));
const WizardPage            = lazy(() => import('./WizardPage'));
const LunarPhasePage        = lazy(() => import('./LunarPhasePage'));
const LunarCardGame         = lazy(() => import('./LunarCardGame'));
const LunarInterpretation   = lazy(() => import('./LunarInterpretation'));
const ResponsiveTest        = lazy(() => import('@/components/ResponsiveTest'));

// ✅ Fallback minimaliste — fond noir, pas de spinner distrayant
const PageFallback = () => (
  <div
    className="min-h-screen"
    style={{ background: '#080808' }}
  />
);

type AppStep =
  | 'landing' | 'name' | 'date' | 'gender'
  | 'oracle' | 'modeSelection' | 'game' | 'revelation' | 'interpretation'
  | 'wizard'
  | 'wheel'
  | 'loveCalculator'
  | 'lunarPhase' | 'lunarGame' | 'lunarInterpretation'
  | 'responsiveTest';

type CardBasedOracleType = 'loveOracle' | 'lunar' | 'runes';
type OracleType = CardBasedOracleType | 'wizard' | 'wheel' | 'loveCalculator';
type GameMode = 'classic' | 'cross';

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
  const [currentStep, setCurrentStep] = useState<AppStep>('landing');
  const { user, setUser, clearUser } = useUser();
  const [selectedOracle, setSelectedOracle] = useState<OracleType | ''>('');
  const [selectedGameMode, setSelectedGameMode] = useState<GameMode>('classic');
  const [selectedCardIndices, setSelectedCardIndices] = useState<number[]>([]);
  const [selectedLunarPhase, setSelectedLunarPhase] = useState<string>('');
  const [selectedLunarCard, setSelectedLunarCard] = useState<OracleCard | null>(null);

  const pagesWithOwnBackground = ['landing', 'name', 'date', 'gender'];
  const shouldShowStarsBackground = !pagesWithOwnBackground.includes(currentStep);

  // ✅ Scroll en haut à chaque changement d'étape
  // Double rAF pour attendre que la nouvelle page soit rendue
  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToTop();
      });
    });
  }, [currentStep]);

  const safeShowAdBeforeReading = async (oracleType: string): Promise<boolean> => {
    if (shouldShowAdBeforeReading) return await shouldShowAdBeforeReading(oracleType);
    return false;
  };

  const safeOnReadingComplete = (oracleType: string): void => {
    if (onReadingComplete) onReadingComplete(oracleType);
  };

  const safeOnWheelComplete = (): void => {
    if (onWheelComplete) onWheelComplete();
  };

  // ── Notifie App.tsx du step courant ──
  useEffect(() => {
    if (onStepChange) {
      const result = onStepChange(currentStep);
      if (result instanceof Promise) {
        result.catch(err => console.error('Error in onStepChange:', err));
      }
    }
  }, [currentStep, onStepChange]);

  // ── Restaure la session ──
  useEffect(() => {
    if (user.name && user.birthDate && user.gender) {
      setCurrentStep('oracle');
    }
  }, []);

  // ── Navigations ──
  const handleEnter = () => setCurrentStep('name');

  const handleNameSubmit = (name: string) => {
    setUser({ ...user, name });
    setCurrentStep('date');
  };

  const handleDateSubmit = (birthDate: string, zodiacSign?: ZodiacSign) => {
    setUser(zodiacSign ? { ...user, birthDate, zodiacSign } : { ...user, birthDate });
    setCurrentStep('gender');
  };

  const handleGenderSubmit = (gender: string) => {
    setUser({ ...user, gender });
    setCurrentStep('oracle');
  };

  const handleOracleSelect = async (oracleType: string) => {
    setSelectedOracle(oracleType as OracleType);
    if (oracleType === 'wizard') setCurrentStep('wizard');
    else if (oracleType === 'wheel') setCurrentStep('wheel');
    else if (oracleType === 'loveCalculator') setCurrentStep('loveCalculator');
    else if (oracleType === 'lunar') setCurrentStep('lunarPhase');
    else if (isCardBasedOracle(oracleType as OracleType)) setCurrentStep('modeSelection');
    else setCurrentStep('game');
  };

  const handleLunarPhaseSelect = async (phase: string) => {
    setSelectedLunarPhase(phase);
    await safeShowAdBeforeReading('lunar');
    setCurrentStep('lunarGame');
  };

  const handleLunarCardSelect = (data: { card: OracleCard; phase: string }) => {
    setSelectedLunarCard(data.card);
    setCurrentStep('lunarInterpretation');
  };

  const handleGameModeSelect = (mode: GameMode) => {
    setSelectedGameMode(mode);
    setCurrentStep('game');
  };

  const handleCardsSelected = (cardIndices: number[]) => {
    setSelectedCardIndices(cardIndices);
    setCurrentStep('revelation');
  };

  // ── Retours ──
  const handleRevealInterpretation = () => setCurrentStep('interpretation');
  const handleBackToCards          = () => setCurrentStep('revelation');
  const handleBackToOracle         = () => setCurrentStep('oracle');
  const handleBackToModeSelection  = () => setCurrentStep('modeSelection');
  const handleBackToLunarPhase     = () => setCurrentStep('lunarPhase');
  const handleBackToName           = () => setCurrentStep('name');
  const handleBackToDate           = () => setCurrentStep('date');
  const handleBackToGender         = () => setCurrentStep('gender');
  const handleBackToLunarPhaseFromInterpretation = () => {
    setSelectedLunarCard(null);
    setCurrentStep('lunarPhase');
  };

  const handleBackToHome = () => {
    clearUser();
    setCurrentStep('landing');
    setSelectedOracle('');
    setSelectedCardIndices([]);
    setSelectedLunarPhase('');
    setSelectedLunarCard(null);
  };

  const oracle = selectedOracle ? oracleData[selectedOracle] : null;
  const cardBasedOracles: CardBasedOracleType[] = ['loveOracle', 'lunar', 'runes'];
  const isCardBasedOracle = (type: OracleType | ''): type is CardBasedOracleType =>
    cardBasedOracles.includes(type as CardBasedOracleType);

  return (
    <div className="min-h-screen flex flex-col">
      {shouldShowStarsBackground && <StarsBackground />}

      {IS_DEV_MODE && (
        <button
          onClick={() => { localStorage.clear(); sessionStorage.clear(); window.location.reload(); }}
          className="fixed bottom-4 left-4 z-[9999] bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm"
          title="Reset"
        >
          🔄 RESET
        </button>
      )}

      <main
        className={`flex-grow flex flex-col ${
          currentStep === 'oracle'
            ? 'w-full p-0'
            : 'justify-center items-center max-w-6xl mx-auto p-5'
        }`}
      >
        {/* ✅ Suspense enveloppe TOUT le contenu lazy */}
        <Suspense fallback={<PageFallback />}>

          {currentStep === 'responsiveTest' && <ResponsiveTest />}

          {/* ── Onboarding — pas lazy ── */}
          {currentStep === 'landing' && <LandingPage onEnter={handleEnter} />}
          {currentStep === 'name'    && <NamePage onNext={handleNameSubmit} />}
          {currentStep === 'date'    && <DatePage onNext={handleDateSubmit} onBack={handleBackToName} />}
          {currentStep === 'gender'  && <GenderPage onNext={handleGenderSubmit} onBack={handleBackToDate} />}

          {/* ── Oracle — pas lazy (affiché souvent) ── */}
          {currentStep === 'oracle' && (
            <OracleSelection
              user={user}
              onOracleSelect={handleOracleSelect}
              onBack={handleBackToGender}
              onHome={handleBackToHome}
              isPremium={isPremium}
              onOpenPremium={onOpenPremium}
              onOpenMenu={onOpenMenu}
              onOpenProfile={onOpenProfile}
              bannerHeight={bannerHeight}
            />
          )}

          {/* ── Pages lourdes — lazy ── */}
          {currentStep === 'lunarPhase' && (
            <LunarPhasePage
              user={user}
              onPhaseSelect={handleLunarPhaseSelect}
              onBack={handleBackToOracle}
            />
          )}

          {currentStep === 'lunarGame' && (
            <LunarCardGame
              user={user}
              selectedPhase={selectedLunarPhase}
              onCardSelected={handleLunarCardSelect}
              onBack={handleBackToLunarPhase}
              onSaveReading={onSaveReading}
              onReadingComplete={safeOnReadingComplete}
              shouldShowAdBeforeReading={safeShowAdBeforeReading}
            />
          )}

          {currentStep === 'lunarInterpretation' && selectedLunarCard && (
            <LunarInterpretation
              user={user}
              selectedCard={selectedLunarCard}
              selectedPhase={selectedLunarPhase}
              onBack={handleBackToLunarPhaseFromInterpretation}
              onHome={handleBackToOracle}
            />
          )}

          {currentStep === 'modeSelection' && oracle && isCardBasedOracle(selectedOracle) && (
            <GameModeSelection
              user={user}
              oracleTitle={oracle.title}
              oracleDescription={oracle.description}
              onModeSelect={handleGameModeSelect}
              onBack={handleBackToOracle}
            />
          )}

          {currentStep === 'game' && oracle && isCardBasedOracle(selectedOracle) && (
            selectedGameMode === 'classic' ? (
              <CardGame
                user={user}
                oracle={oracle}
                oracleType={selectedOracle}
                onCardsSelected={handleCardsSelected}
                onSaveReading={onSaveReading}
                onBack={handleBackToModeSelection}
                shouldShowAdBeforeReading={safeShowAdBeforeReading}
                onReadingComplete={safeOnReadingComplete}
              />
            ) : (
              <CrossSpreadGame
                user={user}
                oracle={oracle}
                oracleType={selectedOracle}
                onCardsSelected={handleCardsSelected}
                onSaveReading={onSaveReading}
                onBack={handleBackToModeSelection}
                shouldShowAdBeforeReading={safeShowAdBeforeReading}
                onReadingComplete={safeOnReadingComplete}
              />
            )
          )}

          {currentStep === 'revelation' && oracle && isCardBasedOracle(selectedOracle) && (
            <RevelationPage
              user={user}
              oracle={oracle}
              oracleType={selectedOracle}
              selectedCardIndices={selectedCardIndices}
              onBack={handleBackToOracle}
              onRevealInterpretation={handleRevealInterpretation}
            />
          )}

          {currentStep === 'interpretation' && oracle && isCardBasedOracle(selectedOracle) && (
            selectedCardIndices.length === 5 ? (
              <CrossSpreadInterpretation
                user={user}
                oracle={oracle}
                oracleType={selectedOracle}
                selectedCardIndices={selectedCardIndices}
                selectedCards={selectedCardIndices.map(i => oracle.cards[i])}
                onHome={handleBackToOracle}
                onBackToMode={handleBackToModeSelection}
                onSaveReading={onSaveReading}
                shouldShowAdBeforeReading={safeShowAdBeforeReading}
                onReadingComplete={safeOnReadingComplete}
              />
            ) : (
              <InterpretationPage
                user={user}
                oracle={oracle}
                oracleType={selectedOracle}
                selectedCardIndices={selectedCardIndices}
                selectedCards={selectedCardIndices.map(i => oracle.cards[i])}
                onBack={handleBackToCards}
                onHome={handleBackToOracle}
                onBackToMode={handleBackToModeSelection}
                onSaveReading={onSaveReading}
                shouldShowAdBeforeReading={safeShowAdBeforeReading}
                onReadingComplete={safeOnReadingComplete}
              />
            )
          )}

          {currentStep === 'wizard' && (
            <WizardPage
              user={user}
              onBack={handleBackToOracle}
              onSaveReading={onSaveReading}
              shouldShowAdBeforeReading={safeShowAdBeforeReading}
              onReadingComplete={safeOnReadingComplete}
            />
          )}

          {currentStep === 'wheel' && (
            <WheelPage
              user={user}
              onBack={handleBackToOracle}
              isPremium={isPremium}
              onReadingComplete={safeOnReadingComplete}
              wheelCounter={wheelCounter}
              onWheelComplete={safeOnWheelComplete}
            />
          )}

          {currentStep === 'loveCalculator' && (
            <LoveCalculatorPage
              user={user}
              onBack={handleBackToOracle}
              onSaveReading={onSaveReading}
              isPremium={isPremium}
              shouldShowAdBeforeReading={safeShowAdBeforeReading}
              onReadingComplete={safeOnReadingComplete}
            />
          )}

        </Suspense>
      </main>
    </div>
  );
}