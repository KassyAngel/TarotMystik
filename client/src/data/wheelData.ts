// client/src/data/wheelData.ts
// 🌟 Roue de la Destinée - Design Mystique Professionnel

export interface WheelSegment {
  id: string;
  label: string; // ⚠️ Deprecated - utilisé seulement comme fallback
  color: string;
}

// ✨ 8 segments bleu nuit profond avec effet translucide
export const wheelSegments: WheelSegment[] = [
  { id: 'love', label: 'Love', color: 'rgba(15, 23, 42, 0.92)' },
  { id: 'work', label: 'Work', color: 'rgba(30, 41, 59, 0.88)' },
  { id: 'money', label: 'Money', color: 'rgba(15, 23, 42, 0.92)' },
  { id: 'health', label: 'Health', color: 'rgba(30, 41, 59, 0.88)' },
  { id: 'family', label: 'Family', color: 'rgba(15, 23, 42, 0.92)' },
  { id: 'success', label: 'Success', color: 'rgba(30, 41, 59, 0.88)' },
  { id: 'friendship', label: 'Friendship', color: 'rgba(15, 23, 42, 0.92)' },
  { id: 'mystery', label: 'Mystery', color: 'rgba(30, 41, 59, 0.88)' }
];