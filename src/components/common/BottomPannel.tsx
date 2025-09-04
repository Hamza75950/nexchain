"use client";

import React from "react";
import ButtonComponent from "./Button";

interface BottomPannelType {
  heading: string;
  des: string;
  buttonText: string;
}

const BottomPannel: React.FC<BottomPannelType> = ({
  heading,
  des,
  buttonText,
}) => {
  return (
    <div className=" bg-[url('/bottomPannel.svg')] bg-no-repeat bg-cover bg-[50%_0] lg:py-20 py-[80px] px-[24px] ">
      <div className="bg-transparent w-full max-w-[780px] mx-auto text-base leading-[140%] tracking-[-0.045em] font-normal flex flex-col gap-4 text-center">
        <h3 className="lg:text-[40px] text-[32px] leading-[140%] tracking-[-0.045em] font-medium">
          {heading}
        </h3>
        {des}
        <div className="flex justify-center items-center">
          <ButtonComponent buttonName={buttonText} invert={false} />
        </div>
      </div>
    </div>
  );
};

export default BottomPannel;
