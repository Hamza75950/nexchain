import React from "react";

interface GreenCardType {
  heading: string;
}

const GreenCard: React.FC<GreenCardType> = ({ heading }) => {
  return (
    <div className=" border border-[#e8e8e8] bg-primaryColor rounded-lg p-[24px] flex whitespace-break-spaces gap-8 leading-[140%] tracking-[-0.045em] md:text-[40px] text-[24px] font-medium text-[#183c24] items-end md:h-full h-[300px]">
      {heading}
    </div>
  );
};

export default GreenCard;
