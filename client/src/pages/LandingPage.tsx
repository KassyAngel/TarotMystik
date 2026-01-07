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
    <div className="landing-page min-h-screen flex flex-col justify-between items-center text-center p-4 sm:p-6 relative overflow-hidden bg-gradient-to-b from-[#0a1929] via-[#1e3a5f] to-[#0f2744]">

      {/* Modal Disclaimer */}
      {showDisclaimer && <DisclaimerModal onAccept={handleDisclaimerAccept} />}

      {/* Sélecteur de langue */}
      {!showDisclaimer && (
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20">
          <LanguageSelector />
        </div>
      )}

      {/* Effets de fond mystiques */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradients radiaux cyan/bleu */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/12 rounded-full blur-[120px] animate-pulse-slower"></div>
        <div className="absolute top-1/2 right-1/4 w-[550px] h-[550px] bg-indigo-500/12 rounded-full blur-[120px] animate-pulse-slow"></div>

        {/* Grille mystique */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `radial-gradient(circle, #22d3ee 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>

        {/* Étoiles scintillantes cyan */}
        <div className="absolute top-20 left-[10%] text-cyan-300/40 text-xl animate-twinkle drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">✦</div>
        <div className="absolute top-[30%] right-[15%] text-cyan-200/35 text-lg animate-twinkle-delayed drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">✦</div>
        <div className="absolute bottom-[25%] left-[20%] text-cyan-300/30 text-base animate-twinkle drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">✦</div>
        <div className="absolute bottom-[15%] right-[20%] text-cyan-200/35 text-xl animate-twinkle-delayed drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">✦</div>
        <div className="absolute top-[40%] left-[8%] text-cyan-300/25 text-sm animate-twinkle drop-shadow-[0_0_6px_rgba(34,211,238,0.3)]">✦</div>
        <div className="absolute top-[60%] right-[12%] text-cyan-200/30 text-sm animate-twinkle-delayed drop-shadow-[0_0_6px_rgba(34,211,238,0.3)]">✦</div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center w-full max-w-3xl px-4">

        {/* Symbole mystique lunaire */}
        <div className="mb-8 sm:mb-10">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto">
            {/* Cercles concentriques animés cyan */}
            <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-4 border border-cyan-300/40 rounded-full animate-spin-reverse"></div>
            <div className="absolute inset-8 border border-blue-400/25 rounded-full animate-spin-slow"></div>

            {/* Symbole central */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-5xl sm:text-6xl filter drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">🌙</div>
            </div>

            {/* Lueur ambiante cyan */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-blue-400/10 to-cyan-600/15 rounded-full blur-2xl animate-pulse-slow"></div>
          </div>
        </div>

        {/* Titre principal avec gradient cyan */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-6 sm:mb-8 leading-tight tracking-wide">
          <span className="bg-gradient-to-r from-cyan-200 via-blue-100 to-cyan-300 bg-clip-text text-transparent animate-gradient drop-shadow-[0_2px_20px_rgba(34,211,238,0.3)]">
            {t('landing.title')}
          </span>
        </h1>

        {/* Sous-titre */}
        <p className="text-cyan-100/90 text-base sm:text-lg md:text-xl mb-10 sm:mb-12 leading-relaxed max-w-2xl mx-auto font-light tracking-wide">
          {t('landing.subtitle')}
        </p>

        {/* Séparateur décoratif cyan */}
        <div className="flex items-center gap-4 mb-10 sm:mb-12">
          <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-cyan-400/50 to-cyan-300/60"></div>
          <span className="text-cyan-300/80 text-2xl animate-pulse-slow">✦</span>
          <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent via-cyan-400/50 to-cyan-300/60"></div>
        </div>

        {/* Bouton principal avec style cyan unifié */}
        <div className="relative group">
          {/* Aura externe */}
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/0 via-cyan-400/25 to-cyan-600/0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

          <MysticalButton 
            onClick={onEnter}
            disabled={!disclaimerChecked}
            className="relative text-sm sm:text-base py-3 px-10 sm:px-12 min-h-[48px] rounded-full font-serif uppercase tracking-widest text-cyan-50 
                       bg-gradient-to-br from-[#0e7490] via-[#06b6d4] to-[#22d3ee] 
                       border border-cyan-400/50 
                       shadow-[0_0_20px_rgba(34,211,238,0.25)] 
                       hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] 
                       hover:border-cyan-300/70
                       transition-all duration-500 ease-out backdrop-blur-sm overflow-hidden
                       disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
            data-testid="button-enter"
          >
            {/* Effet lumineux interne */}
            <span className="absolute inset-0 rounded-full bg-cyan-300/15 blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none"></span>

            {/* Contenu du bouton */}
            <span className="relative z-10 flex items-center gap-2">
              <span>{t('landing.enter')}</span>
              <span className="text-cyan-200 text-xl transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </MysticalButton>
        </div>

        {/* Message discret */}
        <p className="mt-8 text-cyan-200/80 text-xs sm:text-sm font-light max-w-md mx-auto leading-relaxed" data-testid="text-ads-support">
          {t('landing.ads.support')}
        </p>
      </div>

      {/* Footer */}
      <div className="relative z-10 pb-4 text-cyan-400/40 text-xs">
        <div className="animate-float">✦</div>
      </div>

      {/* Styles d'animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.5; }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.45; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes twinkle-delayed {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 20s linear infinite;
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .animate-twinkle-delayed {
          animation: twinkle-delayed 4s ease-in-out infinite 1s;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </div>
  );
}