"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Heart, Menu, Search, X } from "lucide-react";
import { createSlug } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext"; // Import LanguageContext
import ButtonWrapper from "@/components/ButtonWrapper";
import { HeroSection } from "@/components/hero-section";
import { stunningNatureScenes } from "@/constants/data/popularToursData";

function Page() {
  const { currentLanguage } = useLanguage(); // Use LanguageContext
  const [heartAnimations, setHeartAnimations] = useState<{
    [key: number]: boolean;
  }>({});
  const [heartActive, setHeartActive] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchId, setSearchId] = useState("");
  const [activeFilterId, setActiveFilterId] = useState("");
  const router = useRouter();
  const { addTour, removeTour, isTourInCart } = useCart();
  const itemsPerPage = 6;

  // Translation object for static text
  const translations = {
    ka: {
      close: "დახურვა",
      filter: "ფილტრი",
      search: "ძებნა",
      noResults: "ვერ მოიძებნა შედეგები",
      noResultsDesc: (id: string) => `ID ${id} ვერ მოიძებნა. სცადეთ სხვა ID.`,
      viewAll: "ყველას ნახვა",
      time: "დრო",
      distance: "მანძილი",
      difficulty: "სირთულე",
      learnMore: "გაითხე მეტი",
      previous: "წინა",
      next: "შემდეგი",
    },
    en: {
      close: "Close",
      filter: "Filter",
      search: "Search",
      noResults: "No Results Found",
      noResultsDesc: (id: string) => `ID ${id} not found. Try another ID.`,
      viewAll: "View All",
      time: "Time",
      distance: "Distance",
      difficulty: "Difficulty",
      learnMore: "Learn More",
      previous: "Previous",
      next: "Next",
    },
  };

  const t = translations[currentLanguage];

  const startIndex = (currentPage - 1) * itemsPerPage;

  // Filter scenes by ID if search is active
  const filteredScenes = activeFilterId
    ? stunningNatureScenes.filter((scene) =>
        scene.id.toString().includes(activeFilterId)
      )
    : stunningNatureScenes;

  const currentItems = filteredScenes.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleHeartClick = (index: number) => {
    const scene = currentItems[index];
    setHeartAnimations((prev) => ({ ...prev, [index]: true }));
    setHeartActive((prev) => ({ ...prev, [index]: !prev[index] }));

    if (!heartActive[index]) {
      addTour(scene);
    } else {
      removeTour(scene.id);
    }

    setTimeout(() => {
      setHeartAnimations((prev) => ({ ...prev, [index]: false }));
    }, 1000);
  };

  const scatterHeartVariants = {
    initial: { opacity: 0, scale: 0, x: 0, y: 0 },
    animate: (i: number) => ({
      opacity: [0, 1, 0],
      scale: [0, Math.random() * 0.5 + 0.5, 0],
      x: Math.cos((i * Math.PI * 2) / 10) * (30 + Math.random() * 20),
      y: Math.sin((i * Math.PI * 2) / 10) * (30 + Math.random() * 20),
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: i * 0.05,
      },
    }),
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const searchVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  };

  return (
    <>
      <div className="mb-10">
        <HeroSection
          image="/popular-tours/lukhi-okrotskali-lakes-gnta.webp"
          title={{
            ka: "ტურები საქართველოში",
            en: "Tours in Georgia",
          }}
          description={{
            ka: "სანამ საქართველოში ჩამოხვალ, მნიშვნელოვანია გაეცნო ჩვენი ქვეყნის ცხოვრების სტილსა და ისეთ საჭირო დეტალებს, როგორებიცაა, სავიზო პოლიტიკა, ადგილობრივი და რეგიონული ტრანსპორტი, ამინდი, კლიმატი, სასტუმროთა ქსელები და სხვა.",
            en: "Before coming to Georgia, it’s important to familiarize yourself with our country’s lifestyle and essential details such as visa policies, local and regional transportation, weather, climate, hotel networks, and more.",
          }}
          overlay="bg-black/40"
          button={{ ka: "მთავარი", en: "Home" }}
          href="/"
          tours={{ ka: "ტურები საქართველოში", en: "Tours in Georgia" }}
          className="h-[410px] mb-10"
        />
      </div>
      <div className="container mx-auto lg:px-10">
        <div className="relative flex items-center px-5 sm:px-8 md:px-8 lg:px-0 mb-10 gap-4">
          <Button
            variant="outline"
            className="px-2 py-5 flex items-center gap-2 cursor-pointer"
            onClick={toggleSearch}
            aria-label={isSearchOpen ? t.close : t.filter}
            size="lg"
          >
            {isSearchOpen ? <X size={30} /> : <Menu size={30} />}
            {isSearchOpen ? t.close : t.filter}
          </Button>
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                className="absolute left-32 sm:left-32 lg:left-32 flex items-center gap-2"
                variants={searchVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.input
                  type="number"
                  placeholder="Id..."
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="p-2 w-20 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                  variants={searchVariants}
                  maxLength={3}
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    if (target.value.length > 3) {
                      target.value = target.value.slice(0, 3);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (["e", "E", "+", "-", "."].includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
                <Button
                  variant="destructive"
                  className="p-2 h-10 cursor-pointer"
                  onClick={() => {
                    setActiveFilterId(searchId);
                    setCurrentPage(1);
                  }}
                  aria-label={t.search}
                >
                  {t.search} <Search className="text-white" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 sm:px-8 md:px-8 lg:px-0">
          {currentItems.length === 0 && activeFilterId ? (
            <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t.noResults}
              </h3>
              <p className="text-gray-600 mb-4">
                {t.noResultsDesc(activeFilterId)}
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setActiveFilterId("");
                  setSearchId("");
                  setCurrentPage(1);
                }}
                className="mt-2"
              >
                {t.viewAll}
              </Button>
            </div>
          ) : (
            currentItems.map((scene, index) => (
              <Card
                key={scene.id}
                className="overflow-hidden rounded-lg shadow-lg p-4 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out group"
                onClick={() =>
                  router.push(
                    `/popular-tours/${createSlug(
                      scene.title[currentLanguage]
                    )}-${scene.id}`
                  )
                }
              >
                <CardHeader className="p-0 relative overflow-hidden rounded-lg">
                  <Image
                    src={scene.image}
                    alt={scene.title[currentLanguage]}
                    width={300}
                    height={292}
                    className="w-full h-72 object-cover rounded-lg group-hover:scale-110 transition-all duration-200 ease-in-out"
                  />
                  <div
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleHeartClick(index);
                    }}
                  >
                    <Heart
                      size={20}
                      className={`${
                        heartActive[index] || isTourInCart(scene.id)
                          ? "fill-red-500 text-red-500"
                          : "hover:text-red-500 text-white transition-all duration-200 ease-in-out"
                      }`}
                    />
                    <AnimatePresence>
                      {heartAnimations[index] &&
                        Array.from({ length: 10 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute top-0 right-0"
                            variants={scatterHeartVariants}
                            initial="initial"
                            animate="animate"
                            custom={i}
                          >
                            <Heart
                              size={15}
                              className="text-white fill-white"
                            />
                          </motion.div>
                        ))}
                    </AnimatePresence>
                  </div>
                </CardHeader>
                <CardContent className="px-1">
                  <div className="flex justify-start gap-5 text-sm text-black mb-4">
                    <span>{scene.city[currentLanguage]}</span>
                    <span>{scene.sight[currentLanguage]}</span>
                    <span>{scene.activity[currentLanguage]}</span>
                  </div>
                  <CardTitle className="text-lg font-semibold mb-4">
                    {scene.title[currentLanguage].substring(0, 25)}...
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 mb-5">
                    {scene.descriptin[currentLanguage].substring(0, 230)}...
                  </CardDescription>
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <p className="text-sm text-gray-600">{t.time}</p>
                      <span className="text-sm text-black font-bold">
                        {scene.time[currentLanguage]}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm text-gray-600">{t.distance}</p>
                      <span className="text-sm text-black font-bold">
                        {scene.distance[currentLanguage]}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm text-gray-600">{t.difficulty}</p>
                      <span className="text-sm text-black font-bold">
                        {scene.difficulty[currentLanguage]}
                      </span>
                    </div>
                  </div>
                  <div>
                    <Link
                      href={`/popular-tours/${createSlug(
                        scene.title[currentLanguage]
                      )}-${scene.id}`}
                    >
                      <ButtonWrapper
                        label={t.learnMore}
                        icon={<ArrowRight size={15} />}
                        className="mt-6"
                      />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
        {Math.ceil(filteredScenes.length / itemsPerPage) > 1 && (
          <div className="flex justify-between items-center mt-16 gap-4 px-5 sm:px-8 md:px-8 lg:px-0">
            <Button
              variant="outline"
              className="cursor-pointer text-sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ArrowLeft size={15} /> {t.previous}
            </Button>
            <div className="flex items-center gap-2">
              {Array.from(
                { length: Math.ceil(filteredScenes.length / itemsPerPage) },
                (_, i) => i + 1
              ).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "destructive" : "outline"}
                  size="sm"
                  className="rounded-lg px-5 w-6 h-10 cursor-pointer"
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              className="cursor-pointer text-sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(filteredScenes.length / itemsPerPage)
              }
            >
              {t.next} <ArrowRight size={15} />
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default Page;
