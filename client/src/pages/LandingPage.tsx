import LanguageSelector from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

interface LandingPageProps {
  onEnter: () => void;
}

export default function LandingPage({ onEnter }: LandingPageProps) {
  const { t } = useLanguage();

  return (
    <div className="lp-root">
      {/* Langue */}
      <div className="lp-lang">
        <LanguageSelector />
      </div>

      {/* Fond — noir pur + orbs or ambré */}
      <div className="lp-bg" aria-hidden>
        <div className="lp-orb lp-orb-1" />
        <div className="lp-orb lp-orb-2" />
        <div className="lp-orb lp-orb-3" />
        <div className="lp-grain" />
        <div className="lp-stars" />
      </div>

      {/* Contenu */}
      <div className="lp-content">

        <div className="lp-rule" aria-hidden>
          <span className="lp-rule-line" />
          <span className="lp-rule-gem" />
          <span className="lp-rule-line" />
        </div>

        <h1 className="lp-title">{t('landing.title')}</h1>

        <p className="lp-subtitle">{t('landing.subtitle')}</p>

        <button className="lp-cta" onClick={onEnter} data-testid="button-enter">
          <span className="lp-cta-text">{t('landing.enter')}</span>
          <span className="lp-cta-arrow">→</span>
          <span className="lp-cta-shimmer" aria-hidden />
        </button>

        <p className="lp-mention" data-testid="text-ads-support">
          {t('landing.ads.support')}
        </p>

        <div className="lp-rule" aria-hidden>
          <span className="lp-rule-line" />
          <span className="lp-rule-gem" />
          <span className="lp-rule-line" />
        </div>
      </div>

      <style>{`
        /* ROOT */
        .lp-root {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #080808;
          overflow: hidden;
          font-family: 'Cormorant Garamond', 'Georgia', serif;
        }

        /* LANGUE */
        .lp-lang {
          position: absolute;
          top: 18px; right: 18px;
          z-index: 20;
        }

        /* FOND */
        .lp-bg { position: absolute; inset: 0; pointer-events: none; }

        .lp-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
        }
        /* Orb principal — or ambré très doux, remplace le violet */
        .lp-orb-1 {
          width: 520px; height: 520px;
          top: -150px; left: 50%;
          transform: translateX(-50%);
          background: radial-gradient(ellipse, rgba(180,140,30,0.10) 0%, transparent 65%);
          animation: orb-float 16s ease-in-out infinite alternate;
        }
        .lp-orb-2 {
          width: 360px; height: 360px;
          bottom: -80px; right: -80px;
          background: radial-gradient(ellipse, rgba(140,100,20,0.07) 0%, transparent 65%);
          animation: orb-float 11s ease-in-out infinite alternate-reverse;
        }
        .lp-orb-3 {
          width: 280px; height: 280px;
          bottom: 60px; left: -60px;
          background: radial-gradient(ellipse, rgba(200,160,40,0.05) 0%, transparent 65%);
          animation: orb-float 20s ease-in-out infinite alternate;
        }

        /* Grain luxueux */
        .lp-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          opacity: 0.45;
        }

        /* Étoiles — points dorés et blancs sur noir */
        .lp-stars {
          position: absolute; inset: 0;
          background-image:
            radial-gradient(1.5px 1.5px at 12% 18%, rgba(212,175,55,0.85) 0%, transparent 100%),
            radial-gradient(1px 1px at 38% 7%,  rgba(240,228,190,0.55) 0%, transparent 100%),
            radial-gradient(1px 1px at 68% 22%, rgba(240,228,190,0.45) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 85% 40%, rgba(212,175,55,0.75) 0%, transparent 100%),
            radial-gradient(1px 1px at 22% 55%, rgba(240,228,190,0.40) 0%, transparent 100%),
            radial-gradient(1px 1px at 58% 65%, rgba(240,228,190,0.45) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 8%  78%, rgba(212,175,55,0.65) 0%, transparent 100%),
            radial-gradient(1px 1px at 92% 82%, rgba(240,228,190,0.38) 0%, transparent 100%),
            radial-gradient(1px 1px at 48% 92%, rgba(240,228,190,0.32) 0%, transparent 100%),
            radial-gradient(1px 1px at 75% 88%, rgba(212,175,55,0.55) 0%, transparent 100%);
        }

        /* CONTENU */
        .lp-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
          padding: 40px 28px;
          max-width: 340px;
          width: 100%;
          text-align: center;
        }

        /* LIGNE DÉCO */
        .lp-rule {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 160px;
        }
        .lp-rule-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.55), transparent);
        }
        .lp-rule-gem {
          width: 5px; height: 5px;
          background: #d4af37;
          transform: rotate(45deg);
          box-shadow: 0 0 10px rgba(212,175,55,0.95);
          flex-shrink: 0;
        }

        /* TITRE — or vif sur noir, très lisible */
        .lp-title {
          font-family: 'Playfair Display', 'Georgia', serif;
          font-size: clamp(2.2rem, 9vw, 3rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: 0.01em;
          margin: 0;
          background: linear-gradient(150deg, #f5e6a0 0%, #d4af37 42%, #f0dc80 70%, #b8922c 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: title-glow 5s ease-in-out infinite alternate;
        }

        /* SOUS-TITRE — blanc ivoire chaud */
        .lp-subtitle {
          font-size: clamp(0.88rem, 3.5vw, 1rem);
          font-weight: 300;
          line-height: 1.78;
          color: rgba(235,225,200,0.82);
          letter-spacing: 0.02em;
          margin: 0;
          max-width: 270px;
        }

        /* CTA */
        .lp-cta {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          max-width: 250px;
          padding: 15px 28px;
          background: transparent;
          border: 1px solid rgba(212,175,55,0.42);
          border-radius: 2px;
          cursor: pointer;
          overflow: hidden;
          transition: border-color 0.35s, transform 0.25s, box-shadow 0.35s;
          outline: none;
        }
        .lp-cta::before {
          content: '';
          position: absolute; inset: 3px;
          border: 1px solid rgba(212,175,55,0.13);
          border-radius: 1px;
          pointer-events: none;
        }
        .lp-cta:hover {
          border-color: rgba(212,175,55,0.88);
          box-shadow: 0 0 40px rgba(212,175,55,0.20), 0 0 80px rgba(180,130,10,0.08);
          transform: translateY(-2px);
        }
        .lp-cta:active { transform: translateY(0); }

        .lp-cta-text {
          font-family: 'Playfair Display', serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #f0e4b0;
          transition: color 0.3s;
          position: relative; z-index: 2;
        }
        .lp-cta:hover .lp-cta-text { color: #f8f0d0; }

        .lp-cta-arrow {
          font-size: 1rem;
          color: rgba(212,175,55,0.72);
          transition: transform 0.3s, color 0.3s;
          position: relative; z-index: 2;
        }
        .lp-cta:hover .lp-cta-arrow {
          transform: translateX(4px);
          color: #d4af37;
        }

        .lp-cta-shimmer {
          position: absolute;
          top: 0; left: -100%;
          width: 55%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.13), transparent);
          transform: skewX(-18deg);
          transition: left 0.6s ease;
          pointer-events: none;
        }
        .lp-cta:hover .lp-cta-shimmer { left: 150%; }

        /* MENTION */
        .lp-mention {
          font-size: 0.68rem;
          color: rgba(210,195,165,0.45);
          letter-spacing: 0.02em;
          line-height: 1.5;
          margin: 0;
          max-width: 230px;
        }

        /* ANIMATIONS */
        @keyframes orb-float {
          0%   { transform: translateX(-50%) scale(1) translateY(0); }
          100% { transform: translateX(-50%) scale(1.1) translateY(-20px); }
        }
        @keyframes title-glow {
          0%   { filter: drop-shadow(0 0 16px rgba(212,175,55,0.18)); }
          100% { filter: drop-shadow(0 0 42px rgba(212,175,55,0.52)); }
        }
      `}</style>
    </div>
  );
}