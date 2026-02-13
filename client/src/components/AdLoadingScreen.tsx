// client/src/components/AdLoadingScreen.tsx
// 🎨 Écran de chargement pub élégant et mystique

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface AdLoadingScreenProps {
  showLongMessage?: boolean;
  adType?: 'rewarded' | 'interstitial';
}

export default function AdLoadingScreen({ 
  showLongMessage = false,
  adType = 'rewarded' 
}: AdLoadingScreenProps) {
  const { t } = useLanguage();
  const [pulsePhase, setPulsePhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulsePhase(prev => (prev + 1) % 3);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0e1a] via-[#0d1b2e] to-[#0a1420] z-50 overflow-hidden">

      {/* Effets de fond mystiques */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Orbes flottants */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/12 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-3xl"></div>

        {/* Étoiles scintillantes */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cyan-300 rounded-full animate-twinkle"
            style={{
              width: Math.random() > 0.7 ? '3px' : '2px',
              height: Math.random() > 0.7 ? '3px' : '2px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Contenu principal */}
      <div className="text-center relative z-10 max-w-md px-6">

        {/* Animation cristal mystique */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          {/* Auras */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/40 via-purple-400/40 to-cyan-400/40 rounded-full blur-3xl animate-pulse-gentle"></div>
          <div className="absolute inset-2 bg-gradient-to-r from-purple-400/30 via-cyan-400/30 to-indigo-400/30 rounded-full blur-2xl animate-pulse-gentle" style={{animationDelay: '1s'}}></div>

          {/* Cercles d'énergie */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-28 h-28 border-2 border-indigo-400/30 rounded-full animate-spin-slow"></div>
            <div className="absolute w-20 h-20 border-2 border-purple-400/40 rounded-full animate-spin-reverse"></div>
            <div className="absolute w-12 h-12 border border-cyan-400/50 rounded-full animate-spin-slow" style={{animationDelay: '0.5s'}}></div>
          </div>

          {/* Icône centrale */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`text-7xl transition-all duration-700 ${
              pulsePhase === 0 ? 'scale-110 opacity-100' : 
              pulsePhase === 1 ? 'scale-100 opacity-80' : 
              'scale-90 opacity-60'
            }`}>
              ✦
            </div>
          </div>
        </div>

        {/* Texte principal */}
        <div className="space-y-4">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-cyan-200 text-2xl sm:text-3xl font-bold font-serif animate-fade-in">
            {t('oracle.wheel.loadingAd') || 'Préparation...'}
          </h2>

          <p className="text-indigo-200/70 text-base sm:text-lg">
            {adType === 'rewarded' 
              ? (t('oracle.wheel.watchAdToUnlock') || 'Regardez la pub pour débloquer')
              : (t('common.pleaseWait') || 'Merci de patienter')
            }
          </p>
        </div>

        {/* Message long délai */}
        {showLongMessage && (
          <div className="mt-8 p-5 bg-gradient-to-br from-purple-500/15 via-indigo-500/15 to-cyan-500/15 border-2 border-purple-400/30 rounded-2xl backdrop-blur-lg animate-fade-in-up">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-2xl">⏳</span>
              <p className="text-purple-200 text-lg font-semibold">
                {t('oracle.wheel.adLongWarning') || 'Chargement en cours...'}
              </p>
            </div>
            <p className="text-purple-200/80 text-sm leading-relaxed">
              {t('oracle.wheel.pleaseWaitUntilEnd') || 'La publicité sera disponible dans quelques instants'}
            </p>
          </div>
        )}

        {/* Points de chargement animés */}
        <div className="flex justify-center gap-3 mt-8">
          <span className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce-smooth"></span>
          <span className="w-3 h-3 bg-purple-400 rounded-full animate-bounce-smooth" style={{animationDelay: '0.2s'}}></span>
          <span className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce-smooth" style={{animationDelay: '0.4s'}}></span>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-smooth {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-gentle {
          animation: pulse-gentle 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out;
        }
        .animate-bounce-smooth {
          animation: bounce-smooth 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}