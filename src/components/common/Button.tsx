import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRight, MoveUpRight } from "lucide-react";

interface buttonType {
  invert: boolean;
  buttonName: string;
  iconColor?: string;
  iconColorbg?: string;
  borderColor?: string;
}

const ButtonComponent: React.FC<buttonType> = ({
  invert,
  buttonName,
  iconColor,
  iconColorbg,
  borderColor,
}) => {
  return (
    <Button
      className={`bg-black border ${
        borderColor ? borderColor : "border-slate-950"
      }  ${
        invert && "invert"
      } text-white rounded-full flex justify-between items-center font-arial
      px-[7px] py-[25px] pl-4 text-base tracking-[-0.045em] font-normal leading-normal`}
    >
      <p>{buttonName}</p>
      <span
        className={`flex items-center w-8 h-8 text-base justify-center ${
          !iconColorbg ? "bg-white" : iconColorbg
        }  rounded-full`}
      >
        <ArrowUpRight className={`${!iconColor ? "text-black" : iconColor} `} />
      </span>
    </Button>
  );
};
export default ButtonComponent;
