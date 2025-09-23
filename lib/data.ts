export interface WorkingHours {
  Monday: string;
  Tuesday: string;
  Wednesday: string;
  Thursday: string;
  Friday: string;
  Saturday: string;
  Sunday: string;
}

export interface AnotherSection {
  name1?: { [key: string]: string | null };
  description?: { [key: string]: string | null };
  image?: string | null;
  name2?: { [key: string]: string | null };
  name3?: { [key: string]: string | null };
  name4?: { [key: string]: string };
  name5?: { [key: string]: string };
  description2?: { [key: string]: string };
  description3?: { [key: string]: string };
  description4?: { [key: string]: string };
  description5?: { [key: string]: string };
}

export interface SlideCard {
  title: { [key: string]: string };
  src: string;
  modalSrc: string;
  additionalDescription: { [key: string]: string };
  text?: { [key: string]: string };
  region: { [key: string]: string };
  city: { [key: string]: string };
  name: { [key: string]: string };
  address: string;
  phone: string;
  website: string;
  workingHours: WorkingHours;
}

export interface Blogs {
  img: string;
  title: { [key: string]: string };
  desc: { [key: string]: string };
  blogText?: { [key: string]: string };
}

export interface Card {
  id: number;
  title: { [key: string]: string };
  src: string;
  modalSrc: string;
  additionalDescription: { [key: string]: string };
  region: { [key: string]: string };
  city: { [key: string]: string };
  description: { [key: string]: string };
  name: { [key: string]: string };
  address: string;
  phone: string;
  website: string;
  workingHours: WorkingHours;
  anotherSection: AnotherSection;
  slideCard?: SlideCard[];
  blogs: Blogs[];
}

