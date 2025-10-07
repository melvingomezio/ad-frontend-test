import React from "react";
import { CardProps } from "./resources/card.config";
import { colorMap } from "@/app/journeys/shared/utils/theme-maps";

export const Card: React.FC<CardProps> = ({
  children,
  backgroundColor,
  borderColor,
  onClick,
  className = '',
}) => {
  const customStyles = {
    ...(backgroundColor && { backgroundColor: colorMap[backgroundColor] }),
    ...(borderColor && { borderColor: colorMap[borderColor] }),
  };

  return (
    <div className={className} style={customStyles} onClick={onClick}>
      {children}
    </div>
  );
};