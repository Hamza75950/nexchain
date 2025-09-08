import Image from "next/image";
import React from "react";
import HowToSingleCard from "./HowToSingleCard";
import Link from "next/link";

function HowToParticipateCard() {
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
    <div className="grid md:grid-cols-2 mt-12 gap-6 grid-cols-1">
      <div className="p-6 border border-[#e8e8e8] rounded-lg flex flex-col gap-4">
        <div className=" h-40 relative">
          <Image src={"/howTo1.png"} alt="How To" width={408} height={160} />
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="text-lg leading-[140%] tracking-[-0.045em] font-medium text-[#07130c]">
            1. Visit the Official Website
          </p>
          <p className="text-base leading-[140%] tracking-[-0.045em] font-normal text-[#4d544f]">
            Go to the official Nexchain website at
            <Link
              className="text-base leading-[140%] tracking-[-0.045em] font-medium underline"
              target="_blank"
              href="/"
            >
              {" "}
              nexchain.ai
            </Link>{" "}
            and join the presale at{" "}
            <Link
              className="text-base leading-[140%] tracking-[-0.045em] font-medium underline"
              target="_blank"
              href="/"
            >
              purchase.nexchain.ai
            </Link>
            . Make sure to check the URL to avoid scams.
          </p>
        </div>
      </div>
      {howToCardData.map((item, index) => (
        <HowToSingleCard item={item} key={index} />
      ))}
    </div>
  );
}

export default HowToParticipateCard;
