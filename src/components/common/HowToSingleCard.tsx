import Image from "next/image";
import React from "react";

interface item {
  imageUrl: string;
  title: string;
  des: string;
}

interface CardType {
  item: item;
}

function HowToSingleCard({ item }: CardType) {
  return (
    <div className="p-6 border border-[#e8e8e8] rounded-lg flex flex-col gap-4">
      <div className="w-full h-40 relative">
        <Image src={item.imageUrl} alt="How To" width={408} height={160} />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg leading-[140%] tracking-[-0.045em] font-medium text-[#07130c]">
          {item.title}
        </p>
        <p className="text-base leading-[140%] tracking-[-0.045em] font-normal text-[#4d544f]">
          {item.des}
        </p>
      </div>
    </div>
  );
}

export default HowToSingleCard;