export const cardSliderImages: Card[] = [
  {
    id: 1,
    title: {
      en: "Martvili Canyon",
      ka: "მარტვილის კანიონი",
    },
    src: "/home/bla.webp",
    modalSrc: "/home/bla.webp",
    additionalDescription: {
      en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
      ka: "მარტვილის კანიონი სამეგრელოს ბუნებრივი საოცრებაა, ცნობილი თავისი ფირუზისფერი წყლებით.",
    },
    region: {
      en: "Samegrelo",
      ka: "სამეგრელო",
    },
    city: {
      en: "Martvili",
      ka: "მარტვილი",
    },
    description: {
      en: "Natural Monuments",
      ka: "ბუნების ძეგლები",
    },
    name: {
      en: "Okatse Canyon Visitor Center",
      ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
    },
    address: "FG4G+7XV, Okatse, Georgia",
    phone: "595 03 60 47",
    website:
      "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
    workingHours: {
      Monday: "10:00 AM – 5:30 PM",
      Tuesday: "10:00 AM – 5:30 PM",
      Wednesday: "10:00 AM – 5:30 PM",
      Thursday: "10:00 AM – 5:30 PM",
      Friday: "10:00 AM – 5:30 PM",
      Saturday: "10:00 AM – 5:30 PM",
      Sunday: "10:00 AM – 5:30 PM",
    },
    anotherSection: {
      name1: {
        en: "Where is Okatse Canyon located?",
        ka: "სად მდებარეობს ოკაცეს კანიონი?",
      },
      description: {
        en: "Okatse Canyon is one of the most amazing places in our country, and you can reach it quite easily. The canyon is located in Imereti, 50 km from Kutaisi, in the Khoni municipality, near the village of Zeda Gordi. The Dadiani rulers of Samegrelo chose this village as their summer residence due to its unique climate. The scenic route begins right from Gordi. \n\n From the visitor center to the canyon’s cliff trail, it’s over 2 kilometers. You can reach it by car, but if you wish, you can also walk. The paved path passes through a shaded forest full of ancient trees, bordering the Dadiani summer palace.",
        ka: "ოკაცეს კანიონი ჩვენი ქვეყნის ერთ-ერთი ყველაზე საოცარი ადგილია და მისი მიღწევა საკმაოდ მარტივია. კანიონი მდებარეობს იმერეთში, ქუთაისიდან 50 კმ-ში, ხონის მუნიციპალიტეტში, სოფელ ზედა გორდის მახლობლად. სამეგრელოს დადიანთა მმართველებმა ეს სოფელი თავისი უნიკალური კლიმატის გამო აირჩიეს საზაფხულო რეზიდენციად. თვალწარმტაცი მარშრუტი იწყება პირდაპირ გორდიდან. \n\n ვიზიტორთა ცენტრიდან კანიონის კლდოვან ბილიკამდე 2 კილომეტრზე მეტია. მისი მიღწევა შესაძლებელია მანქანით, მაგრამ თუ გსურთ, ფეხით სიარულიც შეგიძლიათ. მოკირწყლული ბილიკი გადის ჩრდილოვან ტყეში, რომელიც სავსეა უძველესი ხეებით და ესაზღვრება დადიანების საზაფხულო სასახლეს.",
      },
      image: "",
      name2: {
        en: "What should you know about Okatse Canyon?",
        ka: "რა უნდა იცოდეთ ოკაცეს კანიონის შესახებ?",
      },
      description2: {
        en: "Okatse Canyon is 2 km long. Its width varies—some areas reach 15-20 meters, while others are 3-6 meters wide. As for its depth, it ranges from 20 to 100 meters. Besides the river, high mountains, and greenery, you’ll find abundant waterfalls and stunning lakes here. \n\n You can admire all this beauty from the canyon’s transparent cliff trail. The trail is 780 meters long, follows a steep cliff, and is very comfortable. \n\n At the end of the trail, there’s a panoramic viewpoint. A smart selfie machine is also installed here to help capture unforgettable moments.",
        ka: "ოკაცეს კანიონი 2 კმ სიგრძისაა. მისი სიგანე იცვლება — ზოგიერთი ადგილი 15-20 მეტრს აღწევს, ზოგი კი 3-6 მეტრის სიგანისაა. რაც შეეხება სიღრმეს, ის 20-დან 100 მეტრამდე მერყეობს. მდინარის, მაღალი მთებისა და მწვანე სივრცის გარდა, აქ უამრავი ჩანჩქერი და განსაცვიფრებელი ტბაა. \n\n ამ სილამაზის დათვალიერება შეგიძლიათ კანიონის გამჭვირვალე კლდოვანი ბილიკიდან. ბილიკი 780 მეტრის სიგრძისაა, მიჰყვება ციცაბო კლდეს და ძალიან კომფორტულია. \n\n ბილიკის ბოლოს არის პანორამული ხედი. აქვე დაყენებულია ჭკვიანი სელფის აპარატი, რომელიც დაგეხმარებათ დაუვიწყარი მომენტების აღბეჭდვაში.",
      },
      description3: { en: "", ka: "" },
      name4: { en: "", ka: "" },
      name5: { en: "", ka: "" },
      description4: { en: "", ka: "" },
      description5: { en: "", ka: "" },
    },
    slideCard: [
      {
        title: {
          en: "Prometheus Cave",
          ka: "პრომეთეს მღვიმე",
        },
        src: "/slidecard/prometheus-cave-gnta.webp",
        modalSrc: "/slidecard/prometheus-cave-gnta.webp",
        additionalDescription: {
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
          ka: "მარტვილის კანიონი სამეგრელოს ბუნებრივი საოცრებაა, ცნობილი თავისი ფირუზისფერი წყლებით.",
        },
        text: {
          en: "Discover popular attractions",
          ka: "აღმოაჩინეთ პოპულარული ატრაქციები",
        },
        region: {
          en: "Samegrelo",
          ka: "სამეგრელო",
        },
        city: {
          en: "Martvili",
          ka: "მარტვილი",
        },
        name: {
          en: "Okatse Canyon Visitor Center",
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        },
        address: "FG4G+7XV, Okatse, Georgia",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          Monday: "10:00 AM – 5:30 PM",
          Tuesday: "10:00 AM – 5:30 PM",
          Wednesday: "10:00 AM – 5:30 PM",
          Thursday: "10:00 AM – 5:30 PM",
          Friday: "10:00 AM – 5:30 PM",
          Saturday: "10:00 AM – 5:30 PM",
          Sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: {
          en: "Bear Lake - Natural Monument in Okatse Canyon",
          ka: "დათვის ტბა - ოკაცეს კანიონის ბუნების ძეგლი",
        },
        src: "/slidecard/datvi-lake-gnta.webp",
        modalSrc: "/slidecard/datvi-lake-gnta.webp",
        additionalDescription: {
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
          ka: "მარტვილის კანიონი სამეგრელოს ბუნებრივი საოცრებაა, ცნობილი თავისი ფირუზისფერი წყლებით.",
        },
        region: {
          en: "Samegrelo",
          ka: "სამეგრელო",
        },
        city: {
          en: "Martvili",
          ka: "მარტვილი",
        },
        name: {
          en: "Okatse Canyon Visitor Center",
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        },
        address: "FG4G+7XV, Okatse, Georgia",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          Monday: "10:00 AM – 5:30 PM",
          Tuesday: "10:00 AM – 5:30 PM",
          Wednesday: "10:00 AM – 5:30 PM",
          Thursday: "10:00 AM – 5:30 PM",
          Friday: "10:00 AM – 5:30 PM",
          Saturday: "10:00 AM – 5:30 PM",
          Sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: {
          en: "Kinchkha (Okatse) Waterfall - Khoni’s Natural Monument",
          ka: "კინჩხა (ოკაცე) ჩანჩქერი - ხონის ბუნების ძეგლი",
        },
        src: "/slidecard/kinchkha-waterfall-gnta.webp",
        modalSrc: "/slidecard/kinchkha-waterfall-gnta.webp",
        additionalDescription: {
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
          ka: "მარტვილის კანიონი სამეგრელოს ბუნებრივი საოცრებაა, ცნობილი თავისი ფირუზისფერი წყლებით.",
        },
        region: {
          en: "Samegrelo",
          ka: "სამეგრელო",
        },
        city: {
          en: "Martvili",
          ka: "მარტვილი",
        },
        name: {
          en: "Okatse Canyon Visitor Center",
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        },
        address: "FG4G+7XV, Okatse, Georgia",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          Monday: "10:00 AM – 5:30 PM",
          Tuesday: "10:00 AM – 5:30 PM",
          Wednesday: "10:00 AM – 5:30 PM",
          Thursday: "10:00 AM – 5:30 PM",
          Friday: "10:00 AM – 5:30 PM",
          Saturday: "10:00 AM – 5:30 PM",
          Sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: {
          en: "Khoni Museum of Local Lore",
          ka: "ხონის ადგილობრივი მხარეთმცოდნეობის მუზეუმი",
        },
        src: "/slidecard/khoni-museum-of-local-lore.webp",
        modalSrc: "/slidecard/khoni-museum-of-local-lore.webp",
        additionalDescription: {
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
          ka: "მარტვილის კანიონი სამეგრელოს ბუნებრივი საოცრებაა, ცნობილი თავისი ფირუზისფერი წყლებით.",
        },
        region: {
          en: "Samegrelo",
          ka: "სამეგრელო",
        },
        city: {
          en: "Martvili",
          ka: "მარტვილი",
        },
        name: {
          en: "Okatse Canyon Visitor Center",
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        },
        address: "FG4G+7XV, Okatse, Georgia",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          Monday: "10:00 AM – 5:30 PM",
          Tuesday: "10:00 AM – 5:30 PM",
          Wednesday: "10:00 AM – 5:30 PM",
          Thursday: "10:00 AM – 5:30 PM",
          Friday: "10:00 AM – 5:30 PM",
          Saturday: "10:00 AM – 5:30 PM",
          Sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: {
          en: "Hotel Prometheus",
          ka: "სასტუმრო პრომეთე",
        },
        src: "/slidecard/hotel-prometheus-gnta.webp",
        modalSrc: "/slidecard/hotel-prometheus-gnta.webp",
        additionalDescription: {
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
          ka: "მარტვილის კანიონი სამეგრელოს ბუნებრივი საოცრებაა, ცნობილი თავისი ფირუზისფერი წყლებით.",
        },
        region: {
          en: "Samegrelo",
          ka: "სამეგრელო",
        },
        city: {
          en: "Martvili",
          ka: "მარტვილი",
        },
        name: {
          en: "Okatse Canyon Visitor Center",
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        },
        address: "FG4G+7XV, Okatse, Georgia",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          Monday: "10:00 AM – 5:30 PM",
          Tuesday: "10:00 AM – 5:30 PM",
          Wednesday: "10:00 AM – 5:30 PM",
          Thursday: "10:00 AM – 5:30 PM",
          Friday: "10:00 AM – 5:30 PM",
          Saturday: "10:00 AM – 5:30 PM",
          Sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: {
          en: "Lomina Lake",
          ka: "ლომინას ტბა",
        },
        src: "/slidecard/lomina-gnta.webp",
        modalSrc: "/slidecard/lomina-gnta.webp",
        additionalDescription: {
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
          ka: "მარტვილის კანიონი სამეგრელოს ბუნებრივი საოცრებაა, ცნობილი თავისი ფირუზისფერი წყლებით.",
        },
        region: {
          en: "Samegrelo",
          ka: "სამეგრელო",
        },
        city: {
          en: "Martvili",
          ka: "მარტვილი",
        },
        name: {
          en: "Okatse Canyon Visitor Center",
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        },
        address: "FG4G+7XV, Okatse, Georgia",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          Monday: "10:00 AM – 5:30 PM",
          Tuesday: "10:00 AM – 5:30 PM",
          Wednesday: "10:00 AM – 5:30 PM",
          Thursday: "10:00 AM – 5:30 PM",
          Friday: "10:00 AM – 5:30 PM",
          Saturday: "10:00 AM – 5:30 PM",
          Sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: {
          en: "Bgheri Cave",
          ka: "ბღერის მღვიმე",
        },
        src: "/slidecard/bgheri-cave-natural-monument.webp",
        modalSrc: "/slidecard/bgheri-cave-natural-monument.webp",
        additionalDescription: {
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
          ka: "მარტვილის კანიონი სამეგრელოს ბუნებრივი საოცრებაა, ცნობილი თავისი ფირუზისფერი წყლებით.",
        },
        region: {
          en: "Samegrelo",
          ka: "სამეგრელო",
        },
        city: {
          en: "Martvili",
          ka: "მარტვილი",
        },
        name: {
          en: "Okatse Canyon Visitor Center",
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        },
        address: "FG4G+7XV, Okatse, Georgia",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          Monday: "10:00 AM – 5:30 PM",
          Tuesday: "10:00 AM – 5:30 PM",
          Wednesday: "10:00 AM – 5:30 PM",
          Thursday: "10:00 AM – 5:30 PM",
          Friday: "10:00 AM – 5:30 PM",
          Saturday: "10:00 AM – 5:30 PM",
          Sunday: "10:00 AM – 5:30 PM",
        },
      },
    ],
    blogs: [
      {
        img: "/cardImage/georgia-europe-georgraphy.webp",
        title: {
          en: "Geography of Georgia",
          ka: "საქართველოს გეოგრაფია",
        },
        blogText: {
          en: "Get inspired",
          ka: "მოდი შთაგონებული",
        },
        desc: {
          en: "Georgia is a small, beautiful country with diverse nature and a mild climate, determined by its interesting geographical location. It is protected by orographic boundaries from the north and south—the Greater Caucasus Range with its glaciers in the north.",
          ka: "საქართველო პატარა, მშვენიერი ქვეყანაა მრავალფეროვანი ბუნებითა და ზომიერი კლიმატით, რაც განპირობებულია მისი საინტერესო გეოგრაფიული მდებარეობით. ის დაცულია ოროგრაფიული საზღვრებით ჩრდილოეთიდან და სამხრეთიდან — ჩრდილოეთით დიდი კავკასიონის ქედი თავისი მყინვარებით.",
        },
      },
      {
        img: "/cardImage/why-georgia-nature.webp",
        title: {
          en: "Nature of Georgia",
          ka: "საქართველოს ბუნება",
        },
        blogText: { en: "", ka: "" },
        desc: {
          en: "In the north—the towering Greater Caucasus, in the west—the sheltered Black Sea, in the south—the Lesser Caucasus Mountains, in the east—open fields, rivers, waterfalls, stunning valleys, peaks, springs, lakes, and reservoirs, streams, forests,",
          ka: "ჩრდილოეთში — მაღალი დიდი კავკასიონი, დასავლეთში — დაცული შავი ზღვა, სამხრეთში — მცირე კავკასიონის მთები, აღმოსავლეთში — ღია მინდვრები, მდინარეები, ჩანჩქერები, განსაცვიფრებელი ხეობები, მწვერვალები, წყაროები, ტბები და წყალსაცავები, ნაკადულები, ტყეები,",
        },
      },
      {
        img: "/cardImage/adjara.webp",
        title: {
          en: "9 Outstanding Attractions in Adjara",
          ka: "9 გამორჩეული ატრაქცია აჭარაში",
        },
        blogText: { en: "", ka: "" },
        desc: {
          en: "Adjara is incredibly beautiful; as you approach Batumi, the vast, shimmering green sea and the city’s strip along the coast look like a lifeline etched on the palm of your hand from above; mountainous Adjara is immersed in greenery in summer and covered in snow up to the rooftops in winter.",
          ka: "აჭარა წარმოუდგენლად ლამაზია; როცა ბათუმს უახლოვდებით, უზარმაზარი, მბზინავი მწვანე ზღვა და ქალაქის სანაპირო ზოლი ზემოდან ხელისგულზე ამოტვიფრულ სიცოცხლის ხაზს ჰგავს; მთიანი აჭარა ზაფხულში მწვანეშია ჩაძირული, ზამთარში კი თოვლითაა დაფარული სახურავებამდე.",
        },
      },
    ],
  },
  {
    id: 2,
    title: {
      en: "Abudelauri Colored Lakes",
      ka: "აბუდელაურის ფერადი ტბები",
    },
    src: "/home/abudelauri-lake-georgia.webp",
    modalSrc: "/home/abudelauri-lake-georgia.webp",
    additionalDescription: {
      en: "Svaneti is renowned for its unique towers and mountainous landscapes.",
      ka: "სვანეთი ცნობილია თავისი უნიკალური კოშკებითა და მთიანი პეიზაჟებით.",
    },
    region: {
      en: "Svaneti",
      ka: "სვანეთი",
    },
    city: {
      en: "Mestia",
      ka: "მესტია",
    },
    description: {
      en: "Natural Monuments",
      ka: "ბუნების ძეგლები",
    },
    name: {
      en: "Svaneti",
      ka: "სვანეთი",
    },
    address: "Mestia, Svaneti Region",
    phone: "+995 577 789 012",
    website: "",
    workingHours: {
      Monday: "08:00 - 20:00",
      Tuesday: "08:00 - 20:00",
      Wednesday: "08:00 - 20:00",
      Thursday: "08:00 - 20:00",
      Friday: "08:00 - 20:00",
      Saturday: "08:00 - 22:00",
      Sunday: "08:00 - 22:00",
    },
    anotherSection: {
      name1: {
        en: "The Secret of Abudelauri Colored Lakes",
        ka: "აბუდელაურის ფერადი ტბების საიდუმლო",
      },
      description: {
        en: "In highland Khevsureti, above the village of Roshka and at the foot of the Chaukhi massif, you’ll find the green, blue, and white lakes. \n\n The unique colors of the Abudelauri Lakes seem magical at first glance, but in reality, several factors influence their hues: the white lake contains carbonates that dissolve as temperatures rise, giving the water a white tint, while the blue and green lakes’ colors are linked to glaciers that continuously erode rocks, with the resulting 'dust' settling in the water, reflecting blue and green under sunlight.",
        ka: "მაღალმთიან ხევსურეთში, სოფელ როშკის ზემოთ და ჭაუხის მასივის ძირში, თქვენ ნახავთ მწვანე, ლურჯ და თეთრ ტბებს. \n\n აბუდელაურის ტბების უნიკალური ფერები ერთი შეხედვით ჯადოსნურად გამოიყურება, მაგრამ სინამდვილეში მათ ფერებზე რამდენიმე ფაქტორი მოქმედებს: თეთრი ტბა შეიცავს კარბონატებს, რომლებიც ტემპერატურის მატებასთან ერთად იშლება და წყალს თეთრ ელფერს აძლევს, ხოლო ლურჯი და მწვანე ტბების ფერები დაკავშირებულია მყინვარებთან, რომლებიც მუდმივად ანგრევს ქანებს, და შედეგად მიღებული 'მტვერი' წყალში ჯდება, რაც მზის შუქზე ლურჯად და მწვანედ აისახება.",
      },
      image: "https://storage.georgia.travel/images/abudelauri-lakes.webp",
      name2: {
        en: "How to Reach the Abudelauri Colored Lakes?",
        ka: "როგორ მივიდეთ აბუდელაურის ფერად ტბებთან?",
      },
      name3: {
        en: "Where Can You Spend the Night?",
        ka: "სად შეიძლება გაათენოთ ღამე?",
      },
      description2: {
        en: "The green and blue lakes are close to each other, while the white lake is slightly farther, directly at the base of the glacier, and the path to it crosses a boulder field, making it relatively challenging. \n\n The best route to the lakes starts from the village of Roshka (1990 m). This is where the road ends, and from there, a 7-kilometer trek can only be done on foot. \n\n Don’t be surprised if the weather changes several times along the way, so it’s best to be prepared for rain, which isn’t uncommon here.",
        ka: "მწვანე და ლურჯი ტბები ერთმანეთთან ახლოსაა, ხოლო თეთრი ტბა ოდნავ შორსაა, პირდაპირ მყინვარის ძირში, და მისკენ მიმავალი გზა გადის ლოდების ველზე, რაც შედარებით რთულია. \n\n ტბებამდე მისასვლელად საუკეთესო მარშრუტი იწყება სოფელ როშკიდან (1990 მ). აქ მთავრდება გზა, და იქიდან 7-კილომეტრიანი ლაშქრობა მხოლოდ ფეხით შეიძლება. \n\n არ გაგიკვირდეთ, თუ გზაზე ამინდი რამდენჯერმე შეიცვლება, ამიტომ უმჯობესია, მოემზადოთ წვიმისთვის, რაც აქ იშვიათი არაა.",
      },
      description3: {
        en: "In Roshka village, there are several family guesthouses where you can enjoy local cuisine, but if you decide to spend the night in tents, this place is also ideal for camping.",
        ka: "სოფელ როშკაში არის რამდენიმე საოჯახო სასტუმრო, სადაც შეგიძლიათ ისიამოვნოთ ადგილობრივი სამზარეულოთი, მაგრამ თუ გადაწყვეტთ ღამის გათევას კარვებში, ეს ადგილი ასევე იდეალურია კემპინგისთვის.",
      },
      name4: {
        en: "When Should You Visit the Abudelauri Lakes?",
        ka: "როდის უნდა ეწვიოთ აბუდელაურის ტბებს?",
      },
      description4: {
        en: "The Abudelauri Lakes are covered in snow until late spring, and water levels drop slightly in August, so the best time to visit is June and July.",
        ka: "აბუდელაურის ტბები გვიან გაზაფხულამდე თოვლითაა დაფარული, ხოლო აგვისტოში წყლის დონე ოდნავ იკლებს, ამიტომ საუკეთესო დრო მოსანახულებლად ივნისი და ივლისია.",
      },
      name5: {
        en: "Another Way to Reach the Abudelauri Lakes?",
        ka: "აბუდელაურის ტბებამდე მისვლის სხვა გზა?",
      },
      description5: {
        en: "It’s also possible to reach the lakes via an alternative route. The hiking trail starts in the village of Juta, in the Kazbegi municipality, and crosses the Chaukhi Pass to reach the Abudelauri Lakes. This route typically takes two days and is recommended for experienced hikers.",
        ka: "ასევე შესაძლებელია ტბებამდე მისვლა ალტერნატიული მარშრუტით. საფეხმავლო ბილიკი იწყება სოფელ ჯუთადან, ყაზბეგის მუნიციპალიტეტში, და გადის ჭაუხის უღელტეხილზე, რათა მიაღწიოს აბუდელაურის ტბებს. ეს მარშრუტი, როგორც წესი, ორ დღეს მოითხოვს და რეკომენდებულია გამოცდილი მოლაშქრეებისთვის.",
      },
    },
    slideCard: [
      {
        title: { en: "", ka: "" },
        src: "",
        modalSrc: "",
        additionalDescription: { en: "", ka: "" },
        region: { en: "", ka: "" },
        city: { en: "", ka: "" },
        name: { en: "", ka: "" },
        address: "",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
    ],
    blogs: [
      {
        img: "/cardImage/georgia-europe-georgraphy.webp",
        title: {
          en: "Geography of Georgia",
          ka: "საქართველოს გეოგრაფია",
        },
        blogText: {
          en: "Explore the blog",
          ka: "გაეცანით ბლოგს",
        },
        desc: {
          en: "Georgia is a small, beautiful country with diverse nature and a mild climate, determined by its interesting geographical location. It is protected by orographic boundaries from the north and south—the Greater Caucasus Range with its glaciers in the north.",
          ka: "საქართველო პატარა, მშვენიერი ქვეყანაა მრავალფეროვანი ბუნებითა და ზომიერი კლიმატით, რაც განპირობებულია მისი საინტერესო გეოგრაფიული მდებარეობით. ის დაცულია ოროგრაფიული საზღვრებით ჩრდილოეთიდან და სამხრეთიდან — ჩრდილოეთით დიდი კავკასიონის ქედი თავისი მყინვარებით.",
        },
      },
      {
        img: "/cardImage/why-georgia-nature.webp",
        title: {
          en: "Nature of Georgia",
          ka: "საქართველოს ბუნება",
        },
        blogText: { en: "", ka: "" },
        desc: {
          en: "In the north—the towering Greater Caucasus, in the west—the sheltered Black Sea, in the south—the Lesser Caucasus Mountains, in the east—open fields, rivers, waterfalls, stunning valleys, peaks, springs, lakes, and reservoirs, streams, forests,",
          ka: "ჩრდილოეთში — მაღალი დიდი კავკასიონი, დასავლეთში — დაცული შავი ზღვა, სამხრეთში — მცირე კავკასიონის მთები, აღმოსავლეთში — ღია მინდვრები, მდინარეები, ჩანჩქერები, განსაცვიფრებელი ხეობები, მწვერვალები, წყაროები, ტბები და წყალსაცავები, ნაკადულები, ტყეები,",
        },
      },
      {
        img: "/cardImage/vardzia-in-samtskhe-javakheti.webp",
        title: {
          en: "9 Outstanding Attractions in Samtskhe-Javakheti",
          ka: "9 გამორჩეული ატრაქცია სამცხე-ჯავახეთში",
        },
        blogText: { en: "", ka: "" },
        desc: {
          en: "Today’s Samtskhe-Javakheti, once called Meskheti, is so rich in attractions that you can plan an interesting and unique trip here.",
          ka: "დღევანდელი სამცხე-ჯავახეთი, რომელსაც ოდესღაც მესხეთი ერქვა, იმდენად მდიდარია ატრაქციებით, რომ აქ შეგიძლიათ დაგეგმოთ საინტერესო და უნიკალური მოგზაურობა.",
        },
      },
    ],
  },
  {
    id: 3,
    title: {
      en: "St. George's Church in Gogni",
      ka: "გოგნის წმ. გიორგის ეკლესია",
    },
    src: "/home/gogni-church.webp",
    modalSrc: "/home/gogni-church.webp",
    additionalDescription: {
      en: "Gogni's St. George Church is standing on a high hill 12 kilometers away from Terjola city in Imereti Region. Twice a year, on May 6 and November 23, many pilgrims visit this 1500-year-old church to celebrate St. George’s Day.",
      ka: "ლეგენდის თანახმად, სოფელ გოგნში მცხოვრებ დავრდომილ მოხუცს წმინდა გიორგიმ პატარა ჩიტის საშუალებით სალოცავის აშენების ადგილი მიანიშნა. სოფელმა სალოცავი ააგო და კარიც ჩამოჰკიდა, მაგრამ ყოველღამე კარი თავისით ვარდებოდა. ამის გამო, სალოცავს „კარუგდებელი“ უწოდეს.",
    },
    region: {
      en: "Imereti",
      ka: "იმერეთი",
    },
    city: {
      en: "Terjola",
      ka: "თერჯოლა",
    },
    description: {
      en: "Natural Monuments",
      ka: "ბუნების ძეგლები",
    },
    name: {
      en: "Svaneti",
      ka: "სვანეთი",
    },
    address: "Mestia, Svaneti Region",
    phone: "+995 577 789 012",
    website: "",
    workingHours: {
      Monday: "08:00 - 20:00",
      Tuesday: "08:00 - 20:00",
      Wednesday: "08:00 - 20:00",
      Thursday: "08:00 - 20:00",
      Friday: "08:00 - 20:00",
      Saturday: "08:00 - 22:00",
      Sunday: "08:00 - 22:00",
    },
    anotherSection: {
      name1: {
        en: "",
        ka: "გოგნის წმინდა გიორგის სახელობის ეკლესიის შესახებ",
      },
      description: {
        en: "According to legend, St. George sent a small bird to an elderly man from Gogni village, ordering him to build a shrine in his honor. The villagers got together and fulfilled the saint’s wish. Once they finished the construction and finally installed the door, the door suddenly fell and kept doing it despite all their efforts. Because of this, the shrine was called Karugdeli - “doorless” \n\n This is the only church in Georgia that has no door, so it is welcoming worshippers anytime. \n\n The locals believe that those who enter the temple three times on St. George’s Day will have their prayers and wishes fulfilled. That’s why on May 6 and November 23, hundreds of people are walking to the temple to pray - most of them barefoot, showing their humility in front of higher powers.",
        ka: "ეს საქართველოში ერთადერთი ეკლესიაა, რომელსაც კარი არ აქვს. ის არასდროს იკეტება და ადამიანებს სალოცავში შესვლა ნებისმიერ დროს შეუძლიათ. \n\n გოგნის წინდა გიორგის ეკლესია რეგიონ იმერეთში, თერჯოლიდან 12 კილომეტრში, ულამაზესი ურთხლის ტყეში, მაღალ გორაზე დგას. ეს პატარა ერთნავიანი სალოცავი VII-VIII საუკუნეებში ქვითკირითაა აშენებული. წელიწადში ორჯერ, გიორგობას, ამ ადგილს უამრავი მომლოცველი სტუმრობს და წმინდა გიორგის სურვილების ასრულებას სთხოვს. \n\n წმინდა გიორგი საქართველოში გამორჩეული წმინდანია. მის სახელზე ქვეყანაში 365 ეკლესიაა აგებული. ქართველები გიორგობას წელიწადში ორჯერ აღნიშნავენ: 6 მაისს - წმინდანის დაბადების დღეს და 23 ნოემბერს - როცა ის ბორბალზე აწამეს. \n\n გადმოცემის თანახმად, ვინც ამ დღეებში ტაძარს სამჯერ შემოუვლის, ყველა სურვილი აუსრულდება. თუ გოგნის სალოცავს გიორგობას ეწვევით, თავად იხილავთ ტაძრისკენ მიმავალ ათასობით ადამიანს, რომელთა უმეტესობა გზას ფეხშიშველი მიუყვება.",
      },
      image: "",
      name2: {
        en: "",
        ka: "",
      },
      name3: {
        en: "",
        ka: "",
      },
      description2: {
        en: "",
        ka: "",
      },
      description3: {
        en: "",
        ka: "",
      },
      name4: {
        en: "",
        ka: "",
      },
      description4: {
        en: "",
        ka: "",
      },
      name5: {
        en: "",
        ka: "",
      },
      description5: {
        en: "",
        ka: "",
      },
    },
    slideCard: [
      {
        title: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        src: "/slideCard/motsameta-monastery-gnta.webp",
        modalSrc: "/slideCard/motsameta-monastery-gnta.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: {
          en: "Tsutskhvati Cave - A protected area in Tkibuli Municipality",
          ka: "ნავენახევის მღვიმე - იმერეთის შთამბეჭდავი ღირსშესანიშნაობა",
        },
        src: "/slideCard/navenakhevi-cave-gnta.webp",
        modalSrc: "/slideCard/navenakhevi-cave-gnta.webp",
        additionalDescription: {
          en: "Navenakhevi is one of the most beautiful caves in Imereti. Looking inside it, you can see stalactites and stalagmites made of limestone, which were formed over millions of years.",
          ka: "იმერეთის მღვიმეებიდან ყველაზე ცნობილი პრომეთესა და სათაფლიის მღვიმეებია, თუმცა არანაკლებ შთამბეჭდავია ნავენახევის მღვიმე. აქ უცნაური ფორმის სტალაგმიტები და სტალაქტიტები დაგხვდებათ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: {
          en: "Tsutskhvati Cave - A protected area in Tkibuli Municipality",
          ka: "ცუცხვათის მღვიმე",
        },
        src: "/slideCard/tsutskhvati-cave-natural-monument-gnta.webp",
        modalSrc: "/slideCard/tsutskhvati-cave-natural-monument-gnta.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: {
          en: "Natural monument of the Tskaltsitela Gorge",
          ka: "წყალწითელას ხეობის ბუნების ძეგლი",
        },
        src: "/slideCard/tskaltsitela-gorge-natural-monument.webp",
        modalSrc: "/slideCard/tskaltsitela-gorge-natural-monument.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: { en: "Dzevri Cave", ka: "ძევრის მღვიმე" },
        src: "/slideCard/dzevri-caves.webp",
        modalSrc: "/slideCard/dzevri-caves.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        src: "/slideCard/davit-kldiashvili-house-museum-gnta.webp",
        modalSrc: "/slideCard/davit-kldiashvili-house-museum-gnta.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
    ],
    blogs: [
      {
        img: "/cardImage/georgia-europe-georgraphy.webp",
        title: {
          en: "Geography of Georgia",
          ka: "საქართველოს გეოგრაფია",
        },
        blogText: {
          en: "Explore the blog",
          ka: "გაეცანით ბლოგს",
        },
        desc: {
          en: "Georgia is a small, beautiful country with diverse nature and a mild climate, determined by its interesting geographical location. It is protected by orographic boundaries from the north and south—the Greater Caucasus Range with its glaciers in the north.",
          ka: "საქართველო პატარა, მშვენიერი ქვეყანაა მრავალფეროვანი ბუნებითა და ზომიერი კლიმატით, რაც განპირობებულია მისი საინტერესო გეოგრაფიული მდებარეობით. ის დაცულია ოროგრაფიული საზღვრებით ჩრდილოეთიდან და სამხრეთიდან — ჩრდილოეთით დიდი კავკასიონის ქედი თავისი მყინვარებით.",
        },
      },
      {
        img: "/cardImage/why-georgia-nature.webp",
        title: {
          en: "Nature of Georgia",
          ka: "საქართველოს ბუნება",
        },
        blogText: { en: "", ka: "" },
        desc: {
          en: "In the north—the towering Greater Caucasus, in the west—the sheltered Black Sea, in the south—the Lesser Caucasus Mountains, in the east—open fields, rivers, waterfalls, stunning valleys, peaks, springs, lakes, and reservoirs, streams, forests,",
          ka: "ჩრდილოეთში — მაღალი დიდი კავკასიონი, დასავლეთში — დაცული შავი ზღვა, სამხრეთში — მცირე კავკასიონის მთები, აღმოსავლეთში — ღია მინდვრები, მდინარეები, ჩანჩქერები, განსაცვიფრებელი ხეობები, მწვერვალები, წყაროები, ტბები და წყალსაცავები, ნაკადულები, ტყეები,",
        },
      },
      {
        img: "/cardImage/vardzia-in-samtskhe-javakheti.webp",
        title: {
          en: "9 Outstanding Attractions in Samtskhe-Javakheti",
          ka: "9 გამორჩეული ატრაქცია სამცხე-ჯავახეთში",
        },
        blogText: { en: "", ka: "" },
        desc: {
          en: "Today’s Samtskhe-Javakheti, once called Meskheti, is so rich in attractions that you can plan an interesting and unique trip here.",
          ka: "დღევანდელი სამცხე-ჯავახეთი, რომელსაც ოდესღაც მესხეთი ერქვა, იმდენად მდიდარია ატრაქციებით, რომ აქ შეგიძლიათ დაგეგმოთ საინტერესო და უნიკალური მოგზაურობა.",
        },
      },
    ],
  },
  {
    id: 4,
    title: {
      en: "Vardzia",
      ka: "ვარძია",
    },
    src: "/home/vardzia-gnta.webp",
    modalSrc: "/home/vardzia-gnta.webp",
    additionalDescription: {
      en: "No matter how many times you visit Georgia, the country will continuously charm you. Incomparable, centuries-old monuments will spread all of history out before your eyes and tell you stories that you can hear nowhere else. One of those creations is Vardzia, a grand ensemble of medieval cliff architecture and one of the most popular monuments in Georgia.",
      ka: "რამდენჯერაც არ უნდა ესტუმრო საქართველოს, ეს ქვეყანა ყოველ ჯერზე თავიდან გაგაოცებს, მოგხიბლავს და დროში მოგზაურობას მოგანდომებს - საუკუნეების წინანდელი განუმეორებელი ძეგლები შენს წინ გადაშლის მთელ ისტორიას და მოგიყვება ამბებს, რომლებსაც სხვაგან ვერსად მოისმენ. სწორედ ერთ-ერთი ასეთი ქმნილებაა ვარძია - შუა საუკუნეების კლდის ხუროთმოძღვრების დიდებული ანსამბლი და ერთ-ერთი ყველაზე პოპულარული ძეგლი საქართველოში.",
    },
    region: {
      en: "Samtskhe-Javakheti",
      ka: "სამცხე-ჯავახეთი",
    },
    city: {
      en: "Aspindza",
      ka: "ასპინძა",
    },
    description: {
      en: "Natural Monuments",
      ka: "ბუნების ძეგლები",
    },
    name: {
      en: "Svaneti",
      ka: "სვანეთი",
    },
    address: "Mestia, Svaneti Region",
    phone: "+995 577 789 012",
    website: "",
    workingHours: {
      Monday: "08:00 - 20:00",
      Tuesday: "08:00 - 20:00",
      Wednesday: "08:00 - 20:00",
      Thursday: "08:00 - 20:00",
      Friday: "08:00 - 20:00",
      Saturday: "08:00 - 22:00",
      Sunday: "08:00 - 22:00",
    },
    anotherSection: {
      name1: {
        en: "",
        ka: "გოგნის წმინდა გიორგის სახელობის ეკლესიის შესახებ",
      },
      description: {
        en: "According to legend, St. George sent a small bird to an elderly man from Gogni village, ordering him to build a shrine in his honor. The villagers got together and fulfilled the saint’s wish. Once they finished the construction and finally installed the door, the door suddenly fell and kept doing it despite all their efforts. Because of this, the shrine was called Karugdeli - “doorless” \n\n This is the only church in Georgia that has no door, so it is welcoming worshippers anytime. \n\n The locals believe that those who enter the temple three times on St. George’s Day will have their prayers and wishes fulfilled. That’s why on May 6 and November 23, hundreds of people are walking to the temple to pray - most of them barefoot, showing their humility in front of higher powers.",
        ka: "ეს საქართველოში ერთადერთი ეკლესიაა, რომელსაც კარი არ აქვს. ის არასდროს იკეტება და ადამიანებს სალოცავში შესვლა ნებისმიერ დროს შეუძლიათ. \n\n გოგნის წინდა გიორგის ეკლესია რეგიონ იმერეთში, თერჯოლიდან 12 კილომეტრში, ულამაზესი ურთხლის ტყეში, მაღალ გორაზე დგას. ეს პატარა ერთნავიანი სალოცავი VII-VIII საუკუნეებში ქვითკირითაა აშენებული. წელიწადში ორჯერ, გიორგობას, ამ ადგილს უამრავი მომლოცველი სტუმრობს და წმინდა გიორგის სურვილების ასრულებას სთხოვს. \n\n წმინდა გიორგი საქართველოში გამორჩეული წმინდანია. მის სახელზე ქვეყანაში 365 ეკლესიაა აგებული. ქართველები გიორგობას წელიწადში ორჯერ აღნიშნავენ: 6 მაისს - წმინდანის დაბადების დღეს და 23 ნოემბერს - როცა ის ბორბალზე აწამეს. \n\n გადმოცემის თანახმად, ვინც ამ დღეებში ტაძარს სამჯერ შემოუვლის, ყველა სურვილი აუსრულდება. თუ გოგნის სალოცავს გიორგობას ეწვევით, თავად იხილავთ ტაძრისკენ მიმავალ ათასობით ადამიანს, რომელთა უმეტესობა გზას ფეხშიშველი მიუყვება.",
      },
      image: "",
      name2: {
        en: "",
        ka: "",
      },
      name3: {
        en: "",
        ka: "",
      },
      description2: {
        en: "",
        ka: "",
      },
      description3: {
        en: "",
        ka: "",
      },
      name4: {
        en: "",
        ka: "",
      },
      description4: {
        en: "",
        ka: "",
      },
      name5: {
        en: "",
        ka: "",
      },
      description5: {
        en: "",
        ka: "",
      },
    },
    slideCard: [
      {
        title: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        src: "/slideCard/motsameta-monastery-gnta.webp",
        modalSrc: "/slideCard/motsameta-monastery-gnta.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: {
          en: "Tsutskhvati Cave - A protected area in Tkibuli Municipality",
          ka: "ნავენახევის მღვიმე - იმერეთის შთამბეჭდავი ღირსშესანიშნაობა",
        },
        src: "/slideCard/navenakhevi-cave-gnta.webp",
        modalSrc: "/slideCard/navenakhevi-cave-gnta.webp",
        additionalDescription: {
          en: "Navenakhevi is one of the most beautiful caves in Imereti. Looking inside it, you can see stalactites and stalagmites made of limestone, which were formed over millions of years.",
          ka: "იმერეთის მღვიმეებიდან ყველაზე ცნობილი პრომეთესა და სათაფლიის მღვიმეებია, თუმცა არანაკლებ შთამბეჭდავია ნავენახევის მღვიმე. აქ უცნაური ფორმის სტალაგმიტები და სტალაქტიტები დაგხვდებათ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: {
          en: "Tsutskhvati Cave - A protected area in Tkibuli Municipality",
          ka: "ცუცხვათის მღვიმე",
        },
        src: "/slideCard/tsutskhvati-cave-natural-monument-gnta.webp",
        modalSrc: "/slideCard/tsutskhvati-cave-natural-monument-gnta.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: {
          en: "Natural monument of the Tskaltsitela Gorge",
          ka: "წყალწითელას ხეობის ბუნების ძეგლი",
        },
        src: "/slideCard/tskaltsitela-gorge-natural-monument.webp",
        modalSrc: "/slideCard/tskaltsitela-gorge-natural-monument.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: { en: "Dzevri Cave", ka: "ძევრის მღვიმე" },
        src: "/slideCard/dzevri-caves.webp",
        modalSrc: "/slideCard/dzevri-caves.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        src: "/slideCard/davit-kldiashvili-house-museum-gnta.webp",
        modalSrc: "/slideCard/davit-kldiashvili-house-museum-gnta.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
    ],
    blogs: [
      {
        img: "/cardImage/georgia-europe-georgraphy.webp",
        title: {
          en: "Geography of Georgia",
          ka: "საქართველოს გეოგრაფია",
        },
        blogText: {
          en: "Explore the blog",
          ka: "გაეცანით ბლოგს",
        },
        desc: {
          en: "Georgia is a small, beautiful country with diverse nature and a mild climate, determined by its interesting geographical location. It is protected by orographic boundaries from the north and south—the Greater Caucasus Range with its glaciers in the north.",
          ka: "საქართველო პატარა, მშვენიერი ქვეყანაა მრავალფეროვანი ბუნებითა და ზომიერი კლიმატით, რაც განპირობებულია მისი საინტერესო გეოგრაფიული მდებარეობით. ის დაცულია ოროგრაფიული საზღვრებით ჩრდილოეთიდან და სამხრეთიდან — ჩრდილოეთით დიდი კავკასიონის ქედი თავისი მყინვარებით.",
        },
      },
      {
        img: "/cardImage/why-georgia-nature.webp",
        title: {
          en: "Nature of Georgia",
          ka: "საქართველოს ბუნება",
        },
        blogText: { en: "", ka: "" },
        desc: {
          en: "In the north—the towering Greater Caucasus, in the west—the sheltered Black Sea, in the south—the Lesser Caucasus Mountains, in the east—open fields, rivers, waterfalls, stunning valleys, peaks, springs, lakes, and reservoirs, streams, forests,",
          ka: "ჩრდილოეთში — მაღალი დიდი კავკასიონი, დასავლეთში — დაცული შავი ზღვა, სამხრეთში — მცირე კავკასიონის მთები, აღმოსავლეთში — ღია მინდვრები, მდინარეები, ჩანჩქერები, განსაცვიფრებელი ხეობები, მწვერვალები, წყაროები, ტბები და წყალსაცავები, ნაკადულები, ტყეები,",
        },
      },
      {
        img: "/cardImage/vardzia-in-samtskhe-javakheti.webp",
        title: {
          en: "9 Outstanding Attractions in Samtskhe-Javakheti",
          ka: "9 გამორჩეული ატრაქცია სამცხე-ჯავახეთში",
        },
        blogText: { en: "", ka: "" },
        desc: {
          en: "Today’s Samtskhe-Javakheti, once called Meskheti, is so rich in attractions that you can plan an interesting and unique trip here.",
          ka: "დღევანდელი სამცხე-ჯავახეთი, რომელსაც ოდესღაც მესხეთი ერქვა, იმდენად მდიდარია ატრაქციებით, რომ აქ შეგიძლიათ დაგეგმოთ საინტერესო და უნიკალური მოგზაურობა.",
        },
      },
    ],
  },
  {
    id: 5,
    title: {
      en: "Sataplia Cave",
      ka: "სათაფლიის მღვიმე და ნაკრძალი",
    },
    src: "/home/sataplia-cave-and-nature-reserve-gnta.webp",
    modalSrc: "/home/sataplia-cave-and-nature-reserve-gnta.webp",
    additionalDescription: {
      en: "Where in the world can you see the tracks of the Satapliasaurus, a dinosaur in the same family as the Tyrannosaurus Rex? In Georgia’s Sataplia Nature Reserve, of course!",
      ka: "თუ დიადი ისტორიული ამბები გხიბლავს, მაშინ საქართველოში სათაფლიის მღვიმესა და ნაკრძალს აუცილებლად უნდა ესტუმრო, რადგან ეს ადგილი 120 მილიონი წლის წინანდელი დინოზავრის - Satapliazaurus-ის ნაკვალევით არის ცნობილი.",
    },
    region: {
      en: "Imereti",
      ka: "იმერეთი",
    },
    city: {
      en: "Kutaisi",
      ka: "ქუთაისი",
    },
    description: {
      en: "Natural Monuments",
      ka: "ბუნების ძეგლები",
    },
    name: {
      en: "Svaneti",
      ka: "სვანეთი",
    },
    address: "Mestia, Svaneti Region",
    phone: "+995 577 789 012",
    website: "",
    workingHours: {
      Monday: "08:00 - 20:00",
      Tuesday: "08:00 - 20:00",
      Wednesday: "08:00 - 20:00",
      Thursday: "08:00 - 20:00",
      Friday: "08:00 - 20:00",
      Saturday: "08:00 - 22:00",
      Sunday: "08:00 - 22:00",
    },
    anotherSection: {
      name1: {
        en: "",
        ka: "გოგნის წმინდა გიორგის სახელობის ეკლესიის შესახებ",
      },
      description: {
        en: "According to legend, St. George sent a small bird to an elderly man from Gogni village, ordering him to build a shrine in his honor. The villagers got together and fulfilled the saint’s wish. Once they finished the construction and finally installed the door, the door suddenly fell and kept doing it despite all their efforts. Because of this, the shrine was called Karugdeli - “doorless” \n\n This is the only church in Georgia that has no door, so it is welcoming worshippers anytime. \n\n The locals believe that those who enter the temple three times on St. George’s Day will have their prayers and wishes fulfilled. That’s why on May 6 and November 23, hundreds of people are walking to the temple to pray - most of them barefoot, showing their humility in front of higher powers.",
        ka: "ეს საქართველოში ერთადერთი ეკლესიაა, რომელსაც კარი არ აქვს. ის არასდროს იკეტება და ადამიანებს სალოცავში შესვლა ნებისმიერ დროს შეუძლიათ. \n\n გოგნის წინდა გიორგის ეკლესია რეგიონ იმერეთში, თერჯოლიდან 12 კილომეტრში, ულამაზესი ურთხლის ტყეში, მაღალ გორაზე დგას. ეს პატარა ერთნავიანი სალოცავი VII-VIII საუკუნეებში ქვითკირითაა აშენებული. წელიწადში ორჯერ, გიორგობას, ამ ადგილს უამრავი მომლოცველი სტუმრობს და წმინდა გიორგის სურვილების ასრულებას სთხოვს. \n\n წმინდა გიორგი საქართველოში გამორჩეული წმინდანია. მის სახელზე ქვეყანაში 365 ეკლესიაა აგებული. ქართველები გიორგობას წელიწადში ორჯერ აღნიშნავენ: 6 მაისს - წმინდანის დაბადების დღეს და 23 ნოემბერს - როცა ის ბორბალზე აწამეს. \n\n გადმოცემის თანახმად, ვინც ამ დღეებში ტაძარს სამჯერ შემოუვლის, ყველა სურვილი აუსრულდება. თუ გოგნის სალოცავს გიორგობას ეწვევით, თავად იხილავთ ტაძრისკენ მიმავალ ათასობით ადამიანს, რომელთა უმეტესობა გზას ფეხშიშველი მიუყვება.",
      },
      image: "",
      name2: {
        en: "",
        ka: "",
      },
      name3: {
        en: "",
        ka: "",
      },
      description2: {
        en: "",
        ka: "",
      },
      description3: {
        en: "",
        ka: "",
      },
      name4: {
        en: "",
        ka: "",
      },
      description4: {
        en: "",
        ka: "",
      },
      name5: {
        en: "",
        ka: "",
      },
      description5: {
        en: "",
        ka: "",
      },
    },
    slideCard: [
      {
        title: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        src: "/slideCard/motsameta-monastery-gnta.webp",
        modalSrc: "/slideCard/motsameta-monastery-gnta.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: {
          en: "Tsutskhvati Cave - A protected area in Tkibuli Municipality",
          ka: "ნავენახევის მღვიმე - იმერეთის შთამბეჭდავი ღირსშესანიშნაობა",
        },
        src: "/slideCard/navenakhevi-cave-gnta.webp",
        modalSrc: "/slideCard/navenakhevi-cave-gnta.webp",
        additionalDescription: {
          en: "Navenakhevi is one of the most beautiful caves in Imereti. Looking inside it, you can see stalactites and stalagmites made of limestone, which were formed over millions of years.",
          ka: "იმერეთის მღვიმეებიდან ყველაზე ცნობილი პრომეთესა და სათაფლიის მღვიმეებია, თუმცა არანაკლებ შთამბეჭდავია ნავენახევის მღვიმე. აქ უცნაური ფორმის სტალაგმიტები და სტალაქტიტები დაგხვდებათ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: {
          en: "Tsutskhvati Cave - A protected area in Tkibuli Municipality",
          ka: "ცუცხვათის მღვიმე",
        },
        src: "/slideCard/tsutskhvati-cave-natural-monument-gnta.webp",
        modalSrc: "/slideCard/tsutskhvati-cave-natural-monument-gnta.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: {
          en: "Natural monument of the Tskaltsitela Gorge",
          ka: "წყალწითელას ხეობის ბუნების ძეგლი",
        },
        src: "/slideCard/tskaltsitela-gorge-natural-monument.webp",
        modalSrc: "/slideCard/tskaltsitela-gorge-natural-monument.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: { en: "Dzevri Cave", ka: "ძევრის მღვიმე" },
        src: "/slideCard/dzevri-caves.webp",
        modalSrc: "/slideCard/dzevri-caves.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        src: "/slideCard/davit-kldiashvili-house-museum-gnta.webp",
        modalSrc: "/slideCard/davit-kldiashvili-house-museum-gnta.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
    ],
    blogs: [
      {
        img: "/cardImage/georgia-europe-georgraphy.webp",
        title: {
          en: "Geography of Georgia",
          ka: "საქართველოს გეოგრაფია",
        },
        blogText: {
          en: "Explore the blog",
          ka: "გაეცანით ბლოგს",
        },
        desc: {
          en: "Georgia is a small, beautiful country with diverse nature and a mild climate, determined by its interesting geographical location. It is protected by orographic boundaries from the north and south—the Greater Caucasus Range with its glaciers in the north.",
          ka: "საქართველო პატარა, მშვენიერი ქვეყანაა მრავალფეროვანი ბუნებითა და ზომიერი კლიმატით, რაც განპირობებულია მისი საინტერესო გეოგრაფიული მდებარეობით. ის დაცულია ოროგრაფიული საზღვრებით ჩრდილოეთიდან და სამხრეთიდან — ჩრდილოეთით დიდი კავკასიონის ქედი თავისი მყინვარებით.",
        },
      },
      {
        img: "/cardImage/why-georgia-nature.webp",
        title: {
          en: "Nature of Georgia",
          ka: "საქართველოს ბუნება",
        },
        blogText: { en: "", ka: "" },
        desc: {
          en: "In the north—the towering Greater Caucasus, in the west—the sheltered Black Sea, in the south—the Lesser Caucasus Mountains, in the east—open fields, rivers, waterfalls, stunning valleys, peaks, springs, lakes, and reservoirs, streams, forests,",
          ka: "ჩრდილოეთში — მაღალი დიდი კავკასიონი, დასავლეთში — დაცული შავი ზღვა, სამხრეთში — მცირე კავკასიონის მთები, აღმოსავლეთში — ღია მინდვრები, მდინარეები, ჩანჩქერები, განსაცვიფრებელი ხეობები, მწვერვალები, წყაროები, ტბები და წყალსაცავები, ნაკადულები, ტყეები,",
        },
      },
      {
        img: "/cardImage/vardzia-in-samtskhe-javakheti.webp",
        title: {
          en: "9 Outstanding Attractions in Samtskhe-Javakheti",
          ka: "9 გამორჩეული ატრაქცია სამცხე-ჯავახეთში",
        },
        blogText: { en: "", ka: "" },
        desc: {
          en: "Today’s Samtskhe-Javakheti, once called Meskheti, is so rich in attractions that you can plan an interesting and unique trip here.",
          ka: "დღევანდელი სამცხე-ჯავახეთი, რომელსაც ოდესღაც მესხეთი ერქვა, იმდენად მდიდარია ატრაქციებით, რომ აქ შეგიძლიათ დაგეგმოთ საინტერესო და უნიკალური მოგზაურობა.",
        },
      },
    ],
  },
  {
    id: 6,
    title: {
      en: "Svetitskhoveli",
      ka: "სვეტიცხოველი - მსოფლიო ხელოვნების საგანძური",
    },
    src: "/home/svetitskhoveli-cathedral-gnta.webp",
    modalSrc: "/home/svetitskhoveli-cathedral-gnta.webp",
    additionalDescription: {
      en: "You may not be surprised to learn that a country with such a rich history as Georgia is also home to a remarkable number of legends, some of which might even be true! Svetitskhoveli is a place that has preserved numerous legends and secrets for the modern generation to unravel and enjoy.",
      ka: "სვეტიცხოველი საქართველოში დღემდე მოღწეულ უძველეს ტაძართა შორის ყველაზე დიდი საეკლესიო ნაგებობაა და ქართული ხუროთმოძღვრების ერთ-ერთი ურთულესი ძეგლია. არსებობის დღიდან ის ქართული მართლმადიდებელი სარწმუნოების უმთავრესი ტაძარია.",
    },
    region: {
      en: "Mtskheta-Mtianeti",
      ka: "მცხეთა-მთიანეთი",
    },
    city: {
      en: "Mtskheta",
      ka: "მცხეთა",
    },
    description: {
      en: "Natural Monuments",
      ka: "ბუნების ძეგლები",
    },
    name: {
      en: "Svaneti",
      ka: "სვანეთი",
    },
    address: "Mestia, Svaneti Region",
    phone: "+995 577 789 012",
    website: "",
    workingHours: {
      Monday: "08:00 - 20:00",
      Tuesday: "08:00 - 20:00",
      Wednesday: "08:00 - 20:00",
      Thursday: "08:00 - 20:00",
      Friday: "08:00 - 20:00",
      Saturday: "08:00 - 22:00",
      Sunday: "08:00 - 22:00",
    },
    anotherSection: {
      name1: {
        en: "",
        ka: "გოგნის წმინდა გიორგის სახელობის ეკლესიის შესახებ",
      },
      description: {
        en: "According to legend, St. George sent a small bird to an elderly man from Gogni village, ordering him to build a shrine in his honor. The villagers got together and fulfilled the saint’s wish. Once they finished the construction and finally installed the door, the door suddenly fell and kept doing it despite all their efforts. Because of this, the shrine was called Karugdeli - “doorless” \n\n This is the only church in Georgia that has no door, so it is welcoming worshippers anytime. \n\n The locals believe that those who enter the temple three times on St. George’s Day will have their prayers and wishes fulfilled. That’s why on May 6 and November 23, hundreds of people are walking to the temple to pray - most of them barefoot, showing their humility in front of higher powers.",
        ka: "ეს საქართველოში ერთადერთი ეკლესიაა, რომელსაც კარი არ აქვს. ის არასდროს იკეტება და ადამიანებს სალოცავში შესვლა ნებისმიერ დროს შეუძლიათ. \n\n გოგნის წინდა გიორგის ეკლესია რეგიონ იმერეთში, თერჯოლიდან 12 კილომეტრში, ულამაზესი ურთხლის ტყეში, მაღალ გორაზე დგას. ეს პატარა ერთნავიანი სალოცავი VII-VIII საუკუნეებში ქვითკირითაა აშენებული. წელიწადში ორჯერ, გიორგობას, ამ ადგილს უამრავი მომლოცველი სტუმრობს და წმინდა გიორგის სურვილების ასრულებას სთხოვს. \n\n წმინდა გიორგი საქართველოში გამორჩეული წმინდანია. მის სახელზე ქვეყანაში 365 ეკლესიაა აგებული. ქართველები გიორგობას წელიწადში ორჯერ აღნიშნავენ: 6 მაისს - წმინდანის დაბადების დღეს და 23 ნოემბერს - როცა ის ბორბალზე აწამეს. \n\n გადმოცემის თანახმად, ვინც ამ დღეებში ტაძარს სამჯერ შემოუვლის, ყველა სურვილი აუსრულდება. თუ გოგნის სალოცავს გიორგობას ეწვევით, თავად იხილავთ ტაძრისკენ მიმავალ ათასობით ადამიანს, რომელთა უმეტესობა გზას ფეხშიშველი მიუყვება.",
      },
      image: "",
      name2: {
        en: "",
        ka: "",
      },
      name3: {
        en: "",
        ka: "",
      },
      description2: {
        en: "",
        ka: "",
      },
      description3: {
        en: "",
        ka: "",
      },
      name4: {
        en: "",
        ka: "",
      },
      description4: {
        en: "",
        ka: "",
      },
      name5: {
        en: "",
        ka: "",
      },
      description5: {
        en: "",
        ka: "",
      },
    },
    slideCard: [
      {
        title: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        src: "/slideCard/motsameta-monastery-gnta.webp",
        modalSrc: "/slideCard/motsameta-monastery-gnta.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: {
          en: "Tsutskhvati Cave - A protected area in Tkibuli Municipality",
          ka: "ნავენახევის მღვიმე - იმერეთის შთამბეჭდავი ღირსშესანიშნაობა",
        },
        src: "/slideCard/navenakhevi-cave-gnta.webp",
        modalSrc: "/slideCard/navenakhevi-cave-gnta.webp",
        additionalDescription: {
          en: "Navenakhevi is one of the most beautiful caves in Imereti. Looking inside it, you can see stalactites and stalagmites made of limestone, which were formed over millions of years.",
          ka: "იმერეთის მღვიმეებიდან ყველაზე ცნობილი პრომეთესა და სათაფლიის მღვიმეებია, თუმცა არანაკლებ შთამბეჭდავია ნავენახევის მღვიმე. აქ უცნაური ფორმის სტალაგმიტები და სტალაქტიტები დაგხვდებათ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: {
          en: "Tsutskhvati Cave - A protected area in Tkibuli Municipality",
          ka: "ცუცხვათის მღვიმე",
        },
        src: "/slideCard/tsutskhvati-cave-natural-monument-gnta.webp",
        modalSrc: "/slideCard/tsutskhvati-cave-natural-monument-gnta.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: {
          en: "Natural monument of the Tskaltsitela Gorge",
          ka: "წყალწითელას ხეობის ბუნების ძეგლი",
        },
        src: "/slideCard/tskaltsitela-gorge-natural-monument.webp",
        modalSrc: "/slideCard/tskaltsitela-gorge-natural-monument.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: { en: "Dzevri Cave", ka: "ძევრის მღვიმე" },
        src: "/slideCard/dzevri-caves.webp",
        modalSrc: "/slideCard/dzevri-caves.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        src: "/slideCard/davit-kldiashvili-house-museum-gnta.webp",
        modalSrc: "/slideCard/davit-kldiashvili-house-museum-gnta.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
    ],
    blogs: [
      {
        img: "/cardImage/georgia-europe-georgraphy.webp",
        title: {
          en: "Geography of Georgia",
          ka: "საქართველოს გეოგრაფია",
        },
        blogText: {
          en: "Explore the blog",
          ka: "გაეცანით ბლოგს",
        },
        desc: {
          en: "Georgia is a small, beautiful country with diverse nature and a mild climate, determined by its interesting geographical location. It is protected by orographic boundaries from the north and south—the Greater Caucasus Range with its glaciers in the north.",
          ka: "საქართველო პატარა, მშვენიერი ქვეყანაა მრავალფეროვანი ბუნებითა და ზომიერი კლიმატით, რაც განპირობებულია მისი საინტერესო გეოგრაფიული მდებარეობით. ის დაცულია ოროგრაფიული საზღვრებით ჩრდილოეთიდან და სამხრეთიდან — ჩრდილოეთით დიდი კავკასიონის ქედი თავისი მყინვარებით.",
        },
      },
      {
        img: "/cardImage/why-georgia-nature.webp",
        title: {
          en: "Nature of Georgia",
          ka: "საქართველოს ბუნება",
        },
        blogText: { en: "", ka: "" },
        desc: {
          en: "In the north—the towering Greater Caucasus, in the west—the sheltered Black Sea, in the south—the Lesser Caucasus Mountains, in the east—open fields, rivers, waterfalls, stunning valleys, peaks, springs, lakes, and reservoirs, streams, forests,",
          ka: "ჩრდილოეთში — მაღალი დიდი კავკასიონი, დასავლეთში — დაცული შავი ზღვა, სამხრეთში — მცირე კავკასიონის მთები, აღმოსავლეთში — ღია მინდვრები, მდინარეები, ჩანჩქერები, განსაცვიფრებელი ხეობები, მწვერვალები, წყაროები, ტბები და წყალსაცავები, ნაკადულები, ტყეები,",
        },
      },
      {
        img: "/cardImage/vardzia-in-samtskhe-javakheti.webp",
        title: {
          en: "9 Outstanding Attractions in Samtskhe-Javakheti",
          ka: "9 გამორჩეული ატრაქცია სამცხე-ჯავახეთში",
        },
        blogText: { en: "", ka: "" },
        desc: {
          en: "Today’s Samtskhe-Javakheti, once called Meskheti, is so rich in attractions that you can plan an interesting and unique trip here.",
          ka: "დღევანდელი სამცხე-ჯავახეთი, რომელსაც ოდესღაც მესხეთი ერქვა, იმდენად მდიდარია ატრაქციებით, რომ აქ შეგიძლიათ დაგეგმოთ საინტერესო და უნიკალური მოგზაურობა.",
        },
      },
    ],
  },
  {
    id: 7,
    title: {
      en: "Dzama Valley",
      ka: "ძამას ხეობა",
    },
    src: "/home/dzama-valley-gnta.webp",
    modalSrc: "/home/dzama-valley-gnta.webp",
    additionalDescription: {
      en: "Dzama Valley is home to up to 60 historic monuments, including old and modern churches and monasteries, fortresses, towers and natural sights. Located in Kareli Municipality, Shida Kartli, the valley is 160-170 kilometers away from Tbilisi.",
      ka: "60-ამდე ისტორიული ძეგლი, ძველი და ახალი ეკლესია-მონასტრები, ციხესიმაგრეები, კოშკები და ბუნებრივი ძეგლები - ეს ძამის ხეობაა, რომელიც თბილისიდან 160-170 კმ-ის დაშორებით, ქარელის მუნიციპალიტეტში მდებარეობს.",
    },
    region: {
      en: "Shida Kartli",
      ka: "შიდა ქართლი",
    },
    city: {
      en: "Kareli",
      ka: "ქარელი",
    },
    description: {
      en: "Natural Monuments",
      ka: "ბუნების ძეგლები",
    },
    name: {
      en: "Svaneti",
      ka: "სვანეთი",
    },
    address: "Mestia, Svaneti Region",
    phone: "+995 577 789 012",
    website: "",
    workingHours: {
      Monday: "08:00 - 20:00",
      Tuesday: "08:00 - 20:00",
      Wednesday: "08:00 - 20:00",
      Thursday: "08:00 - 20:00",
      Friday: "08:00 - 20:00",
      Saturday: "08:00 - 22:00",
      Sunday: "08:00 - 22:00",
    },
    anotherSection: {
      name1: {
        en: "",
        ka: "გოგნის წმინდა გიორგის სახელობის ეკლესიის შესახებ",
      },
      description: {
        en: "According to legend, St. George sent a small bird to an elderly man from Gogni village, ordering him to build a shrine in his honor. The villagers got together and fulfilled the saint’s wish. Once they finished the construction and finally installed the door, the door suddenly fell and kept doing it despite all their efforts. Because of this, the shrine was called Karugdeli - “doorless” \n\n This is the only church in Georgia that has no door, so it is welcoming worshippers anytime. \n\n The locals believe that those who enter the temple three times on St. George’s Day will have their prayers and wishes fulfilled. That’s why on May 6 and November 23, hundreds of people are walking to the temple to pray - most of them barefoot, showing their humility in front of higher powers.",
        ka: "ეს საქართველოში ერთადერთი ეკლესიაა, რომელსაც კარი არ აქვს. ის არასდროს იკეტება და ადამიანებს სალოცავში შესვლა ნებისმიერ დროს შეუძლიათ. \n\n გოგნის წინდა გიორგის ეკლესია რეგიონ იმერეთში, თერჯოლიდან 12 კილომეტრში, ულამაზესი ურთხლის ტყეში, მაღალ გორაზე დგას. ეს პატარა ერთნავიანი სალოცავი VII-VIII საუკუნეებში ქვითკირითაა აშენებული. წელიწადში ორჯერ, გიორგობას, ამ ადგილს უამრავი მომლოცველი სტუმრობს და წმინდა გიორგის სურვილების ასრულებას სთხოვს. \n\n წმინდა გიორგი საქართველოში გამორჩეული წმინდანია. მის სახელზე ქვეყანაში 365 ეკლესიაა აგებული. ქართველები გიორგობას წელიწადში ორჯერ აღნიშნავენ: 6 მაისს - წმინდანის დაბადების დღეს და 23 ნოემბერს - როცა ის ბორბალზე აწამეს. \n\n გადმოცემის თანახმად, ვინც ამ დღეებში ტაძარს სამჯერ შემოუვლის, ყველა სურვილი აუსრულდება. თუ გოგნის სალოცავს გიორგობას ეწვევით, თავად იხილავთ ტაძრისკენ მიმავალ ათასობით ადამიანს, რომელთა უმეტესობა გზას ფეხშიშველი მიუყვება.",
      },
      image: "",
      name2: {
        en: "",
        ka: "",
      },
      name3: {
        en: "",
        ka: "",
      },
      description2: {
        en: "",
        ka: "",
      },
      description3: {
        en: "",
        ka: "",
      },
      name4: {
        en: "",
        ka: "",
      },
      description4: {
        en: "",
        ka: "",
      },
      name5: {
        en: "",
        ka: "",
      },
      description5: {
        en: "",
        ka: "",
      },
    },
    slideCard: [
      {
        title: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        src: "/slideCard/motsameta-monastery-gnta.webp",
        modalSrc: "/slideCard/motsameta-monastery-gnta.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: {
          en: "Tsutskhvati Cave - A protected area in Tkibuli Municipality",
          ka: "ნავენახევის მღვიმე - იმერეთის შთამბეჭდავი ღირსშესანიშნაობა",
        },
        src: "/slideCard/navenakhevi-cave-gnta.webp",
        modalSrc: "/slideCard/navenakhevi-cave-gnta.webp",
        additionalDescription: {
          en: "Navenakhevi is one of the most beautiful caves in Imereti. Looking inside it, you can see stalactites and stalagmites made of limestone, which were formed over millions of years.",
          ka: "იმერეთის მღვიმეებიდან ყველაზე ცნობილი პრომეთესა და სათაფლიის მღვიმეებია, თუმცა არანაკლებ შთამბეჭდავია ნავენახევის მღვიმე. აქ უცნაური ფორმის სტალაგმიტები და სტალაქტიტები დაგხვდებათ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: {
          en: "Tsutskhvati Cave - A protected area in Tkibuli Municipality",
          ka: "ცუცხვათის მღვიმე",
        },
        src: "/slideCard/tsutskhvati-cave-natural-monument-gnta.webp",
        modalSrc: "/slideCard/tsutskhvati-cave-natural-monument-gnta.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: {
          en: "Natural monument of the Tskaltsitela Gorge",
          ka: "წყალწითელას ხეობის ბუნების ძეგლი",
        },
        src: "/slideCard/tskaltsitela-gorge-natural-monument.webp",
        modalSrc: "/slideCard/tskaltsitela-gorge-natural-monument.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: { en: "Dzevri Cave", ka: "ძევრის მღვიმე" },
        src: "/slideCard/dzevri-caves.webp",
        modalSrc: "/slideCard/dzevri-caves.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        src: "/slideCard/davit-kldiashvili-house-museum-gnta.webp",
        modalSrc: "/slideCard/davit-kldiashvili-house-museum-gnta.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
    ],
    blogs: [
      {
        img: "/cardImage/georgia-europe-georgraphy.webp",
        title: {
          en: "Geography of Georgia",
          ka: "საქართველოს გეოგრაფია",
        },
        blogText: {
          en: "Explore the blog",
          ka: "გაეცანით ბლოგს",
        },
        desc: {
          en: "Georgia is a small, beautiful country with diverse nature and a mild climate, determined by its interesting geographical location. It is protected by orographic boundaries from the north and south—the Greater Caucasus Range with its glaciers in the north.",
          ka: "საქართველო პატარა, მშვენიერი ქვეყანაა მრავალფეროვანი ბუნებითა და ზომიერი კლიმატით, რაც განპირობებულია მისი საინტერესო გეოგრაფიული მდებარეობით. ის დაცულია ოროგრაფიული საზღვრებით ჩრდილოეთიდან და სამხრეთიდან — ჩრდილოეთით დიდი კავკასიონის ქედი თავისი მყინვარებით.",
        },
      },
      {
        img: "/cardImage/why-georgia-nature.webp",
        title: {
          en: "Nature of Georgia",
          ka: "საქართველოს ბუნება",
        },
        blogText: { en: "", ka: "" },
        desc: {
          en: "In the north—the towering Greater Caucasus, in the west—the sheltered Black Sea, in the south—the Lesser Caucasus Mountains, in the east—open fields, rivers, waterfalls, stunning valleys, peaks, springs, lakes, and reservoirs, streams, forests,",
          ka: "ჩრდილოეთში — მაღალი დიდი კავკასიონი, დასავლეთში — დაცული შავი ზღვა, სამხრეთში — მცირე კავკასიონის მთები, აღმოსავლეთში — ღია მინდვრები, მდინარეები, ჩანჩქერები, განსაცვიფრებელი ხეობები, მწვერვალები, წყაროები, ტბები და წყალსაცავები, ნაკადულები, ტყეები,",
        },
      },
      {
        img: "/cardImage/vardzia-in-samtskhe-javakheti.webp",
        title: {
          en: "9 Outstanding Attractions in Samtskhe-Javakheti",
          ka: "9 გამორჩეული ატრაქცია სამცხე-ჯავახეთში",
        },
        blogText: { en: "", ka: "" },
        desc: {
          en: "Today’s Samtskhe-Javakheti, once called Meskheti, is so rich in attractions that you can plan an interesting and unique trip here.",
          ka: "დღევანდელი სამცხე-ჯავახეთი, რომელსაც ოდესღაც მესხეთი ერქვა, იმდენად მდიდარია ატრაქციებით, რომ აქ შეგიძლიათ დაგეგმოთ საინტერესო და უნიკალური მოგზაურობა.",
        },
      },
    ],
  },
  {
    id: 8,
    title: {
      en: "Khvamli Mountain",
      ka: "ხვამლის მთა",
    },
    src: "/home/khvamli-mountain-gnta.webp",
    modalSrc: "/home/khvamli-mountain-gnta.webp",
    additionalDescription: {
      en: "The regions of western Georgia boast the millenia of history. Here, you’ll find pre-Christian settlements, fortresses and churches, breathtaking natural beauty, glimmering lakes, and bountiful gardens. Between the Tsageri and Tskaltubo Municipalities lies Khvamli Mountain. This craggy, heavily forested mountain is home to nineteen caves, including Tekenteri and the frozen cave Boga.",
      ka: "დასავლეთ საქართველოს ტერიტორია ათასწლეულების ისტორიას ინახავს. აქ ვხვდებით წინაქრისტიანულ ნამოსახლარებს, შუა საუკუნეების ციხესიმაგრეებსა და ტაძრებს, მწვანეში ჩაფლულ ბუნებას, ულამაზეს ტბებსა და ვრცელი ხედებით დახუნძლულ წალკოტებს. სწორედ დასავლეთ საქართველოში, ცაგერისა და წყალტუბოს მუნიციპალიტეტების ტერიტორიაზე, 2002 მეტრის სიმაღლეზე მდებარე ხვამლის მთა უღრანი ტყით არის დაფარული და მთლიანად დახრამულია. აქ გარედან 19 გამოქვაბულს შეხვდები, მათ შორისაა თეკენთერი ანუ თეკენთერის ჭა და ყინულოვანი მღვიმე - ბოგა.",
    },
    region: {
      en: "Racha-Lechkhumi & Kvemo Svaneti",
      ka: "რაჭა-ლეჩხუმი და ქვემო სვანეთი",
    },
    city: {
      en: "Tsageri",
      ka: "ცაგერი",
    },
    description: {
      en: "Natural Monuments",
      ka: "ბუნების ძეგლები",
    },
    name: {
      en: "Svaneti",
      ka: "სვანეთი",
    },
    address: "Mestia, Svaneti Region",
    phone: "+995 577 789 012",
    website: "",
    workingHours: {
      Monday: "08:00 - 20:00",
      Tuesday: "08:00 - 20:00",
      Wednesday: "08:00 - 20:00",
      Thursday: "08:00 - 20:00",
      Friday: "08:00 - 20:00",
      Saturday: "08:00 - 22:00",
      Sunday: "08:00 - 22:00",
    },
    anotherSection: {
      name1: {
        en: "",
        ka: "გოგნის წმინდა გიორგის სახელობის ეკლესიის შესახებ",
      },
      description: {
        en: "According to legend, St. George sent a small bird to an elderly man from Gogni village, ordering him to build a shrine in his honor. The villagers got together and fulfilled the saint’s wish. Once they finished the construction and finally installed the door, the door suddenly fell and kept doing it despite all their efforts. Because of this, the shrine was called Karugdeli - “doorless” \n\n This is the only church in Georgia that has no door, so it is welcoming worshippers anytime. \n\n The locals believe that those who enter the temple three times on St. George’s Day will have their prayers and wishes fulfilled. That’s why on May 6 and November 23, hundreds of people are walking to the temple to pray - most of them barefoot, showing their humility in front of higher powers.",
        ka: "ეს საქართველოში ერთადერთი ეკლესიაა, რომელსაც კარი არ აქვს. ის არასდროს იკეტება და ადამიანებს სალოცავში შესვლა ნებისმიერ დროს შეუძლიათ. \n\n გოგნის წინდა გიორგის ეკლესია რეგიონ იმერეთში, თერჯოლიდან 12 კილომეტრში, ულამაზესი ურთხლის ტყეში, მაღალ გორაზე დგას. ეს პატარა ერთნავიანი სალოცავი VII-VIII საუკუნეებში ქვითკირითაა აშენებული. წელიწადში ორჯერ, გიორგობას, ამ ადგილს უამრავი მომლოცველი სტუმრობს და წმინდა გიორგის სურვილების ასრულებას სთხოვს. \n\n წმინდა გიორგი საქართველოში გამორჩეული წმინდანია. მის სახელზე ქვეყანაში 365 ეკლესიაა აგებული. ქართველები გიორგობას წელიწადში ორჯერ აღნიშნავენ: 6 მაისს - წმინდანის დაბადების დღეს და 23 ნოემბერს - როცა ის ბორბალზე აწამეს. \n\n გადმოცემის თანახმად, ვინც ამ დღეებში ტაძარს სამჯერ შემოუვლის, ყველა სურვილი აუსრულდება. თუ გოგნის სალოცავს გიორგობას ეწვევით, თავად იხილავთ ტაძრისკენ მიმავალ ათასობით ადამიანს, რომელთა უმეტესობა გზას ფეხშიშველი მიუყვება.",
      },
      image: "",
      name2: {
        en: "",
        ka: "",
      },
      name3: {
        en: "",
        ka: "",
      },
      description2: {
        en: "",
        ka: "",
      },
      description3: {
        en: "",
        ka: "",
      },
      name4: {
        en: "",
        ka: "",
      },
      description4: {
        en: "",
        ka: "",
      },
      name5: {
        en: "",
        ka: "",
      },
      description5: {
        en: "",
        ka: "",
      },
    },
    slideCard: [
      {
        title: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        src: "/slideCard/motsameta-monastery-gnta.webp",
        modalSrc: "/slideCard/motsameta-monastery-gnta.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: {
          en: "Tsutskhvati Cave - A protected area in Tkibuli Municipality",
          ka: "ნავენახევის მღვიმე - იმერეთის შთამბეჭდავი ღირსშესანიშნაობა",
        },
        src: "/slideCard/navenakhevi-cave-gnta.webp",
        modalSrc: "/slideCard/navenakhevi-cave-gnta.webp",
        additionalDescription: {
          en: "Navenakhevi is one of the most beautiful caves in Imereti. Looking inside it, you can see stalactites and stalagmites made of limestone, which were formed over millions of years.",
          ka: "იმერეთის მღვიმეებიდან ყველაზე ცნობილი პრომეთესა და სათაფლიის მღვიმეებია, თუმცა არანაკლებ შთამბეჭდავია ნავენახევის მღვიმე. აქ უცნაური ფორმის სტალაგმიტები და სტალაქტიტები დაგხვდებათ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: {
          en: "Tsutskhvati Cave - A protected area in Tkibuli Municipality",
          ka: "ცუცხვათის მღვიმე",
        },
        src: "/slideCard/tsutskhvati-cave-natural-monument-gnta.webp",
        modalSrc: "/slideCard/tsutskhvati-cave-natural-monument-gnta.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: {
          en: "Natural monument of the Tskaltsitela Gorge",
          ka: "წყალწითელას ხეობის ბუნების ძეგლი",
        },
        src: "/slideCard/tskaltsitela-gorge-natural-monument.webp",
        modalSrc: "/slideCard/tskaltsitela-gorge-natural-monument.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: { en: "Dzevri Cave", ka: "ძევრის მღვიმე" },
        src: "/slideCard/dzevri-caves.webp",
        modalSrc: "/slideCard/dzevri-caves.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
      {
        title: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        src: "/slideCard/davit-kldiashvili-house-museum-gnta.webp",
        modalSrc: "/slideCard/davit-kldiashvili-house-museum-gnta.webp",
        additionalDescription: {
          en: "It is said that if you crawl underneath the crypts at Motsameta Monastery, your wishes will come true. It is this legend that draws visitors to this 8th-century Orthodox church.",
          ka: "მონასტრამდე მისასვლელად მოკლე საცალფეხო გზა უნდა გაიარო - ერთგვარი ბილიკი სამოთხეში, რადგან იმას, რასაც ირგვლივ დაინახავ, სხვას ვერაფერს უწოდებ.",
        },
        region: { en: "Imereti", ka: "იმერეთი" },
        city: { en: "Qutaisi", ka: "ქუთაისი" },
        name: { en: "Motsameta Monastery", ka: "მოწამეთას მონასტერი" },
        address: "7QJ5+WJ4, მოწამეთა, საქართველო",
        phone: "",
        website: "",
        workingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
      },
    ],
    blogs: [
      {
        img: "/cardImage/georgia-europe-georgraphy.webp",
        title: {
          en: "Geography of Georgia",
          ka: "საქართველოს გეოგრაფია",
        },
        blogText: {
          en: "Explore the blog",
          ka: "გაეცანით ბლოგს",
        },
        desc: {
          en: "Georgia is a small, beautiful country with diverse nature and a mild climate, determined by its interesting geographical location. It is protected by orographic boundaries from the north and south—the Greater Caucasus Range with its glaciers in the north.",
          ka: "საქართველო პატარა, მშვენიერი ქვეყანაა მრავალფეროვანი ბუნებითა და ზომიერი კლიმატით, რაც განპირობებულია მისი საინტერესო გეოგრაფიული მდებარეობით. ის დაცულია ოროგრაფიული საზღვრებით ჩრდილოეთიდან და სამხრეთიდან — ჩრდილოეთით დიდი კავკასიონის ქედი თავისი მყინვარებით.",
        },
      },
      {
        img: "/cardImage/why-georgia-nature.webp",
        title: {
          en: "Nature of Georgia",
          ka: "საქართველოს ბუნება",
        },
        blogText: { en: "", ka: "" },
        desc: {
          en: "In the north—the towering Greater Caucasus, in the west—the sheltered Black Sea, in the south—the Lesser Caucasus Mountains, in the east—open fields, rivers, waterfalls, stunning valleys, peaks, springs, lakes, and reservoirs, streams, forests,",
          ka: "ჩრდილოეთში — მაღალი დიდი კავკასიონი, დასავლეთში — დაცული შავი ზღვა, სამხრეთში — მცირე კავკასიონის მთები, აღმოსავლეთში — ღია მინდვრები, მდინარეები, ჩანჩქერები, განსაცვიფრებელი ხეობები, მწვერვალები, წყაროები, ტბები და წყალსაცავები, ნაკადულები, ტყეები,",
        },
      },
      {
        img: "/cardImage/vardzia-in-samtskhe-javakheti.webp",
        title: {
          en: "9 Outstanding Attractions in Samtskhe-Javakheti",
          ka: "9 გამორჩეული ატრაქცია სამცხე-ჯავახეთში",
        },
        blogText: { en: "", ka: "" },
        desc: {
          en: "Today’s Samtskhe-Javakheti, once called Meskheti, is so rich in attractions that you can plan an interesting and unique trip here.",
          ka: "დღევანდელი სამცხე-ჯავახეთი, რომელსაც ოდესღაც მესხეთი ერქვა, იმდენად მდიდარია ატრაქციებით, რომ აქ შეგიძლიათ დაგეგმოთ საინტერესო და უნიკალური მოგზაურობა.",
        },
      },
    ],
  },
];

