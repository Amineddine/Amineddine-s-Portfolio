import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Emitted at /robots.txt. Allows all standard crawlers AND explicitly welcomes
// the major AI answer-engine / training crawlers — GEO visibility depends on
// these bots being allowed to read the site.
const AI_CRAWLERS = [
  "GPTBot", // OpenAI / ChatGPT
  "OAI-SearchBot", // OpenAI search
  "ChatGPT-User", // ChatGPT browsing
  "ClaudeBot", // Anthropic
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot", // Perplexity
  "Perplexity-User",
  "Google-Extended", // Google AI / Gemini / AI Overviews
  "Applebot-Extended", // Apple Intelligence
  "CCBot", // Common Crawl (feeds many LLMs)
  "Amazonbot",
  "cohere-ai",
  "Meta-ExternalAgent",
  "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
