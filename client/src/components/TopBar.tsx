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

  if (!user || !user.name) return null;

  const handleProfileClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      setIsMenuOpen(false);
      setIsPremiumModalOpen(false);
      setTimeout(() => setIsProfileOpen(true), 100);
    } catch (error) {
      console.error('Error opening profile:', error);
    }
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      setIsProfileOpen(false);
      setIsPremiumModalOpen(false);
      setIsMenuOpen(true);
    } catch (error) {
      console.error('Error opening menu:', error);
    }
  };

  const handleOpenPremium = () => {
    setIsMenuOpen(false);
    setIsProfileOpen(false);
    setTimeout(() => setIsPremiumModalOpen(true), 100);
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsProfileOpen(false);
    setIsPremiumModalOpen(false);
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: 'linear-gradient(to bottom, rgba(6,6,18,0.98) 0%, rgba(8,8,22,0.96) 100%)',
          borderBottom: '1px solid rgba(139,92,246,0.20)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.7)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="flex items-center justify-between px-3 sm:px-4 py-3 relative">

          {/* Lueur violette subtile */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.07) 0%, transparent 70%)' }}
          />

          {/* Bouton Menu */}
          <button
            onClick={handleMenuClick}
            className="relative z-10 flex-shrink-0 p-2 rounded-lg transition-all duration-200 active:scale-95"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(139,92,246,0.30)',
            }}
            aria-label={t('menu.open')}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="rgba(226,217,243,0.90)" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="flex-1" />

          {/* Bouton Profil */}
          <button
            onClick={handleProfileClick}
            className="relative z-10 flex-shrink-0 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full transition-all duration-200 active:scale-95 max-w-[140px] sm:max-w-[180px]"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(139,92,246,0.30)',
            }}
            aria-label={t('profile.open')}
          >
            <span
              className="font-medium text-sm sm:text-base truncate max-w-[70px] sm:max-w-[100px]"
              style={{ color: 'rgba(226,217,243,0.90)' }}
            >
              {user.name || 'User'}
            </span>
            <span
              className="text-lg sm:text-xl flex-shrink-0"
              style={{ filter: 'drop-shadow(0 0 6px rgba(212,175,55,0.5))' }}
            >
              {user.zodiacSign?.symbol || '✨'}
            </span>
          </button>
        </div>

        {/* Ligne décorative violette en bas */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px"
          style={{
            width: '60%',
            background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.50), transparent)',
          }}
        />
      </div>

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={closeAll}
        onOpenPremium={handleOpenPremium}
        isPremium={isPremium}
      />

      {!isMenuOpen && !isPremiumModalOpen && isProfileOpen && (
        <UserProfileModal isOpen={isProfileOpen} onClose={closeAll} />
      )}

      {!isMenuOpen && !isProfileOpen && isPremiumModalOpen && (
        <PremiumModal
          isOpen={isPremiumModalOpen}
          onClose={closeAll}
          onPurchase={() => closeAll()}
        />
      )}
    </>
  );
}