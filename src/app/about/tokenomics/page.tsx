import HeroSection from "@/components/sections/HeroSection";
import Image from "next/image";
import React from "react";

function TokenomicsPage() {
  return (
    <>
      <HeroSection
        heading={`Tokenomics`}
        paragraph="Nexchain’s tokenomics model is structured to support network security, incentivize participation, and sustain long-term value through controlled issuance and strategic allocation. The total initial supply of Nexchain tokens is 2,150,000,000, distributed across various categories, including early-stage investment rounds, ecosystem incentives, staking rewards, and liquidity provisioning. Nexchain employs an inflationary issuance model with an annual burn mechanism to regulate supply while ensuring continued token utility."
        bottomButton={true}
        bottomCard={false}
        multicard={false}
      />
      <section className="border border-[#e8e8e8] py-20 bg-white">
        <h2 className="mb-10 w-full text-center text-[40px] leading-[140%] tracking-[-0.045em] font-medium">
          Token Supply
        </h2>
        <div className="max-w-[min(780px,100%)] mx-auto">
          <div className="bg-[#f9faf9] rounded-t-lg text-[18px] leading-[150%] tracking-[-0.045em] font-normal flex items-center justify-between flex-row border border-[#e8e8e8] py-6 px-8">
            Initial Market Cap
            <b className="text-[18px] leading-[150%] tracking-[-0.045em] font-normal">
              $157,057,500
            </b>
          </div>

          <div className="bg-white rounded-t-lg text-[18px] leading-[150%] tracking-[-0.045em] font-normal flex items-center justify-between flex-row border border-[#e8e8e8] py-6 px-8">
            Fully Diluted Market Cap
            <b className="text-[18px] leading-[150%] tracking-[-0.045em] font-normal">
              $430,000,000
            </b>
          </div>
          <div className="bg-white rounded-t-lg text-[18px] leading-[150%] tracking-[-0.045em] font-normal flex items-center justify-between flex-row border border-[#e8e8e8] py-6 px-8">
            Price Variable (Listing)
            <b className="text-[18px] leading-[150%] tracking-[-0.045em] font-normal">
              $0.30
            </b>
          </div>
          <div className="bg-white rounded-t-lg text-[18px] leading-[150%] tracking-[-0.045em] font-normal flex items-center justify-between flex-row border border-[#e8e8e8] py-6 px-8">
            Initial Circulating Supply
            <b className="text-[18px] leading-[150%] tracking-[-0.045em] font-normal">
              523,525,000
            </b>
          </div>
        </div>
      </section>
      <section className="border-none bg-[#fafafa] flex justify-center items-center flex-col lg:py-[100px] py-[40px] px-[16px]">
        <h2 className="mb-10 w-full text-center text-[40px] leading-[140%] tracking-[-0.045em] font-medium"></h2>
        <div className="lg:px-12 lg:py-6 lg:max-w-fit w-full p-[16px] bg-white rounded-lg border border-[#e8e8e8] text-center lg:mx-auto lg:mb-16">
          <p className="lg:text-[18px] text-[16px] leading-[150%] tracking-[-0.045em] font-normal mb-[5px]">
            Total initial Supply
          </p>
          <p className="lg:text-[32px] text-[24px] leading-[130%] tracking-[-0.045em] font-normal">
            2,150,000,000 NEX
          </p>
        </div>
        <div className="relative max-w-[629px] lg:h-[600px] h-[320px] w-full">
          <Image
            src={"/chart.svg"}
            width={630}
            height={600}
            className="absolute h-full w-full inset-0 text-transparent"
            alt="chart"
          />
        </div>
      </section>
    </>
  );
}

export default TokenomicsPage;
