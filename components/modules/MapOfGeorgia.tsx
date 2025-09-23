"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { images } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

const MapOfGeorgia: React.FC = () => {
  const router = useRouter();
  const { currentLanguage } = useLanguage();

  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  useEffect(() => {
    const svg = svgRef.current;
    const tooltip = tooltipRef.current;

    if (svg && tooltip) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = svg.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const tooltipWidth = tooltip.getBoundingClientRect().width;
        tooltip.style.left = `${x - tooltipWidth / 2}px`;
        tooltip.style.top = `${y - 48}px`;
      };

      const handleMouseOver = (e: Event) => {
        const target = e.target as SVGPathElement;
        if (target.tagName === "path" && tooltip) {
          const regionName = target.getAttribute("data-title") || "";
          const region = images.find((img) => img.region === regionName);
          tooltip.textContent = region
            ? region.translations[currentLanguage]
            : regionName;
          tooltip.style.display = "block";
          setActiveRegion(regionName);

          const slideIndex = images.findIndex(
            (img) => img.region === regionName
          );
          if (slideIndex !== -1 && swiperRef.current) {
            swiperRef.current.slideTo(slideIndex);
            setActiveSlide(slideIndex);
          }
        }
      };

      const handleMouseOut = () => {
        if (tooltip) tooltip.style.display = "none";
        setActiveRegion(null);
      };

      svg.addEventListener("mousemove", handleMouseMove);
      svg.querySelectorAll("path").forEach((path) => {
        path.addEventListener("mouseover", handleMouseOver);
        path.addEventListener("mouseout", handleMouseOut);
      });

      return () => {
        svg.removeEventListener("mousemove", handleMouseMove);
        svg.querySelectorAll("path").forEach((path) => {
          path.removeEventListener("mouseover", handleMouseOver);
          path.removeEventListener("mouseout", handleMouseOut);
        });
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images, currentLanguage]);

  const handleImageClick = (region: string) => {
    router.push(`/region/${encodeURIComponent(region)}`);
  };

  const handlePathClick = (region: string) => {
    router.push(`/region/${encodeURIComponent(region)}`);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-8 lg:px-11">
      <h2 className="max-w-[630px] text-2xl sm:text-3xl font-semibold md:text-4xl pb-12 md:pb-[70px] text-gray-800">
        {currentLanguage === "ka"
          ? "ესტუმრე 11 რეგიონს და სხვადასხვა უნიკალურ ქალაქს"
          : "Visit 11 regions and various unique cities"}
      </h2>
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-10 items-center justify-center">
        <div className="w-full lg:w-1/2 rounded-lg relative select-none">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{ clickable: true }}
            className="w-full"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          >
            {images.map((image) => (
              <SwiperSlide
                key={image.id}
                className="border rounded-lg select-none"
              >
                <div className="relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-[300px] object-cover rounded-t-lg cursor-pointer"
                    priority={image.id === 1}
                    onClick={() => handleImageClick(image.region)}
                  />
                </div>
                <div className="px-8 py-5 bg-gray-50 rounded-b-lg">
                  {image.title.map((titleItem) => (
                    <div key={titleItem.id}>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                        {titleItem.text[currentLanguage] ||
                          titleItem.text["ka"]}
                      </h3>
                      <h1 className="text-sm text-gray-500 mb-2">
                        {currentLanguage === "ka"
                          ? "მიმართულებები"
                          : "Destinations"}
                      </h1>
                      <ul className="text-gray-600 flex items-center gap-3">
                        {titleItem.bla.map((item, index) => (
                          <li key={index} className="text-gray-500">
                            {typeof item === "object"
                              ? item[currentLanguage] || item["ka"]
                              : item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className="swiper-button-prev-custom absolute left-1 top-[150px] transform -translate-y-1/2 cursor-pointer w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-400 z-10 select-none"
            style={{ transform: "scale(0.7)" }}
          >
            <ArrowBigLeftDash size={20} className="text-red-500" />
          </div>
          <div
            className="swiper-button-next-custom absolute right-1 top-[150px] transform -translate-y-1/2 cursor-pointer w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-400 z-10 select-none"
            style={{ transform: "scale(0.7)" }}
          >
            <ArrowBigRightDash size={20} className="text-red-500" />
          </div>
        </div>
        <div className="w-full relative mt-10 lg:mt-24 ml-8 sm:ml-10 md:ml-12">
          <svg
            ref={svgRef}
            viewBox="0 0 900 500"
            className="w-full h-auto"
            preserveAspectRatio="xMidYMid meet"
          >
            <style>
              {`
                .tooltip {
                  position: absolute;
                  background: white;
                  border: 1px solid #837f7c;
                  padding: 9px 12px;
                  border-radius: 6px;
                  font-size: 16px;
                  pointer-events: none;
                  display: none;
                  z-index: 10;
                  white-space: nowrap;
                }
              `}
            </style>
            <rect fill="#ffffff" />
            {images.map((image) => (
              <path
                key={image.region}
                data-title={image.region}
                d={image.path}
                stroke="#b7b7b7"
                fill={
                  activeRegion === image.region ||
                  activeSlide ===
                    images.findIndex((img) => img.region === image.region)
                    ? "red"
                    : image.region === "Abkhazia" ||
                      image.region === "Samachablo" ||
                      image.region === "Adjara" ||
                      image.region === "Kakheti" ||
                      image.region === "Tbilisi"
                    ? "#eeebf3"
                    : "#ffffff"
                }
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cursor-pointer hover:fill-red-500"
                onClick={() => handlePathClick(image.region)}
              />
            ))}
          </svg>
          <div
            ref={tooltipRef}
            className="tooltip font-medium select-none"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MapOfGeorgia;
