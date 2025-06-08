import Image from "next/image";
import React from "react";

interface BannerDesc {
  title: string;
  desc: string;
}

function Banner() {
  // Banner-ის მონაცემები
  const bannerDesc: BannerDesc[] = [
    {
      title: "მსოფლიოში ერთ-ერთი ყველაზე სტუმართმოყვარე ქვეყანა შენ გელოდება.",
      desc: "აარჩიე შენთვის საინტერესო ადგილი და დაგეგმე დაუვიწყარი მოგზაურობა",
    },
  ];

  return (
    <div className="relative w-full select-none">
      <Image
        src="/cardImage/banner.jpg"
        alt="Banner Image"
        width={200}
        height={300}
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
      />
      <div className="absolute top-1/2 left-2 sm:left-4 md:left-5 lg:left-4 xl:left-10 transform px-3 sm:px-3 md:px-20 lg:px-40 -translate-y-1/2 flex flex-col text-white">
        {bannerDesc.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 sm:gap-3 md:gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 md:mb-6 lg:mb-10">
              {item.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
