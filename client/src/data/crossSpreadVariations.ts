// client/src/data/crossSpreadVariations.ts

export interface CardVariations {
  pour: string[];      // Aspects positifs / opportunités
  contre: string[];    // Blocages / difficultés
  synthese: string[];  // Conclusion / résumé
}

// Chaque variation utilise maintenant des clés de traduction
// Format: "crossSpread.cards.{cardName}.{section}.variation{N}"
export const loveOracleVariations: Record<string, CardVariations> = {
  'lerendezvous': {
    pour: [
      "crossSpread.cards.lerendezvous.pour.variation1",
      "crossSpread.cards.lerendezvous.pour.variation2",
      "crossSpread.cards.lerendezvous.pour.variation3"
    ],
    contre: [
      "crossSpread.cards.lerendezvous.contre.variation1",
      "crossSpread.cards.lerendezvous.contre.variation2",
      "crossSpread.cards.lerendezvous.contre.variation3"
    ],
    synthese: [
      "crossSpread.cards.lerendezvous.synthese.variation1",
      "crossSpread.cards.lerendezvous.synthese.variation2",
      "crossSpread.cards.lerendezvous.synthese.variation3"
    ]
  },

  'lemessage': {
    pour: [
      "crossSpread.cards.lemessage.pour.variation1",
      "crossSpread.cards.lemessage.pour.variation2",
      "crossSpread.cards.lemessage.pour.variation3"
    ],
    contre: [
      "crossSpread.cards.lemessage.contre.variation1",
      "crossSpread.cards.lemessage.contre.variation2",
      "crossSpread.cards.lemessage.contre.variation3"
    ],
    synthese: [
      "crossSpread.cards.lemessage.synthese.variation1",
      "crossSpread.cards.lemessage.synthese.variation2",
      "crossSpread.cards.lemessage.synthese.variation3"
    ]
  },

  'ledesir': {
    pour: [
      "crossSpread.cards.ledesir.pour.variation1",
      "crossSpread.cards.ledesir.pour.variation2",
      "crossSpread.cards.ledesir.pour.variation3"
    ],
    contre: [
      "crossSpread.cards.ledesir.contre.variation1",
      "crossSpread.cards.ledesir.contre.variation2",
      "crossSpread.cards.ledesir.contre.variation3"
    ],
    synthese: [
      "crossSpread.cards.ledesir.synthese.variation1",
      "crossSpread.cards.ledesir.synthese.variation2",
      "crossSpread.cards.ledesir.synthese.variation3"
    ]
  },

  'lecoeurouvert': {
    pour: [
      "crossSpread.cards.lecoeurouvert.pour.variation1",
      "crossSpread.cards.lecoeurouvert.pour.variation2",
      "crossSpread.cards.lecoeurouvert.pour.variation3"
    ],
    contre: [
      "crossSpread.cards.lecoeurouvert.contre.variation1",
      "crossSpread.cards.lecoeurouvert.contre.variation2",
      "crossSpread.cards.lecoeurouvert.contre.variation3"
    ],
    synthese: [
      "crossSpread.cards.lecoeurouvert.synthese.variation1",
      "crossSpread.cards.lecoeurouvert.synthese.variation2",
      "crossSpread.cards.lecoeurouvert.synthese.variation3"
    ]
  },

  'lecoeurferme': {
    pour: [
      "crossSpread.cards.lecoeurferme.pour.variation1",
      "crossSpread.cards.lecoeurferme.pour.variation2",
      "crossSpread.cards.lecoeurferme.pour.variation3"
    ],
    contre: [
      "crossSpread.cards.lecoeurferme.contre.variation1",
      "crossSpread.cards.lecoeurferme.contre.variation2",
      "crossSpread.cards.lecoeurferme.contre.variation3"
    ],
    synthese: [
      "crossSpread.cards.lecoeurferme.synthese.variation1",
      "crossSpread.cards.lecoeurferme.synthese.variation2",
      "crossSpread.cards.lecoeurferme.synthese.variation3"
    ]
  },

  'lechoix': {
    pour: [
      "crossSpread.cards.lechoix.pour.variation1",
      "crossSpread.cards.lechoix.pour.variation2",
      "crossSpread.cards.lechoix.pour.variation3"
    ],
    contre: [
      "crossSpread.cards.lechoix.contre.variation1",
      "crossSpread.cards.lechoix.contre.variation2",
      "crossSpread.cards.lechoix.contre.variation3"
    ],
    synthese: [
      "crossSpread.cards.lechoix.synthese.variation1",
      "crossSpread.cards.lechoix.synthese.variation2",
      "crossSpread.cards.lechoix.synthese.variation3"
    ]
  },

  'leretour': {
    pour: [
      "crossSpread.cards.leretour.pour.variation1",
      "crossSpread.cards.leretour.pour.variation2",
      "crossSpread.cards.leretour.pour.variation3"
    ],
    contre: [
      "crossSpread.cards.leretour.contre.variation1",
      "crossSpread.cards.leretour.contre.variation2",
      "crossSpread.cards.leretour.contre.variation3"
    ],
    synthese: [
      "crossSpread.cards.leretour.synthese.variation1",
      "crossSpread.cards.leretour.synthese.variation2",
      "crossSpread.cards.leretour.synthese.variation3"
    ]
  },

  'ladistance': {
    pour: [
      "crossSpread.cards.ladistance.pour.variation1",
      "crossSpread.cards.ladistance.pour.variation2",
      "crossSpread.cards.ladistance.pour.variation3"
    ],
    contre: [
      "crossSpread.cards.ladistance.contre.variation1",
      "crossSpread.cards.ladistance.contre.variation2",
      "crossSpread.cards.ladistance.contre.variation3"
    ],
    synthese: [
      "crossSpread.cards.ladistance.synthese.variation1",
      "crossSpread.cards.ladistance.synthese.variation2",
      "crossSpread.cards.ladistance.synthese.variation3"
    ]
  },

  'lunion': {
    pour: [
      "crossSpread.cards.lunion.pour.variation1",
      "crossSpread.cards.lunion.pour.variation2",
      "crossSpread.cards.lunion.pour.variation3"
    ],
    contre: [
      "crossSpread.cards.lunion.contre.variation1",
      "crossSpread.cards.lunion.contre.variation2",
      "crossSpread.cards.lunion.contre.variation3"
    ],
    synthese: [
      "crossSpread.cards.lunion.synthese.variation1",
      "crossSpread.cards.lunion.synthese.variation2",
      "crossSpread.cards.lunion.synthese.variation3"
    ]
  },

  'lemasque': {
    pour: [
      "crossSpread.cards.lemasque.pour.variation1",
      "crossSpread.cards.lemasque.pour.variation2",
      "crossSpread.cards.lemasque.pour.variation3"
    ],
    contre: [
      "crossSpread.cards.lemasque.contre.variation1",
      "crossSpread.cards.lemasque.contre.variation2",
      "crossSpread.cards.lemasque.contre.variation3"
    ],
    synthese: [
      "crossSpread.cards.lemasque.synthese.variation1",
      "crossSpread.cards.lemasque.synthese.variation2",
      "crossSpread.cards.lemasque.synthese.variation3"
    ]
  },

  'lapassion': {
    pour: [
      "crossSpread.cards.lapassion.pour.variation1",
      "crossSpread.cards.lapassion.pour.variation2",
      "crossSpread.cards.lapassion.pour.variation3"
    ],
    contre: [
      "crossSpread.cards.lapassion.contre.variation1",
      "crossSpread.cards.lapassion.contre.variation2",
      "crossSpread.cards.lapassion.contre.variation3"
    ],
    synthese: [
      "crossSpread.cards.lapassion.synthese.variation1",
      "crossSpread.cards.lapassion.synthese.variation2",
      "crossSpread.cards.lapassion.synthese.variation3"
    ]
  },

  'lachance': {
    pour: [
      "crossSpread.cards.lachance.pour.variation1",
      "crossSpread.cards.lachance.pour.variation2",
      "crossSpread.cards.lachance.pour.variation3"
    ],
    contre: [
      "crossSpread.cards.lachance.contre.variation1",
      "crossSpread.cards.lachance.contre.variation2",
      "crossSpread.cards.lachance.contre.variation3"
    ],
    synthese: [
      "crossSpread.cards.lachance.synthese.variation1",
      "crossSpread.cards.lachance.synthese.variation2",
      "crossSpread.cards.lachance.synthese.variation3"
    ]
  },

  'ledestin': {
    pour: [
      "crossSpread.cards.ledestin.pour.variation1",
      "crossSpread.cards.ledestin.pour.variation2",
      "crossSpread.cards.ledestin.pour.variation3"
    ],
    contre: [
      "crossSpread.cards.ledestin.contre.variation1",
      "crossSpread.cards.ledestin.contre.variation2",
      "crossSpread.cards.ledestin.contre.variation3"
    ],
    synthese: [
      "crossSpread.cards.ledestin.synthese.variation1",
      "crossSpread.cards.ledestin.synthese.variation2",
      "crossSpread.cards.ledestin.synthese.variation3"
    ]
  },

  'lesilence': {
    pour: [
      "crossSpread.cards.lesilence.pour.variation1",
      "crossSpread.cards.lesilence.pour.variation2",
      "crossSpread.cards.lesilence.pour.variation3"
    ],
    contre: [
      "crossSpread.cards.lesilence.contre.variation1",
      "crossSpread.cards.lesilence.contre.variation2",
      "crossSpread.cards.lesilence.contre.variation3"
    ],
    synthese: [
      "crossSpread.cards.lesilence.synthese.variation1",
      "crossSpread.cards.lesilence.synthese.variation2",
      "crossSpread.cards.lesilence.synthese.variation3"
    ]
  },

  'laverite': {
    pour: [
      "crossSpread.cards.laverite.pour.variation1",
      "crossSpread.cards.laverite.pour.variation2",
      "crossSpread.cards.laverite.pour.variation3"
    ],
    contre: [
      "crossSpread.cards.laverite.contre.variation1",
      "crossSpread.cards.laverite.contre.variation2",
      "crossSpread.cards.laverite.contre.variation3"
    ],
    synthese: [
      "crossSpread.cards.laverite.synthese.variation1",
      "crossSpread.cards.laverite.synthese.variation2",
      "crossSpread.cards.laverite.synthese.variation3"
    ]
  },

  'lecadeau': {
    pour: [
      "crossSpread.cards.lecadeau.pour.variation1",
      "crossSpread.cards.lecadeau.pour.variation2",
      "crossSpread.cards.lecadeau.pour.variation3"
    ],
    contre: [
      "crossSpread.cards.lecadeau.contre.variation1",
      "crossSpread.cards.lecadeau.contre.variation2",
      "crossSpread.cards.lecadeau.contre.variation3"
    ],
    synthese: [
      "crossSpread.cards.lecadeau.synthese.variation1",
      "crossSpread.cards.lecadeau.synthese.variation2",
      "crossSpread.cards.lecadeau.synthese.variation3"
    ]
  },

  'lablessure': {
    pour: [
      "crossSpread.cards.lablessure.pour.variation1",
      "crossSpread.cards.lablessure.pour.variation2",
      "crossSpread.cards.lablessure.pour.variation3"
    ],
    contre: [
      "crossSpread.cards.lablessure.contre.variation1",
      "crossSpread.cards.lablessure.contre.variation2",
      "crossSpread.cards.lablessure.contre.variation3"
    ],
    synthese: [
      "crossSpread.cards.lablessure.synthese.variation1",
      "crossSpread.cards.lablessure.synthese.variation2",
      "crossSpread.cards.lablessure.synthese.variation3"
    ]
  },

  'lenouveaudepart': {
    pour: [
      "crossSpread.cards.lenouveaudepart.pour.variation1",
      "crossSpread.cards.lenouveaudepart.pour.variation2",
      "crossSpread.cards.lenouveaudepart.pour.variation3"
    ],
    contre: [
      "crossSpread.cards.lenouveaudepart.contre.variation1",
      "crossSpread.cards.lenouveaudepart.contre.variation2",
      "crossSpread.cards.lenouveaudepart.contre.variation3"
    ],
    synthese: [
      "crossSpread.cards.lenouveaudepart.synthese.variation1",
      "crossSpread.cards.lenouveaudepart.synthese.variation2",
      "crossSpread.cards.lenouveaudepart.synthese.variation3"
    ]
  },

  'lafusion': {
    pour: [
      "crossSpread.cards.lafusion.pour.variation1",
      "crossSpread.cards.lafusion.pour.variation2",
      "crossSpread.cards.lafusion.pour.variation3"
    ],
    contre: [
      "crossSpread.cards.lafusion.contre.variation1",
      "crossSpread.cards.lafusion.contre.variation2",
      "crossSpread.cards.lafusion.contre.variation3"
    ],
    synthese: [
      "crossSpread.cards.lafusion.synthese.variation1",
      "crossSpread.cards.lafusion.synthese.variation2",
      "crossSpread.cards.lafusion.synthese.variation3"
    ]
  },

  'latentation': {
    pour: [
      "crossSpread.cards.latentation.pour.variation1",
      "crossSpread.cards.latentation.pour.variation2",
      "crossSpread.cards.latentation.pour.variation3"
    ],
    contre: [
      "crossSpread.cards.latentation.contre.variation1",
      "crossSpread.cards.latentation.contre.variation2",
      "crossSpread.cards.latentation.contre.variation3"
    ],
    synthese: [
      "crossSpread.cards.latentation.synthese.variation1",
      "crossSpread.cards.latentation.synthese.variation2",
      "crossSpread.cards.latentation.synthese.variation3"
    ]
  },

  'laprotection': {
    pour: [
      "crossSpread.cards.laprotection.pour.variation1",
      "crossSpread.cards.laprotection.pour.variation2",
      "crossSpread.cards.laprotection.pour.variation3"
    ],
    contre: [
      "crossSpread.cards.laprotection.contre.variation1",
      "crossSpread.cards.laprotection.contre.variation2",
      "crossSpread.cards.laprotection.contre.variation3"
    ],
    synthese: [
      "crossSpread.cards.laprotection.synthese.variation1",
      "crossSpread.cards.laprotection.synthese.variation2",
      "crossSpread.cards.laprotection.synthese.variation3"
    ]
  },

  'laliberation': {
    pour: [
      "crossSpread.cards.laliberation.pour.variation1",
      "crossSpread.cards.laliberation.pour.variation2",
      "crossSpread.cards.laliberation.pour.variation3"
    ],
    contre: [
      "crossSpread.cards.laliberation.contre.variation1",
      "crossSpread.cards.laliberation.contre.variation2",
      "crossSpread.cards.laliberation.contre.variation3"
    ],
    synthese: [
      "crossSpread.cards.laliberation.synthese.variation1",
      "crossSpread.cards.laliberation.synthese.variation2",
      "crossSpread.cards.laliberation.synthese.variation3"
    ]
  }
};