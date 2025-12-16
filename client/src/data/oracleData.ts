// client/src/data/oracleData.ts
import { OracleData, ZodiacSign } from '@shared/schema';

// Interface pour les variations de phrases du tirage en croix
export interface CardVariations {
  pour: string[];      // Aspects positifs
  contre: string[];    // Points d'attention
  synthese: string[];  // Conseils
}

// Variations pour chaque carte (tirage en croix)
export const loveOracleVariations: Record<string, CardVariations> = {
  'lerendezvous': {
    pour: [
      "Une rencontre prometteuse se profile à l'horizon. Restez ouvert{genderSuffix} aux nouvelles opportunités.",
      "Le destin vous offre une occasion de rapprochement. Saisissez-la avec confiance.",
      "Une connexion inattendue pourrait transformer votre vie amoureuse. Faites preuve d'audace."
    ],
    contre: [
      "Attention à ne pas laisser passer une opportunité par peur ou hésitation.",
      "Un rendez-vous manqué pourrait créer des regrets. Soyez présent{genderSuffix} et attentif{genderSuffix}.",
      "La timidité ou le manque de confiance pourrait vous empêcher de saisir cette chance."
    ],
    synthese: [
      "L'amour frappe à votre porte. Osez ouvrir votre cœur et accueillir cette nouvelle énergie.",
      "Le moment est venu d'agir. Une belle rencontre vous attend si vous vous montrez disponible.",
      "Cette période est propice aux nouvelles connexions. Faites confiance au timing de l'univers."
    ]
  },

  'lemessage': {
    pour: [
      "Une communication importante est sur le point de clarifier la situation. Écoutez attentivement.",
      "Les mots justes seront trouvés pour exprimer vos sentiments profonds.",
      "Un échange sincère peut transformer votre relation de manière positive."
    ],
    contre: [
      "Attention aux malentendus ou aux non-dits qui pourraient créer de la confusion.",
      "Un silence prolongé risque d'installer le doute. Il est temps de communiquer.",
      "Les messages ambigus ou contradictoires peuvent créer de la distance émotionnelle."
    ],
    synthese: [
      "La clé réside dans une communication claire et honnête. Exprimez ce que vous ressentez vraiment.",
      "Les mots ont un pouvoir : utilisez-les avec sagesse pour construire plutôt que détruire.",
      "Un dialogue ouvert peut résoudre bien des tensions. Ne laissez pas le silence s'installer."
    ]
  },

  'ledesir': {
    pour: [
      "La passion et l'attirance sont au rendez-vous. Laissez-vous porter par cette énergie ardente.",
      "Votre magnétisme attire l'attention. Profitez de ce moment d'intense connexion.",
      "Le désir mutuel crée une alchimie puissante. Savourez cette intensité émotionnelle."
    ],
    contre: [
      "Attention à ne pas confondre désir passager et amour durable. Prenez du recul.",
      "L'intensité physique ne doit pas masquer un manque de profondeur émotionnelle.",
      "Le désir peut aveugler. Assurez-vous que vos intentions et celles de l'autre sont alignées."
    ],
    synthese: [
      "Le désir est un moteur, mais l'amour vrai demande plus. Cherchez l'équilibre entre passion et connexion.",
      "Cette attirance intense peut être le début de quelque chose de profond, à condition de ne pas brûler les étapes.",
      "Profitez de ce feu, mais n'oubliez pas de nourrir également la complicité et la tendresse."
    ]
  },

  'lecoeurouvert': {
    pour: [
      "Votre vulnérabilité devient votre force. En ouvrant votre cœur, vous invitez l'amour authentique.",
      "La sincérité de vos émotions touche l'autre profondément. Continuez à être vous-même.",
      "Cette ouverture émotionnelle crée une connexion rare et précieuse. Chérissez-la."
    ],
    contre: [
      "Attention à ne pas vous exposer trop vite à quelqu'un qui n'est pas prêt{genderSuffix} à recevoir.",
      "Votre sensibilité peut être blessée si vous ne posez pas de limites saines.",
      "Ouvrir son cœur ne signifie pas perdre son discernement. Protégez votre énergie."
    ],
    synthese: [
      "L'authenticité attire l'authenticité. En étant vrai{genderSuffix}, vous attirez des connexions sincères.",
      "Un cœur ouvert est un cœur courageux. Cette vulnérabilité est le chemin vers l'amour véritable.",
      "Partagez vos émotions avec sagesse, en choisissant des personnes dignes de votre confiance."
    ]
  },

  'lecoeurferme': {
    pour: [
      "Cette protection vous permet de prendre le temps nécessaire pour guérir et vous reconstruire.",
      "Votre prudence actuelle vous évite de vous engager dans une situation qui n'est pas faite pour vous.",
      "Ce temps de retrait est une période de réflexion salutaire avant de vous ouvrir à nouveau."
    ],
    contre: [
      "Un cœur trop fermé risque de manquer des opportunités d'amour sincère par peur du passé.",
      "Les blessures anciennes vous empêchent d'avancer. Il est temps de libérer ces blocages.",
      "En vous protégeant à l'excès, vous vous isolez et empêchez de belles connexions de se créer."
    ],
    synthese: [
      "Il est sain de se protéger, mais ne laissez pas la peur vous priver d'aimer à nouveau.",
      "Trouvez l'équilibre entre prudence et ouverture. Votre cœur mérite de se rouvrir en douceur.",
      "Cette phase de protection touche à sa fin. Préparez-vous à accueillir l'amour avec plus de sagesse."
    ]
  },

  'lechoix': {
    pour: [
      "Plusieurs chemins s'offrent à vous. Écoutez votre intuition pour faire le bon choix.",
      "Cette période d'hésitation vous permet de clarifier ce que vous voulez vraiment.",
      "Chaque option a son potentiel. Prenez le temps d'écouter votre cœur avant de décider."
    ],
    contre: [
      "L'indécision prolongée risque de créer de la confusion et de la frustration pour tous.",
      "En voulant tout avoir, vous risquez de tout perdre. Il est temps de faire un choix.",
      "Jouer sur deux tableaux mène rarement à l'épanouissement. La clarté est nécessaire."
    ],
    synthese: [
      "Votre cœur connaît la réponse. Cessez de sur-analyser et faites confiance à votre ressenti.",
      "Un choix conscient vaut mieux que l'indécision. Prenez votre décision et assumez-la pleinement.",
      "Chaque chemin a ses leçons. Choisissez celui qui résonne le plus avec vos valeurs profondes."
    ]
  },

  // Ajoutez toutes les autres cartes ici...
  // (Je vous ai montré le pattern, continuez avec les 16 autres cartes)

  'leretour': {
    pour: [
      "Une personne du passé revient avec des intentions nouvelles et plus matures.",
      "Ce retour offre une seconde chance de construire quelque chose de plus solide.",
      "Les leçons du passé ont permis une évolution. Cette reconnexion a du potentiel."
    ],
    contre: [
      "Attention à ne pas répéter les mêmes schémas qui ont mené à la séparation.",
      "La nostalgie peut embellir le passé. Assurez-vous que ce retour est vraiment souhaitable.",
      "Un retour en arrière peut empêcher d'avancer vers quelqu'un de plus adapté{genderSuffix}."
    ],
    synthese: [
      "Si cette personne revient, posez-vous les bonnes questions : qu'est-ce qui a changé ?",
      "Le passé peut éclairer l'avenir, mais ne doit pas le dicter. Choisissez en conscience.",
      "Un retour n'est bénéfique que si les deux ont évolué. Sinon, c'est un cycle qui se répète."
    ]
  },

  // ... (continuez pour toutes les 22 cartes)
};

