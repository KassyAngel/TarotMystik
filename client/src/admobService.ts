import { 
  AdMob, 
  BannerAdOptions, 
  BannerAdSize, 
  BannerAdPosition, 
  RewardAdOptions,
  AdMobRewardItem,
} from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';

const isNative = Capacitor.isNativePlatform();
const platform = Capacitor.getPlatform();

// 🎯 INTERRUPTEUR : Changez cette valeur pour passer de TEST à PRODUCTION
const IS_PRODUCTION = true; // ⚠️ Mettre à true avant la soumission finale

console.log('🔍 Détection plateforme AdMob:', {
  isNative,
  platform,
  mode: IS_PRODUCTION ? '🚀 PRODUCTION' : '🧪 TEST',
});

// 📱 IDs AdMob - TarotMystik
const BANNER_AD_ID = isNative 
  ? (IS_PRODUCTION 
      ? 'ca-app-pub-5733508257471048/9858415317'
      : 'ca-app-pub-3940256099942544/6300978111')
  : '';

const INTERSTITIAL_AD_ID = isNative
  ? (IS_PRODUCTION 
      ? 'ca-app-pub-5733508257471048/3903381053'
      : 'ca-app-pub-3940256099942544/1033173712')
  : '';

const REWARDED_AD_ID = isNative
  ? (IS_PRODUCTION
      ? 'ca-app-pub-5733508257471048/7285041100'
      : 'ca-app-pub-3940256099942544/5224354917')
  : '';

console.log('📱 IDs AdMob TarotMystik:', {
  banner: BANNER_AD_ID,
  interstitial: INTERSTITIAL_AD_ID,
  rewarded: REWARDED_AD_ID,
  mode: IS_PRODUCTION ? 'PRODUCTION' : 'TEST',
});

// ⛔️ Gestion des listeners
let _allListeners: { remove: () => void }[] = [];

function _addListener(event: string, callback: any) {
  const listener = (AdMob.addListener as any)(event, callback);
  _allListeners.push(listener);
  return listener;
}

function _removeAllListenersSafe() {
  _allListeners.forEach(l => {
    try { l.remove(); } catch {}
  });
  _allListeners = [];
}

// 🎯 Variables état
let isAdMobInitialized = false;
let isInterstitialReady = false;
let isInterstitialLoading = false;
let isInterstitialShowing = false;

// 🔐 Variables consentement RGPD
let consentStatus: 'unknown' | 'required' | 'not_required' | 'obtained' = 'unknown';
let isConsentFormShowing = false;

// ✅ Attendre que AdMob soit prêt avant d'afficher la bannière
async function waitForInitialization(maxWaitMs = 10000): Promise<boolean> {
  if (isAdMobInitialized) return true;

  console.log('⏳ [ADMOB] En attente de l\'initialisation...');
  const start = Date.now();

  while (!isAdMobInitialized && (Date.now() - start) < maxWaitMs) {
    await new Promise(r => setTimeout(r, 200));
  }

  if (isAdMobInitialized) {
    console.log('✅ [ADMOB] Prêt !');
    return true;
  } else {
    console.warn('⚠️ [ADMOB] Timeout attente init');
    return false;
  }
}

// 🔐 Vérifier et demander le consentement RGPD
export async function requestConsent(): Promise<boolean> {
  if (!isNative) {
    console.log('📱 Pas sur mobile natif, consentement ignoré');
    return true;
  }

  try {
    console.log('🔐 [CONSENTEMENT RGPD] Vérification du statut...');

    const consentInfo = await AdMob.requestConsentInfo();
    console.log('📊 [CONSENTEMENT] Statut:', consentInfo);

    if (consentInfo.status === 'OBTAINED') {
      console.log('✅ [CONSENTEMENT] Déjà obtenu');
      consentStatus = 'obtained';
      return true;
    }

    if (consentInfo.status === 'NOT_REQUIRED') {
      console.log('✅ [CONSENTEMENT] Non requis (hors UE/EEE)');
      consentStatus = 'not_required';
      return true;
    }

    console.log('⚠️ [CONSENTEMENT] Requis - Affichage du formulaire');
    consentStatus = 'required';

    if (!isConsentFormShowing) {
      isConsentFormShowing = true;

      try {
        const result = await AdMob.showConsentForm();
        console.log('✅ [CONSENTEMENT] Formulaire fermé:', result);

        const updatedInfo = await AdMob.requestConsentInfo();

        if (updatedInfo.status === 'OBTAINED') {
          console.log('✅ [CONSENTEMENT] Obtenu après formulaire');
          consentStatus = 'obtained';
          isConsentFormShowing = false;
          return true;
        } else {
          console.log('⚠️ [CONSENTEMENT] Refusé ou incomplet');
          consentStatus = 'required';
          isConsentFormShowing = false;
          return false;
        }
      } catch (error) {
        console.error('❌ [CONSENTEMENT] Erreur affichage formulaire:', error);
        isConsentFormShowing = false;
        return false;
      }
    }

    return false;

  } catch (error) {
    console.error('❌ [CONSENTEMENT] Erreur:', error);
    // En cas d'erreur on continue (mieux vaut afficher des pubs que crasher)
    return true;
  }
}

