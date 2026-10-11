// Renders the Remotion card art and writes optimized AVIF/WebP (1600 + 640):
//   Poster   → /public/poster-<id>{,-640}.{avif,webp}  (cards without a screenshot)
//   Backdrop → /public/spot-<id>{,-640}.{avif,webp}    (billboard spotlight art)
//
//   node scripts/build-posters.mjs                     # everything
//   node scripts/build-posters.mjs skill-ops spot:attck-tagger   # just these
import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import sharp from "sharp";

const ALL = [
  "about-amineddine", "skill-frontend", "skill-backend", "skill-security", "skill-ops",
  "exp-product", "exp-security", "exp-collab", "exp-premium",
  "cert-fullstack", "cert-attack", "cert-filesec", "cert-soc", "cert-founder", "cert-cloud",
];
const SPOTS = ["sigmapack-builder", "attck-tagger"];
const jobs = (process.argv.slice(2).length
  ? process.argv.slice(2)
  : [...ALL, ...SPOTS.map((s) => `spot:${s}`)]
).map((arg) =>
  arg.startsWith("spot:")
    ? { comp: "Backdrop", id: arg.slice(5), out: `spot-${arg.slice(5)}` }
    : { comp: "Poster", id: arg, out: `poster-${arg}` },
);
const tmp = mkdtempSync(path.join(tmpdir(), "posters-"));
// call the CLI entry with node directly — no shell, so paths/JSON survive on Windows
const REMOTION = path.resolve("node_modules/@remotion/cli/remotion-cli.js");

for (const { comp, id, out } of jobs) {
  const png = path.join(tmp, `${out}.png`);
  // props via a JSON file — inline JSON gets mangled by the Windows shell
  const props = path.join(tmp, `${out}.json`);
  writeFileSync(props, JSON.stringify({ id }));
  execFileSync(
    process.execPath,
    [REMOTION, "still", "src/remotion/index.ts", comp, png, `--props=${props}`, "--log=error"],
    { stdio: "inherit" },
  );
  for (const [suffix, width] of [["", 1600], ["-640", 640]]) {
    const base = path.join("public", `${out}${suffix}`);
    await sharp(png).resize({ width }).avif({ quality: 50, effort: 6 }).toFile(`${base}.avif`);
    await sharp(png).resize({ width }).webp({ quality: 74, effort: 6 }).toFile(`${base}.webp`);
  }
  console.log(out);
}
rmSync(tmp, { recursive: true, force: true });