export const oracleData: Record<string, OracleData> = {
 
  loveOracle: {
    title: 'Oracle de l\'Amour',
    description: '22 cartes modernes pour éclairer votre vie amoureuse',
    cards: [
      { name: 'Le Rendez-Vous', meaning: 'Une rencontre, une occasion' },
      { name: 'Le Message', meaning: 'Communication, réponse, silence' },
      { name: 'Le Desir', meaning: 'Attirance, passion, tentation' },
      { name: 'Le Coeur Ouvert', meaning: 'Vulnérabilité, sincérité' },
      { name: 'Le Coeur Ferme', meaning: 'Peurs, blocages, protection' },
      { name: 'Le Choix', meaning: 'Indécision, deux personnes, deux chemins' },
      { name: 'Le Retour', meaning: 'Quelqu\'un du passé, souvenir, nostalgie' },
      { name: 'La Distance', meaning: 'Froid, éloignement, séparation' },
      { name: 'L\'Union', meaning: 'Engagement, construction, couple' },
      { name: 'Le Masque', meaning: 'Secrets, intentions cachées' },
      { name: 'La Passion', meaning: 'Intensité, feu, impulsivité' },
      { name: 'La Chance', meaning: 'Opportunité amoureuse' },
      { name: 'Le Destin', meaning: 'Inévitable, synchronicité' },
      { name: 'Le Silence', meaning: 'Pas de nouvelles, retrait' },
      { name: 'La Verite', meaning: 'Révélation, clarification' },
      { name: 'Le Cadeau', meaning: 'Attention, geste, surprise' },
      { name: 'La Blessure', meaning: 'Déception, peur, guérison' },
      { name: 'Le Nouveau Depart', meaning: 'Renouveau, changement, nouveau cycle' },
      { name: 'La Fusion', meaning: 'Connexion profonde, âme sœur' },
      { name: 'La Tentation', meaning: 'Quelqu\'un ou quelque chose qui perturbe' },
      { name: 'La Protection', meaning: 'Guidance, intuition, prudence' },
      { name: 'La Liberation', meaning: 'Lâcher prise, fin, délivrance' }
    ]
  },

  // ✅ NOUVEAU : Oracle Lunaire
  lunar: {
    title: 'Oracle Lunaire',
    description: 'Les phases de la Lune révèlent votre chemin intérieur',
    cards: [
      // 🌑 NOUVELLE LUNE
      { name: 'intention', meaning: 'Nouveaux départs et intentions', phase: 'newMoon' },
      { name: 'intuition', meaning: 'Écoute de ta voix intérieure', phase: 'newMoon' },
      { name: 'renouveau', meaning: 'Page blanche et nouvelles possibilités', phase: 'newMoon' },

      // 🌓 PREMIER QUARTIER
      { name: 'motivation', meaning: 'Élan et énergie pour avancer', phase: 'firstQuarter' },
      { name: 'courage', meaning: 'Force intérieure face aux défis', phase: 'firstQuarter' },
      { name: 'epanouissement', meaning: 'Croissance et réalisation personnelle', phase: 'firstQuarter' },

      // 🌕 PLEINE LUNE
      { name: 'clarte', meaning: 'Compréhension et vision limpide', phase: 'fullMoon' },
      { name: 'serenite', meaning: 'Paix intérieure et harmonie', phase: 'fullMoon' },
      { name: 'bilan', meaning: 'Aboutissement et prise de conscience', phase: 'fullMoon' },

      // 🌗 DERNIER QUARTIER
      { name: 'detachement', meaning: 'Lâcher prise sur ce qui ne sert plus', phase: 'lastQuarter' },
      { name: 'prisederecul', meaning: 'Introspection et observation', phase: 'lastQuarter' },
      { name: 'retourasoi', meaning: 'Reconnexion à ton essence', phase: 'lastQuarter' }
    ]
  },

  runes: {
    title: 'Runes Nordiques',
    description: 'L\'ancienne sagesse des Vikings vous révèle votre chemin de guerre et de victoire',
    cards: [
      { name: 'Fehu', meaning: 'Richesse, prospérité, nouveau départ financier' },
      { name: 'Uruz', meaning: 'Force brute, santé, transformation' },
      { name: 'Thurisaz', meaning: 'Défense, protection, force destructrice' },
      { name: 'Ansuz', meaning: 'Communication divine, inspiration, sagesse' },
      { name: 'Raidho', meaning: 'Voyage, mouvement, progression' },
      { name: 'Kenaz', meaning: 'Connaissance, créativité, illumination' },
      { name: 'Gebo', meaning: 'Don, échange, partenariat' },
      { name: 'Wunjo', meaning: 'Joie, bonheur, harmonie' },
      { name: 'Hagalaz', meaning: 'Disruption, changement forcé, purification' },
      { name: 'Nauthiz', meaning: 'Nécessité, contrainte, leçon karmique' },
      { name: 'Isa', meaning: 'Glace, stagnation, patience' },
      { name: 'Jera', meaning: 'Récolte, cycles, récompense' },
      { name: 'Eihwaz', meaning: 'Endurance, protection, connexion spirituelle' },
      { name: 'Perthro', meaning: 'Mystère, destin, forces cachées' },
      { name: 'Algiz', meaning: 'Protection divine, connexion aux guides' },
      { name: 'Sowilo', meaning: 'Succès, victoire, énergie solaire' },
      { name: 'Tiwaz', meaning: 'Victoire, justice, sacrifice honorable' },
      { name: 'Berkano', meaning: 'Croissance, fertilité, nouveau cycle' },
      { name: 'Ehwaz', meaning: 'Mouvement, progrès, partenariat' },
      { name: 'Mannaz', meaning: 'Humanité, soi, intelligence' },
      { name: 'Laguz', meaning: 'Eau, intuition, émotions' },
      { name: 'Ingwaz', meaning: 'Fertilité masculine, énergie créatrice' },
      { name: 'Dagaz', meaning: 'Éveil, transformation, nouveau jour' },
      { name: 'Othala', meaning: 'Héritage, propriété, tradition familiale' }
    ]
  }
};

