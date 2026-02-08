// client/src/components/WizardAnimation.tsx
// VERSION FINALE - Pas de texte loader

import { useEffect, useState, useRef } from 'react';

interface WizardAnimationProps {
  isChanneling?: boolean;
}

export default function WizardAnimation({ isChanneling = false }: WizardAnimationProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Chemins des médias
  const wizardImage = '/Image/wizard.jpg';
  const wizardVideo = '/Image/wizard-video.mp4';

  // Préchargement de l'image au montage
  useEffect(() => {
    const img = new Image();
    img.src = wizardImage;
    img.onload = () => {
      console.log('✅ Image wizard préchargée');
      setImageLoaded(true);
    };
    img.onerror = () => {
      console.error('❌ Erreur chargement image wizard');
    };
  }, []);

  // Contrôle de la vidéo
  useEffect(() => {
    if (!videoRef.current) return;

    if (isChanneling) {
      console.log('🎬 Démarrage vidéo channeling');

      // Reset des états
      setVideoReady(false);
      setVideoLoaded(false);

      videoRef.current.currentTime = 0;
      videoRef.current.volume = 1;

      // Attendre que la vidéo soit prête avant de lire
      const handleCanPlay = () => {
        console.log('✅ Vidéo prête à jouer');
        setVideoReady(true);
        setVideoLoaded(true);
      };

      videoRef.current.addEventListener('canplay', handleCanPlay);

      // Charger et jouer
      videoRef.current.load();
      videoRef.current.play()
        .then(() => console.log('▶️ Vidéo en lecture'))
        .catch(err => console.error('❌ Erreur lecture vidéo:', err));

      return () => {
        videoRef.current?.removeEventListener('canplay', handleCanPlay);
      };
    } else {
      // Arrêter et cacher la vidéo
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        videoRef.current.volume = 0;
        setVideoReady(false);
        setVideoLoaded(false);
      }
    }
  }, [isChanneling]);

  // Déterminer quel média afficher
  const showImage = !isChanneling && imageLoaded;
  const showVideo = isChanneling && videoReady;

  return (
    <>
      <style>{`
        @keyframes gentle-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes soft-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.85; }
        }
        @keyframes subtle-glow {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.08); }
        }
        @keyframes intense-glow {
          0%, 100% { filter: brightness(1.1); }
          50% { filter: brightness(1.22); }
        }
        @keyframes aura-soft {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.45; }
        }
        @keyframes aura-intense {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.12); opacity: 0.7; }
        }
        @keyframes energy-ring {
          0% { transform: scale(0.9) rotate(0deg); opacity: 0; }
          25% { opacity: 0.5; }
          100% { transform: scale(1.6) rotate(90deg); opacity: 0; }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes delayed-appear {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .animate-gentle-float { animation: gentle-float 5s ease-in-out infinite; }
        .animate-soft-pulse { animation: soft-pulse 4s ease-in-out infinite; }
        .animate-subtle-glow { animation: subtle-glow 4s ease-in-out infinite; }
        .animate-intense-glow { animation: intense-glow 2.5s ease-in-out infinite; }
        .animate-aura-soft { animation: aura-soft 4s ease-in-out infinite; }
        .animate-aura-intense { animation: aura-intense 3s ease-in-out infinite; }
        .animate-energy-ring { animation: energy-ring 3s ease-out infinite; }
        .animate-sparkle { animation: sparkle 2s ease-in-out infinite; }
        .animate-delayed { animation: delayed-appear 0.6s ease-out 0.4s forwards; opacity: 0; }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        .animate-shimmer { animation: shimmer 2s ease-in-out infinite; }
      `}</style>

      <div className="relative w-full max-w-[320px] mx-auto h-[420px] flex items-center justify-center">

        {/* CONTAINER PRINCIPAL */}
        <div className="relative z-20 animate-gentle-float">

          {/* AURAS - Simplifiées */}
          {(showImage || showVideo) && (
            <div className="absolute inset-0 -z-10 animate-delayed">
              {showVideo ? (
                <>
                  <div className="absolute -inset-20 bg-gradient-radial 
                    from-indigo-500/40 via-purple-500/25 to-transparent 
                    blur-[50px] animate-aura-intense"></div>
                  <div className="absolute -inset-16 bg-gradient-radial 
                    from-purple-500/35 via-indigo-500/20 to-transparent 
                    blur-[40px] animate-aura-intense" 
                    style={{animationDelay: '1s'}}></div>
                </>
              ) : (
                <>
                  <div className="absolute -inset-16 bg-gradient-radial 
                    from-indigo-500/30 via-purple-500/15 to-transparent 
                    blur-[45px] animate-aura-soft"></div>
                  <div className="absolute -inset-12 bg-gradient-radial 
                    from-purple-500/25 via-indigo-500/12 to-transparent 
                    blur-[35px] animate-aura-soft" 
                    style={{animationDelay: '2s'}}></div>
                </>
              )}
            </div>
          )}

          {/* CONTENU IMAGE/VIDÉO */}
          <div className="relative z-30">
            <div className="relative w-[280px] h-[380px] sm:w-[300px] sm:h-[400px]">

              {/* LOADER SILENCIEUX - juste un effet visuel */}
              {!showImage && !showVideo && (
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  {/* Fond dégradé animé */}
                  <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-purple-950/15 to-indigo-950/20 animate-shimmer"></div>

                  {/* Particules lumineuses */}
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-indigo-400/40 animate-soft-pulse"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`,
                        animationDelay: `${i * 0.3}s`
                      }}
                    />
                  ))}
                </div>
              )}

              {/* IMAGE STATIQUE - Seulement quand PAS en channeling */}
              {!isChanneling && (
                <img 
                  ref={imageRef}
                  src={wizardImage}
                  alt="Azraël le Voyant"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => console.error('❌ Erreur chargement image')}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 animate-subtle-glow ${
                    imageLoaded ? 'opacity-100 animate-fade-in' : 'opacity-0'
                  }`}
                  style={{
                    borderRadius: '12px',
                    boxShadow: '0 0 40px rgba(129, 140, 248, 0.3)'
                  }}
                />
              )}

              {/* VIDÉO CHANNELING - Seulement quand EN channeling */}
              {isChanneling && (
                <video
                  ref={videoRef}
                  src={wizardVideo}
                  loop={false}
                  playsInline
                  preload="auto"
                  muted={false}
                  onCanPlay={() => {
                    console.log('✅ Vidéo prête');
                    setVideoReady(true);
                    setVideoLoaded(true);
                  }}
                  onLoadedData={() => {
                    console.log('📹 Données vidéo chargées');
                  }}
                  onEnded={() => {
                    console.log('🎬 Vidéo terminée');
                    if (videoRef.current) {
                      videoRef.current.currentTime = 0;
                    }
                  }}
                  onError={(e) => {
                    console.error('❌ Erreur vidéo:', e);
                  }}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 animate-intense-glow ${
                    videoReady ? 'opacity-100 animate-fade-in' : 'opacity-0'
                  }`}
                  style={{
                    borderRadius: '12px',
                    boxShadow: '0 0 50px rgba(129, 140, 248, 0.5)'
                  }}
                />
              )}

              {/* Overlay dégradé */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 85% 90% at 50% 45%, transparent 0%, transparent 65%, rgba(10,13,26,0.2) 78%, rgba(10,13,26,0.6) 88%, rgba(10,13,26,0.9) 95%, #0a0d1a 100%)',
                  borderRadius: '12px'
                }}
              ></div>
            </div>

            {/* FUMÉE SIMPLIFIÉE */}
            {(showImage || showVideo) && (
              <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none overflow-hidden -z-10 animate-delayed">
                {[0, 1, 2].map((i) => (
                  <div
                    key={`smoke-${i}`}
                    className="absolute animate-soft-pulse"
                    style={{
                      left: `${i * 35 + 10}%`,
                      bottom: '-10px',
                      width: '70px',
                      height: '70px',
                      background: showVideo
                        ? 'radial-gradient(circle, rgba(160,175,210,0.25) 0%, rgba(129,140,248,0.15) 40%, transparent 70%)'
                        : 'radial-gradient(circle, rgba(160,175,210,0.18) 0%, rgba(129,140,248,0.1) 40%, transparent 70%)',
                      borderRadius: '50%',
                      filter: 'blur(20px)',
                      animationDelay: `${i * 1.5}s`
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* EFFETS CHANNELING - Seulement si vidéo visible */}
          {showVideo && (
            <div className="absolute inset-0 z-40 animate-delayed">
              {/* Anneaux d'énergie */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-48 h-48 border-2 border-indigo-400/40 rounded-full animate-energy-ring"></div>
                <div className="absolute w-48 h-48 border border-purple-400/30 rounded-full animate-energy-ring" 
                     style={{animationDelay: '1.5s'}}></div>
              </div>

              {/* Particules magiques */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => {
                  const angle = (i * Math.PI * 2) / 6;
                  const radius = 50;
                  return (
                    <div
                      key={`particle-${i}`}
                      className="absolute w-1.5 h-1.5 rounded-full animate-sparkle"
                      style={{
                        left: `${50 + Math.cos(angle) * radius}%`,
                        top: `${50 + Math.sin(angle) * radius}%`,
                        background: i % 2 === 0 
                          ? 'radial-gradient(circle, rgba(129,140,248,0.9), transparent)' 
                          : 'radial-gradient(circle, rgba(139,92,246,0.9), transparent)',
                        animationDelay: `${i * 0.3}s`,
                        boxShadow: '0 0 8px currentColor'
                      }}
                    />
                  );
                })}
              </div>

              {/* Étoiles */}
              {[...Array(4)].map((_, i) => {
                const angle = (i * Math.PI * 2) / 4;
                const radius = 60;
                return (
                  <div
                    key={`star-${i}`}
                    className="absolute text-yellow-200 text-lg animate-sparkle"
                    style={{
                      left: `${50 + Math.cos(angle) * radius}%`,
                      top: `${50 + Math.sin(angle) * radius}%`,
                      transform: 'translate(-50%, -50%)',
                      animationDelay: `${i * 0.4}s`,
                      textShadow: '0 0 15px rgba(251,191,36,0.8)'
                    }}
                  >
                    ✨
                  </div>
                );
              })}

              {/* Orbe mystique */}
              <div className="absolute bottom-[35%] left-1/2 -translate-x-1/2 w-14 h-14">
                <div className="w-full h-full rounded-full animate-soft-pulse"
                     style={{
                       background: 'radial-gradient(circle, rgba(129,140,248,0.6) 0%, rgba(139,92,246,0.3) 60%, transparent 100%)',
                       boxShadow: '0 0 20px rgba(129,140,248,0.5)'
                     }}></div>
              </div>
            </div>
          )}
        </div>

        {/* BRUME D'AMBIANCE */}
        {(showImage || showVideo) && (
          <div className="absolute inset-0 pointer-events-none z-10 animate-delayed">
            <div className={`absolute bottom-0 left-0 right-0 h-40 blur-2xl ${
              showVideo
                ? 'bg-gradient-to-t from-indigo-950/25 via-purple-950/15 to-transparent' 
                : 'bg-gradient-to-t from-indigo-950/18 via-purple-950/10 to-transparent'
            }`}></div>
          </div>
        )}
      </div>
    </>
  );
}