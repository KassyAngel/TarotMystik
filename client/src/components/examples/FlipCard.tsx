import { useState } from 'react';
import { cn } from '@/lib/utils';

// ✅ Type corrigé
type CardBasedOracleType = 'loveOracle' | 'lunar' | 'runes';

interface FlipCardProps {
  card: {
    name: string;
    meaning: string;
  };
  position: string;
  isFlipped: boolean;
  onFlip: () => void;
  oracleType?: CardBasedOracleType;
}

export default function FlipCard({ 
  card, 
  position, 
  isFlipped, 
  onFlip,
  oracleType = 'loveOracle'
}: FlipCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="perspective-1000">
      <div
        className={cn(
          "relative w-48 h-64 cursor-pointer transition-transform duration-700 transform-style-3d",
          isFlipped && "rotate-y-180"
        )}
        onClick={onFlip}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Face arrière (dos de la carte) */}
        <div className={cn(
          "absolute inset-0 backface-hidden rounded-xl",
          "bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900",
          "border-2 border-amber-400/30 shadow-2xl",
          "flex flex-col items-center justify-center p-6"
        )}>
          {/* Étoiles décoratives */}
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            <div className="absolute top-[15%] left-[20%] w-1 h-1 bg-yellow-200 rounded-full animate-pulse"></div>
            <div className="absolute top-[40%] right-[15%] w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-[25%] left-[15%] w-1 h-1 bg-yellow-100 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>

          {/* Symbole mystique central */}
          <div className="relative">
            <div className="absolute inset-0 blur-xl bg-amber-400/20 scale-150"></div>
            <div className="relative text-6xl text-amber-300 drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]">
              ☽
            </div>
          </div>

          {/* Bordure dorée */}
          <div className="absolute inset-2 rounded-lg border-2 border-amber-400/30"></div>

          {/* Position */}
          <div className="absolute bottom-4 text-amber-300 text-sm font-serif">
            {position}
          </div>

          {isHovered && (
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-shimmer rounded-xl"></div>
          )}
        </div>

        {/* Face avant (carte révélée) */}
        <div className={cn(
          "absolute inset-0 backface-hidden rounded-xl rotate-y-180",
          "bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900",
          "border-2 border-amber-400/50 shadow-2xl",
          "flex flex-col items-center justify-center p-6"
        )}>
          <div className="text-center space-y-4">
            <div className="text-amber-300 text-2xl font-bold font-serif">
              {card.name}
            </div>
            <div className="text-purple-200 text-sm leading-relaxed">
              {card.meaning}
            </div>
          </div>

          {/* Position en bas */}
          <div className="absolute bottom-4 text-amber-300/70 text-xs font-serif">
            {position}
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}