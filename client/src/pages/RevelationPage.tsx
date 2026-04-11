// client/src/pages/RevelationPage.tsx
// ✅ v2 — étoiles useMemo positions fixes (zéro Math.random() au render) + scroll haut

import { useEffect, useMemo } from 'react';
import { OracleData, UserSession } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';
import { scrollToTop } from '@/App';

type CardBasedOracleType = 'loveOracle' | 'lunar' | 'runes';

interface RevelationPageProps {
  user: UserSession;
  oracle: OracleData;
  oracleType: CardBasedOracleType;
  selectedCardIndices: number[];
  onBack: () => void;
  onRevealInterpretation: () => void;
}

// ✅ Données des étoiles calculées UNE SEULE FOIS au niveau module
// Distribution de Fibonacci = répartition uniforme sans Math.random()
const STAR_COLORS = ['#ff6692', '#c9a87f', '#e8d4b8', '#ffd700'];
const STARS_DATA = Array.from({ length: 25 }, (_, i) => ({
  top:      (i * 137.508) % 100,
  left:     (i * 97.3 + 13) % 100,
  color:    STAR_COLORS[i % STAR_COLORS.length],
  // 3 tailles : grande (1/7), moyenne (1/3), petite (reste)
  size:     i % 7 === 0 ? '2.5px' : i % 3 === 0 ? '2px' : '1px',
  glow:     i % 7 === 0 ? '12px'  : i % 3 === 0 ? '8px'  : '5px',
  delay:    `${(i * 0.28) % 4}s`,
  duration: `${2 + (i % 5) * 0.6}s`,
}));

// ✅ Particules orbitales autour du cœur — positions trigonométriques fixes
const ORBIT_PARTICLES = [0, 60, 120, 180, 240, 300].map((deg, i) => {
  const rad = (deg * Math.PI) / 180;
  return {
    left:  `${50 + Math.cos(rad) * 40}%`,
    top:   `${50 + Math.sin(rad) * 40}%`,
    delay: `${i * 0.4}s`,
  };
});

