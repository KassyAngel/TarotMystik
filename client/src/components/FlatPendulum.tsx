// client/src/components/FlatPendulum.tsx
// 🔮 Pendule CSS 3D - ZÉRO SACADE + Design optimisé

interface FlatPendulumProps {
  isSwinging?: boolean;
  isStarting?: boolean;
}

export default function FlatPendulum({ isSwinging = false, isStarting = false }: FlatPendulumProps) {

  // Animation du pendule - TRANSITION ULTRA FLUIDE (zéro sacade)
  const getAnimation = () => {
    if (isStarting) {
      // Phase de démarrage : 0deg → -25deg (point de départ exact du swing)
      return 'pendulum-smooth-start 2s ease-in-out forwards';
    }
    if (isSwinging) {
      // Phase complète : oscillation fluide -25deg ↔ +25deg
      return 'pendulum-swing-full 2s ease-in-out infinite';
    }
    // Repos : léger balancement
    return 'pendulum-swing-gentle 3s ease-in-out infinite';
  };

  // Les effets apparaissent progressivement dès le début du swinging
  const showEffects = isSwinging;

  return (
    <>
      <style>{`
        /* === ANIMATIONS PENDULE - ZÉRO SACADE === */
        @keyframes pendulum-smooth-start {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-25deg); } /* Termine au point de départ du swing */
        }

        @keyframes pendulum-swing-full {
          0%, 100% { transform: rotate(-25deg); }
          50% { transform: rotate(25deg); }
        }

        @keyframes pendulum-swing-gentle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }

        /* === ANIMATIONS CERCLE === */
        @keyframes circle-glow {
          0%, 100% { box-shadow: 0 0 40px rgba(168,85,247,0.4); }
          50% { box-shadow: 0 0 60px rgba(168,85,247,0.6); }
        }

        @keyframes symbol-pulse {
          0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) rotateX(-65deg) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) rotateX(-65deg) scale(1.1); }
        }

        /* === ANIMATIONS AURA === */
        @keyframes aura-pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        @keyframes aura-pulse-strong {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.15); }
        }

        @keyframes halo-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }

        @keyframes energy-ring-1 {
          0% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.1); opacity: 0.6; }
          100% { transform: scale(1); opacity: 0.4; }
        }

        @keyframes energy-ring-2 {
          0% { transform: scale(1); opacity: 0.35; }
          50% { transform: scale(1.15); opacity: 0.5; }
          100% { transform: scale(1); opacity: 0.35; }
        }

        @keyframes lightning-intense {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scaleY(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scaleY(1.2); }
        }

        /* === ANIMATIONS CRISTAL === */
        @keyframes core-pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes core-pulse-fast {
          0%, 100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
        }

        /* === ANIMATIONS PARTICULES === */
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        @keyframes sparkle-float {
          0%, 100% { opacity: 0.8; transform: translateY(0) scale(1); }
          50% { opacity: 1; transform: translateY(-10px) scale(1.2); }
        }

        @keyframes gentle-sparkle {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        /* === ANIMATION FADE-IN PROGRESSIVE === */
        @keyframes fade-in-smooth {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* === CLASSES === */
        .animate-circle-glow { animation: circle-glow 3s ease-in-out infinite; }
        .animate-symbol-pulse { animation: symbol-pulse 3s ease-in-out infinite; }
        .animate-aura-pulse { animation: aura-pulse 2s ease-in-out infinite; }
        .animate-aura-pulse-strong { animation: aura-pulse-strong 2s ease-in-out infinite; }
        .animate-halo-pulse { animation: halo-pulse 2s ease-in-out infinite; }
        .animate-core-pulse { animation: core-pulse 2s ease-in-out infinite; }
        .animate-core-pulse-fast { animation: core-pulse-fast 1s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 4s ease-in-out infinite; }
        .animate-energy-ring-1 { animation: energy-ring-1 3s ease-in-out infinite; }
        .animate-energy-ring-2 { animation: energy-ring-2 3s ease-in-out infinite 0.5s; }
        .animate-lightning-intense { animation: lightning-intense 2s ease-in-out infinite; }
        .animate-fade-in-smooth { animation: fade-in-smooth 1s ease-out; }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>

      <div className="relative w-80 h-96 flex items-center justify-center">

        {/* 🔮 CERCLE DIVINATOIRE AU SOL */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-80 h-40">
          <div className="relative w-full h-full" style={{
            transform: 'perspective(600px) rotateX(65deg)',
            transformStyle: 'preserve-3d'
          }}>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 
                            border-2 border-purple-400/50 rounded-full
                            shadow-[0_0_40px_rgba(168,85,247,0.4)]
                            animate-circle-glow">

              <div className="absolute inset-8 border border-cyan-400/40 rounded-full"></div>
              <div className="absolute inset-16 border-2 border-purple-500/50 rounded-full
                              shadow-[0_0_25px_rgba(168,85,247,0.5)]"></div>

              {[...Array(12)].map((_, i) => (
                <div
                  key={`line-${i}`}
                  className="absolute top-1/2 left-1/2 w-full h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, rgba(168,85,247,0.3) 20%, rgba(168,85,247,0.4) 50%, rgba(168,85,247,0.3) 80%, transparent 100%)`,
                    transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                    transformOrigin: 'center'
                  }}
                />
              ))}

              {[
                { symbol: '✦', angle: 0 },
                { symbol: '✧', angle: 90 },
                { symbol: '◆', angle: 180 },
                { symbol: '◈', angle: 270 }
              ].map((item, i) => (
                <div
                  key={`symbol-${i}`}
                  className="absolute text-purple-300 text-2xl font-bold animate-symbol-pulse"
                  style={{
                    left: `${50 + Math.cos((item.angle * Math.PI) / 180) * 44}%`,
                    top: `${50 + Math.sin((item.angle * Math.PI) / 180) * 44}%`,
                    transform: 'translate(-50%, -50%) rotateX(-65deg)',
                    textShadow: '0 0 15px rgba(168,85,247,0.9)',
                    animationDelay: `${i * 0.5}s`
                  }}
                >
                  {item.symbol}
                </div>
              ))}

              {[...Array(24)].map((_, i) => (
                <div
                  key={`dot-${i}`}
                  className="absolute w-1.5 h-1.5 bg-cyan-400/60 rounded-full"
                  style={{
                    left: `${50 + Math.cos((i * 15 * Math.PI) / 180) * 49}%`,
                    top: `${50 + Math.sin((i * 15 * Math.PI) / 180) * 49}%`,
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 0 8px rgba(34,211,238,0.8)'
                  }}
                />
              ))}
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72
                            bg-gradient-radial from-purple-500/15 via-violet-500/5 to-transparent
                            rounded-full blur-2xl animate-aura-pulse"></div>
          </div>
        </div>

        {/* Anneaux d'énergie - Apparition progressive */}
        {showEffects && (
          <div className="absolute inset-0 flex items-center justify-center animate-fade-in-smooth">
            <div className="w-72 h-72 border-2 border-purple-500/40 rounded-full animate-energy-ring-1 shadow-[0_0_30px_rgba(168,85,247,0.3)]"></div>
            <div className="absolute inset-12 border-2 border-cyan-400/35 rounded-full animate-energy-ring-2 shadow-[0_0_25px_rgba(34,211,238,0.25)]"></div>
          </div>
        )}

        {/* Particules repos */}
        {!isSwinging && (
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-purple-400/60 rounded-full animate-twinkle"
                style={{
                  left: `${50 + Math.cos(i * Math.PI / 6) * 40}%`,
                  top: `${50 + Math.sin(i * Math.PI / 6) * 40}%`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
          </div>
        )}

        {/* Éclairs d'énergie - Apparition progressive */}
        {showEffects && (
          <div className="animate-fade-in-smooth">
            {[...Array(6)].map((_, i) => (
              <div
                key={`lightning-${i}`}
                className="absolute left-1/2 top-1/2 w-1 h-32 bg-gradient-to-t from-purple-400/60 via-cyan-400/40 to-transparent blur-sm animate-lightning-intense"
                style={{
                  transform: `translate(-50%, -50%) rotate(${i * 60}deg)`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
          </div>
        )}

        {/* LE PENDULE */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50">

          {/* Point d'attache */}
          <div className="relative w-5 h-5 mx-auto">
            <div className="absolute inset-0 bg-slate-300 rounded-full shadow-[0_0_15px_rgba(148,163,184,0.9)]
                            border-2 border-slate-400"
                 style={{
                   background: 'radial-gradient(circle at 30% 30%, #f1f5f9, #cbd5e1)'
                 }}></div>
            <div className="absolute inset-1 bg-gradient-to-br from-white/70 to-transparent rounded-full"></div>
          </div>

          {/* BRAS OSCILLANT */}
          <div 
            className="relative origin-top"
            style={{ 
              animation: getAnimation(),
              transition: isStarting ? 'none' : 'all 0.3s ease-out'
            }}
          >

            {/* Chaîne */}
            <div className="relative w-1 h-48 mx-auto bg-gradient-to-b from-slate-300 via-slate-200 to-slate-300
                            shadow-[0_0_10px_rgba(203,213,225,0.7)] rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"></div>
            </div>

            {/* CRISTAL */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">

              {/* Aura - Plus intense pendant swinging */}
              <div className={`absolute inset-0 -m-10 bg-gradient-radial from-purple-500/50 via-violet-500/25 to-transparent 
                               rounded-full ${showEffects ? 'blur-3xl animate-aura-pulse-strong' : 'blur-2xl animate-aura-pulse'}`}>
              </div>

              <div className="absolute inset-0 -m-6 bg-gradient-radial from-purple-400/40 via-transparent to-transparent 
                               rounded-full blur-xl animate-halo-pulse"></div>

              {/* Rayons pendant swinging */}
              {showEffects && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 animate-fade-in-smooth">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute left-1/2 top-1/2 w-0.5 h-14 bg-gradient-to-t from-purple-400/70 to-transparent blur-sm"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                        transformOrigin: 'center',
                        animation: 'lightning-intense 2.5s ease-in-out infinite',
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Corps du cristal */}
              <div className="relative w-16 h-20" style={{
                filter: 'drop-shadow(0 10px 30px rgba(147, 51, 234, 0.6))'
              }}>
                <div className="absolute inset-0"
                     style={{
                       background: `linear-gradient(180deg,
                         transparent 0%,
                         rgba(216, 180, 254, 0.4) 5%,
                         rgba(168, 85, 247, 0.8) 20%,
                         rgba(147, 51, 234, 0.95) 50%,
                         rgba(126, 58, 237, 1) 80%,
                         rgba(107, 33, 168, 1) 95%,
                         transparent 100%)`,
                       clipPath: 'polygon(50% 0%, 100% 35%, 80% 70%, 50% 100%, 20% 70%, 0% 35%)',
                       boxShadow: `0 0 40px rgba(168, 85, 247, 0.8),
                         inset 0 2px 30px rgba(255, 255, 255, 0.3),
                         inset 0 -15px 25px rgba(107, 33, 168, 0.6)`
                     }}>

                  {/* Reflets */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-6 h-8 bg-white/70 blur-sm transform -rotate-12"
                       style={{
                         clipPath: 'polygon(50% 0%, 100% 40%, 50% 100%, 0% 40%)',
                         background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, transparent 100%)'
                       }}></div>

                  <div className="absolute top-1/3 left-2 w-3 h-8 bg-white/40 blur-sm transform rotate-20"></div>
                  <div className="absolute top-1/3 right-2 w-3 h-8 bg-white/30 blur-sm transform -rotate-20"></div>

                  <div className="absolute inset-3 bg-gradient-radial from-purple-200/50 via-transparent to-transparent
                                 rounded-full blur-lg animate-core-pulse"></div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                 w-3 h-3 bg-white rounded-full blur-sm animate-core-pulse-fast"
                       style={{
                         boxShadow: '0 0 20px rgba(255, 255, 255, 0.9), 0 0 40px rgba(168, 85, 247, 0.6)'
                       }}></div>
                </div>

                <div className="absolute inset-0 border border-purple-200/30"
                     style={{
                       clipPath: 'polygon(50% 0%, 100% 35%, 80% 70%, 50% 100%, 20% 70%, 0% 35%)',
                       boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.4)'
                     }}></div>

                <div className="absolute inset-0" style={{
                  clipPath: 'polygon(50% 0%, 100% 35%, 80% 70%, 50% 100%, 20% 70%, 0% 35%)'
                }}>
                  <div className="absolute top-0 left-1/2 w-px h-1/2 bg-white/20 transform -translate-x-1/2"></div>
                  <div className="absolute top-1/3 left-0 w-1/2 h-px bg-white/15"></div>
                  <div className="absolute top-1/3 right-0 w-1/2 h-px bg-white/15"></div>
                </div>

                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0"
                     style={{
                       borderLeft: '4px solid transparent',
                       borderRight: '4px solid transparent',
                       borderTop: '8px solid #7c3aed',
                       filter: 'drop-shadow(0 2px 4px rgba(107, 33, 168, 0.8))'
                     }}></div>
              </div>

              {/* Particules scintillantes */}
              {showEffects && (
                <div className="absolute inset-0 -m-12 animate-fade-in-smooth">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2"
                      style={{
                        left: `${50 + Math.cos(i * Math.PI / 4) * 45}%`,
                        top: `${50 + Math.sin(i * Math.PI / 4) * 45}%`,
                        animation: 'sparkle-float 2s ease-in-out infinite',
                        animationDelay: `${i * 0.25}s`
                      }}
                    >
                      <div className="w-full h-full bg-purple-300 rounded-full blur-sm"
                           style={{
                             boxShadow: '0 0 10px rgba(216, 180, 254, 1), 0 0 20px rgba(168, 85, 247, 0.8)'
                           }}></div>
                    </div>
                  ))}
                </div>
              )}

              {/* Étincelles repos */}
              {!isSwinging && (
                <div className="absolute inset-0 -m-10">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        left: `${50 + Math.cos(i * Math.PI / 3) * 40}%`,
                        top: `${50 + Math.sin(i * Math.PI / 3) * 40}%`,
                        animation: 'gentle-sparkle 3s ease-in-out infinite',
                        animationDelay: `${i * 0.5}s`
                      }}
                    >
                      <div className="relative w-3 h-3">
                        <div className="absolute inset-0 bg-purple-300/60 rounded-full blur-sm"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-3 bg-white/80 blur-sm"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-1 bg-white/80 blur-sm"></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Message mystique */}
        {showEffects && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full px-8 animate-fade-in-smooth">
            <div className="bg-gradient-to-r from-transparent via-purple-900/50 to-transparent 
                            rounded-lg px-6 py-2 border border-purple-500/40
                            shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              <div className="flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}