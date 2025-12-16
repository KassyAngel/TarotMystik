import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface CardSection {
  icon: string;
  title: string;
  content: string;
}

interface SummaryCardProps {
  title: string;
  sections: CardSection[];
  finalMessage: string;
  isVisible: boolean;
}

export default function SummaryCard({ 
  title, 
  sections, 
  finalMessage, 
  isVisible 
}: SummaryCardProps) {
  const [showContent, setShowContent] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setShowContent(true), 300);
    }
  }, [isVisible]);

  return (
    <div className={`w-full max-w-3xl mx-auto px-3 sm:px-4 transition-all duration-700 ${
      showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>

      {/* Parchemin mystique - ✅ PADDING RÉDUIT */}
      <div className="relative bg-gradient-to-b from-[#0d1b2e]/90 via-[#152238]/85 to-[#0d1b2e]/90 rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-5 shadow-2xl border border-[#c9a87f]/25 backdrop-blur-sm overflow-hidden">

        {/* Effets de profondeur subtils */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl">
          <div className="absolute top-0 right-0 w-48 sm:w-80 h-48 sm:h-80 bg-[#ff6692]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-56 sm:w-96 h-56 sm:h-96 bg-[#1a2d45]/30 rounded-full blur-3xl"></div>
        </div>

        {/* Contenu fluide - ✅ ESPACES RÉDUITS */}
        <div className="relative z-10 space-y-3 sm:space-y-4">

          {/* Header compact - ✅ ULTRA COMPACT */}
          <div className="text-center pb-2 sm:pb-3 border-b border-[#c9a87f]/20">
            <div className="flex items-center justify-center gap-2 mb-1.5 sm:mb-2">
              <div className="hidden sm:block h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-[#ff6692]/40"></div>
              <span className="text-[#ff6692]/70 text-base sm:text-lg">♥</span>
              <h2 className="text-[#e8d4b8] text-base sm:text-lg md:text-xl font-serif drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] leading-tight px-2">
                {title}
              </h2>
              <span className="text-[#c9a87f]/70 text-base sm:text-lg">✦</span>
              <div className="hidden sm:block h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-[#c9a87f]/40"></div>
            </div>
            <p className="text-[#c9a87f]/60 text-[10px] sm:text-xs italic">{t('revelation.summary.subtitle')}</p>
          </div>

          {/* Sections des cartes - ✅ ESPACES RÉDUITS */}
          <div className="space-y-3 sm:space-y-4">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="group"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  opacity: 0
                }}
              >
                {/* Layout mobile: icône + titre en ligne */}
                <div className="flex items-center gap-2.5 mb-2">
                  {/* Icône compacte */}
                  <div className="flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-[#ff6692]/20 blur-md rounded-full animate-pulse-romantic"></div>
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#0d1b2e] to-[#152238] border-2 border-[#ff6692]/40 flex items-center justify-center shadow-[0_0_15px_rgba(255,102,146,0.3)]">
                      <span className="text-lg sm:text-xl">{section.icon}</span>
                    </div>
                  </div>

                  {/* Titre */}
                  <h3 className="flex-1 text-[#e8d4b8] font-serif text-sm sm:text-base md:text-lg font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] leading-tight">
                    {section.title}
                  </h3>
                </div>

                {/* Ligne décorative */}
                <div className="h-px bg-gradient-to-r from-[#ff6692]/30 via-[#c9a87f]/20 to-transparent mb-2"></div>

                {/* Contenu */}
                <p className="text-[#c9a87f]/90 text-xs sm:text-sm md:text-base leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                  {section.content}
                </p>

                {/* Séparateur (sauf dernière section) - ✅ RÉDUIT */}
                {index < sections.length - 1 && (
                  <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
                    <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#c9a87f]/30"></div>
                    <span className="text-[#ff6692]/40 text-[10px]">✦</span>
                    <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#c9a87f]/30"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Séparateur avant conseil - ✅ RÉDUIT */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 py-2 sm:py-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#ff6692]/30 to-transparent"></div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#ff6692]/50 text-[10px] sm:text-xs">♥</span>
              <span className="text-[#c9a87f]/50 text-[10px] sm:text-xs">✦</span>
              <span className="text-[#ff6692]/50 text-[10px] sm:text-xs">♥</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#c9a87f]/30 to-transparent"></div>
          </div>

          {/* Conseil personnel - ✅ COMPACT */}
          <div className="relative">

            {/* Badge titre - ✅ PLUS PETIT */}
            <div className="text-center mb-2.5 sm:mb-3">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#ff6692]/15 via-[#c9a87f]/15 to-[#ff6692]/15 rounded-full border border-[#ff6692]/30 shadow-[0_0_20px_rgba(255,102,146,0.2)]">
                <span className="text-[#ff6692] text-sm sm:text-base">✨</span>
                <span className="text-[#e8d4b8] font-serif text-xs sm:text-base md:text-lg font-semibold">{t('revelation.personalAdvice')}</span>
                <span className="text-[#c9a87f] text-sm sm:text-base">✨</span>
              </div>
            </div>

            {/* Message final - ✅ PADDING RÉDUIT */}
            <div className="relative px-3 sm:px-4 py-3 sm:py-4 rounded-xl bg-gradient-to-br from-[#1a2d45]/40 to-[#0d1b2e]/40 border-l-2 border-r-2 border-[#ff6692]/25">

              {/* Coins décoratifs */}
              <div className="absolute top-1.5 left-1.5 text-[#ff6692]/30 text-sm sm:text-base">✦</div>
              <div className="absolute top-1.5 right-1.5 text-[#c9a87f]/30 text-sm sm:text-base">✦</div>
              <div className="absolute bottom-1.5 left-1.5 text-[#c9a87f]/30 text-sm sm:text-base">✦</div>
              <div className="absolute bottom-1.5 right-1.5 text-[#ff6692]/30 text-sm sm:text-base">✦</div>

              {/* Texte */}
              <p className="text-[#e8d4b8] text-xs sm:text-sm md:text-base leading-relaxed text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] relative z-10">
                {finalMessage}
              </p>
            </div>

            {/* Ligne finale - ✅ RÉDUITE */}
            <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#ff6692]/40"></div>
              <span className="text-[#ff6692]/60 text-[10px] sm:text-xs">♥</span>
              <div className="h-px w-5 sm:w-6 bg-[#c9a87f]/40"></div>
              <span className="text-[#c9a87f]/60 text-[10px] sm:text-xs">✦</span>
              <div className="h-px w-5 sm:w-6 bg-[#ff6692]/40"></div>
              <span className="text-[#ff6692]/60 text-[10px] sm:text-xs">♥</span>
              <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#c9a87f]/40"></div>
            </div>
          </div>

        </div>

        {/* Vignette */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] pointer-events-none"></div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-romantic {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .animate-pulse-romantic {
          animation: pulse-romantic 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}