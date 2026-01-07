import { useState } from 'react';
import { useUser } from '@/contexts/UserContext';
import { useLanguage } from '@/contexts/LanguageContext';
import MenuDrawer from './MenuDrawer';
import UserProfileModal from './UserProfileModal';
import PremiumModal from './PremiumModal';

interface TopBarProps {
  // ❌ SUPPRIMÉ : onOpenGrimoire: () => void;
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
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/95 via-blue-950/95 to-slate-900/95 border-b border-cyan-400/20 backdrop-blur-md shadow-[0_4px_20px_rgba(34,211,238,0.15)]">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={handleMenuClick}
            className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/60 transition-all border border-cyan-400/20 hover:border-cyan-300/40"
            aria-label={t('menu.open')}
          >
            <svg className="w-6 h-6 text-cyan-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="flex items-center gap-3">
            <h1 className="text-2xl md:text-3xl font-serif bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(251,191,36,0.4)]">
              TarotMystik
            </h1>
          </div>

          <button
            onClick={handleProfileClick}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/60 hover:bg-slate-700/70 transition-all hover:scale-105 border border-cyan-400/30 hover:border-cyan-300/50 shadow-[0_2px_12px_rgba(34,211,238,0.2)]"
            aria-label={t('profile.open')}
          >
            <span className="font-medium text-cyan-100">{user.name || 'User'}</span>
            <span className="text-xl">{user.zodiacSign?.symbol || '✨'}</span>
          </button>
        </div>
      </div>

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={closeAll}
        // ❌ SUPPRIMÉ : onOpenGrimoire
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
    </>
  );
}