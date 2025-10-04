import {
  addToCartUseCase,
  removeFromCartUseCase,
  getCartUseCase,
  isInCartUseCase,
  getCartDetailUseCase,
} from '../../application';
import { CartService } from '../../infrastructure';
import { Game } from '../../../catalog';
import { CartItem } from '../../domain';

jest.mock('../../infrastructure', () => ({
  CartService: {
    getCart: jest.fn(),
    addToCart: jest.fn(),
    removeFromCart: jest.fn(),
    clearCart: jest.fn(),
  },
}));

describe('Cart Use Cases', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('addToCartUseCase', () => {
    it('should add game to cart with quantity 1', () => {
      const game: Game = {
        id: '1',
        name: 'Test Game',
        genre: 'Action',
        image: '/test.jpg',
        description: 'Test description',
        price: 59.99,
        isNew: true,
      };

      addToCartUseCase(game);

      expect(CartService.addToCart).toHaveBeenCalledWith({
        ...game,
        quantity: 1,
      });
    });
  });

  describe('removeFromCartUseCase', () => {
    it('should remove item from cart', () => {
      removeFromCartUseCase('1');

      expect(CartService.removeFromCart).toHaveBeenCalledWith('1');
    });
  });

  describe('getCartUseCase', () => {
    it('should return cart items', () => {
      const mockCart: CartItem[] = [
        {
          id: '1',
          name: 'Test Game',
          genre: 'Action',
          image: '/test.jpg',
          description: 'Test description',
          price: 59.99,
          isNew: true,
          quantity: 1,
        },
      ];

      (CartService.getCart as jest.Mock).mockReturnValue(mockCart);

      const result = getCartUseCase();

      expect(result).toEqual(mockCart);
      expect(CartService.getCart).toHaveBeenCalledTimes(1);
    });
  });

  describe('isInCartUseCase', () => {
    it('should return true if item is in cart', () => {
      const mockCart: CartItem[] = [
        {
          id: '1',
          name: 'Test Game',
          genre: 'Action',
          image: '/test.jpg',
          description: 'Test description',
          price: 59.99,
          isNew: true,
          quantity: 1,
        },
      ];

      (CartService.getCart as jest.Mock).mockReturnValue(mockCart);

      const result = isInCartUseCase('1');

      expect(result).toBe(true);
    });

    it('should return false if item is not in cart', () => {
      (CartService.getCart as jest.Mock).mockReturnValue([]);

      const result = isInCartUseCase('1');

      expect(result).toBe(false);
    });
  });

  describe('getCartDetailUseCase', () => {
    it('should return cart details with totals', () => {
      const mockCart: CartItem[] = [
        {
          id: '1',
          name: 'Test Game 1',
          genre: 'Action',
          image: '/test1.jpg',
          description: 'Test description 1',
          price: 59.99,
          isNew: true,
          quantity: 2,
        },
        {
          id: '2',
          name: 'Test Game 2',
          genre: 'RPG',
          image: '/test2.jpg',
          description: 'Test description 2',
          price: 39.99,
          isNew: false,
          quantity: 1,
        },
      ];

      (CartService.getCart as jest.Mock).mockReturnValue(mockCart);

      const result = getCartDetailUseCase();

      expect(result).toEqual({
        items: mockCart,
        totalPrice: 159.97,
        totalItems: 3,
      });
    });

    it('should return empty cart details', () => {
      (CartService.getCart as jest.Mock).mockReturnValue([]);

      const result = getCartDetailUseCase();

      expect(result).toEqual({
        items: [],
        totalPrice: 0,
        totalItems: 0,
      });
    });
  });
});