// ---------------------------------------------------------------------------------------------------------------

interface Range {
  min: number;
  max: number;
}

interface DescriptionTexts {
  img: string;
  header: Translations;
  desc: Translations;
}

interface CityTime {
  name: Translations;
  times: string[];
}
interface Text {
  ka: string;
  en: string;
}
interface Bla {
  ka: string;
  en: string;
}
interface Translations {
  ka: string;
  en: string;
}
interface Title {
  id: number;
  text: Text;
  bla: Bla[];
}

export interface SlideImage {
  id: number;
  src: string;
  modalSrc: string;
  alt: string;
  region: string;
  translations: Translations;
  path: string;
  title: Title[];
  description: Translations;
  citiesTimes: CityTime[];
  descriptionTexts: DescriptionTexts[];
  range: Range[];
}

// @/lib/data
export const images: SlideImage[] = [
  {
    id: 1,
    region: "Abkhazia",
    translations: { ka: "აფხაზეთი", en: "Abkhazia" },
    path: "M1 32.6L1.7 29.7L10 7.9L11.7 5.2L14.6 3.3L22.8 1H31.3L61.5 12.3L66.4 12.9L70.2 11.9L78.1 7.8L82.6 7.2L86.2 9.1L87.3 10L93.5 14.7L106.1 19.1L110.1 21.4L126.9 35L130.7 35.9L143.5 34.2L147.6 35.1L151.6 37.1L155.4 40.2L159.7 42.1L168.5 40.4L172.2 41.8L173.3 43.5L175 47.5L176.1 49.2L177.9 50.6L184.3 52.6L187.5 54.5L192.9 60.1L196.2 62L200.7 62.4L209.7 61.2L214.2 61.7L222.2 64L226 64.4L234.5 63.4L238.1 63.6L241.6 64.6L245.5 66.5L249.4 67.6L253.3 67.8L257.2 67L266.9 61.6L265.2 65.6L263.8 70L264.2 74.8L264.3 79.5L262.6 84.2L260.2 88.3L257.4 91.5L255.1 95.3L248.7 98.1L236.8 100.3L235.8 101.5L233.9 104L236.1 106.8L237.1 110.3L237.8 114.2L238 114.8L239 117.8L239.6 121.4L237.7 124L236.2 125L234.8 126.4L234.7 128.2L235.7 129.7L237 137.4L236.8 141.7L237.3 145.8L240.8 151.7L241.3 155.7L241.7 158.9L240.6 161.9L238.4 163.3L235.8 165.4L233.9 168.2L233.7 168.4L224 177.8L213.6 184L213.2 184.2L207.1 186.2L205.4 188.3L202.6 191.7L198 194.6L196.6 195.3L193.7 196.7L193.1 197L186.8 158L184.7 151.4L181.6 145.9L177.6 141.5L172.6 138.7L163.3 137L161.3 135.9L159.3 134.1L156.3 132.4L153.2 131.2L150.8 130.8L149.4 131.2L146.9 132.7L145.4 133L144.1 132.2L138.6 123.7L135.8 113.4L130.7 104.5L128.6 99.7L125.6 99.8L120.8 102L117.6 100.9L113.9 95.3L111.8 94V93.1L108.9 88.1L108 87.5L99.1 83.9L86.8 82.2L81.1 82.5L77.1 83.5L75.6 83.7L74.2 83.2L71.8 80.8L70.3 80.2L69.7 79.7L67.6 77.4L66.5 76.6L65.3 76.2L61.4 75.5L51.5 70.7L47 70.2L43.8 74.3L42.5 73L40.7 68.5L39.6 66.3L36.8 63.5L35.6 61.7L36.1 56.4L34.2 51.4L31.5 46.9L29.5 44.4L25.7 42.6L19 40.6L15.1 36.6L13.3 35.7L7.6 34.8L3.8 33.2L1 32.6Z",
    src: "/picture/modalapxazeti.webp",
    modalSrc: "/picture/modalapxazeti.webp",
    alt: "Abkhazia",
    title: [
      {
        id: 1,
        text: { ka: "აფხაზეთი", en: "Abkhazia" },
        bla: [
          { ka: "სოხუმი", en: "Sukhumi" },
          { ka: "გაგრა", en: "Gagra" },
        ],
      },
    ],
    description: {
      ka: "„სულის ქვეყანა“ - ხშირად ასეც ეძახიან დღემდე იდუმალებით მოცულ ამ მხარეს, რომელიც ცნობილია თავისი ზღვაში ჩაძირული ქალაქებით, „ოქროს ვერძის“ ლეგენდით, მზის ტაძრებით, უძველესი სამარხებითა და ციხესიმაგრეებით. ადამიანები აქ ქვის ხანიდან მოყოლებული ცხოვრობდნენ, მასზე აღფრთოვანებით წერდნენ: ჰეროდოტე, სტრაბონი, ფლავიუსი, არიანე, არქანჯელო ლამბერტი თუ შარდენი.",
      en: "The 'Land of the Soul' - this is how this region, still shrouded in mystery, is often called, known for its cities submerged in the sea, the legend of the 'Golden Fleece,' sun temples, ancient burial sites, and fortresses. People have lived here since the Stone Age, and it was written about with admiration by Herodotus, Strabo, Flavius, Arrian, Archangelo Lamberti, and Chardin.",
    },
    citiesTimes: [
      { name: { ka: "თბილისი", en: "Tbilisi" }, times: ["7 სთ"] },
      { name: { ka: "ბათუმი", en: "Batumi" }, times: ["3:45 სთ"] },
      { name: { ka: "ქუთაისი", en: "Kutaisi" }, times: ["3:30 სთ"] },
    ],
    descriptionTexts: [
      {
        header: { ka: "სოხუმი", en: "Sukhumi" },
        img: "",
        desc: {
          ka: "საქართველოს შემადგენელი ნაწილი - აფხაზეთი, რომლის ფართობიც 8,700 კვ.კმ-ია, ქვეყნის უკიდურეს ჩრდილო-დასავლეთში მდებარეობს, ის ჩრდილოეთიდან - კავკასიონის მთავარი ქედით, სამხრეთ-დასავლეთიდან კი შავი ზღვით არის დაცული. აფხაზეთის სანაპირო ზოლის სიგრძე 195 კმ-ია. ჰავა აქ თბილია, ნოტიო და სუბტროპიკული.",
          en: "A constituent part of Georgia, Abkhazia, with an area of 8,700 sq.km, is located in the extreme northwest of the country, bordered by the main ridge of the Caucasus Mountains to the north and the Black Sea to the southwest. The length of Abkhazia’s coastline is 195 km. The climate here is warm, humid, and subtropical.",
        },
      },
      {
        header: {
          ka: "სოხუმის ბოტანიკური ბაღი",
          en: "Sukhumi Botanical Garden",
        },
        img: "",
        desc: {
          ka: "აფხაზეთის ოაზისი კავკასიაში უძველესი ბოტანიკური ბაღია, სადაც 5000-ზე მეტი ჯიშის ეგზოტიკური მცენარე წელიწადის ყველა სეზონზე ხარობს, მნახველს შეუძლია დატკბეს ჩრდილოეთ ამერიკიდან, სამხრეთ-აღმოსავლეთ აზიიდან, ავსტრალიიდან და სხვა ქვეყნებიდან ჩამოტანილი იშვიათი ჯიშის მცენარეებით, ისეირნოს ბამბუკის გრძელ ხეივანში, დაისვენოს გიგანტური, 20 მეტრის სიმაღლის 250 წლის ცაცხვის ხის ჩრდილში,  დატკბეს უდაბნოებიდან ჩამოტანილი სუკულენტებით.",
          en: "Abkhazia’s oasis in the Caucasus is the oldest botanical garden, where over 5,000 species of exotic plants thrive in every season. Visitors can enjoy rare plant species brought from North America, Southeast Asia, Australia, and other countries, stroll through a long bamboo avenue, rest in the shade of a giant 250-year-old, 20-meter-tall linden tree, and admire succulents brought from deserts.",
        },
      },
      {
        header: {
          ka: "აფხაზეთის ღირსშესანიშნაობები",
          en: "Abkhazia’s Landmarks",
        },
        img: "",
        desc: {
          ka: "სამხატვრო გალერეა, სახელმწიფო მუზეუმი, ბაგრატიონთა ეპოქის (XI საუკუნე) ნაგებობების ნაშთი, სტალაქტიტური მღვიმეები სოფელ შრომასთან, უნიკალური ფერმა-ლაბორატორია - პრიმატორიუმი, შერვაშიძეთა საგვარეულო სამფლობელო - ყველაფერი ეს სოხუმსა და მის შემოგარენში შეგიძლია დაათვალიერო. \n\n აქ ბევრი საინტერესო ადგილი და ულამაზესი პეიზაჟია, რომლებითაც სოხუმის ბორცვიდან, სოხუმის ციხიდან, ანაკოფიის ციხესიმაგრიდან, ბაგრატის ციხიდან, „სოხუმის შუქურადან“ დატკბები.",
          en: "Art gallery, state museum, remnants of structures from the Bagrationi era (11th century), stalactite caves near the village of Shroma, a unique farm-laboratory - Primatorium, and the Shervashidze family estate - all these can be explored in Sukhumi and its surroundings. \n\n There are many interesting places and beautiful landscapes to enjoy from Sukhumi Hill, Sukhumi Fortress, Anakopia Fortress, Bagrati Fortress, and the 'Sukhumi Lighthouse.'",
        },
      },
      {
        header: {
          ka: "კიდევ რა უნდა ნახო აფხაზეთში?",
          en: "What Else to See in Abkhazia?",
        },
        img: "",
        desc: {
          ka: "გუდაუთის რაიონში ზღვის დონიდან 1950 მეტრზე მდებარეობს მსოფლიოში ერთ-ერთი ყველაზე ღრმა კარსტული მღვიმე, რომლის ზედა ნაწილი ზამთარ-ზაფხულ ყინულითაა დაფარული; აუცილებლად სანახავია ახალი ათონის კარსტული მღვიმე, გიგანტური სტალაგმიტებითა და გაქვავებული ჩანჩქერებით; ასევე - მსოფლიოში ყველაზე ღრმა, კრუბერის გამოქვაბული. \n\n ლაშქრობის მოყვარულებისთვის იდეალური ადგილია სოფელი განთიადი, სადაც რამდენიმე მეტრში ჰაშუფსეს კანიონია. ველური ბუნება, ფერდობები და პლატოები, თვალუწვდენელი კლდეები, ქვის ლაბირინთებთან ერთად, დიდ შთაბეჭდილებას ახდენს მნახველზე. აუცილებლად მოსანახულებელია სპელეოლოგების ბანაკი, რომელიც არაბიკის მასივზე 2656 მეტრის სიმაღლეზე მდებარეობს. აქ კარვის გაშლა და ღამის გათენებაც შესაძლებელია. \n\n ნახე ძოუს ულამაზესი ტბა, გეგის ფერდობი და ჩანჩქერი, ულამაზესი ფიჭვებით სავსე ბიჭვინთის ჩრდილოეთით საქართველოში ყველაზე ღრმა რიწის ტბის სილამაზე იხილე - წიწვოვანი ნაძვებითა და კოლხური ბზით გარშემორტყმული საოცრება. \n\n აფხაზეთშია საქართველოს უდიდესი მდინარეები ბზიფი და კოდორი და მსოფლიოში ყველაზე პატარა მდინარე რეპრუა, რომლის სიგრძე 18 მეტრს არ აღემატება. აქ, რიწის, ფსხუ-გუმისთისა და ბიჭვინთა-მიუსერას ნაკრძალებში, უნიკალური მცენარეებისა და ცხოველების ნახვაა შესაძლებელი.",
          en: "In the Gudauta district, at 1,950 meters above sea level, lies one of the world’s deepest karst caves, with its upper part covered in ice year-round; you must visit the New Athos karst cave with its giant stalagmites and petrified waterfalls, as well as the world’s deepest cave, Krubera. \n\n For hiking enthusiasts, the village of Gantiadi is an ideal spot, with the Hashupse Canyon just a few meters away. The wild nature, slopes, plateaus, vast cliffs, and stone labyrinths make a profound impression on visitors. A must-visit is the speleologists’ camp, located at 2,656 meters on the Arabika Massif, where you can pitch a tent and spend the night. \n\n See the beautiful Dzou Lake, the Gegi slope and waterfall, and the stunning beauty of Georgia’s deepest lake, Ritsa, north of Bichvinta, surrounded by coniferous firs and Colchic boxwood. \n\n Abkhazia is home to Georgia’s largest rivers, Bzipi and Kodori, and the world’s shortest river, Reprua, which is no longer than 18 meters. In the Ritsa, Pskhu-Gumista, and Bichvinta-Miusera reserves, you can see unique plants and animals.",
        },
      },
      {
        header: { ka: "აფხაზური კერძები", en: "Abkhazian Cuisine" },
        img: "",
        desc: {
          ka: "აფხაზურ სამზარეულოში დიდი ადგილი უჭირავს ბოსტნეულს, ხილს, რძის პროდუქტებს. მნიშვნელობა არ აქვს, პატარა ფაცხაში შეისვენებ თუ რესტორანში, ტრადიციულ კერძებს აუცილებლად შემოგთავაზებენ. \n\n აბისტა სიმინდის ფქვილის ფაფაა, რომელიც ძალიან უხდება ლობიოს, ყველსა და ხორცს. აფხაზური ტრადიციული კერძია აშვჩაპანი, იგივე გადაზელილი ყველი, არიცმგელი, ანუ ნიგვზიანი მჭადი, აყრდცა - ლობიოს შეჭამადი, აფხაზური აჯიკა, ლეღვის ტყლაპი და სხვა. \n\n თუ გუდაუთაში, სოფელ ლიხნში მოხვდები ტრადიციულ დღესასწაულ „ლიხნაშტაზე“, აფხაზურ სამზარეულოს ნიმუშებს სრულიად უსასყიდლოდ დააგემოვნებ, თუმცა ეს არც სხვაგან გაგიჭირდება - აფხაზეთში, ისევე როგორც მთელ საქართველოში, სტუმრისთვის კარი ყოველთვის ღიაა.",
          en: "Abkhazian cuisine places great emphasis on vegetables, fruits, and dairy products. Whether you stop at a small hut or a restaurant, traditional dishes will definitely be offered. \n\n Abista is a cornmeal porridge that pairs wonderfully with beans, cheese, and meat. Traditional Abkhazian dishes include ashvchapani, or smoked cheese, aritsmgeli, a walnut-filled cornbread, aqrtsa - a bean dish, Abkhazian adjika, fig jam, and more. \n\n If you find yourself in Gudauta, in the village of Likhni, during the traditional festival 'Likhnashta,' you can taste Abkhazian cuisine for free, though it’s easy to find these dishes elsewhere too - in Abkhazia, as in all of Georgia, the door is always open for guests.",
        },
      },
    ],
    range: [
      {
        min: 0,
        max: 0,
      },
    ],
  },
  {
    id: 2,
    region: "Racha",
    translations: { ka: "რაჭა", en: "Racha" },
    path: "M417.7 116.9L429.2 120.1L433.8 121.3L442.2 125.4L444.3 127.2L449.4 133.3L451.7 134.7L463.1 137.5L466.4 139.2L468.6 140.3L470 145.2L467.2 149.2L462.9 152.3L459.5 155.7L459.1 160.6L462.6 165L468.1 166.5L474.1 167L479.1 168.3L481.9 170.5L481.2 178.9L474.7 183.6L472 188.4L469.6 189.5L452.6 190.9L442.6 199L440 198L432.1 195.1L419.7 196.1L406.7 194.7L395.1 200.8L390.8 205.2L385.6 207.3L376.8 208.1L371 204.8L368.4 204.3L365.3 201.8L363.8 196.6L357.6 190.8L350.8 186.5L347.8 186.6L345 189.4L341.8 189.1L338.7 187.8L325.5 192.2L325.4 188.7L324.4 185.6V181.5L323.3 177.7L314 159.1L317.2 152.2L311.7 146.5L298 138.7L291.3 132.9L294.3 127.1L298.2 124.9L302.7 124.6L304.2 124.2L305.6 123.2L306.9 120.1L308.4 117.3H311.5L314.5 118.7L331.9 123L339.1 123.3L342.4 121.8L343.9 120.5L345.5 119.7L358.7 125.7L367.6 124.5L375.3 127.4L378.7 128L380.8 124.5L381.1 119.3L383.9 116.7L388 110.8L392 109.2L394.4 110.5L417.7 116.9Z",
    src: "/modal/rawa.webp",
    modalSrc: "/picture/rawa.webp",
    alt: "Racha",
    title: [
      {
        id: 2,
        text: { ka: "რაჭა", en: "Racha" },
        bla: [
          { ka: "ამბროლაური", en: "Ambrolauri" },
          { ka: "ონი", en: "Oni" },
        ],
      },
    ],

    description: {
      ka: "„სულის ქვეყანა“ - ხშირად ასეც ეძახიან დღემდე იდუმალებით მოცულ ამ მხარეს, რომელიც ცნობილია თავისი ზღვაში ჩაძირული ქალაქებით, „ოქროს ვერძის“ ლეგენდით, მზის ტაძრებით, უძველესი სამარხებითა და ციხესიმაგრეებით. ადამიანები აქ ქვის ხანიდან მოყოლებული ცხოვრობდნენ, მასზე აღფრთოვანებით წერდნენ: ჰეროდოტე, სტრაბონი, ფლავიუსი, არიანე, არქანჯელო ლამბერტი თუ შარდენი.",
      en: "The 'Land of the Soul' - this is how this region, still shrouded in mystery, is often called, known for its cities submerged in the sea, the legend of the 'Golden Fleece,' sun temples, ancient burial sites, and fortresses. People have lived here since the Stone Age, and it was written about with admiration by Herodotus, Strabo, Flavius, Arrian, Archangelo Lamberti, and Chardin.",
    },
    citiesTimes: [
      { name: { ka: "თბილისი", en: "Tbilisi" }, times: ["7 სთ"] },
      { name: { ka: "ბათუმი", en: "Batumi" }, times: ["3:45 სთ"] },
      { name: { ka: "ქუთაისი", en: "Kutaisi" }, times: ["3:30 სთ"] },
    ],
    descriptionTexts: [
      {
        header: { ka: "სოხუმი", en: "Sukhumi" },
        img: "",
        desc: {
          ka: "საქართველოს შემადგენელი ნაწილი - აფხაზეთი, რომლის ფართობიც 8,700 კვ.კმ-ია, ქვეყნის უკიდურეს ჩრდილო-დასავლეთში მდებარეობს, ის ჩრდილოეთიდან - კავკასიონის მთავარი ქედით, სამხრეთ-დასავლეთიდან კი შავი ზღვით არის დაცული. აფხაზეთის სანაპირო ზოლის სიგრძე 195 კმ-ია. ჰავა აქ თბილია, ნოტიო და სუბტროპიკული.",
          en: "A constituent part of Georgia, Abkhazia, with an area of 8,700 sq.km, is located in the extreme northwest of the country, bordered by the main ridge of the Caucasus Mountains to the north and the Black Sea to the southwest. The length of Abkhazia’s coastline is 195 km. The climate here is warm, humid, and subtropical.",
        },
      },
      {
        header: {
          ka: "სოხუმის ბოტანიკური ბაღი",
          en: "Sukhumi Botanical Garden",
        },
        img: "",
        desc: {
          ka: "აფხაზეთის ოაზისი კავკასიაში უძველესი ბოტანიკური ბაღია, სადაც 5000-ზე მეტი ჯიშის ეგზოტიკური მცენარე წელიწადის ყველა სეზონზე ხარობს, მნახველს შეუძლია დატკბეს ჩრდილოეთ ამერიკიდან, სამხრეთ-აღმოსავლეთ აზიიდან, ავსტრალიიდან და სხვა ქვეყნებიდან ჩამოტანილი იშვიათი ჯიშის მცენარეებით, ისეირნოს ბამბუკის გრძელ ხეივანში, დაისვენოს გიგანტური, 20 მეტრის სიმაღლის 250 წლის ცაცხვის ხის ჩრდილში,  დატკბეს უდაბნოებიდან ჩამოტანილი სუკულენტებით.",
          en: "Abkhazia’s oasis in the Caucasus is the oldest botanical garden, where over 5,000 species of exotic plants thrive in every season. Visitors can enjoy rare plant species brought from North America, Southeast Asia, Australia, and other countries, stroll through a long bamboo avenue, rest in the shade of a giant 250-year-old, 20-meter-tall linden tree, and admire succulents brought from deserts.",
        },
      },
      {
        header: {
          ka: "აფხაზეთის ღირსშესანიშნაობები",
          en: "Abkhazia’s Landmarks",
        },
        img: "",
        desc: {
          ka: "სამხატვრო გალერეა, სახელმწიფო მუზეუმი, ბაგრატიონთა ეპოქის (XI საუკუნე) ნაგებობების ნაშთი, სტალაქტიტური მღვიმეები სოფელ შრომასთან, უნიკალური ფერმა-ლაბორატორია - პრიმატორიუმი, შერვაშიძეთა საგვარეულო სამფლობელო - ყველაფერი ეს სოხუმსა და მის შემოგარენში შეგიძლია დაათვალიერო. \n\n აქ ბევრი საინტერესო ადგილი და ულამაზესი პეიზაჟია, რომლებითაც სოხუმის ბორცვიდან, სოხუმის ციხიდან, ანაკოფიის ციხესიმაგრიდან, ბაგრატის ციხიდან, „სოხუმის შუქურადან“ დატკბები.",
          en: "Art gallery, state museum, remnants of structures from the Bagrationi era (11th century), stalactite caves near the village of Shroma, a unique farm-laboratory - Primatorium, and the Shervashidze family estate - all these can be explored in Sukhumi and its surroundings. \n\n There are many interesting places and beautiful landscapes to enjoy from Sukhumi Hill, Sukhumi Fortress, Anakopia Fortress, Bagrati Fortress, and the 'Sukhumi Lighthouse.'",
        },
      },
      {
        header: {
          ka: "კიდევ რა უნდა ნახო აფხაზეთში?",
          en: "What Else to See in Abkhazia?",
        },
        img: "",
        desc: {
          ka: "გუდაუთის რაიონში ზღვის დონიდან 1950 მეტრზე მდებარეობს მსოფლიოში ერთ-ერთი ყველაზე ღრმა კარსტული მღვიმე, რომლის ზედა ნაწილი ზამთარ-ზაფხულ ყინულითაა დაფარული; აუცილებლად სანახავია ახალი ათონის კარსტული მღვიმე, გიგანტური სტალაგმიტებითა და გაქვავებული ჩანჩქერებით; ასევე - მსოფლიოში ყველაზე ღრმა, კრუბერის გამოქვაბული. \n\n ლაშქრობის მოყვარულებისთვის იდეალური ადგილია სოფელი განთიადი, სადაც რამდენიმე მეტრში ჰაშუფსეს კანიონია. ველური ბუნება, ფერდობები და პლატოები, თვალუწვდენელი კლდეები, ქვის ლაბირინთებთან ერთად, დიდ შთაბეჭდილებას ახდენს მნახველზე. აუცილებლად მოსანახულებელია სპელეოლოგების ბანაკი, რომელიც არაბიკის მასივზე 2656 მეტრის სიმაღლეზე მდებარეობს. აქ კარვის გაშლა და ღამის გათენებაც შესაძლებელია. \n\n ნახე ძოუს ულამაზესი ტბა, გეგის ფერდობი და ჩანჩქერი, ულამაზესი ფიჭვებით სავსე ბიჭვინთის ჩრდილოეთით საქართველოში ყველაზე ღრმა რიწის ტბის სილამაზე იხილე - წიწვოვანი ნაძვებითა და კოლხური ბზით გარშემორტყმული საოცრება. \n\n აფხაზეთშია საქართველოს უდიდესი მდინარეები ბზიფი და კოდორი და მსოფლიოში ყველაზე პატარა მდინარე რეპრუა, რომლის სიგრძე 18 მეტრს არ აღემატება. აქ, რიწის, ფსხუ-გუმისთისა და ბიჭვინთა-მიუსერას ნაკრძალებში, უნიკალური მცენარეებისა და ცხოველების ნახვაა შესაძლებელი.",
          en: "In the Gudauta district, at 1,950 meters above sea level, lies one of the world’s deepest karst caves, with its upper part covered in ice year-round; you must visit the New Athos karst cave with its giant stalagmites and petrified waterfalls, as well as the world’s deepest cave, Krubera. \n\n For hiking enthusiasts, the village of Gantiadi is an ideal spot, with the Hashupse Canyon just a few meters away. The wild nature, slopes, plateaus, vast cliffs, and stone labyrinths make a profound impression on visitors. A must-visit is the speleologists’ camp, located at 2,656 meters on the Arabika Massif, where you can pitch a tent and spend the night. \n\n See the beautiful Dzou Lake, the Gegi slope and waterfall, and the stunning beauty of Georgia’s deepest lake, Ritsa, north of Bichvinta, surrounded by coniferous firs and Colchic boxwood. \n\n Abkhazia is home to Georgia’s largest rivers, Bzipi and Kodori, and the world’s shortest river, Reprua, which is no longer than 18 meters. In the Ritsa, Pskhu-Gumista, and Bichvinta-Miusera reserves, you can see unique plants and animals.",
        },
      },
      {
        header: { ka: "აფხაზური კერძები", en: "Abkhazian Cuisine" },
        img: "",
        desc: {
          ka: "აფხაზურ სამზარეულოში დიდი ადგილი უჭირავს ბოსტნეულს, ხილს, რძის პროდუქტებს. მნიშვნელობა არ აქვს, პატარა ფაცხაში შეისვენებ თუ რესტორანში, ტრადიციულ კერძებს აუცილებლად შემოგთავაზებენ. \n\n აბისტა სიმინდის ფქვილის ფაფაა, რომელიც ძალიან უხდება ლობიოს, ყველსა და ხორცს. აფხაზური ტრადიციული კერძია აშვჩაპანი, იგივე გადაზელილი ყველი, არიცმგელი, ანუ ნიგვზიანი მჭადი, აყრდცა - ლობიოს შეჭამადი, აფხაზური აჯიკა, ლეღვის ტყლაპი და სხვა. \n\n თუ გუდაუთაში, სოფელ ლიხნში მოხვდები ტრადიციულ დღესასწაულ „ლიხნაშტაზე“, აფხაზურ სამზარეულოს ნიმუშებს სრულიად უსასყიდლოდ დააგემოვნებ, თუმცა ეს არც სხვაგან გაგიჭირდება - აფხაზეთში, ისევე როგორც მთელ საქართველოში, სტუმრისთვის კარი ყოველთვის ღიაა.",
          en: "Abkhazian cuisine places great emphasis on vegetables, fruits, and dairy products. Whether you stop at a small hut or a restaurant, traditional dishes will definitely be offered. \n\n Abista is a cornmeal porridge that pairs wonderfully with beans, cheese, and meat. Traditional Abkhazian dishes include ashvchapani, or smoked cheese, aritsmgeli, a walnut-filled cornbread, aqrtsa - a bean dish, Abkhazian adjika, fig jam, and more. \n\n If you find yourself in Gudauta, in the village of Likhni, during the traditional festival 'Likhnashta,' you can taste Abkhazian cuisine for free, though it’s easy to find these dishes elsewhere too - in Abkhazia, as in all of Georgia, the door is always open for guests.",
        },
      },
    ],
    range: [
      {
        min: 0,
        max: 0,
      },
    ],
  },
  {
    id: 3,
    region: "Imereti",
    translations: { ka: "იმერეთი", en: "Imereti" },
    path: "M327.6 291.6L327.4 283.3L325.5 276.2L321.8 275.2L317.9 275.5L315.4 274.3L313.1 272.8L309.7 271.2L306.6 268.8L302.2 267.5L298.6 265.4L297 260.6L294.6 256.7L290.2 255.6L286.5 258L284.5 258.7L282.3 258L276.2 256.9L273.2 252.6L275.9 248.3L280.8 247.7L283.3 242.6L283.1 233.9L284.3 227L286.6 224.2L288 219.9L293.3 211.1L301.9 201.2L303.5 197.3L303.6 192.5L304.8 189.9L306.7 188.2L308.6 182.5L312.2 178.7L318.4 178.3L320.6 177.7L323.1 177.6L324.2 181.4V185.5L325.2 188.6L325.3 192.1L338.5 187.7L341.6 189L344.8 189.3L347.6 186.5L350.6 186.4L357.4 190.7L363.6 196.5L365.1 201.7L368.2 204.2L370.8 204.7L376.6 208L385.4 207.2L390.6 205.1L394.9 200.7L406.5 194.6L419.5 196L431.9 195L439.8 197.9L442.4 198.9L446.7 201.6L451.5 202.3L455.1 201.4L458.5 199.5L462.4 199L465.2 202.3L463.7 207.7L463.6 213.1L454.2 215.7L448.4 219.8L445.9 221.6L445.5 223.6L444.9 226.5L445.7 231.8L445 236.1L444.4 236.8L443.6 237.7L441.7 239.3L440 244.1L437.8 248.4L433.8 251.4L430.4 254.8L429.9 261.8L428 267.7L423.6 271.6L422.7 278L386.1 293L384.1 292.7L382 291.9L369.3 293L364.1 295.2L358.6 295.1L348.1 292.8L335.1 296.1L327.6 291.6Z",
    src: "/picture/imereti-gnta.webp",
    modalSrc: "/picture/imereti-gnta.webp",
    alt: "Imereti",
    title: [
      {
        id: 3,
        text: { ka: "იმერეთი", en: "Imereti" },
        bla: [
          { ka: "ქუთაისი", en: "Kutaisi" },
          { ka: "ზესტაფონი", en: "Zestafoni" },
        ],
      },
    ],

    description: {
      ka: "„სულის ქვეყანა“ - ხშირად ასეც ეძახიან დღემდე იდუმალებით მოცულ ამ მხარეს, რომელიც ცნობილია თავისი ზღვაში ჩაძირული ქალაქებით, „ოქროს ვერძის“ ლეგენდით, მზის ტაძრებით, უძველესი სამარხებითა და ციხესიმაგრეებით. ადამიანები აქ ქვის ხანიდან მოყოლებული ცხოვრობდნენ, მასზე აღფრთოვანებით წერდნენ: ჰეროდოტე, სტრაბონი, ფლავიუსი, არიანე, არქანჯელო ლამბერტი თუ შარდენი.",
      en: "The 'Land of the Soul' - this is how this region, still shrouded in mystery, is often called, known for its cities submerged in the sea, the legend of the 'Golden Fleece,' sun temples, ancient burial sites, and fortresses. People have lived here since the Stone Age, and it was written about with admiration by Herodotus, Strabo, Flavius, Arrian, Archangelo Lamberti, and Chardin.",
    },
    citiesTimes: [
      { name: { ka: "თბილისი", en: "Tbilisi" }, times: ["7 სთ"] },
      { name: { ka: "ბათუმი", en: "Batumi" }, times: ["3:45 სთ"] },
      { name: { ka: "ქუთაისი", en: "Kutaisi" }, times: ["3:30 სთ"] },
    ],
    descriptionTexts: [
      {
        header: { ka: "სოხუმი", en: "Sukhumi" },
        img: "",
        desc: {
          ka: "საქართველოს შემადგენელი ნაწილი - აფხაზეთი, რომლის ფართობიც 8,700 კვ.კმ-ია, ქვეყნის უკიდურეს ჩრდილო-დასავლეთში მდებარეობს, ის ჩრდილოეთიდან - კავკასიონის მთავარი ქედით, სამხრეთ-დასავლეთიდან კი შავი ზღვით არის დაცული. აფხაზეთის სანაპირო ზოლის სიგრძე 195 კმ-ია. ჰავა აქ თბილია, ნოტიო და სუბტროპიკული.",
          en: "A constituent part of Georgia, Abkhazia, with an area of 8,700 sq.km, is located in the extreme northwest of the country, bordered by the main ridge of the Caucasus Mountains to the north and the Black Sea to the southwest. The length of Abkhazia’s coastline is 195 km. The climate here is warm, humid, and subtropical.",
        },
      },
      {
        header: {
          ka: "სოხუმის ბოტანიკური ბაღი",
          en: "Sukhumi Botanical Garden",
        },
        img: "",
        desc: {
          ka: "აფხაზეთის ოაზისი კავკასიაში უძველესი ბოტანიკური ბაღია, სადაც 5000-ზე მეტი ჯიშის ეგზოტიკური მცენარე წელიწადის ყველა სეზონზე ხარობს, მნახველს შეუძლია დატკბეს ჩრდილოეთ ამერიკიდან, სამხრეთ-აღმოსავლეთ აზიიდან, ავსტრალიიდან და სხვა ქვეყნებიდან ჩამოტანილი იშვიათი ჯიშის მცენარეებით, ისეირნოს ბამბუკის გრძელ ხეივანში, დაისვენოს გიგანტური, 20 მეტრის სიმაღლის 250 წლის ცაცხვის ხის ჩრდილში,  დატკბეს უდაბნოებიდან ჩამოტანილი სუკულენტებით.",
          en: "Abkhazia’s oasis in the Caucasus is the oldest botanical garden, where over 5,000 species of exotic plants thrive in every season. Visitors can enjoy rare plant species brought from North America, Southeast Asia, Australia, and other countries, stroll through a long bamboo avenue, rest in the shade of a giant 250-year-old, 20-meter-tall linden tree, and admire succulents brought from deserts.",
        },
      },
      {
        header: {
          ka: "აფხაზეთის ღირსშესანიშნაობები",
          en: "Abkhazia’s Landmarks",
        },
        img: "",
        desc: {
          ka: "სამხატვრო გალერეა, სახელმწიფო მუზეუმი, ბაგრატიონთა ეპოქის (XI საუკუნე) ნაგებობების ნაშთი, სტალაქტიტური მღვიმეები სოფელ შრომასთან, უნიკალური ფერმა-ლაბორატორია - პრიმატორიუმი, შერვაშიძეთა საგვარეულო სამფლობელო - ყველაფერი ეს სოხუმსა და მის შემოგარენში შეგიძლია დაათვალიერო. \n\n აქ ბევრი საინტერესო ადგილი და ულამაზესი პეიზაჟია, რომლებითაც სოხუმის ბორცვიდან, სოხუმის ციხიდან, ანაკოფიის ციხესიმაგრიდან, ბაგრატის ციხიდან, „სოხუმის შუქურადან“ დატკბები.",
          en: "Art gallery, state museum, remnants of structures from the Bagrationi era (11th century), stalactite caves near the village of Shroma, a unique farm-laboratory - Primatorium, and the Shervashidze family estate - all these can be explored in Sukhumi and its surroundings. \n\n There are many interesting places and beautiful landscapes to enjoy from Sukhumi Hill, Sukhumi Fortress, Anakopia Fortress, Bagrati Fortress, and the 'Sukhumi Lighthouse.'",
        },
      },
      {
        header: {
          ka: "კიდევ რა უნდა ნახო აფხაზეთში?",
          en: "What Else to See in Abkhazia?",
        },
        img: "",
        desc: {
          ka: "გუდაუთის რაიონში ზღვის დონიდან 1950 მეტრზე მდებარეობს მსოფლიოში ერთ-ერთი ყველაზე ღრმა კარსტული მღვიმე, რომლის ზედა ნაწილი ზამთარ-ზაფხულ ყინულითაა დაფარული; აუცილებლად სანახავია ახალი ათონის კარსტული მღვიმე, გიგანტური სტალაგმიტებითა და გაქვავებული ჩანჩქერებით; ასევე - მსოფლიოში ყველაზე ღრმა, კრუბერის გამოქვაბული. \n\n ლაშქრობის მოყვარულებისთვის იდეალური ადგილია სოფელი განთიადი, სადაც რამდენიმე მეტრში ჰაშუფსეს კანიონია. ველური ბუნება, ფერდობები და პლატოები, თვალუწვდენელი კლდეები, ქვის ლაბირინთებთან ერთად, დიდ შთაბეჭდილებას ახდენს მნახველზე. აუცილებლად მოსანახულებელია სპელეოლოგების ბანაკი, რომელიც არაბიკის მასივზე 2656 მეტრის სიმაღლეზე მდებარეობს. აქ კარვის გაშლა და ღამის გათენებაც შესაძლებელია. \n\n ნახე ძოუს ულამაზესი ტბა, გეგის ფერდობი და ჩანჩქერი, ულამაზესი ფიჭვებით სავსე ბიჭვინთის ჩრდილოეთით საქართველოში ყველაზე ღრმა რიწის ტბის სილამაზე იხილე - წიწვოვანი ნაძვებითა და კოლხური ბზით გარშემორტყმული საოცრება. \n\n აფხაზეთშია საქართველოს უდიდესი მდინარეები ბზიფი და კოდორი და მსოფლიოში ყველაზე პატარა მდინარე რეპრუა, რომლის სიგრძე 18 მეტრს არ აღემატება. აქ, რიწის, ფსხუ-გუმისთისა და ბიჭვინთა-მიუსერას ნაკრძალებში, უნიკალური მცენარეებისა და ცხოველების ნახვაა შესაძლებელი.",
          en: "In the Gudauta district, at 1,950 meters above sea level, lies one of the world’s deepest karst caves, with its upper part covered in ice year-round; you must visit the New Athos karst cave with its giant stalagmites and petrified waterfalls, as well as the world’s deepest cave, Krubera. \n\n For hiking enthusiasts, the village of Gantiadi is an ideal spot, with the Hashupse Canyon just a few meters away. The wild nature, slopes, plateaus, vast cliffs, and stone labyrinths make a profound impression on visitors. A must-visit is the speleologists’ camp, located at 2,656 meters on the Arabika Massif, where you can pitch a tent and spend the night. \n\n See the beautiful Dzou Lake, the Gegi slope and waterfall, and the stunning beauty of Georgia’s deepest lake, Ritsa, north of Bichvinta, surrounded by coniferous firs and Colchic boxwood. \n\n Abkhazia is home to Georgia’s largest rivers, Bzipi and Kodori, and the world’s shortest river, Reprua, which is no longer than 18 meters. In the Ritsa, Pskhu-Gumista, and Bichvinta-Miusera reserves, you can see unique plants and animals.",
        },
      },
      {
        header: { ka: "აფხაზური კერძები", en: "Abkhazian Cuisine" },
        img: "",
        desc: {
          ka: "აფხაზურ სამზარეულოში დიდი ადგილი უჭირავს ბოსტნეულს, ხილს, რძის პროდუქტებს. მნიშვნელობა არ აქვს, პატარა ფაცხაში შეისვენებ თუ რესტორანში, ტრადიციულ კერძებს აუცილებლად შემოგთავაზებენ. \n\n აბისტა სიმინდის ფქვილის ფაფაა, რომელიც ძალიან უხდება ლობიოს, ყველსა და ხორცს. აფხაზური ტრადიციული კერძია აშვჩაპანი, იგივე გადაზელილი ყველი, არიცმგელი, ანუ ნიგვზიანი მჭადი, აყრდცა - ლობიოს შეჭამადი, აფხაზური აჯიკა, ლეღვის ტყლაპი და სხვა. \n\n თუ გუდაუთაში, სოფელ ლიხნში მოხვდები ტრადიციულ დღესასწაულ „ლიხნაშტაზე“, აფხაზურ სამზარეულოს ნიმუშებს სრულიად უსასყიდლოდ დააგემოვნებ, თუმცა ეს არც სხვაგან გაგიჭირდება - აფხაზეთში, ისევე როგორც მთელ საქართველოში, სტუმრისთვის კარი ყოველთვის ღიაა.",
          en: "Abkhazian cuisine places great emphasis on vegetables, fruits, and dairy products. Whether you stop at a small hut or a restaurant, traditional dishes will definitely be offered. \n\n Abista is a cornmeal porridge that pairs wonderfully with beans, cheese, and meat. Traditional Abkhazian dishes include ashvchapani, or smoked cheese, aritsmgeli, a walnut-filled cornbread, aqrtsa - a bean dish, Abkhazian adjika, fig jam, and more. \n\n If you find yourself in Gudauta, in the village of Likhni, during the traditional festival 'Likhnashta,' you can taste Abkhazian cuisine for free, though it’s easy to find these dishes elsewhere too - in Abkhazia, as in all of Georgia, the door is always open for guests.",
        },
      },
    ],
    range: [
      {
        min: 0,
        max: 0,
      },
    ],
  },
  {
    id: 4,
    region: "Samachablo",
    translations: { ka: "სამაჩაბლო", en: "Samachablo" },
    path: "M462.9 225.4L468.4 230.9L479.5 229.5L486.4 221.2L496.1 214.3L501.6 226.7L507.1 228.1L512.6 225.3L514 232.2L518.1 233.6H522.2L527.7 236L529.2 234.7L530.7 233.6L531.8 231.6L532.6 229.4L535.1 227.5L537.2 224.6L536.2 219.4L534.1 215L534.5 209.8L534.2 204.8L532.5 202.5L530.9 200.8L530.3 198.2L530.1 195.5L529.2 193.8L527.8 193L529.7 187.1L533.6 182.2L531.7 179.5L529.6 177.6L525.5 170.3L519.7 168.7L517.2 165.2L515.7 160.8L515.5 160.2L511.2 161.5L499.5 162.1L494.2 164.6L492.5 166.4L489.5 170.6L487.7 172.2L485.4 172.6L483.1 171.5L481.6 170.3L480.9 178.7L474.4 183.4L471.7 188.2L469.4 189.3L452.4 190.7L442.4 198.8L446.7 201.5L451.5 202.2L455.1 201.3L458.5 199.4L462.4 198.9L465.2 202.2L463.7 207.6L463.6 213L460.1 218.3L462.9 225.4Z",
    src: "/modal/samacablo.webp",
    modalSrc: "/picture/sam.jpg",
    alt: "Samachablo",
    title: [
      {
        id: 4,
        text: { ka: "სამაჩაბლო", en: "Samachablo" },
        bla: [
          { ka: "ცხინვალი", en: "Tskhinvali" },
          { ka: "ახალგორი", en: "Akhalgori" },
        ],
      },
    ],
    description: {
      ka: "„სულის ქვეყანა“ - ხშირად ასეც ეძახიან დღემდე იდუმალებით მოცულ ამ მხარეს, რომელიც ცნობილია თავისი ზღვაში ჩაძირული ქალაქებით, „ოქროს ვერძის“ ლეგენდით, მზის ტაძრებით, უძველესი სამარხებითა და ციხესიმაგრეებით. ადამიანები აქ ქვის ხანიდან მოყოლებული ცხოვრობდნენ, მასზე აღფრთოვანებით წერდნენ: ჰეროდოტე, სტრაბონი, ფლავიუსი, არიანე, არქანჯელო ლამბერტი თუ შარდენი.",
      en: "The 'Land of the Soul' - this is how this region, still shrouded in mystery, is often called, known for its cities submerged in the sea, the legend of the 'Golden Fleece,' sun temples, ancient burial sites, and fortresses. People have lived here since the Stone Age, and it was written about with admiration by Herodotus, Strabo, Flavius, Arrian, Archangelo Lamberti, and Chardin.",
    },
    citiesTimes: [
      { name: { ka: "თბილისი", en: "Tbilisi" }, times: ["7 სთ"] },
      { name: { ka: "ბათუმი", en: "Batumi" }, times: ["3:45 სთ"] },
      { name: { ka: "ქუთაისი", en: "Kutaisi" }, times: ["3:30 სთ"] },
    ],
    descriptionTexts: [
      {
        header: { ka: "სოხუმი", en: "Sukhumi" },
        img: "",
        desc: {
          ka: "საქართველოს შემადგენელი ნაწილი - აფხაზეთი, რომლის ფართობიც 8,700 კვ.კმ-ია, ქვეყნის უკიდურეს ჩრდილო-დასავლეთში მდებარეობს, ის ჩრდილოეთიდან - კავკასიონის მთავარი ქედით, სამხრეთ-დასავლეთიდან კი შავი ზღვით არის დაცული. აფხაზეთის სანაპირო ზოლის სიგრძე 195 კმ-ია. ჰავა აქ თბილია, ნოტიო და სუბტროპიკული.",
          en: "A constituent part of Georgia, Abkhazia, with an area of 8,700 sq.km, is located in the extreme northwest of the country, bordered by the main ridge of the Caucasus Mountains to the north and the Black Sea to the southwest. The length of Abkhazia’s coastline is 195 km. The climate here is warm, humid, and subtropical.",
        },
      },
      {
        header: {
          ka: "სოხუმის ბოტანიკური ბაღი",
          en: "Sukhumi Botanical Garden",
        },
        img: "",
        desc: {
          ka: "აფხაზეთის ოაზისი კავკასიაში უძველესი ბოტანიკური ბაღია, სადაც 5000-ზე მეტი ჯიშის ეგზოტიკური მცენარე წელიწადის ყველა სეზონზე ხარობს, მნახველს შეუძლია დატკბეს ჩრდილოეთ ამერიკიდან, სამხრეთ-აღმოსავლეთ აზიიდან, ავსტრალიიდან და სხვა ქვეყნებიდან ჩამოტანილი იშვიათი ჯიშის მცენარეებით, ისეირნოს ბამბუკის გრძელ ხეივანში, დაისვენოს გიგანტური, 20 მეტრის სიმაღლის 250 წლის ცაცხვის ხის ჩრდილში,  დატკბეს უდაბნოებიდან ჩამოტანილი სუკულენტებით.",
          en: "Abkhazia’s oasis in the Caucasus is the oldest botanical garden, where over 5,000 species of exotic plants thrive in every season. Visitors can enjoy rare plant species brought from North America, Southeast Asia, Australia, and other countries, stroll through a long bamboo avenue, rest in the shade of a giant 250-year-old, 20-meter-tall linden tree, and admire succulents brought from deserts.",
        },
      },
      {
        header: {
          ka: "აფხაზეთის ღირსშესანიშნაობები",
          en: "Abkhazia’s Landmarks",
        },
        img: "",
        desc: {
          ka: "სამხატვრო გალერეა, სახელმწიფო მუზეუმი, ბაგრატიონთა ეპოქის (XI საუკუნე) ნაგებობების ნაშთი, სტალაქტიტური მღვიმეები სოფელ შრომასთან, უნიკალური ფერმა-ლაბორატორია - პრიმატორიუმი, შერვაშიძეთა საგვარეულო სამფლობელო - ყველაფერი ეს სოხუმსა და მის შემოგარენში შეგიძლია დაათვალიერო. \n\n აქ ბევრი საინტერესო ადგილი და ულამაზესი პეიზაჟია, რომლებითაც სოხუმის ბორცვიდან, სოხუმის ციხიდან, ანაკოფიის ციხესიმაგრიდან, ბაგრატის ციხიდან, „სოხუმის შუქურადან“ დატკბები.",
          en: "Art gallery, state museum, remnants of structures from the Bagrationi era (11th century), stalactite caves near the village of Shroma, a unique farm-laboratory - Primatorium, and the Shervashidze family estate - all these can be explored in Sukhumi and its surroundings. \n\n There are many interesting places and beautiful landscapes to enjoy from Sukhumi Hill, Sukhumi Fortress, Anakopia Fortress, Bagrati Fortress, and the 'Sukhumi Lighthouse.'",
        },
      },
      {
        header: {
          ka: "კიდევ რა უნდა ნახო აფხაზეთში?",
          en: "What Else to See in Abkhazia?",
        },
        img: "",
        desc: {
          ka: "გუდაუთის რაიონში ზღვის დონიდან 1950 მეტრზე მდებარეობს მსოფლიოში ერთ-ერთი ყველაზე ღრმა კარსტული მღვიმე, რომლის ზედა ნაწილი ზამთარ-ზაფხულ ყინულითაა დაფარული; აუცილებლად სანახავია ახალი ათონის კარსტული მღვიმე, გიგანტური სტალაგმიტებითა და გაქვავებული ჩანჩქერებით; ასევე - მსოფლიოში ყველაზე ღრმა, კრუბერის გამოქვაბული. \n\n ლაშქრობის მოყვარულებისთვის იდეალური ადგილია სოფელი განთიადი, სადაც რამდენიმე მეტრში ჰაშუფსეს კანიონია. ველური ბუნება, ფერდობები და პლატოები, თვალუწვდენელი კლდეები, ქვის ლაბირინთებთან ერთად, დიდ შთაბეჭდილებას ახდენს მნახველზე. აუცილებლად მოსანახულებელია სპელეოლოგების ბანაკი, რომელიც არაბიკის მასივზე 2656 მეტრის სიმაღლეზე მდებარეობს. აქ კარვის გაშლა და ღამის გათენებაც შესაძლებელია. \n\n ნახე ძოუს ულამაზესი ტბა, გეგის ფერდობი და ჩანჩქერი, ულამაზესი ფიჭვებით სავსე ბიჭვინთის ჩრდილოეთით საქართველოში ყველაზე ღრმა რიწის ტბის სილამაზე იხილე - წიწვოვანი ნაძვებითა და კოლხური ბზით გარშემორტყმული საოცრება. \n\n აფხაზეთშია საქართველოს უდიდესი მდინარეები ბზიფი და კოდორი და მსოფლიოში ყველაზე პატარა მდინარე რეპრუა, რომლის სიგრძე 18 მეტრს არ აღემატება. აქ, რიწის, ფსხუ-გუმისთისა და ბიჭვინთა-მიუსერას ნაკრძალებში, უნიკალური მცენარეებისა და ცხოველების ნახვაა შესაძლებელი.",
          en: "In the Gudauta district, at 1,950 meters above sea level, lies one of the world’s deepest karst caves, with its upper part covered in ice year-round; you must visit the New Athos karst cave with its giant stalagmites and petrified waterfalls, as well as the world’s deepest cave, Krubera. \n\n For hiking enthusiasts, the village of Gantiadi is an ideal spot, with the Hashupse Canyon just a few meters away. The wild nature, slopes, plateaus, vast cliffs, and stone labyrinths make a profound impression on visitors. A must-visit is the speleologists’ camp, located at 2,656 meters on the Arabika Massif, where you can pitch a tent and spend the night. \n\n See the beautiful Dzou Lake, the Gegi slope and waterfall, and the stunning beauty of Georgia’s deepest lake, Ritsa, north of Bichvinta, surrounded by coniferous firs and Colchic boxwood. \n\n Abkhazia is home to Georgia’s largest rivers, Bzipi and Kodori, and the world’s shortest river, Reprua, which is no longer than 18 meters. In the Ritsa, Pskhu-Gumista, and Bichvinta-Miusera reserves, you can see unique plants and animals.",
        },
      },
      {
        header: { ka: "აფხაზური კერძები", en: "Abkhazian Cuisine" },
        img: "",
        desc: {
          ka: "აფხაზურ სამზარეულოში დიდი ადგილი უჭირავს ბოსტნეულს, ხილს, რძის პროდუქტებს. მნიშვნელობა არ აქვს, პატარა ფაცხაში შეისვენებ თუ რესტორანში, ტრადიციულ კერძებს აუცილებლად შემოგთავაზებენ. \n\n აბისტა სიმინდის ფქვილის ფაფაა, რომელიც ძალიან უხდება ლობიოს, ყველსა და ხორცს. აფხაზური ტრადიციული კერძია აშვჩაპანი, იგივე გადაზელილი ყველი, არიცმგელი, ანუ ნიგვზიანი მჭადი, აყრდცა - ლობიოს შეჭამადი, აფხაზური აჯიკა, ლეღვის ტყლაპი და სხვა. \n\n თუ გუდაუთაში, სოფელ ლიხნში მოხვდები ტრადიციულ დღესასწაულ „ლიხნაშტაზე“, აფხაზურ სამზარეულოს ნიმუშებს სრულიად უსასყიდლოდ დააგემოვნებ, თუმცა ეს არც სხვაგან გაგიჭირდება - აფხაზეთში, ისევე როგორც მთელ საქართველოში, სტუმრისთვის კარი ყოველთვის ღიაა.",
          en: "Abkhazian cuisine places great emphasis on vegetables, fruits, and dairy products. Whether you stop at a small hut or a restaurant, traditional dishes will definitely be offered. \n\n Abista is a cornmeal porridge that pairs wonderfully with beans, cheese, and meat. Traditional Abkhazian dishes include ashvchapani, or smoked cheese, aritsmgeli, a walnut-filled cornbread, aqrtsa - a bean dish, Abkhazian adjika, fig jam, and more. \n\n If you find yourself in Gudauta, in the village of Likhni, during the traditional festival 'Likhnashta,' you can taste Abkhazian cuisine for free, though it’s easy to find these dishes elsewhere too - in Abkhazia, as in all of Georgia, the door is always open for guests.",
        },
      },
    ],
    range: [
      {
        min: 0,
        max: 0,
      },
    ],
  },
  {
    id: 5,
    region: "Guria",
    translations: { ka: "გურია", en: "Guria" },
    path: "M306.9 297.4L303.8 297.1L302.2 296.3L297.5 291.5L294.7 290.9L291.4 291.9L284.8 296L278.1 297.1L275.9 297.5L272.3 296.6L270.1 295.3L266.2 293.2L260.2 293.9L257.2 295H257L255.4 295.3L251.7 292.4L250.2 291.7L247.8 290.1L241.8 287.6L241.2 284.1L239.3 283L236.1 281.1L220.1 280.3V279.6L218.6 269.2L218.4 265.5L217.8 263.2L212.8 254.5L214.8 251L215.4 250.2L215.9 247L217.6 242.4L225.3 240.9L233.2 240.6L248.4 238L255.2 239.7L261.4 243.8L269.2 244.8L275.7 248.1L272.9 252.5L275.9 256.8L282 257.9L284.2 258.6L286.2 258L289.9 255.6L294.3 256.7L296.7 260.6L298.3 265.4L301.9 267.5L306.3 268.8L309.4 271.2L312.8 272.8L315.1 274.3L317.6 275.5L321.5 275.2L325.2 276.2L327.1 283.3L327.3 291.6L324.1 291.7L321.3 293.6L320.2 296.5L318.2 298.2L315.4 297.7L312.6 296.7L306.9 297.4Z",
    src: "/picture/guria-gnta.webp",
    modalSrc: "/picture/guria-gnta.webp",
    alt: "Guria",
    title: [
      {
        id: 5,
        text: { ka: "გურია", en: "Guria" },
        bla: [
          { ka: "ამბროლაური", en: "Ambrolauri" },
          { ka: "ონი", en: "Oni" },
        ],
      },
    ],
    description: {
      ka: "საქართველოს ამ ულამაზეს მხარეს ქვეყნის სამი საოცარი კუთხე - რაჭა, ლეჩხუმი და ქვემო სვანეთი შეადგენს. რაჭა და ლეჩხუმი კავკასიონის ქედის გასწვრივ, ქვეყნის უკიდურეს ჩრდილო-დასავლეთ ნაწილში მდებარეობს, ქვემო სვანეთი ჩრდილოეთით, კავკასიონის ქედის სამხრეთ კალთებზეა შეფენილი. მდინარეების - რიონის, ცხენისწყლისა და ლაჯანურის ხეობებში განფენილ რეგიონს იმერეთი, სამაჩაბლოში (ე. წ. სამხრეთ ოსეთი) შემავალი ჯავის მუნიციპალიტეტი და სამეგრელო-ზემო სვანეთის მხარე ესაზღვრება.",
      en: "This beautiful region of Georgia consists of three remarkable areas: Racha, Lechkhumi, and Lower Svaneti. Racha and Lechkhumi are located along the Caucasus ridge in the extreme northwest of the country, while Lower Svaneti lies to the north, on the southern slopes of the Caucasus. The region, spread across the valleys of the Rioni, Tskhenistskali, and Lajanuri rivers, borders Imereti, the Java municipality within Samachablo (so-called South Ossetia), and the Samegrelo-Zemo Svaneti region.",
    },
    citiesTimes: [
      { name: { ka: "ქუთაისი", en: "Kutaisi" }, times: ["1:20 სთ"] },
      { name: { ka: "თბილისი", en: "Tbilisi" }, times: ["3:30 სთ"] },
      { name: { ka: "ბათუმი", en: "Batumi" }, times: ["4:20 სთ"] },
    ],
    descriptionTexts: [
      {
        header: {
          ka: "რაჭა-ლეჩხუმის და ქვემო სვანეთის მუნიციპალიტეტები",
          en: "Municipalities of Racha-Lechkhumi and Lower Svaneti",
        },
        img: "",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთში ოთხი მუნიციპალიტეტია: ამბროლაურის (ქვემო რაჭა), ონის (ზემო რაჭა), ცაგერის (ლეჩხუმი), ლენტეხის (ქვემო სვანეთი). მხარეში არის 3 ქალაქი - ამბროლაური, ონი, ცაგერი, 2 დაბა - ლენტეხი და ხარისთვალა და 251 სოფელი. მხარის ადმინისტრაციული ცენტრია ქალაქი ამბროლაური. 4954 კვ.მ ფართობის მქონე ეს მხარე უნიკალური ისტორიითა და ხუროთმოძღვრული ძეგლებით გამოირჩევა, აქ მრავალფეროვანი ბუნებაა, მწვერვალები, მღვიმეები, მდინარეები, ჩანჩქერები და ტბები.",
          en: "Racha-Lechkhumi-Lower Svaneti comprises four municipalities: Ambrolauri (Lower Racha), Oni (Upper Racha), Tsageri (Lechkhumi), and Lentekhi (Lower Svaneti). The region includes three cities—Ambrolauri, Oni, and Tsageri—two settlements, Lentekhi and Kharistvala, and 251 villages. The administrative center is the city of Ambrolauri. Covering an area of 4,954 sq.km, this region is distinguished by its unique history and architectural monuments, with diverse nature, peaks, caves, rivers, waterfalls, and lakes.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთის ისტორია",
          en: "History of Racha-Lechkhumi-Lower Svaneti",
        },
        img: "/image/khvamli.webp",
        desc: {
          ka: "ბერძნული მითოლოგიით, პრომეთესთან დაკავშირებული ხვამლის მთა, სადაც ღმერთებთან მებრძოლი მითური გმირი იყო მიჯაჭვული, სწორედ ცაგერის ტერიტორიაზე მდებარეობს. რაც შეეხება ისტორიულ წყაროებს, მათი მიხედვით, რაჭა-ლეჩხუმ - ქვემო სვანეთში ადამიანების ცხოვრების პირველი ნიშნები ქვის ხანით თარიღდება. ამ ტერიტორიებზე აღმოჩენილია ბრინჯაოსა და რკინის ხანის ნივთები. სვანეთში აღმოჩენილი ბრინჯაოს ხანის სპილენძის მაღაროები ადასტურებს, რა როლი ითამაშა მხარემ ამ მადნის მოპოვებასა და დამუშავებაში. \n\n  უძველესი სვანები მაღალი ხარისხის ბრინჯაოს იღებდნენ. ამ თვალსაზრისით გამორჩეული იყო მდინარე რიონის ზემო წელი, სადაც ბრინჯაოს წარმოების მსხვილი ცენტრები არსებობდა. სვანეთს უდიდესი როლი აქვს ოქროს წარმოების განვითარებაშიც. ადრეულ საუკუნეებში ეს მხარე კოლხეთის სამეფოს შემადგენლობაში შედიოდა და სავარაუდოდ მითი ოქროს საწმისის შესახებ სვანეთში ოქროს მოპოვების ტრადიციასაც უკავშირდება. \n\n  რაჭა-ლეჩხუმ-ქვემო სვანეთი კარგად იყო დაცული როგორც ბუნებრივი პირობებით, ისე ციხესიმაგრეებით, რის გამოც მას ხშირად აფარებდნენ თავს მტრისაგან დევნილი მეფეები და დიდგვაროვანთა ოჯახები. ცაგერს, ისევე, როგორც სვანეთს, სამეფო განძსაცავსაც უწოდებდნენ.",
          en: "In Greek mythology, the Khvamli Mountain, where the mythical hero Prometheus was chained for defying the gods, is located in the Tsageri area. Historical sources indicate that the first signs of human habitation in Racha-Lechkhumi-Lower Svaneti date back to the Stone Age. Artifacts from the Bronze and Iron Ages have been found here. Copper mines from the Bronze Age discovered in Svaneti confirm the region’s significant role in the extraction and processing of this ore. \n\n Ancient Svans produced high-quality bronze, with the upper reaches of the Rioni River being a major center for bronze production. Svaneti also played a crucial role in the development of gold production. In early centuries, this region was part of the Colchis Kingdom, and the myth of the Golden Fleece is likely linked to the tradition of gold mining in Svaneti. \n\n Racha-Lechkhumi-Lower Svaneti was well-protected by both natural conditions and fortresses, making it a frequent refuge for kings and noble families fleeing enemies. Tsageri, like Svaneti, was often referred to as a royal treasury.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმის ისტორიული ძეგლები",
          en: "Historical Monuments of Racha-Lechkhumi",
        },
        img: "/image/nik.webp",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთშია ქართული ხუროთმოძღვრების შედევრი - ნიკორწმინდის ტაძარი, აქაა: ბარაკონი, ლაბეჭინა, მრავალძალის, გონის მთავარანგელოზის, სხიერის სამონასტრო კომპლექსი, ხოტევისა და მინდას ციხეები, კვარაციხე, ციკლოპური ნაციხარი, გონისა და ცხეთის წმ. გიორგის ეკლესიები, მურისა და ორბელიანის ციხესიმაგრეები, ონის სინაგოგა და ბევრი სხვა.",
          en: "Racha-Lechkhumi-Lower Svaneti is home to a masterpiece of Georgian architecture, the Nikortsminda Cathedral, as well as Barakoni, Labechina, Mravaldzali, Goni Archangel, and Skhieri monastery complexes, Khotevi and Minda fortresses, Kvaratsikhe, Cyclopean Natsikhari, Goni and Tskheti St. George churches, Muri and Orbeliani fortresses, Oni Synagogue, and many others.",
        },
      },
      {
        header: {
          ka: "პრომეთეს მთა, შაორის წყალსაცავი და სხვა",
          en: "Prometheus Mountain, Shaori Reservoir, and More",
        },
        img: "",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთის უნიკალური ბუნება - მაღალი, საშუალო და დაბალი სიმაღლის ქედები, მრავალფეროვანი ტყეები, მღვიმეები, მდინარეები, ჩანჩქერები და ტბები სათავგადასავლო მოგზაურობის მოყვარულებისთვის დაუვიწყარი შთაბეჭდილებების ზადგილია. თუმცა პრომეთესთან დაკავშირებული ხვამლის მთა ბევრ მოგზაურში მისტიკურ განწყობასაც ტოვებს. მითებისა და მისტიკური ისტორიების მოყვარულებს ის ნამდვილად დააინტერესებს. \n\n ხვამლის მთა ლეჩხუმში, ცაგერისა და წყალტუბოს მუნიციპალიტეტების ტერიტორიაზეა. ანტიკური წყაროების მიხედვით, ზევსის ბრძანებით, ხვამლზე, იგივე ხომლზე, მიაჯაჭვეს პრომეთე და მის დასახსნელად ჩამოვიდა აქ ჰერაკლე, ეს მთა იყო ბერძენი არგონავტების მოგზაურობის ადგილიც. ქართული ლეგენდის მიხედვით, ხვამლის მთა უდიდეს საიდუმლოს ინახავს. დაზუსტებით არავინ იცის, განძია საიდუმლოში ნაგულისხმევი თუ რამე სხვა. \n\n  რეგიონის სავიზიტო ბარათია შაორისა და ლაჯანის წყალსაცავები, რომლებიც ულამაზესი სანახავია. შთამბეჭდავია ნიკორწმინდისა და სხვავის კარსტული მღვიმეები, სიყვარულის, რაჩხისა და ჩქუმის ჩანჩქერები, ქულბაქის, უძირო და სასვანო ტბები. \n\n  დაუვიწყარია ლაშქრობა ბუბისა და კირტიშოს მყინვარებსა თუ ჭიორისა და ხიხათის მთებზე. გამორჩეული სანახავია საირმის სვეტები და ასხივის მასივი.",
          en: "The unique nature of Racha-Lechkhumi-Lower Svaneti—high, medium, and low ridges, diverse forests, caves, rivers, waterfalls, and lakes—is a haven for adventure travelers, offering unforgettable experiences. However, the Khvamli Mountain, associated with Prometheus, also evokes a mystical atmosphere for many travelers. Lovers of myths and mystical stories will find it particularly fascinating. \n\n Khvamli Mountain is located in Lechkhumi, within the Tsageri and Tsqaltubo municipalities. According to ancient sources, by Zeus’s command, Prometheus was chained to Khvamli (or Khomli), and Heracles came here to free him. This mountain was also a destination for the Greek Argonauts. According to a Georgian legend, Khvamli Mountain holds a great secret, though no one knows for certain whether it refers to a treasure or something else. \n\n The region’s calling cards are the Shaori and Lajani reservoirs, which are stunning to behold. The karst caves of Nikortsminda and Skhvava, the Love, Rachkha, and Chkumi waterfalls, and the Kulbaki, Bottomless, and Sasvano lakes are impressive. \n\n Hiking to the Buba and Kirtisho glaciers or the Chiori and Khikha mountains is unforgettable. The Sairme Pillars and the Askhi Massif are also notable sights.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმის კურორტები",
          en: "Resorts of Racha-Lechkhumi",
        },
        img: "/image/res.webp",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთი მთაში დასვენების მოყვარულებისთვის ერთ-ერთი საუკეთესო ადგილია. აქ მრავლადაა სამკურნალო მინერალური წყლები და კლიმატურ-ბალნეოლოგიური კურორტები: შოვი, უწერა, ლაშიჭალა, ბუგეული და ა.შ. აქ მათივე სახელობის სამკურნალო წყლები მოიპოვება.",
          en: "Racha-Lechkhumi-Lower Svaneti is one of the best places for mountain vacation lovers. The region is rich in medicinal mineral waters and climatic-balneo resorts such as Shovi, Utsera, Lashichala, Bugeuli, and others, where these therapeutic waters are sourced.",
        },
      },
      {
        header: {
          ka: "განსაკუთრებული ღვინოები და სამზარეულო",
          en: "Unique Wines and Cuisine",
        },
        img: "",
        desc: {
          ka: "საქართველოში ვაზის 525 ჯიშია გავრცელებული და რაჭა-ლეჩხუმ - ქვემო სვანეთში მრავალ მათგანს ახარებენ. „ხვანჭკარა“, „ალექსანდროული“, „ო�ajalეში“, „რაჭული თეთრა“ და სხვა აქაური ღვინოები ღრმა, საინტერესო გემოვნებით გამოირჩევა. საქართველოში და უკვე მსოფლიოში პოპულარობით სარგებლობს ქვემო რაჭის ღვინო „ხვანჭკარა“, ლეჩხუმში კი განსაკუთრებულ ყურადღებას იმსახურებს ცოლიკაურის ჯიშის ყურძნისგან დაწურული „ტვიში“. ცალკე უნდა აღინიშნოს ერთ-ერთი ყველაზე ძვირფასი ქართული ღვინო - „უსახელოური“. \n\n რაჭა-ლეჩხუმის ღვინოებთან ერთად, აუცილებლად დასაგემოვნებელია აქაური მდიდარი სამზარეულოს ნიმუშები: ხავიწი, ლორი, ლობიანი, წყალდასხმულა, ჯორმა, მაჭყვინარა და გამორჩეული სვანური კერძები: კუბდარი - ცომში მოთავსებული შესუნელებული ხორცით მომზადებული უგემრიელესი გულსართიანი; ჭვიშტარი – გამომცხვარი სიმინდის ფქვილის და წელვადი ყველის ნაზავი; ასევე თაშმიჯაბი - რომელიც კარტოფილითა და ყველით კეთდება.",
          en: "Georgia is home to 525 grape varieties, many of which are cultivated in Racha-Lechkhumi-Lower Svaneti. Local wines like Khvanchkara, Aleksandrouli, Ojaleshi, and Rachuli Tetra are known for their deep, intriguing flavors. The wine from Lower Racha, 'Khvanchkara,' enjoys popularity in Georgia and worldwide, while in Lechkhumi, the 'Tvishi' wine, made from Tsolikauri grapes, deserves special attention. One of Georgia’s most valuable wines, 'Usakhelouri,' should also be noted. \n\n Alongside Racha-Lechkhumi’s wines, you must taste the region’s rich cuisine, including khavits, lori, lobiani, tskaldaskhmula, jorma, machkvinara, and distinctive Svan dishes: kubdari, a delicious pastry filled with seasoned meat; chvishtari, a baked mix of cornmeal and stretchy cheese; and tashmijabi, made with potatoes and cheese.",
        },
      },
    ],
    range: [
      {
        min: 57,
        max: 23,
      },
    ],
  },
  {
    id: 6,
    region: "Adjara",
    translations: { ka: "აჭარა", en: "Adjara" },
    path: "M303.2 357.6L301.6 357.7L280.1 349.3L274.1 349.6L271.2 349.4L269.1 347.5L267.4 346.4H265.5L261.6 347.5L259.9 346.7L258.2 346.4L256.5 346.6L254.7 347.4L250.4 348.8L241.6 345.4L236.7 347.3L235 348.6L231.2 354.1L226.3 358.3L225.1 359L223.6 358.4L218.7 353.9L217.1 353.4L213.3 353L211.9 352.4L211.4 351.4V350L211.5 348.8L211.3 348.2H210.4L207.3 349.6L203.6 349.9L202 349.6L188.9 344.1L196.9 329.6L200.5 324.7L207.9 319.9L210 314.9L215.7 305.4L216 303.5V302L216.2 300.7L216.9 299.2L218.9 296.4L219.6 295L219.8 293.5V280.2L235.8 281L239 282.9L240.9 284L241.5 287.4L247.5 289.9L249.9 291.5L251.4 292.2L255.1 295.1L256.7 294.9H256.9L260 293.8L266 293.1L269.9 295.1L272.1 296.4L275.7 297.3L277.9 296.9L284.6 295.8L291.2 291.7L294.5 290.7L297.3 291.3L301.9 296.1L303.5 296.9L306.6 297.2L307.1 298.8L308.3 302.3L308.2 308L306.8 310.2L306.5 313.3L307.3 315.7L308.5 317.7L311.7 320.7L314.6 324.1L318.2 329.9L319.4 333.4H319.2L316.7 335.3L315.4 338.1L314.3 344.8L313.1 347.4L310.4 350.2L306.7 355.7L304 357.6H303.2Z",
    src: "/picture/adjara-gnta-m.webp",
    modalSrc: "/picture/adjara-gnta-m.webp",
    alt: "Adjara",
    title: [
      {
        id: 6,
        text: { ka: "აჭარა", en: "Adjara" },
        bla: [
          { ka: "ბათუმი", en: "Batumi" },
          { ka: "ქობულეთი", en: "Kobuleti" },
        ],
      },
    ],
    description: {
      ka: "საქართველოს ამ ულამაზეს მხარეს ქვეყნის სამი საოცარი კუთხე - რაჭა, ლეჩხუმი და ქვემო სვანეთი შეადგენს. რაჭა და ლეჩხუმი კავკასიონის ქედის გასწვრივ, ქვეყნის უკიდურეს ჩრდილო-დასავლეთ ნაწილში მდებარეობს, ქვემო სვანეთი ჩრდილოეთით, კავკასიონის ქედის სამხრეთ კალთებზეა შეფენილი. მდინარეების - რიონის, ცხენისწყლისა და ლაჯანურის ხეობებში განფენილ რეგიონს იმერეთი, სამაჩაბლოში (ე. წ. სამხრეთ ოსეთი) შემავალი ჯავის მუნიციპალიტეტი და სამეგრელო-ზემო სვანეთის მხარე ესაზღვრება.",
      en: "This beautiful region of Georgia consists of three remarkable areas: Racha, Lechkhumi, and Lower Svaneti. Racha and Lechkhumi are located along the Caucasus ridge in the extreme northwest of the country, while Lower Svaneti lies to the north, on the southern slopes of the Caucasus. The region, spread across the valleys of the Rioni, Tskhenistskali, and Lajanuri rivers, borders Imereti, the Java municipality within Samachablo (so-called South Ossetia), and the Samegrelo-Zemo Svaneti region.",
    },
    citiesTimes: [
      { name: { ka: "ქუთაისი", en: "Kutaisi" }, times: ["1:20 სთ"] },
      { name: { ka: "თბილისი", en: "Tbilisi" }, times: ["3:30 სთ"] },
      { name: { ka: "ბათუმი", en: "Batumi" }, times: ["4:20 სთ"] },
    ],
    descriptionTexts: [
      {
        header: {
          ka: "რაჭა-ლეჩხუმის და ქვემო სვანეთის მუნიციპალიტეტები",
          en: "Municipalities of Racha-Lechkhumi and Lower Svaneti",
        },
        img: "",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთში ოთხი მუნიციპალიტეტია: ამბროლაურის (ქვემო რაჭა), ონის (ზემო რაჭა), ცაგერის (ლეჩხუმი), ლენტეხის (ქვემო სვანეთი). მხარეში არის 3 ქალაქი - ამბროლაური, ონი, ცაგერი, 2 დაბა - ლენტეხი და ხარისთვალა და 251 სოფელი. მხარის ადმინისტრაციული ცენტრია ქალაქი ამბროლაური. 4954 კვ.მ ფართობის მქონე ეს მხარე უნიკალური ისტორიითა და ხუროთმოძღვრული ძეგლებით გამოირჩევა, აქ მრავალფეროვანი ბუნებაა, მწვერვალები, მღვიმეები, მდინარეები, ჩანჩქერები და ტბები.",
          en: "Racha-Lechkhumi-Lower Svaneti comprises four municipalities: Ambrolauri (Lower Racha), Oni (Upper Racha), Tsageri (Lechkhumi), and Lentekhi (Lower Svaneti). The region includes three cities—Ambrolauri, Oni, and Tsageri—two settlements, Lentekhi and Kharistvala, and 251 villages. The administrative center is the city of Ambrolauri. Covering an area of 4,954 sq.km, this region is distinguished by its unique history and architectural monuments, with diverse nature, peaks, caves, rivers, waterfalls, and lakes.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთის ისტორია",
          en: "History of Racha-Lechkhumi-Lower Svaneti",
        },
        img: "/image/khvamli.webp",
        desc: {
          ka: "ბერძნული მითოლოგიით, პრომეთესთან დაკავშირებული ხვამლის მთა, სადაც ღმერთებთან მებრძოლი მითური გმირი იყო მიჯაჭვული, სწორედ ცაგერის ტერიტორიაზე მდებარეობს. რაც შეეხება ისტორიულ წყაროებს, მათი მიხედვით, რაჭა-ლეჩხუმ - ქვემო სვანეთში ადამიანების ცხოვრების პირველი ნიშნები ქვის ხანით თარიღდება. ამ ტერიტორიებზე აღმოჩენილია ბრინჯაოსა და რკინის ხანის ნივთები. სვანეთში აღმოჩენილი ბრინჯაოს ხანის სპილენძის მაღაროები ადასტურებს, რა როლი ითამაშა მხარემ ამ მადნის მოპოვებასა და დამუშავებაში. \n\n  უძველესი სვანები მაღალი ხარისხის ბრინჯაოს იღებდნენ. ამ თვალსაზრისით გამორჩეული იყო მდინარე რიონის ზემო წელი, სადაც ბრინჯაოს წარმოების მსხვილი ცენტრები არსებობდა. სვანეთს უდიდესი როლი აქვს ოქროს წარმოების განვითარებაშიც. ადრეულ საუკუნეებში ეს მხარე კოლხეთის სამეფოს შემადგენლობაში შედიოდა და სავარაუდოდ მითი ოქროს საწმისის შესახებ სვანეთში ოქროს მოპოვების ტრადიციასაც უკავშირდება. \n\n  რაჭა-ლეჩხუმ-ქვემო სვანეთი კარგად იყო დაცული როგორც ბუნებრივი პირობებით, ისე ციხესიმაგრეებით, რის გამოც მას ხშირად აფარებდნენ თავს მტრისაგან დევნილი მეფეები და დიდგვაროვანთა ოჯახები. ცაგერს, ისევე, როგორც სვანეთს, სამეფო განძსაცავსაც უწოდებდნენ.",
          en: "In Greek mythology, the Khvamli Mountain, where the mythical hero Prometheus was chained for defying the gods, is located in the Tsageri area. Historical sources indicate that the first signs of human habitation in Racha-Lechkhumi-Lower Svaneti date back to the Stone Age. Artifacts from the Bronze and Iron Ages have been found here. Copper mines from the Bronze Age discovered in Svaneti confirm the region’s significant role in the extraction and processing of this ore. \n\n Ancient Svans produced high-quality bronze, with the upper reaches of the Rioni River being a major center for bronze production. Svaneti also played a crucial role in the development of gold production. In early centuries, this region was part of the Colchis Kingdom, and the myth of the Golden Fleece is likely linked to the tradition of gold mining in Svaneti. \n\n Racha-Lechkhumi-Lower Svaneti was well-protected by both natural conditions and fortresses, making it a frequent refuge for kings and noble families fleeing enemies. Tsageri, like Svaneti, was often referred to as a royal treasury.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმის ისტორიული ძეგლები",
          en: "Historical Monuments of Racha-Lechkhumi",
        },
        img: "/image/nik.webp",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთშია ქართული ხუროთმოძღვრების შედევრი - ნიკორწმინდის ტაძარი, აქაა: ბარაკონი, ლაბეჭინა, მრავალძალის, გონის მთავარანგელოზის, სხიერის სამონასტრო კომპლექსი, ხოტევისა და მინდას ციხეები, კვარაციხე, ციკლოპური ნაციხარი, გონისა და ცხეთის წმ. გიორგის ეკლესიები, მურისა და ორბელიანის ციხესიმაგრეები, ონის სინაგოგა და ბევრი სხვა.",
          en: "Racha-Lechkhumi-Lower Svaneti is home to a masterpiece of Georgian architecture, the Nikortsminda Cathedral, as well as Barakoni, Labechina, Mravaldzali, Goni Archangel, and Skhieri monastery complexes, Khotevi and Minda fortresses, Kvaratsikhe, Cyclopean Natsikhari, Goni and Tskheti St. George churches, Muri and Orbeliani fortresses, Oni Synagogue, and many others.",
        },
      },
      {
        header: {
          ka: "პრომეთეს მთა, შაორის წყალსაცავი და სხვა",
          en: "Prometheus Mountain, Shaori Reservoir, and More",
        },
        img: "",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთის უნიკალური ბუნება - მაღალი, საშუალო და დაბალი სიმაღლის ქედები, მრავალფეროვანი ტყეები, მღვიმეები, მდინარეები, ჩანჩქერები და ტბები სათავგადასავლო მოგზაურობის მოყვარულებისთვის დაუვიწყარი შთაბეჭდილებების ზადგილია. თუმცა პრომეთესთან დაკავშირებული ხვამლის მთა ბევრ მოგზაურში მისტიკურ განწყობასაც ტოვებს. მითებისა და მისტიკური ისტორიების მოყვარულებს ის ნამდვილად დააინტერესებს. \n\n ხვამლის მთა ლეჩხუმში, ცაგერისა და წყალტუბოს მუნიციპალიტეტების ტერიტორიაზეა. ანტიკური წყაროების მიხედვით, ზევსის ბრძანებით, ხვამლზე, იგივე ხომლზე, მიაჯაჭვეს პრომეთე და მის დასახსნელად ჩამოვიდა აქ ჰერაკლე, ეს მთა იყო ბერძენი არგონავტების მოგზაურობის ადგილიც. ქართული ლეგენდის მიხედვით, ხვამლის მთა უდიდეს საიდუმლოს ინახავს. დაზუსტებით არავინ იცის, განძია საიდუმლოში ნაგულისხმევი თუ რამე სხვა. \n\n  რეგიონის სავიზიტო ბარათია შაორისა და ლაჯანის წყალსაცავები, რომლებიც ულამაზესი სანახავია. შთამბეჭდავია ნიკორწმინდისა და სხვავის კარსტული მღვიმეები, სიყვარულის, რაჩხისა და ჩქუმის ჩანჩქერები, ქულბაქის, უძირო და სასვანო ტბები. \n\n  დაუვიწყარია ლაშქრობა ბუბისა და კირტიშოს მყინვარებსა თუ ჭიორისა და ხიხათის მთებზე. გამორჩეული სანახავია საირმის სვეტები და ასხივის მასივი.",
          en: "The unique nature of Racha-Lechkhumi-Lower Svaneti—high, medium, and low ridges, diverse forests, caves, rivers, waterfalls, and lakes—is a haven for adventure travelers, offering unforgettable experiences. However, the Khvamli Mountain, associated with Prometheus, also evokes a mystical atmosphere for many travelers. Lovers of myths and mystical stories will find it particularly fascinating. \n\n Khvamli Mountain is located in Lechkhumi, within the Tsageri and Tsqaltubo municipalities. According to ancient sources, by Zeus’s command, Prometheus was chained to Khvamli (or Khomli), and Heracles came here to free him. This mountain was also a destination for the Greek Argonauts. According to a Georgian legend, Khvamli Mountain holds a great secret, though no one knows for certain whether it refers to a treasure or something else. \n\n The region’s calling cards are the Shaori and Lajani reservoirs, which are stunning to behold. The karst caves of Nikortsminda and Skhvava, the Love, Rachkha, and Chkumi waterfalls, and the Kulbaki, Bottomless, and Sasvano lakes are impressive. \n\n Hiking to the Buba and Kirtisho glaciers or the Chiori and Khikha mountains is unforgettable. The Sairme Pillars and the Askhi Massif are also notable sights.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმის კურორტები",
          en: "Resorts of Racha-Lechkhumi",
        },
        img: "/image/res.webp",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთი მთაში დასვენების მოყვარულებისთვის ერთ-ერთი საუკეთესო ადგილია. აქ მრავლადაა სამკურნალო მინერალური წყლები და კლიმატურ-ბალნეოლოგიური კურორტები: შოვი, უწერა, ლაშიჭალა, ბუგეული და ა.შ. აქ მათივე სახელობის სამკურნალო წყლები მოიპოვება.",
          en: "Racha-Lechkhumi-Lower Svaneti is one of the best places for mountain vacation lovers. The region is rich in medicinal mineral waters and climatic-balneo resorts such as Shovi, Utsera, Lashichala, Bugeuli, and others, where these therapeutic waters are sourced.",
        },
      },
      {
        header: {
          ka: "განსაკუთრებული ღვინოები და სამზარეულო",
          en: "Unique Wines and Cuisine",
        },
        img: "",
        desc: {
          ka: "საქართველოში ვაზის 525 ჯიშია გავრცელებული და რაჭა-ლეჩხუმ - ქვემო სვანეთში მრავალ მათგანს ახარებენ. „ხვანჭკარა“, „ალექსანდროული“, „ო�ajalეში“, „რაჭული თეთრა“ და სხვა აქაური ღვინოები ღრმა, საინტერესო გემოვნებით გამოირჩევა. საქართველოში და უკვე მსოფლიოში პოპულარობით სარგებლობს ქვემო რაჭის ღვინო „ხვანჭკარა“, ლეჩხუმში კი განსაკუთრებულ ყურადღებას იმსახურებს ცოლიკაურის ჯიშის ყურძნისგან დაწურული „ტვიში“. ცალკე უნდა აღინიშნოს ერთ-ერთი ყველაზე ძვირფასი ქართული ღვინო - „უსახელოური“. \n\n რაჭა-ლეჩხუმის ღვინოებთან ერთად, აუცილებლად დასაგემოვნებელია აქაური მდიდარი სამზარეულოს ნიმუშები: ხავიწი, ლორი, ლობიანი, წყალდასხმულა, ჯორმა, მაჭყვინარა და გამორჩეული სვანური კერძები: კუბდარი - ცომში მოთავსებული შესუნელებული ხორცით მომზადებული უგემრიელესი გულსართიანი; ჭვიშტარი – გამომცხვარი სიმინდის ფქვილის და წელვადი ყველის ნაზავი; ასევე თაშმიჯაბი - რომელიც კარტოფილითა და ყველით კეთდება.",
          en: "Georgia is home to 525 grape varieties, many of which are cultivated in Racha-Lechkhumi-Lower Svaneti. Local wines like Khvanchkara, Aleksandrouli, Ojaleshi, and Rachuli Tetra are known for their deep, intriguing flavors. The wine from Lower Racha, 'Khvanchkara,' enjoys popularity in Georgia and worldwide, while in Lechkhumi, the 'Tvishi' wine, made from Tsolikauri grapes, deserves special attention. One of Georgia’s most valuable wines, 'Usakhelouri,' should also be noted. \n\n Alongside Racha-Lechkhumi’s wines, you must taste the region’s rich cuisine, including khavits, lori, lobiani, tskaldaskhmula, jorma, machkvinara, and distinctive Svan dishes: kubdari, a delicious pastry filled with seasoned meat; chvishtari, a baked mix of cornmeal and stretchy cheese; and tashmijabi, made with potatoes and cheese.",
        },
      },
    ],
    range: [
      {
        min: 57,
        max: 23,
      },
    ],
  },
  {
    id: 7,
    region: "Samtskhe-Javakheti",
    translations: { ka: "სამცხე-ჯავახეთი", en: "Samtskhe-Javakheti" },
    path: "M424.4 410.6L425.8 406.4L424 402.6L420.7 399.5L417.4 397.5L413.5 396.4L409.9 396.7L398.6 399.9L396.8 398.6L393.9 391.4L391.4 388.6L389 388.3L386.3 388.6L383 387.5L389.6 384.1L391.4 382.5L393 380.1L392.8 379.3L389.2 378.8L385.4 377L379.5 371.8L370.5 365.6L368.7 363.6L365 356.7L364 355.6L362.9 355.2L362.3 354.6L361.8 353.9L361.1 353.2L357.5 352L356.6 351.4L355.6 349.6L354.9 347.6L354 346.5L352.4 347.6L349.4 351.1L347.1 350.3L344.8 347.7L341.7 345.8L342.7 344.2L345.1 342.2L346.1 341L346.6 339.5L346.8 337.9L347.2 336.2L348.1 334.7L345.8 333.6L328.6 332.1L322.4 332.6L320 333.4L319.5 333.6L318.3 330.2L314.7 324.4L311.8 321.1L308.6 318.1L307.4 316.1L306.6 313.8L306.9 310.7L308.3 308.6L308.4 302.9L307.2 299.4L306.6 297.8L312.7 297.1L315.5 298.1L318.3 298.6L320.3 296.9L321.4 294L324.2 292.1L327.4 292L335 296.5L348 293.2L358.5 295.5L364 295.6L369.2 293.4L381.8 292.3L383.9 293.1L385.9 293.4L422.5 278.4L425.9 278.2L433.9 280.1L438.2 282.1L439.4 284.4L440 287.1L441.7 288.5L442.9 290.4L447 294L450.8 294.6L452.6 299L456.6 300.5L460.8 302.9L465.4 302.2L473.7 302L478.9 308.3L472.9 314.7L465.6 315L460.2 314.1L457.4 319.2L456.5 335.6L455.2 339.6L453.5 341L452.7 343.6L457 344.4L462.4 344.2L468.3 342.7L474.1 343L477.3 346.4L479.5 351.1L480.6 352.1L481.1 354.4L481.5 357.9V361.5L482.4 365.3L485 366.9L486.3 370L486.8 373.5L485 380.7L485.9 387.9L487.5 390.3L488.8 392.9L490.1 401.3L487.4 401.9L476.1 402.1L470.8 404.3L465.1 409.3L462.7 410.3L459.7 410.5L439.7 407.7L434.5 407.9L427.9 410.6L426.7 410.9H425.5L424.4 410.6Z",
    src: "/modal/samtskhe-javakheti.webp",
    modalSrc: "/picture/samtskhe-javakheti-gnta.webp",
    alt: "Samtskhe-Javakheti",
    title: [
      {
        id: 7,
        text: { ka: "სამცხე-ჯავახეთი", en: "Samtskhe-Javakheti" },
        bla: [
          { ka: "ახალციხე", en: "Akhaltsikhe" },
          { ka: "ბორჯომი", en: "Borjomi" },
        ],
      },
    ],
    description: {
      ka: "საქართველოს ამ ულამაზეს მხარეს ქვეყნის სამი საოცარი კუთხე - რაჭა, ლეჩხუმი და ქვემო სვანეთი შეადგენს. რაჭა და ლეჩხუმი კავკასიონის ქედის გასწვრივ, ქვეყნის უკიდურეს ჩრდილო-დასავლეთ ნაწილში მდებარეობს, ქვემო სვანეთი ჩრდილოეთით, კავკასიონის ქედის სამხრეთ კალთებზეა შეფენილი. მდინარეების - რიონის, ცხენისწყლისა და ლაჯანურის ხეობებში განფენილ რეგიონს იმერეთი, სამაჩაბლოში (ე. წ. სამხრეთ ოსეთი) შემავალი ჯავის მუნიციპალიტეტი და სამეგრელო-ზემო სვანეთის მხარე ესაზღვრება.",
      en: "This beautiful region of Georgia consists of three remarkable areas: Racha, Lechkhumi, and Lower Svaneti. Racha and Lechkhumi are located along the Caucasus ridge in the extreme northwest of the country, while Lower Svaneti lies to the north, on the southern slopes of the Caucasus. The region, spread across the valleys of the Rioni, Tskhenistskali, and Lajanuri rivers, borders Imereti, the Java municipality within Samachablo (so-called South Ossetia), and the Samegrelo-Zemo Svaneti region.",
    },
    citiesTimes: [
      { name: { ka: "ქუთაისი", en: "Kutaisi" }, times: ["1:20 სთ"] },
      { name: { ka: "თბილისი", en: "Tbilisi" }, times: ["3:30 სთ"] },
      { name: { ka: "ბათუმი", en: "Batumi" }, times: ["4:20 სთ"] },
    ],
    descriptionTexts: [
      {
        header: {
          ka: "რაჭა-ლეჩხუმის და ქვემო სვანეთის მუნიციპალიტეტები",
          en: "Municipalities of Racha-Lechkhumi and Lower Svaneti",
        },
        img: "",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთში ოთხი მუნიციპალიტეტია: ამბროლაურის (ქვემო რაჭა), ონის (ზემო რაჭა), ცაგერის (ლეჩხუმი), ლენტეხის (ქვემო სვანეთი). მხარეში არის 3 ქალაქი - ამბროლაური, ონი, ცაგერი, 2 დაბა - ლენტეხი და ხარისთვალა და 251 სოფელი. მხარის ადმინისტრაციული ცენტრია ქალაქი ამბროლაური. 4954 კვ.მ ფართობის მქონე ეს მხარე უნიკალური ისტორიითა და ხუროთმოძღვრული ძეგლებით გამოირჩევა, აქ მრავალფეროვანი ბუნებაა, მწვერვალები, მღვიმეები, მდინარეები, ჩანჩქერები და ტბები.",
          en: "Racha-Lechkhumi-Lower Svaneti comprises four municipalities: Ambrolauri (Lower Racha), Oni (Upper Racha), Tsageri (Lechkhumi), and Lentekhi (Lower Svaneti). The region includes three cities—Ambrolauri, Oni, and Tsageri—two settlements, Lentekhi and Kharistvala, and 251 villages. The administrative center is the city of Ambrolauri. Covering an area of 4,954 sq.km, this region is distinguished by its unique history and architectural monuments, with diverse nature, peaks, caves, rivers, waterfalls, and lakes.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთის ისტორია",
          en: "History of Racha-Lechkhumi-Lower Svaneti",
        },
        img: "/image/khvamli.webp",
        desc: {
          ka: "ბერძნული მითოლოგიით, პრომეთესთან დაკავშირებული ხვამლის მთა, სადაც ღმერთებთან მებრძოლი მითური გმირი იყო მიჯაჭვული, სწორედ ცაგერის ტერიტორიაზე მდებარეობს. რაც შეეხება ისტორიულ წყაროებს, მათი მიხედვით, რაჭა-ლეჩხუმ - ქვემო სვანეთში ადამიანების ცხოვრების პირველი ნიშნები ქვის ხანით თარიღდება. ამ ტერიტორიებზე აღმოჩენილია ბრინჯაოსა და რკინის ხანის ნივთები. სვანეთში აღმოჩენილი ბრინჯაოს ხანის სპილენძის მაღაროები ადასტურებს, რა როლი ითამაშა მხარემ ამ მადნის მოპოვებასა და დამუშავებაში. \n\n  უძველესი სვანები მაღალი ხარისხის ბრინჯაოს იღებდნენ. ამ თვალსაზრისით გამორჩეული იყო მდინარე რიონის ზემო წელი, სადაც ბრინჯაოს წარმოების მსხვილი ცენტრები არსებობდა. სვანეთს უდიდესი როლი აქვს ოქროს წარმოების განვითარებაშიც. ადრეულ საუკუნეებში ეს მხარე კოლხეთის სამეფოს შემადგენლობაში შედიოდა და სავარაუდოდ მითი ოქროს საწმისის შესახებ სვანეთში ოქროს მოპოვების ტრადიციასაც უკავშირდება. \n\n  რაჭა-ლეჩხუმ-ქვემო სვანეთი კარგად იყო დაცული როგორც ბუნებრივი პირობებით, ისე ციხესიმაგრეებით, რის გამოც მას ხშირად აფარებდნენ თავს მტრისაგან დევნილი მეფეები და დიდგვაროვანთა ოჯახები. ცაგერს, ისევე, როგორც სვანეთს, სამეფო განძსაცავსაც უწოდებდნენ.",
          en: "In Greek mythology, the Khvamli Mountain, where the mythical hero Prometheus was chained for defying the gods, is located in the Tsageri area. Historical sources indicate that the first signs of human habitation in Racha-Lechkhumi-Lower Svaneti date back to the Stone Age. Artifacts from the Bronze and Iron Ages have been found here. Copper mines from the Bronze Age discovered in Svaneti confirm the region’s significant role in the extraction and processing of this ore. \n\n Ancient Svans produced high-quality bronze, with the upper reaches of the Rioni River being a major center for bronze production. Svaneti also played a crucial role in the development of gold production. In early centuries, this region was part of the Colchis Kingdom, and the myth of the Golden Fleece is likely linked to the tradition of gold mining in Svaneti. \n\n Racha-Lechkhumi-Lower Svaneti was well-protected by both natural conditions and fortresses, making it a frequent refuge for kings and noble families fleeing enemies. Tsageri, like Svaneti, was often referred to as a royal treasury.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმის ისტორიული ძეგლები",
          en: "Historical Monuments of Racha-Lechkhumi",
        },
        img: "/image/nik.webp",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთშია ქართული ხუროთმოძღვრების შედევრი - ნიკორწმინდის ტაძარი, აქაა: ბარაკონი, ლაბეჭინა, მრავალძალის, გონის მთავარანგელოზის, სხიერის სამონასტრო კომპლექსი, ხოტევისა და მინდას ციხეები, კვარაციხე, ციკლოპური ნაციხარი, გონისა და ცხეთის წმ. გიორგის ეკლესიები, მურისა და ორბელიანის ციხესიმაგრეები, ონის სინაგოგა და ბევრი სხვა.",
          en: "Racha-Lechkhumi-Lower Svaneti is home to a masterpiece of Georgian architecture, the Nikortsminda Cathedral, as well as Barakoni, Labechina, Mravaldzali, Goni Archangel, and Skhieri monastery complexes, Khotevi and Minda fortresses, Kvaratsikhe, Cyclopean Natsikhari, Goni and Tskheti St. George churches, Muri and Orbeliani fortresses, Oni Synagogue, and many others.",
        },
      },
      {
        header: {
          ka: "პრომეთეს მთა, შაორის წყალსაცავი და სხვა",
          en: "Prometheus Mountain, Shaori Reservoir, and More",
        },
        img: "",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთის უნიკალური ბუნება - მაღალი, საშუალო და დაბალი სიმაღლის ქედები, მრავალფეროვანი ტყეები, მღვიმეები, მდინარეები, ჩანჩქერები და ტბები სათავგადასავლო მოგზაურობის მოყვარულებისთვის დაუვიწყარი შთაბეჭდილებების ზადგილია. თუმცა პრომეთესთან დაკავშირებული ხვამლის მთა ბევრ მოგზაურში მისტიკურ განწყობასაც ტოვებს. მითებისა და მისტიკური ისტორიების მოყვარულებს ის ნამდვილად დააინტერესებს. \n\n ხვამლის მთა ლეჩხუმში, ცაგერისა და წყალტუბოს მუნიციპალიტეტების ტერიტორიაზეა. ანტიკური წყაროების მიხედვით, ზევსის ბრძანებით, ხვამლზე, იგივე ხომლზე, მიაჯაჭვეს პრომეთე და მის დასახსნელად ჩამოვიდა აქ ჰერაკლე, ეს მთა იყო ბერძენი არგონავტების მოგზაურობის ადგილიც. ქართული ლეგენდის მიხედვით, ხვამლის მთა უდიდეს საიდუმლოს ინახავს. დაზუსტებით არავინ იცის, განძია საიდუმლოში ნაგულისხმევი თუ რამე სხვა. \n\n  რეგიონის სავიზიტო ბარათია შაორისა და ლაჯანის წყალსაცავები, რომლებიც ულამაზესი სანახავია. შთამბეჭდავია ნიკორწმინდისა და სხვავის კარსტული მღვიმეები, სიყვარულის, რაჩხისა და ჩქუმის ჩანჩქერები, ქულბაქის, უძირო და სასვანო ტბები. \n\n  დაუვიწყარია ლაშქრობა ბუბისა და კირტიშოს მყინვარებსა თუ ჭიორისა და ხიხათის მთებზე. გამორჩეული სანახავია საირმის სვეტები და ასხივის მასივი.",
          en: "The unique nature of Racha-Lechkhumi-Lower Svaneti—high, medium, and low ridges, diverse forests, caves, rivers, waterfalls, and lakes—is a haven for adventure travelers, offering unforgettable experiences. However, the Khvamli Mountain, associated with Prometheus, also evokes a mystical atmosphere for many travelers. Lovers of myths and mystical stories will find it particularly fascinating. \n\n Khvamli Mountain is located in Lechkhumi, within the Tsageri and Tsqaltubo municipalities. According to ancient sources, by Zeus’s command, Prometheus was chained to Khvamli (or Khomli), and Heracles came here to free him. This mountain was also a destination for the Greek Argonauts. According to a Georgian legend, Khvamli Mountain holds a great secret, though no one knows for certain whether it refers to a treasure or something else. \n\n The region’s calling cards are the Shaori and Lajani reservoirs, which are stunning to behold. The karst caves of Nikortsminda and Skhvava, the Love, Rachkha, and Chkumi waterfalls, and the Kulbaki, Bottomless, and Sasvano lakes are impressive. \n\n Hiking to the Buba and Kirtisho glaciers or the Chiori and Khikha mountains is unforgettable. The Sairme Pillars and the Askhi Massif are also notable sights.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმის კურორტები",
          en: "Resorts of Racha-Lechkhumi",
        },
        img: "/image/res.webp",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთი მთაში დასვენების მოყვარულებისთვის ერთ-ერთი საუკეთესო ადგილია. აქ მრავლადაა სამკურნალო მინერალური წყლები და კლიმატურ-ბალნეოლოგიური კურორტები: შოვი, უწერა, ლაშიჭალა, ბუგეული და ა.შ. აქ მათივე სახელობის სამკურნალო წყლები მოიპოვება.",
          en: "Racha-Lechkhumi-Lower Svaneti is one of the best places for mountain vacation lovers. The region is rich in medicinal mineral waters and climatic-balneo resorts such as Shovi, Utsera, Lashichala, Bugeuli, and others, where these therapeutic waters are sourced.",
        },
      },
      {
        header: {
          ka: "განსაკუთრებული ღვინოები და სამზარეულო",
          en: "Unique Wines and Cuisine",
        },
        img: "",
        desc: {
          ka: "საქართველოში ვაზის 525 ჯიშია გავრცელებული და რაჭა-ლეჩხუმ - ქვემო სვანეთში მრავალ მათგანს ახარებენ. „ხვანჭკარა“, „ალექსანდროული“, „ო�ajalეში“, „რაჭული თეთრა“ და სხვა აქაური ღვინოები ღრმა, საინტერესო გემოვნებით გამოირჩევა. საქართველოში და უკვე მსოფლიოში პოპულარობით სარგებლობს ქვემო რაჭის ღვინო „ხვანჭკარა“, ლეჩხუმში კი განსაკუთრებულ ყურადღებას იმსახურებს ცოლიკაურის ჯიშის ყურძნისგან დაწურული „ტვიში“. ცალკე უნდა აღინიშნოს ერთ-ერთი ყველაზე ძვირფასი ქართული ღვინო - „უსახელოური“. \n\n რაჭა-ლეჩხუმის ღვინოებთან ერთად, აუცილებლად დასაგემოვნებელია აქაური მდიდარი სამზარეულოს ნიმუშები: ხავიწი, ლორი, ლობიანი, წყალდასხმულა, ჯორმა, მაჭყვინარა და გამორჩეული სვანური კერძები: კუბდარი - ცომში მოთავსებული შესუნელებული ხორცით მომზადებული უგემრიელესი გულსართიანი; ჭვიშტარი – გამომცხვარი სიმინდის ფქვილის და წელვადი ყველის ნაზავი; ასევე თაშმიჯაბი - რომელიც კარტოფილითა და ყველით კეთდება.",
          en: "Georgia is home to 525 grape varieties, many of which are cultivated in Racha-Lechkhumi-Lower Svaneti. Local wines like Khvanchkara, Aleksandrouli, Ojaleshi, and Rachuli Tetra are known for their deep, intriguing flavors. The wine from Lower Racha, 'Khvanchkara,' enjoys popularity in Georgia and worldwide, while in Lechkhumi, the 'Tvishi' wine, made from Tsolikauri grapes, deserves special attention. One of Georgia’s most valuable wines, 'Usakhelouri,' should also be noted. \n\n Alongside Racha-Lechkhumi’s wines, you must taste the region’s rich cuisine, including khavits, lori, lobiani, tskaldaskhmula, jorma, machkvinara, and distinctive Svan dishes: kubdari, a delicious pastry filled with seasoned meat; chvishtari, a baked mix of cornmeal and stretchy cheese; and tashmijabi, made with potatoes and cheese.",
        },
      },
    ],
    range: [
      {
        min: 57,
        max: 23,
      },
    ],
  },
  {
    id: 8,
    region: "Kvemo Kartli",
    translations: { ka: "ქვემო ქართლი", en: "Kvemo Kartli" },
    path: "M615.8 380.7L614.3 381.7L611.5 384.2L610 385.2L605.3 385.4L593.5 383.5L591.1 385.9L592.1 388.2L596.7 390.4L597.5 391.6L598 392.3L596.8 394L593.6 394.4L575.6 394L570.5 392L568 391.7L565.4 392.9L563.8 395L562.3 397.6L560.5 399.2L558 398.5L557.3 397.3L556.9 395.6L556.3 394.4H554.9L554.1 395L551.6 397.8L548.6 398.7L545.8 398.5L543.1 397.5L536.6 393.5L535.1 393.3L533.6 393.8L532.6 394.7L531.7 395.7L530.6 396.5L527.7 397L525.4 396.1L519.5 392L516.2 390.6H514.9L513.4 391.6L513.1 392.8L513 394.2L512.4 395.8L510.5 397.7L508.1 399L505.5 399.5L500.3 398L497.9 398.3L493 400.5L490.2 401.2L488.9 392.8L487.6 390.2L486 387.8L485.1 380.6L486.9 373.4L486.4 369.9L485.1 366.8L482.5 365.2L481.6 361.4V357.8L481.2 354.3L480.7 352L479.6 351L477.4 346.3L474.2 342.9L468.4 342.6L462.5 344.1L457.1 344.3L452.8 343.5L453.6 340.9L455.4 339.5L456.7 335.5L457.5 319.1L460.3 314L465.7 314.9L473 314.6L479 308.2L507.4 311L511.2 309.8L515.1 309.1L520.9 310.5L526.8 309.4L534.2 305.8L536.4 306.9L538.4 309.3L541.2 310.4L549.7 310.2L551.7 305.9L558.5 306.8L564.2 310.9L570 316.1L576.4 312.8L578.6 313.4L579 315.7L580.7 318L584.3 317.8L594.3 323L597.3 323.2L600.3 323.9L603.8 325.7L608.5 326L613.1 324.5L616.6 319.4L615.4 315.4L613.4 317L611.8 319.3L609 320L606.2 319.3L604.1 318.2L602.2 316.5L601.6 313.6L600.7 310.7L598.4 308.5L598.7 305.7L602.3 302.3L605.2 298.7L606.7 294.1L608.8 291.1L611.4 290.1L617.6 291.6L623.7 291.2L626.9 294.9L629.6 299.4L633.7 302.4L638.4 302.9L640.5 307.3L641.5 312.6L643.9 321.4L639.7 331.1L640.4 335.6L641.3 338.8L643.5 340.3L647.4 340.6L651.2 341.7L653.5 344.9L654.4 349L655.4 350.9L656.2 353L656.6 355.8L654.3 354.6L650.3 354.4L646.4 355.8L627.5 371L615.8 380.7Z",
    src: "/picture/qart.webp",
    modalSrc: "/picture/qart.webp",
    alt: "Kvemo Kartli",
    title: [
      {
        id: 8,
        text: { ka: "ქვემო ქართლი", en: "Kvemo Kartli" },
        bla: [
          { ka: "რუსთავი", en: "Rustavi" },
          { ka: "მარნეული", en: "Marneuli" },
        ],
      },
    ],
    description: {
      ka: "საქართველოს ამ ულამაზეს მხარეს ქვეყნის სამი საოცარი კუთხე - რაჭა, ლეჩხუმი და ქვემო სვანეთი შეადგენს. რაჭა და ლეჩხუმი კავკასიონის ქედის გასწვრივ, ქვეყნის უკიდურეს ჩრდილო-დასავლეთ ნაწილში მდებარეობს, ქვემო სვანეთი ჩრდილოეთით, კავკასიონის ქედის სამხრეთ კალთებზეა შეფენილი. მდინარეების - რიონის, ცხენისწყლისა და ლაჯანურის ხეობებში განფენილ რეგიონს იმერეთი, სამაჩაბლოში (ე. წ. სამხრეთ ოსეთი) შემავალი ჯავის მუნიციპალიტეტი და სამეგრელო-ზემო სვანეთის მხარე ესაზღვრება.",
      en: "This beautiful region of Georgia consists of three remarkable areas: Racha, Lechkhumi, and Lower Svaneti. Racha and Lechkhumi are located along the Caucasus ridge in the extreme northwest of the country, while Lower Svaneti lies to the north, on the southern slopes of the Caucasus. The region, spread across the valleys of the Rioni, Tskhenistskali, and Lajanuri rivers, borders Imereti, the Java municipality within Samachablo (so-called South Ossetia), and the Samegrelo-Zemo Svaneti region.",
    },
    citiesTimes: [
      { name: { ka: "ქუთაისი", en: "Kutaisi" }, times: ["1:20 სთ"] },
      { name: { ka: "თბილისი", en: "Tbilisi" }, times: ["3:30 სთ"] },
      { name: { ka: "ბათუმი", en: "Batumi" }, times: ["4:20 სთ"] },
    ],
    descriptionTexts: [
      {
        header: {
          ka: "რაჭა-ლეჩხუმის და ქვემო სვანეთის მუნიციპალიტეტები",
          en: "Municipalities of Racha-Lechkhumi and Lower Svaneti",
        },
        img: "",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთში ოთხი მუნიციპალიტეტია: ამბროლაურის (ქვემო რაჭა), ონის (ზემო რაჭა), ცაგერის (ლეჩხუმი), ლენტეხის (ქვემო სვანეთი). მხარეში არის 3 ქალაქი - ამბროლაური, ონი, ცაგერი, 2 დაბა - ლენტეხი და ხარისთვალა და 251 სოფელი. მხარის ადმინისტრაციული ცენტრია ქალაქი ამბროლაური. 4954 კვ.მ ფართობის მქონე ეს მხარე უნიკალური ისტორიითა და ხუროთმოძღვრული ძეგლებით გამოირჩევა, აქ მრავალფეროვანი ბუნებაა, მწვერვალები, მღვიმეები, მდინარეები, ჩანჩქერები და ტბები.",
          en: "Racha-Lechkhumi-Lower Svaneti comprises four municipalities: Ambrolauri (Lower Racha), Oni (Upper Racha), Tsageri (Lechkhumi), and Lentekhi (Lower Svaneti). The region includes three cities—Ambrolauri, Oni, and Tsageri—two settlements, Lentekhi and Kharistvala, and 251 villages. The administrative center is the city of Ambrolauri. Covering an area of 4,954 sq.km, this region is distinguished by its unique history and architectural monuments, with diverse nature, peaks, caves, rivers, waterfalls, and lakes.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთის ისტორია",
          en: "History of Racha-Lechkhumi-Lower Svaneti",
        },
        img: "/image/khvamli.webp",
        desc: {
          ka: "ბერძნული მითოლოგიით, პრომეთესთან დაკავშირებული ხვამლის მთა, სადაც ღმერთებთან მებრძოლი მითური გმირი იყო მიჯაჭვული, სწორედ ცაგერის ტერიტორიაზე მდებარეობს. რაც შეეხება ისტორიულ წყაროებს, მათი მიხედვით, რაჭა-ლეჩხუმ - ქვემო სვანეთში ადამიანების ცხოვრების პირველი ნიშნები ქვის ხანით თარიღდება. ამ ტერიტორიებზე აღმოჩენილია ბრინჯაოსა და რკინის ხანის ნივთები. სვანეთში აღმოჩენილი ბრინჯაოს ხანის სპილენძის მაღაროები ადასტურებს, რა როლი ითამაშა მხარემ ამ მადნის მოპოვებასა და დამუშავებაში. \n\n  უძველესი სვანები მაღალი ხარისხის ბრინჯაოს იღებდნენ. ამ თვალსაზრისით გამორჩეული იყო მდინარე რიონის ზემო წელი, სადაც ბრინჯაოს წარმოების მსხვილი ცენტრები არსებობდა. სვანეთს უდიდესი როლი აქვს ოქროს წარმოების განვითარებაშიც. ადრეულ საუკუნეებში ეს მხარე კოლხეთის სამეფოს შემადგენლობაში შედიოდა და სავარაუდოდ მითი ოქროს საწმისის შესახებ სვანეთში ოქროს მოპოვების ტრადიციასაც უკავშირდება. \n\n  რაჭა-ლეჩხუმ-ქვემო სვანეთი კარგად იყო დაცული როგორც ბუნებრივი პირობებით, ისე ციხესიმაგრეებით, რის გამოც მას ხშირად აფარებდნენ თავს მტრისაგან დევნილი მეფეები და დიდგვაროვანთა ოჯახები. ცაგერს, ისევე, როგორც სვანეთს, სამეფო განძსაცავსაც უწოდებდნენ.",
          en: "In Greek mythology, the Khvamli Mountain, where the mythical hero Prometheus was chained for defying the gods, is located in the Tsageri area. Historical sources indicate that the first signs of human habitation in Racha-Lechkhumi-Lower Svaneti date back to the Stone Age. Artifacts from the Bronze and Iron Ages have been found here. Copper mines from the Bronze Age discovered in Svaneti confirm the region’s significant role in the extraction and processing of this ore. \n\n Ancient Svans produced high-quality bronze, with the upper reaches of the Rioni River being a major center for bronze production. Svaneti also played a crucial role in the development of gold production. In early centuries, this region was part of the Colchis Kingdom, and the myth of the Golden Fleece is likely linked to the tradition of gold mining in Svaneti. \n\n Racha-Lechkhumi-Lower Svaneti was well-protected by both natural conditions and fortresses, making it a frequent refuge for kings and noble families fleeing enemies. Tsageri, like Svaneti, was often referred to as a royal treasury.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმის ისტორიული ძეგლები",
          en: "Historical Monuments of Racha-Lechkhumi",
        },
        img: "/image/nik.webp",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთშია ქართული ხუროთმოძღვრების შედევრი - ნიკორწმინდის ტაძარი, აქაა: ბარაკონი, ლაბეჭინა, მრავალძალის, გონის მთავარანგელოზის, სხიერის სამონასტრო კომპლექსი, ხოტევისა და მინდას ციხეები, კვარაციხე, ციკლოპური ნაციხარი, გონისა და ცხეთის წმ. გიორგის ეკლესიები, მურისა და ორბელიანის ციხესიმაგრეები, ონის სინაგოგა და ბევრი სხვა.",
          en: "Racha-Lechkhumi-Lower Svaneti is home to a masterpiece of Georgian architecture, the Nikortsminda Cathedral, as well as Barakoni, Labechina, Mravaldzali, Goni Archangel, and Skhieri monastery complexes, Khotevi and Minda fortresses, Kvaratsikhe, Cyclopean Natsikhari, Goni and Tskheti St. George churches, Muri and Orbeliani fortresses, Oni Synagogue, and many others.",
        },
      },
      {
        header: {
          ka: "პრომეთეს მთა, შაორის წყალსაცავი და სხვა",
          en: "Prometheus Mountain, Shaori Reservoir, and More",
        },
        img: "",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთის უნიკალური ბუნება - მაღალი, საშუალო და დაბალი სიმაღლის ქედები, მრავალფეროვანი ტყეები, მღვიმეები, მდინარეები, ჩანჩქერები და ტბები სათავგადასავლო მოგზაურობის მოყვარულებისთვის დაუვიწყარი შთაბეჭდილებების ზადგილია. თუმცა პრომეთესთან დაკავშირებული ხვამლის მთა ბევრ მოგზაურში მისტიკურ განწყობასაც ტოვებს. მითებისა და მისტიკური ისტორიების მოყვარულებს ის ნამდვილად დააინტერესებს. \n\n ხვამლის მთა ლეჩხუმში, ცაგერისა და წყალტუბოს მუნიციპალიტეტების ტერიტორიაზეა. ანტიკური წყაროების მიხედვით, ზევსის ბრძანებით, ხვამლზე, იგივე ხომლზე, მიაჯაჭვეს პრომეთე და მის დასახსნელად ჩამოვიდა აქ ჰერაკლე, ეს მთა იყო ბერძენი არგონავტების მოგზაურობის ადგილიც. ქართული ლეგენდის მიხედვით, ხვამლის მთა უდიდეს საიდუმლოს ინახავს. დაზუსტებით არავინ იცის, განძია საიდუმლოში ნაგულისხმევი თუ რამე სხვა. \n\n  რეგიონის სავიზიტო ბარათია შაორისა და ლაჯანის წყალსაცავები, რომლებიც ულამაზესი სანახავია. შთამბეჭდავია ნიკორწმინდისა და სხვავის კარსტული მღვიმეები, სიყვარულის, რაჩხისა და ჩქუმის ჩანჩქერები, ქულბაქის, უძირო და სასვანო ტბები. \n\n  დაუვიწყარია ლაშქრობა ბუბისა და კირტიშოს მყინვარებსა თუ ჭიორისა და ხიხათის მთებზე. გამორჩეული სანახავია საირმის სვეტები და ასხივის მასივი.",
          en: "The unique nature of Racha-Lechkhumi-Lower Svaneti—high, medium, and low ridges, diverse forests, caves, rivers, waterfalls, and lakes—is a haven for adventure travelers, offering unforgettable experiences. However, the Khvamli Mountain, associated with Prometheus, also evokes a mystical atmosphere for many travelers. Lovers of myths and mystical stories will find it particularly fascinating. \n\n Khvamli Mountain is located in Lechkhumi, within the Tsageri and Tsqaltubo municipalities. According to ancient sources, by Zeus’s command, Prometheus was chained to Khvamli (or Khomli), and Heracles came here to free him. This mountain was also a destination for the Greek Argonauts. According to a Georgian legend, Khvamli Mountain holds a great secret, though no one knows for certain whether it refers to a treasure or something else. \n\n The region’s calling cards are the Shaori and Lajani reservoirs, which are stunning to behold. The karst caves of Nikortsminda and Skhvava, the Love, Rachkha, and Chkumi waterfalls, and the Kulbaki, Bottomless, and Sasvano lakes are impressive. \n\n Hiking to the Buba and Kirtisho glaciers or the Chiori and Khikha mountains is unforgettable. The Sairme Pillars and the Askhi Massif are also notable sights.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმის კურორტები",
          en: "Resorts of Racha-Lechkhumi",
        },
        img: "/image/res.webp",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთი მთაში დასვენების მოყვარულებისთვის ერთ-ერთი საუკეთესო ადგილია. აქ მრავლადაა სამკურნალო მინერალური წყლები და კლიმატურ-ბალნეოლოგიური კურორტები: შოვი, უწერა, ლაშიჭალა, ბუგეული და ა.შ. აქ მათივე სახელობის სამკურნალო წყლები მოიპოვება.",
          en: "Racha-Lechkhumi-Lower Svaneti is one of the best places for mountain vacation lovers. The region is rich in medicinal mineral waters and climatic-balneo resorts such as Shovi, Utsera, Lashichala, Bugeuli, and others, where these therapeutic waters are sourced.",
        },
      },
      {
        header: {
          ka: "განსაკუთრებული ღვინოები და სამზარეულო",
          en: "Unique Wines and Cuisine",
        },
        img: "",
        desc: {
          ka: "საქართველოში ვაზის 525 ჯიშია გავრცელებული და რაჭა-ლეჩხუმ - ქვემო სვანეთში მრავალ მათგანს ახარებენ. „ხვანჭკარა“, „ალექსანდროული“, „ო�ajalეში“, „რაჭული თეთრა“ და სხვა აქაური ღვინოები ღრმა, საინტერესო გემოვნებით გამოირჩევა. საქართველოში და უკვე მსოფლიოში პოპულარობით სარგებლობს ქვემო რაჭის ღვინო „ხვანჭკარა“, ლეჩხუმში კი განსაკუთრებულ ყურადღებას იმსახურებს ცოლიკაურის ჯიშის ყურძნისგან დაწურული „ტვიში“. ცალკე უნდა აღინიშნოს ერთ-ერთი ყველაზე ძვირფასი ქართული ღვინო - „უსახელოური“. \n\n რაჭა-ლეჩხუმის ღვინოებთან ერთად, აუცილებლად დასაგემოვნებელია აქაური მდიდარი სამზარეულოს ნიმუშები: ხავიწი, ლორი, ლობიანი, წყალდასხმულა, ჯორმა, მაჭყვინარა და გამორჩეული სვანური კერძები: კუბდარი - ცომში მოთავსებული შესუნელებული ხორცით მომზადებული უგემრიელესი გულსართიანი; ჭვიშტარი – გამომცხვარი სიმინდის ფქვილის და წელვადი ყველის ნაზავი; ასევე თაშმიჯაბი - რომელიც კარტოფილითა და ყველით კეთდება.",
          en: "Georgia is home to 525 grape varieties, many of which are cultivated in Racha-Lechkhumi-Lower Svaneti. Local wines like Khvanchkara, Aleksandrouli, Ojaleshi, and Rachuli Tetra are known for their deep, intriguing flavors. The wine from Lower Racha, 'Khvanchkara,' enjoys popularity in Georgia and worldwide, while in Lechkhumi, the 'Tvishi' wine, made from Tsolikauri grapes, deserves special attention. One of Georgia’s most valuable wines, 'Usakhelouri,' should also be noted. \n\n Alongside Racha-Lechkhumi’s wines, you must taste the region’s rich cuisine, including khavits, lori, lobiani, tskaldaskhmula, jorma, machkvinara, and distinctive Svan dishes: kubdari, a delicious pastry filled with seasoned meat; chvishtari, a baked mix of cornmeal and stretchy cheese; and tashmijabi, made with potatoes and cheese.",
        },
      },
    ],
    range: [
      {
        min: 57,
        max: 23,
      },
    ],
  },
  {
    id: 9,
    region: "Shida Kartli",
    translations: { ka: "შიდა ქართლი", en: "Shida Kartli" },
    path: "M559.9 279L555.9 274.2L555 268.3L553.9 264.8L553.4 263.2L549.2 260.8L540.4 258.8L536.2 258.7L532.6 261.4L530.7 263.2L529 264.7L528.4 260.5L525 258.7L524.5 255.9L525.5 252.9L525.6 252.7L525.9 244.2L527.8 236.1L522.3 233.7H518.2L514.1 232.3L512.7 225.4L507.2 228.2L501.7 226.8L496.2 214.4L486.5 221.3L479.6 229.6L468.5 231L463 225.5L460.2 218.6L463.7 213.3L454.3 215.9L448.5 220L446 221.8L445.6 223.8L445 226.7L445.8 232L445.1 236.3L444.5 237L443.7 237.9L441.8 239.5L440.1 244.3L437.9 248.6L433.9 251.6L430.5 255L430 262L428.1 267.9L423.7 271.8L422.8 278.2L426.2 278L434.2 279.9L438.5 281.9L439.6 284.2L440.2 286.9L441.9 288.3L443.1 290.2L447.3 293.8L451.1 294.4L452.9 298.8L456.9 300.3L461.1 302.7L465.7 302L474 301.8L479.2 308.1L507.6 310.9L511.4 309.6L515.3 308.9L521.1 310.3L527 309.3L534.4 305.7L536.6 306.8L538.6 309.2L541.4 310.3L549.9 310.1L551.9 305.8V301.6L554.3 298.8L553.8 292.5L557.2 289.2L561.7 289L563.4 284.3L559.9 279Z",
    src: "/picture/shida-kartli-gnta.webp",
    modalSrc: "/picture/shida-kartli-gnta.webp",
    alt: "Shida Kartli",
    title: [
      {
        id: 9,
        text: { ka: "შიდა ქართლი", en: "Shida Kartli" },
        bla: [
          { ka: "გორი", en: "Gori" },
          { ka: "ქასფი", en: "Kaspi" },
        ],
      },
    ],
    description: {
      ka: "საქართველოს ამ ულამაზეს მხარეს ქვეყნის სამი საოცარი კუთხე - რაჭა, ლეჩხუმი და ქვემო სვანეთი შეადგენს. რაჭა და ლეჩხუმი კავკასიონის ქედის გასწვრივ, ქვეყნის უკიდურეს ჩრდილო-დასავლეთ ნაწილში მდებარეობს, ქვემო სვანეთი ჩრდილოეთით, კავკასიონის ქედის სამხრეთ კალთებზეა შეფენილი. მდინარეების - რიონის, ცხენისწყლისა და ლაჯანურის ხეობებში განფენილ რეგიონს იმერეთი, სამაჩაბლოში (ე. წ. სამხრეთ ოსეთი) შემავალი ჯავის მუნიციპალიტეტი და სამეგრელო-ზემო სვანეთის მხარე ესაზღვრება.",
      en: "This beautiful region of Georgia consists of three remarkable areas: Racha, Lechkhumi, and Lower Svaneti. Racha and Lechkhumi are located along the Caucasus ridge in the extreme northwest of the country, while Lower Svaneti lies to the north, on the southern slopes of the Caucasus. The region, spread across the valleys of the Rioni, Tskhenistskali, and Lajanuri rivers, borders Imereti, the Java municipality within Samachablo (so-called South Ossetia), and the Samegrelo-Zemo Svaneti region.",
    },
    citiesTimes: [
      { name: { ka: "ქუთაისი", en: "Kutaisi" }, times: ["1:20 სთ"] },
      { name: { ka: "თბილისი", en: "Tbilisi" }, times: ["3:30 სთ"] },
      { name: { ka: "ბათუმი", en: "Batumi" }, times: ["4:20 სთ"] },
    ],
    descriptionTexts: [
      {
        header: {
          ka: "რაჭა-ლეჩხუმის და ქვემო სვანეთის მუნიციპალიტეტები",
          en: "Municipalities of Racha-Lechkhumi and Lower Svaneti",
        },
        img: "",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთში ოთხი მუნიციპალიტეტია: ამბროლაურის (ქვემო რაჭა), ონის (ზემო რაჭა), ცაგერის (ლეჩხუმი), ლენტეხის (ქვემო სვანეთი). მხარეში არის 3 ქალაქი - ამბროლაური, ონი, ცაგერი, 2 დაბა - ლენტეხი და ხარისთვალა და 251 სოფელი. მხარის ადმინისტრაციული ცენტრია ქალაქი ამბროლაური. 4954 კვ.მ ფართობის მქონე ეს მხარე უნიკალური ისტორიითა და ხუროთმოძღვრული ძეგლებით გამოირჩევა, აქ მრავალფეროვანი ბუნებაა, მწვერვალები, მღვიმეები, მდინარეები, ჩანჩქერები და ტბები.",
          en: "Racha-Lechkhumi-Lower Svaneti comprises four municipalities: Ambrolauri (Lower Racha), Oni (Upper Racha), Tsageri (Lechkhumi), and Lentekhi (Lower Svaneti). The region includes three cities—Ambrolauri, Oni, and Tsageri—two settlements, Lentekhi and Kharistvala, and 251 villages. The administrative center is the city of Ambrolauri. Covering an area of 4,954 sq.km, this region is distinguished by its unique history and architectural monuments, with diverse nature, peaks, caves, rivers, waterfalls, and lakes.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთის ისტორია",
          en: "History of Racha-Lechkhumi-Lower Svaneti",
        },
        img: "/image/khvamli.webp",
        desc: {
          ka: "ბერძნული მითოლოგიით, პრომეთესთან დაკავშირებული ხვამლის მთა, სადაც ღმერთებთან მებრძოლი მითური გმირი იყო მიჯაჭვული, სწორედ ცაგერის ტერიტორიაზე მდებარეობს. რაც შეეხება ისტორიულ წყაროებს, მათი მიხედვით, რაჭა-ლეჩხუმ - ქვემო სვანეთში ადამიანების ცხოვრების პირველი ნიშნები ქვის ხანით თარიღდება. ამ ტერიტორიებზე აღმოჩენილია ბრინჯაოსა და რკინის ხანის ნივთები. სვანეთში აღმოჩენილი ბრინჯაოს ხანის სპილენძის მაღაროები ადასტურებს, რა როლი ითამაშა მხარემ ამ მადნის მოპოვებასა და დამუშავებაში. \n\n  უძველესი სვანები მაღალი ხარისხის ბრინჯაოს იღებდნენ. ამ თვალსაზრისით გამორჩეული იყო მდინარე რიონის ზემო წელი, სადაც ბრინჯაოს წარმოების მსხვილი ცენტრები არსებობდა. სვანეთს უდიდესი როლი აქვს ოქროს წარმოების განვითარებაშიც. ადრეულ საუკუნეებში ეს მხარე კოლხეთის სამეფოს შემადგენლობაში შედიოდა და სავარაუდოდ მითი ოქროს საწმისის შესახებ სვანეთში ოქროს მოპოვების ტრადიციასაც უკავშირდება. \n\n  რაჭა-ლეჩხუმ-ქვემო სვანეთი კარგად იყო დაცული როგორც ბუნებრივი პირობებით, ისე ციხესიმაგრეებით, რის გამოც მას ხშირად აფარებდნენ თავს მტრისაგან დევნილი მეფეები და დიდგვაროვანთა ოჯახები. ცაგერს, ისევე, როგორც სვანეთს, სამეფო განძსაცავსაც უწოდებდნენ.",
          en: "In Greek mythology, the Khvamli Mountain, where the mythical hero Prometheus was chained for defying the gods, is located in the Tsageri area. Historical sources indicate that the first signs of human habitation in Racha-Lechkhumi-Lower Svaneti date back to the Stone Age. Artifacts from the Bronze and Iron Ages have been found here. Copper mines from the Bronze Age discovered in Svaneti confirm the region’s significant role in the extraction and processing of this ore. \n\n Ancient Svans produced high-quality bronze, with the upper reaches of the Rioni River being a major center for bronze production. Svaneti also played a crucial role in the development of gold production. In early centuries, this region was part of the Colchis Kingdom, and the myth of the Golden Fleece is likely linked to the tradition of gold mining in Svaneti. \n\n Racha-Lechkhumi-Lower Svaneti was well-protected by both natural conditions and fortresses, making it a frequent refuge for kings and noble families fleeing enemies. Tsageri, like Svaneti, was often referred to as a royal treasury.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმის ისტორიული ძეგლები",
          en: "Historical Monuments of Racha-Lechkhumi",
        },
        img: "/image/nik.webp",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთშია ქართული ხუროთმოძღვრების შედევრი - ნიკორწმინდის ტაძარი, აქაა: ბარაკონი, ლაბეჭინა, მრავალძალის, გონის მთავარანგელოზის, სხიერის სამონასტრო კომპლექსი, ხოტევისა და მინდას ციხეები, კვარაციხე, ციკლოპური ნაციხარი, გონისა და ცხეთის წმ. გიორგის ეკლესიები, მურისა და ორბელიანის ციხესიმაგრეები, ონის სინაგოგა და ბევრი სხვა.",
          en: "Racha-Lechkhumi-Lower Svaneti is home to a masterpiece of Georgian architecture, the Nikortsminda Cathedral, as well as Barakoni, Labechina, Mravaldzali, Goni Archangel, and Skhieri monastery complexes, Khotevi and Minda fortresses, Kvaratsikhe, Cyclopean Natsikhari, Goni and Tskheti St. George churches, Muri and Orbeliani fortresses, Oni Synagogue, and many others.",
        },
      },
      {
        header: {
          ka: "პრომეთეს მთა, შაორის წყალსაცავი და სხვა",
          en: "Prometheus Mountain, Shaori Reservoir, and More",
        },
        img: "",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთის უნიკალური ბუნება - მაღალი, საშუალო და დაბალი სიმაღლის ქედები, მრავალფეროვანი ტყეები, მღვიმეები, მდინარეები, ჩანჩქერები და ტბები სათავგადასავლო მოგზაურობის მოყვარულებისთვის დაუვიწყარი შთაბეჭდილებების ზადგილია. თუმცა პრომეთესთან დაკავშირებული ხვამლის მთა ბევრ მოგზაურში მისტიკურ განწყობასაც ტოვებს. მითებისა და მისტიკური ისტორიების მოყვარულებს ის ნამდვილად დააინტერესებს. \n\n ხვამლის მთა ლეჩხუმში, ცაგერისა და წყალტუბოს მუნიციპალიტეტების ტერიტორიაზეა. ანტიკური წყაროების მიხედვით, ზევსის ბრძანებით, ხვამლზე, იგივე ხომლზე, მიაჯაჭვეს პრომეთე და მის დასახსნელად ჩამოვიდა აქ ჰერაკლე, ეს მთა იყო ბერძენი არგონავტების მოგზაურობის ადგილიც. ქართული ლეგენდის მიხედვით, ხვამლის მთა უდიდეს საიდუმლოს ინახავს. დაზუსტებით არავინ იცის, განძია საიდუმლოში ნაგულისხმევი თუ რამე სხვა. \n\n  რეგიონის სავიზიტო ბარათია შაორისა და ლაჯანის წყალსაცავები, რომლებიც ულამაზესი სანახავია. შთამბეჭდავია ნიკორწმინდისა და სხვავის კარსტული მღვიმეები, სიყვარულის, რაჩხისა და ჩქუმის ჩანჩქერები, ქულბაქის, უძირო და სასვანო ტბები. \n\n  დაუვიწყარია ლაშქრობა ბუბისა და კირტიშოს მყინვარებსა თუ ჭიორისა და ხიხათის მთებზე. გამორჩეული სანახავია საირმის სვეტები და ასხივის მასივი.",
          en: "The unique nature of Racha-Lechkhumi-Lower Svaneti—high, medium, and low ridges, diverse forests, caves, rivers, waterfalls, and lakes—is a haven for adventure travelers, offering unforgettable experiences. However, the Khvamli Mountain, associated with Prometheus, also evokes a mystical atmosphere for many travelers. Lovers of myths and mystical stories will find it particularly fascinating. \n\n Khvamli Mountain is located in Lechkhumi, within the Tsageri and Tsqaltubo municipalities. According to ancient sources, by Zeus’s command, Prometheus was chained to Khvamli (or Khomli), and Heracles came here to free him. This mountain was also a destination for the Greek Argonauts. According to a Georgian legend, Khvamli Mountain holds a great secret, though no one knows for certain whether it refers to a treasure or something else. \n\n The region’s calling cards are the Shaori and Lajani reservoirs, which are stunning to behold. The karst caves of Nikortsminda and Skhvava, the Love, Rachkha, and Chkumi waterfalls, and the Kulbaki, Bottomless, and Sasvano lakes are impressive. \n\n Hiking to the Buba and Kirtisho glaciers or the Chiori and Khikha mountains is unforgettable. The Sairme Pillars and the Askhi Massif are also notable sights.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმის კურორტები",
          en: "Resorts of Racha-Lechkhumi",
        },
        img: "/image/res.webp",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთი მთაში დასვენების მოყვარულებისთვის ერთ-ერთი საუკეთესო ადგილია. აქ მრავლადაა სამკურნალო მინერალური წყლები და კლიმატურ-ბალნეოლოგიური კურორტები: შოვი, უწერა, ლაშიჭალა, ბუგეული და ა.შ. აქ მათივე სახელობის სამკურნალო წყლები მოიპოვება.",
          en: "Racha-Lechkhumi-Lower Svaneti is one of the best places for mountain vacation lovers. The region is rich in medicinal mineral waters and climatic-balneo resorts such as Shovi, Utsera, Lashichala, Bugeuli, and others, where these therapeutic waters are sourced.",
        },
      },
      {
        header: {
          ka: "განსაკუთრებული ღვინოები და სამზარეულო",
          en: "Unique Wines and Cuisine",
        },
        img: "",
        desc: {
          ka: "საქართველოში ვაზის 525 ჯიშია გავრცელებული და რაჭა-ლეჩხუმ - ქვემო სვანეთში მრავალ მათგანს ახარებენ. „ხვანჭკარა“, „ალექსანდროული“, „ო�ajalეში“, „რაჭული თეთრა“ და სხვა აქაური ღვინოები ღრმა, საინტერესო გემოვნებით გამოირჩევა. საქართველოში და უკვე მსოფლიოში პოპულარობით სარგებლობს ქვემო რაჭის ღვინო „ხვანჭკარა“, ლეჩხუმში კი განსაკუთრებულ ყურადღებას იმსახურებს ცოლიკაურის ჯიშის ყურძნისგან დაწურული „ტვიში“. ცალკე უნდა აღინიშნოს ერთ-ერთი ყველაზე ძვირფასი ქართული ღვინო - „უსახელოური“. \n\n რაჭა-ლეჩხუმის ღვინოებთან ერთად, აუცილებლად დასაგემოვნებელია აქაური მდიდარი სამზარეულოს ნიმუშები: ხავიწი, ლორი, ლობიანი, წყალდასხმულა, ჯორმა, მაჭყვინარა და გამორჩეული სვანური კერძები: კუბდარი - ცომში მოთავსებული შესუნელებული ხორცით მომზადებული უგემრიელესი გულსართიანი; ჭვიშტარი – გამომცხვარი სიმინდის ფქვილის და წელვადი ყველის ნაზავი; ასევე თაშმიჯაბი - რომელიც კარტოფილითა და ყველით კეთდება.",
          en: "Georgia is home to 525 grape varieties, many of which are cultivated in Racha-Lechkhumi-Lower Svaneti. Local wines like Khvanchkara, Aleksandrouli, Ojaleshi, and Rachuli Tetra are known for their deep, intriguing flavors. The wine from Lower Racha, 'Khvanchkara,' enjoys popularity in Georgia and worldwide, while in Lechkhumi, the 'Tvishi' wine, made from Tsolikauri grapes, deserves special attention. One of Georgia’s most valuable wines, 'Usakhelouri,' should also be noted. \n\n Alongside Racha-Lechkhumi’s wines, you must taste the region’s rich cuisine, including khavits, lori, lobiani, tskaldaskhmula, jorma, machkvinara, and distinctive Svan dishes: kubdari, a delicious pastry filled with seasoned meat; chvishtari, a baked mix of cornmeal and stretchy cheese; and tashmijabi, made with potatoes and cheese.",
        },
      },
    ],
    range: [
      {
        min: 57,
        max: 23,
      },
    ],
  },
  {
    id: 10,
    region: "Samegrelo-Zemo Svaneti",
    translations: {
      ka: "სამეგრელო-ზემო სვანეთი",
      en: "Samegrelo-Zemo Svaneti",
    },
    path: "M292.3 58.5L299.7 59.5L306.6 64.2L309.8 67.4L313.3 70.2L320.8 74.3L323.2 74.8L324.9 74.1L328.2 71L330.3 70L334.1 69.9L339.8 68.1L344.7 68.2L349.4 69.4L352.8 71.7L356.2 75L359.8 77.3L370.2 81.2V83.4L369.3 86.2L369 89L370.1 90.8L376.2 95L389.4 107.4L391.8 108.8L387.8 110.4L383.7 116.3L380.9 118.8L380.6 124L378.4 127.5L375.1 126.9L367.5 124L358.6 125.2L345.3 119.2L343.7 120L342.2 121.3L338.9 122.8L331.7 122.5L314.2 118.2L311.2 116.8H308.1L306.6 119.6L305.3 122.7L303.9 123.7L297.9 124.4L294 126.6L291 132.4L297.7 138.2L311.4 146L316.9 151.7L313.6 158.6L322.9 177.2L320.5 177.3L318.3 177.9L312.1 178.3L308.5 182.1L306.6 187.8L304.7 189.5L303.5 192.1L303.4 196.9L301.8 200.8L293.2 210.7L287.9 219.5L286.5 223.8L284.2 226.6L283 233.5L283.2 242.2L280.7 247.3L275.8 247.9L269.3 244.6L261.5 243.6L255.3 239.5L248.5 237.8L233.3 240.4L225.4 240.7L217.7 242.1L216 246.7L215.5 249.9L214.9 250.7L212.9 254.2L209.2 247.6L207.9 246.5L206.6 245.1L206 242L205.8 236.4L204.8 228.9L198.3 206.1L197.8 205.1L196.9 203.9L193.6 200.6L193.2 199.4L192.8 196.6L193.4 196.3L196.3 194.9L197.7 194.2L202.3 191.3L205.1 187.9L206.8 185.8L212.9 183.8L213.3 183.6L223.9 177.4L233.6 168L233.8 167.8L235.7 165L238.3 162.9L240.5 161.5L241.6 158.5L241.2 155.3L240.7 151.3L237.2 145.4L236.7 141.3L236.9 137L235.4 129.4L234.5 127.9L234.6 126.1L236 124.7L237.5 123.7L239.4 121.1L238.8 117.5L237.8 114.5L237.6 113.9L236.9 110L235.9 106.5L233.7 103.7L235.6 101.2L236.6 100L248.5 97.8L254.9 95L257.2 91.2L260 88L262.4 83.9L264.1 79.2V74.5L263.7 69.7L265.1 65.3L266.8 61.3L267.5 60.9L270.6 59.9L291.3 58.1L292.3 58.5Z",
    src: "/modal/svaneti.webp",
    modalSrc: "/picture/samegrelo.webp",
    alt: "Samegrelo-Zemo Svaneti",
    title: [
      {
        id: 10,
        text: { ka: "სამეგრელო-ზემო სვანეთი", en: "Samegrelo-Zemo Svaneti" },
        bla: [
          { ka: "ზუგდიდი", en: "Zugdidi" },
          { ka: "მესტია", en: "Mestia" },
        ],
      },
    ],
    description: {
      ka: "საქართველოს ამ ულამაზეს მხარეს ქვეყნის სამი საოცარი კუთხე - რაჭა, ლეჩხუმი და ქვემო სვანეთი შეადგენს. რაჭა და ლეჩხუმი კავკასიონის ქედის გასწვრივ, ქვეყნის უკიდურეს ჩრდილო-დასავლეთ ნაწილში მდებარეობს, ქვემო სვანეთი ჩრდილოეთით, კავკასიონის ქედის სამხრეთ კალთებზეა შეფენილი. მდინარეების - რიონის, ცხენისწყლისა და ლაჯანურის ხეობებში განფენილ რეგიონს იმერეთი, სამაჩაბლოში (ე. წ. სამხრეთ ოსეთი) შემავალი ჯავის მუნიციპალიტეტი და სამეგრელო-ზემო სვანეთის მხარე ესაზღვრება.",
      en: "This beautiful region of Georgia consists of three remarkable areas: Racha, Lechkhumi, and Lower Svaneti. Racha and Lechkhumi are located along the Caucasus ridge in the extreme northwest of the country, while Lower Svaneti lies to the north, on the southern slopes of the Caucasus. The region, spread across the valleys of the Rioni, Tskhenistskali, and Lajanuri rivers, borders Imereti, the Java municipality within Samachablo (so-called South Ossetia), and the Samegrelo-Zemo Svaneti region.",
    },
    citiesTimes: [
      { name: { ka: "ქუთაისი", en: "Kutaisi" }, times: ["1:20 სთ"] },
      { name: { ka: "თბილისი", en: "Tbilisi" }, times: ["3:30 სთ"] },
      { name: { ka: "ბათუმი", en: "Batumi" }, times: ["4:20 სთ"] },
    ],
    descriptionTexts: [
      {
        header: {
          ka: "რაჭა-ლეჩხუმის და ქვემო სვანეთის მუნიციპალიტეტები",
          en: "Municipalities of Racha-Lechkhumi and Lower Svaneti",
        },
        img: "",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთში ოთხი მუნიციპალიტეტია: ამბროლაურის (ქვემო რაჭა), ონის (ზემო რაჭა), ცაგერის (ლეჩხუმი), ლენტეხის (ქვემო სვანეთი). მხარეში არის 3 ქალაქი - ამბროლაური, ონი, ცაგერი, 2 დაბა - ლენტეხი და ხარისთვალა და 251 სოფელი. მხარის ადმინისტრაციული ცენტრია ქალაქი ამბროლაური. 4954 კვ.მ ფართობის მქონე ეს მხარე უნიკალური ისტორიითა და ხუროთმოძღვრული ძეგლებით გამოირჩევა, აქ მრავალფეროვანი ბუნებაა, მწვერვალები, მღვიმეები, მდინარეები, ჩანჩქერები და ტბები.",
          en: "Racha-Lechkhumi-Lower Svaneti comprises four municipalities: Ambrolauri (Lower Racha), Oni (Upper Racha), Tsageri (Lechkhumi), and Lentekhi (Lower Svaneti). The region includes three cities—Ambrolauri, Oni, and Tsageri—two settlements, Lentekhi and Kharistvala, and 251 villages. The administrative center is the city of Ambrolauri. Covering an area of 4,954 sq.km, this region is distinguished by its unique history and architectural monuments, with diverse nature, peaks, caves, rivers, waterfalls, and lakes.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთის ისტორია",
          en: "History of Racha-Lechkhumi-Lower Svaneti",
        },
        img: "/image/khvamli.webp",
        desc: {
          ka: "ბერძნული მითოლოგიით, პრომეთესთან დაკავშირებული ხვამლის მთა, სადაც ღმერთებთან მებრძოლი მითური გმირი იყო მიჯაჭვული, სწორედ ცაგერის ტერიტორიაზე მდებარეობს. რაც შეეხება ისტორიულ წყაროებს, მათი მიხედვით, რაჭა-ლეჩხუმ - ქვემო სვანეთში ადამიანების ცხოვრების პირველი ნიშნები ქვის ხანით თარიღდება. ამ ტერიტორიებზე აღმოჩენილია ბრინჯაოსა და რკინის ხანის ნივთები. სვანეთში აღმოჩენილი ბრინჯაოს ხანის სპილენძის მაღაროები ადასტურებს, რა როლი ითამაშა მხარემ ამ მადნის მოპოვებასა და დამუშავებაში. \n\n  უძველესი სვანები მაღალი ხარისხის ბრინჯაოს იღებდნენ. ამ თვალსაზრისით გამორჩეული იყო მდინარე რიონის ზემო წელი, სადაც ბრინჯაოს წარმოების მსხვილი ცენტრები არსებობდა. სვანეთს უდიდესი როლი აქვს ოქროს წარმოების განვითარებაშიც. ადრეულ საუკუნეებში ეს მხარე კოლხეთის სამეფოს შემადგენლობაში შედიოდა და სავარაუდოდ მითი ოქროს საწმისის შესახებ სვანეთში ოქროს მოპოვების ტრადიციასაც უკავშირდება. \n\n  რაჭა-ლეჩხუმ-ქვემო სვანეთი კარგად იყო დაცული როგორც ბუნებრივი პირობებით, ისე ციხესიმაგრეებით, რის გამოც მას ხშირად აფარებდნენ თავს მტრისაგან დევნილი მეფეები და დიდგვაროვანთა ოჯახები. ცაგერს, ისევე, როგორც სვანეთს, სამეფო განძსაცავსაც უწოდებდნენ.",
          en: "In Greek mythology, the Khvamli Mountain, where the mythical hero Prometheus was chained for defying the gods, is located in the Tsageri area. Historical sources indicate that the first signs of human habitation in Racha-Lechkhumi-Lower Svaneti date back to the Stone Age. Artifacts from the Bronze and Iron Ages have been found here. Copper mines from the Bronze Age discovered in Svaneti confirm the region’s significant role in the extraction and processing of this ore. \n\n Ancient Svans produced high-quality bronze, with the upper reaches of the Rioni River being a major center for bronze production. Svaneti also played a crucial role in the development of gold production. In early centuries, this region was part of the Colchis Kingdom, and the myth of the Golden Fleece is likely linked to the tradition of gold mining in Svaneti. \n\n Racha-Lechkhumi-Lower Svaneti was well-protected by both natural conditions and fortresses, making it a frequent refuge for kings and noble families fleeing enemies. Tsageri, like Svaneti, was often referred to as a royal treasury.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმის ისტორიული ძეგლები",
          en: "Historical Monuments of Racha-Lechkhumi",
        },
        img: "/image/nik.webp",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთშია ქართული ხუროთმოძღვრების შედევრი - ნიკორწმინდის ტაძარი, აქაა: ბარაკონი, ლაბეჭინა, მრავალძალის, გონის მთავარანგელოზის, სხიერის სამონასტრო კომპლექსი, ხოტევისა და მინდას ციხეები, კვარაციხე, ციკლოპური ნაციხარი, გონისა და ცხეთის წმ. გიორგის ეკლესიები, მურისა და ორბელიანის ციხესიმაგრეები, ონის სინაგოგა და ბევრი სხვა.",
          en: "Racha-Lechkhumi-Lower Svaneti is home to a masterpiece of Georgian architecture, the Nikortsminda Cathedral, as well as Barakoni, Labechina, Mravaldzali, Goni Archangel, and Skhieri monastery complexes, Khotevi and Minda fortresses, Kvaratsikhe, Cyclopean Natsikhari, Goni and Tskheti St. George churches, Muri and Orbeliani fortresses, Oni Synagogue, and many others.",
        },
      },
      {
        header: {
          ka: "პრომეთეს მთა, შაორის წყალსაცავი და სხვა",
          en: "Prometheus Mountain, Shaori Reservoir, and More",
        },
        img: "",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთის უნიკალური ბუნება - მაღალი, საშუალო და დაბალი სიმაღლის ქედები, მრავალფეროვანი ტყეები, მღვიმეები, მდინარეები, ჩანჩქერები და ტბები სათავგადასავლო მოგზაურობის მოყვარულებისთვის დაუვიწყარი შთაბეჭდილებების ზადგილია. თუმცა პრომეთესთან დაკავშირებული ხვამლის მთა ბევრ მოგზაურში მისტიკურ განწყობასაც ტოვებს. მითებისა და მისტიკური ისტორიების მოყვარულებს ის ნამდვილად დააინტერესებს. \n\n ხვამლის მთა ლეჩხუმში, ცაგერისა და წყალტუბოს მუნიციპალიტეტების ტერიტორიაზეა. ანტიკური წყაროების მიხედვით, ზევსის ბრძანებით, ხვამლზე, იგივე ხომლზე, მიაჯაჭვეს პრომეთე და მის დასახსნელად ჩამოვიდა აქ ჰერაკლე, ეს მთა იყო ბერძენი არგონავტების მოგზაურობის ადგილიც. ქართული ლეგენდის მიხედვით, ხვამლის მთა უდიდეს საიდუმლოს ინახავს. დაზუსტებით არავინ იცის, განძია საიდუმლოში ნაგულისხმევი თუ რამე სხვა. \n\n  რეგიონის სავიზიტო ბარათია შაორისა და ლაჯანის წყალსაცავები, რომლებიც ულამაზესი სანახავია. შთამბეჭდავია ნიკორწმინდისა და სხვავის კარსტული მღვიმეები, სიყვარულის, რაჩხისა და ჩქუმის ჩანჩქერები, ქულბაქის, უძირო და სასვანო ტბები. \n\n  დაუვიწყარია ლაშქრობა ბუბისა და კირტიშოს მყინვარებსა თუ ჭიორისა და ხიხათის მთებზე. გამორჩეული სანახავია საირმის სვეტები და ასხივის მასივი.",
          en: "The unique nature of Racha-Lechkhumi-Lower Svaneti—high, medium, and low ridges, diverse forests, caves, rivers, waterfalls, and lakes—is a haven for adventure travelers, offering unforgettable experiences. However, the Khvamli Mountain, associated with Prometheus, also evokes a mystical atmosphere for many travelers. Lovers of myths and mystical stories will find it particularly fascinating. \n\n Khvamli Mountain is located in Lechkhumi, within the Tsageri and Tsqaltubo municipalities. According to ancient sources, by Zeus’s command, Prometheus was chained to Khvamli (or Khomli), and Heracles came here to free him. This mountain was also a destination for the Greek Argonauts. According to a Georgian legend, Khvamli Mountain holds a great secret, though no one knows for certain whether it refers to a treasure or something else. \n\n The region’s calling cards are the Shaori and Lajani reservoirs, which are stunning to behold. The karst caves of Nikortsminda and Skhvava, the Love, Rachkha, and Chkumi waterfalls, and the Kulbaki, Bottomless, and Sasvano lakes are impressive. \n\n Hiking to the Buba and Kirtisho glaciers or the Chiori and Khikha mountains is unforgettable. The Sairme Pillars and the Askhi Massif are also notable sights.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმის კურორტები",
          en: "Resorts of Racha-Lechkhumi",
        },
        img: "/image/res.webp",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთი მთაში დასვენების მოყვარულებისთვის ერთ-ერთი საუკეთესო ადგილია. აქ მრავლადაა სამკურნალო მინერალური წყლები და კლიმატურ-ბალნეოლოგიური კურორტები: შოვი, უწერა, ლაშიჭალა, ბუგეული და ა.შ. აქ მათივე სახელობის სამკურნალო წყლები მოიპოვება.",
          en: "Racha-Lechkhumi-Lower Svaneti is one of the best places for mountain vacation lovers. The region is rich in medicinal mineral waters and climatic-balneo resorts such as Shovi, Utsera, Lashichala, Bugeuli, and others, where these therapeutic waters are sourced.",
        },
      },
      {
        header: {
          ka: "განსაკუთრებული ღვინოები და სამზარეულო",
          en: "Unique Wines and Cuisine",
        },
        img: "",
        desc: {
          ka: "საქართველოში ვაზის 525 ჯიშია გავრცელებული და რაჭა-ლეჩხუმ - ქვემო სვანეთში მრავალ მათგანს ახარებენ. „ხვანჭკარა“, „ალექსანდროული“, „ო�ajalეში“, „რაჭული თეთრა“ და სხვა აქაური ღვინოები ღრმა, საინტერესო გემოვნებით გამოირჩევა. საქართველოში და უკვე მსოფლიოში პოპულარობით სარგებლობს ქვემო რაჭის ღვინო „ხვანჭკარა“, ლეჩხუმში კი განსაკუთრებულ ყურადღებას იმსახურებს ცოლიკაურის ჯიშის ყურძნისგან დაწურული „ტვიში“. ცალკე უნდა აღინიშნოს ერთ-ერთი ყველაზე ძვირფასი ქართული ღვინო - „უსახელოური“. \n\n რაჭა-ლეჩხუმის ღვინოებთან ერთად, აუცილებლად დასაგემოვნებელია აქაური მდიდარი სამზარეულოს ნიმუშები: ხავიწი, ლორი, ლობიანი, წყალდასხმულა, ჯორმა, მაჭყვინარა და გამორჩეული სვანური კერძები: კუბდარი - ცომში მოთავსებული შესუნელებული ხორცით მომზადებული უგემრიელესი გულსართიანი; ჭვიშტარი – გამომცხვარი სიმინდის ფქვილის და წელვადი ყველის ნაზავი; ასევე თაშმიჯაბი - რომელიც კარტოფილითა და ყველით კეთდება.",
          en: "Georgia is home to 525 grape varieties, many of which are cultivated in Racha-Lechkhumi-Lower Svaneti. Local wines like Khvanchkara, Aleksandrouli, Ojaleshi, and Rachuli Tetra are known for their deep, intriguing flavors. The wine from Lower Racha, 'Khvanchkara,' enjoys popularity in Georgia and worldwide, while in Lechkhumi, the 'Tvishi' wine, made from Tsolikauri grapes, deserves special attention. One of Georgia’s most valuable wines, 'Usakhelouri,' should also be noted. \n\n Alongside Racha-Lechkhumi’s wines, you must taste the region’s rich cuisine, including khavits, lori, lobiani, tskaldaskhmula, jorma, machkvinara, and distinctive Svan dishes: kubdari, a delicious pastry filled with seasoned meat; chvishtari, a baked mix of cornmeal and stretchy cheese; and tashmijabi, made with potatoes and cheese.",
        },
      },
    ],
    range: [
      {
        min: 57,
        max: 23,
      },
    ],
  },
  {
    id: 11,
    region: "Mtskheta-Mtianeti",
    translations: { ka: "მცხეთა-მთიანეთი", en: "Mtskheta-Mtianeti" },
    path: "M571.3 141.4L571.8 141.6L576.3 144.2L578.2 145.8L581.8 149.7L583.3 152L586.3 161.7L587.8 163.3L588.9 162.1L590.9 152.9L594.4 145.2L595.2 142.5L598.3 138.3L603.7 139.4L617.1 149.1L619.3 150.2L621.5 150.7L623.8 150.3L624.9 149.8L628.3 148.3L630.6 148L634.6 149.5L638.1 152.6L650.2 167.3L651.6 169.5L652.6 171.7L648.6 177.6L646.9 185.1L647.3 190.2L645.4 194.3L642.6 196.8L641.4 200.7L643 207.3L641.9 213.7L639.5 214.6L636.9 215L633.7 217.9L630.8 221.8L628.3 230.1L626 233.9L624.2 243.4L622.3 247L623.8 253.4L624.2 258L626.4 263.2L624.5 267.7L625.6 272.8L628.4 273.8L631.3 274.1L637.3 275.7L641.7 281L631.6 282.4L625.2 278L621.6 280.3L618.3 283.9L622.1 286.2L623.7 291.1L617.6 291.5L611.4 290L608.8 291L606.8 294L605.3 298.6L602.4 302.2L594.9 298.3L591.8 298L589.9 301.4L586.4 303.6L582.9 303.5L580.4 309.1L578 310.1L576.5 312.7L570 316.1L564.3 310.7L558.6 306.6L551.8 305.7V301.6L554.2 298.8L553.8 292.5L557.2 289.2L561.7 289L563.4 284.3L560.1 279.1L556.1 274.3L555.2 268.4L554.1 264.9L553.6 263.3L549.4 260.9L540.6 258.9L536.5 258.8L532.9 261.5L531 263.3L529.4 264.8L528.8 260.6L525.4 258.8L524.9 256L525.9 253L526 252.7L526.3 244.2L528.2 236.1L529.7 234.7L531.2 233.6L533.1 229.4L535.6 227.5L537.7 224.6L536.7 219.4L534.6 215L535 209.8L534.7 204.8L533 202.6L531.4 200.9L530.8 198.3L530.6 195.6L529.7 193.9L528.3 193.1L530.2 187.2L534.1 182.3L532.2 179.5L530 177.7L525.9 170.4L520.1 168.8L517.6 165.3L516.1 160.9L515.9 160.3L517.3 159.9L519 158.1L521.3 155.7L523.6 151L526.5 147.6L537.4 147.4L542.4 145.8L551.9 140.7L555.4 139.7L561.6 139.2L566.8 139.9L571.3 141.4Z",
    src: "/modal/mcxeta.webp",
    modalSrc: "/picture/mcxeta.webp",
    alt: "Mtskheta-Mtianeti",
    title: [
      {
        id: 11,
        text: { ka: "მცხეთა-მთიანეთი", en: "Mtskheta-Mtianeti" },
        bla: [
          { ka: "მცხეთა", en: "Mtskheta" },
          { ka: "დუშეთი", en: "Dusheti" },
        ],
      },
    ],
    description: {
      ka: "საქართველოს ამ ულამაზეს მხარეს ქვეყნის სამი საოცარი კუთხე - რაჭა, ლეჩხუმი და ქვემო სვანეთი შეადგენს. რაჭა და ლეჩხუმი კავკასიონის ქედის გასწვრივ, ქვეყნის უკიდურეს ჩრდილო-დასავლეთ ნაწილში მდებარეობს, ქვემო სვანეთი ჩრდილოეთით, კავკასიონის ქედის სამხრეთ კალთებზეა შეფენილი. მდინარეების - რიონის, ცხენისწყლისა და ლაჯანურის ხეობებში განფენილ რეგიონს იმერეთი, სამაჩაბლოში (ე. წ. სამხრეთ ოსეთი) შემავალი ჯავის მუნიციპალიტეტი და სამეგრელო-ზემო სვანეთის მხარე ესაზღვრება.",
      en: "This beautiful region of Georgia consists of three remarkable areas: Racha, Lechkhumi, and Lower Svaneti. Racha and Lechkhumi are located along the Caucasus ridge in the extreme northwest of the country, while Lower Svaneti lies to the north, on the southern slopes of the Caucasus. The region, spread across the valleys of the Rioni, Tskhenistskali, and Lajanuri rivers, borders Imereti, the Java municipality within Samachablo (so-called South Ossetia), and the Samegrelo-Zemo Svaneti region.",
    },
    citiesTimes: [
      { name: { ka: "ქუთაისი", en: "Kutaisi" }, times: ["1:20 სთ"] },
      { name: { ka: "თბილისი", en: "Tbilisi" }, times: ["3:30 სთ"] },
      { name: { ka: "ბათუმი", en: "Batumi" }, times: ["4:20 სთ"] },
    ],
    descriptionTexts: [
      {
        header: {
          ka: "რაჭა-ლეჩხუმის და ქვემო სვანეთის მუნიციპალიტეტები",
          en: "Municipalities of Racha-Lechkhumi and Lower Svaneti",
        },
        img: "",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთში ოთხი მუნიციპალიტეტია: ამბროლაურის (ქვემო რაჭა), ონის (ზემო რაჭა), ცაგერის (ლეჩხუმი), ლენტეხის (ქვემო სვანეთი). მხარეში არის 3 ქალაქი - ამბროლაური, ონი, ცაგერი, 2 დაბა - ლენტეხი და ხარისთვალა და 251 სოფელი. მხარის ადმინისტრაციული ცენტრია ქალაქი ამბროლაური. 4954 კვ.მ ფართობის მქონე ეს მხარე უნიკალური ისტორიითა და ხუროთმოძღვრული ძეგლებით გამოირჩევა, აქ მრავალფეროვანი ბუნებაა, მწვერვალები, მღვიმეები, მდინარეები, ჩანჩქერები და ტბები.",
          en: "Racha-Lechkhumi-Lower Svaneti comprises four municipalities: Ambrolauri (Lower Racha), Oni (Upper Racha), Tsageri (Lechkhumi), and Lentekhi (Lower Svaneti). The region includes three cities—Ambrolauri, Oni, and Tsageri—two settlements, Lentekhi and Kharistvala, and 251 villages. The administrative center is the city of Ambrolauri. Covering an area of 4,954 sq.km, this region is distinguished by its unique history and architectural monuments, with diverse nature, peaks, caves, rivers, waterfalls, and lakes.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთის ისტორია",
          en: "History of Racha-Lechkhumi-Lower Svaneti",
        },
        img: "/image/khvamli.webp",
        desc: {
          ka: "ბერძნული მითოლოგიით, პრომეთესთან დაკავშირებული ხვამლის მთა, სადაც ღმერთებთან მებრძოლი მითური გმირი იყო მიჯაჭვული, სწორედ ცაგერის ტერიტორიაზე მდებარეობს. რაც შეეხება ისტორიულ წყაროებს, მათი მიხედვით, რაჭა-ლეჩხუმ - ქვემო სვანეთში ადამიანების ცხოვრების პირველი ნიშნები ქვის ხანით თარიღდება. ამ ტერიტორიებზე აღმოჩენილია ბრინჯაოსა და რკინის ხანის ნივთები. სვანეთში აღმოჩენილი ბრინჯაოს ხანის სპილენძის მაღაროები ადასტურებს, რა როლი ითამაშა მხარემ ამ მადნის მოპოვებასა და დამუშავებაში. \n\n  უძველესი სვანები მაღალი ხარისხის ბრინჯაოს იღებდნენ. ამ თვალსაზრისით გამორჩეული იყო მდინარე რიონის ზემო წელი, სადაც ბრინჯაოს წარმოების მსხვილი ცენტრები არსებობდა. სვანეთს უდიდესი როლი აქვს ოქროს წარმოების განვითარებაშიც. ადრეულ საუკუნეებში ეს მხარე კოლხეთის სამეფოს შემადგენლობაში შედიოდა და სავარაუდოდ მითი ოქროს საწმისის შესახებ სვანეთში ოქროს მოპოვების ტრადიციასაც უკავშირდება. \n\n  რაჭა-ლეჩხუმ-ქვემო სვანეთი კარგად იყო დაცული როგორც ბუნებრივი პირობებით, ისე ციხესიმაგრეებით, რის გამოც მას ხშირად აფარებდნენ თავს მტრისაგან დევნილი მეფეები და დიდგვაროვანთა ოჯახები. ცაგერს, ისევე, როგორც სვანეთს, სამეფო განძსაცავსაც უწოდებდნენ.",
          en: "In Greek mythology, the Khvamli Mountain, where the mythical hero Prometheus was chained for defying the gods, is located in the Tsageri area. Historical sources indicate that the first signs of human habitation in Racha-Lechkhumi-Lower Svaneti date back to the Stone Age. Artifacts from the Bronze and Iron Ages have been found here. Copper mines from the Bronze Age discovered in Svaneti confirm the region’s significant role in the extraction and processing of this ore. \n\n Ancient Svans produced high-quality bronze, with the upper reaches of the Rioni River being a major center for bronze production. Svaneti also played a crucial role in the development of gold production. In early centuries, this region was part of the Colchis Kingdom, and the myth of the Golden Fleece is likely linked to the tradition of gold mining in Svaneti. \n\n Racha-Lechkhumi-Lower Svaneti was well-protected by both natural conditions and fortresses, making it a frequent refuge for kings and noble families fleeing enemies. Tsageri, like Svaneti, was often referred to as a royal treasury.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმის ისტორიული ძეგლები",
          en: "Historical Monuments of Racha-Lechkhumi",
        },
        img: "/image/nik.webp",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთშია ქართული ხუროთმოძღვრების შედევრი - ნიკორწმინდის ტაძარი, აქაა: ბარაკონი, ლაბეჭინა, მრავალძალის, გონის მთავარანგელოზის, სხიერის სამონასტრო კომპლექსი, ხოტევისა და მინდას ციხეები, კვარაციხე, ციკლოპური ნაციხარი, გონისა და ცხეთის წმ. გიორგის ეკლესიები, მურისა და ორბელიანის ციხესიმაგრეები, ონის სინაგოგა და ბევრი სხვა.",
          en: "Racha-Lechkhumi-Lower Svaneti is home to a masterpiece of Georgian architecture, the Nikortsminda Cathedral, as well as Barakoni, Labechina, Mravaldzali, Goni Archangel, and Skhieri monastery complexes, Khotevi and Minda fortresses, Kvaratsikhe, Cyclopean Natsikhari, Goni and Tskheti St. George churches, Muri and Orbeliani fortresses, Oni Synagogue, and many others.",
        },
      },
      {
        header: {
          ka: "პრომეთეს მთა, შაორის წყალსაცავი და სხვა",
          en: "Prometheus Mountain, Shaori Reservoir, and More",
        },
        img: "",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთის უნიკალური ბუნება - მაღალი, საშუალო და დაბალი სიმაღლის ქედები, მრავალფეროვანი ტყეები, მღვიმეები, მდინარეები, ჩანჩქერები და ტბები სათავგადასავლო მოგზაურობის მოყვარულებისთვის დაუვიწყარი შთაბეჭდილებების ზადგილია. თუმცა პრომეთესთან დაკავშირებული ხვამლის მთა ბევრ მოგზაურში მისტიკურ განწყობასაც ტოვებს. მითებისა და მისტიკური ისტორიების მოყვარულებს ის ნამდვილად დააინტერესებს. \n\n ხვამლის მთა ლეჩხუმში, ცაგერისა და წყალტუბოს მუნიციპალიტეტების ტერიტორიაზეა. ანტიკური წყაროების მიხედვით, ზევსის ბრძანებით, ხვამლზე, იგივე ხომლზე, მიაჯაჭვეს პრომეთე და მის დასახსნელად ჩამოვიდა აქ ჰერაკლე, ეს მთა იყო ბერძენი არგონავტების მოგზაურობის ადგილიც. ქართული ლეგენდის მიხედვით, ხვამლის მთა უდიდეს საიდუმლოს ინახავს. დაზუსტებით არავინ იცის, განძია საიდუმლოში ნაგულისხმევი თუ რამე სხვა. \n\n  რეგიონის სავიზიტო ბარათია შაორისა და ლაჯანის წყალსაცავები, რომლებიც ულამაზესი სანახავია. შთამბეჭდავია ნიკორწმინდისა და სხვავის კარსტული მღვიმეები, სიყვარულის, რაჩხისა და ჩქუმის ჩანჩქერები, ქულბაქის, უძირო და სასვანო ტბები. \n\n  დაუვიწყარია ლაშქრობა ბუბისა და კირტიშოს მყინვარებსა თუ ჭიორისა და ხიხათის მთებზე. გამორჩეული სანახავია საირმის სვეტები და ასხივის მასივი.",
          en: "The unique nature of Racha-Lechkhumi-Lower Svaneti—high, medium, and low ridges, diverse forests, caves, rivers, waterfalls, and lakes—is a haven for adventure travelers, offering unforgettable experiences. However, the Khvamli Mountain, associated with Prometheus, also evokes a mystical atmosphere for many travelers. Lovers of myths and mystical stories will find it particularly fascinating. \n\n Khvamli Mountain is located in Lechkhumi, within the Tsageri and Tsqaltubo municipalities. According to ancient sources, by Zeus’s command, Prometheus was chained to Khvamli (or Khomli), and Heracles came here to free him. This mountain was also a destination for the Greek Argonauts. According to a Georgian legend, Khvamli Mountain holds a great secret, though no one knows for certain whether it refers to a treasure or something else. \n\n The region’s calling cards are the Shaori and Lajani reservoirs, which are stunning to behold. The karst caves of Nikortsminda and Skhvava, the Love, Rachkha, and Chkumi waterfalls, and the Kulbaki, Bottomless, and Sasvano lakes are impressive. \n\n Hiking to the Buba and Kirtisho glaciers or the Chiori and Khikha mountains is unforgettable. The Sairme Pillars and the Askhi Massif are also notable sights.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმის კურორტები",
          en: "Resorts of Racha-Lechkhumi",
        },
        img: "/image/res.webp",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთი მთაში დასვენების მოყვარულებისთვის ერთ-ერთი საუკეთესო ადგილია. აქ მრავლადაა სამკურნალო მინერალური წყლები და კლიმატურ-ბალნეოლოგიური კურორტები: შოვი, უწერა, ლაშიჭალა, ბუგეული და ა.შ. აქ მათივე სახელობის სამკურნალო წყლები მოიპოვება.",
          en: "Racha-Lechkhumi-Lower Svaneti is one of the best places for mountain vacation lovers. The region is rich in medicinal mineral waters and climatic-balneo resorts such as Shovi, Utsera, Lashichala, Bugeuli, and others, where these therapeutic waters are sourced.",
        },
      },
      {
        header: {
          ka: "განსაკუთრებული ღვინოები და სამზარეულო",
          en: "Unique Wines and Cuisine",
        },
        img: "",
        desc: {
          ka: "საქართველოში ვაზის 525 ჯიშია გავრცელებული და რაჭა-ლეჩხუმ - ქვემო სვანეთში მრავალ მათგანს ახარებენ. „ხვანჭკარა“, „ალექსანდროული“, „ო�ajalეში“, „რაჭული თეთრა“ და სხვა აქაური ღვინოები ღრმა, საინტერესო გემოვნებით გამოირჩევა. საქართველოში და უკვე მსოფლიოში პოპულარობით სარგებლობს ქვემო რაჭის ღვინო „ხვანჭკარა“, ლეჩხუმში კი განსაკუთრებულ ყურადღებას იმსახურებს ცოლიკაურის ჯიშის ყურძნისგან დაწურული „ტვიში“. ცალკე უნდა აღინიშნოს ერთ-ერთი ყველაზე ძვირფასი ქართული ღვინო - „უსახელოური“. \n\n რაჭა-ლეჩხუმის ღვინოებთან ერთად, აუცილებლად დასაგემოვნებელია აქაური მდიდარი სამზარეულოს ნიმუშები: ხავიწი, ლორი, ლობიანი, წყალდასხმულა, ჯორმა, მაჭყვინარა და გამორჩეული სვანური კერძები: კუბდარი - ცომში მოთავსებული შესუნელებული ხორცით მომზადებული უგემრიელესი გულსართიანი; ჭვიშტარი – გამომცხვარი სიმინდის ფქვილის და წელვადი ყველის ნაზავი; ასევე თაშმიჯაბი - რომელიც კარტოფილითა და ყველით კეთდება.",
          en: "Georgia is home to 525 grape varieties, many of which are cultivated in Racha-Lechkhumi-Lower Svaneti. Local wines like Khvanchkara, Aleksandrouli, Ojaleshi, and Rachuli Tetra are known for their deep, intriguing flavors. The wine from Lower Racha, 'Khvanchkara,' enjoys popularity in Georgia and worldwide, while in Lechkhumi, the 'Tvishi' wine, made from Tsolikauri grapes, deserves special attention. One of Georgia’s most valuable wines, 'Usakhelouri,' should also be noted. \n\n Alongside Racha-Lechkhumi’s wines, you must taste the region’s rich cuisine, including khavits, lori, lobiani, tskaldaskhmula, jorma, machkvinara, and distinctive Svan dishes: kubdari, a delicious pastry filled with seasoned meat; chvishtari, a baked mix of cornmeal and stretchy cheese; and tashmijabi, made with potatoes and cheese.",
        },
      },
    ],
    range: [
      {
        min: 57,
        max: 23,
      },
    ],
  },
  {
    id: 12,
    region: "Kakheti",
    translations: { ka: "კახეთი", en: "Kakheti" },
    path: "M652.5 171.5L653.9 174.5L655.1 176.4L659.2 178.1L664.4 177.4L674.3 174.4L681.4 174.6L691.7 176.4L701.3 180.2L706.3 186.2V186.3L705.9 190.1L691.8 227.1L693 230.9L696.7 233.3L701.6 235.6L715.1 245.1L723.6 247.3L725.3 249L728.8 257.6L730.1 259.4L731.7 260.3L734 260.4L734.9 260.1L736.5 258.8L737.5 258.5L738.3 258.9L740.3 260.7L741.3 261.2L743.5 261L745.2 260.6L746.4 261.4L747.2 265L750.2 266.4L754 266.5L761.2 265L762.3 264.7L763.3 264.6L764.3 264.7L765.5 265L768.7 267.6L774.1 274L777.6 275.6L784.9 276.2L787.9 277.9L790.9 282L786.3 292L783.7 296.3L778.4 302.8L776.6 304.4L774.7 305.4L772.1 305.6L766.4 304.3L763.7 304.6L761.3 307.1L760.1 312.7V321L761.7 328.4L765 331.2L766.1 330.3L766.7 328.8L767.5 327.6H769.2L769.5 328.5L772.3 333.7L772.5 334.9L773.5 341.3L774.6 344.9L776.7 347.7L783.1 352.2L784.5 352.9L787 353.5L792.8 358.8L804.7 363.9L810.7 367.5L812.6 372.1L814.5 371.3L815.4 371.9L815.5 372L816.3 373.4L818.7 376.1L822.6 382L823.4 384.4L823 384.6L822 384.4L820.9 385.7L820.7 387L820.6 389.9L820.3 391L819.6 392L818 393.5L817.3 394.5L816.1 398.9L815.3 404L814.3 409.2L813.6 410.2L811.9 412.6L809.5 413L807.2 412.4L804.8 412.2L802.2 413.8L800.8 416.4L800.1 419L799 420.7L796.3 420.8L794.1 419.5L790.7 414.9L788.7 413.1L781.4 410.7L778.9 409.2L771.7 402.6L768.1 398.1L766.2 396.2L764 395.4H754.8L752 396L748.9 398L745.7 400.1L743.3 401L740.3 401.3L734.4 400.6L716.2 394L710 390.2L707.6 388.7L702.5 384.3L699.6 379.7L702.4 376.3L705.2 375.3L706.9 374.3L706.7 373.3L703.8 372.2L695.9 370.6L678.3 363.7L674.3 360L672.5 358L670.7 357.7L666.6 358.9L664.1 359.1L662.2 358.7L656.3 355.6L655.9 352.8L655.1 350.7L654.1 348.7L653.2 344.6L650.9 341.4L647.1 340.3L643.2 340L641 338.5L640.1 335.3L639.4 330.9L643.5 321.2L641.1 312.4L640.2 307.1L638 302.7L633.3 302.2L629.3 299.2L626.6 294.7L623.4 291L621.8 286.1L618 283.8L621.3 280.2L624.9 277.9L631.6 282.3L641.4 280.9L637 275.6L631 274.1L628.1 273.8L625.3 272.8L624.2 267.7L626.1 263.2L623.9 258L623.5 253.4L622 247L623.7 243.2L625.6 233.7L627.9 229.8L630.4 221.5L633.4 217.7L636.6 214.8L639.2 214.4L641.6 213.5L642.7 207.1L641.1 200.5L642.3 196.6L645.1 194.1L647 190L646.6 184.9L648.3 177.4L652.3 171.5H652.5Z",
    src: "/picture/kaceti.webp",
    modalSrc: "/picture/kaceti.webp",
    alt: "Kakheti",
    title: [
      {
        id: 12,
        text: { ka: "კახეთი", en: "Kakheti" },
        bla: [
          { ka: "თელავი", en: "Telavi" },
          { ka: "სიღნაღი", en: "Sighnaghi" },
        ],
      },
    ],
    description: {
      ka: "საქართველოს ამ ულამაზეს მხარეს ქვეყნის სამი საოცარი კუთხე - რაჭა, ლეჩხუმი და ქვემო სვანეთი შეადგენს. რაჭა და ლეჩხუმი კავკასიონის ქედის გასწვრივ, ქვეყნის უკიდურეს ჩრდილო-დასავლეთ ნაწილში მდებარეობს, ქვემო სვანეთი ჩრდილოეთით, კავკასიონის ქედის სამხრეთ კალთებზეა შეფენილი. მდინარეების - რიონის, ცხენისწყლისა და ლაჯანურის ხეობებში განფენილ რეგიონს იმერეთი, სამაჩაბლოში (ე. წ. სამხრეთ ოსეთი) შემავალი ჯავის მუნიციპალიტეტი და სამეგრელო-ზემო სვანეთის მხარე ესაზღვრება.",
      en: "This beautiful region of Georgia consists of three remarkable areas: Racha, Lechkhumi, and Lower Svaneti. Racha and Lechkhumi are located along the Caucasus ridge in the extreme northwest of the country, while Lower Svaneti lies to the north, on the southern slopes of the Caucasus. The region, spread across the valleys of the Rioni, Tskhenistskali, and Lajanuri rivers, borders Imereti, the Java municipality within Samachablo (so-called South Ossetia), and the Samegrelo-Zemo Svaneti region.",
    },
    citiesTimes: [
      { name: { ka: "ქუთაისი", en: "Kutaisi" }, times: ["1:20 სთ"] },
      { name: { ka: "თბილისი", en: "Tbilisi" }, times: ["3:30 სთ"] },
      { name: { ka: "ბათუმი", en: "Batumi" }, times: ["4:20 სთ"] },
    ],
    descriptionTexts: [
      {
        header: {
          ka: "რაჭა-ლეჩხუმის და ქვემო სვანეთის მუნიციპალიტეტები",
          en: "Municipalities of Racha-Lechkhumi and Lower Svaneti",
        },
        img: "",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთში ოთხი მუნიციპალიტეტია: ამბროლაურის (ქვემო რაჭა), ონის (ზემო რაჭა), ცაგერის (ლეჩხუმი), ლენტეხის (ქვემო სვანეთი). მხარეში არის 3 ქალაქი - ამბროლაური, ონი, ცაგერი, 2 დაბა - ლენტეხი და ხარისთვალა და 251 სოფელი. მხარის ადმინისტრაციული ცენტრია ქალაქი ამბროლაური. 4954 კვ.მ ფართობის მქონე ეს მხარე უნიკალური ისტორიითა და ხუროთმოძღვრული ძეგლებით გამოირჩევა, აქ მრავალფეროვანი ბუნებაა, მწვერვალები, მღვიმეები, მდინარეები, ჩანჩქერები და ტბები.",
          en: "Racha-Lechkhumi-Lower Svaneti comprises four municipalities: Ambrolauri (Lower Racha), Oni (Upper Racha), Tsageri (Lechkhumi), and Lentekhi (Lower Svaneti). The region includes three cities—Ambrolauri, Oni, and Tsageri—two settlements, Lentekhi and Kharistvala, and 251 villages. The administrative center is the city of Ambrolauri. Covering an area of 4,954 sq.km, this region is distinguished by its unique history and architectural monuments, with diverse nature, peaks, caves, rivers, waterfalls, and lakes.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთის ისტორია",
          en: "History of Racha-Lechkhumi-Lower Svaneti",
        },
        img: "/image/khvamli.webp",
        desc: {
          ka: "ბერძნული მითოლოგიით, პრომეთესთან დაკავშირებული ხვამლის მთა, სადაც ღმერთებთან მებრძოლი მითური გმირი იყო მიჯაჭვული, სწორედ ცაგერის ტერიტორიაზე მდებარეობს. რაც შეეხება ისტორიულ წყაროებს, მათი მიხედვით, რაჭა-ლეჩხუმ - ქვემო სვანეთში ადამიანების ცხოვრების პირველი ნიშნები ქვის ხანით თარიღდება. ამ ტერიტორიებზე აღმოჩენილია ბრინჯაოსა და რკინის ხანის ნივთები. სვანეთში აღმოჩენილი ბრინჯაოს ხანის სპილენძის მაღაროები ადასტურებს, რა როლი ითამაშა მხარემ ამ მადნის მოპოვებასა და დამუშავებაში. \n\n  უძველესი სვანები მაღალი ხარისხის ბრინჯაოს იღებდნენ. ამ თვალსაზრისით გამორჩეული იყო მდინარე რიონის ზემო წელი, სადაც ბრინჯაოს წარმოების მსხვილი ცენტრები არსებობდა. სვანეთს უდიდესი როლი აქვს ოქროს წარმოების განვითარებაშიც. ადრეულ საუკუნეებში ეს მხარე კოლხეთის სამეფოს შემადგენლობაში შედიოდა და სავარაუდოდ მითი ოქროს საწმისის შესახებ სვანეთში ოქროს მოპოვების ტრადიციასაც უკავშირდება. \n\n  რაჭა-ლეჩხუმ-ქვემო სვანეთი კარგად იყო დაცული როგორც ბუნებრივი პირობებით, ისე ციხესიმაგრეებით, რის გამოც მას ხშირად აფარებდნენ თავს მტრისაგან დევნილი მეფეები და დიდგვაროვანთა ოჯახები. ცაგერს, ისევე, როგორც სვანეთს, სამეფო განძსაცავსაც უწოდებდნენ.",
          en: "In Greek mythology, the Khvamli Mountain, where the mythical hero Prometheus was chained for defying the gods, is located in the Tsageri area. Historical sources indicate that the first signs of human habitation in Racha-Lechkhumi-Lower Svaneti date back to the Stone Age. Artifacts from the Bronze and Iron Ages have been found here. Copper mines from the Bronze Age discovered in Svaneti confirm the region’s significant role in the extraction and processing of this ore. \n\n Ancient Svans produced high-quality bronze, with the upper reaches of the Rioni River being a major center for bronze production. Svaneti also played a crucial role in the development of gold production. In early centuries, this region was part of the Colchis Kingdom, and the myth of the Golden Fleece is likely linked to the tradition of gold mining in Svaneti. \n\n Racha-Lechkhumi-Lower Svaneti was well-protected by both natural conditions and fortresses, making it a frequent refuge for kings and noble families fleeing enemies. Tsageri, like Svaneti, was often referred to as a royal treasury.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმის ისტორიული ძეგლები",
          en: "Historical Monuments of Racha-Lechkhumi",
        },
        img: "/image/nik.webp",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთშია ქართული ხუროთმოძღვრების შედევრი - ნიკორწმინდის ტაძარი, აქაა: ბარაკონი, ლაბეჭინა, მრავალძალის, გონის მთავარანგელოზის, სხიერის სამონასტრო კომპლექსი, ხოტევისა და მინდას ციხეები, კვარაციხე, ციკლოპური ნაციხარი, გონისა და ცხეთის წმ. გიორგის ეკლესიები, მურისა და ორბელიანის ციხესიმაგრეები, ონის სინაგოგა და ბევრი სხვა.",
          en: "Racha-Lechkhumi-Lower Svaneti is home to a masterpiece of Georgian architecture, the Nikortsminda Cathedral, as well as Barakoni, Labechina, Mravaldzali, Goni Archangel, and Skhieri monastery complexes, Khotevi and Minda fortresses, Kvaratsikhe, Cyclopean Natsikhari, Goni and Tskheti St. George churches, Muri and Orbeliani fortresses, Oni Synagogue, and many others.",
        },
      },
      {
        header: {
          ka: "პრომეთეს მთა, შაორის წყალსაცავი და სხვა",
          en: "Prometheus Mountain, Shaori Reservoir, and More",
        },
        img: "",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთის უნიკალური ბუნება - მაღალი, საშუალო და დაბალი სიმაღლის ქედები, მრავალფეროვანი ტყეები, მღვიმეები, მდინარეები, ჩანჩქერები და ტბები სათავგადასავლო მოგზაურობის მოყვარულებისთვის დაუვიწყარი შთაბეჭდილებების ზადგილია. თუმცა პრომეთესთან დაკავშირებული ხვამლის მთა ბევრ მოგზაურში მისტიკურ განწყობასაც ტოვებს. მითებისა და მისტიკური ისტორიების მოყვარულებს ის ნამდვილად დააინტერესებს. \n\n ხვამლის მთა ლეჩხუმში, ცაგერისა და წყალტუბოს მუნიციპალიტეტების ტერიტორიაზეა. ანტიკური წყაროების მიხედვით, ზევსის ბრძანებით, ხვამლზე, იგივე ხომლზე, მიაჯაჭვეს პრომეთე და მის დასახსნელად ჩამოვიდა აქ ჰერაკლე, ეს მთა იყო ბერძენი არგონავტების მოგზაურობის ადგილიც. ქართული ლეგენდის მიხედვით, ხვამლის მთა უდიდეს საიდუმლოს ინახავს. დაზუსტებით არავინ იცის, განძია საიდუმლოში ნაგულისხმევი თუ რამე სხვა. \n\n  რეგიონის სავიზიტო ბარათია შაორისა და ლაჯანის წყალსაცავები, რომლებიც ულამაზესი სანახავია. შთამბეჭდავია ნიკორწმინდისა და სხვავის კარსტული მღვიმეები, სიყვარულის, რაჩხისა და ჩქუმის ჩანჩქერები, ქულბაქის, უძირო და სასვანო ტბები. \n\n  დაუვიწყარია ლაშქრობა ბუბისა და კირტიშოს მყინვარებსა თუ ჭიორისა და ხიხათის მთებზე. გამორჩეული სანახავია საირმის სვეტები და ასხივის მასივი.",
          en: "The unique nature of Racha-Lechkhumi-Lower Svaneti—high, medium, and low ridges, diverse forests, caves, rivers, waterfalls, and lakes—is a haven for adventure travelers, offering unforgettable experiences. However, the Khvamli Mountain, associated with Prometheus, also evokes a mystical atmosphere for many travelers. Lovers of myths and mystical stories will find it particularly fascinating. \n\n Khvamli Mountain is located in Lechkhumi, within the Tsageri and Tsqaltubo municipalities. According to ancient sources, by Zeus’s command, Prometheus was chained to Khvamli (or Khomli), and Heracles came here to free him. This mountain was also a destination for the Greek Argonauts. According to a Georgian legend, Khvamli Mountain holds a great secret, though no one knows for certain whether it refers to a treasure or something else. \n\n The region’s calling cards are the Shaori and Lajani reservoirs, which are stunning to behold. The karst caves of Nikortsminda and Skhvava, the Love, Rachkha, and Chkumi waterfalls, and the Kulbaki, Bottomless, and Sasvano lakes are impressive. \n\n Hiking to the Buba and Kirtisho glaciers or the Chiori and Khikha mountains is unforgettable. The Sairme Pillars and the Askhi Massif are also notable sights.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმის კურორტები",
          en: "Resorts of Racha-Lechkhumi",
        },
        img: "/image/res.webp",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთი მთაში დასვენების მოყვარულებისთვის ერთ-ერთი საუკეთესო ადგილია. აქ მრავლადაა სამკურნალო მინერალური წყლები და კლიმატურ-ბალნეოლოგიური კურორტები: შოვი, უწერა, ლაშიჭალა, ბუგეული და ა.შ. აქ მათივე სახელობის სამკურნალო წყლები მოიპოვება.",
          en: "Racha-Lechkhumi-Lower Svaneti is one of the best places for mountain vacation lovers. The region is rich in medicinal mineral waters and climatic-balneo resorts such as Shovi, Utsera, Lashichala, Bugeuli, and others, where these therapeutic waters are sourced.",
        },
      },
      {
        header: {
          ka: "განსაკუთრებული ღვინოები და სამზარეულო",
          en: "Unique Wines and Cuisine",
        },
        img: "",
        desc: {
          ka: "საქართველოში ვაზის 525 ჯიშია გავრცელებული და რაჭა-ლეჩხუმ - ქვემო სვანეთში მრავალ მათგანს ახარებენ. „ხვანჭკარა“, „ალექსანდროული“, „ო�ajalეში“, „რაჭული თეთრა“ და სხვა აქაური ღვინოები ღრმა, საინტერესო გემოვნებით გამოირჩევა. საქართველოში და უკვე მსოფლიოში პოპულარობით სარგებლობს ქვემო რაჭის ღვინო „ხვანჭკარა“, ლეჩხუმში კი განსაკუთრებულ ყურადღებას იმსახურებს ცოლიკაურის ჯიშის ყურძნისგან დაწურული „ტვიში“. ცალკე უნდა აღინიშნოს ერთ-ერთი ყველაზე ძვირფასი ქართული ღვინო - „უსახელოური“. \n\n რაჭა-ლეჩხუმის ღვინოებთან ერთად, აუცილებლად დასაგემოვნებელია აქაური მდიდარი სამზარეულოს ნიმუშები: ხავიწი, ლორი, ლობიანი, წყალდასხმულა, ჯორმა, მაჭყვინარა და გამორჩეული სვანური კერძები: კუბდარი - ცომში მოთავსებული შესუნელებული ხორცით მომზადებული უგემრიელესი გულსართიანი; ჭვიშტარი – გამომცხვარი სიმინდის ფქვილის და წელვადი ყველის ნაზავი; ასევე თაშმიჯაბი - რომელიც კარტოფილითა და ყველით კეთდება.",
          en: "Georgia is home to 525 grape varieties, many of which are cultivated in Racha-Lechkhumi-Lower Svaneti. Local wines like Khvanchkara, Aleksandrouli, Ojaleshi, and Rachuli Tetra are known for their deep, intriguing flavors. The wine from Lower Racha, 'Khvanchkara,' enjoys popularity in Georgia and worldwide, while in Lechkhumi, the 'Tvishi' wine, made from Tsolikauri grapes, deserves special attention. One of Georgia’s most valuable wines, 'Usakhelouri,' should also be noted. \n\n Alongside Racha-Lechkhumi’s wines, you must taste the region’s rich cuisine, including khavits, lori, lobiani, tskaldaskhmula, jorma, machkvinara, and distinctive Svan dishes: kubdari, a delicious pastry filled with seasoned meat; chvishtari, a baked mix of cornmeal and stretchy cheese; and tashmijabi, made with potatoes and cheese.",
        },
      },
    ],
    range: [
      {
        min: 57,
        max: 23,
      },
    ],
  },
  {
    id: 13,
    region: "Tbilisi",
    translations: { ka: "თბილისი", en: "Tbilisi" },
    path: "M576.4 312.7L577.9 310.1L580.3 309.1L582.8 303.5L586.3 303.6L589.8 301.4L591.7 298L594.8 298.3L602.3 302.2L598.7 305.6L598.4 308.4L600.7 310.6L601.6 313.5L602.2 316.4L604.1 318.1L606.2 319.2L609 319.9L611.8 319.2L613.4 316.9L615.4 315.4L616.6 319.4L613.1 324.5L608.5 326L603.8 325.7L600.3 323.9L597.3 323.2L594.3 323L584.3 317.8L580.7 318L579.1 315.8L578.7 313.5L576.4 312.7Z",
    src: "/picture/tbil.webp",
    modalSrc: "/picture/tbil.webp",
    alt: "Tbilisi",
    title: [
      {
        id: 13,
        text: { ka: "თბილისი", en: "Tbilisi" },
        bla: [
          { ka: "ძველი თბილისი", en: "Old Tbilisi" },
          { ka: "რუსთაველის გამზირი", en: "Rustaveli Avenue" },
        ],
      },
    ],
    description: {
      ka: "საქართველოს ამ ულამაზეს მხარეს ქვეყნის სამი საოცარი კუთხე - რაჭა, ლეჩხუმი და ქვემო სვანეთი შეადგენს. რაჭა და ლეჩხუმი კავკასიონის ქედის გასწვრივ, ქვეყნის უკიდურეს ჩრდილო-დასავლეთ ნაწილში მდებარეობს, ქვემო სვანეთი ჩრდილოეთით, კავკასიონის ქედის სამხრეთ კალთებზეა შეფენილი. მდინარეების - რიონის, ცხენისწყლისა და ლაჯანურის ხეობებში განფენილ რეგიონს იმერეთი, სამაჩაბლოში (ე. წ. სამხრეთ ოსეთი) შემავალი ჯავის მუნიციპალიტეტი და სამეგრელო-ზემო სვანეთის მხარე ესაზღვრება.",
      en: "This beautiful region of Georgia consists of three remarkable areas: Racha, Lechkhumi, and Lower Svaneti. Racha and Lechkhumi are located along the Caucasus ridge in the extreme northwest of the country, while Lower Svaneti lies to the north, on the southern slopes of the Caucasus. The region, spread across the valleys of the Rioni, Tskhenistskali, and Lajanuri rivers, borders Imereti, the Java municipality within Samachablo (so-called South Ossetia), and the Samegrelo-Zemo Svaneti region.",
    },
    citiesTimes: [
      { name: { ka: "ქუთაისი", en: "Kutaisi" }, times: ["1:20 სთ"] },
      { name: { ka: "თბილისი", en: "Tbilisi" }, times: ["3:30 სთ"] },
      { name: { ka: "ბათუმი", en: "Batumi" }, times: ["4:20 სთ"] },
    ],
    descriptionTexts: [
      {
        header: {
          ka: "რაჭა-ლეჩხუმის და ქვემო სვანეთის მუნიციპალიტეტები",
          en: "Municipalities of Racha-Lechkhumi and Lower Svaneti",
        },
        img: "",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთში ოთხი მუნიციპალიტეტია: ამბროლაურის (ქვემო რაჭა), ონის (ზემო რაჭა), ცაგერის (ლეჩხუმი), ლენტეხის (ქვემო სვანეთი). მხარეში არის 3 ქალაქი - ამბროლაური, ონი, ცაგერი, 2 დაბა - ლენტეხი და ხარისთვალა და 251 სოფელი. მხარის ადმინისტრაციული ცენტრია ქალაქი ამბროლაური. 4954 კვ.მ ფართობის მქონე ეს მხარე უნიკალური ისტორიითა და ხუროთმოძღვრული ძეგლებით გამოირჩევა, აქ მრავალფეროვანი ბუნებაა, მწვერვალები, მღვიმეები, მდინარეები, ჩანჩქერები და ტბები.",
          en: "Racha-Lechkhumi-Lower Svaneti comprises four municipalities: Ambrolauri (Lower Racha), Oni (Upper Racha), Tsageri (Lechkhumi), and Lentekhi (Lower Svaneti). The region includes three cities—Ambrolauri, Oni, and Tsageri—two settlements, Lentekhi and Kharistvala, and 251 villages. The administrative center is the city of Ambrolauri. Covering an area of 4,954 sq.km, this region is distinguished by its unique history and architectural monuments, with diverse nature, peaks, caves, rivers, waterfalls, and lakes.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთის ისტორია",
          en: "History of Racha-Lechkhumi-Lower Svaneti",
        },
        img: "/image/khvamli.webp",
        desc: {
          ka: "ბერძნული მითოლოგიით, პრომეთესთან დაკავშირებული ხვამლის მთა, სადაც ღმერთებთან მებრძოლი მითური გმირი იყო მიჯაჭვული, სწორედ ცაგერის ტერიტორიაზე მდებარეობს. რაც შეეხება ისტორიულ წყაროებს, მათი მიხედვით, რაჭა-ლეჩხუმ - ქვემო სვანეთში ადამიანების ცხოვრების პირველი ნიშნები ქვის ხანით თარიღდება. ამ ტერიტორიებზე აღმოჩენილია ბრინჯაოსა და რკინის ხანის ნივთები. სვანეთში აღმოჩენილი ბრინჯაოს ხანის სპილენძის მაღაროები ადასტურებს, რა როლი ითამაშა მხარემ ამ მადნის მოპოვებასა და დამუშავებაში. \n\n  უძველესი სვანები მაღალი ხარისხის ბრინჯაოს იღებდნენ. ამ თვალსაზრისით გამორჩეული იყო მდინარე რიონის ზემო წელი, სადაც ბრინჯაოს წარმოების მსხვილი ცენტრები არსებობდა. სვანეთს უდიდესი როლი აქვს ოქროს წარმოების განვითარებაშიც. ადრეულ საუკუნეებში ეს მხარე კოლხეთის სამეფოს შემადგენლობაში შედიოდა და სავარაუდოდ მითი ოქროს საწმისის შესახებ სვანეთში ოქროს მოპოვების ტრადიციასაც უკავშირდება. \n\n  რაჭა-ლეჩხუმ-ქვემო სვანეთი კარგად იყო დაცული როგორც ბუნებრივი პირობებით, ისე ციხესიმაგრეებით, რის გამოც მას ხშირად აფარებდნენ თავს მტრისაგან დევნილი მეფეები და დიდგვაროვანთა ოჯახები. ცაგერს, ისევე, როგორც სვანეთს, სამეფო განძსაცავსაც უწოდებდნენ.",
          en: "In Greek mythology, the Khvamli Mountain, where the mythical hero Prometheus was chained for defying the gods, is located in the Tsageri area. Historical sources indicate that the first signs of human habitation in Racha-Lechkhumi-Lower Svaneti date back to the Stone Age. Artifacts from the Bronze and Iron Ages have been found here. Copper mines from the Bronze Age discovered in Svaneti confirm the region’s significant role in the extraction and processing of this ore. \n\n Ancient Svans produced high-quality bronze, with the upper reaches of the Rioni River being a major center for bronze production. Svaneti also played a crucial role in the development of gold production. In early centuries, this region was part of the Colchis Kingdom, and the myth of the Golden Fleece is likely linked to the tradition of gold mining in Svaneti. \n\n Racha-Lechkhumi-Lower Svaneti was well-protected by both natural conditions and fortresses, making it a frequent refuge for kings and noble families fleeing enemies. Tsageri, like Svaneti, was often referred to as a royal treasury.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმის ისტორიული ძეგლები",
          en: "Historical Monuments of Racha-Lechkhumi",
        },
        img: "/image/nik.webp",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთშია ქართული ხუროთმოძღვრების შედევრი - ნიკორწმინდის ტაძარი, აქაა: ბარაკონი, ლაბეჭინა, მრავალძალის, გონის მთავარანგელოზის, სხიერის სამონასტრო კომპლექსი, ხოტევისა და მინდას ციხეები, კვარაციხე, ციკლოპური ნაციხარი, გონისა და ცხეთის წმ. გიორგის ეკლესიები, მურისა და ორბელიანის ციხესიმაგრეები, ონის სინაგოგა და ბევრი სხვა.",
          en: "Racha-Lechkhumi-Lower Svaneti is home to a masterpiece of Georgian architecture, the Nikortsminda Cathedral, as well as Barakoni, Labechina, Mravaldzali, Goni Archangel, and Skhieri monastery complexes, Khotevi and Minda fortresses, Kvaratsikhe, Cyclopean Natsikhari, Goni and Tskheti St. George churches, Muri and Orbeliani fortresses, Oni Synagogue, and many others.",
        },
      },
      {
        header: {
          ka: "პრომეთეს მთა, შაორის წყალსაცავი და სხვა",
          en: "Prometheus Mountain, Shaori Reservoir, and More",
        },
        img: "",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთის უნიკალური ბუნება - მაღალი, საშუალო და დაბალი სიმაღლის ქედები, მრავალფეროვანი ტყეები, მღვიმეები, მდინარეები, ჩანჩქერები და ტბები სათავგადასავლო მოგზაურობის მოყვარულებისთვის დაუვიწყარი შთაბეჭდილებების ზადგილია. თუმცა პრომეთესთან დაკავშირებული ხვამლის მთა ბევრ მოგზაურში მისტიკურ განწყობასაც ტოვებს. მითებისა და მისტიკური ისტორიების მოყვარულებს ის ნამდვილად დააინტერესებს. \n\n ხვამლის მთა ლეჩხუმში, ცაგერისა და წყალტუბოს მუნიციპალიტეტების ტერიტორიაზეა. ანტიკური წყაროების მიხედვით, ზევსის ბრძანებით, ხვამლზე, იგივე ხომლზე, მიაჯაჭვეს პრომეთე და მის დასახსნელად ჩამოვიდა აქ ჰერაკლე, ეს მთა იყო ბერძენი არგონავტების მოგზაურობის ადგილიც. ქართული ლეგენდის მიხედვით, ხვამლის მთა უდიდეს საიდუმლოს ინახავს. დაზუსტებით არავინ იცის, განძია საიდუმლოში ნაგულისხმევი თუ რამე სხვა. \n\n  რეგიონის სავიზიტო ბარათია შაორისა და ლაჯანის წყალსაცავები, რომლებიც ულამაზესი სანახავია. შთამბეჭდავია ნიკორწმინდისა და სხვავის კარსტული მღვიმეები, სიყვარულის, რაჩხისა და ჩქუმის ჩანჩქერები, ქულბაქის, უძირო და სასვანო ტბები. \n\n  დაუვიწყარია ლაშქრობა ბუბისა და კირტიშოს მყინვარებსა თუ ჭიორისა და ხიხათის მთებზე. გამორჩეული სანახავია საირმის სვეტები და ასხივის მასივი.",
          en: "The unique nature of Racha-Lechkhumi-Lower Svaneti—high, medium, and low ridges, diverse forests, caves, rivers, waterfalls, and lakes—is a haven for adventure travelers, offering unforgettable experiences. However, the Khvamli Mountain, associated with Prometheus, also evokes a mystical atmosphere for many travelers. Lovers of myths and mystical stories will find it particularly fascinating. \n\n Khvamli Mountain is located in Lechkhumi, within the Tsageri and Tsqaltubo municipalities. According to ancient sources, by Zeus’s command, Prometheus was chained to Khvamli (or Khomli), and Heracles came here to free him. This mountain was also a destination for the Greek Argonauts. According to a Georgian legend, Khvamli Mountain holds a great secret, though no one knows for certain whether it refers to a treasure or something else. \n\n The region’s calling cards are the Shaori and Lajani reservoirs, which are stunning to behold. The karst caves of Nikortsminda and Skhvava, the Love, Rachkha, and Chkumi waterfalls, and the Kulbaki, Bottomless, and Sasvano lakes are impressive. \n\n Hiking to the Buba and Kirtisho glaciers or the Chiori and Khikha mountains is unforgettable. The Sairme Pillars and the Askhi Massif are also notable sights.",
        },
      },
      {
        header: {
          ka: "რაჭა-ლეჩხუმის კურორტები",
          en: "Resorts of Racha-Lechkhumi",
        },
        img: "/image/res.webp",
        desc: {
          ka: "რაჭა-ლეჩხუმ - ქვემო სვანეთი მთაში დასვენების მოყვარულებისთვის ერთ-ერთი საუკეთესო ადგილია. აქ მრავლადაა სამკურნალო მინერალური წყლები და კლიმატურ-ბალნეოლოგიური კურორტები: შოვი, უწერა, ლაშიჭალა, ბუგეული და ა.შ. აქ მათივე სახელობის სამკურნალო წყლები მოიპოვება.",
          en: "Racha-Lechkhumi-Lower Svaneti is one of the best places for mountain vacation lovers. The region is rich in medicinal mineral waters and climatic-balneo resorts such as Shovi, Utsera, Lashichala, Bugeuli, and others, where these therapeutic waters are sourced.",
        },
      },
      {
        header: {
          ka: "განსაკუთრებული ღვინოები და სამზარეულო",
          en: "Unique Wines and Cuisine",
        },
        img: "",
        desc: {
          ka: "საქართველოში ვაზის 525 ჯიშია გავრცელებული და რაჭა-ლეჩხუმ - ქვემო სვანეთში მრავალ მათგანს ახარებენ. „ხვანჭკარა“, „ალექსანდროული“, „ო�ajalეში“, „რაჭული თეთრა“ და სხვა აქაური ღვინოები ღრმა, საინტერესო გემოვნებით გამოირჩევა. საქართველოში და უკვე მსოფლიოში პოპულარობით სარგებლობს ქვემო რაჭის ღვინო „ხვანჭკარა“, ლეჩხუმში კი განსაკუთრებულ ყურადღებას იმსახურებს ცოლიკაურის ჯიშის ყურძნისგან დაწურული „ტვიში“. ცალკე უნდა აღინიშნოს ერთ-ერთი ყველაზე ძვირფასი ქართული ღვინო - „უსახელოური“. \n\n რაჭა-ლეჩხუმის ღვინოებთან ერთად, აუცილებლად დასაგემოვნებელია აქაური მდიდარი სამზარეულოს ნიმუშები: ხავიწი, ლორი, ლობიანი, წყალდასხმულა, ჯორმა, მაჭყვინარა და გამორჩეული სვანური კერძები: კუბდარი - ცომში მოთავსებული შესუნელებული ხორცით მომზადებული უგემრიელესი გულსართიანი; ჭვიშტარი – გამომცხვარი სიმინდის ფქვილის და წელვადი ყველის ნაზავი; ასევე თაშმიჯაბი - რომელიც კარტოფილითა და ყველით კეთდება.",
          en: "Georgia is home to 525 grape varieties, many of which are cultivated in Racha-Lechkhumi-Lower Svaneti. Local wines like Khvanchkara, Aleksandrouli, Ojaleshi, and Rachuli Tetra are known for their deep, intriguing flavors. The wine from Lower Racha, 'Khvanchkara,' enjoys popularity in Georgia and worldwide, while in Lechkhumi, the 'Tvishi' wine, made from Tsolikauri grapes, deserves special attention. One of Georgia’s most valuable wines, 'Usakhelouri,' should also be noted. \n\n Alongside Racha-Lechkhumi’s wines, you must taste the region’s rich cuisine, including khavits, lori, lobiani, tskaldaskhmula, jorma, machkvinara, and distinctive Svan dishes: kubdari, a delicious pastry filled with seasoned meat; chvishtari, a baked mix of cornmeal and stretchy cheese; and tashmijabi, made with potatoes and cheese.",
        },
      },
    ],
    range: [
      {
        min: 57,
        max: 23,
      },
    ],
  },
];

