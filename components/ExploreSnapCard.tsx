"use client";

import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

interface SnapData {
  img?: string;
  titleKa: string;
  titleEn: string;
  descriptionKa: string;
  descriptionEn: string;
}

interface ExploreSnapCardProps {
  labelKa?: string;
  labelEn?: string;
  firstSnap: SnapData;
  secondSnap: SnapData;
  thirdSnap: SnapData;
}

function ExploreSnapCard({
  labelKa,
  labelEn,
  firstSnap,
  secondSnap,
  thirdSnap,
}: ExploreSnapCardProps) {
  const { currentLanguage } = useLanguage();

  const uiTexts = {
    untitledSnap: {
      ka: "უსახელო სნეპი",
      en: "Untitled Snap",
    },
    noDescription: {
      ka: "აღწერა არ არის ხელმისაწვდომი.",
      en: "No description available.",
    },
  };
  const label = currentLanguage === "ka" ? labelKa : labelEn;
  const snaps = [firstSnap, secondSnap, thirdSnap];

  return (
    <>
      <div className="mb-4">
        <CardTitle
          className="text-lg sm:text-lg md:text-xl font-semibold text-gray-800"
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
        >
          {label || uiTexts.untitledSnap[currentLanguage]}
        </CardTitle>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {snaps.map((snap, index) => {
          const title = currentLanguage === "ka" ? snap.titleKa : snap.titleEn;
          const description =
            currentLanguage === "ka" ? snap.descriptionKa : snap.descriptionEn;

          return (
            <Card
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden h-[500px]"
            >
              <div className="relative h-full">
                <Image
                  src={snap.img || "/fallback-image.jpg"}
                  alt={title || uiTexts.untitledSnap[currentLanguage]}
                  layout="fill"
                  className="object-cover hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 pointer-events-none">
                  <CardContent className="p-0">
                    <CardTitle
                      className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 pr-5"
                      style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                    >
                      {title || uiTexts.untitledSnap[currentLanguage]}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base text-gray-200 line-clamp-2 pr-4">
                      {description || uiTexts.noDescription[currentLanguage]}
                    </CardDescription>
                  </CardContent>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default ExploreSnapCard;
