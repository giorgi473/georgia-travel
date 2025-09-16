"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Layers2, MapIcon } from "lucide-react";
import Link from "next/link";
import { DestinationCard } from "@/components/DestinationCard";
import RecipeGallery from "@/components/RecipeGallery";
import Slider from "@/components/Slider";
import {
  Card,
  cardSliderImages,
  Destination,
  RangeItem,
} from "@/constants/data/placeData";
import GeoCultureCard from "@/components/GeoCultureCard";
import { Map } from "@/components/Map";

export default function CardPage() {
  const card: Card = cardSliderImages[2]; // Use the first card for static display
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsActive(!isActive);
  };

  return (
    <div className="space-y-16">
      <div className="relative w-full h-screen">
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 flex flex-col justify-center px-5 sm:px-8 lg:px-11 container mx-auto z-20">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-6">
            {card.title}
          </h1>
          <p className="text-sm sm:text-base max-w-xl text-gray-300 sm:mt-3 mb-6">
            {card.additionalDescription}
          </p>
          <p className="text-white font-bold text-sm mb-2">
            რა დრო სჭირდება მგზავრობას:
          </p>
          <div className="text-white flex space-x-8 sm:flex sm:space-x-16 space-y-8">
            {card.regionTime.map((region, index: number) => (
              <div key={index} className="font-semibold">
                <div className="text-sm sm:text-base text-gray-300 mb-1">
                  {region.city}
                </div>
                <h1 className="text-sm">{region.time}</h1>
              </div>
            ))}
          </div>
          <div className="mb-5">
            <button
              className="flex items-center gap-4 cursor-pointer group"
              onClick={handleClick}
            >
              <span
                className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 border-2 rounded-full group-hover:bg-red-500 group-hover:border-red-500 transition-colors duration-300 ${
                  isActive ? "bg-red-500 border-red-500" : ""
                }`}
              >
                <Heart size={16} className="text-white" />
              </span>
              <h3
                className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${
                  isActive ? "text-red-500" : "text-white"
                }`}
              >
                მარშრუტებში დამატება
              </h3>
            </button>
          </div>
          <div className="absolute bottom-8">
            <Link href={card.link} target="_blank">
              <button className="cursor-pointer text-white border border-red-500 rounded-lg px-4 py-2 hover:bg-red-500 transition-all duration-200 ease-in-out">
                რუკაზე ნახვა
              </button>
            </Link>
          </div>
        </div>
      </div>
      <section>
        <div className="mx-auto space-y-4 px-5 sm:container sm:px-8 lg:max-w-4xl">
          <div>
            <h3 className="text-3xl font-bold">{card.anotherSection.name1}</h3>
          </div>
          <div className="space-y-4 text-gray-800">
            {card.anotherSection.description
              ?.split("\n\n")
              .map((paragraph: string, idx: number) => (
                <p key={idx} className="text-gray-800">
                  {paragraph.trim()}
                </p>
              ))}
          </div>
          <div>
            <p className="text-3xl font-bold">{card.anotherSection.name2}</p>
          </div>
          <div>
            {Array.isArray(card.anotherSection.image) ? (
              card.anotherSection.image.map(
                (img: string, idx: number) =>
                  img && (
                    <Image
                      key={idx}
                      src={img}
                      alt={`image-${idx}`}
                      width={600}
                      height={500}
                      className="rounded-md"
                    />
                  )
              )
            ) : card.anotherSection.image &&
              card.anotherSection.image !== "" ? (
              <Image
                src={card.anotherSection.image}
                alt="section image"
                width={1000}
                height={500}
                className="rounded-md"
              />
            ) : null}
          </div>
          <div className="space-y-4 text-gray-800">
            {card.anotherSection.description2
              ?.split("\n\n")
              .map((paragraph: string, idx: number) => (
                <p key={idx} className="text-gray-800">
                  {paragraph.trim()}
                </p>
              ))}
          </div>
          <div>
            <p className="text-3xl font-bold">{card.anotherSection.name3}</p>
          </div>
          <div className="space-y-4 text-gray-800">
            {card.anotherSection.description3
              ?.split("\n\n")
              .map((paragraph: string, idx: number) => (
                <p key={idx} className="text-gray-800">
                  {paragraph.trim()}
                </p>
              ))}
          </div>
          <div>
            {Array.isArray(card.anotherSection.image2) ? (
              card.anotherSection.image2.map(
                (img: string, idx: number) =>
                  img && (
                    <Image
                      key={idx}
                      src={img}
                      alt={`image-${idx}`}
                      width={600}
                      height={500}
                      className="rounded-md"
                    />
                  )
              )
            ) : card.anotherSection.image2 &&
              card.anotherSection.image2 !== "" ? (
              <Image
                src={card.anotherSection.image2}
                alt="section image"
                width={1000}
                height={500}
                className="rounded-md"
              />
            ) : null}
          </div>
          <div>
            <p className="text-3xl font-bold">{card.anotherSection.name4}</p>
          </div>
          <div className="space-y-4 text-gray-800">
            {card.anotherSection.description4
              ?.split("\n\n")
              .map((paragraph: string, idx: number) => (
                <p key={idx} className="text-gray-800">
                  {paragraph.trim()}
                </p>
              ))}
          </div>
          <div>
            <p className="text-3xl font-bold">{card.anotherSection.name5}</p>
          </div>
          <div className="space-y-4 text-gray-800">
            {card.anotherSection.description5
              ?.split("\n\n")
              .map((paragraph: string, idx: number) => (
                <p key={idx} className="text-gray-800">
                  {paragraph.trim()}
                </p>
              ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-16 select-none">
          <div className="flex sm:flex-row items-center justify-between w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px]">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-red-500 rounded-full p-2">
                <MapIcon className="text-white" />
              </div>
              <p className="text-xs sm:text-sm md:text-lg text-gray-600">
                სანახაობა
              </p>
              {card.range.slice(0, 1).map((item: RangeItem, index: number) => (
                <p key={index} className="text-xs sm:text-sm md:text-sm">
                  {item.min}
                </p>
              ))}
            </div>
            <div className="h-20 border-l-2 sm:h-20 md:h-20 border-t-2 sm:border-t-0 sm:border-l-2 border-gray-200" />
            <div className="flex flex-col items-center gap-2">
              <div className="bg-red-500 rounded-full p-2">
                <Layers2 className="text-white" />
              </div>
              <p className="text-xs sm:text-sm md:text-lg text-gray-600">
                აქტივობა
              </p>
              {card.range.slice(1, 2).map((item: RangeItem, index: number) => (
                <p key={index} className="text-xs sm:text-sm md:text-sm">
                  {item.max}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-5 sm:pl-8 sm:pr-7 md:pl-8 md:pr-7 lg:pl-11 lg:pr-10 py-8">
        <h1 className="mb-5 text-md sm:text-lg font-bold">პოპულარული ტურები</h1>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {card.destinations.map((destination: Destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>
      </section>
      <section>
        <RecipeGallery items={card.array} />
      </section>
      <section className="mb-[100px]">
        <Slider data={card.slideCard} />
      </section>
      <section className="mb-[100px]">
        <GeoCultureCard data={card.ukrGeoCharm} />
      </section>
      <section>
        <div className="px-5 lg:px-0">
          <Map />
        </div>
      </section>
    </div>
  );
}
