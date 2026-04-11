// client/src/pages/LunarInterpretation.tsx
// ✅ REDESIGN v2 — Lune webp, SVG custom, glassmorphism, zéro emoji

import { UserSession, OracleCard } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';
import { getSecureRandomInt } from '@/lib/utils';

interface LunarInterpretationProps {
  user: UserSession;
  selectedCard: OracleCard;
  selectedPhase: string;
  onBack: () => void;
  onHome: () => void;
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

// ── SVG "œil lunaire" pour État d'esprit ──
function IconMindset({ accent }: { accent: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Œil */}
      <ellipse cx="11" cy="11" rx="9" ry="5.5" stroke={accent} strokeWidth="1.2" strokeOpacity="0.85"/>
      <circle cx="11" cy="11" r="2.8" fill={accent} fillOpacity="0.25" stroke={accent} strokeWidth="1.1" strokeOpacity="0.9"/>
      <circle cx="11" cy="11" r="1.1" fill={accent} fillOpacity="0.9"/>
      {/* Cils haut */}
      <line x1="11" y1="5" x2="11" y2="3.2" stroke={accent} strokeWidth="0.9" strokeOpacity="0.5"/>
      <line x1="7.5" y1="6.2" x2="6.5" y2="4.7" stroke={accent} strokeWidth="0.9" strokeOpacity="0.5"/>
      <line x1="14.5" y1="6.2" x2="15.5" y2="4.7" stroke={accent} strokeWidth="0.9" strokeOpacity="0.5"/>
    </svg>
  );
}

// ── SVG "étoile à 4 branches" pour Guidance ──
function IconGuidance({ accent }: { accent: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Étoile à 4 branches fines */}
      <path d="M11 2 L12.2 9.8 L11 11 L9.8 9.8 Z" fill={accent} fillOpacity="0.9"/>
      <path d="M11 20 L12.2 12.2 L11 11 L9.8 12.2 Z" fill={accent} fillOpacity="0.9"/>
      <path d="M2 11 L9.8 9.8 L11 11 L9.8 12.2 Z" fill={accent} fillOpacity="0.9"/>
      <path d="M20 11 L12.2 9.8 L11 11 L12.2 12.2 Z" fill={accent} fillOpacity="0.9"/>
      {/* 4 petites étoiles aux coins */}
      <circle cx="4.5" cy="4.5" r="0.9" fill={accent} fillOpacity="0.45"/>
      <circle cx="17.5" cy="4.5" r="0.9" fill={accent} fillOpacity="0.45"/>
      <circle cx="4.5" cy="17.5" r="0.9" fill={accent} fillOpacity="0.45"/>
      <circle cx="17.5" cy="17.5" r="0.9" fill={accent} fillOpacity="0.45"/>
    </svg>
  );
}

