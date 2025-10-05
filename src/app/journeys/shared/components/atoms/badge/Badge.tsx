import React from "react";
import { BadgeProps } from "./resources/badge.config";
import { colorMap } from "@/app/journeys/shared/utils/theme-maps";

export const Badge: React.FC<BadgeProps> = ({
  children,
  backgroundColor,
  borderColor,
}) => {
  const customStyles = {
    ...(backgroundColor && { backgroundColor: colorMap[backgroundColor] }),
    ...(borderColor && { borderColor: colorMap[borderColor] }),
  };

  return <div className="badge" style={customStyles}>{children}</div>;
};