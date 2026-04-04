import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Globe } from 'lucide-react';

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' }
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (value: Language) => {
    console.log('👤 Utilisateur change de langue:', language, '→', value);
    setLanguage(value);
  };

  return (
    <div className="flex items-center gap-2 text-white/80">
      <Globe className="w-3 h-3 text-amber-300/80 drop-shadow-md" />
      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger
          className="w-25 border text-amber-200/90 focus:ring-0 focus:ring-offset-0"
          style={{
            background: 'rgba(212,175,55,0.08)',
            borderColor: 'rgba(212,175,55,0.30)',
            color: 'rgba(240,228,190,0.90)',
          }}
          data-testid="select-language"
        >
          <SelectValue>
            {language.toUpperCase()}
          </SelectValue>
        </SelectTrigger>

        <SelectContent
          style={{
            background: '#0e0b1e',
            border: '1px solid rgba(212,175,55,0.28)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.80), 0 0 20px rgba(212,175,55,0.06)',
          }}
        >
          {languages.map((lang) => (
            <SelectItem
              key={lang.code}
              value={lang.code}
              className="cursor-pointer"
              style={{ color: 'rgba(240,228,190,0.80)' }}
              // Tailwind focus/hover via data attributes won't reach shadcn internals,
              // so we use a small injected style block below
              data-testid={`option-${lang.code}`}
            >
              <span className="flex items-center gap-2">
                {lang.flag} {lang.name}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Override shadcn SelectItem hover/focus colors */}
      <style>{`
        [role="option"]:hover,
        [role="option"][data-highlighted],
        [role="option"]:focus,
        [role="option"][data-state="checked"] ~ *,
        [data-radix-select-item]:hover,
        [data-radix-select-item][data-highlighted],
        [data-radix-select-item]:focus {
          background: rgba(212,175,55,0.12) !important;
          color: #f5e6a0 !important;
          outline: none !important;
        }
        [role="option"][data-state="checked"],
        [data-radix-select-item][data-state="checked"] {
          background: rgba(212,175,55,0.08) !important;
          color: #d4af37 !important;
        }
        /* Neutralise tout fond blanc résiduel */
        [data-radix-select-viewport] [role="option"] {
          background: transparent !important;
        }
      `}</style>
    </div>
  );
}