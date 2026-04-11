// client/src/pages/InterpretationPage.tsx
// ✅ v2 — étoiles useMemo (plus de Math.random() à chaque render) + scroll haut au mount

import { useMemo, useEffect } from 'react';
import SummaryCard from '@/components/SummaryCard';
import MysticalButton from '@/components/MysticalButton';
import { OracleData, OracleCard, UserSession } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';
import { getSecureRandomInt } from '@/lib/utils';
import { scrollToTop } from '@/App';

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
  shouldShowAdBeforeReading?: (oracleType: string) => Promise<boolean>;
  onReadingComplete?: (oracleType: string) => void;
}

// ✅ Données des étoiles calculées UNE SEULE FOIS hors du composant
// Pas de Math.random() dans le render — positions fixes, déterministes
const STARS_DATA = Array.from({ length: 30 }, (_, i) => ({
  // Positions pseudo-aléatoires mais stables (pas de Math.random())
  top:      ((i * 137.508) % 100),          // distribution de Fibonacci — bien répartie
  left:     ((i * 97.3 + 11) % 100),
  isLarge:  i % 5 === 0,
  isMedium: i % 3 === 0,
  delay:    `${(i * 0.22) % 3}s`,
  duration: `${2 + (i % 4) * 0.5}s`,
}));

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
  shouldShowAdBeforeReading,
  onReadingComplete,
}: InterpretationPageProps) {
  const { t } = useLanguage();

  // ✅ Scroll en haut à l'affichage de la page d'interprétation
  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToTop();
      });
    });
  }, []);

  // ── Helpers traduction ──────────────────────────────────────────────────

  const normalizeCardName = (cardName: string): string => {
    if (!cardName) return '';
    return cardName
      .toLowerCase().trim()
      .replace(/[''\s-]/g, '')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const getTranslatedCardName = (card: OracleCard): string => {
    if (!card?.name) return '';
    const key = `cards.${oracleType}.${normalizeCardName(card.name)}.name`;
    const translated = t(key);
    return translated !== key ? translated : card.name;
  };

  const getRandomCardMeaning = (
    cardName: string,
    oType: CardBasedOracleType,
    energyNumber: number,
    genderSuffix: string,
  ): string => {
    const norm = normalizeCardName(cardName);
    const energyKey = `energy${energyNumber}`;
    const vars = [1, 2, 3]
      .map(n => t(`cards.${oType}.${norm}.meaning.${energyKey}.var${n}`, { genderSuffix }))
      .filter(v => !v.includes(`cards.${oType}`) && v.trim().length > 0);
    if (vars.length > 0) return vars[getSecureRandomInt(0, vars.length - 1)];

    const fallbacks = [1, 2, 3]
      .map(n => t(`cards.${oType}.${norm}.meaning.var${n}`, { genderSuffix }))
      .filter(v => !v.includes(`cards.${oType}`) && v.trim().length > 0);
    if (fallbacks.length > 0) return fallbacks[getSecureRandomInt(0, fallbacks.length - 1)];

    return t(`cards.${oType}.${norm}.meaning`, { genderSuffix });
  };

  const getRandomGreeting = (oType: CardBasedOracleType): string => {
    const params = { name: user.name, genderSuffix: user.gender === 'femme' ? 'e' : '' };
    const keys = [
      `interpretation.${oType}.greeting`,
      `interpretation.${oType}.greeting.var1`,
      `interpretation.${oType}.greeting.var2`,
      `interpretation.${oType}.greeting.var3`,
      `interpretation.${oType}.greeting.var4`,
    ];
    const vars = keys.map(k => t(k, params)).filter(v => !v.includes('interpretation.'));
    return vars.length > 0
      ? vars[getSecureRandomInt(0, vars.length - 1)]
      : t(`interpretation.${oType}.greeting`, params);
  };

  // ── Génération du contenu d'interprétation ──────────────────────────────
  // ✅ useMemo — recalculé uniquement si les cartes ou la langue changent,
  // pas à chaque re-render provoqué par une animation parente
  const { sections, finalMessage, greeting } = useMemo(() => {
    const genderText   = t(`interpretation.gender.${user.gender || 'autre'}`);
    const genderSuffix = user.gender === 'femme' ? 'e' : '';

    if (oracleType === 'lunar' || oracle.title === 'Oracle Lunaire') {
      return { sections: [], finalMessage: '', greeting: '' };
    }

    const sections: CardSection[] = [];
    let finalMessage = '';
    let greeting = '';

    if (oracle.title === "Oracle de l'Amour" || oracleType === 'loveOracle') {
      const [card1, card2, card3] = selectedCards;

      sections.push({
        icon: '💫',
        title: `${t('interpretation.loveOracle.energy1.label')} : ${getTranslatedCardName(card1)}`,
        content: getRandomCardMeaning(card1.name, 'loveOracle', 1, genderSuffix),
      });
      sections.push({
        icon: '💕',
        title: `${t('interpretation.loveOracle.energy2.label')} : ${getTranslatedCardName(card2)}`,
        content: getRandomCardMeaning(card2.name, 'loveOracle', 2, genderSuffix),
      });
      sections.push({
        icon: '💖',
        title: `${t('interpretation.loveOracle.energy3.label')} : ${getTranslatedCardName(card3)}`,
        content: getRandomCardMeaning(card3.name, 'loveOracle', 3, genderSuffix),
      });

      // Signe du zodiaque
      const signMapping: Record<string, string> = {
        'Bélier': 'aries', 'Taureau': 'taurus', 'Gémeaux': 'gemini',
        'Cancer': 'cancer', 'Lion': 'leo', 'Vierge': 'virgo',
        'Balance': 'libra', 'Scorpion': 'scorpio', 'Sagittaire': 'sagittarius',
        'Capricorne': 'capricorn', 'Verseau': 'aquarius', 'Poissons': 'pisces',
      };
      const zodiacName = user.zodiacSign?.name
        ? (signMapping[user.zodiacSign.name]
            ? t(`zodiac.signs.${signMapping[user.zodiacSign.name]}`)
            : user.zodiacSign.name)
        : t('interpretation.fallback.zodiac');

      const templateKeys = [1, 2, 3, 4, 5].map(
        n => `interpretation.loveOracle.template.advice.var${n}`,
      );
      const templates = templateKeys
        .map(k => t(k, { name: user.name, zodiacSign: zodiacName, genderText }))
        .filter(v => !v.includes('interpretation.loveOracle'));
      const selectedTemplate = templates.length > 0
        ? templates[getSecureRandomInt(0, templates.length - 1)]
        : '';

      const themes = ['patience', 'openness', 'selfconfidence', 'clarity',
                      'lettinggo', 'authenticity', 'protection', 'action'];
      const theme = themes[getSecureRandomInt(0, themes.length - 1)];
      const adviceVars = [1, 2, 3]
        .map(n => t(`interpretation.loveOracle.advice.${theme}.var${n}`, { genderSuffix }))
        .filter(v => !v.includes('interpretation.loveOracle.advice') && v.trim().length > 0);
      const fallbackAdvices = [1, 2, 3]
        .map(n => t(`interpretation.loveOracle.advice.fallback.var${n}`, { genderSuffix }))
        .filter(v => !v.includes('interpretation.loveOracle.advice'));

      const selectedAdvice = adviceVars.length > 0
        ? adviceVars[getSecureRandomInt(0, adviceVars.length - 1)]
        : (fallbackAdvices.length > 0
            ? fallbackAdvices[getSecureRandomInt(0, fallbackAdvices.length - 1)]
            : 'Fais confiance à ton cœur, il connaît le chemin.');

      finalMessage = `${selectedTemplate} ${selectedAdvice}`;
      greeting = getRandomGreeting('loveOracle');

    } else if (oracleType === 'runes') {
      greeting = getRandomGreeting('runes');
    }

    return { sections, finalMessage, greeting };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oracleType, selectedCards, user.gender, user.name, user.zodiacSign]);

  return (
    <div className="ip-page min-h-screen flex flex-col justify-between p-2 sm:p-3 pb-safe-banner relative overflow-hidden"
      style={{ background: 'transparent' }}>

      {/* ── Halos de fond — pure CSS, aucun nœud DOM dynamique ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="ip-halo ip-halo-1" />
        <div className="ip-halo ip-halo-2" />
        <div className="ip-halo ip-halo-3" />
      </div>

      {/* ✅ Étoiles — positions fixes via STARS_DATA, zéro Math.random() au render */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {STARS_DATA.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#c9a87f]"
            style={{
              width:  s.isLarge ? '2px' : s.isMedium ? '1.5px' : '1px',
              height: s.isLarge ? '2px' : s.isMedium ? '1.5px' : '1px',
              top:    `${s.top}%`,
              left:   `${s.left}%`,
              animationDelay:    s.delay,
              animationDuration: s.duration,
              animation: `ip-twinkle ${s.duration} ease-in-out ${s.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* ── Header ── */}
      <div className="text-center pt-20 sm:pt-24 relative z-10">
        <div className="mb-4">
          <div className="inline-block px-6 py-2 rounded-full border border-[#c9a87f]/30 backdrop-blur-sm"
            style={{ background: 'linear-gradient(to right, rgba(21,34,56,0.6), rgba(26,45,69,0.8), rgba(21,34,56,0.6))' }}>
            <h1 className="text-[#e8d4b8] text-lg sm:text-xl md:text-2xl font-serif leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {t('interpretation.title.reading', { name: user.name })}
            </h1>
          </div>
        </div>
        <div className="h-px w-40 mx-auto bg-gradient-to-r from-transparent via-[#c9a87f]/50 to-transparent mb-3" />
        <p className="text-[#c9a87f]/80 text-sm sm:text-base italic font-light drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
          {greeting}
        </p>
      </div>

      {/* ── Contenu ── */}
      <div className="flex-1 flex flex-col justify-center py-6 relative z-10">
        <SummaryCard
          title={t('revelation.summary.title')}
          sections={sections}
          finalMessage={finalMessage}
          isVisible={true}
        />
      </div>

      {/* ── Boutons ── */}
      <div className="flex flex-col gap-3 items-center pb-1 mb-safe-banner relative z-10">
        <MysticalButton
          variant="primary"
          onClick={onBackToMode}
          className="w-full max-w-sm px-6 py-3 border border-[#b478dc]/25 text-[#c8a8e8] backdrop-blur-sm transition-all duration-300"
          style={{ background: 'rgba(30, 18, 64, 0.35)', borderRadius: '50px' }}
          data-testid="button-new-reading"
        >
          {t('interpretation.newConsultation')}
        </MysticalButton>

        <MysticalButton
          variant="secondary"
          onClick={onHome}
          className="min-h-[48px] w-full max-w-sm px-8 font-semibold border border-[#b478dc]/50 text-[#f0e6ff] hover:scale-105 transition-all duration-300 backdrop-blur-sm"
          style={{ background: 'rgba(120, 48, 180, 0.35)', borderRadius: '50px' }}
        >
          ← {t('common.back') || 'Retour aux Tirages'}
        </MysticalButton>
      </div>

      <style>{`
        /* ── Halos ── */
        .ip-halo {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        .ip-halo-1 {
          width: 384px; height: 384px;
          top: 0; left: 25%;
          background: rgba(26,45,69,0.30);
          animation: ip-pulse 5s ease-in-out infinite;
        }
        .ip-halo-2 {
          width: 320px; height: 320px;
          bottom: 0; right: 25%;
          background: rgba(45,62,87,0.25);
          animation: ip-pulse 5s ease-in-out 2s infinite;
        }
        .ip-halo-3 {
          width: 600px; height: 600px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(201,168,127,0.05);
        }

        /* ── Animations ── */
        @keyframes ip-pulse   { 0%,100%{opacity:.20;transform:scale(1);}    50%{opacity:.35;transform:scale(1.05);} }
        @keyframes ip-twinkle { 0%,100%{opacity:.20;}                        50%{opacity:.90;} }

        /* ── Safe area bannière AdMob ── */
        .pb-safe-banner  { padding-bottom: calc(110px + env(safe-area-inset-bottom)) !important; }
        .mb-safe-banner  { margin-bottom:  calc(70px  + env(safe-area-inset-bottom)) !important; }
        @media (min-width: 640px) {
          .pb-safe-banner { padding-bottom: calc(120px + env(safe-area-inset-bottom)) !important; }
          .mb-safe-banner { margin-bottom:  calc(80px  + env(safe-area-inset-bottom)) !important; }
        }
      `}</style>
    </div>
  );
}