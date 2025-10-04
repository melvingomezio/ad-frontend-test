export type Game = {
  id: string;
  genre: string;
  image: string;
  name: string;
  description: string;
  price: number;
  isNew: boolean;
};

export type CatalogDetail = {
  games: Game[];
  totalPages: number;
  currentPage: number;
  availableFilters: string[];
};
