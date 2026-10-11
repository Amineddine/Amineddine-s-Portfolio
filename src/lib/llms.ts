// Generates /llms.txt (and the long-form /llms-full.txt) from the catalog, so
// the AI-readable summary can never drift from what the site actually shows.
import { catalog, titlePageItems } from "@/data/catalog";
import { personas } from "@/data/personas";
import { PERSONAS, type CatalogItem } from "@/lib/types";
import { PERSON, PERSON_DESCRIPTION, SITE_URL } from "@/lib/seo";

const certs = catalog.filter((i) => i.type === "certification");

function projectLine(item: CatalogItem): string {
  const link = item.links.demo ?? item.links.github;
  const where = link ? ` (${link})` : item.maturity === "Private build" ? " (private, login-gated)" : "";
  const stack = item.stack ? ` Stack: ${item.stack.join(", ")}.` : "";
  return `- **${item.title}**${where} — ${item.copy.recruiter.blurb}${stack} Details: ${SITE_URL}/title/${item.id}`;
}

function section(heading: string, items: CatalogItem[]): string {
  return `## ${heading}\n\n${items.map(projectLine).join("\n")}`;
}

export function buildLlmsTxt(full = false): string {
  const web = titlePageItems.filter((i) => i.category === "web");
  const security = titlePageItems.filter((i) => i.category === "cybersecurity");
  const ai = titlePageItems.filter((i) => i.category === "ops");

  const parts = [
    `# ${PERSON.name}`,
    `> ${PERSON_DESCRIPTION}`,
    [
      "## Key facts",
      "",
      `- **Name:** ${PERSON.name}`,
      `- **Role:** ${PERSON.jobTitle} · Freelancer · AI-automation builder`,
      `- **Location:** ${PERSON.country} (works with clients worldwide)`,
      "- **Web stack:** Next.js, React, TypeScript, Tailwind CSS, Vite, Node.js",
      "- **Back-end & automation:** Python, FastAPI, python-telegram-bot, SQLite, Gemini & Claude APIs",
      "- **Security focus:** Detection engineering, MITRE ATT&CK, Sigma rules, SOC tooling, alert enrichment, anomaly detection",
      `- **Website:** ${SITE_URL}`,
      `- **GitHub:** ${PERSON.github}`,
      `- **LinkedIn:** ${PERSON.linkedin}`,
      `- **Email:** ${PERSON.email}`,
    ].join("\n"),
    [
      "## The site",
      "",
      "A streaming-platform-style portfolio. The same body of work is narrated through three profiles — Recruiter, Developer and Curious — in English and French. Content is identical across profiles; only the tone and the order of rows change. Every project also has its own page.",
      "",
      `- ${SITE_URL}/ — entry / profile picker`,
      ...PERSONAS.map((p) => `- ${SITE_URL}/browse/${p} — ${personas[p].badge.toLowerCase()} (${personas[p].label})`),
    ].join("\n"),
    section("Web projects", web),
    section("AI automation & internal platforms", ai),
    section("Security projects (open source)", security),
    [
      "## Certifications",
      "",
      ...certs.map((c) => `- ${c.title}${c.issuer ? ` — ${c.issuer}` : ""}`),
    ].join("\n"),
  ];

  if (full) {
    parts.push(
      [
        "## Project details, in three narrations",
        "",
        ...titlePageItems.map((item) =>
          [
            `### ${item.title}`,
            "",
            ...PERSONAS.map((p) => `- **${personas[p].label}:** ${item.copy[p].blurb}`),
            ...(item.episodes
              ? ["", ...item.episodes.map((ep, i) => `${i + 1}. **${ep.title}** — ${ep.synopsis.developer}`)]
              : []),
            "",
          ].join("\n"),
        ),
      ].join("\n"),
    );
  } else {
    parts.push(`## Optional\n\n- ${SITE_URL}/llms-full.txt — every project in all three narrations, with episodes`);
  }

  parts.push(
    `## Contact\n\nFor freelance work, collaboration or hiring: email ${PERSON.email}, or reach out on LinkedIn (${PERSON.linkedin}).`,
  );
  return parts.join("\n\n") + "\n";
}
