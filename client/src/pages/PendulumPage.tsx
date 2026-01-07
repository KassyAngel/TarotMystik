// client/src/pages/PendulumPage.tsx
// 🔮 Pendule Divinatoire - Design optimisé + Zéro sacade

import { useState } from 'react';
import MysticalButton from '@/components/MysticalButton';
import MysticalInput from '@/components/MysticalInput';
import FlatPendulum from '@/components/FlatPendulum';
import { UserSession } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';
import { getSecureRandomInt } from '@/lib/utils';

interface PendulumPageProps {
  onBack: () => void;
  onSaveReading?: (reading: any) => Promise<void>;
  shouldShowAdBeforeReading?: (oracleType: string) => Promise<boolean>;
  onReadingComplete?: (oracleType: string) => void;
  user: UserSession;
}

type Phase = 'home' | 'question' | 'swinging' | 'answer';

function PendulumPage({ 
  onBack, 
  onSaveReading, 
  shouldShowAdBeforeReading,
  onReadingComplete,
  user 
}: PendulumPageProps) {
  const [question, setQuestion] = useState('');
  const [phase, setPhase] = useState<Phase>('home');
  const [currentAnswer, setCurrentAnswer] = useState<{ key: string; icon: string; color: string; message: string } | null>(null);
  const [isStartingPhase, setIsStartingPhase] = useState(false);
  const { t } = useLanguage();

  const pendulumAnswers = [
    { key: 'yes', icon: '✦', color: 'text-emerald-400', message: t('pendulum.messages.yes') || 'Les énergies sont alignées en votre faveur' },
    { key: 'no', icon: '✕', color: 'text-rose-400', message: t('pendulum.messages.no') || 'Les astres conseillent la prudence' },
    { key: 'maybe', icon: '◈', color: 'text-amber-400', message: t('pendulum.messages.maybe') || 'Les chemins restent encore incertains' },
    { key: 'veryLikely', icon: '★', color: 'text-cyan-400', message: t('pendulum.messages.veryLikely') || 'Les signes sont fortement positifs' },
    { key: 'unlikely', icon: '◆', color: 'text-indigo-400', message: t('pendulum.messages.unlikely') || 'Les forces s\'y opposent actuellement' },
    { key: 'certain', icon: '✧', color: 'text-emerald-300', message: t('pendulum.messages.certain') || 'La certitude émane du cosmos' },
    { key: 'noChance', icon: '✗', color: 'text-rose-300', message: t('pendulum.messages.noChance') || 'Le destin indique une autre voie' },
    { key: 'askLater', icon: '◐', color: 'text-slate-400', message: t('pendulum.messages.askLater') || 'Le moment n\'est pas encore venu' },
    { key: 'dontCount', icon: '◇', color: 'text-orange-400', message: t('pendulum.messages.dontCount') || 'Ne comptez pas sur cette issue' },
    { key: 'yesDefinitely', icon: '✦✦', color: 'text-emerald-500', message: t('pendulum.messages.yesDefinitely') || 'Absolument, sans l\'ombre d\'un doute' },
    { key: 'signsYes', icon: '✵', color: 'text-yellow-300', message: t('pendulum.messages.signsYes') || 'Tous les signes pointent vers l\'affirmative' },
    { key: 'signsNo', icon: '◉', color: 'text-purple-400', message: t('pendulum.messages.signsNo') || 'Les présages sont défavorables' },
    { key: 'unclear', icon: '◯', color: 'text-gray-400', message: t('pendulum.messages.unclear') || 'Le voile entre les mondes est trouble' },
    { key: 'trustIntuition', icon: '◈', color: 'text-pink-400', message: t('pendulum.messages.trustIntuition') || 'Écoutez votre voix intérieure' }
  ];

  const saveReading = async (answerKey: string) => {
    if (onSaveReading) {
      try {
        await onSaveReading({
          type: 'pendulum',
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

    // 📊 1. Vérifier et afficher la pub AVANT le tirage
    if (shouldShowAdBeforeReading) {
      console.log('🎯 [PENDULUM] Vérification pub avant tirage...');
      await shouldShowAdBeforeReading('pendulum');
    }

    // 2. Lancer le pendule
    setPhase('swinging');
    setCurrentAnswer(null);
    setIsStartingPhase(true);

    setTimeout(() => {
      setIsStartingPhase(false);
    }, 2000);

    setTimeout(() => {
      const randomAnswer = pendulumAnswers[getSecureRandomInt(0, pendulumAnswers.length - 1)];
      setCurrentAnswer(randomAnswer);
      setPhase('answer');
      saveReading(randomAnswer.key);

      // 📊 3. Notifier le parent qu'un tirage est terminé
      if (onReadingComplete) {
        console.log('✅ [PENDULUM] Tirage terminé, incrémentation compteur');
        onReadingComplete('pendulum');
      }
    }, 8000);
  };

  const handleNewQuestion = () => {
    setQuestion('');
    setCurrentAnswer(null);
    setPhase('home');
    setIsStartingPhase(false);
  };

  return (
    <div className="pendulum-page min-h-screen w-full flex flex-col relative overflow-hidden">

      {/* 🌌 FOND MYSTIQUE */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0d1a] via-[#0d1228] to-[#050812]"></div>
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-purple-600/30 via-transparent to-transparent rounded-full blur-3xl animate-nebula-float"></div>
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-radial from-indigo-600/25 via-transparent to-transparent rounded-full blur-3xl animate-nebula-float-reverse"></div>
        </div>
        <div className="absolute inset-0 opacity-70">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-twinkle"
              style={{
                backgroundColor: i % 4 === 0 ? '#a78bfa' : i % 4 === 1 ? '#60a5fa' : i % 4 === 2 ? '#22d3ee' : '#e8d4b8',
                width: Math.random() * 2 + 0.5 + 'px',
                height: Math.random() * 2 + 0.5 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 4 + 2 + 's',
                boxShadow: `0 0 ${Math.random() * 8 + 3}px currentColor`
              }}
            />
          ))}
        </div>
      </div>

      {/* HEADER */}
      <div className="text-center py-4 px-4 sm:px-6 pt-20 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold
                       bg-gradient-to-r from-purple-100 via-cyan-50 to-purple-100 bg-clip-text text-transparent
                       drop-shadow-[0_0_25px_rgba(167,139,250,0.7)]">
          {t('pendulum.title') || 'Pendule Divinatoire'}
        </h1>
        <p className="text-purple-50/95 text-sm sm:text-base mt-2 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          {phase === 'home' && (t('pendulum.subtitle') || 'Posez votre question et laissez le pendule vous guider')}
          {phase === 'question' && (t('pendulum.questionSubtitle') || 'Formulez votre question avec clarté')}
          {phase === 'swinging' && `✧ ${t('pendulum.channeling') || 'Canalisation des énergies cosmiques...'} ✧`}
          {phase === 'answer' && `✦ ${t('pendulum.revelation') || 'Révélation mystique'} ✦`}
        </p>
      </div>

      {/* CONTENU PRINCIPAL */}
      <div className="flex-1 flex flex-col px-4 sm:px-6 pb-6 relative z-10 max-w-2xl mx-auto w-full min-h-0">

        {/* PAGE HOME - Pendule + Bouton */}
        {phase === 'home' && (
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex-1 flex items-center justify-center min-h-[400px]">
              <FlatPendulum isSwinging={false} isStarting={false} />
            </div>

            <div className="space-y-3 mt-6 flex-shrink-0">
              <MysticalButton
                onClick={handleGoToQuestion}
                className="w-full text-base sm:text-lg py-4 sm:py-5
                           bg-gradient-to-r from-purple-600 via-violet-500 to-purple-600 
                           hover:from-purple-500 hover:via-violet-400 hover:to-purple-500
                           shadow-[0_0_35px_rgba(167,139,250,0.6)]
                           hover:shadow-[0_0_50px_rgba(167,139,250,0.8)]
                           hover:scale-105
                           border-2 border-purple-300/50
                           transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl">✦</span>
                  <span className="font-bold tracking-wide">{t('pendulum.startButton') || 'Interroger le Pendule'}</span>
                  <span className="text-xl sm:text-2xl">✦</span>
                </span>
              </MysticalButton>

              <button
                onClick={onBack}
                className="w-full text-purple-100 hover:text-purple-50 
                           text-sm font-semibold py-2 transition-all duration-300
                           drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]
                           hover:drop-shadow-[0_2px_12px_rgba(167,139,250,0.6)]"
              >
                ← {t('common.back') || 'Retour'}
              </button>
            </div>
          </div>
        )}

        {/* PAGE QUESTION - Formulaire seul */}
        {phase === 'question' && (
          <div className="flex-1 flex flex-col justify-center min-h-0 py-4">
            <div className="space-y-6 flex-shrink-0 max-w-xl mx-auto w-full">

              {/* Titre mystique */}
              <div className="text-center space-y-3 mb-4">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>
                  <span className="text-purple-300 text-3xl animate-pulse-gentle">✧</span>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-purple-50 drop-shadow-[0_0_20px_rgba(167,139,250,0.7)]">
                  {t('pendulum.questionTitle') || 'Formulez Votre Question'}
                </h2>
              </div>

              <div className="bg-gradient-to-br from-[#0a1420]/95 via-[#0d1b2e]/95 to-[#0a1420]/95
                              border-2 border-purple-500/50 rounded-2xl p-6 sm:p-8
                              shadow-[0_0_45px_rgba(167,139,250,0.5)] backdrop-blur-sm
                              relative overflow-hidden">

                {/* Effet de lueur d'arrière-plan */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-purple-400/10 to-transparent rounded-full blur-3xl"></div>

                {/* Ornements dans les coins */}
                {[0, 1, 2, 3].map(i => (
                  <div key={i} className={`absolute ${i < 2 ? 'top-3' : 'bottom-3'} ${i % 2 === 0 ? 'left-3' : 'right-3'} text-purple-400/40 text-xl`}>
                    {i % 2 === 0 ? '✦' : '◆'}
                  </div>
                ))}

                <div className="relative z-10 space-y-5">
                  <div className="space-y-2">
                    <label className="block text-purple-100 text-sm font-semibold pl-1">
                      {t('pendulum.questionLabel') || 'Votre question au pendule'}
                    </label>
                    <MysticalInput
                      placeholder={t('pendulum.questionPlaceholder') || 'Écrivez votre question...'}
                      value={question}
                      onChange={setQuestion}
                      maxLength={200}
                      className="text-base border-purple-400/50 focus:border-purple-300 bg-[#0a1420]/50 text-white"
                    />
                    <div className="flex justify-end">
                      <span className="text-xs text-purple-300/60">{question.length}/200</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-900/60 via-indigo-900/60 to-purple-900/60 
                                  rounded-xl p-5 border-2 border-purple-400/30
                                  shadow-[inset_0_0_20px_rgba(107,33,168,0.2)]">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0 filter drop-shadow-[0_0_12px_rgba(167,139,250,1)] mt-0.5">✧</span>
                      <div className="space-y-2">
                        <p className="text-purple-50 font-bold text-sm">
                          {t('pendulum.advice') || 'Conseil Mystique'}
                        </p>
                        <p className="text-purple-50/95 text-sm leading-relaxed">
                          {t('pendulum.closedQuestionHint') || 'Le pendule répond par oui, non ou peut-être. Posez une question fermée pour obtenir une guidance claire des astres.'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <MysticalButton
                    onClick={handleAskQuestion}
                    disabled={!question.trim()}
                    className="w-full text-lg py-5
                               bg-gradient-to-r from-purple-600 via-violet-500 to-purple-600 
                               hover:from-purple-500 hover:via-violet-400 hover:to-purple-500
                               disabled:opacity-40 disabled:cursor-not-allowed
                               shadow-[0_0_40px_rgba(167,139,250,0.6)]
                               hover:shadow-[0_0_55px_rgba(167,139,250,0.9)]
                               hover:scale-105
                               border-2 border-purple-300/60
                               transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <span className="text-2xl">✦</span>
                      <span className="font-bold tracking-wide">{t('pendulum.submitQuestion') || 'Consulter le Pendule'}</span>
                      <span className="text-2xl">✦</span>
                    </span>
                  </MysticalButton>

                  <button
                    onClick={() => setPhase('home')}
                    className="w-full text-purple-100 hover:text-purple-50 
                               text-sm font-semibold py-3 transition-all duration-300
                               drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]
                               hover:drop-shadow-[0_2px_12px_rgba(167,139,250,0.6)]"
                  >
                    ← {t('common.back') || 'Retour'}
                  </button>
                </div>
              </div>

              {/* Citation mystique en bas */}
              <div className="text-center">
                <p className="text-purple-200/70 text-xs italic font-medium">
                  "{t('pendulum.quote') || 'Les réponses résident déjà en vous, le pendule ne fait que les révéler'}"
                </p>
              </div>
            </div>
          </div>
        )}

        {/* PAGE OSCILLATION - Pendule + Message */}
        {phase === 'swinging' && (
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex-1 flex items-center justify-center min-h-[400px]">
              <FlatPendulum isSwinging={true} isStarting={isStartingPhase} />
            </div>

            <div className="mt-8 flex-shrink-0">
              <div className="bg-gradient-to-br from-[#0a1420]/98 via-[#0d1b2e]/98 to-[#0a1420]/98
                              border-2 border-purple-500/60 rounded-xl px-6 py-4 
                              shadow-[0_0_45px_rgba(167,139,250,0.5)] backdrop-blur-sm">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-purple-300 text-2xl animate-spin-slow">✦</span>
                  <p className="text-purple-50 text-lg font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">
                    {t('pendulum.thinking') || 'Le pendule consulte les astres...'}
                  </p>
                  <span className="text-cyan-300 text-2xl animate-spin-slow" style={{animationDelay: '1s'}}>✧</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PAGE RÉPONSE - Carte de résultat */}
        {phase === 'answer' && currentAnswer && (
          <div className="flex-1 flex flex-col justify-center min-h-0 overflow-y-auto">
            <div className="space-y-4 flex-shrink-0 py-4">
              <div className="bg-gradient-to-br from-[#0a1420]/98 via-[#0d1b2e] to-[#0a1420]/98
                              border-2 border-purple-500/70 rounded-2xl p-8 
                              shadow-[0_0_55px_rgba(167,139,250,0.7)] backdrop-blur-sm
                              relative overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-radial from-purple-400/20 to-transparent rounded-full blur-3xl"></div>

                {[0, 1, 2, 3].map(i => (
                  <div key={i} className={`absolute ${i < 2 ? 'top-3' : 'bottom-3'} ${i % 2 === 0 ? 'left-3' : 'right-3'} text-purple-300/70 text-2xl animate-pulse-gentle`} style={{animationDelay: `${i * 0.5}s`}}>✦</div>
                ))}

                <div className="relative z-10 space-y-6 text-center">
                  <div className="bg-gradient-to-r from-purple-900/60 via-indigo-900/60 to-purple-900/60 
                                  rounded-lg p-4 border-2 border-purple-400/40">
                    <p className="text-purple-50 text-sm">
                      <span className="font-bold uppercase tracking-wide block mb-1.5">{t('pendulum.yourQuestion') || 'Votre question'}</span>
                      <span className="italic text-base">"{question}"</span>
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className={`text-7xl ${currentAnswer.color} 
                                     filter drop-shadow-[0_0_40px_currentColor] 
                                     animate-answer-appear font-bold`}>
                      {currentAnswer.icon}
                    </div>

                    <div className={`text-4xl font-serif font-bold ${currentAnswer.color} 
                                     drop-shadow-[0_0_30px_currentColor]`}>
                      {t(`pendulum.answers.${currentAnswer.key}`) || currentAnswer.key}
                    </div>

                    <div className="flex items-center justify-center gap-2 py-2">
                      <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>
                      <span className="text-purple-200 text-sm">✧</span>
                      <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>
                    </div>

                    <p className="text-purple-50 text-base leading-relaxed font-medium px-4 drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">
                      {currentAnswer.message}
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-purple-900/40 
                                  rounded-lg p-4 border-2 border-purple-400/30">
                    <p className="text-purple-50 text-sm leading-relaxed font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">
                      ✧ {t('pendulum.guidance') || 'Écoutez votre intuition pour interpréter ce message'} ✧
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <MysticalButton
                  onClick={handleNewQuestion}
                  className="w-full text-base py-4
                             bg-gradient-to-r from-purple-600 via-violet-500 to-purple-600 
                             hover:from-purple-500 hover:via-violet-400 hover:to-purple-500
                             shadow-[0_0_35px_rgba(167,139,250,0.6)]
                             hover:shadow-[0_0_50px_rgba(167,139,250,0.8)]
                             hover:scale-105
                             border-2 border-purple-300/50
                             transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span className="text-xl">✦</span>
                    <span className="font-bold">{t('pendulum.newQuestion') || 'Nouvelle Question'}</span>
                    <span className="text-xl">✦</span>
                  </span>
                </MysticalButton>

                <button
                  onClick={onBack}
                  className="w-full text-purple-100 hover:text-purple-50 
                             text-sm font-semibold py-2 transition-all duration-300
                             drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]
                             hover:drop-shadow-[0_2px_12px_rgba(167,139,250,0.6)]"
                >
                  ← {t('pendulum.backHome') || 'Retour à l\'accueil'}
                </button>
              </div>

              <div className="bg-gradient-to-r from-amber-900/70 via-yellow-900/70 to-amber-900/70 
                              rounded-xl p-5 border-3 border-amber-500/60
                              shadow-[0_0_35px_rgba(251,191,36,0.5)]">
                <p className="text-amber-50 text-sm sm:text-base text-center leading-relaxed font-bold
                              drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
                  <span className="text-2xl filter drop-shadow-[0_0_15px_rgba(251,191,36,1)] inline-block mr-2">⚠️</span>
                  {t('pendulum.disclaimer') || 'Les réponses du pendule sont symboliques et destinées au divertissement. Écoutez toujours votre cœur et vos proches pour les choix importants.'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes nebula-float {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(30px, -30px) scale(1.1); opacity: 0.5; }
        }

        @keyframes nebula-float-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.35; }
          50% { transform: translate(-30px, 30px) scale(1.05); opacity: 0.45; }
        }

        @keyframes answer-appear {
          0% { opacity: 0; transform: scale(0.5); }
          50% { transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }

        .animate-fade-in { animation: fade-in 0.5s ease-out; }
        .animate-fade-in-scale { animation: fade-in-scale 0.6s ease-out; }
        .animate-pulse-gentle { animation: pulse-gentle 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-nebula-float { animation: nebula-float 20s ease-in-out infinite; }
        .animate-nebula-float-reverse { animation: nebula-float-reverse 25s ease-in-out infinite; }
        .animate-answer-appear { animation: answer-appear 0.8s ease-out; }
      `}</style>
    </div>
  );
}

// ✅ EXPORT PAR DÉFAUT
export default PendulumPage;