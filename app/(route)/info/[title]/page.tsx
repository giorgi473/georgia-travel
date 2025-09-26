"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { services } from "@/constants/data/data";
import { useLanguage } from "@/context/LanguageContext";

function DetailsPage() {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title as string);
  const { currentLanguage } = useLanguage();

  const currentService = services.find(
    (service) => service.title.en === decodedTitle
  );

  return (
    <div className="lg:pl-2">
      <div className="max-w-7xl mx-auto">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 -mt-2">
            {currentService?.title[currentLanguage] || decodedTitle}
          </h3>
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
                        alt="Service info"
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
                  <div className="text-gray-600 text-sm sm:text-base space-y-4">
                    {info.additionalDescription[currentLanguage]
                      .split("\n\n")
                      .map((paragraph, idx) => (
                        <p
                          key={idx}
                          className="text-gray-600 text-sm sm:text-base"
                        >
                          {paragraph.trim()}
                        </p>
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
