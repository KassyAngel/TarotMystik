// client/src/pages/GameModeSelection.tsx
// 🔧 VERSION ANDROID - Titre bien visible

import MysticalButton from '@/components/MysticalButton';
import { UserSession } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';

type GameMode = 'classic' | 'cross';

interface GameModeSelectionProps {
  user: UserSession;
  oracleTitle: string;
  oracleDescription: string;
  onModeSelect: (mode: GameMode) => void;
  onBack: () => void;
}

export default function GameModeSelection({
  user,
  oracleTitle,
  oracleDescription,
  onModeSelect,
  onBack
}: GameModeSelectionProps) {
  const { t } = useLanguage();

  const displayTitle = t('oracle.loveOracle.title') || oracleTitle;
  const displayDescription = t('oracle.loveOracle.description') || oracleDescription;

  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 pt-safe-top pb-safe-banner bg-gradient-to-b from-[#0a1420] via-[#0d1b2e] to-[#0a1420] relative overflow-hidden">

      {/* Effets de fond */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff6692]/8 rounded-full blur-3xl animate-pulse-romantic"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#1a2d45]/25 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Étoiles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-[#c9a87f] rounded-full animate-twinkle-elegant"
            style={{
              width: Math.random() > 0.7 ? '2px' : '1px',
              height: Math.random() > 0.7 ? '2px' : '1px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Container principal avec structure flex améliorée */}
      <div className="max-w-3xl w-full mx-auto relative z-10 flex-1 flex flex-col min-h-0">

        {/* Header - BIEN VISIBLE */}
        <div className="text-center mb-6 sm:mb-8 flex-shrink-0">
          <h1 className="text-[#e8d4b8] text-2xl sm:text-3xl md:text-4xl font-serif mb-3 sm:mb-4 drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)] px-4">
            {displayTitle}
          </h1>
          <div className="h-px w-32 sm:w-40 mx-auto bg-gradient-to-r from-transparent via-[#c9a87f]/50 to-transparent mb-3 sm:mb-4"></div>
          <p className="text-[#c9a87f]/85 text-sm sm:text-base md:text-lg px-4">
            {displayDescription}
          </p>
        </div>

        {/* Choix du mode - SCROLLABLE si besoin */}
        <div className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-5 overflow-y-auto overflow-x-hidden min-h-0 pb-4 px-2">

          {/* Mode Classique */}
          <button
            onClick={() => onModeSelect('classic')}
            className="w-full max-w-full group bg-gradient-to-br from-[#152238]/70 via-[#1a2d45]/80 to-[#152238]/70 rounded-2xl p-5 sm:p-6 md:p-8 border-2 border-[#c9a87f]/30 hover:border-[#c9a87f]/60 transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(201,168,127,0.3)]"
          >
            <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
              <div className="text-3xl sm:text-4xl md:text-5xl flex-shrink-0 group-hover:scale-110 transition-transform">
                🎴
              </div>
              <div className="text-left flex-1">
                <h3 className="text-[#e8d4b8] text-lg sm:text-xl md:text-2xl font-serif mb-2 group-hover:text-[#ffd700] transition-colors">
                  {t('gameMode.classic.title') || 'Tirage Classique'}
                </h3>
                <p className="text-[#c9a87f]/80 text-sm sm:text-base leading-relaxed">
                  {t('gameMode.classic.description') || 'Choisissez 3 cartes parmi 6 pour découvrir votre destinée amoureuse'}
                </p>
                <div className="mt-2 sm:mt-3 flex items-center gap-2 text-[#ffd700]/70 text-xs sm:text-sm">
                  <span>✨</span>
                  <span>{t('gameMode.classic.features') || '6 cartes • Sélection libre • 3 minutes'}</span>
                </div>
              </div>
            </div>
          </button>

          {/* Mode Tirage en Croix */}
          <button
            onClick={() => onModeSelect('cross')}
            className="w-full max-w-full group bg-gradient-to-br from-[#152238]/70 via-[#1a2d45]/80 to-[#152238]/70 rounded-2xl p-5 sm:p-6 md:p-8 border-2 border-[#ff6692]/30 hover:border-[#ff6692]/60 transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(255,102,146,0.3)]"
          >
            <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
              <div className="text-3xl sm:text-4xl md:text-5xl flex-shrink-0 group-hover:scale-110 transition-transform">
                ✨
              </div>
              <div className="text-left flex-1">
                <h3 className="text-[#e8d4b8] text-lg sm:text-xl md:text-2xl font-serif mb-2 group-hover:text-[#ff6692] transition-colors">
                  {t('gameMode.cross.title') || 'Tirage en Croix'}
                </h3>
                <p className="text-[#c9a87f]/80 text-sm sm:text-base leading-relaxed">
                  {t('gameMode.cross.description') || 'Un tirage approfondi avec 5 positions pour explorer votre situation amoureuse'}
                </p>
                <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1 text-[#ff6692]/70 text-xs sm:text-sm">
                  <span className="flex items-center gap-1">
                    <span>💫</span> {t('crossSpread.positions.present') || 'Présent'}
                  </span>
                  <span className="flex items-center gap-1">
                    <span>⚠️</span> {t('crossSpread.positions.obstacle') || 'Obstacle'}
                  </span>
                  <span className="flex items-center gap-1">
                    <span>🕰️</span> {t('crossSpread.positions.past') || 'Passé'}
                  </span>
                  <span className="flex items-center gap-1">
                    <span>🔮</span> {t('crossSpread.positions.future') || 'Avenir'}
                  </span>
                  <span className="flex items-center gap-1">
                    <span>✨</span> {t('crossSpread.positions.synthesis') || 'Synthèse'}
                  </span>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Bouton retour - FIXÉ EN BAS */}
        <div className="text-center pt-4 flex-shrink-0">
          <MysticalButton
            variant="secondary"
            onClick={onBack}
            className="px-6 py-3 bg-gradient-to-r from-[#152238]/70 to-[#1a2d45]/70 border border-[#c9a87f]/30 text-[#e8d4b8]"
          >
            ← {t('common.back') || 'Retour'}
          </MysticalButton>
        </div>
      </div>

      <style>{`
        /* ✅ BOX SIZING FIX pour éviter les débordements */
        * {
          box-sizing: border-box;
        }

        /* ✅ PADDING TOP TRÈS AUGMENTÉ - TITRE COMPLÈTEMENT VISIBLE */
        .pt-safe-top {
          padding-top: max(100px, env(safe-area-inset-top, 0px) + 100px);
        }

        .pb-safe-banner {
          padding-bottom: calc(130px + env(safe-area-inset-bottom, 0px));
        }

        @media (min-width: 640px) {
          .pt-safe-top {
            padding-top: max(110px, env(safe-area-inset-top, 0px) + 110px);
          }

          .pb-safe-banner {
            padding-bottom: calc(140px + env(safe-area-inset-bottom, 0px));
          }
        }

        /* Animations */
        @keyframes pulse-romantic {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes twinkle-elegant {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.9; }
        }
        .animate-pulse-romantic {
          animation: pulse-romantic 2s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-twinkle-elegant {
          animation: twinkle-elegant 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}