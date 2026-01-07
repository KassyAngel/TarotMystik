import { useState, useEffect } from 'react';
import ProgressBar from '@/components/ProgressBar';
import MysticalButton from '@/components/MysticalButton';
import { useLanguage } from '@/contexts/LanguageContext';

interface GenderPageProps {
  onNext: (gender: string) => void;
  onBack: () => void;
}

export default function GenderPage({ onNext, onBack }: GenderPageProps) {
  const [selectedGender, setSelectedGender] = useState('');
  const { t } = useLanguage();

  const genderOptions = [
    { value: 'homme', label: t('gender.male'), icon: '♂' },
    { value: 'femme', label: t('gender.female'), icon: '♀' },
    { value: 'autre', label: t('gender.other'), icon: '⚥' }
  ];

  useEffect(() => {
    if (selectedGender) {
      console.log('Gender submitted:', selectedGender);
      setTimeout(() => {
        onNext(selectedGender);
      }, 500);
    }
  }, [selectedGender, onNext]);

  return (
    <>
      <div className="intro-page active flex flex-col min-h-screen text-center px-6 relative overflow-hidden text-white pt-16 sm:pt-20">

        {/* Fond dégradé unifié bleu nuit */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929] via-[#1e3a5f] to-[#0f2744] -z-10"></div>

        {/* Étoiles scintillantes */}
        <div className="absolute inset-0 -z-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Halo central cyan */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-cyan-400/15 via-blue-500/15 to-transparent blur-3xl -z-10"></div>

        {/* Barre de progression */}
        <div className="mb-4">
          <ProgressBar progress={100} />
        </div>

        {/* Contenu principal */}
        <div className="flex-1 flex flex-col justify-center z-10 max-w-md mx-auto w-full space-y-5 sm:space-y-6 py-4">

          {/* Symbole mystique 3D avec anneaux */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mx-auto">
            <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.2)]" style={{ animation: 'spin-slow 30s linear infinite' }}></div>
            <div className="absolute inset-2 border border-blue-400/40 rounded-full shadow-[inset_0_0_15px_rgba(59,130,246,0.2)]" style={{ animation: 'spin-reverse 20s linear infinite' }}></div>
            <div className="absolute inset-4 border border-indigo-400/30 rounded-full" style={{ animation: 'spin-slow 30s linear infinite' }}></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative text-4xl sm:text-5xl text-cyan-300/90 font-serif drop-shadow-[0_4px_15px_rgba(34,211,238,0.6)]" style={{ animation: 'pulse-slow 3s ease-in-out infinite' }}>
                ✦
                {/* Reflet 3D */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-400/10 to-indigo-400/10 rounded-full blur-2xl" style={{ animation: 'pulse-slow 3s ease-in-out infinite' }}></div>
          </div>

          {/* Titre cyan/bleu avec effet 3D */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(34,211,238,0.4)]"
              style={{ textShadow: '0 2px 40px rgba(34,211,238,0.3)' }}>
            {t('gender.title') || 'Genre'}
          </h1>

          {/* Sous-titre */}
          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-sm mx-auto px-4">
            {t('gender.subtitle') || 'Indiquez votre genre afin de personnaliser votre expérience'}
          </p>

          {/* Ligne décorative cyan */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400/50"></div>
            <span className="text-cyan-400/70 text-lg">✦</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-cyan-400/50"></div>
          </div>

          {/* Sélecteur de genre avec effet 3D glassmorphism */}
          <div className="w-full max-w-sm mx-auto space-y-2.5 sm:space-y-3">
            {genderOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setSelectedGender(option.value)}
                className={`relative w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-3.5 rounded-xl border-2 transition-all duration-300 group backdrop-blur-sm overflow-hidden
                  ${selectedGender === option.value
                    ? 'border-cyan-400 bg-cyan-400/20 scale-[1.02] shadow-[0_8px_30px_rgba(34,211,238,0.4),inset_0_2px_10px_rgba(255,255,255,0.1)]'
                    : 'border-slate-600/50 bg-slate-800/30 hover:border-cyan-400/60 hover:bg-slate-700/40 hover:scale-[1.01] hover:shadow-[0_4px_20px_rgba(34,211,238,0.2)]'
                  }`}
              >
                {/* Reflet supérieur 3D */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

                <span className={`text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_2px_10px_rgba(34,211,238,0.3)] ${
                  selectedGender === option.value ? 'animate-bounce-once' : ''
                }`}>
                  {option.icon}
                </span>
                <span className={`flex-1 text-left text-base sm:text-lg font-medium transition-colors ${
                  selectedGender === option.value ? 'text-cyan-200' : 'text-slate-300 group-hover:text-cyan-200'
                }`}>
                  {option.label}
                </span>
                {selectedGender === option.value && (
                  <span className="text-cyan-400 text-xl animate-fade-in drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">✓</span>
                )}
              </button>
            ))}
          </div>

          {/* Bouton retour harmonisé avec les autres pages */}
          <div className="flex justify-center pt-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-600/20 to-slate-700/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <MysticalButton
                variant="secondary"
                onClick={onBack}
                data-testid="button-back"
                className="relative px-6 py-2 text-sm sm:text-base rounded-full font-medium tracking-wide bg-slate-800/60 hover:bg-slate-700/60 text-cyan-300 border-2 border-slate-600/50 hover:border-cyan-500/50 backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_20px_rgba(34,211,238,0.2)] transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="text-cyan-300">←</span>
                  <span>{t('gender.back') || 'Retour'}</span>
                </span>
              </MysticalButton>
            </div>
          </div>
        </div>

        {/* Spacer bas */}
        <div className="pb-2"></div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes bounce-once {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}} />
    </>
  );
}