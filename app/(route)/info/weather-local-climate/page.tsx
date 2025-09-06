"use client";

import { useRouter } from "next/navigation";
import { WeatherCard } from "@/components/WeatherCard";
import { climateData } from "@/constants/data/data";

function Page() {
  const router = useRouter();

  const handleDetailsClick = (title: string) => {
    router.push(`/info/weather-local-climate/${encodeURIComponent(title)}`);
  };

  return (
    <div className="lg:pl-2">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6 mb-8">
          {Array.from(
            { length: Math.ceil(climateData.length / 2) },
            (_, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              >
                {climateData
                  .slice(rowIndex * 2, rowIndex * 2 + 2)
                  .map((service, cardIndex) => (
                    <WeatherCard
                      key={rowIndex * 2 + cardIndex}
                      image={service.image}
                      title={service.title}
                      description={service.description}
                      details={service.details}
                      onDetailsClick={handleDetailsClick}
                    />
                  ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
