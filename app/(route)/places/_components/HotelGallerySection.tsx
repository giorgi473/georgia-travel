import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

function HotelGallerySection() {
  const { currentLanguage } = useLanguage();

  const galleryData = [
    {
      image: "/space/tb.webp",
      title: {
        ka: "თბილისის ბალნეოლოგიური კურორტი",
        en: "Tbilisi Balneological Resort",
      },
      alt: {
        ka: "თბილისის ბალნეოლოგიური კურორტის ხედი",
        en: "View of Tbilisi Balneological Resort",
      },
    },
    {
      image: "/space/wy.webp",
      title: {
        ka: "წყალტუბო პლაზა",
        en: "Tskaltubo Plaza",
      },
      alt: {
        ka: "წყალტუბო პლაზის ხედი",
        en: "View of Tskaltubo Plaza",
      },
    },
  ];

  const content = {
    ka: {
      discover: "აღმოაჩინე",
      mainTitle: "კურორტები, რომლებსაც აუცილებლად უნდა ეწვიო",
      description:
        "სამკურნალო თვისებებით ცნობილი კლიმატური ზონები, ბალნეოლოგიური კურორტები, თერაპიული და გამაჯანსაღებელი პროცედურები.",
      buttonText: "გაიგე მეტი →",
    },
    en: {
      discover: "Discover",
      mainTitle: "Resorts you must definitely visit",
      description:
        "Climate zones known for their healing properties, balneological resorts, therapeutic and wellness procedures.",
      buttonText: "Learn More →",
    },
  };

  const currentContent = content[currentLanguage];

  return (
    <>
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-black font-semibold text-lg">
            {currentContent.discover}
          </h1>
          <h2 className="text-3xl md:text-4xl font-medium text-black">
            {currentContent.mainTitle}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {currentContent.description}
          </p>
          <button className="text-red-500 hover:text-white hover:bg-red-500 transition-all duration-300 ease-in-out cursor-pointer border border-red-500 rounded-md py-2 px-4">
            {currentContent.buttonText}
          </button>
        </div>
        <div className="lg:col-span-3">
          <div className="grid md:grid-cols-2 gap-4">
            {galleryData.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-80 md:h-[460px] overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.alt[currentLanguage]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white font-medium text-lg">
                      {item.title[currentLanguage]}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelGallerySection;
