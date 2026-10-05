// Rooferzs promo — shot map, copy, captions, SFX beats (60.0s @ 30fps, 1800f, 1920×1080).
// Mirrors gos/timing.ts. Shot table GENERATED from the locked `.shots.py`
// (projects/rooferzs-promo/2026-10-05, optimal lock 2026-10-05 17:19 CT) — see ./timing-table.md.
// Planning grid = placeholder 120 BPM → 1 beat = 15f, 1 bar = 60f. Re-time in beatF(n) after
// BGM analysis (Stage 6). Viewer-facing labels = landing / product names only.

export const FPS = 30;
export const BEAT = 15; // frames per beat @ placeholder 120 BPM
export const beatF = (n: number) => n * BEAT;

/** Footage source: AG = agent.rooferzs.com · EMB = app AGENT embed · APP = app.rooferzs.com · GFX = film-built. */
export type ShotSrc = 'AG' | 'EMB' | 'APP' | 'GFX';
export type Segment = 'brandOpen' | 'hero' | 'climb' | 'launch';
export type Shot = {
  id: string;
  slug: string;
  src: ShotSrc;
  segment: Segment;
  label: string;
  beats: number;
  from: number;
  duration: number;
};

export const ROOF_SHOTS = {
  coldOpen: { id: 'S01', slug: 'cold-open', src: 'GFX', segment: 'brandOpen', label: "Cold open", beats: 4, from: 0, duration: 60 }, // 0.00–2.00s
  brand: { id: 'S02', slug: 'brand', src: 'GFX', segment: 'brandOpen', label: "Rooferzs", beats: 6, from: 60, duration: 90 }, // 2.00–5.00s
  railHero: { id: 'S03', slug: 'rail-hero', src: 'AG', segment: 'hero', label: "Agentic Roofing", beats: 5, from: 150, duration: 75 }, // 5.00–7.50s
  stormMap: { id: 'S04', slug: 'storm-map', src: 'AG', segment: 'hero', label: "Storm Tracker", beats: 8, from: 225, duration: 120 }, // 7.50–11.50s
  tc1Crews: { id: 'S05', slug: 'tc1-crews', src: 'GFX', segment: 'climb', label: "Title card", beats: 3, from: 345, duration: 45 }, // 11.50–13.00s
  doorKnock: { id: 'S06', slug: 'door-knock', src: 'AG', segment: 'climb', label: "Canvassing", beats: 7, from: 390, duration: 105 }, // 13.00–16.50s
  prospectCall: { id: 'S07', slug: 'prospect-call', src: 'AG', segment: 'climb', label: "AI Calling", beats: 6, from: 495, duration: 90 }, // 16.50–19.50s
  emailDrafts: { id: 'S08', slug: 'email-drafts', src: 'AG', segment: 'climb', label: "Email Follow-ups", beats: 6, from: 585, duration: 90 }, // 19.50–22.50s
  tc2Proof: { id: 'S09', slug: 'tc2-proof', src: 'GFX', segment: 'climb', label: "Title card", beats: 3, from: 675, duration: 45 }, // 22.50–24.00s
  photosProof: { id: 'S10', slug: 'photos-proof', src: 'APP', segment: 'climb', label: "Photos → Adjuster Packet", beats: 6, from: 720, duration: 90 }, // 24.00–27.00s
  cadisEmbed: { id: 'S11', slug: 'cadis-embed', src: 'EMB', segment: 'climb', label: "AI Agent / CADIS", beats: 7, from: 810, duration: 105 }, // 27.00–30.50s
  jobRecord: { id: 'S12', slug: 'job-record', src: 'APP', segment: 'climb', label: "Master Job Record", beats: 6, from: 915, duration: 90 }, // 30.50–33.50s
  rolesConfig: { id: 'S13', slug: 'roles-config', src: 'AG', segment: 'climb', label: "Teams & Roles", beats: 4, from: 1005, duration: 60 }, // 33.50–35.50s
  tc3Sign: { id: 'S14', slug: 'tc3-sign', src: 'GFX', segment: 'climb', label: "Title card", beats: 3, from: 1065, duration: 45 }, // 35.50–37.00s
  portalUpdate: { id: 'S15', slug: 'portal-update', src: 'APP', segment: 'climb', label: "Client Portal", beats: 6, from: 1110, duration: 90 }, // 37.00–40.00s
  isolUpload: { id: 'S16', slug: 'isol-upload', src: 'AG', segment: 'climb', label: "Estimating / JBC", beats: 5, from: 1200, duration: 75 }, // 40.00–42.50s
  jbcNumbers: { id: 'S17', slug: 'jbc-numbers', src: 'AG', segment: 'climb', label: "Estimating / JBC", beats: 4, from: 1275, duration: 60 }, // 42.50–44.50s
  marginPunch: { id: 'S18', slug: 'margin-punch', src: 'APP', segment: 'climb', label: "Estimating / JBC", beats: 2, from: 1335, duration: 30 }, // 44.50–45.50s
  pmApprove: { id: 'S19', slug: 'pm-approve', src: 'APP', segment: 'climb', label: "Estimating / JBC", beats: 5, from: 1365, duration: 75 }, // 45.50–48.00s
  pmSchedule: { id: 'S20', slug: 'pm-schedule', src: 'AG', segment: 'climb', label: "PM Scheduling", beats: 6, from: 1440, duration: 90 }, // 48.00–51.00s
  integrations: { id: 'S21', slug: 'integrations', src: 'AG', segment: 'launch', label: "Integrations", beats: 4, from: 1530, duration: 60 }, // 51.00–53.00s
  pricingTrial: { id: 'S22', slug: 'pricing-trial', src: 'GFX', segment: 'launch', label: "Pricing", beats: 5, from: 1590, duration: 75 }, // 53.00–55.50s
  outro: { id: 'S23', slug: 'outro', src: 'GFX', segment: 'launch', label: "Outro", beats: 9, from: 1665, duration: 135 }, // 55.50–60.00s
} as const satisfies Record<string, Shot>; // 23 shots · sum = 1800