// 🔐 Réinitialiser le consentement (pour tests ou changement d'avis)
export async function resetConsent(): Promise<void> {
  if (!isNative) return;

  try {
    console.log('🔄 [CONSENTEMENT] Réinitialisation...');
    await AdMob.resetConsentInfo();
    consentStatus = 'unknown';
    console.log('✅ [CONSENTEMENT] Réinitialisé');
  } catch (error) {
    console.error('❌ [CONSENTEMENT] Erreur réinitialisation:', error);
  }
}

// 🔐 Obtenir le statut actuel du consentement
export function getConsentStatus(): string {
  return consentStatus;
}

// 🎯 Initialiser AdMob avec gestion du consentement
export async function initialize() {
  console.log(`📱 Initialisation AdMob TarotMystik - Mode: ${IS_PRODUCTION ? 'PRODUCTION' : 'TEST'}`);

  if (!isNative) {
    console.log('📱 AdMob ignoré (pas sur mobile natif)');
    return;
  }

  try {
    console.log('🔐 [INIT] Étape 1/2 : Demande de consentement...');
    const consentGranted = await requestConsent();

    if (!consentGranted && consentStatus === 'required') {
      console.warn('⚠️ [INIT] Consentement non obtenu - AdMob initialisé mais pubs limitées');
    }

    console.log('🔐 [INIT] Étape 2/2 : Initialisation AdMob...');
    await AdMob.initialize({
      testingDevices: IS_PRODUCTION ? [] : ['1763659614607'],
      initializeForTesting: !IS_PRODUCTION,
    });

    _addListener('interstitialAdLoaded', () => {
      console.log('✅ Pub interstitielle chargée et prête');
      isInterstitialReady = true;
      isInterstitialLoading = false;
    });

    _addListener('interstitialAdFailedToLoad', (error: any) => {
      console.error('❌ Échec chargement pub interstitielle:', error);
      isInterstitialReady = false;
      isInterstitialLoading = false;
    });

    _addListener('interstitialAdShowed', () => {
      console.log('👁️ Pub interstitielle affichée');
      isInterstitialShowing = true;
    });

    _addListener('interstitialAdDismissed', () => {
      console.log('✅ Pub interstitielle fermée par l\'utilisateur');
      isInterstitialReady = false;
      isInterstitialShowing = false;
      setTimeout(() => preloadInterstitial(), 1000);
    });

    _addListener('interstitialAdFailedToShow', (error: any) => {
      console.error('❌ Échec affichage pub interstitielle:', error);
      isInterstitialReady = false;
      isInterstitialShowing = false;
    });

    isAdMobInitialized = true;

    console.log(`✅ AdMob TarotMystik initialisé en mode ${IS_PRODUCTION ? 'PRODUCTION' : 'TEST'}`);
    console.log(`🔐 Statut consentement: ${consentStatus}`);

  } catch (error) {
    console.error('❌ Erreur init AdMob:', error);
  }
}

// 🎯 Pré-charger la pub interstitielle sans l'afficher
export async function preloadInterstitial() {
  if (!isNative) return;

  if (isInterstitialReady || isInterstitialLoading) {
    console.log('⏭️ Pub déjà prête ou en chargement, skip');
    return;
  }

  try {
    console.log('🔄 PRÉ-CHARGEMENT pub interstitielle...');
    isInterstitialLoading = true;

    await AdMob.prepareInterstitial({
      adId: INTERSTITIAL_AD_ID,
    });

    console.log('✅ Pub interstitielle pré-chargée avec succès');
  } catch (error) {
    console.error('❌ Erreur pré-chargement interstitielle:', error);
    isInterstitialLoading = false;
  }
}

