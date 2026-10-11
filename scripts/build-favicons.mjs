// Builds /public/favicons/* from a 512px master PNG (rendered from the Remotion
// `Favicon` still):
//
//   npx remotion still src/remotion/index.ts Favicon favicon-master.png
//   node scripts/build-favicons.mjs favicon-master.png
import { writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const master = process.argv[2];
if (!master) throw new Error("usage: node scripts/build-favicons.mjs <master.png>");
const out = path.resolve("public/favicons");

const sizes = {
  "favicon-16x16.png": 16,
  "favicon-32x32.png": 32,
  "apple-touch-icon.png": 180,
  "android-chrome-192x192.png": 192,
  "android-chrome-512x512.png": 512,
};
for (const [name, size] of Object.entries(sizes)) {
  await sharp(master).resize(size, size).ensureAlpha().png({ compressionLevel: 9 }).toFile(path.join(out, name));
}

// favicon.ico with embedded PNGs (16/32/48) — valid ICO since Windows Vista.
const icoSizes = [16, 32, 48];
const pngs = await Promise.all(icoSizes.map((s) => sharp(master).resize(s, s).ensureAlpha().png().toBuffer()));
const header = Buffer.alloc(6 + 16 * pngs.length);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(pngs.length, 4);
let offset = header.length;
pngs.forEach((png, i) => {
  const e = 6 + 16 * i;
  header.writeUInt8(icoSizes[i] % 256, e);
  header.writeUInt8(icoSizes[i] % 256, e + 1);
  header.writeUInt16LE(1, e + 4);
  header.writeUInt16LE(32, e + 6);
  header.writeUInt32LE(png.length, e + 8);
  header.writeUInt32LE(offset, e + 12);
  offset += png.length;
});
const ico = Buffer.concat([header, ...pngs]);
await writeFile(path.join(out, "favicon.ico"), ico);
await writeFile(path.resolve("src/app/favicon.ico"), ico);
console.log("favicons written");
