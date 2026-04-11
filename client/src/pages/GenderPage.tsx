import { useState, useEffect } from 'react';
import ProgressBar from '@/components/ProgressBar';
import { useLanguage } from '@/contexts/LanguageContext';

interface GenderPageProps {
  onNext: (gender: string) => void;
  onBack: () => void;
}

export default function GenderPage({ onNext, onBack }: GenderPageProps) {
  const [selectedGender, setSelectedGender] = useState('');
  const { t } = useLanguage();

  const genderOptions = [
    { value: 'homme', label: t('gender.male'),   glyph: '♂' },
    { value: 'femme', label: t('gender.female'), glyph: '♀' },
    { value: 'autre', label: t('gender.other'),  glyph: '⊕' },
  ];

  useEffect(() => {
    if (selectedGender) {
      const timer = setTimeout(() => onNext(selectedGender), 420);
      return () => clearTimeout(timer);
    }
  }, [selectedGender, onNext]);

  return (
    <div className="gp-root">
      <div className="gp-bg" aria-hidden>
        <div className="gp-orb gp-orb-1" />
        <div className="gp-orb gp-orb-2" />
        <div className="gp-vignette" />
      </div>

      <div className="gp-progress">
        <ProgressBar progress={100} />
      </div>

      <div className="gp-content">
        <div className="gp-header">
          <h1 className="gp-title">{t('gender.title')}</h1>
          <p className="gp-subtitle">{t('gender.subtitle')}</p>
          <div className="gp-rule">
            <span className="gp-rule-line" />
            <span className="gp-rule-gem" />
            <span className="gp-rule-line" />
          </div>
        </div>

        <div className="gp-options">
          {genderOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setSelectedGender(opt.value)}
              className={`gp-option ${selectedGender === opt.value ? 'gp-option-selected' : ''}`}
              data-testid={`gender-${opt.value}`}
            >
              <span className="gp-glyph">{opt.glyph}</span>
              <span className="gp-option-label">{opt.label}</span>
              {selectedGender === opt.value && (
                <span className="gp-check" aria-hidden>✓</span>
              )}
              {selectedGender === opt.value && (
                <span className="gp-shimmer" aria-hidden />
              )}
            </button>
          ))}
        </div>

        <button onClick={onBack} className="gp-btn-back" data-testid="button-back">
          ← {t('gender.back') || t('common.back')}
        </button>
      </div>

      <style>{`
        .gp-root {
          position: relative;
          min-height: 100svh;
          display: flex; flex-direction: column; align-items: center;
          background: transparent;
          overflow: hidden;
          font-family: 'Cormorant Garamond', 'Georgia', serif;
        }
        .gp-bg { position: absolute; inset: 0; pointer-events: none; }
        .gp-orb { position: absolute; border-radius: 50%; filter: blur(80px); }
        .gp-orb-1 {
          width: 460px; height: 460px; top: -100px; left: 50%; transform: translateX(-50%);
          background: radial-gradient(ellipse, rgba(0,0,0,0.40) 0%, transparent 70%);
          animation: gp-drift 14s ease-in-out infinite alternate;
        }
        .gp-orb-2 {
          width: 320px; height: 320px; bottom: -40px; right: -60px;
          background: radial-gradient(ellipse, rgba(0,0,0,0.30) 0%, transparent 70%);
          animation: gp-drift 10s ease-in-out infinite alternate-reverse;
        }
        .gp-vignette {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.20) 100%);
        }
        .gp-progress { width: 100%; padding: 32px 20px 0; position: relative; z-index: 10; }
        .gp-content {
          position: relative; z-index: 10;
          flex: 1; display: flex; flex-direction: column;
          justify-content: center; align-items: center;
          gap: 28px;
          padding: 0 24px 60px;
          width: 100%; max-width: 360px;
          text-align: center;
        }
        .gp-header { display: flex; flex-direction: column; align-items: center; gap: 10px; }
        .gp-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 7vw, 2.6rem);
          font-weight: 700; margin: 0;
          background: linear-gradient(150deg, #f5e6cc 0%, #c9a87f 40%, #eeddb0 70%, #b8892c 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
          letter-spacing: 0.01em;
          animation: gp-glow 5s ease-in-out infinite alternate;
        }
        .gp-subtitle {
          font-size: clamp(0.95rem, 3.3vw, 1.05rem);
          font-weight: 400; line-height: 1.75;
          color: rgba(240, 228, 205, 0.90);
          margin: 0; max-width: 265px; letter-spacing: 0.02em;
          text-shadow: 0 1px 8px rgba(0,0,0,0.6);
        }
        .gp-rule { display: flex; align-items: center; gap: 10px; width: 130px; margin-top: 4px; }
        .gp-rule-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,127,0.55), transparent);
        }
        .gp-rule-gem {
          width: 5px; height: 5px; background: #c9a87f; transform: rotate(45deg);
          box-shadow: 0 0 10px rgba(201,168,127,0.9); flex-shrink: 0;
        }
        .gp-options { display: flex; flex-direction: column; gap: 12px; width: 100%; }
        .gp-option {
          position: relative;
          display: flex; align-items: center; gap: 16px;
          padding: 16px 20px;
          background: rgba(8, 6, 18, 0.60);
          border: 1px solid rgba(201,168,127,0.25);
          border-radius: 3px;
          cursor: pointer; outline: none;
          text-align: left;
          transition: border-color 0.3s, background 0.3s, transform 0.2s;
          overflow: hidden;
          backdrop-filter: blur(6px);
        }
        .gp-option:hover {
          border-color: rgba(201,168,127,0.55);
          background: rgba(15, 12, 30, 0.80);
          transform: translateX(3px);
        }
        .gp-option-selected {
          border-color: rgba(201,168,127,0.65);
          background: rgba(201,168,127,0.08);
          transform: translateX(4px);
        }
        .gp-glyph {
          display: flex; align-items: center; justify-content: center;
          width: 46px; height: 46px; flex-shrink: 0;
          border: 1px solid rgba(201,168,127,0.30);
          border-radius: 50%;
          font-size: 1.4rem;
          color: rgba(201,168,127,0.75);
          background: rgba(6,4,14,0.85);
          transition: border-color 0.3s, color 0.3s, box-shadow 0.3s;
          font-family: 'Georgia', serif;
        }
        .gp-option:hover .gp-glyph {
          border-color: rgba(201,168,127,0.55);
          color: rgba(201,168,127,0.95);
        }
        .gp-option-selected .gp-glyph {
          border-color: rgba(201,168,127,0.70);
          color: #c9a87f;
          box-shadow: 0 0 16px rgba(201,168,127,0.25);
        }
        .gp-option-label {
          flex: 1;
          font-size: 1.05rem; font-weight: 400;
          letter-spacing: 0.04em;
          color: rgba(235, 222, 198, 0.88);
          transition: color 0.3s;
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .gp-option:hover .gp-option-label { color: #f5ede0; }
        .gp-option-selected .gp-option-label { color: #f5ede0; }
        .gp-check {
          font-size: 0.88rem;
          color: rgba(201,168,127,0.95);
          flex-shrink: 0;
          animation: gp-checkin 0.3s ease;
        }
        .gp-shimmer {
          position: absolute; top: 0; left: -100%; width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(201,168,127,0.08), transparent);
          transform: skewX(-18deg);
          animation: gp-shimmer-anim 0.6s ease forwards;
        }
        .gp-btn-back {
          padding: 13px 22px;
          background: rgba(8, 6, 18, 0.50);
          border: 1px solid rgba(201,168,127,0.28);
          border-radius: 3px;
          color: rgba(230, 215, 188, 0.85);
          font-size: 0.88rem; letter-spacing: 0.05em;
          cursor: pointer; transition: border-color 0.3s, color 0.3s, background 0.3s; outline: none;
          font-family: 'Cormorant Garamond', Georgia, serif;
          backdrop-filter: blur(4px);
        }
        .gp-btn-back:hover {
          border-color: rgba(201,168,127,0.60);
          color: #f5ede0;
          background: rgba(15,12,30,0.70);
        }
        @keyframes gp-drift {
          0%   { transform: translateX(-50%) translateY(0) scale(1); }
          100% { transform: translateX(-50%) translateY(-18px) scale(1.07); }
        }
        @keyframes gp-checkin {
          from { opacity: 0; transform: scale(0.5); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes gp-shimmer-anim {
          from { left: -100%; } to { left: 160%; }
        }
        @keyframes gp-glow {
          0%   { filter: drop-shadow(0 0 14px rgba(201,168,127,0.18)); }
          100% { filter: drop-shadow(0 0 38px rgba(201,168,127,0.55)); }
        }
      `}</style>
    </div>
  );
}