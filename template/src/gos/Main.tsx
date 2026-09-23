import { AbsoluteFill, Audio, Sequence, staticFile } from 'remotion';
import {
  CAPTIONS,
  FLASH_CUTS,
  GOS_SHOTS,
  SFX,
  TITLE_CARDS,
  parseWords,
  sfxDuration,
} from './timing';
import {
  BrandScene,
  ClientsShot,
  DashShot,
  IdeImportShot,
  IdeShot,
  MessagingShot,
  OutroScene,
} from './Scenes';
import { PaperTitleCard } from '../aifl/PaperTitleCard';
import { Caption } from '../aifl/Caption';
import { FlashCut } from '../aifl/FlashCut';

const DARK_CARD = {
  ink: '#f2f5f4',
  accent: '#2ce5a7',
  muted: '#7d8f88',
  paper: '#0b0f14',
};

export const GosMain: React.FC = () => {
  const s = GOS_SHOTS;
  return (
    <AbsoluteFill style={{ backgroundColor: '#0b0f14' }}>
      {/* beat-pinned SFX (from timing.ts — single source) */}
      {SFX.map((x, i) => (
        <Sequence key={`sfx-${i}`} from={x.from} durationInFrames={sfxDuration(x)}>
          <Audio src={staticFile(`audio/${x.src}`)} volume={x.volume} />
        </Sequence>
      ))}

      <Sequence from={s.brand.from} durationInFrames={s.brand.duration}>
        <BrandScene />
      </Sequence>
      <Sequence from={s.base.from} durationInFrames={s.base.duration}>
        <DashShot />
      </Sequence>
      <Sequence from={s.card1.from} durationInFrames={s.card1.duration}>
        <PaperTitleCard
          duration={s.card1.duration}
          words={parseWords(TITLE_CARDS.card1.text)}
          {...DARK_CARD}
        />
      </Sequence>
      <Sequence from={s.messaging.from} durationInFrames={s.messaging.duration}>
        <MessagingShot />
      </Sequence>
      <Sequence from={s.ide.from} durationInFrames={s.ide.duration}>
        <IdeShot />
      </Sequence>
      <Sequence from={s.ideImport.from} durationInFrames={s.ideImport.duration}>
        <IdeImportShot />
      </Sequence>
      <Sequence from={s.clients.from} durationInFrames={s.clients.duration}>
        <ClientsShot />
      </Sequence>
      <Sequence from={s.outro.from} durationInFrames={s.outro.duration}>
        <OutroScene />
      </Sequence>

      {/* narration captions (dark-mode strip) */}
      {CAPTIONS.map((c) => (
        <Sequence key={`cap-${c.from}`} from={c.from} durationInFrames={c.duration}>
          <Caption text={c.text} duration={c.duration} color="#9fb3ab" accent="#2ce5a7" />
        </Sequence>
      ))}

      {/* warm flash cuts straddling scene changes */}
      {FLASH_CUTS.map((cut) => (
        <Sequence key={`cut-${cut}`} from={cut - 5} durationInFrames={10}>
          <FlashCut duration={10} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
