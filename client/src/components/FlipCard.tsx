// ============================================
// client/src/components/FlipCard.tsx - VERSION CORRIGÉE
// ============================================
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { OracleCard } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';

type CardBasedOracleType = 'loveOracle' | 'lunar' | 'runes';

interface FlipCardProps {
  card: OracleCard;
  position: string;
  oracleType: CardBasedOracleType;
  isFlipped?: boolean;
  onFlip?: () => void;
  className?: string;
  noAnimation?: boolean;
  hidePosition?: boolean;
  showPositionAbove?: boolean;
}

export default function FlipCard({ 
  card, 
  position, 
  oracleType,
  isFlipped = false, 
  onFlip, 
  className,
  noAnimation = false,
  hidePosition = false,
  showPositionAbove = false
}: FlipCardProps) {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [imageError, setImageError] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (isFlipped && noAnimation) {
      setIsInitialRender(false);
    } else {
      const timer = setTimeout(() => {
        setIsInitialRender(false);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isFlipped, noAnimation]);

  const normalizeCardName = (name: string): string => {
    return name
      .trim()
      .toLowerCase()
      .replace(/[''\s-]/g, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  const getTranslatedCardName = () => {
    const cardKey = normalizeCardName(card.name);
    const translationKey = `cards.${oracleType}.${cardKey}.name`;
    const translated = t(translationKey);
    return translated !== translationKey ? translated : card.name;
  };

  // ✅ CORRECTION : Utiliser le bon dossier selon l'oracle
  const getOracleFolderName = (): string => {
    switch(oracleType) {
      case 'lunar':
        return 'luneOracle'; // ← Nom du dossier physique
      case 'loveOracle':
        return 'loveOracle';
      case 'runes':
        return 'runes';
      default:
        return 'loveOracle';
    }
  };

  const getCardImagePath = (): string => {
    const normalized = normalizeCardName(card.name);
    const folder = getOracleFolderName();
    return `/Image/${folder}/${normalized}.jpg`;
  };

  const getBackImagePath = (): string => {
    switch(oracleType) {
      case 'lunar':
        return '/Image/luneOracle/card-verso-luna.jpg';
      case 'loveOracle':
        return '/Image/loveOracle/card-verso.jpg';
      case 'runes':
        return '/Image/runes/card-back.jpg';
      default:
        return '/Image/card-back.jpg';
    }
  };

  const handleFlip = () => {
    if (!isFlipped && onFlip) {
      console.log(`Card ${card.name} flipped`);
      onFlip();

      const newSparkles = Array.from({ length: 15 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        y: Math.random() * 100
      }));

      setSparkles(newSparkles);

      setTimeout(() => {
        setSparkles([]);
      }, 1000);
    }
  };

  return (
    <div className={cn('text-center', className)}>
      {/* Label de position AU-DESSUS de la carte */}
      {!hidePosition && showPositionAbove && (
        <div className="mb-2 sm:mb-3">
          <p className="text-amber-200/70 font-serif text-[10px] sm:text-xs tracking-widest uppercase">
            {position}
          </p>
        </div>
      )}

      {/* CARTE - GRANDES DIMENSIONS */}
      <div className="flip-card w-full aspect-[2/3] perspective-1000 mx-auto relative">
        <div 
          className={cn(
            'flip-card-inner relative w-full h-full text-center transform-preserve-3d',
            !isInitialRender && 'transition-transform duration-700',
            isFlipped ? 'rotate-y-180 pointer-events-none' : 'cursor-pointer'
          )}
          onClick={handleFlip}
          data-testid={`flip-card-${position.toLowerCase()}`}
        >
          {/* DOS DE LA CARTE */}
          <div className={cn(
            "flip-card-front absolute w-full h-full backface-hidden rounded-xl sm:rounded-2xl flex items-center justify-center overflow-hidden shadow-xl",
            isFlipped && "pointer-events-none"
          )}>
            <img
              src={getBackImagePath()}
              alt="Dos de carte"
              className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                console.error('❌ Erreur chargement dos de carte:', getBackImagePath());
                target.style.display = 'none';
              }}
            />
            <div className="absolute inset-2 rounded-lg border border-[#c9a87f]/30 pointer-events-none"></div>
          </div>

          {/* FACE DE LA CARTE - AVEC IMAGE */}
          <div className={cn(
            "flip-card-back absolute w-full h-full backface-hidden rounded-xl sm:rounded-2xl rotate-y-180 overflow-hidden shadow-xl",
            isFlipped && "mystical-card-flipped"
          )}>
            {!imageError ? (
              <>
                {/* IMAGE DE LA CARTE */}
                <img 
                  src={getCardImagePath()}
                  alt={getTranslatedCardName()}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={() => {
                    console.error('Erreur chargement image carte:', getCardImagePath());
                    setImageError(true);
                  }}
                />
                {/* Bordure subtile */}
                <div className="absolute inset-2 rounded-lg border border-[#c9a87f]/40 pointer-events-none"></div>
              </>
            ) : (
              /* FALLBACK : Design avec texte */
              <div className="absolute inset-0 bg-gradient-to-br from-[#4a3470] via-[#2d1b4e] to-[#1a0f3a] flex flex-col items-center justify-center p-4 sm:p-5 md:p-6">
                <div className="absolute inset-3 sm:inset-4 rounded-lg sm:rounded-xl border-2 sm:border-[3px] border-amber-400/60 pointer-events-none">
                  <div className="absolute -top-0.5 -left-0.5 w-5 h-5 sm:w-6 sm:h-6">
                    <div className="absolute top-0 left-0 w-4 sm:w-5 h-0.5 bg-gradient-to-r from-amber-300 to-transparent"></div>
                    <div className="absolute top-0 left-0 w-0.5 h-4 sm:h-5 bg-gradient-to-b from-amber-300 to-transparent"></div>
                    <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-amber-300 rounded-full shadow-lg shadow-amber-400/50"></div>
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-5 h-5 sm:w-6 sm:h-6">
                    <div className="absolute top-0 right-0 w-4 sm:w-5 h-0.5 bg-gradient-to-l from-amber-300 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-0.5 h-4 sm:h-5 bg-gradient-to-b from-amber-300 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-amber-300 rounded-full shadow-lg shadow-amber-400/50"></div>
                  </div>
                  <div className="absolute -bottom-0.5 -left-0.5 w-5 h-5 sm:w-6 sm:h-6">
                    <div className="absolute bottom-0 left-0 w-4 sm:w-5 h-0.5 bg-gradient-to-r from-amber-300 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-0.5 h-4 sm:h-5 bg-gradient-to-t from-amber-300 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-amber-300 rounded-full shadow-lg shadow-amber-400/50"></div>
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 sm:w-6 sm:h-6">
                    <div className="absolute bottom-0 right-0 w-4 sm:w-5 h-0.5 bg-gradient-to-l from-amber-300 to-transparent"></div>
                    <div className="absolute bottom-0 right-0 w-0.5 h-4 sm:h-5 bg-gradient-to-t from-amber-300 to-transparent"></div>
                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-amber-300 rounded-full shadow-lg shadow-amber-400/50"></div>
                  </div>
                </div>
                <div className="relative z-10 text-center flex items-center justify-center h-full px-3 sm:px-4">
                  <h3 className="text-amber-50 text-sm sm:text-lg md:text-xl lg:text-2xl font-serif leading-tight text-center break-words hyphens-auto drop-shadow-[0_2px_8px_rgba(255,215,0,0.3)]">
                    {getTranslatedCardName()}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-gradient-radial from-amber-400/8 via-transparent to-transparent pointer-events-none rounded-xl sm:rounded-2xl"></div>
              </div>
            )}
          </div>
        </div>

        {/* Sparkle effects */}
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="sparkle absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#ffd700] rounded-full pointer-events-none animate-ping"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
            }}
          />
        ))}
      </div>

      {/* Label de position EN DESSOUS (old style) */}
      {!hidePosition && !showPositionAbove && (
        <div className="text-[#ffd700] text-xs sm:text-sm md:text-base font-bold mt-2 sm:mt-3 font-serif text-shadow-glow">
          {position}
        </div>
      )}
    </div>
  );
}