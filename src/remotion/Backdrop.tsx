import React from "react";
import { AbsoluteFill } from "remotion";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { loadFont as loadMono } from "@remotion/google-fonts/JetBrainsMono";

// ───────────────────────────────────────────────────────────────────────────
// Billboard spotlight backdrops (1600×900) for titles whose real preview image
// carries its own headline text — that text fights the billboard copy. These
// keep the LEFT ~45% empty for the headline and tell the project's story with
// a single diagram on the right. Rendered by scripts/build-posters.mjs.
// ───────────────────────────────────────────────────────────────────────────
const { fontFamily: SANS } = loadInter("normal", { weights: ["500", "600", "700"], subsets: ["latin"] });
const { fontFamily: MONO } = loadMono("normal", { weights: ["400"], subsets: ["latin"] });

const RED = "#E50914";
const INK = "#0b0b0b";
const DIM = "rgba(255,255,255,0.6)";

const Card: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <div
    style={{
      background: "#151515",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 14,
      boxShadow: "0 40px 100px rgba(0,0,0,0.7)",
      ...style,
    }}
  >
    {children}
  </div>
);

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 18, letterSpacing: "0.24em", color: DIM, marginBottom: 14 }}>
    {children}
  </div>
);

const Arrow: React.FC = () => (
  <svg width={70} height={40} viewBox="0 0 70 40" style={{ flexShrink: 0 }}>
    <path d="M2 20 H60 M46 6 L62 20 L46 34" fill="none" stroke={RED} strokeWidth={5} />
  </svg>
);

/** SigmaPack-Builder: ATT&CK-tagged detections → a deploy-ready Sigma pack. */
const SigmaPack: React.FC = () => {
  const detections = [
    ["T1059.001", "Encoded PowerShell"],
    ["T1047", "WMI process spawn"],
    ["T1218.011", "Rundll32 proxy exec"],
    ["T1003.001", "LSASS memory access"],
  ];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
      <div>
        <Label>DETECTIONS</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {detections.map(([t, name]) => (
            <Card key={t} style={{ padding: "14px 18px", width: 300 }}>
              <div style={{ fontFamily: MONO, fontSize: 17, color: RED }}>{t}</div>
              <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: 20, color: "#fff", marginTop: 4 }}>{name}</div>
            </Card>
          ))}
        </div>
      </div>
      <Arrow />
      <div>
        <Label>SIGMA PACK</Label>
        <Card style={{ width: 390, overflow: "hidden" }}>
          <div style={{ padding: "12px 18px", borderBottom: "1px solid rgba(255,255,255,0.08)", fontFamily: MONO, fontSize: 18, color: "#fff" }}>
            ▣ sigma-pack/
          </div>
          <div style={{ padding: "12px 18px", fontFamily: MONO, fontSize: 17, lineHeight: 1.8, color: DIM }}>
            {["execution_t1059_001.yml", "execution_t1047.yml", "defense_evasion_t1218.yml", "credential_access_t1003.yml", "manifest.json"].map((f) => (
              <div key={f}>
                <span style={{ color: RED }}>✓ </span>
                {f}
              </div>
            ))}
          </div>
          <div style={{ padding: "12px 18px", background: "rgba(229,9,20,0.12)", fontFamily: SANS, fontWeight: 700, fontSize: 17, letterSpacing: "0.16em", color: "#fff" }}>
            VALIDATED · READY TO DEPLOY
          </div>
        </Card>
      </div>
    </div>
  );
};

/** attck-tagger: a JSONL log event → explainable ATT&CK tags with confidence. */
const AttckTagger: React.FC = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
    <div>
      <Label>LOG EVENT · JSONL</Label>
      <Card style={{ width: 360, padding: "18px 20px" }}>
        <div style={{ fontFamily: MONO, fontSize: 17, lineHeight: 1.75, color: DIM, whiteSpace: "pre" }}>
          {`{
  "event": "process_create",
  "process": "powershell.exe",
  "cmd": "-nop -enc SQBFAFgA…",
  "parent": "wscript.exe"
}`}
        </div>
      </Card>
    </div>
    <Arrow />
    <div>
      <Label>TAGGED · EXPLAINED</Label>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 330 }}>
        {[
          ["T1059.001", "PowerShell", "0.87"],
          ["Tactic", "Execution", ""],
          ["Why", "encoded command line", ""],
        ].map(([k, v, c], i) => (
          <Card key={k} style={{ padding: "14px 18px", borderColor: i === 0 ? RED : undefined }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontFamily: MONO, fontSize: 17, color: i === 0 ? RED : DIM }}>{k}</span>
              {c && <span style={{ fontFamily: MONO, fontSize: 17, color: "#fff" }}>conf {c}</span>}
            </div>
            <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: 21, color: "#fff", marginTop: 4 }}>{v}</div>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

const DIAGRAMS: Record<string, React.FC> = {
  "sigmapack-builder": SigmaPack,
  "attck-tagger": AttckTagger,
};

export const Backdrop: React.FC<{ id: string }> = ({ id }) => {
  const Diagram = DIAGRAMS[id] ?? SigmaPack;
  return (
    <AbsoluteFill style={{ backgroundColor: INK, overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(45% 70% at 76% 48%, rgba(229,9,20,0.24), transparent 70%), radial-gradient(30% 40% at 100% 0%, rgba(229,9,20,0.12), transparent 70%)",
        }}
      />
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(60% 75% at 74% 50%, black, transparent)",
        }}
      />
      <div style={{ position: "absolute", right: 70, top: 0, bottom: 0, display: "flex", alignItems: "center" }}>
        <div style={{ transform: "scale(1.3)", transformOrigin: "right center" }}>
          <Diagram />
        </div>
      </div>
    </AbsoluteFill>
  );
};
