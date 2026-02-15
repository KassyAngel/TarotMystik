// src/pages/CardGame.tsx
// ✅ FIX ANDROID : Alignement PARFAIT des cartes quelle que soit la langue

import { useState, useEffect } from 'react';
import TarotCard from '@/components/TarotCard';
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

interface CardGameProps {
  user: UserSession;
  oracle: OracleData;
  oracleType: CardBasedOracleType;
  onCardsSelected: (selectedCardIndices: number[]) => void;
  onSaveReading?: (reading: any) => Promise<void>;
  onBack: () => void;
  shouldShowAdBeforeReading?: (oracleType: string) => Promise<boolean>;
  onReadingComplete?: (oracleType: string) => void;
}

export default function CardGame({ 
  user,
  oracle, 
  oracleType, 
  onCardsSelected, 
  onSaveReading,
  onBack,
  shouldShowAdBeforeReading,
  onReadingComplete
}: CardGameProps) {
  const [randomCards, setRandomCards] = useState<number[]>([]);
  const [flippedCards, setFlippedCards] = useState<boolean[]>([]);
  const [selectedCardsIndices, setSelectedCardsIndices] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [revealedCard, setRevealedCard] = useState<{ card: any; index: number; originalName: string } | null>(null);
  const [adShownForSession, setAdShownForSession] = useState(false);
  const { t, language } = useLanguage();

  const playFlip = useSound('Flip-card.wav');
  const playReveal = useSound('Bouton-reveal.wav');

  const displayCards = 3;
  const maxSelection = 3;

  const normalizeForTranslation = (name: string): string => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[''\s-]/g, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  const translateCardName = (cardName: string | undefined): string | undefined => {
    if (!cardName) return undefined;
    const normalizedName = normalizeForTranslation(cardName);
    const translationKey = `cards.${oracleType}.${normalizedName}.name`;
    const translated = t(translationKey);

    if (translated !== translationKey) {
      return translated;
    }
    return cardName;
  };

  const getEnergyLabel = (cardIndex: number): string => {
    const energyNumber = cardIndex + 1;
    return t(`interpretation.${oracleType}.energy${energyNumber}.label`);
  };

  useEffect(() => {
    const generateCards = async () => {
      setIsLoading(true);

      if (!adShownForSession && shouldShowAdBeforeReading) {
        console.log('🎯 [CARD_GAME] Vérification pub avant génération des cartes...');
        await shouldShowAdBeforeReading(oracleType);
        setAdShownForSession(true);
      }

      try {
        const selectedCards = selectRandomCardsWithoutRepeat(
          oracle.cards.length,
          displayCards,
          oracleType
        );
        setRandomCards(selectedCards);
        setFlippedCards(new Array(displayCards).fill(false));
      } catch (error) {
        console.error('Erreur génération cartes:', error);
        const fallbackCards = Array.from({length: oracle.cards.length}, (_, i) => i)
          .sort(() => Math.random() - 0.5)
          .slice(0, displayCards);
        setRandomCards(fallbackCards);
        setFlippedCards(new Array(displayCards).fill(false));
      } finally {
        setIsLoading(false);
      }
    };
    generateCards();
  }, [oracle.cards.length, displayCards, oracleType, shouldShowAdBeforeReading, adShownForSession]);

  const handleCardClick = (cardIndex: number) => {
    if (flippedCards[cardIndex]) return;
    if (selectedCardsIndices.length >= maxSelection) return;

    playFlip();

    const newFlippedCards = [...flippedCards];
    newFlippedCards[cardIndex] = true;
    setFlippedCards(newFlippedCards);

    const actualIndex = randomCards[cardIndex];
    const cardData = oracle.cards[actualIndex];
    const originalName = cardData.name;
    const displayName = translateCardName(cardData.name) || cardData.name;

    const translatedCardData = {
      ...cardData,
      name: displayName
    };

    setRevealedCard({ 
      card: translatedCardData, 
      index: cardIndex,
      originalName: originalName
    });

    const newSelected = [...selectedCardsIndices, cardIndex];
    setSelectedCardsIndices(newSelected);
  };

  const generateFullInterpretation = (selectedCards: OracleCard[]): string => {
    return "Interprétation...";
  };

  const handleCloseModal = async () => {
    setRevealedCard(null);

    if (selectedCardsIndices.length === maxSelection) {
      playReveal();
      const selectedCards = selectedCardsIndices.map(idx => randomCards[idx]);
      const selectedCardsData = selectedCards.map(idx => oracle.cards[idx]);
      const fullInterpretation = generateFullInterpretation(selectedCardsData);

      if (onSaveReading) {
        try {
          await onSaveReading({
            type: oracleType,
            cards: selectedCardsData.map(card => card.name),
            date: new Date(),
            answer: fullInterpretation
          });
        } catch (error) {
          console.error('❌ Erreur sauvegarde:', error);
        }
      }

      if (onReadingComplete) {
        console.log(`✅ [CARD_GAME] Tirage ${oracleType} terminé, incrémentation compteur`);
        onReadingComplete(oracleType);
      }

      saveTirageToHistory(oracleType, selectedCards);
      setTimeout(() => {
        onCardsSelected(selectedCards);
      }, 300);
    }
  };

  if (isLoading) {
    return (
      <div className="game-area w-full text-center min-h-screen flex flex-col justify-center p-4 bg-gradient-to-b from-[#0a1420] via-[#0d1b2e] to-[#0a1420]">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 border-2 border-[#c9a87f]/20 rounded-full animate-spin-elegant">
              <div className="absolute inset-0 border-t-2 border-[#c9a87f] rounded-full"></div>
            </div>
            <div className="absolute inset-2 border-2 border-[#a8896f]/15 rounded-full animate-spin-reverse-elegant">
              <div className="absolute inset-0 border-b-2 border-[#a8896f] rounded-full"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl text-[#c9a87f] animate-pulse-soft">✦</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#152238]/80 to-[#1a2d45]/80 rounded-2xl p-8 border border-[#c9a87f]/20 backdrop-blur-sm">
            <h2 className="text-[#e8d4b8] text-xl font-serif mb-3">
              {t(`oracle.${oracleType}.title`)}
            </h2>
            <p className="text-[#c9a87f]/70 text-sm">
              {t('cardgame.loading')}
            </p>
            <div className="flex justify-center gap-1.5 mt-4">
              <span className="w-1.5 h-1.5 bg-[#c9a87f] rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-[#c9a87f] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
              <span className="w-1.5 h-1.5 bg-[#c9a87f] rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="game-area w-full text-center min-h-screen flex flex-col justify-between p-2 sm:p-4 pt-20 sm:pt-24 bg-gradient-to-b from-[#0a1420] via-[#0d1b2e] to-[#0a1420] relative overflow-hidden">

        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-20 left-10 w-40 h-40 bg-[#2d3e57]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-48 h-48 bg-[#1a2d45]/40 rounded-full blur-3xl"></div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-[#c9a87f] rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                 opacity: 0.5, 
                 }}
            />
          ))}
        </div>

        <div className="flex-1 flex flex-col justify-center space-y-6 sm:space-y-8 relative z-10">
          <div className="reading-type">
            <h2 className="text-[#e8d4b8] text-2xl sm:text-3xl md:text-4xl font-serif mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] leading-tight">
              {t(`oracle.${oracleType}.title`)}
            </h2>

            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[#c9a87f]/40 to-transparent mb-3"></div>

            <p className="text-[#c9a87f]/80 text-base sm:text-lg max-w-2xl mx-auto font-light">
              {t(`oracle.${oracleType}.description`)}
            </p>

            <p className="text-[#e8d4b8]/60 text-sm sm:text-base mt-4">
              {t('cardgame.reading.instruction')}
            </p>
          </div>

          {/* ✅ FIX ANDROID : ALIGNEMENT PARFAIT DES CARTES */}
          <div className="cards-container flex flex-col items-center gap-6 max-w-5xl mx-auto">
            <div className="cards-grid-wrapper">
              <div className="cards-grid">
                {Array.from({length: displayCards}, (_, cardIndex) => {
                  const actualIndex = randomCards[cardIndex];
                  const isCardFlipped = flippedCards[cardIndex];
                  const isSelected = selectedCardsIndices.includes(cardIndex);
                  const canClick = !isCardFlipped && selectedCardsIndices.length < maxSelection;
                  const cardData = oracle.cards[actualIndex];
                  const energyLabel = getEnergyLabel(cardIndex);

                  return (
                    <div key={`${oracleType}-${cardIndex}-${actualIndex}`} className="card-column">
                      {/* ✅ LABEL AVEC HAUTEUR FIXE */}
                      <div className="card-label-container">
                        <p className="card-label">
                          {energyLabel}
                        </p>
                      </div>

                      {/* CARTE */}
                      <div className="card-wrapper">
                        <TarotCard
                          number={isCardFlipped ? actualIndex + 1 : 0}
                          isSelected={isSelected}
                          isSelectable={canClick}
                          onClick={() => handleCardClick(cardIndex)}
                          cardName={isCardFlipped ? cardData?.name : undefined}
                          oracleType={oracleType}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="controls">
            <div className="flex items-center justify-center gap-2 mb-4">
              {Array.from({length: maxSelection}).map((_, i) => (
                <div 
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i < selectedCardsIndices.length 
                      ? 'bg-[#c9a87f] shadow-[0_0_8px_rgba(201,168,127,0.6)]' 
                      : 'bg-[#152238] border border-[#c9a87f]/20'
                  }`}
                />
              ))}
            </div>

            <p className="text-[#c9a87f]/70 text-sm sm:text-base mb-4">
              {t('cardgame.selected')
                .replace('{current}', selectedCardsIndices.length.toString())
                .replace('{max}', maxSelection.toString())}
            </p>

            <MysticalButton 
              variant="secondary" 
              onClick={onBack} 
              className="px-6 py-3 text-sm min-h-[44px] bg-gradient-to-r from-[#152238]/70 to-[#1a2d45]/70 border border-[#c9a87f]/30 text-[#e8d4b8] hover:border-[#c9a87f]/50"
            >
              ← {t('cardgame.back')}
            </MysticalButton>
          </div>
        </div>
      </div>

      {revealedCard && (
        <CardRevealModal
          card={revealedCard.card}
          oracleType={oracleType}
          onClose={handleCloseModal}
          cardNumber={selectedCardsIndices.length}
          totalCards={maxSelection}
          originalCardName={revealedCard.originalName}
        />
      )}

      <style>{`
        @keyframes spin-elegant {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse-elegant {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .animate-spin-elegant {
          animation: spin-elegant 3s linear infinite;
        }
        .animate-spin-reverse-elegant {
          animation: spin-reverse-elegant 4s linear infinite;
        }
        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }

        /* ✅ FIX ANDROID CRITIQUE : ALIGNEMENT PARFAIT */
        .cards-grid-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .cards-grid {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start; /* Alignement en haut */
        }

        @media (min-width: 640px) {
          .cards-grid {
            gap: 2rem;
          }
        }

        @media (min-width: 768px) {
          .cards-grid {
            gap: 2.5rem;
          }
        }

        /* Colonne de carte */
        .card-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        /* ✅ HAUTEUR FIXE POUR LES LABELS = Alignement garanti */
        .card-label-container {
          min-height: 40px;
          max-height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        @media (min-width: 640px) {
          .card-label-container {
            min-height: 44px;
            max-height: 44px;
          }
        }

        /* Label du texte */
        .card-label {
          text-align: center;
          color: rgba(201, 168, 127, 1);
          font-size: 0.75rem;
          font-weight: 300;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8));
          line-height: 1.2;
          padding: 0 0.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          word-break: break-word;
        }

        @media (min-width: 640px) {
          .card-label {
            font-size: 0.875rem;
          }
        }

        /* Wrapper de carte */
        .card-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Accélération GPU */
        .cards-grid,
        .card-column,
        .card-label-container,
        .card-wrapper {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-perspective: 1000;
          perspective: 1000;
          transform: translateZ(0);
        }
      `}</style>
    </>
  );
}