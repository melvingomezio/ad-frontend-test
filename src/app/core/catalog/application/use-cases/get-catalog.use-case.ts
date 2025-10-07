import { CatalogDetail } from "../../domain";
import { CatalogService } from "../../infrastructure";

export const GetCatalogUseCase = async (genre?: string, page?: number): Promise<CatalogDetail> => {
  return await CatalogService.getCatalog(genre, page);
};

