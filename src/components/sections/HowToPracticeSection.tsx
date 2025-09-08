
import React from "react";
import HowToParticipateCard from "../common/HowToParticipateCard";

function HowToPracticeSection() {
  return (
    <section className="sectionContainer  bg-[#fafafa]">
      <div className=" sectionContainerSecondary">
        <div className="box-border">
          <h2 className="sectionHeading">
            How to Participate in the Nexchain Crypto Presale
          </h2>
          <p className="sectionDes">
            Nexchain’s token presale comes with clear and transparent purchasing
            conditions, accessible for any budget. In order to buy NEX coin,
            follow the instructions below. Once the purchased tokens are in your
            wallet, you can benefit from their cross-industry use potential.
          </p>
        </div>

        <HowToParticipateCard />
      </div>
    </section>
  );
}

export default HowToPracticeSection;
