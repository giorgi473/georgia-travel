import HeroSection from "@/components/HeroSection";
import Carusel from "./_components/Carusel";
import GeorgianAttractionsGrid from "./_components/GeorgianAttractionsGrid";
import HotelGallerySection from "./_components/hottel-gallery-section";
import TextSection from "./_components/TextSection";
import SwiperSlideCard from "@/components/SwipwrSlideSights";
import { GeorgianMap } from "./_components/Georgian-map";

const georgianPlaces = [
  {
    id: 1,
    title: "თბილისი",
    description: "საქართველოს დედაქალაქი, ისტორიული და კულტურული ცენტრი",
    image: "/sights/tbilisi-old-town-with-traditional-architecture.png",
  },
  {
    id: 2,
    title: "ბათუმი",
    description: "შავი ზღვის სანაპირო კურორტი და თანამედროვე ქალაქი",
    image: "/sights/batumi-seaside-resort-with-modern-buildings.png",
  },
  {
    id: 3,
    title: "მცხეთა",
    description: "საქართველოს ძველი დედაქალაქი და რელიგიური ცენტრი",
    image: "/sights/mtskheta-ancient-georgian-city-with-churches.png",
  },
  {
    id: 4,
    title: "სვანეთი",
    description: "მთიანი რეგიონი ისტორიული კოშკებით და ალპური პეიზაჟებით",
    image: "/sights/svaneti-mountain-region-with-ancient-towers.png",
  },
  {
    id: 5,
    title: "კახეთი",
    description: "ღვინის რეგიონი ვენახებით და ისტორიული მონასტრებით",
    image: "/sights/kakheti-wine-region-with-vineyards.png",
  },
  {
    id: 6,
    title: "გუდაური",
    description: "მთის სათხილამურო კურორტი კავკასიონის მთებში",
    image: "/sights/gudauri-ski-resort-in-caucasus-mountains.png",
  },
  {
    id: 7,
    title: "ვარძია",
    description: "მღვიმური ქალაქი და მონასტერი მტკვრის ხეობაში",
    image: "/sights/vardzia-cave-monastery-complex.png",
  },
  {
    id: 8,
    title: "ბორჯომი",
    description: "სამკურნალო წყლების კურორტი და ეროვნული პარკი",
    image: "/sights/borjomi-spa-resort-with-mineral-water-springs.png",
  },
  {
    id: 9,
    title: "კუტაისი",
    description: "იმერეთის ცენტრი ისტორიული ძეგლებით",
    image: "/sights/kutaisi-historical-city-with-ancient-monuments.png",
  },
  {
    id: 10,
    title: "ახალციხე",
    description: "სამცხე-ჯავახეთის ცენტრი რაბათის ციხით",
    image: "/sights/akhaltsikhe-city-with-rabati-fortress.png",
  },
  {
    id: 11,
    title: "ზუგდიდი",
    description: "მეგრელეთის ცენტრი დადიანების სასახლით",
    image: "/sights/zugdidi-city-with-dadiani-palace.png",
  },
  {
    id: 12,
    title: "ტელავი",
    description: "კახეთის ცენტრი ღვინის ტრადიციებით",
    image: "/sights/telavi-city-center-with-wine-traditions.png",
  },
];
function page() {
  const galleryData = [
    {
      image: "/space/tb.webp",
      title: "თბილისის ბალნეოლოგიური კურორტი",
    },
    {
      image: "/space/wy.webp",
      title: "წყალტუბო პლაზა",
    },
  ];

  return (
    <>
      <section className="mb-[40px]">
        <TextSection
          title="სანახაობები"
          description="საქართველო განსაკუთრებული ქვეყანაა, რომელიც განთქმულია გეოგრაფიული და ბიოლოგიური მრავალფეროვნებით, მდიდარია ფლორისა და ფაუნის თვალსაზრისით და მიუხედავად ტერიტორიის სიმცირისა, აქ გავრცელებულია დედამიწის ზედაპირზე არსებული ჰავის თითქმის ყველა ტიპი."
          buttonText="აღმოაჩინე შენი თავგადასავალი"
          image="/sights/lake.webp"
        />
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-[100px]">
        <GeorgianAttractionsGrid />
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-[70px]">
        <HotelGallerySection
          sectionLabel="აღმოაჩინე"
          mainTitle="კურორტები, რომლებსაც აუცილებლად უნდა ეწვიო"
          description="სამკურნალო თვისებებით ცნობილი კლიმატური ზონები, ბალნეოლოგიური კურორტები, თერაპიული და გამაჯანსაღებელი პროცედურები."
          buttonText="გაიგე მეტი →"
          galleryData={galleryData}
        />
      </section>
      <section className="mb-[80px]">
        <Carusel
          title="აღმოაჩინე საუკეთესო ადგილები საქართველოში"
          viewAllText="ყველას ნახვა"
          places={georgianPlaces}
        />
      </section>
      <section className="mb-[80px]">
        <HeroSection
          imageUrl="/sights/lake.webp"
          title="აი, ამიტომ უნდა ესტუმრო ბათუმს"
          description="აქაური სუბტროპიკული კლიმატი, ეკოლოგიურად სუფთა ზღვა, მთები და კარგად განვითარებულ ტურისტული ინფრასტრუქტურა წელიწადის ნებისმიერ დროს გამორჩეულად გიმასპინძლებს და ენერგიის სრულ აღდგენაში დაგეხმარება."
          buttonText="გაიგე მეტი"
        />
      </section>
      <section className="mb-[100px]">
        <SwiperSlideCard />
      </section>
      <section className="mb-[100px]">
        <GeorgianMap />
      </section>
    </>
  );
}

export default page;
