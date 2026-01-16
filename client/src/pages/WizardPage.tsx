// client/src/pages/WizardPage.tsx
// 🧙‍♂️ Azraël le Magicien - Oracle Mystique - VERSION OPTIMISÉE

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

// 🔮 RÉPONSES DU MAGICIEN
const wizardAnswers = [
  { key: 'yes', icon: '✨', color: 'text-emerald-400' },
  { key: 'no', icon: '🌑', color: 'text-rose-400' },
  { key: 'maybe', icon: '🔮', color: 'text-amber-400' },
  { key: 'veryLikely', icon: '⭐', color: 'text-cyan-400' },
  { key: 'unlikely', icon: '🌙', color: 'text-indigo-400' },
  { key: 'certain', icon: '💫', color: 'text-emerald-300' },
  { key: 'noChance', icon: '🌌', color: 'text-rose-300' },
  { key: 'askLater', icon: '🌟', color: 'text-slate-400' },
  { key: 'dontCount', icon: '✦', color: 'text-orange-400' },
  { key: 'yesDefinitely', icon: '🌠', color: 'text-emerald-500' },
  { key: 'signsYes', icon: '🔯', color: 'text-yellow-300' },
  { key: 'signsNo', icon: '🌘', color: 'text-purple-400' },
  { key: 'unclear', icon: '🌫️', color: 'text-gray-400' },
  { key: 'trustIntuition', icon: '💎', color: 'text-pink-400' }
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

    // 📊 1. Vérifier et afficher la pub AVANT la consultation
    if (shouldShowAdBeforeReading) {
      console.log('🎯 [WIZARD] Vérification pub avant consultation...');
      await shouldShowAdBeforeReading('wizard');
    }

    // 2. Lancer l'animation du magicien
    setPhase('channeling');
    setCurrentAnswer(null);

    setTimeout(() => {
      const randomAnswer = wizardAnswers[getSecureRandomInt(0, wizardAnswers.length - 1)];
      setCurrentAnswer(randomAnswer);
      setPhase('answer');
      saveReading(randomAnswer.key);

      // 📊 3. Notifier le parent qu'une consultation est terminée
      if (onReadingComplete) {
        console.log('✅ [WIZARD] Consultation terminée, incrémentation compteur');
        onReadingComplete('wizard');
      }
    }, 6000); // Animation de 6 secondes
  };

  const handleNewQuestion = () => {
    setQuestion('');
    setCurrentAnswer(null);
    setPhase('home');
  };

  return (
    <div className="wizard-page min-h-screen w-full flex flex-col relative overflow-hidden">

      {/* 🌌 FOND MYSTIQUE AMÉLIORÉ */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient de base plus sombre */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050812] via-[#0a0d1a] to-[#0d1228]"></div>

        {/* Nébuleuses lumineuses */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-indigo-600/40 via-transparent to-transparent rounded-full blur-3xl animate-nebula-float"></div>
          <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-gradient-radial from-purple-600/35 via-transparent to-transparent rounded-full blur-3xl animate-nebula-float-reverse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-blue-600/25 via-transparent to-transparent rounded-full blur-3xl animate-pulse-gentle"></div>
        </div>

        {/* Étoiles scintillantes */}
        <div className="absolute inset-0 opacity-80">
          {[...Array(120)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-twinkle"
              style={{
                backgroundColor: i % 4 === 0 ? '#a78bfa' : i % 4 === 1 ? '#60a5fa' : i % 4 === 2 ? '#22d3ee' : '#e8d4b8',
                width: Math.random() * 2.5 + 0.5 + 'px',
                height: Math.random() * 2.5 + 0.5 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 4 + 2 + 's',
                boxShadow: `0 0 ${Math.random() * 10 + 3}px currentColor`
              }}
            />
          ))}
        </div>

        {/* Voile mystique */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent"></div>
      </div>

      {/* HEADER */}
      <div className="text-center py-4 px-4 sm:px-6 pt-20 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold
                       bg-gradient-to-r from-indigo-100 via-purple-50 to-indigo-100 bg-clip-text text-transparent
                       drop-shadow-[0_0_30px_rgba(129,140,248,0.8)]
                       animate-pulse-gentle">
          {t('wizard.title')}
        </h1>
        <p className="text-indigo-50/95 text-sm sm:text-base mt-3 font-medium 
                      drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          {phase === 'home' && t('wizard.subtitle.home')}
          {phase === 'question' && t('wizard.subtitle.question')}
          {phase === 'channeling' && t('wizard.subtitle.channeling')}
          {phase === 'answer' && t('wizard.subtitle.answer')}
        </p>
      </div>

      {/* CONTENU PRINCIPAL */}
      <div className="flex-1 flex flex-col px-4 sm:px-6 pb-6 relative z-10 max-w-3xl mx-auto w-full min-h-0">

        {/* PAGE HOME - Animation magicien mise en avant */}
        {phase === 'home' && (
          <div className="flex-1 flex flex-col min-h-0">
            {/* Animation prend plus de place */}
            <div className="flex-1 flex items-center justify-center min-h-[450px] sm:min-h-[500px]">
              <WizardAnimation isChanneling={false} />
            </div>

            {/* Boutons compacts en bas */}
            <div className="space-y-3 mt-6 flex-shrink-0">
              <MysticalButton
                onClick={handleGoToQuestion}
                className="w-full text-base sm:text-lg py-4 sm:py-5
                           bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 
                           hover:from-indigo-500 hover:via-purple-400 hover:to-indigo-500
                           shadow-[0_0_40px_rgba(129,140,248,0.7)]
                           hover:shadow-[0_0_60px_rgba(129,140,248,1)]
                           hover:scale-105
                           border-2 border-indigo-300/60
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
                           drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]
                           hover:drop-shadow-[0_2px_12px_rgba(129,140,248,0.6)]"
              >
                {t('wizard.backButton')}
              </button>
            </div>
          </div>
        )}

        {/* PAGE QUESTION */}
        {phase === 'question' && (
          <div className="flex-1 flex flex-col justify-center min-h-0 py-4">
            <div className="space-y-6 flex-shrink-0 max-w-xl mx-auto w-full">

              <div className="text-center space-y-3 mb-4">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent"></div>
                  <span className="text-indigo-300 text-3xl animate-pulse-gentle drop-shadow-[0_0_15px_rgba(129,140,248,1)]">✧</span>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent"></div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-indigo-50 
                               drop-shadow-[0_0_25px_rgba(129,140,248,0.8)]">
                  {t('wizard.askTitle')}
                </h2>
              </div>

              <div className="bg-gradient-to-br from-[#0a1420]/98 via-[#0d1b2e]/98 to-[#0a1420]/98
                              border-2 border-indigo-500/60 rounded-2xl p-6 sm:p-8
                              shadow-[0_0_50px_rgba(129,140,248,0.6)] backdrop-blur-sm
                              relative overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/8 via-transparent to-purple-500/8"></div>

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
                      className="text-base border-indigo-400/60 focus:border-indigo-300 bg-[#0a1420]/60 text-white"
                    />
                    <div className="flex justify-end">
                      <span className="text-xs text-indigo-300/70">{question.length}/200</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-indigo-900/70 via-purple-900/70 to-indigo-900/70 
                                  rounded-xl p-5 border-2 border-indigo-400/40">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0 filter drop-shadow-[0_0_15px_rgba(129,140,248,1)] mt-0.5">✧</span>
                      <div className="space-y-2">
                        <p className="text-indigo-50 font-bold text-sm">{t('wizard.adviceTitle')}</p>
                        <p className="text-indigo-50/95 text-sm leading-relaxed">
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
                               shadow-[0_0_45px_rgba(129,140,248,0.7)]
                               hover:shadow-[0_0_65px_rgba(129,140,248,1)]
                               hover:scale-105
                               border-2 border-indigo-300/70
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

        {/* PAGE CHANNELING - Animation magicien en pleine puissance */}
        {phase === 'channeling' && (
          <div className="flex-1 flex flex-col min-h-0">
            {/* Animation occupe l'espace principal */}
            <div className="flex-1 flex items-center justify-center min-h-[450px] sm:min-h-[500px]">
              <WizardAnimation isChanneling={true} />
            </div>

            {/* Message compact en bas */}
            <div className="mt-8 flex-shrink-0">
              <div className="bg-gradient-to-br from-[#0a1420]/98 via-[#0d1b2e]/98 to-[#0a1420]/98
                              border-2 border-indigo-500/70 rounded-xl px-6 py-4 
                              shadow-[0_0_50px_rgba(129,140,248,0.6)] backdrop-blur-sm">
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

        {/* PAGE RÉPONSE */}
        {phase === 'answer' && currentAnswer && (
          <div className="flex-1 flex flex-col justify-center min-h-0 overflow-y-auto">
            <div className="space-y-4 flex-shrink-0 py-4">
              <div className="bg-gradient-to-br from-[#0a1420]/98 via-[#0d1b2e]/98 to-[#0a1420]/98
                              border-2 border-indigo-500/80 rounded-2xl p-8 
                              shadow-[0_0_60px_rgba(129,140,248,0.8)] backdrop-blur-sm
                              relative overflow-hidden">

                <div className="relative z-10 space-y-6 text-center">
                  <div className="bg-gradient-to-r from-indigo-900/70 via-purple-900/70 to-indigo-900/70 
                                  rounded-lg p-4 border-2 border-indigo-400/50">
                    <p className="text-indigo-50 text-sm">
                      <span className="font-bold uppercase tracking-wide block mb-1.5">{t('wizard.yourQuestion')}</span>
                      <span className="italic text-base">"{question}"</span>
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className={`text-7xl sm:text-8xl ${currentAnswer.color} 
                                     filter drop-shadow-[0_0_50px_currentColor] 
                                     animate-answer-appear font-bold`}>
                      {currentAnswer.icon}
                    </div>

                    <div className="flex items-center justify-center gap-2 py-2">
                      <div className="h-px w-16 bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent"></div>
                      <span className="text-indigo-200 text-sm drop-shadow-[0_0_10px_rgba(129,140,248,1)]">✧</span>
                      <div className="h-px w-16 bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent"></div>
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
                             shadow-[0_0_40px_rgba(129,140,248,0.7)]
                             hover:shadow-[0_0_60px_rgba(129,140,248,1)]
                             hover:scale-105
                             border-2 border-indigo-300/60
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

              <div className="bg-gradient-to-r from-amber-900/80 via-yellow-900/80 to-amber-900/80 
                              rounded-xl p-5 border-2 border-amber-500/70
                              shadow-[0_0_40px_rgba(251,191,36,0.6)]">
                <p className="text-amber-50 text-sm sm:text-base text-center leading-relaxed font-bold">
                  <span className="text-2xl filter drop-shadow-[0_0_20px_rgba(251,191,36,1)] inline-block mr-2">⚠️</span>
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
          50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes nebula-float {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          50% { transform: translate(30px, -30px) scale(1.1); opacity: 0.6; }
        }
        @keyframes nebula-float-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.45; }
          50% { transform: translate(-30px, 30px) scale(1.05); opacity: 0.55; }
        }
        @keyframes answer-appear {
          0% { opacity: 0; transform: scale(0.3) rotate(-15deg); }
          50% { transform: scale(1.25) rotate(5deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-pulse-gentle { animation: pulse-gentle 3.5s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-nebula-float { animation: nebula-float 20s ease-in-out infinite; }
        .animate-nebula-float-reverse { animation: nebula-float-reverse 25s ease-in-out infinite; }
        .animate-answer-appear { animation: answer-appear 1s ease-out; }
        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

export default WizardPage;