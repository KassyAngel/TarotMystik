import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Capacitor } from '@capacitor/core';
import { useLanguage } from '@/contexts/LanguageContext';
import MysticalButton from './MysticalButton';
import { saveUserEmail } from '@/lib/userStorage';
import { 
  initializeRevenueCat, 
  getOfferings, 
  purchasePackage, 
  restorePurchases
} from '@/services/revenueCatService';
import type { PurchasesOfferings, PurchasesPackage } from '@revenuecat/purchases-capacitor';

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPurchase: () => void;
}

export default function PremiumModal({ isOpen, onClose, onPurchase }: PremiumModalProps) {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showRestoreForm, setShowRestoreForm] = useState(false);

  // Pour RevenueCat (mobile natif)
  const [offerings, setOfferings] = useState<PurchasesOfferings | null>(null);
  const [error, setError] = useState('');

  const isNative = Capacitor.isNativePlatform();
  const platform = Capacitor.getPlatform();

  console.log('💳 PremiumModal - Plateforme:', { isNative, platform });

  // Charger les offres RevenueCat
  useEffect(() => {
    if (isOpen && isNative) {
      loadRevenueCatOfferings();
    }
  }, [isOpen, isNative]);

  // Gestion de la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isLoading) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, onClose, isLoading]);

  // ==================== REVENUECAT (Mobile Natif) ====================
  const loadRevenueCatOfferings = async () => {
    try {
      console.log('📦 Chargement offres RevenueCat...');
      await initializeRevenueCat();
      const availableOfferings = await getOfferings();
      setOfferings(availableOfferings);
      console.log('✅ Offres RevenueCat chargées:', availableOfferings);
    } catch (error) {
      console.error('❌ Erreur chargement offres RevenueCat:', error);
      setError(t('premium.error.loadFailed') || 'Impossible de charger les offres');
    }
  };

  const handleRevenueCatPurchase = async (pkg: PurchasesPackage) => {
    if (!email || !email.includes('@')) {
      setEmailError(t('premium.error.invalidEmail') || "L'email n'est pas valide.");
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      console.log('🛒 Achat RevenueCat du package:', pkg.identifier);

      const result = await purchasePackage(pkg, email);

      if (result.success) {
        await saveUserEmail(email);
        console.log('✅ Premium activé via RevenueCat !');
        onPurchase();
      } else {
        setError(t('premium.error.purchaseFailed') || 'Erreur lors de l\'achat');
      }
    } catch (error: any) {
      console.error('❌ Erreur achat RevenueCat:', error);
      setError(error.message || t('premium.error.unknown') || 'Erreur inconnue');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRevenueCatRestore = async () => {
    if (!email || !email.includes('@')) {
      setEmailError(t('premium.error.invalidEmail') || "L'email n'est pas valide.");
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      console.log('♻️ Restauration achats RevenueCat...');

      const result = await restorePurchases(email);

      if (result.success) {
        await saveUserEmail(email);
        console.log('✅ Premium restauré via RevenueCat !');
        onPurchase();
      } else {
        setError(t('premium.error.noActivePremium') || 'Aucun abonnement actif trouvé');
      }
    } catch (error: any) {
      console.error('❌ Erreur restauration RevenueCat:', error);
      setError(error.message || t('premium.error.unknown') || 'Erreur inconnue');
    } finally {
      setIsLoading(false);
    }
  };

  // ==================== HANDLERS ====================
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && !isLoading) {
      onClose();
    }
  };

  const handleCloseClick = () => {
    if (!isLoading) {
      onClose();
    }
  };

  if (!isOpen) return null;

  // ==================== AVERTISSEMENT SI NON-MOBILE ====================
  // ✅ EN PRODUCTION : Afficher ce message sur web
  if (!isNative) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleOverlayClick} />
        <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 rounded-2xl shadow-2xl max-w-md w-full p-6 border-2 border-yellow-500/30">
          <button onClick={handleCloseClick} className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="text-center">
            <div className="text-5xl mb-4">📱</div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              {t('premium.mobileOnly.title') || 'Application mobile uniquement'}
            </h2>
            <p className="text-purple-200 mb-4">
              {t('premium.mobileOnly.description') || 'Les achats Premium sont disponibles uniquement via l\'application mobile Android (Google Play).'}
            </p>
            <p className="text-purple-300 text-sm">
              {t('premium.mobileOnly.instruction') || 'Téléchargez l\'app depuis le Google Play Store pour accéder au Premium.'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ==================== RENDER MOBILE ====================
  const currentOffering = offerings?.current;
  const availablePackages = currentOffering?.availablePackages || [];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleOverlayClick} />

      <div className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 rounded-2xl shadow-2xl max-w-md w-full p-6 border-2 border-yellow-500/30 max-h-[90vh] overflow-y-auto">

        {/* Bouton fermeture */}
        <button onClick={handleCloseClick} disabled={isLoading} className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-50">
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">✨</div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">
            {t('premium.title') || 'Premium'}
          </h2>
          <p className="text-purple-200 text-sm">
            {t('premium.subtitle') || 'Débloquez toutes les fonctionnalités'}
          </p>
          <p className="text-purple-300 text-xs mt-2">
            📱 {t('premium.payment.googlePlay') || 'Paiement via Google Play'}
          </p>
        </div>

        {/* Champ Email */}
        {!showRestoreForm && (
          <div className="mb-6">
            <label className="block text-purple-200 text-sm mb-2">
              📧 {t('premium.emailLabel') || 'Votre email'}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
              placeholder="exemple@email.com"
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-lg bg-purple-800/50 border border-purple-500/30 text-white placeholder-purple-300/50 focus:outline-none focus:border-yellow-400/50 disabled:opacity-50"
            />
            {emailError && <p className="text-red-400 text-sm mt-1">{emailError}</p>}
            <p className="text-purple-300 text-xs mt-2">
              {t('premium.emailHelp') || 'Pour récupérer votre abonnement'}
            </p>
          </div>
        )}

        {/* Offres RevenueCat */}
        {!showRestoreForm && (
          <>
            {availablePackages.length > 0 ? (
              <div className="space-y-4 mb-6">
                {availablePackages.map((pkg) => (
                  <div key={pkg.identifier} className="bg-purple-800/30 rounded-xl p-4 border-2 border-purple-500/30 hover:border-yellow-400/50 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-yellow-300 font-semibold">{pkg.product.title}</h3>
                        <p className="text-purple-200 text-sm">{pkg.product.description}</p>
                      </div>
                      <div className="text-2xl font-bold text-yellow-300">{pkg.product.priceString}</div>
                    </div>
                    <MysticalButton onClick={() => handleRevenueCatPurchase(pkg)} disabled={isLoading} className="w-full">
                      {isLoading ? `⏳ ${t('premium.button.loading') || 'Chargement...'}` : `🛒 ${t('premium.buy') || 'Acheter'}`}
                    </MysticalButton>
                  </div>
                ))}
              </div>
            ) : !error ? (
              <div className="text-center py-8">
                <div className="animate-spin text-4xl mb-4">⏳</div>
                <p className="text-purple-200">{t('premium.loading.offers') || 'Chargement des offres...'}</p>
              </div>
            ) : null}
          </>
        )}

        {/* Formulaire Restauration */}
        {showRestoreForm && (
          <div className="mb-6">
            <label className="block text-purple-200 text-sm mb-2">
              📧 {t('premium.restoreEmailLabel') || 'Votre email'}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemple@email.com"
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-lg bg-purple-800/50 border border-purple-500/30 text-white placeholder-purple-300/50 focus:outline-none focus:border-yellow-400/50 disabled:opacity-50"
            />
            <MysticalButton onClick={handleRevenueCatRestore} disabled={isLoading} className="w-full mt-4">
              {isLoading ? `⏳ ${t('premium.button.restoring') || 'Restauration...'}` : `♻️ ${t('premium.restore') || 'Restaurer'}`}
            </MysticalButton>
          </div>
        )}

        {/* Message d'erreur */}
        {error && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 mb-4">
            <p className="text-red-200 text-sm">❌ {error}</p>
          </div>
        )}

        {/* Toggle Restauration */}
        <button onClick={() => setShowRestoreForm(!showRestoreForm)} className="text-purple-300 hover:text-purple-100 text-sm transition-colors w-full text-center mb-4">
          {showRestoreForm 
            ? `← ${t('premium.backToPurchase') || 'Retour aux achats'}` 
            : `♻️ ${t('premium.restoreSubscription') || 'Restaurer un abonnement'}`
          }
        </button>

        {/* Conditions */}
        <div className="mt-4 text-xs text-purple-200 text-center space-y-1">
          <p>{t('premium.conditions.line1')}</p>
          <p className="text-green-400 font-semibold">{t('premium.conditions.line2')}</p>
          <p className="text-purple-300 text-[10px]">{t('premium.conditions.line3')}</p>
        </div>

        {/* Avantages */}
        <div className="mt-4 pt-4 border-t border-purple-500/30">
          <div className="text-center text-sm text-purple-200 space-y-1">
            <div>✓ {t('premium.benefits.ads') || 'Sans publicité'}</div>
            <div>✓ {t('premium.benefits.notes') || 'Notes personnalisées'}</div>
            <div>✓ {t('premium.benefits.history') || 'Historique complet'}</div>
          </div>
        </div>

        {/* Logo Google Play */}
        <div className="mt-3 flex items-center justify-center gap-2 text-purple-300 text-xs">
          <span>{t('premium.poweredBy') || 'Powered by'}</span>
          <span className="font-semibold">Google Play</span>
        </div>
      </div>
    </div>
  );
}