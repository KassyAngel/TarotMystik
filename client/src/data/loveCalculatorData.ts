// client/src/data/loveCalculatorData.ts
// 🎯 Calcul de compatibilité amoureuse avec VARIATION QUOTIDIENNE

export interface LoveResult {
  range: [number, number];
  titleKey: string;
  emoji: string;
  glowColor: string;
  messagesKeys: string[];
  adviceKeys: string[];
}

/**
 * Obtient la date du jour au format YYYY-MM-DD
 * Utilisé comme graine pour varier les résultats quotidiennement
 */
function getTodaySeed(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * ✅ FONCTION DE HACHAGE AMÉLIORÉE
 * Génère un nombre vraiment aléatoire et distribué uniformément
 * Basée sur le MurmurHash3 (simplifié)
 */
function betterHash(str: string): number {
  let hash = 0x811c9dc5; // Seed FNV-1a

  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193); // Multiplication FNV prime
  }

  // Mélange final pour distribuer uniformément
  hash ^= hash >>> 16;
  hash = Math.imul(hash, 0x85ebca6b);
  hash ^= hash >>> 13;
  hash = Math.imul(hash, 0xc2b2ae35);
  hash ^= hash >>> 16;

  return Math.abs(hash);
}

/**
 * 🎲 Calcule le pourcentage d'amour avec variation quotidienne
 * Le même couple aura un résultat VRAIMENT différent chaque jour
 */
export function calculateLovePercentage(name1: string, name2: string): number {
  // Normaliser les prénoms (minuscules, sans espaces)
  const n1 = name1.toLowerCase().trim();
  const n2 = name2.toLowerCase().trim();

  // Trier alphabétiquement pour que "Alice+Bob" = "Bob+Alice"
  const sortedNames = [n1, n2].sort();

  // Créer une chaîne unique avec les noms + la date du jour
  const todaySeed = getTodaySeed();
  const uniqueString = `${sortedNames[0]}❤️${sortedNames[1]}🌙${todaySeed}`;

  console.log(`🎲 Love Calculator - Input: "${uniqueString}"`);

  // ✅ Utiliser le meilleur hash
  const hash = betterHash(uniqueString);

  // Convertir en pourcentage (0-100)
  const percentage = hash % 101; // 0 à 100 inclus

  console.log(`💕 Hash: ${hash} → Pourcentage: ${percentage}%`);

  return percentage;
}

/**
 * Sélectionne un message aléatoire parmi ceux disponibles
 * Change aussi chaque jour
 */
export function getRandomMessage(result: LoveResult): string {
  const messages = result.messagesKeys;
  const todaySeed = getTodaySeed();
  const hash = betterHash(todaySeed + 'message');
  const index = hash % messages.length;
  return messages[index];
}

/**
 * Sélectionne un conseil aléatoire parmi ceux disponibles
 * Change aussi chaque jour
 */
export function getRandomAdvice(result: LoveResult): string {
  const advices = result.adviceKeys;
  const todaySeed = getTodaySeed();
  const hash = betterHash(todaySeed + 'advice');
  const index = hash % advices.length;
  return advices[index];
}

/**
 * Retourne le résultat d'amour basé sur le pourcentage
 * UTILISE TES CLÉS DE TRADUCTION EXISTANTES
 */
