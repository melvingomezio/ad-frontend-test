import { renderHook, waitFor } from '@testing-library/react';
import { useCatalog } from '../../resources/hooks/useCatalog';
import { GetCatalogUseCase } from '../../../../../core/catalog/application/use-cases/get-catalog.use-case';

jest.mock('../../../../../core/catalog/application/use-cases/get-catalog.use-case');
jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
  useSearchParams: () => ({ get: () => null, toString: () => '' })
}));

const mockCatalogData = {
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
  availableFilters: ['Action', 'Adventure'],
  totalPages: 2,
  currentPage: 1
};

describe('useCatalog', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (GetCatalogUseCase as jest.Mock).mockResolvedValue(mockCatalogData);
  });

  it('loads catalog on mount', async () => {
    const { result } = renderHook(() => useCatalog());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.catalog).toEqual(mockCatalogData);
    expect(result.current.hasMorePages).toBe(true);
  });

  it('sets hasMorePages to false when on last page', async () => {
    const lastPageData = {
      ...mockCatalogData,
      currentPage: 2,
      totalPages: 2
    };
    (GetCatalogUseCase as jest.Mock).mockResolvedValue(lastPageData);

    const { result } = renderHook(() => useCatalog());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.hasMorePages).toBe(false);
  });
});