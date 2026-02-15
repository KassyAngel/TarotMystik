import { useState } from 'react';
import { useUser } from '@/contexts/UserContext';
import { useLanguage } from '@/contexts/LanguageContext';
import MenuDrawer from './MenuDrawer';
import UserProfileModal from './UserProfileModal';
import PremiumModal from './PremiumModal';

interface TopBarProps {
  onOpenPremium: () => void;
  isPremium: boolean;
}

export default function TopBar({ onOpenPremium, isPremium }: TopBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);
  const { user } = useUser();
  const { t } = useLanguage();

  if (!user || !user.name) {
    return null;
  }

  const handleProfileClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      console.log('Opening profile modal, user:', user);
      setIsMenuOpen(false);
      setIsPremiumModalOpen(false);
      setTimeout(() => {
        setIsProfileOpen(true);
      }, 100);
    } catch (error) {
      console.error('Error opening profile:', error);
    }
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      console.log('Opening menu drawer');
      setIsProfileOpen(false);
      setIsPremiumModalOpen(false);
      setIsMenuOpen(true);
    } catch (error) {
      console.error('Error opening menu:', error);
    }
  };

  const handleOpenPremium = () => {
    console.log('🌟 Opening Premium Modal');
    setIsMenuOpen(false);
    setIsProfileOpen(false);
    setTimeout(() => {
      setIsPremiumModalOpen(true);
      console.log('✅ Premium Modal opened');
    }, 100);
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsProfileOpen(false);
    setIsPremiumModalOpen(false);
  };

  return (
    <>
      {/* TopBar avec titre ULTRA mis en valeur */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#0a0e1a] via-[#1a1540]/95 to-[#0a0e1a]/90 border-b border-pink-400/20 backdrop-blur-xl shadow-[0_8px_40px_rgba(236,72,153,0.4)]">
        <div className="flex items-center justify-between px-3 sm:px-4 py-3 relative">

          {/* Effet de lueur INTENSE en arrière-plan du titre */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/10 to-pink-500/5 pointer-events-none"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-full bg-gradient-to-b from-pink-500/20 via-purple-500/15 to-transparent blur-2xl pointer-events-none"></div>

          {/* Bouton Menu */}
          <button
            onClick={handleMenuClick}
            className="relative p-2 rounded-lg bg-violet-900/40 hover:bg-violet-800/50 transition-all border border-pink-400/30 hover:border-pink-300/50 shadow-[0_2px_12px_rgba(236,72,153,0.2)] hover:shadow-[0_4px_20px_rgba(236,72,153,0.4)] z-10 flex-shrink-0"
            aria-label={t('menu.open')}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-pink-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Titre ULTRA mis en valeur avec effets multiples */}
          <div className="relative flex items-center gap-2 sm:gap-3 z-10 flex-shrink min-w-0">
            {/* Étoile gauche BRILLANTE */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-amber-400/60 blur-lg rounded-full animate-pulse"></div>
              <div className="absolute inset-0 bg-pink-400/40 blur-xl rounded-full animate-pulse-slow"></div>
              <span className="relative text-amber-300 text-xl sm:text-2xl drop-shadow-[0_0_12px_rgba(251,191,36,0.8)] animate-spin-slow">✦</span>
            </div>

            {/* Titre principal MAGNIFIÉ */}
            <div className="relative">
              {/* Lueur d'arrière-plan multicouche */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-purple-500/40 to-pink-500/30 blur-2xl animate-pulse-gentle"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-amber-400/20 to-transparent blur-xl"></div>

              {/* Titre avec effets empilés */}
              <h1 className="relative text-2xl sm:text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-pink-200 via-purple-200 to-amber-100 bg-clip-text text-transparent tracking-wider drop-shadow-[0_0_30px_rgba(236,72,153,0.9)] animate-gradient-shift" 
                  style={{
                    textShadow: '0 0 20px rgba(236, 72, 153, 0.6), 0 0 40px rgba(147, 51, 234, 0.4), 0 4px 20px rgba(251, 191, 36, 0.3)'
                  }}>
                TarotMystik
              </h1>

              {/* Bordure décorative en dessous */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-pink-400/80 to-transparent"></div>
            </div>

            {/* Étoile droite BRILLANTE */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-amber-400/60 blur-lg rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-0 bg-purple-400/40 blur-xl rounded-full animate-pulse-slower"></div>
              <span className="relative text-amber-300 text-xl sm:text-2xl drop-shadow-[0_0_12px_rgba(251,191,36,0.8)] animate-spin-reverse">✦</span>
            </div>
          </div>

          {/* Bouton Profil - avec gestion des prénoms longs */}
          <button
            onClick={handleProfileClick}
            className="relative flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-full bg-violet-900/40 hover:bg-violet-800/50 transition-all hover:scale-105 border border-pink-400/30 hover:border-pink-300/50 shadow-[0_2px_12px_rgba(236,72,153,0.2)] hover:shadow-[0_4px_20px_rgba(236,72,153,0.4)] z-10 max-w-[120px] sm:max-w-[160px] flex-shrink-0"
            aria-label={t('profile.open')}
          >
            <span className="font-medium text-pink-200 text-sm sm:text-base truncate max-w-[70px] sm:max-w-[100px]">
              {user.name || 'User'}
            </span>
            <span className="text-lg sm:text-xl drop-shadow-[0_0_8px_rgba(236,72,153,0.6)] flex-shrink-0">
              {user.zodiacSign?.symbol || '✨'}
            </span>

            {/* Effet de brillance au survol */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400/0 via-purple-400/20 to-pink-400/0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </button>
        </div>

        {/* Ligne décorative BRILLANTE en bas */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-px bg-gradient-to-r from-transparent via-pink-400/80 to-transparent shadow-[0_0_10px_rgba(236,72,153,0.6)]"></div>
      </div>

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={closeAll}
        onOpenPremium={() => {
          handleOpenPremium();
        }}
        isPremium={isPremium}
      />

      {!isMenuOpen && !isPremiumModalOpen && isProfileOpen && (
        <UserProfileModal
          isOpen={isProfileOpen}
          onClose={closeAll}
        />
      )}

      {!isMenuOpen && !isProfileOpen && isPremiumModalOpen && (
        <PremiumModal
          isOpen={isPremiumModalOpen}
          onClose={closeAll}
          onPurchase={() => {
            console.log('Premium purchase completed');
            closeAll();
          }}
        />
      )}

      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-gradient-shift {
          background-size: 200% auto;
          animation: gradient-shift 6s ease infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }
        .animate-pulse-gentle {
          animation: pulse-gentle 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
      `}</style>
    </>
  );
}