export function getLoveResult(percentage: number): LoveResult {
  const results: LoveResult[] = [
    // 0% - Incompatible
    {
      range: [0, 0],
      titleKey: 'loveCalculator.results.incompatible.title',
      emoji: '❌',
      glowColor: '#991b1b',
      messagesKeys: [
        'loveCalculator.results.incompatible.message1',
        'loveCalculator.results.incompatible.message2',
        'loveCalculator.results.incompatible.message3',
        'loveCalculator.results.incompatible.message4',
        'loveCalculator.results.incompatible.message5',
        'loveCalculator.results.incompatible.message6'
      ],
      adviceKeys: [
        'loveCalculator.results.incompatible.advice1',
        'loveCalculator.results.incompatible.advice2',
        'loveCalculator.results.incompatible.advice3'
      ]
    },
    // 1-15% - Connexion Très Faible
    {
      range: [1, 15],
      titleKey: 'loveCalculator.results.veryWeak.title',
      emoji: '💔',
      glowColor: '#6b7280',
      messagesKeys: [
        'loveCalculator.results.veryWeak.message1',
        'loveCalculator.results.veryWeak.message2',
        'loveCalculator.results.veryWeak.message3',
        'loveCalculator.results.veryWeak.message4',
        'loveCalculator.results.veryWeak.message5',
        'loveCalculator.results.veryWeak.message6'
      ],
      adviceKeys: [
        'loveCalculator.results.veryWeak.advice1',
        'loveCalculator.results.veryWeak.advice2',
        'loveCalculator.results.veryWeak.advice3'
      ]
    },
    // 16-30% - Connexion Faible
    {
      range: [16, 30],
      titleKey: 'loveCalculator.results.weak.title',
      emoji: '😐',
      glowColor: '#92400e',
      messagesKeys: [
        'loveCalculator.results.weak.message1',
        'loveCalculator.results.weak.message2',
        'loveCalculator.results.weak.message3',
        'loveCalculator.results.weak.message4',
        'loveCalculator.results.weak.message5',
        'loveCalculator.results.weak.message6'
      ],
      adviceKeys: [
        'loveCalculator.results.weak.advice1',
        'loveCalculator.results.weak.advice2',
        'loveCalculator.results.weak.advice3'
      ]
    },
    // 31-45% - Potentiel Limité
    {
      range: [31, 45],
      titleKey: 'loveCalculator.results.lowModerate.title',
      emoji: '🤔',
      glowColor: '#f59e0b',
      messagesKeys: [
        'loveCalculator.results.lowModerate.message1',
        'loveCalculator.results.lowModerate.message2',
        'loveCalculator.results.lowModerate.message3',
        'loveCalculator.results.lowModerate.message4',
        'loveCalculator.results.lowModerate.message5',
        'loveCalculator.results.lowModerate.message6'
      ],
      adviceKeys: [
        'loveCalculator.results.lowModerate.advice1',
        'loveCalculator.results.lowModerate.advice2',
        'loveCalculator.results.lowModerate.advice3'
      ]
    },
    // 46-55% - Potentiel Fragile
    {
      range: [46, 55],
      titleKey: 'loveCalculator.results.moderate.title',
      emoji: '🌙',
      glowColor: '#fbbf24',
      messagesKeys: [
        'loveCalculator.results.moderate.message1',
        'loveCalculator.results.moderate.message2',
        'loveCalculator.results.moderate.message3',
        'loveCalculator.results.moderate.message4',
        'loveCalculator.results.moderate.message5',
        'loveCalculator.results.moderate.message6'
      ],
      adviceKeys: [
        'loveCalculator.results.moderate.advice1',
        'loveCalculator.results.moderate.advice2',
        'loveCalculator.results.moderate.advice3'
      ]
    },
    // 56-70% - Bon Départ
    {
      range: [56, 70],
      titleKey: 'loveCalculator.results.goodStart.title',
      emoji: '🙂',
      glowColor: '#10b981',
      messagesKeys: [
        'loveCalculator.results.goodStart.message1',
        'loveCalculator.results.goodStart.message2',
        'loveCalculator.results.goodStart.message3',
        'loveCalculator.results.goodStart.message4',
        'loveCalculator.results.goodStart.message5',
        'loveCalculator.results.goodStart.message6'
      ],
      adviceKeys: [
        'loveCalculator.results.goodStart.advice1',
        'loveCalculator.results.goodStart.advice2',
        'loveCalculator.results.goodStart.advice3'
      ]
    },
    // 71-80% - Connexion Prometteuse
    {
      range: [71, 80],
      titleKey: 'loveCalculator.results.promising.title',
      emoji: '😊',
      glowColor: '#ec4899',
      messagesKeys: [
        'loveCalculator.results.promising.message1',
        'loveCalculator.results.promising.message2',
        'loveCalculator.results.promising.message3',
        'loveCalculator.results.promising.message4',
        'loveCalculator.results.promising.message5',
        'loveCalculator.results.promising.message6'
      ],
      adviceKeys: [
        'loveCalculator.results.promising.advice1',
        'loveCalculator.results.promising.advice2',
        'loveCalculator.results.promising.advice3'
      ]
    },
    // 81-90% - Compatibilité Forte
    {
      range: [81, 90],
      titleKey: 'loveCalculator.results.strong.title',
      emoji: '😍',
      glowColor: '#f43f5e',
      messagesKeys: [
        'loveCalculator.results.strong.message1',
        'loveCalculator.results.strong.message2',
        'loveCalculator.results.strong.message3',
        'loveCalculator.results.strong.message4',
        'loveCalculator.results.strong.message5',
        'loveCalculator.results.strong.message6'
      ],
      adviceKeys: [
        'loveCalculator.results.strong.advice1',
        'loveCalculator.results.strong.advice2',
        'loveCalculator.results.strong.advice3'
      ]
    },
    // 91-99% - Union Exceptionnelle
    {
      range: [91, 99],
      titleKey: 'loveCalculator.results.exceptional.title',
      emoji: '💖',
      glowColor: '#e11d48',
      messagesKeys: [
        'loveCalculator.results.exceptional.message1',
        'loveCalculator.results.exceptional.message2',
        'loveCalculator.results.exceptional.message3',
        'loveCalculator.results.exceptional.message4',
        'loveCalculator.results.exceptional.message5',
        'loveCalculator.results.exceptional.message6'
      ],
      adviceKeys: [
        'loveCalculator.results.exceptional.advice1',
        'loveCalculator.results.exceptional.advice2',
        'loveCalculator.results.exceptional.advice3'
      ]
    },
    // 100% - Âmes Sœurs
    {
      range: [100, 100],
      titleKey: 'loveCalculator.results.perfect.title',
      emoji: '💝',
      glowColor: '#be123c',
      messagesKeys: [
        'loveCalculator.results.perfect.message1',
        'loveCalculator.results.perfect.message2',
        'loveCalculator.results.perfect.message3',
        'loveCalculator.results.perfect.message4',
        'loveCalculator.results.perfect.message5',
        'loveCalculator.results.perfect.message6'
      ],
      adviceKeys: [
        'loveCalculator.results.perfect.advice1',
        'loveCalculator.results.perfect.advice2',
        'loveCalculator.results.perfect.advice3'
      ]
    }
  ];

  return results.find(r => percentage >= r.range[0] && percentage <= r.range[1]) || results[4];
}