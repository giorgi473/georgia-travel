import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";
import { UkrGeoCharm } from "@/constants/data/placeData";

interface UkrGeoCharmProps {
  data: UkrGeoCharm[];
  currentLanguage: "ka" | "en";
}

function GeoCultureCard({ data, currentLanguage }: UkrGeoCharmProps) {
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-8 lg:pl-11 lg:pr-9">
      <div className="mb-6">
        {data
          .filter((item) => item.title?.[currentLanguage]) // Only render non-empty titles
          .map((item, itemIndex) => (
            <p
              key={`${item.name[currentLanguage] || itemIndex}-${itemIndex}`}
              className="text-xl font-bold text-left"
            >
              {item.title?.[currentLanguage]}
            </p>
          ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full">
        {data.map((item, index) => (
          <Card key={index} className="w-full">
            <CardHeader className="p-0 relative h-[500px] overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.name[currentLanguage]}
                layout="fill"
                style={{ objectFit: "cover" }}
                className="rounded-lg hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer"
              />
              <div className="absolute bottom-20 left-10 text-white font-bold lg:text-xl drop-shadow-[0_0_8px_rgba(0,0,0,0.1)] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_1),_-2px_-2px_4px_rgb(0_0_0_/_1),_2px_-2px_4px_rgb(0_0_0_/_1),_-2px_2px_4px_rgb(0_0_0_/_1),_0_0_8px_rgb(0_0_0_/_1)]">
                {item.name[currentLanguage]}
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default GeoCultureCard;
