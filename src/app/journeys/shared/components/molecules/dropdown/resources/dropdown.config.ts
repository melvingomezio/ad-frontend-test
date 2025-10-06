import { Theme } from '@/app/journeys/shared/types';

export type DropdownOption = {
  value: string;
  label: string;
};

export type DropdownProps = {
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  backgroundColor?: keyof Theme['colors'];
  borderColor?: keyof Theme['colors'];
  color?: keyof Theme['colors'];
};