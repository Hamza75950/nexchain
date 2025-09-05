import FlatButton from "@/components/common/FlatButton";
import HowToParticipateCard from "@/components/common/HowToParticipateCard";
import AiPoweredSection from "@/components/sections/AiPoweredSection";
import FAQAccordion from "@/components/sections/FaqSection";
import HeroSection from "@/components/sections/HeroSection";
import { Section } from "lucide-react";
import React from "react";

function HowToBuYPage() {
  return (
    <>
      <HeroSection
        heading={`How to Buy Nexchain`}
        bottomButton={true}
        bottomCard={false}
      />
      <section className="w-full py-[100px] bg-white">
        <div className="sectionContainerSecondary">
          <div className="flex flex-col gap-12">
            <div className="max-w-[730px] flex flex-col gap-3">
              <FlatButton
                name="Ai Powered"
                className="bg-white text-gray-600  border border-gray-300 rounded-lg"
              />
              <p className="text-lg leading-[150%] tracking-[-0.045em] font-normal">
                Nexchain is the world’s first AI-powered blockchain, bringing
                together advanced technology and decentralization security. The
                demand for Al-enhanced blockchain solutions is expected to grow
                as enterprises and developers seek more efficient and scalable
                decentralized systems. <br />
                <br />
                If you have decided to buy Nexchain on this page you will find
                all the answers. Getting involved with Nexchain tokens is
                straightforward.
                <b className="font-medium"> Here’s how to begin:</b>
              </p>
            </div>
          </div>

          <HowToParticipateCard />
        </div>
      </section>
      <FAQAccordion />
    </>
  );
}

export default HowToBuYPage;
