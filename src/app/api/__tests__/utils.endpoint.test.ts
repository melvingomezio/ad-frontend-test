import { allGames, availableFilters, delay } from '../utils/endpoint';

describe('API Utils', () => {
  describe('allGames', () => {
    it('contains game data', () => {
      expect(allGames).toBeDefined();
      expect(Array.isArray(allGames)).toBe(true);
      expect(allGames.length).toBeGreaterThan(0);
    });

    it('has correct game structure', () => {
      const game = allGames[0];
      expect(game).toHaveProperty('id');
      expect(game).toHaveProperty('name');
      expect(game).toHaveProperty('genre');
      expect(game).toHaveProperty('price');
      expect(game).toHaveProperty('image');
      expect(game).toHaveProperty('description');
      expect(game).toHaveProperty('isNew');
    });
  });

  describe('availableFilters', () => {
    it('contains unique genres', () => {
      expect(availableFilters).toBeDefined();
      expect(Array.isArray(availableFilters)).toBe(true);
      expect(availableFilters.length).toBeGreaterThan(0);
      expect(new Set(availableFilters).size).toBe(availableFilters.length);
    });
  });

  describe('delay', () => {
    it('resolves after specified time', async () => {
      const start = Date.now();
      await delay(100);
      const end = Date.now();
      expect(end - start).toBeGreaterThanOrEqual(90);
    });
  });
});