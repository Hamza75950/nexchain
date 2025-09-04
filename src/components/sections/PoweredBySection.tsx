import Image from "next/image";
import React from "react";

function PoweredBySection() {
  const ImageData = [
    { imageUrl: "/google.webp", alt: "google" },
    { imageUrl: "/openAi.webp", alt: "Open AI" },
    { imageUrl: "/amazon.webp", alt: "Amazon" },
    { imageUrl: "/dalle.webp", alt: "Dall E" },
    { imageUrl: "/nvidia.webp", alt: "Nvidia" },
    { imageUrl: "/wallet.webp", alt: "Wallet Connect" },
    { imageUrl: "/visa.webp", alt: "VISA" },
    { imageUrl: "/curve.webp", alt: "Curve" },
  ];
  return (
    <div className="lg:py-[160px] lg:px-[120px] py-[64px] px-[16px] bg-white">
      <div className="max-w-[1360px] m-auto px-[15px]">
        <h2 className="text-[40px] leading-[140%] tracking-[-0.045em] font-medium mb-8">
          Powered By
        </h2>
        <div className="grid md:grid-cols-4 grid-cols-2 border border-[#e8e8e8] rounded-lg overflow-hidden gap-px bg-[#e8e8e8]">
          {ImageData.map((image, index) => (
            <div
              key={index}
              className="h-[120px] flex items-center justify-center box-border transition duration-300 bg-white"
            >
              <div className="h-12 max-w-full relative w-full">
                <Image
                  src={image.imageUrl}
                  width={400}
                  height={400}
                  alt={image.alt}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PoweredBySection;
