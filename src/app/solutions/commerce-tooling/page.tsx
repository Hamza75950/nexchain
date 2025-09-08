import BottomPannel from "@/components/common/BottomPannel";
import CardComponent from "@/components/common/CardComponent";
import ExtentionList2 from "@/components/common/ExtentionList2";
import GreenCard from "@/components/common/GreenCard";
import HeroSection from "@/components/sections/HeroSection";
import React from "react";

function CommerceToolingPage() {
  const PermissionData = [
    {
      imageUrl: "/commerce1.svg",
      title: "AI-Enhanced Privacy and Security",
      para: "Advanced AI models ensure data privacy and network security by automatically adapting to changing needs and threats.",
    },
    {
      imageUrl: "/commerce2.svg",
      title: "Scalable Infrastructure",
      para: "Nexchain’s permissioned environments are built to scale, handling enterprise-level transaction volumes and growing network sizes with ease.",
    },
    {
      imageUrl: "/commerce3.svg",
      title: "Custom Governance and Access Control",
      para: "Tailor blockchain to business and regulatory needs with flexible governance and customizable access.",
    },
    {
      imageUrl: "/commerce4.svg",
      title: "Seamless Integration",
      para: "Nexchain enables seamless integration of your permissioned blockchain with enterprise systems for a smooth transition.",
    },
    {
      imageUrl: "/commerce5.svg",
      title: "Regulatory Compliance",
      para: "Benefit from automated compliance tools and real-time auditing features that ensure network stays compliant with industry regulations.",
    },
  ];
  const listExtentionData2 = [
    {
      imageUrl: "/commerceList1.svg",
      heading: "AI-Powered Payment Processing",
      des: "Leverage AI technology to optimize the payment experience for both businesses and customers. Nexchain’s AI-powered payment processing enables faster, more secure, and cost-effective transactions, supporting a frictionless experience across all your e-commerce channels.",
      cards: [
        {
          heading: "Low-Cost Transactions",
          des: "Minimize transaction fees with AI-optimized routing and settlement, ensuring cost-effective payments for merchants and customers.",
        },
        {
          heading: "Instant Payment Settlements",
          des: "AI-driven automation enables real-time payment settlements, reducing delays and improving cash flow for e-commerce businesses.",
        },
      ],
    },
    {
      imageUrl: "/commerceList2.svg",
      heading: "Smart Commerce Contracts",
      des: "Streamline e-commerce business flows with AI-enhanced smart contracts to digitize and automate order fulfillment, pricing, invoicing, and more. Nexchain’s smart contracts adapt to real-time data, ensuring efficient and transparent operations.",
      cards: [
        {
          heading: "Automated Order Fulfillment",
          des: "AI-powered contracts automatically trigger order processing, shipping, and inventory updates based on real-time purchase and logistics data.",
        },
        {
          heading: "Dynamic Pricing and Invoicing Management",
          des: "Leverage AI to dynamically adjust pricing and generate invoices based on demand, inventory, and customer profiles, maximizing revenue and efficiency.",
        },
      ],
    },
    {
      imageUrl: "/commerceList3.svg",
      heading: "AI-Powered Fraud Prevention and Security",
      des: "Defend your e-commerce platform against fraud and malicious behavior with AI-driven security. Nexchain’s advanced models detect suspicious activity in real time, protecting your business and customers.",
      cards: [
        {
          heading: "Real-Time Fraud Detection",
          des: "AI continuously monitors transactions and user behavior to identify and block fraudulent activities before they impact your business.",
        },
        {
          heading: "Enhanced Security Features",
          des: "Benefit from multi-layered security, including anomaly detection, behavioral analytics, and automated threat response.",
        },
      ],
    },
    {
      imageUrl: "/commerceList4.svg",
      heading: "Customizable E-Commerce Solutions for Developers",
      des: "Nexchain provides developers with a suite of tools to build, scale, and customize e-commerce solutions. Flexible APIs, SDKs, and AI-powered modules enable rapid integration and innovation for any business model.",
      cards: [
        {
          heading: "Flexible APIs and SDKs",
          des: "Integrate Nexchain’s commerce tooling into your platform with robust APIs and SDKs, supporting a wide range of e-commerce use cases.",
        },
        {
          heading: "AI-Powered Product Recommendations",
          des: "Enhance customer experience with AI-driven product recommendations, personalized offers, and targeted marketing.",
        },
      ],
    },
    {
      imageUrl: "/commerceList5.svg",
      heading: "Scalable E-Commerce Infrastructure",
      des: "Scale your e-commerce operations with Nexchain’s AI-optimized infrastructure. Whether you’re handling high transaction volumes or expanding globally, Nexchain ensures your platform remains fast, reliable, and cost-efficient.",
      cards: [
        {
          heading: "High Transaction Throughput",
          des: "Support enterprise-level transaction volumes with AI-optimized blockchain infrastructure, ensuring smooth operations during peak demand.",
        },
        {
          heading: "Efficient Resource Allocation",
          des: "AI dynamically manages network resources, optimizing performance and minimizing operational costs as your business grows.",
        },
      ],
    },
    {
      imageUrl: "/commerceList6.svg",
      heading: "Seamless E-Commerce Integration",
      des: "Nexchain enables seamless integration with existing e-commerce systems, ensuring a smooth transition to blockchain-powered solutions without disrupting ongoing operations. Whether integrating with payment gateways, inventory management systems, or customer relationship management (CRM) tools, Nexchain facilitates a smooth integration process.",
      cards: [
        {
          heading: "Cross-Platform Integration",
          des: "Nexchain’s infrastructure supports integration with popular e-commerce platforms, allowing businesses to enhance their existing systems with blockchain capabilities without the need for major overhauls.",
        },
        {
          heading: "Interoperability Across Systems",
          des: "Through advanced bridging protocols, Nexchain ensures that your e-commerce platform can interact with other blockchain networks, creating a unified ecosystem across different platforms and services.",
        },
      ],
    },
  ];

  return (
    <>
      <HeroSection
        buttonLable="Commerce Tooling"
        buttonLableIcon="/commerce.svg"
        heading={`AI-Enhanced Blockchain Solutions \n for E-Commerce Innovation`}
        paragraph="Nexchain offers AI-powered blockchain tools designed to transform e-commerce. Whether you&apos;re a retailer, platform provider, or service integrator, Nexchain’s advanced technology enables secure, scalable, and seamless commerce solutions that empower businesses to innovate and optimize their operations."
        bottomButton={true}
        bottomCard={false}
      />

      <section className="bg-white">
        <ExtentionList2 items={listExtentionData2} />
      </section>

      <section className=" bg-[#fafafa]">
        <div className="max-w-[1440px] m-auto lg:p-[120px] md:p-10 py-10 px-4 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4  mt-8">
          <GreenCard heading={`Why Nexchain for \n E-Commerce \n Tooling?`} />

          {PermissionData.map((item, index) => (
            <CardComponent key={index} item={item} />
          ))}
        </div>
      </section>
      <BottomPannel
        heading="Start Building with Nexchain’s Commerce Tools"
        des="Unlock the full potential of your e-commerce platform with Nexchain’s AI-powered blockchain solutions. Whether you’re looking to optimize payment systems, automate processes, or improve security, Nexchain provides the tools and infrastructure needed to build the future of e-commerce. Start today and innovate your business with Nexchain."
        buttonText="Join Presale"
      />
    </>
  );
}

export default CommerceToolingPage;
