import Banner from "@/components/modules/Banner";
import Blogs from "@/components/modules/Blogs";
import CardSections from "@/components/modules/CardSections";
import CardSwiperSlider from "@/components/modules/CardSwiperSlider";
import DishesCard from "@/components/modules/DishesCard";
import Gzispar from "@/components/modules/Gzispar";
import MapOfGeorgia from "@/components/modules/MapOfGeorgia";
import SlideCard from "@/components/modules/SlideCard";
import SwiperSliderImage from "@/components/modules/SwiperSliderImage";
import VineCard from "@/components/modules/VineCard";

export default function Home() {
  return (
    <div>
      <div className="mb-[120px]">
        <SwiperSliderImage />
      </div>
      <div className="mb-[120px]">
        <CardSwiperSlider />
      </div>
      <div className="mb-[120px]">
        <MapOfGeorgia />
      </div>
      <div className="mb-[120px]">
        <CardSections />
      </div>
      <section className="mb-[120px]">
        <DishesCard />
      </section>
      <section className="mb-[120px]">
        <VineCard />
      </section>
      <section className="mb-[120px]">
        <Blogs />
      </section>
      <section className="mb-[120px]">
        <Gzispar />
      </section>
      <section className="mb-[120px]">
        <SlideCard />
      </section>
      <section className="mb-[120px]">
        <Banner />
      </section>
    </div>
  );
}
