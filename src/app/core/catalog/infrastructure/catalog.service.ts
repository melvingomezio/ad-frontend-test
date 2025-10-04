import { CatalogRepository } from "./catalog.interface";

export const CatalogService: CatalogRepository = {
  async getCatalog(genre?: string, page?: number) {
    const params = new URLSearchParams();
    if (genre) params.append('genre', genre);
    if (page) params.append('page', page.toString());
    
    const response = await fetch(`/api/games?${params.toString()}`);
    if (!response.ok) {
      throw new Error('Failed to fetch games');
    }
    
    return await response.json();
  }
}