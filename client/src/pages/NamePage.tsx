import { useState } from 'react';
import ProgressBar from '@/components/ProgressBar';
import MysticalButton from '@/components/MysticalButton';
import { useLanguage } from '@/contexts/LanguageContext';

interface NamePageProps {
  onNext: (name: string) => void;
}

export default function NamePage({ onNext }: NamePageProps) {
  const [name, setName] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = () => {
    if (name.trim()) {
      onNext(name.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && name.trim()) {
      handleSubmit();
    }
  };

  return (
    <div className="intro-page active flex flex-col min-h-screen text-center px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-[#0a0e1a] via-[#1a1540] to-[#0a0e1a]">

      {/* Particules */}
      <div className="absolute inset-0 -z-10">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              backgroundColor: i % 3 === 0 ? '#d4af37' : i % 3 === 1 ? '#ff6692' : '#a78bfa',
              width: Math.random() > 0.8 ? '3px' : '2px',
              height: Math.random() > 0.8 ? '3px' : '2px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-pink-500/15 via-purple-500/15 to-transparent blur-3xl -z-10"></div>

      {/* Progress Bar en haut */}
      <div className="pt-8 sm:pt-12 pb-4">
        <ProgressBar progress={33} />
      </div>

      {/* Contenu PARFAITEMENT CENTRÉ */}
      <div className="flex-1 flex flex-col justify-center items-center max-w-lg mx-auto w-full space-y-6 sm:space-y-8 -mt-16">

        {/* Titre */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(236,72,153,0.6)]">
            {t('name.title')}
          </h1>

          <p className="text-purple-100/85 text-sm sm:text-base font-light leading-relaxed max-w-md mx-auto px-2">
            {t('name.subtitle')}
          </p>

          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-pink-400/60 to-purple-400/50"></div>
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400/50 blur-lg rounded-full"></div>
              <span className="relative text-amber-300 text-xl animate-pulse">✦</span>
            </div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent via-pink-400/60 to-purple-400/50"></div>
          </div>
        </div>

        {/* Input avec HAUTEUR FIXE pour éviter le changement de taille */}
        <div className="relative group pt-2 w-full">
          <div className={`absolute -inset-2 bg-gradient-to-r from-pink-600/0 via-purple-500/50 to-violet-600/0 rounded-3xl blur-xl transition-all duration-500 ${
            isFocused || name ? 'opacity-100' : 'opacity-0'
          }`}></div>

          <div className="relative h-[72px] flex items-center">
            <label className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 pointer-events-none z-10 ${
              isFocused || name 
                ? 'top-2 text-xs text-pink-300 font-semibold' 
                : 'top-1/2 -translate-y-1/2 text-base text-purple-300/50'
            }`}>
              {isFocused || name ? '✨ ' + t('name.placeholder') : t('name.placeholder')}
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={handleKeyPress}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={`w-full h-full px-6 ${isFocused || name ? 'pt-6 pb-2' : 'pt-0 pb-0'}
                         bg-gradient-to-br from-violet-900/50 via-purple-900/40 to-violet-900/50
                         border-2 rounded-2xl text-xl font-bold text-[#7c3aed] text-center
                         focus:outline-none
                         transition-all duration-300 backdrop-blur-xl
                         shadow-[inset_0_2px_20px_rgba(0,0,0,0.5),0_0_30px_rgba(236,72,153,0.2)]
                         focus:shadow-[inset_0_2px_20px_rgba(0,0,0,0.5),0_0_50px_rgba(236,72,153,0.4)]
                         ${isFocused 
                           ? 'border-pink-400/80 scale-[1.02]' 
                           : name 
                           ? 'border-purple-400/60' 
                           : 'border-pink-500/40'
                         }`}
              data-testid="input-name"
            />

            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-2xl pointer-events-none"></div>

            {name && (
              <div className="absolute right-5 top-1/2 -translate-y-1/2 flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-amber-400 animate-bounce-stagger shadow-[0_0_10px_rgba(236,72,153,0.8)]"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bouton */}
        <div className="pt-2 w-full">
          <div className="relative group">
            <div className={`absolute -inset-3 bg-gradient-to-r from-pink-600 via-purple-600 to-violet-600 rounded-full blur-2xl transition-all duration-500 ${
              name.trim() ? 'opacity-50 group-hover:opacity-80' : 'opacity-0'
            }`}></div>

            <button
              onClick={handleSubmit}
              disabled={!name.trim()}
              className="relative w-full px-10 py-5 text-lg rounded-full font-semibold
                         bg-gradient-to-r from-pink-600 via-purple-600 to-violet-600
                         border-2 border-pink-400/70 text-white
                         shadow-[0_0_40px_rgba(236,72,153,0.5),0_4px_20px_rgba(147,51,234,0.4),inset_0_2px_15px_rgba(255,255,255,0.2)]
                         hover:shadow-[0_0_60px_rgba(236,72,153,0.7),0_6px_30px_rgba(147,51,234,0.6),inset_0_2px_20px_rgba(255,255,255,0.3)]
                         hover:border-pink-300/90 hover:scale-105
                         disabled:opacity-20 disabled:cursor-not-allowed disabled:scale-100
                         transition-all duration-300 overflow-hidden"
              data-testid="button-next"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"></div>

              <span className="flex items-center justify-center gap-3 relative z-10">
                <span>{t('name.next')}</span>
                <span className="text-amber-200 text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>

              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full pointer-events-none"></div>
            </button>
          </div>
        </div>
      </div>

      <div className="pb-8"></div>

      <style>{`
        @keyframes twinkle { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 1; transform: scale(1.4); } }
        @keyframes bounce-stagger { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .animate-twinkle { animation: twinkle ease-in-out infinite; }
        .animate-bounce-stagger { animation: bounce-stagger 1s ease-in-out infinite; }
      `}</style>
    </div>
  );
}