/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HeroSection } from "@/components/hero-section";
import { useLanguage } from "@/context/LanguageContext";
import ExperienceControls from "@/components/modules/ExperienceControls";
import { Card, CardTitle } from "@/components/ui/card";
import { cuisineCards } from "@/constants/data/kitchenData";

const translations = {
  ka: {
    title: "ქართული სამზარეულო",
    tours: "",
    button: "მთავარი",
    emptySights: "სანახაობები ცარიელია",
    addSights: "დაამატეთ თქვენთვის საინტერესო სანახაობები",
    emptyTours: "მარშრუტი ცარიელია",
    addTours: "დაამატეთ თქვენთვის საინტერესო ტურები მარშრუტში",
    selected: "შერჩეული",
    clearAll: "ყველას წაშლა",
  },
  en: {
    title: "Georgian Cuisine",
    tours: "",
    button: "Home",
    emptySights: "Sights are empty",
    addSights: "Add sights that interest you",
    emptyTours: "Cart is empty",
    addTours: "Add tours that interest you to the cart",
    selected: "Selected",
    clearAll: "Clear All",
  },
};

// Storage key
const SORT_STORAGE_KEY = "cuisineSortByPopularity";

function page() {
  const { currentLanguage } = useLanguage();
  const [sortByPopularity, setSortByPopularity] = useState(false);
  const t = translations[currentLanguage];

  // Load sort preference from memory on mount
  useEffect(() => {
    const savedSort = window.sessionStorage?.getItem(SORT_STORAGE_KEY);
    if (savedSort !== null) {
      setSortByPopularity(savedSort === "true");
    }
  }, []);

  const handleSortChange = (isTopStatus: boolean) => {
    setSortByPopularity(isTopStatus);
    // Save to memory
    try {
      window.sessionStorage?.setItem(SORT_STORAGE_KEY, String(isTopStatus));
    } catch (error) {
      throw new Error("eror");
    }
  };

  // Sort cards based on popularity
  const displayCards = sortByPopularity
    ? [...cuisineCards].sort((a, b) => b.popularity - a.popularity)
    : cuisineCards;

  return (
    <div className="space-y-24">
      <div>
        <HeroSection
          image="/shutterstock.jpg"
          title={{ ka: t.title, en: t.title }}
          description={{
            ka: "ხშირად, საქართველოში ჩამოსული სტუმრები ეთნოკულტურის გაცნობას ქართული სუფრითა და კერძებით იწყებენ",
            en: "Often, guests visiting Georgia begin their acquaintance with ethnoculture through Georgian feasts and dishes",
          }}
          overlay="bg-black/40"
          button={{ ka: t.button, en: t.button }}
          href="/"
          tours={{ ka: t.tours, en: t.tours }}
          className="h-[340px] mb-10"
        />
      </div>
      <section>
        <ExperienceControls
          currentLanguage={currentLanguage}
          onSortChange={handleSortChange}
          initialSortState={sortByPopularity}
        />
      </section>
      <div className="container mx-auto space-y-5 px-5 sm:px-8 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayCards.map((card) => (
            <Card
              key={card.id}
              className="relative overflow-hidden transition-all duration-300 cursor-pointer group h-96"
            >
              <Image
                src={card.image}
                alt={card.title[currentLanguage]}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <CardTitle className="text-white text-xl font-semibold">
                  {card.title[currentLanguage]}
                </CardTitle>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
