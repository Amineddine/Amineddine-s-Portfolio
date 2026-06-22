import type { CatalogItem, Persona, PersonaCopy, RowKey } from "@/lib/types";
import { personas } from "./personas";
import { catalogFr } from "./catalog.fr";

// ───────────────────────────────────────────────────────────────────────────
// SECOND AXIS: language. Persona = tone; Locale = language. English is the
// canonical source (lives in `personas.ts` + `catalog.ts`); French overrides
// live here and in `catalog.fr.ts`. Every resolver falls back to English, so a
// missing French string never breaks the UI.
// ───────────────────────────────────────────────────────────────────────────
export type Locale = "en" | "fr";
export const LOCALES: Locale[] = ["en", "fr"];
export const localeShort: Record<Locale, string> = { en: "EN", fr: "FR" };
export const localeName: Record<Locale, string> = { en: "English", fr: "Français" };

export function isLocale(v: string): v is Locale {
  return v === "en" || v === "fr";
}

interface UIStrings {
  gateHeading: string;
  gateSub: string;
  switchHeading: string;
  nav: { home: string; projects: string; skills: string; about: string; contact: string };
  resume: string;
  clickToSkip: string;
  moreLikeThis: string;
  currentlyBuilding: string;
  portfolio: string;
  match: (n: number) => string;
  meta: { genres: string; issuedBy: string; stack: string; role: string; category: string };
  contact: {
    openChannel: string;
    headings: Record<Persona, string>;
    subs: Record<Persona, string>;
    pills: string[];
    labels: { email: string; phone: string };
    cta: string;
    footerNote: string;
    footerRole: string;
  };
}

const en: UIStrings = {
  gateHeading: "Who's watching?",
  gateSub:
    "Same projects, three narrations. Pick the voice you want the work told in — switch anytime from the avatar up top.",
  switchHeading: "Re-watch in another language",
  nav: { home: "Home", projects: "Projects", skills: "Skills", about: "About", contact: "Contact" },
  resume: "Résumé",
  clickToSkip: "Click to skip",
  moreLikeThis: "More Like This",
  currentlyBuilding: "Currently building",
  portfolio: "Portfolio",
  match: (n) => `${n}% Match`,
  meta: { genres: "Genres", issuedBy: "Issued by", stack: "Stack", role: "Role", category: "Category" },
  contact: {
    openChannel: "Open channel",
    headings: {
      recruiter: "Ready when you are.",
      developer: "Let's talk shop.",
      stalker: "Come say hi.",
    },
    subs: {
      recruiter:
        "Available globally for focused freelance work with a premium finish. Hand me the brief — I'll hand you something shipped.",
      developer:
        "Open to interesting builds: web platforms, security tooling, the gnarly stuff. Ping me and we'll get into the details.",
      stalker:
        "I'm based in Morocco, I work with people everywhere, and I reply to nice messages. Don't be a stranger.",
    },
    pills: ["Amineddine Znin", "Morocco based", "Available globally", "Web + security"],
    labels: { email: "Email", phone: "Phone" },
    cta: "Contact →",
    footerNote: "A Netflix-style portfolio.",
    footerRole: "Software developer · Freelancer · Cybersecurity builder · Morocco",
  },
};

const fr: UIStrings = {
  gateHeading: "Qui regarde ?",
  gateSub:
    "Mêmes projets, trois narrations. Choisissez la voix qui vous parle — changez à tout moment depuis l'avatar en haut.",
  switchHeading: "Revoir dans une autre langue",
  nav: { home: "Accueil", projects: "Projets", skills: "Compétences", about: "À propos", contact: "Contact" },
  resume: "CV",
  clickToSkip: "Cliquez pour passer",
  moreLikeThis: "À voir aussi",
  currentlyBuilding: "En cours",
  portfolio: "Portfolio",
  match: (n) => `${n} % compatible`,
  meta: { genres: "Genres", issuedBy: "Délivré par", stack: "Stack", role: "Rôle", category: "Catégorie" },
  contact: {
    openChannel: "Canal ouvert",
    headings: {
      recruiter: "Prêt quand vous l'êtes.",
      developer: "Parlons technique.",
      stalker: "Venez dire bonjour.",
    },
    subs: {
      recruiter:
        "Disponible dans le monde entier pour des missions freelance avec une finition premium. Donnez-moi le brief — je vous rends quelque chose de livré.",
      developer:
        "Ouvert aux projets intéressants : plateformes web, outils de sécurité, les trucs costauds. Écrivez-moi et on rentre dans les détails.",
      stalker:
        "Je suis basé au Maroc, je travaille avec des gens partout, et je réponds aux messages sympas. Ne soyez pas timide.",
    },
    pills: ["Amineddine Znin", "Basé au Maroc", "Disponible mondialement", "Web + sécurité"],
    labels: { email: "E-mail", phone: "Téléphone" },
    cta: "Contact →",
    footerNote: "Un portfolio façon Netflix.",
    footerRole: "Développeur logiciel · Freelance · Spécialiste cybersécurité · Maroc",
  },
};

