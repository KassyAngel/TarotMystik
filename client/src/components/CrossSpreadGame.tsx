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

  // Layout en croix : disposition des cartes
  const getCardPosition = (index: number) => {
    const positions = [
      // Carte 1 - Centre (Présent)
      'col-start-2 row-start-2',
      // Carte 2 - Gauche (Obstacle)
      'col-start-1 row-start-2',
      // Carte 3 - Bas (Passé)
      'col-start-2 row-start-3',
      // Carte 4 - Haut (Avenir)
      'col-start-2 row-start-1',
      // Carte 5 - Droite (Synthèse)
      'col-start-3 row-start-2'
    ];
    return positions[index];
  };

  if (randomCards.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a1420] via-[#0d1b2e] to-[#0a1420]">
        <div className="text-[#c9a87f] text-lg">{t('common.loading')}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-between p-4 sm:p-6 pt-20 sm:pt-24 pb-24 sm:pb-28 bg-gradient-to-b from-[#0a1420] via-[#0d1b2e] to-[#0a1420] relative overflow-hidden">

      {/* Effets de fond */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff6692]/8 rounded-full blur-3xl animate-pulse-romantic"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#1a2d45]/25 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c9a87f]/6 rounded-full blur-3xl"></div>
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

      {/* Header */}
      <div className="text-center mb-6 relative z-10">
        <h2 className="text-[#e8d4b8] text-xl sm:text-2xl md:text-3xl font-serif mb-3 drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]">
          {t('crossSpread.title')}
        </h2>
        <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[#c9a87f]/50 to-transparent mb-3"></div>
        <p className="text-[#c9a87f]/85 text-xs sm:text-sm max-w-xl mx-auto">
          {t('crossSpread.description')}
        </p>
      </div>

      {/* Grille en croix */}
      <div className="flex-1 flex items-center justify-center relative z-10 py-4">
        <div className="grid grid-cols-3 grid-rows-3 gap-3 sm:gap-4 max-w-3xl w-full px-2">
          {Array.from({ length: totalCards }).map((_, index) => {
            const actualIndex = randomCards[index];
            const cardData = oracle.cards[actualIndex];
            const isFlipped = flippedCards[index];
            const canFlip = index === currentCardIndex && !isComplete;

            return (
              <div 
                key={index}
                className={`${getCardPosition(index)} flex flex-col items-center gap-2`}
              >
                {/* Label de position au-dessus */}
                <div className="text-center">
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
                <div className={`w-24 sm:w-32 md:w-36 relative transition-all duration-300 ${
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

      {/* Progression et boutons */}
      <div className="text-center space-y-6 relative z-10">
        {/* Indicateur de progression */}
        <div className="flex items-center justify-center gap-2.5">
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
            className="px-6 py-3 bg-gradient-to-r from-[#152238]/70 to-[#1a2d45]/70 border border-[#c9a87f]/30 text-[#e8d4b8]"
          >
            ← {t('cardgame.back')}
          </MysticalButton>

          {/* BOUTON MANUEL (au cas où l'auto ne marche pas) */}
          {isComplete && (
            <MysticalButton 
              variant="primary" 
              onClick={handleRevealInterpretation}
              className="px-8 py-3 bg-gradient-to-r from-[#a8896f] via-[#c9a87f] to-[#a8896f] text-[#0a1420] font-semibold border-2 border-[#c9a87f]/50 shadow-[0_4px_20px_rgba(201,168,127,0.5)] hover:shadow-[0_6px_30px_rgba(201,168,127,0.7)] animate-fade-in"
            >
              ✨ {t('crossSpread.revealInterpretation')}
            </MysticalButton>
          )}
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