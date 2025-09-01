import HeroSection from "@/components/HeroSection";
import { AdventureActivities } from "./_components/adventure-activities";
import ImageContent from "./_components/image-content";
import AdventureHero from "./_components/adventure-hero";
import DiscoveryCards from "./_components/discovery-cards";
import CardSwiperSlider from "@/components/CardSwiperSlider";
import { DestinationCard } from "./_components/destination-card";
import DestinationsSwiper from "@/components/destinations-swiper";

const activities = [
  {
    id: 1,
    title: "მთავალდებულება",
    image: "/mountain-peak-climbing-adventure.png",
    imageAlt: "Mountain peak climbing adventure",
  },
  {
    id: 2,
    title: "ლაშქრობა",
    image: "/forest-hiking-trail-adventure.png",
    imageAlt: "Forest hiking trail adventure",
  },
  {
    id: 3,
    title: "ნულის სპორტი",
    image: "/extreme-river-rafting-adventure.png",
    imageAlt: "Extreme river rafting adventure",
  },
  {
    id: 4,
    title: "ზიპ-ლაინი",
    image: "/canopy-zipline-adventure.png",
    imageAlt: "Canopy zipline adventure",
  },
];

const destinations = [
  {
    id: "1",
    title: "კანიონების ერთდღიანი ტური",
    description:
      "აღმოაჩინე დასავლეთ საქართველოს გეგრაფიული და ბიოლოგიური მრავალფეროვნება, მოიარე უდამბეს რკალისა და მარტვილის კანიონი და იხილე ქუდაფის კუდები - მარტვილის მონასტერი. ტურის ფარგლებში ასევე შეგვიძლია სანოვნის რეზიდენციას და საუკეთესო მოთხოვნილებით ათხოვნა.",
    image: "/beautiful-turquoise-cave-pool-with-rocky-walls.png",
    duration: "8-12სთ",
    activities: "18 საათამდე • 3 აქტივობა",
    price: "100",
    currency: "₾",
  },
  {
    id: "2",
    title: "ტბების ტური ჯავახეთში",
    description:
      "შენი მოგზაურობა ფუდკარ-ბეშეთნიკურ ტბამს ტბიდან დაიწყება, საქართველოში ქრისტიანობის გამავრცელებლები, ნაცია ნინო კაბადოკიელის ხსელობის ფერის მონასტერში გაგრძელდება, გბაძ უდიდესი სადღესასწაულო ხუცესი და სოფელი გონიოკა შეხვდება, დასახსრებს აღ კი შენ ნის ზღაპრული მადლიანი ტბის ტბიდან გადაიღებს.",
    image: "/aerial-view-of-golden-countryside-with-winding-riv.png",
    duration: "8-12სთ",
    activities: "15 საათამდე • 3 აქტივობა",
    price: "55",
    currency: "₾",
  },
];

function page() {
  return (
    <div>
      <section className="mb-[100px]">
        <ImageContent
          image="/bc.webp"
          title="ბუნება და თავგადასავლები"
          description="გაემგზავრე თოვლიანი მთებისკენ, მოინახულე სანაპიროები, დაათვალიერე იდუმალი ტყეები, პირქუში მყინვარები, აღმოაჩინე ურბანული კულტურა და ისტორიული ქალაქების ყოველდღიური ცხოვრება."
          buttonHref="/"
        />
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-[80px]">
        <AdventureActivities
          badgeText="აღმოჩენა"
          title="საზაფხულო"
          subtitle="აქტივობები"
          description="ზაფხული საქართველოში საკმაოდ დატვირთული სეზონია - ზღვისპირა ქალაქებითა და კურორტებით დაწყებული, ფესტივალებით, ექსტრემალური სპორტული აქტივობებით და სამოყვარული ლაშქრობებით დამთავრებული - ეს პერიოდი საუკეთესო დასვენების ყველა შესაძლებლობას გთავაზობს."
          buttonText="გაიგე მეტი"
          activities={activities}
        />
      </section>
      <section className="mb-[100px]">
        <HeroSection
          imageUrl="/natural.webp"
          title="აი, ამიტომ უნდა ესტუმრო ბათუმს"
          description="აქაური სუბტროპიკული კლიმატი, ეკოლოგიურად სუფთა ზღვა, მთები და კარგად განვითარებულ ტურისტული ინფრასტრუქტურა წელიწადის ნებისმიერ დროს გამორჩეულად გიმასპინძლებს და ენერგიის სრულ აღდგენაში დაგეხმარება."
          buttonText="გაიგე მეტი"
        />
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-[80px]">
        <AdventureHero />
      </section>
      <section className="mb-[100px]">
        <HeroSection
          imageUrl="/14.webp"
          title="აი, ამიტომ უნდა ესტუმრო ბათუმს"
          description="აქაური სუბტროპიკული კლიმატი, ეკოლოგიურად სუფთა ზღვა, მთები და კარგად განვითარებულ ტურისტული ინფრასტრუქტურა წელიწადის ნებისმიერ დროს გამორჩეულად გიმასპინძლებს და ენერგიის სრულ აღდგენაში დაგეხმარება."
          buttonText="გაიგე მეტი"
        />
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-[80px]">
        <DiscoveryCards />
      </section>
      <section className="mb-[80px]">
        <CardSwiperSlider />
      </section>
      <section className="mb-[80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 text-balance">
              აღმოაჩინე საქართველო
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
              უნიკალური ტურები და დაუვიწყარი გამოცდილება საქართველოს ყველაზე
              ლამაზ ადგილებში
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <DestinationsSwiper />
      </section>
    </div>
  );
}

export default page;
