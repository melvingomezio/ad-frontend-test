import { Theme } from '@/app/journeys/shared/types';
import { ReactNode } from 'react';

export type ButtonProps = {
  variant: 'btn-filled' | 'btn-outlined';
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  backgroundColor?: keyof Theme['colors'];
  borderColor?: keyof Theme['colors'];
  color?: keyof Theme['colors'];
};