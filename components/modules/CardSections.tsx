import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { TextAnimate } from "../magicui/text-animate";

interface CardSections {
  id: number;
  image: string;
  header: string;
  description: string;
}
function CardSections() {
  const cardDescription: CardSections[] = [
    {
      id: 1,
      image: "/cardImage/spring.webp",
      header: "გაზაფხული",
      description: "სიმწვანეში ჩაფლულ სოფლებს სწორედ ახლა...",
    },
    {
      id: 2,
      image: "/cardImage/summer.webp",
      header: "ზაფხული",
      description: "საუკეთესო პერიოდი ალპური მდელოების...",
    },
    {
      id: 3,
      image: "/cardImage/copy.webp",
      header: "შემოდგომა",
      description: "სეზონი როცა ხშირი, ტყეებით დაპარული მთე...",
    },
    {
      id: 4,
      image: "/cardImage/copy2.webp",
      header: "ზამთარი",
      description: "ამ დროს ყველაპერი ფაფუკი თოვლის...",
    },
  ];
  const text = "შენი 365 დღე საქართველოში";
  const description = `აქ შეძლებ ვარსკვლავებს 4000 მეტრის სიმაღლიდან ახედო, ბაკურიანის
              იდუმალ მთებში სათხილამურო ტური დაგეგმო ან მდინარე არაგვზე
              საჯომარდო მარშრუტით დაუვიწყარი გამოცდილება მიიღო.`;
  return (
    <div className="mb-[100px]">
      <div className="container mx-auto w-full">
        <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between px-4 md:px-20 mb-10 md:mb-20">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4 md:mb-0 whitespace-pre-line">
            {text}
          </h1>
          <div className="w-full lg:w-1/2 text-gray-400 text-sm md:text-base">
            <TextAnimate animation="slideLeft" by="character">
              {description}
            </TextAnimate>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-10">
        {cardDescription.map((itemCard) => (
          <Card
            key={itemCard.id}
            className="relative overflow-hidden select-none cursor-pointer"
          >
            <CardContent className="overflow-hidden">
              <Image
                src={itemCard.image}
                alt={itemCard.header}
                width={130}
                height={133}
                className="w-full object-cover rounded-md hover:scale-110 transition-all duration-300 ease-in-out"
              />
              <div className="absolute bottom-5 left-5 lg:left-5 right-0">
                <CardHeader className="">
                  <CardTitle className="text-white">
                    <h2 className="text-md sm:text-lg md:text-lg lg:text-2xl mb-2">
                      {itemCard.header}
                    </h2>
                    <p className="text-white text-sm md:text-base">
                      {itemCard.description}
                    </p>
                  </CardTitle>
                </CardHeader>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CardSections;
