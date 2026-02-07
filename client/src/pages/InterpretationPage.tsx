import SummaryCard from '@/components/SummaryCard';
import MysticalButton from '@/components/MysticalButton';
import { OracleData, OracleCard, UserSession } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';
import { getSecureRandomInt } from '@/lib/utils';

type CardBasedOracleType = 'loveOracle' | 'lunar' | 'runes';

interface CardSection {
  icon: string;
  title: string;
  content: string;
}

interface InterpretationPageProps {
  user: UserSession;
  oracle: OracleData;
  oracleType: CardBasedOracleType;
  selectedCardIndices: number[];
  selectedCards: OracleCard[];
  onBack: () => void;
  onHome: () => void;
  onBackToMode: () => void;
  onSaveReading?: (reading: any) => Promise<void>;
  shouldShowAdBeforeReading?: (oracleType: string) => Promise<boolean>; // ✅ AJOUTÉ
  onReadingComplete?: (oracleType: string) => void; // ✅ AJOUTÉ
}

export default function InterpretationPage({
  user,
  oracle,
  oracleType,
  selectedCardIndices,
  selectedCards,
  onBack,
  onHome,
  onBackToMode,
  onSaveReading,
  shouldShowAdBeforeReading, // ✅ AJOUTÉ
  onReadingComplete // ✅ AJOUTÉ
}: InterpretationPageProps) {
  const { t } = useLanguage();

  const normalizeCardName = (cardName: string): string => {
    if (!cardName) return '';
    return cardName
      .toLowerCase()
      .trim()
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

  const getRandomCardMeaning = (
    cardName: string, 
    oType: CardBasedOracleType,
    energyNumber: number,
    genderSuffix: string
  ): string => {
    const normalizedName = normalizeCardName(cardName);
    const energyKey = `energy${energyNumber}`;

    const var1Key = `cards.${oType}.${normalizedName}.meaning.${energyKey}.var1`;
    const var2Key = `cards.${oType}.${normalizedName}.meaning.${energyKey}.var2`;
    const var3Key = `cards.${oType}.${normalizedName}.meaning.${energyKey}.var3`;

    const var1 = t(var1Key, { genderSuffix });
    const var2 = t(var2Key, { genderSuffix });
    const var3 = t(var3Key, { genderSuffix });

    const variations = [var1, var2, var3].filter(v => {
      const isValid = !v.includes(`cards.${oType}`) && v.trim().length > 0;
      return isValid;
    });

    if (variations.length > 0) {
      const selected = variations[getSecureRandomInt(0, variations.length - 1)];
      return selected;
    }

    const fallbackVar1 = t(`cards.${oType}.${normalizedName}.meaning.var1`, { genderSuffix });
    const fallbackVar2 = t(`cards.${oType}.${normalizedName}.meaning.var2`, { genderSuffix });
    const fallbackVar3 = t(`cards.${oType}.${normalizedName}.meaning.var3`, { genderSuffix });

    const fallbackVariations = [fallbackVar1, fallbackVar2, fallbackVar3].filter(v => 
      !v.includes(`cards.${oType}`) && v.trim().length > 0
    );

    if (fallbackVariations.length > 0) {
      return fallbackVariations[getSecureRandomInt(0, fallbackVariations.length - 1)];
    }

    const baseMeaning = t(`cards.${oType}.${normalizedName}.meaning`, { genderSuffix });
    return baseMeaning;
  };

  const getRandomGreeting = (oType: CardBasedOracleType): string => {
    const greetingKeys = [
      `interpretation.${oType}.greeting`,
      `interpretation.${oType}.greeting.var1`,
      `interpretation.${oType}.greeting.var2`,
      `interpretation.${oType}.greeting.var3`,
      `interpretation.${oType}.greeting.var4`
    ];

    const variations = greetingKeys
      .map(key => t(key, { name: user.name, genderSuffix: user.gender === 'femme' ? 'e' : '' }))
      .filter(v => !v.includes('interpretation.'));

    if (variations.length > 0) {
      return variations[getSecureRandomInt(0, variations.length - 1)];
    }

    return t(`interpretation.${oType}.greeting`, { name: user.name });
  };

  const generateInterpretationSections = () => {
    const genderText = t(`interpretation.gender.${user.gender || 'autre'}`);
    const genderSuffix = user.gender === 'femme' ? 'e' : '';

    const getTranslatedZodiacName = (): string => {
      if (!user.zodiacSign?.name) return '';
      const signMapping: Record<string, string> = {
        'Bélier': 'aries', 'Taureau': 'taurus', 'Gémeaux': 'gemini',
        'Cancer': 'cancer', 'Lion': 'leo', 'Vierge': 'virgo',
        'Balance': 'libra', 'Scorpion': 'scorpio', 'Sagittaire': 'sagittarius',
        'Capricorne': 'capricorn', 'Verseau': 'aquarius', 'Poissons': 'pisces'
      };
      const englishKey = signMapping[user.zodiacSign.name];
      return englishKey ? t(`zodiac.signs.${englishKey}`) : user.zodiacSign.name;
    };

    const zodiacName = getTranslatedZodiacName();
    const fallbackZodiac = zodiacName || t('interpretation.fallback.zodiac');

    const sections: CardSection[] = [];
    let finalMessage = '';
    let greeting = '';

    if (oracleType === 'lunar' || oracle.title === 'Oracle Lunaire') {
      return { sections: [], finalMessage: '', greeting: '' };
    }

    if (oracle.title === 'Oracle de l\'Amour' || oracleType === 'loveOracle') {
      const card1 = selectedCards[0];
      const card2 = selectedCards[1];
      const card3 = selectedCards[2];

      const card1Name = getTranslatedCardName(card1);
      const card2Name = getTranslatedCardName(card2);
      const card3Name = getTranslatedCardName(card3);

      sections.push({
        icon: '💫',
        title: `${t('interpretation.loveOracle.energy1.label')} : ${card1Name}`,
        content: getRandomCardMeaning(card1.name, 'loveOracle', 1, genderSuffix)
      });

      sections.push({
        icon: '💕',
        title: `${t('interpretation.loveOracle.energy2.label')} : ${card2Name}`,
        content: getRandomCardMeaning(card2.name, 'loveOracle', 2, genderSuffix)
      });

      sections.push({
        icon: '💖',
        title: `${t('interpretation.loveOracle.energy3.label')} : ${card3Name}`,
        content: getRandomCardMeaning(card3.name, 'loveOracle', 3, genderSuffix)
      });

      const templateKeys = [
        'interpretation.loveOracle.template.advice.var1',
        'interpretation.loveOracle.template.advice.var2',
        'interpretation.loveOracle.template.advice.var3',
        'interpretation.loveOracle.template.advice.var4',
        'interpretation.loveOracle.template.advice.var5'
      ];

      const templates = templateKeys
        .map(key => t(key, { name: user.name, zodiacSign: fallbackZodiac, genderText }))
        .filter(v => !v.includes('interpretation.loveOracle'));

      const selectedTemplate = templates.length > 0 
        ? templates[getSecureRandomInt(0, templates.length - 1)]
        : '';

      const getThematicAdvice = (): string => {
        const themes = [
          'patience', 'openness', 'selfconfidence', 'clarity',
          'lettinggo', 'authenticity', 'protection', 'action'
        ];

        const selectedTheme = themes[getSecureRandomInt(0, themes.length - 1)];

        const var1 = t(`interpretation.loveOracle.advice.${selectedTheme}.var1`, { genderSuffix });
        const var2 = t(`interpretation.loveOracle.advice.${selectedTheme}.var2`, { genderSuffix });
        const var3 = t(`interpretation.loveOracle.advice.${selectedTheme}.var3`, { genderSuffix });

        const variations = [var1, var2, var3].filter(v => 
          !v.includes('interpretation.loveOracle.advice') && v.trim().length > 0
        );

        if (variations.length > 0) {
          const selected = variations[getSecureRandomInt(0, variations.length - 1)];
          return selected;
        }

        const fallbackAdvices = [
          t('interpretation.loveOracle.advice.fallback.var1', { genderSuffix }),
          t('interpretation.loveOracle.advice.fallback.var2', { genderSuffix }),
          t('interpretation.loveOracle.advice.fallback.var3', { genderSuffix })
        ].filter(v => !v.includes('interpretation.loveOracle.advice'));

        return fallbackAdvices.length > 0 
          ? fallbackAdvices[getSecureRandomInt(0, fallbackAdvices.length - 1)]
          : 'Fais confiance à ton cœur, il connaît le chemin.';
      };

      const selectedAdvice = getThematicAdvice();

      finalMessage = selectedTemplate + ' ' + selectedAdvice;
      greeting = getRandomGreeting('loveOracle');
    }

    else if (oracleType === 'runes') {
      greeting = getRandomGreeting('runes');
    }

    return { sections, finalMessage, greeting };
  };

  const { sections, finalMessage, greeting } = generateInterpretationSections();

  return (
      <div className="interpretation-page min-h-screen flex flex-col justify-between p-2 sm:p-3 pb-safe-banner bg-gradient-to-b from-[#0a1420] via-[#0d1b2e] to-[#0a1420] relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1a2d45]/30 rounded-full blur-3xl animate-pulse-very-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#2d3e57]/25 rounded-full blur-3xl animate-pulse-very-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a87f]/5 rounded-full blur-3xl"></div>
      </div>

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

      <div className="interpretation-header text-center pt-20 sm:pt-24 relative z-10">
        <div className="mb-4">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#152238]/60 via-[#1a2d45]/80 to-[#152238]/60 rounded-full border border-[#c9a87f]/30 backdrop-blur-sm">
            <h1 className="text-[#e8d4b8] text-lg sm:text-xl md:text-2xl font-serif leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {t('interpretation.title.reading', { name: user.name })}
            </h1>
          </div>
        </div>

        <div className="h-px w-40 mx-auto bg-gradient-to-r from-transparent via-[#c9a87f]/50 to-transparent mb-3"></div>

        <p className="text-[#c9a87f]/80 text-sm sm:text-base italic font-light drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
          {greeting}
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-center py-6 relative z-10">
        <SummaryCard
          title={t('revelation.summary.title')}
          sections={sections}
          finalMessage={finalMessage}
          isVisible={true}
        />
      </div>

        <div className="interpretation-controls flex flex-col gap-3 items-center pb-1 mb-safe-banner relative z-10">
        <MysticalButton 
          variant="primary" 
          onClick={onBackToMode} 
          className="min-h-[48px] w-full max-w-sm px-8 bg-gradient-to-r from-[#a8896f]/90 via-[#c9a87f] to-[#a8896f]/90 text-[#0a1420] font-semibold border-2 border-[#c9a87f]/40 shadow-[0_4px_20px_rgba(201,168,127,0.4)] hover:shadow-[0_6px_30px_rgba(201,168,127,0.6)] hover:scale-105 transition-all duration-300"
          data-testid="button-new-reading"
        >
          ✨ {t('interpretation.newConsultation')}
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
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.35; transform: scale(1.05); }
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

          /* ✅ AJOUT pour bannière AdMob */
          .pb-safe-banner {
            padding-bottom: calc(110px + env(safe-area-inset-bottom)) !important;
          }
          .mb-safe-banner {
            margin-bottom: calc(70px + env(safe-area-inset-bottom)) !important;
          }

          @media (min-width: 640px) {
            .pb-safe-banner {
              padding-bottom: calc(120px + env(safe-area-inset-bottom)) !important;
            }
            .mb-safe-banner {
              margin-bottom: calc(80px + env(safe-area-inset-bottom)) !important;
            }
          }
        `}</style>
    </div>
  );
}