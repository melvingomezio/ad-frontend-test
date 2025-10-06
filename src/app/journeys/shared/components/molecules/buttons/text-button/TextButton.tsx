import React from "react";
import { Button } from "../../../atoms/button/Button";
import { TextButtonProps } from "./resources/text-button.config";
import { Subtitle } from "../../../atoms";

export const TextButton: React.FC<TextButtonProps> = ({
  variant,
  text,
  onClick,
  disabled,
  backgroundColor,
  borderColor,
  color,
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      color={color}
    >
      <div className={variant}>
        <Subtitle variant="text-s3" fontWeight="bold">
          {text}
        </Subtitle>
      </div>
    </Button>
  );
};
