import { Composition } from 'remotion';
import { AiflMain, AIFL_TOTAL } from './aifl/Main';
import { GosMain } from './gos/Main';
import { GOS_TOTAL } from './gos/timing';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="AiflPromo"
        component={AiflMain}
        durationInFrames={AIFL_TOTAL}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="GeniusOsPromo"
        component={GosMain}
        durationInFrames={GOS_TOTAL}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
