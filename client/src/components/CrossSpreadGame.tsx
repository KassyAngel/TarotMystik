// client/src/pages/CrossSpreadGame.tsx
// 🎴 TIRAGE EN CROIX - FIX: cartes retournées restent visibles + optimisations mobile

import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import FlipCard from '@/components/FlipCard';
import MysticalButton from '@/components/MysticalButton';
import CardRevealModal from '@/components/CardRevealModal';
import { OracleData, UserSession, OracleCard } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSound } from '@/hooks/useSound';
import { 
  selectRandomCardsWithoutRepeat, 
  saveTirageToHistory,
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

// ─────────────────────────────────────────────────────────────
// 🔑 FIX PRINCIPAL : CardSlot mémoïsé avec key STABLE
// Chaque slot est un composant isolé. Une fois isFlipped=true,
// il ne re-rend JAMAIS à cause d'un changement de currentCardIndex.
// ─────────────────────────────────────────────────────────────
interface CardSlotProps {
  index: number;
  cardData: OracleCard;
  position: string;
  oracleType: CardBasedOracleType;
  isFlipped: boolean;       // vient du state parent → immuable une fois true
  isActive: boolean;        // c'est la carte courante à retourner
  isComplete: boolean;
  onFlip: (index: number) => void;
}

const CardSlot = memo(({ 
  index, 
  cardData, 
  position, 
  oracleType,
  isFlipped,
  isActive,
  isComplete,
  onFlip 
}: CardSlotProps) => {
  const canFlip = isActive && !isComplete && !isFlipped;

  const handleClick = useCallback(() => {
    if (canFlip) onFlip(index);
  }, [canFlip, onFlip, index]);

  return (
    <div className="cross-card-content">
      {/* Label position – hauteur fixe pour éviter le layout shift */}
      <div className="position-label-wrapper">
        <p className={`position-label ${
          canFlip 
            ? 'label-active' 
            : isFlipped 
            ? 'label-done' 
            : 'label-waiting'
        }`}>
          {position}
        </p>
      </div>

      {/* Carte */}
      <div className={`card-container ${
        canFlip ? 'card-active' : isFlipped ? 'card-done' : 'card-waiting'
      }`}>
        {/* 
          ✅ FIX : FlipCard reçoit toujours isFlipped=true une fois retournée.
          Le composant ne se "désabonne" pas car CardSlot est mémoïsé
          et sa key dans le parent est stable (= index fixe).
        */}
        <FlipCard
          card={cardData}
          position={position}
          oracleType={oracleType}
          isFlipped={isFlipped}
          onFlip={handleClick}
          hidePosition={true}
        />

        {/* Indicateur "à retourner maintenant" */}
        {canFlip && (
          <>
            <div className="flip-arrow" aria-hidden="true">↓</div>
            <div className="flip-dot" aria-hidden="true" />
          </>
        )}
      </div>
    </div>
  );
}, (prev, next) => {
  // ─── Comparaison personnalisée pour éviter les re-renders inutiles ───
  // On ne re-rend que si ces props changent
  return (
    prev.isFlipped  === next.isFlipped  &&
    prev.isActive   === next.isActive   &&
    prev.isComplete === next.isComplete
  );
});

CardSlot.displayName = 'CardSlot';

// ─────────────────────────────────────────────────────────────
// Composant principal
// ─────────────────────────────────────────────────────────────
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
  const [randomCards, setRandomCards]             = useState<number[]>([]);
  // ✅ flippedCards est un tableau de booleans. Une fois true, il ne repasse JAMAIS à false.
  const [flippedCards, setFlippedCards]           = useState<boolean[]>([]);
  const [currentCardIndex, setCurrentCardIndex]   = useState(0);
  const [isComplete, setIsComplete]               = useState(false);
  const [showModal, setShowModal]                 = useState(false);
  const [currentRevealedCard, setCurrentRevealedCard] = useState<number | null>(null);
  const [adShownForSession, setAdShownForSession] = useState(false);

  const { t } = useLanguage();
  const playFlip   = useSound('Flip-card.wav');
  const playReveal = useSound('Bouton-reveal.wav');

  const totalCards = 5;

  // ─── Positions mémoïsées ────────────────────────────────────
  const positions = useMemo(() => [
    { key: 'present',   label: t('crossSpread.positions.present')   },
    { key: 'obstacle',  label: t('crossSpread.positions.obstacle')  },
    { key: 'past',      label: t('crossSpread.positions.past')      },
    { key: 'future',    label: t('crossSpread.positions.future')    },
    { key: 'synthesis', label: t('crossSpread.positions.synthesis') }
  ], [t]);

  // ─── Normalisation + traduction des noms de cartes ──────────
  const normalizeCardName = useCallback((name: string): string => {
    return name
      .trim()
      .toLowerCase()
      .replace(/[''\s-]/g, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }, []);

  const getTranslatedCardName = useCallback((card: OracleCard): string => {
    if (!card?.name) return '';
    const key = `cards.${oracleType}.${normalizeCardName(card.name)}.name`;
    const translated = t(key);
    return translated !== key ? translated : card.name;
  }, [oracleType, normalizeCardName, t]);

  // ─── Init ───────────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false;

    const initGame = async () => {
      if (!adShownForSession && shouldShowAdBeforeReading) {
        await shouldShowAdBeforeReading(oracleType);
        if (cancelled) return;
        setAdShownForSession(true);
      }

      const selectedCards = selectRandomCardsWithoutRepeat(
        oracle.cards.length,
        totalCards,
        oracleType
      );
      if (!cancelled) {
        setRandomCards(selectedCards);
        setFlippedCards(new Array(totalCards).fill(false));
        setCurrentCardIndex(0);
        setIsComplete(false);
      }
    };

    initGame();
    return () => { cancelled = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oracle.cards.length, oracleType]);

  // ─── Retournement d'une carte ────────────────────────────────
  const handleCardFlip = useCallback((index: number) => {
    // Sécurité double : on ignore si ce n'est pas la bonne carte ou déjà retournée
    if (index !== currentCardIndex || flippedCards[index] || isComplete) return;

    playFlip();

    // ✅ FIX CLEF : on crée un NOUVEAU tableau avec le flag immuablement à true
    setFlippedCards(prev => {
      const next = [...prev];
      next[index] = true;   // jamais repassé à false
      return next;
    });

    // Ouvre la modale après l'animation flip (600ms)
    setTimeout(() => {
      setCurrentRevealedCard(index);
      setShowModal(true);
    }, 600);
  }, [currentCardIndex, flippedCards, isComplete, playFlip]);

  // ─── Fermeture modale ────────────────────────────────────────
  const handleCloseModal = useCallback(() => {
    setShowModal(false);
    setCurrentRevealedCard(null);

    const isLastCard = currentCardIndex === totalCards - 1;

    if (isLastCard) {
      setTimeout(() => {
        setIsComplete(true);
        setTimeout(async () => {
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
            } catch (err) {
              console.error('❌ Erreur sauvegarde:', err);
            }
          }

          if (onReadingComplete) {
            onReadingComplete(oracleType);
          }

          onCardsSelected(randomCards);
        }, 1500);
      }, 300);
    } else {
      // Passe à la carte suivante
      setTimeout(() => {
        setCurrentCardIndex(prev => prev + 1);
      }, 300);
    }
  }, [currentCardIndex, totalCards, playReveal, oracleType, randomCards, oracle.cards, onSaveReading, onReadingComplete, onCardsSelected]);

  // ─── Révéler l'interprétation (bouton fin) ───────────────────
  const handleRevealInterpretation = useCallback(async () => {
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
      } catch (err) {
        console.error('❌ Erreur sauvegarde:', err);
      }
    }

    if (onReadingComplete) onReadingComplete(oracleType);
    onCardsSelected(randomCards);
  }, [playReveal, oracleType, randomCards, onSaveReading, onReadingComplete, onCardsSelected]);

  // ─── Données de la modale (mémoïsées) ───────────────────────
  const modalCard = useMemo(() => {
    if (currentRevealedCard === null || randomCards.length === 0) return null;
    const actualIndex  = randomCards[currentRevealedCard];
    const originalCard = oracle.cards[actualIndex];
    return {
      translated: { ...originalCard, name: getTranslatedCardName(originalCard) },
      original:   originalCard
    };
  }, [currentRevealedCard, randomCards, oracle.cards, getTranslatedCardName]);

  // ─── Helper : données d'un slot ─────────────────────────────
  const slotData = useCallback((index: number) => ({
    cardData: oracle.cards[randomCards[index]],
    position: positions[index].label,
    isFlipped: flippedCards[index] ?? false,
    isActive:  index === currentCardIndex,
  }), [oracle.cards, randomCards, positions, flippedCards, currentCardIndex]);

  // ─── Chargement ─────────────────────────────────────────────
  if (randomCards.length === 0) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-transparent">
        <div className="text-[#c9a87f] text-lg">{t('common.loading')}</div>
      </div>
    );
  }

  // ─── Render ──────────────────────────────────────────────────
  return (
    <div className="cs-root">

      {/* Fond atmosphérique */}
      <div className="cs-bg" aria-hidden="true">
        <div className="cs-orb cs-orb-pink" />
        <div className="cs-orb cs-orb-blue" />
        <div className="cs-orb cs-orb-gold" />
      </div>

      {/* Étoiles – générées une seule fois, pas de Math.random() à chaque render */}
      <div className="cs-stars" aria-hidden="true">
        {STARS.map((s, i) => (
          <div key={i} className="cs-star" style={s} />
        ))}
      </div>

      {/* Contenu principal */}
      <div className="cs-content">

        {/* Header */}
        <header className="cs-header">
          <h2 className="cs-title">{t('crossSpread.title')}</h2>
          <div className="cs-divider" />
          <p className="cs-subtitle">{t('crossSpread.description')}</p>
        </header>

        {/* 
          ✅ Layout en CSS Grid – plus performant que display:table sur mobile.
          Les 3 colonnes et 3 lignes sont fixes ; les cellules vides sont des 
          <div> transparents qui maintiennent la structure.
        */}
        <div className="cs-grid-wrapper">
          <div className="cs-grid" role="group" aria-label={t('crossSpread.title')}>

            {/* Ligne 1 : [vide] [Avenir=3] [vide] */}
            <div className="cs-cell cs-empty" />
            <div className="cs-cell">
              <CardSlot index={3} oracleType={oracleType} onFlip={handleCardFlip} isComplete={isComplete} {...slotData(3)} />
            </div>
            <div className="cs-cell cs-empty" />

            {/* Ligne 2 : [Obstacle=1] [Présent=0] [Synthèse=4] */}
            <div className="cs-cell">
              <CardSlot index={1} oracleType={oracleType} onFlip={handleCardFlip} isComplete={isComplete} {...slotData(1)} />
            </div>
            <div className="cs-cell">
              <CardSlot index={0} oracleType={oracleType} onFlip={handleCardFlip} isComplete={isComplete} {...slotData(0)} />
            </div>
            <div className="cs-cell">
              <CardSlot index={4} oracleType={oracleType} onFlip={handleCardFlip} isComplete={isComplete} {...slotData(4)} />
            </div>

            {/* Ligne 3 : [vide] [Passé=2] [vide] */}
            <div className="cs-cell cs-empty" />
            <div className="cs-cell">
              <CardSlot index={2} oracleType={oracleType} onFlip={handleCardFlip} isComplete={isComplete} {...slotData(2)} />
            </div>
            <div className="cs-cell cs-empty" />

          </div>
        </div>

        {/* Indicateurs de progression */}
        <div className="cs-progress" role="progressbar" aria-valuenow={currentCardIndex + 1} aria-valuemax={totalCards}>
          {Array.from({ length: totalCards }).map((_, i) => (
            <div 
              key={i}
              className={`cs-dot ${
                flippedCards[i] ? 'dot-done' : i === currentCardIndex ? 'dot-active' : 'dot-waiting'
              }`}
            />
          ))}
        </div>

        {/* Bouton retour */}
        <div className="cs-actions">
          <MysticalButton 
            variant="secondary" 
            onClick={onBack}
            className="cs-back-btn"
          >
            ← {t('cardgame.back')}
          </MysticalButton>
        </div>

      </div>

      {/* Modale */}
      {showModal && modalCard && (
        <CardRevealModal
          card={modalCard.translated}
          oracleType={oracleType}
          onClose={handleCloseModal}
          cardNumber={(currentRevealedCard ?? 0) + 1}
          totalCards={totalCards}
          originalCardName={modalCard.original.name}
        />
      )}

      <style>{CSS}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Étoiles pré-calculées (évite Math.random() à chaque render)
// ─────────────────────────────────────────────────────────────
const STARS: React.CSSProperties[] = Array.from({ length: 40 }, (_, i) => {
  const seed = (i * 9301 + 49297) % 233280; // LCG déterministe
  const rand = (offset = 0) => ((seed + offset * 1234) % 10000) / 10000;
  return {
    width:           rand() > 0.7 ? '2px' : '1px',
    height:          rand() > 0.7 ? '2px' : '1px',
    top:             `${rand(1) * 100}%`,
    left:            `${rand(2) * 100}%`,
    animationDelay:  `${rand(3) * 3}s`,
    animationDuration:`${2 + rand(4) * 2}s`,
  };
});

// ─────────────────────────────────────────────────────────────
// CSS (scoped via classes cs-*)
// ─────────────────────────────────────────────────────────────
const CSS = `
  /* ── Racine ─────────────────────────────────────────────── */
  .cs-root {
    position: relative;
    min-height: 100svh;          /* svh = tient compte de la barre d'adresse mobile */
    width: 100%;
    display: flex;
    flex-direction: column;
     background: transparent;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-tap-highlight-color: transparent;
    /* GPU layer pour tout l'écran */
    transform: translateZ(0);
    will-change: transform;
  }

  /* ── Fond atmosphérique ─────────────────────────────────── */
  .cs-bg {
    position: fixed;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 0;
  }
  .cs-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);        /* blur fixe – pas d'animation de blur (coûteux) */
    will-change: opacity;
  }
  .cs-orb-pink {
    width: 380px; height: 380px;
    top: 20%; left: 15%;
    background: rgba(255,102,146,0.08);
    animation: csOrb 4s ease-in-out infinite;
  }
  .cs-orb-blue {
    width: 320px; height: 320px;
    bottom: 25%; right: 15%;
    background: rgba(26,45,69,0.25);
    animation: csOrb 6s ease-in-out infinite reverse;
  }
  .cs-orb-gold {
    width: 420px; height: 420px;
    top: 45%; left: 40%;
    transform: translate(-50%, -50%);
    background: rgba(201,168,127,0.06);
    animation: csOrb 5s ease-in-out infinite 1s;
  }
  @keyframes csOrb {
    0%, 100% { opacity: 0.5; }
    50%       { opacity: 0.9; }
  }

  /* ── Étoiles ─────────────────────────────────────────────── */
  .cs-stars {
    position: fixed;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 0;
  }
  .cs-star {
    position: absolute;
    background: #c9a87f;
    border-radius: 50%;
    will-change: opacity;
    animation: csTwinkle var(--dur, 3s) ease-in-out infinite var(--del, 0s);
  }
  @keyframes csTwinkle {
    0%, 100% { opacity: 0.15; }
    50%       { opacity: 0.9;  }
  }

  /* ── Contenu ─────────────────────────────────────────────── */
  .cs-content {
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Safe areas iOS/Android */
    padding-top:    max(80px, calc(env(safe-area-inset-top,  0px) + 80px));
    padding-bottom: calc(95px + env(safe-area-inset-bottom, 0px));
    padding-left:   max(16px, env(safe-area-inset-left,  0px));
    padding-right:  max(16px, env(safe-area-inset-right, 0px));
    gap: 0;
  }
  @media (min-width: 640px) {
    .cs-content {
      padding-top:    max(90px, calc(env(safe-area-inset-top, 0px) + 90px));
      padding-bottom: calc(110px + env(safe-area-inset-bottom, 0px));
    }
  }

  /* ── Header ─────────────────────────────────────────────── */
  .cs-header { text-align: center; padding-bottom: 12px; }
  .cs-title {
    color: #e8d4b8;
    font-family: serif;
    font-size: clamp(1.1rem, 4vw, 1.75rem);
    margin-bottom: 8px;
    text-shadow: 0 3px 10px rgba(0,0,0,0.9);
  }
  .cs-divider {
    height: 1px;
    width: 96px;
    margin: 0 auto 8px;
    background: linear-gradient(90deg, transparent, rgba(201,168,127,0.5), transparent);
  }
  .cs-subtitle {
    color: rgba(201,168,127,0.85);
    font-size: clamp(0.7rem, 2.5vw, 0.875rem);
    max-width: 480px;
  }

  /* ── Grille croix ────────────────────────────────────────── */
  .cs-grid-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
    width: 100%;
  }

  .cs-grid {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows:    repeat(3, auto);
    /*
      ✅ gap fixe en px pour éviter les sauts sur Android.
      On utilise clamp pour s'adapter aux petits écrans.
    */
    gap: clamp(6px, 2vw, 14px);
    align-items: center;
    justify-items: center;
  }

  .cs-cell {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Cellule vide : garde la colonne / ligne mais n'affiche rien */
  .cs-empty {
    /* Largeur minimale = largeur d'une carte + son gap */
    min-width: clamp(60px, 18vw, 100px);
  }

  /* ── CardSlot interne ────────────────────────────────────── */
  .cross-card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* GPU compositing */
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  /* Label de position - hauteur FIXE pour éviter le layout shift */
  .position-label-wrapper {
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
  }
  @media (min-width: 640px) {
    .position-label-wrapper { height: 32px; }
  }

  .position-label {
    font-family: serif;
    font-size: clamp(0.65rem, 2.2vw, 0.875rem);
    letter-spacing: 0.05em;
    transition: color 0.3s, opacity 0.3s;
    white-space: nowrap;
  }
  .label-active  { color: #ff6692; font-weight: bold; animation: csPulse 2s ease-in-out infinite; }
  .label-done    { color: rgba(201,168,127,0.7); }
  .label-waiting { color: rgba(201,168,127,0.4); }

  /* Conteneur de carte */
  .card-container {
    position: relative;
    width:  clamp(60px, 18vw, 100px);
    height: clamp(90px, 27vw, 150px);
    transition: opacity 0.3s, transform 0.3s;
    /* Forcer le GPU sur chaque carte */
    transform: translateZ(0);
    will-change: transform, opacity;
    backface-visibility: hidden;
  }
  .card-active  { opacity: 1; transform: translateZ(0) scale(1.05); }
  .card-done    { opacity: 1; transform: translateZ(0) scale(1);    }
  .card-waiting { opacity: 0.4; transform: translateZ(0) scale(0.95); }

  /* Flèche "à retourner" */
  .flip-arrow {
    position: absolute;
    top: -28px;
    left: 50%;
    transform: translateX(-50%);
    color: #ff6692;
    font-size: 1.5rem;
    text-shadow: 0 0 10px rgba(255,102,146,0.8);
    animation: csArrow 1.5s ease-in-out infinite;
    pointer-events: none;
  }
  .flip-dot {
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px; height: 10px;
    background: #ff6692;
    border-radius: 50%;
    box-shadow: 0 0 15px rgba(255,102,146,1);
    animation: csDotPulse 1s ease-in-out infinite;
    pointer-events: none;
  }

  /* ── Progression ─────────────────────────────────────────── */
  .cs-progress {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-top: 8px;
  }
  .cs-dot {
    width: 10px; height: 10px;
    border-radius: 50%;
    transition: background 0.3s, box-shadow 0.3s;
  }
  .dot-done    { background: #ff6692; box-shadow: 0 0 10px rgba(255,102,146,0.7); }
  .dot-active  { background: #c9a87f; box-shadow: 0 0 8px rgba(201,168,127,0.6); animation: csPulse 2s ease-in-out infinite; }
  .dot-waiting { background: #152238; border: 1px solid rgba(201,168,127,0.2); }

  /* ── Actions ─────────────────────────────────────────────── */
  .cs-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding-top: 16px;
    width: 100%;
  }
  .cs-back-btn {
    width: 100%;
    max-width: 280px;
    padding: 12px 24px;
    background: linear-gradient(135deg, rgba(21,34,56,0.7), rgba(26,45,69,0.7));
    border: 1px solid rgba(201,168,127,0.3);
    color: #e8d4b8;
  }

  /* ── Animations ─────────────────────────────────────────── */
  @keyframes csPulse {
    0%, 100% { opacity: 0.6; }
    50%       { opacity: 1;   }
  }
  @keyframes csArrow {
    0%, 100% { transform: translateX(-50%) translateY(0);    }
    50%       { transform: translateX(-50%) translateY(-8px); }
  }
  @keyframes csDotPulse {
    0%, 100% { opacity: 0.8; transform: translateX(-50%) scale(1);   }
    50%       { opacity: 1;   transform: translateX(-50%) scale(1.3); }
  }
`;