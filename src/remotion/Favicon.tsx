import React from "react";
import { AbsoluteFill } from "remotion";
import { loadFont as loadBebas } from "@remotion/google-fonts/BebasNeue";

// 512×512 master for the favicon set — red AZ in Bebas Neue on black.
// Exported via scripts/build-favicons.mjs.
const { fontFamily: BEBAS } = loadBebas();

export const Favicon: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: "#000", alignItems: "center", justifyContent: "center" }}>
    <div
      style={{
        fontFamily: BEBAS,
        fontSize: 470,
        lineHeight: 1,
        marginTop: 40,
        letterSpacing: "-0.02em",
        color: "#E50914",
        WebkitTextStroke: "10px #E50914",
      }}
    >
      AZ
    </div>
  </AbsoluteFill>
);
