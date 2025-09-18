// contexts/CartContext.tsx
"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface Tour {
  id: number;
  title: string;
  descriptin: string;
  image: string;
  time: string;
  distance: string;
  difficulty: string;
}

interface CartContextType {
  tours: Tour[];
  addTour: (tour: Tour) => void;
  removeTour: (tourId: number) => void;
  clearTours: () => void;
  isTourInCart: (tourId: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [tours, setTours] = useState<Tour[]>([]);

  // მონაცემების ლოკალური შენახვა
  useEffect(() => {
    const savedTours = localStorage.getItem("cartTours");
    if (savedTours) {
      setTours(JSON.parse(savedTours));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartTours", JSON.stringify(tours));
  }, [tours]);

  const addTour = (tour: Tour) => {
    setTours((prev) => {
      const exists = prev.find((t) => t.id === tour.id);
      if (exists) return prev;
      return [...prev, tour];
    });
  };

  const removeTour = (tourId: number) => {
    setTours((prev) => prev.filter((tour) => tour.id !== tourId));
  };

  const clearTours = () => {
    setTours([]);
  };

  const isTourInCart = (tourId: number) => {
    return tours.some((tour) => tour.id === tourId);
  };

  return (
    <CartContext.Provider
      value={{
        tours,
        addTour,
        removeTour,
        clearTours,
        isTourInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
