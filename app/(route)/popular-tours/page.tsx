import React from "react";
import { HeroSection } from "@/components/hero-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface StunningNatureScene {
  id: number;
  image: string;
  city: string;
  sight: string;
  activity: string;
  title: string;
  descriptin: string;
  time: string;
  distance: string;
  difficulty: string;
}

const stunningNatureScenes: StunningNatureScene[] = [
  {
    id: 1,
    image: "/popular-tours/saghamo-lake.webp",
    city: "1 ქალაქი",
    sight: "5 სანახაობა",
    activity: "1 აქტივობა",
    title: "ტბების ტური ჯავახეთში",
    descriptin:
      "შენი მოგზაურობა ვულკანურ-ტექტონიკური ტიპის ტბიდან დაიწყება, საქართველოში ქრისტიანობის გამავრცელებელი, წმიდა ნინო კაბადოკიელის სახელობის ფოკის მონასტერში გაგრძელდება, გზად ულამაზესი საღამოს ტბა და სოფელი გორელოვკა შეგხვდება, დასასრულისკენ კი შენ წინ ზღაპრული მადათაფის ტბის არნახული პეიჟაზები გადაიშლება.",
    time: "8-12სთ",
    distance: "55კმ",
    difficulty: "საშუალო",
  },
  {
    id: 2,
    image: "/popular-tours/saghamo-lake.webp",
    city: "1 ქალაქი",
    sight: "5 სანახაობა",
    activity: "1 აქტივობა",
    title: "ტბების ტური ჯავახეთში",
    descriptin:
      "შენი მოგზაურობა ვულკანურ-ტექტონიკური ტიპის ტბიდან დაიწყება, საქართველოში ქრისტიანობის გამავრცელებელი, წმიდა ნინო კაბადოკიელის სახელობის ფოკის მონასტერში გაგრძელდება, გზად ულამაზესი საღამოს ტბა და სოფელი გორელოვკა შეგხვდება, დასასრულისკენ კი შენ წინ ზღაპრული მადათაფის ტბის არნახული პეიჟაზები გადაიშლება.",
    time: "8-12სთ",
    distance: "55კმ",
    difficulty: "საშუალო",
  },
  {
    id: 3,
    image: "/popular-tours/saghamo-lake.webp",
    city: "1 ქალაქი",
    sight: "5 სანახაობა",
    activity: "1 აქტივობა",
    title: "ტბების ტური ჯავახეთში",
    descriptin:
      "შენი მოგზაურობა ვულკანურ-ტექტონიკური ტიპის ტბიდან დაიწყება, საქართველოში ქრისტიანობის გამავრცელებელი, წმიდა ნინო კაბადოკიელის სახელობის ფოკის მონასტერში გაგრძელდება, გზად ულამაზესი საღამოს ტბა და სოფელი გორელოვკა შეგხვდება, დასასრულისკენ კი შენ წინ ზღაპრული მადათაფის ტბის არნახული პეიჟაზები გადაიშლება.",
    time: "8-12სთ",
    distance: "55კმ",
    difficulty: "საშუალო",
  },
];

function page() {
  return (
    <>
      <div className="mb-[80px]">
        <HeroSection
          image="/popular-tours/lukhi-okrotskali-lakes-gnta.webp"
          title="ტურები საქართველოში"
          description="სანამ საქართველოში ჩამოხვალ, მნიშვნელოვანია გაეცნო ჩვენი ქვეყნის ცხოვრების სტილსა და ისეთ საჭირო დეტალებს, როგორებიცაა, სავიზო პოლიტიკა, ადგილობრივი და რეგიონული ტრანსპორტი, ამინდი, კლიმატი, სასტუმროთა ქსელები და სხვა."
          overlay="bg-black/40"
          button="მთავარი"
          tours="ტურები საქართველოში"
          className="h-[450px] mb-10"
        />
      </div>
      <div className="container mx-auto lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stunningNatureScenes.map((scene) => (
            <Card
              key={scene.id}
              className="overflow-hidden rounded-lg shadow-lg p-4 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out"
            >
              <CardHeader className="p-0">
                <Image
                  src={scene.image}
                  alt={scene.title}
                  width={300}
                  height={192}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardHeader>
              <CardContent className="px-1">
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>{scene.city}</span>
                  <span>{scene.sight}</span>
                  <span>{scene.activity}</span>
                </div>
                <CardTitle className="text-lg font-semibold mb-2">
                  {scene.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 mb-2">
                  {scene.descriptin.substring(0, 100)}...
                </CardDescription>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{scene.time}</span>
                  <span>{scene.distance}</span>
                  <span>{scene.difficulty}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default page;
