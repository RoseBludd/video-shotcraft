import { create } from "zustand";
import type { ClipData, ProjectData, TrackData } from "./types";
import { uid } from "./types";
import { CARDS } from "./cards/registry";
import { clipDefaultsFor } from "./cards/types";
import { demoProject } from "./demoProject";
import { MANIFEST } from "./cards/projectCards";
import { manifestKey } from "./cards/manifest";
import { buildProjectFromManifest } from "./projectImport";

export { projectDuration } from "./types";

const STORAGE_KEY = "shotcraft-workbench-project-v1";

const loadSaved = (): ProjectData | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const p = JSON.parse(raw) as ProjectData;
      if (p && Array.isArray(p.tracks)) return p;
    }
  } catch {
    /* Broken archives fall back silently */
  }
  return null;
};

/** Initial project:
 *  - URL carries `?import=project` (added when scripts/open.mjs hands off the URL) and a promo is linked:
 *    if the archive is not this promo version (manifest content hash differs, see manifestKey) it re-imports from the manifest,
 *    pushing the old archive onto the undo stack (⌘Z recovers edits); if it is this version, user edits are kept
 *  - otherwise load the archive; with no archive use the demo project */
const loadInitial = (): { project: ProjectData; past: ProjectData[]; imported: boolean } => {
  const saved = loadSaved();
  const params = new URLSearchParams(window.location.search);
  if (params.get("import") === "project" && MANIFEST) {
    window.history.replaceState(null, "", window.location.pathname);
    if (saved?.source !== manifestKey(MANIFEST))
      return { project: buildProjectFromManifest(MANIFEST), past: saved ? [saved] : [], imported: true };
  }
  return { project: saved ?? demoProject(), past: [], imported: false };
};
const initial = loadInitial();

const clone = <T,>(v: T): T => JSON.parse(JSON.stringify(v));

export const findClip = (
  project: ProjectData,
  clipId: string,
): { track: TrackData; clip: ClipData } | null => {
  for (const track of project.tracks) {
    const clip = track.clips.find((c) => c.id === clipId);
    if (clip) return { track, clip };
  }
  return null;
};

/** Library click preview: cards preview through a live Player, files through native video/img/audio */
export type PreviewItem =
  | { kind: "card"; cardId: string }
  | { kind: "video" | "image" | "audio"; file: string; label: string }
  | null;

interface WorkbenchState {
  project: ProjectData;
  selectedClipId: string | null;
  playhead: number;
  playing: boolean;
  pxPerFrame: number;
  previewItem: PreviewItem;
  past: ProjectData[];
  future: ProjectData[];

  /** Call before an edit gesture begins: push an undo snapshot */
  commit: () => void;
  undo: () => void;
  redo: () => void;

  setProject: (p: ProjectData) => void;
  select: (id: string | null) => void;
  setPlayhead: (f: number) => void;
  setPlaying: (b: boolean) => void;
  setZoom: (pxPerFrame: number) => void;
  setPreview: (p: PreviewItem) => void;

  addTrack: () => void;
  removeTrack: (trackId: string) => void;
  toggleTrackHidden: (trackId: string) => void;
  /** Drag reorder: move the track to insert position toIndex (original array index: 0 = topmost, tracks.length = bottom) */
  moveTrack: (trackId: string, toIndex: number) => void;

  addClip: (
    cardId: string,
    trackId?: string,
    at?: number,
    extra?: { props?: Record<string, unknown>; label?: string; duration?: number },
  ) => void;
  updateClip: (clipId: string, patch: Partial<ClipData>) => void;
  updateClipProps: (clipId: string, propPatch: Record<string, unknown>) => void;
  removeClip: (clipId: string) => void;
  splitClip: (clipId: string, atFrame: number) => void;
  duplicateClip: (clipId: string) => void;
  moveClipToTrack: (clipId: string, trackId: string) => void;
}

const mutateProject = (
  project: ProjectData,
  fn: (draft: ProjectData) => void,
): ProjectData => {
  const draft = clone(project);
  fn(draft);
  return draft;
};

