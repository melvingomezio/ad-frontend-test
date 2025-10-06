import React from "react";
import { Card } from "../../../atoms/card/Card";
import { Subtitle } from "../../../atoms/subtitle/Subtitle";
import { Body } from "../../../atoms/body/Body";
import { SummaryCardProps } from "./resources/summary-card.config";

export const SummaryCard: React.FC<SummaryCardProps> = ({
  title,  
  items,
  color,
  fontWeight,
}) => {
  const orderTotal = items.reduce((total, item) => total + item.price, 0);

  return (
    <Card>
      <div className="px-6 py-8">
        <Subtitle variant="text-s1" fontWeight="bold" color={color}>
          {title}
        </Subtitle>

        <Body variant="text-b2" fontWeight={fontWeight} className="mt-3 mb-8">
          {items.length} items
        </Body>

        <div className="summary-items">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-3">
              <Body variant="text-b2">{item.title}</Body>
              <Body variant="text-b2">${item.price.toFixed(2)}</Body>
            </div>
          ))}
        </div>

        <div className="divider mt-6 mb-6"></div>

        <div className="flex justify-between items-center">
          <Body variant="text-b1" fontWeight="bold">
            Order Total
          </Body>
          <Body variant="text-b1" fontWeight="bold">
            ${orderTotal.toFixed(2)}
          </Body>
        </div>
      </div>
    </Card>
  );
};
