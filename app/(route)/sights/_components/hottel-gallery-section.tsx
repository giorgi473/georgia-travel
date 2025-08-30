"use client";

import type React from "react";

import Image from "next/image";
import { useState } from "react";

interface GalleryItem {
  image: string;
  title: string;
  id?: string;
}

interface HotelGallerySectionProps {
  sectionLabel: string;
  mainTitle: string;
  description: string;
  buttonText: string;
  galleryData: GalleryItem[];
  onButtonClick?: () => void;
  onGalleryItemClick?: (item: GalleryItem, index: number) => void;
}

function HotelGallerySection({
  sectionLabel,
  mainTitle,
  description,
  buttonText,
  galleryData,
  onButtonClick,
  onGalleryItemClick,
}: HotelGallerySectionProps) {
  const [imageLoadingStates, setImageLoadingStates] = useState<
    Record<number, boolean>
  >({});

  const handleImageLoad = (index: number) => {
    setImageLoadingStates((prev) => ({ ...prev, [index]: false }));
  };

  const handleImageLoadStart = (index: number) => {
    setImageLoadingStates((prev) => ({ ...prev, [index]: true }));
  };

  const handleKeyDown = (
    event: React.KeyboardEvent,
    item: GalleryItem,
    index: number
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onGalleryItemClick?.(item, index);
    }
  };

  return (
    <div aria-labelledby="gallery-section-title">
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-2 space-y-6">
          <div className="inline-block">
            <span className="text-red-500 font-semibold text-sm uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full">
              {sectionLabel}
            </span>
          </div>
          <h2
            id="gallery-section-title"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight text-balance"
          >
            {mainTitle}
          </h2>
          <p className="text-gray-600 leading-relaxed text-base text-pretty">
            {description}
          </p>
          <button
            onClick={onButtonClick}
            className="group inline-flex items-center gap-2 text-red-500 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-300 ease-in-out border border-red-500 rounded-lg py-3 px-6 font-medium"
            aria-label={`${buttonText} - გაიგეთ მეტი კურორტების შესახებ`}
          >
            {buttonText}
          </button>
        </div>

        <div className="lg:col-span-3">
          <div
            className="grid md:grid-cols-2 gap-6"
            role="grid"
            aria-label="კურორტების გალერეა"
          >
            {galleryData.map((item, index) => (
              <div
                key={item.id || index}
                className="group cursor-pointer focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 rounded-2xl"
                role="gridcell"
              >
                <div
                  className="relative h-96 md:h-[520px] overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
                  tabIndex={0}
                  role="button"
                  aria-label={`${item.title} - დააჭირეთ დეტალებისთვის`}
                  onClick={() => onGalleryItemClick?.(item, index)}
                  onKeyDown={(e) => handleKeyDown(e, item, index)}
                >
                  {imageLoadingStates[index] && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <Image
                    src={
                      item.image ||
                      "/placeholder.svg?height=520&width=400&query=hotel resort"
                    }
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 group-focus:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onLoadStart={() => handleImageLoadStart(index)}
                    onLoad={() => handleImageLoad(index)}
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-base md:text-lg leading-tight group-hover:text-red-100 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
                      <span className="text-red-300 text-sm font-medium">
                        დეტალების ნახვა →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelGallerySection;
