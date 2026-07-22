import type { CatalogItem } from "@/lib/types";

type Variant = "thumb" | "banner" | "tile";

function hashId(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i += 1) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

const categoryTag: Record<CatalogItem["category"], string> = {
  web: "Web",
  cybersecurity: "Security",
  ops: "Systems",
  profile: "Profile",
};

const typeTag: Record<CatalogItem["type"], string> = {
  project: "Project",
  skill: "Skill",
  experience: "Principle",
  certification: "Credential",
  about: "Profile",
};

/** Per-item geometric motif so no two posters read the same. */
function Motif({ idx, color }: { idx: number; color: string }) {
  if (idx === 0) {
    // concentric rings anchored top-right
    return (
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 200"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        {[18, 36, 56, 78, 102, 128].map((r, i) => (
          <circle
            key={r}
            cx="172"
            cy="34"
            r={r}
            stroke={color}
            strokeWidth="0.7"
            opacity={Math.max(0.05, 0.26 - i * 0.035)}
          />
        ))}
      </svg>
    );
  }
  if (idx === 1) {
    // dot matrix fading across the diagonal
    return (
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(${color} 1.1px, transparent 1.2px)`,
          backgroundSize: "17px 17px",
          opacity: 0.2,
          maskImage: "linear-gradient(125deg, black, transparent 72%)",
          WebkitMaskImage: "linear-gradient(125deg, black, transparent 72%)",
        }}
      />
    );
  }
  if (idx === 2) {
    // scanlines (reads nicely for the security work)
    return (
      <>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, ${color}22 0px, ${color}22 1px, transparent 1px, transparent 6px)`,
            opacity: 0.55,
            maskImage: "linear-gradient(180deg, transparent, black 60%)",
            WebkitMaskImage: "linear-gradient(180deg, transparent, black 60%)",
          }}
        />
        <div
          className="absolute right-5 top-5 h-2 w-2 rounded-full"
          style={{ background: color, boxShadow: `0 0 14px ${color}` }}
        />
      </>
    );
  }
  // diagonal hatch
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `repeating-linear-gradient(38deg, transparent 0px, transparent 17px, ${color}2b 17px, ${color}2b 19px)`,
        opacity: 0.5,
        maskImage: "radial-gradient(120% 120% at 0% 100%, black, transparent 75%)",
        WebkitMaskImage: "radial-gradient(120% 120% at 0% 100%, black, transparent 75%)",
      }}
    />
  );
}

/**
 * Generated artwork that stands in until real images / video are provided.
 * Uses a real image (`item.image`/`item.banner`) when present; otherwise renders
 * an editorial poster — dark base, a per-item accent motif, and the full title
 * set in the display face (no more generic gradient-with-initials look).
 */
export default function PlaceholderArt({
  item,
  variant = "thumb",
  className = "",
}: {
  item: CatalogItem;
  variant?: Variant;
  className?: string;
}) {
  const src = variant === "banner" ? item.banner : item.image;

  if (src) {
    // Certificates ship as light, paper-colored scans. On thumbnails we mat them
    // on a dark frame (contain + accent glow) so they read as framed credentials
    // instead of bright rectangles fighting the dark UI. The banner stays full-bleed.
    if (item.type === "certification" && variant !== "banner") {
      return (
        <div
          className={`relative h-full w-full overflow-hidden ${className}`}
          role="img"
          aria-label={item.title}
          style={{
            background: "linear-gradient(158deg, #161618 0%, #0c0c0e 100%)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(80% 70% at 50% 0%, ${item.accent[0]}33, transparent 65%)`,
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={`${item.title}${item.issuer ? ` certificate issued by ${item.issuer}` : " certificate"}`}
            className="absolute inset-0 h-full w-full object-contain p-3"
            loading="lazy"
            decoding="async"
          />
          <div className="art-grain pointer-events-none absolute inset-0 opacity-20" />
        </div>
      );
    }
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={`${item.title}${item.role ? ` — ${item.role}` : ""}`}
        className={`h-full w-full object-cover ${className}`}
        loading="lazy"
        decoding="async"
      />
    );
  }

  const [accent] = item.accent;
  const idx = hashId(item.id) % 4;

  const pad =
    variant === "banner" ? "p-7 md:p-10" : variant === "tile" ? "p-5" : "p-3.5";
  const titleSize =
    variant === "banner"
      ? "clamp(2rem, 5.5vw, 3.8rem)"
      : variant === "tile"
        ? "clamp(1.4rem, 4vw, 2.1rem)"
        : "clamp(1rem, 3.3vw, 1.5rem)";
  const tagSize = variant === "banner" ? "0.72rem" : "0.58rem";

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      role="img"
      aria-label={item.title}
      style={{
        background:
          "linear-gradient(158deg, #18181b 0%, #0d0d0f 58%, #08080a 100%)",
      }}
    >
      {/* accent corner glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(78% 70% at 86% 12%, ${accent}55, transparent 60%)`,
        }}
      />
      <Motif idx={idx} color={accent} />
      <div className="art-grain absolute inset-0 opacity-40" />
      {/* base legibility floor */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className={`absolute inset-0 flex flex-col ${pad}`}>
        <div
          className="flex items-center gap-2 font-mono uppercase tracking-[0.18em] text-white/70"
          style={{ fontSize: tagSize }}
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: accent, boxShadow: `0 0 10px ${accent}` }}
          />
          {typeTag[item.type]}
          <span className="text-white/25">/</span>
          {categoryTag[item.category]}
        </div>

        <div className="mt-auto">
          <h3
            className="font-display uppercase leading-[0.92] text-white"
            style={{ fontSize: titleSize, textShadow: "0 2px 14px rgba(0,0,0,0.5)" }}
          >
            {item.title}
          </h3>
          <div className="mt-2 flex items-center gap-2.5">
            <span
              className="h-px"
              style={{ width: variant === "banner" ? 44 : 26, background: accent }}
            />
            <span
              className="font-mono uppercase tracking-[0.14em] text-white/55"
              style={{ fontSize: tagSize }}
            >
              {item.maturity ?? item.year}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
