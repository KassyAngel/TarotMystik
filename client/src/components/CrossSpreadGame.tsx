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

  // Positions du tirage en croix
  const positions = [
    { key: 'present', label: t('crossSpread.positions.present') },
    { key: 'obstacle', label: t('crossSpread.positions.obstacle') },
    { key: 'past', label: t('crossSpread.positions.past') },
    { key: 'future', label: t('crossSpread.positions.future') },
    { key: 'synthesis', label: t('crossSpread.positions.synthesis') }
  ];

  // Fonction pour normaliser le nom d'une carte
  const normalizeCardName = (name: string): string => {
    return name
      .trim()
      .toLowerCase()
      .replace(/[''\s-]/g, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  // Fonction pour obtenir le nom traduit d'une carte
  const getTranslatedCardName = (card: OracleCard): string => {
    if (!card?.name) return '';
    const normalizedName = normalizeCardName(card.name);
    const translatedName = t(`cards.${oracleType}.${normalizedName}.name`);

    // Si la traduction existe (différente de la clé), la retourner
    if (translatedName !== `cards.${oracleType}.${normalizedName}.name`) {
      return translatedName;
    }

    // Sinon, retourner le nom original
    return card.name;
  };

  useEffect(() => {
    const initGame = async () => {
      // 📊 Vérifier et afficher la pub AVANT le tirage (seulement une fois par session)
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

    // Afficher la modale avec la carte révélée
    setTimeout(() => {
      setCurrentRevealedCard(index);
      setShowModal(true);
    }, 600);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentRevealedCard(null);

    // Si c'est la dernière carte
    if (currentCardIndex === totalCards - 1) {
      setTimeout(() => {
        setIsComplete(true);
        // Lancer automatiquement l'interprétation après 1.5s
        setTimeout(() => {
          playReveal();
          saveTirageToHistory(oracleType, randomCards);

          // 📊 Sauvegarder le tirage
          if (onSaveReading) {
            onSaveReading({
              type: 'crossSpread',
              cards: randomCards.map(idx => oracle.cards[idx].name),
              date: new Date(),
              answer: 'Tirage en croix'
            }).catch(error => console.error('❌ Erreur sauvegarde:', error));
          }

          // 📊 Notifier le parent qu'un tirage est terminé
          if (onReadingComplete) {
            console.log(`✅ [CROSS_SPREAD] Tirage ${oracleType} terminé, incrémentation compteur`);
            onReadingComplete(oracleType);
          }

          onCardsSelected(randomCards);
        }, 1500);
      }, 300);
    } else {
      // Passer à la carte suivante
      setTimeout(() => {
        setCurrentCardIndex(currentCardIndex + 1);
      }, 300);
    }
  };

  const handleRevealInterpretation = async () => {
    playReveal();
    saveTirageToHistory(oracleType, randomCards);

    // 📊 Sauvegarder le tirage
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

    // 📊 Notifier le parent qu'un tirage est terminé
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

      {/* Container principal avec padding safe */}
      <div className="w-full pt-safe-top pb-safe-banner px-4 relative z-10">

        {/* Header - TOUJOURS VISIBLE */}
        <div className="text-center pb-3">
          <h2 className="text-[#e8d4b8] text-xl sm:text-2xl md:text-3xl font-serif mb-2 drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]">
            {t('crossSpread.title')}
          </h2>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[#c9a87f]/50 to-transparent mb-2"></div>
          <p className="text-[#c9a87f]/85 text-xs sm:text-sm max-w-xl mx-auto">
            {t('crossSpread.description')}
          </p>
        </div>

        {/* Grille en croix */}
        <div className="flex items-center justify-center py-4">
          <div className="cross-spread-wrapper w-full flex items-center justify-center">
            <div className="cross-spread-container">
              {Array.from({ length: totalCards }).map((_, index) => {
                const actualIndex = randomCards[index];
                const cardData = oracle.cards[actualIndex];
                const isFlipped = flippedCards[index];
                const canFlip = index === currentCardIndex && !isComplete;

                return (
                  <div 
                    key={index}
                    className={`cross-card-wrapper cross-card-${index}`}
                  >
                    {/* Label de position au-dessus */}
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

                    {/* Carte */}
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

                      {/* INDICATEUR VISUEL - Flèche clignotante */}
                      {canFlip && !isFlipped && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
                          <div className="text-[#ff6692] text-2xl drop-shadow-[0_0_10px_rgba(255,102,146,0.8)]">
                            ↓
                          </div>
                        </div>
                      )}

                      {/* Point lumineux */}
                      {canFlip && !isFlipped && (
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                          <div className="w-3 h-3 bg-[#ff6692] rounded-full animate-pulse-strong shadow-[0_0_15px_rgba(255,102,146,1)]"></div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Progression et boutons */}
        <div className="text-center space-y-4 pt-2">
          {/* Indicateur de progression */}
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

          {/* Boutons */}
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

      {/* MODALE DE RÉVÉLATION */}
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
        /* Safe padding pour navbar + bannière */
        .pt-safe-top {
          padding-top: max(90px, env(safe-area-inset-top, 0px) + 90px);
        }

        .pb-safe-banner {
          padding-bottom: calc(95px + env(safe-area-inset-bottom, 0px));
        }

        @media (min-width: 640px) {
          .pt-safe-top {
            padding-top: max(105px, env(safe-area-inset-top, 0px) + 105px);
          }

          .pb-safe-banner {
            padding-bottom: calc(110px + env(safe-area-inset-bottom, 0px));
          }
        }

        /* Container wrapper - empêche tout débordement */
        .cross-spread-wrapper {
          max-width: 100%;
          overflow: hidden;
        }

        /* Container de la croix - ALIGNEMENT START POUR CARTES */
        .cross-spread-container {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 70px));
          grid-template-rows: repeat(3, auto);
          gap: 0.5rem;
          justify-content: center;
          align-items: start;
          width: fit-content;
          margin: 0 auto;
        }

        @media (min-width: 375px) {
          .cross-spread-container {
            grid-template-columns: repeat(3, minmax(0, 75px));
            gap: 0.6rem;
          }
        }

        @media (min-width: 400px) {
          .cross-spread-container {
            grid-template-columns: repeat(3, minmax(0, 80px));
            gap: 0.75rem;
          }
        }

        @media (min-width: 640px) {
          .cross-spread-container {
            grid-template-columns: repeat(3, minmax(0, 100px));
            gap: 1rem;
          }
        }

        @media (min-height: 800px) {
          .cross-spread-container {
            grid-template-columns: repeat(3, minmax(0, 85px));
            gap: 0.75rem;
          }
        }

        @media (min-height: 800px) and (min-width: 400px) {
          .cross-spread-container {
            grid-template-columns: repeat(3, minmax(0, 95px));
            gap: 1rem;
          }
        }

        /* Positionnement des cartes */
        .cross-card-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
        }

        .cross-card-0 { grid-column: 2; grid-row: 2; } /* Centre - Présent */
        .cross-card-1 { grid-column: 1; grid-row: 2; } /* Gauche - Obstacle */
        .cross-card-2 { grid-column: 2; grid-row: 3; } /* Bas - Passé */
        .cross-card-3 { grid-column: 2; grid-row: 1; } /* Haut - Avenir */
        .cross-card-4 { grid-column: 3; grid-row: 2; } /* Droite - Synthèse */

        /* Taille des cartes - RESPONSIVE */
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

        @media (min-height: 800px) {
          .card-container {
            width: 85px;
            height: 127px;
          }
        }

        @media (min-height: 800px) and (min-width: 400px) {
          .card-container {
            width: 95px;
            height: 142px;
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
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
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
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
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
      `}</style>
    </div>
  );
}