// client/src/pages/LunarInterpretation.tsx
import { UserSession, OracleCard } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';
import { getSecureRandomInt } from '@/lib/utils';

interface LunarInterpretationProps {
  user: UserSession;
  selectedCard: OracleCard;
  selectedPhase: string;
  onBack: () => void;
  onHome: () => void;
}

export default function LunarInterpretation({
  user,
  selectedCard,
  selectedPhase,
  onBack,
  onHome
}: LunarInterpretationProps) {
  const { t } = useLanguage();

  // Normaliser pour clé de traduction
  const normalizeCardName = (name: string): string => {
    return name.toLowerCase().trim().replace(/[''\s-]/g, '');
  };

  const normalizedCard = normalizeCardName(selectedCard.name);

  // Emoji de phase
  const getPhaseEmoji = (phase: string): string => {
    const emojiMap: Record<string, string> = {
      newMoon: '🌑',
      firstQuarter: '🌓',
      fullMoon: '🌕',
      lastQuarter: '🌗'
    };
    return emojiMap[phase] || '🌙';
  };

  const phaseEmoji = getPhaseEmoji(selectedPhase);

  // Obtenir une variation aléatoire de mindset
  const getRandomMindset = (): string => {
    const var1 = t(`cards.lunar.${normalizedCard}.mindset.var1`, { name: user.name });
    const var2 = t(`cards.lunar.${normalizedCard}.mindset.var2`, { name: user.name });
    const var3 = t(`cards.lunar.${normalizedCard}.mindset.var3`, { name: user.name });

    const variations = [var1, var2, var3].filter(v => 
      !v.includes('cards.lunar') && v.trim().length > 0
    );

    if (variations.length > 0) {
      return variations[getSecureRandomInt(0, variations.length - 1)];
    }

    return t(`cards.lunar.${normalizedCard}.mindset`, { name: user.name });
  };

  // Obtenir une variation aléatoire de guidance
  const getRandomGuidance = (): string => {
    const var1 = t(`cards.lunar.${normalizedCard}.guidance.var1`);
    const var2 = t(`cards.lunar.${normalizedCard}.guidance.var2`);
    const var3 = t(`cards.lunar.${normalizedCard}.guidance.var3`);

    const variations = [var1, var2, var3].filter(v => 
      !v.includes('cards.lunar') && v.trim().length > 0
    );

    if (variations.length > 0) {
      return variations[getSecureRandomInt(0, variations.length - 1)];
    }

    return t(`cards.lunar.${normalizedCard}.guidance`);
  };

  const mindsetText = getRandomMindset();
  const guidanceText = getRandomGuidance();
  const cardName = t(`cards.lunar.${normalizedCard}.name`) || selectedCard.name;
  const phaseName = t(`lunar.phases.${selectedPhase}.name`);

  return (
    <div className="min-h-screen flex flex-col justify-between p-4 pt-20 sm:pt-24 pb-24 bg-gradient-to-b from-[#0a0e1a] via-[#0f1420] to-[#0a0e1a] relative overflow-hidden">

      {/* Étoiles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: Math.random() > 0.7 ? '2px' : '1px',
              height: Math.random() > 0.7 ? '2px' : '1px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.6
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="text-center mb-6 relative z-10">
        <div className="text-6xl mb-4 animate-float">
          {phaseEmoji}
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif text-slate-200 mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          {phaseName}
        </h2>

        <div className="inline-block px-6 py-2 bg-slate-800/60 border border-slate-600/40 rounded-full backdrop-blur-sm mt-3">
          <p className="text-slate-300 text-lg font-semibold">
            {cardName}
          </p>
        </div>
      </div>

      {/* Interprétation */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="max-w-2xl w-full space-y-6 px-4">

          {/* État d'esprit */}
          <div className="bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-800/80 rounded-2xl p-6 border border-slate-600/30 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">💭</span>
              <h3 className="text-xl font-bold text-slate-200">
                {t('lunar.interpretation.mindset') || 'État d\'esprit'}
              </h3>
            </div>
            <p className="text-slate-300/90 text-base leading-relaxed">
              {mindsetText}
            </p>
          </div>

          {/* Guidance */}
          <div className="bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-indigo-900/40 rounded-2xl p-6 border border-indigo-500/30 backdrop-blur-sm shadow-[0_8px_32px_rgba(99,102,241,0.2)]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">✨</span>
              <h3 className="text-xl font-bold text-indigo-200">
                {t('lunar.interpretation.guidance') || 'Guidance'}
              </h3>
            </div>
            <p className="text-indigo-100/90 text-base leading-relaxed">
              {guidanceText}
            </p>
          </div>

        </div>
      </div>

      {/* Boutons */}
      <div className="text-center space-y-3 relative z-10">
        <button
          onClick={onBack}
          className="w-full max-w-md px-6 py-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 border-2 border-slate-500/50 text-slate-100 rounded-xl font-semibold hover:from-slate-600 hover:via-slate-500 hover:to-slate-600 hover:scale-105 transition-all duration-300 shadow-[0_4px_20px_rgba(100,116,139,0.3)]"
        >
          ✨ {t('interpretation.newConsultation') || 'Nouvelle Consultation'}
        </button>

        <button
          onClick={onHome}
          className="px-6 py-3 text-slate-300 hover:text-slate-100 transition-colors text-sm"
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