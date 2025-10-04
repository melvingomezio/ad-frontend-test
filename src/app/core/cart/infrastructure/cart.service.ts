import { CartRepository } from './cart.interface';
import { CartItem } from '../domain/cart.template';

export const CartService: CartRepository = {
  getCart(): CartItem[] {
    if (typeof window === 'undefined') return [];
    const cart = localStorage.getItem('game-cart');
    return cart ? JSON.parse(cart) : [];
  },

  addToCart(item: CartItem): void {
    if (typeof window === 'undefined') return;
    const cart = this.getCart();
    const existingIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    
    if (existingIndex >= 0) {
      cart[existingIndex].quantity += item.quantity;
    } else {
      cart.push(item);
    }
    
    localStorage.setItem('game-cart', JSON.stringify(cart));
  },

  removeFromCart(gameId: string): void {
    if (typeof window === 'undefined') return;
    const cart = this.getCart().filter(item => item.id !== gameId);
    localStorage.setItem('game-cart', JSON.stringify(cart));
  },

  clearCart(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('game-cart');
  }
};