export default function RevelationPage({
  user,
  oracle,
  oracleType,
  onRevealInterpretation,
}: RevelationPageProps) {
  const { t } = useLanguage();

  // ✅ Scroll en haut à l'ouverture (page de transition 2.5s)
  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToTop();
      });
    });
  }, []);

  // Auto-navigation vers l'interprétation après 2.5s
  useEffect(() => {
    const timer = setTimeout(() => {
      onRevealInterpretation();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onRevealInterpretation]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
      style={{ background: 'transparent' }}>

      {/* ── Halos de fond ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="rv-halo rv-halo-pink" />
        <div className="rv-halo rv-halo-blue" />
        <div className="rv-halo rv-halo-gold" />
      </div>

      {/* ✅ Étoiles — données fixes, zéro Math.random() */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {STARS_DATA.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width:           s.size,
              height:          s.size,
              backgroundColor: s.color,
              top:             `${s.top}%`,
              left:            `${s.left}%`,
              boxShadow:       `0 0 ${s.glow} ${s.color}`,
              animation:       `rv-twinkle ${s.duration} ease-in-out ${s.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* ── Contenu centré ── */}
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 z-10 max-w-xl w-full">

        {/* Animation centrale — cercles + cœur */}
        <div className="relative">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">

            {/* Cercle externe rose */}
            <div className="absolute inset-0 border-2 border-[#ff6692]/15 rounded-full"
              style={{ animation: 'rv-spin 8s linear infinite' }}>
              <div className="absolute inset-0 border-t-[3px] border-[#ff6692]/70 rounded-full shadow-[0_0_20px_rgba(255,102,146,0.5)]" />
              <div className="absolute inset-0 border-b-[3px] border-[#ff6692]/40 rounded-full" />
              {/* Diamants */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-gradient-to-br from-[#ff6692] to-[#d94976] rotate-45 shadow-[0_0_12px_rgba(255,102,146,1)]" />
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-gradient-to-br from-[#ff6692] to-[#d94976] rotate-45 shadow-[0_0_12px_rgba(255,102,146,1)]" />
              <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-br from-[#c9a87f] to-[#a8896f] rotate-45 shadow-[0_0_10px_rgba(201,168,127,0.9)]" />
              <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-br from-[#c9a87f] to-[#a8896f] rotate-45 shadow-[0_0_10px_rgba(201,168,127,0.9)]" />
            </div>

            {/* Cercle moyen doré */}
            <div className="absolute inset-4 sm:inset-5 border-2 border-[#c9a87f]/12 rounded-full"
              style={{ animation: 'rv-spin-rev 10s linear infinite' }}>
              <div className="absolute inset-0 border-l-[2.5px] border-[#c9a87f]/60 rounded-full" />
              <div className="absolute inset-0 border-r-[2.5px] border-[#c9a87f]/35 rounded-full" />
              {/* Étoiles fixes — pas de Math.random() */}
              {(['left', 'right', 'top', 'bottom'] as const).map((pos, i) => (
                <div key={pos} className="absolute text-[#ffd700] text-xs"
                  style={{
                    ...(pos === 'left'   ? { left: '-6px',  top: '50%', transform: 'translateY(-50%)' } :
                        pos === 'right'  ? { right: '-6px', top: '50%', transform: 'translateY(-50%)' } :
                        pos === 'top'    ? { top: '-6px',   left: '50%', transform: 'translateX(-50%)' } :
                                           { bottom: '-6px', left: '50%', transform: 'translateX(-50%)' }),
                    animation: `rv-twinkle 2s ease-in-out ${i * 0.2}s infinite`,
                    filter: 'drop-shadow(0 0 8px rgba(255,215,0,0.9))',
                  }}>
                  ✦
                </div>
              ))}
            </div>

            {/* Cercle interne rose */}
            <div className="absolute inset-8 sm:inset-10 border border-[#ff6692]/15 rounded-full"
              style={{ animation: 'rv-spin 7s linear infinite' }}>
              <div className="absolute inset-0 border-t-2 border-[#ff6692]/50 rounded-full" />
            </div>

            {/* Cœur central */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Halos */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#ff6692]/25 rounded-full blur-2xl"
                    style={{ animation: 'rv-pulse-love 2.5s ease-in-out infinite' }} />
                </div>

                {/* SVG cœur */}
                <svg width="48" height="48" viewBox="0 0 64 64"
                  className="sm:w-14 sm:h-14 relative drop-shadow-[0_0_20px_rgba(255,102,146,0.8)]"
                  style={{ animation: 'rv-float 3s ease-in-out infinite' }}>

                  {/* Points orbitaux fixes */}
                  {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                    const rad = (deg * Math.PI) / 180;
                    const x = 32 + Math.cos(rad) * 20;
                    const y = 32 + Math.sin(rad) * 20;
                    return (
                      <g key={i} transform={`translate(${x}, ${y})`}
                        style={{ animation: `rv-twinkle 2s ease-in-out ${i * 0.25}s infinite` }}>
                        <circle r="2.5" fill="#ffd700" opacity="0.7" filter="url(#rv-glow)" />
                        <circle r="1.5" fill="#c9a87f" opacity="0.9" />
                        <circle r="0.7" fill="#fff" opacity="0.8" />
                      </g>
                    );
                  })}

                  {/* Cœur */}
                  <g transform="translate(32,32)">
                    <path d="M 0,-8 C -4,-12 -10,-12 -12,-8 C -14,-4 -14,0 -12,4 L 0,16 L 12,4 C 14,0 14,-4 12,-8 C 10,-12 4,-12 0,-8 Z"
                      fill="#000" opacity="0.5" transform="translate(2,2)" />
                    <path d="M 0,-8 C -4,-12 -10,-12 -12,-8 C -14,-4 -14,0 -12,4 L 0,16 L 12,4 C 14,0 14,-4 12,-8 C 10,-12 4,-12 0,-8 Z"
                      fill="url(#rv-heart)" filter="url(#rv-glow)" />
                    <ellipse cx="-3" cy="-3" rx="4" ry="2.5" fill="white" opacity="0.6" transform="rotate(-35)" />
                    <circle cx="0" cy="-1.5" r="1.8" fill="white" opacity="0.8" />
                  </g>

                  <defs>
                    <linearGradient id="rv-heart" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ff6692" />
                      <stop offset="40%" stopColor="#ff4576" />
                      <stop offset="100%" stopColor="#d94976" stopOpacity="0.95" />
                    </linearGradient>
                    <filter id="rv-glow">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                  </defs>
                </svg>

                {/* ✅ Particules orbitales — positions fixes ORBIT_PARTICLES */}
                {ORBIT_PARTICLES.map((p, i) => (
                  <div key={i}
                    className="absolute w-1.5 h-1.5 bg-gradient-to-br from-[#ffd700] to-[#c9a87f] rounded-full shadow-[0_0_8px_rgba(255,215,0,0.8)]"
                    style={{
                      left: p.left,
                      top:  p.top,
                      animation: `rv-particle 3s ease-in-out ${p.delay} infinite`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Halos externes */}
            <div className="absolute -inset-12 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255,102,146,0.18), rgba(255,102,146,0.08), transparent)',
                filter: 'blur(24px)',
                animation: 'rv-pulse-romantic 2s ease-in-out infinite',
              }} />
          </div>
        </div>

        {/* Texte */}
        <div className="text-center space-y-4 px-4">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#e8d4b8] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] leading-tight"
              style={{ animation: 'rv-fade-in 0.8s ease-out' }}>
              {t('revelation.loading.title')}
            </h2>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-[#ff6692]/60 to-[#ff6692]/30" />
              <div className="flex items-center gap-1.5">
                <span className="text-[#ffd700]/60 text-xs">✦</span>
                <span className="text-[#ff6692]/70 text-sm">✦</span>
                <span className="text-[#ffd700]/60 text-xs">✦</span>
              </div>
              <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent via-[#c9a87f]/60 to-[#c9a87f]/30" />
            </div>
          </div>

          <p className="text-[#c9a87f]/95 text-sm sm:text-base font-light leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
            style={{ animation: 'rv-fade-delay 1.8s ease-out' }}>
            {t('revelation.loading.reading', { name: user.name, oracle: oracle.title })}
          </p>

          {/* Dots de chargement */}
          <div className="flex justify-center gap-2.5 pt-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-full"
                style={{
                  width:      i === 1 ? '10px' : '8px',
                  height:     i === 1 ? '10px' : '8px',
                  background: i === 1
                    ? 'linear-gradient(135deg, #ffd700, #c9a87f)'
                    : 'linear-gradient(135deg, #ff6692, #d94976)',
                  boxShadow:      i === 1 ? '0 0 14px rgba(255,215,0,0.9)' : '0 0 12px rgba(255,102,146,0.9)',
                  animationDelay: `${i * 200}ms`,
                  animation:      `rv-bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Citation mystique */}
        <div className="text-center px-4" style={{ animation: 'rv-fade-late 2.2s ease-out' }}>
          <div className="flex items-center justify-center gap-1.5 mb-2">
            {['♥', '✦', '✦', '✦', '♥'].map((sym, i) => (
              <span key={i} className="text-[10px]"
                style={{ color: i % 2 === 0 ? 'rgba(255,102,146,0.5)' : i === 2 ? 'rgba(255,102,146,0.5)' : 'rgba(255,215,0,0.5)' }}>
                {sym}
              </span>
            ))}
          </div>
          <div className="inline-block px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl border border-[#c9a87f]/30 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
            style={{ background: 'linear-gradient(135deg, rgba(13,27,46,0.7), rgba(21,34,56,0.8), rgba(13,27,46,0.7))' }}>
            <p className="text-[#c9a87f]/85 text-xs sm:text-sm italic font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] max-w-md leading-relaxed">
              "{t('revelation.loading.mysticMessage')}"
            </p>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Halos ── */
        .rv-halo { position:absolute; border-radius:50%; filter:blur(80px); pointer-events:none; }
        .rv-halo-pink { width:384px;height:384px; top:25%;left:25%;
          background:rgba(255,102,146,0.10); animation:rv-pulse-romantic 2s ease-in-out infinite; }
        .rv-halo-blue { width:320px;height:320px; bottom:33%;right:25%;
          background:rgba(26,45,69,0.30); animation:rv-pulse 4s ease-in-out infinite; }
        .rv-halo-gold { width:500px;height:500px; top:50%;left:50%;
          transform:translate(-50%,-50%);
          background:rgba(201,168,127,0.08); }

        /* ── Keyframes ── */
        @keyframes rv-spin          { to{transform:rotate(360deg);} }
        @keyframes rv-spin-rev      { to{transform:rotate(-360deg);} }
        @keyframes rv-float         { 0%,100%{transform:translateY(0) scale(1);}  50%{transform:translateY(-6px) scale(1.05);} }
        @keyframes rv-particle      { 0%,100%{opacity:.3;transform:translate(-50%,-50%) translateY(0);}
                                      50%    {opacity:.8;transform:translate(-50%,-50%) translateY(-12px);} }
        @keyframes rv-pulse-love    { 0%,100%{opacity:.2;transform:scale(1);}  50%{opacity:.4;transform:scale(1.2);} }
        @keyframes rv-pulse-romantic{ 0%,100%{opacity:.5;} 50%{opacity:.8;} }
        @keyframes rv-pulse         { 0%,100%{opacity:.3;transform:scale(1);}  50%{opacity:.6;transform:scale(1.15);} }
        @keyframes rv-twinkle       { 0%,100%{opacity:.2;transform:scale(1);}  50%{opacity:1;transform:scale(1.3);} }
        @keyframes rv-fade-in       { from{opacity:0;transform:translateY(10px);} to{opacity:1;transform:translateY(0);} }
        @keyframes rv-fade-delay    { 0%,30%{opacity:0;transform:translateY(10px);} 100%{opacity:1;transform:translateY(0);} }
        @keyframes rv-fade-late     { 0%,50%{opacity:0;transform:translateY(8px);}  100%{opacity:1;transform:translateY(0);} }
        @keyframes rv-bounce        { 0%,100%{transform:translateY(0);}             50%{transform:translateY(-8px);} }

        .bg-gradient-radial { background: radial-gradient(circle, var(--tw-gradient-stops)); }
      `}</style>
    </div>
  );
}