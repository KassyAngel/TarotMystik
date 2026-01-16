import { z } from 'zod';

// ✅ TYPES D'ORACLES avec Magicien (remplace pendulum)
export const OracleTypeSchema = z.enum([
  'loveOracle',
  'lunar',
  'runes',
  'wizard',        // ✅ NOUVEAU : Azraël le Magicien (remplace 'pendulum')
  'wheel',
  'loveCalculator'
]);

export type OracleType = z.infer<typeof OracleTypeSchema>;

// Types d'oracles basés sur des cartes
export type CardBasedOracleType = 'loveOracle' | 'lunar' | 'runes';

// ✅ Phases lunaires
export const LunarPhaseSchema = z.enum([
  'newMoon',
  'firstQuarter',
  'fullMoon',
  'lastQuarter'
]);

export type LunarPhase = z.infer<typeof LunarPhaseSchema>;

// Schémas de validation
export const ZodiacSignSchema = z.object({
  name: z.string(),
  symbol: z.string(),
  startDate: z.object({
    month: z.number().min(1).max(12),
    day: z.number().min(1).max(31)
  }),
  endDate: z.object({
    month: z.number().min(1).max(12),
    day: z.number().min(1).max(31)
  })
});

export type ZodiacSign = z.infer<typeof ZodiacSignSchema>;

export const UserSessionSchema = z.object({
  name: z.string(),
  birthDate: z.string(),
  gender: z.string(),
  zodiacSign: ZodiacSignSchema.optional()
});

export type UserSession = z.infer<typeof UserSessionSchema>;

export const OracleCardSchema = z.object({
  name: z.string(),
  meaning: z.string(),
  phase: z.string().optional()
});

export type OracleCard = z.infer<typeof OracleCardSchema>;

export const OracleDataSchema = z.object({
  title: z.string(),
  description: z.string(),
  cards: z.array(OracleCardSchema)
});

export type OracleData = z.infer<typeof OracleDataSchema>;

// Schéma pour les lectures sauvegardées
export const ReadingSchema = z.object({
  id: z.string(),
  type: OracleTypeSchema,
  oracleTitle: z.string().optional(),
  date: z.date(),
  cards: z.array(z.string()).optional(),
  question: z.string().optional(),
  answer: z.string().optional(),
  notes: z.string(),
  isFavorite: z.boolean(),
  lunarPhase: z.string().optional()
});

export type Reading = z.infer<typeof ReadingSchema>;