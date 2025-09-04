import Image from "next/image";
import React from "react";

interface FlatButtonType {
  name: string;
  className?: string;
  lableIcon?: string;
}
const FlatButton: React.FC<FlatButtonType> = ({
  name,
  className = "primaryButton",
  lableIcon,
}) => {
  return (
    <div
      className={`py-2 px-3 flex justify-center gap-1 items-center max-w-fit max-h-10  text-sm uppercase font-medium ${className}`}
    >
      {lableIcon && (
        <Image
          src={lableIcon}
          height={16}
          width={16}
          className="object-cover"
          alt="icon"
        />
      )}
      {name}
    </div>
  );
};
export default FlatButton;
