import React from "react";
import Image from "next/image";

interface TravelMoment {
  id: number;
  image: string;
  alt: string;
}

function GeorgiaTravelMoments() {
  const travelMoments: TravelMoment[] = [
    {
      id: 1,
      image: "/cardImage/1.webp",
      alt: "თბილისის ხედი",
    },
    {
      id: 2,
      image: "/cardImage/2.webp",
      alt: "კახეთის ვენახები",
    },
    {
      id: 3,
      image: "/cardImage/3.webp",
      alt: "სვანეთის მთები",
    },
    {
      id: 4,
      image: "/cardImage/4.webp",
      alt: "ბათუმის ზღვისპირა",
    },
    {
      id: 5,
      image: "/cardImage/5.webp",
      alt: "მცხეთის ისტორიული ძეგლები",
    },
    {
      id: 6,
      image: "/cardImage/6.webp",
      alt: "ქუთაისის ღირსშესანიშნაობები",
    },
  ];

  return (
    <div>
      <div className="py-6 container mx-auto">
        <h5 className="text-base sm:text-lg md:text-xl">
          გამოგვყევი ინსტაგრამზე და გაგვიზიარე თავგადასავალი
          <span className="text-lg font-semibold">#GeorgiaTravelMoments</span>
        </h5>
      </div>
      <div className="w-full">
        <div className="flex flex-row flex-nowrap overflow-x-auto sm:flex-wrap sm:justify-between">
          {travelMoments.map((moment) => (
            <div key={moment.id} className="flex-shrink-0 w-60 h-60 p-0">
              <Image
                src={moment.image}
                alt={moment.alt}
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GeorgiaTravelMoments;
