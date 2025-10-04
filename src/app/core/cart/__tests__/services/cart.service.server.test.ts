/**
 * @jest-environment node
 */
import { CartItem } from '../../domain/cart.template';
import { CartService } from '../../infrastructure';

Object.defineProperty(global, 'window', {
  value: undefined,
  writable: true
});


describe('CartService - Server Environment (window undefined)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getCart', () => {
    it('should return empty array when window is undefined', () => {
      const result = CartService.getCart();
      expect(result).toEqual([]);
    });
  });

  describe('addToCart', () => {
    it('should do nothing when window is undefined', () => {
      const mockItem: CartItem = {
        id: '1',
        name: 'Test Game',
        genre: 'Action',
        image: '/test.jpg',
        description: 'Test description',
        price: 59.99,
        isNew: true,
        quantity: 1,
      };

      expect(() => CartService.addToCart(mockItem)).not.toThrow();
    });
  });

  describe('removeFromCart', () => {
    it('should do nothing when window is undefined', () => {
      expect(() => CartService.removeFromCart('1')).not.toThrow();
    });
  });

  describe('clearCart', () => {
    it('should do nothing when window is undefined', () => {
      expect(() => CartService.clearCart()).not.toThrow();
    });
  });
});