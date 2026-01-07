import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tarotmystik.app', // ✅ Mis à jour pour TarotMystik
  appName: 'TarotMystik', // ✅ Mis à jour pour TarotMystik
  webDir: 'dist/public',
  server: {
    cleartext: true, // ✅ Activé pour développement local (HTTP)
    // ❌ STRIPE & RENDER DÉSACTIVÉS - App mobile uniquement avec RevenueCat
    // allowNavigation: [
    //   'cartomystikappk.onrender.com',
    //   '*.stripe.com',
    //   'checkout.stripe.com'
    // ]
  },
  android: {
    allowMixedContent: false
  },
  plugins: {
    CapacitorHttp: {
      enabled: true
    },
    // ✅ Configuration RevenueCat (Google Play)
    PurchasesPlugin: {
      // Configuration gérée dans le code TypeScript
    }
  }
};

export default config;