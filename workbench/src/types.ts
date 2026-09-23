/** Project data model: Project → Track → Clip. All time quantities are in timeline frames (default 30fps). */

export interface ClipData {
  id: string;
  cardId: string;
  /** Start position on the timeline (frames) */
  start: number;
  /** Length on the timeline (frames) — shorter or longer than the card's original duration (trim / freeze-extend) */
  duration: number;
  /** Trim-in: which source frame of the card asset to start playing from (source frames), controls when the animation enters */
  inOffset: number;
  /** Speed multiplier: each timeline frame advances source time by speed frames */
  speed: number;
  /** Layer opacity 0–1 */
  opacity: number;
  /** Layer uniform scale */
  scale: number;
  /** Layer offset (px, composition coordinates) */
  x: number;
  y: number;
  /** Card-specific prop overrides (defaults come from the card schema) */
  props: Record<string, unknown>;
  /** Custom label shown on the timeline (defaults to the card name) — imported promo shots/SFX use it */
  label?: string;
}

export interface TrackData {
  id: string;
  name: string;
  hidden?: boolean;
  clips: ClipData[];
}

export interface ProjectData {
  name: string;
  fps: number;
  width: number;
  height: number;
  /** Stage background (the promo project AbsoluteFill background; near-black default) */
  background?: string;
  /** Which promo manifest this was imported from (manifest name + total) — `?import=project` uses it to decide whether to re-import */
  source?: string;
  tracks: TrackData[];
}

let seq = 0;
export const uid = (prefix: string) =>
  `${prefix}_${Date.now().toString(36)}${(seq++).toString(36)}`;

/** Exact content end frame (latest clip end; used for promo export, no padding) */
export const projectEndFrame = (project: ProjectData): number => {
  let end = 0;
  for (const t of project.tracks)
    for (const c of t.clips) end = Math.max(end, c.start + c.duration);
  return end;
};

/** Project total duration (frames): latest clip end + 1s padding, minimum 5s (for edit preview; converted at project fps) */
export const projectDuration = (project: ProjectData): number =>
  Math.max(5 * project.fps, projectEndFrame(project) + project.fps);
