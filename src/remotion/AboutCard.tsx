import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { loadFont as loadBebas } from "@remotion/google-fonts/BebasNeue";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

// ───────────────────────────────────────────────────────────────────────────
// "WHY HIRE ME" — the bio detail-modal banner. 1600×800 (2:1), 10s loop.
// The modal lays the name + buttons over the bottom-left, so every scene keeps
// its content top / right. Each reason is backed by real work on the site.
// ───────────────────────────────────────────────────────────────────────────
const { fontFamily: BEBAS } = loadBebas();
const { fontFamily: SANS } = loadInter("normal", { weights: ["500", "600", "700"], subsets: ["latin"] });

const RED = "#E50914";
const INK = "#0b0b0b";
const EASE = Easing.bezier(0.16, 1, 0.3, 1);
const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

export const ABOUT_FRAMES = 300;
const ZONE_X = 640; // content starts here — the left side stays for the modal title

const REASONS = [
  {
    no: "01",
    head: "Ships production web",
    proof: "12 live client sites — hospitality, travel, film, education",
    shots: ["tawada-desert-camp", "riad-jabador", "morocco-transit", "mahal-productions"],
  },
  {
    no: "02",
    head: "Security built in",
    proof: "4 open-source detection tools · MITRE ATT&CK · Sigma",
    shots: ["sigmapack-builder", "attck-tagger", "soar-mini-enricher", "rareguard"],
  },
  {
    no: "03",
    head: "AI that does the work",
    proof: "Telegram trading assistant · ~170 tests · 11 Anthropic certifications",
    shots: ["mnq-trading-assistant", "automate", "wfm-management", "moroccan-mirage"],
  },
];
const INTRO = 54;
const PER = 64;
const OUTRO_AT = INTRO + REASONS.length * PER; // 246

export const AboutCard: React.FC = () => {
  const frame = useCurrentFrame();
  const envelope = interpolate(frame, [0, 10, ABOUT_FRAMES - 12, ABOUT_FRAMES], [0, 1, 1, 0], clamp);
  return (
    <AbsoluteFill style={{ backgroundColor: INK }}>
      <AbsoluteFill style={{ opacity: envelope }}>
        <AbsoluteFill
          style={{
            background:
              "radial-gradient(50% 70% at 78% 30%, rgba(229,9,20,0.22), transparent 70%), radial-gradient(40% 60% at 10% 100%, rgba(229,9,20,0.1), transparent 70%)",
          }}
        />
        <Sequence durationInFrames={INTRO + 6} layout="none">
          <Fade dur={INTRO + 6}>
            <Intro />
          </Fade>
        </Sequence>
        {REASONS.map((r, i) => (
          <Sequence key={r.no} from={INTRO + i * PER} durationInFrames={PER + 6} layout="none">
            <Fade dur={PER + 6}>
              <Reason reason={r} />
            </Fade>
          </Sequence>
        ))}
        <Sequence from={OUTRO_AT} durationInFrames={ABOUT_FRAMES - OUTRO_AT} layout="none">
          <Fade dur={ABOUT_FRAMES - OUTRO_AT} out={false}>
            <Outro />
          </Fade>
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const Fade: React.FC<{ dur: number; out?: boolean; children: React.ReactNode }> = ({ dur, out = true, children }) => {
  const f = useCurrentFrame();
  const o = interpolate(f, [0, 7, dur - 7, dur], [0, 1, 1, out ? 0 : 1], clamp);
  return <AbsoluteFill style={{ opacity: o }}>{children}</AbsoluteFill>;
};

const Intro: React.FC = () => {
  const f = useCurrentFrame();
  const punch = interpolate(f, [0, 10, 15, 20], [2.2, 0.94, 1.03, 1], { ...clamp, easing: EASE });
  const a = interpolate(f, [0, 8], [0, 1], clamp);
  const sub = interpolate(f, [14, 26], [0, 1], clamp);
  return (
    <div style={{ position: "absolute", left: ZONE_X, top: 110 }}>
      <div
        style={{
          fontFamily: BEBAS,
          fontSize: 230,
          lineHeight: 0.85,
          color: "#fff",
          opacity: a,
          transform: `scale(${punch})`,
          transformOrigin: "left center",
        }}
      >
        WHY <span style={{ color: RED }}>HIRE</span> ME
      </div>
      <div style={{ marginTop: 22, fontFamily: SANS, fontWeight: 600, fontSize: 30, letterSpacing: "0.24em", color: "rgba(255,255,255,0.8)", opacity: sub }}>
        THREE REASONS · ALL OF THEM LIVE
      </div>
    </div>
  );
};

const Reason: React.FC<{ reason: (typeof REASONS)[number] }> = ({ reason }) => {
  const f = useCurrentFrame();
  const x = interpolate(f, [0, 16], [40, 0], { ...clamp, easing: EASE });
  const proofA = interpolate(f, [12, 24], [0, 1], clamp);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", left: ZONE_X, top: 80, transform: `translateX(${x}px)` }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 22 }}>
          <span style={{ fontFamily: BEBAS, fontSize: 120, color: RED, lineHeight: 0.8 }}>{reason.no}</span>
          <span style={{ fontFamily: BEBAS, fontSize: 88, color: "#fff", lineHeight: 0.9, textTransform: "uppercase" }}>
            {reason.head}
          </span>
        </div>
        <div style={{ marginTop: 18, fontFamily: SANS, fontWeight: 600, fontSize: 28, color: "rgba(255,255,255,0.85)", opacity: proofA }}>
          {reason.proof}
        </div>
      </div>
      {/* proof strip — real screenshots of the work */}
      <div style={{ position: "absolute", left: ZONE_X, top: 330, display: "flex", gap: 18 }}>
        {reason.shots.map((file, i) => {
          const p = interpolate(f, [6 + i * 4, 20 + i * 4], [0, 1], { ...clamp, easing: EASE });
          return (
            <div
              key={file}
              style={{
                width: 210,
                height: 132,
                borderRadius: 10,
                overflow: "hidden",
                opacity: p,
                transform: `translateY(${(1 - p) * 30}px)`,
                boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
                outline: i === 0 ? `2px solid ${RED}` : "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <Img src={staticFile(`${file}-640.webp`)} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

const Outro: React.FC = () => {
  const f = useCurrentFrame();
  const a = interpolate(f, [0, 12], [0, 1], { ...clamp, easing: EASE });
  return (
    <div style={{ position: "absolute", left: ZONE_X, top: 130, opacity: a }}>
      <div style={{ fontFamily: BEBAS, fontSize: 124, lineHeight: 0.9, color: "#fff" }}>
        MOROCCO-BASED.
        <br />
        <span style={{ color: RED }}>AVAILABLE GLOBALLY.</span>
      </div>
      <div style={{ marginTop: 26, fontFamily: SANS, fontWeight: 600, fontSize: 28, letterSpacing: "0.2em", color: "rgba(255,255,255,0.8)" }}>
        WEB · SECURITY · AI — IN ENGLISH & FRENCH
      </div>
    </div>
  );
};
