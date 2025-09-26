"use client";

import React, { useState } from "react";
import Image from "next/image";
import { tabContent } from "@/constants/data/data";
import { useLanguage } from "@/context/LanguageContext";

export default function LocalTransportPage() {
  const { currentLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>(tabContent[0].city.ka);

  const handleTabClick = (city: string) => {
    setActiveTab(city);
  };

  return (
    <div className="lg:pl-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl -mt-3 font-semibold text-gray-800">
            {currentLanguage === "ka"
              ? "ადგილობრივი ტრანსპორტი"
              : "Local Transport"}
          </h3>
        </div>
        <div className="mb-8">
          <div className="flex space-x-2 sm:space-x-4 overflow-x-auto pb-2">
            {tabContent.map((tab) => (
              <button
                key={tab.city.ka}
                onClick={() => handleTabClick(tab.city.ka)}
                className={`px-4 py-2 rounded-full text-xs sm:text-base lg:py-2 lg:px-6 font-medium transition-colors duration-200 cursor-pointer ${
                  activeTab === tab.city.ka
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
                aria-selected={activeTab === tab.city.ka}
                role="tab"
              >
                {tab.city[currentLanguage]}
              </button>
            ))}
          </div>
          <div className="mt-6">
            {tabContent.map(
              (tab) =>
                activeTab === tab.city.ka && (
                  <div key={tab.city.ka} role="tabpanel" className="bg-white">
                    <div className="space-y-4 mb-8">
                      {tab.description[currentLanguage]
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
                    {tab.image && (
                      <div className="relative w-full h-48 sm:h-[520px] mb-4 rounded-lg overflow-hidden">
                        <Image
                          src={tab.image}
                          alt={`${tab.city[currentLanguage]} transport`}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="space-y-4 mb-8">
                      {tab.aditionalDescription[currentLanguage]
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
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
