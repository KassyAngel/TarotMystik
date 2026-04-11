import LanguageSelector from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

interface LandingPageProps {
  onEnter: () => void;
}

export default function LandingPage({ onEnter }: LandingPageProps) {
  const { t } = useLanguage();

  return (
    <div className="lp-root">
      <div className="lp-lang">
        <LanguageSelector />
      </div>

      <div className="lp-bg" aria-hidden>
        <div className="lp-orb lp-orb-1" />
        <div className="lp-orb lp-orb-2" />
        <div className="lp-orb lp-orb-3" />
        <div className="lp-vignette" />
      </div>

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
        .lp-root {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          overflow: hidden;
          font-family: 'Cormorant Garamond', 'Georgia', serif;
        }
        .lp-lang {
          position: absolute;
          top: 18px; right: 18px;
          z-index: 20;
        }
        .lp-bg { position: absolute; inset: 0; pointer-events: none; }
        .lp-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
        }
        .lp-orb-1 {
          width: 500px; height: 500px;
          top: -160px; left: 50%;
          transform: translateX(-50%);
          background: radial-gradient(ellipse, rgba(0,0,0,0.45) 0%, transparent 70%);
          animation: lp-float 16s ease-in-out infinite alternate;
        }
        .lp-orb-2 {
          width: 340px; height: 340px;
          bottom: -80px; right: -80px;
          background: radial-gradient(ellipse, rgba(0,0,0,0.35) 0%, transparent 70%);
          animation: lp-float 11s ease-in-out infinite alternate-reverse;
        }
        .lp-orb-3 {
          width: 260px; height: 260px;
          bottom: 60px; left: -60px;
          background: radial-gradient(ellipse, rgba(0,0,0,0.30) 0%, transparent 70%);
          animation: lp-float 20s ease-in-out infinite alternate;
        }
        .lp-vignette {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.25) 100%);
        }
        .lp-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 26px;
          padding: 40px 28px;
          max-width: 340px;
          width: 100%;
          text-align: center;
        }
        .lp-rule {
          display: flex; align-items: center; gap: 10px; width: 160px;
        }
        .lp-rule-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,127,0.55), transparent);
        }
        .lp-rule-gem {
          width: 5px; height: 5px;
          background: #c9a87f;
          transform: rotate(45deg);
          box-shadow: 0 0 10px rgba(201,168,127,0.9);
          flex-shrink: 0;
        }
        .lp-title {
          font-family: 'Playfair Display', 'Georgia', serif;
          font-size: clamp(2.4rem, 9vw, 3.2rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: 0.01em;
          margin: 0;
          background: linear-gradient(150deg, #f5e6cc 0%, #c9a87f 40%, #eeddb0 70%, #b8892c 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: lp-glow 5s ease-in-out infinite alternate;
          text-shadow: none;
        }
        .lp-subtitle {
          font-size: clamp(0.95rem, 3.5vw, 1.05rem);
          font-weight: 400;
          line-height: 1.75;
          color: rgba(240, 228, 205, 0.90);
          letter-spacing: 0.02em;
          margin: 0;
          max-width: 270px;
          text-shadow: 0 1px 8px rgba(0,0,0,0.6);
        }
        .lp-cta {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          max-width: 250px;
          padding: 16px 28px;
          background: rgba(10, 8, 20, 0.55);
          border: 1px solid rgba(201,168,127,0.50);
          border-radius: 3px;
          cursor: pointer;
          overflow: hidden;
          transition: border-color 0.35s, transform 0.25s, box-shadow 0.35s, background 0.35s;
          outline: none;
          backdrop-filter: blur(6px);
        }
        .lp-cta::before {
          content: '';
          position: absolute; inset: 3px;
          border: 1px solid rgba(201,168,127,0.15);
          border-radius: 1px;
          pointer-events: none;
        }
        .lp-cta:hover {
          border-color: rgba(201,168,127,0.90);
          background: rgba(20,15,35,0.70);
          box-shadow: 0 0 40px rgba(201,168,127,0.22), 0 0 80px rgba(150,110,50,0.10);
          transform: translateY(-2px);
        }
        .lp-cta:active { transform: translateY(0); }
        .lp-cta-text {
          font-family: 'Playfair Display', serif;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #f0e4cc;
          transition: color 0.3s;
          position: relative; z-index: 2;
        }
        .lp-cta:hover .lp-cta-text { color: #faf0de; }
        .lp-cta-arrow {
          font-size: 1rem;
          color: rgba(201,168,127,0.80);
          transition: transform 0.3s, color 0.3s;
          position: relative; z-index: 2;
        }
        .lp-cta:hover .lp-cta-arrow {
          transform: translateX(4px);
          color: #c9a87f;
        }
        .lp-cta-shimmer {
          position: absolute; top: 0; left: -100%;
          width: 55%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(201,168,127,0.14), transparent);
          transform: skewX(-18deg);
          transition: left 0.6s ease;
          pointer-events: none;
        }
        .lp-cta:hover .lp-cta-shimmer { left: 150%; }
        .lp-mention {
          font-size: 0.70rem;
          color: rgba(220, 205, 178, 0.55);
          letter-spacing: 0.02em;
          line-height: 1.5;
          margin: 0;
          max-width: 230px;
          text-shadow: 0 1px 4px rgba(0,0,0,0.5);
        }
        @keyframes lp-float {
          0%   { transform: translateX(-50%) scale(1) translateY(0); }
          100% { transform: translateX(-50%) scale(1.1) translateY(-20px); }
        }
        @keyframes lp-glow {
          0%   { filter: drop-shadow(0 0 16px rgba(201,168,127,0.20)); }
          100% { filter: drop-shadow(0 0 42px rgba(201,168,127,0.55)); }
        }
      `}</style>
    </div>
  );
}