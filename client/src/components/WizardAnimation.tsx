// client/src/components/WizardAnimation.tsx
// ✅ v12 — Crossfade vidéo loop + fade-out fluide en fin de wizard-video (zéro coupure nette)

import { useEffect, useState, useRef, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const WIZARD_MUSIC            = '/sounds/wizard-sound.mp3';
const WIZARD_VIDEO_IDLE       = '/Image/wizard.webm';
const WIZARD_VIDEO_CHANNELING = '/Image/wizard-video.webm';

const WIZARD_SOUNDS: Record<string, string> = {
  fr: '/sounds/soundswizard-fr.mp3',
  en: '/sounds/soundswizard-en.mp3',
  es: '/sounds/soundswizard-es.mp3',
  de: '/sounds/soundswizard-de.mp3',
  it: '/sounds/soundswizard-it.mp3',
};

// Crossfade : commence 1200ms avant la fin, dure 800ms
const XFADE_BEFORE_END_MS = 1200;
const XFADE_DURATION_MS   = 800;

// Fade-out sur la vidéo active : commence 900ms avant la fin, dure 700ms
// Doit commencer APRÈS le crossfade pour ne pas interférer avec lui
// (en pratique on applique le fade uniquement sur la vidéo SORTANTE pendant le crossfade)
const FADEOUT_BEFORE_END_MS = XFADE_BEFORE_END_MS + 200; // légèrement avant le crossfade
const FADEOUT_DURATION_MS   = XFADE_DURATION_MS;         // même durée que le crossfade

interface WizardAnimationProps {
  isChanneling?: boolean;
  onChannelingEnd?: () => void;
}

export default function WizardAnimation({ isChanneling = false, onChannelingEnd }: WizardAnimationProps) {
  const { language, t } = useLanguage();

  // Deux slots vidéo pour le crossfade sans coupure visible
  const videoARef  = useRef<HTMLVideoElement>(null);
  const videoBRef  = useRef<HTMLVideoElement>(null);
  const activeSlot = useRef<'A' | 'B'>('A');

  const audioRef = useRef<HTMLAudioElement>(null);
  const musicRef = useRef<HTMLAudioElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const xfadeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadeOutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Opacité individuelle des deux vidéos, gérée manuellement pour le fade-out
  const [opacityA, setOpacityA] = useState(1);
  const [opacityB, setOpacityB] = useState(0);

  const [videoReady, setVideoReady] = useState(false);
  const [progress,   setProgress]   = useState(0);

  // ── Planifie le fade-out de la vidéo sortante pendant le crossfade ──
  // Pour wizard-video (channeling), on applique un fade-out sur l'outgoing
  // pendant la transition pour éviter la coupure nette.
  const scheduleFadeOut = useCallback((
    outgoingSlot: 'A' | 'B',
    isChannelingVideo: boolean,
    delay: number,
  ) => {
    if (!isChannelingVideo) return; // pas nécessaire pour la vidéo idle qui loop naturellement
    if (fadeOutRef.current) clearTimeout(fadeOutRef.current);

    fadeOutRef.current = setTimeout(() => {
      // Réduit progressivement l'opacité de la vidéo sortante via un rAF
      const startTime = performance.now();
      const setOpacity = outgoingSlot === 'A' ? setOpacityA : setOpacityB;

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const ratio   = Math.min(elapsed / FADEOUT_DURATION_MS, 1);
        // Commence à 1 et descend à 0
        setOpacity(1 - ratio);
        if (ratio < 1) requestAnimationFrame(tick);
        else setOpacity(0);
      };
      requestAnimationFrame(tick);
    }, delay);
  }, []);

  // ── Planifie le prochain crossfade sur une vidéo active ──
  const scheduleXfade = useCallback((activeVideo: HTMLVideoElement, src: string) => {
    if (xfadeRef.current) clearTimeout(xfadeRef.current);

    const isChannelingVideo = src === WIZARD_VIDEO_CHANNELING;

    const doSchedule = (duration: number) => {
      if (!isFinite(duration) || duration <= 0) return;

      const delay = Math.max(0, duration * 1000 - XFADE_BEFORE_END_MS);

      // Déclenche le fade-out de la vidéo courante légèrement avant le crossfade
      const fadeDelay = Math.max(0, duration * 1000 - FADEOUT_BEFORE_END_MS);
      scheduleFadeOut(activeSlot.current, isChannelingVideo, fadeDelay);

      xfadeRef.current = setTimeout(() => {
        const outgoingSlotSnapshot = activeSlot.current;
        const incoming = outgoingSlotSnapshot === 'A' ? videoBRef.current : videoARef.current;
        const outgoing = outgoingSlotSnapshot === 'A' ? videoARef.current : videoBRef.current;
        if (!incoming || !outgoing) return;

        // Prépare la vidéo entrante
        if (incoming.src !== src || incoming.readyState < 2) {
          incoming.src   = src;
          incoming.muted = true;
          incoming.loop  = false;
          incoming.load();
        }
        incoming.currentTime = 0;

        let crossfadeFired = false;
        const startCrossfade = () => {
          if (crossfadeFired) return;
          crossfadeFired = true;

          incoming.play().catch(() => {});

          // La vidéo entrante part de l'opacité cible = 1, sortante = 0
          // On bascule via les deux opacités individuelles
          const nextIsA = outgoingSlotSnapshot === 'B'; // si sortant=B, entrant=A
          if (nextIsA) {
            setOpacityA(1);
            setOpacityB(0);
          } else {
            setOpacityA(0);
            setOpacityB(1);
          }
          activeSlot.current = nextIsA ? 'A' : 'B';

          // Planifie le crossfade suivant
          scheduleXfade(incoming, src);

          // Arrête et remet à zéro l'ancienne vidéo après la transition
          setTimeout(() => {
            outgoing.pause();
            outgoing.currentTime = 0;
          }, XFADE_DURATION_MS + 100);
        };

        if (incoming.readyState >= 4) {
          startCrossfade();
        } else {
          incoming.addEventListener('canplaythrough', startCrossfade, { once: true });
        }
      }, delay);
    };

    if (activeVideo.duration && isFinite(activeVideo.duration)) {
      doSchedule(activeVideo.duration);
    } else {
      activeVideo.addEventListener('loadedmetadata', () => doSchedule(activeVideo.duration), { once: true });
    }
  }, [scheduleFadeOut]);

  // ── Chargement initial / changement idle↔channeling ──
  useEffect(() => {
    if (xfadeRef.current)  clearTimeout(xfadeRef.current);
    if (fadeOutRef.current) clearTimeout(fadeOutRef.current);
    setVideoReady(false);
    setOpacityA(1);
    setOpacityB(0);
    activeSlot.current = 'A';

    const src = isChanneling ? WIZARD_VIDEO_CHANNELING : WIZARD_VIDEO_IDLE;
    const vA  = videoARef.current;
    const vB  = videoBRef.current;
    if (!vA || !vB) return;

    vB.pause();
    vB.src = '';

    vA.muted = true;
    vA.loop  = false;
    vA.src   = src;
    vA.load();
    vA.currentTime = 0;

    const onReady = () => {
      setVideoReady(true);
      vA.play().catch(() => {});

      // Précharge B immédiatement
      vB.src   = src;
      vB.muted = true;
      vB.loop  = false;
      vB.load();

      scheduleXfade(vA, src);
    };

    vA.addEventListener('canplaythrough', onReady, { once: true });

    return () => {
      vA.removeEventListener('canplaythrough', onReady);
      if (xfadeRef.current)  clearTimeout(xfadeRef.current);
      if (fadeOutRef.current) clearTimeout(fadeOutRef.current);
    };
  }, [isChanneling, scheduleXfade]);

  // ── Audio voix + musique de fond + barre de progression ──
  useEffect(() => {
    const a = audioRef.current;
    const m = musicRef.current;
    if (timerRef.current) clearTimeout(timerRef.current);
    setProgress(0);

    if (isChanneling) {
      if (a) {
        a.pause();
        a.src = WIZARD_SOUNDS[language] ?? WIZARD_SOUNDS.fr;
        a.load();
        a.currentTime = 0;
        a.volume = 1;
        a.play().catch(() => {});
      }

      if (m) {
        m.pause();
        m.src         = WIZARD_MUSIC;
        m.loop        = true;
        m.volume      = 0.30;
        m.currentTime = 0;
        m.load();
        m.play().catch(() => {});
      }

      const start = Date.now();
      const tick = () => {
        const pct = Math.min(((Date.now() - start) / 4000) * 100, 100);
        setProgress(pct);
        if (pct < 100) { timerRef.current = setTimeout(tick, 50); }
        else { onChannelingEnd?.(); }
      };
      timerRef.current = setTimeout(tick, 50);

    } else {
      if (a) { a.pause(); a.currentTime = 0; }

      if (m && !m.paused) {
        const fade = setInterval(() => {
          if (m.volume > 0.04) {
            m.volume = Math.max(0, m.volume - 0.04);
          } else {
            m.pause();
            m.currentTime = 0;
            m.volume = 0.30;
            clearInterval(fade);
          }
        }, 80);
      }
    }

    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [isChanneling, language]);

  // ── Styles vidéo avec opacité individuelle (fade-out contrôlé) ──
  const videoStyle = (opacity: number): React.CSSProperties => ({
    position: 'absolute', inset: 0,
    width: '100%', height: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
    opacity,
    // La transition CSS gère le crossfade ; le fade-out est piloté par rAF (plus précis)
    transition: `opacity ${XFADE_DURATION_MS}ms ease`,
    WebkitMaskImage: `radial-gradient(
      ellipse 74% 72% at 50% 44%,
      black 0%, black 32%,
      rgba(0,0,0,0.94) 42%, rgba(0,0,0,0.80) 52%,
      rgba(0,0,0,0.50) 63%, rgba(0,0,0,0.22) 73%,
      rgba(0,0,0,0.06) 82%, transparent 90%
    )`,
    maskImage: `radial-gradient(
      ellipse 74% 72% at 50% 44%,
      black 0%, black 32%,
      rgba(0,0,0,0.94) 42%, rgba(0,0,0,0.80) 52%,
      rgba(0,0,0,0.50) 63%, rgba(0,0,0,0.22) 73%,
      rgba(0,0,0,0.06) 82%, transparent 90%
    )`,
  });

  return (
    <>
      <style>{`
        @keyframes wiz-float {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        @keyframes wiz-reveal {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes glow-idle {
          0%, 100% { opacity: 0.50; transform: scale(1); }
          50%      { opacity: 0.85; transform: scale(1.06); }
        }
        @keyframes glow-ch {
          0%, 100% { opacity: 0.75; transform: scale(1.02); }
          50%      { opacity: 1;    transform: scale(1.10); }
        }
        @keyframes p-drift {
          0%   { opacity: 0;   transform: translate(0,0) scale(0.5); }
          20%  { opacity: 1; }
          80%  { opacity: 0.8; }
          100% { opacity: 0;   transform: translate(var(--dx), var(--dy)) scale(1.2); }
        }
        @keyframes wiz-progress {
          from { background-position: 0% 0%; }
          to   { background-position: 200% 0%; }
        }
        .wiz-float {
          animation: wiz-float 6s ease-in-out infinite;
          will-change: transform;
        }
        .wiz-reveal {
          animation: wiz-reveal 0.9s ease-out forwards;
        }
      `}</style>

      <audio ref={audioRef} preload="none" style={{ display: 'none' }} />
      <audio ref={musicRef} preload="none" style={{ display: 'none' }} />

      <div style={{
        position: 'relative', width: '320px', margin: '0 auto',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
      }}>
        {/* Conteneur flottant */}
        <div
          className={`wiz-float${videoReady ? ' wiz-reveal' : ''}`}
          style={{ position: 'relative', width: '320px', height: '420px', opacity: videoReady ? 1 : 0 }}
        >
          {/* Lueur de fond */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
            background: isChanneling
              ? 'radial-gradient(ellipse 70% 65% at 50% 45%, rgba(109,40,217,0.45) 0%, rgba(79,70,229,0.22) 40%, transparent 70%)'
              : 'radial-gradient(ellipse 60% 55% at 50% 45%, rgba(60,50,180,0.28) 0%, rgba(49,46,129,0.14) 40%, transparent 70%)',
            transition: 'background 1.8s ease',
            animation: isChanneling ? 'glow-ch 2.5s ease-in-out infinite' : 'glow-idle 5s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute', inset: '-60px', zIndex: 0, pointerEvents: 'none',
            background: isChanneling
              ? 'radial-gradient(ellipse 55% 50% at 50% 48%, rgba(139,92,246,0.22) 0%, transparent 65%)'
              : 'radial-gradient(ellipse 45% 40% at 50% 48%, rgba(79,70,229,0.10) 0%, transparent 65%)',
            filter: 'blur(20px)', transition: 'background 1.8s ease',
          }} />

          {/* ── Les deux vidéos superposées — opacité individuelle ── */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
            <video ref={videoARef} playsInline muted preload="auto" style={videoStyle(opacityA)} />
            <video ref={videoBRef} playsInline muted preload="auto" style={videoStyle(opacityB)} />
          </div>

          {/* Particules */}
          {videoReady && [
            { x: 18, y: 22, s: 2.5, dx: '-8px',  dy: '-18px', dur: 3.2, del: 0   },
            { x: 82, y: 18, s: 2,   dx: '10px',  dy: '-22px', dur: 2.8, del: 0.8 },
            { x: 12, y: 58, s: 1.5, dx: '-12px', dy: '-14px', dur: 3.8, del: 1.5 },
            { x: 88, y: 52, s: 2,   dx: '8px',   dy: '-16px', dur: 3.0, del: 0.4 },
            { x: 28, y: 82, s: 1.5, dx: '-6px',  dy: '-20px', dur: 4.0, del: 1.2 },
            { x: 72, y: 78, s: 2,   dx: '10px',  dy: '-18px', dur: 2.6, del: 2.0 },
            { x: 50, y: 8,  s: 2,   dx: '4px',   dy: '-14px', dur: 3.5, del: 0.6 },
            { x: 65, y: 88, s: 2.5, dx: '6px',   dy: '-20px', dur: 2.9, del: 0.3 },
          ].map((p, i) => (
            <div key={i} style={{
              position: 'absolute', left: `${p.x}%`, top: `${p.y}%`,
              width: `${p.s}px`, height: `${p.s}px`, borderRadius: '50%',
              background: isChanneling
                ? (i % 2 === 0 ? 'rgba(221,214,254,1)' : 'rgba(167,139,250,0.90)')
                : (i % 2 === 0 ? 'rgba(167,139,250,0.70)' : 'rgba(99,102,241,0.55)'),
              boxShadow: isChanneling
                ? `0 0 ${p.s * 4}px rgba(196,181,253,1)`
                : `0 0 ${p.s * 2}px rgba(99,102,241,0.60)`,
              zIndex: 5, pointerEvents: 'none',
              // @ts-ignore
              '--dx': p.dx, '--dy': p.dy,
              animation: `p-drift ${p.dur}s ease-out infinite`,
              animationDelay: `${p.del}s`,
            } as React.CSSProperties} />
          ))}

          {/* Lueur sol */}
          <div style={{
            position: 'absolute', bottom: '-10px', left: '50%',
            transform: 'translateX(-50%)',
            width: isChanneling ? '220px' : '160px', height: '40px',
            background: isChanneling
              ? 'radial-gradient(ellipse, rgba(109,40,217,0.55) 0%, rgba(99,102,241,0.28) 45%, transparent 70%)'
              : 'radial-gradient(ellipse, rgba(79,70,229,0.28) 0%, transparent 70%)',
            filter: 'blur(16px)', zIndex: 1, pointerEvents: 'none',
            transition: 'width 1s ease, background 1.5s ease',
            animation: isChanneling ? 'glow-ch 2s ease-in-out infinite' : 'glow-idle 5s ease-in-out infinite',
          }} />

          {/* Fumée channeling */}
          {isChanneling && videoReady && [0, 1, 2].map(i => (
            <div key={i} style={{
              position: 'absolute', bottom: '12%', left: `${25 + i * 25}%`,
              width: '60px', height: '60px',
              background: 'radial-gradient(circle, rgba(109,40,217,0.20) 0%, transparent 70%)',
              borderRadius: '50%', filter: 'blur(18px)',
              zIndex: 1, pointerEvents: 'none',
              // @ts-ignore
              '--dx': '0px', '--dy': '-50px',
              animation: `p-drift ${3 + i * 0.5}s ease-out infinite`,
              animationDelay: `${i * 0.8}s`,
            } as React.CSSProperties} />
          ))}
        </div>

        {/* ── Barre de progression ── */}
        {isChanneling && (
          <div style={{ width: '240px', marginTop: '-6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <span style={{
                fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'rgba(196,181,253,0.65)', fontFamily: 'serif',
              }}>
                {t('wizard.astraConnection')}
              </span>
              <span style={{ fontSize: '9px', color: 'rgba(196,181,253,0.50)', fontFamily: 'serif' }}>
                {Math.round(progress)}%
              </span>
            </div>
            <div style={{
              width: '100%', height: '2px',
              background: 'rgba(99,102,241,0.18)',
              borderRadius: '99px', overflow: 'hidden',
            }}>
              <div style={{
                height: '100%', width: `${progress}%`,
                borderRadius: '99px',
                background: 'linear-gradient(90deg, #6d28d9, #818cf8, #c4b5fd, #818cf8, #6d28d9)',
                backgroundSize: '200% 100%',
                animation: 'wiz-progress 1.5s linear infinite',
                boxShadow: '0 0 8px rgba(167,139,250,0.80)',
                transition: 'width 0.05s linear',
              }} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}