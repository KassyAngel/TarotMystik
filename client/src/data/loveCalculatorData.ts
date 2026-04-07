// client/src/data/loveCalculatorData.ts
// ✅ v2 — Mode amour / amitié, variation quotidienne, hash FNV-1a

export type CompatibilityMode = 'love' | 'friendship';

export interface LoveResult {
  range: [number, number];
  titleKey: string;
  glowColor: string;
  colorFrom: string;
  colorTo: string;
  messagesKeys: string[];
  adviceKeys: string[];
}

// ── Hash FNV-1a (inchangé, performant) ──────────────────────────────────────
function betterHash(str: string): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  hash ^= hash >>> 16;
  hash = Math.imul(hash, 0x85ebca6b);
  hash ^= hash >>> 13;
  hash = Math.imul(hash, 0xc2b2ae35);
  hash ^= hash >>> 16;
  return Math.abs(hash);
}

function getTodaySeed(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

// ── Calcul du pourcentage ────────────────────────────────────────────────────
export function calculateCompatibilityPercentage(
  name1: string,
  name2: string,
  mode: CompatibilityMode
): number {
  const n1 = name1.toLowerCase().trim();
  const n2 = name2.toLowerCase().trim();
  const sorted = [n1, n2].sort();
  // Le mode est intégré dans la graine → même duo = scores différents selon mode
  const seed = `${sorted[0]}|${sorted[1]}|${mode}|${getTodaySeed()}`;
  const hash = betterHash(seed);
  // Range 25–98 : évite les extrêmes déprimants
  return 25 + (hash % 74);
}

// Alias rétrocompatible pour ne pas casser les imports existants
export const calculateLovePercentage = (n1: string, n2: string) =>
  calculateCompatibilityPercentage(n1, n2, 'love');

// ── Sélection message / conseil (varie chaque jour) ─────────────────────────
export function getRandomMessage(result: LoveResult): string {
  const hash = betterHash(getTodaySeed() + 'msg');
  return result.messagesKeys[hash % result.messagesKeys.length];
}

export function getRandomAdvice(result: LoveResult): string {
  const hash = betterHash(getTodaySeed() + 'adv');
  return result.adviceKeys[hash % result.adviceKeys.length];
}

// ── Table des résultats AMOUR ────────────────────────────────────────────────
const LOVE_RESULTS: LoveResult[] = [
  {
    range: [25, 39],
    titleKey:   'loveCalculator.love.results.incompatible.title',
    glowColor:  'rgba(99,102,241,0.30)',
    colorFrom:  '#4338ca', colorTo: '#6366f1',
    messagesKeys: [1,2,3,4,5,6].map(n => `loveCalculator.love.results.incompatible.message${n}`),
    adviceKeys:   [1,2,3].map(n => `loveCalculator.love.results.incompatible.advice${n}`),
  },
  {
    range: [40, 49],
    titleKey:   'loveCalculator.love.results.veryWeak.title',
    glowColor:  'rgba(99,102,241,0.35)',
    colorFrom:  '#4f46e5', colorTo: '#818cf8',
    messagesKeys: [1,2,3,4,5,6].map(n => `loveCalculator.love.results.veryWeak.message${n}`),
    adviceKeys:   [1,2,3].map(n => `loveCalculator.love.results.veryWeak.advice${n}`),
  },
  {
    range: [50, 54],
    titleKey:   'loveCalculator.love.results.weak.title',
    glowColor:  'rgba(99,102,241,0.40)',
    colorFrom:  '#6366f1', colorTo: '#a5b4fc',
    messagesKeys: [1,2,3,4,5,6].map(n => `loveCalculator.love.results.weak.message${n}`),
    adviceKeys:   [1,2,3].map(n => `loveCalculator.love.results.weak.advice${n}`),
  },
  {
    range: [55, 59],
    titleKey:   'loveCalculator.love.results.lowModerate.title',
    glowColor:  'rgba(109,40,217,0.45)',
    colorFrom:  '#7c3aed', colorTo: '#a78bfa',
    messagesKeys: [1,2,3,4,5,6].map(n => `loveCalculator.love.results.lowModerate.message${n}`),
    adviceKeys:   [1,2,3].map(n => `loveCalculator.love.results.lowModerate.advice${n}`),
  },
  {
    range: [60, 64],
    titleKey:   'loveCalculator.love.results.moderate.title',
    glowColor:  'rgba(124,58,237,0.50)',
    colorFrom:  '#8b5cf6', colorTo: '#c4b5fd',
    messagesKeys: [1,2,3,4,5,6].map(n => `loveCalculator.love.results.moderate.message${n}`),
    adviceKeys:   [1,2,3].map(n => `loveCalculator.love.results.moderate.advice${n}`),
  },
  {
    range: [65, 69],
    titleKey:   'loveCalculator.love.results.goodStart.title',
    glowColor:  'rgba(139,92,246,0.55)',
    colorFrom:  '#9333ea', colorTo: '#d8b4fe',
    messagesKeys: [1,2,3,4,5,6].map(n => `loveCalculator.love.results.goodStart.message${n}`),
    adviceKeys:   [1,2,3].map(n => `loveCalculator.love.results.goodStart.advice${n}`),
  },
  {
    range: [70, 79],
    titleKey:   'loveCalculator.love.results.promising.title',
    glowColor:  'rgba(168,85,247,0.60)',
    colorFrom:  '#a855f7', colorTo: '#e9d5ff',
    messagesKeys: [1,2,3,4,5,6].map(n => `loveCalculator.love.results.promising.message${n}`),
    adviceKeys:   [1,2,3].map(n => `loveCalculator.love.results.promising.advice${n}`),
  },
  {
    range: [80, 89],
    titleKey:   'loveCalculator.love.results.strong.title',
    glowColor:  'rgba(192,132,252,0.65)',
    colorFrom:  '#c084fc', colorTo: '#f3e8ff',
    messagesKeys: [1,2,3,4,5,6].map(n => `loveCalculator.love.results.strong.message${n}`),
    adviceKeys:   [1,2,3].map(n => `loveCalculator.love.results.strong.advice${n}`),
  },
  {
    range: [90, 94],
    titleKey:   'loveCalculator.love.results.exceptional.title',
    glowColor:  'rgba(216,180,254,0.70)',
    colorFrom:  '#d8b4fe', colorTo: '#faf5ff',
    messagesKeys: [1,2,3,4,5,6].map(n => `loveCalculator.love.results.exceptional.message${n}`),
    adviceKeys:   [1,2,3].map(n => `loveCalculator.love.results.exceptional.advice${n}`),
  },
  {
    range: [95, 98],
    titleKey:   'loveCalculator.love.results.perfect.title',
    glowColor:  'rgba(240,171,252,0.80)',
    colorFrom:  '#e879f9', colorTo: '#fdf4ff',
    messagesKeys: [1,2,3,4,5,6].map(n => `loveCalculator.love.results.perfect.message${n}`),
    adviceKeys:   [1,2,3].map(n => `loveCalculator.love.results.perfect.advice${n}`),
  },
];

// ── Table des résultats AMITIÉ ───────────────────────────────────────────────
const FRIENDSHIP_RESULTS: LoveResult[] = [
  {
    range: [25, 39],
    titleKey:   'loveCalculator.friendship.results.incompatible.title',
    glowColor:  'rgba(99,102,241,0.30)',
    colorFrom:  '#4338ca', colorTo: '#6366f1',
    messagesKeys: [1,2,3,4,5,6].map(n => `loveCalculator.friendship.results.incompatible.message${n}`),
    adviceKeys:   [1,2,3].map(n => `loveCalculator.friendship.results.incompatible.advice${n}`),
  },
  {
    range: [40, 49],
    titleKey:   'loveCalculator.friendship.results.veryWeak.title',
    glowColor:  'rgba(99,102,241,0.35)',
    colorFrom:  '#4f46e5', colorTo: '#818cf8',
    messagesKeys: [1,2,3,4,5,6].map(n => `loveCalculator.friendship.results.veryWeak.message${n}`),
    adviceKeys:   [1,2,3].map(n => `loveCalculator.friendship.results.veryWeak.advice${n}`),
  },
  {
    range: [50, 54],
    titleKey:   'loveCalculator.friendship.results.weak.title',
    glowColor:  'rgba(99,102,241,0.40)',
    colorFrom:  '#6366f1', colorTo: '#a5b4fc',
    messagesKeys: [1,2,3,4,5,6].map(n => `loveCalculator.friendship.results.weak.message${n}`),
    adviceKeys:   [1,2,3].map(n => `loveCalculator.friendship.results.weak.advice${n}`),
  },
  {
    range: [55, 59],
    titleKey:   'loveCalculator.friendship.results.lowModerate.title',
    glowColor:  'rgba(109,40,217,0.45)',
    colorFrom:  '#7c3aed', colorTo: '#a78bfa',
    messagesKeys: [1,2,3,4,5,6].map(n => `loveCalculator.friendship.results.lowModerate.message${n}`),
    adviceKeys:   [1,2,3].map(n => `loveCalculator.friendship.results.lowModerate.advice${n}`),
  },
  {
    range: [60, 64],
    titleKey:   'loveCalculator.friendship.results.moderate.title',
    glowColor:  'rgba(124,58,237,0.50)',
    colorFrom:  '#8b5cf6', colorTo: '#c4b5fd',
    messagesKeys: [1,2,3,4,5,6].map(n => `loveCalculator.friendship.results.moderate.message${n}`),
    adviceKeys:   [1,2,3].map(n => `loveCalculator.friendship.results.moderate.advice${n}`),
  },
  {
    range: [65, 69],
    titleKey:   'loveCalculator.friendship.results.goodStart.title',
    glowColor:  'rgba(139,92,246,0.55)',
    colorFrom:  '#9333ea', colorTo: '#d8b4fe',
    messagesKeys: [1,2,3,4,5,6].map(n => `loveCalculator.friendship.results.goodStart.message${n}`),
    adviceKeys:   [1,2,3].map(n => `loveCalculator.friendship.results.goodStart.advice${n}`),
  },
  {
    range: [70, 79],
    titleKey:   'loveCalculator.friendship.results.promising.title',
    glowColor:  'rgba(168,85,247,0.60)',
    colorFrom:  '#a855f7', colorTo: '#e9d5ff',
    messagesKeys: [1,2,3,4,5,6].map(n => `loveCalculator.friendship.results.promising.message${n}`),
    adviceKeys:   [1,2,3].map(n => `loveCalculator.friendship.results.promising.advice${n}`),
  },
  {
    range: [80, 89],
    titleKey:   'loveCalculator.friendship.results.strong.title',
    glowColor:  'rgba(192,132,252,0.65)',
    colorFrom:  '#c084fc', colorTo: '#f3e8ff',
    messagesKeys: [1,2,3,4,5,6].map(n => `loveCalculator.friendship.results.strong.message${n}`),
    adviceKeys:   [1,2,3].map(n => `loveCalculator.friendship.results.strong.advice${n}`),
  },
  {
    range: [90, 94],
    titleKey:   'loveCalculator.friendship.results.exceptional.title',
    glowColor:  'rgba(216,180,254,0.70)',
    colorFrom:  '#d8b4fe', colorTo: '#faf5ff',
    messagesKeys: [1,2,3,4,5,6].map(n => `loveCalculator.friendship.results.exceptional.message${n}`),
    adviceKeys:   [1,2,3].map(n => `loveCalculator.friendship.results.exceptional.advice${n}`),
  },
  {
    range: [95, 98],
    titleKey:   'loveCalculator.friendship.results.perfect.title',
    glowColor:  'rgba(240,171,252,0.80)',
    colorFrom:  '#e879f9', colorTo: '#fdf4ff',
    messagesKeys: [1,2,3,4,5,6].map(n => `loveCalculator.friendship.results.perfect.message${n}`),
    adviceKeys:   [1,2,3].map(n => `loveCalculator.friendship.results.perfect.advice${n}`),
  },
];

// ── Fonction principale ──────────────────────────────────────────────────────
export function getLoveResult(
  percentage: number,
  mode: CompatibilityMode = 'love'
): LoveResult {
  const table = mode === 'friendship' ? FRIENDSHIP_RESULTS : LOVE_RESULTS;
  return (
    table.find(r => percentage >= r.range[0] && percentage <= r.range[1]) ??
    table[4]
  );
}