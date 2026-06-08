import React from "react";
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  useCurrentFrame,
  Easing,
  random,
} from "remotion";
import { loadFont as loadBebas } from "@remotion/google-fonts/BebasNeue";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

const { fontFamily: BEBAS } = loadBebas();
const { fontFamily: INTER } = loadInter("normal", {
  weights: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

// ── palette ──────────────────────────────────────────────────────────────
const RED = "#E50914";
const BG = "#0b0b0b";
const EASE_OUT = Easing.bezier(0.16, 1, 0.3, 1);
const EASE_IO = Easing.bezier(0.45, 0, 0.55, 1);

// ── showcase content ─────────────────────────────────────────────────────
const NAME = "AMINEDDINE ZNIN";
const ROLES = ["Software Developer", "Cybersecurity Builder", "Freelancer"];
const SKILLS = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "FastAPI",
  "Tailwind CSS", "Docker", "Linux", "MITRE ATT&CK", "Sigma", "Machine Learning",
];
const PROJECTS = [
  "Moroccan Mirage", "WeFrame Media", "The Seven Saints",
  "Mahal Films", "SigmaPack-Builder", "rareguard",
];

// ───────────────────────────────────────────────────────────────────────────
export const HeroBackground: React.FC = () => {
  const frame = useCurrentFrame();
  // fade in/out at the loop seam so the looping <video> never hard-cuts
  const envelope = interpolate(frame, [0, 14, 524, 540], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: BG, opacity: envelope }}>
      <Background />
      <NameLayer />
      <MetaStrip />

      <Sequence from={150} durationInFrames={150}>
        <SceneFade dur={150}>
          <RolesScene />
        </SceneFade>
      </Sequence>

      <Sequence from={295} durationInFrames={160}>
        <SceneFade dur={160}>
          <SkillsScene />
        </SceneFade>
      </Sequence>

      <Sequence from={450} durationInFrames={90}>
        <SceneFade dur={90}>
          <ProjectsScene />
        </SceneFade>
      </Sequence>

      <Vignette />
    </AbsoluteFill>
  );
};

