import HowToSingleCard from "@/components/common/HowToSingleCard";
import FAQAccordion from "@/components/sections/FaqSection";
import HeroSection from "@/components/sections/HeroSection";
import React from "react";

function ReferalsPage() {
  const referalData = [
    {
      imageUrl: "/referal1.webp",
      title: "Connect Your Wallet",
      des: "Securely connect your crypto wallet to activate your referral dashboard.",
    },
    {
      imageUrl: "/referal2.webp",
      title: "Share Your Unique Link",
      des: "Copy your personal referral link and share it with your friends, followers, or community.",
    },
    {
      imageUrl: "/referal3.webp",
      title: "Get Paid Instantly",
      des: "Earn 10% cashback per referral: withdraw USDT or convert to NEX.",
    },
  ];
  return (
    <>
      <HeroSection
        heading={`Earn USDT instantly by \n sharing Nexchain`}
        paragraph={`Your affiliate program link is always ready. Earn instant 5% cashback in USDT BEP-20 once the \n affiliate system activates for you.`}
        bottomButton={true}
        bottomCard={false}
      />
      <section className="max-w-full bg-white">
        <div className="max-w-[1232px] py-[100px] px-[16px] m-auto">
          <div className="mb-[48px]">
            <h2 className="sectionHeading">
              3 simple steps to cashback rewards
            </h2>
            <p className="sectionDes max-w-[672px]">
              Unlock the full potential of your earnings with Nexchain, the
              ultimate platform designed to maximize your rewards. Whether
              you're staking, trading, or participating in exclusive programs,
              Nexchain ensures you get the most out of every transaction.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
            {referalData.map((item, index) => (
              <HowToSingleCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
      <FAQAccordion />
    </>
  );
}

export default ReferalsPage;
