"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { StunningNatureScene } from "@/constants/data/popularToursData";

interface Sight {
  id: number;
  title: string;
  description: string;
  src: string; // image URL
}

interface CartContextType {
  tours: StunningNatureScene[];
  sights: Sight[];
  addTour: (tour: StunningNatureScene) => void;
  removeTour: (tourId: number) => void;
  clearTours: () => void;
  isTourInCart: (tourId: number) => boolean;
  addSight: (sight: Sight) => void;
  removeSight: (sightId: number) => void;
  clearSights: () => void;
  isSightInCart: (sightId: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [tours, setTours] = useState<StunningNatureScene[]>([]);
  const [sights, setSights] = useState<Sight[]>([]);

  // Load data from localStorage
  useEffect(() => {
    const savedTours = localStorage.getItem("cartTours");
    const savedSights = localStorage.getItem("cartSights");

    if (savedTours) {
      setTours(JSON.parse(savedTours));
    }
    if (savedSights) {
      setSights(JSON.parse(savedSights));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartTours", JSON.stringify(tours));
  }, [tours]);

  useEffect(() => {
    localStorage.setItem("cartSights", JSON.stringify(sights));
  }, [sights]);

  const addTour = (tour: StunningNatureScene) => {
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

  const addSight = (sight: Sight) => {
    setSights((prev) => {
      const exists = prev.find((s) => s.id === sight.id);
      if (exists) return prev;
      return [...prev, sight];
    });
  };

  const removeSight = (sightId: number) => {
    setSights((prev) => prev.filter((sight) => sight.id !== sightId));
  };

  const clearSights = () => {
    setSights([]);
  };

  const isSightInCart = (sightId: number) => {
    return sights.some((sight) => sight.id === sightId);
  };

  return (
    <CartContext.Provider
      value={{
        tours,
        sights,
        addTour,
        removeTour,
        clearTours,
        isTourInCart,
        addSight,
        removeSight,
        clearSights,
        isSightInCart,
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
