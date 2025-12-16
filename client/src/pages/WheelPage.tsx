// client/src/pages/WheelPage.tsx
// 🌌 Page Roue Galaxie - Design mystique et classe

import { useState } from 'react';
import MysticalButton from '@/components/MysticalButton';
import Wheel from '@/components/Wheel';
import { UserSession } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';
import { showRewardedAd } from '@/admobService';
import { wheelSegments } from '@/data/wheelData';

interface WheelPageProps {
  user: UserSession;
  onBack: () => void;
  onSaveReading?: (reading: any) => void;
  isPremium?: boolean;
}

const getRandomVariation = () => {
  const variations = ['1', '2', '3'];
  const choice = variations[Math.floor(Math.random() * variations.length)];
  console.log(`Variation choisie: ${choice}`);
  return choice;
};

const getVariationStyles = (variation: string | null, t: any) => {
  return {
    name: t('oracle.wheel.variations.golden') || 'Roue Cosmique',
    emoji: '🌌',
    badge: 'from-purple-500/80 via-purple-400/80 to-purple-500/80',
    badgeText: 'text-white',
    gradient: 'from-purple-500/40 via-cyan-400/40 to-purple-500/40',
    glow: 'bg-purple-500/30',
    glowColor: 'rgba(139,92,246,0.5)',
    border: 'border-purple-400/40',
    particle: 'bg-purple-400/70',
    textGradient: 'from-cyan-200 via-purple-300 to-cyan-200',
    bgBox: 'bg-[#0f1a2e]/90 border-purple-400/40',
    button: 'from-purple-600 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-400 hover:to-purple-500',
    buttonShadow: 'shadow-[0_0_35px_rgba(168,85,247,0.5)]'
  };
};

