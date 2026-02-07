// client/src/pages/WizardPage.tsx
// 🧙‍♂️ Azraël le Magicien - Oracle Mystique - VERSION PRO

import { useState } from 'react';
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
    setPhase('question');
  };

  const handleAskQuestion = async () => {
    if (!question.trim()) return;

    if (shouldShowAdBeforeReading) {
      console.log('🎯 [WIZARD] Vérification pub avant consultation...');
      await shouldShowAdBeforeReading('wizard');
    }

    setPhase('channeling');
    setCurrentAnswer(null);

    // ⏱️ Durée du channeling : 7 secondes
    // Le son de la vidéo jouera automatiquement
    setTimeout(() => {
      const randomAnswer = wizardAnswers[getSecureRandomInt(0, wizardAnswers.length - 1)];
      setCurrentAnswer(randomAnswer);
      setPhase('answer');
      saveReading(randomAnswer.key);

      if (onReadingComplete) {
        console.log('✅ [WIZARD] Consultation terminée');
        onReadingComplete('wizard');
      }
    }, 7000);
  };

  const handleNewQuestion = () => {
    setQuestion('');
    setCurrentAnswer(null);
    setPhase('home');
  };

  return (
    <div className="wizard-page min-h-screen w-full flex flex-col relative overflow-hidden">

      {/* FOND COSMIQUE PROFESSIONNEL */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#030610] via-[#080b18] to-[#0b0f22]"></div>

        {/* Nébuleuses subtiles */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-radial from-indigo-600/30 via-transparent to-transparent rounded-full blur-3xl animate-nebula-float"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-purple-600/25 via-transparent to-transparent rounded-full blur-3xl animate-nebula-float-reverse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-gradient-radial from-blue-600/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse-gentle"></div>
        </div>

        {/* Étoiles optimisées */}
        <div className="absolute inset-0 opacity-70">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-twinkle"
              style={{
                backgroundColor: i % 4 === 0 ? '#a78bfa' : i % 4 === 1 ? '#60a5fa' : i % 4 === 2 ? '#22d3ee' : '#e8d4b8',
                width: Math.random() * 2.2 + 0.6 + 'px',
                height: Math.random() * 2.2 + 0.6 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 6 + 's',
                animationDuration: Math.random() * 5 + 2.5 + 's',
                boxShadow: `0 0 ${Math.random() * 8 + 4}px currentColor`
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/8 to-transparent"></div>
      </div>

      {/* HEADER */}
      <div className="text-center py-4 px-4 sm:px-6 pt-20 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold
                       bg-gradient-to-r from-indigo-100 via-purple-50 to-indigo-100 bg-clip-text text-transparent
                       drop-shadow-[0_0_25px_rgba(129,140,248,0.7)]
                       animate-pulse-gentle">
          {t('wizard.title')}
        </h1>
        <p className="text-indigo-50/90 text-sm sm:text-base mt-3 font-medium 
                      drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          {phase === 'home' && t('wizard.subtitle.home')}
          {phase === 'question' && t('wizard.subtitle.question')}
          {phase === 'channeling' && t('wizard.subtitle.channeling')}
          {phase === 'answer' && t('wizard.subtitle.answer')}
        </p>
      </div>

      {/* CONTENU */}
      <div className="flex-1 flex flex-col px-4 sm:px-6 pb-6 relative z-10 max-w-3xl mx-auto w-full min-h-0">

        {/* HOME */}
        {phase === 'home' && (
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex-1 flex items-center justify-center min-h-[450px] sm:min-h-[500px]">
              <WizardAnimation isChanneling={false} />
            </div>

            <div className="space-y-3 mt-6 flex-shrink-0">
              <MysticalButton
                onClick={handleGoToQuestion}
                className="w-full text-base sm:text-lg py-4 sm:py-5
                           bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 
                           hover:from-indigo-500 hover:via-purple-400 hover:to-indigo-500
                           shadow-[0_0_35px_rgba(129,140,248,0.6)]
                           hover:shadow-[0_0_50px_rgba(129,140,248,0.9)]
                           hover:scale-105
                           border-2 border-indigo-300/50
                           transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl">🔮</span>
                  <span className="font-bold tracking-wide">{t('wizard.consultButton')}</span>
                  <span className="text-xl sm:text-2xl">✨</span>
                </span>
              </MysticalButton>

              <button
                onClick={onBack}
                className="w-full text-indigo-100 hover:text-indigo-50 
                           text-sm font-semibold py-2 transition-all duration-300
                           drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]
                           hover:drop-shadow-[0_2px_10px_rgba(129,140,248,0.5)]"
              >
                {t('wizard.backButton')}
              </button>
            </div>
          </div>
        )}

        {/* QUESTION */}
        {phase === 'question' && (
          <div className="flex-1 flex flex-col justify-center min-h-0 py-4">
            <div className="space-y-6 flex-shrink-0 max-w-xl mx-auto w-full">

              <div className="text-center space-y-3 mb-4">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent"></div>
                  <span className="text-indigo-300 text-3xl animate-pulse-gentle drop-shadow-[0_0_12px_rgba(129,140,248,0.9)]">✧</span>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent"></div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-indigo-50 
                               drop-shadow-[0_0_20px_rgba(129,140,248,0.7)]">
                  {t('wizard.askTitle')}
                </h2>
              </div>

              <div className="bg-gradient-to-br from-[#0a1420]/95 via-[#0d1b2e]/95 to-[#0a1420]/95
                              border-2 border-indigo-500/50 rounded-2xl p-6 sm:p-8
                              shadow-[0_0_40px_rgba(129,140,248,0.5)] backdrop-blur-sm
                              relative overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/6 via-transparent to-purple-500/6"></div>

                <div className="relative z-10 space-y-5">
                  <div className="space-y-2">
                    <label className="block text-indigo-100 text-sm font-semibold pl-1">
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
                                  rounded-xl p-5 border-2 border-indigo-400/35">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0 filter drop-shadow-[0_0_12px_rgba(129,140,248,0.8)] mt-0.5">✧</span>
                      <div className="space-y-2">
                        <p className="text-indigo-50 font-bold text-sm">{t('wizard.adviceTitle')}</p>
                        <p className="text-indigo-50/90 text-sm leading-relaxed">
                          {t('wizard.adviceText')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <MysticalButton
                    onClick={handleAskQuestion}
                    disabled={!question.trim()}
                    className="w-full text-lg py-5
                               bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 
                               hover:from-indigo-500 hover:via-purple-400 hover:to-indigo-500
                               disabled:opacity-40 disabled:cursor-not-allowed
                               shadow-[0_0_38px_rgba(129,140,248,0.6)]
                               hover:shadow-[0_0_55px_rgba(129,140,248,0.9)]
                               hover:scale-105
                               border-2 border-indigo-300/60
                               transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <span className="text-2xl">🔮</span>
                      <span className="font-bold tracking-wide">{t('wizard.consultAction')}</span>
                      <span className="text-2xl">✨</span>
                    </span>
                  </MysticalButton>

                  <button
                    onClick={() => setPhase('home')}
                    className="w-full text-indigo-100 hover:text-indigo-50 
                               text-sm font-semibold py-3 transition-all duration-300"
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
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex-1 flex items-center justify-center min-h-[400px] sm:min-h-[450px] -mt-12">
              <WizardAnimation isChanneling={true} />
            </div>

            <div className="mt-4 flex-shrink-0">
              <div className="bg-gradient-to-br from-[#0a1420]/95 via-[#0d1b2e]/95 to-[#0a1420]/95
                              border-2 border-indigo-500/60 rounded-xl px-6 py-4 
                              shadow-[0_0_45px_rgba(129,140,248,0.5)] backdrop-blur-sm">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-indigo-300 text-2xl animate-spin-slow">✦</span>
                  <p className="text-indigo-50 text-lg font-medium">
                    {t('wizard.channeling')}
                  </p>
                  <span className="text-purple-300 text-2xl animate-spin-slow" style={{animationDelay: '1s'}}>✧</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ANSWER */}
        {phase === 'answer' && currentAnswer && (
          <div className="flex-1 flex flex-col justify-center min-h-0 overflow-y-auto">
            <div className="space-y-4 flex-shrink-0 py-4">
              <div className="bg-gradient-to-br from-[#0a1420]/95 via-[#0d1b2e]/95 to-[#0a1420]/95
                              border-2 border-indigo-500/70 rounded-2xl p-8 
                              shadow-[0_0_50px_rgba(129,140,248,0.7)] backdrop-blur-sm
                              relative overflow-hidden">

                <div className="relative z-10 space-y-6 text-center">
                  <div className="bg-gradient-to-r from-indigo-900/60 via-purple-900/60 to-indigo-900/60 
                                  rounded-lg p-4 border-2 border-indigo-400/45">
                    <p className="text-indigo-50 text-sm">
                      <span className="font-bold uppercase tracking-wide block mb-1.5">{t('wizard.yourQuestion')}</span>
                      <span className="italic text-base">"{question}"</span>
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className={`text-7xl sm:text-8xl ${currentAnswer.color} 
                                     filter drop-shadow-[0_0_40px_currentColor] 
                                     animate-answer-appear font-bold`}>
                      {currentAnswer.icon}
                    </div>

                    <div className="flex items-center justify-center gap-2 py-2">
                      <div className="h-px w-16 bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent"></div>
                      <span className="text-indigo-200 text-sm drop-shadow-[0_0_8px_rgba(129,140,248,0.9)]">✧</span>
                      <div className="h-px w-16 bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent"></div>
                    </div>

                    <p className="text-indigo-50 text-lg sm:text-xl leading-relaxed font-medium px-4">
                      {t(`wizard.answer.${currentAnswer.key}`)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <MysticalButton
                  onClick={handleNewQuestion}
                  className="w-full text-base py-4
                             bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 
                             hover:from-indigo-500 hover:via-purple-400 hover:to-indigo-500
                             shadow-[0_0_35px_rgba(129,140,248,0.6)]
                             hover:shadow-[0_0_50px_rgba(129,140,248,0.9)]
                             hover:scale-105
                             border-2 border-indigo-300/50
                             transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span className="text-xl">✨</span>
                    <span className="font-bold">{t('wizard.newQuestion')}</span>
                    <span className="text-xl">🔮</span>
                  </span>
                </MysticalButton>

                <button
                  onClick={onBack}
                  className="w-full text-indigo-100 hover:text-indigo-50 
                             text-sm font-semibold py-2 transition-all duration-300"
                >
                  {t('wizard.backHome')}
                </button>
              </div>

              <div className="bg-gradient-to-r from-amber-900/70 via-yellow-900/70 to-amber-900/70 
                              rounded-xl p-5 border-2 border-amber-500/60
                              shadow-[0_0_35px_rgba(251,191,36,0.5)]">
                <p className="text-amber-50 text-sm sm:text-base text-center leading-relaxed font-bold">
                  <span className="text-2xl filter drop-shadow-[0_0_18px_rgba(251,191,36,0.9)] inline-block mr-2">⚠️</span>
                  {t('wizard.disclaimer')}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.04); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes nebula-float {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(25px, -25px) scale(1.08); opacity: 0.5; }
        }
        @keyframes nebula-float-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.35; }
          50% { transform: translate(-25px, 25px) scale(1.05); opacity: 0.45; }
        }
        @keyframes answer-appear {
          0% { opacity: 0; transform: scale(0.4) rotate(-12deg); }
          60% { transform: scale(1.2) rotate(3deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 1; }
        }
        .animate-pulse-gentle { animation: pulse-gentle 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 9s linear infinite; }
        .animate-nebula-float { animation: nebula-float 22s ease-in-out infinite; }
        .animate-nebula-float-reverse { animation: nebula-float-reverse 26s ease-in-out infinite; }
        .animate-answer-appear { animation: answer-appear 1.1s ease-out; }
        .animate-twinkle { animation: twinkle 3.5s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

export default WizardPage;