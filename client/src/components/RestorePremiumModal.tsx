import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

interface RestorePremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRestoreSuccess: () => void;
}

export default function RestorePremiumModal({ isOpen, onClose, onRestoreSuccess }: RestorePremiumModalProps) {
  const { t, language } = useLanguage();
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
      setTimeout(() => {
        onRestoreSuccess();
      }, 1500);
    } catch (err) {
      setError(language === 'fr' ? 'Erreur lors de la restauration' : 'Error during restoration');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/80 z-[100] animate-fade-in"
        onClick={onClose}
      />

      <div className="fixed inset-4 md:inset-20 z-[101] bg-gradient-to-b from-purple-900 via-indigo-900 to-purple-900 rounded-2xl shadow-2xl overflow-hidden border-2 border-purple-500/30 flex flex-col max-h-[80vh]">
        <div className="flex items-center justify-between p-4 border-b border-purple-500/30 bg-purple-900/50">
          <h2 className="text-yellow-300 font-serif font-bold text-xl">
            {language === 'fr' ? 'Restaurer mon abonnement' : 'Restore my subscription'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-purple-700/50 transition-colors"
            aria-label="Fermer"
          >
            <svg className="w-6 h-6 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {success ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">✨</div>
              <p className="text-green-400 text-lg font-semibold">
                {language === 'fr' ? 'Restauration réussie !' : 'Restoration successful!'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleRestore} className="space-y-6">
              <p className="text-purple-200 text-center">
                {language === 'fr' 
                  ? 'Entrez l\'email utilisé lors de votre achat Premium pour restaurer votre abonnement.'
                  : 'Enter the email used during your Premium purchase to restore your subscription.'}
              </p>

              <div>
                <label className="block text-purple-300 text-sm mb-2">
                  {language === 'fr' ? 'Adresse email' : 'Email address'}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={language === 'fr' ? 'votre@email.com' : 'your@email.com'}
                  className="w-full px-4 py-3 rounded-xl bg-purple-800/50 border border-purple-500/30 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50"
                  disabled={isLoading}
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-bold text-lg hover:from-yellow-400 hover:to-amber-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
