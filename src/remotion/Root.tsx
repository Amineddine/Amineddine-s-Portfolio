import { Composition } from "remotion";
import { HeroBackground } from "./HeroBackground";
import { AboutCard } from "./AboutCard";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* 18s @ 30fps, 1080p 16:9 — loops seamlessly as the hero bg */}
      <Composition
        id="HeroBackground"
        component={HeroBackground}
        durationInFrames={540}
        fps={30}
        width={1920}
        height={1080}
      />
      {/* ~9.3s @ 30fps, 2:1 — the "Why hire me" detail-modal banner */}
      <Composition
        id="AboutCard"
        component={AboutCard}
        durationInFrames={280}
        fps={30}
        width={1600}
        height={800}
      />
    </>
  );
};
