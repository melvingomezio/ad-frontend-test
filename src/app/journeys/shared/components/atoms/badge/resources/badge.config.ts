import { Theme } from '@/app/journeys/shared/types';
import { ReactNode } from 'react';

export type BadgeProps = {
  children: ReactNode;
  backgroundColor?: keyof Theme['colors'];
  borderColor?: keyof Theme['colors'];
};