import BottomPannel from "@/components/common/BottomPannel";
import CardComponent from "@/components/common/CardComponent";
import ExtentionList2 from "@/components/common/ExtentionList2";
import GreenCard from "@/components/common/GreenCard";
import HeroSection from "@/components/sections/HeroSection";
import React from "react";

function PermissionEnvironmentPage() {
  const PermissionData = [
    {
      imageUrl: "/permission1.svg",
      title: "AI-Enhanced Privacy and Security",
      para: "Advanced AI models ensure data privacy and network security by automatically adapting to changing needs and threats.",
    },
    {
      imageUrl: "/permission2.svg",
      title: "Scalable Infrastructure",
      para: `Nexchain's permissioned environments are built to scale, handling enterprise-level transaction volumes and growing network sizes with ease.`,
    },
    {
      imageUrl: "/permissio3.svg",
      title: "Custom Governance and Access Control",
      para: "Tailor blockchain to business and regulatory needs with flexible governance and customizable access.",
    },
    {
      imageUrl: "/permission4.svg",
      title: "Seamless Integration",
      para: "Nexchain enables seamless integration of your permissioned blockchain with enterprise systems for a smooth transition.",
    },
    {
      imageUrl: "/permission5.svg",
      title: "Regulatory Compliance",
      para: "Benefit from automated compliance tools and real-time auditing features that ensure network stays compliant with industry regulations.",
    },
  ];
  const listExtentionData2 = [
    {
      imageUrl: "/permissionList1.svg",
      heading: "Custom Permissioned Blockchains",
      des: "Nexchain’s permissioned environments allow enterprises to create private blockchains with flexible access control, tailored governance, and enhanced privacy. These networks are ideal for enterprise data management, confidential transactions, and private finance ecosystems.",
      cards: [
        {
          heading: "Custom Access Control",
          des: "Enterprises can define and control who participates in the network, who validates transactions, and who accesses specific data. This ensures only authorized participants interact with the blockchain.",
        },
        {
          heading: "Tailored Governance",
          des: "Organizations can configure governance models to match business or regulatory needs, including custom consensus mechanisms and voting rules for network management.",
        },
      ],
    },
    {
      imageUrl: "/permissionList2.svg",
      heading: "AI-Driven Privacy and Security",
      des: "In permissioned environments, privacy and security are paramount. Nexchain’s AI algorithms enhance the privacy and security of permissioned blockchains by using advanced analytics, real-time monitoring, and robust detection techniques.",
      cards: [
        {
          heading: "Privacy-Preserving AI",
          des: "Nexchain’s AI models help protect sensitive data and ensure compliance with privacy regulations. Advanced analytics and monitoring tools detect anomalies and unauthorized access, maintaining operational security.",
        },
        {
          heading: "AI-Powered Security",
          des: "AI continuously monitors network activity to identify threats and vulnerabilities. Automated threat detection and response mechanisms help safeguard the network from evolving security risks.",
        },
      ],
    },
    {
      imageUrl: "/permissionList3.svg",
      heading: "Scalable Permissioned Networks",
      des: "Nexchain’s technology powers permissioned environments designed for scalability, handling increased transaction volumes and network growth. AI-driven resource management and optimization ensure networks remain efficient, secure, and resilient as they scale.",
      cards: [
        {
          heading: "High Throughput",
          des: "Permissioned networks are optimized for high transaction throughput, supporting enterprise workloads and heavy usage.",
        },
        {
          heading: "Efficient Resource Management",
          des: "AI-powered systems optimize network parameters and resource allocation, ensuring efficient operation even during periods of high demand.",
        },
      ],
    },
    {
      imageUrl: "/permissionList4.svg",
      heading: "Seamless Integration with Existing Systems",
      des: "Nexchain facilitates seamless integration with existing enterprise systems, allowing organizations to adopt permissioned blockchains without disrupting current workflows. Flexible APIs and cross-chain interoperability ensure smooth adoption and regulatory compliance.",
      cards: [
        {
          heading: "Flexible API Integration",
          des: "Nexchain provides robust APIs for integrating permissioned blockchains with enterprise applications, enabling data exchange and process automation efficiently.",
        },
        {
          heading: "Cross-Chain Interoperability",
          des: "Nexchain’s permissioned environments support interoperability with other blockchains and legacy systems, allowing secure data and asset exchange.",
        },
      ],
    },
    {
      imageUrl: "/permissionList5.svg",
      heading: "AI-Driven Compliance and Auditing",
      des: "With the rising demand for regulatory compliance, Nexchain’s permissioned environments include AI-driven tools for ensuring that all transactions, processes, and actions are in full compliance with industry standards and legal requirements.",
      cards: [
        {
          heading: "Automated Compliance",
          des: "Nexchain’s AI tools continuously analyze transactions and operations within the network to ensure compliance with global regulations, such as GDPR, KYC/AML, and financial reporting standards.",
        },
        {
          heading: "Real-Time Auditing",
          des: "AI-powered auditing tools automatically track and document all actions on the network, creating an immutable and verifiable record that helps businesses stay compliant and audit-ready.",
        },
      ],
    },
  ];

  return (
    <>
      <HeroSection
        buttonLable="Permissioned Environments"
        buttonLableIcon="/permissionLableIcon.svg"
        heading={`AI-Enhanced Permissioned Environments for Secure and Scalable Blockchain Solutions`}
        paragraph="Nexchain provides advanced AI-powered permissioned environments that enable enterprises and organizations to build secure, private, and efficient blockchain networks tailored to their specific needs. By combining the power of artificial intelligence with blockchain technology, Nexchain offers a highly scalable and adaptable environment for businesses looking to leverage blockchain while maintaining control over access and permissions."
        bottomButton={true}
        bottomCard={false}
      />

      <section className="bg-white">
        <ExtentionList2 items={listExtentionData2} />
      </section>

      <section className=" bg-[#fafafa]">
        <div className="max-w-[1440px] m-auto lg:p-[120px] md:p-10 py-10 px-4 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4  mt-8">
          <GreenCard
            heading={`Why Nexchain for \n Permissioned \n Environments?`}
          />

          {PermissionData.map((item, index) => (
            <CardComponent key={index} item={item} />
          ))}
        </div>
      </section>
      <BottomPannel
        heading="Get Started with Nexchain Permissioned Environments"
        des="Transform your business operations with Nexchain&apos;s AI-powered permissioned blockchain environments. Whether you&apos;re looking to build a secure, private blockchain for internal use or a private financial ecosystem, Nexchain provides the tools, scalability, and security you need to succeed. Start today and build the next-generation permissioned blockchain solutions with Nexchain."
        buttonText="Join Presale"
      />
    </>
  );
}

export default PermissionEnvironmentPage;