export type ShotKey = keyof typeof ROOF_SHOTS;
export const SHOT_ORDER = Object.keys(ROOF_SHOTS) as ShotKey[];

export const ROOF_TOTAL = 1800;

// —— integrity: contiguous, beat-aligned, sums to ROOF_TOTAL (throws at module load if broken) ——
{
  let f = 0;
  for (const k of SHOT_ORDER) {
    const s: Shot = ROOF_SHOTS[k];
    if (s.from !== f) throw new Error(`RooferzsPromo timing gap at ${s.id}: from=${s.from} expected ${f}`);
    if (s.duration !== beatF(s.beats)) throw new Error(`RooferzsPromo ${s.id} duration != beats*${BEAT}`);
    f += s.duration;
  }
  if (f !== ROOF_TOTAL || SHOT_ORDER.length !== 23) {
    throw new Error(`RooferzsPromo timing: ${SHOT_ORDER.length} shots / ${f}f, expected 23 / ${ROOF_TOTAL}f`);
  }
}

export const TITLE_CARDS = {
  tc1Crews: { text: '7:30 AM — Crews roll with the *route*.', variant: 'dark' },
  tc2Proof: { text: '11:00 AM — Proof before the *ladder* comes down.', variant: 'light' },
  tc3Sign: { text: '5:00 PM — One link. One *tap*.', variant: 'dark' },
} as const;

// Brand tokens (film-built graphics only; live UI is never recolored). Manifest §3.
export const FIELD = '#030712'; // gray-950 stage
export const RAISED = '#1f2937'; // gray-800
export const HAIRLINE = '#374151'; // gray-700
export const INK = '#f9fafb'; // gray-50
export const PAPER = '#ffffff';
export const ACCENT = '#38bdf8'; // sky-400 (dark)
export const ACCENT_LIGHT = '#0284c7'; // sky-600 (light paper)
export const STORM = '#f59e0b'; // amber-500 — storm/hail semantics only
export const SUCCESS = '#059669'; // emerald-600 — approvals
export const MUTED = '#9ca3af';

/** Burned-in captions (pre-C1 placeholder copy; final rewrite after picture lock).
 * Rule §5.1: enter ≥8f after shot start, hold ≥40f, clear ≥6f before the cut.
 * Title cards (S05/S09/S14) and S18 carry no caption. Landing / product names only. */
