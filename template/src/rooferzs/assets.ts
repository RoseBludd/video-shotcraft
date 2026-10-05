// Rooferzs promo — LIVE capture slots + CSS page geometry (pageW fixed 1920 by PageCam).
// Mirrors gos/assets.ts. EVERY slot is EMPTY until Stage 4 capture on the live surface
// (agent.rooferzs.com / app.rooferzs.com, tenant bluebonnetpeakroofing, signed in as Jordan Hale).
// Do NOT drop rooferzs.com marketing-demo screenshots or invented frames here.
// When a capture lands: put the 2x PNG under public/rooferzs/, set `src` + measured `pageH`,
// flip `ready: true`, and tune the PageCam keys in Scenes.tsx.
import type { ShotKey, ShotSrc } from './timing';

export type CaptureSlot = {
  src: string | null; // staticFile path, e.g. 'rooferzs/S03-rail-hero.png'
  pageH: number; // CSS page height (measured at capture)
  ready: boolean;
  surface: ShotSrc;
  target: string; // what the capture must show (zoom target / live chrome element)
};

const slot = (surface: ShotSrc, target: string): CaptureSlot => ({
  src: null,
  pageH: 1080,
  ready: false,
  surface,
  target,
});

/** Capture slots for every live (AG / EMB / APP) shot. GFX shots are film-built and have no slot. */
export const ROOF_ASSETS = {
  railHero: slot('AG', 'AGENTIC ROOFING 8-bot rail → Storm tap → "Active seat" helper line; JH Jordan Hale chip'),
  stormMap: slot('AG', 'Storm channel inline live map: severity polygon North Dallas → storm row → Crew Alpha chip'),
  doorKnock: slot('AG', 'Canvassing door-pin map (open vs pinned) for Crew Alpha; 3 seeded doors'),
  prospectCall: slot('AG', 'Seeded contact + 555 phone chip → Agent 1–4 chips → campaign preview (not deployed)'),
  emailDrafts: slot('AG', 'Email follow-ups table: 9 "Roofing follow-up" rows, status draft → open one (read-only)'),
  photosProof: slot('APP', 'Job ‹JOB› Gallery/Documents → adjuster packet / photo report'),
  cadisEmbed: slot('EMB', 'AGENT panel "8 tools for your role" → tool cards → approval card → Approve'),
  jobRecord: slot('APP', 'Master job record ‹JOB› live tab bar'),
  rolesConfig: slot('AG', 'Role cards with tool/permission scope (live role labels)'),
  portalUpdate: slot('APP', 'Client portal / client link for ‹JOB› (fallback: drafted homeowner update)'),
  isolUpload: slot('AG', 'Seeded ISOL PDF attach → editable line-item rows (Estimating / JBC)'),
  jbcNumbers: slot('AG', 'RCV ‹RCV› · ACV ‹ACV› · depreciation tiles (live values)'),
  marginPunch: slot('APP', 'Estimating / JBC margin field ‹MARGIN› close-up'),
  pmApprove: slot('APP', 'Estimating / JBC approval state → live approve control'),
  pmSchedule: slot('AG', 'Crew / material schedule week axis (live labels)'),
  integrations: slot('AG', 'Connectors the live tenant lists (text chips only)'),
} as const satisfies Partial<Record<ShotKey, CaptureSlot>>;

export type CaptureKey = keyof typeof ROOF_ASSETS;
