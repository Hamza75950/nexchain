"use client";
import { useState } from "react";
import CardComponent from "./CardComponent";

export default function SwitchWrap() {
  const [active, setActive] = useState("investors");

  const investorCardData = [
    {
      imageUrl: "/investor1.webp",
      title: "High transaction speed \n 400 000 TPS",
      para: "Due to AI optimization and simultaneous processing, all transfers are instant and do not overload the Nexchain AI network.",
    },
    {
      imageUrl: "/investor2.webp",
      title: "Hybrid consensus for \n reliability and stability",
      para: "Proof-of-Stake and AI-driven algorithms foster the security and performance of Nexchain in real time.",
    },
    {
      imageUrl: "/investor3.webp",
      title: "Interoperability: connecting \n with other blockchains",
      para: "The NEX crypto exchange freely interacts with other crypto ecosystems via cross-chain bridges.",
    },
    {
      imageUrl: "/investor4.webp",
      title: "Low fees – \n just $0.001",
      para: "The Nexchain token presale is available to anyone due to its resource-efficient operations and overall cost-effectiveness.",
    },
    {
      imageUrl: "/investor5.webp",
      title: "Energy efficiency and \n sustainable growth",
      para: "The chain’s power consumption is reduced, making it one of the few entirely eco-friendly blockchains worldwide.",
    },
    {
      imageUrl: "/investor6.webp",
      title: "Decentralized governance \n and fair income distribution",
      para: "All the decisions on the Nexchain blockchain are made by the community, and the income is fairly distributed among the contributors.",
    },
  ];

  const DeveloperCardData = [
    {
      imageUrl: "/developer1.webp",
      title: "Complete AI instrastructure: \n SDK and API",
      para: "NEX AI models can be effortlessly integrated into dApps, which, in turn, empowers developers.",
    },
    {
      imageUrl: "/developer2.svg",
      title: "User-friendly tools for \n development and testing",
      para: "The process of NEX crypto app development is accelerated thanks to built-in debugging systems and performance analysis tools.",
    },
    {
      imageUrl: "/developer3.webp",
      title: "Customizable \n AI modules",
      para: "All AI solutions offered by NEX can be uploaded and trained to match the needs of a particular project.",
    },
    {
      imageUrl: "/developer4.svg",
      title: "Cross-chain \n integration",
      para: "Integrate apps across blockchain networks to expand the reach and enlarge your audience.",
    },
    {
      imageUrl: "/developer5.svg",
      title: "Customizable \n AI modules",
      para: "NEX benefits from the use of sharding and DAG for brilliant scalability of the network and large transaction processing.",
    },
    {
      imageUrl: "/developer6.svg",
      title: "Smart contracts \n 2.0",
      para: "NEX crypto decentralized apps develop and grow through AI-powered smart contracts that can self-optimize and make decisions.",
    },
  ];

  return (
    <>
      <div className="flex justify-start border-b border-gray-200 max-w-full">
        <div className="flex gap-2 rounded-lg">
          <button
            onClick={() => setActive("investors")}
            className={`px-4 py-2 text-base leading-[140%] tracking-[-0.045em] font-normal  transition uppercase ${
              active === "investors"
                ? " border-b border-black text-black"
                : "bg-white text-gray-600 "
            }`}
          >
            For Investors
          </button>

          <button
            onClick={() => setActive("developers")}
            className={`px-4 py-2 text-base leading-[140%] tracking-[-0.045em] font-normal transition uppercase ${
              active === "developers"
                ? " border-b border-black text-black"
                : "bg-white text-gray-600 "
            }`}
          >
            For Developers
          </button>
        </div>
      </div>
      {active === "investors" && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-full mt-8">
          {investorCardData.map((item, index) => (
            <CardComponent key={index} item={item} />
          ))}
        </div>
      )}

      {active === "developers" && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-full mt-8">
          {DeveloperCardData.map((item, index) => (
            <CardComponent key={index} item={item} />
          ))}
        </div>
      )}
    </>
  );
}
