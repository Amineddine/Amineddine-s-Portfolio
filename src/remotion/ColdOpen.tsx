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
import { loadFont as loadMono } from "@remotion/google-fonts/JetBrainsMono";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { loadFont as loadTifinagh } from "@remotion/google-fonts/NotoSansTifinagh";

// ───────────────────────────────────────────────────────────────────────────
// COLD OPEN — the /browse hero reel. 13s @ 30fps, seamless loop, no audio.
// Identity: red #E50914 AZ in Bebas Neue, Bebas headlines + Inter body
// (JetBrains Mono only for the code/log line), black + red, anamorphic
// letterbox. No grain baked in
// (noise wrecks compression) — the site lays a CSS grain over the video.
//
// Composition rule: the LEFT ~40% (desktop headline) and the BOTTOM ~45%
// (mobile headline) stay quiet; the action lives upper-centre/right.
// ───────────────────────────────────────────────────────────────────────────

const { fontFamily: BEBAS } = loadBebas();
const { fontFamily: MONO } = loadMono("normal", { weights: ["400"], subsets: ["latin"] });
const { fontFamily: SANS } = loadInter("normal", { weights: ["500", "600", "700"], subsets: ["latin"] });
const { fontFamily: TIFI } = loadTifinagh("normal", { weights: ["400"] });

const INK = "#0b0b0b";
const RED = "#E50914";
const BONE = "#ffffff";
const EASE = Easing.bezier(0.16, 1, 0.3, 1);
const EASE_IO = Easing.bezier(0.45, 0, 0.55, 1);

export const COLD_OPEN_FRAMES = 390;
const BAR = 120; // letterbox bar height (≈2.39:1 at 1080)
// The hero is wider than 16:9, so object-cover trims ~100px off the top and
// bottom, and the fixed navbar covers the next ~100px. Everything readable
// starts at SAFE_TOP so it is never cropped or hidden under the nav.
const SAFE_TOP = 260;
// Action lives in the RIGHT half: on common laptop widths the hero headline
// reaches ~55% of the frame, so nothing readable may start left of ZONE_X.
const ZONE_X = 1080; // left edge of the action zone
const HEADER_H = 150; // act header row height; visuals start below it

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

// ── scene timing ─────────────────────────────────────────────────────────────
const T = {
  open: [0, 50],
  wall: [42, 110],
  web: [104, 200],
  sec: [194, 260],
  ai: [254, 322],
  lock: [316, 390],
} as const;

const WALL_SHOTS = [
  "moroccan-mirage", "tawada-desert-camp", "morocco-transit", "riad-jabador", "izil-morocco",
  "mahal-productions", "groupe-scolaire-badry", "gogestion", "palais-andara-excursions", "weframe-media",
  "the-seven-saints", "visitare-il-marocco", "mnq-trading-assistant", "sigmapack-builder", "wfm-management",
];

const WEB_SHOTS = [
  { file: "tawada-desert-camp", name: "Tawada Desert Camp", domain: "tawadadesertcamp.com" },
  { file: "morocco-transit", name: "Morocco Transit", domain: "moroccotransit.vercel.app", km: true },
  { file: "moroccan-mirage", name: "Moroccan Mirage", domain: "moroccanmirage.com" },
  { file: "riad-jabador", name: "Riad Jabador", domain: "riadjabador.com" },
  { file: "izil-morocco", name: "Izil Morocco", domain: "izil-morocco.vercel.app", tifinagh: true },
];

// ───────────────────────────────────────────────────────────────────────────
export const ColdOpen: React.FC = () => {
  const frame = useCurrentFrame();
  // fade from / back to the same ink frame so the <video loop> seam is invisible
  const envelope = interpolate(frame, [0, 10, COLD_OPEN_FRAMES - 16, COLD_OPEN_FRAMES], [0, 1, 1, 0], clamp);

  return (
    <AbsoluteFill style={{ backgroundColor: INK }}>
      <AbsoluteFill style={{ opacity: envelope }}>
        <Atmosphere />
        <Scene range={T.open}>
          <OpenTitles />
        </Scene>
        <Scene range={T.wall}>
          <Wall />
        </Scene>
        <Scene range={T.web}>
          <WebAct />
        </Scene>
        <Scene range={T.sec}>
          <SecurityAct />
        </Scene>
        <Scene range={T.ai}>
          <AiAct />
        </Scene>
        <Scene range={T.lock} fadeOut={false}>
          <Lockup />
        </Scene>
      </AbsoluteFill>
      <Letterbox />
    </AbsoluteFill>
  );
};

