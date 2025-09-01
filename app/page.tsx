import Banner from "@/components/modules/Banner";
import Blogs from "@/components/modules/Blogs";
import CardSections from "@/components/modules/CardSections";
import CardSwiperSlider from "@/components/modules/CardSwiperSlider";
import DishesCard from "@/components/modules/DishesCard";
import GeorgiaTravelMoments from "@/components/modules/GeorgiaTravelMoments";
import Gzispar from "@/components/modules/Gzispar";
import MapOfGeorgia from "@/components/modules/MapOfGeorgia";
import SlideCard from "@/components/modules/SlideCard";
import SlideCardBottom from "@/components/modules/SlideCardBottom";
import SwiperSliderImage from "@/components/modules/SwiperSliderImage";
import VineCard from "@/components/modules/VineCard";

export default function Home() {
  return (
    <>
      <section className="mb-[120px]">
        <SwiperSliderImage />
      </section>
      <section className="mb-[120px]">
        <CardSwiperSlider />
      </section>
      <section className="mb-[120px]">
        <MapOfGeorgia />
      </section>
      <section className="mb-[120px]">
        <CardSections />
      </section>
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
      <section className="mb-[120px]">
        <SlideCardBottom />
      </section>
      <hr className="mb-[50px]" />
      <section className="mb-[120px]">
        <GeorgiaTravelMoments />
      </section>
    </>
  );
}
