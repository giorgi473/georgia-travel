"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface DestinationCardProps {
  id: string;
  title: { ka: string; en: string };
  description: { ka: string; en: string };
  image: string;
  duration: { ka: string; en: string };
  activities: { ka: string; en: string };
  price: string;
  currency: { ka: string; en: string };
}

export function DestinationCard({
  title,
  description,
  image,
  duration,
  activities,
  price,
  currency,
}: DestinationCardProps) {
  const { currentLanguage } = useLanguage();

  return (
    <Card className="overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200 p-0 flex flex-col h-full">
      <div className="relative h-96 w-full overflow-hidden group">
        <Image
          src={image || "/placeholder.svg"}
          alt={title[currentLanguage]}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        <button className="absolute top-5 right-5">
          <Heart className="w-5 h-5 text-white hover:text-red-500 transition-all duration-200 ease-in-out cursor-pointer" />
        </button>
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
          <MapPin className="w-4 h-4 text-red-500" />
          <span className="text-sm font-medium">
            {duration[currentLanguage]} • {activities[currentLanguage]}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 text-balance">
          {title[currentLanguage]}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 text-pretty flex-1">
          {description[currentLanguage]}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex gap-8">
            <div>
              <p className="text-xs text-gray-500 mb-1">
                {currentLanguage === "ka" ? "ღირებულება" : "Cost"}
              </p>
              <p className="text-lg font-semibold text-gray-900">
                {price}
                {currency[currentLanguage]}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">
                {currentLanguage === "ka" ? "ხანგრძლივობა" : "Duration"}
              </p>
              <p className="text-lg font-semibold text-gray-900">
                {duration[currentLanguage]}
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            className="text-red-500 border-red-200 hover:bg-red-50 hover:border-red-300 bg-transparent"
          >
            {currentLanguage === "ka" ? "გაიგე მეტი" : "Learn More"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
