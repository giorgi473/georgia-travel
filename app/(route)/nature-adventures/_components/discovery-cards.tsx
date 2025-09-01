import Image from "next/image";
import { Button } from "@/components/ui/button";

interface DiscoveryCard {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const discoveryData: DiscoveryCard[] = [
  {
    id: 1,
    title: "საქართველოს მთები და ინვენტარები",
    description:
      "შეიმეცნეთ საქართველოს ილეამარაო ისტ, რომ ერთხელ მაინც არ ახსენეს...",
    image: "/snowy-mountain-peaks-dramatic-landscape.png",
    imageAlt: "Snowy mountain peaks with dramatic landscape",
  },
  {
    id: 2,
    title: "საქართველოს გუგრაფია",
    description:
      "საქართველო პატარა, დამაბი ქვეყანაა, მრავალფეროვანი ბუნებითა და რბილი...",
    image: "/mountain-valley-misty-landscape.png",
    imageAlt: "Mountain valley with misty landscape",
  },
  {
    id: 3,
    title: "საქართველოს ბუნება",
    description:
      "ჩრდილოეთით - აზნდელი დიდი კავკასიონი, დასავლეთით - შემოკავკასიე...",
    image: "/mountain-reflection-in-lake.png",
    imageAlt: "Mountain reflection in pristine lake",
  },
];

export default function DiscoveryCards() {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          გაუცანი ბოლოს
        </h2>
        <Button
          variant="ghost"
          className="text-red-500 hover:text-red-600 hover:bg-red-50"
        >
          ყველას ნახვა →
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {discoveryData.map((card) => (
          <div
            key={card.id}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={card.image || "/placeholder.svg"}
                alt={card.imageAlt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-lg md:text-xl font-bold mb-2 text-balance">
                  {card.title}
                </h3>
                <p className="text-white/90 text-sm line-clamp-2 text-pretty">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
