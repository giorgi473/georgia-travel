"use client";

import React, { useState } from "react";
import Image from "next/image";
import { tabContent } from "@/constants/data/data";

export default function Page() {
  const [activeTab, setActiveTab] = useState<string>("თბილისი");

  const handleTabClick = (city: string) => {
    setActiveTab(city);
  };

  return (
    <div className="lg:pl-2">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl -mt-3 mb-10 font-semibold text-gray-800">
          ადგილობრივი ტრანსპორტი
        </h3>
        <div className="mb-8">
          {/* Tab Navigation */}
          <div className="flex space-x-2 sm:space-x-4 overflow-x-auto pb-2">
            {tabContent.map((tab) => (
              <button
                key={tab.city}
                onClick={() => handleTabClick(tab.city)}
                className={`px-4 py-2 rounded-full text-xs sm:text-base lg:py-2 lg:px-6 font-medium transition-colors duration-200 cursor-pointer ${
                  activeTab === tab.city
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
                aria-selected={activeTab === tab.city}
                role="tab"
              >
                {tab.city}
              </button>
            ))}
          </div>
          {/* Tab Content */}
          <div className="mt-6">
            {tabContent.map(
              (tab) =>
                activeTab === tab.city && (
                  <div key={tab.city} role="tabpanel" className="bg-white">
                    <div className="space-y-4 mb-8">
                      {tab.description.split("\n\n").map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-sm sm:text-base text-gray-600"
                          dangerouslySetInnerHTML={{ __html: paragraph.trim() }}
                        />
                      ))}
                    </div>
                    {tab.image && (
                      <div className="relative w-full h-48 sm:h-[520px] mb-4 rounded-lg overflow-hidden">
                        <Image
                          src={tab.image}
                          alt={`${tab.city} transport`}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="space-y-4 mb-8">
                      {tab.aditionalDescription
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
