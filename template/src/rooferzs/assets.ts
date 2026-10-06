// Rooferzs promo — LIVE capture slots + hybrid clips (V2 / L14 PASS 2026-10-06 CT).
// Labels = landing product names only (no Budget 2.0). No generative-AI UI video.
import type { ShotKey, ShotSrc } from './timing';

export type CaptureSlot = {
  src: string | null;
  pageH: number;
  ready: boolean;
  surface: ShotSrc;
  target: string;
  /** Optional L14 live clip under public/ (OffthreadVideo). */
  clip?: string | null;
};

export const ROOF_ASSETS = {
  railHero: {
    src: 'rooferzs/live/S03-rail-hero.png',
    pageH: 1080,
    ready: true,
    surface: 'AG',
    target: 'AGENTIC ROOFING 8-bot rail; JH Jordan Hale chip',
  },
  stormMap: {
    // Prefer pins-overlay still when present (SW regional soft note mitigated).
    src: 'rooferzs/live/S04-storm-map-pins-overlay.png',
    pageH: 1080,
    ready: true,
    surface: 'AG',
    target: 'Storm Tracker channel (L3 PASS — severity + pins overlay)',
  },
  doorKnock: {
    src: 'rooferzs/live/S06-door-knock.png',
    pageH: 1080,
    ready: true,
    surface: 'AG',
    target: 'Canvassing · street-zoom door pins (L4/L14 PASS)',
    clip: 'rooferzs/live/clip-door-pin-drop.webm',
  },
  prospectCall: {
    src: 'rooferzs/live/S07-prospect-call.png',
    pageH: 1080,
    ready: true,
    surface: 'AG',
    target: 'Prospecting + Callerzs campaign preview (not deployed)',
  },
  emailDrafts: {
    src: 'rooferzs/live/S08-email-drafts.png',
    pageH: 1080,
    ready: true,
    surface: 'AG',
    target: 'Integration Bot email follow-ups thread (read-only)',
  },
  photosProof: {
    src: 'rooferzs/live/S10-photos-proof.png',
    pageH: 1080,
    ready: true,
    surface: 'APP',
    target: 'Jobs list fallback (job detail gallery not opened this pass)',
  },
  cadisEmbed: {
    src: 'rooferzs/live/S11-cadis-embed.png',
    pageH: 1080,
    ready: true,
    surface: 'EMB',
    target: 'AGENT panel chat typing → CADIS Approve (L14 clip)',
    clip: 'rooferzs/live/clip-chat-type.webm',
  },
  jobRecord: {
    // Prefer BB-4121 financials job record still.
    src: 'rooferzs/live/S12-job-record.png',
    pageH: 1080,
    ready: true,
    surface: 'APP',
    target: 'Master job record (BB-4121 financials)',
  },
  rolesConfig: {
    src: 'rooferzs/live/S13-roles-config.png',
    pageH: 1080,
    ready: true,
    surface: 'AG',
    target: 'Config Bot roles reply',
  },
  portalUpdate: {
    src: 'rooferzs/live/S15-portal-update.png',
    pageH: 1080,
    ready: true,
    surface: 'AG',
    target: 'PM Bot drafted client update (portal fallback)',
  },
  isolUpload: {
    src: 'rooferzs/live/S16-isol-upload.png',
    pageH: 1080,
    ready: true,
    surface: 'AG',
    target: 'Budget Bot Estimating / JBC / ISOL thread',
  },
  jbcNumbers: {
    src: 'rooferzs/live/S17-jbc-numbers.png',
    pageH: 1080,
    ready: true,
    surface: 'AG',
    target: 'Estimating / JBC RCV tile reveal (L14 clip)',
    clip: 'rooferzs/live/clip-estimate-amount.webm',
  },
  marginPunch: {
    src: 'rooferzs/live/S18-margin-punch.png',
    pageH: 1080,
    ready: true,
    surface: 'AG',
    target: 'Display tiles fallback for margin punch',
  },
  pmApprove: {
    src: 'rooferzs/live/S19-pm-approve.png',
    pageH: 1080,
    ready: true,
    surface: 'AG',
    target: 'Estimating / JBC isol thread fallback for PM approve',
  },
  pmSchedule: {
    src: 'rooferzs/live/S20-pm-schedule.png',
    pageH: 1080,
    ready: true,
    surface: 'AG',
    target: 'Project Management Bot schedule timeline',
  },
  integrations: {
    src: 'rooferzs/live/S21-integrations.png',
    pageH: 1080,
    ready: true,
    surface: 'AG',
    target: 'Integration Bot connected tools',
  },
} satisfies Partial<Record<ShotKey, CaptureSlot>>;

export type CaptureKey = keyof typeof ROOF_ASSETS;
