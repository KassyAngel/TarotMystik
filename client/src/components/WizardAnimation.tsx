// client/src/components/WizardAnimation.tsx
// 🧙‍♂️ Animation du Magicien Azraël avec image réelle - VERSION AMÉLIORÉE

import wizardImage from '/Image/wizard.jpg';

interface WizardAnimationProps {
  isChanneling?: boolean;
}

export default function WizardAnimation({ isChanneling = false }: WizardAnimationProps) {
  return (
    <>
      <style>{`
        @keyframes float-wizard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 40px rgba(129,140,248,0.6); }
          50% { box-shadow: 0 0 80px rgba(129,140,248,1); }
        }
        @keyframes energy-wave {
          0% { transform: scale(0.8); opacity: 0.9; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes sparkle-float {
          0%, 100% { transform: translateY(0px); opacity: 1; }
          50% { transform: translateY(-20px); opacity: 0.5; }
        }
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes aura-expand {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.15); opacity: 0.8; }
        }
        .animate-float-wizard { animation: float-wizard 4s ease-in-out infinite; }
        .animate-glow-pulse { animation: glow-pulse 2.5s ease-in-out infinite; }
        .animate-energy-wave { animation: energy-wave 2.5s ease-out infinite; }
        .animate-sparkle-float { animation: sparkle-float 2.5s ease-in-out infinite; }
        .animate-pulse-gentle { animation: pulse-gentle 3.5s ease-in-out infinite; }
        .animate-rotate-slow { animation: rotate-slow 20s linear infinite; }
        .animate-aura-expand { animation: aura-expand 4s ease-in-out infinite; }
      `}</style>

      <div className="relative w-80 h-96 flex items-center justify-center">

        {/* Cercle magique au sol - Plus subtil */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-32 z-0 opacity-70">
          <div className="relative w-full h-full" style={{
            transform: 'perspective(600px) rotateX(65deg)',
            transformStyle: 'preserve-3d'
          }}>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 
              border border-indigo-400/40 rounded-full 
              shadow-[0_0_30px_rgba(129,140,248,0.3)] animate-glow-pulse">
              <div className="absolute inset-8 border border-purple-400/30 rounded-full animate-rotate-slow"></div>

              {/* Symboles runiques */}
              {[0, 90, 180, 270].map((angle, i) => (
                <div
                  key={i}
                  className="absolute text-indigo-300/80 text-lg font-bold"
                  style={{
                    left: `${50 + Math.cos((angle * Math.PI) / 180) * 44}%`,
                    top: `${50 + Math.sin((angle * Math.PI) / 180) * 44}%`,
                    transform: 'translate(-50%, -50%) rotateX(-65deg)',
                    textShadow: '0 0 12px rgba(129,140,248,0.8)',
                    animation: 'pulse-gentle 3s ease-in-out infinite',
                    animationDelay: `${i * 0.5}s`
                  }}
                >
                  {['✦', '✧', '◆', '◈'][i]}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Anneaux d'énergie si channeling */}
        {isChanneling && (
          <>
            <div className="absolute w-72 h-72 border-2 border-indigo-500/50 rounded-full animate-energy-wave z-0"></div>
            <div className="absolute w-72 h-72 border-2 border-purple-400/40 rounded-full animate-energy-wave z-0" 
                 style={{animationDelay: '0.6s'}}></div>
            <div className="absolute w-64 h-64 border-2 border-cyan-400/35 rounded-full animate-energy-wave z-0" 
                 style={{animationDelay: '1.2s'}}></div>
          </>
        )}

        {/* IMAGE DU MAGICIEN - MISE EN AVANT */}
        <div className="relative z-20 animate-float-wizard">

          {/* Aura magique multi-couches derrière l'image */}
          <div className="absolute inset-0 -z-10">
            {/* Aura principale - très étendue */}
            <div className="absolute inset-0 -m-20 bg-gradient-radial from-indigo-500/60 via-purple-500/40 to-transparent blur-[60px] 
                            animate-aura-expand"></div>
            {/* Aura secondaire - pulsation décalée */}
            <div className="absolute inset-0 -m-16 bg-gradient-radial from-blue-500/50 via-indigo-500/30 to-transparent blur-[50px] 
                            animate-aura-expand" style={{animationDelay: '1s'}}></div>
            {/* Aura proche - plus intense */}
            <div className="absolute inset-0 -m-12 bg-gradient-radial from-purple-500/70 via-indigo-500/40 to-transparent blur-[40px] 
                            animate-pulse-gentle" style={{animationDelay: '2s'}}></div>
          </div>

          {/* Container de l'image avec effet de lumière */}
          <div className="relative">
            {/* Effet de lumière derrière l'image */}
            <div className="absolute inset-0 -m-8 bg-gradient-radial from-white/10 via-indigo-400/20 to-transparent blur-2xl 
                            animate-pulse-gentle"></div>

            {/* L'image du magicien avec masque de fondu */}
            <div className="relative">
              <img 
                src={wizardImage}
                alt="Azraël le Voyant"
                className="w-72 h-[22rem] object-contain transition-all duration-500"
                style={{
                  filter: isChanneling 
                    ? 'brightness(1.4) contrast(1.15) saturate(1.3) drop-shadow(0 0 70px rgba(129,140,248,1)) drop-shadow(0 0 40px rgba(139,92,246,1)) drop-shadow(0 10px 30px rgba(0,0,0,0.8))' 
                    : 'brightness(1.2) contrast(1.1) saturate(1.15) drop-shadow(0 0 60px rgba(129,140,248,0.9)) drop-shadow(0 0 35px rgba(139,92,246,0.7)) drop-shadow(0 8px 25px rgba(0,0,0,0.7))',
                  maskImage: 'radial-gradient(ellipse 85% 90% at 50% 45%, black 35%, rgba(0,0,0,0.8) 60%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 85% 90% at 50% 45%, black 35%, rgba(0,0,0,0.8) 60%, transparent 100%)'
                }}
              />
            </div>

            {/* Halos lumineux organiques si channeling */}
            {isChanneling && (
              <>
                {/* Halo proche */}
                <div className="absolute inset-0 -m-6 border border-indigo-300/40 rounded-[45%] 
                                shadow-[0_0_90px_rgba(129,140,248,0.9),inset_0_0_60px_rgba(129,140,248,0.3)] 
                                animate-pulse blur-sm"></div>
                {/* Halo moyen */}
                <div className="absolute inset-0 -m-10 border border-purple-300/30 rounded-[48%] 
                                shadow-[0_0_110px_rgba(139,92,246,0.7),inset_0_0_50px_rgba(139,92,246,0.2)] 
                                animate-pulse" 
                     style={{animationDelay: '0.5s'}}></div>
                {/* Halo large */}
                <div className="absolute inset-0 -m-14 border border-blue-300/20 rounded-[50%] 
                                shadow-[0_0_130px_rgba(96,165,250,0.5)] 
                                animate-pulse blur-md" 
                     style={{animationDelay: '1s'}}></div>
              </>
            )}
          </div>

          {/* Particules magiques flottantes si channeling */}
          {isChanneling && (
            <div className="absolute inset-0 -m-24">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2.5 h-2.5 bg-indigo-200 rounded-full animate-sparkle-float"
                  style={{
                    left: `${50 + Math.cos(i * Math.PI / 8) * 55}%`,
                    top: `${50 + Math.sin(i * Math.PI / 8) * 55}%`,
                    animationDelay: `${i * 0.12}s`,
                    boxShadow: '0 0 15px rgba(129,140,248,1), 0 0 8px rgba(255,255,255,0.8)'
                  }}
                />
              ))}
            </div>
          )}

          {/* Étoiles tourbillonnantes si channeling */}
          {isChanneling && (
            <>
              {[...Array(8)].map((_, i) => (
                <div
                  key={`star-${i}`}
                  className="absolute text-yellow-200 text-xl animate-pulse-gentle"
                  style={{
                    left: `${50 + Math.cos(i * Math.PI / 4) * 65}%`,
                    top: `${50 + Math.sin(i * Math.PI / 4) * 65}%`,
                    transform: 'translate(-50%, -50%)',
                    animationDelay: `${i * 0.25}s`,
                    textShadow: '0 0 20px rgba(251,191,36,1), 0 0 10px rgba(255,255,255,0.9)',
                    filter: 'drop-shadow(0 0 8px rgba(251,191,36,1))'
                  }}
                >
                  ✨
                </div>
              ))}
            </>
          )}

          {/* Rayons de lumière subtils depuis le magicien */}
          {isChanneling && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={`ray-${i}`}
                  className="absolute top-1/2 left-1/2 w-1 h-32 origin-bottom opacity-20"
                  style={{
                    background: 'linear-gradient(to top, rgba(129,140,248,0.6), transparent)',
                    transform: `translate(-50%, -100%) rotate(${i * 60}deg)`,
                    animation: 'pulse-gentle 3s ease-in-out infinite',
                    animationDelay: `${i * 0.3}s`
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Effet de brume mystique au premier plan */}
        {isChanneling && (
          <div className="absolute inset-0 pointer-events-none z-30">
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 via-transparent to-transparent 
                            animate-pulse-gentle blur-xl"></div>
          </div>
        )}
      </div>
    </>
  );
}