export default function WheelPage({ 
  user, 
  onBack, 
  onSaveReading,
  isPremium = false
}: WheelPageProps) {
  const { t } = useLanguage();
  const [isComplete, setIsComplete] = useState(false);
  const [showWheel, setShowWheel] = useState(false);
  const [isLoadingAd, setIsLoadingAd] = useState(false);
  const [showLongAdMessage, setShowLongAdMessage] = useState(false);
  const [variation, setVariation] = useState<string | null>(null);

  const handleStartSpin = async () => {
    const chosenVariation = getRandomVariation();
    setVariation(chosenVariation);
    console.log('🎯 [WHEEL] Démarrage - Variation:', chosenVariation);

    if (isPremium) {
      console.log('👑 [WHEEL] Premium actif → Déblocage instantané sans pub');
      setShowWheel(true);
      return;
    }

    setIsLoadingAd(true);
    setShowLongAdMessage(false);

    const messageTimeoutId = setTimeout(() => {
      console.log('💬 [WHEEL] Affichage message "pub longue"');
      setShowLongAdMessage(true);
    }, 45000);

    try {
      const rewardGranted = await showRewardedAd('wheel_start');

      clearTimeout(messageTimeoutId);
      setIsLoadingAd(false);
      setShowLongAdMessage(false);

      console.log(`🎁 [WHEEL] Résultat: ${rewardGranted ? '✅ DÉBLOQUÉ' : '❌ BLOQUÉ'}`);

      if (rewardGranted) {
        console.log('✅ [WHEEL] Pub complétée → Déblocage');
        setShowWheel(true);
      } else {
        console.log('❌ [WHEEL] Pub non complétée');
        alert(t('oracle.wheel.adNotCompleted') || 'Veuillez regarder la publicité jusqu\'à la fin.');
      }
    } catch (error) {
      console.error('❌ [WHEEL] Erreur:', error);
      clearTimeout(messageTimeoutId);
      setIsLoadingAd(false);
      setShowLongAdMessage(false);
      alert(t('oracle.wheel.adError') || 'Une erreur est survenue. Réessayez.');
    }
  };

  const handleComplete = (result: { category: string; interpretation: string }) => {
    setIsComplete(true);
    console.log('✅ Roue complétée:', result);
  };

  const styles = getVariationStyles(variation, t);

  // ÉCRAN D'ACCUEIL GALAXIE
  if (!showWheel && !isLoadingAd) {
    return (
      <div className="main-content w-full min-h-screen flex flex-col items-center justify-center p-4 pb-24 relative overflow-hidden">
        {/* Background galaxie cosmique */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#1a1540] to-[#0a0e1a]">
          {/* Nuages galactiques */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/50 via-transparent to-cyan-900/50 animate-pulse"></div>
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/25 rounded-full blur-[140px] animate-float-slow"></div>
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-600/25 rounded-full blur-[120px] animate-float-slow" style={{animationDelay: '3s'}}></div>
          </div>

          {/* Étoiles scintillantes */}
          <div className="absolute inset-0 opacity-50">
            {[...Array(70)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-twinkle"
                style={{
                  backgroundColor: ['#ffffff', '#a78bfa', '#67e8f9', '#fbbf24'][Math.floor(Math.random() * 4)],
                  width: Math.random() * 3 + 0.5 + 'px',
                  height: Math.random() * 3 + 0.5 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animationDelay: Math.random() * 5 + 's',
                  animationDuration: Math.random() * 3 + 2 + 's',
                  boxShadow: `0 0 ${Math.random() * 5 + 2}px currentColor`
                }}
              />
            ))}
          </div>
        </div>

        <div className="text-center relative z-10 px-3 w-full max-w-lg">
          {/* Badge Premium violet */}
          {isPremium && (
            <div className="inline-block mb-4">
              <div className="bg-gradient-to-r from-purple-500/90 via-purple-400/90 to-purple-500/90 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide shadow-[0_0_25px_rgba(168,85,247,0.6)]">
                <span className="flex items-center gap-1.5">
                  👑 {t('premium.badge') || 'Premium'}
                </span>
              </div>
            </div>
          )}

          {/* Badge Bonus violet */}
          <div className="inline-block mb-6 sm:mb-8">
            <div className="bg-gradient-to-r from-purple-500/80 via-purple-400/80 to-purple-500/80 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-[0_0_25px_rgba(168,85,247,0.5)] animate-pulse">
              <span className="whitespace-nowrap">
                {t('oracle.wheel.exclusiveBadge') || 'BONUS EXCLUSIF'}
              </span>
            </div>
          </div>

          {/* Roue Preview GALAXIE */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto mb-8">
            {/* Aura galaxie pulsante */}
            <div className="absolute inset-0 rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-cyan-400/40 to-purple-500/40 rounded-full blur-[60px] animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-purple-600/30 to-cyan-400/30 rounded-full blur-[45px] animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>

            {/* Flèche premium */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 z-20">
              <div className="relative">
                <div className="absolute inset-0 blur-2xl bg-cyan-300/80 animate-pulse"></div>
                <div className="absolute inset-0 blur-md bg-white/40"></div>
                <div className="relative w-0 h-0 border-l-[22px] sm:border-l-[24px] border-l-transparent border-r-[22px] sm:border-r-[24px] border-r-transparent border-t-[44px] sm:border-t-[48px] border-t-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                  style={{
                    filter: 'drop-shadow(0 4px 12px rgba(6, 182, 212, 0.6))'
                  }}
                ></div>
              </div>
            </div>

            {/* Roue miniature galaxie */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_0_80px_rgba(139,92,246,0.6),0_10px_50px_rgba(0,0,0,0.7)] border-[4px] border-purple-400/50"
              style={{ 
                background: 'radial-gradient(circle at 35% 35%, #1a1540 0%, #0f1a2e 45%, #0a0e1a 100%)',
                boxShadow: '0 0 80px rgba(139,92,246,0.5), inset 0 0 100px rgba(139,92,246,0.1)'
              }}>

              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  {/* Gradients premium */}
                  <radialGradient id="violetGalaxiePreview">
                    <stop offset="0%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
                    <stop offset="30%" style={{ stopColor: '#9333ea', stopOpacity: 0.98 }} />
                    <stop offset="70%" style={{ stopColor: '#7c3aed', stopOpacity: 0.95 }} />
                    <stop offset="100%" style={{ stopColor: '#6d28d9', stopOpacity: 0.93 }} />
                  </radialGradient>
                  <radialGradient id="cyanGalaxiePreview">
                    <stop offset="0%" style={{ stopColor: '#22d3ee', stopOpacity: 1 }} />
                    <stop offset="30%" style={{ stopColor: '#06b6d4', stopOpacity: 0.98 }} />
                    <stop offset="70%" style={{ stopColor: '#0891b2', stopOpacity: 0.95 }} />
                    <stop offset="100%" style={{ stopColor: '#0e7490', stopOpacity: 0.93 }} />
                  </radialGradient>
                  <radialGradient id="centerGalaxiePreview">
                    <stop offset="0%" stopColor="#1a1540" stopOpacity={1}/>
                    <stop offset="100%" stopColor="#0a0e1a" stopOpacity={1}/>
                  </radialGradient>

                  <linearGradient id="shineOverlayPreview" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.15 }} />
                    <stop offset="50%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
                    <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0.1 }} />
                  </linearGradient>

                  {/* Pattern étoiles */}
                  <pattern id="starsPatternPreview" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                    <circle cx="8" cy="8" r="0.8" fill="#ffffff" opacity="0.3"/>
                    <circle cx="25" cy="15" r="0.6" fill="#67e8f9" opacity="0.25"/>
                    <circle cx="40" cy="10" r="0.5" fill="#a78bfa" opacity="0.2"/>
                    <circle cx="15" cy="35" r="0.7" fill="#ffffff" opacity="0.25"/>
                    <circle cx="35" cy="40" r="0.5" fill="#67e8f9" opacity="0.2"/>
                  </pattern>

                  <filter id="cosmicGlowPreview">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                    <feOffset dx="0" dy="1" result="offsetBlur"/>
                    <feMerge>
                      <feMergeNode in="offsetBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {wheelSegments.map((segment, i) => {
                  const segmentAngle = 45;
                  const startAngle = (i * segmentAngle - 90) * (Math.PI / 180);
                  const endAngle = ((i + 1) * segmentAngle - 90) * (Math.PI / 180);
                  const midAngle = startAngle + (endAngle - startAngle) / 2;

                  const x1 = 100 + 98 * Math.cos(startAngle);
                  const y1 = 100 + 98 * Math.sin(startAngle);
                  const x2 = 100 + 98 * Math.cos(endAngle);
                  const y2 = 100 + 98 * Math.sin(endAngle);

                  const textRadius = 70;
                  const textX = 100 + textRadius * Math.cos(midAngle);
                  const textY = 100 + textRadius * Math.sin(midAngle);
                  const textRotation = (midAngle * 180 / Math.PI) + 90;

                  const isViolet = i % 2 === 0;
                  const fillColor = isViolet ? 'url(#violetGalaxiePreview)' : 'url(#cyanGalaxiePreview)';
                  const textColor = '#ffffff';
                  const strokeColor = 'rgba(10, 14, 26, 0.8)';

                  const translatedLabel = t(`oracle.wheel.segment.${segment.id}`) || segment.label;

                  return (
                    <g key={i} filter="url(#cosmicGlowPreview)">
                      <path
                        d={`M 100 100 L ${x1} ${y1} A 98 98 0 0 1 ${x2} ${y2} Z`}
                        fill={fillColor}
                        stroke="#0a0e1a"
                        strokeWidth="2"
                      />

                      <path
                        d={`M 100 100 L ${x1} ${y1} A 98 98 0 0 1 ${x2} ${y2} Z`}
                        fill="url(#shineOverlayPreview)"
                        opacity="0.6"
                      />

                      <path
                        d={`M 100 100 L ${x1} ${y1} A 98 98 0 0 1 ${x2} ${y2} Z`}
                        fill="url(#starsPatternPreview)"
                        opacity="0.3"
                      />

                      <path
                        d={`M 100 100 L ${x1} ${y1} A 98 98 0 0 1 ${x2} ${y2} Z`}
                        fill="none"
                        stroke={isViolet ? 'rgba(168, 85, 247, 0.4)' : 'rgba(34, 211, 238, 0.4)'}
                        strokeWidth="1.5"
                        opacity="0.8"
                      />

                      <text
                        x={textX}
                        y={textY}
                        fontSize={translatedLabel.length > 7 ? "7" : "8.5"}
                        fontWeight="600"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill={textColor}
                        stroke={strokeColor}
                        strokeWidth="1.2"
                        transform={`rotate(${textRotation}, ${textX}, ${textY})`}
                        style={{ 
                          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                          letterSpacing: translatedLabel.length > 7 ? '1px' : '1.8px',
                          paintOrder: 'stroke fill',
                          filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.4))'
                        }}
                      >
                        {translatedLabel.toUpperCase()}
                      </text>
                    </g>
                  );
                })}

                <circle cx="100" cy="100" r="26" fill="url(#centerGalaxiePreview)" opacity="0.98"/>
                <circle cx="100" cy="100" r="26" fill="none" stroke="url(#violetGalaxiePreview)" strokeWidth="3" opacity="0.7"/>
                <circle cx="100" cy="100" r="24" fill="none" stroke="#a855f7" strokeWidth="2" opacity="0.9"/>
              </svg>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center pointer-events-none z-20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/60 to-cyan-400/60 rounded-full blur-2xl animate-pulse"></div>
                <span className="relative text-4xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] animate-pulse" style={{
                  filter: 'drop-shadow(0 0 12px rgba(168, 85, 247, 0.8)) drop-shadow(0 0 8px rgba(34, 211, 238, 0.6))'
                }}>
                  ✦
                </span>
              </div>
            </div>
          </div>

          {/* Titre violet premium */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-4 leading-tight bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.7)] px-2">
            {t('oracle.wheel.title') || 'Roue de la Destinée'}
          </h1>

          {/* Description */}
          <div className="text-purple-200/80 text-sm sm:text-base mb-6 leading-relaxed bg-gradient-to-br from-[#1a1540]/90 to-[#0a0e1a]/90 py-4 px-4 rounded-xl border border-purple-400/30 shadow-[0_4px_25px_rgba(139,92,246,0.25)] backdrop-blur-lg">
            <p className="text-center font-medium">
              {t('oracle.wheel.description') || 'Laissez le destin guider la roue vers votre avenir'}
            </p>
          </div>

          {/* Message Premium violet */}
          {isPremium && (
            <div className="mb-6 p-4 bg-gradient-to-br from-purple-500/15 to-purple-600/15 border border-purple-400/40 rounded-xl backdrop-blur-lg">
              <p className="text-purple-200 text-sm sm:text-base leading-snug font-medium">
                {t('oracle.wheel.premiumAccess') || 'Accès instantané sans publicité'}
              </p>
            </div>
          )}

          {/* Bouton principal */}
          <MysticalButton 
            onClick={handleStartSpin}
            className="w-full py-3.5 sm:py-4 px-4 text-sm sm:text-base font-bold bg-gradient-to-r from-purple-600/90 via-cyan-500/90 to-purple-600/90 hover:from-purple-500/90 hover:via-cyan-400/90 hover:to-purple-500/90 shadow-[0_8_35px_rgba(139,92,246,0.6)] border border-cyan-400/60 transform hover:scale-105 transition-all min-h-[56px] flex items-center justify-center text-white"
          >
            <span className="text-center leading-tight">
              {isPremium 
                ? (t('oracle.wheel.startButtonPremium') || 'Tourner la Roue')
                : (t('oracle.wheel.startButton') || 'Débloquer la Roue de la Destinée')
              }
            </span>
          </MysticalButton>

          <button
            onClick={onBack}
            className="mt-5 text-cyan-200/70 hover:text-cyan-100 text-sm transition-colors font-medium"
          >
            ← {t('common.back') || 'Retour'}
          </button>
        </div>

        <style>{`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-35px) translateX(25px); }
          }
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
          }
          .animate-float-slow {
            animation: float-slow 15s ease-in-out infinite;
          }
          .animate-twinkle {
            animation: twinkle ease-in-out infinite;
          }
        `}</style>
      </div>
    );
  }

  // ÉCRAN DE CHARGEMENT
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

  // ÉCRAN PRINCIPAL - ROUE
  return (
    <div className="main-content w-full min-h-screen flex flex-col p-2 sm:p-4 pt-14 sm:pt-16 pb-[140px] relative overflow-x-hidden overflow-y-auto">
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#1a1540] to-[#0a0e1a] -z-10">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-twinkle"
              style={{
                backgroundColor: ['#8b5cf6', '#67e8f9', '#fbbf24'][i % 3],
                width: Math.random() * 2.5 + 0.5 + 'px',
                height: Math.random() * 2.5 + 0.5 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 4 + 's',
                animationDuration: Math.random() * 3 + 2 + 's'
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center py-2 sm:py-3 min-h-0">
        <div className="w-full max-w-3xl px-1 sm:px-2">
          <div className="relative">
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div
                className={`bg-gradient-to-br ${styles.gradient} rounded-2xl blur-[80px] opacity-25 w-[150%] h-[150%]`}
              />
            </div>

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
      </div>

      <div className="flex-shrink-0 pt-2 sm:pt-3 pb-2">
        <div className="flex gap-1.5 sm:gap-2 justify-center max-w-md mx-auto px-2">
          <button 
            onClick={onBack}
            className="flex-1 min-h-[40px] sm:min-h-[44px] text-[11px] sm:text-sm font-semibold px-2 bg-gradient-to-r from-purple-900/60 via-purple-800/60 to-purple-900/60 hover:from-purple-800/70 hover:via-purple-700/70 hover:to-purple-800/70 border-2 border-purple-400/50 text-purple-100 backdrop-blur-sm rounded-xl transition-all duration-300"
          >
            <span className="break-words block leading-tight">← {t('common.back') || 'Retour'}</span>
          </button>

          {isComplete && (
            <button 
              onClick={onBack}
              className="flex-1 min-h-[40px] sm:min-h-[44px] text-[11px] sm:text-sm font-semibold px-2 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-400 hover:to-purple-500 shadow-[0_0_35px_rgba(168,85,247,0.5)] text-white backdrop-blur-sm rounded-xl border-2 border-purple-400/60 transition-all duration-300"
            >
              <span className="break-words block leading-tight">{t('oracle.backToOracles') || 'Retour'} →</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}