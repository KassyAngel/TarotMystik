// ============================================
// client/src/components/TarotCard.tsx - VERSION FINALE CORRIGÉE
// ============================================
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface TarotCardProps {
  number: number;
  isSelected?: boolean;
  isSelectable?: boolean;
  onClick?: () => void;
  className?: string;
  cardName?: string;
  oracleType?: 'loveOracle' | 'lunar' | 'runes' | 'oracle';
}

export default function TarotCard({ 
  number, 
  isSelected, 
  isSelectable = true,
  onClick, 
  className,
  cardName,
  oracleType = 'loveOracle'
}: TarotCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { t } = useLanguage();

  const handleClick = () => {
    if (isSelectable) {
      onClick?.();
    }
  };

  const isBack = number === 0;

  const normalizeForImage = (name: string): string => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[''\s-]/g, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  const normalizeForTranslation = (name: string): string => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[''\s-]/g, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  const getTranslatedCardName = (): string => {
    if (!cardName) return '';
    const normalized = normalizeForTranslation(cardName);
    const translationKey = `cards.${oracleType}.${normalized}.name`;
    const translated = t(translationKey);

    return translated !== translationKey ? translated : cardName;
  };

  // ✅ Utiliser le bon dossier selon l'oracle
  const getOracleFolderName = (): string => {
    switch(oracleType) {
      case 'lunar':
        return 'luneOracle';
      case 'loveOracle':
        return 'loveOracle';
      case 'runes':
        return 'runes';
      default:
        return 'loveOracle';
    }
  };

  const getCardImagePath = (): string => {
    if (!cardName) return '';
    const normalized = normalizeForImage(cardName);
    const folder = getOracleFolderName();
    const path = `/Image/${folder}/${normalized}.jpg`;

    return path;
  };

  // ✅ CORRECTION : Fonction pour obtenir le dos de carte selon l'oracle
  const getBackImagePath = (): string => {
    switch(oracleType) {
      case 'lunar':
        return '/Image/luneOracle/card-verso-luna.jpg';
      case 'loveOracle':
        return '/Image/card-back.jpg'; // ← CORRECTION ICI : chemin direct pour Love Oracle
      case 'runes':
        return '/Image/runes/card-back.jpg';
      case 'oracle':
        return '/Image/card-back.jpg';
      default:
        return '/Image/card-back.jpg';
    }
  };

  return (
    <div
      className={cn(
        'w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-44 rounded-2xl cursor-pointer min-h-[44px]',
        'touch-manipulation flex flex-col items-center justify-center transition-all duration-500',
        'relative overflow-visible',
        isSelectable && 'hover:scale-105 hover:-translate-y-2',
        isSelected && 'scale-105 -translate-y-2',
        !isSelectable && 'cursor-default opacity-50',
        className
      )}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-${number}`}
    >
      {/* ==== CARTE (dos ou face) ==== */}
      <div className="relative w-full h-full">
        {isBack ? (
          /* DOS DE CARTE */
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <img 
              src={getBackImagePath()}
              alt="Dos de carte"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: 1, filter: 'none' }}
              onError={(e) => {
                console.error('❌ Erreur chargement dos de carte:', getBackImagePath());
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-2 rounded-xl border border-[#c9a87f]/30 pointer-events-none"></div>
          </div>
        ) : (
          /* FACE RÉVÉLÉE */
          cardName ? (
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl">
              {!imageError ? (
                <>
                  {/* Image de la carte */}
                  <img 
                    src={getCardImagePath()}
                    alt={getTranslatedCardName()}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ 
                      opacity: 1, 
                      filter: 'none',
                      imageRendering: 'crisp-edges',
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden'
                    }}
                    onError={() => {
                      console.error('❌ Erreur chargement image carte:', getCardImagePath());
                      setImageError(true);
                    }}
                  />
                  {/* Bordure très subtile */}
                  <div className="absolute inset-2 rounded-xl border border-[#c9a87f]/15 pointer-events-none"></div>
                </>
              ) : (
                /* Fallback si l'image ne charge pas */
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a2d45] via-[#223549] to-[#152238] rounded-2xl p-3 flex items-center justify-center border-2 border-[#ff6692]/30">
                  <div className="absolute inset-2 rounded-xl border border-[#c9a87f]/40"></div>
                  <div className="absolute inset-0 bg-gradient-radial from-[#ff6692]/8 via-transparent to-transparent"></div>
                  <div className="relative z-10 text-center px-2">
                    <span className="text-[#e8d4b8] font-semibold text-xs sm:text-sm md:text-base leading-tight block drop-shadow-[0_2px_4px_rgba(255,102,146,0.3)]">
                      {getTranslatedCardName()}
                    </span>
                    <div className="text-[#ff6692]/40 text-[10px] mt-1.5">♥</div>
                  </div>
                  <div className="absolute top-1.5 left-1.5 text-[#ff6692]/30 text-[8px]">♥</div>
                  <div className="absolute top-1.5 right-1.5 text-[#ff6692]/30 text-[8px]">♥</div>
                  <div className="absolute bottom-1.5 left-1.5 text-[#ff6692]/30 text-[8px]">♥</div>
                  <div className="absolute bottom-1.5 right-1.5 text-[#ff6692]/30 text-[8px]">♥</div>
                </div>
              )}
            </div>
          ) : number > 0 ? (
            <span className="text-[#e8d4b8] font-bold">{number}</span>
          ) : null
        )}

        {/* Effet de sélection - Halo rose-doré */}
        {isSelected && (
          <>
            <div className="absolute -inset-0.5 rounded-2xl border-2 border-[#ff6692] animate-pulse-romantic"></div>
            <div className="absolute -inset-1 rounded-2xl bg-[#ff6692]/25 blur-lg"></div>
          </>
        )}
      </div>
    </div>
  );
}

// ============================================
// RÉCAPITULATIF DES VERSOS
// ============================================
/*
Love Oracle  → /Image/card-back.jpg
Lunar Oracle → /Image/luneOracle/card-verso-luna.jpg
Runes        → /Image/runes/card-back.jpg
Default      → /Image/card-back.jpg
*/