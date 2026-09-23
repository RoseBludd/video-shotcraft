import React, { useEffect, useRef, useState } from "react";
import { Player, type PlayerRef } from "@remotion/player";
import type { CardDef } from "../cards/types";
import { cardFps, cardSize, defaultsOf } from "../cards/types";
import { CARD_LIST } from "../cards/registry";
import { DEMO_CATEGORIES } from "../cards/demoCards";
import { MANIFEST } from "../cards/projectCards";
import { importProject, useStore } from "../store";
import { sfxUsage } from "../projectImport";
import { BGM_LIB, MEDIA_ITEMS, SFX_LIB } from "../mediaManifest";
import { PROJ_DIR, PROJ_HAS_MANIFEST, PROJ_LINKED } from "../projMeta";
import { setDragPayload } from "../dnd";

const TABS = [
  { id: "media", label: "Media" },
  { id: "cards", label: "Motion Library" },
  { id: "sfx", label: "SFX" },
] as const;
type TabId = (typeof TABS)[number]["id"];

/** Categories excluded from the motion library: project units appear only on the Media tab; media goes to Media / SFX tabs; preset background cards stay out of the library
 *  (backdrop clips already in a project still render via the registry) */
const NON_MOTION_CATS = new Set(["Project Units", "Audio", "Media", "Backgrounds"]);

/** Heavy content (preview videos / live Player) mounts only when in view */
const useVisible = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([en]) => setVisible(en.isIntersecting), {
      rootMargin: "100px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
};

/** Preview video that loads and loops only once in view */
const LazyLoopVideo: React.FC<{ src: string }> = ({ src }) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([en]) => setVisible(en.isIntersecting), {
      rootMargin: "100px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (visible) setLoaded(true);
  }, [visible]);
  useEffect(() => {
    const el = ref.current;
    if (!el || !loaded) return;
    if (visible) el.play().catch(() => {});
    else el.pause();
  }, [visible, loaded]);
  return (
    <video
      ref={ref}
      className="lib-thumb"
      src={loaded ? src : undefined}
      muted
      loop
      playsInline
      autoPlay
      preload="none"
    />
  );
};

/** Cards without a pre-rendered video: a live Player acts as the thumbnail when visible — **frozen at the 45% beauty frame**, looping only on hover.
 *  Auto-loop used to be the default: a dozen 1080p scenes ran at once, the flash-cut card strobed every 0.3s, title cards faded out and restarted every 1.8s,
 *  the first paint looked like a strobe light; large images re-decoding also spewed a stack of EncodingErrors. */
const LazyCardLoop: React.FC<{ card: CardDef }> = ({ card }) => {
  const { ref, visible } = useVisible();
  const { width, height } = cardSize(card);
  const player = useRef<PlayerRef>(null);
  const [hover, setHover] = useState(false);
  const total = Math.max(2, card.durationInFrames);
  const poster = Math.min(total - 1, Math.round(total * 0.45));
  // .lib-thumb itself is pointer-events:none (so drags land on .lib-cell); hover listeners attach to the owning cell
  useEffect(() => {
    const cell = ref.current?.closest(".lib-cell");
    if (!cell) return;
    const on = () => setHover(true);
    const off = () => setHover(false);
    cell.addEventListener("pointerenter", on);
    cell.addEventListener("pointerleave", off);
    return () => {
      cell.removeEventListener("pointerenter", on);
      cell.removeEventListener("pointerleave", off);
    };
  }, [ref]);
  useEffect(() => {
    const p = player.current;
    if (!p) return;
    if (hover) {
      p.seekTo(0);
      p.play();
    } else {
      p.pause();
      p.seekTo(poster);
    }
  }, [hover, poster, visible]);
  return (
    <div ref={ref} className="lib-thumb" style={{ position: "relative" }}>
      {visible && (
        <Player
          ref={player}
          component={card.component}
          inputProps={defaultsOf(card)}
          durationInFrames={total}
          compositionWidth={width}
          compositionHeight={height}
          fps={cardFps(card)}
          initialFrame={poster}
          loop
          controls={false}
          initiallyMuted
          numberOfSharedAudioTags={0}
          style={{ width: "100%", height: "100%", pointerEvents: "none" }}
          acknowledgeRemotionLicense
        />
      )}
    </div>
  );
};

const groupBy = <T,>(items: T[], key: (t: T) => string) => {
  const m = new Map<string, T[]>();
  for (const it of items) {
    const k = key(it);
    const g = m.get(k);
    if (g) g.push(it);
    else m.set(k, [it]);
  }
  return [...m.entries()];
};

