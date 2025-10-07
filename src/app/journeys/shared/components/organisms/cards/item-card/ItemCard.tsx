import React from 'react';
import { Card } from '../../../atoms/card/Card';
import { Image } from '../../../atoms/image/Image';
import { Subtitle } from '../../../atoms/subtitle/Subtitle';
import { Body } from '../../../atoms/body/Body';
import { Icon } from '../../../atoms/icon/Icon';
import { Badge } from '../../../atoms/badge/Badge';
import { ItemCardProps } from './resources/item-card.config';

export const ItemCard: React.FC<ItemCardProps> = ({
  imageSrc,
  imageAlt,
  genre,
  title,
  description,
  price,
  closeIconSrc,
  closeIconAlt = 'Close',
  onCloseClick,
  isNew,
}) => {
  return (
    <Card>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-5">
        <div className="flex-shrink-0 w-full sm:w-auto relative">
          <Image src={imageSrc} alt={imageAlt} width={256} height={156} className="w-full sm:w-64" />
          {isNew && (
              <div className="absolute top-3 left-3">
                <Badge backgroundColor="primary100">
                  <Subtitle
                    variant="text-s3"
                    fontWeight="regular"
                    color="primary800"
                  >
                    New
                  </Subtitle>
                </Badge>
              </div>
            )}
        </div>
        
        <div className="flex-1 relative py-2 flex flex-col">
          <div className="absolute top-0 right-0 cursor-pointer" onClick={onCloseClick}>
            <Icon src={closeIconSrc} alt={closeIconAlt} />
          </div>
          
          <Subtitle className='mb-3' variant="text-s3" color="primary500" fontWeight="bold">
            {genre}
          </Subtitle>
          
          <Body className='mb-2' variant="text-b1" fontWeight="bold">
            {title}
          </Body>
          
          <Body variant="text-b3" color='primary500'>
            {description}
          </Body>
          
          <div className="mt-auto flex justify-end">
            <Body variant="text-b1" fontWeight="bold">
              {price}
            </Body>
          </div>
        </div>
      </div>
    </Card>
  );
};