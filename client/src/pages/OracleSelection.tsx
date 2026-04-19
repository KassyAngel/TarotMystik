// OracleSelection.tsx — v22
// Base : v20 (la meilleure)
// Corrections : yeux du sorcier visibles, padding top augmenté, titre plus grand

import { UserSession } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSound } from '@/hooks/useSound';
import { useState, useEffect } from 'react';
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

const ALL_ORACLES = [
  {
    id: 'loveOracle',
    titleKey: 'oracle.loveOracle.title',
    descKey: 'oracle.loveOracle.description',
    image: loveOracleImage,
    gradientFrom: 'rgba(140, 30, 80, 0.72)',
    gradientMid:  'rgba(100, 20, 60, 0.30)',
    // fond + vignette : centré
    // fond : haut du cœur visible
    bgPosition:    'center 35%',
    thumbPosition: 'center center',
  },
  {
    id: 'lunar',
    titleKey: 'oracle.lunar.title',
    descKey: 'oracle.lunar.description',
    image: lunarOracleImage,
    gradientFrom: 'rgba(15, 40, 80, 0.72)',
    gradientMid:  'rgba(10, 25, 55, 0.30)',
    bgPosition:    'center center',
    thumbPosition: 'center center',
  },
  {
    id: 'wizard',
    titleKey: 'wizard.title',
    descKey: 'oracle.wizard.description',
    image: wizardImage,
    gradientFrom: 'rgba(30, 20, 70, 0.72)',
    gradientMid:  'rgba(20, 12, 50, 0.30)',
    // fond : montrer un peu le visage
    bgPosition:    'center 22%',
    // vignette : cadrer précisément sur les yeux
    // 30% = zone des yeux dans ce portrait
    thumbPosition: 'center 30%',
  },
  {
    id: 'loveCalculator',
    titleKey: 'oracle.loveCalculator.title',
    descKey: 'oracle.loveCalculator.description',
    image: loveCalculatorImage,
    gradientFrom: 'rgba(80, 10, 100, 0.72)',
    gradientMid:  'rgba(50, 8, 70, 0.30)',
    bgPosition:    'center center',
    thumbPosition: 'center center',
    badge: 'oracle.badge.new',
    badgeBg: 'rgba(168,28,185,0.92)',
    badgeColor: '#f5d0fe',
  },
  {
    id: 'wheel',
    titleKey: 'oracle.wheel.title',
    descKey: 'oracle.wheel.shortDescription',
    image: roueMystikImage,
    gradientFrom: 'rgba(45, 35, 160, 0.72)',
    gradientMid:  'rgba(30, 22, 110, 0.30)',
    bgPosition:    'center center',
    thumbPosition: 'center center',
    badge: 'oracle.badge.bonus',
    badgeBg: 'rgba(79,70,229,0.92)',
    badgeColor: '#c7d2fe',
    isWheel: true,
  },
] as const;

type OracleItem = typeof ALL_ORACLES[number];

const FALLBACKS: Record<string, Record<string, string>> = {
  fr: {
    'oracle.selection.eyebrow': 'Choisissez votre chemin',
    'oracle.selection.title': 'Choisissez votre Oracle',
    'oracle.badge.new': 'Nouveau',
    'oracle.badge.bonus': 'Bonus',
    'oracle.back': 'Retour',
  },
  en: {
    'oracle.selection.eyebrow': 'Choose your path',
    'oracle.selection.title': 'Choose your Oracle',
    'oracle.badge.new': 'New',
    'oracle.badge.bonus': 'Bonus',
    'oracle.back': 'Back',
  },
  es: {
    'oracle.selection.eyebrow': 'Elige tu camino',
    'oracle.selection.title': 'Elige tu Oráculo',
    'oracle.badge.new': 'Nuevo',
    'oracle.badge.bonus': 'Bonus',
    'oracle.back': 'Atrás',
  },
  de: {
    'oracle.selection.eyebrow': 'Wähle deinen Weg',
    'oracle.selection.title': 'Wähle dein Orakel',
    'oracle.badge.new': 'Neu',
    'oracle.badge.bonus': 'Bonus',
    'oracle.back': 'Zurück',
  },
  it: {
    'oracle.selection.eyebrow': 'Scegli il tuo percorso',
    'oracle.selection.title': 'Scegli il tuo Oracolo',
    'oracle.badge.new': 'Nuovo',
    'oracle.badge.bonus': 'Bonus',
    'oracle.back': 'Indietro',
  },
};

