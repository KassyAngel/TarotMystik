import { useState } from 'react';
import ProgressBar from '@/components/ProgressBar';
import { useLanguage } from '@/contexts/LanguageContext';

interface NamePageProps {
  onNext: (name: string) => void;
}

export default function NamePage({ onNext }: NamePageProps) {
  const [name, setName] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = () => {
    if (name.trim()) onNext(name.trim());
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && name.trim()) handleSubmit();
  };

  return (
    <div className="np-root">
      {/* Fond */}
      <div className="np-bg" aria-hidden>
        <div className="np-orb np-orb-1" />
        <div className="np-orb np-orb-2" />
        <div className="np-grain" />
      </div>

      {/* Progress */}
      <div className="np-progress">
        <ProgressBar progress={33} />
      </div>

      {/* Contenu */}
      <div className="np-content">
        <div className="np-header">
          <h1 className="np-title">{t('name.title')}</h1>
          <p className="np-subtitle">{t('name.subtitle')}</p>
          <div className="np-rule">
            <span className="np-rule-line" />
            <span className="np-rule-gem" />
            <span className="np-rule-line" />
          </div>
        </div>

        {/* Input */}
        <div className={`np-field-wrap ${isFocused ? 'np-field-focused' : ''} ${name ? 'np-field-filled' : ''}`}>
          <label className={`np-label ${isFocused || name ? 'np-label-up' : ''}`}>
            {t('name.placeholder')}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="np-input"
            data-testid="input-name"
            autoComplete="given-name"
          />
          <span className="np-field-bar" />
        </div>

        {/* Bouton */}
        <button
          onClick={handleSubmit}
          disabled={!name.trim()}
          className="np-btn"
          data-testid="button-next"
        >
          <span className="np-btn-text">{t('name.next')}</span>
          <span className="np-btn-arrow">→</span>
          <span className="np-btn-shimmer" aria-hidden />
        </button>
      </div>

      <style>{`
        .np-root {
          position: relative;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #080808;
          overflow: hidden;
          font-family: 'Cormorant Garamond', 'Georgia', serif;
        }

        .np-bg { position: absolute; inset: 0; pointer-events: none; }

        .np-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
        }
        .np-orb-1 {
          width: 480px; height: 480px;
          top: -100px; left: 50%; transform: translateX(-50%);
          background: radial-gradient(ellipse, rgba(180,140,30,0.10) 0%, transparent 65%);
          animation: np-drift 14s ease-in-out infinite alternate;
        }
        .np-orb-2 {
          width: 300px; height: 300px;
          bottom: -40px; right: -60px;
          background: radial-gradient(ellipse, rgba(140,100,20,0.07) 0%, transparent 65%);
          animation: np-drift 10s ease-in-out infinite alternate-reverse;
        }

        .np-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          opacity: 0.45;
        }

        .np-progress {
          width: 100%;
          padding: 32px 20px 0;
          position: relative; z-index: 10;
        }

        .np-content {
          position: relative; z-index: 10;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 36px;
          padding: 0 28px 60px;
          width: 100%;
          max-width: 380px;
          text-align: center;
        }

        /* HEADER */
        .np-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .np-title {
          font-family: 'Playfair Display', 'Georgia', serif;
          font-size: clamp(1.9rem, 7vw, 2.6rem);
          font-weight: 700;
          margin: 0;
          background: linear-gradient(150deg, #f5e6a0 0%, #d4af37 42%, #f0dc80 70%, #b8922c 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          letter-spacing: 0.01em;
          animation: np-glow 5s ease-in-out infinite alternate;
        }
        .np-subtitle {
          font-size: clamp(0.88rem, 3.5vw, 1rem);
          font-weight: 300;
          line-height: 1.78;
          color: rgba(235,225,200,0.82);
          margin: 0;
          max-width: 270px;
          letter-spacing: 0.02em;
        }
        .np-rule {
          display: flex; align-items: center; gap: 10px; width: 140px; margin-top: 4px;
        }
        .np-rule-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.55), transparent);
        }
        .np-rule-gem {
          width: 5px; height: 5px;
          background: #d4af37; transform: rotate(45deg);
          box-shadow: 0 0 10px rgba(212,175,55,0.95); flex-shrink: 0;
        }

        /* CHAMP */
        .np-field-wrap {
          position: relative;
          width: 100%;
          padding-top: 22px;
        }
        .np-label {
          position: absolute;
          top: 30px; left: 0; right: 0;
          text-align: center;
          font-size: 0.92rem;
          font-weight: 400;
          color: rgba(210,195,165,0.50);
          letter-spacing: 0.05em;
          pointer-events: none;
          transition: top 0.25s, font-size 0.25s, color 0.25s;
        }
        .np-label-up {
          top: 0;
          font-size: 0.68rem;
          color: rgba(212,175,55,0.85);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .np-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(212,175,55,0.28);
          padding: 10px 0 8px;
          font-size: 1.4rem;
          font-weight: 500;
          color: #f0ebe0;
          text-align: center;
          letter-spacing: 0.08em;
          outline: none;
          transition: border-color 0.3s;
          font-family: 'Playfair Display', serif;
        }
        .np-field-focused .np-input,
        .np-field-filled .np-input {
          border-bottom-color: rgba(212,175,55,0.65);
        }
        .np-field-bar {
          position: absolute;
          bottom: 0; left: 50%; right: 50%;
          height: 1.5px;
          background: linear-gradient(90deg, #d4af37, #f0c840);
          box-shadow: 0 0 6px rgba(212,175,55,0.55);
          transition: left 0.35s, right 0.35s;
        }
        .np-field-focused .np-field-bar,
        .np-field-filled .np-field-bar {
          left: 0; right: 0;
        }

        /* BOUTON */
        .np-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          max-width: 240px;
          padding: 15px 28px;
          background: transparent;
          border: 1px solid rgba(212,175,55,0.42);
          border-radius: 2px;
          cursor: pointer;
          overflow: hidden;
          transition: border-color 0.35s, transform 0.25s, box-shadow 0.35s, opacity 0.3s;
          outline: none;
        }
        .np-btn::before {
          content: '';
          position: absolute; inset: 3px;
          border: 1px solid rgba(212,175,55,0.12);
          border-radius: 1px;
          pointer-events: none;
        }
        .np-btn:disabled {
          opacity: 0.22;
          cursor: not-allowed;
          pointer-events: none;
        }
        .np-btn:not(:disabled):hover {
          border-color: rgba(212,175,55,0.88);
          box-shadow: 0 0 36px rgba(212,175,55,0.20);
          transform: translateY(-2px);
        }
        .np-btn-text {
          font-family: 'Playfair Display', serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #f0e4b0;
          position: relative; z-index: 2;
        }
        .np-btn-arrow {
          font-size: 1rem;
          color: rgba(212,175,55,0.72);
          transition: transform 0.3s;
          position: relative; z-index: 2;
        }
        .np-btn:not(:disabled):hover .np-btn-arrow { transform: translateX(4px); }
        .np-btn-shimmer {
          position: absolute; top: 0; left: -100%;
          width: 55%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.12), transparent);
          transform: skewX(-18deg);
          transition: left 0.55s ease;
        }
        .np-btn:not(:disabled):hover .np-btn-shimmer { left: 150%; }

        @keyframes np-drift {
          0%   { transform: translateX(-50%) translateY(0) scale(1); }
          100% { transform: translateX(-50%) translateY(-18px) scale(1.07); }
        }
        @keyframes np-glow {
          0%   { filter: drop-shadow(0 0 14px rgba(212,175,55,0.15)); }
          100% { filter: drop-shadow(0 0 38px rgba(212,175,55,0.48)); }
        }
      `}</style>
    </div>
  );
}