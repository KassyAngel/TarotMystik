import { useState } from 'react';
import MysticalButton from '@/components/MysticalButton';
import { OracleData, OracleCard, UserSession } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';
import { getSecureRandomInt } from '@/lib/utils';
import { loveOracleVariations, CardVariations } from '@/data/crossSpreadVariations';

type CardBasedOracleType = 'loveOracle' | 'lunar' | 'runes';

interface CrossSpreadInterpretationProps {
  user: UserSession;
  oracle: OracleData;
  oracleType: CardBasedOracleType;
  selectedCardIndices: number[];
  selectedCards: OracleCard[];
  onHome: () => void;
  onBackToMode: () => void;
  onSaveReading?: (reading: any) => Promise<void>;
  shouldShowAdBeforeReading?: (oracleType: string) => Promise<boolean>;
  onReadingComplete?: (oracleType: string) => void;
}

interface PositionInterpretation {
  position: string;
  cardName: string;
  icon: string;
  pour: string;
  contre: string;
  synthese: string;
}

export default function CrossSpreadInterpretation({
  user,
  oracle,
  oracleType,
  selectedCardIndices,
  selectedCards,
  onHome,
  onBackToMode,
  onSaveReading,
  shouldShowAdBeforeReading,
  onReadingComplete
}: CrossSpreadInterpretationProps) {
  const { t } = useLanguage();
  const [expandedCard, setExpandedCard] = useState<number | null>(0);

  const positions = [
    { key: 'present', label: t('crossSpread.positions.present') || 'Le Présent', icon: '🌟' },
    { key: 'obstacle', label: t('crossSpread.positions.obstacle') || 'L\'Obstacle', icon: '⚠️' },
    { key: 'past', label: t('crossSpread.positions.past') || 'Le Passé', icon: '🕰️' },
    { key: 'future', label: t('crossSpread.positions.future') || 'L\'Avenir', icon: '🔮' },
    { key: 'synthesis', label: t('crossSpread.positions.synthesis') || 'La Synthèse', icon: '💫' }
  ];

  const normalizeCardName = (cardName: string): string => {
    return cardName
      .trim()
      .toLowerCase()
      .replace(/[''\s-]/g, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  const getTranslatedCardName = (card: OracleCard): string => {
    if (!card?.name) return '';
    const normalizedName = normalizeCardName(card.name);
    const translationKey = `cards.${oracleType}.${normalizedName}.name`;
    const translatedName = t(translationKey);

    if (translatedName !== translationKey) {
      return translatedName;
    }

    return card.name;
  };

  const getRandomVariation = (cardNormalized: string, section: 'pour' | 'contre' | 'synthese'): string => {
    const variations: CardVariations = loveOracleVariations[cardNormalized] || {
      pour: ["crossSpread.interpretations.defaultPositive"],
      contre: ["crossSpread.interpretations.defaultNegative"],
      synthese: ["crossSpread.interpretations.defaultAdvice"]
    };

    const variationKey = variations[section][getSecureRandomInt(0, variations[section].length - 1)];

    if (variationKey.includes('.')) {
      return t(variationKey, { 
        name: user.name,
        genderSuffix: user.gender === 'femme' ? 'e' : ''
      });
    }

    const genderSuffix = user.gender === 'femme' ? 'e' : '';
    return variationKey.replace(/\{genderSuffix\}/g, genderSuffix);
  };

  const generateInterpretations = (): PositionInterpretation[] => {
    return selectedCards.map((card, index) => {
      const normalizedName = normalizeCardName(card.name);

      return {
        position: positions[index].label,
        cardName: getTranslatedCardName(card),
        icon: positions[index].icon,
        pour: getRandomVariation(normalizedName, 'pour'),
        contre: getRandomVariation(normalizedName, 'contre'),
        synthese: getRandomVariation(normalizedName, 'synthese')
      };
    });
  };

  const interpretations = generateInterpretations();

  return (
    <div className="min-h-screen flex flex-col justify-between p-4 sm:p-6 pt-20 sm:pt-24 pb-24 bg-gradient-to-b from-[#0a1420] via-[#0d1b2e] to-[#0a1420] relative overflow-hidden">

      {/* Effets de fond */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1a2d45]/25 rounded-full blur-3xl animate-pulse-very-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#2d3e57]/20 rounded-full blur-3xl animate-pulse-very-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a87f]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Étoiles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-[#c9a87f] rounded-full animate-twinkle-elegant"
            style={{
              width: Math.random() > 0.7 ? '2px' : '1px',
              height: Math.random() > 0.7 ? '2px' : '1px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="text-center mb-8 relative z-10">
        <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#152238]/60 via-[#1a2d45]/80 to-[#152238]/60 rounded-full border border-[#c9a87f]/30 backdrop-blur-sm mb-4">
          <h1 className="text-[#e8d4b8] text-xl sm:text-2xl md:text-3xl font-serif leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {t('crossSpread.interpretation.title') || 'Votre Tirage en Croix'}
          </h1>
        </div>
        <div className="h-px w-40 mx-auto bg-gradient-to-r from-transparent via-[#c9a87f]/50 to-transparent mb-4"></div>
        <p className="text-[#c9a87f]/80 text-sm sm:text-base italic">
          {t('crossSpread.interpretation.subtitle', { name: user.name }) || `${user.name}, votre tirage révèle un chemin amoureux riche en enseignements.`}
        </p>
      </div>

      {/* Interprétations des cartes */}
      <div className="flex-1 relative z-10 max-w-4xl mx-auto w-full space-y-4 sm:space-y-5">
        {interpretations.map((interp, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-[#152238]/70 via-[#1a2d45]/80 to-[#152238]/70 rounded-2xl border border-[#c9a87f]/25 backdrop-blur-sm overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-[#c9a87f]/40"
          >
            {/* Header de la carte */}
            <button
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              className="w-full p-4 sm:p-5 flex items-center justify-between cursor-pointer hover:bg-[#1a2d45]/30 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="text-2xl sm:text-3xl">{interp.icon}</span>
                <div className="text-left">
                  <h3 className="text-[#e8d4b8] text-base sm:text-lg font-serif">
                    {interp.position}
                  </h3>
                  <p className="text-[#c9a87f]/70 text-sm">
                    {interp.cardName}
                  </p>
                </div>
              </div>
              <div className={`text-[#c9a87f] transition-transform duration-300 ${
                expandedCard === index ? 'rotate-180' : ''
              }`}>
                ▼
              </div>
            </button>

            {/* Contenu détaillé (expandable) */}
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedCard === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 sm:px-5 pb-5 space-y-4">
                <div className="h-px bg-gradient-to-r from-transparent via-[#c9a87f]/30 to-transparent"></div>

                {/* Pour - Aspects Positifs */}
                <div>
                  <h4 className="text-[#ffd700] text-sm font-semibold mb-2 flex items-center gap-2">
                    <span>✨</span> {t('crossSpread.interpretation.sections.positive') || 'Aspects Positifs'}
                  </h4>
                  <p className="text-[#e8d4b8]/90 text-sm leading-relaxed">
                    {interp.pour}
                  </p>
                </div>

                {/* Contre - Points d'Attention */}
                <div>
                  <h4 className="text-[#ff6692] text-sm font-semibold mb-2 flex items-center gap-2">
                    <span>⚠️</span> {t('crossSpread.interpretation.sections.attention') || 'Points d\'Attention'}
                  </h4>
                  <p className="text-[#e8d4b8]/90 text-sm leading-relaxed">
                    {interp.contre}
                  </p>
                </div>

                {/* Synthèse - Conseil */}
                <div className="pt-2">
                  <h4 className="text-[#c9a87f] text-sm font-semibold mb-2 flex items-center gap-2">
                    <span>💫</span> {t('crossSpread.interpretation.sections.advice') || 'Conseil'}
                  </h4>
                  <p className="text-[#e8d4b8] text-sm leading-relaxed font-light italic">
                    {interp.synthese}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Boutons */}
      <div className="flex flex-col gap-3 items-center pt-8 relative z-10">
        <MysticalButton 
          variant="primary" 
          onClick={onBackToMode}
          className="min-h-[48px] w-full max-w-sm px-8 bg-gradient-to-r from-[#a8896f] via-[#c9a87f] to-[#a8896f] text-[#0a1420] font-semibold border-2 border-[#c9a87f]/50 shadow-[0_4px_20px_rgba(201,168,127,0.5)] hover:shadow-[0_6px_30px_rgba(201,168,127,0.7)] hover:scale-105"
        >
          ✨ {t('crossSpread.interpretation.newConsultation') || 'Nouveau Tirage'}
        </MysticalButton>

        <MysticalButton 
          variant="secondary" 
          onClick={onHome}
          className="w-full max-w-sm px-6 py-3 bg-gradient-to-r from-[#152238]/70 to-[#1a2d45]/70 border border-[#c9a87f]/30 text-[#e8d4b8]"
        >
          ← {t('common.back') || 'Retour aux Tirages'}
        </MysticalButton>
      </div>

      <style>{`
        @keyframes pulse-very-slow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.08); }
        }
        @keyframes twinkle-elegant {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.9; }
        }
        .animate-pulse-very-slow {
          animation: pulse-very-slow 5s ease-in-out infinite;
        }
        .animate-twinkle-elegant {
          animation: twinkle-elegant 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}