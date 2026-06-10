"use client";

import { usePersona } from "@/context/PersonaContext";
import { t } from "@/data/i18n";
import { GithubIcon, ExternalIcon } from "./icons";

const contactLinks = [
  { label: "Email", value: "amineeddine006@gmail.com", href: "mailto:amineeddine006@gmail.com" },
  { label: "Phone", value: "+212 766 171 159", href: "tel:+212766171159" },
  { label: "Phone", value: "+212 663 375 164", href: "tel:+212663375164" },
  { label: "GitHub", value: "github.com/Amineddine", href: "https://github.com/Amineddine" },
  { label: "LinkedIn", value: "amineddine-znin-z999", href: "https://www.linkedin.com/in/amineddine-znin-z999" },
];

export default function ContactFooter() {
  const { persona, locale } = usePersona();
  const key = persona ?? "developer";
  const strings = t(locale);
  const c = strings.contact;

  const displayLabel = (label: string) => {
    if (label === "Email") return c.labels.email;
    if (label === "Phone") return c.labels.phone;
    return label;
  };

  return (
    <footer id="contact" className="relative mt-12 border-t border-white/10 bg-[var(--nf-bg-deep)] px-4 py-14 md:px-[clamp(1rem,4vw,3.75rem)]">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-nf-red">{c.openChannel}</p>
          <h2 className="mt-3 font-display text-4xl text-white sm:text-5xl md:text-6xl">
            {c.headings[key]}
          </h2>
          <p className="mt-4 max-w-md text-[#b3b3b3]">{c.subs[key]}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {c.pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70"
              >
                {pill}
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
            <span className="text-sm">{c.cta}</span>
          </a>
          {contactLinks.map((link) => (
            <a
              key={`${link.label}-${link.value}`}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-nf-card px-5 py-3 transition hover:border-white/30 hover:bg-nf-card-hover"
            >
              <span className="text-xs uppercase tracking-wider text-white/45">{displayLabel(link.label)}</span>
              <span className="flex items-center gap-2 truncate text-sm text-white/85">
                {link.label === "GitHub" && <GithubIcon width={15} height={15} />}
                {link.value}
                {link.href.startsWith("http") && <ExternalIcon width={13} height={13} className="text-white/40" />}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
        <span>© {new Date().getFullYear()} Amineddine Znin. {c.footerNote}</span>
        <span>{c.footerRole}</span>
      </div>
    </footer>
  );
}
