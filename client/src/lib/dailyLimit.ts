// src/lib/dailyLimit.ts
interface DailyReadingData {
  lastDate: string;
  cardIndices: number[];
  hasUsedToday: boolean;
}

// ✅ NOUVEAU: Données séparées pour "Qui pense à toi"
interface SecretThoughtsData {
  lastDate: string;
  hasUsedToday: boolean;
  selectedCard: string; // ID de la carte choisie
}

const STORAGE_KEY = 'dailyReading';
const SECRET_THOUGHTS_KEY = 'secretThoughtsDaily'; // ✅ Clé séparée

// Obtenir la date actuelle au format YYYY-MM-DD (fuseau local)
export function getCurrentDate(): string {
  const now = new Date();
  return now.toLocaleDateString('en-CA'); // Format ISO: YYYY-MM-DD
}

// ==========================================
// TIRAGE DU JOUR (Ancien système - Deprecated)
// ==========================================
export function hasUsedDailyReading(): boolean {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return false;
    const data: DailyReadingData = JSON.parse(stored);
    const today = getCurrentDate();
    return data.lastDate === today && data.hasUsedToday;
  } catch (error) {
    console.error('Erreur lors de la vérification du tirage quotidien:', error);
    return false;
  }
}

export function saveDailyReading(cardIndices: number[]): void {
  try {
    const data: DailyReadingData = {
      lastDate: getCurrentDate(),
      cardIndices,
      hasUsedToday: true
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Erreur lors de la sauvegarde du tirage quotidien:', error);
  }
}

export function getTodayReading(): number[] | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    const data: DailyReadingData = JSON.parse(stored);
    const today = getCurrentDate();
    if (data.lastDate === today) {
      return data.cardIndices;
    }
    return null;
  } catch (error) {
    console.error('Erreur lors de la récupération du tirage quotidien:', error);
    return null;
  }
}

export function resetDailyReading(): void {
  localStorage.removeItem(STORAGE_KEY);
}

// ==========================================
// ✅ NOUVEAU: SECRET THOUGHTS (1/jour)
// ==========================================

/**
 * Vérifie si "Qui pense à toi" a déjà été tiré aujourd'hui
 */
export function hasUsedSecretThoughtsToday(): boolean {
  try {
    const stored = localStorage.getItem(SECRET_THOUGHTS_KEY);
    if (!stored) return false;

    const data: SecretThoughtsData = JSON.parse(stored);
    const today = getCurrentDate();

    return data.lastDate === today && data.hasUsedToday;
  } catch (error) {
    console.error('Erreur vérification Secret Thoughts:', error);
    return false;
  }
}

/**
 * Sauvegarde le tirage "Qui pense à toi"
 */
export function saveSecretThoughtsDraw(cardId: string): void {
  try {
    const data: SecretThoughtsData = {
      lastDate: getCurrentDate(),
      hasUsedToday: true,
      selectedCard: cardId
    };
    localStorage.setItem(SECRET_THOUGHTS_KEY, JSON.stringify(data));
    console.log(`✅ Secret Thoughts sauvegardé: ${cardId}`);
  } catch (error) {
    console.error('Erreur sauvegarde Secret Thoughts:', error);
  }
}

/**
 * Récupère le tirage "Qui pense à toi" du jour
 */
export function getTodaySecretThoughts(): string | null {
  try {
    const stored = localStorage.getItem(SECRET_THOUGHTS_KEY);
    if (!stored) return null;

    const data: SecretThoughtsData = JSON.parse(stored);
    const today = getCurrentDate();

    if (data.lastDate === today) {
      return data.selectedCard;
    }
    return null;
  } catch (error) {
    console.error('Erreur récupération Secret Thoughts:', error);
    return null;
  }
}

/**
 * Reset manuel pour "Qui pense à toi"
 */
export function resetSecretThoughts(): void {
  localStorage.removeItem(SECRET_THOUGHTS_KEY);
  console.log('🔄 Secret Thoughts reset');
}

// ==========================================
// UTILITAIRES COMMUNS
// ==========================================

/**
 * Calculer le temps restant jusqu'à minuit
 */
export function getTimeUntilMidnight(): { hours: number; minutes: number } {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);

  const diff = midnight.getTime() - now.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  return { hours, minutes };
}

/**
 * Reset TOUS les tirages quotidiens (pour debug)
 */
export function resetAllDailyLimits(): void {
  resetDailyReading();
  resetSecretThoughts();
  console.log('🔄 Tous les tirages quotidiens ont été reset');
}