/** A time-boxed layer with short crossfades at each end. */
const Scene: React.FC<{
  range: readonly [number, number];
  fadeOut?: boolean;
  children: React.ReactNode;
}> = ({ range, fadeOut = true, children }) => {
  const [from, to] = range;
  const dur = to - from;
  return (
    <Sequence from={from} durationInFrames={dur} layout="none">
      <SceneFade dur={dur} fadeOut={fadeOut}>
        {children}
      </SceneFade>
    </Sequence>
  );
};

const SceneFade: React.FC<{ dur: number; fadeOut: boolean; children: React.ReactNode }> = ({
  dur,
  fadeOut,
  children,
}) => {
  const f = useCurrentFrame();
  const opacity = interpolate(f, [0, 8, dur - 8, dur], [0, 1, 1, fadeOut ? 0 : 1], clamp);
  return <AbsoluteFill style={{ opacity }}>{children}</AbsoluteFill>;
};

// ── persistent atmosphere ────────────────────────────────────────────────────
const Atmosphere: React.FC = () => {
  const frame = useCurrentFrame();
  const drift = interpolate(frame, [0, COLD_OPEN_FRAMES], [0, 1]);
  const leakX = interpolate(frame, [0, 60], [-300, 1500], { ...clamp, easing: EASE_IO });
  const leakO = interpolate(frame, [0, 18, 46, 70], [0, 0.85, 0.6, 0], clamp);
  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          background: `radial-gradient(60% 70% at ${62 + drift * 10}% ${34 - drift * 6}%, rgba(229,9,20,0.12), transparent 70%),
            radial-gradient(45% 55% at ${88 - drift * 14}% 78%, rgba(229,9,20,0.08), transparent 70%)`,
        }}
      />
      {/* sweeping amber light leak */}
      <div
        style={{
          position: "absolute",
          top: 80,
          left: leakX,
          width: 900,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(closest-side, rgba(255,235,235,0.45), rgba(229,9,20,0.35) 50%, transparent)",
          filter: "blur(60px)",
          opacity: leakO,
          mixBlendMode: "screen",
        }}
      />
    </AbsoluteFill>
  );
};

const Letterbox: React.FC = () => (
  <>
    <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: BAR, background: "#000" }} />
    <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: BAR, background: "#000" }} />
  </>
);

// ── F1 · cold open ───────────────────────────────────────────────────────────
const OpenTitles: React.FC = () => {
  const f = useCurrentFrame();
  const a = interpolate(f, [6, 22], [0, 1], { ...clamp, easing: EASE });
  const track = interpolate(f, [6, 40], [0.5, 0.32], clamp);
  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          top: SAFE_TOP,
          left: ZONE_X,
          fontFamily: MONO,
          fontSize: 26,
          letterSpacing: `${track}em`,
          color: BONE,
          opacity: a,
        }}
      >
        AZ ORIGINALS
      </div>
      <div
        style={{
          position: "absolute",
          top: SAFE_TOP,
          right: 120,
          fontFamily: MONO,
          fontSize: 26,
          letterSpacing: `${track}em`,
          color: RED,
          opacity: a,
        }}
      >
        SEASON 2026
      </div>
      <div
        style={{
          position: "absolute",
          top: SAFE_TOP + 48,
          left: ZONE_X,
          right: 120,
          height: 1,
          background: `linear-gradient(90deg, ${RED}, transparent)`,
          transform: `scaleX(${interpolate(f, [10, 44], [0, 1], { ...clamp, easing: EASE })})`,
          transformOrigin: "left",
          opacity: 0.6,
        }}
      />
    </AbsoluteFill>
  );
};

