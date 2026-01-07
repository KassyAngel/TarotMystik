import React, { useState } from "react";
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
          className="p-2 rounded-full bg-slate-800/70 hover:bg-slate-700/80 backdrop-blur-sm transition-all shadow-lg border border-cyan-400/30 hover:border-cyan-300/50"
          aria-label={t("legal.menu.title")}
        >
          <svg
            className="w-6 h-6 text-cyan-100"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
          </svg>
        </button>

        {open && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setOpen(false)}
            />
            <div className="absolute right-0 mt-2 w-64 rounded-lg shadow-xl bg-slate-900/95 backdrop-blur-md ring-1 ring-cyan-400/20 z-50 overflow-hidden border border-cyan-400/30">
              <button
                onClick={() => openModal('legal')}
                className="w-full text-left block px-4 py-3 text-sm text-cyan-100 hover:bg-slate-800/70 transition-colors border-b border-cyan-400/20"
              >
                📜 {t("legal.mentions")}
              </button>
              <button
                onClick={() => openModal('privacy')}
                className="w-full text-left block px-4 py-3 text-sm text-cyan-100 hover:bg-slate-800/70 transition-colors"
              >
                🔒 {t("legal.privacy")}
              </button>
            </div>
          </>
        )}
      </div>

      <LegalModal
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        type={modalType || 'legal'}
      />
    </>
  );
}