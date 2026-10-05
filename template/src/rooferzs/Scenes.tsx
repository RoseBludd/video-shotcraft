// Rooferzs promo — scenes. Mirrors gos/Scenes.tsx.
// SCAFFOLD: GFX shots are film-built placeholders in brand tokens; every live shot renders an
// empty capture slot until its Stage 4 capture lands in assets.ts (no invented product frames).
import { AbsoluteFill, interpolate, useCurrentFrame, Easing } from 'remotion';
import { PageCam } from '../aifl/live/PageCam';
import { ROOF_ASSETS, type CaptureKey } from './assets';
import {
  ACCENT, FIELD, HAIRLINE, INK, MUTED, RAISED, ROOF_SHOTS, STORM,
} from './timing';

const SANS = 'Geist, ui-sans-serif, system-ui';
const MONO = '"Geist Mono", ui-monospace, SFMono-Regular, Menlo, monospace';
const clamp = { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' } as const;

const DarkField: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill style={{ backgroundColor: FIELD, overflow: 'hidden' }}>{children}</AbsoluteFill>
);

/** Text wordmark stand-in: roof + erzs (sky) + . — swap for /rooferzs-wordmark-white.png when imported. */
const Wordmark: React.FC<{ size: number; spacing?: number }> = ({ size, spacing = -0.03 }) => (
  <div style={{ fontFamily: SANS, fontSize: size, fontWeight: 800, color: INK, letterSpacing: `${spacing}em` }}>
    roof<span style={{ color: ACCENT }}>erzs</span>.
  </div>
);

/** Deterministic rain streaks (no Math.random — frame-stable). */
const Rain: React.FC<{ opacity?: number }> = ({ opacity = 0.35 }) => {
  const frame = useCurrentFrame();
  const drops = Array.from({ length: 70 }, (_, i) => {
    const x = (i * 137.5) % 1920;
    const speed = 38 + ((i * 53) % 24);
    const y = ((i * 211 + frame * speed) % 1300) - 200;
    const len = 60 + ((i * 29) % 70);
    return { x, y, len };
  });
  return (
    <AbsoluteFill style={{ opacity }}>
      {drops.map((d, i) => (
        <div
          key={i}
          style={{
            position: 'absolute', left: d.x, top: d.y, width: 2, height: d.len,
            background: 'linear-gradient(180deg, transparent, rgba(148,163,184,0.55))',
            transform: 'rotate(12deg)',
          }}
        />
      ))}
    </AbsoluteFill>
  );
};

