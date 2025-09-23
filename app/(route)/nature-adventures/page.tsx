/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import CardSwiperSlider from "@/components/CardSwiperSlider";
import DestinationsSwiper from "@/components/destinations-swiper";
import { activities } from "@/constants/data/data";
import ImageContent from "@/components/modules/ImageContent";
import { AdventureActivitie } from "@/components/modules/AdventureActivitie";
import Gzispar from "@/components/modules/Gzispar";
import AdventureHero from "@/components/modules/AdventureHero";
import DiscoveryCards from "@/components/modules/DiscoveryCard";
import { DestinationCard } from "@/components/modules/DestinationCard";
import { useLanguage } from "@/context/LanguageContext";
import {
  adventureData,
  destinations,
  discoveryData,
} from "@/constants/get/data";

function page() {
  const { currentLanguage } = useLanguage();
  return (
    <div>
      <section className="mb-16">
        <ImageContent
          image="/bc.webp"
          title={{
            ka: "ბუნება და თავგადასავლები",
            en: "Nature and Adventures",
          }}
          description={{
            ka: "გაემგზავრე თოვლიანი მთებისკენ, მოინახულე სანაპიროები, დაათვალიერე იდუმალი ტყეები, პირქუში მყინვარები, აღმოაჩინე ურბანული კულტურა და ისტორიული ქალაქების ყოველდღიური ცხოვრება.",
            en: "Travel to snowy mountains, visit coastlines, explore mysterious forests and rugged glaciers, and discover urban culture and the daily life of historic cities.",
          }}
          buttonText={{
            ka: "გაიგე მეტი",
            en: "Learn More",
          }}
          buttonHref="/"
          spanText={{
            ka: "ბუნება და თავგადასავლები",
            en: "Nature and Adventures",
          }}
        />
      </section>
      <section className="container mx-auto px-5 sm:px-8 md:px-8 lg:px-11 py-8 mb-16">
        <AdventureActivitie
          badgeText={{
            ka: "აღმოჩენა",
            en: "Discovery",
          }}
          title={{
            ka: "საზაფხულო",
            en: "Summer",
          }}
          subtitle={{
            ka: "აქტივობები",
            en: "Activities",
          }}
          description={{
            ka: "ზაფხული საქართველოში საკმაოდ დატვირთული სეზონია - ზღვისპირა ქალაქებითა და კურორტებით დაწყებული, ფესტივალებით, ექსტრემალური სპორტული აქტივობებით და სამოყვარული ლაშქრობებით დამთავრებული - ეს პერიოდი საუკეთესო დასვენების ყველა შესაძლებლობას გთავაზობთ.",
            en: "Summer in Georgia is a vibrant season - from coastal cities and resorts to festivals, extreme sports activities, and amateur hiking - this period offers every opportunity for an unforgettable vacation.",
          }}
          buttonText={{
            ka: "გაიგე მეტი",
            en: "Learn More",
          }}
          activities={activities}
        />
      </section>
      <section className="mb-16">
        <Gzispar
          imageSrc="/natural.webp"
          titleKa="აი, ამიტომ უნდა ესტუმრო ბათუმს"
          titleEn="Here's Why You Should Visit Batumi"
          descriptionKa="აქაური სუბტროპიკული კლიმატი, ეკოლოგიურად სუფთა ზღვა, მთები და კარგად განვითარებულ ტურისტული ინფრასტრუქტურა წელიწადის ნებისმიერ დროს გამორჩეულად გიმასპინძლებს და ენერგიის სრულ აღდგენაში დაგეხმარება."
          descriptionEn="The local subtropical climate, pristine sea, mountains, and well-developed tourist infrastructure will warmly welcome you any time of the year and help you fully recharge your energy."
          buttonTextKa="გაიგე მეტი"
          buttonTextEn="Learn More"
        />
      </section>
      <section className="container mx-auto px-5 sm:px-8 md:px-8 lg:px-11 py-8 mb-16">
        <AdventureHero
          adventures={adventureData}
          badgeText={{
            ka: "ავტომობილი",
            en: "Adventure",
          }}
        />
      </section>
      <section className="mb-16">
        <Gzispar
          imageSrc="/14.webp"
          titleKa="აი, ამიტომ უნდა ესტუმრო ბათუმს"
          titleEn="Here's Why You Should Visit Batumi"
          descriptionKa="აქაური სუბტროპიკული კლიმატი, ეკოლოგიურად სუფთა ზღვა, მთები და კარგად განვითარებულ ტურისტული ინფრასტრუქტურა წელიწადის ნებისმიერ დროს გამორჩეულად გიმასპინძლებს და ენერგიის სრულ აღდგენაში დაგეხმარება."
          descriptionEn="The local subtropical climate, pristine sea, mountains, and well-developed tourist infrastructure will warmly welcome you any time of the year and help you fully recharge your energy."
          buttonTextKa="გაიგე მეტი"
          buttonTextEn="Learn More"
        />
      </section>
      <section className="container mx-auto px-5 sm:px-8 md:px-8 lg:px-11 py-8 mb-16">
        <DiscoveryCards
          cards={discoveryData}
          title={{
            ka: "გაუცანი ბოლოს",
            en: "Discover More",
          }}
          buttonText={{
            ka: "ყველას ნახვა",
            en: "View All",
          }}
        />
      </section>
      <section className="mb-16">
        <CardSwiperSlider />
      </section>
      <section className="mb-16">
        <div className="container mx-auto px-5 sm:px-8 md:px-8 lg:px-11 py-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 text-balance">
              {currentLanguage === "ka"
                ? "აღმოაჩინე საქართველო"
                : "Discover Georgia"}
            </h1>
            <p className="text-md text-gray-600 text-pretty">
              {currentLanguage === "ka"
                ? "უნიკალური ტურები და დაუვიწყარი გამოცდილება საქართველოს ყველაზე ლამაზ ადგილებში"
                : "Unique tours and unforgettable experiences in Georgia's most beautiful places"}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <DestinationsSwiper />
      </section>
    </div>
  );
}

export default page;
