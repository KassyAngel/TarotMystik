// client/src/pages/LunarCardGame.tsx - VERSION CORRIGÉE
import { useState, useEffect } from 'react';
import TarotCard from '@/components/TarotCard';
import CardRevealModal from '@/components/CardRevealModal';
import { UserSession, OracleCard } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSound } from '@/hooks/useSound';
import { oracleData } from '@/data/oracleData';

interface LunarCardGameProps {
  user: UserSession;
  selectedPhase: string;
  onCardSelected: (cardData: { card: OracleCard; phase: string }) => void;
  onBack: () => void;
  onSaveReading?: (reading: any) => Promise<void>;
}

export default function LunarCardGame({
  user,
  selectedPhase,
  onCardSelected,
  onBack,
  onSaveReading
}: LunarCardGameProps) {
  const { t } = useLanguage();
  const [phaseCards, setPhaseCards] = useState<number[]>([]);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [revealedCard, setRevealedCard] = useState<{ 
    card: OracleCard; 
    index: number; 
    originalName: string 
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // ✅ Animation d'entrée

  const playFlip = useSound('Flip-card.wav');
  const playReveal = useSound('Bouton-reveal.wav');

  const lunarOracle = oracleData.lunar;

  const getPhaseInfo = (phase: string) => {
    const phaseMap: Record<string, { emoji: string; color: string; name: string }> = {
      newMoon: { 
        emoji: '🌑', 
        color: 'from-slate-700 via-slate-600 to-slate-700',
        name: t('lunar.phases.newMoon.name') || 'Nouvelle Lune'
      },
      firstQuarter: { 
        emoji: '🌓', 
        color: 'from-indigo-700 via-indigo-600 to-indigo-700',
        name: t('lunar.phases.firstQuarter.name') || 'Premier Quartier'
      },
      fullMoon: { 
        emoji: '🌕', 
        color: 'from-amber-600 via-yellow-500 to-amber-600',
        name: t('lunar.phases.fullMoon.name') || 'Pleine Lune'
      },
      lastQuarter: { 
        emoji: '🌗', 
        color: 'from-purple-700 via-violet-600 to-purple-700',
        name: t('lunar.phases.lastQuarter.name') || 'Dernier Quartier'
      }
    };
    return phaseMap[phase] || phaseMap.newMoon;
  };

  const phaseInfo = getPhaseInfo(selectedPhase);

  // Charger les cartes de la phase
  useEffect(() => {
    const cardsForPhase = lunarOracle.cards
      .map((card, index) => ({ card, index }))
      .filter(({ card }) => card.phase === selectedPhase);

    const numCards = Math.min(3, cardsForPhase.length);
    const selectedIndices = cardsForPhase
      .sort(() => Math.random() - 0.5)
      .slice(0, numCards)
      .map(({ index }) => index);

    setPhaseCards(selectedIndices);

    // ✅ Animation d'entrée immédiate
    setTimeout(() => setIsVisible(true), 100);
  }, [selectedPhase]);

  const handleCardClick = (localIndex: number) => {
    if (flippedCard !== null) return;

    playFlip();
    setFlippedCard(localIndex);

    const actualIndex = phaseCards[localIndex];
    const cardData = lunarOracle.cards[actualIndex];
    const originalName = cardData.name;

    console.log('🎴 Carte sélectionnée:', {
      originalName,
      actualIndex,
      cardData
    });

    setRevealedCard({
      card: cardData,
      index: localIndex,
      originalName: originalName
    });
  };

  // ✅ CORRECTION : Fonction séparée pour aller directement à l'interprétation
  const handleShowInterpretation = async () => {
    if (!revealedCard) return;

    playReveal();

    const actualIndex = phaseCards[revealedCard.index];
    const selectedCard = lunarOracle.cards[actualIndex];

    if (onSaveReading) {
      try {
        await onSaveReading({
          type: 'lunar',
          cards: [selectedCard.name],
          date: new Date(),
          lunarPhase: selectedPhase,
          answer: `Phase: ${phaseInfo.name} - ${selectedCard.meaning}`
        });
      } catch (error) {
        console.error('❌ Erreur sauvegarde:', error);
      }
    }

    // ✅ Naviguer vers l'interprétation - le modal reste affiché en loading
    onCardSelected({ card: selectedCard, phase: selectedPhase });
  };

  // ✅ Plus besoin de l'écran de loading, on passe directement aux cartes
  return (
    <>
      <div className={`min-h-screen flex flex-col p-4 pt-16 sm:pt-20 pb-20 bg-gradient-to-b from-[#0a0e1a] via-[#0f1420] to-[#0a0e1a] relative overflow-hidden transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>

        {/* Étoiles améliorées */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-twinkle"
              style={{
                width: Math.random() > 0.5 ? '2px' : '1px',
                height: Math.random() > 0.5 ? '2px' : '1px',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                opacity: Math.random() * 0.5 + 0.3
              }}
            />
          ))}
        </div>

        {/* Effet de brume lunaire */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-radial from-slate-500/10 via-slate-600/5 to-transparent blur-3xl pointer-events-none"></div>

        {/* Header compact */}
        <div className="text-center mb-8 relative z-10">
          <div className="flex justify-center mb-3">
            <div className="relative">
              {/* Halo de la lune */}
              <div className="absolute inset-0 bg-slate-400/20 rounded-full blur-2xl animate-pulse-slow scale-150"></div>
              <span className="relative text-6xl animate-float drop-shadow-[0_0_20px_rgba(148,163,184,0.5)]">
                {phaseInfo.emoji}
              </span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif text-slate-200 mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {phaseInfo.name}
          </h2>

          <div className="h-px w-20 mx-auto bg-gradient-to-r from-transparent via-slate-400/40 to-transparent mb-3"></div>

          <p className="text-slate-300/80 text-sm max-w-md mx-auto font-light">
            {t('lunar.cardGame.instruction') || 'Choisissez la carte qui vous attire'}
          </p>
        </div>

        {/* Zone des cartes centrée avec fond décoratif */}
        <div className="flex-1 flex items-center justify-center relative z-10 px-4">
          <div className="relative w-full max-w-4xl">

            {/* Cercle décoratif derrière les cartes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] rounded-full border border-slate-600/20 opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full border border-slate-500/15 opacity-40"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full border border-slate-400/10 opacity-30"></div>

            {/* Rayons mystiques */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-0.5 h-[250px] bg-gradient-to-t from-transparent via-slate-400/30 to-transparent origin-bottom"
                  style={{
                    transform: `translateX(-50%) rotate(${i * 45}deg)`,
                  }}
                />
              ))}
            </div>

            {/* Cartes disposées en arc */}
            <div className="relative flex justify-center items-center gap-4 sm:gap-8 perspective-1000">
              {phaseCards.map((actualIndex, localIndex) => {
                const cardData = lunarOracle.cards[actualIndex];
                const isFlipped = flippedCard === localIndex;
                const canClick = flippedCard === null;

                // Position en arc avec effet 3D
                const rotationAngle = (localIndex - 1) * 12;
                const translateY = Math.abs(localIndex - 1) * -15;

                return (
                  <div 
                    key={`lunar-${localIndex}-${actualIndex}`} 
                    className="relative transition-transform duration-500"
                    style={{
                      transform: `rotateZ(${rotationAngle}deg) translateY(${translateY}px) ${isFlipped ? 'scale(1.1)' : 'scale(1)'}`,
                      zIndex: isFlipped ? 20 : 10 - Math.abs(localIndex - 1)
                    }}
                  >
                    {/* Effet de lumière sous la carte */}
                    {canClick && (
                      <div className="absolute inset-0 bg-slate-400/10 blur-xl rounded-2xl scale-110 animate-pulse-slow"></div>
                    )}

                    <TarotCard
                      number={isFlipped ? actualIndex + 1 : 0}
                      isSelected={isFlipped}
                      isSelectable={canClick}
                      onClick={() => handleCardClick(localIndex)}
                      cardName={isFlipped ? cardData.name : undefined}
                      oracleType="lunar"
                    />

                    {/* Indicateur de position */}
                    {canClick && (
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                        <div className="w-2 h-2 bg-slate-400/40 rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Texte d'aide subtil */}
            {flippedCard === null && (
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center">
                <p className="text-slate-400/60 text-xs font-light italic animate-fade-in-out">
                  {t('lunar.cardGame.hint') || 'Écoutez votre intuition...'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bouton retour stylisé */}
        <div className="text-center relative z-10 mt-8">
          <button
            onClick={onBack}
            className="group px-8 py-3 bg-slate-800/40 border border-slate-600/30 text-slate-300 rounded-xl hover:bg-slate-700/50 hover:border-slate-500/50 transition-all duration-300 backdrop-blur-sm hover:scale-105"
          >
            <span className="flex items-center gap-2">
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              {t('cardgame.back') || 'Retour'}
            </span>
          </button>
        </div>
      </div>

      {revealedCard && (
        <CardRevealModal
          card={revealedCard.card}
          oracleType="lunar"
          onClose={() => setRevealedCard(null)}
          onShowInterpretation={handleShowInterpretation}
          cardNumber={1}
          totalCards={1}
          originalCardName={revealedCard.originalName}
        />
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes fade-in-out {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-fade-in-out {
          animation: fade-in-out 2.5s ease-in-out infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </>
  );
}