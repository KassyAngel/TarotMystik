/**
 * 🔧 Configuration TarotMystik
 * ✅ Version 100% locale, sans backend/API
 */

// ❌ Plus besoin d'API backend
// L'app fonctionne 100% en local avec :
// - RevenueCat pour les paiements Google Play
// - localStorage pour la persistance des données

export const config = {
  // App Info
  appName: 'TarotMystik',
  appVersion: '1.0.0',

  // ❌ Plus d'API backend
  // apiBaseUrl: '' - SUPPRIMÉ

  // RevenueCat
  revenueCat: {
    android: {
      apiKey: 'goog_FysChuiotCqiQGrxnPIxWGJtyKH',
      entitlementId: 'premium'
    },
    // iOS à ajouter plus tard si besoin
    ios: {
      apiKey: '', // À compléter plus tard
      entitlementId: 'premium'
    }
  },

  // Stockage local
  storage: {
    prefix: 'tarotmystik_',
    keys: {
      premium: 'premium',
      userEmail: 'user_email',
      settings: 'settings',
      language: 'language'
    }
  },

  // Langues supportées
  supportedLanguages: ['fr', 'en'] as const,
  defaultLanguage: 'fr' as const,

  // Contact
  contact: {
    email: 'tarotmystik@gmail.com',
    supportUrl: 'mailto:tarotmystik@gmail.com'
  }
} as const;

export type AppConfig = typeof config;
export type SupportedLanguage = typeof config.supportedLanguages[number];