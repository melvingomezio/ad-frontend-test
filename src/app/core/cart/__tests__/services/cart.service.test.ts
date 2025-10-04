import { CartService } from '../../infrastructure/cart.service';
import { CartItem } from '../../domain/cart.template';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('CartService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getCart', () => {
    it('should return empty array when no cart exists', () => {
      localStorageMock.getItem.mockReturnValue(null);

      const result = CartService.getCart();

      expect(result).toEqual([]);
      expect(localStorageMock.getItem).toHaveBeenCalledWith('game-cart');
    });

    it('should return parsed cart from localStorage', () => {
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

      localStorageMock.getItem.mockReturnValue(JSON.stringify(mockCart));

      const result = CartService.getCart();

      expect(result).toEqual(mockCart);
    });
  });

  describe('addToCart', () => {
    it('should add new item to cart', () => {
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

      localStorageMock.getItem.mockReturnValue('[]');

      CartService.addToCart(mockItem);

      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'game-cart',
        JSON.stringify([mockItem])
      );
    });

    it('should increase quantity for existing item', () => {
      const existingItem: CartItem = {
        id: '1',
        name: 'Test Game',
        genre: 'Action',
        image: '/test.jpg',
        description: 'Test description',
        price: 59.99,
        isNew: true,
        quantity: 1,
      };

      const newItem: CartItem = { ...existingItem, quantity: 1 };

      localStorageMock.getItem.mockReturnValue(JSON.stringify([existingItem]));

      CartService.addToCart(newItem);

      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'game-cart',
        JSON.stringify([{ ...existingItem, quantity: 2 }])
      );
    });
  });

  describe('removeFromCart', () => {
    it('should remove item from cart', () => {
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

      localStorageMock.getItem.mockReturnValue(JSON.stringify(mockCart));

      CartService.removeFromCart('1');

      expect(localStorageMock.setItem).toHaveBeenCalledWith('game-cart', '[]');
    });
  });

  describe('clearCart', () => {
    it('should remove cart from localStorage', () => {
      CartService.clearCart();

      expect(localStorageMock.removeItem).toHaveBeenCalledWith('game-cart');
    });
  });
});


