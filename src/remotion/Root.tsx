import { Composition } from "remotion";
import { HeroBackground } from "./HeroBackground";

// 18 seconds @ 30fps, 1080p 16:9 — designed to loop seamlessly as a hero bg.
export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="HeroBackground"
      component={HeroBackground}
      durationInFrames={540}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
