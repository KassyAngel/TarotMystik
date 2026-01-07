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

  // Pour les TRADUCTIONS : minuscules
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

  // Fonction pour obtenir le label d'énergie selon la position
  const getEnergyLabel = (cardIndex: number): string => {
    const energyNumber = cardIndex + 1;
    return t(`interpretation.${oracleType}.energy${energyNumber}.label`);
  };

  useEffect(() => {
    const generateCards = async () => {
      setIsLoading(true);

      // 📊 Vérifier et afficher la pub AVANT le tirage (seulement une fois par session)
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

    // ✅ IMPORTANT : Garder le nom original français
    const originalName = cardData.name;

    // Traduire pour l'affichage
    const displayName = translateCardName(cardData.name) || cardData.name;

    const translatedCardData = {
      ...cardData,
      name: displayName // Nom traduit pour l'affichage
    };

    // ✅ Passer AUSSI le nom original pour l'image
    setRevealedCard({ 
      card: translatedCardData, 
      index: cardIndex,
      originalName: originalName // ← CRITIQUE pour l'image
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

      // 📊 Notifier le parent qu'un tirage est terminé
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
              className="absolute w-0.5 h-0.5 bg-[#c9a87f] rounded-full animate-twinkle-soft"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
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

          <div className="cards-container flex flex-col items-center gap-6 max-w-5xl mx-auto">
            <div className="cards-grid flex justify-center gap-6 sm:gap-8 md:gap-10">
              {Array.from({length: displayCards}, (_, cardIndex) => {
                const actualIndex = randomCards[cardIndex];
                const isCardFlipped = flippedCards[cardIndex];
                const isSelected = selectedCardsIndices.includes(cardIndex);
                const canClick = !isCardFlipped && selectedCardsIndices.length < maxSelection;
                const cardData = oracle.cards[actualIndex];
                const energyLabel = getEnergyLabel(cardIndex);

                return (
                  <div key={`${oracleType}-${cardIndex}-${actualIndex}`} className="flex flex-col items-center gap-4">
                    <div className="text-center">
                      <p className="text-[#c9a87f] text-xs sm:text-sm font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {energyLabel}
                      </p>
                    </div>

                    <TarotCard
                      number={isCardFlipped ? actualIndex + 1 : 0}
                      isSelected={isSelected}
                      isSelectable={canClick}
                      onClick={() => handleCardClick(cardIndex)}
                      cardName={isCardFlipped ? cardData?.name : undefined}
                      oracleType={oracleType}
                    />
                  </div>
                );
              })}
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
      `}</style>
    </>
  );
}