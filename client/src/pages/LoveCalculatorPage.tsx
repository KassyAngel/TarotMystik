// client/src/pages/LoveCalculatorPage.tsx
// 📦 Calculatrice d'amour avec variation quotidienne RÉELLE

import { useState } from 'react';
import { UserSession } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  getLoveResult, 
  getRandomMessage, 
  getRandomAdvice 
} from '@/data/loveCalculatorData';
import MysticalButton from '@/components/MysticalButton';

interface LoveCalculatorPageProps {
  user: UserSession;
  onBack: () => void;
  onSaveReading?: (reading: any) => Promise<void>;
  onReadingComplete?: (oracleType: string) => void;
  isPremium?: boolean;
  shouldShowAdBeforeReading?: (oracleType: string) => Promise<boolean>;
}

// ✅ FIX HASH : Nouvelle fonction qui génère vraiment un résultat différent chaque jour
// Le problème de l'ancienne version : le hash JS est déterministe mais le numéro du jour
// changeait peu la valeur finale car il était simplement concaténé comme string.
// Solution : on multiplie le hash par un facteur basé sur le jour de l'année (1-366),
// ce qui garantit une rotation significative chaque jour.
const calculateLovePercentageWithDate = (name1: string, name2: string): number => {
  const n1 = name1.toLowerCase().trim();
  const n2 = name2.toLowerCase().trim();

  // ✅ Toujours trier les noms dans le même ordre (A+B = B+A)
  // Sans ça, "Karen + Marc" ≠ "Marc + Karen", ce qui est injuste
  const sortedNames = [n1, n2].sort().join('|');

  // ✅ Numéro du jour dans l'année (1 à 366) — change vraiment chaque jour
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((today.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24));

  // ✅ Hash des noms seuls (stable)
  let nameHash = 0;
  for (let i = 0; i < sortedNames.length; i++) {
    nameHash = ((nameHash << 5) - nameHash) + sortedNames.charCodeAt(i);
    nameHash = nameHash & nameHash;
  }

  // ✅ Combiner le hash des noms avec le jour de l'année
  // La multiplication par un nombre premier garantit une distribution uniforme
  const dailySeed = Math.abs(nameHash) * 31 + dayOfYear * 127;

  // ✅ Extraire un pourcentage entre 30 et 98 (évite les extrêmes trop déprimants)
  const percentage = 30 + (dailySeed % 69);

  console.log(`💕 [LOVE] ${n1} + ${n2} | Jour ${dayOfYear} | Hash ${nameHash} | Résultat: ${percentage}%`);

  return percentage;
};

