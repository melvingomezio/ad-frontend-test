import { Game } from '../../../catalog/domain';
import { CartItem, CartDetail } from '../../domain/cart.template';
import { CartService } from '../../infrastructure';

export const addToCartUseCase = (game: Game): void => {
  const cartItem: CartItem = { ...game, quantity: 1 };
  CartService.addToCart(cartItem);
};

export const removeFromCartUseCase = (gameId: string): void => {
  CartService.removeFromCart(gameId);
};

export const getCartUseCase = (): CartItem[] => {
  return CartService.getCart();
};

export const isInCartUseCase = (gameId: string): boolean => {
  const cart = CartService.getCart();
  return cart.some(item => item.id === gameId);
};

export const getCartDetailUseCase = (): CartDetail => {
  const cart = CartService.getCart();
  return {
    items: cart,
    totalPrice: cart.reduce((total, item) => total + (item.price * item.quantity), 0),
    totalItems: cart.reduce((total, item) => total + item.quantity, 0)
  };
};