"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Layers2, Map } from "lucide-react";
import { images, SlideImage } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext"; // Adjust path as needed

interface PageProps {
  params: Promise<{ regionText: string }>;
}

function RegionPage({ params }: PageProps) {
  const { currentLanguage } = useLanguage();
  const [regionText, setRegionText] = React.useState<string>("");

  React.useEffect(() => {
    params.then((resolvedParams) => {
      setRegionText(resolvedParams.regionText);
    });
  }, [params]);

  // Try to find region by current language first, then by any language
  const region = images.find((r: SlideImage) => {
    const decodedRegionText = decodeURIComponent(regionText);
    return (
      r.translations[currentLanguage] === decodedRegionText ||
      r.translations.ka === decodedRegionText ||
      r.translations.en === decodedRegionText ||
      r.region === decodedRegionText
    );
  });

  if (!regionText || !region) {
    return (
      <div className="container mx-auto p-4">
        {currentLanguage === "ka" ? "რეგიონი არ მოიძებნა" : "Region not found"}
      </div>
    );
  }

  const targetWord =
    currentLanguage === "ka"
      ? "მთელ საქართველოში"
      : "throughout all of Georgia";
  const url = "/";

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden mb-16">
        <Image
          src={region.modalSrc}
          alt={region.alt}
          fill
          quality={100}
          className="object-cover"
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="absolute inset-0 flex items-center bg-black/40 justify-start px-4 sm:px-8 md:px-12 lg:px-36">
          <div className="text-white p-4 sm:p-6 rounded-lg max-w-[98%] sm:max-w-[80%] md:max-w-2xl lg:max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 md:mb-10">
              {region.translations[currentLanguage]}
            </h1>
            <div className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 md:mb-8">
              {region.description[currentLanguage]}
            </div>
            <div className="text-gray-200">
              <div className="text-base sm:text-lg md:text-lg text-white mb-2">
                {currentLanguage === "ka"
                  ? "რა დრო სჭირდება მგზავრობას:"
                  : "Travel time:"}
              </div>
              <div className="flex gap-4 sm:gap-8 md:gap-16">
                {region.citiesTimes.slice(0, 3).map((cityTime, index) => (
                  <div key={index} className="mx-2">
                    <h4 className="text-sm sm:text-md md:text-md font-semibold mb-1 sm:mb-2 md:mb-2 text-gray-200">
                      {cityTime.name[currentLanguage]}
                    </h4>
                    <div className="flex gap-1 sm:gap-2 md:gap-2">
                      {cityTime.times.map((time, timeIndex) => (
                        <span
                          key={timeIndex}
                          className="text-sm sm:text-md md:text-md font-semibold text-white"
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[90%] sm:max-w-[80%] md:max-w-2xl lg:max-w-3xl mx-auto w-full">
        <div className="mb-10 sm:mb-16 md:mb-20">
          {region.descriptionTexts.map((item, index) => {
            const parts = item.desc[currentLanguage].split(targetWord);
            return (
              <div key={index}>
                <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4">
                  {item.header[currentLanguage]}
                </h1>
                {item.img && (
                  <Image
                    src={item.img}
                    alt="images"
                    width={500}
                    height={500}
                    className="w-full h-auto rounded-lg object-contain mb-5"
                  />
                )}
                <p className="text-sm sm:text-md md:text-md mb-2 sm:mb-3 md:mb-5 whitespace-pre-line">
                  {parts.map((part, partIndex) => (
                    <span key={partIndex}>
                      {part}
                      {partIndex < parts.length - 1 && (
                        <Link
                          href={url}
                          rel="noopener noreferrer"
                          className="text-red-500 hover:text-gray-700"
                        >
                          {targetWord}
                        </Link>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px]">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-red-500 rounded-full p-2">
                <Map className="text-white" />
              </div>
              <p className="text-xs sm:text-sm md:text-sm text-gray-600">
                {currentLanguage === "ka" ? "სანახაობა" : "Sightseeing"}
              </p>
              {region.range.map((item, index) => (
                <p key={index} className="text-xs sm:text-sm md:text-sm">
                  {item.min}
                </p>
              ))}
            </div>
            <div className="w-20 sm:w-0 sm:h-16 md:h-20 border-t-2 sm:border-t-0 sm:border-l-2 border-gray-300" />
            <div className="flex flex-col items-center gap-2">
              <div className="bg-red-500 rounded-full p-2">
                <Layers2 className="text-white" />
              </div>
              <p className="text-xs sm:text-sm md:text-sm text-gray-600">
                {currentLanguage === "ka" ? "აქტივობა" : "Activity"}
              </p>
              {region.range.map((item, index) => (
                <p key={index} className="text-xs sm:text-sm md:text-sm">
                  {item.max}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegionPage;