// ── F2 · the wall (poster frame lives here) ─────────────────────────────────
const Wall: React.FC = () => {
  const f = useCurrentFrame();
  const dur = T.wall[1] - T.wall[0];
  const z = interpolate(f, [0, dur], [-700, 950], { easing: Easing.bezier(0.5, 0, 0.75, 0.4) });
  const flash = interpolate(f, [dur - 18, dur - 8, dur], [0, 0.55, 0], clamp);
  const cols = 5;
  const W = 470;
  const H = 280;
  const GAP = 34;
  return (
    <AbsoluteFill style={{ perspective: 1300, perspectiveOrigin: "72% 42%" }}>
      <div
        style={{
          position: "absolute",
          left: "72%",
          top: "40%",
          width: cols * W + (cols - 1) * GAP,
          transform: `translate(-50%, -50%) translateZ(${z}px) rotateX(16deg) rotateY(-26deg) rotateZ(5deg)`,
          transformStyle: "preserve-3d",
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, ${W}px)`,
          gap: GAP,
        }}
      >
        {WALL_SHOTS.map((file, i) => {
          const lift = interpolate(f, [i * 1.6, i * 1.6 + 16], [0, 1], { ...clamp, easing: EASE });
          return (
            <div
              key={file}
              style={{
                width: W,
                height: H,
                borderRadius: 10,
                overflow: "hidden",
                opacity: 0.25 + lift * 0.65,
                boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
                outline: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Img
                src={staticFile(`${file}-640.webp`)}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
              />
            </div>
          );
        })}
      </div>
      <AbsoluteFill
        style={{
          background: `radial-gradient(70% 60% at 72% 42%, rgba(255,225,225,${flash}), transparent 70%)`,
        }}
      />
      {/* keep the left side calm for the headline */}
      <AbsoluteFill
        style={{ background: `linear-gradient(90deg, ${INK} 0%, rgba(11,10,12,0.75) 28%, rgba(11,10,12,0.35) 50%, transparent 64%)` }}
      />
    </AbsoluteFill>
  );
};

// ── shared act label ────────────────────────────────────────────────────────
const ActLabel: React.FC<{
  season: string;
  title: string;
  eps: string;
  chip: string;
}> = ({ season, title, eps, chip }) => {
  const f = useCurrentFrame();
  const a = interpolate(f, [2, 16], [0, 1], { ...clamp, easing: EASE });
  const x = interpolate(f, [2, 20], [30, 0], { ...clamp, easing: EASE });
  const chipA = interpolate(f, [18, 30], [0, 1], clamp);
  return (
    <div style={{ position: "absolute", left: ZONE_X, top: SAFE_TOP, opacity: a, transform: `translateX(${x}px)` }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 22, whiteSpace: "nowrap" }}>
        <span style={{ fontFamily: MONO, fontSize: 26, letterSpacing: "0.2em", color: RED }}>{season}</span>
        <span style={{ fontFamily: BEBAS, fontSize: 92, lineHeight: 0.9, color: BONE, textTransform: "uppercase" }}>
          {title}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 14 }}>
        <span style={{ fontFamily: MONO, fontSize: 20, letterSpacing: "0.2em", color: "rgba(255,255,255,0.6)" }}>{eps}</span>
        <span
          style={{
            padding: "5px 14px",
            border: "1px solid rgba(229,9,20,0.75)",
            borderRadius: 999,
            fontFamily: SANS,
            fontWeight: 600,
            fontSize: 19,
            color: BONE,
            background: "rgba(229,9,20,0.18)",
            opacity: chipA,
          }}
        >
          {chip}
        </span>
      </div>
    </div>
  );
};

// ── F3 · S01 Web ────────────────────────────────────────────────────────────
const WebAct: React.FC = () => {
  const f = useCurrentFrame();
  const PER = 18;
  const START = 8;
  const idx = Math.min(WEB_SHOTS.length - 1, Math.max(0, Math.floor((f - START) / PER)));
  const SX = ZONE_X;
  const SY = SAFE_TOP + HEADER_H;
  const SW = 640;
  const SH = 330; // ≈ the screenshots' own aspect, so nothing important is cropped
  const enter = interpolate(f, [0, 16], [40, 0], { ...clamp, easing: EASE });

  return (
    <AbsoluteFill>
      <ActLabel season="S01" title="Web" eps="E01 — E05" chip="12 web builds shipped" />
      <div
        style={{
          position: "absolute",
          left: SX,
          top: SY,
          width: SW,
          transform: `translateY(${enter}px)`,
          borderRadius: 12,
          overflow: "hidden",
          background: "#141316",
          boxShadow: "0 40px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.08)",
        }}
      >
        {/* browser chrome */}
        <div style={{ height: 34, display: "flex", alignItems: "center", gap: 8, padding: "0 14px", background: "#1c1b1f" }}>
          {[0, 1, 2].map((d) => (
            <span key={d} style={{ width: 10, height: 10, borderRadius: 5, background: "rgba(255,255,255,0.18)" }} />
          ))}
          <span
            style={{
              marginLeft: 14,
              padding: "3px 14px",
              borderRadius: 6,
              background: "rgba(255,255,255,0.06)",
              fontFamily: MONO,
              fontSize: 15,
              color: "rgba(243,236,226,0.75)",
            }}
          >
            {WEB_SHOTS[idx].domain}
          </span>
        </div>
        <div style={{ position: "relative", height: SH, overflow: "hidden" }}>
          {WEB_SHOTS.map((shot, i) => {
            const local = f - START - i * PER;
            const o = interpolate(local, [-4, 2, PER - 2, PER + 4], [0, 1, 1, i === WEB_SHOTS.length - 1 ? 1 : 0], clamp);
            const s = interpolate(local, [-4, PER + 4], [1.08, 1.0], clamp);
            if (o <= 0) return null;
            return (
              <div key={shot.file} style={{ position: "absolute", inset: 0, opacity: o }}>
                <Img
                  src={staticFile(`${shot.file}-640.webp`)}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    transform: `scale(${s})`,
                  }}
                />
                {shot.km && <KmCounter local={local} />}
                {shot.tifinagh && (
                  <div
                    style={{
                      position: "absolute",
                      right: 24,
                      bottom: 6,
                      fontFamily: TIFI,
                      fontSize: 120,
                      lineHeight: 1,
                      color: "rgba(255,255,255,0.22)",
                    }}
                  >
                    ⵉⵣⵉⵍ
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* caption + progress ticks */}
      <div
        style={{
          position: "absolute",
          left: SX,
          top: SY + SH + 34 + 22,
          width: SW,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontFamily: SANS, fontWeight: 600, fontSize: 28, color: BONE }}>
          <span style={{ fontFamily: MONO, fontWeight: 400, fontSize: 18, color: RED, marginRight: 14 }}>
            E0{idx + 1}
          </span>
          {WEB_SHOTS[idx].name}
        </span>
        <span style={{ display: "flex", gap: 6 }}>
          {WEB_SHOTS.map((s, i) => (
            <span
              key={s.file}
              style={{
                width: 26,
                height: 3,
                borderRadius: 2,
                background: i <= idx ? RED : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </span>
      </div>
    </AbsoluteFill>
  );
};

const KmCounter: React.FC<{ local: number }> = ({ local }) => {
  const km = Math.round(interpolate(local, [0, 16], [0, 110], clamp));
  return (
    <div
      style={{
        position: "absolute",
        right: 18,
        bottom: 18,
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 14px",
        borderRadius: 8,
        background: "rgba(0,0,0,0.6)",
      }}
    >
      <span style={{ background: "#c8402a", color: "white", fontFamily: SANS, fontWeight: 600, fontSize: 16, padding: "2px 7px", borderRadius: 4 }}>
        N9
      </span>
      <span style={{ fontFamily: MONO, fontSize: 30, color: "white", letterSpacing: "0.06em" }}>
        {String(km).padStart(4, "0")}
      </span>
      <span style={{ fontFamily: MONO, fontSize: 16, color: "rgba(255,255,255,0.7)" }}>KM</span>
    </div>
  );
};

// ── F4 · S02 Security ───────────────────────────────────────────────────────
const GRID_COLS = 11;
const GRID_ROWS = 6;
// a deterministic "technique path" across tactic columns
const PATH = [
  [0, 2], [1, 1], [2, 3], [3, 2], [4, 4], [5, 1], [6, 3], [7, 0], [8, 2], [9, 4], [10, 1],
];
const LOG = '{"proc":"powershell.exe","args":"-nop -w hidden -enc …","parent":"winword.exe"}';

const SecurityAct: React.FC = () => {
  const f = useCurrentFrame();
  const GX = ZONE_X;
  const GY = SAFE_TOP + HEADER_H;
  const CW = 50;
  const CH = 30;
  const G = 6;
  const lit = Math.floor(interpolate(f, [6, 40], [0, PATH.length], clamp));
  const typed = Math.floor(interpolate(f, [10, 42], [0, LOG.length], clamp));
  const verdict = interpolate(f, [42, 52], [0, 1], { ...clamp, easing: EASE });

  return (
    <AbsoluteFill>
      <ActLabel season="S02" title="Security" eps="E01 — E04" chip="4 open-source tools" />
      <div style={{ position: "absolute", left: GX, top: GY }}>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${GRID_COLS}, ${CW}px)`, gap: G }}>
          {Array.from({ length: GRID_COLS * GRID_ROWS }, (_, i) => {
            const c = i % GRID_COLS;
            const r = Math.floor(i / GRID_COLS);
            const step = PATH.findIndex(([pc, pr]) => pc === c && pr === r);
            const on = step >= 0 && step < lit;
            return (
              <div
                key={i}
                style={{
                  width: CW,
                  height: CH,
                  borderRadius: 4,
                  background: on ? RED : "rgba(255,255,255,0.06)",
                  boxShadow: on ? `0 0 18px rgba(229,9,20,0.6)` : "none",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              />
            );
          })}
        </div>
        <div
          style={{
            marginTop: 30,
            width: GRID_COLS * (CW + G) - G,
            padding: "16px 20px",
            borderRadius: 10,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            fontFamily: MONO,
            fontSize: 19,
            color: "rgba(243,236,226,0.8)",
            minHeight: 60,
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {LOG.slice(0, typed)}
          <span style={{ opacity: f % 16 < 8 ? 1 : 0, color: RED }}>▍</span>
        </div>
        <div
          style={{
            marginTop: 18,
            fontFamily: SANS,
            fontWeight: 600,
            fontSize: 30,
            color: BONE,
            opacity: verdict,
            transform: `translateY(${(1 - verdict) * 12}px)`,
          }}
        >
          <span style={{ color: RED }}>→ T1059.001</span> · PowerShell ·{" "}
          <span style={{ fontFamily: MONO, fontWeight: 400, color: RED }}>confidence 0.92</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── F5 · S03 AI Automation ──────────────────────────────────────────────────
const AiAct: React.FC = () => {
  const f = useCurrentFrame();
  const CX = ZONE_X;
  const CY = SAFE_TOP + HEADER_H;
  const bubble = (at: number) => {
    const p = interpolate(f, [at, at + 12], [0, 1], { ...clamp, easing: EASE });
    return { opacity: p, transform: `translateY(${(1 - p) * 26}px)` };
  };
  const base: React.CSSProperties = {
    width: 600,
    padding: "18px 22px",
    borderRadius: 18,
    borderTopLeftRadius: 6,
    background: "#1b1a1e",
    border: "1px solid rgba(255,255,255,0.08)",
    fontFamily: SANS,
    fontWeight: 500,
    fontSize: 25,
    color: BONE,
    marginBottom: 18,
  };
  return (
    <AbsoluteFill>
      <ActLabel
        season="S03"
        title="AI Automation"
        eps="E01 — E04"
        chip="~170 tests · analysis only"
      />
      <div style={{ position: "absolute", left: CX, top: CY }}>
        <div style={{ ...base, ...bubble(4) }}>
          <div style={{ fontFamily: MONO, fontSize: 16, color: RED, letterSpacing: "0.18em", marginBottom: 6 }}>
            MORNING BRIEF · 08:30
          </div>
          Key levels · overnight gaps · high-impact news
        </div>
        <div style={{ ...base, ...bubble(16), display: "flex", alignItems: "center", gap: 20 }}>
          <MiniChart />
          <div>
            <div style={{ fontFamily: MONO, fontSize: 16, color: "#6fd08c", letterSpacing: "0.18em", marginBottom: 6 }}>
              ✓ CHART READ
            </div>
            Structure, range and the levels that matter
          </div>
        </div>
        <div
          style={{
            ...base,
            ...bubble(30),
            background: "rgba(229,9,20,0.12)",
            border: `1px solid rgba(229,9,20,0.6)`,
          }}
        >
          <div style={{ fontFamily: MONO, fontSize: 16, color: RED, letterSpacing: "0.18em", marginBottom: 6 }}>
            ⚠ RISK GUARD
          </div>
          Daily stop reached — analysis only, never an order
        </div>
        <div style={{ ...bubble(44), fontFamily: MONO, fontSize: 18, color: "rgba(243,236,226,0.6)", letterSpacing: "0.12em" }}>
          + 11 ANTHROPIC CERTIFICATIONS
        </div>
      </div>
    </AbsoluteFill>
  );
};

const MiniChart: React.FC = () => {
  const candles = [6, 9, 7, 11, 10, 13, 12, 15, 13, 16];
  return (
    <svg width={150} height={84} viewBox="0 0 150 84" style={{ flexShrink: 0 }}>
      <rect width={150} height={84} rx={8} fill="rgba(255,255,255,0.04)" />
      {candles.map((v, i) => {
        const up = i === 0 || v >= candles[i - 1];
        const y = 78 - v * 4;
        return (
          <g key={i}>
            <line x1={12 + i * 13} x2={12 + i * 13} y1={y - 6} y2={y + 16} stroke="rgba(255,255,255,0.35)" strokeWidth={1.5} />
            <rect x={8 + i * 13} y={y} width={8} height={12} fill={up ? "#6fd08c" : RED} rx={1} />
          </g>
        );
      })}
    </svg>
  );
};

// ── F6 · lockup ─────────────────────────────────────────────────────────────
const Lockup: React.FC = () => {
  const f = useCurrentFrame();
  const punch = interpolate(f, [2, 12, 18, 24], [2.4, 0.94, 1.03, 1], { ...clamp, easing: EASE });
  const azA = interpolate(f, [2, 10], [0, 1], clamp);
  const burst = interpolate(f, [6, 12, 40], [0, 1, 0.25], clamp);
  const nameA = interpolate(f, [20, 34], [0, 1], { ...clamp, easing: EASE });
  const subA = interpolate(f, [30, 44], [0, 1], clamp);
  const CX = 1450; // centre of the right half
  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          background: `radial-gradient(26% 34% at ${(CX / 1920) * 100}% 33%, rgba(255,230,230,${0.35 * burst}), rgba(229,9,20,${0.3 * burst}) 40%, transparent 72%)`,
        }}
      />
      <div style={{ position: "absolute", left: CX, top: SAFE_TOP - 10, transform: "translateX(-50%)", textAlign: "center" }}>
        <div
          style={{
            fontFamily: BEBAS,
            fontSize: 210,
            lineHeight: 0.85,
            color: RED,
            letterSpacing: "-0.01em",
            opacity: azA,
            transform: `scale(${punch})`,
            textShadow: "0 0 70px rgba(229,9,20,0.5)",
            WebkitTextStroke: "3px #E50914",
          }}
        >
          AZ
        </div>
        <div
          style={{
            marginTop: 6,
            fontFamily: BEBAS,
            fontSize: 96,
            lineHeight: 1,
            color: BONE,
            opacity: nameA,
            letterSpacing: `${interpolate(nameA, [0, 1], [0.14, 0.04])}em`,
            whiteSpace: "nowrap",
          }}
        >
          AMINEDDINE ZNIN
        </div>
        <div
          style={{
            marginTop: 16,
            fontFamily: SANS,
            fontWeight: 600,
            fontSize: 22,
            letterSpacing: "0.3em",
            color: "rgba(255,255,255,0.8)",
            opacity: subA,
            whiteSpace: "nowrap",
          }}
        >
          WEB · SECURITY · AI AUTOMATION
        </div>
        <div
          style={{
            marginTop: 18,
            display: "inline-block",
            padding: "4px 14px",
            background: RED,
            fontFamily: BEBAS,
            fontSize: 34,
            letterSpacing: "0.08em",
            color: "white",
            opacity: subA,
          }}
        >
          NOW SHOWING
        </div>
      </div>
    </AbsoluteFill>
  );
};
