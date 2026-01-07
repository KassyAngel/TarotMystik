import { Capacitor } from '@capacitor/core';

const isNative = Capacitor.isNativePlatform();
const isProd = import.meta.env.PROD;

// ========================================
// CONFIGURATION TAROTMYSTIK
// ========================================

// 🔧 Pour développement mobile : remplacez par votre IP locale
// Trouvez votre IP avec : ipconfig (Windows) ou ifconfig (Mac/Linux)
const DEV_LOCAL_IP = 'http://192.168.1.100:5000'; // ⚠️ À MODIFIER

export const config = {
  // API locale (optionnelle, pour futures fonctionnalités)
  apiBaseUrl: isNative
    ? DEV_LOCAL_IP // Mobile → Serveur local
    : isProd
      ? window.location.origin // Web prod
      : `${window.location.origin}`, // Dev web
};

console.log('✅ Configuration TarotMystik chargée');
console.log(`📱 Platform: ${isNative ? 'Mobile' : 'Web'}`);
console.log(`🔧 API Base URL: ${config.apiBaseUrl}`);