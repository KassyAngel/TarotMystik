// client/src/pages/LunarPhasePage.tsx
// ✅ REDESIGN v6 — CTA visible, typographies renforcées, bouton retour repositionné

import { useState } from 'react';
import { UserSession } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSound } from '@/hooks/useSound';

interface LunarPhasePageProps {
  user: UserSession;
  onPhaseSelect: (phase: string) => void;
  onBack: () => void;
}

export default function LunarPhasePage({
  user,
  onPhaseSelect,
  onBack,
}: LunarPhasePageProps) {
  const { t } = useLanguage();
  const [isNavigating, setIsNavigating] = useState(false);
  const [activePhase, setActivePhase] = useState<string | null>(null);
  const playFlipSound = useSound('Flip-card.wav');

  const phases = [
    {
      id: 'newMoon',
      image: '/Image/luneOracle/nouvelle-lune.webp',
      name: t('lunar.phases.newMoon.name') || 'Nouvelle Lune',
      description: t('lunar.phases.newMoon.description') || 'Intentions & nouveaux départs',
      keyword: t('lunar.phases.newMoon.keyword') || 'Début',
      accent: '#a3b4c6',
      glow: 'rgba(163,180,198,0.15)',
      gradient: 'linear-gradient(135deg, rgba(163,180,198,0.06) 0%, transparent 60%)',
    },
    {
      id: 'firstQuarter',
      image: '/Image/luneOracle/premier-quartier.webp',
      name: t('lunar.phases.firstQuarter.name') || 'Premier Quartier',
      description: t('lunar.phases.firstQuarter.description') || 'Action & décisions',
      keyword: t('lunar.phases.firstQuarter.keyword') || 'Élan',
      accent: '#a5b4fc',
      glow: 'rgba(165,180,252,0.15)',
      gradient: 'linear-gradient(135deg, rgba(165,180,252,0.06) 0%, transparent 60%)',
    },
    {
      id: 'fullMoon',
      image: '/Image/luneOracle/pleine-lune.webp',
      name: t('lunar.phases.fullMoon.name') || 'Pleine Lune',
      description: t('lunar.phases.fullMoon.description') || 'Culmination & révélation',
      keyword: t('lunar.phases.fullMoon.keyword') || 'Clarté',
      accent: '#fcd34d',
      glow: 'rgba(252,211,77,0.15)',
      gradient: 'linear-gradient(135deg, rgba(252,211,77,0.06) 0%, transparent 60%)',
    },
    {
      id: 'lastQuarter',
      image: '/Image/luneOracle/dernier-quartier.webp',
      name: t('lunar.phases.lastQuarter.name') || 'Dernier Quartier',
      description: t('lunar.phases.lastQuarter.description') || 'Libération & introspection',
      keyword: t('lunar.phases.lastQuarter.keyword') || 'Lâcher',
      accent: '#c4b5fd',
      glow: 'rgba(196,181,253,0.15)',
      gradient: 'linear-gradient(135deg, rgba(196,181,253,0.06) 0%, transparent 60%)',
    },
  ];

  const handlePhaseClick = (phaseId: string) => {
    if (isNavigating) return;
    setActivePhase(phaseId);
    playFlipSound();
    setIsNavigating(true);
    setTimeout(() => requestAnimationFrame(() => onPhaseSelect(phaseId)), 180);
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-[transparent] relative overflow-hidden"
      style={{
        opacity: isNavigating ? 0 : 1,
        transition: 'opacity 0.35s ease',
      }}
    >
      {/* ── Fond nébuleuse ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{
          position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
          width: '480px', height: '320px',
          background: 'radial-gradient(ellipse, rgba(100,110,180,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '-10%',
          width: '300px', height: '300px',
          background: 'radial-gradient(circle, rgba(196,181,253,0.04) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }} />
      </div>

      {/* ── Étoiles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(70)].map((_, i) => {
          const big = i % 7 === 0;
          const med = i % 3 === 0;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: big ? '2.5px' : med ? '1.5px' : '1px',
                height: big ? '2.5px' : med ? '1.5px' : '1px',
                top: `${(i * 137.508) % 100}%`,
                left: `${(i * 97.3) % 100}%`,
                opacity: big ? 0.35 : med ? 0.2 : 0.1,
                animationName: 'lp-twinkle',
                animationDuration: `${2.5 + (i % 4) * 0.8}s`,
                animationDelay: `${(i % 7) * 0.4}s`,
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease-in-out',
              }}
            />
          );
        })}
      </div>

      {/* ── Header ── */}
      <div className="text-center pt-14 pb-2 px-5 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div style={{ width: '40px', height: '0.5px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15))' }} />
          <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', boxShadow: '0 0 6px rgba(255,255,255,0.15)' }} />
          <div style={{ width: '60px', height: '0.5px', background: 'rgba(255,255,255,0.08)' }} />
          <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', boxShadow: '0 0 6px rgba(255,255,255,0.15)' }} />
          <div style={{ width: '40px', height: '0.5px', background: 'linear-gradient(270deg, transparent, rgba(255,255,255,0.15))' }} />
        </div>

        <h1 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '20px',
          fontWeight: 700,
          color: '#ede8da',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          margin: '0 0 8px',
          textShadow: '0 0 30px rgba(200,180,140,0.3)',
        }}>
          {t('lunar.phaseSelection.title') || 'Oracle Lunaire'}
        </h1>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '12.5px',
          fontWeight: 400,
          color: '#8a95a4',
          letterSpacing: '0.05em',
          lineHeight: 1.6,
          margin: '0 auto',
          maxWidth: '260px',
        }}>
          {t('lunar.phaseSelection.subtitle') || "Choisissez la phase qui résonne avec votre énergie"}
        </p>
      </div>

      {/* ── Liste des phases ── */}
      <div className="flex flex-col gap-[7px] px-4 pt-4 pb-3 relative z-10 w-full">
        {phases.map((phase, idx) => (
          <button
            key={phase.id}
            onClick={() => handlePhaseClick(phase.id)}
            disabled={isNavigating}
            className="w-full text-left relative overflow-hidden disabled:pointer-events-none"
            style={{
              height: '64px',
              borderRadius: '14px',
              background: activePhase === phase.id ? phase.gradient : 'rgba(255,255,255,0.025)',
              border: activePhase === phase.id
                ? `0.5px solid ${phase.accent}55`
                : '0.5px solid rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'center',
              transition: 'all 0.2s ease',
              animationName: 'lp-slide-in',
              animationDuration: '0.4s',
              animationDelay: `${idx * 0.06}s`,
              animationFillMode: 'both',
              animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.background = phase.glow;
              e.currentTarget.style.borderColor = `${phase.accent}55`;
              e.currentTarget.style.transform = 'scale(0.98)';
            }}
            onTouchEnd={(e) => {
              const el = e.currentTarget;
              setTimeout(() => {
                if (el) {
                  el.style.background = 'rgba(255,255,255,0.025)';
                  el.style.borderColor = 'rgba(255,255,255,0.06)';
                  el.style.transform = '';
                }
              }, 250);
            }}
          >
            {/* Barre latérale */}
            <div style={{
              width: '2.5px',
              alignSelf: 'stretch',
              borderRadius: '0 2px 2px 0',
              background: `linear-gradient(180deg, ${phase.accent}cc 0%, ${phase.accent}44 100%)`,
              flexShrink: 0,
            }} />

            {/* Image lune */}
            <div style={{ width: '54px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={phase.image}
                alt={phase.name}
                style={{
                  width: '36px', height: '36px', objectFit: 'contain',
                  filter: `drop-shadow(0 0 8px ${phase.accent}70) brightness(0.9)`,
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fb = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fb) fb.style.display = 'flex';
                }}
              />
              <div style={{ display: 'none', width: '36px', height: '36px', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>🌙</div>
            </div>

            {/* Texte */}
            <div style={{ flex: 1, minWidth: 0, paddingRight: '4px' }}>
              <span style={{
                display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                fontFamily: "'Cinzel', serif",
                fontSize: '12.5px', fontWeight: 700,
                color: '#e8e0cc', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '3px',
              }}>
                {phase.name}
              </span>
              <span style={{
                display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '11px', fontWeight: 400,
                color: '#7a8494', letterSpacing: '0.02em',
              }}>
                {phase.description}
              </span>
            </div>

            {/* Badge keyword */}
            <div style={{
              flexShrink: 0,
              fontFamily: "'Cinzel', serif",
              fontSize: '8px', fontWeight: 700,
              padding: '3px 9px', borderRadius: '20px',
              border: `0.5px solid ${phase.accent}55`,
              color: phase.accent, letterSpacing: '0.1em', textTransform: 'uppercase',
              whiteSpace: 'nowrap', marginRight: '6px',
            }}>
              {phase.keyword}
            </div>

            {/* Flèche */}
            <div style={{
              flexShrink: 0, paddingRight: '12px',
              fontSize: '20px', color: phase.accent, opacity: 0.6, lineHeight: 1,
            }}>›</div>
          </button>
        ))}
      </div>

      {/* ── CTA Label — bien visible ── */}
      <div className="text-center px-5 pb-3 relative z-10">
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          borderRadius: '20px',
          background: 'rgba(255,255,255,0.04)',
          border: '0.5px solid rgba(255,255,255,0.1)',
        }}>
          <div style={{ width: '16px', height: '0.5px', background: 'rgba(255,255,255,0.25)' }} />
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '9px',
            fontWeight: 600,
            color: '#8a95a8',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            margin: 0,
          }}>
            {t('lunar.phaseSelection.cta') || "Quelle énergie résonne aujourd'hui"}
          </p>
          <div style={{ width: '16px', height: '0.5px', background: 'rgba(255,255,255,0.25)' }} />
        </div>
      </div>

      {/* ── Bouton retour — collé juste après les cartes ── */}
      <div className="px-4 pb-6 relative z-10">
        <button
          onClick={onBack}
          disabled={isNavigating}
          className="w-full py-3 rounded-xl disabled:opacity-30"
          style={{
            background: 'transparent',
            border: '0.5px solid rgba(255,255,255,0.09)',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '13px', fontWeight: 400,
            color: '#6b7280', letterSpacing: '0.06em',
            transition: 'all 0.2s ease',
          }}
        >
          ← {t('common.back') || 'Retour'}
        </button>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes lp-twinkle {
          0%, 100% { opacity: var(--base-op, 0.1); }
          50%       { opacity: calc(var(--base-op, 0.1) * 3.5); }
        }
        @keyframes lp-slide-in {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        * { -webkit-tap-highlight-color: transparent; }
      `}</style>
    </div>
  );
}