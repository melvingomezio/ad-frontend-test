"use client";

import { useRouter } from 'next/navigation';
import { Layout } from "../../shared/components/templates/layout/Layout";
import { Navbar } from "../../shared/components/molecules/navbar/Navbar";
import { GameCard } from "../../shared/components/organisms/cards/game-card/GameCard";
import { Body, Heading } from "../../shared/components/atoms";
import { Dropdown, Footer, TextButton, Alert } from "../../shared/components/molecules";
import { useCatalog } from "./resources/hooks/useCatalog";
import { addToCartUseCase, removeFromCartUseCase, isInCartUseCase } from "../../../core/cart/application/use-cases/cart.use-case";
import { useAlert } from "../../shared/hooks/useAlert";
import { Game } from '@/app/core';
import { useState, useEffect } from 'react';

export function CatalogScreen() {
  const router = useRouter();
  const { alert, showAlert, hideAlert } = useAlert();
  const [cartItems, setCartItems] = useState<Set<string>>(new Set());
  const {
    catalog,
    loading,
    loadingMore,
    selectedGenre,
    handleGenreChange,
    handleLoadMore
  } = useCatalog();

  useEffect(() => {
    if (catalog) {
      const itemsInCart = new Set(catalog.games.filter(game => isInCartUseCase(game.id)).map(game => game.id));
      setCartItems(itemsInCart);
    }
  }, [catalog]);

  const handleToggleCart = (game: Game) => {
    const isInCart = cartItems.has(game.id);
    if (isInCart) {
      removeFromCartUseCase(game.id);
      setCartItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(game.id);
        return newSet;
      });
      showAlert(`${game.name} removed from cart!`);
    } else {
      addToCartUseCase(game);
      setCartItems(prev => new Set(prev).add(game.id));
      showAlert(`${game.name} added to cart!`);
    }
  };

  const navbar = (
    <Navbar
      text="GamerShop"
      onTextClick={() => router.push('/')}
      onIconClick={() => router.push('/cart')}
    />
  );

  const footer = (
    <Footer/>
  );

  if (loading) {
    return (
      <Layout navbar={navbar} footer={footer}>
        <div className="flex justify-center items-center h-64">
          <div>Loading...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout navbar={navbar} footer={footer}>
      <Alert message={alert.message} isVisible={alert.isVisible} onClose={hideAlert} />
      <div className="py-6 md:py-12">
        <Heading
          className="mx-4 md:mx-8 lg:mx-32"
          variant="h1"
          fontWeight="bold"
          color="primary800"
        >
          Top Sellers
        </Heading>
        <div className="mx-4 md:mx-8 lg:mx-32 mt-8 flex justify-end">
          {catalog && (
            <div className="flex items-center gap-4 lg:gap-6">
              <Body variant="text-b1" fontWeight="bold" color="primary800">
                Genre
              </Body>
              <div className="h-4 md:h-6 w-px bg-gray-300"></div>
              <Dropdown
                options={[
                  { value: "", label: "All" },
                  ...catalog.availableFilters.map((filter) => ({
                    value: filter,
                    label: filter,
                  }))
                ]}
                value={selectedGenre}
                placeholder="All"
                onChange={handleGenreChange}
              />
            </div>
            
          )}
        </div>
        <div className="catalog px-4 md:px-8 lg:px-32 py-6 md:py-12 mt-6 md:mt-12">
          {catalog && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-12">
                {catalog.games.map((game) => (
                  <GameCard
                    key={game.id}
                    imageSrc={game.image}
                    imageAlt={game.name}
                    genre={game.genre}
                    title={game.name}
                    price={`$${game.price}`}
                    buttonText={cartItems.has(game.id) ? "Remove" : "Add to Cart"}
                    onButtonClick={() => handleToggleCart(game)}
                    isNew={game.isNew}
                  />
                ))}
              </div>
              <div className="flex justify-center mt-12 w-32">
                <TextButton
                  variant="btn-filled"
                  color="primary000"
                  backgroundColor="primary600"
                  text={loadingMore ? "Loading..." : "SEE MORE"}
                  disabled={loadingMore}
                  onClick={handleLoadMore}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
