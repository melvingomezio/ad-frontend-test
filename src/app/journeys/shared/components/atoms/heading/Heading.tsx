import React from "react";
import { HeadingProps } from "./resources/heading.config";
import { colorMap, fontWeightMap } from "@/app/journeys/shared/utils/theme-maps";

export const Heading: React.FC<HeadingProps> = ({
  variant,
  children,
  fontWeight,
  color,
}) => {
  const Component = variant;
  const customStyles = {
    ...(fontWeight && { fontWeight: fontWeightMap[fontWeight] }),
    ...(color && { color: colorMap[color] }),
  };

  return <Component style={customStyles}>{children}</Component>;
};
