// client/src/data/wheelData.ts
// 🌙 Roue de la Destinée - Palette Monochrome Nuit Étoilée

export interface WheelSegment {
  id: string;
  label: string; // ⚠️ Deprecated - utilisé seulement comme fallback
  color: string;
}

// ✨ 8 segments en dégradés de bleu nuit élégants
// Alternance bleu marine profond ↔ bleu nuit clair
// Très transparent pour effet mystique
export const wheelSegments: WheelSegment[] = [
  { id: 'love', label: 'Love', color: 'rgba(30, 58, 138, 0.35)' },          // Bleu marine profond
  { id: 'work', label: 'Work', color: 'rgba(56, 189, 248, 0.30)' },         // Cyan clair
  { id: 'money', label: 'Money', color: 'rgba(37, 99, 235, 0.35)' },        // Bleu royal
  { id: 'health', label: 'Health', color: 'rgba(103, 232, 249, 0.28)' },    // Cyan très pâle
  { id: 'family', label: 'Family', color: 'rgba(29, 78, 216, 0.35)' },      // Bleu foncé
  { id: 'success', label: 'success', color: 'rgba(125, 211, 252, 0.28)' },  // Bleu ciel pâle
  { id: 'friendship', label: 'Friendship', color: 'rgba(30, 64, 175, 0.35)' }, // Bleu indigo
  { id: 'mystery', label: 'mystery', color: 'rgba(34, 211, 238, 0.30)' }    // Cyan cristal
];