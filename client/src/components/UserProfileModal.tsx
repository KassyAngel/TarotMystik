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
    const map: Record<string, string> = {
      'homme': t('gender.male') || 'Homme',
      'femme': t('gender.female') || 'Femme',
      'autre': t('gender.other') || 'Autre'
    };
    return map[gender] || gender;
  };

  const getZodiacKey = (signName: string) => {
    if (!signName) return 'aries';
    const map: Record<string, string> = {
      'Aries': 'aries', 'Taurus': 'taurus', 'Gemini': 'gemini', 'Cancer': 'cancer',
      'Leo': 'leo', 'Virgo': 'virgo', 'Libra': 'libra', 'Scorpio': 'scorpio',
      'Sagittarius': 'sagittarius', 'Capricorn': 'capricorn', 'Aquarius': 'aquarius', 'Pisces': 'pisces',
      'Bélier': 'aries', 'Taureau': 'taurus', 'Gémeaux': 'gemini', 'Lion': 'leo',
      'Vierge': 'virgo', 'Balance': 'libra', 'Scorpion': 'scorpio', 'Sagittaire': 'sagittarius',
      'Capricorne': 'capricorn', 'Verseau': 'aquarius', 'Poissons': 'pisces'
    };
    return map[signName] || signName.toLowerCase();
  };

  const getZodiacDates = () => {
    if (!user.zodiacSign) return '';
    try {
      if (typeof user.zodiacSign.dates === 'string') return user.zodiacSign.dates;
      if (user.zodiacSign.dates && typeof user.zodiacSign.dates === 'object') {
        const d = user.zodiacSign.dates as any;
        if (d.start && d.end) return `${d.start.day}/${d.start.month} - ${d.end.day}/${d.end.month}`;
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
        style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(6px)' }}
        onClick={handleOverlayClick}
      >
        <div
          className="relative max-w-md w-full rounded-2xl shadow-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #0a0818 0%, #060612 60%, #080816 100%)',
            border: '1px solid rgba(139,92,246,0.30)',
            boxShadow: '0 0 60px rgba(0,0,0,0.95)',
          }}
        >
          {/* Lueur violette haut */}
          <div
            className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(139,92,246,0.20) 0%, transparent 70%)' }}
          />

          {/* Header */}
          <div className="relative p-6 text-center" style={{ borderBottom: '1px solid rgba(139,92,246,0.18)' }}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-lg transition-colors z-10"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.65)' }}
              aria-label="Fermer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Avatar — cercle violet */}
            <div
              className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-5xl"
              style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
                boxShadow: '0 0 30px rgba(139,92,246,0.40)',
              }}
            >
              {user.zodiacSign?.symbol || '✨'}
            </div>

            {/* Nom — blanc, pas jaune */}
            <h2 className="text-2xl font-bold font-serif mb-1" style={{ color: 'rgba(255,255,255,0.95)' }}>
              {user.name || 'Utilisateur'}
            </h2>

            {user.zodiacSign && (
              <p className="text-sm" style={{ color: 'rgba(167,139,250,0.75)' }}>
                {t(`zodiac.signs.${getZodiacKey(user.zodiacSign.name)}`)}
                {getZodiacDates() && ` • ${getZodiacDates()}`}
              </p>
            )}
          </div>

          {/* Infos */}
          <div className="p-6 space-y-3">
            {[
              user.birthDate && {
                icon: '🎂',
                label: t('profile.birthdate') || 'Date de naissance',
                value: formatBirthDate(user.birthDate),
              },
              user.gender && {
                icon: user.gender === 'homme' ? '♂' : user.gender === 'femme' ? '♀' : '⚥',
                label: t('profile.gender') || 'Genre',
                value: getGenderLabel(user.gender),
              },
              user.zodiacSign && {
                icon: user.zodiacSign.symbol,
                label: t('profile.zodiac') || 'Signe astrologique',
                value: t(`zodiac.signs.${getZodiacKey(user.zodiacSign.name)}`),
                sub: getZodiacDates(),
              },
            ].filter(Boolean).map((item: any, i) => (
              <div
                key={i}
                className="rounded-xl p-4"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.18)' }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl" style={{ color: 'rgba(167,139,250,0.80)' }}>{item.icon}</span>
                  <div className="flex-1">
                    <div className="text-xs mb-0.5" style={{ color: 'rgba(167,139,250,0.55)' }}>{item.label}</div>
                    <div className="font-semibold" style={{ color: 'rgba(255,255,255,0.90)' }}>{item.value}</div>
                    {item.sub && <div className="text-xs mt-0.5" style={{ color: 'rgba(167,139,250,0.45)' }}>{item.sub}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bouton modifier — violet, pas jaune */}
          <div className="px-6 pb-6">
            <button
              onClick={() => setShowEditModal(true)}
              className="w-full font-semibold py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                color: 'rgba(255,255,255,0.95)',
                boxShadow: '0 4px 20px rgba(139,92,246,0.35)',
                border: 'none',
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              {t('profile.edit') || 'Modifier mon profil'}
            </button>
          </div>
        </div>
      </div>

      {showEditModal && (
        <EditProfileModal
          isOpen={showEditModal}
          onClose={() => setShowEditModal(false)}
          onSaved={() => { setShowEditModal(false); onClose(); }}
        />
      )}
    </>
  );
}