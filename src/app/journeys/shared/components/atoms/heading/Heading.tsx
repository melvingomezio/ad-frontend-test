import React from "react";
import { HeadingProps } from "./resources/heading.config";
import { colorMap, fontWeightMap } from "@/app/journeys/shared/utils/theme-maps";

export const Heading: React.FC<HeadingProps> = ({
  variant,
  children,
  fontWeight,
  color,
  className = '',
}) => {
  const Component = variant;
  const customStyles = {
    ...(fontWeight && { fontWeight: fontWeightMap[fontWeight] }),
    ...(color && { color: colorMap[color] }),
  };

  return <Component className={className} style={customStyles}>{children}</Component>;
};
