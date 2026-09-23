import React, { useRef } from "react";
import type { PropField } from "../cards/types";
import { cardFps, inOffsetFps, sourceLength } from "../cards/types";
import { CARDS } from "../cards/registry";
import { findClip, useStore } from "../store";

/** A single inspector control: rendered by schema field type */
const PropControl: React.FC<{
  field: PropField;
  value: unknown;
  onChange: (v: unknown) => void;
  onBegin: () => void;
}> = ({ field, value, onChange, onBegin }) => {
  switch (field.type) {
    case "text":
      return (
        <input
          type="text"
          value={String(value ?? "")}
          onFocus={onBegin}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    case "textarea":
      return (
        <textarea
          rows={3}
          value={String(value ?? "")}
          onFocus={onBegin}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    case "number":
      return (
        <span className="ctl-row">
          <input
            type="number"
            value={Number(value ?? 0)}
            min={field.min}
            max={field.max}
            step={field.step ?? 1}
            onFocus={onBegin}
            onChange={(e) => onChange(Number(e.target.value))}
          />
          {field.unit && <span className="unit">{field.unit}</span>}
        </span>
      );
    case "slider":
      return (
        <span className="ctl-row">
          <input
            type="range"
            value={Number(value ?? field.default)}
            min={field.min}
            max={field.max}
            step={field.step}
            onPointerDown={onBegin}
            onChange={(e) => onChange(Number(e.target.value))}
          />
          <span className="slider-val">
            {Number(value ?? field.default)}
            {field.unit ?? ""}
          </span>
        </span>
      );
    case "color":
      return (
        <span className="ctl-row">
          <input
            type="color"
            value={String(value ?? field.default)}
            onFocus={onBegin}
            onChange={(e) => onChange(e.target.value)}
          />
          <input
            type="text"
            className="color-text"
            value={String(value ?? field.default)}
            onFocus={onBegin}
            onChange={(e) => onChange(e.target.value)}
          />
        </span>
      );
    case "select":
      return (
        <select
          value={String(value ?? field.default)}
          onFocus={onBegin}
          onChange={(e) => onChange(e.target.value)}
        >
          {field.options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      );
    case "boolean":
      return (
        <input
          type="checkbox"
          checked={Boolean(value ?? field.default)}
          onChange={(e) => {
            onBegin();
            onChange(e.target.checked);
          }}
        />
      );
  }
};

const Row: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <label className="prop-row">
    <span className="prop-label">{label}</span>
    <span className="prop-ctl">{children}</span>
  </label>
);

export const Inspector: React.FC = () => {
  const project = useStore((s) => s.project);
  const selectedClipId = useStore((s) => s.selectedClipId);
  const updateClip = useStore((s) => s.updateClip);
  const updateClipProps = useStore((s) => s.updateClipProps);
  const removeClip = useStore((s) => s.removeClip);
  const commit = useStore((s) => s.commit);

  const hit = selectedClipId ? findClip(project, selectedClipId) : null;
  // Consecutive edits merge into one undo step: only gaps >800ms push a new snapshot
  const lastBeginRef = useRef(0);

  if (!hit) {
    return (
      <div className="inspector">
        <div className="panel-title">Inspector</div>
        <div className="inspector-empty dim">
          Select a clip on the timeline, then adjust its
          <br />
          text, colors, animation timing,
          <br />
          speed and layer properties here.
          <br />
          <br />
          Shortcuts: Space Play · S Split
          <br />
          Delete Delete · ⌘Z Undo · ⌘D Duplicate
        </div>
      </div>
    );
  }

  const { track, clip } = hit;
  const card = CARDS[clip.cardId];
  const fps = project.fps;
  // Card authoring fps ≠ project fps (only frame-authored cards need the notice; media cards run on wall-clock so they are immune)
  const srcFps = card ? cardFps(card) : fps;
  const fpsMismatch = !!card && card.timing !== "realtime" && srcFps !== fps;
  // Trim-in is measured in source frames (see inOffsetFps); converting to seconds cannot always use project fps
  const inFps = inOffsetFps(card, fps);
  // Each edit gesture start pushes an undo snapshot; rapid consecutive inputs merge into one step
  const begin = () => {
    const now = Date.now();
    if (now - lastBeginRef.current > 800) commit();
    lastBeginRef.current = now;
  };

  return (
    <div className="inspector">
      <div className="panel-title">
        {card?.name ?? clip.cardId}
        <span className="dim" style={{ marginLeft: 8, fontWeight: 400 }}>
          {track.name}
        </span>
      </div>

      <div className="inspector-scroll">
        {card && card.schema.length > 0 && (
          <section>
            <div className="sec-title">Content & Style</div>
            {card.schema.map((field) => (
              <Row key={field.key} label={field.label}>
                <PropControl
                  field={field}
                  value={clip.props[field.key] ?? field.default}
                  onChange={(v) => updateClipProps(clip.id, { [field.key]: v })}
                  onBegin={begin}
                />
              </Row>
            ))}
          </section>
        )}

        <section>
          <div className="sec-title">Timing & Speed</div>
          <Row label="Start">
            <span className="ctl-row">
              <input
                type="number"
                value={Number((clip.start / fps).toFixed(2))}
                min={0}
                step={0.1}
                onFocus={begin}
                onChange={(e) =>
                  updateClip(clip.id, { start: Math.max(0, Math.round(Number(e.target.value) * fps)) })
                }
              />
              <span className="unit">s</span>
            </span>
          </Row>
          <Row label="Duration">
            <span className="ctl-row">
              <input
                type="number"
                value={Number((clip.duration / fps).toFixed(2))}
                min={2 / fps}
                step={0.1}
                onFocus={begin}
                onChange={(e) =>
                  updateClip(clip.id, {
                    duration: Math.max(2, Math.round(Number(e.target.value) * fps)),
                  })
                }
              />
              <span className="unit">s</span>
            </span>
          </Row>
          <Row label="Speed">
            <span className="ctl-row">
              <input
                type="range"
                min={0.25}
                max={4}
                step={0.05}
                value={clip.speed}
                onPointerDown={begin}
                onChange={(e) => updateClip(clip.id, { speed: Number(e.target.value) })}
              />
              <span className="slider-val">{clip.speed}×</span>
            </span>
          </Row>
          <Row label="">
            <span className="ctl-row preset-row">
              {[0.5, 1, 1.5, 2].map((v) => (
                <button
                  key={v}
                  className={`mini preset${clip.speed === v ? " on" : ""}`}
                  onClick={() => {
                    begin();
                    updateClip(clip.id, { speed: v });
                  }}
                >
                  {v}×
                </button>
              ))}
            </span>
          </Row>
          <Row label="Trim In">
            <span className="ctl-row">
              <input
                type="number"
                value={Number((clip.inOffset / inFps).toFixed(2))}
                min={0}
                step={0.1}
                onFocus={begin}
                onChange={(e) =>
                  updateClip(clip.id, {
                    inOffset: Math.max(0, Math.round(Number(e.target.value) * inFps)),
                  })
                }
              />
              <span className="unit">s</span>
            </span>
          </Row>
          {card && (
            <Row label="">
              <button
                className="mini"
                title="Restore duration to the card's original length (converted at the current speed)"
                onClick={() => {
                  begin();
                  updateClip(clip.id, {
                    duration: Math.max(
                      2,
                      Math.round((sourceLength(card, fps) - clip.inOffset) / clip.speed),
                    ),
                  });
                }}
              >
                ↺ Restore Original Duration
              </button>
            </Row>
          )}
          {fpsMismatch && (
            <div className="dim" style={{ fontSize: 11, lineHeight: 1.5, padding: "4px 0 2px" }}>
              This card is authored at {srcFps}fps, project runs at {fps}fps: its duration was converted on insert with a {(srcFps / fps).toFixed(2)}× speed factor to keep the rhythm.
              If the card times things by useVideoConfig().fps (spring etc.), pacing still drifts by {(fps / srcFps).toFixed(2)}×.
            </div>
          )}
        </section>

        <section>
          <div className="sec-title">Layer</div>
          <Row label="Opacity">
            <span className="ctl-row">
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={clip.opacity}
                onPointerDown={begin}
                onChange={(e) => updateClip(clip.id, { opacity: Number(e.target.value) })}
              />
              <span className="slider-val">{Math.round(clip.opacity * 100)}%</span>
            </span>
          </Row>
          <Row label="Scale">
            <span className="ctl-row">
              <input
                type="range"
                min={0.2}
                max={3}
                step={0.01}
                value={clip.scale}
                onPointerDown={begin}
                onChange={(e) => updateClip(clip.id, { scale: Number(e.target.value) })}
              />
              <span className="slider-val">{clip.scale.toFixed(2)}</span>
            </span>
          </Row>
          <Row label="Offset X">
            <span className="ctl-row">
              <input
                type="number"
                value={clip.x}
                step={2}
                onFocus={begin}
                onChange={(e) => updateClip(clip.id, { x: Number(e.target.value) })}
              />
              <span className="unit">px</span>
            </span>
          </Row>
          <Row label="Offset Y">
            <span className="ctl-row">
              <input
                type="number"
                value={clip.y}
                step={2}
                onFocus={begin}
                onChange={(e) => updateClip(clip.id, { y: Number(e.target.value) })}
              />
              <span className="unit">px</span>
            </span>
          </Row>
        </section>

        <section>
          <button className="btn danger" onClick={() => removeClip(clip.id)}>
            Delete Clip
          </button>
        </section>
      </div>
    </div>
  );
};
