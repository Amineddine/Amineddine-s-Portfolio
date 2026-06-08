import type { CatalogItem } from "@/lib/types";

type Variant = "thumb" | "banner" | "tile";

function initials(title: string): string {
  const words = title.replace(/[^a-zA-Z0-9 -]/g, "").split(/[\s-]+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

const typeLabel: Record<CatalogItem["type"], string> = {
  project: "Project",
  skill: "Skill",
  experience: "Experience",
  certification: "Certification",
  about: "Profile",
};

/**
 * Generated artwork that stands in until real images are dropped in.
 * If `item.image` (thumb/tile) or `item.banner` (banner) exists it's used as a
 * cover photo; otherwise a per-item gradient + initials placeholder renders so
 * the layout is always visually complete.
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
  const [from, to] = item.accent;
  const src = variant === "banner" ? item.banner : item.image;

  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={item.title}
        className={`h-full w-full object-cover ${className}`}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
      }}
      aria-label={item.title}
      role="img"
    >
      {/* directional sheen */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 15% 0%, rgba(255,255,255,0.22), transparent 55%)",
        }}
      />
      {/* grain */}
      <div className="art-grain absolute inset-0 opacity-50" />

      {variant === "banner" ? (
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
          <span
            className="font-display leading-none text-white/12 absolute right-4 top-2 select-none"
            style={{ fontSize: "clamp(5rem, 22vw, 16rem)" }}
            aria-hidden
          >
            {initials(item.title)}
          </span>
        </div>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
          <span
            className="font-display leading-none text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
            style={{ fontSize: variant === "tile" ? "clamp(2.5rem,7vw,4rem)" : "clamp(1.8rem,5vw,2.6rem)" }}
          >
            {initials(item.title)}
          </span>
          {variant === "thumb" && (
            <span className="mt-1 max-w-full truncate px-2 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/70">
              {typeLabel[item.type]}
            </span>
          )}
        </div>
      )}

      {/* bottom legibility scrim for thumbs */}
      {variant === "thumb" && (
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 to-transparent" />
      )}
    </div>
  );
}
