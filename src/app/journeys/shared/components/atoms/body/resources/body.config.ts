import { Theme } from '@/app/journeys/shared/types';
import { ReactNode } from 'react';

export type BodyProps = {
  variant: 'text-b1' | 'text-b2' | 'text-b3';
  children: ReactNode;
  fontWeight?: keyof Theme['fonts']['fontWeight'];
  color?: keyof Theme['colors'];
};

