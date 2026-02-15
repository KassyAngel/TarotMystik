import { useState, useEffect } from 'react';
import MysticalButton from '@/components/MysticalButton';
import LanguageSelector from '@/components/LanguageSelector';
import DisclaimerModal from '@/components/DisclaimerModal';
import { useLanguage } from '@/contexts/LanguageContext';

interface LandingPageProps {
  onEnter: () => void;
}

export default function LandingPage({ onEnter }: LandingPageProps) {
  const { t, isLanguageLoaded } = useLanguage();
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [disclaimerChecked, setDisclaimerChecked] = useState(false);

  useEffect(() => {
    const disclaimerAccepted = localStorage.getItem('disclaimerAccepted');
    if (!disclaimerAccepted) {
      if (isLanguageLoaded) {
        setTimeout(() => setShowDisclaimer(true), 300);
      }
    } else {
      setDisclaimerChecked(true);
    }
  }, [isLanguageLoaded]);

  const handleDisclaimerAccept = () => {
    setShowDisclaimer(false);
    setDisclaimerChecked(true);
  };

  return (
    <div className="landing-page min-h-screen flex flex-col justify-between items-center text-center p-4 sm:p-6 relative overflow-hidden bg-gradient-to-b from-[#0a0e1a] via-[#1a1540] to-[#0a0e1a]">

      {showDisclaimer && <DisclaimerModal onAccept={handleDisclaimerAccept} />}

      {!showDisclaimer && (
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20">
          <LanguageSelector />
        </div>
      )}

      {/* Effets de fond */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-500/12 rounded-full blur-[120px] animate-pulse-slower"></div>

        {/* Particules dorées */}
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-particle"
            style={{
              backgroundColor: i % 3 === 0 ? '#d4af37' : i % 3 === 1 ? '#ff6692' : '#a78bfa',
              width: Math.random() > 0.7 ? '4px' : '2px',
              height: Math.random() > 0.7 ? '4px' : '2px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.3,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Contenu principal - ADAPTÉ POUR ANDROID */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center w-full max-w-4xl px-3 sm:px-4">

        {/* Titre responsive */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif mb-6 sm:mb-8 md:mb-10 leading-tight tracking-wide px-2">
          <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-amber-200 bg-clip-text text-transparent animate-gradient-shift drop-shadow-[0_4px_40px_rgba(236,72,153,0.5)]">
            {t('landing.title')}
          </span>
        </h1>

        {/* Sous-titre responsive et adapté aux longs textes */}
        <p className="text-purple-100/90 text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto font-light px-3">
          {t('landing.subtitle')}
        </p>

        {/* Séparateur */}
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
          <div className="h-px w-12 sm:w-16 md:w-24 bg-gradient-to-r from-transparent via-pink-400/60 to-purple-400/50"></div>
          <div className="relative">
            <div className="absolute inset-0 bg-amber-400/40 blur-xl rounded-full animate-pulse"></div>
            <span className="relative text-amber-300 text-2xl sm:text-3xl">✦</span>
          </div>
          <div className="h-px w-12 sm:w-16 md:w-24 bg-gradient-to-l from-transparent via-pink-400/60 to-purple-400/50"></div>
        </div>

        {/* Bouton ENTRER - responsive et adapté aux longs textes */}
        <div className="relative group w-full max-w-md px-2">
          <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-pink-600/0 via-purple-500/40 to-violet-600/0 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse-gentle"></div>

          <div className="absolute -inset-4 sm:-inset-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 border border-pink-400/30 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-2 border border-purple-400/20 rounded-full animate-spin-reverse"></div>
          </div>

          <button
            onClick={onEnter}
            disabled={!disclaimerChecked}
            className="relative w-full px-8 sm:px-12 md:px-16 lg:px-20 py-4 sm:py-5 md:py-6 rounded-full font-serif uppercase tracking-[0.2em] sm:tracking-[0.3em] text-sm sm:text-base md:text-lg text-white
                       bg-gradient-to-r from-pink-600 via-purple-600 to-violet-600
                       border-2 border-pink-400/70
                       shadow-[0_0_40px_rgba(236,72,153,0.6),0_0_80px_rgba(147,51,234,0.4),inset_0_2px_20px_rgba(255,255,255,0.2)]
                       hover:shadow-[0_0_60px_rgba(236,72,153,0.8),0_0_100px_rgba(147,51,234,0.6),inset_0_2px_30px_rgba(255,255,255,0.3)]
                       hover:border-pink-300/90 hover:scale-105
                       disabled:opacity-30 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none
                       transition-all duration-500 ease-out overflow-hidden group"
            data-testid="button-enter"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-amber-300 rounded-full animate-sparkle"
                  style={{
                    left: `${10 + i * 12}%`,
                    top: `${30 + (i % 2) * 40}%`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>

            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
              <span className="text-amber-200 text-xl sm:text-2xl group-hover:rotate-180 transition-transform duration-700">✨</span>
              <span className="font-bold whitespace-nowrap">{t('landing.enter')}</span>
              <span className="text-pink-200 text-xl sm:text-2xl group-hover:translate-x-2 transition-transform duration-500">→</span>
            </span>

            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent rounded-b-full pointer-events-none"></div>
          </button>
        </div>

        {/* Texte de support adapté aux longs textes */}
        <p className="mt-8 sm:mt-10 text-purple-200/70 text-[11px] sm:text-xs md:text-sm font-light max-w-lg mx-auto leading-relaxed px-4" data-testid="text-ads-support">
          {t('landing.ads.support')}
        </p>
      </div>

      <div className="relative z-10 pb-4 text-amber-400/50 text-xs">
        <div className="animate-float-slow">✦</div>
      </div>

      <style>{`
        @keyframes pulse-slow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.6; } }
        @keyframes pulse-slower { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.5; } }
        @keyframes pulse-gentle { 0%, 100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes float-particle { 0%, 100% { transform: translateY(0) translateX(0); } 25% { transform: translateY(-20px) translateX(10px); } 50% { transform: translateY(-10px) translateX(-10px); } 75% { transform: translateY(-30px) translateX(5px); } }
        @keyframes float-slow { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes gradient-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes sparkle { 0%, 100% { opacity: 0; transform: scale(0); } 50% { opacity: 1; transform: scale(1.5); } }

        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-slower { animation: pulse-slower 6s ease-in-out infinite; }
        .animate-pulse-gentle { animation: pulse-gentle 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 30s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 20s linear infinite; }
        .animate-float-particle { animation: float-particle ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
        .animate-gradient-shift { background-size: 200% auto; animation: gradient-shift 8s ease infinite; }
        .animate-sparkle { animation: sparkle 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}