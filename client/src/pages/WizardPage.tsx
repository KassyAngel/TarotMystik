// client/src/pages/WizardPage.tsx
// ✅ v3 — Scroll forcé en haut à chaque phase, fluidité maximale, préchargement anticipé

import { useState, useCallback, useEffect, useRef } from 'react';
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
  { key: 'yes',            icon: '◉',  color: 'text-emerald-400' },
  { key: 'no',             icon: '⊘',  color: 'text-rose-400'    },
  { key: 'maybe',          icon: '◐',  color: 'text-amber-400'   },
  { key: 'veryLikely',     icon: '✶',  color: 'text-cyan-400'    },
  { key: 'unlikely',       icon: '◔',  color: 'text-indigo-400'  },
  { key: 'certain',        icon: '◎',  color: 'text-emerald-300' },
  { key: 'noChance',       icon: '⦻',  color: 'text-rose-300'    },
  { key: 'askLater',       icon: '⧖',  color: 'text-slate-400'   },
  { key: 'dontCount',      icon: '⟁',  color: 'text-orange-400'  },
  { key: 'yesDefinitely',  icon: '✹',  color: 'text-emerald-500' },
  { key: 'signsYes',       icon: '⌁',  color: 'text-yellow-300'  },
  { key: 'signsNo',        icon: '⌿',  color: 'text-purple-400'  },
  { key: 'unclear',        icon: '≈',  color: 'text-gray-400'    },
  { key: 'trustIntuition', icon: '◈',  color: 'text-pink-400'    },
];

const SOUNDS_TO_PRELOAD = [
  '/sounds/soundswizard-fr.mp3',
  '/sounds/soundswizard-en.mp3',
  '/sounds/soundswizard-es.mp3',
  '/sounds/soundswizard-de.mp3',
  '/sounds/soundswizard-it.mp3',
  '/sounds/wizard-sound.mp3',
];

