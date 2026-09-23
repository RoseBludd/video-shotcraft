import React from "react";
import { Composition } from "remotion";
import { CARD_LIST } from "../cards/registry";
import { cardFps, cardSize, defaultsOf } from "../cards/types";
import { zodFromCard } from "./zodFromCard";
import { MainComposition } from "../preview/Composition";
import { demoProject } from "../demoProject";
import { projectDuration, projectEndFrame } from "../types";
import type { ProjectData } from "../types";
import { MANIFEST, ORIGINAL } from "../cards/projectCards";
import { buildProjectFromManifest } from "../projectImport";

type MainProps = { project: ProjectData; renderExact?: boolean };
const Main = MainComposition as React.ComponentType<MainProps>;

/** Remotion Studio / CLI entry:
 *  - Main: the whole timeline composition (takes the project JSON exported by the workbench — paste it straight into the right-hand Props panel)
 *  - ProjImported: the project right after a manifest import from the linked promo, untouched (= Main + the import result)
 *  - ProjOriginal: the promo project's own original composition (manifest `original`)
 *    The two should match frame for frame; scripts/parity.mjs compares them
 *  - Each card registers its own composition; the Zod schema is auto-converted from the workbench schema and the Studio Inspector auto-generates the tuning form */
export const RemotionRoot: React.FC = () => {
  const demo = demoProject();
  return (
    <>
      <Composition
        id="Main"
        component={Main}
        durationInFrames={projectDuration(demo)}
        fps={demo.fps}
        width={demo.width}
        height={demo.height}
        defaultProps={{ project: demo, renderExact: false }}
        calculateMetadata={({ props }) => ({
          // Promo export (renderExact) uses the exact content duration; Studio preview keeps 1s of padding
          durationInFrames: props.renderExact
            ? Math.max(2, projectEndFrame(props.project))
            : projectDuration(props.project),
          fps: props.project.fps,
          width: props.project.width,
          height: props.project.height,
        })}
      />
      {MANIFEST && (
        <Composition
          id="ProjImported"
          component={Main}
          durationInFrames={Math.max(2, MANIFEST.total)}
          fps={MANIFEST.fps}
          width={MANIFEST.width}
          height={MANIFEST.height}
          defaultProps={{ project: buildProjectFromManifest(MANIFEST), renderExact: true }}
        />
      )}
      {MANIFEST && ORIGINAL && (
        <Composition
          id="ProjOriginal"
          component={ORIGINAL}
          durationInFrames={Math.max(2, MANIFEST.total)}
          fps={MANIFEST.fps}
          width={MANIFEST.width}
          height={MANIFEST.height}
        />
      )}
      {CARD_LIST.filter((c) => c.kind !== "audio").map((card) => {
        const { width, height } = cardSize(card);
        return (
          <Composition
            key={card.id}
            id={card.id.replace(/[^a-zA-Z0-9-]/g, "-")}
            // Dynamic registration: schema/defaultProps cannot be statically typed, handed to the runtime (zod validates)
            component={card.component as React.ComponentType<Record<string, unknown>>}
            durationInFrames={Math.max(2, card.durationInFrames)}
            fps={cardFps(card)}
            width={width}
            height={height}
            schema={zodFromCard(card) as never}
            defaultProps={defaultsOf(card) as never}
          />
        );
      })}
    </>
  );
};
