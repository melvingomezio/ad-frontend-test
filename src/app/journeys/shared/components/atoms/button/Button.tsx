import React from "react";
import { ButtonProps } from "./resources/button.config";
import { colorMap } from "@/app/journeys/shared/utils/theme-maps";

export const Button: React.FC<ButtonProps> = ({
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
    borderRadius: 'var(--radius-lg)',
  };

  return (
    <button 
      className="button w-full" 
      style={customStyles} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};