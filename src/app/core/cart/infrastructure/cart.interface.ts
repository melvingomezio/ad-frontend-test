import { CartItem } from '../domain/cart.template';

export interface CartRepository {
  getCart(): CartItem[];
  addToCart(item: CartItem): void;
  removeFromCart(gameId: string): void;
  clearCart(): void;
}