// ── crossfade wrapper for timed scenes ─────────────────────────────────────
const SceneFade: React.FC<{ dur: number; children: React.ReactNode }> = ({
  dur,
  children,
}) => {
  const f = useCurrentFrame();
  const opacity = interpolate(f, [0, 16, dur - 16, dur], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return <AbsoluteFill style={{ opacity }}>{children}</AbsoluteFill>;
};

// ── animated background (grid, glow, particles, sweep) ─────────────────────
const Background: React.FC = () => {
  const frame = useCurrentFrame();

  const gridShift = (frame * 0.7) % 64;
  const glowX = 62 + Math.sin(frame / 55) * 12;
  const glowY = 42 + Math.cos(frame / 70) * 10;
  const sweepX = ((frame * 9) % 2600) - 300;

  return (
    <AbsoluteFill>
      {/* base radial wash */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(120% 90% at ${glowX}% ${glowY}%, rgba(229,9,20,0.16), transparent 55%), radial-gradient(80% 70% at 20% 30%, rgba(40,40,48,0.5), transparent 60%)`,
        }}
      />

      {/* scrolling grid with vertical fade mask */}
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          backgroundPosition: `0px ${gridShift}px`,
          maskImage:
            "radial-gradient(120% 80% at 50% 45%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(120% 80% at 50% 45%, black 30%, transparent 80%)",
          opacity: 0.6,
        }}
      />

      <Particles />

      {/* red light sweep */}
      <AbsoluteFill
        style={{
          transform: `translateX(${sweepX}px) skewX(-12deg)`,
          width: 260,
          background:
            "linear-gradient(90deg, transparent, rgba(229,9,20,0.10), rgba(246,18,29,0.18), transparent)",
          filter: "blur(8px)",
        }}
      />
    </AbsoluteFill>
  );
};

const PARTICLE_COUNT = 46;
const Particles: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      {new Array(PARTICLE_COUNT).fill(0).map((_, i) => {
        const seedX = random(`x${i}`);
        const seedSize = random(`z${i}`);
        const seedSpeed = random(`s${i}`);
        const baseY = random(`y${i}`) * 1180;
        const isRed = random(`c${i}`) > 0.82;

        const speed = 0.25 + seedSpeed * 0.95;
        const rawY = baseY - frame * speed;
        const y = ((rawY % 1180) + 1180) % 1180 - 60;
        const x = seedX * 1920;
        const size = 1 + seedSize * 2.6;
        const twinkle = 0.35 + 0.65 * Math.abs(Math.sin((frame + i * 31) / 24));
        const opacity = twinkle * (0.18 + seedSize * 0.5);

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: size,
              height: size,
              borderRadius: "50%",
              backgroundColor: isRed ? RED : "#ffffff",
              opacity,
              boxShadow: isRed ? "0 0 8px rgba(229,9,20,0.8)" : "none",
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

// ── giant name: assembles, then settles into a faint kinetic watermark ─────
const NameLayer: React.FC = () => {
  const frame = useCurrentFrame();
  const letters = NAME.split("");

  // phase B: shrink + lift to a watermark after the reveal
  const settle = interpolate(frame, [108, 168], [0, 1], {
    easing: EASE_OUT,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scale = interpolate(settle, [0, 1], [1, 0.46]);
  const ty = interpolate(settle, [0, 1], [0, -255]);
  const groupOpacity = interpolate(settle, [0, 1], [1, 0.16]);
  const drift = Math.sin(frame / 38) * 5;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          transform: `translateY(${ty + drift}px) scale(${scale})`,
          opacity: groupOpacity,
          display: "flex",
          fontFamily: BEBAS,
          fontSize: 200,
          letterSpacing: 8,
          color: "#fff",
          textShadow: "0 0 60px rgba(229,9,20,0.35)",
          whiteSpace: "pre",
        }}
      >
        {letters.map((ch, i) => {
          const delay = i * 3;
          const o = interpolate(frame, [delay, delay + 26], [0, 1], {
            easing: EASE_OUT,
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const ly = interpolate(frame, [delay, delay + 26], [70, 0], {
            easing: EASE_OUT,
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const blur = interpolate(frame, [delay, delay + 26], [16, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <span
              key={i}
              style={{
                display: "inline-block",
                transform: `translateY(${ly}px)`,
                opacity: o,
                filter: `blur(${blur}px)`,
              }}
            >
              {ch === " " ? " " : ch}
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ── roles scene ────────────────────────────────────────────────────────────
const RolesScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{ alignItems: "center", justifyContent: "center", gap: 4 }}
    >
      <Kicker label="The Profile" />
      <div style={{ height: 18 }} />
      {ROLES.map((role, i) => {
        const delay = 12 + i * 14;
        const o = interpolate(frame, [delay, delay + 22], [0, 1], {
          easing: EASE_OUT,
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const x = interpolate(frame, [delay, delay + 26], [-46, 0], {
          easing: EASE_OUT,
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        return (
          <div
            key={role}
            style={{
              transform: `translateX(${x}px)`,
              opacity: o,
              fontFamily: BEBAS,
              fontSize: 92,
              lineHeight: 1.04,
              letterSpacing: 3,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: 22,
            }}
          >
            <span
              style={{
                width: 14,
                height: 14,
                borderRadius: 99,
                backgroundColor: RED,
                boxShadow: "0 0 16px rgba(229,9,20,0.9)",
              }}
            />
            {role}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

// ── skills scene ───────────────────────────────────────────────────────────
const SkillsScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <Kicker label="Skills & Stack" />
      <div style={{ height: 40 }} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          maxWidth: 1180,
          justifyContent: "center",
        }}
      >
        {SKILLS.map((skill, i) => {
          const delay = 10 + i * 5;
          const o = interpolate(frame, [delay, delay + 18], [0, 1], {
            easing: EASE_OUT,
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const y = interpolate(frame, [delay, delay + 22], [30, 0], {
            easing: EASE_OUT,
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <div
              key={skill}
              style={{
                transform: `translateY(${y}px)`,
                opacity: o,
                fontFamily: INTER,
                fontWeight: 600,
                fontSize: 40,
                color: "#f2f2f2",
                padding: "16px 34px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(4px)",
              }}
            >
              {skill}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ── projects scene ─────────────────────────────────────────────────────────
const ProjectsScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <Kicker label="Selected Work" />
      <div style={{ height: 30 }} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        {PROJECTS.map((p, i) => {
          const delay = 8 + i * 7;
          const o = interpolate(frame, [delay, delay + 18], [0, 1], {
            easing: EASE_OUT,
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const y = interpolate(frame, [delay, delay + 22], [26, 0], {
            easing: EASE_OUT,
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <div
              key={p}
              style={{
                transform: `translateY(${y}px)`,
                opacity: o,
                fontFamily: BEBAS,
                fontSize: 66,
                letterSpacing: 2,
                color: "#fff",
              }}
            >
              {p}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ── small shared kicker label ──────────────────────────────────────────────
const Kicker: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        fontFamily: INTER,
        fontWeight: 600,
        fontSize: 22,
        letterSpacing: 6,
        textTransform: "uppercase",
        color: RED,
      }}
    >
      <span style={{ width: 40, height: 2, backgroundColor: RED }} />
      {label}
      <span style={{ width: 40, height: 2, backgroundColor: RED }} />
    </div>
  );
};

// ── persistent bottom meta strip ───────────────────────────────────────────
const MetaStrip: React.FC = () => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [20, 50], [0, 0.8], {
    easing: EASE_IO,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        position: "absolute",
        bottom: 64,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        gap: 18,
        opacity: o,
        fontFamily: INTER,
        fontWeight: 500,
        fontSize: 24,
        letterSpacing: 4,
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.6)",
      }}
    >
      <span>Morocco</span>
      <span style={{ color: RED }}>•</span>
      <span>Available Globally</span>
      <span style={{ color: RED }}>•</span>
      <span>Web + Security</span>
    </div>
  );
};

// ── vignette on top of everything ──────────────────────────────────────────
const Vignette: React.FC = () => (
  <AbsoluteFill
    style={{
      background:
        "radial-gradient(120% 100% at 50% 50%, transparent 55%, rgba(0,0,0,0.55) 100%)",
      pointerEvents: "none",
    }}
  />
);
