import React from "react";
import FlatButton from "../common/FlatButton";
import SwitchWrap from "../common/SwitchWrap";

function AiPoweredSection() {
  return (
    <section className="sectionContainer  bg-white">
      <div className="max-w-[1360px] m-auto">
        <div className="max-w-[740px] flex flex-col items-start gap-4">
          <FlatButton
            name="Ai Powered"
            className="bg-white text-gray-600  border border-gray-300 rounded-lg"
          />
          <h2 className="text-[32px] leading-[140%] tracking-[-0.045em] font-medium mb-1">
            What Is Nexchain and Why It Matters in the Crypto Presale Market
          </h2>
          <p className="text-[16px] leading-[140%] tracking-[-0.045em] font-normal">
            What is Nexchain? It is a revolutionary blockchain ecosystem that is
            completely AI-powered. The Nexchain token presale has already begun,
            with a reduced price that grows with every presale stage.
          </p>
          <p className="text-[16px] leading-[140%] tracking-[-0.045em] font-normal">
            The Nexchain AI sets a new standard for decentralized systems with
            unprecedented speed. By merging Proof-of-Stake mechanisms with NEX
            AI, an innovative Hybrid Consensus ensures exceptional performance
            and flexibility. With the support of next-generation smart
            contracts, NEX allows for smooth interoperability between different
            blockchain ecosystems.
          </p>
        </div>
        <div className=" max-w-full">
          <SwitchWrap />
        </div>
      </div>
    </section>
  );
}

export default AiPoweredSection;
