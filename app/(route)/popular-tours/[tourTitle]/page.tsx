"use client";

import { useState } from "react";
import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Heart } from "lucide-react";
import { stunningNatureScenes } from "@/constants/data/popularToursData";
import { HeroSection } from "@/components/hero-section";
import ButtonWrapper from "@/components/ButtonWrapper";

interface Props {
  params: Promise<{ tourTitle: string }>;
}

export default function TourPage({ params }: Props) {
  const { tourTitle } = use(params);
  const id = parseInt(tourTitle.split("-").pop() || "0", 10);
  const tour = stunningNatureScenes.find((scene) => scene.id === id);
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  if (!tour) {
    notFound();
  }

  return (
    <>
      <div>
        <HeroSection
          image="/popular-tours/lukhi-okrotskali-lakes-gnta.webp"
          title={`${tour.title}`}
          description={`${tour.descriptin}`}
          overlay="bg-black/40"
          button="დაბრუნება"
          href="/popular-tours"
          tours="ტურები საქართველოში"
          className="h-[410px] mb-10"
        />
      </div>
      <div className="container mx-auto px-5 sm:px-8 md:px-8 lg:px-10 py-10">
        <div>
          <div>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 mb-[140px]">
              <div className="flex-1 flex flex-col justify-between gap-10">
                <h1 className="text-4xl font-bold">{tour.title}</h1>
                <p className="text-gray-600">{tour.descriptin}</p>
                <div className="flex flex-row gap-16">
                  <div>
                    <p className="text-sm text-gray-600">დრო</p>
                    <span className="text-lg text-black font-bold">
                      {tour.time}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">მანძილი</p>
                    <span className="text-lg text-black font-bold">
                      {tour.distance}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">სირთულე</p>
                    <span className="text-lg text-black font-bold">
                      {tour.difficulty}
                    </span>
                  </div>
                </div>
                <button
                  className="flex items-center gap-4 cursor-pointer group"
                  onClick={handleButtonClick}
                >
                  <div
                    className={`border w-fit p-3 rounded-full ${
                      isActive ? "bg-red-500" : "border-red-500"
                    } group-hover:bg-red-500 group-hover:text-white transition-all duration-200 ease-in-out`}
                  >
                    <Heart
                      size={20}
                      className={`${
                        isActive ? "text-white" : "text-red-500"
                      } group-hover:text-white transition-all duration-200 ease-in-out`}
                    />
                  </div>
                  <div
                    className={`text-md font-bold ${
                      isActive ? "text-red-500 px-1" : "text-red-500"
                    } group-hover:px-1 transition-all duration-200 ease-in-out`}
                  >
                    მარშრუტებში დამატება
                  </div>
                </button>
              </div>
              <div className="flex-1">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            {/* Sub-Tours Section */}
            {tour.tours && tour.tours.length > 0 && (
              <div className="mt-10">
                <div className="flex flex-col gap-6">
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
                          alt={subTour.title || "Tour Image"}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="lg:w-1/2 flex flex-col justify-center gap-10">
                        <h3 className="text-4xl font-semibold">
                          {subTour.title}
                        </h3>
                        <p className="text-gray-600">{subTour.description}</p>
                        <div>
                          <ButtonWrapper />
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
    </>
  );
}
