import { useMemo } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
}

export default function StarsBackground() {
  const isMobile = useMemo(() =>
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    window.innerWidth < 768
  , []);

  const starCount = isMobile ? 25 : 45;

  const stars = useMemo<Star[]>(() =>
    Array.from({ length: starCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() > 0.7 ? 2 : 1,
      opacity: 0.3 + Math.random() * 0.5,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
    }))
  , [starCount]);

  return (
    <>
      <style>{`
        @keyframes starTwinkle {
          0%, 100% { opacity: var(--s-min); }
          50%       { opacity: var(--s-max); }
        }
        .star-circle {
          animation: starTwinkle var(--s-dur) ease-in-out var(--s-delay) infinite;
          /* ✅ will-change:opacity → le compositor gère ça sans toucher au thread principal */
          will-change: opacity;
        }
        @media (prefers-reduced-motion: reduce) {
          .star-circle { animation: none; }
        }
      `}</style>
      <svg
        style={{
          position: 'fixed', top: 0, left: 0,
          width: '100%', height: '100%',
          pointerEvents: 'none', zIndex: 1,
          opacity: 0.8,
        }}
        aria-hidden="true"
      >
        {/* ✅ Pas de filtre blur du tout — économise le GPU */}
        {stars.map((star, i) => (
          <circle
            key={i}
            className="star-circle"
            cx={`${star.x}%`}
            cy={`${star.y}%`}
            r={star.size}
            fill="white"
            style={{
              '--s-min': star.opacity * 0.3,
              '--s-max': star.opacity,
              '--s-dur': `${star.duration}s`,
              '--s-delay': `${star.delay}s`,
            } as React.CSSProperties}
          />
        ))}
      </svg>
    </>
  );
}