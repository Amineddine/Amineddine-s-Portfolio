// ───────────────────────────────────────────────────────────────────────────
// One source of truth, three voices.
//
// The portfolio has a SINGLE content layer (projects, skills, experience,
// certifications, the bio). A "persona" is not a different content set — it is
// a NARRATION LANGUAGE. Every catalog item carries one `copy` variant per
// persona, and the UI renders `copy[activePersona]`. Same titles in every
// profile, retold for whoever is watching.
//
// `Persona` is the first axis (tone/register). The data model is intentionally
// open so a second axis — a real EN/FR/AR language toggle — can be layered on
// later by widening `PersonaCopy` into `Record<Locale, PersonaCopy>` without
// restructuring anything else.
// ───────────────────────────────────────────────────────────────────────────

export type Persona = "recruiter" | "developer" | "stalker";

export const PERSONAS: Persona[] = ["recruiter", "developer", "stalker"];

export function isPersona(value: string): value is Persona {
  return (PERSONAS as string[]).includes(value);
}

export type ItemType =
  | "project"
  | "skill"
  | "experience"
  | "certification"
  | "about";

export type Category = "web" | "cybersecurity" | "ops" | "profile";

export type LinkKind = "github" | "demo" | "email" | "linkedin" | "cv";

/** A single call-to-action with a label that swaps per persona. */
export interface Cta {
  label: string;
  href: string;
  /** download attribute hint for CV-style links */
  download?: boolean;
}

/** The per-persona narration for one catalog item. */
export interface PersonaCopy {
  /** the description shown on the card preview + detail modal */
  blurb: string;
  /** the primary action for this item, retitled per persona */
  cta: Cta;
}

export interface CatalogItem {
  id: string;
  title: string;
  type: ItemType;
  category: Category;
  /** release year, shown like a Netflix title year */
  year: string;
  /** shown as Netflix "genres" / tag chips */
  tags: string[];
  /** technical stack, shown in the detail metadata column */
  stack?: string[];
  /** my role on the work */
  role?: string;
  /** flavor "% Match" badge (purely decorative, like Netflix) */
  match: number;
  /** in-progress work surfaces in the "Currently Building" row */
  inProgress?: boolean;
  /** 0–100 "Continue Watching" progress bar for in-progress items */
  progress?: number;
  /** featured items headline the "Featured" row */
  featured?: boolean;
  /** short maturity tag e.g. "Live", "Research", "Open source" */
  maturity?: string;
  /** issuing body, shown for certifications */
  issuer?: string;
  /** 2-stop gradient powering the placeholder art until real images land */
  accent: [string, string];
  /** real thumbnail once provided; falls back to generated placeholder art */
  image?: string;
  /** real wide banner once provided; falls back to placeholder art */
  banner?: string;
  /** looping video used as the detail-modal banner (takes precedence over banner) */
  video?: string;
  links: Partial<Record<LinkKind, string>>;
  copy: Record<Persona, PersonaCopy>;
}

export type RowKey =
  | "topPicks"
  | "web"
  | "security"
  | "ai"
  | "building"
  | "skills"
  | "experience"
  | "certifications";

export interface PersonaDef {
  id: Persona;
  /** profile-tile label */
  label: string;
  /** one-line lens descriptor shown under the gate heading / in switcher */
  badge: string;
  /** billboard tagline */
  tagline: string;
  /** billboard supporting paragraph */
  heroDescription: string;
  /** billboard "▶ Play" button (action varies per persona) */
  primaryCta: Cta;
  /** billboard "ⓘ More Info" button label (always opens the bio modal) */
  infoLabel: string;
  /** placeholder profile-tile icon */
  icon: "briefcase" | "terminal" | "search";
  /** profile-tile + avatar gradient */
  tileColor: [string, string];
  /** row headings, retitled per persona */
  rowTitles: Record<RowKey, string>;
}

export interface RowConfig {
  key: RowKey;
  itemIds: string[];
}
