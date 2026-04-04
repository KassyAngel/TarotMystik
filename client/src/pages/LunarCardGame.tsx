// client/src/pages/LunarCardGame.tsx
// ✅ REDESIGN v10 — Clés i18n pour messages oracle, lune non coupée, texte oracle plus visible

import { useState, useEffect } from 'react';
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

const PHASE_IMAGES: Record<string, string> = {
  newMoon:      '/Image/luneOracle/nouvelle-lune.webp',
  firstQuarter: '/Image/luneOracle/premier-quartier.webp',
  fullMoon:     '/Image/luneOracle/pleine-lune.webp',
  lastQuarter:  '/Image/luneOracle/dernier-quartier.webp',
};

const PHASE_ACCENT: Record<string, string> = {
  newMoon:      '#a3b4c6',
  firstQuarter: '#a5b4fc',
  fullMoon:     '#fcd34d',
  lastQuarter:  '#c4b5fd',
};

// ── Clés de traduction pour les messages oracle ──
// Ajoutez ces clés dans vos fichiers de traduction :
//
// FR : lunar.cardGame.oracle.newMoon.1   = "Intentions naissantes..."
//      lunar.cardGame.oracle.newMoon.2   = "Le voile se lève..."
//      lunar.cardGame.oracle.newMoon.3   = "L'obscurité révèle..."
//      lunar.cardGame.oracle.firstQuarter.1 = "L'élan se forme..."
//      lunar.cardGame.oracle.firstQuarter.2 = "L'action appelle..."
//      lunar.cardGame.oracle.firstQuarter.3 = "Choisissez votre chemin..."
//      lunar.cardGame.oracle.fullMoon.1  = "La lumière illumine..."
//      lunar.cardGame.oracle.fullMoon.2  = "La vérité se montre..."
//      lunar.cardGame.oracle.fullMoon.3  = "Le mystère s'ouvre..."
//      lunar.cardGame.oracle.lastQuarter.1 = "Le lâcher-prise guide..."
//      lunar.cardGame.oracle.lastQuarter.2 = "La sagesse parle..."
//      lunar.cardGame.oracle.lastQuarter.3 = "L'âme se libère..."
//
// EN : lunar.cardGame.oracle.newMoon.1   = "Rising intentions..."
//      lunar.cardGame.oracle.newMoon.2   = "The veil lifts..."
//      lunar.cardGame.oracle.newMoon.3   = "Darkness reveals..."
//      lunar.cardGame.oracle.firstQuarter.1 = "Momentum builds..."
//      lunar.cardGame.oracle.firstQuarter.2 = "Action calls..."
//      lunar.cardGame.oracle.firstQuarter.3 = "Choose your path..."
//      lunar.cardGame.oracle.fullMoon.1  = "The light illuminates..."
//      lunar.cardGame.oracle.fullMoon.2  = "Truth reveals itself..."
//      lunar.cardGame.oracle.fullMoon.3  = "The mystery opens..."
//      lunar.cardGame.oracle.lastQuarter.1 = "Release guides you..."
//      lunar.cardGame.oracle.lastQuarter.2 = "Wisdom speaks..."
//      lunar.cardGame.oracle.lastQuarter.3 = "The soul is freed..."
//
// ES : lunar.cardGame.oracle.newMoon.1   = "Intenciones nacientes..."
//      lunar.cardGame.oracle.newMoon.2   = "El velo se levanta..."
//      lunar.cardGame.oracle.newMoon.3   = "La oscuridad revela..."
//      lunar.cardGame.oracle.firstQuarter.1 = "El impulso se forma..."
//      lunar.cardGame.oracle.firstQuarter.2 = "La acción llama..."
//      lunar.cardGame.oracle.firstQuarter.3 = "Elige tu camino..."
//      lunar.cardGame.oracle.fullMoon.1  = "La luz ilumina..."
//      lunar.cardGame.oracle.fullMoon.2  = "La verdad se muestra..."
//      lunar.cardGame.oracle.fullMoon.3  = "El misterio se abre..."
//      lunar.cardGame.oracle.lastQuarter.1 = "El soltar te guía..."
//      lunar.cardGame.oracle.lastQuarter.2 = "La sabiduría habla..."
//      lunar.cardGame.oracle.lastQuarter.3 = "El alma se libera..."
//
// DE : lunar.cardGame.oracle.newMoon.1   = "Aufkeimende Absichten..."
//      lunar.cardGame.oracle.newMoon.2   = "Der Schleier hebt sich..."
//      lunar.cardGame.oracle.newMoon.3   = "Die Dunkelheit enthüllt..."
//      lunar.cardGame.oracle.firstQuarter.1 = "Der Schwung entsteht..."
//      lunar.cardGame.oracle.firstQuarter.2 = "Die Tat ruft..."
//      lunar.cardGame.oracle.firstQuarter.3 = "Wähle deinen Weg..."
//      lunar.cardGame.oracle.fullMoon.1  = "Das Licht erleuchtet..."
//      lunar.cardGame.oracle.fullMoon.2  = "Die Wahrheit zeigt sich..."
//      lunar.cardGame.oracle.fullMoon.3  = "Das Geheimnis öffnet sich..."
//      lunar.cardGame.oracle.lastQuarter.1 = "Das Loslassen führt..."
//      lunar.cardGame.oracle.lastQuarter.2 = "Die Weisheit spricht..."
//      lunar.cardGame.oracle.lastQuarter.3 = "Die Seele befreit sich..."
//
// IT : lunar.cardGame.oracle.newMoon.1   = "Intenzioni nascenti..."
//      lunar.cardGame.oracle.newMoon.2   = "Il velo si solleva..."
//      lunar.cardGame.oracle.newMoon.3   = "L'oscurità rivela..."
//      lunar.cardGame.oracle.firstQuarter.1 = "Lo slancio si forma..."
//      lunar.cardGame.oracle.firstQuarter.2 = "L'azione chiama..."
//      lunar.cardGame.oracle.firstQuarter.3 = "Scegli il tuo cammino..."
//      lunar.cardGame.oracle.fullMoon.1  = "La luce illumina..."
//      lunar.cardGame.oracle.fullMoon.2  = "La verità si mostra..."
//      lunar.cardGame.oracle.fullMoon.3  = "Il mistero si apre..."
//      lunar.cardGame.oracle.lastQuarter.1 = "Il lasciar andare guida..."
//      lunar.cardGame.oracle.lastQuarter.2 = "La saggezza parla..."
//      lunar.cardGame.oracle.lastQuarter.3 = "L'anima si libera..."

