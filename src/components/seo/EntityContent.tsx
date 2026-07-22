// ───────────────────────────────────────────────────────────────────────────
// Server-rendered, crawlable content layer.
//
// The visible site is a JavaScript-gated "Netflix" experience: on the server it
// renders to an empty splash/skeleton, so non-JS crawlers and AI answer engines
// (GPTBot, ClaudeBot, PerplexityBot) would otherwise see nothing. This component
// renders the real, semantic, self-contained content — the same facts the
// interactive UI shows — directly in the server HTML.
//
// It ships as `sr-only` by default: present in the DOM and the accessibility
// tree (so screen readers and crawlers get it), visually replaced by the
// interactive experience. Content is English (the canonical locale) and uses
// question-style headings with direct answers, which AI engines quote well.
// ───────────────────────────────────────────────────────────────────────────
import Link from "next/link";
import { catalog } from "@/data/catalog";
import { PERSON, PERSON_DESCRIPTION } from "@/lib/seo";
import type { CatalogItem, Persona } from "@/lib/types";

const projects = catalog.filter((i) => i.type === "project");
const webProjects = projects.filter((i) => i.category === "web");
const securityProjects = projects.filter((i) => i.category === "cybersecurity");
const automationProjects = projects.filter((i) => i.category === "ops");
const certs = catalog.filter((i) => i.type === "certification");

function blurbFor(item: CatalogItem, persona?: Persona): string {
  return item.copy[persona ?? "recruiter"].blurb;
}

function ProjectList({
  items,
  persona,
}: {
  items: CatalogItem[];
  persona?: Persona;
}) {
  return (
    <ul>
      {items.map((item) => {
        const url = item.links.demo ?? item.links.github;
        return (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{blurbFor(item, persona)}</p>
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >{`Visit ${item.title}`}</a>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function EntityContent({
  persona,
  className = "sr-only",
}: {
  persona?: Persona;
  className?: string;
}) {
  return (
    <section className={className} aria-label="About Amineddine Znin and his work">
      <h1>Amineddine Znin — Software Developer &amp; Cybersecurity Builder</h1>
      <p>{PERSON_DESCRIPTION}</p>

      <h2>Who is Amineddine Znin?</h2>
      <p>
        Amineddine Znin is a software developer, freelancer and cybersecurity
        builder based in {PERSON.country}, available for work with clients
        worldwide. He combines front-end craft, full-stack engineering and a
        detection-engineering mindset, and cares about polish, maintainability
        and security-aware defaults in everything he ships.
      </p>

      <h2>What does Amineddine Znin build?</h2>
      <p>
        Three kinds of work: production websites and creative web experiences
        (Next.js, React, TypeScript, Tailwind CSS); security and
        detection-engineering tooling (Python, FastAPI, MITRE ATT&amp;CK, Sigma,
        SOC automation, anomaly detection); and AI-automation systems that take
        repetitive work off a team&apos;s plate.
      </p>

      <h2>Web &amp; product development</h2>
      <p>
        Client websites and product builds, most for hospitality, travel and
        creative brands operating out of Marrakech and wider Morocco.
      </p>
      <ProjectList items={webProjects} persona={persona} />

      <h2>Security &amp; detection engineering</h2>
      <p>
        Open-source and research security tooling built around the MITRE
        ATT&amp;CK framework, Sigma detection rules and SOC alert workflows.
      </p>
      <ProjectList items={securityProjects} persona={persona} />

      <h2>AI &amp; automation</h2>
      <p>
        AI-automation work for businesses, backed by a deep set of official
        Anthropic / Claude credentials.
      </p>
      <ProjectList items={automationProjects} persona={persona} />

      <h2>What certifications does Amineddine Znin hold?</h2>
      <ul>
        {certs.map((cert) => (
          <li key={cert.id}>
            {cert.title}
            {cert.issuer ? ` — ${cert.issuer}` : ""}
          </li>
        ))}
      </ul>

      <h2>Where is Amineddine Znin based and how can you contact him?</h2>
      <p>
        Amineddine is based in {PERSON.country} and works with clients globally.
        You can reach him by email at{" "}
        <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a>, on{" "}
        <a href={PERSON.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{" "}
        and on{" "}
        <a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        .
      </p>

      <h2>Browse this portfolio</h2>
      <p>
        The same work is narrated three ways. Explore it as a{" "}
        <Link href="/browse/recruiter">recruiter view of Amineddine Znin</Link>, a{" "}
        <Link href="/browse/developer">developer / engineering view</Link>, or a{" "}
        <Link href="/browse/stalker">casual, plain-language view</Link>.
      </p>
    </section>
  );
}
