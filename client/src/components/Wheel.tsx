// client/src/components/Wheel.tsx
// 🎡 Roue de la Destinée - VERSION OPTIMISÉE PLEIN ÉCRAN

import React, { useState } from 'react';
import { showInterstitialAd } from '@/admobService';
import { useLanguage } from '@/contexts/LanguageContext';
import { wheelSegments } from '@/data/wheelData';

interface WheelProps {
  onComplete?: (result: { category: string; interpretation: string }) => void;
  variation: string | null;
  onReset?: () => void;
  isPremium?: boolean;
}

export default function Wheel({ onComplete, variation, onReset, isPremium = false }: WheelProps) {
  const { t } = useLanguage();
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [interpretation, setInterpretation] = useState<{ title: string; message: string } | null>(null);
  const [isLoadingAd, setIsLoadingAd] = useState(false);
  const [spinCount, setSpinCount] = useState(0);

  async function spinWheel() {
    if (isSpinning || isLoadingAd) return;

    const newSpinCount = spinCount + 1;
    setSpinCount(newSpinCount);

    const shouldShowAd = newSpinCount % 3 === 0 && !isPremium;

    if (shouldShowAd) {
      setIsLoadingAd(true);
      try {
        await showInterstitialAd('wheel_spin');
      } catch (error) {
        console.log("❌ Pub non disponible");
      }
      setIsLoadingAd(false);
    }

    setIsSpinning(true);

    const spins = Math.floor(Math.random() * 5) + 8;
    const randomAngle = Math.floor(Math.random() * 360);
    const totalRotation = rotation + (spins * 360) + randomAngle;

    setRotation(totalRotation);

    setTimeout(() => {
      const segmentAngle = 360 / wheelSegments.length;
      const finalAngle = totalRotation % 360;
      const segmentIndex = Math.floor((360 - finalAngle) / segmentAngle) % wheelSegments.length;
      const segment = wheelSegments[segmentIndex];

      const currentVariation = variation || '1';
      const titleKey = `oracle.wheel.${segment.id}.title.${currentVariation}`;
      const messagesKey = `oracle.wheel.${segment.id}.message.${currentVariation}`;

      const title = t(titleKey);
      const messages = t(messagesKey);
      const randomMessage = Array.isArray(messages) 
        ? messages[Math.floor(Math.random() * messages.length)]
        : messages;

      const translatedCategory = t(`oracle.wheel.segment.${segment.id}`) || segment.label;

      setResult(translatedCategory);
      setInterpretation({ 
        title: title !== titleKey ? title : translatedCategory, 
        message: randomMessage !== messagesKey ? randomMessage : 'Interprétation à venir...' 
      });
      setIsSpinning(false);
      setHasSpun(true);

      if (onComplete) {
        onComplete({
          category: translatedCategory,
          interpretation: `${title}\n\n${randomMessage}`
        });
      }
    }, 6000);
  }

  const segmentAngle = 360 / wheelSegments.length;

  return (
    <div className="wheel-container-full h-full flex flex-col pb-[140px]">

      {/* HEADER COMPACT */}
      <div className="text-center mb-3 flex-shrink-0 px-4">
        <h3 className="text-xl sm:text-2xl font-bold text-amber-100 font-serif mb-1">
          {t('oracle.wheel.title') || 'Wheel of Destiny'}
        </h3>
        <p className="text-amber-200/60 text-xs sm:text-sm">
          {!hasSpun 
            ? (t('oracle.wheel.subtitle') || 'Spin the wheel to discover your fate') 
            : '✨ Your destiny is revealed ✨'
          }
        </p>
      </div>

      {/* ROUE - MAXIMALE */}
      <div className="flex-1 flex items-center justify-center min-h-0 px-2 sm:px-4">
        <div className="w-full h-full max-w-[min(600px,90vh)] max-h-[min(600px,90vh)] flex items-center justify-center">

          {/* Container principal de la roue */}
          <div className="relative w-full aspect-square">

            {/* Cadre doré aux coins */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-30" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="goldCorner" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d4af37"/>
                  <stop offset="100%" stopColor="#aa8a2e"/>
                </linearGradient>
              </defs>
              <g opacity="0.5">
                <path d="M1,1 L10,1 M1,1 L1,10" stroke="url(#goldCorner)" strokeWidth="0.8" strokeLinecap="round"/>
                <text x="6" y="6" fontSize="3" fill="#d4af37">✦</text>
                <path d="M99,1 L90,1 M99,1 L99,10" stroke="url(#goldCorner)" strokeWidth="0.8" strokeLinecap="round"/>
                <text x="93" y="6" fontSize="3" fill="#d4af37">✦</text>
                <path d="M1,99 L10,99 M1,99 L1,90" stroke="url(#goldCorner)" strokeWidth="0.8" strokeLinecap="round"/>
                <text x="6" y="97" fontSize="3" fill="#d4af37">✦</text>
                <path d="M99,99 L90,99 M99,99 L99,90" stroke="url(#goldCorner)" strokeWidth="0.8" strokeLinecap="round"/>
                <text x="93" y="97" fontSize="3" fill="#d4af37">✦</text>
              </g>
            </svg>

            {/* Halos lumineux */}
            <div className="absolute inset-0 rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/30 to-cyan-400/20 rounded-full blur-[50px] animate-pulse-slow"></div>
              <div className="absolute inset-[8%] bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-blue-500/30 rounded-full blur-[40px] animate-pulse-medium"></div>
            </div>

            {/* Flèche indicatrice VERS LE BAS */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 z-20">
              <div className="relative">
                <div className="absolute inset-0 blur-2xl bg-amber-600/50 animate-pulse"></div>
                <svg width="40" height="50" viewBox="0 0 32 40" className="relative scale-125">
                  <defs>
                    <linearGradient id="arrowGold" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#d4af37"/>
                      <stop offset="100%" stopColor="#aa8a2e"/>
                    </linearGradient>
                  </defs>
                  <path d="M 16 40 L 0 4 L 32 4 Z" 
                    fill="url(#arrowGold)" 
                    stroke="#8b7020" 
                    strokeWidth="2.5"/>
                </svg>
              </div>
            </div>

            {/* Roue rotative */}
            <div className="absolute inset-[1%] rounded-full overflow-hidden">
              <div
                className="relative w-full h-full transition-transform ease-out"
                style={{ 
                  transform: `rotate(${rotation}deg)`,
                  transitionDuration: isSpinning ? '6000ms' : '0ms'
                }}
              >
                {/* Triple bordure dorée */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d4af37] via-[#c9a234] to-[#d4af37] p-[4px]">
                  <div className="w-full h-full rounded-full bg-slate-950/60 p-[3px]">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#d4af37] via-[#b8942d] to-[#d4af37] p-[3px]">
                      <div className="w-full h-full rounded-full relative overflow-hidden bg-gradient-to-br from-slate-900/95 via-blue-950/95 to-slate-900/95 backdrop-blur-sm">

                        {/* Points dorés animés */}
                        <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
                          <circle cx="200" cy="200" r="190" fill="none" stroke="#b8942d" strokeWidth="0.8" opacity="0.3"/>
                          {[...Array(24)].map((_, i) => {
                            const angle = (i * 360 / 24) * Math.PI / 180;
                            const x = 200 + 190 * Math.cos(angle);
                            const y = 200 + 190 * Math.sin(angle);
                            return (
                              <circle key={i} cx={x} cy={y} r="2.5" fill="#d4af37" opacity="0.6">
                                <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3s" begin={`${i * 0.1}s`} repeatCount="indefinite"/>
                              </circle>
                            );
                          })}
                        </svg>

                        {/* Segments de la roue */}
                        <svg viewBox="0 0 400 400" className="w-full h-full">
                          <defs>
                            {wheelSegments.map((_, index) => (
                              <radialGradient key={`grad-${index}`} id={`segment${index}`}>
                                <stop offset="20%" stopColor="rgba(30, 58, 138, 0.6)"/>
                                <stop offset="100%" stopColor={wheelSegments[index].color}/>
                              </radialGradient>
                            ))}
                          </defs>

                          {wheelSegments.map((segment, index) => {
                            const startAngle = (index * segmentAngle - 90) * (Math.PI / 180);
                            const endAngle = ((index + 1) * segmentAngle - 90) * (Math.PI / 180);
                            const midAngle = startAngle + (endAngle - startAngle) / 2;

                            const x1 = 200 + 188 * Math.cos(startAngle);
                            const y1 = 200 + 188 * Math.sin(startAngle);
                            const x2 = 200 + 188 * Math.cos(endAngle);
                            const y2 = 200 + 188 * Math.sin(endAngle);

                            const textRadius = 140;
                            const textX = 200 + textRadius * Math.cos(midAngle);
                            const textY = 200 + textRadius * Math.sin(midAngle);
                            const textRotation = (midAngle * 180 / Math.PI) + 90;

                            const translatedLabel = t(`oracle.wheel.segment.${segment.id}`) || segment.label;

                            return (
                              <g key={segment.id}>
                                <path
                                  d={`M 200 200 L ${x1} ${y1} A 188 188 0 0 1 ${x2} ${y2} Z`}
                                  fill={`url(#segment${index})`}
                                  stroke="rgba(212, 175, 55, 0.2)"
                                  strokeWidth="1.2"
                                />

                                <line 
                                  x1="200" y1="200" 
                                  x2={x2} y2={y2}
                                  stroke="#b8942d"
                                  strokeWidth="1"
                                  opacity="0.5"
                                />

                                <text
                                  x={200 + 168 * Math.cos(midAngle)}
                                  y={200 + 168 * Math.sin(midAngle)}
                                  fontSize="11"
                                  fill="#d4af37"
                                  textAnchor="middle"
                                  dominantBaseline="middle"
                                  opacity="0.7"
                                >
                                  ★
                                </text>

                                <text
                                  x={textX}
                                  y={textY}
                                  fontSize="15"
                                  fontWeight="700"
                                  textAnchor="middle"
                                  dominantBaseline="middle"
                                  fill="#f5e6d3"
                                  stroke="#0f172a"
                                  strokeWidth="4"
                                  transform={`rotate(${textRotation}, ${textX}, ${textY})`}
                                  style={{ 
                                    fontFamily: 'serif',
                                    letterSpacing: '1.2px',
                                    paintOrder: 'stroke fill'
                                  }}
                                >
                                  {translatedLabel.toUpperCase()}
                                </text>
                              </g>
                            );
                          })}

                          {/* Centre de la roue */}
                          <defs>
                            <radialGradient id="centerGlow">
                              <stop offset="0%" stopColor="#1e40af" stopOpacity="0.7"/>
                              <stop offset="100%" stopColor="#0f172a" stopOpacity="1"/>
                            </radialGradient>
                          </defs>
                          <circle cx="200" cy="200" r="52" fill="url(#centerGlow)"/>
                          <circle cx="200" cy="200" r="52" fill="none" stroke="#d4af37" strokeWidth="3"/>
                          <circle cx="200" cy="200" r="48" fill="none" stroke="#b8942d" strokeWidth="1.5"/>
                          <circle cx="200" cy="200" r="44" fill="none" stroke="#d4af37" strokeWidth="0.8" opacity="0.5"/>

                          {/* Motif solaire */}
                          <g opacity="0.7">
                            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                              const rad = (angle * Math.PI) / 180;
                              const x1 = 200 + 32 * Math.cos(rad);
                              const y1 = 200 + 32 * Math.sin(rad);
                              const x2 = 200 + 44 * Math.cos(rad);
                              const y2 = 200 + 44 * Math.sin(rad);
                              return (
                                <g key={angle}>
                                  <line 
                                    x1={x1} y1={y1} 
                                    x2={x2} y2={y2}
                                    stroke="#d4af37" 
                                    strokeWidth="1.5"
                                  />
                                  <circle cx={x2} cy={y2} r="2.5" fill="#d4af37"/>
                                </g>
                              );
                            })}
                          </g>
                        </svg>

                        {/* Mandala central animé */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center">
                          <div className="absolute inset-0 bg-amber-600/40 rounded-full blur-2xl animate-pulse"></div>
                          <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                            <defs>
                              <radialGradient id="mandalaGold">
                                <stop offset="0%" stopColor="#d4af37"/>
                                <stop offset="100%" stopColor="#aa8a2e"/>
                              </radialGradient>
                            </defs>
                            <circle cx="50" cy="50" r="36" fill="none" stroke="url(#mandalaGold)" strokeWidth="2" opacity="0.8"/>
                            <circle cx="50" cy="50" r="26" fill="none" stroke="url(#mandalaGold)" strokeWidth="1.5" opacity="0.7"/>
                            <circle cx="50" cy="50" r="16" fill="none" stroke="url(#mandalaGold)" strokeWidth="1.2" opacity="0.6"/>
                            {[0, 90, 180, 270].map((angle) => {
                              const rad = (angle * Math.PI) / 180;
                              const x = 50 + 31 * Math.cos(rad);
                              const y = 50 + 31 * Math.sin(rad);
                              return <circle key={angle} cx={x} cy={y} r="3.5" fill="url(#mandalaGold)" opacity="0.9"/>;
                            })}
                            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                              const rad = (angle * Math.PI) / 180;
                              const x = 50 + 19 * Math.cos(rad);
                              const y = 50 + 19 * Math.sin(rad);
                              const x2 = 50 + 33 * Math.cos(rad);
                              const y2 = 50 + 33 * Math.sin(rad);
                              return <line key={angle} x1={x} y1={y} x2={x2} y2={y2} stroke="url(#mandalaGold)" strokeWidth="1" opacity="0.6"/>;
                            })}
                          </svg>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* INTERPRÉTATION - COMPACTE */}
      {hasSpun && interpretation && (
        <div className="flex-shrink-0 px-4 pb-2 max-h-[25vh] overflow-y-auto">
          <div className="p-3 bg-gradient-to-br from-slate-900/95 via-blue-950/95 to-slate-900/95 rounded-xl border-2 border-amber-600/50 shadow-[0_6px_20px_rgba(212,175,55,0.3)] backdrop-blur-sm">

            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="h-[1.5px] w-6 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
              <h4 className="text-sm sm:text-base font-bold text-amber-500 text-center">
                {interpretation.title}
              </h4>
              <div className="h-[1.5px] w-6 bg-gradient-to-l from-transparent via-amber-600 to-transparent"></div>
            </div>

            <div className="bg-slate-950/80 rounded-lg p-2.5 border border-amber-600/20 mb-2">
              <p className="text-amber-100 text-xs sm:text-sm leading-relaxed text-center">
                {interpretation.message}
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-950 to-slate-900 border-2 border-amber-600/70 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                <span className="text-amber-500 font-bold text-xs sm:text-sm">
                  {result}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BOUTONS - AU-DESSUS DES BOUTONS DE PAGE */}
      <div className="fixed bottom-[70px] left-0 right-0 px-4 z-[60]">
        <div className="max-w-lg mx-auto">
          {!hasSpun && !isSpinning && !isLoadingAd && (
            <button
              onClick={spinWheel}
              className="w-full text-base sm:text-lg min-h-[50px] bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:via-amber-400 hover:to-amber-500 shadow-[0_4px_25px_rgba(212,175,55,0.5)] hover:shadow-[0_6px_35px_rgba(212,175,55,0.7)] border-2 border-amber-400 hover:border-amber-300 text-slate-900 font-bold rounded-xl transition-all duration-300 active:scale-[0.98]"
            >
              ✨ {t('oracle.wheel.spinButton') || 'Spin the Wheel'} ✨
            </button>
          )}

          {isSpinning && (
            <div className="w-full text-center py-3 min-h-[50px] flex items-center justify-center bg-slate-900/90 border-2 border-amber-500/50 rounded-xl backdrop-blur-sm">
              <p className="text-amber-500 font-bold text-base sm:text-lg animate-pulse">
                ✦ {t('oracle.wheel.spinning') || 'The wheel is spinning...'} ✦
              </p>
            </div>
          )}

          {hasSpun && (
            <button
              onClick={() => {
                setHasSpun(false);
                setInterpretation(null);
                setResult(null);
                if (onReset) onReset();
              }}
              className="w-full text-base min-h-[50px] bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 border-2 border-amber-600/70 hover:border-amber-600/90 text-amber-500 shadow-[0_4px_20px_rgba(212,175,55,0.3)] rounded-xl transition-all duration-300 font-bold active:scale-[0.98] backdrop-blur-sm"
            >
              ↻ {t('oracle.wheel.newSpin') || 'New Spin'}
            </button>
          )}

          {isLoadingAd && (
            <div className="w-full text-center py-3 min-h-[50px] flex flex-col items-center justify-center bg-slate-900/90 border-2 border-amber-500/50 rounded-xl backdrop-blur-sm">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500"></div>
              <p className="text-amber-500 text-sm mt-2">
                {t('oracle.wheel.loadingAd') || 'Loading...'}
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.03); }
        }
        @keyframes pulse-medium {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-spin-slow { animation: spin-slow 25s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-pulse-medium { animation: pulse-medium 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
}