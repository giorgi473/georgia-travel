import TextSection from "@/components/modules/TextSection";
import GeorgianAttractionsGrid from "@/components/modules/GeorgianAttractionsGrid";
import HotelGallerySection from "@/components/modules/HotelGallerySection";
import Carusel from "@/components/modules/Carusel";
import Gzispar from "@/components/modules/Gzispar";
import SlideCard from "@/components/modules/SlideCard";
import { Map } from "@/components/Map";
import { georgianPlaces } from "@/lib/data";

function page() {
  const galleryData = [
    {
      id: "1",
      title: { ka: "ბორჯომის კურორტი", en: "Borjomi Resort" },
      image: "/space/tb.webp",
    },
    {
      id: "2",
      title: { ka: "საირმის კურორტი", en: "Sairme Resort" },
      image: "/space/wy.webp",
    },
  ];
  return (
    <>
      <section className="mb-[40px]">
        <TextSection
          title={{
            ka: "სანახაობები",
            en: "Sights",
          }}
          description={{
            ka: "საქართველო განსაკუთრებული ქვეყანაა, რომელიც განთქმულია გეოგრაფიული და ბიოლოგიური მრავალფეროვნებით, მდიდარია ფლორისა და ფაუნის თვალსაზრისით და მიუხედავად ტერიტორიის სიმცირისა, აქ გავრცელებულია დედამიწის ზედაპირზე არსებული ჰავის თითქმის ყველა ტიპი.",
            en: "Georgia is a unique country, renowned for its geographical and biological diversity, rich in flora and fauna, and despite its small territory, it hosts nearly every type of climate found on Earth.",
          }}
          buttonText={{
            ka: "აღმოაჩინე შენი თავგადასავალი",
            en: "Discover Your Adventure",
          }}
          image="/sights/lake.webp"
        />
      </section>
      <section className="container mx-auto px-5 sm:px-8 md:px-8 lg:px-11 py-8 mb-[100px]">
        <GeorgianAttractionsGrid />
      </section>
      <section className="container mx-auto px-5 sm:px-8 md:px-8 lg:px-11 py-8 mb-[70px]">
        <HotelGallerySection
          sectionLabel={{
            ka: "აღმოაჩინე",
            en: "Discover",
          }}
          mainTitle={{
            ka: "კურორტები, რომლებსაც აუცილებლად უნდა ეწვიო",
            en: "Resorts You Must Visit",
          }}
          description={{
            ka: "სამკურნალო თვისებებით ცნობილი კლიმატური ზონები, ბალნეოლოგიური კურორტები, თერაპიული და გამაჯანსაღებელი პროცედურები.",
            en: "Climatic zones known for their healing properties, balneological resorts, and therapeutic and wellness treatments.",
          }}
          buttonText={{
            ka: "გაიგე მეტი →",
            en: "Learn More →",
          }}
          galleryData={galleryData}
        />
      </section>
      <section className="mb-[80px]">
        <Carusel
          title={{
            ka: "აღმოაჩინე საუკეთესო ადგილები საქართველოში",
            en: "Discover the Best Places in Georgia",
          }}
          viewAllText={{
            ka: "ყველას ნახვა",
            en: "View All",
          }}
          places={georgianPlaces}
        />
      </section>
      <section className="mb-[80px]">
        <Gzispar
          imageSrc="/sights/lake.webp"
          titleKa="აი, ამიტომ უნდა ესტუმრო ბათუმს"
          titleEn="Here's Why You Should Visit Batumi"
          descriptionKa="აქაური სუბტროპიკული კლიმატი, ეკოლოგიურად სუფთა ზღვა, მთები და კარგად განვითარებულ ტურისტული ინფრასტრუქტურა წელიწადის ნებისმიერ დროს გამორჩეულად გიმასპინძლებს და ენერგიის სრულ აღდგენაში დაგეხმარება."
          descriptionEn="The local subtropical climate, pristine sea, mountains, and well-developed tourist infrastructure will warmly welcome you any time of the year and help you fully recharge your energy."
          buttonTextKa="გაიგე მეტი"
          buttonTextEn="Learn More"
        />
      </section>
      <section className="mb-[100px]">
        <SlideCard />
      </section>
      <section className="mb-[100px]">
        <Map />
      </section>
    </>
  );
}

export default page;
