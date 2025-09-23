import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface Destination {
  id: number;
  imageUrl: string;
  title: {
    ka: string;
    en: string;
  };
  location: {
    ka: string;
    en: string;
  };
  alt: {
    ka: string;
    en: string;
  };
}

const destinations: Destination[] = [
  {
    id: 1,
    imageUrl: "/space/okace.webp",
    title: {
      ka: "ოკაცეს კანიონი",
      en: "Okatse Canyon",
    },
    location: {
      ka: "იმერეთი",
      en: "Imereti",
    },
    alt: {
      ka: "ოკაცეს კანიონი იმერეთში",
      en: "Okatse Canyon in Imereti",
    },
  },
  {
    id: 2,
    imageUrl: "/space/abudelauri.webp",
    title: {
      ka: "აბუდელაურის პერადი ტბები",
      en: "Abudelauri Colored Lakes",
    },
    location: {
      ka: "სამცხე-ჯავახეთი",
      en: "Samtskhe-Javakheti",
    },
    alt: {
      ka: "ჯავახეთის მთიანი პეიზაჟი",
      en: "Javakheti mountainous landscape",
    },
  },
  {
    id: 3,
    imageUrl: "/space/gardenia.webp",
    title: {
      ka: "გარდენისა შევარდნაძე",
      en: "Shevardnadze Garden",
    },
    location: {
      ka: "თბილისი",
      en: "Tbilisi",
    },
    alt: {
      ka: "ღია ცის ქვეშ ისტორიული სახლი",
      en: "Historic house under the open sky",
    },
  },
  {
    id: 4,
    imageUrl: "/space/zardzia.webp",
    title: {
      ka: "ვარძია",
      en: "Vardzia",
    },
    location: {
      ka: "სამცხე-ჯავახეთი",
      en: "Samtskhe-Javakheti",
    },
    alt: {
      ka: "ვარძიის გამოქვაბული",
      en: "Vardzia cave monastery",
    },
  },
];

function PopularDestinationsSection() {
  const { currentLanguage } = useLanguage();

  const sectionTitle = {
    ka: "პოპულარული დანიშნულების ადგილები",
    en: "Popular Destinations",
  };

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h1 className="mb-10 font-semibold text-lg">
          {sectionTitle[currentLanguage]}
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
                  alt={destination.alt[currentLanguage]}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold mb-1">
                  {destination.title[currentLanguage]}
                </h3>
                <p className="text-sm opacity-90">
                  📍 {destination.location[currentLanguage]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularDestinationsSection;
