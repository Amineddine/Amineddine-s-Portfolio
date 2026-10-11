import type { MetadataRoute } from "next";
import { titlePageItems } from "@/data/catalog";
import { PERSONAS } from "@/lib/types";
import { SITE_URL, abs } from "@/lib/seo";

// Emitted at /sitemap.xml. Home, the three persona routes, and one crawlable
// title page per project (with its screenshot as an image entry).
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...PERSONAS.map((persona) => ({
      url: `${SITE_URL}/browse/${persona}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...titlePageItems.map((item) => ({
      url: `${SITE_URL}/title/${item.id}`,
      lastModified: item.releasedAt ? new Date(`${item.releasedAt}-01T00:00:00Z`) : lastModified,
      changeFrequency: "yearly" as const,
      priority: item.releasedAt ? 0.7 : 0.6,
      images: [
        ...(item.image ? [abs(item.image)] : []),
        ...(item.deliverables?.map((d) => abs(d.image)) ?? []),
      ].filter((src, i, all) => all.indexOf(src) === i),
    })),
  ];
}
