// client/src/components/CardGame.tsx
// ✅ v5 — Éventail compact 7 cartes, textes lisibles, cartes agrandies

import { useState, useEffect, useCallback, useRef } from 'react';
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

// ✅ Réduit de 9 à 7 — éventail plus lisible sur mobile
const FAN_COUNT = 7;
const MAX_SELECTION = 3;

export default function CardGame({
  user,
  oracle,
  oracleType,
  onCardsSelected,
  onSaveReading,
  onBack,
  shouldShowAdBeforeReading,
  onReadingComplete,
}: CardGameProps) {
  const { t, language } = useLanguage();
  const playFlip = useSound('Flip-card.wav');
  const playReveal = useSound('Bouton-reveal.wav');

  const [fanCards, setFanCards] = useState<number[]>([]);
  const [removedFromFan, setRemovedFromFan] = useState<number[]>([]);
  const [slots, setSlots] = useState<(number | null)[]>([null, null, null]);
  const [revealedCard, setRevealedCard] = useState<{
    card: any;
    slotIndex: number;
    originalName: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [adShownForSession, setAdShownForSession] = useState(false);

  const selectedCount = slots.filter((s) => s !== null).length;

  // ── Normalisation ──
  const normalizeForTranslation = (name: string) =>
    name.toLowerCase().trim().replace(/[''\s-]/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const translateCardName = (cardName: string | undefined) => {
    if (!cardName) return undefined;
    const key = `cards.${oracleType}.${normalizeForTranslation(cardName)}.name`;
    const translated = t(key);
    return translated !== key ? translated : cardName;
  };

  const getEnergyLabel = (slotIndex: number) =>
    t(`interpretation.${oracleType}.energy${slotIndex + 1}.label`);

  // ── Génération initiale ──
  useEffect(() => {
    const generate = async () => {
      setIsLoading(true);
      if (!adShownForSession && shouldShowAdBeforeReading) {
        await shouldShowAdBeforeReading(oracleType);
        setAdShownForSession(true);
      }
      try {
        const cards = selectRandomCardsWithoutRepeat(oracle.cards.length, FAN_COUNT, oracleType);
        setFanCards(cards);
      } catch {
        const fallback = Array.from({ length: oracle.cards.length }, (_, i) => i)
          .sort(() => Math.random() - 0.5)
          .slice(0, FAN_COUNT);
        setFanCards(fallback);
      } finally {
        setIsLoading(false);
      }
    };
    generate();
  }, [oracle.cards.length, oracleType]);

  // ── Clic sur une carte du fan ──
  const handleFanCardClick = useCallback(
    (fanIndex: number) => {
      if (removedFromFan.includes(fanIndex)) return;
      if (selectedCount >= MAX_SELECTION) return;

      playFlip();

      const actualIndex = fanCards[fanIndex];
      const cardData = oracle.cards[actualIndex];
      const originalName = cardData.name;
      const displayName = translateCardName(cardData.name) || cardData.name;
      const slotIndex = selectedCount;

      setRemovedFromFan((prev) => [...prev, fanIndex]);
      setSlots((prev) => {
        const next = [...prev];
        next[slotIndex] = fanIndex;
        return next;
      });

      setRevealedCard({
        card: { ...cardData, name: displayName },
        slotIndex,
        originalName,
      });
    },
    [fanCards, removedFromFan, selectedCount, oracle.cards]
  );

  // ── Fermeture modale ──
  const handleCloseModal = async () => {
    setRevealedCard(null);

    if (selectedCount === MAX_SELECTION) {
      playReveal();
      const selectedActual = slots
        .filter((s): s is number => s !== null)
        .map((fanIdx) => fanCards[fanIdx]);

      const selectedCardsData = selectedActual.map((idx) => oracle.cards[idx]);

      if (onSaveReading) {
        try {
          await onSaveReading({
            type: oracleType,
            cards: selectedCardsData.map((c) => c.name),
            date: new Date(),
            answer: 'Interprétation...',
          });
        } catch (e) {
          console.error('❌ Erreur sauvegarde:', e);
        }
      }

      if (onReadingComplete) onReadingComplete(oracleType);
      saveTirageToHistory(oracleType, selectedActual);

      setTimeout(() => onCardsSelected(selectedActual), 300);
    }
  };

  // ── Loading screen ──
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-transparent">
        <div className="relative w-16 h-16 mb-6">
          <div
            className="absolute inset-0 border-2 border-[#c9a87f]/30 rounded-full animate-spin"
            style={{ animationDuration: '3s' }}
          >
            <div className="absolute inset-0 border-t-2 border-[#c9a87f] rounded-full" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-[#c9a87f] text-xl">✦</div>
        </div>
        <p className="text-[#c9a87f] text-sm tracking-widest font-light">
          {t('cardgame.loading')}
        </p>
      </div>
    );
  }

  const remainingFan = fanCards
    .map((_, i) => i)
    .filter((i) => !removedFromFan.includes(i));

  return (
    <>
      <div
        className="min-h-screen flex flex-col bg-transparent relative overflow-hidden"
        style={{
          touchAction: 'pan-y',
          paddingTop: 'max(64px, env(safe-area-inset-top, 0px) + 64px)',
        }}
      >
        {/* Fond étoilé */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#c9a87f]"
              style={{
                width: i % 5 === 0 ? '2px' : '1.5px',
                height: i % 5 === 0 ? '2px' : '1.5px',
                top: `${(i * 37 + 11) % 100}%`,
                left: `${(i * 61 + 7) % 100}%`,
                opacity: 0.25,
                animation: `twinkle ${2 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${(i * 0.4) % 3}s`,
              }}
            />
          ))}
        </div>

        {/* Lueur décorative haut */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: '60%',
            height: '200px',
            background: 'radial-gradient(ellipse at top, rgba(180,100,200,0.08) 0%, transparent 70%)',
          }}
        />

        {/* ── TITRE ── */}
        <div className="text-center px-4 mb-5 relative z-10">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 mb-3 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(201,168,127,0.35)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span className="text-[#c9a87f] text-xs">♥</span>
            <span className="text-[#f0dfc0] font-serif text-sm tracking-wide font-medium">
              {t(`oracle.${oracleType}.title`)}
            </span>
            <span className="text-[#c9a87f] text-xs">✦</span>
          </div>

          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[#c9a87f]/60 to-transparent mb-3" />

          {/* ✅ Texte instruction plus lisible — couleur plus lumineuse */}
          <p
            className="text-sm tracking-wider font-light"
            style={{
              color: '#e8d4b8',
              textShadow: '0 1px 12px rgba(201,168,127,0.5)',
            }}
          >
            {t('cardgame.reading.instruction')}
          </p>
        </div>

        {/* ── SLOTS RÉCEPTION ── */}
        <div className="flex justify-center gap-3 sm:gap-4 px-4 mb-5 relative z-10">
          {Array.from({ length: MAX_SELECTION }).map((_, slotIdx) => {
            const fanIdx = slots[slotIdx];
            const filled = fanIdx !== null;
            const actualIdx = filled ? fanCards[fanIdx] : null;
            const cardData = actualIdx !== null ? oracle.cards[actualIdx] : null;
            const isNext = slotIdx === selectedCount;

            return (
              <div key={slotIdx} className="flex flex-col items-center gap-2">
                <div
                  className={`relative rounded-xl transition-all duration-500 overflow-hidden ${
                    filled
                      ? 'shadow-[0_4px_24px_rgba(201,168,127,0.28)]'
                      : isNext
                      ? 'shadow-[0_0_16px_rgba(201,168,127,0.15)]'
                      : ''
                  }`}
                  style={{
                    width: 'clamp(78px, 23vw, 100px)',
                    height: 'clamp(116px, 34vw, 150px)',
                    border: filled
                      ? '1px solid rgba(201,168,127,0.6)'
                      : isNext
                      ? '1px dashed rgba(201,168,127,0.65)'
                      : '1px dashed rgba(201,168,127,0.28)',
                    background: filled ? 'transparent' : 'rgba(21,34,56,0.55)',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  {filled && cardData ? (
                    <SlotCardFace
                      cardData={cardData}
                      oracleType={oracleType}
                      displayName={translateCardName(cardData.name) || cardData.name}
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
                      <span
                        className="font-serif"
                        style={{
                          // ✅ Chiffres romains bien visibles
                          color: isNext ? 'rgba(201,168,127,0.95)' : 'rgba(201,168,127,0.4)',
                          fontSize: '1.15rem',
                        }}
                      >
                        {['I', 'II', 'III'][slotIdx]}
                      </span>
                      {isNext && (
                        <div
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: '50%',
                            background: 'rgba(201,168,127,0.75)',
                            animation: 'pulse-dot 1.5s ease-in-out infinite',
                          }}
                        />
                      )}
                    </div>
                  )}
                </div>

                {/* ✅ Label énergie — contraste amélioré */}
                <p
                  className="text-center font-light leading-tight"
                  style={{
                    fontSize: 'clamp(11px, 2.8vw, 13px)',
                    maxWidth: 'clamp(78px, 23vw, 100px)',
                    color: filled ? '#f0dfc0' : '#d4b896',
                    textShadow: filled
                      ? '0 1px 10px rgba(201,168,127,0.4)'
                      : '0 1px 8px rgba(201,168,127,0.25)',
                    transition: 'color 0.3s',
                    letterSpacing: '0.02em',
                  }}
                >
                  {getEnergyLabel(slotIdx)}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── SÉPARATEUR ── */}
        <div className="relative z-10 flex items-center justify-center mb-4 px-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c9a87f]/25 to-transparent" />
          <span className="mx-3 text-[#c9a87f]/50 text-xs">✦</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c9a87f]/25 to-transparent" />
        </div>

        {/* ── FAN DE CARTES ── */}
        <div className="flex flex-col items-center relative z-10">
          {/* Lueur douce sous le fan */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: '260px',
              height: '70px',
              background: 'radial-gradient(ellipse at bottom, rgba(100,50,160,0.18) 0%, transparent 70%)',
              filter: 'blur(8px)',
            }}
          />

          <div
            className="relative flex items-end justify-center"
            style={{
              width: '100%',
              // ✅ Hauteur ajustée aux cartes plus grandes
              height: 'clamp(148px, 38vw, 192px)',
            }}
          >
            {remainingFan.map((fanIdx, posInFan) => (
              <FanCard
                key={fanIdx}
                fanIndex={fanIdx}
                posInFan={posInFan}
                totalInFan={remainingFan.length}
                oracleType={oracleType}
                onClick={() => handleFanCardClick(fanIdx)}
                disabled={selectedCount >= MAX_SELECTION}
              />
            ))}

            {remainingFan.length === 0 && selectedCount >= MAX_SELECTION && (
              <p className="text-[#e8d4b8]/90 text-sm font-light tracking-widest animate-pulse self-center">
                ✦ Tirage complet ✦
              </p>
            )}
          </div>
        </div>

        {/* ── INDICATEURS + BOUTON ── */}
        <div
          className="flex flex-col items-center gap-3 relative z-10 px-4 mt-4"
          style={{ paddingBottom: 'calc(90px + env(safe-area-inset-bottom, 0px))' }}
        >
          {/* Dots indicateurs */}
          <div className="flex items-center gap-3">
            {Array.from({ length: MAX_SELECTION }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: i < selectedCount ? '11px' : '9px',
                  height: i < selectedCount ? '11px' : '9px',
                  borderRadius: '50%',
                  background: i < selectedCount ? '#c9a87f' : 'transparent',
                  border: i < selectedCount ? 'none' : '1px solid rgba(201,168,127,0.45)',
                  boxShadow: i < selectedCount ? '0 0 10px rgba(201,168,127,0.7)' : 'none',
                  transition: 'all 0.35s cubic-bezier(.34,1.56,.64,1)',
                }}
              />
            ))}
          </div>

          {/* ✅ Texte compteur bien visible */}
          <p
            style={{
              color: '#d4b896',
              fontSize: '0.78rem',
              letterSpacing: '0.1em',
              textShadow: '0 1px 8px rgba(201,168,127,0.35)',
            }}
          >
            {t('cardgame.selected')
              .replace('{current}', selectedCount.toString())
              .replace('{max}', MAX_SELECTION.toString())}
          </p>

          <MysticalButton
            variant="secondary"
            onClick={onBack}
            className="px-6 py-2.5 text-sm bg-[#152238]/70 border border-[#c9a87f]/35 text-[#e8d4b8] hover:border-[#c9a87f]/60 hover:bg-[#1a2d45]/70"
          >
            ← {t('cardgame.back')}
          </MysticalButton>
        </div>
      </div>

      {/* Modale */}
      {revealedCard && (
        <CardRevealModal
          card={revealedCard.card}
          oracleType={oracleType}
          onClose={handleCloseModal}
          cardNumber={selectedCount}
          totalCards={MAX_SELECTION}
          originalCardName={revealedCard.originalName}
        />
      )}

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.12; }
          50% { opacity: 0.55; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes slot-fill {
          from { transform: scale(0.72) translateY(8px); opacity: 0; }
          to   { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes card-enter {
          from { opacity: 0; transform: var(--base-t) translateY(40px) scale(0.9); }
          to   { opacity: 1; transform: var(--base-t); }
        }
        .slot-fill-anim {
          animation: slot-fill 0.45s cubic-bezier(.34,1.56,.64,1) forwards;
        }
      `}</style>
    </>
  );
}

// ── Sous-composant : carte dans le fan ──
function FanCard({
  fanIndex,
  posInFan,
  totalInFan,
  oracleType,
  onClick,
  disabled,
}: {
  fanIndex: number;
  posInFan: number;
  totalInFan: number;
  oracleType: CardBasedOracleType;
  onClick: () => void;
  disabled: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  // ✅ Arc réduit + spread plus serré = éventail lisible sur mobile
  // Avec 7 cartes : arcDeg ≈ 33°, spreadPx ≈ 91px — compact mais bien visible
  const arcDeg = Math.min(36, 5 + totalInFan * 4.2);
  const spreadPx = Math.min(100, totalInFan * 14);

  const rot = totalInFan > 1 ? -arcDeg + (posInFan / (totalInFan - 1)) * arcDeg * 2 : 0;
  const tx = totalInFan > 1 ? -spreadPx + (posInFan / (totalInFan - 1)) * spreadPx * 2 : 0;

  // Décalage vertical naturel
  const centerOffset = totalInFan > 1 ? posInFan / (totalInFan - 1) : 0.5;
  const verticalDip = Math.abs(centerOffset - 0.5) * 2;
  const baseY = verticalDip * 12;

  const baseTransform = `translateX(${tx}px) rotate(${rot}deg) translateY(${baseY}px)`;
  const hoverTransform = `translateX(${tx}px) rotate(${rot}deg) translateY(${baseY - 24}px) scale(1.1)`;

  const getBackImage = () => {
    switch (oracleType) {
      case 'lunar': return '/Image/luneOracle/card-verso-luna.webp';
      case 'runes': return '/Image/runes/card-back.webp';
      default: return '/Image/card-back.webp';
    }
  };

  return (
    <div
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => !disabled && setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      style={{
        position: 'absolute',
        bottom: 0,
        // ✅ Cartes plus grandes — bien visibles sur mobile
        width: 'clamp(58px, 15vw, 72px)',
        height: 'clamp(87px, 22vw, 108px)',
        transform: hovered ? hoverTransform : baseTransform,
        zIndex: hovered ? 60 : posInFan + 1,
        transition: 'transform 0.32s cubic-bezier(.34,1.56,.64,1), z-index 0s',
        cursor: disabled ? 'default' : 'pointer',
        willChange: 'transform',
        transformOrigin: 'bottom center',
        WebkitTapHighlightColor: 'transparent',
        touchAction: 'manipulation',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 9,
          overflow: 'hidden',
          boxShadow: hovered
            ? '0 18px 36px rgba(0,0,0,0.8), 0 0 22px rgba(201,168,127,0.28)'
            : '0 6px 20px rgba(0,0,0,0.65), 0 2px 6px rgba(0,0,0,0.45)',
          transition: 'box-shadow 0.32s',
          position: 'relative',
        }}
      >
        <img
          src={getBackImage()}
          alt="Carte"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            borderRadius: 9,
          }}
          loading="lazy"
          decoding="async"
          draggable={false}
        />

        {/* Bordure intérieure subtile */}
        <div
          style={{
            position: 'absolute',
            inset: 3,
            borderRadius: 6,
            border: '1px solid rgba(201,168,127,0.32)',
            pointerEvents: 'none',
          }}
        />

        {/* Reflet hover */}
        {hovered && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 9,
              background:
                'linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(201,168,127,0.07) 40%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
        )}

        {/* Bordure extérieure glow hover */}
        {hovered && (
          <div
            style={{
              position: 'absolute',
              inset: -1,
              borderRadius: 10,
              border: '1px solid rgba(201,168,127,0.6)',
              boxShadow: '0 0 12px rgba(201,168,127,0.25)',
              pointerEvents: 'none',
            }}
          />
        )}
      </div>
    </div>
  );
}

// ── Sous-composant : carte dans un slot ──
function SlotCardFace({
  cardData,
  oracleType,
  displayName,
}: {
  cardData: OracleCard;
  oracleType: CardBasedOracleType;
  displayName: string;
}) {
  const [imgError, setImgError] = useState(false);

  const normalize = (n: string) =>
    n
      .toLowerCase()
      .trim()
      .replace(/[''\s-]/g, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

  const folder =
    oracleType === 'lunar'
      ? 'luneOracle'
      : oracleType === 'runes'
      ? 'runes'
      : 'loveOracle';
  const imgPath = `/Image/${folder}/${normalize(cardData.name)}.webp`;

  return (
    <div className="slot-fill-anim absolute inset-0">
      {!imgError ? (
        <img
          src={imgPath}
          alt={displayName}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 10,
          }}
          onError={() => setImgError(true)}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-2 rounded-xl"
          style={{
            background: 'linear-gradient(135deg, #1a2d45 0%, #152238 100%)',
          }}
        >
          <span className="text-[#c9a87f] text-base mb-1">✦</span>
          <span
            className="text-[#f0dfc0] font-serif text-center leading-tight"
            style={{ fontSize: '10px' }}
          >
            {displayName}
          </span>
        </div>
      )}

      {/* Overlay dégradé subtil */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)',
        }}
      />
    </div>
  );
}