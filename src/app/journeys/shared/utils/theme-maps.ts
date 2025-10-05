import { Theme } from '@/app/journeys/shared/types';

export const colorMap: Record<keyof Theme['colors'], string> = {
  'primary000': 'var(--color-primary-000)',
  'primary100': 'var(--color-primary-100)',
  'primary200': 'var(--color-primary-200)',
  'primary300': 'var(--color-primary-300)',
  'primary400': 'var(--color-primary-400)',
  'primary500': 'var(--color-primary-500)',
  'primary600': 'var(--color-primary-600)',
  'primary700': 'var(--color-primary-700)',
  'primary800': 'var(--color-primary-800)',
  'primary1000': 'var(--color-primary-1000)',
};

export const fontWeightMap: Record<keyof Theme['fonts']['fontWeight'], string> = {
  'regular': '400',
  'medium': '500',
  'semibold': '600',
  'bold': '700',
};