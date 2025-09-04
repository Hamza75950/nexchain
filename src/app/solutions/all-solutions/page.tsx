import BottomPannel from "@/components/common/BottomPannel";
import CardComponent from "@/components/common/CardComponent";
import GreenCard from "@/components/common/GreenCard";
import HeroSection from "@/components/sections/HeroSection";
import WhyNexChainSection from "@/components/sections/WhyNexChainSection";
import React from "react";

function AllSolutionsPage() {
  const nexchainData = [
    {
      imageUrl: "/solutionCard1.svg",
      title: "AI-Powered Blockchain",
      para: "Optimize blockchain performance with artificial intelligence, ensuring faster transactions, better scalability, and lower costs.",
    },
    {
      imageUrl: "/solutionCard2.svg",
      title: "Cross-Chain Interoperability",
      para: "Seamlessly integrate with other blockchain networks to create unified decentralized applications that span multiple ecosystems.",
    },
    {
      imageUrl: "/solutionCard3.svg",
      title: "Smart Contracts 2.0",
      para: "Automate business logic and optimize decision-making with AI-enhanced smart contracts that adapt in real time.",
    },
    {
      imageUrl: "/solutionCard4.svg",
      title: "Advanced Security",
      para: "Protect your network and assets with AI-driven security features and quantum-resistant cryptography.",
    },
    {
      imageUrl: "/solutionCard5.svg",
      title: "Sustainability",
      para: "Scale your blockchain applications while minimizing energy consumption with AI-enhanced resource management.",
    },
  ];
  return (
    <>
      <HeroSection
        buttonLable="SOLUTIONS"
        heading={`Unlock the Power of AI-Driven Blockchain for Next-Gen dApps`}
        paragraph="Nexchain enhances blockchain with AI to boost performance, scalability, and security. Our solutions empower developers and businesses to build high-performance, low-cost, and sustainable dApps. Whether automating processes with AI or optimizing financial transactions, Nexchain drives innovation across industries."
        bottomButton={true}
        bottomCard={false}
        multicard={true}
      />
      <WhyNexChainSection bgColor={"bg-white"} />
      <section className=" bg-[#fafafa]">
        <div className="max-w-[1440px] m-auto lg:p-[120px] md:p-10 py-10 px-4 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4  mt-8">
          <GreenCard heading={`Why \n Nexchain?`} />

          {nexchainData.map((item, index) => (
            <CardComponent key={index} item={item} />
          ))}
        </div>
      </section>
      <BottomPannel
        heading="Get Started with Nexchain Solutions"
        des="Experience the power of AI-enhanced blockchain technology with Nexchain.
        Whether you’re building decentralized applications, creating financial
        ecosystems, or optimizing data management systems, Nexchain offers the
        tools and infrastructure you need to drive the next wave of blockchain
        innovation. Start today and unlock the potential of AI-driven blockchain
        solutions with Nexchain."
        buttonText="Join Presale"
      />
    </>
  );
}

export default AllSolutionsPage;
