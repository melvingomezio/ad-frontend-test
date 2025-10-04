import { CatalogDetail } from "../../domain";
import { CatalogService } from "../../infrastructure";

export const GetCatalogUseCase = async (): Promise<CatalogDetail> => {
  return await CatalogService.getCatalog();
};

