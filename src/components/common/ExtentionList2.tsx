import Image from "next/image";
import React from "react";

type CardType = {
  heading: string;
  des: string;
};

type ItemType = {
  imageUrl: string;
  heading: string;
  des: string;
  cards?: CardType[];
  flex?: string; // cards is optional
};

type ExtentionListType = {
  items: ItemType[]; // array of items
};

const ExtentionList2 = ({ items }: ExtentionListType) => {
  return (
    <div className="w-full max-w-[1230px] px-[15px] lg:py-[120px] py-[40px] mx-auto bg-white">
      {items.map((item, index) => (
        <div
          key={index}
          className="pb-10 mb-10 border-b border-[#e8e8e8] text-base leading-[140%] tracking-[-0.045em] font-normal grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-4"
        >
          <div className="flex flex-col gap-4">
            <Image
              src={item.imageUrl}
              width={42}
              height={42}
              alt="real world"
            />
            <h2 className="lg:text-[32px] text-[24px] leading-[140%] tracking-[-0.045em] font-medium flex flex-row gap-6 mb-2">
              {item.heading}
            </h2>
            {item.des}
          </div>
          {/* cards */}
          {item.cards && (
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              {item.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="border border-[#e8e8e8] rounded-lg lg:p-8 p-4 flex flex-col gap-4 text-base leading-[140%] tracking-[-0.045em] font-normal bg-white"
                >
                  <h4 className="lg:text-2xl text-lg leading-[140%] tracking-[-0.045em] font-normal">
                    {card.heading}
                  </h4>
                  {card.des}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>

    // <div className="w-full max-w-[970px] px-[15px] py-[120px] mx-auto bg-white">
    //   {items.map((item, index) => (
    //     <div
    //       key={index}
    //       className="pb-10 mb-10 border-b border-[#e8e8e8] text-base leading-[140%] tracking-[-0.045em] font-normal"
    //     >
    //       <h2 className="lg:text-[32px] text-[24px] leading-[140%] tracking-[-0.045em] font-medium flex lg:flex-row flex-col gap-6 mb-2">
    //         <Image
    //           src={item.imageUrl}
    //           width={42}
    //           height={42}
    //           alt="extension-list-icon"
    //         />
    //         {item.heading}
    //       </h2>
    //       <p>{item.des}</p>

    //   {item.cards && (
    //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 box-border mt-8 text-base leading-[140%] tracking-[-0.045em] font-normal">
    //       {item.cards.map((card, idx) => (
    //         <div
    //           key={idx}
    //           className="border border-[#e8e8e8] rounded-lg p-6 flex flex-col gap-2"
    //         >
    //           <h4 className="text-2xl leading-[140%] tracking-[-0.045em] font-normal whitespace-pre-line">
    //             {card.heading}
    //           </h4>
    //           <p>{card.des}</p>
    //         </div>
    //       ))}
    //     </div>
    //   )}
    //     </div>
    //   ))}
    // </div>
  );
};

export default ExtentionList2;