if (typeof window !== 'undefined') {
  ALL_ORACLES.forEach(({ image }) => {
    const img = new window.Image();
    img.decoding = 'async';
    img.src = image;
  });
}

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
  const [isLoadingAd, setIsLoadingAd] = useState(false);
  const [showLongAdMessage, setShowLongAdMessage] = useState(false);

  useEffect(() => {
    if (!document.getElementById('cinzel-font')) {
      const link = document.createElement('link');
      link.id   = 'cinzel-font';
      link.rel  = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Raleway:wght@300;400;500&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    const preload = () => {
      import('@/pages/CardGame');
      import('@/pages/WizardPage');
      import('@/pages/WheelPage');
      import('@/pages/LoveCalculatorPage');
      import('@/pages/LunarPhasePage');
      import('@/pages/LunarCardGame');
      import('@/components/CrossSpreadGame');
      import('@/pages/GameModeSelection');
    };
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(preload, { timeout: 2000 });
    } else {
      setTimeout(preload, 600);
    }
  }, []);

  const tr = (key: string): string => {
    const val = t(key);
    if (val === key || !val) {
      const lang = (language as string) || 'fr';
      return FALLBACKS[lang]?.[key] ?? FALLBACKS['fr']?.[key] ?? key;
    }
    return val;
  };

  const handleSelect = async (oracle: OracleItem) => {
    playFlipSound();
    if ((oracle as any).isWheel && !isPremium) {
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

  const bottomPad = bannerHeight > 0 ? bannerHeight + 8 : 10;

  return (
    <>
      <style>{`
        @keyframes osIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes rowIn {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .os-row {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
          transition: transform 0.13s ease, filter 0.13s ease;
          display: flex;
          align-items: center;
          height: clamp(72px, 11.5dvh, 96px);
          flex-shrink: 0;
        }
        .os-row:active {
          transform: scale(0.975) translateX(2px);
          filter: brightness(0.83);
        }

        .os-row-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.42) saturate(1.25);
        }

        .os-row-gradient {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        /* Vignette : object-fit cover, position définie par oracle */
        .os-row-thumb {
          position: relative;
          z-index: 2;
          width: clamp(54px, 8.5dvh, 72px);
          height: clamp(54px, 8.5dvh, 72px);
          border-radius: 10px;
          overflow: hidden;
          flex-shrink: 0;
          margin-left: 10px;
          border: 0.5px solid rgba(255,255,255,0.14);
          box-shadow: 0 2px 12px rgba(0,0,0,0.5);
        }
        .os-row-thumb img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: none;
        }

        .os-row-text {
          position: relative;
          z-index: 2;
          flex: 1;
          min-width: 0;
          padding: 0 10px;
        }
        .os-row-title {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: clamp(11px, 1.65dvh, 14.5px);
          color: #f1f5f9;
          letter-spacing: 0.04em;
          line-height: 1.2;
          margin: 0 0 4px;
          text-shadow: 0 1px 8px rgba(0,0,0,0.85);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .os-row-desc {
          font-family: 'Raleway', sans-serif;
          font-size: clamp(8px, 1.05dvh, 10px);
          color: rgba(226,232,240,0.50);
          line-height: 1.38;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .os-badge {
          position: relative;
          z-index: 2;
          font-family: 'Cinzel', serif;
          font-size: clamp(5.5px, 0.78dvh, 7px);
          font-weight: 700;
          letter-spacing: 0.16em;
          padding: 3px 7px;
          border-radius: 4px;
          white-space: nowrap;
          text-transform: uppercase;
          flex-shrink: 0;
          margin-right: 4px;
        }

        .os-row-chevron {
          position: relative;
          z-index: 2;
          color: rgba(200,200,255,0.38);
          font-size: 22px;
          line-height: 1;
          flex-shrink: 0;
          margin-right: 12px;
        }
      `}</style>

      <div style={{
        animation: 'osIn 0.2s ease forwards',
        paddingTop: 'env(safe-area-inset-top, 0px)',
        paddingBottom: bottomPad,
        maxWidth: 480,
        margin: '0 auto',
        width: '100%',
        height: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        overflow: 'hidden',
        fontFamily: "'Raleway', sans-serif",
      }}>

        {/* ── HEADER ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 13px 0',
          flexShrink: 0,
        }}>
          <button
            onClick={onOpenMenu}
            aria-label="Menu"
            style={{
              width: 34, height: 34,
              background: 'rgba(255,255,255,0.05)',
              border: '0.5px solid rgba(255,255,255,0.12)',
              borderRadius: 9, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 0, flexShrink: 0,
            }}
          >
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <rect width="14" height="1.4" rx="0.7" fill="rgba(255,255,255,0.55)" />
              <rect y="4.3" width="9" height="1.4" rx="0.7" fill="rgba(255,255,255,0.55)" />
              <rect y="8.6" width="5.5" height="1.4" rx="0.7" fill="rgba(255,255,255,0.55)" />
            </svg>
          </button>

          <button
            onClick={onOpenProfile}
            aria-label="Profil"
            style={{
              display: 'flex', alignItems: 'center', gap: 7,
              background: 'rgba(255,255,255,0.05)',
              border: '0.5px solid rgba(255,255,255,0.12)',
              borderRadius: 18,
              padding: '4px 10px 4px 5px',
              cursor: 'pointer', fontFamily: 'inherit', flexShrink: 0,
            }}
          >
            <div style={{
              width: 24, height: 24, borderRadius: '50%',
              background: 'linear-gradient(135deg, #c084fccc, #a855f777)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 9, fontWeight: 700, color: '#fff', flexShrink: 0,
            }}>
              {user?.name?.slice(0, 2).toUpperCase() || '??'}
            </div>
            <span style={{ fontSize: 17, lineHeight: 1 }}>
              {user?.zodiacSign?.symbol || '✨'}
            </span>
          </button>
        </div>

        {/* ── TITRE — padding top augmenté pour le descendre, textes plus grands ── */}
        <div style={{
          textAlign: 'center',
          // ↑ padding top plus grand = titre plus bas dans l'espace étoilé
          padding: 'clamp(18px, 3.5dvh, 40px) 20px clamp(12px, 2dvh, 20px)',
          flexShrink: 0,
        }}>
          {/* Sous-titre "Choisissez votre chemin" — plus grand */}
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(10px, 1.4dvh, 13px)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#a78bfa',
            margin: '0 0 6px',
          }}>
            {tr('oracle.selection.eyebrow')}
          </p>
          {/* Titre principal — plus grand */}
          <h1 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(22px, 3.6dvh, 32px)',
            fontWeight: 700,
            color: '#f8fafc',
            letterSpacing: '0.03em',
            lineHeight: 1.15,
            margin: 0,
            textShadow: '0 2px 24px rgba(168,85,247,0.45)',
          }}>
            {tr('oracle.selection.title')}
          </h1>
        </div>

        {/* ── LISTE DE LANGUETTES ── */}
        <div style={{
          flex: 1,
          minHeight: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 'clamp(7px, 1.1dvh, 11px)',
          padding: '0 10px',
          overflowY: 'auto',
        }}>
          {ALL_ORACLES.map((oracle, i) => {
            const o = oracle as any;
            return (
              <div
                key={oracle.id}
                className="os-row"
                style={{ animation: `rowIn 0.22s ease ${i * 0.055}s both` }}
                onClick={() => handleSelect(oracle)}
              >
                {/* Fond assombri, positionné par bgPosition */}
                <img
                  className="os-row-bg"
                  src={oracle.image}
                  alt=""
                  aria-hidden="true"
                  loading="eager"
                  decoding="async"
                  style={{ objectPosition: oracle.bgPosition }}
                />

                {/* Dégradé coloré */}
                <div
                  className="os-row-gradient"
                  style={{
                    background: `linear-gradient(90deg,
                      ${oracle.gradientFrom} 0%,
                      ${oracle.gradientMid} 50%,
                      transparent 100%
                    )`,
                  }}
                />

                {/* Vignette — object-position = thumbPosition pour le sorcier */}
                <div className="os-row-thumb">
                  <img
                    src={oracle.image}
                    alt={t(oracle.titleKey)}
                    loading="eager"
                    decoding="async"
                    style={{ objectPosition: oracle.thumbPosition }}
                  />
                </div>

                {/* Texte */}
                <div className="os-row-text">
                  <p className="os-row-title">{t(oracle.titleKey)}</p>
                  <p className="os-row-desc">{t(oracle.descKey)}</p>
                </div>

                {/* Badge */}
                {o.badge && (
                  <span
                    className="os-badge"
                    style={{ background: o.badgeBg, color: o.badgeColor }}
                  >
                    ✦ {tr(o.badge)}
                  </span>
                )}

                <div className="os-row-chevron">›</div>
              </div>
            );
          })}
        </div>

        {/* ── RETOUR ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 30,
          flexShrink: 0,
        }}>
          <button
            onClick={onBack}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: "'Raleway', sans-serif",
              fontSize: 11, color: 'rgba(148,163,184,0.30)',
              display: 'flex', alignItems: 'center', gap: 5,
              letterSpacing: '0.07em', padding: '2px 8px',
            }}
          >
            <span style={{ fontSize: 13 }}>←</span>
            <span>{tr('oracle.back')}</span>
          </button>
        </div>

      </div>
    </>
  );
}