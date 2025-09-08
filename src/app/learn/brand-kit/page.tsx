import CardComponent from "@/components/common/CardComponent";
import HeroSection from "@/components/sections/HeroSection";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function BrandKitPage() {
  const nexData = [
    {
      imageUrl: "/nexwhite.svg",
      title: "Nex Logo (white)",
      pngLink: "/nexwhite.png",
      svgLink: "/nexwhite.svg",
      bgColor: "bg-[#07130c]",
    },
    {
      imageUrl: "/nexblack.svg",
      title: "Nex Logo (dark)",
      pngLink: "/nexblack.png",
      svgLink: "/nexblack.svg",
      bgColor: "bg-[#fafafa]",
    },
    {
      imageUrl: "/nexgreen.svg",
      title: "Nex Logo (green bg)",
      pngLink: "/nexgreen.png",
      svgLink: "/nexgreen.svg",
      bgColor: "bg-[#49ff86]",
    },
    {
      imageUrl: "/nexcoin.svg",
      title: "Nex Coin",
      pngLink: "/nexcoin.png",
      svgLink: "/nexccoin.svg",
      bgColor: "bg-[#fafafa]",
    },
    {
      imageUrl: "/nexgroup.svg",
      title: "Nex coin group",
      pngLink: "/nexgroup.png",
      svgLink: "/nexgroup.svg",
      bgColor: "bg-[#fafafa]",
    },
  ];
  return (
    <>
      <HeroSection
        heading={`Brand Kit`}
        bottomButton={true}
        bottomCard={false}
        headingTextLarge="lg:text-[64px]"
      />
      <section className="max-w-[100vw] bg-[#fafafa">
        <div className="max-w-[1232px] m-auto">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 py-[100px] px-[16px]">
            {/* card */}
            {nexData.map((item, index) => (
              <div key={index} className="border border-[#e8e8e8] bg-white rounded-[8px] p-[32px] flex justify-center items-start flex-col gap-4">
                <div
                  className={` w-full h-[320px]  flex items-center justify-center rounded-[8px] relative ${item.bgColor}`}
                >
                  <div className="flex justify-center items-center relative w-[min(320px,60%)] h-[min(320px,60%)]">
                    <Image
                      src={item.imageUrl}
                      width={192}
                      height={192}
                      alt="nex"
                    />
                  </div>
                </div>
                <h3 className="text-[24px] leading-[140%] tracking-[-0.045em] font-medium m-0">
                  {item.title}
                </h3>
                <div className="flex gap-2">
                  <Link
                    href={item.pngLink}
                    target="_blank"
                    className="no-underline inline-block  "
                  >
                    <button className="py-[13px] px-[16px] hover:bg-gray-200 rounded-full text-[#07130c] bg-white border border-[#e8e8e8] text-[16px] leading-normal tracking-[-0.045em] font-medium">
                      Download PNG
                    </button>
                  </Link>
                  <Link
                    href={item.svgLink}
                    target="_blank"
                    className="no-underline inline-block "
                  >
                    <button className="py-[13px] px-[16px] rounded-full hover:bg-gray-200 text-[#07130c] bg-white border border-[#e8e8e8] text-[16px] leading-normal tracking-[-0.045em] font-medium">
                      Download SVG
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default BrandKitPage;
