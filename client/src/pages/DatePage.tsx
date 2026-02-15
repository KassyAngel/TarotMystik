import { useState } from 'react';
import ProgressBar from '@/components/ProgressBar';
import MysticalButton from '@/components/MysticalButton';
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

  const zodiacSign = day && month ? getZodiacSign(parseInt(month), parseInt(day)) as ZodiacSign | undefined : undefined;

  const handleNext = () => {
    if (day && month && year) {
      const birthDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      onNext(birthDate, zodiacSign);
    }
  };

  const isComplete = day && month && year;

  return (
    <div className="intro-page active flex flex-col min-h-screen text-center max-w-3xl w-full mx-auto px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-[#0a0e1a] via-[#1a1540] to-[#0a0e1a]">

      {/* Particules */}
      <div className="absolute inset-0 -z-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor: i % 3 === 0 ? '#d4af37' : i % 3 === 1 ? '#ff6692' : '#a78bfa',
              width: Math.random() > 0.7 ? '3px' : '2px',
              height: Math.random() > 0.7 ? '3px' : '2px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-pink-500/15 via-purple-500/15 to-transparent blur-3xl -z-10"></div>

      {/* Progress Bar en haut */}
      <div className="pt-8 sm:pt-12 pb-4">
        <ProgressBar progress={66} />
      </div>

      {/* Contenu PARFAITEMENT CENTRÉ */}
      <div className="flex-1 flex flex-col justify-center items-center space-y-5 sm:space-y-6 -mt-12">

        {/* Titre */}
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(236,72,153,0.6)]">
            {t('date.title')}
          </h1>

          <p className="text-purple-100/80 text-xs sm:text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed px-2">
            {t('date.subtitle')}
          </p>

          <div className="flex items-center justify-center gap-3 pt-1">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-pink-400/60 to-purple-400/50"></div>
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400/40 blur-md rounded-full"></div>
              <span className="relative text-amber-300 text-lg">✦</span>
            </div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent via-pink-400/60 to-purple-400/50"></div>
          </div>
        </div>

        {/* Signe zodiacal */}
        {zodiacSign && (
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-pink-500/30 via-purple-500/30 to-violet-600/30 rounded-2xl blur-2xl animate-pulse-slow"></div>
              <div className="relative flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-br from-pink-500/15 via-purple-500/15 to-violet-600/15 border-2 border-pink-400/50 backdrop-blur-xl shadow-[0_8px_30px_rgba(236,72,153,0.3)]">
                <div className="text-3xl drop-shadow-[0_2px_15px_rgba(236,72,153,0.8)]">{zodiacSign.symbol}</div>
                <div className="text-left">
                  <div className="text-pink-200 font-semibold text-base">{zodiacSign.name}</div>
                  <div className="text-purple-300/70 text-xs">{zodiacSign.dates}</div>
                </div>
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-2xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        )}

        {/* Sélecteurs - Cases optimisées avec texte mois PLUS GRAND */}
        <div className="max-w-lg mx-auto w-full px-2">
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {/* Jour */}
            <div className="relative group">
              <div className={`absolute -inset-0.5 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-2xl blur-md transition-all duration-300 ${day ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}></div>
              <div className="relative">
                <label className="block text-pink-200 text-[10px] sm:text-xs font-semibold mb-1.5 sm:mb-2 text-center px-1">
                  📅 {t('date.day')}
                </label>
                <div className="relative">
                  <select
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    className="w-full h-[52px] px-2 bg-gradient-to-br from-violet-900/60 via-purple-900/50 to-violet-900/60 
                               border-2 border-pink-500/50 focus:border-pink-400/90 rounded-xl 
                               text-[#7c3aed] text-base sm:text-lg font-bold text-center
                               focus:outline-none transition-all duration-300 appearance-none cursor-pointer 
                               backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ec4899'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.4rem center',
                      backgroundSize: '1rem'
                    }}
                  >
                    <option value="">--</option>
                    {dayOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Mois - TEXTE PLUS GRAND avec wrap sur 2 lignes si nécessaire */}
            <div className="relative group">
              <div className={`absolute -inset-0.5 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-2xl blur-md transition-all duration-300 ${month ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}></div>
              <div className="relative">
                <label className="block text-pink-200 text-[10px] sm:text-xs font-semibold mb-1.5 sm:mb-2 text-center px-1 truncate">
                  📆 {t('date.month')}
                </label>
                <div className="relative">
                  <select
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className="w-full h-[52px] px-1 py-1 bg-gradient-to-br from-violet-900/60 via-purple-900/50 to-violet-900/60 
                               border-2 border-pink-500/50 focus:border-pink-400/90 rounded-xl 
                               text-[#7c3aed] text-sm sm:text-base font-bold text-center leading-tight
                               focus:outline-none transition-all duration-300 appearance-none cursor-pointer 
                               backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ec4899'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.25rem center',
                      backgroundSize: '0.875rem',
                      paddingRight: '1.5rem',
                      whiteSpace: 'normal',
                      wordWrap: 'break-word'
                    }}
                  >
                    <option value="">--</option>
                    {monthOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Année */}
            <div className="relative group">
              <div className={`absolute -inset-0.5 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-2xl blur-md transition-all duration-300 ${year ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}></div>
              <div className="relative">
                <label className="block text-pink-200 text-[10px] sm:text-xs font-semibold mb-1.5 sm:mb-2 text-center px-1">
                  🎂 {t('date.year')}
                </label>
                <div className="relative">
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full h-[52px] px-2 bg-gradient-to-br from-violet-900/60 via-purple-900/50 to-violet-900/60 
                               border-2 border-pink-500/50 focus:border-pink-400/90 rounded-xl 
                               text-[#7c3aed] text-base sm:text-lg font-bold text-center
                               focus:outline-none transition-all duration-300 appearance-none cursor-pointer 
                               backdrop-blur-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ec4899'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.4rem center',
                      backgroundSize: '1rem'
                    }}
                  >
                    <option value="">----</option>
                    {yearOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Boutons */}
        <div className="flex gap-2 sm:gap-3 justify-center items-center pt-2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <button 
              onClick={onBack}
              className="relative px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-medium bg-violet-900/50 hover:bg-violet-800/60 text-purple-200 border-2 border-purple-500/40 hover:border-pink-500/60 backdrop-blur-sm transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-1.5">
                <span className="text-pink-300">←</span>
                <span>{t('common.back')}</span>
              </span>
            </button>
          </div>

          <div className="relative group flex-1 max-w-xs">
            <div className={`absolute -inset-2 bg-gradient-to-r from-pink-600 via-purple-600 to-violet-600 rounded-full blur-2xl transition-all duration-500 ${
              isComplete ? 'opacity-50 group-hover:opacity-80' : 'opacity-0'
            }`}></div>
            <button 
              onClick={handleNext} 
              disabled={!isComplete}
              className="relative w-full px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base font-semibold bg-gradient-to-r from-pink-600 via-purple-600 to-violet-600 border-2 border-pink-400/70 text-white shadow-[0_0_40px_rgba(236,72,153,0.5),inset_0_2px_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(236,72,153,0.7),inset_0_2px_20px_rgba(255,255,255,0.3)] hover:border-pink-300/90 hover:scale-105 disabled:opacity-20 disabled:scale-100 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"></div>
              <span className="flex items-center justify-center gap-2 relative z-10">
                <span>{t('date.next')}</span>
                <span className="text-amber-200 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full pointer-events-none"></div>
            </button>
          </div>
        </div>
      </div>

      <div className="pb-8"></div>

      <style>{`
        @keyframes twinkle { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.4); } }
        @keyframes pulse-slow { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }

        select option {
          background-color: #2e1065 !important;
          color: #7c3aed !important;
          padding: 12px !important;
          font-weight: 700 !important;
          white-space: normal !important;
        }
        select option:checked {
          background: linear-gradient(135deg, #db2777 0%, #9333ea 100%) !important;
          color: #ffffff !important;
        }
      `}</style>
    </div>
  );
}