export function LoveCalculatorPage({ 
  user, 
  onBack, 
  onSaveReading,
  onReadingComplete,
  isPremium = false,
  shouldShowAdBeforeReading
}: LoveCalculatorPageProps) {
  const { t } = useLanguage();

  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [currentPhase, setCurrentPhase] = useState<'input' | 'calculating' | 'result'>('input');
  const [percentage, setPercentage] = useState(0);
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const [result, setResult] = useState<any>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState('');
  const [selectedAdvice, setSelectedAdvice] = useState('');

  const handleCalculate = async () => {
    if (!name1.trim() || !name2.trim()) {
      alert(t('loveCalculator.error') || 'Veuillez entrer les deux prénoms !');
      return;
    }

    if (shouldShowAdBeforeReading) {
      await shouldShowAdBeforeReading('loveCalculator');
    }

    setCurrentPhase('calculating');
    setDisplayPercentage(0);
    setShowDetails(false);

    setTimeout(() => {
      const lovePercent = calculateLovePercentageWithDate(name1, name2);
      const loveResult = getLoveResult(lovePercent);

      const messageKey = getRandomMessage(loveResult);
      const adviceKey = getRandomAdvice(loveResult);

      setPercentage(lovePercent);
      setResult(loveResult);
      setSelectedMessage(t(messageKey));
      setSelectedAdvice(t(adviceKey));

      setTimeout(() => {
        setShowDetails(false);
        setTimeout(() => {
          setCurrentPhase('result');

          const duration = 3000;
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const displayValue = Math.floor(easeOut * lovePercent);
            setDisplayPercentage(displayValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayPercentage(lovePercent);
              setTimeout(() => setShowDetails(true), 500);
            }
          };

          requestAnimationFrame(animate);

          if (onSaveReading) {
            onSaveReading({
              type: 'loveCalculator',
              cards: [`${name1} ❤️ ${name2}`],
              date: new Date(),
              answer: `${lovePercent}% - ${t(loveResult.titleKey)}\n\n${t(messageKey)}`
            });
          }

          if (onReadingComplete) {
            onReadingComplete('loveCalculator');
          }
        }, 50);
      }, 50);
    }, 2000);
  };

  const handleReset = () => {
    setName1('');
    setName2('');
    setPercentage(0);
    setDisplayPercentage(0);
    setResult(null);
    setShowDetails(false);
    setSelectedMessage('');
    setSelectedAdvice('');
    setCurrentPhase('input');
  };

  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white pointer-events-none"
              style={{
                fontSize: Math.random() * 3 + 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.5 + 0.2,
                animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}>
              ✦
            </div>
          ))}
        </div>
        <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col safe-top safe-bottom overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 pb-8">

          {/* PHASE 1: SAISIE */}
          {currentPhase === 'input' && (
            <div className="w-full max-w-md mx-auto space-y-6 pt-16">
              <div className="text-center pb-4 pt-8">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(6,182,212,0.4)]">
                  {t('loveCalculator.title')}
                </h1>
                <p className="text-cyan-100/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed px-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {t('loveCalculator.subtitle')}
                </p>
              </div>

              <div className="relative">
                <label className="block text-cyan-200 text-sm font-semibold mb-2 text-center drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                  💕 {t('loveCalculator.name1Label')} 💕
                </label>
                <input
                  type="text"
                  value={name1}
                  onChange={(e) => setName1(e.target.value)}
                  placeholder={t('loveCalculator.name1Placeholder')}
                  className="w-full px-6 py-4 text-lg text-center rounded-2xl
                    bg-gradient-to-br from-slate-900/70 to-blue-900/70
                    border-2 border-cyan-400/40 text-white 
                    placeholder-cyan-200/60
                    focus:outline-none focus:border-cyan-300/70 
                    focus:shadow-[0_0_25px_rgba(6,182,212,0.3)]
                    transition-all backdrop-blur-md"
                />
              </div>

              <div className="flex justify-center">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-xl"></div>
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-cyan-600/60 to-blue-600/60 flex items-center justify-center text-3xl border-2 border-cyan-300/40 shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                    💕
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="block text-cyan-200 text-sm font-semibold mb-2 text-center drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                  💕 {t('loveCalculator.name2Label')} 💕
                </label>
                <input
                  type="text"
                  value={name2}
                  onChange={(e) => setName2(e.target.value)}
                  placeholder={t('loveCalculator.name2Placeholder')}
                  className="w-full px-6 py-4 text-lg text-center rounded-2xl
                    bg-gradient-to-br from-slate-900/70 to-blue-900/70
                    border-2 border-cyan-400/40 text-white 
                    placeholder-cyan-200/60
                    focus:outline-none focus:border-cyan-300/70 
                    focus:shadow-[0_0_25px_rgba(6,182,212,0.3)]
                    transition-all backdrop-blur-md"
                />
              </div>

              <button
                onClick={handleCalculate}
                className="group relative w-full py-6 text-xl font-bold rounded-2xl
                  bg-gradient-to-r from-cyan-600 via-blue-500 to-indigo-600
                  hover:from-cyan-500 hover:via-blue-400 hover:to-indigo-500
                  text-white overflow-hidden
                  transform hover:scale-[1.02] active:scale-[0.98]
                  transition-all duration-300
                  shadow-[0_10px_40px_rgba(6,182,212,0.4)]
                  hover:shadow-[0_15px_50px_rgba(6,182,212,0.6)]
                  border-2 border-cyan-300/40"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                  translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">💙</span>
                  <span className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">{t('loveCalculator.calculateButton')}</span>
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">💙</span>
                </span>
              </button>

              <div className="text-center text-cyan-200/70 text-sm bg-slate-900/40 rounded-xl p-4 border border-cyan-400/25 backdrop-blur-sm">
                <span>{t('loveCalculator.note')}</span>
              </div>

              <div className="pt-6">
                <MysticalButton
                  variant="secondary"
                  onClick={onBack}
                  className="w-full max-w-xs mx-auto block bg-slate-900/60 hover:bg-slate-800/70 border-cyan-400/30 text-cyan-100 backdrop-blur-md"
                >
                  ← {t('common.back')}
                </MysticalButton>
              </div>

              <div className="h-20"></div>
            </div>
          )}

          {/* PHASE 2: CALCUL */}
          {currentPhase === 'calculating' && (
            <div className="flex items-center justify-center min-h-full">
              <div className="text-center space-y-12">
                <div className="relative flex items-center justify-center">
                  <div className="text-[10rem] animate-pulse-heart-big filter drop-shadow-[0_0_50px_rgba(6,182,212,0.9)]">
                    💖
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-cyan-100 text-xl sm:text-2xl font-bold animate-pulse drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    {t('loveCalculator.calculating')}
                  </p>
                  <p className="text-white text-2xl sm:text-3xl font-bold drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]">
                    {name1} 💕 {name2}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* PHASE 3: RÉSULTAT */}
          {currentPhase === 'result' && result && (
            <div className="flex items-center justify-center min-h-full py-4">
              <div className="w-full max-w-lg px-4">

                {!showDetails && (
                  <div className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                        {name1} 💕 {name2}
                      </h3>
                    </div>
                    <div className="relative w-full max-w-[450px] aspect-square mx-auto">
                      <div className="absolute inset-0 border-4 border-cyan-400/20 rounded-full animate-spin-slow-smooth"></div>
                      <div className="absolute inset-10 border-4 border-blue-400/25 rounded-full animate-spin-reverse-smooth"></div>
                      <div className="absolute inset-20 border-4 border-cyan-300/30 rounded-full animate-spin-slow-smooth"></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-5xl animate-pulse-heart-smooth">💕</div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-5xl animate-pulse-heart-smooth" style={{animationDelay: '0.4s'}}>💕</div>
                      <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-5xl animate-pulse-heart-smooth" style={{animationDelay: '0.8s'}}>💕</div>
                      <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-5xl animate-pulse-heart-smooth" style={{animationDelay: '1.2s'}}>💕</div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center" style={{ lineHeight: '1', width: '280px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span className="inline-block text-[7rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-blue-200 drop-shadow-[0_8px_35px_rgba(0,0,0,0.9)] tabular-nums">
                            {displayPercentage}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {showDetails && (
                  <div className="animate-fade-in-smooth space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                        {name1} 💕 {name2}
                      </h3>
                    </div>

                    <div className="relative rounded-3xl p-6 sm:p-8 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/50 to-slate-900/70 backdrop-blur-xl rounded-3xl"></div>
                      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/10 to-transparent rounded-t-3xl"></div>

                      <div className="relative space-y-4">
                        <div className="flex items-center justify-center py-6">
                          <div className="text-center px-4" style={{ lineHeight: '1.1', width: '280px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span className="inline-block text-[7rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-blue-200 drop-shadow-[0_8px_35px_rgba(0,0,0,0.9)] tabular-nums">
                              {displayPercentage}%
                            </span>
                          </div>
                        </div>

                        <div className="text-center space-y-2">
                          <div className="inline-block relative animate-float-gentle">
                            <div className="absolute inset-0 blur-2xl opacity-40" style={{ backgroundColor: result.glowColor }}></div>
                            <div className="relative text-6xl sm:text-7xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                              {result.emoji}
                            </div>
                          </div>
                          <h4 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-200 via-blue-100 to-indigo-200 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                            {t(result.titleKey)}
                          </h4>
                        </div>

                        <div className="bg-black/40 rounded-2xl p-6 sm:p-8 border-2 border-cyan-400/25 shadow-[inset_0_2px_20px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                          <p className="text-white text-lg sm:text-xl leading-relaxed text-center font-normal mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                            {selectedMessage}
                          </p>
                          <div className="pt-4 border-t border-cyan-400/25">
                            <p className="text-cyan-100/90 text-base sm:text-lg text-center italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                              💫 {selectedAdvice}
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={handleReset}
                          className="group relative w-full py-4 text-base sm:text-lg font-bold rounded-2xl
                            bg-gradient-to-r from-cyan-600 via-blue-500 to-indigo-600
                            hover:from-cyan-500 hover:via-blue-400 hover:to-indigo-500
                            text-white overflow-hidden
                            transform hover:scale-[1.02] active:scale-[0.98]
                            transition-all duration-300
                            shadow-[0_10px_35px_rgba(6,182,212,0.5)]
                            border-2 border-cyan-300/40"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <span className="text-lg sm:text-xl">✨</span>
                            <span>{t('loveCalculator.newCalculation')}</span>
                          </span>
                        </button>

                        <div className="pt-6">
                          <MysticalButton
                            variant="secondary"
                            onClick={onBack}
                            className="w-full max-w-xs mx-auto block bg-slate-900/60 hover:bg-slate-800/70 border-cyan-400/30 text-cyan-100 backdrop-blur-md"
                          >
                            ← {t('common.back')}
                          </MysticalButton>
                        </div>

                        <div className="h-20"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>

      <style>{`
        @keyframes twinkle { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.3); } }
        @keyframes float-gentle { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-12px) scale(1.03); } }
        @keyframes spin-slow-smooth { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-reverse-smooth { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes pulse-heart-big { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.2); } }
        @keyframes pulse-heart-smooth { 0%, 100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.15); opacity: 1; } }
        @keyframes fade-in-smooth { 0% { opacity: 0; transform: translateY(20px) scale(0.98); } 100% { opacity: 1; transform: translateY(0) scale(1); } }

        .animate-spin-slow-smooth { animation: spin-slow-smooth 10s linear infinite; will-change: transform; }
        .animate-spin-reverse-smooth { animation: spin-reverse-smooth 8s linear infinite; will-change: transform; }
        .animate-pulse-heart-big { animation: pulse-heart-big 2.2s ease-in-out infinite; }
        .animate-pulse-heart-smooth { animation: pulse-heart-smooth 2s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 3.5s ease-in-out infinite; }
        .animate-fade-in-smooth { animation: fade-in-smooth 0.8s ease-out forwards; }
        .safe-top { padding-top: env(safe-area-inset-top); }
        .safe-bottom { padding-bottom: env(safe-area-inset-bottom); }
      `}</style>
    </div>
  );
}
export default LoveCalculatorPage;