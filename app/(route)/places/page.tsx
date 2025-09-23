"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import MapOfGeorgia from "@/components/modules/MapOfGeorgia";
import DestinationCard from "./_components/DestinationCard";
import PopularDestinationsSection from "./_components/PopularDestinationsSection";
import HotelGallerySection from "./_components/HotelGallerySection";
import FeaturedServicesCarousel from "./_components/FeaturedServicesCarousel";
import { places } from "@/constants/data/data";
import { useLanguage } from "@/context/LanguageContext";
import Gzispar from "@/components/modules/Gzispar";

const translations = {
  ka: {
    home: "მთავარი",
    learnMore: "გაიგე მეტი",
    heroTitle: "აი, ამიტომ უნდა ესტუმრო ბათუმს",
    heroDescription:
      "აქაური სუბტროპიკული კლიმატი, ეკოლოგიურად სუფთა ზღვა, მთები და კარგად განვითარებულ ტურისტული ინფრასტრუქტურა წელიწადის ნებისმიერ დროს გამორჩეულად გიმასპინძლებს და ენერგიის სრულ აღდგენაში დაგეხმარება.",
  },
  en: {
    home: "Home",
    learnMore: "Learn More",
    heroTitle: "Here's why you should visit Batumi",
    heroDescription:
      "The local subtropical climate, ecologically clean sea, mountains and well-developed tourist infrastructure will exceptionally host you at any time of the year and help you fully restore your energy.",
  },
};

function PlacesPage() {
  const router = useRouter();
  const { currentLanguage } = useLanguage();

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const t = translations[currentLanguage];

  return (
    <div className="m-0 p-0 min-h-screen">
      {places.map((place, index) => (
        <div key={index}>
          <div className="relative w-full h-[100vh] sm:h-[100vh] md:h-[100vh] lg:h-screen mb-[50px]">
            <Image
              src={place.image}
              alt={place.title[currentLanguage]}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute flex flex-col items-start justify-center h-screen container mx-auto px-5 sm:px-8 md:px-8 lg:px-11 inset-0 text-white drop-shadow-lg">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 sm:mb-5 leading-tight">
                {place.title[currentLanguage]}
              </h1>
              <p className="text-sm sm:text-base md:text-md text-gray-200 max-w-[800px]">
                {place.description[currentLanguage]}
              </p>
            </div>
            <div className="absolute bottom-10 container mx-auto inset-0 flex items-end justify-start px-5 sm:px-8 md:px-8 lg:px-11">
              <button
                onClick={() => router.push("/")}
                className="text-white font-semibold flex items-center gap-1 hover:text-red-500 cursor-pointer transition"
              >
                {t.home}
                <ArrowRight size={15} className="mt-0.5" />
              </button>
            </div>
          </div>
          <div className=" container mx-auto px-5 sm:px-8 md:px-8 lg:px-11 py-8 mb-[120px]">
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
              <div className="w-full lg:w-1/2">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 leading-tight">
                  {place.smallImages.title[currentLanguage]}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-[100%] sm:max-w-[100%] md:max-w-[100%]">
                  {place.smallImages.description[currentLanguage]}
                </p>
              </div>
              <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {place.smallImages.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative w-full h-40 sm:h-48 md:h-56 overflow-hidden rounded-lg"
                  >
                    <motion.div
                      variants={imageVariants}
                      initial="initial"
                      whileHover="hover"
                      className="w-full h-full cursor-pointer"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt[currentLanguage]}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </motion.div>
                    <div className="absolute bottom-5 left-5 text-white drop-shadow-lg">
                      <p className="text-sm sm:text-base font-medium">
                        {img.title[currentLanguage]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <section className="mb-[120px]">
            <MapOfGeorgia />
          </section>
          <section className="container mx-auto px-5 sm:px-8 md:px-8 lg:px-11 py-8 mb-[100px]">
            <DestinationCard />
          </section>
          <section className="mb-[120px]">
            <Gzispar
              imageSrc="/space/back-batumi.webp"
              titleKa="გაგისინჯავს ქართული ღვინო?"
              titleEn="Would you like to taste Georgian wine?"
              descriptionKa="ღვინო პირველად 8000 წლის წინ, საქართველოში დააყენეს. ღვინის დამზადების მსოფლიოში არსებული ორი ტექნოლოგიიდან კი ერთი - ღვინის ქვევრში დაყენების ტექნოლოგია, სწორედ ქართულია."
              descriptionEn="Wine was first made 8000 years ago in Georgia. One of the two winemaking technologies existing in the world - the technology of making wine in qvevri, is specifically Georgian."
              buttonTextKa="გაგიმარჯოს!"
              buttonTextEn="Cheers!"
            />
          </section>
          <section className="bg-gray-100">
            <div className="container mx-auto px-5 sm:px-8 md:px-8 lg:px-11 py-8 mb-[100px]">
              <PopularDestinationsSection />
            </div>
          </section>
          <section className="container mx-auto px-5 sm:px-8 md:px-8 lg:px-11 py-8 mb-[120px]">
            <HotelGallerySection />
          </section>
          <section>
            <FeaturedServicesCarousel />
          </section>
        </div>
      ))}
    </div>
  );
}

export default PlacesPage;
