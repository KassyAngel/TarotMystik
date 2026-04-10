// client/src/pages/OracleSelection.tsx
// ✅ v5 — Badge gemme animée opaque (shimmer + halo pulsant + icône diamant)

import { UserSession } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSound } from '@/hooks/useSound';
import { useState, useRef, useEffect } from 'react';
import { showInterstitialAd } from '@/admobService';
import AdLoadingScreen from '@/components/AdLoadingScreen';
import wizardImage from '/Image/wizard.webp';
import roueMystikImage from '/Image/RoueMystik.webp';
import loveOracleImage from '/Image/Tarotamour-icone.webp';
import lunarOracleImage from '/Image/Oraclelune-icone.webp';
import loveCalculatorImage from '/Image/Compatibilite-icone.webp';

interface OracleSelectionProps {
  user: UserSession;
  onOracleSelect: (oracleType: string) => void;
  onBack: () => void;
  onHome: () => void;
  isPremium?: boolean;
  onOpenPremium?: () => void;
  onOpenMenu?: () => void;
  /** Ouvre le modal profil */
  onOpenProfile?: () => void;
  bannerHeight?: number;
}

interface OracleItem {
  id: string;
  titleKey: string;
  descKey: string;
  image: string;
  accent: string;
  accentAlt: string;
  borderColor: string;
  borderColorStrong: string;
  bgGradient: string;
  glowColor: string;
  textColor: string;
  badge?: string;
  badgeColor?: string;
  badgeTextColor?: string;
  badgeBorder?: string;
  isWheel?: boolean;
}

const FALLBACKS: Record<string, Record<string, string>> = {
  fr: {
    'oracle.selection.eyebrow': 'Choisissez votre chemin',
    'oracle.selection.title': 'Les Oracles',
    'oracle.carousel.tapHint': 'Toucher pour consulter',
    'oracle.badge.new': 'Nouveau',
    'oracle.badge.bonus': 'Bonus',
    'oracle.back': 'Retour',
  },
  en: {
    'oracle.selection.eyebrow': 'Choose your path',
    'oracle.selection.title': 'The Oracles',
    'oracle.carousel.tapHint': 'Tap to consult',
    'oracle.badge.new': '✦ New',
    'oracle.badge.bonus': '✦ Bonus',
    'oracle.back': 'Back',
  },
  es: {
    'oracle.selection.eyebrow': 'Elige tu camino',
    'oracle.selection.title': 'Los Oráculos',
    'oracle.carousel.tapHint': 'Toca para consultar',
    'oracle.badge.new': '✦ Nuevo',
    'oracle.badge.bonus': '✦ Bonus',
    'oracle.back': 'Atrás',
  },
  de: {
    'oracle.selection.eyebrow': 'Wähle deinen Weg',
    'oracle.selection.title': 'Die Orakel',
    'oracle.carousel.tapHint': 'Tippen zum Befragen',
    'oracle.badge.new': '✦ Neu',
    'oracle.badge.bonus': '✦ Bonus',
    'oracle.back': 'Zurück',
  },
  it: {
    'oracle.selection.eyebrow': 'Scegli il tuo percorso',
    'oracle.selection.title': 'Gli Oracoli',
    'oracle.carousel.tapHint': 'Tocca per consultare',
    'oracle.badge.new': '✦ Nuovo',
    'oracle.badge.bonus': '✦ Bonus',
    'oracle.back': 'Indietro',
  },
};

// ✅ Toutes les images préchargées dès le départ
const ALL_IMAGES = [loveOracleImage, lunarOracleImage, wizardImage, loveCalculatorImage, roueMystikImage];

