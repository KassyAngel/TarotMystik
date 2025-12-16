// client/src/data/wheelData.ts
// 🌌 Roue de la Destinée - Palette Galaxie Cosmique

export interface WheelSegment {
  id: string;
  label: string; // ⚠️ Deprecated - utilisé seulement comme fallback
  color: string;
}

// ✨ 8 segments avec palette luxueuse dégradée
// Tons riches et profonds avec effet premium
export const wheelSegments: WheelSegment[] = [
  { id: 'love', label: 'Love', color: '#8b5cf6' },          // Violet royal
  { id: 'work', label: 'Work', color: '#06b6d4' },          // Cyan cristal
  { id: 'money', label: 'Money', color: '#a855f7' },        // Violet lumineux
  { id: 'health', label: 'Health', color: '#0891b2' },      // Cyan profond
  { id: 'family', label: 'Family', color: '#9333ea' },      // Purple éclatant
  { id: 'success', label: 'success', color: '#0e7490' },    // Teal élégant
  { id: 'friendship', label: 'Friendship', color: '#7c3aed' }, // Violet intense
  { id: 'mystery', label: 'mystery', color: '#0284c7' }     // Sky mystique
];