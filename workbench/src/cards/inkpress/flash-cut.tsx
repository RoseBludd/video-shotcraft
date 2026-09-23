import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import type { CardDef } from "../types";

// Warm Flash Cut — parameterized version (derived from template/src/aifl/FlashCut.tsx)
// A warm-white bloom straddling 5f on each side of a hard cut: peak at 40% (FIXED); peak opacity and warm color are exposed.

interface Props {
  peak?: number;
  color?: string;
  duration?: number;
}

const FlashCut: React.FC<Props> = ({ peak = 0.85, color = "#fff8eb", duration = 10 }) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [0, duration * 0.4, duration], [0, peak, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill
      style={{
        pointerEvents: "none",
        opacity: o,
        background: `radial-gradient(ellipse at 50% 45%, ${color}, ${color}8c 55%, transparent 80%)`,
      }}
    />
  );
};

export const flashCutCard: CardDef = {
  id: "inkpress-flash-cut",
  name: "Warm Flash Cut",
  category: "Workbench",
  durationInFrames: 10,
  accent: "#f7c948",
  durationProp: "duration",
  component: FlashCut as React.ComponentType<Record<string, unknown>>,
  summary: "Place 5 frames before a hard cut, straddling both sides; covers the seam only, not a decorative flash",
  schema: [
    { type: "slider", key: "peak", label: "Peak Opacity", default: 0.85, min: 0.2, max: 1, step: 0.05 },
    { type: "color", key: "color", label: "Warm White", default: "#fff8eb" },
  ],
};
