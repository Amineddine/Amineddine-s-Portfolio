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
    curious: {
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
    curious: {
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
    curious: {
      blurb:
        "Un site de rêve pour un camp de luxe près de Marrakech. Le genre d'endroit qu'on prend en photo — je voulais que le site donne un peu la sensation d'y être.",
      cta: "Y jeter un œil",
    },
  },
  "moroccan-mirage": {
    recruiter: {
      blurb:
        "Un site de voyage de luxe full-stack qui positionne une agence marocaine haut de gamme comme un magazine de voyage glacé — storytelling cinématique, planificateur de voyage sur mesure et catalogue de circuits conçu pour transformer les curieux en clients réservés.",
      cta: "Voir le site",
    },
    developer: {
      blurb:
        "Next.js 15 + React 19 + TypeScript avec Framer Motion et Lenis. Storytelling au défilement, section Maroc parallaxe collante, scroll horizontal des villes, compteurs animés, planificateur multi-étapes et catalogue de circuits à routage dynamique. Identité sable sombre, Cormorant Garamond, grain partout.",
      cta: "Voir le site",
    },
    curious: {
      blurb:
        "Un site magnifique style magazine pour une agence de voyage marocaine chic — le genre de site qui donne envie de réserver direct. Tons sable, défilement velouté, parallaxe partout, et un planificateur de voyage maison.",
      cta: "Y jeter un œil",
    },
  },
  "gogestion": {
    recruiter: {
      blurb:
        "Le site signature d'un groupe qui exploite dix riads de prestige dans la médina de Marrakech — SPA, hammam et terrasses sur les toits réunis dans une seule collection. Il présente le portefeuille comme une marque de luxe unique et oriente les voyageurs vers la réservation.",
      cta: "Voir le site",
    },
    developer: {
      blurb:
        "Next.js + React + TypeScript, pensé en français. Typographie éditoriale sur des images de patios, une identité visuelle commune aux dix propriétés, et un rythme de navigation calme façon galerie qui laisse respirer chaque riad sans fragmenter la marque.",
      cta: "Voir le site",
    },
    curious: {
      blurb:
        "Un site pour un groupe qui gère dix riads magnifiques dans la vieille médina de Marrakech, tous sous une même enseigne — piscines, hammams, terrasses. Je voulais que ça ressemble à une seule belle collection, pas à dix hôtels séparés.",
      cta: "Y jeter un œil",
    },
  },
  "visitare-il-marocco": {
    recruiter: {
      blurb:
        "Un site en italien pour une agence de tourisme visant les voyageurs italiens — « Il Marocco, raccontato da chi lo ama ». Il met en avant des circuits guidés et des voyages sur mesure à travers le Maroc et dirige les visiteurs intéressés directement vers WhatsApp.",
      cta: "Voir le site",
    },
    developer: {
      blurb:
        "Next.js + React + TypeScript, entièrement localisé en italien. Identité terracotta et crème, serif éditorial en titrage, et un parcours de contact sans friction qui ouvre WhatsApp plutôt qu'un long formulaire — calé sur la façon dont ce public convertit vraiment.",
      cta: "Voir le site",
    },
    curious: {
      blurb:
        "Un site entièrement en italien pour une agence qui amène des touristes italiens au Maroc — circuits, voyages, tout. Couleurs chaudes du désert, et on peut passer direct sur WhatsApp pour organiser son voyage.",
      cta: "Y jeter un œil",
    },
  },
  "automate": {
    recruiter: {
      blurb:
        "Mon propre concept : une agence d'automatisation IA pour les entreprises marocaines — « Le travail répétitif. Fait. Par l'IA. » Des agents IA et des workflows sur mesure qui débarrassent les équipes des tâches répétitives et chronophages : factures, réconciliation, réseaux sociaux, prospection.",
      cta: "Voir le site",
    },
    developer: {
      blurb:
        "Landing Next.js + React + TypeScript pour une initiative perso d'automatisation IA. Marque sombre très contrastée avec un titre barré comme gag, un défilé de workflows automatisables (factures & PDF, réconciliation, automatisation financière, administratif…) et un seul tunnel « réserver un appel ».",
      cta: "Voir le site",
    },
    curious: {
      blurb:
        "Un concept que je construis moi-même — une agence IA pour les boîtes marocaines qui automatise le boulot répétitif et ennuyeux pour rendre du temps aux gens. Des agents IA sur mesure pour les factures, l'administratif, le social, la prospection, etc.",
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
    curious: {
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
    curious: {
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
    curious: {
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
    curious: {
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
    curious: {
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
    curious: {
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
    curious: {
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
    curious: {
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
    curious: {
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
    curious: {
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
    curious: {
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
    curious: {
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
    curious: {
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
    curious: {
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
    curious: {
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
    curious: {
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
    curious: {
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
    curious: {
      blurb:
        "Le badge « je peux l'envoyer en prod et le garder en vie ».",
      cta: "Voir le certificat",
    },
  },
  "cert-ai-fluency-foundations": {
    recruiter: {
      blurb:
        "Le programme fondamental d'AI Fluency d'Anthropic — un cadre structuré pour travailler avec l'IA de façon délibérée, efficace et responsable. La base de tout ce que je fais avec Claude.",
      cta: "Vérifier le certificat",
    },
    developer: {
      blurb:
        "Le framework AI Fluency d'Anthropic : le modèle 4D (Délégation, Description, Discernement, Diligence) pour collaborer avec les systèmes d'IA avec intention plutôt qu'au feeling.",
      cta: "Vérifier le certificat",
    },
    curious: {
      blurb:
        "Le cours de base d'Anthropic pour vraiment savoir travailler avec l'IA — pas juste tâtonner sur un chatbot en espérant.",
      cta: "Vérifier le certificat",
    },
  },
  "cert-ai-fluency-students": {
    recruiter: {
      blurb:
        "Le parcours AI Fluency d'Anthropic pour apprenants — utiliser l'IA pour approfondir sa compréhension et s'approprier son apprentissage, pas le sous-traiter.",
      cta: "Vérifier le certificat",
    },
    developer: {
      blurb:
        "Le cours AI Fluency d'Anthropic axé étudiants : des méthodes concrètes pour apprendre avec l'IA honnêtement — augmenter la compréhension au lieu de la court-circuiter.",
      cta: "Vérifier le certificat",
    },
    curious: {
      blurb:
        "Le cours d'Anthropic sur l'usage de l'IA pour mieux apprendre — la version bonnes habitudes, pas la version triche aux devoirs.",
      cta: "Vérifier le certificat",
    },
  },
  "cert-ai-fluency-educators": {
    recruiter: {
      blurb:
        "Le programme AI Fluency d'Anthropic pour formateurs — enseigner avec l'IA de façon réfléchie et guider les autres vers un bon usage. Je n'utilise pas que les outils : je sais aussi monter une équipe en compétence dessus.",
      cta: "Vérifier le certificat",
    },
    developer: {
      blurb:
        "Le parcours formateurs d'Anthropic : des cadres pour introduire l'IA de façon responsable et aider les autres à développer une vraie maîtrise — utile dès que j'embarque des gens sur des workflows IA.",
      cta: "Vérifier le certificat",
    },
    curious: {
      blurb:
        "Le cours d'Anthropic sur comment apprendre aux autres à bien utiliser l'IA. L'expliquer, c'est un skill à part entière.",
      cta: "Vérifier le certificat",
    },
  },
  "cert-claude-101": {
    recruiter: {
      blurb:
        "Claude 101 d'Anthropic — les fondamentaux pour travailler efficacement avec Claude, du prompting aux usages réels. Le point de départ d'un ensemble complet de certifications Claude/Anthropic.",
      cta: "Vérifier le certificat",
    },
    developer: {
      blurb:
        "Claude 101 d'Anthropic : prompting de base, capacités et fondamentaux d'usage efficace directement à la source — la base du reste du parcours Claude.",
      cta: "Vérifier le certificat",
    },
    curious: {
      blurb:
        "Le cours « bien démarrer avec Claude » — directement par Anthropic, ceux qui le fabriquent.",
      cta: "Vérifier le certificat",
    },
  },
  "cert-claude-platform-101": {
    recruiter: {
      blurb:
        "Claude Platform 101 d'Anthropic — comment la plateforme Claude s'assemble en tant que produit, de la console aux capacités. Une littératie au niveau plateforme, pas juste le chat.",
      cta: "Vérifier le certificat",
    },
    developer: {
      blurb:
        "Claude Platform 101 d'Anthropic : la console, les surfaces produit et comment les pièces s'emboîtent — l'orientation pour construire sur la plateforme, pas juste utiliser l'app de chat.",
      cta: "Vérifier le certificat",
    },
    curious: {
      blurb:
        "Le tour complet de la plateforme Claude d'Anthropic — ce qu'il y a sous le capot au-delà du simple chat.",
      cta: "Vérifier le certificat",
    },
  },
  "cert-claude-api": {
    recruiter: {
      blurb:
        "Le cours pratique d'Anthropic sur la création de vraies applications avec l'API Claude — le certificat derrière le fait de livrer des fonctionnalités IA, pas juste d'en parler.",
      cta: "Vérifier le certificat",
    },
    developer: {
      blurb:
        "Building with the Claude API d'Anthropic : messages, system prompts, streaming, tool use et les patterns pour des intégrations de production avec le SDK Anthropic.",
      cta: "Vérifier le certificat",
    },
    curious: {
      blurb:
        "Le cours pour vraiment brancher Claude dans des applis avec du code — le côté développeur, construire quelque chose de réel.",
      cta: "Vérifier le certificat",
    },
  },
  "cert-claude-code-101": {
    recruiter: {
      blurb:
        "Claude Code 101 d'Anthropic — les fondamentaux du codage agentique dans le terminal. La raison pour laquelle j'avance vite sans perdre le fil sur de vrais codebases.",
      cta: "Vérifier le certificat",
    },
    developer: {
      blurb:
        "Claude Code 101 d'Anthropic : codage agentique en CLI — contexte, outils et le workflow pour laisser un agent travailler sur un vrai dépôt en sécurité.",
      cta: "Vérifier le certificat",
    },
    curious: {
      blurb:
        "L'intro à Claude Code — l'IA qui vit dans le terminal et édite vraiment ton code. Je l'utilise tout le temps.",
      cta: "Vérifier le certificat",
    },
  },
  "cert-claude-code-in-action": {
    recruiter: {
      blurb:
        "Claude Code in Action d'Anthropic — le côté avancé et pratique : de vrais workflows agentiques sur de vrais projets. Ce portfolio a été construit comme ça.",
      cta: "Vérifier le certificat",
    },
    developer: {
      blurb:
        "Claude Code in Action d'Anthropic : workflows agentiques appliqués — changements multi-fichiers, automatisation, hooks et les habitudes qui rendent un agent vraiment productif dans un codebase.",
      cta: "Vérifier le certificat",
    },
    curious: {
      blurb:
        "La suite pratique de Claude Code 101 — le mettre au travail sur de vrais projets. (Oui, y compris ce site.)",
      cta: "Vérifier le certificat",
    },
  },
  "cert-claude-cowork": {
    recruiter: {
      blurb:
        "L'introduction d'Anthropic à Claude Cowork — collaborer avec Claude comme un coéquipier à travers les tâches et les outils. Une littératie tournée vers l'avenir du travail avec des agents IA.",
      cta: "Vérifier le certificat",
    },
    developer: {
      blurb:
        "L'intro Claude Cowork d'Anthropic : le modèle d'agent collaboratif — déléguer, superviser et travailler aux côtés de Claude sur des tâches multi-étapes.",
      cta: "Vérifier le certificat",
    },
    curious: {
      blurb:
        "Le cours sur le fait de voir Claude moins comme un outil et plus comme un collègue. La version futur-du-travail.",
      cta: "Vérifier le certificat",
    },
  },
  "cert-mcp-intro": {
    recruiter: {
      blurb:
        "L'introduction d'Anthropic au Model Context Protocol — le standard ouvert pour connecter l'IA aux outils et aux données. La couche d'intégration derrière une vraie ingénierie IA.",
      cta: "Vérifier le certificat",
    },
    developer: {
      blurb:
        "L'intro MCP d'Anthropic : serveurs, clients, outils et ressources — le protocole pour donner aux modèles un accès sûr et structuré aux systèmes externes.",
      cta: "Vérifier le certificat",
    },
    curious: {
      blurb:
        "Le cours sur MCP — en gros l'adaptateur universel qui laisse l'IA se brancher en sécurité aux autres apps et données.",
      cta: "Vérifier le certificat",
    },
  },
  "cert-mcp-advanced": {
    recruiter: {
      blurb:
        "Le cours avancé d'Anthropic sur le Model Context Protocol — l'architecture plus profonde derrière des intégrations IA-vers-outils robustes et sécurisées. Le bout expert du parcours MCP.",
      cta: "Vérifier le certificat",
    },
    developer: {
      blurb:
        "MCP Advanced Topics d'Anthropic : transport, auth, sampling et les patterns architecturaux pour construire des serveurs MCP de production qui tiennent en usage réel.",
      cta: "Vérifier le certificat",
    },
    curious: {
      blurb:
        "Le cours MCP niveau expert — la suite construire-ça-proprement-et-en-sécurité de l'intro.",
      cta: "Vérifier le certificat",
    },
  },
  "tawada-desert-camp": {
    recruiter: {
      blurb:
        "Le site d'un camp de luxe à Merzouga, au pied des dunes de l'Erg Chebbi, bâti autour d'une promesse : « Là où le silence devient luxe. » Cinématique, tourné vers la nuit et orienté réservation, il vend un séjour au cœur du Sahara comme une destination en soi — une proposition bien distincte des escapades d'Agafay, aux portes de Marrakech.",
      cta: "Voir le site",
    },
    developer: {
      blurb:
        "React + Vite. Mise en page éditoriale et cinématique — typographie script, palette crème et or, et un récit qui va de l'arrivée à la tombée de la nuit à travers hébergements, expériences, table et galerie. « Réserver » reste épinglé dans l'en-tête et WhatsApp est toujours à un geste.",
      cta: "Voir le site",
    },
    curious: {
      blurb:
        "Un site pour un camp de luxe dans le vrai Sahara, près de Merzouga, là où commencent les grandes dunes de l'Erg Chebbi. Tout tourne autour du calme et du ciel étoilé — « Là où le silence devient luxe ». Bien plus loin (et bien plus calme) que le camp d'Agafay que j'avais fait avant.",
      cta: "Y jeter un œil",
    },
  },
  "morocco-transit": {
    recruiter: {
      blurb:
        "Le site d'une société de transport privé à Marrakech : transferts privés, excursions à la journée et deux circuits signature, The Sahara Road et The Imperial North. Trilingue EN/FR/ES et construit autour d'une demande de devis via WhatsApp, pour passer de la visite au prix en quelques gestes.",
      cta: "Voir le site",
    },
    developer: {
      blurb:
        "Next.js. Le hero est un trajet routier piloté par le scroll : la position de défilement fait avancer la route, les panneaux affichent les lieux en arabe, en tifinagh et en alphabet latin, et un compteur kilométrique en direct grimpe pendant le voyage. Localisation complète EN/FR/ES et devis via WhatsApp à la place d'un back-end de réservation.",
      cta: "Voir le site",
    },
    curious: {
      blurb:
        "Un site pour une société de chauffeurs à Marrakech. En scrollant, on fait carrément un road trip — les kilomètres défilent et de vrais panneaux routiers apparaissent en arabe et en tifinagh. En anglais, français et espagnol, et un devis, c'est juste un message WhatsApp.",
      cta: "Y jeter un œil",
    },
  },
  "riad-jabador": {
    recruiter: {
      blurb:
        "Refonte complète de l'ancien site WordPress d'une maison d'hôtes de la médina de Marrakech, à 850 m de Jemaa el-Fna. Bilingue FR/EN et porté par le récit (« la maison change quatre fois par jour »), avec huit expériences, une galerie, un journal et la réservation Cloudbeds en direct.",
      cta: "Voir le site",
    },
    developer: {
      blurb:
        "Remplacement Next.js d'un site WordPress vieillissant. Contenus FR/EN, sections éditoriales, huit pages d'expériences, galerie et journal, avec la réservation Cloudbeds intégrée : disponibilités et tarifs viennent directement du système de l'établissement.",
      cta: "Voir le site",
    },
    curious: {
      blurb:
        "Une maison d'hôtes dans la vieille médina de Marrakech, à deux pas de la grande place. L'ancien site tournait sous WordPress ; je l'ai refait de zéro autour de l'idée que « la maison change quatre fois par jour ». On peut réserver une chambre directement sur le site.",
      cta: "Y jeter un œil",
    },
  },
  "izil-morocco": {
    recruiter: {
      blurb:
        "Le site d'un tour-opérateur qui organise ses voyages depuis quatre portes d'entrée — Marrakech, Fès, Casablanca et Tanger — à travers six circuits de plusieurs jours, des excursions à la journée et sept régions. La marque assume une identité amazighe, avec l'écriture tifinagh partout.",
      cta: "Voir le site",
    },
    developer: {
      blurb:
        "Next.js. Contenu modélisé en portes d'entrée → circuits → régions, pour que chaque voyage soit accessible depuis la ville d'arrivée. Le tifinagh est une vraie couche typographique de l'interface, pas un ornement ponctuel.",
      cta: "Voir le site",
    },
    curious: {
      blurb:
        "Une agence qui organise les voyages selon la ville où vous atterrissez — Marrakech, Fès, Casablanca ou Tanger. Elle est fièrement amazighe, donc il y a du tifinagh partout, et j'adore ça.",
      cta: "Y jeter un œil",
    },
  },
  "palais-andara": {
    recruiter: {
      blurb:
        "Un client, deux livrables pour Palais Andara, riad & spa de la médina de Marrakech : un site d'excursions avec des brochures EN et FR de 38 pages, lisibles dans le navigateur ou en PDF, et réservation via WhatsApp — plus un menu digital bilingue, cuisine et boissons, pour les clients.",
      cta: "Voir le site des excursions",
    },
    developer: {
      blurb:
        "Deux builds. Excursions : Next.js, brochures EN/FR (38 pages chacune) lisibles dans le navigateur avec repli PDF, pages par excursion et réservation WhatsApp. Menu : un menu bilingue léger, cuisine et boissons, pensé pour le téléphone des clients.",
      cta: "Voir le site des excursions",
    },
    curious: {
      blurb:
        "Deux choses pour un riad & spa à Marrakech : un site où les clients parcourent les excursions — avec une brochure complète à feuilleter ou télécharger — et réservent sur WhatsApp, et un menu digital pour le restaurant et le bar.",
      cta: "Y jeter un œil",
    },
  },
  "mahal-productions": {
    recruiter: {
      blurb:
        "Le site de Mahal Productions, société de services de production agréée CCM fondée en 1998, basée à Marrakech et Casablanca. Il expose tout ce dont une équipe internationale a besoin pour tourner au Maroc — autorisations de tournage, douane carnet ATA, équipes, repérages, casting, logistique et le remboursement de 30 % — et en fait un parcours clair vers la prise de contact.",
      cta: "Voir le site",
    },
    developer: {
      blurb:
        "React + Vite. Architecture de l'information calquée sur la check-list d'un producteur — autorisations, carnet ATA, équipes, repérages, casting, logistique, remboursement de 30 % — chaque point lisible d'un coup d'œil. La section « Shot here » présente les crédits d'équipe du fondateur, explicitement en tant que crédits personnels et non comme des titres Mahal.",
      cta: "Voir le site",
    },
    curious: {
      blurb:
        "Un site pour une société qui aide les productions internationales à tourner au Maroc depuis 1998 — autorisations, paperasse douanière, équipes, décors, tout. La section « Shot here » liste les films sur lesquels le fondateur a personnellement travaillé (crédits personnels, pas ceux de la société).",
      cta: "Y jeter un œil",
    },
  },
  "groupe-scolaire-badry": {
    recruiter: {
      blurb:
        "Le site du Groupe Scolaire Badry, école privée trilingue à Casablanca (arabe, français, anglais), de la maternelle au collège, sur la voie du Baccalauréat International. Éditorial et rassurant, avec un parcours d'inscription clair et un contact WhatsApp pour les parents.",
      cta: "Voir le site",
    },
    developer: {
      blurb:
        "Un design éditorial à empattements qui rend un site scolaire calme et crédible. Les pages suivent les vraies questions des parents — niveaux de la maternelle au collège, programme trilingue, parcours IB — avec l'inscription et WhatsApp comme deux voies de conversion.",
      cta: "Voir le site",
    },
    curious: {
      blurb:
        "Un site pour une école de Casablanca où les enfants apprennent en arabe, en français et en anglais, de la maternelle au collège. Les parents peuvent lancer l'inscription en ligne ou juste envoyer un WhatsApp.",
      cta: "Y jeter un œil",
    },
  },
  "wfm-management": {
    recruiter: {
      blurb:
        "Une plateforme privée d'opérations de production conçue pour WeFrame Media / Studio38 : tournages, montages, publications et épisodes de podcast planifiés, produits, validés et livrés depuis un seul bureau, façon ClickUp. Protégée par connexion pour garder le travail des clients en sécurité.",
      cta: "Demander une démo",
    },
    developer: {
      blurb:
        "Une app web interne, derrière authentification, qui modélise le pipeline d'un studio média : tournages, montages, posts et épisodes de podcast passent par planifier → produire → valider → livrer sur un seul bureau. Privée par conception — aucune surface publique hormis l'écran de connexion.",
      cta: "Demander une démo",
    },
    curious: {
      blurb:
        "Un outil interne pour le studio vidéo WeFrame Media — un genre de ClickUp fait rien que pour eux, où chaque tournage, montage et épisode de podcast est suivi du plan à la livraison. C'est privé, donc on ne voit que l'écran de connexion.",
      cta: "Me poser la question",
    },
  },
  "mnq-trading-assistant": {
    recruiter: {
      blurb:
        "Un assistant Telegram privé conçu pour un trader futures en challenge prop-firm. Il automatise la préparation du matin — niveaux clés, gaps, news à fort impact —, lit les captures de graphiques par IA, applique les règles de risque du challenge dans le code et clôt chaque journée par un bilan. Bilingue FR/EN, fuseaux horaires par utilisateur, ~170 tests automatisés. Analyse uniquement : il ne passe jamais d'ordre.",
      cta: "Demander une démo",
    },
    developer: {
      blurb:
        "Python + python-telegram-bot, Gemini en vision et texte avec bascule automatique de modèle, SQLite pour l'état. Un garde-fou de risque codé suit le stop journalier, le plafond de consistance et le drawdown suiveur ; briefs et bilans tournent sur le fuseau de chaque utilisateur ; ~170 tests verrouillent les règles. Strictement analytique — il ne passe jamais d'ordre.",
      cta: "Demander une démo",
    },
    curious: {
      blurb:
        "Un bot Telegram que j'ai fait pour un trader de futures. Chaque matin il envoie un plan de jeu, on peut lui envoyer une capture de graphique et il dit ce qu'il voit, et il prévient avant qu'on enfreigne ses propres règles de risque. Il ne fait que de l'analyse — il ne trade jamais à votre place.",
      cta: "Me poser la question",
    },
  },
};
