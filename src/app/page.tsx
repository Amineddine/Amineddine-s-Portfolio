import type { Metadata } from "next";
import HomeExperience from "@/components/netflix/HomeExperience";
import EntityContent from "@/components/seo/EntityContent";
import JsonLd from "@/components/seo/JsonLd";
import { graph, personSchema, profilePageSchema, websiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Server component. Renders the crawlable content layer + JSON-LD into the raw
// HTML, then mounts the interactive (client) entry experience on top of it.
export default function HomePage() {
  return (
    <>
      <JsonLd
        data={graph([personSchema(), websiteSchema(), profilePageSchema("/")])}
      />
      <EntityContent />
      <HomeExperience />
    </>
  );
}