export const zodiacSigns: ZodiacSign[] = [
  { name: 'Bélier', symbol: '♈', startDate: { month: 3, day: 21 }, endDate: { month: 4, day: 19 } },
  { name: 'Taureau', symbol: '♉', startDate: { month: 4, day: 20 }, endDate: { month: 5, day: 20 } },
  { name: 'Gémeaux', symbol: '♊', startDate: { month: 5, day: 21 }, endDate: { month: 6, day: 20 } },
  { name: 'Cancer', symbol: '♋', startDate: { month: 6, day: 21 }, endDate: { month: 7, day: 22 } },
  { name: 'Lion', symbol: '♌', startDate: { month: 7, day: 23 }, endDate: { month: 8, day: 22 } },
  { name: 'Vierge', symbol: '♍', startDate: { month: 8, day: 23 }, endDate: { month: 9, day: 22 } },
  { name: 'Balance', symbol: '♎', startDate: { month: 9, day: 23 }, endDate: { month: 10, day: 22 } },
  { name: 'Scorpion', symbol: '♏', startDate: { month: 10, day: 23 }, endDate: { month: 11, day: 21 } },
  { name: 'Sagittaire', symbol: '♐', startDate: { month: 11, day: 22 }, endDate: { month: 12, day: 21 } },
  { name: 'Capricorne', symbol: '♑', startDate: { month: 12, day: 22 }, endDate: { month: 1, day: 19 } },
  { name: 'Verseau', symbol: '♒', startDate: { month: 1, day: 20 }, endDate: { month: 2, day: 18 } },
  { name: 'Poissons', symbol: '♓', startDate: { month: 2, day: 19 }, endDate: { month: 3, day: 20 } }
];

export function getZodiacSign(month: number, day: number): ZodiacSign | undefined {
  return zodiacSigns.find(sign => {
    if (sign.startDate.month === sign.endDate.month) {
      return month === sign.startDate.month && day >= sign.startDate.day && day <= sign.endDate.day;
    } else {
      return (month === sign.startDate.month && day >= sign.startDate.day) ||
             (month === sign.endDate.month && day <= sign.endDate.day);
    }
  });
}