"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

export interface CartItem {
  /** productId + colour + size: the same combination merges into one line. */
  key: string;
  productId: string;
  name: string;
  variantName: string;
  image: string;
  fit: "model" | "flat";
  size: string;
  price: number | null;
  qty: number;
}

export type NewCartItem = Omit<CartItem, "key" | "qty">;

interface CartContextValue {
  items: readonly CartItem[];
  /** Total number of pieces in the cart. */
  count: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: NewCartItem) => void;
  /** Sets the quantity; anything below 1 removes the line. */
  setQty: (key: string, qty: number) => void;
  removeItem: (key: string) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const MAX_QTY = 10;

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((item: NewCartItem) => {
    const key = `${item.productId}|${item.variantName}|${item.size}`;
    setItems((prev) => {
      if (prev.some((i) => i.key === key)) {
        return prev.map((i) => (i.key === key ? { ...i, qty: Math.min(MAX_QTY, i.qty + 1) } : i));
      }
      return [...prev, { ...item, key, qty: 1 }];
    });
  }, []);

  const setQty = useCallback((key: string, qty: number) => {
    setItems((prev) =>
      qty < 1
        ? prev.filter((i) => i.key !== key)
        : prev.map((i) => (i.key === key ? { ...i, qty: Math.min(MAX_QTY, qty) } : i)),
    );
  }, []);

  const removeItem = useCallback((key: string) => {
    setItems((prev) => prev.filter((i) => i.key !== key));
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      count: items.reduce((n, i) => n + i.qty, 0),
      subtotal: items.reduce((sum, i) => sum + (i.price ?? 0) * i.qty, 0),
      isOpen,
      openCart,
      closeCart,
      addItem,
      setQty,
      removeItem,
    }),
    [items, isOpen, openCart, closeCart, addItem, setQty, removeItem],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
