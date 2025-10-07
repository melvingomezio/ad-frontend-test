import { GET } from '../games/route';
import * as endpoint from '../utils/endpoint';

// Polyfills for Request and Response in Node.js environment
global.Request = class Request {
  url: string;
  constructor(url: string) {
    this.url = url;
  }
} as unknown as typeof Request;

global.Response = class Response {
  static json(data: unknown) {
    return {
      json: async () => data
    };
  }
} as unknown as typeof Response;

jest.mock('../utils/endpoint', () => ({
  allGames: [
    { id: '1', genre: 'Action', name: 'Test Game 1', price: 59.99 },
    { id: '2', genre: 'RPG', name: 'Test Game 2', price: 39.99 },
    { id: '3', genre: 'Action', name: 'Test Game 3', price: 49.99 }
  ],
  availableFilters: ['Action', 'RPG'],
  delay: jest.fn().mockResolvedValue(undefined)
}));

describe('/api/games', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns all games without filters', async () => {
    const request = new Request('http://localhost:3000/api/games');
    const response = await GET(request);
    const data = await response.json();

    expect(data.games).toHaveLength(3);
    expect(data.availableFilters).toEqual(['Action', 'RPG']);
    expect(endpoint.delay).toHaveBeenCalledWith(2000);
  });

  it('filters games by genre', async () => {
    const request = new Request('http://localhost:3000/api/games?genre=Action');
    const response = await GET(request);
    const data = await response.json();

    expect(data.games).toHaveLength(2);
    expect(data.games.every((game: { genre: string }) => game.genre === 'Action')).toBe(true);
  });

  it('calculates totalPages based on filtered results', async () => {
    const request = new Request('http://localhost:3000/api/games?genre=Action');
    const response = await GET(request);
    const data = await response.json();

    expect(data.totalPages).toBe(1); // 2 Action games fit in 1 page (12 items per page)
    expect(data.currentPage).toBe(1);
  });

  it('calculates totalPages correctly for all games', async () => {
    const request = new Request('http://localhost:3000/api/games');
    const response = await GET(request);
    const data = await response.json();

    expect(data.totalPages).toBe(1); // 3 games fit in 1 page (12 items per page)
    expect(data.currentPage).toBe(1);
  });

  it('handles pagination', async () => {
    const request = new Request('http://localhost:3000/api/games?page=2');
    const response = await GET(request);
    const data = await response.json();

    expect(data.currentPage).toBe(2);
    expect(data.games).toHaveLength(0);
  });

  it('defaults to page 1 for invalid page numbers', async () => {
    const request = new Request('http://localhost:3000/api/games?page=invalid');
    const response = await GET(request);
    const data = await response.json();

    expect(data.currentPage).toBe(1);
  });
});