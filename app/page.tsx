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
          titleKa="გაგისინჯავს ქართული ღვინო?"
          titleEn="Would you like to taste Georgian wine?"
          descriptionKa="ღვინო პირველად 8000 წლის წინ, საქართველოში დააყენეს. ღვინის დამზადების მსოფლიოში არსებული ორი ტექნოლოგიიდან კი ერთი - ღვინის ქვევრში დაყენების ტექნოლოგია, სწორედ ქართულია."
          descriptionEn="Wine was first made 8000 years ago in Georgia. One of the two winemaking technologies existing in the world - the technology of making wine in qvevri, is specifically Georgian."
          buttonTextKa="გაგიმარჯოს!"
          buttonTextEn="Cheers!"
        />
      </section>
      <section className="mb-[120px]">
        <Blogs />
      </section>
      <section className="mb-[120px]">
        <Gzispar
          imageSrc="/cardImage/gza.jpg"
          titleKa="აღმოაჩინე ქართული კულინარია"
          titleEn="Discover Georgian Cuisine"
          descriptionKa="ქართული სამზარეულო წარმოადგენს უნიკალურ სინთეზს ევროპული და აზიური ტრადიციების. თითოეული კერძი ამბავს მოგიყვება საქართველოს მდიდარი კულტურული მემკვიდრეობის შესახებ."
          descriptionEn="Georgian cuisine represents a unique synthesis of European and Asian traditions. Each dish tells a story about Georgia's rich cultural heritage."
          buttonTextKa="დააგემოვნე"
          buttonTextEn="Taste Now"
        />
      </section>
      <section className="mb-[120px]">
        <SlideCard />
      </section>
      <section className="mb-[120px]">
        <Gzispar
          imageSrc="/cardImage/banner.jpg"
          titleKa="მსოფლიოში ერთ-ერთი ყველაზე სტუმართმოყვარე ქვეყანა შენ გელოდება."
          titleEn="One of the most hospitable countries in the world is waiting for you."
          descriptionKa="აარჩიე შენთვის საინტერესო ადგილი და დაგეგმე დაუვიწყარი მოგზაურობა"
          descriptionEn="Choose an interesting place for you and plan an unforgettable trip"
          buttonTextKa="დაგეგმე მოგზაურობა"
          buttonTextEn="Plan Your Trip"
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
