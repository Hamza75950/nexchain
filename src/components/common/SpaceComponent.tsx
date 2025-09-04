import React from "react";

interface SpaceComponentType {
  gap: string;
}
const SpaceComponent: React.FC<SpaceComponentType> = ({ gap }) => {
  return <div className={`my-${gap}`}></div>;
};

export default SpaceComponent;