// Fallbacks FR pour chaque phase (utilisés si la clé i18n n'est pas encore définie)
const PHASE_MESSAGES_FALLBACK: Record<string, string[]> = {
  newMoon:      ["Intentions naissantes...", "Le voile se lève...", "L'obscurité révèle..."],
  firstQuarter: ["L'élan se forme...", "L'action appelle...", "Choisissez votre chemin..."],
  fullMoon:     ["La lumière illumine...", "La vérité se montre...", "Le mystère s'ouvre..."],
  lastQuarter:  ["Le lâcher-prise guide...", "La sagesse parle...", "L'âme se libère..."],
};

const FAN = [
  { rotate: -20, ty: 22, tx: -2 },
  { rotate: -10, ty:  8, tx: -1 },
  { rotate:   0, ty:  0, tx:  0 },
  { rotate:  10, ty:  8, tx:  1 },
  { rotate:  20, ty: 22, tx:  2 },
];

const CARD_W = 85;
const CARD_H = Math.round(CARD_W * 1.618); // ~137px

function CardBack({
  accent,
  size = CARD_W,
  isSelected = false,
  isOther = false,
}: {
  accent: string;
  size?: number;
  isSelected?: boolean;
  isOther?: boolean;
}) {
  const w = size;
  const h = Math.round(size * 1.618);
  const [imgOk, setImgOk] = useState(true);

  return (
    <div style={{
      width: w, height: h, position: 'relative',
      borderRadius: `${Math.round(w * 0.09)}px`,
      overflow: 'hidden',
      boxShadow: isSelected
        ? `0 0 32px ${accent}70, 0 14px 44px rgba(0,0,0,0.9)`
        : `0 6px 22px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.7)`,
      transition: 'box-shadow 0.4s ease',
    }}>
      {imgOk ? (
        <>
          <img
            src="/Image/luneOracle/card-verso-luna.webp"
            alt="carte"
            style={{
              width: '100%', height: '100%', objectFit: 'cover', display: 'block',
              filter: isOther
                ? 'brightness(0.28) saturate(0.5)'
                : isSelected
                  ? 'brightness(1.05) saturate(1.15)'
                  : 'brightness(0.78) saturate(0.95)',
              transition: 'filter 0.4s ease',
            }}
            onError={() => setImgOk(false)}
          />
          {isSelected && (
            <div style={{
              position: 'absolute', inset: 0,
              background: `radial-gradient(ellipse at 50% 40%, ${accent}22 0%, transparent 70%)`,
              mixBlendMode: 'screen',
            }} />
          )}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 50% 50%, transparent 45%, rgba(0,0,0,0.4) 100%)',
          }} />
        </>
      ) : (
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id={`fb-${accent.slice(1)}`} cx="50%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#161a2e" />
              <stop offset="100%" stopColor="#070911" />
            </radialGradient>
          </defs>
          <rect width={w} height={h} rx={Math.round(w*0.09)} fill={`url(#fb-${accent.slice(1)})`} />
          <rect x="2" y="2" width={w-4} height={h-4} rx={Math.round(w*0.08)-1}
            fill="none" stroke={accent} strokeWidth="0.7" strokeOpacity="0.35" />
          <circle cx={w/2} cy={h*0.38} r={w*0.18}
            fill="none" stroke={accent} strokeWidth="1.2" strokeOpacity="0.65" />
          <circle cx={w/2+w*0.1} cy={h*0.38} r={w*0.13} fill="#070911" />
        </svg>
      )}
    </div>
  );
}