export default function LunarInterpretation({
  user,
  selectedCard,
  selectedPhase,
  onBack,
  onHome,
}: LunarInterpretationProps) {
  const { t } = useLanguage();

  const normalizeCardName = (name: string): string =>
    name.toLowerCase().trim().replace(/[''\s-]/g, '');

  const normalizedCard = normalizeCardName(selectedCard.name);
  const accent         = PHASE_ACCENT[selectedPhase] ?? '#a3b4c6';
  const phaseImage     = PHASE_IMAGES[selectedPhase];

  const getRandomMindset = (): string => {
    const vars = [
      t(`cards.lunar.${normalizedCard}.mindset.var1`, { name: user.name }),
      t(`cards.lunar.${normalizedCard}.mindset.var2`, { name: user.name }),
      t(`cards.lunar.${normalizedCard}.mindset.var3`, { name: user.name }),
    ].filter(v => !v.includes('cards.lunar') && v.trim().length > 0);
    return vars.length > 0
      ? vars[getSecureRandomInt(0, vars.length - 1)]
      : t(`cards.lunar.${normalizedCard}.mindset`, { name: user.name });
  };

  const getRandomGuidance = (): string => {
    const vars = [
      t(`cards.lunar.${normalizedCard}.guidance.var1`),
      t(`cards.lunar.${normalizedCard}.guidance.var2`),
      t(`cards.lunar.${normalizedCard}.guidance.var3`),
    ].filter(v => !v.includes('cards.lunar') && v.trim().length > 0);
    return vars.length > 0
      ? vars[getSecureRandomInt(0, vars.length - 1)]
      : t(`cards.lunar.${normalizedCard}.guidance`);
  };

  const mindsetText  = getRandomMindset();
  const guidanceText = getRandomGuidance();
  const cardName     = t(`cards.lunar.${normalizedCard}.name`) || selectedCard.name;
  const phaseName    = t(`lunar.phases.${selectedPhase}.name`);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'transparent',
        backgroundColor: 'transparent',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '72px',
      paddingBottom: '40px',
    }}>

      {/* ── Halo de phase en arrière-plan ── */}
      <div style={{
        position: 'absolute', top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '420px', height: '320px',
        background: `radial-gradient(ellipse at 50% 0%, ${accent}20 0%, transparent 65%)`,
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      {/* ── Étoiles ── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {[...Array(55)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: i % 7 === 0 ? '2px' : '1px',
            height: i % 7 === 0 ? '2px' : '1px',
            borderRadius: '50%',
            background: 'white',
            top: `${(i * 137.508) % 100}%`,
            left: `${(i * 97.3) % 100}%`,
            opacity: i % 7 === 0 ? 0.28 : 0.1,
            animation: `li-twinkle ${2.5 + (i % 4)}s ease-in-out ${(i % 6) * 0.5}s infinite`,
          }} />
        ))}
      </div>

      {/* ══════════════════════════════════════
          ZONE 1 — HEADER : lune + titre + nom carte
      ══════════════════════════════════════ */}
      <div style={{
        position: 'relative', zIndex: 10,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        width: '100%', padding: '0 20px 28px',
        textAlign: 'center',
      }}>

        {/* Lune webp */}
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '20px' }}>
          <div style={{
            position: 'absolute', inset: '-28px', borderRadius: '50%',
            background: `radial-gradient(circle, ${accent}45 0%, transparent 68%)`,
            filter: 'blur(22px)',
            animation: 'li-glow 3.5s ease-in-out infinite',
          }} />
          <img
            src={phaseImage}
            alt={phaseName}
            style={{
              width: '92px', height: '92px',
              objectFit: 'contain',
              position: 'relative',
              filter: `drop-shadow(0 0 24px ${accent}dd) brightness(1.08)`,
              animation: 'li-float 4s ease-in-out infinite',
            }}
          />
        </div>

        {/* Nom de la phase */}
        <h2 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '22px', fontWeight: 700,
          color: '#f0e8d4',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          margin: '0 0 14px',
          textShadow: `0 0 28px ${accent}55, 0 2px 4px rgba(0,0,0,0.9)`,
        }}>
          {phaseName}
        </h2>

        {/* Séparateur */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: '8px', marginBottom: '16px',
        }}>
          <div style={{ width: '48px', height: '0.5px', background: `linear-gradient(90deg, transparent, ${accent}60)` }} />
          <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: accent, opacity: 0.85, boxShadow: `0 0 8px ${accent}` }} />
          <div style={{ width: '48px', height: '0.5px', background: `linear-gradient(270deg, transparent, ${accent}60)` }} />
        </div>

        {/* Nom de la carte — pill glassmorphism */}
        <div style={{
          display: 'inline-block',
          padding: '8px 24px',
          borderRadius: '999px',
          background: `rgba(255,255,255,0.06)`,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: `0.5px solid ${accent}40`,
          boxShadow: `0 0 18px ${accent}18`,
        }}>
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '14px', fontWeight: 600,
            color: accent,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            margin: 0,
            textShadow: `0 0 12px ${accent}60`,
          }}>
            {cardName}
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════
          ZONE 2 — ENCADRÉS glassmorphism
      ══════════════════════════════════════ */}
      <div style={{
        position: 'relative', zIndex: 10,
        width: '100%', maxWidth: '420px',
        padding: '0 20px',
        display: 'flex', flexDirection: 'column', gap: '14px',
      }}>

        {/* Bloc État d'esprit */}
        <div style={{
          borderRadius: '20px',
          background: 'rgba(255,255,255,0.055)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          border: `0.5px solid rgba(255,255,255,0.12)`,
          boxShadow: `0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)`,
          padding: '22px 22px 20px',
        }}>
          {/* En-tête */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px',
          }}>
            <div style={{
              width: '34px', height: '34px',
              borderRadius: '10px',
              background: `${accent}18`,
              border: `0.5px solid ${accent}35`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <IconMindset accent={accent} />
            </div>
            <h3 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '13px', fontWeight: 600,
              color: accent,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              margin: 0,
              textShadow: `0 0 10px ${accent}50`,
            }}>
              {t('lunar.interpretation.mindset') || "État d'esprit"}
            </h3>
          </div>

          {/* Ligne déco */}
          <div style={{
            width: '100%', height: '0.5px',
            background: `linear-gradient(90deg, ${accent}40, transparent)`,
            marginBottom: '14px',
          }} />

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '14.5px', fontWeight: 400,
            lineHeight: '1.75',
            color: '#e8edf3',
            margin: 0,
            letterSpacing: '0.02em',
          }}>
            {mindsetText}
          </p>
        </div>

        {/* Bloc Guidance */}
        <div style={{
          borderRadius: '20px',
          background: `linear-gradient(135deg, ${accent}0d 0%, rgba(255,255,255,0.04) 100%)`,
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          border: `0.5px solid ${accent}28`,
          boxShadow: `0 8px 32px rgba(0,0,0,0.45), 0 0 40px ${accent}0e, inset 0 1px 0 rgba(255,255,255,0.06)`,
          padding: '22px 22px 20px',
        }}>
          {/* En-tête */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px',
          }}>
            <div style={{
              width: '34px', height: '34px',
              borderRadius: '10px',
              background: `${accent}18`,
              border: `0.5px solid ${accent}40`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <IconGuidance accent={accent} />
            </div>
            <h3 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '13px', fontWeight: 600,
              color: accent,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              margin: 0,
              textShadow: `0 0 10px ${accent}60`,
            }}>
              {t('lunar.interpretation.guidance') || 'Guidance'}
            </h3>
          </div>

          {/* Ligne déco */}
          <div style={{
            width: '100%', height: '0.5px',
            background: `linear-gradient(90deg, ${accent}50, transparent)`,
            marginBottom: '14px',
          }} />

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '14.5px', fontWeight: 400,
            lineHeight: '1.75',
            color: '#e8edf3',
            margin: 0,
            letterSpacing: '0.02em',
          }}>
            {guidanceText}
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════
          ZONE 3 — BOUTONS
      ══════════════════════════════════════ */}
      <div style={{
        position: 'relative', zIndex: 10,
        width: '100%', maxWidth: '420px',
        padding: '16px 20px 0',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '6px',
      }}>

        {/* CTA principal — Nouvelle consultation */}
        <button
          onClick={onBack}
          style={{
            width: '100%',
            padding: '15px 0',
            borderRadius: '16px',
            background: `linear-gradient(135deg, ${accent}22 0%, ${accent}10 100%)`,
            border: `0.5px solid ${accent}55`,
            boxShadow: `0 4px 24px ${accent}18, inset 0 1px 0 rgba(255,255,255,0.08)`,
            fontFamily: "'Cinzel', serif",
            fontSize: '13px', fontWeight: 600,
            color: accent,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
          onTouchStart={e => {
            e.currentTarget.style.background = `linear-gradient(135deg, ${accent}35 0%, ${accent}18 100%)`;
            e.currentTarget.style.transform = 'scale(0.98)';
          }}
          onTouchEnd={e => {
            const el = e.currentTarget;
            setTimeout(() => {
              if (el) {
                el.style.background = `linear-gradient(135deg, ${accent}22 0%, ${accent}10 100%)`;
                el.style.transform = 'scale(1)';
              }
            }, 200);
          }}
        >
          {t('interpretation.newConsultation') || 'Nouvelle Consultation'}
        </button>

        {/* Retour secondaire — minimaliste */}
        <button
          onClick={onHome}
          style={{
            background: 'transparent',
            border: 'none',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '13px', fontWeight: 400,
            color: '#b8c4d0',
            letterSpacing: '0.08em',
            padding: '12px 24px',
            cursor: 'pointer',
            transition: 'color 0.2s ease',
          }}
          onTouchStart={e => { e.currentTarget.style.color = '#c8d4e0'; }}
          onTouchEnd={e => {
            const el = e.currentTarget;
            setTimeout(() => { if (el) el.style.color = '#b8c4d0'; }, 200);
          }}
        >
          ← {t('common.back') || 'Retour'}
        </button>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes li-float   { 0%,100%{transform:translateY(0)}   50%{transform:translateY(-9px)} }
        @keyframes li-glow    { 0%,100%{opacity:0.5} 50%{opacity:1} }
        @keyframes li-twinkle { 0%,100%{opacity:0.08} 50%{opacity:0.4} }

        * { -webkit-tap-highlight-color: transparent; }
      `}</style>
    </div>
  );
}