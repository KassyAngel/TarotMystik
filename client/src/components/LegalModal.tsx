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
      if (iframeRef.current) iframeRef.current.src = 'about:blank';
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
      <div
        className="fixed inset-0 z-[100] animate-fade-in"
        style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(6px)' }}
        onClick={onClose}
      />
      <div
        className="fixed inset-4 md:inset-10 z-[101] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        style={{
          background: 'linear-gradient(180deg, #0a0818 0%, #060612 100%)',
          border: '1px solid rgba(139,92,246,0.30)',
          boxShadow: '0 0 60px rgba(0,0,0,0.95)',
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-0"
          style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(139,92,246,0.12) 0%, transparent 70%)' }}
        />
        <div
          className="relative z-10 flex items-center justify-between p-4"
          style={{ borderBottom: '1px solid rgba(139,92,246,0.20)' }}
        >
          <h2 className="font-serif font-bold text-xl" style={{ color: '#d4af37', textShadow: '0 2px 12px rgba(212,175,55,0.30)' }}>
            {type === 'legal' ? '📜' : '🔒'} {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg transition-colors"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.6)' }}
            aria-label="Fermer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 bg-white">
          <iframe ref={iframeRef} src={getFileName()} className="w-full h-full border-0" title={title} sandbox="allow-same-origin allow-scripts" loading="lazy" />
        </div>
      </div>
    </>
  );
}