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
      {/* Fond */}
      <div className="gp-bg" aria-hidden>
        <div className="gp-orb gp-orb-1" />
        <div className="gp-orb gp-orb-2" />
        <div className="gp-grain" />
      </div>

      {/* Progress */}
      <div className="gp-progress">
        <ProgressBar progress={100} />
      </div>

      {/* Contenu */}
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

        {/* Options */}
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

        {/* Retour */}
        <button onClick={onBack} className="gp-btn-back" data-testid="button-back">
          ← {t('gender.back') || t('common.back')}
        </button>
      </div>

      <style>{`
        .gp-root {
          position: relative;
          min-height: 100svh;
          display: flex; flex-direction: column; align-items: center;
          background: #080808;
          overflow: hidden;
          font-family: 'Cormorant Garamond', 'Georgia', serif;
        }

        .gp-bg { position: absolute; inset: 0; pointer-events: none; }

        .gp-orb { position: absolute; border-radius: 50%; filter: blur(80px); }
        .gp-orb-1 {
          width: 460px; height: 460px; top: -100px; left: 50%; transform: translateX(-50%);
          background: radial-gradient(ellipse, rgba(180,140,30,0.10) 0%, transparent 65%);
          animation: gp-drift 14s ease-in-out infinite alternate;
        }
        .gp-orb-2 {
          width: 320px; height: 320px; bottom: -40px; right: -60px;
          background: radial-gradient(ellipse, rgba(140,100,20,0.07) 0%, transparent 65%);
          animation: gp-drift 10s ease-in-out infinite alternate-reverse;
        }

        .gp-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          opacity: 0.45;
        }

        .gp-progress { width: 100%; padding: 32px 20px 0; position: relative; z-index: 10; }

        .gp-content {
          position: relative; z-index: 10;
          flex: 1; display: flex; flex-direction: column;
          justify-content: center; align-items: center;
          gap: 32px;
          padding: 0 24px 60px;
          width: 100%; max-width: 360px;
          text-align: center;
        }

        /* HEADER */
        .gp-header { display: flex; flex-direction: column; align-items: center; gap: 10px; }
        .gp-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.9rem, 7vw, 2.5rem);
          font-weight: 700; margin: 0;
          background: linear-gradient(150deg, #f5e6a0 0%, #d4af37 42%, #f0dc80 70%, #b8922c 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
          letter-spacing: 0.01em;
          animation: gp-glow 5s ease-in-out infinite alternate;
        }
        .gp-subtitle {
          font-size: clamp(0.88rem, 3.3vw, 1rem);
          font-weight: 300; line-height: 1.78; color: rgba(235,225,200,0.82);
          margin: 0; max-width: 265px; letter-spacing: 0.02em;
        }
        .gp-rule { display: flex; align-items: center; gap: 10px; width: 130px; margin-top: 4px; }
        .gp-rule-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.55), transparent);
        }
        .gp-rule-gem {
          width: 5px; height: 5px; background: #d4af37; transform: rotate(45deg);
          box-shadow: 0 0 10px rgba(212,175,55,0.95); flex-shrink: 0;
        }

        /* OPTIONS */
        .gp-options { display: flex; flex-direction: column; gap: 12px; width: 100%; }

        .gp-option {
          position: relative;
          display: flex; align-items: center; gap: 16px;
          padding: 16px 20px;
          background: rgba(12,10,4,0.75);
          border: 1px solid rgba(212,175,55,0.18);
          border-radius: 2px;
          cursor: pointer; outline: none;
          text-align: left;
          transition: border-color 0.3s, background 0.3s, transform 0.2s;
          overflow: hidden;
        }
        .gp-option:hover {
          border-color: rgba(212,175,55,0.50);
          background: rgba(20,16,4,0.85);
          transform: translateX(3px);
        }
        .gp-option-selected {
          border-color: rgba(212,175,55,0.58);
          background: rgba(212,175,55,0.05);
          transform: translateX(4px);
        }

        /* Glyph */
        .gp-glyph {
          display: flex; align-items: center; justify-content: center;
          width: 44px; height: 44px; flex-shrink: 0;
          border: 1px solid rgba(212,175,55,0.25);
          border-radius: 50%;
          font-size: 1.3rem;
          color: rgba(212,175,55,0.65);
          background: rgba(10,8,2,0.90);
          transition: border-color 0.3s, color 0.3s, box-shadow 0.3s;
          font-family: 'Georgia', serif;
        }
        .gp-option:hover .gp-glyph {
          border-color: rgba(212,175,55,0.50);
          color: rgba(212,175,55,0.90);
        }
        .gp-option-selected .gp-glyph {
          border-color: rgba(212,175,55,0.65);
          color: #d4af37;
          box-shadow: 0 0 16px rgba(212,175,55,0.22);
        }

        /* Label */
        .gp-option-label {
          flex: 1;
          font-size: 1rem; font-weight: 400;
          letter-spacing: 0.05em;
          color: rgba(235,225,200,0.78);
          transition: color 0.3s;
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .gp-option:hover .gp-option-label { color: rgba(245,238,215,0.95); }
        .gp-option-selected .gp-option-label { color: #f0ebe0; }

        /* Coche */
        .gp-check {
          font-size: 0.85rem;
          color: rgba(212,175,55,0.92);
          flex-shrink: 0;
          animation: gp-checkin 0.3s ease;
        }

        /* Shimmer sélection */
        .gp-shimmer {
          position: absolute; top: 0; left: -100%; width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.07), transparent);
          transform: skewX(-18deg);
          animation: gp-shimmer-anim 0.6s ease forwards;
        }

        /* RETOUR */
        .gp-btn-back {
          padding: 13px 22px;
          background: transparent;
          border: 1px solid rgba(212,175,55,0.20);
          border-radius: 2px;
          color: rgba(210,195,165,0.62);
          font-size: 0.82rem; letter-spacing: 0.06em;
          cursor: pointer; transition: border-color 0.3s, color 0.3s; outline: none;
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .gp-btn-back:hover {
          border-color: rgba(212,175,55,0.50);
          color: rgba(235,225,200,0.90);
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
          from { left: -100%; }
          to   { left: 160%; }
        }
        @keyframes gp-glow {
          0%   { filter: drop-shadow(0 0 14px rgba(212,175,55,0.15)); }
          100% { filter: drop-shadow(0 0 38px rgba(212,175,55,0.48)); }
        }
      `}</style>
    </div>
  );
}