import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { loadFont as loadBebas } from "@remotion/google-fonts/BebasNeue";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { loadFont as loadMono } from "@remotion/google-fonts/JetBrainsMono";

// ───────────────────────────────────────────────────────────────────────────
// Card art for catalog items that have no real screenshot (bio, skills,
// principles, credentials). 1600×900 stills, one per id:
//   npx remotion still src/remotion/index.ts Poster out.png --props='{"id":"skill-frontend"}'
// (scripts/build-posters.mjs renders + optimizes the whole set.)
// Credentials get a stylised seal — deliberately NOT a mock certificate.
// ───────────────────────────────────────────────────────────────────────────
const { fontFamily: BEBAS } = loadBebas();
const { fontFamily: SANS } = loadInter("normal", { weights: ["500", "600", "700"], subsets: ["latin"] });
const { fontFamily: MONO } = loadMono("normal", { weights: ["400"], subsets: ["latin"] });

const RED = "#E50914";
const INK = "#0b0b0b";
const DIM = "rgba(255,255,255,0.62)";

type Kind = "bio" | "skill" | "principle" | "credential";
interface Spec {
  kind: Kind;
  title: string;
  tags: string[];
  issuer?: string;
  motif: React.FC;
}

export const POSTER_IDS = [
  "about-amineddine",
  "skill-frontend",
  "skill-backend",
  "skill-security",
  "skill-ops",
  "exp-product",
  "exp-security",
  "exp-collab",
  "exp-premium",
  "cert-fullstack",
  "cert-attack",
  "cert-filesec",
  "cert-soc",
  "cert-founder",
  "cert-cloud",
] as const;

const KIND_LABEL: Record<Kind, string> = {
  bio: "Profile",
  skill: "Skill",
  principle: "How I work",
  credential: "Credential · 2025",
};

// ── motifs ──────────────────────────────────────────────────────────────────
const Panel: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <div
    style={{
      background: "#161616",
      border: "1px solid rgba(255,255,255,0.09)",
      borderRadius: 16,
      boxShadow: "0 40px 100px rgba(0,0,0,0.65)",
      overflow: "hidden",
      ...style,
    }}
  >
    {children}
  </div>
);

const Bar: React.FC<{ w: number | string; h?: number; c?: string; mt?: number }> = ({ w, h = 14, c = "rgba(255,255,255,0.14)", mt = 0 }) => (
  <div style={{ width: w, height: h, borderRadius: h / 2, background: c, marginTop: mt }} />
);

const Code: React.FC<{ lines: [string, string?][] }> = ({ lines }) => (
  <div style={{ fontFamily: MONO, fontSize: 23, lineHeight: 1.6, padding: "22px 26px" }}>
    {lines.map(([t, c], i) => (
      <div key={i} style={{ color: c ?? DIM, whiteSpace: "pre" }}>
        {t}
      </div>
    ))}
  </div>
);

const FrontendMotif: React.FC = () => (
  <Panel style={{ width: 640 }}>
    <div style={{ height: 40, background: "#1f1f1f", display: "flex", alignItems: "center", gap: 9, padding: "0 16px" }}>
      {[0, 1, 2].map((i) => (
        <span key={i} style={{ width: 11, height: 11, borderRadius: 6, background: i === 0 ? RED : "rgba(255,255,255,0.2)" }} />
      ))}
    </div>
    <div style={{ padding: 26, display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 18 }}>
      <div style={{ gridColumn: "1 / 3", height: 150, borderRadius: 10, background: "linear-gradient(120deg, #2a0a0c, #3a0d10 60%, #1a1a1a)", padding: 22 }}>
        <Bar w={260} h={22} c="rgba(255,255,255,0.85)" />
        <Bar w={180} mt={12} />
        <Bar w={110} h={30} c={RED} mt={22} />
      </div>
      {[0, 1].map((i) => (
        <div key={i} style={{ height: 120, borderRadius: 10, background: "#202020", padding: 16 }}>
          <Bar w="70%" />
          <Bar w="45%" mt={10} />
        </div>
      ))}
    </div>
    <Code lines={[["<Hero title={tagline} />", "#fff"], ["<Row items={work} lazy />"]]} />
  </Panel>
);