// 🎯 Affiche instantanément si prête, sinon attend
export async function showInterstitialAd(context: string = 'unknown'): Promise<boolean> {
  if (!isNative) {
    console.log('📱 Pas de pub (web) - Context:', context);
    return true;
  }

  if (isInterstitialShowing) {
    console.log('⚠️ Une pub interstitielle est déjà affichée');
    return false;
  }

  try {
    console.log(`📺 [PUB INTERSTITIEL] Context: ${context}`);

    if (isInterstitialReady) {
      console.log('⚡ Pub prête ! Affichage instantané...');
      await AdMob.showInterstitial();
      console.log('✅ Pub affichée instantanément');
      return true;
    }

    console.log('⏳ Pub pas prête, chargement...');

    if (!isInterstitialLoading) {
      await AdMob.prepareInterstitial({
        adId: INTERSTITIAL_AD_ID,
      });
    }

    const maxWait = 5000;
    const startTime = Date.now();

    while (!isInterstitialReady && (Date.now() - startTime) < maxWait) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    if (isInterstitialReady) {
      await AdMob.showInterstitial();
      console.log('✅ Pub affichée après chargement');
      return true;
    } else {
      console.log('⏰ Timeout : pub pas prête après 5s');
      return false;
    }

  } catch (error: any) {
    console.error(`❌ Erreur pub interstitielle:`, error);
    isInterstitialShowing = false;
    return false;
  }
}

// ✅ showBanner attend que AdMob soit initialisé
export async function showBanner() {
  if (!isNative) return;

  const ready = await waitForInitialization(10000);
  if (!ready) {
    console.warn('⚠️ [BANNIÈRE] AdMob pas initialisé, bannière annulée');
    return;
  }

  try {
    const options: BannerAdOptions = {
      adId: BANNER_AD_ID,
      adSize: BannerAdSize.ADAPTIVE_BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
    };

    await AdMob.showBanner(options);
    console.log('✅ Bannière TarotMystik affichée');
  } catch (error) {
    console.error('❌ Erreur bannière:', error);
  }
}

export async function hideBanner() {
  if (!isNative) return;
  if (!isAdMobInitialized) return;

  try {
    await AdMob.hideBanner();
    console.log('👁️ Bannière cachée');
  } catch (error) {
    console.error('❌ Erreur hide bannière:', error);
  }
}

export async function removeBanner() {
  if (!isNative) return;
  if (!isAdMobInitialized) return;

  try {
    await AdMob.removeBanner();
    console.log('🗑️ Bannière supprimée');
  } catch (error) {
    console.error('❌ Erreur remove bannière:', error);
  }
}

// 🎁 PUB RÉCOMPENSÉE - VERSION CORRIGÉE
let rewardedAdCounter = 0;
let currentRewardedAdPromise: Promise<boolean> | null = null;

