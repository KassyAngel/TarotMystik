// client/src/components/Wheel.tsx
// 🌙 Roue Monochrome Nuit Étoilée - VERSION SPECTACULAIRE
// ✨ Changements MAJEURS: Aura dynamique, particules volumineuses, effets de lumière, animations marquées

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

const getWheelStyles = (variation: string | null) => {
  return {
    gradient: 'from-blue-900/20 via-cyan-800/20 to-blue-900/20',
    glow: 'bg-blue-400/15',
    border: 'border-cyan-400/30',
    resultBg: 'from-[#0f1a2e] via-[#1e3a8a] to-[#0f1a2e]',
    resultBorder: 'border-cyan-400/50',
    resultShadow: 'shadow-[0_8px_32px_rgba(34,211,238,0.4)]'
  };
};

export default function Wheel({ onComplete, variation, onReset, isPremium = false }: WheelProps) {
  const { t } = useLanguage();
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [interpretation, setInterpretation] = useState<{ title: string; message: string } | null>(null);
  const [isLoadingAd, setIsLoadingAd] = useState(false);
  const [spinCount, setSpinCount] = useState(0);

  const styles = getWheelStyles(variation);

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
    setResult(null);
    setInterpretation(null);

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
    <div className="wheel-container w-full h-full flex flex-col p-3 sm:p-5 overflow-hidden">

      {/* HEADER avec titre TRÈS lumineux */}
      <div className="text-center mb-4 sm:mb-5 flex-shrink-0">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-cyan-300 font-serif mb-3 tracking-wide animate-glow-text" 
          style={{
            textShadow: '0 0 40px rgba(34, 211, 238, 0.8), 0 0 20px rgba(34, 211, 238, 0.6), 0 4px 25px rgba(0, 0, 0, 0.9)',
            filter: 'drop-shadow(0 2px 15px rgba(34, 211, 238, 0.9))'
          }}>
          {t('oracle.wheel.title') || 'Roue de la Destinée'}
        </h3>
        <p className="text-cyan-100 text-base sm:text-lg leading-snug px-2 font-medium" 
          style={{
            textShadow: '0 2px 12px rgba(0, 0, 0, 0.95), 0 0 20px rgba(34, 211, 238, 0.4)'
          }}>
          {!hasSpun 
            ? (t('oracle.wheel.subtitle') || 'Tournez la roue pour découvrir votre destin') 
            : '✨ Votre destinée est révélée ✨'
          }
        </p>
      </div>

      {/* ROUE */}
      <div className="flex-1 flex flex-col items-center justify-center min-h-0 py-2">
        <div className="w-full max-w-md mx-auto px-2">
          <div className="relative w-full aspect-square max-w-[340px] sm:max-w-[380px] mx-auto flex-shrink-0 mb-4 sm:mb-5">

            {/* 🌟 AURA DYNAMIQUE - Dominante BLEUE subtile */}
            <div className="absolute inset-0 rounded-full animate-pulse-aura">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/25 to-cyan-400/20 rounded-full blur-[70px]"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300/15 via-cyan-500/20 to-blue-300/15 rounded-full blur-[50px]" style={{animationDelay: '0.5s'}}></div>
            </div>

            {/* ✨ Flèche dorée élégante avec animation subtile */}
            <div className="absolute top-0 left-1/2 -translate-y-5 z-20" style={{ marginLeft: '-24px' }}>
              <div className="relative animate-bounce-arrow">
                <div className="absolute inset-0 blur-xl bg-amber-200/40 animate-pulse"></div>
                <div className="absolute inset-0 blur-lg bg-amber-100/30"></div>
                <div className="relative w-0 h-0 border-l-[24px] sm:border-l-[28px] border-l-transparent border-r-[24px] sm:border-r-[28px] border-r-transparent border-t-[48px] sm:border-t-[56px] border-t-amber-100/90" 
                  style={{
                    filter: 'drop-shadow(0 0 15px rgba(251, 191, 36, 0.5)) drop-shadow(0 4px 10px rgba(251, 191, 36, 0.4))'
                  }}
                ></div>
              </div>
            </div>

            {/* Cercle de la roue - PROFONDEUR MAXIMALE */}
            <div
              className={`relative w-full h-full rounded-full overflow-hidden transition-transform ease-out ${isSpinning ? 'animate-spin-glow' : ''}`}
              style={{ 
                transform: `rotate(${rotation}deg)`,
                transitionDuration: isSpinning ? '6000ms' : '0ms',
                background: 'radial-gradient(circle at 35% 35%, rgba(15, 23, 42, 0.85) 0%, rgba(10, 14, 26, 0.92) 45%, rgba(5, 8, 15, 0.97) 100%)',
                boxShadow: `
                  0 0 80px rgba(34,211,238,0.4),
                  0 0 120px rgba(34,211,238,0.2),
                  0 12px 60px rgba(0,0,0,0.9),
                  inset 0 0 120px rgba(34,211,238,0.15),
                  inset 0 -30px 60px rgba(0,0,0,0.6),
                  inset 0 2px 40px rgba(251,191,36,0.08)
                `
              }}
            >
              {/* Bordure dorée subtile */}
              <div className="absolute inset-0 rounded-full border-[2px] border-amber-300/35 shadow-[inset_0_0_30px_rgba(251,191,36,0.08),0_0_15px_rgba(251,191,36,0.2)]"></div>

              {/* SVG segments avec meilleure luminosité */}
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  {wheelSegments.map((segment, i) => {
                    const rgba = segment.color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
                    if (!rgba) return null;

                    const [_, r, g, b, a = '1'] = rgba;
                    const opacity = parseFloat(a);

                    return (
                      <radialGradient key={`grad-${i}`} id={`segment-${i}`}>
                        <stop offset="0%" style={{ stopColor: `rgb(${r}, ${g}, ${b})`, stopOpacity: opacity * 1.0 }} />
                        <stop offset="50%" style={{ stopColor: `rgb(${r}, ${g}, ${b})`, stopOpacity: opacity * 0.85 }} />
                        <stop offset="100%" style={{ stopColor: `rgb(${r}, ${g}, ${b})`, stopOpacity: opacity * 0.65 }} />
                      </radialGradient>
                    );
                  })}

                  <linearGradient id="glassShine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.2 }} />
                    <stop offset="50%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
                    <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0.15 }} />
                  </linearGradient>

                  <radialGradient id="centerGrad">
                    <stop offset="0%" stopColor="rgba(15, 23, 42, 0.98)" stopOpacity={1}/>
                    <stop offset="100%" stopColor="rgba(5, 8, 15, 1)" stopOpacity={1}/>
                  </radialGradient>

                  <filter id="nightGlow">
                    <feGaussianBlur stdDeviation="1.2" result="coloredBlur"/>
                    <feOffset dx="0" dy="0" result="offsetBlur"/>
                    <feMerge>
                      <feMergeNode in="offsetBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>

                  <pattern id="starsPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="0.8" fill="#ffffff" opacity="0.25"/>
                    <circle cx="30" cy="20" r="0.6" fill="#67e8f9" opacity="0.20"/>
                    <circle cx="48" cy="15" r="0.5" fill="#fbbf24" opacity="0.18"/>
                    <circle cx="20" cy="45" r="0.7" fill="#ffffff" opacity="0.22"/>
                    <circle cx="45" cy="50" r="0.5" fill="#67e8f9" opacity="0.19"/>
                  </pattern>
                </defs>

                {wheelSegments.map((segment, index) => {
                  const startAngle = (index * segmentAngle - 90) * (Math.PI / 180);
                  const endAngle = ((index + 1) * segmentAngle - 90) * (Math.PI / 180);
                  const midAngle = startAngle + (endAngle - startAngle) / 2;

                  const x1 = 100 + 98 * Math.cos(startAngle);
                  const y1 = 100 + 98 * Math.sin(startAngle);
                  const x2 = 100 + 98 * Math.cos(endAngle);
                  const y2 = 100 + 98 * Math.sin(endAngle);

                  const largeArcFlag = segmentAngle > 180 ? 1 : 0;

                  const textRadius = 70;
                  const textX = 100 + textRadius * Math.cos(midAngle);
                  const textY = 100 + textRadius * Math.sin(midAngle);
                  const textRotation = (midAngle * 180 / Math.PI) + 90;

                  const translatedLabel = t(`oracle.wheel.segment.${segment.id}`) || segment.label;

                  return (
                    <g key={segment.id} filter="url(#nightGlow)">
                      <path
                        d={`M 100 100 L ${x1} ${y1} A 98 98 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                        fill={`url(#segment-${index})`}
                        stroke="rgba(5, 8, 15, 0.6)"
                        strokeWidth="1.5"
                      />

                      <path
                        d={`M 100 100 L ${x1} ${y1} A 98 98 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                        fill="url(#glassShine)"
                        opacity="0.7"
                      />

                      <path
                        d={`M 100 100 L ${x1} ${y1} A 98 98 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                        fill="url(#starsPattern)"
                        opacity="0.4"
                      />

                      <path
                        d={`M 100 100 L ${x1} ${y1} A 98 98 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                        fill="none"
                        stroke="rgba(251, 191, 36, 0.35)"
                        strokeWidth="1.5"
                        opacity="0.9"
                      />

                      <text
                        x={textX}
                        y={textY}
                        fontSize={translatedLabel.length > 7 ? "8" : "9.5"}
                        fontWeight="800"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="rgba(255, 255, 255, 1)"
                        stroke="rgba(5, 8, 15, 0.95)"
                        strokeWidth="2"
                        transform={`rotate(${textRotation}, ${textX}, ${textY})`}
                        style={{ 
                          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                          letterSpacing: translatedLabel.length > 7 ? '1.8px' : '2.5px',
                          paintOrder: 'stroke fill',
                          filter: 'drop-shadow(0 2px 6px rgba(34, 211, 238, 0.6)) drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))'
                        }}
                      >
                        {translatedLabel.toUpperCase()}
                      </text>
                    </g>
                  );
                })}

                {/* Cercle central BRILLANT */}
                <circle cx="100" cy="100" r="30" fill="url(#centerGrad)" opacity="0.98"/>
                <circle cx="100" cy="100" r="30" fill="none" stroke="rgba(251, 191, 36, 0.5)" strokeWidth="3" opacity="0.8"/>
                <circle cx="100" cy="100" r="26" fill="none" stroke="rgba(34, 211, 238, 0.45)" strokeWidth="2" opacity="0.7"/>
                <circle cx="100" cy="100" r="22" fill="none" stroke="rgba(251, 191, 36, 0.35)" strokeWidth="1.5" opacity="0.6"/>
              </svg>

              {/* Symbole central lumineux mais subtil */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center pointer-events-none z-20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/30 to-blue-300/30 rounded-full blur-xl animate-pulse"></div>
                <span className="relative text-5xl sm:text-6xl animate-spin-slow" style={{
                  filter: 'drop-shadow(0 0 12px rgba(34, 211, 238, 0.7)) drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))',
                  color: 'rgba(240, 250, 255, 0.95)'
                }}>
                  ✦
                </span>
              </div>
            </div>

            {/* Particules dorées subtiles - équilibre bleu/or */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full animate-float-mystical-big"
                  style={{
                    width: i % 3 === 0 ? '3px' : '2px',
                    height: i % 3 === 0 ? '3px' : '2px',
                    backgroundColor: i % 4 === 0 ? 'rgba(251, 191, 36, 0.5)' : 'rgba(34, 211, 238, 0.6)',
                    top: `${5 + Math.random() * 90}%`,
                    left: `${5 + Math.random() * 90}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${2.5 + Math.random() * 1.5}s`,
                    filter: 'blur(0.5px)',
                    boxShadow: i % 4 === 0 
                      ? '0 0 10px rgba(251, 191, 36, 0.5), 0 0 5px currentColor'
                      : '0 0 12px rgba(34, 211, 238, 0.7), 0 0 6px currentColor'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* INTERPRÉTATION AMÉLIORÉE */}
        <div className="w-full max-w-lg mx-auto px-2" style={{ minHeight: hasSpun ? '220px' : '0px' }}>
          {interpretation && (
            <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-br from-[#0f1a2e]/98 via-[#1a2440]/98 to-[#0f1a2e]/98 rounded-2xl border-2 border-cyan-400/40 shadow-[0_10px_60px_rgba(34,211,238,0.4),inset_0_2px_40px_rgba(34,211,238,0.12)] animate-fade-in-scale backdrop-blur-xl">
              <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
                <div className="h-[3px] w-10 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent rounded-full"></div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-blue-100 to-cyan-200 text-center leading-tight break-words max-w-[240px]" 
                  style={{
                    filter: 'drop-shadow(0 2px 12px rgba(34, 211, 238, 0.8))'
                  }}>
                  {interpretation.title}
                </h4>
                <div className="h-[3px] w-10 bg-gradient-to-l from-transparent via-cyan-400/70 to-transparent rounded-full"></div>
              </div>

              <div className="bg-[#0a0e1a]/90 rounded-xl p-3 sm:p-4 md:p-5 border border-cyan-400/30 shadow-[inset_0_2px_20px_rgba(34,211,238,0.15)]">
                <p className="text-cyan-50/90 text-sm sm:text-base leading-relaxed break-words text-center font-medium">
                  {interpretation.message}
                </p>
              </div>

              <div className="mt-4 sm:mt-5 text-center">
                <div className={`inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r ${styles.resultBg} border-3 ${styles.resultBorder} ${styles.resultShadow}`}>
                  <span className="text-white font-bold text-base sm:text-lg md:text-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    {result}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* BOUTONS AMÉLIORÉS */}
      <div className="flex-shrink-0 pt-4 sm:pt-5">
        {!hasSpun && !isSpinning && !isLoadingAd && (
          <button
            onClick={spinWheel}
            className="relative w-full text-base sm:text-lg min-h-[52px] sm:min-h-[56px] bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 shadow-[0_6px_40px_rgba(251,191,36,0.5)] hover:shadow-[0_8px_60px_rgba(251,191,36,0.7),0_0_80px_rgba(251,191,36,0.4)] border-3 border-amber-300/50 hover:border-amber-200/70 text-amber-100 font-bold backdrop-blur-sm rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden group"
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-amber-300/40 to-transparent group-hover:animate-shine-fast"></span>
            </span>
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>{t('oracle.wheel.spinButton') || 'Tourner la Roue'}</span>
            </span>
          </button>
        )}

        {isSpinning && (
          <div className="text-center py-4 sm:py-5">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-cyan-100 to-amber-200 font-bold text-lg sm:text-xl animate-pulse-fast"
              style={{
                textShadow: '0 0 30px rgba(251, 191, 36, 0.6)'
              }}>
              ✦ {t('oracle.wheel.spinning') || 'La roue tourne...'} ✦
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
            className="w-full text-base sm:text-lg min-h-[52px] sm:min-h-[56px] bg-gradient-to-r from-slate-900/70 via-slate-800/70 to-slate-900/70 hover:from-slate-800/80 hover:via-slate-700/80 hover:to-slate-800/80 border-2 border-amber-300/40 hover:border-amber-300/60 text-amber-100 backdrop-blur-sm shadow-[0_4px_30px_rgba(251,191,36,0.3)] hover:shadow-[0_6px_40px_rgba(251,191,36,0.4)] rounded-xl transition-all duration-300 active:scale-[0.98] font-semibold"
          >
            <span className="inline-flex items-center gap-2 justify-center">
              <span className="text-2xl">↻</span>
              <span>{t('oracle.wheel.newSpin') || 'Nouveau Tirage'}</span>
            </span>
          </button>
        )}

        {isLoadingAd && (
          <div className="text-center py-3 sm:py-4">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-3 border-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.5)]"></div>
            <p className="text-amber-100 text-base sm:text-lg mt-3 font-medium">
              {t('oracle.wheel.loadingAd') || 'Chargement...'}
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in-scale {
          0% { opacity: 0; transform: scale(0.95) translateY(8px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes float-mystical-big {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-50px) translateX(25px) scale(1.8);
            opacity: 1;
          }
        }
        @keyframes bounce-arrow {
          0%, 100% { 
            margin-top: 0;
            filter: drop-shadow(0 0 25px rgba(251, 191, 36, 0.9)) drop-shadow(0 6px 15px rgba(251, 191, 36, 0.7));
          }
          50% { 
            margin-top: -8px;
            filter: drop-shadow(0 0 35px rgba(251, 191, 36, 1)) drop-shadow(0 8px 20px rgba(251, 191, 36, 0.9));
          }
        }
        @keyframes pulse-aura {
          0%, 100% { 
            opacity: 0.6; 
            transform: scale(1);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.1);
          }
        }
        @keyframes pulse-fast {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes glow-text {
          0%, 100% { 
            filter: drop-shadow(0 2px 15px rgba(34, 211, 238, 0.9));
          }
          50% { 
            filter: drop-shadow(0 2px 20px rgba(34, 211, 238, 1)) drop-shadow(0 0 30px rgba(34, 211, 238, 0.8));
          }
        }
        @keyframes shine-fast {
          to { left: 100%; }
        }
        @keyframes spin-glow {
          0%, 100% {
            box-shadow: 
              0 0 80px rgba(34,211,238,0.4),
              0 0 120px rgba(34,211,238,0.2),
              0 12px 60px rgba(0,0,0,0.9);
          }
          50% {
            box-shadow: 
              0 0 100px rgba(34,211,238,0.6),
              0 0 150px rgba(34,211,238,0.3),
              0 15px 70px rgba(0,0,0,0.95);
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-in-scale { animation: fade-in-scale 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .animate-float-mystical-big { animation: float-mystical-big ease-in-out infinite; }
        .animate-bounce-arrow { animation: bounce-arrow 1.5s ease-in-out infinite; }
        .animate-pulse-aura { animation: pulse-aura 3s ease-in-out infinite; }
        .animate-pulse-fast { animation: pulse-fast 1.5s ease-in-out infinite; }
        .animate-glow-text { animation: glow-text 2s ease-in-out infinite; }
        .animate-shine-fast { animation: shine-fast 2s infinite; }
        .animate-spin-glow { animation: spin-glow 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
      `}</style>
    </div>
  );
}