/** S01 — cold open: rain, split-flap clock SAT · 6:00 AM, dutch-roll −10° → level on beat 4. */
export const ColdOpenScene: React.FC = () => {
  const frame = useCurrentFrame();
  const roll = interpolate(frame, [36, 50], [-10, 0], { ...clamp, easing: Easing.out(Easing.cubic) });
  const flap = (i: number) => interpolate(frame, [6 + i * 3, 12 + i * 3], [90, 0], clamp);
  const subT = interpolate(frame, [24, 36], [0, 1], clamp);
  const chars = 'SAT · 6:00 AM'.split('');
  return (
    <DarkField>
      <Rain />
      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', transform: `rotate(${roll}deg)` }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {chars.map((c, i) => (
            <div
              key={i}
              style={{
                width: c === ' ' ? 30 : 92, height: 140, borderRadius: 10,
                background: c === ' ' ? 'transparent' : RAISED,
                border: c === ' ' ? 'none' : `1px solid ${HAIRLINE}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: MONO, fontSize: 96, fontWeight: 700, color: INK,
                transform: `perspective(600px) rotateX(${flap(i)}deg)`,
              }}
            >
              {c}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40, fontFamily: MONO, fontSize: 34, letterSpacing: '0.3em', color: STORM, opacity: subT }}>
          HAIL · NORTH DALLAS, TX
        </div>
      </AbsoluteFill>
    </DarkField>
  );
};

/** S02 — brand: wordmark letterspace-materialize, tagline, dark-tunnel push-out at tail. */
export const BrandScene: React.FC = () => {
  const frame = useCurrentFrame();
  const d = ROOF_SHOTS.brand.duration;
  const markT = interpolate(frame, [20, 36], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
  const spacing = interpolate(markT, [0, 1], [0.4, -0.03]);
  const tagT = interpolate(frame, [40, 54], [0, 1], clamp);
  const push = interpolate(frame, [d - 28, d - 18], [1, 1.12], { ...clamp, easing: Easing.in(Easing.quad) });
  const outT = interpolate(frame, [d - 18, d - 12], [1, 0], clamp);
  return (
    <DarkField>
      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', transform: `scale(${push})`, opacity: outT }}>
        <div style={{ opacity: markT, filter: `blur(${(1 - markT) * 8}px)` }}>
          <Wordmark size={150} spacing={spacing} />
        </div>
        <div style={{ marginTop: 34, fontFamily: SANS, fontSize: 44, fontWeight: 600, color: MUTED, opacity: tagT }}>
          Same storm. <span style={{ color: ACCENT, fontStyle: 'italic' }}>Different</span> Saturday.
        </div>
      </AbsoluteFill>
    </DarkField>
  );
};

/** Empty capture slot: light panel on the gray-950 stage, labelled with shot id + product name. */
const CapturePlaceholder: React.FC<{ shotKey: CaptureKey }> = ({ shotKey }) => {
  const frame = useCurrentFrame();
  const shot = ROOF_SHOTS[shotKey];
  const slot = ROOF_ASSETS[shotKey];
  const inT = interpolate(frame, [0, 10], [0, 1], clamp);
  const push = interpolate(frame, [0, shot.duration], [1, 1.04], clamp);
  return (
    <DarkField>
      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div
          style={{
            width: 1500, height: 820, borderRadius: 18, background: '#f9fafb',
            border: '3px dashed #cbd5e1', boxShadow: '0 40px 120px rgba(0,0,0,0.6)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: 22, opacity: inT, transform: `scale(${push})`,
          }}
        >
          <div style={{ fontFamily: MONO, fontSize: 30, letterSpacing: '0.2em', color: '#64748b' }}>
            {shot.id} · {shot.slug} · {slot.surface}
          </div>
          <div style={{ fontFamily: SANS, fontSize: 88, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>
            {shot.label}
          </div>
          <div style={{ fontFamily: MONO, fontSize: 26, color: ACCENT, letterSpacing: '0.3em' }}>LIVE CAPTURE PENDING</div>
          <div style={{ maxWidth: 1200, textAlign: 'center', fontFamily: SANS, fontSize: 28, color: '#475569' }}>
            {slot.target}
          </div>
        </div>
      </AbsoluteFill>
    </DarkField>
  );
};

/** Live shot: PageCam over the capture once it lands, else the empty slot. */
export const CaptureShot: React.FC<{ shotKey: CaptureKey }> = ({ shotKey }) => {
  const slot = ROOF_ASSETS[shotKey];
  const shot = ROOF_SHOTS[shotKey];
  if (!slot.ready || !slot.src) return <CapturePlaceholder shotKey={shotKey} />;
  return (
    <PageCam
      src={slot.src}
      pageH={slot.pageH}
      keys={[
        // TODO(stage 5): per-shot camera grammar from timing-table.md (LEAD / CAM column)
        { frame: 0, cx: 960, cy: slot.pageH / 2, zoom: 1.2 },
        { frame: shot.duration, cx: 960, cy: slot.pageH / 2, zoom: 1.3 },
      ]}
    />
  );
};

/** S22 — pricing: '14' counts up → '-day free trial', plan row. Typographic GFX only. */
export const PricingScene: React.FC = () => {
  const frame = useCurrentFrame();
  const n = Math.round(interpolate(frame, [4, 28], [0, 14], { ...clamp, easing: Easing.out(Easing.cubic) }));
  const tailT = interpolate(frame, [26, 38], [0, 1], clamp);
  const rowT = interpolate(frame, [38, 52], [0, 1], clamp);
  const plans = ['Growth', 'Storm Team', 'Enterprise'];
  return (
    <DarkField>
      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
          <span style={{ fontFamily: SANS, fontSize: 220, fontWeight: 800, color: ACCENT }}>{n}</span>
          <span style={{ fontFamily: SANS, fontSize: 92, fontWeight: 700, color: INK, opacity: tailT }}>-day free trial</span>
        </div>
        <div style={{ display: 'flex', gap: 28, marginTop: 40, opacity: rowT }}>
          {plans.map((p) => (
            <div
              key={p}
              style={{
                padding: '18px 34px', borderRadius: 14, border: `1px solid ${p === 'Storm Team' ? ACCENT : HAIRLINE}`,
                background: RAISED, fontFamily: SANS, fontSize: 34, fontWeight: 600, color: INK,
              }}
            >
              {p}
              {p === 'Storm Team' ? <span style={{ marginLeft: 14, fontSize: 22, color: ACCENT }}>MOST POPULAR</span> : null}
            </div>
          ))}
        </div>
      </AbsoluteFill>
    </DarkField>
  );
};

/** S23 — outro: wordmark stamp at local f75 (HIT #3), CTA, hold ≥60f. Live-crop fan = TODO (needs captures). */
export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const stampT = interpolate(frame, [75, 85], [0, 1], { ...clamp, easing: Easing.bezier(0.2, 1.4, 0.3, 1) });
  const scale = interpolate(frame, [75, 85], [1.35, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
  const tagT = interpolate(frame, [88, 100], [0, 1], clamp);
  const ctaT = interpolate(frame, [96, 108], [0, 1], clamp);
  const stageT = interpolate(frame, [0, 40], [0, 1], clamp);
  return (
    <DarkField>
      <div
        style={{
          position: 'absolute', inset: 0, opacity: stageT,
          background: 'radial-gradient(ellipse at 50% 42%, rgba(56,189,248,0.12), transparent 55%)',
        }}
      />
      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ transform: `scale(${scale})`, opacity: stampT }}>
          <Wordmark size={170} />
        </div>
        <div style={{ marginTop: 30, fontFamily: SANS, fontSize: 44, fontWeight: 700, color: INK, opacity: tagT }}>
          From storm to nail. One agent, eight bots.
        </div>
        <div style={{ marginTop: 36, fontFamily: MONO, fontSize: 34, color: ACCENT, letterSpacing: '0.12em', opacity: ctaT }}>
          rooferzs.com · Get started free
        </div>
        <div style={{ marginTop: 26, fontFamily: SANS, fontSize: 24, color: MUTED, opacity: ctaT }}>Built on Genius.</div>
      </AbsoluteFill>
    </DarkField>
  );
};
