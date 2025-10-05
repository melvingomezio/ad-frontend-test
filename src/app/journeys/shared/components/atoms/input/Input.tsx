import React from "react";
import { InputProps } from "./resources/input.config";
import { colorMap } from "@/app/journeys/shared/utils/theme-maps";

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
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
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      style={customStyles}
    />
  );
};