import BottomPannel from "@/components/common/BottomPannel";
import CardComponent from "@/components/common/CardComponent";
import ExtentionList2 from "@/components/common/ExtentionList2";
import GreenCard from "@/components/common/GreenCard";
import HeroSection from "@/components/sections/HeroSection";
import React from "react";

const FinancialInfrastructurePage = () => {
  const finantialData = [
    {
      imageUrl: "/finantial1.svg",
      title: "AI-Enhanced Financial Services",
      para: "Automate and optimize critical financial services with AI-driven technology for better performance, security, and scalability.",
    },
    {
      imageUrl: "/finantial2.svg",
      title: "Real-Time Risk and Credit Analysis",
      para: "Leverage machine learning to assess creditworthiness and manage risk with precision.",
    },
    {
      imageUrl: "/finantial3.svg",
      title: "Decentralized Finance (DeFi) Ready",
      para: "Seamlessly integrate DeFi solutions with AI-powered smart contracts and decentralized protocols.",
    },
    {
      imageUrl: "/finantial4.svg",
      title: "Security & Fraud Prevention",
      para: "Protect financial transactions and data with AI-based fraud detection systems and advanced encryption techniques.",
    },
    {
      imageUrl: "/finantial5.svg",
      title: "Global Reach",
      para: `Enable cross-border financial services with Nexchain's interoperable, AI-enhanced infrastructure.`,
    },
  ];

  const listExtentionData2 = [
    {
      imageUrl: "/finantialList1.svg",
      heading: "AI-Driven Financial Systems",
      des: `Nexchain's AI capabilities are integrated across all aspects of financial infrastructure. Through machine learning and predictive analytics, Nexchain enables financial institutions and businesses to offer dynamic, real-time financial services that can adapt to evolving market conditions and user behavior.`,
      cards: [
        {
          heading: "Real-Time Risk \n Management",
          des: "AI algorithms continuously analyze market data and transaction patterns, automatically adjusting risk parameters and mitigating potential financial risks in real time.",
        },
        {
          heading: "Smart Credit \n Scoring",
          des: "Powered by AI, Nexchain provides an automated and more accurate credit scoring system, evaluating borrower risk based on comprehensive data analysis, ensuring better loan decisions and personalized lending.",
        },
      ],
    },
    {
      imageUrl: "/finantialList2.svg",
      heading: "Seamless Payments and Transactions",
      des: `Nexchain enables ultra-fast and low-cost financial transactions by leveraging AI-driven consensus mechanisms and optimizing network throughput. Whether it's cross-border payments, digital asset transfers, or peer-to-peer transactions, Nexchain's platform ensures that your financial transactions are processed securely and efficiently.`,
      cards: [
        {
          heading: "High Throughput \n Payments",
          des: "Nexchain supports high transaction volumes with AI-optimized transaction routing, ensuring smooth, instantaneous payments even during peak periods.",
        },
        {
          heading: "Cross-Border \n Transactions",
          des: "With advanced AI-driven bridging technology, Nexchain simplifies cross-border payments, eliminating the need for intermediaries and reducing transaction fees and times.",
        },
      ],
    },
    {
      imageUrl: "/finantialList3.svg",
      heading: "Decentralized Finance (DeFi) Solutions",
      des: `Nexchain offers powerful AI-enhanced decentralized finance (DeFi) tools that enable the creation of innovative financial products. From decentralized exchanges to lending protocols, Nexchain's AI-driven infrastructure ensures the seamless functioning and security of DeFi platforms.`,
      cards: [
        {
          heading: "AI-Powered DeFi \n Protocols",
          des: `Using AI to adjust liquidity, lending rates, and risk management, Nexchain's DeFi solutions remain efficient and adaptable, even in fluctuating market conditions.`,
        },
        {
          heading: "Automated Yield \n Optimization",
          des: `AI-powered protocols analyze investment opportunities in real-time and automatically optimize yield farming and staking strategies, maximizing returns for users.`,
        },
      ],
    },
    {
      imageUrl: "/finantialList4.svg",
      heading: "Asset Management with AI",
      des: `Nexchain's AI-driven asset management solutions offer financial institutions and investors tools to manage portfolios, optimize returns, and reduce risks. By analyzing real-time market data, Nexchain ensures that portfolios are dynamically adjusted to meet investment goals and market conditions.`,
      cards: [
        {
          heading: "Predictive Analytics",
          des: "Nexchain uses AI to predict market trends and asset performance, enabling proactive adjustments in asset allocation and portfolio strategies.",
        },
        {
          heading: "Automated Trading",
          des: "Leveraging AI-based trading algorithms, Nexchain offers high-frequency trading and automated asset management solutions that adapt to market conditions for optimal performance.",
        },
      ],
    },
    {
      imageUrl: "/finantialList5.svg",
      heading: "AI-Powered Fraud Detection and Security",
      des: "Nexchain employs cutting-edge AI algorithms to detect and prevent fraudulent activities across its financial ecosystem. These real-time fraud detection systems continuously analyze transaction patterns, ensuring the security of user assets and financial systems.",
      cards: [
        {
          heading: "Real-Time Fraud \n Prevention",
          des: "AI monitors every transaction, identifying suspicious activities and automatically triggering security measures to prevent fraud.",
        },
        {
          heading: "Encryption & \n Security",
          des: "Leveraging post-quantum cryptography, Nexchain ensures its financial infrastructure is future-proof and resistant to emerging threats, providing an extra layer of security for all transactions and data.",
        },
      ],
    },
    {
      imageUrl: "/finantialList6.svg",
      heading: "Scalable and Efficient Financial Infrastructure",
      des: `Nexchain's AI-enhanced infrastructure is designed to scale with your financial needs. Whether you're running a high-volume payment system or a complex DeFi protocol, Nexchain can handle significant transaction loads while maintaining low latency and high efficiency.`,
      cards: [
        {
          heading: "Scalable \n Architecture",
          des: `With AI-driven network optimization, Nexchain's platform scales effortlessly to accommodate growing transaction volumes and expanding financial systems, ensuring no disruption in service.`,
        },
        {
          heading: "Low-Cost \n Transactions",
          des: `Thanks to AI-driven consensus mechanisms and optimization, Nexchain maintains low transaction fees while ensuring the network remains fast and efficient.`,
        },
      ],
    },
  ];

  return (
    <>
      <HeroSection
        buttonLable="Financial Infrastructure"
        buttonLableIcon="/financial.svg"
        heading={`AI-Powered Blockchain Infrastructure for Financial Systems`}
        paragraph="Nexchain revolutionizes financial infrastructure with its AI-enhanced blockchain solutions. By combining the power of artificial intelligence with blockchain technology, Nexchain enables secure, scalable, and efficient financial systems that transform traditional finance into a decentralized, future-ready ecosystem. From payments to lending, Nexchain offers advanced tools that automate, optimize, and enhance financial processes."
        bottomButton={true}
        bottomCard={false}
      />

      <section className="bg-white">
        <ExtentionList2 items={listExtentionData2} />
      </section>

      <section className=" bg-[#fafafa]">
        <div className="max-w-[1440px] m-auto lg:p-[120px] md:p-10 py-10 px-4 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4  mt-8">
          <GreenCard
            heading={`Why Nexchain for \n Financial \n Infrastructure?`}
          />

          {finantialData.map((item, index) => (
            <CardComponent key={index} item={item} />
          ))}
        </div>
      </section>
      <BottomPannel
        heading="Start Building with Nexchain Financial Infrastructure"
        des="Transform your financial systems with Nexchain’s AI-powered blockchain solutions. Whether you're a fintech startup, a financial institution, or a DeFi platform, Nexchain provides the infrastructure and tools to scale your financial operations securely, efficiently, and cost-effectively. Harness the power of AI to innovate and stay ahead in the fast-evolving digital finance landscape."
        buttonText="Join Presale"
      />
    </>
  );
};

export default FinancialInfrastructurePage;
