import type React from "react";
import type { CardDef } from "./types";
import type { ManifestUnit, WorkbenchManifest } from "./manifest";
import { UNIT_KINDS, groupUnits, unitsOf } from "./manifest";
import { WORKBENCH as RAW } from "@proj/workbench";
export { unitsOf } from "./manifest";
export type { UnitKind } from "./manifest";

/** The linked promo project's manifest (null when not linked / no workbench.ts) */
export const MANIFEST: WorkbenchManifest | null = (RAW ?? null) as WorkbenchManifest | null;

const KIND_LABEL = { shot: "Shot", transition: "Transition", caption: "Caption", overlay: "Overlay" } as const;
const KIND_ACCENT: Record<keyof typeof KIND_LABEL, string> = {
  shot: "#4c9aff",
  transition: "#f7c948",
  caption: "#34c759",
  overlay: "#8e8e93",
};

/** Project-unit cards + the card id for each unit (used by the importer). Grouping comes from manifest.groupUnits —
 *  the same topology as the content hash, so "archive not stale" is equivalent to "the archived cardIds still point at the same unit groups" */
const build = (m: WorkbenchManifest | null) => {
  const cards: CardDef[] = [];
  const cardIdOfUnit = m ? groupUnits(m) : new Map<ManifestUnit, string>();
  if (!m) return { cards, cardIdOfUnit };
  for (const kind of UNIT_KINDS) {
    const byCard = new Map<string, ManifestUnit[]>();
    for (const u of unitsOf(m, kind)) {
      const id = cardIdOfUnit.get(u)!;
      const g = byCard.get(id);
      if (g) g.push(u);
      else byCard.set(id, [u]);
    }
    for (const [id, units] of byCard) {
      const first = units[0];
      const name =
        units.find((u) => u.cardName)?.cardName ??
        (units.length > 1 ? `${KIND_LABEL[kind]} · ${componentName(first.component)}` : (first.label ?? first.id));
      cards.push({
        id,
        name,
        category: "Project Units",
        durationInFrames: Math.max(2, first.duration),
        // Project units are authored at the promo's own fps (not the card library's 30fps)
        sourceFps: m.fps,
        width: m.width,
        height: m.height,
        component: first.component,
        schema: first.schema ?? [],
        durationProp: first.durationProp,
        accent: first.accent ?? KIND_ACCENT[kind],
      });
    }
  }
  return { cards, cardIdOfUnit };
};

const componentName = (c: React.ComponentType<Record<string, unknown>>) =>
  (c as { displayName?: string }).displayName ?? c.name ?? "Component";

const built = build(MANIFEST);
export const PROJECT_CARDS: CardDef[] = built.cards;
export const cardIdOfUnit = (u: ManifestUnit) => built.cardIdOfUnit.get(u)!;

/** The original full promo composition (manifest may provide it); Studio registers it as ProjOriginal for frame-by-frame comparison */
export const ORIGINAL = MANIFEST?.original ?? null;