export const sliderImages: {
  src: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
}[] = [
  {
    src: "/image/discover.webp",
    title: "აღმოაჩინე საქართველო",
    titleEn: "Discover Unique Georgia",
    description:
      "უძველესი კულტურის, ულამაზესი ბუნებისა და მრავალპეროვანი თავგადასავლების ქვეყანა!",
    descriptionEn:
      "A country of ancient culture, where the breathtaking beauty of nature provides the perfect backdrop for infinite adventures and memorable experiences that will stay with you forever.",
  },
  {
    src: "/image/tbilisi.webp",
    title: "თბილისი - საქართველოს \n\n დედაქალაქი",
    titleEn: "Tbilisi - The Capital of Georgia",
    description:
      "აქ ნახავ უძველეს ეკლესიებს, ულამაზეს არქიტექტურას და თვალისმომჭრელი ხედებით დატკბები",
    descriptionEn:
      "you have  to experience tbilisi for yourself - evaluating its harmonies, savoring its intellect, and soaking in its history as you uncover your own personal relationship wirh the city.",
  },
  {
    src: "/image/kaceti.webp",
    title: "კახეთი - რეგიონი აღმოსავლეთ \n\n საქართველოში",
    titleEn: "Kakheti - A Region in Eastern Georgia",
    description:
      "ალპურ ტბებს, მარადმწვანე ტყეებს და გამორჩეულ ციხე-კოშკებს აუცილებლად უნდა ესტუმრო",
    descriptionEn:
      "Behold the wonder of crystal-clear alpine lakes, towering evergreen forests, and ancient fortresses taht will leave you breathless. There are sights that you simply cannot miss!",
  },
];