const cap = (k: ShotKey, text: string) => {
  const s = ROOF_SHOTS[k];
  return { shot: s.id, from: s.from + 8, duration: s.duration - 14, text };
};
export const CAPTIONS = [
  cap('coldOpen', 'SAT · 6:00 AM · HAIL · NORTH DALLAS, TX'),
  cap('railHero', 'AGENTIC ROOFING · 8 BOTS · ONE AGENT'),
  cap('stormMap', 'STORM TRACKER · IMPACT ZONE, LIVE · EVERY DOOR TIED TO A CREW'),
  cap('doorKnock', 'CANVASSING · EVERY DOOR, OPEN OR PINNED'),
  cap('prospectCall', 'AI CALLING · PREVIEW BEFORE IT GOES LIVE'),
  cap('emailDrafts', 'EMAIL FOLLOW-UPS · 9 DRAFTED · NOTHING SENDS WITHOUT YOU'),
  cap('photosProof', 'PHOTOS → ADJUSTER PACKET'),
  cap('cadisEmbed', 'CADIS · EVERY WRITE WAITS FOR YOUR APPROVAL'),
  cap('jobRecord', 'ONE MASTER JOB RECORD'),
  cap('rolesConfig', 'TEAMS & ROLES · MARGINS STAY PRIVATE'),
  cap('portalUpdate', 'CLIENT PORTAL · ONE LINK · ONE TAP'),
  cap('isolUpload', 'ESTIMATING / JBC · DROP THE ISOL · AI READS THE SCOPE'),
  cap('jbcNumbers', 'ESTIMATING / JBC · RCV · ACV · NO RE-ENTRY'),
  cap('pmApprove', 'ESTIMATOR SUBMITS · PM APPROVES'),
  cap('pmSchedule', 'PM SCHEDULING · NEXT AM, SCHEDULED'),
  cap('integrations', 'WORKS WITH YOUR STACK'),
  cap('pricingTrial', '14-DAY FREE TRIAL · NO CREDIT CARD'),
] as const;

/** Full-frame hits (aesthetic-rules R4: ≤3, spaced ≥16 beats). */
export const HITS = {
  flash: 630, // HIT #1 white-flash on S08 draft open (FlashCut from 625, 5f each side)
  crashZoom: 1335, // HIT #2 crash-zoom-punch ‹MARGIN› (S18)
  stamp: 1740, // HIT #3 outro wordmark stamp (S23 local f75)
} as const;
export const FLASH_CUTS = [HITS.flash] as const;

/** Key cue frames (absolute) from timing-table.md. */
export const CUES = {
  wordmarkLands: 96,
  railArrives: 150,
  stormTap: 225,
  silenceStart: 1428, // 1428–1440 total silence
  hardCut: 1440,
  outroRiser: 1665,
} as const;

/** Beat-pinned SFX. Only files present in public/audio are referenced; manifest assets not yet
 * licensed/imported (thunder/rain bed, mech flaps, impact-deep-whoosh, ui/switch-*) are TODO. */
export const SFX: { from: number; src: string; volume: number; duration: number }[] = [
  { from: 96, src: 'transition-soft.mp3', volume: 0.4, duration: 45 }, // wordmark lands
  { from: 140, src: 'whoosh-big.mp3', volume: 0.4, duration: 45 }, // dark-tunnel → agent shell
  { from: 240, src: 'whoosh-big.mp3', volume: 0.4, duration: 45 }, // S04 crane rise
  { from: 345, src: 'swoosh-quick.mp3', volume: 0.4, duration: 30 }, // TC1
  { from: 487, src: 'whoosh-fast.mp3', volume: 0.35, duration: 30 }, // S06 → S07 whip-pan
  { from: 630, src: 'click-camera.mp3', volume: 0.6, duration: 30 }, // HIT #1 draft open
  { from: 675, src: 'swoosh-quick.mp3', volume: 0.4, duration: 30 }, // TC2
  { from: 830, src: 'keyboard.mp3', volume: 0.4, duration: 30 }, // S11 prompt typing (trimmed 30f)
  { from: 1065, src: 'swoosh-quick.mp3', volume: 0.4, duration: 30 }, // TC3
  { from: 1205, src: 'keyboard.mp3', volume: 0.35, duration: 44 }, // S16 ISOL write-in (trimmed 44f)
  { from: 1335, src: 'transition-snap.mp3', volume: 0.5, duration: 30 }, // HIT #2 crash zoom
  { from: 1424, src: 'click-camera.mp3', volume: 0.5, duration: 4 }, // S19 approve click at apex — must clear by 1428 (silence)
  { from: 1530, src: 'whoosh-fast.mp3', volume: 0.4, duration: 30 }, // S21 page flip
  { from: 1665, src: 'riser-cine.mp3', volume: 0.5, duration: 75 }, // outro riser
  { from: 1740, src: 'impact-cine.mp3', volume: 0.55, duration: 60 }, // HIT #3 stamp (sub for impact-deep-whoosh)
  { from: 1765, src: 'sparkle.mp3', volume: 0.3, duration: 35 }, // sparkle tail
];

/** `*word*` marks the accent (italic accent color) in title-card copy. */
export const parseWords = (text: string): { text: string; accent?: boolean }[] =>
  text
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => {
      const m = w.match(/^\*(.+)\*$/);
      return m ? { text: m[1], accent: true } : { text: w };
    });
