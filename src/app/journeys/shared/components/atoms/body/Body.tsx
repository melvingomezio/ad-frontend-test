import React from "react";
import { BodyProps } from "./resources/body.config";
import { colorMap, fontWeightMap } from "@/app/journeys/shared/utils/theme-maps";

export const Body: React.FC<BodyProps> = ({
  variant,
  children,
  fontWeight,
  color,
}) => {
  const customStyles = {
    ...(fontWeight && { fontWeight: fontWeightMap[fontWeight] }),
    ...(color && { color: colorMap[color] }),
  };

  return <p className={variant} style={customStyles}>{children}</p>;
};