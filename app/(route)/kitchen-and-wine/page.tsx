/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import { HeroSection } from "@/components/hero-section";
import { useLanguage } from "@/context/LanguageContext";
import ExperienceControls from "@/components/modules/ExperienceControls";

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

function page() {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  return (
    <div className="space-y-24">
      <div>
        <HeroSection
          image="/shutterstock.jpg"
          title={{ ka: t.title, en: t.title }}
          description={{
            ka: "ხშირად, საქართველოში ჩამოსული სტუმრები ეთნოკულტურის გაცნობას ქართული სუფრითა და კერძებით იწყებენ",
            en: "",
          }}
          overlay="bg-black/40"
          button={{ ka: t.button, en: t.button }}
          href="/"
          tours={{ ka: t.tours, en: t.tours }}
          className="h-[340px] mb-10"
        />
      </div>

      <section>
        <ExperienceControls currentLanguage={currentLanguage} />
      </section>
      <div className="container mx-auto space-y-5 px-5 sm:px-8 md:px-8 lg:px-10">
        Card
      </div>
    </div>
  );
}

export default page;
