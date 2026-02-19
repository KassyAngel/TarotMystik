import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LegalModal from "./LegalModal";

export default function LegalMenu() {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState<'legal' | 'privacy' | null>(null);
  const { t } = useLanguage();

  const openModal = (type: 'legal' | 'privacy') => {
    setModalType(type);
    setOpen(false);
  };

  return (
    <>
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="p-2 rounded-full transition-all shadow-lg"
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(139,92,246,0.35)',
          }}
          aria-label={t("legal.menu.title")}
        >
          <svg className="w-6 h-6" style={{ color: 'rgba(226,217,243,0.80)' }} fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        </button>

        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <div
              className="absolute right-0 mt-2 w-64 rounded-xl shadow-2xl z-50 overflow-hidden"
              style={{
                background: 'linear-gradient(180deg, #0a0818 0%, #060612 100%)',
                border: '1px solid rgba(139,92,246,0.30)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.90)',
              }}
            >
              <button
                onClick={() => openModal('legal')}
                className="w-full text-left block px-4 py-3 text-sm transition-colors"
                style={{ color: '#e2d9f3', borderBottom: '1px solid rgba(139,92,246,0.15)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(139,92,246,0.10)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                📜 {t("legal.mentions")}
              </button>
              <button
                onClick={() => openModal('privacy')}
                className="w-full text-left block px-4 py-3 text-sm transition-colors"
                style={{ color: '#e2d9f3' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(139,92,246,0.10)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                🔒 {t("legal.privacy")}
              </button>
            </div>
          </>
        )}
      </div>

      <LegalModal isOpen={modalType !== null} onClose={() => setModalType(null)} type={modalType || 'legal'} />
    </>
  );
}