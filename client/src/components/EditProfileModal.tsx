import { useState, useEffect } from 'react';
import { useUser } from '@/contexts/UserContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { getZodiacSign } from '@/data/oracleData';
import MysticalButton from '@/components/MysticalButton';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaved: () => void;
}

export default function EditProfileModal({ isOpen, onClose, onSaved }: EditProfileModalProps) {
  const { user, updateUser } = useUser();
  const { t } = useLanguage();

  const [name, setName] = useState(user?.name || '');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [gender, setGender] = useState(user?.gender || '');

  useEffect(() => {
    if (user?.birthDate) {
      try {
        const date = new Date(user.birthDate);
        setDay(date.getDate().toString());
        setMonth((date.getMonth() + 1).toString());
        setYear(date.getFullYear().toString());
      } catch (error) {
        console.error('Error parsing birth date:', error);
      }
    }
  }, [user?.birthDate]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen || !user) return null;

  const handleSave = () => {
    if (!name || !day || !month || !year || !gender) {
      alert(t('profile.edit.error') || 'Veuillez remplir tous les champs');
      return;
    }
    try {
      const birthDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      const zodiacSign = getZodiacSign(parseInt(month), parseInt(day));
      updateUser({ name, birthDate, gender, zodiacSign });
      onSaved();
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Une erreur est survenue lors de la sauvegarde');
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const dayOptions = Array.from({ length: 31 }, (_, i) => i + 1);
  const monthOptions = Array.from({ length: 12 }, (_, i) => ({ value: i + 1, label: t(`date.months.${i + 1}`) }));
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 100 }, (_, i) => currentYear - i);

  // Styles réutilisables
  const inputStyle: React.CSSProperties = {
    background: 'rgba(212,175,55,0.05)',
    border: '1px solid rgba(212,175,55,0.25)',
    borderRadius: '12px',
    color: '#f0e4b0',
    padding: '12px 16px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const selectStyle: React.CSSProperties = {
    background: '#0e0c04',
    border: '1px solid rgba(212,175,55,0.25)',
    borderRadius: '12px',
    color: '#f0e4b0',
    padding: '12px 8px',
    flex: 1,
    outline: 'none',
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(6px)' }}
      onClick={handleOverlayClick}
    >
      <div
        className="relative max-w-md w-full rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
        style={{
          background: 'linear-gradient(160deg, #100e06 0%, #0e0c04 60%, #130f06 100%)',
          border: '1px solid rgba(212,175,55,0.35)',
          boxShadow: '0 0 40px rgba(0,0,0,0.8), 0 0 20px rgba(212,175,55,0.08)',
        }}
      >
        {/* Lueur dorée en haut */}
        <div
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(212,175,55,0.10) 0%, transparent 70%)' }}
        />

        {/* Header sticky */}
        <div
          className="sticky top-0 z-10 p-5 relative"
          style={{
            background: 'linear-gradient(160deg, #100e06 0%, #0e0c04 100%)',
            borderBottom: '1px solid rgba(212,175,55,0.18)',
          }}
        >
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

          <h2 className="text-xl font-bold font-serif" style={{ color: '#d4af37' }}>
            ✏️ {t('profile.edit.title') || 'Modifier mon profil'}
          </h2>
          <p className="text-sm mt-0.5" style={{ color: 'rgba(212,175,55,0.55)' }}>
            {t('profile.edit.subtitle') || 'Mettez à jour vos informations personnelles'}
          </p>
        </div>

        {/* Formulaire */}
        <div className="p-5 space-y-5">

          {/* Nom */}
          <div>
            <label className="text-sm font-semibold block mb-2" style={{ color: 'rgba(212,175,55,0.75)' }}>
              {t('name.label') || 'Votre nom'}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
              placeholder={t('name.placeholder') || 'Entrez votre nom'}
            />
          </div>

          {/* Date de naissance */}
          <div>
            <label className="text-sm font-semibold block mb-2" style={{ color: 'rgba(212,175,55,0.75)' }}>
              {t('date.title') || 'Date de naissance'}
            </label>
            <div className="flex gap-2">
              <select value={day} onChange={(e) => setDay(e.target.value)} style={selectStyle}>
                <option value="">{t('date.day') || 'Jour'}</option>
                {dayOptions.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
              <select value={month} onChange={(e) => setMonth(e.target.value)} style={selectStyle}>
                <option value="">{t('date.month') || 'Mois'}</option>
                {monthOptions.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
              </select>
              <select value={year} onChange={(e) => setYear(e.target.value)} style={selectStyle}>
                <option value="">{t('date.year') || 'Année'}</option>
                {yearOptions.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
          </div>

          {/* Genre */}
          <div>
            <label className="text-sm font-semibold block mb-2" style={{ color: 'rgba(212,175,55,0.75)' }}>
              {t('gender.title') || 'Genre'}
            </label>
            <div className="space-y-2">
              {[
                { value: 'homme', label: t('gender.male') || 'Homme', icon: '♂' },
                { value: 'femme', label: t('gender.female') || 'Femme', icon: '♀' },
                { value: 'autre', label: t('gender.other') || 'Autre', icon: '⚥' },
              ].map(option => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setGender(option.value)}
                  className="w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200"
                  style={{
                    background: gender === option.value
                      ? 'rgba(212,175,55,0.12)'
                      : 'rgba(212,175,55,0.04)',
                    border: gender === option.value
                      ? '1px solid rgba(212,175,55,0.55)'
                      : '1px solid rgba(212,175,55,0.15)',
                  }}
                >
                  <span className="text-xl" style={{ color: gender === option.value ? '#d4af37' : 'rgba(212,175,55,0.5)' }}>
                    {option.icon}
                  </span>
                  <span
                    className="font-medium"
                    style={{ color: gender === option.value ? '#d4af37' : '#f0e4b0' }}
                  >
                    {option.label}
                  </span>
                  {gender === option.value && (
                    <span className="ml-auto text-sm" style={{ color: '#d4af37' }}>✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Boutons */}
        <div className="px-5 pb-6 flex gap-3">
          <MysticalButton variant="secondary" onClick={onClose} className="flex-1">
            {t('common.cancel') || 'Annuler'}
          </MysticalButton>
          <MysticalButton
            variant="primary"
            onClick={handleSave}
            className="flex-1"
            disabled={!name || !day || !month || !year || !gender}
          >
            {t('common.save') || 'Enregistrer'}
          </MysticalButton>
        </div>
      </div>
    </div>
  );
}