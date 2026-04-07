// src/components/RatingModal.tsx
// ✅ v2 — Design mystique violet/indigo, centré, sans étoile géante dorée

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRate: () => void;
}

export default function RatingModal({ isOpen, onClose, onRate }: RatingModalProps) {
  const { t } = useLanguage();
  const [stars, setStars]           = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [visible, setVisible]       = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => setVisible(true), 40);
    } else {
      setVisible(false);
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleRate = () => {
    if (stars >= 4) {
      window.open('https://play.google.com/store/apps/details?id=com.tarotmystik.app', '_blank');
    }
    onRate();
    onClose();
  };

  const handleLater = () => {
    localStorage.setItem('ratingPostponed', Date.now().toString());
    onClose();
  };

  const handleNever = () => {
    localStorage.setItem('ratingDismissed', 'true');
    onClose();
  };

  const activeStars = hoveredStar || stars;

  const starMessages = ['', 'Hmm…', 'Peut mieux faire', 'Pas mal', 'J\'aime bien !', 'J\'adore !'];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');

        @keyframes rm-backdrop {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes rm-card {
          from { opacity: 0; transform: translateY(24px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        @keyframes rm-glow-pulse {
          0%,100% { opacity: 0.45; }
          50%     { opacity: 0.80; }
        }
        @keyframes rm-shimmer {
          from { background-position: -200% center; }
          to   { background-position:  200% center; }
        }
        @keyframes rm-star-in {
          0%   { transform: scale(0.6) rotate(-15deg); opacity: 0; }
          60%  { transform: scale(1.2) rotate(4deg); }
          100% { transform: scale(1)   rotate(0deg); opacity: 1; }
        }
        @keyframes rm-particle {
          0%   { opacity: 0; transform: translate(0,0) scale(0.5); }
          30%  { opacity: 1; }
          100% { opacity: 0; transform: translate(var(--dx), var(--dy)) scale(1.3); }
        }
        @keyframes rm-line-grow {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }

        .rm-backdrop {
          animation: rm-backdrop 0.22s ease-out forwards;
        }
        .rm-card {
          animation: rm-card 0.38s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        .rm-glow {
          animation: rm-glow-pulse 3s ease-in-out infinite;
        }
        .rm-particle {
          animation: rm-particle 2.8s ease-out infinite;
        }

        /* Bouton principal violet */
        .rm-btn-primary {
          position: relative; overflow: hidden;
          width: 100%;
          height: 52px;
          border-radius: 12px;
          border: 1px solid rgba(129,140,248,0.45);
          background: linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #3730a3 55%, #312e81 70%, #1e1b4b 100%);
          background-size: 200%;
          color: rgba(224,231,255,0.96);
          font-family: 'Cinzel', serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform 0.15s, filter 0.15s;
          box-shadow: 0 0 24px rgba(99,102,241,0.28), inset 0 1px 0 rgba(165,180,252,0.12);
        }
        .rm-btn-primary::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.09) 50%, transparent 70%);
          background-size: 200% 100%;
          animation: rm-shimmer 3s linear infinite;
          pointer-events: none;
        }
        .rm-btn-primary:hover:not(:disabled) { transform: translateY(-1px); filter: brightness(1.12); }
        .rm-btn-primary:active:not(:disabled) { transform: scale(0.98); }
        .rm-btn-primary:disabled {
          opacity: 0.30;
          cursor: not-allowed;
          filter: none;
        }

        /* Bouton fantôme */
        .rm-btn-ghost {
          width: 100%; height: 44px;
          border-radius: 10px;
          border: 1px solid rgba(99,102,241,0.18);
          background: transparent;
          color: rgba(148,163,184,0.65);
          font-family: 'Cinzel', serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s;
        }
        .rm-btn-ghost:hover {
          background: rgba(99,102,241,0.06);
          border-color: rgba(99,102,241,0.32);
          color: rgba(199,210,254,0.80);
        }

        /* Étoiles */
        .rm-star {
          background: none; border: none; padding: 4px 2px;
          cursor: pointer; position: relative;
          transition: transform 0.12s ease;
        }
        .rm-star:hover { transform: scale(1.15); }
        .rm-star-active { animation: rm-star-in 0.28s cubic-bezier(0.34,1.56,0.64,1) forwards; }

        /* Ligne décorative */
        .rm-rule {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99,102,241,0.40), transparent);
          animation: rm-line-grow 0.5s ease forwards;
        }
      `}</style>

      {/* Backdrop — centrage parfait vertical + horizontal */}
      <div
        className="rm-backdrop fixed inset-0 z-[100] flex items-center justify-center px-4"
        style={{ background: 'rgba(3,6,16,0.88)', backdropFilter: 'blur(12px)' }}
        onClick={handleLater}
      >
        {/* Card */}
        <div
          className="rm-card relative w-full max-w-sm overflow-hidden"
          style={{
            borderRadius: '20px',
            background: 'linear-gradient(160deg, #07051c 0%, #0c0927 55%, #080620 100%)',
            border: '1px solid rgba(99,102,241,0.32)',
            boxShadow: `
              0 0 0 1px rgba(99,102,241,0.08),
              0 24px 80px rgba(0,0,0,0.85),
              0 0 80px rgba(79,70,229,0.10),
              inset 0 1px 0 rgba(129,140,248,0.10)
            `,
          }}
          onClick={e => e.stopPropagation()}
        >

          {/* Lueur haut */}
          <div
            className="rm-glow absolute top-0 left-0 right-0 pointer-events-none"
            style={{
              height: '140px',
              background: 'radial-gradient(ellipse at 50% -20%, rgba(99,102,241,0.22) 0%, transparent 70%)',
            }}
          />

          {/* Particules flottantes */}
          {[
            { x:'8%',  y:'12%', dx:'-6px', dy:'-20px', dur:'3.4s', del:'0s'   },
            { x:'88%', y:'8%',  dx:'8px',  dy:'-18px', dur:'2.9s', del:'0.6s' },
            { x:'92%', y:'35%', dx:'10px', dy:'-14px', dur:'3.8s', del:'1.2s' },
            { x:'5%',  y:'55%', dx:'-8px', dy:'-16px', dur:'3.1s', del:'1.8s' },
            { x:'50%', y:'5%',  dx:'4px',  dy:'-22px', dur:'4.0s', del:'0.3s' },
          ].map((p, i) => (
            <div
              key={i}
              className="rm-particle absolute rounded-full pointer-events-none"
              style={{
                left: p.x, top: p.y,
                width: '2px', height: '2px',
                background: i % 2 === 0 ? 'rgba(165,180,252,0.80)' : 'rgba(129,140,248,0.60)',
                boxShadow: '0 0 4px rgba(129,140,248,0.60)',
                // @ts-ignore
                '--dx': p.dx, '--dy': p.dy,
                animationDuration: p.dur,
                animationDelay: p.del,
              } as React.CSSProperties}
            />
          ))}

          <div className="relative px-6 pt-8 pb-6">

            {/* Ligne déco haut */}
            <div className="rm-rule mb-6" />

            {/* Titre */}
            <h2
              className="text-center mb-2"
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: '20px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                background: 'linear-gradient(to right, #c7d2fe, #e0e7ff, #c7d2fe)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: 'none',
                filter: 'drop-shadow(0 0 18px rgba(99,102,241,0.55))',
              }}
            >
              {t('rating.title')}
            </h2>

            {/* Sous-titre */}
            <p
              className="text-center mb-7"
              style={{
                fontFamily: 'EB Garamond, serif',
                fontSize: '15px',
                color: 'rgba(165,180,252,0.68)',
                lineHeight: '1.65',
                fontStyle: 'italic',
              }}
            >
              {t('rating.subtitle')}
            </p>

            {/* Étoiles */}
            <div className="flex justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map(star => {
                const isActive = star <= activeStars;
                return (
                  <button
                    key={star}
                    className="rm-star"
                    onClick={() => setStars(star)}
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(0)}
                  >
                    {/* Halo sous l'étoile active */}
                    {isActive && (
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          borderRadius: '50%',
                          background: 'radial-gradient(circle, rgba(129,140,248,0.45) 0%, transparent 70%)',
                          filter: 'blur(6px)',
                          transform: 'scale(1.8)',
                        }}
                      />
                    )}
                    <span
                      className={isActive ? 'rm-star-active' : ''}
                      style={{
                        fontSize: '32px',
                        display: 'inline-block',
                        opacity: isActive ? 1 : 0.22,
                        filter: isActive
                          ? 'drop-shadow(0 0 10px rgba(129,140,248,0.90)) drop-shadow(0 0 20px rgba(99,102,241,0.60))'
                          : 'none',
                        transition: 'opacity 0.15s, filter 0.15s',
                        // Étoile blanche/bleue au lieu de jaune
                        WebkitTextFillColor: isActive ? 'transparent' : 'rgba(165,180,252,0.35)',
                        background: isActive
                          ? 'linear-gradient(135deg, #e0e7ff 0%, #a5b4fc 50%, #818cf8 100%)'
                          : 'none',
                        WebkitBackgroundClip: isActive ? 'text' : 'unset',
                        backgroundClip: isActive ? 'text' : 'unset',
                      }}
                    >
                      ★
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Message feedback */}
            <div
              className="text-center mb-6"
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: '11px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgba(129,140,248,0.75)',
                minHeight: '18px',
                transition: 'opacity 0.25s',
                opacity: activeStars > 0 ? 1 : 0,
              }}
            >
              {activeStars > 0 && starMessages[activeStars]}
            </div>

            {/* Ligne déco milieu */}
            <div className="rm-rule mb-5" />

            {/* Bouton principal */}
            <button
              className="rm-btn-primary"
              onClick={handleRate}
              disabled={stars === 0}
            >
              <span className="relative z-10">{t('rating.rate')}</span>
            </button>

            {/* Plus tard */}
            <button
              className="rm-btn-ghost mt-3"
              onClick={handleLater}
            >
              {t('rating.later')}
            </button>

            {/* Ne plus demander */}
            <button
              onClick={handleNever}
              style={{
                display: 'block',
                width: '100%',
                marginTop: '10px',
                padding: '8px',
                background: 'none',
                border: 'none',
                fontFamily: 'EB Garamond, serif',
                fontSize: '12px',
                color: 'rgba(99,102,241,0.30)',
                cursor: 'pointer',
                transition: 'color 0.2s',
                letterSpacing: '0.04em',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(129,140,248,0.55)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(99,102,241,0.30)')}
            >
              {t('rating.never')}
            </button>

          </div>

          {/* Lueur bas */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: '80px',
              background: 'radial-gradient(ellipse at 50% 120%, rgba(79,70,229,0.12) 0%, transparent 70%)',
            }}
          />
        </div>
      </div>
    </>
  );
}