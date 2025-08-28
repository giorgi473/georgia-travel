import React from "react";
import Image from "next/image";

function HotelGallerySection() {
  const galleryData = [
    {
      image: "/space/tb.webp",
      title: "თბილისის ბალნეოლოგიური კურორტი",
    },
    {
      image: "/space/wy.webp",
      title: "წყალტუბო პლაზა",
    },
  ];

  return (
    <>
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-black font-semibold text-lg">აღმოაჩინე</h1>
          <h2 className="text-3xl md:text-4xl font-medium text-black">
            კურორტები, რომლებსაც აუცილებლად უნდა ეწვიო
          </h2>
          <p className="text-gray-600 leading-relaxed">
            სამკურნალო თვისებებით ცნობილი კლიმატური ზონები, ბალნეოლოგიური
            კურორტები, თერაპიული და გამაჯანსაღებელი პროცედურები.
          </p>
          <button className="text-red-500 hover:text-white hover:bg-red-500 transition-all duration-300 ease-in-out cursor-pointer border border-red-500 rounded-md py-2 px-4">
            გაიგე მეტი →
          </button>
        </div>
        <div className="lg:col-span-3">
          <div className="grid md:grid-cols-2 gap-4">
            {galleryData.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-80 md:h-[460px] overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white font-medium text-lg">
                      {item.title}
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
