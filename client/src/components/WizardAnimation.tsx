import { useEffect, useState, useRef } from 'react';

interface WizardAnimationProps {
  isChanneling?: boolean;
}

export default function WizardAnimation({ isChanneling = false }: WizardAnimationProps) {
  const [smokeParticles, setSmokeParticles] = useState<Array<{
    id: number;
    x: number;
    delay: number;
    duration: number;
    size: number;
  }>>([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Génération des particules de fumée
    const particles = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 7 + Math.random() * 5,
      size: 70 + Math.random() * 90
    }));
    setSmokeParticles(particles);
  }, []);

  // Contrôle de la vidéo quand isChanneling change
  useEffect(() => {
    if (videoRef.current) {
      if (isChanneling) {
        // Démarrer la vidéo
        videoRef.current.currentTime = 0;
        videoRef.current.volume = 1;
        videoRef.current.play().catch(err => console.error('Erreur lecture vidéo:', err));
      } else {
        // Arrêter la vidéo et remettre à zéro
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        videoRef.current.volume = 0;
      }
    }
  }, [isChanneling]);

  // Image pour la page d'accueil
  const wizardImage = '/Image/wizard.jpg';
  // Vidéo pour le channeling
  const wizardVideo = '/Image/wizard-video.mp4';

  return (
    <>
      <style>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fade-in-image {
          0% { opacity: 0; transform: scale(0.98); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes smoke-rise {
          0% { 
            transform: translateY(0) translateX(0) scale(0.7); 
            opacity: 0; 
          }
          20% { 
            opacity: 0.4; 
          }
          60% { 
            opacity: 0.25; 
          }
          100% { 
            transform: translateY(-200px) translateX(var(--drift)) scale(2); 
            opacity: 0; 
          }
        }
        @keyframes smoke-drift {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(var(--drift-amount, 25px)); }
        }
        @keyframes subtle-glow {
          0%, 100% { 
            filter: brightness(1.05) contrast(1.02) saturate(1.05); 
          }
          50% { 
            filter: brightness(1.1) contrast(1.05) saturate(1.08); 
          }
        }
        @keyframes intense-channel {
          0%, 100% { 
            filter: brightness(1.15) contrast(1.08) saturate(1.12); 
          }
          50% { 
            filter: brightness(1.25) contrast(1.12) saturate(1.18); 
          }
        }
        @keyframes aura-pulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.35; 
          }
          50% { 
            transform: scale(1.08); 
            opacity: 0.5; 
          }
        }
        @keyframes aura-intense {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.5; 
          }
          33% { 
            transform: scale(1.12); 
            opacity: 0.7; 
          }
          66% { 
            transform: scale(1.06); 
            opacity: 0.6; 
          }
        }
        @keyframes energy-ring {
          0% { 
            transform: scale(0.85) rotate(0deg); 
            opacity: 0; 
          }
          25% { 
            opacity: 0.5; 
          }
          100% { 
            transform: scale(1.7) rotate(90deg); 
            opacity: 0; 
          }
        }
        @keyframes energy-wave {
          0% { 
            transform: scale(0.9); 
            opacity: 0; 
          }
          40% { 
            opacity: 0.4; 
          }
          100% { 
            transform: scale(1.9); 
            opacity: 0; 
          }
        }
        @keyframes sparkle-rotate {
          0%, 100% { 
            opacity: 0.5; 
            transform: scale(1) rotate(0deg); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.3) rotate(180deg); 
          }
        }
        @keyframes orb-pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: scale(1.15);
            opacity: 0.85;
          }
        }
        @keyframes lightning-flash {
          0%, 90%, 100% { opacity: 0; }
          92%, 96% { opacity: 0.6; }
          94% { opacity: 0; }
        }
        @keyframes delayed-fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes corner-glow-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .animate-float-gentle { animation: float-gentle 6s ease-in-out infinite; }
        .animate-fade-in-image { animation: fade-in-image 1.2s ease-out forwards; }
        .animate-subtle-glow { animation: subtle-glow 5s ease-in-out infinite; }
        .animate-intense-channel { animation: intense-channel 3s ease-in-out infinite; }
        .animate-aura-pulse { animation: aura-pulse 5s ease-in-out infinite; }
        .animate-aura-intense { animation: aura-intense 3.5s ease-in-out infinite; }
        .animate-energy-ring { animation: energy-ring 3s ease-out infinite; }
        .animate-energy-wave { animation: energy-wave 3.5s ease-out infinite; }
        .animate-sparkle-rotate { animation: sparkle-rotate 2.5s ease-in-out infinite; }
        .animate-orb-pulse { animation: orb-pulse 2.5s ease-in-out infinite; }
        .animate-lightning-flash { animation: lightning-flash 5s ease-in-out infinite; }
        .animate-delayed-fade { animation: delayed-fade-in 0.8s ease-out 0.6s forwards; opacity: 0; }
        .animate-corner-glow { animation: corner-glow-pulse 3s ease-in-out infinite; }
      `}</style>

      <div className="relative w-full max-w-[350px] mx-auto h-[480px] flex items-center justify-center pointer-events-none">

        {/* CONTAINER PRINCIPAL */}
        <div className="relative z-20 animate-float-gentle">

          {/* AURAS - En arrière-plan - Attendent que l'image OU la vidéo soit prête */}
          {((imageLoaded && !isChanneling) || (videoLoaded && isChanneling)) && (
            <div className="absolute inset-0 -z-10 animate-delayed-fade">
              {isChanneling ? (
                <>
                  <div className="absolute -inset-24 bg-gradient-radial 
                    from-indigo-500/35 via-purple-500/20 to-transparent 
                    blur-[60px] animate-aura-intense"></div>

                  <div className="absolute -inset-16 bg-gradient-radial 
                    from-purple-500/40 via-indigo-500/25 to-transparent 
                    blur-[45px] animate-aura-intense" 
                    style={{animationDelay: '1.2s'}}></div>

                  <div className="absolute -inset-12 bg-gradient-radial 
                    from-cyan-400/45 via-indigo-400/30 to-transparent 
                    blur-[30px] animate-aura-intense" 
                    style={{animationDelay: '1.8s'}}></div>
                </>
              ) : (
                <>
                  <div className="absolute -inset-20 bg-gradient-radial 
                    from-indigo-500/25 via-purple-500/12 to-transparent 
                    blur-[55px] animate-aura-pulse"></div>

                  <div className="absolute -inset-14 bg-gradient-radial 
                    from-purple-500/30 via-indigo-500/18 to-transparent 
                    blur-[38px] animate-aura-pulse" 
                    style={{animationDelay: '2s'}}></div>

                  <div className="absolute -inset-10 bg-gradient-radial 
                    from-cyan-400/35 via-indigo-400/22 to-transparent 
                    blur-[28px] animate-aura-pulse" 
                    style={{animationDelay: '3s'}}></div>
                </>
              )}
            </div>
          )}

          {/* IMAGE/VIDÉO PRINCIPALE */}
          <div className="relative z-30">
            <div className="relative w-[300px] h-[420px] sm:w-[320px] sm:h-[440px] overflow-visible">
              {!imageLoaded && !videoLoaded && (
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 to-transparent rounded-lg animate-pulse"></div>
              )}

              {/* MASQUAGE DES COINS - Visible seulement sur la page d'accueil */}
              {!isChanneling && imageLoaded && (
                <>
                  {/* Coin supérieur gauche */}
                  <div className="absolute -top-1 -left-1 w-24 h-24 pointer-events-none z-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a0d1a] via-[#0a0d1a]/80 to-transparent rounded-tl-3xl"></div>
                    <div className="absolute top-2 left-2 w-16 h-16 animate-corner-glow"
                         style={{
                           background: 'radial-gradient(circle at 0% 0%, rgba(129, 140, 248, 0.4), transparent 60%)',
                           filter: 'blur(8px)'
                         }}></div>
                  </div>

                  {/* Coin supérieur droit */}
                  <div className="absolute -top-1 -right-1 w-24 h-24 pointer-events-none z-20">
                    <div className="absolute inset-0 bg-gradient-to-bl from-[#0a0d1a] via-[#0a0d1a]/80 to-transparent rounded-tr-3xl"></div>
                    <div className="absolute top-2 right-2 w-16 h-16 animate-corner-glow"
                         style={{
                           background: 'radial-gradient(circle at 100% 0%, rgba(139, 92, 246, 0.4), transparent 60%)',
                           filter: 'blur(8px)',
                           animationDelay: '0.5s'
                         }}></div>
                  </div>

                  {/* Coin inférieur gauche */}
                  <div className="absolute -bottom-1 -left-1 w-24 h-24 pointer-events-none z-20">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0d1a] via-[#0a0d1a]/80 to-transparent rounded-bl-3xl"></div>
                    <div className="absolute bottom-2 left-2 w-16 h-16 animate-corner-glow"
                         style={{
                           background: 'radial-gradient(circle at 0% 100%, rgba(251, 191, 36, 0.3), transparent 60%)',
                           filter: 'blur(8px)',
                           animationDelay: '1s'
                         }}></div>
                  </div>

                  {/* Coin inférieur droit */}
                  <div className="absolute -bottom-1 -right-1 w-24 h-24 pointer-events-none z-20">
                    <div className="absolute inset-0 bg-gradient-to-tl from-[#0a0d1a] via-[#0a0d1a]/80 to-transparent rounded-br-3xl"></div>
                    <div className="absolute bottom-2 right-2 w-16 h-16 animate-corner-glow"
                         style={{
                           background: 'radial-gradient(circle at 100% 100%, rgba(129, 140, 248, 0.4), transparent 60%)',
                           filter: 'blur(8px)',
                           animationDelay: '1.5s'
                         }}></div>
                  </div>

                  {/* Particules lumineuses dans les coins */}
                  <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-indigo-300 animate-sparkle-rotate"
                       style={{boxShadow: '0 0 10px rgba(129, 140, 248, 0.8)'}}></div>
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-purple-300 animate-sparkle-rotate"
                       style={{boxShadow: '0 0 10px rgba(139, 92, 246, 0.8)', animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-20 left-4 w-2 h-2 rounded-full bg-yellow-300 animate-sparkle-rotate"
                       style={{boxShadow: '0 0 10px rgba(251, 191, 36, 0.8)', animationDelay: '1s'}}></div>
                  <div className="absolute bottom-20 right-4 w-2 h-2 rounded-full bg-cyan-300 animate-sparkle-rotate"
                       style={{boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)', animationDelay: '1.5s'}}></div>
                </>
              )}

              {/* IMAGE STATIQUE - Page d'accueil */}
              <img 
                src={wizardImage}
                alt="Azraël le Voyant"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover object-center transition-all duration-1000 relative z-10 ${
                  isChanneling ? 'opacity-0' : 'animate-subtle-glow'
                } ${imageLoaded && !isChanneling ? 'animate-fade-in-image' : 'opacity-0'}`}
                style={{
                  maskImage: 'radial-gradient(ellipse 92% 95% at 50% 42%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.95) 70%, rgba(0,0,0,0.75) 82%, rgba(0,0,0,0.35) 92%, rgba(0,0,0,0.08) 97%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 92% 95% at 50% 42%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.95) 70%, rgba(0,0,0,0.75) 82%, rgba(0,0,0,0.35) 92%, rgba(0,0,0,0.08) 97%, transparent 100%)',
                }}
              />

              {/* VIDÉO ANIMÉE - Pendant le channeling */}
              {isChanneling && (
                <video
                  ref={videoRef}
                  src={wizardVideo}
                  loop={false}
                  playsInline
                  preload="auto"
                  onCanPlay={() => {
                    console.log('✅ Vidéo prête à jouer avec son');
                    setVideoLoaded(true);
                  }}
                  onEnded={() => {
                    console.log('🎬 Vidéo terminée');
                    if (videoRef.current) {
                      videoRef.current.currentTime = 0;
                    }
                  }}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 z-10 animate-intense-channel ${
                    videoLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    maskImage: 'radial-gradient(ellipse 92% 95% at 50% 42%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.95) 70%, rgba(0,0,0,0.75) 82%, rgba(0,0,0,0.35) 92%, rgba(0,0,0,0.08) 97%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 92% 95% at 50% 42%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.95) 70%, rgba(0,0,0,0.75) 82%, rgba(0,0,0,0.35) 92%, rgba(0,0,0,0.08) 97%, transparent 100%)',
                  }}
                />
              )}

              {/* Overlay de fusion ultra-progressif */}
              <div className="absolute inset-0 pointer-events-none"
                   style={{
                     background: 'radial-gradient(ellipse 92% 95% at 50% 42%, transparent 0%, transparent 62%, rgba(10,13,26,0.08) 75%, rgba(10,13,26,0.28) 84%, rgba(10,13,26,0.6) 91%, rgba(10,13,26,0.88) 96%, #0a0d1a 100%)'
                   }}></div>
            </div>

            {/* FUMÉE - Derrière l'image/vidéo */}
            {((imageLoaded && !isChanneling) || (videoLoaded && isChanneling)) && (
              <div className="absolute bottom-0 left-0 right-0 h-full pointer-events-none overflow-hidden -z-10 animate-delayed-fade">
                {smokeParticles.map((particle) => (
                  <div
                    key={particle.id}
                    className="absolute"
                    style={{
                      left: `${particle.x}%`,
                      bottom: '-25px',
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                      background: isChanneling 
                        ? 'radial-gradient(circle, rgba(160,175,210,0.28) 0%, rgba(129,140,248,0.18) 35%, transparent 70%)'
                        : 'radial-gradient(circle, rgba(160,175,210,0.2) 0%, rgba(129,140,248,0.12) 35%, transparent 70%)',
                      borderRadius: '50%',
                      filter: 'blur(22px)',
                      animation: `smoke-rise ${particle.duration}s ease-in-out infinite`,
                      animationDelay: `${particle.delay + 0.6}s`,
                      '--drift': `${(Math.random() - 0.5) * 70}px`
                    } as React.CSSProperties}
                  />
                ))}

                {[0, 1, 2].map((i) => (
                  <div
                    key={`side-smoke-${i}`}
                    className="absolute"
                    style={{
                      left: `${i * 30 + 15}%`,
                      bottom: '35%',
                      width: '110px',
                      height: '110px',
                      background: isChanneling
                        ? 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(129,140,248,0.13) 40%, transparent 70%)'
                        : 'radial-gradient(circle, rgba(139,92,246,0.13) 0%, rgba(129,140,248,0.08) 40%, transparent 70%)',
                      borderRadius: '50%',
                      filter: 'blur(28px)',
                      animation: `smoke-rise ${11 + i * 2}s ease-in-out infinite`,
                      animationDelay: `${i * 2 + 0.9}s`,
                      '--drift': `${(i % 2 === 0 ? 1 : -1) * 45}px`
                    } as React.CSSProperties}
                  />
                ))}

                <div className="absolute bottom-0 left-0 right-0 h-28">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={`ground-mist-${i}`}
                      className="absolute"
                      style={{
                        left: `${i * 25}%`,
                        bottom: '0',
                        width: '130px',
                        height: '75px',
                        background: isChanneling
                          ? 'radial-gradient(ellipse, rgba(129,140,248,0.25) 0%, rgba(100,116,230,0.15) 50%, transparent 80%)'
                          : 'radial-gradient(ellipse, rgba(129,140,248,0.18) 0%, rgba(100,116,230,0.1) 50%, transparent 80%)',
                        borderRadius: '50%',
                        filter: 'blur(32px)',
                        animation: `smoke-drift ${9 + i * 1.5}s ease-in-out infinite`,
                        animationDelay: `${i * 1.5 + 0.7}s`,
                        '--drift-amount': `${(i % 2 === 0 ? 1 : -1) * 28}px`
                      } as React.CSSProperties}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* EFFETS ÉNERGÉTIQUES AU PREMIER PLAN - Channeling */}
          {isChanneling && videoLoaded && (
            <div className="absolute inset-0 z-40 animate-delayed-fade">
              {/* Anneaux d'énergie */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-56 h-56 border-2 border-indigo-400/50 rounded-full animate-energy-ring"></div>
                <div className="absolute w-56 h-56 border-2 border-purple-400/40 rounded-full animate-energy-ring" 
                     style={{animationDelay: '1s'}}></div>
                <div className="absolute w-56 h-56 border border-cyan-400/35 rounded-full animate-energy-ring" 
                     style={{animationDelay: '2s'}}></div>
              </div>

              {/* Vagues d'énergie */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-64 h-64 bg-gradient-radial from-indigo-500/20 to-transparent rounded-full animate-energy-wave"></div>
                <div className="absolute w-64 h-64 bg-gradient-radial from-purple-500/15 to-transparent rounded-full animate-energy-wave" 
                     style={{animationDelay: '1.75s'}}></div>
              </div>

              {/* Éclairs */}
              <div className="absolute inset-0">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={`lightning-${i}`}
                    className="absolute top-1/2 left-1/2 w-0.5 origin-left animate-lightning-flash"
                    style={{
                      height: '100px',
                      background: 'linear-gradient(to top, rgba(255,255,255,0.7), rgba(129,140,248,0.3), transparent)',
                      transform: `translate(-50%, -50%) rotate(${i * 90}deg)`,
                      filter: 'blur(1.5px)',
                      animationDelay: `${i * 0.7}s`
                    }}
                  />
                ))}
              </div>

              {/* PARTICULES MAGIQUES */}
              <div className="absolute inset-0 -m-20">
                {[...Array(10)].map((_, i) => {
                  const angle = (i * Math.PI * 2) / 10;
                  const radius = 60;
                  return (
                    <div
                      key={i}
                      className="absolute w-2 h-2 rounded-full animate-sparkle-rotate"
                      style={{
                        left: `${50 + Math.cos(angle) * radius}%`,
                        top: `${50 + Math.sin(angle) * radius}%`,
                        background: i % 3 === 0 
                          ? 'radial-gradient(circle, rgba(129,140,248,0.9), rgba(129,140,248,0.2))' 
                          : i % 3 === 1 
                          ? 'radial-gradient(circle, rgba(139,92,246,0.9), rgba(139,92,246,0.2))'
                          : 'radial-gradient(circle, rgba(251,191,36,0.9), rgba(251,191,36,0.2))',
                        animationDelay: `${i * 0.25}s`,
                        boxShadow: '0 0 10px currentColor'
                      }}
                    />
                  );
                })}
              </div>

              {/* ÉTOILES */}
              {[...Array(5)].map((_, i) => {
                const angle = (i * Math.PI * 2) / 5;
                const radius = 70;
                return (
                  <div
                    key={`star-${i}`}
                    className="absolute text-yellow-200 text-xl animate-sparkle-rotate"
                    style={{
                      left: `${50 + Math.cos(angle) * radius}%`,
                      top: `${50 + Math.sin(angle) * radius}%`,
                      transform: 'translate(-50%, -50%)',
                      animationDelay: `${i * 0.5}s`,
                      textShadow: '0 0 20px rgba(251,191,36,0.9)',
                      filter: 'drop-shadow(0 0 10px rgba(251,191,36,0.8))'
                    }}
                  >
                    ✨
                  </div>
                );
              })}

              {/* ORBE MYSTIQUE - Position remontée à 35% */}
              <div className="absolute bottom-[35%] left-1/2 -translate-x-1/2 w-16 h-16">
                <div className="w-full h-full rounded-full animate-orb-pulse"
                     style={{
                       background: 'radial-gradient(circle, rgba(129,140,248,0.7) 0%, rgba(139,92,246,0.4) 50%, transparent 100%)',
                       boxShadow: '0 0 25px rgba(129,140,248,0.6), 0 0 45px rgba(139,92,246,0.4)'
                     }}></div>
              </div>
            </div>
          )}
        </div>

        {/* BRUME D'AMBIANCE */}
        {((imageLoaded && !isChanneling) || (videoLoaded && isChanneling)) && (
          <div className="absolute inset-0 pointer-events-none z-10 animate-delayed-fade">
            <div className={`absolute bottom-0 left-0 right-0 h-56 blur-2xl ${
              isChanneling 
                ? 'bg-gradient-to-t from-indigo-950/30 via-purple-950/18 to-transparent' 
                : 'bg-gradient-to-t from-indigo-950/22 via-purple-950/12 to-transparent'
            }`}></div>

            {[0, 1].map((i) => (
              <div
                key={`ambient-mist-${i}`}
                className="absolute"
                style={{
                  left: `${i * 45}%`,
                  bottom: `${i * 12}%`,
                  width: '180px',
                  height: '85px',
                  background: isChanneling
                    ? 'radial-gradient(ellipse, rgba(129,140,248,0.12) 0%, transparent 70%)'
                    : 'radial-gradient(ellipse, rgba(129,140,248,0.08) 0%, transparent 70%)',
                  borderRadius: '50%',
                  filter: 'blur(35px)',
                  animation: `smoke-drift ${14 + i * 3}s ease-in-out infinite`,
                  animationDelay: `${i * 2.5 + 1}s`,
                  '--drift-amount': `${(i % 2 === 0 ? 1 : -1) * 32}px`
                } as React.CSSProperties}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}