const BackendMotif: React.FC = () => (
  <Panel style={{ width: 640 }}>
    <div style={{ padding: "14px 22px", fontFamily: MONO, fontSize: 18, color: DIM, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      api · service log
    </div>
    <Code
      lines={[
        ["GET   /health            200   3ms", "#7ee2a8"],
        ["POST  /quote             201  41ms", "#7ee2a8"],
        ["GET   /tours?region=…    200  18ms", "#7ee2a8"],
        ["POST  /enrich            202  27ms", "#7ee2a8"],
        ["GET   /admin             401   2ms", RED],
        [""],
        ["$ pytest -q", "#fff"],
        ["...................... passed"],
      ]}
    />
  </Panel>
);

const SecurityMotif: React.FC = () => {
  const lit = new Set(["0-2", "1-1", "2-3", "3-2", "4-4", "5-1", "6-3", "7-0", "8-2"]);
  return (
    <div style={{ width: 640 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(9, 1fr)", gap: 7 }}>
        {Array.from({ length: 45 }, (_, i) => {
          const key = `${i % 9}-${Math.floor(i / 9)}`;
          return (
            <div
              key={i}
              style={{
                height: 34,
                borderRadius: 5,
                background: lit.has(key) ? RED : "rgba(255,255,255,0.06)",
                boxShadow: lit.has(key) ? "0 0 18px rgba(229,9,20,0.5)" : "none",
              }}
            />
          );
        })}
      </div>
      <Panel style={{ marginTop: 22 }}>
        <Code
          lines={[
            ["title: Encoded PowerShell launch", "#fff"],
            ["tags: [attack.execution, attack.t1059.001]"],
            ["detection:"],
            ["  selection: { Image|endswith: powershell.exe }"],
            ["level: high", RED],
          ]}
        />
      </Panel>
    </div>
  );
};

const OpsMotif: React.FC = () => {
  const steps = ["commit", "lint + test", "build image", "scan", "deploy", "observe"];
  return (
    <div style={{ width: 640, display: "flex", flexDirection: "column", gap: 14 }}>
      {steps.map((s, i) => (
        <div key={s} style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              border: `2px solid ${i < 5 ? RED : "rgba(255,255,255,0.3)"}`,
              background: i < 5 ? "rgba(229,9,20,0.18)" : "transparent",
              color: "#fff",
              fontFamily: SANS,
              fontWeight: 700,
              fontSize: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {i < 5 ? "✓" : "•"}
          </div>
          <Panel style={{ flex: 1, padding: "14px 20px", borderRadius: 10 }}>
            <span style={{ fontFamily: MONO, fontSize: 22, color: i < 5 ? "#fff" : DIM }}>{s}</span>
          </Panel>
        </div>
      ))}
    </div>
  );
};

const ProductMotif: React.FC = () => (
  <Panel style={{ width: 600, padding: 30 }}>
    <Bar w="62%" h={34} c="rgba(255,255,255,0.85)" />
    <Bar w="40%" h={16} mt={16} />
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginTop: 30 }}>
      {[0, 1, 2].map((i) => (
        <div key={i} style={{ height: 130, borderRadius: 10, background: i === 0 ? "rgba(229,9,20,0.25)" : "#222", border: i === 0 ? `1px solid ${RED}` : "none" }} />
      ))}
    </div>
    <div style={{ marginTop: 26, display: "flex", gap: 10, fontFamily: MONO, fontSize: 19, color: DIM }}>
      <span style={{ color: RED }}>H1</span>→<span>H2</span>→<span>body</span>→<span>action</span>
    </div>
  </Panel>
);

const ShieldMotif: React.FC = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
    <svg width={260} height={300} viewBox="0 0 260 300">
      <path d="M130 14 L238 56 V140 C238 214 186 262 130 286 C74 262 22 214 22 140 V56 Z" fill="rgba(229,9,20,0.12)" stroke={RED} strokeWidth={8} />
      <path d="M84 150 L118 184 L180 116" fill="none" stroke="#fff" strokeWidth={14} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {["Least privilege", "Validated input", "Secrets out of code", "Headers + CSP", "Reviewed dependencies"].map((t) => (
        <div key={t} style={{ fontFamily: SANS, fontWeight: 600, fontSize: 26, color: "#fff", display: "flex", gap: 12, alignItems: "center" }}>
          <span style={{ color: RED }}>■</span>
          {t}
        </div>
      ))}
    </div>
  </div>
);

const CollabMotif: React.FC = () => {
  const days = ["MON", "TUE", "WED", "THU", "FRI"];
  const notes = ["Kick-off · scope agreed", "Draft shared", "Feedback in", "Tradeoff call", "Shipped + notes"];
  return (
    <div style={{ width: 640, display: "flex", flexDirection: "column", gap: 12 }}>
      {days.map((d, i) => (
        <div key={d} style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <span style={{ width: 70, fontFamily: BEBAS, fontSize: 32, color: i === 4 ? RED : DIM }}>{d}</span>
          <Panel style={{ flex: 1, padding: "14px 20px", borderRadius: 12, borderColor: i === 4 ? RED : undefined }}>
            <span style={{ fontFamily: SANS, fontWeight: 600, fontSize: 23, color: "#fff" }}>{notes[i]}</span>
          </Panel>
        </div>
      ))}
    </div>
  );
};

const PremiumMotif: React.FC = () => (
  <Panel style={{ width: 620, padding: 30 }}>
    <svg width={560} height={300} viewBox="0 0 560 300">
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={0} x2={560} y1={i * 70 + 10} y2={i * 70 + 10} stroke="rgba(255,255,255,0.06)" />
      ))}
      <path d="M10 290 C 200 290, 180 20, 550 14" fill="none" stroke={RED} strokeWidth={7} />
      <line x1={10} y1={290} x2={200} y2={290} stroke="rgba(255,255,255,0.35)" strokeDasharray="6 8" strokeWidth={3} />
      <line x1={550} y1={14} x2={180} y2={20} stroke="rgba(255,255,255,0.35)" strokeDasharray="6 8" strokeWidth={3} />
      <circle cx={200} cy={290} r={12} fill="#fff" />
      <circle cx={180} cy={20} r={12} fill="#fff" />
      <circle cx={10} cy={290} r={9} fill={RED} />
      <circle cx={550} cy={14} r={9} fill={RED} />
    </svg>
    <div style={{ fontFamily: MONO, fontSize: 21, color: DIM, marginTop: 14 }}>cubic-bezier(0.16, 1, 0.3, 1)</div>
  </Panel>
);