function WizardPage({ onBack, onSaveReading, shouldShowAdBeforeReading, onReadingComplete }: WizardPageProps) {
  const [question, setQuestion]           = useState('');
  const [phase, setPhase]                 = useState<Phase>('home');
  const [currentAnswer, setCurrentAnswer] = useState<{ key: string; icon: string; color: string } | null>(null);
  const [isProcessing, setIsProcessing]   = useState(false);
  const { t, language } = useLanguage();

  const pendingAnswerRef = useRef<{ key: string; icon: string; color: string } | null>(null);
  const adPromiseRef     = useRef<Promise<boolean> | null>(null);

  // ✅ Ref sur le conteneur scrollable pour forcer scrollTop = 0
  const scrollRef = useRef<HTMLDivElement>(null);

  // ✅ Scroll en haut à chaque changement de phase
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
    // Aussi scroller le conteneur parent de App.tsx (overflow-y:auto)
    const parentScroll = document.querySelector('.overflow-y-auto');
    if (parentScroll) {
      parentScroll.scrollTop = 0;
    }
  }, [phase]);

  // ✅ Scroll en haut au premier montage (cas connexion directe sur cette page)
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    const parentScroll = document.querySelector('.overflow-y-auto');
    if (parentScroll) parentScroll.scrollTop = 0;
  }, []);

  // ── Préchargement sons ──
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const audios: HTMLAudioElement[] = [];

    const prioritized = [
      `/sounds/soundswizard-${language}.mp3`,
      '/sounds/wizard-sound.mp3',
      ...SOUNDS_TO_PRELOAD.filter(s => !s.includes(`-${language}.`)),
    ];
    const unique = Array.from(new Set(prioritized));

    unique.forEach((src, i) => {
      const t = setTimeout(() => {
        const a = new Audio();
        a.preload = 'auto';
        a.src = src;
        a.load();
        audios.push(a);
      }, i * 120);
      timers.push(t);
    });

    return () => {
      timers.forEach(clearTimeout);
      audios.forEach(a => { a.src = ''; });
    };
  }, [language]);

  // ── Préchargement vidéos ──
  useEffect(() => {
    const links: HTMLLinkElement[] = [];
    ['/Image/wizard.webm', '/Image/wizard-video.webm'].forEach(href => {
      if (document.querySelector(`link[href="${href}"]`)) return;
      const link = document.createElement('link');
      link.rel  = 'preload';
      link.as   = 'video';
      link.href = href;
      document.head.appendChild(link);
      links.push(link);
    });
    return () => links.forEach(l => l.remove());
  }, []);

  const saveReading = async (answerKey: string) => {
    if (onSaveReading) {
      try { await onSaveReading({ type: 'wizard', question, answer: answerKey, date: new Date() }); }
      catch (e) { console.error('Save error:', e); }
    }
  };

  const handleGoToQuestion = () => setPhase('question');

  const handleAskQuestion = async () => {
    if (!question.trim() || isProcessing) return;
    setIsProcessing(true);
    pendingAnswerRef.current = wizardAnswers[getSecureRandomInt(0, wizardAnswers.length - 1)];
    // ✅ Transition immédiate vers channeling — pas d'await bloquant
    setPhase('channeling');
    setCurrentAnswer(null);
    if (shouldShowAdBeforeReading) {
      adPromiseRef.current = shouldShowAdBeforeReading('wizard').catch(() => false);
    }
  };

  const handleNewQuestion = () => {
    if (isProcessing) return;
    setQuestion('');
    setCurrentAnswer(null);
    setPhase('home');
    setIsProcessing(false);
    pendingAnswerRef.current = null;
    adPromiseRef.current     = null;
  };

  // Appelé par WizardAnimation quand la barre atteint 100%
  const handleChannelingEnd = useCallback(async () => {
    if (adPromiseRef.current) {
      await adPromiseRef.current.catch(() => {});
    }
    const answer = pendingAnswerRef.current
      ?? wizardAnswers[getSecureRandomInt(0, wizardAnswers.length - 1)];
    setCurrentAnswer(answer);
    setPhase('answer');
    saveReading(answer.key);
    if (onReadingComplete) onReadingComplete('wizard');
    setIsProcessing(false);
  }, []);

  return (
    <div className="wizard-page fixed inset-0 flex flex-col overflow-hidden bg-[transparent]">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');

        .wiz-serif { font-family: 'Cinzel', serif; }
        .wiz-body  { font-family: 'EB Garamond', serif; }

        @keyframes btn-ring {
          0%   { box-shadow: 0 0 0 0   rgba(148,163,184,0.30), 0 0 24px rgba(99,102,241,0.25); }
          70%  { box-shadow: 0 0 0 10px rgba(148,163,184,0),   0 0 36px rgba(99,102,241,0.10); }
          100% { box-shadow: 0 0 0 0   rgba(148,163,184,0),   0 0 24px rgba(99,102,241,0.25); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes answer-in {
          0%   { opacity: 0; transform: scale(0.72) translateY(8px); }
          65%  { transform: scale(1.06) translateY(-2px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes glow-pulse {
          0%,100% { filter: drop-shadow(0 0 10px currentColor); }
          50%     { filter: drop-shadow(0 0 26px currentColor) drop-shadow(0 0 48px currentColor); }
        }
        @keyframes divider-fade {
          from { opacity: 0; transform: scaleX(0.4); }
          to   { opacity: 1; transform: scaleX(1); }
        }

        .btn-primary {
          position: relative; width: 100%; padding: 16px 28px;
          border-radius: 12px; border: 1px solid rgba(148,163,184,0.22);
          cursor: pointer; overflow: hidden; letter-spacing: 0.12em;
          background: linear-gradient(135deg, #1e1b4b 0%, #312e81 35%, #3730a3 50%, #312e81 65%, #1e1b4b 100%);
          background-size: 200%;
          animation: btn-ring 2.8s ease-out infinite;
          transition: transform 0.15s ease, filter 0.15s ease;
          font-family: 'Cinzel', serif; font-size: 14px; font-weight: 600;
          color: rgba(226,232,240,0.95); text-transform: uppercase;
        }
        .btn-primary::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.10) 50%, transparent 70%);
          background-size: 200% 100%;
          animation: shimmer 3.5s linear infinite;
          pointer-events: none;
        }
        .btn-primary::after {
          content: ''; position: absolute;
          top: 0; left: 15%; right: 15%; height: 1px;
          background: linear-gradient(to right, transparent, rgba(148,163,184,0.40), transparent);
          pointer-events: none;
        }
        .btn-primary:hover:not(:disabled) { transform: translateY(-1px); filter: brightness(1.10); }
        .btn-primary:active:not(:disabled) { transform: translateY(0px) scale(0.99); }
        .btn-primary:disabled { opacity: 0.38; cursor: not-allowed; animation: none; }

        .btn-ghost {
          width: 100%; padding: 13px 28px;
          background: transparent;
          border: 1px solid rgba(100,116,139,0.20);
          border-radius: 12px;
          color: rgba(148,163,184,0.75);
          font-family: 'Cinzel', serif; font-size: 12px; font-weight: 600;
          letter-spacing: 0.10em; text-transform: uppercase;
          cursor: pointer; transition: all 0.2s ease; min-height: 44px;
        }
        .btn-ghost:hover:not(:disabled) {
          background: rgba(100,116,139,0.06);
          border-color: rgba(100,116,139,0.38);
          color: rgba(203,213,225,0.90);
        }
        .btn-ghost:disabled { opacity: 0.38; cursor: not-allowed; }

        .ornament {
          display: flex; align-items: center; gap: 14px;
          animation: divider-fade 0.6s ease forwards;
        }
        .ornament-line {
          flex: 1; height: 1px;
          background: linear-gradient(to right, transparent, rgba(99,102,241,0.45), transparent);
        }
        .ornament-glyph { color: rgba(99,102,241,0.70); font-size: 13px; letter-spacing: 0.2em; }

        .card-border {
          border-radius: 18px; padding: 2px;
          background: linear-gradient(140deg, rgba(99,102,241,0.55) 0%, rgba(71,85,105,0.28) 50%, rgba(99,102,241,0.55) 100%);
          box-shadow: 0 0 48px rgba(99,102,241,0.18), 0 0 96px rgba(67,56,202,0.08);
        }
        .card-inner {
          border-radius: 16px; padding: 28px 22px;
          background: linear-gradient(160deg, rgba(7,5,28,0.99) 0%, rgba(12,9,42,0.99) 100%);
        }

        .wiz-input-wrap { position: relative; }
        .wiz-input-wrap input {
          width: 100% !important; border-radius: 10px !important;
          border: none !important; background: transparent !important;
          box-shadow: none !important; padding: 14px 48px 14px 16px !important;
          font-size: 15px !important; font-family: 'EB Garamond', serif !important;
          color: rgba(224,231,255,0.92) !important; outline: none !important;
          max-width: 100% !important; text-align: left !important;
        }
        .wiz-input-wrap input::placeholder { color: rgba(129,140,248,0.38) !important; }
        .input-shell {
          border-radius: 10px; border: 1px solid rgba(99,102,241,0.38);
          background: rgba(8,6,28,0.85);
          box-shadow: inset 0 2px 10px rgba(0,0,0,0.45);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input-shell:focus-within {
          border-color: rgba(129,140,248,0.65);
          box-shadow: inset 0 2px 10px rgba(0,0,0,0.45), 0 0 0 3px rgba(99,102,241,0.10);
        }
        .input-counter {
          position: absolute; bottom: 10px; right: 12px;
          font-size: 11px; font-family: 'EB Garamond', serif;
          pointer-events: none; transition: color 0.3s;
        }

        .answer-icon {
          animation:
            answer-in 0.75s cubic-bezier(0.34,1.56,0.64,1) forwards,
            glow-pulse 3.2s ease-in-out infinite 0.75s;
        }

        .wiz-ghost {
          position: absolute; inset: 0;
          opacity: 0; pointer-events: none; z-index: -1; visibility: hidden;
        }

        .pb-safe { padding-bottom: calc(110px + env(safe-area-inset-bottom, 0px)); }
        @media (min-width:640px) { .pb-safe { padding-bottom: calc(120px + env(safe-area-inset-bottom, 0px)); } }
      `}</style>

      {/* ── FOND COSMIQUE ── */}
      <div className="fixed inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-[#030610] via-[#07091a] to-[#0a0d20]" />
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.35) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%)' }} />
        </div>
        <div className="absolute inset-0 opacity-40">
          {[...Array(28)].map((_, i) => (
            <div key={i} className="absolute rounded-full" style={{
              backgroundColor: i % 3 === 0 ? '#a5b4fc' : i % 3 === 1 ? '#93c5fd' : '#e2d9c8',
              width: i % 5 === 0 ? '2px' : '1px', height: i % 5 === 0 ? '2px' : '1px',
              top: `${(i * 3.57 + 11) % 100}%`, left: `${(i * 7.13 + 5) % 100}%`,
              opacity: 0.35 + (i % 4) * 0.15,
            }} />
          ))}
        </div>
      </div>

      {/* ── HEADER ── */}
      <header className="flex-shrink-0 text-center px-6 pt-20 pb-4 relative z-10">
        <h1 className="wiz-serif text-2xl sm:text-3xl font-bold tracking-widest" style={{
          background: 'linear-gradient(to right, #c7d2fe, #e0e7ff, #c7d2fe)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 0 18px rgba(99,102,241,0.55))',
        }}>
          {t('wizard.title')}
        </h1>
        <p className="wiz-body text-sm mt-2 tracking-wide" style={{ color: 'rgba(165,180,252,0.80)', textShadow: '0 2px 8px rgba(0,0,0,0.80)' }}>
          {phase === 'home'       && t('wizard.subtitle.home')}
          {phase === 'question'   && t('wizard.subtitle.question')}
          {phase === 'channeling' && t('wizard.subtitle.channeling')}
          {phase === 'answer'     && t('wizard.subtitle.answer')}
        </p>
      </header>

      {/*
        ✅ Conteneur scrollable avec ref — scrollTop forcé à 0 à chaque changement de phase
        et au montage initial (cas connexion directe sur cette page)
      */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto overflow-x-hidden px-4 relative z-10"
      >
        <div className="max-w-2xl mx-auto w-full min-h-full pb-safe">

          {/* ══ HOME ══ */}
          {phase === 'home' && (
            <div className="flex flex-col min-h-full">
              <div className="flex-1 flex items-center justify-center py-4">
                <WizardAnimation isChanneling={false} />
              </div>
              <div className="flex-shrink-0 space-y-3 pb-6">
                <button className="btn-primary" onClick={handleGoToQuestion} disabled={isProcessing}>
                  {t('wizard.consultButton')}
                </button>
                <button className="btn-ghost" onClick={onBack} disabled={isProcessing}>
                  {t('wizard.backButton')}
                </button>
              </div>
            </div>
          )}

          {/* ══ QUESTION ══ */}
          {phase === 'question' && (
            <div className="py-8">
              {/* Fantôme WizardAnimation — préchargé mais invisible */}
              <div className="wiz-ghost" aria-hidden>
                <WizardAnimation isChanneling={false} />
              </div>

              <div className="space-y-6 max-w-lg mx-auto">
                <div className="ornament">
                  <div className="ornament-line" />
                  <span className="ornament-glyph">✦</span>
                  <div className="ornament-line" />
                </div>

                <div className="card-border">
                  <div className="card-inner">
                    <div className="ornament mb-5">
                      <div className="ornament-line" />
                      <span className="wiz-serif text-xs tracking-widest uppercase" style={{ color: 'rgba(165,180,252,0.80)' }}>
                        {t('wizard.questionLabel')}
                      </span>
                      <div className="ornament-line" />
                    </div>

                    <div className="input-shell wiz-input-wrap">
                      <MysticalInput
                        placeholder={t('wizard.questionPlaceholder')}
                        value={question}
                        onChange={setQuestion}
                        maxLength={200}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && question.trim() && !isProcessing) {
                            handleAskQuestion();
                          }
                        }}
                        className="!rounded-none !border-0 !bg-transparent !shadow-none !ring-0"
                      />
                      <span
                        className="input-counter"
                        style={{ color: question.length > 160 ? 'rgba(251,191,36,0.85)' : 'rgba(99,102,241,0.45)' }}
                      >
                        {question.length}/200
                      </span>
                    </div>

                    <div style={{
                      marginTop: '16px', padding: '12px 16px', borderRadius: '10px',
                      background: 'rgba(30,27,75,0.50)', border: '1px solid rgba(99,102,241,0.22)',
                    }}>
                      <p className="wiz-body" style={{ fontSize: '14px', color: 'rgba(199,210,254,0.72)', lineHeight: '1.6', margin: 0 }}>
                        <span className="wiz-serif" style={{ color: 'rgba(216,180,254,0.90)', fontWeight: 600 }}>
                          {t('wizard.adviceTitle')}
                        </span>
                        {' — '}
                        {t('wizard.adviceText')}
                      </p>
                    </div>
                  </div>
                </div>

                <button className="btn-primary" onClick={handleAskQuestion} disabled={!question.trim() || isProcessing}>
                  {isProcessing ? (t('wizard.processing') || '...') : t('wizard.consultAction')}
                </button>
                <button className="btn-ghost" onClick={() => !isProcessing && setPhase('home')} disabled={isProcessing}>
                  {t('wizard.backButton')}
                </button>
              </div>
            </div>
          )}

          {/* ══ CHANNELING ══ */}
          {phase === 'channeling' && (
            <div className="flex flex-col min-h-full">
              <div className="flex-1 flex items-center justify-center py-4">
                <WizardAnimation isChanneling={true} onChannelingEnd={handleChannelingEnd} />
              </div>
              <div className="flex-shrink-0 pb-6">
                <div className="card-border">
                  <div className="card-inner" style={{ padding: '18px 24px' }}>
                    <div className="ornament">
                      <div className="ornament-line" />
                      <p className="wiz-serif text-sm tracking-widest uppercase" style={{ color: 'rgba(199,210,254,0.85)' }}>
                        {t('wizard.channeling')}
                      </p>
                      <div className="ornament-line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ══ ANSWER ══ */}
          {phase === 'answer' && currentAnswer && (
            <div className="py-8">
              <div className="space-y-5">
                <div className="card-border">
                  <div className="card-inner">
                    <div style={{
                      padding: '12px 16px', borderRadius: '10px', marginBottom: '26px',
                      background: 'rgba(30,27,75,0.45)', border: '1px solid rgba(99,102,241,0.22)',
                    }}>
                      <p className="wiz-serif" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(129,140,248,0.65)', marginBottom: '6px' }}>
                        {t('wizard.yourQuestion')}
                      </p>
                      <p className="wiz-body" style={{ fontSize: '15px', color: 'rgba(224,231,255,0.85)', fontStyle: 'italic', lineHeight: '1.55', margin: 0 }}>
                        « {question} »
                      </p>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                      <p className="wiz-serif" style={{
                        fontSize: '13px', letterSpacing: '0.22em', textTransform: 'uppercase',
                        color: 'rgba(199,210,254,0.92)', marginBottom: '22px',
                        textShadow: '0 0 18px rgba(129,140,248,0.85), 0 0 40px rgba(99,102,241,0.50)',
                      }}>
                        {t('wizard.oracleResponse') ?? "Réponse d'Azraël"}
                      </p>

                      <div style={{
                        padding: '28px 24px', borderRadius: '16px',
                        background: 'linear-gradient(160deg, rgba(30,27,75,0.60) 0%, rgba(49,46,129,0.35) 100%)',
                        border: '1px solid rgba(129,140,248,0.30)',
                        boxShadow: '0 0 40px rgba(99,102,241,0.18), inset 0 1px 0 rgba(165,180,252,0.10)',
                      }}>
                        <p
                          className={`wiz-serif answer-icon ${currentAnswer.color}`}
                          style={{
                            fontSize: '28px', fontWeight: 700, letterSpacing: '0.06em',
                            lineHeight: '1.35', margin: 0,
                            filter: 'drop-shadow(0 0 22px currentColor)',
                          }}
                        >
                          {t(`wizard.answer.${currentAnswer.key}`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <button className="btn-primary" onClick={handleNewQuestion} disabled={isProcessing}>
                    {t('wizard.newQuestion')}
                  </button>
                  <button className="btn-ghost" onClick={onBack} disabled={isProcessing}>
                    {t('wizard.backHome')}
                  </button>
                </div>

                <div style={{
                  borderRadius: '12px', padding: '14px 18px',
                  background: 'linear-gradient(to right, rgba(92,38,9,0.55), rgba(88,46,12,0.55), rgba(92,38,9,0.55))',
                  border: '1px solid rgba(180,83,9,0.40)',
                }}>
                  <p className="wiz-body text-center" style={{ fontSize: '13px', lineHeight: '1.6', color: 'rgba(253,230,138,0.85)' }}>
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