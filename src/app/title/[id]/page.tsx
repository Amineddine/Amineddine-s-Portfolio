import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { catalogById, titlePageItems } from "@/data/catalog";
import { PERSONAS, type Persona } from "@/lib/types";
import Browse from "@/components/netflix/Browse";
import JsonLd from "@/components/seo/JsonLd";
import {
  OG_IMAGE,
  PERSON,
  graph,
  personSchema,
  projectSchema,
  titlePageSchema,
  websiteSchema,
} from "@/lib/seo";

// One crawlable page per project. Visually it is the browse experience with
// the title's detail view open on top; in the raw HTML it is a complete,
// self-contained page about the project, told in all three narrations.
export const dynamicParams = false;

const AUDIENCE: Record<Persona, string> = {
  recruiter: "For recruiters",
  developer: "For developers",
  curious: "For the curious",
};

export function generateStaticParams() {
  return titlePageItems.map((item) => ({ id: item.id }));
}

function lookup(id: string) {
  const item = catalogById[id];
  return item && item.type === "project" ? item : undefined;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const item = lookup(id);
  if (!item) return {};
  const title = `${item.title} — a ${item.category === "cybersecurity" ? "security" : item.category === "ops" ? "AI & automation" : "web"} project by ${PERSON.name}`;
  const description = item.copy.recruiter.blurb;
  const path = `/title/${item.id}`;
  // social cards use the JPG (WebP/AVIF unfurl unreliably on LinkedIn & co.)
  const image = OG_IMAGE;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "article", images: [{ url: image }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function TitlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = lookup(id);
  if (!item) notFound();

  const live = item.links.demo ?? item.links.github;

  return (
    <>
      <JsonLd
        data={graph([personSchema(), websiteSchema(), titlePageSchema(item), projectSchema(item)])}
      />
      <article className="sr-only" aria-label={`${item.title} — project details`}>
        <h1>
          {item.title} — by {PERSON.name}
        </h1>
        <p>
          {item.year}
          {item.maturity ? ` · ${item.maturity}` : ""}
          {item.role ? ` · ${item.role}` : ""}
        </p>
        <p>Tags: {item.tags.join(", ")}.</p>
        {item.stack && <p>Stack: {item.stack.join(", ")}.</p>}

        {PERSONAS.map((p) => (
          <section key={p}>
            <h2>{AUDIENCE[p]}</h2>
            <p>{item.copy[p].blurb}</p>
            {item.episodes && (
              <ol>
                {item.episodes.map((ep) => (
                  <li key={ep.title}>
                    <strong>{ep.title}.</strong> {ep.synopsis[p]}
                  </li>
                ))}
              </ol>
            )}
          </section>
        ))}

        {item.deliverables && (
          <section>
            <h2>Deliverables</h2>
            <ul>
              {item.deliverables.map((d) => (
                <li key={d.href}>
                  <a href={d.href} target="_blank" rel="noopener noreferrer">
                    {d.label}
                  </a>
                  {` — ${d.note}`}
                </li>
              ))}
            </ul>
          </section>
        )}

        {item.maturity === "Private build" ? (
          <p>
            This is a private, login-gated build, so there is no public link. Ask for a walkthrough
            at <a href={`mailto:${PERSON.email}`}>{PERSON.email}</a>.
          </p>
        ) : (
          live &&
          !item.deliverables && (
            <p>
              <a href={live} target="_blank" rel="noopener noreferrer">{`Visit ${item.title}`}</a>
            </p>
          )
        )}

        <p>
          More work by {PERSON.name}: <Link href="/browse/recruiter">recruiter view</Link>,{" "}
          <Link href="/browse/developer">developer view</Link>,{" "}
          <Link href="/browse/curious">plain-language view</Link>.
        </p>
      </article>
      <Browse initialItemId={item.id} />
    </>
  );
}
