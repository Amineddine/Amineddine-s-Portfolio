import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Emitted at /sitemap.xml. Covers the home page and the three persona routes.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const personas = ["recruiter", "developer", "stalker"];
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...personas.map((persona) => ({
      url: `${SITE_URL}/browse/${persona}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
