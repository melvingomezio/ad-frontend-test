import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { GetCatalogUseCase } from "../../../../../core/catalog/application/use-cases/get-catalog.use-case";
import { CatalogDetail } from "../../../../../core/catalog/domain";

export const useCatalog = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [catalog, setCatalog] = useState<CatalogDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMorePages, setHasMorePages] = useState(false);

  const loadCatalog = useCallback(async (genre?: string, page: number = 1, append: boolean = false) => {
    if (append) {
      setLoadingMore(true);
    } else {
      setLoading(true);
    }
    try {
      const data = await GetCatalogUseCase(genre || undefined, page);
      setHasMorePages(data.currentPage < data.totalPages);
      if (append) {
        setCatalog(prev => prev ? {
          ...data,
          games: [...prev.games, ...data.games]
        } : data);
      } else {
        setCatalog(data);
      }
    } catch (error) {
      console.error("Error loading catalog:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, []);

  const handleGenreChange = (value: string) => {
    setSelectedGenre(value);
    setCurrentPage(1);
    setHasMorePages(false);
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set('genre', value);
    } else {
      params.delete('genre');
    }
    router.push(`/?${params.toString()}`);
    loadCatalog(value, 1);
  };

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    loadCatalog(selectedGenre, nextPage, true);
  };

  useEffect(() => {
    const genreFromUrl = searchParams.get('genre') || '';
    setSelectedGenre(genreFromUrl);
    loadCatalog(genreFromUrl);
  }, [searchParams, loadCatalog]);

  return {
    catalog,
    loading,
    loadingMore,
    selectedGenre,
    hasMorePages,
    handleGenreChange,
    handleLoadMore
  };
};