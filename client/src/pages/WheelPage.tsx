// client/src/pages/WheelPage.tsx
// 🌌 Page Roue Galaxie - VERSION AMÉLIORÉE
// ✨ Améliorations: Animation flèche, plus de particules, feedback tactile, profondeur

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

  // 🎯 Logique de pub : 1er tirage = récompensée, puis tous les 3 = interstitielle
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

      // 1er tirage : pub récompensée
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
      // Tirages 4, 7, 10... : pub interstitielle
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
      // Autres tirages : pas de pub
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

  // ÉCRAN DE CHARGEMENT PUB
  if (isLoadingAd) {
    return (
      <div className="main-content w-full min-h-screen flex flex-col items-center justify-center p-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#1a1540] to-[#0a0e1a]">
          <div className="absolute inset-0 opacity-25">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-pulse"
                style={{
                  backgroundColor: ['#8b5cf6', '#67e8f9'][i % 2],
                  width: Math.random() * 3.5 + 1 + 'px',
                  height: Math.random() * 3.5 + 1 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animationDelay: Math.random() * 2 + 's',
                  animationDuration: Math.random() * 3 + 2 + 's'
                }}
              />
            ))}
          </div>
        </div>

        <div className="text-center relative z-10 max-w-md px-4">
          <div className="relative w-28 h-28 mx-auto mb-8">
            <div className="absolute inset-0 bg-purple-400/40 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-7xl">🎁</div>
            </div>
          </div>

          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 text-2xl font-bold font-serif mb-3 animate-pulse">
            {t('oracle.wheel.loadingAd') || 'Chargement...'}
          </p>
          <p className="text-purple-200/70 text-base mt-4">
            {t('oracle.wheel.pleaseWait') || 'Un instant'}
          </p>

          {showLongAdMessage && (
            <div className="mt-8 p-5 bg-purple-500/15 border-2 border-purple-400/50 rounded-xl backdrop-blur-lg">
              <p className="text-purple-200 text-lg font-semibold mb-2">
                {t('oracle.wheel.adLongWarning') || 'Publicité en cours...'}
              </p>
              <p className="text-purple-200/70 text-sm">
                {t('oracle.wheel.pleaseWaitUntilEnd') || 'Merci de patienter'}
              </p>
            </div>
          )}

          <div className="flex justify-center gap-3 mt-6">
            <span className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></span>
            <span className="w-3 h-3 bg-purple-300 rounded-full animate-bounce" style={{animationDelay: '0.15s'}}></span>
            <span className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></span>
          </div>
        </div>
      </div>
    );
  }

  // ÉCRAN PRINCIPAL - ROUE (une fois débloquée)
  if (wheelUnlocked) {
    return (
      <div className="main-content w-full min-h-screen flex flex-col p-2 sm:p-4 pt-14 sm:pt-16 pb-[140px] relative overflow-x-hidden overflow-y-auto">
        {/* Background amélioré avec plus d'étoiles */}
        <div className="fixed inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#1a1540] to-[#0a0e1a] -z-10">
          <div className="absolute inset-0 opacity-20">
            {[...Array(80)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-twinkle"
                style={{
                  backgroundColor: ['#8b5cf6', '#67e8f9', '#fbbf24'][i % 3],
                  width: (i % 3 === 0 ? Math.random() * 3 : Math.random() * 2) + 0.5 + 'px',
                  height: (i % 3 === 0 ? Math.random() * 3 : Math.random() * 2) + 0.5 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animationDelay: Math.random() * 4 + 's',
                  animationDuration: Math.random() * 3 + 2 + 's'
                }}
              />
            ))}
          </div>

          {/* ✨ Étoiles filantes occasionnelles */}
          {[...Array(3)].map((_, i) => (
            <div
              key={`shooting-${i}`}
              className="absolute opacity-0 animate-shooting-star"
              style={{
                top: `${10 + i * 25}%`,
                right: `${20 + i * 15}%`,
                animationDelay: `${i * 8 + 3}s`,
                animationDuration: '2s'
              }}
            >
              <div className="w-1 h-1 bg-cyan-400 rounded-full blur-sm shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            </div>
          ))}
        </div>

        <div className="flex-1 flex items-center justify-center py-2 sm:py-3 min-h-0">
          <div className="w-full max-w-3xl px-1 sm:px-2">
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
        </div>

        <div className="flex-shrink-0 pt-2 sm:pt-3 pb-2">
          <div className="flex gap-1.5 sm:gap-2 justify-center max-w-md mx-auto px-2">
            <button 
              onClick={onBack}
              className="flex-1 min-h-[40px] sm:min-h-[44px] text-[11px] sm:text-sm font-semibold px-2 bg-gradient-to-r from-slate-900/60 via-slate-800/60 to-slate-900/60 hover:from-slate-800/70 hover:via-slate-700/70 hover:to-slate-800/70 border-2 border-amber-300/30 hover:border-amber-300/50 text-amber-100/90 backdrop-blur-sm rounded-xl transition-all duration-300 active:scale-[0.98]"
            >
              <span className="break-words block leading-tight">← {t('common.back') || 'Retour'}</span>
            </button>

            {isComplete && (
              <button 
                onClick={onBack}
                className="flex-1 min-h-[40px] sm:min-h-[44px] text-[11px] sm:text-sm font-semibold px-2 bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80 hover:from-slate-800/90 hover:via-slate-700/90 hover:to-slate-800/90 shadow-[0_0_30px_rgba(251,191,36,0.3)] text-amber-100 backdrop-blur-sm rounded-xl border-2 border-amber-300/40 hover:border-amber-200/60 transition-all duration-300 active:scale-[0.98]"
              >
                <span className="break-words block leading-tight">{t('oracle.backToOracles') || 'Retour'} →</span>
              </button>
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
              transform: translate(-200px, 200px);
            }
          }
          .animate-twinkle {
            animation: twinkle ease-in-out infinite;
          }
          .animate-shooting-star {
            animation: shooting-star ease-out infinite;
          }
        `}</style>
      </div>
    );
  }

  return null;
}