export async function showRewardedAd(context: string = 'bonus_roll'): Promise<boolean> {
  if (!isNative) {
    console.log('📱 Pas de pub récompensée (web) - Context:', context);
    return true;
  }

  if (currentRewardedAdPromise) {
    console.warn(`⚠️ [PUB RÉCOMPENSÉE] BLOQUÉ - Pub déjà en cours`);
    return currentRewardedAdPromise;
  }

  rewardedAdCounter++;
  const adNumber = rewardedAdCounter;

  const promise = new Promise<boolean>(async (resolve) => {
    let resolved = false;
    let adShown = false;
    let adLoaded = false;

    let loadedListener: any;
    let showedListener: any;
    let rewardListener: any;
    let dismissListener: any;
    let failedToShowListener: any;
    let failedToLoadListener: any;

    // ✅ Timeout réduit à 30s au lieu de 120s
    const safetyTimeout = setTimeout(() => {
      if (!resolved) {
        console.warn(`⏰ [PUB RÉCOMPENSÉE #${adNumber}] TIMEOUT 30s - résolution forcée`);
        safeResolve(false);
      }
    }, 30000);

    const cleanup = () => {
      clearTimeout(safetyTimeout);
      try {
        if (loadedListener) loadedListener.remove();
        if (showedListener) showedListener.remove();
        if (rewardListener) rewardListener.remove();
        if (dismissListener) dismissListener.remove();
        if (failedToShowListener) failedToShowListener.remove();
        if (failedToLoadListener) failedToLoadListener.remove();
      } catch (e) {
        console.error('❌ Erreur cleanup listeners:', e);
      }
    };

    // ✅ Résolution centralisée pour éviter les double-résolutions
    const safeResolve = (value: boolean) => {
      if (!resolved) {
        resolved = true;
        cleanup();
        currentRewardedAdPromise = null;
        resolve(value);
      }
    };

    try {
      console.log(`🎁 [PUB RÉCOMPENSÉE #${adNumber}] === DÉMARRAGE === Context: ${context}`);

      // ✅ On écoute le "loaded" avant de préparer pour être sûr de ne pas le manquer
      loadedListener = _addListener('onRewardedVideoAdLoaded', () => {
        console.log(`✅ [PUB RÉCOMPENSÉE #${adNumber}] Chargée et prête !`);
        adLoaded = true;
      });

      failedToLoadListener = _addListener('onRewardedVideoAdFailedToLoad', (error: any) => {
        console.error(`❌ [PUB RÉCOMPENSÉE #${adNumber}] ÉCHEC CHARGEMENT:`, error);
        safeResolve(false);
      });

      showedListener = _addListener('onRewardedVideoAdShowed', () => {
        console.log(`👁️ [PUB RÉCOMPENSÉE #${adNumber}] AFFICHÉE`);
        adShown = true;
      });

      rewardListener = _addListener('onRewarded', (reward: AdMobRewardItem) => {
        console.log(`🎁 [PUB RÉCOMPENSÉE #${adNumber}] RÉCOMPENSE REÇUE:`, reward);
      });

      // ✅ Résolution sur dismiss : si la pub s'est affichée = on débloque
      dismissListener = _addListener('onRewardedVideoAdDismissed', () => {
        console.log(`🚪 [PUB RÉCOMPENSÉE #${adNumber}] FERMÉE — adShown=${adShown}`);
        safeResolve(adShown);
      });

      failedToShowListener = _addListener('onRewardedVideoAdFailedToShow', (error: any) => {
        console.error(`❌ [PUB RÉCOMPENSÉE #${adNumber}] ÉCHEC AFFICHAGE:`, error);
        safeResolve(false);
      });

      // Préparation de la pub
      console.log(`🔄 [PUB RÉCOMPENSÉE #${adNumber}] Préparation...`);
      await AdMob.prepareRewardVideoAd({ adId: REWARDED_AD_ID });

      // ✅ Attente du callback "loaded" au lieu d'un délai fixe de 2s
      const loadStart = Date.now();
      while (!adLoaded && (Date.now() - loadStart) < 10000) {
        await new Promise(r => setTimeout(r, 150));
      }

      if (!adLoaded) {
        console.warn(`⚠️ [PUB RÉCOMPENSÉE #${adNumber}] Pas de confirmation "loaded" après 10s, tentative quand même...`);
      }

      console.log(`🎬 [PUB RÉCOMPENSÉE #${adNumber}] Affichage...`);
      await AdMob.showRewardVideoAd();
      console.log(`✅ [PUB RÉCOMPENSÉE #${adNumber}] Commande envoyée`);

    } catch (error: any) {
      console.error(`💥 [PUB RÉCOMPENSÉE #${adNumber}] ERREUR:`, error);
      safeResolve(false);
    }
  });

  currentRewardedAdPromise = promise;

  promise.finally(() => {
    setTimeout(() => {
      currentRewardedAdPromise = null;
    }, 1000);
  });

  return promise;
}

// 🧹 Cleanup sécurisé
export async function cleanup() {
  if (!isNative) return;

  try {
    console.log('🧹 Nettoyage listeners AdMob...');
    _removeAllListenersSafe();
    currentRewardedAdPromise = null;
    console.log('🧹 Listeners et états nettoyés');
  } catch (e) {
    console.error('❌ Erreur cleanup:', e);
  }
}