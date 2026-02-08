// client/src/pages/LunarCardGame.tsx
// ✅ VERSION PROFESSIONNELLE - Traductions + Largeur contrôlée

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
    const phaseMap: Record<string, { emoji: string; color: string; name: string; lightColor: string; accentColor: string }> = {
      newMoon: { 
        emoji: '🌑', 
        color: 'from-slate-700 via-slate-600 to-slate-700',
        lightColor: 'from-slate-500/15 via-slate-400/8 to-transparent',
        accentColor: '#64748b',
        name: t('lunar.phases.newMoon.name') || 'Nouvelle Lune'
      },
      firstQuarter: { 
        emoji: '🌓', 
        color: 'from-indigo-700 via-indigo-600 to-indigo-700',
        lightColor: 'from-indigo-500/15 via-indigo-400/8 to-transparent',
        accentColor: '#6366f1',
        name: t('lunar.phases.firstQuarter.name') || 'Premier Quartier'
      },
      fullMoon: { 
        emoji: '🌕', 
        color: 'from-amber-600 via-yellow-500 to-amber-600',
        lightColor: 'from-amber-400/15 via-yellow-300/8 to-transparent',
        accentColor: '#f59e0b',
        name: t('lunar.phases.fullMoon.name') || 'Pleine Lune'
      },
      lastQuarter: { 
        emoji: '🌗', 
        color: 'from-purple-700 via-violet-600 to-purple-700',
        lightColor: 'from-purple-500/15 via-violet-400/8 to-transparent',
        accentColor: '#8b5cf6',
        name: t('lunar.phases.lastQuarter.name') || 'Dernier Quartier'
      }
    };
    return phaseMap[phase] || phaseMap.newMoon;
  };

  const phaseInfo = getPhaseInfo(selectedPhase);

  useEffect(() => {
    const initGame = async () => {
      console.log('🎯 [LUNAR GAME] Initialisation des cartes');

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

    if (onReadingComplete) {
      console.log('📈 [LUNAR] Incrémentation compteur');
      onReadingComplete('lunar');
    }

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
          <p className="text-slate-300 text-lg">{t('common.loading') || 'Préparation du tirage...'}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-gradient-to-b from-[#0a0e1a] via-[#0f1420] to-[#0a0e1a] relative transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>

        {/* Étoiles d'ambiance */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() > 0.8 ? '2px' : '1px',
                height: Math.random() > 0.8 ? '2px' : '1px',
                opacity: 0.4 + Math.random() * 0.3,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Effet de lumière douce */}
        <div 
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-radial ${phaseInfo.lightColor} blur-3xl pointer-events-none opacity-60`}
          style={{ animation: 'pulse-gentle 4s ease-in-out infinite' }}
        ></div>

        {/* Container principal avec padding safe et largeur contrôlée */}
        <div className="flex-1 flex flex-col w-full max-w-full px-4 pt-16 pb-24 relative z-10">

          {/* HEADER ÉLÉGANT */}
          <div className="text-center mb-6">
            {/* Icône de phase avec effet halo */}
            <div className="flex justify-center mb-3">
              <div className="relative inline-block">
                <div 
                  className="absolute inset-0 rounded-full blur-2xl opacity-40"
                  style={{ 
                    background: `radial-gradient(circle, ${phaseInfo.accentColor}40 0%, transparent 70%)`,
                    animation: 'pulse-glow 3s ease-in-out infinite'
                  }}
                ></div>
                <span className="relative text-6xl block animate-float-gentle" style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))' }}>
                  {phaseInfo.emoji}
                </span>
              </div>
            </div>

            {/* Titre de la phase */}
            <h2 className="text-2xl font-serif text-slate-100 mb-3 tracking-wide px-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
              {phaseInfo.name}
            </h2>

            {/* Séparateur décoratif */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-500/40"></div>
              <div className="w-1 h-1 rounded-full bg-slate-400/60"></div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-500/40"></div>
            </div>
          </div>

          {/* INSTRUCTIONS MODERNES */}
          <div className="mb-6 w-full">
            <div className="max-w-md mx-auto w-full">
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md rounded-2xl p-5 border border-slate-600/20 shadow-xl">

                {/* Coins décoratifs minimaux */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-slate-500/30 rounded-tl-2xl"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-slate-500/30 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-slate-500/30 rounded-bl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-slate-500/30 rounded-br-2xl"></div>

                {/* Icône centrale */}
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border border-slate-600/40 shadow-lg">
                    <span className="text-xl">✨</span>
                  </div>
                </div>

                {/* Texte principal */}
                <p className="text-slate-100 text-center text-lg font-medium mb-2 leading-relaxed">
                  {t('lunar.cardGame.instruction') || 'Choisissez la carte qui vous attire'}
                </p>

                {/* Sous-texte */}
                <p className="text-slate-400 text-center text-sm font-light italic">
                  {t('lunar.cardGame.singleCard') || 'Une seule carte révélera le message de la lune'}
                </p>

                {/* Badge indicateur - AVEC CLÉ DE TRADUCTION */}
                <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-slate-600/20">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-700/40 rounded-full border border-slate-600/30">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse"></div>
                    <span className="text-slate-300 text-xs font-medium uppercase tracking-wider">
                      {t('lunar.cardGame.oneCard') || '1 carte'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ZONE DES CARTES - DESIGN PROFESSIONNEL */}
          <div className="flex-1 flex items-center justify-center w-full px-4 py-8">
            <div className="relative w-full max-w-lg">

              {/* Cercle de fond élégant - DIMENSIONS CONTRÔLÉES */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-80 sm:h-80">
                <div 
                  className="absolute inset-0 rounded-full border border-slate-600/10"
                  style={{ animation: 'rotate-slow 30s linear infinite' }}
                ></div>
                <div 
                  className="absolute inset-4 rounded-full border border-slate-500/8"
                  style={{ animation: 'rotate-slow-reverse 25s linear infinite' }}
                ></div>
                <div 
                  className="absolute inset-8 rounded-full border border-slate-400/6"
                  style={{ animation: 'rotate-slow 20s linear infinite' }}
                ></div>
              </div>

              {/* Pattern de rayons subtils - HAUTEUR CONTRÔLÉE */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-px h-24 sm:h-32 bg-gradient-to-t from-transparent via-slate-400 to-transparent origin-bottom"
                    style={{ transform: `translateX(-50%) rotate(${i * 30}deg)` }}
                  />
                ))}
              </div>

              {/* CARTES EN ARC ÉLÉGANT - LARGEUR CONTRÔLÉE */}
              <div className="relative flex justify-center items-center gap-2 sm:gap-4 perspective-1000 w-full">
                {phaseCards.map((actualIndex, localIndex) => {
                  const cardData = lunarOracle.cards[actualIndex];
                  const isFlipped = flippedCard === localIndex;
                  const canClick = flippedCard === null;

                  // Calcul de position en arc plus doux
                  const totalCards = phaseCards.length;
                  const centerIndex = (totalCards - 1) / 2;
                  const offsetFromCenter = localIndex - centerIndex;
                  const rotationAngle = offsetFromCenter * 8; // Rotation douce
                  const translateY = Math.abs(offsetFromCenter) * -10; // Légère élévation

                  return (
                    <div 
                      key={`lunar-${localIndex}-${actualIndex}`} 
                      className="relative transition-all duration-500 ease-out"
                      style={{
                        transform: `rotateZ(${rotationAngle}deg) translateY(${translateY}px) ${isFlipped ? 'scale(1.05)' : 'scale(1)'}`,
                        zIndex: isFlipped ? 30 : 20 - Math.abs(offsetFromCenter)
                      }}
                    >
                      {/* Halo de sélection */}
                      {canClick && (
                        <div 
                          className="absolute -inset-2 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ 
                            background: `radial-gradient(circle, ${phaseInfo.accentColor}30 0%, transparent 70%)`,
                            animation: 'pulse-card 2s ease-in-out infinite'
                          }}
                        ></div>
                      )}

                      {/* Carte - TAILLE CONTRÔLÉE */}
                      <div className={`group relative ${canClick ? 'cursor-pointer' : ''}`}>
                        <div className="w-20 sm:w-24 transition-transform duration-300 hover:scale-105">
                          <TarotCard
                            number={isFlipped ? actualIndex + 1 : 0}
                            isSelected={isFlipped}
                            isSelectable={canClick}
                            onClick={() => handleCardClick(localIndex)}
                            cardName={isFlipped ? cardData.name : undefined}
                            oracleType="lunar"
                          />
                        </div>

                        {/* Indicateur de position */}
                        {canClick && (
                          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div 
                              className="w-2 h-2 rounded-full border-2 animate-pulse"
                              style={{ 
                                borderColor: phaseInfo.accentColor,
                                boxShadow: `0 0 8px ${phaseInfo.accentColor}80`
                              }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Message d'intuition */}
              {flippedCard === null && (
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center w-full px-4">
                  <p className="text-slate-400/80 text-sm font-light italic animate-fade-pulse">
                    {t('lunar.cardGame.hint') || 'Écoutez votre intuition...'}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* BOUTON RETOUR MODERNE */}
          <div className="text-center pt-6">
            <button
              onClick={onBack}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-800/60 hover:bg-slate-700/70 border border-slate-600/40 hover:border-slate-500/60 text-slate-300 hover:text-slate-100 rounded-xl transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span className="text-sm group-hover:-translate-x-1 transition-transform">←</span>
              <span className="text-sm font-medium">{t('cardgame.back') || 'Retour'}</span>
            </button>
          </div>

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
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.8; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        @keyframes pulse-card {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.4; }
        }
        @keyframes fade-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotate-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }
        .animate-fade-pulse {
          animation: fade-pulse 3s ease-in-out infinite;
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