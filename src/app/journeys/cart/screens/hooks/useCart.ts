"use client";

import { useState, useEffect } from 'react';
import { getCartDetailUseCase, removeFromCartUseCase } from '../../../../core/cart/application/use-cases/cart.use-case';
import { CartDetail } from '../../../../core/cart/domain/cart.template';

export function useCart() {
  const [cartDetail, setCartDetail] = useState<CartDetail>({ items: [], totalPrice: 0, totalItems: 0 });

  const loadCart = () => {
    const detail = getCartDetailUseCase();
    setCartDetail(detail);
  };

  const removeItem = (gameId: string) => {
    removeFromCartUseCase(gameId);
    loadCart();
  };

  useEffect(() => {
    loadCart();
  }, []);

  return {
    cartDetail,
    removeItem
  };
}