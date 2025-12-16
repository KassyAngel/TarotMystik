import { useEffect } from 'react';
import { OracleData, UserSession } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';

type CardBasedOracleType = 'loveOracle' | 'lunar' | 'runes';

interface RevelationPageProps {
  user: UserSession;
  oracle: OracleData;
  oracleType: CardBasedOracleType;
  selectedCardIndices: number[];
  onBack: () => void;
  onRevealInterpretation: () => void;
}

export default function RevelationPage({ 
  user, 
  oracle, 
  oracleType,
  onRevealInterpretation 
}: RevelationPageProps) {
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      onRevealInterpretation();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onRevealInterpretation]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#0a1420] via-[#0d1b2e] to-[#0a1420] relative overflow-hidden">

      {/* Effets de profondeur luxueux */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff6692]/10 rounded-full blur-3xl animate-pulse-romantic"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#1a2d45]/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c9a87f]/8 rounded-full blur-3xl"></div>
      </div>

      {/* Étoiles scintillantes raffinées */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => {
          const colors = ['#ff6692', '#c9a87f', '#e8d4b8', '#ffd700'];
          const color = colors[Math.floor(Math.random() * colors.length)];
          const size = Math.random() > 0.85 ? '2.5px' : Math.random() > 0.7 ? '2px' : '1px';
          return (
            <div
              key={i}
              className="absolute rounded-full animate-twinkle-elegant"
              style={{
                width: size,
                height: size,
                backgroundColor: color,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                boxShadow: `0 0 ${size === '2.5px' ? '12px' : size === '2px' ? '8px' : '5px'} ${color}`
              }}
            />
          );
        })}
      </div>

      {/* Contenu centré verticalement - ✅ ESPACES RÉDUITS */}
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 z-10 max-w-xl w-full">

        {/* Animation centrale - Cercles mystiques avec cœur - ✅ TAILLE RÉDUITE */}
        <div className="relative">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">
            {/* Grand cercle externe rose animé */}
            <div className="absolute inset-0 border-2 border-[#ff6692]/15 rounded-full animate-spin-slow">
              <div className="absolute inset-0 border-t-[3px] border-[#ff6692]/70 rounded-full shadow-[0_0_20px_rgba(255,102,146,0.5)]"></div>
              <div className="absolute inset-0 border-b-[3px] border-[#ff6692]/40 rounded-full shadow-[0_0_15px_rgba(255,102,146,0.3)]"></div>
              {/* Diamants décoratifs */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-gradient-to-br from-[#ff6692] to-[#d94976] rotate-45 shadow-[0_0_12px_rgba(255,102,146,1)]"></div>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-gradient-to-br from-[#ff6692] to-[#d94976] rotate-45 shadow-[0_0_12px_rgba(255,102,146,1)]"></div>
              <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-br from-[#c9a87f] to-[#a8896f] rotate-45 shadow-[0_0_10px_rgba(201,168,127,0.9)]"></div>
              <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-br from-[#c9a87f] to-[#a8896f] rotate-45 shadow-[0_0_10px_rgba(201,168,127,0.9)]"></div>
            </div>

            {/* Cercle moyen doré avec étoiles */}
            <div className="absolute inset-4 sm:inset-5 border-2 border-[#c9a87f]/12 rounded-full animate-spin-reverse">
              <div className="absolute inset-0 border-l-[2.5px] border-[#c9a87f]/60 rounded-full shadow-[inset_0_0_15px_rgba(201,168,127,0.3)]"></div>
              <div className="absolute inset-0 border-r-[2.5px] border-[#c9a87f]/35 rounded-full"></div>
              {/* Étoiles brillantes */}
              <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 text-[#ffd700] text-xs drop-shadow-[0_0_8px_rgba(255,215,0,0.9)] animate-twinkle-slow">✦</div>
              <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 text-[#ffd700] text-xs drop-shadow-[0_0_8px_rgba(255,215,0,0.9)] animate-twinkle-slow" style={{animationDelay: '0.5s'}}>✦</div>
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-[#c9a87f] text-[10px] drop-shadow-[0_0_6px_rgba(201,168,127,0.8)] animate-twinkle-slow" style={{animationDelay: '0.3s'}}>✦</div>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 text-[#c9a87f] text-[10px] drop-shadow-[0_0_6px_rgba(201,168,127,0.8)] animate-twinkle-slow" style={{animationDelay: '0.7s'}}>✦</div>
            </div>

            {/* Cercle interne rose subtil */}
            <div className="absolute inset-8 sm:inset-10 border border-[#ff6692]/15 rounded-full animate-spin-slow" style={{animationDuration: '7s'}}>
              <div className="absolute inset-0 border-t-2 border-[#ff6692]/50 rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6692]/5 to-transparent rounded-full"></div>
            </div>

            {/* Cœur central magnifique */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Halos pulsants */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#ff6692]/25 rounded-full blur-2xl animate-pulse-love"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-[#ffd700]/10 rounded-full blur-3xl animate-pulse-slow"></div>
                </div>

                {/* Cœur SVG */}
                <svg width="48" height="48" viewBox="0 0 64 64" className="sm:w-14 sm:h-14 relative animate-float-gentle drop-shadow-[0_0_20px_rgba(255,102,146,0.8)]">
                  {/* Petites roses lumineuses autour */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = 32 + Math.cos(rad) * 20;
                    const y = 32 + Math.sin(rad) * 20;
                    return (
                      <g key={i} transform={`translate(${x}, ${y})`} className="animate-twinkle-slow" style={{animationDelay: `${i * 0.25}s`}}>
                        <circle r="2.5" fill="#ffd700" opacity="0.7" filter="url(#glow)"/>
                        <circle r="1.5" fill="#c9a87f" opacity="0.9"/>
                        <circle r="0.7" fill="#fff" opacity="0.8"/>
                      </g>
                    );
                  })}

                  {/* Cœur principal */}
                  <g transform="translate(32, 32)">
                    <path 
                      d="M 0,-8 C -4,-12 -10,-12 -12,-8 C -14,-4 -14,0 -12,4 L 0,16 L 12,4 C 14,0 14,-4 12,-8 C 10,-12 4,-12 0,-8 Z" 
                      fill="#000" 
                      opacity="0.5"
                      transform="translate(2, 2)"
                      filter="blur(2px)"
                    />
                    <path 
                      d="M 0,-8 C -4,-12 -10,-12 -12,-8 C -14,-4 -14,0 -12,4 L 0,16 L 12,4 C 14,0 14,-4 12,-8 C 10,-12 4,-12 0,-8 Z" 
                      fill="url(#heartGradient)" 
                      filter="url(#glow)"
                    />
                    <path 
                      d="M 0,-6.5 C -3.5,-10 -8.5,-10 -10.5,-6.5 C -12,-4 -12,0 -10.5,3 L 0,13.5 L 10.5,3 C 12,0 12,-4 10.5,-6.5 C 8.5,-10 3.5,-10 0,-6.5 Z" 
                      fill="url(#shineGradient)" 
                      opacity="0.4"
                    />
                    <ellipse cx="-3" cy="-3" rx="4" ry="2.5" fill="white" opacity="0.6" transform="rotate(-35)"/>
                    <ellipse cx="-1.5" cy="-2" rx="2.5" ry="1.5" fill="#fff" opacity="0.7" transform="rotate(-25)"/>
                    <circle cx="0" cy="-1.5" r="1.8" fill="white" opacity="0.8"/>
                    <circle cx="1.5" cy="0" r="1" fill="#ffd700" opacity="0.6"/>
                  </g>

                  <defs>
                    <linearGradient id="heartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ff6692" stopOpacity="1"/>
                      <stop offset="40%" stopColor="#ff4576" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#d94976" stopOpacity="0.95"/>
                    </linearGradient>
                    <linearGradient id="shineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffd700" stopOpacity="0.8"/>
                      <stop offset="50%" stopColor="#e8d4b8" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                </svg>

                {/* Particules magiques */}
                {[0, 1, 2, 3, 4, 5].map((i) => {
                  const angle = (i * 60) * Math.PI / 180;
                  return (
                    <div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-gradient-to-br from-[#ffd700] to-[#c9a87f] rounded-full animate-float-particle shadow-[0_0_8px_rgba(255,215,0,0.8)]"
                      style={{
                        left: `${50 + Math.cos(angle) * 40}%`,
                        top: `${50 + Math.sin(angle) * 40}%`,
                        animationDelay: `${i * 0.4}s`
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Halos externes */}
            <div className="absolute -inset-12 bg-gradient-radial from-[#ff6692]/18 via-[#ff6692]/8 to-transparent blur-3xl rounded-full animate-pulse-romantic"></div>
            <div className="absolute -inset-14 bg-gradient-radial from-[#ffd700]/12 via-[#c9a87f]/6 to-transparent blur-3xl rounded-full animate-pulse-slow"></div>
          </div>
        </div>

        {/* Contenu textuel - ✅ ESPACES RÉDUITS */}
        <div className="text-center space-y-4 px-4">
          {/* Titre principal */}
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#e8d4b8] animate-fade-in drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] leading-tight">
              {t('revelation.loading.title')}
            </h2>

            {/* Ligne décorative */}
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-[#ff6692]/60 to-[#ff6692]/30"></div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#ffd700]/60 text-xs drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]">✦</span>
                <span className="text-[#ff6692]/70 text-sm drop-shadow-[0_0_10px_rgba(255,102,146,0.7)]">♥</span>
                <span className="text-[#ffd700]/60 text-xs drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]">✦</span>
              </div>
              <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent via-[#c9a87f]/60 to-[#c9a87f]/30"></div>
            </div>
          </div>

          {/* Message personnalisé */}
          <p className="text-[#c9a87f]/95 text-sm sm:text-base font-light animate-fade-in-delay leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            {t('revelation.loading.reading', { name: user.name, oracle: oracle.title })}
          </p>

          {/* Indicateur de chargement */}
          <div className="flex justify-center gap-2.5 pt-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-full animate-bounce"
                style={{
                  width: i === 1 ? '10px' : '8px',
                  height: i === 1 ? '10px' : '8px',
                  background: i === 1 
                    ? 'linear-gradient(135deg, #ffd700, #c9a87f)' 
                    : 'linear-gradient(135deg, #ff6692, #d94976)',
                  boxShadow: i === 1 
                    ? '0 0 14px rgba(255,215,0,0.9)' 
                    : '0 0 12px rgba(255,102,146,0.9)',
                  animationDelay: `${i * 200}ms`,
                  animationDuration: '1.2s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Citation mystique - ✅ COMPACT */}
        <div className="text-center animate-fade-in-late px-4">
          <div className="flex items-center justify-center gap-1.5 mb-2">
            <span className="text-[#ff6692]/50 text-[10px] drop-shadow-[0_0_6px_rgba(255,102,146,0.5)]">♥</span>
            <span className="text-[#ffd700]/50 text-[10px] drop-shadow-[0_0_6px_rgba(255,215,0,0.5)]">✦</span>
            <span className="text-[#c9a87f]/50 text-[10px] drop-shadow-[0_0_6px_rgba(201,168,127,0.5)]">✦</span>
            <span className="text-[#ffd700]/50 text-[10px] drop-shadow-[0_0_6px_rgba(255,215,0,0.5)]">✦</span>
            <span className="text-[#ff6692]/50 text-[10px] drop-shadow-[0_0_6px_rgba(255,102,146,0.5)]">♥</span>
          </div>

          <div className="inline-block px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-br from-[#0d1b2e]/70 via-[#152238]/80 to-[#0d1b2e]/70 rounded-2xl border border-[#c9a87f]/30 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
            <p className="text-[#c9a87f]/85 text-xs sm:text-sm italic font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] max-w-md leading-relaxed">
              "{t('revelation.loading.mysticMessage')}"
            </p>
          </div>

          <div className="flex items-center justify-center gap-1.5 mt-2">
            <span className="text-[#c9a87f]/50 text-[10px] drop-shadow-[0_0_6px_rgba(201,168,127,0.5)]">✦</span>
            <span className="text-[#ffd700]/50 text-[10px] drop-shadow-[0_0_6px_rgba(255,215,0,0.5)]">✦</span>
            <span className="text-[#ff6692]/50 text-[10px] drop-shadow-[0_0_6px_rgba(255,102,146,0.5)]">♥</span>
            <span className="text-[#ffd700]/50 text-[10px] drop-shadow-[0_0_6px_rgba(255,215,0,0.5)]">✦</span>
            <span className="text-[#c9a87f]/50 text-[10px] drop-shadow-[0_0_6px_rgba(201,168,127,0.5)]">✦</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-6px) scale(1.05); }
        }
        @keyframes float-particle {
          0%, 100% { 
            opacity: 0.3;
            transform: translate(-50%, -50%) translateY(0);
          }
          50% { 
            opacity: 0.8;
            transform: translate(-50%, -50%) translateY(-12px);
          }
        }
        @keyframes pulse-love {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
        }
        @keyframes pulse-romantic {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.15); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-delay {
          0%, 30% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-late {
          0%, 50% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes twinkle-elegant {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes twinkle-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 10s linear infinite;
        }
        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }
        .animate-float-particle {
          animation: float-particle 3s ease-in-out infinite;
        }
        .animate-pulse-love {
          animation: pulse-love 2.5s ease-in-out infinite;
        }
        .animate-pulse-romantic {
          animation: pulse-romantic 2s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in-delay 1.8s ease-out;
        }
        .animate-fade-in-late {
          animation: fade-in-late 2.2s ease-out;
        }
        .animate-twinkle-elegant {
          animation: twinkle-elegant 3s ease-in-out infinite;
        }
        .animate-twinkle-slow {
          animation: twinkle-slow 2s ease-in-out infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}