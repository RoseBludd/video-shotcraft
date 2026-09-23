import type { CardDef } from "./types";
import { textBasicCard } from "./text-basic";
import { titleCardCard } from "./inkpress/title-card";
import { captionStripCard } from "./inkpress/caption-strip";
import { flashCutCard } from "./inkpress/flash-cut";
import { audioClipCard, imageClipCard, videoClipCard } from "./media-cards";
import { BG_CARDS } from "./background-cards";
import { DEMO_CARDS } from "./demoCards";
import { PROJECT_CARDS } from "./projectCards";

/** Registry (first come first served per id):
 *  - Workbench-native cards: Basic Text / Ink Press Title Card / Caption Strip / Warm Flash Cut (all schema-parameterized)
 *  - Media cards: audio / video / image (used by promo-project public/ and the repo SFX library alike)
 *  - Background cards
 *  - Project-unit cards: shots / transitions / captions / overlays from the linked promo project's workbench.ts manifest
 *  - Motion library: demo components for 158 shot cards in demos/ (gen-index static index) */
const ALL: CardDef[] = [
  textBasicCard,
  titleCardCard,
  captionStripCard,
  flashCutCard,
  audioClipCard,
  videoClipCard,
  imageClipCard,
  ...BG_CARDS,
  ...PROJECT_CARDS,
  ...DEMO_CARDS,
];

const seen = new Set<string>();
export const CARD_LIST: CardDef[] = ALL.filter((c) => {
  if (seen.has(c.id)) return false;
  seen.add(c.id);
  return true;
});

export const CARDS: Record<string, CardDef> = Object.fromEntries(
  CARD_LIST.map((c) => [c.id, c]),
);
