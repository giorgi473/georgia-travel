"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DiscoveryCard } from "@/constants/get/data";
import { useLanguage } from "@/context/LanguageContext";

interface DiscoveryCardsProps {
  cards: DiscoveryCard[];
  title?: { ka: string; en: string }; // Optional title for reusability
  buttonText?: { ka: string; en: string }; // Optional button text for reusability
}

export default function DiscoveryCards({
  cards,
  title = { ka: "გაუცანი ბოლოს", en: "Discover More" },
  buttonText = { ka: "ყველას ნახვა", en: "View All" },
}: DiscoveryCardsProps) {
  const { currentLanguage } = useLanguage(); // Get the current language from context

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {title[currentLanguage]} {/* Display title in current language */}
        </h2>
        <Button
          variant="ghost"
          className="text-red-500 hover:text-red-600 hover:bg-red-50"
        >
          {buttonText[currentLanguage]} →{" "}
          {/* Display button text in current language */}
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={card.image || "/placeholder.svg"}
                alt={card.imageAlt[currentLanguage]} // Use alt text in current language
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-lg md:text-xl font-bold mb-2 text-balance">
                  {card.title[currentLanguage]}{" "}
                  {/* Display card title in current language */}
                </h3>
                <p className="text-white/90 text-sm line-clamp-2 text-pretty">
                  {card.description[currentLanguage]}{" "}
                  {/* Display card description in current language */}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
