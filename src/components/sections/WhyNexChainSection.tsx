import Image from "next/image";
import React from "react";

interface WhyNexChainSectionType {
  bgColor?: string;
}

function WhyNexChainSection({ bgColor }: WhyNexChainSectionType) {
  const nexData = [
    {
      imageUrl: "/finance.svg",
      title: "Finance",
      des: "The Nexchain blockchain enhances security and automates such processes as fraud detection, credit analysis, and algorithmic trading.",
    },
    {
      imageUrl: "/health.svg",
      title: "Healthcare",
      des: "Nexchain native AI advocates for secure and confidential medical data exchange, accelerating diagnoses and improving patient care quality.",
    },
    {
      imageUrl: "/supply.svg",
      title: "Supply-chain management",
      des: "The chain provides advanced data analytics tools in order to speed up and optimize logistics.",
    },
    {
      imageUrl: "/iot.svg",
      title: "Internet of Things (IoT)",
      des: "A scalable NEX solution can connect and manage any number of IoT devices with fast and secure data transfer through a decentralized infrastructure.",
    },
    {
      imageUrl: "/content.svg",
      title: "Content monetization",
      des: "Fully transparent transactions in AI content sale, as well as unbreachable security of each operation.",
    },
    {
      imageUrl: "/decentralized.svg",
      title: "Decentralized AI services",
      des: "Nexchain AI provides a platform for AI model training with monetization potential on a fully decentralized basis.",
    },
    {
      imageUrl: "/gov.svg",
      title: "Government Administration",
      des: "NEX AI-based solutions for transparent government processes, such as e-voting and buying management, using smart contracts to increase trust.",
    },
  ];
  return (
    <section
      className={`sectionContainer   ${bgColor ? bgColor : "bg-[#fafafa]"}`}
    >
      <div className=" sectionContainerSecondary">
        <div className="box-border">
          <h2 className="sectionHeading">Why Nexchain Is Built to Succeed</h2>
          <h3 className="sectionSubHeading">
            Real-World Use Cases of Nexchain:
          </h3>
          <p className="sectionDes">
            NEX AI is a flexible and powerful solution that can facilitate
            processes across multiple industries. NEX broadens horizons in every
            sector where it can be of use.
          </p>
        </div>
        <div className="flex flex-col gap-6 mt-10">
          {nexData.map((item, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-[32px_0.9fr_1.1fr] grid-cols-[32px_1fr] gap-4 md:pb-6 border-b border-[#e8e8e8]  h-auto "
            >
              <div className="md:box-border w-20">
                <Image
                  src={item.imageUrl}
                  width={32}
                  height={32}
                  alt={item.title}
                />
              </div>
              <h4 className="text-[24px] leading-[140%] tracking-[-0.045em] font-medium">
                {item.title}
              </h4>
              <p className="text-[16px] leading-[140%] tracking-[-0.045em] font-normal md:max-w-[460px] col-span-2 lg:col-span-1">
                {item.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyNexChainSection;
