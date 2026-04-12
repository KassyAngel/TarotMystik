// client/src/pages/OracleSelection.tsx
// ✅ v9 — Swipe ultra-perf : zéro React pendant le drag, GPU composite only
// Fix vieux smartphones : passive:false manuel, pas de setState dans onTouchMove,
// orbs via CSS custom properties (pas de transition:background), momentum au lâcher

import { UserSession } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSound } from '@/hooks/useSound';
import { useState, useRef, useEffect, useCallback } from 'react';
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
    'oracle.badge.new': 'New',
    'oracle.badge.bonus': 'Bonus',
    'oracle.back': 'Back',
  },
  es: {
    'oracle.selection.eyebrow': 'Elige tu camino',
    'oracle.selection.title': 'Los Oráculos',
    'oracle.carousel.tapHint': 'Toca para consultar',
    'oracle.badge.new': 'Nuevo',
    'oracle.badge.bonus': 'Bonus',
    'oracle.back': 'Atrás',
  },
  de: {
    'oracle.selection.eyebrow': 'Wähle deinen Weg',
    'oracle.selection.title': 'Die Orakel',
    'oracle.carousel.tapHint': 'Tippen zum Befragen',
    'oracle.badge.new': 'Neu',
    'oracle.badge.bonus': 'Bonus',
    'oracle.back': 'Zurück',
  },
  it: {
    'oracle.selection.eyebrow': 'Scegli il tuo percorso',
    'oracle.selection.title': 'Gli Oracoli',
    'oracle.carousel.tapHint': 'Tocca per consultare',
    'oracle.badge.new': 'Nuovo',
    'oracle.badge.bonus': 'Bonus',
    'oracle.back': 'Indietro',
  },
};

// ✅ Préchargement statique au niveau module
const ORACLE_IMAGES = [loveOracleImage, lunarOracleImage, wizardImage, loveCalculatorImage, roueMystikImage];
if (typeof window !== 'undefined') {
  ORACLE_IMAGES.forEach((src) => {
    const img = new window.Image();
    img.decoding = 'async';
    img.src = src;
  });
}

// ✅ ORACLES définis hors composant — pas de recréation à chaque render
const ORACLES: OracleItem[] = [
  {
    id: 'loveOracle', titleKey: 'oracle.loveOracle.title', descKey: 'oracle.loveOracle.description',
    image: loveOracleImage, accent: '#c084fc', accentAlt: '#a855f7',
    borderColor: 'rgba(192,132,252,0.22)', borderColorStrong: 'rgba(192,132,252,0.52)',
    bgGradient: 'linear-gradient(160deg, rgba(109,40,217,0.18) 0%, rgba(88,28,135,0.10) 60%, rgba(6,9,23,0.0) 100%)',
    glowColor: 'rgba(168,85,247,0.28)', textColor: '#e9d5ff',
  },
  {
    id: 'lunar', titleKey: 'oracle.lunar.title', descKey: 'oracle.lunar.description',
    image: lunarOracleImage, accent: '#7dd3fc', accentAlt: '#38bdf8',
    borderColor: 'rgba(125,211,252,0.20)', borderColorStrong: 'rgba(125,211,252,0.48)',
    bgGradient: 'linear-gradient(160deg, rgba(29,78,216,0.18) 0%, rgba(15,55,140,0.10) 60%, rgba(6,9,23,0.0) 100%)',
    glowColor: 'rgba(56,189,248,0.24)', textColor: '#bae6fd',
  },
  {
    id: 'wizard', titleKey: 'wizard.title', descKey: 'oracle.wizard.description',
    image: wizardImage, accent: '#a5b4fc', accentAlt: '#818cf8',
    borderColor: 'rgba(165,180,252,0.20)', borderColorStrong: 'rgba(165,180,252,0.46)',
    bgGradient: 'linear-gradient(160deg, rgba(67,56,202,0.18) 0%, rgba(49,46,129,0.10) 60%, rgba(6,9,23,0.0) 100%)',
    glowColor: 'rgba(129,140,248,0.24)', textColor: '#e0e7ff',
  },
  {
    id: 'loveCalculator', titleKey: 'oracle.loveCalculator.title', descKey: 'oracle.loveCalculator.description',
    image: loveCalculatorImage, accent: '#f0abfc', accentAlt: '#e879f9',
    borderColor: 'rgba(240,171,252,0.20)', borderColorStrong: 'rgba(240,171,252,0.50)',
    bgGradient: 'linear-gradient(160deg, rgba(134,25,143,0.18) 0%, rgba(112,26,117,0.10) 60%, rgba(6,9,23,0.0) 100%)',
    glowColor: 'rgba(232,121,249,0.26)', textColor: '#fae8ff', badge: 'oracle.badge.new',
  },
  {
    id: 'wheel', titleKey: 'oracle.wheel.title', descKey: 'oracle.wheel.shortDescription',
    image: roueMystikImage, accent: '#818cf8', accentAlt: '#6366f1',
    borderColor: 'rgba(129,140,248,0.22)', borderColorStrong: 'rgba(129,140,248,0.50)',
    bgGradient: 'linear-gradient(160deg, rgba(67,56,202,0.22) 0%, rgba(55,48,163,0.14) 60%, rgba(6,9,23,0.0) 100%)',
    glowColor: 'rgba(99,102,241,0.30)', textColor: '#e0e7ff', badge: 'oracle.badge.bonus', isWheel: true,
  },
];

