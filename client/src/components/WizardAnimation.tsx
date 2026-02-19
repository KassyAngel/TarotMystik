// client/src/components/WizardAnimation.tsx
// VERSION CORRIGÉE — box-shadow border uniquement, image 100% visible

import { useEffect, useState, useRef } from 'react';

interface WizardAnimationProps {
  isChanneling?: boolean;
}

export default function WizardAnimation({ isChanneling = false }: WizardAnimationProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const wizardImage = '/Image/wizard.jpg';
  const wizardVideo = '/Image/wizard-video.mp4';

  useEffect(() => {
    const img = new Image();
    img.src = wizardImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isChanneling) {
      setVideoReady(false);
      videoRef.current.currentTime = 0;
      videoRef.current.volume = 1;
      const handleCanPlay = () => setVideoReady(true);
      videoRef.current.addEventListener('canplay', handleCanPlay);
      videoRef.current.load();
      videoRef.current.play().catch(console.error);
      return () => videoRef.current?.removeEventListener('canplay', handleCanPlay);
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        videoRef.current.volume = 0;
        setVideoReady(false);
      }
    }
  }, [isChanneling]);

  const showImage = !isChanneling && imageLoaded;
  const showVideo = isChanneling && videoReady;

  return (
    <>
      <style>{`
        @keyframes wiz-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes wiz-pulse {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 0.85; }
        }
        @keyframes wiz-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes wiz-border-glow {
          0%, 100% {
            box-shadow:
              0 0 0 2px rgba(139,92,246,0.70),
              0 0 14px 3px rgba(139,92,246,0.35),
              0 0 32px 6px rgba(99,102,241,0.18);
          }
          50% {
            box-shadow:
              0 0 0 2px rgba(167,139,250,1),
              0 0 20px 5px rgba(139,92,246,0.55),
              0 0 45px 10px rgba(99,102,241,0.28);
          }
        }
        @keyframes wiz-border-glow-channeling {
          0%, 100% {
            box-shadow:
              0 0 0 2px rgba(129,140,248,0.80),
              0 0 18px 5px rgba(129,140,248,0.45),
              0 0 45px 10px rgba(99,102,241,0.28);
          }
          50% {
            box-shadow:
              0 0 0 3px rgba(196,181,253,1),
              0 0 26px 7px rgba(129,140,248,0.65),
              0 0 60px 14px rgba(99,102,241,0.40);
          }
        }
        @keyframes wiz-glow-breathe {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.07); }
        }
        @keyframes wiz-intense-breathe {
          0%, 100% { filter: brightness(1.05); }
          50% { filter: brightness(1.22); }
        }
        @keyframes wiz-corner-pulse {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }
        @keyframes wiz-ring-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes wiz-ring-spin-rev {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes wiz-energy {
          0% { transform: scale(0.85); opacity: 0; }
          30% { opacity: 0.55; }
          100% { transform: scale(1.65); opacity: 0; }
        }
        @keyframes wiz-sparkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .wiz-float { animation: wiz-float 5s ease-in-out infinite; }
        .wiz-pulse { animation: wiz-pulse 4s ease-in-out infinite; }
        .wiz-fade { animation: wiz-fade 0.7s ease-out forwards; }
        .wiz-corner { animation: wiz-corner-pulse 3s ease-in-out infinite; }
        .wiz-sparkle { animation: wiz-sparkle 2s ease-in-out infinite; }
      `}</style>

      <div style={{ position: 'relative', width: '300px', height: '430px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        {/* Lueur ambiante externe */}
        <div
          className="wiz-pulse"
          style={{
            position: 'absolute', inset: '-50px',
            background: isChanneling
              ? 'radial-gradient(ellipse at 50% 50%, rgba(129,140,248,0.20) 0%, rgba(139,92,246,0.10) 50%, transparent 72%)'
              : 'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.14) 0%, rgba(139,92,246,0.07) 50%, transparent 72%)',
            filter: 'blur(18px)',
            zIndex: 0,
            pointerEvents: 'none',
            transition: 'all 1s ease',
          }}
        />

        {/* Anneaux rotatifs */}
        {(showImage || showVideo) && (
          <div style={{ position: 'absolute', inset: '-18px', zIndex: 1, pointerEvents: 'none' }}>
            <div style={{
              position: 'absolute', inset: 0,
              border: '1px dashed rgba(139,92,246,0.22)',
              borderRadius: '22px',
              animation: 'wiz-ring-spin 28s linear infinite',
            }} />
            <div style={{
              position: 'absolute', inset: '8px',
              border: '1px solid rgba(129,140,248,0.12)',
              borderRadius: '18px',
              animation: 'wiz-ring-spin-rev 20s linear infinite',
            }} />
          </div>
        )}

        {/* Container flottant */}
        <div className="wiz-float" style={{ position: 'relative', zIndex: 2 }}>

          {/* Lueur derrière l'image — z-index -1 */}
          <div
            className="wiz-pulse"
            style={{
              position: 'absolute', inset: '-16px',
              background: isChanneling
                ? 'radial-gradient(ellipse at 50% 45%, rgba(129,140,248,0.38) 0%, rgba(139,92,246,0.20) 55%, transparent 78%)'
                : 'radial-gradient(ellipse at 50% 45%, rgba(99,102,241,0.26) 0%, rgba(139,92,246,0.13) 55%, transparent 78%)',
              borderRadius: '22px',
              filter: 'blur(12px)',
              zIndex: -1,
              pointerEvents: 'none',
              transition: 'all 1s ease',
            }}
          />

          {/* Loader silencieux */}
          {!showImage && !showVideo && (
            <div
              className="wiz-pulse"
              style={{
                width: '284px', height: '385px',
                borderRadius: '16px',
                background: 'linear-gradient(180deg, rgba(15,10,40,0.5) 0%, rgba(8,6,25,0.5) 100%)',
              }}
            />
          )}

          {/* IMAGE — AUCUN fond par-dessus, bordure via box-shadow uniquement */}
          {!isChanneling && (
            <img
              src={wizardImage}
              alt="Azraël le Voyant"
              onLoad={() => setImageLoaded(true)}
              className={imageLoaded ? 'wiz-fade' : ''}
              style={{
                display: 'block',
                width: '284px',
                height: '385px',
                objectFit: 'cover',
                objectPosition: 'center top',
                borderRadius: '16px',
                opacity: imageLoaded ? 1 : 0,
                position: 'relative',
                zIndex: 3,
                // Bordure lumineuse via box-shadow — ne couvre PAS l'image
                animation: 'wiz-border-glow 3.5s ease-in-out infinite, wiz-glow-breathe 4s ease-in-out infinite',
              }}
            />
          )}

          {/* VIDÉO */}
          {isChanneling && (
            <video
              ref={videoRef}
              src={wizardVideo}
              loop={false}
              playsInline
              preload="auto"
              muted={false}
              onCanPlay={() => setVideoReady(true)}
              onEnded={() => { if (videoRef.current) videoRef.current.currentTime = 0; }}
              className={videoReady ? 'wiz-fade' : ''}
              style={{
                display: 'block',
                width: '284px',
                height: '385px',
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: '16px',
                opacity: videoReady ? 1 : 0,
                position: 'relative',
                zIndex: 3,
                animation: 'wiz-border-glow-channeling 2.5s ease-in-out infinite, wiz-intense-breathe 2.5s ease-in-out infinite',
              }}
            />
          )}

          {/* Coins ornementaux */}
          {(showImage || showVideo) && [
            { top: '-6px', left: '-6px', bT: true, bL: true, r: '5px 0 0 0' },
            { top: '-6px', right: '-6px', bT: true, bR: true, r: '0 5px 0 0' },
            { bottom: '-6px', left: '-6px', bB: true, bL: true, r: '0 0 0 5px' },
            { bottom: '-6px', right: '-6px', bB: true, bR: true, r: '0 0 5px 0' },
          ].map((c, i) => (
            <div
              key={i}
              className="wiz-corner"
              style={{
                position: 'absolute',
                width: '20px', height: '20px',
                zIndex: 10,
                pointerEvents: 'none',
                animationDelay: `${i * 0.65}s`,
                top: c.top, bottom: c.bottom,
                left: c.left, right: c.right,
                borderTop: c.bT ? '2px solid rgba(196,181,253,0.95)' : undefined,
                borderBottom: c.bB ? '2px solid rgba(196,181,253,0.95)' : undefined,
                borderLeft: c.bL ? '2px solid rgba(196,181,253,0.95)' : undefined,
                borderRight: c.bR ? '2px solid rgba(196,181,253,0.95)' : undefined,
                borderRadius: c.r,
              }}
            />
          ))}

          {/* Fondu bas — z-index 4, AU-DESSUS de l'image mais seulement en bas */}
          {(showImage || showVideo) && (
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              height: '90px',
              background: 'linear-gradient(to top, rgba(3,6,16,0.90) 0%, rgba(3,6,16,0.40) 55%, transparent 100%)',
              borderRadius: '0 0 16px 16px',
              zIndex: 4, pointerEvents: 'none',
            }} />
          )}
        </div>

        {/* Effets channeling */}
        {showVideo && (
          <div style={{ position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
              {[0, 1].map(i => (
                <div key={i} style={{
                  position: 'absolute',
                  width: '220px', height: '220px',
                  marginLeft: '-110px', marginTop: '-110px',
                  border: `${i === 0 ? '2px' : '1px'} solid rgba(129,140,248,${i === 0 ? '0.45' : '0.30'})`,
                  borderRadius: '50%',
                  animation: `wiz-energy 3s ease-out ${i === 1 ? '1.5s' : ''} infinite`,
                }} />
              ))}
            </div>
            {[...Array(6)].map((_, i) => {
              const a = (i * Math.PI * 2) / 6;
              return (
                <div key={i} className="wiz-sparkle" style={{
                  position: 'absolute', width: '6px', height: '6px', borderRadius: '50%',
                  left: `${50 + Math.cos(a) * 46}%`, top: `${50 + Math.sin(a) * 46}%`,
                  background: i % 2 === 0 ? 'rgba(129,140,248,0.9)' : 'rgba(139,92,246,0.9)',
                  animationDelay: `${i * 0.3}s`,
                  boxShadow: '0 0 8px rgba(129,140,248,0.8)',
                }} />
              );
            })}
          </div>
        )}

        {/* Fumée bas */}
        {(showImage || showVideo) && (
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '70px', overflow: 'hidden', zIndex: 1, pointerEvents: 'none' }}>
            {[0, 1, 2].map(i => (
              <div key={i} className="wiz-pulse" style={{
                position: 'absolute',
                left: `${i * 32 + 6}%`, bottom: '-10px',
                width: '75px', height: '75px',
                background: showVideo
                  ? 'radial-gradient(circle, rgba(160,175,210,0.22) 0%, rgba(129,140,248,0.12) 40%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(160,175,210,0.14) 0%, rgba(99,102,241,0.07) 40%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(20px)',
                animationDelay: `${i * 1.5}s`,
              }} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}