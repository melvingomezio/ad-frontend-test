import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { CartScreen } from '../cart.screen';
import { useCart } from '../hooks/useCart';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../hooks/useCart');

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

describe('CartScreen', () => {
  const mockPush = jest.fn();
  const mockBack = jest.fn();
  const mockRemoveItem = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ 
      push: mockPush,
      back: mockBack 
    });
    (useCart as jest.Mock).mockReturnValue({
      cartDetail: mockCartDetail,
      removeItem: mockRemoveItem
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders cart with items', () => {
    render(<CartScreen />);
    
    expect(screen.getByText('Your Cart')).toBeInTheDocument();
    expect(screen.getByText('2 items')).toBeInTheDocument();
    expect(screen.getAllByText('Test Game')).toHaveLength(2);
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('calls removeItem when close button is clicked', () => {
    render(<CartScreen />);
    
    const closeButton = screen.getByAltText('Close');
    fireEvent.click(closeButton);
    
    expect(mockRemoveItem).toHaveBeenCalledWith('1');
  });

  it('navigates back when back button is clicked', () => {
    render(<CartScreen />);
    
    const backButton = screen.getByText('Back to Catalog');
    fireEvent.click(backButton);
    
    expect(mockBack).toHaveBeenCalled();
  });

  it('shows checkout button', () => {
    render(<CartScreen />);
    
    expect(screen.getByText('Checkout')).toBeInTheDocument();
  });

  it('renders empty cart state', () => {
    (useCart as jest.Mock).mockReturnValue({
      cartDetail: { items: [], totalPrice: 0, totalItems: 0 },
      removeItem: mockRemoveItem
    });

    render(<CartScreen />);
    
    expect(screen.getByText('Your Cart')).toBeInTheDocument();
    expect(screen.getAllByText('0 items')).toHaveLength(2);
  });

  it('displays order summary correctly', () => {
    render(<CartScreen />);
    
    expect(screen.getByText('Order Summary')).toBeInTheDocument();
    expect(screen.getByText('Order Total')).toBeInTheDocument();
  });

  it('handles checkout button click', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    render(<CartScreen />);
    
    const checkoutButton = screen.getByText('Checkout');
    fireEvent.click(checkoutButton);
    
    expect(consoleSpy).toHaveBeenCalledWith('Checkout clicked');
    consoleSpy.mockRestore();
  });

  it('navigates to cart when cart icon is clicked', () => {
    render(<CartScreen />);
    
    const cartIcon = screen.getByAltText('Icon');
    fireEvent.click(cartIcon);
    
    expect(mockPush).toHaveBeenCalledWith('/cart');
  });

  it('navigates to home when logo is clicked', () => {
    render(<CartScreen />);
    
    const logo = screen.getByText('GamerShop');
    fireEvent.click(logo);
    
    expect(mockPush).toHaveBeenCalledWith('/');
  });

  it('displays item details correctly', () => {
    render(<CartScreen />);
    
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByAltText('Test Game')).toBeInTheDocument();
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('shows multiple items in cart', () => {
    const multipleItemsCart = {
      items: [
        { ...mockCartDetail.items[0] },
        { id: '2', name: 'Game 2', genre: 'RPG', image: '/test2.jpg', price: 39.99, description: 'Test 2', isNew: false, quantity: 1 }
      ],
      totalPrice: 159.97,
      totalItems: 3
    };

    (useCart as jest.Mock).mockReturnValue({
      cartDetail: multipleItemsCart,
      removeItem: mockRemoveItem
    });

    render(<CartScreen />);
    
    expect(screen.getByText('3 items')).toBeInTheDocument();
    expect(screen.getAllByText('Game 2')).toHaveLength(2);
    expect(screen.getByText('RPG')).toBeInTheDocument();
  });
});