const BADGE_ACCENT: Record<string, { bg: string; line: string }> = {
  loveCalculator: {
    bg: 'linear-gradient(90deg,rgba(6,9,23,0.92)0%,rgba(168,28,185,0.80)35%,rgba(240,171,252,0.90)50%,rgba(168,28,185,0.80)65%,rgba(6,9,23,0.92)100%)',
    line: 'rgba(240,171,252,0.80)',
  },
  wheel: {
    bg: 'linear-gradient(90deg,rgba(6,9,23,0.92)0%,rgba(79,70,229,0.80)35%,rgba(165,180,252,0.90)50%,rgba(79,70,229,0.80)65%,rgba(6,9,23,0.92)100%)',
    line: 'rgba(165,180,252,0.80)',
  },
};

const TOTAL = ORACLES.length;

export default function OracleSelection({
  user,
  onOracleSelect,
  onBack,
  isPremium = false,
  onOpenMenu,
  onOpenProfile,
  bannerHeight = 0,
}: OracleSelectionProps) {
  const { t, language } = useLanguage();
  const playFlipSound = useSound('Flip-card.wav');

  // ✅ React state UNIQUEMENT pour ce qui affecte le rendu React (dots, couleurs header)
  const [current, setCurrent] = useState(0);
  const [isLoadingAd, setIsLoadingAd] = useState(false);
  const [showLongAdMessage, setShowLongAdMessage] = useState(false);

  // ── Refs swipe — lecture/écriture directe, zéro setState pendant le drag ──
  const trackRef       = useRef<HTMLDivElement>(null);
  const containerRef   = useRef<HTMLDivElement>(null);
  const rootRef        = useRef<HTMLDivElement>(null);
  const touchStartX    = useRef(0);
  const touchStartY    = useRef(0);
  const touchStartTime = useRef(0); // ✅ pour le calcul de vélocité
  const isDragging     = useRef(false);
  const isHoriz        = useRef<boolean | null>(null);
  const dragOffset     = useRef(0);
  const currentRef     = useRef(0);
  const containerW     = useRef(0);

  // ✅ Polices
  useEffect(() => {
    if (!document.getElementById('cinzel-font')) {
      const link = document.createElement('link');
      link.id   = 'cinzel-font';
      link.rel  = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Raleway:wght@300;400;500&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  // ✅ Mesure largeur une seule fois + resize
  useEffect(() => {
    const measure = () => {
      containerW.current = containerRef.current?.offsetWidth ?? window.innerWidth;
    };
    measure();
    window.addEventListener('resize', measure, { passive: true });
    return () => window.removeEventListener('resize', measure);
  }, []);

  // ✅ Listener touchmove natif avec passive:false
  // React synthétique ne peut pas appeler preventDefault sur passive listener (warning chrome)
  // On gère UNIQUEMENT la prévention du scroll ici — le déplacement reste dans onTouchMove React
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const preventScroll = (e: TouchEvent) => {
      if (isHoriz.current === true) e.preventDefault();
    };
    el.addEventListener('touchmove', preventScroll, { passive: false });
    return () => el.removeEventListener('touchmove', preventScroll);
  }, []);

  const tr = useCallback((key: string): string => {
    const val = t(key);
    if (val === key || !val) {
      const lang = (language as string) || 'fr';
      return FALLBACKS[lang]?.[key] ?? FALLBACKS['fr']?.[key] ?? key;
    }
    return val;
  }, [t, language]);

  // ✅ Orbs via CSS custom properties — PAS de transition:background (force repaint)
  // Le navigateur interpole les custom properties sans déclencher layout ni paint
  const updateOrbs = useCallback((idx: number) => {
    const o = ORACLES[idx];
    if (!o || !rootRef.current) return;
    rootRef.current.style.setProperty('--orb1-color-a', o.accent);
    rootRef.current.style.setProperty('--orb1-color-b', o.accentAlt);
    rootRef.current.style.setProperty('--orb2-color', o.accentAlt);
  }, []);

  // ✅ goTo : anime le track via DOM direct, setState seulement après
  const goTo = useCallback((i: number, animate = true, velocityPx = 0) => {
    const clamped = Math.max(0, Math.min(TOTAL - 1, i));
    currentRef.current = clamped;

    const track = trackRef.current;
    if (!track) return;

    // ✅ Durée adaptée à la vélocité — plus rapide si l'utilisateur a swipé fort
    // Même sensation qu'Instagram/TikTok : le momentum est respecté
    const velocityFactor = Math.min(Math.abs(velocityPx) / 1500, 0.4);
    const duration = animate ? Math.max(0.18, 0.32 - velocityFactor) : 0;

    track.style.transition = animate
      ? `transform ${duration}s cubic-bezier(0.25,0.46,0.45,0.94)`
      : 'none';
    track.style.transform = `translate3d(${-(clamped * containerW.current)}px,0,0)`;

    // ✅ setCurrent APRÈS l'animation pour ne pas bloquer le thread JS pendant le swipe
    // requestAnimationFrame garantit que le GPU a démarré l'animation avant React
    requestAnimationFrame(() => {
      setCurrent(clamped);
      updateOrbs(clamped);
    });
  }, [updateOrbs]);

  // ✅ onTouchStart : capture position + timestamp pour la vélocité
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartX.current   = touch.clientX;
    touchStartY.current   = touch.clientY;
    touchStartTime.current = performance.now();
    isDragging.current    = true;
    isHoriz.current       = null;
    dragOffset.current    = 0;

    const track = trackRef.current;
    if (track) track.style.transition = 'none';
  }, []);

  // ✅ onTouchMove : AUCUN setState, AUCUN React update
  // Uniquement : calcul direction + transform DOM direct
  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;

    // Décision direction — seuil bas pour réactivité immédiate
    if (isHoriz.current === null) {
      const adx = Math.abs(dx);
      const ady = Math.abs(dy);
      if (adx < 4 && ady < 4) return;
      isHoriz.current = adx > ady * 1.2;
      if (!isHoriz.current) return;
    }
    if (!isHoriz.current) return;
    // Note: preventDefault géré par le listener natif passif:false dans useEffect

    dragOffset.current = dx;
    const track = trackRef.current;
    if (!track) return;

    const W = containerW.current;
    const base = -(currentRef.current * W);

    // ✅ Résistance élastique aux bords — feel premium
    const atStart = currentRef.current === 0 && dx > 0;
    const atEnd   = currentRef.current === TOTAL - 1 && dx < 0;
    const bounded = (atStart || atEnd) ? dx * 0.15 : dx;

    // ✅ SEULE opération GPU : translate3d. Jamais layout, jamais paint.
    track.style.transform = `translate3d(${base + bounded}px,0,0)`;
  }, []);

  // ✅ onTouchEnd : calcule vélocité pour le momentum, décide direction
  const onTouchEnd = useCallback(() => {
    isDragging.current = false;
    if (isHoriz.current !== true) { isHoriz.current = null; return; }
    isHoriz.current = null;

    const offset   = dragOffset.current;
    const elapsed  = performance.now() - touchStartTime.current;
    // px/s — signe indique la direction
    const velocity = offset / (elapsed / 1000);

    dragOffset.current = 0;

    // ✅ Seuil combiné : distance OU vélocité (comme iOS/Android natif)
    // Swipe rapide mais court → passe quand même à la carte suivante
    const byDistance = Math.abs(offset) > 50;
    const byVelocity = Math.abs(velocity) > 400; // px/s

    if ((byDistance || byVelocity) && offset < 0) {
      goTo(currentRef.current + 1, true, velocity);
    } else if ((byDistance || byVelocity) && offset > 0) {
      goTo(currentRef.current - 1, true, velocity);
    } else {
      goTo(currentRef.current, true); // snap back
    }
  }, [goTo]);

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
        onOracleSelect(oracle.id);
      } catch {
        if (msgTimeout) clearTimeout(msgTimeout);
        setIsLoadingAd(false);
        setShowLongAdMessage(false);
        onOracleSelect(oracle.id);
      }
    } else {
      onOracleSelect(oracle.id);
    }
  };

  if (isLoadingAd) {
    return <AdLoadingScreen showLongMessage={showLongAdMessage} adType="interstitial" />;
  }

  const active        = ORACLES[current];
  const bottomSafePad = bannerHeight > 0 ? bannerHeight + 16 : 24;

  return (
    <>
      <style>{`
        @keyframes oraclePageIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .oracle-page-in { animation: oraclePageIn 0.25s ease forwards; }

        .oracle-img { opacity: 0; transition: opacity 0.2s ease; }
        .oracle-img.loaded { opacity: 1; }
        .oracle-img-wrap { background: rgba(255,255,255,0.06); border-radius: 50%; }

        .badge-ribbon {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 4px 14px;
          border-radius: 2px;
          font-family: 'Cinzel', serif;
          font-size: 7.5px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          white-space: nowrap;
          color: #fff;
          text-shadow: 0 1px 6px rgba(0,0,0,0.7);
        }
        .badge-ribbon::before {
          content: '';
          position: absolute;
          inset: 0;
          border-top: 1px solid var(--rl);
          border-bottom: 1px solid var(--rl);
          pointer-events: none;
        }

        .oracle-ui-btn {
          min-height: unset !important;
          min-width: unset !important;
          padding: 0 !important;
          line-height: 1 !important;
          box-sizing: content-box !important;
        }
        .oracle-back-btn {
          min-height: unset !important;
          min-width: unset !important;
        }

        /* ✅ Track GPU — un seul layer promu, will-change déclaré une seule fois */
        .oracle-track {
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        /* ✅ Orbs : transition sur opacity uniquement — composite only, pas de repaint */
        .oracle-orb {
          border-radius: 50%;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }

        /* ✅ Étoiles : 3 groupes CSS, pas 50 animations SMIL */
        .star-g1 { animation: starTwinkle 3.1s ease-in-out infinite; }
        .star-g2 { animation: starTwinkle 4.2s ease-in-out infinite 0.8s; }
        .star-g3 { animation: starTwinkle 2.7s ease-in-out infinite 1.5s; }
        @keyframes starTwinkle {
          0%,100% { opacity: 0.10; }
          50%      { opacity: 0.40; }
        }

        /* ✅ Dots : transition CSS, pas de setState forcé à chaque frame */
        .oracle-dot {
          border: none;
          cursor: pointer;
          transition: width 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
          flex-shrink: 0;
          display: block;
          height: 6px;
          border-radius: 3px;
        }
      `}</style>

      <div
        ref={rootRef}
        className="oracle-page-in"
        style={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100dvh',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: "'Raleway', sans-serif",
          background: 'transparent',
          paddingBottom: bottomSafePad,
          isolation: 'isolate',
          // ✅ Custom properties pour les orbs — interpolées par le navigateur sans repaint
          '--orb1-color-a': ORACLES[0].accent,
          '--orb1-color-b': ORACLES[0].accentAlt,
          '--orb2-color': ORACLES[0].accentAlt,
        } as React.CSSProperties}
      >
        {/* ÉTOILES — SVG statique, 3 groupes CSS */}
        <svg
          style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <g className="star-g1">
            {Array.from({ length: 17 }).map((_, i) => {
              const x = (((i * 73) % 97) / 97) * 100;
              const y = (((i * 53) % 89) / 89) * 100;
              return <circle key={i} cx={`${x}%`} cy={`${y}%`} r={i % 3 === 0 ? 1.6 : 0.9} fill="white" />;
            })}
          </g>
          <g className="star-g2">
            {Array.from({ length: 17 }).map((_, i) => {
              const x = (((i * 61 + 20) % 97) / 97) * 100;
              const y = (((i * 41 + 15) % 89) / 89) * 100;
              return <circle key={i} cx={`${x}%`} cy={`${y}%`} r={i % 4 === 0 ? 1.4 : 0.8} fill="white" />;
            })}
          </g>
          <g className="star-g3">
            {Array.from({ length: 16 }).map((_, i) => {
              const x = (((i * 83 + 40) % 97) / 97) * 100;
              const y = (((i * 67 + 30) % 89) / 89) * 100;
              return <circle key={i} cx={`${x}%`} cy={`${y}%`} r={i % 5 === 0 ? 1.8 : 1.0} fill="white" />;
            })}
          </g>
        </svg>

        {/*
          ✅ ORBS — radial-gradient via CSS custom properties
          Pas de transition:background (force repaint à chaque frame)
          Pas de filter:blur (force repaint de toute la page)
          Juste un gradient doux avec opacity stable
        */}
        <div
          className="oracle-orb"
          style={{
            position: 'fixed', width: 500, height: 500, top: -180, left: '50%',
            transform: 'translateX(-50%) translateZ(0)',
            background: `radial-gradient(circle, var(--orb1-color-a), var(--orb1-color-b))`,
            opacity: 0.07,
            zIndex: 0,
          }}
        />
        <div
          className="oracle-orb"
          style={{
            position: 'fixed', width: 280, height: 280, bottom: 60, right: -80,
            transform: 'translateZ(0)',
            background: 'var(--orb2-color)',
            opacity: 0.05,
            zIndex: 0,
          }}
        />

        {/* HEADER */}
        <div style={{
          position: 'relative', zIndex: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '28px 18px 0', height: 64, flexShrink: 0,
        }}>
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
              transition: 'background 0.5s', flexShrink: 0,
            }}>
              {user?.name?.slice(0, 2).toUpperCase() || '??'}
            </div>
            <span style={{ fontSize: 18, lineHeight: 1 }}>
              {user?.zodiacSign?.symbol || '✨'}
            </span>
          </button>
        </div>

        {/* TITRE */}
        <div style={{
          position: 'relative', zIndex: 10,
          textAlign: 'center', padding: '16px 24px 4px', marginTop: 10, flexShrink: 0,
        }}>
          <p style={{
            fontFamily: "'Cinzel', serif", fontSize: 13,
            letterSpacing: '0.30em', textTransform: 'uppercase',
            color: active.accent, opacity: 0.90, marginBottom: 12,
            transition: 'color 0.4s',
          }}>
            {tr('oracle.selection.eyebrow')}
          </p>
          <h1 style={{
            fontFamily: "'Cinzel', serif", fontSize: 28, fontWeight: 700,
            color: '#f8fafc', letterSpacing: '0.04em', lineHeight: 1.15,
            textShadow: `0 0 40px ${active.accent}44`,
            transition: 'text-shadow 0.4s', margin: 0,
          }}>
            {tr('oracle.selection.title')}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, marginTop: 8 }}>
            <div style={{ height: 1, width: 44, background: `linear-gradient(90deg,transparent,${active.accent}66)`, transition: 'background 0.4s' }} />
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: active.accent, opacity: 0.7, transition: 'background 0.4s' }} />
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: active.accent, opacity: 0.7, transition: 'background 0.4s' }} />
            <div style={{ height: 1, width: 44, background: `linear-gradient(270deg,transparent,${active.accent}66)`, transition: 'background 0.4s' }} />
          </div>
        </div>

        {/* CARROUSEL */}
        <div
          ref={containerRef}
          style={{
            position: 'relative', zIndex: 10,
            height: 'min(440px, calc(100dvh - 230px))',
            minHeight: 300,
            overflow: 'hidden',
            flexShrink: 0,
            // ✅ pan-y uniquement — le navigateur sait immédiatement
            // qu'on gère le horizontal nous-mêmes
            touchAction: 'pan-y',
            userSelect: 'none',
            WebkitUserSelect: 'none',
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            ref={trackRef}
            className="oracle-track"
            style={{
              display: 'flex',
              height: '100%',
              // ✅ translateZ(0) force la promotion en layer GPU dès le montage
              // Le navigateur n'attend pas le premier swipe pour créer le layer
              transform: `translate3d(0,0,0)`,
            }}
          >
            {ORACLES.map((oracle, idx) => {
              const ba = BADGE_ACCENT[oracle.id];
              // ✅ Seules les cartes adjacentes sont "riches" — les autres sont simplifiées
              const isNear = Math.abs(idx - current) <= 1;

              return (
                <div
                  key={oracle.id}
                  style={{
                    minWidth: '100vw',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '14px 24px 4px',
                    // ✅ contain: strict — isole complètement chaque carte du layout global
                    // Critique sur vieux GPU : empêche les repaints de se propager
                    contain: 'strict',
                  }}
                >
                  <div
                    onClick={() => handleOracleSelect(oracle)}
                    style={{
                      position: 'relative',
                      width: '100%', maxWidth: 300,
                      height: '100%', maxHeight: 420,
                      background: oracle.bgGradient,
                      border: `1.5px solid ${oracle.borderColorStrong}`,
                      borderRadius: 28,
                      display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center',
                      textAlign: 'center',
                      padding: '36px 28px 26px',
                      cursor: 'pointer',
                      overflow: 'visible',
                      boxShadow: `0 8px 40px ${oracle.glowColor}, 0 2px 8px rgba(0,0,0,0.5)`,
                      WebkitTapHighlightColor: 'transparent',
                    }}
                  >
                    {/* Glow radial intérieur */}
                    <div style={{
                      position: 'absolute', inset: 0, borderRadius: 26,
                      background: `radial-gradient(ellipse at 50% 20%, ${oracle.glowColor}, transparent 60%)`,
                      pointerEvents: 'none',
                    }} />

                    {/* Shine haut */}
                    <div style={{
                      position: 'absolute', top: 0, left: '15%', right: '15%', height: 1,
                      background: `linear-gradient(90deg,transparent,${oracle.accent}88,transparent)`,
                      borderRadius: 1,
                    }} />

                    {/* Coins décoratifs */}
                    {([
                      { t: 14, l: 14, bT: true, bL: true, br: '4px 0 0 0' },
                      { t: 14, r: 14, bT: true, bR: true, br: '0 4px 0 0' },
                      { b: 14, l: 14, bB: true, bL: true, br: '0 0 0 4px' },
                      { b: 14, r: 14, bB: true, bR: true, br: '0 0 4px 0' },
                    ] as any[]).map((c, ci) => (
                      <div key={ci} style={{
                        position: 'absolute',
                        top: c.t, bottom: c.b, left: c.l, right: c.r,
                        width: 14, height: 14,
                        borderTop:    c.bT ? `1.5px solid ${oracle.accent}44` : undefined,
                        borderBottom: c.bB ? `1.5px solid ${oracle.accent}44` : undefined,
                        borderLeft:   c.bL ? `1.5px solid ${oracle.accent}44` : undefined,
                        borderRight:  c.bR ? `1.5px solid ${oracle.accent}44` : undefined,
                        borderRadius: c.br,
                      }} />
                    ))}

                    {/* Badge */}
                    {oracle.badge && ba && (
                      <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
                        <span
                          className="badge-ribbon"
                          style={{ background: ba.bg, boxShadow: `0 2px 12px ${oracle.accentAlt}44`, ['--rl' as any]: ba.line }}
                        >
                          ✦ {tr(oracle.badge)}
                        </span>
                      </div>
                    )}

                    {/* Image */}
                    <div
                      className="oracle-img-wrap"
                      style={{ position: 'relative', width: 110, height: 110, borderRadius: '50%', flexShrink: 0, marginBottom: 20 }}
                    >
                      {/* Halo statique — uniquement carte active */}
                      {idx === current && (
                        <div style={{
                          position: 'absolute', inset: -10, borderRadius: '50%',
                          background: `radial-gradient(circle, ${oracle.accent}20, transparent 65%)`,
                          boxShadow: `0 0 30px ${oracle.accent}30`,
                          pointerEvents: 'none',
                        }} />
                      )}
                      <div style={{
                        position: 'absolute', inset: 0, borderRadius: '50%',
                        border: `1.5px solid ${oracle.borderColorStrong}`,
                        boxShadow: `0 0 18px ${oracle.glowColor}`,
                        zIndex: 2, pointerEvents: 'none',
                      }} />
                      {/* ✅ eager pour cartes adjacentes, lazy pour les autres */}
                      <img
                        src={oracle.image}
                        alt={t(oracle.titleKey)}
                        loading={isNear ? 'eager' : 'lazy'}
                        decoding="async"
                        className="oracle-img"
                        onLoad={(e) => {
                          (e.currentTarget as HTMLImageElement).classList.add('loaded');
                        }}
                        style={{
                          width: '100%', height: '100%',
                          objectFit: 'cover', borderRadius: '50%',
                          filter: 'brightness(1.06) saturate(1.1)',
                          display: 'block', position: 'relative', zIndex: 1,
                        }}
                      />
                    </div>

                    {/* Titre */}
                    <h2 style={{
                      fontFamily: "'Cinzel', serif", fontSize: 18, fontWeight: 700,
                      color: oracle.textColor, letterSpacing: '0.04em', lineHeight: 1.2,
                      margin: '0 0 8px 0', textShadow: `0 0 20px ${oracle.accent}55`,
                    }}>
                      {t(oracle.titleKey)}
                    </h2>

                    {/* Séparateur */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                      <div style={{ height: 1, width: 28, background: `linear-gradient(90deg,transparent,${oracle.accent}44)` }} />
                      <div style={{ width: 3, height: 3, borderRadius: '50%', background: oracle.accent, opacity: 0.5 }} />
                      <div style={{ height: 1, width: 28, background: `linear-gradient(270deg,transparent,${oracle.accent}44)` }} />
                    </div>

                    {/* Description */}
                    <p style={{
                      fontFamily: "'Raleway', sans-serif", fontSize: 12.5, fontWeight: 400,
                      color: 'rgba(226,232,240,0.60)', maxWidth: 210, lineHeight: 1.70,
                      letterSpacing: '0.01em', margin: 0,
                    }}>
                      {t(oracle.descKey)}
                    </p>

                    {/* Tap hint */}
                    <p style={{
                      fontFamily: "'Cinzel', serif", marginTop: 14, marginBottom: 0,
                      fontSize: 7.5, fontWeight: 400, color: `${oracle.accent}55`,
                      letterSpacing: '0.22em', textTransform: 'uppercase',
                    }}>
                      {tr('oracle.carousel.tapHint')}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* DOTS */}
        <div style={{
          position: 'relative', zIndex: 10,
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          gap: 7, padding: '10px 0 6px', flexShrink: 0,
        }}>
          {ORACLES.map((_, i) => (
            <button
              key={i}
              className="oracle-ui-btn oracle-dot"
              onClick={() => goTo(i)}
              style={{
                width: i === current ? 24 : 6,
                background: i === current ? active.accent : 'rgba(255,255,255,0.18)',
                boxShadow: i === current ? `0 0 8px ${active.accent}88` : 'none',
              }}
            />
          ))}
        </div>

        {/* RETOUR */}
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
          <button
            className="oracle-back-btn"
            onClick={onBack}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: "'Raleway', sans-serif", fontSize: 12, fontWeight: 400,
              color: 'rgba(148,163,184,0.38)',
              display: 'flex', alignItems: 'center', gap: 6,
              letterSpacing: '0.06em', transition: 'color 0.2s', padding: '4px 8px',
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