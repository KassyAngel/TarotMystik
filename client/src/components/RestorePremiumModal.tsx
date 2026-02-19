import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

interface RestorePremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRestoreSuccess: () => void;
}

export default function RestorePremiumModal({ isOpen, onClose, onRestoreSuccess }: RestorePremiumModalProps) {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleRestore = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const trimmedEmail = email.trim().toLowerCase();
      if (!trimmedEmail || !trimmedEmail.includes('@')) {
        setError(language === 'fr' ? 'Veuillez entrer un email valide' : 'Please enter a valid email');
        setIsLoading(false);
        return;
      }
      localStorage.setItem('tarotmystik_premium_email', trimmedEmail);
      setSuccess(true);
      setTimeout(() => onRestoreSuccess(), 1500);
    } catch (err) {
      setError(language === 'fr' ? 'Erreur lors de la restauration' : 'Error during restoration');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 z-[100] animate-fade-in"
        style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(6px)' }}
        onClick={onClose}
      />

      <div
        className="fixed inset-4 md:inset-20 z-[101] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        style={{
          background: 'linear-gradient(180deg, #0a0818 0%, #060612 100%)',
          border: '1px solid rgba(139,92,246,0.30)',
          boxShadow: '0 0 60px rgba(0,0,0,0.95)',
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(139,92,246,0.18) 0%, transparent 70%)' }}
        />

        {/* Header — titre blanc */}
        <div className="relative flex items-center justify-between p-4" style={{ borderBottom: '1px solid rgba(139,92,246,0.20)' }}>
          <h2 className="font-serif font-bold text-xl" style={{ color: 'rgba(255,255,255,0.95)' }}>
            {language === 'fr' ? '🔄 Restaurer mon abonnement' : '🔄 Restore my subscription'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg transition-colors"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.65)' }}
            aria-label="Fermer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="relative flex-1 overflow-y-auto p-6">
          {success ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">✨</div>
              <p className="text-lg font-semibold" style={{ color: '#4ade80' }}>
                {language === 'fr' ? 'Restauration réussie !' : 'Restoration successful!'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleRestore} className="space-y-6">
              <p className="text-center text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                {language === 'fr'
                  ? "Entrez l'email utilisé lors de votre achat Premium pour restaurer votre abonnement."
                  : 'Enter the email used during your Premium purchase to restore your subscription.'}
              </p>

              <div>
                <label className="block text-sm mb-2" style={{ color: 'rgba(255,255,255,0.70)' }}>
                  {language === 'fr' ? 'Adresse email' : 'Email address'}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={language === 'fr' ? 'votre@email.com' : 'your@email.com'}
                  disabled={isLoading}
                  className="w-full px-4 py-3 rounded-xl disabled:opacity-50 focus:outline-none"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(139,92,246,0.35)',
                    color: 'rgba(255,255,255,0.90)',
                  }}
                />
              </div>

              {error && <p className="text-sm text-center" style={{ color: '#f87171' }}>{error}</p>}

              {/* Bouton violet, pas jaune */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                  color: 'rgba(255,255,255,0.95)',
                  boxShadow: '0 4px 20px rgba(139,92,246,0.40)',
                  border: 'none',
                }}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    {language === 'fr' ? 'Vérification...' : 'Checking...'}
                  </span>
                ) : (
                  language === 'fr' ? 'Restaurer' : 'Restore'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}