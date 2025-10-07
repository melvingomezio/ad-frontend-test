export type GameCardProps = {
  imageSrc: string;
  imageAlt: string;
  genre: string;
  title: string;
  price: string;
  buttonText: string;
  onButtonClick?: () => void;
  isNew?: boolean;
};