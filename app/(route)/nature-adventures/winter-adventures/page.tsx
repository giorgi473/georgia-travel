"use client";

import React from "react";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ImageContent from "@/components/modules/ImageContent";
import DescriptionText from "@/components/modules/DescriptionText";
import ExploreSnapCard from "@/components/ExploreSnapCard";
import CardSwiperSlider from "@/components/CardSwiperSlider";
import MuseumExhibit from "@/components/MuseumExhibit";
import { DestinationCard } from "@/components/DestinationCard";
import Gzispar from "@/components/modules/Gzispar";
import GeorgianWonders from "@/components/GeorgianWonders";
import { Map } from "@/components/Map";
import DestinationHighlightCard from "@/components/DestinationHighlightCard";
import FeaturedLocations from "@/components/modules/FeaturedLocations";
import { componentAttributes } from "@/constants/data/natureData";

function NaturePage() {
  const { currentLanguage } = useLanguage();

  return (
    <div className="space-y-24">
      <section>
        <ImageContent {...componentAttributes[0].mainSection} />
      </section>
      <section>
        <DescriptionText {...componentAttributes[0].descriptionText} />
      </section>
      <section className="container mx-auto px-5 sm:px-8 md:px-8 lg:px-11 py-8">
        <ExploreSnapCard {...componentAttributes[0].exploreSnapCard} />
      </section>
      <section>
        <CardSwiperSlider />
      </section>
      <section>
        <MuseumExhibit {...componentAttributes[0].museumExhibit} />
      </section>
      <section className="container mx-auto px-5 sm:pl-8 sm:pr-7 md:pl-8 md:pr-7 lg:pl-11 lg:pr-10 py-8">
        <h2 className="mb-5 text-md sm:text-lg font-bold flex items-center gap-2">
          <Star size={20} className="mb-0.5 text-red-500" />
          {currentLanguage === "ka" ? "პოპულარული ტურები" : "Popular Tours"}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {componentAttributes[0].destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              {...destination}
              currentLanguage={currentLanguage}
            />
          ))}
        </div>
      </section>
      <section>
        <Gzispar
          imageSrc="/sights/festivals-in-georgia.webp"
          titleKa="ფესტივალები საქართველოში"
          titleEn="Georgian Festivals"
          descriptionKa="რა ინტერესებიც არ უნდა გქონდეს, საქართველოში შენთვის საინტერესო ფესტივალს აუცილებლად იპოვი და მიხვდები, რომ აქაურობა დაუსრულებელ გართობასა და ახალ აღმოჩენებს ყოველ ფეხის ნაბიჯზე გთავაზობს."
          descriptionEn="Georgia is home to a variety of festivals, celebrating everything from music and food to crafts and intangible traditions. Regardless of your interest field, you are going to find a festival in Georgia that suits their tastes. Experience the vibrant culture of the country and join in the fun and festivities."
          buttonTextKa="გაიგე მეტი"
          buttonTextEn="Learn More"
        />
      </section>
      <section>
        <GeorgianWonders wonders={componentAttributes[0].georgianWonders} />
      </section>
      <section className="px-5 lg:px-0">
        <Map />
      </section>
      <section>
        <DestinationHighlightCard events={componentAttributes[0].events} />
      </section>
      <section>
        <FeaturedLocations locations={componentAttributes[0].locations} />
      </section>
    </div>
  );
}

export default NaturePage;
