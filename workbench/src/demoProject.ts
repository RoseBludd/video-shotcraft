import type { ProjectData } from "./types";
import { uid } from "./types";

/** Initial demo project (when no promo project is linked): paper background + two demo shot cards in sequence + title card + caption strip.
 *  Also the defaultProps source for the Remotion Studio "Main" composition — keep it pure, never import the store. */
export const demoProject = (): ProjectData => {
  const clip = (cardId: string, start: number, duration: number, props: Record<string, unknown> = {}, label?: string) => ({
    id: uid("clip"), cardId, start, duration, inOffset: 0, speed: 1, opacity: 1, scale: 1, x: 0, y: 0, props, label,
  });
  return {
    name: "Untitled Project",
    fps: 30,
    width: 1920,
    height: 1080,
    background: "#f2eee6",
    tracks: [
      {
        id: uid("track"),
        name: "Captions",
        clips: [clip("inkpress-caption", 70, 60, { text: "COUNT UP · CONFETTI" })],
      },
      {
        id: uid("track"),
        name: "Shots",
        clips: [
          clip("inkpress-title-card", 0, 55, { text: "Every shot, *tuned* in one place." }, "Title Card"),
          clip("demo:CounterConfetti", 55, 138, {}, "Digit Sprint Confetti"),
          clip("demo:CrashImpactReal", 193, 120, {}, "Crash Impact Push-In"),
          clip("inkpress-title-card", 313, 55, { text: "Drag a card. *Tweak* it. Export." }, "Title Card"),
        ],
      },
      {
        id: uid("track"),
        name: "Backgrounds",
        clips: [clip("bg-paper", 0, 368)],
      },
    ],
  };
};
