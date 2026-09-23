// Genius OS promo — shot map, copy, captions, SFX beats (30.0s @ 30fps, 900f).
export const GOS_SHOTS = {
  brand: { from: 0, duration: 100 }, // 0–3.3s wordmark stamp + tagline
  base: { from: 100, duration: 135 }, // 3.3–7.8s dashboard push-in
  card1: { from: 235, duration: 50 }, // 7.8–9.5s title card
  messaging: { from: 285, duration: 115 }, // 9.5–13.3s team messages popup
  ide: { from: 400, duration: 120 }, // 13.3–17.3s CADIS agent welcome
  ideImport: { from: 520, duration: 110 }, // 17.3–21s github picker → file tree
  clients: { from: 630, duration: 145 }, // 21–25.8s client branding + live preview
  outro: { from: 775, duration: 125 }, // 25.8–30s defocus + sign-off
} as const; // sum = 900

export const GOS_TOTAL = 900;

export const TITLE_CARDS = {
  card1: { text: 'Your whole operation, *one* console.' },
  card2: { text: 'Every client, *white-label* ready.' },
} as const;

export const ACCENT = '#2ce5a7'; // genius. teal
export const INK = '#f2f5f4';
export const FIELD = '#0b0f14';

export const CAPTIONS = [
  { from: 125, duration: 45, text: 'EVERY CLIENT · EVERY PROJECT · ONE CONSOLE' },
  { from: 298, duration: 55, text: 'TEAM CHAT, TIED TO THE WORK' },
  { from: 415, duration: 55, text: 'CADIS BUILDS IT — IN THE GENIUS IDE' },
  { from: 533, duration: 55, text: 'IMPORT FROM GITHUB · DEPLOY IN ONE CLICK' },
  { from: 648, duration: 70, text: 'WHITE-LABEL BY DEFAULT · LIVE PREVIEW BUILT IN' },
] as const;

export const FLASH_CUTS = [235, 285, 400, 520, 575, 630] as const;

const SHORT_SFX = new Set(['keyboard.mp3']);
export const sfxDuration = (s: { src: string }) => (SHORT_SFX.has(s.src) ? 24 : 90);

export const SFX: { from: number; src: string; volume: number }[] = [
  { from: 12, src: 'transition-soft.mp3', volume: 0.4 }, // wordmark stamps
  { from: 86, src: 'whoosh-fast.mp3', volume: 0.45 }, // brand → dashboard
  { from: 205, src: 'whoosh-big.mp3', volume: 0.4 }, // dashboard pull-back
  { from: 235, src: 'swoosh-quick.mp3', volume: 0.4 }, // title card 1
  { from: 290, src: 'whoosh-big.mp3', volume: 0.5 }, // messaging popup pop
  { from: 396, src: 'transition-snap.mp3', volume: 0.5 }, // messaging → IDE
  { from: 415, src: 'keyboard.mp3', volume: 0.4 }, // under CADIS welcome
  { from: 522, src: 'click-camera.mp3', volume: 0.5 }, // import picker opens
  { from: 574, src: 'whoosh-fast.mp3', volume: 0.4 }, // whip pan picker → tree
  { from: 633, src: 'transition-soft.mp3', volume: 0.4 }, // into clients
  { from: 712, src: 'click-camera.mp3', volume: 0.35 }, // live preview settle
  { from: 745, src: 'sparkle.mp3', volume: 0.3 }, // preview glint
  { from: 778, src: 'riser-cine.mp3', volume: 0.5 }, // into outro
  { from: 812, src: 'impact-cine.mp3', volume: 0.55 }, // sign-off stamp
  { from: 868, src: 'sparkle.mp3', volume: 0.3 }, // tagline glint
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
