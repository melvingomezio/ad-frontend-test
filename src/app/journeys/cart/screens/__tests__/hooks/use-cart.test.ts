import { renderHook, act } from '@testing-library/react';
import { useCart } from '../../hooks/useCart';
import * as cartUseCases from '../../../../../core/cart/application/use-cases/cart.use-case';

jest.mock('../../../../../core/cart/application/use-cases/cart.use-case', () => ({
  getCartDetailUseCase: jest.fn(),
  removeFromCartUseCase: jest.fn()
}));

const mockCartDetail = {
  items: [
    {
      id: '1',
      name: 'Test Game',
      genre: 'Action',
      image: '/test.jpg',
      price: 59.99,
      description: 'Test description',
      isNew: true,
      quantity: 2
    }
  ],
  totalPrice: 119.98,
  totalItems: 2
};

describe('useCart', () => {
  beforeEach(() => {
    (cartUseCases.getCartDetailUseCase as jest.Mock).mockReturnValue(mockCartDetail);
    (cartUseCases.removeFromCartUseCase as jest.Mock).mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('loads cart detail on mount', () => {
    const { result } = renderHook(() => useCart());

    expect(cartUseCases.getCartDetailUseCase).toHaveBeenCalled();
    expect(result.current.cartDetail).toEqual(mockCartDetail);
  });

  it('removes item and reloads cart', () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.removeItem('1');
    });

    expect(cartUseCases.removeFromCartUseCase).toHaveBeenCalledWith('1');
    expect(cartUseCases.getCartDetailUseCase).toHaveBeenCalledTimes(2);
  });

  it('returns empty cart initially', () => {
    (cartUseCases.getCartDetailUseCase as jest.Mock).mockReturnValue({ items: [], totalPrice: 0, totalItems: 0 });
    
    const { result } = renderHook(() => useCart());

    expect(result.current.cartDetail).toEqual({ items: [], totalPrice: 0, totalItems: 0 });
  });
});