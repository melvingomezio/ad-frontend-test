import { Theme } from '@/app/journeys/shared/types';

export type SummaryItem = {
  title: string;
  price: number;
};

export type SummaryCardProps = {
  title: string;
  items: SummaryItem[];
  color?: keyof Theme['colors'];
  fontWeight?: keyof Theme['fonts']['fontWeight'];
};