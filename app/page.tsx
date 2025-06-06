import CardSections from "@/components/modules/CardSections";
import CardSwiperSlider from "@/components/modules/CardSwiperSlider";
import DishesCard from "@/components/modules/DishesCard";
import MapOfGeorgia from "@/components/modules/MapOfGeorgia";
import SwiperSliderImage from "@/components/modules/SwiperSliderImage";

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
      <div>
        <CardSections />
      </div>
      <section>
        <DishesCard />
      </section>
    </div>
  );
}
