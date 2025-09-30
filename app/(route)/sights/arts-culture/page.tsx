"use client";

import React from "react";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ImageContent from "@/components/modules/ImageContent";
import DescriptionText from "@/components/modules/DescriptionText";
import ExploreSnapCard from "@/components/ExploreSnapCard";
import CardSwiperSlider from "@/components/CardSwiperSlider";
import MuseumExhibit from "@/components/MuseumExhibit";
import { DestinationCard } from "@/components/DestinationCard";
import Gzispar from "@/components/modules/Gzispar";
import GeorgianWonders from "@/components/GeorgianWonders";
import { Map } from "@/components/Map";

interface MainSection {
  image: string;
  title: { ka: string; en: string };
  description: { ka: string; en: string };
  buttonText: { ka: string; en: string };
  buttonHref: string;
  spanText: { ka: string; en: string };
}

interface DescriptionTextProps {
  titleKa: string;
  titleEn: string;
  descriptionKa: string;
  descriptionEn: string;
}

interface ExploreSnapCardProps {
  labelKa: string;
  labelEn: string;
  firstSnap: {
    img: string;
    titleKa: string;
    titleEn: string;
    descriptionKa: string;
    descriptionEn: string;
  };
  secondSnap: {
    img: string;
    titleKa: string;
    titleEn: string;
    descriptionKa: string;
    descriptionEn: string;
  };
  thirdSnap: {
    img: string;
    titleKa: string;
    titleEn: string;
    descriptionKa: string;
    descriptionEn: string;
  };
}

interface MuseumExhibitProps {
  mainImageSrc: string;
  detailImage1Src: string;
  detailImage2Src: string;
  heading: { ka: string; en: string };
  description: { ka: string; en: string };
  buttonText: { ka: string; en: string };
  detailText1: { ka: string; en: string };
  detailText2: { ka: string; en: string };
  topSights: { ka: string; en: string };
}

interface Destination {
  id: string;
  title: { ka: string; en: string };
  description: { ka: string; en: string };
  image: string;
  duration: { ka: string; en: string };
  activities: { ka: string; en: string };
  currency: { ka: string; en: string };
}

interface ComponentAttributes {
  mainSection: MainSection;
  descriptionText: DescriptionTextProps;
  exploreSnapCard: ExploreSnapCardProps;
  museumExhibit: MuseumExhibitProps;
  destinations: Destination[];
  georgianWonders: {
    id: string;
    name: { ka: string; en: string };
    image: string;
    description: { ka: string; en: string };
  }[];
}

