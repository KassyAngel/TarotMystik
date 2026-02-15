// client/src/components/Wheel.tsx
// 🎡 Roue de la Destinée - VERSION FINALE (Boutons bien visibles)

import React, { useState, useEffect } from 'react';
import { showInterstitialAd } from '@/admobService';
import { useLanguage } from '@/contexts/LanguageContext';
import { wheelSegments } from '@/data/wheelData';

interface WheelProps {
  onComplete?: (result: { category: string; interpretation: string }) => void;
  variation: string | null;
  onReset?: () => void;
  isPremium?: boolean;
}

// ✅ FIX: Augmenter BAR_BOTTOM pour laisser de la place pour la bannière pub
const NAVBAR_TOP = 60;
const BAR_BOTTOM = 220; // Augmenté de 160 à 220 pour éviter que les boutons soient coupés

export default function Wheel({ onComplete, variation, onReset, isPremium = false }: WheelProps) {
  const { t } = useLanguage();
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [interpretation, setInterpretation] = useState<{ title: string; message: string } | null>(null);
  const [isLoadingAd, setIsLoadingAd] = useState(false);
  const [spinCount, setSpinCount] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (hasSpun || !hasSpun) {
      setIsTransitioning(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(false);
        });
      });
    }
  }, [hasSpun]);

  async function spinWheel() {
    if (isSpinning || isLoadingAd) return;

    const newSpinCount = spinCount + 1;
    setSpinCount(newSpinCount);

    if (newSpinCount % 3 === 0 && !isPremium) {
      setIsLoadingAd(true);
      try { await showInterstitialAd('wheel_spin'); }
      catch { console.log("❌ Pub non disponible"); }
      setIsLoadingAd(false);
    }

    setIsSpinning(true);

    const spins = Math.floor(Math.random() * 5) + 8;
    const randomAngle = Math.floor(Math.random() * 360);
    const totalRotation = rotation + (spins * 360) + randomAngle;
    setRotation(totalRotation);

    setTimeout(() => {
      const segAngle = 360 / wheelSegments.length;
      const finalAngle = totalRotation % 360;
      const idx = Math.floor((360 - finalAngle) / segAngle) % wheelSegments.length;
      const segment = wheelSegments[idx];

      const v = variation || '1';
      const titleKey = `oracle.wheel.${segment.id}.title.${v}`;
      const messagesKey = `oracle.wheel.${segment.id}.message.${v}`;

      const title = t(titleKey);
      const messages = t(messagesKey);
      const msg = Array.isArray(messages)
        ? messages[Math.floor(Math.random() * messages.length)]
        : messages;

      const cat = t(`oracle.wheel.segment.${segment.id}`) || segment.label;

      setResult(cat);
      setInterpretation({
        title: title !== titleKey ? title : cat,
        message: msg !== messagesKey ? msg : 'Interprétation à venir...'
      });
      setIsSpinning(false);
      setHasSpun(true);

      if (onComplete) {
        onComplete({ category: cat, interpretation: `${title}\n\n${msg}` });
      }
    }, 6000);
  }

  const segmentAngle = 360 / wheelSegments.length;

  // ✅ Tailles adaptatives avec plus d'espace pour les boutons
  const wheelSize = hasSpun
    ? `min(calc(100vh - ${NAVBAR_TOP + BAR_BOTTOM + 380}px), 280px, 68vw)`
    : `min(calc(100vh - ${NAVBAR_TOP + BAR_BOTTOM + 140}px), 380px, 78vw)`;

  const transitionStyle = isTransitioning ? 'none' : 'all 800ms ease-in-out';

  return (
    <div
      className="wheel-container-full w-full flex flex-col items-center"
      style={{
        height: `calc(100vh - ${NAVBAR_TOP + BAR_BOTTOM}px)`,
        marginTop: `${NAVBAR_TOP}px`,
        overflow: 'hidden',
      }}
    >

      {/* TITRE */}
      <div 
        className="text-center pt-3 pb-1.5 px-4 flex-shrink-0 w-full"
        style={{
          transition: transitionStyle,
          opacity: isTransitioning ? 0 : 1,
        }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-amber-100 font-serif drop-shadow-[0_2px_10px_rgba(212,175,55,0.6)]">
          {t('oracle.wheel.title') || 'Roue de la Destinée'}
        </h3>
        {!hasSpun && (
          <p className="text-amber-200/70 text-xs sm:text-sm font-medium mt-0.5">
            {t('oracle.wheel.subtitle') || 'Tournez la roue pour découvrir votre destin'}
          </p>
        )}
      </div>

      {/* ROUE */}
      <div className="flex-1 flex items-center justify-center px-2 min-h-0">
        <div 
          className="relative" 
          style={{ 
            width: wheelSize, 
            height: wheelSize,
            transition: transitionStyle,
            willChange: 'width, height',
            transform: 'translateZ(0)',
          }}
        >

          {/* Cadre doré */}
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

          {/* Halos */}
          <div className="absolute inset-0 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/30 to-cyan-400/20 rounded-full blur-[50px] animate-pulse-slow"></div>
            <div className="absolute inset-[8%] bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-blue-500/30 rounded-full blur-[40px] animate-pulse-medium"></div>
          </div>

          {/* Flèche */}
          <div className="absolute left-1/2 -translate-x-1/2 z-20" style={{ top: '-18px' }}>
            <div className="relative">
              <div className="absolute inset-0 blur-2xl bg-amber-600/50 animate-pulse"></div>
              <svg width="40" height="50" viewBox="0 0 32 40" className="relative scale-125">
                <defs>
                  <linearGradient id="arrowGold" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#d4af37"/>
                    <stop offset="100%" stopColor="#aa8a2e"/>
                  </linearGradient>
                </defs>
                <path d="M 16 40 L 0 4 L 32 4 Z" fill="url(#arrowGold)" stroke="#8b7020" strokeWidth="2.5"/>
              </svg>
            </div>
          </div>

          {/* Roue rotative */}
          <div className="absolute inset-[1%] rounded-full overflow-hidden">
            <div
              className="relative w-full h-full transition-transform ease-out"
              style={{
                transform: `rotate(${rotation}deg)`,
                transitionDuration: isSpinning ? '6000ms' : '0ms',
                willChange: 'transform',
              }}
            >
              {/* Triple bordure dorée */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d4af37] via-[#c9a234] to-[#d4af37] p-[4px]">
                <div className="w-full h-full rounded-full bg-slate-950/60 p-[3px]">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#d4af37] via-[#b8942d] to-[#d4af37] p-[3px]">
                    <div className="w-full h-full rounded-full relative overflow-hidden bg-gradient-to-br from-slate-900/95 via-blue-950/95 to-slate-900/95 backdrop-blur-sm">

                      {/* Points dorés */}
                      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
                        <circle cx="200" cy="200" r="190" fill="none" stroke="#b8942d" strokeWidth="0.8" opacity="0.3"/>
                        {[...Array(24)].map((_, i) => {
                          const a = (i * 360 / 24) * Math.PI / 180;
                          return (
                            <circle key={i} cx={200 + 190 * Math.cos(a)} cy={200 + 190 * Math.sin(a)} r="2.5" fill="#d4af37" opacity="0.6">
                              <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3s" begin={`${i * 0.1}s`} repeatCount="indefinite"/>
                            </circle>
                          );
                        })}
                      </svg>

                      {/* Segments */}
                      <svg viewBox="0 0 400 400" className="w-full h-full">
                        <defs>
                          {wheelSegments.map((seg, i) => (
                            <radialGradient key={`g${i}`} id={`segment${i}`}>
                              <stop offset="20%" stopColor="rgba(30,58,138,0.6)"/>
                              <stop offset="100%" stopColor={seg.color}/>
                            </radialGradient>
                          ))}
                        </defs>

                        {wheelSegments.map((segment, index) => {
                          const startA = (index * segmentAngle - 90) * (Math.PI / 180);
                          const endA = ((index + 1) * segmentAngle - 90) * (Math.PI / 180);
                          const midA = startA + (endA - startA) / 2;
                          const x1 = 200 + 188 * Math.cos(startA);
                          const y1 = 200 + 188 * Math.sin(startA);
                          const x2 = 200 + 188 * Math.cos(endA);
                          const y2 = 200 + 188 * Math.sin(endA);
                          const tR = 140;
                          const tX = 200 + tR * Math.cos(midA);
                          const tY = 200 + tR * Math.sin(midA);
                          const rot = (midA * 180 / Math.PI) + 90;
                          const label = t(`oracle.wheel.segment.${segment.id}`) || segment.label;

                          return (
                            <g key={segment.id}>
                              <path d={`M 200 200 L ${x1} ${y1} A 188 188 0 0 1 ${x2} ${y2} Z`} fill={`url(#segment${index})`} stroke="rgba(212,175,55,0.2)" strokeWidth="1.2"/>
                              <line x1="200" y1="200" x2={x2} y2={y2} stroke="#b8942d" strokeWidth="1" opacity="0.5"/>
                              <text x={200 + 168 * Math.cos(midA)} y={200 + 168 * Math.sin(midA)} fontSize="11" fill="#d4af37" textAnchor="middle" dominantBaseline="middle" opacity="0.7">★</text>
                              <text x={tX} y={tY} fontSize="15" fontWeight="700" textAnchor="middle" dominantBaseline="middle" fill="#f5e6d3" stroke="#0f172a" strokeWidth="4"
                                transform={`rotate(${rot}, ${tX}, ${tY})`} style={{ fontFamily: 'serif', letterSpacing: '1.2px', paintOrder: 'stroke fill' }}>
                                {label.toUpperCase()}
                              </text>
                            </g>
                          );
                        })}

                        {/* Centre */}
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

                        {/* Rayons */}
                        <g opacity="0.7">
                          {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => {
                            const r = (deg * Math.PI) / 180;
                            return (
                              <g key={deg}>
                                <line x1={200 + 32 * Math.cos(r)} y1={200 + 32 * Math.sin(r)} x2={200 + 44 * Math.cos(r)} y2={200 + 44 * Math.sin(r)} stroke="#d4af37" strokeWidth="1.5"/>
                                <circle cx={200 + 44 * Math.cos(r)} cy={200 + 44 * Math.sin(r)} r="2.5" fill="#d4af37"/>
                              </g>
                            );
                          })}
                        </g>
                      </svg>

                      {/* Mandala central */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center">
                        <div className="absolute inset-0 bg-amber-600/40 rounded-full blur-2xl animate-pulse"></div>
                        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                          <defs>
                            <radialGradient id="mandalaGold">
                              <stop offset="0%" stopColor="#d4af37"/><stop offset="100%" stopColor="#aa8a2e"/>
                            </radialGradient>
                          </defs>
                          <circle cx="50" cy="50" r="36" fill="none" stroke="url(#mandalaGold)" strokeWidth="2" opacity="0.8"/>
                          <circle cx="50" cy="50" r="26" fill="none" stroke="url(#mandalaGold)" strokeWidth="1.5" opacity="0.7"/>
                          <circle cx="50" cy="50" r="16" fill="none" stroke="url(#mandalaGold)" strokeWidth="1.2" opacity="0.6"/>
                          {[0, 90, 180, 270].map(a => {
                            const r = (a * Math.PI) / 180;
                            return <circle key={a} cx={50 + 31 * Math.cos(r)} cy={50 + 31 * Math.sin(r)} r="3.5" fill="url(#mandalaGold)" opacity="0.9"/>;
                          })}
                          {[0, 45, 90, 135, 180, 225, 270, 315].map(a => {
                            const r = (a * Math.PI) / 180;
                            return <line key={a} x1={50 + 19 * Math.cos(r)} y1={50 + 19 * Math.sin(r)} x2={50 + 33 * Math.cos(r)} y2={50 + 33 * Math.sin(r)} stroke="url(#mandalaGold)" strokeWidth="1" opacity="0.6"/>;
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

      {/* INTERPRÉTATION */}
      {hasSpun && interpretation && (
        <div 
          className="px-4 mt-2 flex justify-center flex-shrink-0 w-full"
          style={{
            transition: transitionStyle,
            opacity: isTransitioning ? 0 : 1,
          }}
        >
          <div className="w-full max-w-md p-3 bg-gradient-to-br from-slate-900/95 via-blue-950/95 to-slate-900/95 rounded-lg border-2 border-amber-600/50 shadow-[0_4px_15px_rgba(212,175,55,0.25)] backdrop-blur-sm">

            <div className="flex items-center justify-center gap-1.5 mb-2">
              <div className="h-[1px] w-6 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
              <h4 className="text-sm sm:text-base font-bold text-amber-500 text-center">
                {interpretation.title}
              </h4>
              <div className="h-[1px] w-6 bg-gradient-to-l from-transparent via-amber-600 to-transparent"></div>
            </div>

            <div className="bg-slate-950/80 rounded-md p-2.5 border border-amber-600/20 mb-2">
              <p className="text-amber-100 text-xs sm:text-sm leading-relaxed text-center">
                {interpretation.message}
              </p>
            </div>

            <div className="flex justify-center">
              <div className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-950 to-slate-900 border border-amber-600/70">
                <span className="text-amber-500 font-bold text-xs sm:text-sm">{result}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BOUTON INTÉGRÉ - AVEC PLUS D'ESPACE */}
      <div 
        className="px-4 pt-3 pb-2 flex-shrink-0 w-full flex justify-center"
        style={{
          transition: transitionStyle,
          opacity: isTransitioning ? 0 : 1,
        }}
      >
        <div className="w-full max-w-md">

          {!hasSpun && !isSpinning && !isLoadingAd && (
            <button onClick={spinWheel}
              className="w-full text-base sm:text-lg font-bold min-h-[54px] bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600
                         hover:from-amber-500 hover:via-amber-400 hover:to-amber-500
                         shadow-[0_4px_25px_rgba(212,175,55,0.5)] hover:shadow-[0_6px_35px_rgba(212,175,55,0.7)]
                         border-2 border-amber-400 hover:border-amber-300
                         text-slate-900 rounded-xl transition-all duration-300 active:scale-[0.98]">
              ✨ {t('oracle.wheel.spinButton') || 'Tourner la Roue'} ✨
            </button>
          )}

          {isSpinning && (
            <div className="w-full text-center py-3 min-h-[54px] flex items-center justify-center bg-slate-900/90 border-2 border-amber-500/50 rounded-xl">
              <p className="text-amber-500 font-bold text-base sm:text-lg animate-pulse">
                ✦ {t('oracle.wheel.spinning') || 'La roue tourne...'} ✦
              </p>
            </div>
          )}

          {hasSpun && (
            <button 
              onClick={() => { 
                setIsTransitioning(true);
                setHasSpun(false); 
                setInterpretation(null); 
                setResult(null); 
                if (onReset) onReset();
                setTimeout(() => setIsTransitioning(false), 50);
              }}
              className="w-full text-base sm:text-lg font-bold min-h-[54px] bg-gradient-to-r from-amber-600/90 via-amber-500/90 to-amber-600/90
                         hover:from-amber-600 hover:via-amber-500 hover:to-amber-600
                         border-2 border-amber-500/70 hover:border-amber-500/90
                         text-slate-900 shadow-[0_4px_25px_rgba(212,175,55,0.4)]
                         rounded-xl transition-all duration-300 active:scale-[0.98]">
              ↻ {t('oracle.wheel.newSpin') || 'Nouveau Tirage'}
            </button>
          )}

          {isLoadingAd && (
            <div className="w-full text-center py-2 min-h-[54px] flex flex-col items-center justify-center bg-slate-900/90 border-2 border-amber-500/50 rounded-xl">
              <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-amber-500"></div>
              <p className="text-amber-500 text-xs mt-1">{t('oracle.wheel.loadingAd') || 'Chargement...'}</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(1.03); }
        }
        @keyframes pulse-medium {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50%      { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-spin-slow    { animation: spin-slow 25s linear infinite; }
        .animate-pulse-slow   { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-pulse-medium { animation: pulse-medium 4s ease-in-out infinite; }

        * {
          -webkit-tap-highlight-color: transparent;
        }

        /* ✅ FIX ANDROID: Correction du texte flou sur les boutons */
        button {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          backface-visibility: hidden;
          transform: translateZ(0) scale(1, 1);
          image-rendering: -webkit-optimize-contrast;
        }

        /* Optimisation GPU uniquement pour la roue, pas les boutons */
        .wheel-container-full > div:first-child > div > div {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          -webkit-perspective: 1000;
          perspective: 1000;
        }
      `}</style>
    </div>
  );
}