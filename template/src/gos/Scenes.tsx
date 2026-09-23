import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, Easing } from 'remotion';
import { PageCam } from '../aifl/live/PageCam';
import { GOS_ASSETS } from './assets';
import { ACCENT, FIELD, INK } from './timing';

const MONO = 'ui-monospace, SFMono-Regular, Menlo, monospace';

const DarkField: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill style={{ backgroundColor: FIELD, overflow: 'hidden' }}>{children}</AbsoluteFill>
);

/** Shot 1 — brand open: g. tile stamps, wordmark + tagline letterpress on. */
export const BrandScene: React.FC = () => {
  const frame = useCurrentFrame();
  const tileT = interpolate(frame, [6, 26], [0, 1], {
    easing: Easing.bezier(0.2, 1.2, 0.3, 1), extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });
  const markT = interpolate(frame, [20, 36], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });
  const tagT = interpolate(frame, [34, 48], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });
  const push = interpolate(frame, [70, 100], [1, 1.05], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.in(Easing.bezier(0.5, 0, 1, 0.5)),
  });
  const outT = interpolate(frame, [88, 100], [1, 0], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });

  return (
    <DarkField>
      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', transform: `scale(${push})` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 34, opacity: outT }}>
          <div
            style={{
              width: 132, height: 132, borderRadius: 30,
              background: 'linear-gradient(160deg, #17222b, #0d141a)',
              border: '1px solid rgba(44,229,167,0.35)',
              boxShadow: '0 30px 70px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transform: `scale(${tileT})`,
              opacity: tileT,
            }}
          >
            <span style={{ fontFamily: 'ui-sans-serif, system-ui', fontSize: 74, fontWeight: 700, color: ACCENT, letterSpacing: '-0.02em' }}>g.</span>
          </div>
          <div style={{ transform: `translateY(${(1 - markT) * 14}px)`, opacity: markT }}>
            <div style={{ fontFamily: 'ui-sans-serif, system-ui', fontSize: 96, fontWeight: 700, color: INK, letterSpacing: '-0.03em' }}>
              genius<span style={{ color: ACCENT }}>.</span>
            </div>
          </div>
        </div>
      </AbsoluteFill>
      <div
        style={{
          position: 'absolute', left: 0, right: 0, bottom: 150, textAlign: 'center',
          fontFamily: MONO, fontSize: 24, letterSpacing: '0.34em', color: '#7d8f88',
          textTransform: 'uppercase', opacity: tagT * outT, transform: `translateY(${(1 - tagT) * 8}px)`,
        }}
      >
        THE CLIENT OPERATING SYSTEM
      </div>
    </DarkField>
  );
};

/** Shot 2 — dashboard: 2.5D push-in across the console. */
export const DashShot: React.FC = () => {
  const a = GOS_ASSETS.base;
  return (
    <PageCam
      src={a.src}
      pageH={a.pageH}
      blur={0}
      saturate={1.05}
      keys={[
        { frame: 0, cx: 960, cy: 448, zoom: 1.45 },
        { frame: 70, cx: 640, cy: 430, zoom: 1.34 },
        { frame: 135, cx: 960, cy: 448, zoom: 1.24 },
      ]}
    />
  );
};

/** Shot 4 — team messages: popup pops, camera pushes in and holds. */
export const MessagingShot: React.FC = () => {
  const a = GOS_ASSETS.messaging;
  return (
    <PageCam
      src={a.src}
      pageH={a.pageH}
      keys={[
        { frame: 0, cx: 960, cy: 445, zoom: 1.24 },
        { frame: 40, cx: 850, cy: 470, zoom: 1.52 },
        { frame: 115, cx: 845, cy: 478, zoom: 1.56 },
      ]}
    />
  );
};

/** Shot 5 — genius IDE: slow push toward the CADIS headline. */
export const IdeShot: React.FC = () => {
  const a = GOS_ASSETS.ide;
  return (
    <PageCam
      src={a.src}
      pageH={a.pageH}
      keys={[
        { frame: 0, cx: 960, cy: 442, zoom: 1.26 },
        { frame: 90, cx: 760, cy: 420, zoom: 1.42 },
        { frame: 120, cx: 755, cy: 428, zoom: 1.44 },
      ]}
    />
  );
};

/** Shot 6 — import lane: picker close-up, then whip to the imported file tree. */
export const IdeImportShot: React.FC = () => {
  const picker = GOS_ASSETS.ideImport;
  const files = GOS_ASSETS.ideFiles;
  return (
    <>
      <PageCam
        src={picker.src}
        pageH={picker.pageH}
        keys={[
          { frame: 0, cx: 420, cy: 330, zoom: 1.3 },
          { frame: 55, cx: 300, cy: 330, zoom: 1.62 },
        ]}
      />
      <PageCam
        src={files.src}
        pageH={files.pageH}
        blur={0}
        keys={[
          { frame: 0, cx: 1450, cy: 380, zoom: 1.55, rotY: -3 },
          { frame: 20, cx: 1400, cy: 420, zoom: 1.45, rotY: 0 },
          { frame: 55, cx: 1360, cy: 440, zoom: 1.5, rotY: 0 },
        ]}
      />
    </>
  );
};

/** Shot 7 — clients: sweep from branding panel to the white-label live preview. */
export const ClientsShot: React.FC = () => {
  const a = GOS_ASSETS.clients;
  return (
    <PageCam
      src={a.src}
      pageH={a.pageH}
      keys={[
        { frame: 0, cx: 520, cy: 460, zoom: 1.38 },
        { frame: 80, cx: 1280, cy: 480, zoom: 1.46 },
        { frame: 145, cx: 960, cy: 460, zoom: 1.26 },
      ]}
    />
  );
};

/** Shot 8 — outro: defocus + sign-off stamp + tagline. */
export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const stampT = interpolate(frame, [26, 40], [0, 1], {
    easing: Easing.bezier(0.2, 1.4, 0.3, 1), extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });
  const scale = interpolate(frame, [26, 40], [1.35, 1], {
    easing: Easing.out(Easing.cubic), extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });
  const blur = interpolate(frame, [26, 40], [10, 0], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });
  const tagT = interpolate(frame, [66, 84], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });
  const footT = interpolate(frame, [92, 108], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });
  const ruleW = interpolate(frame, [40, 62], [0, 420], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });

  return (
    <DarkField>
      <div
        style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse at 50% 42%, rgba(44,229,167,0.10), transparent 55%)`,
        }}
      />
      <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'ui-sans-serif, system-ui', fontSize: 118, fontWeight: 700,
              color: INK, letterSpacing: '-0.03em',
              transform: `scale(${scale})`, opacity: stampT,
              filter: `blur(${blur}px)`,
            }}
          >
            genius<span style={{ color: ACCENT }}>.</span>
          </div>
          <div
            style={{
              width: ruleW, height: 2, margin: '26px auto 22px',
              background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)`,
              opacity: stampT,
            }}
          />
          <div
            style={{
              fontFamily: 'ui-sans-serif, system-ui', fontSize: 34, color: '#aebbb5',
              letterSpacing: '0.02em', opacity: tagT, transform: `translateY(${(1 - tagT) * 10}px)`,
            }}
          >
            The client operating system — built on Genius Substrates
          </div>
          <div
            style={{
              fontFamily: MONO, fontSize: 20, color: '#5f6d66', letterSpacing: '0.3em',
              textTransform: 'uppercase', marginTop: 40, opacity: footT,
            }}
          >
            geniuzs.com
          </div>
        </div>
      </AbsoluteFill>
    </DarkField>
  );
};