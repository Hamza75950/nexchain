import React from "react";
import { Check } from "lucide-react";

interface RoadmapItem {
  text: string;
}

interface RoadmapCardData {
  quarter?: string;
  year?: string;
  title?: string;
  items?: RoadmapItem[];
  outcome?: string;
  cardBg?: string;
  cardBorder?: string;
}

interface RoadmapCardProps {
  data: RoadmapCardData;
}

const RoadmapCard2: React.FC<RoadmapCardProps> = ({ data }) => {
  return (
    <div
      className={`${data.cardBg || "bg-white"} ${
        data.cardBorder || "border border-white"
      } rounded-lg p-8 box-border h-auto hidden lg:block`}
    >
      {/* Header */}
      <div className="flex justify-between">
        <div className="text-[32px] leading-[140%] tracking-[-0.045em] font-normal text-[#989898] flex flex-row items-center gap-2">
          <b className="font-inherit text-[#222d26] font-normal">
            {data.quarter}
          </b>
          {data.year}
        </div>
      </div>

      {/* Title */}
      <div className="block">
        <div className="text-2xl leading-[140%] tracking-[-0.045em] font-normal">
          <p className="mb-6">{data.title}</p>
        </div>

        {/* List Items */}
        <div className="block">
          {data.items?.map((item, index) => (
            <div
              key={index}
              className="flex justify-start gap-2 relative py-[13px] border-b border-[#e8e8e8]"
            >
              <div className="p-1 flex justify-center items-center rounded-full w-5 h-5 bg-black">
                <Check className="text-white" />
              </div>
              {item.text}
            </div>
          ))}

          {/* Optional Outcome */}
          {data.outcome && (
            <p className="border-b-0 p-0 pt-4 text-base leading-[140%] tracking-[-0.045em] font-medium">
              Outcome: {data.outcome}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoadmapCard2;
