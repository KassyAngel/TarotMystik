// client/src/pages/GameModeSelection.tsx
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

  // Utiliser les traductions au lieu des props (pour supporter le changement de langue)
  const displayTitle = t('oracle.loveOracle.title') || oracleTitle;
  const displayDescription = t('oracle.loveOracle.description') || oracleDescription;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-[#0a1420] via-[#0d1b2e] to-[#0a1420] relative overflow-hidden">

      {/* Effets de fond */}
      <div className="absolute inset-0 pointer-events-none">
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

      <div className="max-w-3xl w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[#e8d4b8] text-3xl sm:text-4xl md:text-5xl font-serif mb-4 drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]">
            {displayTitle}
          </h1>
          <div className="h-px w-40 mx-auto bg-gradient-to-r from-transparent via-[#c9a87f]/50 to-transparent mb-4"></div>
          <p className="text-[#c9a87f]/85 text-base sm:text-lg">
            {displayDescription}
          </p>
        </div>

        {/* Choix du mode */}
        <div className="space-y-4 sm:space-y-5">
          {/* Mode Classique */}
          <button
            onClick={() => onModeSelect('classic')}
            className="w-full group bg-gradient-to-br from-[#152238]/70 via-[#1a2d45]/80 to-[#152238]/70 rounded-2xl p-6 sm:p-8 border-2 border-[#c9a87f]/30 hover:border-[#c9a87f]/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(201,168,127,0.3)]"
          >
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="text-4xl sm:text-5xl flex-shrink-0 group-hover:scale-110 transition-transform">
                🎴
              </div>
              <div className="text-left flex-1">
                <h3 className="text-[#e8d4b8] text-xl sm:text-2xl font-serif mb-2 group-hover:text-[#ffd700] transition-colors">
                  {t('gameMode.classic.title') || 'Tirage Classique'}
                </h3>
                <p className="text-[#c9a87f]/80 text-sm sm:text-base">
                  {t('gameMode.classic.description') || 'Choisissez 3 cartes parmi 6 pour découvrir votre destinée amoureuse'}
                </p>
                <div className="mt-3 flex items-center gap-2 text-[#ffd700]/70 text-xs sm:text-sm">
                  <span>✨</span>
                  <span>{t('gameMode.classic.features') || '6 cartes • Sélection libre • 3 minutes'}</span>
                </div>
              </div>
            </div>
          </button>

          {/* Mode Tirage en Croix */}
          <button
            onClick={() => onModeSelect('cross')}
            className="w-full group bg-gradient-to-br from-[#152238]/70 via-[#1a2d45]/80 to-[#152238]/70 rounded-2xl p-6 sm:p-8 border-2 border-[#ff6692]/30 hover:border-[#ff6692]/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(255,102,146,0.3)]"
          >
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="text-4xl sm:text-5xl flex-shrink-0 group-hover:scale-110 transition-transform">
                ✨
              </div>
              <div className="text-left flex-1">
                <h3 className="text-[#e8d4b8] text-xl sm:text-2xl font-serif mb-2 group-hover:text-[#ff6692] transition-colors">
                  {t('gameMode.cross.title') || 'Tirage en Croix'}
                </h3>
                <p className="text-[#c9a87f]/80 text-sm sm:text-base">
                  {t('gameMode.cross.description') || 'Un tirage approfondi avec 5 positions pour explorer votre situation amoureuse'}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[#ff6692]/70 text-xs sm:text-sm">
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

        {/* Bouton retour */}
        <div className="text-center mt-8">
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