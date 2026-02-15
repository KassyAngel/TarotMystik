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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleRate = () => {
    if (stars >= 4) {
      // Rediriger vers le Play Store pour les bonnes notes (4-5 étoiles)
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

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md animate-fade-in"
        onClick={handleLater}
      />

      <div className="relative bg-gradient-to-b from-[#1a1540] via-[#2a1a50] to-[#1a1540] rounded-3xl border-2 border-pink-400/30 shadow-[0_0_60px_rgba(236,72,153,0.4)] max-w-md w-full animate-scale-in overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/15 to-violet-600/10 pointer-events-none"></div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-twinkle"
              style={{
                backgroundColor: i % 2 === 0 ? '#d4af37' : '#ff6692',
                width: '2px',
                height: '2px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative p-6 sm:p-8">

          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400/40 blur-xl rounded-full animate-pulse"></div>
              <span className="relative text-5xl animate-bounce-slow">⭐</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-center mb-3 bg-gradient-to-r from-pink-300 via-purple-300 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(236,72,153,0.6)]">
            {t('rating.title')}
          </h2>

          <p className="text-purple-100/80 text-center text-sm sm:text-base mb-6 leading-relaxed">
            {t('rating.subtitle')}
          </p>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-pink-400/60 to-purple-400/50"></div>
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400/40 blur-md rounded-full"></div>
              <span className="relative text-amber-300 text-sm">✦</span>
            </div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent via-pink-400/60 to-purple-400/50"></div>
          </div>

          <div className="flex justify-center gap-3 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setStars(star)}
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                className="relative group transition-transform duration-200 hover:scale-125 focus:outline-none"
              >
                <div className={`absolute inset-0 blur-lg rounded-full transition-opacity duration-300 ${
                  star <= (hoveredStar || stars) ? 'opacity-100 bg-amber-400/60' : 'opacity-0'
                }`}></div>
                <span className={`relative text-4xl transition-all duration-300 ${
                  star <= (hoveredStar || stars)
                    ? 'text-amber-300 drop-shadow-[0_0_12px_rgba(251,191,36,0.8)] scale-110'
                    : 'text-purple-300/40'
                }`}>
                  {star <= (hoveredStar || stars) ? '⭐' : '☆'}
                </span>
              </button>
            ))}
          </div>

          {stars > 0 && (
            <p className="text-center text-pink-200/80 text-sm mb-6 animate-fade-in">
              {stars >= 4 ? t('rating.thanksGood') : t('rating.feedback')}
            </p>
          )}

          <div className="space-y-3">
            <button
              onClick={handleRate}
              disabled={stars === 0}
              className="relative w-full px-6 py-3.5 rounded-full font-semibold text-white
                         bg-gradient-to-r from-pink-600 via-purple-600 to-violet-600
                         border-2 border-pink-400/70
                         shadow-[0_0_30px_rgba(236,72,153,0.5),inset_0_2px_15px_rgba(255,255,255,0.2)]
                         hover:shadow-[0_0_50px_rgba(236,72,153,0.7),inset_0_2px_20px_rgba(255,255,255,0.3)]
                         hover:border-pink-300/90 hover:scale-105
                         disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100
                         transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>{t('rating.rate')}</span>
                <span className="text-amber-200 group-hover:scale-125 transition-transform duration-300">⭐</span>
              </span>
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full pointer-events-none"></div>
            </button>

            <button
              onClick={handleLater}
              className="relative w-full px-6 py-3 rounded-full font-medium text-purple-200
                         bg-violet-900/40 hover:bg-violet-800/50
                         border-2 border-purple-500/40 hover:border-pink-500/60
                         backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                <span>{t('rating.later')}</span>
              </span>
            </button>

            <button
              onClick={handleNever}
              className="w-full py-2 text-purple-300/50 hover:text-purple-200/80 text-sm transition-colors duration-300"
            >
              {t('rating.never')}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}