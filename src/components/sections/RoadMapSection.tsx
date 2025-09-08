import React from "react";
import Image from "next/image";
import RoadmapCard from "../common/RoadMapCard1";
import RoadmapCard2 from "../common/RoadMapCard2";
import RoadMapAccordion from "../common/RoadMapAccordion";

function RoadMapSection() {
  interface RoadmapItem {
    text: string;
  }
  // interface RoadmapCardData {
  //   quarter: string;
  //   year: string;
  //   title: string;
  //   items: RoadmapItem[];
  //   outcome?: string;
  //   cardBg?: string;
  //   cardBorder?: string;
  //   // Optional status properties for completed items
  //   status?: string;
  //   statusBg?: string;
  //   statusBorder?: string;
  //   statusText?: string;
  //   // Variant for accordion styling
  //   variant?: "default" | "secondary";
  // }
  // Combined roadmap data for both desktop and mobile views

  type RoadmapVariant = 'default' | 'secondary' | 'tertiary';

interface RoadmapItem {
  text: string;
}

interface RoadmapCardData {
  quarter: string;
  year: string;
  title: string;
  status?: string;
  statusBg?: string;
  statusBorder?: string;
  statusText?: string;
  outcome?: string;
  cardBg?: string;
  cardBorder?: string;
  variant: RoadmapVariant;
  items: RoadmapItem[];
}



  const accordionData: RoadmapCardData[] = [
    // Q4 2024 - Idea concept and architecture
    {
      quarter: "Q4",
      year: "2024",
      status: "Completed",
      statusBg: "bg-[#49ff86]",
      statusBorder: "border border-[#183c24]",
      statusText: "text-[#07130c]",
      title: "Idea concept and architecture",
      items: [
        {
          text: "Development of a blockchain prototype with basic PoC functionality and initial AI integration",
        },
        { text: "Preparation of documentation and conceptual whitepaper" },
        { text: "Design NEX coin tokenomics" },
        { text: "Hiring core development and marketing team" },
        { text: "Launching whitelist registrations" },
      ],
      variant: "default" as const,
    },
    // Q1 2025 - Presale launch
    {
      quarter: "Q1",
      year: "2025",
      status: "Completed",
      statusBg: "bg-[#49ff86]",
      statusBorder: "border border-[#183c24]",
      statusText: "text-[#07130c]",
      title: "Presale launch",
      items: [
        { text: "Creating and launching a website" },
        {
          text: "Active expansion of the Nexchain community: AMA sessions, social media",
        },
        { text: "Announcement of public C-level Team" },
        { text: "Launching a marketing campaign to promote the project" },
        { text: "Expansion of Influencer and Media Relations" },
        { text: "Smart Contract audits" },
      ],
      variant: "default" as const,
    },
    // Q2 2025 - Testnet PoC Implementation
    {
      quarter: "Q2",
      year: "2025",
      status: "Completed",
      statusBg: "bg-[#49ff86]",
      statusBorder: "border border-[#183c24]",
      statusText: "text-[#07130c]",
      title: "Testnet PoC Implementation",
      items: [
        { text: "Define architectural components of Nexchain EVM extension" },
        {
          text: "Spin off public development of Nexchain within GitHub organization with public profiles for Nexchain Engineers",
        },
        {
          text: "Configure and customize blockchain indexer to fit Nexchain EVM extensions design architectural patterns for AI integrations into indexer",
        },
        { text: "Outline and prepare required infrastructure" },
        {
          text: "Implement architectural layout for AI agents extensibility and embed it into Nexchain EVM fork",
        },
      ],
      outcome:
        "infrastructural and implementation-wide readiness for Nexpolia launch",
      variant: "default" as const,
    },
    // Q3 2025 - Launch Nexpolia
    {
      quarter: "Q3",
      year: "2025",
      title: "Launch Nexpolia",
      items: [
        {
          text: "Rollout necessary infrastructure for Nexpolia accessibility: Blockchain Explorer, UI for launching tokens, UI for deploying custom smart contracts.",
        },
        {
          text: "Deploy Nexchain Native Bridge infrastructure and dependencies to major testnets and our testnet",
        },
        {
          text: "Developers SDK to simplify interactions with AION (AI Oracle Network) and Nexchain as a whole",
        },
        {
          text: "Public and Private RPC deployments",
        },
        {
          text: "Launching Airdrop and Farming Campaign",
        },
      ],
      outcome:
        `Fully functional and usable Nexpolia with underlying infrastructure and user's tooling`,
      variant: "tertiary" as const,
      cardBg: "bg-[#222d25]",
      cardBorder: "border-[#222d25]",
    },
    // Q4 2025 - Implement complete Mainnet setup
    {
      quarter: "Q4",
      year: "2025",
      title: "Implement complete Mainnet setup",
      items: [
        {
          text: "Prepare required technical infrastructure for Nexchain launch",
        },
        {
          text: "Deliver complete implementation of go-nex (fork of go-ethereum), including several white-labeled AI Oracles, tested through Nexpolia",
        },
        {
          text: "Deploy Nexchain Native Bridge infrastructure and dependencies to major L1/L2 networks and our mainnet to guarantee operability and liquidity availability on Nexchain",
        },
        {
          text: "Finalize implementation for Nexchain Native Bridge on Nexchain with necessary AI Oracles integrations",
        },
        {
          text: "Deploy partner DeFi protocols to provide to users of Nexchain network usability, accessibility and operability",
        },
      ],
      outcome: "Complete technical readiness for the official Nexchain launch",
      variant: "secondary" as const,
    },
    // Q1 2026 - Launch Nexchain
    {
      quarter: "Q1",
      year: "2026",
      title: "Launch Nexchain",
      items: [
        {
          text: "Launching Public Beta for Nexchain to gather initial feedback from closed group of beta testers",
        },
        {
          text: "Use beta testing feedback to enhance network security, operability, user experience and any additional touch-points",
        },
        {
          text: "Partner with CEX providers to spin off Nexchain support on CEX side",
        },
        {
          text: "Partner with extended list of major DeFi protocols to integrate them into Nexchain ecosystem",
        },
      ],
      outcome: "Launch preparation completed",
      variant: "secondary" as const,
    },
  ];

  return (
    <section className="sectionContainer  bg-[#fafafa]">
      <div className=" sectionContainerSecondary">
        <div className="box-border">
          <h2 className="sectionHeading">Nexchain Roadmap</h2>

          <p className="sectionDes">
            Nexchain’s journey: From pilot model to a complete AI Blockchain
            ecosystem
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 hidden gap-4">
          {accordionData.slice(0, 3).map((card, index) => (
              <RoadmapCard key={index} data={card} />
          ))}
          {/* card 4 */}

          <div className="bg-[#222d25] border border-[#222d25] rounded-lg p-8 box-border h-auto hidden lg:block">
            <div className="flex justify-between">
              <div className="text-[32px] leading-[140%] tracking-[-0.045em] font-normal text-[#94999e] flex flex-row items-center gap-2">
                <b className=" font-inherit text-white font-normal">Q3</b>
                2025
              </div>
            </div>
            <div className="block text-white">
              <div className="text-2xl leading-[140%] tracking-[-0.045em] font-normal">
                <p className="mb-6">Launch Nexpolia</p>
              </div>
              <div className="block">
                <div className="flex justify-start items-start gap-2 relative  py-[13px] border-b border-[#e8e8e8]">
                  <Image
                    src={"/CircleDashed.svg"}
                    width={24}
                    height={24}
                    alt="circle"
                  />
                  Rollout necessary infrastructure for Nexpolia accessibility:
                  Blockchain Explorer, UI for launching tokens, UI for deploying
                  custom smart contracts.
                </div>
                <div className="flex justify-between items-start gap-2 relative  py-[13px] border-b border-[#e8e8e8]">
                  <Image
                    src={"/CircleDashed.svg"}
                    width={24}
                    height={24}
                    alt="circle"
                  />
                  Deploy Nexchain Native Bridge infrastructure and dependencies
                  to major testnets and our testnet
                </div>
                <div className="flex justify-start items-start gap-2 relative  py-[13px] border-b border-[#e8e8e8]">
                  <Image
                    src={"/CircleDashed.svg"}
                    width={24}
                    height={24}
                    alt="circle"
                  />
                  Developers SDK to simplify interactions with AION (AI Oracle
                  Network) and Nexchain as a whole
                </div>
                <div className="flex justify-start items-start gap-2 relative  py-[13px] border-b border-[#e8e8e8]">
                  <Image
                    src={"/CircleDashed.svg"}
                    width={24}
                    height={24}
                    alt="circle"
                  />
                  Public and Private RPC deployments
                </div>
                <div className="flex justify-start items-start gap-2 relative  py-[13px] border-b border-[#e8e8e8]">
                  <Image
                    src={"/CircleDashed.svg"}
                    width={24}
                    height={24}
                    alt="circle"
                  />
                  Launching Airdrop and Farming Campaign
                </div>
                <p className="border-b-0 p-0 text-base leading-[140%] tracking-[-0.045em] font-medium">
                  Outcome: Fully functional and usable Nexpolia with underlying
                  infrastructure and user’s tooling
                </p>
              </div>
            </div>
          </div>
         {accordionData.slice(4).map((card, index) => (
  <RoadmapCard2 key={index} data={card} />
))}
        </div>
        <div className="grid lg:grid-cols-1 lg:hidden gap-4">
          {accordionData.map((card, index) => (
            <RoadMapAccordion key={index} data={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoadMapSection;