const Seal: React.FC<{ issuer?: string; title: string }> = ({ issuer, title }) => {
  const ring = `${(issuer ?? title).toUpperCase()} · CREDENTIAL · 2025 ·`;
  return (
    <svg width={420} height={420} viewBox="0 0 420 420">
      <defs>
        <path id="ring" d="M210 210 m-160 0 a160 160 0 1 1 320 0 a160 160 0 1 1 -320 0" />
      </defs>
      <circle cx={210} cy={210} r={200} fill="rgba(229,9,20,0.08)" stroke={RED} strokeWidth={6} />
      <circle cx={210} cy={210} r={128} fill={INK} stroke="rgba(255,255,255,0.25)" strokeWidth={3} />
      {/* fitted to exactly one lap of the ring (2πr ≈ 1005) so it never overlaps */}
      <text fontFamily={SANS} fontWeight={700} fontSize={24} fill="#fff">
        <textPath href="#ring" textLength={995} lengthAdjust="spacing">
          {ring}
        </textPath>
      </text>
      <text x={210} y={232} textAnchor="middle" fontFamily={BEBAS} fontSize={92} fill={RED}>
        AZ
      </text>
      <text x={210} y={276} textAnchor="middle" fontFamily={SANS} fontWeight={600} fontSize={22} letterSpacing={6} fill={DIM}>
        2025
      </text>
    </svg>
  );
};

const SHOTS = ["tawada-desert-camp", "mnq-trading-assistant", "morocco-transit", "sigmapack-builder", "riad-jabador", "attck-tagger"];
const BioMotif: React.FC = () => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 300px)", gap: 16, transform: "perspective(1200px) rotateY(-16deg) rotateZ(3deg)" }}>
    {SHOTS.map((f) => (
      <div key={f} style={{ width: 300, height: 176, borderRadius: 10, overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.6)", outline: "1px solid rgba(255,255,255,0.1)" }}>
        <Img src={staticFile(`${f}-640.webp`)} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
      </div>
    ))}
  </div>
);

// ── content ─────────────────────────────────────────────────────────────────
const credential = (title: string, tags: string[], issuer?: string): Spec => ({
  kind: "credential",
  title,
  tags,
  issuer,
  motif: () => <Seal issuer={issuer} title={title} />,
});

