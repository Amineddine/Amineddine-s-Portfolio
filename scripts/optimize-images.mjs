// Converts raster screenshots in /public to kebab-case AVIF + WebP in two
// widths (1600px for banners, 640px for cards) and removes the source PNG/JPG.
//
//   node scripts/optimize-images.mjs
//
// Add new screenshots to RENAMES (or name them kebab-case already) and re-run.
// Favicons and og-image are intentionally left alone — they need PNG/JPG.
import { readdir, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC = path.resolve("public");
const WIDTHS = [
  { suffix: "", width: 1600 },
  { suffix: "-640", width: 640 },
];

/** source filename → kebab-case output basename */
const RENAMES = {
  "tawada desert camp preview.png": "tawada-desert-camp",
  "morocco transit preview.png": "morocco-transit",
  "mnq assistant bot preview.png": "mnq-trading-assistant",
  "moroccan mirage new preview.png": "moroccan-mirage",
  "visitare il marocco new preview.png": "visitare-il-marocco",
  "mahalfilm new preview.png": "mahal-productions",
  "groupescolairebadry.png": "groupe-scolaire-badry",
  "riadjabador.png": "riad-jabador",
  "andara excursions.png": "palais-andara-excursions",
  "andara menu.png": "palais-andara-menu",
  "izil morocco.png": "izil-morocco",
  "weframemedia-management.png": "wfm-management",
  "weframe-media-preview.png": "weframe-media",
  "the-seven-saints-preview.png": "the-seven-saints",
};

const SKIP = new Set(["og-image.png", "og-image.jpg"]);

function kebab(name) {
  return name
    .replace(/\.[^.]+$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const files = (await readdir(PUBLIC)).filter(
  (f) => /\.(png|jpe?g)$/i.test(f) && !SKIP.has(f),
);

for (const file of files) {
  const base = RENAMES[file] ?? kebab(file);
  const src = path.join(PUBLIC, file);
  for (const { suffix, width } of WIDTHS) {
    const pipeline = () =>
      sharp(src).resize({ width, withoutEnlargement: true });
    await pipeline()
      .avif({ quality: 50, effort: 6 })
      .toFile(path.join(PUBLIC, `${base}${suffix}.avif`));
    await pipeline()
      .webp({ quality: 72, effort: 6 })
      .toFile(path.join(PUBLIC, `${base}${suffix}.webp`));
  }
  await unlink(src);
  console.log(`${file} → ${base}{,-640}.{avif,webp}`);
}
