// client/src/pages/OracleSelection.tsx
// ✅ CORRECTION: Pub interstitielle à CHAQUE clic sur la roue

import OracleCard from '@/components/OracleCard';
import MysticalButton from '@/components/MysticalButton';
import AdLoadingScreen from '@/components/AdLoadingScreen';
import { UserSession } from '@shared/schema';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSound } from '@/hooks/useSound';
import { useState } from 'react';
import { showInterstitialAd } from '@/admobService';
import wizardImage from '/Image/wizard.jpg';
import roueMystikImage from '/Image/RoueMystik.jpg';
import loveOracleImage from '/Image/Tarotamour-icone.jpg';
import lunarOracleImage from '/Image/Oraclelune-icone.jpg';
import loveCalculatorImage from '/Image/Compatibilite-icone.jpg';

interface OracleSelectionProps {
  user: UserSession;
  onOracleSelect: (oracleType: string) => void;
  onBack: () => void;
  onHome: () => void;
  isPremium?: boolean;
}

interface Oracle {
  id: string;
  title: string;
  description: string;
  icon?: string;
  useImage?: boolean;
  imageSrc?: string;
  imageStyle?: string;
  badge?: string;
  badgeColor?: string;
  gradient: string;
  border: string;
  hoverBorder: string;
  shadow: string;
  hoverShadow: string;
  iconGlow: string;
  iconBg: string;
  iconBorder: string;
  titleColor: string;
  descColor: string;
}

