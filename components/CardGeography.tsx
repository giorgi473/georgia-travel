import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cardsData } from "@/constants/get/data";

const CardGeography: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
      {cardsData.map((card, index) => (
        <Link href={card.href} key={index}>
          <Card className="relative h-[400px] overflow-hidden shadow-lg transition-shadow hover:shadow-xl cursor-pointer">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
              priority={index === 0}
            />
            <CardContent className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
              <h2 className="mb-2 text-xl max-w-sm font-semibold">
                {card.title}
              </h2>
              <p className="text-sm">{card.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CardGeography;
