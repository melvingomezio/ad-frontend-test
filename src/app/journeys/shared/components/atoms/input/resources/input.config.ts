import { Theme } from '@/app/journeys/shared/types';

export type InputProps = {
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  backgroundColor?: keyof Theme['colors'];
  borderColor?: keyof Theme['colors'];
  color?: keyof Theme['colors'];
};