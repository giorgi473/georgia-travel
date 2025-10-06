export interface CuisineCard {
  id: number;
  image: string;
  title: {
    ka: string;
    en: string;
  };
  popularity: number;
}

export const cuisineCards: CuisineCard[] = [
  {
    id: 1,
    image:
      "/card/abkhazian-dishes-abkhazia-ajika-citrus-jams-feihoa-sauces.webp",
    title: {
      ka: "აჭარული ხაჭაპური",
      en: "Adjarian Khachapuri",
    },
    popularity: 4,
  },
  {
    id: 2,
    image: "/card/adjarian-dishes-chirbuli.webp",
    title: {
      ka: "მწვადი",
      en: "Mtsvadi (Georgian BBQ)",
    },
    popularity: 9,
  },
  {
    id: 3,
    image: "/card/wine-made-dishes-churchkhela.webp",
    title: {
      ka: "ხინკალი",
      en: "Khinkali",
    },
    popularity: 10,
  },
  {
    id: 4,
    image: "/card/jurjani-dalila.webp",
    title: {
      ka: "ლობიო",
      en: "Lobio",
    },
    popularity: 7,
  },
  {
    id: 5,
    image: "/card/download.webp",
    title: {
      ka: "ფხალი",
      en: "Pkhali",
    },
    popularity: 6,
  },
  {
    id: 6,
    image: "/card/duck-chakhokhbili-1.webp",
    title: {
      ka: "ჩაქაფული",
      en: "Chakapuli",
    },
    popularity: 8,
  },
  {
    id: 7,
    image: "/card/ritual-menu-bridal-kelekhi-3.webp",
    title: {
      ka: "ჩურჩხელა",
      en: "Churchkhela",
    },
    popularity: 8,
  },
  {
    id: 8,
    image: "/card/meskhetian-dishes-1.webp",
    title: {
      ka: "საწივი",
      en: "Satsivi",
    },
    popularity: 7,
  },
  {
    id: 9,
    image: "/card/kaymagh-gnta.webp",
    title: {
      ka: "საწივი",
      en: "Satsivi",
    },
    popularity: 7,
  },
  {
    id: 10,
    image: "/card/chinuri-gnta.webp",
    title: {
      ka: "საწივი",
      en: "Satsivi",
    },
    popularity: 7,
  },
  {
    id: 11,
    image: "/card/saperavi-gnta.webp",
    title: {
      ka: "საწივი",
      en: "Satsivi",
    },
    popularity: 7,
  },
  {
    id: 12,
    image: "/card/satsivi-gnta.webp",
    title: {
      ka: "საწივი",
      en: "Satsivi",
    },
    popularity: 7,
  },
  {
    id: 13,
    image: "/card/goruli-mtsvane-gnta.webp",
    title: {
      ka: "საწივი",
      en: "Satsivi",
    },
    popularity: 7,
  },
  {
    id: 14,
    image: "/card/ojaleshi-gnta.webp",
    title: {
      ka: "საწივი",
      en: "Satsivi",
    },
    popularity: 7,
  },
];

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

export interface ComponentAttributes {
  mainSection: MainSection;
  descriptionText: DescriptionTextProps;
  exploreSnapCard: ExploreSnapCardProps;
  georgianWonders: {
    id: string;
    name: { ka: string; en: string };
    image: string;
    description: { ka: string; en: string };
  }[];
}

