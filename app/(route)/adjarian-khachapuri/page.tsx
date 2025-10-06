"use client";

import React, { useEffect, useState } from "react";
import ImageContent from "@/components/modules/ImageContent";
import DescriptionText from "@/components/modules/DescriptionText";
import ExploreSnapCard from "@/components/ExploreSnapCard";
import CardSwiperSlider from "@/components/CardSwiperSlider";
import { LoaderSpinner } from "@/components/loaderSpiner/RippleWaveLoader";
import { ComponentAttributes } from "@/constants/data/kitchenData";

function NaturePage() {
  const [data, setData] = useState<ComponentAttributes[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/kitchen");
        const result = await res.json();
        setTimeout(() => {
          setData(result.data);
        }, 1000);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading || !data.length) {
    return (
      <div>
        <LoaderSpinner />
      </div>
    );
  }

  return (
    <div className="space-y-24">
      <section>
        <ImageContent {...data[0].mainSection} />
      </section>
      <section>
        <DescriptionText {...data[0].descriptionText} />
      </section>
      <section className="container mx-auto px-5 sm:px-8 md:px-8 lg:px-11 py-8">
        <ExploreSnapCard {...data[0].exploreSnapCard} />
      </section>
      <section>
        <CardSwiperSlider />
      </section>
    </div>
  );
}

export default NaturePage;
