import { CatalogService } from '../../infrastructure';

global.fetch = jest.fn();

describe('CatalogService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  

  it('should fetch games without filters', async () => {
    const mockResponse = {
      games: [
        {
          id: '1',
          name: 'Test Game',
          genre: 'Action',
          image: '/test.jpg',
          description: 'Test description',
          price: 59.99,
          isNew: true,
        },
      ],
      totalPages: 1,
      currentPage: 1,
      availableFilters: ['Action'],
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await CatalogService.getCatalog();

    expect(fetch).toHaveBeenCalledWith('/api/games?');
    expect(result).toEqual(mockResponse);
  });

  it('should fetch games with genre filter', async () => {
    const mockResponse = {
      games: [],
      totalPages: 1,
      currentPage: 1,
      availableFilters: ['Action'],
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    await CatalogService.getCatalog('Action', 1);

    expect(fetch).toHaveBeenCalledWith('/api/games?genre=Action&page=1');
  });

  it('should throw error when fetch fails', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    });

    await expect(CatalogService.getCatalog()).rejects.toThrow('Failed to fetch games');
  });
});