function ArtsCulturePage() {
  const { currentLanguage } = useLanguage();
  const componentAttributes: ComponentAttributes[] = [
    {
      mainSection: {
        image: "/places/arts-and-culture-in-georgia.webp",
        title: { ka: "ხელოვნება და კულტურა", en: "Arts & Culture" },
        description: {
          ka: "საქართველო უძველესი ქვეყანაა და ქართული კულტურაც უპირველესი ცივილიზაციების ეპოქიდან იწყება. აქაურობა გაგაოცებს სიძველისა და თანამედროვეობის კომბინაციით, კულტურული მემკვიდრეობის ძეგლებით და ისეთი სანახაობებით, რომლებშიც საუკუნოვანი ტრადიციები ახლებურ ფორმებშია გაცოცხლებული.",
          en: "Georgia is a country with a rich cultural history dating back millennia ago. With stunning architectural monuments, folk traditions, songs, dances, crafts, vibrant festivals, theatre, and modern art scenes, this country is a treasure trove of cultural heritage.",
        },
        buttonText: { ka: "მთავარი", en: "Home" },
        buttonHref: "/",
        spanText: { ka: "ხელოვნება და კულტურა", en: "Arts & Culture" },
      },
      descriptionText: {
        titleKa: "ეგზოტიკური, იდუმალი და უნიკალური ქართული კულტურა",
        titleEn: "The exotic, mysterious and exclusive Georgian culture",
        descriptionKa:
          "მიუხედავად იმისა, რომ საქართველოს მუდმივად უწევდა ომები დამპყრობლებთან, ჩვენმა ქვეყანამ მაინც შეძლო და შეინარჩუნა თვითმყოფადი ხუროთმოძღვრება, ენა, უნიკალური დამწერლობა, ლიტერატურა, მუსიკალური და ქორეოგრაფიული ხელოვნება, გასტრონომიული ტრადიციები და სხვა. როდესაც საქართველოში იმოგზაურებ, შენ წინ მრავალსაუკუნოვანი ისტორია გადაიშლება და პასუხი კითხვაზე „რატომ საქართველო?“ სულ რამდენიმე საათში გეცოდინება.",
        descriptionEn:
          "Experience the ancient traditions of Georgia expressed through its heritage sights and monuments. With ancient fortresses, monasteries, synagogues, mosques, cave towns, and castles, Georgia is a living museum of its fascinating past. Explore the local markets and festivals to immerse yourself in the vibrant culture of the region, or immerse yourself into the world of Georgia's art and literature in museums, galleries and bookshops. Georgia has constantly defended itself against would-be conquerors, and the country has managed to preserve its architecture, language, alphabet, literature, music, choreography, culinary traditions, and more.",
      },
      exploreSnapCard: {
        labelKa: "გაეცანი ბლოგს",
        labelEn: "Get Inspired",
        firstSnap: {
          img: "/sights/traditsiuli-samosi-qartuli-klasikuri-samosi.webp",
          titleKa: "ქართული ტრადიციული სამოსი",
          titleEn: "Traditional Georgian Clothes",
          descriptionKa:
            "უნიკალურობა და მრავალფეროვნება ქართული ეროვნული სამოსისა, რომელიც საუკუნეების განმავლობაში იქმნებოდა და დროთა განმავლობაში იცვლებოდა, ქვეყნის გეოგრაფიულმა, სოციალურ-პოლიტიკურმა მდგომარეობამ განაპირობა. მემატიანეების, ჟამთააღმწერლების მიერ მოყოლილი ამბები წარსულის სურათებს აცოცხლებს და წარმოდგენას გვიქმნის იმის შესახებ, როგორ იმოსებოდნენ ჩვენი წინაპრები. მათი სამოსის დეტალები ცხადად ჩანს ძველი ტაძრების ფრესკებიდან, ბარელიეფებიდან და მინიატიურებიდანაც.",
          descriptionEn:
            "The geographical and socio-political context of the nation has had an impact on the diversity of Georgian national dress, which has evolved over the centuries. Our understanding of how our ancestors lived or dressed is influenced by the stories that chroniclers have told. Moreover, the precise details of Georgian clothing are depicted on frescoes, bas-reliefs, and miniatures.",
        },
        secondSnap: {
          img: "/sights/why-georgia-georgian-culture.webp",
          titleKa: "ქართული კულტურა",
          titleEn: "Georgian Unique Culture",
          descriptionKa:
            "ეგზოტიკური, იდუმალი, უნიკალური - თუ ოდესმე გკითხავენ, როგორია ქართული კულტურა, შეგიძლია ამ სამი სიტყვით დაახასიათო. დღეს მსოფლიო საქართველოს ერთ-ერთ ყველაზე სტუმართმოყვარე და თავაზიან ქვეყნად იცნობს.",
          descriptionEn:
            "Authentic, ancient, multifaceted - Georgian culture has been evolving for millennia, being a homeland of daring creators and timeless masterpieces. Today Georgia is recognized around the world as one of its most hospitable countries. We love guests, and we are always happy to introduce our culture to people.",
        },
        thirdSnap: {
          img: "/sights/georgian-folklore-dance.webp",
          titleKa: "გასეირნება ძველ თბილისში",
          titleEn: "Strolling Through the Tbilisi Old Town",
          descriptionKa:
            "ქალაქის ამ უბანს 1936 წლამდე „ტფილისი“ ერქვა, ახლა „ძველი თბილისია“ - ქალაქის ისტორიული ნაწილი და 2007 წლიდან იუნესკოს მსოფლიო მემკვიდრეობის ძეგლთა წევრობის კანდიდატი.",
          descriptionEn:
            "Until 1936, this area of ​​the city was called 'Tpilisi.' Today, this historical part of the city is referred to as 'Old Tbilisi' and, what’s more, it has been UNESCO-listed since 2007.",
        },
      },
      museumExhibit: {
        mainImageSrc: "/sights/museums-in-georgia.webp",
        detailImage1Src: "/sights/zakaria-paliashvili-museum-gnta.webp",
        detailImage2Src:
          "/sights/georgian-national-museum-national-gallery-of-paintings-gnta.webp",
        heading: { ka: "საქართველოს მუზეუმები", en: "Museums" },
        description: {
          ka: "საქართველოს მუზეუმები ინახავს მრავალფეროვან კულტურულ საგანძურს, მათ შორის უძველეს არტეფაქტებს, ხელოვნების ნიმუშებსა და მნიშვნელოვან არქეოლოგიურ აღმოჩენებს. გაეცანით ქვეყნის მდიდარ ისტორიასა და კულტურულ მემკვიდრეობას ამ მომხიბლავი კოლექციების მეშვეობით.",
          en: "Georgia's museums preserve a variety of cultural treasures, including ancient artifacts, artworks, and significant archaeological discoveries. Explore the country's rich history and cultural heritage through these fascinating collections.",
        },
        buttonText: { ka: "გაიგე მეტი", en: "Learn More" },
        detailText1: {
          ka: "ზაქარია ფალიაშვილის მუზეუმი",
          en: "Zakaria Paliashvili Museum",
        },
        detailText2: {
          ka: "საქართველოს ეროვნული გალერეა",
          en: "National Gallery of Paintings",
        },
        topSights: { ka: "აღმოაჩინე", en: "Top Sights" },
      },
      destinations: [
        {
          id: "1",
          title: {
            ka: "ერთდღიანი ტური ქუთ9840აისში",
            en: "One-Day Tour in Kutaisi",
          },
          description: {
            ka: "ამ ერთდღიანი ტურის ფარგლებში, უდიდესი ისტორიული და კულტურული მნიშვნელობის ხუროთმოძღვრების ძეგლს - გეთალის მონასტერს იხილავ, იმერეთის სიმწვანეში ჩაფლულ ბუნებას დაათვალიერებ და უნიკალური გამოცდილების მისაღებად, მოწამეთას სამონასტრო კომპექსსაც ესტუმრები.",
            en: "During this one-day tour, you’ll visit the Gelati Monastery, a monument of immense historical and cultural significance, explore the lush nature of Imereti, and visit the Motsameta Monastery Complex for a unique experience.",
          },
          image: "/places/kutaisi-view-with-birds.webp",
          duration: { ka: "30 კმ", en: "30 km" },
          activities: { ka: "12 სანახაობა", en: "12 attractions" },
          currency: { ka: "30 კმ", en: "30 km" },
        },
        {
          id: "2",
          title: { ka: "კანიონების ერთდღიანი ტური", en: "One-Day Canyon Tour" },
          description: {
            ka: "აღმოაჩინე დასავლეთ საქართველოს გეოგრაფიური და ბიოლოგიური მრავალფეროვნება, მოიარე ულამაზესი ოკაცესა და მარტვილის კანიონი და იხილე ძირძველი კულტურის მშვენიერი დანატოვარი - მარტვილის მონასტერი. ტურის ფარგლებში ასევე შეხვდები სახლინოს რეზიდენციას და საუკეთესო შთაბეჭდილებებით აივსები.",
            en: "Discover the geographical and biological diversity of Western Georgia, explore the stunning Okatse and Martvili Canyons, and see the beautiful legacy of ancient culture at the Martvili Monastery. During the tour, you’ll also visit the Salkhino Residence and leave with the best impressions.",
          },
          image: "/places/martvili-canyon.webp",
          duration: { ka: "8-12 სთ", en: "8-12 hours" },
          activities: {
            ka: "18 სანახაობა 3 აქტივობა",
            en: "18 attractions, 3 activities",
          },
          currency: { ka: "100 კმ", en: "100 km" },
        },
      ],
      georgianWonders: [
        {
          id: "1",
          name: { ka: "სიღნაღის ხედი", en: "Sighnaghi View" },
          image: "/sights/georgian-architecture.webp",
          description: {
            ka: "სიღნაღი, სადაც ძველი ქართული ხუროთმოძღვრება ბუნებასთან ერთად ქმნის მშვენიერ ხედს.",
            en: "Sighnaghi, where ancient Georgian architecture blends with stunning natural scenery.",
          },
        },
        {
          id: "2",
          name: { ka: "ფერის საიდუმლო", en: "Secret of Colors" },
          image: "/sights/georgian-arts.webp",
          description: {
            ka: "ცნობილი ვიტრაჟები, რომლებიც ქართულ კულტურაში ფერისა და ხელოვნების სიმბოლოა.",
            en: "Famous stained glass windows symbolizing color and art in Georgian culture.",
          },
        },
        {
          id: "3",
          name: { ka: "თბილისის ოპერა", en: "Tbilisi Opera" },
          image: "/sights/theatre-and-shows-in-georgia.webp",
          description: {
            ka: "ისტორიული ნაგებობა, რომელიც ქართულ მუსიკალურ ხელოვნებას აისახავს.",
            en: "A historic building reflecting Georgian musical artistry.",
          },
        },
        {
          id: "4",
          name: { ka: "სვანური მთები", en: "Svaneti Mountains" },
          image: "/sights/georgian-folklore-dance.webp",
          description: {
            ka: "სვანეთის მთები და ტრადიციული სამოსი, რომელიც ქართულ იდენტობას გამოხატავს.",
            en: "The Svaneti mountains and traditional attire reflecting Georgian identity.",
          },
        },
      ],
    },
  ];

  return (
    <div className="space-y-24">
      <section>
        <ImageContent {...componentAttributes[0].mainSection} />
      </section>
      <section>
        <DescriptionText {...componentAttributes[0].descriptionText} />
      </section>
      <section className="container mx-auto px-5 sm:px-8 md:px-8 lg:px-11 py-8">
        <ExploreSnapCard {...componentAttributes[0].exploreSnapCard} />
      </section>
      <section>
        <CardSwiperSlider />
      </section>
      <section>
        <MuseumExhibit {...componentAttributes[0].museumExhibit} />
      </section>
      <section className="container mx-auto px-5 sm:pl-8 sm:pr-7 md:pl-8 md:pr-7 lg:pl-11 lg:pr-10 py-8">
        <h2 className="mb-5 text-md sm:text-lg font-bold flex items-center gap-2">
          <Star size={20} className="mb-0.5 text-red-500" />
          {currentLanguage === "ka" ? "პოპულარული ტურები" : "Popular Tours"}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {componentAttributes[0].destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              {...destination}
              currentLanguage={currentLanguage}
            />
          ))}
        </div>
      </section>
      <section>
        <Gzispar
          imageSrc="/sights/festivals-in-georgia.webp"
          titleKa="ფესტივალები საქართველოში"
          titleEn="Georgian Festivals"
          descriptionKa="რა ინტერესებიც არ უნდა გქონდეს, საქართველოში შენთვის საინტერესო ფესტივალს აუცილებლად იპოვი და მიხვდები, რომ აქაურობა დაუსრულებელ გართობასა და ახალ აღმოჩენებს ყოველ ფეხის ნაბიჯზე გთავაზობს."
          descriptionEn="Georgia is home to a variety of festivals, celebrating everything from music and food to crafts and intangible traditions. Regardless of your interest field, you are going to find a festival in Georgia that suits their tastes. Experience the vibrant culture of the country and join in the fun and festivities."
          buttonTextKa="გაიგე მეტი"
          buttonTextEn="Learn More"
        />
      </section>
      <section>
        <GeorgianWonders wonders={componentAttributes[0].georgianWonders} />
      </section>
      <section className="px-5 lg:px-0">
        <Map />
      </section>
    </div>
  );
}

export default ArtsCulturePage;
