import { useLanguage, Language } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';
import { Globe, ChevronDown, ChevronUp } from 'lucide-react';
import LegalModal from './LegalModal';
import RestorePremiumModal from './RestorePremiumModal';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPremium: () => void;
  isPremium: boolean;
}

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' }
];

export default function MenuDrawer({ isOpen, onClose, onOpenPremium, isPremium }: MenuDrawerProps) {
  const { t, language, setLanguage } = useLanguage();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<'legal' | 'privacy' | null>(null);
  const [isRestoreModalOpen, setIsRestoreModalOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (legalModal) {
          setLegalModal(null);
        } else if (isRestoreModalOpen) {
          setIsRestoreModalOpen(false);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose, legalModal, isRestoreModalOpen]);

  useEffect(() => {
    if (!isOpen) {
      setLegalModal(null);
      setIsRestoreModalOpen(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentLanguage = languages.find(l => l.code === language);

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 animate-fade-in"
        style={{ background: 'rgba(0,0,0,0.80)', backdropFilter: 'blur(4px)' }}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="fixed left-0 top-0 bottom-0 w-80 z-50 animate-slide-in-left overflow-y-auto flex flex-col"
        style={{
          background: 'linear-gradient(160deg, #100e06 0%, #0e0c04 60%, #130f06 100%)',
          border: '1px solid rgba(212,175,55,0.28)',
          borderLeft: 'none',
          boxShadow: '4px 0 40px rgba(0,0,0,0.8), 2px 0 16px rgba(212,175,55,0.06)',
        }}
      >
        {/* Lueur dorée en haut */}
        <div
          className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(212,175,55,0.12) 0%, transparent 70%)' }}
        />

        {/* Header */}
        <div
          className="relative p-5 flex items-center justify-between"
          style={{ borderBottom: '1px solid rgba(212,175,55,0.18)' }}
        >
          <h2
            className="font-serif font-bold text-2xl"
            style={{ color: '#d4af37', textShadow: '0 2px 12px rgba(212,175,55,0.30)' }}
          >
            Menu
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg transition-colors"
            style={{
              background: 'rgba(212,175,55,0.08)',
              border: '1px solid rgba(212,175,55,0.25)',
              color: 'rgba(212,175,55,0.7)',
            }}
            aria-label={t('common.close')}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav */}
        <nav className="relative p-4 space-y-2 flex-1">

          {/* Premium */}
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); onOpenPremium(); }}
            className="w-full flex items-center gap-4 p-4 rounded-xl transition-all group relative overflow-hidden"
            style={{
              background: 'rgba(212,175,55,0.08)',
              border: '1px solid rgba(212,175,55,0.35)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(212,175,55,0.14)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(212,175,55,0.08)'; }}
          >
            {isPremium && (
              <div
                className="absolute top-1.5 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(74,222,128,0.85)', color: '#052e16' }}
              >
                ✓ {t('premium.active')}
              </div>
            )}
            <span className="text-2xl group-hover:scale-110 transition-transform">⭐</span>
            <div className="flex-1 text-left">
              <div className="font-semibold" style={{ color: '#d4af37' }}>{t('premium.title')}</div>
              <div className="text-xs mt-0.5" style={{ color: 'rgba(212,175,55,0.55)' }}>{t('premium.subtitle')}</div>
            </div>
          </button>

          {/* Restaurer abonnement */}
          {!isPremium && (
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsRestoreModalOpen(true); }}
              className="w-full flex items-center gap-4 p-4 rounded-xl transition-all group"
              style={{
                background: 'rgba(212,175,55,0.04)',
                border: '1px solid rgba(212,175,55,0.18)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(212,175,55,0.08)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(212,175,55,0.04)'; }}
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">🔄</span>
              <div className="flex-1 text-left">
                <div className="font-semibold" style={{ color: '#f0e4b0' }}>
                  {t('premium.restore.title') || 'Restaurer mon abonnement'}
                </div>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(240,228,176,0.45)' }}>
                  {t('premium.restore.subtitle') || 'Déjà Premium ? Récupérez votre accès'}
                </div>
              </div>
            </button>
          )}

          {/* Langue */}
          <div className="pt-4" style={{ borderTop: '1px solid rgba(212,175,55,0.15)' }}>
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsLanguageOpen(!isLanguageOpen); }}
              className="w-full flex items-center gap-4 p-4 rounded-xl transition-all group"
              style={{
                background: 'rgba(212,175,55,0.04)',
                border: '1px solid rgba(212,175,55,0.18)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(212,175,55,0.08)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(212,175,55,0.04)'; }}
            >
              <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" style={{ color: '#d4af37' }} />
              <div className="flex-1 text-left">
                <div className="font-semibold flex items-center gap-2" style={{ color: '#f0e4b0' }}>
                  {currentLanguage?.flag} {currentLanguage?.name}
                </div>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(212,175,55,0.45)' }}>
                  {language === 'fr' && 'Changer la langue'}
                  {language === 'en' && 'Change language'}
                  {language === 'es' && 'Cambiar idioma'}
                  {language === 'de' && 'Sprache ändern'}
                  {language === 'it' && 'Cambia lingua'}
                </div>
              </div>
              {isLanguageOpen
                ? <ChevronUp className="w-4 h-4" style={{ color: 'rgba(212,175,55,0.6)' }} />
                : <ChevronDown className="w-4 h-4" style={{ color: 'rgba(212,175,55,0.6)' }} />
              }
            </button>

            {isLanguageOpen && (
              <div className="mt-2 space-y-1 pl-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setLanguage(lang.code); setIsLanguageOpen(false); }}
                    className="w-full flex items-center gap-3 p-3 rounded-lg transition-all"
                    style={{
                      background: language === lang.code ? 'rgba(212,175,55,0.12)' : 'transparent',
                      border: language === lang.code ? '1px solid rgba(212,175,55,0.40)' : '1px solid transparent',
                      color: language === lang.code ? '#d4af37' : '#f0e4b0',
                    }}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.name}</span>
                    {language === lang.code && (
                      <span className="ml-auto" style={{ color: '#d4af37' }}>✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Pages légales */}
          <div className="pt-4 space-y-1" style={{ borderTop: '1px solid rgba(212,175,55,0.15)' }}>
            <button
              onClick={() => setLegalModal('legal')}
              className="flex items-center gap-3 w-full text-left p-3 rounded-lg transition-all text-sm"
              style={{
                color: 'rgba(240,228,176,0.65)',
                border: '1px solid transparent',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(212,175,55,0.06)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,175,55,0.15)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.borderColor = 'transparent';
              }}
            >
              <span>📜</span>
              <span>{t('legal.mentions')}</span>
            </button>

            <button
              onClick={() => setLegalModal('privacy')}
              className="flex items-center gap-3 w-full text-left p-3 rounded-lg transition-all text-sm"
              style={{
                color: 'rgba(240,228,176,0.65)',
                border: '1px solid transparent',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(212,175,55,0.06)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,175,55,0.15)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.borderColor = 'transparent';
              }}
            >
              <span>🔒</span>
              <span>{t('legal.privacy')}</span>
            </button>
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 relative" style={{ borderTop: '1px solid rgba(212,175,55,0.12)' }}>
          <p className="text-xs text-center" style={{ color: 'rgba(212,175,55,0.30)' }}>
            TarotMystik v1.0
          </p>
        </div>
      </div>

      <LegalModal
        isOpen={legalModal !== null}
        onClose={() => setLegalModal(null)}
        type={legalModal || 'legal'}
      />

      <RestorePremiumModal
        isOpen={isRestoreModalOpen}
        onClose={() => setIsRestoreModalOpen(false)}
        onRestoreSuccess={() => {
          setIsRestoreModalOpen(false);
          onClose();
          window.location.reload();
        }}
      />
    </>
  );
}