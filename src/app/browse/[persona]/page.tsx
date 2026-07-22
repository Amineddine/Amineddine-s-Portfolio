import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { catalog } from "@/data/catalog";
import { personas } from "@/data/personas";
import { isPersona } from "@/lib/types";
import Browse from "@/components/netflix/Browse";
import EntityContent from "@/components/seo/EntityContent";
import JsonLd from "@/components/seo/JsonLd";
import {
  breadcrumbSchema,
  graph,
  personSchema,
  profilePageSchema,
  projectSchema,
  websiteSchema,
} from "@/lib/seo";

export function generateStaticParams() {
  return [{ persona: "recruiter" }, { persona: "developer" }, { persona: "stalker" }];
}

// Unique, keyword-aware title + description per persona view, each canonicalized
// to its own route so the three narrations don't compete as duplicate content.
const META: Record<
  string,
  { title: string; description: string }
> = {
  recruiter: {
    title:
      "Hire Amineddine Znin — Freelance Software Developer & Cybersecurity Builder (Morocco)",
    description:
      "Morocco-based freelance software developer available globally. Production websites in Next.js/React/TypeScript and security-aware systems, delivered polished and on time. See the work and get in touch.",
  },
  developer: {
    title:
      "Amineddine Znin for Engineers — Full-Stack Web & Detection Engineering",
    description:
      "The engineering cut: React/Next.js/TypeScript front-end, Python/FastAPI back-end, and detection engineering with MITRE ATT&CK, Sigma and anomaly detection. Architecture, tradeoffs and open-source security tooling.",
  },
  stalker: {
    title: "Get to Know Amineddine Znin — Developer & Security Builder",
    description:
      "The plain-language story: a Morocco-based developer who builds nice websites and security tools that catch the weird stuff. No buzzwords — just the work and the why.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ persona: string }>;
}): Promise<Metadata> {
  const { persona } = await params;
  if (!isPersona(persona)) return {};
  const meta = META[persona];
  const path = `/browse/${persona}`;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: path },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: path,
      type: "profile",
    },
    twitter: { title: meta.title, description: meta.description },
  };
}

export default async function BrowsePage({
  params,
}: {
  params: Promise<{ persona: string }>;
}) {
  const { persona } = await params;
  if (!isPersona(persona)) notFound();

  const def = personas[persona];
  const projects = catalog.filter((item) => item.type === "project");
  const structuredData = graph([
    personSchema(),
    websiteSchema(),
    profilePageSchema(`/browse/${persona}`),
    breadcrumbSchema(def.label, persona),
    ...projects.map(projectSchema),
  ]);

  return (
    <>
      <JsonLd data={structuredData} />
      <EntityContent persona={persona} />
      <Browse persona={persona} />
    </>
  );
}
