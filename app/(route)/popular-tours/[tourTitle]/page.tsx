"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowRight, Heart } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import Blogs from "@/components/modules/Blogs";
import { stunningNatureScenes } from "@/constants/data/popularToursData";
import { Map } from "@/components/Map";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

interface Props {
  params: Promise<{ tourTitle: string }>;
}

export default function TourPage({ params }: Props) {
  const { tourTitle } = use(params);
  const id = parseInt(tourTitle.split("-").pop() || "0", 10);
  const tour = stunningNatureScenes.find((scene) => scene.id === id);
  const { currentLanguage } = useLanguage();

  // Cart hooks
  const { addTour, removeTour, isTourInCart } = useCart();
  const isInCart = tour ? isTourInCart(tour.id) : false;

  // Translation object for static text
  const translations = {
    ka: {
      back: "დაბრუნება",
      tours: "ტურები საქართველოში",
      time: "დრო",
      distance: "მანძილი",
      difficulty: "სირთულე",
      addToCart: "მარშრუტებში დამატება",
      removeFromCart: "მარშრუტიდან ამოღება",
      learnMore: "გაიგე მეტი",
    },
    en: {
      back: "Back",
      tours: "Tours in Georgia",
      time: "Time",
      distance: "Distance",
      difficulty: "Difficulty",
      addToCart: "Add to Cart",
      removeFromCart: "Remove from Cart",
      learnMore: "Learn More",
    },
  };

  const t = translations[currentLanguage];

  const handleButtonClick = () => {
    if (tour) {
      if (isInCart) {
        removeTour(tour.id);
      } else {
        addTour(tour);
      }
    }
  };

  if (!tour) {
    notFound();
  }

  return (
    <>
      <div>
        <HeroSection
          image="/popular-tours/lukhi-okrotskali-lakes-gnta.webp"
          title={tour.title}
          description={tour.descriptin}
          overlay="bg-black/40"
          button={{ ka: t.back, en: t.back }}
          href="/popular-tours"
          tours={{ ka: t.tours, en: t.tours }}
          className="h-[410px] mb-10"
        />
      </div>
      <div className="container mx-auto px-5 sm:px-8 md:px-8 lg:px-10 py-10">
        <div>
          <div>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 mb-[120px]">
              <div className="flex-1 flex flex-col justify-between gap-10">
                <h1 className="text-xl lg:text-4xl font-bold">
                  {tour.title[currentLanguage]}
                </h1>
                <p className="text-gray-600 text-md">
                  {tour.descriptin[currentLanguage]}
                </p>
                <div className="flex flex-row gap-16">
                  <div>
                    <p className="text-sm text-gray-600">{t.time}</p>
                    <span className="text-lg text-black font-bold">
                      {tour.time[currentLanguage]}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{t.distance}</p>
                    <span className="text-lg text-black font-bold">
                      {tour.distance[currentLanguage]}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{t.difficulty}</p>
                    <span className="text-lg text-black font-bold">
                      {tour.difficulty[currentLanguage]}
                    </span>
                  </div>
                </div>
                <button
                  className="flex items-center gap-4 cursor-pointer group"
                  onClick={handleButtonClick}
                >
                  <div
                    className={`border w-fit p-3 rounded-full ${
                      isInCart ? "bg-red-500" : "border-red-500"
                    } group-hover:bg-red-500 group-hover:text-white transition-all duration-200 ease-in-out`}
                  >
                    <Heart
                      size={20}
                      className={`${
                        isInCart ? "text-white" : "text-red-500"
                      } group-hover:text-white transition-all duration-200 ease-in-out`}
                    />
                  </div>
                  <div
                    className={`text-md font-bold ${
                      isInCart ? "text-red-500 px-1" : "text-red-500"
                    } group-hover:px-1 transition-all duration-200 ease-in-out`}
                  >
                    {isInCart ? t.removeFromCart : t.addToCart}
                  </div>
                </button>
              </div>
              <div className="flex-1">
                <Image
                  src={tour.image}
                  alt={tour.title[currentLanguage]}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            {/* Sub-Tours Section */}
            {tour.tours && tour.tours.length > 0 && (
              <div className="mt-10">
                <div className="flex flex-col gap-20">
                  {tour.tours.map((subTour, index) => (
                    <div
                      key={subTour.id}
                      className={`flex flex-col lg:flex-row gap-32 ${
                        index % 2 === 1 ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="lg:w-1/2">
                        <Image
                          src={
                            subTour.image || "/popular-tours/default-tour.webp"
                          }
                          alt={subTour.title?.[currentLanguage] || "Tour Image"}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="lg:w-1/2 flex flex-col justify-center gap-10">
                        <div className="flex items-start gap-3 select-none">
                          <div className="flex items-center gap-4 group">
                            <div
                              className={`w-fit px-4 py-[8px] rounded-full
                               bg-red-500 text-white transition-all duration-200 ease-in-out`}
                            >
                              {subTour.id}
                            </div>
                          </div>
                          <h3 className="text-xl lg:text-4xl font-semibold -mt-1">
                            {subTour.title?.[currentLanguage]}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-md">
                          {subTour.description?.[currentLanguage]}
                        </p>
                        <div>
                          <button className="text-red-500 flex items-center gap-2 font-bold text-sm cursor-pointer border border-red-500 rounded-lg px-4 py-4 hover:bg-red-500 hover:text-white transition-all duration-200 ease-in-out">
                            {t.learnMore} <ArrowRight size={15} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <section className="my-5 px-5 lg:px-0">
        <Map />
      </section>
      <section>
        <Blogs />
      </section>
    </>
  );
}