export interface CardSections {
  id: number;
  image: string;
  header: {
    ka: string;
    en: string;
  };
  description: {
    ka: string;
    en: string;
  };
}

export const translations = {
  ka: {
    title: "შენი 365 დღე საქართველოში",
    description: `აქ შეძლებ ვარსკვლავებს 4000 მეტრის სიმაღლიდან ახედო, ბაკურიანის
              იდუმალ მთებში სათხილამურო ტური დაგეგმო ან მდინარე არაგვზე
              საჯომარდო მარშრუტით დაუვიწყარი გამოცდილება მიიღო.`,
  },
  en: {
    title: "Your 365 Days in Georgia",
    description: `Here you can observe stars from a height of 4000 meters, plan
              a skiing tour in the mysterious mountains of Bakuriani or get
              an unforgettable rafting experience on the Aragvi river.`,
  },
};
export const cardDescription: CardSections[] = [
  {
    id: 1,
    image: "/cardImage/spring.webp",
    header: {
      ka: "გაზაფხული",
      en: "Spring",
    },
    description: {
      ka: "სიმწვანეში ჩაფლულ სოფლებს სწორედ ახლა...",
      en: "Villages immersed in greenery right now...",
    },
  },
  {
    id: 2,
    image: "/cardImage/summer.webp",
    header: {
      ka: "ზაფხული",
      en: "Summer",
    },
    description: {
      ka: "საუკეთესო პერიოდი ალპური მდელოების...",
      en: "The best period for alpine meadows...",
    },
  },
  {
    id: 3,
    image: "/cardImage/copy.webp",
    header: {
      ka: "შემოდგომა",
      en: "Autumn",
    },
    description: {
      ka: "სეზონი როცა ხშირი, ტყეებით დაპარული მთე...",
      en: "Season when dense, forest-covered mountains...",
    },
  },
  {
    id: 4,
    image: "/cardImage/copy2.webp",
    header: {
      ka: "ზამთარი",
      en: "Winter",
    },
    description: {
      ka: "ამ დროს ყველაფერი ფაფუკი თოვლის...",
      en: "At this time everything is covered with fluffy snow...",
    },
  },
];

