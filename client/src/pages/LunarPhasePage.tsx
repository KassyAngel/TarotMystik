// client/src/pages/LunarPhasePage.tsx
import { useState } from 'react';
import { UserSession } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSound } from '@/hooks/useSound';

interface LunarPhasePageProps {
  user: UserSession;
  onPhaseSelect: (phase: string) => void;
  onBack: () => void;
}

export default function LunarPhasePage({
  user,
  onPhaseSelect,
  onBack
}: LunarPhasePageProps) {
  const { t } = useLanguage();
  const [selectedPhase, setSelectedPhase] = useState('');
  const playFlipSound = useSound('Flip-card.wav');

  const phases = [
    {
      id: 'newMoon',
      emoji: '🌑',
      name: t('lunar.phases.newMoon.name') || 'Nouvelle Lune',
      description: t('lunar.phases.newMoon.description') || 'Nouveaux départs et intentions',
      color: 'from-slate-900 via-slate-800 to-slate-900',
      glow: 'shadow-[0_0_40px_rgba(100,116,139,0.3)]'
    },
    {
      id: 'firstQuarter',
      emoji: '🌓',
      name: t('lunar.phases.firstQuarter.name') || 'Premier Quartier',
      description: t('lunar.phases.firstQuarter.description') || 'Action et décisions',
      color: 'from-indigo-900 via-indigo-700 to-indigo-900',
      glow: 'shadow-[0_0_40px_rgba(99,102,241,0.3)]'
    },
    {
      id: 'fullMoon',
      emoji: '🌕',
      name: t('lunar.phases.fullMoon.name') || 'Pleine Lune',
      description: t('lunar.phases.fullMoon.description') || 'Culmination et révélation',
      color: 'from-amber-900 via-yellow-700 to-amber-900',
      glow: 'shadow-[0_0_40px_rgba(245,158,11,0.4)]'
    },
    {
      id: 'lastQuarter',
      emoji: '🌗',
      name: t('lunar.phases.lastQuarter.name') || 'Dernier Quartier',
      description: t('lunar.phases.lastQuarter.description') || 'Libération et introspection',
      color: 'from-purple-900 via-violet-800 to-purple-900',
      glow: 'shadow-[0_0_40px_rgba(139,92,246,0.3)]'
    }
  ];

  const handlePhaseClick = (phaseId: string) => {
    playFlipSound();
    setSelectedPhase(phaseId);
    // ✅ Navigation immédiate sans délai
    onPhaseSelect(phaseId);
  };

  return (
    <div className="min-h-screen flex flex-col p-4 pt-20 sm:pt-24 pb-24 bg-gradient-to-b from-[#0a0e1a] via-[#0f1420] to-[#0a0e1a] relative overflow-hidden">

      {/* Étoiles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: Math.random() > 0.7 ? '2px' : '1px',
              height: Math.random() > 0.7 ? '2px' : '1px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              opacity: 0.6
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="text-center mb-8 relative z-10">
        <div className="flex justify-center mb-4">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 bg-slate-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl animate-float">🌙</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-slate-200 mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          {t('lunar.phaseSelection.title') || 'Oracle Lunaire'}
        </h2>

        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-slate-400/40 to-transparent mb-4"></div>

        <p className="text-slate-300/80 text-sm sm:text-base max-w-md mx-auto font-light leading-relaxed">
          {t('lunar.phaseSelection.subtitle') || 'Choisissez la phase lunaire qui résonne avec votre état d\'esprit actuel'}
        </p>
      </div>

      {/* Grille des phases */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full max-w-3xl px-2">
          {phases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => handlePhaseClick(phase.id)}
              className={`relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${phase.color} 
                border-2 border-slate-500/30 hover:border-slate-400/60
                ${phase.glow}
                hover:scale-105 transform transition-all duration-300
                ${selectedPhase === phase.id ? 'scale-105 border-slate-300/70' : ''}
                group overflow-hidden`}
            >
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Contenu */}
              <div className="relative flex flex-col items-center text-center gap-3">
                <div className="text-6xl sm:text-7xl mb-2 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                  {phase.emoji}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                  {phase.name}
                </h3>

                <p className="text-slate-300/80 text-sm sm:text-base font-light leading-snug">
                  {phase.description}
                </p>
              </div>

              {/* Décorations */}
              <div className="absolute top-3 left-3 w-6 h-px bg-gradient-to-r from-slate-400/30 to-transparent"></div>
              <div className="absolute bottom-3 right-3 w-6 h-px bg-gradient-to-l from-slate-400/30 to-transparent"></div>
            </button>
          ))}
        </div>
      </div>

      {/* Bouton retour */}
      <div className="text-center pt-6 relative z-10">
        <button
          onClick={onBack}
          className="px-6 py-3 bg-slate-800/60 border-2 border-slate-600/40 text-slate-200 rounded-xl hover:bg-slate-700/60 hover:border-slate-500/60 transition-all duration-300 backdrop-blur-sm"
        >
          ← {t('common.back') || 'Retour'}
        </button>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}