import type { CardDef } from "./types";
import { DEMO_MODULES } from "./demo-index";
import { DEMO_CATEGORIES, DEMO_META } from "./demoMeta";

/** Shot-card motion library: demos/<category>/<card>/<Stem>.tsx fully wired in (scripts/gen-index.mjs generates the static index).
 *  Inclusion criteria match assets/scripts/smoke-render-demos.py: the file exports both `<Stem>: React.FC`
 *  and a `*_DURATION` / `*_DUR` duration constant. Demos are driven by top-level constants and take no props, so schema is empty —
 *  once on a track you can trim / retime / freeze / transform layers; to tune per-prop, lift the CONFIG constants into props + schema
 *  (see references/workbench.md for the pattern).
 *  motion-lab-lineage cards (DesignStage + useT) normalize time to the Sequence length: stretching the clip slows the animation;
 *  all other cards run on absolute frames: beyond the original duration the last frame freezes. */
export const DEMO_CARDS: CardDef[] = DEMO_MODULES.map((m) => {
  const meta = DEMO_META[m.stem];
  return {
    id: `demo:${m.stem}`,
    name: meta?.name ?? m.stem,
    category: meta?.category ?? "Motion Library",
    durationInFrames: Math.max(2, Math.round(m.duration)),
    component: m.component,
    schema: [],
    accent: "#c58a2a",
    preview: meta?.preview ? `cardpreviews/${meta.preview}` : undefined,
    summary: meta?.summary,
  };
});

export { DEMO_CATEGORIES };
