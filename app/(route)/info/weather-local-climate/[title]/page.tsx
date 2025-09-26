"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { climateData } from "@/constants/data/data";
import { useLanguage } from "@/context/LanguageContext";

function DetailsPage() {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title as string);
  const { currentLanguage } = useLanguage();

  const currentService = climateData.find(
    (climate) => climate.title.ka === decodedTitle
  );

  return (
    <div className="lg:pl-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 -mt-2">
            {currentService
              ? currentService.title[currentLanguage]
              : decodedTitle}
          </h3>
        </div>
        <div>
          {currentService && currentService.additionalInfo && (
            <div className="space-y-6 sm:space-y-8">
              {currentService.additionalInfo.map((info, index) => (
                <div key={index}>
                  <p className="text-gray-700 text-sm sm:text-base mb-4">
                    {info.description?.[currentLanguage] || ""}
                  </p>
                  {info.image && (
                    <div className="w-full rounded-lg overflow-hidden mb-4 sm:mb-5">
                      <Image
                        src={info.image}
                        alt={currentService.title[currentLanguage]}
                        width={1000}
                        height={200}
                        className="object-cover w-full h-auto"
                      />
                    </div>
                  )}
                  {info.title && (
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-5">
                      {info.title[currentLanguage]}
                    </h3>
                  )}
                  <div className="space-y-4 mb-8 text-sm sm:text-base text-gray-600">
                    {info.additionalDescription[currentLanguage]
                      .split("\n\n")
                      .map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-sm sm:text-base text-gray-600"
                          dangerouslySetInnerHTML={{
                            __html: paragraph.trim(),
                          }}
                        />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
