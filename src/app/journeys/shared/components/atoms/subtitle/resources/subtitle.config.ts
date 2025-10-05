import { Theme } from '@/app/journeys/shared/types';
import { ReactNode } from 'react';

export type SubtitleProps = {
  variant: 'text-s1' | 'text-s2' | 'text-s3';
  children: ReactNode;
  fontWeight?: keyof Theme['fonts']['fontWeight'];
  color?: keyof Theme['colors'];
};

