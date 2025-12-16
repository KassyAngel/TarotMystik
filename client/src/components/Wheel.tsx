// client/src/components/Wheel.tsx
// 🌌 Roue Galaxie Cosmique - Design mystique et classe

import React, { useState } from 'react';
import { showInterstitialAd } from '@/admobService';
import MysticalButton from './MysticalButton';
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
    gradient: 'from-purple-500/30 via-cyan-400/30 to-purple-500/30',
    glow: 'bg-purple-500/20',
    border: 'border-purple-400/40',
    resultBg: 'from-[#0f1a2e] via-[#6d28d9] to-[#0f1a2e]',
    resultBorder: 'border-purple-400/60',
    resultShadow: 'shadow-[0_8px_32px_rgba(139,92,246,0.6)]'
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
    <div className="wheel-container w-full h-full flex flex-col p-3 sm:p-5 rounded-2xl bg-gradient-to-br from-[#0a0e1a]/95 via-[#1a1540]/95 to-[#0a0e1a]/95 border-2 border-purple-400/30 shadow-[0_0_50px_rgba(139,92,246,0.3),inset_0_2px_50px_rgba(139,92,246,0.08)] overflow-hidden backdrop-blur-lg">

      {/* HEADER */}
      <div className="text-center mb-4 sm:mb-5 flex-shrink-0">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-200 to-purple-300 font-serif mb-2 tracking-wide drop-shadow-[0_2px_12px_rgba(139,92,246,0.8)]">
          {t('oracle.wheel.title') || 'Roue de la Destinée'}
        </h3>
        <p className="text-purple-200/70 text-sm sm:text-base leading-snug px-2">
          {!hasSpun 
            ? (t('oracle.wheel.subtitle') || 'Tournez la roue pour découvrir votre destin') 
            : '✦ Votre destinée est révélée'
          }
        </p>
      </div>

      {/* ROUE */}
      <div className="flex-1 flex flex-col items-center justify-center min-h-0 py-2">
        <div className="w-full max-w-md mx-auto px-2">
          <div className="relative w-full aspect-square max-w-[340px] sm:max-w-[380px] mx-auto flex-shrink-0 mb-4 sm:mb-5">

            {/* Aura galaxie animée */}
            <div className="absolute inset-0 rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-cyan-400/40 to-purple-500/40 rounded-full blur-[60px] animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/25 via-purple-600/25 to-cyan-400/25 rounded-full blur-[40px] animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>

            {/* Flèche premium avec glow */}
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

            {/* Cercle de la roue galaxie */}
            <div
              className={`relative w-full h-full rounded-full overflow-hidden transition-transform ease-out`}
              style={{ 
                transform: `rotate(${rotation}deg)`,
                transitionDuration: isSpinning ? '6000ms' : '0ms',
                background: 'radial-gradient(circle at 35% 35%, #1a1540 0%, #0f1a2e 45%, #0a0e1a 100%)',
                boxShadow: '0 0 80px rgba(139,92,246,0.6), 0 10px 50px rgba(0,0,0,0.8), inset 0 0 100px rgba(139,92,246,0.12)'
              }}
            >
              {/* Bordure lumineuse premium */}
              <div className="absolute inset-0 rounded-full border-[3px] border-purple-300/60 shadow-[inset_0_0_40px_rgba(168,85,247,0.4)]"></div>

              {/* SVG segments galaxie */}
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  {/* Gradients luxueux violet avec reflets */}
                  <radialGradient id="violetGalaxie">
                    <stop offset="0%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
                    <stop offset="30%" style={{ stopColor: '#9333ea', stopOpacity: 0.98 }} />
                    <stop offset="70%" style={{ stopColor: '#7c3aed', stopOpacity: 0.95 }} />
                    <stop offset="100%" style={{ stopColor: '#6d28d9', stopOpacity: 0.93 }} />
                  </radialGradient>

                  {/* Gradients luxueux cyan avec reflets */}
                  <radialGradient id="cyanGalaxie">
                    <stop offset="0%" style={{ stopColor: '#22d3ee', stopOpacity: 1 }} />
                    <stop offset="30%" style={{ stopColor: '#06b6d4', stopOpacity: 0.98 }} />
                    <stop offset="70%" style={{ stopColor: '#0891b2', stopOpacity: 0.95 }} />
                    <stop offset="100%" style={{ stopColor: '#0e7490', stopOpacity: 0.93 }} />
                  </radialGradient>

                  {/* Gradient overlay pour effet premium */}
                  <linearGradient id="shineOverlay" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.15 }} />
                    <stop offset="50%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
                    <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0.1 }} />
                  </linearGradient>

                  <radialGradient id="centerGrad">
                    <stop offset="0%" stopColor="#1a1540" stopOpacity={1}/>
                    <stop offset="100%" stopColor="#0a0e1a" stopOpacity={1}/>
                  </radialGradient>

                  {/* Filtre brillance premium */}
                  <filter id="cosmicGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feOffset dx="0" dy="1" result="offsetBlur"/>
                    <feMerge>
                      <feMergeNode in="offsetBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>

                  {/* Pattern étoiles subtiles */}
                  <pattern id="starsPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                    <circle cx="8" cy="8" r="0.8" fill="#ffffff" opacity="0.3"/>
                    <circle cx="25" cy="15" r="0.6" fill="#67e8f9" opacity="0.25"/>
                    <circle cx="40" cy="10" r="0.5" fill="#a78bfa" opacity="0.2"/>
                    <circle cx="15" cy="35" r="0.7" fill="#ffffff" opacity="0.25"/>
                    <circle cx="35" cy="40" r="0.5" fill="#67e8f9" opacity="0.2"/>
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

                  const isViolet = index % 2 === 0;
                  const fillColor = isViolet ? 'url(#violetGalaxie)' : 'url(#cyanGalaxie)';
                  const textColor = '#ffffff';
                  const textStroke = 'rgba(10, 14, 26, 0.8)';

                  const translatedLabel = t(`oracle.wheel.segment.${segment.id}`) || segment.label;

                  return (
                    <g key={segment.id} filter="url(#cosmicGlow)">
                      {/* Segment principal avec gradient */}
                      <path
                        d={`M 100 100 L ${x1} ${y1} A 98 98 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                        fill={fillColor}
                        stroke="#0a0e1a"
                        strokeWidth="2"
                      />

                      {/* Overlay brillance premium */}
                      <path
                        d={`M 100 100 L ${x1} ${y1} A 98 98 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                        fill="url(#shineOverlay)"
                        opacity="0.6"
                      />

                      {/* Layer étoiles subtiles */}
                      <path
                        d={`M 100 100 L ${x1} ${y1} A 98 98 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                        fill="url(#starsPattern)"
                        opacity="0.3"
                      />

                      {/* Bordure lumineuse intérieure */}
                      <path
                        d={`M 100 100 L ${x1} ${y1} A 98 98 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                        fill="none"
                        stroke={isViolet ? 'rgba(168, 85, 247, 0.4)' : 'rgba(34, 211, 238, 0.4)'}
                        strokeWidth="1.5"
                        opacity="0.8"
                      />

                      {/* Texte fin et élégant */}
                      <text
                        x={textX}
                        y={textY}
                        fontSize={translatedLabel.length > 7 ? "7.5" : "9"}
                        fontWeight="600"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill={textColor}
                        stroke={textStroke}
                        strokeWidth="1.2"
                        transform={`rotate(${textRotation}, ${textX}, ${textY})`}
                        style={{ 
                          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                          letterSpacing: translatedLabel.length > 7 ? '1.2px' : '2px',
                          paintOrder: 'stroke fill',
                          filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.4))'
                        }}
                      >
                        {translatedLabel.toUpperCase()}
                      </text>
                    </g>
                  );
                })}

                {/* Cercle central luxueux */}
                <circle cx="100" cy="100" r="28" fill="url(#centerGrad)" opacity="0.98"/>
                <circle cx="100" cy="100" r="28" fill="none" stroke="url(#violetGalaxie)" strokeWidth="3" opacity="0.7"/>
                <circle cx="100" cy="100" r="25" fill="none" stroke="#a855f7" strokeWidth="2" opacity="0.9"/>
                <circle cx="100" cy="100" r="22" fill="none" stroke="#22d3ee" strokeWidth="1.5" opacity="0.6"/>
              </svg>

              {/* Symbole central premium */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center pointer-events-none z-20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/60 to-cyan-400/60 rounded-full blur-2xl animate-pulse"></div>
                <span className="relative text-4xl sm:text-5xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] animate-pulse" style={{
                  filter: 'drop-shadow(0 0 12px rgba(168, 85, 247, 0.8)) drop-shadow(0 0 8px rgba(34, 211, 238, 0.6))'
                }}>
                  ✦
                </span>
              </div>
            </div>

            {/* Particules cosmiques flottantes */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full animate-float-mystical"
                  style={{
                    backgroundColor: ['#8b5cf6', '#67e8f9', '#fbbf24'][i % 3],
                    top: `${10 + Math.random() * 80}%`,
                    left: `${10 + Math.random() * 80}%`,
                    animationDelay: `${i * 0.6}s`,
                    animationDuration: `${2.5 + Math.random() * 2.5}s`,
                    filter: 'blur(0.5px)',
                    opacity: 0.8,
                    boxShadow: '0 0 6px currentColor'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* INTERPRÉTATION */}
        <div className="w-full max-w-lg mx-auto px-2" style={{ minHeight: hasSpun ? '220px' : '0px' }}>
          {interpretation && (
            <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-br from-[#0f1a2e]/98 via-[#1a2440]/98 to-[#0f1a2e]/98 rounded-2xl border-2 border-purple-400/40 shadow-[0_8px_40px_rgba(139,92,246,0.5),inset_0_2px_30px_rgba(139,92,246,0.12)] animate-fade-in-scale backdrop-blur-xl">
              <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                <div className="h-[2px] w-8 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-purple-300 to-cyan-200 text-center leading-tight break-words max-w-[220px] drop-shadow-[0_2px_10px_rgba(103,232,249,0.7)]">
                  {interpretation.title}
                </h4>
                <div className="h-[2px] w-8 bg-gradient-to-l from-transparent via-cyan-400/60 to-transparent"></div>
              </div>

              <div className="bg-[#0a0e1a]/80 rounded-xl p-3 sm:p-4 md:p-5 border border-purple-400/25 shadow-[inset_0_2px_15px_rgba(139,92,246,0.18)]">
                <p className="text-purple-100/85 text-sm sm:text-base leading-relaxed break-words text-center">
                  {interpretation.message}
                </p>
              </div>

              {/* Badge résultat */}
              <div className="mt-4 sm:mt-5 text-center">
                <div className={`inline-block px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r ${styles.resultBg} border-2 ${styles.resultBorder} ${styles.resultShadow}`}>
                  <span className="text-white font-bold text-sm sm:text-base md:text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                    {result}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* BOUTONS */}
      <div className="flex-shrink-0 pt-4 sm:pt-5">
        {!hasSpun && !isSpinning && !isLoadingAd && (
          <button
            onClick={spinWheel}
            className="w-full text-sm sm:text-base min-h-[48px] sm:min-h-[52px] bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 hover:from-purple-500 hover:via-purple-400 hover:to-purple-500 shadow-[0_4px_30px_rgba(168,85,247,0.6)] border-2 border-purple-400/60 text-white font-bold backdrop-blur-sm rounded-xl transition-all duration-300 hover:scale-105"
          >
            {t('oracle.wheel.spinButton') || '✦ Tourner la Roue'}
          </button>
        )}

        {isSpinning && (
          <div className="text-center py-3 sm:py-4">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 font-semibold text-base sm:text-lg animate-pulse">
              {t('oracle.wheel.spinning') || '✦ La roue tourne...'}
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
            className="w-full text-sm sm:text-base min-h-[48px] sm:min-h-[52px] bg-gradient-to-r from-purple-900/60 via-purple-800/60 to-purple-900/60 hover:from-purple-800/70 hover:via-purple-700/70 hover:to-purple-800/70 border-2 border-purple-400/50 text-purple-100 backdrop-blur-sm shadow-[0_4px_20px_rgba(168,85,247,0.3)] rounded-xl transition-all duration-300"
          >
            <span className="inline-flex items-center gap-2 justify-center">
              <span className="text-lg">↻</span>
              <span>{t('oracle.wheel.newSpin') || 'Nouveau Tirage'}</span>
            </span>
          </button>
        )}

        {isLoadingAd && (
          <div className="text-center py-3 sm:py-4">
            <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-purple-400"></div>
            <p className="text-purple-200 text-sm sm:text-base mt-2">
              {t('oracle.wheel.loadingAd') || 'Chargement...'}
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in-scale {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(8px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes float-mystical {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-40px) translateX(20px) scale(1.4);
            opacity: 1;
          }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .animate-float-mystical {
          animation: float-mystical ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}