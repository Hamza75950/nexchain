import BottomPannel from "@/components/common/BottomPannel";
import CardComponent from "@/components/common/CardComponent";
import ExtentionList from "@/components/common/ExtentionList";
import GreenCard from "@/components/common/GreenCard";
import HeroSection from "@/components/sections/HeroSection";

import React from "react";

const TokenExtentionPage = () => {
  const extentionData = [
    {
      imageUrl: "/extention1.svg",
      title: "AI-Optimized Performance",
      para: "Leverage the power of AI to enhance token functionality and adaptability.",
    },
    {
      imageUrl: "/extention2.svg",
      title: "Security & Fraud Prevention",
      para: "Protect your token against fraudulent activities with AI-driven security measures.",
    },
    {
      imageUrl: "/extention3.svg",
      title: "Dynamic Token Economics",
      para: "Use AI to adjust token parameters in real time, ensuring long-term sustainability.",
    },
    {
      imageUrl: "/extention4.svg",
      title: "Cross-Chain Interoperability",
      para: "Extend your tokens to other blockchain networks with easy cross-chain compatibility.",
    },
    {
      imageUrl: "/extention5.svg",
      title: "Developer-Friendly Tools",
      para: "Easily integrate AI models and customize your token through Nexchain’s developer tools.",
    },
  ];

  const listExtentionData = [
    {
      imageUrl: "/extentionListicon1.svg",
      heading: "AI-Powered Token Customization",
      des: "Nexchain’s AI-enhanced token extensions enable you to customize tokens for specific use cases with greater precision. Through machine learning and adaptive algorithms, tokens can be optimized to react to fluctuating market conditions, network activity, and business needs. This flexibility allows for the creation of tokens that can evolve and scale alongside your project.",
    },
    {
      imageUrl: "/extentionListicon2.svg",
      heading: "Dynamic Token Management",
      des: "Nexchain’s intelligent token extensions bring automated decision-making to the forefront. AI algorithms can autonomously adjust key parameters such as transaction fees, staking requirements, and governance mechanisms based on ongoing blockchain data analysis. This adaptability helps ensure that your token remains efficient and cost-effective, no matter the network state.",
    },
    {
      imageUrl: "/extentionListicon3.svg",
      heading: "Advanced Token Standards",
      des: "Nexchain supports a broad range of token standards, giving developers the freedom to create the token that best fits their needs. Whether you’re building a utility token, governance token, or asset-backed token, Nexchain’s framework is designed to handle a diverse set of use cases, powered by AI to optimize performance and security.",
      cards: [
        {
          heading: "AI-Driven \n Governance",
          des: "Enhance token governance with AI models that can analyze votes & proposals, ensuring that decisions align with the long-term interests of the community.",
        },
        {
          heading: "Automated Staking & \n Rewards",
          des: "Leverage AI to adjust staking parameters dynamically, ensuring fair and rewarding staking opportunities for participants.",
        },
        {
          heading: "AI-Powered Economic \n Design",
          des: "Use AI to predict market trends and adjust token supply, rewards, or liquidity pools, driving sustainable token economics.",
        },
      ],
    },
    {
      imageUrl: "/extentionListicon4.svg",
      heading: "Security & Compliance",
      des: "Nexchain’s token extensions incorporate AI-powered security features that detect and mitigate fraudulent activities in real-time. The AI algorithms continuously monitor transaction patterns and use machine learning to identify and prevent potential attacks. By doing so, Nexchain ensures your tokens stay secure and comply with the latest regulatory standards.",
    },
    {
      imageUrl: "/extentionListicon5.svg",
      heading: "Interoperability",
      des: "Nexchain’s token extensions are designed to work seamlessly across various blockchain networks, enabling cross-chain functionality. AI-powered bridging protocols allow tokens to be transferred and used on multiple platforms, ensuring that your token ecosystem can scale beyond Nexchain and interact with other blockchain ecosystems efficiently.",
    },
    {
      imageUrl: "/extentionListicon6.svg",
      heading: "Developer Tools & Resources",
      des: "Nexchain provides robust developer resources to support your work with token extensions. With AI SDKs, APIs, and customizable modules, you can quickly integrate AI-driven functionality into your tokens and applications. Nexchain’s platform allows you to upload and train your own AI models, giving you complete control over token behavior and decision-making processes.",
    },
  ];

  return (
    <>
      <HeroSection
        buttonLable="Token Extensions"
        buttonLableIcon="/tokenExtentionIcon.svg"
        heading={`Enhance Your Blockchain with AI-Optimized Token Extensions`}
        paragraph="Nexchain offers advanced token extensions that leverage AI technology to improve blockchain functionality and enhance token management. With powerful AI-driven tools, developers can create optimized, efficient, and dynamic tokens that adapt to real-time network changes, offering increased versatility and control."
        bottomButton={true}
        bottomCard={false}
      />

      <section className="bg-white">
        <ExtentionList items={listExtentionData} />
      </section>

      <section className=" bg-[#fafafa]">
        <div className="max-w-[1440px] m-auto lg:p-[120px] md:p-10 py-10 px-4 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4  mt-8">
          <GreenCard heading={`Why Nexchain \n Token \n Extensions?`} />

          {extentionData.map((item, index) => (
            <CardComponent key={index} item={item} />
          ))}
        </div>
      </section>
      <BottomPannel
        heading="Get Started with Nexchain Token Extensions"
        des="Join the AI blockchain revolution today. Explore the possibilities of AI-enhanced token extensions to take your blockchain projects to the next level. Leverage our powerful tools and AI-driven features to create scalable, secure, and dynamic tokens that can evolve with the needs of the network."
        buttonText="Join Presale"
      />
    </>
  );
};

export default TokenExtentionPage;
