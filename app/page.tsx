import SwiperSliderImage from "@/components/modules/SwiperSliderImage";
import CardSwiperSlider from "@/components/CardSwiperSlider";
import MapOfGeorgia from "@/components/modules/MapOfGeorgia";
import CardSections from "@/components/modules/CardSections";
import RecipeGallery from "@/components/RecipeGallery";
import GeorgiaTravelMoments from "@/components/modules/GeorgiaTravelMoments";
import Gzispar from "@/components/modules/Gzispar";
import Blogs from "@/components/modules/Blogs";
import SlideCard from "@/components/modules/SlideCard";
import SlideCardBottom from "@/components/modules/SlideCardBottom";
import { Card, card1 } from "@/constants/data/data";

export default function Home() {
  const card: Card = card1[0];
  return (
    <>
      <section className="mb-[120px]">
        <SwiperSliderImage />
      </section>
      <section className="mb-[120px]">
        <CardSwiperSlider />
      </section>
      <section className="mb-[100px]">
        <MapOfGeorgia />
      </section>
      <section className="mb-[120px]">
        <CardSections />
      </section>
      <section className="mb-[120px]">
        <RecipeGallery items={card.array} />
      </section>
      <section className="mb-[120px]">
        <Gzispar
          imageSrc="/image/vine.webp"
          title="გაგისინჯავს ქართული ღვინო?"
          description="ღვინო პირველად 8000 წლის წინ, საქართველოში დააყენეს. ღვინის დამზადების მსოფლიოში არსებული ორი ტექნოლოგიიდან კი ერთი - ღვინის ქვევრში დაყენების ტექნოლოგია, სწორედ ქართულია."
        />
      </section>
      <section className="mb-[120px]">
        <Blogs />
      </section>
      <section className="mb-[120px]">
        <Gzispar
          imageSrc="/cardImage/gza.jpg"
          title="გასტრონომიული თავგადასავალი ოჯახურ მასპინძლებთან ერთად"
          description="მზიკარი - აერთიანებს ქვეყნის მასშტაბით ოჯახურ მასპინძლებს, რომლებიც სთავაზობენ ადგილობრივ/რეგიონისთვის დამახასიათებელ გასტრონომიულ გამოცდილებას. ქართული მასპინძლობის ტრადიცია რომელიც ყველაზე საინტერესო გამოცდილებაა მოგზაურისთვის, არსად იგრძნობა ისე როგორც ოჯახურ გარემოში."
        />
      </section>
      <section className="mb-[120px]">
        <SlideCard />
      </section>
      <section className="mb-[120px]">
        <Gzispar
          imageSrc="/cardImage/banner.jpg"
          title="მსოფლიოში ერთ-ერთი ყველაზე სტუმართმოყვარე ქვეყანა შენ გელოდება."
          description="აარჩიე შენთვის საინტერესო ადგილი და დაგეგმე დაუვიწყარი მოგზაურობა"
        />
      </section>
      <section className="mb-[120px]">
        <SlideCardBottom />
      </section>
      <hr className="mb-[50px]" />
      <section className="mb-[100px]">
        <GeorgiaTravelMoments />
      </section>
    </>
  );
}
