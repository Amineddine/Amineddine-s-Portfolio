// ───────────────────────────────────────────────────────────────────────────
// SEO / GEO helpers — the single source of truth for the canonical site URL,
// the "entity" facts about Amineddine, and every schema.org JSON-LD node.
//
// GEO (Generative Engine Optimization) note: AI answer engines read raw HTML
// and strongly favour clear, machine-readable entity data. These builders emit
// a linked @graph (Person ↔ WebSite ↔ ProfilePage ↔ ItemList ↔ CreativeWork)
// so engines can disambiguate "Amineddine Znin" as one entity and cite the
// work. Every project has a stable @id anchored on its /title/[id] page.
// ───────────────────────────────────────────────────────────────────────────
import type { CatalogItem } from "@/lib/types";

/** Canonical production origin, no trailing slash. Overridable per-environment. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://amineddine.online"
).replace(/\/+$/, "");

/** Stable entity facts, reused across metadata, JSON-LD and the crawlable copy. */
export const PERSON = {
  name: "Amineddine Znin",
  jobTitle: "Software Developer & Cybersecurity Builder",
  email: "amineeddine006@gmail.com",
  github: "https://github.com/Amineddine",
  linkedin: "https://www.linkedin.com/in/amineddine-znin-z999",
  country: "Morocco",
  countryCode: "MA",
} as const;

/** Third-person entity description — the quotable summary for AI engines. */
export const PERSON_DESCRIPTION =
  "Amineddine Znin is a Morocco-based software developer, freelancer and cybersecurity builder, available for work globally. He builds production websites and creative web experiences with Next.js, React and TypeScript, and security & detection-engineering tooling with Python, MITRE ATT&CK and Sigma. He also builds AI-automation systems for businesses.";

/** Topics the entity is knowledgeable about (drives Person.knowsAbout). */
export const KNOWS_ABOUT = [
  "Web development",
  "Front-end development",
  "Full-stack development",
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "FastAPI",
  "Cybersecurity",
  "Detection engineering",
  "MITRE ATT&CK",
  "Sigma rules",
  "SOC tooling",
  "Security automation",
  "Anomaly detection",
  "Machine learning for security",
  "AI automation",
  "Telegram bots",
  "Vision language models",
  "Claude API",
  "Model Context Protocol",
];

/** Social preview image (1200×630 JPG — AVIF/WebP aren't reliably unfurled). */
export const OG_IMAGE = "/og-image.jpg";

/** Resolve a site-relative path (or pass through an absolute URL) to absolute. */
export function abs(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

/** Wrap nodes in a single linked JSON-LD graph. */
export function graph(nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

export function personSchema() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: PERSON.name,
    url: `${SITE_URL}/`,
    image: abs(OG_IMAGE),
    jobTitle: PERSON.jobTitle,
    description: PERSON_DESCRIPTION,
    knowsAbout: KNOWS_ABOUT,
    email: `mailto:${PERSON.email}`,
    address: { "@type": "PostalAddress", addressCountry: PERSON.countryCode },
    nationality: { "@type": "Country", name: PERSON.country },
    sameAs: [PERSON.github, PERSON.linkedin],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: "Amineddine Znin — Portfolio",
    description: PERSON_DESCRIPTION,
    inLanguage: ["en", "fr"],
    author: { "@id": `${SITE_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#person` },
  };
}

export function profilePageSchema(path = "/") {
  return {
    "@type": "ProfilePage",
    "@id": `${SITE_URL}${path}#profilepage`,
    url: abs(path),
    name: `${PERSON.name} — ${PERSON.jobTitle}`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#person` },
    mainEntity: { "@id": `${SITE_URL}/#person` },
    // Full ISO 8601 datetime (e.g. "2026-07-24T00:00:00.000Z"). This is a server
    // component rendered at build time, so the value reflects the last deploy.
    // A full timestamp is what Google's ProfilePage validator accepts without
    // complaint — a bare "YYYY-MM-DD" can be flagged as an invalid date/time value.
    dateModified: new Date().toISOString(),
  };
}

export function breadcrumbSchema(personaLabel: string, personaSlug: string) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: personaLabel,
        item: `${SITE_URL}/browse/${personaSlug}`,
      },
    ],
  };
}

/** Stable @id for a project node — anchored on its title page. */
export function projectId(item: CatalogItem): string {
  return `${SITE_URL}/title/${item.id}#work`;
}

/**
 * A single project → SoftwareApplication (security/ops tools) or CreativeWork
 * (web builds). The description is a self-contained sentence so an AI engine can
 * quote the fragment out of context and it still makes sense.
 */
export function projectSchema(item: CatalogItem) {
  const live = item.links.demo ?? item.links.github;
  const extra = item.deliverables?.map((d) => d.href) ?? [];
  const isSoftware =
    item.category === "cybersecurity" || item.category === "ops";
  // Prefer the real completion month; otherwise `item.year` when it's a real
  // 4-digit year ("Core"/"Principle" labels are skipped). Always a full ISO
  // 8601 date — Google rejects a bare "2025".
  const dateCreated = item.releasedAt
    ? `${item.releasedAt}-01`
    : /^\d{4}$/.test(item.year)
      ? `${item.year}-01-01`
      : undefined;
  const sameAs = [...new Set([...(live ? [abs(live)] : []), ...extra])];
  return {
    "@type": isSoftware ? "SoftwareApplication" : "CreativeWork",
    "@id": projectId(item),
    name: item.title,
    description: item.copy.recruiter.blurb,
    url: abs(`/title/${item.id}`),
    ...(sameAs.length ? { sameAs } : {}),
    ...(item.image ? { image: abs(item.image) } : {}),
    ...(isSoftware
      ? {
          applicationCategory:
            item.category === "cybersecurity"
              ? "SecurityApplication"
              : "BusinessApplication",
          operatingSystem: "Cross-platform",
        }
      : {}),
    keywords: [...item.tags, ...(item.stack ?? [])].join(", "),
    ...(dateCreated ? { dateCreated } : {}),
    ...(item.maturity === "Private build"
      ? { isAccessibleForFree: false, conditionsOfAccess: "Private, login-gated build" }
      : {}),
    inLanguage: "en",
    author: { "@id": `${SITE_URL}/#person` },
    creator: { "@id": `${SITE_URL}/#person` },
  };
}

/** The whole body of work as one ordered list, linking each project node. */
export function workListSchema(items: CatalogItem[]) {
  return {
    "@type": "ItemList",
    "@id": `${SITE_URL}/#work`,
    name: `Projects by ${PERSON.name}`,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: abs(`/title/${item.id}`),
      item: { "@id": projectId(item) },
    })),
  };
}

/** A /title/[id] page: a WebPage whose main entity is the project. */
export function titlePageSchema(item: CatalogItem) {
  const path = `/title/${item.id}`;
  return {
    "@type": "WebPage",
    "@id": `${SITE_URL}${path}#webpage`,
    url: abs(path),
    name: `${item.title} — ${PERSON.name}`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": projectId(item) },
    mainEntity: { "@id": projectId(item) },
    ...(item.image ? { primaryImageOfPage: abs(item.image) } : {}),
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/browse/developer` },
        { "@type": "ListItem", position: 3, name: item.title, item: abs(path) },
      ],
    },
  };
}
