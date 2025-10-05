import { Theme } from '@/app/journeys/shared/types';
import { ReactNode } from 'react';

export type HeadingProps = {
  variant: 'h1' | 'h2';
  children: ReactNode;
  fontWeight?: keyof Theme['fonts']['fontWeight'];
  color?: keyof Theme['colors'];
};