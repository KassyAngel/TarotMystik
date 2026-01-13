// client/src/pages/LunarCardGame.tsx
// ✅ VERSION CORRIGÉE - La pub doit être appelée AVANT d'arriver ici

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
  onReadingComplete?: (oracleType: string) => void;
  shouldShowAdBeforeReading?: (oracleType: string) => Promise<boolean>;
}

export default function LunarCardGame({
  user,
  selectedPhase,
  onCardSelected,
  onBack,
  onSaveReading,
  onReadingComplete,
  shouldShowAdBeforeReading
}: LunarCardGameProps) {
  const { t } = useLanguage();
  const [phaseCards, setPhaseCards] = useState<number[]>([]);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [revealedCard, setRevealedCard] = useState<{ 
    card: OracleCard; 
    index: number; 
    originalName: string 
  } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const playFlip = useSound('Flip-card.wav');
  const playReveal = useSound('Bouton-reveal.wav');

  const lunarOracle = oracleData.lunar;

  const getPhaseInfo = (phase: string) => {
    const phaseMap: Record<string, { emoji: string; color: string; name: string; lightColor: string }> = {
      newMoon: { 
        emoji: '🌑', 
        color: 'from-slate-700 via-slate-600 to-slate-700',
        lightColor: 'from-slate-500/20 via-slate-400/10 to-transparent',
        name: t('lunar.phases.newMoon.name') || 'Nouvelle Lune'
      },
      firstQuarter: { 
        emoji: '🌓', 
        color: 'from-indigo-700 via-indigo-600 to-indigo-700',
        lightColor: 'from-indigo-500/20 via-indigo-400/10 to-transparent',
        name: t('lunar.phases.firstQuarter.name') || 'Premier Quartier'
      },
      fullMoon: { 
        emoji: '🌕', 
        color: 'from-amber-600 via-yellow-500 to-amber-600',
        lightColor: 'from-amber-400/20 via-yellow-300/10 to-transparent',
        name: t('lunar.phases.fullMoon.name') || 'Pleine Lune'
      },
      lastQuarter: { 
        emoji: '🌗', 
        color: 'from-purple-700 via-violet-600 to-purple-700',
        lightColor: 'from-purple-500/20 via-violet-400/10 to-transparent',
        name: t('lunar.phases.lastQuarter.name') || 'Dernier Quartier'
      }
    };
    return phaseMap[phase] || phaseMap.newMoon;
  };

  const phaseInfo = getPhaseInfo(selectedPhase);

  // ✅ Initialisation : Générer les cartes SEULEMENT (pas de pub ici)
  useEffect(() => {
    const initGame = async () => {
      console.log('🎯 [LUNAR GAME] Initialisation des cartes');

      // Générer les cartes
      const cardsForPhase = lunarOracle.cards
        .map((card, index) => ({ card, index }))
        .filter(({ card }) => card.phase === selectedPhase);

      const numCards = Math.min(3, cardsForPhase.length);
      const selectedIndices = cardsForPhase
        .sort(() => Math.random() - 0.5)
        .slice(0, numCards)
        .map(({ index }) => index);

      setPhaseCards(selectedIndices);
      setIsInitialized(true);
      setTimeout(() => setIsVisible(true), 100);

      console.log('✅ [LUNAR GAME] Cartes générées');
    };

    initGame();
  }, [selectedPhase]);

  const handleCardClick = (localIndex: number) => {
    if (flippedCard !== null) return;

    playFlip();
    setFlippedCard(localIndex);

    const actualIndex = phaseCards[localIndex];
    const cardData = lunarOracle.cards[actualIndex];
    const originalName = cardData.name;

    setRevealedCard({
      card: cardData,
      index: localIndex,
      originalName: originalName
    });
  };

  const handleShowInterpretation = async () => {
    if (!revealedCard) return;

    playReveal();

    const actualIndex = phaseCards[revealedCard.index];
    const selectedCard = lunarOracle.cards[actualIndex];

    // 1️⃣ Sauvegarder le tirage
    if (onSaveReading) {
      try {
        await onSaveReading({
          type: 'lunar',
          cards: [selectedCard.name],
          date: new Date(),
          lunarPhase: selectedPhase,
          answer: `Phase: ${phaseInfo.name} - ${selectedCard.meaning}`
        });
        console.log('✅ [LUNAR] Tirage sauvegardé');
      } catch (error) {
        console.error('❌ Erreur sauvegarde:', error);
      }
    }

    // 2️⃣ ✅ Incrémenter le compteur IMMÉDIATEMENT
    if (onReadingComplete) {
      console.log('📈 [LUNAR] Incrémentation compteur');
      onReadingComplete('lunar');
    }

    // 3️⃣ Attendre un peu pour que le compteur soit mis à jour, puis naviguer
    setTimeout(() => {
      console.log('🚀 [LUNAR] Navigation vers interprétation');
      onCardSelected({ card: selectedCard, phase: selectedPhase });
    }, 100);
  };

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0e1a] via-[#0f1420] to-[#0a0e1a]">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-pulse">🌙</div>
          <p className="text-slate-300 text-lg">Préparation du tirage...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`min-h-screen flex flex-col p-4 pt-12 pb-20 bg-gradient-to-b from-[#0a0e1a] via-[#0f1420] to-[#0a0e1a] relative overflow-hidden transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>

        {/* Étoiles améliorées */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: '1px',
                  height: '1px',
                  opacity: 0.5,
              }}
            />
          ))}
        </div>

        {/* Effet de lumière de phase lunaire */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-radial ${phaseInfo.lightColor} blur-3xl pointer-events-none animate-pulse-slow`}></div>

        {/* Header avec phase lunaire */}
        <div className="text-center mb-6 relative z-10">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${phaseInfo.color} opacity-30 rounded-full blur-3xl animate-pulse-slow scale-150`}></div>
              <span className="relative text-7xl sm:text-8xl animate-float drop-shadow-[0_0_30px_rgba(148,163,184,0.6)]">
                {phaseInfo.emoji}
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif text-slate-100 mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            {phaseInfo.name}
          </h2>

          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-slate-400/50 to-transparent mb-4"></div>
        </div>

        {/* Instructions proéminentes */}
        <div className="relative z-10 mb-8 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="relative bg-slate-800/40 backdrop-blur-sm border-2 border-slate-500/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-slate-400/40 rounded-tl-2xl"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-slate-400/40 rounded-tr-2xl"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-slate-400/40 rounded-bl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-slate-400/40 rounded-br-2xl"></div>

              <div className="flex justify-center mb-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-slate-400/20 rounded-full blur-xl"></div>
                  <span className="relative text-3xl">✨</span>
                </div>
              </div>

              <p className="text-slate-100 text-xl sm:text-2xl font-medium mb-2 leading-relaxed">
                {t('lunar.cardGame.instruction') || 'Choisissez la carte qui vous attire'}
              </p>

              <p className="text-slate-300/70 text-sm sm:text-base font-light italic">
                {t('lunar.cardGame.singleCard') || 'Une seule carte révélera le message de la lune'}
              </p>

              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="w-2 h-2 bg-slate-400/60 rounded-full animate-pulse"></div>
                <span className="text-slate-400/80 text-xs uppercase tracking-wider font-light">
                  {t('lunar.cardGame.oneChoice') || '1 carte à choisir'}
                </span>
                <div className="w-2 h-2 bg-slate-400/60 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <div className="flex flex-col items-center gap-2 animate-bounce-slow">
                <div className="w-px h-8 bg-gradient-to-b from-slate-400/60 to-transparent"></div>
                <span className="text-slate-400/60 text-2xl">↓</span>
              </div>
            </div>
          </div>
        </div>

        {/* Zone des cartes */}
        <div className="flex-1 flex items-start justify-center relative z-10 px-4">
          <div className="relative w-full max-w-4xl">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full border border-slate-600/15 opacity-40"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full border border-slate-500/10 opacity-30"></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-0.5 h-[200px] bg-gradient-to-t from-transparent via-slate-400/30 to-transparent origin-bottom"
                  style={{
                    transform: `translateX(-50%) rotate(${i * 45}deg)`,
                  }}
                />
              ))}
            </div>

            {/* Cartes disposées en arc */}
            <div className="relative flex justify-center items-center gap-4 sm:gap-8 perspective-1000 py-8">
              {phaseCards.map((actualIndex, localIndex) => {
                const cardData = lunarOracle.cards[actualIndex];
                const isFlipped = flippedCard === localIndex;
                const canClick = flippedCard === null;

                const rotationAngle = (localIndex - 1) * 12;
                const translateY = Math.abs(localIndex - 1) * -15;

                return (
                  <div 
                    key={`lunar-${localIndex}-${actualIndex}`} 
                    className="relative transition-all duration-500"
                    style={{
                      transform: `rotateZ(${rotationAngle}deg) translateY(${translateY}px) ${isFlipped ? 'scale(1.1)' : 'scale(1)'}`,
                      zIndex: isFlipped ? 20 : 10 - Math.abs(localIndex - 1)
                    }}
                  >
                    {canClick && (
                      <div className={`absolute inset-0 bg-gradient-to-br ${phaseInfo.color} opacity-20 blur-2xl rounded-2xl scale-110 animate-pulse-slow`}></div>
                    )}

                    <TarotCard
                      number={isFlipped ? actualIndex + 1 : 0}
                      isSelected={isFlipped}
                      isSelectable={canClick}
                      onClick={() => handleCardClick(localIndex)}
                      cardName={isFlipped ? cardData.name : undefined}
                      oracleType="lunar"
                    />

                    {canClick && (
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                        <div className="w-3 h-3 bg-slate-400/50 rounded-full animate-pulse border border-slate-300/30"></div>
                        <span className="text-slate-400/50 text-xs font-light">{localIndex + 1}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {flippedCard === null && (
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center w-full">
                <p className="text-slate-300/60 text-sm font-light italic animate-fade-in-out">
                  {t('lunar.cardGame.hint') || 'Écoutez votre intuition...'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bouton retour */}
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
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
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
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
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