export interface Place {
  id: number;
  title: { ka: string; en: string };
  description: { ka: string; en: string };
  image: string;
}

export const georgianPlaces: Place[] = [
  {
    id: 1,
    title: { ka: "თბილისი", en: "Tbilisi" },
    description: {
      ka: "საქართველოს დედაქალაქი, ისტორიული და კულტურული ცენტრი",
      en: "The capital of Georgia, a historical and cultural center",
    },
    image: "/sights/tbilisi-old-town-with-traditional-architecture.png",
  },
  {
    id: 2,
    title: { ka: "ბათუმი", en: "Batumi" },
    description: {
      ka: "შავი ზღვის სანაპირო კურორტი და თანამედროვე ქალაქი",
      en: "A Black Sea coast resort and modern city",
    },
    image: "/sights/batumi-seaside-resort-with-modern-buildings.png",
  },
  {
    id: 3,
    title: { ka: "მცხეთა", en: "Mtskheta" },
    description: {
      ka: "საქართველოს ძველი დედაქალაქი და რელიგიური ცენტრი",
      en: "Georgia’s ancient capital and religious center",
    },
    image: "/sights/mtskheta-ancient-georgian-city-with-churches.png",
  },
  {
    id: 4,
    title: { ka: "სვანეთი", en: "Svaneti" },
    description: {
      ka: "მთიანი რეგიონი ისტორიული კოშკებით და ალპური პეიზაჟებით",
      en: "A mountainous region with historic towers and alpine landscapes",
    },
    image: "/sights/svaneti-mountain-region-with-ancient-towers.png",
  },
  {
    id: 5,
    title: { ka: "კახეთი", en: "Kakheti" },
    description: {
      ka: "ღვინის რეგიონი ვენახებით და ისტორიული მონასტრებით",
      en: "A wine region with vineyards and historic monasteries",
    },
    image: "/sights/kakheti-wine-region-with-vineyards.png",
  },
  {
    id: 6,
    title: { ka: "გუდაური", en: "Gudauri" },
    description: {
      ka: "მთის სათხილამურო კურორტი კავკასიონის მთებში",
      en: "A mountain ski resort in the Caucasus Mountains",
    },
    image: "/sights/gudauri-ski-resort-in-caucasus-mountains.png",
  },
  {
    id: 7,
    title: { ka: "ვარძია", en: "Vardzia" },
    description: {
      ka: "მღვიმური ქალაქი და მონასტერი მტკვრის ხეობაში",
      en: "A cave city and monastery in the Mtkvari Valley",
    },
    image: "/sights/vardzia-cave-monastery-complex.png",
  },
  {
    id: 8,
    title: { ka: "ბორჯომი", en: "Borjomi" },
    description: {
      ka: "სამკურნალო წყლების კურორტი და ეროვნული პარკი",
      en: "A spa resort with mineral springs and a national park",
    },
    image: "/sights/borjomi-spa-resort-with-mineral-water-springs.png",
  },
  {
    id: 9,
    title: { ka: "კუტაისი", en: "Kutaisi" },
    description: {
      ka: "იმერეთის ცენტრი ისტორიული ძეგლებით",
      en: "The center of Imereti with historical monuments",
    },
    image: "/sights/kutaisi-historical-city-with-ancient-monuments.png",
  },
  {
    id: 10,
    title: { ka: "ახალციხე", en: "Akhaltsikhe" },
    description: {
      ka: "სამცხე-ჯავახეთის ცენტრი რაბათის ციხით",
      en: "The center of Samtskhe-Javakheti with Rabati Fortress",
    },
    image: "/sights/akhaltsikhe-city-with-rabati-fortress.png",
  },
  {
    id: 11,
    title: { ka: "ზუგდიდი", en: "Zugdidi" },
    description: {
      ka: "მეგრელეთის ცენტრი დადიანების სასახლით",
      en: "The center of Samegrelo with the Dadiani Palace",
    },
    image: "/sights/zugdidi-city-with-dadiani-palace.png",
  },
  {
    id: 12,
    title: { ka: "ტელავი", en: "Telavi" },
    description: {
      ka: "კახეთის ცენტრი ღვინის ტრადიციებით",
      en: "The center of Kakheti with wine traditions",
    },
    image: "/sights/telavi-city-center-with-wine-traditions.png",
  },
];
