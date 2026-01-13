
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
  // ✅ Détection mobile pour ajuster le nombre d'étoiles
  const isMobile = useMemo(() => {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || 
           window.innerWidth < 768;
  }, []);

  // ✅ Réduction drastique : 100 → 30 sur mobile, 50 sur desktop
  const starCount = isMobile ? 30 : 50;

  // ✅ Mémoisation : Les étoiles ne sont générées qu'une seule fois
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: starCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() > 0.7 ? 2 : 1,
      opacity: 0.3 + Math.random() * 0.5,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
    }));
  }, [starCount]);

  return (
    <div className="stars fixed top-0 left-0 w-full h-full pointer-events-none z-[1]">
      {/* ✅ SVG au lieu de multiples DIVs = ÉNORME gain de performance */}
      <svg 
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.8 }}
      >
        <defs>
          {/* ✅ Filtre de glow très léger (optionnel, peut être retiré sur mobile) */}
          {!isMobile && (
            <filter id="star-glow">
              <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          )}
        </defs>

        {stars.map((star, i) => (
          <circle
            key={i}
            cx={`${star.x}%`}
            cy={`${star.y}%`}
            r={star.size}
            fill="white"
            opacity={star.opacity}
            filter={!isMobile ? "url(#star-glow)" : undefined}
          >
            {/* ✅ Animation SVG native = Plus performant que CSS */}
            <animate
              attributeName="opacity"
              values={`${star.opacity * 0.3};${star.opacity};${star.opacity * 0.3}`}
              dur={`${star.duration}s`}
              begin={`${star.delay}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>
    </div>
  );
}