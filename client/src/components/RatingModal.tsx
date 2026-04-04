// src/components/RatingModal.tsx

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRate: () => void;
}

export default function RatingModal({ isOpen, onClose, onRate }: RatingModalProps) {
  const { t } = useLanguage();
  const [stars, setStars] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => setVisible(true), 50);
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

  const starLabels = ['', '😕', '😐', '🙂', '😊', '🤩'];

  return (
    <>
      <style>{`
        @keyframes rating-backdrop {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes rating-card {
          from { opacity: 0; transform: scale(0.94) translateY(16px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
        @keyframes gold-pulse {
          0%,100% { box-shadow: 0 0 20px rgba(212,175,55,0.20); }
          50%     { box-shadow: 0 0 40px rgba(212,175,55,0.40); }
        }
        @keyframes gold-text-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes star-pop {
          0%   { transform: scale(1); }
          40%  { transform: scale(1.35); }
          70%  { transform: scale(0.90); }
          100% { transform: scale(1.10); }
        }
        @keyframes orb-float {
          0%,100% { transform: scale(1);    opacity: 0.5; }
          50%     { transform: scale(1.15); opacity: 0.75; }
        }
        @keyframes micro-star {
          0%,100% { opacity: 0.25; transform: scale(1) rotate(0deg); }
          50%     { opacity: 0.80; transform: scale(1.4) rotate(180deg); }
        }
        .rating-backdrop { animation: rating-backdrop 0.25s ease-out forwards; }
        .rating-card     { animation: rating-card 0.35s cubic-bezier(0.16,1,0.3,1) forwards; }
        .gold-orb        { animation: orb-float 3.2s ease-in-out infinite; }
        .micro-star      { animation: micro-star ease-in-out infinite; }
        .star-active     { animation: star-pop 0.25s ease-out forwards; }
        .shimmer-gold {
          background: linear-gradient(
            90deg,
            #b8942a 0%, #f5d876 30%, #d4af37 50%, #f5d876 70%, #b8942a 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gold-text-shimmer 2.8s linear infinite;
        }
        .gold-btn {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #c9a227 0%, #e8c84a 40%, #c9a227 70%, #a07d18 100%);
          box-shadow: 0 4px 20px rgba(212,175,55,0.30), inset 0 1px 0 rgba(255,255,255,0.15);
          transition: box-shadow 0.2s, transform 0.15s;
        }
        .gold-btn:hover {
          box-shadow: 0 6px 30px rgba(212,175,55,0.50), inset 0 1px 0 rgba(255,255,255,0.15);
          transform: translateY(-1px);
        }
        .gold-btn:active { transform: scale(0.98); }
        .gold-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.20) 50%, transparent 65%);
          background-size: 200% 100%;
          animation: gold-text-shimmer 2.4s linear infinite;
          pointer-events: none;
        }
        .gold-btn:disabled {
          opacity: 0.35;
          pointer-events: none;
        }
        .ghost-btn {
          background: rgba(212,175,55,0.06);
          border: 1px solid rgba(212,175,55,0.20);
          color: rgba(212,175,55,0.60);
          transition: all 0.2s;
        }
        .ghost-btn:hover {
          background: rgba(212,175,55,0.12);
          border-color: rgba(212,175,55,0.35);
          color: rgba(212,175,55,0.85);
        }
        .divider-ornament {
          display: flex; align-items: center; gap: 8px; justify-content: center;
        }
        .divider-ornament::before,
        .divider-ornament::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.35), transparent);
        }
      `}</style>

      <div
        className="rating-backdrop fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
        style={{ background: 'rgba(4,3,14,0.92)', backdropFilter: 'blur(10px)' }}
        onClick={handleLater}
      >
        <div
          className="rating-card relative w-full max-w-sm mx-4 mb-4 sm:mb-0 overflow-hidden"
          style={{
            borderRadius: '20px',
            background: 'linear-gradient(160deg, #0e0b1e 0%, #100d22 55%, #0a0818 100%)',
            border: '1px solid rgba(212,175,55,0.28)',
            boxShadow: `
              0 0 0 1px rgba(212,175,55,0.06),
              0 16px 60px rgba(0,0,0,0.90),
              0 0 100px rgba(212,175,55,0.06),
              inset 0 1px 0 rgba(212,175,55,0.14)
            `,
          }}
          onClick={e => e.stopPropagation()}
        >
          {/* Top glow */}
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{
              height: '160px',
              background: 'radial-gradient(ellipse at 50% -10%, rgba(212,175,55,0.12) 0%, transparent 70%)',
            }}
          />

          {/* Ambient orb bottom */}
          <div
            className="gold-orb absolute pointer-events-none"
            style={{
              bottom: '-40px', left: '50%', transform: 'translateX(-50%)',
              width: '200px', height: '80px',
              background: 'radial-gradient(ellipse, rgba(212,175,55,0.08) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />

          {/* Floating micro stars */}
          {[
            { top:'10%', left:'6%',  dur:'3.2s', delay:'0s'   },
            { top:'7%',  left:'90%', dur:'2.7s', delay:'0.7s' },
            { top:'20%', left:'93%', dur:'3.8s', delay:'1.3s' },
            { top:'25%', left:'3%',  dur:'4.1s', delay:'0.4s' },
            { top:'60%', left:'97%', dur:'3.0s', delay:'1.9s' },
            { top:'72%', left:'2%',  dur:'3.5s', delay:'1.0s' },
          ].map((s, i) => (
            <div
              key={i}
              className="micro-star absolute rounded-full"
              style={{
                top: s.top, left: s.left,
                width: '2px', height: '2px',
                background: '#d4af37',
                animationDuration: s.dur,
                animationDelay: s.delay,
              }}
            />
          ))}

          <div className="relative px-6 pt-7 pb-5">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div
                  className="gold-orb absolute rounded-full pointer-events-none"
                  style={{
                    inset: '-16px',
                    background: 'radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 70%)',
                    filter: 'blur(14px)',
                  }}
                />
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    width: '64px', height: '64px', borderRadius: '50%',
                    background: 'linear-gradient(145deg, rgba(212,175,55,0.14) 0%, rgba(212,175,55,0.04) 100%)',
                    border: '1px solid rgba(212,175,55,0.28)',
                    boxShadow: 'inset 0 1px 0 rgba(212,175,55,0.18)',
                  }}
                >
                  <span style={{ fontSize: '28px' }}>⭐</span>
                </div>
              </div>
            </div>

            {/* Ornament divider */}
            <div className="divider-ornament mb-4">
              <span style={{ color: 'rgba(212,175,55,0.45)', fontSize: '9px', letterSpacing: '3px' }}>✦ ✦ ✦</span>
            </div>

            {/* Title */}
            <h2
              className="text-center font-bold mb-2"
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: '20px',
                color: '#d4af37',
                textShadow: '0 2px 16px rgba(212,175,55,0.32)',
                letterSpacing: '0.02em',
              }}
            >
              {t('rating.title')}
            </h2>

            {/* Subtitle */}
            <p
              className="text-center mb-6"
              style={{ fontSize: '13px', color: 'rgba(220,210,255,0.60)', lineHeight: '1.6' }}
            >
              {t('rating.subtitle')}
            </p>

            {/* Stars */}
            <div className="flex justify-center gap-2 mb-3">
              {[1, 2, 3, 4, 5].map(star => {
                const isActive = star <= activeStars;
                return (
                  <button
                    key={star}
                    onClick={() => setStars(star)}
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(0)}
                    className="relative focus:outline-none transition-transform duration-150"
                    style={{ background: 'none', border: 'none', padding: '4px', cursor: 'pointer' }}
                  >
                    {isActive && (
                      <div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{
                          background: 'radial-gradient(circle, rgba(212,175,55,0.50) 0%, transparent 70%)',
                          filter: 'blur(8px)',
                          transform: 'scale(1.5)',
                        }}
                      />
                    )}
                    <span
                      className="relative"
                      style={{
                        fontSize: '34px',
                        display: 'inline-block',
                        transform: isActive ? 'scale(1.08)' : 'scale(0.95)',
                        transition: 'transform 0.15s ease',
                        filter: isActive
                          ? 'drop-shadow(0 0 8px rgba(212,175,55,0.70))'
                          : 'none',
                        opacity: isActive ? 1 : 0.35,
                      }}
                    >
                      {isActive ? '⭐' : '☆'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Emoji feedback */}
            <div
              className="text-center mb-5"
              style={{
                fontSize: '13px',
                color: 'rgba(212,175,55,0.70)',
                minHeight: '20px',
                transition: 'opacity 0.2s',
                opacity: activeStars > 0 ? 1 : 0,
              }}
            >
              {activeStars > 0 && (
                <span>
                  {starLabels[activeStars]}&nbsp;
                  {activeStars >= 4 ? t('rating.thanksGood') : t('rating.feedback')}
                </span>
              )}
            </div>

            {/* CTA Button */}
            <button
              onClick={handleRate}
              disabled={stars === 0}
              className="gold-btn w-full font-bold flex items-center justify-center gap-2"
              style={{
                height: '50px',
                borderRadius: '12px',
                fontSize: '14px',
                letterSpacing: '0.04em',
                color: '#0a0818',
                border: 'none',
                cursor: stars === 0 ? 'not-allowed' : 'pointer',
              }}
            >
              <span className="relative z-10">{t('rating.rate')} ⭐</span>
            </button>

            {/* Later */}
            <button
              onClick={handleLater}
              className="ghost-btn w-full mt-3 font-medium flex items-center justify-center"
              style={{
                height: '44px',
                borderRadius: '10px',
                fontSize: '13px',
                cursor: 'pointer',
              }}
            >
              {t('rating.later')}
            </button>

            {/* Never */}
            <button
              onClick={handleNever}
              className="w-full mt-2 py-2 text-center transition-colors duration-200"
              style={{
                background: 'none',
                border: 'none',
                fontSize: '12px',
                color: 'rgba(212,175,55,0.28)',
                cursor: 'pointer',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(212,175,55,0.55)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(212,175,55,0.28)')}
            >
              {t('rating.never')}
            </button>
          </div>

          {/* Bottom ornament line */}
          <div
            className="absolute bottom-0 left-10 right-10"
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.18), transparent)',
            }}
          />
        </div>
      </div>
    </>
  );
}