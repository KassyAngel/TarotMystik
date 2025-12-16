import { Capacitor } from '@capacitor/core';
import {
  Purchases,
  LOG_LEVEL,
  type PurchasesOfferings,
  type CustomerInfo,
  type PurchasesPackage,
} from '@revenuecat/purchases-capacitor';

/**
 * 🔧 Initialisation de RevenueCat pour TarotMystik
 * ✅ Version 100% locale, sans backend
 */
export async function initializeRevenueCat(): Promise<void> {
  if (!Capacitor.isNativePlatform()) {
    console.log('🌐 Web : RevenueCat non disponible (TarotMystik est mobile-only)');
    return;
  }

  try {
    console.log('🔧 Initialisation RevenueCat pour TarotMystik...');

    const platform = Capacitor.getPlatform();

    // ✅ Clé API Google Play uniquement (pas d'iOS pour l'instant)
    const apiKey = platform === 'android' 
      ? 'goog_FysChuiotCqiQGrxnPIxWGJtyKH'
      : ''; // Ajouter la clé iOS plus tard si besoin

    if (!apiKey) {
      throw new Error('Clé API RevenueCat non trouvée');
    }

    // Configure RevenueCat
    await Purchases.configure({ apiKey });

    // Activer les logs pour debug
    await Purchases.setLogLevel({ level: LOG_LEVEL.DEBUG });

    console.log('✅ RevenueCat initialisé avec succès pour TarotMystik');
  } catch (error) {
    console.error('❌ Erreur initialisation RevenueCat:', error);
  }
}

/**
 * 📦 Récupération des offres disponibles
 */
export async function getOfferings(): Promise<PurchasesOfferings | null> {
  if (!Capacitor.isNativePlatform()) {
    console.log('🌐 getOfferings : Non disponible sur Web');
    return null;
  }

  try {
    const result = await Purchases.getOfferings();
    console.log('📦 Offres récupérées:', result);
    return result;
  } catch (error) {
    console.error('❌ Erreur récupération offres:', error);
    return null;
  }
}

/**
 * 🛒 Achat d'un package
 * ✅ Stockage 100% local, pas de backend
 */
export async function purchasePackage(
  aPackage: PurchasesPackage,
  email: string
): Promise<{ success: boolean; customerInfo?: CustomerInfo }> {
  if (!Capacitor.isNativePlatform()) {
    console.log('🌐 purchasePackage : Non disponible sur Web');
    return { success: false };
  }

  try {
    console.log('🛒 Achat en cours pour:', email);

    // 1. Connecter l'utilisateur avec son email
    await Purchases.logIn({ appUserID: email });
    console.log(`✅ Utilisateur connecté : ${email}`);

    // 2. Effectuer l'achat via Google Play
    const purchaseResult = await Purchases.purchasePackage({ aPackage });

    // 3. Vérifier si l'entitlement Premium est actif
    const entitlements = purchaseResult.customerInfo.entitlements.active;
    const isPremiumActive = !!entitlements['premium'];

    if (isPremiumActive) {
      const premiumEntitlement = entitlements['premium'];
      const productId = premiumEntitlement.productIdentifier;
      const expirationDate = premiumEntitlement.expirationDate;

      console.log('✅ Premium activé !');
      console.log('📦 Produit acheté:', productId);
      console.log('📅 Expiration:', expirationDate || 'Pas de date (achat permanent)');

      // 4. ✅ STOCKAGE LOCAL (remplace le backend)
      await savePremiumToLocalStorage({
        email,
        productId,
        expirationDate,
        isPremium: true,
        activatedAt: new Date().toISOString()
      });

      return { success: true, customerInfo: purchaseResult.customerInfo };
    }

    console.warn('⚠️ Premium non actif après achat');
    return { success: false };
  } catch (error: any) {
    if (error.userCancelled) {
      console.log('❌ Achat annulé par l\'utilisateur');
    } else {
      console.error('❌ Erreur achat:', error);
    }
    return { success: false };
  }
}

/**
 * ♻️ Restauration des achats
 * ✅ Stockage 100% local, pas de backend
 */
