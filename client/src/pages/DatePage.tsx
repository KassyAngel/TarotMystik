import { useState } from 'react';
import ProgressBar from '@/components/ProgressBar';
import { getZodiacSign } from '@/data/oracleData';
import { useLanguage } from '@/contexts/LanguageContext';
import { ZodiacSign } from '@shared/schema';

interface DatePageProps {
  onNext: (birthDate: string, zodiacSign?: ZodiacSign) => void;
  onBack: () => void;
}

const MONTH_NAMES = [
  '', 'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin',
  'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'
];

function formatZodiacDates(sign: ZodiacSign): string {
  const start = `${sign.startDate.day} ${MONTH_NAMES[sign.startDate.month]}`;
  const end = `${sign.endDate.day} ${MONTH_NAMES[sign.endDate.month]}`;
  return `${start} – ${end}`;
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

  const arrowSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23c9a87f'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`;

  return (
    <div className="dp-root">
      <div className="dp-bg" aria-hidden>
        <div className="dp-orb dp-orb-1" />
        <div className="dp-orb dp-orb-2" />
        <div className="dp-vignette" />
      </div>

      <div className="dp-progress">
        <ProgressBar progress={66} />
      </div>

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

        {zodiacSign && (
          <div className="dp-zodiac">
            <span className="dp-zodiac-symbol">{zodiacSign.symbol}</span>
            <div className="dp-zodiac-info">
              <span className="dp-zodiac-name">{zodiacSign.name}</span>
              <span className="dp-zodiac-dates">{formatZodiacDates(zodiacSign)}</span>
            </div>
          </div>
        )}

        <div className="dp-fields">
          <div className="dp-field-group">
            <label className="dp-field-label">{t('date.month')}</label>
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className={`dp-select ${month ? 'dp-select-filled' : ''}`}
              style={{ backgroundImage: arrowSvg, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', backgroundSize: '18px' }}
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
                style={{ backgroundImage: arrowSvg, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', backgroundSize: '18px' }}
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
                style={{ backgroundImage: arrowSvg, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', backgroundSize: '18px' }}
              >
                <option value="">——</option>
                {yearOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

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
          display: flex; flex-direction: column; align-items: center;
          background: transparent;
          overflow: hidden;
          font-family: 'Cormorant Garamond', 'Georgia', serif;
        }
        .dp-bg { position: absolute; inset: 0; pointer-events: none; }
        .dp-orb {
          position: absolute; border-radius: 50%; filter: blur(80px);
        }
        .dp-orb-1 {
          width: 440px; height: 440px; top: -100px; left: 50%; transform: translateX(-50%);
          background: radial-gradient(ellipse, rgba(0,0,0,0.40) 0%, transparent 70%);
          animation: dp-drift 14s ease-in-out infinite alternate;
        }
        .dp-orb-2 {
          width: 300px; height: 300px; bottom: 0; right: -50px;
          background: radial-gradient(ellipse, rgba(0,0,0,0.30) 0%, transparent 70%);
          animation: dp-drift 10s ease-in-out infinite alternate-reverse;
        }
        .dp-vignette {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.20) 100%);
        }
        .dp-progress {
          width: 100%; padding: 32px 20px 0; position: relative; z-index: 10;
        }
        .dp-content {
          position: relative; z-index: 10;
          flex: 1;
          display: flex; flex-direction: column; justify-content: center; align-items: center;
          gap: 22px;
          padding: 0 24px 50px;
          width: 100%; max-width: 360px;
          text-align: center;
        }
        .dp-header { display: flex; flex-direction: column; align-items: center; gap: 10px; }
        .dp-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.8rem, 7vw, 2.5rem);
          font-weight: 700; margin: 0; letter-spacing: 0.01em;
          background: linear-gradient(150deg, #f5e6cc 0%, #c9a87f 40%, #eeddb0 70%, #b8892c 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
          animation: dp-glow 5s ease-in-out infinite alternate;
        }
        .dp-subtitle {
          font-size: clamp(0.95rem, 3.2vw, 1.05rem);
          font-weight: 400; line-height: 1.75;
          color: rgba(240, 228, 205, 0.90);
          margin: 0; max-width: 260px; letter-spacing: 0.02em;
          text-shadow: 0 1px 8px rgba(0,0,0,0.6);
        }
        .dp-rule { display: flex; align-items: center; gap: 10px; width: 130px; margin-top: 4px; }
        .dp-rule-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,127,0.55), transparent);
        }
        .dp-rule-gem {
          width: 5px; height: 5px; background: #c9a87f; transform: rotate(45deg);
          box-shadow: 0 0 10px rgba(201,168,127,0.9); flex-shrink: 0;
        }

        /* ZODIAC */
        .dp-zodiac {
          display: flex; align-items: center; gap: 14px;
          padding: 12px 18px;
          border: 1px solid rgba(201,168,127,0.35);
          border-radius: 3px;
          background: rgba(8,6,18,0.60);
          backdrop-filter: blur(8px);
          width: 100%;
          animation: dp-fadein 0.4s ease;
        }
        .dp-zodiac-symbol {
          font-size: 1.8rem; line-height: 1;
          color: #c9a87f;
          filter: drop-shadow(0 0 6px rgba(201,168,127,0.55));
        }
        .dp-zodiac-info { display: flex; flex-direction: column; align-items: flex-start; }
        .dp-zodiac-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.05rem; font-weight: 600;
          color: #f5ede0; letter-spacing: 0.04em;
        }
        .dp-zodiac-dates {
          font-size: 0.75rem;
          color: rgba(220, 200, 165, 0.70);
        }

        /* CHAMPS */
        .dp-fields { display: flex; flex-direction: column; gap: 12px; width: 100%; }
        .dp-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .dp-field-group { display: flex; flex-direction: column; gap: 6px; }
        .dp-field-label {
          font-size: 0.66rem; font-weight: 500;
          color: rgba(220, 200, 165, 0.80);
          text-transform: uppercase; letter-spacing: 0.16em;
          text-align: left; padding-left: 2px;
          text-shadow: 0 1px 4px rgba(0,0,0,0.5);
        }
        .dp-select {
          width: 100%; height: 50px;
          padding: 0 38px 0 16px;
          background: rgba(8, 6, 18, 0.72);
          border: 1px solid rgba(201,168,127,0.30);
          border-radius: 3px;
          color: rgba(240, 228, 205, 0.90);
          font-size: 1rem;
          font-weight: 400;
          appearance: none;
          cursor: pointer; outline: none;
          transition: border-color 0.3s, color 0.3s, background 0.3s;
          font-family: 'Cormorant Garamond', Georgia, serif;
          backdrop-filter: blur(4px);
          letter-spacing: 0.03em;
        }
        .dp-select:focus {
          border-color: rgba(201,168,127,0.65);
          color: #f5ede0;
          background: rgba(12, 9, 25, 0.85);
        }
        .dp-select-filled {
          border-color: rgba(201,168,127,0.45);
          color: #f5ede0;
        }
        .dp-select option {
          background: #0e0b1e;
          color: #e8d8b8;
          font-size: 0.95rem;
          padding: 10px;
        }

        /* BOUTONS */
        .dp-actions { display: flex; gap: 12px; width: 100%; align-items: center; }
        .dp-btn-back {
          padding: 14px 18px;
          background: rgba(8, 6, 18, 0.55);
          border: 1px solid rgba(201,168,127,0.30);
          border-radius: 3px;
          color: rgba(230, 215, 188, 0.85);
          font-size: 0.88rem;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: border-color 0.3s, color 0.3s, background 0.3s;
          outline: none;
          white-space: nowrap; flex-shrink: 0;
          font-family: 'Cormorant Garamond', Georgia, serif;
          backdrop-filter: blur(4px);
        }
        .dp-btn-back:hover {
          border-color: rgba(201,168,127,0.60);
          color: #f5ede0;
          background: rgba(15,12,30,0.75);
        }
        .dp-btn-next {
          position: relative;
          flex: 1;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          padding: 14px 20px;
          background: rgba(8, 6, 18, 0.55);
          border: 1px solid rgba(201,168,127,0.50);
          border-radius: 3px;
          cursor: pointer; overflow: hidden; outline: none;
          transition: border-color 0.35s, transform 0.25s, box-shadow 0.35s, background 0.35s;
          font-family: 'Playfair Display', serif;
          font-size: 0.88rem; font-weight: 600;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: #f0e4cc;
          backdrop-filter: blur(6px);
        }
        .dp-btn-next::before {
          content: ''; position: absolute; inset: 3px;
          border: 1px solid rgba(201,168,127,0.12); border-radius: 1px; pointer-events: none;
        }
        .dp-btn-disabled { opacity: 0.28; cursor: not-allowed; pointer-events: none; }
        .dp-btn-next:not(.dp-btn-disabled):hover {
          border-color: rgba(201,168,127,0.90);
          background: rgba(20,15,35,0.75);
          box-shadow: 0 0 32px rgba(201,168,127,0.20);
          transform: translateY(-1px);
        }
        .dp-btn-arrow {
          color: rgba(201,168,127,0.85); transition: transform 0.3s;
        }
        .dp-btn-next:not(.dp-btn-disabled):hover .dp-btn-arrow { transform: translateX(3px); }
        .dp-btn-shimmer {
          position: absolute; top: 0; left: -100%; width: 55%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(201,168,127,0.13), transparent);
          transform: skewX(-18deg); transition: left 0.55s;
        }
        .dp-btn-next:not(.dp-btn-disabled):hover .dp-btn-shimmer { left: 150%; }

        @keyframes dp-drift {
          0%   { transform: translateX(-50%) scale(1) translateY(0); }
          100% { transform: translateX(-50%) scale(1.08) translateY(-18px); }
        }
        @keyframes dp-fadein {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes dp-glow {
          0%   { filter: drop-shadow(0 0 14px rgba(201,168,127,0.18)); }
          100% { filter: drop-shadow(0 0 38px rgba(201,168,127,0.55)); }
        }
      `}</style>
    </div>
  );
}