export const useStore = create<WorkbenchState>((set, get) => ({
  project: initial.project,
  selectedClipId: null,
  playhead: 0,
  playing: false,
  pxPerFrame: 2,
  previewItem: null,
  past: initial.past,
  future: [],

  commit: () =>
    set((s) => ({ past: [...s.past.slice(-49), clone(s.project)], future: [] })),

  undo: () =>
    set((s) => {
      if (!s.past.length) return s;
      const prev = s.past[s.past.length - 1];
      return {
        project: prev,
        past: s.past.slice(0, -1),
        future: [clone(s.project), ...s.future.slice(0, 49)],
        selectedClipId: null,
      };
    }),

  redo: () =>
    set((s) => {
      if (!s.future.length) return s;
      const next = s.future[0];
      return {
        project: next,
        past: [...s.past.slice(-49), clone(s.project)],
        future: s.future.slice(1),
        selectedClipId: null,
      };
    }),

  setProject: (p) => {
    get().commit();
    set({ project: p, selectedClipId: null });
  },
  select: (id) => set({ selectedClipId: id }),
  setPlayhead: (f) => set({ playhead: Math.max(0, Math.round(f)) }),
  setPlaying: (b) => set({ playing: b }),
  setZoom: (pxPerFrame) =>
    set({ pxPerFrame: Math.min(10, Math.max(0.3, pxPerFrame)) }),
  setPreview: (p) => set({ previewItem: p }),

  addTrack: () => {
    get().commit();
    set((s) => ({
      project: mutateProject(s.project, (d) => {
        d.tracks.unshift({ id: uid("track"), name: `Track ${d.tracks.length + 1}`, clips: [] });
      }),
    }));
  },

  removeTrack: (trackId) => {
    get().commit();
    set((s) => ({
      project: mutateProject(s.project, (d) => {
        d.tracks = d.tracks.filter((t) => t.id !== trackId);
      }),
      selectedClipId: null,
    }));
  },

  toggleTrackHidden: (trackId) => {
    get().commit();
    set((s) => ({
      project: mutateProject(s.project, (d) => {
        const t = d.tracks.find((t) => t.id === trackId);
        if (t) t.hidden = !t.hidden;
      }),
    }));
  },

  moveTrack: (trackId, toIndex) => {
    const tracks = get().project.tracks;
    const from = tracks.findIndex((t) => t.id === trackId);
    const to = Math.max(0, Math.min(tracks.length, Math.round(toIndex)));
    // Inserting before or right after itself = same position, no undo entry
    if (from < 0 || to === from || to === from + 1) return;
    get().commit();
    set((s) => ({
      project: mutateProject(s.project, (d) => {
        const [t] = d.tracks.splice(from, 1);
        d.tracks.splice(to > from ? to - 1 : to, 0, t);
      }),
    }));
  },

  addClip: (cardId, trackId, at, extra) => {
    const card = CARDS[cardId];
    if (!card) return;
    get().commit();
    const newId = uid("clip");
    set((s) => ({
      project: mutateProject(s.project, (d) => {
        const track =
          d.tracks.find((t) => t.id === trackId) ?? d.tracks[d.tracks.length - 1];
        if (!track) return;
        // Cards are authored at their own sourceFps (card library 30, project units = manifest fps); when project fps differs, convert duration +
        // scale speed inversely, keeping playback speed; media cards (realtime) convert duration only, no speed change.
        // The drag payload's duration (the library's default length for video / audio) shares durationInFrames' units and converts with it
        const { duration, speed } = clipDefaultsFor(card, d.fps, extra?.duration);
        track.clips.push({
          id: newId,
          cardId,
          start: Math.max(0, Math.round(at ?? s.playhead)),
          duration,
          inOffset: 0,
          speed,
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          props: extra?.props ?? {},
          label: extra?.label,
        });
      }),
      selectedClipId: newId,
    }));
  },

  updateClip: (clipId, patch) =>
    set((s) => ({
      project: mutateProject(s.project, (d) => {
        const hit = findClip(d, clipId);
        if (hit) Object.assign(hit.clip, patch);
      }),
    })),

  updateClipProps: (clipId, propPatch) =>
    set((s) => ({
      project: mutateProject(s.project, (d) => {
        const hit = findClip(d, clipId);
        if (hit) hit.clip.props = { ...hit.clip.props, ...propPatch };
      }),
    })),

  removeClip: (clipId) => {
    get().commit();
    set((s) => ({
      project: mutateProject(s.project, (d) => {
        for (const t of d.tracks) t.clips = t.clips.filter((c) => c.id !== clipId);
      }),
      selectedClipId:
        s.selectedClipId === clipId ? null : s.selectedClipId,
    }));
  },

  splitClip: (clipId, atFrame) => {
    const hit = findClip(get().project, clipId);
    if (!hit) return;
    const { clip } = hit;
    const local = Math.round(atFrame - clip.start);
    if (local <= 0 || local >= clip.duration) return;
    get().commit();
    const rightId = uid("clip");
    set((s) => ({
      project: mutateProject(s.project, (d) => {
        const h = findClip(d, clipId);
        if (!h) return;
        const left = h.clip;
        const right: ClipData = {
          ...clone(left),
          id: rightId,
          start: left.start + local,
          duration: left.duration - local,
          inOffset: left.inOffset + local * left.speed,
        };
        left.duration = local;
        h.track.clips.push(right);
      }),
      selectedClipId: rightId,
    }));
  },

  duplicateClip: (clipId) => {
    const hit = findClip(get().project, clipId);
    if (!hit) return;
    get().commit();
    const newId = uid("clip");
    set((s) => ({
      project: mutateProject(s.project, (d) => {
        const h = findClip(d, clipId);
        if (!h) return;
        const copy: ClipData = {
          ...clone(h.clip),
          id: newId,
          start: h.clip.start + h.clip.duration,
        };
        h.track.clips.push(copy);
      }),
      selectedClipId: newId,
    }));
  },

  moveClipToTrack: (clipId, trackId) =>
    set((s) => ({
      project: mutateProject(s.project, (d) => {
        const hit = findClip(d, clipId);
        const target = d.tracks.find((t) => t.id === trackId);
        if (!hit || !target || hit.track.id === trackId) return;
        hit.track.clips = hit.track.clips.filter((c) => c.id !== clipId);
        target.clips.push(hit.clip);
      }),
    })),
}));

// —— Autosave: every edit debounces 800ms into localStorage; saving immediately on page hide / tab switch ——
let saveTimer: ReturnType<typeof setTimeout> | undefined;
const flushSave = () => {
  clearTimeout(saveTimer);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(useStore.getState().project));
  } catch {
    /* Storage full / private mode: ignore */
  }
};
useStore.subscribe((s, prev) => {
  if (s.project === prev.project) return;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(flushSave, 800);
});
window.addEventListener("beforeunload", flushSave);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") flushSave();
});
// Projects re-imported from a manifest persist immediately: otherwise a refresh with no edits rolls back to the old archive
if (initial.imported) flushSave();

export const resetProject = () => {
  useStore.getState().setProject(demoProject());
};

/** Re-import from the linked promo project's manifest (one undo step) */
export const importProject = () => {
  if (!MANIFEST) return;
  useStore.getState().setProject(buildProjectFromManifest(MANIFEST));
};