// ── Oracle mystique animé — SVG lunaire qui tourne ──
function MysticOracle({ accent, visible }: { accent: string; visible: boolean }) {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8px 0 4px',
      opacity: visible ? 1 : 0,
      transition: 'opacity 0.6s ease',
      pointerEvents: 'none',
    }}>
      <svg
        width="80" height="80"
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', marginBottom: '10px' }}
      >
        {/* Anneau extérieur tournant */}
        <circle cx="40" cy="40" r="36"
          fill="none"
          stroke={accent}
          strokeWidth="0.6"
          strokeOpacity="0.4"
          strokeDasharray="4 8"
          style={{ animation: 'mo-spin-cw 12s linear infinite', transformOrigin: '40px 40px' }}
        />
        {/* Anneau moyen tournant inverse */}
        <circle cx="40" cy="40" r="28"
          fill="none"
          stroke={accent}
          strokeWidth="0.5"
          strokeOpacity="0.35"
          strokeDasharray="2 6"
          style={{ animation: 'mo-spin-ccw 8s linear infinite', transformOrigin: '40px 40px' }}
        />
        {/* Anneau intérieur */}
        <circle cx="40" cy="40" r="20"
          fill="none"
          stroke={accent}
          strokeWidth="0.4"
          strokeOpacity="0.28"
        />
        {/* Croix diagonale fine */}
        <line x1="10" y1="10" x2="70" y2="70" stroke={accent} strokeWidth="0.3" strokeOpacity="0.18" />
        <line x1="70" y1="10" x2="10" y2="70" stroke={accent} strokeWidth="0.3" strokeOpacity="0.18" />
        {/* 4 points cardinaux sur l'anneau ext */}
        <circle cx="40" cy="4" r="1.5" fill={accent} fillOpacity="0.75" style={{ animation: 'mo-pulse 2s ease-in-out infinite', transformOrigin: '40px 4px' }} />
        <circle cx="76" cy="40" r="1.5" fill={accent} fillOpacity="0.75" style={{ animation: 'mo-pulse 2s ease-in-out 0.5s infinite', transformOrigin: '76px 40px' }} />
        <circle cx="40" cy="76" r="1.5" fill={accent} fillOpacity="0.75" style={{ animation: 'mo-pulse 2s ease-in-out 1s infinite', transformOrigin: '40px 76px' }} />
        <circle cx="4"  cy="40" r="1.5" fill={accent} fillOpacity="0.75" style={{ animation: 'mo-pulse 2s ease-in-out 1.5s infinite', transformOrigin: '4px 40px' }} />
        {/* Lune croissant centrale */}
        <circle cx="40" cy="40" r="10"
          fill="none" stroke={accent} strokeWidth="1.2" strokeOpacity="0.8"
          style={{ animation: 'mo-glow 3s ease-in-out infinite' }}
        />
        <circle cx="44" cy="40" r="8" fill="#060810" />
        {/* Point central */}
        <circle cx="40" cy="40" r="2" fill={accent} fillOpacity="0.95"
          style={{ animation: 'mo-pulse 1.5s ease-in-out infinite', transformOrigin: '40px 40px' }}
        />
      </svg>
    </div>
  );
}

