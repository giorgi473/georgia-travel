"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { travelMoments } from "@/constants/data/data";
import { useLanguage } from "@/context/LanguageContext";

function GeorgiaTravelMoments() {
  const { currentLanguage } = useLanguage();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (momentId: number) => {
    setActiveCard(activeCard === momentId ? null : momentId);
  };

  const handleOutsideClick = () => {
    setActiveCard(null);
  };

  return (
    <div onClick={handleOutsideClick}>
      <div className="py-6 container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2 px-4 sm:pl-8 md:pl-8 lg:pl-10 lg:flex-row">
            <h5 className="text-base font-serif sm:text-lg">
              {currentLanguage === "ka"
                ? "გამოგვყევი ინსტაგრამზე და გაგვიზიარე თავგადასავალი"
                : "Follow us on Instagram and share your adventure"}
            </h5>
            <span className="text-md font-semibold lg:pt-0.5">
              #GeorgiaTravelMoments
            </span>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 px-4 lg:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-0 w-full">
          {travelMoments.map((moment) => (
            <div
              key={moment.id}
              className={`w-full relative group overflow-hidden rounded-md lg:rounded-none cursor-pointer ${
                activeCard === moment.id ? "active" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                handleCardClick(moment.id);
              }}
            >
              <div
                className={`text-white absolute top-5 right-5 z-10 transition-all duration-300 transform
                  ${activeCard === moment.id || "lg:opacity-0 lg:translate-y-2"}
                  lg:group-hover:opacity-100 lg:group-hover:translate-y-0
                  ${
                    activeCard === moment.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 lg:opacity-0 lg:translate-y-2"
                  }
                `}
              >
                <Link
                  href={moment.link}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="drop-shadow-lg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
              </div>
              <Image
                src={moment.image}
                alt={moment.alt[currentLanguage]}
                width={200}
                height={200}
                className={`w-full h-60 object-cover rounded-md lg:rounded-none transition-transform duration-500
                  ${activeCard === moment.id || "lg:group-hover:scale-110"}
                  ${
                    activeCard === moment.id
                      ? "scale-110"
                      : "lg:group-hover:scale-110"
                  }
                `}
              />
              <div
                className={`absolute inset-0 bg-black/50 to-transparent transition-opacity duration-300
                  ${
                    activeCard === moment.id ||
                    "lg:opacity-0 lg:group-hover:opacity-100"
                  }
                  ${
                    activeCard === moment.id
                      ? "opacity-100"
                      : "opacity-0 lg:opacity-0 lg:group-hover:opacity-100"
                  }
                `}
              ></div>
              <div
                className={`absolute bottom-5 left-4 right-0 p-4 transition-all duration-300 ease-in-out transform
                  ${
                    activeCard === moment.id ||
                    "lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0"
                  }
                  ${
                    activeCard === moment.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0"
                  }
                `}
              >
                <h6
                  className="font-bold text-lg mb-2 text-white drop-shadow-lg 
                             [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]
                             transform translate-y-2 group-hover:translate-y-0 
                             transition-transform duration-300 delay-100"
                >
                  {moment.title[currentLanguage]}
                </h6>
                <p
                  className="text-sm text-white drop-shadow-md
                           [text-shadow:_1px_1px_2px_rgb(0_0_0_/_70%)]
                           transform translate-y-2 group-hover:translate-y-0 
                           transition-transform duration-300 delay-150"
                >
                  {moment.description[currentLanguage]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GeorgiaTravelMoments;
