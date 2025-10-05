import React from "react";
import { SubtitleProps } from "./resources/subtitle.config";
import { colorMap, fontWeightMap } from "@/app/journeys/shared/utils/theme-maps";

export const Subtitle: React.FC<SubtitleProps> = ({
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