import { Theme } from '@/app/journeys/shared/types';

export type TextButtonProps = {
  variant: 'btn-filled' | 'btn-outlined';
  text: string;
  onClick?: () => void;
  disabled?: boolean;  
  backgroundColor?: keyof Theme['colors'];
  borderColor?: keyof Theme['colors'];
  color?: keyof Theme['colors'];
};