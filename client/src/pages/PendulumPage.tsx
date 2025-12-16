// client/src/pages/PendulumPage.tsx
// 🔮 Pendule Divinatoire - Design Premium Amélioré

import { useState } from 'react';
import MysticalButton from '@/components/MysticalButton';
import MysticalInput from '@/components/MysticalInput';
import { UserSession } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';
import { getSecureRandomInt } from '@/lib/utils';

interface PendulumPageProps {
  onBack: () => void;
  onSaveReading?: (reading: any) => Promise<void>;
  user: UserSession;
}

type Phase = 'question' | 'swinging' | 'answer';

export default function PendulumPage({ onBack, onSaveReading }: PendulumPageProps) {
  const [question, setQuestion] = useState('');
  const [phase, setPhase] = useState<Phase>('question');
  const [currentAnswer, setCurrentAnswer] = useState<{ key: string; icon: string; color: string; message: string } | null>(null);
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
        console.log('✅ Pendulum reading saved');
      } catch (error) {
        console.error('❌ Save error:', error);
      }
    }
  };

  const handleAskQuestion = async () => {
    if (!question.trim()) return;

    setPhase('swinging');
    setCurrentAnswer(null);

    setTimeout(() => {
      const randomAnswer = pendulumAnswers[getSecureRandomInt(0, pendulumAnswers.length - 1)];
      setCurrentAnswer(randomAnswer);
      setPhase('answer');
      saveReading(randomAnswer.key);
    }, 5000);
  };

  const handleNewQuestion = () => {
    setQuestion('');
    setCurrentAnswer(null);
    setPhase('question');
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
      <div className="text-center py-4 px-4 pt-20 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold
                       bg-gradient-to-r from-purple-200 via-cyan-100 to-purple-200 bg-clip-text text-transparent
                       drop-shadow-[0_0_20px_rgba(167,139,250,0.6)]">
          {t('pendulum.title') || 'Pendule Divinatoire'}
        </h1>
        <p className="text-purple-100/90 text-sm sm:text-base mt-2 font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
          {phase === 'question' && (t('pendulum.subtitle') || 'Posez votre question et laissez le pendule vous guider')}
          {phase === 'swinging' && `✧ ${t('pendulum.channeling') || 'Canalisation des énergies cosmiques...'} ✧`}
          {phase === 'answer' && `✦ ${t('pendulum.revelation') || 'Révélation mystique'} ✦`}
        </p>
      </div>

      {/* CONTENU PRINCIPAL */}
      <div className="flex-1 flex flex-col px-4 pb-4 relative z-10 max-w-2xl mx-auto w-full">

        {/* PHASE QUESTION */}
        {phase === 'question' && (
          <div className="flex-1 flex flex-col justify-center space-y-4">

            {/* Pendule au repos */}
            <div className="flex justify-center mb-6">
              <div className="relative w-56 h-56">
                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                  <div className="w-40 h-40 border border-purple-500/30 rounded-full animate-mystic-pulse"></div>
                  <div className="absolute inset-6 border border-amber-400/20 rounded-full animate-mystic-pulse" style={{animationDelay: '1s'}}></div>
                </div>

                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-radial from-purple-500/20 via-amber-400/10 to-transparent rounded-full blur-2xl animate-aura-pulse"></div>

                <div className="absolute top-0 left-1/2 -translate-x-1/2 origin-top" style={{animation: 'gentle-swing 1.5s ease-in-out infinite'}}>

                  {/* ✨ PERLE VIOLETTE TOP - Comme l'originale */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full 
                                  bg-gradient-to-br from-violet-300 via-violet-400 to-violet-600 
                                  shadow-[0_0_15px_rgba(139,92,246,0.9),0_0_25px_rgba(139,92,246,0.5)]
                                  border-[2.5px] border-violet-200">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/70 via-transparent to-transparent"></div>
                    <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>

                  {/* ⛓️ CHAÎNE DORÉE NETTE */}
                  <div className="relative w-[2px] h-40 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-400 
                                    shadow-[0_0_10px_rgba(251,191,36,0.6)]">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                    </div>

                    {/* 💎 DEUX PERLES COLORÉES NETTES */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full 
                                    bg-gradient-to-br from-cyan-300 via-cyan-400 to-cyan-600 
                                    shadow-[0_0_12px_rgba(34,211,238,0.9)]
                                    border-[2px] border-cyan-200" 
                         style={{top: '35%'}}>
                      <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full 
                                    bg-gradient-to-br from-violet-300 via-violet-400 to-violet-600 
                                    shadow-[0_0_12px_rgba(139,92,246,0.9)]
                                    border-[2px] border-violet-200" 
                         style={{top: '65%'}}>
                      <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* 💜 CRISTAL AMÉTHYSTE NET ET RÉALISTE */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-14 h-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-violet-500/25 to-purple-600/30 blur-xl animate-crystal-glow"></div>

                    <svg className="w-full h-full drop-shadow-[0_0_20px_rgba(139,92,246,0.7)]" viewBox="0 0 40 60">
                      <defs>
                        <linearGradient id="amethystMain" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#c4b5fd"/>
                          <stop offset="50%" stopColor="#a78bfa"/>
                          <stop offset="100%" stopColor="#8b5cf6"/>
                        </linearGradient>
                        <linearGradient id="facetHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8"/>
                          <stop offset="100%" stopColor="#e9d5ff" stopOpacity="0.3"/>
                        </linearGradient>
                        <linearGradient id="facetShadow" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.6"/>
                          <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.8"/>
                        </linearGradient>
                      </defs>

                      {/* Corps principal net */}
                      <path d="M 20 8 L 8 35 Q 10 50, 20 58 Q 30 50, 32 35 Z" 
                            fill="url(#amethystMain)" 
                            stroke="#a78bfa" 
                            strokeWidth="1"/>

                      {/* Facettes nettes */}
                      <path d="M 20 8 L 12 25 L 20 40 Z" fill="url(#facetHighlight)"/>
                      <path d="M 20 8 L 28 25 L 20 40 Z" fill="url(#facetShadow)"/>
                      <path d="M 20 40 L 10 48 L 20 58 Z" fill="url(#facetHighlight)" opacity="0.7"/>
                      <path d="M 20 40 L 30 48 L 20 58 Z" fill="url(#facetShadow)" opacity="0.7"/>

                      {/* Reflet net */}
                      <ellipse cx="16" cy="20" rx="2.5" ry="7" fill="#ffffff" opacity="0.7" transform="rotate(-20 16 20)"/>

                      {/* Attache dorée nette */}
                      <ellipse cx="20" cy="6" rx="5" ry="2.2" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1"/>
                      <rect x="18.5" y="6" width="3" height="2" rx="1" fill="#d97706"/>

                      {/* Pointe nette */}
                      <circle cx="20" cy="57" r="2" fill="#e9d5ff"/>
                      <circle cx="20" cy="57" r="1" fill="#ffffff"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div className="bg-gradient-to-br from-[#0a1420]/95 via-[#0d1b2e]/95 to-[#0a1420]/95
                            border-2 border-purple-500/50 
                            rounded-xl p-5 
                            shadow-[0_0_30px_rgba(167,139,250,0.3)]
                            backdrop-blur-sm">

              <div className="space-y-4">
                <MysticalInput
                  placeholder={t('pendulum.questionPlaceholder') || 'Écrivez votre question...'}
                  value={question}
                  onChange={setQuestion}
                  maxLength={200}
                  className="text-base border-purple-400/50 focus:border-purple-300 bg-[#0a1420]/50 text-white"
                />

                <div className="bg-gradient-to-r from-purple-900/50 via-indigo-900/50 to-purple-900/50 
                                rounded-lg p-4 border-2 border-purple-400/30">
                  <p className="text-purple-100 text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-lg flex-shrink-0 filter drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]">✧</span>
                    <span className="font-medium">{t('pendulum.closedQuestionHint') || 'Le pendule répond par oui, non ou peut-être. Posez une question fermée.'}</span>
                  </p>
                </div>

                <MysticalButton
                  onClick={handleAskQuestion}
                  disabled={!question.trim()}
                  className="w-full text-base py-4
                             bg-gradient-to-r from-purple-600 via-violet-500 to-purple-600 
                             hover:from-purple-500 hover:via-violet-400 hover:to-purple-500
                             disabled:opacity-40 disabled:cursor-not-allowed
                             shadow-[0_0_30px_rgba(167,139,250,0.5)]
                             hover:shadow-[0_0_40px_rgba(167,139,250,0.7)]
                             border-2 border-purple-300/50"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span className="text-xl">✦</span>
                    <span className="font-bold tracking-wide">{t('pendulum.submitQuestion') || 'Consulter le Pendule'}</span>
                    <span className="text-xl">✦</span>
                  </span>
                </MysticalButton>

                <button
                  onClick={onBack}
                  className="w-full text-purple-200 hover:text-purple-50 
                             text-sm font-semibold py-2 
                             transition-all duration-300
                             drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
                >
                  ← {t('common.back') || 'Retour'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PHASE OSCILLATION */}
        {phase === 'swinging' && (
          <div className="flex-1 flex flex-col items-center justify-center">

            <div className="relative w-64 h-80 mb-8">

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3">
                <div className="w-56 h-56 border border-purple-500/30 rounded-full animate-energy-ring-1"></div>
                <div className="absolute inset-4 border border-cyan-500/25 rounded-full animate-energy-ring-2"></div>
                <div className="absolute inset-8 border border-violet-500/20 rounded-full animate-energy-ring-3"></div>
              </div>

              <div className="absolute top-16 left-1/2 -translate-x-1/2 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl animate-aura-pulse"></div>

              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 origin-top"
                style={{animation: 'continuous-oscillation 2s ease-in-out infinite'}}
              >
                {/* PERLE VIOLETTE TOP */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full 
                                bg-gradient-to-br from-violet-300 via-violet-400 to-violet-600 
                                shadow-[0_0_20px_rgba(139,92,246,1),0_0_35px_rgba(139,92,246,0.6)]
                                border-[2.5px] border-violet-200">
                  <div className="absolute top-0.5 left-0.5 w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* CHAÎNE DORÉE NETTE */}
                <div className="relative w-[2px] h-52 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-400 
                                  shadow-[0_0_15px_rgba(251,191,36,0.7)]">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
                  </div>

                  {/* DEUX PERLES COLORÉES NETTES */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full 
                                  bg-gradient-to-br from-cyan-300 via-cyan-400 to-cyan-600 
                                  shadow-[0_0_15px_rgba(34,211,238,1)]
                                  border-[2.5px] border-cyan-200" style={{top: '35%'}}>
                    <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full 
                                  bg-gradient-to-br from-violet-300 via-violet-400 to-violet-600 
                                  shadow-[0_0_15px_rgba(139,92,246,1)]
                                  border-[2.5px] border-violet-200" style={{top: '65%'}}>
                    <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* CRISTAL AMÉTHYSTE NET */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-24">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-violet-500/25 to-purple-600/30 blur-xl animate-crystal-glow"></div>

                  <svg className="w-full h-full drop-shadow-[0_0_25px_rgba(139,92,246,0.8)]" viewBox="0 0 50 75">
                    <defs>
                      <linearGradient id="amethystLiveMain" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#c4b5fd"/>
                        <stop offset="50%" stopColor="#a78bfa"/>
                        <stop offset="100%" stopColor="#8b5cf6"/>
                      </linearGradient>
                      <linearGradient id="facetHighlightLive" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85"/>
                        <stop offset="100%" stopColor="#e9d5ff" stopOpacity="0.35"/>
                      </linearGradient>
                      <linearGradient id="facetShadowLive" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.65"/>
                        <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.85"/>
                      </linearGradient>
                    </defs>

                    {/* Corps principal net */}
                    <path d="M 25 10 L 10 42 Q 12 62, 25 72 Q 38 62, 40 42 Z" 
                          fill="url(#amethystLiveMain)" 
                          stroke="#a78bfa" 
                          strokeWidth="1.2"/>

                    {/* Facettes nettes */}
                    <path d="M 25 10 L 15 32 L 25 50 Z" fill="url(#facetHighlightLive)"/>
                    <path d="M 25 10 L 35 32 L 25 50 Z" fill="url(#facetShadowLive)"/>
                    <path d="M 25 50 L 12 60 L 25 72 Z" fill="url(#facetHighlightLive)" opacity="0.8"/>
                    <path d="M 25 50 L 38 60 L 25 72 Z" fill="url(#facetShadowLive)" opacity="0.8"/>

                    {/* Reflet net */}
                    <ellipse cx="20" cy="25" rx="3" ry="10" fill="#ffffff" opacity="0.75" transform="rotate(-25 20 25)"/>

                    {/* Attache dorée nette */}
                    <ellipse cx="25" cy="8" rx="7" ry="2.5" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.2"/>
                    <rect x="23" y="8" width="4" height="2.5" rx="1.5" fill="#d97706"/>

                    {/* Pointe nette */}
                    <circle cx="25" cy="71" r="3" fill="#e9d5ff"/>
                    <circle cx="25" cy="71" r="1.5" fill="#ffffff"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0a1420]/98 via-[#0d1b2e]/98 to-[#0a1420]/98
                            border-2 border-purple-500/60 
                            rounded-xl px-6 py-4 
                            shadow-[0_0_40px_rgba(167,139,250,0.4)]
                            backdrop-blur-sm">
              <div className="flex items-center justify-center gap-3">
                <span className="text-purple-300 text-2xl animate-spin-slow">✦</span>
                <p className="text-purple-50 text-lg font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  {t('pendulum.thinking') || 'Le pendule consulte les astres...'}
                </p>
                <span className="text-cyan-300 text-2xl animate-spin-slow" style={{animationDelay: '1s'}}>✧</span>
              </div>
            </div>
          </div>
        )}

        {/* PHASE RÉPONSE */}
        {phase === 'answer' && currentAnswer && (
          <div className="flex-1 flex flex-col justify-center space-y-4">

            <div className="bg-gradient-to-br from-[#0a1420]/98 via-[#0d1b2e] to-[#0a1420]/98
                            border-2 border-purple-500/70 
                            rounded-2xl p-8 
                            shadow-[0_0_50px_rgba(167,139,250,0.6)]
                            backdrop-blur-sm
                            relative overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-radial from-purple-400/20 to-transparent rounded-full blur-3xl"></div>

              <div className="absolute top-3 left-3 text-purple-300/70 text-2xl animate-pulse-gentle">✦</div>
              <div className="absolute top-3 right-3 text-cyan-300/70 text-2xl animate-pulse-gentle" style={{animationDelay: '0.5s'}}>✦</div>
              <div className="absolute bottom-3 left-3 text-purple-300/70 text-2xl animate-pulse-gentle" style={{animationDelay: '1s'}}>✦</div>
              <div className="absolute bottom-3 right-3 text-cyan-300/70 text-2xl animate-pulse-gentle" style={{animationDelay: '1.5s'}}>✦</div>

              <div className="relative z-10 space-y-6 text-center">

                <div className="bg-gradient-to-r from-purple-900/60 via-indigo-900/60 to-purple-900/60 
                                rounded-lg p-4 border-2 border-purple-400/40">
                  <p className="text-purple-100 text-sm">
                    <span className="font-bold uppercase tracking-wide block mb-1.5">{t('pendulum.yourQuestion') || 'Votre question'}</span>
                    <span className="italic text-base">"{question}"</span>
                  </p>
                </div>

                <div className="space-y-4">
                  <div className={`text-7xl ${currentAnswer.color} 
                                   filter drop-shadow-[0_0_35px_currentColor] 
                                   animate-answer-appear font-bold`}>
                    {currentAnswer.icon}
                  </div>

                  <div className={`text-4xl font-serif font-bold ${currentAnswer.color} 
                                   drop-shadow-[0_0_25px_currentColor]`}>
                    {t(`pendulum.answers.${currentAnswer.key}`) || currentAnswer.key}
                  </div>

                  <div className="flex items-center justify-center gap-2 py-2">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>
                    <span className="text-purple-200 text-sm">✧</span>
                    <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>
                  </div>

                  <p className="text-purple-50 text-base leading-relaxed font-medium px-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    {currentAnswer.message}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-purple-900/40 
                                rounded-lg p-4 border-2 border-purple-400/30">
                  <p className="text-purple-50 text-sm leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
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
                           shadow-[0_0_30px_rgba(167,139,250,0.5)]
                           hover:shadow-[0_0_40px_rgba(167,139,250,0.7)]
                           border-2 border-purple-300/50"
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="text-xl">✦</span>
                  <span className="font-bold">{t('pendulum.newQuestion') || 'Nouvelle Question'}</span>
                  <span className="text-xl">✦</span>
                </span>
              </MysticalButton>

              <button
                onClick={onBack}
                className="w-full text-purple-200 hover:text-purple-50 
                           text-sm font-semibold py-2 
                           transition-all duration-300
                           drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
              >
                ← {t('pendulum.backHome') || 'Retour à l\'accueil'}
              </button>
            </div>

            {/* ⚠️ DISCLAIMER PLUS VISIBLE */}
            <div className="bg-gradient-to-r from-amber-900/70 via-yellow-900/70 to-amber-900/70 
                            rounded-xl p-5 border-3 border-amber-500/60
                            shadow-[0_0_30px_rgba(251,191,36,0.4)]">
              <p className="text-amber-50 text-sm sm:text-base text-center leading-relaxed font-bold
                            drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">
                <span className="text-2xl filter drop-shadow-[0_0_12px_rgba(251,191,36,1)] inline-block mr-2">⚠️</span>
                {t('pendulum.disclaimer') || 'Les réponses du pendule sont symboliques et destinées au divertissement. Écoutez toujours votre cœur et vos proches pour les choix importants.'}
              </p>
            </div>
          </div>
        )}

      </div>

      <style>{`
        @keyframes gentle-swing {
          0%, 100% { transform: rotate(-4deg); }
          50% { transform: rotate(4deg); }
        }

        @keyframes continuous-oscillation {
          0% { transform: rotate(-25deg); }
          50% { transform: rotate(25deg); }
          100% { transform: rotate(-25deg); }
        }

        @keyframes nebula-float {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(30px, -30px) scale(1.1); opacity: 0.5; }
        }

        @keyframes nebula-float-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.35; }
          50% { transform: translate(-30px, 30px) scale(1.05); opacity: 0.45; }
        }

        @keyframes mystic-pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.15); opacity: 0.5; }
        }

        @keyframes energy-ring-1 {
          0% { transform: scale(1) rotate(0deg); opacity: 0.3; }
          100% { transform: scale(1.2) rotate(360deg); opacity: 0.1; }
        }

        @keyframes energy-ring-2 {
          0% { transform: scale(1) rotate(0deg); opacity: 0.25; }
          100% { transform: scale(1.15) rotate(-360deg); opacity: 0.05; }
        }

        @keyframes energy-ring-3 {
          0% { transform: scale(1) rotate(0deg); opacity: 0.2; }
          100% { transform: scale(1.1) rotate(360deg); opacity: 0; }
        }

        @keyframes aura-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }

        @keyframes crystal-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }

        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        @keyframes answer-appear {
          0% { opacity: 0; transform: scale(0.3) rotate(-10deg); }
          60% { opacity: 1; transform: scale(1.15) rotate(5deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-nebula-float { animation: nebula-float 20s ease-in-out infinite; }
        .animate-nebula-float-reverse { animation: nebula-float-reverse 25s ease-in-out infinite; }
        .animate-mystic-pulse { animation: mystic-pulse 4s ease-in-out infinite; }
        .animate-energy-ring-1 { animation: energy-ring-1 8s linear infinite; }
        .animate-energy-ring-2 { animation: energy-ring-2 6s linear infinite; }
        .animate-energy-ring-3 { animation: energy-ring-3 10s linear infinite; }
        .animate-aura-pulse { animation: aura-pulse 3s ease-in-out infinite; }
        .animate-crystal-glow { animation: crystal-glow 2s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 4s ease-in-out infinite; }
        .animate-pulse-gentle { animation: pulse-gentle 3s ease-in-out infinite; }
        .animate-answer-appear { animation: answer-appear 1s ease-out forwards; }
        .animate-spin-slow { animation: spin-slow 4s linear infinite; }
        .animate-shimmer { animation: shimmer 2s ease-in-out infinite; }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}