// client/src/pages/WheelPage.tsx
// 🎡 Page Roue - VERSION OPTIMISÉE PLEIN ÉCRAN

import { useState, useEffect } from 'react';
import Wheel from '@/components/Wheel';
import { UserSession } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';
import { showRewardedAd, showInterstitialAd } from '@/admobService';

interface WheelPageProps {
  user: UserSession;
  onBack: () => void;
  onSaveReading?: (reading: any) => void;
  isPremium?: boolean;
  wheelCounter?: number;
  onWheelComplete?: () => void;
  onReadingComplete?: (oracleType: string) => void;
}

const getRandomVariation = () => {
  const variations = ['1', '2', '3'];
  const choice = variations[Math.floor(Math.random() * variations.length)];
  console.log(`🎲 Variation choisie: ${choice}`);
  return choice;
};

export default function WheelPage({ 
  user, 
  onBack, 
  onSaveReading,
  isPremium = false,
  wheelCounter = 0,
  onWheelComplete,
  onReadingComplete
}: WheelPageProps) {
  const { t } = useLanguage();
  const [isComplete, setIsComplete] = useState(false);
  const [isLoadingAd, setIsLoadingAd] = useState(false);
  const [showLongAdMessage, setShowLongAdMessage] = useState(false);
  const [variation, setVariation] = useState<string | null>(null);
  const [wheelUnlocked, setWheelUnlocked] = useState(isPremium);

  useEffect(() => {
    const unlockWheel = async () => {
      if (isPremium) {
        console.log('👑 [WHEEL] Premium actif → Déblocage instantané');
        const chosenVariation = getRandomVariation();
        setVariation(chosenVariation);
        setWheelUnlocked(true);
        return;
      }

      const nextCount = wheelCounter + 1;
      console.log(`🎯 [WHEEL] Tirage #${nextCount}`);

      const chosenVariation = getRandomVariation();
      setVariation(chosenVariation);

      if (nextCount === 1) {
        console.log('🎁 [WHEEL] 1er tirage → Pub récompensée');
        setIsLoadingAd(true);
        setShowLongAdMessage(false);

        const messageTimeoutId = setTimeout(() => {
          console.log('💬 [WHEEL] Affichage message "pub longue"');
          setShowLongAdMessage(true);
        }, 45000);

        try {
          const rewardGranted = await showRewardedAd('wheel_first');
          clearTimeout(messageTimeoutId);
          setIsLoadingAd(false);
          setShowLongAdMessage(false);

          console.log(`🎁 [WHEEL] Résultat: ${rewardGranted ? '✅ DÉBLOQUÉ' : '❌ BLOQUÉ'}`);

          if (rewardGranted) {
            console.log('✅ [WHEEL] Pub complétée → Déblocage');
            setWheelUnlocked(true);
          } else {
            console.log('❌ [WHEEL] Pub non complétée → Retour');
            alert(t('oracle.wheel.adNotCompleted') || 'Veuillez regarder la publicité jusqu\'à la fin.');
            onBack();
          }
        } catch (error) {
          console.error('❌ [WHEEL] Erreur:', error);
          clearTimeout(messageTimeoutId);
          setIsLoadingAd(false);
          setShowLongAdMessage(false);
          alert(t('oracle.wheel.adError') || 'Une erreur est survenue. Réessayez.');
          onBack();
        }
      }
      else if ((nextCount - 1) % 3 === 0 && nextCount > 1) {
        console.log(`📺 [WHEEL] Tirage #${nextCount} → Pub interstitielle`);
        try {
          await showInterstitialAd(`wheel_${nextCount}`);
          console.log('✅ [WHEEL] Pub interstitielle affichée');
        } catch (error) {
          console.error('❌ [WHEEL] Erreur pub interstitielle:', error);
        }
        setWheelUnlocked(true);
      }
      else {
        console.log(`⏭️ [WHEEL] Tirage #${nextCount} → Pas de pub`);
        setWheelUnlocked(true);
      }
    };

    unlockWheel();
  }, [isPremium, wheelCounter, t, onBack]);

  const handleComplete = (result: { category: string; interpretation: string }) => {
    setIsComplete(true);
    console.log('✅ Roue complétée:', result);

    if (onWheelComplete) {
      onWheelComplete();
    }
  };

  // ÉCRAN DE CHARGEMENT
  if (isLoadingAd) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0e1a] via-[#1a1540] to-[#0a0e1a] z-50">
        {/* Étoiles de fond */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                backgroundColor: ['#8b5cf6', '#67e8f9', '#d4af37'][i % 3],
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 2 + 's',
                animationDuration: Math.random() * 3 + 2 + 's'
              }}
            />
          ))}
        </div>

        <div className="text-center relative z-10 max-w-md px-6">
          {/* Icône animée */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-purple-400/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl">🎁</div>
            </div>
          </div>

          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 text-3xl font-bold font-serif mb-4 animate-pulse">
            {t('oracle.wheel.loadingAd') || 'Chargement...'}
          </p>
          <p className="text-purple-200/70 text-lg">
            {t('oracle.wheel.pleaseWait') || 'Un instant'}
          </p>

          {showLongAdMessage && (
            <div className="mt-8 p-6 bg-purple-500/20 border-2 border-purple-400/60 rounded-2xl backdrop-blur-lg animate-fade-in">
              <p className="text-purple-200 text-xl font-semibold mb-3">
                {t('oracle.wheel.adLongWarning') || 'Publicité en cours...'}
              </p>
              <p className="text-purple-200/70 text-base">
                {t('oracle.wheel.pleaseWaitUntilEnd') || 'Merci de patienter'}
              </p>
            </div>
          )}

          <div className="flex justify-center gap-4 mt-8">
            <span className="w-4 h-4 bg-purple-400 rounded-full animate-bounce"></span>
            <span className="w-4 h-4 bg-purple-300 rounded-full animate-bounce" style={{animationDelay: '0.15s'}}></span>
            <span className="w-4 h-4 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></span>
          </div>
        </div>
      </div>
    );
  }

  // ÉCRAN PRINCIPAL - ROUE PLEIN ÉCRAN
  if (wheelUnlocked) {
    return (
      <div className="fixed inset-0 flex flex-col bg-gradient-to-br from-[#0a0e1a] via-[#1a1540] to-[#0a0e1a]">

        {/* Background avec étoiles */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 opacity-25">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-twinkle"
                style={{
                  backgroundColor: ['#8b5cf6', '#67e8f9', '#d4af37'][i % 3],
                  width: (i % 3 === 0 ? Math.random() * 3.5 : Math.random() * 2) + 0.5 + 'px',
                  height: (i % 3 === 0 ? Math.random() * 3.5 : Math.random() * 2) + 0.5 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animationDelay: Math.random() * 4 + 's',
                  animationDuration: Math.random() * 3 + 2 + 's'
                }}
              />
            ))}
          </div>

          {/* Étoiles filantes */}
          {[...Array(3)].map((_, i) => (
            <div
              key={`shooting-${i}`}
              className="absolute opacity-0 animate-shooting-star"
              style={{
                top: `${10 + i * 30}%`,
                right: `${20 + i * 20}%`,
                animationDelay: `${i * 10 + 4}s`,
                animationDuration: '2.5s'
              }}
            >
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full blur-sm shadow-[0_0_15px_rgba(34,211,238,0.9)]" />
            </div>
          ))}
        </div>

        {/* Container principal - ESPACE POUR LES BOUTONS */}
        <div className="flex-1 flex flex-col min-h-0 pt-3">
          <Wheel 
            onComplete={handleComplete}
            variation={variation}
            isPremium={isPremium}
            onReset={() => {
              const newVariation = getRandomVariation();
              setVariation(newVariation);
              console.log('🔄 Nouvelle variation:', newVariation);
            }}
          />
        </div>

        {/* Boutons fixes en bas - TOUJOURS VISIBLES */}
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/98 via-slate-900/95 to-transparent backdrop-blur-md border-t border-amber-500/20 z-50">
          <div className="max-w-lg mx-auto px-4 py-3 pb-safe-area">
            {!isComplete ? (
              <button 
                onClick={onBack}
                className="w-full min-h-[48px] text-base font-bold px-4 bg-gradient-to-r from-slate-900/70 via-slate-800/70 to-slate-900/70 hover:from-slate-800/80 hover:via-slate-700/80 hover:to-slate-800/80 border-2 border-amber-500/40 hover:border-amber-500/60 text-amber-100 backdrop-blur-sm rounded-xl transition-all duration-300 active:scale-[0.97] shadow-lg"
              >
                ← {t('common.back') || 'Retour'}
              </button>
            ) : (
              <div className="flex gap-3">
                <button 
                  onClick={onBack}
                  className="flex-1 min-h-[48px] text-sm sm:text-base font-bold px-3 bg-gradient-to-r from-slate-900/70 via-slate-800/70 to-slate-900/70 hover:from-slate-800/80 hover:via-slate-700/80 hover:to-slate-800/80 border-2 border-amber-500/40 hover:border-amber-500/60 text-amber-100 backdrop-blur-sm rounded-xl transition-all duration-300 active:scale-[0.97] shadow-lg"
                >
                  ← {t('common.back') || 'Back'}
                </button>

                <button 
                  onClick={onBack}
                  className="flex-1 min-h-[48px] text-sm sm:text-base font-bold px-3 bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 shadow-[0_0_25px_rgba(212,175,55,0.3)] text-amber-100 backdrop-blur-sm rounded-xl border-2 border-amber-500/50 hover:border-amber-400/70 transition-all duration-300 active:scale-[0.97]"
                >
                  {t('oracle.backToOracles') || 'Oracles'} →
                </button>
              </div>
            )}
          </div>
        </div>

        <style>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
          }
          @keyframes shooting-star {
            0% { 
              opacity: 0;
              transform: translate(0, 0);
            }
            10% { opacity: 1; }
            90% { opacity: 0.5; }
            100% {
              opacity: 0;
              transform: translate(-250px, 250px);
            }
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-twinkle {
            animation: twinkle ease-in-out infinite;
          }
          .animate-shooting-star {
            animation: shooting-star ease-out infinite;
          }
          .animate-fade-in {
            animation: fade-in 0.4s ease-out;
          }
          .pb-safe-area {
            padding-bottom: max(0.75rem, env(safe-area-inset-bottom));
          }
        `}</style>
      </div>
    );
  }

  return null;
}