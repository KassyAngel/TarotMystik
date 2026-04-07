// client/src/pages/GameModeSelection.tsx
// VERSION OPTIMISÉE — Design "effet wahou", sans emoji, fluide

import MysticalButton from '@/components/MysticalButton';
import { UserSession } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';

type GameMode = 'classic' | 'cross';

interface GameModeSelectionProps {
  user: UserSession;
  oracleTitle: string;
  oracleDescription: string;
  onModeSelect: (mode: GameMode) => void;
  onBack: () => void;
}

const STARS = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  size: i % 7 === 0 ? 2 : 1,
  top: ((i * 37 + 13) % 100),
  left: ((i * 53 + 7) % 100),
  delay: (i * 0.17) % 4,
  duration: 2.5 + (i % 3) * 0.8,
}));

export default function GameModeSelection({
  user,
  oracleTitle,
  oracleDescription,
  onModeSelect,
  onBack
}: GameModeSelectionProps) {
  const { t } = useLanguage();

  const displayTitle = t('oracle.loveOracle.title') || oracleTitle;
  const displayDescription = t('oracle.loveOracle.description') || oracleDescription;

  return (
    <div className="gms-root">

      {/* Fond nébuleuse — deux orbes fixes, pas d'animation CPU-lourde */}
      <div className="gms-orb gms-orb--gold" aria-hidden="true" />
      <div className="gms-orb gms-orb--rose" aria-hidden="true" />

      {/* Étoiles — positionnées statiquement pour éviter le recalcul React */}
      <div className="gms-stars" aria-hidden="true">
        {STARS.map(s => (
          <span
            key={s.id}
            className="gms-star"
            style={{
              width: s.size,
              height: s.size,
              top: `${s.top}%`,
              left: `${s.left}%`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="gms-layout">

        {/* ── HEADER ── */}
        <header className="gms-header">
          <h1 className="gms-title">{displayTitle}</h1>
          <div className="gms-divider" />
          <p className="gms-subtitle">{displayDescription}</p>
        </header>

        {/* ── CARTES ── */}
        <div className="gms-cards">

          {/* Mode Classique */}
          <button
            className="gms-card gms-card--gold"
            onClick={() => onModeSelect('classic')}
            aria-label={t('gameMode.classic.title') || 'Tirage Classique'}
          >
            <div className="gms-card__accent gms-card__accent--gold" />
            <div className="gms-card__inner">
              <div className="gms-card__header">
                <span className="gms-card__pill gms-card__pill--gold">
                  {t('gameMode.classic.features') || '6 cartes · 3 min'}
                </span>
              </div>
              <h2 className="gms-card__title gms-card__title--gold">
                {t('gameMode.classic.title') || 'Tirage Classique'}
              </h2>
              <p className="gms-card__desc">
                {t('gameMode.classic.description') || 'Choisissez 3 cartes parmi 6 pour découvrir votre destinée amoureuse'}
              </p>
              <div className="gms-card__cta gms-card__cta--gold">
                {t('gameMode.classic.cta') || 'Consulter l\'oracle'}
                <svg className="gms-arrow" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </button>

          {/* Mode Tirage en Croix */}
          <button
            className="gms-card gms-card--rose"
            onClick={() => onModeSelect('cross')}
            aria-label={t('gameMode.cross.title') || 'Tirage en Croix'}
          >
            <div className="gms-card__accent gms-card__accent--rose" />
            <div className="gms-card__inner">
              <div className="gms-card__header">
                <span className="gms-card__pill gms-card__pill--rose">
                  5 positions · Lecture approfondie
                </span>
              </div>
              <h2 className="gms-card__title gms-card__title--rose">
                {t('gameMode.cross.title') || 'Tirage en Croix'}
              </h2>
              <p className="gms-card__desc">
                {t('gameMode.cross.description') || 'Un tirage approfondi avec 5 positions pour explorer votre situation amoureuse'}
              </p>
              <div className="gms-card__positions">
                {[
                  t('crossSpread.positions.present')  || 'Présent',
                  t('crossSpread.positions.obstacle') || 'Obstacle',
                  t('crossSpread.positions.past')     || 'Passé',
                  t('crossSpread.positions.future')   || 'Avenir',
                  t('crossSpread.positions.synthesis')|| 'Synthèse',
                ].map((pos) => (
                  <span key={pos} className="gms-pos-tag">{pos}</span>
                ))}
              </div>
              <div className="gms-card__cta gms-card__cta--rose">
                {t('gameMode.cross.cta') || 'Consulter l\'oracle'}
                <svg className="gms-arrow" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </button>
        </div>

        {/* ── RETOUR ── */}
        <footer className="gms-footer">
          <MysticalButton
            variant="secondary"
            onClick={onBack}
            className="gms-back-btn"
          >
            ← {t('common.back') || 'Retour'}
          </MysticalButton>
        </footer>
      </div>

      <style>{`
        /* ─── RESET LOCAL ───────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; }

        /* ─── ROOT ──────────────────────────────────── */
        .gms-root {
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: calc(env(safe-area-inset-top, 0px) + 56px) 1.25rem calc(env(safe-area-inset-bottom, 0px) + 100px);
          background: linear-gradient(160deg, #08111e 0%, #0d1b2e 50%, #0a1220 100%);
          position: relative;
          overflow: hidden;
        }

        /* ─── ORBES ─────────────────────────────────── */
        .gms-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(80px);
          will-change: opacity;
        }
        .gms-orb--gold {
          width: 480px; height: 480px;
          top: -100px; left: -120px;
          background: radial-gradient(circle, rgba(201,168,127,0.12) 0%, transparent 70%);
          animation: orbPulse 7s ease-in-out infinite;
        }
        .gms-orb--rose {
          width: 380px; height: 380px;
          bottom: -60px; right: -80px;
          background: radial-gradient(circle, rgba(255,102,146,0.10) 0%, transparent 70%);
          animation: orbPulse 9s ease-in-out infinite reverse;
        }
        @keyframes orbPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.08); }
        }

        /* ─── ÉTOILES ───────────────────────────────── */
        .gms-stars {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .gms-star {
          position: absolute;
          background: #c9a87f;
          border-radius: 50%;
          animation: twinkle linear infinite;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.15; }
          50%       { opacity: 0.85; }
        }

        /* ─── LAYOUT ─────────────────────────────────── */
        .gms-layout {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 480px;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        /* ─── HEADER ─────────────────────────────────── */
        .gms-header {
          text-align: center;
        }
        .gms-title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(1.6rem, 5vw, 2.4rem);
          font-weight: 400;
          color: #e8d4b8;
          margin: 0 0 1rem;
          letter-spacing: 0.02em;
          line-height: 1.2;
          text-shadow: 0 2px 24px rgba(0,0,0,0.8);
        }
        .gms-divider {
          width: 48px;
          height: 1px;
          margin: 0 auto 1rem;
          background: linear-gradient(90deg, transparent, #c9a87f80, transparent);
        }
        .gms-subtitle {
          font-size: 0.9rem;
          color: rgba(201,168,127,0.75);
          margin: 0;
          line-height: 1.6;
          max-width: 32ch;
          margin-inline: auto;
        }

        /* ─── CARTES ─────────────────────────────────── */
        .gms-cards {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .gms-card {
          position: relative;
          width: 100%;
          background: rgba(13, 27, 46, 0.75);
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.06);
          overflow: hidden;
          cursor: pointer;
          text-align: left;
          padding: 0;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          will-change: transform;
        }
        .gms-card:hover {
          transform: translateY(-3px);
        }
        .gms-card:active {
          transform: translateY(0) scale(0.99);
        }

        /* Bordure lumineuse au survol — gold */
        .gms-card--gold:hover {
          border-color: rgba(201,168,127,0.45);
          box-shadow: 0 12px 40px rgba(201,168,127,0.18), 0 0 0 1px rgba(201,168,127,0.12);
        }
        /* Bordure lumineuse au survol — rose */
        .gms-card--rose:hover {
          border-color: rgba(255,102,146,0.4);
          box-shadow: 0 12px 40px rgba(255,102,146,0.15), 0 0 0 1px rgba(255,102,146,0.10);
        }

        /* Barre d'accent latérale */
        .gms-card__accent {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 3px;
          border-radius: 18px 0 0 18px;
        }
        .gms-card__accent--gold {
          background: linear-gradient(180deg, #c9a87f 0%, rgba(201,168,127,0.2) 100%);
        }
        .gms-card__accent--rose {
          background: linear-gradient(180deg, #ff6692 0%, rgba(255,102,146,0.2) 100%);
        }

        .gms-card__inner {
          padding: 1.5rem 1.5rem 1.5rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .gms-card__header {
          margin-bottom: 0.1rem;
        }

        .gms-card__pill {
          display: inline-block;
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 100px;
          font-weight: 500;
        }
        .gms-card__pill--gold {
          background: rgba(201,168,127,0.12);
          color: rgba(201,168,127,0.9);
          border: 1px solid rgba(201,168,127,0.25);
        }
        .gms-card__pill--rose {
          background: rgba(255,102,146,0.10);
          color: rgba(255,102,146,0.9);
          border: 1px solid rgba(255,102,146,0.22);
        }

        .gms-card__title {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(1.1rem, 3.5vw, 1.35rem);
          font-weight: 400;
          margin: 0;
          letter-spacing: 0.01em;
          line-height: 1.2;
          transition: color 0.2s ease;
        }
        .gms-card__title--gold { color: #e8d4b8; }
        .gms-card__title--rose { color: #e8d4b8; }
        .gms-card--gold:hover .gms-card__title--gold { color: #f5e6cc; }
        .gms-card--rose:hover  .gms-card__title--rose { color: #ffb3c8; }

        .gms-card__desc {
          font-size: 0.875rem;
          color: rgba(201,168,127,0.7);
          line-height: 1.55;
          margin: 0;
        }

        /* Tags positions */
        .gms-card__positions {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 0.2rem;
        }
        .gms-pos-tag {
          font-size: 0.7rem;
          color: rgba(255,102,146,0.75);
          border: 1px solid rgba(255,102,146,0.2);
          border-radius: 100px;
          padding: 2px 10px;
          background: rgba(255,102,146,0.06);
          letter-spacing: 0.04em;
        }

        /* CTA inline */
        .gms-card__cta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-top: 0.4rem;
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.22s ease, transform 0.22s ease;
        }
        .gms-card:hover .gms-card__cta {
          opacity: 1;
          transform: translateX(0);
        }
        .gms-card__cta--gold { color: #c9a87f; }
        .gms-card__cta--rose { color: #ff6692; }
        .gms-arrow {
          width: 14px; height: 14px;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }
        .gms-card:hover .gms-arrow {
          transform: translateX(3px);
        }

        /* ─── FOOTER ─────────────────────────────────── */
        .gms-footer {
          display: flex;
          justify-content: center;
        }
        .gms-back-btn {
          background: rgba(13,27,46,0.6) !important;
          border: 1px solid rgba(201,168,127,0.2) !important;
          color: rgba(232,212,184,0.8) !important;
          font-size: 0.85rem !important;
          padding: 0.6rem 1.75rem !important;
          border-radius: 100px !important;
          transition: border-color 0.2s ease, color 0.2s ease !important;
        }
        .gms-back-btn:hover {
          border-color: rgba(201,168,127,0.45) !important;
          color: #e8d4b8 !important;
        }

        /* ─── REDUCED MOTION ─────────────────────────── */
        @media (prefers-reduced-motion: reduce) {
          .gms-orb, .gms-star { animation: none !important; }
          .gms-card { transition: none !important; }
        }
      `}</style>
    </div>
  );
}