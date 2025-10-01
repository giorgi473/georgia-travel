export interface MainSection {
  image: string;
  title: { ka: string; en: string };
  description: { ka: string; en: string };
  buttonText: { ka: string; en: string };
  buttonHref: string;
  spanText: { ka: string; en: string };
}

export interface DescriptionTextProps {
  titleKa: string;
  titleEn: string;
  descriptionKa: string;
  descriptionEn: string;
}

export interface ExploreSnapCardProps {
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

export interface MuseumExhibitProps {
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

export interface Destination {
  id: string;
  title: { ka: string; en: string };
  description: { ka: string; en: string };
  image: string;
  duration: { ka: string; en: string };
  activities: { ka: string; en: string };
  currency: { ka: string; en: string };
}

export interface EventCard {
  id: number;
  image: string;
  title: { ka: string; en: string };
  description: { ka: string; en: string };
  href: string;
}

export interface Location {
  title: { ka: string; en: string };
  items: number;
  image: string;
}

export interface ComponentAttributes {
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
  events: EventCard[];
  locations: Location[]; // Added locations to ComponentAttributes
}

export const componentAttributes: ComponentAttributes[] = [
  {
    mainSection: {
      image: "/nature-adventures/winter-adventures-in-georgia.webp",
      title: { ka: "ზამთრის თავგადასავლები", en: "Winter Adventures" },
      description: {
        ka: "ზამთარი საქართველოში უხვთოვლიანობით და სუსხიანი ქარით არ გამოირჩევა, ამიტომ, მოგზაურობისთვის ესეც შესანიშნავი პერიოდია. სამაგიეროდ, თოვლი არ აკლია ზამთრის კურორტებს - ეწვიე გუდაურის, მესტიის, ბაკურიანის და გოდერძის ევროპული სტანდარტების კურორტებს, სადაც სრიალს ტრასებზეც შეძლებ და გაუკვალავ თოვლშიც მოიწყობ გასეირნებას.",
        en: "Whether you're hitting the slopes for some skiing or snowboarding, exploring the wilderness on snowshoes, or simply taking in the stunning scenery on a leisurely hike, there's something for everyone in Georgia's winter wonderland. So, bundle up and get ready to experience a season of thrills and discovery that will leave you with memories to last a lifetime.",
      },
      buttonText: { ka: "მთავარი", en: "Home" },
      buttonHref: "/",
      spanText: { ka: "ზამთრის თავგადასავლები", en: "Winter Adventures" },
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
    events: [
      {
        id: 1,
        image: "/sights/76(1).webp",
        title: {
          ka: "ქარელის ტურისტული საინფორმაციო ცენტრი ქარელის ტურისტული საინფორმაციო ცენტრი",
          en: "Clown's Perspective",
        },
        description: {
          ka: "ტურისტული მომსახურება",
          en: "Theatre",
        },
        href: "https://places.georgia.travel/%E1%83%9D%E1%83%91%E1%83%98%E1%83%94%E1%83%A5%E1%83%A2%E1%83%94%E1%83%91%E1%83%98/%E1%83%A5%E1%83%90%E1%83%A0%E1%83%94%E1%83%9A%E1%83%98%E1%83%A1-%E1%83%A2%E1%83%A3%E1%83%A0%E1%83%98%E1%83%A1%E1%83%A2%E1%83%A3%E1%83%9A%E1%83%98-%E1%83%A1%E1%83%90%E1%83%98%E1%83%9C%E1%83%A4%E1%83%9D%E1%83%A0%E1%83%9B%E1%83%90%E1%83%AA%E1%83%98%E1%83%9D-%E1%83%AA%E1%83%94%E1%83%9C%E1%83%A2%E1%83%A0%E1%83%98",
      },
      {
        id: 2,
        image: "/sights/76(1).webp",
        title: {
          ka: "SOHO BATUMI ENDORPHINS",
          en: "SOHO BATUMI ENDORPHINS",
        },
        description: {
          ka: "კონცერტები",
          en: "Concerts",
        },
        href: "https://places.georgia.travel/%E1%83%9D%E1%83%91%E1%83%98%E1%83%94%E1%83%A5%E1%83%A2%E1%83%94%E1%83%91%E1%83%98/%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98%E1%83%A1-%E1%83%A2%E1%83%A3%E1%83%A0%E1%83%98%E1%83%A1%E1%83%A2%E1%83%A3%E1%83%9A%E1%83%98-%E1%83%A1%E1%83%90%E1%83%98%E1%83%9C%E1%83%A4%E1%83%9D%E1%83%A0%E1%83%9B%E1%83%90%E1%83%AA%E1%83%98%E1%83%9D-%E1%83%AA%E1%83%94%E1%83%9C%E1%83%A2%E1%83%A0%E1%83%98",
      },
      {
        id: 3,
        image: "/cardImage/sevil.webp",
        title: {
          ka: "JENNIFER LOPEZ",
          en: "JENNIFER LOPEZ",
        },
        description: {
          ka: "კონცერტები",
          en: "Concerts",
        },
        href: "https://tkt.ge/show/21191",
      },
      {
        id: 4,
        image: "/cardImage/ten.webp",
        title: {
          ka: "ECHO EVENTS TH;EN",
          en: "ECHO EVENTS TH;EN",
        },
        description: {
          ka: "კონცერტები",
          en: "Concerts",
        },
        href: "https://tkt.ge/show/23841/echo-events-then",
      },
      {
        id: 5,
        image: "/cardImage/ero.webp",
        title: {
          ka: "ეროვნული სიმპონიური ორკესტრი",
          en: "National Symphony Orchestra",
        },
        description: {
          ka: "კონცერტები",
          en: "Concerts",
        },
        href: "https://tkt.ge/show/22093/erovnuli-simfoniuri-orkestri",
      },
      {
        id: 6,
        image: "/cardImage/soho.webp",
        title: {
          ka: "SOHO BATUMI - CHINAU",
          en: "SOHO BATUMI - CHINAU",
        },
        description: {
          ka: "კონცერტები",
          en: "Concerts",
        },
        href: "https://tkt.ge/show/23633/soho-batumi-chinau",
      },
      {
        id: 7,
        image: "/cardImage/mausi.webp",
        title: {
          ka: "ავი მუსაიფი",
          en: "Avi Musaifi",
        },
        description: {
          ka: "თეატრი",
          en: "Theatre",
        },
        href: "https://tkt.ge/show/13255/avi-musaifi",
      },
      {
        id: 8,
        image: "/cardImage/piano.webp",
        title: {
          ka: "თბილისი პიანო ფესტი",
          en: "Tbilisi Piano Festival",
        },
        description: {
          ka: "კონცერტები",
          en: "Concerts",
        },
        href: "https://tkt.ge/show/23780/tbilisi-piano-festi",
      },
      {
        id: 9,
        image: "/cardImage/sux.webp",
        title: {
          ka: "სუხიშვილები 80",
          en: "Sukhishvili 80",
        },
        description: {
          ka: "კონცერტები",
          en: "Concerts",
        },
        href: "https://tkt.ge/show/23806/sukhishvilebi-80",
      },
      {
        id: 10,
        image: "/cardImage/lisi.webp",
        title: {
          ka: "ლისის სამთო ფესტივალი",
          en: "Lisi Mountain Festival",
        },
        description: {
          ka: "სპორტი",
          en: "Sports",
        },
        href: "https://tkt.ge/show/21716/lisis-samto-festivali",
      },
      {
        id: 11,
        image: "/cardImage/teatri.webp",
        title: {
          ka: "ტკბილი ნოემბერი (პრემიერა)",
          en: "Sweet November (Premiere)",
        },
        description: {
          ka: "თეატრი",
          en: "Theatre",
        },
        href: "https://tkt.ge/show/23735/tkbili-noemberi-premiera",
      },
      {
        id: 12,
        image: "/cardImage/magic.webp",
        title: {
          ka: "ANDREA CASTA - Magical Night",
          en: "ANDREA CASTA - Magical Night",
        },
        description: {
          ka: "კონცერტები",
          en: "Concerts",
        },
        href: "https://tkt.ge/show/23732/andrea-casta-magical-night",
      },
    ],
    locations: [
      {
        title: { ka: "ქუთაისი", en: "Kutaisi" },
        items: 26,
        image: "/sights/kutaisi-gnta.webp",
      },
      {
        title: { ka: "ბათუმი", en: "Batumi" },
        items: 41,
        image: "/sights/batumi-gnta.webp",
      },
      {
        title: { ka: "თბილისი", en: "Tbilisi" },
        items: 208,
        image: "/sights/tbilisi-capital-of-georgia-country.webp",
      },
      {
        title: { ka: "სტეფანწმინდა", en: "Stepantsminda" },
        items: 19,
        image: "/sights/stepantsminda-gnta.webp",
      },
      {
        title: { ka: "სიღნაღი", en: "Sighnaghi" },
        items: 6,
        image: "/sights/sighnaghi-gnta.webp",
      },
      {
        title: { ka: "მცხეთა", en: "Mtskheta" },
        items: 23,
        image: "/sights/mtskheta-gnta.webp",
      },
    ],
  },
];
