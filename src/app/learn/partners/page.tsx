import Image from "next/image";
import React from "react";

function PartnersPage() {
  const backByImageData = [
    {
      imageUrl: "/partner1.webp",
      alt: "Shima Capital",
    },
    {
      imageUrl: "/partner2.webp",
      alt: "america brands",
    },
    {
      imageUrl: "/partner3.webp",
      alt: "Outlier Ventures",
    },
    {
      imageUrl: "/partner4.webp",
      alt: "Dream Ventures",
    },
  ];

  const ecosystemImageData = [
    {
      imageUrl: "/ecosystem1.webp",
      alt: "Google Cloud",
    },
    {
      imageUrl: "/ecosystem2.webp",
      alt: "Open Ai",
    },
    {
      imageUrl: "/ecosystem3.webp",
      alt: "Amazon",
    },
    {
      imageUrl: "/ecosystem4.webp",
      alt: "Dall e",
    },
    {
      imageUrl: "/ecosystem5.webp",
      alt: "Crypto.com",
    },
    {
      imageUrl: "/ecosystem6.svg",
      alt: "CoinMarketCap",
    },
    {
      imageUrl: "/ecosystem7.webp",
      alt: "VISA",
    },
    {
      imageUrl: "/ecosystem8.webp",
      alt: "Nvidia",
    },
    {
      imageUrl: "/ecosystem9.webp",
      alt: "1 inch",
    },
    {
      imageUrl: "/ecosystem10.webp",
      alt: "Ledger",
    },
  ];

  return (
    <section className="bg-[#fafafa] pt-[160px] pb-[94px] bg-[url('/background1.svg')] bg-contain bg-no-repeat min-h-[calc(100vh-106px)] max-w-[100vw]">
      <div className="max-w-[1392px] m-auto px-[15px]">
        <h1 className="mb-[120px] lg:text-[48px] text-[24px] leading-[140%] tracking-[-0.045em] font-medium text-[#0a1a10] text-center">
          Nexchain Partners
        </h1>
        <div className="box-border bg-white border border-[#e8e8e8] rounded-[32px] px-[37px] py-[53px]">
          <h2 className="text-center text-[32px] leading-[140%] tracking-[-0.045em] font-medium text-[#303833] mb-[56px]">
            Backed By
          </h2>
          <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-2.5 max-w-[1120px] mx-auto mb-[64px]">
            {backByImageData.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#e8e8e8] rounded-[16px] lg:h-[90px] h-[58px]  flex items-center justify-center box-border transition duration-300 relative"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  width={500}
                  height={500}
                  className="object-contain max-h-[40%] max-w-[70%] !relative"
                />
              </div>
            ))}
          </div>

          <h2 className="text-center text-[32px] leading-[140%] tracking-[-0.045em] font-medium text-[#303833] mb-[56px]">
            Ecosystem Partners
          </h2>
          <div className="grid lg:grid-cols-5 grid-cols-2 lg:gap-6 gap-2.5 max-w-[1120px] mx-auto lg:mb-[64px]">
            {ecosystemImageData.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#e8e8e8] rounded-[16px] lg:h-[90px] h-[58px] flex items-center justify-center box-border transition duration-300 relative"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  width={500}
                  height={500}
                  className="object-contain max-h-[40%] max-w-[70%] !relative"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnersPage;
