// ============================================
// client/src/components/CardRevealModal.tsx - VERSION MOBILE OPTIMISÉE
// ============================================
import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import MysticalButton from './MysticalButton';

type CardBasedOracleType = 'loveOracle' | 'lunar' | 'runes';

interface CardRevealModalProps {
  card: any;
  oracleType: CardBasedOracleType;
  onClose: () => void;
  onShowInterpretation?: () => void;
  cardNumber?: number;
  totalCards?: number;
  originalCardName?: string;
}

export default function CardRevealModal({ 
  card, 
  oracleType, 
  onClose,
  onShowInterpretation,
  cardNumber = 1, 
  totalCards = 1,
  originalCardName
}: CardRevealModalProps) {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isLoadingLunar, setIsLoadingLunar] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 20);
  }, []);

  const normalizeForImage = (name: string): string => {
    return name
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[''\s-]/g, '');
  };

  const getTranslatedCardName = (): string => {
    const nameToUse = originalCardName || card?.name;
    if (!nameToUse) return '';
    const normalized = normalizeForImage(nameToUse);
    const translationKey = `cards.${oracleType}.${normalized}.name`;
    const translated = t(translationKey);
    return translated !== translationKey ? translated : nameToUse;
  };

  const getOracleFolderName = (): string => {
    switch(oracleType) {
      case 'lunar': return 'luneOracle';
      case 'loveOracle': return 'loveOracle';
      case 'runes': return 'runes';
      default: return 'loveOracle';
    }
  };

  const getCardImagePath = (): string => {
    const nameForImage = originalCardName || card?.name;
    if (!nameForImage) return '';
    const normalized = normalizeForImage(nameForImage);
    const folder = getOracleFolderName();
    return `/Image/${folder}/${normalized}.webp`;
  };

  const getLoadingMessage = (): string => {
    if (loadingProgress < 30) return t('loading.lunar.message1') || 'Connexion aux énergies lunaires...';
    if (loadingProgress < 60) return t('loading.lunar.message2') || 'Interprétation des cycles cosmiques...';
    if (loadingProgress < 90) return t('loading.lunar.message3') || 'Révélation de votre guidance...';
    return t('loading.lunar.message4') || 'Préparation de votre lecture...';
  };

  const handleButtonClick = () => {
    const isLastCard = cardNumber >= totalCards;
    if (oracleType === 'lunar' && isLastCard && onShowInterpretation) {
      setIsLoadingLunar(true);
      setLoadingProgress(0);
      const progressInterval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) { clearInterval(progressInterval); return 100; }
          return prev + 1.2;
        });
      }, 60);
      setTimeout(() => {
        clearInterval(progressInterval);
        onShowInterpretation();
      }, 5000);
    } else {
      onClose();
    }
  };

  const translatedCardName = getTranslatedCardName();
  const imagePath = getCardImagePath();
  const isLastCard = cardNumber >= totalCards;

  // ── LOADING LUNAIRE ──
  if (isLoadingLunar && oracleType === 'lunar') {
    return (
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        style={{ background: 'radial-gradient(circle at center, rgba(10,14,26,0.98) 0%, rgba(15,20,32,0.99) 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-twinkle-loading"
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

        <div className="relative max-w-md w-full space-y-8 px-4">
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 bg-slate-400/20 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <span className="text-8xl animate-float-slow drop-shadow-[0_0_30px_rgba(148,163,184,0.6)]">🌙</span>
                <svg className="absolute inset-0 w-32 h-32 -rotate-90" style={{ margin: '-4px' }}>
                  <circle cx="64" cy="64" r="58" stroke="rgba(148,163,184,0.2)" strokeWidth="3" fill="none" />
                  <circle
                    cx="64" cy="64" r="58"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 58}`}
                    strokeDashoffset={`${2 * Math.PI * 58 * (1 - loadingProgress / 100)}`}
                    style={{ transition: 'stroke-dashoffset 0.3s ease' }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="50%" stopColor="#a78bfa" />
                      <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-indigo-400/60 rounded-full animate-orbit"
                style={{ animationDelay: `${i * 0.5}s`, animationDuration: '4s' }}
              />
            ))}
          </div>

          <div className="text-center space-y-4">
            <p className="text-slate-300 text-lg font-light animate-fade-in-out">{getLoadingMessage()}</p>
            <div className="relative w-full max-w-xs mx-auto">
              <div className="h-1 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <span className="text-indigo-300 text-sm font-semibold">{Math.round(loadingProgress)}%</span>
              </div>
            </div>
            <div className="flex justify-center gap-2 pt-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce-loading" style={{ animationDelay: `${i * 0.15}s` }} />
              ))}
            </div>
          </div>

          <p className="text-center text-slate-500 text-xs font-light italic">
            {t('loading.lunar.subtitle') || 'Les astres alignent votre destinée...'}
          </p>
        </div>

        <style>{`
          @keyframes twinkle-loading { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
          @keyframes float-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
          @keyframes pulse-glow { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.2); } }
          @keyframes fade-in-out { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; } }
          @keyframes bounce-loading { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
          @keyframes orbit {
            0% { transform: rotate(0deg) translateX(70px) rotate(0deg); opacity: 0; }
            10% { opacity: 0.6; }
            90% { opacity: 0.6; }
            100% { transform: rotate(360deg) translateX(70px) rotate(-360deg); opacity: 0; }
          }
          .animate-twinkle-loading { animation: twinkle-loading ease-in-out infinite; }
          .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
          .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
          .animate-fade-in-out { animation: fade-in-out 2s ease-in-out infinite; }
          .animate-bounce-loading { animation: bounce-loading 1s ease-in-out infinite; }
          .animate-orbit { animation: orbit linear infinite; }
        `}</style>
      </div>
    );
  }

  // ── MODAL NORMALE — scrollable, bouton toujours visible ──
  return (
    <div 
      className="fixed inset-0 z-[100] backdrop-blur-md"
      onClick={onClose}
      style={{
        background: 'radial-gradient(circle at center, rgba(10,20,32,0.96) 0%, rgba(13,27,46,0.98) 100%)',
        // ✅ Scroll vertical si contenu dépasse l'écran
        overflowY: 'auto',
        // ✅ Padding bas = hauteur bannière (50px) + safe area iOS + marge confort
        paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 70px)',
        paddingTop: 'max(16px, env(safe-area-inset-top, 0px) + 8px)',
      }}
    >
      {/* Particules flottantes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#c9a87f] rounded-full animate-float-gentle opacity-30"
            style={{
              left: `${(i * 17 + 5) % 100}%`,
              bottom: '-10px',
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + (i % 3)}s`
            }}
          />
        ))}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-[#c9a87f] rounded-full animate-twinkle-soft"
            style={{
              top: `${(i * 31 + 7) % 100}%`,
              left: `${(i * 43 + 13) % 100}%`,
              animationDelay: `${(i * 0.2) % 3}s`
            }}
          />
        ))}
      </div>

      {/* Contenu centré avec min-height pour garantir le centrage sur grands écrans */}
      <div
        className="relative flex flex-col items-center justify-center"
        style={{ minHeight: '100%' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Lueur derrière la carte */}
        <div className="absolute w-72 h-72 bg-[#c9a87f]/8 blur-3xl rounded-full animate-pulse-very-slow pointer-events-none" />

        {/* ✅ Carte — taille réduite sur très petits écrans via clamp */}
        <div
          className={`relative transform transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
          style={{
            width: 'clamp(200px, 62vw, 280px)',
          }}
        >
          <div
            style={{
              aspectRatio: '2/3',
              width: '100%',
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(0,0,0,0.7)',
            }}
          >
            {!imageError ? (
              <>
                <img 
                  src={imagePath}
                  alt={translatedCardName}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={() => setImageError(true)}
                />
                <div className="absolute inset-4 rounded-2xl border-2 border-[#c9a87f]/50 pointer-events-none">
                  <div className="absolute inset-3 rounded-xl border border-[#a8896f]/30" />
                </div>
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2e] via-[#152238] to-[#0a1420] flex items-center justify-center">
                <div className="absolute inset-5 rounded-2xl border-2 border-[#c9a87f]/40 pointer-events-none" />
                <div className="text-center space-y-3 px-6">
                  <div className="text-[#c9a87f]/50 text-sm">✦</div>
                  <h2 className="text-[#e8d4b8] text-xl font-serif leading-tight">{translatedCardName}</h2>
                  <div className="text-[#c9a87f]/50 text-sm">✦</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Nom de la carte */}
        <div className="mt-4 text-center px-4">
          <h2 className="text-[#f0dfc0] text-lg sm:text-xl font-serif leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {translatedCardName}
          </h2>
        </div>

        {/* Compteur + dots + bouton */}
        <div className="mt-3 text-center space-y-3 px-4 w-full max-w-sm">
          {/* ✅ Texte lisible */}
          <p className="text-[#e8d4b8] text-sm font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {t('cardgame.cardRevealed')} {cardNumber} / {totalCards}
          </p>

          <div className="flex justify-center gap-2.5">
            {Array.from({ length: totalCards }).map((_, i) => (
              <div 
                key={i}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: i < cardNumber ? '#c9a87f' : 'transparent',
                  border: i < cardNumber ? 'none' : '1px solid rgba(201,168,127,0.3)',
                  boxShadow: i < cardNumber ? '0 0 8px rgba(201,168,127,0.6)' : 'none',
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>

          {/* ✅ Bouton bien visible — jamais caché */}
          <MysticalButton
            variant="primary"
            onClick={handleButtonClick}
            className="min-h-[50px] w-full max-w-[260px] px-8 bg-gradient-to-r from-[#a8896f] via-[#c9a87f] to-[#a8896f] text-[#0a1420] font-semibold text-base border border-[#c9a87f]/60 shadow-[0_4px_16px_rgba(201,168,127,0.3)] hover:shadow-[0_6px_24px_rgba(201,168,127,0.5)] hover:scale-105 transition-all duration-300"
          >
            {isLastCard ? (
              <span className="flex items-center justify-center gap-2">
                {oracleType === 'lunar' ? t('cardgame.seeInterpretation') : t('cardgame.continue')}
                <span className="text-base">{oracleType === 'lunar' ? '✦' : '→'}</span>
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                {t('cardgame.continue')}
                <span className="text-base">→</span>
              </span>
            )}
          </MysticalButton>
        </div>
      </div>

      <style>{`
        @keyframes float-gentle {
          0% { transform: translateY(0); opacity: 0.3; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
        @keyframes pulse-very-slow {
          0%, 100% { opacity: 0.12; }
          50% { opacity: 0.22; }
        }
        @keyframes twinkle-soft {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.6; }
        }
        .animate-float-gentle { animation: float-gentle 5s ease-in infinite; }
        .animate-pulse-very-slow { animation: pulse-very-slow 4s ease-in-out infinite; }
        .animate-twinkle-soft { animation: twinkle-soft 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}