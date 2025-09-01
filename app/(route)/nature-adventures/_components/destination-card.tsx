import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

interface DestinationCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  activities: string;
  price: string;
  currency: string;
}

export function DestinationCard({
  title,
  description,
  image,
  duration,
  activities,
  price,
  currency,
}: DestinationCardProps) {
  return (
    <Card className="overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200 p-0 flex flex-col h-full">
      <div className="relative h-96 w-full overflow-hidden group">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
          <Heart className="w-5 h-5 text-white" />
        </button>
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
          <MapPin className="w-4 h-4 text-red-500" />
          <span className="text-sm font-medium">
            {duration} • {activities}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 text-balance">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-6 text-pretty flex-1">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex gap-8">
            <div>
              <p className="text-xs text-gray-500 mb-1">ღირს</p>
              <p className="text-lg font-semibold text-gray-900">{duration}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">ღანიღმი</p>
              <p className="text-lg font-semibold text-gray-900">
                {price}
                {currency}
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            className="text-red-500 border-red-200 hover:bg-red-50 hover:border-red-300 bg-transparent"
          >
            გაიგე მეტი
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