// ── Message rotatif animé avec clés i18n ──
function RotatingMessage({ accent, phase, t }: { accent: string; phase: string; t: (key: string) => string }) {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);

  // Récupère les 3 messages via clés i18n, avec fallback FR
  const fallbacks = PHASE_MESSAGES_FALLBACK[phase] ?? PHASE_MESSAGES_FALLBACK.fullMoon;
  const messages = [
    t(`lunar.cardGame.oracle.${phase}.1`) || fallbacks[0],
    t(`lunar.cardGame.oracle.${phase}.2`) || fallbacks[1],
    t(`lunar.cardGame.oracle.${phase}.3`) || fallbacks[2],
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIdx(i => (i + 1) % messages.length);
        setFade(true);
      }, 400);
    }, 2800);
    return () => clearInterval(timer);
  }, [messages.length]);

  return (
    <p style={{
      fontFamily: "'Cinzel', serif",
      fontSize: '12px',
      fontWeight: 500,
      color: accent,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      margin: 0,
      opacity: fade ? 0.92 : 0,
      transition: 'opacity 0.4s ease',
      textAlign: 'center',
      textShadow: `0 0 18px ${accent}80, 0 0 6px ${accent}40`,
    }}>
      {messages[idx]}
    </p>
  );
}

export default function LunarCardGame({
  user,
  selectedPhase,
  onCardSelected,
  onBack,
  onSaveReading,
  onReadingComplete,
}: LunarCardGameProps) {
  const { t } = useLanguage();
  const [phaseCards, setPhaseCards]     = useState<number[]>([]);
  const [selectedIdx, setSelectedIdx]   = useState<number | null>(null);
  const [revealedCard, setRevealedCard] = useState<{
    card: OracleCard; index: number; originalName: string;
  } | null>(null);
  const [isVisible, setIsVisible]         = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);

  const playFlip   = useSound('Flip-card.wav');
  const playReveal = useSound('Bouton-reveal.wav');

  const lunarOracle = oracleData.lunar;
  const accent      = PHASE_ACCENT[selectedPhase] ?? '#a3b4c6';
  const phaseImage  = PHASE_IMAGES[selectedPhase];

  const getPhaseName = (phase: string) => ({
    newMoon:      t('lunar.phases.newMoon.name')      || 'Nouvelle Lune',
    firstQuarter: t('lunar.phases.firstQuarter.name') || 'Premier Quartier',
    fullMoon:     t('lunar.phases.fullMoon.name')     || 'Pleine Lune',
    lastQuarter:  t('lunar.phases.lastQuarter.name')  || 'Dernier Quartier',
  }[phase] ?? 'Lune');

  const phaseName = getPhaseName(selectedPhase);

  useEffect(() => {
    const init = async () => {
      await new Promise(r => setTimeout(r, 50));
      const pool = lunarOracle.cards
        .map((card, index) => ({ card, index }))
        .filter(({ card }) => card.phase === selectedPhase);
      const picked = pool
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.min(5, pool.length))
        .map(({ index }) => index);
      setPhaseCards(picked);
      setIsInitialized(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsFullyLoaded(true);
          setTimeout(() => setIsVisible(true), 80);
        });
      });
    };
    init();
  }, [selectedPhase]);

  const handleCardClick = (localIndex: number) => {
    if (selectedIdx !== null) return;
    playFlip();
    setSelectedIdx(localIndex);
    const actualIndex = phaseCards[localIndex];
    const cardData    = lunarOracle.cards[actualIndex];
    setTimeout(() => {
      setRevealedCard({ card: cardData, index: localIndex, originalName: cardData.name });
    }, 680);
  };

  const handleShowInterpretation = async () => {
    if (!revealedCard) return;
    playReveal();
    const actualIndex  = phaseCards[revealedCard.index];
    const selectedCard = lunarOracle.cards[actualIndex];
    if (onSaveReading) {
      try {
        await onSaveReading({
          type: 'lunar', cards: [selectedCard.name],
          date: new Date(), lunarPhase: selectedPhase,
          answer: `Phase: ${phaseName} - ${selectedCard.meaning}`,
        });
      } catch (e) { console.error('❌', e); }
    }
    if (onReadingComplete) onReadingComplete('lunar');
    setTimeout(() => onCardSelected({ card: selectedCard, phase: selectedPhase }), 100);
  };

  // Carte monte DANS la zone cartes — max 110px vers le haut
  const RISE = 110;

  const getCardStyle = (localIndex: number): React.CSSProperties => {
    const fan      = FAN[localIndex] ?? FAN[2];
    const isPicked = selectedIdx === localIndex;
    const isOther  = selectedIdx !== null && !isPicked;
    const total    = phaseCards.length;
    const offsetX  = (localIndex - (total - 1) / 2) * 48 + fan.tx;

    if (isPicked) {
      return {
        transform: `translateX(${offsetX}px) translateY(-${RISE}px) rotate(0deg) scale(1.05)`,
        zIndex: 20, opacity: 1,
        transition: 'transform 0.6s cubic-bezier(0.34,1.35,0.64,1), opacity 0.3s ease',
        cursor: 'default',
      };
    }
    if (isOther) {
      return {
        transform: `translateX(${offsetX}px) translateY(${fan.ty}px) rotate(${fan.rotate}deg) scale(0.95)`,
        zIndex: localIndex + 1, opacity: 0.16,
        transition: 'transform 0.45s ease, opacity 0.45s ease',
        cursor: 'default',
      };
    }
    return {
      transform: `translateX(${offsetX}px) translateY(${fan.ty}px) rotate(${fan.rotate}deg)`,
      zIndex: localIndex + 1, opacity: 1,
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
    };
  };

  if (!isInitialized || !isFullyLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#060810]"
        style={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
        <div className="text-center">
          <div className="relative mx-auto mb-6" style={{ width: '110px', height: '110px' }}>
            <div style={{
              position: 'absolute', inset: 0, borderRadius: '50%',
              border: `1.5px solid transparent`, borderTopColor: accent,
              animation: 'lcg-spin 1.4s linear infinite',
            }} />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={phaseImage} alt={phaseName} style={{
                width: '60px', height: '60px', objectFit: 'contain',
                filter: `drop-shadow(0 0 14px ${accent}90)`,
                animation: 'lcg-float 3s ease-in-out infinite',
              }} />
            </div>
          </div>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '12px', fontWeight: 300, color: '#6b7280', letterSpacing: '0.08em' }}>
            {t('lunar.loading.connecting') || 'Connexion avec les énergies lunaires...'}
          </p>
        </div>
      </div>
    );
  }

  // Zone cartes = RISE(110) + CARD_H(137) + marge(28) = 275px
  const CARD_ZONE_H = RISE + CARD_H + 28;

  return (
    <>
      <div
        className="bg-[#060810] relative overflow-hidden"
        style={{ minHeight: '100vh', opacity: isVisible ? 1 : 0, transition: 'opacity 500ms ease-out' }}
      >
        {/* Halo phase */}
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '380px', height: '280px', pointerEvents: 'none',
          background: `radial-gradient(ellipse at 50% 0%, ${accent}18 0%, transparent 65%)`,
          filter: 'blur(55px)',
        }} />

        {/* Étoiles */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          {[...Array(55)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: i % 7 === 0 ? '2px' : '1px', height: i % 7 === 0 ? '2px' : '1px',
              borderRadius: '50%', background: 'white',
              top: `${(i * 137.508) % 100}%`, left: `${(i * 97.3) % 100}%`,
              opacity: i % 7 === 0 ? 0.3 : 0.12,
              animation: `lcg-twinkle ${2.5+(i%4)}s ease-in-out ${(i%6)*0.5}s infinite`,
            }} />
          ))}
        </div>

        <div style={{
          position: 'relative', zIndex: 10,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          // ✅ paddingTop augmenté : 72px pour que la lune ne soit plus coupée
          paddingTop: '72px', paddingBottom: '32px',
        }}>

          {/* ═══ ZONE 1 — HEADER ═══ */}
          <div style={{ textAlign: 'center', width: '100%', padding: '0 20px 14px' }}>

            {/* ✅ Lune grande — marginBottom augmenté pour respiration */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '18px' }}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <div style={{
                  position: 'absolute', inset: '-26px', borderRadius: '50%',
                  background: `radial-gradient(circle, ${accent}40 0%, transparent 68%)`,
                  filter: 'blur(20px)',
                  animation: 'lcg-glow-pulse 3s ease-in-out infinite',
                }} />
                <img src={phaseImage} alt={phaseName} style={{
                  width: '88px', height: '88px', objectFit: 'contain', position: 'relative',
                  filter: `drop-shadow(0 0 22px ${accent}ee) brightness(1.1)`,
                  animation: 'lcg-float 3.5s ease-in-out infinite',
                }} />
              </div>
            </div>

            {/* Titre */}
            <h2 style={{
              fontFamily: "'Cinzel', serif", fontSize: '22px', fontWeight: 700,
              color: '#f0e8d4', letterSpacing: '0.18em', textTransform: 'uppercase',
              margin: '0 0 10px',
              textShadow: `0 0 28px ${accent}55, 0 2px 4px rgba(0,0,0,0.9)`,
            }}>
              {phaseName}
            </h2>

            {/* Séparateur */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px' }}>
              <div style={{ width: '40px', height: '0.5px', background: `linear-gradient(90deg, transparent, ${accent}65)` }} />
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: accent, opacity: 0.8, boxShadow: `0 0 8px ${accent}` }} />
              <div style={{ width: '40px', height: '0.5px', background: `linear-gradient(270deg, transparent, ${accent}65)` }} />
            </div>

            {/* Instruction */}
            <p style={{
              fontFamily: "'Cinzel', serif", fontSize: '13px', fontWeight: 600,
              color: '#d8cdb8', letterSpacing: '0.07em', textTransform: 'uppercase', margin: '0 0 5px',
            }}>
              {t('lunar.cardGame.instruction') || 'Choisissez la carte qui vous attire'}
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: '12.5px', fontWeight: 300,
              color: '#7c8899', letterSpacing: '0.03em', fontStyle: 'italic', margin: 0,
            }}>
              {t('lunar.cardGame.singleCard') || 'Une seule carte révélera le message de la lune'}
            </p>
          </div>

          {/* ═══ ZONE 2 — ORACLE MYSTIQUE (comble l'espace, disparaît après tirage) ═══ */}
          <div style={{
            width: '100%',
            height: selectedIdx !== null ? '0px' : '110px',
            overflow: 'hidden',
            transition: 'height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <MysticOracle accent={accent} visible={selectedIdx === null} />
            {/* ✅ RotatingMessage reçoit désormais `t` pour les clés i18n */}
            <RotatingMessage accent={accent} phase={selectedPhase} t={t} />
          </div>

          {/* ═══ ZONE 3 — ÉVENTAIL DE CARTES (hauteur fixe, overflow visible) ═══ */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: `${CARD_ZONE_H}px`,
            flexShrink: 0,
            overflow: 'visible',
          }}>
            {phaseCards.map((actualIndex, localIndex) => (
              <div
                key={`card-${localIndex}`}
                style={{
                  position: 'absolute', bottom: 0, left: '50%',
                  marginLeft: `${-CARD_W / 2}px`,
                  ...getCardStyle(localIndex),
                }}
                onClick={() => handleCardClick(localIndex)}
              >
                {selectedIdx === localIndex && (
                  <div style={{
                    position: 'absolute', inset: '-20px',
                    background: `radial-gradient(ellipse, ${accent}2e 0%, transparent 70%)`,
                    filter: 'blur(16px)', borderRadius: '26px',
                    pointerEvents: 'none', zIndex: -1,
                  }} />
                )}
                <CardBack
                  accent={accent} size={CARD_W}
                  isSelected={selectedIdx === localIndex}
                  isOther={selectedIdx !== null && selectedIdx !== localIndex}
                />
              </div>
            ))}

            {/* "Écoutez votre intuition" — bas de zone cartes, avant tirage */}
            {selectedIdx === null && (
              <p style={{
                position: 'absolute', bottom: '2px', left: 0, right: 0,
                textAlign: 'center',
                fontFamily: "'DM Sans', sans-serif", fontSize: '11.5px', fontWeight: 300,
                color: '#5a6370', fontStyle: 'italic', letterSpacing: '0.05em',
                animation: 'lcg-fade-pulse 3.5s ease-in-out infinite', margin: 0,
              }}>
                {t('lunar.cardGame.hint') || 'Écoutez votre intuition...'}
              </p>
            )}
          </div>

          {/* ═══ ZONE 4 — BOUTON RETOUR (toujours juste sous les cartes) ═══ */}
          <div style={{ width: '100%', padding: '28px 24px 0', textAlign: 'center' }}>
            <button
              onClick={onBack}
              style={{
                background: 'transparent',
                border: 'none',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                fontWeight: 400,
                color: '#c8d4e0',
                letterSpacing: '0.08em',
                padding: '12px 24px',
                cursor: 'pointer',
                transition: 'color 0.2s ease',
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.color = '#ffffff';
              }}
              onTouchEnd={(e) => {
                const el = e.currentTarget;
                setTimeout(() => {
                  if (el) el.style.color = '#c8d4e0';
                }, 200);
              }}
            >
              ← {t('cardgame.back') || 'Retour'}
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
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes lcg-spin       { to { transform: rotate(360deg); } }
        @keyframes lcg-float      { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-9px)} }
        @keyframes lcg-twinkle    { 0%,100%{opacity:0.1} 50%{opacity:0.45} }
        @keyframes lcg-fade-pulse { 0%,100%{opacity:0.4} 50%{opacity:1} }
        @keyframes lcg-glow-pulse { 0%,100%{opacity:0.5} 50%{opacity:1} }

        @keyframes mo-spin-cw     { to { transform: rotate(360deg); } }
        @keyframes mo-spin-ccw    { to { transform: rotate(-360deg); } }
        @keyframes mo-pulse       { 0%,100%{opacity:0.4; transform:scale(1)} 50%{opacity:1; transform:scale(1.3)} }
        @keyframes mo-glow        { 0%,100%{stroke-opacity:0.5} 50%{stroke-opacity:1} }

        * { -webkit-tap-highlight-color: transparent; }
      `}</style>
    </>
  );
}