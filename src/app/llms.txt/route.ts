import { buildLlmsTxt } from "@/lib/llms";

// Static at build time; regenerated from the catalog on every deploy.
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsTxt(false), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
