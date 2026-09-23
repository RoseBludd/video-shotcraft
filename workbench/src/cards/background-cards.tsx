import React from "react";
import { AbsoluteFill } from "remotion";
import type { CardDef } from "./types";

// —— Preset backgrounds: static stage backdrops laid on the bottom track. Components don't use useCurrentFrame, so library thumbnails can render them as-is ——
// Colors taken from the Ink Press template (paper #f2eee6 / ink black) and the synapse-family dark base #0a0908.

const Solid: React.FC<{ color?: string }> = ({ color = "#f2eee6" }) => (
  <AbsoluteFill style={{ background: color }} />
);

const solidCard = (id: string, name: string, color: string, accent: string): CardDef => ({
  id,
  name,
  category: "Backgrounds",
  durationInFrames: 300,
  accent,
  component: Solid as React.ComponentType<Record<string, unknown>>,
  schema: [{ type: "color", key: "color", label: "Color", default: color }],
});

/** Warm paper base + center glow (same radial brightening as PaperTitleCard) */
const Paper: React.FC<{ color?: string; glow?: number }> = ({ color = "#f2eee6", glow = 0.85 }) => (
  <AbsoluteFill
    style={{
      background: color,
      backgroundImage: `radial-gradient(1100px 750px at 50% 42%, rgba(255,252,244,${glow}), transparent 65%)`,
    }}
  />
);

export const BG_CARDS: CardDef[] = [
  solidCard("bg-paper", "Paper · Warm White", "#f2eee6", "#e6dfd0"),
  solidCard("bg-white", "Pure White", "#ffffff", "#e8e8ea"),
  solidCard("bg-ink", "Ink Black", "#0a0908", "#3a3a3f"),
  {
    id: "bg-paper-glow",
    name: "Paper · Center Glow",
    category: "Backgrounds",
    durationInFrames: 300,
    accent: "#e6dfd0",
    component: Paper as React.ComponentType<Record<string, unknown>>,
    schema: [
      { type: "color", key: "color", label: "Color", default: "#f2eee6" },
      { type: "slider", key: "glow", label: "Glow Intensity", default: 0.85, min: 0, max: 1, step: 0.05 },
    ],
  },
];
