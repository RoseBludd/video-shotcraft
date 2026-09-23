import React, { useRef, useState } from "react";
import { projectDuration, useStore } from "../store";
import { Ruler } from "./Ruler";
import { ClipView } from "./ClipView";
import { DRAG_MIME, readDragPayload } from "../dnd";

const HEADER_W = 140;

/** Playhead vertical line: the only timeline component subscribing to the playhead — while playing, each frame moves only it */
const PlayheadLine: React.FC = () => {
  const playhead = useStore((s) => s.playhead);
  const ppf = useStore((s) => s.pxPerFrame);
  return (
    <div className="playhead" style={{ left: HEADER_W + playhead * ppf }}>
      <div className="playhead-cap" />
    </div>
  );
};

export const Timeline: React.FC = () => {
  const project = useStore((s) => s.project);
  const ppf = useStore((s) => s.pxPerFrame);
  const selectedClipId = useStore((s) => s.selectedClipId);
  const setZoom = useStore((s) => s.setZoom);
  const select = useStore((s) => s.select);
  const addTrack = useStore((s) => s.addTrack);
  const removeTrack = useStore((s) => s.removeTrack);
  const toggleTrackHidden = useStore((s) => s.toggleTrackHidden);
  const moveTrack = useStore((s) => s.moveTrack);
  const splitClip = useStore((s) => s.splitClip);
  const duplicateClip = useStore((s) => s.duplicateClip);
  const removeClip = useStore((s) => s.removeClip);
  const addClip = useStore((s) => s.addClip);

  const duration = projectDuration(project);
  const contentW = Math.ceil(duration * ppf) + 240;
  const laneRefs = useRef(new Map<string, HTMLDivElement>());
  const scrollerRef = useRef<HTMLDivElement>(null);

  const trackIdAt = (clientY: number): string | null => {
    for (const [id, el] of laneRefs.current) {
      const r = el.getBoundingClientRect();
      if (clientY >= r.top && clientY <= r.bottom) return id;
    }
    return null;
  };

  const fit = () => {
    const w = scrollerRef.current?.clientWidth;
    if (w) setZoom((w - HEADER_W - 80) / duration);
  };

  // —— Track drag reorder: hold the track header and drag up/down; a blue line marks the insert slot, drop to commit (one undo step)——
  const rowRefs = useRef(new Map<string, HTMLDivElement>());
  /** While dragging: the dragged track id + target insert slot (original array index, 0..tracks.length) */
  const [trackDrag, setTrackDrag] = useState<{ id: string; to: number } | null>(null);

  const onTrackHeadDown = (trackId: string) => (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    if ((e.target as HTMLElement).closest("button")) return; // 👁 / ✕ clicks pass through
    e.preventDefault();
    const startY = e.clientY;
    const from = useStore.getState().project.tracks.findIndex((t) => t.id === trackId);
    if (from < 0) return;
    let to = from;
    let dragging = false;
    const onMove = (ev: PointerEvent) => {
      if (!dragging) {
        if (Math.abs(ev.clientY - startY) < 4) return; // jitter threshold: a click is not a drag
        dragging = true;
        setTrackDrag({ id: trackId, to });
      }
      // Insert slot = number of tracks whose centerline is above the pointer
      let idx = 0;
      for (const t of useStore.getState().project.tracks) {
        const el = rowRefs.current.get(t.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (ev.clientY > r.top + r.height / 2) idx++;
      }
      // Auto-scroll when the pointer nears the timeline's top/bottom edges so tracks can be dragged to off-screen slots
      const sc = scrollerRef.current;
      if (sc) {
        const r = sc.getBoundingClientRect();
        if (ev.clientY < r.top + 40) sc.scrollTop -= 10;
        else if (ev.clientY > r.bottom - 30) sc.scrollTop += 10;
      }
      if (idx !== to) {
        to = idx;
        setTrackDrag({ id: trackId, to: idx });
      }
    };
    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      setTrackDrag(null);
      if (dragging) moveTrack(trackId, to); // store ignores same-position drops
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp, { once: true });
  };

  /** Insertion line's top inside tl-content; not drawn when dropping back in place */
  const dropLineTop = (): number | null => {
    if (!trackDrag) return null;
    const tracks = project.tracks;
    const from = tracks.findIndex((t) => t.id === trackDrag.id);
    if (trackDrag.to === from || trackDrag.to === from + 1) return null;
    if (trackDrag.to < tracks.length) {
      const el = rowRefs.current.get(tracks[trackDrag.to].id);
      return el ? el.offsetTop : null;
    }
    const last = tracks.length ? rowRefs.current.get(tracks[tracks.length - 1].id) : null;
    return last ? last.offsetTop + last.offsetHeight : null;
  };
  const dropTop = dropLineTop();

  return (
    <div className={`timeline${trackDrag ? " track-dragging" : ""}`}>
      <div className="tl-toolbar">
        <button
          className="btn"
          disabled={!selectedClipId}
          title="Split the selected clip at the playhead (S)"
          onClick={() =>
            selectedClipId && splitClip(selectedClipId, useStore.getState().playhead)
          }
        >
          ✂ Split
        </button>
        <button
          className="btn"
          disabled={!selectedClipId}
          title="Duplicate the selected clip (⌘D)"
          onClick={() => selectedClipId && duplicateClip(selectedClipId)}
        >
          ⧉ Duplicate
        </button>
        <button
          className="btn"
          disabled={!selectedClipId}
          title="Delete the selected clip (Delete)"
          onClick={() => selectedClipId && removeClip(selectedClipId)}
        >
          🗑 Delete
        </button>
        <span className="tl-sep" />
        <button className="btn" onClick={addTrack} title="Add a track (placed on top)">
          ＋ Track
        </button>
        <span style={{ marginLeft: "auto" }} />
        <button className="btn" onClick={fit} title="Zoom to fit all content">
          ⤢ Fit
        </button>
        <span className="dim">Zoom</span>
        <input
          type="range"
          min={0.3}
          max={8}
          step={0.1}
          value={ppf}
          onChange={(e) => setZoom(Number(e.target.value))}
          style={{ width: 120 }}
        />
      </div>

      <div className="tl-scroller" ref={scrollerRef}>
        <div className="tl-content" style={{ width: contentW + HEADER_W }}>
          <div className="tl-ruler-row">
            <div className="tl-corner" style={{ width: HEADER_W }} />
            <Ruler durationFrames={duration} contentW={contentW} />
          </div>

          {project.tracks.map((track) => (
            <div
              className={`tl-row${trackDrag?.id === track.id ? " dragging" : ""}`}
              key={track.id}
              ref={(el) => {
                if (el) rowRefs.current.set(track.id, el);
                else rowRefs.current.delete(track.id);
              }}
            >
              <div
                className="tl-track-head"
                style={{ width: HEADER_W }}
                title="Drag up/down to reorder tracks (upper covers lower)"
                onPointerDown={onTrackHeadDown(track.id)}
              >
                <span className="track-grip" aria-hidden>
                  ⋮⋮
                </span>
                <span className="track-name" title={track.name}>
                  {track.name}
                </span>
                <span className="track-actions">
                  <button
                    className="mini"
                    title={track.hidden ? "Show Track" : "Hide Track"}
                    onClick={() => toggleTrackHidden(track.id)}
                  >
                    {track.hidden ? "🚫" : "👁"}
                  </button>
                  <button
                    className="mini"
                    title="Delete Track"
                    onClick={() => {
                      if (
                        track.clips.length === 0 ||
                        window.confirm(`Delete track "${track.name}" and its ${track.clips.length} clips?`)
                      )
                        removeTrack(track.id);
                    }}
                  >
                    ✕
                  </button>
                </span>
              </div>
              <div
                className={`tl-lane${track.hidden ? " hidden-track" : ""}`}
                ref={(el) => {
                  if (el) laneRefs.current.set(track.id, el);
                  else laneRefs.current.delete(track.id);
                }}
                style={{ width: contentW }}
                onPointerDown={() => select(null)}
                onDragOver={(e) => {
                  if (e.dataTransfer.types.includes(DRAG_MIME)) {
                    e.preventDefault();
                    e.dataTransfer.dropEffect = "copy";
                  }
                }}
                onDrop={(e) => {
                  const payload = readDragPayload(e);
                  if (!payload) return;
                  e.preventDefault();
                  const rect = e.currentTarget.getBoundingClientRect();
                  const frame = Math.max(0, Math.round((e.clientX - rect.left) / ppf));
                  addClip(payload.cardId, track.id, frame, {
                    props: payload.props,
                    label: payload.label,
                    duration: payload.duration,
                  });
                }}
              >
                {track.clips.map((clip) => (
                  <ClipView key={clip.id} clip={clip} trackId={track.id} trackIdAt={trackIdAt} />
                ))}
              </div>
            </div>
          ))}

          {dropTop !== null && <div className="track-drop-line" style={{ top: dropTop - 1 }} />}
          <PlayheadLine />
        </div>
      </div>
    </div>
  );
};
