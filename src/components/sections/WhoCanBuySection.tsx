import Image from "next/image";
import React from "react";

function WhoCanBuySection() {
  const whoData = [
    {
      imgUrl: "/who1.svg",
      title: "Investors:",
      des: " by purchasing the NEX coin, investors secure a long-term solution for web-based transactions, with AI solutions making every operation instant, transparent, and secure.",
    },
    {
      imgUrl: "/who2.svg",
      title: "Crypto enthusiasts:",
      des: "regardless of their experience in the blockchain sector, crypto enthusiasts can step into a revolutionized Web3 environment, where every process is sped up and facilitated by the use of NEX.",
    },
    {
      imgUrl: "/who3.svg",
      title: "Business owners:",
      des: "entrepreneurs across such industries as finance, healthcare, logistics, content making, IoT, and others revamp their operations with NEX, automating repetitive and tedious processes with the help of AI.",
    },
    {
      imgUrl: "/who4.svg",
      title: "AI developers:",
      des: "entrepreneurs across such industries as finance, healthcare, logistics, content making, IoT, and others revamp their operations with NEX, automating repetitive and tedious processes with the help of AI.",
    },
  ];
  return (
    <section className="sectionContainer  bg-[#fafafa]">
      <div className=" sectionContainerSecondary">
        <div className="box-border">
          <h2 className="sectionHeading">
            Who Can Buy Nexchain Presale Tokens?
          </h2>

          <p className="sectionDes">
            Nexchain provides solutions for various groups of users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {whoData.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-[#e8e8e8] bg-white p-6"
            >
              <Image
                className="mb-4"
                src={item.imgUrl}
                width={42}
                height={42}
                alt="who"
              />
              <p className="text-black text-[16px] leading-[140%] tracking-[-0.045em] font-normal">
                <b className="flex items-center h-[68px] mb-3 text-[24px] leading-[140%] tracking-[-0.045em] font-medium">
                  {item.title}
                </b>
                {item.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhoCanBuySection;
