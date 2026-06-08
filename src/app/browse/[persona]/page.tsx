import { notFound } from "next/navigation";
import { isPersona } from "@/lib/types";
import Browse from "@/components/netflix/Browse";

export function generateStaticParams() {
  return [{ persona: "recruiter" }, { persona: "developer" }, { persona: "stalker" }];
}

export default async function BrowsePage({
  params,
}: {
  params: Promise<{ persona: string }>;
}) {
  const { persona } = await params;
  if (!isPersona(persona)) notFound();
  return <Browse persona={persona} />;
}
