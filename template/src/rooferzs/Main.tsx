// Rooferzs promo — composition body (1800f @ 30fps). V2 kinetic + hybrid clips.
import { AbsoluteFill, Audio, Sequence, staticFile } from 'remotion';
import {
  ACCENT, CAPTIONS, FIELD, FLASH_CUTS, ROOF_SHOTS, SFX,
} from './timing';
import {
  BrandScene, CaptureShot, ColdOpenScene, KineticPromiseCard, OutroScene, PricingScene,
} from './Scenes';
import type { CaptureKey } from './assets';
import { Caption } from '../aifl/Caption';
import { FlashCut } from '../aifl/FlashCut';

export { ROOF_TOTAL } from './timing';

/** Live (AG / EMB / APP) shots, in film order — each renders its capture slot or clip. */
const LIVE_SHOTS: CaptureKey[] = [
  'railHero', 'stormMap', 'doorKnock', 'prospectCall', 'emailDrafts', 'photosProof', 'cadisEmbed',
  'jobRecord', 'rolesConfig', 'portalUpdate', 'isolUpload', 'jbcNumbers', 'marginPunch', 'pmApprove',
  'pmSchedule', 'integrations',
];

/** V2 promise bridges (replace clock title cards). */
const PROMISE_CARDS = [
  { key: 'tc1Crews' as const, left: 'STORM', right: 'DOORS' },
  { key: 'tc2Proof' as const, left: 'PROOF', right: 'JOB' },
  { key: 'tc3Sign' as const, left: 'SCOPE', right: 'MARGIN' },
];

export const RooferzsMain: React.FC = () => {
  const s = ROOF_SHOTS;
  return (
    <AbsoluteFill style={{ backgroundColor: FIELD }}>
      {SFX.map((x, i) => (
        <Sequence key={`sfx-${i}`} from={x.from} durationInFrames={x.duration}>
          <Audio src={staticFile(`audio/${x.src}`)} volume={x.volume} />
        </Sequence>
      ))}

      <Sequence from={s.coldOpen.from} durationInFrames={s.coldOpen.duration}>
        <ColdOpenScene />
      </Sequence>
      <Sequence from={s.brand.from} durationInFrames={s.brand.duration}>
        <BrandScene />
      </Sequence>

      {LIVE_SHOTS.map((k) => (
        <Sequence key={k} from={s[k].from} durationInFrames={s[k].duration}>
          <CaptureShot shotKey={k} />
        </Sequence>
      ))}

      {PROMISE_CARDS.map((c) => (
        <Sequence key={c.key} from={s[c.key].from} durationInFrames={s[c.key].duration}>
          <KineticPromiseCard left={c.left} right={c.right} duration={s[c.key].duration} />
        </Sequence>
      ))}

      <Sequence from={s.pricingTrial.from} durationInFrames={s.pricingTrial.duration}>
        <PricingScene />
      </Sequence>
      <Sequence from={s.outro.from} durationInFrames={s.outro.duration}>
        <OutroScene />
      </Sequence>

      {CAPTIONS.map((c) => (
        <Sequence key={`cap-${c.from}`} from={c.from} durationInFrames={c.duration}>
          <Caption text={c.text} duration={c.duration} color="#cbd5e1" accent={ACCENT} />
        </Sequence>
      ))}

      {FLASH_CUTS.map((cut) => (
        <Sequence key={`cut-${cut}`} from={cut - 5} durationInFrames={10}>
          <FlashCut duration={10} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
