"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import MapOfGeorgia from "@/components/modules/MapOfGeorgia";
import DestinationCard from "./DestinationCard";
import HeroSection from "./HeroSection";
import PopularDestinationsSection from "./PopularDestinationsSection";
import HotelGallerySection from "./HotelGallerySection";

interface SmallImage {
  src: string;
  alt: string;
  title: string;
}

interface Place {
  image: string;
  title: string;
  description: string;
  smallImages: {
    title: string;
    description: string;
    images: SmallImage[];
  };
}

function PlacesPage() {
  const router = useRouter();
  const places: Place[] = [
    {
      image:
        "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
      title: "ადგილმდებარეობები საქართველოში",
      description:
        "აქ ნახავ თოვლიან მთებს, შავი ზღვის სანაპიროებს, აღმოაჩენ უძველეს არქიტექტურულ ძეგლებსა და თანამედროვე, ურბანულ სანახაობებს - ეს მრავალფეროვანი პეიზაჟები და უდიდესი ისტორიის მქონე კულტურა 11 რეგიონსა და სხვადასხვა უნიკალურ ქალაქშია თავმოყრილი, სადაც უამრავ საინტერესო და განსხვავებულ ადგილს შეგიძლია ესტუმრო.",
      smallImages: {
        title: "მეტი ადგილმდებარეობა",
        description:
          "ჩრდილოეთით - კავკასიონი, დასავლეთით - შავი ზღვა, სამხრეთით - მთები, აღმოსავლეთით კი გაშლილი ველ-მინდვრები, მdinarეები, ჩანჩქერები, ულამაზესი ხეობები, ტბები, მღვიმეები, გამოქვაბულები და იდუმალი ტყეები. ეს საქართველოა, ულამაზესი და უძველესი ქვეყანა დედამიწაზე, სადაც წელიწადის ნებისმიერ დროს შეძლებ შენთვის საინტერესო მოგზაურობა ექსტრემალური ტურებითა თუ მსუბუქი სათავგადასავლო დასვენებით დაგეგმო.",
        images: [
          {
            src: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
            alt: "Small Image 1",
            title: "კავკასიონის მთები",
          },
          {
            src: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
            alt: "Small Image 2",
            title: "შავი ზღვის სანაპირო",
          },
          {
            src: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
            alt: "Small Image 3",
            title: "უძველესი ძეგლები",
          },
          {
            src: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
            alt: "Small Image 4",
            title: "თანამედროვე ქალაქები",
          },
        ],
      },
    },
  ];

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <div className="m-0 p-0 min-h-screen">
      {places.map((place, index) => (
        <div key={index}>
          <div className="relative w-full h-[100vh] sm:h-[100vh] md:h-[100vh] lg:h-screen">
            <Image
              src={place.image}
              alt={place.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute top-1/2 left-4 sm:left-6 md:left-6 lg:left-36 transform -translate-y-1/2 text-white drop-shadow-lg max-w-[90%] sm:max-w-[80%] md:max-w-[700px] lg:max-w-[800px]">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 sm:mb-5 leading-tight">
                {place.title}
              </h1>
              <p className="text-sm sm:text-base md:text-md text-gray-200">
                {place.description}
              </p>
            </div>
            <div className="absolute bottom-6 left-4 sm:left-6 md:left-6 lg:left-36 sm:bottom-10">
              <button
                onClick={() => router.push("/")}
                className="text-white font-semibold flex items-center gap-1 hover:text-red-500 cursor-pointer transition"
              >
                მთავარი
                <ArrowRight size={15} className="mt-0.5" />
              </button>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-[120px]">
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
              <div className="w-full lg:w-1/2">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 leading-tight">
                  {place.smallImages.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-[100%] sm:max-w-[100%] md:max-w-[100%]">
                  {place.smallImages.description}
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
                        alt={img.alt}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </motion.div>
                    <div className="absolute bottom-5 left-5 text-white drop-shadow-lg">
                      <p className="text-sm sm:text-base font-medium">
                        {img.title}
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
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-[100px]">
            <DestinationCard />
          </section>
          <section className="mb-[120px]">
            <HeroSection
              imageUrl="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="
              title="აი, ამიტომ უნდა ესტუმრო ბათუმს"
              description="აქაური სუბტროპიკული კლიმატი, ეკოლოგიურად სუფთა ზღვა, მთები და კარგად განვითარებულ ტურისტული ინფრასტრუქტურა წელიწადის ნებისმიერ დროს გამორჩეულად გიმასპინძლებს და ენერგიის სრულ აღდგენაში დაგეხმარება."
              buttonText="გაიგე მეტი"
              onButtonClick={() => {
                return router.push("/");
              }}
            />
          </section>
          <section className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-[100px]">
              <PopularDestinationsSection />
            </div>
          </section>
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-[120px]">
            <HotelGallerySection />
          </section>
        </div>
      ))}
    </div>
  );
}

export default PlacesPage;
