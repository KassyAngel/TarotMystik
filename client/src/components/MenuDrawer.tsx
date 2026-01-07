import { useLanguage, Language } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';
import { Globe, ChevronDown, ChevronUp } from 'lucide-react';
import LegalModal from './LegalModal';
import RestorePremiumModal from './RestorePremiumModal';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  // ❌ SUPPRIMÉ : onOpenGrimoire: () => void;
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
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 animate-fade-in"
        onClick={onClose}
      />

      <div className="fixed left-0 top-0 bottom-0 w-80 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 shadow-2xl z-50 transform transition-transform duration-300 animate-slide-in-left overflow-y-auto border-r border-cyan-400/20">

        <div className="p-6 border-b border-cyan-400/20">
          <div className="flex items-center justify-between">
            <h2 className="text-amber-300 font-serif font-bold text-2xl drop-shadow-[0_2px_8px_rgba(251,191,36,0.4)]">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/60 transition-colors border border-cyan-400/20"
              aria-label={t('common.close')}
            >
              <svg className="w-6 h-6 text-cyan-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <nav className="p-4 space-y-2">

          {/* ❌ SUPPRIMÉ : Bouton Grimoire */}

          {/* Premium */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onOpenPremium();
            }}
            className="w-full flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-amber-900/40 to-yellow-900/40 hover:from-amber-800/50 hover:to-yellow-800/50 transition-all group relative overflow-hidden border border-amber-400/30 hover:border-amber-300/50"
          >
            {isPremium && (
              <div className="absolute top-1 right-1 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                ✓ {t('premium.active')}
              </div>
            )}
            <div className="text-3xl group-hover:scale-110 transition-transform">⭐</div>
            <div className="flex-1 text-left">
              <div className="text-amber-200 font-semibold">{t('premium.title')}</div>
              <div className="text-amber-300/70 text-xs">{t('premium.subtitle')}</div>
            </div>
          </button>

          {!isPremium && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsRestoreModalOpen(true);
              }}
              className="w-full flex items-center gap-4 p-4 rounded-xl bg-blue-900/30 hover:bg-blue-800/40 transition-all group border border-blue-400/30 hover:border-blue-300/50"
            >
              <div className="text-3xl group-hover:scale-110 transition-transform">🔄</div>
              <div className="flex-1 text-left">
                <div className="text-blue-200 font-semibold">
                  {t('premium.restore.title') || 'Restaurer mon abonnement'}
                </div>
                <div className="text-blue-300/70 text-xs">
                  {t('premium.restore.subtitle') || 'Déjà Premium ? Récupérez votre accès'}
                </div>
              </div>
            </button>
          )}

          {/* Langue */}
          <div className="pt-4 border-t border-cyan-400/20">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsLanguageOpen(!isLanguageOpen);
              }}
              className="w-full flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 hover:bg-slate-700/50 transition-all group border border-cyan-400/20 hover:border-cyan-300/40"
            >
              <Globe className="w-6 h-6 text-cyan-200 group-hover:scale-110 transition-transform" />
              <div className="flex-1 text-left">
                <div className="text-cyan-100 font-semibold flex items-center gap-2">
                  {currentLanguage?.flag} {currentLanguage?.name}
                </div>
                <div className="text-slate-300 text-xs">
                  {language === 'fr' && 'Changer la langue'}
                  {language === 'en' && 'Change language'}
                  {language === 'es' && 'Cambiar idioma'}
                  {language === 'de' && 'Sprache ändern'}
                  {language === 'it' && 'Cambia lingua'}
                </div>
              </div>
              {isLanguageOpen ? (
                <ChevronUp className="w-5 h-5 text-cyan-300" />
              ) : (
                <ChevronDown className="w-5 h-5 text-cyan-300" />
              )}
            </button>

            {isLanguageOpen && (
              <div className="mt-2 space-y-1 pl-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setLanguage(lang.code);
                      setIsLanguageOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      language === lang.code
                        ? 'bg-cyan-900/50 text-amber-300 border border-cyan-400/30'
                        : 'hover:bg-slate-800/40 text-cyan-200 border border-transparent'
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.name}</span>
                    {language === lang.code && (
                      <span className="ml-auto text-amber-300">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Pages légales */}
          <div className="pt-4 border-t border-cyan-400/20 space-y-1">
            <button
              onClick={() => setLegalModal('legal')}
              className="flex items-center gap-3 w-full text-left p-3 rounded-lg hover:bg-slate-800/40 transition-colors text-slate-300 text-sm border border-transparent hover:border-cyan-400/20"
            >
              <span>📜</span>
              <span>{t('legal.mentions')}</span>
            </button>

            <button
              onClick={() => setLegalModal('privacy')}
              className="flex items-center gap-3 w-full text-left p-3 rounded-lg hover:bg-slate-800/40 transition-colors text-slate-300 text-sm border border-transparent hover:border-cyan-400/20"
            >
              <span>🔒</span>
              <span>{t('legal.privacy')}</span>
            </button>
          </div>
        </nav>

        <div className="p-4 border-t border-cyan-400/20 mt-4">
          <p className="text-slate-400 text-xs text-center">
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