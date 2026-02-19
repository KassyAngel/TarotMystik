// client/src/pages/WizardPage.tsx
// 🧙‍♂️ Azraël le Magicien - ✅ FIX : Page HOME scrollable

import { useState, useCallback } from 'react';
import MysticalButton from '@/components/MysticalButton';
import MysticalInput from '@/components/MysticalInput';
import WizardAnimation from '@/components/WizardAnimation';
import { UserSession } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';
import { getSecureRandomInt } from '@/lib/utils';

interface WizardPageProps {
  onBack: () => void;
  onSaveReading?: (reading: any) => Promise<void>;
  shouldShowAdBeforeReading?: (oracleType: string) => Promise<boolean>;
  onReadingComplete?: (oracleType: string) => void;
  user: UserSession;
}

type Phase = 'home' | 'question' | 'channeling' | 'answer';

const wizardAnswers = [
  { key: 'yes',             icon: '◉',  color: 'text-emerald-400' },
  { key: 'no',              icon: '⊘',  color: 'text-rose-400' },
  { key: 'maybe',           icon: '◐',  color: 'text-amber-400' },
  { key: 'veryLikely',      icon: '✶',  color: 'text-cyan-400' },
  { key: 'unlikely',        icon: '◔',  color: 'text-indigo-400' },
  { key: 'certain',         icon: '◎',  color: 'text-emerald-300' },
  { key: 'noChance',        icon: '⦻',  color: 'text-rose-300' },
  { key: 'askLater',        icon: '⧖',  color: 'text-slate-400' },
  { key: 'dontCount',       icon: '⟁',  color: 'text-orange-400' },
  { key: 'yesDefinitely',   icon: '✹',  color: 'text-emerald-500' },
  { key: 'signsYes',        icon: '⌁',  color: 'text-yellow-300' },
  { key: 'signsNo',         icon: '⌿',  color: 'text-purple-400' },
  { key: 'unclear',         icon: '≈',  color: 'text-gray-400' },
  { key: 'trustIntuition',  icon: '◈',  color: 'text-pink-400' }
];

