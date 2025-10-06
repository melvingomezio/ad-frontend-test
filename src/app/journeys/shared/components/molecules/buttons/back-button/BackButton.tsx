import React from "react";
import { Button } from "../../../atoms/button/Button";
import { Icon } from "../../../atoms/icon/Icon";
import { Subtitle } from "../../../atoms/subtitle/Subtitle";
import { BackButtonProps } from "./resources/back-button.config";

export const BackButton: React.FC<BackButtonProps> = ({
  text,  
  iconAlt = "Back",
  onClick,
  color,
}) => {
  return (
    <Button onClick={onClick}>
      <div className="flex items-center gap-2">
        <Icon src='/icons/arrow-left.svg' alt={iconAlt} />
        <Subtitle variant="text-s3" fontWeight='medium' color={color}>
          {text}
        </Subtitle>
      </div>
    </Button>
  );
};
