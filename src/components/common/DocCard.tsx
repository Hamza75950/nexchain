import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DocCardType {
  item: {
    imageUrl: string;
    title: string;
    des: string;
    buttonName: string;
    link: string;
  };
}

function DocCard({ item }: DocCardType) {
  return (
    <Link className="no-underline inline-block" href={item.link}>
      {/* docCard */}
      <div className="border border-[#e8e8e8] rounded-lg p-8 flex justify-center items-center flex-col">
        <div className="rounded-lg h-20 w-20 shadow-[0_0_24px_0_rgba(0,0,0,0.25),-1px_-1px_2px_#49ff86] mb-[22px] flex items-center justify-center">
          <div className="relative w-[100%] h-[100%] flex justify-center items-center">
            <Image src={item.imageUrl} width={40} height={40} alt="doc image" />
          </div>
        </div>
        <h3 className="text-2xl leading-[140%] tracking-[-0.045em] font-medium mb-4">
          {item.title}
        </h3>
        <label className="text-left text-base leading-[140%] tracking-[-0.045em] font-normal mb-6">
          {item.des}
        </label>
        <button className="border border-gray-300 py-[13px] px-[24px] rounded-full cursor-pointer tracking-[-0.045em] font-medium relative text-left transition duration-300 flex flex-row items-center gap-2 leading-normal whitespace-nowrap">
          {item.buttonName}
        </button>
      </div>
    </Link>
  );
}

export default DocCard;