const SPECS: Record<(typeof POSTER_IDS)[number], Spec> = {
  "about-amineddine": { kind: "bio", title: "Amineddine Znin", tags: ["Web", "Security", "AI Automation", "Morocco · Global"], motif: BioMotif },
  "skill-frontend": { kind: "skill", title: "Frontend Delivery", tags: ["React", "Next.js", "TypeScript", "Vite", "Tailwind CSS"], motif: FrontendMotif },
  "skill-backend": { kind: "skill", title: "Application Engineering", tags: ["Node.js", "Python", "FastAPI", "REST APIs"], motif: BackendMotif },
  "skill-security": { kind: "skill", title: "Security Systems", tags: ["MITRE ATT&CK", "Sigma", "Alert Enrichment", "SOC Workflows"], motif: SecurityMotif },
  "skill-ops": { kind: "skill", title: "Research & Operations", tags: ["Docker", "Linux", "CI/CD", "Observability"], motif: OpsMotif },
  "exp-product": { kind: "principle", title: "Product-Level Thinking", tags: ["Hierarchy", "Structure", "Maintainability"], motif: ProductMotif },
  "exp-security": { kind: "principle", title: "Security-Aware Delivery", tags: ["Threat Modeling", "Hardening", "Safer Defaults"], motif: ShieldMotif },
  "exp-collab": { kind: "principle", title: "Reliable Collaboration", tags: ["Communication", "Feedback Loops", "Tradeoffs"], motif: CollabMotif },
  "exp-premium": { kind: "principle", title: "Premium Execution", tags: ["Polish", "Motion", "Finishing"], motif: PremiumMotif },
  "cert-fullstack": credential("Fullstack Engineering", ["Frontend", "Backend", "Software Engineering"], "ALX Morocco"),
  "cert-attack": credential("MITRE ATT&CK Defender", ["Blue Team", "Detection", "ATT&CK"]),
  "cert-filesec": credential("File Security Associate", ["File Security", "Threat Prevention"], "OPSWAT Academy"),
  "cert-soc": credential("SOC Analyst — Blue Team", ["SOC", "Incident Response", "Monitoring"]),
  "cert-founder": credential("Founder Certificate", ["Entrepreneurship", "Product", "Venture"], "ALX Ventures"),
  "cert-cloud": credential("Cloud & DevOps Fundamentals", ["Docker", "CI/CD", "Cloud"]),
};

export const Poster: React.FC<{ id: string }> = ({ id }) => {
  const spec = SPECS[id as (typeof POSTER_IDS)[number]] ?? SPECS["about-amineddine"];
  const Motif = spec.motif;
  const long = spec.title.length > 20;
  return (
    <AbsoluteFill style={{ backgroundColor: INK, overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          background: "radial-gradient(55% 80% at 82% 45%, rgba(229,9,20,0.22), transparent 70%), radial-gradient(40% 50% at 0% 100%, rgba(229,9,20,0.12), transparent 70%)",
        }}
      />
      <AbsoluteFill
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(70% 80% at 75% 50%, black, transparent)",
        }}
      />

      {/* motif, right side */}
      <div style={{ position: "absolute", right: 90, top: 0, bottom: 0, display: "flex", alignItems: "center" }}>
        <Motif />
      </div>
      <AbsoluteFill style={{ background: `linear-gradient(90deg, ${INK} 0%, rgba(11,11,11,0.92) 34%, rgba(11,11,11,0.2) 58%, transparent 70%)` }} />

      {/* text, left side */}
      <div style={{ position: "absolute", left: 90, top: 96, display: "flex", alignItems: "center", gap: 18 }}>
        <span style={{ fontFamily: BEBAS, fontSize: 64, color: RED, lineHeight: 0.8 }}>AZ</span>
        <span style={{ fontFamily: SANS, fontWeight: 700, fontSize: 24, letterSpacing: "0.3em", color: DIM, textTransform: "uppercase" }}>
          {KIND_LABEL[spec.kind]}
        </span>
      </div>
      <div style={{ position: "absolute", left: 90, bottom: 110, width: 760 }}>
        {spec.issuer && (
          <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: 28, color: "#fff", marginBottom: 14 }}>
            {spec.issuer}
          </div>
        )}
        <div
          style={{
            fontFamily: BEBAS,
            fontSize: long ? 128 : 156,
            lineHeight: 0.88,
            color: "#fff",
            textTransform: "uppercase",
            textShadow: "0 4px 30px rgba(0,0,0,0.6)",
          }}
        >
          {spec.title}
        </div>
        <div style={{ width: 120, height: 8, background: RED, marginTop: 26 }} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 26 }}>
          {spec.tags.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: SANS,
                fontWeight: 600,
                fontSize: 22,
                color: "#fff",
                padding: "7px 16px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.25)",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
