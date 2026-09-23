import type React from "react";

/** Inspector control descriptor — cards use it to declare which props are tunable */
export type PropField =
  | { type: "text"; key: string; label: string; default: string }
  | { type: "textarea"; key: string; label: string; default: string }
  | {
      type: "number";
      key: string;
      label: string;
      default: number;
      min?: number;
      max?: number;
      step?: number;
      /** Display unit, e.g. "s" / "px" */
      unit?: string;
    }
  | {
      type: "slider";
      key: string;
      label: string;
      default: number;
      min: number;
      max: number;
      step: number;
      unit?: string;
    }
  | { type: "color"; key: string; label: string; default: string }
  | {
      type: "select";
      key: string;
      label: string;
      default: string;
      options: { value: string; label: string }[];
    }
  | { type: "boolean"; key: string; label: string; default: boolean };

export interface CardDef {
  id: string;
  /** Card name (shown in panels) */
  name: string;
  category: string;
  /** "audio"/"video": media card — no TimeRemap (Freeze kills native playback),
   *  trim-in/speed arrive via props, implemented by trimBefore/playbackRate inside the card;
   *  video keeps the layer wrapper (opacity/scale/offset), audio has no visuals */
  kind?: "visual" | "audio" | "video";
  /** Card's original duration (frames, in sourceFps) — default duration for new clips */
  durationInFrames: number;
  /** Card authoring fps: durationInFrames and in-card timing both use it. Defaults to CARD_FPS (demo / native cards);
   *  project-unit cards use the promo manifest's fps */
  sourceFps?: number;
  /** Time semantics (default "frames"):
   *  - "frames": components are authored frame-by-frame at sourceFps; when project fps differs, clip duration is converted and speed is inversely scaled so playback speed stays the same
   *  - "realtime": media (video / audio / still image) runs on wall-clock; durationInFrames is only a default length in 30fps terms,
   *    duration is converted but not sped (inOffset / speed map directly to trimBefore / playbackRate) */
  timing?: "frames" | "realtime";
  /** Card design canvas (default 1920×1080; library/Studio previews build compositions at this size) */
  width?: number;
  height?: number;
  component: React.ComponentType<Record<string, unknown>>;
  schema: PropField[];
  /** Library color swatch */
  accent?: string;
  /** Inject the clip's source duration (frames) into this prop — when promo components compute exit fades from `duration`/`dur`,
   *  the fade moves with clip stretch/trim instead of freezing at the original duration */
  durationProp?: string;
  /** Library preview video (path under public/; falls back to a live looping Player) */
  preview?: string;
  /** One-line description (library tooltip) */
  summary?: string;
}

/** The card library (demo / native cards) is uniformly authored at 30fps: durationInFrames and internal timing both follow it.
 *  When project fps differs, store.addClip converts clip duration via clipDefaultsFor and inversely scales speed, keeping playback speed unchanged */
export const CARD_FPS = 30;

/** Card authoring fps (defaults to CARD_FPS) */
export const cardFps = (card: CardDef) => card.sourceFps ?? CARD_FPS;

/** The card's source length in project fps (frames): realtime cards convert the 30fps default length into project frames;
 *  frames cards' source frames are their own frames (speed is expressed via the speed factor) */
export const sourceLength = (card: CardDef, projectFps: number) =>
  card.timing === "realtime"
    ? Math.max(2, Math.round((card.durationInFrames * projectFps) / cardFps(card)))
    : card.durationInFrames;

/** The fps that clip.inOffset is measured in: frames cards' trim-in is in card source frames (Freeze frame = inOffset + f×speed,
 *  and timeline left-drag / split convert through speed into source frames), while realtime media cards' trim-in is trimBefore directly (project frames).
 *  When the inspector / timeline badge converts it to seconds they must divide by this fps, otherwise display and input break whenever card fps ≠ project fps */
export const inOffsetFps = (card: CardDef | undefined, projectFps: number) =>
  !card || card.timing === "realtime" ? projectFps : cardFps(card);

/** Default duration / speed for a new clip: `sourceFrames` (defaults to the card's original duration) is measured in card fps.
 *  frames cards: duration × (project fps / card fps), speed = card fps / project fps, so in-card per-frame animation keeps its wall-clock rhythm
 *  (note Freeze does not change useVideoConfig().fps, so if the card times by seconds via spring({fps}) etc. the rhythm still shifts with project fps,
 *  the inspector warns about it); realtime cards: duration is converted, speed stays 1 */
export const clipDefaultsFor = (card: CardDef, projectFps: number, sourceFrames = card.durationInFrames) => {
  const scale = projectFps / cardFps(card);
  const realtime = card.timing === "realtime";
  return {
    duration: Math.max(2, Math.round(sourceFrames * scale)),
    speed: realtime || scale === 1 ? 1 : 1 / scale,
  };
};

export const defaultsOf = (card: CardDef): Record<string, unknown> =>
  Object.fromEntries(card.schema.map((f) => [f.key, f.default]));

export const cardSize = (card: CardDef) => ({
  width: card.width ?? 1920,
  height: card.height ?? 1080,
});
