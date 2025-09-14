"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Layers2, Map } from "lucide-react";
import Link from "next/link";
import { DestinationCard } from "@/components/DestinationCard";
import RecipeGallery from "@/components/RecipeGallery";

// Define interfaces for the data structures
interface RegionTime {
  city: string;
  time: string;
}

interface AnotherSection {
  name1: string;
  description: string;
  image: string | string[];
  name2: string;
  name3: string;
  image2: string | string[];
  description2: string;
  description3: string;
  name4: string;
  name5: string;
  description4: string;
  description5: string;
}

interface RangeItem {
  min?: string;
  max?: string;
}

interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  activities: string;
  currency: string;
}

interface ArrayItem {
  image: string;
  header: string;
  text?: string;
  title?: string;
  description?: string;
}

interface Card {
  title: string;
  src: string;
  additionalDescription: string;
  region: string;
  city: string;
  link: string;
  regionTime: RegionTime[];
  anotherSection: AnotherSection;
  range: RangeItem[];
  destinations: Destination[];
  array: ArrayItem[];
}

export default function CardPage() {
  const cardSliderImages: Card[] = [
    {
      title: "ქუთაისი",
      src: "/places/kutaisi-gnta.webp",
      additionalDescription:
        "ქუთაისი ქრისტეს შობამდე 1400 წლით ადრე დაარსდა და ის მსოფლიოს ერთ-ერთი უძველესი ქალაქია. იგი საოცარი იუმორის, სითბოსა და სიყვარულის ადგილია. ამას ამბობს ყველა, ვისაც აქ ერთხელ მაინც უმოგზაურია.",
      region: "თბილისი",
      city: "3434",
      link: "https://www.google.com/maps/place/%E1%83%A5%E1%83%A3%E1%83%97%E1%83%90%E1%83%98%E1%83%A1%E1%83%98/@42.2547004,42.700487,14z/data=!3m1!4b1!4m5!3m4!1s0x405c8ce30e54af2d:0xfbec41b2d626656f!8m2!3d42.2662428!4d42.7180019?shorturl=1",
      regionTime: [
        {
          city: "მესტია",
          time: "02:24სთ",
        },
        {
          city: "ბათუმი",
          time: "02:24სთ",
        },
        {
          city: "თბილისი",
          time: "02:24სთ",
        },
      ],
      anotherSection: {
        name1: "ქუთაისის ისტორია",
        description:
          "ქუთაისსა და მის შემოგარენში ადამიანი ქვედა პალეოლითის ხანიდან ცხოვრობდა. აქ აღმოჩენილია დინოზავრის ნაკვალევი და „ოქროს საწმისის“ მაძიებელი „არგონავტების“ კვალიც კი ამ ქალაქში მოდის. \n\n საუკუნეების განმავლობაში ქუთაისი ქვეყნის კულტურული და პოლიტიკური ცენტრი იყო, VIII საუკუნიდან XI საუკუნემდე კი - საქართველოს დედაქალაქი. \n\n სახელი „ქუთაისი“ სამი სიტყვისგან შედგება: ქვა, მთა და ისი - ქალაქი ქვასა და მთას შორის. განსხვავებულ ეპოქებში მას სხვადასხვა სახელით მოიხსენიებდნენ - აია, ქუთაია და ქუთათისიუმი.",
        image: "/places/2(3).webp",
        name2: "ქუთაისის ღირსშესანიშნაობები",
        name3: "",
        image2: "/places/9.webp",
        description2:
          "ქუთაისში საუკუნე-ნახევარზე მეტი ხნის ბაღს - ბულვარს შეხვდები, რომელიც ქალაქის ცენტრალურ მოედანს უერთდება. დიდ ქართველ პოეტს, აკაკი წერეთელს ბულვარისთვის „ქუთაისის პარლამენტი“ უწოდებია, რადგან ინტელიგენცია აქ მნიშვნელოვან საკითხებზე სამსჯელოდ იკრიბებოდა. ტრადიცია დღესაც გრძელდება. \n\n აქვე, მოედანზე კოლხური შადრევანი დაგხვდება, რომელიც გაფორმებულია საქართველოში ვანის გათხრებისას აღმოჩენილი არტეფაქტების შესატყვისი 30 მოოქროვილი ფიგურით.",
        description3:
          "ასევე უნდა ნახო ქუთაისის დრამატული თეატ Hawkinsეატრის უნიკალური შენობა, რომელსაც ეროვნული კულტურის ძეგლის სტატუსი აქვს მინიჭებული. \n\n აღსანიშნავია, რომ ბულვარის ბოლოში ქუთაისის ოპერისა და ბალეტის თეატრი დგას, რომლის სახურავზეც ქუთაისელი მოქანდაკის მიერ გაკეთებულ 13 რომაულ ფიგურას შენიშნავ. შედარებით ქვევით, მდინარე რიონის პირზე, იმერეთის მეფეთა რეზიდენცია „ოქროს ჩარდახია“; მაღლა, გორაზე, 1003 წელს ერთიანი საქართველოს სიმბოლოდ აგებული ბაგრატის ტაძარი მოჩანს. ისინი აუცილებლად უნდა იხილო, ისევე, როგორც UNESCO-ს მსოფლიო მემკვიდრეობის ძეგლი - გელათის სამონასტრო კომპლექსი და მოწამეთას არაჩვეულებრივი მონასტერი, რომლებთანაც ზამთარ-ზაფხულ წითელი მდინარე ჩამოედინება.",
        name4: "",
        name5: "",
        description4:
          "როდესაც ამ ქალაქში მოხვდები აუცილებლად ეწვიე ქალაქის უბნებს, შეიარე ბოტანიკურ ბაღში და რიონის სიოსაც მიეგებე - ქუთაისის უძველეს „ჯაჭვის ხიდზე“, 1872 წელს საფრანგეთში დაპროექტებულ „თეთრ ხიდზე“ და „წითელ ხიდზე“, რომელიც პირველი რკინისგან აგებული ხიდია მთელ ამიერკავკასიაში. ამ ხიდებიდან რიონის კალაპოტში წამოწოლილ თეთრ ქვებს გადახედე. სწორედ ამ დროს მიხვდები თუ როგორი ქალაქია ქუთაისი, რომელიც თავის მკვიდრ ღვაწლმოსილ ფოტოგრაფს ძეგლს უდგამს.",
        description5: "",
      },
      range: [{ min: "30" }, { max: "3" }],
      destinations: [
        {
          id: "1",
          title: "ერთდღიანი ტური ქუთაისში",
          description:
            "ამ ერთდღიანი ტურის ფარგლებში, უდიდესი ისტორიული და კულტურული მნიშვნელობის ხუროთმოძღვრების ძეგლს - გეთალის მონასტერს იხილავ, იმერეთის სიმწვანეში ჩაფლულ ბუნებას დაათვალიერებ და უნიკალური გამოცდილების მისაღებად, მოწამეთას სამონასტრო კომპექსსაც ესტუმრები.",
          image: "/places/kutaisi-view-with-birds.webp",
          duration: "30კმ",
          activities: "12 სანახაობა",
          currency: "30კმ",
        },
        {
          id: "2",
          title: "კანიონების ერთდღიანი ტური",
          description:
            "აღმოაჩინე დასავლეთ საქართველოს გეოგრაფიური და ბიოლოგიური მრავალფეროვნება, მოიარე ულამაზესი ოკაცესა და მარტვილის კანიონი და იხილე ძირძველი კულტურის მშვენიერი დანატოვარი - მარტვილის მონასტერი. ტურის ფარგლებში ასევე შეხვდები სახლინოს რეზიდენციას და საუკეთესო შთაბეჭდილებებით აივსები.",
          image: "/places/martvili-canyon.webp",
          duration: "8-12სთ",
          activities: "18 სანახაობა 3 აქტივობა",
          currency: "100კმ",
        },
      ],
      array: [
        {
          image: "/places/khachapuri-gnta.webp",
          header: "იმერული ხაჭაპური",
          title: "დააგემოვნე",
          text: "მრავალფეროვანი ქართული კერძები",
          description:
            "იმერული სამზარეულო განსაკუთრებულია არა მხოლოდ საქართველოში, არამედ მთელ კავკასიაში. აქ მთავარი კერძი იმერული ხაჭაპურია, რომლის საიდუმლოც იმერულ ყველშია. ეს მხარე ვეგეტარიანული კერძების მრავალფეროვნებითაც გამოირჩევა: ნიგვზიანი ფხალი, იმერული ლობიო… თუმცა იმერელი დიასახლისები ხორცით მომზადებული კერძების ოსტატებიც არიან: საცივის იმერული ვერსია, რომელიც ქათმის ხორცისგან მზადდება, ახალი წლის მთავარი კერძია",
        },
        {
          image: "/places/imeruli-cheese-gnta.webp",
          header: "იმერული ყველი",
        },
      ],
    },
  ];

  const card: Card = cardSliderImages[0]; // Use the first card for static display
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsActive(!isActive);
  };

  return (
    <div className="space-y-14">
      <div className="relative w-full h-screen">
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 flex flex-col justify-center px-5 sm:px-8 lg:px-11 container mx-auto z-20">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-6">
            {card.title}
          </h1>
          <p className="text-sm sm:text-base max-w-xl text-gray-300 sm:mt-3 mb-6">
            {card.additionalDescription}
          </p>
          <p className="text-white font-bold text-sm mb-2">
            რა დრო სჭირდება მგზავრობას:
          </p>
          <div className="text-white flex space-x-8 sm:flex sm:space-x-16 space-y-8">
            {card.regionTime.map((region, index: number) => (
              <div key={index} className="font-semibold">
                <div className="text-sm sm:text-base text-gray-300 mb-1">
                  {region.city}
                </div>
                <h1 className="text-sm">{region.time}</h1>
              </div>
            ))}
          </div>
          <div className="mb-5">
            <button
              className="flex items-center gap-4 cursor-pointer group"
              onClick={handleClick}
            >
              <span
                className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 border-2 rounded-full group-hover:bg-red-500 group-hover:border-red-500 transition-colors duration-300 ${
                  isActive ? "bg-red-500 border-red-500" : ""
                }`}
              >
                <Heart size={16} className="text-white" />
              </span>
              <h3
                className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${
                  isActive ? "text-red-500" : "text-white"
                }`}
              >
                მარშრუტებში დამატება
              </h3>
            </button>
          </div>
          <div className="absolute bottom-8">
            <Link href={card.link} target="_blank">
              <button className="cursor-pointer text-white border border-red-500 rounded-lg px-4 py-2 hover:bg-red-500 transition-all duration-200 ease-in-out">
                რუკაზე ნახვა
              </button>
            </Link>
          </div>
        </div>
      </div>
      <section>
        <div className="mx-auto space-y-4 px-5 sm:container sm:px-8 lg:max-w-4xl">
          <div>
            <h3 className="text-3xl font-bold">{card.anotherSection.name1}</h3>
          </div>
          <div className="space-y-4 text-gray-800">
            {card.anotherSection.description
              ?.split("\n\n")
              .map((paragraph: string, idx: number) => (
                <p key={idx} className="text-gray-800">
                  {paragraph.trim()}
                </p>
              ))}
          </div>
          <div>
            <p className="text-3xl font-bold">{card.anotherSection.name2}</p>
          </div>
          <div>
            {Array.isArray(card.anotherSection.image) ? (
              card.anotherSection.image.map(
                (img: string, idx: number) =>
                  img && (
                    <Image
                      key={idx}
                      src={img}
                      alt={`image-${idx}`}
                      width={600}
                      height={500}
                      className="rounded-md"
                    />
                  )
              )
            ) : card.anotherSection.image &&
              card.anotherSection.image !== "" ? (
              <Image
                src={card.anotherSection.image}
                alt="section image"
                width={1000}
                height={500}
                className="rounded-md"
              />
            ) : null}
          </div>
          <div className="space-y-4 text-gray-800">
            {card.anotherSection.description2
              ?.split("\n\n")
              .map((paragraph: string, idx: number) => (
                <p key={idx} className="text-gray-800">
                  {paragraph.trim()}
                </p>
              ))}
          </div>
          <div>
            <p className="text-3xl font-bold">{card.anotherSection.name3}</p>
          </div>
          <div className="space-y-4 text-gray-800">
            {card.anotherSection.description3
              ?.split("\n\n")
              .map((paragraph: string, idx: number) => (
                <p key={idx} className="text-gray-800">
                  {paragraph.trim()}
                </p>
              ))}
          </div>
          <div>
            {Array.isArray(card.anotherSection.image2) ? (
              card.anotherSection.image2.map(
                (img: string, idx: number) =>
                  img && (
                    <Image
                      key={idx}
                      src={img}
                      alt={`image-${idx}`}
                      width={600}
                      height={500}
                      className="rounded-md"
                    />
                  )
              )
            ) : card.anotherSection.image2 &&
              card.anotherSection.image2 !== "" ? (
              <Image
                src={card.anotherSection.image2}
                alt="section image"
                width={1000}
                height={500}
                className="rounded-md"
              />
            ) : null}
          </div>
          <div>
            <p className="text-3xl font-bold">{card.anotherSection.name4}</p>
          </div>
          <div className="space-y-4 text-gray-800">
            {card.anotherSection.description4
              ?.split("\n\n")
              .map((paragraph: string, idx: number) => (
                <p key={idx} className="text-gray-800">
                  {paragraph.trim()}
                </p>
              ))}
          </div>
          <div>
            <p className="text-3xl font-bold">{card.anotherSection.name5}</p>
          </div>
          <div className="space-y-4 text-gray-800">
            {card.anotherSection.description5
              ?.split("\n\n")
              .map((paragraph: string, idx: number) => (
                <p key={idx} className="text-gray-800">
                  {paragraph.trim()}
                </p>
              ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-16 select-none">
          <div className="flex sm:flex-row items-center justify-between w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px]">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-red-500 rounded-full p-2">
                <Map className="text-white" />
              </div>
              <p className="text-xs sm:text-sm md:text-lg text-gray-600">
                სანახაობა
              </p>
              {card.range.slice(0, 1).map((item: RangeItem, index: number) => (
                <p key={index} className="text-xs sm:text-sm md:text-sm">
                  {item.min}
                </p>
              ))}
            </div>
            <div className="h-20 border-l-2 sm:h-20 md:h-20 border-t-2 sm:border-t-0 sm:border-l-2 border-gray-200" />
            <div className="flex flex-col items-center gap-2">
              <div className="bg-red-500 rounded-full p-2">
                <Layers2 className="text-white" />
              </div>
              <p className="text-xs sm:text-sm md:text-lg text-gray-600">
                აქტივობა
              </p>
              {card.range.slice(1, 2).map((item: RangeItem, index: number) => (
                <p key={index} className="text-xs sm:text-sm md:text-sm">
                  {item.max}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-5 sm:pl-8 sm:pr-7 md:pl-8 md:pr-7 lg:pl-11 lg:pr-10 py-8">
        <h1 className="mb-5 text-md sm:text-lg font-bold">პოპულარული ტურები</h1>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {card.destinations.map((destination: Destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>
      </section>
      <section>
        <RecipeGallery items={card.array} />
      </section>
      <section>dfdfdff</section>
    </div>
  );
}
