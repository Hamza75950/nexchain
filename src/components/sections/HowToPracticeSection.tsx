import Image from "next/image";
import React from "react";

function HowToPracticeSection() {
  const howToCardData = [
    {
      imageUrl: "/howTo2.png",
      title: "2. Connect Your Wallet",
      des: "Create an account using wallet connect option.",
    },
    {
      imageUrl: "/howTo3.png",
      title: "3. Choose Payment Currency",
      des: "Choose your payment method in crypto (BTC, ETH, USDT, etc.).",
    },
    {
      imageUrl: "/howTo4.png",
      title: "4. Complete Your Purchase",
      des: "Confirm your payment in your wallet or use direct deposit. Your NEX tokens will show up in your dashboard balance.",
    },
  ];
  return (
    <section className="sectionContainer  bg-[#fafafa]">
      <div className=" sectionContainerSecondary">
        <div className="box-border">
          <h2 className="sectionHeading">
            How to Participate in the Nexchain Crypto Presale
          </h2>
          <p className="sectionDes">
            Nexchain’s token presale comes with clear and transparent purchasing
            conditions, accessible for any budget. In order to buy NEX coin,
            follow the instructions below. Once the purchased tokens are in your
            wallet, you can benefit from their cross-industry use potential.
          </p>
        </div>
        <div className="grid md:grid-cols-2 mt-12 gap-6 grid-cols-1">
          <div className="p-6 border border-[#e8e8e8] rounded-lg flex flex-col gap-4">
            <div className="w-full h-40 relative">
              <Image
                src={"/howTo1.png"}
                alt="How To"
                width={408}
                height={160}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg leading-[140%] tracking-[-0.045em] font-medium text-[#07130c]">
                1. Visit the Official Website
              </p>
              <p className="text-base leading-[140%] tracking-[-0.045em] font-normal text-[#4d544f]">
                Go to the official Nexchain website at
                <a
                  className="text-base leading-[140%] tracking-[-0.045em] font-medium underline"
                  target="_blank"
                  href="/"
                >
                  {" "}
                  nexchain.ai
                </a>{" "}
                and join the presale at{" "}
                <a
                  className="text-base leading-[140%] tracking-[-0.045em] font-medium underline"
                  target="_blank"
                  href="/"
                >
                  purchase.nexchain.ai
                </a>
                . Make sure to check the URL to avoid scams.
              </p>
            </div>
          </div>
          {howToCardData.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-[#e8e8e8] rounded-lg flex flex-col gap-4"
            >
              <div className="w-full h-40 relative">
                <Image
                  src={item.imageUrl}
                  alt="How To"
                  width={408}
                  height={160}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-lg leading-[140%] tracking-[-0.045em] font-medium text-[#07130c]">
                  {item.title}
                </p>
                <p className="text-base leading-[140%] tracking-[-0.045em] font-normal text-[#4d544f]">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowToPracticeSection;
