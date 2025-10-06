import { Theme } from '@/app/journeys/shared/types';

export type BackButtonProps = {
  text: string; 
  iconAlt?: string;
  onClick?: () => void;  
  color?: keyof Theme['colors'];
};