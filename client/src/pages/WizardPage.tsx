// client/src/pages/WizardPage.tsx
// 🧙‍♂️ Azraël — Bouton consulter premium animé

import { useState, useCallback } from 'react';
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

function WizardPage({ onBack, onSaveReading, shouldShowAdBeforeReading, onReadingComplete, user }: WizardPageProps) {
  const [question, setQuestion] = useState('');
  const [phase, setPhase] = useState<Phase>('home');
  const [currentAnswer, setCurrentAnswer] = useState<{ key: string; icon: string; color: string } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { t } = useLanguage();

  const saveReading = async (answerKey: string) => {
    if (onSaveReading) {
      try {
        await onSaveReading({ type: 'wizard', question, answer: answerKey, date: new Date() });
      } catch (error) {
        console.error('❌ Save error:', error);
      }
    }
  };

  const handleGoToQuestion = () => setPhase('question');

  const handleAskQuestion = async () => {
    if (!question.trim() || isProcessing) return;
    setIsProcessing(true);
    try {
      if (shouldShowAdBeforeReading) await shouldShowAdBeforeReading('wizard');
      setPhase('channeling');
      setCurrentAnswer(null);
      setTimeout(() => {
        const randomAnswer = wizardAnswers[getSecureRandomInt(0, wizardAnswers.length - 1)];
        setCurrentAnswer(randomAnswer);
        setPhase('answer');
        saveReading(randomAnswer.key);
        if (onReadingComplete) onReadingComplete('wizard');
        setIsProcessing(false);
      }, 6000);
    } catch (error) {
      console.error('❌ [WIZARD] Erreur:', error);
      setIsProcessing(false);
    }
  };

  const handleNewQuestion = () => {
    if (isProcessing) return;
    setQuestion('');
    setCurrentAnswer(null);
    setPhase('home');
    setIsProcessing(false);
  };

  return (
    <div className="wizard-page fixed inset-0 flex flex-col overflow-hidden bg-[#030610]">

      <style>{`
        /* ═══ BOUTON PREMIUM CONSULTER ═══ */
        @keyframes btn-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes btn-pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(129,140,248,0.55), 0 0 20px rgba(139,92,246,0.40); }
          70% { box-shadow: 0 0 0 12px rgba(129,140,248,0), 0 0 30px rgba(139,92,246,0.20); }
          100% { box-shadow: 0 0 0 0 rgba(129,140,248,0), 0 0 20px rgba(139,92,246,0.40); }
        }
        @keyframes icon-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-3px) rotate(8deg); }
        }
        @keyframes btn-border-rotate {
          from { --border-angle: 0deg; }
          to { --border-angle: 360deg; }
        }
        @keyframes sparkle-btn {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes pb-safe-anim {
          0% { } 100% { }
        }

        .btn-consult {
          position: relative;
          width: 100%;
          padding: 18px 24px;
          border-radius: 16px;
          border: none;
          cursor: pointer;
          overflow: hidden;
          background: linear-gradient(
            135deg,
            #4338ca 0%,
            #6d28d9 30%,
            #7c3aed 50%,
            #6d28d9 70%,
            #4338ca 100%
          );
          background-size: 200% 200%;
          animation: btn-pulse-ring 2.5s ease-out infinite;
          transition: transform 0.15s ease, filter 0.15s ease;
        }

        .btn-consult:hover:not(:disabled) {
          transform: translateY(-2px) scale(1.01);
          filter: brightness(1.12);
        }

        .btn-consult:active:not(:disabled) {
          transform: translateY(0px) scale(0.98);
        }

        .btn-consult:disabled {
          opacity: 0.45;
          cursor: not-allowed;
          animation: none;
        }

        /* Shimmer sweep sur le bouton */
        .btn-consult::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(
            105deg,
            transparent 30%,
            rgba(255,255,255,0.18) 50%,
            transparent 70%
          );
          background-size: 200% 100%;
          animation: btn-shimmer 3s linear infinite;
          border-radius: 16px;
          pointer-events: none;
        }

        /* Ligne de reflet haut */
        .btn-consult::after {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.55), transparent);
          border-radius: 999px;
          pointer-events: none;
        }

        .btn-consult-inner {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .btn-icon-left {
          font-size: 22px;
          animation: icon-float 3s ease-in-out infinite;
        }

        .btn-icon-right {
          font-size: 22px;
          animation: icon-float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .btn-label {
          font-size: 17px;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: rgba(255,255,255,0.97);
          text-shadow: 0 1px 8px rgba(0,0,0,0.40);
        }

        /* Sparkles sur le bouton */
        .btn-sparkle {
          position: absolute;
          width: 5px; height: 5px;
          border-radius: 50%;
          background: rgba(255,255,255,0.80);
          pointer-events: none;
          animation: sparkle-btn 2.5s ease-in-out infinite;
        }

        /* Bouton secondaire (retour) */
        .btn-back {
          width: 100%;
          padding: 12px 24px;
          background: transparent;
          border: 1px solid rgba(129,140,248,0.25);
          border-radius: 12px;
          color: rgba(165,180,252,0.80);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          min-height: 44px;
        }
        .btn-back:hover:not(:disabled) {
          background: rgba(129,140,248,0.08);
          border-color: rgba(129,140,248,0.45);
          color: rgba(199,210,254,0.95);
        }
        .btn-back:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }

        .pb-safe-banner {
          padding-bottom: calc(110px + env(safe-area-inset-bottom, 0px));
        }
        @media (min-width: 640px) {
          .pb-safe-banner {
            padding-bottom: calc(120px + env(safe-area-inset-bottom, 0px));
          }
        }
      `}</style>

      {/* FOND COSMIQUE */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#030610] via-[#080b18] to-[#0b0f22]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.30) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)' }} />
        </div>
        {/* Étoiles */}
        <div className="absolute inset-0 opacity-50">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                backgroundColor: i % 3 === 0 ? '#a78bfa' : i % 3 === 1 ? '#60a5fa' : '#e8d4b8',
                width: '2px', height: '2px',
                top: `${(i * 3.33 + 7) % 100}%`,
                left: `${(i * 7.11 + 3) % 100}%`,
                opacity: 0.5 + (i % 5) * 0.1,
              }}
            />
          ))}
        </div>
      </div>

      {/* HEADER */}
      <div className="flex-shrink-0 text-center px-4 pt-20 pb-4 relative z-10">
        <h1
          className="text-2xl sm:text-3xl font-serif font-bold"
          style={{
            background: 'linear-gradient(to right, #c7d2fe, #e0e7ff, #c7d2fe)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 20px rgba(129,140,248,0.6))',
          }}
        >
          {t('wizard.title')}
        </h1>
        <p className="text-indigo-100/90 text-sm mt-2 font-medium" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>
          {phase === 'home' && t('wizard.subtitle.home')}
          {phase === 'question' && t('wizard.subtitle.question')}
          {phase === 'channeling' && t('wizard.subtitle.channeling')}
          {phase === 'answer' && t('wizard.subtitle.answer')}
        </p>
      </div>

      {/* CONTENU SCROLLABLE */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 relative z-10">
        <div className="max-w-3xl mx-auto w-full min-h-full pb-safe-banner">

          {/* ═══ HOME ═══ */}
          {phase === 'home' && (
            <div className="flex flex-col min-h-full">
              <div className="flex-1 flex items-center justify-center py-4">
                <WizardAnimation isChanneling={false} />
              </div>

              <div className="flex-shrink-0 space-y-3 pb-6">
                {/* ✨ BOUTON PREMIUM */}
                <button
                  className="btn-consult"
                  onClick={handleGoToQuestion}
                  disabled={isProcessing}
                >
                  {/* Sparkles décoratifs */}
                  <div className="btn-sparkle" style={{ top: '20%', left: '8%', animationDelay: '0s' }} />
                  <div className="btn-sparkle" style={{ top: '60%', left: '12%', animationDelay: '0.8s' }} />
                  <div className="btn-sparkle" style={{ top: '25%', right: '10%', animationDelay: '1.6s' }} />
                  <div className="btn-sparkle" style={{ top: '65%', right: '8%', animationDelay: '0.4s' }} />

                  <div className="btn-consult-inner">
                    <span className="btn-icon-left">🔮</span>
                    <span className="btn-label">{t('wizard.consultButton')}</span>
                    <span className="btn-icon-right">✨</span>
                  </div>
                </button>

                <button className="btn-back" onClick={onBack} disabled={isProcessing}>
                  {t('wizard.backButton')}
                </button>
              </div>
            </div>
          )}

          {/* ═══ QUESTION ═══ */}
          {phase === 'question' && (
            <div className="py-6">
              <div className="space-y-6 max-w-xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(129,140,248,0.60), transparent)' }} />
                    <span className="text-indigo-300 text-2xl">✧</span>
                    <div className="w-12 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(129,140,248,0.60), transparent)' }} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-indigo-50">{t('wizard.askTitle')}</h2>
                </div>

                <div
                  className="rounded-2xl p-6 backdrop-blur-sm"
                  style={{
                    background: 'linear-gradient(135deg, rgba(10,20,32,0.95) 0%, rgba(13,27,46,0.95) 100%)',
                    border: '2px solid rgba(99,102,241,0.45)',
                    boxShadow: '0 0 35px rgba(129,140,248,0.35)',
                  }}
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="block text-indigo-100 text-sm font-semibold">{t('wizard.questionLabel')}</label>
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

                    <div
                      className="rounded-xl p-4"
                      style={{
                        background: 'linear-gradient(to right, rgba(49,46,129,0.60), rgba(76,29,149,0.60), rgba(49,46,129,0.60))',
                        border: '2px solid rgba(99,102,241,0.35)',
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-xl flex-shrink-0">✧</span>
                        <div className="space-y-1">
                          <p className="text-indigo-50 font-bold text-sm">{t('wizard.adviceTitle')}</p>
                          <p className="text-indigo-50/90 text-sm leading-relaxed">{t('wizard.adviceText')}</p>
                        </div>
                      </div>
                    </div>

                    {/* Bouton premium dans la phase question aussi */}
                    <button
                      className="btn-consult"
                      onClick={handleAskQuestion}
                      disabled={!question.trim() || isProcessing}
                    >
                      <div className="btn-sparkle" style={{ top: '20%', left: '8%', animationDelay: '0s' }} />
                      <div className="btn-sparkle" style={{ top: '65%', right: '8%', animationDelay: '1.2s' }} />
                      <div className="btn-consult-inner">
                        <span className="btn-icon-left">🔮</span>
                        <span className="btn-label">
                          {isProcessing ? (t('wizard.processing') || 'Traitement...') : t('wizard.consultAction')}
                        </span>
                        <span className="btn-icon-right">✨</span>
                      </div>
                    </button>

                    <button className="btn-back" onClick={() => !isProcessing && setPhase('home')} disabled={isProcessing}>
                      {t('wizard.backButton')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ═══ CHANNELING ═══ */}
          {phase === 'channeling' && (
            <div className="flex flex-col min-h-full">
              <div className="flex-1 flex items-center justify-center py-4">
                <WizardAnimation isChanneling={true} />
              </div>
              <div className="flex-shrink-0 pb-6">
                <div
                  className="rounded-xl px-6 py-4 backdrop-blur-sm"
                  style={{
                    background: 'linear-gradient(135deg, rgba(10,20,32,0.95) 0%, rgba(13,27,46,0.95) 100%)',
                    border: '2px solid rgba(99,102,241,0.55)',
                    boxShadow: '0 0 40px rgba(129,140,248,0.45)',
                  }}
                >
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-indigo-300 text-xl">✦</span>
                    <p className="text-indigo-50 text-base font-medium">{t('wizard.channeling')}</p>
                    <span className="text-purple-300 text-xl">✧</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ═══ ANSWER ═══ */}
          {phase === 'answer' && currentAnswer && (
            <div className="py-6">
              <div className="space-y-4">
                <div
                  className="rounded-2xl p-6 backdrop-blur-sm"
                  style={{
                    background: 'linear-gradient(135deg, rgba(10,20,32,0.95) 0%, rgba(13,27,46,0.95) 100%)',
                    border: '2px solid rgba(99,102,241,0.65)',
                    boxShadow: '0 0 45px rgba(129,140,248,0.55)',
                  }}
                >
                  <div className="space-y-5 text-center">
                    <div
                      className="rounded-lg p-4"
                      style={{
                        background: 'linear-gradient(to right, rgba(49,46,129,0.60), rgba(76,29,149,0.60), rgba(49,46,129,0.60))',
                        border: '2px solid rgba(99,102,241,0.45)',
                      }}
                    >
                      <p className="text-indigo-50 text-sm">
                        <span className="font-bold uppercase tracking-wide block mb-1">{t('wizard.yourQuestion')}</span>
                        <span className="italic text-base">"{question}"</span>
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className={`text-6xl sm:text-7xl ${currentAnswer.color}`} style={{ filter: 'drop-shadow(0 0 30px currentColor)' }}>
                        {currentAnswer.icon}
                      </div>
                      <div className="flex items-center justify-center gap-2 py-1">
                        <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, rgba(129,140,248,0.60), transparent)' }} />
                        <span className="text-indigo-200 text-sm">✧</span>
                        <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, rgba(129,140,248,0.60), transparent)' }} />
                      </div>
                      <p className="text-indigo-50 text-lg leading-relaxed font-medium px-4">
                        {t(`wizard.answer.${currentAnswer.key}`)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <button className="btn-consult" onClick={handleNewQuestion} disabled={isProcessing}>
                    <div className="btn-sparkle" style={{ top: '20%', left: '8%', animationDelay: '0s' }} />
                    <div className="btn-sparkle" style={{ top: '65%', right: '8%', animationDelay: '1.2s' }} />
                    <div className="btn-consult-inner">
                      <span className="btn-icon-left">✨</span>
                      <span className="btn-label">{t('wizard.newQuestion')}</span>
                      <span className="btn-icon-right">🔮</span>
                    </div>
                  </button>

                  <button className="btn-back" onClick={onBack} disabled={isProcessing}>
                    {t('wizard.backHome')}
                  </button>
                </div>

                <div
                  className="rounded-xl p-4"
                  style={{
                    background: 'linear-gradient(to right, rgba(120,53,15,0.70), rgba(113,63,18,0.70), rgba(120,53,15,0.70))',
                    border: '2px solid rgba(217,119,6,0.55)',
                  }}
                >
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
    </div>
  );
}

export default WizardPage;