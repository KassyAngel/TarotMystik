// client/src/components/CardRevealModal.tsx
// ✅ v2 — Scroll en haut au mount + étoiles useMemo + particules réduites

import { useEffect, useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import MysticalButton from './MysticalButton';
import { scrollToTop } from '@/App';

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

// ✅ Étoiles générées une seule fois, pas à chaque render
interface StarData {
  top: number;
  left: number;
  size: string;
  delay: string;
  isLarge: boolean;
}

export default function CardRevealModal({
  card,
  oracleType,
  onClose,
  onShowInterpretation,
  cardNumber = 1,
  totalCards = 1,
  originalCardName,
}: CardRevealModalProps) {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isLoadingLunar, setIsLoadingLunar] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // ✅ SCROLL EN HAUT à l'ouverture du modal
  // Double rAF pour laisser le DOM se stabiliser avant de scroller
  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToTop();
        setTimeout(() => setIsVisible(true), 20);
      });
    });
  }, []);

  // ✅ Étoiles de fond mémorisées — générées une seule fois, jamais recalculées
  const bgStars = useMemo<StarData[]>(() => {
    // ✅ 20 au lieu de 30 — suffisant visuellement, moins de DOM nodes
    return Array.from({ length: 20 }, (_, i) => ({
      top: (i * 31 + 7) % 100,
      left: (i * 43 + 13) % 100,
      size: i % 7 === 0 ? '2px' : '1px',
      delay: `${(i * 0.2) % 3}s`,
      isLarge: i % 7 === 0,
    }));
  }, []); // ✅ dépendances vides = calculé une seule fois

  // ✅ Particules flottantes mémorisées — 12 au lieu de 20
  const floatingParticles = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      left: `${(i * 17 + 5) % 100}%`,
      delay: `${i * 0.3}s`,
      duration: `${4 + (i % 3)}s`,
    }));
  }, []);

  const normalizeForImage = (name: string): string =>
    name.toLowerCase().trim().normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '').replace(/[''\s-]/g, '');

  const getTranslatedCardName = (): string => {
    const nameToUse = originalCardName || card?.name;
    if (!nameToUse) return '';
    const normalized = normalizeForImage(nameToUse);
    const key = `cards.${oracleType}.${normalized}.name`;
    const translated = t(key);
    return translated !== key ? translated : nameToUse;
  };

  const getCardImagePath = (): string => {
    const name = originalCardName || card?.name;
    if (!name) return '';
    const normalized = normalizeForImage(name);
    const folder = oracleType === 'lunar' ? 'luneOracle'
      : oracleType === 'loveOracle' ? 'loveOracle'
      : 'runes';
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
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) { clearInterval(interval); return 100; }
          return prev + 1.2;
        });
      }, 60);
      setTimeout(() => {
        clearInterval(interval);
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
        {/* ✅ Étoiles réduites : 20 au lieu de 60 */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {bgStars.map((s, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: s.size, height: s.size,
                top: `${s.top}%`, left: `${s.left}%`,
                animationDelay: s.delay,
                opacity: 0.6,
                animation: `crm-twinkle ${2 + (i % 3)}s ease-in-out ${s.delay} infinite`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-md w-full space-y-8 px-4">
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 bg-slate-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <span className="text-8xl drop-shadow-[0_0_30px_rgba(148,163,184,0.6)]"
                  style={{ animation: 'crm-float 4s ease-in-out infinite' }}>
                  🌙
                </span>
                <svg className="absolute inset-0 w-32 h-32 -rotate-90" style={{ margin: '-4px' }}>
                  <circle cx="64" cy="64" r="58" stroke="rgba(148,163,184,0.2)" strokeWidth="3" fill="none" />
                  <circle cx="64" cy="64" r="58"
                    stroke="url(#crm-gradient)" strokeWidth="3" fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 58}`}
                    strokeDashoffset={`${2 * Math.PI * 58 * (1 - loadingProgress / 100)}`}
                    style={{ transition: 'stroke-dashoffset 0.3s ease' }}
                  />
                  <defs>
                    <linearGradient id="crm-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="50%" stopColor="#a78bfa" />
                      <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-slate-300 text-lg font-light" style={{ animation: 'crm-fade 2s ease-in-out infinite' }}>
              {getLoadingMessage()}
            </p>
            <div className="relative w-full max-w-xs mx-auto">
              <div className="h-1 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                <div
                  className="h-full rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                  style={{
                    width: `${loadingProgress}%`,
                    transition: 'width 0.3s ease-out',
                    background: 'linear-gradient(to right, #6366f1, #a855f7, #ec4899)',
                  }}
                />
              </div>
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <span className="text-indigo-300 text-sm font-semibold">{Math.round(loadingProgress)}%</span>
              </div>
            </div>
            <div className="flex justify-center gap-2 pt-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-indigo-400 rounded-full"
                  style={{ animation: `crm-bounce 1s ease-in-out ${i * 0.15}s infinite` }}
                />
              ))}
            </div>
          </div>

          <p className="text-center text-slate-500 text-xs font-light italic">
            {t('loading.lunar.subtitle') || 'Les astres alignent votre destinée...'}
          </p>
        </div>

        <style>{`
          @keyframes crm-twinkle { 0%,100%{opacity:.3;} 50%{opacity:1;} }
          @keyframes crm-float   { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-15px);} }
          @keyframes crm-fade    { 0%,100%{opacity:.7;} 50%{opacity:1;} }
          @keyframes crm-bounce  { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-8px);} }
        `}</style>
      </div>
    );
  }

  // ── MODAL NORMALE ──
  return (
    <div
      className="fixed inset-0 z-[100] backdrop-blur-md"
      onClick={onClose}
      style={{
        background: 'radial-gradient(circle at center, rgba(10,20,32,0.96) 0%, rgba(13,27,46,0.98) 100%)',
        overflowY: 'auto',
        paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 70px)',
        paddingTop: 'max(16px, env(safe-area-inset-top, 0px) + 8px)',
      }}
    >
      {/* ✅ Particules flottantes mémorisées — 12 au lieu de 20 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {floatingParticles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#c9a87f] rounded-full opacity-30"
            style={{
              left: p.left,
              bottom: '-10px',
              animationDelay: p.delay,
              animationDuration: p.duration,
              animation: `crm-float-up ${p.duration} ease-in ${p.delay} infinite`,
            }}
          />
        ))}
        {/* ✅ Étoiles fixes mémorisées */}
        {bgStars.map((s, i) => (
          <div
            key={i}
            className="absolute bg-[#c9a87f] rounded-full"
            style={{
              width: s.size, height: s.size,
              top: `${s.top}%`, left: `${s.left}%`,
              animationDelay: s.delay,
              animation: `crm-twinkle-soft 3s ease-in-out ${s.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* Contenu */}
      <div
        className="relative flex flex-col items-center justify-center"
        style={{ minHeight: '100%' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Lueur derrière la carte */}
        <div
          className="absolute w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: 'rgba(201,168,127,0.08)',
            filter: 'blur(48px)',
            animation: 'crm-pulse-slow 4s ease-in-out infinite',
          }}
        />

        {/* ✅ Carte */}
        <div
          className="relative"
          style={{
            width: 'clamp(200px, 62vw, 280px)',
            transform: isVisible ? 'scale(1)' : 'scale(0.95)',
            opacity: isVisible ? 1 : 0,
            transition: 'transform 0.5s ease, opacity 0.5s ease',
          }}
        >
          <div style={{ aspectRatio: '2/3', width: '100%', borderRadius: 24, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.7)' }}>
            {!imageError ? (
              <>
                <img
                  src={imagePath}
                  alt={translatedCardName}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={() => setImageError(true)}
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-4 rounded-2xl border-2 border-[#c9a87f]/50 pointer-events-none">
                  <div className="absolute inset-3 rounded-xl border border-[#a8896f]/30" />
                </div>
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #0d1b2e, #152238)' }}>
                <div className="absolute inset-5 rounded-2xl border-2 border-[#c9a87f]/40" />
                <div className="text-center px-6 space-y-3">
                  <div className="text-[#c9a87f]/50 text-sm">✦</div>
                  <h2 className="text-[#e8d4b8] text-xl font-serif">{translatedCardName}</h2>
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
          <p className="text-[#e8d4b8] text-sm font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {t('cardgame.cardRevealed')} {cardNumber} / {totalCards}
          </p>

          <div className="flex justify-center gap-2.5">
            {Array.from({ length: totalCards }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: i < cardNumber ? '#c9a87f' : 'transparent',
                  border: i < cardNumber ? 'none' : '1px solid rgba(201,168,127,0.3)',
                  boxShadow: i < cardNumber ? '0 0 8px rgba(201,168,127,0.6)' : 'none',
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>

          <MysticalButton
            variant="primary"
            onClick={handleButtonClick}
            className="min-h-[50px] w-full max-w-[260px] px-8 bg-gradient-to-r from-[#a8896f] via-[#c9a87f] to-[#a8896f] text-[#0a1420] font-semibold text-base border border-[#c9a87f]/60 shadow-[0_4px_16px_rgba(201,168,127,0.3)] hover:shadow-[0_6px_24px_rgba(201,168,127,0.5)] hover:scale-105 transition-all duration-300"
          >
            {isLastCard ? (
              <span className="flex items-center justify-center gap-2">
                {oracleType === 'lunar' ? t('cardgame.seeInterpretation') : t('cardgame.continue')}
                <span>{oracleType === 'lunar' ? '✦' : '→'}</span>
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                {t('cardgame.continue')} <span>→</span>
              </span>
            )}
          </MysticalButton>
        </div>
      </div>

      <style>{`
        @keyframes crm-float-up   { 0%{transform:translateY(0);opacity:.3;} 50%{opacity:.5;} 100%{transform:translateY(-100vh);opacity:0;} }
        @keyframes crm-pulse-slow { 0%,100%{opacity:.12;} 50%{opacity:.22;} }
        @keyframes crm-twinkle-soft { 0%,100%{opacity:.15;} 50%{opacity:.6;} }
      `}</style>
    </div>
  );
}