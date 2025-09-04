"use client";
import React, { useState } from "react";
import { Check, Plus, Minus } from "lucide-react";

interface RoadmapItem {
  text: string;
}

interface RoadmapCardData {
  quarter: string;
  year: string;
  title: string;
  items: RoadmapItem[];
  outcome?: string;
  // Styling props
  cardBg?: string;
  cardBorder?: string;
  // Status badge props (optional for second type)
  status?: string;
  statusBg?: string;
  statusBorder?: string;
  statusText?: string;
  // Variant prop to determine styling
  variant?: "default" | "secondary" | "tertiary";
}

interface RoadmapCardProps {
  data: RoadmapCardData;
}

const RoadMapAccordion: React.FC<RoadmapCardProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Default styling based on variant
  const getDefaultStyles = () => {
    if (data.variant === "secondary") {
      return {
        defaultBg: "bg-white",
        defaultBorder: "border-white",
        openBg: "bg-white",
        openBorder: "border-white",
        iconBorder: "border border-gray-300",
        textcolor: "text-[#222d26]",
      };
    } else if (data.variant === "tertiary") {
      return {
        defaultBg: "bg-[#222d25]",
        defaultBorder: "border-[#222d25]",
        openBg: "bg-[#222d25]",
        openBorder: "border-[#222d25]",
        iconBorder: "border border-[#222d25]",
        textcolor: "text-white",
      };
    }
    return {
      defaultBg: "bg-[#f0f0f0]",
      defaultBorder: "border-gray-200",
      openBg: "bg-[#f0f0f0]",
      openBorder: "border-[#f0f0f0]",
      iconBorder: "",
      textcolor: "text-[#222d26]",
    };
  };

  const styles = getDefaultStyles();

  return (
    <div
      className={`rounded-lg border transition-colors duration-300 ${
        isOpen
          ? `${styles.openBg} ${styles.openBorder} ${styles.textcolor}`
          : `${data.cardBg || styles.defaultBg} ${
              data.cardBorder || styles.defaultBorder
            } ${styles.textcolor}`
      }`}
    >
      {/* Header Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left text-2xl leading-[1.4] tracking-[-0.045em] font-normal"
      >
        <div className="flex flex-wrap items-center gap-2 text-[#989898]">
          <b className={`font-normal ${styles.textcolor}`}>{data.quarter}</b>
          {data.year}
          {data.status &&
            data.statusBg &&
            data.statusBorder &&
            data.statusText && (
              <span
                className={`uppercase ${data.statusText} ${data.statusBg} ${data.statusBorder} rounded-lg w-fit px-3 py-2 ml-2 text-sm leading-5 tracking-normal font-medium`}
              >
                {data.status}
              </span>
            )}
        </div>
        <div
          className={`lg:w-12 lg:h-12 w-8 h-8 rounded-full flex justify-center items-center bg-white ${styles.iconBorder}`}
        >
          {isOpen ? (
            <Minus className="text-black" />
          ) : (
            <Plus className="text-black" />
          )}
        </div>
      </button>

      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6">
          <p className="mb-6 text-xl font-normal leading-[140%]">
            {data.title}
          </p>
          <div>
            {data.items?.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2 py-3 border-b border-[#e8e8e8]"
              >
                <div className="p-1 flex justify-center items-center rounded-full w-5 h-5 bg-black">
                  <Check className="text-white w-4 h-4" />
                </div>
                <p className="text-base leading-[140%] tracking-[-0.045em]">
                  {item.text}
                </p>
              </div>
            ))}

            {data.outcome && (
              <p className="pt-4 text-base leading-[140%] tracking-[-0.045em] font-medium">
                <span className="font-semibold">Outcome:</span> {data.outcome}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMapAccordion;
