import React from "react";
import NextImage from "next/image";
import { IconProps } from "./resources/icon.config";

export const Icon: React.FC<IconProps> = ({
  src,
  alt,
}) => {
  return <NextImage className="w-6 h-6" src={src} alt={alt} width={24} height={24} />;
};