export const LibraryPanel: React.FC = () => {
  const setPreview = useStore((s) => s.setPreview);
  const [tab, setTab] = useState<TabId>(PROJ_LINKED ? "media" : "cards");
  // Collapsed groups start closed, click the heading to expand
  const [openCats, setOpenCats] = useState<Set<string>>(new Set());
  const toggleCat = (cat: string) =>
    setOpenCats((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });

  /** Common shell for grid cells: click = stage preview, drag = onto a track */
  const Cell: React.FC<{
    name: string;
    meta?: string;
    title?: string;
    onClick: () => void;
    payload: Parameters<typeof setDragPayload>[1];
    children: React.ReactNode;
  }> = ({ name, meta, title, onClick, payload, children }) => (
    <div
      className="lib-cell"
      draggable
      onDragStart={(e) => setDragPayload(e, payload)}
      onClick={onClick}
      title={`${name}${title ? `\n${title}` : ""}\nClick to preview, drag onto a track to add`}
    >
      {children}
      <div className="lib-cell-name">{name}</div>
      {meta && <div className="lib-cell-meta dim">{meta}</div>}
    </div>
  );

  /** Motion-card grid cell */
  const CardCell: React.FC<{ card: CardDef }> = ({ card }) => (
    <Cell
      name={card.name}
      meta={`${(card.durationInFrames / cardFps(card)).toFixed(1)}s${card.schema.length > 0 ? " · Tunable" : ""}`}
      title={card.summary}
      onClick={() => setPreview({ kind: "card", cardId: card.id })}
      payload={{ cardId: card.id, label: card.name }}
    >
      {card.preview ? <LazyLoopVideo src={`/${card.preview}`} /> : <LazyCardLoop card={card} />}
    </Cell>
  );

  /** List rows for SFX and other non-visual items */
  const Row: React.FC<{
    dot: string;
    name: string;
    meta?: string;
    onClick: () => void;
    payload: Parameters<typeof setDragPayload>[1];
  }> = ({ dot, name, meta, onClick, payload }) => (
    <div
      className="lib-card"
      draggable
      onDragStart={(e) => setDragPayload(e, payload)}
      onClick={onClick}
      title={`${name} · Click to preview, drag onto a track to add`}
    >
      <span className="lib-dot" style={{ background: dot }} />
      <span className="lib-name">{name}</span>
      {meta && <span className="lib-dur">{meta}</span>}
    </div>
  );

  /** Collapsible group heading */
  const Group: React.FC<{ id: string; label: string; count: number; children: React.ReactNode; defaultOpen?: boolean }> =
    ({ id, label, count, children, defaultOpen }) => {
      const open = defaultOpen ? !openCats.has(id) : openCats.has(id);
      return (
        <div>
          <button className="lib-cat-toggle" onClick={() => toggleCat(id)}>
            <span className={`caret${open ? " open" : ""}`}>▸</span>
            {label}
            <span className="dim" style={{ marginLeft: "auto" }}>{count}</span>
          </button>
          {open && children}
        </div>
      );
    };

  const motionCards = CARD_LIST.filter((c) => !NON_MOTION_CATS.has(c.category));
  const projectCards = CARD_LIST.filter((c) => c.category === "Project Units");
  const usage = sfxUsage(MANIFEST);
  const projectAudio = MEDIA_ITEMS.filter((m) => m.kind === "audio");
  const projectVisual = MEDIA_ITEMS.filter((m) => m.kind !== "audio");

  // Motion library: workbench-native cards first, then gallery categories
  const motionGroups = ["Workbench", ...DEMO_CATEGORIES]
    .map((cat) => ({ cat, cards: motionCards.filter((c) => c.category === cat) }))
    .filter((g) => g.cards.length > 0);

  const audioPayload = (file: string, label: string, volume: number, duration: number) =>
    ({ cardId: "audio-clip", props: { file, volume }, label, duration }) as const;

  return (
    <div className="library">
      <div className="lib-tabs">
        {TABS.map((t) => (
          <button
            key={t.id}
            className={`lib-tab${tab === t.id ? " on" : ""}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="library-list">
        {tab === "media" && (
          <>
            {MANIFEST ? (
              <button
                className="btn wide"
                title={`Split the linked promo into a multi-track project (shots / transitions / captions / overlays / SFX / music) from its src/workbench.ts manifest (undoable)\n${PROJ_DIR}`}
                onClick={() => importProject()}
              >
                ⇣ Import Promo: {MANIFEST.name}
              </button>
            ) : (
              <div className="lib-cat" style={{ whiteSpace: "normal", lineHeight: 1.5 }}>
                {PROJ_LINKED
                  ? `Linked to ${PROJ_DIR}, but the project has no src/workbench.ts manifest, so split-import is unavailable (see references/workbench.md)`
                  : "No promo project linked. In workbench/, run: node scripts/open.mjs <promo project dir>"}
              </div>
            )}

            {projectCards.length > 0 && (
              <>
                <div className="lib-cat">Project Units (add another copy)</div>
                <div className="lib-grid">
                  {projectCards.map((card) => (
                    <Cell
                      key={card.id}
                      name={card.name}
                      meta={`${(card.durationInFrames / cardFps(card)).toFixed(1)}s${card.schema.length ? " · Tunable" : ""}`}
                      onClick={() => setPreview({ kind: "card", cardId: card.id })}
                      payload={{ cardId: card.id, label: card.name }}
                    >
                      <LazyCardLoop card={card} />
                    </Cell>
                  ))}
                </div>
              </>
            )}

            {projectVisual.length > 0 && <div className="lib-cat">Media Files (project public/)</div>}
            {groupBy(projectVisual, (m) => m.dir || "/").map(([dir, items]) => (
              <Group key={dir} id={`media:${dir}`} label={dir} count={items.length} defaultOpen={items.length <= 12}>
                <div className="lib-grid">
                  {items.map((m) => (
                    <Cell
                      key={m.file}
                      name={m.name}
                      meta={m.kind === "video" ? "Video" : "Image"}
                      onClick={() => setPreview({ kind: m.kind, file: m.file, label: m.name })}
                      payload={
                        m.kind === "video"
                          ? { cardId: "video-clip", props: { file: m.file }, label: m.name, duration: 150 }
                          : { cardId: "image-clip", props: { file: m.file }, label: m.name, duration: 90 }
                      }
                    >
                      {m.kind === "video" ? (
                        <LazyLoopVideo src={`/${m.file}`} />
                      ) : (
                        <img className="lib-thumb" src={`/${m.file}`} />
                      )}
                    </Cell>
                  ))}
                </div>
              </Group>
            ))}
          </>
        )}

        {tab === "cards" &&
          motionGroups.map((g) => (
            <Group key={g.cat} id={`cat:${g.cat}`} label={g.cat} count={g.cards.length} defaultOpen={g.cat === "Workbench"}>
              <div className="lib-grid">
                {g.cards.map((card) => (
                  <CardCell key={card.id} card={card} />
                ))}
              </div>
            </Group>
          ))}

        {tab === "sfx" && (
          <>
            {projectAudio.length > 0 && (
              <Group id="sfx:proj" label="Project Audio (project public/)" count={projectAudio.length} defaultOpen>
                {projectAudio.map((m) => (
                  <Row
                    key={m.file}
                    dot="#ff9f0a"
                    name={m.name}
                    meta={usage.has(m.file) ? `In film ×${usage.get(m.file)}` : "Unused"}
                    onClick={() => setPreview({ kind: "audio", file: m.file, label: m.name })}
                    payload={audioPayload(m.file, m.name.replace(/\.[^.]+$/, ""), 0.4, 90)}
                  />
                ))}
              </Group>
            )}
            {BGM_LIB.length > 0 && (
              <Group id="sfx:bgm" label="BGM Options (assets/audio/bgm)" count={BGM_LIB.length}>
                {BGM_LIB.map((b) => (
                  <Row
                    key={b.file}
                    dot="#bf5af2"
                    name={b.name}
                    onClick={() => setPreview({ kind: "audio", file: b.file, label: b.name })}
                    payload={audioPayload(b.file, b.name, 0.35, 900)}
                  />
                ))}
              </Group>
            )}
            {groupBy(SFX_LIB, (s) => s.cat).map(([cat, items]) => (
              <Group key={cat} id={`sfx:${cat}`} label={`SFX Library · ${cat}`} count={items.length}>
                {items.map((s) => (
                  <Row
                    key={s.file}
                    dot="#ff9f0a"
                    name={s.name}
                    onClick={() => setPreview({ kind: "audio", file: s.file, label: s.name })}
                    payload={audioPayload(s.file, s.name, 0.4, 90)}
                  />
                ))}
              </Group>
            ))}
          </>
        )}
      </div>

      <div className="lib-foot dim">
        Motion {motionCards.length} cards ({motionCards.filter((c) => c.schema.length > 0).length} tunable)
        · SFX Library {SFX_LIB.length}
        {PROJ_LINKED && PROJ_HAS_MANIFEST ? ` · Project Units ${projectCards.length}` : ""}
        <br />
        Click to preview · drag onto a track to add
      </div>
    </div>
  );
};
