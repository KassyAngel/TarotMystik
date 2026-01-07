import { useState } from 'react';
import ProgressBar from '@/components/ProgressBar';
import MysticalButton from '@/components/MysticalButton';
import { useLanguage } from '@/contexts/LanguageContext';

interface NamePageProps {
  onNext: (name: string) => void;
}

export default function NamePage({ onNext }: NamePageProps) {
  const [name, setName] = useState('');
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
    <>
      <div className="intro-page active flex flex-col min-h-screen text-center px-4 sm:px-6 relative overflow-hidden pt-16 sm:pt-20">

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

        {/* Lueur ambiante cyan */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-400/10 via-blue-500/15 to-transparent blur-3xl -z-10"></div>

        {/* Progress Bar */}
        <div className="mb-6">
          <ProgressBar progress={33} />
        </div>

        {/* Contenu principal */}
        <div className="flex-1 flex flex-col justify-center max-w-lg mx-auto w-full space-y-6 sm:space-y-8">

          {/* Symbole lunaire 3D */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4">
            {/* Cercles concentriques avec effet 3D */}
            <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-spin-slow shadow-[0_0_30px_rgba(34,211,238,0.2)]"></div>
            <div className="absolute inset-3 border border-blue-400/40 rounded-full animate-spin-reverse shadow-[inset_0_0_20px_rgba(59,130,246,0.2)]"></div>
            <div className="absolute inset-6 border border-cyan-300/25 rounded-full animate-spin-slow"></div>

            {/* Lune centrale avec effet 3D */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="text-5xl sm:text-6xl filter drop-shadow-[0_4px_20px_rgba(34,211,238,0.6)]">🌙</div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/20 to-transparent rounded-full blur-xl"></div>
              </div>
            </div>

            {/* Lueur externe 3D */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-400/15 to-transparent rounded-full blur-2xl animate-pulse-slow"></div>
          </div>

          {/* Titre avec effet 3D */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-cyan-200 via-blue-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(34,211,238,0.4)]"
                style={{ textShadow: '0 2px 40px rgba(34,211,238,0.3)' }}>
              {t('name.title')}
            </h1>

            <p className="text-cyan-100/80 text-sm sm:text-base font-light leading-relaxed max-w-md mx-auto">
              {t('name.subtitle')}
            </p>

            {/* Séparateur 3D */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-cyan-300/60 shadow-[0_0_10px_rgba(34,211,238,0.3)]"></div>
              <span className="text-cyan-300/80 text-lg animate-pulse-slow drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">✦</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent via-cyan-400/50 to-cyan-300/60 shadow-[0_0_10px_rgba(34,211,238,0.3)]"></div>
            </div>
          </div>

          {/* Input avec effet 3D glassmorphism */}
          <div className="relative group">
            {/* Glow externe */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/0 via-cyan-400/20 to-cyan-500/0 rounded-2xl blur-lg opacity-0 group-focus-within:opacity-100 transition-all duration-500"></div>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t('name.placeholder')}
              className="relative w-full px-6 py-4 bg-gradient-to-br from-slate-800/60 to-slate-900/40 
                         border-2 border-cyan-500/30 rounded-2xl text-cyan-50 text-base sm:text-lg
                         placeholder-cyan-300/40 focus:outline-none focus:border-cyan-400/60 
                         transition-all duration-300 backdrop-blur-xl
                         shadow-[inset_0_2px_20px_rgba(0,0,0,0.3),0_0_20px_rgba(34,211,238,0.1)]
                         focus:shadow-[inset_0_2px_20px_rgba(0,0,0,0.3),0_0_30px_rgba(34,211,238,0.3)]"
              data-testid="input-name"
            />

            {/* Reflet lumineux sur l'input */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-cyan-400/5 to-transparent rounded-t-2xl pointer-events-none"></div>
          </div>

          {/* Bouton avec effet 3D */}
          <div className="pt-2">
            <div className="relative group inline-block">
              {/* Shadow 3D */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-all duration-500"></div>

              <MysticalButton
                onClick={handleSubmit}
                disabled={!name.trim()}
                className="relative px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg rounded-full font-medium
                           bg-gradient-to-br from-cyan-500 via-blue-600 to-cyan-500
                           border-2 border-cyan-400/50 text-cyan-50
                           shadow-[0_4px_20px_rgba(34,211,238,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]
                           hover:shadow-[0_6px_30px_rgba(34,211,238,0.5),inset_0_1px_0_rgba(255,255,255,0.3)]
                           hover:border-cyan-300/70 hover:-translate-y-0.5
                           disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none
                           transition-all duration-300"
                data-testid="button-next"
              >
                <span className="flex items-center justify-center gap-2 relative z-10">
                  <span>{t('name.next')}</span>
                  <span className="text-cyan-200 text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>

                {/* Reflet supérieur 3D */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-full pointer-events-none"></div>
              </MysticalButton>
            </div>
          </div>
        </div>

        <div className="pb-6"></div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 20s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}} />
    </>
  );
}