import React from "react";
import { Card } from "../../../atoms/card/Card";
import { Image } from "../../../atoms/image/Image";
import { Subtitle } from "../../../atoms/subtitle/Subtitle";
import { TextButton } from "../../../molecules/buttons/text-button/TextButton";
import { GameCardProps } from "./resources/game-card.config";
import { Body } from "../../../atoms";

export const GameCard: React.FC<GameCardProps> = ({
  imageSrc,
  imageAlt,
  genre,
  title,
  price,
  buttonText,
  onButtonClick, 
}) => {
  return (
    <Card className="card">
      <div className="p-6 h-full flex flex-col justify-between">
        <div>
          <div className="h-60 overflow-hidden relative">
            <Image
              src={imageSrc}
              alt={imageAlt}                            
              objectFit="cover"
              className="w-full h-full rounded-t-2xl"
            />
          </div>
          <Subtitle className="mt-5" variant="text-s3" color="primary500" fontWeight="bold">
            {genre}
          </Subtitle>

          <div className="flex justify-between items-center mt-3">
            <Subtitle variant="text-s2" fontWeight="bold">
              {title}
            </Subtitle>
            <Body variant="text-b1" fontWeight="bold">
              {price}
            </Body>
          </div>
        </div>

        <div className="mt-5">
          <TextButton
            variant="btn-outlined"
            text={buttonText}
            onClick={onButtonClick}
          />
        </div>
      </div>
    </Card>
  );
};
