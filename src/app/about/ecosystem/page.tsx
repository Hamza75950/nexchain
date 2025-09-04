import AiPoweredSection from "@/components/sections/AiPoweredSection";
import HeroSection from "@/components/sections/HeroSection";

export default function EcosystemPage() {
  return (
    <>
      <HeroSection
        buttonLable="ECOSYSTEM"
        heading={`Empowering the Future of Blockchain with AI-Driven Solutions`}
        paragraph="Nexchain combines the power of blockchain and AI to create a secure, scalable, and efficient ecosystem for the decentralized world."
        bottomButton={true}
        bottomCard={false}
      />
      <AiPoweredSection />
    </>
  );
}
