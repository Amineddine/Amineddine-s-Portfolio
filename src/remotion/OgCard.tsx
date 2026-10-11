import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { loadFont as loadBebas } from "@remotion/google-fonts/BebasNeue";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

// 1200×630 social card in the Cold Open look. Rendered as a still:
//   npx remotion still src/remotion/index.ts OgCard public/og-image.jpg --image-format=jpeg --jpeg-quality=86
const { fontFamily: BEBAS } = loadBebas();
const { fontFamily: SANS } = loadInter("normal", { weights: ["600"], subsets: ["latin"] });

const INK = "#0b0b0b";
const RED = "#E50914";
const SHOTS = ["tawada-desert-camp", "morocco-transit", "mnq-trading-assistant", "riad-jabador", "moroccan-mirage", "sigmapack-builder"];

export const OgCard: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: INK, overflow: "hidden" }}>
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(55% 75% at 78% 30%, rgba(229,9,20,0.2), transparent 70%), radial-gradient(40% 60% at 95% 95%, rgba(229,9,20,0.22), transparent 70%)",
      }}
    />
    {/* tilted strip of real work */}
    <div style={{ position: "absolute", inset: 0, perspective: 1100 }}>
      <div
        style={{
          position: "absolute",
          left: 610,
          top: 40,
          display: "grid",
          gridTemplateColumns: "repeat(2, 300px)",
          gap: 18,
          transform: "rotateY(-22deg) rotateX(8deg) rotateZ(4deg)",
        }}
      >
        {SHOTS.map((file) => (
          <div
            key={file}
            style={{
              width: 300,
              height: 176,
              borderRadius: 8,
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
              outline: "1px solid rgba(255,255,255,0.1)",
              opacity: 0.9,
            }}
          >
            <Img src={staticFile(`${file}-640.webp`)} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
          </div>
        ))}
      </div>
    </div>
    <AbsoluteFill style={{ background: `linear-gradient(90deg, ${INK} 0%, ${INK} 38%, rgba(11,10,12,0.7) 55%, transparent 80%)` }} />

    <div style={{ position: "absolute", left: 72, top: 64 }}>
      <div style={{ fontFamily: SANS, fontWeight: 600, fontSize: 17, letterSpacing: "0.3em", color: "rgba(255,255,255,0.8)" }}>
        PORTFOLIO · NOW SHOWING
      </div>
      <div
        style={{
          marginTop: 26,
          fontFamily: BEBAS,
          fontSize: 200,
          lineHeight: 0.85,
          color: RED,
          WebkitTextStroke: `3px ${RED}`,
          textShadow: "0 0 50px rgba(229,9,20,0.45)",
        }}
      >
        AZ
      </div>
      <div style={{ marginTop: 18, fontFamily: BEBAS, fontSize: 92, lineHeight: 0.95, color: "white", letterSpacing: "0.03em" }}>
        AMINEDDINE ZNIN
      </div>
      <div style={{ marginTop: 14, fontFamily: SANS, fontWeight: 600, fontSize: 19, letterSpacing: "0.26em", color: "rgba(255,255,255,0.85)" }}>
        WEB · SECURITY · AI AUTOMATION
      </div>
      <div style={{ marginTop: 34, fontFamily: SANS, fontWeight: 600, fontSize: 18, color: "rgba(255,255,255,0.6)", letterSpacing: "0.06em" }}>
        amineddine.online
      </div>
    </div>
  </AbsoluteFill>
);
