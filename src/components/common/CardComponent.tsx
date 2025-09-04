import Image from "next/image";
import React from "react";
import ButtonComponent from "./Button";

interface CardType {
  item: {
    imageUrl: string;
    title: string;
    para: string;
    dateTime?: string;
    button?: boolean;
  };
}

const CardComponent: React.FC<CardType> = ({ item }) => {
  // console.log("itemmmmm", item);
  const { imageUrl, title, para, dateTime, button } = item;
  return (
    <div className="border border-[#e8e8e8] rounded-lg p-[24px] flex flex-col gap-6    ">
      <div className="mb-4 relative w-full flex justify-center items-center">
        <Image src={imageUrl} width={320} height={238} alt={title} />
      </div>
      {/* {dateTime &&  */}
      {dateTime && (
        <div className="flex items-center justify-between text-[#4d544f] uppercase flex-wrap text-sm leading-[140%] tracking-[-0.045em] font-medium">
          Insights
          <div className="flex items-center">{dateTime}</div>
        </div>
      )}
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl leading-[140%] tracking-[-0.045em] font-medium text-black whitespace-pre-line">
          {title}
        </h3>
        <p className="text-base leading-[140%] tracking-[-0.045em] font-normal text-[#4d544f]">
          {para}
        </p>
      </div>
      {button && (
        <div>
          <ButtonComponent
            invert={true}
            buttonName="Read More"
            iconColor="text-white"
            iconColorbg="bg-black"
          />
        </div>
      )}
    </div>
  );
};

export default CardComponent;
