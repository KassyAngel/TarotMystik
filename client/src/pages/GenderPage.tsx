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
    { 
      value: 'homme', 
      label: t('gender.male'), 
      icon: '♂',
      gradient: 'from-indigo-500 via-purple-600 to-violet-600',
      border: 'border-indigo-400/60',
      glow: 'rgba(99, 102, 241, 0.6)'
    },
    { 
      value: 'femme', 
      label: t('gender.female'), 
      icon: '♀',
      gradient: 'from-pink-500 via-rose-500 to-pink-600',
      border: 'border-pink-400/60',
      glow: 'rgba(236, 72, 153, 0.7)'
    },
    { 
      value: 'autre', 
      label: t('gender.other'), 
      icon: '⚥',
      gradient: 'from-purple-500 via-violet-500 to-purple-600',
      border: 'border-purple-400/60',
      glow: 'rgba(147, 51, 234, 0.6)'
    }
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
    <div className="intro-page active flex flex-col min-h-screen text-center px-6 relative overflow-hidden text-white pt-16 sm:pt-20 bg-gradient-to-b from-[#0a0e1a] via-[#1a1540] to-[#0a0e1a]">

      {/* Particules */}
      <div className="absolute inset-0 -z-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor: i % 3 === 0 ? '#d4af37' : i % 3 === 1 ? '#ff6692' : '#a78bfa',
              width: Math.random() > 0.7 ? '3px' : '2px',
              height: Math.random() > 0.7 ? '3px' : '2px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-pink-500/15 via-purple-500/15 to-transparent blur-3xl -z-10"></div>

      <div className="mb-4">
        <ProgressBar progress={100} />
      </div>

      <div className="flex-1 flex flex-col justify-center z-10 max-w-md mx-auto w-full space-y-6 sm:space-y-7 py-4">

        {/* Titre SANS émoticon */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-violet-300 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(236,72,153,0.6)]">
          {t('gender.title') || 'Genre'}
        </h1>

        {/* Sous-titre */}
        <p className="text-purple-100/80 text-sm sm:text-base font-light leading-relaxed max-w-sm mx-auto px-4">
          {t('gender.subtitle') || 'Indiquez votre genre afin de personnaliser votre expérience'}
        </p>

        {/* Ligne décorative */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-pink-400/60 to-purple-400/50"></div>
          <div className="relative">
            <div className="absolute inset-0 bg-amber-400/40 blur-md rounded-full"></div>
            <span className="relative text-amber-300 text-lg">✦</span>
          </div>
          <div className="w-8 h-px bg-gradient-to-l from-transparent via-pink-400/60 to-purple-400/50"></div>
        </div>

        {/* Sélecteur de genre avec couleurs thème app */}
        <div className="w-full max-w-sm mx-auto space-y-3">
          {genderOptions.map((option) => (
            <div key={option.value} className="relative group">
              {/* Glow animé */}
              <div 
                className={`absolute -inset-1 rounded-2xl blur-xl transition-all duration-500 ${
                  selectedGender === option.value 
                    ? 'opacity-100 animate-pulse-gentle' 
                    : 'opacity-0 group-hover:opacity-60'
                }`}
                style={{
                  background: `radial-gradient(circle, ${option.glow}, transparent)`
                }}
              ></div>

              <button
                type="button"
                onClick={() => setSelectedGender(option.value)}
                className={`relative w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300 backdrop-blur-xl overflow-hidden ${
                  selectedGender === option.value
                    ? `bg-gradient-to-r ${option.gradient}/30 ${option.border} scale-[1.03] shadow-[0_10px_45px_${option.glow}]`
                    : 'bg-violet-900/40 border-purple-500/40 hover:border-pink-400/60 hover:bg-violet-800/50 hover:scale-[1.01]'
                }`}
              >
                {/* Reflet supérieur */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>

                {/* Shimmer effect */}
                {selectedGender === option.value && (
                  <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                )}

                {/* Cercle avec icône - couleurs thème */}
                <div className={`relative w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  selectedGender === option.value 
                    ? `bg-gradient-to-br ${option.gradient} border-white/60 shadow-[0_0_30px_${option.glow}]` 
                    : 'bg-violet-800/60 border-purple-400/50 group-hover:border-pink-400/70'
                }`}>
                  <span className={`text-4xl transition-all duration-300 ${
                    selectedGender === option.value 
                      ? 'text-white scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,1)]' 
                      : 'text-purple-200 group-hover:scale-110'
                  }`}>
                    {option.icon}
                  </span>
                </div>

                {/* Label */}
                <span className={`flex-1 text-left text-lg sm:text-xl font-semibold transition-colors ${
                  selectedGender === option.value ? 'text-white' : 'text-purple-200 group-hover:text-pink-200'
                }`}>
                  {option.label}
                </span>

                {/* Checkmark animé */}
                {selectedGender === option.value && (
                  <div className="flex items-center gap-2 animate-scale-in">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${option.gradient} flex items-center justify-center shadow-[0_0_25px_${option.glow}]`}>
                      <span className="text-white text-lg font-bold">✓</span>
                    </div>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Bouton retour */}
        <div className="flex justify-center pt-2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <button
              onClick={onBack}
              data-testid="button-back"
              className="relative px-6 py-3 text-sm sm:text-base rounded-full font-medium tracking-wide bg-violet-900/50 hover:bg-violet-800/60 text-purple-200 border-2 border-purple-500/40 hover:border-pink-500/60 backdrop-blur-sm transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                <span className="text-pink-300">←</span>
                <span>{t('gender.back') || 'Retour'}</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="pb-2"></div>

      <style>{`
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
          from { transform: translateX(-100%); }
          to { transform: translateX(200%); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        .animate-pulse-gentle { animation: pulse-gentle 2.5s ease-in-out infinite; }
        .animate-scale-in { animation: scale-in 0.4s ease-out; }
        .animate-shimmer { animation: shimmer 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}