import type React from "react";
import type { PropField } from "./types";

/** Promo project manifest — the project declares `export const WORKBENCH: WorkbenchManifest` in `src/workbench.ts`,
 *  the workbench uses it to split the promo into multi-track clips (shots / transitions / captions / overlays / SFX / music).
 *  The structure is plain data + component references; project files need not import this file (structural compatibility suffices).
 *  Time quantities are always absolute frames, matching the <Sequence from durationInFrames> entries in Main.tsx one-to-one. */

export type ManifestUnit = {
  /** Unique id (shot id / transition index …); after import it becomes part of the clip label */
  id: string;
  /** Display name on the timeline (defaults to id) */
  label?: string;
  /** Absolute start frame */
  from: number;
  /** Duration in frames */
  duration: number;
  component: React.ComponentType<Record<string, unknown>>;
  /** Props actually passed in the promo (= the clip's initial prop values) */
  props?: Record<string, unknown>;
  /** Editable props; empty by default = the unit can only be re-timed / re-timed-speed / layer-transformed */
  schema?: PropField[];
  /** Prop name to receive the clip's source duration (e.g. "duration" / "dur"); see CardDef.durationProp */
  durationProp?: string;
  /** Units sharing one card write the same cardId (e.g. four title cards all use PaperTitleCard); default grouping is by component reference */
  cardId?: string;
  /** Card name (shown in the library; for the same cardId the first non-empty value wins) */
  cardName?: string;
  accent?: string;
};

export type ManifestAudio = {
  from: number;
  /** Duration in frames; default 90 (aligned with the default SFX Sequence length in Main.tsx) */
  duration?: number;
  /** Path under public/, e.g. "audio/whoosh-big.mp3" */
  src: string;
  volume: number;
  label?: string;
};

export type WorkbenchManifest = {
  name: string;
  fps: number;
  width: number;
  height: number;
  /** Total promo frames */
  total: number;
  /** Stage background (the outermost Main AbsoluteFill background) */
  background?: string;
  /** Version (optional). When present it decides "is this the same promo version"; otherwise the manifest content hash decides
   *  (time table / labels / props / unit→card grouping topology / component displayName / SFX table); any change counts as a new version */
  revision?: string;
  shots: ManifestUnit[];
  /** Transition layer (flash / light bars…) */
  transitions?: ManifestUnit[];
  /** Captions / caption strips */
  captions?: ManifestUnit[];
  /** Film-long persistent overlays (grids / vignettes / watermarks…) */
  overlays?: ManifestUnit[];
  sfx?: ManifestAudio[];
  bgm?: ManifestAudio[];
  /** Z order of the overlay layers (top to bottom); default transitions > captions > overlays, matching the Ink Press template */
  order?: ("transitions" | "captions" | "overlays")[];
  /** The original promo composition (the full Main) — registered in Studio as ProjOriginal to compare the import result frame by frame */
  original?: React.ComponentType<Record<string, unknown>>;
};

export const UNIT_KINDS = ["shot", "transition", "caption", "overlay"] as const;
export type UnitKind = (typeof UNIT_KINDS)[number];

export const unitsOf = (m: WorkbenchManifest, kind: UnitKind): ManifestUnit[] =>
  kind === "shot" ? m.shots : (m[`${kind}s`] ?? []);

/** Unit → card id grouping: explicit cardId wins; otherwise components sharing the same **reference** share one card, and the card id takes that group's first unit id
 *  (`proj:<kind>:<cardId|first unit id>`). projectCards builds cards from it and the content hash below reuses the same topology,
 *  so reference-only changes like "a unit switched components" (most components lack displayName) still change the hash,
 *  so clips in old archives pointing at the old card are not carried over into the wrong component */
export const groupUnits = (m: WorkbenchManifest): Map<ManifestUnit, string> => {
  const out = new Map<ManifestUnit, string>();
  for (const kind of UNIT_KINDS) {
    const groups = new Map<unknown, ManifestUnit[]>();
    for (const u of unitsOf(m, kind)) {
      const k = u.cardId ?? u.component;
      const g = groups.get(k);
      if (g) g.push(u);
      else groups.set(k, [u]);
    }
    // One id per group. When an explicit cardId collides with another group's first-unit id, or unit ids repeat, later groups get an ordered suffix
    // `~2`/`~3` (naming remains a deterministic function of the manifest, so the hash stays stable); the console reminds the author to fix the id
    const used = new Set<string>();
    for (const units of groups.values()) {
      const base = `proj:${kind}:${units[0].cardId ?? units[0].id}`;
      let id = base;
      for (let n = 2; used.has(id); n++) id = `${base}~${n}`;
      if (id !== base)
        console.warn(`[workbench] manifest card id collision: ${base} is already taken by another unit group; this group falls back to ${id} — give the unit a distinct id or an explicit cardId`);
      used.add(id);
      for (const u of units) out.set(u, id);
    }
  }
  return out;
};

/** FNV-1a 32-bit, output as 8 hex digits — enough to tell "did the content change", not for security */
const fnv1a = (s: string) => {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, "0");
};

/** Canonical string of the manifest's serializable parts — everything that gets copied into ClipData or decides which card a clip points at:
 *  timing / label / props / durationProp / grouped card ids (see groupUnits) / the SFX table.
 *  Components only contribute their explicit displayName (.name is rewritten by HMR / minification; including it would make the same promo look new
 *  between dev and build and silently drop user edits); component-reference changes are captured by the card id topology */
const canonical = (m: WorkbenchManifest): string => {
  const cardOf = groupUnits(m);
  const unit = (u: ManifestUnit) =>
    [
      cardOf.get(u) ?? "", u.id, u.label ?? "", u.from, u.duration, u.durationProp ?? "",
      (u.component as { displayName?: string }).displayName ?? "", JSON.stringify(u.props ?? {}),
    ].join("|");
  const audio = (kind: string, a: ManifestAudio) => [kind, a.from, a.duration ?? "", a.src, a.volume, a.label ?? ""].join("|");
  return [
    m.name, m.fps, m.width, m.height, m.total, m.background ?? "", (m.order ?? []).join(","),
    ...UNIT_KINDS.flatMap((kind) => unitsOf(m, kind).map(unit)),
    ...(m.sfx ?? []).map((a) => audio("sfx", a)),
    ...(m.bgm ?? []).map((a) => audio("bgm", a)),
  ].join("\n");
};

/** Stable id of "which promo version": stored into ProjectData.source; `?import=project` uses it to decide whether the archive is stale */
export const manifestKey = (m: WorkbenchManifest) =>
  `${m.name}@${m.total}f#${m.revision ?? fnv1a(canonical(m))}`;
