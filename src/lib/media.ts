// Responsive sources for the screenshots in /public. Every raster ships as
// `/name.{avif,webp}` (1600w) plus `/name-640.{avif,webp}` — see
// scripts/optimize-images.mjs. Catalog entries reference the 1600w WebP.
export interface ImageSources {
  avif: string;
  webp: string;
  fallback: string;
}

export function imageSources(src: string): ImageSources | null {
  const m = /^(.*)\.webp$/.exec(src);
  if (!m) return null;
  const base = m[1];
  return {
    avif: `${base}-640.avif 640w, ${base}.avif 1600w`,
    webp: `${base}-640.webp 640w, ${base}.webp 1600w`,
    fallback: src,
  };
}

/** `sizes` hints per art variant. */
export const IMAGE_SIZES = {
  thumb: "(max-width: 768px) 42vw, 360px",
  tile: "(max-width: 768px) 50vw, 33vw",
  banner: "(max-width: 900px) 100vw, 1600px",
} as const;
