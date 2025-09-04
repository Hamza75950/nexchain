import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/sections/HeroSection";
import UpcommingSection from "@/components/sections/UpcommingSection";
import AiPoweredSection from "@/components/sections/AiPoweredSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import PoweredBySection from "@/components/sections/PoweredBySection";
import Web3Section from "@/components/sections/Web3Section";
import HowToPracticeSection from "@/components/sections/HowToPracticeSection";
import WhyNexChainSection from "@/components/sections/WhyNexChainSection";
import UtilitySection from "@/components/sections/UtilitySection";
import FeatureSection from "@/components/common/FeatureSection";
import TokenomicSection from "@/components/sections/TokenomicSection";
import WhoCanBuySection from "@/components/sections/WhoCanBuySection";
import FAQAccordion from "@/components/sections/FaqSection";
import RoadMapSection from "@/components/sections/RoadMapSection";
import BlogSection from "@/components/sections/BlogSection";

export default function Home() {
  return (
    <>
      <HeroSection
        buttonLable="presale is live"
        heading={`Nexchain AI Layer 1 Blockchain: Top Crypto Presale`}
        paragraph="Nexchain blockchain is the first entirely AI-built blockchain worldwide. It introduces a combination of decentralized security measures and technological developments of tomorrow."
        bottomButton={false}
        bottomCard={true}
        headingTextLarge="lg:text-[64px]"
        headingTextSmall="text-[40px]"
      />

      <UpcommingSection />
      <AiPoweredSection />
      <ExperienceSection />
      <PoweredBySection />
      <Web3Section />
      <HowToPracticeSection />
      <WhyNexChainSection />
      <UtilitySection />
      <FeatureSection />
      <TokenomicSection />
      <WhoCanBuySection />
      <RoadMapSection />
      <FAQAccordion />
      <BlogSection />
    </>
  );
}
