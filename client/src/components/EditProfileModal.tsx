import { useState, useEffect } from 'react';
import { useUser } from '@/contexts/UserContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { getZodiacSign } from '@/data/oracleData';

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

  const inputStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(139,92,246,0.30)',
    borderRadius: '12px',
    color: 'rgba(255,255,255,0.90)',
    padding: '12px 16px',
    width: '100%',
    outline: 'none',
  };

  const selectStyle: React.CSSProperties = {
    background: '#06060f',
    border: '1px solid rgba(139,92,246,0.30)',
    borderRadius: '12px',
    color: 'rgba(255,255,255,0.90)',
    padding: '12px 8px',
    flex: 1,
    outline: 'none',
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(6px)' }}
      onClick={handleOverlayClick}
    >
      <div
        className="relative max-w-md w-full rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
        style={{
          background: 'linear-gradient(180deg, #0a0818 0%, #060612 60%, #080816 100%)',
          border: '1px solid rgba(139,92,246,0.30)',
          boxShadow: '0 0 60px rgba(0,0,0,0.95)',
        }}
      >
        {/* Lueur violette haut */}
        <div
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(139,92,246,0.18) 0%, transparent 70%)' }}
        />

        {/* Header sticky */}
        <div
          className="sticky top-0 z-10 p-5 relative"
          style={{
            background: 'linear-gradient(180deg, #0a0818 0%, #060612 100%)',
            borderBottom: '1px solid rgba(139,92,246,0.18)',
          }}
        >
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

          {/* Titre blanc, pas jaune */}
          <h2 className="text-xl font-bold font-serif" style={{ color: 'rgba(255,255,255,0.95)' }}>
            ✏️ {t('profile.edit.title') || 'Modifier mon profil'}
          </h2>
          <p className="text-sm mt-0.5" style={{ color: 'rgba(167,139,250,0.60)' }}>
            {t('profile.edit.subtitle') || 'Mettez à jour vos informations personnelles'}
          </p>
        </div>

        {/* Formulaire */}
        <div className="p-5 space-y-5">

          {/* Nom */}
          <div>
            <label className="text-sm font-semibold block mb-2" style={{ color: 'rgba(255,255,255,0.70)' }}>
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
            <label className="text-sm font-semibold block mb-2" style={{ color: 'rgba(255,255,255,0.70)' }}>
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
            <label className="text-sm font-semibold block mb-2" style={{ color: 'rgba(255,255,255,0.70)' }}>
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
                    background: gender === option.value ? 'rgba(124,58,237,0.25)' : 'rgba(255,255,255,0.04)',
                    border: gender === option.value ? '1px solid rgba(139,92,246,0.60)' : '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <span className="text-xl" style={{ color: gender === option.value ? 'rgba(196,181,253,0.90)' : 'rgba(167,139,250,0.50)' }}>
                    {option.icon}
                  </span>
                  <span className="font-medium" style={{ color: gender === option.value ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.65)' }}>
                    {option.label}
                  </span>
                  {gender === option.value && (
                    <span className="ml-auto text-sm" style={{ color: 'rgba(196,181,253,0.90)' }}>✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Boutons */}
        <div className="px-5 pb-6 flex gap-3">
          {/* Annuler — gris/blanc */}
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl font-semibold transition-all active:scale-[0.98]"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.75)',
            }}
          >
            {t('common.cancel') || 'Annuler'}
          </button>
          {/* Sauvegarder — violet */}
          <button
            onClick={handleSave}
            disabled={!name || !day || !month || !year || !gender}
            className="flex-1 py-3 rounded-xl font-bold transition-all active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
            style={{
              background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
              color: 'rgba(255,255,255,0.95)',
              boxShadow: '0 4px 20px rgba(139,92,246,0.40)',
              border: 'none',
            }}
          >
            {t('common.save') || 'Enregistrer'}
          </button>
        </div>
      </div>
    </div>
  );
}