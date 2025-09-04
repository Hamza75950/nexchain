import HeroSection from "@/components/sections/HeroSection";
import RoadMapSection from "@/components/sections/RoadMapSection";

export default function RoadmapPage() {
  return (
    <>
      <HeroSection
        heading={`Roadmap`}
        paragraph="Nexchain’s journey: From pilot model to a complete AI Blockchain ecosystem."
        bottomButton={true}
        bottomCard={false}
      />
      <RoadMapSection />
    </>
  );
}
