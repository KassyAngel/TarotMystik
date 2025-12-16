// client/src/pages/OracleSelection.tsx
import OracleCard from '@/components/OracleCard';
import MysticalButton from '@/components/MysticalButton';
import { UserSession } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSound } from '@/hooks/useSound';
import { useState } from 'react';

interface OracleSelectionProps {
  user: UserSession;
  onOracleSelect: (oracleType: string) => void;
  onBack: () => void;
  onHome: () => void;
}

export default function OracleSelection({
  user,
  onOracleSelect,
  onBack,
  onHome
}: OracleSelectionProps) {
  const [selectedOracle, setSelectedOracle] = useState('');
  const { t } = useLanguage();
  const playFlipSound = useSound('Flip-card.wav');

  const oracles = [
    {
      id: 'loveOracle',
      title: t('oracle.loveOracle.title'),
      description: t('oracle.loveOracle.description'),
      icon: '💘'
    },
    {
      id: 'lunar',
      title: t('oracle.lunar.title') || 'Oracle Lunaire',
      description: t('oracle.lunar.description') || 'Les phases de la Lune révèlent votre chemin',
      icon: '🌙'
    },
    {
      id: 'pendulum',
      title: t('oracle.pendulum.title'),
      description: t('oracle.pendulum.description'),
      icon: '💫'
    }
  ];

  const handleOracleClick = (oracleId: string) => {
    playFlipSound();
    setSelectedOracle(oracleId);
    setTimeout(() => {
      onOracleSelect(oracleId);
    }, 500);
  };

  return (
    <div className="main-content w-full min-h-screen flex flex-col p-2 sm:p-3 pt-14 sm:pt-16 pb-3">
      {/* Header */}
      <div className="text-center mb-3 sm:mb-4">
        <div className="flex justify-center mb-1.5 sm:mb-2">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12">
            <div className="absolute inset-0 bg-amber-400/10 rounded-full blur-lg animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl sm:text-3xl text-amber-300 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
                ✦
              </span>
            </div>
          </div>
        </div>

        <p className="text-purple-200 text-xs sm:text-sm md:text-base max-w-lg mx-auto font-light leading-tight px-2">
          {t('oracle.subtitle')}
        </p>

        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-2 sm:mt-3">
          <div className="h-px w-6 sm:w-10 bg-gradient-to-r from-transparent to-amber-400/50"></div>
          <span className="text-amber-300/60 text-sm">✦</span>
          <div className="h-px w-6 sm:w-10 bg-gradient-to-l from-transparent to-amber-400/50"></div>
        </div>
      </div>

      {/* Grille des cartes */}
      <div className="flex-1 flex items-center justify-center py-1 sm:py-2">
        <div className="w-full max-w-4xl px-1 sm:px-2">
          {/* Grille principale - 3 oracles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 mb-4">
            {oracles.map((oracle) => (
              <OracleCard
                key={oracle.id}
                title={oracle.title}
                description={oracle.description}
                icon={oracle.icon}
                isSelected={selectedOracle === oracle.id}
                onClick={() => handleOracleClick(oracle.id)}
              />
            ))}
          </div>

          {/* 💕 CALCULATRICE AMOUREUSE */}
          <div className="relative mb-4">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-[0_4px_12px_rgba(139,92,246,0.4)]">
                💕 {t('oracle.loveCalculator.badge') || 'NOUVEAU'}
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/15 via-indigo-500/8 to-purple-900/15 rounded-2xl blur-xl"></div>

            <button
              onClick={() => handleOracleClick('loveCalculator')}
              className={`relative w-full p-5 sm:p-6 rounded-2xl
                bg-gradient-to-br from-[#1a1040] via-[#2d1b5f] to-[#1a1040]
                border-2 border-purple-500/40 hover:border-purple-400/60
                shadow-[0_8px_24px_rgba(139,92,246,0.2)]
                hover:shadow-[0_12px_32px_rgba(139,92,246,0.3)] transform hover:scale-[1.01]
                transition-all duration-300 group overflow-hidden
                ${selectedOracle === 'loveCalculator' ? 'scale-[1.01] border-purple-400/60' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="relative flex items-center justify-between gap-4">
                <div className="text-left flex-1 min-w-0">
                  <div className="text-purple-300 font-bold text-xl sm:text-2xl mb-1.5 drop-shadow-[0_2px_4px_rgba(139,92,246,0.3)] tracking-wide">
                    {t('oracle.loveCalculator.title') || '💕 Calculatrice Amoureuse'}
                  </div>
                  <div className="text-indigo-200/80 text-sm sm:text-base font-light leading-snug">
                    {t('oracle.loveCalculator.description') || 'Calcule la compatibilité entre deux prénoms'}
                  </div>
                </div>

                <div className="relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-full blur-md"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2d1b5f] to-[#1a1040] rounded-full border border-purple-500/30 flex items-center justify-center group-hover:border-purple-400/50 transition-colors">
                    <span className="text-2xl sm:text-3xl text-purple-300 drop-shadow-[0_0_8px_rgba(139,92,246,0.4)] group-hover:scale-110 transition-transform duration-300">
                      💖
                    </span>
                  </div>
                  <div className="absolute inset-2 border border-purple-500/15 rounded-full animate-spin-slow"></div>
                </div>
              </div>

              <div className="absolute top-4 left-4 w-8 h-px bg-gradient-to-r from-purple-500/30 to-transparent"></div>
              <div className="absolute bottom-4 right-4 w-8 h-px bg-gradient-to-l from-purple-500/30 to-transparent"></div>
            </button>
          </div>

          {/* ✦ ROUE DE LA DESTINÉE */}
          <div className="relative">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-[0_4px_12px_rgba(217,119,6,0.4)]">
                ✦ BONUS ✦
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-amber-500/10 to-blue-900/20 rounded-2xl blur-xl"></div>

            <button
              onClick={() => handleOracleClick('wheel')}
              className={`relative w-full p-5 sm:p-6 rounded-2xl
                bg-gradient-to-br from-[#0a1628] via-[#1a2847] to-[#0a1628]
                border-2 border-amber-600/50 hover:border-amber-500
                shadow-[0_8px_24px_rgba(217,119,6,0.2)]
                hover:shadow-[0_12px_32px_rgba(217,119,6,0.3)]
                transform hover:scale-[1.01] transition-all duration-300
                group overflow-hidden
                ${selectedOracle === 'wheel' ? 'scale-[1.01] border-amber-500' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="relative flex items-center justify-between gap-4">
                <div className="text-left flex-1 min-w-0">
                  <div className="text-amber-400 font-bold text-xl sm:text-2xl mb-1.5 drop-shadow-[0_2px_4px_rgba(251,191,36,0.3)] tracking-wide">
                    {t('oracle.wheel.title') || 'Roue de la Destinée'}
                  </div>
                  <div className="text-blue-200/80 text-sm sm:text-base font-light leading-snug">
                    {t('oracle.wheel.shortDescription') || 'Découvrez votre destin mystique'}
                  </div>
                </div>

                <div className="relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-amber-900/40 rounded-full blur-md"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a2847] to-[#0f1420] rounded-full border border-amber-600/40 flex items-center justify-center group-hover:border-amber-500/60 transition-colors">
                    <span className="text-2xl sm:text-3xl text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)] group-hover:scale-110 transition-transform duration-300">
                      ✦
                    </span>
                  </div>
                  <div className="absolute inset-2 border border-amber-600/20 rounded-full animate-spin-slow"></div>
                </div>
              </div>

              <div className="absolute top-4 left-4 w-8 h-px bg-gradient-to-r from-amber-600/40 to-transparent"></div>
              <div className="absolute bottom-4 right-4 w-8 h-px bg-gradient-to-l from-amber-600/40 to-transparent"></div>
            </button>
          </div>

          <style>{`
            @keyframes spin-slow {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .animate-spin-slow {
              animation: spin-slow 20s linear infinite;
            }
          `}</style>
        </div>
      </div>

      {/* Boutons navigation */}
      <div className="text-center pt-2">
        <div className="flex gap-1.5 sm:gap-2 justify-center max-w-xs sm:max-w-sm mx-auto px-2">
          <MysticalButton
            variant="secondary"
            onClick={onBack}
            className="flex-1 min-h-[42px] text-xs sm:text-sm px-2 sm:px-3"
          >
            ← {t('oracle.back')}
          </MysticalButton>
          <MysticalButton
            onClick={onHome}
            data-testid="button-home"
            className="flex-1 min-h-[42px] text-xs sm:text-sm px-2 sm:px-3"
          >
            🏠 {t('oracle.home')}
          </MysticalButton>
        </div>
      </div>
    </div>
  );
}