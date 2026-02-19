import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Capacitor } from '@capacitor/core';
import { useLanguage } from '@/contexts/LanguageContext';
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
  const [offerings, setOfferings] = useState<PurchasesOfferings | null>(null);
  const [error, setError] = useState('');

  const isNative = Capacitor.isNativePlatform();

  useEffect(() => {
    if (isOpen && isNative) loadRevenueCatOfferings();
  }, [isOpen, isNative]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isLoading) onClose();
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

  const loadRevenueCatOfferings = async () => {
    try {
      await initializeRevenueCat();
      const availableOfferings = await getOfferings();
      setOfferings(availableOfferings);
    } catch {
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
      const result = await purchasePackage(pkg, email);
      if (result.success) { await saveUserEmail(email); onPurchase(); }
      else setError(t('premium.error.purchaseFailed') || "Erreur lors de l'achat");
    } catch (e: any) {
      setError(e.message || t('premium.error.unknown') || 'Erreur inconnue');
    } finally { setIsLoading(false); }
  };

  const handleRevenueCatRestore = async () => {
    if (!email || !email.includes('@')) {
      setEmailError(t('premium.error.invalidEmail') || "L'email n'est pas valide.");
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      const result = await restorePurchases(email);
      if (result.success) { await saveUserEmail(email); onPurchase(); }
      else setError(t('premium.error.noActivePremium') || 'Aucun abonnement actif trouvé');
    } catch (e: any) {
      setError(e.message || t('premium.error.unknown') || 'Erreur inconnue');
    } finally { setIsLoading(false); }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && !isLoading) onClose();
  };

  if (!isOpen) return null;

  const inputStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(139,92,246,0.35)',
    color: 'rgba(255,255,255,0.90)',
  };

  // Non-mobile
  if (!isNative) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleOverlayClick} />
        <div
          className="relative rounded-2xl shadow-2xl max-w-md w-full p-6"
          style={{ background: 'linear-gradient(180deg, #0a0818 0%, #060612 100%)', border: '1px solid rgba(139,92,246,0.30)' }}
        >
          <button
            onClick={() => !isLoading && onClose()}
            className="absolute top-4 right-4 p-2 rounded-lg transition-colors"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)' }}
          >
            <X className="w-6 h-6" style={{ color: 'rgba(255,255,255,0.65)' }} />
          </button>
          <div className="text-center">
            <div className="text-5xl mb-4">📱</div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'rgba(255,255,255,0.95)' }}>
              {t('premium.mobileOnly.title') || 'Application mobile uniquement'}
            </h2>
            <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {t('premium.mobileOnly.description') || "Les achats Premium sont disponibles uniquement via l'application mobile Android (Google Play)."}
            </p>
            <p className="text-sm" style={{ color: 'rgba(167,139,250,0.60)' }}>
              {t('premium.mobileOnly.instruction') || "Téléchargez l'app depuis le Google Play Store pour accéder au Premium."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const availablePackages = offerings?.current?.availablePackages || [];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleOverlayClick} />

      <div
        className="relative rounded-2xl shadow-2xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto"
        style={{
          background: 'linear-gradient(180deg, #0a0818 0%, #060612 60%, #080816 100%)',
          border: '1px solid rgba(139,92,246,0.30)',
          boxShadow: '0 0 60px rgba(0,0,0,0.95)',
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none rounded-t-2xl"
          style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(139,92,246,0.18) 0%, transparent 70%)' }}
        />

        {/* Fermer */}
        <button
          onClick={() => !isLoading && onClose()}
          disabled={isLoading}
          className="absolute top-4 right-4 p-2 rounded-lg transition-colors disabled:opacity-50"
          style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)' }}
        >
          <X className="w-6 h-6" style={{ color: 'rgba(255,255,255,0.65)' }} />
        </button>

        {/* Header — titre blanc */}
        <div className="relative text-center mb-6">
          <div className="text-4xl mb-2">✨</div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'rgba(255,255,255,0.95)' }}>
            {t('premium.title') || 'Premium'}
          </h2>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.60)' }}>
            {t('premium.subtitle') || 'Débloquez toutes les fonctionnalités'}
          </p>
          <p className="text-xs mt-2" style={{ color: 'rgba(167,139,250,0.55)' }}>
            📱 {t('premium.payment.googlePlay') || 'Paiement via Google Play'}
          </p>
        </div>

        {/* Email */}
        {!showRestoreForm && (
          <div className="mb-6">
            <label className="block text-sm mb-2" style={{ color: 'rgba(255,255,255,0.70)' }}>
              📧 {t('premium.emailLabel') || 'Votre email'}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
              placeholder="exemple@email.com"
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-xl focus:outline-none disabled:opacity-50"
              style={inputStyle}
            />
            {emailError && <p className="text-sm mt-1" style={{ color: '#f87171' }}>{emailError}</p>}
            <p className="text-xs mt-2" style={{ color: 'rgba(167,139,250,0.50)' }}>
              {t('premium.emailHelp') || 'Pour récupérer votre abonnement'}
            </p>
          </div>
        )}

        {/* Offres */}
        {!showRestoreForm && (
          <>
            {availablePackages.length > 0 ? (
              <div className="space-y-4 mb-6">
                {availablePackages.map((pkg) => (
                  <div
                    key={pkg.identifier}
                    className="rounded-xl p-4 transition-all"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(139,92,246,0.25)' }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold" style={{ color: 'rgba(255,255,255,0.90)' }}>{pkg.product.title}</h3>
                        <p className="text-sm" style={{ color: 'rgba(167,139,250,0.60)' }}>{pkg.product.description}</p>
                      </div>
                      {/* Prix — blanc, pas jaune */}
                      <div className="text-2xl font-bold" style={{ color: 'rgba(255,255,255,0.95)' }}>{pkg.product.priceString}</div>
                    </div>
                    {/* Bouton violet */}
                    <button
                      onClick={() => handleRevenueCatPurchase(pkg)}
                      disabled={isLoading}
                      className="w-full py-3 rounded-xl font-bold transition-all disabled:opacity-50 active:scale-[0.98]"
                      style={{
                        background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                        color: 'rgba(255,255,255,0.95)',
                        boxShadow: '0 4px 16px rgba(139,92,246,0.40)',
                        border: 'none',
                      }}
                    >
                      {isLoading ? `⏳ ${t('premium.button.loading') || 'Chargement...'}` : `🛒 ${t('premium.buy') || 'Acheter'}`}
                    </button>
                  </div>
                ))}
              </div>
            ) : !error ? (
              <div className="text-center py-8">
                <div className="animate-spin text-4xl mb-4">⏳</div>
                <p style={{ color: 'rgba(255,255,255,0.55)' }}>{t('premium.loading.offers') || 'Chargement des offres...'}</p>
              </div>
            ) : null}
          </>
        )}

        {/* Restauration */}
        {showRestoreForm && (
          <div className="mb-6">
            <label className="block text-sm mb-2" style={{ color: 'rgba(255,255,255,0.70)' }}>
              📧 {t('premium.restoreEmailLabel') || 'Votre email'}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemple@email.com"
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-xl focus:outline-none disabled:opacity-50"
              style={inputStyle}
            />
            <button
              onClick={handleRevenueCatRestore}
              disabled={isLoading}
              className="w-full py-3 rounded-xl font-bold mt-4 transition-all disabled:opacity-50 active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                color: 'rgba(255,255,255,0.95)',
                boxShadow: '0 4px 16px rgba(139,92,246,0.40)',
                border: 'none',
              }}
            >
              {isLoading ? `⏳ ${t('premium.button.restoring') || 'Restauration...'}` : `♻️ ${t('premium.restore') || 'Restaurer'}`}
            </button>
          </div>
        )}

        {/* Erreur */}
        {error && (
          <div className="rounded-lg p-3 mb-4" style={{ background: 'rgba(248,113,113,0.12)', border: '1px solid rgba(248,113,113,0.30)' }}>
            <p className="text-sm" style={{ color: '#fca5a5' }}>❌ {error}</p>
          </div>
        )}

        {/* Toggle restauration */}
        <button
          onClick={() => setShowRestoreForm(!showRestoreForm)}
          className="text-sm transition-colors w-full text-center mb-4"
          style={{ color: 'rgba(167,139,250,0.50)' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(167,139,250,0.80)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(167,139,250,0.50)'; }}
        >
          {showRestoreForm
            ? `← ${t('premium.backToPurchase') || 'Retour aux achats'}`
            : `♻️ ${t('premium.restoreSubscription') || 'Restaurer un abonnement'}`}
        </button>

        {/* Conditions */}
        <div className="mt-4 text-xs text-center space-y-1">
          <p style={{ color: 'rgba(255,255,255,0.45)' }}>{t('premium.conditions.line1')}</p>
          <p className="font-semibold" style={{ color: '#4ade80' }}>{t('premium.conditions.line2')}</p>
          <p style={{ color: 'rgba(167,139,250,0.40)' }}>{t('premium.conditions.line3')}</p>
        </div>

        {/* Avantages */}
        <div className="mt-4 pt-4 text-center text-sm space-y-1" style={{ borderTop: '1px solid rgba(139,92,246,0.18)' }}>
          {[
            t('premium.benefits.ads') || 'Sans publicité',
            t('premium.benefits.notes') || 'Notes personnalisées',
            t('premium.benefits.history') || 'Historique complet'
          ].map((b, i) => (
            <div key={i} style={{ color: 'rgba(255,255,255,0.55)' }}>✓ {b}</div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 text-xs" style={{ color: 'rgba(167,139,250,0.40)' }}>
          <span>{t('premium.poweredBy') || 'Powered by'}</span>
          <span className="font-semibold">Google Play</span>
        </div>
      </div>
    </div>
  );
}