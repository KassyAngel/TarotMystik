import { useState, useEffect } from 'react';
import { useUser } from '@/contexts/UserContext';
import { useLanguage } from '@/contexts/LanguageContext';
import EditProfileModal from './EditProfileModal';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UserProfileModal({ isOpen, onClose }: UserProfileModalProps) {
  const { user } = useUser();
  const { t } = useLanguage();
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !showEditModal) onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, onClose, showEditModal]);

  if (!isOpen || !user) return null;

  const formatBirthDate = (dateStr: string) => {
    if (!dateStr) return '';
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
    } catch { return dateStr; }
  };

  const getGenderLabel = (gender: string) => {
    if (!gender) return '';
    const genderMap: Record<string, string> = {
      'homme': t('gender.male') || 'Homme',
      'femme': t('gender.female') || 'Femme',
      'autre': t('gender.other') || 'Autre'
    };
    return genderMap[gender] || gender;
  };

  const getZodiacKey = (signName: string) => {
    if (!signName) return 'aries';
    const zodiacMap: Record<string, string> = {
      'Aries': 'aries', 'Taurus': 'taurus', 'Gemini': 'gemini', 'Cancer': 'cancer',
      'Leo': 'leo', 'Virgo': 'virgo', 'Libra': 'libra', 'Scorpio': 'scorpio',
      'Sagittarius': 'sagittarius', 'Capricorn': 'capricorn', 'Aquarius': 'aquarius', 'Pisces': 'pisces',
      'Bélier': 'aries', 'Taureau': 'taurus', 'Gémeaux': 'gemini', 'Lion': 'leo',
      'Vierge': 'virgo', 'Balance': 'libra', 'Scorpion': 'scorpio', 'Sagittaire': 'sagittarius',
      'Capricorne': 'capricorn', 'Verseau': 'aquarius', 'Poissons': 'pisces'
    };
    return zodiacMap[signName] || signName.toLowerCase();
  };

  const getZodiacDates = () => {
    if (!user.zodiacSign) return '';
    try {
      if (typeof user.zodiacSign.dates === 'string') return user.zodiacSign.dates;
      if (user.zodiacSign.dates && typeof user.zodiacSign.dates === 'object') {
        const dates = user.zodiacSign.dates as any;
        if (dates.start && dates.end) return `${dates.start.day}/${dates.start.month} - ${dates.end.day}/${dates.end.month}`;
      }
    } catch { }
    return '';
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target === e.currentTarget && !showEditModal) onClose();
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: 'rgba(0,0,0,0.80)', backdropFilter: 'blur(6px)' }}
        onClick={handleOverlayClick}
      >
        <div
          className="relative max-w-md w-full rounded-2xl shadow-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, #100e06 0%, #0e0c04 60%, #130f06 100%)',
            border: '1px solid rgba(212,175,55,0.35)',
            boxShadow: '0 0 40px rgba(0,0,0,0.8), 0 0 20px rgba(212,175,55,0.08)',
          }}
        >
          {/* Lueur dorée en haut */}
          <div
            className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(212,175,55,0.12) 0%, transparent 70%)' }}
          />

          {/* Header */}
          <div
            className="relative p-6 text-center"
            style={{ borderBottom: '1px solid rgba(212,175,55,0.18)' }}
          >
            {/* Bouton fermer */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-lg transition-colors z-10"
              style={{ color: 'rgba(212,175,55,0.6)' }}
              aria-label={t('common.close') || 'Fermer'}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Avatar zodiacal */}
            <div
              className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-5xl shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #aa8a2e 100%)',
                boxShadow: '0 0 30px rgba(212,175,55,0.35)',
              }}
            >
              {user.zodiacSign?.symbol || '✨'}
            </div>

            <h2
              className="text-2xl font-bold font-serif mb-1"
              style={{ color: '#d4af37', textShadow: '0 0 20px rgba(212,175,55,0.4)' }}
            >
              {user.name || 'Utilisateur'}
            </h2>

            {user.zodiacSign && (
              <p className="text-sm" style={{ color: 'rgba(212,175,55,0.65)' }}>
                {t(`zodiac.signs.${getZodiacKey(user.zodiacSign.name)}`)}
                {getZodiacDates() && ` • ${getZodiacDates()}`}
              </p>
            )}
          </div>

          {/* Informations */}
          <div className="p-6 space-y-3">

            {/* Date de naissance */}
            {user.birthDate && (
              <div
                className="rounded-xl p-4"
                style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.15)' }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">🎂</span>
                  <div className="flex-1">
                    <div className="text-xs mb-0.5" style={{ color: 'rgba(212,175,55,0.55)' }}>
                      {t('profile.birthdate') || 'Date de naissance'}
                    </div>
                    <div className="font-semibold" style={{ color: '#f0e4b0' }}>
                      {formatBirthDate(user.birthDate)}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Genre */}
            {user.gender && (
              <div
                className="rounded-xl p-4"
                style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.15)' }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">
                    {user.gender === 'homme' ? '♂' : user.gender === 'femme' ? '♀' : '⚥'}
                  </span>
                  <div className="flex-1">
                    <div className="text-xs mb-0.5" style={{ color: 'rgba(212,175,55,0.55)' }}>
                      {t('profile.gender') || 'Genre'}
                    </div>
                    <div className="font-semibold" style={{ color: '#f0e4b0' }}>
                      {getGenderLabel(user.gender)}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Signe astrologique */}
            {user.zodiacSign && (
              <div
                className="rounded-xl p-4"
                style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.15)' }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{user.zodiacSign.symbol}</span>
                  <div className="flex-1">
                    <div className="text-xs mb-0.5" style={{ color: 'rgba(212,175,55,0.55)' }}>
                      {t('profile.zodiac') || 'Signe astrologique'}
                    </div>
                    <div className="font-semibold" style={{ color: '#f0e4b0' }}>
                      {t(`zodiac.signs.${getZodiacKey(user.zodiacSign.name)}`)}
                    </div>
                    {getZodiacDates() && (
                      <div className="text-xs mt-0.5" style={{ color: 'rgba(212,175,55,0.45)' }}>
                        {getZodiacDates()}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bouton modifier */}
          <div className="px-6 pb-6">
            <button
              onClick={() => setShowEditModal(true)}
              className="w-full font-semibold py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, rgba(212,175,55,0.18) 0%, rgba(180,140,30,0.22) 100%)',
                border: '1px solid rgba(212,175,55,0.45)',
                color: '#d4af37',
                boxShadow: '0 4px 20px rgba(212,175,55,0.12)',
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              {t('profile.edit') || 'Modifier mon profil'}
            </button>
          </div>

          {/* Ligne décorative bas */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px"
            style={{ width: '50%', background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)' }}
          />
        </div>
      </div>

      {showEditModal && (
        <EditProfileModal
          isOpen={showEditModal}
          onClose={() => setShowEditModal(false)}
          onSaved={() => {
            setShowEditModal(false);
            onClose();
          }}
        />
      )}
    </>
  );
}