import React from "react";
import Image from "next/image";

interface Destination {
  id: number;
  imageUrl: string;
  title: string;
  location: string;
  alt: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    imageUrl: "/space/okace.webp",
    title: "ოკაცეს კანიონი",
    location: "იმერეთი",
    alt: "ოკაცეს კანიონი იმერეთში",
  },
  {
    id: 2,
    imageUrl: "/space/abudelauri.webp",
    title: "აბუდელაურის პერადი ტბები",
    location: "სამცხე-ჯავახეთი",
    alt: "ჯავახეთის მთიანი პეიზაჟი",
  },
  {
    id: 3,
    imageUrl: "/space/gardenia.webp",
    title: "გარდენისა შევარდნაძე",
    location: "თბილისი",
    alt: "ღია ცის ქვეშ ისტორიული სახლი",
  },
  {
    id: 4,
    imageUrl:
      "/space/zardzia.webp",
    title: "ვარძია",
    location: "სამცხე-ჯავახეთი",
    alt: "ვარძიის გამოქვაბული",
  },
];

function PopularDestinationsSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="lg:mb-10 font-semibold text-lg">
          პოპულარული დანიშნულების ადგილები
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden cursor-pointer">
                <Image
                  src={destination.imageUrl}
                  alt={destination.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold mb-1">{destination.title}</h3>
                <p className="text-sm opacity-90">📍 {destination.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularDestinationsSection;
