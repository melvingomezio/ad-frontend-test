import { CatalogDetail } from '../domain';

export interface CatalogRepository {
  getCatalog(genre?: string, page?: number): Promise<CatalogDetail>;
}