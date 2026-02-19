import { useState } from 'react';
import ProgressBar from '@/components/ProgressBar';
import { getZodiacSign } from '@/data/oracleData';
import { useLanguage } from '@/contexts/LanguageContext';

interface ZodiacSign {
  symbol: string;
  name: string;
  dates: string;
}

interface DatePageProps {
  onNext: (birthDate: string, zodiacSign?: ZodiacSign) => void;
  onBack: () => void;
}

export default function DatePage({ onNext, onBack }: DatePageProps) {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const { t } = useLanguage();

  const dayOptions = Array.from({ length: 31 }, (_, i) => ({
    value: (i + 1).toString(),
    label: (i + 1).toString().padStart(2, '0')
  }));

  const monthOptions = Array.from({ length: 12 }, (_, i) => ({
    value: (i + 1).toString(),
    label: t(`date.months.${i + 1}`)
  }));

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 100 }, (_, i) => ({
    value: (currentYear - i).toString(),
    label: (currentYear - i).toString()
  }));

  const zodiacSign = day && month
    ? getZodiacSign(parseInt(month), parseInt(day)) as ZodiacSign | undefined
    : undefined;

  const handleNext = () => {
    if (day && month && year) {
      const birthDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      onNext(birthDate, zodiacSign);
    }
  };

  const isComplete = day && month && year;

  const arrow = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23a07830'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`;

  return (
    <div className="dp-root">
      {/* Fond */}
      <div className="dp-bg" aria-hidden>
        <div className="dp-orb dp-orb-1" />
        <div className="dp-orb dp-orb-2" />
        <div className="dp-grain" />
      </div>

      {/* Progress */}
      <div className="dp-progress">
        <ProgressBar progress={66} />
      </div>

      {/* Contenu */}
      <div className="dp-content">

        <div className="dp-header">
          <h1 className="dp-title">{t('date.title')}</h1>
          <p className="dp-subtitle">{t('date.subtitle')}</p>
          <div className="dp-rule">
            <span className="dp-rule-line" />
            <span className="dp-rule-gem" />
            <span className="dp-rule-line" />
          </div>
        </div>

        {/* Signe zodiacal */}
        {zodiacSign && (
          <div className="dp-zodiac">
            <span className="dp-zodiac-symbol">{zodiacSign.symbol}</span>
            <div className="dp-zodiac-info">
              <span className="dp-zodiac-name">{zodiacSign.name}</span>
              <span className="dp-zodiac-dates">{zodiacSign.dates}</span>
            </div>
          </div>
        )}

        {/* Sélecteurs */}
        <div className="dp-fields">
          <div className="dp-field-group">
            <label className="dp-field-label">{t('date.month')}</label>
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className={`dp-select ${month ? 'dp-select-filled' : ''}`}
              style={{ backgroundImage: arrow, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', backgroundSize: '16px' }}
            >
              <option value="">—</option>
              {monthOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="dp-row">
            <div className="dp-field-group">
              <label className="dp-field-label">{t('date.day')}</label>
              <select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className={`dp-select ${day ? 'dp-select-filled' : ''}`}
                style={{ backgroundImage: arrow, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', backgroundSize: '16px' }}
              >
                <option value="">—</option>
                {dayOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <div className="dp-field-group">
              <label className="dp-field-label">{t('date.year')}</label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className={`dp-select ${year ? 'dp-select-filled' : ''}`}
                style={{ backgroundImage: arrow, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', backgroundSize: '16px' }}
              >
                <option value="">——</option>
                {yearOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Boutons */}
        <div className="dp-actions">
          <button onClick={onBack} className="dp-btn-back">
            ← {t('common.back')}
          </button>
          <button
            onClick={handleNext}
            disabled={!isComplete}
            className={`dp-btn-next ${isComplete ? '' : 'dp-btn-disabled'}`}
          >
            <span>{t('date.next')}</span>
            <span className="dp-btn-arrow">→</span>
            <span className="dp-btn-shimmer" aria-hidden />
          </button>
        </div>
      </div>

      <style>{`
        .dp-root {
          position: relative;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #080808;
          overflow: hidden;
          font-family: 'Cormorant Garamond', 'Georgia', serif;
        }

        .dp-bg { position: absolute; inset: 0; pointer-events: none; }

        .dp-orb {
          position: absolute; border-radius: 50%; filter: blur(80px);
        }
        .dp-orb-1 {
          width: 440px; height: 440px; top: -100px; left: 50%; transform: translateX(-50%);
          background: radial-gradient(ellipse, rgba(180,140,30,0.10) 0%, transparent 65%);
          animation: dp-drift 14s ease-in-out infinite alternate;
        }
        .dp-orb-2 {
          width: 300px; height: 300px; bottom: 0; right: -50px;
          background: radial-gradient(ellipse, rgba(140,100,20,0.07) 0%, transparent 65%);
          animation: dp-drift 10s ease-in-out infinite alternate-reverse;
        }

        .dp-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          opacity: 0.45;
        }

        .dp-progress {
          width: 100%; padding: 32px 20px 0; position: relative; z-index: 10;
        }

        .dp-content {
          position: relative; z-index: 10;
          flex: 1;
          display: flex; flex-direction: column; justify-content: center; align-items: center;
          gap: 24px;
          padding: 0 24px 50px;
          width: 100%; max-width: 360px;
          text-align: center;
        }

        /* HEADER */
        .dp-header { display: flex; flex-direction: column; align-items: center; gap: 10px; }
        .dp-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.7rem, 7vw, 2.4rem);
          font-weight: 700; margin: 0; letter-spacing: 0.01em;
          background: linear-gradient(150deg, #f5e6a0 0%, #d4af37 42%, #f0dc80 70%, #b8922c 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
          animation: dp-glow 5s ease-in-out infinite alternate;
        }
        .dp-subtitle {
          font-size: clamp(0.88rem, 3.2vw, 1rem);
          font-weight: 300; line-height: 1.78; color: rgba(235,225,200,0.82);
          margin: 0; max-width: 260px; letter-spacing: 0.02em;
        }
        .dp-rule { display: flex; align-items: center; gap: 10px; width: 130px; margin-top: 4px; }
        .dp-rule-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.55), transparent);
        }
        .dp-rule-gem {
          width: 5px; height: 5px; background: #d4af37; transform: rotate(45deg);
          box-shadow: 0 0 10px rgba(212,175,55,0.95); flex-shrink: 0;
        }

        /* ZODIAC */
        .dp-zodiac {
          display: flex; align-items: center; gap: 14px;
          padding: 12px 20px;
          border: 1px solid rgba(212,175,55,0.30);
          border-radius: 2px;
          background: rgba(212,175,55,0.04);
          width: 100%;
          animation: dp-fadein 0.4s ease;
        }
        .dp-zodiac-symbol {
          font-size: 1.7rem; line-height: 1;
          color: #d4af37;
          filter: drop-shadow(0 0 6px rgba(212,175,55,0.55));
        }
        .dp-zodiac-info { display: flex; flex-direction: column; align-items: flex-start; }
        .dp-zodiac-name {
          font-family: 'Playfair Display', serif;
          font-size: 1rem; font-weight: 600;
          color: #f0ebe0; letter-spacing: 0.04em;
        }
        .dp-zodiac-dates { font-size: 0.72rem; color: rgba(210,195,165,0.55); }

        /* CHAMPS */
        .dp-fields { display: flex; flex-direction: column; gap: 12px; width: 100%; }
        .dp-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

        .dp-field-group { display: flex; flex-direction: column; gap: 6px; }
        .dp-field-label {
          font-size: 0.64rem; font-weight: 500;
          color: rgba(210,195,165,0.55);
          text-transform: uppercase; letter-spacing: 0.14em;
          text-align: left; padding-left: 2px;
        }

        .dp-select {
          width: 100%;
          height: 48px;
          padding: 0 36px 0 14px;
          background: rgba(12,10,4,0.80);
          border: 1px solid rgba(212,175,55,0.22);
          border-radius: 2px;
          color: rgba(235,225,200,0.75);
          font-size: 0.92rem;
          font-weight: 400;
          appearance: none;
          cursor: pointer;
          outline: none;
          transition: border-color 0.3s, color 0.3s;
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .dp-select:focus {
          border-color: rgba(212,175,55,0.58);
          color: #f0ebe0;
        }
        .dp-select-filled {
          border-color: rgba(212,175,55,0.40);
          color: #f0ebe0;
        }

        /* BOUTONS */
        .dp-actions { display: flex; gap: 12px; width: 100%; align-items: center; }

        .dp-btn-back {
          padding: 13px 18px;
          background: transparent;
          border: 1px solid rgba(212,175,55,0.20);
          border-radius: 2px;
          color: rgba(210,195,165,0.65);
          font-size: 0.82rem;
          letter-spacing: 0.06em;
          cursor: pointer;
          transition: border-color 0.3s, color 0.3s;
          outline: none;
          white-space: nowrap;
          flex-shrink: 0;
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .dp-btn-back:hover {
          border-color: rgba(212,175,55,0.50);
          color: rgba(235,225,200,0.90);
        }

        .dp-btn-next {
          position: relative;
          flex: 1;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          padding: 14px 20px;
          background: transparent;
          border: 1px solid rgba(212,175,55,0.42);
          border-radius: 2px;
          cursor: pointer;
          overflow: hidden;
          outline: none;
          transition: border-color 0.35s, transform 0.25s, box-shadow 0.35s;
          font-family: 'Playfair Display', serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          color: #f0e4b0;
        }
        .dp-btn-next::before {
          content: ''; position: absolute; inset: 3px;
          border: 1px solid rgba(212,175,55,0.10); border-radius: 1px; pointer-events: none;
        }
        .dp-btn-disabled { opacity: 0.20; cursor: not-allowed; pointer-events: none; }
        .dp-btn-next:not(.dp-btn-disabled):hover {
          border-color: rgba(212,175,55,0.88);
          box-shadow: 0 0 32px rgba(212,175,55,0.18);
          transform: translateY(-1px);
        }
        .dp-btn-arrow {
          color: rgba(212,175,55,0.72);
          transition: transform 0.3s;
        }
        .dp-btn-next:not(.dp-btn-disabled):hover .dp-btn-arrow { transform: translateX(3px); }
        .dp-btn-shimmer {
          position: absolute; top: 0; left: -100%; width: 55%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.12), transparent);
          transform: skewX(-18deg); transition: left 0.55s;
        }
        .dp-btn-next:not(.dp-btn-disabled):hover .dp-btn-shimmer { left: 150%; }

        .dp-select option {
          background: #0e0b04;
          color: #d0c090;
          padding: 10px;
        }

        @keyframes dp-drift {
          0%   { transform: translateX(-50%) scale(1) translateY(0); }
          100% { transform: translateX(-50%) scale(1.08) translateY(-18px); }
        }
        @keyframes dp-fadein {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes dp-glow {
          0%   { filter: drop-shadow(0 0 14px rgba(212,175,55,0.15)); }
          100% { filter: drop-shadow(0 0 38px rgba(212,175,55,0.48)); }
        }
      `}</style>
    </div>
  );
}