export interface RegionTime {
  city: { ka: string; en: string };
  time: { ka: string; en: string };
}

export interface AnotherSection {
  name1: { ka: string; en: string };
  description: { ka: string; en: string };
  image: string | string[];
  name2: { ka: string; en: string };
  name3: { ka: string; en: string };
  image2: string | string[];
  description2: { ka: string; en: string };
  description3: { ka: string; en: string };
  name4: { ka: string; en: string };
  name5: { ka: string; en: string };
  description4: { ka: string; en: string };
  description5: { ka: string; en: string };
}

export interface WorkingHours {
  monday: { ka: string; en: string };
  tuesday: { ka: string; en: string };
  wednesday: { ka: string; en: string };
  thursday: { ka: string; en: string };
  friday: { ka: string; en: string };
  saturday: { ka: string; en: string };
  sunday: { ka: string; en: string };
}

export interface RangeItem {
  min?: { ka: string; en: string };
  max?: { ka: string; en: string };
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

export interface ArrayItem {
  image: string;
  header: { ka: string; en: string };
  title?: { ka: string; en: string };
  text?: { ka: string; en: string };
  description?: { ka: string; en: string };
}

export interface SlideCard {
  title: { ka: string; en: string };
  src?: string;
  modalSrc: string;
  additionalDescription: { ka: string; en: string };
  text?: { ka: string; en: string };
  region: { ka: string; en: string };
  city: { ka: string; en: string };
  name: { ka: string; en: string };
  address: { ka: string; en: string };
  phone: string;
  website: string;
  workingHours: WorkingHours;
}

export interface UkrGeoCharm {
  name: { ka: string; en: string };
  title?: { ka: string; en: string };
  image: string;
}

export interface Card {
  title: { ka: string; en: string };
  src: string;
  additionalDescription: { ka: string; en: string };
  region: { ka: string; en: string };
  city: string;
  link: string;
  description: { ka: string; en: string };
  name: { ka: string; en: string };
  address: { ka: string; en: string };
  phone: string;
  website: string;
  workingHours: WorkingHours;
  regionTime: RegionTime[];
  anotherSection: AnotherSection;
  range: RangeItem[];
  destinations: Destination[];
  array: ArrayItem[];
  slideCard: SlideCard[];
  ukrGeoCharm: UkrGeoCharm[];
}

export const cardSliderImages: Card[] = [
  // 0 index
  {
    title: { ka: "ქუთაისი", en: "Kutaisi" },
    src: "/places/kutaisi-gnta.webp",
    additionalDescription: {
      ka: "ქუთაისი ქრისტეს შობამდე 1400 წლით ადრე დაარსდა და ის მსოფლიოს ერთ-ერთი უძველესი ქალაქია. იგი საოცარი იუმორის, სითბოსა და სიყვარულის ადგილია. ამას ამბობს ყველა, ვისაც აქ ერთხელ მაინც უმოგზაურია.",
      en: "Kutaisi was founded 1400 years before the birth of Christ and is one of the oldest cities in the world. It is a place of amazing humor, warmth, and love. Everyone who has traveled here at least once says so.",
    },
    region: { ka: "თბილისი", en: "Tbilisi" },
    city: "3434",
    link: "https://www.google.com/maps/place/%E1%83%A5%E1%83%A3%E1%83%97%E1%83%90%E1%83%98%E1%83%A1%E1%83%98/@42.2547004,42.700487,14z/data=!3m1!4b1!4m5!3m4!1s0x405c8ce30e54af2d:0xfbec41b2d626656f!8m2!3d42.2662428!4d42.7180019?shorturl=1",
    description: { ka: "ბუნების ძეგლები", en: "Natural Monuments" },
    name: {
      ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
      en: "Okatse Canyon Visitor Center",
    },
    address: {
      ka: "FG4G+7XV, Окаце, საქართველო",
      en: "FG4G+7XV, Okatse, Georgia",
    },
    phone: "595 03 60 47",
    website:
      "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
    workingHours: {
      monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
    },
    regionTime: [
      {
        city: { ka: "მესტია", en: "Mestia" },
        time: { ka: "02:24სთ", en: "02:24h" },
      },
      {
        city: { ka: "ბათუმი", en: "Batumi" },
        time: { ka: "02:24სთ", en: "02:24h" },
      },
      {
        city: { ka: "თბილისი", en: "Tbilisi" },
        time: { ka: "02:24სთ", en: "02:24h" },
      },
    ],
    anotherSection: {
      name1: { ka: "ქუთაისის ისტორია", en: "History of Kutaisi" },
      description: {
        ka: "ქუთაისსა და მის შემოგარენში ადამიანი ქვედა პალეოლითის ხანიდან ცხოვრობდა. აქ აღმოჩენილია დინოზავრის ნაკვალევი და „ოქროს საწმისის“ მაძიებელი „არგონავტების“ კვალიც კი ამ ქალაქში მოდის. \n\n საუკუნეების განმავლობაში ქუთაისი ქვეყნის კულტურული და პოლიტიკური ცენტრი იყო, VIII საუკუნიდან XI საუკუნემდე კი - საქართველოს დედაქალაქი. \n\n სახელი „ქუთაისი“ სამი სიტყვისგან შედგება: ქვა, მთა და ისი - ქალაქი ქვასა და მთას შორის. განსხვავებულ ეპოქებში მას სხვადასხვა სახელით მოიხსენიებდნენ - აია, ქუთაია და ქუთათისიუმი.",
        en: "People have lived in Kutaisi and its surroundings since the Lower Paleolithic era. Dinosaur footprints and traces of the Argonauts, seekers of the 'Golden Fleece,' have been found here. \n\n For centuries, Kutaisi was the cultural and political center of the country, and from the 8th to the 11th century, it was the capital of Georgia. \n\n The name 'Kutaisi' comes from three words: stone, mountain, and 'isi' - a city between stone and mountain. In different eras, it was called Aia, Kutaia, and Kutatisium.",
      },
      image: "/places/2(3).webp",
      name2: { ka: "ქუთაისის ღირსშესანიშნაობები", en: "Kutaisi Attractions" },
      name3: { ka: "", en: "" },
      image2: "/places/9.webp",
      description2: {
        ka: "ქუთაისში საუკუნე-ნახევარზე მეტი ხნის ბაღს - ბულვარს შეხვდები, რომელიც ქალაქის ცენტრალურ მოედანს უერთდება. დიდ ქართველ პოეტს, აკაკი წერეთელს ბულვარისთვის „ქუთაისის პარლამენტი“ უწოდებია, რადგან ინტელიგენცია აქ მნიშვნელოვან საკითხებზე სამსჯელოდ იკრიბებოდა. ტრადიცია დღესაც გრძელდება. \n\n აქვე, მოედანზე კოლხური შადრევანი დაგხვდება, რომელიც გაფორმებულია საქართველოში ვანის გათხრებისას აღმოჩენილი არტეფაქტების შესატყვისი 30 მოოქროვილი ფიგურით.",
        en: "In Kutaisi, you’ll find a garden-boulevard over a century and a half old, connecting to the city’s central square. The great Georgian poet Akaki Tsereteli called it the 'Kutaisi Parliament,' as intellectuals gathered here to discuss important matters. This tradition continues today. \n\n Nearby, on the square, you’ll see the Colchian Fountain, decorated with 30 gilded figures inspired by artifacts found during excavations in Vani, Georgia.",
      },
      description3: {
        ka: "ასევე უნდა ნახო ქუთაისის დრამატული თეატრის უნიკალური შენობა, რომელსაც ეროვნული კულტურის ძეგლის სტატუსი აქვს მინიჭებული. \n\n აღსანიშნავია, რომ ბულვარის ბოლოში ქუთაისის ოპერისა და ბალეტის თეატრი დგას, რომლის სახურავზეც ქუთაისელი მოქანდაკის მიერ გაკეთებულ 13 რომაულ ფიგურას შენიშნავ. შედარებით ქვევით, მდინარე რიონის პირზე, იმერეთის მეფეთა რეზიდენცია „ოქროს ჩარდახია“; მაღლა, გორაზე, 1003 წელს ერთიანი საქართველოს სიმბოლოდ აგებული ბაგრატის ტაძარი მოჩანს. ისინი აუცილებლად უნდა იხილო, ისევე, როგორც UNESCO-ს მსოფლიო მემკვიდრეობის ძეგლი - გელათის სამონასტრო კომპლექსი და მოწამეთას არაჩვეულებრივი მონასტერი, რომლებთანაც ზამთარ-ზაფხულ წითელი მდინარე ჩამოედინება.",
        en: "You must also see the unique building of the Kutaisi Drama Theater, which has the status of a national cultural monument. \n\n Notably, at the end of the boulevard stands the Kutaisi Opera and Ballet Theater, where you’ll notice 13 Roman figures crafted by a Kutaisi sculptor on its roof. Further down, by the Rioni River, is the 'Golden Chardakhi,' the residence of the Imeretian kings; higher up, on the hill, you’ll see the Bagrati Cathedral, built in 1003 as a symbol of unified Georgia. These are must-see sites, along with the UNESCO World Heritage Site, the Gelati Monastery Complex, and the remarkable Motsameta Monastery, where a red river flows year-round.",
      },
      name4: { ka: "", en: "" },
      name5: { ka: "", en: "" },
      description4: {
        ka: "როდესაც ამ ქალაქში მოხვდები აუცილებლად ეწვიე ქალაქის უბნებს, შეიარე ბოტანიკურ ბაღში და რიონის სიოსაც მიეგებე - ქუთაისის უძველეს „ჯაჭვის ხიდზე“, 1872 წელს საფრანგეთში დაპროექტებულ „თეთრ ხიდზე“ და „წითელ ხიდზე“, რომელიც პირველი რკინისგან აგებული ხიდია მთელ ამიერკავკასიაში. ამ ხიდებიდან რიონის კალაპოტში წამოწოლილ თეთრ ქვებს გადახედე. სწორედ ამ დროს მიხვდები თუ როგორი ქალაქია ქუთაისი, რომელიც თავის მკვიდრ ღვაწლმოსილ ფოტოგრაფს ძეგლს უდგამს.",
        en: "When you visit this city, be sure to explore its neighborhoods, stroll through the botanical garden, and feel the breeze of the Rioni River at Kutaisi’s ancient 'Chain Bridge,' the 'White Bridge' designed in France in 1872, and the 'Red Bridge,' the first iron bridge in the entire South Caucasus. From these bridges, look at the white stones in the Rioni riverbed. At that moment, you’ll understand what kind of city Kutaisi is, one that erects a monument to its distinguished local photographer.",
      },
      description5: { ka: "", en: "" },
    },
    range: [{ min: { ka: "30", en: "30" } }, { max: { ka: "3", en: "3" } }],
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
    array: [
      {
        image: "/places/khachapuri-gnta.webp",
        header: { ka: "იმერული ხაჭაპური", en: "Imeretian Khachapuri" },
        title: { ka: "დააგემოვნე", en: "Taste" },
        text: {
          ka: "მრავალფეროვანი ქართული კერძები",
          en: "Diverse Georgian Dishes",
        },
        description: {
          ka: "იმერული სამზარეულო განსაკუთრებულია არა მხოლოდ საქართველოში, არამედ მთელ კავკასიაში. აქ მთავარი კერძი იმერული ხაჭაპურია, რომლის საიდუმლოც იმერულ ყველშია. ეს მხარე ვეგეტარიანული კერძების მრავალფეროვნებითაც გამოირჩევა: ნიგვზიანი ფხალი, იმერული ლობიო… თუმცა იმერელი დიასახლისები ხორცით მომზადებული კერძების ოსტატებიც არიან: საცივის იმერული ვერსია, რომელიც ქათმის ხორცისგან მზადდება, ახალი წლის მთავარი კერძია",
          en: "Imeretian cuisine is unique not only in Georgia but throughout the Caucasus. The main dish here is Imeretian khachapuri, the secret of which lies in Imeretian cheese. This region is also known for its variety of vegetarian dishes: walnut pkhali, Imeretian beans… However, Imeretian housewives are also masters of meat dishes: the Imeretian version of satsivi, made with chicken, is a staple New Year’s dish.",
        },
      },
      {
        image: "/places/imeruli-cheese-gnta.webp",
        header: { ka: "იმერული ყველი", en: "Imeretian Cheese" },
      },
    ],
    slideCard: [
      {
        title: { ka: "პრომეთეს მღვიმე", en: "Prometheus Cave" },
        src: "/slidecard/prometheus-cave-gnta.webp",
        modalSrc: "/slidecard/prometheus-cave-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        text: {
          ka: "აღმოაჩინე პოპულალური სანახაობები",
          en: "Discover popular attractions",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, Окаце, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: {
          ka: "დათვის ტბა - ბუნების ძეგლი ოააცეს კანიონში",
          en: "Bear Lake - Natural Monument in Okatse Canyon",
        },
        src: "/slidecard/datvi-lake-gnta.webp",
        modalSrc: "/slidecard/datvi-lake-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, Окаце, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: {
          ka: "კინჩხის (ოკაცეს) ჩანჩქერი - ხონის ბუნებრივი ძეგლი",
          en: "Kinchkha (Okatse) Waterfall - Khoni Natural Monument",
        },
        src: "/slidecard/kinchkha-waterfall-gnta.webp",
        modalSrc: "/slidecard/kinchkha-waterfall-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, Окаце, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: {
          ka: "ხონის მხარეთმცოდნეობის მუზეუმი",
          en: "Khoni Museum of Local Lore",
        },
        src: "/slidecard/khoni-museum-of-local-lore.webp",
        modalSrc: "/slidecard/khoni-museum-of-local-lore.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, Окаце, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: { ka: "სასტუმრო პრომეთე", en: "Hotel Prometheus" },
        src: "/slidecard/hotel-prometheus-gnta.webp",
        modalSrc: "/slidecard/hotel-prometheus-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, Окаце, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: { ka: "ლომინას ტბა", en: "Lomina Lake" },
        src: "/slidecard/lomina-gnta.webp",
        modalSrc: "/slidecard/lomina-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, Окаце, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: { ka: "ბღერის მღვიმე", en: "Bgheri Cave" },
        src: "/slidecard/bgheri-cave-natural-monument.webp",
        modalSrc: "/slidecard/bgheri-cave-natural-monument.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, Окаце, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
    ],
    ukrGeoCharm: [
      {
        title: { ka: "აღმოაჩინე", en: "Discover" },
        name: { ka: "კულტუული ძეგლები", en: "Cultural Monuments" },
        image: "/places/tower-of-ushguli.webp",
      },
      {
        name: { ka: "ხელოვნება და კულტურა", en: "Art and Culture" },
        image: "/places/arts-and-culture-in-georgia.webp",
      },
      {
        name: { ka: "სამზარეულო და ღვინო", en: "Cuisine and Wine" },
        image: "/places/food-and-wine-georgia.webp",
      },
    ],
  },
  // 1 index

