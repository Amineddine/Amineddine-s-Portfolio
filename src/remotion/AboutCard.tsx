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
  weights: ["400", "500", "600"],
  subsets: ["latin"],
});

const RED = "#E50914";
const EASE_OUT = Easing.bezier(0.16, 1, 0.3, 1);

// the "sell" — value props that cycle in the upper third (the modal overlays
// the name + buttons along the bottom, so this stays clear of that zone)
const VALUES = [
  "SHIPS FAST",
  "SECURITY-AWARE",
  "PREMIUM FINISH",
  "RELIABLE PARTNER",
  "AVAILABLE GLOBALLY",
];
const PER = 56; // frames per value word
const TOTAL = VALUES.length * PER; // 280

export const AboutCard: React.FC = () => {
  const frame = useCurrentFrame();
  const envelope = interpolate(frame, [0, 12, TOTAL - 12, TOTAL], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0b0b0c", opacity: envelope }}>
      <Background />

      {/* persistent kicker */}
      <div
        style={{
          position: "absolute",
          top: 54,
          left: 64,
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontFamily: INTER,
          fontWeight: 600,
          fontSize: 22,
          letterSpacing: 7,
          textTransform: "uppercase",
          color: RED,
        }}
      >
        <Dot />
        Why Hire Me
      </div>

      {/* cycling value words, upper third */}
      {VALUES.map((word, i) => (
        <Sequence key={word} from={i * PER} durationInFrames={PER}>
          <ValueWord word={word} />
        </Sequence>
      ))}

      {/* heartbeat rule */}
      <Heartbeat />

      <AbsoluteFill
        style={{
          background:
            "radial-gradient(120% 110% at 50% 40%, transparent 55%, rgba(0,0,0,0.6) 100%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};

const Dot: React.FC = () => {
  const frame = useCurrentFrame();
  const s = 0.7 + 0.3 * Math.abs(Math.sin(frame / 12));
  return (
    <span
      style={{
        width: 11,
        height: 11,
        borderRadius: 99,
        background: RED,
        boxShadow: `0 0 ${10 * s}px ${RED}`,
        transform: `scale(${s})`,
        display: "inline-block",
      }}
    />
  );
};

const ValueWord: React.FC<{ word: string }> = ({ word }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 12, PER - 14, PER], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [0, 16], [34, 0], {
    easing: EASE_OUT,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const x = interpolate(frame, [PER - 14, PER], [0, -26], {
    easing: Easing.in(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{ alignItems: "center", justifyContent: "flex-start", paddingTop: 188 }}
    >
      <div
        style={{
          transform: `translate(${x}px, ${y}px)`,
          opacity,
          fontFamily: BEBAS,
          fontSize: 132,
          letterSpacing: 4,
          lineHeight: 1,
          color: "#fff",
          textShadow: "0 0 50px rgba(229,9,20,0.3)",
          display: "flex",
          alignItems: "center",
          gap: 26,
        }}
      >
        <span style={{ color: RED }}>/</span>
        {word}
      </div>
    </AbsoluteFill>
  );
};

const Heartbeat: React.FC = () => {
  const frame = useCurrentFrame();
  const w = interpolate(frame % 90, [0, 60], [0, 100], {
    easing: EASE_OUT,
    extrapolateRight: "clamp",
  });
  const o = interpolate(frame % 90, [0, 8, 60, 80], [0, 0.7, 0.7, 0], {
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        position: "absolute",
        left: 64,
        right: 64,
        bottom: 84,
        height: 2,
        background: "rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${w}%`,
          background: `linear-gradient(90deg, transparent, ${RED})`,
          opacity: o,
        }}
      />
    </div>
  );
};

// ── distinct background: pulsing rings + diagonal light streaks + dust ──────
const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const glowX = 50 + Math.sin(frame / 60) * 8;

  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          background: `radial-gradient(90% 120% at ${glowX}% 38%, rgba(229,9,20,0.2), transparent 58%)`,
        }}
      />

      {/* expanding concentric rings from the centre */}
      {new Array(5).fill(0).map((_, i) => {
        const cycle = (frame / 30 + i * 0.6) % 3;
        const t = cycle / 3;
        const size = 240 + t * 1500;
        const op = 0.28 * (1 - t);
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: "50%",
              top: "42%",
              width: size,
              height: size,
              marginLeft: -size / 2,
              marginTop: -size / 2,
              borderRadius: "50%",
              border: `1.5px solid rgba(229,9,20,${op.toFixed(3)})`,
            }}
          />
        );
      })}

      {/* diagonal light streaks */}
      {new Array(3).fill(0).map((_, i) => {
        const x = ((frame * 7 + i * 760) % 2600) - 500;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: x,
              width: 180,
              transform: "skewX(-14deg)",
              background:
                "linear-gradient(90deg, transparent, rgba(229,9,20,0.08), rgba(255,255,255,0.05), transparent)",
              filter: "blur(6px)",
            }}
          />
        );
      })}

      <Dust />
    </AbsoluteFill>
  );
};

const Dust: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      {new Array(34).fill(0).map((_, i) => {
        const sx = random(`ax${i}`);
        const sz = random(`az${i}`);
        const sp = random(`as${i}`);
        const baseY = random(`ay${i}`) * 880;
        const y = ((baseY - frame * (0.2 + sp * 0.7)) % 880 + 880) % 880 - 40;
        const tw = 0.3 + 0.7 * Math.abs(Math.sin((frame + i * 40) / 26));
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: sx * 1600,
              top: y,
              width: 1 + sz * 2,
              height: 1 + sz * 2,
              borderRadius: "50%",
              background: random(`ac${i}`) > 0.8 ? RED : "#ffffff",
              opacity: tw * (0.15 + sz * 0.4),
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
