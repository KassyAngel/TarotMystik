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
      <div className="np-bg" aria-hidden>
        <div className="np-orb np-orb-1" />
        <div className="np-orb np-orb-2" />
        <div className="np-vignette" />
      </div>

      <div className="np-progress">
        <ProgressBar progress={33} />
      </div>

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
          background: transparent;
          overflow: hidden;
          font-family: 'Cormorant Garamond', 'Georgia', serif;
        }
        .np-bg { position: absolute; inset: 0; pointer-events: none; }
        .np-orb {
          position: absolute; border-radius: 50%; filter: blur(80px);
        }
        .np-orb-1 {
          width: 480px; height: 480px;
          top: -100px; left: 50%; transform: translateX(-50%);
          background: radial-gradient(ellipse, rgba(0,0,0,0.40) 0%, transparent 70%);
          animation: np-drift 14s ease-in-out infinite alternate;
        }
        .np-orb-2 {
          width: 300px; height: 300px;
          bottom: -40px; right: -60px;
          background: radial-gradient(ellipse, rgba(0,0,0,0.30) 0%, transparent 70%);
          animation: np-drift 10s ease-in-out infinite alternate-reverse;
        }
        .np-vignette {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.20) 100%);
        }
        .np-progress {
          width: 100%; padding: 32px 20px 0; position: relative; z-index: 10;
        }
        .np-content {
          position: relative; z-index: 10;
          flex: 1;
          display: flex; flex-direction: column;
          justify-content: center; align-items: center;
          gap: 36px;
          padding: 0 28px 60px;
          width: 100%; max-width: 380px;
          text-align: center;
        }
        .np-header {
          display: flex; flex-direction: column; align-items: center; gap: 12px;
        }
        .np-title {
          font-family: 'Playfair Display', 'Georgia', serif;
          font-size: clamp(2rem, 7vw, 2.7rem);
          font-weight: 700; margin: 0;
          background: linear-gradient(150deg, #f5e6cc 0%, #c9a87f 40%, #eeddb0 70%, #b8892c 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
          letter-spacing: 0.01em;
          animation: np-glow 5s ease-in-out infinite alternate;
        }
        .np-subtitle {
          font-size: clamp(0.95rem, 3.5vw, 1.05rem);
          font-weight: 400; line-height: 1.75;
          color: rgba(240, 228, 205, 0.90);
          margin: 0; max-width: 270px; letter-spacing: 0.02em;
          text-shadow: 0 1px 8px rgba(0,0,0,0.6);
        }
        .np-rule {
          display: flex; align-items: center; gap: 10px; width: 140px; margin-top: 4px;
        }
        .np-rule-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,127,0.55), transparent);
        }
        .np-rule-gem {
          width: 5px; height: 5px; background: #c9a87f; transform: rotate(45deg);
          box-shadow: 0 0 10px rgba(201,168,127,0.9); flex-shrink: 0;
        }
        .np-field-wrap {
          position: relative; width: 100%; padding-top: 22px;
        }
        .np-label {
          position: absolute; top: 30px; left: 0; right: 0;
          text-align: center;
          font-size: 0.95rem; font-weight: 400;
          color: rgba(230, 215, 188, 0.65);
          letter-spacing: 0.05em;
          pointer-events: none;
          transition: top 0.25s, font-size 0.25s, color 0.25s;
          text-shadow: 0 1px 6px rgba(0,0,0,0.5);
        }
        .np-label-up {
          top: 0; font-size: 0.70rem;
          color: rgba(201,168,127,0.95);
          letter-spacing: 0.14em; text-transform: uppercase;
        }
        .np-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(201,168,127,0.35);
          padding: 10px 0 8px;
          font-size: 1.5rem; font-weight: 500;
          color: #f5ede0;
          text-align: center; letter-spacing: 0.08em;
          outline: none;
          transition: border-color 0.3s;
          font-family: 'Playfair Display', serif;
          text-shadow: 0 1px 8px rgba(0,0,0,0.4);
        }
        .np-field-focused .np-input,
        .np-field-filled .np-input {
          border-bottom-color: rgba(201,168,127,0.75);
        }
        .np-field-bar {
          position: absolute; bottom: 0; left: 50%; right: 50%;
          height: 1.5px;
          background: linear-gradient(90deg, #c9a87f, #eeddb0);
          box-shadow: 0 0 6px rgba(201,168,127,0.55);
          transition: left 0.35s, right 0.35s;
        }
        .np-field-focused .np-field-bar,
        .np-field-filled .np-field-bar { left: 0; right: 0; }
        .np-btn {
          position: relative;
          display: flex; align-items: center; justify-content: center; gap: 12px;
          width: 100%; max-width: 240px;
          padding: 16px 28px;
          background: rgba(10, 8, 20, 0.55);
          border: 1px solid rgba(201,168,127,0.50);
          border-radius: 3px;
          cursor: pointer; overflow: hidden;
          transition: border-color 0.35s, transform 0.25s, box-shadow 0.35s, opacity 0.3s, background 0.35s;
          outline: none;
          backdrop-filter: blur(6px);
        }
        .np-btn::before {
          content: ''; position: absolute; inset: 3px;
          border: 1px solid rgba(201,168,127,0.14);
          border-radius: 1px; pointer-events: none;
        }
        .np-btn:disabled { opacity: 0.28; cursor: not-allowed; pointer-events: none; }
        .np-btn:not(:disabled):hover {
          border-color: rgba(201,168,127,0.90);
          background: rgba(20,15,35,0.70);
          box-shadow: 0 0 36px rgba(201,168,127,0.22);
          transform: translateY(-2px);
        }
        .np-btn-text {
          font-family: 'Playfair Display', serif;
          font-size: 0.88rem; font-weight: 600;
          letter-spacing: 0.26em; text-transform: uppercase;
          color: #f0e4cc; position: relative; z-index: 2;
        }
        .np-btn-arrow {
          font-size: 1rem; color: rgba(201,168,127,0.85);
          transition: transform 0.3s; position: relative; z-index: 2;
        }
        .np-btn:not(:disabled):hover .np-btn-arrow { transform: translateX(4px); }
        .np-btn-shimmer {
          position: absolute; top: 0; left: -100%;
          width: 55%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(201,168,127,0.13), transparent);
          transform: skewX(-18deg); transition: left 0.55s ease;
        }
        .np-btn:not(:disabled):hover .np-btn-shimmer { left: 150%; }
        @keyframes np-drift {
          0%   { transform: translateX(-50%) translateY(0) scale(1); }
          100% { transform: translateX(-50%) translateY(-18px) scale(1.07); }
        }
        @keyframes np-glow {
          0%   { filter: drop-shadow(0 0 14px rgba(201,168,127,0.18)); }
          100% { filter: drop-shadow(0 0 38px rgba(201,168,127,0.55)); }
        }
      `}</style>
    </div>
  );
}