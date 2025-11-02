"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const imagesSwiperRef = useRef<SwiperCore | null>(null);
  const mapSwiperRef = useRef<SwiperCore | null>(null);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [activeMapSlide, setActiveMapSlide] = useState<number>(0);

  // Pagination dot labels
  const dotLabels = [
    currentLanguage === "ka" ? "მთავარი ქალაქები" : "Main cities",
    currentLanguage === "ka" ? "რა დრო გჭირდება" : "Driving Times",
  ];

  const mapSwiperSlides = [
    { type: "map" },
    { type: "image", image: images[1] },
  ];

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
          if (slideIndex !== -1 && imagesSwiperRef.current) {
            imagesSwiperRef.current.slideTo(slideIndex);
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

  // ---- CHANGE: helper for switching slides -------
  const handlePaginationClick = (idx: number) => {
    if (mapSwiperRef.current) mapSwiperRef.current.slideTo(idx);
    setActiveMapSlide(idx);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-8 lg:px-11">
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#3b3b3b] mb-16">
        {currentLanguage === "en" ? (
          <>
            Discover 11 Regions and <br /> Various Unique Cities
          </>
        ) : (
          <>
            ესტუმრე <span className="font-semibold">11</span> რეგიონს და <br />{" "}
            სხვადასხვა უნიკალურ <br /> ქალაქს
          </>
        )}
      </h3>
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-10 items-center justify-center">
        {/* images swiper */}
        <div className="w-full lg:w-[45%] rounded-lg relative select-none overflow-hidden mb-1 sm:mb-3">
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
            onSwiper={(swiper) => (imagesSwiperRef.current = swiper)}
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
                    className="w-full h-[290px] object-cover rounded-t-lg cursor-pointer"
                    priority={image.id === 1}
                    onClick={() => handleImageClick(image.region)}
                  />
                </div>
                <div className="pl-8 py-2 bg-gray-50 rounded-b-lg">
                  {image.title.map((titleItem) => (
                    <div key={titleItem.id}>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                        {titleItem.text[currentLanguage] ||
                          titleItem.text["ka"]}
                      </h3>
                      <h1 className="text-sm text-gray-500 mb-1">
                        {currentLanguage === "ka"
                          ? "მიმართულებები"
                          : "Destinations"}
                      </h1>
                      <ul className="text-gray-600 flex items-center gap-2">
                        {titleItem.bla.map((item, idx) => (
                          <li key={idx} className="text-gray-500">
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
          <div className="swiper-button-prev-custom absolute bg-gray-100 h-10 w-10 -left-5 top-[150px] -translate-y-1/2 cursor-pointer rounded-full flex items-center justify-center z-10 select-none">
            <ChevronLeft className="text-red-600 size-5 z-20 absolute left-4" />
          </div>
          <div className="swiper-button-next-custom absolute bg-gray-100 h-10 w-10 -right-5 top-[150px] -translate-y-1/2 cursor-pointer rounded-full flex items-center justify-center z-10 select-none">
            <ChevronRight className="text-red-600 size-5 z-20 absolute right-4" />
          </div>
        </div>
        {/* მარჯვენა swiper: ჰორიზონტალურად pagination+dots+text */}
        <div className="w-full lg:w-[55%] relative mt-10 lg:mt-24 ml-8 sm:ml-10 md:ml-12 lg:-mr-12">
          <div className="relative">
            {/* Responsive pagination wrapper: flex-col პატარა ეკრანზე */}
            <div
              className="
              absolute left-1/2 -ml-4 lg:-ml-0 -translate-x-1/2 -top-14
              flex flex-row sm:flex-row flex-nowrap sm:flex-nowrap
              gap-4 sm:gap-8 z-20
              items-center justify-center
              min-w-[220px] sm:min-w-[390px] md:min-w-[390px]
              px-4 sm:px-8 py-1 select-none
              "
            >
              {mapSwiperSlides.map((slide, idx) => (
                <div
                  key={slide.type}
                  className="flex flex-row items-center gap-2 sm:gap-3"
                >
                  {/* ----------- აქ CLICK-ით მეორე span-ზეც გადავყავართ ----------- */}
                  <button
                    type="button"
                    className={
                      "h-4 w-4 sm:w-6 sm:h-6 rounded-full cursor-pointer flex items-center justify-center border-2 border-red-600 bg-white transition-all"
                    }
                    style={{ outline: "none", position: "relative" }}
                    onClick={() => handlePaginationClick(idx)}
                    aria-label={dotLabels[idx]}
                  >
                    {activeMapSlide === idx && (
                      <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-red-600 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                    )}
                  </button>
                  <span
                    className={
                      activeMapSlide === idx
                        ? "font-semibold text-black text-xs sm:text-lg whitespace-nowrap cursor-pointer"
                        : "text-gray-400 text-xs sm:text-lg whitespace-nowrap cursor-pointer"
                    }
                    onClick={() => handlePaginationClick(idx)}
                  >
                    {dotLabels[idx]}
                  </span>
                </div>
              ))}
            </div>
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              loop={false}
              onSwiper={(swiper) => (mapSwiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveMapSlide(swiper.realIndex)}
              navigation={false}
              pagination={false}
              className="w-full"
            >
              {/* First slide: SVG Map */}
              <SwiperSlide key="map-svg">
                <div className="relative">
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
                            images.findIndex(
                              (img) => img.region === image.region
                            )
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
              </SwiperSlide>
              {/* Second slide: images[1] */}
              <SwiperSlide key="second-image">
                {currentLanguage === "en" ? (
                  <div className="relative mr-8 w-auto">
                    <Image
                      src={"/picture/map_driving_times_en.png"}
                      alt={images[1].alt}
                      width={600}
                      height={200}
                      className="w-auto h-auto object-cover rounded-lg md:w-[644px] lg:w-auto"
                      priority={false}
                    />
                  </div>
                ) : (
                  <div className="relative mr-8 w-auto">
                    <Image
                      src={"/picture/map_driving_times_ka.png"}
                      alt={images[1].alt}
                      width={600}
                      height={200}
                      className="w-auto h-auto object-cover rounded-lg md:w-[644px] lg:w-auto"
                      priority={false}
                    />
                  </div>
                )}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapOfGeorgia;
