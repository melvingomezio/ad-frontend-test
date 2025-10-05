import React from "react";
import NextImage from "next/image";
import { ImageProps } from "./resources/image.config";

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  objectFit = 'cover',
}) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={typeof width === 'number' ? width : 100}
      height={typeof height === 'number' ? height : 100}
      style={{ objectFit }}
    />
  );
};