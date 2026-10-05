// Rooferzs promo — composition body (1800f @ 30fps). Mirrors gos/Main.tsx.
import { AbsoluteFill, Audio, Sequence, staticFile } from 'remotion';
import {
  ACCENT, ACCENT_LIGHT, CAPTIONS, FIELD, FLASH_CUTS, INK, MUTED, PAPER, ROOF_SHOTS, SFX, TITLE_CARDS, parseWords,
} from './timing';
import { BrandScene, CaptureShot, ColdOpenScene, OutroScene, PricingScene } from './Scenes';
import type { CaptureKey } from './assets';
import { PaperTitleCard } from '../aifl/PaperTitleCard';
import { Caption } from '../aifl/Caption';
import { FlashCut } from '../aifl/FlashCut';

export { ROOF_TOTAL } from './timing';

const DARK_CARD = { ink: INK, accent: ACCENT, muted: MUTED, paper: FIELD };
const LIGHT_CARD = { ink: '#030712', accent: ACCENT_LIGHT, muted: '#6b7280', paper: PAPER };

/** Live (AG / EMB / APP) shots, in film order — each renders its capture slot. */
const LIVE_SHOTS: CaptureKey[] = [
  'railHero', 'stormMap', 'doorKnock', 'prospectCall', 'emailDrafts', 'photosProof', 'cadisEmbed',
  'jobRecord', 'rolesConfig', 'portalUpdate', 'isolUpload', 'jbcNumbers', 'marginPunch', 'pmApprove',
  'pmSchedule', 'integrations',
];

const CARD_KEYS = ['tc1Crews', 'tc2Proof', 'tc3Sign'] as const;

export const RooferzsMain: React.FC = () => {
  const s = ROOF_SHOTS;
  return (
    <AbsoluteFill style={{ backgroundColor: FIELD }}>
      {/* beat-pinned SFX (from timing.ts — single source) */}
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

      {CARD_KEYS.map((k) => (
        <Sequence key={k} from={s[k].from} durationInFrames={s[k].duration}>
          <PaperTitleCard
            duration={s[k].duration}
            words={parseWords(TITLE_CARDS[k].text)}
            fontSize={96}
            {...(TITLE_CARDS[k].variant === 'light' ? LIGHT_CARD : DARK_CARD)}
          />
        </Sequence>
      ))}

      <Sequence from={s.pricingTrial.from} durationInFrames={s.pricingTrial.duration}>
        <PricingScene />
      </Sequence>
      <Sequence from={s.outro.from} durationInFrames={s.outro.duration}>
        <OutroScene />
      </Sequence>

      {/* burned-in captions (dark-mode strip; final size ≥56px per Q11 is a Stage 5 TODO) */}
      {CAPTIONS.map((c) => (
        <Sequence key={`cap-${c.from}`} from={c.from} durationInFrames={c.duration}>
          <Caption text={c.text} duration={c.duration} color="#cbd5e1" accent={ACCENT} />
        </Sequence>
      ))}

      {/* full-frame HIT #1 white-flash (S08 draft open) */}
      {FLASH_CUTS.map((cut) => (
        <Sequence key={`cut-${cut}`} from={cut - 5} durationInFrames={10}>
          <FlashCut duration={10} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
