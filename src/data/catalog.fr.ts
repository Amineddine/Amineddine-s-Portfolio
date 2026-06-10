import type { Persona } from "@/lib/types";

// French narration for each catalog item. Mirrors the English `copy` in
// catalog.ts (same ids + personas). `cta` is the localized button label; the
// href/download come from the English entry. Anything missing here falls back
// to English automatically (see itemCopy in i18n.ts).
type FrCopy = { blurb: string; cta?: string };

export const catalogFr: Record<string, Partial<Record<Persona, FrCopy>>> = {
  "about-amineddine": {
    recruiter: {
      blurb:
        "Développeur logiciel et freelance basé au Maroc, disponible partout. Je crée des sites de production, des expériences numériques créatives et des outils de sécurité orientés SOC — et je soigne les finitions. Si vous cherchez quelqu'un qui livre du soigné et anticipe les risques, parlons-en.",
      cta: "Prendre rendez-vous",
    },
    developer: {
      blurb:
        "Développeur full-stack avec une fibre détection-sécurité. React/Next/TS côté front, Python/FastAPI derrière, Sigma/ATT&CK/détection d'anomalies côté sécurité. J'aime les systèmes lisibles, observables et honnêtes sur leurs compromis.",
      cta: "Voir GitHub",
    },
    stalker: {
      blurb:
        "Salut, moi c'est Amineddine. Je viens du Maroc, je bosse avec des gens partout, et je partage mon temps entre créer de jolis sites et bricoler des petits outils de sécurité qui repèrent les comportements louches. J'adore les détails et je teste toujours un truc.",
      cta: "Dire bonjour",
    },
  },
  "weframe-media": {
    recruiter: {
      blurb:
        "Un site d'agence créative premium qui affûte le positionnement mondial d'un studio vidéo de Marrakech — services plus clairs, meilleure première impression, et un parcours plus net du visiteur vers la demande qualifiée.",
      cta: "Voir le site",
    },
    developer: {
      blurb:
        "Build Next.js + React centré sur le rythme éditorial et des médias cinématiques lourds. Optimisé pour charger vite du contenu visuel sans casser la narration — animations dosées, mise en page calme.",
      cta: "Voir le site",
    },
    stalker: {
      blurb:
        "Un site stylé pour une équipe vidéo à Marrakech. Grosse ambiance cinéma, défilement fluide — je voulais que le site soit aussi beau que leurs films.",
      cta: "Y jeter un œil",
    },
  },
  "the-seven-saints": {
    recruiter: {
      blurb:
        "Site d'un camp de luxe dans le désert qui met en scène un séjour haut de gamme à Agafay et déclenche l'envie de réserver — immersif, premium, pensé pour convertir.",
      cta: "Voir le site",
    },
    developer: {
      blurb:
        "React + TypeScript + Vite, construit autour d'un rythme de navigation calme et immersif. Imagerie responsive et animations dosées pour que l'ambiance ne coûte jamais la performance.",
      cta: "Voir le site",
    },
    stalker: {
      blurb:
        "Un site de rêve pour un camp de luxe près de Marrakech. Le genre d'endroit qu'on prend en photo — je voulais que le site donne un peu la sensation d'y être.",
      cta: "Y jeter un œil",
    },
  },
  "mahal-films": {
    recruiter: {
      blurb:
        "Plateforme de services de production qui inspire confiance aux réalisateurs et agences internationaux voulant tourner au Maroc — services clairs, vraie crédibilité, contact facile.",
      cta: "Voir le site",
    },
    developer: {
      blurb:
        "TypeScript + Vite + React. Une couche de présentation ciblée — cadrage des services, contenus localisation et un parcours de contact net — rapide et lisible jusque sur petit écran.",
      cta: "Voir le site",
    },
    stalker: {
      blurb:
        "Un site pour une équipe de production de films au Maroc qui aide les gros tournages internationaux à se faire ici. Clean, direct, et efficace pour inciter à prendre contact.",
      cta: "Y jeter un œil",
    },
  },
  "moroccan-mirage": {
    recruiter: {
      blurb:
        "Un site de voyage de luxe full-stack qui positionne une agence marocaine haut de gamme comme un magazine de voyage glacé — storytelling cinématique, planificateur de voyage sur mesure et catalogue de circuits conçu pour transformer les curieux en clients réservés.",
      cta: "Voir le projet",
    },
    developer: {
      blurb:
        "Next.js 15 + React 19 + TypeScript avec Framer Motion et Lenis. Storytelling au défilement, section Maroc parallaxe collante, scroll horizontal des villes, compteurs animés, planificateur multi-étapes et catalogue de circuits à routage dynamique. Identité sable sombre, Cormorant Garamond, grain partout.",
      cta: "Voir le projet",
    },
    stalker: {
      blurb:
        "Un site magnifique style magazine pour une agence de voyage marocaine chic — le genre de site qui donne envie de réserver direct. Tons sable, défilement velouté, parallaxe partout, et un planificateur de voyage maison.",
      cta: "Y jeter un œil",
    },
  },
  "sigmapack-builder": {
    recruiter: {
      blurb:
        "Un outil de sécurité qui transforme des règles de détection en packs prêts à déployer pour un SOC — il standardise le travail, fait gagner du temps aux analystes et apporte de la cohérence.",
      cta: "Voir sur GitHub",
    },
    developer: {
      blurb:
        "Pipeline Python qui convertit des détections taguées ATT&CK en packs YAML façon Sigma. Pensé pour la répétabilité et un passage de relais propre au SOC — structure, formatage et idempotence sont tout l'enjeu.",
      cta: "Voir sur GitHub",
    },
    stalker: {
      blurb:
        "Un outil en coulisses pour les équipes de sécurité. Il prend des règles de détection en vrac et les emballe proprement pour que les défenseurs puissent les utiliser direct.",
      cta: "Voir le code",
    },
  },
  "soar-mini-enricher": {
    recruiter: {
      blurb:
        "Un microservice d'enrichissement d'alertes qui donne aux analystes SOC du contexte et des pistes de triage immédiats — une réponse aux incidents plus rapide, plus intelligente, moins de bruit.",
      cta: "Voir sur GitHub",
    },
    developer: {
      blurb:
        "Microservice FastAPI : mappe les alertes brutes sur MITRE ATT&CK, score la sévérité et renvoie des recommandations analystes en JSON. Assez léger pour s'insérer dans un pipeline SOC existant.",
      cta: "Voir sur GitHub",
    },
    stalker: {
      blurb:
        "Quand une alarme de sécurité se déclenche, ce petit service explique ce que ça peut vouloir dire et à quel point c'est grave — pour que les humains ne se noient pas sous mille alertes.",
      cta: "Voir le code",
    },
  },
  "attck-tagger": {
    recruiter: {
      blurb:
        "Enrichissement de détection explicable — les analystes voient pourquoi un événement compte, avec un score de confiance fiable. De la visibilité qui accélère les décisions et réduit les approximations.",
      cta: "Voir sur GitHub",
    },
    developer: {
      blurb:
        "Enrichissement ATT&CK à base de règles pour des logs JSONL, avec correspondances explicables et scores de confiance. Conçu pour que les analystes puissent auditer le raisonnement, pas seulement accepter le verdict.",
      cta: "Voir sur GitHub",
    },
    stalker: {
      blurb:
        "Étiquette les logs de sécurité avec la technique d'attaque possible — et surtout montre son raisonnement, pour qu'on puisse vérifier au lieu de faire aveuglément confiance à une boîte noire.",
      cta: "Voir le code",
    },
  },
  rareguard: {
    recruiter: {
      blurb:
        "Détection d'anomalies de niveau recherche qui fait remonter les événements de sécurité rares et dangereux que les autres ratent — avec une rigueur statistique sur laquelle les analystes peuvent s'appuyer.",
      cta: "Voir sur GitHub",
    },
    developer: {
      blurb:
        "Transformer auto-supervisé pour les anomalies rares de logs de sécurité, couplé à des p-values conformes pour des alertes calibrées et interprétables. Le plus dur : rendre le scoring d'événements rares fiable, pas juste malin.",
      cta: "Voir sur GitHub",
    },
    stalker: {
      blurb:
        "Mon expérience un peu recherche : une IA qui apprend à quoi ressemble le « normal » dans les logs de sécurité et signale ce qui est vraiment bizarre — avec de vraies maths derrière son niveau de certitude.",
      cta: "Voir le code",
    },
  },
  "skill-frontend": {
    recruiter: {
      blurb:
        "Des interfaces web soignées et responsives qui chargent vite et convertissent — la vitrine sur laquelle clients et utilisateurs vous jugent, faite avec rigueur.",
      cta: "Voir en pratique",
    },
    developer: {
      blurb:
        "React, Next.js, TypeScript, Vite, Tailwind. Architecture de composants avec un bon rythme, un balisage soucieux d'accessibilité et une discipline responsive serrée.",
      cta: "Voir en pratique",
    },
    stalker: {
      blurb:
        "La partie qu'on voit et qu'on clique. Je fais des sites fluides et nets sur n'importe quel écran.",
      cta: "Voir en pratique",
    },
  },
  "skill-backend": {
    recruiter: {
      blurb:
        "Des systèmes fiables derrière l'interface — des API et services qui tiennent en production et ne vous surprennent pas six mois plus tard.",
      cta: "Voir en pratique",
    },
    developer: {
      blurb:
        "Node.js, Python, FastAPI, conception d'API REST, architecture pragmatique. Des services lisibles, testables et maintenables par qui en hérite.",
      cta: "Voir en pratique",
    },
    stalker: {
      blurb:
        "Le truc de la salle des machines — les bouts qui font que les boutons font vraiment quelque chose.",
      cta: "Voir en pratique",
    },
  },
  "skill-security": {
    recruiter: {
      blurb:
        "Un vrai bagage sécurité — risque repéré tôt, valeurs par défaut plus sûres, et l'instinct audit-et-durcissement qui protège l'activité.",
      cta: "Voir le travail sécurité",
    },
    developer: {
      blurb:
        "MITRE ATT&CK, Sigma, enrichissement d'alertes, logique de détection, workflows SOC. Des réflexes de détection intégrés à ma façon de construire, pas ajoutés après coup.",
      cta: "Voir le travail sécurité",
    },
    stalker: {
      blurb:
        "Je pense comme un défenseur. Je construis des outils qui aident à attraper les méchants — et je garde cet état d'esprit même sur un site normal.",
      cta: "Voir le travail sécurité",
    },
  },
  "skill-ops": {
    recruiter: {
      blurb:
        "Des habitudes de livraison modernes — conteneurisé, observable, livré en continu. Moins de risque, moins de pannes, des releases plus prévisibles.",
      cta: "Voir ma méthode",
    },
    developer: {
      blurb:
        "Docker, Linux, CI/CD, observabilité et ML appliqué à la sécurité. Ouvert à l'expérimentation mais orienté déploiement — de la recherche qui finit vraiment en prod.",
      cta: "Voir ma méthode",
    },
    stalker: {
      blurb:
        "Tout le truc « faire tourner ça de façon fiable et le garder en vie » — plus les expériences ML fun à côté.",
      cta: "Voir ma méthode",
    },
  },
  "exp-product": {
    recruiter: {
      blurb:
        "Je traite le travail client comme un travail produit — structure claire, hiérarchie forte, et des décisions qui font encore sens pour l'équipe qui maintient ensuite.",
      cta: "En savoir plus",
    },
    developer: {
      blurb:
        "Des builds jugés sur leur lisibilité et leur survie à la maintenance, pas juste sur la compilation. Le nommage, la hiérarchie et la structure reçoivent une vraie attention.",
      cta: "En savoir plus",
    },
    stalker: {
      blurb:
        "Je me soucie de comment un truc se sent à l'usage — et de comment il se sentira dans six mois quand quelqu'un devra le modifier.",
      cta: "En savoir plus",
    },
  },
  "exp-security": {
    recruiter: {
      blurb:
        "Mon bagage cybersécurité fait que le risque est repéré tôt — utile en audit, durcissement, revue et ingénierie au quotidien.",
      cta: "En savoir plus",
    },
    developer: {
      blurb:
        "Des réflexes de modélisation de menace pendant le travail ordinaire : valeurs par défaut plus sûres, meilleures questions, et moins de « comment c'est passé en prod ? » plus tard.",
      cta: "En savoir plus",
    },
    stalker: {
      blurb:
        "Je remarque le « attends, quelqu'un pourrait abuser de ça ? » avant que ça devienne un problème. Vieille habitude de sécurité, dure à éteindre.",
      cta: "En savoir plus",
    },
  },
  "exp-collab": {
    recruiter: {
      blurb:
        "Communication calme, directe et visible. Des updates réguliers et des compromis réalistes — de l'élan plutôt que du mystère, chaque semaine.",
      cta: "Travailler ensemble",
    },
    developer: {
      blurb:
        "Des updates concrets, des boucles de feedback serrées, des discussions honnêtes sur les compromis. Je préfère signaler un problème tôt plutôt que le cacher derrière un statut vert.",
      cta: "Travailler ensemble",
    },
    stalker: {
      blurb:
        "Je vous dis vraiment où ça en est. Pas de fantôme, pas de « c'est presque fini » pendant trois semaines.",
      cta: "Travailler ensemble",
    },
  },
  "exp-premium": {
    recruiter: {
      blurb:
        "Pas juste une appli qui marche — une qui semble intentionnelle dans sa mise en page, ses interactions et ses finitions. Une meilleure première impression pour les utilisateurs, les clients et les recruteurs.",
      cta: "En savoir plus",
    },
    developer: {
      blurb:
        "Les derniers 10 % — timing des animations, rythme des espacements, états limites — c'est là que je mets un effort disproportionné, parce que c'est ce qui sépare « fini » de « bon ».",
      cta: "En savoir plus",
    },
    stalker: {
      blurb:
        "Je peaufine les petits détails que la plupart ne remarquent pas consciemment mais ressentent absolument.",
      cta: "En savoir plus",
    },
  },
  "cert-fullstack": {
    recruiter: {
      blurb:
        "Le programme intensif d'ingénierie logicielle full-stack d'ALX Maroc — du front au back, avec la discipline de livraison que les employeurs recherchent vraiment.",
      cta: "Voir le certificat",
    },
    developer: {
      blurb:
        "Le parcours full-stack rigoureux d'ALX Maroc : web moderne, API, structures de données et les pratiques d'ingénierie derrière la livraison de vrais logiciels.",
      cta: "Voir le certificat",
    },
    stalker: {
      blurb:
        "Le gros morceau — le programme d'ingénierie full-stack d'ALX Maroc. Le front, le back, et tout ce qu'il y a entre.",
      cta: "Voir le certificat",
    },
  },
  "cert-attack": {
    recruiter: {
      blurb:
        "Une formation de défense informée par la menace, alignée sur le framework MITRE ATT&CK — la base de mon travail d'ingénierie de détection.",
      cta: "Voir le certificat",
    },
    developer: {
      blurb:
        "Détection alignée ATT&CK, émulation d'adversaire et cartographie de threat-intel — la méthodologie sur laquelle je m'appuie dans SigmaPack-Builder et attck-tagger.",
      cta: "Voir le certificat",
    },
    stalker: {
      blurb:
        "Le badge pour savoir comment les attaquants opèrent vraiment — et comment les défenseurs les cartographient et les attrapent.",
      cta: "Voir le certificat",
    },
  },
  "cert-filesec": {
    recruiter: {
      blurb:
        "Un certificat de l'OPSWAT Academy en prévention des menaces véhiculées par les fichiers — désarmement de contenu, multiscan et manipulation sécurisée des fichiers pour des environnements critiques.",
      cta: "Voir le certificat",
    },
    developer: {
      blurb:
        "Formation sécurité fichiers OPSWAT : CDR, multiscan et inspection en profondeur — défendre les chemins d'upload et d'ingestion que la plupart des applis oublient.",
      cta: "Voir le certificat",
    },
    stalker: {
      blurb:
        "De l'OPSWAT Academy — en gros comment empêcher des fichiers louches de bousiller un système.",
      cta: "Voir le certificat",
    },
  },
  "cert-soc": {
    recruiter: {
      blurb:
        "Formation pratique en opérations de sécurité et réponse aux incidents — détection, triage et réponse dans des conditions SOC réalistes.",
      cta: "Voir le certificat",
    },
    developer: {
      blurb:
        "Supervision défensive, triage d'alertes et pratique des workflows de réponse aux incidents — la vision côté analyste qui façonne les outils que je construis.",
      cta: "Voir le certificat",
    },
    stalker: {
      blurb:
        "Le badge « je peux m'asseoir dans un centre d'opérations de sécurité et rester calme ».",
      cta: "Voir le certificat",
    },
  },
  "cert-founder": {
    recruiter: {
      blurb:
        "Le programme fondateur d'ALX Ventures — pensée produit, sens de la responsabilité et un état d'esprit « construire et livrer » que j'apporte au travail client, pas seulement au code.",
      cta: "Voir le certificat",
    },
    developer: {
      blurb:
        "Le parcours fondateur d'ALX Ventures : transformer des idées en produits livrables — le pourquoi derrière le quoi, au-delà de l'ingénierie.",
      cta: "Voir le certificat",
    },
    stalker: {
      blurb:
        "D'ALX Ventures — le côté entrepreneur en moi. Construire des choses que les gens veulent vraiment.",
      cta: "Voir le certificat",
    },
  },
  "cert-cloud": {
    recruiter: {
      blurb:
        "Pratique de livraison moderne — conteneurs, pipelines et déploiement cloud — pour que le travail parte de façon fiable et continue de tourner.",
      cta: "Voir le certificat",
    },
    developer: {
      blurb:
        "Docker, CI/CD et bases du cloud — la moitié « déployer et exploiter » de la fabrication de logiciels qui atteignent vraiment la production.",
      cta: "Voir le certificat",
    },
    stalker: {
      blurb:
        "Le badge « je peux l'envoyer en prod et le garder en vie ».",
      cta: "Voir le certificat",
    },
  },
};
