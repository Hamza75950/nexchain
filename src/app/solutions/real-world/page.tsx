import BottomPannel from "@/components/common/BottomPannel";
import CardComponent from "@/components/common/CardComponent";
import ExtentionList from "@/components/common/ExtentionList";
import ExtentionList2 from "@/components/common/ExtentionList2";
import GreenCard from "@/components/common/GreenCard";
import HeroSection from "@/components/sections/HeroSection";
import Image from "next/image";
import React from "react";

const RealWorldPage = () => {
  const realWorldData = [
    {
      imageUrl: "/real1.svg",
      title: "AI-Enhanced Automation",
      para: "Automate the entire process of asset tokenization, from valuation to issuance, with AI-driven tools.",
    },
    {
      imageUrl: "/real2.svg",
      title: "Enhanced Transparency",
      para: "Ensure the integrity of tokenized asset transactions with real-time monitoring and automated compliance.",
    },
    {
      imageUrl: "/real3.svg",
      title: "Unlock Liquidity",
      para: "Make real-world assets more accessible and liquid by enabling fractional ownership and tokenized trading.",
    },
    {
      imageUrl: "/real4.svg",
      title: "Security & Compliance",
      para: "Benefit from AI-powered security features and real-time compliance checks to safeguard transactions.",
    },
    {
      imageUrl: "/real5.svg",
      title: "Global Market Access",
      para: "Tokenized assets can be traded globally, opening new opportunities for investors and businesses alike.",
    },
  ];

  const listExtentionData2 = [
    {
      imageUrl: "/realList1.svg",
      heading: "AI-Driven Tokenization of Real-World Assets",
      des: "Nexchain's AI-powered platform lets users tokenize real-world assets like real estate, commodities, and art. Using machine learning and automation, we ensure accurate blockchain representation with enhanced transparency and security. This simplifies bringing physical assets into the digital world for DeFi, trading, and more.",
      cards: [
        {
          heading: "Efficient Asset \n Valuation",
          des: "AI algorithms can automate the valuation of physical assets by analyzing market trends, historical data, and current conditions, providing accurate pricing models.",
        },
        {
          heading: "Smart Tokenization",
          des: "Nexchain uses AI to tokenize real-world assets efficiently, automating the entire process of asset creation, issuance, and transfer, ensuring compliance with relevant regulations.",
        },
      ],
    },
    {
      imageUrl: "/realList2.svg",
      heading: "Enhanced Transparency and Security",
      des: "With Nexchain, tokenizing real-world assets becomes a more secure and transparent process. Our platform uses AI to continuously monitor and validate transactions, ensuring that all asset transfers and ownership records are accurate and tamper-proof. Real-time audits and automated compliance checks further enhance the transparency of asset management.",
      cards: [
        {
          heading: "AI-Powered \n Compliance",
          des: "Real-time monitoring powered by AI ensures that all asset transactions comply with legal and regulatory standards, reducing the risk of fraud or non-compliance.",
        },
        {
          heading: "Immutable Record \n Keeping",
          des: "Tokenized assets are securely stored on Nexchain's blockchain, ensuring transparency and creating an immutable record of ownership.",
        },
      ],
    },
    {
      imageUrl: "/realList3.svg",
      heading: "Unlocking Liquidity in Physical Assets",
      des: "Tokenizing real-world assets on Nexchain enables them to be traded or used as collateral in decentralized financial applications. By creating digital representations of physical assets, Nexchain provides a new way to unlock liquidity, giving owners the opportunity to leverage their physical assets in the digital economy.",
      cards: [
        {
          heading: "Fractional \n Ownership",
          des: "Through tokenization, Nexchain enables fractional ownership of high-value assets, allowing smaller investors to participate in markets that were once inaccessible.",
        },
        {
          heading: "Access to Global \n Markets",
          des: "With the AI-enhanced features of Nexchain, tokenized real-world assets can be traded or used across blockchain networks, offering greater market access and expanding investment opportunities globally.",
        },
      ],
    },
    {
      imageUrl: "/realList4.svg",
      heading: "AI-Optimized Asset Management",
      des: "Nexchain's AI technology also helps manage tokenized assets effectively, automating critical processes such as asset tracking, transaction validation, and price forecasting. This reduces the operational burden on asset holders and investors while optimizing decision-making for buying, selling, and holding assets.",
      cards: [
        {
          heading: "Real-Time Asset \n Monitoring",
          des: "AI models continuously track the value and status of tokenized assets, providing real-time insights and predictive analytics to help investors make informed decisions.",
        },
        {
          heading: "Automated Portfolio \n Management",
          des: "Nexchain's AI tools automatically adjust asset portfolios based on real-time data, market trends, and investor preferences, ensuring optimal returns and minimized risks.",
        },
      ],
    },
    {
      imageUrl: "/realList5.svg",
      heading: "Integration with DeFi and Blockchain Ecosystems",
      des: "The integration of real-world assets into Nexchain's ecosystem opens up new possibilities for decentralized finance (DeFi) applications. By bringing physical assets into the digital space, Nexchain's AI-powered solutions make it easier for businesses and individuals to engage in decentralized trading, lending, and borrowing using tokenized assets as collateral.",
      cards: [
        {
          heading: "DeFi Compatibility",
          des: "Tokenized real-world assets can be directly used in DeFi platforms for lending, staking, or liquidity provisioning, with AI-driven protocols ensuring efficiency and minimal risk.",
        },
        {
          heading: "Cross-Platform \n Interoperability",
          des: "Nexchain's platform enables the seamless transfer and use of tokenized real-world assets across multiple blockchain networks, offering enhanced flexibility and liquidity.",
        },
      ],
    },
  ];

  return (
    <>
      <HeroSection
        buttonLable="REAL WORLD ASSETS"
        buttonLableIcon="/realWorld.svg"
        heading={`AI-Enhanced Blockchain: Bridging the Physical and Digital Worlds`}
        paragraph="Nexchain brings real-world assets (RWAs) into the digital realm with its advanced AI-powered blockchain solutions. By leveraging artificial intelligence, we enable the tokenization and management of physical assets in a secure, transparent, and efficient manner, bridging the gap between traditional industries and the blockchain ecosystem."
        bottomButton={true}
        bottomCard={false}
      />

      <section className="bg-white">
        <ExtentionList2 items={listExtentionData2} />
      </section>

      <section className=" bg-[#fafafa]">
        <div className="max-w-[1440px] m-auto lg:p-[120px] md:p-10 py-10 px-4 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4  mt-8">
          <GreenCard
            heading={`Why Nexchain for \n Real-World Asset \n Tokenization?`}
          />

          {realWorldData.map((item, index) => (
            <CardComponent key={index} item={item} />
          ))}
        </div>
      </section>
      <BottomPannel
        heading="Start Tokenizing Real-World Assets with Nexchain"
        des="Unlock the potential of your physical assets with Nexchain’s AI-powered blockchain solutions. Whether you’re tokenizing real estate, commodities, or unique items, Nexchain provides the tools, security, and flexibility you need to bring your real-world assets into the digital economy. Start exploring new opportunities today and take your assets to the next level."
        buttonText="Join Presale"
      />
    </>
  );
};

export default RealWorldPage;
