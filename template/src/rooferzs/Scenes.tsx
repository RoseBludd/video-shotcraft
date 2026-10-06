// Rooferzs promo — scenes (V2 hybrid: kinetic open + OffthreadVideo clips + stills).
import {
  AbsoluteFill,
  Easing,
  OffthreadVideo,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { PageCam } from '../aifl/live/PageCam';
import { DigitRoll } from '../aifl/DigitRoll';
import { ROOF_ASSETS, type CaptureKey, type CaptureSlot } from './assets';

const asSlot = (k: CaptureKey): CaptureSlot => ROOF_ASSETS[k] as CaptureSlot;
const slotClip = (k: CaptureKey): string | null => asSlot(k).clip ?? null;
import {
  ACCENT, FIELD, HAIRLINE, INK, MUTED, RAISED, ROOF_SHOTS, STORM,
} from './timing';

const SANS = 'Geist, ui-sans-serif, system-ui';
const MONO = '"Geist Mono", ui-monospace, SFMono-Regular, Menlo, monospace';
const clamp = { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' } as const;

const DarkField: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill style={{ backgroundColor: FIELD, overflow: 'hidden' }}>{children}</AbsoluteFill>
);

/** Text wordmark: roof + erzs (sky) + . */
const Wordmark: React.FC<{ size: number; spacing?: number }> = ({ size, spacing = -0.03 }) => (
  <div style={{ fontFamily: SANS, fontSize: size, fontWeight: 800, color: INK, letterSpacing: `${spacing}em` }}>
    roof<span style={{ color: ACCENT }}>erzs</span>.
  </div>
);

/** Soft film grain (frame-stable, no Math.random). */
const Grain: React.FC<{ opacity?: number }> = ({ opacity = 0.04 }) => {
  const frame = useCurrentFrame();
  const dots = Array.from({ length: 48 }, (_, i) => {
    const x = (i * 173 + frame * 3) % 1920;
    const y = (i * 97 + frame * 2) % 1080;
    return { x, y, s: 1 + (i % 3) };
  });
  return (
    <AbsoluteFill style={{ opacity, pointerEvents: 'none' }}>
      {dots.map((d, i) => (
        <div key={i} style={{ position: 'absolute', left: d.x, top: d.y, width: d.s, height: d.s, background: '#fff', borderRadius: 1 }} />
      ))}
    </AbsoluteFill>
  );
};

/** S01 — V2 kinetic cascade: STORM → DOOR → JOB → MARGIN → "Storm to nail. One agent." */
export const ColdOpenScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const words = ['STORM', 'DOOR', 'JOB', 'MARGIN'] as const;
  // Each stamp ~10f cascade; hook lock from f42.
  const active = Math.min(3, Math.floor(frame / 10));
  const hookT = interpolate(frame, [42, 52], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
  const cascadeOut = interpolate(frame, [42, 48], [1, 0.15], clamp);
  const vignette = interpolate(frame, [0, 30], [0, 0.55], clamp);
  return (
    <DarkField>
      <div
        style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse at 50% 45%, transparent 30%, rgba(0,0,0,${vignette}) 78%)`,
        }}
      />
      <Grain />
      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, opacity: cascadeOut, minHeight: 280 }}>
          {words.map((w, i) => {
            const local = frame - i * 10;
            const stamp = spring({ frame: Math.max(0, local), fps, config: { damping: 14, stiffness: 180, mass: 0.6 } });
            const scale = interpolate(stamp, [0, 1], [1.4, 1]);
            const tracking = interpolate(stamp, [0, 1], [-0.08, -0.02]);
            const isActive = i === active && frame < 42;
            const dim = i < active || (frame >= 42 && i < 3) ? 0.25 : 1;
            const fill = i === 3 && local > 0 ? ACCENT : INK;
            if (local < 0) return <div key={w} style={{ height: 64 }} />;
            return (
              <div
                key={w}
                style={{
                  fontFamily: SANS, fontSize: 72, fontWeight: 800, color: fill,
                  letterSpacing: `${tracking}em`,
                  transform: `scale(${scale})`,
                  opacity: isActive ? 1 : dim,
                  textShadow: isActive ? `0 0 40px ${ACCENT}66` : undefined,
                }}
              >
                {w}
              </div>
            );
          })}
        </div>
        <div
          style={{
            position: 'absolute', top: '58%',
            fontFamily: SANS, fontSize: 56, fontWeight: 700, color: INK,
            letterSpacing: `${interpolate(hookT, [0, 1], [0.18, -0.01])}em`,
            opacity: hookT, filter: `blur(${(1 - hookT) * 6}px)`,
          }}
        >
          Storm to nail. <span style={{ color: ACCENT }}>One agent.</span>
        </div>
      </AbsoluteFill>
    </DarkField>
  );
};

/** S02 — brand: wordmark + "The Agentic Roofing CRM" (Saturday tagline killed). */
export const BrandScene: React.FC = () => {
  const frame = useCurrentFrame();
  const d = ROOF_SHOTS.brand.duration;
  const markT = interpolate(frame, [12, 30], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
  const spacing = interpolate(markT, [0, 1], [0.4, -0.03]);
  const tagT = interpolate(frame, [34, 48], [0, 1], clamp);
  const glint = spring({ frame: Math.max(0, frame - 28), fps: 30, config: { damping: 12, stiffness: 200 } });
  const push = interpolate(frame, [d - 28, d - 18], [1, 1.12], { ...clamp, easing: Easing.in(Easing.quad) });
  const outT = interpolate(frame, [d - 18, d - 12], [1, 0], clamp);
  return (
    <DarkField>
      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', transform: `scale(${push})`, opacity: outT }}>
        <div style={{ opacity: markT, filter: `blur(${(1 - markT) * 8}px)`, position: 'relative' }}>
          <Wordmark size={150} spacing={spacing} />
          <div
            style={{
              position: 'absolute', right: 18, top: 18, width: 14, height: 14, borderRadius: 999,
              background: ACCENT, opacity: glint, boxShadow: `0 0 24px ${ACCENT}`,
              transform: `scale(${interpolate(glint, [0, 1], [0.4, 1.2])})`,
            }}
          />
        </div>
        <div style={{ marginTop: 34, fontFamily: SANS, fontSize: 40, fontWeight: 600, color: MUTED, opacity: tagT }}>
          The Agentic Roofing <span style={{ color: ACCENT }}>CRM</span>
        </div>
      </AbsoluteFill>
    </DarkField>
  );
};

/** V2 promise bridge cards (replace clock title cards). */
export const KineticPromiseCard: React.FC<{ left: string; right: string; duration: number }> = ({
  left, right, duration,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const leftSpring = spring({ frame, fps, config: { damping: 14, stiffness: 160 } });
  const arrowT = interpolate(frame, [10, 22], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
  const rightSpring = spring({ frame: Math.max(0, frame - 14), fps, config: { damping: 14, stiffness: 160 } });
  const ruleW = interpolate(frame, [18, 32], [0, 420], clamp);
  const outT = interpolate(frame, [duration - 10, duration - 2], [1, 0], clamp);
  const inT = interpolate(frame, [0, 8], [0, 1], clamp);
  return (
    <DarkField>
      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', opacity: inT * outT }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <div
            style={{
              fontFamily: SANS, fontSize: 72, fontWeight: 800, color: INK, letterSpacing: '-0.03em',
              transform: `scale(${interpolate(leftSpring, [0, 1], [1.35, 1])})`, opacity: leftSpring,
            }}
          >
            {left}
          </div>
          <div
            style={{
              fontFamily: MONO, fontSize: 48, color: ACCENT, opacity: arrowT,
              transform: `translateX(${interpolate(arrowT, [0, 1], [-20, 0])}px)`,
            }}
          >
            →
          </div>
          <div
            style={{
              fontFamily: SANS, fontSize: 72, fontWeight: 800, color: ACCENT, letterSpacing: '-0.03em',
              transform: `scale(${interpolate(rightSpring, [0, 1], [1.35, 1])})`, opacity: rightSpring,
            }}
          >
            {right}
          </div>
        </div>
        <div style={{ marginTop: 28, height: 2, width: ruleW, background: HAIRLINE }} />
      </AbsoluteFill>
    </DarkField>
  );
};

const CapturePlaceholder: React.FC<{ shotKey: CaptureKey }> = ({ shotKey }) => {
  const frame = useCurrentFrame();
  const shot = ROOF_SHOTS[shotKey];
  const slot = asSlot(shotKey);
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

type PunchSpec = { cx: number; cy: number; zoomFrom: number; zoomTo: number; punchAt: number };

const CLIP_PUNCH: Partial<Record<CaptureKey, PunchSpec>> = {
  // Mockingbird pin cluster — lower-center of street map
  doorKnock: { cx: 980, cy: 620, zoomFrom: 1.05, zoomTo: 1.32, punchAt: 36 },
  // Chat input — lower third of AGENT panel
  cadisEmbed: { cx: 1100, cy: 780, zoomFrom: 1.08, zoomTo: 1.38, punchAt: 24 },
  // RCV tile — center-right financials
  jbcNumbers: { cx: 1180, cy: 480, zoomFrom: 1.1, zoomTo: 1.42, punchAt: 18 },
};

const STILL_PUNCH: Partial<Record<CaptureKey, { keys: { frame: number; cx: number; cy: number; zoom: number }[] }>> = {
  railHero: { keys: [{ frame: 0, cx: 720, cy: 540, zoom: 1.15 }, { frame: 75, cx: 760, cy: 500, zoom: 1.28 }] },
  stormMap: { keys: [{ frame: 0, cx: 960, cy: 560, zoom: 1.12 }, { frame: 50, cx: 1000, cy: 520, zoom: 1.28 }, { frame: 120, cx: 1020, cy: 500, zoom: 1.35 }] },
  prospectCall: { keys: [{ frame: 0, cx: 960, cy: 540, zoom: 1.18 }, { frame: 90, cx: 1000, cy: 500, zoom: 1.28 }] },
  emailDrafts: { keys: [{ frame: 0, cx: 960, cy: 540, zoom: 1.15 }, { frame: 45, cx: 980, cy: 520, zoom: 1.32 }, { frame: 90, cx: 980, cy: 500, zoom: 1.35 }] },
  photosProof: { keys: [{ frame: 0, cx: 960, cy: 540, zoom: 1.2 }, { frame: 90, cx: 900, cy: 480, zoom: 1.35 }] },
  jobRecord: { keys: [{ frame: 0, cx: 960, cy: 420, zoom: 1.15 }, { frame: 40, cx: 960, cy: 380, zoom: 1.3 }, { frame: 90, cx: 960, cy: 360, zoom: 1.34 }] },
  rolesConfig: { keys: [{ frame: 0, cx: 960, cy: 540, zoom: 1.18 }, { frame: 60, cx: 960, cy: 500, zoom: 1.28 }] },
  portalUpdate: { keys: [{ frame: 0, cx: 960, cy: 540, zoom: 1.18 }, { frame: 90, cx: 980, cy: 500, zoom: 1.28 }] },
  isolUpload: { keys: [{ frame: 0, cx: 960, cy: 540, zoom: 1.18 }, { frame: 75, cx: 1000, cy: 480, zoom: 1.3 }] },
  marginPunch: { keys: [{ frame: 0, cx: 1100, cy: 500, zoom: 1.25 }, { frame: 12, cx: 1180, cy: 460, zoom: 1.55 }, { frame: 30, cx: 1180, cy: 450, zoom: 1.6 }] },
  pmApprove: { keys: [{ frame: 0, cx: 960, cy: 540, zoom: 1.18 }, { frame: 75, cx: 1000, cy: 500, zoom: 1.3 }] },
  pmSchedule: { keys: [{ frame: 0, cx: 960, cy: 560, zoom: 1.15 }, { frame: 90, cx: 1000, cy: 520, zoom: 1.28 }] },
  integrations: { keys: [{ frame: 0, cx: 960, cy: 540, zoom: 1.18 }, { frame: 60, cx: 960, cy: 500, zoom: 1.28 }] },
};

/** Live clip plate with punch-in (S06 / S11 / S17). */
const ClipShot: React.FC<{ shotKey: CaptureKey }> = ({ shotKey }) => {
  const frame = useCurrentFrame();
  const slot = asSlot(shotKey);
  const shot = ROOF_SHOTS[shotKey];
  const punch = CLIP_PUNCH[shotKey];
  if (!slot.clip) return <CapturePlaceholder shotKey={shotKey} />;

  const zoom = punch
    ? interpolate(
        frame,
        [punch.punchAt, punch.punchAt + 18, shot.duration],
        [punch.zoomFrom, punch.zoomTo, punch.zoomTo + 0.04],
        { ...clamp, easing: Easing.out(Easing.cubic) },
      )
    : interpolate(frame, [0, shot.duration], [1.05, 1.18], clamp);
  const cx = punch?.cx ?? 960;
  const cy = punch?.cy ?? 540;
  // Cover 1920×1080; pan so (cx,cy) stays near center as we punch.
  const tx = 960 - cx * zoom;
  const ty = 540 - cy * zoom;

  const showOdo = shotKey === 'jbcNumbers';
  const odoT = interpolate(frame, [28, 40], [0, 1], clamp);

  return (
    <AbsoluteFill style={{ overflow: 'hidden', backgroundColor: '#0a0a0a' }}>
      <div
        style={{
          position: 'absolute', width: 1920, height: 1080,
          transform: `translate(${tx}px, ${ty}px) scale(${zoom})`,
          transformOrigin: '0 0',
        }}
      >
        <OffthreadVideo
          src={staticFile(slot.clip)}
          style={{ width: 1920, height: 1080, objectFit: 'cover' }}
          muted
          volume={0}
        />
      </div>
      {/* soft vignette */}
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 50% 45%, transparent 40%, rgba(0,0,0,0.45) 85%)',
        }}
      />
      {showOdo ? (
        <div
          style={{
            position: 'absolute', right: 64, bottom: 72, opacity: odoT,
            padding: '16px 28px', borderRadius: 14, background: 'rgba(3,7,18,0.78)',
            border: `1px solid ${HAIRLINE}`, fontFamily: MONO, color: INK,
            boxShadow: '0 16px 48px rgba(0,0,0,0.45)',
          }}
        >
          <div style={{ fontSize: 18, letterSpacing: '0.18em', color: MUTED, marginBottom: 6 }}>RCV</div>
          <div style={{ fontSize: 42, fontWeight: 700, color: ACCENT, display: 'flex', alignItems: 'baseline', gap: 4 }}>
            $<DigitRoll value="18450" delay={30} fontSize={42} color={ACCENT} />
          </div>
        </div>
      ) : null}
    </AbsoluteFill>
  );
};

/** Live still via PageCam, or OffthreadVideo when clip is wired. */
export const CaptureShot: React.FC<{ shotKey: CaptureKey }> = ({ shotKey }) => {
  const slot = asSlot(shotKey);
  const shot = ROOF_SHOTS[shotKey];
  if (!slot.ready || !slot.src) return <CapturePlaceholder shotKey={shotKey} />;
  if (slot.clip) return <ClipShot shotKey={shotKey} />;

  const cam = STILL_PUNCH[shotKey]?.keys ?? [
    { frame: 0, cx: 960, cy: slot.pageH / 2, zoom: 1.2 },
    { frame: shot.duration, cx: 960, cy: slot.pageH / 2, zoom: 1.3 },
  ];
  return <PageCam src={slot.src} pageH={slot.pageH} keys={cam} />;
};

/** S22 — pricing. */
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

/** S23 — outro. */
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
        <div
          style={{
            marginTop: 36, fontFamily: SANS, fontSize: 52, fontWeight: 800, color: ACCENT,
            letterSpacing: '-0.02em', opacity: ctaT,
          }}
        >
          rooferzs.com · Get started free
        </div>
        <div style={{ marginTop: 26, fontFamily: SANS, fontSize: 24, color: MUTED, opacity: ctaT }}>Built on Genius.</div>
      </AbsoluteFill>
    </DarkField>
  );
};
