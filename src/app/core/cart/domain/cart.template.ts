import { Game } from '../../catalog/domain';

export type CartItem = Game & {
  quantity: number;
};

export type CartDetail = {
  items: CartItem[];
  totalPrice: number;
  totalItems: number;
};