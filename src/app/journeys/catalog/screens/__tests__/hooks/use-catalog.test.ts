import { renderHook, act, waitFor, RenderHookResult } from '@testing-library/react';
import { useCatalog } from '../../resources/hooks/useCatalog';
import { GetCatalogUseCase } from '../../../../../core/catalog/application/use-cases/get-catalog.use-case';

jest.mock('../../../../../core/catalog/application/use-cases/get-catalog.use-case');

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
  genres: ['Action', 'Adventure'],
  hasMore: true
};

describe('useCatalog', () => {
  beforeEach(() => {
    (GetCatalogUseCase as jest.Mock).mockResolvedValue(mockCatalogData);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('loads catalog on mount', async () => {
    let result!: RenderHookResult<ReturnType<typeof useCatalog>, unknown>['result'];
    await act(async () => {
      result = renderHook(() => useCatalog()).result;
    });

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(GetCatalogUseCase).toHaveBeenCalledWith(undefined, 1);
    expect(result.current.catalog).toEqual(mockCatalogData);
  });

  it('handles genre change', async () => {
    let result!: RenderHookResult<ReturnType<typeof useCatalog>, unknown>['result'];
    await act(async () => {
      result = renderHook(() => useCatalog()).result;
    });

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    await act(async () => {
      result.current.handleGenreChange('Action');
    });

    expect(result.current.selectedGenre).toBe('Action');
    expect(GetCatalogUseCase).toHaveBeenCalledWith('Action', 1);
  });

  it('handles load more', async () => {
    let result!: RenderHookResult<ReturnType<typeof useCatalog>, unknown>['result'];
    await act(async () => {
      result = renderHook(() => useCatalog()).result;
    });

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    await act(async () => {
      result.current.handleLoadMore();
    });

    await waitFor(() => {
      expect(GetCatalogUseCase).toHaveBeenCalledWith(undefined, 2);
    });
  });

  it('appends games when loading more', async () => {
    const moreGames = {
      games: [{ id: '2', name: 'Game 2', genre: 'RPG', image: '/test2.jpg', price: 49.99, description: 'Test 2', isNew: false }],
      genres: ['Action', 'Adventure'],
      hasMore: false
    };

    let result!: RenderHookResult<ReturnType<typeof useCatalog>, unknown>['result'];
    await act(async () => {
      result = renderHook(() => useCatalog()).result;
    });

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    (GetCatalogUseCase as jest.Mock).mockResolvedValueOnce(moreGames);

    await act(async () => {
      result.current.handleLoadMore();
    });

    await waitFor(() => {
      expect(result.current.loadingMore).toBe(false);
    });

    expect(result.current.catalog?.games).toHaveLength(2);
  });
});