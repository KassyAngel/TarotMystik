// client/src/pages/CrossSpreadGame.tsx
// 🎴 TIRAGE EN CROIX - VERSION ANDROID ULTRA-FIXÉE (Alignement parfait)

import { useState, useEffect } from 'react';
import FlipCard from '@/components/FlipCard';
import MysticalButton from '@/components/MysticalButton';
import CardRevealModal from '@/components/CardRevealModal';
import { OracleData, UserSession, OracleCard } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSound } from '@/hooks/useSound';
import { 
  selectRandomCardsWithoutRepeat, 
  saveTirageToHistory,
  getSecureRandomInt
} from '@/lib/utils';

type CardBasedOracleType = 'loveOracle' | 'lunar' | 'runes';

interface CrossSpreadGameProps {
  user: UserSession;
  oracle: OracleData;
  oracleType: CardBasedOracleType;
  onCardsSelected: (selectedCardIndices: number[]) => void;
  onSaveReading?: (reading: any) => Promise<void>;
  onBack: () => void;
  shouldShowAdBeforeReading?: (oracleType: string) => Promise<boolean>;
  onReadingComplete?: (oracleType: string) => void;
}

export default function CrossSpreadGame({ 
  user,
  oracle, 
  oracleType, 
  onCardsSelected, 
  onSaveReading,
  onBack,
  shouldShowAdBeforeReading,
  onReadingComplete
}: CrossSpreadGameProps) {
  const [randomCards, setRandomCards] = useState<number[]>([]);
  const [flippedCards, setFlippedCards] = useState<boolean[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentRevealedCard, setCurrentRevealedCard] = useState<number | null>(null);
  const [adShownForSession, setAdShownForSession] = useState(false);
  const { t } = useLanguage();

  const playFlip = useSound('Flip-card.wav');
  const playReveal = useSound('Bouton-reveal.wav');

  const totalCards = 5;

  const positions = [
    { key: 'present', label: t('crossSpread.positions.present') },
    { key: 'obstacle', label: t('crossSpread.positions.obstacle') },
    { key: 'past', label: t('crossSpread.positions.past') },
    { key: 'future', label: t('crossSpread.positions.future') },
    { key: 'synthesis', label: t('crossSpread.positions.synthesis') }
  ];

  const normalizeCardName = (name: string): string => {
    return name
      .trim()
      .toLowerCase()
      .replace(/[''\s-]/g, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  const getTranslatedCardName = (card: OracleCard): string => {
    if (!card?.name) return '';
    const normalizedName = normalizeCardName(card.name);
    const translatedName = t(`cards.${oracleType}.${normalizedName}.name`);

    if (translatedName !== `cards.${oracleType}.${normalizedName}.name`) {
      return translatedName;
    }

    return card.name;
  };

  useEffect(() => {
    const initGame = async () => {
      if (!adShownForSession && shouldShowAdBeforeReading) {
        console.log('🎯 [CROSS_SPREAD] Vérification pub avant tirage...');
        await shouldShowAdBeforeReading(oracleType);
        setAdShownForSession(true);
      }

      const selectedCards = selectRandomCardsWithoutRepeat(
        oracle.cards.length,
        totalCards,
        oracleType
      );
      setRandomCards(selectedCards);
      setFlippedCards(new Array(totalCards).fill(false));
    };

    initGame();
  }, [oracle.cards.length, oracleType, shouldShowAdBeforeReading, adShownForSession]);

  const handleCardFlip = (index: number) => {
    if (index !== currentCardIndex || flippedCards[index]) return;

    playFlip();

    const newFlippedCards = [...flippedCards];
    newFlippedCards[index] = true;
    setFlippedCards(newFlippedCards);

    setTimeout(() => {
      setCurrentRevealedCard(index);
      setShowModal(true);
    }, 600);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentRevealedCard(null);

    if (currentCardIndex === totalCards - 1) {
      setTimeout(() => {
        setIsComplete(true);
        setTimeout(() => {
          playReveal();
          saveTirageToHistory(oracleType, randomCards);

          if (onSaveReading) {
            onSaveReading({
              type: 'crossSpread',
              cards: randomCards.map(idx => oracle.cards[idx].name),
              date: new Date(),
              answer: 'Tirage en croix'
            }).catch(error => console.error('❌ Erreur sauvegarde:', error));
          }

          if (onReadingComplete) {
            console.log(`✅ [CROSS_SPREAD] Tirage ${oracleType} terminé, incrémentation compteur`);
            onReadingComplete(oracleType);
          }

          onCardsSelected(randomCards);
        }, 1500);
      }, 300);
    } else {
      setTimeout(() => {
        setCurrentCardIndex(currentCardIndex + 1);
      }, 300);
    }
  };

  const handleRevealInterpretation = async () => {
    playReveal();
    saveTirageToHistory(oracleType, randomCards);

    if (onSaveReading) {
      try {
        await onSaveReading({
          type: 'crossSpread',
          cards: randomCards.map(idx => oracle.cards[idx].name),
          date: new Date(),
          answer: 'Tirage en croix'
        });
      } catch (error) {
        console.error('❌ Erreur sauvegarde:', error);
      }
    }

    if (onReadingComplete) {
      console.log(`✅ [CROSS_SPREAD] Tirage ${oracleType} terminé, incrémentation compteur`);
      onReadingComplete(oracleType);
    }

    onCardsSelected(randomCards);
  };

  if (randomCards.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a1420] via-[#0d1b2e] to-[#0a1420]">
        <div className="text-[#c9a87f] text-lg">{t('common.loading')}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-[#0a1420] via-[#0d1b2e] to-[#0a1420] relative overflow-x-hidden overflow-y-auto">

      {/* Effets de fond */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff6692]/8 rounded-full blur-3xl animate-pulse-romantic"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#1a2d45]/25 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c9a87f]/6 rounded-full blur-3xl"></div>
      </div>

      {/* Étoiles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
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

      {/* Container principal */}
      <div className="w-full pt-safe-top pb-safe-banner px-4 relative z-10">

        {/* Header */}
        <div className="text-center pb-3">
          <h2 className="text-[#e8d4b8] text-xl sm:text-2xl md:text-3xl font-serif mb-2 drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]">
            {t('crossSpread.title')}
          </h2>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[#c9a87f]/50 to-transparent mb-2"></div>
          <p className="text-[#c9a87f]/85 text-xs sm:text-sm max-w-xl mx-auto">
            {t('crossSpread.description')}
          </p>
        </div>

        {/* 🔧 FIX ANDROID ULTRA-ROBUSTE : Grille en table pour alignement PARFAIT */}
        <div className="flex items-center justify-center py-4">
          <div className="cross-spread-table">

            {/* LIGNE 1 : Avenir (index 3) */}
            <div className="cross-row">
              <div className="cross-cell cross-empty"></div>
              <div className="cross-cell cross-center">
                {(() => {
                  const index = 3; // Avenir
                  const actualIndex = randomCards[index];
                  const cardData = oracle.cards[actualIndex];
                  const isFlipped = flippedCards[index];
                  const canFlip = index === currentCardIndex && !isComplete;

                  return (
                    <div className="cross-card-content">
                      <div className="text-center mb-1 sm:mb-2">
                        <p className={`text-xs sm:text-sm font-serif tracking-wide transition-all duration-300 ${
                          canFlip 
                            ? 'text-[#ff6692] font-bold animate-pulse-gentle' 
                            : isFlipped 
                            ? 'text-[#c9a87f]/70' 
                            : 'text-[#c9a87f]/40'
                        }`}>
                          {positions[index].label}
                        </p>
                      </div>

                      <div className={`card-container relative transition-all duration-300 ${
                        canFlip ? 'opacity-100 scale-105' : isFlipped ? 'opacity-100' : 'opacity-40 scale-95'
                      }`}>
                        <FlipCard
                          card={cardData}
                          position={positions[index].label}
                          oracleType={oracleType}
                          isFlipped={isFlipped}
                          onFlip={() => handleCardFlip(index)}
                          hidePosition={true}
                        />

                        {canFlip && !isFlipped && (
                          <>
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
                              <div className="text-[#ff6692] text-2xl drop-shadow-[0_0_10px_rgba(255,102,146,0.8)]">↓</div>
                            </div>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                              <div className="w-3 h-3 bg-[#ff6692] rounded-full animate-pulse-strong shadow-[0_0_15px_rgba(255,102,146,1)]"></div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </div>
              <div className="cross-cell cross-empty"></div>
            </div>

            {/* LIGNE 2 : Obstacle (1), Présent (0), Synthèse (4) */}
            <div className="cross-row">
              {/* Obstacle */}
              <div className="cross-cell cross-left">
                {(() => {
                  const index = 1;
                  const actualIndex = randomCards[index];
                  const cardData = oracle.cards[actualIndex];
                  const isFlipped = flippedCards[index];
                  const canFlip = index === currentCardIndex && !isComplete;

                  return (
                    <div className="cross-card-content">
                      <div className="text-center mb-1 sm:mb-2">
                        <p className={`text-xs sm:text-sm font-serif tracking-wide transition-all duration-300 ${
                          canFlip ? 'text-[#ff6692] font-bold animate-pulse-gentle' : isFlipped ? 'text-[#c9a87f]/70' : 'text-[#c9a87f]/40'
                        }`}>
                          {positions[index].label}
                        </p>
                      </div>

                      <div className={`card-container relative transition-all duration-300 ${
                        canFlip ? 'opacity-100 scale-105' : isFlipped ? 'opacity-100' : 'opacity-40 scale-95'
                      }`}>
                        <FlipCard
                          card={cardData}
                          position={positions[index].label}
                          oracleType={oracleType}
                          isFlipped={isFlipped}
                          onFlip={() => handleCardFlip(index)}
                          hidePosition={true}
                        />

                        {canFlip && !isFlipped && (
                          <>
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
                              <div className="text-[#ff6692] text-2xl drop-shadow-[0_0_10px_rgba(255,102,146,0.8)]">↓</div>
                            </div>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                              <div className="w-3 h-3 bg-[#ff6692] rounded-full animate-pulse-strong shadow-[0_0_15px_rgba(255,102,146,1)]"></div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Présent */}
              <div className="cross-cell cross-center">
                {(() => {
                  const index = 0;
                  const actualIndex = randomCards[index];
                  const cardData = oracle.cards[actualIndex];
                  const isFlipped = flippedCards[index];
                  const canFlip = index === currentCardIndex && !isComplete;

                  return (
                    <div className="cross-card-content">
                      <div className="text-center mb-1 sm:mb-2">
                        <p className={`text-xs sm:text-sm font-serif tracking-wide transition-all duration-300 ${
                          canFlip ? 'text-[#ff6692] font-bold animate-pulse-gentle' : isFlipped ? 'text-[#c9a87f]/70' : 'text-[#c9a87f]/40'
                        }`}>
                          {positions[index].label}
                        </p>
                      </div>

                      <div className={`card-container relative transition-all duration-300 ${
                        canFlip ? 'opacity-100 scale-105' : isFlipped ? 'opacity-100' : 'opacity-40 scale-95'
                      }`}>
                        <FlipCard
                          card={cardData}
                          position={positions[index].label}
                          oracleType={oracleType}
                          isFlipped={isFlipped}
                          onFlip={() => handleCardFlip(index)}
                          hidePosition={true}
                        />

                        {canFlip && !isFlipped && (
                          <>
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
                              <div className="text-[#ff6692] text-2xl drop-shadow-[0_0_10px_rgba(255,102,146,0.8)]">↓</div>
                            </div>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                              <div className="w-3 h-3 bg-[#ff6692] rounded-full animate-pulse-strong shadow-[0_0_15px_rgba(255,102,146,1)]"></div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Synthèse */}
              <div className="cross-cell cross-right">
                {(() => {
                  const index = 4;
                  const actualIndex = randomCards[index];
                  const cardData = oracle.cards[actualIndex];
                  const isFlipped = flippedCards[index];
                  const canFlip = index === currentCardIndex && !isComplete;

                  return (
                    <div className="cross-card-content">
                      <div className="text-center mb-1 sm:mb-2">
                        <p className={`text-xs sm:text-sm font-serif tracking-wide transition-all duration-300 ${
                          canFlip ? 'text-[#ff6692] font-bold animate-pulse-gentle' : isFlipped ? 'text-[#c9a87f]/70' : 'text-[#c9a87f]/40'
                        }`}>
                          {positions[index].label}
                        </p>
                      </div>

                      <div className={`card-container relative transition-all duration-300 ${
                        canFlip ? 'opacity-100 scale-105' : isFlipped ? 'opacity-100' : 'opacity-40 scale-95'
                      }`}>
                        <FlipCard
                          card={cardData}
                          position={positions[index].label}
                          oracleType={oracleType}
                          isFlipped={isFlipped}
                          onFlip={() => handleCardFlip(index)}
                          hidePosition={true}
                        />

                        {canFlip && !isFlipped && (
                          <>
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
                              <div className="text-[#ff6692] text-2xl drop-shadow-[0_0_10px_rgba(255,102,146,0.8)]">↓</div>
                            </div>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                              <div className="w-3 h-3 bg-[#ff6692] rounded-full animate-pulse-strong shadow-[0_0_15px_rgba(255,102,146,1)]"></div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* LIGNE 3 : Passé (index 2) */}
            <div className="cross-row">
              <div className="cross-cell cross-empty"></div>
              <div className="cross-cell cross-center">
                {(() => {
                  const index = 2;
                  const actualIndex = randomCards[index];
                  const cardData = oracle.cards[actualIndex];
                  const isFlipped = flippedCards[index];
                  const canFlip = index === currentCardIndex && !isComplete;

                  return (
                    <div className="cross-card-content">
                      <div className="text-center mb-1 sm:mb-2">
                        <p className={`text-xs sm:text-sm font-serif tracking-wide transition-all duration-300 ${
                          canFlip ? 'text-[#ff6692] font-bold animate-pulse-gentle' : isFlipped ? 'text-[#c9a87f]/70' : 'text-[#c9a87f]/40'
                        }`}>
                          {positions[index].label}
                        </p>
                      </div>

                      <div className={`card-container relative transition-all duration-300 ${
                        canFlip ? 'opacity-100 scale-105' : isFlipped ? 'opacity-100' : 'opacity-40 scale-95'
                      }`}>
                        <FlipCard
                          card={cardData}
                          position={positions[index].label}
                          oracleType={oracleType}
                          isFlipped={isFlipped}
                          onFlip={() => handleCardFlip(index)}
                          hidePosition={true}
                        />

                        {canFlip && !isFlipped && (
                          <>
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
                              <div className="text-[#ff6692] text-2xl drop-shadow-[0_0_10px_rgba(255,102,146,0.8)]">↓</div>
                            </div>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                              <div className="w-3 h-3 bg-[#ff6692] rounded-full animate-pulse-strong shadow-[0_0_15px_rgba(255,102,146,1)]"></div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </div>
              <div className="cross-cell cross-empty"></div>
            </div>

          </div>
        </div>

        {/* Progression et boutons */}
        <div className="text-center space-y-4 pt-2">
          <div className="flex items-center justify-center gap-2.5 mt-2">
            {Array.from({ length: totalCards }).map((_, i) => (
              <div 
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  flippedCards[i]
                    ? 'bg-[#ff6692] shadow-[0_0_10px_rgba(255,102,146,0.7)]' 
                    : i === currentCardIndex
                    ? 'bg-[#c9a87f] shadow-[0_0_8px_rgba(201,168,127,0.6)] animate-pulse'
                    : 'bg-[#152238] border border-[#c9a87f]/20'
                }`}
              />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <MysticalButton 
              variant="secondary" 
              onClick={onBack}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#152238]/70 to-[#1a2d45]/70 border border-[#c9a87f]/30 text-[#e8d4b8]"
            >
              ← {t('cardgame.back')}
            </MysticalButton>
          </div>
        </div>
      </div>

      {/* MODALE */}
      {showModal && currentRevealedCard !== null && (() => {
        const actualCardIndex = randomCards[currentRevealedCard];
        const originalCard = oracle.cards[actualCardIndex];
        const translatedCard = {
          ...originalCard,
          name: getTranslatedCardName(originalCard)
        };

        return (
          <CardRevealModal
            card={translatedCard}
            oracleType={oracleType}
            onClose={handleCloseModal}
            cardNumber={currentRevealedCard + 1}
            totalCards={totalCards}
            originalCardName={originalCard.name}
          />
        );
      })()}

      <style>{`
        /* ✅ PADDING TOP */
        .pt-safe-top {
          padding-top: max(80px, env(safe-area-inset-top, 0px) + 80px);
        }

        .pb-safe-banner {
          padding-bottom: calc(95px + env(safe-area-inset-bottom, 0px));
        }

        @media (min-width: 640px) {
          .pt-safe-top {
            padding-top: max(90px, env(safe-area-inset-top, 0px) + 90px);
          }

          .pb-safe-banner {
            padding-bottom: calc(110px + env(safe-area-inset-bottom, 0px));
          }
        }

        /* 🔧 FIX ANDROID : LAYOUT EN TABLE pour alignement PARFAIT */
        .cross-spread-table {
          display: table;
          border-collapse: separate;
          border-spacing: 0.5rem;
          margin: 0 auto;
        }

        @media (min-width: 375px) {
          .cross-spread-table {
            border-spacing: 0.6rem;
          }
        }

        @media (min-width: 400px) {
          .cross-spread-table {
            border-spacing: 0.75rem;
          }
        }

        @media (min-width: 640px) {
          .cross-spread-table {
            border-spacing: 1rem;
          }
        }

        /* Lignes de la table */
        .cross-row {
          display: table-row;
        }

        /* Cellules de la table - ALIGNEMENT VERTICAL FORCÉ */
        .cross-cell {
          display: table-cell;
          vertical-align: middle; /* ← CRITICAL pour Android */
          text-align: center;
        }

        /* Cellules vides (espaces) */
        .cross-empty {
          width: 70px;
        }

        @media (min-width: 375px) {
          .cross-empty {
            width: 75px;
          }
        }

        @media (min-width: 400px) {
          .cross-empty {
            width: 80px;
          }
        }

        @media (min-width: 640px) {
          .cross-empty {
            width: 100px;
          }
        }

        /* Contenu de la cellule */
        .cross-card-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* ✅ FIX CRITIQUE : Hauteur FIXE pour les labels = alignement garanti */
        .cross-card-content > div:first-child {
          min-height: 28px;
          max-height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 640px) {
          .cross-card-content > div:first-child {
            min-height: 32px;
            max-height: 32px;
          }
        }

        /* Taille des cartes */
        .card-container {
          width: 70px;
          height: 105px;
        }

        @media (min-width: 375px) {
          .card-container {
            width: 75px;
            height: 112px;
          }
        }

        @media (min-width: 400px) {
          .card-container {
            width: 80px;
            height: 120px;
          }
        }

        @media (min-width: 640px) {
          .card-container {
            width: 100px;
            height: 150px;
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
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes pulse-strong {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
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
        .animate-bounce-gentle {
          animation: bounce-gentle 1.5s ease-in-out infinite;
        }
        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }
        .animate-pulse-strong {
          animation: pulse-strong 1s ease-in-out infinite;
        }

        /* GPU acceleration */
        * {
          -webkit-tap-highlight-color: transparent;
        }

        .cross-spread-table,
        .cross-card-content,
        .card-container {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-perspective: 1000;
          perspective: 1000;
          transform: translateZ(0);
        }
      `}</style>
    </div>
  );
}