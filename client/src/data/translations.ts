export type Language = "fr" | "en" | "es" | "de" | "it";

    const translations: Record<Language, Record<string, string | string[]>> = {
      fr: {
    // Landing Page
    "landing.title": "TarotMystik",
    "landing.subtitle":
      "Découvrez les mystères de votre destinée à travers les cartes, les astres et la sagesse ancienne",
    "landing.enter": "ENTRER",
    "landing.ads.support": "Les publicités nous aident à garder l'application gratuite",

    // 🆕 Disclaimer - AJOUTER ICI
    "disclaimer.title": "Avertissement Important",
    "disclaimer.text": "TarotMystik est une application de divertissement et de développement personnel. Consultez des experts qualifiés pour toute décision importante..",
    "disclaimer.note": "En continuant, vous acceptez d'utiliser cette application à des fins de divertissement",
    "disclaimer.accept": "J'ai compris",
    "disclaimer.legal": "Cette application est conforme au RGPD",

   //Avis pLaystore
        "rating.title": "Vous aimez TarotMystik ?",
          "rating.subtitle": "Votre avis compte énormément pour nous ! Prenez un instant pour noter l'application.",
          "rating.thanksGood": "Merci ! Votre avis nous aide beaucoup 🌟",
          "rating.feedback": "Merci pour votre retour. Comment pouvons-nous améliorer l'expérience ?",
          "rating.rate": "Noter l'application",
          "rating.later": "Plus tard",
          "rating.never": "Ne plus me demander",

    // No-repeat system
    "system.antirepeat.loading": "Les cartes se mélangent...",
    "system.antirepeat.active": "Système anti-répétition actif",
    "system.cards.refreshed": "Nouvelles cartes disponibles",

    // Name Page
    "name.title": "Prénom",
    "name.subtitle":
      "Comment préférez-vous être appelé ? Entrez votre nom ou votre surnom",
    "name.placeholder": "Entrez votre nom",
    "name.next": "SUIVANT",

    // Date Page
    "date.title": "Date de naissance",
    "date.subtitle":
      "Révélez votre signe astrologique pour une divination personnalisée",
    "date.day": "Jour",
    "date.month": "Mois",
    "date.year": "Année",
    "date.next": "SUIVANT",
    "date.months.1": "Janvier",
    "date.months.2": "Février",
    "date.months.3": "Mars",
    "date.months.4": "Avril",
    "date.months.5": "Mai",
    "date.months.6": "Juin",
    "date.months.7": "Juillet",
    "date.months.8": "Août",
    "date.months.9": "Septembre",
    "date.months.10": "Octobre",
    "date.months.11": "Novembre",
    "date.months.12": "Décembre",

    // Gender Page
    "gender.title": "Genre",
    "gender.subtitle":
      "Indiquez votre genre afin de personnaliser votre expérience",
    "gender.male": "Homme",
    "gender.female": "Féminin",
    "gender.other": "Autre",
    "gender.next": "COMMENCER",
    "gender.back": "RETOUR",

    // Barre de navigation
    "menu.open": "Ouvrir le menu",
    "profile.open": "Ouvrir le profil",
    "profile.birthdate": "Date de naissance",
    "profile.gender": "Genre",
    "profile.zodiac": "Signe astrologique",
    "profile.edit": "Modifier mon profil",
    "profile.edit.title": "Modifier mon profil",
    "profile.edit.subtitle": "Mettez à jour vos informations personnelles",
    "profile.edit.error": "Veuillez remplir tous les champs",
    "premium.active": "Actif",
    "locale": "fr-FR",
    "common.cancel": "Annuler",
    "common.save": "Sauvegarder",
    "name.label": "Nom",

        // Zodiac signs names
        "zodiac.signs.aries": "Bélier",
        "zodiac.signs.taurus": "Taureau",
        "zodiac.signs.gemini": "Gémeaux",
        "zodiac.signs.cancer": "Cancer",
        "zodiac.signs.leo": "Lion",
        "zodiac.signs.virgo": "Vierge",
        "zodiac.signs.libra": "Balance",
        "zodiac.signs.scorpio": "Scorpion",
        "zodiac.signs.sagittarius": "Sagittaire",
        "zodiac.signs.capricorn": "Capricorne",
        "zodiac.signs.aquarius": "Verseau",
        "zodiac.signs.pisces": "Poissons",
        
        // FR Notifications
        "notification.channel.name": "Guidance Quotidienne",
        "notification.channel.description": "Notifications pour votre oracle mystique du jour",
        "notification.variants.1.title": "💘 L'Oracle de l'Amour vous appelle",
        "notification.variants.1.body": "Découvrez ce que les cartes révèlent sur votre vie amoureuse aujourd'hui !",
        "notification.variants.2.title": "🌙 La Lune illumine votre chemin",
        "notification.variants.2.body": "Consultez l'Oracle Lunaire pour connaître les énergies du jour",
        "notification.variants.3.title": "🔮 Azraël le Voyant vous attend",
        "notification.variants.3.body": "Le grand magicien a des révélations pour vous aujourd'hui",
        "notification.variants.4.title": "✦ La Roue de la Destinée tourne",
        "notification.variants.4.body": "Découvrez quel destin mystique vous est réservé ce jour",
        "notification.variants.5.title": "✨ TarotMystik vous guide",
        "notification.variants.5.body": "Vos oracles quotidiens sont prêts : amour, destinée et mystères vous attendent",
        "notification.modal.title": "Guidance Quotidienne",
        "notification.modal.description": "Recevez chaque jour à 10h un rappel mystique pour découvrir vos oracles et révélations personnalisés",
        "notification.modal.benefit1": "Oracle quotidien personnalisé",
        "notification.modal.benefit2": "Guidance en amour, destinée et mystères",
        "notification.modal.benefit3": "Ne manquez jamais votre révélation du jour",
        "notification.modal.accept": "Activer les notifications",
        "notification.modal.decline": "Non merci",
        "notification.modal.note": "Vous pourrez modifier ce choix dans les paramètres",

    // Oracle Selection
    "oracle.welcome": "Bienvenue {name} !",
    "oracle.subtitle": "Découvrez les secrets de votre destinée",
    "oracle.daily.title": "Tirage du Jour",
    "oracle.daily.description":
      "Une carte pour vous guider et vous inspirer aujourd'hui",
    "oracle.horoscope.title": "Horoscope",
    "oracle.horoscope.description":
      "Découvrez ce que les astres vous réservent aujourd'hui selon votre signe",
    "oracle.tarot.title": "Tarot",
    "oracle.tarot.description":
      '"Les 22 arcanes majeurs dévoilent les mystères de votre destinée"',
    "oracle.angels.title": "Oracle des Anges",
    "oracle.angels.description":
      "Connectez-vous avec vos guides angéliques pour recevoir leurs messages d'amour",
    "oracle.runes.title": "Runes Nordiques",
    "oracle.runes.description":
      "L'ancienne sagesse des Vikings vous révèle votre chemin de guerre et de victoire",
    "oracle.back": "RETOUR",
    "oracle.home": "Accueil",
    "oracle.selection.title": "Choisissez Votre Oracle",

    // Card Game
    "cardgame.back": "Retour",
    "cardgame.daily.instruction":
      "Choisissez 1 carte pour votre conseil du jour",
    "cardgame.reading.instruction":
      "Choisissez 3 cartes pour éclairer votre destinée",
    "cardgame.selected": "Cartes sélectionnées: {current}/{max}",
    "cardgame.reveal": "RÉVÉLER LES CARTES",
    "cardgame.page": "Page {current} sur {total}",
    "cardgame.previous": "Précédent",
    "cardgame.next": "Suivant",
    "cardgame.daily.choose": "Choisissez la carte qui vous appelle",

    // CardGame - Modal de révélation
    "cardgame.cardRevealed": "Carte révélée",
    "cardgame.continue": "Continuer",
    "cardgame.seeInterpretation": "Voir l'interprétation",

    // Revelation - Loading
    "revelation.loading.title": "Interprétation en cours...",
    "revelation.loading.daily": "Les astres dévoilent ton oracle du jour, {name}",
    "revelation.loading.reading": "Les cartes révèlent leurs secrets mystiques, {name}",
    "revelation.loading.mysticMessage": "Les étoiles s'alignent pour toi...",

    // Revelation Page
    "revelation.positions.daily": "Conseil du Jour",
    "revelation.positions.past": "Carte 1",
    "revelation.positions.present": "Carte 2",
    "revelation.positions.future": "Carte 3",
    "revelation.summary.title": "Ce que révèlent tes cartes",
    "revelation.newConsultation": "Nouvelle consultation",
    "revelation.title.daily": "Votre Conseil du Jour",
    "revelation.title.reading": "Votre Tirage - {oracle}",
    "revelation.instruction.daily":
      "Cliquez sur votre carte pour révéler le message du jour",
    "revelation.instruction.reading":
      "Cliquez sur chaque carte pour révéler votre destinée",
    "revelation.flipCard.reveal": "Touchez pour révéler",
    "revelation.summary.seeMore": "Voir plus ↓",
    "revelation.summary.seeLess": "Voir moins ↑",
    "revelation.revealButton": "Révèlation",
    "revelation.backToSelection": "Retour à la sélection",
    "interpretation.advice.title": "Ton conseil personnel",
    "revelation.subtitle.revealed": "Contemplez vos cartes révélées",
    "revelation.summary.subtitle": "Les énergies principales de votre tirage",

    // Interpretation Templates
    "interpretation.gender.femme": "Ma chère",
    "interpretation.gender.homme": "Mon cher",
    "interpretation.gender.autre": "Chère âme",
    "interpretation.daily.greeting":"Bonjour {name} ! Voici ton conseil pour cette belle journée.",
    "interpretation.daily.zodiac": "En tant que {zodiacSign}, ",
    "interpretation.daily.cardMessage":'La carte "{cardName}" a une énergie spéciale pour toi aujourd\'hui.',
    "interpretation.daily.wisdom":"En tant que {zodiacSign}, tu as la sagesse nécessaire pour bien utiliser ce conseil. Fais confiance à ton instinct et laisse cette énergie positive guider tes actions d'aujourd'hui.",
    "interpretation.daily.closing":"Bonne journée {genderText} {name}, et que les étoiles illuminent ton chemin !",
    "interpretation.tarot.greeting":"Salut {name} ! Alors, ton tirage de Tarot me dit des choses intéressantes.",
    "interpretation.tarot.past":"{cardName} dans ton passé révèle : {cardMeaning}. Ces expériences t'ont vraiment fait grandir et t'ont rendu{genderSuffix} plus fort{genderSuffix}.",
       "interpretation.angels.greeting":
      "Bonjour {name} ! Tes anges gardiens ont des révélations lumineuses à partager avec toi.",
    "interpretation.angels.past":
      "Dans ton cheminement passé, {cardName} a semé des graines divines : {cardMeaning}. Ces bénédictions ont nourri ton âme et t'ont préparé{genderSuffix} à recevoir l'amour inconditionnel qui t'entoure maintenant.",
    "interpretation.angels.present":
      "En ce moment précis, {cardName} illumine ton présent : {cardMeaning}. Cette lumière céleste guide chacun de tes pas et transforme tes défis en opportunités de croissance spirituelle.",
    "interpretation.angels.future":
      "Vers ton avenir radieux, {cardName} déploie ses ailes protectrices : {cardMeaning}. Les portes du paradis s'ouvrent devant toi, révélant un chemin pavé de miracles et de synchronicités.",
    "interpretation.angels.message":
      "Transmission angélique : {genderText} {name}, ton essence de {zodiacSign} vibre en harmonie avec ces fréquences divines. Laisse ton cœur s'ouvrir à ces messages d'amour pur et reste réceptif aux signes que tes guides t'envoient !",
    "interpretation.runes.greeting":
      "Salut {name} ! Les anciennes runes scandinaves révèlent les secrets de ton destin de guerrier{genderSuffix}.",
    "interpretation.runes.past":
      "Ta rune du passé, {cardName}, révèle : {cardMeaning}. Ces forces primitives ont sculpté ton caractère dans le feu et la glace, te préparant{genderSuffix} aux défis d'aujourd'hui avec la sagesse des anciens.",
    "interpretation.runes.present":
      "En ce moment, {cardName} guide tes pas : {cardMeaning}. Cette énergie runique illumine ton chemin actuel, te connectant aux forces mystiques qui régissent ton quotidien.",
    "interpretation.runes.future":
      "Vers l'avenir, {cardName} annonce : {cardMeaning}. Cette prophétie runique trace la voie de tes accomplissements futurs, où tu brilleras victorieux{genderSuffix} sous l'égide des dieux du Nord.",
    "interpretation.runes.advice":
      "Souviens-toi, {genderText} {name} : en tant que {zodiacSign}, tu portes l'héritage des Vikings dans ton sang. Les runes ont parlé - suis leur guidance avec courage et détermination{genderSuffix} !",
    "interpretation.fallback.zodiac": "personne intuitive",
    "interpretation.fallback.angels": "être lumineux",
    "interpretation.fallback.runes": "guerrier{genderSuffix}",
    "interpretation.title.daily": "Interprétation pour {name}",
    "interpretation.title.reading": "Tirage cartes pour {name}",
    "interpretation.subtitle": "Voici votre révélation personnalisée",
    "interpretation.backToCards": "Retour aux cartes",
    "interpretation.newConsultation": "Nouvelle consultation",

    // Calculatrice Amoureuse
    "loveCalculator.name1Label": "Premier Prénom",
    "loveCalculator.name1Placeholder": "Ex: Marie",
    "loveCalculator.name2Label": "Second Prénom",
    "loveCalculator.name2Placeholder": "Ex: Lucas",
    "loveCalculator.calculateButton": "Calculer la Compatibilité",
    "loveCalculator.calculating": "Analyse de la compatibilité...",
    "loveCalculator.newCalculation": "Nouveau Calcul ",
    "loveCalculator.note": "Le score reste identique pour un même duo de prénoms… mais change chaque jour! Reviens vite demain! ⚠️  Cette calculatrice est un divertissement, vos résultats sont purement pour le plaisir et le fun!",
    "loveCalculator.dailyMode": "Mode Quotidien",
    "loveCalculator.dailyModeDesc": "Le pourcentage varie chaque jour !",
    "loveCalculator.standardMode": "Mode Standard",
    "loveCalculator.standardModeDesc": "Résultat fixe et permanent",
    "oracle.loveCalculator.badge": "NOUVEAU",
    "oracle.loveCalculator.description": "Calcule la compatibilité entre deux prénoms",
   "loveCalculator.error": "Veuillez entrer les deux prénoms.",
     "loveCalculator.dayScore": "Lecture du jour",
    "loveCalculator.dayAdvice": "Conseil du jour",
        "loveCalculator.title": "Compatibilité du Jour",
        "oracle.loveCalculator.title": "Compatibilité du Jour",
        "loveCalculator.subtitle": "Découvre chaque jour la compatibilité entre deux prénoms — en amour ou en amitié.",
        "loveCalculator.today": "Aujourd'hui",
        "loveCalculator.changeMode": "Changer de mode",
        "loveCalculator.back": "Retour",
        "loveCalculator.mode.subtitle": "Les énergies se lisent différemment selon le lien qui vous unit.",
        "loveCalculator.mode.love": "Amour",
        "loveCalculator.mode.love.subtitle": "Complicité amoureuse",
        "loveCalculator.mode.friendship": "Amitié",
        "loveCalculator.mode.friendship.subtitle": "Lien d'amitié",
        "loveCalculator.mode.calculateButton": "Révéler la Compatibilité du Jour",
        "loveCalculator.modeLabel.love": "Amour",
        "loveCalculator.modeLabel.friendship": "Amitié",
        "loveCalculator.separator.love": "et",
        "loveCalculator.separator.friendship": "et",
        "loveCalculator.dateFormat.weekday": "long",
        "loveCalculator.dateFormat.day": "numeric",
        "loveCalculator.dateFormat.month": "long",
        "loveCalculator.day.sun": "Dimanche",
        "loveCalculator.day.mon": "Lundi",
        "loveCalculator.day.tue": "Mardi",
        "loveCalculator.day.wed": "Mercredi",
        "loveCalculator.day.thu": "Jeudi",
        "loveCalculator.day.fri": "Vendredi",
        "loveCalculator.day.sat": "Samedi",
        "loveCalculator.month.jan": "Janvier",
        "loveCalculator.month.feb": "Février",
        "loveCalculator.month.mar": "Mars",
        "loveCalculator.month.apr": "Avril",
        "loveCalculator.month.may": "Mai",
        "loveCalculator.month.jun": "Juin",
        "loveCalculator.month.jul": "Juillet",
        "loveCalculator.month.aug": "Août",
        "loveCalculator.month.sep": "Septembre",
        "loveCalculator.month.oct": "Octobre",
        "loveCalculator.month.nov": "Novembre",
        "loveCalculator.month.dec": "Décembre",

        // ── RÉSULTATS MODE AMOUR ───────────────────────────────────────────────────
        // Titres
        "loveCalculator.love.results.incompatible.title": "Énergies Opposées",
        "loveCalculator.love.results.veryWeak.title": "Signal Faible",
        "loveCalculator.love.results.weak.title": "Connexion Timide",
        "loveCalculator.love.results.lowModerate.title": "Énergie Mitigée",
        "loveCalculator.love.results.moderate.title": "Étincelle Incertaine",
        "loveCalculator.love.results.goodStart.title": "Belle Journée",
        "loveCalculator.love.results.promising.title": "Journée Prometteuse",
        "loveCalculator.love.results.strong.title": "Forte Résonance",
        "loveCalculator.love.results.exceptional.title": "Alignement Rare",
        "loveCalculator.love.results.perfect.title": "Jour d'Exception",

        // Messages — Incompatible (25–39%)
        "loveCalculator.love.results.incompatible.message1": "Aujourd'hui, vos énergies tirent dans des directions très différentes. Ce n'est pas le meilleur jour pour forcer une connexion entre vous.",
        "loveCalculator.love.results.incompatible.message2": "Les vibrations du jour ne favorisent pas l'harmonie amoureuse entre ces deux prénoms. Mieux vaut laisser l'espace respirer.",
        "loveCalculator.love.results.incompatible.message3": "Ce jour ne porte pas les bonnes fréquences pour ce duo amoureux. Les échanges risquent d'être laborieux et sans fluidité.",
        "loveCalculator.love.results.incompatible.message4": "L'alignement du jour n'est pas favorable à cette connexion. Pas d'étincelle romantique visible dans les énergies de ce jour.",
        "loveCalculator.love.results.incompatible.message5": "Les astres de ce jour pointent vers des chemins séparés pour ce duo. C'est une journée pour chacun de son côté.",
        "loveCalculator.love.results.incompatible.message6": "Ce jour ne crée pas de terrain commun entre ces deux énergies amoureuses. Rien de bloqué — demain, tout peut changer.",
        // Conseils — Incompatible
        "loveCalculator.love.results.incompatible.advice1": "Profitez de cette journée individuellement. Chacun dans sa propre énergie, et on réévalue demain.",
        "loveCalculator.love.results.incompatible.advice2": "Ce n'est pas le jour pour pousser une conversation sentimentale ou prendre une décision à deux.",
        "loveCalculator.love.results.incompatible.advice3": "Accordez-vous de l'espace aujourd'hui. Les énergies de demain pourraient vous surprendre.",

        // Messages — Très Faible (40–49%)
        "loveCalculator.love.results.veryWeak.message1": "Aujourd'hui, la connexion amoureuse entre ces deux prénoms est discrète. Il faudra un effort pour se trouver sur la même longueur d'onde.",
        "loveCalculator.love.results.veryWeak.message2": "Les énergies du jour se croisent à peine côté amour. Ce n'est pas une mauvaise journée, mais il manque un élan pour que ça prenne.",
        "loveCalculator.love.results.veryWeak.message3": "Le signal romantique entre vos deux univers est faible ce jour-ci. Rien d'irrémédiable, mais ce n'est pas votre meilleure journée ensemble.",
        "loveCalculator.love.results.veryWeak.message4": "Ce jour n'amplifie pas naturellement vos affinités amoureuses. La connexion existe, mais elle reste en sourdine aujourd'hui.",
        "loveCalculator.love.results.veryWeak.message5": "Vos fréquences du jour ne se superposent pas beaucoup côté cœur. Gardez les attentes légères pour cette journée.",
        "loveCalculator.love.results.veryWeak.message6": "Aujourd'hui, le courant romantique passe difficilement entre ces deux énergies. Demain pourrait changer la donne.",
        // Conseils — Très Faible
        "loveCalculator.love.results.veryWeak.advice1": "Privilégiez les échanges simples et sans pression aujourd'hui. Pas besoin de forcer une grande déclaration.",
        "loveCalculator.love.results.veryWeak.advice2": "Une journée calme ensemble peut suffire. Inutile d'en attendre davantage pour ce jour.",
        "loveCalculator.love.results.veryWeak.advice3": "Revenez demain — les énergies se renouvellent et la prochaine lecture pourrait être très différente.",

        // Messages — Faible (50–54%)
        "loveCalculator.love.results.weak.message1": "Aujourd'hui, la flamme amoureuse est allumée mais reste petite. Il y a quelque chose, mais ça ne brûle pas encore vraiment.",
        "loveCalculator.love.results.weak.message2": "Ce jour porte une légère complicité romantique entre vous, sans plus. Les bases sont là, mais les énergies ne décollent pas encore.",
        "loveCalculator.love.results.weak.message3": "La journée crée une connexion amoureuse fragile entre ces deux prénoms. Quelques bons moments sont possibles, sans grande intensité.",
        "loveCalculator.love.results.weak.message4": "Les vibrations du jour sont douces mais peu intenses sur le plan amoureux. Une journée agréable, pas mémorable.",
        "loveCalculator.love.results.weak.message5": "Ce jour offre une toile de fond neutre côté cœur. Rien de fort, mais rien d'hostile non plus.",
        "loveCalculator.love.results.weak.message6": "Aujourd'hui, vos énergies romantiques se côtoient sans vraiment fusionner. La connexion est là, en veilleuse.",
        // Conseils — Faible
        "loveCalculator.love.results.weak.advice1": "C'est une bonne journée pour les petits gestes tendres. Pas besoin d'en faire trop.",
        "loveCalculator.love.results.weak.advice2": "Profitez des moments calmes ensemble sans chercher l'intensité romantique. Ce jour est fait pour la douceur.",
        "loveCalculator.love.results.weak.advice3": "Notez comment les énergies évoluent chaque jour — demain pourrait apporter plus de vivacité.",

        // Messages — Potentiel Limité (55–59%)
        "loveCalculator.love.results.lowModerate.message1": "Ce jour mélange des fréquences amoureuses compatibles et d'autres moins. Vous pouvez vous trouver, mais ça demande un peu d'ajustement.",
        "loveCalculator.love.results.lowModerate.message2": "Aujourd'hui, ça fonctionne par intermittence entre vous côté cœur. Certains moments seront fluides, d'autres un peu plus heurtés.",
        "loveCalculator.love.results.lowModerate.message3": "Les énergies du jour créent une compatibilité amoureuse en dents de scie. Rien d'insurmontable, juste un peu de navigation à faire.",
        "loveCalculator.love.results.lowModerate.message4": "Ce jour offre un terrain mi-favorable côté amour. La connexion est possible, mais elle ne se fera pas sans un minimum d'engagement.",
        "loveCalculator.love.results.lowModerate.message5": "Les vibrations de ce jour sont contrastées pour ce duo amoureux. Prenez le meilleur de chaque moment et laissez passer le reste.",
        "loveCalculator.love.results.lowModerate.message6": "Aujourd'hui, il y a des ouvertures romantiques entre vous, mais aussi quelques frictions. Restez souples et sans attentes figées.",
        // Conseils — Potentiel Limité
        "loveCalculator.love.results.lowModerate.advice1": "Abordez cette journée sans pression sentimentale. Laissez les échanges venir naturellement, sans forcer.",
        "loveCalculator.love.results.lowModerate.advice2": "Si une tension survient, ne la dramatisez pas — c'est juste l'énergie du jour. Demain repart à zéro.",
        "loveCalculator.love.results.lowModerate.advice3": "Choisissez des activités simples et agréables plutôt que des conversations profondes aujourd'hui.",

        // Messages — Étincelle Incertaine (60–64%)
        "loveCalculator.love.results.moderate.message1": "Il y a quelque chose dans l'air aujourd'hui entre ces deux prénoms côté amour. Pas encore de certitude, mais une curiosité qui mérite d'être explorée.",
        "loveCalculator.love.results.moderate.message2": "Ce jour porte une énergie amoureuse ambivalente pour ce duo. On sent un potentiel, mais il hésite encore à se manifester pleinement.",
        "loveCalculator.love.results.moderate.message3": "Aujourd'hui, vos fréquences romantiques se rapprochent sans tout à fait se superposer. C'est une journée pour observer plus qu'agir.",
        "loveCalculator.love.results.moderate.message4": "Les astres de ce jour sont partagés sur votre duo amoureux. Quelque chose circule entre vous, mais reste flou — restez ouverts.",
        "loveCalculator.love.results.moderate.message5": "La journée crée une tension légère entre attraction et distance. Rien de négatif, juste un peu d'indécision dans l'air.",
        "loveCalculator.love.results.moderate.message6": "Ce jour joue avec vos énergies amoureuses sans vraiment les stabiliser. Laissez la journée se dérouler sans vouloir tout contrôler.",
        // Conseils — Étincelle Incertaine
        "loveCalculator.love.results.moderate.advice1": "Soyez présents l'un à l'autre sans trop analyser. Laissez la journée révéler ce qu'elle a à offrir côté cœur.",
        "loveCalculator.love.results.moderate.advice2": "C'est une bonne journée pour écouter plutôt que parler. Observez les signaux subtils.",
        "loveCalculator.love.results.moderate.advice3": "Ne tirez pas de conclusions définitives sur une seule journée. Revenez demain pour une lecture plus nette.",

        // Messages — Belle Journée (65–69%)
        "loveCalculator.love.results.goodStart.message1": "Aujourd'hui, vos énergies amoureuses se rejoignent naturellement. C'est une journée fluide et agréable pour ce duo.",
        "loveCalculator.love.results.goodStart.message2": "Ce jour crée une belle harmonie romantique entre ces deux prénoms. Les échanges devraient être simples, légers et positifs.",
        "loveCalculator.love.results.goodStart.message3": "Les vibrations du jour favorisent la bonne entente amoureuse. Une journée pour profiter de votre complicité sans chercher plus loin.",
        "loveCalculator.love.results.goodStart.message4": "Aujourd'hui, le terrain est favorable côté cœur. Vos énergies se complètent bien et les interactions seront douces.",
        "loveCalculator.love.results.goodStart.message5": "Ce jour porte une belle énergie romantique commune pour votre duo. Profitez-en — ce genre de journée fait du bien.",
        "loveCalculator.love.results.goodStart.message6": "Les fréquences du jour s'alignent harmonieusement pour vous deux côté amour. Une journée à savourer simplement.",
        // Conseils — Belle Journée
        "loveCalculator.love.results.goodStart.advice1": "Profitez de cette bonne énergie pour passer un moment agréable ensemble, sans agenda.",
        "loveCalculator.love.results.goodStart.advice2": "C'est le bon jour pour une sortie spontanée ou un geste tendre — le terrain est prêt.",
        "loveCalculator.love.results.goodStart.advice3": "Revenez demain voir comment les énergies évoluent — chaque jour apporte sa propre lecture amoureuse.",

        // Messages — Journée Prometteuse (70–79%)
        "loveCalculator.love.results.promising.message1": "Aujourd'hui, une vraie complicité amoureuse rayonne entre ces deux prénoms. Vos énergies du jour se renforcent mutuellement.",
        "loveCalculator.love.results.promising.message2": "Ce jour amplifie votre connexion romantique. Les échanges seront naturels, fluides et chargés d'une belle énergie partagée.",
        "loveCalculator.love.results.promising.message3": "Les astres du jour sont généreux pour votre duo amoureux. Vous êtes sur la même longueur d'onde et ça se sentira.",
        "loveCalculator.love.results.promising.message4": "Aujourd'hui, vos fréquences amoureuses résonnent bien ensemble. C'est une journée pour être pleinement présents l'un à l'autre.",
        "loveCalculator.love.results.promising.message5": "Ce jour crée une belle alchimie romantique entre vous. L'énergie est là, sincère et agréable — saisissez-la.",
        "loveCalculator.love.results.promising.message6": "Les vibrations du jour jouent en votre faveur côté cœur. Une journée où les gestes simples prennent plus de sens.",
        // Conseils — Prometteuse
        "loveCalculator.love.results.promising.advice1": "Faites quelque chose de spécial aujourd'hui — même quelque chose de simple aura plus d'impact que d'habitude.",
        "loveCalculator.love.results.promising.advice2": "C'est une belle journée pour dire ce qu'on ressent. Les mots trouveront facilement le chemin ce jour-ci.",
        "loveCalculator.love.results.promising.advice3": "Profitez pleinement de cette énergie romantique du jour. Elle est là pour vous deux — ne la laissez pas passer inaperçue.",

        // Messages — Forte Résonance (80–89%)
        "loveCalculator.love.results.strong.message1": "Aujourd'hui, vos deux énergies amoureuses entrent en résonance puissante. C'est l'une de ces journées rares où tout coule naturellement.",
        "loveCalculator.love.results.strong.message2": "Ce jour est particulièrement bien orienté pour votre duo amoureux. Une harmonie forte se dessine dans les fréquences du jour.",
        "loveCalculator.love.results.strong.message3": "Les astres du jour alignent vos énergies romantiques avec force. Tout ce que vous entreprendrez ensemble aujourd'hui sera amplifié.",
        "loveCalculator.love.results.strong.message4": "Aujourd'hui, le lien amoureux entre ces deux prénoms est particulièrement vivant. C'est une journée à marquer d'une pierre blanche.",
        "loveCalculator.love.results.strong.message5": "Ce jour porte une vibration exceptionnellement favorable pour votre duo. Vos échanges atteindront une profondeur rare.",
        "loveCalculator.love.results.strong.message6": "Les énergies du jour vous placent en parfaite harmonie amoureuse. C'est une de ces journées qui peut créer des souvenirs durables.",
        // Conseils — Forte Résonance
        "loveCalculator.love.results.strong.advice1": "Ne laissez pas passer cette journée sans en profiter pleinement. C'est une énergie romantique du jour à saisir à deux mains.",
        "loveCalculator.love.results.strong.advice2": "Partagez quelque chose de mémorable aujourd'hui — un repas, une promenade, une conversation de fond.",
        "loveCalculator.love.results.strong.advice3": "Notez ce que vous ressentez aujourd'hui. Ces moments de forte connexion amoureuse méritent d'être reconnus.",

        // Messages — Alignement Rare (90–94%)
        "loveCalculator.love.results.exceptional.message1": "Aujourd'hui, les étoiles ont placé ces deux prénoms dans un alignement amoureux exceptionnel. Ce genre de journée ne se présente pas souvent.",
        "loveCalculator.love.results.exceptional.message2": "Ce jour réunit vos deux énergies dans une harmonie romantique presque parfaite. Tout ce que vous vivrez ensemble aujourd'hui sera marquant.",
        "loveCalculator.love.results.exceptional.message3": "Les vibrations du jour créent une fusion rare entre vos deux univers amoureux. C'est une journée à vivre pleinement et sans retenue.",
        "loveCalculator.love.results.exceptional.message4": "Aujourd'hui, quelque chose d'inhabituel circule entre ces deux prénoms côté cœur. Un alignement que peu de duos connaissent en une même journée.",
        "loveCalculator.love.results.exceptional.message5": "Ce jour est exceptionnel pour votre duo amoureux. Vos énergies sont amplifiées l'une par l'autre — profitez de chaque instant.",
        "loveCalculator.love.results.exceptional.message6": "Les astres de ce jour ont réservé quelque chose de rare pour votre lien amoureux. C'est une journée hors du commun à savourer ensemble.",
        // Conseils — Alignement Rare
        "loveCalculator.love.results.exceptional.advice1": "Vivez cette journée pleinement, sans vous soucier du quotidien. C'est une parenthèse romantique rare — saisissez-la.",
        "loveCalculator.love.results.exceptional.advice2": "Créez un souvenir amoureux aujourd'hui. Cette énergie mérite d'être célébrée, même simplement.",
        "loveCalculator.love.results.exceptional.advice3": "Revenez demain — les énergies auront changé. Chaque jour a sa propre signature amoureuse, et celle d'aujourd'hui était précieuse.",

        // Messages — Jour d'Exception (95–98%)
        "loveCalculator.love.results.perfect.message1": "Aujourd'hui est l'un des jours les plus rares pour ce duo amoureux. L'univers entier semble avoir organisé cette journée pour vous deux.",
        "loveCalculator.love.results.perfect.message2": "Ce jour atteint le sommet de l'alignement romantique pour ces deux prénoms. Une harmonie totale et profonde rayonne dans les énergies du moment.",
        "loveCalculator.love.results.perfect.message3": "Les fréquences de ce jour créent une fusion presque mystique entre vous côté amour. C'est une journée hors du commun, à ne pas laisser passer.",
        "loveCalculator.love.results.perfect.message4": "Aujourd'hui, tout est en place pour que votre duo amoureux brille. C'est un alignement que peu de couples connaissent en une seule journée.",
        "loveCalculator.love.results.perfect.message5": "Ce jour porte la marque d'une connexion amoureuse absolue entre ces deux prénoms. Chaque instant partagé aujourd'hui sera empreint de quelque chose de rare.",
        "loveCalculator.love.results.perfect.message6": "Les astres ont tout aligné pour ce jour côté amour. C'est une énergie maximale, à deux — vivez-la sans vous retenir.",
        // Conseils — Jour d'Exception
        "loveCalculator.love.results.perfect.advice1": "Faites de cette journée quelque chose d'inoubliable. Elle est à vous — pleinement.",
        "loveCalculator.love.results.perfect.advice2": "Soyez totalement présents l'un à l'autre aujourd'hui. Éteignez les distractions et vivez l'instant amoureux.",
        "loveCalculator.love.results.perfect.advice3": "Cette énergie romantique du jour est unique. Demain sera différent — c'est la beauté de cette lecture quotidienne.",

        // ── RÉSULTATS MODE AMITIÉ ──────────────────────────────────────────────────
        // Titres
        "loveCalculator.friendship.results.incompatible.title": "Fréquences Distantes",
        "loveCalculator.friendship.results.veryWeak.title": "Lien Discret",
        "loveCalculator.friendship.results.weak.title": "Connexion Légère",
        "loveCalculator.friendship.results.lowModerate.title": "Terrain Mitigé",
        "loveCalculator.friendship.results.moderate.title": "Complicité Hésitante",
        "loveCalculator.friendship.results.goodStart.title": "Belle Entente",
        "loveCalculator.friendship.results.promising.title": "Amitié Rayonnante",
        "loveCalculator.friendship.results.strong.title": "Complicité Forte",
        "loveCalculator.friendship.results.exceptional.title": "Liens Rares",
        "loveCalculator.friendship.results.perfect.title": "Amis d'Exception",

        // Messages — Incompatible amitié (25–39%)
        "loveCalculator.friendship.results.incompatible.message1": "Aujourd'hui, vos énergies d'amitié tirent dans des directions opposées. Ce n'est pas le meilleur jour pour forcer des activités communes.",
        "loveCalculator.friendship.results.incompatible.message2": "Les vibrations du jour ne favorisent pas la complicité entre ces deux prénoms. Chacun dans sa bulle aujourd'hui.",
        "loveCalculator.friendship.results.incompatible.message3": "Ce jour ne crée pas de terrain commun pour ce duo d'amis. Pas de souci — demain les cartes se rebattent.",
        "loveCalculator.friendship.results.incompatible.message4": "L'alignement du jour n'est pas favorable à votre complicité. Évitez les plans en commun pour ce jour.",
        "loveCalculator.friendship.results.incompatible.message5": "Les astres de ce jour séparent les énergies de ce duo. C'est une journée pour les activités en solo.",
        "loveCalculator.friendship.results.incompatible.message6": "Aujourd'hui, les fréquences d'amitié entre ces deux prénoms ne se rejoignent pas. Pas d'inquiétude — ça n'a rien de permanent.",
        // Conseils — Incompatible amitié
        "loveCalculator.friendship.results.incompatible.advice1": "Profitez chacun de votre côté. Une pause peut parfois faire du bien à une amitié.",
        "loveCalculator.friendship.results.incompatible.advice2": "Évitez les décisions importantes ensemble aujourd'hui. Ce n'est pas le bon timing.",
        "loveCalculator.friendship.results.incompatible.advice3": "Revenez demain — l'énergie d'amitié se renouvelle quotidiennement.",

        // Messages — Très Faible amitié (40–49%)
        "loveCalculator.friendship.results.veryWeak.message1": "Aujourd'hui, le lien d'amitié entre ces deux prénoms est discret. Pas d'étincelle particulière, mais rien de négatif non plus.",
        "loveCalculator.friendship.results.veryWeak.message2": "Les énergies du jour se croisent à peine côté amitié. Une journée tranquille où chacun avance dans son coin.",
        "loveCalculator.friendship.results.veryWeak.message3": "Ce jour n'amplifie pas naturellement votre complicité. La connexion existe, mais elle reste silencieuse aujourd'hui.",
        "loveCalculator.friendship.results.veryWeak.message4": "Vos fréquences amicales du jour ne se superposent pas beaucoup. Gardez les attentes légères.",
        "loveCalculator.friendship.results.veryWeak.message5": "Aujourd'hui, le courant amical passe doucement entre ces deux énergies. Rien de fort, mais rien de conflictuel.",
        "loveCalculator.friendship.results.veryWeak.message6": "Ce jour met votre amitié en veille. Ce n'est pas la meilleure journée pour les grandes sorties ensemble.",
        // Conseils — Très Faible amitié
        "loveCalculator.friendship.results.veryWeak.advice1": "Une journée chacun de son côté peut suffire. L'amitié n'a pas besoin d'être nourrie chaque jour.",
        "loveCalculator.friendship.results.veryWeak.advice2": "Si vous vous voyez, gardez les échanges simples et légers.",
        "loveCalculator.friendship.results.veryWeak.advice3": "Revenez demain — les énergies amicales changent d'un jour à l'autre.",

        // Messages — Faible amitié (50–54%)
        "loveCalculator.friendship.results.weak.message1": "Aujourd'hui, une légère complicité se dessine entre ces deux prénoms côté amitié. Rien d'intense, mais c'est agréable.",
        "loveCalculator.friendship.results.weak.message2": "Ce jour porte une énergie amicale douce entre vous. Quelques bons moments sont possibles sans grande effervescence.",
        "loveCalculator.friendship.results.weak.message3": "Les vibrations du jour sont neutres pour votre lien d'amitié. Une journée ordinaire, sans mauvaises surprises.",
        "loveCalculator.friendship.results.weak.message4": "Aujourd'hui, votre connexion amicale est là mais en sourdine. Un café ou un message suffirait pour entretenir le lien.",
        "loveCalculator.friendship.results.weak.message5": "Ce jour offre un fond tranquille à votre amitié. Pas de grands éclats, mais une présence confortable.",
        "loveCalculator.friendship.results.weak.message6": "Les énergies du jour se côtoient agréablement côté amitié. Une journée pour les petits plaisirs simples ensemble.",
        // Conseils — Faible amitié
        "loveCalculator.friendship.results.weak.advice1": "Un message ou un appel rapide peut suffire à entretenir la connexion aujourd'hui.",
        "loveCalculator.friendship.results.weak.advice2": "Optez pour quelque chose de simple si vous vous retrouvez — pas besoin de grands plans.",
        "loveCalculator.friendship.results.weak.advice3": "C'est une bonne journée pour les petites attentions discrètes.",

        // Messages — Terrain Mitigé amitié (55–59%)
        "loveCalculator.friendship.results.lowModerate.message1": "Ce jour mélange de bonnes et de moins bonnes fréquences amicales. Vous pouvez vous entendre, mais ça peut parfois coincer légèrement.",
        "loveCalculator.friendship.results.lowModerate.message2": "Aujourd'hui, la complicité fonctionne par à-coups entre vous. Certains moments seront fluides, d'autres un peu moins.",
        "loveCalculator.friendship.results.lowModerate.message3": "Les énergies du jour créent un terrain amical contrasté. Rien d'insurmontable, mais un peu de souplesse sera utile.",
        "loveCalculator.friendship.results.lowModerate.message4": "Ce jour offre un terrain mi-favorable à votre complicité. Ça peut fonctionner si vous restez sans attentes rigides.",
        "loveCalculator.friendship.results.lowModerate.message5": "Les vibrations de ce jour sont nuancées pour votre duo d'amis. Prenez le meilleur et laissez passer le reste.",
        "loveCalculator.friendship.results.lowModerate.message6": "Aujourd'hui, il y a des ouvertures amicales et quelques frictions potentielles. Restez souples.",
        // Conseils — Terrain Mitigé amitié
        "loveCalculator.friendship.results.lowModerate.advice1": "Abordez la journée sans pression et évitez les sujets sensibles.",
        "loveCalculator.friendship.results.lowModerate.advice2": "Si une tension surgit, ne la laissez pas s'installer. Changez de sujet ou d'activité.",
        "loveCalculator.friendship.results.lowModerate.advice3": "Choisissez des activités légères plutôt que des discussions profondes aujourd'hui.",

        // Messages — Complicité Hésitante amitié (60–64%)
        "loveCalculator.friendship.results.moderate.message1": "Il y a quelque chose dans l'air aujourd'hui entre ces deux prénoms côté amitié. La complicité existe, elle cherche juste le bon canal.",
        "loveCalculator.friendship.results.moderate.message2": "Ce jour porte une énergie amicale ambivalente. On sent du potentiel, mais il hésite encore à se manifester pleinement.",
        "loveCalculator.friendship.results.moderate.message3": "Aujourd'hui, vos fréquences amicales se rapprochent sans tout à fait se superposer. Bonne journée pour observer plus qu'agir.",
        "loveCalculator.friendship.results.moderate.message4": "Les astres de ce jour sont partagés sur votre duo d'amis. Quelque chose circule entre vous, mais reste à préciser.",
        "loveCalculator.friendship.results.moderate.message5": "La journée crée une légère hésitation dans votre complicité. Pas de quoi s'inquiéter — c'est juste l'énergie du jour.",
        "loveCalculator.friendship.results.moderate.message6": "Ce jour joue avec vos énergies amicales sans vraiment les fixer. Laissez la journée se déployer naturellement.",
        // Conseils — Complicité Hésitante amitié
        "loveCalculator.friendship.results.moderate.advice1": "Soyez disponibles sans forcer la complicité. Laissez les échanges venir naturellement.",
        "loveCalculator.friendship.results.moderate.advice2": "C'est une bonne journée pour écouter plutôt que parler. L'autre appréciera.",
        "loveCalculator.friendship.results.moderate.advice3": "Ne concluez rien de définitif sur une seule journée. Revenez demain pour une lecture plus claire.",

        // Messages — Belle Entente amitié (65–69%)
        "loveCalculator.friendship.results.goodStart.message1": "Aujourd'hui, vos énergies amicales se rejoignent naturellement. C'est une journée fluide et agréable pour ce duo.",
        "loveCalculator.friendship.results.goodStart.message2": "Ce jour crée une belle harmonie entre ces deux amis. Les échanges seront simples, légers et positifs.",
        "loveCalculator.friendship.results.goodStart.message3": "Les vibrations du jour favorisent la bonne entente amicale. Profitez de votre complicité sans chercher plus loin.",
        "loveCalculator.friendship.results.goodStart.message4": "Aujourd'hui, le terrain est favorable à votre amitié. Vos énergies se complètent bien et les interactions seront douces.",
        "loveCalculator.friendship.results.goodStart.message5": "Ce jour porte une belle énergie amicale commune. Profitez-en — ce genre de journée fait du bien.",
        "loveCalculator.friendship.results.goodStart.message6": "Les fréquences du jour s'alignent harmonieusement pour votre amitié. Une journée à savourer simplement.",
        // Conseils — Belle Entente amitié
        "loveCalculator.friendship.results.goodStart.advice1": "Profitez de cette bonne énergie pour un moment partagé, sans agenda particulier.",
        "loveCalculator.friendship.results.goodStart.advice2": "C'est le bon jour pour une sortie spontanée ou une vraie conversation — le terrain est prêt.",
        "loveCalculator.friendship.results.goodStart.advice3": "Revenez demain voir comment les énergies évoluent — l'amitié aussi a ses hauts et ses bas quotidiens.",

        // Messages — Amitié Rayonnante amitié (70–79%)
        "loveCalculator.friendship.results.promising.message1": "Aujourd'hui, une vraie complicité amicale rayonne entre ces deux prénoms. Vos énergies du jour se renforcent mutuellement.",
        "loveCalculator.friendship.results.promising.message2": "Ce jour amplifie votre lien d'amitié. Les échanges seront naturels, fluides et chargés d'une belle énergie partagée.",
        "loveCalculator.friendship.results.promising.message3": "Les astres du jour sont généreux pour ce duo d'amis. Vous êtes sur la même longueur d'onde et ça se sentira.",
        "loveCalculator.friendship.results.promising.message4": "Aujourd'hui, vos fréquences amicales résonnent bien ensemble. C'est une journée pour être pleinement présents l'un pour l'autre.",
        "loveCalculator.friendship.results.promising.message5": "Ce jour crée une belle alchimie amicale entre vous. L'énergie est là, sincère et agréable — saisissez-la.",
        "loveCalculator.friendship.results.promising.message6": "Les vibrations du jour jouent en faveur de votre amitié. Une journée où les petits gestes prennent plus de sens.",
        // Conseils — Amitié Rayonnante
        "loveCalculator.friendship.results.promising.advice1": "Faites quelque chose de spécial ensemble aujourd'hui — même simple, ça aura plus d'impact que d'habitude.",
        "loveCalculator.friendship.results.promising.advice2": "C'est une belle journée pour dire à l'autre ce qu'il représente pour vous. Les mots trouveront facilement le chemin.",
        "loveCalculator.friendship.results.promising.advice3": "Profitez pleinement de cette énergie amicale du jour. Elle est là pour vous deux — ne la laissez pas passer.",

        // Messages — Complicité Forte amitié (80–89%)
        "loveCalculator.friendship.results.strong.message1": "Aujourd'hui, vos deux énergies amicales entrent en résonance puissante. C'est l'une de ces journées rares où tout coule naturellement.",
        "loveCalculator.friendship.results.strong.message2": "Ce jour est particulièrement bien orienté pour ce duo d'amis. Une harmonie forte se dessine dans les fréquences du jour.",
        "loveCalculator.friendship.results.strong.message3": "Les astres du jour alignent vos énergies amicales avec force. Tout ce que vous ferez ensemble aujourd'hui sera amplifié.",
        "loveCalculator.friendship.results.strong.message4": "Aujourd'hui, le lien d'amitié entre ces deux prénoms est particulièrement vivant. Une journée à marquer d'une pierre blanche.",
        "loveCalculator.friendship.results.strong.message5": "Ce jour porte une vibration exceptionnellement favorable pour votre complicité. Vos échanges atteindront une profondeur rare.",
        "loveCalculator.friendship.results.strong.message6": "Les énergies du jour vous placent en parfaite harmonie amicale. C'est une de ces journées qui crée des souvenirs durables.",
        // Conseils — Complicité Forte
        "loveCalculator.friendship.results.strong.advice1": "Ne laissez pas passer cette journée sans en profiter pleinement. C'est une énergie amicale à saisir à deux mains.",
        "loveCalculator.friendship.results.strong.advice2": "Partagez quelque chose de mémorable aujourd'hui — une balade, un repas, un éclat de rire.",
        "loveCalculator.friendship.results.strong.advice3": "Notez ce que vous ressentez aujourd'hui. Ces moments de forte complicité méritent d'être reconnus.",

        // Messages — Liens Rares amitié (90–94%)
        "loveCalculator.friendship.results.exceptional.message1": "Aujourd'hui, les étoiles ont placé ces deux prénoms dans un alignement amical exceptionnel. Ce genre de journée ne se présente pas souvent.",
        "loveCalculator.friendship.results.exceptional.message2": "Ce jour réunit vos deux énergies dans une complicité presque parfaite. Tout ce que vous vivrez ensemble aujourd'hui sera marquant.",
        "loveCalculator.friendship.results.exceptional.message3": "Les vibrations du jour créent une fusion rare entre vos deux univers amicaux. C'est une journée à vivre pleinement.",
        "loveCalculator.friendship.results.exceptional.message4": "Aujourd'hui, quelque chose d'inhabituel circule entre ces deux amis. Un alignement que peu de duos connaissent en une même journée.",
        "loveCalculator.friendship.results.exceptional.message5": "Ce jour est exceptionnel pour votre amitié. Vos énergies sont amplifiées l'une par l'autre — profitez de chaque instant.",
        "loveCalculator.friendship.results.exceptional.message6": "Les astres de ce jour ont réservé quelque chose de rare pour votre lien amical. C'est une journée hors du commun.",
        // Conseils — Liens Rares
        "loveCalculator.friendship.results.exceptional.advice1": "Vivez cette journée pleinement et sans prise de tête. C'est une parenthèse amicale rare — saisissez-la.",
        "loveCalculator.friendship.results.exceptional.advice2": "Créez un souvenir ensemble aujourd'hui. Cette énergie mérite d'être célébrée.",
        "loveCalculator.friendship.results.exceptional.advice3": "Revenez demain — les énergies auront changé. Chaque jour a sa propre signature amicale.",

        // Messages — Amis d'Exception amitié (95–98%)
        "loveCalculator.friendship.results.perfect.message1": "Aujourd'hui est l'un des jours les plus rares pour ce duo d'amis. L'univers semble avoir organisé cette journée pour vous deux.",
        "loveCalculator.friendship.results.perfect.message2": "Ce jour atteint le sommet de l'alignement amical pour ces deux prénoms. Une harmonie totale rayonne dans les énergies du moment.",
        "loveCalculator.friendship.results.perfect.message3": "Les fréquences de ce jour créent une fusion presque mystique entre vous côté amitié. Une journée hors du commun à ne pas laisser passer.",
        "loveCalculator.friendship.results.perfect.message4": "Aujourd'hui, tout est en place pour que votre complicité brille. Un alignement que peu d'amis connaissent en une seule journée.",
        "loveCalculator.friendship.results.perfect.message5": "Ce jour porte la marque d'une connexion amicale absolue. Chaque instant partagé aujourd'hui sera empreint de quelque chose de rare.",
        "loveCalculator.friendship.results.perfect.message6": "Les astres ont tout aligné pour ce jour côté amitié. C'est une énergie maximale — vivez-la sans vous retenir.",
        // Conseils — Amis d'Exception
        "loveCalculator.friendship.results.perfect.advice1": "Faites de cette journée quelque chose d'inoubliable. Elle est à vous — pleinement.",
        "loveCalculator.friendship.results.perfect.advice2": "Soyez totalement présents l'un pour l'autre aujourd'hui. Éteignez les distractions et vivez l'instant.",
        "loveCalculator.friendship.results.perfect.advice3": "Cette énergie amicale du jour est unique. Demain sera différent — c'est la beauté de cette lecture quotidienne.",
      
    // Variations pour "Bonne journée"
    "interpretation.daily.closing.var1":
      "Bonne journée {genderText} {name}, et que les étoiles illuminent ton chemin !",
    "interpretation.daily.closing.var2":
      "Belle journée à toi {name}, que cette guidance t'accompagne !",
    "interpretation.daily.closing.var3":
      "Profite bien de ta journée {name}, les énergies sont avec toi !",
    "interpretation.daily.closing.var4":
      "Passe une merveilleuse journée {genderText} {name} !",
    "interpretation.daily.closing.var5":
      "Que cette journée te soit douce {name}, l'univers veille sur toi !",
    "interpretation.daily.closing.var6":
      "Que ta journée soit lumineuse, {genderText} {name}, et remplie de belles surprises !",
    "interpretation.daily.closing.var7":
      "Bonne journée à toi, {name}, que l’énergie positive t’accompagne à chaque instant !",
    "interpretation.daily.closing.var8":
      "Que ce jour t’apporte joie et sérénité, {genderText} {name} !",
    "interpretation.daily.closing.var9":
      "Souris à la vie aujourd’hui, {name}, elle te le rendra au centuple !",
    "interpretation.daily.closing.var10":
      "Passe une journée inspirante, {genderText} {name}, sous la protection des étoiles !",

    // Variations pour "Wisdom" tirage du jour
      "interpretation.daily.wisdom.var0": "Fais confiance à ton instinct aujourd’hui. Si ça te semble juste, fonce !",
      "interpretation.daily.wisdom.var1": "Tu as tout ce qu’il te faut pour avancer. Crois en toi et passe à l’action!",
      "interpretation.daily.wisdom.var2": "Ne te complique pas la vie. Prends la décision qui te paraît la meilleure et fonce!",
      "interpretation.daily.wisdom.var3": "Ouvre les yeux et saisis les opportunités qui se présentent, même les petites.",
      "interpretation.daily.wisdom.var4": "Laisse-toi guider par ce que tu sais déjà. Tu es capable de gérer cette journée.",
      "interpretation.daily.wisdom.var5": "Prends le temps de remarquer les détails autour de toi, ils peuvent t’aider à décider.",
      "interpretation.daily.wisdom.var6": "Écoute ce que tu ressens. Si quelque chose te paraît juste, fais-le sans hésiter!",
      "interpretation.daily.wisdom.var7": "Garde la tête froide et le cœur ouvert. Les bonnes décisions viennent souvent de là.",
      "interpretation.daily.wisdom.var8": "Ne sous-estime pas ce que tu sais déjà. Tu as les ressources pour avancer.",
      "interpretation.daily.wisdom.var9": "Reste attentif aux opportunités et fais les choix qui te rapprochent de tes objectifs.",
      "interpretation.daily.wisdom.var10": "Concentre-toi sur ce qui compte pour toi. Ne te laisse pas distraire par le reste.",
      "interpretation.daily.wisdom.var11": "Ose avancer même si tout n’est pas parfait. Le simple fait d’agir fait la différence.",
      "interpretation.daily.wisdom.var12": "Accepte que tu ne puisses pas tout contrôler. Tu peux faire de ton mieux et ça suffit!",
      "interpretation.daily.wisdom.var13": "Ne laisse pas la peur te bloquer. Tu as déjà ce qu’il faut pour y arriver.",
      "interpretation.daily.wisdom.var14": "Sois présent et attentif aujourd’hui. Prends tes décisions, avance et ne doute pas!",

   
    // Card Names and Meanings - Runes
    "cards.runes.Fehu.name": "Fehu",
    "cards.runes.Fehu.meaning":"Richesse, prospérité, nouveau départ financier",
    "cards.runes.Uruz.name": "Uruz",
    "cards.runes.Uruz.meaning": "Force brute, santé, transformation",
    "cards.runes.Thurisaz.name": "Thurisaz",
    "cards.runes.Thurisaz.meaning": "Défense, protection, force destructrice",
    "cards.runes.Ansuz.name": "Ansuz",
    "cards.runes.Ansuz.meaning": "Communication divine, inspiration, sagesse",
    "cards.runes.Raidho.name": "Raidho",
    "cards.runes.Raidho.meaning": "Voyage, mouvement, progression",
    "cards.runes.Kenaz.name": "Kenaz",
    "cards.runes.Kenaz.meaning": "Connaissance, créativité, illumination",
    "cards.runes.Gebo.name": "Gebo",
    "cards.runes.Gebo.meaning": "Don, échange, partenariat",
    "cards.runes.Wunjo.name": "Wunjo",
    "cards.runes.Wunjo.meaning": "Joie, bonheur, harmonie",
    "cards.runes.Hagalaz.name": "Hagalaz",
    "cards.runes.Hagalaz.meaning": "Disruption, changement forcé, purification",
    "cards.runes.Nauthiz.name": "Nauthiz",
    "cards.runes.Nauthiz.meaning": "Nécessité, contrainte, leçon karmique",
    "cards.runes.Isa.name": "Isa",
    "cards.runes.Isa.meaning": "Glace, stagnation, patience",
    "cards.runes.Jera.name": "Jera",
    "cards.runes.Jera.meaning": "Récolte, cycles, récompense",
    "cards.runes.Eihwaz.name": "Eihwaz",
    "cards.runes.Eihwaz.meaning":
      "Endurance, protection, connexion spirituelle",
    "cards.runes.Perthro.name": "Perthro",
    "cards.runes.Perthro.meaning": "Mystère, destin, forces cachées",
    "cards.runes.Algiz.name": "Algiz",
    "cards.runes.Algiz.meaning": "Protection divine, connexion aux guides",
    "cards.runes.Sowilo.name": "Sowilo",
    "cards.runes.Sowilo.meaning": "Succès, victoire, énergie solaire",
    "cards.runes.Tiwaz.name": "Tiwaz",
    "cards.runes.Tiwaz.meaning": "Victoire, justice, sacrifice honorable",
    "cards.runes.Berkano.name": "Berkano",
    "cards.runes.Berkano.meaning": "Croissance, fertilité, nouveau cycle",
    "cards.runes.Ehwaz.name": "Ehwaz",
    "cards.runes.Ehwaz.meaning": "Mouvement, progrès, partenariat",
    "cards.runes.Mannaz.name": "Mannaz",
    "cards.runes.Mannaz.meaning": "Humanité, soi, intelligence",
    "cards.runes.Laguz.name": "Laguz",
    "cards.runes.Laguz.meaning": "Eau, intuition, émotions",
    "cards.runes.Ingwaz.name": "Ingwaz",
    "cards.runes.Ingwaz.meaning": "Fertilité masculine, énergie créatrice",
    "cards.runes.Dagaz.name": "Dagaz",
    "cards.runes.Dagaz.meaning": "Éveil, transformation, nouveau jour",
    "cards.runes.Othala.name": "Othala",
    "cards.runes.Othala.meaning": "Héritage, propriété, tradition familiale",

   //Tirage love oracle
        "crossSpread.positions.present": "Le Présent",
        "crossSpread.positions.obstacle": "L'Obstacle",
        "crossSpread.positions.past": "Le Passé",
        "crossSpread.positions.future": "L'Avenir",
        "crossSpread.positions.synthesis": "La Synthèse",
        "crossSpread.interpretation.title": "Votre Tirage en Croix",
        "crossSpread.interpretation.subtitle": "{name}, votre tirage révèle un chemin amoureux riche en enseignements.",
        "crossSpread.interpretation.sections.positive": "Aspects Positifs",
        "crossSpread.interpretation.sections.attention": "Points d'Attention",
        "crossSpread.interpretation.sections.advice": "Conseil",
        "crossSpread.interpretation.newConsultation": "Nouvelle Consultation",
        "gameMode.classic.title": "Tirage 3 Cartes",
        "gameMode.classic.description": "Recevez une guidance amoureuse immédiate grâce à un tirage simple et intuitif de 3 cartes.",
        "gameMode.classic.features": "3 cartes • Guidance rapide • Message personnalisé",
        "gameMode.cross.title": "Tirage en Croix",
        "gameMode.cross.description": "Un tirage approfondi avec 5 positions pour explorer votre situation amoureuse",
        "oracle.loveOracle.title": "Oracle de l'Amour",
        "oracle.loveOracle.description": "Découvrez ce que l'avenir amoureux vous réserve grâce à ce tirage.",
        "crossSpread.title": "Tirage en Croix – Love Oracle",
        "crossSpread.description": "Ce tirage explore une situation amoureuse à travers trois axes : les énergies favorables (Pour), les obstacles ou blocages (Contre) et le message final (Synthèse). Chaque carte révèle une variation différente selon le tirage obtenu.",
        "interpretation.loveOracle.greeting": "Voici ce que révèle ton tirage de l’amour",
        "revelation.personalAdvice": "Ton conseil personnel",
        "common.loading": "Chargement...",
        "gameMode.classic.cta": "Consulter l'oracle", 
        "gameMode.cross.cta": "Consulter l'oracle",

        // Noms des cartes Love Oracle
        "cards.loveOracle.lerendezvous.name": "Le Rendez-Vous",
        "cards.loveOracle.lemessage.name": "Le Message",
        "cards.loveOracle.ledesir.name": "Le Désir",
        "cards.loveOracle.lecoeurouvert.name": "Le Cœur Ouvert",
        "cards.loveOracle.lecoeurferme.name": "Le Cœur Fermé",
        "cards.loveOracle.lechoix.name": "Le Choix",
        "cards.loveOracle.leretour.name": "Le Retour",
        "cards.loveOracle.ladistance.name": "La Distance",
        "cards.loveOracle.lunion.name": "L'Union",
        "cards.loveOracle.lemasque.name": "Le Masque",
        "cards.loveOracle.lapassion.name": "La Passion",
        "cards.loveOracle.lachance.name": "La Chance",
        "cards.loveOracle.ledestin.name": "Le Destin",
        "cards.loveOracle.lesilence.name": "Le Silence",
        "cards.loveOracle.laverite.name": "La Vérité",
        "cards.loveOracle.lecadeau.name": "Le Cadeau",
        "cards.loveOracle.lablessure.name": "La Blessure",
        "cards.loveOracle.lenouveaudepart.name": "Le Nouveau Départ",
        "cards.loveOracle.lafusion.name": "La Fusion",
        "cards.loveOracle.latentation.name": "La Tentation",
        "cards.loveOracle.laprotection.name": "La Protection",
        "cards.loveOracle.laliberation.name": "La Libération",

        // ========== LABELS DES 3 ÉNERGIES ==========

        // Pour l'Oracle de l'Amour
        "interpretation.loveOracle.energy1.label": "L'Énergie dominante",
        "interpretation.loveOracle.energy1.subtitle": "Ce que vous ressentez intérieurement",
        "interpretation.loveOracle.energy2.label": "L'Influence extérieure",
        "interpretation.loveOracle.energy2.subtitle": "Ce qui agit autour de vous",
        "interpretation.loveOracle.energy3.label": "L'Évolution possible",
        "interpretation.loveOracle.energy3.subtitle": "Ce qui peut arriver bientôt",

    //Card Names and Meanings - Love oracle - Tirage 3 cartes
        // Le Rendez-Vous — Énergie dominante (ce que tu ressens)
        "cards.loveOracle.lerendezvous.meaning.energy1.var1": "Tu attends ce rendez-vous avec impatience et ton cœur est rempli d’espoir et d’excitation.",
        "cards.loveOracle.lerendezvous.meaning.energy1.var2": "Ton esprit est concentré sur cette rencontre, et tu imagines déjà des moments intenses et agréables.",
        "cards.loveOracle.lerendezvous.meaning.energy1.var3": "Tu ressens un mélange de nervosité et de désir, mais tu es prêt{genderSuffix} à profiter pleinement de ce moment.",  
        // Le Rendez-Vous — Influence extérieure (ce qui agit autour de toi)
        "cards.loveOracle.lerendezvous.meaning.energy2.var1": "La personne que tu vas rencontrer semble également impatiente et peut préparer quelque chose de spécial pour vous.",
        "cards.loveOracle.lerendezvous.meaning.energy2.var2": "Des circonstances ou des événements pourraient rendre ce rendez-vous inoubliable ou le compliquer légèrement.",
        "cards.loveOracle.lerendezvous.meaning.energy2.var3": "Ton entourage peut t’encourager et te donner des conseils pour que ce rendez-vous se passe au mieux.",  
        // Le Rendez-Vous — Évolution possible (ce qui peut arriver bientôt)
        "cards.loveOracle.lerendezvous.meaning.energy3.var1": "Ce rendez-vous pourrait créer une connexion forte et te rapprocher de cette personne de manière significative.",
        "cards.loveOracle.lerendezvous.meaning.energy3.var2": "Même si tout ne se passe pas parfaitement, cette rencontre pourra t’apporter des émotions intenses et des souvenirs précieux.",
        "cards.loveOracle.lerendezvous.meaning.energy3.var3": "Il est possible qu’une révélation ou un geste lors de ce rendez-vous change la dynamique de votre relation et ouvre de nouvelles perspectives.",
        // Le Message — Énergie dominante (ce que tu ressens) – version corrigée
        "cards.loveOracle.lemessage.meaning.energy1.var1": "Tu attends un message, mais tu ne sais pas quand il arrivera et tu te demandes si cette personne va vraiment t’écrire.",
        "cards.loveOracle.lemessage.meaning.energy1.var2": "Une personne hésite à t’envoyer un message, et cela crée un mélange d’espoir et de doute dans ton cœur.",
        "cards.loveOracle.lemessage.meaning.energy1.var3": "Tu restes dans l’attente, sans savoir si ce message va arriver, et cela te fait réfléchir à ce que tu souhaites vraiment.",  
        // Le Message — Influence extérieure (ce qui agit autour de toi)
        "cards.loveOracle.lemessage.meaning.energy2.var1": "La personne concernée pourrait t’envoyer un message qui change la dynamique entre vous.",
        "cards.loveOracle.lemessage.meaning.energy2.var2": "Des événements extérieurs ou des conseils d’ami peuvent influencer ce que tu recevras ou quand tu le recevras.",
        "cards.loveOracle.lemessage.meaning.energy2.var3": "Il est possible que tu reçoives un message inattendu, révélateur, ou même un déclencheur pour avancer dans ta relation.",  
        // Le Message — Évolution possible (ce qui peut arriver bientôt)
        "cards.loveOracle.lemessage.meaning.energy3.var1": "Si tu es patient{genderSuffix} et attentif, ce message pourrait t’apporter des nouvelles importantes ou une clarification.",
        "cards.loveOracle.lemessage.meaning.energy3.var2": "Ce message pourrait te surprendre, provoquer des émotions fortes, et te guider dans tes prochains choix amoureux.",
        "cards.loveOracle.lemessage.meaning.energy3.var3": "Même si le message n’est pas exactement ce que tu espérais, il pourrait te permettre d’avancer et de mieux comprendre la situation.",
        // Le Désir — Énergie dominante (ce que tu ressens)
        "cards.loveOracle.ledesir.meaning.energy1.var1": "Ton corps et ton cœur brûlent pour cette personne, et tu rêves de moments intenses et sensuels avec elle.",
        "cards.loveOracle.ledesir.meaning.energy1.var2": "Chaque pensée, chaque regard attise ton désir et te fait imaginer des instants passionnés.",
        "cards.loveOracle.ledesir.meaning.energy1.var3": "Tu as une envie irrésistible de te rapprocher, de sentir cette connexion charnelle et émotionnelle à la fois.",  
        // Le Désir — Influence extérieure (ce qui agit autour de toi)
        "cards.loveOracle.ledesir.meaning.energy2.var1": "La personne que tu désires pourrait également ressentir cette attraction intense, créant des moments brûlants et inattendus.",
        "cards.loveOracle.ledesir.meaning.energy2.var2": "Des situations ou des regards échangés peuvent enflammer vos émotions et renforcer ce désir presque irrépressible.",
        "cards.loveOracle.ledesir.meaning.energy2.var3": "Attention, l’intensité peut être forte et surprenante, et il faudra parfois gérer cette passion pour éviter les complications.",  
        // Le Désir — Évolution possible (ce qui peut arriver bientôt)
        "cards.loveOracle.ledesir.meaning.energy3.var1": "Si tu cèdes à ce désir, tu pourrais vivre des instants torrides et des rencontres passionnées qui marqueront ton cœur.",
        "cards.loveOracle.ledesir.meaning.energy3.var2": "Ce désir pourrait évoluer en une connexion très intense, mais attention aux conséquences si la personne est indisponible ou compliquée.",
        "cards.loveOracle.ledesir.meaning.energy3.var3": "Même si la situation est délicate, laisser parler ton désir pourrait te permettre de vivre des moments sensuels et émotionnellement puissants.",
        // Le Cœur Ouvert — Énergie dominante (ce que tu ressens)
        "cards.loveOracle.lecoeurouvert.meaning.energy1.var1": "Ton cœur est prêt à s’ouvrir et à accueillir quelqu’un de nouveau, sans peur ni retenue.",
        "cards.loveOracle.lecoeurouvert.meaning.energy1.var2": "Tu ressens un désir profond de partage et de complicité, et tu n’as plus envie de te protéger.",
        "cards.loveOracle.lecoeurouvert.meaning.energy1.var3": "Tu es sensible et réceptif aux émotions des autres, et ton cœur s’ouvre facilement à l’amour.",
        // Le Cœur Ouvert — Influence extérieure (ce qui agit autour de toi)
        "cards.loveOracle.lecoeurouvert.meaning.energy2.var1": "Une personne proche de toi t’encourage à t’ouvrir et à montrer tes sentiments, même si cela te fait peur.",
        "cards.loveOracle.lecoeurouvert.meaning.energy2.var2": "Des événements autour de toi poussent à la rencontre et à la connexion, ce qui peut t’amener à tomber amoureux{genderSuffix} rapidement.",
        "cards.loveOracle.lecoeurouvert.meaning.energy2.var3": "Attention, certaines personnes pourraient profiter de ta sensibilité et de ton ouverture, alors garde un minimum de prudence.",
        // Le Cœur Ouvert — Évolution possible (ce qui peut arriver bientôt)
        "cards.loveOracle.lecoeurouvert.meaning.energy3.var1": "Si tu restes ouvert{genderSuffix} et sincère, une rencontre importante pourrait bouleverser ta vie amoureuse.",
        "cards.loveOracle.lecoeurouvert.meaning.energy3.var2": "Ton ouverture pourrait être récompensée par des moments intenses de complicité, mais aussi par des blessures si tu n’es pas attentif.",
        "cards.loveOracle.lecoeurouvert.meaning.energy3.var3": "En laissant ton cœur guider tes choix, tu pourrais vivre une histoire forte, mais n’oublie pas de poser tes limites.",
        // Le Cœur Fermé — Énergie dominante (ce que tu ressens)
        "cards.loveOracle.lecoeurferme.meaning.energy1.var1": "Ton cœur est fermé et tu as du mal à faire confiance aux autres, même à ceux que tu aimes.",
        "cards.loveOracle.lecoeurferme.meaning.energy1.var2": "Tu te protèges contre la douleur et les déceptions passées, et tu refuses de montrer tes vrais sentiments.",
        "cards.loveOracle.lecoeurferme.meaning.energy1.var3": "Tu ressens une distance émotionnelle, comme si tu étais sur tes gardes face à l’amour et à l’intimité.",
        // Le Cœur Fermé — Influence extérieure (ce qui agit autour de toi)
        "cards.loveOracle.lecoeurferme.meaning.energy2.var1": "Des personnes ou des situations récentes t’ont blessé{genderSuffix}, renforçant ta méfiance et ta prudence.",
        "cards.loveOracle.lecoeurferme.meaning.energy2.var2": "Quelqu’un pourrait essayer de s’approcher, mais tu ignores ses signes ou tu les repousses sans le vouloir.",
        "cards.loveOracle.lecoeurferme.meaning.energy2.var3": "Ton entourage peut t’encourager à t’ouvrir, mais tu hésites encore, craignant de te tromper ou de souffrir." ,
        // Le Cœur Fermé — Évolution possible (ce qui peut arriver bientôt)
        "cards.loveOracle.lecoeurferme.meaning.energy3.var1": "Si tu continues à garder ton cœur fermé, tu risques de passer à côté d’une rencontre importante et sincère.",
        "cards.loveOracle.lecoeurferme.meaning.energy3.var2": "Avec le temps et la confiance, tu pourrais t’ouvrir progressivement et vivre une relation vraie, mais il faudra du courage.",
        "cards.loveOracle.lecoeurferme.meaning.energy3.var3": "Un événement ou une personne inattendue pourrait te pousser à laisser tomber tes défenses et à laisser entrer l’amour, même si cela te fait peur.",
        // Le Choix — Énergie dominante (ce que tu ressens)
        "cards.loveOracle.lechoix.meaning.energy1.var1": "Tu te sens tiraillé{genderSuffix} entre deux personnes ou deux directions, et ton cœur ne sait pas laquelle suivre.",
        "cards.loveOracle.lechoix.meaning.energy1.var2": "Tu réfléchis beaucoup à tes sentiments et tu essaies de comprendre ce que tu veux vraiment en amour.",
        "cards.loveOracle.lechoix.meaning.energy1.var3": "Une décision importante se profile, et tu ressens à la fois l’excitation et la peur de faire le mauvais choix.",
        // Le Choix — Influence extérieure (ce qui agit autour de toi)
        "cards.loveOracle.lechoix.meaning.energy2.var1": "Des avis ou des conseils extérieurs peuvent compliquer ta réflexion et te faire douter de tes propres sentiments.",
        "cards.loveOracle.lechoix.meaning.energy2.var2": "Certaines personnes autour de toi ont leurs propres intérêts et pourraient influencer tes décisions à leur avantage.",
        "cards.loveOracle.lechoix.meaning.energy2.var3": "Ton entourage peut aussi te soutenir et t’aider à clarifier ce que tu veux vraiment, même si le chemin reste difficile.",
        // Le Choix — Évolution possible (ce qui peut arriver bientôt)
        "cards.loveOracle.lechoix.meaning.energy3.var1": "Si tu écoutes ton cœur et tes instincts, tu pourras faire un choix qui te correspond et t’apportera du bonheur.",
        "cards.loveOracle.lechoix.meaning.energy3.var2": "Il est possible que tes hésitations te fassent rater une opportunité, mais cela t’apprendra à mieux te connaître.",
        "cards.loveOracle.lechoix.meaning.energy3.var3": "Une décision importante pourrait bouleverser ton équilibre actuel, mais elle ouvrira aussi la voie à une relation sincère et intense si tu oses franchir le pas.",
        // Le Retour — Énergie dominante (ce que tu ressens)
        "cards.loveOracle.leretour.meaning.energy1.var1": "Tu ressens un désir fort que quelqu’un revienne dans ta vie, et ton cœur espère une seconde chance.",
        "cards.loveOracle.leretour.meaning.energy1.var2": "Tu es partagé{genderSuffix} entre le passé et le présent, et tu penses souvent à ce qui aurait pu être.",
        "cards.loveOracle.leretour.meaning.energy1.var3": "Un sentiment de nostalgie et d’attente t’envahit, comme si une partie de toi voulait réparer ce qui a été perdu.",
        // Le Retour — Influence extérieure (ce qui agit autour de toi)
        "cards.loveOracle.leretour.meaning.energy2.var1": "La personne dont tu penses au retour pourrait aussi ressentir le besoin de revenir, mais hésite à se manifester.",
        "cards.loveOracle.leretour.meaning.energy2.var2": "Des événements ou des amis peuvent faciliter ce retour ou au contraire le retarder, selon les circonstances.",
        "cards.loveOracle.leretour.meaning.energy2.var3": "Certaines influences extérieures pourraient te pousser à relancer la relation, mais il faudra être prudent{genderSuffix} pour ne pas répéter les erreurs du passé.",
        // Le Retour — Évolution possible (ce qui peut arriver bientôt)
        "cards.loveOracle.leretour.meaning.energy3.var1": "Si tu t’ouvres et laisses une chance à cette personne, il est possible de retrouver une connexion forte et sincère.",
        "cards.loveOracle.leretour.meaning.energy3.var2": "Un retour pourrait raviver des émotions intenses, mais il faudra clarifier les attentes pour éviter les blessures.",
        "cards.loveOracle.leretour.meaning.energy3.var3": "Il est aussi possible que la personne ne revienne pas, et que cette situation te pousse à tourner la page et à te concentrer sur un nouvel amour.",
        // La Distance — Énergie dominante (ce que tu ressens)
        "cards.loveOracle.ladistance.meaning.energy1.var1": "Tu ressens un éloignement émotionnel ou physique qui te pèse et te fait douter de la relation.",
        "cards.loveOracle.ladistance.meaning.energy1.var2": "Ton cœur a du mal à combler le manque et tu rêves de proximité et de moments partagés.",
        "cards.loveOracle.ladistance.meaning.energy1.var3": "La séparation te fait ressentir un vide et parfois de la frustration, mais tu gardes espoir que les choses s’améliorent.",
        // La Distance — Influence extérieure (ce qui agit autour de toi)
        "cards.loveOracle.ladistance.meaning.energy2.var1": "Des circonstances extérieures comme le travail, la vie personnelle ou la situation géographique peuvent maintenir cette distance.",
        "cards.loveOracle.ladistance.meaning.energy2.var2": "Des conseils ou des pressions de proches peuvent te pousser à accepter la situation ou à chercher à la combler.",
        "cards.loveOracle.ladistance.meaning.energy2.var3": "Il est possible que quelqu’un tente de réduire la distance, mais tout dépendra de votre engagement et de vos choix.",
        // La Distance — Évolution possible (ce qui peut arriver bientôt)
        "cards.loveOracle.ladistance.meaning.energy3.var1": "Si vous faites un effort pour communiquer et vous rapprocher, la distance pourrait se réduire et la relation se renforcer.",
        "cards.loveOracle.ladistance.meaning.energy3.var2": "Il est aussi possible que la distance persiste et mette la relation à l’épreuve, révélant ce que vous êtes vraiment prêts à vivre.",
        "cards.loveOracle.ladistance.meaning.energy3.var3": "Un événement inattendu pourrait créer une rencontre ou un rapprochement, mais il faudra agir rapidement pour saisir cette chance.",
        // L'Union — Énergie dominante (ce que tu ressens)
        "cards.loveOracle.lunion.meaning.energy1.var1": "Tu ressens un profond besoin de connexion et de partage, et ton cœur aspire à une relation sincère et durable.",
        "cards.loveOracle.lunion.meaning.energy1.var2": "Tu es prêt{genderSuffix} à t’engager et à construire quelque chose de solide avec quelqu’un qui te correspond vraiment.",
        "cards.loveOracle.lunion.meaning.energy1.var3": "Ton désir de proximité et de complicité est fort, et tu cherches à créer un lien authentique et profond.",
        // L'Union — Influence extérieure (ce qui agit autour de toi)
        "cards.loveOracle.lunion.meaning.energy2.var1": "Les personnes autour de toi peuvent t’encourager à t’engager et à chercher une union sincère, ou te mettre en garde contre les mauvais choix.",
        "cards.loveOracle.lunion.meaning.energy2.var2": "Des événements ou des rencontres récentes favorisent la création de liens solides et la possibilité de construire quelque chose de vrai.",
        "cards.loveOracle.lunion.meaning.energy2.var3": "Attention, certaines influences extérieures pourraient compliquer la relation, mais elles peuvent aussi révéler la force de votre lien.",
        // L'Union — Évolution possible (ce qui peut arriver bientôt)
        "cards.loveOracle.lunion.meaning.energy3.var1": "Si tu investis ton cœur et ton énergie, une union durable et harmonieuse pourrait se former très bientôt.",
        "cards.loveOracle.lunion.meaning.energy3.var2": "Il est possible que la relation traverse des épreuves, mais si vous restez sincères et à l’écoute, votre lien s’en sortira renforcé.",
        "cards.loveOracle.lunion.meaning.energy3.var3": "Une rencontre importante ou un événement clé pourrait consolider votre relation et ouvrir la voie à un amour profond et stable.",
        // Le Masque — Énergie dominante (ce que tu ressens)
        "cards.loveOracle.lemasque.meaning.energy1.var1": "Tu as tendance à cacher tes véritables émotions et à ne pas montrer tes sentiments pour te protéger.",
        "cards.loveOracle.lemasque.meaning.energy1.var2": "Tu ressens une certaine distance émotionnelle, comme si tu portais un masque pour éviter de souffrir ou d’être jugé{genderSuffix}.",
        "cards.loveOracle.lemasque.meaning.energy1.var3": "Parfois, tu es tiraillé{genderSuffix} entre ce que tu ressens vraiment et l’image que tu veux montrer aux autres.",
        // Le Masque — Influence extérieure (ce qui agit autour de toi)
        "cards.loveOracle.lemasque.meaning.energy2.var1": "Certaines personnes autour de toi ne voient que la façade que tu montres et ignorent tes émotions réelles.",
        "cards.loveOracle.lemasque.meaning.energy2.var2": "Des situations extérieures te poussent à te protéger encore plus et à maintenir ce masque, par peur de la déception ou du rejet.",
        "cards.loveOracle.lemasque.meaning.energy2.var3": "Des proches ou des événements pourraient te pousser à baisser ton masque, mais cela demande du courage et de la confiance.",
        // Le Masque — Évolution possible (ce qui peut arriver bientôt)
        "cards.loveOracle.lemasque.meaning.energy3.var1": "Si tu acceptes de montrer qui tu es vraiment, tu pourrais vivre une connexion sincère et profonde avec quelqu’un qui te comprend.",
        "cards.loveOracle.lemasque.meaning.energy3.var2": "Il est possible que ton masque soit percé par une situation ou une personne, révélant tes véritables émotions et déclenchant des changements dans ta vie amoureuse.",
        "cards.loveOracle.lemasque.meaning.energy3.var3": "Continuer à porter ce masque pourrait te protéger à court terme, mais risquer de t’éloigner de relations authentiques et enrichissantes.",
        // La Passion — Énergie dominante (ce que tu ressens)
        "cards.loveOracle.lapassion.meaning.energy1.var1": "Tu brûles d’un désir intense et ton corps réclame cette connexion, comme si chaque pensée tournait autour de cette personne.",
        "cards.loveOracle.lapassion.meaning.energy1.var2": "Ton cœur s’emballe et ton esprit est obsédé par cette personne, tu rêves de moments passionnés et intenses.",
        "cards.loveOracle.lapassion.meaning.energy1.var3": "Tu ressens une attraction irrésistible, mêlant émotions et sensualité, et tu as envie de tout vivre pleinement avec cette personne.",
        // La Passion — Influence extérieure (ce qui agit autour de toi)
        "cards.loveOracle.lapassion.meaning.energy2.var1": "La personne que tu désires est très présente dans ton quotidien ou dans ton esprit, et cela alimente cette intensité.",
        "cards.loveOracle.lapassion.meaning.energy2.var2": "Des signes ou des rapprochements peuvent amplifier cette tension et cette attraction, te plongeant dans un tourbillon d’émotions.",
        "cards.loveOracle.lapassion.meaning.energy2.var3": "Attention, cette passion peut aussi être compliquée par des obstacles extérieurs, mais elle révèle l’énergie puissante qui vous lie.",
        // La Passion — Évolution possible (ce qui peut arriver bientôt)
        "cards.loveOracle.lapassion.meaning.energy3.var1": "Si tu te laisses emporter par cette passion, tu pourrais vivre des moments intenses et inoubliables, mais il faudra être conscient des conséquences.",
        "cards.loveOracle.lapassion.meaning.energy3.var2": "Cette énergie pourrait transformer la relation, te rapprochant profondément de cette personne ou créant des situations explosives.",
        "cards.loveOracle.lapassion.meaning.energy3.var3": "La passion pourrait évoluer vers un amour puissant et profond si tu arrives à canaliser tes émotions et à être sincère avec toi-même et l’autre.",
        // La Chance — Énergie dominante (ce que tu ressens)
        "cards.loveOracle.lachance.meaning.energy1.var1": "Tu sens que la chance est de ton côté et que des opportunités amoureuses peuvent se présenter à toi bientôt.",
        "cards.loveOracle.lachance.meaning.energy1.var2": "Ton cœur est ouvert et prêt à accueillir ce qui pourrait arriver de beau et inattendu.",
        "cards.loveOracle.lachance.meaning.energy1.var3": "Tu ressens un élan positif dans ta vie amoureuse, comme si l’univers voulait te sourire et t’offrir une belle rencontre.",
        // La Chance — Influence extérieure (ce qui agit autour de toi)
        "cards.loveOracle.lachance.meaning.energy2.var1": "Des rencontres ou des événements fortuits peuvent jouer en ta faveur et te rapprocher de quelqu’un de spécial.",
        "cards.loveOracle.lachance.meaning.energy2.var2": "Ton entourage peut t’apporter des opportunités ou te mettre en contact avec des personnes qui correspondent à tes désirs.",
        "cards.loveOracle.lachance.meaning.energy2.var3": "Il se peut que la chance se manifeste de manière inattendue, mais il faudra rester attentif pour ne pas la laisser passer.",
        // La Chance — Évolution possible (ce qui peut arriver bientôt)
        "cards.loveOracle.lachance.meaning.energy3.var1": "Si tu restes ouvert{genderSuffix} et attentif, une rencontre heureuse ou un événement positif pourrait transformer ta vie amoureuse.",
        "cards.loveOracle.lachance.meaning.energy3.var2": "La chance pourrait te surprendre et t’apporter une situation idéale, mais il faudra saisir l’occasion quand elle se présente.",
        "cards.loveOracle.lachance.meaning.energy3.var3": "Même si tout ne se passe pas parfaitement, cette période promet des surprises et des moments heureux qui peuvent te rapprocher de l’amour que tu souhaites.",
        // Le Destin — Énergie dominante (ce que tu ressens)
        "cards.loveOracle.ledestin.meaning.energy1.var1": "Tu sens que certaines rencontres ou événements sont écrits pour toi et que le destin joue un rôle dans ta vie amoureuse.",
        "cards.loveOracle.ledestin.meaning.energy1.var2": "Ton cœur est intrigué par ce qui semble inévitable et tu te laisses porter par le fil des événements.",
        "cards.loveOracle.ledestin.meaning.energy1.var3": "Tu ressens une force mystérieuse qui te pousse vers certaines personnes ou situations, comme si tout était lié par le destin.",
        // Le Destin — Influence extérieure (ce qui agit autour de toi)
        "cards.loveOracle.ledestin.meaning.energy2.var1": "Des rencontres fortuites ou des événements inattendus peuvent te rapprocher de ce que le destin te réserve.",
        "cards.loveOracle.ledestin.meaning.energy2.var2": "Ton entourage ou les circonstances peuvent créer des opportunités qui semblent être guidées par une force supérieure.",
        "cards.loveOracle.ledestin.meaning.energy2.var3": "Attention, certaines situations peuvent sembler être des détours, mais elles font partie du chemin que le destin a prévu pour toi.",
        // Le Destin — Évolution possible (ce qui peut arriver bientôt)
        "cards.loveOracle.ledestin.meaning.energy3.var1": "Si tu acceptes de suivre le courant et de faire confiance au destin, une rencontre ou un événement important pourrait bouleverser ta vie amoureuse.",
        "cards.loveOracle.ledestin.meaning.energy3.var2": "Le destin pourrait t’apporter une opportunité unique, mais il faudra rester attentif et saisir le moment quand il se présente.",
        "cards.loveOracle.ledestin.meaning.energy3.var3": "Même si le chemin semble compliqué, le destin travaille pour toi et pourrait te conduire vers une relation significative et profonde.",
        // Le Silence — Énergie dominante (ce que tu ressens)
        "cards.loveOracle.lesilence.meaning.energy1.var1": "Tu ressens un vide ou une distance dans la communication, et le silence te pèse dans tes relations amoureuses.",
        "cards.loveOracle.lesilence.meaning.energy1.var2": "Ton cœur est confus et tu te demandes si le silence cache des sentiments ou un éloignement.",
        "cards.loveOracle.lesilence.meaning.energy1.var3": "Parfois, tu préfères te taire et garder tes émotions pour toi, ce qui peut créer des malentendus ou de la tension.",
        // Le Silence — Influence extérieure (ce qui agit autour de toi)
        "cards.loveOracle.lesilence.meaning.energy2.var1": "La personne en face de toi peut être distante ou réservée, et son silence influence ton état d’esprit.",
        "cards.loveOracle.lesilence.meaning.energy2.var2": "Des circonstances extérieures ou des tensions récentes peuvent créer un silence, rendant la communication plus difficile.",
        "cards.loveOracle.lesilence.meaning.energy2.var3": "Ton entourage peut te conseiller ou intervenir pour rétablir le dialogue, mais la décision de parler ou non dépendra de toi et de l’autre personne.",
        // Le Silence — Évolution possible (ce qui peut arriver bientôt)
        "cards.loveOracle.lesilence.meaning.energy3.var1": "Si tu choisis de briser le silence et d’exprimer tes émotions, une clarification ou une réconciliation pourrait se produire.",
        "cards.loveOracle.lesilence.meaning.energy3.var2": "Le silence pourrait durer et te faire douter, mais il te donnera aussi le temps de réfléchir à ce que tu veux vraiment.",
        "cards.loveOracle.lesilence.meaning.energy3.var3": "Un événement inattendu ou une personne pourrait relancer la communication et révéler des vérités cachées, ouvrant la voie à une meilleure compréhension mutuelle.",
        // La Vérité — Énergie dominante (ce que tu ressens)
        "cards.loveOracle.laverite.meaning.energy1.var1": "Tu ressens le besoin de connaître la vérité sur une situation ou une personne, et ton cœur réclame de la clarté.",
        "cards.loveOracle.laverite.meaning.energy1.var2": "Ton intuition te pousse à chercher la transparence et à ne plus te contenter de demi-vérités ou de faux-semblants.",
        "cards.loveOracle.laverite.meaning.energy1.var3": "Tu es prêt{genderSuffix} à affronter ce qui est réel, même si cela peut être douloureux ou surprenant.",
        // La Vérité — Influence extérieure (ce qui agit autour de toi)
        "cards.loveOracle.laverite.meaning.energy2.var1": "Des faits ou des révélations autour de toi pourraient te montrer ce qui est vraiment en jeu dans cette relation.",
        "cards.loveOracle.laverite.meaning.energy2.var2": "Certaines personnes pourraient te cacher la vérité, volontairement ou par peur de te blesser, ce qui complique la situation.",
        "cards.loveOracle.laverite.meaning.energy2.var3": "Ton entourage ou des événements imprévus peuvent te pousser à découvrir ce qui est réel, même si ce n’est pas ce que tu espérais.",
        // La Vérité — Évolution possible (ce qui peut arriver bientôt)
        "cards.loveOracle.laverite.meaning.energy3.var1": "Si tu acceptes de faire face à la vérité, tu pourras prendre des décisions claires et avancer dans tes relations avec assurance.",
        "cards.loveOracle.laverite.meaning.energy3.var2": "La vérité pourrait révéler des surprises, positives ou négatives, mais elle te donnera toujours la liberté de choisir ton chemin.",
        "cards.loveOracle.laverite.meaning.energy3.var3": "Même si la vérité est difficile à entendre, elle pourrait ouvrir la voie à une relation sincère et solide, ou te libérer d’une situation qui ne te convient pas.",
        // Le Cadeau — Énergie dominante (ce que tu ressens)
        "cards.loveOracle.lecadeau.meaning.energy1.var1": "Tu ressens que l’amour ou une relation pourrait t’apporter un cadeau inattendu, une surprise qui fait battre ton cœur.",
        "cards.loveOracle.lecadeau.meaning.energy1.var2": "Ton cœur est ouvert à recevoir quelque chose de précieux, que ce soit de l’attention, de l’affection ou une rencontre importante.",
        "cards.loveOracle.lecadeau.meaning.energy1.var3": "Tu es excité{genderSuffix} à l’idée de découvrir ce que la vie amoureuse peut t’offrir, même si tu ne sais pas encore à quoi t’attendre.",
        // Le Cadeau — Influence extérieure (ce qui agit autour de toi)
        "cards.loveOracle.lecadeau.meaning.energy2.var1": "Des personnes autour de toi pourraient t’offrir des occasions ou des opportunités qui enrichissent ton cœur et ta vie sentimentale.",
        "cards.loveOracle.lecadeau.meaning.energy2.var2": "Un événement inattendu pourrait t’apporter quelque chose de précieux dans ta vie amoureuse, mais il faudra être attentif pour le remarquer.",
        "cards.loveOracle.lecadeau.meaning.energy2.var3": "Des surprises, qu’elles soient positives ou un peu décevantes, peuvent influencer tes choix et tes émotions dans les jours à venir.",
        // Le Cadeau — Évolution possible (ce qui peut arriver bientôt)
        "cards.loveOracle.lecadeau.meaning.energy3.var1": "Si tu acceptes ce que la vie t’apporte avec gratitude, tu pourrais recevoir un cadeau émotionnel qui illumine ton cœur.",
        "cards.loveOracle.lecadeau.meaning.energy3.var2": "Il est possible qu’une personne ou une situation te surprenne agréablement et t’apporte un bonheur inattendu.",
        "cards.loveOracle.lecadeau.meaning.energy3.var3": "Même si tout ne se passe pas exactement comme prévu, ces cadeaux émotionnels pourraient t’aider à avancer et à mieux comprendre tes désirs amoureux.",
        // La Blessure — Énergie dominante (ce que tu ressens)
        "cards.loveOracle.lablessure.meaning.energy1.var1": "Tu ressens une douleur profonde liée à l’amour, comme si une cicatrice émotionnelle venait refaire surface.",
        "cards.loveOracle.lablessure.meaning.energy1.var2": "Ton cœur est fragile et tu as du mal à te laisser aller ou à faire confiance aux autres.",
        "cards.loveOracle.lablessure.meaning.energy1.var3": "Une ancienne peine ou une trahison te fait douter de l’amour et te pousse à te protéger.",  
        // La Blessure — Influence extérieure (ce qui agit autour de toi)
        "cards.loveOracle.lablessure.meaning.energy2.var1": "Des personnes ou des situations extérieures peuvent raviver cette douleur et te rappeler ce qui t’a blessé{genderSuffix}.",
        "cards.loveOracle.lablessure.meaning.energy2.var2": "Ton entourage pourrait te soutenir ou t’encourager à surmonter cette blessure, mais la guérison dépendra de ton engagement envers toi-même.",
        "cards.loveOracle.lablessure.meaning.energy2.var3": "Parfois, cette blessure te pousse à éviter certaines relations ou à te méfier de nouvelles rencontres, ralentissant tes élans amoureux.",  
        // La Blessure — Évolution possible (ce qui peut arriver bientôt)
        "cards.loveOracle.lablessure.meaning.energy3.var1": "Si tu acceptes de travailler sur cette douleur et de t’ouvrir malgré tout, tu pourrais guérir et retrouver une relation sincère et profonde.",
        "cards.loveOracle.lablessure.meaning.energy3.var2": "Il est possible que cette blessure ressurgisse encore, mais chaque épreuve peut t’enseigner quelque chose et te rendre plus fort{genderSuffix}.",
        "cards.loveOracle.lablessure.meaning.energy3.var3": "Une rencontre ou un événement pourrait t’aider à surmonter cette douleur et à ouvrir ton cœur à un amour plus conscient et équilibré.",
        // Le Nouveau Départ — Énergie dominante (ce que tu ressens)
        "cards.loveOracle.lenouveaudepart.meaning.energy1.var1": "Tu sens qu’il est temps de tourner la page et de recommencer une nouvelle histoire amoureuse avec un cœur ouvert.",
        "cards.loveOracle.lenouveaudepart.meaning.energy1.var2": "Ton esprit est prêt à laisser le passé derrière toi et à accueillir de nouvelles expériences et émotions.",
        "cards.loveOracle.lenouveaudepart.meaning.energy1.var3": "Tu ressens un mélange d’excitation et de peur, mais le désir de renouveau est plus fort que tes doutes.",  
        // Le Nouveau Départ — Influence extérieure (ce qui agit autour de toi)
        "cards.loveOracle.lenouveaudepart.meaning.energy2.var1": "Des rencontres ou des opportunités récentes peuvent te pousser à te lancer dans quelque chose de nouveau et prometteur.",
        "cards.loveOracle.lenouveaudepart.meaning.energy2.var2": "Ton entourage peut t’encourager ou t’inspirer à saisir cette chance de recommencer, mais la décision finale dépendra de toi.",
        "cards.loveOracle.lenouveaudepart.meaning.energy2.var3": "Des événements extérieurs pourraient déclencher ce nouveau départ, te donnant l’impulsion nécessaire pour avancer.",  
        // Le Nouveau Départ — Évolution possible (ce qui peut arriver bientôt)
        "cards.loveOracle.lenouveaudepart.meaning.energy3.var1": "Si tu acceptes ce nouveau départ, tu pourrais rencontrer quelqu’un de spécial ou vivre une expérience qui transforme ton cœur.",
        "cards.loveOracle.lenouveaudepart.meaning.energy3.var2": "Ce renouveau pourrait être progressif, mais chaque petit pas te rapproche d’une relation plus sincère et épanouissante.",
        "cards.loveOracle.lenouveaudepart.meaning.energy3.var3": "Même si tout ne se passe pas comme prévu, ce nouveau départ te donnera l’occasion d’apprendre, de grandir et d’ouvrir ton cœur à l’amour.",
        // La Fusion — Énergie dominante (ce que tu ressens)
        "cards.loveOracle.lafusion.meaning.energy1.var1": "Tu ressens une connexion intense et profonde avec quelqu’un, comme si vos cœurs battaient à l’unisson.",
        "cards.loveOracle.lafusion.meaning.energy1.var2": "Ton désir de proximité et de complicité est fort, et tu rêves d’un lien fusionnel et sincère.",
        "cards.loveOracle.lafusion.meaning.energy1.var3": "Tu sens que cette relation a le potentiel de transformer tes émotions et ton regard sur l’amour.",  
        // La Fusion — Influence extérieure (ce qui agit autour de toi)
        "cards.loveOracle.lafusion.meaning.energy2.var1": "Des événements ou des situations favorisent ce rapprochement intense et pourraient renforcer votre lien rapidement.",
        "cards.loveOracle.lafusion.meaning.energy2.var2": "Ton entourage peut soutenir cette union, mais attention aux influences extérieures qui pourraient mettre votre connexion à l’épreuve.",
        "cards.loveOracle.lafusion.meaning.energy2.var3": "Certaines tensions ou jalousies autour de vous peuvent compliquer cette fusion, mais elles révèlent aussi la force de votre attachement.",  
        // La Fusion — Évolution possible (ce qui peut arriver bientôt)
        "cards.loveOracle.lafusion.meaning.energy3.var1": "Si vous vous ouvrez pleinement à cette connexion, la fusion pourrait mener à une relation passionnée et durable.",
        "cards.loveOracle.lafusion.meaning.energy3.var2": "Cette union intense pourrait traverser des épreuves, mais si vous restez sincères et à l’écoute, elle se renforcera.",
        "cards.loveOracle.lafusion.meaning.energy3.var3": "Une rencontre ou un événement clé pourrait sceller ce lien et créer une intimité profonde et transformante pour vos cœurs.",
        // La Tentation — Énergie dominante (ce que tu ressens)
        "cards.loveOracle.latentation.meaning.energy1.var1": "Tu ressens un désir fort et irrésistible pour quelqu’un ou quelque chose qui attire ton cœur et ton corps.",
        "cards.loveOracle.latentation.meaning.energy1.var2": "Ton esprit est partagé entre la raison et l’envie, et cette tentation te pousse à explorer ce que tu désires vraiment.",
        "cards.loveOracle.latentation.meaning.energy1.var3": "Tu te sens attiré{genderSuffix} par ce qui est interdit ou excitant, et il est difficile de résister à cette pulsion.",  
        // La Tentation — Influence extérieure (ce qui agit autour de toi)
        "cards.loveOracle.latentation.meaning.energy2.var1": "Des situations ou des personnes autour de toi peuvent intensifier cette tentation et la rendre presque impossible à ignorer.",
        "cards.loveOracle.latentation.meaning.energy2.var2": "Ton entourage ou des circonstances peuvent te mettre face à des choix difficiles, testant ta capacité à rester fidèle à tes valeurs.",
        "cards.loveOracle.latentation.meaning.energy2.var3": "Il est possible que cette tentation soit une opportunité de découvrir des émotions intenses, mais elle comporte aussi des risques et des complications.",  
        // La Tentation — Évolution possible (ce qui peut arriver bientôt)
        "cards.loveOracle.latentation.meaning.energy3.var1": "Si tu cèdes à cette tentation, tu pourrais vivre des moments passionnés et intenses, mais il faudra être conscient des conséquences.",
        "cards.loveOracle.latentation.meaning.energy3.var2": "Cette situation pourrait t’apprendre beaucoup sur tes désirs et tes limites, te permettant de mieux comprendre ce que tu veux réellement.",
        "cards.loveOracle.latentation.meaning.energy3.var3": "Il est aussi possible que résister à la tentation t’apporte plus de clarté et te protège de complications inutiles dans ta vie amoureuse.",
        // La Protection — Énergie dominante (ce que tu ressens)
        "cards.loveOracle.laprotection.meaning.energy1.var1": "Tu ressens le besoin de te protéger émotionnellement pour ne pas souffrir dans tes relations amoureuses.",
        "cards.loveOracle.laprotection.meaning.energy1.var2": "Ton cœur est sur ses gardes et tu prends le temps de choisir à qui tu ouvres tes sentiments.",
        "cards.loveOracle.laprotection.meaning.energy1.var3": "Parfois, tu bloques certaines émotions pour te sentir en sécurité et éviter les déceptions.",         
        // La Protection — Influence extérieure (ce qui agit autour de toi)
        "cards.loveOracle.laprotection.meaning.energy2.var1": "Des personnes autour de toi ou des expériences passées t’encouragent à rester prudent{genderSuffix} et à protéger ton cœur.",
        "cards.loveOracle.laprotection.meaning.energy2.var2": "Certaines situations peuvent te mettre en alerte et renforcer ton besoin de te préserver des blessures.",
        "cards.loveOracle.laprotection.meaning.energy2.var3": "Ton entourage peut aussi t’aider à identifier ce qui est sûr et ce qui pourrait te faire souffrir, te guidant vers des choix plus protecteurs.",  
        // La Protection — Évolution possible (ce qui peut arriver bientôt)
        "cards.loveOracle.laprotection.meaning.energy3.var1": "Si tu continues à te protéger tout en restant ouvert{genderSuffix}, tu pourras avancer dans tes relations sans te brûler.",
        "cards.loveOracle.laprotection.meaning.energy3.var2": "Il est possible que tu sois mis{genderSuffix} face à une situation qui testera ta capacité à te protéger tout en restant sincère.",
        "cards.loveOracle.laprotection.meaning.energy3.var3": "Une relation ou un événement pourrait t’aider à te sentir en sécurité et à ouvrir ton cœur progressivement, sans risquer de souffrir inutilement.",
        // La Libération — Énergie dominante (ce que tu ressens)
        "cards.loveOracle.laliberation.meaning.energy1.var1": "Tu ressens le besoin de te libérer d’une relation ou d’émotions qui te retiennent et te pèsent.",
        "cards.loveOracle.laliberation.meaning.energy1.var2": "Ton cœur aspire à retrouver sa liberté et à ne plus être limité par des situations douloureuses ou étouffantes.",
        "cards.loveOracle.laliberation.meaning.energy1.var3": "Parfois, tu as envie de couper les liens avec ce qui t’empêche d’avancer et de respirer pleinement.",  
        // La Libération — Influence extérieure (ce qui agit autour de toi)
        "cards.loveOracle.laliberation.meaning.energy2.var1": "Des personnes ou des événements autour de toi peuvent t’aider à lâcher prise et à te sentir plus libre.",
        "cards.loveOracle.laliberation.meaning.energy2.var2": "Certaines situations peuvent te pousser à prendre du recul et à te détacher de ce qui te bloque dans ton cœur.",
        "cards.loveOracle.laliberation.meaning.energy2.var3": "Ton entourage pourrait t’encourager à te libérer de ce qui n’est plus bon pour toi et à avancer vers des relations plus saines.",  
        // La Libération — Évolution possible (ce qui peut arriver bientôt)
        "cards.loveOracle.laliberation.meaning.energy3.var1": "Si tu acceptes de te libérer, tu pourrais vivre un renouveau amoureux, plus léger et plus sincère.",
        "cards.loveOracle.laliberation.meaning.energy3.var2": "La libération peut t’apporter de nouvelles opportunités et rencontres qui correspondent mieux à ton cœur et à tes envies.",
        "cards.loveOracle.laliberation.meaning.energy3.var3": "Même si ce processus peut être difficile au début, il te permettra de retrouver ta force intérieure et d’ouvrir ton cœur à l’amour véritable.",

        // ========== CONSEILS THÉMATIQUES ORACLE DE L'AMOUR - TIRAGE 3 CARTES ==========
        // 1. PATIENCE AMOUREUSE
        "interpretation.loveOracle.advice.patience.var1": "Tu dois comprendre que l'amour arrive quand tu t'y attends le moins. Fais confiance au temps et à l'univers, il sait ce qu'il fait.",
        "interpretation.loveOracle.advice.patience.var2": "Ne force pas les choses, l'amour viendra à toi quand tu seras prêt à le recevoir. Laisse-le se manifester naturellement.",
        "interpretation.loveOracle.advice.patience.var3": "L'univers a ses propres plans, et parfois il vaut mieux attendre que forcer une rencontre. Ce qui t’est destiné ne passera pas à côté de toi.",
        // 2. OUVERTURE DU CŒUR
        "interpretation.loveOracle.advice.openness.var1": "Ton cœur est un trésor, il est temps de le partager avec ceux qui sont prêts à le recevoir. Laisse-toi aller aux belles surprises de l’amour.",
        "interpretation.loveOracle.advice.openness.var2": "Si tu restes fermé, l'amour ne pourra pas entrer. Sois prêt à ouvrir ton cœur, même si cela demande un peu de courage.",
        "interpretation.loveOracle.advice.openness.var3": "Arrête de te protéger à tout prix. L’amour, c’est aussi prendre des risques et laisser de la place à la nouveauté.",
        // 3. CONFIANCE EN SOI
        "interpretation.loveOracle.advice.selfconfidence.var1": "Ne doute jamais de ta valeur, tu mérites le meilleur. Aie confiance en toi et sache que tu es digne d’un amour pur et sincère.",
        "interpretation.loveOracle.advice.selfconfidence.var2": "Avant de donner ton amour, commence par t'aimer toi-même. Lorsque tu te respectes, l'amour viendra plus facilement.",
        "interpretation.loveOracle.advice.selfconfidence.var3": "L'amour que tu cherches commence par l’amour que tu te donnes à toi-même. Sois ton propre fan numéro un.",
        // 4. CLARTÉ ÉMOTIONNELLE
        "interpretation.loveOracle.advice.clarity.var1": "Écoute ton cœur. Parfois, il sait des choses que ton esprit ignore. Si tu es clair avec toi-même, tu verras les choses beaucoup plus nettement.",
        "interpretation.loveOracle.advice.clarity.var2": "Prends le temps de te poser et de vraiment ressentir ce que tu veux dans une relation. La clarté viendra quand tu arrêteras de te précipiter.",
        "interpretation.loveOracle.advice.clarity.var3": "Si tu te sens perdu, il est peut-être temps de t’écouter. Tes émotions te guideront vers ce qui est juste pour toi.",
        // 5. LÂCHER-PRISE
        "interpretation.loveOracle.advice.lettinggo.var1": "Lâcher prise ne veut pas dire abandonner, mais accepter que certaines choses échappent à ton contrôle. Laisse l’univers faire son travail.",
        "interpretation.loveOracle.advice.lettinggo.var2": "Libère-toi du passé, des doutes et des blessures. Rien de nouveau ne pourra entrer dans ta vie tant que tu t’accroches à l’ancien.",
        "interpretation.loveOracle.advice.lettinggo.var3": "Tu peux être en contrôle de ta vie, mais parfois il faut savoir lâcher prise pour laisser la magie de l’amour opérer.",
        // 6. AUTHENTICITÉ
        "interpretation.loveOracle.advice.authenticity.var1": "Sois toi-même sans compromis. Ce n'est qu'en étant authentique que tu pourras attirer l’amour qui te correspond vraiment.",
        "interpretation.loveOracle.advice.authenticity.var2": "L’amour véritable n’a rien à voir avec les masques. Sois honnête, même si cela peut faire peur. L’amour viendra quand tu te montreras tel que tu es.",
        "interpretation.loveOracle.advice.authenticity.var3": "Cesse de vouloir plaire à tout le monde. L’amour qui compte est celui que tu vis avec quelqu’un qui t’accepte comme tu es.",
        // 7. PROTECTION DU CŒUR
        "interpretation.loveOracle.advice.protection.var1": "Protège ton cœur, mais n’érige pas des murs autour. Apprends à poser des limites sans te fermer aux autres.",
        "interpretation.loveOracle.advice.protection.var2": "Ce n’est pas une faiblesse de se protéger. Les bonnes personnes entreront dans ta vie si tu choisis de les laisser faire.",
        "interpretation.loveOracle.advice.protection.var3": "Il est important de garder ton cœur en sécurité, mais n’oublie pas qu’une protection excessive peut t'empêcher de rencontrer l’amour véritable.",
        // 8. ACTION ET INITIATIVE
        "interpretation.loveOracle.advice.action.var1": "Si tu attends que l’amour vienne à toi sans rien faire, tu risques de passer à côté. Ose faire le premier pas, il pourrait tout changer.",
        "interpretation.loveOracle.advice.action.var2": "L'amour n’attend pas, alors prends les devants. Ne laisse pas ta timidité ou tes peurs t'empêcher de vivre une belle histoire.",
        "interpretation.loveOracle.advice.action.var3": "Parfois, il faut savoir se lancer. Si tu as des sentiments pour quelqu’un, n’attends pas que la situation se résolve seule.",
        // FALLBACK (au cas où aucun thème ne fonctionne)
        "interpretation.loveOracle.advice.fallback.var1": "Ne cherche pas trop à comprendre, fais confiance à ton cœur. Il te guide toujours dans la bonne direction.",
        "interpretation.loveOracle.advice.fallback.var2": "Rappelle-toi que tout se déroule comme il se doit. L’univers a toujours un plan pour toi, même si tu ne le vois pas encore.",
        "interpretation.loveOracle.advice.fallback.var3": "Ton intuition est ton meilleur allié, écoute-la bien. Elle te dira toujours ce qui est juste pour toi.",

    // Card Names and Meanings - Love oracle - Tirage en croix
        //rendez vous
        "crossSpread.cards.lerendezvous.pour.variation1": "Une rencontre prometteuse arrive. Reste ouvert{genderSuffix} et accueillant{genderSuffix}.",
        "crossSpread.cards.lerendezvous.pour.variation2": "Tu vas avoir une belle occasion de te rapprocher de quelqu’un. Ose faire le premier pas.",
        "crossSpread.cards.lerendezvous.pour.variation3": "Une connexion inattendue peut changer ton histoire amoureuse. Fais preuve d’audace.",
        "crossSpread.cards.lerendezvous.contre.variation1": "Ne laisse pas la peur ou l’hésitation te faire rater une opportunité importante.",
        "crossSpread.cards.lerendezvous.contre.variation2": "Un rendez-vous manqué pourrait créer des regrets. Reste présent{genderSuffix} et attentif.",
        "crossSpread.cards.lerendezvous.contre.variation3": "Ton manque de confiance pourrait t’empêcher de saisir cette chance.",
        "crossSpread.cards.lerendezvous.synthese.variation1": "L’amour frappe à ta porte. Ouvre ton cœur et accueille ce qui arrive.",
        "crossSpread.cards.lerendezvous.synthese.variation2": "C’est le bon moment pour agir. Une rencontre importante t’attend si tu t’ouvres.",
        "crossSpread.cards.lerendezvous.synthese.variation3": "Cette période est parfaite pour créer de nouvelles connexions. Fais confiance au timing de la vie.",
        //le message
        "crossSpread.cards.lemessage.pour.variation1": "Tu vas recevoir une nouvelle ou une réponse qui te rapproche de la personne que tu veux.",
        "crossSpread.cards.lemessage.pour.variation2": "La communication s’ouvre. Un échange sincère peut améliorer la situation.",
        "crossSpread.cards.lemessage.pour.variation3": "Un message positif arrive et clarifie ce que tu ressentais.",
        "crossSpread.cards.lemessage.contre.variation1": "Tu risques de mal interpréter un silence ou un mot. Reste calme avant de réagir.",
        "crossSpread.cards.lemessage.contre.variation2": "Une communication bloquée peut créer des tensions. N’attends pas sans agir.",
        "crossSpread.cards.lemessage.contre.variation3": "Un message tardif ou confus peut te déstabiliser. Garde les pieds sur terre.",
        "crossSpread.cards.lemessage.synthese.variation1": "Une discussion importante va éclaircir la situation. Tu vas enfin comprendre où tu vas.",
        "crossSpread.cards.lemessage.synthese.variation2": "Le dialogue est la clé. Tu obtiens les réponses dont tu as besoin pour avancer.",
        "crossSpread.cards.lemessage.synthese.variation3": "Un échange met fin aux doutes et ouvre une nouvelle dynamique entre vous.",
        //le désir
        "crossSpread.cards.ledesir.pour.variation1": "Le désir est réciproque. Tu attires fortement cette personne.",
        "crossSpread.cards.ledesir.pour.variation2": "Une forte passion se réveille entre vous. L’alchimie est bien présente.",
        "crossSpread.cards.ledesir.pour.variation3": "Ton charme agit. Quelqu’un pense beaucoup à toi avec intensité.",
        "crossSpread.cards.ledesir.contre.variation1": "Attention à ne pas confondre désir et véritable sentiment.",
        "crossSpread.cards.ledesir.contre.variation2": "Une attirance trop forte peut brouiller ton jugement.",
        "crossSpread.cards.ledesir.contre.variation3": "Le désir peut te pousser vers une situation compliquée. Garde la tête froide.",
        "crossSpread.cards.ledesir.synthese.variation1": "Le désir joue un rôle clé dans ta situation. Tout avance grâce à cette attraction.",
        "crossSpread.cards.ledesir.synthese.variation2": "L’alchimie est puissante, mais tu dois garder l’équilibre entre passion et raison.",
        "crossSpread.cards.ledesir.synthese.variation3": "Cette énergie intense peut ouvrir un nouveau chemin, à condition que tu restes ouvert{genderSuffix} et attentif aux signes.",
        //le cœur ouvert
        "crossSpread.cards.lecoeurouvert.pour.variation1": "Tu es prêt{genderSuffix} à aimer avec sincérité. Cette ouverture attire du positif.",
        "crossSpread.cards.lecoeurouvert.pour.variation2": "Ta vulnérabilité crée un lien authentique avec l’autre personne.",
        "crossSpread.cards.lecoeurouvert.pour.variation3": "En t’ouvrant, tu permets à une belle énergie d’entrer dans ta vie.",
        "crossSpread.cards.lecoeurouvert.contre.variation1": "Tu pourrais te montrer trop disponible. Protège un peu ton énergie.",
        "crossSpread.cards.lecoeurouvert.contre.variation2": "Ta sensibilité peut te rendre fragile face aux comportements de l’autre.",
        "crossSpread.cards.lecoeurouvert.contre.variation3": "Tu risques d’idéaliser une personne ou une situation.",
        "crossSpread.cards.lecoeurouvert.synthese.variation1": "Ton ouverture de cœur est ta force. Elle attire la bonne personne.",
        "crossSpread.cards.lecoeurouvert.synthese.variation2": "Exprime ce que tu ressens. La sincérité débloque la situation.",
        "crossSpread.cards.lecoeurouvert.synthese.variation3": "En restant vrai{genderSuffix}, tu vas obtenir une réponse sincère en retour.",
        //le cœur fermé
        "crossSpread.cards.lecoeurferme.pour.variation1": "Prendre du recul te protège pour le moment. Tu écoutes ton intuition.",
        "crossSpread.cards.lecoeurferme.pour.variation2": "Mettre des limites te permet de ne pas te perdre dans la relation.",
        "crossSpread.cards.lecoeurferme.pour.variation3": "Ton cœur se ferme pour te préserver d’une situation instable.",
        "crossSpread.cards.lecoeurferme.contre.variation1": "Tu te bloques trop. Cela empêche l’autre de te comprendre.",
        "crossSpread.cards.lecoeurferme.contre.variation2": "La peur d’être blessé{genderSuffix} t’empêche d’aimer pleinement.",
        "crossSpread.cards.lecoeurferme.contre.variation3": "Ton manque d’ouverture crée une distance inutile.",
        "crossSpread.cards.lecoeurferme.synthese.variation1": "Tu dois rouvrir ton cœur doucement si tu veux avancer.",
        "crossSpread.cards.lecoeurferme.synthese.variation2": "Un équilibre est nécessaire : protège-toi, mais ne te ferme pas à tout.",
        "crossSpread.cards.lecoeurferme.synthese.variation3": "Le déblocage vient de toi : autorise-toi à ressentir à nouveau.",
        //le choix
        "crossSpread.cards.lechoix.pour.variation1": "Tu es enfin prêt{genderSuffix} à prendre une décision claire.",
        "crossSpread.cards.lechoix.pour.variation2": "Deux chemins s’offrent à toi, mais l’un brille plus fort si tu écoutes ton cœur.",
        "crossSpread.cards.lechoix.pour.variation3": "Tu reprends le contrôle de ta vie affective en faisant un choix qui te correspond{genderSuffix}.",
        "crossSpread.cards.lechoix.contre.variation1": "Le doute te bloque et épuise ton esprit{genderSuffix}, t’empêchant de voir clairement la meilleure direction à prendre.",
        "crossSpread.cards.lechoix.contre.variation2": "Tu peux te laisser influencer par les peurs plutôt que par tes vrais désirs.",
        "crossSpread.cards.lechoix.contre.variation3": "Hésiter trop longtemps pourrait te faire perdre une opportunité.",
        "crossSpread.cards.lechoix.synthese.variation1": "Le bon choix est celui qui te rend plus léger{genderSuffix}.",
        "crossSpread.cards.lechoix.synthese.variation2": "Les choses commencent à avancer réellement dès que tu choisis clairement ta voie{genderSuffix} sans hésiter.",
        "crossSpread.cards.lechoix.synthese.variation3": "Ton cœur connaît déjà la réponse{genderSuffix} ; prends le temps de l’écouter vraiment et laisse-le guider tes actions.",
        //le retour
        "crossSpread.cards.leretour.pour.variation1": "Quelqu’un de ton passé revient avec des motivations claires{genderSuffix}, prêt à clarifier ce qui n’était pas résolu.",
        "crossSpread.cards.leretour.pour.variation2": "Un souvenir ou une personne réapparaît pour t’aider à comprendre quelque chose.",
        "crossSpread.cards.leretour.pour.variation3": "Une personne du passé refait surface et pourrait bien t’offrir une nouvelle opportunité{genderSuffix}.",
        "crossSpread.cards.leretour.contre.variation1": "Regarder en arrière pourrait t’empêcher d’avancer{genderSuffix}.",
        "crossSpread.cards.leretour.contre.variation2": "Une personne du passé peut raviver des blessures non guéries.",
        "crossSpread.cards.leretour.contre.variation3": "Tu risques d’idéaliser ce retour et de perdre ta stabilité actuelle.",
        "crossSpread.cards.leretour.synthese.variation1": "Le passé revient pour une raison précise : comprendre, guérir ou fermer un cycle.",
        "crossSpread.cards.leretour.synthese.variation2": "Ce retour te donne l’opportunité de clarifier tes envies et de choisir ce qui est vraiment important pour toi {genderSuffix}.",
        "crossSpread.cards.leretour.synthese.variation3": "Une page du passé se rouvre pour te permettre de comprendre, accepter et décider de tourner ou réécrire ton histoire {genderSuffix}.",
        //la distance
        "crossSpread.cards.ladistance.pour.variation1": "La distance t’aide à voir plus clair dans tes émotions.",
        "crossSpread.cards.ladistance.pour.variation2": "Un moment d’éloignement permet à chacun de respirer et réfléchir.",
        "crossSpread.cards.ladistance.pour.variation3": "Prendre du recul te protège et t’aide à rester centré{genderSuffix}.",
        "crossSpread.cards.ladistance.contre.variation1": "Un froid s’installe et peut fragiliser la relation.",
        "crossSpread.cards.ladistance.contre.variation2": "L’éloignement crée des doutes et nourrit les peurs.",
        "crossSpread.cards.ladistance.contre.variation3": "Le manque de communication peut aggraver la distance.",
        "crossSpread.cards.ladistance.synthese.variation1": "Cette distance n’est pas définitive : elle sert à rééquilibrer la situation.",
        "crossSpread.cards.ladistance.synthese.variation2": "Une reconnexion est possible dès que chacun aura retrouvé son calme.",
        "crossSpread.cards.ladistance.synthese.variation3": "Tu dois comprendre ce que cette distance veut t’apprendre.",
        //l'union
        "crossSpread.cards.lunion.pour.variation1": "Une relation solide peut se construire. Tu es prêt{genderSuffix} à t’engager.",
        "crossSpread.cards.lunion.pour.variation2": "L’union avec cette personne apporte stabilité et harmonie.",
        "crossSpread.cards.lunion.pour.variation3": "Vous avancez main dans la main vers quelque chose de sérieux.",
        "crossSpread.cards.lunion.contre.variation1": "Tu pourrais t’engager trop vite sans voir certains signaux.",
        "crossSpread.cards.lunion.contre.variation2": "L’autre n’est peut-être pas encore prêt à la même profondeur.",
        "crossSpread.cards.lunion.contre.variation3": "Une situation extérieure peut compliquer l’union pour l’instant.",
        "crossSpread.cards.lunion.synthese.variation1": "Cette relation peut évoluer vers quelque chose de stable si vous avancez ensemble.",
        "crossSpread.cards.lunion.synthese.variation2": "L’union est possible, mais elle demande de la patience et de la compréhension.",
        "crossSpread.cards.lunion.synthese.variation3": "Ton avenir amoureux se construit sur la coopération et l’écoute.",
        //le masque
        "crossSpread.cards.lemasque.pour.variation1": "Tu protèges tes émotions en gardant une part de mystère.",
        "crossSpread.cards.lemasque.pour.variation2": "Rester discret{genderSuffix} te permet de mieux observer la situation.",
        "crossSpread.cards.lemasque.pour.variation3": "Le masque t’aide à éviter de te dévoiler trop vite.",
        "crossSpread.cards.lemasque.contre.variation1": "Quelqu’un ne montre pas ses vraies intentions.",
        "crossSpread.cards.lemasque.contre.variation2": "Le manque de transparence peut créer des malentendus.",
        "crossSpread.cards.lemasque.contre.variation3": "Se cacher empêche la relation d’avancer sincèrement.",
        "crossSpread.cards.lemasque.synthese.variation1": "Pour avancer, il faudra faire tomber les masques des deux côtés.",
        "crossSpread.cards.lemasque.synthese.variation2": "La vérité finira par apparaître et clarifier la situation.",
        "crossSpread.cards.lemasque.synthese.variation3": "Une ouverture sincère peut changer complètement la dynamique.",
        //la passion
        "crossSpread.cards.lapassion.pour.variation1": "Une énergie intense t'anime et rapproche les cœurs.",
        "crossSpread.cards.lapassion.pour.variation2": "La passion rend la relation vibrante et vivante.",
        "crossSpread.cards.lapassion.pour.variation3": "Une forte impulsion émotionnelle te pousse vers l’autre.",
        "crossSpread.cards.lapassion.contre.variation1": "La passion peut devenir instable si elle n’est pas maîtrisée.",
        "crossSpread.cards.lapassion.contre.variation2": "Une impulsion trop rapide peut créer des erreurs.",
        "crossSpread.cards.lapassion.contre.variation3": "Le feu brûle fort mais peut s'éteindre aussi vite.",
        "crossSpread.cards.lapassion.synthese.variation1": "La passion est une force, mais elle doit s’équilibrer avec la raison.",
        "crossSpread.cards.lapassion.synthese.variation2": "Cette intensité crée une transformation importante dans ta vie affective.",
        "crossSpread.cards.lapassion.synthese.variation3": "Garde la passion, mais avance avec conscience.",
        //la chance
        "crossSpread.cards.lachance.pour.variation1": "Une belle opportunité sentimentale se présente. Saisis-la.",
        "crossSpread.cards.lachance.pour.variation2": "Le destin est de ton côté. Quelque chose de positif arrive.",
        "crossSpread.cards.lachance.pour.variation3": "Tu attires la bonne énergie. Une chance t’est donnée.",
        "crossSpread.cards.lachance.contre.variation1": "La chance passe vite : ne reste pas passif.",
        "crossSpread.cards.lachance.contre.variation2": "Tu pourrais douter et laisser une occasion filer.",
        "crossSpread.cards.lachance.contre.variation3": "L’attente excessive peut te faire manquer l’opportunité.",
        "crossSpread.cards.lachance.synthese.variation1": "Profite du courant positif. Il t’ouvre une voie nouvelle.",
        "crossSpread.cards.lachance.synthese.variation2": "Une synchronicité importante va t’aider à avancer.",
        "crossSpread.cards.lachance.synthese.variation3": "C’est un moment clé : l’univers te soutient dans ton chemin affectif.",
        //le destin
        "crossSpread.cards.ledestin.pour.variation1": "Les événements s’alignent naturellement pour toi. Fais confiance au déroulement.",
        "crossSpread.cards.ledestin.pour.variation2": "Ce qui arrive était écrit. Tu es guidé{genderSuffix} vers la bonne personne.",
        "crossSpread.cards.ledestin.pour.variation3": "Une rencontre ou une situation est le fruit d’une synchronicité importante.",
        "crossSpread.cards.ledestin.contre.variation1": "Ne laisse pas le destin décider à ta place. Tu dois aussi agir.",
        "crossSpread.cards.ledestin.contre.variation2": "Attendre trop longtemps pourrait bloquer ton évolution.",
        "crossSpread.cards.ledestin.contre.variation3": "Tu risques de t’en remettre au hasard plutôt qu’à ton cœur.",
        "crossSpread.cards.ledestin.synthese.variation1": "Ce que tu vis a un sens profond. Laisse les choses se faire naturellement.",
        "crossSpread.cards.ledestin.synthese.variation2": "Une étape importante te rapproche de ton chemin amoureux.",
        "crossSpread.cards.ledestin.synthese.variation3": "Le destin ouvre une nouvelle voie, mais c’est à toi d’y marcher.",
        //le silence
        "crossSpread.cards.lesilence.pour.variation1": "Le silence t’aide à te recentrer et à écouter tes vraies émotions.",
        "crossSpread.cards.lesilence.pour.variation2": "Cette pause te permet de comprendre ce que tu veux vraiment.",
        "crossSpread.cards.lesilence.pour.variation3": "Prendre du temps pour toi te ramène à l’essentiel.",
        "crossSpread.cards.lesilence.contre.variation1": "L’absence de nouvelles peut créer confusion et stress.",
        "crossSpread.cards.lesilence.contre.variation2": "Le retrait de l’autre peut t’amener à imaginer le pire.",
        "crossSpread.cards.lesilence.contre.variation3": "Le silence bloque la communication et retarde les avancées.",
        "crossSpread.cards.lesilence.synthese.variation1": "Une reprise de communication est possible après ce silence.",
        "crossSpread.cards.lesilence.synthese.variation2": "Le silence ouvre la porte à une réflexion plus profonde.",
        "crossSpread.cards.lesilence.synthese.variation3": "Ce temps calme prépare une clarification importante.",
        //la vérité
        "crossSpread.cards.laverite.pour.variation1": "Une vérité éclaire enfin ce que tu ressentais.",
        "crossSpread.cards.laverite.pour.variation2": "La transparence devient un atout. Tout s’éclaircit.",
        "crossSpread.cards.laverite.pour.variation3": "Une conversation honnête ouvre une nouvelle dynamique.",
        "crossSpread.cards.laverite.contre.variation1": "Une vérité peut te surprendre ou te bousculer.",
        "crossSpread.cards.laverite.contre.variation2": "L’autre peut hésiter à dire ce qu’il ressent vraiment.",
        "crossSpread.cards.laverite.contre.variation3": "La peur de la vérité bloque une situation importante.",
        "crossSpread.cards.laverite.synthese.variation1": "La vérité est libératrice : elle remet tout en place.",
        "crossSpread.cards.laverite.synthese.variation2": "Une révélation t’aide à faire un choix clair.",
        "crossSpread.cards.laverite.synthese.variation3": "La sincérité transforme la relation et ouvre un nouveau chapitre.",
        //le cadeau
        "crossSpread.cards.lecadeau.pour.variation1": "Une belle attention te montre l’intérêt de l’autre.",
        "crossSpread.cards.lecadeau.pour.variation2": "Tu vas recevoir une surprise qui te réchauffe le cœur.",
        "crossSpread.cards.lecadeau.pour.variation3": "Un geste sincère ouvre la porte à un rapprochement.",
        "crossSpread.cards.lecadeau.contre.variation1": "Ne te laisse pas influencer uniquement par un geste matériel.",
        "crossSpread.cards.lecadeau.contre.variation2": "Une attention peut cacher un besoin de se faire pardonner.",
        "crossSpread.cards.lecadeau.contre.variation3": "Tu pourrais donner plus que ce que tu reçois en retour.",
        "crossSpread.cards.lecadeau.synthese.variation1": "Un geste symbolique change la dynamique entre vous.",
        "crossSpread.cards.lecadeau.synthese.variation2": "L’univers t’offre une opportunité de douceur et d’ouverture.",
        "crossSpread.cards.lecadeau.synthese.variation3": "Un échange sincère renforce le lien et crée un nouvel élan.",
        //la blessure
        "crossSpread.cards.lablessure.pour.variation1": "Tu prends conscience de ta blessure et tu commences à guérir.",
        "crossSpread.cards.lablessure.pour.variation2": "Reconnaître ta douleur t’aide à avancer plus solidement.",
        "crossSpread.cards.lablessure.pour.variation3": "Cette prise de conscience t’ouvre à un vrai renouveau émotionnel.",
        "crossSpread.cards.lablessure.contre.variation1": "Une blessure non guérie influence encore tes choix.",
        "crossSpread.cards.lablessure.contre.variation2": "La peur d’être blessé{genderSuffix} t’empêche d’avancer.",
        "crossSpread.cards.lablessure.contre.variation3": "Tu restes attaché{genderSuffix} à une douleur passée qui t’épuise.",
        "crossSpread.cards.lablessure.synthese.variation1": "La guérison est en cours. Tu t’allèges enfin.",
        "crossSpread.cards.lablessure.synthese.variation2": "Comprendre ta blessure t’aide à ne plus répéter les mêmes schémas.",
        "crossSpread.cards.lablessure.synthese.variation3": "Cette épreuve ouvre la voie à un changement profond et positif.",
        //le nouveau départ
        "crossSpread.cards.lenouveaudepart.pour.variation1": "Tu entres dans un cycle nouveau et plus léger.",
        "crossSpread.cards.lenouveaudepart.pour.variation2": "Un changement positif t’ouvre une voie plus alignée avec ton cœur.",
        "crossSpread.cards.lenouveaudepart.pour.variation3": "Tu laisses le passé derrière toi et avances vers du neuf.",
        "crossSpread.cards.lenouveaudepart.contre.variation1": "Tu peux avoir peur de quitter ce que tu connais.",
        "crossSpread.cards.lenouveaudepart.contre.variation2": "Le changement te semble difficile à accepter.",
        "crossSpread.cards.lenouveaudepart.contre.variation3": "Tu risques de rester accroché{genderSuffix} à l’ancien cycle.",
        "crossSpread.cards.lenouveaudepart.synthese.variation1": "Une transformation majeure s’ouvre à toi.",
        "crossSpread.cards.lenouveaudepart.synthese.variation2": "En lâchant l’ancien, tu crées l’espace pour une nouvelle histoire.",
        "crossSpread.cards.lenouveaudepart.synthese.variation3": "Ce nouveau départ t’amène exactement où tu dois être.",
        //la fusion
        "crossSpread.cards.lafusion.pour.variation1": "Une connexion profonde se crée entre vous. Les émotions sont partagées.",
        "crossSpread.cards.lafusion.pour.variation2": "Tu te sens aligné{genderSuffix} avec l’autre, comme si tout coulait naturellement.",
        "crossSpread.cards.lafusion.pour.variation3": "Une union émotionnelle ou énergétique se renforce entre vous.",
        "crossSpread.cards.lafusion.contre.variation1": "La fusion peut être trop intense et te faire perdre ton équilibre.",
        "crossSpread.cards.lafusion.contre.variation2": "Attention à ne pas te dissoudre dans l’autre.",
        "crossSpread.cards.lafusion.contre.variation3": "Une dépendance émotionnelle peut se créer si tu ne restes pas ancré{genderSuffix}.",
        "crossSpread.cards.lafusion.synthese.variation1": "La connexion est réelle et puissante, mais elle demande maturité et équilibre.",
        "crossSpread.cards.lafusion.synthese.variation2": "Vous êtes liés à un niveau profond, ce qui ouvre une évolution importante.",
        "crossSpread.cards.lafusion.synthese.variation3": "Cette fusion peut devenir une force si chacun garde son identité.",
        //la tentation
        "crossSpread.cards.latentation.pour.variation1": "Une nouvelle attirance te redonne de l’envie et de l’énergie.",
        "crossSpread.cards.latentation.pour.variation2": "Quelqu’un éveille ta curiosité et ton désir.",
        "crossSpread.cards.latentation.pour.variation3": "Une situation excitante te sort de la routine.",
        "crossSpread.cards.latentation.contre.variation1": "Une tentation pourrait te détourner de ce qui est vraiment bon pour toi.",
        "crossSpread.cards.latentation.contre.variation2": "Tu risques de te laisser entraîner dans quelque chose d’instable.",
        "crossSpread.cards.latentation.contre.variation3": "Une influence extérieure perturbe ton jugement.",
        "crossSpread.cards.latentation.synthese.variation1": "Cette tentation t’enseigne quelque chose sur tes vrais désirs.",
        "crossSpread.cards.latentation.synthese.variation2": "Avant d’agir, assure-toi que c’est aligné avec ton cœur.",
        "crossSpread.cards.latentation.synthese.variation3": "La tentation peut être un test pour clarifier ce que tu veux vraiment.",
        //la protection
        "crossSpread.cards.laprotection.pour.variation1": "Ton intuition te protège et te guide vers les bonnes décisions.",
        "crossSpread.cards.laprotection.pour.variation2": "Tu es entouré{genderSuffix} d’une énergie bienveillante.",
        "crossSpread.cards.laprotection.pour.variation3": "La prudence t’aide à éviter une déception.",
        "crossSpread.cards.laprotection.contre.variation1": "Être trop méfiant{genderSuffix} peut bloquer une belle opportunité.",
        "crossSpread.cards.laprotection.contre.variation2": "Ta peur te fait voir des dangers qui n’existent pas.",
        "crossSpread.cards.laprotection.contre.variation3": "Une protection excessive peut devenir une barrière pour l’amour.",
        "crossSpread.cards.laprotection.synthese.variation1": "Ton intuition a raison : écoute-la vraiment.",
        "crossSpread.cards.laprotection.synthese.variation2": "La protection divine t’aide à avancer en sécurité.",
        "crossSpread.cards.laprotection.synthese.variation3": "Un équilibre entre prudence et ouverture t’amène vers la bonne direction.",
        //la libération
        "crossSpread.cards.laliberation.pour.variation1": "Tu te libères enfin de quelque chose qui te pesait.",
        "crossSpread.cards.laliberation.pour.variation2": "Un cycle se termine et tu respires à nouveau.",
        "crossSpread.cards.laliberation.pour.variation3": "Tu lâches prise et retrouves ton pouvoir intérieur.",
        "crossSpread.cards.laliberation.contre.variation1": "Tu peux résister au changement par peur de l’inconnu.",
        "crossSpread.cards.laliberation.contre.variation2": "Tu t’accroches encore à quelque chose qui doit partir.",
        "crossSpread.cards.laliberation.contre.variation3": "Le non-lâcher-prise t’empêche d’avancer vers le meilleur.",
        "crossSpread.cards.laliberation.synthese.variation1": "Une grande libération émotionnelle ouvre une nouvelle voie.",
        "crossSpread.cards.laliberation.synthese.variation2": "En laissant partir l’ancien, tu invites le renouveau.",
        "crossSpread.cards.laliberation.synthese.variation3": "Ce détachement te rapproche de ton vrai chemin amoureux.",
      
          // Oracle Lunaire
          "oracle.lunar.title": "Oracle Lunaire",
          "oracle.lunar.description": "Les phases de la Lune révèlent votre chemin intérieur",
          "lunar.phaseSelection.title": "Oracle Lunaire",
          "lunar.phaseSelection.subtitle": "Choisissez la phase lunaire qui résonne avec votre état d'esprit actuel",
          "lunar.phases.newMoon.name": "Nouvelle Lune",
          "lunar.phases.newMoon.description": "Nouveaux départs et intentions",
          "lunar.phases.firstQuarter.name": "Premier Quartier",
          "lunar.phases.firstQuarter.description": "Action et décisions",
          "lunar.phases.fullMoon.name": "Pleine Lune",
          "lunar.phases.fullMoon.description": "Culmination et révélation",
          "lunar.phases.lastQuarter.name": "Dernier Quartier",
          "lunar.phases.lastQuarter.description": "Libération et introspection",
          "lunar.cardGame.instruction": "Choisissez la carte qui vous attire",
          "lunar.interpretation.mindset": "État d'esprit",
          "lunar.interpretation.guidance": "Guidance",
        "loading.lunar.message1": "Connexion aux énergies lunaires...",
          "loading.lunar.message2": "Interprétation des cycles cosmiques...",
          "loading.lunar.message3": "Révélation de votre guidance...",
          "loading.lunar.message4": "Préparation de votre lecture...",
          "loading.lunar.subtitle": "Les astres alignent votre destinée...",
        "lunar.cardGame.hint": "Écoutez votre intuition...",
        "lunar.cardGame.singleCard": "Une seule carte révélera le message de la lune", 
        "lunar.cardGame.oneChoice": "1 carte à choisir",
        "lunar.cardGame.oneCard": "1 carte",
        "lunar.loading.connecting": "Connexion avec les énergies lunaires...",
        "lunar.phaseSelection.cta": "Quelle énergie résonne aujourd'hui",
        "lunar.phases.newMoon.keyword": "Début",
        "lunar.phases.firstQuarter.keyword": "Élan",
        "lunar.phases.fullMoon.keyword": "Clarté",
        "lunar.phases.lastQuarter.keyword": "Lâcher",
        "lunar.cardGame.oracle.newMoon.1": "Intentions naissantes...",
        "lunar.cardGame.oracle.newMoon.2": "Le voile se lève...",
        "lunar.cardGame.oracle.newMoon.3": "L'obscurité révèle...",
        "lunar.cardGame.oracle.firstQuarter.1": "L'élan se forme...",
        "lunar.cardGame.oracle.firstQuarter.2": "L'action appelle...",
        "lunar.cardGame.oracle.firstQuarter.3": "Choisissez votre chemin...",
        "lunar.cardGame.oracle.fullMoon.1": "La lumière illumine...",
        "lunar.cardGame.oracle.fullMoon.2": "La vérité se montre...",
        "lunar.cardGame.oracle.fullMoon.3": "Le mystère s'ouvre...",
        "lunar.cardGame.oracle.lastQuarter.1": "Le lâcher-prise guide...",
        "lunar.cardGame.oracle.lastQuarter.2": "La sagesse parle...",
        "lunar.cardGame.oracle.lastQuarter.3": "L'âme se libère...",
        
        //Cartes Oracles lunaire
        // Nouvelle Lune
        "cards.lunar.intention.name": "Intention",
        "cards.lunar.intention.mindset.var1": "{name}, tu ressens un besoin profond de commencer quelque chose de nouveau dans ta vie",
        "cards.lunar.intention.mindset.var2": "En ce moment, {name}, ton cœur est ouvert et prêt à accueillir de nouvelles idées ou envies",
        "cards.lunar.intention.mindset.var3": "Tu entres dans une période où tu peux repartir de zéro et choisir une nouvelle direction",
        "cards.lunar.intention.guidance.var1": "Prends le temps de réfléchir à ce que tu veux vraiment pour toi.",
        "cards.lunar.intention.guidance.var2": "Formule une intention claire, simple et honnête.",
        "cards.lunar.intention.guidance.var3": "Imagine doucement ta vie évoluer dans le sens que tu souhaites.",

        "cards.lunar.intuition.name": "Intuition",
        "cards.lunar.intuition.mindset.var1": "{name}, tu ressens des choses sans toujours pouvoir les expliquer",
        "cards.lunar.intuition.mindset.var2": "Une petite voix intérieure essaie de te guider en ce moment",
        "cards.lunar.intuition.mindset.var3": "Au fond de toi, tu sais déjà ce qui est bon pour toi",
        "cards.lunar.intuition.guidance.var1": "Accorde-toi un moment de calme pour t’écouter.",
        "cards.lunar.intuition.guidance.var2": "Fais confiance à ton ressenti, même s’il est discret.",
        "cards.lunar.intuition.guidance.var3": "Ton intuition est là pour te protéger et t’aider.",

        "cards.lunar.renouveau.name": "Renouveau",
        "cards.lunar.renouveau.mindset.var1": "Un nouveau cycle commence pour toi, {name}, et il apporte un souffle nouveau",
        "cards.lunar.renouveau.mindset.var2": "Certaines choses du passé perdent peu à peu leur importance",
        "cards.lunar.renouveau.mindset.var3": "Tu es prêt(e) à avancer différemment et à changer ce qui ne te convient plus",
        "cards.lunar.renouveau.guidance.var1": "Laisse partir ce qui ne t’apporte plus rien de positif.",
        "cards.lunar.renouveau.guidance.var2": "Autorise-toi à changer sans te sentir coupable.",
        "cards.lunar.renouveau.guidance.var3": "Chaque nouveau départ commence par un petit pas.",

        "cards.lunar.eveil.name": "Éveil",
        "cards.lunar.eveil.mindset.var1": "{name}, tu commences à voir les choses avec plus de conscience",
        "cards.lunar.eveil.mindset.var2": "Un nouveau sentiment ou une nouvelle idée apparaît en toi tranquillement",
        "cards.lunar.eveil.mindset.var3": "Tu prends conscience de ce qui est important pour toi",
        "cards.lunar.eveil.guidance.var1": "Accueille ces prises de conscience avec calme.",
        "cards.lunar.eveil.guidance.var2": "N’essaie pas de tout comprendre tout de suite.",
        "cards.lunar.eveil.guidance.var3": "L’éveil se fait pas à pas, naturellement.",

        "cards.lunar.potentiel.name": "Potentiel",
        "cards.lunar.potentiel.mindset.var1": "{name}, beaucoup de possibilités existent pour toi, même si tu ne les vois pas encore",
        "cards.lunar.potentiel.mindset.var2": "Ton avenir commence à se construire à partir de ce que tu fais maintenant",
        "cards.lunar.potentiel.mindset.var3": "Tu portes en toi des ressources encore inexploitées",
        "cards.lunar.potentiel.guidance.var1": "Fais confiance à tes capacités, même si tu doutes.",
        "cards.lunar.potentiel.guidance.var2": "Laisse le temps aux choses de se développer.",
        "cards.lunar.potentiel.guidance.var3": "Chaque petite action nourrit ton avenir.",

        "cards.lunar.silence.name": "Silence",
        "cards.lunar.silence.mindset.var1": "{name}, ton esprit a besoin de calme et de repos",
        "cards.lunar.silence.mindset.var2": "Le silence t’aide à mieux comprendre ce que tu ressens",
        "cards.lunar.silence.mindset.var3": "Tu n’as pas besoin de réponses immédiates pour avancer",
        "cards.lunar.silence.guidance.var1": "Accorde-toi des moments sans bruit ni distraction.",
        "cards.lunar.silence.guidance.var2": "Le calme permet aux idées de se poser.",
        "cards.lunar.silence.guidance.var3": "Les réponses viennent souvent quand on cesse de les chercher.",
        //Premier Quartier
        "cards.lunar.motivation.name": "Motivation",
        "cards.lunar.motivation.mindset.var1": "{name}, tu sens une énergie nouvelle qui te pousse à avancer et à agir chaque jour",
        "cards.lunar.motivation.mindset.var2": "Ton élan intérieur se réveille et t’incite à aller vers ce qui te tient à cœur",
        "cards.lunar.motivation.mindset.var3": "Tu ressens une force pour faire avancer les choses, même petit à petit",
        "cards.lunar.motivation.guidance.var1": "Canalise cette énergie vers un objectif clair et simple.",
        "cards.lunar.motivation.guidance.var2": "Avance pas à pas, sans te juger ni te presser.",
        "cards.lunar.motivation.guidance.var3": "Chaque petit pas que tu fais compte et te rapproche de ton but.",

        "cards.lunar.courage.name": "Courage",
        "cards.lunar.courage.mindset.var1": "{name}, tu as en toi la force d’affronter ce qui se présente, même si c’est difficile",
        "cards.lunar.courage.mindset.var2": "Ton courage grandit à chaque petit défi que tu relèves",
        "cards.lunar.courage.mindset.var3": "Tu es plus fort(e) et capable que tu ne le crois vraiment",
        "cards.lunar.courage.guidance.var1": "Agis malgré les doutes et les peurs qui apparaissent.",
        "cards.lunar.courage.guidance.var2": "Vois la peur comme un signal pour avancer, pas comme un obstacle.",
        "cards.lunar.courage.guidance.var3": "Fais confiance à ta force intérieure, elle t’accompagne toujours.",

        "cards.lunar.epanouissement.name": "Épanouissement",
        "cards.lunar.epanouissement.mindset.var1": "Tu avances vers plus d’harmonie dans ta vie et dans tes choix, {name}",
        "cards.lunar.epanouissement.mindset.var2": "Tu te rapproches de ce qui te fait vraiment vibrer et te rend heureux(se)",
        "cards.lunar.epanouissement.mindset.var3": "Ton potentiel s’exprime naturellement quand tu écoutes ton cœur",
        "cards.lunar.epanouissement.guidance.var1": "Prends soin de nourrir ce qui te fait du bien chaque jour.",
        "cards.lunar.epanouissement.guidance.var2": "Accorde-toi le droit de grandir à ton rythme, sans te comparer.",
        "cards.lunar.epanouissement.guidance.var3": "L’épanouissement vient quand tu t’alignes avec ce que tu ressens vraiment.",

        "cards.lunar.determination.name": "Détermination",
        "cards.lunar.determination.mindset.var1": "Tu sais ce que tu veux et tu te diriges vers tes objectifs, {name}",
        "cards.lunar.determination.mindset.var2": "Ta volonté s’affirme même face aux obstacles et aux difficultés",
        "cards.lunar.determination.mindset.var3": "Tu es prêt(e) à t’engager pleinement pour ce qui compte vraiment",
        "cards.lunar.determination.guidance.var1": "Reste fidèle à ta direction et à tes choix.",
        "cards.lunar.determination.guidance.var2": "Ne laisse pas les doutes ou les obstacles te détourner de ton chemin.",
        "cards.lunar.determination.guidance.var3": "Ta constance et ta persévérance feront la différence sur le long terme.",

        "cards.lunar.initiative.name": "Initiative",
        "cards.lunar.initiative.mindset.var1": "Une impulsion te pousse à passer à l’action, {name}, écoute ce mouvement",
        "cards.lunar.initiative.mindset.var2": "Le moment est venu de faire le premier pas vers ce que tu souhaites",
        "cards.lunar.initiative.mindset.var3": "Tu ressens l’élan du commencement et la force d’oser",
        "cards.lunar.initiative.guidance.var1": "Ose agir, même si le chemin te semble inconnu.",
        "cards.lunar.initiative.guidance.var2": "Ne remets pas à plus tard ce que ton cœur t’invite à faire maintenant.",
        "cards.lunar.initiative.guidance.var3": "Prendre l’initiative ouvre toujours de nouvelles possibilités.",

        "cards.lunar.strategie.name": "Stratégie",
        "cards.lunar.strategie.mindset.var1": "Tu réfléchis avec clarté et lucidité à la suite de ton parcours, {name}",
        "cards.lunar.strategie.mindset.var2": "Chaque choix mérite d’être pensé et posé avec soin",
        "cards.lunar.strategie.mindset.var3": "Tu avances avec discernement, en équilibrant cœur et raison",
        "cards.lunar.strategie.guidance.var1": "Planifie tes actions de manière souple et ouverte.",
        "cards.lunar.strategie.guidance.var2": "Allie réflexion et intuition pour faire les meilleurs choix.",
        "cards.lunar.strategie.guidance.var3": "La clarté et la sérénité viennent d’une vision posée et réfléchie.",
        //Pleine Lune
        "cards.lunar.clarte.name": "Clarté",
        "cards.lunar.clarte.mindset.var1": "Les choses deviennent plus claires pour toi, {name}, et tu commences à comprendre ce qui était confus",
        "cards.lunar.clarte.mindset.var2": "Un voile se lève doucement sur ta situation et tout paraît plus net",
        "cards.lunar.clarte.mindset.var3": "Tu vois enfin la vérité et ce qui compte vraiment dans ce cycle",
        "cards.lunar.clarte.guidance.var1": "Utilise cette clarté pour prendre des décisions justes et simples.",
        "cards.lunar.clarte.guidance.var2": "Fais confiance à ce que tu observes et ressens maintenant.",
        "cards.lunar.clarte.guidance.var3": "La vérité t’apporte une sensation de calme et d’apaisement intérieur.",

        "cards.lunar.serenite.name": "Sérénité",
        "cards.lunar.serenite.mindset.var1": "Une profonde paix intérieure t’enveloppe et t’aide à rester centré(e), {name}",
        "cards.lunar.serenite.mindset.var2": "Tu te sens en harmonie avec toi-même et avec le monde autour de toi",
        "cards.lunar.serenite.mindset.var3": "Tout paraît plus simple et à sa juste place, même les situations compliquées",
        "cards.lunar.serenite.guidance.var1": "Savoure ce moment de calme et laisse-toi porter.",
        "cards.lunar.serenite.guidance.var2": "Respire profondément et relâche toutes les tensions.",
        "cards.lunar.serenite.guidance.var3": "La sérénité est ton ancrage pour avancer avec clarté.",

        "cards.lunar.bilan.name": "Bilan",
        "cards.lunar.bilan.mindset.var1": "{name}, il est temps de regarder en arrière et de reconnaître le chemin que tu as parcouru",
        "cards.lunar.bilan.mindset.var2": "Tu prends conscience de toutes tes évolutions et de ce que tu as appris",
        "cards.lunar.bilan.mindset.var3": "Chaque expérience de ce cycle t’a apporté des enseignements précieux",
        "cards.lunar.bilan.guidance.var1": "Célèbre tes progrès, même les plus petits.",
        "cards.lunar.bilan.guidance.var2": "Tire des leçons de ce que tu as vécu pour avancer mieux.",
        "cards.lunar.bilan.guidance.var3": "Ce bilan t’aide à avancer avec confiance et sagesse.",

        "cards.lunar.accomplissement.name": "Accomplissement",
        "cards.lunar.accomplissement.mindset.var1": "Tu récoltes enfin les fruits de tes efforts, {name}, et tu en prends conscience",
        "cards.lunar.accomplissement.mindset.var2": "Un aboutissement se manifeste et tu comprends tout ce que tu as construit",
        "cards.lunar.accomplissement.mindset.var3": "Tu es fier(e) de toi et de tout ce que tu as accompli",
        "cards.lunar.accomplissement.guidance.var1": "Reconnais chaque petite réussite et savoure-la pleinement.",
        "cards.lunar.accomplissement.guidance.var2": "Accueille cette réussite avec simplicité et humilité.",
        "cards.lunar.accomplissement.guidance.var3": "Prends le temps de célébrer ce moment avant de continuer.",

        "cards.lunar.verite.name": "Vérité",
        "cards.lunar.verite.mindset.var1": "Une vérité importante se révèle à toi, {name}, et éclaire ta situation",
        "cards.lunar.verite.mindset.var2": "Tu vois maintenant les choses telles qu’elles sont, sans filtre ni illusion",
        "cards.lunar.verite.mindset.var3": "Ce qui était caché devient clair et évident, pour ton bien",
        "cards.lunar.verite.guidance.var1": "Accueille cette vérité avec ouverture et courage.",
        "cards.lunar.verite.guidance.var2": "Reste aligné(e) avec ce que tu sais être juste.",
        "cards.lunar.verite.guidance.var3": "Cette clarté t’aide à avancer sans peur et avec confiance.",

        "cards.lunar.gratitude.name": "Gratitude",
        "cards.lunar.gratitude.mindset.var1": "Un sentiment de reconnaissance t’habite, {name}, et ton cœur s’ouvre",
        "cards.lunar.gratitude.mindset.var2": "Tu prends conscience de tout ce qui est déjà présent dans ta vie",
        "cards.lunar.gratitude.mindset.var3": "Tu sens la beauté et l’abondance autour de toi",
        "cards.lunar.gratitude.guidance.var1": "Remercie pour ce que tu as et ce que tu vis chaque jour.",
        "cards.lunar.gratitude.guidance.var2": "Honore chaque expérience, même les petites et discrètes.",
        "cards.lunar.gratitude.guidance.var3": "La gratitude élève ton énergie et attire plus de belles choses dans ta vie.",
        //Dernier Quartier
        "cards.lunar.detachement.name": "Détachement",
        "cards.lunar.detachement.mindset.var1": "Il est temps de relâcher ce qui t’alourdit, {name}, et de libérer ton esprit",
        "cards.lunar.detachement.mindset.var2": "Tu peux lâcher prise sans peur et accueillir le changement",
        "cards.lunar.detachement.mindset.var3": "Certaines choses n’ont plus besoin d’être retenues, laisse-les partir doucement",
        "cards.lunar.detachement.guidance.var1": "Libère-toi sans culpabilité et avec bienveillance envers toi-même.",
        "cards.lunar.detachement.guidance.var2": "Le détachement ouvre un espace nouveau pour respirer et créer.",
        "cards.lunar.detachement.guidance.var3": "Fais confiance au mouvement de la vie et avance à ton rythme.",

        "cards.lunar.prisederecul.name": "Prise de recul",
        "cards.lunar.prisederecul.mindset.var1": "{name}, prends du recul et observe ta situation avec calme",
        "cards.lunar.prisederecul.mindset.var2": "Donne-toi le temps de comprendre ce qui se passe vraiment",
        "cards.lunar.prisederecul.mindset.var3": "Le recul t’aide à voir les choses plus clairement et avec lucidité",
        "cards.lunar.prisederecul.guidance.var1": "Ne prends pas de décision dans la précipitation, respire d’abord.",
        "cards.lunar.prisederecul.guidance.var2": "Le calme t’apporte des réponses plus justes et simples.",
        "cards.lunar.prisederecul.guidance.var3": "Accorde-toi ce temps pour réfléchir avant d’agir.",

        "cards.lunar.retourasoi.name": "Retour à soi",
        "cards.lunar.retourasoi.mindset.var1": "Tu ressens le besoin de te recentrer, {name}, et de t’écouter vraiment",
        "cards.lunar.retourasoi.mindset.var2": "Ton monde intérieur te demande de prendre soin de toi",
        "cards.lunar.retourasoi.mindset.var3": "Tu te reconnectes doucement à ton essence et à tes besoins",
        "cards.lunar.retourasoi.guidance.var1": "Prends soin de toi avec douceur et attention.",
        "cards.lunar.retourasoi.guidance.var2": "Écoute ce que ton cœur et ton corps te demandent.",
        "cards.lunar.retourasoi.guidance.var3": "Ce retour à toi te rend plus fort(e) et serein(e).",

        "cards.lunar.pardon.name": "Pardon",
        "cards.lunar.pardon.mindset.var1": "Tu es prêt(e) à alléger ton cœur, {name}, et à te libérer du passé",
        "cards.lunar.pardon.mindset.var2": "Le passé peut être apaisé si tu choisis de pardonner",
        "cards.lunar.pardon.mindset.var3": "Le pardon t’offre une liberté intérieure et un soulagement profond",
        "cards.lunar.pardon.guidance.var1": "Libère-toi du poids des rancunes sans te juger.",
        "cards.lunar.pardon.guidance.var2": "Le pardon commence par toi et pour toi.",
        "cards.lunar.pardon.guidance.var3": "Laisse partir ce qui te retient pour avancer plus léger.",

        "cards.lunar.sagesse.name": "Sagesse",
        "cards.lunar.sagesse.mindset.var1": "Tu intègres ce que tu as vécu, {name}, et tu comprends mieux les leçons apprises",
        "cards.lunar.sagesse.mindset.var2": "Chaque expérience prend maintenant un sens plus profond",
        "cards.lunar.sagesse.mindset.var3": "Ta compréhension devient plus claire et t’accompagne dans tes choix",
        "cards.lunar.sagesse.guidance.var1": "Honore ton parcours et tout ce que tu as traversé.",
        "cards.lunar.sagesse.guidance.var2": "Fais confiance à ton vécu pour guider tes prochaines étapes.",
        "cards.lunar.sagesse.guidance.var3": "La sagesse naît de l’intégration et de l’écoute de toi-même.",

        "cards.lunar.repos.name": "Repos",
        "cards.lunar.repos.mindset.var1": "Ton corps et ton esprit ont besoin de se reposer, {name}, c’est normal",
        "cards.lunar.repos.mindset.var2": "Le cycle touche à sa fin et tu peux ralentir sans culpabilité",
        "cards.lunar.repos.mindset.var3": "Permets-toi de récupérer pour mieux recommencer ensuite",
        "cards.lunar.repos.guidance.var1": "Accorde-toi du repos et écoute tes besoins.",
        "cards.lunar.repos.guidance.var2": "Le calme et la détente préparent un nouveau départ.",
        "cards.lunar.repos.guidance.var3": "Le repos fait partie du chemin et te rend plus fort(e).",
    
    // Horoscope Data Translations - Date Ranges
    "horoscope.data.dates.aries": "21 mars - 19 avril",
    "horoscope.data.dates.taurus": "20 avril - 20 mai",
    "horoscope.data.dates.gemini": "21 mai - 20 juin",
    "horoscope.data.dates.cancer": "21 juin - 22 juillet",
    "horoscope.data.dates.leo": "23 juillet - 22 août",
    "horoscope.data.dates.virgo": "23 août - 22 septembre",
    "horoscope.data.dates.libra": "23 septembre - 22 octobre",
    "horoscope.data.dates.scorpio": "23 octobre - 21 novembre",
    "horoscope.data.dates.sagittarius": "22 novembre - 21 décembre",
    "horoscope.data.dates.capricorn": "22 décembre - 19 janvier",
    "horoscope.data.dates.aquarius": "20 janvier - 18 février",
    "horoscope.data.dates.pisces": "19 février - 20 mars",

    // FRANÇAIS - Toutes les nouvelles traductions pour les variations

    // ========== SALUTATIONS VARIÉES ==========

    // Tirage quotidien - variantes
    "interpretation.daily.greeting.var1":
      "Salut {name} ! J'ai un message spécial pour toi aujourd'hui.",
    "interpretation.daily.greeting.var2":
      "Coucou {name} ! Ton guide du jour t'attend avec impatience.",
    "interpretation.daily.greeting.var3":
      "Hello {name} ! Une belle énergie t'accompagne aujourd'hui.",
    "interpretation.daily.greeting.var4":
      "Bonjour {name} ! Les énergies cosmiques ont préparé quelque chose pour toi.",

    // Tarot - variantes
    "interpretation.tarot.greeting.var1":
      "Coucou {name} ! Ton tirage de Tarot révèle des aspects fascinants de ta vie.",
    "interpretation.tarot.greeting.var2":
      "Hello {name} ! Les cartes de Tarot ont des messages puissants pour toi.",
    "interpretation.tarot.greeting.var3":
      "Bonjour {name} ! Ton tirage de Tarot dévoile des vérités importantes.",
    "interpretation.tarot.greeting.var4":
      "Salut {name} ! Les arcanes du Tarot parlent clairement de ton avenir.",

    // Anges - variantes
    "interpretation.angels.greeting.var1":
      "Salut {name} ! Le royaume angélique déborde de messages d'amour pour toi.",
    "interpretation.angels.greeting.var2":
      "Coucou {name} ! Tes guides célestes illuminent ton chemin aujourd'hui.",
    "interpretation.angels.greeting.var3":
      "Hello {name} ! Les anges chantent des mélodies de guidance spécialement pour toi.",
    "interpretation.angels.greeting.var4":
      "Bonjour {name} ! Une symphonie angélique résonne dans les sphères célestes pour toi.",

    // Runes - variantes
    "interpretation.runes.greeting.var1":
      "Heil {name} ! Les runes des anciens parlent de ton héritage viking.",
    "interpretation.runes.greeting.var2":
      "Salut {name} ! L'écho des dieux nordiques résonne à travers ces runes sacrées.",
    "interpretation.runes.greeting.var3":
      "Bonjour {name} ! Les runes millénaires dévoilent la force qui sommeille en toi.",
    "interpretation.runes.greeting.var4":
      "Hello {name} ! La sagesse des Vikings traverse les âges pour te guider.",

    // ========== TRANSITIONS VARIÉES ==========

    // Transitions pour le passé
    "interpretation.transition.past.var1":
      "Ces expériences t'ont vraiment fait grandir et t'ont rendu plus fort{genderSuffix}.",
    "interpretation.transition.past.var2":
      "Ces moments ont forgé ton caractère et ta résilience.",
    "interpretation.transition.past.var3":
      "Tout cela a contribué à façonner la personne que tu es devenu{genderSuffix}.",
    "interpretation.transition.past.var4":
      "Ces épreuves t'ont donné une sagesse précieuse.",
    "interpretation.transition.past.var5":
      "C'est grâce à ces expériences que tu as développé ta force intérieure.",
    "interpretation.transition.past.var6":
      "Ces événements t'ont appris des leçons importantes sur la vie.",
    "interpretation.transition.past.var7":
      "Tout ce vécu a enrichi ton âme et ton expérience.",
    "interpretation.transition.past.var8":
      "Ces défis ont révélé ta véritable nature et ta détermination.",

    // Transitions pour le présent
    "interpretation.transition.present.var1":
      "Tu es dans une période importante qui annonce de belles choses pour la suite.",
    "interpretation.transition.present.var2":
      "Cette phase de ta vie ouvre des perspectives prometteuses.",
    "interpretation.transition.present.var3":
      "C'est un moment clé qui prépare ton avenir radieux.",
    "interpretation.transition.present.var4":
      "Cette période actuelle pose les bases de ton succès futur.",
    "interpretation.transition.present.var5":
      "Tu vis une transition qui va transformer ta vie positivement.",
    "interpretation.transition.present.var6":
      "Ce moment présent est porteur de grandes promesses.",
    "interpretation.transition.present.var7":
      "Cette étape marque un tournant positif dans ton existence.",
    "interpretation.transition.present.var8":
      "Tu traverses une phase qui va t'apporter beaucoup de satisfaction.",

    // Transitions pour le futur
    "interpretation.transition.future.var1":
      "Cette énergie va transformer ta vie de manière positive et durable.",
    "interpretation.transition.future.var2":
      "Ces influences vont apporter des changements merveilleux dans ta vie.",
    "interpretation.transition.future.var3":
      "Cette force va créer des opportunités extraordinaires pour toi.",
    "interpretation.transition.future.var4":
      "Ces vibrations vont attirer tout ce dont tu as besoin.",
    "interpretation.transition.future.var5":
      "Cette énergie va manifester tes rêves les plus chers.",
    "interpretation.transition.future.var6":
      "Ces influences divines vont illuminer ton chemin.",
    "interpretation.transition.future.var7":
      "Cette puissance va débloquer ton potentiel caché.",
    "interpretation.transition.future.var8":
      "Ces énergies vont synchroniser tous les aspects de ta vie.",

    // ========== CONSEILS VARIÉS ANGES==========

    // Templates pour le message final ANGES (début de phrase)
    "interpretation.angels.template.message.var1":"Les anges veillent sur toi {name} et t’envoient une guidance importante :",
    "interpretation.angels.template.message.var2":"Un message doux t’est adressé {name}. Les guides souhaitent que tu entendes ceci :",
    "interpretation.angels.template.message.var3":"Les présences célestes t’accompagnent {name} et te soufflent ce message :",
    "interpretation.angels.template.message.var4":"Une énergie lumineuse t’entoure aujourd’hui {name}. Voici la guidance qu’elle t’apporte :",
    "interpretation.angels.template.message.var5":"{name}, les anges t’enveloppent de bienveillance et te transmettent ceci :",
    "interpretation.angels.template.message.var6":"Une présence angélique s’approche de toi {name}. Ouvre ton cœur à ce message :",
    "interpretation.angels.template.message.var7":"Ton âme est entendue {name}. Les anges te partagent ce conseil pour avancer :",
    "interpretation.angels.template.message.var8":"Une présence divine se tourne vers toi {name}. Voici le message que tu es prêt{genderSuffix} à recevoir :",
    
    // Conseils variés ANGES (fin de phrase)
    "interpretation.advice.var1":"Ton ange gardien veut que tu saches que ton intuition est un guide sûr : fais-lui pleinement confiance.",
    "interpretation.advice.var2":"Les anges te rappellent d’écouter ton cœur : il connaît déjà la direction qui t’apportera la paix.",
    "interpretation.advice.var3":"Ton guide de lumière t’invite à prêter attention aux signes autour de toi, car rien n’apparaît par hasard.",
    "interpretation.advice.var4":"Les êtres célestes veulent que tu restes aligné{genderSuffix} avec ce que tu ressens profondément. C’est là que se trouve ta vérité.",
    "interpretation.advice.var5":"Ton ange protecteur t’encourage à croire en ta force intérieure : elle ne t’abandonne jamais.",
    "interpretation.advice.var6":"Un murmure divin te souffle de t’ouvrir aux opportunités qui se présentent : elles sont là pour t’aider.",
    "interpretation.advice.var7":"Les anges te demandent de ralentir et de respirer : la patience permettra à ton chemin de se clarifier naturellement.",
    "interpretation.advice.var8":"Ton guide angélique veut que tu continues d’avancer avec confiance : tes efforts sont déjà bénis.",
    "interpretation.advice.var9":"Une lumière céleste t’invite à préserver ton optimisme, car il attire vers toi des énergies hautement positives.",
    "interpretation.advice.var10":"Ton ange gardien te murmure de renforcer ta confiance en toi : elle ouvre les portes que tu attends depuis longtemps.",
   
      // Débuts de phrases TAROT (début de phrase)
      "interpretation.tarot.template.advice.var1":"Écoute bien {name},",
      "interpretation.tarot.template.advice.var2":"Mon conseil pour toi {name},",
      "interpretation.tarot.template.advice.var3":"Je vais te dire quelque chose {name},",
      "interpretation.tarot.template.advice.var4":"Sache une chose {name},",
      "interpretation.tarot.template.advice.var5":"Prends un moment {name},",
      "interpretation.tarot.template.advice.var6":"Je te le dis clairement {name},",
      "interpretation.tarot.template.advice.var7":"Voilà ce que je te conseille {name},",
      "interpretation.tarot.template.advice.var8":"Je te le dis {name},",
      "interpretation.tarot.template.advice.var9":"N’oublie pas {name},",
      "interpretation.tarot.template.advice.var10":"{name},",

      // Fins de phrases TAROT (fin de phrase)
      "interpretation.tarot.advice.var1":"tes choix actuels auront un impact direct sur ton futur, alors reste attentif.",
      "interpretation.tarot.advice.var2":"Fais confiance à ton instinct et ose prendre le chemin qui te semble juste, même s’il te fait un peu peur.",
      "interpretation.tarot.advice.var3":"tes émotions sont des guides puissants, suis-les avec confiance.",
      "interpretation.tarot.advice.var4":"parfois, il vaut mieux lâcher prise que forcer les choses.",
      "interpretation.tarot.advice.var5":"tu as toutes les clés en mains pour réussir alors ne baisse pas les bras!",
      "interpretation.tarot.advice.var6":"tu as déjà tout ce qu’il faut en toi pour avancer : crois en toi!",
      "interpretation.tarot.advice.var7":"ne laisse pas le doute te freiner, avance malgré tout.",
      "interpretation.tarot.advice.var8":"Tes intuitions te montrent clairement la bonne voie à suivre. Suis-les en toute confiance!",
      "interpretation.tarot.advice.var9":"reste positif, ton énergie attire ce dont tu as besoin.",
      "interpretation.tarot.advice.var10":"accepte ce qui arrive et fonce, le moment est le bon.",
   
       /// Page Wizard - Titres et sous-titres
        "wizard.title": "Azraël le Voyant",
        "wizard.subtitle.home": "Le grand magicien révèle les mystères de votre destinée",
        "wizard.subtitle.question": "Formulez votre question avec clarté",
        "wizard.subtitle.channeling": "✧ Azraël consulte les forces cosmiques... ✧",
        "wizard.subtitle.answer": "✦ Révélation Mystique ✦",
        "oracle.wizard.description": "Consultez le grand magicien pour révéler votre destinée",
        "wizard.oracleResponse": "Réponse d'Azraël",

        // Boutons
        "wizard.consultButton": "Consulter Azraël",
        "wizard.backButton": "← Retour",
        "wizard.backHome": "← Retour à l'accueil",
        "wizard.newQuestion": "Nouvelle Question",

        // Page Question
        "wizard.askTitle": "Posez Votre Question",
        "wizard.questionLabel": "Votre question au magicien",
        "wizard.questionPlaceholder": "Écrivez votre question...",
        "wizard.adviceTitle": "Conseil Mystique",
        "wizard.adviceText": "Azraël répond par oui, non ou peut-être. Posez une question fermée pour recevoir la guidance des astres.",
        "wizard.consultAction": "Consulter Azraël",

        // Page Channeling
        "wizard.channeling": "Azraël consulte les forces cosmiques...",
        "wizard.astraConnection": "⟡ Connexion astrale",
       
        // Page Answer
        "wizard.yourQuestion": "Votre question",
        "wizard.disclaimer": "Les réponses d'Azraël sont symboliques et destinées au divertissement. Écoutez votre cœur pour les choix importants.",

        // Réponses du magicien
        "wizard.answer.yes": "Les astres confirment : Oui, sans l'ombre d'un doute",
        "wizard.answer.no": "Les étoiles s'opposent : Non, ce chemin n'est pas le vôtre",
        "wizard.answer.maybe": "Le destin hésite : Peut-être, restez attentif aux signes",
        "wizard.answer.veryLikely": "Les forces cosmiques s'alignent favorablement",
        "wizard.answer.unlikely": "Les présages sont défavorables pour l'instant",
        "wizard.answer.certain": "Certitude absolue : Le cosmos a parlé",
        "wizard.answer.noChance": "Aucune chance : Les étoiles vous guident ailleurs",
        "wizard.answer.askLater": "Le moment n'est pas propice, revenez plus tard",
        "wizard.answer.dontCount": "N'y comptez pas : D'autres portes s'ouvriront",
        "wizard.answer.yesDefinitely": "Oui, définitivement ! Les énergies sont parfaites",
        "wizard.answer.signsYes": "Tous les signes pointent vers l'affirmative",
        "wizard.answer.signsNo": "Les augures sont clairs : Non",
        "wizard.answer.unclear": "Le voile entre les mondes reste opaque",
        "wizard.answer.trustIntuition": "Écoutez votre voix intérieure, elle connaît la vérité",
          
    // MENU LÉGAL
    "legal.menu.title": "Menu légal",
    "legal.mentions": "Mentions légales",
    "legal.privacy": "Politique de confidentialité",

    // PREMIUM MODAL
    "premium.button.label": "Devenir Premium",
    "premium.title": "Supprime les Publicités !",
    "premium.subtitle": "Fais tes tirages sans pub !",
    "premium.plan.1month": "1 Mois",
    "premium.plan.1month.subtitle": "Sans engagement",
    "premium.plan.3months": "3 Mois",
    "premium.plan.3months.subtitle": "Meilleure offre",
    "premium.plan.discount": "-25%",
    "premium.button.subscribe": "S'abonner maintenant",
    "premium.button.select": "Sélectionne une offre",
    "premium.button.processing": "Traitement...",
    "premium.benefits.ads": "Aucune publicité",
    "premium.benefits.notes": "Notes et favoris",
    "premium.benefits.history": "Historique complet de vos tirages",
    "premium.confirm.1month": "Confirmer le paiement de 3,99€ pour 1 mois ?",
    "premium.confirm.3months": "Confirmer le paiement de 8,98€ pour 3 mois ?",
    "premium.success": "Abonnement activé avec succès ! Profitez de votre expérience sans pub!",
    "premium.error.activation": "Erreur lors de l'activation de l'abonnement",
    "premium.error.payment": "Erreur lors du paiement. Veuillez réessayer.",
    "premium.error.invalidEmail": "L'email n'est pas valide.",
    "premium.error.noActivePremium": "Aucun abonnement actif trouvé",

    // Premium
    "premium.manage": "Gérer mon abonnement (annuler, factures...)",
    "premium.expired": "Votre accès Premium a expiré",
    "premium.expiringSoon": "Votre accès Premium expire bientôt",
    "premium.conditions.line1":"🔒 Paiement sécurisé via Google Play",
    "premium.conditions.line2": "✓ Paiement unique, SANS renouvellement automatique",
    "premium.conditions.line3": "Aucun remboursement après paiement. Accès Premium valable pour la durée choisie.",
    "premium.conditions.line4": "Vous serez notifié 3 jours avant l'expiration de votre accès.",
    "premium.securePayment": "Paiement sécurisé par",
    "premium.restoreSubscription": "Restaurer un abonnement",
    "premium.backToPurchases": "Retour aux achats",
    "premium.payment.googlePlay": "Paiement Google Play",
    "premium.payment.stripe": "Paiement Web Stripe",
    "premium.restoreEmailLabel": 'Votre Email',
    "premium.restore": 'Restaurer',
    "premium.buy": 'Acheter',

    //PREMIUM RESTOR
    "premium.restore.title": "Restaurer mon abonnement",
    "premium.restore.subtitle": "Déjà Premium ? Récupérez votre accès",
    "premium.restore.description": "Entrez l'email utilisé lors de votre achat Premium",
    "premium.restore.button": "Restaurer",
    "premium.restore.verifying": "Vérification...",
    "premium.restore.success": "Premium restauré avec succès !",
    "premium.restore.redirecting": "Redirection en cours...",
    "premium.restore.notFound": "Aucun abonnement Premium trouvé pour cet email. Vérifiez l'adresse ou souscrivez à un nouvel abonnement.",
    "premium.restore.error": "Une erreur est survenue lors de la restauration. Réessayez.",
    "premium.restore.info":"L’abonnement Premium est associé à votre compte Google utilisé lors de l’achat sur Google Play.",
    "premium.restore.help": "Besoin d'aide ?",
    "premium.restore.contact": "Contactez-nous",
    "premium.error.emailRequired": "L'email est requis.",
    "premium.error.emailInvalid": "L'email n'est pas valide.",
    "premium.emailLabel": "Votre email",
    "premium.emailHelp": "Pour récupérer votre abonnement",
    "premium.backToPurchase": 'Retour aux achats',
    "premium.button.loading": 'Chargement...',
    "premium.loading.offers": 'Chargement des offres...',
    "premium.button.restoring": 'Restauration...',
    "premium.poweredBy": 'Powered by',
    "premium.error.loadFailed": "Impossible de charger les offres",
    "premium.error.purchaseFailed": "Erreur lors de l\'achat",
    "premium.error.unknown": "Erreur inconnue",

    // PAGE PAIEMENT SUCESS CANCEL
    "payment.success.title": "Paiement réussi !",
    "payment.success.verified": "Votre compte Premium a été activé",
    "payment.success.activating": "Activation en cours...",
    "payment.success.benefits": "Profitez de toutes les fonctionnalités Premium !",
    "payment.success.noAds": "Sans publicité",
    "payment.success.fullHistory": "Historique complet",
    "payment.success.redirecting": "Redirection automatique vers les oracles...",
    "payment.cancel.title": "Paiement annulé",
    "payment.cancel.message": "Vous avez annulé le paiement",
    "payment.cancel.retry": "Vous pouvez réessayer à tout moment depuis le menu Premium",
    "payment.cancel.redirecting": "Retour à la sélection des oracles...",
    "premium.upgrade": "Passer Premium",
    "premium.purchase": "Devenir Premium",
    "premium.purchaseDesc": "Nouvel abonnement",
    "premium.restoreDesc": "J'ai déjà payé",
    "premium.unlimited": "Illimité",
    "premium.mobileOnly.title": "Application mobile uniquement",
    "premium.mobileOnly.description": "Les achats Premium sont disponibles uniquement via l'application mobile Android (Google Play).",
     "premium.mobileOnly.instruction": "Téléchargez l'app depuis le Google Play Store pour accéder au Premium.",
     "premium.benefits.grimoire": "Grimoire illimité",
     "premium.benefits.unlimited": "Tirages illimités",
     "premium.benefits.noAds": "Sans publicités",
     "premium.benefits.allOracles": "Tous les oracles débloqués",
     "premium.benefits.deepInterpretations": "Interprétations approfondies",
     "premium.restore.mobileOnly": "La restauration d'abonnement est disponible uniquement via l'application mobile Android.",
                     
    // Après ta section oracle existante, ajoute :

    /// Dans translations.ts, section fr :

    // Wheel - Tirage Bonus
    "oracle.wheel.title": "Roue de la Destinée",
    "oracle.wheel.subtitle": "Tournez la roue pour découvrir votre destin",  
    "oracle.wheel.description": "Laissez le destin guider la roue vers votre avenir",
    "oracle.wheel.exclusiveBadge": "BONUS EXCLUSIF",
    "oracle.wheel.shortDescription": "Découvrez votre destin mystique",
    "oracle.wheel.spinButton": "Tourner la Roue",
    "oracle.wheel.newSpin": "Nouveau Tirage",
    "oracle.wheel.spinning": "La roue tourne...",
    "premium.badge": "👑 Premium",
    "oracle.wheel.segment.love": "Amour",
    "oracle.wheel.segment.work": "Travail",
    "oracle.wheel.segment.money": "Argent",
    "oracle.wheel.segment.health": "Santé",
    "oracle.wheel.segment.family": "Famille",
    "oracle.wheel.segment.success": "Succès",
    "oracle.wheel.segment.friendship": "Amitié",
    "oracle.wheel.segment.mystery": "?",
    "oracle.wheel.adRequired": "Une publicité vous sera présentée",
    "oracle.wheel.premiumAccess": "Accès instantané sans publicité",
    "oracle.wheel.startButton": "Débloquer la Roue de la Destinée",
    "oracle.wheel.startButtonPremium": "Tourner la Roue",
    "oracle.wheel.loadingAd": "Chargement...",
    "oracle.wheel.pleaseWait": "Un instant",
    "oracle.wheel.adLongWarning": "Publicité en cours...",
    "oracle.wheel.pleaseWaitUntilEnd": "Merci de patienter",
    "oracle.wheel.adNotCompleted": "Veuillez regarder la publicité jusqu'à la fin",
    "oracle.wheel.adError": "Une erreur est survenue. Réessayez.",
    "oracle.wheel.variations.golden": "Roue Dorée",
    "oracle.wheel.variations.silver": "Roue Argentée",
    "oracle.wheel.variations.cosmic": "Roue Cosmique",
    "oracle.wheel.destinyRevealed": "Votre destin est révélé",
    "common.pleaseWait": "Merci de patienter",
    "oracle.wheel.watchAdToUnlock": "Regardez la pub pour débloquer",
              
    // Interprétations Wheel de la destinée
            "oracle.wheel.love.title.1": "💖 L'Amour te sourit",
          "oracle.wheel.love.message.1": [
            "Une rencontre importante arrive bientôt et pourrait changer ta vie. Ouvre ton cœur et laisse-toi surprendre.",
            "L'amour que tu cherches est plus proche que tu ne le crois. Sois attentif aux signes autour de toi.",
            "Un lien fort et sincère peut se créer à tout moment. Reste ouvert et réceptif aux belles émotions."
          ],
          "oracle.wheel.love.title.2": "💫 Passion intense",
          "oracle.wheel.love.message.2": [
            "Une passion intense va toucher ta vie. Ne retiens pas tes émotions et vis pleinement chaque instant.",
            "Tes sentiments vont s'intensifier. N'aie pas peur de montrer ce que tu ressens vraiment.",
            "Une connexion spéciale est en route vers toi. Laisse-la se révéler naturellement et sans contrainte."
          ],
          "oracle.wheel.love.title.3": "🌹 Romance en vue",
          "oracle.wheel.love.message.3": [
            "Une belle romance est sur le point de se manifester. Sois attentif aux opportunités autour de toi.",
            "Quelqu'un d'important pourrait entrer dans ta vie très bientôt. Prépare-toi à accueillir cette rencontre.",
            "Le destin amoureux t'offre une surprise. Ouvre ton cœur et laisse-toi guider par tes émotions."],
          "oracle.wheel.love.title.4": "💕 Amour vrai",
          "oracle.wheel.love.message.4": [
            "Ton cœur va être rempli de joie et de belles émotions. Profite de chaque moment avec ceux que tu aimes.",
            "Des expériences positives et enrichissantes dans l'amour sont à venir. Laisse-les t'inspirer.",
            "Une énergie d'amour t'entoure. Suis-la et laisse-la guider tes actions et tes choix."],
          "oracle.wheel.work.title.1": "💼 Réussite professionnelle",
          "oracle.wheel.work.message.1": [
            "Un projet important va se concrétiser. Mets toute ton énergie pour réussir et tu verras le résultat.",
            "Tes efforts passés vont enfin porter leurs fruits. Reste concentré et continue d'avancer.",
            "Une belle reconnaissance arrive pour ton travail. Sois prêt à saisir cette opportunité et à briller."
          ],
          "oracle.wheel.work.title.2": "🚀 Opportunité majeure",
          "oracle.wheel.work.message.2": [
            "Une chance unique se présente dans ta carrière. N'hésite pas à te lancer, le moment est favorable.",
            "Un contact ou une proposition pourrait changer ton quotidien professionnel. Sois attentif et réactif.",
            "Un tournant décisif est proche. Prépare-toi à agir rapidement pour profiter pleinement de cette opportunité."
          ],
          "oracle.wheel.work.title.3": "⚡ Avancée décisive",
          "oracle.wheel.work.message.3": [
            "Un obstacle se transforme en opportunité. Saisis le moment pour avancer et prouver tes compétences.",
            "Tu es sur le point de franchir une étape importante. Ne doute pas de toi et fonce.",
            "Une évolution positive dans ton travail est imminente. Reste confiant et déterminé pour la saisir."
          ],
          "oracle.wheel.work.title.4": "🎯 Objectif en vue",
          "oracle.wheel.work.message.4": [
            "Tu es proche de réaliser ce que tu souhaites. Concentre-toi et mets toutes tes forces dans ce but.",
            "Une étape cruciale arrive. Sois persévérant et garde le cap pour atteindre ton objectif.",
            "Tes efforts vont enfin payer. Reste motivé et fais ce qu’il faut pour concrétiser tes ambitions."
          ],
        "oracle.wheel.money.title.1": "💰 Prospérité à venir",
        "oracle.wheel.money.message.1": [
        "Une rentrée d'argent arrive bientôt. Prépare-toi à gérer cette opportunité avec sagesse.",
        "Tes efforts financiers passés commencent à porter leurs fruits. Reste attentif et fais les bons choix.",
        "Un événement inattendu pourrait booster tes finances. Saisis cette chance et profite-en intelligemment."
        ],
        "oracle.wheel.money.title.2": "💸 Dépense contrôlée",
        "oracle.wheel.money.message.2": [
        "Une dépense imprévue pourrait arriver. Reste calme et transforme-la en leçon pour mieux gérer.",
        "Tu devras peut-être faire des choix financiers difficiles, mais cela t'ouvrira la voie vers plus de stabilité.",
        "Une perte temporaire pourrait te surprendre. Utilise cette expérience pour renforcer ta sécurité financière."
        ],
        "oracle.wheel.money.title.3": "⚡ Gain inattendu",
        "oracle.wheel.money.message.3": [
        "Un petit gain imprévu va illuminer ta journée. Profite-en pour avancer sur tes projets.",
        "Quelqu’un pourrait t’offrir un coup de pouce financier. Accueille cette aide et transforme-la en opportunité.",
        "Un retour sur investissement arrive là où tu ne l’attendais pas. Sois prêt à en tirer le meilleur."
        ],
        "oracle.wheel.money.title.4": "🎯 Objectif financier",
        "oracle.wheel.money.message.4": [
        "Tu es proche d’atteindre un objectif important. Reste concentré et ne laisse rien te distraire.",
        "Une étape cruciale dans tes finances approche. Mets toutes tes forces pour concrétiser ce que tu vises.",
        "Tes efforts financiers vont porter leurs fruits. Reste motivé et continue à avancer avec confiance."
        ],
        "oracle.wheel.health.title.1": "💪 Vitalité au top",
        "oracle.wheel.health.message.1": [
        "Ton énergie va être au maximum ces prochains jours. Profite-en pour avancer et réaliser tes projets.",
        "Tu te sentiras plein de force et de motivation. Utilise cette énergie pour te concentrer sur tes priorités.",
        "Une période de grande vitalité s'annonce. Bouge, explore et laisse ton corps et ton esprit s’épanouir."
        ],
        "oracle.wheel.health.title.2": "🌿 Équilibre parfait",
        "oracle.wheel.health.message.2": [
        "Tu trouveras un bel équilibre entre corps et esprit. Profite-en pour te recentrer et te ressourcer.",
        "Ton rythme quotidien devient harmonieux. Prends le temps de te reconnecter à toi-même et à tes besoins.",
        "Un sentiment de sérénité va t’accompagner. Utilise-le pour avancer avec clarté et confiance."
        ],
        "oracle.wheel.health.title.3": "⚡ Energie boost",
        "oracle.wheel.health.message.3": [
        "Un regain d’énergie arrive. Mets-le au service de tes objectifs et actions importantes.",
        "Tu seras plein de motivation pour entreprendre et réussir. Saisis cette opportunité pour bouger et agir.",
        "Ton dynamisme va rayonner autour de toi. Profite-en pour créer, avancer et te dépasser."
        ],
        "oracle.wheel.health.title.4": "🌞 Bien-être total",
        "oracle.wheel.health.message.4": [
        "Tu te sentiras bien dans ton corps et dans ta tête. Laisse ce bien-être t’inspirer chaque jour.",
        "Une sensation de légèreté et de confort t’accompagnera. Utilise-la pour profiter pleinement de chaque moment.",
        "Le calme et la sérénité remplissent ton quotidien. Suis cette énergie pour prendre les bonnes décisions."
        ],
        "oracle.wheel.family.title.1": "🏡 Harmonie familiale",
        "oracle.wheel.family.message.1": [
        "Une belle période de rapprochement arrive. Profite de chaque moment passé avec tes proches.",
        "Les liens avec ta famille vont se renforcer. Montre ton affection et ton attention, ça sera apprécié.",
        "Un moment de convivialité et de partage t’attend. Sois présent et ouvert aux autres."
        ],
        "oracle.wheel.family.title.2": "⚖️ Réconciliation",
        "oracle.wheel.family.message.2": [
        "Une petite dispute pourrait surgir, mais elle mènera à une meilleure compréhension mutuelle.",
        "Tu auras l’opportunité de réparer un malentendu. Sois patient et écoute avec le cœur.",
        "Un désaccord se transforme en rapprochement. Profite de cette chance pour créer des liens plus forts."
        ],
        "oracle.wheel.family.title.3": "🎉 Moments joyeux",
        "oracle.wheel.family.message.3": [
        "Des instants de bonheur partagé avec tes proches sont à venir. Savoure chaque rire et chaque sourire.",
        "Une journée spéciale en famille te donnera de la joie et des souvenirs précieux. Sois pleinement présent.",
        "Tu sentiras la chaleur et le soutien de ceux qui t’aiment. Laisse cette énergie te guider."
        ],
        "oracle.wheel.family.title.4": "💖 Soutien mutuel",
        "oracle.wheel.family.message.4": [
        "Ta famille sera là pour toi quand tu en auras besoin. N’hésite pas à t’appuyer sur eux.",
        "Tu pourras apporter ton aide et ton soutien à un proche. Ces moments renforceront vos liens.",
        "Une dynamique positive s’installe dans tes relations familiales. Partage, écoute et aime sans retenue."
        ],
        "oracle.wheel.success.title.1": "🏆 Succès imminent",
        "oracle.wheel.success.message.1": [
        "Tu vas bientôt atteindre un succès qui te surprendra. Les efforts que tu as fournis, même dans les moments difficiles, commencent à porter leurs fruits, et tu vas sentir la satisfaction d’avoir persévéré.",
        "Ce que tu pensais impossible devient possible. Tu vas voir les résultats concrets de ton travail acharné et tu pourras enfin savourer la reconnaissance que tu mérites.",
        "Une opportunité inattendue va se présenter et te permettre de briller dans ton domaine. Sois attentif, prépare-toi et prends-la avec confiance."
        ],
        "oracle.wheel.success.title.2": "🚀 Progression rapide",
        "oracle.wheel.success.message.2": [
        "Tout ce que tu fais maintenant va te propulser vers un niveau supérieur. Les choix que tu feras cette semaine auront un impact important sur ton avenir, alors reste concentré et avance sans hésiter.",
        "Les efforts que tu fournis chaque jour, même s’ils te semblent petits, s’additionnent et vont créer une progression rapide vers tes objectifs. Continue sur cette lancée et ne doute jamais de toi.",
        "Un changement majeur est en route qui accélérera ta réussite. Tu devras t’adapter vite, mais les résultats en vaudront largement la peine."
        ],
        "oracle.wheel.success.title.3": "⚡ Rebond fructueux",
        "oracle.wheel.success.message.3": [
        "Ce qui semblait être un échec va se transformer en une opportunité incroyable. Tu verras que tes erreurs t’ont préparé à réussir mieux que jamais, alors garde confiance et avance.",
        "Une situation difficile du passé va te permettre de récolter un succès inattendu. Tu apprendras que chaque obstacle avait un sens et qu’il t’a rendu plus fort.",
        "Le revers que tu as connu va devenir ton tremplin. Tu vas trouver une nouvelle manière de réussir grâce à ce que tu as vécu, et le résultat sera impressionnant."
        ],
        "oracle.wheel.success.title.4": "🎯 Objectif atteint",
        "oracle.wheel.success.message.4": [
        "Tout ce que tu as travaillé pendant des semaines, voire des mois, arrive enfin à maturité. Tu vas sentir une immense satisfaction et la fierté d’avoir persévéré malgré les doutes et les obstacles.",
        "Tu vas atteindre un objectif que tu pensais encore hors de portée. C’est le moment de célébrer tes efforts et de te préparer à franchir le prochain cap avec confiance.",
        "Le succès que tu attendais depuis longtemps va enfin se matérialiser. Tu vas ressentir l’accomplissement complet de ton travail et comprendre que chaque décision t’a conduit ici."
        ],
        "oracle.wheel.friendship.title.1": "🤝 Amitié solide",
        "oracle.wheel.friendship.message.1": [
        "Tu vas vivre un moment fort avec un ami qui compte vraiment pour toi. Les liens que tu pensais fragiles vont se renforcer et tu vas sentir la sincérité et la loyauté autour de toi.",
        "Un ami va te surprendre par sa générosité ou son soutien. Tu comprendras que les relations véritables se révèlent dans les moments importants et que tu peux compter sur elles.",
        "Cette semaine, tu auras l’occasion de montrer à tes proches combien leur amitié compte pour toi. Un geste ou une parole va solidifier un lien précieux."
        ],
        "oracle.wheel.friendship.title.2": "💬 Conversation clé",
        "oracle.wheel.friendship.message.2": [
        "Une discussion importante va éclairer une situation délicate avec un ami. Tu comprendras mieux les autres et tu sauras comment agir avec plus de clarté et d’empathie.",
        "Tu vas recevoir des conseils précieux d’une personne de confiance. Écoute attentivement, cela peut changer la manière dont tu gères certaines relations.",
        "Une conversation inattendue va t’apporter un nouvel éclairage sur une amitié. Tu verras que le dialogue ouvert est la clé pour résoudre les malentendus et renforcer les liens."
        ],
        "oracle.wheel.friendship.title.3": "🌟 Nouvelle rencontre",
        "oracle.wheel.friendship.message.3": [
        "Une nouvelle personne va entrer dans ta vie et pourrait devenir un ami précieux. Reste ouvert et attentif, car cette rencontre pourrait changer positivement ton cercle social.",
        "Tu vas croiser quelqu’un qui partage tes valeurs et tes centres d’intérêt. Une belle amitié pourrait naître de cette rencontre inattendue.",
        "Un lien fort et sincère peut se créer avec quelqu’un que tu n’aurais pas imaginé. Ne ferme pas ton cœur et laisse cette relation évoluer naturellement."
        ],
        "oracle.wheel.friendship.title.4": "⚡ Résolution de conflit",
        "oracle.wheel.friendship.message.4": [
        "Un malentendu ou une dispute passée va se résoudre. Tu vas pouvoir parler franchement et clarifier les choses, ce qui renforcera l’amitié et apportera une grande sérénité.",
        "Tu auras l’occasion de réparer un lien fragile et de montrer que tu tiens à tes amis. Cette démarche apportera plus de confiance et de complicité que jamais.",
        "Une situation délicate va se transformer en une occasion de rapprochement. Tu verras que parfois, les conflits sont des tremplins pour des amitiés plus solides."
        ],
        "oracle.wheel.mystery.title.1": "❓ Surprise totale",
        "oracle.wheel.mystery.message.1": [
        "Tu vas te retrouver face à une situation inattendue qui va te secouer. Garde ton sang-froid et observe attentivement, car ce qui semble chaotique peut t’apporter une grande leçon.",
        "Un événement improbable va bouleverser ta journée. Ce qui semble être un problème pourrait se transformer en une opportunité incroyable si tu sais l’accueillir.",
        "Quelque chose de complètement inattendu va frapper à ta porte. Sois prêt à improviser et à t’adapter, car la surprise pourrait changer ta perspective sur ta vie."
        ],
        "oracle.wheel.mystery.title.2": "💥 Choc imminent",
        "oracle.wheel.mystery.message.2": [
        "Tu vas découvrir un secret ou une vérité qui te surprendra profondément. Ce choc peut être difficile à digérer, mais il t’aidera à avancer plus fort et plus conscient.",
        "Une révélation inattendue va chambouler ton quotidien. Ne panique pas : ce bouleversement contient une leçon précieuse que tu devras saisir rapidement.",
        "Prépare-toi à voir les choses sous un autre angle. Ce qui semblait stable va se fissurer, et c’est exactement ce qui te permettra de voir de nouvelles opportunités."
        ],
        "oracle.wheel.mystery.title.3": "🌪 Tempête",
        "oracle.wheel.mystery.message.3": [
        "Tu vas vivre un moment chaotique où tout semble partir en vrille. Reste calme et observe : souvent, c’est dans le chaos que se créent les changements positifs les plus inattendus.",
        "Un enchaînement de petits imprévus va te surprendre. Plutôt que de lutter, laisse-toi porter : tu découvriras que chaque complication peut t’apporter un cadeau caché.",
        "La vie va te pousser hors de ta zone de confort. Ce tumulte est nécessaire pour que tu puisses évoluer et découvrir une nouvelle facette de toi-même."
        ],
        "oracle.wheel.mystery.title.4": "🌀 Destin incertain",
        "oracle.wheel.mystery.message.4": [
        "Tu vas te retrouver à un carrefour où tes choix auront un impact inattendu. Ne te précipite pas : réfléchis et fais confiance à ton instinct pour décider de la meilleure direction.",
        "Un événement mystérieux va te forcer à remettre en question tes certitudes. Accepte l’incertitude et utilise-la pour apprendre et grandir.",
        "Le destin va te jouer un tour inattendu, te mettant face à des situations que tu n’avais pas imaginées. Embrasse l’inconnu : c’est là que se cachent les plus grandes opportunités."
        ],
        
    "oracle.backToOracles": "Retour aux oracles",

    // Common
    "common.back": "Retour",
    "common.home": "Accueil",
    "common.language": "Langue",
  },

  en: {
    // Landing Page
    "landing.title": "TarotMystik",
    "landing.subtitle":
      "Discover the mysteries of your destiny through cards, stars and ancient wisdom",
    "landing.enter": "ENTER",
    "landing.ads.support": "Ads help us keep the app free",

    // 🆕 Disclaimer - ADD HERE
    "disclaimer.title": "Important Disclaimer",
      "disclaimer.text": "TarotMystik is an entertainment and personal development application. Consult qualified experts for any important decisions.",
      "disclaimer.note": "By continuing, you agree to use this app for entertainment purposes only.",
      "disclaimer.accept": "I Understand",
      "disclaimer.legal": "This app is compliant with GDPR.",

    //Avis Playstore
     "rating.title": "Enjoying TarotMystik?",
      "rating.subtitle": "Your feedback means the world to us! Take a moment to rate the app.",
      "rating.thanksGood": "Thank you! Your review helps us a lot 🌟",
      "rating.feedback": "Thank you for your feedback. How can we improve your experience?",
      "rating.rate": "Rate the app",
      "rating.later": "Maybe later",
      "rating.never": "Don't ask again",

    // No-repeat system
    "system.antirepeat.loading": "Cards are shuffling...",
    "system.antirepeat.active": "Anti-repeat system active",
    "system.cards.refreshed": "New cards available",

    // Name Page
    "name.title": "First Name",
    "name.subtitle":
      "How would you like to be called? Enter your name or nickname",
    "name.placeholder": "Enter your name",
    "name.next": "NEXT",

    // Date Page
    "date.title": "Birth Date",
    "date.subtitle":
      "Reveal your astrological sign for a personalized divination",
    "date.day": "Day",
    "date.month": "Month",
    "date.year": "Year",
    "date.next": "NEXT",
    "date.months.1": "January",
    "date.months.2": "February",
    "date.months.3": "March",
    "date.months.4": "April",
    "date.months.5": "May",
    "date.months.6": "June",
    "date.months.7": "July",
    "date.months.8": "August",
    "date.months.9": "September",
    "date.months.10": "October",
    "date.months.11": "November",
    "date.months.12": "December",

    // Gender Page
    "gender.title": "Gender",
    "gender.subtitle": "Enter your gender to provide context to the AI",
    "gender.male": "Male",
    "gender.female": "Female",
    "gender.other": "Other",
    "gender.next": "START",
    "gender.back": "BACK",

    //Barre de navigation EN
      "menu.open": "Open menu",
      "profile.open": "Open profile",
      "profile.birthdate": "Birthdate",
      "profile.gender": "Gender",
      "profile.zodiac": "Zodiac sign",
      "profile.edit": "Edit my profile",
      "profile.edit.title": "Edit my profile",
      "profile.edit.subtitle": "Update your personal information",
      "profile.edit.error": "Please fill out all fields",
      "premium.active": "Active",
      "locale": "en-US",
      "common.cancel": "Cancel",
      "common.save": "Save",
      "name.label": "Name",

    // Zodiac signs names
    "zodiac.signs.aries": "Aries",
    "zodiac.signs.taurus": "Taurus",
    "zodiac.signs.gemini": "Gemini",
    "zodiac.signs.cancer": "Cancer",
    "zodiac.signs.leo": "Leo",
    "zodiac.signs.virgo": "Virgo",
    "zodiac.signs.libra": "Libra",
    "zodiac.signs.scorpio": "Scorpio",
    "zodiac.signs.sagittarius": "Sagittarius",
    "zodiac.signs.capricorn": "Capricorn",
    "zodiac.signs.aquarius": "Aquarius",
    "zodiac.signs.pisces": "Pisces",

    // EN Notifications
    "notification.channel.name": "Daily Guidance",
    "notification.channel.description": "Notifications for your mystical oracle of the day",
    "notification.variants.1.title": "💘 The Love Oracle is calling",
    "notification.variants.1.body": "Discover what the cards reveal about your love life today!",
    "notification.variants.2.title": "🌙 The Moon illuminates your path",
    "notification.variants.2.body": "Consult the Lunar Oracle to know today's energies",
    "notification.variants.3.title": "🔮 Azraël the Seer awaits you",
    "notification.variants.3.body": "The great wizard has revelations for you today",
    "notification.variants.4.title": "✦ The Wheel of Destiny turns",
    "notification.variants.4.body": "Discover what mystical fate awaits you this day",
    "notification.variants.5.title": "✨ TarotMystik guides you",
    "notification.variants.5.body": "Your daily oracles are ready: love, destiny and mysteries await",
    "notification.modal.title": "Daily Guidance",
    "notification.modal.description": "Receive a mystical reminder every day at 10am to discover your personalized oracles and revelations",
    "notification.modal.benefit1": "Personalized daily oracle",
    "notification.modal.benefit2": "Guidance in love, destiny and mysteries",
    "notification.modal.benefit3": "Never miss your daily revelation",
    "notification.modal.accept": "Enable notifications",
    "notification.modal.decline": "No thanks",
    "notification.modal.note": "You can change this choice in settings",

    // Oracle Selection
    "oracle.welcome": "Welcome {name}!",
    "oracle.subtitle": "Discover the secrets of your destiny",
    "oracle.daily.title": "Daily Card Reading",
    "oracle.daily.description": "One card to guide and inspire you today",
    "oracle.horoscope.title": "Horoscope",
    "oracle.horoscope.description":
      "Discover what the stars have in store for you today according to your sign",
    "oracle.tarot.title": "Tarot",
    "oracle.tarot.description":
      "The 22 Major Arcana reveal the mysteries of your destiny",
    "oracle.angels.title": "Angel Oracle",
    "oracle.angels.description":
      "Connect with your angelic guides to receive their messages of love",
    "oracle.runes.title": "Nordic Runes",
    "oracle.runes.description":
      "The ancient wisdom of the Vikings reveals your path of war and victory",
    "oracle.back": "BACK",
    "oracle.home": "Home",
    "oracle.selection.title": "Choose Your Oracle",

    // Card Game
    "cardgame.back": "Back",
    "cardgame.daily.instruction": "Choose 1 card for your daily advice",
    "cardgame.reading.instruction":
      "Choose 3 cards to shed light on your destiny",
    "cardgame.selected": "Selected cards: {current}/{max}",
    "cardgame.page": "Page {current} of {total}",
    "cardgame.previous": "Previous",
    "cardgame.next": "Next",
    "cardgame.reveal": "REVEAL CARDS",
    "cardgame.daily.choose": "Choose the card that calls to you",

    // CardGame - Modal de révélation
    "cardgame.cardRevealed": "Card revealed",
    "cardgame.continue": "Continue",
    "cardgame.seeInterpretation": "See the interpretation",

    // Revelation - Loading
    "revelation.loading.title": "Interpreting...",
    "revelation.loading.daily": "The stars reveal your daily oracle, {name}",
    "revelation.loading.reading": "The cards unveil their mystical secrets, {name}",
    "revelation.loading.mysticMessage": "The stars are aligning for you...",

    // Revelation Page
    "revelation.positions.daily": "Daily Advice",
    "revelation.positions.past": "Card 1",
    "revelation.positions.present": "Card 2",
    "revelation.positions.future": "Card 3",
    "revelation.summary.title": "What your cards reveal",
    "revelation.newConsultation": "New consultation",
    "revelation.title.daily": "Your Daily Advice",
    "revelation.title.reading": "Your Reading - {oracle}",
    "revelation.instruction.daily":
      "Click on your card to reveal today's message",
    "revelation.instruction.reading":
      "Click on each card to reveal your destiny",
    "revelation.flipCard.reveal": "Touch to reveal",
    "revelation.summary.seeMore": "See more ↓",
    "revelation.summary.seeLess": "See less ↑",
    "revelation.revealButton": "Revelation",
    "revelation.backToSelection": "Back to Selection",
    "interpretation.advice.title": "Your personal advice",
    "revelation.subtitle.revealed": "Contemplate your revealed cards",
    "revelation.summary.subtitle": "The main energies of your reading",

    // Interpretation Templates
    "interpretation.gender.femme": "My dear",
    "interpretation.gender.homme": "My dear",
    "interpretation.gender.autre": "Dear soul",
    "interpretation.daily.greeting":
      "Hello {name}! Here is your advice for this beautiful day.",
    "interpretation.daily.zodiac": "As a {zodiacSign}, ",
    "interpretation.daily.cardMessage":
      'the card "{cardName}" has a special energy for you today.',
    "interpretation.daily.wisdom":
      "As a {zodiacSign}, you have the wisdom to use this advice well. Trust your instinct and let this positive energy guide your actions today.",
    "interpretation.daily.closing":
      "Have a good day {genderText} {name}, and may the stars light your path!",
    "interpretation.tarot.greeting":
      "Hi {name}! Your Tarot reading tells me interesting things.",
    "interpretation.tarot.past":
      "{cardName} in your past shows that you have lived moments that really made you grow. It wasn't always easy, but it made you stronger.",
    "interpretation.tarot.present":
      "Right now, {cardName} influences your life positively. You are in a period where things are moving, and that's a good sign for what's ahead.",
    "interpretation.tarot.future":
      "For your future, {cardName} announces beautiful things! You can expect happy changes that will bring you satisfaction.",
    "interpretation.tarot.advice":
      "My advice: {name}, with your character as a {zodiacSign}, trust your instinct. You have everything it takes to succeed!",
    "interpretation.angels.greeting":
      "Hello {name}! Your guardian angels have luminous revelations to share with you.",
    "interpretation.angels.past":
      "Throughout your past journey, {cardName} has planted divine seeds: {cardMeaning}. These blessings have nourished your soul and prepared you to receive the unconditional love that surrounds you now.",
    "interpretation.angels.present":
      "In this precise moment, {cardName} illuminates your present: {cardMeaning}. This celestial light guides each of your steps and transforms your challenges into opportunities for spiritual growth.",
    "interpretation.angels.future":
      "Towards your radiant future, {cardName} spreads its protective wings: {cardMeaning}. The gates of heaven open before you, revealing a path paved with miracles and synchronicities.",
    "interpretation.angels.message":
      "Angelic transmission: {genderText} {name}, your essence as {zodiacSign} vibrates in harmony with these divine frequencies. Let your heart open to these messages of pure love and remain receptive to the signs your guides send you!",
    "interpretation.runes.greeting":
      "Hail {name}! The ancient Nordic runes reveal the secrets of your warrior destiny.",
    "interpretation.runes.past":
      "Your past rune, {cardName}, reveals: {cardMeaning}. These primal forces have shaped your character through fire and ice, preparing you for today's challenges with ancient wisdom.",
    "interpretation.runes.present":
      "Right now, {cardName} guides your steps: {cardMeaning}. This runic energy illuminates your current path, connecting you to the mystical forces governing your daily life.",
    "interpretation.runes.future":
      "Toward the future, {cardName} announces: {cardMeaning}. This runic prophecy traces the path of your future achievements, where you will shine victorious under the Norse gods' aegis.",
    "interpretation.runes.advice":
      "Remember, {genderText} {name}: as a {zodiacSign}, you carry the Viking legacy in your blood. The runes have spoken - follow their guidance with courage and determination!",
    "interpretation.fallback.zodiac": "intuitive person",
    "interpretation.fallback.angels": "luminous being",
    "interpretation.fallback.runes": "fighter",
    "interpretation.title.daily": "Interpretation for {name}",
    "interpretation.title.reading": "Card reading for {name}",
    "interpretation.subtitle": "Here is your personalized revelation",

    "interpretation.backToCards": "Back to cards",
    "interpretation.newConsultation": "New consultation",

    // Love Calculator
        // Love Calculator
        "loveCalculator.name1Label": "First Name",
        "loveCalculator.name1Placeholder": "Ex: Marie",
        "loveCalculator.name2Label": "Second Name",
        "loveCalculator.name2Placeholder": "Ex: Lucas",
        "loveCalculator.calculateButton": "Calculate Compatibility",
        "loveCalculator.calculating": "Analyzing compatibility...",
        "loveCalculator.newCalculation": "New Calculation",
        "loveCalculator.note": "The score stays the same for the same pair of names… but changes every day! Come back tomorrow! ⚠️ This calculator is for entertainment purposes only, your results are purely for fun!",
        "loveCalculator.dailyMode": "Daily Mode",
        "loveCalculator.dailyModeDesc": "The percentage changes every day!",
        "loveCalculator.standardMode": "Standard Mode",
        "loveCalculator.standardModeDesc": "Fixed and permanent result",
        "oracle.loveCalculator.badge": "NEW",
        "oracle.loveCalculator.description": "Calculates compatibility between two names",
        "loveCalculator.error": "Please enter both names.",
        "loveCalculator.dayScore": "Today's Reading",
        "loveCalculator.dayAdvice": "Advice of the Day",
        "loveCalculator.title": "Today's Compatibility",
        "oracle.loveCalculator.title": "Today's Compatibility",
        "loveCalculator.subtitle": "Discover every day the compatibility between two names — in love or friendship.",
        "loveCalculator.today": "Today",
        "loveCalculator.changeMode": "Change Mode",
        "loveCalculator.back": "Back",
        "loveCalculator.mode.subtitle": "Energies are interpreted differently depending on the bond between you.",
        "loveCalculator.mode.love": "Love",
        "loveCalculator.mode.love.subtitle": "Romantic connection",
        "loveCalculator.mode.friendship": "Friendship",
        "loveCalculator.mode.friendship.subtitle": "Friendship bond",
        "loveCalculator.mode.calculateButton": "Reveal Today's Compatibility",
        "loveCalculator.modeLabel.love": "Love",
        "loveCalculator.modeLabel.friendship": "Friendship",
        "loveCalculator.separator.love": "and",
        "loveCalculator.separator.friendship": "and",
        "loveCalculator.dateFormat.weekday": "long",
        "loveCalculator.dateFormat.day": "numeric",
        "loveCalculator.dateFormat.month": "long",
        "loveCalculator.day.sun": "Sunday",
        "loveCalculator.day.mon": "Monday",
        "loveCalculator.day.tue": "Tuesday",
        "loveCalculator.day.wed": "Wednesday",
        "loveCalculator.day.thu": "Thursday",
        "loveCalculator.day.fri": "Friday",
        "loveCalculator.day.sat": "Saturday",
        "loveCalculator.month.jan": "January",
        "loveCalculator.month.feb": "February",
        "loveCalculator.month.mar": "March",
        "loveCalculator.month.apr": "April",
        "loveCalculator.month.may": "May",
        "loveCalculator.month.jun": "June",
        "loveCalculator.month.jul": "July",
        "loveCalculator.month.aug": "August",
        "loveCalculator.month.sep": "September",
        "loveCalculator.month.oct": "October",
        "loveCalculator.month.nov": "November",
        "loveCalculator.month.dec": "December",

        // ── LOVE MODE RESULTS ───────────────────────────────────────────────────
        // Titles
        "loveCalculator.love.results.incompatible.title": "Opposing Energies",
        "loveCalculator.love.results.veryWeak.title": "Weak Signal",
        "loveCalculator.love.results.weak.title": "Shy Connection",
        "loveCalculator.love.results.lowModerate.title": "Mixed Energy",
        "loveCalculator.love.results.moderate.title": "Uncertain Spark",
        "loveCalculator.love.results.goodStart.title": "Nice Day",
        "loveCalculator.love.results.promising.title": "Promising Day",
        "loveCalculator.love.results.strong.title": "Strong Resonance",
        "loveCalculator.love.results.exceptional.title": "Rare Alignment",
        "loveCalculator.love.results.perfect.title": "Exceptional Day",
        
        // Messages — Incompatible (25–39%)
        "loveCalculator.love.results.incompatible.message1": "Today, your energies are pulling in very different directions. It's not the best day to force a connection between you.",
        "loveCalculator.love.results.incompatible.message2": "Today's vibrations do not favor romantic harmony between these two names. It's better to give space and let things breathe.",
        "loveCalculator.love.results.incompatible.message3": "This day does not carry the right frequencies for this romantic duo. Exchanges may feel strained and lack flow.",
        "loveCalculator.love.results.incompatible.message4": "Today's alignment is not favorable for this connection. No visible romantic spark in today's energies.",
        "loveCalculator.love.results.incompatible.message5": "Today's stars point toward separate paths for this duo. It's a day to spend apart.",
        "loveCalculator.love.results.incompatible.message6": "This day does not create common ground between these two romantic energies. Nothing is blocked — tomorrow can change everything.",
        // Advice — Incompatible
        "loveCalculator.love.results.incompatible.advice1": "Use this day to focus on yourselves individually. Stay in your own energy and reassess tomorrow.",
        "loveCalculator.love.results.incompatible.advice2": "This is not the day to push emotional conversations or make decisions together.",
        "loveCalculator.love.results.incompatible.advice3": "Give each other space today. Tomorrow's energies may surprise you.",

        // Messages — Very Weak (40–49%)
        "loveCalculator.love.results.veryWeak.message1": "Today, the romantic connection between these two names is subtle. It will take effort to get on the same wavelength.",
        "loveCalculator.love.results.veryWeak.message2": "Today's energies barely meet on the romantic side. Not a bad day, but it lacks momentum.",
        "loveCalculator.love.results.veryWeak.message3": "The romantic signal between your two worlds is weak today. Nothing irreversible, but not your strongest day together.",
        "loveCalculator.love.results.veryWeak.message4": "This day does not naturally amplify your romantic affinities. The connection exists, but remains quiet.",
        "loveCalculator.love.results.veryWeak.message5": "Your frequencies don’t overlap much today in matters of the heart. Keep expectations light.",
        "loveCalculator.love.results.veryWeak.message6": "Today, the romantic current flows with difficulty between your energies. Tomorrow could shift things.",
        // Advice — Very Weak
        "loveCalculator.love.results.veryWeak.advice1": "Keep interactions simple and pressure-free today. No need for big declarations.",
        "loveCalculator.love.results.veryWeak.advice2": "A calm day together is enough. No need to expect more today.",
        "loveCalculator.love.results.veryWeak.advice3": "Come back tomorrow — energies renew, and the next reading may be very different.",

        // Messages — Weak (50–54%)
        "loveCalculator.love.results.weak.message1": "Today, the romantic flame is lit but small. There’s something there, but it’s not burning strongly yet.",
        "loveCalculator.love.results.weak.message2": "This day brings a light romantic connection between you. The foundation exists, but energy hasn’t fully taken off.",
        "loveCalculator.love.results.weak.message3": "The day creates a fragile romantic link between these two names. Some nice moments are possible, without great intensity.",
        "loveCalculator.love.results.weak.message4": "Today's vibrations are gentle but not very intense romantically. A pleasant day, but not memorable.",
        "loveCalculator.love.results.weak.message5": "This day offers a neutral emotional backdrop. Nothing strong, but nothing negative either.",
        "loveCalculator.love.results.weak.message6": "Today, your romantic energies meet without fully merging. The connection is there, quietly.",
        // Advice — Weak
        "loveCalculator.love.results.weak.advice1": "It’s a good day for small, tender gestures. No need to overdo it.",
        "loveCalculator.love.results.weak.advice2": "Enjoy calm moments together without chasing intensity. This day is about softness.",
        "loveCalculator.love.results.weak.advice3": "Observe how energies evolve daily — tomorrow may bring more spark.",

        // Messages — Low Moderate (55–59%)
        "loveCalculator.love.results.lowModerate.message1": "Today blends compatible and less compatible romantic frequencies. You can connect, but it takes adjustment.",
        "loveCalculator.love.results.lowModerate.message2": "Today, things work in waves between you emotionally. Some moments flow, others feel rough.",
        "loveCalculator.love.results.lowModerate.message3": "Today's energies create an uneven romantic compatibility. Nothing overwhelming, just some navigation required.",
        "loveCalculator.love.results.lowModerate.message4": "This day offers a half-favorable romantic ground. Connection is possible, but needs effort.",
        "loveCalculator.love.results.lowModerate.message5": "Today's vibrations are mixed for this duo. Take the best moments and let the rest pass.",
        "loveCalculator.love.results.lowModerate.message6": "Today brings both openings and friction. Stay flexible and avoid rigid expectations.",
        // Advice — Low Moderate
        "loveCalculator.love.results.lowModerate.advice1": "Approach the day without emotional pressure. Let things flow naturally.",
        "loveCalculator.love.results.lowModerate.advice2": "If tension appears, don’t dramatize — it’s just today’s energy.",
        "loveCalculator.love.results.lowModerate.advice3": "Choose simple, enjoyable activities over deep conversations.",

        // Messages — Moderate (60–64%)
        "loveCalculator.love.results.moderate.message1": "There’s something in the air today between you. Not certain yet, but worth exploring.",
        "loveCalculator.love.results.moderate.message2": "Today carries an ambivalent romantic energy. Potential is there, but hesitant.",
        "loveCalculator.love.results.moderate.message3": "Your romantic frequencies come closer without fully aligning. A day to observe.",
        "loveCalculator.love.results.moderate.message4": "Today's stars are divided about your duo. Something flows, but remains unclear.",
        "loveCalculator.love.results.moderate.message5": "The day creates a light tension between attraction and distance.",
        "loveCalculator.love.results.moderate.message6": "Today plays with your romantic energies without stabilizing them.",
        // Advice — Moderate
        "loveCalculator.love.results.moderate.advice1": "Be present without overanalyzing.",
        "loveCalculator.love.results.moderate.advice2": "Listen more than speak.",
        "loveCalculator.love.results.moderate.advice3": "Don’t draw conclusions from one day.",

        // Messages — Good Start (65–69%)
        "loveCalculator.love.results.goodStart.message1": "Today, your romantic energies align naturally. A smooth and pleasant day.",
        "loveCalculator.love.results.goodStart.message2": "This day creates a beautiful romantic harmony.",
        "loveCalculator.love.results.goodStart.message3": "Today's vibrations support emotional understanding.",
        "loveCalculator.love.results.goodStart.message4": "The emotional ground is favorable today.",
        "loveCalculator.love.results.goodStart.message5": "A shared romantic energy flows nicely.",
        "loveCalculator.love.results.goodStart.message6": "Your frequencies align harmoniously today.",
        // Advice — Good Start
        "loveCalculator.love.results.goodStart.advice1": "Enjoy a simple moment together.",
        "loveCalculator.love.results.goodStart.advice2": "Great day for a spontaneous gesture.",
        "loveCalculator.love.results.goodStart.advice3": "Check back tomorrow.",

        // Messages — Promising (70–79%)
        "loveCalculator.love.results.promising.message1": "A real romantic connection shines today.",
        "loveCalculator.love.results.promising.message2": "Today amplifies your romantic bond.",
        "loveCalculator.love.results.promising.message3": "You are on the same wavelength today.",
        "loveCalculator.love.results.promising.message4": "Your energies resonate well together.",
        "loveCalculator.love.results.promising.message5": "A beautiful romantic chemistry is present.",
        "loveCalculator.love.results.promising.message6": "Today's energy works in your favor.",
        // Advice — Promising
        "loveCalculator.love.results.promising.advice1": "Do something special today.",
        "loveCalculator.love.results.promising.advice2": "Express your feelings.",
        "loveCalculator.love.results.promising.advice3": "Fully enjoy this energy.",

        // Messages — Strong (80–89%)
        "loveCalculator.love.results.strong.message1": "Today, your romantic energies resonate powerfully.",
        "loveCalculator.love.results.strong.message2": "This day is highly favorable for your duo.",
        "loveCalculator.love.results.strong.message3": "Everything you do together is amplified.",
        "loveCalculator.love.results.strong.message4": "Your romantic bond feels alive today.",
        "loveCalculator.love.results.strong.message5": "A rare depth is reached.",
        "loveCalculator.love.results.strong.message6": "Perfect harmony defines today.",
        // Advice — Strong
        "loveCalculator.love.results.strong.advice1": "Make the most of this day.",
        "loveCalculator.love.results.strong.advice2": "Share something memorable.",
        "loveCalculator.love.results.strong.advice3": "Acknowledge this connection.",

        // Messages — Exceptional (90–94%)
        "loveCalculator.love.results.exceptional.message1": "Today brings a rare romantic alignment.",
        "loveCalculator.love.results.exceptional.message2": "Near-perfect harmony surrounds you.",
        "loveCalculator.love.results.exceptional.message3": "A rare fusion occurs today.",
        "loveCalculator.love.results.exceptional.message4": "Something unusual flows between you.",
        "loveCalculator.love.results.exceptional.message5": "An exceptional romantic energy is present.",
        "loveCalculator.love.results.exceptional.message6": "This day is truly unique.",
        // Advice — Exceptional
        "loveCalculator.love.results.exceptional.advice1": "Live this day fully.",
        "loveCalculator.love.results.exceptional.advice2": "Create a memory.",
        "loveCalculator.love.results.exceptional.advice3": "Today was special — tomorrow changes.",

        // Messages — Perfect (95–98%)
        "loveCalculator.love.results.perfect.message1": "Today is one of the rarest days for your duo.",
        "loveCalculator.love.results.perfect.message2": "This is the peak of romantic alignment.",
        "loveCalculator.love.results.perfect.message3": "A near-mystical fusion is present.",
        "loveCalculator.love.results.perfect.message4": "Everything is aligned for your love.",
        "loveCalculator.love.results.perfect.message5": "An absolute romantic connection defines today.",
        "loveCalculator.love.results.perfect.message6": "Maximum romantic energy surrounds you.",
        // Advice — Perfect
        "loveCalculator.love.results.perfect.advice1": "Make this day unforgettable.",
        "loveCalculator.love.results.perfect.advice2": "Be fully present.",
        "loveCalculator.love.results.perfect.advice3": "This energy is unique — tomorrow will differ.",

        // ── FRIENDSHIP MODE RESULTS ──────────────────────────────────────────────────
        // Titles
        "loveCalculator.friendship.results.incompatible.title": "Distant Frequencies",
        "loveCalculator.friendship.results.veryWeak.title": "Subtle Bond",
        "loveCalculator.friendship.results.weak.title": "Light Connection",
        "loveCalculator.friendship.results.lowModerate.title": "Mixed Ground",
        "loveCalculator.friendship.results.moderate.title": "Hesitant Complicity",
        "loveCalculator.friendship.results.goodStart.title": "Great Harmony",
        "loveCalculator.friendship.results.promising.title": "Radiant Friendship",
        "loveCalculator.friendship.results.strong.title": "Strong Bond",
        "loveCalculator.friendship.results.exceptional.title": "Rare Connection",
        "loveCalculator.friendship.results.perfect.title": "Exceptional Friends",

        // Messages — Incompatible friendship (25–39%)
        "loveCalculator.friendship.results.incompatible.message1": "Today, your friendship energies are pulling in opposite directions. It’s not the best day to force shared activities.",
        "loveCalculator.friendship.results.incompatible.message2": "Today's vibrations don’t support bonding between these two names. Everyone in their own bubble today.",
        "loveCalculator.friendship.results.incompatible.message3": "This day doesn’t create common ground for this duo of friends. No worries — tomorrow reshuffles everything.",
        "loveCalculator.friendship.results.incompatible.message4": "Today’s alignment isn’t favorable for your connection. Avoid making plans together today.",
        "loveCalculator.friendship.results.incompatible.message5": "The stars today separate your energies. A day for solo activities.",
        "loveCalculator.friendship.results.incompatible.message6": "Today, your friendship frequencies don’t meet. Don’t worry — it’s not permanent.",
        // Advice — Incompatible friendship
        "loveCalculator.friendship.results.incompatible.advice1": "Spend the day on your own. A little space can sometimes strengthen a friendship.",
        "loveCalculator.friendship.results.incompatible.advice2": "Avoid making important decisions together today. The timing isn’t right.",
        "loveCalculator.friendship.results.incompatible.advice3": "Come back tomorrow — friendship energy resets daily.",

        // Messages — Very Weak friendship (40–49%)
        "loveCalculator.friendship.results.veryWeak.message1": "Today, the friendship between these two names is subtle. No spark, but nothing negative either.",
        "loveCalculator.friendship.results.veryWeak.message2": "Today’s energies barely meet on the friendship side. A calm day where each goes their own way.",
        "loveCalculator.friendship.results.veryWeak.message3": "This day doesn’t naturally boost your bond. The connection exists, but stays quiet.",
        "loveCalculator.friendship.results.veryWeak.message4": "Your friendship frequencies don’t overlap much today. Keep expectations light.",
        "loveCalculator.friendship.results.veryWeak.message5": "Today, the friendly flow is gentle. Nothing strong, but no conflict either.",
        "loveCalculator.friendship.results.veryWeak.message6": "This day puts your friendship on standby. Not ideal for big outings.",
        // Advice — Very Weak friendship
        "loveCalculator.friendship.results.veryWeak.advice1": "Spending the day apart is fine. Friendship doesn’t need daily effort.",
        "loveCalculator.friendship.results.veryWeak.advice2": "If you meet, keep things light and simple.",
        "loveCalculator.friendship.results.veryWeak.advice3": "Come back tomorrow — friendship energies shift daily.",

        // Messages — Weak friendship (50–54%)
        "loveCalculator.friendship.results.weak.message1": "Today, a light friendship connection appears. Nothing intense, but pleasant.",
        "loveCalculator.friendship.results.weak.message2": "This day brings a soft friendly energy between you. Nice moments are possible without excitement.",
        "loveCalculator.friendship.results.weak.message3": "Today’s vibrations are neutral for your friendship. An ordinary day, no bad surprises.",
        "loveCalculator.friendship.results.weak.message4": "Your bond is present but quiet today. A coffee or message is enough to maintain it.",
        "loveCalculator.friendship.results.weak.message5": "A calm backdrop for your friendship today. Nothing big, but comfortable.",
        "loveCalculator.friendship.results.weak.message6": "Your energies meet pleasantly today. A day for simple shared moments.",
        // Advice — Weak friendship
        "loveCalculator.friendship.results.weak.advice1": "A quick message or call is enough today.",
        "loveCalculator.friendship.results.weak.advice2": "Keep things simple if you meet — no big plans needed.",
        "loveCalculator.friendship.results.weak.advice3": "A good day for small thoughtful gestures.",

        // Messages — Low Moderate friendship (55–59%)
        "loveCalculator.friendship.results.lowModerate.message1": "Today mixes positive and less positive friendship energies. You can connect, but there may be small friction.",
        "loveCalculator.friendship.results.lowModerate.message2": "Today, your bond works in waves. Some moments flow, others less so.",
        "loveCalculator.friendship.results.lowModerate.message3": "The day creates a mixed friendship atmosphere. Nothing serious, just stay flexible.",
        "loveCalculator.friendship.results.lowModerate.message4": "The ground is partly favorable. It can work if you avoid rigid expectations.",
        "loveCalculator.friendship.results.lowModerate.message5": "Today’s vibrations are nuanced. Take the best and let go of the rest.",
        "loveCalculator.friendship.results.lowModerate.message6": "There are openings and slight frictions. Stay adaptable.",
        // Advice — Low Moderate friendship
        "loveCalculator.friendship.results.lowModerate.advice1": "Approach the day without pressure and avoid sensitive topics.",
        "loveCalculator.friendship.results.lowModerate.advice2": "If tension appears, shift the mood or activity.",
        "loveCalculator.friendship.results.lowModerate.advice3": "Choose light activities over deep talks.",

        // Messages — Moderate friendship (60–64%)
        "loveCalculator.friendship.results.moderate.message1": "There’s something in the air today between you. The bond is there, just finding its flow.",
        "loveCalculator.friendship.results.moderate.message2": "Today brings an ambivalent friendship energy. There’s potential, but it’s hesitant.",
        "loveCalculator.friendship.results.moderate.message3": "Your frequencies come closer without fully aligning. A day to observe.",
        "loveCalculator.friendship.results.moderate.message4": "The stars are divided about your friendship today. Something is there, but unclear.",
        "loveCalculator.friendship.results.moderate.message5": "A slight hesitation affects your bond today. Nothing to worry about.",
        "loveCalculator.friendship.results.moderate.message6": "This day plays with your energies without stabilizing them.",
        // Advice — Moderate friendship
        "loveCalculator.friendship.results.moderate.advice1": "Be open without forcing connection.",
        "loveCalculator.friendship.results.moderate.advice2": "Listen more than you speak.",
        "loveCalculator.friendship.results.moderate.advice3": "Don’t draw conclusions from one day.",

        // Messages — Good Start friendship (65–69%)
        "loveCalculator.friendship.results.goodStart.message1": "Today, your friendship energies align naturally. A smooth and pleasant day.",
        "loveCalculator.friendship.results.goodStart.message2": "A beautiful harmony forms between you.",
        "loveCalculator.friendship.results.goodStart.message3": "Today’s vibrations support your bond.",
        "loveCalculator.friendship.results.goodStart.message4": "The ground is favorable for your friendship.",
        "loveCalculator.friendship.results.goodStart.message5": "A shared friendly energy flows well.",
        "loveCalculator.friendship.results.goodStart.message6": "Your frequencies align harmoniously.",
        // Advice — Good Start friendship
        "loveCalculator.friendship.results.goodStart.advice1": "Enjoy a shared moment without planning too much.",
        "loveCalculator.friendship.results.goodStart.advice2": "Great day for a spontaneous outing or real talk.",
        "loveCalculator.friendship.results.goodStart.advice3": "Come back tomorrow to see how things evolve.",

        // Messages — Promising friendship (70–79%)
        "loveCalculator.friendship.results.promising.message1": "Today, a true friendship bond shines between you.",
        "loveCalculator.friendship.results.promising.message2": "This day strengthens your connection.",
        "loveCalculator.friendship.results.promising.message3": "You are on the same wavelength.",
        "loveCalculator.friendship.results.promising.message4": "Your energies resonate beautifully.",
        "loveCalculator.friendship.results.promising.message5": "A lovely chemistry is present.",
        "loveCalculator.friendship.results.promising.message6": "Today’s energy supports your friendship.",
        // Advice — Promising friendship
        "loveCalculator.friendship.results.promising.advice1": "Do something special together today.",
        "loveCalculator.friendship.results.promising.advice2": "Express what the other means to you.",
        "loveCalculator.friendship.results.promising.advice3": "Fully enjoy this shared energy.",

        // Messages — Strong friendship (80–89%)
        "loveCalculator.friendship.results.strong.message1": "Today, your friendship energies resonate powerfully. Everything flows naturally.",
        "loveCalculator.friendship.results.strong.message2": "A very favorable day for your bond.",
        "loveCalculator.friendship.results.strong.message3": "Everything you do together is amplified.",
        "loveCalculator.friendship.results.strong.message4": "Your connection feels alive today.",
        "loveCalculator.friendship.results.strong.message5": "Your exchanges reach rare depth.",
        "loveCalculator.friendship.results.strong.message6": "Perfect harmony defines today.",
        // Advice — Strong friendship
        "loveCalculator.friendship.results.strong.advice1": "Make the most of this day.",
        "loveCalculator.friendship.results.strong.advice2": "Share something memorable.",
        "loveCalculator.friendship.results.strong.advice3": "Acknowledge this strong bond.",

        // Messages — Exceptional friendship (90–94%)
        "loveCalculator.friendship.results.exceptional.message1": "Today brings a rare friendship alignment.",
        "loveCalculator.friendship.results.exceptional.message2": "Almost perfect harmony surrounds you.",
        "loveCalculator.friendship.results.exceptional.message3": "A rare fusion connects your worlds.",
        "loveCalculator.friendship.results.exceptional.message4": "Something unusual flows between you.",
        "loveCalculator.friendship.results.exceptional.message5": "An exceptional bond defines today.",
        "loveCalculator.friendship.results.exceptional.message6": "This day is truly unique.",
        // Advice — Exceptional friendship
        "loveCalculator.friendship.results.exceptional.advice1": "Live this day fully and freely.",
        "loveCalculator.friendship.results.exceptional.advice2": "Create a memory together.",
        "loveCalculator.friendship.results.exceptional.advice3": "Each day is different — today was special.",

        // Messages — Perfect friendship (95–98%)
        "loveCalculator.friendship.results.perfect.message1": "Today is one of the rarest days for your friendship. The universe seems aligned for you.",
        "loveCalculator.friendship.results.perfect.message2": "This is the peak of friendship alignment.",
        "loveCalculator.friendship.results.perfect.message3": "A near-mystical bond connects you today.",
        "loveCalculator.friendship.results.perfect.message4": "Everything is perfectly aligned for your connection.",
        "loveCalculator.friendship.results.perfect.message5": "An absolute friendship defines today.",
        "loveCalculator.friendship.results.perfect.message6": "Maximum energy surrounds your bond.",
        // Advice — Perfect friendship
        "loveCalculator.friendship.results.perfect.advice1": "Make this day unforgettable.",
        "loveCalculator.friendship.results.perfect.advice2": "Be fully present for each other.",
        "loveCalculator.friendship.results.perfect.advice3": "This energy is unique — tomorrow will be different.",

    //Variations for "Wisdom" tirage du jour
     "interpretation.daily.wisdom.var0": "Trust your instinct today. If it feels right, go for it!",
      "interpretation.daily.wisdom.var1": "You have everything you need to move forward. Believe in yourself and take action!",
      "interpretation.daily.wisdom.var2": "Don't complicate things. Make the decision that feels best and move forward!",
      "interpretation.daily.wisdom.var3": "Open your eyes and seize the opportunities that come your way, even the small ones.",
      "interpretation.daily.wisdom.var4": "Let yourself be guided by what you already know. You can handle this day.",
      "interpretation.daily.wisdom.var5": "Take the time to notice the details around you, they can help you decide.",
      "interpretation.daily.wisdom.var6": "Listen to what you feel. If something seems right, do it without hesitation!",
      "interpretation.daily.wisdom.var7": "Keep a clear head and an open heart. Good decisions often come from there.",
      "interpretation.daily.wisdom.var8": "Don't underestimate what you already know. You have the resources to move forward.",
      "interpretation.daily.wisdom.var9": "Stay alert to opportunities and make choices that bring you closer to your goals.",
      "interpretation.daily.wisdom.var10": "Focus on what matters to you. Don't let distractions get in your way.",
      "interpretation.daily.wisdom.var11": "Dare to move forward even if everything isn’t perfect. Just taking action makes a difference.",
      "interpretation.daily.wisdom.var12": "Accept that you can’t control everything. Do your best and that’s enough!",
      "interpretation.daily.wisdom.var13": "Don’t let fear stop you. You already have what it takes to succeed.",
      "interpretation.daily.wisdom.var14": "Be present and attentive today. Make your decisions, move forward, and don’t doubt yourself!",

    // Variations for "Have a good day"
    "interpretation.daily.closing.var1":
      "Have a great day {genderText} {name}, and may the stars light your path!",
    "interpretation.daily.closing.var2":
      "Wishing you a beautiful day {name}, may this guidance accompany you!",
    "interpretation.daily.closing.var3":
      "Enjoy your day {name}, the energies are with you!",
    "interpretation.daily.closing.var4":
      "Have a wonderful day {genderText} {name}!",
    "interpretation.daily.closing.var5":
      "May your day be gentle {name}, the universe is watching over you!",
    "interpretation.daily.closing.var6":
      "Have a bright day, {genderText} {name}, filled with wonderful surprises!",
    "interpretation.daily.closing.var7":
      "Have a great day, {name}, may positive energy accompany you every moment!",
    "interpretation.daily.closing.var8":
      "May this day bring you joy and serenity, {genderText} {name}!",
    "interpretation.daily.closing.var9":
      "Smile at life today, {name}, and it will smile back at you!",
    "interpretation.daily.closing.var10":
      "Have an inspiring day, {genderText} {name}, under the protection of the stars!",
    
    // Card Names and Meanings - Runes
    "cards.runes.Fehu.name": "Fehu",
    "cards.runes.Fehu.meaning": "Wealth, prosperity, new financial beginning",
    "cards.runes.Uruz.name": "Uruz",
    "cards.runes.Uruz.meaning": "Brute strength, health, transformation",
    "cards.runes.Thurisaz.name": "Thurisaz",
    "cards.runes.Thurisaz.meaning": "Defense, protection, destructive force",
    "cards.runes.Ansuz.name": "Ansuz",
    "cards.runes.Ansuz.meaning": "Divine communication, inspiration, wisdom",
    "cards.runes.Raidho.name": "Raidho",
    "cards.runes.Raidho.meaning": "Journey, movement, progression",
    "cards.runes.Kenaz.name": "Kenaz",
    "cards.runes.Kenaz.meaning": "Knowledge, creativity, illumination",
    "cards.runes.Gebo.name": "Gebo",
    "cards.runes.Gebo.meaning": "Gift, exchange, partnership",
    "cards.runes.Wunjo.name": "Wunjo",
    "cards.runes.Wunjo.meaning": "Joy, happiness, harmony",
    "cards.runes.Hagalaz.name": "Hagalaz",
    "cards.runes.Hagalaz.meaning": "Disruption, forced change, purification",
    "cards.runes.Nauthiz.name": "Nauthiz",
    "cards.runes.Nauthiz.meaning": "Necessity, constraint, karmic lesson",
    "cards.runes.Isa.name": "Isa",
    "cards.runes.Isa.meaning": "Ice, stagnation, patience",
    "cards.runes.Jera.name": "Jera",
    "cards.runes.Jera.meaning": "Harvest, cycles, reward",
    "cards.runes.Eihwaz.name": "Eihwaz",
    "cards.runes.Eihwaz.meaning": "Endurance, protection, spiritual connection",
    "cards.runes.Perthro.name": "Perthro",
    "cards.runes.Perthro.meaning": "Mystery, destiny, hidden forces",
    "cards.runes.Algiz.name": "Algiz",
    "cards.runes.Algiz.meaning": "Divine protection, connection to guides",
    "cards.runes.Sowilo.name": "Sowilo",
    "cards.runes.Sowilo.meaning": "Success, victory, solar energy",
    "cards.runes.Tiwaz.name": "Tiwaz",
    "cards.runes.Tiwaz.meaning": "Victory, justice, honorable sacrifice",
    "cards.runes.Berkano.name": "Berkano",
    "cards.runes.Berkano.meaning": "Growth, fertility, new cycle",
    "cards.runes.Ehwaz.name": "Ehwaz",
    "cards.runes.Ehwaz.meaning": "Movement, progress, partnership",
    "cards.runes.Mannaz.name": "Mannaz",
    "cards.runes.Mannaz.meaning": "Humanity, self, intelligence",
    "cards.runes.Laguz.name": "Laguz",
    "cards.runes.Laguz.meaning": "Water, intuition, emotions",
    "cards.runes.Ingwaz.name": "Ingwaz",
    "cards.runes.Ingwaz.meaning": "Masculine fertility, creative energy",
    "cards.runes.Dagaz.name": "Dagaz",
    "cards.runes.Dagaz.meaning": "Awakening, transformation, new day",
    "cards.runes.Othala.name": "Othala",
    "cards.runes.Othala.meaning": "Heritage, property, family tradition",

    // Love Oracle Spread
    "crossSpread.positions.present": "The Present",
    "crossSpread.positions.obstacle": "The Challenge",
    "crossSpread.positions.past": "The Past",
    "crossSpread.positions.future": "The Future",
    "crossSpread.positions.synthesis": "The Synthesis",
    "crossSpread.interpretation.title": "Your Cross Spread",
    "crossSpread.interpretation.subtitle": "{name}, your reading reveals a love path filled with insight.",
    "crossSpread.interpretation.sections.positive": "Positive Aspects",
    "crossSpread.interpretation.sections.attention": "Points of Attention",
    "crossSpread.interpretation.sections.advice": "Guidance",
    "crossSpread.interpretation.newConsultation": "New Reading",
    "gameMode.classic.title": "3-Card Spread",
    "gameMode.classic.description": "Receive immediate love guidance through a simple and intuitive 3-card reading.",
    "gameMode.classic.features": "3 cards • Quick guidance • Personalized message",
    "gameMode.cross.title": "Cross Spread",
    "gameMode.cross.description": "A deeper reading with 5 positions to explore your romantic situation",
    "oracle.loveOracle.title": "Love Oracle",
    "oracle.loveOracle.description": "Discover what the future holds for your love life with this reading.",
    "crossSpread.title": "Cross Spread – Love Oracle",
    "crossSpread.description": "This spread explores your romantic situation through three axes: supportive energies (Pros), obstacles or challenges (Cons), and the final message (Synthesis). Each card reveals a specific variation based on your draw.",
    "interpretation.loveOracle.greeting": "Here is what your love reading reveals",
    "revelation.personalAdvice": "Your personal advice",
    "common.loading": "Loading...",
        "gameMode.classic.cta": "Consult the oracle",
        "gameMode.cross.cta": "Consult the oracle",

    // Love Oracle Card Names
    "cards.loveOracle.lerendezvous.name": "The Date",
    "cards.loveOracle.lemessage.name": "The Message",
    "cards.loveOracle.ledesir.name": "Desire",
    "cards.loveOracle.lecoeurouvert.name": "Open Heart",
    "cards.loveOracle.lecoeurferme.name": "Closed Heart",
    "cards.loveOracle.lechoix.name": "The Choice",
    "cards.loveOracle.leretour.name": "The Return",
    "cards.loveOracle.ladistance.name": "Distance",
    "cards.loveOracle.lunion.name": "Union",
    "cards.loveOracle.lemasque.name": "The Mask",
    "cards.loveOracle.lapassion.name": "Passion",
    "cards.loveOracle.lachance.name": "Luck",
    "cards.loveOracle.ledestin.name": "Destiny",
    "cards.loveOracle.lesilence.name": "Silence",
    "cards.loveOracle.laverite.name": "Truth",
    "cards.loveOracle.lecadeau.name": "The Gift",
    "cards.loveOracle.lablessure.name": "The Wound",
    "cards.loveOracle.lenouveaudepart.name": "New Beginning",
    "cards.loveOracle.lafusion.name": "Fusion",
    "cards.loveOracle.latentation.name": "Temptation",
    "cards.loveOracle.laprotection.name": "Protection",
    "cards.loveOracle.laliberation.name": "Liberation",

    // ========== LABELS DES 3 ÉNERGIES ==========
    // Pour l'Oracle de l'Amour
    "interpretation.loveOracle.energy1.label": "Dominant Energy",
    "interpretation.loveOracle.energy1.subtitle": "What you're feeling inside",
    "interpretation.loveOracle.energy2.label": "External Influence",
    "interpretation.loveOracle.energy2.subtitle": "What is happening around you",
    "interpretation.loveOracle.energy3.label": "Possible Evolution",
    "interpretation.loveOracle.energy3.subtitle": "What could happen soon",

    // Card Names and Meanings - Love Oracle - 3 Card Reading
    // The Rendezvous — Dominant Energy (what you're feeling)
    "cards.loveOracle.lerendezvous.meaning.energy1.var1": "You’re eagerly awaiting this meeting, and your heart is filled with hope and excitement.",
    "cards.loveOracle.lerendezvous.meaning.energy1.var2": "Your mind is focused on this encounter, and you’re already imagining intense and pleasant moments.",
    "cards.loveOracle.lerendezvous.meaning.energy1.var3": "You feel a mix of nervousness and desire, but you’re ready to fully enjoy this moment.",
    // The Rendezvous — External Influence (what's happening around you)
    "cards.loveOracle.lerendezvous.meaning.energy2.var1": "The person you're about to meet also seems eager and may have prepared something special for you.",
    "cards.loveOracle.lerendezvous.meaning.energy2.var2": "Certain circumstances or events could make this meeting unforgettable or slightly complicate it.",
    "cards.loveOracle.lerendezvous.meaning.energy2.var3": "Your friends or surroundings may encourage you and offer advice to make sure this rendezvous goes well.",
    // Le Rendez-Vous — Possible Evolution (what could happen soon)
    "cards.loveOracle.lerendezvous.meaning.energy3.var1": "This rendezvous could create a strong connection and bring you closer to this person in a meaningful way.",
    "cards.loveOracle.lerendezvous.meaning.energy3.var2": "Even if things don't go perfectly, this encounter will bring you intense emotions and precious memories.",
    "cards.loveOracle.lerendezvous.meaning.energy3.var3": "A revelation or gesture during this rendezvous could change the dynamic of your relationship and open up new perspectives.",
    // Le Message — Dominant Energy (what you're feeling)
    "cards.loveOracle.lemessage.meaning.energy1.var1": "You're waiting for a message, but you're not sure when it will arrive and you wonder if this person will really write to you.",
    "cards.loveOracle.lemessage.meaning.energy1.var2": "Someone is hesitant to send you a message, and it creates a mix of hope and doubt in your heart.",
    "cards.loveOracle.lemessage.meaning.energy1.var3": "You're waiting without knowing if the message will come, and this makes you reflect on what you truly want.",
    // Le Message — External Influence (what's happening around you)
    "cards.loveOracle.lemessage.meaning.energy2.var1": "The person involved could send you a message that changes the dynamic between you.",
    "cards.loveOracle.lemessage.meaning.energy2.var2": "External events or advice from friends may influence what you receive or when you receive it.",
    "cards.loveOracle.lemessage.meaning.energy2.var3": "The message could be unexpected, revealing, or even a trigger to move forward in your relationship.",
    // Le Message — Possible Evolution (what could happen soon)
    "cards.loveOracle.lemessage.meaning.energy3.var1": "If you're patient and attentive, this message could bring you important news or clarification.",
    "cards.loveOracle.lemessage.meaning.energy3.var2": "This message could surprise you, provoke strong emotions, and guide you in your next romantic choices.",
    "cards.loveOracle.lemessage.meaning.energy3.var3": "Even if the message isn't exactly what you hoped for, it could help you move forward and better understand the situation.",
    // Le Désir — Dominant Energy (what you're feeling)
    "cards.loveOracle.ledesir.meaning.energy1.var1": "Your body and heart burn for this person, and you dream of intense and sensual moments with them.",
    "cards.loveOracle.ledesir.meaning.energy1.var2": "Every thought, every glance fuels your desire and makes you imagine passionate moments.",
    "cards.loveOracle.ledesir.meaning.energy1.var3": "You have an irresistible urge to get closer, to feel both the physical and emotional connection.",
    // Le Désir — External Influence (what's happening around you)
    "cards.loveOracle.ledesir.meaning.energy2.var1": "The person you desire may also feel this intense attraction, creating hot and unexpected moments.",
    "cards.loveOracle.ledesir.meaning.energy2.var2": "Situations or exchanged glances may ignite your emotions and strengthen this almost irresistible desire.",
    "cards.loveOracle.ledesir.meaning.energy2.var3": "Be careful, the intensity could be strong and surprising, and sometimes you'll need to manage this passion to avoid complications.",
    // Le Désir — Possible Evolution (what could happen soon)
    "cards.loveOracle.ledesir.meaning.energy3.var1": "If you give in to this desire, you could experience torrid moments and passionate encounters that will mark your heart.",
    "cards.loveOracle.ledesir.meaning.energy3.var2": "This desire could evolve into a very intense connection, but be cautious of the consequences if the person is unavailable or complicated.",
    "cards.loveOracle.ledesir.meaning.energy3.var3": "Even if the situation is delicate, giving in to your desire might allow you to experience sensual and emotionally powerful moments.",
    // Le Cœur Ouvert — Dominant Energy (what you're feeling)
    "cards.loveOracle.lecoeurouvert.meaning.energy1.var1": "Your heart is ready to open and welcome someone new, without fear or hesitation.",
    "cards.loveOracle.lecoeurouvert.meaning.energy1.var2": "You feel a deep desire for sharing and connection, and you no longer want to protect yourself.",
    "cards.loveOracle.lecoeurouvert.meaning.energy1.var3": "You are sensitive and receptive to the emotions of others, and your heart easily opens to love.",
    // Le Cœur Ouvert — External Influence (what's happening around you)
    "cards.loveOracle.lecoeurouvert.meaning.energy2.var1": "Someone close to you is encouraging you to open up and show your feelings, even though it scares you.",
    "cards.loveOracle.lecoeurouvert.meaning.energy2.var2": "Events around you are pushing you toward connection, which could lead you to fall in love quickly.",
    "cards.loveOracle.lecoeurouvert.meaning.energy2.var3": "Be careful, some people might take advantage of your sensitivity and openness, so remain cautious.",
    // Le Cœur Ouvert — Possible Evolution (what could happen soon)
    "cards.loveOracle.lecoeurouvert.meaning.energy3.var1": "If you stay open and sincere, an important encounter could change your love life.",
    "cards.loveOracle.lecoeurouvert.meaning.energy3.var2": "Your openness could be rewarded with intense moments of connection, but also with wounds if you're not careful.",
    "cards.loveOracle.lecoeurouvert.meaning.energy3.var3": "By letting your heart guide your choices, you could experience a strong relationship, but don't forget to set boundaries.",
    // Le Cœur Fermé — Dominant Energy (what you're feeling)
    "cards.loveOracle.lecoeurferme.meaning.energy1.var1": "Your heart is closed and you're having trouble trusting others, even those you love.",
    "cards.loveOracle.lecoeurferme.meaning.energy1.var2": "You're protecting yourself from past pain and disappointments, and refusing to show your true feelings.",
    "cards.loveOracle.lecoeurferme.meaning.energy1.var3": "You feel an emotional distance, as if you're on guard against love and intimacy.",
    // Le Cœur Fermé — External Influence (what's happening around you)
    "cards.loveOracle.lecoeurferme.meaning.energy2.var1": "People or recent situations have hurt you, reinforcing your mistrust and caution.",
    "cards.loveOracle.lecoeurferme.meaning.energy2.var2": "Someone might try to get close, but you're ignoring their signs or pushing them away unintentionally.",
    "cards.loveOracle.lecoeurferme.meaning.energy2.var3": "Your surroundings might encourage you to open up, but you’re still hesitant, afraid of being wrong or hurt.",
    // Le Cœur Fermé — Possible Evolution (what could happen soon)
    "cards.loveOracle.lecoeurferme.meaning.energy3.var1": "If you continue to keep your heart closed, you might miss an important and sincere encounter.",
    "cards.loveOracle.lecoeurferme.meaning.energy3.var2": "With time and trust, you could slowly open up and experience a true relationship, but it will take courage.",
    "cards.loveOracle.lecoeurferme.meaning.energy3.var3": "An unexpected event or person could push you to let go of your defenses and let love in, even though it scares you.",
    // Le Choix — Dominant Energy (what you're feeling)
    "cards.loveOracle.lechoix.meaning.energy1.var1": "You feel torn between two people or two directions, and your heart doesn’t know which one to follow.",
    "cards.loveOracle.lechoix.meaning.energy1.var2": "You’re thinking a lot about your feelings and trying to understand what you really want in love.",
    "cards.loveOracle.lechoix.meaning.energy1.var3": "An important decision is approaching, and you're feeling both excited and fearful of making the wrong choice.",
    // Le Choix — External Influence (what's happening around you)
    "cards.loveOracle.lechoix.meaning.energy2.var1": "Outside opinions or advice may complicate your thinking and make you doubt your own feelings.",
    "cards.loveOracle.lechoix.meaning.energy2.var2": "Some people around you have their own interests and may try to influence your decisions for their benefit.",
    "cards.loveOracle.lechoix.meaning.energy2.var3": "Your surroundings might also support you and help clarify what you really want, even though the path remains difficult.",
    // Le Choix — Possible Evolution (what could happen soon)
    "cards.loveOracle.lechoix.meaning.energy3.var1": "If you listen to your heart and instincts, you'll make a choice that suits you and brings you happiness.",
    "cards.loveOracle.lechoix.meaning.energy3.var2": "Your hesitation might cause you to miss an opportunity, but it will teach you more about yourself.",
    "cards.loveOracle.lechoix.meaning.energy3.var3": "An important decision could disrupt your current balance, but it will also open the door to a sincere and intense relationship if you dare to take the step.",
    // Le Retour — Dominant Energy (what you're feeling)
    "cards.loveOracle.leretour.meaning.energy1.var1": "You feel a strong desire for someone to return to your life, and your heart hopes for a second chance.",
    "cards.loveOracle.leretour.meaning.energy1.var2": "You're torn between the past and the present, and you often think about what could have been.",
    "cards.loveOracle.leretour.meaning.energy1.var3": "A feeling of nostalgia and waiting overwhelms you, as if part of you wants to repair what was lost.",
    // Le Retour — External Influence (what's happening around you)
    "cards.loveOracle.leretour.meaning.energy2.var1": "The person you think about returning might also feel the need to come back, but is hesitating to reach out.",
    "cards.loveOracle.leretour.meaning.energy2.var2": "Events or friends may either facilitate this return or delay it, depending on the circumstances.",
    "cards.loveOracle.leretour.meaning.energy2.var3": "Certain external influences could push you to reignite the relationship, but you’ll need to be cautious not to repeat past mistakes.",
    // Le Retour — Possible Evolution (what could happen soon)
    "cards.loveOracle.leretour.meaning.energy3.var1": "If you open up and give this person a chance, it's possible to rekindle a strong and sincere connection.",
    "cards.loveOracle.leretour.meaning.energy3.var2": "A return could reignite intense emotions, but you'll need to clarify expectations to avoid hurt.",
    "cards.loveOracle.leretour.meaning.energy3.var3": "It’s also possible the person won’t return, and this situation might push you to turn the page and focus on a new love.",
    // La Distance — Dominant Energy (what you're feeling)
    "cards.loveOracle.ladistance.meaning.energy1.var1": "You feel an emotional or physical distance weighing on you, making you doubt the relationship.",
    "cards.loveOracle.ladistance.meaning.energy1.var2": "Your heart struggles to fill the void, and you dream of closeness and shared moments.",
    "cards.loveOracle.ladistance.meaning.energy1.var3": "Separation makes you feel empty and sometimes frustrated, but you still hope things will improve.",
    // La Distance — External Influence (what's happening around you)
    "cards.loveOracle.ladistance.meaning.energy2.var1": "External circumstances, like work, personal life, or geography, may maintain this distance.",
    "cards.loveOracle.ladistance.meaning.energy2.var2": "Advice or pressure from those around you might push you to accept the situation or try to bridge the gap.",
    "cards.loveOracle.ladistance.meaning.energy2.var3": "It’s possible that someone will try to reduce the distance, but it will depend on your commitment and choices.",
    // La Distance — Possible Evolution (what could happen soon)
    "cards.loveOracle.ladistance.meaning.energy3.var1": "If you make an effort to communicate and get closer, the distance might reduce and strengthen the relationship.",
    "cards.loveOracle.ladistance.meaning.energy3.var2": "It’s also possible that the distance will persist and test the relationship, revealing what you’re really ready to experience.",
    "cards.loveOracle.ladistance.meaning.energy3.var3": "An unexpected event could create a meeting or a rapprochement, but you'll need to act quickly to seize this chance.",
    // L'Union — Dominant Energy (what you're feeling)
    "cards.loveOracle.lunion.meaning.energy1.var1": "You feel a deep need for connection and sharing, and your heart yearns for a sincere and lasting relationship.",
    "cards.loveOracle.lunion.meaning.energy1.var2": "You're ready to commit and build something solid with someone who truly matches you.",
    "cards.loveOracle.lunion.meaning.energy1.var3": "Your desire for closeness and companionship is strong, and you're seeking to create an authentic and deep bond.",
    // L'Union — External Influence (what's happening around you)
    "cards.loveOracle.lunion.meaning.energy2.var1": "People around you might encourage you to commit and seek a sincere union, or warn you against bad choices.",
    "cards.loveOracle.lunion.meaning.energy2.var2": "Recent events or encounters are favoring the creation of solid bonds and the possibility of building something real.",
    "cards.loveOracle.lunion.meaning.energy2.var3": "Beware, some external influences could complicate the relationship, but they may also reveal the strength of your connection.",
    // L'Union — Possible Evolution (what could happen soon)
    "cards.loveOracle.lunion.meaning.energy3.var1": "If you invest your heart and energy, a lasting and harmonious union could form very soon.",
    "cards.loveOracle.lunion.meaning.energy3.var2": "The relationship may go through trials, but if you stay sincere and attentive, your bond will emerge stronger.",
    "cards.loveOracle.lunion.meaning.energy3.var3": "An important encounter or key event could solidify your relationship and open the door to deep and stable love.",
    // The Mask — Dominant Energy (what you're feeling)
    "cards.loveOracle.lemasque.meaning.energy1.var1": "You tend to hide your true emotions and not show your feelings to protect yourself.",
    "cards.loveOracle.lemasque.meaning.energy1.var2": "You feel some emotional distance, as if you're wearing a mask to avoid pain or judgment.",
    "cards.loveOracle.lemasque.meaning.energy1.var3": "Sometimes, you're torn between what you truly feel and the image you want to show others.",
    // The Mask — External Influence (what's happening around you)
    "cards.loveOracle.lemasque.meaning.energy2.var1": "Some people around you only see the façade you show and ignore your true emotions.",
    "cards.loveOracle.lemasque.meaning.energy2.var2": "External situations are pushing you to protect yourself even more and maintain this mask, out of fear of disappointment or rejection.",
    "cards.loveOracle.lemasque.meaning.energy2.var3": "Loved ones or events might encourage you to drop your mask, but it takes courage and trust.",
    // The Mask — Possible Evolution (what could happen soon)
    "cards.loveOracle.lemasque.meaning.energy3.var1": "If you accept showing who you truly are, you could experience a sincere and deep connection with someone who understands you.",
    "cards.loveOracle.lemasque.meaning.energy3.var2": "It's possible that your mask will be pierced by a situation or a person, revealing your true emotions and triggering changes in your love life.",
    "cards.loveOracle.lemasque.meaning.energy3.var3": "Continuing to wear this mask might protect you in the short term, but it risks distancing you from authentic and fulfilling relationships.",
    // Passion — Dominant Energy (what you're feeling)
    "cards.loveOracle.lapassion.meaning.energy1.var1": "You burn with intense desire, and your body craves this connection, as if every thought revolves around this person.",
    "cards.loveOracle.lapassion.meaning.energy1.var2": "Your heart races and your mind is obsessed with this person, you dream of passionate and intense moments.",
    "cards.loveOracle.lapassion.meaning.energy1.var3": "You feel an irresistible attraction, mixing emotions and sensuality, and you want to experience everything fully with this person.",
    // Passion — External Influence (what's happening around you)
    "cards.loveOracle.lapassion.meaning.energy2.var1": "The person you desire is very present in your daily life or thoughts, and this fuels the intensity.",
    "cards.loveOracle.lapassion.meaning.energy2.var2": "Signs or closeness might amplify this tension and attraction, plunging you into a whirlwind of emotions.",
    "cards.loveOracle.lapassion.meaning.energy2.var3": "Be cautious, this passion could also be complicated by external obstacles, but it reveals the powerful energy that binds you.",
    // Passion — Possible Evolution (what could happen soon)
    "cards.loveOracle.lapassion.meaning.energy3.var1": "If you let yourself be swept away by this passion, you could experience unforgettable and intense moments, but you’ll need to be aware of the consequences.",
    "cards.loveOracle.lapassion.meaning.energy3.var2": "This energy could transform the relationship, bringing you deeply closer to this person or creating explosive situations.",
    "cards.loveOracle.lapassion.meaning.energy3.var3": "Passion could evolve into a powerful and deep love if you manage to channel your emotions and be sincere with yourself and the other person.",
    // Luck — Dominant Energy (what you're feeling)
    "cards.loveOracle.lachance.meaning.energy1.var1": "You feel like luck is on your side, and romantic opportunities may soon come your way.",
    "cards.loveOracle.lachance.meaning.energy1.var2": "Your heart is open and ready to welcome whatever beautiful and unexpected may come.",
    "cards.loveOracle.lachance.meaning.energy1.var3": "You feel a positive momentum in your love life, as if the universe wants to smile upon you and offer you a beautiful encounter.",
    // Luck — External Influence (what's happening around you)
    "cards.loveOracle.lachance.meaning.energy2.var1": "Chance encounters or unexpected events could play in your favor and bring you closer to someone special.",
    "cards.loveOracle.lachance.meaning.energy2.var2": "Your surroundings may bring opportunities or introduce you to people who align with your desires.",
    "cards.loveOracle.lachance.meaning.energy2.var3": "Luck might show up unexpectedly, but you'll need to stay alert to seize the opportunity.",
    // Luck — Possible Evolution (what could happen soon)
    "cards.loveOracle.lachance.meaning.energy3.var1": "If you remain open and attentive, a happy encounter or positive event could transform your love life.",
    "cards.loveOracle.lachance.meaning.energy3.var2": "Luck might surprise you and bring an ideal situation, but you'll need to seize the chance when it comes.",
    "cards.loveOracle.lachance.meaning.energy3.var3": "Even if things don't go perfectly, this period promises surprises and happy moments that may bring you closer to the love you desire.",
    // Destiny — Dominant Energy (what you're feeling)
    "cards.loveOracle.ledestin.meaning.energy1.var1": "You feel that certain meetings or events are written for you, and destiny plays a role in your love life.",
    "cards.loveOracle.ledestin.meaning.energy1.var2": "Your heart is intrigued by what seems inevitable, and you let yourself be carried along by the flow of events.",
    "cards.loveOracle.ledestin.meaning.energy1.var3": "You sense a mysterious force pushing you toward certain people or situations, as if everything is linked by destiny.",
    // Destiny — External Influence (what's happening around you)
    "cards.loveOracle.ledestin.meaning.energy2.var1": "Chance encounters or unexpected events could bring you closer to what destiny has in store for you.",
    "cards.loveOracle.ledestin.meaning.energy2.var2": "Your surroundings or circumstances might create opportunities that seem guided by a higher force.",
    "cards.loveOracle.ledestin.meaning.energy2.var3": "Be careful, some situations might seem like detours, but they are part of the path destiny has planned for you.",
    // Destiny — Possible Evolution (what could happen soon)
    "cards.loveOracle.ledestin.meaning.energy3.var1": "If you accept following the flow and trust destiny, a significant encounter or event could shake up your love life.",
    "cards.loveOracle.ledestin.meaning.energy3.var2": "Destiny might bring you a unique opportunity, but you’ll need to stay alert and seize the moment when it presents itself.",
    "cards.loveOracle.ledestin.meaning.energy3.var3": "Even if the path seems complicated, destiny is working for you and could lead you to a meaningful and deep relationship.",
    // Silence — Dominant Energy (what you're feeling)
    "cards.loveOracle.lesilence.meaning.energy1.var1": "You feel emptiness or distance in communication, and silence weighs heavily on your romantic relationships.",
    "cards.loveOracle.lesilence.meaning.energy1.var2": "Your heart is confused, and you wonder if the silence hides feelings or distance.",
    "cards.loveOracle.lesilence.meaning.energy1.var3": "Sometimes, you prefer to stay silent and keep your emotions to yourself, which can create misunderstandings or tension.",
    // Silence — External Influence (what's happening around you)
    "cards.loveOracle.lesilence.meaning.energy2.var1": "The person in front of you may be distant or reserved, and their silence influences your state of mind.",
    "cards.loveOracle.lesilence.meaning.energy2.var2": "External circumstances or recent tensions might create silence, making communication more difficult.",
    "cards.loveOracle.lesilence.meaning.energy2.var3": "Your surroundings may advise you or intervene to restore dialogue, but the decision to speak or not will depend on you and the other person.",
    // Silence — Possible Evolution (what could happen soon)
    "cards.loveOracle.lesilence.meaning.energy3.var1": "If you choose to break the silence and express your emotions, clarification or reconciliation could occur.",
    "cards.loveOracle.lesilence.meaning.energy3.var2": "Silence may persist and make you doubt, but it will also give you time to reflect on what you truly want.",
    "cards.loveOracle.lesilence.meaning.energy3.var3": "An unexpected event or a person might reignite communication and reveal hidden truths, paving the way for better mutual understanding.",
    // The Truth — Dominant Energy (what you're feeling)
    "cards.loveOracle.laverite.meaning.energy1.var1": "You feel the need to know the truth about a situation or a person, and your heart seeks clarity.",
    "cards.loveOracle.laverite.meaning.energy1.var2": "Your intuition pushes you to seek transparency and no longer settle for half-truths or false pretenses.",
    "cards.loveOracle.laverite.meaning.energy1.var3": "You're ready to face what is real, even if it may be painful or surprising.",
    // The Truth — External Influence (what's happening around you)
    "cards.loveOracle.laverite.meaning.energy2.var1": "Facts or revelations around you could show you what is truly at stake in this relationship.",
    "cards.loveOracle.laverite.meaning.energy2.var2": "Some people might hide the truth from you, either deliberately or out of fear of hurting you, complicating the situation.",
    "cards.loveOracle.laverite.meaning.energy2.var3": "Your surroundings or unexpected events could push you to discover what is real, even if it's not what you expected.",
    // The Truth — Possible Evolution (what could happen soon)
    "cards.loveOracle.laverite.meaning.energy3.var1": "If you accept facing the truth, you'll be able to make clear decisions and move forward in your relationships with confidence.",
    "cards.loveOracle.laverite.meaning.energy3.var2": "The truth could bring surprises, both positive or negative, but it will always give you the freedom to choose your path.",
    "cards.loveOracle.laverite.meaning.energy3.var3": "Even if the truth is hard to hear, it could open the way to a sincere and solid relationship, or free you from a situation that no longer serves you.",
    // The Gift — Dominant Energy (what you're feeling)
    "cards.loveOracle.lecadeau.meaning.energy1.var1": "You feel that love or a relationship might bring you an unexpected gift, a surprise that makes your heart race.",
    "cards.loveOracle.lecadeau.meaning.energy1.var2": "Your heart is open to receiving something precious, whether it's attention, affection, or an important encounter.",
    "cards.loveOracle.lecadeau.meaning.energy1.var3": "You're excited to discover what love life might offer you, even if you don't know what to expect yet.",
    // The Gift — External Influence (what's happening around you)
    "cards.loveOracle.lecadeau.meaning.energy2.var1": "People around you might offer you opportunities or occasions that enrich your heart and romantic life.",
    "cards.loveOracle.lecadeau.meaning.energy2.var2": "An unexpected event could bring something valuable into your love life, but you’ll need to stay alert to notice it.",
    "cards.loveOracle.lecadeau.meaning.energy2.var3": "Surprises, whether positive or slightly disappointing, might influence your choices and emotions in the coming days.",
    // The Gift — Possible Evolution (what could happen soon)
    "cards.loveOracle.lecadeau.meaning.energy3.var1": "If you accept what life brings with gratitude, you might receive an emotional gift that lights up your heart.",
    "cards.loveOracle.lecadeau.meaning.energy3.var2": "A person or situation might pleasantly surprise you and bring unexpected happiness.",
    "cards.loveOracle.lecadeau.meaning.energy3.var3": "Even if everything doesn't go exactly as planned, these emotional gifts might help you move forward and better understand your romantic desires.",
    // The Wound — Dominant Energy (what you're feeling)
    "cards.loveOracle.lablessure.meaning.energy1.var1": "You feel a deep pain related to love, as if an emotional scar has resurfaced.",
    "cards.loveOracle.lablessure.meaning.energy1.var2": "Your heart is fragile, and you're struggling to let go or trust others.",
    "cards.loveOracle.lablessure.meaning.energy1.var3": "An old sorrow or betrayal makes you doubt love and pushes you to protect yourself.",
    // The Wound — External Influence (what's happening around you)
    "cards.loveOracle.lablessure.meaning.energy2.var1": "People or external situations might reignite this pain and remind you of what has hurt you.",
    "cards.loveOracle.lablessure.meaning.energy2.var2": "Your surroundings may support or encourage you to overcome this wound, but healing will depend on your commitment to yourself.",
    "cards.loveOracle.lablessure.meaning.energy2.var3": "Sometimes, this wound makes you avoid certain relationships or be wary of new encounters, slowing down your romantic progress.",
    // The Wound — Possible Evolution (what could happen soon)
    "cards.loveOracle.lablessure.meaning.energy3.var1": "If you accept working through this pain and open up anyway, you might heal and find a sincere and deep relationship.",
    "cards.loveOracle.lablessure.meaning.energy3.var2": "It's possible this wound might resurface again, but every challenge can teach you something and make you stronger.",
    "cards.loveOracle.lablessure.meaning.energy3.var3": "A meeting or event could help you overcome this pain and open your heart to a more conscious and balanced love.",
    // The New Beginning — Dominant Energy (what you're feeling)
    "cards.loveOracle.lenouveaudepart.meaning.energy1.var1": "You feel it’s time to turn the page and start a new love story with an open heart.",
    "cards.loveOracle.lenouveaudepart.meaning.energy1.var2": "Your mind is ready to leave the past behind and welcome new experiences and emotions.",
    "cards.loveOracle.lenouveaudepart.meaning.energy1.var3": "You feel a mix of excitement and fear, but the desire for renewal is stronger than your doubts.",
    // The New Beginning — External Influence (what's happening around you)
    "cards.loveOracle.lenouveaudepart.meaning.energy2.var1": "Recent encounters or opportunities might push you to dive into something new and promising.",
    "cards.loveOracle.lenouveaudepart.meaning.energy2.var2": "Your surroundings might encourage or inspire you to seize this chance for a fresh start, but the final decision will depend on you.",
    "cards.loveOracle.lenouveaudepart.meaning.energy2.var3": "External events could trigger this new beginning, giving you the push you need to move forward.",
    // The New Beginning — Possible Evolution (what could happen soon)
    "cards.loveOracle.lenouveaudepart.meaning.energy3.var1": "If you accept this new beginning, you might meet someone special or experience something that transforms your heart.",
    "cards.loveOracle.lenouveaudepart.meaning.energy3.var2": "This renewal could be gradual, but each small step will bring you closer to a more sincere and fulfilling relationship.",
    "cards.loveOracle.lenouveaudepart.meaning.energy3.var3": "Even if everything doesn’t go as planned, this new beginning will give you the opportunity to learn, grow, and open your heart to love.",
    // Fusion — Dominant Energy (what you're feeling)
    "cards.loveOracle.lafusion.meaning.energy1.var1": "You feel an intense and deep connection with someone, as if your hearts are beating in unison.",
    "cards.loveOracle.lafusion.meaning.energy1.var2": "Your desire for closeness and complicity is strong, and you dream of a deep and sincere bond.",
    "cards.loveOracle.lafusion.meaning.energy1.var3": "You sense that this relationship has the potential to transform your emotions and your view on love.",
    // Fusion — External Influence (what's happening around you)
    "cards.loveOracle.lafusion.meaning.energy2.var1": "Events or situations are favoring this intense closeness and could strengthen your bond quickly.",
    "cards.loveOracle.lafusion.meaning.energy2.var2": "Your surroundings may support this union, but be mindful of external influences that could test your connection.",
    "cards.loveOracle.lafusion.meaning.energy2.var3": "Some tensions or jealousy around you could complicate this fusion, but they also reveal the strength of your bond.",
    // Fusion — Possible Evolution (what could happen soon)
    "cards.loveOracle.lafusion.meaning.energy3.var1": "If you fully open up to this connection, fusion could lead to a passionate and lasting relationship.",
    "cards.loveOracle.lafusion.meaning.energy3.var2": "This intense union might go through challenges, but if you stay sincere and attentive, it will grow stronger.",
    "cards.loveOracle.lafusion.meaning.energy3.var3": "A meeting or a key event could solidify this bond and create a deep and transformative intimacy for your hearts.",
    // Temptation — Dominant Energy (what you're feeling)
    "cards.loveOracle.latentation.meaning.energy1.var1": "You feel a strong and irresistible desire for someone or something that attracts your heart and body.",
    "cards.loveOracle.latentation.meaning.energy1.var2": "Your mind is torn between reason and desire, and this temptation pushes you to explore what you truly want.",
    "cards.loveOracle.latentation.meaning.energy1.var3": "You feel drawn to what is forbidden or exciting, and it’s difficult to resist this impulse.",
    // Temptation — External Influence (what's happening around you)
    "cards.loveOracle.latentation.meaning.energy2.var1": "Situations or people around you might intensify this temptation and make it nearly impossible to ignore.",
    "cards.loveOracle.latentation.meaning.energy2.var2": "Your surroundings or circumstances might present difficult choices, testing your ability to stay true to your values.",
    "cards.loveOracle.latentation.meaning.energy2.var3": "This temptation might be an opportunity to discover intense emotions, but it also carries risks and complications.",
    // Temptation — Possible Evolution (what could happen soon)
    "cards.loveOracle.latentation.meaning.energy3.var1": "If you give in to this temptation, you could experience passionate and intense moments, but you’ll need to be aware of the consequences.",
    "cards.loveOracle.latentation.meaning.energy3.var2": "This situation could teach you a lot about your desires and limits, helping you understand what you really want.",
    "cards.loveOracle.latentation.meaning.energy3.var3": "It’s also possible that resisting temptation will bring you more clarity and protect you from unnecessary complications in your love life.",
    // Protection — Dominant Energy (what you're feeling)
    "cards.loveOracle.laprotection.meaning.energy1.var1": "You feel the need to protect yourself emotionally to avoid suffering in your romantic relationships.",
    "cards.loveOracle.laprotection.meaning.energy1.var2": "Your heart is on guard, and you're taking time to choose who to open your feelings to.",
    "cards.loveOracle.laprotection.meaning.energy1.var3": "Sometimes, you block certain emotions to feel safe and avoid disappointments.",
    // Protection — External Influence (what's happening around you)
    "cards.loveOracle.laprotection.meaning.energy2.var1": "People around you or past experiences are encouraging you to be cautious and protect your heart.",
    "cards.loveOracle.laprotection.meaning.energy2.var2": "Certain situations may put you on alert and strengthen your need to shield yourself from hurt.",
    "cards.loveOracle.laprotection.meaning.energy2.var3": "Your surroundings may also help you identify what’s safe and what could cause you pain, guiding you towards more protective choices.",
    // Protection — Possible Evolution (what could happen soon)
    "cards.loveOracle.laprotection.meaning.energy3.var1": "If you continue to protect yourself while staying open, you will be able to move forward in your relationships without getting hurt.",
    "cards.loveOracle.laprotection.meaning.energy3.var2": "You might find yourself in a situation that will test your ability to protect yourself while remaining sincere.",
    "cards.loveOracle.laprotection.meaning.energy3.var3": "A relationship or event could help you feel safe and open your heart gradually, without risking unnecessary pain.",
    // Liberation — Dominant Energy (what you're feeling)
    "cards.loveOracle.laliberation.meaning.energy1.var1": "You feel the need to free yourself from a relationship or emotions that hold you back and weigh you down.",
    "cards.loveOracle.laliberation.meaning.energy1.var2": "Your heart longs to regain its freedom and no longer be constrained by painful or suffocating situations.",
    "cards.loveOracle.laliberation.meaning.energy1.var3": "Sometimes, you feel the urge to cut ties with what prevents you from moving forward and fully breathing.",
    // Liberation — External Influence (what's happening around you)
    "cards.loveOracle.laliberation.meaning.energy2.var1": "People or events around you can help you let go and feel freer.",
    "cards.loveOracle.laliberation.meaning.energy2.var2": "Certain situations might push you to step back and detach from what blocks your heart.",
    "cards.loveOracle.laliberation.meaning.energy2.var3": "Your surroundings might encourage you to free yourself from what no longer serves you and move towards healthier relationships.",
    // Liberation — Possible Evolution (what could happen soon)
    "cards.loveOracle.laliberation.meaning.energy3.var1": "If you accept letting go, you could experience a fresh and lighter love, more sincere and fulfilling.",
    "cards.loveOracle.laliberation.meaning.energy3.var2": "Liberation can bring you new opportunities and encounters that align better with your heart and desires.",
    "cards.loveOracle.laliberation.meaning.energy3.var3": "Even though this process may be difficult at first, it will help you regain your inner strength and open your heart to true love.",
    
    // ========== CONSEILS THÉMATIQUES ORACLE DE L'AMOUR - TIRAGE 3 CARTES ==========
    // 1. Love Patience
    "interpretation.loveOracle.advice.patience.var1": "You must understand that love comes when you least expect it. Trust in time and the universe, it knows what it’s doing.",
    "interpretation.loveOracle.advice.patience.var2": "Don’t force things, love will come to you when you’re ready to receive it. Let it manifest naturally.",
    "interpretation.loveOracle.advice.patience.var3": "The universe has its own plans, and sometimes it’s better to wait than force a meeting. What is meant for you won’t pass you by.",
    // 2. Opening Your Heart
    "interpretation.loveOracle.advice.openness.var1": "Your heart is a treasure, it’s time to share it with those who are ready to receive it. Allow yourself to embrace the beautiful surprises of love.",
    "interpretation.loveOracle.advice.openness.var2": "If you stay closed off, love won’t be able to enter. Be ready to open your heart, even if it takes a little courage.",
    "interpretation.loveOracle.advice.openness.var3": "Stop protecting yourself at all costs. Love is also about taking risks and making room for new things.",
    // 3. Self-Confidence
    "interpretation.loveOracle.advice.selfconfidence.var1": "Never doubt your worth, you deserve the best. Believe in yourself and know that you are worthy of pure and sincere love.",
    "interpretation.loveOracle.advice.selfconfidence.var2": "Before giving your love, start by loving yourself. When you respect yourself, love will come more easily.",
    "interpretation.loveOracle.advice.selfconfidence.var3": "The love you seek starts with the love you give yourself. Be your own number one fan.",
    // 4. Emotional Clarity
    "interpretation.loveOracle.advice.clarity.var1": "Listen to your heart. Sometimes it knows things your mind doesn’t. If you’re clear with yourself, you’ll see things much more clearly.",
    "interpretation.loveOracle.advice.clarity.var2": "Take the time to pause and really feel what you want in a relationship. Clarity will come when you stop rushing.",
    "interpretation.loveOracle.advice.clarity.var3": "If you feel lost, it might be time to listen to yourself. Your emotions will guide you toward what’s right for you.",
    // 5. Letting Go
    "interpretation.loveOracle.advice.lettinggo.var1": "Letting go doesn’t mean giving up, but accepting that some things are beyond your control. Let the universe do its work.",
    "interpretation.loveOracle.advice.lettinggo.var2": "Free yourself from the past, doubts, and wounds. Nothing new can enter your life if you’re holding onto the old.",
    "interpretation.loveOracle.advice.lettinggo.var3": "You can be in control of your life, but sometimes you need to know when to let go to allow the magic of love to work.",
    // 6. Authenticity
    "interpretation.loveOracle.advice.authenticity.var1": "Be yourself without compromise. Only by being authentic can you attract the love that truly fits you.",
    "interpretation.loveOracle.advice.authenticity.var2": "True love has nothing to do with masks. Be honest, even if it feels scary. Love will come when you show who you really are.",
    "interpretation.loveOracle.advice.authenticity.var3": "Stop trying to please everyone. The love that matters is the one you experience with someone who accepts you as you are.",
    // 7. Heart Protection
    "interpretation.loveOracle.advice.protection.var1": "Protect your heart, but don’t build walls around it. Learn to set boundaries without closing yourself off to others.",
    "interpretation.loveOracle.advice.protection.var2": "Protecting yourself is not a weakness. The right people will enter your life if you allow them.",
    "interpretation.loveOracle.advice.protection.var3": "It’s important to keep your heart safe, but remember that excessive protection can prevent you from experiencing true love.",
    // 8. Action and Initiative
    "interpretation.loveOracle.advice.action.var1": "If you wait for love to come to you without doing anything, you might miss it. Dare to take the first step; it could change everything.",
    "interpretation.loveOracle.advice.action.var2": "Love doesn’t wait, so take the initiative. Don’t let shyness or fear stop you from experiencing a beautiful story.",
    "interpretation.loveOracle.advice.action.var3": "Sometimes, you need to take action. If you have feelings for someone, don’t wait for the situation to resolve itself.",
    // Fallback
    "interpretation.loveOracle.advice.fallback.var1": "Don’t overthink things, trust your heart. It always guides you in the right direction.",
    "interpretation.loveOracle.advice.fallback.var2": "Remember that everything unfolds as it should. The universe always has a plan for you, even if you don’t see it yet.",
    "interpretation.loveOracle.advice.fallback.var3": "Your intuition is your best ally, listen to it carefully. It will always tell you what’s right for you.",

    // Card Names and Meanings - Love oracle - Cross Spread
    // le rendez-vous
    "crossSpread.cards.lerendezvous.pour.variation1": "A promising encounter is coming your way. Stay open and welcoming.",
      "crossSpread.cards.lerendezvous.pour.variation2": "You will have a beautiful opportunity to get closer to someone. Dare to make the first move.",
      "crossSpread.cards.lerendezvous.pour.variation3": "An unexpected connection could change your love story. Be bold.",
      "crossSpread.cards.lerendezvous.contre.variation1": "Don’t let fear or hesitation make you miss an important opportunity.",
      "crossSpread.cards.lerendezvous.contre.variation2": "A missed meeting could lead to regret. Stay present and attentive.",
      "crossSpread.cards.lerendezvous.contre.variation3": "A lack of confidence could prevent you from seizing this chance.",
      "crossSpread.cards.lerendezvous.synthese.variation1": "Love is knocking at your door. Open your heart and welcome what comes.",
      "crossSpread.cards.lerendezvous.synthese.variation2": "This is the right moment to act. An important encounter awaits if you open up.",
      "crossSpread.cards.lerendezvous.synthese.variation3": "This period is ideal for creating new connections. Trust life's timing.",
    // le message
    "crossSpread.cards.lemessage.pour.variation1": "You will receive news or a response that brings you closer to the person you want.",
    "crossSpread.cards.lemessage.pour.variation2": "Communication is opening up. An honest exchange can improve the situation.",
    "crossSpread.cards.lemessage.pour.variation3": "A positive message is coming and will clarify what you were feeling.",
    "crossSpread.cards.lemessage.contre.variation1": "You might misunderstand silence or a word. Stay calm before reacting.",
    "crossSpread.cards.lemessage.contre.variation2": "Blocked communication could create tension. Don’t wait without taking action.",
    "crossSpread.cards.lemessage.contre.variation3": "A late or confusing message may unsettle you. Keep your feet on the ground.",
    "crossSpread.cards.lemessage.synthese.variation1": "An important discussion will bring clarity. You will finally understand your direction.",
    "crossSpread.cards.lemessage.synthese.variation2": "Dialogue is the key. You will get the answers you need to move forward.",
    "crossSpread.cards.lemessage.synthese.variation3": "A conversation will end doubts and open a new dynamic between you.",
    // le désir
    "crossSpread.cards.ledesir.pour.variation1": "Desire is mutual. You strongly attract this person.",
    "crossSpread.cards.ledesir.pour.variation2": "A strong passion is awakening between you. The chemistry is real.",
    "crossSpread.cards.ledesir.pour.variation3": "Your charm is working. Someone is thinking about you with intensity.",
    "crossSpread.cards.ledesir.contre.variation1": "Be careful not to confuse desire with true feelings.",
    "crossSpread.cards.ledesir.contre.variation2": "An attraction that is too strong may cloud your judgment.",
    "crossSpread.cards.ledesir.contre.variation3": "Desire could push you into a complicated situation. Keep a clear mind.",
     "crossSpread.cards.ledesir.synthese.variation1": "Desire plays a key role in your situation. Everything progresses thanks to this attraction.",
    "crossSpread.cards.ledesir.synthese.variation2": "The chemistry is powerful, but you need to balance passion and reason.",
    "crossSpread.cards.ledesir.synthese.variation3": "This intense energy may open a new path, as long as you stay receptive and aware of the signs.",
    //le cœur ouvert
    "crossSpread.cards.lecoeurouvert.pour.variation1": "You are ready to love sincerely. This openness attracts positivity.",
    "crossSpread.cards.lecoeurouvert.pour.variation2": "Your vulnerability creates an authentic bond with the other person.",
    "crossSpread.cards.lecoeurouvert.pour.variation3": "By opening up, you allow a beautiful energy to enter your life.",
    "crossSpread.cards.lecoeurouvert.contre.variation1": "You might show yourself too available. Protect some of your energy.",
    "crossSpread.cards.lecoeurouvert.contre.variation2": "Your sensitivity could make you fragile in the other person's behavior.",
    "crossSpread.cards.lecoeurouvert.contre.variation3": "You risk idealizing a person or a situation.",
    "crossSpread.cards.lecoeurouvert.synthese.variation1": "Your open heart is your strength. It attracts the right person.",
    "crossSpread.cards.lecoeurouvert.synthese.variation2": "Express what you feel. Sincerity unlocks the situation.",
    "crossSpread.cards.lecoeurouvert.synthese.variation3": "By staying true, you will receive an honest response in return.",
    //le cœur fermé
    "crossSpread.cards.lecoeurferme.pour.variation1": "Taking a step back protects you for now. You are listening to your intuition.",
    "crossSpread.cards.lecoeurferme.pour.variation2": "Setting boundaries allows you not to lose yourself in the relationship.",
    "crossSpread.cards.lecoeurferme.pour.variation3": "Your heart closes to preserve you from an unstable situation.",
    "crossSpread.cards.lecoeurferme.contre.variation1": "You block yourself too much. This prevents the other from understanding you.",
    "crossSpread.cards.lecoeurferme.contre.variation2": "Fear of being hurt stops you from fully loving.",
    "crossSpread.cards.lecoeurferme.contre.variation3": "Your lack of openness creates unnecessary distance.",
    "crossSpread.cards.lecoeurferme.synthese.variation1": "You need to gently reopen your heart if you want to move forward.",
    "crossSpread.cards.lecoeurferme.synthese.variation2": "Balance is necessary: protect yourself but don't close off completely.",
    "crossSpread.cards.lecoeurferme.synthese.variation3": "The unlocking comes from you: allow yourself to feel again.",
    //le choix
    "crossSpread.cards.lechoix.pour.variation1": "You are finally ready to make a clear decision.",
    "crossSpread.cards.lechoix.pour.variation2": "Two paths are available to you, but one shines brighter if you listen to your heart.",
    "crossSpread.cards.lechoix.pour.variation3": "You regain control of your love life by making a choice that suits you.",
    "crossSpread.cards.lechoix.contre.variation1": "Doubt blocks and exhausts your mind, preventing you from seeing the best direction.",
    "crossSpread.cards.lechoix.contre.variation2": "You might let fears influence you instead of your true desires.",
    "crossSpread.cards.lechoix.contre.variation3": "Hesitating too long could make you miss an opportunity.",
    "crossSpread.cards.lechoix.synthese.variation1": "The right choice is the one that makes you feel lighter.",
    "crossSpread.cards.lechoix.synthese.variation2": "Things really start moving as soon as you clearly choose your path without hesitation.",
    "crossSpread.cards.lechoix.synthese.variation3": "Your heart already knows the answer; take the time to truly listen and let it guide your actions.",
    //le retour
    "crossSpread.cards.leretour.pour.variation1": "Someone from your past is coming back with clear intentions, ready to clarify what was unresolved.",
    "crossSpread.cards.leretour.pour.variation2": "A memory or person reappears to help you understand something.",
    "crossSpread.cards.leretour.pour.variation3": "Someone from the past comes back and could offer you a new opportunity.",
    "crossSpread.cards.leretour.contre.variation1": "Looking back could prevent you from moving forward.",
    "crossSpread.cards.leretour.contre.variation2": "A person from the past may reopen old wounds.",
    "crossSpread.cards.leretour.contre.variation3": "You might idealize this return and lose your current stability.",
    "crossSpread.cards.leretour.synthese.variation1": "The past returns for a reason: to understand, heal, or close a chapter.",
    "crossSpread.cards.leretour.synthese.variation2": "This return gives you the chance to clarify your desires and choose what truly matters to you.",
    "crossSpread.cards.leretour.synthese.variation3": "A page from the past reopens, allowing you to understand, accept, and decide whether to move on or rewrite your story.",
    //la distance
    "crossSpread.cards.ladistance.pour.variation1": "Distance helps you see your emotions more clearly.",
    "crossSpread.cards.ladistance.pour.variation2": "A period apart allows each person to breathe and reflect.",
    "crossSpread.cards.ladistance.pour.variation3": "Taking a step back protects you and helps you stay centered.",
    "crossSpread.cards.ladistance.contre.variation1": "A chill can set in and weaken the relationship.",
    "crossSpread.cards.ladistance.contre.variation2": "Distance can create doubts and feed fears.",
    "crossSpread.cards.ladistance.contre.variation3": "Lack of communication can make the distance worse.",
    "crossSpread.cards.ladistance.synthese.variation1": "This distance isn’t permanent; it serves to rebalance the situation.",
    "crossSpread.cards.ladistance.synthese.variation2": "A reconnection is possible once both have regained calm.",
    "crossSpread.cards.ladistance.synthese.variation3": "You need to understand what this distance is trying to teach you.",
    //l'union
    "crossSpread.cards.lunion.pour.variation1": "A solid relationship can be built. You are ready to commit.",
    "crossSpread.cards.lunion.pour.variation2": "Union with this person brings stability and harmony.",
    "crossSpread.cards.lunion.pour.variation3": "You move forward hand in hand toward something serious.",
    "crossSpread.cards.lunion.contre.variation1": "You might commit too quickly without noticing some signals.",
    "crossSpread.cards.lunion.contre.variation2": "The other person might not yet be ready for the same depth.",
    "crossSpread.cards.lunion.contre.variation3": "External circumstances could complicate the union for now.",
    "crossSpread.cards.lunion.synthese.variation1": "This relationship can evolve into something stable if you move forward together.",
    "crossSpread.cards.lunion.synthese.variation2": "Union is possible but requires patience and understanding.",
    "crossSpread.cards.lunion.synthese.variation3": "Your romantic future is built on cooperation and listening.",
    //le masque
    "crossSpread.cards.lemasque.pour.variation1": "You protect your emotions by keeping a part of yourself mysterious.",
    "crossSpread.cards.lemasque.pour.variation2": "Staying discreet allows you to better observe the situation.",
    "crossSpread.cards.lemasque.pour.variation3": "The mask helps you avoid revealing yourself too quickly.",
    "crossSpread.cards.lemasque.contre.variation1": "Someone is not showing their true intentions.",
    "crossSpread.cards.lemasque.contre.variation2": "Lack of transparency can create misunderstandings.",
    "crossSpread.cards.lemasque.contre.variation3": "Hiding yourself prevents the relationship from progressing sincerely.",
    "crossSpread.cards.lemasque.synthese.variation1": "To move forward, masks must come down on both sides.",
    "crossSpread.cards.lemasque.synthese.variation2": "The truth will eventually appear and clarify the situation.",
    "crossSpread.cards.lemasque.synthese.variation3": "Sincere openness can completely change the dynamic.",
    //la passion
    "crossSpread.cards.lapassion.pour.variation1": "A strong energy drives you and brings hearts closer.",
    "crossSpread.cards.lapassion.pour.variation2": "Passion makes the relationship vibrant and alive.",
    "crossSpread.cards.lapassion.pour.variation3": "A powerful emotional impulse draws you toward the other.",
    "crossSpread.cards.lapassion.contre.variation1": "Passion can become unstable if not managed.",
    "crossSpread.cards.lapassion.contre.variation2": "Acting too quickly can lead to mistakes.",
    "crossSpread.cards.lapassion.contre.variation3": "The fire burns strongly but can also fade quickly.",
    "crossSpread.cards.lapassion.synthese.variation1": "Passion is a force, but it must be balanced with reason.",
    "crossSpread.cards.lapassion.synthese.variation2": "This intensity brings significant transformation to your love life.",
    "crossSpread.cards.lapassion.synthese.variation3": "Keep the passion, but move forward consciously.",
    //la chance
    "crossSpread.cards.lachance.pour.variation1": "A wonderful romantic opportunity is presenting itself. Seize it.",
    "crossSpread.cards.lachance.pour.variation2": "Fate is on your side. Something positive is coming.",
    "crossSpread.cards.lachance.pour.variation3": "You attract the right energy. Luck is on your side.",
    "crossSpread.cards.lachance.contre.variation1": "Luck passes quickly: don’t stay passive.",
    "crossSpread.cards.lachance.contre.variation2": "You might doubt and let an opportunity slip away.",
    "crossSpread.cards.lachance.contre.variation3": "Excessive waiting could make you miss the chance.",
    "crossSpread.cards.lachance.synthese.variation1": "Take advantage of the positive flow. It opens a new path for you.",
    "crossSpread.cards.lachance.synthese.variation2": "An important synchronicity will help you move forward.",
    "crossSpread.cards.lachance.synthese.variation3": "This is a key moment: the universe supports you on your love journey.",
    //le destin
    "crossSpread.cards.ledestin.pour.variation1": "Events naturally align for you. Trust the flow.",
    "crossSpread.cards.ledestin.pour.variation2": "What happens was meant to be. You are guided toward the right person.",
    "crossSpread.cards.ledestin.pour.variation3": "A meeting or situation is the result of an important synchronicity.",
    "crossSpread.cards.ledestin.contre.variation1": "Don’t let destiny decide for you. You must also take action.",
    "crossSpread.cards.ledestin.contre.variation2": "Waiting too long could block your progress.",
    "crossSpread.cards.ledestin.contre.variation3": "You risk leaving things to chance rather than following your heart.",
    "crossSpread.cards.ledestin.synthese.variation1": "What you experience has a deep meaning. Let things happen naturally.",
    "crossSpread.cards.ledestin.synthese.variation2": "An important step brings you closer to your love path.",
    "crossSpread.cards.ledestin.synthese.variation3": "Destiny opens a new path, but it’s up to you to walk it.",
    //le silence
    "crossSpread.cards.lesilence.pour.variation1": "Silence helps you refocus and listen to your true emotions.",
    "crossSpread.cards.lesilence.pour.variation2": "This pause allows you to understand what you really want.",
    "crossSpread.cards.lesilence.pour.variation3": "Taking time for yourself brings you back to what matters.",
    "crossSpread.cards.lesilence.contre.variation1": "Lack of news can create confusion and stress.",
    "crossSpread.cards.lesilence.contre.variation2": "The other person’s withdrawal can make you imagine the worst.",
    "crossSpread.cards.lesilence.contre.variation3": "Silence blocks communication and delays progress.",
    "crossSpread.cards.lesilence.synthese.variation1": "Resuming communication is possible after this silence.",
    "crossSpread.cards.lesilence.synthese.variation2": "Silence opens the door to deeper reflection.",
    "crossSpread.cards.lesilence.synthese.variation3": "This calm time prepares an important clarification.",
    //la vérité
    "crossSpread.cards.laverite.pour.variation1": "A truth finally sheds light on what you were feeling.",
    "crossSpread.cards.laverite.pour.variation2": "Transparency becomes an asset. Everything clears up.",
    "crossSpread.cards.laverite.pour.variation3": "An honest conversation opens a new dynamic.",
    "crossSpread.cards.laverite.contre.variation1": "A truth can surprise or unsettle you.",
    "crossSpread.cards.laverite.contre.variation2": "The other may hesitate to say what they truly feel.",
    "crossSpread.cards.laverite.contre.variation3": "Fear of the truth blocks an important situation.",
    "crossSpread.cards.laverite.synthese.variation1": "The truth is liberating: it puts everything back in place.",
    "crossSpread.cards.laverite.synthese.variation2": "A revelation helps you make a clear choice.",
    "crossSpread.cards.laverite.synthese.variation3": "Sincerity transforms the relationship and opens a new chapter.",
    //le cadeau
    "crossSpread.cards.lecadeau.pour.variation1": "A thoughtful gesture shows the other person’s interest.",
    "crossSpread.cards.lecadeau.pour.variation2": "You will receive a surprise that warms your heart.",
    "crossSpread.cards.lecadeau.pour.variation3": "A sincere action opens the door to closeness.",
    "crossSpread.cards.lecadeau.contre.variation1": "Don’t let yourself be influenced only by a material gesture.",
    "crossSpread.cards.lecadeau.contre.variation2": "A gesture may hide a need to be forgiven.",
    "crossSpread.cards.lecadeau.contre.variation3": "You could give more than you receive in return.",
    "crossSpread.cards.lecadeau.synthese.variation1": "A symbolic gesture changes the dynamic between you.",
    "crossSpread.cards.lecadeau.synthese.variation2": "The universe offers you an opportunity for tenderness and openness.",
    "crossSpread.cards.lecadeau.synthese.variation3": "A sincere exchange strengthens the bond and creates new momentum.",
    //la blessure
    "crossSpread.cards.lablessure.pour.variation1": "You become aware of your wound and begin to heal.",
    "crossSpread.cards.lablessure.pour.variation2": "Acknowledging your pain helps you move forward more solidly.",
    "crossSpread.cards.lablessure.pour.variation3": "This awareness opens you to true emotional renewal.",
    "crossSpread.cards.lablessure.contre.variation1": "An unhealed wound still influences your choices.",
    "crossSpread.cards.lablessure.contre.variation2": "Fear of being hurt prevents you from moving forward.",
    "crossSpread.cards.lablessure.contre.variation3": "You remain attached to a past pain that drains you.",
    "crossSpread.cards.lablessure.synthese.variation1": "Healing is underway. You finally feel lighter.",
    "crossSpread.cards.lablessure.synthese.variation2": "Understanding your wound helps you break old patterns.",
    "crossSpread.cards.lablessure.synthese.variation3": "This trial opens the way to a deep and positive change.",
    //le nouveau départ
    "crossSpread.cards.lenouveaudepart.pour.variation1": "You are entering a new, lighter cycle.",
    "crossSpread.cards.lenouveaudepart.pour.variation2": "A positive change opens a path more aligned with your heart.",
    "crossSpread.cards.lenouveaudepart.pour.variation3": "You leave the past behind and move toward something new.",
    "crossSpread.cards.lenouveaudepart.contre.variation1": "You may be afraid to leave what you know.",
    "crossSpread.cards.lenouveaudepart.contre.variation2": "Change feels hard to accept.",
    "crossSpread.cards.lenouveaudepart.contre.variation3": "You risk staying stuck in the old cycle.",
    "crossSpread.cards.lenouveaudepart.synthese.variation1": "A major transformation is opening up for you.",
    "crossSpread.cards.lenouveaudepart.synthese.variation2": "By letting go of the old, you make space for a new story.",
    "crossSpread.cards.lenouveaudepart.synthese.variation3": "This new beginning takes you exactly where you need to be.",
    //la fusion
    "crossSpread.cards.lafusion.pour.variation1": "A deep connection forms between you. Emotions are shared.",
    "crossSpread.cards.lafusion.pour.variation2": "You feel aligned with the other person, as if everything flows naturally.",
    "crossSpread.cards.lafusion.pour.variation3": "An emotional or energetic union strengthens between you.",
    "crossSpread.cards.lafusion.contre.variation1": "Fusion can be too intense and make you lose your balance.",
    "crossSpread.cards.lafusion.contre.variation2": "Be careful not to dissolve yourself in the other person.",
    "crossSpread.cards.lafusion.contre.variation3": "Emotional dependence can develop if you don’t stay grounded.",
    "crossSpread.cards.lafusion.synthese.variation1": "The connection is real and powerful, but requires maturity and balance.",
    "crossSpread.cards.lafusion.synthese.variation2": "You are linked on a deep level, opening an important evolution.",
    "crossSpread.cards.lafusion.synthese.variation3": "This fusion can become a strength if each person keeps their identity.",
    //la tentation
    "crossSpread.cards.latentation.pour.variation1": "A new attraction renews your desire and energy.",
    "crossSpread.cards.latentation.pour.variation2": "Someone sparks your curiosity and desire.",
    "crossSpread.cards.latentation.pour.variation3": "An exciting situation breaks your routine.",
    "crossSpread.cards.latentation.contre.variation1": "A temptation could distract you from what’s truly good for you.",
    "crossSpread.cards.latentation.contre.variation2": "You risk getting involved in something unstable.",
    "crossSpread.cards.latentation.contre.variation3": "An outside influence clouds your judgment.",
    "crossSpread.cards.latentation.synthese.variation1": "This temptation teaches you something about your true desires.",
    "crossSpread.cards.latentation.synthese.variation2": "Before acting, make sure it aligns with your heart.",
    "crossSpread.cards.latentation.synthese.variation3": "Temptation can be a test to clarify what you really want.",
    //la protection
    "crossSpread.cards.laprotection.pour.variation1": "Your intuition protects you and guides you to the right decisions.",
    "crossSpread.cards.laprotection.pour.variation2": "You are surrounded by a benevolent energy.",
    "crossSpread.cards.laprotection.pour.variation3": "Caution helps you avoid disappointment.",
    "crossSpread.cards.laprotection.contre.variation1": "Being too suspicious can block a beautiful opportunity.",
    "crossSpread.cards.laprotection.contre.variation2": "Your fear makes you see dangers that don’t exist.",
    "crossSpread.cards.laprotection.contre.variation3": "Excessive protection can become a barrier to love.",
    "crossSpread.cards.laprotection.synthese.variation1": "Your intuition is right: truly listen to it.",
    "crossSpread.cards.laprotection.synthese.variation2": "Divine protection helps you move forward safely.",
    "crossSpread.cards.laprotection.synthese.variation3": "A balance between caution and openness guides you in the right direction.",
    //la libération
    "crossSpread.cards.laliberation.pour.variation1": "You finally free yourself from something that was weighing you down.",
    "crossSpread.cards.laliberation.pour.variation2": "A cycle ends and you breathe again.",
    "crossSpread.cards.laliberation.pour.variation3": "You let go and regain your inner power.",
    "crossSpread.cards.laliberation.contre.variation1": "You may resist change out of fear of the unknown.",
    "crossSpread.cards.laliberation.contre.variation2": "You are still holding on to something that must go.",
    "crossSpread.cards.laliberation.contre.variation3": "Not letting go prevents you from moving toward the best.",
    "crossSpread.cards.laliberation.synthese.variation1": "A major emotional release opens a new path.",
    "crossSpread.cards.laliberation.synthese.variation2": "By letting go of the old, you invite renewal.",
    "crossSpread.cards.laliberation.synthese.variation3": "This detachment brings you closer to your true romantic path.",

    // Lunar Oracle
    "oracle.lunar.title": "Lunar Oracle",
    "oracle.lunar.description": "The phases of the Moon reveal your inner path",
    "lunar.phaseSelection.title": "Lunar Oracle",
    "lunar.phaseSelection.subtitle": "Choose the moon phase that resonates with your current mindset",
    "lunar.phases.newMoon.name": "New Moon",
    "lunar.phases.newMoon.description": "New beginnings and intentions",
    "lunar.phases.firstQuarter.name": "First Quarter",
    "lunar.phases.firstQuarter.description": "Action and decisions",
    "lunar.phases.fullMoon.name": "Full Moon",
    "lunar.phases.fullMoon.description": "Culmination and revelation",
    "lunar.phases.lastQuarter.name": "Last Quarter",
    "lunar.phases.lastQuarter.description": "Release and introspection",
    "lunar.cardGame.instruction": "Choose the card that attracts you",
    "lunar.interpretation.mindset": "Mindset",
    "lunar.interpretation.guidance": "Guidance",
    "loading.lunar.message1": "Connecting to lunar energies...",
    "loading.lunar.message2": "Interpreting cosmic cycles...",
    "loading.lunar.message3": "Revealing your guidance...",
    "loading.lunar.message4": "Preparing your reading...",
    "loading.lunar.subtitle": "The stars are aligning your destiny...",
     "lunar.cardGame.hint": "Listen to your intuition...",
    "lunar.cardGame.singleCard": "A single card will reveal the moon's message",
    "lunar.cardGame.oneChoice": "1 card to choose",
    "lunar.cardGame.oneCard": "1 card",
    "lunar.loading.connecting": "Connecting with lunar energies...",
    "lunar.phaseSelection.cta": "What energy resonates today",
    "lunar.phases.newMoon.keyword": "Begin",
    "lunar.phases.firstQuarter.keyword": "Act",
    "lunar.phases.fullMoon.keyword": "Clarity",
    "lunar.phases.lastQuarter.keyword": "Release",
        "lunar.cardGame.oracle.newMoon.1": "Emerging intentions...",
        "lunar.cardGame.oracle.newMoon.2": "The veil lifts...",
        "lunar.cardGame.oracle.newMoon.3": "Darkness reveals...",
        "lunar.cardGame.oracle.firstQuarter.1": "Momentum builds...",
        "lunar.cardGame.oracle.firstQuarter.2": "Action calls...",
        "lunar.cardGame.oracle.firstQuarter.3": "Choose your path...",
        "lunar.cardGame.oracle.fullMoon.1": "Light illuminates...",
        "lunar.cardGame.oracle.fullMoon.2": "Truth reveals itself...",
        "lunar.cardGame.oracle.fullMoon.3": "The mystery unfolds...",
        "lunar.cardGame.oracle.lastQuarter.1": "Letting go guides...",
        "lunar.cardGame.oracle.lastQuarter.2": "Wisdom speaks...",
        "lunar.cardGame.oracle.lastQuarter.3": "The soul is set free...",
       
    // Lunar Oracle Cards
    // New Moon
    "cards.lunar.intention.name": "Intention",
    "cards.lunar.intention.mindset.var1": "{name}, you feel a deep need to start something new in your life",
    "cards.lunar.intention.mindset.var2": "Right now, {name}, your heart is open and ready to welcome new ideas or desires",
    "cards.lunar.intention.mindset.var3": "You are entering a period where you can start fresh and choose a new direction",
    "cards.lunar.intention.guidance.var1": "Take the time to think about what you really want for yourself.",
    "cards.lunar.intention.guidance.var2": "Set a clear, simple, and honest intention.",
    "cards.lunar.intention.guidance.var3": "Gently imagine your life moving in the direction you wish.",

    "cards.lunar.intuition.name": "Intuition",
    "cards.lunar.intuition.mindset.var1": "{name}, you feel things even if you cannot always explain them",
    "cards.lunar.intuition.mindset.var2": "A small inner voice is trying to guide you right now",
    "cards.lunar.intuition.mindset.var3": "Deep down, you already know what is good for you",
    "cards.lunar.intuition.guidance.var1": "Give yourself a quiet moment to listen to yourself.",
    "cards.lunar.intuition.guidance.var2": "Trust your feelings, even if they are subtle.",
    "cards.lunar.intuition.guidance.var3": "Your intuition is here to protect and help you.",

    "cards.lunar.renouveau.name": "Renewal",
    "cards.lunar.renouveau.mindset.var1": "A new cycle begins for you, {name}, bringing fresh energy",
    "cards.lunar.renouveau.mindset.var2": "Some things from the past are gradually losing their importance",
    "cards.lunar.renouveau.mindset.var3": "You are ready to move forward differently and change what no longer serves you",
    "cards.lunar.renouveau.guidance.var1": "Let go of what no longer brings you positive energy.",
    "cards.lunar.renouveau.guidance.var2": "Allow yourself to change without feeling guilty.",
    "cards.lunar.renouveau.guidance.var3": "Every new beginning starts with a small step.",

    "cards.lunar.eveil.name": "Awakening",
    "cards.lunar.eveil.mindset.var1": "{name}, you are beginning to see things with more awareness",
    "cards.lunar.eveil.mindset.var2": "A new feeling or idea is quietly emerging within you",
    "cards.lunar.eveil.mindset.var3": "You are becoming aware of what is important for you",
    "cards.lunar.eveil.guidance.var1": "Welcome these realizations calmly.",
    "cards.lunar.eveil.guidance.var2": "Don't try to understand everything at once.",
    "cards.lunar.eveil.guidance.var3": "Awakening happens gradually, naturally.",

    "cards.lunar.potentiel.name": "Potential",
    "cards.lunar.potentiel.mindset.var1": "{name}, many possibilities exist for you, even if you cannot see them yet",
    "cards.lunar.potentiel.mindset.var2": "Your future starts to build from what you do now",
    "cards.lunar.potentiel.mindset.var3": "You carry resources inside you that are still untapped",
    "cards.lunar.potentiel.guidance.var1": "Trust your abilities, even if you have doubts.",
    "cards.lunar.potentiel.guidance.var2": "Give time for things to develop.",
    "cards.lunar.potentiel.guidance.var3": "Every small action nourishes your future.",

    "cards.lunar.silence.name": "Silence",
    "cards.lunar.silence.mindset.var1": "{name}, your mind needs calm and rest",
    "cards.lunar.silence.mindset.var2": "Silence helps you better understand your feelings",
    "cards.lunar.silence.mindset.var3": "You do not need immediate answers to move forward",
    "cards.lunar.silence.guidance.var1": "Allow yourself moments without noise or distraction.",
    "cards.lunar.silence.guidance.var2": "Calm allows ideas to settle.",
    "cards.lunar.silence.guidance.var3": "Answers often come when you stop looking for them.",

    // First Quarter
    "cards.lunar.motivation.name": "Motivation",
    "cards.lunar.motivation.mindset.var1": "{name}, you feel a new energy that pushes you to move forward and take action every day",
    "cards.lunar.motivation.mindset.var2": "Your inner drive awakens and encourages you to go toward what matters to you",
    "cards.lunar.motivation.mindset.var3": "You feel a strength to make progress, even little by little",
    "cards.lunar.motivation.guidance.var1": "Channel this energy toward a clear and simple goal.",
    "cards.lunar.motivation.guidance.var2": "Move step by step, without judging or rushing yourself.",
    "cards.lunar.motivation.guidance.var3": "Every small step counts and brings you closer to your goal.",

    "cards.lunar.courage.name": "Courage",
    "cards.lunar.courage.mindset.var1": "{name}, you have the strength to face what comes, even if it is difficult",
    "cards.lunar.courage.mindset.var2": "Your courage grows with every small challenge you overcome",
    "cards.lunar.courage.mindset.var3": "You are stronger and more capable than you really believe",
    "cards.lunar.courage.guidance.var1": "Act despite doubts and fears that appear.",
    "cards.lunar.courage.guidance.var2": "See fear as a signal to move forward, not as an obstacle.",
    "cards.lunar.courage.guidance.var3": "Trust your inner strength; it is always with you.",

    "cards.lunar.epanouissement.name": "Fulfillment",
    "cards.lunar.epanouissement.mindset.var1": "You are moving toward more harmony in your life and choices, {name}",
    "cards.lunar.epanouissement.mindset.var2": "You are getting closer to what truly excites you and makes you happy",
    "cards.lunar.epanouissement.mindset.var3": "Your potential expresses itself naturally when you listen to your heart",
    "cards.lunar.epanouissement.guidance.var1": "Take care to nurture what makes you feel good every day.",
    "cards.lunar.epanouissement.guidance.var2": "Allow yourself to grow at your own pace, without comparison.",
    "cards.lunar.epanouissement.guidance.var3": "Fulfillment comes when you align with what you truly feel.",

    "cards.lunar.determination.name": "Determination",
    "cards.lunar.determination.mindset.var1": "You know what you want and move toward your goals, {name}",
    "cards.lunar.determination.mindset.var2": "Your willpower is strong even in the face of obstacles and difficulties",
    "cards.lunar.determination.mindset.var3": "You are ready to fully commit to what truly matters",
    "cards.lunar.determination.guidance.var1": "Stay true to your direction and choices.",
    "cards.lunar.determination.guidance.var2": "Don't let doubts or obstacles divert you from your path.",
    "cards.lunar.determination.guidance.var3": "Your consistency and perseverance will make a difference in the long run.",

    "cards.lunar.initiative.name": "Initiative",
    "cards.lunar.initiative.mindset.var1": "An impulse pushes you to take action, {name}, listen to this movement",
    "cards.lunar.initiative.mindset.var2": "The time has come to take the first step toward what you desire",
    "cards.lunar.initiative.mindset.var3": "You feel the momentum of beginning and the courage to dare",
    "cards.lunar.initiative.guidance.var1": "Dare to act, even if the path seems unknown.",
    "cards.lunar.initiative.guidance.var2": "Don't postpone what your heart calls you to do now.",
    "cards.lunar.initiative.guidance.var3": "Taking initiative always opens new possibilities.",

    "cards.lunar.strategie.name": "Strategy",
    "cards.lunar.strategie.mindset.var1": "You are thinking clearly and wisely about the next steps in your path, {name}",
    "cards.lunar.strategie.mindset.var2": "Every choice deserves careful thought",
    "cards.lunar.strategie.mindset.var3": "You move forward with discernment, balancing heart and mind",
    "cards.lunar.strategie.guidance.var1": "Plan your actions flexibly and openly.",
    "cards.lunar.strategie.guidance.var2": "Combine reflection and intuition to make the best choices.",
    "cards.lunar.strategie.guidance.var3": "Clarity and calm come from a thoughtful and balanced vision.",
    // Full Moon
    "cards.lunar.clarte.name": "Clarity",
    "cards.lunar.clarte.mindset.var1": "Things are becoming clearer for you, {name}, and you are beginning to understand what was confusing",
    "cards.lunar.clarte.mindset.var2": "A veil is slowly lifting over your situation and everything appears sharper",
    "cards.lunar.clarte.mindset.var3": "You can finally see the truth and what really matters in this cycle",
    "cards.lunar.clarte.guidance.var1": "Use this clarity to make fair and simple decisions.",
    "cards.lunar.clarte.guidance.var2": "Trust what you observe and feel right now.",
    "cards.lunar.clarte.guidance.var3": "The truth brings you a sense of calm and inner peace.",

    "cards.lunar.serenite.name": "Serenity",
    "cards.lunar.serenite.mindset.var1": "A deep inner peace surrounds you and helps you stay centered, {name}",
    "cards.lunar.serenite.mindset.var2": "You feel in harmony with yourself and the world around you",
    "cards.lunar.serenite.mindset.var3": "Everything feels simpler and in its right place, even complicated situations",
    "cards.lunar.serenite.guidance.var1": "Savor this moment of calm and let yourself be carried.",
    "cards.lunar.serenite.guidance.var2": "Breathe deeply and release all tension.",
    "cards.lunar.serenite.guidance.var3": "Serenity is your anchor to move forward with clarity.",

    "cards.lunar.bilan.name": "Reflection",
    "cards.lunar.bilan.mindset.var1": "{name}, it’s time to look back and acknowledge the path you’ve taken",
    "cards.lunar.bilan.mindset.var2": "You become aware of all your growth and what you’ve learned",
    "cards.lunar.bilan.mindset.var3": "Every experience of this cycle has brought valuable lessons",
    "cards.lunar.bilan.guidance.var1": "Celebrate your progress, even the small steps.",
    "cards.lunar.bilan.guidance.var2": "Learn from what you’ve experienced to move forward better.",
    "cards.lunar.bilan.guidance.var3": "This reflection helps you move forward with confidence and wisdom.",

    "cards.lunar.accomplissement.name": "Achievement",
    "cards.lunar.accomplissement.mindset.var1": "You are finally reaping the rewards of your efforts, {name}, and becoming aware of it",
    "cards.lunar.accomplissement.mindset.var2": "A culmination appears and you understand all that you’ve built",
    "cards.lunar.accomplissement.mindset.var3": "You feel proud of yourself and all you have accomplished",
    "cards.lunar.accomplissement.guidance.var1": "Recognize each small success and enjoy it fully.",
    "cards.lunar.accomplissement.guidance.var2": "Welcome this achievement with simplicity and humility.",
    "cards.lunar.accomplissement.guidance.var3": "Take time to celebrate this moment before moving on.",

    "cards.lunar.verite.name": "Truth",
    "cards.lunar.verite.mindset.var1": "An important truth is revealed to you, {name}, and illuminates your situation",
    "cards.lunar.verite.mindset.var2": "You now see things as they are, without filters or illusions",
    "cards.lunar.verite.mindset.var3": "What was hidden becomes clear and obvious, for your benefit",
    "cards.lunar.verite.guidance.var1": "Welcome this truth with openness and courage.",
    "cards.lunar.verite.guidance.var2": "Stay aligned with what you know is right.",
    "cards.lunar.verite.guidance.var3": "This clarity helps you move forward without fear and with confidence.",

    "cards.lunar.gratitude.name": "Gratitude",
    "cards.lunar.gratitude.mindset.var1": "A feeling of gratitude fills you, {name}, and your heart opens",
    "cards.lunar.gratitude.mindset.var2": "You become aware of everything already present in your life",
    "cards.lunar.gratitude.mindset.var3": "You sense the beauty and abundance around you",
    "cards.lunar.gratitude.guidance.var1": "Give thanks for what you have and experience each day.",
    "cards.lunar.gratitude.guidance.var2": "Honor every experience, even the small and subtle ones.",
    "cards.lunar.gratitude.guidance.var3": "Gratitude raises your energy and attracts more good things into your life.",
    // Last Quarter
    "cards.lunar.detachement.name": "Detachment",
    "cards.lunar.detachement.mindset.var1": "It’s time to release what weighs you down, {name}, and free your mind",
    "cards.lunar.detachement.mindset.var2": "You can let go without fear and welcome change",
    "cards.lunar.detachement.mindset.var3": "Some things no longer need to be held onto, let them go gently",
    "cards.lunar.detachement.guidance.var1": "Free yourself without guilt and with kindness towards yourself.",
    "cards.lunar.detachement.guidance.var2": "Detachment opens a new space to breathe and create.",
    "cards.lunar.detachement.guidance.var3": "Trust the flow of life and move at your own pace.",

    "cards.lunar.prisederecul.name": "Perspective",
    "cards.lunar.prisederecul.mindset.var1": "{name}, take a step back and observe your situation calmly",
    "cards.lunar.prisederecul.mindset.var2": "Give yourself time to truly understand what is happening",
    "cards.lunar.prisederecul.mindset.var3": "Stepping back helps you see things more clearly and with clarity",
    "cards.lunar.prisederecul.guidance.var1": "Do not make hasty decisions, breathe first.",
    "cards.lunar.prisederecul.guidance.var2": "Calmness brings clearer and simpler answers.",
    "cards.lunar.prisederecul.guidance.var3": "Allow yourself this time to reflect before acting.",

    "cards.lunar.retourasoi.name": "Return to Self",
    "cards.lunar.retourasoi.mindset.var1": "You feel the need to center yourself, {name}, and truly listen to yourself",
    "cards.lunar.retourasoi.mindset.var2": "Your inner world asks you to take care of yourself",
    "cards.lunar.retourasoi.mindset.var3": "You gently reconnect with your essence and your needs",
    "cards.lunar.retourasoi.guidance.var1": "Take care of yourself with gentleness and attention.",
    "cards.lunar.retourasoi.guidance.var2": "Listen to what your heart and body are asking for.",
    "cards.lunar.retourasoi.guidance.var3": "This return to yourself makes you stronger and more serene.",

    "cards.lunar.pardon.name": "Forgiveness",
    "cards.lunar.pardon.mindset.var1": "You are ready to lighten your heart, {name}, and free yourself from the past",
    "cards.lunar.pardon.mindset.var2": "The past can be healed if you choose to forgive",
    "cards.lunar.pardon.mindset.var3": "Forgiveness offers inner freedom and deep relief",
    "cards.lunar.pardon.guidance.var1": "Release the weight of grudges without judging yourself.",
    "cards.lunar.pardon.guidance.var2": "Forgiveness starts with you and for you.",
    "cards.lunar.pardon.guidance.var3": "Let go of what holds you back to move forward lighter.",

    "cards.lunar.sagesse.name": "Wisdom",
    "cards.lunar.sagesse.mindset.var1": "You integrate what you’ve experienced, {name}, and understand the lessons learned better",
    "cards.lunar.sagesse.mindset.var2": "Every experience now takes on a deeper meaning",
    "cards.lunar.sagesse.mindset.var3": "Your understanding becomes clearer and guides your choices",
    "cards.lunar.sagesse.guidance.var1": "Honor your journey and everything you’ve been through.",
    "cards.lunar.sagesse.guidance.var2": "Trust your experiences to guide your next steps.",
    "cards.lunar.sagesse.guidance.var3": "Wisdom arises from integration and listening to yourself.",

    "cards.lunar.repos.name": "Rest",
    "cards.lunar.repos.mindset.var1": "Your body and mind need rest, {name}, it’s natural",
    "cards.lunar.repos.mindset.var2": "The cycle is ending and you can slow down without guilt",
    "cards.lunar.repos.mindset.var3": "Allow yourself to recover to start again refreshed",
    "cards.lunar.repos.guidance.var1": "Give yourself rest and listen to your needs.",
    "cards.lunar.repos.guidance.var2": "Calm and relaxation prepare a fresh start.",
    "cards.lunar.repos.guidance.var3": "Rest is part of the path and makes you stronger.",
    
    // Horoscope Data Translations - Date Ranges
    "horoscope.data.dates.aries": "March 21 - April 19",
    "horoscope.data.dates.taurus": "April 20 - May 20",
    "horoscope.data.dates.gemini": "May 21 - June 20",
    "horoscope.data.dates.cancer": "June 21 - July 22",
    "horoscope.data.dates.leo": "July 23 - August 22",
    "horoscope.data.dates.virgo": "August 23 - September 22",
    "horoscope.data.dates.libra": "September 23 - October 22",
    "horoscope.data.dates.scorpio": "October 23 - November 21",
    "horoscope.data.dates.sagittarius": "November 22 - December 21",
    "horoscope.data.dates.capricorn": "December 22 - January 19",
    "horoscope.data.dates.aquarius": "January 20 - February 18",
    "horoscope.data.dates.pisces": "February 19 - March 20",

    // ENGLISH - All new translations for variations

    // ========== VARIED GREETINGS ==========

    // Daily reading - variants
    "interpretation.daily.greeting.var1":
      "Hi {name}! I have a special message for you today.",
    "interpretation.daily.greeting.var2":
      "Hey {name}! Your daily guide is waiting for you with anticipation.",
    "interpretation.daily.greeting.var3":
      "Hello {name}! A beautiful energy accompanies you today.",
    "interpretation.daily.greeting.var4":
      "Good day {name}! Cosmic energies have prepared something for you.",

    // Tarot - variants
    "interpretation.tarot.greeting.var1":
      "Hey {name}! Your Tarot reading reveals fascinating aspects of your life.",
    "interpretation.tarot.greeting.var2":
      "Hello {name}! The Tarot cards have powerful messages for you.",
    "interpretation.tarot.greeting.var3":
      "Good day {name}! Your Tarot reading unveils important truths.",
    "interpretation.tarot.greeting.var4":
      "Hi {name}! The Tarot arcana speak clearly about your future.",

    // Angels - variants
    "interpretation.angels.greeting.var1":
      "Hi {name}! The angelic realm overflows with messages of love for you.",
    "interpretation.angels.greeting.var2":
      "Hey {name}! Your celestial guides illuminate your path today.",
    "interpretation.angels.greeting.var3":
      "Hello {name}! Angels sing melodies of guidance especially for you.",
    "interpretation.angels.greeting.var4":
      "Good day {name}! An angelic symphony resonates in the celestial spheres for you.",

    // Runes - variants
    "interpretation.runes.greeting.var1":
      "Heil {name}! The ancient runes speak of your Viking heritage.",
    "interpretation.runes.greeting.var2":
      "Hi {name}! The echo of Nordic gods resonates through these sacred runes.",
    "interpretation.runes.greeting.var3":
      "Good day {name}! The millennial runes reveal the strength that slumbers within you.",
    "interpretation.runes.greeting.var4":
      "Hello {name}! Viking wisdom crosses the ages to guide you.",

    // ========== VARIED TRANSITIONS ==========

    // Past transitions
    "interpretation.transition.past.var1":
      "These experiences have truly made you grow and made you stronger.",
    "interpretation.transition.past.var2":
      "These moments have forged your character and resilience.",
    "interpretation.transition.past.var3":
      "All this has contributed to shaping the person you have become.",
    "interpretation.transition.past.var4":
      "These trials have given you precious wisdom.",
    "interpretation.transition.past.var5":
      "It's thanks to these experiences that you developed your inner strength.",
    "interpretation.transition.past.var6":
      "These events have taught you important lessons about life.",
    "interpretation.transition.past.var7":
      "All this experience has enriched your soul and your journey.",
    "interpretation.transition.past.var8":
      "These challenges have revealed your true nature and determination.",

    // Present transitions
    "interpretation.transition.present.var1":
      "You are in an important period that announces beautiful things ahead.",
    "interpretation.transition.present.var2":
      "This phase of your life opens promising perspectives.",
    "interpretation.transition.present.var3":
      "It's a key moment that prepares your radiant future.",
    "interpretation.transition.present.var4":
      "This current period lays the foundation for your future success.",
    "interpretation.transition.present.var5":
      "You're living a transition that will transform your life positively.",
    "interpretation.transition.present.var6":
      "This present moment carries great promises.",
    "interpretation.transition.present.var7":
      "This stage marks a positive turning point in your existence.",
    "interpretation.transition.present.var8":
      "You're going through a phase that will bring you much satisfaction.",

    // Future transitions
    "interpretation.transition.future.var1":
      "This energy will transform your life in a positive and lasting way.",
    "interpretation.transition.future.var2":
      "These influences will bring wonderful changes to your life.",
    "interpretation.transition.future.var3":
      "This force will create extraordinary opportunities for you.",
    "interpretation.transition.future.var4":
      "These vibrations will attract everything you need.",
    "interpretation.transition.future.var5":
      "This energy will manifest your dearest dreams.",
    "interpretation.transition.future.var6":
      "These divine influences will illuminate your path.",
    "interpretation.transition.future.var7":
      "This power will unlock your hidden potential.",
    "interpretation.transition.future.var8":
      "These energies will synchronize all aspects of your life.",

    // ========== VARIED ADVICE ==========

    // Templates for the final message ANGE (début de phrase) 
    "interpretation.angels.template.message.var1":"The angels watch over you {name} and send you an important guidance:",
    "interpretation.angels.template.message.var2":"A gentle message is addressed to you {name}. The guides wish for you to hear this:",
    "interpretation.angels.template.message.var3":"Heavenly presences accompany you {name} and whisper this message to you:",
    "interpretation.angels.template.message.var4":"A luminous energy surrounds you today {name}. Here is the guidance it brings:",
    "interpretation.angels.template.message.var5":"{name}, the angels wrap you in kindness and convey this to you:",
    "interpretation.angels.template.message.var6":"An angelic presence approaches you {name}. Open your heart to this message:",
    "interpretation.angels.template.message.var7":"Your soul is heard {name}. The angels share this advice with you to move forward:",
    "interpretation.angels.template.message.var8":"A divine presence turns toward you {name}. Here is the message you are ready to receive:",

    // Advice variations ANGEL (fin de phrase )
    "interpretation.advice.var1":"Your guardian angel wants you to know that your intuition is a reliable guide: trust it fully.",
    "interpretation.advice.var2":"The angels remind you to listen to your heart: it already knows the direction that will bring you peace.",
    "interpretation.advice.var3":"Your light guide invites you to pay attention to the signs around you, for nothing appears by chance.",
    "interpretation.advice.var4":"Heavenly beings want you to stay aligned with what you deeply feel. There lies your truth.",
    "interpretation.advice.var5":"Your protective angel encourages you to believe in your inner strength: it never abandons you.",
    "interpretation.advice.var6":"A divine whisper urges you to open yourself to the opportunities that arise: they are here to help you.",
    "interpretation.advice.var7":"The angels ask you to slow down and breathe: patience will naturally clarify your path.",
    "interpretation.advice.var8":"Your angelic guide wants you to keep moving forward with confidence: your efforts are already blessed.",
    "interpretation.advice.var9":"A celestial light invites you to preserve your optimism, for it attracts highly positive energies toward you.",
    "interpretation.advice.var10":"Your guardian angel whispers to you to strengthen your self-confidence: it opens the doors you have long awaited.",
    
    // TAROT phrase beginnings
    "interpretation.tarot.template.advice.var1":"Listen carefully {name},",
    "interpretation.tarot.template.advice.var2":"My advice for you {name},",
    "interpretation.tarot.template.advice.var3":"I’m going to tell you something {name},",
    "interpretation.tarot.template.advice.var4":"Know one thing {name},",
    "interpretation.tarot.template.advice.var5":"Take a moment {name},",
    "interpretation.tarot.template.advice.var6":"I’ll say it clearly {name},",
    "interpretation.tarot.template.advice.var7":"Here’s my advice for you {name},",
    "interpretation.tarot.template.advice.var8":"I’m telling you {name},",
    "interpretation.tarot.template.advice.var9":"Don’t forget {name},",
    "interpretation.tarot.template.advice.var10":"{name},",

    // TAROT phrase endings
    "interpretation.tarot.advice.var1":"your current choices will directly impact your future, so stay alert.",
    "interpretation.tarot.advice.var2":"Trust your instincts and dare to take the path that feels right, even if it scares you a little.",
    "interpretation.tarot.advice.var3":"your emotions are powerful guides, follow them with confidence.",
    "interpretation.tarot.advice.var4":"sometimes it’s better to let go than to force things.",
    "interpretation.tarot.advice.var5":"you have all the keys to succeed, so don’t give up!",
    "interpretation.tarot.advice.var6":"you already have everything inside you to move forward: believe in yourself!",
    "interpretation.tarot.advice.var7":"don’t let doubt hold you back, move forward anyway.",
    "interpretation.tarot.advice.var8": "Your intuition clearly shows you the right path to follow. Trust it completely!",
    "interpretation.tarot.advice.var9":"stay positive, your energy attracts what you need.",
    "interpretation.tarot.advice.var10":"accept what comes and go for it, the time is right.",
    
// WIZARD
    "wizard.title": "Azraël the Seer",
    "wizard.subtitle.home": "The great wizard reveals the mysteries of your destiny",
    "wizard.subtitle.question": "Formulate your question clearly",
    "wizard.subtitle.channeling": "✧ Azraël consults the cosmic forces... ✧",
    "wizard.subtitle.answer": "✦ Mystical Revelation ✦",
    "oracle.wizard.description": "Consult the great wizard to reveal your destiny",
    "wizard.oracleResponse": "Azrael's answer",
    "wizard.consultButton": "Consult Azraël",
    "wizard.backButton": "← Back",
    "wizard.backHome": "← Back to home",
    "wizard.newQuestion": "New Question",
    "wizard.askTitle": "Ask Your Question",
    "wizard.questionLabel": "Your question to the wizard",
    "wizard.questionPlaceholder": "Write your question...",
    "wizard.adviceTitle": "Mystical Advice",
    "wizard.adviceText": "Azraël answers yes, no, or maybe. Ask a closed question to receive guidance from the stars.",
    "wizard.consultAction": "Consult Azraël",
    "wizard.channeling": "Azraël consults the cosmic forces...",
    "wizard.astraConnection": "⟡ Astral connection",
    "wizard.yourQuestion": "Your question",
    "wizard.disclaimer": "Azraël's answers are symbolic and for entertainment purposes. Listen to your heart for important choices.",
    "wizard.answer.yes": "The stars confirm: Yes, without a shadow of doubt",
    "wizard.answer.no": "The stars oppose: No, this path is not yours",
    "wizard.answer.maybe": "Destiny hesitates: Maybe, stay alert to the signs",
    "wizard.answer.veryLikely": "Cosmic forces align favorably",
    "wizard.answer.unlikely": "The omens are unfavorable for now",
    "wizard.answer.certain": "Absolute certainty: The cosmos has spoken",
    "wizard.answer.noChance": "No chance: The stars guide you elsewhere",
    "wizard.answer.askLater": "The time is not right, come back later",
    "wizard.answer.dontCount": "Don't count on it: Other doors will open",
    "wizard.answer.yesDefinitely": "Yes, definitely! The energies are perfect",
    "wizard.answer.signsYes": "All signs point to yes",
    "wizard.answer.signsNo": "The omens are clear: No",
    "wizard.answer.unclear": "The veil between worlds remains opaque",
    "wizard.answer.trustIntuition": "Listen to your inner voice, it knows the truth",

     // MENU LÉGAL
    "legal.menu.title": "Legal menu",
    "legal.mentions": "Legal notices",
    "legal.privacy": "Privacy policy",

    // PREMIUM MODAL
    "premium.button.label": "Become Premium",
    "premium.title": "Remove Ads!",
    "premium.subtitle": "Do your readings without ads!",
    "premium.plan.1month": "1 Month",
    "premium.plan.1month.subtitle": "No commitment",
    "premium.plan.3months": "3 Months",
    "premium.plan.3months.subtitle": "Best offer",
    "premium.plan.discount": "-25%",
    "premium.button.subscribe": "Subscribe now",
    "premium.button.select": "Select an offer",
    "premium.button.processing": "Processing...",
    "premium.benefits.ads": "No advertisements",
    "premium.benefits.notes": "Notes and favorites",
    "premium.benefits.history": "Full history of your readings",
    "premium.confirm.1month": "Confirm payment of €3.99 for 1 month?",
    "premium.confirm.3months": "Confirm payment of €8.98 for 3 months?",
    "premium.success":"Subscription successfully activated! Enjoy your ad-free experience!",
    "premium.error.activation": "Error while activating subscription",
    "premium.error.payment": "Payment error. Please try again.",
    "premium.manage": "Manage my subscription (cancel, invoices...)",
    "premium.expired": "Your Premium access has expired",
    "premium.expiringSoon": "Your Premium access is expiring soon",
    "premium.conditions.line1":"🔒 Secure payment via Google Play",
    "premium.conditions.line2": "✓ One-time payment, NO automatic renewal",
    "premium.conditions.line3": "No refund after payment. Premium access valid for the selected duration.",
    "premium.conditions.line4": "You will be notified 3 days before your access expires.",
    "premium.securePaymentBy": "Secure payment by",
    "premium.restoreSubscription": "Restore a subscription",
    "premium.backToPurchases": "Back to purchases",
    "premium.payment.googlePlay": "Google Play Payment",
    "premium.payment.stripe": "Stripe Web Payment",
    "premium.restoreEmailLabel": "Your Email",
    "premium.restore": "Restore",
    "premium.buy": "Buy",
    "premium.error.invalidEmail": "The email address is not valid.",
    "premium.error.noActivePremium": "No active subscription found",

    // PREMIUM RESTOR
    "premium.restore.title": "Restore my subscription",
    "premium.restore.subtitle": "Already Premium? Recover your access",
    "premium.restore.description": "Enter the email used when purchasing Premium",
    "premium.restore.button": "Restore",
    "premium.restore.verifying": "Verifying...",
    "premium.restore.success": "Premium successfully restored!",
    "premium.restore.redirecting": "Redirecting...",
    "premium.restore.notFound": "No Premium subscription found for this email. Check the address or subscribe to a new plan.",
    "premium.restore.error": "An error occurred while restoring. Please try again.",
    "premium.restore.info":"The Premium subscription is linked to the Google account used for the purchase on Google Play.",
    "premium.restore.help": "Need help?",
    "premium.restore.contact": "Contact us",
    "premium.error.emailRequired": "Email is required.",
    "premium.error.emailInvalid": "Email is not valid.",
    "premium.emailLabel": "Your email",
    "premium.emailHelp": "To retrieve your subscription",
    "premium.poweredBy": 'Powered by',
    "premium.backToPurchase": "Back to Purchases",
    "premium.button.loading": "Loading...",
    "premium.loading.offers": "Loading offers...",
    "premium.button.restoring": "Restoring...",
    "premium.error.loadFailed": "Failed to load offers",
    "premium.error.purchaseFailed": "Error during purchase",
    "premium.error.unknown": "Unknown error",

    // PAGE PAIEMENT SUCESS CANCEL
    "payment.success.title": "Payment Successful!",
    "payment.success.verified": "Your Premium account has been activated",
    "payment.success.activating": "Activation in progress...",
    "payment.success.benefits": "Enjoy all Premium features!",
    "payment.success.noAds": "Ad-free",
    "payment.success.fullHistory": "Full history",
    "payment.success.redirecting": "Automatic redirection to oracles...",
    "payment.cancel.title": "Payment Cancelled",
    "payment.cancel.message": "You cancelled the payment",
    "payment.cancel.retry": "You can try again anytime from the Premium menu",
    "payment.cancel.redirecting": "Returning to oracle selection...",
    "premium.upgrade":"Go Premium",
    "premium.purchase":"Become Premium",
    "premium.purchaseDesc":"New subscription",
    "premium.restoreDesc":"I have already paid",
    "premium.unlimited":"Unlimited",
    "premium.mobileOnly.title":"Mobile app only",
    "premium.mobileOnly.description":"Premium purchases are available only through the Android mobile app (Google Play).",
    "premium.mobileOnly.instruction":"Download the app from the Google Play Store to access Premium.",
    "premium.benefits.grimoire":"Unlimited grimoire",
    "premium.benefits.unlimited":"Unlimited readings",
    "premium.benefits.noAds":"Ad-free experience",
    "premium.benefits.allOracles":"All oracles unlocked",
    "premium.benefits.deepInterpretations":"In-depth interpretations",
    "premium.restore.mobileOnly":"Subscription restoration is available only through the Android mobile app.",

    //Wheel of Destiny
    "oracle.wheel.title": "Wheel of Destiny",
    "oracle.wheel.subtitle": "Spin the wheel to discover your fate",
    "oracle.wheel.description": "Let destiny guide the wheel toward your future",
    "oracle.wheel.exclusiveBadge": "EXCLUSIVE BONUS",
    "oracle.wheel.shortDescription": "Discover your mystical fate",
    "oracle.wheel.spinButton": "Spin the Wheel",
    "oracle.wheel.newSpin": "New Spin",
    "oracle.wheel.spinning": "The wheel is spinning...",
    "premium.badge": "👑 Premium",
    "oracle.wheel.segment.love": "Love",
    "oracle.wheel.segment.work": "Work",
    "oracle.wheel.segment.money": "Money",
    "oracle.wheel.segment.health": "Health",
    "oracle.wheel.segment.family": "Family",
    "oracle.wheel.segment.success": "Success",
    "oracle.wheel.segment.friendship": "Friends",
    "oracle.wheel.segment.mystery": "?",
    "oracle.wheel.adRequired": "An ad will be shown to you",
    "oracle.wheel.premiumAccess": "Instant access with no ads",
    "oracle.wheel.startButton": "Unlock the Wheel of Destiny",
    "oracle.wheel.startButtonPremium": "Spin the Wheel",
    "oracle.wheel.loadingAd": "Loading...",
    "oracle.wheel.pleaseWait": "One moment",
    "oracle.wheel.adLongWarning": "Ad in progress...",
    "oracle.wheel.pleaseWaitUntilEnd": "Please wait",
    "oracle.wheel.adNotCompleted": "Please watch the ad until the end",
    "oracle.wheel.adError": "An error occurred. Try again.",
    "oracle.wheel.variations.golden": "Golden Wheel",
    "oracle.wheel.variations.silver": "Silver Wheel",
    "oracle.wheel.variations.cosmic": "Cosmic Wheel",
    "oracle.wheel.destinyRevealed": "Your destiny is revealed",
    "common.pleaseWait": "Please wait",
    "oracle.wheel.watchAdToUnlock": "Watch the ad to unlock",

    // Destiny Wheel Interpretations
    "oracle.wheel.love.title.1": "💖 Love Smiles At You",
    "oracle.wheel.love.message.1": [
      "An important encounter is coming soon and could change your life. Open your heart and let yourself be surprised.",
      "The love you are looking for is closer than you think. Stay alert to the signs around you.",
      "A strong and sincere connection can form at any moment. Stay open and receptive to beautiful emotions."
    ],
    "oracle.wheel.love.title.2": "💫 Intense Passion",
    "oracle.wheel.love.message.2": [
      "An intense passion will touch your life. Don't hold back your emotions and fully enjoy every moment.",
      "Your feelings will intensify. Don't be afraid to show what you truly feel.",
      "A special connection is on its way to you. Let it reveal itself naturally and without constraint."
    ],
    "oracle.wheel.love.title.3": "🌹 Romance Ahead",
    "oracle.wheel.love.message.3": [
      "A beautiful romance is about to manifest. Stay alert to opportunities around you.",
      "Someone important could enter your life very soon. Be ready to welcome this encounter.",
      "Love destiny offers you a surprise. Open your heart and let your emotions guide you."
    ],
    "oracle.wheel.love.title.4": "💕 True Love",
    "oracle.wheel.love.message.4": [
      "Your heart will be filled with joy and beautiful emotions. Enjoy every moment with those you love.",
      "Positive and enriching experiences in love are coming. Let them inspire you.",
      "A loving energy surrounds you. Follow it and let it guide your actions and choices."
    ],
    "oracle.wheel.work.title.1": "💼 Career Success",
    "oracle.wheel.work.message.1": [
      "An important project will come to fruition. Put all your energy into succeeding and you will see the results.",
      "Your past efforts will finally pay off. Stay focused and keep moving forward.",
      "A well-deserved recognition is coming for your work. Be ready to seize this opportunity and shine."
    ],
    "oracle.wheel.work.title.2": "🚀 Major Opportunity",
    "oracle.wheel.work.message.2": [
      "A unique chance is presenting itself in your career. Don't hesitate to take it; the timing is perfect.",
      "A contact or proposal could change your professional life. Stay alert and responsive.",
      "A decisive turning point is near. Prepare to act quickly to fully take advantage of this opportunity."
    ],
    "oracle.wheel.work.title.3": "⚡ Key Advancement",
    "oracle.wheel.work.message.3": [
      "An obstacle is turning into an opportunity. Seize the moment to move forward and prove your skills.",
      "You are about to cross an important milestone. Don't doubt yourself, just go for it.",
      "A positive development in your work is imminent. Stay confident and determined to grasp it."
    ],
    "oracle.wheel.work.title.4": "🎯 Goal in Sight",
    "oracle.wheel.work.message.4": [
      "You are close to achieving what you desire. Focus and put all your strength into this goal.",
      "A crucial step is coming. Be persistent and stay the course to reach your objective.",
      "Your efforts will finally pay off. Stay motivated and do what is needed to realize your ambitions."
    ],
    "oracle.wheel.money.title.1": "💰 Prosperity Ahead",
    "oracle.wheel.money.message.1": [
      "Money is coming your way soon. Prepare to handle this opportunity wisely.",
      "Your past financial efforts are starting to bear fruit. Stay alert and make the right choices.",
      "An unexpected event could boost your finances. Seize this chance and take advantage smartly."
    ],
    "oracle.wheel.money.title.2": "💸 Controlled Spending",
    "oracle.wheel.money.message.2": [
      "An unexpected expense may occur. Stay calm and turn it into a lesson to manage better.",
      "You may need to make tough financial choices, but it will lead you toward greater stability.",
      "A temporary loss might surprise you. Use this experience to strengthen your financial security."
    ],
    "oracle.wheel.money.title.3": "⚡ Unexpected Gain",
    "oracle.wheel.money.message.3": [
      "A small, unexpected gain will brighten your day. Use it to move forward on your projects.",
      "Someone might offer you financial help. Accept it and turn it into an opportunity.",
      "A return on investment will come where you least expect it. Be ready to make the most of it."
    ],
    "oracle.wheel.money.title.4": "🎯 Financial Goal",
    "oracle.wheel.money.message.4": [
      "You are close to reaching an important goal. Stay focused and avoid distractions.",
      "A crucial step in your finances is approaching. Put all your energy into achieving your target.",
      "Your financial efforts will pay off. Stay motivated and keep moving forward with confidence."
    ],
    "oracle.wheel.health.title.1": "💪 Peak Vitality",
    "oracle.wheel.health.message.1": [
      "Your energy will be at its peak in the coming days. Use it to advance and achieve your projects.",
      "You will feel strong and motivated. Use this energy to focus on your priorities.",
      "A period of high vitality is coming. Move, explore, and let your body and mind thrive."
    ],
    "oracle.wheel.health.title.2": "🌿 Perfect Balance",
    "oracle.wheel.health.message.2": [
      "You will find a beautiful balance between body and mind. Take time to refocus and recharge.",
      "Your daily rhythm becomes harmonious. Reconnect with yourself and your needs.",
      "A sense of serenity will accompany you. Use it to move forward with clarity and confidence."
    ],
    "oracle.wheel.health.title.3": "⚡ Energy Boost",
    "oracle.wheel.health.message.3": [
      "A surge of energy is coming. Use it for your key goals and actions.",
      "You will be highly motivated to take initiative and succeed. Seize this chance to move and act.",
      "Your dynamism will radiate around you. Use it to create, advance, and surpass yourself."
    ],
    "oracle.wheel.health.title.4": "🌞 Total Wellbeing",
    "oracle.wheel.health.message.4": [
      "You will feel good in your body and mind. Let this wellbeing inspire you every day.",
      "A feeling of lightness and comfort will accompany you. Use it to fully enjoy every moment.",
      "Calm and serenity fill your daily life. Follow this energy to make the right decisions."
    ],
    "oracle.wheel.family.title.1": "🏡 Family Harmony",
    "oracle.wheel.family.message.1": [
      "A beautiful period of closeness is coming. Enjoy every moment spent with your loved ones.",
      "Your family bonds will grow stronger. Show affection and attention — it will be appreciated.",
      "A moment of warmth and sharing awaits you. Be present and open to others."
    ],
    "oracle.wheel.family.title.2": "⚖️ Reconciliation",
    "oracle.wheel.family.message.2": [
      "A small argument may arise, but it will lead to better mutual understanding.",
      "You will have the opportunity to repair a misunderstanding. Be patient and listen with your heart.",
      "A disagreement turns into a moment of closeness. Use this chance to build stronger connections."
    ],
    "oracle.wheel.family.title.3": "🎉 Joyful Moments",
    "oracle.wheel.family.message.3": [
      "Happy moments with your loved ones are coming. Cherish every laugh and every smile.",
      "A special family day will bring joy and precious memories. Be fully present.",
      "You will feel the warmth and support of those who love you. Let this energy guide you."
    ],
    "oracle.wheel.family.title.4": "💖 Mutual Support",
    "oracle.wheel.family.message.4": [
      "Your family will be there for you when you need it. Don't hesitate to lean on them.",
      "You will be able to support and help someone close to you. These moments will strengthen your bond.",
      "A positive dynamic settles in your family relationships. Share, listen, and love without limits."
    ],

    "oracle.wheel.success.title.1": "🏆 Success Incoming",
    "oracle.wheel.success.message.1": [
      "You will soon achieve a success that will surprise you. The efforts you made, even in difficult moments, are finally paying off.",
      "What once seemed impossible becomes reachable. You will see concrete results from your hard work and enjoy the recognition you deserve.",
      "An unexpected opportunity will allow you to shine. Stay alert, get ready, and seize it with confidence."
    ],
    "oracle.wheel.success.title.2": "🚀 Rapid Progress",
    "oracle.wheel.success.message.2": [
      "Everything you do now pushes you to a higher level. Your decisions this week will greatly impact your future, so stay focused and move forward without fear.",
      "Your daily efforts, even the small ones, stack up and will create fast progress toward your goals. Keep going and never doubt yourself.",
      "A major shift is coming that will accelerate your success. You’ll need to adapt quickly, but the results will be worth it."
    ],
    "oracle.wheel.success.title.3": "⚡ Powerful Comeback",
    "oracle.wheel.success.message.3": [
      "What looked like a failure will transform into an incredible opportunity. Your mistakes prepared you for bigger success — trust the process and keep going.",
      "A difficult situation from the past will bring an unexpected reward. You’ll see that every challenge made you stronger.",
      "A setback you experienced becomes your launchpad. You’ll find a new way to succeed, and the outcome will be impressive."
    ],
    "oracle.wheel.success.title.4": "🎯 Goal Achieved",
    "oracle.wheel.success.message.4": [
      "Everything you’ve been working on for weeks or months is finally coming together. You’ll feel proud and fulfilled for pushing through doubts and obstacles.",
      "You will reach a goal you thought was still out of reach. Celebrate your progress and prepare for the next step with confidence.",
      "The success you’ve been waiting for will finally manifest. You’ll understand that every choice led you exactly here."
    ],

    "oracle.wheel.friendship.title.1": "🤝 Solid Friendship",
    "oracle.wheel.friendship.message.1": [
      "You will experience a strong moment with a friend who truly matters. Bonds you thought were fragile will grow stronger and more sincere.",
      "A friend will surprise you with generosity or support. You’ll see that real relationships reveal themselves during meaningful moments.",
      "This week, you’ll have the chance to show your friends how much they matter. One gesture or word will strengthen a precious bond."
    ],
    "oracle.wheel.friendship.title.2": "💬 Key Conversation",
    "oracle.wheel.friendship.message.2": [
      "An important conversation will clarify a delicate situation with a friend. You’ll understand people better and know how to act with clarity.",
      "You will receive valuable advice from someone you trust. Listen carefully — it may change how you handle your relationships.",
      "An unexpected conversation will shed new light on a friendship. Open dialogue will help resolve misunderstandings and reinforce bonds."
    ],
    "oracle.wheel.friendship.title.3": "🌟 New Connection",
    "oracle.wheel.friendship.message.3": [
      "A new person will enter your life and could become a meaningful friend. Stay open — this meeting may enrich your world.",
      "You will meet someone who shares your values and interests. A beautiful friendship could be born from this unexpected encounter.",
      "A strong and sincere bond can form with someone you didn’t expect. Don’t close your heart; let the connection grow naturally."
    ],
    "oracle.wheel.friendship.title.4": "⚡ Conflict Resolution",
    "oracle.wheel.friendship.message.4": [
      "A past misunderstanding or argument will be resolved. You’ll speak honestly and strengthen the friendship.",
      "You’ll have the chance to repair a fragile bond and show how much you care. This will bring more trust and closeness than before.",
      "A delicate situation will turn into an opportunity for reconnection. Sometimes conflict is exactly what deepens true friendship."
    ],

    "oracle.wheel.mystery.title.1": "❓ Total Surprise",
    "oracle.wheel.mystery.message.1": [
      "You will face an unexpected situation that shakes you. Stay calm and watch carefully — what looks chaotic might teach you something powerful.",
      "An unlikely event will disrupt your day. What seems like a problem could become an incredible opportunity if you welcome it.",
      "Something completely unexpected is coming your way. Be ready to improvise — this surprise could shift your entire perspective."
    ],
    "oracle.wheel.mystery.title.2": "💥 Sudden Shock",
    "oracle.wheel.mystery.message.2": [
      "You will discover a secret or truth that deeply surprises you. The shock may be tough, but it will help you grow stronger and clearer.",
      "An unexpected revelation will shake your routine. Don’t panic — this change contains a precious lesson you must grasp quickly.",
      "Prepare to see things differently. Something you thought was stable will break open, revealing a new path forward."
    ],
    "oracle.wheel.mystery.title.3": "🌪 The Storm",
    "oracle.wheel.mystery.message.3": [
      "You will go through a chaotic moment where everything feels out of control. Stay grounded — chaos often brings the most surprising transformations.",
      "A chain of small disruptions will catch you off guard. Instead of resisting, let yourself adapt — every complication hides a gift.",
      "Life will push you out of your comfort zone. This turbulence is necessary for your evolution and will reveal a new side of you."
    ],
    "oracle.wheel.mystery.title.4": "🌀 Uncertain Destiny",
    "oracle.wheel.mystery.message.4": [
      "You will find yourself at a crossroads where your choices have unexpected consequences. Don’t rush — trust your instincts to guide you.",
      "A mysterious event will force you to question what you thought was certain. Accept the unknown and use it to grow.",
      "Destiny will surprise you with unexpected situations. Embrace the unknown — the greatest opportunities are hidden there."
    ],

    "oracle.backToOracles": "Back to oracles",

    // Common
    "common.back": "Back",
    "common.home": "Home",
    "common.language": "Language",
  },

  es: {
    // Landing Page
    "landing.title": "TarotMystik",
    "landing.subtitle":
      "Descubre los misterios de tu destino a través de las cartas, las estrellas y la sabiduría ancestral",
    "landing.enter": "ENTRAR",
    "landing.ads.support": "Los anuncios nos ayudan a mantener la aplicación gratuita",

    // 🆕 Disclaimer - AGREGAR AQUÍ
     "disclaimer.title": "Aviso Importante",
      "disclaimer.text": "TarotMystik es una aplicación de entretenimiento y desarrollo personal. Consulte a expertos cualificados para cualquier decisión importante.",
      "disclaimer.note": "Al continuar, acepta utilizar esta aplicación con fines de entretenimiento.",
      "disclaimer.accept": "Entendido",
      "disclaimer.legal": "Esta aplicación cumple con el RGPD.",

    //Avis Playstore
    "rating.title": "¿Te gusta TarotMystik?",
      "rating.subtitle": "¡Tu opinión es muy importante para nosotros! Tómate un momento para calificar la app.",
      "rating.thanksGood": "¡Gracias! Tu opinión nos ayuda mucho 🌟",
      "rating.feedback": "Gracias por tu comentario. ¿Cómo podemos mejorar tu experiencia?",
      "rating.rate": "Calificar la app",
      "rating.later": "Más tarde",
      "rating.never": "No volver a preguntar",

    // No-repeat system
    "system.antirepeat.loading": "Las cartas se están mezclando...",
    "system.antirepeat.active": "Sistema anti-repetición activo",
    "system.cards.refreshed": "Nuevas cartas disponibles",

    // Name Page
    "name.title": "Nombre",
    "name.subtitle":
      "¿Cómo te gusta que te llamen? Introduce tu nombre o apodo",
    "name.placeholder": "Introduce tu nombre",
    "name.next": "SIGUIENTE",

    // Date Page
    "date.title": "Fecha de Nacimiento",
    "date.subtitle":
      "Revela tu signo astrológico para una adivinación personalizada",
    "date.day": "Día",
    "date.month": "Mes",
    "date.year": "Año",
    "date.next": "SIGUIENTE",
    "date.months.1": "Enero",
    "date.months.2": "Febrero",
    "date.months.3": "Marzo",
    "date.months.4": "Abril",
    "date.months.5": "Mayo",
    "date.months.6": "Junio",
    "date.months.7": "Julio",
    "date.months.8": "Agosto",
    "date.months.9": "Septiembre",
    "date.months.10": "Octubre",
    "date.months.11": "Noviembre",
    "date.months.12": "Diciembre",

    // Gender Page
    "gender.title": "Género",
    "gender.subtitle": "Introduce tu género para proporcionar contexto a la IA",
    "gender.male": "Masculino",
    "gender.female": "Femenino",
    "gender.other": "Otro",
    "gender.next": "COMENZAR",
    "gender.back": "ATRÁS",

    //Barre de navigation
    "menu.open": "Abrir menú",
      "profile.open": "Abrir perfil",
      "profile.birthdate": "Fecha de nacimiento",
      "profile.gender": "Género",
      "profile.zodiac": "Signo zodiacal",
      "profile.edit": "Editar mi perfil",
      "profile.edit.title": "Editar mi perfil",
      "profile.edit.subtitle": "Actualiza tu información personal",
      "profile.edit.error": "Por favor, completa todos los campos",
      "premium.active": "Activo",
      "locale": "es-ES",
      "common.cancel": "Cancelar",
      "common.save": "Guardar",
      "name.label": "Nombre",

    // Zodiac signs names
    "zodiac.signs.aries": "Aries",
    "zodiac.signs.taurus": "Tauro",
    "zodiac.signs.gemini": "Géminis",
    "zodiac.signs.cancer": "Cáncer",
    "zodiac.signs.leo": "Leo",
    "zodiac.signs.virgo": "Virgo",
    "zodiac.signs.libra": "Libra",
    "zodiac.signs.scorpio": "Escorpio",
    "zodiac.signs.sagittarius": "Sagitario",
    "zodiac.signs.capricorn": "Capricornio",
    "zodiac.signs.aquarius": "Acuario",
    "zodiac.signs.pisces": "Piscis",

    // ES Notificaciones
    "notification.channel.name": "Guía Diaria",
    "notification.channel.description": "Notificaciones para tu oráculo místico del día",
    "notification.variants.1.title": "💘 El Oráculo del Amor te llama",
    "notification.variants.1.body": "¡Descubre lo que las cartas revelan sobre tu vida amorosa hoy!",
    "notification.variants.2.title": "🌙 La Luna ilumina tu camino",
    "notification.variants.2.body": "Consulta el Oráculo Lunar para conocer las energías del día",
    "notification.variants.3.title": "🔮 Azrael el Vidente te espera",
    "notification.variants.3.body": "El gran mago tiene revelaciones para ti hoy",
    "notification.variants.4.title": "✦ La Rueda del Destino gira",
    "notification.variants.4.body": "Descubre qué destino místico te espera hoy",
    "notification.variants.5.title": "✨ TarotMystik te guía",
    "notification.variants.5.body": "Tus oráculos diarios están listos: amor, destino y misterios te esperan",
    "notification.modal.title": "Guía Diaria",
    "notification.modal.description": "Recibe cada día a las 10:00 un recordatorio místico para descubrir tus oráculos y revelaciones personalizadas",
    "notification.modal.benefit1": "Oráculo diario personalizado",
    "notification.modal.benefit2": "Guía en amor, destino y misterios",
    "notification.modal.benefit3": "Nunca pierdas tu revelación del día",
    "notification.modal.accept": "Activar notificaciones",
    "notification.modal.decline": "No, gracias",
    "notification.modal.note": "Podrás cambiar esta opción en los ajustes",

    // Oracle Selection
    "oracle.welcome": "¡Bienvenido/a {name}!",
    "oracle.subtitle": "Descubre los secretos de tu destino",
    "oracle.daily.title": "Carta del Día",
    "oracle.daily.description": "Una carta para guiarte e inspirarte hoy",
    "oracle.horoscope.title": "Horóscopo",
    "oracle.horoscope.description":
      "Descubre lo que las estrellas te deparan hoy según tu signo",
    "oracle.tarot.title": "Tarot",
    "oracle.tarot.description":
      "Los 22 Arcanos Mayores revelan los misterios de tu destino",
    "oracle.angels.title": "Oráculo de los Ángeles",
    "oracle.angels.description":
      "Conéctate con tus guías angelicales para recibir sus mensajes de amor",
    "oracle.runes.title": "Runas Nórdicas",
    "oracle.runes.description":
      "La antigua sabiduría de los vikingos revela tu camino de guerra y victoria",
    "oracle.back": "ATRÁS",
    "oracle.home": "Inicio",
    "oracle.selection.title": "Elige Tu Oráculo",

    // Card Game
    "cardgame.back": "Atrás",
    "cardgame.daily.instruction": "Elige 1 carta para tu consejo del día",
    "cardgame.reading.instruction": "Elige 3 cartas para iluminar tu destino",
    "cardgame.selected": "Cartas seleccionadas: {current}/{max}",
    "cardgame.reveal": "REVELAR CARTAS",
    "cardgame.page": "Página {current} de {total}",
    "cardgame.previous": "Anterior",
    "cardgame.next": "Siguiente",
    "cardgame.daily.choose": "Elige la carta que te llama",

    // CardGame - Modal de révélation
    "cardgame.cardRevealed": "Carta revelada",
    "cardgame.continue": "Continuar",
    "cardgame.seeInterpretation": "Ver la interpretación",

    // Revelation - Loading
    "revelation.loading.title": "Interpretando...",
    "revelation.loading.daily": "Los astros revelan tu oráculo del día, {name}",
    "revelation.loading.reading": "Las cartas revelan sus secretos místicos, {name}",
    "revelation.loading.mysticMessage": "Las estrellas se alinean para ti...",

    // Revelation Page
    "revelation.positions.daily": "Consejo del Día",
    "revelation.positions.past": "Carta 1",
    "revelation.positions.present": "Carta 2",
    "revelation.positions.future": "Carta 3",
    "revelation.summary.title": "Lo que revelan tus cartas",
    "revelation.newConsultation": "Nueva consulta",
    "revelation.title.daily": "Tu Consejo del Día",
    "revelation.title.reading": "Tu Lectura - {oracle}",
    "revelation.instruction.daily":
      "Haz clic en tu carta para revelar el mensaje del día",
    "revelation.instruction.reading": "Haz clic en cada carta para revelar tu destino",
    "revelation.flipCard.reveal": "Toca para revelar",
    "revelation.summary.seeMore": "Ver más ↓",
    "revelation.summary.seeLess": "Ver menos ↑",
    "revelation.revealButton": "Revelación",
    "revelation.backToSelection": "Volver a la selección",
    "interpretation.advice.title": "Tu consejo personal",
    "revelation.subtitle.revealed": "Contempla tus cartas reveladas",
    "revelation.summary.subtitle": "Las energías principales de tu tirada",

    // Interpretation Templates
    "interpretation.gender.femme": "Mi querida",
    "interpretation.gender.homme": "Mi querido",
    "interpretation.gender.autre": "Querida alma",
    "interpretation.daily.greeting":
      "¡Hola {name}! Aquí tienes tu consejo para este hermoso día.",
    "interpretation.daily.zodiac": "Como {zodiacSign}, ",
    "interpretation.daily.cardMessage":
      'la carta "{cardName}" tiene una energía especial para ti hoy.',
    "interpretation.daily.wisdom":
      "Como {zodiacSign}, tienes la sabiduría necesaria para usar bien este consejo. Confía en tu instinto y deja que esta energía positiva guíe tus acciones hoy.",
    "interpretation.daily.closing":
      "¡Que tengas un buen día {genderText} {name}, y que las estrellas iluminen tu camino!",
    "interpretation.tarot.greeting":
      "¡Hola {name}! Tu lectura de Tarot me dice cosas interesantes.",
    "interpretation.tarot.past":
      "{cardName} en tu pasado muestra que has vivido momentos que realmente te han hecho crecer. No siempre fue fácil, pero te ha hecho más fuerte.",
    "interpretation.tarot.present":
      "En este momento, {cardName} influye en tu vida de manera positiva. Estás en un período donde las cosas se mueven, y eso es una buena señal para el futuro.",
    "interpretation.tarot.future":
      "¡Para tu futuro, {cardName} anuncia cosas hermosas! Puedes esperar cambios felices que te traerán satisfacción.",
    "interpretation.tarot.advice":
      "Mi consejo: {name}, con tu carácter de {zodiacSign}, confía en tu instinto. ¡Tienes todo lo que necesitas para triunfar!",
    "interpretation.angels.greeting":
      "¡Hola {name}! Tus ángeles guardianes tienen revelaciones luminosas que compartir contigo.",
    "interpretation.angels.past":
      "A lo largo de tu pasado, {cardName} sembró semillas divinas: {cardMeaning}. Estas bendiciones han nutrido tu alma y te han preparado para recibir el amor incondicional que te rodea ahora.",
    "interpretation.angels.present":
      "En este momento preciso, {cardName} ilumina tu presente: {cardMeaning}. Esta luz celestial guía cada uno de tus pasos y transforma tus desafíos en oportunidades de crecimiento espiritual.",
    "interpretation.angels.future":
      "Hacia tu futuro radiante, {cardName} despliega sus alas protectoras: {cardMeaning}. Las puertas del paraíso se abren ante ti, revelando un camino pavimentado con milagros y sincronicidades.",
    "interpretation.angels.message":
      "Transmisión angélica: {genderText} {name}, tu esencia de {zodiacSign} vibra en armonía con estas frecuencias divinas. ¡Deja que tu corazón se abra a estos mensajes de amor puro y mantente receptivo a las señales que tus guías te envían!",
    "interpretation.runes.greeting":
      "¡Salve {name}! Las antiguas runas nórdicas revelan los secretos de tu destino de guerrer.",
    "interpretation.runes.past":
      "Tu runa del pasado, {cardName}, revela: {cardMeaning}. Estas fuerzas primitivas han esculpido tu carácter en fuego y hielo, preparándote para los desafíos de hoy con sabiduría ancestral.",
    "interpretation.runes.present":
      "En este momento, {cardName} guía tus pasos: {cardMeaning}. Esta energía rúnica ilumina tu sendero actual, conectándote con las fuerzas místicas que rigen tu vida cotidiana.",
    "interpretation.runes.future":
      "Hacia el futuro, {cardName} anuncia: {cardMeaning}. Esta profecía rúnica traza el camino de tus logros futuros, donde brillarás victorios{genderSuffix} bajo la égida de los dioses nórdicos.",
    "interpretation.runes.advice":
      "Recuerda, {genderText} {name}: como {zodiacSign}, portas el legado vikingo en tu sangre. Las runas han hablado - ¡sigue su guía con coraje y determinación!",
    "interpretation.fallback.zodiac": "persona intuitiva",
    "interpretation.fallback.angels": "ser luminoso",
    "interpretation.fallback.runes": "luchador",
    "interpretation.title.daily": "Interpretación para {name}",
    "interpretation.title.reading": "Tirada de cartas para {name}",
    "interpretation.subtitle": "Aquí tienes tu revelación personalizada",

    "interpretation.backToCards": "Volver a las cartas",
    "interpretation.newConsultation": "Nueva consulta",

        // Calculadora del Amor
        "loveCalculator.name1Label": "Primer Nombre",
        "loveCalculator.name1Placeholder": "Ej: María",
        "loveCalculator.name2Label": "Segundo Nombre",
        "loveCalculator.name2Placeholder": "Ej: Lucas",
        "loveCalculator.calculateButton": "Calcular Compatibilidad",
        "loveCalculator.calculating": "Analizando compatibilidad...",
        "loveCalculator.newCalculation": "Nuevo Cálculo",
        "loveCalculator.note": "La puntuación se mantiene igual para el mismo par de nombres… ¡pero cambia cada día! ¡Vuelve mañana! ⚠️ Esta calculadora es solo para entretenimiento, ¡tus resultados son únicamente para divertirte!",
        "loveCalculator.dailyMode": "Modo Diario",
        "loveCalculator.dailyModeDesc": "¡El porcentaje cambia cada día!",
        "loveCalculator.standardMode": "Modo Estándar",
        "loveCalculator.standardModeDesc": "Resultado fijo y permanente",
        "oracle.loveCalculator.badge": "NUEVO",
        "oracle.loveCalculator.description": "Calcula la compatibilidad entre dos nombres",
        "loveCalculator.error": "Por favor, introduce ambos nombres.",
        "loveCalculator.dayScore": "Lectura del Día",
        "loveCalculator.dayAdvice": "Consejo del Día",
        "loveCalculator.title": "Compatibilidad del Día",
        "oracle.loveCalculator.title": "Compatibilidad del Día",
        "loveCalculator.subtitle": "Descubre cada día la compatibilidad entre dos nombres — en amor o amistad.",
        "loveCalculator.today": "Hoy",
        "loveCalculator.changeMode": "Cambiar modo",
        "loveCalculator.back": "Volver",
        "loveCalculator.mode.subtitle": "Las energías se interpretan de forma diferente según el vínculo que los une.",
        "loveCalculator.mode.love": "Amor",
        "loveCalculator.mode.love.subtitle": "Conexión romántica",
        "loveCalculator.mode.friendship": "Amistad",
        "loveCalculator.mode.friendship.subtitle": "Vínculo de amistad",
        "loveCalculator.mode.calculateButton": "Revelar la Compatibilidad del Día",
        "loveCalculator.modeLabel.love": "Amor",
        "loveCalculator.modeLabel.friendship": "Amistad",
        "loveCalculator.separator.love": "y",
        "loveCalculator.separator.friendship": "y",
        "loveCalculator.dateFormat.weekday": "long",
        "loveCalculator.dateFormat.day": "numeric",
        "loveCalculator.dateFormat.month": "long",
        "loveCalculator.day.sun": "Domingo",
        "loveCalculator.day.mon": "Lunes",
        "loveCalculator.day.tue": "Martes",
        "loveCalculator.day.wed": "Miércoles",
        "loveCalculator.day.thu": "Jueves",
        "loveCalculator.day.fri": "Viernes",
        "loveCalculator.day.sat": "Sábado",
        "loveCalculator.month.jan": "Enero",
        "loveCalculator.month.feb": "Febrero",
        "loveCalculator.month.mar": "Marzo",
        "loveCalculator.month.apr": "Abril",
        "loveCalculator.month.may": "Mayo",
        "loveCalculator.month.jun": "Junio",
        "loveCalculator.month.jul": "Julio",
        "loveCalculator.month.aug": "Agosto",
        "loveCalculator.month.sep": "Septiembre",
        "loveCalculator.month.oct": "Octubre",
        "loveCalculator.month.nov": "Noviembre",
        "loveCalculator.month.dec": "Diciembre",

        // ── RESULTADOS MODO AMOR ───────────────────────────────────────────────────
        // Títulos
        "loveCalculator.love.results.incompatible.title": "Energías Opuestas",
        "loveCalculator.love.results.veryWeak.title": "Señal Débil",
        "loveCalculator.love.results.weak.title": "Conexión Tímida",
        "loveCalculator.love.results.lowModerate.title": "Energía Mixta",
        "loveCalculator.love.results.moderate.title": "Chispa Incierta",
        "loveCalculator.love.results.goodStart.title": "Buen Día",
        "loveCalculator.love.results.promising.title": "Día Prometedor",
        "loveCalculator.love.results.strong.title": "Fuerte Resonancia",
        "loveCalculator.love.results.exceptional.title": "Alineación Rara",
        "loveCalculator.love.results.perfect.title": "Día Excepcional",

        // Mensajes — Incompatible (25–39%)
        "loveCalculator.love.results.incompatible.message1": "Hoy, sus energías van en direcciones muy diferentes. No es el mejor día para forzar una conexión entre ustedes.",
        "loveCalculator.love.results.incompatible.message2": "Las vibraciones de hoy no favorecen la armonía amorosa entre estos dos nombres. Es mejor dejar espacio y respirar.",
        "loveCalculator.love.results.incompatible.message3": "Este día no trae las frecuencias adecuadas para este dúo amoroso. Los intercambios pueden sentirse tensos y poco fluidos.",
        "loveCalculator.love.results.incompatible.message4": "La alineación de hoy no es favorable para esta conexión. No hay chispa romántica visible en las energías del día.",
        "loveCalculator.love.results.incompatible.message5": "Los astros de hoy apuntan a caminos separados para este dúo. Es un día para estar cada uno por su lado.",
        "loveCalculator.love.results.incompatible.message6": "Este día no crea un terreno común entre estas dos energías amorosas. Nada está bloqueado — mañana todo puede cambiar.",
        // Consejos — Incompatible
        "loveCalculator.love.results.incompatible.advice1": "Aprovechen este día de forma individual. Cada uno en su propia energía y mañana se reevalúa.",
        "loveCalculator.love.results.incompatible.advice2": "No es un día para forzar conversaciones sentimentales ni tomar decisiones en pareja.",
        "loveCalculator.love.results.incompatible.advice3": "Dense espacio hoy. Las energías de mañana podrían sorprenderles.",

        // Mensajes — Muy Débil (40–49%)
        "loveCalculator.love.results.veryWeak.message1": "Hoy, la conexión amorosa entre estos dos nombres es discreta. Hará falta esfuerzo para estar en la misma sintonía.",
        "loveCalculator.love.results.veryWeak.message2": "Las energías de hoy apenas se cruzan en el amor. No es un mal día, pero falta impulso.",
        "loveCalculator.love.results.veryWeak.message3": "La señal romántica entre sus dos mundos es débil hoy. Nada irreversible, pero no es su mejor día juntos.",
        "loveCalculator.love.results.veryWeak.message4": "Este día no amplifica naturalmente sus afinidades amorosas. La conexión existe, pero se mantiene en segundo plano.",
        "loveCalculator.love.results.veryWeak.message5": "Sus frecuencias de hoy apenas coinciden en el corazón. Mantengan expectativas ligeras.",
        "loveCalculator.love.results.veryWeak.message6": "Hoy, la corriente romántica fluye con dificultad entre estas energías. Mañana podría cambiar todo.",
        // Consejos — Muy Débil
        "loveCalculator.love.results.veryWeak.advice1": "Prioricen intercambios simples y sin presión hoy. No hace falta forzar grandes declaraciones.",
        "loveCalculator.love.results.veryWeak.advice2": "Un día tranquilo juntos es suficiente. No esperen más por hoy.",
        "loveCalculator.love.results.veryWeak.advice3": "Vuelvan mañana — las energías se renuevan y la lectura puede ser muy distinta.",

        // Mensajes — Débil (50–54%)
        "loveCalculator.love.results.weak.message1": "Hoy, la llama amorosa está encendida pero es pequeña. Hay algo, pero aún no arde con fuerza.",
        "loveCalculator.love.results.weak.message2": "Este día trae una ligera complicidad romántica entre ustedes. Las bases están, pero la energía no despega aún.",
        "loveCalculator.love.results.weak.message3": "El día crea una conexión amorosa frágil entre estos dos nombres. Algunos buenos momentos son posibles, sin gran intensidad.",
        "loveCalculator.love.results.weak.message4": "Las vibraciones de hoy son suaves pero poco intensas en el amor. Un día agradable, no memorable.",
        "loveCalculator.love.results.weak.message5": "Este día ofrece un fondo emocional neutro. Nada fuerte, pero tampoco negativo.",
        "loveCalculator.love.results.weak.message6": "Hoy, sus energías románticas se cruzan sin fusionarse del todo. La conexión está ahí, en segundo plano.",
        // Consejos — Débil
        "loveCalculator.love.results.weak.advice1": "Es un buen día para pequeños gestos tiernos. No hace falta exagerar.",
        "loveCalculator.love.results.weak.advice2": "Disfruten de momentos tranquilos sin buscar intensidad. Este día es para la suavidad.",
        "loveCalculator.love.results.weak.advice3": "Observa cómo evolucionan las energías — mañana puede traer más chispa.",

        // Mensajes — Potencial Limitado (55–59%)
        "loveCalculator.love.results.lowModerate.message1": "Hoy mezcla frecuencias amorosas compatibles y otras menos. Pueden encontrarse, pero requiere ajustes.",
        "loveCalculator.love.results.lowModerate.message2": "Hoy funciona por momentos entre ustedes. Algunos serán fluidos, otros más tensos.",
        "loveCalculator.love.results.lowModerate.message3": "Las energías crean una compatibilidad irregular. Nada grave, solo hay que adaptarse.",
        "loveCalculator.love.results.lowModerate.message4": "El terreno es parcialmente favorable. La conexión es posible, pero requiere esfuerzo.",
        "loveCalculator.love.results.lowModerate.message5": "Las vibraciones son contrastadas hoy. Tomen lo mejor y dejen pasar el resto.",
        "loveCalculator.love.results.lowModerate.message6": "Hay aperturas y fricciones hoy. Manténganse flexibles.",
        // Consejos — Potencial Limitado
        "loveCalculator.love.results.lowModerate.advice1": "Aborden el día sin presión emocional.",
        "loveCalculator.love.results.lowModerate.advice2": "Si surge tensión, no la dramaticen.",
        "loveCalculator.love.results.lowModerate.advice3": "Prefieran actividades simples y agradables.",

        // Mensajes — Chispa Incierta (60–64%)
        "loveCalculator.love.results.moderate.message1": "Hay algo en el aire hoy entre ustedes. Aún incierto, pero interesante.",
        "loveCalculator.love.results.moderate.message2": "Hoy trae una energía ambivalente. Hay potencial, pero duda.",
        "loveCalculator.love.results.moderate.message3": "Sus frecuencias se acercan sin alinearse completamente.",
        "loveCalculator.love.results.moderate.message4": "Los astros están divididos hoy. Algo fluye, pero no es claro.",
        "loveCalculator.love.results.moderate.message5": "Hay una ligera tensión entre atracción y distancia.",
        "loveCalculator.love.results.moderate.message6": "Hoy juega con sus energías sin estabilizarlas.",
        // Consejos — Chispa Incierta
        "loveCalculator.love.results.moderate.advice1": "Estén presentes sin analizar demasiado.",
        "loveCalculator.love.results.moderate.advice2": "Escuchen más de lo que hablan.",
        "loveCalculator.love.results.moderate.advice3": "No saquen conclusiones hoy.",

        // Mensajes — Buen Día (65–69%)
        "loveCalculator.love.results.goodStart.message1": "Hoy, sus energías amorosas se alinean naturalmente. Un día fluido y agradable.",
        "loveCalculator.love.results.goodStart.message2": "Se crea una hermosa armonía romántica.",
        "loveCalculator.love.results.goodStart.message3": "Las vibraciones favorecen la conexión.",
        "loveCalculator.love.results.goodStart.message4": "El terreno emocional es favorable.",
        "loveCalculator.love.results.goodStart.message5": "Una energía compartida fluye bien.",
        "loveCalculator.love.results.goodStart.message6": "Sus frecuencias se alinean con armonía.",
        // Consejos — Buen Día
        "loveCalculator.love.results.goodStart.advice1": "Disfruten un momento juntos.",
        "loveCalculator.love.results.goodStart.advice2": "Buen día para un gesto espontáneo.",
        "loveCalculator.love.results.goodStart.advice3": "Vuelvan mañana.",

        // Mensajes — Prometedor (70–79%)
        "loveCalculator.love.results.promising.message1": "Una verdadera conexión amorosa brilla hoy.",
        "loveCalculator.love.results.promising.message2": "Hoy amplifica su vínculo.",
        "loveCalculator.love.results.promising.message3": "Están en la misma sintonía.",
        "loveCalculator.love.results.promising.message4": "Sus energías resuenan bien.",
        "loveCalculator.love.results.promising.message5": "Hay una hermosa química.",
        "loveCalculator.love.results.promising.message6": "La energía está a su favor.",
        // Consejos — Prometedor
        "loveCalculator.love.results.promising.advice1": "Hagan algo especial.",
        "loveCalculator.love.results.promising.advice2": "Expresen lo que sienten.",
        "loveCalculator.love.results.promising.advice3": "Disfruten esta energía.",

        // Mensajes — Fuerte (80–89%)
        "loveCalculator.love.results.strong.message1": "Hoy, sus energías resuenan con fuerza.",
        "loveCalculator.love.results.strong.message2": "Día muy favorable.",
        "loveCalculator.love.results.strong.message3": "Todo se amplifica.",
        "loveCalculator.love.results.strong.message4": "El vínculo está vivo.",
        "loveCalculator.love.results.strong.message5": "Se alcanza profundidad.",
        "loveCalculator.love.results.strong.message6": "Armonía total hoy.",
        // Consejos — Fuerte
        "loveCalculator.love.results.strong.advice1": "Aprovechen el día.",
        "loveCalculator.love.results.strong.advice2": "Compartan algo memorable.",
        "loveCalculator.love.results.strong.advice3": "Reconozcan la conexión.",

        // Mensajes — Excepcional (90–94%)
        "loveCalculator.love.results.exceptional.message1": "Hoy trae una alineación rara.",
        "loveCalculator.love.results.exceptional.message2": "Armonía casi perfecta.",
        "loveCalculator.love.results.exceptional.message3": "Fusión poco común.",
        "loveCalculator.love.results.exceptional.message4": "Algo especial circula.",
        "loveCalculator.love.results.exceptional.message5": "Energía excepcional.",
        "loveCalculator.love.results.exceptional.message6": "Día único.",
        // Consejos — Excepcional
        "loveCalculator.love.results.exceptional.advice1": "Vivan el día plenamente.",
        "loveCalculator.love.results.exceptional.advice2": "Creen un recuerdo.",
        "loveCalculator.love.results.exceptional.advice3": "Hoy fue especial.",

        // Mensajes — Perfecto (95–98%)
        "loveCalculator.love.results.perfect.message1": "Hoy es uno de los días más raros.",
        "loveCalculator.love.results.perfect.message2": "Pico de alineación romántica.",
        "loveCalculator.love.results.perfect.message3": "Fusión casi mística.",
        "loveCalculator.love.results.perfect.message4": "Todo está alineado.",
        "loveCalculator.love.results.perfect.message5": "Conexión absoluta.",
        "loveCalculator.love.results.perfect.message6": "Energía máxima.",
        // Consejos — Perfecto
        "loveCalculator.love.results.perfect.advice1": "Hazlo inolvidable.",
        "loveCalculator.love.results.perfect.advice2": "Estén presentes.",
        "loveCalculator.love.results.perfect.advice3": "Energía única hoy.",

        // ── RESULTADOS MODO AMISTAD ──────────────────────────────────────────────────
        // Títulos
        "loveCalculator.friendship.results.incompatible.title": "Frecuencias Distantes",
        "loveCalculator.friendship.results.veryWeak.title": "Vínculo Sutil",
        "loveCalculator.friendship.results.weak.title": "Conexión Ligera",
        "loveCalculator.friendship.results.lowModerate.title": "Terreno Mezclado",
        "loveCalculator.friendship.results.moderate.title": "Complicidad Vacilante",
        "loveCalculator.friendship.results.goodStart.title": "Buena Armonía",
        "loveCalculator.friendship.results.promising.title": "Amistad Radiante",
        "loveCalculator.friendship.results.strong.title": "Complicidad Fuerte",
        "loveCalculator.friendship.results.exceptional.title": "Vínculo Raro",
        "loveCalculator.friendship.results.perfect.title": "Amigos Excepcionales",

        // Mensajes — Amistad incompatible (25–39%)
        "loveCalculator.friendship.results.incompatible.message1": "Hoy, sus energías de amistad van en direcciones opuestas. No es un buen día para forzar actividades juntos.",
        "loveCalculator.friendship.results.incompatible.message2": "Las vibraciones del día no favorecen la complicidad entre estos dos nombres. Cada uno en su propia burbuja hoy.",
        "loveCalculator.friendship.results.incompatible.message3": "Hoy no se crea un terreno común para este dúo de amigos. No te preocupes — mañana todo puede cambiar.",
        "loveCalculator.friendship.results.incompatible.message4": "La alineación del día no es favorable para su complicidad. Eviten planes juntos hoy.",
        "loveCalculator.friendship.results.incompatible.message5": "Los astros separan las energías de este dúo hoy. Es un día para actividades individuales.",
        "loveCalculator.friendship.results.incompatible.message6": "Hoy, las frecuencias de amistad no coinciden. No te preocupes — no es permanente.",
        // Consejos — Amistad incompatible
        "loveCalculator.friendship.results.incompatible.advice1": "Disfruten cada uno por su lado. A veces, un descanso fortalece la amistad.",
        "loveCalculator.friendship.results.incompatible.advice2": "Eviten tomar decisiones importantes juntos hoy. No es el momento adecuado.",
        "loveCalculator.friendship.results.incompatible.advice3": "Vuelvan mañana — la energía de amistad se renueva diariamente.",

        // Mensajes — Amistad muy débil (40–49%)
        "loveCalculator.friendship.results.veryWeak.message1": "Hoy, el vínculo de amistad entre estos dos nombres es sutil. Sin chispa especial, pero nada negativo.",
        "loveCalculator.friendship.results.veryWeak.message2": "Las energías del día apenas se cruzan en amistad. Un día tranquilo, cada uno a su ritmo.",
        "loveCalculator.friendship.results.veryWeak.message3": "Este día no amplifica naturalmente su complicidad. La conexión existe, pero permanece silenciosa.",
        "loveCalculator.friendship.results.veryWeak.message4": "Sus frecuencias amistosas no se superponen mucho hoy. Mantengan expectativas ligeras.",
        "loveCalculator.friendship.results.veryWeak.message5": "Hoy, la corriente amistosa fluye suavemente entre estas energías. Nada fuerte, pero sin conflicto.",
        "loveCalculator.friendship.results.veryWeak.message6": "Este día pone su amistad en espera. No es ideal para salidas grandes.",
        // Consejos — Amistad muy débil
        "loveCalculator.friendship.results.veryWeak.advice1": "Un día separados puede ser suficiente. La amistad no requiere atención diaria.",
        "loveCalculator.friendship.results.veryWeak.advice2": "Si se ven, mantengan los intercambios simples y ligeros.",
        "loveCalculator.friendship.results.veryWeak.advice3": "Vuelvan mañana — las energías de amistad cambian día a día.",

        // Mensajes — Amistad débil (50–54%)
        "loveCalculator.friendship.results.weak.message1": "Hoy, surge una ligera complicidad entre estos nombres. Nada intenso, pero agradable.",
        "loveCalculator.friendship.results.weak.message2": "El día trae una energía amistosa suave entre ustedes. Algunos buenos momentos son posibles sin gran entusiasmo.",
        "loveCalculator.friendship.results.weak.message3": "Las vibraciones de hoy son neutrales para su vínculo. Un día ordinario, sin sorpresas desagradables.",
        "loveCalculator.friendship.results.weak.message4": "Su conexión está presente pero en segundo plano. Un café o mensaje basta para mantenerla.",
        "loveCalculator.friendship.results.weak.message5": "El día ofrece un fondo tranquilo para su amistad. Sin grandes sobresaltos, pero cómodo.",
        "loveCalculator.friendship.results.weak.message6": "Las energías del día se encuentran agradablemente. Un día para pequeños placeres juntos.",
        // Consejos — Amistad débil
        "loveCalculator.friendship.results.weak.advice1": "Un mensaje o llamada rápida mantiene la conexión hoy.",
        "loveCalculator.friendship.results.weak.advice2": "Opten por algo simple si se encuentran — no se necesitan grandes planes.",
        "loveCalculator.friendship.results.weak.advice3": "Buen día para pequeños gestos discretos.",

        // Mensajes — Terreno Mezclado (55–59%)
        "loveCalculator.friendship.results.lowModerate.message1": "Hoy hay mezcla de energías positivas y menos positivas. Pueden conectarse, pero puede haber pequeñas fricciones.",
        "loveCalculator.friendship.results.lowModerate.message2": "La complicidad funciona a ratos. Algunos momentos fluyen, otros no tanto.",
        "loveCalculator.friendship.results.lowModerate.message3": "Las energías crean un terreno amistoso contrastante. Nada insuperable, solo flexibilidad.",
        "loveCalculator.friendship.results.lowModerate.message4": "El terreno es parcialmente favorable. Puede funcionar si evitan expectativas rígidas.",
        "loveCalculator.friendship.results.lowModerate.message5": "Las vibraciones de hoy son matizadas. Tomen lo mejor y dejen pasar el resto.",
        "loveCalculator.friendship.results.lowModerate.message6": "Hay aperturas y pequeñas fricciones. Manténganse flexibles.",
        // Consejos — Terreno Mezclado
        "loveCalculator.friendship.results.lowModerate.advice1": "Afronten el día sin presión y eviten temas sensibles.",
        "loveCalculator.friendship.results.lowModerate.advice2": "Si surge tensión, cambien de tema o actividad.",
        "loveCalculator.friendship.results.lowModerate.advice3": "Elijan actividades ligeras en lugar de conversaciones profundas.",

        // Mensajes — Complicidad Vacilante (60–64%)
        "loveCalculator.friendship.results.moderate.message1": "Hay algo en el aire hoy. La complicidad existe, solo busca su canal.",
        "loveCalculator.friendship.results.moderate.message2": "Hoy la energía amistosa es ambivalente. Hay potencial, pero aún es tímido.",
        "loveCalculator.friendship.results.moderate.message3": "Las frecuencias se acercan sin alinearse completamente. Día para observar más que actuar.",
        "loveCalculator.friendship.results.moderate.message4": "Los astros están divididos sobre su dúo hoy. Algo circula, pero no está claro.",
        "loveCalculator.friendship.results.moderate.message5": "La jornada genera ligera vacilación en la complicidad. Nada preocupante.",
        "loveCalculator.friendship.results.moderate.message6": "El día juega con sus energías sin fijarlas.",
        // Consejos — Complicidad Vacilante
        "loveCalculator.friendship.results.moderate.advice1": "Estén disponibles sin forzar la conexión.",
        "loveCalculator.friendship.results.moderate.advice2": "Buen día para escuchar más que hablar.",
        "loveCalculator.friendship.results.moderate.advice3": "No saquen conclusiones de un solo día.",

        // Mensajes — Buena Armonía (65–69%)
        "loveCalculator.friendship.results.goodStart.message1": "Hoy sus energías amistosas se alinean naturalmente. Día fluido y agradable.",
        "loveCalculator.friendship.results.goodStart.message2": "Se crea una hermosa armonía entre estos dos amigos.",
        "loveCalculator.friendship.results.goodStart.message3": "Las vibraciones del día favorecen la buena conexión.",
        "loveCalculator.friendship.results.goodStart.message4": "El terreno es favorable para su amistad.",
        "loveCalculator.friendship.results.goodStart.message5": "Fluye una energía amistosa compartida.",
        "loveCalculator.friendship.results.goodStart.message6": "Sus frecuencias se alinean armoniosamente.",
        // Consejos — Buena Armonía
        "loveCalculator.friendship.results.goodStart.advice1": "Disfruten un momento juntos sin planear demasiado.",
        "loveCalculator.friendship.results.goodStart.advice2": "Buen día para una salida espontánea o conversación sincera.",
        "loveCalculator.friendship.results.goodStart.advice3": "Vuelvan mañana para ver cómo evolucionan las energías.",

        // Mensajes — Amistad Radiante (70–79%)
        "loveCalculator.friendship.results.promising.message1": "Hoy, una verdadera complicidad brilla entre estos nombres.",
        "loveCalculator.friendship.results.promising.message2": "Este día fortalece su vínculo.",
        "loveCalculator.friendship.results.promising.message3": "Están en la misma sintonía.",
        "loveCalculator.friendship.results.promising.message4": "Sus energías resuenan juntas.",
        "loveCalculator.friendship.results.promising.message5": "Una hermosa química se percibe.",
        "loveCalculator.friendship.results.promising.message6": "La energía del día favorece la amistad.",
        // Consejos — Amistad Radiante
        "loveCalculator.friendship.results.promising.advice1": "Hagan algo especial juntos hoy.",
        "loveCalculator.friendship.results.promising.advice2": "Expresen lo que significan el uno para el otro.",
        "loveCalculator.friendship.results.promising.advice3": "Disfruten plenamente esta energía compartida.",

        // Mensajes — Complicidad Fuerte (80–89%)
        "loveCalculator.friendship.results.strong.message1": "Hoy sus energías amistosas resuenan con fuerza. Todo fluye naturalmente.",
        "loveCalculator.friendship.results.strong.message2": "Día especialmente favorable para su dúo.",
        "loveCalculator.friendship.results.strong.message3": "Todo lo que hagan juntos se amplifica.",
        "loveCalculator.friendship.results.strong.message4": "Su vínculo se siente vivo hoy.",
        "loveCalculator.friendship.results.strong.message5": "Los intercambios alcanzan profundidad rara.",
        "loveCalculator.friendship.results.strong.message6": "La armonía es perfecta.",
        // Consejos — Complicidad Fuerte
        "loveCalculator.friendship.results.strong.advice1": "Aprovechen al máximo este día.",
        "loveCalculator.friendship.results.strong.advice2": "Compartan algo memorable.",
        "loveCalculator.friendship.results.strong.advice3": "Reconozcan esta fuerte complicidad.",

        // Mensajes — Vínculo Raro (90–94%)
        "loveCalculator.friendship.results.exceptional.message1": "Hoy las estrellas traen una alineación amistosa rara.",
        "loveCalculator.friendship.results.exceptional.message2": "Una armonía casi perfecta los rodea.",
        "loveCalculator.friendship.results.exceptional.message3": "Una fusión rara conecta sus mundos.",
        "loveCalculator.friendship.results.exceptional.message4": "Algo inusual fluye entre ustedes.",
        "loveCalculator.friendship.results.exceptional.message5": "Un vínculo excepcional define hoy.",
        "loveCalculator.friendship.results.exceptional.message6": "Este día es verdaderamente único.",
        // Consejos — Vínculo Raro
        "loveCalculator.friendship.results.exceptional.advice1": "Vivan este día plenamente y sin preocupaciones.",
        "loveCalculator.friendship.results.exceptional.advice2": "Creen un recuerdo juntos.",
        "loveCalculator.friendship.results.exceptional.advice3": "Cada día es diferente — hoy fue especial.",

        // Mensajes — Amigos Excepcionales (95–98%)
        "loveCalculator.friendship.results.perfect.message1": "Hoy es uno de los días más raros para este dúo. El universo parece alineado para ustedes.",
        "loveCalculator.friendship.results.perfect.message2": "Este día alcanza el máximo alineamiento amistoso.",
        "loveCalculator.friendship.results.perfect.message3": "Una unión casi mística conecta a ambos hoy.",
        "loveCalculator.friendship.results.perfect.message4": "Todo está perfectamente alineado para su complicidad.",
        "loveCalculator.friendship.results.perfect.message5": "Una amistad absoluta define hoy.",
        "loveCalculator.friendship.results.perfect.message6": "Energía máxima rodea su vínculo.",
        // Consejos — Amigos Excepcionales
        "loveCalculator.friendship.results.perfect.advice1": "Hagan de este día algo inolvidable.",
        "loveCalculator.friendship.results.perfect.advice2": "Estén completamente presentes el uno para el otro.",
        "loveCalculator.friendship.results.perfect.advice3": "Esta energía amistosa es única — mañana será diferente.",
 
    // Variaciones para "Buen día"
    "interpretation.daily.closing.var1":
      "¡Que tengas un gran día {genderText} {name}, y que las estrellas iluminen tu camino!",
    "interpretation.daily.closing.var2":
      "¡Hermoso día para ti {name}, que esta guía te acompañe!",
    "interpretation.daily.closing.var3":
      "Disfruta tu día {name}, ¡las energías están contigo!",
    "interpretation.daily.closing.var4":
      "¡Que tengas un día maravilloso {genderText} {name}!",
    "interpretation.daily.closing.var5":
      "Que tu día sea dulce {name}, ¡el universo vela por ti!",
    "interpretation.daily.closing.var6":
      "Que tengas un día brillante, {genderText} {name}, lleno de maravillosas sorpresas!",
    "interpretation.daily.closing.var7":
      "Que tengas un gran día, {name}, que la energía positiva te acompañe en todo momento!",
    "interpretation.daily.closing.var8":
      "Que este día te traiga alegría y serenidad, {genderText} {name}!",
    "interpretation.daily.closing.var9":
      "¡Sonríe a la vida hoy, {name}, y la vida te sonreirá de vuelta!",
    "interpretation.daily.closing.var10":
      "Que tengas un día inspirador, {genderText} {name}, bajo la protección de las estrellas!",

    // Card Names and Meanings - Runes
    "cards.runes.Fehu.name": "Fehu",
    "cards.runes.Fehu.meaning":
      "Riqueza, prosperidad, nuevo comienzo financiero",
    "cards.runes.Uruz.name": "Uruz",
    "cards.runes.Uruz.meaning": "Fuerza bruta, salud, transformación",
    "cards.runes.Thurisaz.name": "Thurisaz",
    "cards.runes.Thurisaz.meaning": "Defensa, protección, fuerza destructiva",
    "cards.runes.Ansuz.name": "Ansuz",
    "cards.runes.Ansuz.meaning": "Comunicación divina, inspiración, sabiduría",
    "cards.runes.Raidho.name": "Raidho",
    "cards.runes.Raidho.meaning": "Viaje, movimiento, progresión",
    "cards.runes.Kenaz.name": "Kenaz",
    "cards.runes.Kenaz.meaning": "Conocimiento, creatividad, iluminación",
    "cards.runes.Gebo.name": "Gebo",
    "cards.runes.Gebo.meaning": "Regalo, intercambio, asociación",
    "cards.runes.Wunjo.name": "Wunjo",
    "cards.runes.Wunjo.meaning": "Alegría, felicidad, armonía",
    "cards.runes.Hagalaz.name": "Hagalaz",
    "cards.runes.Hagalaz.meaning": "Disrupción, cambio forzado, purificación",
    "cards.runes.Nauthiz.name": "Nauthiz",
    "cards.runes.Nauthiz.meaning": "Necesidad, restricción, lección kármica",
    "cards.runes.Isa.name": "Isa",
    "cards.runes.Isa.meaning": "Hielo, estancamiento, paciencia",
    "cards.runes.Jera.name": "Jera",
    "cards.runes.Jera.meaning": "Cosecha, ciclos, recompensa",
    "cards.runes.Eihwaz.name": "Eihwaz",
    "cards.runes.Eihwaz.meaning":
      "Resistencia, protección, conexión espiritual",
    "cards.runes.Perthro.name": "Perthro",
    "cards.runes.Perthro.meaning": "Misterio, destino, fuerzas ocultas",
    "cards.runes.Algiz.name": "Algiz",
    "cards.runes.Algiz.meaning": "Protección divina, conexión con guías",
    "cards.runes.Sowilo.name": "Sowilo",
    "cards.runes.Sowilo.meaning": "Éxito, victoria, energía solar",
    "cards.runes.Tiwaz.name": "Tiwaz",
    "cards.runes.Tiwaz.meaning": "Victoria, justicia, sacrificio honorable",
    "cards.runes.Berkano.name": "Berkano",
    "cards.runes.Berkano.meaning": "Crecimiento, fertilidad, nuevo ciclo",
    "cards.runes.Ehwaz.name": "Ehwaz",
    "cards.runes.Ehwaz.meaning": "Movimiento, progreso, asociación",
    "cards.runes.Mannaz.name": "Mannaz",
    "cards.runes.Mannaz.meaning": "Humanidad, yo, inteligencia",
    "cards.runes.Laguz.name": "Laguz",
    "cards.runes.Laguz.meaning": "Agua, intuición, emociones",
    "cards.runes.Ingwaz.name": "Ingwaz",
    "cards.runes.Ingwaz.meaning": "Fertilidad masculina, energía creativa",
    "cards.runes.Dagaz.name": "Dagaz",
    "cards.runes.Dagaz.meaning": "Despertar, transformación, nuevo día",
    "cards.runes.Othala.name": "Othala",
    "cards.runes.Othala.meaning": "Herencia, propiedad, tradición familiar",
    
        // Tirada del Oráculo del Amor
        "crossSpread.positions.present": "El Presente",
        "crossSpread.positions.obstacle": "El Obstáculo",
        "crossSpread.positions.past": "El Pasado",
        "crossSpread.positions.future": "El Futuro",
        "crossSpread.positions.synthesis": "La Síntesis",
        "crossSpread.interpretation.title": "Tu Tirada en Cruz",
        "crossSpread.interpretation.subtitle": "{name}, tu lectura revela un camino amoroso lleno de mensajes y claridad.",
        "crossSpread.interpretation.sections.positive": "Aspectos Positivos",
        "crossSpread.interpretation.sections.attention": "Puntos de Atención",
        "crossSpread.interpretation.sections.advice": "Consejo",
        "crossSpread.interpretation.newConsultation": "Nueva Consulta",
    "gameMode.classic.title": "Tirada de 3 Cartas",
    "gameMode.classic.description": "Obtén una guía amorosa inmediata con una tirada simple e intuitiva de 3 cartas.",
    "gameMode.classic.features": "3 cartas • Guía rápida • Mensaje personalizado",
        "gameMode.cross.title": "Tirada en Cruz",
        "gameMode.cross.description": "Una lectura profunda con 5 posiciones para explorar tu situación sentimental",
        "oracle.loveOracle.title": "Oráculo del Amor",
        "oracle.loveOracle.description": "Descubre lo que te depara el futuro en el amor con esta tirada.",
    "crossSpread.title": "Tirada en Cruz – Oráculo del Amor",
    "crossSpread.description": "Esta tirada analiza tu situación sentimental a través de tres ejes: energías favorables (A Favor), obstáculos o bloqueos (En Contra) y el mensaje final (Síntesis). Cada carta revela una variación específica según tu lectura.",
    "interpretation.loveOracle.greeting": "Esto es lo que revela tu tirada del amor",
    "revelation.personalAdvice": "Tu consejo personal",
    "common.loading": "Cargando...",
        "gameMode.classic.cta": "Consultar el oráculo",
        "gameMode.cross.cta": "Consultar el oráculo",

    // Nombres de las cartas del Oráculo del Amor
    "cards.loveOracle.lerendezvous.name": "El Encuentro",
    "cards.loveOracle.lemessage.name": "El Mensaje",
    "cards.loveOracle.ledesir.name": "El Deseo",
    "cards.loveOracle.lecoeurouvert.name": "El Corazón Abierto",
    "cards.loveOracle.lecoeurferme.name": "El Corazón Cerrado",
    "cards.loveOracle.lechoix.name": "La Elección",
    "cards.loveOracle.leretour.name": "El Regreso",
    "cards.loveOracle.ladistance.name": "La Distancia",
    "cards.loveOracle.lunion.name": "La Unión",
    "cards.loveOracle.lemasque.name": "La Máscara",
    "cards.loveOracle.lapassion.name": "La Pasión",
    "cards.loveOracle.lachance.name": "La Suerte",
    "cards.loveOracle.ledestin.name": "El Destino",
    "cards.loveOracle.lesilence.name": "El Silencio",
    "cards.loveOracle.laverite.name": "La Verdad",
    "cards.loveOracle.lecadeau.name": "El Regalo",
    "cards.loveOracle.lablessure.name": "La Herida",
    "cards.loveOracle.lenouveaudepart.name": "El Nuevo Comienzo",
    "cards.loveOracle.lafusion.name": "La Fusión",
    "cards.loveOracle.latentation.name": "La Tentación",
    "cards.loveOracle.laprotection.name": "La Protección",
    "cards.loveOracle.laliberation.name": "La Liberación",

    // ========== LABELS DE LAS 3 ENERGÍAS ==========
    // Para el Oráculo del Amor
    "interpretation.loveOracle.energy1.label": "Energía dominante",
    "interpretation.loveOracle.energy1.subtitle": "Lo que sientes por dentro",
    "interpretation.loveOracle.energy2.label": "Influencia externa",
    "interpretation.loveOracle.energy2.subtitle": "Lo que sucede a tu alrededor",
    "interpretation.loveOracle.energy3.label": "Evolución posible",
    "interpretation.loveOracle.energy3.subtitle": "Lo que podría suceder pronto",

    // Nombres y significados de las cartas - Oráculo del Amor - Lectura de 3 cartas
    // La cita — Energía dominante (lo que sientes)
    "cards.loveOracle.lerendezvous.meaning.energy1.var1": "Estás esperando con ansias este encuentro y tu corazón está lleno de esperanza y emoción.",
    "cards.loveOracle.lerendezvous.meaning.energy1.var2": "Tu mente está concentrada en esta cita, ya imaginas momentos intensos y agradables.",
    "cards.loveOracle.lerendezvous.meaning.energy1.var3": "Sientes una mezcla de nerviosismo y deseo, pero estás listo para disfrutar al máximo de este momento.",
    // La cita — Influencia externa (lo que sucede a tu alrededor)
    "cards.loveOracle.lerendezvous.meaning.energy2.var1": "La persona que vas a encontrar también parece impaciente y puede haber preparado algo especial para ti.",
    "cards.loveOracle.lerendezvous.meaning.energy2.var2": "Algunas circunstancias o eventos podrían hacer que este encuentro sea inolvidable o complicarlo ligeramente.",
    "cards.loveOracle.lerendezvous.meaning.energy2.var3": "Tu entorno puede animarte y ofrecerte consejos para que esta cita salga lo mejor posible.",
    // El Encuentro — Evolución posible (lo que puede suceder pronto)
    "cards.loveOracle.lerendezvous.meaning.energy3.var1": "Este encuentro podría crear una conexión fuerte y acercarte a esta persona de manera significativa.",
    "cards.loveOracle.lerendezvous.meaning.energy3.var2": "Aunque no todo salga perfectamente, este encuentro te traerá emociones intensas y recuerdos valiosos.",
    "cards.loveOracle.lerendezvous.meaning.energy3.var3": "Es posible que una revelación o un gesto durante este encuentro cambien la dinámica de vuestra relación y abran nuevas perspectivas.",
    // El Mensaje — Energía dominante (lo que sientes)
    "cards.loveOracle.lemessage.meaning.energy1.var1": "Estás esperando un mensaje, pero no sabes cuándo llegará y te preguntas si esta persona realmente te escribirá.",
    "cards.loveOracle.lemessage.meaning.energy1.var2": "Alguien duda en enviarte un mensaje, lo que crea una mezcla de esperanza y duda en tu corazón.",
    "cards.loveOracle.lemessage.meaning.energy1.var3": "Sigues esperando, sin saber si el mensaje llegará, y esto te hace reflexionar sobre lo que realmente deseas.",
    // El Mensaje — Influencia externa (lo que sucede a tu alrededor)
    "cards.loveOracle.lemessage.meaning.energy2.var1": "La persona involucrada podría enviarte un mensaje que cambie la dinámica entre ustedes.",
    "cards.loveOracle.lemessage.meaning.energy2.var2": "Eventos externos o consejos de amigos pueden influir en lo que recibirás o cuándo lo recibirás.",
    "cards.loveOracle.lemessage.meaning.energy2.var3": "Es posible que el mensaje sea inesperado, revelador, o incluso un desencadenante para avanzar en vuestra relación.",
    // El Mensaje — Evolución posible (lo que puede suceder pronto)
    "cards.loveOracle.lemessage.meaning.energy3.var1": "Si eres paciente y atento, este mensaje podría traerte noticias importantes o una aclaración.",
    "cards.loveOracle.lemessage.meaning.energy3.var2": "Este mensaje podría sorprenderte, provocar emociones fuertes, y guiarte en tus próximas decisiones románticas.",
    "cards.loveOracle.lemessage.meaning.energy3.var3": "Aunque el mensaje no sea exactamente lo que esperabas, podría ayudarte a avanzar y comprender mejor la situación.",
    // El Deseo — Energía dominante (lo que sientes)
    "cards.loveOracle.ledesir.meaning.energy1.var1": "Tu cuerpo y tu corazón arden por esta persona, y sueñas con momentos intensos y sensuales con ella.",
    "cards.loveOracle.ledesir.meaning.energy1.var2": "Cada pensamiento, cada mirada avivará tu deseo y te hará imaginar momentos apasionados.",
    "cards.loveOracle.ledesir.meaning.energy1.var3": "Tienes un deseo irresistible de acercarte, de sentir esta conexión tanto física como emocional.",
    // El Deseo — Influencia externa (lo que sucede a tu alrededor)
    "cards.loveOracle.ledesir.meaning.energy2.var1": "La persona que deseas podría sentir también esta atracción intensa, creando momentos calientes e inesperados.",
    "cards.loveOracle.ledesir.meaning.energy2.var2": "Situaciones o miradas compartidas podrían encender tus emociones y fortalecer este deseo casi irresistible.",
    "cards.loveOracle.ledesir.meaning.energy2.var3": "Ten cuidado, la intensidad puede ser fuerte y sorprendente, y a veces necesitarás gestionar esta pasión para evitar complicaciones.",
    // El Deseo — Evolución posible (lo que puede suceder pronto)
    "cards.loveOracle.ledesir.meaning.energy3.var1": "Si cedes a este deseo, podrías vivir momentos torridos y encuentros apasionados que marcarán tu corazón.",
    "cards.loveOracle.ledesir.meaning.energy3.var2": "Este deseo podría evolucionar en una conexión muy intensa, pero ten cuidado con las consecuencias si la persona es inalcanzable o complicada.",
    "cards.loveOracle.ledesir.meaning.energy3.var3": "Aunque la situación sea delicada, dejar que hable tu deseo podría permitirte vivir momentos sensuales y emocionalmente poderosos.",
    // El Corazón Abierto — Energía dominante (lo que sientes)
    "cards.loveOracle.lecoeurouvert.meaning.energy1.var1": "Tu corazón está listo para abrirse y recibir a alguien nuevo, sin miedo ni reservas.",
    "cards.loveOracle.lecoeurouvert.meaning.energy1.var2": "Sientes un deseo profundo de compartir y conectar, y ya no quieres protegerte.",
    "cards.loveOracle.lecoeurouvert.meaning.energy1.var3": "Eres sensible y receptivo a las emociones de los demás, y tu corazón se abre fácilmente al amor.",
    // El Corazón Abierto — Influencia externa (lo que sucede a tu alrededor)
    "cards.loveOracle.lecoeurouvert.meaning.energy2.var1": "Alguien cercano a ti te está animando a abrirte y mostrar tus sentimientos, aunque te dé miedo.",
    "cards.loveOracle.lecoeurouvert.meaning.energy2.var2": "Los eventos a tu alrededor te empujan hacia la conexión, lo que podría hacer que te enamores rápidamente.",
    "cards.loveOracle.lecoeurouvert.meaning.energy2.var3": "Ten cuidado, algunas personas podrían aprovechar tu sensibilidad y apertura, así que mantén la cautela.",
    // El Corazón Abierto — Evolución posible (lo que puede suceder pronto)
    "cards.loveOracle.lecoeurouvert.meaning.energy3.var1": "Si sigues abierto y sincero, un encuentro importante podría cambiar tu vida amorosa.",
    "cards.loveOracle.lecoeurouvert.meaning.energy3.var2": "Tu apertura podría ser recompensada con momentos intensos de complicidad, pero también con heridas si no eres cauteloso.",
    "cards.loveOracle.lecoeurouvert.meaning.energy3.var3": "Al dejar que tu corazón guíe tus decisiones, podrías vivir una relación fuerte, pero no olvides poner límites.",
    // El Corazón Cerrado — Energía dominante (lo que sientes)
    "cards.loveOracle.lecoeurferme.meaning.energy1.var1": "Tu corazón está cerrado y te cuesta confiar en los demás, incluso en aquellos que amas.",
    "cards.loveOracle.lecoeurferme.meaning.energy1.var2": "Te proteges del dolor y las decepciones pasadas, y te niegas a mostrar tus verdaderos sentimientos.",
    "cards.loveOracle.lecoeurferme.meaning.energy1.var3": "Sientes una distancia emocional, como si estuvieras a la defensiva frente al amor y la intimidad.",
    // El Corazón Cerrado — Influencia externa (lo que sucede a tu alrededor)
    "cards.loveOracle.lecoeurferme.meaning.energy2.var1": "Personas o situaciones recientes te han herido, lo que ha reforzado tu desconfianza y prudencia.",
    "cards.loveOracle.lecoeurferme.meaning.energy2.var2": "Alguien podría intentar acercarse, pero estás ignorando sus señales o rechazándolas sin querer.",
    "cards.loveOracle.lecoeurferme.meaning.energy2.var3": "Tu entorno podría animarte a abrirte, pero aún dudas, temeroso de equivocarte o sufrir.",
    // El Corazón Cerrado — Evolución posible (lo que puede suceder pronto)
    "cards.loveOracle.lecoeurferme.meaning.energy3.var1": "Si sigues manteniendo tu corazón cerrado, podrías perder un encuentro importante y sincero.",
    "cards.loveOracle.lecoeurferme.meaning.energy3.var2": "Con el tiempo y la confianza, podrías ir abriéndote gradualmente y vivir una relación verdadera, pero necesitarás coraje.",
    "cards.loveOracle.lecoeurferme.meaning.energy3.var3": "Un evento o una persona inesperada podría empujarte a dejar caer tus defensas y permitir que el amor entre, aunque te dé miedo.",
    // La Elección — Energía dominante (lo que sientes)
    "cards.loveOracle.lechoix.meaning.energy1.var1": "Te sientes dividido entre dos personas o dos direcciones, y tu corazón no sabe cuál seguir.",
    "cards.loveOracle.lechoix.meaning.energy1.var2": "Estás pensando mucho en tus sentimientos y tratando de entender lo que realmente deseas en el amor.",
    "cards.loveOracle.lechoix.meaning.energy1.var3": "Se está acercando una decisión importante, y sientes tanto emoción como miedo de tomar la decisión equivocada.",
    // La Elección — Influencia externa (lo que sucede a tu alrededor)
    "cards.loveOracle.lechoix.meaning.energy2.var1": "Las opiniones externas o los consejos pueden complicar tu reflexión y hacerte dudar de tus propios sentimientos.",
    "cards.loveOracle.lechoix.meaning.energy2.var2": "Algunas personas a tu alrededor tienen sus propios intereses y podrían influir en tus decisiones a su favor.",
    "cards.loveOracle.lechoix.meaning.energy2.var3": "Tu entorno también puede apoyarte y ayudarte a aclarar lo que realmente deseas, aunque el camino siga siendo difícil.",
    // La Elección — Evolución posible (lo que puede suceder pronto)
    "cards.loveOracle.lechoix.meaning.energy3.var1": "Si escuchas tu corazón e instintos, podrás tomar una decisión que te corresponda y te traerá felicidad.",
    "cards.loveOracle.lechoix.meaning.energy3.var2": "Es posible que tus dudas te hagan perder una oportunidad, pero esto te enseñará más sobre ti mismo.",
    "cards.loveOracle.lechoix.meaning.energy3.var3": "Una decisión importante podría alterar tu equilibrio actual, pero también abrirá el camino a una relación sincera e intensa si te atreves a dar el paso.",
    // El Regreso — Energía dominante (lo que sientes)
    "cards.loveOracle.leretour.meaning.energy1.var1": "Sientes un fuerte deseo de que alguien regrese a tu vida, y tu corazón espera una segunda oportunidad.",
    "cards.loveOracle.leretour.meaning.energy1.var2": "Estás dividido entre el pasado y el presente, y piensas a menudo en lo que pudo haber sido.",
    "cards.loveOracle.leretour.meaning.energy1.var3": "Un sentimiento de nostalgia y espera te invade, como si una parte de ti quisiera reparar lo que se ha perdido.",
    // El Regreso — Influencia externa (lo que sucede a tu alrededor)
    "cards.loveOracle.leretour.meaning.energy2.var1": "La persona en la que piensas para que regrese podría sentir también la necesidad de regresar, pero duda en manifestarse.",
    "cards.loveOracle.leretour.meaning.energy2.var2": "Eventos o amigos pueden facilitar este regreso o retrasarlo, dependiendo de las circunstancias.",
    "cards.loveOracle.leretour.meaning.energy2.var3": "Algunas influencias externas podrían impulsarte a reavivar la relación, pero necesitarás ser cauteloso para no repetir los errores del pasado.",
    // El Regreso — Evolución posible (lo que puede suceder pronto)
    "cards.loveOracle.leretour.meaning.energy3.var1": "Si te abres y le das una oportunidad a esta persona, es posible recuperar una conexión fuerte y sincera.",
    "cards.loveOracle.leretour.meaning.energy3.var2": "Un regreso podría avivar emociones intensas, pero tendrás que aclarar las expectativas para evitar heridas.",
    "cards.loveOracle.leretour.meaning.energy3.var3": "También es posible que la persona no regrese, y que esta situación te impulse a pasar página y centrarte en un nuevo amor.",
    // La Distancia — Energía dominante (lo que sientes)
    "cards.loveOracle.ladistance.meaning.energy1.var1": "Sientes una distancia emocional o física que te pesa y te hace dudar de la relación.",
    "cards.loveOracle.ladistance.meaning.energy1.var2": "Tu corazón tiene dificultades para llenar el vacío, y sueñas con proximidad y momentos compartidos.",
    "cards.loveOracle.ladistance.meaning.energy1.var3": "La separación te hace sentir un vacío y, a veces, frustración, pero sigues esperando que las cosas mejoren.",
    // La Distancia — Influencia externa (lo que sucede a tu alrededor)
    "cards.loveOracle.ladistance.meaning.energy2.var1": "Circunstancias externas como el trabajo, la vida personal o la situación geográfica pueden mantener esta distancia.",
    "cards.loveOracle.ladistance.meaning.energy2.var2": "Consejos o presiones de cercanos pueden impulsarte a aceptar la situación o buscar llenarla.",
    "cards.loveOracle.ladistance.meaning.energy2.var3": "Es posible que alguien intente reducir la distancia, pero dependerá de tu compromiso y decisiones.",
    // La Distancia — Evolución posible (lo que puede suceder pronto)
    "cards.loveOracle.ladistance.meaning.energy3.var1": "Si haces un esfuerzo por comunicarte y acercarte, la distancia podría reducirse y la relación fortalecerse.",
    "cards.loveOracle.ladistance.meaning.energy3.var2": "Es posible que la distancia persista y ponga a prueba la relación, revelando lo que realmente estás dispuesto a vivir.",
    "cards.loveOracle.ladistance.meaning.energy3.var3": "Un evento inesperado podría crear un encuentro o acercamiento, pero necesitarás actuar rápidamente para aprovechar la oportunidad.",
    // La Unión — Energía dominante (lo que sientes)
    "cards.loveOracle.lunion.meaning.energy1.var1": "Sientes una profunda necesidad de conexión y compartir, y tu corazón anhela una relación sincera y duradera.",
    "cards.loveOracle.lunion.meaning.energy1.var2": "Estás listo para comprometerte y construir algo sólido con alguien que realmente te corresponde.",
    "cards.loveOracle.lunion.meaning.energy1.var3": "Tu deseo de proximidad y complicidad es fuerte, y buscas crear un lazo auténtico y profundo.",
    // La Unión — Influencia externa (lo que sucede a tu alrededor)
    "cards.loveOracle.lunion.meaning.energy2.var1": "Las personas a tu alrededor pueden animarte a comprometerte y buscar una unión sincera, o advertirte contra malas decisiones.",
    "cards.loveOracle.lunion.meaning.energy2.var2": "Eventos o encuentros recientes favorecen la creación de lazos sólidos y la posibilidad de construir algo verdadero.",
    "cards.loveOracle.lunion.meaning.energy2.var3": "Cuidado, algunas influencias externas podrían complicar la relación, pero también pueden revelar la fuerza de tu vínculo.",
    // La Unión — Evolución posible (lo que puede suceder pronto)
    "cards.loveOracle.lunion.meaning.energy3.var1": "Si inviertes tu corazón y energía, una unión duradera y armoniosa podría formarse muy pronto.",
    "cards.loveOracle.lunion.meaning.energy3.var2": "Es posible que la relación pase por pruebas, pero si permaneces sincero y atento, tu vínculo saldrá fortalecido.",
    "cards.loveOracle.lunion.meaning.energy3.var3": "Un encuentro importante o evento clave podría consolidar tu relación y abrir el camino a un amor profundo y estable.",
    // La Máscara — Energía dominante (lo que sientes)
    "cards.loveOracle.lemasque.meaning.energy1.var1": "Tienes la tendencia de esconder tus verdaderas emociones y no mostrar tus sentimientos para protegerte.",
    "cards.loveOracle.lemasque.meaning.energy1.var2": "Sientes cierta distancia emocional, como si llevaras una máscara para evitar sufrir o ser juzgado.",
    "cards.loveOracle.lemasque.meaning.energy1.var3": "A veces, estás dividido entre lo que realmente sientes y la imagen que quieres mostrar a los demás.",
    // La Máscara — Influencia externa (lo que sucede a tu alrededor)
    "cards.loveOracle.lemasque.meaning.energy2.var1": "Algunas personas a tu alrededor solo ven la fachada que muestras y no perciben tus emociones reales.",
    "cards.loveOracle.lemasque.meaning.energy2.var2": "Situaciones externas te empujan a protegerte aún más y a mantener esta máscara, por miedo a la decepción o al rechazo.",
    "cards.loveOracle.lemasque.meaning.energy2.var3": "Seres cercanos o eventos podrían impulsarte a quitarte la máscara, pero requiere valentía y confianza.",
    // La Máscara — Evolución posible (lo que puede suceder pronto)
    "cards.loveOracle.lemasque.meaning.energy3.var1": "Si aceptas mostrar quién eres realmente, podrías vivir una conexión sincera y profunda con alguien que te entienda.",
    "cards.loveOracle.lemasque.meaning.energy3.var2": "Es posible que tu máscara sea rota por una situación o persona, revelando tus verdaderas emociones y desencadenando cambios en tu vida amorosa.",
    "cards.loveOracle.lemasque.meaning.energy3.var3": "Seguir llevando esta máscara podría protegerte a corto plazo, pero arriesgas alejarte de relaciones auténticas y enriquecedoras.",
    // La Pasión — Energía dominante (lo que sientes)
    "cards.loveOracle.lapassion.meaning.energy1.var1": "Ardes de un deseo intenso y tu cuerpo reclama esta conexión, como si cada pensamiento girara en torno a esta persona.",
    "cards.loveOracle.lapassion.meaning.energy1.var2": "Tu corazón late rápido y tu mente está obsesionada con esta persona, sueñas con momentos apasionados e intensos.",
    "cards.loveOracle.lapassion.meaning.energy1.var3": "Sientes una atracción irresistible, combinando emociones y sensualidad, y deseas vivir todo plenamente con esta persona.",
    // La Pasión — Influencia externa (lo que sucede a tu alrededor)
    "cards.loveOracle.lapassion.meaning.energy2.var1": "La persona que deseas está muy presente en tu vida diaria o en tu mente, y esto alimenta la intensidad.",
    "cards.loveOracle.lapassion.meaning.energy2.var2": "Signos o acercamientos pueden amplificar esta tensión y atracción, sumergiéndote en un torbellino de emociones.",
    "cards.loveOracle.lapassion.meaning.energy2.var3": "Cuidado, esta pasión también puede ser complicada por obstáculos externos, pero revela la energía poderosa que los une.",
    // La Pasión — Evolución posible (lo que puede suceder pronto)
    "cards.loveOracle.lapassion.meaning.energy3.var1": "Si te dejas llevar por esta pasión, podrías vivir momentos intensos e inolvidables, pero tendrás que ser consciente de las consecuencias.",
    "cards.loveOracle.lapassion.meaning.energy3.var2": "Esta energía podría transformar la relación, acercándote profundamente a esta persona o creando situaciones explosivas.",
    "cards.loveOracle.lapassion.meaning.energy3.var3": "La pasión podría evolucionar hacia un amor poderoso y profundo si logras canalizar tus emociones y ser sincero contigo mismo y con la otra persona.",
    // La Suerte — Energía dominante (lo que sientes)
    "cards.loveOracle.lachance.meaning.energy1.var1": "Sientes que la suerte está de tu lado y que pronto podrían presentarse oportunidades románticas.",
    "cards.loveOracle.lachance.meaning.energy1.var2": "Tu corazón está abierto y listo para recibir lo que pueda llegar de hermoso e inesperado.",
    "cards.loveOracle.lachance.meaning.energy1.var3": "Sientes un impulso positivo en tu vida amorosa, como si el universo quisiera sonreírte y ofrecerte un hermoso encuentro.",
    // La Suerte — Influencia externa (lo que sucede a tu alrededor)
    "cards.loveOracle.lachance.meaning.energy2.var1": "Encuentros o eventos fortuitos podrían jugar a tu favor y acercarte a alguien especial.",
    "cards.loveOracle.lachance.meaning.energy2.var2": "Tu entorno podría ofrecerte oportunidades o ponerte en contacto con personas que coinciden con tus deseos.",
    "cards.loveOracle.lachance.meaning.energy2.var3": "Es posible que la suerte se manifieste de manera inesperada, pero tendrás que estar atento para no dejarla pasar.",
    // La Suerte — Evolución posible (lo que puede suceder pronto)
    "cards.loveOracle.lachance.meaning.energy3.var1": "Si te mantienes abierto y atento, un encuentro feliz o un evento positivo podría transformar tu vida amorosa.",
    "cards.loveOracle.lachance.meaning.energy3.var2": "La suerte podría sorprenderte y traerte una situación ideal, pero tendrás que aprovechar la oportunidad cuando se presente.",
    "cards.loveOracle.lachance.meaning.energy3.var3": "Aunque no todo salga perfectamente, este período promete sorpresas y momentos felices que te acercarán al amor que deseas.",
    // El Destino — Energía dominante (lo que sientes)
    "cards.loveOracle.ledestin.meaning.energy1.var1": "Sientes que ciertos encuentros o eventos están escritos para ti y que el destino juega un papel en tu vida amorosa.",
    "cards.loveOracle.ledestin.meaning.energy1.var2": "Tu corazón está intrigado por lo que parece inevitable y te dejas llevar por el curso de los eventos.",
    "cards.loveOracle.ledestin.meaning.energy1.var3": "Sientes una fuerza misteriosa que te empuja hacia ciertas personas o situaciones, como si todo estuviera ligado por el destino.",
    // El Destino — Influencia externa (lo que sucede a tu alrededor)
    "cards.loveOracle.ledestin.meaning.energy2.var1": "Encuentros fortuitos o eventos inesperados podrían acercarte a lo que el destino tiene preparado para ti.",
    "cards.loveOracle.ledestin.meaning.energy2.var2": "Tu entorno o las circunstancias podrían crear oportunidades que parecen ser guiadas por una fuerza superior.",
    "cards.loveOracle.ledestin.meaning.energy2.var3": "Ten cuidado, algunas situaciones podrían parecer desvíos, pero son parte del camino que el destino ha planeado para ti.",
    // El Destino — Evolución posible (lo que puede suceder pronto)
    "cards.loveOracle.ledestin.meaning.energy3.var1": "Si aceptas seguir la corriente y confiar en el destino, un encuentro o evento importante podría alterar tu vida amorosa.",
    "cards.loveOracle.ledestin.meaning.energy3.var2": "El destino podría traerte una oportunidad única, pero tendrás que estar atento y aprovechar el momento cuando se presente.",
    "cards.loveOracle.ledestin.meaning.energy3.var3": "Aunque el camino parezca complicado, el destino está trabajando para ti y podría conducirte a una relación significativa y profunda.",
    // El Silencio — Energía dominante (lo que sientes)
    "cards.loveOracle.lesilence.meaning.energy1.var1": "Sientes un vacío o una distancia en la comunicación, y el silencio te pesa en tus relaciones amorosas.",
    "cards.loveOracle.lesilence.meaning.energy1.var2": "Tu corazón está confundido y te preguntas si el silencio oculta sentimientos o distanciamiento.",
    "cards.loveOracle.lesilence.meaning.energy1.var3": "A veces prefieres quedarte callado y guardar tus emociones para ti, lo que puede crear malentendidos o tensión.",
    // El Silencio — Influencia externa (lo que sucede a tu alrededor)
    "cards.loveOracle.lesilence.meaning.energy2.var1": "La persona frente a ti puede ser distante o reservada, y su silencio influye en tu estado de ánimo.",
    "cards.loveOracle.lesilence.meaning.energy2.var2": "Circunstancias externas o tensiones recientes pueden crear silencio, haciendo que la comunicación sea más difícil.",
    "cards.loveOracle.lesilence.meaning.energy2.var3": "Tu entorno puede aconsejarte o intervenir para restablecer el diálogo, pero la decisión de hablar o no dependerá de ti y de la otra persona.",
    // El Silencio — Evolución posible (lo que puede suceder pronto)
    "cards.loveOracle.lesilence.meaning.energy3.var1": "Si eliges romper el silencio y expresar tus emociones, podría ocurrir una aclaración o una reconciliación.",
    "cards.loveOracle.lesilence.meaning.energy3.var2": "El silencio podría continuar y hacerte dudar, pero también te dará tiempo para reflexionar sobre lo que realmente deseas.",
    "cards.loveOracle.lesilence.meaning.energy3.var3": "Un evento inesperado o una persona podría reiniciar la comunicación y revelar verdades ocultas, abriendo el camino a una mejor comprensión mutua.",
    // La Verdad — Energía dominante (lo que sientes)
    "cards.loveOracle.laverite.meaning.energy1.var1": "Sientes la necesidad de conocer la verdad sobre una situación o una persona, y tu corazón reclama claridad.",
    "cards.loveOracle.laverite.meaning.energy1.var2": "Tu intuición te empuja a buscar transparencia y no conformarte más con medias verdades o apariencias falsas.",
    "cards.loveOracle.laverite.meaning.energy1.var3": "Estás dispuesto a enfrentar lo que es real, aunque eso pueda ser doloroso o sorprendente.",
    // La Verdad — Influencia externa (lo que sucede a tu alrededor)
    "cards.loveOracle.laverite.meaning.energy2.var1": "Los hechos o revelaciones a tu alrededor podrían mostrarte lo que realmente está en juego en esta relación.",
    "cards.loveOracle.laverite.meaning.energy2.var2": "Algunas personas podrían ocultarte la verdad, ya sea de forma deliberada o por miedo a lastimarte, lo que complica la situación.",
    "cards.loveOracle.laverite.meaning.energy2.var3": "Tu entorno o eventos imprevistos podrían empujarte a descubrir lo que es real, aunque no sea lo que esperabas.",
    // La Verdad — Evolución posible (lo que puede suceder pronto)
    "cards.loveOracle.laverite.meaning.energy3.var1": "Si aceptas enfrentar la verdad, podrás tomar decisiones claras y avanzar en tus relaciones con confianza.",
    "cards.loveOracle.laverite.meaning.energy3.var2": "La verdad podría revelar sorpresas, tanto positivas como negativas, pero siempre te dará la libertad de elegir tu camino.",
    "cards.loveOracle.laverite.meaning.energy3.var3": "Aunque la verdad sea difícil de escuchar, podría abrir el camino a una relación sincera y sólida, o liberarte de una situación que ya no te sirve.",
    // El Regalo — Energía dominante (lo que sientes)
    "cards.loveOracle.lecadeau.meaning.energy1.var1": "Sientes que el amor o una relación podrían traerte un regalo inesperado, una sorpresa que hace latir tu corazón.",
    "cards.loveOracle.lecadeau.meaning.energy1.var2": "Tu corazón está abierto a recibir algo valioso, ya sea atención, afecto o un encuentro importante.",
    "cards.loveOracle.lecadeau.meaning.energy1.var3": "Estás emocionado por descubrir lo que la vida amorosa puede ofrecerte, aunque aún no sepas qué esperar.",
    // El Regalo — Influencia externa (lo que sucede a tu alrededor)
    "cards.loveOracle.lecadeau.meaning.energy2.var1": "Las personas a tu alrededor podrían ofrecerte ocasiones u oportunidades que enriquezcan tu corazón y tu vida sentimental.",
    "cards.loveOracle.lecadeau.meaning.energy2.var2": "Un evento inesperado podría traerte algo valioso en tu vida amorosa, pero tendrás que estar atento para notarlo.",
    "cards.loveOracle.lecadeau.meaning.energy2.var3": "Sorpresas, ya sean positivas o un poco decepcionantes, pueden influir en tus decisiones y emociones en los próximos días.",
    // El Regalo — Evolución posible (lo que puede suceder pronto)
    "cards.loveOracle.lecadeau.meaning.energy3.var1": "Si aceptas lo que la vida te trae con gratitud, podrías recibir un regalo emocional que ilumine tu corazón.",
    "cards.loveOracle.lecadeau.meaning.energy3.var2": "Es posible que una persona o una situación te sorprenda gratamente y te traiga una felicidad inesperada.",
    "cards.loveOracle.lecadeau.meaning.energy3.var3": "Aunque no todo salga como planeado, estos regalos emocionales podrían ayudarte a avanzar y a comprender mejor tus deseos amorosos.",
    // La Herida — Energía dominante (lo que sientes)
    "cards.loveOracle.lablessure.meaning.energy1.var1": "Sientes un dolor profundo relacionado con el amor, como si una cicatriz emocional volviera a salir a la superficie.",
    "cards.loveOracle.lablessure.meaning.energy1.var2": "Tu corazón está frágil y te cuesta dejarte llevar o confiar en los demás.",
    "cards.loveOracle.lablessure.meaning.energy1.var3": "Una pena antigua o una traición te hace dudar del amor y te empuja a protegerte.",
    // La Herida — Influencia externa (lo que sucede a tu alrededor)
    "cards.loveOracle.lablessure.meaning.energy2.var1": "Las personas o situaciones externas pueden reavivar este dolor y recordarte lo que te ha lastimado.",
    "cards.loveOracle.lablessure.meaning.energy2.var2": "Tu entorno podría apoyarte o animarte a superar esta herida, pero la sanación dependerá de tu compromiso contigo mismo.",
    "cards.loveOracle.lablessure.meaning.energy2.var3": "A veces, esta herida te empuja a evitar ciertas relaciones o a desconfiar de nuevos encuentros, ralentizando tu impulso amoroso.",
    // La Herida — Evolución posible (lo que puede suceder pronto)
    "cards.loveOracle.lablessure.meaning.energy3.var1": "Si aceptas trabajar en este dolor y abrirte de todos modos, podrías sanar y encontrar una relación sincera y profunda.",
    "cards.loveOracle.lablessure.meaning.energy3.var2": "Es posible que esta herida resurja, pero cada prueba puede enseñarte algo y hacerte más fuerte.",
    "cards.loveOracle.lablessure.meaning.energy3.var3": "Un encuentro o evento podría ayudarte a superar este dolor y abrir tu corazón a un amor más consciente y equilibrado.",
    // El Nuevo Comienzo — Energía dominante (lo que sientes)
    "cards.loveOracle.lenouveaudepart.meaning.energy1.var1": "Sientes que es hora de pasar página y comenzar una nueva historia de amor con el corazón abierto.",
    "cards.loveOracle.lenouveaudepart.meaning.energy1.var2": "Tu mente está lista para dejar el pasado atrás y dar la bienvenida a nuevas experiencias y emociones.",
    "cards.loveOracle.lenouveaudepart.meaning.energy1.var3": "Sientes una mezcla de emoción y miedo, pero el deseo de renovación es más fuerte que tus dudas.",
    // El Nuevo Comienzo — Influencia externa (lo que sucede a tu alrededor)
    "cards.loveOracle.lenouveaudepart.meaning.energy2.var1": "Encuentros u oportunidades recientes pueden empujarte a lanzarte a algo nuevo y prometedor.",
    "cards.loveOracle.lenouveaudepart.meaning.energy2.var2": "Tu entorno puede alentarte o inspirarte a aprovechar esta oportunidad para comenzar de nuevo, pero la decisión final dependerá de ti.",
    "cards.loveOracle.lenouveaudepart.meaning.energy2.var3": "Eventos externos podrían desencadenar este nuevo comienzo, dándote el impulso necesario para avanzar.",
    // El Nuevo Comienzo — Evolución posible (lo que puede suceder pronto)
    "cards.loveOracle.lenouveaudepart.meaning.energy3.var1": "Si aceptas este nuevo comienzo, podrías conocer a alguien especial o vivir una experiencia que transforme tu corazón.",
    "cards.loveOracle.lenouveaudepart.meaning.energy3.var2": "Este renacimiento podría ser gradual, pero cada pequeño paso te acerca a una relación más sincera y satisfactoria.",
    "cards.loveOracle.lenouveaudepart.meaning.energy3.var3": "Aunque no todo salga como planeado, este nuevo comienzo te dará la oportunidad de aprender, crecer y abrir tu corazón al amor.",
    // Fusión — Energía dominante (lo que sientes)
    "cards.loveOracle.lafusion.meaning.energy1.var1": "Sientes una conexión intensa y profunda con alguien, como si vuestros corazones latieran al unísono.",
    "cards.loveOracle.lafusion.meaning.energy1.var2": "Tu deseo de cercanía y complicidad es fuerte, y sueñas con un vínculo profundo y sincero.",
    "cards.loveOracle.lafusion.meaning.energy1.var3": "Sientes que esta relación tiene el potencial de transformar tus emociones y tu visión del amor.",
    // Fusión — Influencia externa (lo que sucede a tu alrededor)
    "cards.loveOracle.lafusion.meaning.energy2.var1": "Eventos o situaciones favorecen esta cercanía intensa y podrían fortalecer vuestro vínculo rápidamente.",
    "cards.loveOracle.lafusion.meaning.energy2.var2": "Tu entorno puede apoyar esta unión, pero ten cuidado con las influencias externas que podrían poner a prueba vuestra conexión.",
    "cards.loveOracle.lafusion.meaning.energy2.var3": "Algunas tensiones o celos a vuestro alrededor pueden complicar esta fusión, pero también revelan la fuerza de vuestro lazo.",
    // Fusión — Evolución posible (lo que puede suceder pronto)
    "cards.loveOracle.lafusion.meaning.energy3.var1": "Si os abrís completamente a esta conexión, la fusión podría llevar a una relación apasionada y duradera.",
    "cards.loveOracle.lafusion.meaning.energy3.var2": "Esta unión intensa podría atravesar pruebas, pero si permanecéis sinceros y atentos, se fortalecerá.",
    "cards.loveOracle.lafusion.meaning.energy3.var3": "Un encuentro o un evento clave podría sellar este vínculo y crear una intimidad profunda y transformadora para vuestros corazones.",
    // Tentación — Energía dominante (lo que sientes)
    "cards.loveOracle.latentation.meaning.energy1.var1": "Sientes un deseo fuerte e irresistible por alguien o algo que atrae tu corazón y tu cuerpo.",
    "cards.loveOracle.latentation.meaning.energy1.var2": "Tu mente está dividida entre la razón y el deseo, y esta tentación te empuja a explorar lo que realmente deseas.",
    "cards.loveOracle.latentation.meaning.energy1.var3": "Te sientes atraído por lo prohibido o excitante, y es difícil resistir a este impulso.",
    // Tentación — Influencia externa (lo que sucede a tu alrededor)
    "cards.loveOracle.latentation.meaning.energy2.var1": "Situaciones o personas a tu alrededor pueden intensificar esta tentación y hacerla casi imposible de ignorar.",
    "cards.loveOracle.latentation.meaning.energy2.var2": "Tu entorno o las circunstancias pueden presentarte elecciones difíciles, poniendo a prueba tu capacidad para mantenerte fiel a tus valores.",
    "cards.loveOracle.latentation.meaning.energy2.var3": "Es posible que esta tentación sea una oportunidad para descubrir emociones intensas, pero también conlleva riesgos y complicaciones.",
    // Tentación — Evolución posible (lo que puede suceder pronto)
    "cards.loveOracle.latentation.meaning.energy3.var1": "Si cedes a esta tentación, podrías vivir momentos apasionados e intensos, pero deberías ser consciente de las consecuencias.",
    "cards.loveOracle.latentation.meaning.energy3.var2": "Esta situación podría enseñarte mucho sobre tus deseos y límites, permitiéndote entender mejor lo que realmente quieres.",
    "cards.loveOracle.latentation.meaning.energy3.var3": "También es posible que resistir a la tentación te aporte más claridad y te proteja de complicaciones innecesarias en tu vida amorosa.",
    // Protección — Energía dominante (lo que sientes)
    "cards.loveOracle.laprotection.meaning.energy1.var1": "Sientes la necesidad de protegerte emocionalmente para no sufrir en tus relaciones amorosas.",
    "cards.loveOracle.laprotection.meaning.energy1.var2": "Tu corazón está en guardia y te tomas tu tiempo para elegir a quién abres tus sentimientos.",
    "cards.loveOracle.laprotection.meaning.energy1.var3": "A veces, bloqueas ciertas emociones para sentirte seguro y evitar decepciones.",
    // Protección — Influencia externa (lo que sucede a tu alrededor)
    "cards.loveOracle.laprotection.meaning.energy2.var1": "Personas a tu alrededor o experiencias pasadas te animan a ser cauteloso y a proteger tu corazón.",
    "cards.loveOracle.laprotection.meaning.energy2.var2": "Algunas situaciones pueden ponerte alerta y reforzar tu necesidad de protegerte de heridas.",
    "cards.loveOracle.laprotection.meaning.energy2.var3": "Tu entorno también puede ayudarte a identificar lo que es seguro y lo que podría causarte dolor, guiándote hacia decisiones más protectoras.",
    // Protección — Evolución posible (lo que puede suceder pronto)
    "cards.loveOracle.laprotection.meaning.energy3.var1": "Si continúas protegiéndote mientras te mantienes abierto, podrás avanzar en tus relaciones sin sufrir.",
    "cards.loveOracle.laprotection.meaning.energy3.var2": "Es posible que te enfrentes a una situación que pondrá a prueba tu capacidad para protegerte mientras permaneces sincero.",
    "cards.loveOracle.laprotection.meaning.energy3.var3": "Una relación o evento podría ayudarte a sentirte seguro y abrir tu corazón gradualmente, sin arriesgarte a sufrir innecesariamente.",
    // Liberación — Energía dominante (lo que sientes)
    "cards.loveOracle.laliberation.meaning.energy1.var1": "Sientes la necesidad de liberarte de una relación o emociones que te retienen y te pesan.",
    "cards.loveOracle.laliberation.meaning.energy1.var2": "Tu corazón anhela recuperar su libertad y dejar de estar limitado por situaciones dolorosas o asfixiantes.",
    "cards.loveOracle.laliberation.meaning.energy1.var3": "A veces, tienes ganas de cortar los lazos con lo que te impide avanzar y respirar plenamente.",
    // Liberación — Influencia externa (lo que sucede a tu alrededor)
    "cards.loveOracle.laliberation.meaning.energy2.var1": "Personas o eventos a tu alrededor pueden ayudarte a soltar y a sentirte más libre.",
    "cards.loveOracle.laliberation.meaning.energy2.var2": "Algunas situaciones pueden impulsarte a tomar distancia y a desapegarte de lo que bloquea tu corazón.",
    "cards.loveOracle.laliberation.meaning.energy2.var3": "Tu entorno podría alentarte a liberarte de lo que ya no te sirve y a avanzar hacia relaciones más saludables.",
    // Liberación — Evolución posible (lo que puede suceder pronto)
    "cards.loveOracle.laliberation.meaning.energy3.var1": "Si aceptas liberarte, podrías vivir un renacimiento amoroso, más ligero y sincero.",
    "cards.loveOracle.laliberation.meaning.energy3.var2": "La liberación puede traerte nuevas oportunidades y encuentros que se alineen mejor con tu corazón y tus deseos.",
    "cards.loveOracle.laliberation.meaning.energy3.var3": "Aunque este proceso pueda ser difícil al principio, te permitirá recuperar tu fuerza interior y abrir tu corazón al amor verdadero.",

    // ========== CONSEILS THÉMATIQUES ORACLE DE L'AMOUR - TIRAGE 3 CARTES ==========
    // 1. Paciencia Amorosa
    "interpretation.loveOracle.advice.patience.var1": "Debes entender que el amor llega cuando menos lo esperas. Confía en el tiempo y en el universo, sabe lo que hace.",
    "interpretation.loveOracle.advice.patience.var2": "No fuerces las cosas, el amor vendrá a ti cuando estés listo para recibirlo. Déjalo manifestarse de manera natural.",
    "interpretation.loveOracle.advice.patience.var3": "El universo tiene sus propios planes, y a veces es mejor esperar que forzar un encuentro. Lo que está destinado para ti no pasará de largo.",
    // 2. Apertura del Corazón
    "interpretation.loveOracle.advice.openness.var1": "Tu corazón es un tesoro, es hora de compartirlo con aquellos que están listos para recibirlo. Déjate sorprender por las bellas sorpresas del amor.",
    "interpretation.loveOracle.advice.openness.var2": "Si te quedas cerrado, el amor no podrá entrar. Esté listo para abrir tu corazón, aunque eso requiera un poco de coraje.",
    "interpretation.loveOracle.advice.openness.var3": "Deja de protegerte a toda costa. El amor también es tomar riesgos y hacer espacio para lo nuevo.",
    // 3. Confianza en Ti Mismo
    "interpretation.loveOracle.advice.selfconfidence.var1": "Nunca dudes de tu valor, mereces lo mejor. Confía en ti mismo y sabe que eres digno de un amor puro y sincero.",
    "interpretation.loveOracle.advice.selfconfidence.var2": "Antes de dar tu amor, empieza por amarte a ti mismo. Cuando te respetas, el amor llegará más fácilmente.",
    "interpretation.loveOracle.advice.selfconfidence.var3": "El amor que buscas comienza con el amor que te das a ti mismo. Sé tu propio mayor fan.",
    // 4. Claridad Emocional
    "interpretation.loveOracle.advice.clarity.var1": "Escucha tu corazón. A veces sabe cosas que tu mente no comprende. Si eres claro contigo mismo, verás las cosas mucho más nítidamente.",
    "interpretation.loveOracle.advice.clarity.var2": "Tómate el tiempo para parar y realmente sentir lo que quieres en una relación. La claridad vendrá cuando dejes de apresurarte.",
    "interpretation.loveOracle.advice.clarity.var3": "Si te sientes perdido, quizás es hora de escucharte. Tus emociones te guiarán hacia lo que es correcto para ti.",
    // 5. Dejar Ir
    "interpretation.loveOracle.advice.lettinggo.var1": "Dejar ir no significa rendirse, sino aceptar que algunas cosas escapan a tu control. Deja que el universo haga su trabajo.",
    "interpretation.loveOracle.advice.lettinggo.var2": "Libérate del pasado, las dudas y las heridas. Nada nuevo podrá entrar en tu vida mientras te aferres a lo antiguo.",
    "interpretation.loveOracle.advice.lettinggo.var3": "Puedes controlar tu vida, pero a veces necesitas saber cuándo dejar ir para permitir que la magia del amor suceda.",
    // 6. Autenticidad
    "interpretation.loveOracle.advice.authenticity.var1": "Sé tú mismo sin compromisos. Solo siendo auténtico podrás atraer el amor que realmente te corresponde.",
    "interpretation.loveOracle.advice.authenticity.var2": "El amor verdadero no tiene nada que ver con máscaras. Sé honesto, aunque dé miedo. El amor llegará cuando muestres quién eres realmente.",
    "interpretation.loveOracle.advice.authenticity.var3": "Deja de intentar agradar a todos. El amor que importa es el que vives con alguien que te acepta tal como eres.",
    // 7. Protección del Corazón
    "interpretation.loveOracle.advice.protection.var1": "Protege tu corazón, pero no construyas muros alrededor. Aprende a poner límites sin cerrarte a los demás.",
    "interpretation.loveOracle.advice.protection.var2": "Protegerse no es una debilidad. Las personas correctas entrarán en tu vida si les permites hacerlo.",
    "interpretation.loveOracle.advice.protection.var3": "Es importante mantener tu corazón seguro, pero recuerda que una protección excesiva puede impedirte experimentar el amor verdadero.",
    // 8. Acción e Iniciativa
    "interpretation.loveOracle.advice.action.var1": "Si esperas a que el amor llegue sin hacer nada, podrías perderlo. Atrévete a dar el primer paso; podría cambiarlo todo.",
    "interpretation.loveOracle.advice.action.var2": "El amor no espera, así que toma la iniciativa. No dejes que la timidez o el miedo te impidan vivir una bella historia.",
    "interpretation.loveOracle.advice.action.var3": "A veces hay que actuar. Si sientes algo por alguien, no esperes a que la situación se resuelva sola.",
    // Fallback
    "interpretation.loveOracle.advice.fallback.var1": "No intentes comprenderlo todo, confía en tu corazón. Siempre te guía en la dirección correcta.",
    "interpretation.loveOracle.advice.fallback.var2": "Recuerda que todo se desarrolla como debe. El universo siempre tiene un plan para ti, aunque aún no lo veas.",
    "interpretation.loveOracle.advice.fallback.var3": "Tu intuición es tu mejor aliada, escúchala bien. Siempre te dirá lo que es correcto para ti.",

    // Card Names and Meanings - Love oracle - Tirage en croix
    // le rendez-vous
    "crossSpread.cards.lerendezvous.pour.variation1": "Se acerca un encuentro prometedor. Mantente abierto y receptivo.",
      "crossSpread.cards.lerendezvous.pour.variation2": "Pronto tendrás una hermosa oportunidad de acercarte a alguien. Atrévete a dar el primer paso.",
      "crossSpread.cards.lerendezvous.pour.variation3": "Una conexión inesperada puede transformar tu historia de amor. Actúa con valentía.",
      "crossSpread.cards.lerendezvous.contre.variation1": "No dejes que el miedo o la duda te hagan perder una oportunidad importante.",
      "crossSpread.cards.lerendezvous.contre.variation2": "Un encuentro perdido podría traer arrepentimiento. Mantente presente y atento.",
      "crossSpread.cards.lerendezvous.contre.variation3": "La falta de confianza puede impedirte aprovechar esta oportunidad.",
      "crossSpread.cards.lerendezvous.synthese.variation1": "El amor está llamando a tu puerta. Abre tu corazón y recibe lo que llega.",
      "crossSpread.cards.lerendezvous.synthese.variation2": "Es el momento adecuado para actuar. Te espera un encuentro importante si te abres.",
      "crossSpread.cards.lerendezvous.synthese.variation3": "Este período es perfecto para crear nuevas conexiones. Confía en el tiempo del universo.",
    // le message
    "crossSpread.cards.lemessage.pour.variation1": "Recibirás una noticia o una respuesta que te acercará a la persona que deseas.",
    "crossSpread.cards.lemessage.pour.variation2": "La comunicación se abre. Un intercambio sincero puede mejorar la situación.",
    "crossSpread.cards.lemessage.pour.variation3": "Llega un mensaje positivo que aclarará lo que sentías.",
    "crossSpread.cards.lemessage.contre.variation1": "Podrías malinterpretar un silencio o una palabra. Mantén la calma antes de reaccionar.",
    "crossSpread.cards.lemessage.contre.variation2": "Una comunicación bloqueada puede crear tensiones. No esperes sin actuar.",
    "crossSpread.cards.lemessage.contre.variation3": "Un mensaje tardío o confuso puede desestabilizarte. Mantén los pies en la tierra.",
    "crossSpread.cards.lemessage.synthese.variation1": "Una conversación importante aclarará la situación. Por fin verás hacia dónde vas.",
    "crossSpread.cards.lemessage.synthese.variation2": "El diálogo es la clave. Obtendrás las respuestas que necesitas para avanzar.",
    "crossSpread.cards.lemessage.synthese.variation3": "Un intercambio pondrá fin a las dudas y abrirá una nueva dinámica entre ustedes.",
    // le désir
    "crossSpread.cards.ledesir.pour.variation1": "El deseo es mutuo. Atraes intensamente a esta persona.",
      "crossSpread.cards.ledesir.pour.variation2": "Una fuerte pasión despierta entre ustedes. La química es evidente.",
      "crossSpread.cards.ledesir.pour.variation3": "Tu encanto está actuando. Alguien piensa en ti con intensidad.",
      "crossSpread.cards.ledesir.contre.variation1": "Ten cuidado de no confundir deseo con verdadero sentimiento.",
      "crossSpread.cards.ledesir.contre.variation2": "Una atracción demasiado fuerte puede nublar tu juicio.",
      "crossSpread.cards.ledesir.contre.variation3": "El deseo podría llevarte a una situación complicada. Mantén la mente clara.",
      "crossSpread.cards.ledesir.synthese.variation1": "El deseo juega un papel clave en tu situación. Todo avanza gracias a esta atracción.",
      "crossSpread.cards.ledesir.synthese.variation2": "La química es poderosa, pero necesitas equilibrar pasión y razón.",
      "crossSpread.cards.ledesir.synthese.variation3": "Esta energía intensa puede abrir un nuevo camino si te mantienes receptivo y atento a las señales.",
    //le cœur ouvert
    "crossSpread.cards.lecoeurouvert.pour.variation1": "Estás listo para amar con sinceridad. Esta apertura atrae energía positiva.",
    "crossSpread.cards.lecoeurouvert.pour.variation2": "Tu vulnerabilidad crea un vínculo auténtico con la otra persona.",
    "crossSpread.cards.lecoeurouvert.pour.variation3": "Al abrirte, permites que una hermosa energía entre en tu vida.",
    "crossSpread.cards.lecoeurouvert.contre.variation1": "Podrías mostrarte demasiado disponible. Protege un poco tu energía.",
    "crossSpread.cards.lecoeurouvert.contre.variation2": "Tu sensibilidad podría hacerte frágil ante el comportamiento del otro.",
    "crossSpread.cards.lecoeurouvert.contre.variation3": "Corres el riesgo de idealizar a una persona o situación.",
    "crossSpread.cards.lecoeurouvert.synthese.variation1": "Tu apertura de corazón es tu fuerza. Atrae a la persona correcta.",
    "crossSpread.cards.lecoeurouvert.synthese.variation2": "Exprésate sinceramente. La sinceridad desbloquea la situación.",
    "crossSpread.cards.lecoeurouvert.synthese.variation3": "Al mantenerte auténtico, recibirás una respuesta sincera a cambio.",
    //le cœur fermé
    "crossSpread.cards.lecoeurferme.pour.variation1": "Tomarte un respiro te protege por ahora. Escuchas tu intuición.",
    "crossSpread.cards.lecoeurferme.pour.variation2": "Establecer límites te permite no perderte en la relación.",
    "crossSpread.cards.lecoeurferme.pour.variation3": "Tu corazón se cierra para protegerte de una situación inestable.",
    "crossSpread.cards.lecoeurferme.contre.variation1": "Te bloqueas demasiado. Esto impide que el otro te entienda.",
    "crossSpread.cards.lecoeurferme.contre.variation2": "El miedo a ser herido te impide amar plenamente.",
    "crossSpread.cards.lecoeurferme.contre.variation3": "Tu falta de apertura crea una distancia innecesaria.",
    "crossSpread.cards.lecoeurferme.synthese.variation1": "Debes reabrir tu corazón lentamente si quieres avanzar.",
    "crossSpread.cards.lecoeurferme.synthese.variation2": "Es necesario un equilibrio: protégte, pero no te cierres por completo.",
    "crossSpread.cards.lecoeurferme.synthese.variation3": "El desbloqueo viene de ti: permítete sentir nuevamente.",
    //le choix
    "crossSpread.cards.lechoix.pour.variation1": "Finalmente estás listo para tomar una decisión clara.",
    "crossSpread.cards.lechoix.pour.variation2": "Dos caminos se presentan, pero uno brilla más si escuchas tu corazón.",
    "crossSpread.cards.lechoix.pour.variation3": "Recuperas el control de tu vida amorosa tomando una decisión que se adapta a ti.",
    "crossSpread.cards.lechoix.contre.variation1": "La duda te bloquea y agota tu mente, impidiéndote ver la mejor dirección.",
    "crossSpread.cards.lechoix.contre.variation2": "Podrías dejarte influenciar por los miedos en lugar de tus verdaderos deseos.",
    "crossSpread.cards.lechoix.contre.variation3": "Dudar demasiado podría hacerte perder una oportunidad.",
    "crossSpread.cards.lechoix.synthese.variation1": "La decisión correcta es la que te hace sentir más ligero.",
    "crossSpread.cards.lechoix.synthese.variation2": "Todo empieza a avanzar realmente cuando eliges claramente tu camino sin dudar.",
    "crossSpread.cards.lechoix.synthese.variation3": "Tu corazón ya conoce la respuesta; tómate el tiempo de escucharlo de verdad y deja que guíe tus acciones.",
    //le retour
    "crossSpread.cards.leretour.pour.variation1": "Alguien de tu pasado vuelve con intenciones claras, listo para aclarar lo que no estaba resuelto.",
    "crossSpread.cards.leretour.pour.variation2": "Un recuerdo o una persona reaparece para ayudarte a comprender algo.",
    "crossSpread.cards.leretour.pour.variation3": "Alguien del pasado vuelve y podría ofrecerte una nueva oportunidad.",
    "crossSpread.cards.leretour.contre.variation1": "Mirar atrás podría impedirte avanzar.",
    "crossSpread.cards.leretour.contre.variation2": "Una persona del pasado puede reavivar heridas no sanadas.",
    "crossSpread.cards.leretour.contre.variation3": "Corres el riesgo de idealizar este regreso y perder tu estabilidad actual.",
    "crossSpread.cards.leretour.synthese.variation1": "El pasado regresa por una razón: comprender, sanar o cerrar un ciclo.",
    "crossSpread.cards.leretour.synthese.variation2": "Este regreso te da la oportunidad de aclarar tus deseos y elegir lo que realmente es importante para ti.",
    "crossSpread.cards.leretour.synthese.variation3": "Se reabre una página del pasado para permitirte entender, aceptar y decidir si girar o reescribir tu historia.",
    //la distance
    "crossSpread.cards.ladistance.pour.variation1": "La distancia te ayuda a ver con claridad tus emociones.",
    "crossSpread.cards.ladistance.pour.variation2": "Un tiempo de separación permite a cada uno respirar y reflexionar.",
    "crossSpread.cards.ladistance.pour.variation3": "Tomarte un respiro te protege y te ayuda a mantener el equilibrio.",
    "crossSpread.cards.ladistance.contre.variation1": "Se instala un frío que puede debilitar la relación.",
    "crossSpread.cards.ladistance.contre.variation2": "La distancia genera dudas y alimenta miedos.",
    "crossSpread.cards.ladistance.contre.variation3": "La falta de comunicación puede agravar la separación.",
    "crossSpread.cards.ladistance.synthese.variation1": "Esta distancia no es definitiva: sirve para reequilibrar la situación.",
    "crossSpread.cards.ladistance.synthese.variation2": "Una reconexión es posible cuando ambos recuperen la calma.",
    "crossSpread.cards.ladistance.synthese.variation3": "Debes comprender lo que esta distancia quiere enseñarte.",
    //l'union
    "crossSpread.cards.lunion.pour.variation1": "Se puede construir una relación sólida. Estás listo para comprometerte.",
    "crossSpread.cards.lunion.pour.variation2": "La unión con esta persona aporta estabilidad y armonía.",
    "crossSpread.cards.lunion.pour.variation3": "Avanzan juntos hacia algo serio.",
    "crossSpread.cards.lunion.contre.variation1": "Podrías comprometerte demasiado rápido sin percibir algunas señales.",
    "crossSpread.cards.lunion.contre.variation2": "La otra persona quizás aún no esté lista para la misma profundidad.",
    "crossSpread.cards.lunion.contre.variation3": "Una situación externa puede complicar la unión por ahora.",
    "crossSpread.cards.lunion.synthese.variation1": "Esta relación puede evolucionar hacia algo estable si avanzan juntos.",
    "crossSpread.cards.lunion.synthese.variation2": "La unión es posible, pero requiere paciencia y comprensión.",
    "crossSpread.cards.lunion.synthese.variation3": "Tu futuro amoroso se construye sobre cooperación y escucha.",
    //le masque
    "crossSpread.cards.lemasque.pour.variation1": "Proteges tus emociones manteniendo un aire de misterio.",
    "crossSpread.cards.lemasque.pour.variation2": "Mantenerte discreto te permite observar mejor la situación.",
    "crossSpread.cards.lemasque.pour.variation3": "La máscara te ayuda a no revelar demasiado rápido quién eres.",
    "crossSpread.cards.lemasque.contre.variation1": "Alguien no muestra sus verdaderas intenciones.",
    "crossSpread.cards.lemasque.contre.variation2": "La falta de transparencia puede generar malentendidos.",
    "crossSpread.cards.lemasque.contre.variation3": "Ocultarse impide que la relación avance de manera sincera.",
    "crossSpread.cards.lemasque.synthese.variation1": "Para avanzar, las máscaras deben caer de ambos lados.",
    "crossSpread.cards.lemasque.synthese.variation2": "La verdad aparecerá y aclarará la situación.",
    "crossSpread.cards.lemasque.synthese.variation3": "Una apertura sincera puede cambiar por completo la dinámica.",
    //la passion
    "crossSpread.cards.lapassion.pour.variation1": "Una energía intensa te impulsa y acerca los corazones.",
    "crossSpread.cards.lapassion.pour.variation2": "La pasión hace que la relación sea vibrante y viva.",
    "crossSpread.cards.lapassion.pour.variation3": "Un impulso emocional fuerte te acerca al otro.",
    "crossSpread.cards.lapassion.contre.variation1": "La pasión puede volverse inestable si no se controla.",
    "crossSpread.cards.lapassion.contre.variation2": "Actuar demasiado rápido puede causar errores.",
    "crossSpread.cards.lapassion.contre.variation3": "El fuego arde con fuerza pero también puede apagarse rápidamente.",
    "crossSpread.cards.lapassion.synthese.variation1": "La pasión es una fuerza, pero debe equilibrarse con la razón.",
    "crossSpread.cards.lapassion.synthese.variation2": "Esta intensidad trae una transformación importante a tu vida amorosa.",
    "crossSpread.cards.lapassion.synthese.variation3": "Mantén la pasión, pero avanza con conciencia.",
    //la chance
    "crossSpread.cards.lachance.pour.variation1": "Se presenta una hermosa oportunidad sentimental. Aprovechala.",
    "crossSpread.cards.lachance.pour.variation2": "El destino está de tu lado. Algo positivo viene hacia ti.",
    "crossSpread.cards.lachance.pour.variation3": "Atraes la energía correcta. La suerte está de tu lado.",
    "crossSpread.cards.lachance.contre.variation1": "La suerte pasa rápido: no permanezcas pasivo.",
    "crossSpread.cards.lachance.contre.variation2": "Podrías dudar y dejar pasar una oportunidad.",
    "crossSpread.cards.lachance.contre.variation3": "Esperar demasiado puede hacer que pierdas la oportunidad.",
    "crossSpread.cards.lachance.synthese.variation1": "Aprovecha la corriente positiva. Te abre un nuevo camino.",
    "crossSpread.cards.lachance.synthese.variation2": "Una sincronicidad importante te ayudará a avanzar.",
    "crossSpread.cards.lachance.synthese.variation3": "Es un momento clave: el universo te apoya en tu camino amoroso.",
    //le destin
    "crossSpread.cards.ledestin.pour.variation1": "Los acontecimientos se alinean naturalmente para ti. Confía en el proceso.",
    "crossSpread.cards.ledestin.pour.variation2": "Lo que sucede estaba escrito. Estás guiado hacia la persona correcta.",
    "crossSpread.cards.ledestin.pour.variation3": "Un encuentro o situación es fruto de una sincronía importante.",
    "crossSpread.cards.ledestin.contre.variation1": "No dejes que el destino decida por ti. También debes actuar.",
    "crossSpread.cards.ledestin.contre.variation2": "Esperar demasiado podría bloquear tu evolución.",
    "crossSpread.cards.ledestin.contre.variation3": "Riesgas dejar todo al azar en lugar de seguir tu corazón.",
    "crossSpread.cards.ledestin.synthese.variation1": "Lo que vives tiene un sentido profundo. Deja que las cosas ocurran naturalmente.",
    "crossSpread.cards.ledestin.synthese.variation2": "Un paso importante te acerca a tu camino amoroso.",
    "crossSpread.cards.ledestin.synthese.variation3": "El destino abre un nuevo camino, pero depende de ti recorrerlo.",
    //le silence
    "crossSpread.cards.lesilence.pour.variation1": "El silencio te ayuda a reenfocarte y escuchar tus emociones reales.",
    "crossSpread.cards.lesilence.pour.variation2": "Esta pausa te permite entender lo que realmente quieres.",
    "crossSpread.cards.lesilence.pour.variation3": "Tomarte tiempo para ti te devuelve a lo esencial.",
    "crossSpread.cards.lesilence.contre.variation1": "La falta de noticias puede crear confusión y estrés.",
    "crossSpread.cards.lesilence.contre.variation2": "El retiro de la otra persona puede hacerte imaginar lo peor.",
    "crossSpread.cards.lesilence.contre.variation3": "El silencio bloquea la comunicación y retrasa el avance.",
    "crossSpread.cards.lesilence.synthese.variation1": "Es posible reanudar la comunicación después de este silencio.",
    "crossSpread.cards.lesilence.synthese.variation2": "El silencio abre la puerta a una reflexión más profunda.",
    "crossSpread.cards.lesilence.synthese.variation3": "Este tiempo de calma prepara una aclaración importante.",
    //la vérité
    "crossSpread.cards.laverite.pour.variation1": "Una verdad finalmente ilumina lo que sentías.",
    "crossSpread.cards.laverite.pour.variation2": "La transparencia se convierte en un recurso. Todo se aclara.",
    "crossSpread.cards.laverite.pour.variation3": "Una conversación honesta abre una nueva dinámica.",
    "crossSpread.cards.laverite.contre.variation1": "Una verdad puede sorprenderte o desconcertarte.",
    "crossSpread.cards.laverite.contre.variation2": "La otra persona puede dudar en decir lo que realmente siente.",
    "crossSpread.cards.laverite.contre.variation3": "El miedo a la verdad bloquea una situación importante.",
    "crossSpread.cards.laverite.synthese.variation1": "La verdad es liberadora: pone todo en su lugar.",
    "crossSpread.cards.laverite.synthese.variation2": "Una revelación te ayuda a tomar una decisión clara.",
    "crossSpread.cards.laverite.synthese.variation3": "La sinceridad transforma la relación y abre un nuevo capítulo.",
    //le cadeau
    "crossSpread.cards.lecadeau.pour.variation1": "Un gesto atento muestra el interés de la otra persona.",
    "crossSpread.cards.lecadeau.pour.variation2": "Recibirás una sorpresa que te calienta el corazón.",
    "crossSpread.cards.lecadeau.pour.variation3": "Un acto sincero abre la puerta a la cercanía.",
    "crossSpread.cards.lecadeau.contre.variation1": "No te dejes influenciar solo por un gesto material.",
    "crossSpread.cards.lecadeau.contre.variation2": "Una atención puede ocultar la necesidad de ser perdonado.",
    "crossSpread.cards.lecadeau.contre.variation3": "Podrías dar más de lo que recibes a cambio.",
    "crossSpread.cards.lecadeau.synthese.variation1": "Un gesto simbólico cambia la dinámica entre ustedes.",
    "crossSpread.cards.lecadeau.synthese.variation2": "El universo te ofrece una oportunidad de ternura y apertura.",
    "crossSpread.cards.lecadeau.synthese.variation3": "Un intercambio sincero fortalece el vínculo y crea un nuevo impulso.",
    //la blessure
    "crossSpread.cards.lablessure.pour.variation1": "Tomas conciencia de tu herida y comienzas a sanar.",
    "crossSpread.cards.lablessure.pour.variation2": "Reconocer tu dolor te ayuda a avanzar con más solidez.",
    "crossSpread.cards.lablessure.pour.variation3": "Esta conciencia te abre a una verdadera renovación emocional.",
    "crossSpread.cards.lablessure.contre.variation1": "Una herida no sanada aún influye en tus decisiones.",
    "crossSpread.cards.lablessure.contre.variation2": "El miedo a ser herido te impide avanzar.",
    "crossSpread.cards.lablessure.contre.variation3": "Permaneces apegado a un dolor pasado que te agota.",
    "crossSpread.cards.lablessure.synthese.variation1": "La sanación está en curso. Finalmente te sientes más ligero.",
    "crossSpread.cards.lablessure.synthese.variation2": "Comprender tu herida te ayuda a no repetir los mismos patrones.",
    "crossSpread.cards.lablessure.synthese.variation3": "Esta prueba abre el camino a un cambio profundo y positivo.",
    //le nouveau départ
    "crossSpread.cards.lenouveaudepart.pour.variation1": "Estás entrando en un ciclo nuevo y más ligero.",
    "crossSpread.cards.lenouveaudepart.pour.variation2": "Un cambio positivo abre un camino más alineado con tu corazón.",
    "crossSpread.cards.lenouveaudepart.pour.variation3": "Dejas atrás el pasado y avanzas hacia lo nuevo.",
    "crossSpread.cards.lenouveaudepart.contre.variation1": "Puedes tener miedo de dejar lo que conoces.",
    "crossSpread.cards.lenouveaudepart.contre.variation2": "El cambio te parece difícil de aceptar.",
    "crossSpread.cards.lenouveaudepart.contre.variation3": "Riesgas quedarte atascado en el ciclo antiguo.",
    "crossSpread.cards.lenouveaudepart.synthese.variation1": "Se abre una transformación importante para ti.",
    "crossSpread.cards.lenouveaudepart.synthese.variation2": "Al soltar lo viejo, creas espacio para una nueva historia.",
    "crossSpread.cards.lenouveaudepart.synthese.variation3": "Este nuevo comienzo te lleva exactamente donde necesitas estar.",
    //la fusion
    "crossSpread.cards.lafusion.pour.variation1": "Se crea una conexión profunda entre ustedes. Las emociones se comparten.",
    "crossSpread.cards.lafusion.pour.variation2": "Te sientes alineado con la otra persona, como si todo fluyera naturalmente.",
    "crossSpread.cards.lafusion.pour.variation3": "Se fortalece una unión emocional o energética entre ustedes.",
    "crossSpread.cards.lafusion.contre.variation1": "La fusión puede ser demasiado intensa y hacerte perder el equilibrio.",
    "crossSpread.cards.lafusion.contre.variation2": "Ten cuidado de no disolverte en la otra persona.",
    "crossSpread.cards.lafusion.contre.variation3": "Puede generarse dependencia emocional si no permaneces firme.",
    "crossSpread.cards.lafusion.synthese.variation1": "La conexión es real y poderosa, pero requiere madurez y equilibrio.",
    "crossSpread.cards.lafusion.synthese.variation2": "Están vinculados a un nivel profundo, lo que abre una evolución importante.",
    "crossSpread.cards.lafusion.synthese.variation3": "Esta fusión puede convertirse en una fuerza si cada uno mantiene su identidad.",
    //la tentación
    "crossSpread.cards.latentation.pour.variation1": "Una nueva atracción renueva tu deseo y energía.",
    "crossSpread.cards.latentation.pour.variation2": "Alguien despierta tu curiosidad y deseo.",
    "crossSpread.cards.latentation.pour.variation3": "Una situación emocionante rompe tu rutina.",
    "crossSpread.cards.latentation.contre.variation1": "Una tentación podría desviarte de lo que realmente te conviene.",
    "crossSpread.cards.latentation.contre.variation2": "Riesgas involucrarte en algo inestable.",
    "crossSpread.cards.latentation.contre.variation3": "Una influencia externa perturba tu juicio.",
    "crossSpread.cards.latentation.synthese.variation1": "Esta tentación te enseña algo sobre tus verdaderos deseos.",
    "crossSpread.cards.latentation.synthese.variation2": "Antes de actuar, asegúrate de que esté alineado con tu corazón.",
    "crossSpread.cards.latentation.synthese.variation3": "La tentación puede ser una prueba para aclarar lo que realmente quieres.",
    //la protection
    "crossSpread.cards.laprotection.pour.variation1": "Tu intuición te protege y te guía hacia las decisiones correctas.",
    "crossSpread.cards.laprotection.pour.variation2": "Estás rodeado de una energía benevolente.",
    "crossSpread.cards.laprotection.pour.variation3": "La prudencia te ayuda a evitar decepciones.",
    "crossSpread.cards.laprotection.contre.variation1": "Ser demasiado desconfiado puede bloquear una gran oportunidad.",
    "crossSpread.cards.laprotection.contre.variation2": "Tu miedo te hace ver peligros que no existen.",
    "crossSpread.cards.laprotection.contre.variation3": "Una protección excesiva puede convertirse en una barrera para el amor.",
    "crossSpread.cards.laprotection.synthese.variation1": "Tu intuición es correcta: escúchala de verdad.",
    "crossSpread.cards.laprotection.synthese.variation2": "La protección divina te ayuda a avanzar con seguridad.",
    "crossSpread.cards.laprotection.synthese.variation3": "Un equilibrio entre prudencia y apertura te guía en la dirección correcta.",
    //la liberación
    "crossSpread.cards.laliberation.pour.variation1": "Finalmente te liberas de algo que te pesaba.",
    "crossSpread.cards.laliberation.pour.variation2": "Un ciclo termina y vuelves a respirar.",
    "crossSpread.cards.laliberation.pour.variation3": "Sueltes y recuperas tu poder interior.",
    "crossSpread.cards.laliberation.contre.variation1": "Puedes resistirte al cambio por miedo a lo desconocido.",
    "crossSpread.cards.laliberation.contre.variation2": "Todavía te aferras a algo que debe irse.",
    "crossSpread.cards.laliberation.contre.variation3": "No soltar impide avanzar hacia lo mejor.",
    "crossSpread.cards.laliberation.synthese.variation1": "Una gran liberación emocional abre un nuevo camino.",
    "crossSpread.cards.laliberation.synthese.variation2": "Al dejar ir lo antiguo, invitas a la renovación.",
    "crossSpread.cards.laliberation.synthese.variation3": "Este desapego te acerca a tu verdadero camino amoroso.",

    //Lunar oracle
    "oracle.lunar.title": "Oráculo Lunar",
    "oracle.lunar.description": "Las fases de la Luna revelan tu camino interior",
    "lunar.phaseSelection.title": "Oráculo Lunar",
    "lunar.phaseSelection.subtitle": "Elige la fase lunar que resuene con tu estado de ánimo actual",
    "lunar.phases.newMoon.name": "Luna Nueva",
    "lunar.phases.newMoon.description": "Nuevos comienzos e intenciones",
    "lunar.phases.firstQuarter.name": "Cuarto Creciente",
    "lunar.phases.firstQuarter.description": "Acción y decisiones",
    "lunar.phases.fullMoon.name": "Luna Llena",
    "lunar.phases.fullMoon.description": "Culminación y revelación",
    "lunar.phases.lastQuarter.name": "Cuarto Menguante",
    "lunar.phases.lastQuarter.description": "Liberación e introspección",
    "lunar.cardGame.instruction": "Elige la carta que te atraiga",
    "lunar.interpretation.mindset": "Estado mental",
    "lunar.interpretation.guidance": "Guía",
    "loading.lunar.message1": "Conectando con las energías lunares...",
    "loading.lunar.message2": "Interpretando los ciclos cósmicos...",
    "loading.lunar.message3": "Revelando tu guía...",
    "loading.lunar.message4": "Preparando tu lectura...",
    "loading.lunar.subtitle": "Los astros alinean tu destino...",
    "lunar.cardGame.hint": "Escucha tu intuición...",
    "lunar.cardGame.singleCard": "Una sola carta revelará el mensaje de la luna",
    "lunar.cardGame.oneChoice": "1 carta para elegir",
    "lunar.cardGame.oneCard": "1 carta",
    "lunar.loading.connecting": "Conectando con las energías lunares...",
    "lunar.phaseSelection.cta": "Qué energía resuena hoy",
    "lunar.phases.newMoon.keyword": "Inicio",
    "lunar.phases.firstQuarter.keyword": "Impulso",
    "lunar.phases.fullMoon.keyword": "Claridad",
    "lunar.phases.lastQuarter.keyword": "Soltar",
    "lunar.cardGame.oracle.newMoon.1": "Intenciones nacientes...",
    "lunar.cardGame.oracle.newMoon.2": "El velo se levanta...",
    "lunar.cardGame.oracle.newMoon.3": "La oscuridad revela...",
    "lunar.cardGame.oracle.firstQuarter.1": "El impulso se forma...",
    "lunar.cardGame.oracle.firstQuarter.2": "La acción llama...",
    "lunar.cardGame.oracle.firstQuarter.3": "Elige tu camino...",
    "lunar.cardGame.oracle.fullMoon.1": "La luz ilumina...",
    "lunar.cardGame.oracle.fullMoon.2": "La verdad se revela...",
    "lunar.cardGame.oracle.fullMoon.3": "El misterio se abre...",
    "lunar.cardGame.oracle.lastQuarter.1": "El dejar ir guía...",
    "lunar.cardGame.oracle.lastQuarter.2": "La sabiduría habla...",
    "lunar.cardGame.oracle.lastQuarter.3": "El alma se libera...",
      
    // Cartas del Oráculo Lunar
    // Luna Nueva
    "cards.lunar.intention.name": "Intención",
    "cards.lunar.intention.mindset.var1": "{name}, sientes una necesidad profunda de comenzar algo nuevo en tu vida",
    "cards.lunar.intention.mindset.var2": "En este momento, {name}, tu corazón está abierto y listo para recibir nuevas ideas o deseos",
    "cards.lunar.intention.mindset.var3": "Estás entrando en un período donde puedes empezar de cero y elegir una nueva dirección",
    "cards.lunar.intention.guidance.var1": "Tómate el tiempo para pensar en lo que realmente quieres para ti.",
    "cards.lunar.intention.guidance.var2": "Formula una intención clara, simple y honesta.",
    "cards.lunar.intention.guidance.var3": "Imagina suavemente cómo tu vida puede evolucionar hacia lo que deseas.",

    "cards.lunar.intuition.name": "Intuición",
    "cards.lunar.intuition.mindset.var1": "{name}, sientes cosas aunque no siempre puedas explicarlas",
    "cards.lunar.intuition.mindset.var2": "Una pequeña voz interior intenta guiarte en este momento",
    "cards.lunar.intuition.mindset.var3": "En el fondo ya sabes lo que es bueno para ti",
    "cards.lunar.intuition.guidance.var1": "Date un momento de calma para escucharte.",
    "cards.lunar.intuition.guidance.var2": "Confía en tus sentimientos, aunque sean sutiles.",
    "cards.lunar.intuition.guidance.var3": "Tu intuición está ahí para protegerte y ayudarte.",

    "cards.lunar.renouveau.name": "Renovación",
    "cards.lunar.renouveau.mindset.var1": "Un nuevo ciclo comienza para ti, {name}, trayendo energía renovada",
    "cards.lunar.renouveau.mindset.var2": "Algunas cosas del pasado poco a poco pierden importancia",
    "cards.lunar.renouveau.mindset.var3": "Estás listo(a) para avanzar de manera diferente y cambiar lo que ya no te sirve",
    "cards.lunar.renouveau.guidance.var1": "Deja ir lo que ya no te aporta nada positivo.",
    "cards.lunar.renouveau.guidance.var2": "Permítete cambiar sin sentir culpa.",
    "cards.lunar.renouveau.guidance.var3": "Cada nuevo comienzo empieza con un pequeño paso.",

    "cards.lunar.eveil.name": "Despertar",
    "cards.lunar.eveil.mindset.var1": "{name}, estás empezando a ver las cosas con más conciencia",
    "cards.lunar.eveil.mindset.var2": "Un nuevo sentimiento o idea surge tranquilamente en ti",
    "cards.lunar.eveil.mindset.var3": "Te das cuenta de lo que es importante para ti",
    "cards.lunar.eveil.guidance.var1": "Recibe estas realizaciones con calma.",
    "cards.lunar.eveil.guidance.var2": "No intentes comprender todo de inmediato.",
    "cards.lunar.eveil.guidance.var3": "El despertar sucede paso a paso, de manera natural.",

    "cards.lunar.potentiel.name": "Potencial",
    "cards.lunar.potentiel.mindset.var1": "{name}, existen muchas posibilidades para ti, aunque aún no las veas",
    "cards.lunar.potentiel.mindset.var2": "Tu futuro comienza a construirse a partir de lo que haces ahora",
    "cards.lunar.potentiel.mindset.var3": "Llevas dentro recursos aún no aprovechados",
    "cards.lunar.potentiel.guidance.var1": "Confía en tus capacidades, incluso si dudas.",
    "cards.lunar.potentiel.guidance.var2": "Deja que las cosas se desarrollen con tiempo.",
    "cards.lunar.potentiel.guidance.var3": "Cada pequeña acción alimenta tu futuro.",

    "cards.lunar.silence.name": "Silencio",
    "cards.lunar.silence.mindset.var1": "{name}, tu mente necesita calma y descanso",
    "cards.lunar.silence.mindset.var2": "El silencio te ayuda a comprender mejor lo que sientes",
    "cards.lunar.silence.mindset.var3": "No necesitas respuestas inmediatas para avanzar",
    "cards.lunar.silence.guidance.var1": "Date momentos sin ruido ni distracciones.",
    "cards.lunar.silence.guidance.var2": "La calma permite que las ideas se asienten.",
    "cards.lunar.silence.guidance.var3": "Las respuestas suelen aparecer cuando dejamos de buscarlas.",
    // Primer Cuarto
    "cards.lunar.motivation.name": "Motivación",
    "cards.lunar.motivation.mindset.var1": "{name}, sientes una energía nueva que te impulsa a avanzar y actuar cada día",
    "cards.lunar.motivation.mindset.var2": "Tu impulso interior despierta y te anima a ir hacia lo que te importa",
    "cards.lunar.motivation.mindset.var3": "Sientes fuerza para hacer progresos, aunque sea poco a poco",
    "cards.lunar.motivation.guidance.var1": "Canaliza esta energía hacia un objetivo claro y simple.",
    "cards.lunar.motivation.guidance.var2": "Avanza paso a paso, sin juzgarte ni apresurarte.",
    "cards.lunar.motivation.guidance.var3": "Cada pequeño paso cuenta y te acerca a tu meta.",

    "cards.lunar.courage.name": "Coraje",
    "cards.lunar.courage.mindset.var1": "{name}, tienes la fuerza para afrontar lo que venga, aunque sea difícil",
    "cards.lunar.courage.mindset.var2": "Tu coraje crece con cada pequeño desafío que superas",
    "cards.lunar.courage.mindset.var3": "Eres más fuerte y capaz de lo que realmente crees",
    "cards.lunar.courage.guidance.var1": "Actúa a pesar de las dudas y los miedos que surjan.",
    "cards.lunar.courage.guidance.var2": "Ve el miedo como una señal para avanzar, no como un obstáculo.",
    "cards.lunar.courage.guidance.var3": "Confía en tu fuerza interior; siempre te acompaña.",

    "cards.lunar.epanouissement.name": "Plenitud",
    "cards.lunar.epanouissement.mindset.var1": "Avanzas hacia más armonía en tu vida y decisiones, {name}",
    "cards.lunar.epanouissement.mindset.var2": "Te acercas a lo que realmente te hace feliz y te emociona",
    "cards.lunar.epanouissement.mindset.var3": "Tu potencial se expresa naturalmente cuando escuchas tu corazón",
    "cards.lunar.epanouissement.guidance.var1": "Cuida de nutrir lo que te hace bien cada día.",
    "cards.lunar.epanouissement.guidance.var2": "Permítete crecer a tu ritmo, sin compararte.",
    "cards.lunar.epanouissement.guidance.var3": "La plenitud llega cuando te alineas con lo que realmente sientes.",

    "cards.lunar.determination.name": "Determinación",
    "cards.lunar.determination.mindset.var1": "Sabes lo que quieres y avanzas hacia tus objetivos, {name}",
    "cards.lunar.determination.mindset.var2": "Tu voluntad se mantiene fuerte ante obstáculos y dificultades",
    "cards.lunar.determination.mindset.var3": "Estás listo(a) para comprometerte plenamente con lo que realmente importa",
    "cards.lunar.determination.guidance.var1": "Mantente fiel a tu dirección y decisiones.",
    "cards.lunar.determination.guidance.var2": "No dejes que dudas u obstáculos te desvíen de tu camino.",
    "cards.lunar.determination.guidance.var3": "Tu constancia y perseverancia marcarán la diferencia a largo plazo.",

    "cards.lunar.initiative.name": "Iniciativa",
    "cards.lunar.initiative.mindset.var1": "Un impulso te invita a actuar, {name}, escucha este movimiento",
    "cards.lunar.initiative.mindset.var2": "Ha llegado el momento de dar el primer paso hacia lo que deseas",
    "cards.lunar.initiative.mindset.var3": "Sientes el impulso del comienzo y la fuerza para atreverte",
    "cards.lunar.initiative.guidance.var1": "Atrévete a actuar, aunque el camino parezca desconocido.",
    "cards.lunar.initiative.guidance.var2": "No postergues lo que tu corazón te invita a hacer ahora.",
    "cards.lunar.initiative.guidance.var3": "Tomar iniciativa siempre abre nuevas posibilidades.",

    "cards.lunar.strategie.name": "Estrategia",
    "cards.lunar.strategie.mindset.var1": "Reflexionas con claridad y lucidez sobre los próximos pasos de tu camino, {name}",
    "cards.lunar.strategie.mindset.var2": "Cada elección merece ser pensada con cuidado",
    "cards.lunar.strategie.mindset.var3": "Avanzas con discernimiento, equilibrando corazón y razón",
    "cards.lunar.strategie.guidance.var1": "Planifica tus acciones de manera flexible y abierta.",
    "cards.lunar.strategie.guidance.var2": "Combina reflexión e intuición para tomar las mejores decisiones.",
    "cards.lunar.strategie.guidance.var3": "La claridad y la calma surgen de una visión reflexiva y equilibrada.",
    // Luna Llena
    "cards.lunar.clarte.name": "Claridad",
    "cards.lunar.clarte.mindset.var1": "Las cosas se están volviendo más claras para ti, {name}, y comienzas a entender lo que estaba confuso",
    "cards.lunar.clarte.mindset.var2": "Un velo se levanta suavemente sobre tu situación y todo parece más claro",
    "cards.lunar.clarte.mindset.var3": "Finalmente ves la verdad y lo que realmente importa en este ciclo",
    "cards.lunar.clarte.guidance.var1": "Usa esta claridad para tomar decisiones justas y simples.",
    "cards.lunar.clarte.guidance.var2": "Confía en lo que observas y sientes ahora.",
    "cards.lunar.clarte.guidance.var3": "La verdad te brinda una sensación de calma y paz interior.",

    "cards.lunar.serenite.name": "Serenidad",
    "cards.lunar.serenite.mindset.var1": "Una profunda paz interior te envuelve y te ayuda a mantenerte centrado(a), {name}",
    "cards.lunar.serenite.mindset.var2": "Te sientes en armonía contigo mismo(a) y con el mundo a tu alrededor",
    "cards.lunar.serenite.mindset.var3": "Todo parece más simple y en su lugar, incluso las situaciones complicadas",
    "cards.lunar.serenite.guidance.var1": "Disfruta de este momento de calma y déjate llevar.",
    "cards.lunar.serenite.guidance.var2": "Respira profundamente y libera todas las tensiones.",
    "cards.lunar.serenite.guidance.var3": "La serenidad es tu ancla para avanzar con claridad.",

    "cards.lunar.bilan.name": "Balance",
    "cards.lunar.bilan.mindset.var1": "{name}, es momento de mirar atrás y reconocer el camino que has recorrido",
    "cards.lunar.bilan.mindset.var2": "Te das cuenta de todo tu crecimiento y de lo que has aprendido",
    "cards.lunar.bilan.mindset.var3": "Cada experiencia de este ciclo te ha dado lecciones valiosas",
    "cards.lunar.bilan.guidance.var1": "Celebra tus avances, incluso los más pequeños.",
    "cards.lunar.bilan.guidance.var2": "Aprende de lo vivido para avanzar mejor.",
    "cards.lunar.bilan.guidance.var3": "Este balance te ayuda a seguir con confianza y sabiduría.",

    "cards.lunar.accomplissement.name": "Logro",
    "cards.lunar.accomplissement.mindset.var1": "Finalmente cosechas los frutos de tus esfuerzos, {name}, y lo reconoces",
    "cards.lunar.accomplissement.mindset.var2": "Se manifiesta un logro y comprendes todo lo que has construido",
    "cards.lunar.accomplissement.mindset.var3": "Te sientes orgulloso(a) de ti mismo(a) y de todo lo que has conseguido",
    "cards.lunar.accomplissement.guidance.var1": "Reconoce cada pequeño logro y disfrútalo plenamente.",
    "cards.lunar.accomplissement.guidance.var2": "Recibe este éxito con simplicidad y humildad.",
    "cards.lunar.accomplissement.guidance.var3": "Tómate el tiempo para celebrar este momento antes de continuar.",

    "cards.lunar.verite.name": "Verdad",
    "cards.lunar.verite.mindset.var1": "Una verdad importante se revela a ti, {name}, iluminando tu situación",
    "cards.lunar.verite.mindset.var2": "Ahora ves las cosas como son, sin filtros ni ilusiones",
    "cards.lunar.verite.mindset.var3": "Lo que estaba oculto se vuelve claro y evidente, para tu bien",
    "cards.lunar.verite.guidance.var1": "Acoge esta verdad con apertura y valentía.",
    "cards.lunar.verite.guidance.var2": "Mantente alineado(a) con lo que sabes que es correcto.",
    "cards.lunar.verite.guidance.var3": "Esta claridad te ayuda a avanzar sin miedo y con confianza.",

    "cards.lunar.gratitude.name": "Gratitud",
    "cards.lunar.gratitude.mindset.var1": "Un sentimiento de gratitud te llena, {name}, y tu corazón se abre",
    "cards.lunar.gratitude.mindset.var2": "Tomas conciencia de todo lo que ya está presente en tu vida",
    "cards.lunar.gratitude.mindset.var3": "Sientes la belleza y la abundancia a tu alrededor",
    "cards.lunar.gratitude.guidance.var1": "Agradece por lo que tienes y experimentas cada día.",
    "cards.lunar.gratitude.guidance.var2": "Honra cada experiencia, incluso las pequeñas y discretas.",
    "cards.lunar.gratitude.guidance.var3": "La gratitud eleva tu energía y atrae más cosas hermosas a tu vida.",
    // Último Cuarto
    "cards.lunar.detachement.name": "Desapego",
    "cards.lunar.detachement.mindset.var1": "Es momento de soltar lo que te pesa, {name}, y liberar tu mente",
    "cards.lunar.detachement.mindset.var2": "Puedes dejar ir sin miedo y dar la bienvenida al cambio",
    "cards.lunar.detachement.mindset.var3": "Algunas cosas ya no necesitan ser retenidas, déjalas ir suavemente",
    "cards.lunar.detachement.guidance.var1": "Libérate sin culpa y con amabilidad hacia ti mismo(a).",
    "cards.lunar.detachement.guidance.var2": "El desapego abre un espacio nuevo para respirar y crear.",
    "cards.lunar.detachement.guidance.var3": "Confía en el flujo de la vida y avanza a tu propio ritmo.",

    "cards.lunar.prisederecul.name": "Tomar Distancia",
    "cards.lunar.prisederecul.mindset.var1": "{name}, toma distancia y observa tu situación con calma",
    "cards.lunar.prisederecul.mindset.var2": "Date tiempo para entender lo que realmente está pasando",
    "cards.lunar.prisederecul.mindset.var3": "Alejarse te ayuda a ver las cosas más claramente y con lucidez",
    "cards.lunar.prisederecul.guidance.var1": "No tomes decisiones apresuradas, respira primero.",
    "cards.lunar.prisederecul.guidance.var2": "La calma trae respuestas más claras y simples.",
    "cards.lunar.prisederecul.guidance.var3": "Date tiempo para reflexionar antes de actuar.",

    "cards.lunar.retourasoi.name": "Regreso a uno mismo",
    "cards.lunar.retourasoi.mindset.var1": "Sientes la necesidad de centrarte, {name}, y escucharte de verdad",
    "cards.lunar.retourasoi.mindset.var2": "Tu mundo interior te pide que cuides de ti",
    "cards.lunar.retourasoi.mindset.var3": "Te reconectas suavemente con tu esencia y tus necesidades",
    "cards.lunar.retourasoi.guidance.var1": "Cuídate con suavidad y atención.",
    "cards.lunar.retourasoi.guidance.var2": "Escucha lo que tu corazón y tu cuerpo te piden.",
    "cards.lunar.retourasoi.guidance.var3": "Este regreso a ti te hace más fuerte y sereno(a).",

    "cards.lunar.pardon.name": "Perdón",
    "cards.lunar.pardon.mindset.var1": "Estás listo(a) para aligerar tu corazón, {name}, y liberarte del pasado",
    "cards.lunar.pardon.mindset.var2": "El pasado puede ser sanado si eliges perdonar",
    "cards.lunar.pardon.mindset.var3": "El perdón te ofrece libertad interior y alivio profundo",
    "cards.lunar.pardon.guidance.var1": "Libérate del peso de los rencores sin juzgarte.",
    "cards.lunar.pardon.guidance.var2": "El perdón comienza contigo y para ti.",
    "cards.lunar.pardon.guidance.var3": "Deja ir lo que te retiene para avanzar más ligero.",

    "cards.lunar.sagesse.name": "Sabiduría",
    "cards.lunar.sagesse.mindset.var1": "Integras lo que has vivido, {name}, y comprendes mejor las lecciones aprendidas",
    "cards.lunar.sagesse.mindset.var2": "Cada experiencia ahora adquiere un significado más profundo",
    "cards.lunar.sagesse.mindset.var3": "Tu comprensión se vuelve más clara y guía tus elecciones",
    "cards.lunar.sagesse.guidance.var1": "Honra tu camino y todo lo que has atravesado.",
    "cards.lunar.sagesse.guidance.var2": "Confía en tu experiencia para guiar tus próximos pasos.",
    "cards.lunar.sagesse.guidance.var3": "La sabiduría nace de la integración y de escucharte a ti mismo.",

    "cards.lunar.repos.name": "Descanso",
    "cards.lunar.repos.mindset.var1": "Tu cuerpo y tu mente necesitan descansar, {name}, y eso es normal",
    "cards.lunar.repos.mindset.var2": "El ciclo está llegando a su fin y puedes reducir el ritmo sin culpa",
    "cards.lunar.repos.mindset.var3": "Permítete recuperarte para empezar de nuevo",
    "cards.lunar.repos.guidance.var1": "Date descanso y escucha tus necesidades.",
    "cards.lunar.repos.guidance.var2": "La calma y la relajación preparan un nuevo comienzo.",
    "cards.lunar.repos.guidance.var3": "El descanso forma parte del camino y te hace más fuerte.",
    
    // ESPAÑOL - Todas las nuevas traducciones para las variaciones

    // ========== SALUDOS VARIADOS ==========

    // Tirada diaria - variantes
    "interpretation.daily.greeting.var1":
      "¡Hola {name}! Tengo un mensaje especial para ti hoy.",
    "interpretation.daily.greeting.var2":
      "¡Hola {name}! Tu guía diario te espera con impaciencia.",
    "interpretation.daily.greeting.var3":
      "¡Hello {name}! Una hermosa energía te acompaña hoy.",
    "interpretation.daily.greeting.var4":
      "¡Buenos días {name}! Las energías cósmicas han preparado algo para ti.",

    // Tarot - variantes
    "interpretation.tarot.greeting.var1":
      "¡Hola {name}! Tu lectura de Tarot revela aspectos fascinantes de tu vida.",
    "interpretation.tarot.greeting.var2":
      "¡Hello {name}! Las cartas del Tarot tienen mensajes poderosos para ti.",
    "interpretation.tarot.greeting.var3":
      "¡Buenos días {name}! Tu tirada de Tarot desvela verdades importantes.",
    "interpretation.tarot.greeting.var4":
      "¡Hola {name}! Los arcanos del Tarot hablan claramente de tu futuro.",

    // Ángeles - variantes
    "interpretation.angels.greeting.var1":
      "¡Hola {name}! El reino angélico desborda mensajes de amor para ti.",
    "interpretation.angels.greeting.var2":
      "¡Hola {name}! Tus guías celestiales iluminan tu camino hoy.",
    "interpretation.angels.greeting.var3":
      "¡Hello {name}! Los ángeles cantan melodías de guía especialmente para ti.",
    "interpretation.angels.greeting.var4":
      "¡Buenos días {name}! Una sinfonía angélica resuena en las esferas celestiales para ti.",

    // Runas - variantes
    "interpretation.runes.greeting.var1":
      "¡Heil {name}! Las runas de los antiguos hablan de tu herencia vikinga.",
    "interpretation.runes.greeting.var2":
      "¡Hola {name}! El eco de los dioses nórdicos resuena a través de estas runas sagradas.",
    "interpretation.runes.greeting.var3":
      "¡Buenos días {name}! Las runas milenarias revelan la fuerza que duerme en ti.",
    "interpretation.runes.greeting.var4":
      "¡Hello {name}! La sabiduría de los vikingos atraviesa los siglos para guiarte.",

    // ========== TRANSICIONES VARIADAS ==========

    // Transiciones para el pasado
    "interpretation.transition.past.var1":
      "Estas experiencias realmente te han hecho crecer y te han hecho más fuerte{genderSuffix}.",
    "interpretation.transition.past.var2":
      "Estos momentos han forjado tu carácter y tu resistencia.",
    "interpretation.transition.past.var3":
      "Todo esto ha contribuido a formar la persona en que te has convertido{genderSuffix}.",
    "interpretation.transition.past.var4":
      "Estas pruebas te han dado una sabiduría preciosa.",
    "interpretation.transition.past.var5":
      "Es gracias a estas experiencias que has desarrollado tu fuerza interior.",
    "interpretation.transition.past.var6":
      "Estos eventos te han enseñado lecciones importantes sobre la vida.",
    "interpretation.transition.past.var7":
      "Toda esta experiencia ha enriquecido tu alma y tu camino.",
    "interpretation.transition.past.var8":
      "Estos desafíos han revelado tu verdadera naturaleza y determinación.",

    // Transiciones para el presente
    "interpretation.transition.present.var1":
      "Estás en un período importante que anuncia cosas hermosas por venir.",
    "interpretation.transition.present.var2":
      "Esta fase de tu vida abre perspectivas prometedoras.",
    "interpretation.transition.present.var3":
      "Es un momento clave que prepara tu futuro radiante.",
    "interpretation.transition.present.var4":
      "Este período actual sienta las bases de tu éxito futuro.",
    "interpretation.transition.present.var5":
      "Vives una transición que transformará tu vida positivamente.",
    "interpretation.transition.present.var6":
      "Este momento presente porta grandes promesas.",
    "interpretation.transition.present.var7":
      "Esta etapa marca un punto de inflexión positivo en tu existencia.",
    "interpretation.transition.present.var8":
      "Atraviesas una fase que te traerá mucha satisfacción.",

    // Transiciones para el futuro
    "interpretation.transition.future.var1":
      "Esta energía transformará tu vida de manera positiva y duradera.",
    "interpretation.transition.future.var2":
      "Estas influencias traerán cambios maravillosos a tu vida.",
    "interpretation.transition.future.var3":
      "Esta fuerza creará oportunidades extraordinarias para ti.",
    "interpretation.transition.future.var4":
      "Estas vibraciones atraerán todo lo que necesitas.",
    "interpretation.transition.future.var5":
      "Esta energía manifestará tus sueños más queridos.",
    "interpretation.transition.future.var6":
      "Estas influencias divinas iluminarán tu camino.",
    "interpretation.transition.future.var7":
      "Este poder desbloqueará tu potencial oculto.",
    "interpretation.transition.future.var8":
      "Estas energías sincronizarán todos los aspectos de tu vida.",

    // ========== CONSEJOS VARIADOS ==========

    // Templates para el mensaje final ÁNGELES (inicio de frase)
    "interpretation.angels.template.message.var1":"Los ángeles velan por ti {name} y te envían una guía importante:",
    "interpretation.angels.template.message.var2":"Un mensaje dulce te es dirigido {name}. Los guías desean que escuches esto:",
    "interpretation.angels.template.message.var3":"Las presencias celestiales te acompañan {name} y te susurran este mensaje:",
    "interpretation.angels.template.message.var4":"Una energía luminosa te rodea hoy {name}. Aquí está la guía que te aporta:",
    "interpretation.angels.template.message.var5":"{name}, los ángeles te envuelven con benevolencia y te transmiten esto:",
    "interpretation.angels.template.message.var6":"Una presencia angelical se acerca a ti {name}. Abre tu corazón a este mensaje:",
    "interpretation.angels.template.message.var7":"Tu alma es escuchada {name}. Los ángeles te comparten este consejo para avanzar:",
    "interpretation.angels.template.message.var8":"Una presencia divina se dirige hacia ti {name}. Aquí está el mensaje que estás listo para recibir:",

    // Consejos variados ÁNGELES (final de frase)
    "interpretation.advice.var1":"Tu ángel guardián quiere que sepas que tu intuición es una guía segura: confía plenamente en ella.",
    "interpretation.advice.var2":"Los ángeles te recuerdan escuchar a tu corazón: él ya conoce la dirección que te traerá paz.",
    "interpretation.advice.var3":"Tu guía de luz te invita a prestar atención a las señales a tu alrededor, pues nada aparece por casualidad.",
    "interpretation.advice.var4":"Los seres celestiales quieren que permanezcas alineado con lo que sientes profundamente. Ahí se encuentra tu verdad.",
    "interpretation.advice.var5":"Tu ángel protector te anima a creer en tu fuerza interior: nunca te abandona.",
    "interpretation.advice.var6":"Un susurro divino te aconseja abrirte a las oportunidades que se presentan: están ahí para ayudarte.",
    "interpretation.advice.var7":"Los ángeles te piden que reduzcas la velocidad y respires: la paciencia permitirá que tu camino se aclare naturalmente.",
    "interpretation.advice.var8":"Tu guía angelical quiere que continúes avanzando con confianza: tus esfuerzos ya están bendecidos.",
    "interpretation.advice.var9":"Una luz celestial te invita a mantener tu optimismo, pues atrae hacia ti energías altamente positivas.",
    "interpretation.advice.var10":"Tu ángel guardián te susurra que refuerces tu confianza en ti: abre las puertas que esperas desde hace tiempo.",

    // Comienzos de frases TAROT
    "interpretation.tarot.template.advice.var1":"Escucha atentamente {name},",
    "interpretation.tarot.template.advice.var2":"Mi consejo para ti {name},",
    "interpretation.tarot.template.advice.var3":"Te voy a decir algo {name},",
    "interpretation.tarot.template.advice.var4":"Sabe una cosa {name},",
    "interpretation.tarot.template.advice.var5":"Tómate un momento {name},",
    "interpretation.tarot.template.advice.var6":"Te lo digo claramente {name},",
    "interpretation.tarot.template.advice.var7":"Aquí tienes mi consejo {name},",
    "interpretation.tarot.template.advice.var8":"Te lo digo {name},",
    "interpretation.tarot.template.advice.var9":"No olvides {name},",
    "interpretation.tarot.template.advice.var10":"{name},",

    // Finales de frases TAROT
    "interpretation.tarot.advice.var1":"tus decisiones actuales tendrán un impacto directo en tu futuro, así que mantente alerta.",
    "interpretation.tarot.advice.var2":"Confía en tu instinto y atrévete a tomar el camino que sientas correcto, aunque te dé un poco de miedo.",
    "interpretation.tarot.advice.var3":"tus emociones son guías poderosas, síguelas con confianza.",
    "interpretation.tarot.advice.var4":"a veces es mejor dejar ir que forzar las cosas.",
    "interpretation.tarot.advice.var5":"tienes todas las claves para tener éxito, ¡así que no te rindas!",
    "interpretation.tarot.advice.var6":"ya tienes todo lo necesario dentro de ti para avanzar: ¡cree en ti!",
    "interpretation.tarot.advice.var7":"no dejes que la duda te detenga, sigue adelante de todos modos.",
    "interpretation.tarot.advice.var8": "Tu intuición te muestra claramente el camino correcto a seguir. ¡Confía en ella por completo!",
    "interpretation.tarot.advice.var9":"mantente positivo, tu energía atrae lo que necesitas.",
    "interpretation.tarot.advice.var10":"acepta lo que llega y ve a por ello, el momento es el adecuado.",

    // AZRAËL
    "wizard.title": "Azraël el Vidente",
      "wizard.subtitle.home": "El gran mago revela los misterios de tu destino",
      "wizard.subtitle.question": "Formula tu pregunta con claridad",
      "wizard.subtitle.channeling": "✧ Azraël consulta las fuerzas cósmicas... ✧",
      "wizard.subtitle.answer": "✦ Revelación Mística ✦",
      "wizard.oracleResponse": "Respuesta de Azrael",
      "oracle.wizard.description": "Consulta al gran mago para revelar tu destino",
      "wizard.consultButton": "Consultar a Azraël",
      "wizard.backButton": "← Volver",
      "wizard.backHome": "← Volver al inicio",
      "wizard.newQuestion": "Nueva Pregunta",
      "wizard.askTitle": "Haz Tu Pregunta",
      "wizard.questionLabel": "Tu pregunta al mago",
      "wizard.questionPlaceholder": "Escribe tu pregunta...",
      "wizard.adviceTitle": "Consejo Místico",
      "wizard.adviceText": "Azraël responde sí, no o quizás. Haz una pregunta cerrada para recibir la guía de las estrellas.",
      "wizard.astraConnection": "⟡ Conexión astral",
      "wizard.consultAction": "Consultar a Azraël",
      "wizard.channeling": "Azraël consulta las fuerzas cósmicas...",
      "wizard.yourQuestion": "Tu pregunta",
      "wizard.disclaimer": "Las respuestas de Azraël son simbólicas y con fines de entretenimiento. Escucha tu corazón para decisiones importantes.",
      "wizard.answer.yes": "Los astros confirman: Sí, sin la menor duda",
      "wizard.answer.no": "Las estrellas se oponen: No, este camino no es tuyo",
      "wizard.answer.maybe": "El destino duda: Quizás, mantente atento a las señales",
      "wizard.answer.veryLikely": "Las fuerzas cósmicas se alinean favorablemente",
      "wizard.answer.unlikely": "Los presagios son desfavorables por ahora",
      "wizard.answer.certain": "Certeza absoluta: El cosmos ha hablado",
      "wizard.answer.noChance": "Ninguna posibilidad: Las estrellas te guían a otra parte",
      "wizard.answer.askLater": "El momento no es propicio, vuelve más tarde",
      "wizard.answer.dontCount": "No cuentes con ello: Otras puertas se abrirán",
      "wizard.answer.yesDefinitely": "¡Sí, definitivamente! Las energías son perfectas",
      "wizard.answer.signsYes": "Todos los signos apuntan hacia el sí",
      "wizard.answer.signsNo": "Los augurios son claros: No",
      "wizard.answer.unclear": "El velo entre mundos permanece opaco",
      "wizard.answer.trustIntuition": "Escucha tu voz interior, ella conoce la verdad",

    // MENU LÉGAL
    "legal.menu.title": "Menú legal",
    "legal.mentions": "Aviso legal",
    "legal.privacy": "Política de privacidad",

    // MODAL PREMIUM
    "premium.button.label": "Hazte Premium",
    "premium.title": "¡Elimina los anuncios!",
    "premium.subtitle": "¡Haz tus lecturas sin publicidad!",
    "premium.plan.1month": "1 Mes",
    "premium.plan.1month.subtitle": "Sin compromiso",
    "premium.plan.3months": "3 Meses",
    "premium.plan.3months.subtitle": "Mejor oferta",
    "premium.plan.discount": "-25%",
    "premium.button.subscribe": "Suscríbete ahora",
    "premium.button.select": "Selecciona una oferta",
    "premium.button.processing": "Procesando...",
    "premium.benefits.ads": "Sin anuncios",
    "premium.benefits.notes": "Notas y favoritos",
    "premium.benefits.history": "Historial completo de tus lecturas",
    "premium.confirm.1month": "¿Confirmar el pago de 3,99 € por 1 mes?",
    "premium.confirm.3months": "¿Confirmar el pago de 8,98 € por 3 meses?",
    "premium.success":"¡Suscripción activada con éxito! Disfruta de tu experiencia sin anuncios.",
    "premium.error.activation": "Error al activar la suscripción",
    "premium.error.payment": "Error en el pago. Por favor, inténtalo de nuevo.",
    "premium.manage": "Gestionar mi suscripción (cancelar, facturas...)",
    "premium.expired": "Tu acceso Premium ha expirado",
    "premium.expiringSoon": "Tu acceso Premium expirará pronto",
    "premium.conditions.line1":"🔒 Pago seguro a través de Google Play",
    "premium.conditions.line2": "✓ Pago único, SIN renovación automática",
    "premium.conditions.line3": "No hay reembolso después del pago. El acceso Premium es válido por la duración seleccionada.",
    "premium.conditions.line4": "Se te notificará 3 días antes de que expire tu acceso.",
    "premium.securePaymentBy": "Pago seguro por",
    "premium.restoreSubscription": "Restaurar una suscripción",
    "premium.backToPurchases": "Volver a las compras",
    "premium.payment.googlePlay": "Pago de Google Play",
    "premium.payment.stripe": "Pago web con Stripe",
    "premium.restoreEmailLabel": "Tu correo electrónico",
    "premium.restore": "Restaurar",
    "premium.buy": "Comprar",
    "premium.error.invalidEmail": "El correo electrónico no es válido.",
    "premium.error.noActivePremium": "No se encontró ninguna suscripción activa",

    // PREMIUM RESTOR
    "premium.restore.title": "Restaurar mi suscripción",
    "premium.restore.subtitle": "¿Ya eres Premium? Recupera tu acceso",
    "premium.restore.description": "Introduce el correo electrónico utilizado al comprar Premium",
    "premium.restore.button": "Restaurar",
    "premium.restore.verifying": "Verificando...",
    "premium.restore.success": "¡Premium restaurado con éxito!",
    "premium.restore.redirecting": "Redirigiendo...",
    "premium.restore.notFound": "No se encontró una suscripción Premium para este correo electrónico. Verifica la dirección o suscríbete a un nuevo plan.",
    "premium.restore.error": "Ocurrió un error al restaurar. Inténtalo de nuevo.",
    "premium.restore.info":"La suscripción Premium está vinculada a la cuenta de Google utilizada para la compra en Google Play.",
    "premium.restore.help": "¿Necesitas ayuda?",
    "premium.restore.contact": "Contáctanos",
    "premium.error.emailRequired": "Se requiere correo electrónico.",
    "premium.error.emailInvalid": "El correo electrónico no es válido.",
    "premium.emailLabel": "Tu correo electrónico",
    "premium.emailHelp": "Para recuperar tu suscripción",
    "premium.poweredBy": 'Powered by',
    "premium.backToPurchase": "Volver a las compras",
    "premium.button.loading": "Cargando...",
    "premium.loading.offers": "Cargando ofertas...",
    "premium.button.restoring": "Restaurando...",
    "premium.error.loadFailed": "No se pudieron cargar las ofertas",
    "premium.error.purchaseFailed": "Error durante la compra",
    "premium.error.unknown": "Error desconocido",

    // PAGE PAIEMENT SUCCESS CANCEL
    "payment.success.title": "¡Pago exitoso!",
    "payment.success.verified": "Tu cuenta Premium ha sido activada",
    "payment.success.activating": "Activación en curso...",
    "payment.success.benefits": "¡Disfruta de todas las funciones Premium!",
    "payment.success.noAds": "Sin publicidad",
    "payment.success.fullHistory": "Historial completo",
    "payment.success.redirecting": "Redirección automática a los oráculos...",
    "payment.cancel.title": "Pago cancelado",
    "payment.cancel.message": "Has cancelado el pago",
    "payment.cancel.retry": "Puedes intentarlo de nuevo en cualquier momento desde el menú Premium",
    "payment.cancel.redirecting": "Volviendo a la selección de oráculos...",
    "premium.upgrade":"Pasar a Premium",
    "premium.purchase":"Hazte Premium",
    "premium.purchaseDesc":"Nueva suscripción",
    "premium.restoreDesc":"Ya he pagado",
    "premium.unlimited":"Ilimitado",
    "premium.mobileOnly.title":"Solo aplicación móvil",
    "premium.mobileOnly.description":"Las compras Premium están disponibles únicamente a través de la aplicación móvil Android (Google Play).",
    "premium.mobileOnly.instruction":"Descarga la app desde Google Play Store para acceder a Premium.",
    "premium.benefits.grimoire":"Grimorio ilimitado",
    "premium.benefits.unlimited":"Lecturas ilimitadas",
    "premium.benefits.noAds":"Sin publicidad",
    "premium.benefits.allOracles":"Todos los oráculos desbloqueados",
    "premium.benefits.deepInterpretations":"Interpretaciones profundas",
    "premium.restore.mobileOnly":"La restauración de la suscripción está disponible únicamente a través de la aplicación móvil Android.",

    // Wheel of destiny
    "oracle.wheel.title": "Rueda del Destino",
    "oracle.wheel.subtitle": "Gira la rueda para descubrir tu destino",
    "oracle.wheel.description": "Deja que el destino guíe la rueda hacia tu futuro",
    "oracle.wheel.exclusiveBadge": "BONO EXCLUSIVO",
    "oracle.wheel.shortDescription": "Descubre tu destino místico",
    "oracle.wheel.spinButton": "Girar la Rueda",
    "oracle.wheel.newSpin": "Nuevo Giro",
    "oracle.wheel.spinning": "La rueda está girando...",
    "premium.badge": "👑 Premium",
    "oracle.wheel.segment.love": "Amor",
    "oracle.wheel.segment.work": "Trabajo",
    "oracle.wheel.segment.money": "Dinero",
    "oracle.wheel.segment.health": "Salud",
    "oracle.wheel.segment.family": "Familia",
    "oracle.wheel.segment.success": "Éxito",
    "oracle.wheel.segment.friendship": "Amistad",
    "oracle.wheel.segment.mystery": "?",
    "oracle.wheel.adRequired": "Se te mostrará un anuncio",
    "oracle.wheel.premiumAccess": "Acceso instantáneo sin anuncios",
    "oracle.wheel.startButton": "Desbloquear la Rueda del Destino",
    "oracle.wheel.startButtonPremium": "Girar la Rueda",
    "oracle.wheel.loadingAd": "Cargando...",
    "oracle.wheel.pleaseWait": "Un momento",
    "oracle.wheel.adLongWarning": "Anuncio en curso...",
    "oracle.wheel.pleaseWaitUntilEnd": "Por favor, espera",
    "oracle.wheel.adNotCompleted": "Por favor mira el anuncio hasta el final",
    "oracle.wheel.adError": "Ha ocurrido un error. Inténtalo de nuevo.",
    "oracle.wheel.variations.golden": "Rueda Dorada",
    "oracle.wheel.variations.silver": "Rueda Plateada",
    "oracle.wheel.variations.cosmic": "Rueda Cósmica", 
    "oracle.wheel.destinyRevealed": "Tu destino es revelado",
    "common.pleaseWait": "Por favor, espere",
    "oracle.wheel.watchAdToUnlock.spanish": "Mira el anuncio para desbloquear",

    "oracle.wheel.love.title.1": "💖 El Amor te sonríe",
    "oracle.wheel.love.message.1": [
      "Un encuentro importante llegará pronto y podría cambiar tu vida. Abre tu corazón y déjate sorprender.",
      "El amor que buscas está más cerca de lo que crees. Mantente atento a las señales que te rodean.",
      "Un vínculo fuerte y sincero puede nacer en cualquier momento. Mantente abierto y receptivo a las emociones."
    ],
    "oracle.wheel.love.title.2": "💫 Pasión intensa",
    "oracle.wheel.love.message.2": [
      "Una pasión profunda tocará tu vida. No reprimas tus emociones y vive cada instante al máximo.",
      "Tus sentimientos se intensificarán. No temas mostrar lo que realmente sientes.",
      "Una conexión especial se acerca a ti. Deja que se revele de forma natural y sin presión."
    ],
    "oracle.wheel.love.title.3": "🌹 Romance a la vista",
    "oracle.wheel.love.message.3": [
      "Un hermoso romance está por manifestarse. Presta atención a las oportunidades a tu alrededor.",
      "Alguien importante podría entrar muy pronto en tu vida. Prepárate para recibir este encuentro.",
      "El destino tiene una sorpresa amorosa para ti. Abre tu corazón y déjate guiar por tus emociones."
    ],
    "oracle.wheel.love.title.4": "💕 Amor verdadero",
    "oracle.wheel.love.message.4": [
      "Tu corazón se llenará de alegría y emociones hermosas. Disfruta cada momento con quienes amas.",
      "Experiencias positivas y enriquecedoras en el amor están por llegar. Déjalas inspirarte.",
      "Una energía de amor te rodea. Síguela y deja que guíe tus acciones y decisiones."
    ],
    "oracle.wheel.work.title.1": "💼 Éxito profesional",
    "oracle.wheel.work.message.1": [
      "Un proyecto importante se concretará. Pon toda tu energía y verás los resultados.",
      "Todos tus esfuerzos comienzan a dar frutos. Mantente enfocado y sigue avanzando.",
      "Un reconocimiento significativo llegará por tu trabajo. Prepárate para brillar."
    ],
    "oracle.wheel.work.title.2": "🚀 Gran oportunidad",
    "oracle.wheel.work.message.2": [
      "Una oportunidad única aparece en tu carrera. No dudes en lanzarte, el momento es ideal.",
      "Un contacto o propuesta podría cambiar tu vida profesional. Mantente atento y listo.",
      "Un giro decisivo está cerca. Actúa rápido para aprovecharlo por completo."
    ],
    "oracle.wheel.work.title.3": "⚡ Avance decisivo",
    "oracle.wheel.work.message.3": [
      "Un obstáculo se convierte en oportunidad. Aprovecha el momento para demostrar tus capacidades.",
      "Estás a punto de superar una etapa importante. No dudes de ti y sigue adelante.",
      "Una evolución positiva en tu trabajo es inminente. Mantente seguro y decidido."
    ],
    "oracle.wheel.work.title.4": "🎯 Objetivo a la vista",
    "oracle.wheel.work.message.4": [
      "Estás cerca de lograr lo que deseas. Concéntrate y da tu máximo esfuerzo.",
      "Una etapa crucial se acerca. Mantente perseverante para alcanzar tu meta.",
      "Tus esfuerzos darán frutos. Sigue motivado y sigue avanzando con confianza."
    ],
    "oracle.wheel.money.title.1": "💰 Prosperidad en camino",
    "oracle.wheel.money.message.1": [
      "Una entrada de dinero llegará pronto. Prepárate para manejarla con sabiduría.",
      "Tus esfuerzos financieros comienzan a rendir. Mantente atento y toma buenas decisiones.",
      "Un evento inesperado podría mejorar tus finanzas. Aprovecha la oportunidad inteligentemente."
    ],
    "oracle.wheel.money.title.2": "💸 Gasto controlado",
    "oracle.wheel.money.message.2": [
      "Podría surgir un gasto inesperado. Mantén la calma y úsalo como una lección para mejorar tu gestión.",
      "Quizás debas tomar decisiones financieras difíciles, pero te llevarán a mayor estabilidad.",
      "Una pequeña pérdida temporal podría sorprenderte. Úsala para reforzar tu seguridad económica."
    ],
    "oracle.wheel.money.title.3": "⚡ Ganancia inesperada",
    "oracle.wheel.money.message.3": [
      "Una pequeña ganancia inesperada alegrará tu día. Úsala para avanzar en tus proyectos.",
      "Alguien podría darte un apoyo económico. Acepta la ayuda y conviértela en oportunidad.",
      "Un retorno inesperado de inversión está en camino. Sácale el mayor provecho."
    ],
    "oracle.wheel.money.title.4": "🎯 Meta financiera",
    "oracle.wheel.money.message.4": [
      "Estás cerca de cumplir un objetivo importante. Mantén tu enfoque y no te distraigas.",
      "Una etapa crucial en tus finanzas se aproxima. Pon toda tu energía en lo que deseas lograr.",
      "Tus esfuerzos económicos darán frutos. Avanza con motivación y seguridad."
    ],
    "oracle.wheel.health.title.1": "💪 Energía al máximo",
    "oracle.wheel.health.message.1": [
      "Tu energía será muy alta en los próximos días. Aprovecha para avanzar en tus proyectos.",
      "Te sentirás fuerte y motivado. Usa esta energía para enfocarte en lo que es importante.",
      "Se acerca una etapa de gran vitalidad. Muévete, explora y deja que tu cuerpo y mente fluyan."
    ],
    "oracle.wheel.health.title.2": "🌿 Equilibrio perfecto",
    "oracle.wheel.health.message.2": [
      "Encontrarás un hermoso equilibrio entre cuerpo y mente. Aprovecha para reconectar contigo.",
      "Tu ritmo diario será armonioso. Escucha tus necesidades y respira.",
      "Un sentimiento de serenidad te acompañará. Úsalo para avanzar con claridad."
    ],
    "oracle.wheel.health.title.3": "⚡ Impulso de energía",
    "oracle.wheel.health.message.3": [
      "Un fuerte impulso de energía llegará. Úsalo para tus tareas importantes.",
      "Estarás lleno de motivación. Aprovecha para moverte, crear y avanzar.",
      "Tu dinamismo resaltará. Deja que te impulse a nuevos logros."
    ],
    "oracle.wheel.health.title.4": "🌞 Bienestar total",
    "oracle.wheel.health.message.4": [
      "Te sentirás bien física y mentalmente. Deja que este bienestar te guíe día a día.",
      "Una sensación de ligereza te acompañará. Disfruta plenamente cada momento.",
      "El sosiego llenará tu rutina. Sigue esa energía para tomar buenas decisiones."
    ],
    "oracle.wheel.family.title.1": "🏡 Armonía familiar",
    "oracle.wheel.family.message.1": [
      "Una bella etapa de unión se acerca. Disfruta cada momento con tus seres queridos.",
      "Los lazos familiares se fortalecerán. Muestra cariño y atención, será apreciado.",
      "Un momento cálido y lleno de conexión te espera. Mantente presente."
    ],
    "oracle.wheel.family.title.2": "⚖️ Reconciliación",
    "oracle.wheel.family.message.2": [
      "Un pequeño conflicto puede surgir, pero llevará a una mejor comprensión.",
      "Tendrás la oportunidad de reparar un malentendido. Escucha con paciencia.",
      "Un desacuerdo se convertirá en un acercamiento. Aprovecha para fortalecer vínculos."
    ],
    "oracle.wheel.family.title.3": "🎉 Momentos felices",
    "oracle.wheel.family.message.3": [
      "Días llenos de alegría familiar están por llegar. Atesora cada risa y cada gesto.",
      "Un día especial te brindará recuerdos hermosos. Vive el momento.",
      "Sentirás el apoyo de quienes te aman. Deja que esa energía te guíe."
    ],
    "oracle.wheel.family.title.4": "💖 Apoyo mutuo",
    "oracle.wheel.family.message.4": [
      "Tu familia estará allí cuando la necesites. No dudes en apoyarte en ellos.",
      "Podrás ofrecer tu ayuda a alguien cercano. Esto fortalecerá su relación.",
      "Una dinámica positiva surge entre tú y los tuyos. Ama y comparte sin límites."
    ],
    "oracle.wheel.success.title.1": "🏆 Éxito inminente",
    "oracle.wheel.success.message.1": [
      "Muy pronto alcanzarás un éxito que te sorprenderá. Tus esfuerzos finalmente dan frutos.",
      "Lo que parecía imposible ahora se vuelve alcanzable. Verás resultados claros y merecidos.",
      "Una oportunidad inesperada te permitirá brillar. Mantente alerta y tómala con confianza."
    ],
    "oracle.wheel.success.title.2": "🚀 Progreso rápido",
    "oracle.wheel.success.message.2": [
      "Todo lo que haces ahora te impulsa a un nivel superior. Mantente enfocado.",
      "Tus pequeños esfuerzos diarios se acumulan y aceleran tu progreso. No te detengas.",
      "Un cambio importante acelerará tu éxito. Adáptate rápido y aprovecha el impulso."
    ],
    "oracle.wheel.success.title.3": "⚡ Gran recuperación",
    "oracle.wheel.success.message.3": [
      "Lo que parecía un fracaso se convertirá en una oportunidad poderosa. Sigue confiando.",
      "Una dificultad pasada te dará una victoria inesperada. Verás que nada fue en vano.",
      "Un tropiezo se transformará en tu trampolín. Lograrás más de lo que imaginabas."
    ],
    "oracle.wheel.success.title.4": "🎯 Meta alcanzada",
    "oracle.wheel.success.message.4": [
      "Todo lo que trabajaste está madurando. Sentirás orgullo y satisfacción.",
      "Alcanzarás una meta que parecía lejana. Celebra tu esfuerzo.",
      "El éxito que esperabas por fin se manifiesta. Estás exactamente donde debes estar."
    ],
    "oracle.wheel.friendship.title.1": "🤝 Amistad fuerte",
    "oracle.wheel.friendship.message.1": [
      "Vivirás un momento importante con un amigo verdadero. El vínculo se fortalecerá.",
      "Un amigo te sorprenderá con su apoyo o generosidad. Verás quién está realmente contigo.",
      "Tendrás la oportunidad de mostrar cuánto valoras la amistad. Un gesto fortalecerá un lazo precioso."
    ],
    "oracle.wheel.friendship.title.2": "💬 Conversación clave",
    "oracle.wheel.friendship.message.2": [
      "Una conversación importante aclarará una situación delicada. Ganarás comprensión y calma.",
      "Recibirás consejos valiosos de alguien de confianza. Escucha con atención.",
      "Una charla inesperada traerá claridad a una amistad. El diálogo será la clave."
    ],
    "oracle.wheel.friendship.title.3": "🌟 Nuevo encuentro",
    "oracle.wheel.friendship.message.3": [
      "Una nueva persona entrará en tu vida y podría convertirse en un amigo valioso.",
      "Conocerás a alguien que comparte tus intereses. Una linda amistad puede nacer.",
      "Un vínculo sincero puede surgir con alguien inesperado. Mantente abierto."
    ],
    "oracle.wheel.friendship.title.4": "⚡ Resolución de conflicto",
    "oracle.wheel.friendship.message.4": [
      "Un malentendido del pasado se resolverá. La amistad saldrá fortalecida.",
      "Tendrás la oportunidad de reparar un lazo frágil. Aumentará la confianza mutua.",
      "Una situación delicada se transformará en conexión profunda. A veces el conflicto une más."
    ],
    "oracle.wheel.mystery.title.1": "❓ Sorpresa total",
    "oracle.wheel.mystery.message.1": [
      "Te enfrentarás a una situación inesperada que te sacudirá. Mantén la calma y observa.",
      "Un evento improbable alterará tu día. Lo que parece un problema puede volverse una oportunidad.",
      "Algo completamente inesperado tocará tu vida. Prepárate para adaptarte rápidamente."
    ],
    "oracle.wheel.mystery.title.2": "💥 Impacto súbito",
    "oracle.wheel.mystery.message.2": [
      "Descubrirás una verdad o un secreto que te sorprenderá profundamente.",
      "Una revelación inesperada cambiará tu rutina. No entres en pánico: trae una lección importante.",
      "Verás algo desde otra perspectiva. Algo que parecía estable se romperá para mostrarte más."
    ],
    "oracle.wheel.mystery.title.3": "🌪 Tormenta",
    "oracle.wheel.mystery.message.3": [
      "Vivirás un momento caótico donde todo parece desordenado. Mantente firme.",
      "Una serie de imprevistos te tomará por sorpresa. Deja que te guíen hacia algo nuevo.",
      "La vida te sacará de tu zona de confort. Este caos es necesario para tu evolución."
    ],
    "oracle.wheel.mystery.title.4": "🌀 Destino incierto",
    "oracle.wheel.mystery.message.4": [
      "Te encontrarás en una encrucijada donde tus decisiones tendrán un impacto inesperado.",
      "Un evento misterioso te hará cuestionar tus certezas. Usa esta incertidumbre para crecer.",
      "El destino te sorprenderá con situaciones insólitas. Acepta lo desconocido."
    ],

    "oracle.backToOracles": "Volver a los oráculos",
    // Common
    "common.back": "Atrás",
    "common.home": "Inicio",
    "common.language": "Idioma",
  },

  de: {
    // Landing Page
    "landing.title": "TarotMystik",
    "landing.subtitle":
      "Entdecken Sie die Geheimnisse Ihres Schicksals durch Karten, Sterne und alte Weisheit",
    "landing.enter": "EINTRETEN",
    "landing.ads.support": "Werbung hilft uns, die App kostenlos zu halten",

    // 🆕 Disclaimer - HIER HINZUFÜGEN
    "disclaimer.title": "Wichtiger Haftungsausschluss",
      "disclaimer.text": "TarotMystik ist eine App für Unterhaltung und persönliche Entwicklung. Konsultieren Sie qualifizierte Experten für jede wichtige Entscheidung.",
      "disclaimer.note": "Durch die Fortsetzung stimmen Sie zu, diese App nur zu Unterhaltungszwecken zu nutzen.",
      "disclaimer.accept": "Verstanden",
      "disclaimer.legal": "Diese App entspricht der DSGVO.",

    //Avis Playstore
    "rating.title": "Gefällt Ihnen TarotMystik?",
      "rating.subtitle": "Ihr Feedback ist uns sehr wichtig! Nehmen Sie sich einen Moment Zeit, um die App zu bewerten.",
      "rating.thanksGood": "Vielen Dank! Ihre Bewertung hilft uns sehr 🌟",
      "rating.feedback": "Danke für Ihr Feedback. Wie können wir Ihre Erfahrung verbessern?",
      "rating.rate": "App bewerten",
      "rating.later": "Später",
      "rating.never": "Nicht mehr fragen",

    // No-repeat system
    "system.antirepeat.loading": "Die Karten werden gemischt...",
    "system.antirepeat.active": "Anti-Wiederholungs-System aktiv",
    "system.cards.refreshed": "Neue Karten verfügbar",

    // Name Page
    "name.title": "Vorname",
    "name.subtitle":
      "Wie möchten Sie genannt werden? Geben Sie Ihren Namen oder Spitznamen ein",
    "name.placeholder": "Namen eingeben",
    "name.next": "WEITER",

    // Date Page
    "date.title": "Geburtsdatum",
    "date.subtitle":
      "Enthüllen Sie Ihr astrologisches Zeichen für eine personalisierte Wahrsagung",
    "date.day": "Tag",
    "date.month": "Monat",
    "date.year": "Jahr",
    "date.next": "WEITER",
    "date.months.1": "Januar",
    "date.months.2": "Februar",
    "date.months.3": "März",
    "date.months.4": "April",
    "date.months.5": "Mai",
    "date.months.6": "Juni",
    "date.months.7": "Juli",
    "date.months.8": "August",
    "date.months.9": "September",
    "date.months.10": "Oktober",
    "date.months.11": "November",
    "date.months.12": "Dezember",

    // Gender Page
    "gender.title": "Geschlecht",
    "gender.subtitle":
      "Gib dein Geschlecht an, um das Erlebnis zu personalisieren",
    "gender.male": "Männlich",
    "gender.female": "Weiblich",
    "gender.other": "Andere",
    "gender.next": "BEGINNEN",
    "gender.back": "ZURÜCK",

    //Barre de navigation DE
    "menu.open": "Menü öffnen",
      "profile.open": "Profil öffnen",
      "profile.birthdate": "Geburtsdatum",
      "profile.gender": "Geschlecht",
      "profile.zodiac": "Sternzeichen",
      "profile.edit": "Profil bearbeiten",
      "profile.edit.title": "Profil bearbeiten",
      "profile.edit.subtitle": "Aktualisiere deine persönlichen Daten",
      "profile.edit.error": "Bitte fülle alle Felder aus",
      "premium.active": "Aktiv",
      "locale": "de-DE",
      "common.cancel": "Abbrechen",
      "common.save": "Speichern",
      "name.label": "Name",

    // Zodiac signs names
    "zodiac.signs.aries": "Widder",
    "zodiac.signs.taurus": "Stier",
    "zodiac.signs.gemini": "Zwillinge",
    "zodiac.signs.cancer": "Krebs",
    "zodiac.signs.leo": "Löwe",
    "zodiac.signs.virgo": "Jungfrau",
    "zodiac.signs.libra": "Waage",
    "zodiac.signs.scorpio": "Skorpion",
    "zodiac.signs.sagittarius": "Schütze",
    "zodiac.signs.capricorn": "Steinbock",
    "zodiac.signs.aquarius": "Wassermann",
    "zodiac.signs.pisces": "Fische",

    // DE Benachrichtigungen
    "notification.channel.name": "Tägliche Führung",
    "notification.channel.description": "Benachrichtigungen für dein mystisches Orakel des Tages",
    "notification.variants.1.title": "💘 Das Orakel der Liebe ruft dich",
    "notification.variants.1.body": "Entdecke, was die Karten heute über dein Liebesleben enthüllen!",
    "notification.variants.2.title": "🌙 Der Mond erleuchtet deinen Weg",
    "notification.variants.2.body": "Sieh ins Mondorakel, um die Energien des Tages zu erfahren",
    "notification.variants.3.title": "🔮 Azrael der Seher wartet auf dich",
    "notification.variants.3.body": "Der große Magier hat heute Offenbarungen für dich",
    "notification.variants.4.title": "✦ Das Rad des Schicksals dreht sich",
    "notification.variants.4.body": "Entdecke, welches mystische Schicksal dich heute erwartet",
    "notification.variants.5.title": "✨ TarotMystik führt dich",
    "notification.variants.5.body": "Deine täglichen Orakel sind bereit: Liebe, Schicksal und Geheimnisse erwarten dich",
    "notification.modal.title": "Tägliche Führung",
    "notification.modal.description": "Erhalte jeden Tag um 10 Uhr eine mystische Erinnerung, um deine Orakel und personalisierten Offenbarungen zu entdecken",
    "notification.modal.benefit1": "Personalisierte tägliche Orakel",
    "notification.modal.benefit2": "Führung in Liebe, Schicksal und Geheimnissen",
    "notification.modal.benefit3": "Verpasse niemals deine Offenbarung des Tages",
    "notification.modal.accept": "Benachrichtigungen aktivieren",
    "notification.modal.decline": "Nein danke",
    "notification.modal.note": "Du kannst diese Einstellung jederzeit in den Optionen ändern",

    // Oracle Selection
    "oracle.welcome": "Willkommen {name}!",
    "oracle.subtitle": "Entdecken Sie die Geheimnisse Ihres Schicksals",
    "oracle.daily.title": "Tagesziehung",
    "oracle.daily.description":
      "Eine Karte, die Sie heute führt und inspiriert",
    "oracle.horoscope.title": "Horoskop",
    "oracle.horoscope.description":
      "Entdecken Sie, was Ihnen die Sterne heute nach Ihrem Zeichen bescheren",
    "oracle.tarot.title": "Tarot",
    "oracle.tarot.description":
      "Die 22 Großen Arkana enthüllen die Geheimnisse deines Schicksals",
    "oracle.angels.title": "Engel-Orakel",
    "oracle.angels.description":
      "Verbinden Sie sich mit Ihren Engelsführern, um ihre Botschaften der Liebe zu empfangen",
    "oracle.runes.title": "Nordische Runen",
    "oracle.runes.description":
      "Die alte Weisheit der Wikinger offenbart Ihren Weg des Krieges und des Sieges",
    "oracle.back": "ZURÜCK",
    "oracle.home": "Startseite",
    "oracle.selection.title": "Wähle Dein Orakel",

    // Card Game
    "cardgame.back": "Zurück",
    "cardgame.daily.instruction": "Wählen Sie 1 Karte für Ihren Tagesrat",
    "cardgame.reading.instruction":
      "Wähle 3 Karten, um dein Schicksal zu erhellen",
    "cardgame.selected": "Ausgewählte Karten: {current}/{max}",
    "cardgame.reveal": "KARTEN ENTHÜLLEN",
    "cardgame.page": "Seite {current} von {total}",
    "cardgame.previous": "Zurück",
    "cardgame.next": "Weiter",
    "cardgame.daily.choose": "Wähle die Karte, die dich ruft",

    // CardGame - Modal de révélation
    "cardgame.cardRevealed": "Karte aufgedeckt",
    "cardgame.continue": "Weiter",
    "cardgame.seeInterpretation": "Interpretation anzeigen",

    // Revelation - Loading
    "revelation.loading.title": "Interpretation läuft...",
    "revelation.loading.daily": "Die Sterne enthüllen dein Tagesorakel, {name}",
    "revelation.loading.reading": "Die Karten offenbaren ihre mystischen Geheimnisse, {name}",
    "revelation.loading.mysticMessage": "Die Sterne richten sich für dich aus...",

    // Revelation Page
    "revelation.positions.daily": "Tagesrat",
    "revelation.positions.past": "Karte 1",
    "revelation.positions.present": "Karte 2",
    "revelation.positions.future": "Karte 3",
    "revelation.summary.title": "Was deine Karten offenbaren",
    "revelation.newConsultation": "Neue Beratung",
    "revelation.title.daily": "Ihr Tagesrat",
    "revelation.title.reading": "Ihre Lesung - {oracle}",
    "revelation.instruction.daily":
      "Klicken Sie auf Ihre Karte, um die Botschaft des Tages zu enthüllen",
    "revelation.instruction.reading":
      "Klicken Sie auf jede Karte, um Ihr Schicksal zu enthüllen",
    "revelation.flipCard.reveal": "Berühren zum Enthüllen",
    "revelation.summary.seeMore": "Mehr anzeigen ↓",
    "revelation.summary.seeLess": "Weniger anzeigen ↑",
    "revelation.revealButton": "Offenbarung",
    "revelation.backToSelection": "Zurück zur Auswahl",
    "interpretation.advice.title": "Dein persönlicher Rat",
    "revelation.subtitle.revealed": "Betrachte deine aufgedeckten Karten",
    "revelation.summary.subtitle": "Die Hauptenergien deiner Legung",

    // Interpretation Templates
    "interpretation.gender.femme": "Meine Liebe",
    "interpretation.gender.homme": "Mein Lieber",
    "interpretation.gender.autre": "Liebe Seele",
    "interpretation.daily.greeting":
      "Hallo {name}! Hier ist dein Rat für diesen schönen Tag.",
    "interpretation.daily.zodiac": "Als {zodiacSign} ",
    "interpretation.daily.cardMessage":
      'hat die Karte "{cardName}" heute eine besondere Energie für dich.',
    "interpretation.daily.wisdom":
      "Als {zodiacSign} hast du die nötige Weisheit, um diesen Rat gut zu nutzen. Vertraue auf deinen Instinkt und lass diese positive Energie deine heutigen Handlungen leiten.",
    "interpretation.daily.closing":
      "Schönen Tag {genderText} {name}, und mögen die Sterne deinen Weg erhellen!",
    "interpretation.tarot.greeting":
      "Hallo {name}! Also, deine Tarot-Lesung sagt mir interessante Dinge.",
    "interpretation.tarot.past":
      "{cardName} in deiner Vergangenheit zeigt, dass du Momente erlebt hast, die dich wirklich haben wachsen lassen. Es war nicht immer einfach, aber es hat dich stärker gemacht.",
    "interpretation.tarot.present":
      "Im Moment beeinflusst {cardName} dein Leben auf positive Weise. Du befindest dich in einer Zeit, in der sich die Dinge bewegen, und das ist ein gutes Zeichen für die Zukunft.",
    "interpretation.tarot.future":
      "Für deine Zukunft kündigt {cardName} schöne Dinge an! Du kannst glückliche Veränderungen erwarten, die dir Zufriedenheit bringen werden.",
    "interpretation.tarot.advice":
      "Mein Rat: {name}, mit deinem Charakter als {zodiacSign}, vertraue auf deinen Instinkt. Du hast alles, was du zum Erfolg brauchst!",
    "interpretation.angels.greeting":
      "Hallo {name}! Deine Schutzengel haben leuchtende Offenbarungen für dich.",
    "interpretation.angels.past":
      "Auf deinem vergangenen Weg hat {cardName} göttliche Samen gesät: {cardMeaning}. Diese Segnungen haben deine Seele genährt und dich darauf vorbereitet, die bedingungslose Liebe zu empfangen, die dich jetzt umgibt.",
    "interpretation.angels.present":
      "In diesem präzisen Moment erleuchtet {cardName} deine Gegenwart: {cardMeaning}. Dieses himmlische Licht führt jeden deiner Schritte und verwandelt deine Herausforderungen in Möglichkeiten für spirituelles Wachstum.",
    "interpretation.angels.future":
      "Zu deiner strahlenden Zukunft hin entfaltet {cardName} seine schützenden Flügel: {cardMeaning}. Die Tore des Himmels öffnen sich vor dir und enthüllen einen Weg, der mit Wundern und Synchronizitäten gepflastert ist.",
    "interpretation.angels.message":
      "Engelhafte Übertragung: {genderText} {name}, dein Wesen als {zodiacSign} schwingt in Harmonie mit diesen göttlichen Frequenzen. Lass dein Herz sich für diese Botschaften reiner Liebe öffnen und bleibe empfänglich{genderSuffix} für die Zeichen, die deine Führer dir senden!",
    "interpretation.runes.greeting":
      "Heil dir {name}! Die alten nordischen Runen enthüllen die Geheimnisse deines Kriegerschicksals.",
    "interpretation.runes.past":
      "Deine Vergangenheitsrune, {cardName}, offenbart: {cardMeaning}. Diese Urkräfte haben deinen Charakter durch Feuer und Eis geformt und dich mit alter Weisheit auf die heutigen Herausforderungen vorbereitet.",
    "interpretation.runes.present":
      "Gerade jetzt leitet {cardName} deine Schritte: {cardMeaning}. Diese runische Energie erleuchtet deinen aktuellen Pfad und verbindet dich mit den mystischen Kräften, die dein tägliches Leben regieren.",
    "interpretation.runes.future":
      "In die Zukunft hinein verkündet {cardName}: {cardMeaning}. Diese runische Prophezeiung zeichnet den Weg deiner künftigen Errungenschaften vor, wo du siegreich unter der Ägide der nordischen Götter erstrahlen wirst.",
    "interpretation.runes.advice":
      "Denke daran, {genderText} {name}: als {zodiacSign} trägst du das Wikinger-Erbe in deinem Blut. Die Runen haben gesprochen - folge ihrer Führung mit Mut und Entschlossenheit!",
    "interpretation.fallback.zodiac": "intuitive Person",
    "interpretation.fallback.angels": "leuchtendes Wesen",
    "interpretation.fallback.runes": "Kämpfer",
    "interpretation.title.daily": "Interpretation für {name}",
    "interpretation.title.reading": "Kartenlegung für {name}",
    "interpretation.subtitle": "Hier ist deine persönliche Offenbarung",
    "interpretation.backToCards": "Zurück zu den Karten",
    "interpretation.newConsultation": "Neue Beratung",

        // Liebesrechner
        "loveCalculator.name1Label": "Erster Vorname",
        "loveCalculator.name1Placeholder": "Bsp.: Marie",
        "loveCalculator.name2Label": "Zweiter Vorname",
        "loveCalculator.name2Placeholder": "Bsp.: Lucas",
        "loveCalculator.calculateButton": "Kompatibilität berechnen",
        "loveCalculator.calculating": "Kompatibilität wird analysiert...",
        "loveCalculator.newCalculation": "Neue Berechnung",
        "loveCalculator.note": "Der Wert bleibt für dasselbe Namenspaar gleich… ändert sich jedoch jeden Tag! Komm morgen wieder! ⚠️ Dieser Rechner dient nur zur Unterhaltung, deine Ergebnisse sind rein zum Spaß gedacht!",
        "loveCalculator.dailyMode": "Tagesmodus",
        "loveCalculator.dailyModeDesc": "Der Prozentsatz ändert sich jeden Tag!",
        "loveCalculator.standardMode": "Standardmodus",
        "loveCalculator.standardModeDesc": "Festes und dauerhaftes Ergebnis",
        "oracle.loveCalculator.badge": "NEU",
        "oracle.loveCalculator.description": "Berechnet die Kompatibilität zwischen zwei Vornamen",
        "loveCalculator.error": "Bitte gib beide Vornamen ein.",
        "loveCalculator.dayScore": "Tageswertung",
        "loveCalculator.dayAdvice": "Tagesrat",
        "loveCalculator.title": "Kompatibilität des Tages",
        "oracle.loveCalculator.title": "Kompatibilität des Tages",
        "loveCalculator.subtitle": "Entdecke jeden Tag die Kompatibilität zwischen zwei Vornamen — in Liebe oder Freundschaft.",
        "loveCalculator.today": "Heute",
        "loveCalculator.changeMode": "Modus wechseln",
        "loveCalculator.back": "Zurück",
        "loveCalculator.mode.subtitle": "Energien werden je nach eurer Verbindung unterschiedlich interpretiert.",
        "loveCalculator.mode.love": "Liebe",
        "loveCalculator.mode.love.subtitle": "Romantische Verbindung",
        "loveCalculator.mode.friendship": "Freundschaft",
        "loveCalculator.mode.friendship.subtitle": "Freundschaftliche Verbindung",
        "loveCalculator.mode.calculateButton": "Tageskompatibilität anzeigen",
        "loveCalculator.modeLabel.love": "Liebe",
        "loveCalculator.modeLabel.friendship": "Freundschaft",
        "loveCalculator.separator.love": "und",
        "loveCalculator.separator.friendship": "und",
        "loveCalculator.dateFormat.weekday": "long",
        "loveCalculator.dateFormat.day": "numeric",
        "loveCalculator.dateFormat.month": "long",
        "loveCalculator.day.sun": "Sonntag",
        "loveCalculator.day.mon": "Montag",
        "loveCalculator.day.tue": "Dienstag",
        "loveCalculator.day.wed": "Mittwoch",
        "loveCalculator.day.thu": "Donnerstag",
        "loveCalculator.day.fri": "Freitag",
        "loveCalculator.day.sat": "Samstag",
        "loveCalculator.month.jan": "Januar",
        "loveCalculator.month.feb": "Februar",
        "loveCalculator.month.mar": "März",
        "loveCalculator.month.apr": "April",
        "loveCalculator.month.may": "Mai",
        "loveCalculator.month.jun": "Juni",
        "loveCalculator.month.jul": "Juli",
        "loveCalculator.month.aug": "August",
        "loveCalculator.month.sep": "September",
        "loveCalculator.month.oct": "Oktober",
        "loveCalculator.month.nov": "November",
        "loveCalculator.month.dec": "Dezember",

        // ── ERGEBNISSE LIEBESMODUS ───────────────────────────────────────────────────
        // Titel
        "loveCalculator.love.results.incompatible.title": "Gegensätzliche Energien",
        "loveCalculator.love.results.veryWeak.title": "Schwaches Signal",
        "loveCalculator.love.results.weak.title": "Zaghafte Verbindung",
        "loveCalculator.love.results.lowModerate.title": "Gemischte Energie",
        "loveCalculator.love.results.moderate.title": "Ungewisser Funke",
        "loveCalculator.love.results.goodStart.title": "Schöner Tag",
        "loveCalculator.love.results.promising.title": "Vielversprechender Tag",
        "loveCalculator.love.results.strong.title": "Starke Resonanz",
        "loveCalculator.love.results.exceptional.title": "Seltene Übereinstimmung",
        "loveCalculator.love.results.perfect.title": "Außergewöhnlicher Tag",
        
        // Nachrichten — Inkompatibel (25–39%)
        "loveCalculator.love.results.incompatible.message1": "Heute gehen eure Energien in sehr unterschiedliche Richtungen. Es ist kein guter Tag, um eine Verbindung zu erzwingen.",
        "loveCalculator.love.results.incompatible.message2": "Die heutigen Schwingungen fördern keine romantische Harmonie zwischen diesen beiden Namen. Besser, ihr gebt euch Raum.",
        "loveCalculator.love.results.incompatible.message3": "Dieser Tag trägt nicht die richtigen Frequenzen für dieses Liebesduo. Der Austausch kann schwierig und wenig fließend sein.",
        "loveCalculator.love.results.incompatible.message4": "Die heutige Ausrichtung ist für diese Verbindung nicht günstig. Kein romantischer Funke in den Energien des Tages.",
        "loveCalculator.love.results.incompatible.message5": "Die Sterne deuten heute auf getrennte Wege hin. Ein Tag, den man besser getrennt verbringt.",
        "loveCalculator.love.results.incompatible.message6": "Dieser Tag schafft keine gemeinsame Basis zwischen euren Energien. Nichts ist blockiert — morgen kann sich alles ändern.",
        // Ratschläge — Inkompatibel
        "loveCalculator.love.results.incompatible.advice1": "Nutzt diesen Tag für euch selbst. Bleibt in eurer eigenen Energie und schaut morgen neu darauf.",
        "loveCalculator.love.results.incompatible.advice2": "Heute ist kein guter Tag für emotionale Gespräche oder gemeinsame Entscheidungen.",
        "loveCalculator.love.results.incompatible.advice3": "Gebt euch heute Raum. Morgen könnten die Energien anders sein.",

        // Nachrichten — Sehr Schwach (40–49%)
        "loveCalculator.love.results.veryWeak.message1": "Heute ist die romantische Verbindung zwischen diesen Namen sehr subtil. Es braucht Mühe, auf dieselbe Wellenlänge zu kommen.",
        "loveCalculator.love.results.veryWeak.message2": "Die Energien berühren sich heute kaum auf romantischer Ebene. Kein schlechter Tag, aber es fehlt an Schwung.",
        "loveCalculator.love.results.veryWeak.message3": "Das romantische Signal ist heute schwach. Nichts Endgültiges, aber kein besonders starker Tag.",
        "loveCalculator.love.results.veryWeak.message4": "Dieser Tag verstärkt eure romantische Verbindung nicht. Sie ist da, aber bleibt im Hintergrund.",
        "loveCalculator.love.results.veryWeak.message5": "Eure Frequenzen überschneiden sich heute kaum im Herzen. Haltet eure Erwartungen gering.",
        "loveCalculator.love.results.veryWeak.message6": "Heute fließt die romantische Energie nur schwer zwischen euch. Morgen kann alles anders sein.",
        // Ratschläge — Sehr Schwach
        "loveCalculator.love.results.veryWeak.advice1": "Haltet den Austausch einfach und ohne Druck.",
        "loveCalculator.love.results.veryWeak.advice2": "Ein ruhiger gemeinsamer Tag reicht völlig aus.",
        "loveCalculator.love.results.veryWeak.advice3": "Kommt morgen wieder — die Energien erneuern sich.",

        // Nachrichten — Schwach (50–54%)
        "loveCalculator.love.results.weak.message1": "Heute brennt die Liebesflamme, aber nur schwach. Es ist etwas da, aber noch nicht intensiv.",
        "loveCalculator.love.results.weak.message2": "Der Tag bringt eine leichte romantische Verbindung. Die Basis ist da, aber die Energie ist noch nicht stark.",
        "loveCalculator.love.results.weak.message3": "Eine fragile Verbindung entsteht heute. Schöne Momente sind möglich, aber ohne große Intensität.",
        "loveCalculator.love.results.weak.message4": "Die heutigen Schwingungen sind sanft, aber nicht intensiv. Ein angenehmer, aber unvergesslicher Tag.",
        "loveCalculator.love.results.weak.message5": "Ein neutraler Tag für das Herz. Nichts Starkes, aber auch nichts Negatives.",
        "loveCalculator.love.results.weak.message6": "Eure Energien begegnen sich, verschmelzen aber nicht ganz.",
        // Ratschläge — Schwach
        "loveCalculator.love.results.weak.advice1": "Kleine liebevolle Gesten sind heute ideal.",
        "loveCalculator.love.results.weak.advice2": "Genießt ruhige Momente ohne große Erwartungen.",
        "loveCalculator.love.results.weak.advice3": "Beobachtet, wie sich die Energie entwickelt.",

        // Nachrichten — Begrenztes Potenzial (55–59%)
        "loveCalculator.love.results.lowModerate.message1": "Heute mischen sich kompatible und weniger kompatible Energien. Verbindung ist möglich, braucht aber Anpassung.",
        "loveCalculator.love.results.lowModerate.message2": "Heute läuft es in Wellen zwischen euch. Manche Momente sind leicht, andere schwieriger.",
        "loveCalculator.love.results.lowModerate.message3": "Die Kompatibilität ist heute wechselhaft. Nichts Dramatisches, aber etwas Balance ist nötig.",
        "loveCalculator.love.results.lowModerate.message4": "Der Tag ist teilweise günstig. Verbindung ist möglich, aber nicht mühelos.",
        "loveCalculator.love.results.lowModerate.message5": "Die Energien sind heute gemischt. Nehmt das Gute und lasst den Rest ziehen.",
        "loveCalculator.love.results.lowModerate.message6": "Es gibt Chancen, aber auch Reibungen. Bleibt flexibel.",
        // Ratschläge — Begrenztes Potenzial
        "loveCalculator.love.results.lowModerate.advice1": "Geht ohne Druck in den Tag.",
        "loveCalculator.love.results.lowModerate.advice2": "Spannungen nicht überbewerten.",
        "loveCalculator.love.results.lowModerate.advice3": "Bevorzugt einfache Aktivitäten.",

        // Nachrichten — Unsicherer Funke (60–64%)
        "loveCalculator.love.results.moderate.message1": "Heute liegt etwas in der Luft. Noch unsicher, aber spannend.",
        "loveCalculator.love.results.moderate.message2": "Die Energie ist gemischt. Potenzial ist da, aber zögerlich.",
        "loveCalculator.love.results.moderate.message3": "Eure Frequenzen nähern sich, ohne sich ganz zu vereinen.",
        "loveCalculator.love.results.moderate.message4": "Die Sterne sind heute unentschlossen.",
        "loveCalculator.love.results.moderate.message5": "Zwischen Anziehung und Distanz entsteht Spannung.",
        "loveCalculator.love.results.moderate.message6": "Der Tag spielt mit euren Energien.",
        // Ratschläge — Unsicherer Funke
        "loveCalculator.love.results.moderate.advice1": "Seid präsent ohne zu analysieren.",
        "loveCalculator.love.results.moderate.advice2": "Mehr zuhören als sprechen.",
        "loveCalculator.love.results.moderate.advice3": "Keine schnellen Schlüsse ziehen.",

        // Nachrichten — Schöner Tag (65–69%)
        "loveCalculator.love.results.goodStart.message1": "Heute passen eure Energien gut zusammen. Ein angenehmer Tag.",
        "loveCalculator.love.results.goodStart.message2": "Eine schöne romantische Harmonie entsteht.",
        "loveCalculator.love.results.goodStart.message3": "Die Schwingungen fördern eure Verbindung.",
        "loveCalculator.love.results.goodStart.message4": "Gute Voraussetzungen für das Herz.",
        "loveCalculator.love.results.goodStart.message5": "Eine gemeinsame Energie fließt.",
        "loveCalculator.love.results.goodStart.message6": "Harmonische Frequenzen zwischen euch.",
        // Ratschläge — Schöner Tag
        "loveCalculator.love.results.goodStart.advice1": "Genießt gemeinsame Zeit.",
        "loveCalculator.love.results.goodStart.advice2": "Perfekt für spontane Gesten.",
        "loveCalculator.love.results.goodStart.advice3": "Schaut morgen wieder vorbei.",

        // Nachrichten — Vielversprechend (70–79%)
        "loveCalculator.love.results.promising.message1": "Heute strahlt echte Verbindung zwischen euch.",
        "loveCalculator.love.results.promising.message2": "Eure Bindung wird verstärkt.",
        "loveCalculator.love.results.promising.message3": "Ihr seid auf einer Wellenlänge.",
        "loveCalculator.love.results.promising.message4": "Eure Energien harmonieren gut.",
        "loveCalculator.love.results.promising.message5": "Schöne romantische Chemie.",
        "loveCalculator.love.results.promising.message6": "Die Energie ist auf eurer Seite.",
        // Ratschläge — Vielversprechend
        "loveCalculator.love.results.promising.advice1": "Macht etwas Besonderes.",
        "loveCalculator.love.results.promising.advice2": "Sprecht über eure Gefühle.",
        "loveCalculator.love.results.promising.advice3": "Genießt diese Energie.",

        // Nachrichten — Starke Resonanz (80–89%)
        "loveCalculator.love.results.strong.message1": "Heute schwingen eure Energien stark im Einklang.",
        "loveCalculator.love.results.strong.message2": "Ein sehr günstiger Tag für euch.",
        "loveCalculator.love.results.strong.message3": "Alles wird verstärkt.",
        "loveCalculator.love.results.strong.message4": "Eure Verbindung ist lebendig.",
        "loveCalculator.love.results.strong.message5": "Tiefe entsteht zwischen euch.",
        "loveCalculator.love.results.strong.message6": "Perfekte Harmonie heute.",
        // Ratschläge — Starke Resonanz
        "loveCalculator.love.results.strong.advice1": "Nutzt diesen Tag voll aus.",
        "loveCalculator.love.results.strong.advice2": "Teilt etwas Besonderes.",
        "loveCalculator.love.results.strong.advice3": "Erkennt diese Verbindung an.",

        // Nachrichten — Seltene Ausrichtung (90–94%)
        "loveCalculator.love.results.exceptional.message1": "Heute bringt eine seltene romantische Ausrichtung.",
        "loveCalculator.love.results.exceptional.message2": "Fast perfekte Harmonie.",
        "loveCalculator.love.results.exceptional.message3": "Eine seltene Verbindung entsteht.",
        "loveCalculator.love.results.exceptional.message4": "Etwas Besonderes liegt in der Luft.",
        "loveCalculator.love.results.exceptional.message5": "Außergewöhnliche Energie.",
        "loveCalculator.love.results.exceptional.message6": "Ein einzigartiger Tag.",
        // Ratschläge — Seltene Ausrichtung
        "loveCalculator.love.results.exceptional.advice1": "Erlebt diesen Tag bewusst.",
        "loveCalculator.love.results.exceptional.advice2": "Schafft eine Erinnerung.",
        "loveCalculator.love.results.exceptional.advice3": "Heute war besonders.",

        // Nachrichten — Perfekter Tag (95–98%)
        "loveCalculator.love.results.perfect.message1": "Heute ist einer der seltensten Tage für euch.",
        "loveCalculator.love.results.perfect.message2": "Der Höhepunkt der romantischen Ausrichtung.",
        "loveCalculator.love.results.perfect.message3": "Eine fast mystische Verbindung.",
        "loveCalculator.love.results.perfect.message4": "Alles ist perfekt ausgerichtet.",
        "loveCalculator.love.results.perfect.message5": "Absolute Verbindung.",
        "loveCalculator.love.results.perfect.message6": "Maximale Energie.",
        // Ratschläge — Perfekter Tag
        "loveCalculator.love.results.perfect.advice1": "Macht diesen Tag unvergesslich.",
        "loveCalculator.love.results.perfect.advice2": "Seid ganz im Moment.",
        "loveCalculator.love.results.perfect.advice3": "Diese Energie ist einzigartig.",

        // ── FREUNDSCHAFTS-MODUS ERGEBNISSE ──────────────────────────────────────────
        // Titel
        "loveCalculator.friendship.results.incompatible.title": "Getrennte Frequenzen",
        "loveCalculator.friendship.results.veryWeak.title": "Leise Verbindung",
        "loveCalculator.friendship.results.weak.title": "Leichte Verbindung",
        "loveCalculator.friendship.results.lowModerate.title": "Gemischtes Terrain",
        "loveCalculator.friendship.results.moderate.title": "Zögerliche Verbundenheit",
        "loveCalculator.friendship.results.goodStart.title": "Gute Harmonie",
        "loveCalculator.friendship.results.promising.title": "Strahlende Freundschaft",
        "loveCalculator.friendship.results.strong.title": "Starke Verbundenheit",
        "loveCalculator.friendship.results.exceptional.title": "Seltene Bindung",
        "loveCalculator.friendship.results.perfect.title": "Außergewöhnliche Freunde",

        // Nachrichten — Unvereinbare Freundschaft (25–39%)
        "loveCalculator.friendship.results.incompatible.message1": "Heute gehen eure Freundschaftsenergien in entgegengesetzte Richtungen. Kein guter Tag für gemeinsame Aktivitäten.",
        "loveCalculator.friendship.results.incompatible.message2": "Die heutigen Schwingungen begünstigen keine gemeinsame Verbundenheit. Jeder in seiner eigenen Blase.",
        "loveCalculator.friendship.results.incompatible.message3": "Heute entsteht kein gemeinsamer Boden für dieses Freundespaar. Kein Problem — morgen kann sich alles ändern.",
        "loveCalculator.friendship.results.incompatible.message4": "Die heutige Ausrichtung ist nicht günstig für eure Freundschaft. Gemeinsame Pläne besser vermeiden.",
        "loveCalculator.friendship.results.incompatible.message5": "Die Sterne trennen heute die Energien dieses Duos. Ein Tag für Solo-Aktivitäten.",
        "loveCalculator.friendship.results.incompatible.message6": "Heute treffen eure Freundschaftsfrequenzen nicht aufeinander. Keine Sorge — es ist nicht von Dauer.",
        // Ratschläge — Unvereinbare Freundschaft
        "loveCalculator.friendship.results.incompatible.advice1": "Genießt jeweils euren eigenen Tag. Eine Pause kann der Freundschaft guttun.",
        "loveCalculator.friendship.results.incompatible.advice2": "Trefft heute keine wichtigen Entscheidungen zusammen. Nicht der richtige Zeitpunkt.",
        "loveCalculator.friendship.results.incompatible.advice3": "Kommt morgen wieder — die Freundschaftsenergie erneuert sich täglich.",

        // Nachrichten — Sehr schwache Freundschaft (40–49%)
        "loveCalculator.friendship.results.veryWeak.message1": "Heute ist die Freundschaft zwischen diesen beiden Namen eher leise. Keine besondere Funken, aber auch nichts Negatives.",
        "loveCalculator.friendship.results.veryWeak.message2": "Die Energien kreuzen sich kaum. Ein ruhiger Tag, jeder für sich.",
        "loveCalculator.friendship.results.veryWeak.message3": "Dieser Tag verstärkt eure Verbundenheit nicht merklich. Die Verbindung existiert, bleibt aber heute leise.",
        "loveCalculator.friendship.results.veryWeak.message4": "Die heutigen freundschaftlichen Frequenzen überschneiden sich wenig. Erwartungen niedrig halten.",
        "loveCalculator.friendship.results.veryWeak.message5": "Heute fließt die Freundschaft leicht zwischen diesen Energien. Nichts Starkes, aber auch kein Konflikt.",
        "loveCalculator.friendship.results.veryWeak.message6": "Dieser Tag stellt eure Freundschaft in den Standby-Modus. Kein idealer Tag für große Unternehmungen.",
        // Ratschläge — Sehr schwache Freundschaft
        "loveCalculator.friendship.results.veryWeak.advice1": "Ein Tag getrennt kann ausreichen. Freundschaft muss nicht täglich genährt werden.",
        "loveCalculator.friendship.results.veryWeak.advice2": "Wenn ihr euch seht, haltet den Austausch leicht und einfach.",
        "loveCalculator.friendship.results.veryWeak.advice3": "Kommt morgen wieder — freundschaftliche Energien ändern sich täglich.",

        // Nachrichten — Schwache Freundschaft (50–54%)
        "loveCalculator.friendship.results.weak.message1": "Heute zeigt sich eine leichte Verbundenheit zwischen diesen Namen. Nichts Intensives, aber angenehm.",
        "loveCalculator.friendship.results.weak.message2": "Der Tag bringt sanfte freundschaftliche Energie. Einige schöne Momente ohne große Aufregung möglich.",
        "loveCalculator.friendship.results.weak.message3": "Die Schwingungen sind neutral für eure Verbindung. Ein gewöhnlicher Tag ohne Überraschungen.",
        "loveCalculator.friendship.results.weak.message4": "Die Verbindung ist da, aber leise. Ein Kaffee oder eine Nachricht genügt.",
        "loveCalculator.friendship.results.weak.message5": "Der Tag bietet eine ruhige Grundlage für eure Freundschaft. Keine großen Aufregungen, aber angenehm.",
        "loveCalculator.friendship.results.weak.message6": "Die Energien kommen sich freundlich nahe. Ein Tag für kleine gemeinsame Freuden.",
        // Ratschläge — Schwache Freundschaft
        "loveCalculator.friendship.results.weak.advice1": "Eine kurze Nachricht oder Anruf reicht heute, um die Verbindung zu pflegen.",
        "loveCalculator.friendship.results.weak.advice2": "Trefft euch einfach — keine großen Pläne nötig.",
        "loveCalculator.friendship.results.weak.advice3": "Ein guter Tag für kleine, diskrete Gesten.",

        // Nachrichten — Gemischtes Terrain (55–59%)
        "loveCalculator.friendship.results.lowModerate.message1": "Heute gibt es eine Mischung aus guten und weniger guten Frequenzen. Ihr könnt euch verstehen, aber es kann kleine Reibungen geben.",
        "loveCalculator.friendship.results.lowModerate.message2": "Die Verbundenheit funktioniert in Wellen. Manche Momente fließen, andere weniger.",
        "loveCalculator.friendship.results.lowModerate.message3": "Die Energien schaffen ein kontrastreiches Freundschaftsbild. Nichts Unüberwindbares, etwas Flexibilität ist nützlich.",
        "loveCalculator.friendship.results.lowModerate.message4": "Der Tag bietet teilweise günstigen Boden. Es funktioniert, wenn ihr keine starren Erwartungen habt.",
        "loveCalculator.friendship.results.lowModerate.message5": "Die Schwingungen sind nuanciert. Nehmt das Beste und lasst den Rest ziehen.",
        "loveCalculator.friendship.results.lowModerate.message6": "Es gibt offene Momente und kleine Reibungen. Bleibt flexibel.",
        // Ratschläge — Gemischtes Terrain
        "loveCalculator.friendship.results.lowModerate.advice1": "Geht ohne Druck in den Tag und vermeidet sensible Themen.",
        "loveCalculator.friendship.results.lowModerate.advice2": "Wenn Spannung entsteht, wechselt Thema oder Aktivität.",
        "loveCalculator.friendship.results.lowModerate.advice3": "Leichte Aktivitäten statt tiefer Gespräche wählen.",

        // Nachrichten — Zögerliche Verbundenheit (60–64%)
        "loveCalculator.friendship.results.moderate.message1": "Heute liegt etwas in der Luft. Die Verbundenheit existiert, sucht aber noch ihren Kanal.",
        "loveCalculator.friendship.results.moderate.message2": "Die Energie ist ambivalent. Potenzial ist da, zeigt sich aber noch zurückhaltend.",
        "loveCalculator.friendship.results.moderate.message3": "Frequenzen nähern sich, überschneiden sich aber nicht komplett. Ein Tag zum Beobachten, nicht Handeln.",
        "loveCalculator.friendship.results.moderate.message4": "Die Sterne sind gespalten. Etwas fließt zwischen euch, aber nicht klar.",
        "loveCalculator.friendship.results.moderate.message5": "Leichte Zögerlichkeit in der Verbundenheit. Nichts Besorgniserregendes.",
        "loveCalculator.friendship.results.moderate.message6": "Der Tag spielt mit euren Energien, ohne sie zu fixieren.",
        // Ratschläge — Zögerliche Verbundenheit
        "loveCalculator.friendship.results.moderate.advice1": "Seid verfügbar, ohne die Verbundenheit zu erzwingen.",
        "loveCalculator.friendship.results.moderate.advice2": "Gut zum Zuhören statt Sprechen.",
        "loveCalculator.friendship.results.moderate.advice3": "Keine Schlussfolgerungen aus einem Tag ziehen.",

        // Nachrichten — Gute Harmonie (65–69%)
        "loveCalculator.friendship.results.goodStart.message1": "Heute stimmen eure Energien natürlich überein. Ein fließender, angenehmer Tag.",
        "loveCalculator.friendship.results.goodStart.message2": "Schöne Harmonie zwischen den beiden Freunden.",
        "loveCalculator.friendship.results.goodStart.message3": "Die Schwingungen des Tages fördern gute Verbundenheit.",
        "loveCalculator.friendship.results.goodStart.message4": "Der Boden ist günstig für Freundschaft.",
        "loveCalculator.friendship.results.goodStart.message5": "Gemeinsame Energie fließt gut.",
        "loveCalculator.friendship.results.goodStart.message6": "Frequenzen harmonieren heute.",
        // Ratschläge — Gute Harmonie
        "loveCalculator.friendship.results.goodStart.advice1": "Genießt gemeinsame Momente ohne feste Pläne.",
        "loveCalculator.friendship.results.goodStart.advice2": "Gut für spontane Treffen oder ehrliche Gespräche.",
        "loveCalculator.friendship.results.goodStart.advice3": "Kommt morgen wieder, um die Entwicklung der Energien zu sehen.",

        // Nachrichten — Strahlende Freundschaft (70–79%)
        "loveCalculator.friendship.results.promising.message1": "Heute strahlt echte Freundschaft zwischen diesen Namen.",
        "loveCalculator.friendship.results.promising.message2": "Dieser Tag verstärkt eure Bindung.",
        "loveCalculator.friendship.results.promising.message3": "Ihr seid auf derselben Wellenlänge.",
        "loveCalculator.friendship.results.promising.message4": "Die Freundschaftsenergien schwingen zusammen.",
        "loveCalculator.friendship.results.promising.message5": "Schöne Chemie zwischen euch spürbar.",
        "loveCalculator.friendship.results.promising.message6": "Der Tag begünstigt kleine Gesten der Freundschaft.",
        // Ratschläge — Strahlende Freundschaft
        "loveCalculator.friendship.results.promising.advice1": "Macht heute etwas Besonderes zusammen.",
        "loveCalculator.friendship.results.promising.advice2": "Sagt einander, was ihr füreinander bedeutet.",
        "loveCalculator.friendship.results.promising.advice3": "Genießt diese gemeinsame Energie voll und ganz.",

        // Nachrichten — Starke Verbundenheit (80–89%)
        "loveCalculator.friendship.results.strong.message1": "Heute schwingen eure Energien stark zusammen. Alles fließt natürlich.",
        "loveCalculator.friendship.results.strong.message2": "Besonders günstiger Tag für dieses Duo.",
        "loveCalculator.friendship.results.strong.message3": "Alles, was ihr zusammen macht, wird verstärkt.",
        "loveCalculator.friendship.results.strong.message4": "Die Freundschaft lebt heute stark.",
        "loveCalculator.friendship.results.strong.message5": "Tiefe, seltene Verbindung spürbar.",
        "loveCalculator.friendship.results.strong.message6": "Perfekte Harmonie.",
        // Ratschläge — Starke Verbundenheit
        "loveCalculator.friendship.results.strong.advice1": "Nutzt diesen Tag voll aus.",
        "loveCalculator.friendship.results.strong.advice2": "Teilt etwas Besonderes.",
        "loveCalculator.friendship.results.strong.advice3": "Anerkennt diese starke Verbundenheit.",

        // Nachrichten — Seltene Bindung (90–94%)
        "loveCalculator.friendship.results.exceptional.message1": "Heute bringen die Sterne eine seltene freundschaftliche Ausrichtung.",
        "loveCalculator.friendship.results.exceptional.message2": "Fast perfekte Harmonie umgibt euch.",
        "loveCalculator.friendship.results.exceptional.message3": "Eine seltene Verschmelzung verbindet eure Welten.",
        "loveCalculator.friendship.results.exceptional.message4": "Etwas Ungewöhnliches fließt zwischen euch.",
        "loveCalculator.friendship.results.exceptional.message5": "Eine außergewöhnliche Verbindung definiert diesen Tag.",
        "loveCalculator.friendship.results.exceptional.message6": "Heute ist wirklich einzigartig.",
        // Ratschläge — Seltene Bindung
        "loveCalculator.friendship.results.exceptional.advice1": "Erlebt diesen Tag voll und ohne Sorgen.",
        "loveCalculator.friendship.results.exceptional.advice2": "Schafft heute eine Erinnerung zusammen.",
        "loveCalculator.friendship.results.exceptional.advice3": "Jeder Tag ist anders — heute war besonders.",

        // Nachrichten — Außergewöhnliche Freunde (95–98%)
        "loveCalculator.friendship.results.perfect.message1": "Heute ist einer der seltensten Tage für dieses Duo. Das Universum scheint für euch ausgerichtet.",
        "loveCalculator.friendship.results.perfect.message2": "Maximale freundschaftliche Harmonie heute.",
        "loveCalculator.friendship.results.perfect.message3": "Eine fast mystische Verbindung vereint euch heute.",
        "loveCalculator.friendship.results.perfect.message4": "Alles ist perfekt für eure Verbundenheit.",
        "loveCalculator.friendship.results.perfect.message5": "Absolute Freundschaft prägt den Tag.",
        "loveCalculator.friendship.results.perfect.message6": "Maximale Energie umgibt eure Bindung.",
        // Ratschläge — Außergewöhnliche Freunde
        "loveCalculator.friendship.results.perfect.advice1": "Macht diesen Tag unvergesslich.",
        "loveCalculator.friendship.results.perfect.advice2": "Seid heute ganz füreinander da.",
        "loveCalculator.friendship.results.perfect.advice3": "Diese freundschaftliche Energie ist einzigartig — morgen ist anders.",

    // Variationen für "Schönen Tag"
    "interpretation.daily.closing.var1":
      "Hab einen großartigen Tag {genderText} {name}, und mögen die Sterne deinen Weg erleuchten!",
    "interpretation.daily.closing.var2":
      "Schönen Tag {name}, möge diese Führung dich begleiten!",
    "interpretation.daily.closing.var3":
      "Genieße deinen Tag {name}, die Energien sind bei dir!",
    "interpretation.daily.closing.var4":
      "Hab einen wundervollen Tag {genderText} {name}!",
    "interpretation.daily.closing.var5":
      "Möge dein Tag sanft sein {name}, das Universum passt auf dich auf!",
    "interpretation.daily.closing.var6":
      "Hab einen strahlenden Tag, {genderText} {name}, voller wunderbarer Überraschungen!",
    "interpretation.daily.closing.var7":
      "Hab einen großartigen Tag, {name}, möge positive Energie dich jederzeit begleiten!",
    "interpretation.daily.closing.var8":
      "Möge dir dieser Tag Freude und Gelassenheit bringen, {genderText} {name}!",
    "interpretation.daily.closing.var9":
      "Lächle dem Leben heute zu, {name}, und es lächelt dir zurück!",
    "interpretation.daily.closing.var10":
      "Hab einen inspirierenden Tag, {genderText} {name}, unter dem Schutz der Sterne!",

    // Card Names and Meanings - Runes
    "cards.runes.Fehu.name": "Fehu",
    "cards.runes.Fehu.meaning":
      "Reichtum, Wohlstand, neuer finanzieller Anfang",
    "cards.runes.Uruz.name": "Uruz",
    "cards.runes.Uruz.meaning": "Rohe Kraft, Gesundheit, Transformation",
    "cards.runes.Thurisaz.name": "Thurisaz",
    "cards.runes.Thurisaz.meaning":
      "Verteidigung, Schutz, zerstörerische Kraft",
    "cards.runes.Ansuz.name": "Ansuz",
    "cards.runes.Ansuz.meaning":
      "Göttliche Kommunikation, Inspiration, Weisheit",
    "cards.runes.Raidho.name": "Raidho",
    "cards.runes.Raidho.meaning": "Reise, Bewegung, Fortschritt",
    "cards.runes.Kenaz.name": "Kenaz",
    "cards.runes.Kenaz.meaning": "Wissen, Kreativität, Erleuchtung",
    "cards.runes.Gebo.name": "Gebo",
    "cards.runes.Gebo.meaning": "Geschenk, Austausch, Partnerschaft",
    "cards.runes.Wunjo.name": "Wunjo",
    "cards.runes.Wunjo.meaning": "Freude, Glück, Harmonie",
    "cards.runes.Hagalaz.name": "Hagalaz",
    "cards.runes.Hagalaz.meaning": "Störung, erzwungene Veränderung, Reinigung",
    "cards.runes.Nauthiz.name": "Nauthiz",
    "cards.runes.Nauthiz.meaning": "Notwendigkeit, Zwang, karmische Lektion",
    "cards.runes.Isa.name": "Isa",
    "cards.runes.Isa.meaning": "Eis, Stagnation, Geduld",
    "cards.runes.Jera.name": "Jera",
    "cards.runes.Jera.meaning": "Ernte, Zyklen, Belohnung",
    "cards.runes.Eihwaz.name": "Eihwaz",
    "cards.runes.Eihwaz.meaning": "Ausdauer, Schutz, spirituelle Verbindung",
    "cards.runes.Perthro.name": "Perthro",
    "cards.runes.Perthro.meaning": "Geheimnis, Schicksal, verborgene Kräfte",
    "cards.runes.Algiz.name": "Algiz",
    "cards.runes.Algiz.meaning": "Göttlicher Schutz, Verbindung zu Führern",
    "cards.runes.Sowilo.name": "Sowilo",
    "cards.runes.Sowilo.meaning": "Erfolg, Sieg, Sonnenenergie",
    "cards.runes.Tiwaz.name": "Tiwaz",
    "cards.runes.Tiwaz.meaning": "Sieg, Gerechtigkeit, ehrenvolles Opfer",
    "cards.runes.Berkano.name": "Berkano",
    "cards.runes.Berkano.meaning": "Wachstum, Fruchtbarkeit, neuer Zyklus",
    "cards.runes.Ehwaz.name": "Ehwaz",
    "cards.runes.Ehwaz.meaning": "Bewegung, Fortschritt, Partnerschaft",
    "cards.runes.Mannaz.name": "Mannaz",
    "cards.runes.Mannaz.meaning": "Menschlichkeit, Selbst, Intelligenz",
    "cards.runes.Laguz.name": "Laguz",
    "cards.runes.Laguz.meaning": "Wasser, Intuition, Emotionen",
    "cards.runes.Ingwaz.name": "Ingwaz",
    "cards.runes.Ingwaz.meaning": "Männliche Fruchtbarkeit, kreative Energie",
    "cards.runes.Dagaz.name": "Dagaz",
    "cards.runes.Dagaz.meaning": "Erwachen, Transformation, neuer Tag",
    "cards.runes.Othala.name": "Othala",
    "cards.runes.Othala.meaning": "Erbe, Eigentum, Familientradition",

    // Liebesorakel-Auslegung
    "crossSpread.positions.present": "Die Gegenwart",
    "crossSpread.positions.obstacle": "Das Hindernis",
    "crossSpread.positions.past": "Die Vergangenheit",
    "crossSpread.positions.future": "Die Zukunft",
    "crossSpread.positions.synthesis": "Die Zusammenfassung",
    "crossSpread.interpretation.title": "Dein Kreuz-Legesystem",
    "crossSpread.interpretation.subtitle": "{name}, deine Auslegung zeigt einen Liebesweg voller Erkenntnisse.",
    "crossSpread.interpretation.sections.positive": "Positive Aspekte",
    "crossSpread.interpretation.sections.attention": "Worauf du achten solltest",
    "crossSpread.interpretation.sections.advice": "Ratschlag",
    "crossSpread.interpretation.newConsultation": "Neue Befragung",
    "gameMode.classic.title": "3-Karten-Ziehung",
    "gameMode.classic.description": "Erhalte sofortige Liebesführung mit einer einfachen und intuitiven 3-Karten-Lesung.",
    "gameMode.classic.features": "3 Karten • Schnelle Einsicht • Persönliche Botschaft",
    "gameMode.cross.title": "Kreuz-Legung",
    "gameMode.cross.description": "Eine tiefere Auslegung mit 5 Positionen zur Analyse deiner Liebessituation",
    "oracle.loveOracle.title": "Liebesorakel",
    "oracle.loveOracle.description": "Erfahre, was die Zukunft in der Liebe für dich bereithält.",
    "crossSpread.title": "Kreuzlegung – Liebesorakel",
    "crossSpread.description": "Diese Legung untersucht deine romantische Situation anhand von drei Aspekten: unterstützende Energien (Pro), Hindernisse oder Blockaden (Kontra) und die abschließende Botschaft (Synthese). Jede Karte zeigt eine spezifische Variation entsprechend deiner Ziehung.",
    "interpretation.loveOracle.greeting": "Das enthüllt deine Liebeslegung",
    "revelation.personalAdvice": "Dein persönlicher Rat",
    "common.loading": "Wird geladen...",
        "gameMode.classic.cta": "Orakel befragen",
        "gameMode.cross.cta": "Orakel befragen",

    // Namen der Liebesorakel-Karten
    "cards.loveOracle.lerendezvous.name": "Die Begegnung",
    "cards.loveOracle.lemessage.name": "Die Nachricht",
    "cards.loveOracle.ledesir.name": "Das Verlangen",
    "cards.loveOracle.lecoeurouvert.name": "Das Offene Herz",
    "cards.loveOracle.lecoeurferme.name": "Das Geschlossene Herz",
    "cards.loveOracle.lechoix.name": "Die Wahl",
    "cards.loveOracle.leretour.name": "Die Rückkehr",
    "cards.loveOracle.ladistance.name": "Die Distanz",
    "cards.loveOracle.lunion.name": "Die Vereinigung",
    "cards.loveOracle.lemasque.name": "Die Maske",
    "cards.loveOracle.lapassion.name": "Die Leidenschaft",
    "cards.loveOracle.lachance.name": "Das Glück",
    "cards.loveOracle.ledestin.name": "Das Schicksal",
    "cards.loveOracle.lesilence.name": "Die Stille",
    "cards.loveOracle.laverite.name": "Die Wahrheit",
    "cards.loveOracle.lecadeau.name": "Das Geschenk",
    "cards.loveOracle.lablessure.name": "Die Wunde",
    "cards.loveOracle.lenouveaudepart.name": "Der Neuanfang",
    "cards.loveOracle.lafusion.name": "Die Verschmelzung",
    "cards.loveOracle.latentation.name": "Die Versuchung",
    "cards.loveOracle.laprotection.name": "Der Schutz",
    "cards.loveOracle.laliberation.name": "Die Befreiung",

    // ========== LABELS DER 3 ENERGIEN ==========
    // Für das Orakel der Liebe
    "interpretation.loveOracle.energy1.label": "Dominierende Energie",
    "interpretation.loveOracle.energy1.subtitle": "Was du innerlich fühlst",
    "interpretation.loveOracle.energy2.label": "Äußere Einflüsse",
    "interpretation.loveOracle.energy2.subtitle": "Was um dich herum passiert",
    "interpretation.loveOracle.energy3.label": "Mögliche Entwicklung",
    "interpretation.loveOracle.energy3.subtitle": "Was bald passieren könnte",

    // Kartennamen und Bedeutungen - Liebesorakel - 3 Karten-Lesung
    // Das Rendezvous — Dominierende Energie (was du fühlst)
    "cards.loveOracle.lerendezvous.meaning.energy1.var1": "Du wartest sehnsüchtig auf dieses Treffen, dein Herz ist voller Hoffnung und Aufregung.",
    "cards.loveOracle.lerendezvous.meaning.energy1.var2": "Dein Geist ist auf dieses Treffen konzentriert, und du stellst dir bereits intensive und angenehme Momente vor.",
    "cards.loveOracle.lerendezvous.meaning.energy1.var3": "Du fühlst eine Mischung aus Nervosität und Verlangen, aber du bist bereit, diesen Moment in vollen Zügen zu genießen.",
    // Das Rendezvous — Äußere Einflüsse (was um dich herum passiert)
    "cards.loveOracle.lerendezvous.meaning.energy2.var1": "Die Person, die du treffen wirst, scheint ebenfalls ungeduldig zu sein und könnte etwas Besonderes für dich vorbereitet haben.",
    "cards.loveOracle.lerendezvous.meaning.energy2.var2": "Bestimmte Umstände oder Ereignisse könnten dieses Treffen unvergesslich machen oder es ein wenig komplizieren.",
    "cards.loveOracle.lerendezvous.meaning.energy2.var3": "Dein Umfeld könnte dich ermutigen und dir Ratschläge geben, damit dieses Treffen so gut wie möglich verläuft.",
    // Das Rendezvous — Mögliche Entwicklung (was bald passieren könnte)
    "cards.loveOracle.lerendezvous.meaning.energy3.var1": "Dieses Treffen könnte eine starke Verbindung schaffen und dich dieser Person auf bedeutende Weise näherbringen.",
    "cards.loveOracle.lerendezvous.meaning.energy3.var2": "Auch wenn nicht alles perfekt läuft, wird dieses Treffen dir intensive Emotionen und wertvolle Erinnerungen bringen.",
    "cards.loveOracle.lerendezvous.meaning.energy3.var3": "Es ist möglich, dass eine Offenbarung oder eine Geste während dieses Treffens die Dynamik deiner Beziehung verändert und neue Perspektiven eröffnet.",
    // Die Nachricht — Dominierende Energie (was du fühlst)
    "cards.loveOracle.lemessage.meaning.energy1.var1": "Du wartest auf eine Nachricht, bist dir aber nicht sicher, wann sie kommen wird, und fragst dich, ob diese Person dir wirklich schreiben wird.",
    "cards.loveOracle.lemessage.meaning.energy1.var2": "Jemand zögert, dir eine Nachricht zu senden, und das erzeugt eine Mischung aus Hoffnung und Zweifel in deinem Herzen.",
    "cards.loveOracle.lemessage.meaning.energy1.var3": "Du wartest und weißt nicht, ob die Nachricht kommen wird, und das lässt dich darüber nachdenken, was du wirklich willst.",
    // Die Nachricht — Äußere Einflüsse (was um dich herum passiert)
    "cards.loveOracle.lemessage.meaning.energy2.var1": "Die betroffene Person könnte dir eine Nachricht senden, die die Dynamik zwischen euch verändert.",
    "cards.loveOracle.lemessage.meaning.energy2.var2": "Externe Ereignisse oder Ratschläge von Freunden könnten beeinflussen, was du erhältst oder wann du es erhältst.",
    "cards.loveOracle.lemessage.meaning.energy2.var3": "Es ist möglich, dass die Nachricht unerwartet, aufschlussreich oder sogar ein Auslöser für den nächsten Schritt in deiner Beziehung ist.",
    // Die Nachricht — Mögliche Entwicklung (was bald passieren könnte)
    "cards.loveOracle.lemessage.meaning.energy3.var1": "Wenn du geduldig und aufmerksam bist, könnte dir diese Nachricht wichtige Neuigkeiten oder Klarheit bringen.",
    "cards.loveOracle.lemessage.meaning.energy3.var2": "Diese Nachricht könnte dich überraschen, starke Emotionen hervorrufen und dich in deinen nächsten romantischen Entscheidungen leiten.",
    "cards.loveOracle.lemessage.meaning.energy3.var3": "Auch wenn die Nachricht nicht genau das ist, was du erwartet hast, könnte sie dir helfen, voranzukommen und die Situation besser zu verstehen.",
    // Das Verlangen — Dominierende Energie (was du fühlst)
    "cards.loveOracle.ledesir.meaning.energy1.var1": "Dein Körper und dein Herz brennen für diese Person, und du träumst von intensiven und sinnlichen Momenten mit ihr.",
    "cards.loveOracle.ledesir.meaning.energy1.var2": "Jeder Gedanke, jeder Blick entfacht dein Verlangen und lässt dich leidenschaftliche Momente vorstellen.",
    "cards.loveOracle.ledesir.meaning.energy1.var3": "Du hast den unwiderstehlichen Drang, dich zu nähern und diese körperliche und emotionale Verbindung zu spüren.",
    // Das Verlangen — Äußere Einflüsse (was um dich herum passiert)
    "cards.loveOracle.ledesir.meaning.energy2.var1": "Die Person, die du begehrst, könnte auch diese intensive Anziehung spüren, was heiße und unerwartete Momente schafft.",
    "cards.loveOracle.ledesir.meaning.energy2.var2": "Situationen oder geteilte Blicke könnten deine Emotionen entfachen und dieses fast unwiderstehliche Verlangen verstärken.",
    "cards.loveOracle.ledesir.meaning.energy2.var3": "Sei vorsichtig, die Intensität könnte stark und überraschend sein, und manchmal musst du diese Leidenschaft managen, um Komplikationen zu vermeiden.",
    // Das Verlangen — Mögliche Entwicklung (was bald passieren könnte)
    "cards.loveOracle.ledesir.meaning.energy3.var1": "Wenn du diesem Verlangen nachgibst, könntest du heiße Momente und leidenschaftliche Begegnungen erleben, die dein Herz prägen.",
    "cards.loveOracle.ledesir.meaning.energy3.var2": "Dieses Verlangen könnte sich in eine sehr intensive Verbindung verwandeln, aber sei vorsichtig mit den Konsequenzen, wenn die Person unerreichbar oder kompliziert ist.",
    "cards.loveOracle.ledesir.meaning.energy3.var3": "Auch wenn die Situation heikel ist, könnte es dir ermöglichen, sinnliche und emotional kraftvolle Momente zu erleben, wenn du deinem Verlangen nachgibst.",
    // Das Offene Herz — Dominierende Energie (was du fühlst)
    "cards.loveOracle.lecoeurouvert.meaning.energy1.var1": "Dein Herz ist bereit, sich zu öffnen und jemanden neuen ohne Angst oder Zurückhaltung zu empfangen.",
    "cards.loveOracle.lecoeurouvert.meaning.energy1.var2": "Du verspürst den tiefen Wunsch nach Teilen und Verbindung und möchtest dich nicht mehr schützen.",
    "cards.loveOracle.lecoeurouvert.meaning.energy1.var3": "Du bist sensibel und empfänglich für die Emotionen anderer und dein Herz öffnet sich leicht für die Liebe.",
    // Das Offene Herz — Äußere Einflüsse (was um dich herum passiert)
    "cards.loveOracle.lecoeurouvert.meaning.energy2.var1": "Jemand in deiner Nähe ermutigt dich, dich zu öffnen und deine Gefühle zu zeigen, auch wenn es dir Angst macht.",
    "cards.loveOracle.lecoeurouvert.meaning.energy2.var2": "Ereignisse um dich herum drängen dich zur Verbindung, was dich dazu bringen könnte, schnell zu verlieben.",
    "cards.loveOracle.lecoeurouvert.meaning.energy2.var3": "Vorsicht, manche könnten deine Sensibilität und Offenheit ausnutzen, also bleib vorsichtig.",
    // Das Offene Herz — Mögliche Entwicklung (was bald passieren könnte)
    "cards.loveOracle.lecoeurouvert.meaning.energy3.var1": "Wenn du offen und aufrichtig bleibst, könnte eine wichtige Begegnung dein Liebesleben verändern.",
    "cards.loveOracle.lecoeurouvert.meaning.energy3.var2": "Deine Offenheit könnte mit intensiven Momenten der Verbindung belohnt werden, aber auch mit Wunden, wenn du nicht vorsichtig bist.",
    "cards.loveOracle.lecoeurouvert.meaning.energy3.var3": "Indem du deinem Herz folgst, könntest du eine starke Beziehung erleben, aber vergiss nicht, Grenzen zu setzen.",
    // Das Geschlossene Herz — Dominierende Energie (was du fühlst)
    "cards.loveOracle.lecoeurferme.meaning.energy1.var1": "Dein Herz ist verschlossen und es fällt dir schwer, anderen zu vertrauen, selbst denen, die du liebst.",
    "cards.loveOracle.lecoeurferme.meaning.energy1.var2": "Du schützt dich vor vergangenem Schmerz und Enttäuschungen und verweigerst es, deine wahren Gefühle zu zeigen.",
    "cards.loveOracle.lecoeurferme.meaning.energy1.var3": "Du spürst eine emotionale Distanz, als wärst du in Bezug auf Liebe und Intimität auf der Hut.",
    // Das Geschlossene Herz — Äußere Einflüsse (was um dich herum passiert)
    "cards.loveOracle.lecoeurferme.meaning.energy2.var1": "Menschen oder kürzliche Situationen haben dich verletzt und dein Misstrauen und deine Vorsicht verstärkt.",
    "cards.loveOracle.lecoeurferme.meaning.energy2.var2": "Jemand könnte versuchen, sich zu nähern, aber du ignorierst oder weist die Zeichen unbeabsichtigt ab.",
    "cards.loveOracle.lecoeurferme.meaning.energy2.var3": "Dein Umfeld könnte dich ermutigen, dich zu öffnen, aber du zögerst noch, aus Angst, dich zu irren oder verletzt zu werden.",
    // Das Geschlossene Herz — Mögliche Entwicklung (was bald passieren könnte)
    "cards.loveOracle.lecoeurferme.meaning.energy3.var1": "Wenn du dein Herz weiterhin verschließt, könntest du eine wichtige und aufrichtige Begegnung verpassen.",
    "cards.loveOracle.lecoeurferme.meaning.energy3.var2": "Mit der Zeit und Vertrauen könntest du dich allmählich öffnen und eine wahre Beziehung erleben, aber es wird Mut erfordern.",
    "cards.loveOracle.lecoeurferme.meaning.energy3.var3": "Ein unerwartetes Ereignis oder eine Person könnte dich dazu bringen, deine Abwehrmechanismen abzubauen und die Liebe hereinzulassen, auch wenn es dir Angst macht.",
    // Die Wahl — Dominierende Energie (was du fühlst)
    "cards.loveOracle.lechoix.meaning.energy1.var1": "Du fühlst dich zwischen zwei Personen oder zwei Richtungen hin- und hergerissen, und dein Herz weiß nicht, welche es folgen soll.",
    "cards.loveOracle.lechoix.meaning.energy1.var2": "Du denkst viel über deine Gefühle nach und versuchst zu verstehen, was du wirklich in der Liebe willst.",
    "cards.loveOracle.lechoix.meaning.energy1.var3": "Eine wichtige Entscheidung steht bevor und du fühlst sowohl Aufregung als auch Angst, die falsche Wahl zu treffen.",
    // Die Wahl — Äußere Einflüsse (was um dich herum passiert)
    "cards.loveOracle.lechoix.meaning.energy2.var1": "Externe Meinungen oder Ratschläge könnten dein Nachdenken verkomplizieren und dich an deinen eigenen Gefühlen zweifeln lassen.",
    "cards.loveOracle.lechoix.meaning.energy2.var2": "Einige Menschen in deinem Umfeld haben ihre eigenen Interessen und könnten versuchen, deine Entscheidungen zu ihren Gunsten zu beeinflussen.",
    "cards.loveOracle.lechoix.meaning.energy2.var3": "Dein Umfeld könnte dich auch unterstützen und dir helfen, zu klären, was du wirklich willst, auch wenn der Weg weiterhin schwierig bleibt.",
    // Die Wahl — Mögliche Entwicklung (was bald passieren könnte)
    "cards.loveOracle.lechoix.meaning.energy3.var1": "Wenn du auf dein Herz und deine Instinkte hörst, wirst du eine Wahl treffen, die zu dir passt und dir Glück bringt.",
    "cards.loveOracle.lechoix.meaning.energy3.var2": "Es ist möglich, dass deine Zögerlichkeiten eine Gelegenheit verpassen lassen, aber es wird dir helfen, dich selbst besser kennenzulernen.",
    "cards.loveOracle.lechoix.meaning.energy3.var3": "Eine wichtige Entscheidung könnte dein aktuelles Gleichgewicht erschüttern, aber sie wird auch den Weg zu einer aufrichtigen und intensiven Beziehung öffnen, wenn du den Schritt wagst.",
    // Die Rückkehr — Dominierende Energie (was du fühlst)
    "cards.loveOracle.leretour.meaning.energy1.var1": "Du spürst ein starkes Verlangen, dass jemand in dein Leben zurückkehrt, und dein Herz hofft auf eine zweite Chance.",
    "cards.loveOracle.leretour.meaning.energy1.var2": "Du bist hin- und hergerissen zwischen der Vergangenheit und der Gegenwart und denkst oft daran, was hätte sein können.",
    "cards.loveOracle.leretour.meaning.energy1.var3": "Ein Gefühl der Nostalgie und des Wartens überkommt dich, als ob ein Teil von dir das Verlorene wiederherstellen möchte.",
    // Die Rückkehr — Äußere Einflüsse (was um dich herum passiert)
    "cards.loveOracle.leretour.meaning.energy2.var1": "Die Person, an deren Rückkehr du denkst, könnte auch das Bedürfnis verspüren, zurückzukehren, zögert jedoch, sich zu melden.",
    "cards.loveOracle.leretour.meaning.energy2.var2": "Ereignisse oder Freunde können diese Rückkehr erleichtern oder verzögern, je nach den Umständen.",
    "cards.loveOracle.leretour.meaning.energy2.var3": "Bestimmte äußere Einflüsse könnten dich dazu drängen, die Beziehung wieder aufzunehmen, aber du musst vorsichtig sein, um nicht die Fehler der Vergangenheit zu wiederholen.",
    // Die Rückkehr — Mögliche Entwicklung (was bald passieren könnte)
    "cards.loveOracle.leretour.meaning.energy3.var1": "Wenn du dich öffnest und dieser Person eine Chance gibst, ist es möglich, eine starke und aufrichtige Verbindung wiederzufinden.",
    "cards.loveOracle.leretour.meaning.energy3.var2": "Eine Rückkehr könnte intensive Emotionen wieder aufleben lassen, aber du musst die Erwartungen klären, um Verletzungen zu vermeiden.",
    "cards.loveOracle.leretour.meaning.energy3.var3": "Es ist auch möglich, dass die Person nicht zurückkehrt, und diese Situation könnte dich dazu bringen, einen Schlussstrich zu ziehen und dich auf eine neue Liebe zu konzentrieren.",
    // Die Distanz — Dominierende Energie (was du fühlst)
    "cards.loveOracle.ladistance.meaning.energy1.var1": "Du spürst eine emotionale oder körperliche Distanz, die dich belastet und an der Beziehung zweifeln lässt.",
    "cards.loveOracle.ladistance.meaning.energy1.var2": "Dein Herz hat Schwierigkeiten, die Leere zu füllen, und du träumst von Nähe und gemeinsamen Momenten.",
    "cards.loveOracle.ladistance.meaning.energy1.var3": "Die Trennung lässt dich ein Gefühl der Leere und manchmal Frustration verspüren, aber du hoffst, dass sich die Dinge verbessern.",
    // Die Distanz — Äußere Einflüsse (was um dich herum passiert)
    "cards.loveOracle.ladistance.meaning.energy2.var1": "Äußere Umstände wie Arbeit, das persönliche Leben oder geografische Lage können diese Distanz aufrechterhalten.",
    "cards.loveOracle.ladistance.meaning.energy2.var2": "Ratschläge oder Druck von Freunden können dich dazu bringen, die Situation zu akzeptieren oder zu versuchen, sie zu überwinden.",
    "cards.loveOracle.ladistance.meaning.energy2.var3": "Es ist möglich, dass jemand versucht, die Distanz zu verringern, aber es wird von deinem Engagement und deinen Entscheidungen abhängen.",
    // Die Distanz — Mögliche Entwicklung (was bald passieren könnte)
    "cards.loveOracle.ladistance.meaning.energy3.var1": "Wenn du dich bemühst, zu kommunizieren und dich zu nähern, könnte sich die Distanz verringern und die Beziehung stärken.",
    "cards.loveOracle.ladistance.meaning.energy3.var2": "Es ist auch möglich, dass die Distanz weiterhin besteht und die Beziehung auf die Probe stellt, wobei sich zeigt, was du wirklich bereit bist zu erleben.",
    "cards.loveOracle.ladistance.meaning.energy3.var3": "Ein unerwartetes Ereignis könnte ein Treffen oder eine Annäherung schaffen, aber du musst schnell handeln, um diese Chance zu ergreifen.",
    // Die Union — Dominierende Energie (was du fühlst)
    "cards.loveOracle.lunion.meaning.energy1.var1": "Du spürst ein tiefes Bedürfnis nach Verbindung und Teilen, und dein Herz sehnt sich nach einer aufrichtigen und dauerhaften Beziehung.",
    "cards.loveOracle.lunion.meaning.energy1.var2": "Du bist bereit, dich zu engagieren und etwas Solides mit jemandem aufzubauen, der wirklich zu dir passt.",
    "cards.loveOracle.lunion.meaning.energy1.var3": "Dein Wunsch nach Nähe und Vertrautheit ist stark, und du suchst nach einer authentischen und tiefen Verbindung.",
    // Die Union — Äußere Einflüsse (was um dich herum passiert)
    "cards.loveOracle.lunion.meaning.energy2.var1": "Die Menschen um dich herum können dich ermutigen, dich zu engagieren und nach einer aufrichtigen Union zu suchen, oder dich vor schlechten Entscheidungen warnen.",
    "cards.loveOracle.lunion.meaning.energy2.var2": "Ereignisse oder kürzliche Begegnungen fördern das Entstehen solider Bindungen und die Möglichkeit, etwas Wahres aufzubauen.",
    "cards.loveOracle.lunion.meaning.energy2.var3": "Achtung, manche äußeren Einflüsse könnten die Beziehung erschweren, aber sie könnten auch die Stärke deiner Bindung offenbaren.",
    // Die Union — Mögliche Entwicklung (was bald passieren könnte)
    "cards.loveOracle.lunion.meaning.energy3.var1": "Wenn du dein Herz und deine Energie investierst, könnte sich sehr bald eine dauerhafte und harmonische Union bilden.",
    "cards.loveOracle.lunion.meaning.energy3.var2": "Es ist möglich, dass die Beziehung Prüfungen durchläuft, aber wenn ihr aufrichtig bleibt und zuhört, wird eure Bindung gestärkt.",
    "cards.loveOracle.lunion.meaning.energy3.var3": "Ein wichtiger Kontakt oder ein Schlüsselereignis könnte eure Beziehung festigen und den Weg für eine tiefe und stabile Liebe ebnen.",
    // Die Maske — Dominierende Energie (was du fühlst)
    "cards.loveOracle.lemasque.meaning.energy1.var1": "Du neigst dazu, deine wahren Emotionen zu verbergen und deine Gefühle nicht zu zeigen, um dich zu schützen.",
    "cards.loveOracle.lemasque.meaning.energy1.var2": "Du spürst eine gewisse emotionale Distanz, als ob du eine Maske trägst, um Schmerz oder Urteil zu vermeiden.",
    "cards.loveOracle.lemasque.meaning.energy1.var3": "Manchmal bist du hin- und hergerissen zwischen dem, was du wirklich fühlst, und dem Bild, das du anderen zeigen möchtest.",
    // Die Maske — Äußere Einflüsse (was um dich herum passiert)
    "cards.loveOracle.lemasque.meaning.energy2.var1": "Einige Menschen um dich herum sehen nur die Fassade, die du zeigst, und ignorieren deine wahren Emotionen.",
    "cards.loveOracle.lemasque.meaning.energy2.var2": "Äußere Situationen drängen dich, dich noch mehr zu schützen und diese Maske aufrechtzuerhalten, aus Angst vor Enttäuschung oder Ablehnung.",
    "cards.loveOracle.lemasque.meaning.energy2.var3": "Vertraute Menschen oder Ereignisse könnten dich dazu ermutigen, deine Maske fallen zu lassen, aber es braucht Mut und Vertrauen.",
    // Die Maske — Mögliche Entwicklung (was bald passieren könnte)
    "cards.loveOracle.lemasque.meaning.energy3.var1": "Wenn du akzeptierst, wirklich zu zeigen, wer du bist, könntest du eine aufrichtige und tiefe Verbindung mit jemandem erleben, der dich versteht.",
    "cards.loveOracle.lemasque.meaning.energy3.var2": "Es ist möglich, dass deine Maske durch eine Situation oder eine Person durchbrochen wird, deine wahren Emotionen offenbart und Veränderungen in deinem Liebesleben auslöst.",
    "cards.loveOracle.lemasque.meaning.energy3.var3": "Wenn du weiterhin diese Maske trägst, schützt sie dich kurzfristig, aber sie könnte dich von echten und bereichernden Beziehungen entfernen.",
    // Leidenschaft — Dominierende Energie (was du fühlst)
    "cards.loveOracle.lapassion.meaning.energy1.var1": "Du brennst vor intensivem Verlangen, und dein Körper fordert diese Verbindung, als würde jeder Gedanke sich um diese Person drehen.",
    "cards.loveOracle.lapassion.meaning.energy1.var2": "Dein Herz schlägt schnell, und dein Geist ist besessen von dieser Person, du träumst von leidenschaftlichen und intensiven Momenten.",
    "cards.loveOracle.lapassion.meaning.energy1.var3": "Du spürst eine unwiderstehliche Anziehung, die Emotionen und Sinnlichkeit verbindet, und du möchtest alles mit dieser Person erleben.",
    // Leidenschaft — Äußere Einflüsse (was um dich herum passiert)
    "cards.loveOracle.lapassion.meaning.energy2.var1": "Die Person, die du begehrst, ist sehr präsent in deinem Alltag oder in deinen Gedanken, und das nährt diese Intensität.",
    "cards.loveOracle.lapassion.meaning.energy2.var2": "Zeichen oder Annäherungen können diese Spannung und Anziehung verstärken und dich in einen Strudel der Emotionen stürzen.",
    "cards.loveOracle.lapassion.meaning.energy2.var3": "Achtung, diese Leidenschaft kann auch durch äußere Hindernisse verkompliziert werden, aber sie zeigt die starke Energie, die euch verbindet.",
    // Leidenschaft — Mögliche Entwicklung (was bald passieren könnte)
    "cards.loveOracle.lapassion.meaning.energy3.var1": "Wenn du dich von dieser Leidenschaft mitreißen lässt, könntest du intensive und unvergessliche Momente erleben, aber du musst dir der Konsequenzen bewusst sein.",
    "cards.loveOracle.lapassion.meaning.energy3.var2": "Diese Energie könnte die Beziehung verändern und dich tief mit dieser Person verbinden oder explosive Situationen schaffen.",
    "cards.loveOracle.lapassion.meaning.energy3.var3": "Die Leidenschaft könnte sich in eine starke und tiefgehende Liebe entwickeln, wenn du es schaffst, deine Emotionen zu kanalisieren und ehrlich zu dir selbst und der anderen Person zu sein.",
    // Glück — Dominierende Energie (was du fühlst)
    "cards.loveOracle.lachance.meaning.energy1.var1": "Du hast das Gefühl, dass das Glück auf deiner Seite ist und dass romantische Chancen bald auf dich zukommen könnten.",
    "cards.loveOracle.lachance.meaning.energy1.var2": "Dein Herz ist offen und bereit, das zu empfangen, was schön und unerwartet kommen könnte.",
    "cards.loveOracle.lachance.meaning.energy1.var3": "Du spürst einen positiven Schub in deinem Liebesleben, als ob das Universum dir ein Lächeln schenkt und dir eine schöne Begegnung bietet.",
    // Glück — Äußere Einflüsse (was um dich herum passiert)
    "cards.loveOracle.lachance.meaning.energy2.var1": "Zufällige Begegnungen oder unerwartete Ereignisse könnten dir zugutekommen und dich jemandem Besonderen näherbringen.",
    "cards.loveOracle.lachance.meaning.energy2.var2": "Dein Umfeld könnte dir Chancen bieten oder dich mit Menschen in Kontakt bringen, die zu deinen Wünschen passen.",
    "cards.loveOracle.lachance.meaning.energy2.var3": "Es könnte sein, dass das Glück sich unerwartet zeigt, aber du musst aufmerksam bleiben, um es nicht zu verpassen.",
    // Glück — Mögliche Entwicklung (was bald passieren könnte)
    "cards.loveOracle.lachance.meaning.energy3.var1": "Wenn du offen und aufmerksam bleibst, könnte eine glückliche Begegnung oder ein positives Ereignis dein Liebesleben verändern.",
    "cards.loveOracle.lachance.meaning.energy3.var2": "Das Glück könnte dich überraschen und dir eine ideale Situation bringen, aber du musst die Gelegenheit ergreifen, wenn sie kommt.",
    "cards.loveOracle.lachance.meaning.energy3.var3": "Auch wenn nicht alles perfekt verläuft, verspricht diese Zeit Überraschungen und glückliche Momente, die dich der Liebe näher bringen könnten.",
    // Das Schicksal — Dominierende Energie (was du fühlst)
    "cards.loveOracle.ledestin.meaning.energy1.var1": "Du spürst, dass bestimmte Begegnungen oder Ereignisse für dich bestimmt sind und dass das Schicksal eine Rolle in deinem Liebesleben spielt.",
    "cards.loveOracle.ledestin.meaning.energy1.var2": "Dein Herz ist fasziniert von dem, was unvermeidlich scheint, und du lässt dich vom Fluss der Ereignisse mitreißen.",
    "cards.loveOracle.ledestin.meaning.energy1.var3": "Du spürst eine mysteriöse Kraft, die dich zu bestimmten Menschen oder Situationen führt, als ob alles durch das Schicksal miteinander verbunden ist.",
    // Das Schicksal — Äußere Einflüsse (was um dich herum passiert)
    "cards.loveOracle.ledestin.meaning.energy2.var1": "Zufällige Begegnungen oder unerwartete Ereignisse könnten dich näher zu dem bringen, was das Schicksal für dich bereithält.",
    "cards.loveOracle.ledestin.meaning.energy2.var2": "Dein Umfeld oder die Umstände könnten Gelegenheiten schaffen, die von einer höheren Macht gelenkt zu sein scheinen.",
    "cards.loveOracle.ledestin.meaning.energy2.var3": "Vorsicht, manche Situationen könnten wie Umwege wirken, aber sie sind Teil des Weges, den das Schicksal für dich vorgesehen hat.",
    // Das Schicksal — Mögliche Entwicklung (was bald passieren könnte)
    "cards.loveOracle.ledestin.meaning.energy3.var1": "Wenn du es akzeptierst, dem Strom zu folgen und dem Schicksal zu vertrauen, könnte eine bedeutende Begegnung oder ein Ereignis dein Liebesleben erschüttern.",
    "cards.loveOracle.ledestin.meaning.energy3.var2": "Das Schicksal könnte dir eine einzigartige Gelegenheit bringen, aber du musst wachsam bleiben und den Moment ergreifen, wenn er sich bietet.",
    "cards.loveOracle.ledestin.meaning.energy3.var3": "Auch wenn der Weg kompliziert scheint, arbeitet das Schicksal für dich und könnte dich zu einer bedeutungsvollen und tiefen Beziehung führen.",
    // Die Stille — Dominierende Energie (was du fühlst)
    "cards.loveOracle.lesilence.meaning.energy1.var1": "Du spürst eine Leere oder Distanz in der Kommunikation, und die Stille lastet schwer auf deinen romantischen Beziehungen.",
    "cards.loveOracle.lesilence.meaning.energy1.var2": "Dein Herz ist verwirrt und du fragst dich, ob die Stille Gefühle oder Entfremdung verbirgt.",
    "cards.loveOracle.lesilence.meaning.energy1.var3": "Manchmal ziehst du es vor, zu schweigen und deine Emotionen für dich zu behalten, was Missverständnisse oder Spannung erzeugen kann.",
    // Die Stille — Äußere Einflüsse (was um dich herum passiert)
    "cards.loveOracle.lesilence.meaning.energy2.var1": "Die Person vor dir könnte distanziert oder zurückhaltend sein, und ihre Stille beeinflusst deinen Gemütszustand.",
    "cards.loveOracle.lesilence.meaning.energy2.var2": "Äußere Umstände oder kürzliche Spannungen könnten die Stille verstärken und die Kommunikation erschweren.",
    "cards.loveOracle.lesilence.meaning.energy2.var3": "Dein Umfeld könnte dir raten oder eingreifen, um den Dialog wiederherzustellen, aber die Entscheidung zu sprechen oder nicht wird von dir und der anderen Person abhängen.",
    // Die Stille — Mögliche Entwicklung (was bald passieren könnte)
    "cards.loveOracle.lesilence.meaning.energy3.var1": "Wenn du dich entscheidest, das Schweigen zu brechen und deine Emotionen auszudrücken, könnte eine Klärung oder Versöhnung stattfinden.",
    "cards.loveOracle.lesilence.meaning.energy3.var2": "Die Stille könnte andauern und dich zweifeln lassen, aber sie gibt dir auch Zeit, darüber nachzudenken, was du wirklich willst.",
    "cards.loveOracle.lesilence.meaning.energy3.var3": "Ein unerwartetes Ereignis oder eine Person könnte die Kommunikation wiederbeleben und verborgene Wahrheiten offenbaren, was den Weg zu einem besseren gegenseitigen Verständnis ebnen könnte.",
    // Die Wahrheit — Dominierende Energie (was du fühlst)
    "cards.loveOracle.laverite.meaning.energy1.var1": "Du spürst das Bedürfnis, die Wahrheit über eine Situation oder eine Person zu erfahren, und dein Herz verlangt nach Klarheit.",
    "cards.loveOracle.laverite.meaning.energy1.var2": "Deine Intuition drängt dich, nach Transparenz zu suchen und dich nicht mehr mit halben Wahrheiten oder falschen Fassaden zufrieden zu geben.",
    "cards.loveOracle.laverite.meaning.energy1.var3": "Du bist bereit, dich dem zu stellen, was real ist, auch wenn es schmerzhaft oder überraschend sein könnte.",
    // Die Wahrheit — Äußere Einflüsse (was um dich herum passiert)
    "cards.loveOracle.laverite.meaning.energy2.var1": "Fakten oder Enthüllungen um dich herum könnten dir zeigen, was wirklich in dieser Beziehung auf dem Spiel steht.",
    "cards.loveOracle.laverite.meaning.energy2.var2": "Einige Menschen könnten dir die Wahrheit vorenthalten, absichtlich oder aus Angst, dich zu verletzen, was die Situation verkomplizieren könnte.",
    "cards.loveOracle.laverite.meaning.energy2.var3": "Dein Umfeld oder unvorhergesehene Ereignisse könnten dich dazu drängen, das zu entdecken, was wirklich der Fall ist, auch wenn es nicht das ist, was du erwartet hast.",
    // Die Wahrheit — Mögliche Entwicklung (was bald passieren könnte)
    "cards.loveOracle.laverite.meaning.energy3.var1": "Wenn du es akzeptierst, der Wahrheit ins Auge zu sehen, wirst du in der Lage sein, klare Entscheidungen zu treffen und mit Zuversicht in deinen Beziehungen voranzuschreiten.",
    "cards.loveOracle.laverite.meaning.energy3.var2": "Die Wahrheit könnte Überraschungen offenbaren, sowohl positive als auch negative, aber sie wird dir immer die Freiheit geben, deinen Weg zu wählen.",
    "cards.loveOracle.laverite.meaning.energy3.var3": "Auch wenn die Wahrheit schwer zu hören ist, könnte sie den Weg zu einer aufrichtigen und stabilen Beziehung ebnen oder dich von einer Situation befreien, die dir nicht mehr dient.",
    // Das Geschenk — Dominierende Energie (was du fühlst)
    "cards.loveOracle.lecadeau.meaning.energy1.var1": "Du spürst, dass Liebe oder eine Beziehung dir ein unerwartetes Geschenk bringen könnte, eine Überraschung, die dein Herz höherschlagen lässt.",
    "cards.loveOracle.lecadeau.meaning.energy1.var2": "Dein Herz ist offen, um etwas Wertvolles zu empfangen, sei es Aufmerksamkeit, Zuneigung oder eine wichtige Begegnung.",
    "cards.loveOracle.lecadeau.meaning.energy1.var3": "Du bist aufgeregt, zu entdecken, was das Liebesleben dir bieten könnte, auch wenn du noch nicht weißt, was dich erwartet.",
    // Das Geschenk — Äußere Einflüsse (was um dich herum passiert)
    "cards.loveOracle.lecadeau.meaning.energy2.var1": "Menschen um dich herum könnten dir Gelegenheiten oder Möglichkeiten bieten, die dein Herz und dein Liebesleben bereichern.",
    "cards.loveOracle.lecadeau.meaning.energy2.var2": "Ein unerwartetes Ereignis könnte dir etwas Wertvolles in dein Liebesleben bringen, aber du musst aufmerksam bleiben, um es zu bemerken.",
    "cards.loveOracle.lecadeau.meaning.energy2.var3": "Überraschungen, ob positiv oder etwas enttäuschend, könnten deine Entscheidungen und Emotionen in den kommenden Tagen beeinflussen.",
    // Das Geschenk — Mögliche Entwicklung (was bald passieren könnte)
    "cards.loveOracle.lecadeau.meaning.energy3.var1": "Wenn du akzeptierst, was das Leben dir mit Dankbarkeit bringt, könntest du ein emotionales Geschenk erhalten, das dein Herz erleuchtet.",
    "cards.loveOracle.lecadeau.meaning.energy3.var2": "Es ist möglich, dass eine Person oder eine Situation dich angenehm überrascht und dir unerwartetes Glück bringt.",
    "cards.loveOracle.lecadeau.meaning.energy3.var3": "Auch wenn nicht alles nach Plan verläuft, könnten dir diese emotionalen Geschenke helfen, voranzukommen und deine Liebeswünsche besser zu verstehen.",
    // Die Wunde — Dominierende Energie (was du fühlst)
    "cards.loveOracle.lablessure.meaning.energy1.var1": "Du spürst einen tiefen Schmerz in Bezug auf die Liebe, als ob eine emotionale Narbe wieder auftaucht.",
    "cards.loveOracle.lablessure.meaning.energy1.var2": "Dein Herz ist zerbrechlich, und du hast Schwierigkeiten, loszulassen oder anderen zu vertrauen.",
    "cards.loveOracle.lablessure.meaning.energy1.var3": "Ein alter Kummer oder ein Verrat lässt dich am Liebesleben zweifeln und drängt dich, dich zu schützen.",
    // Die Wunde — Äußere Einflüsse (was um dich herum passiert)
    "cards.loveOracle.lablessure.meaning.energy2.var1": "Menschen oder äußere Situationen könnten diesen Schmerz wieder aufflammen lassen und dich an das erinnern, was dich verletzt hat.",
    "cards.loveOracle.lablessure.meaning.energy2.var2": "Dein Umfeld könnte dich unterstützen oder ermutigen, diese Wunde zu überwinden, aber die Heilung hängt von deinem Engagement für dich selbst ab.",
    "cards.loveOracle.lablessure.meaning.energy2.var3": "Manchmal drängt dich diese Wunde, bestimmte Beziehungen zu meiden oder neuen Begegnungen misstrauisch gegenüberzustehen, was deinen Liebesimpuls verlangsamt.",
    // Die Wunde — Mögliche Entwicklung (was bald passieren könnte)
    "cards.loveOracle.lablessure.meaning.energy3.var1": "Wenn du akzeptierst, an diesem Schmerz zu arbeiten und dich trotzdem zu öffnen, könntest du heilen und eine aufrichtige und tiefgehende Beziehung finden.",
    "cards.loveOracle.lablessure.meaning.energy3.var2": "Es ist möglich, dass diese Wunde erneut auftaucht, aber jede Prüfung kann dir etwas beibringen und dich stärker machen.",
    "cards.loveOracle.lablessure.meaning.energy3.var3": "Ein Treffen oder Ereignis könnte dir helfen, diesen Schmerz zu überwinden und dein Herz für eine bewusstere und ausgewogenere Liebe zu öffnen.",
    // Der Neue Beginn — Dominierende Energie (was du fühlst)
    "cards.loveOracle.lenouveaudepart.meaning.energy1.var1": "Du spürst, dass es Zeit ist, das Kapitel umzublättern und eine neue Liebesgeschichte mit einem offenen Herzen zu beginnen.",
    "cards.loveOracle.lenouveaudepart.meaning.energy1.var2": "Dein Geist ist bereit, die Vergangenheit hinter sich zu lassen und neue Erfahrungen und Emotionen zu empfangen.",
    "cards.loveOracle.lenouveaudepart.meaning.energy1.var3": "Du spürst eine Mischung aus Aufregung und Angst, aber der Wunsch nach Erneuerung ist stärker als deine Zweifel.",
    // Der Neue Beginn — Äußere Einflüsse (was um dich herum passiert)
    "cards.loveOracle.lenouveaudepart.meaning.energy2.var1": "Jüngste Begegnungen oder Chancen könnten dich dazu drängen, dich auf etwas Neues und vielversprechendes einzulassen.",
    "cards.loveOracle.lenouveaudepart.meaning.energy2.var2": "Dein Umfeld könnte dich ermutigen oder inspirieren, diese Chance auf einen Neuanfang zu ergreifen, aber die endgültige Entscheidung liegt bei dir.",
    "cards.loveOracle.lenouveaudepart.meaning.energy2.var3": "Äußere Ereignisse könnten diesen neuen Beginn auslösen und dir den nötigen Schub geben, um voranzukommen.",
    // Der Neue Beginn — Mögliche Entwicklung (was bald passieren könnte)
    "cards.loveOracle.lenouveaudepart.meaning.energy3.var1": "Wenn du diesen neuen Beginn akzeptierst, könntest du jemanden Besonderen treffen oder eine Erfahrung machen, die dein Herz verändert.",
    "cards.loveOracle.lenouveaudepart.meaning.energy3.var2": "Diese Erneuerung könnte schrittweise sein, aber jeder kleine Schritt bringt dich näher an eine aufrichtige und erfüllende Beziehung.",
    "cards.loveOracle.lenouveaudepart.meaning.energy3.var3": "Auch wenn nicht alles nach Plan verläuft, wird dir dieser neue Beginn die Gelegenheit geben, zu lernen, zu wachsen und dein Herz für die Liebe zu öffnen.",
    // Fusion — Dominierende Energie (was du fühlst)
    "cards.loveOracle.lafusion.meaning.energy1.var1": "Du spürst eine intensive und tiefe Verbindung zu jemandem, als ob eure Herzen im Einklang schlagen.",
    "cards.loveOracle.lafusion.meaning.energy1.var2": "Dein Wunsch nach Nähe und Vertrautheit ist stark, und du träumst von einer tiefen und aufrichtigen Bindung.",
    "cards.loveOracle.lafusion.meaning.energy1.var3": "Du spürst, dass diese Beziehung das Potenzial hat, deine Emotionen und deine Sicht auf die Liebe zu verändern.",
    // Fusion — Äußere Einflüsse (was um dich herum passiert)
    "cards.loveOracle.lafusion.meaning.energy2.var1": "Ereignisse oder Situationen begünstigen diese intensive Nähe und könnten eure Verbindung schnell stärken.",
    "cards.loveOracle.lafusion.meaning.energy2.var2": "Dein Umfeld könnte diese Vereinigung unterstützen, aber sei vorsichtig mit äußeren Einflüssen, die eure Verbindung auf die Probe stellen könnten.",
    "cards.loveOracle.lafusion.meaning.energy2.var3": "Einige Spannungen oder Eifersüchteleien um euch herum könnten diese Fusion erschweren, aber sie zeigen auch die Stärke eurer Bindung.",
    // Fusion — Mögliche Entwicklung (was bald passieren könnte)
    "cards.loveOracle.lafusion.meaning.energy3.var1": "Wenn ihr euch dieser Verbindung vollständig öffnet, könnte die Fusion zu einer leidenschaftlichen und dauerhaften Beziehung führen.",
    "cards.loveOracle.lafusion.meaning.energy3.var2": "Diese intensive Vereinigung könnte Prüfungen durchlaufen, aber wenn ihr aufrichtig bleibt und aufmerksam seid, wird sie stärker werden.",
    "cards.loveOracle.lafusion.meaning.energy3.var3": "Ein Treffen oder ein Schlüsselmoment könnte diese Verbindung besiegeln und eine tiefe und transformative Intimität für eure Herzen schaffen.",
    // Versuchung — Dominierende Energie (was du fühlst)
    "cards.loveOracle.latentation.meaning.energy1.var1": "Du spürst ein starkes und unwiderstehliches Verlangen nach jemandem oder etwas, das dein Herz und deinen Körper anzieht.",
    "cards.loveOracle.latentation.meaning.energy1.var2": "Dein Geist ist zwischen Vernunft und Verlangen hin- und hergerissen, und diese Versuchung drängt dich dazu, zu erforschen, was du wirklich willst.",
    "cards.loveOracle.latentation.meaning.energy1.var3": "Du fühlst dich zu dem hingezogen, was verboten oder aufregend ist, und es ist schwer, diesem Impuls zu widerstehen.",
    // Versuchung — Äußere Einflüsse (was um dich herum passiert)
    "cards.loveOracle.latentation.meaning.energy2.var1": "Situationen oder Menschen um dich herum könnten diese Versuchung verstärken und sie fast unmöglich machen, sie zu ignorieren.",
    "cards.loveOracle.latentation.meaning.energy2.var2": "Dein Umfeld oder die Umstände könnten dir schwierige Entscheidungen stellen, die deine Fähigkeit testen, deinen Werten treu zu bleiben.",
    "cards.loveOracle.latentation.meaning.energy2.var3": "Diese Versuchung könnte eine Gelegenheit sein, intensive Emotionen zu entdecken, aber sie birgt auch Risiken und Komplikationen.",
    // Versuchung — Mögliche Entwicklung (was bald passieren könnte)
    "cards.loveOracle.latentation.meaning.energy3.var1": "Wenn du dieser Versuchung nachgibst, könntest du leidenschaftliche und intensive Momente erleben, aber du musst dir der Konsequenzen bewusst sein.",
    "cards.loveOracle.latentation.meaning.energy3.var2": "Diese Situation könnte dir viel über deine Wünsche und Grenzen beibringen, was dir hilft, besser zu verstehen, was du wirklich willst.",
    "cards.loveOracle.latentation.meaning.energy3.var3": "Es ist auch möglich, dass das Widerstehen der Versuchung dir mehr Klarheit bringt und dich vor unnötigen Komplikationen in deinem Liebesleben schützt.",
    // Schutz — Dominierende Energie (was du fühlst)
    "cards.loveOracle.laprotection.meaning.energy1.var1": "Du spürst das Bedürfnis, dich emotional zu schützen, um in deinen Beziehungen nicht zu leiden.",
    "cards.loveOracle.laprotection.meaning.energy1.var2": "Dein Herz ist in Alarmbereitschaft und du nimmst dir Zeit, zu entscheiden, wem du deine Gefühle öffnest.",
    "cards.loveOracle.laprotection.meaning.energy1.var3": "Manchmal blockierst du bestimmte Emotionen, um dich sicher zu fühlen und Enttäuschungen zu vermeiden.",
    // Schutz — Äußere Einflüsse (was um dich herum passiert)
    "cards.loveOracle.laprotection.meaning.energy2.var1": "Menschen um dich herum oder vergangene Erfahrungen ermutigen dich, vorsichtig zu sein und dein Herz zu schützen.",
    "cards.loveOracle.laprotection.meaning.energy2.var2": "Bestimmte Situationen könnten dich in Alarmbereitschaft versetzen und dein Bedürfnis verstärken, dich vor Verletzungen zu schützen.",
    "cards.loveOracle.laprotection.meaning.energy2.var3": "Dein Umfeld könnte dir auch helfen, zu erkennen, was sicher ist und was dir Schmerzen bereiten könnte, und dich zu schützenderen Entscheidungen führen.",
    // Schutz — Mögliche Entwicklung (was bald passieren könnte)
    "cards.loveOracle.laprotection.meaning.energy3.var1": "Wenn du dich weiterhin schützt und gleichzeitig offen bleibst, kannst du in deinen Beziehungen vorankommen, ohne dich zu verletzen.",
    "cards.loveOracle.laprotection.meaning.energy3.var2": "Es ist möglich, dass du in eine Situation kommst, die deine Fähigkeit testet, dich zu schützen und gleichzeitig aufrichtig zu bleiben.",
    "cards.loveOracle.laprotection.meaning.energy3.var3": "Eine Beziehung oder ein Ereignis könnte dir helfen, dich sicher zu fühlen und dein Herz schrittweise zu öffnen, ohne unnötiges Leid zu riskieren.",
    // Befreiung — Dominierende Energie (was du fühlst)
    "cards.loveOracle.laliberation.meaning.energy1.var1": "Du spürst das Bedürfnis, dich von einer Beziehung oder von Emotionen zu befreien, die dich festhalten und belasten.",
    "cards.loveOracle.laliberation.meaning.energy1.var2": "Dein Herz sehnt sich danach, seine Freiheit zurückzugewinnen und nicht länger von schmerzhaften oder erdrückenden Situationen begrenzt zu werden.",
    "cards.loveOracle.laliberation.meaning.energy1.var3": "Manchmal hast du das Bedürfnis, die Bindungen zu dem zu schneiden, was dich daran hindert, voranzukommen und frei zu atmen.",
    // Befreiung — Äußere Einflüsse (was um dich herum passiert)
    "cards.loveOracle.laliberation.meaning.energy2.var1": "Menschen oder Ereignisse um dich herum könnten dir helfen, loszulassen und dich freier zu fühlen.",
    "cards.loveOracle.laliberation.meaning.energy2.var2": "Bestimmte Situationen könnten dich dazu drängen, Abstand zu nehmen und dich von dem zu lösen, was dein Herz blockiert.",
    "cards.loveOracle.laliberation.meaning.energy2.var3": "Dein Umfeld könnte dich ermutigen, dich von dem zu befreien, was dir nicht mehr guttut, und dich in gesündere Beziehungen zu führen.",
    // Befreiung — Mögliche Entwicklung (was bald passieren könnte)
    "cards.loveOracle.laliberation.meaning.energy3.var1": "Wenn du akzeptierst, dich zu befreien, könntest du eine neue, leichtere und aufrichtigere Liebe erleben.",
    "cards.loveOracle.laliberation.meaning.energy3.var2": "Die Befreiung könnte dir neue Möglichkeiten und Begegnungen bringen, die besser mit deinem Herzen und deinen Wünschen übereinstimmen.",
    "cards.loveOracle.laliberation.meaning.energy3.var3": "Obwohl dieser Prozess zu Beginn schwierig sein könnte, wird er dir helfen, deine innere Stärke zurückzugewinnen und dein Herz für wahre Liebe zu öffnen.",

    // ========== CONSEILS THÉMATIQUES ORACLE DE L'AMOUR - TIRAGE 3 CARTES ==========
    // 1. Liebe Geduld
    "interpretation.loveOracle.advice.patience.var1": "Du musst verstehen, dass die Liebe kommt, wenn du sie am wenigsten erwartest. Vertraue der Zeit und dem Universum, es weiß, was es tut.",
    "interpretation.loveOracle.advice.patience.var2": "Verlange nichts, die Liebe wird zu dir kommen, wenn du bereit bist, sie zu empfangen. Lass sie sich natürlich entfalten.",
    "interpretation.loveOracle.advice.patience.var3": "Das Universum hat seine eigenen Pläne, und manchmal ist es besser zu warten, als ein Treffen zu erzwingen. Was dir bestimmt ist, wird nicht an dir vorbeigehen.",
    // 2. Herzöffnung
    "interpretation.loveOracle.advice.openness.var1": "Dein Herz ist ein Schatz, es ist Zeit, es mit denen zu teilen, die bereit sind, es zu empfangen. Lass dich von den schönen Überraschungen der Liebe verzaubern.",
    "interpretation.loveOracle.advice.openness.var2": "Wenn du verschlossen bleibst, kann die Liebe nicht eintreten. Sei bereit, dein Herz zu öffnen, auch wenn es etwas Mut erfordert.",
    "interpretation.loveOracle.advice.openness.var3": "Hör auf, dich ständig zu schützen. Liebe bedeutet auch, Risiken einzugehen und Platz für Neues zu schaffen.",
    // 3. Selbstvertrauen
    "interpretation.loveOracle.advice.selfconfidence.var1": "Zweifle nie an deinem Wert, du verdienst das Beste. Vertraue dir selbst und wisse, dass du eines reinen und aufrichtigen Liebes wert bist.",
    "interpretation.loveOracle.advice.selfconfidence.var2": "Bevor du deine Liebe gibst, fang an, dich selbst zu lieben. Wenn du dich selbst respektierst, wird die Liebe leichter zu dir kommen.",
    "interpretation.loveOracle.advice.selfconfidence.var3": "Die Liebe, die du suchst, beginnt mit der Liebe, die du dir selbst gibst. Sei dein eigener größter Fan.",
    // 4. Emotionale Klarheit
    "interpretation.loveOracle.advice.clarity.var1": "Hör auf dein Herz. Manchmal weiß es Dinge, die dein Verstand nicht begreift. Wenn du klar mit dir selbst bist, wirst du die Dinge viel klarer sehen.",
    "interpretation.loveOracle.advice.clarity.var2": "Nimm dir Zeit, um zu überlegen und wirklich zu fühlen, was du in einer Beziehung willst. Klarheit kommt, wenn du aufhörst, dich zu beeilen.",
    "interpretation.loveOracle.advice.clarity.var3": "Wenn du dich verloren fühlst, ist es vielleicht an der Zeit, auf dich zu hören. Deine Emotionen werden dich zu dem führen, was für dich richtig ist.",
    // 5. Loslassen
    "interpretation.loveOracle.advice.lettinggo.var1": "Loslassen bedeutet nicht aufzugeben, sondern zu akzeptieren, dass manche Dinge außerhalb deiner Kontrolle liegen. Lass das Universum seine Arbeit tun.",
    "interpretation.loveOracle.advice.lettinggo.var2": "Befreie dich von der Vergangenheit, Zweifeln und Wunden. Nichts Neues kann in dein Leben eintreten, solange du an altem festhältst.",
    "interpretation.loveOracle.advice.lettinggo.var3": "Du kannst dein Leben kontrollieren, aber manchmal musst du wissen, wann du loslassen musst, damit die Magie der Liebe wirken kann.",
    // 6. Authentizität
    "interpretation.loveOracle.advice.authenticity.var1": "Sei du selbst, ohne Kompromisse. Nur wenn du authentisch bist, kannst du die Liebe anziehen, die wirklich zu dir passt.",
    "interpretation.loveOracle.advice.authenticity.var2": "Wahre Liebe hat nichts mit Masken zu tun. Sei ehrlich, auch wenn es Angst macht. Die Liebe kommt, wenn du zeigst, wer du wirklich bist.",
    "interpretation.loveOracle.advice.authenticity.var3": "Hör auf, allen gefallen zu wollen. Die Liebe, die zählt, ist die, die du mit jemandem erlebst, der dich so akzeptiert, wie du bist.",
    // 7. Herzschutz
    "interpretation.loveOracle.advice.protection.var1": "Schütze dein Herz, aber baue keine Mauern darum. Lerne, Grenzen zu setzen, ohne dich von anderen abzuschotten.",
    "interpretation.loveOracle.advice.protection.var2": "Sich zu schützen ist keine Schwäche. Die richtigen Menschen werden in dein Leben treten, wenn du es zulässt.",
    "interpretation.loveOracle.advice.protection.var3": "Es ist wichtig, dein Herz zu schützen, aber denke daran, dass übermäßiger Schutz dich daran hindern kann, wahre Liebe zu erfahren.",
    // 8. Aktion und Initiative
    "interpretation.loveOracle.advice.action.var1": "Wenn du wartest, dass die Liebe von selbst kommt, ohne etwas zu tun, könntest du sie verpassen. Wage den ersten Schritt, es könnte alles verändern.",
    "interpretation.loveOracle.advice.action.var2": "Die Liebe wartet nicht, also ergreife die Initiative. Lass nicht zu, dass Schüchternheit oder Angst dich davon abhält, eine schöne Geschichte zu erleben.",
    "interpretation.loveOracle.advice.action.var3": "Manchmal muss man handeln. Wenn du Gefühle für jemanden hast, warte nicht, dass sich die Situation von selbst löst.",
    // Fallback
    "interpretation.loveOracle.advice.fallback.var1": "Versuche nicht alles zu verstehen, vertraue deinem Herzen. Es weist dir immer den richtigen Weg.",
    "interpretation.loveOracle.advice.fallback.var2": "Denke daran, dass alles so verläuft, wie es soll. Das Universum hat immer einen Plan für dich, auch wenn du ihn noch nicht siehst.",
    "interpretation.loveOracle.advice.fallback.var3": "Deine Intuition ist dein bester Verbündeter, höre gut auf sie. Sie wird dir immer sagen, was richtig für dich ist.",

     // Card Names and Meanings - Love oracle - Tirage en croix
    // le rendez-vous
     "crossSpread.cards.lerendezvous.pour.variation1": "Eine vielversprechende Begegnung steht bevor. Bleib offen und empfänglich.",
      "crossSpread.cards.lerendezvous.pour.variation2": "Du bekommst eine schöne Gelegenheit, jemandem näherzukommen. Wage den ersten Schritt.",
      "crossSpread.cards.lerendezvous.pour.variation3": "Eine unerwartete Verbindung kann deine Liebesgeschichte verändern. Sei mutig.",
      "crossSpread.cards.lerendezvous.contre.variation1": "Lass nicht zu, dass Angst oder Zögern dich eine wichtige Chance verpassen lassen.",
      "crossSpread.cards.lerendezvous.contre.variation2": "Ein verpasstes Treffen könnte später bereut werden. Bleib aufmerksam und präsent.",
      "crossSpread.cards.lerendezvous.contre.variation3": "Ein Mangel an Selbstvertrauen könnte dich daran hindern, diese Chance zu nutzen.",
      "crossSpread.cards.lerendezvous.synthese.variation1": "Die Liebe klopft an deine Tür. Öffne dein Herz und empfange, was kommt.",
      "crossSpread.cards.lerendezvous.synthese.variation2": "Jetzt ist der richtige Moment zu handeln. Eine wichtige Begegnung erwartet dich, wenn du dich öffnest.",
      "crossSpread.cards.lerendezvous.synthese.variation3": "Diese Phase ist ideal, um neue Verbindungen zu schaffen. Vertraue dem Timing des Lebens.",
    // le message
    "crossSpread.cards.lemessage.pour.variation1": "Du wirst eine Nachricht oder Antwort erhalten, die dich der gewünschten Person näher bringt.",
    "crossSpread.cards.lemessage.pour.variation2": "Die Kommunikation öffnet sich. Ein ehrlicher Austausch kann die Situation verbessern.",
    "crossSpread.cards.lemessage.pour.variation3": "Eine positive Nachricht kommt und klärt deine Gefühle.",
    "crossSpread.cards.lemessage.contre.variation1": "Du könntest ein Schweigen oder ein Wort falsch interpretieren. Bleib ruhig, bevor du reagierst.",
    "crossSpread.cards.lemessage.contre.variation2": "Blockierte Kommunikation kann Spannungen erzeugen. Warte nicht tatenlos ab.",
    "crossSpread.cards.lemessage.contre.variation3": "Eine späte oder verwirrende Nachricht kann dich verunsichern. Bleib geerdet.",
    "crossSpread.cards.lemessage.synthese.variation1": "Ein wichtiges Gespräch wird Klarheit bringen. Du wirst endlich deinen Weg erkennen.",
    "crossSpread.cards.lemessage.synthese.variation2": "Der Dialog ist der Schlüssel. Du erhältst die Antworten, die du brauchst, um weiterzugehen.",
    "crossSpread.cards.lemessage.synthese.variation3": "Ein Austausch beendet Zweifel und eröffnet eine neue Dynamik zwischen euch.",
    // le désir
    "crossSpread.cards.ledesir.pour.variation1": "Das Verlangen ist gegenseitig. Du ziehst diese Person stark an.",
      "crossSpread.cards.ledesir.pour.variation2": "Eine starke Leidenschaft erwacht zwischen euch. Die Chemie ist deutlich spürbar.",
      "crossSpread.cards.ledesir.pour.variation3": "Dein Charme wirkt. Jemand denkt intensiv an dich.",
      "crossSpread.cards.ledesir.contre.variation1": "Achte darauf, Verlangen nicht mit echten Gefühlen zu verwechseln.",
      "crossSpread.cards.ledesir.contre.variation2": "Eine zu starke Anziehung kann dein Urteilsvermögen trüben.",
      "crossSpread.cards.ledesir.contre.variation3": "Das Verlangen könnte dich in eine komplizierte Situation führen. Bleib klar im Kopf.",
      "crossSpread.cards.ledesir.synthese.variation1": "Das Verlangen spielt eine Schlüsselrolle. Alles entwickelt sich durch diese Anziehung.",
      "crossSpread.cards.ledesir.synthese.variation2": "Die Chemie ist stark, doch du musst die Balance zwischen Leidenschaft und Vernunft halten.",
      "crossSpread.cards.ledesir.synthese.variation3": "Diese intensive Energie kann einen neuen Weg eröffnen, wenn du offen und aufmerksam für die Zeichen bleibst.",
    //le cœur ouvert
    "crossSpread.cards.lecoeurouvert.pour.variation1": "Du bist bereit, aufrichtig zu lieben. Diese Offenheit zieht Positives an.",
    "crossSpread.cards.lecoeurouvert.pour.variation2": "Deine Verletzlichkeit schafft eine echte Verbindung zur anderen Person.",
    "crossSpread.cards.lecoeurouvert.pour.variation3": "Indem du dich öffnest, lässt du eine schöne Energie in dein Leben.",
    "crossSpread.cards.lecoeurouvert.contre.variation1": "Du könntest dich zu sehr verfügbar zeigen. Schütze etwas von deiner Energie.",
    "crossSpread.cards.lecoeurouvert.contre.variation2": "Deine Sensibilität könnte dich gegenüber dem Verhalten des anderen verletzlich machen.",
    "crossSpread.cards.lecoeurouvert.contre.variation3": "Du riskierst, eine Person oder Situation zu idealisieren.",
    "crossSpread.cards.lecoeurouvert.synthese.variation1": "Dein offenes Herz ist deine Stärke. Es zieht die richtige Person an.",
    "crossSpread.cards.lecoeurouvert.synthese.variation2": "Drücke aus, was du fühlst. Aufrichtigkeit löst die Situation.",
    "crossSpread.cards.lecoeurouvert.synthese.variation3": "Wenn du echt bleibst, erhältst du eine ehrliche Antwort zurück.",
    //le cœur fermé
    "crossSpread.cards.lecoeurferme.pour.variation1": "Ein Schritt zurück schützt dich momentan. Du hörst auf deine Intuition.",
    "crossSpread.cards.lecoeurferme.pour.variation2": "Grenzen zu setzen hilft dir, dich nicht in der Beziehung zu verlieren.",
    "crossSpread.cards.lecoeurferme.pour.variation3": "Dein Herz schließt sich, um dich vor einer instabilen Situation zu bewahren.",
    "crossSpread.cards.lecoeurferme.contre.variation1": "Du blockierst dich zu sehr. Das hindert den anderen daran, dich zu verstehen.",
    "crossSpread.cards.lecoeurferme.contre.variation2": "Angst, verletzt zu werden, hindert dich daran, voll zu lieben.",
    "crossSpread.cards.lecoeurferme.contre.variation3": "Deine mangelnde Offenheit schafft unnötige Distanz.",
    "crossSpread.cards.lecoeurferme.synthese.variation1": "Du musst dein Herz langsam wieder öffnen, wenn du vorankommen willst.",
    "crossSpread.cards.lecoeurferme.synthese.variation2": "Ein Gleichgewicht ist nötig: Schütze dich, aber verschließe dich nicht völlig.",
    "crossSpread.cards.lecoeurferme.synthese.variation3": "Die Lösung kommt von dir: Erlaube dir, wieder zu fühlen.",
    //le choix
    "crossSpread.cards.lechoix.pour.variation1": "Endlich bist du bereit, eine klare Entscheidung zu treffen.",
    "crossSpread.cards.lechoix.pour.variation2": "Zwei Wege stehen dir offen, aber einer leuchtet stärker, wenn du auf dein Herz hörst.",
    "crossSpread.cards.lechoix.pour.variation3": "Du übernimmst die Kontrolle über dein Liebesleben, indem du eine Entscheidung triffst, die zu dir passt.",
    "crossSpread.cards.lechoix.contre.variation1": "Zweifel blockieren und erschöpfen deinen Geist, sodass du die beste Richtung nicht siehst.",
    "crossSpread.cards.lechoix.contre.variation2": "Du könntest dich eher von Ängsten als von deinen wahren Wünschen beeinflussen lassen.",
    "crossSpread.cards.lechoix.contre.variation3": "Zu langes Zögern könnte dich eine Gelegenheit kosten.",
    "crossSpread.cards.lechoix.synthese.variation1": "Die richtige Entscheidung ist die, die dich leichter fühlen lässt.",
    "crossSpread.cards.lechoix.synthese.variation2": "Die Dinge beginnen wirklich zu fließen, sobald du deinen Weg klar und ohne Zögern wählst.",
    "crossSpread.cards.lechoix.synthese.variation3": "Dein Herz kennt bereits die Antwort; nimm dir die Zeit, es wirklich zu hören, und lass es deine Handlungen leiten.",
    //le retour
    "crossSpread.cards.leretour.pour.variation1": "Jemand aus deiner Vergangenheit kehrt mit klaren Absichten zurück, bereit, ungelöste Dinge zu klären.",
    "crossSpread.cards.leretour.pour.variation2": "Eine Erinnerung oder Person taucht wieder auf, um dir etwas zu helfen zu verstehen.",
    "crossSpread.cards.leretour.pour.variation3": "Jemand aus der Vergangenheit taucht wieder auf und könnte dir eine neue Chance bieten.",
    "crossSpread.cards.leretour.contre.variation1": "Zurückzuschauen könnte dich daran hindern, voranzukommen.",
    "crossSpread.cards.leretour.contre.variation2": "Eine Person aus der Vergangenheit kann unverheilte Wunden wieder aufreißen.",
    "crossSpread.cards.leretour.contre.variation3": "Du riskierst, diese Rückkehr zu idealisieren und deine aktuelle Stabilität zu verlieren.",
    "crossSpread.cards.leretour.synthese.variation1": "Die Vergangenheit kehrt aus einem bestimmten Grund zurück: um zu verstehen, zu heilen oder einen Zyklus zu schließen.",
    "crossSpread.cards.leretour.synthese.variation2": "Diese Rückkehr gibt dir die Möglichkeit, deine Wünsche zu klären und zu wählen, was wirklich wichtig für dich ist.",
    "crossSpread.cards.leretour.synthese.variation3": "Eine Seite der Vergangenheit öffnet sich erneut, damit du verstehen, akzeptieren und entscheiden kannst, deine Geschichte weiterzuschreiben oder zu beenden.",
    //la distance
    "crossSpread.cards.ladistance.pour.variation1": "Distanz hilft dir, deine Emotionen klarer zu sehen.",
    "crossSpread.cards.ladistance.pour.variation2": "Eine Zeit der Entfernung ermöglicht jedem, durchzuatmen und nachzudenken.",
    "crossSpread.cards.ladistance.pour.variation3": "Zurückzutreten schützt dich und hilft dir, zentriert zu bleiben.",
    "crossSpread.cards.ladistance.contre.variation1": "Kälte kann entstehen und die Beziehung schwächen.",
    "crossSpread.cards.ladistance.contre.variation2": "Distanz erzeugt Zweifel und nährt Ängste.",
    "crossSpread.cards.ladistance.contre.variation3": "Mangelnde Kommunikation kann die Distanz verschlimmern.",
    "crossSpread.cards.ladistance.synthese.variation1": "Diese Distanz ist nicht endgültig: Sie dient dazu, die Situation wieder ins Gleichgewicht zu bringen.",
    "crossSpread.cards.ladistance.synthese.variation2": "Eine Wiederverbindung ist möglich, sobald beide ihre Ruhe wiedergefunden haben.",
    "crossSpread.cards.ladistance.synthese.variation3": "Du musst verstehen, was diese Distanz dir lehren will.",
    //l'union
    "crossSpread.cards.lunion.pour.variation1": "Eine solide Beziehung kann entstehen. Du bist bereit, dich zu engagieren.",
    "crossSpread.cards.lunion.pour.variation2": "Die Verbindung mit dieser Person bringt Stabilität und Harmonie.",
    "crossSpread.cards.lunion.pour.variation3": "Ihr geht Hand in Hand auf etwas Ernsthaftes zu.",
    "crossSpread.cards.lunion.contre.variation1": "Du könntest dich zu schnell binden, ohne bestimmte Signale zu sehen.",
    "crossSpread.cards.lunion.contre.variation2": "Die andere Person ist vielleicht noch nicht bereit für dieselbe Tiefe.",
    "crossSpread.cards.lunion.contre.variation3": "Eine äußere Situation kann die Verbindung vorerst erschweren.",
    "crossSpread.cards.lunion.synthese.variation1": "Diese Beziehung kann sich zu etwas Stabilem entwickeln, wenn ihr gemeinsam voranschreitet.",
    "crossSpread.cards.lunion.synthese.variation2": "Die Verbindung ist möglich, erfordert aber Geduld und Verständnis.",
    "crossSpread.cards.lunion.synthese.variation3": "Deine Liebeszukunft baut auf Kooperation und Zuhören auf.",
    //le masque
    "crossSpread.cards.lemasque.pour.variation1": "Du schützt deine Gefühle, indem du ein Stück Geheimnis bewahrst.",
    "crossSpread.cards.lemasque.pour.variation2": "Diskret zu bleiben erlaubt es dir, die Situation besser zu beobachten.",
    "crossSpread.cards.lemasque.pour.variation3": "Die Maske hilft dir, dich nicht zu schnell zu öffnen.",
    "crossSpread.cards.lemasque.contre.variation1": "Jemand zeigt nicht seine wahren Absichten.",
    "crossSpread.cards.lemasque.contre.variation2": "Mangelnde Transparenz kann Missverständnisse erzeugen.",
    "crossSpread.cards.lemasque.contre.variation3": "Sich zu verstecken hindert die Beziehung daran, sich ehrlich zu entwickeln.",
    "crossSpread.cards.lemasque.synthese.variation1": "Um voranzukommen, müssen die Masken auf beiden Seiten fallen.",
    "crossSpread.cards.lemasque.synthese.variation2": "Die Wahrheit wird schließlich erscheinen und die Situation klären.",
    "crossSpread.cards.lemasque.synthese.variation3": "Aufrichtige Offenheit kann die Dynamik vollständig verändern.",
    //la passion
    "crossSpread.cards.lapassion.pour.variation1": "Eine starke Energie treibt dich an und bringt die Herzen näher zusammen.",
    "crossSpread.cards.lapassion.pour.variation2": "Leidenschaft macht die Beziehung lebendig und aufregend.",
    "crossSpread.cards.lapassion.pour.variation3": "Ein starkes emotionales Impuls treibt dich auf den anderen zu.",
    "crossSpread.cards.lapassion.contre.variation1": "Leidenschaft kann instabil werden, wenn sie nicht kontrolliert wird.",
    "crossSpread.cards.lapassion.contre.variation2": "Zu schnelles Handeln kann Fehler verursachen.",
    "crossSpread.cards.lapassion.contre.variation3": "Das Feuer brennt stark, kann aber auch schnell erlöschen.",
    "crossSpread.cards.lapassion.synthese.variation1": "Leidenschaft ist eine Kraft, muss aber mit Vernunft ausgeglichen werden.",
    "crossSpread.cards.lapassion.synthese.variation2": "Diese Intensität bringt eine bedeutende Veränderung in dein Liebesleben.",
    "crossSpread.cards.lapassion.synthese.variation3": "Behalte die Leidenschaft, aber gehe bewusst vor.",
    //la chance
    "crossSpread.cards.lachance.pour.variation1": "Eine schöne romantische Gelegenheit stellt sich dir. Nutze sie.",
    "crossSpread.cards.lachance.pour.variation2": "Das Schicksal ist auf deiner Seite. Etwas Positives kommt.",
    "crossSpread.cards.lachance.pour.variation3": "Du ziehst die richtige Energie an. Das Glück ist dir gewogen.",
    "crossSpread.cards.lachance.contre.variation1": "Glück vergeht schnell: Sei nicht passiv.",
    "crossSpread.cards.lachance.contre.variation2": "Du könntest zweifeln und eine Chance verpassen.",
    "crossSpread.cards.lachance.contre.variation3": "Zu langes Warten kann dich die Gelegenheit kosten.",
    "crossSpread.cards.lachance.synthese.variation1": "Nutze den positiven Fluss. Er eröffnet dir einen neuen Weg.",
    "crossSpread.cards.lachance.synthese.variation2": "Eine wichtige Synchronizität wird dir helfen, voranzukommen.",
    "crossSpread.cards.lachance.synthese.variation3": "Dies ist ein Schlüsselmoment: Das Universum unterstützt dich auf deinem Liebesweg.",
    //le destin
    "crossSpread.cards.ledestin.pour.variation1": "Die Ereignisse fügen sich natürlich für dich. Vertraue dem Ablauf.",
    "crossSpread.cards.ledestin.pour.variation2": "Was passiert, war vorherbestimmt. Du wirst zur richtigen Person geführt.",
    "crossSpread.cards.ledestin.pour.variation3": "Eine Begegnung oder Situation ist das Ergebnis einer wichtigen Synchronizität.",
    "crossSpread.cards.ledestin.contre.variation1": "Lass nicht das Schicksal für dich entscheiden. Du musst auch handeln.",
    "crossSpread.cards.ledestin.contre.variation2": "Zu langes Warten könnte deine Entwicklung blockieren.",
    "crossSpread.cards.ledestin.contre.variation3": "Du riskierst, dem Zufall zu vertrauen, statt deinem Herzen zu folgen.",
    "crossSpread.cards.ledestin.synthese.variation1": "Das, was du erlebst, hat eine tiefe Bedeutung. Lass die Dinge natürlich geschehen.",
    "crossSpread.cards.ledestin.synthese.variation2": "Ein wichtiger Schritt bringt dich deinem Liebesweg näher.",
    "crossSpread.cards.ledestin.synthese.variation3": "Das Schicksal öffnet einen neuen Weg, aber du musst ihn selbst gehen.",
    //le silence
    "crossSpread.cards.lesilence.pour.variation1": "Stille hilft dir, dich zu zentrieren und deine wahren Gefühle zu hören.",
    "crossSpread.cards.lesilence.pour.variation2": "Diese Pause ermöglicht es dir zu verstehen, was du wirklich willst.",
    "crossSpread.cards.lesilence.pour.variation3": "Zeit für dich selbst bringt dich zurück zum Wesentlichen.",
    "crossSpread.cards.lesilence.contre.variation1": "Mangelnde Nachrichten können Verwirrung und Stress erzeugen.",
    "crossSpread.cards.lesilence.contre.variation2": "Der Rückzug des anderen kann dich Schlimmes vermuten lassen.",
    "crossSpread.cards.lesilence.contre.variation3": "Stille blockiert die Kommunikation und verzögert Fortschritte.",
    "crossSpread.cards.lesilence.synthese.variation1": "Eine Wiederaufnahme der Kommunikation ist nach dieser Stille möglich.",
    "crossSpread.cards.lesilence.synthese.variation2": "Stille öffnet die Tür zu tieferer Reflexion.",
    "crossSpread.cards.lesilence.synthese.variation3": "Diese ruhige Zeit bereitet eine wichtige Klärung vor.",
    //la vérité
    "crossSpread.cards.laverite.pour.variation1": "Eine Wahrheit erhellt endlich, was du gespürt hast.",
    "crossSpread.cards.laverite.pour.variation2": "Transparenz wird zu einem Vorteil. Alles klärt sich.",
    "crossSpread.cards.laverite.pour.variation3": "Ein ehrliches Gespräch eröffnet eine neue Dynamik.",
    "crossSpread.cards.laverite.contre.variation1": "Eine Wahrheit kann dich überraschen oder erschüttern.",
    "crossSpread.cards.laverite.contre.variation2": "Der andere könnte zögern, das zu sagen, was er wirklich fühlt.",
    "crossSpread.cards.laverite.contre.variation3": "Die Angst vor der Wahrheit blockiert eine wichtige Situation.",
    "crossSpread.cards.laverite.synthese.variation1": "Die Wahrheit ist befreiend: sie stellt alles wieder in Ordnung.",
    "crossSpread.cards.laverite.synthese.variation2": "Eine Offenbarung hilft dir, eine klare Entscheidung zu treffen.",
    "crossSpread.cards.laverite.synthese.variation3": "Aufrichtigkeit verwandelt die Beziehung und öffnet ein neues Kapitel.",
    //le cadeau
    "crossSpread.cards.lecadeau.pour.variation1": "Eine liebevolle Geste zeigt das Interesse der anderen Person.",
    "crossSpread.cards.lecadeau.pour.variation2": "Du wirst eine Überraschung erhalten, die dein Herz erwärmt.",
    "crossSpread.cards.lecadeau.pour.variation3": "Eine aufrichtige Handlung öffnet die Tür zur Nähe.",
    "crossSpread.cards.lecadeau.contre.variation1": "Lass dich nicht nur von einer materiellen Geste beeinflussen.",
    "crossSpread.cards.lecadeau.contre.variation2": "Eine Geste kann ein Bedürfnis nach Vergebung verbergen.",
    "crossSpread.cards.lecadeau.contre.variation3": "Du könntest mehr geben, als du zurückbekommst.",
    "crossSpread.cards.lecadeau.synthese.variation1": "Eine symbolische Geste verändert die Dynamik zwischen euch.",
    "crossSpread.cards.lecadeau.synthese.variation2": "Das Universum bietet dir eine Gelegenheit für Zuneigung und Offenheit.",
    "crossSpread.cards.lecadeau.synthese.variation3": "Ein aufrichtiger Austausch stärkt die Verbindung und schafft neuen Schwung.",
    //la blessure
    "crossSpread.cards.lablessure.pour.variation1": "Du wirst dir deiner Wunde bewusst und beginnst zu heilen.",
    "crossSpread.cards.lablessure.pour.variation2": "Das Anerkennen deines Schmerzes hilft dir, stärker voranzukommen.",
    "crossSpread.cards.lablessure.pour.variation3": "Dieses Bewusstsein öffnet dich für eine echte emotionale Erneuerung.",
    "crossSpread.cards.lablessure.contre.variation1": "Eine ungeheilte Wunde beeinflusst weiterhin deine Entscheidungen.",
    "crossSpread.cards.lablessure.contre.variation2": "Angst vor Verletzungen hindert dich am Vorankommen.",
    "crossSpread.cards.lablessure.contre.variation3": "Du bleibst an einem vergangenen Schmerz hängen, der dich erschöpft.",
    "crossSpread.cards.lablessure.synthese.variation1": "Die Heilung ist im Gange. Du fühlst dich endlich leichter.",
    "crossSpread.cards.lablessure.synthese.variation2": "Das Verstehen deiner Wunde hilft dir, alte Muster zu durchbrechen.",
    "crossSpread.cards.lablessure.synthese.variation3": "Diese Prüfung ebnet den Weg zu einer tiefen und positiven Veränderung.",
    //le nouveau départ
    "crossSpread.cards.lenouveaudepart.pour.variation1": "Du beginnst einen neuen, leichteren Zyklus.",
    "crossSpread.cards.lenouveaudepart.pour.variation2": "Eine positive Veränderung öffnet einen Weg, der mehr mit deinem Herzen übereinstimmt.",
    "crossSpread.cards.lenouveaudepart.pour.variation3": "Du lässt die Vergangenheit hinter dir und gehst auf Neues zu.",
    "crossSpread.cards.lenouveaudepart.contre.variation1": "Du könntest Angst haben, das Vertraute zu verlassen.",
    "crossSpread.cards.lenouveaudepart.contre.variation2": "Veränderung erscheint schwer zu akzeptieren.",
    "crossSpread.cards.lenouveaudepart.contre.variation3": "Du riskierst, im alten Zyklus stecken zu bleiben.",
    "crossSpread.cards.lenouveaudepart.synthese.variation1": "Eine große Transformation öffnet sich für dich.",
    "crossSpread.cards.lenouveaudepart.synthese.variation2": "Indem du das Alte loslässt, schaffst du Raum für eine neue Geschichte.",
    "crossSpread.cards.lenouveaudepart.synthese.variation3": "Dieser Neuanfang bringt dich genau dorthin, wo du sein musst.",
    //la fusion
    "crossSpread.cards.lafusion.pour.variation1": "Eine tiefe Verbindung entsteht zwischen euch. Gefühle werden geteilt.",
    "crossSpread.cards.lafusion.pour.variation2": "Du fühlst dich mit der anderen Person im Einklang, als ob alles natürlich fließt.",
    "crossSpread.cards.lafusion.pour.variation3": "Eine emotionale oder energetische Verbindung stärkt sich zwischen euch.",
    "crossSpread.cards.lafusion.contre.variation1": "Fusion kann zu intensiv sein und dein Gleichgewicht stören.",
    "crossSpread.cards.lafusion.contre.variation2": "Achte darauf, dich nicht in der anderen Person aufzulösen.",
    "crossSpread.cards.lafusion.contre.variation3": "Emotionale Abhängigkeit kann entstehen, wenn du nicht geerdet bleibst.",
    "crossSpread.cards.lafusion.synthese.variation1": "Die Verbindung ist real und kraftvoll, erfordert aber Reife und Balance.",
    "crossSpread.cards.lafusion.synthese.variation2": "Ihr seid auf einer tiefen Ebene verbunden, was eine wichtige Entwicklung eröffnet.",
    "crossSpread.cards.lafusion.synthese.variation3": "Diese Fusion kann zur Stärke werden, wenn jeder seine Identität bewahrt.",
    //la tentation
    "crossSpread.cards.latentation.pour.variation1": "Eine neue Anziehung erneuert dein Verlangen und deine Energie.",
    "crossSpread.cards.latentation.pour.variation2": "Jemand weckt deine Neugier und dein Verlangen.",
    "crossSpread.cards.latentation.pour.variation3": "Eine aufregende Situation bringt Abwechslung in deinen Alltag.",
    "crossSpread.cards.latentation.contre.variation1": "Eine Versuchung könnte dich von dem ablenken, was wirklich gut für dich ist.",
    "crossSpread.cards.latentation.contre.variation2": "Du riskierst, dich auf etwas Instabiles einzulassen.",
    "crossSpread.cards.latentation.contre.variation3": "Ein äußerer Einfluss trübt dein Urteil.",
    "crossSpread.cards.latentation.synthese.variation1": "Diese Versuchung lehrt dich etwas über deine wahren Wünsche.",
    "crossSpread.cards.latentation.synthese.variation2": "Bevor du handelst, stelle sicher, dass es mit deinem Herzen übereinstimmt.",
    "crossSpread.cards.latentation.synthese.variation3": "Die Versuchung kann ein Test sein, um zu klären, was du wirklich willst.",
    //la protection
    "crossSpread.cards.laprotection.pour.variation1": "Deine Intuition schützt dich und leitet dich zu den richtigen Entscheidungen.",
    "crossSpread.cards.laprotection.pour.variation2": "Du bist von wohlwollender Energie umgeben.",
    "crossSpread.cards.laprotection.pour.variation3": "Vorsicht hilft dir, Enttäuschungen zu vermeiden.",
    "crossSpread.cards.laprotection.contre.variation1": "Zu misstrauisch zu sein, kann eine schöne Chance blockieren.",
    "crossSpread.cards.laprotection.contre.variation2": "Deine Angst lässt dich Gefahren sehen, die nicht existieren.",
    "crossSpread.cards.laprotection.contre.variation3": "Übermäßiger Schutz kann eine Barriere für die Liebe werden.",
    "crossSpread.cards.laprotection.synthese.variation1": "Deine Intuition ist richtig: Hör wirklich auf sie.",
    "crossSpread.cards.laprotection.synthese.variation2": "Göttlicher Schutz hilft dir, sicher voranzukommen.",
    "crossSpread.cards.laprotection.synthese.variation3": "Ein Gleichgewicht zwischen Vorsicht und Offenheit bringt dich in die richtige Richtung.",
    //la libération
    "crossSpread.cards.laliberation.pour.variation1": "Du befreist dich endlich von etwas, das dich belastete.",
    "crossSpread.cards.laliberation.pour.variation2": "Ein Zyklus endet und du atmest wieder auf.",
    "crossSpread.cards.laliberation.pour.variation3": "Du lässt los und findest deine innere Kraft zurück.",
    "crossSpread.cards.laliberation.contre.variation1": "Du könntest dem Wandel aus Angst vor dem Unbekannten widerstehen.",
    "crossSpread.cards.laliberation.contre.variation2": "Du hältst noch an etwas fest, das gehen muss.",
    "crossSpread.cards.laliberation.contre.variation3": "Nicht loslassen verhindert, dass du zum Besten voranschreitest.",
    "crossSpread.cards.laliberation.synthese.variation1": "Eine große emotionale Befreiung öffnet einen neuen Weg.",
    "crossSpread.cards.laliberation.synthese.variation2": "Indem du das Alte loslässt, lädst du Erneuerung ein.",
    "crossSpread.cards.laliberation.synthese.variation3": "Dieses Loslassen bringt dich deinem wahren Liebesweg näher.",

        //Lunar Oracles
        "oracle.lunar.title": "Mondorakel",
        "oracle.lunar.description": "Die Mondphasen offenbaren deinen inneren Weg",
        "lunar.phaseSelection.title": "Mondorakel",
        "lunar.phaseSelection.subtitle": "Wähle die Mondphase, die mit deinem aktuellen Gemütszustand in Resonanz steht",
        "lunar.phases.newMoon.name": "Neumond",
        "lunar.phases.newMoon.description": "Neuanfänge und Absichten",
        "lunar.phases.firstQuarter.name": "Erstes Viertel",
        "lunar.phases.firstQuarter.description": "Handeln und Entscheidungen",
        "lunar.phases.fullMoon.name": "Vollmond",
        "lunar.phases.fullMoon.description": "Höhepunkt und Offenbarung",
        "lunar.phases.lastQuarter.name": "Letztes Viertel",
        "lunar.phases.lastQuarter.description": "Loslassen und Selbstreflexion",
        "lunar.cardGame.instruction": "Wähle die Karte, die dich anspricht",
        "lunar.interpretation.mindset": "Geisteszustand",
        "lunar.interpretation.guidance": "Leitung",
        "loading.lunar.message1": "Verbindung mit den Mondenergien...",
        "loading.lunar.message2": "Interpretation der kosmischen Zyklen...",
        "loading.lunar.message3": "Enthüllung deiner Führung...",
        "loading.lunar.message4": "Vorbereitung deiner Lesung...",
        "loading.lunar.subtitle": "Die Sterne richten dein Schicksal aus...",
        "lunar.cardGame.hint": "Höre auf deine Intuition...",
        "lunar.cardGame.singleCard": "Eine einzelne Karte wird die Botschaft des Mondes enthüllen",
        "lunar.cardGame.oneChoice": "1 Karte auswählen",
        "lunar.cardGame.oneCard": "1 Karte",
    "lunar.loading.connecting": "Verbindung mit den Mondenergien wird hergestellt...",
    "lunar.phaseSelection.cta": "Welche Energie resoniert heute",
    "lunar.phases.newMoon.keyword": "Beginn",
    "lunar.phases.firstQuarter.keyword": "Schwung",
    "lunar.phases.fullMoon.keyword": "Klarheit",
    "lunar.phases.lastQuarter.keyword": "Loslassen",
    "lunar.cardGame.oracle.newMoon.1": "Aufkeimende Absichten...",
    "lunar.cardGame.oracle.newMoon.2": "Der Schleier hebt sich...",
    "lunar.cardGame.oracle.newMoon.3": "Die Dunkelheit offenbart...",
    "lunar.cardGame.oracle.firstQuarter.1": "Der Schwung baut sich auf...",
    "lunar.cardGame.oracle.firstQuarter.2": "Die Handlung ruft...",
    "lunar.cardGame.oracle.firstQuarter.3": "Wähle deinen Weg...",
    "lunar.cardGame.oracle.fullMoon.1": "Das Licht erhellt...",
    "lunar.cardGame.oracle.fullMoon.2": "Die Wahrheit zeigt sich...",
    "lunar.cardGame.oracle.fullMoon.3": "Das Geheimnis entfaltet sich...",
    "lunar.cardGame.oracle.lastQuarter.1": "Loslassen führt...",
    "lunar.cardGame.oracle.lastQuarter.2": "Die Weisheit spricht...",
    "lunar.cardGame.oracle.lastQuarter.3": "Die Seele wird befreit...",
      
    // Karten des Mondorakels
    // Neumond
    "cards.lunar.intention.name": "Absicht",
    "cards.lunar.intention.mindset.var1": "{name}, du spürst ein tiefes Bedürfnis, etwas Neues in deinem Leben zu beginnen",
    "cards.lunar.intention.mindset.var2": "Im Moment ist dein Herz offen und bereit, neue Ideen oder Wünsche aufzunehmen, {name}",
    "cards.lunar.intention.mindset.var3": "Du trittst in eine Phase ein, in der du von vorne anfangen und eine neue Richtung wählen kannst",
    "cards.lunar.intention.guidance.var1": "Nimm dir Zeit, um zu überlegen, was du wirklich für dich willst.",
    "cards.lunar.intention.guidance.var2": "Formuliere eine klare, einfache und ehrliche Absicht.",
    "cards.lunar.intention.guidance.var3": "Stell dir sanft vor, wie sich dein Leben in die Richtung entwickelt, die du dir wünschst.",

    "cards.lunar.intuition.name": "Intuition",
    "cards.lunar.intuition.mindset.var1": "{name}, du spürst Dinge, ohne sie immer erklären zu können",
    "cards.lunar.intuition.mindset.var2": "Eine kleine innere Stimme versucht gerade, dich zu führen",
    "cards.lunar.intuition.mindset.var3": "Tief in dir weißt du bereits, was gut für dich ist",
    "cards.lunar.intuition.guidance.var1": "Gönn dir einen Moment der Ruhe, um auf dich selbst zu hören.",
    "cards.lunar.intuition.guidance.var2": "Vertraue deinem Gefühl, auch wenn es leise ist.",
    "cards.lunar.intuition.guidance.var3": "Deine Intuition ist da, um dich zu schützen und zu unterstützen.",

    "cards.lunar.renouveau.name": "Erneuerung",
    "cards.lunar.renouveau.mindset.var1": "Ein neuer Zyklus beginnt für dich, {name}, und bringt frische Energie",
    "cards.lunar.renouveau.mindset.var2": "Manches aus der Vergangenheit verliert nach und nach an Bedeutung",
    "cards.lunar.renouveau.mindset.var3": "Du bist bereit, anders voranzugehen und zu verändern, was dir nicht mehr dient",
    "cards.lunar.renouveau.guidance.var1": "Lass los, was dir nichts Positives mehr bringt.",
    "cards.lunar.renouveau.guidance.var2": "Erlaube dir, zu verändern, ohne Schuldgefühle zu haben.",
    "cards.lunar.renouveau.guidance.var3": "Jeder neue Anfang beginnt mit einem kleinen Schritt.",

    "cards.lunar.eveil.name": "Erwachen",
    "cards.lunar.eveil.mindset.var1": "{name}, du beginnst, die Dinge bewusster wahrzunehmen",
    "cards.lunar.eveil.mindset.var2": "Ein neues Gefühl oder eine neue Idee entsteht ruhig in dir",
    "cards.lunar.eveil.mindset.var3": "Du erkennst, was für dich wichtig ist",
    "cards.lunar.eveil.guidance.var1": "Nimm diese Erkenntnisse ruhig an.",
    "cards.lunar.eveil.guidance.var2": "Versuche nicht, alles sofort zu verstehen.",
    "cards.lunar.eveil.guidance.var3": "Erwachen geschieht Schritt für Schritt, ganz natürlich.",

    "cards.lunar.potentiel.name": "Potenzial",
    "cards.lunar.potentiel.mindset.var1": "{name}, viele Möglichkeiten stehen dir offen, auch wenn du sie noch nicht siehst",
    "cards.lunar.potentiel.mindset.var2": "Deine Zukunft beginnt, sich aus dem zu formen, was du jetzt tust",
    "cards.lunar.potentiel.mindset.var3": "Du trägst ungenutzte Ressourcen in dir",
    "cards.lunar.potentiel.guidance.var1": "Vertraue deinen Fähigkeiten, auch wenn du zweifelst.",
    "cards.lunar.potentiel.guidance.var2": "Gib den Dingen Zeit, sich zu entwickeln.",
    "cards.lunar.potentiel.guidance.var3": "Jede kleine Handlung trägt zu deiner Zukunft bei.",

    "cards.lunar.silence.name": "Stille",
    "cards.lunar.silence.mindset.var1": "{name}, dein Geist braucht Ruhe und Entspannung",
    "cards.lunar.silence.mindset.var2": "Die Stille hilft dir, besser zu verstehen, was du fühlst",
    "cards.lunar.silence.mindset.var3": "Du brauchst nicht sofort Antworten, um voranzukommen",
    "cards.lunar.silence.guidance.var1": "Gönn dir Momente ohne Lärm oder Ablenkung.",
    "cards.lunar.silence.guidance.var2": "Ruhe erlaubt es den Gedanken, sich zu ordnen.",
    "cards.lunar.silence.guidance.var3": "Antworten erscheinen oft, wenn wir aufhören, sie zu suchen.",
    // Erstes Viertel
    "cards.lunar.motivation.name": "Motivation",
    "cards.lunar.motivation.mindset.var1": "{name}, du spürst eine neue Energie, die dich antreibt, jeden Tag voranzugehen und zu handeln",
    "cards.lunar.motivation.mindset.var2": "Dein innerer Antrieb erwacht und lenkt dich zu dem, was dir am Herzen liegt",
    "cards.lunar.motivation.mindset.var3": "Du spürst Kraft, Dinge voranzubringen, auch Schritt für Schritt",
    "cards.lunar.motivation.guidance.var1": "Leite diese Energie auf ein klares, einfaches Ziel.",
    "cards.lunar.motivation.guidance.var2": "Gehe Schritt für Schritt, ohne dich zu beurteilen oder zu hetzen.",
    "cards.lunar.motivation.guidance.var3": "Jeder kleine Schritt zählt und bringt dich deinem Ziel näher.",

    "cards.lunar.courage.name": "Mut",
    "cards.lunar.courage.mindset.var1": "{name}, du hast die Kraft, allem zu begegnen, auch wenn es schwer ist",
    "cards.lunar.courage.mindset.var2": "Dein Mut wächst mit jeder kleinen Herausforderung, die du meisterst",
    "cards.lunar.courage.mindset.var3": "Du bist stärker und fähiger, als du denkst",
    "cards.lunar.courage.guidance.var1": "Handle trotz auftretender Zweifel und Ängste.",
    "cards.lunar.courage.guidance.var2": "Sieh Angst als Signal zum Vorwärtsgehen, nicht als Hindernis.",
    "cards.lunar.courage.guidance.var3": "Vertraue auf deine innere Stärke, sie begleitet dich immer.",

    "cards.lunar.epanouissement.name": "Entfaltung",
    "cards.lunar.epanouissement.mindset.var1": "Du gehst auf mehr Harmonie in deinem Leben und deinen Entscheidungen zu, {name}",
    "cards.lunar.epanouissement.mindset.var2": "Du kommst dem näher, was dich wirklich glücklich macht",
    "cards.lunar.epanouissement.mindset.var3": "Dein Potenzial zeigt sich natürlich, wenn du auf dein Herz hörst",
    "cards.lunar.epanouissement.guidance.var1": "Pflege jeden Tag, was dir guttut.",
    "cards.lunar.epanouissement.guidance.var2": "Erlaube dir, in deinem Tempo zu wachsen, ohne dich zu vergleichen.",
    "cards.lunar.epanouissement.guidance.var3": "Entfaltung entsteht, wenn du im Einklang mit deinen wahren Gefühlen lebst.",

    "cards.lunar.determination.name": "Entschlossenheit",
    "cards.lunar.determination.mindset.var1": "Du weißt, was du willst, und gehst auf deine Ziele zu, {name}",
    "cards.lunar.determination.mindset.var2": "Dein Wille bleibt stark trotz Hindernissen und Schwierigkeiten",
    "cards.lunar.determination.mindset.var3": "Du bist bereit, dich voll für das zu engagieren, was wirklich zählt",
    "cards.lunar.determination.guidance.var1": "Bleib deinem Weg und deinen Entscheidungen treu.",
    "cards.lunar.determination.guidance.var2": "Lass dich nicht von Zweifeln oder Hindernissen ablenken.",
    "cards.lunar.determination.guidance.var3": "Deine Beständigkeit und Ausdauer werden langfristig den Unterschied machen.",

    "cards.lunar.initiative.name": "Initiative",
    "cards.lunar.initiative.mindset.var1": "Ein Impuls treibt dich zum Handeln an, {name}, höre auf diese Bewegung",
    "cards.lunar.initiative.mindset.var2": "Es ist Zeit, den ersten Schritt zu tun, um zu bekommen, was du willst",
    "cards.lunar.initiative.mindset.var3": "Du spürst den Impuls des Beginns und den Mut zu wagen",
    "cards.lunar.initiative.guidance.var1": "Trau dich zu handeln, auch wenn der Weg unbekannt scheint.",
    "cards.lunar.initiative.guidance.var2": "Verschiebe nicht, was dein Herz dich jetzt tun lässt.",
    "cards.lunar.initiative.guidance.var3": "Initiative zu ergreifen eröffnet immer neue Möglichkeiten.",

    "cards.lunar.strategie.name": "Strategie",
    "cards.lunar.strategie.mindset.var1": "Du denkst klar und überlegt über die nächsten Schritte in deinem Weg nach, {name}",
    "cards.lunar.strategie.mindset.var2": "Jede Entscheidung verdient sorgfältiges Nachdenken",
    "cards.lunar.strategie.mindset.var3": "Du gehst mit Bedacht vor, in Balance von Herz und Verstand",
    "cards.lunar.strategie.guidance.var1": "Plane deine Schritte flexibel und offen.",
    "cards.lunar.strategie.guidance.var2": "Kombiniere Nachdenken und Intuition, um die besten Entscheidungen zu treffen.",
    "cards.lunar.strategie.guidance.var3": "Klarheit und Gelassenheit entstehen durch eine wohlüberlegte Vision.",
    // Vollmond
    "cards.lunar.clarte.name": "Klarheit",
    "cards.lunar.clarte.mindset.var1": "Die Dinge werden für dich klarer, {name}, und du beginnst zu verstehen, was zuvor verwirrend war",
    "cards.lunar.clarte.mindset.var2": "Ein Schleier hebt sich langsam über deiner Situation und alles erscheint deutlicher",
    "cards.lunar.clarte.mindset.var3": "Endlich siehst du die Wahrheit und was in diesem Zyklus wirklich wichtig ist",
    "cards.lunar.clarte.guidance.var1": "Nutze diese Klarheit, um gerechte und einfache Entscheidungen zu treffen.",
    "cards.lunar.clarte.guidance.var2": "Vertraue dem, was du jetzt beobachtest und fühlst.",
    "cards.lunar.clarte.guidance.var3": "Die Wahrheit schenkt dir innere Ruhe und Gelassenheit.",

    "cards.lunar.serenite.name": "Gelassenheit",
    "cards.lunar.serenite.mindset.var1": "Ein tiefer innerer Frieden umhüllt dich und hilft dir, zentriert zu bleiben, {name}",
    "cards.lunar.serenite.mindset.var2": "Du fühlst dich im Einklang mit dir selbst und der Welt um dich herum",
    "cards.lunar.serenite.mindset.var3": "Alles erscheint einfacher und an seinem richtigen Platz, auch komplizierte Situationen",
    "cards.lunar.serenite.guidance.var1": "Genieße diesen Moment der Ruhe und lass dich treiben.",
    "cards.lunar.serenite.guidance.var2": "Atme tief durch und lass alle Spannungen los.",
    "cards.lunar.serenite.guidance.var3": "Gelassenheit ist dein Anker, um mit Klarheit voranzugehen.",

    "cards.lunar.bilan.name": "Rückblick",
    "cards.lunar.bilan.mindset.var1": "{name}, es ist Zeit, zurückzuschauen und den Weg anzuerkennen, den du gegangen bist",
    "cards.lunar.bilan.mindset.var2": "Du wirst dir all deiner Entwicklungen und Erkenntnisse bewusst",
    "cards.lunar.bilan.mindset.var3": "Jede Erfahrung in diesem Zyklus hat dir wertvolle Lehren gebracht",
    "cards.lunar.bilan.guidance.var1": "Feiere deine Fortschritte, auch die kleinsten.",
    "cards.lunar.bilan.guidance.var2": "Ziehe Lehren aus dem, was du erlebt hast, um besser voranzukommen.",
    "cards.lunar.bilan.guidance.var3": "Dieser Rückblick hilft dir, mit Vertrauen und Weisheit weiterzugehen.",

    "cards.lunar.accomplissement.name": "Erfüllung",
    "cards.lunar.accomplissement.mindset.var1": "Du erntest endlich die Früchte deiner Anstrengungen, {name}, und wirst dir dessen bewusst",
    "cards.lunar.accomplissement.mindset.var2": "Ein Abschluss zeigt sich und du verstehst alles, was du aufgebaut hast",
    "cards.lunar.accomplissement.mindset.var3": "Du bist stolz auf dich und alles, was du erreicht hast",
    "cards.lunar.accomplissement.guidance.var1": "Erkenne jeden kleinen Erfolg an und genieße ihn vollständig.",
    "cards.lunar.accomplissement.guidance.var2": "Nimm diesen Erfolg mit Einfachheit und Demut an.",
    "cards.lunar.accomplissement.guidance.var3": "Nimm dir Zeit, diesen Moment zu feiern, bevor du weitermachst.",

    "cards.lunar.verite.name": "Wahrheit",
    "cards.lunar.verite.mindset.var1": "Eine wichtige Wahrheit offenbart sich dir, {name}, und erleuchtet deine Situation",
    "cards.lunar.verite.mindset.var2": "Du siehst die Dinge jetzt so, wie sie sind, ohne Filter oder Illusionen",
    "cards.lunar.verite.mindset.var3": "Was verborgen war, wird klar und offensichtlich, zu deinem Besten",
    "cards.lunar.verite.guidance.var1": "Begegne dieser Wahrheit mit Offenheit und Mut.",
    "cards.lunar.verite.guidance.var2": "Bleibe im Einklang mit dem, was du als richtig erkennst.",
    "cards.lunar.verite.guidance.var3": "Diese Klarheit hilft dir, ohne Angst und mit Vertrauen voranzuschreiten.",

    "cards.lunar.gratitude.name": "Dankbarkeit",
    "cards.lunar.gratitude.mindset.var1": "Ein Gefühl der Dankbarkeit erfüllt dich, {name}, und dein Herz öffnet sich",
    "cards.lunar.gratitude.mindset.var2": "Du erkennst alles, was bereits in deinem Leben vorhanden ist",
    "cards.lunar.gratitude.mindset.var3": "Du spürst die Schönheit und Fülle um dich herum",
    "cards.lunar.gratitude.guidance.var1": "Sei dankbar für das, was du hast und täglich erlebst.",
    "cards.lunar.gratitude.guidance.var2": "Ehre jede Erfahrung, auch die kleinen und unauffälligen.",
    "cards.lunar.gratitude.guidance.var3": "Dankbarkeit erhöht deine Energie und zieht noch mehr Schönes in dein Leben.",
    // Letztes Viertel
    "cards.lunar.detachement.name": "Loslassen",
    "cards.lunar.detachement.mindset.var1": "Es ist Zeit, das loszulassen, was dich belastet, {name}, und deinen Geist zu befreien",
    "cards.lunar.detachement.mindset.var2": "Du kannst ohne Angst loslassen und den Wandel willkommen heißen",
    "cards.lunar.detachement.mindset.var3": "Manches muss nicht mehr festgehalten werden, lass es sanft los",
    "cards.lunar.detachement.guidance.var1": "Befreie dich ohne Schuldgefühle und sei freundlich zu dir selbst.",
    "cards.lunar.detachement.guidance.var2": "Loslassen schafft Raum zum Atmen und Kreieren.",
    "cards.lunar.detachement.guidance.var3": "Vertraue dem Fluss des Lebens und gehe in deinem eigenen Tempo voran.",

    "cards.lunar.prisederecul.name": "Abstand nehmen",
    "cards.lunar.prisederecul.mindset.var1": "{name}, nimm Abstand und betrachte deine Situation ruhig",
    "cards.lunar.prisederecul.mindset.var2": "Gib dir Zeit zu verstehen, was wirklich passiert",
    "cards.lunar.prisederecul.mindset.var3": "Abstand hilft dir, die Dinge klarer und mit Übersicht zu sehen",
    "cards.lunar.prisederecul.guidance.var1": "Triff keine voreiligen Entscheidungen, atme zuerst.",
    "cards.lunar.prisederecul.guidance.var2": "Ruhe bringt klarere und einfachere Antworten.",
    "cards.lunar.prisederecul.guidance.var3": "Gib dir Zeit zum Nachdenken, bevor du handelst.",

    "cards.lunar.retourasoi.name": "Rückkehr zu sich selbst",
    "cards.lunar.retourasoi.mindset.var1": "Du spürst das Bedürfnis, dich zu zentrieren, {name}, und dich wirklich zu hören",
    "cards.lunar.retourasoi.mindset.var2": "Deine innere Welt fordert dich auf, auf dich selbst zu achten",
    "cards.lunar.retourasoi.mindset.var3": "Du verbindest dich sanft wieder mit deinem Wesen und deinen Bedürfnissen",
    "cards.lunar.retourasoi.guidance.var1": "Kümmere dich liebevoll und aufmerksam um dich.",
    "cards.lunar.retourasoi.guidance.var2": "Höre darauf, was dein Herz und dein Körper dir sagen.",
    "cards.lunar.retourasoi.guidance.var3": "Diese Rückkehr zu dir selbst macht dich stärker und ruhiger.",

    "cards.lunar.pardon.name": "Vergebung",
    "cards.lunar.pardon.mindset.var1": "Du bist bereit, dein Herz zu erleichtern, {name}, und dich von der Vergangenheit zu befreien",
    "cards.lunar.pardon.mindset.var2": "Die Vergangenheit kann geheilt werden, wenn du dich für Vergebung entscheidest",
    "cards.lunar.pardon.mindset.var3": "Vergebung schenkt innere Freiheit und tiefe Erleichterung",
    "cards.lunar.pardon.guidance.var1": "Befreie dich von Groll, ohne dich selbst zu verurteilen.",
    "cards.lunar.pardon.guidance.var2": "Vergebung beginnt bei dir und für dich.",
    "cards.lunar.pardon.guidance.var3": "Lass los, was dich zurückhält, um leichter voranzukommen.",

    "cards.lunar.sagesse.name": "Weisheit",
    "cards.lunar.sagesse.mindset.var1": "Du integrierst, was du erlebt hast, {name}, und verstehst die gelernten Lektionen besser",
    "cards.lunar.sagesse.mindset.var2": "Jede Erfahrung erhält nun eine tiefere Bedeutung",
    "cards.lunar.sagesse.mindset.var3": "Dein Verständnis wird klarer und unterstützt dich bei deinen Entscheidungen",
    "cards.lunar.sagesse.guidance.var1": "Ehre deinen Weg und alles, was du durchgemacht hast.",
    "cards.lunar.sagesse.guidance.var2": "Vertraue auf deine Erfahrungen, um deine nächsten Schritte zu leiten.",
    "cards.lunar.sagesse.guidance.var3": "Weisheit entsteht aus Integration und Selbstbeobachtung.",

    "cards.lunar.repos.name": "Ruhe",
    "cards.lunar.repos.mindset.var1": "Dein Körper und Geist brauchen Ruhe, {name}, das ist normal",
    "cards.lunar.repos.mindset.var2": "Der Zyklus geht zu Ende und du darfst ohne Schuldgefühle langsamer werden",
    "cards.lunar.repos.mindset.var3": "Erlaube dir, dich zu erholen, um anschließend neu zu beginnen",
    "cards.lunar.repos.guidance.var1": "Gönne dir Ruhe und achte auf deine Bedürfnisse.",
    "cards.lunar.repos.guidance.var2": "Ruhe und Entspannung bereiten einen Neuanfang vor.",
    "cards.lunar.repos.guidance.var3": "Ruhe ist Teil des Weges und macht dich stärker.",

    
      // DEUTSCH - Alle neuen Übersetzungen für die Variationen

    // ========== VERSCHIEDENE BEGRÜSSUNGEN ==========

    // Tägliche Legung - Varianten
    "interpretation.daily.greeting.var1":
      "Hallo {name}! Ich habe heute eine besondere Botschaft für dich.",
    "interpretation.daily.greeting.var2":
      "Hi {name}! Dein täglicher Führer wartet ungeduldig auf dich.",
    "interpretation.daily.greeting.var3":
      "Hello {name}! Eine wunderschöne Energie begleitet dich heute.",
    "interpretation.daily.greeting.var4":
      "Guten Tag {name}! Kosmische Energien haben etwas für dich vorbereitet.",

    // Tarot - Varianten
    "interpretation.tarot.greeting.var1":
      "Hi {name}! Deine Tarot-Legung enthüllt faszinierende Aspekte deines Lebens.",
    "interpretation.tarot.greeting.var2":
      "Hello {name}! Die Tarot-Karten haben kraftvolle Botschaften für dich.",
    "interpretation.tarot.greeting.var3":
      "Guten Tag {name}! Deine Tarot-Legung offenbart wichtige Wahrheiten.",
    "interpretation.tarot.greeting.var4":
      "Hallo {name}! Die Tarot-Arkanen sprechen klar über deine Zukunft.",

    // Engel - Varianten
    "interpretation.angels.greeting.var1":
      "Hallo {name}! Das Engelreich strömt über vor Liebesbotschaften für dich.",
    "interpretation.angels.greeting.var2":
      "Hi {name}! Deine himmlischen Führer erleuchten heute deinen Weg.",
    "interpretation.angels.greeting.var3":
      "Hello {name}! Engel singen Melodien der Führung speziell für dich.",
    "interpretation.angels.greeting.var4":
      "Guten Tag {name}! Eine engelhafte Symphonie erklingt in den himmlischen Sphären für dich.",

    // Runen - Varianten
    "interpretation.runes.greeting.var1":
      "Heil {name}! Die Runen der Alten sprechen von deinem Wikinger-Erbe.",
    "interpretation.runes.greeting.var2":
      "Hallo {name}! Das Echo der nordischen Götter hallt durch diese heiligen Runen.",
    "interpretation.runes.greeting.var3":
      "Guten Tag {name}! Die jahrtausendealten Runen enthüllen die Kraft, die in dir schlummert.",
    "interpretation.runes.greeting.var4":
      "Hello {name}! Die Weisheit der Wikinger überdauert die Zeitalter, um dich zu führen.",

    // ========== VERSCHIEDENE ÜBERGÄNGE ==========

    // Vergangenheits-Übergänge
    "interpretation.transition.past.var1":
      "Diese Erfahrungen haben dich wirklich wachsen lassen und stärker{genderSuffix} gemacht.",
    "interpretation.transition.past.var2":
      "Diese Momente haben deinen Charakter und deine Widerstandsfähigkeit geformt.",
    "interpretation.transition.past.var3":
      "All das hat dazu beigetragen, die Person zu formen, die du geworden{genderSuffix} bist.",
    "interpretation.transition.past.var4":
      "Diese Prüfungen haben dir kostbare Weisheit gegeben.",
    "interpretation.transition.past.var5":
      "Dank dieser Erfahrungen hast du deine innere Stärke entwickelt.",
    "interpretation.transition.past.var6":
      "Diese Ereignisse haben dir wichtige Lebenslektionen gelehrt.",
    "interpretation.transition.past.var7":
      "All diese Erfahrung hat deine Seele und deinen Weg bereichert.",
    "interpretation.transition.past.var8":
      "Diese Herausforderungen haben deine wahre Natur und Entschlossenheit offenbart.",

    // Gegenwarts-Übergänge
    "interpretation.transition.present.var1":
      "Du befindest dich in einer wichtigen Periode, die schöne Dinge ankündigt.",
    "interpretation.transition.present.var2":
      "Diese Lebensphase eröffnet vielversprechende Perspektiven.",
    "interpretation.transition.present.var3":
      "Es ist ein Schlüsselmoment, der deine strahlende Zukunft vorbereitet.",
    "interpretation.transition.present.var4":
      "Diese aktuelle Periode legt die Grundlage für deinen zukünftigen Erfolg.",
    "interpretation.transition.present.var5":
      "Du durchlebst einen Übergang, der dein Leben positiv transformieren wird.",
    "interpretation.transition.present.var6":
      "Dieser gegenwärtige Moment trägt große Versprechen in sich.",
    "interpretation.transition.present.var7":
      "Diese Etappe markiert eine positive Wende in deiner Existenz.",
    "interpretation.transition.present.var8":
      "Du durchläufst eine Phase, die dir viel Zufriedenheit bringen wird.",

    // Zukunfts-Übergänge
    "interpretation.transition.future.var1":
      "Diese Energie wird dein Leben auf positive und dauerhafte Weise transformieren.",
    "interpretation.transition.future.var2":
      "Diese Einflüsse werden wunderbare Veränderungen in dein Leben bringen.",
    "interpretation.transition.future.var3":
      "Diese Kraft wird außergewöhnliche Gelegenheiten für dich schaffen.",
    "interpretation.transition.future.var4":
      "Diese Schwingungen werden alles anziehen, was du brauchst.",
    "interpretation.transition.future.var5":
      "Diese Energie wird deine liebsten Träume manifestieren.",
    "interpretation.transition.future.var6":
      "Diese göttlichen Einflüsse werden deinen Weg erleuchten.",
    "interpretation.transition.future.var7":
      "Diese Macht wird dein verborgenes Potenzial freischalten.",
    "interpretation.transition.future.var8":
      "Diese Energien werden alle Aspekte deines Lebens synchronisieren.",

    // ========== VERSCHIEDENE RATSCHLÄGE ==========

    // Vorlagen für die endgültige ENGELSBOTSCHAFT (Satzanfang)
    "interpretation.angels.template.message.var1":"Die Engel wachen über dich {name} und senden dir eine wichtige Botschaft:",
    "interpretation.angels.template.message.var2":"Eine sanfte Botschaft richtet sich an dich {name}. Die Führer möchten, dass du dies hörst:",
    "interpretation.angels.template.message.var3":"Die himmlischen Wesen begleiten dich {name} und flüstern dir diese Botschaft zu:",
    "interpretation.angels.template.message.var4":"Eine leuchtende Energie umgibt dich heute {name}. Hier ist die Führung, die sie dir bringt:",
    "interpretation.angels.template.message.var5":"{name}, die Engel umhüllen dich mit Wohlwollen und übermitteln dir dies:",
    "interpretation.angels.template.message.var6":"Eine engelsgleiche Präsenz nähert sich dir {name}. Öffne dein Herz für diese Botschaft:",
    "interpretation.angels.template.message.var7":"Deine Seele wird gehört {name}. Die Engel teilen diesen Rat, um voranzukommen:",
    "interpretation.angels.template.message.var8":"Eine göttliche Präsenz wendet sich dir zu {name}. Hier ist die Botschaft, die du bereit bist zu empfangen:",

    // Verschiedene Ratschläge ENGEL (Satzende)
    "interpretation.advice.var1":"Dein Schutzengel möchte, dass du weißt, dass deine Intuition ein sicherer Führer ist: vertraue ihr vollständig.",
    "interpretation.advice.var2":"Die Engel erinnern dich daran, auf dein Herz zu hören: es kennt bereits die Richtung, die dir Frieden bringt.",
    "interpretation.advice.var3":"Dein Lichtführer lädt dich ein, auf die Zeichen um dich herum zu achten, denn nichts geschieht zufällig.",
    "interpretation.advice.var4":"Die himmlischen Wesen möchten, dass du im Einklang mit dem bleibst, was du tief empfindest. Dort liegt deine Wahrheit.",
    "interpretation.advice.var5":"Dein Schutzengel ermutigt dich, an deine innere Stärke zu glauben: sie verlässt dich niemals.",
    "interpretation.advice.var6":"Ein göttliches Flüstern rät dir, dich den sich bietenden Möglichkeiten zu öffnen: sie sind da, um dir zu helfen.",
    "interpretation.advice.var7":"Die Engel bitten dich, langsamer zu werden und zu atmen: Geduld wird deinen Weg auf natürliche Weise klären.",
    "interpretation.advice.var8":"Dein Engelguide möchte, dass du weiterhin mit Vertrauen voranschreitest: deine Bemühungen sind bereits gesegnet.",
    "interpretation.advice.var9":"Ein himmlisches Licht lädt dich ein, deinen Optimismus zu bewahren, da er hoch positive Energien zu dir zieht.",
    "interpretation.advice.var10":"Dein Schutzengel flüstert dir zu, dein Selbstvertrauen zu stärken: es öffnet die Türen, auf die du lange gewartet hast.",

    // Anfänge von TAROT-Sätzen
    "interpretation.tarot.template.advice.var1":"Hör gut zu {name},",
    "interpretation.tarot.template.advice.var2":"Mein Rat an dich {name},",
    "interpretation.tarot.template.advice.var3":"Ich werde dir etwas sagen {name},",
    "interpretation.tarot.template.advice.var4":"Merke dir eines {name},",
    "interpretation.tarot.template.advice.var5":"Nimm dir einen Moment {name},",
    "interpretation.tarot.template.advice.var6":"Ich sage es dir klar {name},",
    "interpretation.tarot.template.advice.var7":"Hier ist mein Rat für dich {name},",
    "interpretation.tarot.template.advice.var8":"Ich sage es dir {name},",
    "interpretation.tarot.template.advice.var9":"Vergiss nicht {name},",
    "interpretation.tarot.template.advice.var10":"{name},",

    // Enden von TAROT-Sätzen
    "interpretation.tarot.advice.var1":"deine aktuellen Entscheidungen werden direkte Auswirkungen auf deine Zukunft haben, also sei aufmerksam.",
    "interpretation.tarot.advice.var2":"Vertraue deinem Instinkt und wage den Weg, der sich richtig anfühlt, auch wenn er dir etwas Angst macht.",
    "interpretation.tarot.advice.var3":"deine Gefühle sind starke Führer, folge ihnen mit Vertrauen.",
    "interpretation.tarot.advice.var4":"manchmal ist es besser loszulassen, als Dinge zu erzwingen.",
    "interpretation.tarot.advice.var5":"du hast alle Schlüssel zum Erfolg, also gib nicht auf!",
    "interpretation.tarot.advice.var6":"du hast bereits alles, was du brauchst, in dir, um voranzukommen: glaube an dich!",
    "interpretation.tarot.advice.var7":"lass dich nicht vom Zweifel aufhalten, gehe trotzdem voran.",
    "interpretation.tarot.advice.var8": "Deine Intuition zeigt dir klar den richtigen Weg. Vertraue ihr voll und ganz!",
    "interpretation.tarot.advice.var9":"bleib positiv, deine Energie zieht an, was du brauchst.",
    "interpretation.tarot.advice.var10":"akzeptiere, was kommt, und geh voran, der Moment ist günstig.",
    
// AZRAËL
    "wizard.title": "Azraël der Seher",
      "wizard.subtitle.home": "Der große Magier enthüllt die Geheimnisse deines Schicksals",
      "wizard.subtitle.question": "Formuliere deine Frage klar",
      "wizard.subtitle.channeling": "✧ Azraël befragt die kosmischen Kräfte... ✧",
      "wizard.oracleResponse": "Azraels Antwort",
      "wizard.subtitle.answer": "✦ Mystische Offenbarung ✦",
      "oracle.wizard.description": "Konsultiere den großen Magier, um dein Schicksal zu enthüllen",
      "wizard.consultButton": "Azraël konsultieren",
      "wizard.backButton": "← Zurück",
      "wizard.backHome": "← Zurück zur Startseite",
      "wizard.newQuestion": "Neue Frage",
      "wizard.askTitle": "Stelle Deine Frage",
      "wizard.questionLabel": "Deine Frage an den Magier",
      "wizard.questionPlaceholder": "Schreibe deine Frage...",
      "wizard.adviceTitle": "Mystischer Rat",
      "wizard.adviceText": "Azraël antwortet mit ja, nein oder vielleicht. Stelle eine geschlossene Frage, um die Führung der Sterne zu erhalten.",
      "wizard.consultAction": "Azraël konsultieren",
      "wizard.channeling": "Azraël befragt die kosmischen Kräfte...",
      "wizard.yourQuestion": "Deine Frage",
      "wizard.disclaimer": "Azraëls Antworten sind symbolisch und dienen der Unterhaltung. Höre auf dein Herz bei wichtigen Entscheidungen.",
      "wizard.answer.yes": "Die Sterne bestätigen: Ja, ohne jeden Zweifel",
      "wizard.answer.no": "Die Sterne widersprechen: Nein, dieser Weg ist nicht deiner",
      "wizard.answer.maybe": "Das Schicksal zögert: Vielleicht, achte auf die Zeichen",
      "wizard.answer.veryLikely": "Die kosmischen Kräfte richten sich günstig aus",
      "wizard.answer.unlikely": "Die Vorzeichen sind vorerst ungünstig",
      "wizard.answer.certain": "Absolute Gewissheit: Der Kosmos hat gesprochen",
      "wizard.answer.noChance": "Keine Chance: Die Sterne führen dich anderswohin",
      "wizard.answer.askLater": "Die Zeit ist nicht günstig, komm später zurück",
      "wizard.answer.dontCount": "Rechne nicht damit: Andere Türen werden sich öffnen",
      "wizard.answer.yesDefinitely": "Ja, definitiv! Die Energien sind perfekt",
      "wizard.answer.signsYes": "Alle Zeichen deuten auf Ja hin",
      "wizard.answer.signsNo": "Die Vorzeichen sind klar: Nein",
      "wizard.answer.unclear": "Der Schleier zwischen den Welten bleibt undurchsichtig",
      "wizard.answer.trustIntuition": "Höre auf deine innere Stimme, sie kennt die Wahrheit",
      "wizard.astraConnection": "⟡ Astrale Verbindung",
    
     // MENU LÉGAL
    "legal.menu.title": "Rechtliches Menü",
    "legal.mentions": "Impressum",
    "legal.privacy": "Datenschutzrichtlinie",

    // PREMIUM-MODAL
    "premium.button.label": "Premium werden",
    "premium.title": "Werbung entfernen!",
    "premium.subtitle": "Mach deine Ziehungen ohne Werbung!",
    "premium.plan.1month": "1 Monat",
    "premium.plan.1month.subtitle": "Ohne Verpflichtung",
    "premium.plan.3months": "3 Monate",
    "premium.plan.3months.subtitle": "Bestes Angebot",
    "premium.plan.discount": "-25%",
    "premium.button.subscribe": "Jetzt abonnieren",
    "premium.button.select": "Angebot auswählen",
    "premium.button.processing": "Wird verarbeitet...",
    "premium.benefits.ads": "Keine Werbung",
    "premium.benefits.notes": "Notizen und Favoriten",
    "premium.benefits.history": "Vollständige Historie deiner Ziehungen",
    "premium.confirm.1month": "Zahlung von 3,99 € für 1 Monat bestätigen?",
    "premium.confirm.3months": "Zahlung von 8,98 € für 3 Monate bestätigen?",
    "premium.success":"Abonnement erfolgreich aktiviert! Genieße dein werbefreies Erlebnis!",
    "premium.error.activation": "Fehler bei der Aktivierung des Abonnements",
    "premium.error.payment": "Fehler bei der Zahlung. Bitte versuche es erneut.",
    "premium.manage": "Mein Abonnement verwalten (kündigen, Rechnungen...)",
    "premium.expired": "Ihr Premium-Zugang ist abgelaufen",
    "premium.expiringSoon": "Ihr Premium-Zugang läuft bald ab",
    "premium.conditions.line1":"🔒 Sichere Zahlung über Google Play",
    "premium.conditions.line2": "✓ Einmalzahlung, KEINE automatische Verlängerung",
    "premium.conditions.line3": "Keine Rückerstattung nach Zahlung. Premium-Zugang gilt für die gewählte Dauer.",
    "premium.conditions.line4": "Sie werden 3 Tage vor Ablauf Ihres Zugangs benachrichtigt.",
    "premium.securePaymentBy": "Sichere Zahlung über",
    "premium.restoreSubscription": "Abonnement wiederherstellen",
    "premium.backToPurchases": "Zurück zu den Käufen",
    "premium.payment.googlePlay": "Google Play-Zahlung",
    "premium.payment.stripe": "Stripe-Webzahlung",
    "premium.restoreEmailLabel": "Deine E-Mail",
    "premium.restore": "Wiederherstellen",
    "premium.buy": "Kaufen",
    "premium.error.invalidEmail": "Die E-Mail-Adresse ist ungültig.",
    "premium.error.noActivePremium": "Kein aktives Abonnement gefunden",

    // PREMIUM RESTOR
    "premium.restore.title": "Mein Abonnement wiederherstellen",
    "premium.restore.subtitle": "Schon Premium? Stelle deinen Zugriff wieder her",
    "premium.restore.description": "Gib die E-Mail-Adresse ein, die du beim Kauf von Premium verwendet hast",
    "premium.restore.button": "Wiederherstellen",
    "premium.restore.verifying": "Überprüfung...",
    "premium.restore.success": "Premium erfolgreich wiederhergestellt!",
    "premium.restore.redirecting": "Weiterleitung...",
    "premium.restore.notFound": "Für diese E-Mail wurde kein Premium-Abonnement gefunden. Überprüfe die Adresse oder abonniere einen neuen Plan.",
    "premium.restore.error": "Beim Wiederherstellen ist ein Fehler aufgetreten. Bitte versuche es erneut.",
    "premium.restore.info":"Das Premium-Abonnement ist mit dem Google-Konto verknüpft, das für den Kauf bei Google Play verwendet wurde.",
    "premium.restore.help": "Brauchen Sie Hilfe?",
    "premium.restore.contact": "Kontaktiere uns",
    "premium.error.emailRequired": "E-Mail ist erforderlich.",
    "premium.error.emailInvalid": "E-Mail ist ungültig.",
    "premium.emailLabel": "Deine E-Mail",
    "premium.emailHelp": "Um Ihr Abonnement wiederherzustellen",
    "premium.poweredBy": 'Powered by',
    "premium.backToPurchase": "Zurück zu den Käufen",
    "premium.button.loading": "Wird geladen...",
    "premium.loading.offers": "Angebote werden geladen...",
    "premium.button.restoring": "Wird wiederhergestellt...",
    "premium.error.loadFailed": "Angebote konnten nicht geladen werden",
    "premium.error.purchaseFailed": "Fehler beim Kauf",
    "premium.error.unknown": "Unbekannter Fehler",

    // PAGE PAIEMENT SUCCESS CANCEL
    "payment.success.title": "Zahlung erfolgreich!",
    "payment.success.verified": "Ihr Premium-Konto wurde aktiviert",
    "payment.success.activating": "Aktivierung läuft...",
    "payment.success.benefits": "Genießen Sie alle Premium-Funktionen!",
    "payment.success.noAds": "Werbefrei",
    "payment.success.fullHistory": "Vollständiger Verlauf",
    "payment.success.redirecting": "Automatische Weiterleitung zu den Orakeln...",
    "payment.cancel.title": "Zahlung abgebrochen",
    "payment.cancel.message": "Sie haben die Zahlung abgebrochen",
    "payment.cancel.retry": "Sie können es jederzeit über das Premium-Menü erneut versuchen",
    "payment.cancel.redirecting": "Zurück zur Orakelauswahl...",
    "premium.upgrade":"Premium freischalten",
    "premium.purchase":"Premium werden",
    "premium.purchaseDesc":"Neues Abonnement",
    "premium.restoreDesc":"Ich habe bereits bezahlt",
    "premium.unlimited":"Unbegrenzt",
    "premium.mobileOnly.title":"Nur mobile App",
    "premium.mobileOnly.description":"Premium-Käufe sind ausschließlich über die Android-App (Google Play) verfügbar.",
    "premium.mobileOnly.instruction":"Lade die App aus dem Google Play Store herunter, um Premium zu nutzen.",
    "premium.benefits.grimoire":"Unbegrenztes Grimoire",
    "premium.benefits.unlimited":"Unbegrenzte Legungen",
    "premium.benefits.noAds":"Werbefrei",
    "premium.benefits.allOracles":"Alle Orakel freigeschaltet",
    "premium.benefits.deepInterpretations":"Detaillierte Interpretationen",
    "premium.restore.mobileOnly":"Die Wiederherstellung des Abonnements ist nur über die Android-App verfügbar.",

    // Wheel of Destiny 
    "oracle.wheel.title": "Rad des Schicksals",
    "oracle.wheel.subtitle": "Drehe das Rad, um dein Schicksal zu entdecken",
    "oracle.wheel.description": "Lass das Schicksal das Rad in deine Zukunft führen",
    "oracle.wheel.exclusiveBadge": "EXKLUSIVER BONUS",
    "oracle.wheel.shortDescription": "Entdecke dein mystisches Schicksal",
    "oracle.wheel.spinButton": "Rad drehen",
    "oracle.wheel.newSpin": "Neuer Dreh",
    "oracle.wheel.spinning": "Das Rad dreht sich...",
    "premium.badge": "👑 Premium",
    "oracle.wheel.segment.love": "Liebe",
    "oracle.wheel.segment.work": "Arbeit",
    "oracle.wheel.segment.money": "Geld",
    "oracle.wheel.segment.health": "Gesund",
    "oracle.wheel.segment.family": "Familie",
    "oracle.wheel.segment.success": "Erfolg",
    "oracle.wheel.segment.friendship": "Freund",
    "oracle.wheel.segment.mystery": "?",
    "oracle.wheel.adRequired": "Eine Anzeige wird dir gezeigt",
    "oracle.wheel.premiumAccess": "Sofortiger Zugang ohne Werbung",
    "oracle.wheel.startButton": "Rad des Schicksals freischalten",
    "oracle.wheel.startButtonPremium": "Rad drehen",
    "oracle.wheel.loadingAd": "Lädt...",
    "oracle.wheel.pleaseWait": "Einen Moment",
    "oracle.wheel.adLongWarning": "Anzeige läuft...",
    "oracle.wheel.pleaseWaitUntilEnd": "Bitte warten",
    "oracle.wheel.adNotCompleted": "Bitte sieh dir die Anzeige bis zum Ende an",
    "oracle.wheel.adError": "Es ist ein Fehler aufgetreten. Versuche es erneut.",
    "oracle.wheel.variations.golden": "Goldenes Rad",
    "oracle.wheel.variations.silver": "Silbernes Rad",
    "oracle.wheel.variations.cosmic": "Kosmisches Rad", 
    "oracle.wheel.destinyRevealed": "Dein Schicksal ist enthüllt",
    "common.pleaseWait": "Bitte warten",
    "oracle.wheel.watchAdToUnlock": "Werbung ansehen, um freizuschalten",

    "oracle.wheel.love.title.1": "💖 Die Liebe lächelt dir zu",
    "oracle.wheel.love.message.1": [
      "Eine bedeutende Begegnung kommt bald auf dich zu und könnte dein Leben verändern. Öffne dein Herz und lass dich überraschen.",
      "Die Liebe, die du suchst, ist näher, als du denkst. Achte auf die Zeichen um dich herum.",
      "Eine starke und aufrichtige Verbindung kann jederzeit entstehen. Bleib offen und empfänglich für Gefühle."
    ],
    "oracle.wheel.love.title.2": "💫 Intensive Leidenschaft",
    "oracle.wheel.love.message.2": [
      "Eine tiefe Leidenschaft wird dein Leben berühren. Halte deine Gefühle nicht zurück und lebe jeden Moment voll aus.",
      "Deine Emotionen werden stärker. Hab keine Angst, zu zeigen, was du wirklich fühlst.",
      "Eine besondere Verbindung nähert sich dir. Lass sie sich natürlich und ohne Druck entfalten."
    ],
    "oracle.wheel.love.title.3": "🌹 Romantik in Sicht",
    "oracle.wheel.love.message.3": [
      "Eine schöne Romanze steht kurz davor, sich zu zeigen. Achte auf die Chancen um dich herum.",
      "Jemand Bedeutendes könnte schon bald in dein Leben treten. Sei bereit für diese Begegnung.",
      "Das Schicksal hat eine Liebesüberraschung für dich. Öffne dein Herz und folge deinen Gefühlen."
    ],
    "oracle.wheel.love.title.4": "💕 Wahre Liebe",
    "oracle.wheel.love.message.4": [
      "Dein Herz wird sich mit Freude und warmen Gefühlen füllen. Genieße jeden Moment mit den Menschen, die du liebst.",
      "Positive und bereichernde Liebeserfahrungen stehen bevor. Lass dich davon inspirieren.",
      "Eine liebevolle Energie umgibt dich. Folge ihr und lass sie deine Entscheidungen leiten."
    ],
    "oracle.wheel.work.title.1": "💼 Beruflicher Erfolg",
    "oracle.wheel.work.message.1": [
      "Ein wichtiges Projekt wird sich verwirklichen. Setze deine Energie voll ein und du wirst Ergebnisse sehen.",
      "Deine bisherigen Bemühungen beginnen Früchte zu tragen. Bleib fokussiert und mach weiter.",
      "Anerkennung für deine Arbeit kommt auf dich zu. Sei bereit, zu glänzen."
    ],
    "oracle.wheel.work.title.2": "🚀 Große Chance",
    "oracle.wheel.work.message.2": [
      "Eine einzigartige Gelegenheit taucht in deiner Karriere auf. Zögere nicht – der Moment ist ideal.",
      "Ein Kontakt oder Angebot könnte deinen Berufsalltag verändern. Sei aufmerksam und bereit.",
      "Ein entscheidender Wendepunkt steht bevor. Handle rasch, um das Beste daraus zu machen."
    ],
    "oracle.wheel.work.title.3": "⚡ Durchbruch",
    "oracle.wheel.work.message.3": [
      "Ein Hindernis verwandelt sich in eine Chance. Nutze den Moment, um deine Fähigkeiten zu beweisen.",
      "Du stehst kurz davor, einen wichtigen Schritt zu machen. Zweifel nicht an dir – geh weiter.",
      "Eine positive Entwicklung in deiner Arbeit ist nah. Bleib selbstbewusst und entschlossen."
    ],
    "oracle.wheel.work.title.4": "🎯 Ziel in Sicht",
    "oracle.wheel.work.message.4": [
      "Du bist kurz davor, dein Ziel zu erreichen. Konzentriere dich und gib alles.",
      "Eine entscheidende Phase kommt auf dich zu. Bleib hartnäckig, um dein Ziel zu erreichen.",
      "Deine Bemühungen zahlen sich bald aus. Bleib motiviert und verfolge deine Pläne mit Zuversicht."
    ],
    "oracle.wheel.money.title.1": "💰 Wohlstand naht",
    "oracle.wheel.money.message.1": [
      "Ein Geldzufluss kommt bald. Bereite dich darauf vor, ihn klug zu verwalten.",
      "Deine finanziellen Bemühungen beginnen Wirkung zu zeigen. Bleib aufmerksam und entscheide weise.",
      "Ein unerwartetes Ereignis könnte deine Finanzen verbessern. Nutze diese Chance."
    ],
    "oracle.wheel.money.title.2": "💸 Kontrollierte Ausgabe",
    "oracle.wheel.money.message.2": [
      "Eine unerwartete Ausgabe könnte auftauchen. Bleib ruhig und nimm sie als Lernmoment.",
      "Vielleicht musst du schwierige finanzielle Entscheidungen treffen, die jedoch zu mehr Stabilität führen.",
      "Ein kleiner vorübergehender Verlust könnte dich überraschen. Nutze ihn, um deine finanzielle Sicherheit zu stärken."
    ],
    "oracle.wheel.money.title.3": "⚡ Unerwarteter Gewinn",
    "oracle.wheel.money.message.3": [
      "Ein kleiner unerwarteter Gewinn wird deinen Tag aufhellen. Nutze ihn für deine Projekte.",
      "Jemand könnte dir finanziell helfen. Nimm diese Unterstützung an und mach etwas Gutes daraus.",
      "Eine unerwartete Rückzahlung oder Investition kommt auf dich zu. Zieh den größten Nutzen daraus."
    ],
    "oracle.wheel.money.title.4": "🎯 Finanzziel",
    "oracle.wheel.money.message.4": [
      "Du bist kurz davor, ein wichtiges finanzielles Ziel zu erreichen. Bleib fokussiert.",
      "Eine entscheidende Phase deiner Finanzen nähert sich. Setze deine Energie gezielt ein.",
      "Deine Bemühungen zahlen sich bald aus. Geh zuversichtlich weiter."
    ],
    "oracle.wheel.health.title.1": "💪 Energie auf dem Höhepunkt",
    "oracle.wheel.health.message.1": [
      "Deine Energie wird in den nächsten Tagen sehr hoch sein. Nutze sie für deine Projekte.",
      "Du wirst dich stark und motiviert fühlen. Setze diese Kraft sinnvoll ein.",
      "Eine Phase großer Vitalität steht bevor. Bewege dich, entdecke und lass Körper und Geist frei werden."
    ],
    "oracle.wheel.health.title.2": "🌿 Perfekte Balance",
    "oracle.wheel.health.message.2": [
      "Du findest eine schöne Balance zwischen Körper und Geist. Nutze sie, um dich zu zentrieren.",
      "Dein Alltag wird harmonischer. Höre auf deine Bedürfnisse.",
      "Ein Gefühl der inneren Ruhe begleitet dich. Nutze es, um klar voranzukommen."
    ],
    "oracle.wheel.health.title.3": "⚡ Energieschub",
    "oracle.wheel.health.message.3": [
      "Ein starker Energieschub kommt auf dich zu. Nutze ihn für wichtige Aufgaben.",
      "Du wirst voller Motivation sein. Nutze das, um zu handeln und voranzukommen.",
      "Dein Tatendrang wird deutlich spürbar sein. Lass dich davon antreiben."
    ],
    "oracle.wheel.health.title.4": "🌞 Vollständiges Wohlbefinden",
    "oracle.wheel.health.message.4": [
      "Du wirst dich körperlich und geistig gut fühlen. Lass dich von diesem Wohlbefinden führen.",
      "Ein Gefühl von Leichtigkeit begleitet dich. Genieße jeden Moment bewusst.",
      "Ruhe und Klarheit füllen deinen Alltag. Folge dieser Energie für gute Entscheidungen."
    ],
    "oracle.wheel.family.title.1": "🏡 Familiäre Harmonie",
    "oracle.wheel.family.message.1": [
      "Eine schöne Phase der Nähe mit deiner Familie beginnt. Genieße die gemeinsamen Momente.",
      "Die Bindungen zu deinen Liebsten werden stärker. Zeige Zuneigung, es wird geschätzt.",
      "Ein warmes und verbindendes Erlebnis erwartet dich. Sei präsent."
    ],
    "oracle.wheel.family.title.2": "⚖️ Versöhnung",
    "oracle.wheel.family.message.2": [
      "Ein kleiner Konflikt könnte entstehen, führt aber zu besserem Verständnis.",
      "Du wirst Gelegenheit haben, ein Missverständnis zu klären. Höre geduldig zu.",
      "Ein Streit verwandelt sich in eine Annäherung. Nutze diese Chance, um die Bindung zu stärken."
    ],
    "oracle.wheel.family.title.3": "🎉 Fröhliche Momente",
    "oracle.wheel.family.message.3": [
      "Glückliche Familienmomente stehen bevor. Genieße jedes Lächeln.",
      "Ein besonderer Tag wird dir wertvolle Erinnerungen schenken. Sei ganz dabei.",
      "Du wirst die Unterstützung deiner Liebsten spüren. Lass dich davon tragen."
    ],
    "oracle.wheel.family.title.4": "💖 Gegenseitiger Halt",
    "oracle.wheel.family.message.4": [
      "Deine Familie wird für dich da sein, wenn du sie brauchst. Zögere nicht, dich an sie zu wenden.",
      "Du wirst einem nahestehenden Menschen helfen können. Das stärkt eure Beziehung.",
      "Eine positive Dynamik entwickelt sich in deiner Familie. Teile, höre zu und liebe frei."
    ],
    "oracle.wheel.success.title.1": "🏆 Bevorstehender Erfolg",
    "oracle.wheel.success.message.1": [
      "Du wirst bald einen Erfolg erreichen, der dich überrascht. Deine Mühe zahlt sich endlich aus.",
      "Was unmöglich schien, wird greifbar. Du wirst klare, verdiente Ergebnisse sehen.",
      "Eine unerwartete Chance wird dir ermöglichen zu glänzen. Sei aufmerksam und greif zu."
    ],
    "oracle.wheel.success.title.2": "🚀 Schneller Fortschritt",
    "oracle.wheel.success.message.2": [
      "Alles, was du jetzt tust, treibt dich auf ein höheres Niveau. Bleib konzentriert.",
      "Deine täglichen kleinen Bemühungen summieren sich und beschleunigen deinen Erfolg. Mach weiter.",
      "Eine große Veränderung wird deinen Fortschritt beschleunigen. Passe dich schnell an."
    ],
    "oracle.wheel.success.title.3": "⚡ Starker Aufschwung",
    "oracle.wheel.success.message.3": [
      "Ein scheinbarer Misserfolg verwandelt sich in eine starke Chance. Bleib zuversichtlich.",
      "Eine schwierige Phase bringt dir jetzt einen unerwarteten Erfolg. Alles hatte seinen Sinn.",
      "Ein Rückschlag wird zu deinem Sprungbrett. Du wirst mehr erreichen, als du dachtest."
    ],
    "oracle.wheel.success.title.4": "🎯 Ziel erreicht",
    "oracle.wheel.success.message.4": [
      "Alles, woran du gearbeitet hast, trägt Früchte. Du wirst stolz und zufrieden sein.",
      "Du erreichst ein Ziel, das weit entfernt schien. Feiere deinen Weg.",
      "Der Erfolg, auf den du gewartet hast, zeigt sich endlich. Du bist auf dem richtigen Weg."
    ],
    "oracle.wheel.friendship.title.1": "🤝 Starke Freundschaft",
    "oracle.wheel.friendship.message.1": [
      "Du wirst einen bedeutenden Moment mit einem wahren Freund erleben. Eure Verbindung wird stärker.",
      "Ein Freund wird dich durch Unterstützung oder Großzügigkeit überraschen.",
      "Du wirst zeigen können, wie wichtig dir eine Freundschaft ist. Ein kleiner Akt stärkt das Band."
    ],
    "oracle.wheel.friendship.title.2": "💬 Entscheidendes Gespräch",
    "oracle.wheel.friendship.message.2": [
      "Ein wichtiges Gespräch wird Klarheit schaffen. Du wirst mit mehr Verständnis handeln können.",
      "Du erhältst wertvolle Ratschläge von jemandem, dem du vertraust. Höre gut zu.",
      "Ein unerwarteter Austausch bringt Licht in eine Freundschaft. Offenheit ist der Schlüssel."
    ],
    "oracle.wheel.friendship.title.3": "🌟 Neue Begegnung",
    "oracle.wheel.friendship.message.3": [
      "Eine neue Person tritt in dein Leben und könnte ein wichtiger Freund werden.",
      "Du triffst jemanden mit gleichen Werten und Interessen. Eine schöne Freundschaft kann entstehen.",
      "Ein ehrliches und starkes Band kann mit jemand Unerwartetem entstehen. Bleib offen."
    ],
    "oracle.wheel.friendship.title.4": "⚡ Konfliktlösung",
    "oracle.wheel.friendship.message.4": [
      "Ein vergangenes Missverständnis wird sich lösen. Eure Freundschaft wird stärker.",
      "Du bekommst die Chance, ein fragiles Band zu reparieren. Das Vertrauen wächst.",
      "Eine schwierige Situation verwandelt sich in Annäherung. Konflikte können verbinden."
    ],
    "oracle.wheel.mystery.title.1": "❓ Totale Überraschung",
    "oracle.wheel.mystery.message.1": [
      "Du wirst mit einer unerwarteten Situation konfrontiert, die dich erschüttert. Bleib ruhig und beobachte.",
      "Ein unwahrscheinliches Ereignis bringt deinen Tag durcheinander. Es könnte sich als Chance entpuppen.",
      "Etwas völlig Unerwartetes wird deinen Weg kreuzen. Sei bereit, dich schnell anzupassen."
    ],
    "oracle.wheel.mystery.title.2": "💥 Plötzlicher Schock",
    "oracle.wheel.mystery.message.2": [
      "Du wirst eine Wahrheit oder ein Geheimnis entdecken, das dich tief überrascht.",
      "Eine unerwartete Offenbarung wird deinen Alltag erschüttern. In ihr steckt eine wichtige Lektion.",
      "Du wirst Dinge anders sehen. Was stabil wirkte, bricht auf und zeigt dir neue Wege."
    ],
    "oracle.wheel.mystery.title.3": "🌪 Sturm",
    "oracle.wheel.mystery.message.3": [
      "Du wirst einen chaotischen Moment erleben, in dem alles durcheinander wirkt. Halte dich fest.",
      "Eine Reihe kleiner Zwischenfälle wird dich überraschen. Lass dich von ihnen leiten.",
      "Das Leben drängt dich aus deiner Komfortzone. Dieser Sturm ist nötig, um zu wachsen."
    ],
    "oracle.wheel.mystery.title.4": "🌀 Ungewisses Schicksal",
    "oracle.wheel.mystery.message.4": [
      "Du stehst an einer Kreuzung, an der deine Entscheidungen großen Einfluss haben werden.",
      "Ein mysteriöses Ereignis bringt dich dazu, deine Gewissheiten zu hinterfragen.",
      "Das Schicksal wird dich mit ungewöhnlichen Situationen überraschen. Umarme das Unbekannte."
    ],
    "oracle.backToOracles": "Zurück zu den Orakeln",

    // Common
    "common.back": "Zurück",
    "common.home": "Startseite",
    "common.language": "Sprache",
  },

  it: {
    // Landing Page
    "landing.title": "TarotMystik",
    "landing.subtitle":
      "Scopri i misteri del tuo destino attraverso le carte, le stelle e la saggezza antica",
    "landing.enter": "ENTRARE",
    "landing.ads.support": "Gli annunci ci aiutano a mantenere l'app gratuita",

    // 🆕 Disclaimer - AGGIUNGI QUI
    "disclaimer.title": "Avviso Importante",
      "disclaimer.text": "TarotMystik è un'applicazione di intrattenimento e sviluppo personale. Consulta esperti qualificati per qualsiasi decisione importante.",
      "disclaimer.note": "Continuando, accetti di utilizzare questa app solo per scopi di intrattenimento.",
      "disclaimer.accept": "Ho capito",
      "disclaimer.legal": "Questa app è conforme al GDPR.",

    //Avis Playstore
    "rating.title": "Ti piace TarotMystik?",
      "rating.subtitle": "Il tuo parere è molto importante per noi! Prenditi un momento per valutare l'app.",
      "rating.thanksGood": "Grazie! La tua recensione ci aiuta molto 🌟",
      "rating.feedback": "Grazie per il tuo feedback. Come possiamo migliorare la tua esperienza?",
      "rating.rate": "Valuta l'app",
      "rating.later": "Più tardi",
      "rating.never": "Non chiedermelo più",

    // No-repeat system
    "system.antirepeat.loading": "Le carte si stanno mescolando...",
    "system.antirepeat.active": "Sistema anti-ripetizione attivo",
    "system.cards.refreshed": "Nuove carte disponibili",

    // Name Page
    "name.title": "Nome",
    "name.subtitle":
      "Come vorresti essere chiamato? Inserisci il tuo nome o soprannome",
    "name.placeholder": "Inserisci il tuo nome",
    "name.next": "AVANTI",

    // Date Page
    "date.title": "Data di Nascita",
    "date.subtitle":
      "Rivela il tuo segno astrologico per una divinazione personalizzata",
    "date.day": "Giorno",
    "date.month": "Mese",
    "date.year": "Anno",
    "date.next": "AVANTI",
    "date.months.1": "Gennaio",
    "date.months.2": "Febbraio",
    "date.months.3": "Marzo",
    "date.months.4": "Aprile",
    "date.months.5": "Maggio",
    "date.months.6": "Giugno",
    "date.months.7": "Luglio",
    "date.months.8": "Agosto",
    "date.months.9": "Settembre",
    "date.months.10": "Ottobre",
    "date.months.11": "Novembre",
    "date.months.12": "Dicembre",

    // Gender Page
    "gender.title": "Genere",
    "gender.subtitle": "Inserisci il tuo genere per fornire contesto all'IA",
    "gender.male": "Maschile",
    "gender.female": "Femminile",
    "gender.other": "Altro",
    "gender.next": "INIZIARE",
    "gender.back": "INDIETRO",

    //Barre de navigation IT
    "menu.open": "Apri menu",
      "profile.open": "Apri profilo",
      "profile.birthdate": "Data di nascita",
      "profile.gender": "Genere",
      "profile.zodiac": "Segno zodiacale",
      "profile.edit": "Modifica il mio profilo",
      "profile.edit.title": "Modifica il mio profilo",
      "profile.edit.subtitle": "Aggiorna le tue informazioni personali",
      "profile.edit.error": "Per favore, compila tutti i campi",
      "premium.active": "Attivo",
      "locale": "it-IT",
      "common.cancel": "Annulla",
      "common.save": "Salva",
      "name.label": "Nome",

    // Zodiac signs names
    "zodiac.signs.aries": "Ariete",
    "zodiac.signs.taurus": "Toro",
    "zodiac.signs.gemini": "Gemelli",
    "zodiac.signs.cancer": "Cancro",
    "zodiac.signs.leo": "Leone",
    "zodiac.signs.virgo": "Vergine",
    "zodiac.signs.libra": "Bilancia",
    "zodiac.signs.scorpio": "Scorpione",
    "zodiac.signs.sagittarius": "Sagittario",
    "zodiac.signs.capricorn": "Capricorno",
    "zodiac.signs.aquarius": "Acquario",
    "zodiac.signs.pisces": "Pesci",

    // IT Notifiche
    "notification.channel.name": "Guida Quotidiana",
    "notification.channel.description": "Notifiche per il tuo oracolo mistico del giorno",
    "notification.variants.1.title": "💘 L'Oracolo dell'Amore ti chiama",
    "notification.variants.1.body": "Scopri cosa rivelano le carte sulla tua vita amorosa oggi!",
    "notification.variants.2.title": "🌙 La Luna illumina il tuo cammino",
    "notification.variants.2.body": "Consulta l'Oracolo Lunare per conoscere le energie del giorno",
    "notification.variants.3.title": "🔮 Azrael il Veggente ti aspetta",
    "notification.variants.3.body": "Il grande mago ha delle rivelazioni per te oggi",
    "notification.variants.4.title": "✦ La Ruota del Destino gira",
    "notification.variants.4.body": "Scopri quale destino mistico ti attende oggi",
    "notification.variants.5.title": "✨ TarotMystik ti guida",
    "notification.variants.5.body": "I tuoi oracoli quotidiani sono pronti: amore, destino e misteri ti aspettano",
    "notification.modal.title": "Guida Quotidiana",
    "notification.modal.description": "Ricevi ogni giorno alle 10:00 un promemoria mistico per scoprire i tuoi oracoli e le rivelazioni personalizzate",
    "notification.modal.benefit1": "Oracolo quotidiano personalizzato",
    "notification.modal.benefit2": "Guida in amore, destino e misteri",
    "notification.modal.benefit3": "Non perdere mai la tua rivelazione del giorno",
    "notification.modal.accept": "Attiva le notifiche",
    "notification.modal.decline": "No grazie",
    "notification.modal.note": "Potrai modificare questa scelta nelle impostazioni",

    // Oracle Selection
    "oracle.welcome": "Benvenuto {name}!",
    "oracle.subtitle": "Scopri i segreti del tuo destino",
    "oracle.daily.title": "Carta del Giorno",
    "oracle.daily.description": "Una carta per guidarti e ispirarti oggi",
    "oracle.horoscope.title": "Oroscopo",
    "oracle.horoscope.description":
      "Scopri cosa ti riservano le stelle oggi secondo il tuo segno",
    "oracle.tarot.title": "Tarocchi",
    "oracle.tarot.description":
      "I 22 Arcani Maggiori rivelano i misteri del tuo destino",
    "oracle.angels.title": "Oracolo degli Angeli",
    "oracle.angels.description":
      "Connettiti con le tue guide angeliche per ricevere i loro messaggi d'amore",
    "oracle.runes.title": "Rune Nordiche",
    "oracle.runes.description":
      "L'antica saggezza dei Vichinghi rivela il tuo cammino di guerra e vittoria",
    "oracle.back": "INDIETRO",
    "oracle.home": "Home",
    "oracle.selection.title": "Scegli il Tuo Oracolo",

    // Card Game
    "cardgame.back": "Indietro",
    "cardgame.daily.instruction":
      "Scegli 1 carta per il tuo consiglio del giorno",
    "cardgame.reading.instruction":
      "Scegli 3 carte per illuminare il tuo destino",
    "cardgame.selected": "Carte selezionate: {current}/{max}",
    "cardgame.reveal": "RIVELA LE CARTE",
    "cardgame.page": "Pagina {current} di {total}",
    "cardgame.previous": "Precedente",
    "cardgame.next": "Successivo",
    "cardgame.daily.choose": "Scegli la carta che ti chiama",

    // CardGame - Modal de révélation
    "cardgame.cardRevealed": "Carta rivelata",
    "cardgame.continue": "Continua",
    "cardgame.seeInterpretation": "Vedi l'interpretazione",

    // Revelation - Loading
    "revelation.loading.title": "Interpretazione in corso...",
    "revelation.loading.daily": "Gli astri rivelano il tuo oracolo del giorno, {name}",
    "revelation.loading.reading": "Le carte rivelano i loro segreti mistici, {name}",
    "revelation.loading.mysticMessage": "Le stelle si stanno allineando per te...",

    // Revelation Page
    "revelation.positions.daily": "Consiglio del Giorno",
    "revelation.positions.past": "Carta 1",
    "revelation.positions.present": "Carta 2",
    "revelation.positions.future": "Carta 3",
    "revelation.summary.title": "Ciò che rivelano le tue carte",
    "revelation.newConsultation": "Nuova consultazione",
    "revelation.title.daily": "Il Tuo Consiglio del Giorno",
    "revelation.title.reading": "La Tua Lettura - {oracle}",
    "revelation.instruction.daily":
      "Clicca sulla tua carta per rivelare il messaggio del giorno",
    "revelation.instruction.reading":
      "Clicca su ogni carta per rivelare il tuo destino",
    "revelation.flipCard.reveal": "Tocca per rivelare",
    "revelation.summary.seeMore": "Vedi di più ↓",
    "revelation.summary.seeLess": "Vedi di meno ↑",
    "revelation.revealButton": "Rivelazione",
    "revelation.backToSelection": "Torna alla selezione",
    "interpretation.advice.title": "Il tuo consiglio personale",
    "revelation.subtitle.revealed": "Contempla le tue carte rivelate",
    "revelation.summary.subtitle": "Le energie principali della tua lettura",

    // Interpretation Templates
    "interpretation.gender.femme": "Mia cara",
    "interpretation.gender.homme": "Mio caro",
    "interpretation.gender.autre": "Cara anima",
    "interpretation.daily.greeting":
      "Ciao {name}! Ecco il tuo consiglio per questa bella giornata.",
    "interpretation.daily.zodiac": "Come {zodiacSign}, ",
    "interpretation.daily.cardMessage":
      'la carta "{cardName}" ha un\'energia speciale per te oggi.',
    "interpretation.daily.wisdom":
      "Come {zodiacSign}, hai la saggezza necessaria per usare bene questo consiglio. Fidati del tuo istinto e lascia che questa energia positiva guidi le tue azioni di oggi.",
    "interpretation.daily.closing":
      "Buona giornata {genderText} {name}, e che le stelle illuminino il tuo cammino!",
    "interpretation.tarot.greeting":
      "Ciao {name}! Allora, la tua lettura di Tarot mi dice cose interessanti.",
    "interpretation.tarot.past":
      "{cardName} nel tuo passato mostra che hai vissuto momenti che ti hanno davvero fatto crescere. Non è sempre stato facile, ma ti ha reso più forte.",
    "interpretation.tarot.present":
      "In questo momento, {cardName} influenza la tua vita in modo positivo. Sei in un periodo in cui le cose si muovono, ed è un buon segno per il futuro.",
    "interpretation.tarot.future":
      "Per il tuo futuro, {cardName} annuncia cose belle! Puoi aspettarti cambiamenti felici che ti porteranno soddisfazione.",
    "interpretation.tarot.advice":
      "Il mio consiglio: {name}, con il tuo carattere da {zodiacSign}, fidati del tuo istinto. Hai tutto quello che serve per riuscire!",
    "interpretation.angels.greeting":
      "Ciao {name}! I tuoi angeli custodi hanno rivelazioni luminose da condividere con te.",
    "interpretation.angels.past":
      "Durante il tuo cammino passato, {cardName} ha seminato semi divini: {cardMeaning}. Queste benedizioni hanno nutrito la tua anima e ti hanno preparato{genderSuffix} a ricevere l'amore incondizionato che ora ti circonda.",
    "interpretation.angels.present":
      "In questo momento preciso, {cardName} illumina il tuo presente: {cardMeaning}. Questa luce celeste guida ognuno dei tuoi passi e trasforma le tue sfide in opportunità di crescita spirituale.",
    "interpretation.angels.future":
      "Verso il tuo futuro radioso, {cardName} spiega le sue ali protettrici: {cardMeaning}. Le porte del paradiso si aprono davanti a te, rivelando un sentiero lastricato di miracoli e sincronie.",
    "interpretation.angels.message":
      "Trasmissione angelica: {genderText} {name}, la tua essenza da {zodiacSign} vibra in armonia con queste frequenze divine. Lascia che il tuo cuore si apra a questi messaggi di amore puro e rimani ricettiv{genderSuffix} ai segni che le tue guide ti inviano!",
    "interpretation.runes.greeting":
      "Salve {name}! Le antiche rune nordiche rivelano i segreti del tuo destino di guerrier{genderSuffix}.",
    "interpretation.runes.past":
      "La tua runa del passato, {cardName}, rivela: {cardMeaning}. Queste forze primordiali hanno scolpito il tuo carattere attraverso fuoco e ghiaccio, preparandoti alle sfide di oggi con saggezza ancestrale.",
    "interpretation.runes.present":
      "In questo momento, {cardName} guida i tuoi passi: {cardMeaning}. Questa energia runica illumina il tuo sentiero attuale, connettendoti alle forze mistiche che governano la tua vita quotidiana.",
    "interpretation.runes.future":
      "Verso il futuro, {cardName} annuncia: {cardMeaning}. Questa profezia runica traccia il percorso dei tuoi futuri successi, dove brillerai vittrios{genderSuffix} sotto l'egida degli dei nordici.",
    "interpretation.runes.advice":
      "Ricorda, {genderText} {name}: come {zodiacSign}, porti l'eredità vichinga nel tuo sangue. Le rune hanno parlato - segui la loro guida con coraggio e determinazione{genderSuffix}!",
    "interpretation.fallback.zodiac": "persona intuitiva",
    "interpretation.fallback.angels": "essere luminoso",
    "interpretation.fallback.runes": "combattente",
    "interpretation.title.daily": "Interpretazione per {name}",
    "interpretation.title.reading": "Lettura delle carte per {name}",
    "interpretation.subtitle": "Ecco la tua rivelazione personalizzata",
    "interpretation.backToCards": "Torna alle carte",
    "interpretation.newConsultation": "Nuova consultazione",

        // Calcolatore dell'Amore
        "loveCalculator.name1Label": "Primo Nome",
        "loveCalculator.name1Placeholder": "Es: Maria",
        "loveCalculator.name2Label": "Secondo Nome",
        "loveCalculator.name2Placeholder": "Es: Luca",
        "loveCalculator.calculateButton": "Calcola Compatibilità",
        "loveCalculator.calculating": "Analisi della compatibilità...",
        "loveCalculator.newCalculation": "Nuovo Calcolo",
        "loveCalculator.note": "Il punteggio rimane lo stesso per la stessa coppia di nomi… ma cambia ogni giorno! Torna domani! ⚠️ Questo calcolatore è solo per intrattenimento, i tuoi risultati sono puramente per divertimento!",
        "loveCalculator.dailyMode": "Modalità Giornaliera",
        "loveCalculator.dailyModeDesc": "La percentuale cambia ogni giorno!",
        "loveCalculator.standardMode": "Modalità Standard",
        "loveCalculator.standardModeDesc": "Risultato fisso e permanente",
        "oracle.loveCalculator.badge": "NUOVO",
        "oracle.loveCalculator.description": "Calcola la compatibilità tra due nomi",
        "loveCalculator.error": "Inserisci entrambi i nomi.",
        "loveCalculator.dayScore": "Lettura del Giorno",
        "loveCalculator.dayAdvice": "Consiglio del Giorno",
        "loveCalculator.title": "Compatibilità del Giorno",
        "oracle.loveCalculator.title": "Compatibilità del Giorno",
        "loveCalculator.subtitle": "Scopri ogni giorno la compatibilità tra due nomi — in amore o in amicizia.",
        "loveCalculator.today": "Oggi",
        "loveCalculator.changeMode": "Cambia modalità",
        "loveCalculator.back": "Indietro",
        "loveCalculator.mode.subtitle": "Le energie si interpretano in modo diverso a seconda del legame che vi unisce.",
        "loveCalculator.mode.love": "Amore",
        "loveCalculator.mode.love.subtitle": "Connessione romantica",
        "loveCalculator.mode.friendship": "Amicizia",
        "loveCalculator.mode.friendship.subtitle": "Legame di amicizia",
        "loveCalculator.mode.calculateButton": "Rivela la Compatibilità del Giorno",
        "loveCalculator.modeLabel.love": "Amore",
        "loveCalculator.modeLabel.friendship": "Amicizia",
        "loveCalculator.separator.love": "e",
        "loveCalculator.separator.friendship": "e",
        "loveCalculator.dateFormat.weekday": "long",
        "loveCalculator.dateFormat.day": "numeric",
        "loveCalculator.dateFormat.month": "long",
        "loveCalculator.day.sun": "Domenica",
        "loveCalculator.day.mon": "Lunedì",
        "loveCalculator.day.tue": "Martedì",
        "loveCalculator.day.wed": "Mercoledì",
        "loveCalculator.day.thu": "Giovedì",
        "loveCalculator.day.fri": "Venerdì",
        "loveCalculator.day.sat": "Sabato",
        "loveCalculator.month.jan": "Gennaio",
        "loveCalculator.month.feb": "Febbraio",
        "loveCalculator.month.mar": "Marzo",
        "loveCalculator.month.apr": "Aprile",
        "loveCalculator.month.may": "Maggio",
        "loveCalculator.month.jun": "Giugno",
        "loveCalculator.month.jul": "Luglio",
        "loveCalculator.month.aug": "Agosto",
        "loveCalculator.month.sep": "Settembre",
        "loveCalculator.month.oct": "Ottobre",
        "loveCalculator.month.nov": "Novembre",
        "loveCalculator.month.dec": "Dicembre",

        // ── RISULTATI MODALITÀ AMORE ───────────────────────────────────────────────────
        // Titoli
        "loveCalculator.love.results.incompatible.title": "Energie Opposte",
        "loveCalculator.love.results.veryWeak.title": "Segnale Debole",
        "loveCalculator.love.results.weak.title": "Connessione Timida",
        "loveCalculator.love.results.lowModerate.title": "Energia Mista",
        "loveCalculator.love.results.moderate.title": "Scintilla Incerta",
        "loveCalculator.love.results.goodStart.title": "Bella Giornata",
        "loveCalculator.love.results.promising.title": "Giornata Promettente",
        "loveCalculator.love.results.strong.title": "Forte Risonanza",
        "loveCalculator.love.results.exceptional.title": "Allineamento Raro",
        "loveCalculator.love.results.perfect.title": "Giornata Eccezionale",

        // Messaggi — Incompatibile (25–39%)
        "loveCalculator.love.results.incompatible.message1": "Oggi le vostre energie vanno in direzioni molto diverse. Non è il giorno migliore per forzare una connessione tra voi.",
        "loveCalculator.love.results.incompatible.message2": "Le vibrazioni di oggi non favoriscono l’armonia amorosa tra questi due nomi. Meglio lasciare spazio e respirare.",
        "loveCalculator.love.results.incompatible.message3": "Questo giorno non porta le frequenze giuste per questo duo amoroso. Gli scambi possono risultare difficili e poco fluidi.",
        "loveCalculator.love.results.incompatible.message4": "L’allineamento di oggi non è favorevole a questa connessione. Nessuna scintilla romantica visibile nelle energie del giorno.",
        "loveCalculator.love.results.incompatible.message5": "Gli astri di oggi indicano percorsi separati per questo duo. È una giornata da vivere ognuno per conto proprio.",
        "loveCalculator.love.results.incompatible.message6": "Questo giorno non crea un terreno comune tra queste due energie amorose. Nulla è bloccato — domani tutto può cambiare.",
        // Consigli — Incompatibile
        "loveCalculator.love.results.incompatible.advice1": "Approfittate di questa giornata individualmente. Ognuno nella propria energia, poi si rivaluta domani.",
        "loveCalculator.love.results.incompatible.advice2": "Non è il giorno per forzare conversazioni sentimentali o prendere decisioni insieme.",
        "loveCalculator.love.results.incompatible.advice3": "Concedetevi spazio oggi. Le energie di domani potrebbero sorprendervi.",

        // Messaggi — Molto Debole (40–49%)
        "loveCalculator.love.results.veryWeak.message1": "Oggi la connessione amorosa tra questi due nomi è discreta. Servirà uno sforzo per essere sulla stessa lunghezza d’onda.",
        "loveCalculator.love.results.veryWeak.message2": "Le energie di oggi si incrociano appena sul piano amoroso. Non è una brutta giornata, ma manca slancio.",
        "loveCalculator.love.results.veryWeak.message3": "Il segnale romantico tra i vostri due mondi è debole oggi. Nulla di irreversibile, ma non è il vostro giorno migliore.",
        "loveCalculator.love.results.veryWeak.message4": "Questo giorno non amplifica naturalmente le vostre affinità amorose. La connessione esiste, ma resta in sottofondo.",
        "loveCalculator.love.results.veryWeak.message5": "Le vostre frequenze oggi non si sovrappongono molto nel cuore. Mantenete aspettative leggere.",
        "loveCalculator.love.results.veryWeak.message6": "Oggi la corrente romantica scorre con difficoltà tra queste energie. Domani potrebbe cambiare tutto.",
        // Consigli — Molto Debole
        "loveCalculator.love.results.veryWeak.advice1": "Privilegiate scambi semplici e senza pressione. Non serve forzare grandi dichiarazioni.",
        "loveCalculator.love.results.veryWeak.advice2": "Una giornata tranquilla insieme è sufficiente. Non aspettatevi di più.",
        "loveCalculator.love.results.veryWeak.advice3": "Tornate domani — le energie si rinnovano.",

        // Messaggi — Debole (50–54%)
        "loveCalculator.love.results.weak.message1": "Oggi la fiamma amorosa è accesa ma piccola. C’è qualcosa, ma non è ancora intensa.",
        "loveCalculator.love.results.weak.message2": "Questa giornata porta una lieve complicità romantica. Le basi ci sono, ma l’energia non decolla ancora.",
        "loveCalculator.love.results.weak.message3": "Si crea una connessione fragile tra questi due nomi. Alcuni momenti belli sono possibili, senza grande intensità.",
        "loveCalculator.love.results.weak.message4": "Le vibrazioni di oggi sono dolci ma poco intense. Una giornata piacevole, non memorabile.",
        "loveCalculator.love.results.weak.message5": "Sfondo emotivo neutro. Nulla di forte, ma neanche negativo.",
        "loveCalculator.love.results.weak.message6": "Le vostre energie si incontrano senza fondersi completamente.",
        // Consigli — Debole
        "loveCalculator.love.results.weak.advice1": "È una buona giornata per piccoli gesti teneri.",
        "loveCalculator.love.results.weak.advice2": "Godetevi momenti semplici senza cercare intensità.",
        "loveCalculator.love.results.weak.advice3": "Osservate come evolvono le energie.",

        // Messaggi — Potenziale Limitato (55–59%)
        "loveCalculator.love.results.lowModerate.message1": "Oggi si mescolano frequenze compatibili e meno compatibili. La connessione è possibile, ma richiede adattamento.",
        "loveCalculator.love.results.lowModerate.message2": "Oggi funziona a fasi tra voi. Alcuni momenti fluidi, altri più complessi.",
        "loveCalculator.love.results.lowModerate.message3": "Compatibilità altalenante. Nulla di grave, ma serve equilibrio.",
        "loveCalculator.love.results.lowModerate.message4": "Terreno parzialmente favorevole. La connessione è possibile, ma non automatica.",
        "loveCalculator.love.results.lowModerate.message5": "Vibrazioni contrastanti oggi. Prendete il meglio e lasciate il resto.",
        "loveCalculator.love.results.lowModerate.message6": "Ci sono aperture e frizioni. Restate flessibili.",
        // Consigli — Potenziale Limitato
        "loveCalculator.love.results.lowModerate.advice1": "Affrontate la giornata senza pressione.",
        "loveCalculator.love.results.lowModerate.advice2": "Non drammatizzate eventuali tensioni.",
        "loveCalculator.love.results.lowModerate.advice3": "Preferite attività semplici.",

        // Messaggi — Scintilla Incerta (60–64%)
        "loveCalculator.love.results.moderate.message1": "C’è qualcosa nell’aria oggi tra voi. Non è certo, ma interessante.",
        "loveCalculator.love.results.moderate.message2": "Energia ambivalente oggi. C’è potenziale, ma esitante.",
        "loveCalculator.love.results.moderate.message3": "Le vostre frequenze si avvicinano senza allinearsi del tutto.",
        "loveCalculator.love.results.moderate.message4": "Gli astri sono indecisi oggi.",
        "loveCalculator.love.results.moderate.message5": "Tensione tra attrazione e distanza.",
        "loveCalculator.love.results.moderate.message6": "Il giorno gioca con le vostre energie.",
        // Consigli — Scintilla Incerta
        "loveCalculator.love.results.moderate.advice1": "Siate presenti senza analizzare troppo.",
        "loveCalculator.love.results.moderate.advice2": "Ascoltate più di quanto parlate.",
        "loveCalculator.love.results.moderate.advice3": "Non traete conclusioni affrettate.",

        // Messaggi — Bella Giornata (65–69%)
        "loveCalculator.love.results.goodStart.message1": "Oggi le vostre energie si allineano naturalmente. Una giornata piacevole.",
        "loveCalculator.love.results.goodStart.message2": "Nasce una bella armonia romantica.",
        "loveCalculator.love.results.goodStart.message3": "Le vibrazioni favoriscono la connessione.",
        "loveCalculator.love.results.goodStart.message4": "Terreno favorevole per il cuore.",
        "loveCalculator.love.results.goodStart.message5": "Una bella energia condivisa.",
        "loveCalculator.love.results.goodStart.message6": "Frequenze armoniose tra voi.",
        // Consigli — Bella Giornata
        "loveCalculator.love.results.goodStart.advice1": "Godetevi del tempo insieme.",
        "loveCalculator.love.results.goodStart.advice2": "Ottimo giorno per un gesto spontaneo.",
        "loveCalculator.love.results.goodStart.advice3": "Tornate domani.",

        // Messaggi — Promettente (70–79%)
        "loveCalculator.love.results.promising.message1": "Una vera connessione amorosa brilla oggi.",
        "loveCalculator.love.results.promising.message2": "Oggi amplifica il vostro legame.",
        "loveCalculator.love.results.promising.message3": "Siete sulla stessa lunghezza d’onda.",
        "loveCalculator.love.results.promising.message4": "Le vostre energie risuonano bene.",
        "loveCalculator.love.results.promising.message5": "C’è una bella alchimia.",
        "loveCalculator.love.results.promising.message6": "L’energia è dalla vostra parte.",
        // Consigli — Promettente
        "loveCalculator.love.results.promising.advice1": "Fate qualcosa di speciale.",
        "loveCalculator.love.results.promising.advice2": "Esprimete ciò che sentite.",
        "loveCalculator.love.results.promising.advice3": "Godetevi questa energia.",

        // Messaggi — Forte Risonanza (80–89%)
        "loveCalculator.love.results.strong.message1": "Oggi le vostre energie risuonano con forza.",
        "loveCalculator.love.results.strong.message2": "Giornata molto favorevole.",
        "loveCalculator.love.results.strong.message3": "Tutto viene amplificato.",
        "loveCalculator.love.results.strong.message4": "Il legame è vivo.",
        "loveCalculator.love.results.strong.message5": "Si raggiunge una grande profondità.",
        "loveCalculator.love.results.strong.message6": "Armonia perfetta oggi.",
        // Consigli — Forte Risonanza
        "loveCalculator.love.results.strong.advice1": "Sfruttate al massimo la giornata.",
        "loveCalculator.love.results.strong.advice2": "Condividete qualcosa di memorabile.",
        "loveCalculator.love.results.strong.advice3": "Riconoscete questa connessione.",

        // Messaggi — Allineamento Raro (90–94%)
        "loveCalculator.love.results.exceptional.message1": "Oggi porta un allineamento raro.",
        "loveCalculator.love.results.exceptional.message2": "Armonia quasi perfetta.",
        "loveCalculator.love.results.exceptional.message3": "Una fusione rara.",
        "loveCalculator.love.results.exceptional.message4": "Qualcosa di speciale circola.",
        "loveCalculator.love.results.exceptional.message5": "Energia eccezionale.",
        "loveCalculator.love.results.exceptional.message6": "Una giornata unica.",
        // Consigli — Allineamento Raro
        "loveCalculator.love.results.exceptional.advice1": "Vivete pienamente questa giornata.",
        "loveCalculator.love.results.exceptional.advice2": "Create un ricordo.",
        "loveCalculator.love.results.exceptional.advice3": "Oggi è stato speciale.",

        // Messaggi — Giorno Perfetto (95–98%)
        "loveCalculator.love.results.perfect.message1": "Oggi è uno dei giorni più rari.",
        "loveCalculator.love.results.perfect.message2": "Picco dell’allineamento romantico.",
        "loveCalculator.love.results.perfect.message3": "Fusione quasi mistica.",
        "loveCalculator.love.results.perfect.message4": "Tutto è perfettamente allineato.",
        "loveCalculator.love.results.perfect.message5": "Connessione assoluta.",
        "loveCalculator.love.results.perfect.message6": "Energia massima.",
        // Consigli — Giorno Perfetto
        "loveCalculator.love.results.perfect.advice1": "Rendi questa giornata indimenticabile.",
        "loveCalculator.love.results.perfect.advice2": "Siate pienamente presenti.",
        "loveCalculator.love.results.perfect.advice3": "Questa energia è unica.",

        // ── RISULTATI MODALITÀ AMICIZIA ────────────────────────────────────────────
        // Titoli
        "loveCalculator.friendship.results.incompatible.title": "Frequenze Distanti",
        "loveCalculator.friendship.results.veryWeak.title": "Legame Debole",
        "loveCalculator.friendship.results.weak.title": "Connessione Leggera",
        "loveCalculator.friendship.results.lowModerate.title": "Terreno Misto",
        "loveCalculator.friendship.results.moderate.title": "Complicità Titubante",
        "loveCalculator.friendship.results.goodStart.title": "Bella Armonia",
        "loveCalculator.friendship.results.promising.title": "Amicizia Radiosa",
        "loveCalculator.friendship.results.strong.title": "Complicità Forte",
        "loveCalculator.friendship.results.exceptional.title": "Legami Rari",
        "loveCalculator.friendship.results.perfect.title": "Amici d'Eccellenza",

        // Messaggi — Amicizia Incompatibile (25–39%)
        "loveCalculator.friendship.results.incompatible.message1": "Oggi le vostre energie amicali vanno in direzioni opposte. Non è il giorno migliore per attività comuni.",
        "loveCalculator.friendship.results.incompatible.message2": "Le vibrazioni del giorno non favoriscono la complicità tra questi due nomi. Ognuno nella propria bolla.",
        "loveCalculator.friendship.results.incompatible.message3": "Oggi non si crea terreno comune per questa coppia di amici. Nessun problema — domani le carte possono cambiare.",
        "loveCalculator.friendship.results.incompatible.message4": "L'allineamento del giorno non è favorevole alla vostra complicità. Evitate piani comuni oggi.",
        "loveCalculator.friendship.results.incompatible.message5": "Gli astri di oggi separano le energie di questo duo. È una giornata per attività solitarie.",
        "loveCalculator.friendship.results.incompatible.message6": "Oggi le frequenze di amicizia tra questi due nomi non si incontrano. Non preoccupatevi — non è permanente.",
        // Consigli — Amicizia Incompatibile
        "loveCalculator.friendship.results.incompatible.advice1": "Godetevi il tempo separatamente. Una pausa può far bene all'amicizia.",
        "loveCalculator.friendship.results.incompatible.advice2": "Evitate decisioni importanti insieme oggi. Non è il momento giusto.",
        "loveCalculator.friendship.results.incompatible.advice3": "Tornate domani — l'energia dell'amicizia si rinnova ogni giorno.",

        // Messaggi — Amicizia Molto Debole (40–49%)
        "loveCalculator.friendship.results.veryWeak.message1": "Oggi il legame amicale tra questi nomi è discreto. Nessuna scintilla particolare, ma niente di negativo.",
        "loveCalculator.friendship.results.veryWeak.message2": "Le energie del giorno si incrociano appena. Una giornata tranquilla in cui ognuno procede per conto suo.",
        "loveCalculator.friendship.results.veryWeak.message3": "Oggi non si amplifica naturalmente la vostra complicità. La connessione c'è, ma resta silenziosa.",
        "loveCalculator.friendship.results.veryWeak.message4": "Le vostre frequenze amicali oggi non si sovrappongono molto. Mantenete le aspettative leggere.",
        "loveCalculator.friendship.results.veryWeak.message5": "Oggi il flusso amicale scorre lentamente tra queste due energie. Niente di forte, ma nemmeno conflittuale.",
        "loveCalculator.friendship.results.veryWeak.message6": "La vostra amicizia oggi è in stand-by. Non è la giornata ideale per grandi uscite insieme.",
        // Consigli — Amicizia Molto Debole
        "loveCalculator.friendship.results.veryWeak.advice1": "Una giornata separati può bastare. L'amicizia non deve essere nutrita ogni giorno.",
        "loveCalculator.friendship.results.veryWeak.advice2": "Se vi incontrate, mantenete gli scambi semplici e leggeri.",
        "loveCalculator.friendship.results.veryWeak.advice3": "Tornate domani — le energie amicali cambiano ogni giorno.",

        // Messaggi — Amicizia Debole (50–54%)
        "loveCalculator.friendship.results.weak.message1": "Oggi si intravede una leggera complicità tra questi due nomi. Niente di intenso, ma piacevole.",
        "loveCalculator.friendship.results.weak.message2": "Il giorno porta un'energia amicale dolce tra voi. Alcuni bei momenti possibili senza grande effervescenza.",
        "loveCalculator.friendship.results.weak.message3": "Le vibrazioni del giorno sono neutre per il vostro legame. Una giornata ordinaria senza sorprese.",
        "loveCalculator.friendship.results.weak.message4": "La vostra connessione amicale c'è, ma in sordina. Un caffè o un messaggio basterebbe a mantenerla.",
        "loveCalculator.friendship.results.weak.message5": "Oggi il giorno offre una base tranquilla per la vostra amicizia. Niente grandi scoppi, ma una presenza confortevole.",
        "loveCalculator.friendship.results.weak.message6": "Le energie del giorno si incontrano piacevolmente. Una giornata per piccoli piaceri insieme.",
        // Consigli — Amicizia Debole
        "loveCalculator.friendship.results.weak.advice1": "Un messaggio o una chiamata veloce può bastare per mantenere la connessione oggi.",
        "loveCalculator.friendship.results.weak.advice2": "Optate per qualcosa di semplice se vi incontrate — niente grandi programmi.",
        "loveCalculator.friendship.results.weak.advice3": "Giornata adatta a piccoli gesti discreti.",

        // Messaggi — Terreno Misto (55–59%)
        "loveCalculator.friendship.results.lowModerate.message1": "Oggi ci sono frequenze amicali buone e meno buone. Potete capirvi, ma può esserci qualche piccolo ostacolo.",
        "loveCalculator.friendship.results.lowModerate.message2": "La complicità funziona a ondate. Alcuni momenti saranno fluidi, altri meno.",
        "loveCalculator.friendship.results.lowModerate.message3": "Le energie del giorno creano un terreno amicale contrastante. Niente di insormontabile, serve un po’ di flessibilità.",
        "loveCalculator.friendship.results.lowModerate.message4": "Il giorno offre un terreno parzialmente favorevole. Funziona se non avete aspettative rigide.",
        "loveCalculator.friendship.results.lowModerate.message5": "Le vibrazioni del giorno sono sfumate. Prendete il meglio e lasciate andare il resto.",
        "loveCalculator.friendship.results.lowModerate.message6": "Ci sono aperture amicali e alcune frizioni. Rimanete flessibili.",
        // Consigli — Terreno Misto
        "loveCalculator.friendship.results.lowModerate.advice1": "Affrontate la giornata senza pressione e evitate argomenti delicati.",
        "loveCalculator.friendship.results.lowModerate.advice2": "Se emerge tensione, cambiate argomento o attività.",
        "loveCalculator.friendship.results.lowModerate.advice3": "Scegliete attività leggere invece di conversazioni profonde.",

        // Messaggi — Complicità Titubante (60–64%)
        "loveCalculator.friendship.results.moderate.message1": "C'è qualcosa nell'aria oggi tra questi nomi. La complicità esiste, cerca solo il canale giusto.",
        "loveCalculator.friendship.results.moderate.message2": "L'energia del giorno è ambivalente. Si percepisce potenziale, ma non si manifesta completamente.",
        "loveCalculator.friendship.results.moderate.message3": "Le frequenze si avvicinano senza sovrapporsi. Buona giornata per osservare più che agire.",
        "loveCalculator.friendship.results.moderate.message4": "Gli astri sono divisi sul vostro duo. Qualcosa scorre tra voi, ma resta da precisare.",
        "loveCalculator.friendship.results.moderate.message5": "La giornata crea leggera esitazione nella complicità. Niente di cui preoccuparsi.",
        "loveCalculator.friendship.results.moderate.message6": "Oggi le energie amicali giocano senza fissarsi. Lasciate che la giornata si sviluppi naturalmente.",
        // Consigli — Complicità Titubante
        "loveCalculator.friendship.results.moderate.advice1": "Siate disponibili senza forzare la complicità.",
        "loveCalculator.friendship.results.moderate.advice2": "Buona giornata per ascoltare piuttosto che parlare.",
        "loveCalculator.friendship.results.moderate.advice3": "Non trarre conclusioni definitive da un solo giorno.",

        // Messaggi — Bella Armonia (65–69%)
        "loveCalculator.friendship.results.goodStart.message1": "Oggi le vostre energie amicali si uniscono naturalmente. Giornata fluida e piacevole.",
        "loveCalculator.friendship.results.goodStart.message2": "Il giorno crea una bella armonia tra i due amici.",
        "loveCalculator.friendship.results.goodStart.message3": "Le vibrazioni favoriscono la buona intesa. Godetevi la complicità senza cercare altro.",
        "loveCalculator.friendship.results.goodStart.message4": "Il terreno è favorevole alla vostra amicizia. Interazioni dolci e armoniose.",
        "loveCalculator.friendship.results.goodStart.message5": "Oggi porta una bella energia amicale comune. Godetevela.",
        "loveCalculator.friendship.results.goodStart.message6": "Le frequenze del giorno si allineano armoniosamente. Giornata da assaporare.",
        // Consigli — Bella Armonia
        "loveCalculator.friendship.results.goodStart.advice1": "Approfittate di questa buona energia per un momento condiviso senza agenda.",
        "loveCalculator.friendship.results.goodStart.advice2": "Giorno ideale per uscita spontanea o conversazione sincera.",
        "loveCalculator.friendship.results.goodStart.advice3": "Tornate domani a vedere l’evoluzione delle energie.",

        // Messaggi — Amicizia Radiosa (70–79%)
        "loveCalculator.friendship.results.promising.message1": "Oggi una vera complicità amicale irradia tra questi nomi.",
        "loveCalculator.friendship.results.promising.message2": "Il giorno amplifica il legame d’amicizia. Scambi naturali e fluidi.",
        "loveCalculator.friendship.results.promising.message3": "Gli astri sono generosi per questo duo. Siete sulla stessa lunghezza d’onda.",
        "loveCalculator.friendship.results.promising.message4": "Le frequenze amicali risuonano bene insieme. Giornata per essere presenti l’uno per l’altro.",
        "loveCalculator.friendship.results.promising.message5": "Oggi crea una bella alchimia amicale. Energia sincera e piacevole.",
        "loveCalculator.friendship.results.promising.message6": "Le vibrazioni del giorno favoriscono piccoli gesti significativi.",
        // Consigli — Amicizia Radiosa
        "loveCalculator.friendship.results.promising.advice1": "Fate qualcosa di speciale insieme oggi — anche semplice, avrà più impatto.",
        "loveCalculator.friendship.results.promising.advice2": "Giornata ideale per esprimere quanto l’altro significhi per voi.",
        "loveCalculator.friendship.results.promising.advice3": "Godetevi questa energia amicale del giorno completamente.",

        // Messaggi — Complicità Forte (80–89%)
        "loveCalculator.friendship.results.strong.message1": "Oggi le vostre energie amicali risuonano potentemente. Tutto scorre naturalmente.",
        "loveCalculator.friendship.results.strong.message2": "Giornata particolarmente favorevole per questo duo.",
        "loveCalculator.friendship.results.strong.message3": "Gli astri allineano le energie amicali con forza. Tutto ciò che farete insieme sarà amplificato.",
        "loveCalculator.friendship.results.strong.message4": "Il legame è particolarmente vivo. Giornata da ricordare.",
        "loveCalculator.friendship.results.strong.message5": "Vibrazione eccezionalmente favorevole. Scambi profondi e rari.",
        "loveCalculator.friendship.results.strong.message6": "Energie in perfetta armonia. Giornata che crea ricordi duraturi.",
        // Consigli — Complicità Forte
        "loveCalculator.friendship.results.strong.advice1": "Non lasciate passare questa giornata senza approfittarne.",
        "loveCalculator.friendship.results.strong.advice2": "Condividete qualcosa di memorabile — passeggiata, pasto o risata.",
        "loveCalculator.friendship.results.strong.advice3": "Annotate ciò che provate oggi. Momenti di forte complicità da riconoscere.",

        // Messaggi — Legami Rari (90–94%)
        "loveCalculator.friendship.results.exceptional.message1": "Oggi le stelle hanno creato un allineamento amicale eccezionale.",
        "loveCalculator.friendship.results.exceptional.message2": "Le energie vi uniscono in una complicità quasi perfetta.",
        "loveCalculator.friendship.results.exceptional.message3": "Le vibrazioni del giorno creano una fusione rara tra i vostri mondi.",
        "loveCalculator.friendship.results.exceptional.message4": "Oggi qualcosa di insolito circola tra voi due amici.",
        "loveCalculator.friendship.results.exceptional.message5": "Giornata eccezionale per la vostra amicizia. Energie amplificate l’una dall’altra.",
        "loveCalculator.friendship.results.exceptional.message6": "Gli astri hanno riservato qualcosa di raro per il vostro legame.",
        // Consigli — Legami Rari
        "loveCalculator.friendship.results.exceptional.advice1": "Vivete la giornata pienamente senza pensieri.",
        "loveCalculator.friendship.results.exceptional.advice2": "Create un ricordo insieme oggi. L’energia va celebrata.",
        "loveCalculator.friendship.results.exceptional.advice3": "Tornate domani — le energie cambieranno. Ogni giorno ha la sua firma.",

        // Messaggi — Amici d'Eccellenza (95–98%)
        "loveCalculator.friendship.results.perfect.message1": "Oggi è uno dei giorni più rari per questo duo. L’universo sembra aver organizzato la giornata per voi.",
        "loveCalculator.friendship.results.perfect.message2": "Massima armonia amicale oggi. Energia totale tra i due nomi.",
        "loveCalculator.friendship.results.perfect.message3": "Frequenze quasi mistiche uniscono i due amici. Giornata da non perdere.",
        "loveCalculator.friendship.results.perfect.message4": "Tutto è predisposto perché la complicità brilli. Rarità di un giorno unico.",
        "loveCalculator.friendship.results.perfect.message5": "Giornata segnata da una connessione amicale assoluta.",
        "loveCalculator.friendship.results.perfect.message6": "Gli astri hanno allineato tutto oggi. Energia massima — vivetela senza trattenervi.",
        // Consigli — Amici d'Eccellenza
        "loveCalculator.friendship.results.perfect.advice1": "Rendete questa giornata indimenticabile. È tutta vostra.",
        "loveCalculator.friendship.results.perfect.advice2": "Siate completamente presenti l’uno per l’altro oggi.",
        "loveCalculator.friendship.results.perfect.advice3": "Questa energia amicale è unica. Domani sarà diverso — bellezza della lettura quotidiana.",

    // Variazioni per "Buona giornata"
    "interpretation.daily.closing.var1":
      "Buona giornata {genderText} {name}, e che le stelle illuminino il tuo cammino!",
    "interpretation.daily.closing.var2":
      "Bella giornata a te {name}, che questa guida ti accompagni!",
    "interpretation.daily.closing.var3":
      "Goditi la giornata {name}, le energie sono con te!",
    "interpretation.daily.closing.var4":
      "Passa una meravigliosa giornata {genderText} {name}!",
    "interpretation.daily.closing.var5":
      "Che questa giornata ti sia dolce {name}, l’universo veglia su di te!",
    "interpretation.daily.closing.var6":
      "Che tu abbia una giornata luminosa, {genderText} {name}, piena di meravigliose sorprese!",
    "interpretation.daily.closing.var7":
      "Buona giornata, {name}, che l’energia positiva ti accompagni in ogni momento!",
    "interpretation.daily.closing.var8":
      "Che questo giorno ti porti gioia e serenità, {genderText} {name}!",
    "interpretation.daily.closing.var9":
      "Sorridi alla vita oggi, {name}, e ti sorriderà indietro!",
    "interpretation.daily.closing.var10":
      "Passa una giornata ispiratrice, {genderText} {name}, sotto la protezione delle stelle!",
    
    // Common
    "common.back": "Indietro",
    "common.home": "Casa",
    "common.language": "Lingua",

    // Card Names and Meanings - Runes
    "cards.runes.Fehu.name": "Fehu",
    "cards.runes.Fehu.meaning":
      "Ricchezza, prosperità, nuovo inizio finanziario",
    "cards.runes.Uruz.name": "Uruz",
    "cards.runes.Uruz.meaning": "Forza bruta, salute, trasformazione",
    "cards.runes.Thurisaz.name": "Thurisaz",
    "cards.runes.Thurisaz.meaning": "Difesa, protezione, forza distruttiva",
    "cards.runes.Ansuz.name": "Ansuz",
    "cards.runes.Ansuz.meaning": "Comunicazione divina, ispirazione, saggezza",
    "cards.runes.Raidho.name": "Raidho",
    "cards.runes.Raidho.meaning": "Viaggio, movimento, progressione",
    "cards.runes.Kenaz.name": "Kenaz",
    "cards.runes.Kenaz.meaning": "Conoscenza, creatività, illuminazione",
    "cards.runes.Gebo.name": "Gebo",
    "cards.runes.Gebo.meaning": "Dono, scambio, partenariato",
    "cards.runes.Wunjo.name": "Wunjo",
    "cards.runes.Wunjo.meaning": "Gioia, felicità, armonia",
    "cards.runes.Hagalaz.name": "Hagalaz",
    "cards.runes.Hagalaz.meaning":
      "Interruzione, cambiamento forzato, purificazione",
    "cards.runes.Nauthiz.name": "Nauthiz",
    "cards.runes.Nauthiz.meaning": "Necessità, costrizione, lezione karmica",
    "cards.runes.Isa.name": "Isa",
    "cards.runes.Isa.meaning": "Ghiaccio, stagnazione, pazienza",
    "cards.runes.Jera.name": "Jera",
    "cards.runes.Jera.meaning": "Raccolto, cicli, ricompensa",
    "cards.runes.Eihwaz.name": "Eihwaz",
    "cards.runes.Eihwaz.meaning":
      "Resistenza, protezione, connessione spirituale",
    "cards.runes.Perthro.name": "Perthro",
    "cards.runes.Perthro.meaning": "Mistero, destino, forze nascoste",
    "cards.runes.Algiz.name": "Algiz",
    "cards.runes.Algiz.meaning": "Protezione divina, connessione con le guide",
    "cards.runes.Sowilo.name": "Sowilo",
    "cards.runes.Sowilo.meaning": "Successo, vittoria, energia solare",
    "cards.runes.Tiwaz.name": "Tiwaz",
    "cards.runes.Tiwaz.meaning": "Vittoria, giustizia, sacrificio onorevole",
    "cards.runes.Berkano.name": "Berkano",
    "cards.runes.Berkano.meaning": "Crescita, fertilità, nuovo ciclo",
    "cards.runes.Ehwaz.name": "Ehwaz",
    "cards.runes.Ehwaz.meaning": "Movimento, progresso, partenariato",
    "cards.runes.Mannaz.name": "Mannaz",
    "cards.runes.Mannaz.meaning": "Umanità, sé, intelligenza",
    "cards.runes.Laguz.name": "Laguz",
    "cards.runes.Laguz.meaning": "Acqua, intuizione, emozioni",
    "cards.runes.Ingwaz.name": "Ingwaz",
    "cards.runes.Ingwaz.meaning": "Fertilità maschile, energia creativa",
    "cards.runes.Dagaz.name": "Dagaz",
    "cards.runes.Dagaz.meaning": "Risveglio, trasformazione, nuovo giorno",
    "cards.runes.Othala.name": "Othala",
    "cards.runes.Othala.meaning": "Eredità, proprietà, tradizione familiare",

    // Lettura dell’Oracolo dell’Amore
    "crossSpread.positions.present": "Il Presente",
    "crossSpread.positions.obstacle": "L’Ostacolo",
    "crossSpread.positions.past": "Il Passato",
    "crossSpread.positions.future": "Il Futuro",
    "crossSpread.positions.synthesis": "La Sintesi",
    "crossSpread.interpretation.title": "La Tua Lettura a Croce",
    "crossSpread.interpretation.subtitle": "{name}, la tua lettura rivela un percorso amoroso ricco di intuizioni.",
    "crossSpread.interpretation.sections.positive": "Aspetti Positivi",
    "crossSpread.interpretation.sections.attention": "Punti di Attenzione",
    "crossSpread.interpretation.sections.advice": "Consiglio",
    "crossSpread.interpretation.newConsultation": "Nuova Consultazione",
    "gameMode.classic.title": "Stesura a 3 Carte",
    "gameMode.classic.description": "Ricevi una guida amorosa immediata grazie a una stesura semplice e intuitiva di 3 carte.",
    "gameMode.classic.features": "3 carte • Guida rapida • Messaggio personalizzato",
    "gameMode.cross.title": "Lettura a Croce",
    "gameMode.cross.description": "Una lettura approfondita con 5 posizioni per esplorare la tua situazione sentimentale",
    "oracle.loveOracle.title": "Oracolo dell’Amore",
    "oracle.loveOracle.description": "Scopri cosa ti riserva il futuro in amore con questa lettura.",
    "crossSpread.title": "Stesura a Croce – Oracolo dell’Amore",
    "crossSpread.description": "Questa stesura esplora la tua situazione sentimentale attraverso tre aspetti: energie favorevoli (Pro), ostacoli o blocchi (Contro) e il messaggio finale (Sintesi). Ogni carta rivela una variazione specifica in base alla tua estrazione.",
    "interpretation.loveOracle.greeting": "Ecco cosa rivela il tuo tiro sull’amore",
    "revelation.personalAdvice": "Il tuo consiglio personale",
    "common.loading": "Caricamento in corso...",
        "gameMode.classic.cta": "Consulta l'oracolo",
        "gameMode.cross.cta": "Consulta l'oracolo",

    // Nomi delle carte dell'Oracolo dell'Amore
    "cards.loveOracle.lerendezvous.name": "L’Incontro",
    "cards.loveOracle.lemessage.name": "Il Messaggio",
    "cards.loveOracle.ledesir.name": "Il Desiderio",
    "cards.loveOracle.lecoeurouvert.name": "Il Cuore Aperto",
    "cards.loveOracle.lecoeurferme.name": "Il Cuore Chiuso",
    "cards.loveOracle.lechoix.name": "La Scelta",
    "cards.loveOracle.leretour.name": "Il Ritorno",
    "cards.loveOracle.ladistance.name": "La Distanza",
    "cards.loveOracle.lunion.name": "L’Unione",
    "cards.loveOracle.lemasque.name": "La Maschera",
    "cards.loveOracle.lapassion.name": "La Passione",
    "cards.loveOracle.lachance.name": "La Fortuna",
    "cards.loveOracle.ledestin.name": "Il Destino",
    "cards.loveOracle.lesilence.name": "Il Silenzio",
    "cards.loveOracle.laverite.name": "La Verità",
    "cards.loveOracle.lecadeau.name": "Il Dono",
    "cards.loveOracle.lablessure.name": "La Ferita",
    "cards.loveOracle.lenouveaudepart.name": "Il Nuovo Inizio",
    "cards.loveOracle.lafusion.name": "La Fusione",
    "cards.loveOracle.latentation.name": "La Tentazione",
    "cards.loveOracle.laprotection.name": "La Protezione",
    "cards.loveOracle.laliberation.name": "La Liberazione",

    // ========== ETICHETTE DELLE 3 ENERGIE ==========
    // Per l'Oracolo dell'Amore
    "interpretation.loveOracle.energy1.label": "Energia dominante",
    "interpretation.loveOracle.energy1.subtitle": "Ciò che senti dentro di te",
    "interpretation.loveOracle.energy2.label": "Influenza esterna",
    "interpretation.loveOracle.energy2.subtitle": "Ciò che succede intorno a te",
    "interpretation.loveOracle.energy3.label": "Evoluzione possibile",
    "interpretation.loveOracle.energy3.subtitle": "Ciò che potrebbe accadere presto",

    // Nomi e significati delle carte - Oracolo dell'Amore - Lettura di 3 carte
    // L'incontro — Energia dominante (ciò che senti)
    "cards.loveOracle.lerendezvous.meaning.energy1.var1": "Stai aspettando con ansia questo incontro e il tuo cuore è pieno di speranza ed eccitazione.",
    "cards.loveOracle.lerendezvous.meaning.energy1.var2": "La tua mente è concentrata su questo incontro e stai già immaginando momenti intensi e piacevoli.",
    "cards.loveOracle.lerendezvous.meaning.energy1.var3": "Senti una miscela di nervosismo e desiderio, ma sei pronto a goderti appieno questo momento.",
    // L'incontro — Influenza esterna (ciò che succede intorno a te)
    "cards.loveOracle.lerendezvous.meaning.energy2.var1": "La persona che incontrerai sembra essere altrettanto impaziente e potrebbe aver preparato qualcosa di speciale per te.",
    "cards.loveOracle.lerendezvous.meaning.energy2.var2": "Alcune circostanze o eventi potrebbero rendere questo incontro indimenticabile o renderlo leggermente più complicato.",
    "cards.loveOracle.lerendezvous.meaning.energy2.var3": "Le persone intorno a te potrebbero incoraggiarti e darti consigli per fare in modo che questo incontro vada al meglio.",
    // L'Incontro — Evoluzione possibile (ciò che può accadere presto)
    "cards.loveOracle.lerendezvous.meaning.energy3.var1": "Questo incontro potrebbe creare una connessione forte e avvicinarti a questa persona in modo significativo.",
    "cards.loveOracle.lerendezvous.meaning.energy3.var2": "Anche se non tutto andrà perfettamente, questo incontro ti porterà emozioni intense e ricordi preziosi.",
    "cards.loveOracle.lerendezvous.meaning.energy3.var3": "È possibile che una rivelazione o un gesto durante questo incontro cambi la dinamica della tua relazione e apra nuove prospettive.",
    // Il Messaggio — Energia dominante (ciò che senti)
    "cards.loveOracle.lemessage.meaning.energy1.var1": "Stai aspettando un messaggio, ma non sai quando arriverà e ti chiedi se questa persona ti scriverà davvero.",
    "cards.loveOracle.lemessage.meaning.energy1.var2": "Qualcuno esita a inviarti un messaggio, creando una miscela di speranza e dubbio nel tuo cuore.",
    "cards.loveOracle.lemessage.meaning.energy1.var3": "Continui ad aspettare, senza sapere se arriverà il messaggio, e questo ti fa riflettere su ciò che davvero desideri.",
    // Il Messaggio — Influenza esterna (ciò che succede intorno a te)
    "cards.loveOracle.lemessage.meaning.energy2.var1": "La persona coinvolta potrebbe inviarti un messaggio che cambierà la dinamica tra di voi.",
    "cards.loveOracle.lemessage.meaning.energy2.var2": "Eventi esterni o consigli degli amici possono influenzare cosa riceverai o quando lo riceverai.",
    "cards.loveOracle.lemessage.meaning.energy2.var3": "Il messaggio potrebbe essere inaspettato, rivelatore o anche un punto di svolta per proseguire nella relazione.",
    // Il Messaggio — Evoluzione possibile (ciò che può accadere presto)
    "cards.loveOracle.lemessage.meaning.energy3.var1": "Se sei paziente e attento, questo messaggio potrebbe portarti notizie importanti o una chiarificazione.",
    "cards.loveOracle.lemessage.meaning.energy3.var2": "Questo messaggio potrebbe sorprenderti, suscitare emozioni forti e guidarti nelle tue prossime scelte romantiche.",
    "cards.loveOracle.lemessage.meaning.energy3.var3": "Anche se il messaggio non è esattamente quello che speravi, potrebbe aiutarti ad andare avanti e a comprendere meglio la situazione.",
    // Il Desiderio — Energia dominante (ciò che senti)
    "cards.loveOracle.ledesir.meaning.energy1.var1": "Il tuo corpo e il tuo cuore ardono per questa persona, e sogni momenti intensi e sensuali con lei.",
    "cards.loveOracle.ledesir.meaning.energy1.var2": "Ogni pensiero, ogni sguardo alimenta il tuo desiderio e ti fa immaginare momenti appassionati.",
    "cards.loveOracle.ledesir.meaning.energy1.var3": "Hai un desiderio irresistibile di avvicinarti, di sentire questa connessione sia fisica che emozionale.",
    // Il Desiderio — Influenza esterna (ciò che succede intorno a te)
    "cards.loveOracle.ledesir.meaning.energy2.var1": "La persona che desideri potrebbe anche provare questa intensa attrazione, creando momenti bollenti e inaspettati.",
    "cards.loveOracle.ledesir.meaning.energy2.var2": "Situazioni o sguardi scambiati potrebbero infiammare le tue emozioni e rafforzare questo desiderio quasi irresistibile.",
    "cards.loveOracle.ledesir.meaning.energy2.var3": "Attenzione, l'intensità potrebbe essere forte e sorprendente, e a volte dovrai gestire questa passione per evitare complicazioni.",
    // Il Desiderio — Evoluzione possibile (ciò che può accadere presto)
    "cards.loveOracle.ledesir.meaning.energy3.var1": "Se cedi a questo desiderio, potresti vivere momenti torridi e incontri appassionati che segneranno il tuo cuore.",
    "cards.loveOracle.ledesir.meaning.energy3.var2": "Questo desiderio potrebbe evolversi in una connessione molto intensa, ma fai attenzione alle conseguenze se la persona è inaccessibile o complicata.",
    "cards.loveOracle.ledesir.meaning.energy3.var3": "Anche se la situazione è delicata, lasciare che parli il tuo desiderio potrebbe permetterti di vivere momenti sensuali ed emotivamente potenti.",
    // Il Cuore Aperto — Energia dominante (ciò che senti)
    "cards.loveOracle.lecoeurouvert.meaning.energy1.var1": "Il tuo cuore è pronto ad aprirsi e accogliere qualcuno di nuovo, senza paura né riserve.",
    "cards.loveOracle.lecoeurouvert.meaning.energy1.var2": "Senti un profondo desiderio di condividere e connetterti, e non vuoi più proteggerti.",
    "cards.loveOracle.lecoeurouvert.meaning.energy1.var3": "Sei sensibile e ricettivo alle emozioni degli altri e il tuo cuore si apre facilmente all'amore.",
    // Il Cuore Aperto — Influenza esterna (ciò che succede intorno a te)
    "cards.loveOracle.lecoeurouvert.meaning.energy2.var1": "Qualcuno vicino a te ti sta incoraggiando ad aprirti e mostrare i tuoi sentimenti, anche se ti spaventa.",
    "cards.loveOracle.lecoeurouvert.meaning.energy2.var2": "Gli eventi intorno a te ti spingono alla connessione, il che potrebbe portarti a innamorarti rapidamente.",
    "cards.loveOracle.lecoeurouvert.meaning.energy2.var3": "Attenzione, alcune persone potrebbero approfittare della tua sensibilità e apertura, quindi rimani prudente.",
    // Il Cuore Aperto — Evoluzione possibile (ciò che può accadere presto)
    "cards.loveOracle.lecoeurouvert.meaning.energy3.var1": "Se rimani aperto e sincero, un incontro importante potrebbe cambiare la tua vita amorosa.",
    "cards.loveOracle.lecoeurouvert.meaning.energy3.var2": "La tua apertura potrebbe essere ricompensata con momenti intensi di connessione, ma anche con ferite se non stai attento.",
    "cards.loveOracle.lecoeurouvert.meaning.energy3.var3": "Lasciando che il tuo cuore guidi le tue scelte, potresti vivere una storia forte, ma non dimenticare di mettere dei limiti.",
    // Il Cuore Chiuso — Energia dominante (ciò che senti)
    "cards.loveOracle.lecoeurferme.meaning.energy1.var1": "Il tuo cuore è chiuso e fai fatica a fidarti degli altri, anche di quelli che ami.",
    "cards.loveOracle.lecoeurferme.meaning.energy1.var2": "Ti proteggi dal dolore e dalle delusioni passate, e rifiuti di mostrare i tuoi veri sentimenti.",
    "cards.loveOracle.lecoeurferme.meaning.energy1.var3": "Senti una distanza emotiva, come se fossi in guardia contro l'amore e l'intimità.",
    // Il Cuore Chiuso — Influenza esterna (ciò che succede intorno a te)
    "cards.loveOracle.lecoeurferme.meaning.energy2.var1": "Persone o situazioni recenti ti hanno ferito, rafforzando il tuo sospetto e la tua prudenza.",
    "cards.loveOracle.lecoeurferme.meaning.energy2.var2": "Qualcuno potrebbe cercare di avvicinarsi, ma stai ignorando i suoi segnali o li respingi senza volerlo.",
    "cards.loveOracle.lecoeurferme.meaning.energy2.var3": "Il tuo ambiente potrebbe incoraggiarti ad aprirti, ma sei ancora titubante, temendo di sbagliare o soffrire.",
    // Il Cuore Chiuso — Evoluzione possibile (ciò che può accadere presto)
    "cards.loveOracle.lecoeurferme.meaning.energy3.var1": "Se continui a tenere il cuore chiuso, rischi di perdere un incontro importante e sincero.",
    "cards.loveOracle.lecoeurferme.meaning.energy3.var2": "Con il tempo e la fiducia, potresti aprirti gradualmente e vivere una relazione vera, ma ci vorrà coraggio.",
    "cards.loveOracle.lecoeurferme.meaning.energy3.var3": "Un evento o una persona inaspettata potrebbe spingerti a lasciare cadere le tue difese e lasciare entrare l'amore, anche se ti fa paura.",
    // La Scelta — Energia dominante (ciò che senti)
    "cards.loveOracle.lechoix.meaning.energy1.var1": "Ti senti diviso tra due persone o due direzioni, e il tuo cuore non sa quale seguire.",
    "cards.loveOracle.lechoix.meaning.energy1.var2": "Stai riflettendo molto sui tuoi sentimenti e cercando di capire cosa vuoi davvero in amore.",
    "cards.loveOracle.lechoix.meaning.energy1.var3": "Una decisione importante si sta avvicinando, e provi sia eccitazione che paura di fare la scelta sbagliata.",
    // La Scelta — Influenza esterna (ciò che succede intorno a te)
    "cards.loveOracle.lechoix.meaning.energy2.var1": "Pareri esterni o consigli potrebbero complicare la tua riflessione e farti dubitare dei tuoi stessi sentimenti.",
    "cards.loveOracle.lechoix.meaning.energy2.var2": "Alcune persone intorno a te hanno i loro interessi e potrebbero cercare di influenzare le tue decisioni a loro favore.",
    "cards.loveOracle.lechoix.meaning.energy2.var3": "Il tuo ambiente potrebbe anche supportarti e aiutarti a chiarire cosa vuoi davvero, anche se il percorso rimane difficile.",
    // La Scelta — Evoluzione possibile (ciò che può accadere presto)
    "cards.loveOracle.lechoix.meaning.energy3.var1": "Se ascolti il tuo cuore e i tuoi istinti, riuscirai a fare una scelta che ti corrisponde e ti porterà felicità.",
    "cards.loveOracle.lechoix.meaning.energy3.var2": "È possibile che le tue esitazioni ti facciano perdere un'opportunità, ma questo ti insegnerà a conoscere meglio te stesso.",
    "cards.loveOracle.lechoix.meaning.energy3.var3": "Una decisione importante potrebbe sconvolgere il tuo equilibrio attuale, ma aprirà anche la strada a una relazione sincera e intensa, se avrai il coraggio di fare il passo.",
    // Il Ritorno — Energia dominante (ciò che senti)
    "cards.loveOracle.leretour.meaning.energy1.var1": "Senti un forte desiderio che qualcuno torni nella tua vita, e il tuo cuore spera in una seconda opportunità.",
    "cards.loveOracle.leretour.meaning.energy1.var2": "Sei diviso tra il passato e il presente, e pensi spesso a ciò che avrebbe potuto essere.",
    "cards.loveOracle.leretour.meaning.energy1.var3": "Un sentimento di nostalgia e attesa ti sopraffà, come se una parte di te volesse riparare ciò che è stato perso.",
    // Il Ritorno — Influenza esterna (ciò che succede intorno a te)
    "cards.loveOracle.leretour.meaning.energy2.var1": "La persona a cui pensi per un ritorno potrebbe anche sentire il bisogno di tornare, ma esita a manifestarsi.",
    "cards.loveOracle.leretour.meaning.energy2.var2": "Eventi o amici possono facilitare questo ritorno o ritardarlo, a seconda delle circostanze.",
    "cards.loveOracle.leretour.meaning.energy2.var3": "Alcune influenze esterne potrebbero spingerti a riaccendere la relazione, ma dovrai essere prudente per non ripetere gli errori del passato.",
    // Il Ritorno — Evoluzione possibile (ciò che può accadere presto)
    "cards.loveOracle.leretour.meaning.energy3.var1": "Se ti apri e dai una chance a questa persona, è possibile ritrovare una connessione forte e sincera.",
    "cards.loveOracle.leretour.meaning.energy3.var2": "Un ritorno potrebbe riaccendere emozioni intense, ma dovrai chiarire le aspettative per evitare ferite.",
    "cards.loveOracle.leretour.meaning.energy3.var3": "È anche possibile che la persona non torni, e questa situazione potrebbe spingerti a voltare pagina e concentrarti su un nuovo amore.",
    // La Distanza — Energia dominante (ciò che senti)
    "cards.loveOracle.ladistance.meaning.energy1.var1": "Senti una distanza emotiva o fisica che ti pesa e ti fa dubitare della relazione.",
    "cards.loveOracle.ladistance.meaning.energy1.var2": "Il tuo cuore fatica a colmare il vuoto, e sogni la vicinanza e i momenti condivisi.",
    "cards.loveOracle.ladistance.meaning.energy1.var3": "La separazione ti fa sentire un vuoto e a volte frustrazione, ma conservi la speranza che le cose migliorino.",
    // La Distanza — Influenza esterna (ciò che succede intorno a te)
    "cards.loveOracle.ladistance.meaning.energy2.var1": "Circostanze esterne come lavoro, vita personale o geografia possono mantenere questa distanza.",
    "cards.loveOracle.ladistance.meaning.energy2.var2": "Consigli o pressioni da parte degli altri potrebbero spingerti ad accettare la situazione o a cercare di colmarla.",
    "cards.loveOracle.ladistance.meaning.energy2.var3": "È possibile che qualcuno cerchi di ridurre la distanza, ma dipenderà dal tuo impegno e dalle tue scelte.",
    // La Distanza — Evoluzione possibile (ciò che può accadere presto)
    "cards.loveOracle.ladistance.meaning.energy3.var1": "Se fai uno sforzo per comunicare e avvicinarti, la distanza potrebbe ridursi e la relazione rafforzarsi.",
    "cards.loveOracle.ladistance.meaning.energy3.var2": "È anche possibile che la distanza persista e metta alla prova la relazione, rivelando cosa sei veramente disposto a vivere.",
    "cards.loveOracle.ladistance.meaning.energy3.var3": "Un evento inaspettato potrebbe creare un incontro o un avvicinamento, ma dovrai agire rapidamente per sfruttare questa opportunità.",
    // L'Unione — Energia dominante (ciò che senti)
    "cards.loveOracle.lunion.meaning.energy1.var1": "Senti un profondo bisogno di connessione e condivisione, e il tuo cuore brama una relazione sincera e duratura.",
    "cards.loveOracle.lunion.meaning.energy1.var2": "Sei pronto a impegnarti e costruire qualcosa di solido con qualcuno che ti corrisponde veramente.",
    "cards.loveOracle.lunion.meaning.energy1.var3": "Il tuo desiderio di vicinanza e complicità è forte, e cerchi di creare un legame autentico e profondo.",
    // L'Unione — Influenza esterna (ciò che succede intorno a te)
    "cards.loveOracle.lunion.meaning.energy2.var1": "Le persone intorno a te potrebbero incoraggiarti a impegnarti e cercare un'unione sincera, o metterti in guardia da cattive scelte.",
    "cards.loveOracle.lunion.meaning.energy2.var2": "Eventi o incontri recenti favoriscono la creazione di legami solidi e la possibilità di costruire qualcosa di vero.",
    "cards.loveOracle.lunion.meaning.energy2.var3": "Attenzione, alcune influenze esterne potrebbero complicare la relazione, ma possono anche rivelare la forza del vostro legame.",
    // L'Unione — Evoluzione possibile (ciò che può accadere presto)
    "cards.loveOracle.lunion.meaning.energy3.var1": "Se investi il tuo cuore e la tua energia, un'unione duratura e armoniosa potrebbe formarsi molto presto.",
    "cards.loveOracle.lunion.meaning.energy3.var2": "È possibile che la relazione attraversi delle prove, ma se restate sinceri e attenti, il vostro legame ne uscirà rafforzato.",
    "cards.loveOracle.lunion.meaning.energy3.var3": "Un incontro importante o un evento chiave potrebbe consolidare la vostra relazione e aprire la strada a un amore profondo e stabile.",
    // La Maschera — Energia dominante (ciò che senti)
    "cards.loveOracle.lemasque.meaning.energy1.var1": "Hai la tendenza a nascondere le tue vere emozioni e a non mostrare i tuoi sentimenti per proteggerti.",
    "cards.loveOracle.lemasque.meaning.energy1.var2": "Senti una certa distanza emotiva, come se indossassi una maschera per evitare di soffrire o di essere giudicato.",
    "cards.loveOracle.lemasque.meaning.energy1.var3": "A volte, sei diviso tra ciò che provi veramente e l'immagine che vuoi mostrare agli altri.",
    // La Maschera — Influenza esterna (ciò che succede intorno a te)
    "cards.loveOracle.lemasque.meaning.energy2.var1": "Alcune persone intorno a te vedono solo la facciata che mostri e ignorano le tue emozioni reali.",
    "cards.loveOracle.lemasque.meaning.energy2.var2": "Situazioni esterne ti spingono a proteggerti ancora di più e a mantenere questa maschera, per paura di delusione o rifiuto.",
    "cards.loveOracle.lemasque.meaning.energy2.var3": "Persone vicine o eventi potrebbero spingerti a toglierti la maschera, ma ciò richiede coraggio e fiducia.",
    // La Maschera — Evoluzione possibile (ciò che può accadere presto)
    "cards.loveOracle.lemasque.meaning.energy3.var1": "Se accetti di mostrare chi sei veramente, potresti vivere una connessione sincera e profonda con qualcuno che ti capisce.",
    "cards.loveOracle.lemasque.meaning.energy3.var2": "È possibile che la tua maschera venga abbattuta da una situazione o da una persona, rivelando le tue vere emozioni e scatenando cambiamenti nella tua vita amorosa.",
    "cards.loveOracle.lemasque.meaning.energy3.var3": "Continuare a indossare questa maschera potrebbe proteggerti nel breve periodo, ma rischia di allontanarti da relazioni autentiche e arricchenti.",
    // Passione — Energia dominante (ciò che senti)
    "cards.loveOracle.lapassion.meaning.energy1.var1": "Bruci di un desiderio intenso e il tuo corpo reclama questa connessione, come se ogni pensiero girasse attorno a questa persona.",
    "cards.loveOracle.lapassion.meaning.energy1.var2": "Il tuo cuore accelera e la tua mente è ossessionata da questa persona, sogni momenti passionali e intensi.",
    "cards.loveOracle.lapassion.meaning.energy1.var3": "Senti una attrazione irresistibile, che unisce emozioni e sensualità, e desideri vivere tutto pienamente con questa persona.",
    // Passione — Influenza esterna (ciò che succede intorno a te)
    "cards.loveOracle.lapassion.meaning.energy2.var1": "La persona che desideri è molto presente nella tua vita quotidiana o nei tuoi pensieri, e questo alimenta l'intensità.",
    "cards.loveOracle.lapassion.meaning.energy2.var2": "Segnali o avvicinamenti possono amplificare questa tensione e attrazione, gettandoti in un turbine di emozioni.",
    "cards.loveOracle.lapassion.meaning.energy2.var3": "Attenzione, questa passione potrebbe anche essere complicata da ostacoli esterni, ma rivela l'energia potente che vi lega.",
    // Passione — Evoluzione possibile (ciò che può accadere presto)
    "cards.loveOracle.lapassion.meaning.energy3.var1": "Se ti lasci trasportare da questa passione, potresti vivere momenti intensi e indimenticabili, ma dovrai essere consapevole delle conseguenze.",
    "cards.loveOracle.lapassion.meaning.energy3.var2": "Questa energia potrebbe trasformare la relazione, avvicinandoti profondamente a questa persona o creando situazioni esplosive.",
    "cards.loveOracle.lapassion.meaning.energy3.var3": "La passione potrebbe evolversi in un amore potente e profondo se riesci a canalizzare le tue emozioni e ad essere sincero con te stesso e con l'altra persona.",
    // Fortuna — Energia dominante (ciò che senti)
    "cards.loveOracle.lachance.meaning.energy1.var1": "Senti che la fortuna è dalla tua parte e che potrebbero presentarsi presto opportunità romantiche.",
    "cards.loveOracle.lachance.meaning.energy1.var2": "Il tuo cuore è aperto e pronto ad accogliere ciò che potrebbe arrivare di bello e inaspettato.",
    "cards.loveOracle.lachance.meaning.energy1.var3": "Senti una spinta positiva nella tua vita amorosa, come se l'universo volesse sorriderti e offrirti un bel incontro.",
    // Fortuna — Influenza esterna (ciò che succede intorno a te)
    "cards.loveOracle.lachance.meaning.energy2.var1": "Incontri casuali o eventi fortuiti potrebbero giocare a tuo favore e avvicinarti a qualcuno di speciale.",
    "cards.loveOracle.lachance.meaning.energy2.var2": "Il tuo ambiente potrebbe offrirti opportunità o metterti in contatto con persone che corrispondono ai tuoi desideri.",
    "cards.loveOracle.lachance.meaning.energy2.var3": "Potrebbe essere che la fortuna si manifesti in modo inaspettato, ma dovrai stare attento a non lasciarla sfuggire.",
    // Fortuna — Evoluzione possibile (ciò che può accadere presto)
    "cards.loveOracle.lachance.meaning.energy3.var1": "Se rimani aperto e attento, un incontro fortunato o un evento positivo potrebbe trasformare la tua vita amorosa.",
    "cards.loveOracle.lachance.meaning.energy3.var2": "La fortuna potrebbe sorprenderti e portarti una situazione ideale, ma dovrai cogliere l'occasione quando si presenta.",
    "cards.loveOracle.lachance.meaning.energy3.var3": "Anche se non tutto va perfettamente, questo periodo promette sorprese e momenti felici che potrebbero avvicinarti all'amore che desideri.",
    // Il Destino — Energia dominante (ciò che senti)
    "cards.loveOracle.ledestin.meaning.energy1.var1": "Senti che alcuni incontri o eventi sono scritti per te e che il destino gioca un ruolo nella tua vita amorosa.",
    "cards.loveOracle.ledestin.meaning.energy1.var2": "Il tuo cuore è intrigato da ciò che sembra inevitabile e ti lasci trasportare dal corso degli eventi.",
    "cards.loveOracle.ledestin.meaning.energy1.var3": "Senti una forza misteriosa che ti spinge verso alcune persone o situazioni, come se tutto fosse legato dal destino.",
    // Il Destino — Influenza esterna (ciò che succede intorno a te)
    "cards.loveOracle.ledestin.meaning.energy2.var1": "Incontri casuali o eventi inaspettati potrebbero avvicinarti a ciò che il destino ha in serbo per te.",
    "cards.loveOracle.ledestin.meaning.energy2.var2": "Il tuo ambiente o le circostanze potrebbero creare opportunità che sembrano essere guidate da una forza superiore.",
    "cards.loveOracle.ledestin.meaning.energy2.var3": "Attenzione, alcune situazioni potrebbero sembrare dei deviazioni, ma fanno parte del cammino che il destino ha previsto per te.",
    // Il Destino — Evoluzione possibile (ciò che può accadere presto)
    "cards.loveOracle.ledestin.meaning.energy3.var1": "Se accetti di seguire il flusso e di fidarti del destino, un incontro o un evento significativo potrebbe sconvolgere la tua vita amorosa.",
    "cards.loveOracle.ledestin.meaning.energy3.var2": "Il destino potrebbe portarti un'opportunità unica, ma dovrai restare attento e cogliere il momento quando si presenterà.",
    "cards.loveOracle.ledestin.meaning.energy3.var3": "Anche se il cammino sembra complicato, il destino sta lavorando per te e potrebbe portarti verso una relazione significativa e profonda.",
    // Il Silenzio — Energia dominante (ciò che senti)
    "cards.loveOracle.lesilence.meaning.energy1.var1": "Senti un vuoto o una distanza nella comunicazione, e il silenzio ti pesa nelle tue relazioni amorose.",
    "cards.loveOracle.lesilence.meaning.energy1.var2": "Il tuo cuore è confuso e ti chiedi se il silenzio nasconde dei sentimenti o un allontanamento.",
    "cards.loveOracle.lesilence.meaning.energy1.var3": "A volte preferisci tacere e tenere per te le tue emozioni, il che può creare malintesi o tensioni.",
    // Il Silenzio — Influenza esterna (ciò che succede intorno a te)
    "cards.loveOracle.lesilence.meaning.energy2.var1": "La persona di fronte a te potrebbe essere distante o riservata, e il suo silenzio influenza il tuo stato d'animo.",
    "cards.loveOracle.lesilence.meaning.energy2.var2": "Circostanze esterne o recenti tensioni potrebbero creare il silenzio, rendendo più difficile la comunicazione.",
    "cards.loveOracle.lesilence.meaning.energy2.var3": "Il tuo ambiente potrebbe consigliarti o intervenire per ristabilire il dialogo, ma la decisione di parlare o meno dipenderà da te e dall'altra persona.",
    // Il Silenzio — Evoluzione possibile (ciò che può accadere presto)
    "cards.loveOracle.lesilence.meaning.energy3.var1": "Se scegli di rompere il silenzio e esprimere le tue emozioni, potrebbe verificarsi un chiarimento o una riconciliazione.",
    "cards.loveOracle.lesilence.meaning.energy3.var2": "Il silenzio potrebbe durare e farti dubitare, ma ti darà anche il tempo di riflettere su ciò che vuoi davvero.",
    "cards.loveOracle.lesilence.meaning.energy3.var3": "Un evento inaspettato o una persona potrebbero riaccendere la comunicazione e rivelare verità nascoste, aprendo la via a una migliore comprensione reciproca.",
    // La Verità — Energia dominante (ciò che senti)
    "cards.loveOracle.laverite.meaning.energy1.var1": "Senti il bisogno di conoscere la verità su una situazione o una persona, e il tuo cuore reclama chiarezza.",
    "cards.loveOracle.laverite.meaning.energy1.var2": "La tua intuizione ti spinge a cercare la trasparenza e a non accontentarti più di mezze verità o finzioni.",
    "cards.loveOracle.laverite.meaning.energy1.var3": "Sei pronto ad affrontare ciò che è reale, anche se potrebbe essere doloroso o sorprendente.",
    // La Verità — Influenza esterna (ciò che succede intorno a te)
    "cards.loveOracle.laverite.meaning.energy2.var1": "Fatti o rivelazioni intorno a te potrebbero mostrarti cosa c'è davvero in gioco in questa relazione.",
    "cards.loveOracle.laverite.meaning.energy2.var2": "Alcune persone potrebbero nasconderti la verità, volontariamente o per paura di ferirti, complicando la situazione.",
    "cards.loveOracle.laverite.meaning.energy2.var3": "Il tuo ambiente o eventi imprevisti potrebbero spingerti a scoprire ciò che è reale, anche se non è quello che speravi.",
    // La Verità — Evoluzione possibile (ciò che può accadere presto)
    "cards.loveOracle.laverite.meaning.energy3.var1": "Se accetti di affrontare la verità, sarai in grado di prendere decisioni chiare e andare avanti nelle tue relazioni con fiducia.",
    "cards.loveOracle.laverite.meaning.energy3.var2": "La verità potrebbe rivelare sorprese, positive o negative, ma ti darà sempre la libertà di scegliere il tuo cammino.",
    "cards.loveOracle.laverite.meaning.energy3.var3": "Anche se la verità è difficile da sentire, potrebbe aprire la via a una relazione sincera e solida, o liberarti da una situazione che non ti appartiene.",
    // Il Regalo — Energia dominante (ciò che senti)
    "cards.loveOracle.lecadeau.meaning.energy1.var1": "Senti che l'amore o una relazione potrebbero portarti un regalo inatteso, una sorpresa che fa battere il tuo cuore.",
    "cards.loveOracle.lecadeau.meaning.energy1.var2": "Il tuo cuore è aperto a ricevere qualcosa di prezioso, che sia attenzione, affetto o un incontro importante.",
    "cards.loveOracle.lecadeau.meaning.energy1.var3": "Sei emozionato all'idea di scoprire cosa la vita amorosa può offrirti, anche se non sai ancora cosa aspettarti.",
    // Il Regalo — Influenza esterna (ciò che succede intorno a te)
    "cards.loveOracle.lecadeau.meaning.energy2.var1": "Le persone intorno a te potrebbero offrirti occasioni o opportunità che arricchiscono il tuo cuore e la tua vita sentimentale.",
    "cards.loveOracle.lecadeau.meaning.energy2.var2": "Un evento inaspettato potrebbe portarti qualcosa di prezioso nella tua vita amorosa, ma dovrai stare attento per notarlo.",
    "cards.loveOracle.lecadeau.meaning.energy2.var3": "Sorprese, che siano positive o un po' deludenti, potrebbero influenzare le tue scelte e le tue emozioni nei prossimi giorni.",
    // Il Regalo — Evoluzione possibile (ciò che può accadere presto)
    "cards.loveOracle.lecadeau.meaning.energy3.var1": "Se accetti ciò che la vita ti porta con gratitudine, potresti ricevere un regalo emotivo che illumina il tuo cuore.",
    "cards.loveOracle.lecadeau.meaning.energy3.var2": "È possibile che una persona o una situazione ti sorprenda piacevolmente e ti porti una felicità inaspettata.",
    "cards.loveOracle.lecadeau.meaning.energy3.var3": "Anche se non tutto va come previsto, questi regali emotivi potrebbero aiutarti ad andare avanti e a comprendere meglio i tuoi desideri amorosi.",
    // La Ferita — Energia dominante (ciò che senti)
    "cards.loveOracle.lablessure.meaning.energy1.var1": "Senti un dolore profondo legato all'amore, come se una cicatrice emotiva stesse riemergendo.",
    "cards.loveOracle.lablessure.meaning.energy1.var2": "Il tuo cuore è fragile e fai fatica a lasciarti andare o a fidarti degli altri.",
    "cards.loveOracle.lablessure.meaning.energy1.var3": "Un dolore antico o un tradimento ti fa dubitare dell'amore e ti spinge a proteggerti.",
    // La Ferita — Influenza esterna (ciò che succede intorno a te)
    "cards.loveOracle.lablessure.meaning.energy2.var1": "Persone o situazioni esterne potrebbero ravvivare questo dolore e ricordarti ciò che ti ha ferito.",
    "cards.loveOracle.lablessure.meaning.energy2.var2": "Il tuo ambiente potrebbe supportarti o incoraggiarti a superare questa ferita, ma la guarigione dipenderà dal tuo impegno verso te stesso.",
    "cards.loveOracle.lablessure.meaning.energy2.var3": "A volte, questa ferita ti spinge a evitare certe relazioni o a diffidare di nuovi incontri, rallentando i tuoi impulsi amorosi.",
    // La Ferita — Evoluzione possibile (ciò che può accadere presto)
    "cards.loveOracle.lablessure.meaning.energy3.var1": "Se accetti di lavorare su questo dolore e di aprirti comunque, potresti guarire e trovare una relazione sincera e profonda.",
    "cards.loveOracle.lablessure.meaning.energy3.var2": "È possibile che questa ferita riemergi di nuovo, ma ogni prova può insegnarti qualcosa e renderti più forte.",
    "cards.loveOracle.lablessure.meaning.energy3.var3": "Un incontro o evento potrebbe aiutarti a superare questo dolore e ad aprire il tuo cuore a un amore più consapevole e equilibrato.",
    // Il Nuovo Inizio — Energia dominante (ciò che senti)
    "cards.loveOracle.lenouveaudepart.meaning.energy1.var1": "Senti che è ora di voltare pagina e iniziare una nuova storia d'amore con il cuore aperto.",
    "cards.loveOracle.lenouveaudepart.meaning.energy1.var2": "La tua mente è pronta a lasciare il passato alle spalle e ad accogliere nuove esperienze ed emozioni.",
    "cards.loveOracle.lenouveaudepart.meaning.energy1.var3": "Senti una miscela di eccitazione e paura, ma il desiderio di rinnovamento è più forte dei tuoi dubbi.",
    // Il Nuovo Inizio — Influenza esterna (ciò che succede intorno a te)
    "cards.loveOracle.lenouveaudepart.meaning.energy2.var1": "Incontri o opportunità recenti potrebbero spingerti ad affrontare qualcosa di nuovo e promettente.",
    "cards.loveOracle.lenouveaudepart.meaning.energy2.var2": "Il tuo ambiente potrebbe incoraggiarti o ispirarti a cogliere questa opportunità di ricominciare, ma la decisione finale dipenderà da te.",
    "cards.loveOracle.lenouveaudepart.meaning.energy2.var3": "Eventi esterni potrebbero innescare questo nuovo inizio, dandoti lo slancio necessario per andare avanti.",
    // Il Nuovo Inizio — Evoluzione possibile (ciò che può accadere presto)
    "cards.loveOracle.lenouveaudepart.meaning.energy3.var1": "Se accetti questo nuovo inizio, potresti incontrare qualcuno di speciale o vivere un'esperienza che trasforma il tuo cuore.",
    "cards.loveOracle.lenouveaudepart.meaning.energy3.var2": "Questa rinascita potrebbe essere graduale, ma ogni piccolo passo ti avvicina a una relazione più sincera e soddisfacente.",
    "cards.loveOracle.lenouveaudepart.meaning.energy3.var3": "Anche se non tutto va come previsto, questo nuovo inizio ti darà l'opportunità di imparare, crescere e aprire il tuo cuore all'amore.",
    // La Fusione — Energia dominante (ciò che senti)
    "cards.loveOracle.lafusion.meaning.energy1.var1": "Senti una connessione intensa e profonda con qualcuno, come se i vostri cuori battessero all'unisono.",
    "cards.loveOracle.lafusion.meaning.energy1.var2": "Il tuo desiderio di vicinanza e complicità è forte, e sogni di creare un legame profondo e sincero.",
    "cards.loveOracle.lafusion.meaning.energy1.var3": "Senti che questa relazione ha il potenziale di trasformare le tue emozioni e la tua visione dell'amore.",
    // La Fusione — Influenza esterna (ciò che succede intorno a te)
    "cards.loveOracle.lafusion.meaning.energy2.var1": "Eventi o situazioni favoriscono questa intensa vicinanza e potrebbero rafforzare rapidamente il vostro legame.",
    "cards.loveOracle.lafusion.meaning.energy2.var2": "Il tuo ambiente potrebbe sostenere questa unione, ma fai attenzione alle influenze esterne che potrebbero mettere alla prova la vostra connessione.",
    "cards.loveOracle.lafusion.meaning.energy2.var3": "Alcune tensioni o gelosie intorno a voi potrebbero complicare questa fusione, ma rivelano anche la forza del vostro legame.",
    // La Fusione — Evoluzione possibile (ciò che può accadere presto)
    "cards.loveOracle.lafusion.meaning.energy3.var1": "Se vi aprite completamente a questa connessione, la fusione potrebbe portare a una relazione passionale e duratura.",
    "cards.loveOracle.lafusion.meaning.energy3.var2": "Questa unione intensa potrebbe attraversare delle prove, ma se rimanete sinceri e attenti, si rafforzerà.",
    "cards.loveOracle.lafusion.meaning.energy3.var3": "Un incontro o un evento chiave potrebbe sancire questo legame e creare un'intimità profonda e trasformante per i vostri cuori.",
    // Tentazione — Energia dominante (ciò che senti)
    "cards.loveOracle.latentation.meaning.energy1.var1": "Senti un desiderio forte e irresistibile per qualcuno o qualcosa che attrae il tuo cuore e il tuo corpo.",
    "cards.loveOracle.latentation.meaning.energy1.var2": "La tua mente è divisa tra la ragione e il desiderio, e questa tentazione ti spinge a esplorare ciò che desideri davvero.",
    "cards.loveOracle.latentation.meaning.energy1.var3": "Ti senti attratto da ciò che è proibito o eccitante, ed è difficile resistere a questo impulso.",
    // Tentazione — Influenza esterna (ciò che succede intorno a te)
    "cards.loveOracle.latentation.meaning.energy2.var1": "Situazioni o persone intorno a te potrebbero intensificare questa tentazione e renderla quasi impossibile da ignorare.",
    "cards.loveOracle.latentation.meaning.energy2.var2": "Il tuo ambiente o le circostanze potrebbero metterti di fronte a scelte difficili, mettendo alla prova la tua capacità di rimanere fedele ai tuoi valori.",
    "cards.loveOracle.latentation.meaning.energy2.var3": "Questa tentazione potrebbe essere un'opportunità per scoprire emozioni intense, ma comporta anche dei rischi e delle complicazioni.",
    // Tentazione — Evoluzione possibile (ciò che può accadere presto)
    "cards.loveOracle.latentation.meaning.energy3.var1": "Se cedi a questa tentazione, potresti vivere momenti passionali e intensi, ma dovrai essere consapevole delle conseguenze.",
    "cards.loveOracle.latentation.meaning.energy3.var2": "Questa situazione potrebbe insegnarti molto sui tuoi desideri e sui tuoi limiti, permettendoti di capire meglio ciò che desideri veramente.",
    "cards.loveOracle.latentation.meaning.energy3.var3": "È anche possibile che resistere alla tentazione ti porti maggiore chiarezza e ti protegga da complicazioni inutili nella tua vita amorosa.",
    // Protezione — Energia dominante (ciò che senti)
    "cards.loveOracle.laprotection.meaning.energy1.var1": "Senti il bisogno di proteggerti emotivamente per non soffrire nelle tue relazioni amorose.",
    "cards.loveOracle.laprotection.meaning.energy1.var2": "Il tuo cuore è in guardia e ti prendi il tempo per scegliere a chi aprire i tuoi sentimenti.",
    "cards.loveOracle.laprotection.meaning.energy1.var3": "A volte blocchi certe emozioni per sentirti al sicuro e evitare delusioni.",
    // Protezione — Influenza esterna (ciò che succede intorno a te)
    "cards.loveOracle.laprotection.meaning.energy2.var1": "Le persone intorno a te o esperienze passate ti incoraggiano a stare attento e a proteggere il tuo cuore.",
    "cards.loveOracle.laprotection.meaning.energy2.var2": "Alcune situazioni potrebbero metterti in allerta e rafforzare il tuo bisogno di proteggerti dalle ferite.",
    "cards.loveOracle.laprotection.meaning.energy2.var3": "Il tuo ambiente potrebbe anche aiutarti a identificare ciò che è sicuro e ciò che potrebbe farti soffrire, guidandoti verso scelte più protettive.",
    // Protezione — Evoluzione possibile (ciò che può accadere presto)
    "cards.loveOracle.laprotection.meaning.energy3.var1": "Se continui a proteggerti pur rimanendo aperto, riuscirai ad andare avanti nelle tue relazioni senza farti male.",
    "cards.loveOracle.laprotection.meaning.energy3.var2": "Potresti trovarti in una situazione che metterà alla prova la tua capacità di proteggerti pur rimanendo sincero.",
    "cards.loveOracle.laprotection.meaning.energy3.var3": "Una relazione o un evento potrebbe aiutarti a sentirti sicuro e ad aprire il tuo cuore gradualmente, senza rischiare di soffrire inutilmente.",
    // Liberazione — Energia dominante (ciò che senti)
    "cards.loveOracle.laliberation.meaning.energy1.var1": "Senti il bisogno di liberarti da una relazione o da emozioni che ti trattengono e ti appesantiscono.",
    "cards.loveOracle.laliberation.meaning.energy1.var2": "Il tuo cuore desidera ritrovare la sua libertà e non essere più limitato da situazioni dolorose o soffocanti.",
    "cards.loveOracle.laliberation.meaning.energy1.var3": "A volte hai il desiderio di tagliare i legami con ciò che ti impedisce di andare avanti e respirare liberamente.",
    // Liberazione — Influenza esterna (ciò che succede intorno a te)
    "cards.loveOracle.laliberation.meaning.energy2.var1": "Persone o eventi intorno a te possono aiutarti a lasciar andare e a sentirti più libero.",
    "cards.loveOracle.laliberation.meaning.energy2.var2": "Alcune situazioni possono spingerti a prendere le distanze e a distaccarti da ciò che blocca il tuo cuore.",
    "cards.loveOracle.laliberation.meaning.energy2.var3": "Il tuo ambiente potrebbe incoraggiarti a liberarti da ciò che non ti fa più bene e a dirigerti verso relazioni più sane.",
    // Liberazione — Evoluzione possibile (ciò che può accadere presto)
    "cards.loveOracle.laliberation.meaning.energy3.var1": "Se accetti di liberarti, potresti vivere una nuova storia d'amore, più leggera e più sincera.",
    "cards.loveOracle.laliberation.meaning.energy3.var2": "La liberazione potrebbe portarti nuove opportunità e incontri che si allineano meglio con il tuo cuore e i tuoi desideri.",
    "cards.loveOracle.laliberation.meaning.energy3.var3": "Anche se questo processo potrebbe essere difficile all'inizio, ti aiuterà a ritrovare la tua forza interiore e ad aprire il tuo cuore all'amore vero.",

    // ========== CONSEILS THÉMATIQUES ORACLE DE L'AMOUR - TIRAGE 3 CARTES ==========
    // 1. Pazienza Amorosa
    "interpretation.loveOracle.advice.patience.var1": "Devi capire che l'amore arriva quando meno te lo aspetti. Fidati del tempo e dell'universo, sa cosa sta facendo.",
    "interpretation.loveOracle.advice.patience.var2": "Non forzare le cose, l'amore verrà a te quando sarai pronto a riceverlo. Lascialo manifestarsi naturalmente.",
    "interpretation.loveOracle.advice.patience.var3": "L'universo ha i suoi piani, e a volte è meglio aspettare che forzare un incontro. Ciò che è destinato a te non passerà oltre.",
    // 2. Apertura del Cuore
    "interpretation.loveOracle.advice.openness.var1": "Il tuo cuore è un tesoro, è il momento di condividerlo con chi è pronto a riceverlo. Lasciati andare alle belle sorprese dell'amore.",
    "interpretation.loveOracle.advice.openness.var2": "Se rimani chiuso, l'amore non potrà entrare. Sii pronto ad aprire il tuo cuore, anche se ciò richiede un po' di coraggio.",
    "interpretation.loveOracle.advice.openness.var3": "Smetti di proteggerti a tutti i costi. L'amore significa anche correre dei rischi e fare spazio alla novità.",
    // 3. Fiducia in Se Stessi
    "interpretation.loveOracle.advice.selfconfidence.var1": "Non dubitare mai del tuo valore, meriti il meglio. Abbi fiducia in te stesso e sappi che sei degno di un amore puro e sincero.",
    "interpretation.loveOracle.advice.selfconfidence.var2": "Prima di dare il tuo amore, inizia amando te stesso. Quando ti rispetti, l'amore arriverà più facilmente.",
    "interpretation.loveOracle.advice.selfconfidence.var3": "L'amore che cerchi comincia con l'amore che dai a te stesso. Sii il tuo primo fan.",
    // 4. Chiarezza Emozionale
    "interpretation.loveOracle.advice.clarity.var1": "Ascolta il tuo cuore. A volte sa cose che la tua mente ignora. Se sei chiaro con te stesso, vedrai le cose molto più chiaramente.",
    "interpretation.loveOracle.advice.clarity.var2": "Prenditi il tempo per fermarti e sentire veramente ciò che vuoi in una relazione. La chiarezza arriverà quando smetterai di correre.",
    "interpretation.loveOracle.advice.clarity.var3": "Se ti senti perso, forse è il momento di ascoltarti. Le tue emozioni ti guideranno verso ciò che è giusto per te.",
    // 5. Lasciare Andare
    "interpretation.loveOracle.advice.lettinggo.var1": "Lasciare andare non significa arrendersi, ma accettare che alcune cose sfuggano al tuo controllo. Lascia che l'universo faccia il suo lavoro.",
    "interpretation.loveOracle.advice.lettinggo.var2": "Liberati dal passato, dai dubbi e dalle ferite. Niente di nuovo potrà entrare nella tua vita finché ti aggrappi al vecchio.",
    "interpretation.loveOracle.advice.lettinggo.var3": "Puoi controllare la tua vita, ma a volte devi sapere quando lasciare andare per permettere alla magia dell'amore di accadere.",
    // 6. Autenticità
    "interpretation.loveOracle.advice.authenticity.var1": "Sii te stesso senza compromessi. Solo essendo autentico puoi attrarre l'amore che davvero ti corrisponde.",
    "interpretation.loveOracle.advice.authenticity.var2": "Il vero amore non ha nulla a che fare con le maschere. Sii onesto, anche se può spaventare. L'amore arriverà quando mostrerai chi sei veramente.",
    "interpretation.loveOracle.advice.authenticity.var3": "Smetti di voler piacere a tutti. L'amore che conta è quello che vivi con qualcuno che ti accetta così come sei.",
    // 7. Protezione del Cuore
    "interpretation.loveOracle.advice.protection.var1": "Proteggi il tuo cuore, ma non costruire muri intorno. Impara a stabilire limiti senza chiuderti agli altri.",
    "interpretation.loveOracle.advice.protection.var2": "Proteggersi non è una debolezza. Le persone giuste entreranno nella tua vita se glielo permetti.",
    "interpretation.loveOracle.advice.protection.var3": "È importante mantenere il cuore al sicuro, ma ricorda che una protezione eccessiva può impedirti di vivere il vero amore.",
    // 8. Azione e Iniziativa
    "interpretation.loveOracle.advice.action.var1": "Se aspetti che l'amore arrivi da solo senza fare nulla, rischi di perderlo. Abbi il coraggio di fare il primo passo, potrebbe cambiare tutto.",
    "interpretation.loveOracle.advice.action.var2": "L'amore non aspetta, quindi prendi l'iniziativa. Non lasciare che timidezza o paure ti impediscano di vivere una bella storia.",
    "interpretation.loveOracle.advice.action.var3": "A volte bisogna sapersi muovere. Se provi sentimenti per qualcuno, non aspettare che la situazione si risolva da sola.",
    // Fallback
    "interpretation.loveOracle.advice.fallback.var1": "Non cercare di capire tutto, fidati del tuo cuore. Ti guida sempre nella direzione giusta.",
    "interpretation.loveOracle.advice.fallback.var2": "Ricorda che tutto si svolge come deve. L'universo ha sempre un piano per te, anche se non lo vedi ancora.",
    "interpretation.loveOracle.advice.fallback.var3": "La tua intuizione è la tua migliore alleata, ascoltala attentamente. Ti dirà sempre cosa è giusto per te.",

     // Card Names and Meanings - Love oracle - Tirage en croix
    // le rendez-vous
    "crossSpread.cards.lerendezvous.pour.variation1": "Un incontro promettente sta arrivando. Rimani aperto e ricettivo.",
      "crossSpread.cards.lerendezvous.pour.variation2": "Avrai una splendida occasione per avvicinarti a qualcuno. Osa fare il primo passo.",
      "crossSpread.cards.lerendezvous.pour.variation3": "Una connessione inaspettata può cambiare la tua storia d’amore. Sii coraggioso.",
      "crossSpread.cards.lerendezvous.contre.variation1": "Non lasciare che la paura o l’esitazione ti facciano perdere un’opportunità importante.",
      "crossSpread.cards.lerendezvous.contre.variation2": "Un incontro mancato potrebbe portare rimpianti. Rimani presente e attento.",
      "crossSpread.cards.lerendezvous.contre.variation3": "La mancanza di fiducia potrebbe impedirti di cogliere questa occasione.",
      "crossSpread.cards.lerendezvous.synthese.variation1": "L’amore sta bussando alla tua porta. Apri il cuore e accogli ciò che arriva.",
      "crossSpread.cards.lerendezvous.synthese.variation2": "È il momento giusto per agire. Un incontro importante ti aspetta se ti apri.",
      "crossSpread.cards.lerendezvous.synthese.variation3": "Questo periodo è perfetto per creare nuove connessioni. Fidati del tempismo della vita.",
    // le message
    "crossSpread.cards.lemessage.pour.variation1": "Riceverai una notizia o una risposta che ti avvicinerà alla persona che desideri.",
    "crossSpread.cards.lemessage.pour.variation2": "La comunicazione si apre. Uno scambio sincero può migliorare la situazione.",
    "crossSpread.cards.lemessage.pour.variation3": "Arriva un messaggio positivo che chiarirà ciò che provavi.",
    "crossSpread.cards.lemessage.contre.variation1": "Potresti interpretare male un silenzio o una parola. Mantieni la calma prima di reagire.",
    "crossSpread.cards.lemessage.contre.variation2": "Una comunicazione bloccata può creare tensioni. Non aspettare senza agire.",
    "crossSpread.cards.lemessage.contre.variation3": "Un messaggio tardivo o confuso può destabilizzarti. Rimani con i piedi per terra.",
    "crossSpread.cards.lemessage.synthese.variation1": "Una conversazione importante chiarirà la situazione. Capirai finalmente dove stai andando.",
    "crossSpread.cards.lemessage.synthese.variation2": "Il dialogo è la chiave. Otterrai le risposte di cui hai bisogno per andare avanti.",
    "crossSpread.cards.lemessage.synthese.variation3": "Uno scambio porrà fine ai dubbi e aprirà una nuova dinamica tra voi.",
    // le désir
    "crossSpread.cards.ledesir.pour.variation1": "Il desiderio è reciproco. Attiri molto questa persona.",
    "crossSpread.cards.ledesir.pour.variation2": "Una forte passione si risveglia tra voi. L’alchimia è evidente.",
    "crossSpread.cards.ledesir.pour.variation3": "Il tuo fascino agisce. Qualcuno pensa intensamente a te.",
    "crossSpread.cards.ledesir.contre.variation1": "Stai attento a non confondere il desiderio con un vero sentimento.",
    "crossSpread.cards.ledesir.contre.variation2": "Un'attrazione troppo forte può offuscare il tuo giudizio.",
    "crossSpread.cards.ledesir.contre.variation3": "Il desiderio potrebbe portarti in una situazione complicata. Mantieni la mente lucida.",
    "crossSpread.cards.ledesir.synthese.variation1": "Il desiderio gioca un ruolo chiave nella tua situazione. Tutto avanza grazie a questa attrazione.",
    "crossSpread.cards.ledesir.synthese.variation2": "L’alchimia è intensa, ma devi mantenere l’equilibrio tra passione e ragione.",
    "crossSpread.cards.ledesir.synthese.variation3": "Questa energia intensa può aprire una nuova strada, purché tu rimanga ricettivo e attento ai segnali.",
    //le cœur ouvert
    "crossSpread.cards.lecoeurouvert.pour.variation1": "Sei pronto ad amare sinceramente. Questa apertura attrae energie positive.",
    "crossSpread.cards.lecoeurouvert.pour.variation2": "La tua vulnerabilità crea un legame autentico con l'altra persona.",
    "crossSpread.cards.lecoeurouvert.pour.variation3": "Aprendoti, permetti a una bella energia di entrare nella tua vita.",
    "crossSpread.cards.lecoeurouvert.contre.variation1": "Potresti mostrarti troppo disponibile. Proteggi un po’ la tua energia.",
    "crossSpread.cards.lecoeurouvert.contre.variation2": "La tua sensibilità potrebbe renderti fragile di fronte al comportamento dell’altro.",
    "crossSpread.cards.lecoeurouvert.contre.variation3": "Corri il rischio di idealizzare una persona o una situazione.",
    "crossSpread.cards.lecoeurouvert.synthese.variation1": "Il tuo cuore aperto è la tua forza. Attira la persona giusta.",
    "crossSpread.cards.lecoeurouvert.synthese.variation2": "Esprimi ciò che senti. La sincerità sblocca la situazione.",
    "crossSpread.cards.lecoeurouvert.synthese.variation3": "Restando autentico, riceverai una risposta sincera in cambio.",
    //le cœur fermé
    "crossSpread.cards.lecoeurferme.pour.variation1": "Prendere le distanze ti protegge per ora. Ascolti la tua intuizione.",
    "crossSpread.cards.lecoeurferme.pour.variation2": "Mettere dei limiti ti permette di non perderti nella relazione.",
    "crossSpread.cards.lecoeurferme.pour.variation3": "Il tuo cuore si chiude per proteggerti da una situazione instabile.",
    "crossSpread.cards.lecoeurferme.contre.variation1": "Ti blocchi troppo. Questo impedisce all’altro di capirti.",
    "crossSpread.cards.lecoeurferme.contre.variation2": "La paura di essere ferito ti impedisce di amare pienamente.",
    "crossSpread.cards.lecoeurferme.contre.variation3": "La tua mancanza di apertura crea una distanza inutile.",
    "crossSpread.cards.lecoeurferme.synthese.variation1": "Devi riaprire il tuo cuore lentamente se vuoi andare avanti.",
    "crossSpread.cards.lecoeurferme.synthese.variation2": "È necessario un equilibrio: proteggiti, ma non chiuderti del tutto.",
    "crossSpread.cards.lecoeurferme.synthese.variation3": "Lo sblocco parte da te: permettiti di sentire di nuovo.",
    //le choix
    "crossSpread.cards.lechoix.pour.variation1": "Finalmente sei pronto a prendere una decisione chiara.",
    "crossSpread.cards.lechoix.pour.variation2": "Due strade si aprono davanti a te, ma una brilla di più se ascolti il tuo cuore.",
    "crossSpread.cards.lechoix.pour.variation3": "Riprendi il controllo della tua vita affettiva facendo una scelta che ti rappresenta.",
    "crossSpread.cards.lechoix.contre.variation1": "Il dubbio ti blocca e esaurisce la mente, impedendoti di vedere la direzione migliore.",
    "crossSpread.cards.lechoix.contre.variation2": "Potresti lasciarti influenzare dalle paure invece che dai tuoi veri desideri.",
    "crossSpread.cards.lechoix.contre.variation3": "Esitare troppo a lungo potrebbe farti perdere un’opportunità.",
    "crossSpread.cards.lechoix.synthese.variation1": "La scelta giusta è quella che ti fa sentire più leggero.",
    "crossSpread.cards.lechoix.synthese.variation2": "Le cose iniziano a muoversi davvero non appena scegli chiaramente la tua strada senza esitazioni.",
    "crossSpread.cards.lechoix.synthese.variation3": "Il tuo cuore conosce già la risposta; prenditi il tempo per ascoltarlo davvero e lascia che guidi le tue azioni.",
    //le retour
    "crossSpread.cards.leretour.pour.variation1": "Qualcuno del tuo passato torna con intenzioni chiare, pronto a chiarire ciò che non era risolto.",
    "crossSpread.cards.leretour.pour.variation2": "Un ricordo o una persona riappare per aiutarti a comprendere qualcosa.",
    "crossSpread.cards.leretour.pour.variation3": "Una persona del passato ritorna e potrebbe offrirti una nuova opportunità.",
    "crossSpread.cards.leretour.contre.variation1": "Guardare indietro potrebbe impedirti di andare avanti.",
    "crossSpread.cards.leretour.contre.variation2": "Una persona del passato può riaprire ferite non guarite.",
    "crossSpread.cards.leretour.contre.variation3": "Rischi di idealizzare questo ritorno e perdere la tua stabilità attuale.",
    "crossSpread.cards.leretour.synthese.variation1": "Il passato ritorna per una ragione: capire, guarire o chiudere un ciclo.",
    "crossSpread.cards.leretour.synthese.variation2": "Questo ritorno ti offre l’opportunità di chiarire i tuoi desideri e scegliere ciò che è davvero importante per te.",
    "crossSpread.cards.leretour.synthese.variation3": "Si riapre una pagina del passato per permetterti di comprendere, accettare e decidere se girare pagina o riscrivere la tua storia.",
    //la distance
    "crossSpread.cards.ladistance.pour.variation1": "La distanza ti aiuta a vedere più chiaramente le tue emozioni.",
    "crossSpread.cards.ladistance.pour.variation2": "Un momento di allontanamento permette a ciascuno di respirare e riflettere.",
    "crossSpread.cards.ladistance.pour.variation3": "Prendere le distanze ti protegge e ti aiuta a rimanere centrato.",
    "crossSpread.cards.ladistance.contre.variation1": "Si crea un gelo che può indebolire la relazione.",
    "crossSpread.cards.ladistance.contre.variation2": "L’allontanamento genera dubbi e alimenta paure.",
    "crossSpread.cards.ladistance.contre.variation3": "La mancanza di comunicazione può aggravare la distanza.",
    "crossSpread.cards.ladistance.synthese.variation1": "Questa distanza non è definitiva: serve a riequilibrare la situazione.",
    "crossSpread.cards.ladistance.synthese.variation2": "Una riconnessione è possibile non appena entrambi avranno ritrovato la calma.",
    "crossSpread.cards.ladistance.synthese.variation3": "Devi comprendere ciò che questa distanza vuole insegnarti.",
    //l'union
    "crossSpread.cards.lunion.pour.variation1": "Una relazione solida può costruirsi. Sei pronto ad impegnarti.",
    "crossSpread.cards.lunion.pour.variation2": "L’unione con questa persona porta stabilità e armonia.",
    "crossSpread.cards.lunion.pour.variation3": "Avanzate mano nella mano verso qualcosa di serio.",
    "crossSpread.cards.lunion.contre.variation1": "Potresti impegnarti troppo in fretta senza vedere alcuni segnali.",
    "crossSpread.cards.lunion.contre.variation2": "L’altra persona potrebbe non essere ancora pronta alla stessa profondità.",
    "crossSpread.cards.lunion.contre.variation3": "Una situazione esterna può complicare l’unione per il momento.",
    "crossSpread.cards.lunion.synthese.variation1": "Questa relazione può evolvere verso qualcosa di stabile se avanzate insieme.",
    "crossSpread.cards.lunion.synthese.variation2": "L’unione è possibile, ma richiede pazienza e comprensione.",
    "crossSpread.cards.lunion.synthese.variation3": "Il tuo futuro amoroso si costruisce sulla cooperazione e sull’ascolto.",
    //le masque
    "crossSpread.cards.lemasque.pour.variation1": "Proteggi le tue emozioni mantenendo un po' di mistero.",
    "crossSpread.cards.lemasque.pour.variation2": "Rimanere discreto ti permette di osservare meglio la situazione.",
    "crossSpread.cards.lemasque.pour.variation3": "La maschera ti aiuta a non mostrarti troppo rapidamente.",
    "crossSpread.cards.lemasque.contre.variation1": "Qualcuno non mostra le sue vere intenzioni.",
    "crossSpread.cards.lemasque.contre.variation2": "La mancanza di trasparenza può creare malintesi.",
    "crossSpread.cards.lemasque.contre.variation3": "Nascondersi impedisce alla relazione di evolversi sinceramente.",
    "crossSpread.cards.lemasque.synthese.variation1": "Per andare avanti, le maschere devono cadere da entrambe le parti.",
    "crossSpread.cards.lemasque.synthese.variation2": "La verità emergerà e chiarirà la situazione.",
    "crossSpread.cards.lemasque.synthese.variation3": "Un'apertura sincera può cambiare completamente la dinamica.",
    //la passion
    "crossSpread.cards.lapassion.pour.variation1": "Un'energia intensa ti anima e avvicina i cuori.",
    "crossSpread.cards.lapassion.pour.variation2": "La passione rende la relazione vibrante e viva.",
    "crossSpread.cards.lapassion.pour.variation3": "Un forte impulso emotivo ti spinge verso l'altro.",
    "crossSpread.cards.lapassion.contre.variation1": "La passione può diventare instabile se non controllata.",
    "crossSpread.cards.lapassion.contre.variation2": "Un impulso troppo rapido può causare errori.",
    "crossSpread.cards.lapassion.contre.variation3": "Il fuoco brucia forte ma può spegnersi altrettanto velocemente.",
    "crossSpread.cards.lapassion.synthese.variation1": "La passione è una forza, ma deve essere bilanciata con la ragione.",
    "crossSpread.cards.lapassion.synthese.variation2": "Questa intensità porta una trasformazione significativa nella tua vita amorosa.",
    "crossSpread.cards.lapassion.synthese.variation3": "Mantieni la passione, ma procedi con consapevolezza.",
    //la chance
    "crossSpread.cards.lachance.pour.variation1": "Si presenta una bella opportunità sentimentale. Coglila.",
    "crossSpread.cards.lachance.pour.variation2": "Il destino è dalla tua parte. Sta arrivando qualcosa di positivo.",
    "crossSpread.cards.lachance.pour.variation3": "Attiri l’energia giusta. La fortuna è dalla tua parte.",
    "crossSpread.cards.lachance.contre.variation1": "La fortuna passa in fretta: non restare passivo.",
    "crossSpread.cards.lachance.contre.variation2": "Potresti dubitare e lasciar sfuggire un’opportunità.",
    "crossSpread.cards.lachance.contre.variation3": "Aspettare troppo potrebbe farti perdere l’occasione.",
    "crossSpread.cards.lachance.synthese.variation1": "Approfitta del flusso positivo. Ti apre una nuova strada.",
    "crossSpread.cards.lachance.synthese.variation2": "Una sincronicità importante ti aiuterà ad andare avanti.",
    "crossSpread.cards.lachance.synthese.variation3": "È un momento chiave: l’universo ti sostiene nel tuo percorso amoroso.",
    //le destin
    "crossSpread.cards.ledestin.pour.variation1": "Gli eventi si allineano naturalmente per te. Fidati del corso delle cose.",
    "crossSpread.cards.ledestin.pour.variation2": "Ciò che accade era scritto. Sei guidato verso la persona giusta.",
    "crossSpread.cards.ledestin.pour.variation3": "Un incontro o una situazione è il frutto di una sincronizzazione importante.",
    "crossSpread.cards.ledestin.contre.variation1": "Non lasciare che il destino decida al tuo posto. Devi anche agire.",
    "crossSpread.cards.ledestin.contre.variation2": "Aspettare troppo a lungo potrebbe bloccare la tua evoluzione.",
    "crossSpread.cards.ledestin.contre.variation3": "Rischi di affidarti al caso invece che al tuo cuore.",
    "crossSpread.cards.ledestin.synthese.variation1": "Ciò che vivi ha un significato profondo. Lascia che le cose accadano naturalmente.",
    "crossSpread.cards.ledestin.synthese.variation2": "Un passo importante ti avvicina al tuo percorso amoroso.",
    "crossSpread.cards.ledestin.synthese.variation3": "Il destino apre una nuova via, ma tocca a te percorrerla.",
    //le silence
    "crossSpread.cards.lesilence.pour.variation1": "Il silenzio ti aiuta a ritrovare il centro e ascoltare le tue vere emozioni.",
    "crossSpread.cards.lesilence.pour.variation2": "Questa pausa ti permette di capire ciò che desideri veramente.",
    "crossSpread.cards.lesilence.pour.variation3": "Prenderti del tempo per te ti riporta all’essenziale.",
    "crossSpread.cards.lesilence.contre.variation1": "La mancanza di notizie può creare confusione e stress.",
    "crossSpread.cards.lesilence.contre.variation2": "Il ritiro dell’altra persona può farti immaginare il peggio.",
    "crossSpread.cards.lesilence.contre.variation3": "Il silenzio blocca la comunicazione e ritarda i progressi.",
    "crossSpread.cards.lesilence.synthese.variation1": "Riprendere la comunicazione è possibile dopo questo silenzio.",
    "crossSpread.cards.lesilence.synthese.variation2": "Il silenzio apre la porta a una riflessione più profonda.",
    "crossSpread.cards.lesilence.synthese.variation3": "Questo tempo calmo prepara una chiarificazione importante.",
    //la vérité
    "crossSpread.cards.laverite.pour.variation1": "Una verità illumina finalmente ciò che provavi.",
    "crossSpread.cards.laverite.pour.variation2": "La trasparenza diventa una risorsa. Tutto si chiarisce.",
    "crossSpread.cards.laverite.pour.variation3": "Una conversazione onesta apre una nuova dinamica.",
    "crossSpread.cards.laverite.contre.variation1": "Una verità può sorprenderti o sconvolgerti.",
    "crossSpread.cards.laverite.contre.variation2": "L’altro potrebbe esitare a dire ciò che prova davvero.",
    "crossSpread.cards.laverite.contre.variation3": "La paura della verità blocca una situazione importante.",
    "crossSpread.cards.laverite.synthese.variation1": "La verità è liberatoria: rimette tutto al suo posto.",
    "crossSpread.cards.laverite.synthese.variation2": "Una rivelazione ti aiuta a fare una scelta chiara.",
    "crossSpread.cards.laverite.synthese.variation3": "La sincerità trasforma la relazione e apre un nuovo capitolo.",
    //le cadeau
    "crossSpread.cards.lecadeau.pour.variation1": "Un bel gesto mostra l’interesse dell’altra persona.",
    "crossSpread.cards.lecadeau.pour.variation2": "Riceverai una sorpresa che scalda il cuore.",
    "crossSpread.cards.lecadeau.pour.variation3": "Un gesto sincero apre la porta alla vicinanza.",
    "crossSpread.cards.lecadeau.contre.variation1": "Non lasciarti influenzare solo da un gesto materiale.",
    "crossSpread.cards.lecadeau.contre.variation2": "Un gesto può nascondere il bisogno di essere perdonato.",
    "crossSpread.cards.lecadeau.contre.variation3": "Potresti dare più di quanto ricevi in cambio.",
    "crossSpread.cards.lecadeau.synthese.variation1": "Un gesto simbolico cambia la dinamica tra voi.",
    "crossSpread.cards.lecadeau.synthese.variation2": "L’universo ti offre un’opportunità di dolcezza e apertura.",
    "crossSpread.cards.lecadeau.synthese.variation3": "Uno scambio sincero rafforza il legame e crea nuovo slancio.",
    //la blessure
    "crossSpread.cards.lablessure.pour.variation1": "Prendi coscienza della tua ferita e inizi a guarire.",
    "crossSpread.cards.lablessure.pour.variation2": "Riconoscere il tuo dolore ti aiuta ad andare avanti più solidamente.",
    "crossSpread.cards.lablessure.pour.variation3": "Questa consapevolezza ti apre a un vero rinnovamento emotivo.",
    "crossSpread.cards.lablessure.contre.variation1": "Una ferita non guarita influenza ancora le tue scelte.",
    "crossSpread.cards.lablessure.contre.variation2": "La paura di essere ferito ti impedisce di andare avanti.",
    "crossSpread.cards.lablessure.contre.variation3": "Rimani attaccato a un dolore passato che ti esaurisce.",
    "crossSpread.cards.lablessure.synthese.variation1": "La guarigione è in corso. Ti senti finalmente più leggero.",
    "crossSpread.cards.lablessure.synthese.variation2": "Comprendere la tua ferita ti aiuta a non ripetere gli stessi schemi.",
    "crossSpread.cards.lablessure.synthese.variation3": "Questa prova apre la strada a un cambiamento profondo e positivo.",
    //le nouveau départ
    "crossSpread.cards.lenouveaudepart.pour.variation1": "Entri in un ciclo nuovo e più leggero.",
    "crossSpread.cards.lenouveaudepart.pour.variation2": "Un cambiamento positivo apre un percorso più in linea con il tuo cuore.",
    "crossSpread.cards.lenouveaudepart.pour.variation3": "Lasci il passato alle spalle e procedi verso il nuovo.",
    "crossSpread.cards.lenouveaudepart.contre.variation1": "Puoi avere paura di lasciare ciò che conosci.",
    "crossSpread.cards.lenouveaudepart.contre.variation2": "Il cambiamento sembra difficile da accettare.",
    "crossSpread.cards.lenouveaudepart.contre.variation3": "Rischi di restare aggrappato al ciclo precedente.",
    "crossSpread.cards.lenouveaudepart.synthese.variation1": "Si apre una trasformazione importante per te.",
    "crossSpread.cards.lenouveaudepart.synthese.variation2": "Lasciando andare il passato crei spazio per una nuova storia.",
    "crossSpread.cards.lenouveaudepart.synthese.variation3": "Questo nuovo inizio ti porta esattamente dove devi essere.",
    //la fusion
    "crossSpread.cards.lafusion.pour.variation1": "Si crea una connessione profonda tra voi. Le emozioni sono condivise.",
    "crossSpread.cards.lafusion.pour.variation2": "Ti senti allineato con l’altra persona, come se tutto scorresse naturalmente.",
    "crossSpread.cards.lafusion.pour.variation3": "Si rafforza un’unione emotiva o energetica tra voi.",
    "crossSpread.cards.lafusion.contre.variation1": "La fusione può essere troppo intensa e farti perdere l’equilibrio.",
    "crossSpread.cards.lafusion.contre.variation2": "Attenzione a non dissolverti nell’altra persona.",
    "crossSpread.cards.lafusion.contre.variation3": "Può crearsi dipendenza emotiva se non rimani radicato.",
    "crossSpread.cards.lafusion.synthese.variation1": "La connessione è reale e potente, ma richiede maturità ed equilibrio.",
    "crossSpread.cards.lafusion.synthese.variation2": "Siete legati a un livello profondo, aprendo una importante evoluzione.",
    "crossSpread.cards.lafusion.synthese.variation3": "Questa fusione può diventare una forza se ciascuno mantiene la propria identità.",
    //la tentazione
    "crossSpread.cards.latentation.pour.variation1": "Una nuova attrazione rinnova il tuo desiderio e la tua energia.",
    "crossSpread.cards.latentation.pour.variation2": "Qualcuno suscita la tua curiosità e desiderio.",
    "crossSpread.cards.latentation.pour.variation3": "Una situazione eccitante rompe la routine.",
    "crossSpread.cards.latentation.contre.variation1": "Una tentazione potrebbe distrarti da ciò che è veramente buono per te.",
    "crossSpread.cards.latentation.contre.variation2": "Rischi di lasciarti coinvolgere in qualcosa di instabile.",
    "crossSpread.cards.latentation.contre.variation3": "Un’influenza esterna disturba il tuo giudizio.",
    "crossSpread.cards.latentation.synthese.variation1": "Questa tentazione ti insegna qualcosa sui tuoi veri desideri.",
    "crossSpread.cards.latentation.synthese.variation2": "Prima di agire, assicurati che sia in linea con il tuo cuore.",
    "crossSpread.cards.latentation.synthese.variation3": "La tentazione può essere una prova per chiarire ciò che vuoi davvero.",
    //la protection
    "crossSpread.cards.laprotection.pour.variation1": "La tua intuizione ti protegge e ti guida verso le decisioni giuste.",
    "crossSpread.cards.laprotection.pour.variation2": "Sei circondato da un’energia benevola.",
    "crossSpread.cards.laprotection.pour.variation3": "La prudenza ti aiuta a evitare delusioni.",
    "crossSpread.cards.laprotection.contre.variation1": "Essere troppo diffidente può bloccare una bella opportunità.",
    "crossSpread.cards.laprotection.contre.variation2": "La tua paura ti fa vedere pericoli che non esistono.",
    "crossSpread.cards.laprotection.contre.variation3": "Una protezione eccessiva può diventare una barriera per l’amore.",
    "crossSpread.cards.laprotection.synthese.variation1": "La tua intuizione è giusta: ascoltala davvero.",
    "crossSpread.cards.laprotection.synthese.variation2": "La protezione divina ti aiuta ad avanzare in sicurezza.",
    "crossSpread.cards.laprotection.synthese.variation3": "Un equilibrio tra prudenza e apertura ti guida nella giusta direzione.",
    //la liberazione
    "crossSpread.cards.laliberation.pour.variation1": "Ti liberi finalmente da qualcosa che ti pesava.",
    "crossSpread.cards.laliberation.pour.variation2": "Un ciclo termina e respiri di nuovo.",
    "crossSpread.cards.laliberation.pour.variation3": "Lasci andare e ritrovi il tuo potere interiore.",
    "crossSpread.cards.laliberation.contre.variation1": "Potresti resistere al cambiamento per paura dell’ignoto.",
    "crossSpread.cards.laliberation.contre.variation2": "Ti aggrappi ancora a qualcosa che deve andare.",
    "crossSpread.cards.laliberation.contre.variation3": "Il non lasciar andare ti impedisce di avanzare verso il meglio.",
    "crossSpread.cards.laliberation.synthese.variation1": "Una grande liberazione emotiva apre un nuovo percorso.",
    "crossSpread.cards.laliberation.synthese.variation2": "Lasciando andare il vecchio, inviti il rinnovamento.",
    "crossSpread.cards.laliberation.synthese.variation3": "Questo distacco ti avvicina al tuo vero cammino amoroso.",

    //Lunar Oracles
    "oracle.lunar.title": "Oracolo Lunare",
    "oracle.lunar.description": "Le fasi della Luna rivelano il tuo cammino interiore",
    "lunar.phaseSelection.title": "Oracolo Lunare",
    "lunar.phaseSelection.subtitle": "Scegli la fase lunare che risuona con il tuo stato d’animo attuale",
    "lunar.phases.newMoon.name": "Luna Nuova",
    "lunar.phases.newMoon.description": "Nuovi inizi e intenzioni",
    "lunar.phases.firstQuarter.name": "Primo Quarto",
    "lunar.phases.firstQuarter.description": "Azione e decisioni",
    "lunar.phases.fullMoon.name": "Luna Piena",
    "lunar.phases.fullMoon.description": "Culmine e rivelazione",
    "lunar.phases.lastQuarter.name": "Ultimo Quarto",
    "lunar.phases.lastQuarter.description": "Liberazione e introspezione",
    "lunar.cardGame.instruction": "Scegli la carta che ti attira",
    "lunar.interpretation.mindset": "Stato d’animo",
    "lunar.interpretation.guidance": "Guida",
    "loading.lunar.message1": "Connessione con le energie lunari...",
    "loading.lunar.message2": "Interpretazione dei cicli cosmici...",
    "loading.lunar.message3": "Rivelazione della tua guida...",
    "loading.lunar.message4": "Preparazione della tua lettura...",
    "loading.lunar.subtitle": "Gli astri allineano il tuo destino...",
    "lunar.cardGame.hint": "Ascolta la tua intuizione...",
    "lunar.cardGame.singleCard": "Una sola carta rivelerà il messaggio della luna",
    "lunar.cardGame.oneChoice": "1 carta da scegliere",
    "lunar.cardGame.oneCard": "1 carta",
    "lunar.loading.connecting": "Connessione con le energie lunari...",
    "lunar.phaseSelection.cta": "Quale energia risuona oggi",
    "lunar.phases.newMoon.keyword": "Inizio",
    "lunar.phases.firstQuarter.keyword": "Slancio",
    "lunar.phases.fullMoon.keyword": "Chiarezza",
    "lunar.phases.lastQuarter.keyword": "Lasciare",
    "lunar.cardGame.oracle.newMoon.1": "Intenzioni nascenti...",
    "lunar.cardGame.oracle.newMoon.2": "Il velo si solleva...",
    "lunar.cardGame.oracle.newMoon.3": "L'oscurità rivela...",
    "lunar.cardGame.oracle.firstQuarter.1": "Lo slancio si forma...",
    "lunar.cardGame.oracle.firstQuarter.2": "L'azione chiama...",
    "lunar.cardGame.oracle.firstQuarter.3": "Scegli il tuo cammino...",
    "lunar.cardGame.oracle.fullMoon.1": "La luce illumina...",
    "lunar.cardGame.oracle.fullMoon.2": "La verità si rivela...",
    "lunar.cardGame.oracle.fullMoon.3": "Il mistero si apre...",
    "lunar.cardGame.oracle.lastQuarter.1": "Lasciare andare guida...",
    "lunar.cardGame.oracle.lastQuarter.2": "La saggezza parla...",
    "lunar.cardGame.oracle.lastQuarter.3": "L'anima si libera...",

    // Carte dell'Oracolo Lunare
    // Luna Nuova
    "cards.lunar.intention.name": "Intenzione",
    "cards.lunar.intention.mindset.var1": "{name}, senti un bisogno profondo di iniziare qualcosa di nuovo nella tua vita",
    "cards.lunar.intention.mindset.var2": "In questo momento, {name}, il tuo cuore è aperto e pronto ad accogliere nuove idee o desideri",
    "cards.lunar.intention.mindset.var3": "Stai entrando in un periodo in cui puoi ricominciare da zero e scegliere una nuova direzione",
    "cards.lunar.intention.guidance.var1": "Prenditi il tempo per riflettere su ciò che desideri veramente per te stesso.",
    "cards.lunar.intention.guidance.var2": "Formula un’intenzione chiara, semplice e sincera.",
    "cards.lunar.intention.guidance.var3": "Immagina dolcemente la tua vita evolversi nella direzione che desideri.",

    "cards.lunar.intuition.name": "Intuizione",
    "cards.lunar.intuition.mindset.var1": "{name}, percepisci cose che non sempre riesci a spiegare",
    "cards.lunar.intuition.mindset.var2": "Una piccola voce interiore cerca in questo momento di guidarti",
    "cards.lunar.intuition.mindset.var3": "Dentro di te sai già cosa è giusto per te",
    "cards.lunar.intuition.guidance.var1": "Concediti un momento di calma per ascoltarti.",
    "cards.lunar.intuition.guidance.var2": "Fidati delle tue sensazioni, anche se sono sottili.",
    "cards.lunar.intuition.guidance.var3": "La tua intuizione è qui per proteggerti e aiutarti.",

    "cards.lunar.renouveau.name": "Rinnovamento",
    "cards.lunar.renouveau.mindset.var1": "Un nuovo ciclo inizia per te, {name}, portando nuova energia",
    "cards.lunar.renouveau.mindset.var2": "Alcune cose del passato stanno lentamente perdendo importanza",
    "cards.lunar.renouveau.mindset.var3": "Sei pronto(a) ad andare avanti in modo diverso e a cambiare ciò che non ti serve più",
    "cards.lunar.renouveau.guidance.var1": "Lascia andare ciò che non ti porta più nulla di positivo.",
    "cards.lunar.renouveau.guidance.var2": "Permettiti di cambiare senza sensi di colpa.",
    "cards.lunar.renouveau.guidance.var3": "Ogni nuovo inizio parte da un piccolo passo.",

    "cards.lunar.eveil.name": "Risveglio",
    "cards.lunar.eveil.mindset.var1": "{name}, inizi a vedere le cose con maggiore consapevolezza",
    "cards.lunar.eveil.mindset.var2": "Un nuovo sentimento o una nuova idea nasce lentamente dentro di te",
    "cards.lunar.eveil.mindset.var3": "Ti rendi conto di ciò che è importante per te",
    "cards.lunar.eveil.guidance.var1": "Accogli queste consapevolezze con calma.",
    "cards.lunar.eveil.guidance.var2": "Non cercare di capire tutto subito.",
    "cards.lunar.eveil.guidance.var3": "Il risveglio avviene passo dopo passo, naturalmente.",

    "cards.lunar.potentiel.name": "Potenziale",
    "cards.lunar.potentiel.mindset.var1": "{name}, molte possibilità sono aperte per te, anche se non le vedi ancora",
    "cards.lunar.potentiel.mindset.var2": "Il tuo futuro inizia a costruirsi a partire da ciò che fai ora",
    "cards.lunar.potentiel.mindset.var3": "Hai risorse dentro di te ancora inesplorate",
    "cards.lunar.potentiel.guidance.var1": "Fidati delle tue capacità, anche se hai dubbi.",
    "cards.lunar.potentiel.guidance.var2": "Lascia che le cose si sviluppino con il tempo.",
    "cards.lunar.potentiel.guidance.var3": "Ogni piccolo gesto nutre il tuo futuro.",

    "cards.lunar.silence.name": "Silenzio",
    "cards.lunar.silence.mindset.var1": "{name}, la tua mente ha bisogno di calma e riposo",
    "cards.lunar.silence.mindset.var2": "Il silenzio ti aiuta a comprendere meglio ciò che senti",
    "cards.lunar.silence.mindset.var3": "Non hai bisogno di risposte immediate per andare avanti",
    "cards.lunar.silence.guidance.var1": "Concediti momenti senza rumore né distrazioni.",
    "cards.lunar.silence.guidance.var2": "La calma permette alle idee di posarsi.",
    "cards.lunar.silence.guidance.var3": "Le risposte spesso arrivano quando smetti di cercarle.",
    // Primo Quarto
    "cards.lunar.motivation.name": "Motivazione",
    "cards.lunar.motivation.mindset.var1": "{name}, senti una nuova energia che ti spinge ad andare avanti e ad agire ogni giorno",
    "cards.lunar.motivation.mindset.var2": "Il tuo impulso interiore si risveglia e ti guida verso ciò che ti sta a cuore",
    "cards.lunar.motivation.mindset.var3": "Senti la forza di far avanzare le cose, anche poco a poco",
    "cards.lunar.motivation.guidance.var1": "Canalizza questa energia verso un obiettivo chiaro e semplice.",
    "cards.lunar.motivation.guidance.var2": "Avanza passo dopo passo, senza giudicarti o affrettarti.",
    "cards.lunar.motivation.guidance.var3": "Ogni piccolo passo conta e ti avvicina al tuo scopo.",

    "cards.lunar.courage.name": "Coraggio",
    "cards.lunar.courage.mindset.var1": "{name}, hai la forza di affrontare ciò che si presenta, anche se è difficile",
    "cards.lunar.courage.mindset.var2": "Il tuo coraggio cresce ad ogni piccola sfida che superi",
    "cards.lunar.courage.mindset.var3": "Sei più forte e capace di quanto pensi",
    "cards.lunar.courage.guidance.var1": "Agisci nonostante i dubbi e le paure.",
    "cards.lunar.courage.guidance.var2": "Vedi la paura come un segnale per andare avanti, non come un ostacolo.",
    "cards.lunar.courage.guidance.var3": "Confida nella tua forza interiore, ti accompagna sempre.",

    "cards.lunar.epanouissement.name": "Realizzazione",
    "cards.lunar.epanouissement.mindset.var1": "Avanzi verso maggiore armonia nella tua vita e nelle tue scelte, {name}",
    "cards.lunar.epanouissement.mindset.var2": "Ti avvicini a ciò che ti fa davvero vibrare e ti rende felice",
    "cards.lunar.epanouissement.mindset.var3": "Il tuo potenziale si esprime naturalmente quando ascolti il tuo cuore",
    "cards.lunar.epanouissement.guidance.var1": "Prenditi cura di nutrire ciò che ti fa bene ogni giorno.",
    "cards.lunar.epanouissement.guidance.var2": "Permettiti di crescere al tuo ritmo, senza confrontarti con gli altri.",
    "cards.lunar.epanouissement.guidance.var3": "La realizzazione arriva quando sei in armonia con ciò che senti davvero.",

    "cards.lunar.determination.name": "Determinazione",
    "cards.lunar.determination.mindset.var1": "Sai ciò che vuoi e vai verso i tuoi obiettivi, {name}",
    "cards.lunar.determination.mindset.var2": "La tua volontà rimane ferma di fronte agli ostacoli e alle difficoltà",
    "cards.lunar.determination.mindset.var3": "Sei pronto(a) a impegnarti pienamente per ciò che conta davvero",
    "cards.lunar.determination.guidance.var1": "Rimani fedele alla tua direzione e alle tue scelte.",
    "cards.lunar.determination.guidance.var2": "Non lasciare che dubbi o ostacoli ti allontanino dal tuo cammino.",
    "cards.lunar.determination.guidance.var3": "La tua costanza e perseveranza faranno la differenza nel lungo periodo.",

    "cards.lunar.initiative.name": "Iniziativa",
    "cards.lunar.initiative.mindset.var1": "Un impulso ti spinge ad agire, {name}, ascolta questo movimento",
    "cards.lunar.initiative.mindset.var2": "È il momento di fare il primo passo verso ciò che desideri",
    "cards.lunar.initiative.mindset.var3": "Senti la spinta dell’inizio e il coraggio di osare",
    "cards.lunar.initiative.guidance.var1": "Osa agire, anche se il percorso ti sembra sconosciuto.",
    "cards.lunar.initiative.guidance.var2": "Non rimandare ciò che il tuo cuore ti invita a fare ora.",
    "cards.lunar.initiative.guidance.var3": "Prendere l’iniziativa apre sempre nuove possibilità.",

    "cards.lunar.strategie.name": "Strategia",
    "cards.lunar.strategie.mindset.var1": "Rifletti con chiarezza e lucidità sui prossimi passi del tuo percorso, {name}",
    "cards.lunar.strategie.mindset.var2": "Ogni scelta merita di essere pensata e ponderata con cura",
    "cards.lunar.strategie.mindset.var3": "Avanzi con discernimento, bilanciando cuore e ragione",
    "cards.lunar.strategie.guidance.var1": "Pianifica le tue azioni in modo flessibile e aperto.",
    "cards.lunar.strategie.guidance.var2": "Unisci riflessione e intuizione per fare le migliori scelte.",
    "cards.lunar.strategie.guidance.var3": "Chiarezza e serenità derivano da una visione calma e riflessiva.",
    // Luna Piena
    "cards.lunar.clarte.name": "Chiarezza",
    "cards.lunar.clarte.mindset.var1": "Le cose diventano più chiare per te, {name}, e inizi a capire ciò che prima era confuso",
    "cards.lunar.clarte.mindset.var2": "Un velo si solleva lentamente sulla tua situazione e tutto appare più nitido",
    "cards.lunar.clarte.mindset.var3": "Finalmente vedi la verità e ciò che conta davvero in questo ciclo",
    "cards.lunar.clarte.guidance.var1": "Usa questa chiarezza per prendere decisioni giuste e semplici.",
    "cards.lunar.clarte.guidance.var2": "Fidati di ciò che osservi e senti in questo momento.",
    "cards.lunar.clarte.guidance.var3": "La verità ti dona calma e serenità interiore.",

    "cards.lunar.serenite.name": "Serenità",
    "cards.lunar.serenite.mindset.var1": "Una profonda pace interiore ti avvolge e ti aiuta a rimanere centrato(a), {name}",
    "cards.lunar.serenite.mindset.var2": "Ti senti in armonia con te stesso(a) e con il mondo intorno a te",
    "cards.lunar.serenite.mindset.var3": "Tutto appare più semplice e al suo posto giusto, anche le situazioni complesse",
    "cards.lunar.serenite.guidance.var1": "Assapora questo momento di calma e lasciati trasportare.",
    "cards.lunar.serenite.guidance.var2": "Respira profondamente e lascia andare tutte le tensioni.",
    "cards.lunar.serenite.guidance.var3": "La serenità è il tuo ancoraggio per andare avanti con chiarezza.",

    "cards.lunar.bilan.name": "Bilancio",
    "cards.lunar.bilan.mindset.var1": "{name}, è il momento di guardare indietro e riconoscere il cammino percorso",
    "cards.lunar.bilan.mindset.var2": "Prendi coscienza di tutte le tue evoluzioni e di ciò che hai imparato",
    "cards.lunar.bilan.mindset.var3": "Ogni esperienza di questo ciclo ti ha portato insegnamenti preziosi",
    "cards.lunar.bilan.guidance.var1": "Celebra i tuoi progressi, anche i più piccoli.",
    "cards.lunar.bilan.guidance.var2": "Impara da ciò che hai vissuto per andare avanti meglio.",
    "cards.lunar.bilan.guidance.var3": "Questo bilancio ti aiuta a proseguire con fiducia e saggezza.",

    "cards.lunar.accomplissement.name": "Realizzazione",
    "cards.lunar.accomplissement.mindset.var1": "Raccogli finalmente i frutti dei tuoi sforzi, {name}, e ne prendi consapevolezza",
    "cards.lunar.accomplissement.mindset.var2": "Si manifesta un compimento e comprendi tutto ciò che hai costruito",
    "cards.lunar.accomplissement.mindset.var3": "Sei orgoglioso(a) di te e di tutto ciò che hai realizzato",
    "cards.lunar.accomplissement.guidance.var1": "Riconosci ogni piccolo successo e goditelo appieno.",
    "cards.lunar.accomplissement.guidance.var2": "Accogli questo successo con semplicità e umiltà.",
    "cards.lunar.accomplissement.guidance.var3": "Prenditi il tempo per celebrare questo momento prima di proseguire.",

    "cards.lunar.verite.name": "Verità",
    "cards.lunar.verite.mindset.var1": "Una verità importante si rivela a te, {name}, e illumina la tua situazione",
    "cards.lunar.verite.mindset.var2": "Ora vedi le cose come sono, senza filtri né illusioni",
    "cards.lunar.verite.mindset.var3": "Ciò che era nascosto diventa chiaro ed evidente, per il tuo bene",
    "cards.lunar.verite.guidance.var1": "Accogli questa verità con apertura e coraggio.",
    "cards.lunar.verite.guidance.var2": "Rimani allineato(a) con ciò che sai essere giusto.",
    "cards.lunar.verite.guidance.var3": "Questa chiarezza ti aiuta ad andare avanti senza paura e con fiducia.",

    "cards.lunar.gratitude.name": "Gratitudine",
    "cards.lunar.gratitude.mindset.var1": "Un sentimento di gratitudine ti riempie, {name}, e il tuo cuore si apre",
    "cards.lunar.gratitude.mindset.var2": "Prendi consapevolezza di tutto ciò che è già presente nella tua vita",
    "cards.lunar.gratitude.mindset.var3": "Senti la bellezza e l’abbondanza intorno a te",
    "cards.lunar.gratitude.guidance.var1": "Ringrazia per ciò che hai e ciò che vivi ogni giorno.",
    "cards.lunar.gratitude.guidance.var2": "Onora ogni esperienza, anche le piccole e discrete.",
    "cards.lunar.gratitude.guidance.var3": "La gratitudine eleva la tua energia e attira più cose belle nella tua vita.",
    // Ultimo Quarto
    "cards.lunar.detachement.name": "Distacco",
    "cards.lunar.detachement.mindset.var1": "È il momento di lasciare andare ciò che ti appesantisce, {name}, e liberare la mente",
    "cards.lunar.detachement.mindset.var2": "Puoi lasciar andare senza paura e accogliere il cambiamento",
    "cards.lunar.detachement.mindset.var3": "Alcune cose non devono più essere trattenute, lasciale andare dolcemente",
    "cards.lunar.detachement.guidance.var1": "Liberati senza sensi di colpa e con gentilezza verso te stesso(a).",
    "cards.lunar.detachement.guidance.var2": "Il distacco crea uno spazio nuovo per respirare e creare.",
    "cards.lunar.detachement.guidance.var3": "Confida nel flusso della vita e procedi al tuo ritmo.",

    "cards.lunar.prisederecul.name": "Prendere distanza",
    "cards.lunar.prisederecul.mindset.var1": "{name}, prendi distanza e osserva la tua situazione con calma",
    "cards.lunar.prisederecul.mindset.var2": "Concediti il tempo per comprendere cosa sta realmente accadendo",
    "cards.lunar.prisederecul.mindset.var3": "La distanza ti aiuta a vedere le cose più chiaramente e con lucidità",
    "cards.lunar.prisederecul.guidance.var1": "Non prendere decisioni affrettate, respira prima.",
    "cards.lunar.prisederecul.guidance.var2": "La calma porta risposte più giuste e semplici.",
    "cards.lunar.prisederecul.guidance.var3": "Concediti questo tempo per riflettere prima di agire.",

    "cards.lunar.retourasoi.name": "Ritorno a sé",
    "cards.lunar.retourasoi.mindset.var1": "Senti il bisogno di centrarti, {name}, e di ascoltarti davvero",
    "cards.lunar.retourasoi.mindset.var2": "Il tuo mondo interiore ti chiede di prenderti cura di te",
    "cards.lunar.retourasoi.mindset.var3": "Ti riconnetti dolcemente alla tua essenza e ai tuoi bisogni",
    "cards.lunar.retourasoi.guidance.var1": "Prenditi cura di te con dolcezza e attenzione.",
    "cards.lunar.retourasoi.guidance.var2": "Ascolta ciò che il tuo cuore e il tuo corpo ti chiedono.",
    "cards.lunar.retourasoi.guidance.var3": "Questo ritorno a te ti rende più forte e sereno(a).",

    "cards.lunar.pardon.name": "Perdono",
    "cards.lunar.pardon.mindset.var1": "Sei pronto(a) ad alleggerire il tuo cuore, {name}, e a liberarti dal passato",
    "cards.lunar.pardon.mindset.var2": "Il passato può essere placato se scegli di perdonare",
    "cards.lunar.pardon.mindset.var3": "Il perdono ti offre libertà interiore e sollievo profondo",
    "cards.lunar.pardon.guidance.var1": "Liberati dal peso dei rancori senza giudicarti.",
    "cards.lunar.pardon.guidance.var2": "Il perdono inizia da te e per te.",
    "cards.lunar.pardon.guidance.var3": "Lascia andare ciò che ti trattiene per andare avanti più leggero.",

    "cards.lunar.sagesse.name": "Saggezza",
    "cards.lunar.sagesse.mindset.var1": "Integra ciò che hai vissuto, {name}, e comprendi meglio le lezioni apprese",
    "cards.lunar.sagesse.mindset.var2": "Ogni esperienza assume ora un significato più profondo",
    "cards.lunar.sagesse.mindset.var3": "La tua comprensione diventa più chiara e ti accompagna nelle scelte",
    "cards.lunar.sagesse.guidance.var1": "Onora il tuo percorso e tutto ciò che hai attraversato.",
    "cards.lunar.sagesse.guidance.var2": "Fidati della tua esperienza per guidare i prossimi passi.",
    "cards.lunar.sagesse.guidance.var3": "La saggezza nasce dall’integrazione e dall’ascolto di te stesso(a).",

    "cards.lunar.repos.name": "Riposo",
    "cards.lunar.repos.mindset.var1": "Il tuo corpo e la tua mente hanno bisogno di riposare, {name}, è normale",
    "cards.lunar.repos.mindset.var2": "Il ciclo sta per concludersi e puoi rallentare senza sensi di colpa",
    "cards.lunar.repos.mindset.var3": "Permettiti di recuperare per ricominciare al meglio",
    "cards.lunar.repos.guidance.var1": "Concediti del riposo e ascolta le tue esigenze.",
    "cards.lunar.repos.guidance.var2": "Calma e relax preparano un nuovo inizio.",
    "cards.lunar.repos.guidance.var3": "Il riposo fa parte del cammino e ti rende più forte.",
    
       // ========== SALUTI VARIATI ==========

    // Lettura giornaliera - varianti
    "interpretation.daily.greeting.var1":
      "Ciao {name}! Ho un messaggio speciale per te oggi.",
    "interpretation.daily.greeting.var2":
      "Ehi {name}! La tua guida quotidiana ti aspetta con impazienza.",
    "interpretation.daily.greeting.var3":
      "Hello {name}! Una bella energia ti accompagna oggi.",
    "interpretation.daily.greeting.var4":
      "Buongiorno {name}! Le energie cosmiche hanno preparato qualcosa per te.",

    // Tarocchi - varianti
    "interpretation.tarot.greeting.var1":
      "Ehi {name}! La tua lettura dei Tarocchi rivela aspetti affascinanti della tua vita.",
    "interpretation.tarot.greeting.var2":
      "Hello {name}! Le carte dei Tarocchi hanno messaggi potenti per te.",
    "interpretation.tarot.greeting.var3":
      "Buongiorno {name}! La tua lettura dei Tarocchi svela verità importanti.",
    "interpretation.tarot.greeting.var4":
      "Ciao {name}! Gli arcani dei Tarocchi parlano chiaramente del tuo futuro.",

    // Angeli - varianti
    "interpretation.angels.greeting.var1":
      "Ciao {name}! Il regno angelico trabocca di messaggi d'amore per te.",
    "interpretation.angels.greeting.var2":
      "Ehi {name}! Le tue guide celesti illuminano il tuo cammino oggi.",
    "interpretation.angels.greeting.var3":
      "Hello {name}! Gli angeli cantano melodie di guida specialmente per te.",
    "interpretation.angels.greeting.var4":
      "Buongiorno {name}! Una sinfonia angelica risuona nelle sfere celesti per te.",

    // Rune - varianti
    "interpretation.runes.greeting.var1":
      "Heil {name}! Le rune degli antichi parlano della tua eredità vichinga.",
    "interpretation.runes.greeting.var2":
      "Ciao {name}! L'eco degli dei nordici risuona attraverso queste rune sacre.",
    "interpretation.runes.greeting.var3":
      "Buongiorno {name}! Le rune millenarie rivelano la forza che dorme in te.",
    "interpretation.runes.greeting.var4":
      "Hello {name}! La saggezza dei Vichinghi attraversa i secoli per guidarti.",

    // ========== TRANSIZIONI VARIATE ==========

    // Transizioni per il passato
    "interpretation.transition.past.var1":
      "Queste esperienze ti hanno davvero fatto crescere e ti hanno reso più forte{genderSuffix}.",
    "interpretation.transition.past.var2":
      "Questi momenti hanno forgiato il tuo carattere e la tua resilienza.",
    "interpretation.transition.past.var3":
      "Tutto ciò ha contribuito a plasmare la persona che sei diventat{genderSuffix}.",
    "interpretation.transition.past.var4":
      "Queste prove ti hanno dato una saggezza preziosa.",
    "interpretation.transition.past.var5":
      "È grazie a queste esperienze che hai sviluppato la tua forza interiore.",
    "interpretation.transition.past.var6":
      "Questi eventi ti hanno insegnato lezioni importanti sulla vita.",
    "interpretation.transition.past.var7":
      "Tutto questo vissuto ha arricchito la tua anima e la tua esperienza.",
    "interpretation.transition.past.var8":
      "Queste sfide hanno rivelato la tua vera natura e determinazione.",

    // Transizioni per il presente
    "interpretation.transition.present.var1":
      "Sei in un periodo importante che annuncia belle cose per il futuro.",
    "interpretation.transition.present.var2":
      "Questa fase della tua vita apre prospettive promettenti.",
    "interpretation.transition.present.var3":
      "È un momento chiave che prepara il tuo futuro radioso.",
    "interpretation.transition.present.var4":
      "Questo periodo attuale pone le basi del tuo successo futuro.",
    "interpretation.transition.present.var5":
      "Vivi una transizione che trasformerà positivamente la tua vita.",
    "interpretation.transition.present.var6":
      "Questo momento presente è portatore di grandi promesse.",
    "interpretation.transition.present.var7":
      "Questa tappa segna una svolta positiva nella tua esistenza.",
    "interpretation.transition.present.var8":
      "Attraversi una fase che ti porterà molta soddisfazione.",

    // Transizioni per il futuro
    "interpretation.transition.future.var1":
      "Questa energia trasformerà la tua vita in modo positivo e duraturo.",
    "interpretation.transition.future.var2":
      "Queste influenze porteranno cambiamenti meravigliosi nella tua vita.",
    "interpretation.transition.future.var3":
      "Questa forza creerà opportunità straordinarie per te.",
    "interpretation.transition.future.var4":
      "Queste vibrazioni attireranno tutto ciò di cui hai bisogno.",
    "interpretation.transition.future.var5":
      "Questa energia manifesterà i tuoi sogni più cari.",
    "interpretation.transition.future.var6":
      "Queste influenze divine illumineranno il tuo cammino.",
    "interpretation.transition.future.var7":
      "Questo potere sbloccherà il tuo potenziale nascosto.",
    "interpretation.transition.future.var8":
      "Queste energie sincronizzeranno tutti gli aspetti della tua vita.",

    // ========== CONSIGLI VARIATI ==========

    // Template per il messaggio finale ANGELI (inizio frase)
    "interpretation.angels.template.message.var1":"Gli angeli vegliano su di te {name} e ti inviano una guida importante:",
    "interpretation.angels.template.message.var2":"Un messaggio dolce ti è rivolto {name}. Le guide desiderano che tu ascolti questo:",
    "interpretation.angels.template.message.var3":"Le presenze celesti ti accompagnano {name} e ti sussurrano questo messaggio:",
    "interpretation.angels.template.message.var4":"Un’energia luminosa ti circonda oggi {name}. Ecco la guida che ti porta:",
    "interpretation.angels.template.message.var5":"{name}, gli angeli ti avvolgono con benevolenza e ti trasmettono questo:",
    "interpretation.angels.template.message.var6":"Una presenza angelica si avvicina a te {name}. Apri il tuo cuore a questo messaggio:",
    "interpretation.angels.template.message.var7":"La tua anima è ascoltata {name}. Gli angeli ti condividono questo consiglio per andare avanti:",
    "interpretation.angels.template.message.var8":"Una presenza divina si rivolge a te {name}. Ecco il messaggio che sei pronto a ricevere:",

    // Consigli vari ANGELI (fine frase)
    "interpretation.advice.var1":"Il tuo angelo custode vuole che tu sappia che la tua intuizione è una guida sicura: fidati pienamente di essa.",
    "interpretation.advice.var2":"Gli angeli ti ricordano di ascoltare il tuo cuore: conosce già la direzione che ti porterà pace.",
    "interpretation.advice.var3":"La tua guida di luce ti invita a prestare attenzione ai segni intorno a te, perché nulla accade per caso.",
    "interpretation.advice.var4":"Gli esseri celesti vogliono che tu rimanga allineato con ciò che senti profondamente. Qui si trova la tua verità.",
    "interpretation.advice.var5":"Il tuo angelo protettore ti incoraggia a credere nella tua forza interiore: non ti abbandona mai.",
    "interpretation.advice.var6":"Un sussurro divino ti invita ad aprirti alle opportunità che si presentano: sono lì per aiutarti.",
    "interpretation.advice.var7":"Gli angeli ti chiedono di rallentare e respirare: la pazienza permetterà al tuo cammino di chiarirsi naturalmente.",
    "interpretation.advice.var8":"La tua guida angelica vuole che tu continui ad avanzare con fiducia: i tuoi sforzi sono già benedetti.",
    "interpretation.advice.var9":"Una luce celeste ti invita a mantenere l’ottimismo, poiché attira verso di te energie altamente positive.",
    "interpretation.advice.var10":"Il tuo angelo custode ti sussurra di rafforzare la fiducia in te stesso: apre le porte che aspettavi da tempo.",

    // Inizi delle frasi TAROT
    "interpretation.tarot.template.advice.var1":"Ascolta bene {name},",
    "interpretation.tarot.template.advice.var2":"Il mio consiglio per te {name},",
    "interpretation.tarot.template.advice.var3":"Ti dirò una cosa {name},",
    "interpretation.tarot.template.advice.var4":"Sappi una cosa {name},",
    "interpretation.tarot.template.advice.var5":"Prenditi un momento {name},",
    "interpretation.tarot.template.advice.var6":"Te lo dico chiaramente {name},",
    "interpretation.tarot.template.advice.var7":"Ecco cosa ti consiglio {name},",
    "interpretation.tarot.template.advice.var8":"Te lo dico {name},",
    "interpretation.tarot.template.advice.var9":"Non dimenticare {name},",
    "interpretation.tarot.template.advice.var10":"{name},",

    // Finali delle frasi TAROT
    "interpretation.tarot.advice.var1":"le tue scelte attuali avranno un impatto diretto sul tuo futuro, quindi resta attento.",
    "interpretation.tarot.advice.var2":"Fidati del tuo istinto e osa seguire la strada che ti sembra giusta, anche se ti spaventa un po'.",
    "interpretation.tarot.advice.var3":"le tue emozioni sono guide potenti, segui loro con fiducia.",
    "interpretation.tarot.advice.var4":"a volte è meglio lasciar andare che forzare le cose.",
    "interpretation.tarot.advice.var5":"hai tutte le chiavi per avere successo, quindi non mollare!",
    "interpretation.tarot.advice.var6":"hai già tutto ciò che serve dentro di te per andare avanti: credi in te stesso!",
    "interpretation.tarot.advice.var7":"non lasciare che il dubbio ti blocchi, vai avanti comunque.",
    "interpretation.tarot.advice.var8": "La tua intuizione ti indica chiaramente la strada giusta da seguire. Fidati completamente!",
    "interpretation.tarot.advice.var9":"rimani positivo, la tua energia attira ciò di cui hai bisogno.",
    "interpretation.tarot.advice.var10":"accetta ciò che arriva e vai avanti, il momento è quello giusto.",

    //AZRAEL 
    "wizard.title": "Azraël il Veggente",
      "wizard.subtitle.home": "Il grande mago rivela i misteri del tuo destino",
      "wizard.subtitle.question": "Formula la tua domanda con chiarezza",
      "wizard.subtitle.channeling": "✧ Azraël consulta le forze cosmiche... ✧",
     "wizard.oracleResponse": "Risposta di Azrael",
     "wizard.subtitle.answer": "✦ Rivelazione Mistica ✦",
     "oracle.wizard.description": "Consulta il grande mago per rivelare il tuo destino",
      "wizard.consultButton": "Consultare Azraël",
      "wizard.backButton": "← Indietro",
      "wizard.backHome": "← Torna alla home",
      "wizard.newQuestion": "Nuova Domanda",
      "wizard.askTitle": "Fai La Tua Domanda",
      "wizard.questionLabel": "La tua domanda al mago",
      "wizard.questionPlaceholder": "Scrivi la tua domanda...",
      "wizard.adviceTitle": "Consiglio Mistico",
      "wizard.adviceText": "Azraël risponde sì, no o forse. Fai una domanda chiusa per ricevere la guida delle stelle.",
      "wizard.consultAction": "Consultare Azraël",
      "wizard.channeling": "Azraël consulta le forze cosmiche...",
      "wizard.yourQuestion": "La tua domanda",
      "wizard.disclaimer": "Le risposte di Azraël sono simboliche e a scopo di intrattenimento. Ascolta il tuo cuore per scelte importanti.",
      "wizard.answer.yes": "Le stelle confermano: Sì, senza ombra di dubbio",
      "wizard.answer.no": "Le stelle si oppongono: No, questo sentiero non è il tuo",
      "wizard.answer.maybe": "Il destino esita: Forse, resta attento ai segni",
      "wizard.answer.veryLikely": "Le forze cosmiche si allineano favorevolmente",
      "wizard.answer.unlikely": "I presagi sono sfavorevoli per ora",
      "wizard.answer.certain": "Certezza assoluta: Il cosmo ha parlato",
      "wizard.answer.noChance": "Nessuna possibilità: Le stelle ti guidano altrove",
      "wizard.answer.askLater": "Il momento non è propizio, torna più tardi",
      "wizard.answer.dontCount": "Non contarci: Altre porte si apriranno",
      "wizard.answer.yesDefinitely": "Sì, decisamente! Le energie sono perfette",
      "wizard.answer.signsYes": "Tutti i segni indicano il sì",
      "wizard.answer.signsNo": "Gli auspici sono chiari: No",
      "wizard.answer.unclear": "Il velo tra i mondi rimane opaco",
      "wizard.answer.trustIntuition": "Ascolta la tua voce interiore, conosce la verità",
      "wizard.astraConnection": "⟡ Connessione astrale",

    // MENU LÉGAL
    "legal.menu.title": "Menu legale",
    "legal.mentions": "Note legali",
    "legal.privacy": "Informativa sulla privacy",

    // MODALE PREMIUM
    "premium.button.label": "Diventa Premium",
    "premium.title": "Rimuovi le pubblicità!",
    "premium.subtitle": "Fai le tue letture senza pubblicità!",
    "premium.plan.1month": "1 Mese",
    "premium.plan.1month.subtitle": "Senza impegno",
    "premium.plan.3months": "3 Mesi",
    "premium.plan.3months.subtitle": "Migliore offerta",
    "premium.plan.discount": "-25%",
    "premium.button.subscribe": "Abbonati ora",
    "premium.button.select": "Seleziona un'offerta",
    "premium.button.processing": "Elaborazione...",
    "premium.benefits.ads": "Nessuna pubblicità",
    "premium.benefits.notes": "Note e preferiti",
    "premium.benefits.history": "Cronologia completa delle tue letture",
    "premium.confirm.1month": "Confermare il pagamento di 3,99 € per 1 mese?",
    "premium.confirm.3months": "Confermare il pagamento di 8,98 € per 3 mesi?",
    "premium.success":"Abbonamento attivato con successo! Goditi la tua esperienza senza pubblicità!",
    "premium.error.activation": "Errore durante l’attivazione dell’abbonamento",
    "premium.error.payment": "Errore durante il pagamento. Riprova.",
    "premium.manage": "Gestisci il mio abbonamento (annulla, fatture...)",
    "premium.expired": "Il tuo accesso Premium è scaduto",
    "premium.expiringSoon": "Il tuo accesso Premium sta per scadere",
    "premium.conditions.line1":"🔒 Pagamento sicuro tramite Google Play",
    "premium.conditions.line2": "✓ Pagamento una tantum, SENZA rinnovo automatico",
    "premium.conditions.line3": "Nessun rimborso dopo il pagamento. L'accesso Premium è valido per la durata scelta.",
    "premium.conditions.line4": "Riceverai una notifica 3 giorni prima della scadenza del tuo accesso.",
    "premium.securePaymentBy": "Pagamento sicuro tramite",
    "premium.restoreSubscription": "Ripristina un abbonamento",
    "premium.backToPurchases": "Torna agli acquisti",
    "premium.payment.googlePlay": "Pagamento Google Play",
    "premium.payment.stripe": "Pagamento web Stripe",
    "premium.restoreEmailLabel": "La tua email",
    "premium.restore": "Ripristina",
    "premium.buy": "Acquista",
    "premium.error.invalidEmail": "L'indirizzo email non è valido.",
    "premium.error.noActivePremium": "Nessun abbonamento attivo trovato",

    // PREMIUM RESTOR
    "premium.restore.title": "Ripristina il mio abbonamento",
    "premium.restore.subtitle": "Già Premium? Recupera il tuo accesso",
    "premium.restore.description": "Inserisci l'email utilizzata al momento dell'acquisto di Premium",
    "premium.restore.button": "Ripristina",
    "premium.restore.verifying": "Verifica in corso...",
    "premium.restore.success": "Premium ripristinato con successo!",
    "premium.restore.redirecting": "Reindirizzamento in corso...",
    "premium.restore.notFound": "Nessun abbonamento Premium trovato per questa email. Controlla l'indirizzo o sottoscrivi un nuovo abbonamento.",
    "premium.restore.error": "Si è verificato un errore durante il ripristino. Riprova.",
    "premium.restore.info":"L’abbonamento Premium è associato all’account Google utilizzato per l’acquisto su Google Play.",
    "premium.restore.help": "Hai bisogno di aiuto?",
    "premium.restore.contact": "Contattaci",
    "premium.error.emailRequired": "L'email è richiesta.",
    "premium.error.emailInvalid": "L'email non è valida.",
    "premium.emailLabel": "La tua email",
    "premium.emailHelp": "Per recuperare il tuo abbonamento",
    "premium.poweredBy": 'Powered by',
    "premium.backToPurchase": "Torna agli acquisti",
    "premium.button.loading": "Caricamento...",
    "premium.loading.offers": "Caricamento delle offerte...",
    "premium.button.restoring": "Ripristino...",
    "premium.error.loadFailed": "Impossibile caricare le offerte",
    "premium.error.purchaseFailed": "Errore durante l'acquisto",
    "premium.error.unknown": "Errore sconosciuto",

    // PAGE PAIEMENT SUCESS CANCEL
    "payment.success.title": "Pagamento riuscito!",
    "payment.success.verified": "Il tuo account Premium è stato attivato",
    "payment.success.activating": "Attivazione in corso...",
    "payment.success.benefits": "Goditi tutte le funzionalità Premium!",
    "payment.success.noAds": "Senza pubblicità",
    "payment.success.fullHistory": "Cronologia completa",
    "payment.success.redirecting": "Reindirizzamento automatico agli oracoli...",
    "payment.cancel.title": "Pagamento annullato",
    "payment.cancel.message": "Hai annullato il pagamento",
    "payment.cancel.retry": "Puoi riprovare in qualsiasi momento dal menu Premium",
    "payment.cancel.redirecting": "Ritorno alla selezione degli oracoli...",
    "premium.upgrade":"Passa a Premium",
    "premium.purchase":"Diventa Premium",
    "premium.purchaseDesc":"Nuovo abbonamento",
    "premium.restoreDesc":"Ho già pagato",
    "premium.unlimited":"Illimitato",
    "premium.mobileOnly.title":"Solo app mobile",
    "premium.mobileOnly.description":"Gli acquisti Premium sono disponibili solo tramite l'app mobile Android (Google Play).",
    "premium.mobileOnly.instruction":"Scarica l'app dal Google Play Store per accedere a Premium.",
    "premium.benefits.grimoire":"Grimorio illimitato",
    "premium.benefits.unlimited":"Letture illimitate",
    "premium.benefits.noAds":"Senza pubblicità",
    "premium.benefits.allOracles":"Tutti gli oracoli sbloccati",
    "premium.benefits.deepInterpretations":"Interpretazioni approfondite",
    "premium.restore.mobileOnly":"Il ripristino dell'abbonamento è disponibile solo tramite l'app mobile Android.",

    // Wheel of Destiny 
    "oracle.wheel.title": "Ruota del Destino",
    "oracle.wheel.subtitle": "Gira la ruota per scoprire il tuo destino",
    "oracle.wheel.description": "Lascia che il destino guidi la ruota verso il tuo futuro",
    "oracle.wheel.exclusiveBadge": "BONUS ESCLUSIVO",
    "oracle.wheel.shortDescription": "Scopri il tuo destino mistico",
    "oracle.wheel.spinButton": "Gira la Ruota",
    "oracle.wheel.newSpin": "Nuovo Giro",
    "oracle.wheel.spinning": "La ruota sta girando...",
    "premium.badge": "👑 Premium",
    "oracle.wheel.segment.love": "Amore",
    "oracle.wheel.segment.work": "Lavoro",
    "oracle.wheel.segment.money": "Soldi",
    "oracle.wheel.segment.health": "Salute",
    "oracle.wheel.segment.family": "Famiglia",
    "oracle.wheel.segment.success": "Successo",
    "oracle.wheel.segment.friendship": "Amicizia",
    "oracle.wheel.segment.mystery": "?",
    "oracle.wheel.adRequired": "Verrà mostrata una pubblicità",
    "oracle.wheel.premiumAccess": "Accesso immediato senza pubblicità",
    "oracle.wheel.startButton": "Sblocca la Ruota del Destino",
    "oracle.wheel.startButtonPremium": "Gira la Ruota",
    "oracle.wheel.loadingAd": "Caricamento...",
    "oracle.wheel.pleaseWait": "Un momento",
    "oracle.wheel.adLongWarning": "Pubblicità in corso...",
    "oracle.wheel.pleaseWaitUntilEnd": "Attendere prego",
    "oracle.wheel.adNotCompleted": "Guarda la pubblicità fino alla fine",
    "oracle.wheel.adError": "Si è verificato un errore. Riprova.",
    "oracle.wheel.variations.golden": "Ruota Dorata",
    "oracle.wheel.variations.silver": "Ruota Argentata",
    "oracle.wheel.variations.cosmic": "Ruota Cosmica",
    "oracle.wheel.destinyRevealed": "Il tuo destino è rivelato",
    "common.pleaseWait": "Attendere prego",
    "oracle.wheel.watchAdToUnlock": "Guarda l'annuncio per sbloccare",

        "oracle.wheel.love.title.1": "💖 L'Amore ti sorride",
        "oracle.wheel.love.message.1": [
          "Un incontro importante sta per arrivare e potrebbe cambiarti la vita. Apri il cuore e lasciati sorprendere.",
          "L'amore che cerchi è più vicino di quanto pensi. Fai attenzione ai segnali intorno a te.",
          "Un legame forte e sincero può nascere in qualunque momento. Rimani aperto e ricettivo alle emozioni."
        ],
        "oracle.wheel.love.title.2": "💫 Passione intensa",
        "oracle.wheel.love.message.2": [
          "Una passione profonda entrerà nella tua vita. Non trattenere ciò che provi e vivi tutto fino in fondo.",
          "Le tue emozioni si faranno più intense. Non temere di mostrare ciò che senti davvero.",
          "Una connessione speciale si sta avvicinando. Lascia che si riveli in modo naturale e senza pressione."
        ],
        "oracle.wheel.love.title.3": "🌹 Romantica sorpresa",
        "oracle.wheel.love.message.3": [
          "Una bella storia romantica sta per manifestarsi. Osserva le opportunità intorno a te.",
          "Qualcuno di importante potrebbe entrare presto nella tua vita. Preparati a questo incontro.",
          "Il destino ha una sorpresa amorosa per te. Segui le tue emozioni."
        ],
        "oracle.wheel.love.title.4": "💕 Amore sincero",
        "oracle.wheel.love.message.4": [
          "Il tuo cuore si riempirà di gioia ed emozioni calde. Godi ogni momento con chi ami.",
          "Stanno arrivando esperienze positive e profonde in amore. Lasciati ispirare.",
          "Un'energia affettuosa ti circonda. Seguila e lascia che guidi le tue scelte."
        ],
        "oracle.wheel.work.title.1": "💼 Successo professionale",
        "oracle.wheel.work.message.1": [
          "Un progetto importante prenderà forma. Metti energia e vedrai risultati concreti.",
          "I tuoi sforzi iniziano a dare frutti. Rimani concentrato e continua così.",
          "Un riconoscimento per il tuo lavoro è in arrivo. Preparati a brillare."
        ],
        "oracle.wheel.work.title.2": "🚀 Grande opportunità",
        "oracle.wheel.work.message.2": [
          "Si presenta un'occasione unica nella tua carriera. Non esitare: è il momento giusto.",
          "Un contatto o un'offerta potrebbe cambiare il tuo percorso lavorativo. Sii attento.",
          "Un momento decisivo si avvicina. Agisci rapidamente per trarne vantaggio."
        ],
        "oracle.wheel.work.title.3": "⚡ Svolta decisiva",
        "oracle.wheel.work.message.3": [
          "Un ostacolo si trasformerà in un'opportunità. Dimostra ciò che sai fare.",
          "Stai per fare un passo importante. Non dubitare di te stesso.",
          "Una svolta positiva nel lavoro è vicina. Rimani determinato."
        ],
        "oracle.wheel.work.title.4": "🎯 Obiettivo vicino",
        "oracle.wheel.work.message.4": [
          "Sei vicino a raggiungere un obiettivo. Concentrati e dai il massimo.",
          "Una fase cruciale si avvicina: la tua tenacia farà la differenza.",
          "I tuoi sforzi si trasformeranno presto in risultati concreti. Continua così."
        ],
        "oracle.wheel.money.title.1": "💰 Ricchezza in arrivo",
        "oracle.wheel.money.message.1": [
          "Un afflusso di denaro è in arrivo. Preparati a gestirlo con saggezza.",
          "I tuoi sforzi finanziari stanno iniziando a funzionare. Sii attento nelle decisioni.",
          "Un evento inatteso potrebbe migliorare la tua situazione economica. Coglilo."
        ],
        "oracle.wheel.money.title.2": "💸 Spesa imprevista",
        "oracle.wheel.money.message.2": [
          "Una spesa improvvisa potrebbe comparire. Rimani calmo e impara dal momento.",
          "Potresti dover prendere decisioni difficili, ma ti porteranno a stabilità.",
          "Una piccola perdita temporanea ti sorprenderà, ma ti aiuterà a rafforzarti."
        ],
        "oracle.wheel.money.title.3": "⚡ Guadagno inatteso",
        "oracle.wheel.money.message.3": [
          "Un piccolo guadagno inaspettato illuminerà la tua giornata. Usalo bene.",
          "Qualcuno potrebbe offrirti un aiuto economico. Accettalo e fanne buon uso.",
          "Un rimborso o una somma imprevista è in arrivo. Approfittane."
        ],
        "oracle.wheel.money.title.4": "🎯 Obiettivo finanziario",
        "oracle.wheel.money.message.4": [
          "Sei vicino a raggiungere un traguardo economico importante. Non perdere concentrazione.",
          "Arriva una fase decisiva per le tue finanze. Usa bene le tue energie.",
          "Le tue iniziative finanziarie porteranno presto risultati. Continua con fiducia."
        ],
        "oracle.wheel.health.title.1": "💪 Energia al massimo",
        "oracle.wheel.health.message.1": [
          "Nei prossimi giorni avrai molta energia. Usala per ciò che conta davvero.",
          "Ti sentirai forte e motivato. Sfrutta questa spinta.",
          "Arriva un periodo di grande vitalità. Muoviti, respira e senti il tuo corpo rinascere."
        ],
        "oracle.wheel.health.title.2": "🌿 Equilibrio perfetto",
        "oracle.wheel.health.message.2": [
          "Troverai un bel equilibrio tra corpo e mente. Approfittane per centrarti.",
          "Le tue giornate saranno più armoniose. Ascolta i tuoi bisogni.",
          "Un senso di pace interiore ti accompagnerà. Segui questa sensazione."
        ],
        "oracle.wheel.health.title.3": "⚡ Carica di energia",
        "oracle.wheel.health.message.3": [
          "Un’ondata di energia ti darà forza. Sfruttala per andare avanti.",
          "Saranno giorni di forte motivazione. Metti in moto i tuoi progetti.",
          "Sentirai la voglia di agire crescere dentro di te. Lasciati guidare."
        ],
        "oracle.wheel.health.title.4": "🌞 Benessere totale",
        "oracle.wheel.health.message.4": [
          "Ti sentirai bene sia nel corpo che nella mente. Vivi pienamente questo momento.",
          "Un senso di leggerezza ti seguirà. Apprezza ogni attimo.",
          "Calma e chiarezza illumineranno le tue giornate. Segui questa energia."
        ],
        "oracle.wheel.family.title.1": "🏡 Armonia familiare",
        "oracle.wheel.family.message.1": [
          "Sta iniziando un periodo di grande vicinanza con la tua famiglia. Goditi questi momenti.",
          "I legami con i tuoi cari si rafforzeranno. Mostra affetto, farà la differenza.",
          "Un'esperienza calorosa vi unirà. Sii presente."
        ],
        "oracle.wheel.family.title.2": "⚖️ Riconciliazione",
        "oracle.wheel.family.message.2": [
          "Potrebbe sorgere un piccolo conflitto, ma porterà a maggiore comprensione.",
          "Avrai l’occasione di chiarire un malinteso. Ascolta con calma.",
          "Una discussione si trasformerà in un riavvicinamento. Vale la pena rinsaldare il legame."
        ],
        "oracle.wheel.family.title.3": "🎉 Momenti felici",
        "oracle.wheel.family.message.3": [
          "Arrivano momenti gioiosi in famiglia. Goditi ogni sorriso.",
          "Un giorno speciale creerà ricordi preziosi. Vivilo pienamente.",
          "Sentirai il sostegno dei tuoi cari. Lasciati confortare."
        ],
        "oracle.wheel.family.title.4": "💖 Supporto autentico",
        "oracle.wheel.family.message.4": [
          "La tua famiglia sarà presente quando ne avrai bisogno. Non esitare a chiedere.",
          "Potrai aiutare una persona vicina. Questo rafforzerà il vostro rapporto.",
          "Una dinamica positiva nascerà in famiglia. Condividi, ascolta, ama."
        ],
        "oracle.wheel.success.title.1": "🏆 Successo in arrivo",
        "oracle.wheel.success.message.1": [
          "Un successo inatteso arriverà presto. I tuoi sforzi saranno finalmente riconosciuti.",
          "Ciò che sembrava impossibile diventa concreto. Stai per vedere risultati chiari.",
          "Un’opportunità inattesa ti permetterà di brillare. Rimani vigile."
        ],
        "oracle.wheel.success.title.2": "🚀 Rapido progresso",
        "oracle.wheel.success.message.2": [
          "Tutto ciò che fai ora ti porta a un livello superiore. Mantieni la concentrazione.",
          "I tuoi piccoli sforzi quotidiani si stanno sommando, accelerando i risultati.",
          "Un cambiamento improvviso aumenterà la tua avanzata. Adattati in fretta."
        ],
        "oracle.wheel.success.title.3": "⚡ Forte ripresa",
        "oracle.wheel.success.message.3": [
          "Un apparente fallimento si trasformerà in una grande occasione. Abbi fiducia.",
          "Un periodo difficile porterà un successo inaspettato. Tutto aveva un senso.",
          "Una battuta d'arresto diventerà il tuo trampolino di lancio."
        ],
        "oracle.wheel.success.title.4": "🎯 Obiettivo raggiunto",
        "oracle.wheel.success.message.4": [
          "Tutto ciò su cui hai lavorato darà frutti. Sarai orgoglioso.",
          "Raggiungi un traguardo che sembrava lontano. Festeggia il tuo percorso.",
          "Il successo che aspettavi si manifesterà. Sei sulla strada giusta."
        ],
        "oracle.wheel.friendship.title.1": "🤝 Amicizia forte",
        "oracle.wheel.friendship.message.1": [
          "Vivrai un momento importante con un vero amico. Il vostro legame crescerà.",
          "Un amico ti sorprenderà con un gesto sincero.",
          "Potrai dimostrare quanto tieni a una persona. Questo rafforzerà il rapporto."
        ],
        "oracle.wheel.friendship.title.2": "💬 Conversazione chiave",
        "oracle.wheel.friendship.message.2": [
          "Una conversazione importante porterà chiarezza. Capirai meglio la situazione.",
          "Riceverai un consiglio prezioso da qualcuno di fidato.",
          "Uno scambio inatteso porterà luce su una situazione. La sincerità sarà essenziale."
        ],
        "oracle.wheel.friendship.title.3": "🌟 Nuovo incontro",
        "oracle.wheel.friendship.message.3": [
          "Una nuova persona entrerà nella tua vita e potrebbe diventare un buon amico.",
          "Incontrerai qualcuno con valori simili ai tuoi. Una bella amicizia può nascere.",
          "Potrebbe crearsi un legame sincero con qualcuno che non ti aspettavi."
        ],
        "oracle.wheel.friendship.title.4": "⚡ Conflitto risolto",
        "oracle.wheel.friendship.message.4": [
          "Un vecchio malinteso troverà soluzione. Il legame si rafforzerà.",
          "Avrai l'occasione di riparare un rapporto fragile.",
          "Una situazione difficile porterà a un riavvicinamento. I conflitti a volte uniscono."
        ],
        "oracle.wheel.mystery.title.1": "❓ Sorpresa totale",
        "oracle.wheel.mystery.message.1": [
          "Affronterai una situazione inaspettata che ti scuoterà. Mantieni la calma.",
          "Un evento improbabile cambierà il ritmo della tua giornata. Potrebbe rivelarsi utile.",
          "Qualcosa di totalmente imprevedibile incrocerà la tua strada. Sii pronto ad adattarti."
        ],
        "oracle.wheel.mystery.title.2": "💥 Rivelazione improvvisa",
        "oracle.wheel.mystery.message.2": [
          "Scoprirai una verità o un segreto che ti sorprenderà profondamente.",
          "Una rivelazione inaspettata scuoterà il tuo equilibrio quotidiano.",
          "Vedrai le cose da una prospettiva diversa. Ciò che sembrava certo potrebbe cambiare."
        ],
        "oracle.wheel.mystery.title.3": "🌪 Tempesta",
        "oracle.wheel.mystery.message.3": [
          "Vivrai un momento caotico in cui tutto sembrerà confuso. Resisti.",
          "Una serie di piccoli imprevisti ti sorprenderà. Lascia che ti guidino.",
          "La vita ti spingerà fuori dalla tua zona di comfort. Questa scossa è necessaria per crescere."
        ],
        "oracle.wheel.mystery.title.4": "🌀 Destino incerto",
        "oracle.wheel.mystery.message.4": [
          "Ti trovi a un bivio dove le tue scelte avranno grandi conseguenze.",
          "Un evento misterioso ti farà mettere in discussione le tue certezze.",
          "Il destino ti sorprenderà con situazioni insolite. Accogli l'ignoto."
        ],

    "oracle.backToOracles": "Torna agli oracoli",
  },
};

export { translations };
