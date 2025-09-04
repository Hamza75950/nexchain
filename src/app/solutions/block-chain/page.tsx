import BottomPannel from "@/components/common/BottomPannel";
import CardComponent from "@/components/common/CardComponent";
import ExtentionList2 from "@/components/common/ExtentionList2";
import GreenCard from "@/components/common/GreenCard";
import HeroSection from "@/components/sections/HeroSection";
import React from "react";

function BlockChainPage() {
  const blockChainData = [
    {
      imageUrl: "/blockchain1.svg",
      title: "AI-Enhanced Automation",
      para: "Automate key blockchain processes and improve efficiency with AI-driven actions.",
    },
    {
      imageUrl: "/blockchain2.svg",
      title: "Dynamic Performance",
      para: "Adapt to changing network conditions in real-time, optimizing scalability, security, and resource management.",
    },
    {
      imageUrl: "/blockchain3.svg",
      title: "Intelligent Governance",
      para: "Enable decentralized, AI-powered decision-making for faster, more reliable consensus.",
    },
    {
      imageUrl: "/blockchain4.svg",
      title: "Enhanced Security",
      para: "Protect your network with AI-powered fraud detection and threat prevention.",
    },
    {
      imageUrl: "/blockchain5.svg",
      title: "Developer-Centric Tools",
      para: "Access a comprehensive set of APIs and SDKs for easy integration of AI actions into your projects.",
    },
  ];
  const listExtentionData2 = [
    {
      imageUrl: "/blockChainListicon1.svg",
      heading: "AI-Powered Smart Actions",
      des: "Nexchain's AI actions provide developers with intelligent tools to automate blockchain tasks that traditionally required manual intervention. With machine learning and real-time data analysis, these actions dynamically optimize processes, improving performance, security, and scalability.",
      cards: [
        {
          heading: "Automated \n Governance",
          des: "AI algorithms automatically analyze community votes and proposals to ensure seamless governance and decision-making, based on community needs and consensus.",
        },
        {
          heading: "Dynamic Resource \n Allocation",
          des: "AI-powered actions adjust network resources such as bandwidth, storage, and transaction limits in real-time, ensuring efficient operation even during periods of high activity.",
        },
        {
          heading: "Optimized \n Transaction \n Management",
          des: "Leverage AI to automate transaction verifications, ensuring that they are validated and processed quickly, even under high demand, with minimal cost.",
        },
      ],
    },
    {
      imageUrl: "/blockChainListicon2.svg",
      heading: "Advanced Smart Contract Automation",
      des: "Nexchain enhances smart contract functionality through AI-driven automation. These intelligent contracts can adapt to changing conditions, update themselves based on predefined rules, and optimize performance without human intervention.",
      cards: [
        {
          heading: "Self-Optimizing \n Contracts",
          des: "AI enhances the efficiency of smart contracts by automatically adjusting their parameters, optimizing conditions, and reducing latency based on network conditions and user interactions.",
        },
        {
          heading: "Predictive Analytics",
          des: "Smart contracts powered by AI can anticipate potential future states of the blockchain, allowing them to self-adjust and respond proactively to changes in the network.",
        },
      ],
    },
    {
      imageUrl: "/blockChainListicon3.svg",
      heading: "Enhanced Security with AI",
      des: "AI-based actions also enhance the security of your blockchain environment. Continuous monitoring of transactions, user behavior, and smart contract execution helps detect anomalies and prevent fraudulent activities before they affect the network.",
      cards: [
        {
          heading: "Fraud Prevention",
          des: "AI-driven actions analyze transaction patterns in real-time to detect and block suspicious activities, preventing potential fraud.",
        },
        {
          heading: "Autonomous Threat \n Detection",
          des: "Through machine learning, Nexchain can predict and respond to emerging security threats, ensuring the network remains secure and resilient.",
        },
      ],
    },
    {
      imageUrl: "/blockChainListicon4.svg",
      heading: "Decentralized Decision-Making",
      des: "Nexchain's AI actions support decentralized decision-making by automatically analyzing data, votes, and community feedback to drive consensus. This not only reduces the need for manual intervention but also ensures that decisions are made swiftly and transparently.",
      cards: [
        {
          heading: "Consensus \n Management",
          des: "AI actions autonomously evaluate proposals, ensuring that the most beneficial decisions are made for the community while aligning with governance rules.",
        },
        {
          heading: "Automated \n Proposal Evaluation",
          des: "AI algorithms prioritize and evaluate proposals in real-time based on historical data, community sentiment, and network needs, enabling faster implementation of decisions.",
        },
      ],
    },
    {
      imageUrl: "/blockChainListicon5.svg",
      heading: "Scalability and Efficiency",
      des: "Nexchain's AI-driven actions allow the blockchain network to scale efficiently, even during high demand. AI algorithms automatically adjust network protocols, transaction validation mechanisms, and resource distribution, ensuring that the blockchain can handle millions of transactions per second without compromising performance.",
      cards: [
        {
          heading: "Optimized Network \n Scaling",
          des: "AI adjusts the blockchain's scalability mechanisms in real-time, allowing for smoother operation as the network grows and demand increases.",
        },
        {
          heading: "Efficiency in \n Transaction \n Processing",
          des: "AI-driven automation ensures that transactions are processed with minimal latency, regardless of network congestion, maintaining high throughput without excessive costs.",
        },
      ],
    },
    {
      imageUrl: "/blockChainListicon6.svg",
      heading: "Developer Tools & Integrations",
      des: "Nexchain provides a range of developer-friendly tools and resources to help you implement AI actions in your blockchain applications. With extensive APIs, SDKs, and customizable modules, you can integrate AI-powered actions into your smart contracts and decentralized applications with ease.",
      cards: [
        {
          heading: "AI SDKs & APIs",
          des: "Nexchain's suite of development tools enables you to quickly integrate AI algorithms into your projects, enhancing blockchain functionality and optimizing smart contracts.",
        },
        {
          heading: "Customizable AI \n Models",
          des: "Developers can upload, train, and deploy custom AI models tailored to their specific blockchain applications, giving you full control over how actions are executed.",
        },
      ],
    },
  ];

  return (
    <>
      <HeroSection
        buttonLable="Blockchain Links"
        buttonLableIcon="/blockChainLableIcon.svg"
        heading={`Unlock the Power of AI-Driven Blockchain Actions`}
        paragraph="Nexchain introduces powerful, AI-powered actions that enable seamless and efficient interactions within the blockchain ecosystem. By incorporating artificial intelligence, these actions automate key tasks, enhance decision-making processes, and optimize your blockchain’s functionality for real-time adaptability. Whether it’s transaction management, governance, or dynamic network adjustments, Nexchain’s AI actions take your blockchain experience to new heights."
        bottomButton={true}
        bottomCard={false}
      />

      <section className="bg-white">
        <ExtentionList2 items={listExtentionData2} />
      </section>

      <section className=" bg-[#fafafa]">
        <div className="max-w-[1440px] m-auto lg:p-[120px] md:p-10 py-10 px-4 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4  mt-8">
          <GreenCard heading={`Why Nexchain \n Actions?`} />

          {blockChainData.map((item, index) => (
            <CardComponent key={index} item={item} />
          ))}
        </div>
      </section>
      <BottomPannel
        heading="Start Building with Nexchain Actions"
        des="Unleash the power of AI on your blockchain projects. Explore the limitless potential of Nexchain’s AI-powered actions to create more intelligent, secure, and efficient decentralized applications. Start integrating AI-driven blockchain solutions today and take your project to the next level."
        buttonText="Join Presale"
      />
    </>
  );
}

export default BlockChainPage;
