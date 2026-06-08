"use client";

import { usePersona } from "@/context/PersonaContext";
import { GithubIcon, ExternalIcon } from "./icons";

const contactLinks = [
  { label: "Email", value: "amineeddine006@gmail.com", href: "mailto:amineeddine006@gmail.com" },
  { label: "Phone", value: "+212 766 171 159", href: "tel:+212766171159" },
  { label: "Phone", value: "+212 663 375 164", href: "tel:+212663375164" },
  { label: "GitHub", value: "github.com/Amineddine", href: "https://github.com/Amineddine" },
  { label: "LinkedIn", value: "amineddine-znin-z999", href: "https://www.linkedin.com/in/amineddine-znin-z999" },
];

const headings: Record<string, string> = {
  recruiter: "Ready when you are.",
  developer: "Let's talk shop.",
  stalker: "Come say hi.",
};

const subs: Record<string, string> = {
  recruiter:
    "Available globally for focused freelance work with a premium finish. Hand me the brief — I'll hand you something shipped.",
  developer:
    "Open to interesting builds: web platforms, security tooling, the gnarly stuff. Ping me and we'll get into the details.",
  stalker:
    "I'm based in Morocco, I work with people everywhere, and I reply to nice messages. Don't be a stranger.",
};

export default function ContactFooter() {
  const { persona } = usePersona();
  const key = persona ?? "developer";

  return (
    <footer id="contact" className="relative mt-12 border-t border-white/10 bg-[var(--nf-bg-deep)] px-4 py-14 md:px-[clamp(1rem,4vw,3.75rem)]">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-nf-red">Open channel</p>
          <h2 className="mt-3 font-display text-4xl text-white sm:text-5xl md:text-6xl">
            {headings[key]}
          </h2>
          <p className="mt-4 max-w-md text-[#b3b3b3]">{subs[key]}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Amineddine Znin", "Morocco based", "Available globally", "Web + security"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-2.5">
          <a
            href="mailto:amineeddine006@gmail.com"
            className="flex items-center justify-between rounded-md bg-white px-5 py-3.5 font-semibold text-black transition hover:bg-white/85"
          >
            <span className="truncate">amineeddine006@gmail.com</span>
            <span className="text-sm">Contact →</span>
          </a>
          {contactLinks.map((c) => (
            <a
              key={`${c.label}-${c.value}`}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-nf-card px-5 py-3 transition hover:border-white/30 hover:bg-nf-card-hover"
            >
              <span className="text-xs uppercase tracking-wider text-white/45">{c.label}</span>
              <span className="flex items-center gap-2 truncate text-sm text-white/85">
                {c.label === "GitHub" && <GithubIcon width={15} height={15} />}
                {c.value}
                {c.href.startsWith("http") && <ExternalIcon width={13} height={13} className="text-white/40" />}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
        <span>© {new Date().getFullYear()} Amineddine Znin. A Netflix-style portfolio.</span>
        <span>Software developer · Freelancer · Cybersecurity builder · Morocco</span>
      </div>
    </footer>
  );
}