export default function OracleSelection({
  onOracleSelect,
  onBack,
  onHome,
  isPremium = false
}: OracleSelectionProps) {
  const [selectedOracle, setSelectedOracle] = useState('');
  const [isLoadingAd, setIsLoadingAd] = useState(false);
  const [showLongAdMessage, setShowLongAdMessage] = useState(false);
  const { t } = useLanguage();
  const playFlipSound = useSound('Flip-card.wav');

  const oracles: Oracle[] = [
    {
      id: 'loveOracle',
      title: t('oracle.loveOracle.title'),
      description: t('oracle.loveOracle.description'),
      useImage: true,
      imageSrc: loveOracleImage,
      gradient: 'from-purple-900/30 via-violet-800/25 to-purple-900/30',
      border: 'border-purple-400/70',
      hoverBorder: 'hover:border-purple-300',
      shadow: 'shadow-[0_8px_32px_rgba(167,139,250,0.3)]',
      hoverShadow: 'hover:shadow-[0_12px_48px_rgba(167,139,250,0.5)]',
      iconGlow: 'bg-purple-400/40',
      iconBg: 'bg-gradient-to-br from-purple-900/70 to-violet-900/70',
      iconBorder: 'border-purple-400/50',
      titleColor: 'text-purple-100',
      descColor: 'text-purple-200/90'
    },
    {
      id: 'lunar',
      title: t('oracle.lunar.title') || 'Oracle Lunaire',
      description: t('oracle.lunar.description') || 'Les phases de la Lune révèlent votre chemin',
      useImage: true,
      imageSrc: lunarOracleImage,
      gradient: 'from-blue-900/30 via-indigo-800/25 to-blue-900/30',
      border: 'border-blue-400/70',
      hoverBorder: 'hover:border-blue-300',
      shadow: 'shadow-[0_8px_32px_rgba(96,165,250,0.3)]',
      hoverShadow: 'hover:shadow-[0_12px_48px_rgba(96,165,250,0.5)]',
      iconGlow: 'bg-blue-400/40',
      iconBg: 'bg-gradient-to-br from-blue-900/70 to-indigo-900/70',
      iconBorder: 'border-blue-400/50',
      titleColor: 'text-blue-100',
      descColor: 'text-blue-200/90'
    },
    {
      id: 'wizard',
      title: t('wizard.title') || '🧙‍♂️ Azraël le Voyant',
      description: t('oracle.wizard.description') || 'Consultez le grand magicien pour révéler votre destinée',
      useImage: true,
      imageSrc: wizardImage,
      imageStyle: 'scale-150 object-top',
      gradient: 'from-indigo-900/30 via-purple-800/25 to-indigo-900/30',
      border: 'border-indigo-400/70',
      hoverBorder: 'hover:border-indigo-300',
      shadow: 'shadow-[0_8px_32px_rgba(99,102,241,0.3)]',
      hoverShadow: 'hover:shadow-[0_12px_48px_rgba(99,102,241,0.5)]',
      iconGlow: 'bg-indigo-400/40',
      iconBg: 'bg-gradient-to-br from-indigo-900/70 to-purple-900/70',
      iconBorder: 'border-indigo-400/50',
      titleColor: 'text-indigo-100',
      descColor: 'text-indigo-200/90'
    },
    {
      id: 'loveCalculator',
      title: t('oracle.loveCalculator.title') || 'Calculatrice Amoureuse',
      description: t('oracle.loveCalculator.description') || 'Compatibilité entre deux prénoms',
      useImage: true,
      imageSrc: loveCalculatorImage,
      badge: t('oracle.loveCalculator.badge') || 'NOUVEAU',
      badgeColor: 'from-fuchsia-500 via-purple-400 to-fuchsia-500',
      gradient: 'from-fuchsia-900/30 via-purple-800/25 to-fuchsia-900/30',
      border: 'border-fuchsia-400/70',
      hoverBorder: 'hover:border-fuchsia-300',
      shadow: 'shadow-[0_8px_32px_rgba(192,132,252,0.3)]',
      hoverShadow: 'hover:shadow-[0_12px_48px_rgba(192,132,252,0.5)]',
      iconGlow: 'bg-fuchsia-400/40',
      iconBg: 'bg-gradient-to-br from-fuchsia-900/70 to-purple-900/70',
      iconBorder: 'border-fuchsia-400/50',
      titleColor: 'text-fuchsia-100',
      descColor: 'text-fuchsia-200/90'
    }
  ];

  // ✅ FIX: Gérer le clic sur un oracle normal
  const handleOracleClick = (oracleId: string) => {
    playFlipSound();
    setSelectedOracle(oracleId);
    setTimeout(() => {
      onOracleSelect(oracleId);
    }, 500);
  };

  // ✅ FIX: Gérer le clic sur la ROUE avec pub interstitielle
  const handleWheelClick = async () => {
    playFlipSound();
    setSelectedOracle('wheel');

    // Si Premium, pas de pub
    if (isPremium) {
      console.log('👑 [WHEEL] Premium → Pas de pub');
      setTimeout(() => onOracleSelect('wheel'), 500);
      return;
    }

    // Afficher la pub interstitielle AVANT de naviguer
    console.log('📺 [WHEEL] Affichage pub interstitielle...');

    let messageTimeoutId: NodeJS.Timeout | null = null;

    try {
      const adPromise = showInterstitialAd('wheel_entry');

      const loadingTimeoutId = setTimeout(() => {
        console.log('⏳ [WHEEL] Affichage loading screen');
        setIsLoadingAd(true);

        messageTimeoutId = setTimeout(() => {
          console.log('💬 [WHEEL] Message pub longue');
          setShowLongAdMessage(true);
        }, 45000);
      }, 500);

      await adPromise;

      clearTimeout(loadingTimeoutId);
      if (messageTimeoutId) clearTimeout(messageTimeoutId);

      setIsLoadingAd(false);
      setShowLongAdMessage(false);

      console.log('✅ [WHEEL] Pub terminée → Navigation');
      setTimeout(() => onOracleSelect('wheel'), 300);

    } catch (error) {
      console.error('❌ [WHEEL] Erreur pub:', error);
      if (messageTimeoutId) clearTimeout(messageTimeoutId);
      setIsLoadingAd(false);
      setShowLongAdMessage(false);

      // Continuer même en cas d'erreur
      setTimeout(() => onOracleSelect('wheel'), 300);
    }
  };

  // ✅ Afficher le loading screen si pub en cours
  if (isLoadingAd) {
    return <AdLoadingScreen showLongMessage={showLongAdMessage} adType="interstitial" />;
  }

  return (
    <div className="main-content w-full min-h-screen flex flex-col p-3 sm:p-4 pt-14 sm:pt-16 pb-4">
      {/* Header */}
      <div className="text-center mb-4 sm:mb-6">
        <div className="flex justify-center mb-3">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/30 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl sm:text-4xl text-cyan-100 drop-shadow-[0_0_24px_rgba(103,232,249,0.9)] filter brightness-110">✦</span>
            </div>
          </div>
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-100 via-blue-100 to-purple-100 bg-clip-text text-transparent mb-2 tracking-wide drop-shadow-[0_0_30px_rgba(147,197,253,0.3)]">
          {t('oracle.selection.title') || 'Choisissez Votre Oracle'}
        </h1>

        <p className="text-slate-200/90 text-xs sm:text-sm max-w-lg mx-auto font-light leading-relaxed px-3">
          {t('oracle.subtitle')}
        </p>

        <div className="flex items-center justify-center gap-3 mt-3">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-cyan-300/60 to-blue-400/40"></div>
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/20 blur-md rounded-full"></div>
            <span className="relative text-cyan-200/90 text-base">✦</span>
          </div>
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent via-cyan-300/60 to-blue-400/40"></div>
        </div>
      </div>

      {/* Oracles */}
      <div className="flex-1 flex items-center justify-center px-2">
        <div className="w-full max-w-5xl space-y-3 sm:space-y-4">

          {/* Grid 2x2 */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-3">
            {oracles.map((oracle) => (
              <div
                key={oracle.id}
                onClick={() => handleOracleClick(oracle.id)}
                className={`relative cursor-pointer group rounded-3xl p-4 sm:p-5 transition-all duration-500
                  bg-gradient-to-br ${oracle.gradient}
                  border-2 ${oracle.border} ${oracle.hoverBorder}
                  ${oracle.shadow} ${oracle.hoverShadow}
                  ${selectedOracle === oracle.id ? 'scale-[1.03]' : 'hover:scale-[1.03]'}
                  backdrop-blur-xl
                  before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 before:rounded-3xl`}
                style={{ overflow: 'visible' }}
              >
                {oracle.badge && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 max-w-[90%]">
                    <div className={`bg-gradient-to-r ${oracle.badgeColor} text-white px-3 sm:px-3.5 py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wide shadow-lg border border-purple-300/40 whitespace-nowrap`}>
                      <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">💕 {oracle.badge}</span>
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  <div className="absolute top-2 right-2 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-3 left-3 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>

                <div className="relative flex flex-col items-center text-center">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 mb-3 group-hover:scale-110 transition-transform duration-500">
                    <div className={`absolute inset-0 ${oracle.iconGlow} rounded-full blur-2xl animate-pulse`}></div>
                    <div className={`absolute inset-0 ${oracle.iconBg} rounded-full border-2 ${oracle.iconBorder} flex items-center justify-center shadow-inner overflow-hidden`}>
                      {oracle.useImage && oracle.imageSrc ? (
                        <img 
                          src={oracle.imageSrc}
                          alt={oracle.title}
                          className={`w-full h-full object-cover ${oracle.imageStyle || ''}`}
                          style={{
                            filter: 'brightness(1.1) contrast(1.1) drop-shadow(0 2px 8px rgba(0,0,0,0.4))'
                          }}
                        />
                      ) : (
                        <span className="text-3xl sm:text-4xl filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                          {oracle.icon || ''}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className={`font-bold text-sm sm:text-base lg:text-lg mb-1.5 tracking-wide ${oracle.titleColor} drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]`}>
                    {oracle.title}
                  </h3>

                  <p className={`${oracle.descColor} text-xs sm:text-sm font-light leading-snug`}>
                    {oracle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Roue - Carte horizontale */}
          <div className="relative">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-amber-400/90 via-yellow-300/90 to-amber-400/90 text-slate-900 px-4 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest shadow-lg border border-amber-200/40">
                <span className="drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]">✦ BONUS ✦</span>
              </div>
            </div>

            <div
              onClick={handleWheelClick}
              className={`relative cursor-pointer group rounded-3xl p-5 sm:p-6 
                bg-gradient-to-br from-slate-900/40 via-blue-900/30 to-slate-900/40
                border-2 border-amber-400/60 hover:border-amber-300/80
                shadow-[0_8px_32px_rgba(251,191,36,0.25)] hover:shadow-[0_12px_48px_rgba(251,191,36,0.4)]
                backdrop-blur-xl overflow-hidden
                transition-all duration-500
                ${selectedOracle === 'wheel' ? 'scale-[1.02]' : 'hover:scale-[1.02]'}
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

              <div className="absolute top-3 right-4 w-1 h-1 bg-amber-300/50 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-amber-200/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 right-8 w-1 h-1 bg-amber-300/45 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>

              <div className="relative flex items-center gap-4 sm:gap-6">
                <div className="relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12">
                  <div className="absolute inset-0 bg-amber-400/35 rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-blue-900/80 rounded-full border-2 border-amber-400/50 flex items-center justify-center shadow-inner overflow-hidden">
                    <img 
                      src={roueMystikImage}
                      alt="Roue de la Destinée"
                      className="w-full h-full object-cover"
                      style={{
                        filter: 'brightness(1.1) contrast(1.1) drop-shadow(0 2px 8px rgba(0,0,0,0.4))'
                      }}
                    />
                  </div>
                </div>

                <div className="text-left flex-1">
                  <div className="text-amber-100 font-bold text-lg sm:text-xl lg:text-2xl mb-1.5 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                    {t('oracle.wheel.title') || 'Roue de la Destinée'}
                  </div>
                  <div className="text-slate-300/90 text-sm sm:text-base font-light leading-relaxed">
                    {t('oracle.wheel.shortDescription') || 'Découvrez votre destin mystique'}
                  </div>
                </div>

                <div className="hidden sm:block relative flex-shrink-0 w-12 h-12">
                  <div className="absolute inset-0 bg-amber-300/25 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.7s' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl text-amber-300/70">✦</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bouton retour */}
      <div className="text-center pt-4 mt-3">
        <div className="flex justify-center max-w-xs mx-auto px-3">
          <MysticalButton
            variant="secondary"
            onClick={onBack}
            className="w-full min-h-[48px] text-base"
          >
            ← {t('oracle.back')}
          </MysticalButton>
        </div>
      </div>
    </div>
  );
}