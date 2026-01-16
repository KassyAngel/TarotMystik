import { useState, useEffect } from 'react';
import StarsBackground from '@/components/StarsBackground';
import LandingPage from './LandingPage';
import NamePage from './NamePage';
import DatePage from './DatePage';
import GenderPage from './GenderPage';
import OracleSelection from './OracleSelection';
import GameModeSelection from './GameModeSelection';
import CardGame from './CardGame';
import CrossSpreadGame from '@/components/CrossSpreadGame';
import RevelationPage from './RevelationPage';
import InterpretationPage from './InterpretationPage';
import CrossSpreadInterpretation from './CrossSpreadInterpretation';
import WheelPage from './WheelPage';
import LoveCalculatorPage from './LoveCalculatorPage';
import WizardPage from './WizardPage';
import LunarPhasePage from './LunarPhasePage';
import LunarCardGame from './LunarCardGame';
import LunarInterpretation from './LunarInterpretation';
import ResponsiveTest from '@/components/ResponsiveTest';
import { ZodiacSign, OracleCard } from '@shared/schema';
import { oracleData } from '@/data/oracleData';
import { useUser } from '@/contexts/UserContext';

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
}

export default function OracleMystiqueApp({ 
  onSaveReading, 
  onStepChange,
  shouldShowAdBeforeReading,
  onReadingComplete,
  isPremium = false,
  wheelCounter = 0,
  onWheelComplete
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

  // 🛡️ Wrappers de sécurité pour garantir que les fonctions ne sont jamais undefined
  const safeShowAdBeforeReading = async (oracleType: string): Promise<boolean> => {
    if (shouldShowAdBeforeReading) {
      return await shouldShowAdBeforeReading(oracleType);
    }
    return false;
  };

  const safeOnReadingComplete = (oracleType: string): void => {
    if (onReadingComplete) {
      onReadingComplete(oracleType);
    }
  };

  const safeOnWheelComplete = (): void => {
    if (onWheelComplete) {
      onWheelComplete();
    }
  };

  useEffect(() => {
    if (onStepChange) {
      const result = onStepChange(currentStep);
      if (result instanceof Promise) {
        result.catch(err => console.error('Error in onStepChange:', err));
      }
    }
  }, [currentStep, onStepChange]);

  useEffect(() => {
    if (user.name && user.birthDate && user.gender) {
      console.log('Session utilisateur chargée depuis le context:', user);
      setCurrentStep('oracle');
    }
  }, []);

  const handleEnter = () => setCurrentStep('name');

  const handleNameSubmit = (name: string) => {
    setUser({ ...user, name });
    setCurrentStep('date');
  };

  const handleDateSubmit = (birthDate: string, zodiacSign?: ZodiacSign) => {
    setUser({ ...user, birthDate, zodiacSign });
    setCurrentStep('gender');
  };

  const handleGenderSubmit = (gender: string) => {
    setUser({ ...user, gender });
    console.log('Session utilisateur sauvegardée dans le context');
    setCurrentStep('oracle');
  };

  const handleOracleSelect = async (oracleType: string) => {
    console.log(`🎯 Oracle sélectionné: "${oracleType}"`);

    setSelectedOracle(oracleType as OracleType);

    if (oracleType === 'wizard') setCurrentStep('wizard');
    else if (oracleType === 'wheel') setCurrentStep('wheel');
    else if (oracleType === 'loveCalculator') setCurrentStep('loveCalculator');
    else if (oracleType === 'lunar') setCurrentStep('lunarPhase');
    else if (isCardBasedOracle(oracleType as OracleType)) setCurrentStep('modeSelection');
    else setCurrentStep('game');
  };

  // ✅ CORRECTION : Appeler la pub AVANT de passer à lunarGame
  const handleLunarPhaseSelect = async (phase: string) => {
    console.log(`🌙 [LUNAR] Phase sélectionnée: ${phase}`);
    setSelectedLunarPhase(phase);

    // ✅ Vérifier et afficher la pub MAINTENANT (avant la navigation)
    console.log('🎯 [LUNAR] Vérification pub AVANT navigation vers lunarGame');
    await safeShowAdBeforeReading('lunar');
    console.log('✅ [LUNAR] Vérification pub terminée, navigation vers lunarGame');

    setCurrentStep('lunarGame');
  };

  const handleLunarCardSelect = (data: { card: OracleCard; phase: string }) => {
    setSelectedLunarCard(data.card);
    setCurrentStep('lunarInterpretation');
  };

  const handleBackToLunarPhaseFromInterpretation = () => {
    setSelectedLunarCard(null);
    setCurrentStep('lunarPhase');
  };

  const handleGameModeSelect = (mode: GameMode) => {
    setSelectedGameMode(mode);
    setCurrentStep('game');
  };

  const handleCardsSelected = (cardIndices: number[]) => {
    setSelectedCardIndices(cardIndices);
    setCurrentStep('revelation');
  };

  const handleRevealInterpretation = () => setCurrentStep('interpretation');
  const handleBackToCards = () => setCurrentStep('revelation');
  const handleBackToName = () => setCurrentStep('name');
  const handleBackToDate = () => setCurrentStep('date');
  const handleBackToGender = () => setCurrentStep('gender');
  const handleBackToOracle = () => setCurrentStep('oracle');
  const handleBackToModeSelection = () => setCurrentStep('modeSelection');
  const handleGoToPendulum = () => setCurrentStep('wizard');
  const handleBackToLunarPhase = () => setCurrentStep('lunarPhase');

  const handleBackToHome = () => {
    clearUser();
    console.log('Session utilisateur effacée');
    setCurrentStep('landing');
    setSelectedOracle('');
    setSelectedCardIndices([]);
    setSelectedLunarPhase('');
    setSelectedLunarCard(null);
  };

  const oracle = selectedOracle ? oracleData[selectedOracle] : null;

  const cardBasedOracles: CardBasedOracleType[] = ['loveOracle', 'lunar', 'runes'];

  const isCardBasedOracle = (type: OracleType | ''): type is CardBasedOracleType => {
    return cardBasedOracles.includes(type as CardBasedOracleType);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {shouldShowStarsBackground && <StarsBackground />}

      <main className="flex-grow flex flex-col justify-center items-center max-w-6xl mx-auto p-5">
        {currentStep === 'responsiveTest' && <ResponsiveTest />}

        {currentStep === 'landing' && <LandingPage onEnter={handleEnter} />}

        {currentStep === 'name' && <NamePage onNext={handleNameSubmit} />}

        {currentStep === 'date' && <DatePage onNext={handleDateSubmit} onBack={handleBackToName} />}

        {currentStep === 'gender' && (
          <GenderPage onNext={handleGenderSubmit} onBack={handleBackToDate} />
        )}

        {currentStep === 'oracle' && (
          <OracleSelection
            user={user}
            onOracleSelect={handleOracleSelect}
            onBack={handleBackToGender}
            onHome={handleBackToHome}
          />
        )}

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
          <>
            {selectedGameMode === 'classic' ? (
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
            )}
          </>
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
          <>
            {selectedCardIndices.length === 5 ? (
              <CrossSpreadInterpretation
                user={user}
                oracle={oracle}
                oracleType={selectedOracle}
                selectedCardIndices={selectedCardIndices}
                selectedCards={selectedCardIndices.map(index => oracle.cards[index])}
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
                selectedCards={selectedCardIndices.map(index => oracle.cards[index])}
                onBack={handleBackToCards}
                onHome={handleBackToOracle}
                onBackToMode={handleBackToModeSelection}
                onPendulum={handleGoToPendulum}
                onSaveReading={onSaveReading}
                shouldShowAdBeforeReading={safeShowAdBeforeReading}
                onReadingComplete={safeOnReadingComplete}
              />
            )}
          </>
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
      </main>
    </div>
  );
}