export async function restorePurchases(
  email: string
): Promise<{ success: boolean; customerInfo?: CustomerInfo }> {
  if (!Capacitor.isNativePlatform()) {
    console.log('🌐 restorePurchases : Non disponible sur Web');
    return { success: false };
  }

  try {
    console.log('♻️ Restauration en cours pour:', email);

    // 1. Connecter l'utilisateur
    await Purchases.logIn({ appUserID: email });
    console.log(`✅ Utilisateur connecté pour restauration : ${email}`);

    // 2. Restaurer les achats Google Play
    const result = await Purchases.restorePurchases();

    // 3. Vérifier si l'entitlement Premium est actif
    const entitlements = result.customerInfo.entitlements.active;
    const isPremiumActive = !!entitlements['premium'];

    if (isPremiumActive) {
      const premiumEntitlement = entitlements['premium'];
      const productId = premiumEntitlement.productIdentifier;
      const expirationDate = premiumEntitlement.expirationDate;

      console.log('✅ Premium restauré !');
      console.log('📦 Produit restauré:', productId);
      console.log('📅 Expiration:', expirationDate || 'Pas de date (achat permanent)');

      // 4. ✅ STOCKAGE LOCAL (remplace le backend)
      await savePremiumToLocalStorage({
        email,
        productId,
        expirationDate,
        isPremium: true,
        activatedAt: new Date().toISOString()
      });

      return { success: true, customerInfo: result.customerInfo };
    }

    console.warn('⚠️ Aucun abonnement actif trouvé lors de la restauration');
    return { success: false };
  } catch (error) {
    console.error('❌ Erreur restauration:', error);
    return { success: false };
  }
}

/**
 * 👑 Vérification du statut premium
 * ✅ Vérifie d'abord dans RevenueCat, sinon vérifie localStorage
 */
export async function checkPremiumStatus(email: string): Promise<boolean> {
  if (!Capacitor.isNativePlatform()) {
    // Sur web, vérifier uniquement localStorage
    return await checkPremiumFromLocalStorage(email);
  }

  try {
    // 1. Vérifier dans RevenueCat (source de vérité)
    await Purchases.logIn({ appUserID: email });
    const result = await Purchases.getCustomerInfo();

    const entitlements = result.customerInfo.entitlements.active;
    const isPremium = !!entitlements['premium'];

    console.log('👑 Statut Premium (RevenueCat):', isPremium);

    // 2. Synchroniser avec localStorage
    if (isPremium) {
      const premiumEntitlement = entitlements['premium'];
      await savePremiumToLocalStorage({
        email,
        productId: premiumEntitlement.productIdentifier,
        expirationDate: premiumEntitlement.expirationDate,
        isPremium: true,
        activatedAt: new Date().toISOString()
      });
    } else {
      await clearPremiumFromLocalStorage(email);
    }

    return isPremium;
  } catch (error) {
    console.error('❌ Erreur vérification Premium (RevenueCat):', error);

    // Fallback : vérifier dans localStorage
    return await checkPremiumFromLocalStorage(email);
  }
}

// ==================== STOCKAGE LOCAL ====================

interface PremiumData {
  email: string;
  productId: string;
  expirationDate: string | null;
  isPremium: boolean;
  activatedAt: string;
}

/**
 * 💾 Sauvegarder le statut Premium dans localStorage
 */
async function savePremiumToLocalStorage(data: PremiumData): Promise<void> {
  try {
    const key = `tarotmystik_premium_${data.email.toLowerCase().trim()}`;
    localStorage.setItem(key, JSON.stringify(data));
    console.log('💾 Premium sauvegardé dans localStorage pour:', data.email);
  } catch (error) {
    console.error('❌ Erreur sauvegarde localStorage:', error);
  }
}

/**
 * 🔍 Vérifier le statut Premium depuis localStorage
 */
async function checkPremiumFromLocalStorage(email: string): Promise<boolean> {
  try {
    const key = `tarotmystik_premium_${email.toLowerCase().trim()}`;
    const data = localStorage.getItem(key);

    if (!data) {
      console.log('🔍 Pas de Premium trouvé dans localStorage pour:', email);
      return false;
    }

    const premiumData: PremiumData = JSON.parse(data);

    // Vérifier si le Premium a expiré
    if (premiumData.expirationDate) {
      const expirationDate = new Date(premiumData.expirationDate);
      const now = new Date();

      if (expirationDate < now) {
        console.log('⏰ Premium expiré dans localStorage pour:', email);
        await clearPremiumFromLocalStorage(email);
        return false;
      }
    }

    console.log('✅ Premium actif dans localStorage pour:', email);
    return premiumData.isPremium;
  } catch (error) {
    console.error('❌ Erreur vérification localStorage:', error);
    return false;
  }
}

/**
 * 🗑️ Supprimer le Premium du localStorage
 */
async function clearPremiumFromLocalStorage(email: string): Promise<void> {
  try {
    const key = `tarotmystik_premium_${email.toLowerCase().trim()}`;
    localStorage.removeItem(key);
    console.log('🗑️ Premium supprimé du localStorage pour:', email);
  } catch (error) {
    console.error('❌ Erreur suppression localStorage:', error);
  }
}

/**
 * 📊 Récupérer les données Premium depuis localStorage
 */
export async function getPremiumData(email: string): Promise<PremiumData | null> {
  try {
    const key = `tarotmystik_premium_${email.toLowerCase().trim()}`;
    const data = localStorage.getItem(key);

    if (!data) return null;

    return JSON.parse(data);
  } catch (error) {
    console.error('❌ Erreur récupération données Premium:', error);
    return null;
  }
}