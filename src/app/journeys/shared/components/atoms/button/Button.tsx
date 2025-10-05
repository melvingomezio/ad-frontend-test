import React from "react";
import { ButtonProps } from "./resources/button.config";
import { colorMap } from "@/app/journeys/shared/utils/theme-maps";

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  onClick,
  disabled,
  backgroundColor,
  borderColor,
  color,
}) => {  
  const customStyles = {
    ...(backgroundColor && { backgroundColor: colorMap[backgroundColor] }),
    ...(borderColor && { borderColor: colorMap[borderColor] }),
    ...(color && { color: colorMap[color] }),
  };

  return (
    <button 
      className={variant} 
      style={customStyles} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};