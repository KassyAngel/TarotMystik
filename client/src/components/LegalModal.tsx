import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef } from 'react';
import { Capacitor } from '@capacitor/core';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'legal' | 'privacy' | null;
}

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  const { language } = useLanguage();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    return () => {
      if (iframeRef.current) {
        iframeRef.current.src = 'about:blank';
      }
    };
  }, []);

  if (!isOpen || !type) return null;

  const getFileName = () => {
    const fileName = type === 'legal'
      ? (language === 'fr' ? 'mentions-legales.html' : 'mentions-legales-en.html')
      : (language === 'fr' ? 'politique-confidentialite.html' : 'politique-confidentialite-en.html');
    const isNative = Capacitor.isNativePlatform();
    const platform = Capacitor.getPlatform();
    const fullPath = isNative ? `./${fileName}` : `/${fileName}`;
    console.log('📄 Chargement page légale:', fullPath, 'isNative:', isNative, 'platform:', platform);
    return fullPath;
  };

  const title = type === 'legal'
    ? (language === 'fr' ? 'Mentions Légales' : 'Legal Notice')
    : (language === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy');

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[100] animate-fade-in"
        style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(6px)' }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="fixed inset-4 md:inset-10 z-[101] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        style={{
          background: 'linear-gradient(160deg, #100e06 0%, #0e0c04 60%, #130f06 100%)',
          border: '1px solid rgba(212,175,55,0.35)',
          boxShadow: '0 0 40px rgba(0,0,0,0.8), 0 0 20px rgba(212,175,55,0.08)',
        }}
      >
        {/* Lueur dorée en haut */}
        <div
          className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-0"
          style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(212,175,55,0.10) 0%, transparent 70%)' }}
        />

        {/* Header */}
        <div
          className="relative z-10 flex items-center justify-between p-4"
          style={{ borderBottom: '1px solid rgba(212,175,55,0.18)' }}
        >
          <h2
            className="font-serif font-bold text-xl"
            style={{
              color: '#d4af37',
              textShadow: '0 2px 12px rgba(212,175,55,0.30)',
            }}
          >
            {type === 'legal' ? '📜' : '🔒'} {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg transition-colors"
            style={{
              background: 'rgba(212,175,55,0.08)',
              border: '1px solid rgba(212,175,55,0.25)',
              color: 'rgba(212,175,55,0.7)',
            }}
            aria-label="Fermer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white">
          <iframe
            ref={iframeRef}
            src={getFileName()}
            className="w-full h-full border-0"
            title={title}
            sandbox="allow-same-origin allow-scripts"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}