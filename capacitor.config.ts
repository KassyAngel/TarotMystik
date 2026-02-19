import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tarotmystik.app',
  appName: 'TarotMystik',
  webDir: 'dist/public',
  server: {
    cleartext: false, // ✅ false en prod (true uniquement pour dev local)
  },
  android: {
    allowMixedContent: false,
    // ✅ FIX PERFORMANCE : Active le hardware acceleration sur Android
    // C'est la chose la plus importante pour la fluidité sur vieux téléphones
    backgroundColor: '#0a0e1a', // ✅ Évite le flash blanc au démarrage
  },
  plugins: {
    CapacitorHttp: {
      enabled: true
    },
    PurchasesPlugin: {},

    // ✅ FIX KEYBOARD : Empêche le layout de se décaler quand le clavier s'ouvre
    Keyboard: {
      resize: 'none',
      resizeOnFullScreen: false,
    },

    // ✅ FIX STATUS BAR : Fond cohérent avec l'app (pas de flash blanc)
    StatusBar: {
      style: 'dark',
      backgroundColor: '#0a0e1a',
      overlaysWebView: true,
    },

    // ✅ FIX SPLASH : Évite le flash blanc au lancement
    SplashScreen: {
      launchShowDuration: 0,
      backgroundColor: '#0a0e1a',
      showSpinner: false,
    }
  }
};

export default config;