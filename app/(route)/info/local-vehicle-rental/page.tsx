import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { MapPin, Phone } from "lucide-react";
import { services2 } from "@/constants/data/data";

const TransportServices: React.FC = () => {
  return (
    <div className="lg:pl-2">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl -mt-3 mb-10 font-semibold text-gray-800">
          ადგილობრივი ტრანსპორტის გაქირავება
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services2.map((service, index) => (
            <Card key={index} className="shadow-lg h-full">
              <CardContent className="flex flex-col h-full p-6 justify-between">
                <div>
                  <div className="mb-8 select-none">
                    <Image
                      src={service.logo}
                      alt={`${service.title} logo`}
                      width={65}
                      height={65}
                      className="mx-auto"
                    />
                  </div>
                  <CardTitle className="text-left mb-8 w-full select-none">
                    {service.title}
                  </CardTitle>
                  <div className="text-left w-full mb-4">
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="mr-2 h-5 w-5 text-red-500" />
                      {service.location}
                    </div>
                    <div className="flex items-center text-gray-500 mt-2">
                      <Phone className="mr-2 h-5 w-5 ml-1 text-red-500" />
                      {service.phone}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Link
                    href={service.link}
                    className="text-red-500"
                    target="_blank"
                  >
                    მეტის ნახვა →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransportServices;