export const ui: Record<Locale, UIStrings> = { en, fr };
export function t(locale: Locale): UIStrings {
  return ui[locale];
}

// ── persona-level localized text ───────────────────────────────────────────
export interface PersonaText {
  label: string;
  badge: string;
  tagline: string;
  heroDescription: string;
  infoLabel: string;
  primaryCtaLabel: string;
  rowTitles: Record<RowKey, string>;
}

const personaFr: Record<Persona, PersonaText> = {
  recruiter: {
    label: "Recruteur",
    badge: "Côté recrutement",
    tagline: "Ingénieur prêt à livrer, orienté résultats.",
    heroDescription:
      "Développeur logiciel et freelance basé au Maroc, disponible dans le monde entier. Je transforme des briefs ambitieux en sites web de production et systèmes pensés sécurité — soignés, livrés à temps, conçus pour durer. Si vous cherchez quelqu'un qui livre et soigne les finitions, vous êtes au bon endroit.",
    infoLabel: "Pourquoi me recruter",
    primaryCtaLabel: "Télécharger le CV",
    rowTitles: {
      topPicks: "Pourquoi me recruter",
      web: "Du travail client livré",
      security: "Une sécurité qui protège l'entreprise",
      ai: "L'atout IA & automatisation",
      building: "En production",
      skills: "Compétences recherchées",
      experience: "Mon parcours",
      certifications: "Certifications",
    },
  },
  developer: {
    label: "Développeur",
    badge: "Côté technique",
    tagline: "Full-stack + sécurité, au cœur de la technique.",
    heroDescription:
      "React, Next.js et TypeScript côté front ; Python et FastAPI derrière ; une approche détection-sécurité de bout en bout — Sigma, MITRE ATT&CK, détection d'anomalies. Ce profil, c'est la version technique : architecture, compromis, et comment les systèmes s'assemblent vraiment.",
    infoLabel: "Lire le détail",
    primaryCtaLabel: "Voir sur GitHub",
    rowTitles: {
      topPicks: "Sélection entre devs",
      web: "Projets web & produit",
      security: "Sécurité & ingénierie de détection",
      ai: "IA & automatisation",
      building: "En construction",
      skills: "Compétences & stack",
      experience: "Défis techniques",
      certifications: "Certifs & formations",
    },
  },
  stalker: {
    label: "Curieux",
    badge: "Côté humain",
    tagline: "Salut — voici ce que je fais vraiment.",
    heroDescription:
      "Moi c'est Amineddine. Je crée des sites web agréables et des outils de sécurité qui repèrent les trucs louches. Aucun jargon ici — juste l'histoire derrière le travail : les réussites, le pourquoi, et ce que je cherche encore à comprendre.",
    infoLabel: "En savoir plus",
    primaryCtaLabel: "Dire bonjour",
    rowTitles: {
      topPicks: "Faire connaissance",
      web: "Les sites que j'ai créés",
      security: "Mes joujoux de sécurité",
      ai: "L'IA qui me branche",
      building: "Mes bricolages du moment",
      skills: "Ce que je sais faire",
      experience: "L'histoire jusqu'ici",
      certifications: "Mes badges",
    },
  },
};

/** Persona text for a given locale (English pulled from personas.ts). */
export function personaText(p: Persona, locale: Locale): PersonaText {
  if (locale === "fr") return personaFr[p];
  const d = personas[p];
  return {
    label: d.label,
    badge: d.badge,
    tagline: d.tagline,
    heroDescription: d.heroDescription,
    infoLabel: d.infoLabel,
    primaryCtaLabel: d.primaryCta.label,
    rowTitles: d.rowTitles,
  };
}

/** Persona profile-tile label for the gate (localized). */
export function personaLabel(p: Persona, locale: Locale): string {
  return locale === "fr" ? personaFr[p].label : personas[p].label;
}
export function personaBadge(p: Persona, locale: Locale): string {
  return locale === "fr" ? personaFr[p].badge : personas[p].badge;
}

// ── catalog blurb/cta resolver ─────────────────────────────────────────────
/** The active-persona copy for an item, in the chosen locale (EN fallback). */
export function itemCopy(item: CatalogItem, persona: Persona, locale: Locale): PersonaCopy {
  const enCopy = item.copy[persona];
  if (locale === "fr") {
    const frEntry = catalogFr[item.id]?.[persona];
    if (frEntry) {
      return {
        blurb: frEntry.blurb,
        cta: { label: frEntry.cta ?? enCopy.cta.label, href: enCopy.cta.href, download: enCopy.cta.download },
      };
    }
  }
  return enCopy;
}
