import React from "react";
import { AbsoluteFill, Freeze, Sequence, useCurrentFrame } from "remotion";
import type { ProjectData } from "../types";
import { CARDS } from "../cards/registry";
import { defaultsOf } from "../cards/types";

/** Time remap: clip-local frame → card source frame (inOffset + f × speed).
 *  Cards are pure functions of frame (tweens clamp), so speed changes / trim-in / over-length freeze are all safe.
 *  When speed is 1 and no trim-in, pass through without Freeze — cards with Audio/Video need native playback (Freeze kills the sound). */
const TimeRemap: React.FC<{
  inOffset: number;
  speed: number;
  children: React.ReactNode;
}> = ({ inOffset, speed, children }) => {
  const frame = useCurrentFrame();
  if (speed === 1 && inOffset === 0) return <>{children}</>;
  return <Freeze frame={Math.max(0, inOffset + frame * speed)}>{children}</Freeze>;
};

export const MainComposition: React.FC<{ project: ProjectData }> = ({ project }) => {
  // In the UI tracks[0] is the topmost track → rendered last (covers the rest)
  const ordered = [...project.tracks].reverse();
  return (
    <AbsoluteFill style={{ background: project.background ?? "#0e0e10" }}>
      {ordered.map(
        (track) =>
          !track.hidden &&
          track.clips.map((clip) => {
            const card = CARDS[clip.cardId];
            if (!card) return null;
            const Comp = card.component;
            const duration = Math.max(1, Math.round(clip.duration));
            const props: Record<string, unknown> = { ...defaultsOf(card), ...clip.props };
            // Promo components compute exit fade from `duration`/`dur`: we inject the clip's source duration so fades move with stretch/trim
            if (card.durationProp)
              props[card.durationProp] = Math.max(1, Math.round(clip.inOffset + duration * clip.speed));
            // Audio card: trim-in/speed are handled inside the card via <Audio trimBefore playbackRate>,
            // so it cannot be wrapped in Freeze (kills native playback) and needs no layer wrapper
            if (card.kind === "audio") {
              return (
                <Sequence key={clip.id} from={clip.start} durationInFrames={duration}>
                  <Comp {...props} inOffset={clip.inOffset} speed={clip.speed} />
                </Sequence>
              );
            }
            return (
              <Sequence key={clip.id} from={clip.start} durationInFrames={duration}>
                <AbsoluteFill
                  style={{
                    opacity: clip.opacity,
                    transform: `translate(${clip.x}px, ${clip.y}px) scale(${clip.scale})`,
                  }}
                >
                  {card.kind === "video" ? (
                    // Video card: same native playback path as audio, keeps the layer wrapper
                    <Comp {...props} inOffset={clip.inOffset} speed={clip.speed} />
                  ) : (
                    <TimeRemap inOffset={clip.inOffset} speed={clip.speed}>
                      <Comp {...props} />
                    </TimeRemap>
                  )}
                </AbsoluteFill>
              </Sequence>
            );
          }),
      )}
    </AbsoluteFill>
  );
};
