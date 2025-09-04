import BottomPannel from "@/components/common/BottomPannel";
import CardComponent from "@/components/common/CardComponent";
import ExtentionList2 from "@/components/common/ExtentionList2";
import GreenCard from "@/components/common/GreenCard";
import HeroSection from "@/components/sections/HeroSection";
import React from "react";

const PaymentToolingPage = () => {
  const paymentData = [
    {
      imageUrl: "/payment1.svg",
      title: "AI-Optimized Payment Processing",
      para: "Speed up your payment systems and reduce transaction costs with Nexchain's AI-powered payment infrastructure.",
    },
    {
      imageUrl: "/payment2.svg",
      title: "Advanced Fraud Prevention",
      para: "Prevent fraud before it happens with real-time AI-driven monitoring and risk analysis.",
    },
    {
      imageUrl: "/payment3.svg",
      title: "Flexible Developer Tools",
      para: "Build custom, scalable payment solutions with a range of APIs, SDKs, and smart contract tools tailored to your business needs.",
    },
    {
      imageUrl: "/payment4.svg",
      title: "Global Payments Made Easy",
      para: "Facilitate smooth cross-border payments without the hassle of intermediaries or excessive fees.",
    },
    {
      imageUrl: "/payment5.svg",
      title: "Cost-Effective",
      para: "Reduce operational costs and fees through AI-driven resource management and dynamic transaction optimization.",
    },
  ];

  const listExtentionData2 = [
    {
      imageUrl: "/paymentListIcon1.svg",
      heading: "AI-Optimized Payment Infrastructure",
      des: "Nexchain's AI-powered payment infrastructure ensures ultra-fast and secure transactions, optimizing every stage of the payment process. From real-time transaction validation to automated fraud detection, Nexchain enhances both the speed and security of digital payments, enabling businesses to offer high-performance solutions to their users.",
      cards: [
        {
          heading: "High Throughput \n Payments",
          des: "Nexchain's platform supports high-volume payments with low latency, processing thousands of transactions per second, all while maintaining minimal costs. AI optimizes routing and transaction processing to ensure fast, reliable payments.",
        },
        {
          heading: "Seamless Cross-\n Border Payments",
          des: "AI-driven bridging technology allows for cross-border payments with ease, eliminating the need for intermediaries, reducing transaction fees, and ensuring near-instant settlement.",
        },
      ],
    },
    {
      imageUrl: "/paymentListIcon2.svg",
      heading: "AI-Powered Fraud Detection",
      des: "Nexchain integrates machine learning models into its payment systems to detect and prevent fraudulent activities. By analyzing transaction patterns in real time, Nexchain identifies anomalies and blocks suspicious actions before they affect users or businesses.",
      cards: [
        {
          heading: "Real-Time Fraud \n Prevention",
          des: "AI algorithms continuously monitor transactions, automatically identifying and flagging suspicious activities to prevent fraud and unauthorized access.",
        },
        {
          heading: "Predictive Risk \n Management",
          des: "By using AI to analyze historical data and transaction patterns, Nexchain predicts potential risks, preventing fraud before it happens and securing user funds.",
        },
      ],
    },
    {
      imageUrl: "/paymentListIcon3.svg",
      heading: "Customizable Payment Solutions for Developers",
      des: "Nexchain provides developers with a powerful set of tools and resources to create tailored payment solutions. With a variety of AI-powered APIs and SDKs, developers can easily integrate advanced payment features into their applications, from payment gateways to digital wallets and beyond.",
      cards: [
        {
          heading: "Flexible API \n Integrations",
          des: "Nexchain's APIs enable easy integration of payment features into existing platforms, allowing businesses to customize the payment experience for their users while benefiting from AI-enhanced functionality.",
        },
        {
          heading: "Smart Payment \n Contracts",
          des: "Developers can create customizable smart payment contracts, leveraging AI to ensure automatic and optimized payment flows that are self-executing, secure, and adaptable to changing conditions.",
        },
      ],
    },
    {
      imageUrl: "/paymentListIcon4.svg",
      heading: "Optimized Payment Cost Management",
      des: "One of the key advantages of Nexchain's payment system is its cost efficiency. By using AI to optimize transaction routing and consensus mechanisms, Nexchain reduces the need for expensive intermediaries, keeping transaction fees low while maintaining high security and speed.",
      cards: [
        {
          heading: "Low-Cost \n Transactions",
          des: "Nexchain's AI-enhanced architecture minimizes resource usage and optimizes scalability, ensuring that payment transactions remain cost-effective, even under high demand.",
        },
        {
          heading: "Dynamic \n Transaction Fees",
          des: "AI algorithms predict transaction load and adjust fees dynamically to ensure that users always pay the lowest possible fee for their transactions.",
        },
      ],
    },
    {
      imageUrl: "/paymentListIcon5.svg",
      heading: "Secure and Scalable Payment Solutions",
      des: "Nexchain provides secure and scalable payment systems that grow with your business. Whether you're processing small micro-transactions or handling large-scale international payments, Nexchain's AI-powered infrastructure adapts to your needs while maintaining security and efficiency.",
      cards: [
        {
          heading: "Scalable Payment \n Processing",
          des: "With AI-powered dynamic resource allocation, Nexchain's payment infrastructure scales seamlessly to accommodate increasing transaction volumes, ensuring uninterrupted service during periods of high activity.",
        },
        {
          heading: "Post-Quantum \n Security",
          des: "Nexchain employs advanced encryption techniques, including post-quantum cryptography, to future-proof your payment systems against emerging threats, providing enhanced security for digital payments.",
        },
      ],
    },
  ];

  return (
    <>
      <HeroSection
        buttonLable="Payment Toolink"
        buttonLableIcon="/paymentLableIcon.svg"
        heading={`AI-Enhanced Payment Solutions for the Digital Economy`}
        paragraph="Nexchain revolutionizes payment systems with AI-driven blockchain technology, providing fast, secure, and low-cost solutions for a wide variety of digital payment use cases. By integrating artificial intelligence into every aspect of payment processing, Nexchain allows businesses and developers to create efficient payment solutions that scale with the ever-growing demands of the global economy.
Join Presale"
        bottomButton={true}
        bottomCard={false}
      />

      <section className="bg-white">
        <ExtentionList2 items={listExtentionData2} />
      </section>

      <section className=" bg-[#fafafa]">
        <div className="max-w-[1440px] m-auto lg:p-[120px] md:p-10 py-10 px-4 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4  mt-8">
          <GreenCard heading={`Why Nexchain for \n Payments \n Tooling?`} />

          {paymentData.map((item, index) => (
            <CardComponent key={index} item={item} />
          ))}
        </div>
      </section>
      <BottomPannel
        heading="Start Building Payment Solutions with Nexchain"
        des="Empower your business with Nexchain’s AI-powered payment solutions. Whether you're building a decentralized payment system, digital wallet, or cross-border payment platform, Nexchain offers the tools, security, and efficiency you need to create seamless, scalable payment experiences. Start today and innovate the future of payments with Nexchain."
        buttonText="Join Presale"
      />
    </>
  );
};

export default PaymentToolingPage;
