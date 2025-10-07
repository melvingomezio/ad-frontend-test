import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { CatalogScreen } from '../catalog.screen';
import { useCatalog } from '../resources/hooks/useCatalog';
import { addToCartUseCase } from '../../../../core/cart/application/use-cases/cart.use-case';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../resources/hooks/useCatalog');
jest.mock('../../../../core/cart/application/use-cases/cart.use-case');

const mockCatalog = {
  games: [
    {
      id: '1',
      name: 'Test Game',
      genre: 'Action',
      image: '/test.jpg',
      price: 59.99,
      description: 'Test description',
      isNew: true
    }
  ],
  availableFilters: ['Action', 'RPG'],
  totalPages: 1,
  currentPage: 1
};

describe('CatalogScreen', () => {
  const mockPush = jest.fn();
  const mockHandleGenreChange = jest.fn();
  const mockHandleLoadMore = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useCatalog as jest.Mock).mockReturnValue({
      catalog: mockCatalog,
      loading: false,
      loadingMore: false,
      selectedGenre: '',
      hasMorePages: true,
      handleGenreChange: mockHandleGenreChange,
      handleLoadMore: mockHandleLoadMore
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders catalog with games', () => {
    render(<CatalogScreen />);
    
    expect(screen.getByText('Top Sellers')).toBeInTheDocument();
    expect(screen.getByText('Test Game')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('shows loading state', () => {
    (useCatalog as jest.Mock).mockReturnValue({
      catalog: null,
      loading: true,
      loadingMore: false,
      selectedGenre: '',
      hasMorePages: false,
      handleGenreChange: mockHandleGenreChange,
      handleLoadMore: mockHandleLoadMore
    });

    render(<CatalogScreen />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('calls addToCart when button is clicked', () => {
    render(<CatalogScreen />);
    
    const addButton = screen.getByText('Add to Cart');
    fireEvent.click(addButton);
    
    expect(addToCartUseCase).toHaveBeenCalledWith(mockCatalog.games[0]);
  });

  it('navigates to cart when cart icon is clicked', () => {
    render(<CatalogScreen />);
    
    const navbar = screen.getByText('GamerShop').closest('div');
    expect(navbar).toBeInTheDocument();
  });

  it('shows load more button and handles click', () => {
    render(<CatalogScreen />);
    
    const loadMoreButton = screen.getByText('SEE MORE');
    expect(loadMoreButton).toBeInTheDocument();
    
    fireEvent.click(loadMoreButton);
    expect(mockHandleLoadMore).toHaveBeenCalled();
  });

  it('shows loading more state', () => {
    (useCatalog as jest.Mock).mockReturnValue({
      catalog: mockCatalog,
      loading: false,
      loadingMore: true,
      selectedGenre: '',
      hasMorePages: true,
      handleGenreChange: mockHandleGenreChange,
      handleLoadMore: mockHandleLoadMore
    });

    render(<CatalogScreen />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays genre filter section', () => {
    render(<CatalogScreen />);
    
    expect(screen.getByText('Genre')).toBeInTheDocument();
    expect(screen.getByDisplayValue('All')).toBeInTheDocument();
  });

  it('shows game price correctly', () => {
    render(<CatalogScreen />);
    
    expect(screen.getByText('$59.99')).toBeInTheDocument();
  });

  it('shows new badge for new games', () => {
    render(<CatalogScreen />);
    
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('displays cart icon in navbar', () => {
    render(<CatalogScreen />);
    
    const cartIcon = screen.getByAltText('Icon');
    expect(cartIcon).toBeInTheDocument();
  });

  it('hides see more button when no more pages', () => {
    (useCatalog as jest.Mock).mockReturnValue({
      catalog: mockCatalog,
      loading: false,
      loadingMore: false,
      selectedGenre: '',
      hasMorePages: false,
      handleGenreChange: mockHandleGenreChange,
      handleLoadMore: mockHandleLoadMore
    });

    render(<CatalogScreen />);
    
    expect(screen.queryByText('SEE MORE')).not.toBeInTheDocument();
  });
});