export default function OracleSelection({
  user,
  onOracleSelect,
  onBack,
  isPremium = false,
  onOpenPremium,
  onOpenMenu,
  onOpenProfile,
  bannerHeight = 0,
}: OracleSelectionProps) {
  const { t, language } = useLanguage();
  const playFlipSound = useSound('Flip-card.wav');
  const [current, setCurrent] = useState(0);
  const [isLoadingAd, setIsLoadingAd] = useState(false);
  const [showLongAdMessage, setShowLongAdMessage] = useState(false);
  // ✅ Suivi du chargement des images pour éviter le flash
  const [imagesReady, setImagesReady] = useState(false);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchDragging = useRef(false);
  const isHorizontalSwipe = useRef<boolean | null>(null);
  const dragOffset = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // ✅ Polices
  useEffect(() => {
    if (!document.getElementById('cinzel-font')) {
      const link = document.createElement('link');
      link.id = 'cinzel-font';
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Raleway:wght@300;400;500&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  // ✅ Préchargement agressif de toutes les images dès le montage
  useEffect(() => {
    let loaded = 0;
    const total = ALL_IMAGES.length;

    const onLoad = () => {
      loaded++;
      if (loaded >= total) setImagesReady(true);
    };

    ALL_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
      // Si déjà en cache (complete), compter immédiatement
      if (img.complete) {
        onLoad();
      } else {
        img.onload = onLoad;
        img.onerror = onLoad; // on continue même si une image échoue
      }
    });

    // Fallback : afficher après 1.2s max même si tout n'est pas chargé
    const fallback = setTimeout(() => setImagesReady(true), 1200);
    return () => clearTimeout(fallback);
  }, []);

  const tr = (key: string): string => {
    const val = t(key);
    if (val === key || !val) {
      const lang = (language as string) || 'fr';
      return FALLBACKS[lang]?.[key] ?? FALLBACKS['fr']?.[key] ?? key;
    }
    return val;
  };

  const oracles: OracleItem[] = [
    {
      id: 'loveOracle',
      titleKey: 'oracle.loveOracle.title',
      descKey: 'oracle.loveOracle.description',
      image: loveOracleImage,
      accent: '#c084fc',
      accentAlt: '#a855f7',
      borderColor: 'rgba(192,132,252,0.22)',
      borderColorStrong: 'rgba(192,132,252,0.52)',
      bgGradient:
        'linear-gradient(160deg, rgba(109,40,217,0.18) 0%, rgba(88,28,135,0.10) 60%, rgba(6,9,23,0.0) 100%)',
      glowColor: 'rgba(168,85,247,0.28)',
      textColor: '#e9d5ff',
    },
    {
      id: 'lunar',
      titleKey: 'oracle.lunar.title',
      descKey: 'oracle.lunar.description',
      image: lunarOracleImage,
      accent: '#7dd3fc',
      accentAlt: '#38bdf8',
      borderColor: 'rgba(125,211,252,0.20)',
      borderColorStrong: 'rgba(125,211,252,0.48)',
      bgGradient:
        'linear-gradient(160deg, rgba(29,78,216,0.18) 0%, rgba(15,55,140,0.10) 60%, rgba(6,9,23,0.0) 100%)',
      glowColor: 'rgba(56,189,248,0.24)',
      textColor: '#bae6fd',
    },
    {
      id: 'wizard',
      titleKey: 'wizard.title',
      descKey: 'oracle.wizard.description',
      image: wizardImage,
      accent: '#a5b4fc',
      accentAlt: '#818cf8',
      borderColor: 'rgba(165,180,252,0.20)',
      borderColorStrong: 'rgba(165,180,252,0.46)',
      bgGradient:
        'linear-gradient(160deg, rgba(67,56,202,0.18) 0%, rgba(49,46,129,0.10) 60%, rgba(6,9,23,0.0) 100%)',
      glowColor: 'rgba(129,140,248,0.24)',
      textColor: '#e0e7ff',
    },
    {
      id: 'loveCalculator',
      titleKey: 'oracle.loveCalculator.title',
      descKey: 'oracle.loveCalculator.description',
      image: loveCalculatorImage,
      accent: '#f0abfc',
      accentAlt: '#e879f9',
      borderColor: 'rgba(240,171,252,0.20)',
      borderColorStrong: 'rgba(240,171,252,0.50)',
      bgGradient:
        'linear-gradient(160deg, rgba(134,25,143,0.18) 0%, rgba(112,26,117,0.10) 60%, rgba(6,9,23,0.0) 100%)',
      glowColor: 'rgba(232,121,249,0.26)',
      textColor: '#fae8ff',
      badge: 'oracle.badge.new',
      badgeColor: 'rgba(168,28,185,0.28)',
      badgeTextColor: '#f0abfc',
      badgeBorder: 'rgba(240,171,252,0.50)',
    },
    {
      // ✅ v4 — Violet mystique profond, cohérent avec le thème général
      id: 'wheel',
      titleKey: 'oracle.wheel.title',
      descKey: 'oracle.wheel.shortDescription',
      image: roueMystikImage,
      accent: '#818cf8',
      accentAlt: '#6366f1',
      borderColor: 'rgba(129,140,248,0.22)',
      borderColorStrong: 'rgba(129,140,248,0.50)',
      bgGradient:
        'linear-gradient(160deg, rgba(67,56,202,0.22) 0%, rgba(55,48,163,0.14) 60%, rgba(6,9,23,0.0) 100%)',
      glowColor: 'rgba(99,102,241,0.30)',
      textColor: '#e0e7ff',
      badge: 'oracle.badge.bonus',
      badgeColor: 'rgba(55,48,163,0.32)',
      badgeTextColor: '#a5b4fc',
      badgeBorder: 'rgba(129,140,248,0.48)',
      isWheel: true,
    },
  ];

  const goTo = (i: number) => {
    const clamped = Math.max(0, Math.min(oracles.length - 1, i));
    setCurrent(clamped);
    if (trackRef.current) {
      trackRef.current.style.transition = 'transform 0.42s cubic-bezier(0.25,0.46,0.45,0.94)';
      trackRef.current.style.transform = `translateX(-${clamped * 100}%)`;
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchDragging.current = true;
    isHorizontalSwipe.current = null;
    dragOffset.current = 0;
    if (trackRef.current) trackRef.current.style.transition = 'none';
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchDragging.current || !trackRef.current) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;

    if (isHorizontalSwipe.current === null && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
      isHorizontalSwipe.current = Math.abs(dx) > Math.abs(dy);
    }

    if (isHorizontalSwipe.current === true) {
      e.preventDefault();
      dragOffset.current = dx;
      const base = -current * (trackRef.current.parentElement?.offsetWidth ?? window.innerWidth);
      trackRef.current.style.transform = `translateX(${base + dx}px)`;
    }
  };

  const onTouchEnd = () => {
    touchDragging.current = false;
    if (isHorizontalSwipe.current === true) {
      if (dragOffset.current < -60) goTo(current + 1);
      else if (dragOffset.current > 60) goTo(current - 1);
      else goTo(current);
    }
    dragOffset.current = 0;
    isHorizontalSwipe.current = null;
  };

  const handleOracleSelect = async (oracle: OracleItem) => {
    playFlipSound();
    if (oracle.isWheel && !isPremium) {
      let msgTimeout: ReturnType<typeof setTimeout> | null = null;
      try {
        const adPromise = showInterstitialAd('wheel_entry');
        const loadTimeout = setTimeout(() => {
          setIsLoadingAd(true);
          msgTimeout = setTimeout(() => setShowLongAdMessage(true), 45000);
        }, 500);
        await adPromise;
        clearTimeout(loadTimeout);
        if (msgTimeout) clearTimeout(msgTimeout);
        setIsLoadingAd(false);
        setShowLongAdMessage(false);
        setTimeout(() => onOracleSelect(oracle.id), 300);
      } catch {
        if (msgTimeout) clearTimeout(msgTimeout);
        setIsLoadingAd(false);
        setShowLongAdMessage(false);
        setTimeout(() => onOracleSelect(oracle.id), 300);
      }
    } else {
      setTimeout(() => onOracleSelect(oracle.id), 300);
    }
  };

  if (isLoadingAd) {
    return <AdLoadingScreen showLongMessage={showLongAdMessage} adType="interstitial" />;
  }

  const active = oracles[current];
  const bottomSafePad = bannerHeight > 0 ? bannerHeight + 16 : 24;

  return (
    <>
      <style>{`
        @keyframes oracleHaloPulse {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50%       { opacity: 0.80; transform: scale(1.10); }
        }
        @keyframes oracleCardFadeIn {
          from { opacity: 0; transform: scale(0.97) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .oracle-ui-btn {
          min-height: unset !important;
          min-width:  unset !important;
          padding: 0 !important;
          line-height: 1 !important;
          box-sizing: content-box !important;
        }
        .oracle-back-btn {
          min-height: unset !important;
          min-width:  unset !important;
        }
        .oracle-card-ready {
          animation: oracleCardFadeIn 0.38s ease forwards;
        }

        /* ── Badge ruban horizontal ── */
        @keyframes badgeRibbonShimmer {
          0%   { transform: translateX(-160%) skewX(-15deg); }
          100% { transform: translateX(400%)  skewX(-15deg); }
        }
        .oracle-badge-ribbon {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 4px 14px;
          /* ✅ Pas de border-radius → effet ruban/bandeau droit */
          border-radius: 2px;
          font-family: 'Cinzel', serif;
          font-size: 7.5px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          white-space: nowrap;
          overflow: hidden;
          cursor: default;
          user-select: none;
        }
        /* Filets haut et bas uniquement (style ruban) */
        .oracle-badge-ribbon::before {
          content: '';
          position: absolute;
          inset: 0;
          border-top: 1px solid var(--ribbon-line);
          border-bottom: 1px solid var(--ribbon-line);
          pointer-events: none;
        }
        /* Sweep lumineux traversant */
        .oracle-badge-ribbon::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          left: 0; width: 28%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.22),
            transparent
          );
          animation: badgeRibbonShimmer 4s ease-in-out infinite;
          pointer-events: none;
        }
      `}</style>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100dvh',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: "'Raleway', sans-serif",
          background: '#060917',
          paddingBottom: bottomSafePad,
        }}
      >
        {/* Fond étoilé */}
        <svg
          style={{
            position: 'fixed', inset: 0,
            width: '100%', height: '100%',
            pointerEvents: 'none', zIndex: 0,
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 50 }).map((_, i) => {
            const x = (((i * 73) % 97) / 97) * 100;
            const y = (((i * 53) % 89) / 89) * 100;
            const r = i % 5 === 0 ? 1.8 : i % 3 === 0 ? 1.3 : 0.9;
            return (
              <circle key={i} cx={`${x}%`} cy={`${y}%`} r={r} fill="white" opacity={0.18}>
                <animate
                  attributeName="opacity"
                  values="0.06;0.40;0.06"
                  dur={`${2.5 + (i % 4) * 0.7}s`}
                  begin={`${(i % 5) * 0.6}s`}
                  repeatCount="indefinite"
                />
              </circle>
            );
          })}
        </svg>

        {/* Orbs couleur active */}
        <div style={{
          position: 'fixed', width: 420, height: 420,
          top: -140, left: '50%', transform: 'translateX(-50%)',
          background: `radial-gradient(circle, ${active.accent}, ${active.accentAlt})`,
          borderRadius: '50%', filter: 'blur(130px)', opacity: 0.13,
          transition: 'background 0.8s ease', pointerEvents: 'none', zIndex: 0,
        }} />
        <div style={{
          position: 'fixed', width: 220, height: 220,
          bottom: 80, right: -70,
          background: active.accentAlt,
          borderRadius: '50%', filter: 'blur(100px)', opacity: 0.08,
          transition: 'background 0.8s ease', pointerEvents: 'none', zIndex: 0,
        }} />

        {/* ── HEADER ── */}
        {/* ✅ v4 : paddingTop augmenté de 14px → 22px pour mieux respirer sous la TopBar */}
        <div style={{
          position: 'relative', zIndex: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '28px 18px 0',
        height: 64,
          flexShrink: 0,
        }}>
          {/* Burger */}
          <button
            className="oracle-ui-btn"
            onClick={onOpenMenu}
            aria-label="Menu"
            style={{
              width: 38, height: 38,
              background: 'rgba(255,255,255,0.05)',
              border: '0.5px solid rgba(255,255,255,0.12)',
              borderRadius: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
              <rect width="15" height="1.5" rx="0.75" fill="rgba(255,255,255,0.55)" />
              <rect y="4.5" width="10" height="1.5" rx="0.75" fill="rgba(255,255,255,0.55)" />
              <rect y="9" width="6" height="1.5" rx="0.75" fill="rgba(255,255,255,0.55)" />
            </svg>
          </button>

          {/* Avatar / Profil */}
          <button
            className="oracle-ui-btn"
            onClick={onOpenProfile}
            aria-label="Profil"
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.05)',
              border: '0.5px solid rgba(255,255,255,0.12)',
              borderRadius: 20, padding: '5px 12px 5px 6px',
              cursor: 'pointer', fontFamily: 'inherit',
            }}
          >
            <div style={{
              width: 26, height: 26,
              background: `linear-gradient(135deg, ${active.accent}dd, ${active.accentAlt}88)`,
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 10, fontWeight: 700, color: '#fff',
              border: `1px solid ${active.accent}55`,
              transition: 'background 0.5s',
              flexShrink: 0,
            }}>
              {user?.name?.slice(0, 2).toUpperCase() || '??'}
            </div>
            <span style={{ fontSize: 18, lineHeight: 1 }}>
              {user?.zodiacSign?.symbol || '✨'}
            </span>
          </button>
        </div>

        {/* ── Titre ── */}
        {/* ✅ v4 : padding top augmenté de 8px → 16px pour mieux centrer visuellement */}
        <div style={{
          position: 'relative', zIndex: 10,
          textAlign: 'center',
        padding: '16px 24px 4px',
        marginTop: 10,
          flexShrink: 0,
        }}>
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 13,
            letterSpacing: '0.30em',
            textTransform: 'uppercase',
            color: active.accent,
            opacity: 0.90,
            marginBottom: 12,
            transition: 'color 0.5s',
          }}>
            {tr('oracle.selection.eyebrow')}
          </p>
          <h1 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 28, fontWeight: 700,
            color: '#f8fafc',
            letterSpacing: '0.04em', lineHeight: 1.15,
            textShadow: `0 0 50px ${active.accent}55`,
            transition: 'text-shadow 0.6s',
            margin: 0,
          }}>
            {tr('oracle.selection.title')}
          </h1>
          <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: 7, marginTop: 8,
          }}>
            <div style={{ height: 1, width: 44, background: `linear-gradient(90deg, transparent, ${active.accent}66)`, transition: 'background 0.5s' }} />
            <div style={{ width: 3, height: 3, borderRadius: '50%', background: active.accent, opacity: 0.7, transition: 'background 0.5s' }} />
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: active.accent, opacity: 0.35, border: `1px solid ${active.accent}88`, transition: 'background 0.5s' }} />
            <div style={{ width: 3, height: 3, borderRadius: '50%', background: active.accent, opacity: 0.7, transition: 'background 0.5s' }} />
            <div style={{ height: 1, width: 44, background: `linear-gradient(270deg, transparent, ${active.accent}66)`, transition: 'background 0.5s' }} />
          </div>
        </div>

        {/* ── CARROUSEL ── */}
        <div
          style={{
            position: 'relative', zIndex: 10,
            // ✅ v4 : légèrement plus de hauteur grâce à la réduction du padding bas
            height: 'min(440px, calc(100dvh - 230px))',
            minHeight: 300,
            overflow: 'hidden',
            flexShrink: 0,
            touchAction: 'pan-y',
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            ref={trackRef}
            style={{
              display: 'flex',
              height: '100%',
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {oracles.map((oracle, idx) => (
              <div
                key={oracle.id}
                style={{
                  minWidth: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '14px 24px 4px',
                }}
              >
                {/* ── Carte ── */}
                <div
                  // ✅ v4 : classe d'animation ajoutée dès que les images sont prêtes
                  className={imagesReady ? 'oracle-card-ready' : ''}
                  onClick={() => handleOracleSelect(oracle)}
                  onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.97)'; }}
                  onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                  style={{
                    // ✅ opacity 0 jusqu'à ce que les images soient prêtes, pour éviter le flash
                    opacity: imagesReady ? undefined : 0,
                    transition: 'transform 0.15s ease',
                    position: 'relative',
                    width: '100%',
                    maxWidth: 300,
                    height: '100%',
                    maxHeight: 420,
                    background: oracle.bgGradient,
                    border: `1.5px solid ${oracle.borderColorStrong}`,
                    borderRadius: 28,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '36px 28px 26px',
                    cursor: 'pointer',
                    overflow: 'visible',
                    boxShadow: [
                      `0 0 0 1px ${oracle.borderColor}`,
                      `0 12px 50px ${oracle.glowColor}`,
                      `0 2px 8px rgba(0,0,0,0.5)`,
                      `inset 0 1px 0 rgba(255,255,255,0.08)`,
                      `inset 0 -1px 0 rgba(0,0,0,0.20)`,
                    ].join(', '),
                  }}
                >
                  {/* Glow radial interne */}
                  <div style={{
                    position: 'absolute', inset: 0, borderRadius: 26,
                    background: `radial-gradient(ellipse at 50% 25%, ${oracle.glowColor}, transparent 62%)`,
                    pointerEvents: 'none',
                  }} />

                  {/* Shine haut */}
                  <div style={{
                    position: 'absolute', top: 0, left: '12%', right: '12%', height: 1.5,
                    background: `linear-gradient(90deg, transparent, ${oracle.accent}aa, transparent)`,
                    borderRadius: 1,
                  }} />

                  {/* Coins décoratifs */}
                  {([
                    { top: 14, left: 14,     bT: true, bL: true, br: '4px 0 0 0' },
                    { top: 14, right: 14,    bT: true, bR: true, br: '0 4px 0 0' },
                    { bottom: 14, left: 14,  bB: true, bL: true, br: '0 0 0 4px' },
                    { bottom: 14, right: 14, bB: true, bR: true, br: '0 0 4px 0' },
                  ] as Array<{
                    top?: number; bottom?: number; left?: number; right?: number;
                    bT?: boolean; bB?: boolean; bL?: boolean; bR?: boolean; br: string;
                  }>).map((c, ci) => (
                    <div key={ci} style={{
                      position: 'absolute',
                      top: c.top, bottom: c.bottom, left: c.left, right: c.right,
                      width: 16, height: 16,
                      borderTop:    c.bT ? `1.5px solid ${oracle.accent}44` : undefined,
                      borderBottom: c.bB ? `1.5px solid ${oracle.accent}44` : undefined,
                      borderLeft:   c.bL ? `1.5px solid ${oracle.accent}44` : undefined,
                      borderRight:  c.bR ? `1.5px solid ${oracle.accent}44` : undefined,
                      borderRadius: c.br,
                    }} />
                  ))}

                  {/* ── Badge ruban horizontal ── */}
                  {oracle.badge && (
                    <div style={{
                      position: 'absolute', top: -13, left: '50%',
                      transform: 'translateX(-50%)', zIndex: 2,
                    }}>
                      <span
                        className="oracle-badge-ribbon"
                        style={{
                          // ✅ Dégradé sombre → couleur centrale → sombre (effet ruban)
                          background: `linear-gradient(90deg,
                            rgba(6,9,23,0.92) 0%,
                            ${oracle.accentAlt}cc 35%,
                            ${oracle.accent}dd 50%,
                            ${oracle.accentAlt}cc 65%,
                            rgba(6,9,23,0.92) 100%
                          )`,
                          color: '#ffffff',
                          // Ombre portée discrète sous le ruban
                          boxShadow: `0 2px 14px ${oracle.accentAlt}55`,
                          textShadow: `0 1px 6px rgba(0,0,0,0.7)`,
                          // Filets haut/bas dans la couleur accent
                          ['--ribbon-line' as any]: `${oracle.accent}99`,
                        } as React.CSSProperties}
                      >
                        ✦ {tr(oracle.badge)}
                      </span>
                    </div>
                  )}

                  {/* Image — ✅ eager + fetchPriority high pour la 1re image, lazy pour les suivantes */}
                  <div style={{
                    position: 'relative',
                    width: 110, height: 110,
                    borderRadius: '50%',
                    flexShrink: 0,
                    marginBottom: 20,
                  }}>
                    <div style={{
                      position: 'absolute', inset: -8, borderRadius: '50%',
                      background: `radial-gradient(circle, ${oracle.accent}28, transparent 65%)`,
                      animation: 'oracleHaloPulse 3.2s ease-in-out infinite',
                    }} />
                    <div style={{
                      position: 'absolute', inset: 0, borderRadius: '50%',
                      border: `1.5px solid ${oracle.borderColorStrong}`,
                      boxShadow: `0 0 22px ${oracle.glowColor}, inset 0 0 10px ${oracle.accent}18`,
                      zIndex: 2, pointerEvents: 'none',
                    }} />
                    <img
                      src={oracle.image}
                      alt={t(oracle.titleKey)}
                      // ✅ Toutes les images sont eager car toutes préchargées
                      loading="eager"
                      // ✅ fetchPriority high pour la 1re et 2e carte (visibles d'emblée)
                      fetchPriority={idx <= 1 ? 'high' : 'auto'}
                      decoding="async"
                      style={{
                        width: '100%', height: '100%',
                        objectFit: 'cover', borderRadius: '50%',
                        filter: 'brightness(1.08) saturate(1.12)',
                        display: 'block',
                        // ✅ Transition douce à l'apparition
                        transition: 'opacity 0.3s ease',
                      }}
                    />
                  </div>

                  {/* Titre */}
                  <h2 style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 18, fontWeight: 700,
                    color: oracle.textColor,
                    letterSpacing: '0.04em', lineHeight: 1.2,
                    margin: '0 0 8px 0',
                    textShadow: `0 0 24px ${oracle.accent}66`,
                  }}>
                    {t(oracle.titleKey)}
                  </h2>

                  {/* Séparateur */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                    <div style={{ height: 1, width: 28, background: `linear-gradient(90deg, transparent, ${oracle.accent}44)` }} />
                    <div style={{ width: 3, height: 3, borderRadius: '50%', background: oracle.accent, opacity: 0.5 }} />
                    <div style={{ height: 1, width: 28, background: `linear-gradient(270deg, transparent, ${oracle.accent}44)` }} />
                  </div>

                  {/* Description */}
                  <p style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: 12.5, fontWeight: 400,
                    color: 'rgba(226,232,240,0.60)',
                    maxWidth: 210, lineHeight: 1.70,
                    letterSpacing: '0.01em', margin: 0,
                  }}>
                    {t(oracle.descKey)}
                  </p>

                  {/* Tap hint */}
                  <p style={{
                    fontFamily: "'Cinzel', serif",
                    marginTop: 16, marginBottom: 0,
                    fontSize: 7.5, fontWeight: 400,
                    color: `${oracle.accent}66`,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                  }}>
                    {tr('oracle.carousel.tapHint')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Dots ── */}
        <div style={{
          position: 'relative', zIndex: 10,
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          gap: 7, padding: '10px 0 6px', flexShrink: 0,
        }}>
          {oracles.map((_, i) => (
            <button
              key={i}
              className="oracle-ui-btn"
              onClick={() => goTo(i)}
              style={{
                height: 6,
                width: i === current ? 24 : 6,
                borderRadius: i === current ? 3 : '50%',
                background: i === current ? active.accent : 'rgba(255,255,255,0.18)',
                border: 'none', cursor: 'pointer',
                transition: 'all 0.35s ease',
                boxShadow: i === current ? `0 0 10px ${active.accent}99` : 'none',
                flexShrink: 0, display: 'block',
              }}
            />
          ))}
        </div>

        {/* ── Retour ── */}
        <div style={{
          position: 'relative', zIndex: 10,
          display: 'flex', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <button
            className="oracle-back-btn"
            onClick={onBack}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: "'Raleway', sans-serif",
              fontSize: 12, fontWeight: 400,
              color: 'rgba(148,163,184,0.38)',
              display: 'flex', alignItems: 'center', gap: 6,
              letterSpacing: '0.06em',
              transition: 'color 0.2s',
              padding: '4px 8px',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(148,163,184,0.75)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(148,163,184,0.38)'; }}
          >
            <span style={{ fontSize: 14 }}>←</span>
            <span>{tr('oracle.back')}</span>
          </button>
        </div>
      </div>
    </>
  );
}