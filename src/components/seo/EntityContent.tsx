// ───────────────────────────────────────────────────────────────────────────
// Server-rendered, crawlable content layer.
//
// The visible site is a JavaScript-gated streaming-style experience: on the
// server it renders to an empty splash/skeleton, so non-JS crawlers and AI
// answer engines (GPTBot, ClaudeBot, PerplexityBot) would otherwise see
// nothing. This component renders the real, semantic, self-contained content —
// the same facts the interactive UI shows — directly in the server HTML.
//
// Every /browse/* profile gets its OWN narration here, not a copy of the home
// page: its own H1 and intro, its rows in its own order under its own row
// titles, and every item told in that profile's voice (blurb + episodes).
//
// It ships as `sr-only` by default: present in the DOM and the accessibility
// tree, visually replaced by the interactive experience. Content is English
// (the canonical locale).
// ───────────────────────────────────────────────────────────────────────────
import Link from "next/link";
import { catalog, catalogById, getItem, rowsFor, billboardId } from "@/data/catalog";
import { personas } from "@/data/personas";
import { t } from "@/data/i18n";
import { PERSON, PERSON_DESCRIPTION } from "@/lib/seo";
import type { CatalogItem, Persona } from "@/lib/types";

const projects = catalog.filter((i) => i.type === "project");
const certs = catalog.filter((i) => i.type === "certification");

const PROFILE_H1: Record<Persona, string> = {
  recruiter:
    "Hire Amineddine Znin — Freelance Software Developer, Cybersecurity & AI-Automation Builder (Morocco)",
  developer:
    "Amineddine Znin for Engineers — Full-Stack Web, Detection Engineering and AI Automation",
  curious: "Get to Know Amineddine Znin — the Plain-Language Story Behind the Work",
};

function itemUrl(item: CatalogItem): string | undefined {
  return item.links.demo ?? item.links.github;
}

function ItemEntry({ item, persona }: { item: CatalogItem; persona: Persona }) {
  const url = itemUrl(item);
  return (
    <li>
      <h3>
        {item.type === "project" ? <Link href={`/title/${item.id}`}>{item.title}</Link> : item.title}
      </h3>
      <p>{item.copy[persona].blurb}</p>
      {item.maturity === "Private build" && (
        <p>Private build: login-gated, so there is no public link.</p>
      )}
      {item.episodes && (
        <ol>
          {item.episodes.map((ep) => (
            <li key={ep.title}>
              <strong>{ep.title}.</strong> {ep.synopsis[persona]}
            </li>
          ))}
        </ol>
      )}
      {item.deliverables?.map((d) => (
        <p key={d.href}>
          <a href={d.href} target="_blank" rel="noopener noreferrer">
            {`${item.title} — ${d.label}`}
          </a>
          {`: ${d.note}`}
        </p>
      ))}
      {url && !item.deliverables && (
        <a href={url} target="_blank" rel="noopener noreferrer">{`Visit ${item.title}`}</a>
      )}
    </li>
  );
}

/** One profile's narration, in that profile's row order. */
function ProfileNarration({ persona }: { persona: Persona }) {
  const def = personas[persona];
  const about = getItem(billboardId)!;
  const contact = t("en").contact;
  const seen = new Set<string>();

  return (
    <>
      <h1>{PROFILE_H1[persona]}</h1>
      <p>
        <strong>{def.tagline}</strong> {def.heroDescription}
      </p>
      <p>{about.copy[persona].blurb}</p>

      {rowsFor(persona).map((row) => {
        const items = row.itemIds
          .map((id) => catalogById[id])
          .filter((i): i is CatalogItem => Boolean(i) && i.type !== "about");
        if (items.length === 0) return null;
        const fresh = items.filter((i) => !seen.has(i.id));
        const repeat = items.filter((i) => seen.has(i.id));
        fresh.forEach((i) => seen.add(i.id));
        return (
          <section key={row.key}>
            <h2>{def.rowTitles[row.key]}</h2>
            {fresh.length > 0 && (
              <ul>
                {fresh.map((item) => (
                  <ItemEntry key={item.id} item={item} persona={persona} />
                ))}
              </ul>
            )}
            {repeat.length > 0 && (
              <p>
                {row.numbered ? "Ranked: " : "Also in this row: "}
                {items.map((item, i) => (
                  <span key={item.id}>
                    {i > 0 && ", "}
                    {row.numbered && `${i + 1}. `}
                    {item.type === "project" ? (
                      <Link href={`/title/${item.id}`}>{item.title}</Link>
                    ) : (
                      item.title
                    )}
                  </span>
                ))}
                .
              </p>
            )}
          </section>
        );
      })}

      <h2>{contact.headings[persona]}</h2>
      <p>
        {contact.subs[persona]} Email{" "}
        <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a>, or find Amineddine on{" "}
        <a href={PERSON.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{" "}
        and{" "}
        <a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        .
      </p>
    </>
  );
}

/** The neutral, third-person entity page used on the home route. */
function HomeNarration() {
  const groups: { heading: string; intro: string; items: CatalogItem[] }[] = [
    {
      heading: "Web & product development",
      intro:
        "Client websites and product builds, most for hospitality, travel, education and creative brands in Marrakech, Casablanca and wider Morocco.",
      items: projects.filter((i) => i.category === "web"),
    },
    {
      heading: "Security & detection engineering",
      intro:
        "Open-source and research security tooling built around the MITRE ATT&CK framework, Sigma detection rules and SOC alert workflows.",
      items: projects.filter((i) => i.category === "cybersecurity"),
    },
    {
      heading: "AI automation & internal platforms",
      intro:
        "AI-automation systems and private internal tools, backed by a deep set of official Anthropic / Claude credentials.",
      items: projects.filter((i) => i.category === "ops"),
    },
  ];

  return (
    <>
      <h1>Amineddine Znin — Software Developer, Cybersecurity &amp; AI-Automation Builder</h1>
      <p>{PERSON_DESCRIPTION}</p>

      <h2>Who is Amineddine Znin?</h2>
      <p>
        Amineddine Znin is a software developer, freelancer and cybersecurity builder based in{" "}
        {PERSON.country}, available for work with clients worldwide. He combines front-end craft,
        full-stack engineering, AI automation and a detection-engineering mindset, and cares about
        polish, maintainability and security-aware defaults in everything he ships.
      </p>

      {groups.map((group) => (
        <section key={group.heading}>
          <h2>{group.heading}</h2>
          <p>{group.intro}</p>
          <ul>
            {group.items.map((item) => (
              <li key={item.id}>
                <h3>
                  <Link href={`/title/${item.id}`}>{item.title}</Link>
                </h3>
                <p>{item.copy.recruiter.blurb}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}

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
        Amineddine is based in {PERSON.country} and works with clients globally. You can reach him
        by email at <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a>, on{" "}
        <a href={PERSON.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{" "}
        and on{" "}
        <a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        .
      </p>
    </>
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
      {persona ? <ProfileNarration persona={persona} /> : <HomeNarration />}

      <h2>Browse this portfolio</h2>
      <p>
        The same work is narrated three ways. Explore it as a{" "}
        <Link href="/browse/recruiter">recruiter view of Amineddine Znin</Link>, a{" "}
        <Link href="/browse/developer">developer / engineering view</Link>, or a{" "}
        <Link href="/browse/curious">casual, plain-language view</Link>.
      </p>
    </section>
  );
}