export const componentAttributes: ComponentAttributes[] = [
  // 0 index
  {
    mainSection: {
      image: "/card/acharian-khachapuri.webp",
      title: { ka: "აჭარული ხაჭაპური", en: "Ajarian Khachapuri" },
      description: {
        ka: "ქართული სამზარეულო უნიკალური გემოებით გამოირჩევა. აქ მრავალფეროვანი და მდიდარი განსხვავებაა რეგიონულ სამზარეულოებს შორის, მათ შორის ერთ-ერთი ყველაზე განსაკუთრებული კი აჭარული სამზარეულოა, სადაც ფერთა მთელ პალიტრას შეხვდები და ერთმანეთში შერწყმულ მთის ხისტ და ზღვისპირეთის ნაზ არომატებს აღმოაჩენ. აჭარული ხაჭაპური გამორჩეული ფორმისა და წარმოშობისაა. მისი ისტორია ლაზებს უკავშირდება, რომლებიც მენავეები და მეთევზეები იყვნენ. ლაზებმა ცომი ნავის ფორმით გამოიყვანეს, ყველით გამოავსეს და გულსართში გატეხილი კვერცხი ჩადეს, სწორედ ისე, როგორც მზე ვარდება ზღვაში. გამომცხვარ ხაჭაპურში, ბარაქისა და ხვავის სიმბოლოდ, კარაქის ნაჭერიც დაამატეს.",
        en: "Georgian cuisine is famed around the world for its unique flavors, and the differences between regional cuisines only increase this diversity. Ajarian cuisine is an especially unique take on Georgian traditional cuisine, featuring a combination of flavors encompassing the mountains and the sea.",
      },
      buttonText: { ka: "მთავარი", en: "Home" },
      buttonHref: "/",
      spanText: { ka: "აჭარული ხაჭაპური", en: "Ajarian Khachapuri" },
    },
    descriptionText: {
      titleKa: "რა ინგრედიენტებისგან მზადდება აჭარული ხაჭაპური?",
      titleEn: "What Ingredients do you Need to Make Ajarian Khachapuri?",
      descriptionKa:
        "ეს თავგადასავლების მთელი სამყაროა. ყველა კურორტზე იმართება შეჯიბრებები და ტურნირები, რომლის მონაწილე შენც შეგიძლია გახდე. აქვე, არ დაგავიწყდეს უგემრიელესი ქართული სამზარეულოც, რომელიც ყველა სეზონზე შენს მოგზაურობას დამოუკიდებელ გასტრონომიულ გამოცდილებად აქცევს.",
      descriptionEn:
        "Ajarian khachapuri has become a symbol of Batumi, and any visit to the city would be incomplete without sampling this local delicacy. \n\n Keep in mind that like all khachapuri, Ajarian khachapuri is a heavy dish, but unlike other khachapuri, it is eaten in a very specific way. Before sinking your teeth into this delicious delicacy, it is important to mix the hot cheese, soft-boiled egg, and butter inside the “boat” so that their flavours can mingle. While it is possible to eat Ajarian khachapuri with either your hands or a knife and fork, it is often easiest to use the latter, as Ajarian khachapuri should be served piping hot!",
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

  // 1 index

  {
    mainSection: {
      image: "/card/shutterstock-1902463720-1.webp",
      title: { ka: "მწვადი", en: "Mtsvadi" },
      description: {
        ka: "მილიონი წლის წინათ, ადამიანმა ცეცხლი რომ მოათვინიერა და მისი გამოყენება დაიწყო, ჯოხზე ნანადირევი წამოაგო და შეწვა. გემო გაუსინჯა და მიხვდა, რომ ასე რბილი და გემრიელი საკვები მიიღო.",
        en: "Millennia ago, when people tamed fire and started to use it for their own benefit, hunted games were put on sticks and grilled, revealing a mesmerizing taste that would become a staple of humankind forever more. In Georgia, this is known as Mtsvadi.",
      },
      buttonText: { ka: "მთავარი", en: "Home" },
      buttonHref: "/",
      spanText: { ka: "მწვადი", en: "Mtsvadi" },
    },
    descriptionText: {
      titleKa: "მწვადი საქართველოში",
      titleEn: "Mtsvadi in Georgia",
      descriptionKa:
        "თუკი სხვაგან ბატკნისა და ხბოს მწვადია აღიარებული, საქართველოში ყველაზე პოპულარული ღორის ხორცის მწვადია, განსაკუთრებით - ქართული ჯიშის ღორისგან მომზადებული. მწვადის შეწვის მეთოდი სხვადასხვანაირია - იწვება ლითონის ან ხის შამფურებზე, თონეში, ტაფაზე, ღუმელში.  \n\n კახური მწვადი განსაკუთრებული ფენომენია ქართულ გასტრონომიულ კულტურაში. მწვადისთვის ხორცი აუცილებლად კახური ჯიშის ღორისა უნდა იყოს, ნაკვერჩხალი კი, რომელზედაც იწვება, - წალმის (ვაზის ნასხლავი) ან დეკის (ბუჩქოვანი მცენარე), რომელიც ასეთი წესით შემწვარ ხორცს განუმეორებელ გემოსა და სირბილეს ანიჭებს, განსაკუთრებით მაშინ, როცა კახური ქვევრის ღვინით ან ბროწეულის წვენით იცვარება. \n\n ამიტომაც არის მწვადი კახური სამზარეულოს „საკუთრება“. მწვადის ოხშივარი კახეთს განსაკუთრებით „ზაოტობაზე“ ასდის, დღესასწაულზე, როდესაც ამ რეგიონში არაყს ხდიან. ამ დღეს რამდენიმე ოჯახი ერთად შემოდგამს ცეცხლზე ჭაჭას, ღორს დაკლავს, იქვე მწვადს ააშიშხინებს და ერთმანეთს ნახელავს დაულოცავს. „ზაოტობა“ და „ღორის ქელეხი“, როგორც მას ენამოსწრებული კახელები უწოდებენ, განუყოფელია.  \n\n ხორცს მოზრდილ ნაჭრებად დაანაწევრებენ, შამფურზე ააგებენ, იქვე მარილს წააყრიან და ყოველგვარი სანელებლისა და დანამატის გარეშე ნაკვერცხალზე მანამ ატრიალებენ, სანამ კარგად არ დაიბრაწება, შიგადაშიგ კახურ ქვევრის ღვინოსაც აპკურებენ.  \n\n სახელდახელო სუფრაზე ნაირ-ნაირ მწნილს დაალაგებენ, იქვე აგიზგიზებული თონიდან დედას პურებს ამოყრიან, შამფურზე ჩამოუსვამენ, ჯამზე სურნელოვანი ხორცის ნაჭრები დაცვივდება, ზედ ალყა-ალყა დაჭრილ ხახვს დააყრიან (კახეთის ზოგიერთ სოფელში, მისადევნებლად ბროწეულის წვენსაც მოგართმევენ, ან წვენში ჩაყრიან ცხელ-ცხელ ხორცს), ჭიქებში ახლად ჩამოწვეთილ არაყს, კახურ, ქვევრის ღვინოსაც ჩამოარაკრაკებენ და ნათელია, რომ საუკეთესო დროს საუკეთესო ადგილზე მოხვდი.",
      descriptionEn:
        "Even though Mtsvadi can be made with veal, lamb, or chicken, in Georgia, pork is the most popular type. There are various ways of grilling Mtsvadi, including on metal or wooden skewers, in a tone oven, on a pan, or in a conventional oven. \n\n Made in the country’s easternmost region, Kakhetian Mtsvadi is unique in Georgian culinary culture. The meat for this sort of Mtsvadi must be from a Kakhetian pig, and the embers on which it is grilled must be Tsalami (vine clippings), or Deka (a kind of azalea bush), either of which gives the meat a splendid taste and softness. It is then made even more delectable when glazed with Kakhetian Qvevri wine or pomegranate juice. \n\n That is why Mtsvadi, despite being loved nationwide, really “belongs” to Kakheti. The smoke emanating from the cooking Mtsvadi rises in Kakheti, especially on “Zaotoba,” a holiday on which chacha is distilled. On that day, many families put chacha on the fire together, slaughter pigs, and watch the meat sizzle, toasting each other’s contributions as they do so. Zaotoba and the “pigs’ funeral,” as the quick-witted Kakhetians call it, are inseparable. Anyone who happens to be in Kakheti at that time will find that pork Mtsvadi grilled over Tsalami or Deka is exceptionally delicious. \n\n To prepare it, the meat is cut into medium-sized pieces, put onto skewers, and then salted before being put on top of the embers without any kind of spices or additives, then sprinkled from time to time with Kakhetian Qvevri wine. \n\n All kinds of greens are then set out on the table for the impromptu supra (feast), Shoti bread is taken out from the red-hot tone oven, and used to pull down the seasoned pieces of meat fall down into a bowl, while onions are cut into rings are scattered over it (in some villages in Kakheti, the piping-hot meat is put directly into pomegranate juice), the newly-distilled chacha and Kakhetian Qvevri wine is poured generously into glasses, and a fine time is had by all. ",
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