  {
    title: { ka: "ბათუმი", en: "Batumi" },
    src: "/places/batumi-gnta.webp",
    additionalDescription: {
      ka: "ბათუმი ასეთად ამერიკის სტუმარმასპინძლობის მეცნიერების აკადემიამ ჯერ კიდევ 2012 წელს აღიარა, ჟურნალმა Forbes-მა კი „ხავერდოვან სეზონზე“ დასასვენებელი საუკეთესო კურორტების ხუთეულში შეიყვანა. „ხავერდოვანი სეზონი“ ზღვაზე დასასვენებლად საუკეთესოდ მიიჩნევა, მაგრამ ბათუმი წელიწადის ნებისმიერ დროს გამორჩეულად გიმასპინძლებს - საქმიანი ვიზიტით ესტუმრები თუ დასასვენებლად, მარტო, მეგობრებთან თუ ოჯახთან ერთად, დიდი ხნით თუ მხოლოდ „უიკენდზე“.",
      en: "Batumi was recognized as such by the American Academy of Hospitality Sciences back in 2012, and Forbes magazine included it in the top five resorts for the 'velvet season.' The 'velvet season' is considered the best time for a seaside vacation, but Batumi welcomes you exceptionally well any time of the year—whether for a business visit or leisure, alone, with friends, or family, for a long stay or just a weekend.",
    },
    region: { ka: "აჭარა", en: "Adjara" },
    city: "3434", // Replaced "3434" with proper city
    link: "https://www.google.com/maps/place/%E1%83%91%E1%83%90%E1%83%97%E1%83%A3%E1%83%9B%E1%83%98/@41.6240067,41.6525937,12z/data=!3m1!4b1!4m6!3m5!1s0x406786304ea2d221:0x7a3053a9e12ea967!8m2!3d41.6460978!4d41.6404899!16zL20vMGMyNmc?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D",
    description: { ka: "ბუნების ძეგლები", en: "Natural Monuments" },
    name: {
      ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
      en: "Okatse Canyon Visitor Center",
    },
    address: {
      ka: "FG4G+7XV, ოკაცე, საქართველო",
      en: "FG4G+7XV, Okatse, Georgia",
    },
    phone: "595 03 60 47",
    website:
      "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
    workingHours: {
      monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
    },
    regionTime: [
      {
        city: { ka: "თბილისი", en: "Tbilisi" },
        time: { ka: "5:30 სთ", en: "5h 30m" },
      },
      {
        city: { ka: "ქუთაისი", en: "Kutaisi" },
        time: { ka: "2:15 სთ", en: "2h 15m" },
      },
      {
        city: { ka: "მესტია", en: "Mestia" },
        time: { ka: "5:45 სთ", en: "5h 45m" },
      },
    ],
    anotherSection: {
      name1: { ka: "სად მდებარეობს ბათუმი?", en: "Where is Batumi located?" },
      description: {
        ka: "ბათუმი აჭარის ავტონომიური რესპუბლიკის ადმინისტრაციული ცენტრია და შავი ზღვის სამხრეთ-აღმოსავლეთ სანაპიროს მსხვილი საერთაშორისო ნავსადგური. \n\n ბათუმი დედაქალაქიდან 350 კმ-ში, დასავლეთ საქართველოში მდებარეობს და იქ მოხვედრა ევროპიდან თუ აზიიდან საჰაერო, სახმელეთო და საზღვაო ტრანსპორტითაა შესაძლებელი.",
        en: "Batumi is the administrative center of the Autonomous Republic of Adjara and a major international port on the southeastern coast of the Black Sea. \n\n Located 350 km from the capital in western Georgia, Batumi is accessible from Europe or Asia by air, land, or sea transport.",
      },
      image: "/places/alphabetic-tower-batumi-1.webp",
      name2: { ka: "ბათუმის ღირსშესანიშნაობები", en: "Batumi Attractions" },
      name3: {
        ka: "ბათუმის პოპულარული აქტივობები",
        en: "Popular Activities in Batumi",
      },
      image2: "/places/batumi-dolphinarium-gnta.webp",
      description2: {
        ka: "ბათუმი ცნობილია თავისი უძველესი პორტით, არქიტექტურით, ევროპული მოედნებითა და ამ მოედნებზე დაბინავებული საოცარი სკულპტურებით. ერთ ასეთს - სალამურიან ბიჭუნას, ქალაქის ერთგვარ სიმბოლოს, ძველ ბათუმში იპოვი, ისტორიული სახლის აგურის ნიშაში.",
        en: "Batumi is renowned for its ancient port, architecture, European-style squares, and the stunning sculptures adorning these squares. One such sculpture, the boy with a flute, a symbol of the city, can be found in old Batumi, nestled in the brick niche of a historic house.",
      },
      description3: {
        ka: "აუცილებლად დაათვალიერე იქვე მდებარე ბათუმის პიაცაც, მოინახულე ქორწინებისა და იუსტიციის სახლები, ანბანის კოშკი, ნეპტუნის შადრევანი, მედეას ქანდაკება, ასტრონომიული საათი, ბათუმის ცნობილი კოლონადები, 1863 წელს აგებული შუქურა, საოცარი ქანდაკებები - „ალი და ნინო“ და „როტაცია“. \n\n ბათუმის ბულვარშიც უნდა გაიარო და ქალაქის ისეთი ძეგლებიც მოინახულო, როგორიც ღვთისმშობლის შობის სახელობის საკათედრო ტაძარი, ბათუმის მეჩეთი - ორთა ჯამე და ბათუმის სულიწმიდის სახელობის კათოლიკური ეკლესიაა.",
        en: "Be sure to visit the nearby Batumi Piazza, explore the Marriage and Justice Houses, the Alphabet Tower, Neptune’s Fountain, the Medea statue, the astronomical clock, Batumi’s famous colonnades, the lighthouse built in 1863, and the stunning sculptures 'Ali and Nino' and 'Rotation.' \n\n Stroll through Batumi Boulevard and visit landmarks such as the Cathedral of the Nativity of the Virgin Mary, the Orta Jame Mosque, and the Holy Spirit Catholic Church.",
      },
      name4: {
        ka: "ყველა ამინდში სასურველი ქალაქი",
        en: "A City for All Weather",
      },
      name5: { ka: "", en: "" },
      description4: {
        ka: "გართობის მოყვარულებისთვის ბათუმში მუშაობს: აკვაპარკი, საცხენოსნო კლუბი, დელფინარიუმი, დაივინგცენტრი, პანორამული ბორბალი, გელოდებათ საზღვაო და ველოგასეირნებები, ფლაიბორდი, პარაპლანი.",
        en: "For entertainment enthusiasts, Batumi offers an aqua park, equestrian club, dolphinarium, diving center, panoramic wheel, sea and bike tours, flyboarding, and paragliding.",
      },
      description5: {
        ka: "არსებობს ქალაქები, სადაც შვებულებას წვიმაც ვერ გაგიფუჭებს? დიახ, ბათუმია ასეთი და ამას თავადაც მიხვდები, თუკი მოკირწყლულ ქუჩებზე შენი ნაბიჯების ხმას წვიმის წვეთები აჰყვება და იგრძნობ, ზღვის, აკაციისა და მაგნოლიის სურნელს როგორ ერევა კაფეებიდან გამოსული, ქვიშაზე მოხარშული ყავის ოხშივარი.",
        en: "Are there cities where rain can’t ruin your vacation? Yes, Batumi is one of them, and you’ll realize this when the sound of your footsteps on wet streets blends with raindrops, and you sense the scent of the sea, acacia, and magnolia mingling with the aroma of coffee brewed on the sand from nearby cafes.",
      },
    },
    range: [{ min: { ka: "44", en: "44" } }, { max: { ka: "1", en: "1" } }],
    destinations: [
      {
        id: "1",
        title: {
          ka: "ზემო აჭარის სამდღიანი ტური",
          en: "Three-Day Upper Adjara Tour",
        },
        description: {
          ka: "მოიწყე დაუვიწყარი სამდღიანი თავგადასავალი ბუნების წიაღში და მოინახულე ისეთი ისტორიული ნაგებობები, როგორებიცაა: ხიხანის ციხე, სხალთის მონასტერი და თამარის ხიდი. ტურის განმავლობაში ასევე შესაძლებლობა გექნება იხილო გოდერძი, მწვანე ტბა, ხულო, მახუნცეთის ჩანჩქერი და დატკბე საუკეთესო სანახაობით.",
          en: "Embark on an unforgettable three-day adventure in nature and visit historical sites such as Khikhani Fortress, Skhalta Monastery, and Tamar Bridge. During the tour, you’ll also have the chance to see Goderdzi, Green Lake, Khulo, Makhuntseti Waterfall, and enjoy the best sights.",
        },
        image: "/places/batumi-botanical-garden(1).webp",
        duration: { ka: "48-60სთ", en: "48-60h" },
        activities: { ka: "15 სანახაობა", en: "15 Attractions" },
        currency: { ka: "84კმ", en: "84km" },
      },
      {
        id: "2",
        title: { ka: "ორდღიანი ტური ბათუმში", en: "Two-Day Batumi Tour" },
        description: {
          ka: "აღმოაჩინე შავიზღვისპირეთის საოცრება, ესტუმრე ბათუმის ბოტანიკურ ბაღს და ორდღიანი ტურის ფარგლებში, იხილე მომნუსხველი ღირშესანიშნაობები, მათ შორის - დელფინარიუმი, ბათუმის ბულვარი, ალი და ნინო, ქორწინების სასახლე და მოცეკვავე შადრევანი. მიიღე უნიკალური გამოცდილება და აღბეჭდე ფირზე აჭარის თანამედროვე პეიზაჟები.",
          en: "Discover the wonders of the Black Sea coast, visit the Batumi Botanical Garden, and during a two-day tour, explore captivating attractions, including the Dolphinarium, Batumi Boulevard, Ali and Nino, the Marriage Palace, and the Dancing Fountain. Gain a unique experience and capture Adjara’s modern landscapes on film.",
        },
        image: "/places/batumi-lighthouse-gnta.webp",
        duration: { ka: "24-28სთ", en: "24-28h" },
        activities: { ka: "24 სანახაობა", en: "24 Attractions" },
        currency: { ka: "10კმ", en: "10km" },
      },
    ],
    array: [
      {
        image: "/places/kaymagh-gnta.webp",
        header: { ka: "კაიმალი", en: "Kaymagh" },
        title: { ka: "დააგემოვნე", en: "Taste" },
        text: {
          ka: "მრავალფეროვანი ქართული კერძები",
          en: "Diverse Georgian Dishes",
        },
        description: {
          ka: "როდესაც ბათუმში მოხვდები, აუცილებლად გასინჯე ნავის ფორმის აჭარული ხაჭაპური, ყავა ქვიშაზე და ბაქლავა, რომელიც მზის, სანაპიროსა და სიყვარულის გამოხატულებაა. აჭარაში კალორიულობით გამორჩეულ კერძებს ხშირად შეხვდები: ბორანო, სინორი, კაიმაღი, მალახტო, იახნი, აჩმა და სხვა. აქ მსოფლიოში ცნობილი „ცოლიკაურისა“ და „ჩხავერის“ ღვინოები ჩამოისხმება, მთაში კი გახსნილია ღვინის სახლები, რაც ვიზიტორებს მრავალი ქვეყნიდან იზიდავს.",
          en: "When you visit Batumi, be sure to try the boat-shaped Adjarian khachapuri, coffee brewed on sand, and baklava, an expression of sun, coast, and love. In Adjara, you’ll often encounter calorie-rich dishes like borano, sinori, kaymagh, malahto, yakhni, achma, and more. Here, the world-famous 'Tsolikauri' and 'Chkhaveri' wines are poured, and wine houses in the mountains attract visitors from many countries.",
        },
      },
      {
        image: "/places/adjarian-dishes-chirbuli.webp",
        header: { ka: "აჭარული სამზარეულო", en: "Adjarian Cuisine" },
        title: { ka: "", en: "" },
        text: { ka: "", en: "" },
        description: { ka: "", en: "" },
      },
    ],
    slideCard: [
      {
        title: { ka: "პრომეთეს მღვიმე", en: "Prometheus Cave" },
        src: "/slidecard/prometheus-cave-gnta.webp",
        modalSrc: "/slidecard/prometheus-cave-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        text: {
          ka: "აღმოაჩინე პოპულარული სანახაობები",
          en: "Discover Popular Attractions",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: {
          ka: "დათვის ტბა - ბუნების ძეგლი ოკაცეს კანიონში",
          en: "Datvi Lake - Natural Monument in Okatse Canyon",
        },
        src: "/slidecard/datvi-lake-gnta.webp",
        modalSrc: "/slidecard/datvi-lake-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: {
          ka: "კინჩხის (ოკაცეს) ჩანჩქერი - ხონის ბუნებრივი ძეგლი",
          en: "Kinchkha (Okatse) Waterfall - Khoni Natural Monument",
        },
        src: "/slidecard/kinchkha-waterfall-gnta.webp",
        modalSrc: "/slidecard/kinchkha-waterfall-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: {
          ka: "ხონის მხარეთმცოდნეობის მუზეუმი",
          en: "Khoni Museum of Local Lore",
        },
        src: "/slidecard/khoni-museum-of-local-lore.webp",
        modalSrc: "/slidecard/khoni-museum-of-local-lore.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: { ka: "სასტუმრო პრომეთე", en: "Hotel Prometheus" },
        src: "/slidecard/hotel-prometheus-gnta.webp",
        modalSrc: "/slidecard/hotel-prometheus-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: { ka: "ლომინას ტბა", en: "Lomina Lake" },
        src: "/slidecard/lomina-gnta.webp",
        modalSrc: "/slidecard/lomina-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: { ka: "ბღერის მღვიმე", en: "Bgheri Cave" },
        src: "/slidecard/bgheri-cave-natural-monument.webp",
        modalSrc: "/slidecard/bgheri-cave-natural-monument.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
    ],
    ukrGeoCharm: [
      {
        title: { ka: "აღმოაჩინე", en: "Discover" },
        name: { ka: "კულტუული ძეგლები", en: "Cultural Monuments" },
        image: "/places/tower-of-ushguli.webp",
      },
      {
        title: { ka: "", en: "" },
        name: { ka: "ხელოვნება და კულტურა", en: "Arts and Culture" },
        image: "/places/arts-and-culture-in-georgia.webp",
      },
      {
        title: { ka: "", en: "" },
        name: { ka: "სამზარეულო და ღვინო", en: "Cuisine and Wine" },
        image: "/places/nature-of-georgia.webp",
      },
    ],
  },

  // 2 index

  {
    title: { ka: "თბილისი", en: "Tbilisi" },
    src: "/places/tbilisi-capital-of-georgia-country.webp",
    additionalDescription: {
      ka: "ეს ქალაქი პოლიფონიურ მუსიკას ჰგავს, რომელსაც სიტყვები ვერ აღწერს - მას თავად უნდა მოუსმინო, მისი ჰარმონიულობა შეაფასო, ინტელექტუალიზმი იგრძნო და საკუთარი ემოცია აღმოაჩინო. თბილისი ევროპის ერთ-ერთი უძველესი დედაქალაქია და ის 15 საუკუნეა, რაც ქვეყნის კულტურული, პოლიტიკური და ეკონომიკური ცენტრია. ამ საქმიანი და მკაცრი სტატუსის მიღმა აქ ისეთი ატმოსფეროა, ერთხელ თუ გაიცნობ, უკან დაბრუნების სურვილი ბევრჯერ გაგიჩნდება.",
      en: "This city is like polyphonic music that words cannot describe—you must listen to it yourself, appreciate its harmony, feel its intellectual depth, and discover your own emotions. Tbilisi is one of Europe’s oldest capitals, serving as Georgia’s cultural, political, and economic center for 15 centuries. Beyond its formal status, the city has an atmosphere that, once experienced, will leave you longing to return time and again.",
    },
    region: { ka: "თბილისი", en: "Tbilisi" },
    city: "2232",
    link: "https://www.google.com/maps/place/%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98/@41.7277221,44.8067638,11z/data=!3m1!4b1!4m6!3m5!1s0x40440cd7e64f626b:0x61d084ede2576ea3!8m2!3d41.6938026!4d44.8015168!16zL20vMGJtNGo?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D",
    description: { ka: "ბუნების ძეგლები", en: "Natural Monuments" },
    name: { ka: "მეტეხის ტაძარი", en: "Metekhi Church" },
    address: {
      ka: "მეტეხის 1, თბილისი, საქართველო",
      en: "Metekhi St 1, Tbilisi, Georgia",
    },
    phone: "595 03 60 47",
    website:
      "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
    workingHours: {
      monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
    },
    regionTime: [
      {
        city: { ka: "ბათუმი", en: "Batumi" },
        time: { ka: "5:30 სთ", en: "5h 30m" },
      },
      {
        city: { ka: "ქუთაისი", en: "Kutaisi" },
        time: { ka: "3:25 სთ", en: "3h 25m" },
      },
      {
        city: { ka: "თელავი", en: "Telavi" },
        time: { ka: "1:50 სთ", en: "1h 50m" },
      },
    ],
    anotherSection: {
      name1: {
        ka: "ძველი თბილისის ღირსშესანიშნაობები",
        en: "Old Tbilisi Attractions",
      },
      description: {
        ka: "მთავარი ტურისტული უბანი ქალაქის ისტორიული ნაწილი - „ძველი თბილისია“, რომელიც ადრეული შუა საუკუნეებიდან შენდებოდა. ეს ტერიტორია, დაახლოებით, 2 კვადრატულ კილომეტრს მოიცავს და აქ თავმოყრილია ის ღირსშესანიშნაობები, რომლებიც აუცილებლად უნდა ნახო. \n\n თბილისის ნებისმიერ სავიზიტო ბარათზე შეგხვდება კლდეზე აშენებული დიდებული ტაძრის ფოტო. ეს მეტეხის ტაძარია - თბილისის ერთ-ერთი ყველაზე მნიშვნელოვანი ძეგლი. ტაძრის ეზოში ამ ტაძრის თავდაპირველი ამშენებლისა და თბილისის დამაარსებელი მეფის - ვახტანგ გორგასლის მონუმენტი დგას. თუ მეფესთან ერთად მეტეხის ტაძრის ეზოდან გადმოიხედავ, „ძველ თბილისს“ ხელისგულზე დაინახავ.",
        en: "The main tourist district is the historic part of the city—'Old Tbilisi,' which has been developing since the early Middle Ages. This area, covering approximately 2 square kilometers, is home to must-see attractions. \n\n On any Tbilisi postcard, you’ll find a photo of a magnificent church built on a cliff. This is Metekhi Church, one of Tbilisi’s most significant monuments. In the church’s courtyard stands a monument to its original builder and the founder of Tbilisi, King Vakhtang Gorgasali. From the courtyard, alongside the king, you can take in a panoramic view of 'Old Tbilisi.'",
      },
      image: "/places/metekhi-church-3.webp",
      name2: {
        ka: "თბილისის მრავალფეროვანი კულტურა",
        en: "Tbilisi’s Diverse Culture",
      },
      name3: { ka: "თბილისის მთაწმინდა", en: "Tbilisi’s Mtatsminda" },
      image2: "/places/5.webp",
      description2: {
        ka: "აქ ერთ სივრცეშია თავმოყრილი ქართული მართლმადიდებლური, სომხური გრიგორიანული და კათოლიკური ეკლესიები, ასევე უნიკალური მეჩეთი, სადაც შიიტები და სუნიტები ერთად ლოცულობენ, იქვე ახლოსაა სინაგოგაც. თბილისი მრავალეთნოსური და მრავალრელიგიური ქალაქია, რადგან ყოველთვის მშობლიური სახლი იყო სხვადასხვა კულტურისა და რელიგიის ადამიანებისთვის. \n\n „ძველი თბილისის“ განსაკუთრებული ეგზოტიკაა XVIII საუკუნის ჭრელი, გუმბათოვანი აბანოები, სადაც ბუნებრივად თბილი, გოგირდიანი წყალი მოდის. ლეგენდის თანახმად, სწორედ ამ სამკურნალო წყლების გამო გადაწყვიტა მეფე ვახტანგ გორგასალმა ამ ადგილას ქალაქის დაარსება. \n\n აქ ყოველ ფეხის ნაბიჯზე შეხვდები რესტორნებს, კაფეებსა და პაბებს - ნაციონალური და ევროპული მენიუებით, სასმელებითა და კარგი მუსიკით. \n\n თბილისი და ზოგადად საქართველო სამოთხეა გურმანებისთვის - აქ კულინარია ხელოვნებაა. ქართული სამზარეულო, გეოგრაფიული მდებარეობის დამსახურებით, საუკუნეების განმავლობაში იზიარებდა ევროპისა და ახლო აღმოსავლეთის სამზარეულოების საუკეთესო ტრადიციებს და ქმნიდა თავის ინდივიდუალურ, დახვეწილ გემოებს.",
        en: "Here, Georgian Orthodox, Armenian Gregorian, and Catholic churches coexist alongside a unique mosque where Shia and Sunni Muslims pray together, with a synagogue nearby. Tbilisi is a multi-ethnic and multi-religious city, always a home to people of diverse cultures and faiths. \n\n The unique charm of 'Old Tbilisi' includes the colorful, domed bathhouses of the 18th century, fed by naturally warm, sulfur-rich springs. According to legend, it was these therapeutic waters that inspired King Vakhtang Gorgasali to found the city here. \n\n At every step, you’ll find restaurants, cafes, and pubs offering national and European menus, drinks, and great music. \n\n Tbilisi, and Georgia in general, is a paradise for food lovers—here, cuisine is an art form. Thanks to its geographical location, Georgian cuisine has absorbed the best traditions of European and Middle Eastern culinary arts over centuries, creating its own refined, unique flavors.",
      },
      description3: {
        ka: "გაითვალისწინე, რომ ყველაზე გემრიელი ყავის სურნელი გაბრიაძის მარიონეტების თეატრის ჯადოსნურ მოედანზე დაგხვდება, სადაც ყავასაც დააგემოვნებ და 12:00-სა და 19:00 საათზე საოცარი მუსიკალური და თოჯინური წარმოდგენის – „ცხოვრების წრებრუნვის“ მაყურებელიც გახდები. \n\n ძველ ქუჩებზე უნიკალურ „თბილისურ მოდერნსაც“ ნახავ - მდიდრულ შენობებს მორთული ფასადებით, მოხატული სადარბაზოებითა და ემოციური ისტორიებით.",
        en: "Note that the most delicious coffee aroma awaits you at the magical square of Gabriadze Marionette Theater, where you can savor coffee and, at 12:00 and 19:00, become a spectator of the enchanting musical and puppet performance, 'The Cycle of Life.' \n\n In the old streets, you’ll also discover unique 'Tbilisi Modern'—lavish buildings with ornate facades, painted entryways, and emotional stories.",
      },
      name4: { ka: "რუსთაველის გამზირი", en: "Rustaveli Avenue" },
      name5: { ka: "ნარიყალას ციხე", en: "Narikala Fortress" },
      description4: {
        ka: "ქალაქის მთავარი არტერია რუსთაველის გამზირია, რომლის სიგრძე 1,5 კმ-ია. აქ ერთმანეთის გვერდით უნიკალური ისტორიული შენობები დგას: საქართველოს პარლამენტი, ოპერის თეატრი, ეროვნული გალერეა, რუსთაველის თეატრი, თანამედროვე ხელოვნების მუზეუმი, ეროვნული ბიბლიოთეკა და ქაშვეთის ეკლესია. გამზირზე არის მაღაზიები, კაფეები და გამწვანებული სკვერები.",
        en: "The city’s main artery is Rustaveli Avenue, stretching 1.5 km. Here, unique historical buildings stand side by side: the Georgian Parliament, the Opera House, the National Gallery, Rustaveli Theater, the Museum of Modern Art, the National Library, and Kashveti Church. The avenue also features shops, cafes, and green squares.",
      },
      description5: {
        ka: "ნარიყალას ციხე თბილისის ერთ-ერთი უძველესი ძეგლია, რომელიც ქალაქს გადაჰყურებს. IV საუკუნეში დაარსებული ეს ციხე-სიმაგრე თბილისის ისტორიისა და კულტურის სიმბოლოა. ციხის გალავნიდან იშლება ქალაქის განსაცვიფრებელი ხედები, განსაკუთრებით საღამოს, როდესაც თბილისის განათებები ცოცხლდება.",
        en: "Narikala Fortress is one of Tbilisi’s oldest monuments, overlooking the city. Founded in the 4th century, this fortress is a symbol of Tbilisi’s history and culture. From its walls, you can enjoy breathtaking views of the city, especially in the evening when Tbilisi’s lights come alive.",
      },
    },
    range: [{ min: { ka: "212", en: "212" } }, { max: { ka: "4", en: "4" } }],
    destinations: [
      {
        id: "1",
        title: {
          ka: "რუსთაველის გამზირის არქიტექტურული ტური",
          en: "Rustaveli Avenue Architectural Tour",
        },
        description: {
          ka: "თუ ხელოვნება გიტაცებს, მაშინ რუსთაველის გამზირის არქიტექტურული ტური აუცილებლად უნდა დაგეგმო, რადგან მის ფარგლებში თბილისის კონსერვატორიას, ქაშუეთის ეკლესიას და ოპერისა და ბალეტის თეატრს მოივლი, ასევე რამდენიმე გასაოცარ მუზეუმს ესტუმრები და მთაწმინდის ვიწრო ქუჩებითაც დატკბები.",
          en: "If you’re passionate about art, you must plan an architectural tour of Rustaveli Avenue, where you’ll visit the Tbilisi Conservatoire, Kashveti Church, and the Opera and Ballet Theatre, as well as explore several stunning museums and enjoy the narrow streets of Mtatsminda.",
        },
        image: "/places/rustaveli-drama-theater.webp",
        duration: { ka: "2-4სთ", en: "2-4h" },
        activities: { ka: "24 სანახაობა", en: "24 Attractions" },
        currency: { ka: "3კმ", en: "3km" },
      },
      {
        id: "2",
        title: { ka: "ორდღიანი ტური ბათუმში", en: "Two-Day Batumi Tour" },
        description: {
          ka: "აღმოაჩინე შავიზღვისპირეთის საოცრება, ესტუმრე ბათუმის ბოტანიკურ ბაღს და ორდღიანი ტურის ფარგლებში, იხილე მომნუსხველი ღირშესანიშნაობები, მათ შორის - დელფინარიუმი, ბათუმის ბულვარი, ალი და ნინო, ქორწინების სასახლე და მოცეკვავე შადრევანი. მიიღე უნიკალური გამოცდილება და აღბეჭდე ფირზე აჭარის თანამედროვე პეიზაჟები.",
          en: "Discover the wonders of the Black Sea coast, visit the Batumi Botanical Garden, and during a two-day tour, explore captivating attractions, including the Dolphinarium, Batumi Boulevard, Ali and Nino, the Marriage Palace, and the Dancing Fountain. Gain a unique experience and capture Adjara’s modern landscapes on film.",
        },
        image: "/places/old-tbilisi-dzveli-tbilisi-2.webp",
        duration: { ka: "2-4სთ", en: "2-4h" },
        activities: { ka: "26 სანახაობა", en: "26 Attractions" },
        currency: { ka: "7კმ", en: "7km" },
      },
    ],
    array: [
      {
        image: "/places/chakapuli-gnta.webp",
        header: { ka: "ჩაქაპული", en: "Chakapuli" },
        title: { ka: "დააგემოვნე", en: "Taste" },
        text: {
          ka: "მრავალფეროვანი ქართული კერძები",
          en: "Diverse Georgian Dishes",
        },
        description: {
          ka: "თბილისში ყოველ ფეხის ნაბიჯზე შეხვდები რესტორნებს, კაფეებსა და პაბებს, სადაც ნაციონალური და ევროპული მენიუები დაგხვდება - სასმელებითა და კარგი მუსიკით. აქაური თავგადასავალი შენს კულინარიულ გამოცდილებას კიდევ უფრო გაამდიდრებს და უნიკალურ გემოებს აღმოგაჩენინებს.",
          en: "In Tbilisi, you’ll find restaurants, cafes, and pubs at every step, offering national and European menus with drinks and great music. This adventure will enrich your culinary experience and introduce you to unique flavors.",
        },
      },
      {
        image: "/places/chikhirtma-gnta.webp",
        header: { ka: "ჩიხირთმა", en: "Chikhirtma" },
        title: { ka: "", en: "" },
        text: { ka: "", en: "" },
        description: { ka: "", en: "" },
      },
    ],
    slideCard: [
      {
        title: { ka: "პრომეთეს მღვიმე", en: "Prometheus Cave" },
        src: "/slidecard/prometheus-cave-gnta.webp",
        modalSrc: "/slidecard/prometheus-cave-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        text: {
          ka: "აღმოაჩინე პოპულარული სანახაობები",
          en: "Discover Popular Attractions",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: {
          ka: "დათვის ტბა - ბუნების ძეგლი ოკაცეს კანიონში",
          en: "Datvi Lake - Natural Monument in Okatse Canyon",
        },
        src: "/slidecard/datvi-lake-gnta.webp",
        modalSrc: "/slidecard/datvi-lake-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: {
          ka: "კინჩხის (ოკაცეს) ჩანჩქერი - ხონის ბუნებრივი ძეგლი",
          en: "Kinchkha (Okatse) Waterfall - Khoni Natural Monument",
        },
        src: "/slidecard/kinchkha-waterfall-gnta.webp",
        modalSrc: "/slidecard/kinchkha-waterfall-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: {
          ka: "ხონის მხარეთმცოდნეობის მუზეუმი",
          en: "Khoni Museum of Local Lore",
        },
        src: "/slidecard/khoni-museum-of-local-lore.webp",
        modalSrc: "/slidecard/khoni-museum-of-local-lore.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: { ka: "სასტუმრო პრომეთე", en: "Hotel Prometheus" },
        src: "/slidecard/hotel-prometheus-gnta.webp",
        modalSrc: "/slidecard/hotel-prometheus-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: { ka: "ლომინას ტბა", en: "Lomina Lake" },
        src: "/slidecard/lomina-gnta.webp",
        modalSrc: "/slidecard/lomina-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: { ka: "ბღერის მღვიმე", en: "Bgheri Cave" },
        src: "/slidecard/bgheri-cave-natural-monument.webp",
        modalSrc: "/slidecard/bgheri-cave-natural-monument.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
    ],
    ukrGeoCharm: [
      {
        title: { ka: "აღმოაჩინე", en: "Discover" },
        name: { ka: "კულტუული ძეგლები", en: "Cultural Monuments" },
        image: "/places/arts-and-culture-in-georgia.webp",
      },
      {
        name: { ka: "ხელოვნება და კულტურა", en: "Art and Culture" },
        image: "/places/food-and-wine-georgia.webp",
      },
      {
        name: { ka: "სამზარეულო და ღვინო", en: "Cuisine and Wine" },
        image: "/places/city-breaks-georgia.webp",
      },
    ],
  },

  // 3 index

  {
    title: { ka: "სტეფანწმინდა", en: "Stepantsminda" },
    src: "/places/stepantsminda-gnta.webp",
    additionalDescription: {
      ka: "საქართველოს რუკაზე სტეფანწმინდა გამორჩეული ადგილია. აქედან 11 კმ-ში ქვეყნის ჩრდილოეთი საზღვარია და სწორედ აქ გადის ევროპისა და აზიის კვეთაზე ერთ-ერთი ყველაზე ძველი გზა.",
      en: "Stepantsminda holds a unique place on Georgia’s map. Just 11 km away lies the country’s northern border, and one of the oldest routes connecting Europe and Asia passes through here.",
    },
    region: { ka: "მცხეთა-მთიანეთი", en: "Mtskheta-Mtianeti" },
    city: "232323",
    link: "https://www.google.com/maps/place/%E1%83%A1%E1%83%A2%E1%83%94%E1%83%A4%E1%83%90%E1%83%9C%E1%83%AC%E1%83%9B%E1%83%98%E1%83%9C%E1%83%93%E1%83%90/@42.657029,44.6308047,15z/data=!3m1!4b1!4m5!3m4!1s0x4045351b5859a157:0xf8d6751dcb058582!8m2!3d42.660268!4d44.641143?shorturl=1",
    description: { ka: "ბუნების ძეგლები", en: "Natural Monuments" },
    name: { ka: "გერგეტის სამება", en: "Gergeti Trinity Church" },
    address: {
      ka: "გერგეტი, სტეფანწმინდა, საქართველო",
      en: "Gergeti, Stepantsminda, Georgia",
    },
    phone: "595 03 60 47",
    website:
      "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
    workingHours: {
      monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
    },
    regionTime: [
      {
        city: { ka: "თბილისი", en: "Tbilisi" },
        time: { ka: "2:55 სთ", en: "2h 55m" },
      },
      {
        city: { ka: "ქუთაისი", en: "Kutaisi" },
        time: { ka: "5:30 სთ", en: "5h 30m" },
      },
      {
        city: { ka: "ბათუმი", en: "Batumi" },
        time: { ka: "7:40 სთ", en: "7h 40m" },
      },
    ],
    anotherSection: {
      name1: {
        ka: "რას ნახავ სტეფანწმინდაში?",
        en: "What to See in Stepantsminda?",
      },
      description: {
        ka: "სტეფანწმინდის მთავარი მშვენება მყინვარწვერია, იგივე მწვერვალი „ყაზბეგი“, რომელიც ალპინისტებში და, ზოგადად, მთის სპორტის მოყვარულებში დღემდე დიდ ინტერესს იწვევს. მყინვარწვერის უმაღლესი წერტილიდან - 5054 მეტრიდან დანახული სამყარო კი გამაოგნებლად ლამაზია.",
        en: "The main attraction of Stepantsminda is Mount Kazbek, also known as Mkinvartsveri, which continues to captivate alpinists and mountain sports enthusiasts. The view from its highest point at 5,054 meters is breathtakingly beautiful.",
      },
      image: "/places/paragliding-in-gudauri-mount-kudebi-3.webp",
      name2: {
        ka: "საინტერესო მარშრუტები სტეფანწმინდიდან",
        en: "Interesting Routes from Stepantsminda",
      },
      name3: { ka: "ადგილობრივი კულტურა", en: "Local Culture" },
      image2: "/places/gergeti-church-in-georgia.webp",
      description2: {
        ka: "სტეფანწმინდა მყინვარწვერის ძირში მდებარეობს, ამიტომ აქ ყოველთვის გრილა და აუცილებლად გაიყოლე თბილი ტანისამოსი. ისიც გაითვალისწინე, რომ გუდაური-კობის საბაგირო გონდოლით დაახლოებით 40 წუთში ჩახვალ კურორტ გუდაურის სასრიალო სივრცეში. \n\n სტეფანწმინდა (ყოფილი ყაზბეგი) აღმოსავლეთ საქართველოში მდინარე თერგის ხეობაში მდებარეობს, რომელიც საქართველოში სიდიდით მესამე მდინარეა. სტეფანწმინდის დაარსების თარიღი უცნობია, თუმცა აქ ძვ.წ. VI-V საუკუნეების განძია აღმოჩენილი. \n\n ადგილობრივ მოსახლეობას ბევრი დღესასწაული აქვს, მათ შორის ათენგენობა, ყაზბეგობა და გერგეტობა. ამ დღეებში აქ უამრავი ტურისტი იყრის თავს და საზეიმო განწყობაა კაფეებსა და რესტორნებში. სტეფანწმინდაში აუცილებლად უნდა გასინჯო აქაური, განთქმული ხინკალი, ვეგეტარიანელებისთვის კი საინტერესო კერძია ტრადიციული „ფხლოვანა“ - ხაჭაპური მცენარეული გულსართით. \n\n თუ სტეფანწმინდის ცხოვრებაზე, ადგილობრივ კულტურასა და ტრადიციებზე მეტის გაგება გსურს, სტეფანწმინდის ისტორიულ მუზეუმს უნდა ესტუმრო, რომელიც ქართველი მწერლის ალექსანდრე ყაზბეგის მემორიალურ სახლშია განთავსებული. აქ შეგიძლია არა მარტო ხევის, არამედ კავკასიური კულტურისთვის, რეგიონის ყოფისთვის დამახასიათებელი ეთნოგრაფიული მასალა, გამოყენებითი ხელოვნების ნიმუშები და ადგილობრივი მხატვრების ნამუშევრებიც დაათვალიერო.",
        en: "Stepantsminda is located at the foot of Mount Kazbek, so it’s always cool here—be sure to bring warm clothing. Note that the Gudauri-Kobi cable car takes about 40 minutes to reach the ski slopes of Gudauri resort. \n\n Stepantsminda (formerly Kazbegi) lies in eastern Georgia in the Tergi River valley, the third largest river in Georgia. The founding date of Stepantsminda is unknown, but treasures from the 6th–5th centuries BCE have been discovered here. \n\n The local population celebrates many festivals, including Atengenoba, Kazbegoba, and Gergetoba. During these times, numerous tourists gather, and cafes and restaurants are filled with festive spirit. In Stepantsminda, you must try the famous local khinkali, and for vegetarians, the traditional 'Pkhovana'—khachapuri with a vegetable filling—is a delightful option. \n\n To learn more about Stepantsminda’s life, local culture, and traditions, visit the Stepantsminda Historical Museum, located in the memorial house of Georgian writer Alexandre Kazbegi. Here, you can explore ethnographic materials, applied art samples, and works by local artists, characteristic of Khevi and Caucasian culture.",
      },
      description3: {
        ka: "სტეფანწმინდიდან სხვადასხვა ტურისტული მარშრუტი გადის და შეგიძლია, ფეხით მოაწყო ლაშქრობა, საკუთარი მანქანით იმგზავრო ან ჯიპტურებით ისარგებლო - გააჩნია, რა მიმართულებას აირჩევ. თუმცა არის რამდენიმე ადგილი, რომლებიც არ უნდა გამოტოვო. ესენია:",
        en: "Various tourist routes start from Stepantsminda, allowing you to hike, travel by car, or join jeep tours, depending on your chosen direction. However, there are a few must-visit places, including:",
      },
      name4: { ka: "გერგეტის სამება", en: "Gergeti Trinity Church" },
      name5: { ka: "", en: "" },
      description4: {
        ka: "გერგეტის სამება - სტეფანწმინდის გვირგვინი და ქართული ხუროთმოძღვრების გამორჩეული ძეგლი. ტაძარი დაახლოებით XIV საუკუნეშია აგებული. ძველად, როცა საქართველოს მტერი შემოესეოდა, აქ ინახავდნენ ეკლესიის საგანძურს გადასარჩენად, რადგან იქამდე მისასვლელად რთული გზა იყო. დღეს სტეფანწმინდიდან გერგეტზე ასასვლელად სამანქანო გზაა, თუმცა შეგიძლია ჯიპტურითა და გიდის მომსახურებითაც ისარგებლო. \n\n ჯუთა - ევროპის ერთ-ერთი უმაღლესი სოფელი. ის ზღვის დონიდან 2 222 მეტრზეა და თანაც აქ მუდმივად ცხოვრობენ ადამიანები. ჯუთამდეც სამანქანო გზა მიდის. \n\n დარიალის ხეობა - ეს ხეობა მდინარე თერგის ერთ-ერთი მონაკვეთი და მოგზაურთა საყვარელი ადგილია. ხეობა მდიდარია ჩანჩქერებითა და ტბებით, რომელთა შორის აღსანიშნავია გველეთის ჩანჩქერი და გულის ფორმის ტბა. აქ უკვე შეგიძლია კარვებით ახვიდე, სპეციალურ საკემპინგო ადგილზე დაბანაკდე, დატკბე შთაბეჭდილებებით, გადაიღო ბევრი ლამაზი ფოტო და აქაური სილამაზე მეგობრებს გაუზიარო.",
        en: "Gergeti Trinity Church is the crown of Stepantsminda and a distinguished monument of Georgian architecture, built around the 14th century. In ancient times, church treasures were safeguarded here during enemy invasions due to the challenging access route. Today, a drivable road leads from Stepantsminda to Gergeti, though jeep tours and guides are also available. \n\n Juta is one of Europe’s highest villages, located at 2,222 meters above sea level, with permanent residents. A drivable road leads to Juta. \n\n Dariali Gorge, a segment of the Tergi River, is a favorite among travelers. The gorge is rich with waterfalls and lakes, including the notable Gveleti Waterfall and heart-shaped lake. Here, you can camp at designated sites, soak in the impressions, take stunning photos, and share the area’s beauty with friends.",
      },
      description5: { ka: "", en: "" },
    },
    range: [{ min: { ka: "21", en: "21" } }, { max: { ka: "19", en: "19" } }],
    destinations: [
      {
        id: "1",
        title: {
          ka: "შიდა ქართლისა და მცხეთის ერთდღიანი ტური",
          en: "One-Day Tour of Shida Kartli and Mtskheta",
        },
        description: {
          ka: "თუ გინდა კავკასიის ერთ-ერთ უძველეს დასახლებას - უფლისციხეს ესტუმრო, კლდოვანი მთის წვერზე არსებული ჯვრის მონასტერი მოინახულო, ისტორიული ციხესიმაგრე დაათვალიერო და გამორჩეული ქართული ტაძარი - სვეტიცხოველი იხილო, მაშინ შიდა ქართლისა და მცხეთის ერთდღიანი ტური აუცილებლად უნდა დაგეგმო.",
          en: "If you want to visit one of the Caucasus’ oldest settlements, Uplistsikhe, explore the Jvari Monastery atop a rocky mountain, tour a historic fortress, and see the distinguished Georgian cathedral Svetitskhoveli, you must plan a one-day tour of Shida Kartli and Mtskheta.",
        },
        image: "/places/jvari-monastery(1).webp",
        duration: { ka: "6-8სთ", en: "6-8h" },
        activities: { ka: "9 სანახაობა", en: "9 Attractions" },
        currency: { ka: "95კმ", en: "95km" },
      },
      {
        id: "2",
        title: { ka: "ორდღიანი ტური ყაზბეგში", en: "Two-Day Tour in Kazbegi" },
        description: {
          ka: "ამ მხარეში უძველეს ციხე-კოშკებს, მთის წვერზე აგებულ შუასაუკუნეების ტაძრებს, შესანიშნავ ხედებსა და დაუჯერებელი სილამაზის მქონე ადგილებს შეხვდები, ბუნების სილამაზისა და კულტურის ჰარმონიული შერწყმა კი შენს ორდღიან მოგზაურობას კიდევ უფრო საინტერესოსა და მიმზიდველს გახდის.",
          en: "In this region, you’ll encounter ancient fortresses, medieval churches built atop mountains, stunning views, and places of incredible beauty. The harmonious blend of nature and culture will make your two-day journey even more fascinating and appealing.",
        },
        image: "/places/stepantsminda-gergeti-stepantsminda-gnta.webp",
        duration: { ka: "24-28სთ", en: "24-28h" },
        activities: { ka: "21 სანახაობა", en: "21 Attractions" },
        currency: { ka: "125კმ", en: "125km" },
      },
    ],
    array: [
      {
        image: "/places/dambalkhacho-gnta.webp",
        header: { ka: "დამბალხაჭო", en: "Dambalkhacho" },
        title: { ka: "დააგემოვნე", en: "Taste" },
        text: {
          ka: "მრავალფეროვანი ქართული კერძები",
          en: "Diverse Georgian Dishes",
        },
        description: {
          ka: "მცხეთა-მთიანეთის ტრადიციული კერძებიდან ხინკალი ყველაზე გამორჩეული და ყველასთვის განსაკუთრებით საყვარელი კერძია, თუმცა, მთიულეთში, ფშავსა და ხევსურეთში, კიდევ ბევრი გემრიელი და დასამახსოვრებელი კერძი იციან, როგორებიცაა: დამბალხაჭო, ჩადუნა, მთიულური მხლოვანა, ხავიწი, ღურღუჭელი, კუს ერბო და სხვა.",
          en: "Among Mtskheta-Mtianeti’s traditional dishes, khinkali is the most prominent and beloved, but in Mtiuleti, Pshavi, and Khevsureti, there are many other delicious and memorable dishes, such as dambalkhacho, chaduna, Mtiuluri mkhlovana, khavits, ghurghuteli, kus erbo, and more.",
        },
      },
      {
        image: "/places/khinkali-gnta.webp",
        header: { ka: "ხინკალი", en: "Khinkali" },
        title: { ka: "", en: "" },
        text: { ka: "", en: "" },
        description: { ka: "", en: "" },
      },
    ],
    slideCard: [
      {
        title: { ka: "პრომეთეს მღვიმე", en: "Prometheus Cave" },
        src: "/slidecard/prometheus-cave-gnta.webp",
        modalSrc: "/slidecard/prometheus-cave-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        text: {
          ka: "აღმოაჩინე პოპულარული სანახაობები",
          en: "Discover Popular Attractions",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: {
          ka: "დათვის ტბა - ბუნების ძეგლი ოკაცეს კანიონში",
          en: "Datvi Lake - Natural Monument in Okatse Canyon",
        },
        src: "/slidecard/datvi-lake-gnta.webp",
        modalSrc: "/slidecard/datvi-lake-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: {
          ka: "კინჩხის (ოკაცეს) ჩანჩქერი - ხონის ბუნებრივი ძეგლი",
          en: "Kinchkha (Okatse) Waterfall - Khoni Natural Monument",
        },
        src: "/slidecard/kinchkha-waterfall-gnta.webp",
        modalSrc: "/slidecard/kinchkha-waterfall-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: {
          ka: "ხონის მხარეთმცოდნეობის მუზეუმი",
          en: "Khoni Museum of Local Lore",
        },
        src: "/slidecard/khoni-museum-of-local-lore.webp",
        modalSrc: "/slidecard/khoni-museum-of-local-lore.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: { ka: "სასტუმრო პრომეთე", en: "Hotel Prometheus" },
        src: "/slidecard/hotel-prometheus-gnta.webp",
        modalSrc: "/slidecard/hotel-prometheus-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: { ka: "ლომინას ტბა", en: "Lomina Lake" },
        src: "/slidecard/lomina-gnta.webp",
        modalSrc: "/slidecard/lomina-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: { ka: "ბღერის მღვიმე", en: "Bgheri Cave" },
        src: "/slidecard/bgheri-cave-natural-monument.webp",
        modalSrc: "/slidecard/bgheri-cave-natural-monument.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
    ],
    ukrGeoCharm: [
      {
        title: { ka: "აღმოაჩინე", en: "Discover" },
        name: { ka: "კულტურული ძეგლები", en: "Cultural Monuments" },
        image: "/places/tower-of-ushguli.webp",
      },
      {
        name: { ka: "ხელოვნება და კულტურა", en: "Art and Culture" },
        image: "/places/arts-and-culture-in-georgia.webp",
      },
      {
        name: { ka: "სამზარეულო და ღვინო", en: "Cuisine and Wine" },
        image: "/places/food-and-wine-georgia.webp",
      },
    ],
  },

  // 4 index

  {
    title: { ka: "მესტია", en: "Mestia" },
    src: "/places/mestia-gnta.webp",
    additionalDescription: {
      ka: "თუ მესტიაში ერთხელ მაინც იმოგზაურებ, აქაური ბუნება და გასაოცარი ლანდშაფტები საოცარი შთაბეჭდილებებით აგავსებს.",
      en: "If you travel to Mestia even once, its nature and stunning landscapes will leave you with unforgettable impressions.",
    },
    region: { ka: "სამეგრელო-ზემო სვანეთი", en: "Samegrelo-Zemo Svaneti" },
    city: "2323",
    link: "https://www.google.com/maps/place/%E1%83%9B%E1%83%94%E1%83%A1%E1%83%A2%E1%83%98%E1%83%90/@43.0353789,42.679975,15z/data=!3m1!4b1!4m5!3m4!1s0x405bd976dbdf6305:0xd4e140f4c76dc486!8m2!3d43.0334614!4d42.6894803?shorturl=1",
    description: { ka: "ბუნების ძეგლები", en: "Natural Monuments" },
    name: {
      ka: "სვანეთის ისტორიულ-ეთნოგრაფიული მუზეუმი",
      en: "Svaneti Historical-Ethnographic Museum",
    },
    address: {
      ka: "მესტია, სამეგრელო-ზემო სვანეთი, საქართველო",
      en: "Mestia, Samegrelo-Zemo Svaneti, Georgia",
    },
    phone: "595 03 60 47",
    website:
      "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
    workingHours: {
      monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
    },
    regionTime: [
      {
        city: { ka: "თბილისი", en: "Tbilisi" },
        time: { ka: "7:10 სთ", en: "7h 10m" },
      },
      {
        city: { ka: "ქუთაისი", en: "Kutaisi" },
        time: { ka: "4:20 სთ", en: "4h 20m" },
      },
      {
        city: { ka: "ბათუმი", en: "Batumi" },
        time: { ka: "5:45 სთ", en: "5h 45m" },
      },
    ],
    anotherSection: {
      name1: {
        ka: "მესტიის მთავარი ღირსშესანიშნაობები",
        en: "Main Attractions of Mestia",
      },
      description: {
        ka: "ზუგდიდიდან მესტიისკენ მიმავალ 137 კმ-იან გზაზე სუბტროპიკულ გარემოს ალპური და სუბალპური ტყეები და მინდვრები ცვლის, თავისი მოჩუხჩუხე მდინარეებით. ეს გზა საქართველოს ყველაზე მაღალი მწვერვალების ძირამდე მიგიყვანს - პირქუშ შხარასთან და ქათქათა თეთნულდთან, რომელიც, ლეგენდის მიხედვით, თოვლში გაქვავებული პატარძალია.",
        en: "On the 137 km road from Zugdidi to Mestia, subtropical landscapes give way to alpine and subalpine forests and meadows with babbling rivers. This route leads to the foot of Georgia’s highest peaks—gloomy Shkhara and radiant Tetnuldi, which, according to legend, is a bride petrified in snow.",
      },
      image: "/places/ushba-mountain-gnta.webp",
      name2: {
        ka: "ლეგენდა უშბასა და თეთნულდზე",
        en: "Legend of Ushba and Tetnuldi",
      },
      name3: { ka: "მესტიის მდებარეობა", en: "Location of Mestia" },
      image2: "/places/gergeti-church-in-georgia.webp",
      description2: {
        ka: "სვანური ლეგენდა გვიამბობს, რომ ღარიბ უშბასა და მდიდარი ოჯახის ქალიშვილ თეთნულდს ერთმანეთი შეჰყვარებიათ. თეთნულდის ოჯახს ქალიშვილისთვის ღარიბ ვაჟთან ურთიერთობა აუკრძალავს. სასოწარკვეთილი თეთნულდი პატარძლის თეთრ კაბაში გამოწყობილა და ღმერთისთვის უთხოვია - რადგან მე და უშბას ერთად ყოფნას არ გვანებებენ, ისე გაგვაქვავე, ერთმანეთის ყურებაში მაინც ხელი ვერავინ შეგვიშალოსო. ასე გაჩნდა კავკასიონის ქედზე ორი ულამაზესი მწვერვალი - უშბა და თეთნულდი, რომლებიც ერთმანეთის პირისპირ დგანან და მარად ერთმანეთისკენ იყურებიან.",
        en: "A Svan legend tells of a poor man, Ushba, and Tetnuldi, a wealthy family’s daughter, who fell in love. Tetnuldi’s family forbade her from being with a poor man. In despair, Tetnuldi dressed in a white bridal gown and prayed to God: 'Since we cannot be together, petrify us so no one can stop us from gazing at each other.' Thus, two magnificent peaks—Ushba and Tetnuldi—arose on the Caucasus ridge, standing face-to-face, forever looking at each other.",
      },
      description3: {
        ka: "დაბა მესტია ზღვის დონიდან 1500 მეტრზე, კავკასიონისა და სვანეთის ქედს შორის, მესტიის მთების ქვაბულში, მდინარე ენგურის შენაკადების - მესტიაჭალისა და მულხრის ნაპირებზე მდებარეობს. ის „კლდის ვეფხვად“ წოდებული მთამსვლელის, მიხეილ ხერგიანის სამშობლოა, რომლის სახლ-მუზეუმიც ერთ-ერთია იმ ადგილებიდან, რომლებიც მესტიაში უნდა მოინახულო. აქ სვანურ საგვარეულო კოშკებსაც უნდა ესტუმრო, ისინი მესტიაში 45-ია - 25-მეტრიანი, 4-5-სართულიანი ციხე-ნაგებობები. კოშკები სვანური არქიტექტურისთვის დამახასიათებელი ქონგურებით სრულდება.",
        en: "The town of Mestia is located 1,500 meters above sea level, between the Caucasus and Svaneti ranges, in the basin of Mestia’s mountains, on the banks of the Enguri River’s tributaries—Mestiachala and Mulkhra. It is the birthplace of the mountaineer Mikheil Khergiani, known as the 'Tiger of the Cliffs,' whose house-museum is a must-visit in Mestia. You should also visit the Svan family towers, 45 in number, which are 25-meter, 4-5-story fortress-like structures topped with characteristic Svan cornices.",
      },
      name4: { ka: "საგანძურის მცველები", en: "Guardians of the Treasure" },
      name5: { ka: "", en: "" },
      description4: {
        ka: "მესტია ხშირად სახელმწიფო საგანძურის მცველის ფუნქციასაც ასრულებდა, რადგან ის მტრისთვის ძნელად მისადგომი იყო. ქართული საგანძურის ერთ ნაწილს სვანეთის ისტორიულ-ეთნოგრაფიულ მუზეუმში იხილავ.",
        en: "Mestia often served as a guardian of state treasures due to its inaccessibility to enemies. You can see part of Georgia’s treasures at the Svaneti Historical-Ethnographic Museum.",
      },
      description5: { ka: "", en: "" },
    },
    range: [{ min: { ka: "46", en: "46" } }, { max: { ka: "46", en: "46" } }],
    destinations: [
      {
        id: "1",
        title: { ka: "ორდღიანი ტური სვანეთში", en: "Two-Day Tour in Svaneti" },
        description: {
          ka: "თუ დაუვიწყარ თავგადასავალს ეძებ და ლეგენდებით სავსე მხარეებში მოგზაურობაც გიზიდავს, მაშინ სვანეთს უნდა ეწვიო და საქართველოს უმაღლესი მწვერვალი, ულამაზესი ბუნება, ხელუხლებელი ტყეები, კლდეებთან ჰარმონიულად შერწყმული კოშკოვანი სოფლები და მედიდურად აღმართული მთები უნდა მოინახულო.",
          en: "If you seek an unforgettable adventure and are drawn to regions full of legends, you must visit Svaneti to explore Georgia’s highest peak, stunning nature, pristine forests, tower-filled villages harmoniously blended with cliffs, and majestic mountains.",
        },
        image: "/places/upper-svaneti-gnta.webp",
        duration: { ka: "24-30სთ", en: "24-30h" },
        activities: { ka: "21 სანახაობა", en: "21 Attractions" },
        currency: { ka: "55კმ", en: "55km" },
      },
      {
        id: "2",
        title: { ka: "რაჭის ორდღიანი ტური", en: "Two-Day Tour in Racha" },
        description: {
          ka: "ამ ორდღიან ტურზე, რაჭაში, სხვადასხვა პერიოდის ქართული ხუროთმოძღვრების ნიმუშებს აღმოაჩენ, გამორჩეულ ადგილებს ესტუმრები და ისეთ კლიმატურ-ბალნეოლოგიური კურორტებს მოივლი, როგორიცაა შოვი და უწერა. Რაჭული თავგადასავლის განმავლობაში, ასევე ნახავ შაორის წყალსაცავს, ბარაკონს, ნიკორწმინდას და სხვა.",
          en: "On this two-day tour in Racha, you’ll discover samples of Georgian architecture from various periods, visit unique places, and explore climatic-balneo resorts like Shovi and Utsera. During your Racha adventure, you’ll also see the Shaori Reservoir, Barakoni, Nikortsminda, and more.",
        },
        image: "/places/lashkroba-shovi-udziro-tba-glola.webp",
        duration: { ka: "24-30სთ", en: "24-30h" },
        activities: {
          ka: "9 სანახაობა 6 აქტივობა",
          en: "9 Attractions 6 Activities",
        },
        currency: { ka: "75კმ", en: "75km" },
      },
    ],
    array: [
      {
        image: "/places/svan-khachapuri-gnta.webp",
        header: {
          ka: "სვანური ხაჭაპური - ფეტვრაალი",
          en: "Svan Khachapuri - Fetvraali",
        },
        title: { ka: "დააგემოვნე", en: "Taste" },
        text: {
          ka: "მრავალფეროვანი ქართული კერძები",
          en: "Diverse Georgian Dishes",
        },
        description: {
          ka: "ელარჯი, გებჟალია, მეგრული კუჭმაჭი, ფუჩხოლია, აჯიკა, მეგრული საცივი, კუბდარი, ჭვიშტარი, თაშმიჯაბი, სხვანური ხაჭაპური, ხარჩო - ეს იმ კერძების მცირე ჩამონათვალია, რომლებსაც გულგრილად ვერ ჩაუვლი როდესაც სამეგრელო-ზემო სვანეთში მოხვდები. სვანეთში ასევე საკმაოდ ნაყოფიერად მოიხმარენ მოცვს როგორც ჩაის, რაც შენს თავგადასავალს უფრო სურნელოვანს და ეგზოტიკურს გახდის.",
          en: "Elarji, gebzhalia, Megrelian kuchmachi, puchkholia, ajika, Megrelian satsivi, kubdari, chvishtari, tashmijabi, Svan khachapuri, kharcho—these are just a few dishes you can’t pass by indifferently in Samegrelo-Zemo Svaneti. In Svaneti, blueberries are also widely used as tea, adding a fragrant and exotic touch to your adventure.",
        },
      },
      {
        image: "/places/kubdari-gnta.webp",
        header: { ka: "კუბდარი", en: "Kubdari" },
        title: { ka: "", en: "" },
        text: { ka: "", en: "" },
        description: { ka: "", en: "" },
      },
    ],
    slideCard: [
      {
        title: { ka: "პრომეთეს მღვიმე", en: "Prometheus Cave" },
        src: "/slidecard/prometheus-cave-gnta.webp",
        modalSrc: "/slidecard/prometheus-cave-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        text: {
          ka: "აღმოაჩინე პოპულარული სანახაობები",
          en: "Discover Popular Attractions",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: {
          ka: "დათვის ტბა - ბუნების ძეგლი ოკაცეს კანიონში",
          en: "Datvi Lake - Natural Monument in Okatse Canyon",
        },
        src: "/slidecard/datvi-lake-gnta.webp",
        modalSrc: "/slidecard/datvi-lake-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: {
          ka: "კინჩხის (ოკაცეს) ჩანჩქერი - ხონის ბუნებრივი ძეგლი",
          en: "Kinchkha (Okatse) Waterfall - Khoni Natural Monument",
        },
        src: "/slidecard/kinchkha-waterfall-gnta.webp",
        modalSrc: "/slidecard/kinchkha-waterfall-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: {
          ka: "ხონის მხარეთმცოდნეობის მუზეუმი",
          en: "Khoni Museum of Local Lore",
        },
        src: "/slidecard/khoni-museum-of-local-lore.webp",
        modalSrc: "/slidecard/khoni-museum-of-local-lore.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: { ka: "სასტუმრო პრომეთე", en: "Hotel Prometheus" },
        src: "/slidecard/hotel-prometheus-gnta.webp",
        modalSrc: "/slidecard/hotel-prometheus-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: { ka: "ლომინას ტბა", en: "Lomina Lake" },
        src: "/slidecard/lomina-gnta.webp",
        modalSrc: "/slidecard/lomina-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: { ka: "ბღერის მღვიმე", en: "Bgheri Cave" },
        src: "/slidecard/bgheri-cave-natural-monument.webp",
        modalSrc: "/slidecard/bgheri-cave-natural-monument.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
    ],
    ukrGeoCharm: [
      {
        title: { ka: "აღმოაჩინე", en: "Discover" },
        name: { ka: "კულტურული ძეგლები", en: "Cultural Monuments" },
        image: "/places/tower-of-ushguli.webp",
      },
      {
        name: { ka: "ხელოვნება და კულტურა", en: "Art and Culture" },
        image: "/places/arts-and-culture-in-georgia.webp",
      },
      {
        name: { ka: "სამზარეულო და ღვინო", en: "Cuisine and Wine" },
        image: "/places/food-and-wine-georgia.webp",
      },
    ],
  },

  // 5 index

  {
    title: { ka: "მცხეთა", en: "Mtskheta" },
    src: "/places/mtskheta-gnta.webp",
    additionalDescription: {
      ka: "საქართველოს ბუნება მრავალფეროვან სანახაობას გთავაზობს, თუმცა ეს ერთ-ერთი ნამდვილად გამორჩეული ხედია - ადგილი, სადაც ორი დიდი მდინარე ერთმანეთს უერთდება. სწორედ ამ შესართავთან მდებარეობს ქალაქი მცხეთა - საუკუნოვანი ისტორიითა და გასაოცარი ძეგლებით, რომელიც მსოფლიოში ერთ-ერთი უძველესი, უწყვეტად დასახლებული ქალაქია.",
      en: "Georgia’s nature offers diverse attractions, but this is truly unique—a place where two great rivers meet. At this confluence lies the city of Mtskheta, with its centuries-old history and remarkable monuments, one of the world’s oldest continuously inhabited cities.",
    },
    region: { ka: "მცხეთა-მთიანეთი", en: "Mtskheta-Mtianeti" },
    city: "232323",
    link: "https://www.google.com/maps/place/%E1%83%9B%E1%83%AA%E1%83%AE%E1%83%94%E1%83%97%E1%83%90/@41.8455235,44.7009015,14z/data=!3m1!4b1!4m6!3m5!1s0x40446f787455a33b:0x77ae54d3155fc6c2!8m2!3d41.8454251!4d44.7202739!16zL20vMDI4NHdm?entry=ttu&g_ep=EgoyMDI1MDkxNC4wIKXMDSoASAFQAw%3D%3D",
    description: { ka: "ბუნების ძეგლები", en: "Natural Monuments" },
    name: {
      ka: "სვეტიცხოვლის საკათედრო ტაძარი",
      en: "Svetitskhoveli Cathedral",
    },
    address: {
      ka: "მცხეთა, მცხეთა-მთიანეთი, საქართველო",
      en: "Mtskheta, Mtskheta-Mtianeti, Georgia",
    },
    phone: "595 03 60 47",
    website:
      "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
    workingHours: {
      monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
    },
    regionTime: [
      {
        city: { ka: "თბილისი", en: "Tbilisi" },
        time: { ka: "0:20 სთ", en: "0h 20m" },
      },
      {
        city: { ka: "ქუთაისი", en: "Kutaisi" },
        time: { ka: "2:50 სთ", en: "2h 50m" },
      },
      {
        city: { ka: "ბათუმი", en: "Batumi" },
        time: { ka: "5:20 სთ", en: "5h 20m" },
      },
    ],
    anotherSection: {
      name1: { ka: "მცხეთის ისტორია", en: "History of Mtskheta" },
      description: {
        ka: "მცხეთა საქართველოს უძველესი დედაქალაქია და მისი დათვალიერება ქალაქ-მუზეუმად აღიარებული, უძველესი ცენტრალური უბნიდან უნდა დაიწყო; \n\n ეს ქალაქი მხოლოდ ქრისტიანულ ეპოქას არ ეკუთვნის. XX საუკუნის 30-იან წლებში წარმოებული არქეოლოგიური გათხრებით დადგინდა, რომ აქაურობა ჯერ კიდევ ბრინჯაოსა და გვიანდელი ბრინჯაოს ხანაში (ძვ.წ. III-II ათასწლეული) იყო დასახლებული. \n\n ლეგენდის თანახმად, ქალაქი მცხეთა ძვ.წ. I ათასწლეულში ეთნარქმა მცხეთოსმა - ბიბლიური ნოეს შთამომავალმა, ქართველთა ერთ-ერთმა ლეგენდარულმა წინაპარმა დააარსა, ხოლო მეფე ფარნავაზმა - უდიდესმა რეფორმატორმა მეფემ - ძვ.წ. IV საუკუნეში ქართლის (იბერიის) დედაქალაქად გამოაცხადა. \n\n მცხეთა დღემდე ინარჩუნებს კულტურულ-რელიგიური ცენტრის ფუნქციას და ამასთანავე, ქალაქი ტოლერანტული განწყობითაც გამოირჩევა - ისტორიულად აქ, ქართველებთან ერთად, ებრაელები და სხვა ეთნიკური ჯგუფებიც ცხოვრობდნენ.",
        en: "Mtskheta is Georgia’s ancient capital, and exploring it should begin from its UNESCO-recognized city-museum, the historic central district. \n\n This city is not solely tied to the Christian era. Archaeological excavations in the 1930s revealed that the area was inhabited as early as the Bronze and Late Bronze Ages (3rd–2nd millennium BCE). \n\n According to legend, Mtskheta was founded in the 1st millennium BCE by Ethnarch Mtskhetos, a descendant of the biblical Noah and a legendary ancestor of Georgians. King Pharnavaz, a great reformer king, declared it the capital of Kartli (Iberia) in the 4th century BCE. \n\n Mtskheta continues to serve as a cultural and religious center and is known for its tolerant atmosphere—historically, Georgians, Jews, and other ethnic groups lived here together.",
      },
      image: "/places/jvari-monastery.webp",
      name2: {
        ka: "ქრისტიანობა და მცხეთის არქიტექტურა",
        en: "Christianity and Mtskheta’s Architecture",
      },
      name3: {
        ka: "მცხეთის ღირსშესანიშნაობები",
        en: "Attractions of Mtskheta",
      },
      image2: "/places/dzalisi-archaeological-site-5.webp",
      description2: {
        ka: "საქართველოში ქრისტიანობა IV საუკუნის დასაწყისში სწორედ მცხეთიდან გავრცელდა. \n\n უძველეს ტაძრებს შეხვდები: სამთავროს წმ. ნინოს ეკლესია, რომელიც IV საუკუნით თარიღდება; ანტიოქია - წმინდა სტეფანე პირველმოწამის ეკლესია, რომელიც IV-V საუკუნეებში აიგო და მცხეთის ჯვრის - VI-VII საუკუნეების ტაძარი. \n\n განვითარებული ფეოდალიზმის ეპოქაში მცხეთაში შემდეგი ტაძრები აშენდა: სვეტიცხოველი დღევანდელი სახით - 1010-1129 წლებში, ხოლო სამთავროს საეკლესიო კომპლექსი - XI საუკუნის 30-იან წლებში. \n\n 1994 წელს ჯვრის ტაძარი, სვეტიცხოვლის საკათედრო ტაძარი და სამთავროს ტაძარი იუნესკომ მსოფლიო კულტურული მემკვიდრეობის ნუსხაში შეიტანა.",
        en: "Christianity in Georgia began spreading from Mtskheta in the early 4th century. \n\n You’ll encounter ancient churches: Samtavro St. Nino’s Church, dating to the 4th century; Antioch—St. Stephen the First Martyr’s Church, built in the 4th–5th centuries; and Jvari Monastery, a 6th–7th century church. \n\n During the developed feudal era, Mtskheta saw the construction of Svetitskhoveli Cathedral in its current form (1010–1129) and the Samtavro ecclesiastical complex in the 1130s. \n\n In 1994, Jvari Monastery, Svetitskhoveli Cathedral, and Samtavro Monastery were included in UNESCO’s World Cultural Heritage List.",
      },
      description3: {
        ka: "არა მარტო ქალაქ მცხეთაში, არამედ მცხეთის სოფლებშიც ბევრი ისტორიული, კულტურული და რელიგიური ძეგლი დაგხვდება, რომლებიც შენს ყურადღებას თავისი სიძველითა და მნიშვნელობით მიიქცევს.",
        en: "Not only in the city of Mtskheta but also in its surrounding villages, you’ll find many historical, cultural, and religious monuments that will capture your attention with their antiquity and significance.",
      },
      name4: { ka: "საგანძურის მცველები", en: "Guardians of the Treasure" },
      name5: { ka: "", en: "" },
      description4: {
        ka: "მათ შორისაა ძალისის კომპლექსი - მცხეთიდან 20 კმ-ში, სოფელ ძალისის აღმოსავლეთით, მდ. ნარეკვავის ორივე ნაპირზე აღმოჩენილი ანტიკური ხანის სამეფო ნაქალაქარი, სადაც ძვ.წ. II და ახ.წ. VIII საუკუნეებში აქტიური ცხოვრება მიმდინარეობდა. \n\n ძალისის მეზობლადაა სოფელი მუხრანი, რომელიც ძვ.წ. III-II საუკუნეებში დიდი მცხეთის გარეუბანი იყო. აქ გადიოდა მნიშვნელოვანი სავაჭრო-სამიმოსვლო გზები ანტიკურ და განვითარებულ ფეოდალურ ხანებში და მან დიდი როლი შეასრულა ქართლის (იბერიის) სამეფოს წარმოშობაში. მუხრანის ბაგრატიონთა შტო ქართლს 1658-1724 წლებში განაგებდა.",
        en: "Among them is the Dzalisi Complex, 20 km from Mtskheta, east of the village of Dzalisi, a royal city from the ancient era discovered on both banks of the Narekvavi River, where active life thrived from the 2nd century BCE to the 8th century CE. \n\n Nearby is the village of Mukhrani, a suburb of Greater Mtskheta in the 3rd–2nd centuries BCE. It was a key trade and travel route during ancient and developed feudal times, playing a significant role in the formation of the Kartli (Iberia) Kingdom. The Mukhrani branch of the Bagrationi dynasty ruled Kartli from 1658 to 1724.",
      },
      description5: { ka: "", en: "" },
    },
    range: [{ min: { ka: "26", en: "26" } }, { max: { ka: "2", en: "2" } }],
    destinations: [
      {
        id: "1",
        title: {
          ka: "ერთდღიანი ტური მცხეთაში",
          en: "One-Day Tour in Mtskheta",
        },
        description: {
          ka: "მცხეთა, ერთდღიანი გასეირნებისთვის შესანიშნავი ვარიანტია, სადაც საქართველოში ქრისტიანობის შემოსვლისა და გავრცელების სიმბოლოს - ჯვრის მონასტერს იხილავ, განსაკუთრებული სილამაზით მოელვარე სვეტიცხოვლის ტაძარს მოინახულებ, სამთავროს სამონასტრო კომპლექსს ესტუმრები და VI საუკუნეში აგებულ შიომღვიმის მონასტერსაც ეწვევი.",
          en: "Mtskheta is a perfect destination for a one-day trip, where you’ll see the symbol of Christianity’s arrival and spread in Georgia—Jvari Monastery, visit the stunningly beautiful Svetitskhoveli Cathedral, explore the Samtavro Monastery complex, and visit the 6th-century Shiomghvime Monastery.",
        },
        image: "/places/mtskheta.webp",
        duration: { ka: "4-6სთ", en: "4-6h" },
        activities: { ka: "12 სანახაობა", en: "12 Attractions" },
        currency: { ka: "25კმ", en: "25km" },
      },
      {
        id: "2",
        title: {
          ka: "შიდა ქართლისა და მცხეთის ერთდღიანი ტური",
          en: "One-Day Tour of Shida Kartli and Mtskheta",
        },
        description: {
          ka: "თუ გინდა კავკასიის ერთ-ერთ უძველეს დასახლებას - უფლისციხეს ესტუმრო, კლდოვანი მთის წვერზე არსებული ჯვრის მონასტერი მოინახულო, ისტორიული ციხესიმაგრე დაათვალიერო და გამორჩეული ქართული ტაძარი - სვეტიცხოველი იხილო, მაშინ შიდა ქართლისა და მცხეთის ერთდღიანი ტური აუცილებლად უნდა დაგეგმო.",
          en: "If you want to visit one of the Caucasus’ oldest settlements, Uplistsikhe, explore the Jvari Monastery atop a rocky mountain, tour a historic fortress, and see the distinguished Georgian cathedral Svetitskhoveli, you must plan a one-day tour of Shida Kartli and Mtskheta.",
        },
        image: "/places/jvari-monastery(1).webp",
        duration: { ka: "6-8სთ", en: "6-8h" },
        activities: { ka: "9 სანახაობა", en: "9 Attractions" },
        currency: { ka: "95კმ", en: "95km" },
      },
    ],
    array: [
      {
        image: "/places/dambalkhacho-gnta.webp",
        header: { ka: "დამბალხაჭო", en: "Dambalkhacho" },
        title: { ka: "დააგემოვნე", en: "Taste" },
        text: {
          ka: "მრავალფეროვანი ქართული კერძები",
          en: "Diverse Georgian Dishes",
        },
        description: {
          ka: "მცხეთა-მთიანეთის ტრადიციული კერძებიდან ხინკალი ყველაზე გამორჩეული და ყველასთვის განსაკუთრებით საყვარელი კერძია, თუმცა, მთიულეთში, ფშავსა და ხევსურეთში, კიდევ ბევრი გემრიელი და დასამახსოვრებელი კერძი იციან, როგორებიცაა: დამბალხაჭო, ჩადუნა, მთიულური მხლოვანა, ხავიწი, ღურღუჭელი, კუს ერბო და სხვა.",
          en: "Among Mtskheta-Mtianeti’s traditional dishes, khinkali is the most prominent and beloved, but in Mtiuleti, Pshavi, and Khevsureti, there are many other delicious and memorable dishes, such as dambalkhacho, chaduna, Mtiuluri mkhlovana, khavits, ghurghuteli, kus erbo, and more.",
        },
      },
      {
        image: "/places/khinkali-gnta.webp",
        header: { ka: "ხინკალი", en: "Khinkali" },
        title: { ka: "", en: "" },
        text: { ka: "", en: "" },
        description: { ka: "", en: "" },
      },
    ],
    slideCard: [
      {
        title: { ka: "პრომეთეს მღვიმე", en: "Prometheus Cave" },
        src: "/slidecard/prometheus-cave-gnta.webp",
        modalSrc: "/slidecard/prometheus-cave-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        text: {
          ka: "აღმოაჩინე პოპულარული სანახაობები",
          en: "Discover Popular Attractions",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: {
          ka: "დათვის ტბა - ბუნების ძეგლი ოკაცეს კანიონში",
          en: "Datvi Lake - Natural Monument in Okatse Canyon",
        },
        src: "/slidecard/datvi-lake-gnta.webp",
        modalSrc: "/slidecard/datvi-lake-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: {
          ka: "კინჩხის (ოკაცეს) ჩანჩქერი - ხონის ბუნებრივი ძეგლი",
          en: "Kinchkha (Okatse) Waterfall - Khoni Natural Monument",
        },
        src: "/slidecard/kinchkha-waterfall-gnta.webp",
        modalSrc: "/slidecard/kinchkha-waterfall-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: {
          ka: "ხონის მხარეთმცოდნეობის მუზეუმი",
          en: "Khoni Museum of Local Lore",
        },
        src: "/slidecard/khoni-museum-of-local-lore.webp",
        modalSrc: "/slidecard/khoni-museum-of-local-lore.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: { ka: "სასტუმრო პრომეთე", en: "Hotel Prometheus" },
        src: "/slidecard/hotel-prometheus-gnta.webp",
        modalSrc: "/slidecard/hotel-prometheus-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: { ka: "ლომინას ტბა", en: "Lomina Lake" },
        src: "/slidecard/lomina-gnta.webp",
        modalSrc: "/slidecard/lomina-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: { ka: "ბღერის მღვიმე", en: "Bgheri Cave" },
        src: "/slidecard/bgheri-cave-natural-monument.webp",
        modalSrc: "/slidecard/bgheri-cave-natural-monument.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
    ],
    ukrGeoCharm: [
      {
        title: { ka: "აღმოაჩინე", en: "Discover" },
        name: { ka: "კულტურული ძეგლები", en: "Cultural Monuments" },
        image: "/places/tower-of-ushguli.webp",
      },
      {
        name: { ka: "ხელოვნება და კულტურა", en: "Art and Culture" },
        image: "/places/arts-and-culture-in-georgia.webp",
      },
      {
        name: { ka: "სამზარეულო და ღვინო", en: "Cuisine and Wine" },
        image: "/places/food-and-wine-georgia.webp",
      },
    ],
  },

  // 6 index

  {
    title: { ka: "ბორჯომი", en: "Borjomi" },
    src: "/places/mineral-water-park-borjomi-central-park-resort-1.webp",
    additionalDescription: {
      ka: "მინერალურ წყალ „ბორჯომს“ (Borjomi) მსოფლიოს 32 ქვეყანაში შეხვდები და ის საქართველოს ერთგვარი სავიზიტო ბარათია. ქალაქი ბორჯომი კი საქართველოს ერთ-ერთი მნიშვნელოვანი კურორტია, სადაც სამკურნალო წყაროები, წიწვოვანი ტყეები და ჰაერი განსაკუთრებულად მარგებელი თვისებებით ხასიათდება.",
      en: "Borjomi mineral water is available in 32 countries worldwide and serves as a calling card for Georgia. The city of Borjomi is one of Georgia’s most important resorts, known for its therapeutic springs, coniferous forests, and uniquely beneficial air.",
    },
    region: { ka: "სამცხე-ჯავახეთი", en: "Samtskhe-Javakheti" },
    city: "23232323",
    link: "https://www.google.com/maps/place/%E1%83%91%E1%83%9D%E1%83%A0%E1%83%AF%E1%83%9D%E1%83%9B%E1%83%98/@41.8414874,43.3642226,14z/data=!3m1!4b1!4m5!3m4!1s0x404339f360b54c3f:0xf4d16cb6bafe1706!8m2!3d41.8399528!4d43.3907569?shorturl=1",
    description: { ka: "ბუნების ძეგლები", en: "Natural Monuments" },
    name: { ka: "ბორჯომის ცენტრალური პარკი", en: "Borjomi Central Park" },
    address: {
      ka: "ბორჯომი, სამცხე-ჯავახეთი, საქართველო",
      en: "Borjomi, Samtskhe-Javakheti, Georgia",
    },
    phone: "595 03 60 47",
    website: "https://apa.gov.ge/en/eco-tourism/Trails/borjomi-central-park",
    workingHours: {
      monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
      sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
    },
    regionTime: [
      {
        city: { ka: "თბილისი", en: "Tbilisi" },
        time: { ka: "2:00 სთ", en: "2h 00m" },
      },
      {
        city: { ka: "ბათუმი", en: "Batumi" },
        time: { ka: "4:15 სთ", en: "4h 15m" },
      },
      {
        city: { ka: "ქუთაისი", en: "Kutaisi" },
        time: { ka: "2:00 სთ", en: "2h 00m" },
      },
    ],
    anotherSection: {
      name1: { ka: "ბორჯომის ისტორია", en: "History of Borjomi" },
      description: {
        ka: "ბორჯომი ცნობილია თავისი მინერალური წყაროებით, რომლებიც XIX საუკუნეში რუსეთის იმპერიის მმართველობის ქვეშ გახდა ცნობილი. \n\n ამ პერიოდში ბორჯომი გარდაიქმნა მნიშვნელოვან კურორტად, სადაც რუსეთის სამეფო ოჯახის წევრები და არისტოკრატები ჩადიოდნენ სამკურნალოდ. \n\n მინერალური წყლის გარდა, ქალაქი გამოირჩევა თავისი ბუნებითა და ისტორიული ძეგლებით, როგორიცაა ლიკანის სასახლე, რომელიც რომანოვების ზაფხულის რეზიდენციად მსახურობდა.",
        en: "Borjomi is renowned for its mineral springs, which gained fame in the 19th century under Russian Empire rule. \n\n During this period, Borjomi transformed into a prominent resort, attracting members of the Russian imperial family and aristocracy for treatment. \n\n Beyond its mineral water, the city is distinguished by its natural beauty and historical landmarks, such as Likani Palace, which served as a summer residence for the Romanovs.",
      },
      image: "/places/jvari-monastery.webp",
      name2: {
        ka: "ბორჯომის ბუნება და ჯანმრთელობა",
        en: "Borjomi’s Nature and Health",
      },
      name3: {
        ka: "ბორჯომის ღირსშესანიშნაობები",
        en: "Attractions of Borjomi",
      },
      image2: "/places/dzalisi-archaeological-site-5.webp",
      description2: {
        ka: "ბორჯომის მინერალური წყაროები ცნობილია თავისი სამკურნალო თვისებებით, განსაკუთრებით საჭმლის მომნელებელი სისტემისა და მეტაბოლიზმის გასაუმჯობესებლად. \n\n ბორჯომი-ხარაგაულის ეროვნული პარკი, ერთ-ერთი უდიდესი ეროვნული პარკი ევროპაში, გთავაზობთ საფეხმავლო ბილიკებს, სადაც შეგიძლია დატკბე წიწვოვანი ტყეებითა და თვალწარმტაცი ხედებით. \n\n ქალაქის ჰაერი, გაჯერებული ფიჭვისა და ნაძვის არომატით, ხელს უწყობს ჯანმრთელობის გაუმჯობესებას.",
        en: "Borjomi’s mineral springs are renowned for their therapeutic properties, particularly for improving digestive health and metabolism. \n\n Borjomi-Kharagauli National Park, one of Europe’s largest national parks, offers hiking trails where you can enjoy coniferous forests and breathtaking views. \n\n The city’s air, infused with the scent of pine and fir, promotes health and well-being.",
      },
      description3: {
        ka: "ქალაქ ბორჯომსა და მის შემოგარენში უამრავი ღირსშესანიშნაობაა, მათ შორის მწვანე მონასტერი, რომელიც IX საუკუნეში აშენდა, და ფირუზის სასახლე, რომელიც თავისი არქიტექტურით გამოირჩევა.",
        en: "The city of Borjomi and its surroundings boast numerous attractions, including the Green Monastery, built in the 9th century, and the Firuza Palace, distinguished by its unique architecture.",
      },
      name4: { ka: "ბორჯომის საგანძური", en: "Treasures of Borjomi" },
      name5: { ka: "", en: "" },
      description4: {
        ka: "ბორჯომის ერთ-ერთი მთავარი საგანძური მისი მინერალური წყალია, რომელიც მსოფლიოში ცნობილია. \n\n გარდა ამისა, ბორჯომი-ხარაგაულის ეროვნული პარკი გთავაზობთ მრავალფეროვან ფლორასა და ფაუნას, სადაც იშვიათი სახეობები, მათ შორის ფოცხვერი და კავკასიური ნიამორი, ცხოვრობს.",
        en: "One of Borjomi’s main treasures is its mineral water, renowned worldwide. \n\n Additionally, Borjomi-Kharagauli National Park offers diverse flora and fauna, home to rare species such as lynx and Caucasian deer.",
      },
      description5: { ka: "", en: "" },
    },
    range: [{ min: { ka: "26", en: "26" } }, { max: { ka: "2", en: "2" } }],
    destinations: [
      {
        id: "1",
        title: { ka: "ერთდღიანი ტური ბორჯომში", en: "One-Day Tour in Borjomi" },
        description: {
          ka: "ბორჯომი შესანიშნავი ადგილია ერთდღიანი მოგზაურობისთვის, სადაც შეგიძლია მოინახულო ცენტრალური პარკი, დააგემოვნო მინერალური წყალი, ესტუმრო ლიკანის სასახლეს და ისეირნო ბორჯომი-ხარაგაულის ეროვნულ პარკში.",
          en: "Borjomi is a perfect destination for a one-day trip, where you can visit the Central Park, taste mineral water, explore Likani Palace, and hike in Borjomi-Kharagauli National Park.",
        },
        image: "/places/mtskheta.webp",
        duration: { ka: "4-6სთ", en: "4-6h" },
        activities: { ka: "10 სანახაობა", en: "10 Attractions" },
        currency: { ka: "30კმ", en: "30km" },
      },
      {
        id: "2",
        title: {
          ka: "ბორჯომი, ვარძია და რაბათის ერთდღიანი ტური",
          en: "One-Day Tour of Borjomi, Vardzia, and Rabati",
        },
        description: {
          ka: "ეს ტური საშუალებას გაძლევს მოინახულო ბორჯომის ცენტრალური პარკი, ისტორიული ვარძიის კლდის ქალაქი და რაბათის ციხე, რომელიც თავისი ფერადი არქიტექტურით გამოირჩევა.",
          en: "This tour allows you to visit Borjomi Central Park, the historic Vardzia cave city, and Rabati Castle, known for its vibrant architecture.",
        },
        image: "/places/jvari-monastery(1).webp",
        duration: { ka: "8-10სთ", en: "8-10h" },
        activities: { ka: "12 სანახაობა", en: "12 Attractions" },
        currency: { ka: "120კმ", en: "120km" },
      },
    ],
    array: [
      {
        image: "/places/khachapuri-gnta.webp",
        header: { ka: "ხაჭაპური", en: "Khachapuri" },
        title: { ka: "დააგემოვნე", en: "Taste" },
        text: {
          ka: "ტრადიციული ქართული კერძები",
          en: "Traditional Georgian Dishes",
        },
        description: {
          ka: "ბორჯომის რეგიონში, ისევე როგორც მთელ საქართველოში, ხაჭაპური ერთ-ერთი ყველაზე პოპულარული კერძია. ასევე, სცადე ადგილობრივი ხარჩო, მწვადი და ხინკალი, რომლებიც განსაკუთრებული გემოთი გამოირჩევა.",
          en: "In the Borjomi region, as throughout Georgia, khachapuri is one of the most popular dishes. Also, try local kharcho, mtsvadi, and khinkali, which are distinguished by their unique flavors.",
        },
      },
      {
        image: "/places/khinkali-gnta.webp",
        header: { ka: "ხინკალი", en: "Khinkali" },
        title: { ka: "", en: "" },
        text: { ka: "", en: "" },
        description: { ka: "", en: "" },
      },
    ],
    slideCard: [
      {
        title: { ka: "პრომეთეს მღვიმე", en: "Prometheus Cave" },
        src: "/slidecard/prometheus-cave-gnta.webp",
        modalSrc: "/slidecard/prometheus-cave-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        text: {
          ka: "აღმოაჩინე პოპულარული სანახაობები",
          en: "Discover Popular Attractions",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: {
          ka: "დათვის ტბა - ბუნების ძეგლი ოკაცეს კანიონში",
          en: "Datvi Lake - Natural Monument in Okatse Canyon",
        },
        src: "/slidecard/datvi-lake-gnta.webp",
        modalSrc: "/slidecard/datvi-lake-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: {
          ka: "კინჩხის (ოკაცეს) ჩანჩქერი - ხონის ბუნებრივი ძეგლი",
          en: "Kinchkha (Okatse) Waterfall - Khoni Natural Monument",
        },
        src: "/slidecard/kinchkha-waterfall-gnta.webp",
        modalSrc: "/slidecard/kinchkha-waterfall-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: {
          ka: "ხონის მხარეთმცოდნეობის მუზეუმი",
          en: "Khoni Museum of Local Lore",
        },
        src: "/slidecard/khoni-museum-of-local-lore.webp",
        modalSrc: "/slidecard/khoni-museum-of-local-lore.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: { ka: "სასტუმრო პრომეთე", en: "Hotel Prometheus" },
        src: "/slidecard/hotel-prometheus-gnta.webp",
        modalSrc: "/slidecard/hotel-prometheus-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: { ka: "ლომინას ტბა", en: "Lomina Lake" },
        src: "/slidecard/lomina-gnta.webp",
        modalSrc: "/slidecard/lomina-gnta.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
      {
        title: { ka: "ბღერის მღვიმე", en: "Bgheri Cave" },
        src: "/slidecard/bgheri-cave-natural-monument.webp",
        modalSrc: "/slidecard/bgheri-cave-natural-monument.webp",
        additionalDescription: {
          ka: "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
          en: "Martvili Canyon is a natural wonder in Samegrelo, famous for its turquoise waters.",
        },
        region: { ka: "სამეგრელო", en: "Samegrelo" },
        city: { ka: "მარტვილი", en: "Martvili" },
        name: {
          ka: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
          en: "Okatse Canyon Visitor Center",
        },
        address: {
          ka: "FG4G+7XV, ოკაცე, საქართველო",
          en: "FG4G+7XV, Okatse, Georgia",
        },
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          tuesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          wednesday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          thursday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          friday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          saturday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
          sunday: { ka: "10:00 AM – 5:30 PM", en: "10:00 AM – 5:30 PM" },
        },
      },
    ],
    ukrGeoCharm: [
      {
        title: { ka: "აღმოაჩინე", en: "Discover" },
        name: { ka: "კულტურული ძეგლები", en: "Cultural Monuments" },
        image: "/places/tower-of-ushguli.webp",
      },
      {
        name: { ka: "ხელოვნება და კულტურა", en: "Art and Culture" },
        image: "/places/arts-and-culture-in-georgia.webp",
      },
      {
        name: { ka: "სამზარეულო და ღვინო", en: "Cuisine and Wine" },
        image: "/places/food-and-wine-georgia.webp",
      },
    ],
  },
];
