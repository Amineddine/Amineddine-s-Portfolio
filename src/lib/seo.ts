// ───────────────────────────────────────────────────────────────────────────
// SEO / GEO helpers — the single source of truth for the canonical site URL,
// the "entity" facts about Amineddine, and every schema.org JSON-LD node.
//
// GEO (Generative Engine Optimization) note: AI answer engines read raw HTML
// and strongly favour clear, machine-readable entity data. These builders emit
// a linked @graph (Person ↔ WebSite ↔ ProfilePage ↔ CreativeWork) so engines
// can disambiguate "Amineddine Znin" as one entity and cite the work.
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
  "Claude API",
  "Model Context Protocol",
];

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
    image: abs("/og-image.png"),
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
    dateModified: new Date().toISOString().slice(0, 10),
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

/**
 * A single project → SoftwareApplication (security/ops tools) or CreativeWork
 * (web builds). The description is a self-contained sentence so an AI engine can
 * quote the fragment out of context and it still makes sense.
 */
export function projectSchema(item: CatalogItem) {
  const url = item.links.demo ?? item.links.github;
  const isSoftware =
    item.category === "cybersecurity" || item.category === "ops";
  return {
    "@type": isSoftware ? "SoftwareApplication" : "CreativeWork",
    name: item.title,
    description: item.copy.recruiter.blurb,
    ...(url ? { url: abs(url) } : {}),
    ...(item.image ? { image: abs(item.image) } : {}),
    ...(isSoftware
      ? {
          applicationCategory:
            item.category === "cybersecurity"
              ? "SecurityApplication"
              : "DeveloperApplication",
          operatingSystem: "Cross-platform",
        }
      : {}),
    keywords: item.tags.join(", "),
    dateCreated: item.year,
    inLanguage: "en",
    author: { "@id": `${SITE_URL}/#person` },
    creator: { "@id": `${SITE_URL}/#person` },
  };
}
