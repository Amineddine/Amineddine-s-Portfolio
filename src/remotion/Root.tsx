import { Composition, Still } from "remotion";
import { HeroBackground } from "./HeroBackground";
import { ABOUT_FRAMES, AboutCard } from "./AboutCard";
import { COLD_OPEN_FRAMES, ColdOpen } from "./ColdOpen";
import { OgCard } from "./OgCard";
import { Favicon } from "./Favicon";
import { Poster } from "./Poster";
import { Backdrop } from "./Backdrop";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* 13s @ 30fps — the /browse hero reel. Authored at 1080p, shipped at 720p:
          see the render commands in README / memory notes. */}
      <Composition
        id="ColdOpen"
        component={ColdOpen}
        durationInFrames={COLD_OPEN_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      {/* 1200×630 social card */}
      <Still id="OgCard" component={OgCard} width={1200} height={630} />
      {/* 512×512 favicon master */}
      <Still id="Favicon" component={Favicon} width={512} height={512} />
      {/* card art for items without a screenshot — props: { id } */}
      <Still id="Poster" component={Poster} width={1600} height={900} defaultProps={{ id: "skill-frontend" }} />
      {/* billboard spotlight backdrops — props: { id } */}
      <Still id="Backdrop" component={Backdrop} width={1600} height={900} defaultProps={{ id: "sigmapack-builder" }} />
      {/* PREVIOUS hero reel — kept until the Cold Open is approved, then deleted */}
      <Composition
        id="HeroBackground"
        component={HeroBackground}
        durationInFrames={540}
        fps={30}
        width={1920}
        height={1080}
      />
      {/* 10s @ 30fps, 2:1 — the "Why hire me" detail-modal banner */}
      <Composition
        id="AboutCard"
        component={AboutCard}
        durationInFrames={ABOUT_FRAMES}
        fps={30}
        width={1600}
        height={800}
      />
    </>
  );
};
