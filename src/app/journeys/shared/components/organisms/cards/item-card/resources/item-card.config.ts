export type ItemCardProps = {
  imageSrc: string;
  imageAlt: string;
  genre: string;
  title: string;
  description: string;
  price: string;
  closeIconSrc: string;
  closeIconAlt?: string;
  onCloseClick?: () => void;
};