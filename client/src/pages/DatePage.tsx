import { useState } from 'react';
import ProgressBar from '@/components/ProgressBar';
import MysticalSelect from '@/components/MysticalSelect';
import MysticalButton from '@/components/MysticalButton';
import { getZodiacSign } from '@/data/oracleData';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles } from 'lucide-react';

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

  const zodiacSign = day && month ? getZodiacSign(parseInt(month), parseInt(day)) as ZodiacSign | undefined : undefined;

  const handleNext = () => {
    if (day && month && year) {
      const birthDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      onNext(birthDate, zodiacSign);
    }
  };

  const isComplete = day && month && year;

  return (
    <>
      <div className="intro-page active flex flex-col min-h-screen text-center max-w-3xl w-full mx-auto px-4 sm:px-6 relative overflow-hidden pt-16 sm:pt-20">

        {/* Fond dégradé unifié bleu nuit */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929] via-[#1e3a5f] to-[#0f2744] -z-10"></div>

        {/* Étoiles scintillantes */}
        <div className="absolute inset-0 -z-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-300 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Halo lumineux central */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-400/10 via-blue-500/15 to-transparent blur-3xl -z-10"></div>

        {/* Progress Bar */}
        <div className="mb-4">
          <ProgressBar progress={66} />
        </div>

        {/* Contenu principal centré */}
        <div className="flex-1 flex flex-col justify-center space-y-6 sm:space-y-8 py-6">

          {/* Design unique : Constellation du zodiaque interactive */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-cyan-200 via-blue-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(34,211,238,0.4)]"
                style={{ textShadow: '0 2px 40px rgba(34,211,238,0.3)' }}>
              {t('date.title')}
            </h1>

            <p className="text-cyan-100/80 text-sm sm:text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
              {t('date.subtitle')}
            </p>

            <div className="flex items-center justify-center gap-3 pt-1">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400/50 shadow-[0_0_8px_rgba(34,211,238,0.3)]"></div>
              <Sparkles className="w-4 h-4 text-cyan-400/70 animate-pulse drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-400/50 shadow-[0_0_8px_rgba(34,211,238,0.3)]"></div>
            </div>
          </div>

          {/* Affichage du signe zodiacal si sélectionné - Style carte moderne */}
          {zodiacSign && (
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-2xl blur-2xl animate-pulse-slow"></div>
                <div className="relative flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-br from-cyan-400/15 to-blue-600/15 border-2 border-cyan-400/40 backdrop-blur-xl shadow-[0_8px_30px_rgba(34,211,238,0.3),inset_0_2px_10px_rgba(255,255,255,0.1)]">
                  <div className="text-4xl drop-shadow-[0_2px_10px_rgba(34,211,238,0.6)]">{zodiacSign.symbol}</div>
                  <div className="text-left">
                    <div className="text-cyan-200 font-semibold text-lg">{zodiacSign.name}</div>
                    <div className="text-cyan-300/60 text-sm">{zodiacSign.dates}</div>
                  </div>
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-2xl pointer-events-none"></div>
                </div>
              </div>
            </div>
          )}

          {/* Champs de date - Style Cards empilées verticalement */}
          <div className="max-w-md mx-auto w-full space-y-3">
            {/* Card Jour */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/70 to-slate-900/50 rounded-2xl p-4 border-2 border-cyan-500/30 group-focus-within:border-cyan-400/60 backdrop-blur-xl shadow-[inset_0_2px_15px_rgba(0,0,0,0.3),0_4px_20px_rgba(34,211,238,0.1)] transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center border border-cyan-400/30 shadow-[inset_0_2px_8px_rgba(255,255,255,0.1)]">
                    <span className="text-xl">📅</span>
                  </div>
                  <span className="text-cyan-200 font-medium">{t('date.day')}</span>
                </div>
                <MysticalSelect
                  placeholder="--"
                  value={day}
                  onChange={setDay}
                  options={dayOptions}
                  className="text-lg min-h-[48px] bg-slate-900/50 border-cyan-500/30 focus:border-cyan-400/70 text-cyan-100
                             [&>option]:bg-slate-900 [&>option]:text-cyan-100
                             [&>option:checked]:bg-cyan-600 [&>option:checked]:text-white
                             [&>option:hover]:bg-cyan-700 [&>option:hover]:text-white"
                />
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/5 to-transparent rounded-t-2xl pointer-events-none"></div>
              </div>
            </div>

            {/* Card Mois */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/70 to-slate-900/50 rounded-2xl p-4 border-2 border-cyan-500/30 group-focus-within:border-cyan-400/60 backdrop-blur-xl shadow-[inset_0_2px_15px_rgba(0,0,0,0.3),0_4px_20px_rgba(34,211,238,0.1)] transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center border border-cyan-400/30 shadow-[inset_0_2px_8px_rgba(255,255,255,0.1)]">
                    <span className="text-xl">📆</span>
                  </div>
                  <span className="text-cyan-200 font-medium">{t('date.month')}</span>
                </div>
                <MysticalSelect
                  placeholder="--"
                  value={month}
                  onChange={setMonth}
                  options={monthOptions}
                  className="text-lg min-h-[48px] bg-slate-900/50 border-cyan-500/30 focus:border-cyan-400/70 text-cyan-100
                             [&>option]:bg-slate-900 [&>option]:text-cyan-100
                             [&>option:checked]:bg-cyan-600 [&>option:checked]:text-white
                             [&>option:hover]:bg-cyan-700 [&>option:hover]:text-white"
                />
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/5 to-transparent rounded-t-2xl pointer-events-none"></div>
              </div>
            </div>

            {/* Card Année */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-slate-800/70 to-slate-900/50 rounded-2xl p-4 border-2 border-cyan-500/30 group-focus-within:border-cyan-400/60 backdrop-blur-xl shadow-[inset_0_2px_15px_rgba(0,0,0,0.3),0_4px_20px_rgba(34,211,238,0.1)] transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center border border-cyan-400/30 shadow-[inset_0_2px_8px_rgba(255,255,255,0.1)]">
                    <span className="text-xl">🎂</span>
                  </div>
                  <span className="text-cyan-200 font-medium">{t('date.year')}</span>
                </div>
                <MysticalSelect
                  placeholder="----"
                  value={year}
                  onChange={setYear}
                  options={yearOptions}
                  className="text-lg min-h-[48px] bg-slate-900/50 border-cyan-500/30 focus:border-cyan-400/70 text-cyan-100
                             [&>option]:bg-slate-900 [&>option]:text-cyan-100
                             [&>option:checked]:bg-cyan-600 [&>option:checked]:text-white
                             [&>option:hover]:bg-cyan-700 [&>option:hover]:text-white"
                />
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/5 to-transparent rounded-t-2xl pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Boutons avec style harmonisé */}
          <div className="flex gap-3 sm:gap-4 justify-center items-center pt-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-600/20 to-slate-700/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <MysticalButton 
                variant="secondary" 
                onClick={onBack}
                className="relative px-6 py-3 rounded-full font-medium bg-slate-800/60 hover:bg-slate-700/60 text-cyan-300 border-2 border-slate-600/50 hover:border-cyan-500/50 backdrop-blur-sm shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_20px_rgba(34,211,238,0.2)] transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="text-cyan-300">←</span>
                  <span>{t('common.back')}</span>
                </span>
              </MysticalButton>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
              <MysticalButton 
                onClick={handleNext} 
                disabled={!isComplete}
                className="relative px-8 py-3 rounded-full font-medium bg-gradient-to-br from-cyan-500 via-blue-600 to-cyan-500 border-2 border-cyan-400/50 text-cyan-50 shadow-[0_4px_20px_rgba(34,211,238,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_6px_30px_rgba(34,211,238,0.5),inset_0_1px_0_rgba(255,255,255,0.3)] hover:border-cyan-300/70 hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2 relative z-10">
                  <span>{t('date.next')}</span>
                  <span className="text-cyan-200 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-full pointer-events-none"></div>
              </MysticalButton>
            </div>
          </div>
        </div>

        <div className="pb-4 sm:pb-6"></div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        /* Force les couleurs des options de select en cyan/bleu */
        select {
          color-scheme: dark;
        }

        select option {
          background-color: #0f172a !important;
          color: #a5f3fc !important;
          padding: 8px 12px !important;
        }

        select option:checked,
        select option:focus,
        select option[selected] {
          background-color: #0891b2 !important;
          background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%) !important;
          color: white !important;
        }

        select option:hover {
          background-color: #0e7490 !important;
          color: white !important;
        }

        /* Pour Firefox */
        @-moz-document url-prefix() {
          select option {
            background-color: #0f172a !important;
            color: #a5f3fc !important;
          }
          select option:checked {
            background-color: #0891b2 !important;
            color: white !important;
          }
        }
      `}} />
    </>
  );
}