function WizardPage({ 
  onBack, 
  onSaveReading, 
  shouldShowAdBeforeReading,
  onReadingComplete,
  user 
}: WizardPageProps) {
  const [question, setQuestion] = useState('');
  const [phase, setPhase] = useState<Phase>('home');
  const [currentAnswer, setCurrentAnswer] = useState<{ key: string; icon: string; color: string } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { t } = useLanguage();

  const saveReading = async (answerKey: string) => {
    if (onSaveReading) {
      try {
        await onSaveReading({
          type: 'wizard',
          question: question,
          answer: answerKey,
          date: new Date()
        });
      } catch (error) {
        console.error('❌ Save error:', error);
      }
    }
  };

  const handleGoToQuestion = () => {
    console.log('🎯 [WIZARD] Navigation vers question');
    setPhase('question');
  };

  const handleAskQuestion = async () => {
    if (!question.trim() || isProcessing) {
      console.log('⚠️ [WIZARD] Clic ignoré (déjà en traitement ou question vide)');
      return;
    }

    setIsProcessing(true);
    console.log('🎯 [WIZARD] Début de la consultation');

    try {
      if (shouldShowAdBeforeReading) {
        console.log('📢 [WIZARD] Vérification pub avant consultation...');
        await shouldShowAdBeforeReading('wizard');
      }

      setPhase('channeling');
      setCurrentAnswer(null);

      setTimeout(() => {
        const randomAnswer = wizardAnswers[getSecureRandomInt(0, wizardAnswers.length - 1)];
        setCurrentAnswer(randomAnswer);
        setPhase('answer');
        saveReading(randomAnswer.key);

        if (onReadingComplete) {
          console.log('✅ [WIZARD] Consultation terminée');
          onReadingComplete('wizard');
        }

        setIsProcessing(false);
      }, 6000);
    } catch (error) {
      console.error('❌ [WIZARD] Erreur:', error);
      setIsProcessing(false);
    }
  };

  const handleNewQuestion = () => {
    if (isProcessing) return;
    console.log('🔄 [WIZARD] Nouvelle question');
    setQuestion('');
    setCurrentAnswer(null);
    setPhase('home');
    setIsProcessing(false);
  };

  return (
    <div className="wizard-page fixed inset-0 flex flex-col overflow-hidden bg-[#030610]">

      {/* FOND COSMIQUE */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#030610] via-[#080b18] to-[#0b0f22]"></div>

        {/* Nébuleuses */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-indigo-600/30 via-transparent to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-purple-600/25 via-transparent to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Étoiles */}
        <div className="absolute inset-0 opacity-50">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                backgroundColor: i % 3 === 0 ? '#a78bfa' : i % 3 === 1 ? '#60a5fa' : '#e8d4b8',
                width: '2px',
                height: '2px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.5 + 0.5
              }}
            />
          ))}
        </div>
      </div>

      {/* HEADER - FIXE EN HAUT */}
      <div className="flex-shrink-0 text-center px-4 pt-20 pb-4 relative z-10">
        <h1 className="text-2xl sm:text-3xl font-serif font-bold
                       bg-gradient-to-r from-indigo-100 via-purple-50 to-indigo-100 bg-clip-text text-transparent
                       drop-shadow-[0_0_20px_rgba(129,140,248,0.6)]">
          {t('wizard.title')}
        </h1>
        <p className="text-indigo-50/90 text-sm mt-2 font-medium 
                      drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
          {phase === 'home' && t('wizard.subtitle.home')}
          {phase === 'question' && t('wizard.subtitle.question')}
          {phase === 'channeling' && t('wizard.subtitle.channeling')}
          {phase === 'answer' && t('wizard.subtitle.answer')}
        </p>
      </div>

      {/* CONTENU - ✅ SCROLLABLE POUR TOUTES LES PHASES */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 relative z-10">
        <div className="max-w-3xl mx-auto w-full min-h-full pb-safe-banner">

          {/* HOME - ✅ SCROLLABLE */}
          {phase === 'home' && (
            <div className="flex flex-col min-h-full">
              <div className="flex-1 flex items-center justify-center py-6">
                <WizardAnimation isChanneling={false} />
              </div>

              <div className="flex-shrink-0 space-y-3 pb-6">
                <MysticalButton
                  onClick={handleGoToQuestion}
                  disabled={isProcessing}
                  className="w-full text-base sm:text-lg py-4
                             bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 
                             hover:from-indigo-500 hover:via-purple-400 hover:to-indigo-500
                             shadow-[0_0_30px_rgba(129,140,248,0.5)]
                             border-2 border-indigo-300/50
                             disabled:opacity-50 disabled:cursor-not-allowed
                             transition-all duration-300
                             active:scale-95"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span className="text-xl">🔮</span>
                    <span className="font-bold tracking-wide">{t('wizard.consultButton')}</span>
                    <span className="text-xl">✨</span>
                  </span>
                </MysticalButton>

                <button
                  onClick={onBack}
                  disabled={isProcessing}
                  className="w-full text-indigo-100 hover:text-indigo-50 
                             text-sm font-semibold py-3
                             disabled:opacity-50 disabled:cursor-not-allowed
                             transition-all duration-300 min-h-[44px]"
                >
                  {t('wizard.backButton')}
                </button>
              </div>
            </div>
          )}

          {/* QUESTION */}
          {phase === 'question' && (
            <div className="py-6">
              <div className="space-y-6 max-w-xl mx-auto">

                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent"></div>
                    <span className="text-indigo-300 text-2xl">✧</span>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent"></div>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-indigo-50">
                    {t('wizard.askTitle')}
                  </h2>
                </div>

                <div className="bg-gradient-to-br from-[#0a1420]/95 via-[#0d1b2e]/95 to-[#0a1420]/95
                                border-2 border-indigo-500/50 rounded-2xl p-6
                                shadow-[0_0_35px_rgba(129,140,248,0.4)] backdrop-blur-sm">

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="block text-indigo-100 text-sm font-semibold">
                        {t('wizard.questionLabel')}
                      </label>
                      <MysticalInput
                        placeholder={t('wizard.questionPlaceholder')}
                        value={question}
                        onChange={setQuestion}
                        maxLength={200}
                        className="text-base border-indigo-400/50 focus:border-indigo-300 bg-[#0a1420]/50 text-white"
                      />
                      <div className="flex justify-end">
                        <span className="text-xs text-indigo-300/60">{question.length}/200</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-indigo-900/60 via-purple-900/60 to-indigo-900/60 
                                    rounded-xl p-4 border-2 border-indigo-400/35">
                      <div className="flex items-start gap-3">
                        <span className="text-xl flex-shrink-0">✧</span>
                        <div className="space-y-1">
                          <p className="text-indigo-50 font-bold text-sm">{t('wizard.adviceTitle')}</p>
                          <p className="text-indigo-50/90 text-sm leading-relaxed">
                            {t('wizard.adviceText')}
                          </p>
                        </div>
                      </div>
                    </div>

                    <MysticalButton
                      onClick={handleAskQuestion}
                      disabled={!question.trim() || isProcessing}
                      className="w-full text-lg py-4
                                 bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 
                                 hover:from-indigo-500 hover:via-purple-400 hover:to-indigo-500
                                 disabled:opacity-40 disabled:cursor-not-allowed
                                 shadow-[0_0_35px_rgba(129,140,248,0.5)]
                                 border-2 border-indigo-300/60
                                 transition-all duration-300
                                 active:scale-95"
                    >
                      <span className="flex items-center justify-center gap-3">
                        <span className="text-xl">🔮</span>
                        <span className="font-bold tracking-wide">
                          {isProcessing ? t('wizard.processing') || 'Traitement...' : t('wizard.consultAction')}
                        </span>
                        <span className="text-xl">✨</span>
                      </span>
                    </MysticalButton>

                    <button
                      onClick={() => !isProcessing && setPhase('home')}
                      disabled={isProcessing}
                      className="w-full text-indigo-100 hover:text-indigo-50 
                                 text-sm font-semibold py-3
                                 disabled:opacity-50 disabled:cursor-not-allowed
                                 transition-all duration-300 min-h-[44px]"
                    >
                      {t('wizard.backButton')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CHANNELING */}
          {phase === 'channeling' && (
            <div className="flex flex-col min-h-full">
              <div className="flex-1 flex items-center justify-center py-6">
                <WizardAnimation isChanneling={true} />
              </div>

              <div className="flex-shrink-0 pb-6">
                <div className="bg-gradient-to-br from-[#0a1420]/95 via-[#0d1b2e]/95 to-[#0a1420]/95
                                border-2 border-indigo-500/60 rounded-xl px-6 py-4 
                                shadow-[0_0_40px_rgba(129,140,248,0.5)] backdrop-blur-sm">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-indigo-300 text-xl">✦</span>
                    <p className="text-indigo-50 text-base font-medium">
                      {t('wizard.channeling')}
                    </p>
                    <span className="text-purple-300 text-xl">✧</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ANSWER - SCROLLABLE */}
          {phase === 'answer' && currentAnswer && (
            <div className="py-6">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-[#0a1420]/95 via-[#0d1b2e]/95 to-[#0a1420]/95
                                border-2 border-indigo-500/70 rounded-2xl p-6 
                                shadow-[0_0_45px_rgba(129,140,248,0.6)] backdrop-blur-sm">

                  <div className="space-y-5 text-center">
                    <div className="bg-gradient-to-r from-indigo-900/60 via-purple-900/60 to-indigo-900/60 
                                    rounded-lg p-4 border-2 border-indigo-400/45">
                      <p className="text-indigo-50 text-sm">
                        <span className="font-bold uppercase tracking-wide block mb-1">{t('wizard.yourQuestion')}</span>
                        <span className="italic text-base">"{question}"</span>
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className={`text-6xl sm:text-7xl ${currentAnswer.color} 
                                       filter drop-shadow-[0_0_30px_currentColor]`}>
                        {currentAnswer.icon}
                      </div>

                      <div className="flex items-center justify-center gap-2 py-1">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent"></div>
                        <span className="text-indigo-200 text-sm">✧</span>
                        <div className="h-px w-12 bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent"></div>
                      </div>

                      <p className="text-indigo-50 text-lg leading-relaxed font-medium px-4">
                        {t(`wizard.answer.${currentAnswer.key}`)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <MysticalButton
                    onClick={handleNewQuestion}
                    disabled={isProcessing}
                    className="w-full text-base py-4
                               bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 
                               hover:from-indigo-500 hover:via-purple-400 hover:to-indigo-500
                               shadow-[0_0_30px_rgba(129,140,248,0.5)]
                               border-2 border-indigo-300/50
                               disabled:opacity-50 disabled:cursor-not-allowed
                               transition-all duration-300
                               active:scale-95"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <span className="text-lg">✨</span>
                      <span className="font-bold">{t('wizard.newQuestion')}</span>
                      <span className="text-lg">🔮</span>
                    </span>
                  </MysticalButton>

                  <button
                    onClick={onBack}
                    disabled={isProcessing}
                    className="w-full text-indigo-100 hover:text-indigo-50 
                               text-sm font-semibold py-3
                               disabled:opacity-50 disabled:cursor-not-allowed
                               transition-all duration-300 min-h-[44px]"
                  >
                    {t('wizard.backHome')}
                  </button>
                </div>

                <div className="bg-gradient-to-r from-amber-900/70 via-yellow-900/70 to-amber-900/70 
                                rounded-xl p-4 border-2 border-amber-500/60">
                  <p className="text-amber-50 text-sm text-center leading-relaxed font-bold">
                    <span className="text-xl inline-block mr-2">⚠️</span>
                    {t('wizard.disclaimer')}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        /* ✅ PADDING BOTTOM POUR LA BANNIÈRE */
        .pb-safe-banner {
          padding-bottom: calc(110px + env(safe-area-inset-bottom, 0px));
        }

        @media (min-width: 640px) {
          .pb-safe-banner {
            padding-bottom: calc(120px + env(safe-area-inset-bottom, 0px));
          }
        }
      `}</style>
    </div>
  );
}

export default WizardPage;