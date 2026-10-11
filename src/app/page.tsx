import type { Metadata } from "next";
import HomeExperience from "@/components/netflix/HomeExperience";
import EntityContent from "@/components/seo/EntityContent";
import JsonLd from "@/components/seo/JsonLd";
import { catalog } from "@/data/catalog";
import {
  graph,
  personSchema,
  profilePageSchema,
  projectSchema,
  websiteSchema,
  workListSchema,
} from "@/lib/seo";

const projects = catalog.filter((item) => item.type === "project");

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Server component. Renders the crawlable content layer + JSON-LD into the raw
// HTML, then mounts the interactive (client) entry experience on top of it.
export default function HomePage() {
  return (
    <>
      <JsonLd
        data={graph([
          personSchema(),
          websiteSchema(),
          profilePageSchema("/"),
          workListSchema(projects),
          ...projects.map(projectSchema),
        ])}
      />
      <EntityContent />
      <HomeExperience />
    </>
  );
}
