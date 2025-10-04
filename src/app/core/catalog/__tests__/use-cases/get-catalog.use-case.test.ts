import { GetCatalogUseCase } from '../../application';
import { CatalogService } from '../../infrastructure';

jest.mock('../../infrastructure', () => ({
  CatalogService: {
    getCatalog: jest.fn(),
  },
}));

describe('GetCatalogUseCase', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call CatalogService.getCatalog', async () => {
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

    (CatalogService.getCatalog as jest.Mock).mockResolvedValue(mockResponse);

    const result = await GetCatalogUseCase();

    expect(CatalogService.getCatalog).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockResponse);
  });

  it('should handle service errors', async () => {
    const error = new Error('Service error');
    (CatalogService.getCatalog as jest.Mock).mockRejectedValue(error);

    await expect(GetCatalogUseCase()).rejects.toThrow('Service error');
  });
});