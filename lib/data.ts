export interface WorkingHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}
export interface AnotherSection {
  name1?: string | null;
  description?: string | null;
  image?: string | null;
  name2?: string | null;
  name3?: string | null;
  name4?: string;
  name5?: string;
  description2?: string;
  description3?: string;
  description4?: string;
  description5?: string;
}
export interface SlideCard {
  title: string;
  src: string;
  modalSrc: string;
  additionalDescription: string;
  text?: string;
  region: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  website: string;
  workingHours: WorkingHours;
}
export interface Blogs {
  img: string;
  title: string;
  desc: string;
  blogText?: string;
}
export interface Card {
  title: string;
  src: string;
  modalSrc: string;
  additionalDescription: string;
  region: string;
  city: string;
  description: string;
  name: string;
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
    title: "მარტვილის კანიონი",
    src: "/home/bla.webp",
    modalSrc: "/home/bla.webp",
    additionalDescription:
      "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
    region: "სამეგრელო",
    city: "მარტვილი",
    description: "ბუნების ძეგლები",
    name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
    address: "FG4G+7XV, Окаце, საქართველო",
    phone: "595 03 60 47",
    website:
      "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
    workingHours: {
      monday: "10:00 AM – 5:30 PM",
      tuesday: "10:00 AM – 5:30 PM",
      wednesday: "10:00 AM – 5:30 PM",
      thursday: "10:00 AM – 5:30 PM",
      friday: "10:00 AM – 5:30 PM",
      saturday: "10:00 AM – 5:30 PM",
      sunday: "10:00 AM – 5:30 PM",
    },
    anotherSection: {
      name1: "სად მდებარეობს ოკაცეს კანიონი?",
      description:
        "ოკაცეს კანიონი ჩვენი ქვეყნის გასაოცარი ადგილებიდან ერთ-ერთია და იქამდე მისვლას საკმაოდ ადვილად შეძლებ. კანიონი იმერეთში, ქუთაისიდან 50 კმ-ში, ხონის მუნიციპალიტეტში, სოფელ ზედა გორდთან მდებარეობს. სამეგრელოს მმართველმა დადიანებმა ეს სოფელი საზაფხულო რეზიდენციად სწორედ უნიკალური კლიმატის გამო აირჩიეს. სანახაობებით სავსე გზა სწორედ გორდიდან იწყება. \n\n ვიზიტორთა ცენტრიდან კანიონის კიდულ ბილიკამდე 2 კილომეტრზე მეტია. იქამდე მანქანითაც შეიძლება მისვლა, მაგრამ, თუ სურვილი გაქვს, ფეხით წასვლასაც შეძლებ. ქვაფენილი გადის უძველესი ხეებით სავსე დაბურულ ტყეში, რომელიც დადიანების საზაფხულო სასახლეს ესაზღვრებოდა.",
      image: "",
      name2: "რა უნდა იცოდე ოკაცეს კანიონზე?",
      name3: "",
      description2:
        "ოკაცეს კანიონი 2 კმ სიგრძისაა. მისი სიგანე ცვალებადია - ზოგან 15-20 მეტრს აღწევს, ზოგან კი 3-6 მეტრია. რაც შეეხება მის სიღრმეს, ის 20-დან 100 მეტრამდე მერყეობს. მდინარის, მაღალი მთებისა და სიმწვანის გარდა, აქ წყალუხვი ჩანჩქერები და ულამაზესი ტბებიც შეგხვდება. \n\n მთელ ამ სილამაზეს კანიონის გამჭვირვალესაფარიანი კიდული ბილიკიდან დაათვალიერებ. ბილიკის სიგრძე 780 მეტრია, ის ციცაბო კლდეს მიუყვება, მაგრამ ძალიან კომფორტულია. \n\n ბილიკის ბოლოს პანორამული გადასახედია. აქვეა დამონტაჟებული სმარტ-სელფის აპარატი, რომელიც საუცხოო მომენტების დაფიქსირებაში დაგეხმარება.",
      description3: "",
      name4: "",
      name5: "",
      description4: "",
      description5: "",
    },
    slideCard: [
      {
        title: "პრომეთეს მღვიმე",
        src: "/slidecard/prometheus-cave-gnta.webp",
        modalSrc: "/slidecard/prometheus-cave-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        text: "აღმოაჩინე პოპულალური სანახაობები",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "დათვის ტბა - ბუნების ძეგლი ოააცეს კანიონში",
        src: "/slidecard/datvi-lake-gnta.webp",
        modalSrc: "/slidecard/datvi-lake-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "კინჩხის (ოკაცეს) ჩანჩქერი - ხონის ბუნებრივი ძეგლი",
        src: "/slidecard/kinchkha-waterfall-gnta.webp",
        modalSrc: "/slidecard/kinchkha-waterfall-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ხონის მხარეთმცოდნეობის მუზეუმი",
        src: "/slidecard/khoni-museum-of-local-lore.webp",
        modalSrc: "/slidecard/khoni-museum-of-local-lore.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "სასტუმრო პრომეთე",
        src: "/slidecard/hotel-prometheus-gnta.webp",
        modalSrc: "/slidecard/hotel-prometheus-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ლომინას ტბა",
        src: "/slidecard/lomina-gnta.webp",
        modalSrc: "/slidecard/lomina-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ბღერის მღვიმე",
        src: "/slidecard/bgheri-cave-natural-monument.webp",
        modalSrc: "/slidecard/bgheri-cave-natural-monument.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
    ],
    blogs: [
      {
        img: "/cardImage/georgia-europe-georgraphy.webp",
        title: "საქართველოს გეოგრაფია",
        blogText: "მიიღეთ შთაგონება",
        desc: "საქართველო პატარა, ლამაზი ქვეყანაა, მრავალფეროვანი ბუნებითა და რბილი კლიმატით, რასაც საინტერესო გეოგრაფიული მდებარეობა განაპირობებს. ჩრდილოეთიდან და სამხრეთიდან ოროგრაფიული საზღვრები იცავს – ჩრდილოეთით დიდი კავკასიონის ქედი თავისი მყინვარებით.",
      },
      {
        img: "/cardImage/why-georgia-nature.webp",
        title: "საქართველოს ბუნება",
        blogText: "",
        desc: "ჩრდილოეთით - აზიდული დიდი კავკასიონი, დასავლეთით - შემორკალული შავი ზღვა, სამხრეთით - მცირე კავკასიონის მთები, აღმოსავლეთით - გაშლილი ველ-მინდვრები, მდინარეები, ჩანჩქერები, ულამაზესი ხეობები, მწვერვალები, წყაროები, ტბები და წყალსაცავები, ნაკადულები, ტყეები,",
      },
      {
        img: "/cardImage/adjara.webp",
        title: "9 გამორჩეული სანახაობა აჭარაში",
        blogText: "",
        desc: "აჭარა ძალიან ლამაზია, როცა ბათუმს უახლოვდები, უზარმაზარი, მწვანედ მოლივლივე ზღვა და ქალაქის ზოლი, სანაპიროს რომ მიუყვება, მაღლიდან ხელისგულზე გავლებული სიცოცხლის ხაზივით ჩანს; მაღალმთიანი აჭარა კი ზაფხულში მწვანეში ჩაფლული, ზამთარში კი სახურავებამდე",
      },
    ],
  },
  {
    title: "აბუდელაურის ფერადი ტბები",
    src: "/home/abudelauri-lake-georgia.webp",
    modalSrc: "/home/abudelauri-lake-georgia.webp",
    additionalDescription:
      "სვანეთი ცნობილია თავისი უნიკალური კოშკებითა და მთიანი პეიზაჟებით.",
    region: "სვანეთი",
    city: "მესტია",
    name: "სვანეთი",
    description: "ბუნების ძეგლები",
    address: "მესტია, სვანეთის რეგიონი",
    phone: "+995 577 789 012",
    website: "",
    workingHours: {
      monday: "08:00 - 20:00",
      tuesday: "08:00 - 20:00",
      wednesday: "08:00 - 20:00",
      thursday: "08:00 - 20:00",
      friday: "08:00 - 20:00",
      saturday: "08:00 - 22:00",
      sunday: "08:00 - 22:00",
    },
    anotherSection: {
      name1: "აბუდელაურის ფერადი ტბების საიდუმლო",
      description:
        "მაღალმთიან ხევსურეთში, სოფელ როშკის თავზე და ჭიუხის (ჭაუხის) მასივის ძირში ჯერ მწვანე  , შემდგომ ლურჯი და ბოლოს თეთრი ტბა გელოდებათ. \n\n აბუდელაურის ტბების ეს განსაკუთრებული ფერები ერთი შეხედვით ჯადოსნურია, თუმცა სინამდვილეში, მათ შეფერილობაზე რამდენიმე ფაქტორი მოქმედებს: თეთრი ტბა კარბონატებს შეიცავს, რომლებიც ტემპერატურის მატების დროს იხსნება და წყალს თეთრ შეფერილობას აძლევს, ხოლო ლურჯი და მწვანე ტბების ფერები მყინვართანაა დაკავშირებული, რომელიც მუდმივად კაწრავს ქანებს, ნაკაწრი „მტვერი“ კი ტბების წყალში ჩადის, დიდხანს არ იძირება და მზის სხივებზე ლურჯ და მწვანე ფერებად ირეკლება.",
      image: "https://storage.georgia.travel/images/abudelauri-lakes.webp",
      name2: "როგორ მოხვდები აბუდელაურის ფერად ტბებთან?",
      name3: "სად შეძლებ ღამის გათენებას?",
      description2:
        "მწვანე და ლურჯი ტბები ერთმანეთთან ახლოს მდებარეობს, თეთრი ტბა კი ოდნავ მოშორებით, პირდაპირ მყინვარის ძირშია და მასთან მისასვლელი გზა ლოდნარზე გადის და  შედარებით რთულია. \n\n ტბებისკენ საუკეთესო მარშრუტი სოფელ როშკადან (1990 მ) იწყება. სწორედ აქ მთავრდება სამანქანო გზა, რის შემდეგაც 7 კილომეტრის გავლა მხოლოდ საფეხმავლო გზითაა შესაძლებელი. \n\n არ გაგიკვირდეს, თუ გზად ამინდი რამდენჯერმე შეიცვლება, ამიტომ აჯობებს, თუ შესაბამისად აღჭურვილი წახვალ და მზად იქნები წვიმისთვის, რაც აქ არცთუ ისე იშვიათია. ",
      description3:
        "სოფელ როშკაში რამდენიმე საოჯახო სასტუმროა, სადაც ადგილობრივი კერძებით გაგიმასპინძლდებიან, მაგრამ, თუ ღამის გათევას კარვებში გადაწყვეტ, ეს ადგილი კემპინგისთვისაც იდეალურია. ",
      name4: "როდის უნდა ესტუმრო აბუდელაურის ტბებს?",
      description4:
        "აბუდელაურის ტბები გაზაფხულის ბოლომდე თოვლითაა დაფარული, აგვისტოში კი წყლის დონე შედარებით იკლებს, ამიტომ მათ სანახავად საუკეთესო დრო ივნისი და ივლისია",
      name5: "კიდევ რა გზით მოხვდები აბუდელაურის ტბებთან?",
      description5:
        "ტბებთან მისვლა ალტერნატიული მარშრუტითაც შესაძლებელია. სალაშქრო ბილიკი სოფელ ჯუთაში, ყაზბეგის მუნიციპალიტეტში იწყება და ჭიუხის უღელტეხილით გადმოდის აბუდელაურის ტბებთან. მის გავლას როგორც წესი ორი დღე სჭირდება და გამოცდილი მოლაშქრეებისთვისაა რეკომენდებული.",
    },
    slideCard: [
      {
        title: "",
        src: "",
        modalSrc: "",
        additionalDescription: "",
        region: "",
        city: "",
        name: "",
        address: "",
        phone: "",
        website: "",
        workingHours: {
          monday: "",
          tuesday: "",
          wednesday: "",
          thursday: "",
          friday: "",
          saturday: "",
          sunday: "",
        },
      },
    ],
    blogs: [
      {
        img: "/cardImage/georgia-europe-georgraphy.webp",
        title: "საქართველოს გეოგრაფია",
        blogText: "გაეცანი ბლოგს",
        desc: "საქართველო პატარა, ლამაზი ქვეყანაა, მრავალფეროვანი ბუნებითა და რბილი კლიმატით, რასაც საინტერესო გეოგრაფიული მდებარეობა განაპირობებს. ჩრდილოეთიდან და სამხრეთიდან ოროგრაფიული საზღვრები იცავს – ჩრდილოეთით დიდი კავკასიონის ქედი თავისი მყინვარებით.",
      },
      {
        img: "/cardImage/why-georgia-nature.webp",
        title: "საქართველოს ბუნება",
        blogText: "",
        desc: "ჩრდილოეთით - აზიდული დიდი კავკასიონი, დასავლეთით - შემორკალული შავი ზღვა, სამხრეთით - მცირე კავკასიონის მთები, აღმოსავლეთით - გაშლილი ველ-მინდვრები, მდინარეები, ჩანჩქერები, ულამაზესი ხეობები, მწვერვალები, წყაროები, ტბები და წყალსაცავები, ნაკადულები, ტყეები,",
      },
      {
        img: "/cardImage/vardzia-in-samtskhe-javakheti.webp",
        title: "9 გამორჩეული სანახაობა სამცხე-ჯავახეთში",
        blogText: "",
        desc: "დღევანდელი სამცხე-ჯავახეთი, რომელსაც ოდესღაც მესხეთი ეწოდებოდა, იმდენად მდიდარია ღირსშესანიშნაობებით, რომ შეგიძლია, აქ ყოველ წელს საინტერესო და განსხვავებული მოგზაურობა მოიწყო. ამ მხარეში აღმოაჩენ ერთმანეთისგან კონტრასტულ ლანდშაფტებს, მთებს,",
      },
    ],
  },
  {
    title: "გოგნის წმ. გიორგის ეკლესია",
    src: "/home/gogni-church.webp",
    modalSrc: "/home/gogni-church.webp",
    additionalDescription:
      "ლეგენდის თანახმად, სოფელ გოგნში მცხოვრებ დავრდომილ მოხუცს წმინდა გიორგიმ პატარა ჩიტის საშუალებით სალოცავის აშენების ადგილი მიანიშნა. სოფელმა სალოცავი ააგო და კარიც ჩამოჰკიდა, მაგრამ ყოველღამე კარი თავისით ვარდებოდა. ამის გამო, სალოცავს „კარუგდებელი“ უწოდეს.",
    region: "სვანეთი",
    city: "მესტია",
    description: "კულტურული ძეგლები",
    name: "სვანეთი",
    address: "მესტია, სვანეთის რეგიონი",
    phone: "+995 577 789 012",
    website: "",
    workingHours: {
      monday: "08:00 - 20:00",
      tuesday: "08:00 - 20:00",
      wednesday: "08:00 - 20:00",
      thursday: "08:00 - 20:00",
      friday: "08:00 - 20:00",
      saturday: "08:00 - 22:00",
      sunday: "08:00 - 22:00",
    },
    anotherSection: {
      name1: "გოგნის წმინდა გიორგის სახელობის ეკლესიის შესახებ",
      description:
        "ეს საქართველოში ერთადერთი ეკლესიაა, რომელსაც კარი არ აქვს. ის არასდროს იკეტება და ადამიანებს სალოცავში შესვლა ნებისმიერ დროს შეუძლიათ. \n\n გოგნის წინდა გიორგის ეკლესია რეგიონ იმერეთში, თერჯოლიდან 12 კილომეტრში, ულამაზესი ურთხლის ტყეში, მაღალ გორაზე დგას. ეს პატარა ერთნავიანი სალოცავი VII-VIII საუკუნეებში ქვითკირითაა აშენებული. წელიწადში ორჯერ, გიორგობას, ამ ადგილს უამრავი მომლოცველი სტუმრობს და წმინდა გიორგის სურვილების ასრულებას სთხოვს. \n\n წმინდა გიორგი საქართველოში გამორჩეული წმინდანია. მის სახელზე ქვეყანაში 365 ეკლესიაა აგებული. ქართველები გიორგობას წელიწადში ორჯერ აღნიშნავენ: 6 მაისს - წმინდანის დაბადების დღეს და 23 ნოემბერს - როცა ის ბორბალზე აწამეს.  \n\n გადმოცემის თანახმად, ვინც ამ დღეებში ტაძარს სამჯერ შემოუვლის, ყველა სურვილი აუსრულდება. თუ გოგნის სალოცავს გიორგობას ეწვევით, თავად იხილავთ ტაძრისკენ მიმავალ ათასობით ადამიანს, რომელთა უმეტესობა გზას ფეხშიშველი მიუყვება.",
      image: "",
      name2: "",
      name3: "",
      description2: "",
      description3: "",
      name4: "",
      name5: "",
      description4: "",
      description5: "",
    },
    slideCard: [
      {
        title: "მoწამეთას მონასტერი",
        src: "/slidecard/motsameta-monastery-gnta.webp",
        modalSrc: "/slidecard/motsameta-monastery-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        text: "აღმოაჩინე პოპულალური სანახაობები",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "დავით კლდიაშვილის სახლ-მუზეუმი",
        src: "/slidecard/davit-kldiashvili-house-museum-gnta.webp",
        modalSrc: "/slidecard/davit-kldiashvili-house-museum-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ცუცხვათის მღვიმე",
        src: "/slidecard/tsutskhvati-cave-natural-monument-gnta.webp",
        modalSrc: "/slidecard/tsutskhvati-cave-natural-monument-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ძევრის მღვიმე",
        src: "/slidecard/dzevri-caves.webp",
        modalSrc: "/slidecard/dzevri-caves.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "წყალწითელას ხეობის ბუნების ძეგლი",
        src: "/slidecard/tskaltsitela-gorge-natural-monument.webp",
        modalSrc: "/slidecard/tskaltsitela-gorge-natural-monument.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ნავენახევის მღვიმე - იმერეთის შთამბეჭდავი ღირსესანიშნაობა",
        src: "/slidecard/navenakhevi-cave-gnta.webp",
        modalSrc: "/slidecard/navenakhevi-cave-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
    ],
    blogs: [
      {
        img: "/cardImage/10-dzegli-romelits-autsileblad-unda-nakho-saqartveloshi-gremi-1.webp",
        title: "10 ისტორიული ძეგლი, რომელიც საქართველოში უნდა ნახო",
        blogText: "მიიღეთ შთაგონება",
        desc: "საქართველოს ისტორიული ძეგლები ქვეყნის უძველესი და მდიდარი ისტორიის შესახებ მეტყველებს. მათგან რამდენიმეს ამორჩევა სუბიექტური ამბავია, მაგრამ ვეცდებით, უმნიშვნელოვანესი ძეგლებიდან 10 შევარჩიოთ.",
      },
      {
        img: "/cardImage/unesco-heritage-georgia.webp",
        title: "მსოფლიო მნიშვნელობის მემკვიდრეობა",
        blogText: "",
        desc: "იუნესკოს მსოფლიო კულტურული მემკვიდრეობის ძეგლების სიაში, მსოფლიოს მასშტაბით, 1153 ძეგლია შეტანილი. მათ შორისაა ქართული ანბანი და ქვევრის ღვინის დაყენების ქართული ტრადიციული მეთოდი.",
      },
      {
        img: "/cardImage/georgian-monastery.webp",
        title: "საქართველოს ეკლესია - მონსატრები",
        blogText: "",
        desc: "ქრისტიანობის შემოსვლამ რადიკალურად შეცვალა საქართველოს ისტორიის მსვლელობა და უდიდესი გავლენა იქონია ჩვენი ქვეყნის კულტურულ და სულიერ ცხოვრებაზე. პირველი ქრისტიანული საზოგადოებები აქ ჯერ კიდევ I საუკუნეში ჩამოყალიბდა, მაგრამ სახელმწიფო",
      },
    ],
  },
  {
    title: "ვარძია",
    src: "/home/vardzia-gnta.webp",
    modalSrc: "/home/vardzia-gnta.webp",
    additionalDescription:
      "რამდენჯერაც არ უნდა ესტუმრო საქართველოს, ეს ქვეყანა ყოველ ჯერზე თავიდან გაგაოცებს, მოგხიბლავს და დროში მოგზაურობას მოგანდომებს - საუკუნეების წინანდელი განუმეორებელი ძეგლები შენს წინ გადაშლის მთელ ისტორიას და მოგიყვება ამბებს, რომლებსაც სხვაგან ვერსად მოისმენ. სწორედ ერთ-ერთი ასეთი ქმნილებაა ვარძია - შუა საუკუნეების კლდის ხუროთმოძღვრების დიდებული ანსამბლი და ერთ-ერთი ყველაზე პოპულარული ძეგლი საქართველოში.",
    region: "სვანეთი",
    city: "მესტია",
    description: "კულტურული ძეგლები",
    name: "სვანეთი",
    address: "მესტია, სვანეთის რეგიონი",
    phone: "+995 577 789 012",
    website: "",
    workingHours: {
      monday: "08:00 - 20:00",
      tuesday: "08:00 - 20:00",
      wednesday: "08:00 - 20:00",
      thursday: "08:00 - 20:00",
      friday: "08:00 - 20:00",
      saturday: "08:00 - 22:00",
      sunday: "08:00 - 22:00",
    },
    anotherSection: {
      name1: "სად მდებარეობს ვარძია",
      description:
        "ვარძია თბილისიდან 300 კილომეტრის დაშორებით, სამხრეთ საქართველოში, ისტორიულ მესხეთში მდებარეობს, ზღვის დონიდან 1300 მეტრზე. კლდეში ნაკვეთი  ქალაქის საერთო ფართობი 40 ათასი კვ.მ-ია. \n\n ვარძიას ეროვნული მნიშვნელობის კულტურის უძრავი ძეგლის სტატუსი აქვს მინიჭებული. დღეს აქ მამათა მონასტერი ფუნქციონირებს.",
      image: "https://storage.georgia.travel/images/saqartvelo-vardzia.webp",
      name2: "ვარძიის ისტორია",
      name3: "ვარძიის ნაქალაქარის სტრუქტურა",
      description2:
        "ის ძირითადად XII საუკუნეში აშენდა და ორი მეფის - გიორგი მესამისა და მისი ასულის, მეფე თამარის მეფობის ხანას უკავშირდება. მაშინ ვარძია ქვეყნის პოლიტიკური, კულტურული და სასულიერო ცხოვრების ცენტრი იყო და საუკუნეების წინათ არსებული ცივილიზაციისა და კულტურის კვალს დღემდე ინახავს.",
      description3:
        "ვარძია კლდეში ნაკვეთი ციხე-ქალაქია, მისი სიგრძე 900 მეტრია, სიმაღლეში სართულებად არის დაყოფილი, რომლებიც ერთმანეთს გვირაბებით უკავშირდება. ამ კლდოვან ქალაქს 900 წლის წინათ თანამედროვე ქალაქის ინფრასტრუქტურა ჰქონდა, მათ შორის - საკუთარი წყალსადენის სისტემაც. \n\n საუკუნეებმა, გამუდმებულმა ომებმა და მიწისძვრებმა მნიშვნელოვნად დააზიანა ეს უნიკალური ნაგებობა. დღეს 10 სართული და 15 კლდოვანი ეკლესიაა შემორჩენილი. კომპლექსის შუაგულში მთავარი ძეგლია - ფრესკებით მოხატული ღვთისმშობლის მიძინების ტაძარი. \n\n ამასთანავე, აქ შემონახულია 28 მარანი, სადაც 235 ქვევრი იყო განთავსებული. მთლიანად ან ნაწილობრივ გადარჩენილია 242 გამოქვაბული ოთახი.",
      name4: "",
      name5: "",
      description4: "",
      description5: "",
    },
    slideCard: [
      {
        title: "პრომეთეს მღვიმე",
        src: "/slidecard/javakheti-national-park-gnta.webp",
        modalSrc: "/slidecard/javakheti-national-park-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        text: "აღმოაჩინეთ ტოპ სანახაობები",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "პრომეთეს მღვიმე",
        src: "/slidecard/agara-monastery-gnta.webp",
        modalSrc: "/slidecard/agara-monastery-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "პრომეთეს მღვიმე",
        src: "/slidecard/khertvisi-fortress-gnta.webp",
        modalSrc: "/slidecard/khertvisi-fortress-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "პრომეთეს მღვიმე",
        src: "/slidecard/kartsakhi-managed-reserve-gnta-m.webp",
        modalSrc: "/slidecard/kartsakhi-managed-reserve-gnta-m.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "პრომეთეს მღვიმე",
        src: "/slidecard/kartsakhi-lake-hiking-gnta.webp",
        modalSrc: "/slidecard/kartsakhi-lake-hiking-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "პრომეთეს მღვიმე",
        src: "/slidecard/tavkvetula-cave-church-gnta-m.webp",
        modalSrc: "/slidecard/tavkvetula-cave-church-gnta-m.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "პრომეთეს მღვიმე",
        src: "/slidecard/vanis-kvabebi-gnta-m.webp",
        modalSrc: "/slidecard/vanis-kvabebi-gnta-m.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
    ],
    blogs: [
      {
        img: "/cardImage/10-dzegli-romelits-autsileblad-unda-nakho-saqartveloshi-gremi-1.webp",
        title: "10 ისტორიული ძეგლი, რომელიც საქართველოში უნდა ნახო",
        blogText: "მიიღეთ შთაგონება",
        desc: "საქართველოს ისტორიული ძეგლები ქვეყნის უძველესი და მდიდარი ისტორიის შესახებ მეტყველებს. მათგან რამდენიმეს ამორჩევა სუბიექტური ამბავია, მაგრამ ვეცდებით, უმნიშვნელოვანესი ძეგლებიდან 10 შევარჩიოთ.",
      },
      {
        img: "/cardImage/adjara.webp",
        title: "9 გამორჩეული სანახაობა აჭარაში",
        blogText: "",
        desc: "აჭარა ძალიან ლამაზია, როცა ბათუმს უახლოვდები, უზარმაზარი, მწვანედ მოლივლივე ზღვა და ქალაქის ზოლი, სანაპიროს რომ მიუყვება, მაღლიდან ხელისგულზე გავლებული სიცოცხლის ხაზივით ჩანს; მაღალმთიანი აჭარა კი ზაფხულში მწვანეში ჩაფლული, ზამთარში კი სახურავებამდე",
      },
      {
        img: "/cardImage/khertvisi-fortress-gnta.webp",
        title: "საქართველოს ისტორია",
        blogText: "",
        desc: "„საქართველოს ისტორიას რომ გაეცნობი, ნამდვილად ღმერთს იწამებ, რადგან არანაირი ობიექტური საფუძველი იმისა, რომ ამ ერს აქამდე მოეღწია, უბრალოდ არ არსებობს“, - ამბობდა ინგლისელი მწერალი და მთარგმნელი დევიდ ლანგი საქართველოს შესახებ.",
      },
    ],
  },
  {
    title: "სათაფლიის მღვიმე და ნაკრძალი",
    src: "/home/sataplia-cave-and-nature-reserve-gnta.webp",
    modalSrc: "/home/sataplia-cave-and-nature-reserve-gnta.webp",
    additionalDescription:
      "თუ დიადი ისტორიული ამბები გხიბლავს, მაშინ საქართველოში სათაფლიის მღვიმესა და ნაკრძალს აუცილებლად უნდა ესტუმრო, რადგან ეს ადგილი 120 მილიონი წლის წინანდელი დინოზავრის - Satapliazaurus-ის ნაკვალევით არის ცნობილი.",
    region: "იმერეთი",
    city: "ქუთაისი",
    description: "ბუნების ძეგლები",
    name: "სათაფლიის ნაკრძალი",
    address: "მესტია, სვანეთის რეგიონი",
    phone: "+995 577 789 012",
    website:
      "http://www.apa.gov.ge/en/eco-tourism/servisebi-da-tarifebi/sataflia",
    workingHours: {
      monday: "08:00 - 20:00",
      tuesday: "08:00 - 20:00",
      wednesday: "08:00 - 20:00",
      thursday: "08:00 - 20:00",
      friday: "08:00 - 20:00",
      saturday: "08:00 - 22:00",
      sunday: "08:00 - 22:00",
    },
    anotherSection: {
      name1: "სად მდებარეობს სათაფლია?",
      description:
        "სათაფლიის კარსტული მღვიმეები და სახელმწიფო ნაკრძალი იმერეთში, ქუთაისიდან 7 კმ-ში მდებარეობს. იქ აღმოჩენილი გაქვავებული ნაფეხურები კი მოწმობს, რომ ამ ადგილზე მილიონობით წლის წინათ დინოზავრები ცხოვრობდნენ. ეს გასაოცარი აღმოჩენა 1925 წელს ქუთაისელმა პედაგოგმა, ნატურალისტმა პეტრე ჭაბუკიანმა პირველყოფილი ადამიანის სადგომის ძიებისას გააკეთა. 1935 წელს აქ უკვე დაარსდა კომპლექსური ნაკრძალი, რომელიც გეოლოგიურ, პალეონტოლოგიურ, სპელეოლოგიურ, ზოოლოგიურ და ბოტანიკურ ძეგლებს მოიცავს.",
      image:
        "https://storage.georgia.travel/images/caving-in-sataplia-cave.webp",
      name2: "რით არის გამორჩეული სათაფლიის ნაკრძალი?",
      name3: "რას ნახავ სათაფლიაში?",
      description2:
        "სათაფლიის ნაკრძალში მდებარეობს გამორჩეული კარსტული მღვიმე, რომელიც მდინარე ოღასკურის მიერ 30 მილიონი წლის განმავლობაში იქმნებოდა.",
      description3:
        "სათაფლია დამთვალიერებლებისთვის მაქსიმალურად კეთილმოწყობილია. დინოზავრის ნაკვალევის გარდა, აქ შეგიძლია ნახო კოლხური ტყე, პანორამული გადასახედები, ზღაპრული სილამაზის კარსტული მღვიმე და დატკბე სტალაქტიტების, სტალაგმიტების, სტალაგნატების საოცარი ფორმებით. \n\n დღეისთვის სათაფლიის ინფრასტრუქტურა მოიცავს: კელითმოწყობილ მღვიმეს, დინოზავრთა ნაკვალევების საკონსერვაციო ნაგებობას, საგამოფენო დარბაზს, საფეხმავლო ბილიკებს, შუშის პანორამულ გადასახედს, კაფეებს და სუვენირების მაღაზიებს. ნაკრძალს სახელი მთის მიხედვით დაერქვა, რომელიც უძველესი დროიდან დღემდე ფუტკრების სამყოფელია. თაფლის სიჭარბის გამო, მას „სათაფლიას“, ანუ „თაფლის მთას“ ეძახიან.",
      name4: "",
      name5: "",
      description4: "",
      description5: "",
    },
    slideCard: [
      {
        title: "ბაგრატის ტაძარი",
        src: "/slidecard/bagrati-cathedral-gnta.webp",
        modalSrc: "/slidecard/bagrati-cathedral-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        text: "აღმოაჩინეთ ტოპ სანახაობები",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "მოწამეთას მონასტერი",
        src: "/slidecard/motsameta-monastery-gnta.webp",
        modalSrc: "/slidecard/motsameta-monastery-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ქუთაისის სპორტის მუზეუმი",
        src: "/slidecard/sport-museum-gnta.webp",
        modalSrc: "/slidecard/sport-museum-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "თეთრა მღვიმე - ბუნების ძეგლი იმერეთში",
        src: "/slidecard/tetra-cave-natural-monument-gnta.webp",
        modalSrc: "/slidecard/tetra-cave-natural-monument-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "გაბაშვილის პარკი ქუთაისში",
        src: "/slidecard/kutaisi-gabashvili-park-gnta.webp",
        modalSrc: "/slidecard/kutaisi-gabashvili-park-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ქუთაისის ბოტანიკური ბაღი",
        src: "/slidecard/kutaisi-botanical-park-gnta.webp",
        modalSrc: "/slidecard/kutaisi-botanical-park-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
    ],
    blogs: [
      {
        img: "/cardImage/georgia-europe-georgraphy.webp",
        title: "საქართველოს გეოგრაფია",
        blogText: "მიიღეთ შთაგონება",
        desc: "საქართველო პატარა, ლამაზი ქვეყანაა, მრავალფეროვანი ბუნებითა და რბილი კლიმატით, რასაც საინტერესო გეოგრაფიული მდებარეობა განაპირობებს. ჩრდილოეთიდან და სამხრეთიდან ოროგრაფიული საზღვრები იცავს – ჩრდილოეთით დიდი კავკასიონის ქედი თავისი მყინვარებით.",
      },
      {
        img: "/cardImage/why-georgia-nature.webp",
        title: "საქართველოს ბუნება",
        blogText: "",
        desc: "ჩრდილოეთით - აზიდული დიდი კავკასიონი, დასავლეთით - შემორკალული შავი ზღვა, სამხრეთით - მცირე კავკასიონის მთები, აღმოსავლეთით - გაშლილი ველ-მინდვრები, მდინარეები, ჩანჩქერები, ულამაზესი ხეობები, მწვერვალები, წყაროები, ტბები და წყალსაცავები, ნაკადულები, ტყეები,",
      },
      {
        img: "/cardImage/vardzia-in-samtskhe-javakheti.webp",
        title: "9 გამორჩეული სანახაობა სამცხე-ჯავახეთში",
        blogText: "",
        desc: "დღევანდელი სამცხე-ჯავახეთი, რომელსაც ოდესღაც მესხეთი ეწოდებოდა, იმდენად მდიდარია ღირსშესანიშნაობებით, რომ შეგიძლია, აქ ყოველ წელს საინტერესო და განსხვავებული მოგზაურობა მოიწყო. ამ მხარეში აღმოაჩენ ერთმანეთისგან კონტრასტულ ლანდშაფტებს, მთებს,",
      },
    ],
  },
  {
    title: "სვეტიცხოველი - მსოფლიო ხელოვნების საგანძური",
    src: "/home/svetitskhoveli-cathedral-gnta.webp",
    modalSrc: "/home/svetitskhoveli-cathedral-gnta.webp",
    additionalDescription:
      "სვეტიცხოველი საქართველოში დღემდე მოღწეულ უძველეს ტაძართა შორის ყველაზე დიდი საეკლესიო ნაგებობაა და ქართული ხუროთმოძღვრების ერთ-ერთი ურთულესი ძეგლია. არსებობის დღიდან ის ქართული მართლმადიდებელი სარწმუნოების უმთავრესი ტაძარია.",
    region: "სვანეთი",
    city: "მესტია",
    description: "კულტურული ძეგლები",
    name: "სვანეთი",
    address: "მესტია, სვანეთის რეგიონი",
    phone: "+995 577 789 012",
    website: "",
    workingHours: {
      monday: "08:00 - 20:00",
      tuesday: "08:00 - 20:00",
      wednesday: "08:00 - 20:00",
      thursday: "08:00 - 20:00",
      friday: "08:00 - 20:00",
      saturday: "08:00 - 22:00",
      sunday: "08:00 - 22:00",
    },
    anotherSection: {
      name1: "სვეტიცხოვლის ისტორიული წარსული",
      description:
        "საქართველოს უძველეს დედაქალაქ მცხეთაში, ამ ადგილას, სადაც დღეს სვეტიცხოველი დგას, ხის ეკლესია IV საუკუნეში საქართველოს პირველ ქრისტიან მეფეს მირიან III-ს აუგია. დღევანდელი საკათედრო ტაძარი კი 1010-1029 წლებშია აშენებული, მეფე გიორგი I-ის მმართველობის ხანაში.",
      image:
        "https://storage.georgia.travel/images/mtskheta-svetitskhoveli.webp",
      name2: "რით არის გამორჩეული სვეტიცხოველი?",
      name3: "ლეგენდა სვეტიცხოვლის შესახებ",
      description2:
        "სვეტიცხოვლის ტაძარი იუნესკოს მსოფლიო ხელოვნების საგანძურთა ნუსხაშია შეტანილი. \n\n თუმცა, ტაძარი უნიკალურია არა მხოლოდ თავისი მხატვრული ღირსებით, არამედ მიჩნეულია იმ ადგილად, სადაც ინახება მართლმადიდებელი სამყაროს ერთ-ერთი მთავარი სიწმინდე - უფლის კვართი. \n\n საქართველოში ეკლესიების მშენებლის ვინაობა ხშირად დაკარგულია. სვეტიცხოველი კი ამ მხრივაც გამორჩეულია - აღმოსავლეთის ფასადზე გაკეთებული წარწერის თანახმად, XI საუკუნეში სვეტიცხოვლის ახალი ტაძარი მელქისედეკ კათალიკოსმა ააშენა - 1010-33 წლებში სრულიად საქართველოს კათალიკოს-პატრიარქმა, ტაძრის ხუროთმოძღვრის გვარი კი არსუკისძე ყოფილა.",
      description3:
        "სვეტიცხოვლის შესახებ პირველივე ლეგენდამ ჯერ არარსებულ ეკლესიას სახელი განუსაზღვრა. ლეგენდის თანახმად, ქრისტეს პერანგის დაკრძალვის ადგილას ლიბანის კედარი ამოსულა. IV საუკუნეში, წმ. ნინოს მითითებით, აქ ეკლესიის მშენებლობა დაუწყიათ და კედრისგან 7 სვეტი დაუმზადებიათ. ერთი სვეტი ჰაერში აღმართულა და მხოლოდ წმ. ნინოს ლოცვის შემდეგ დაშვებულა მიწაზე. სვეტისგან საკურნებელი მირონი გადმოსულა, რომელიც ავადმყოფებს კურნავდა. აქედან წარმოიშვა ტაძრის სახელწოდებაც - „სვეტი ცხოველი“ ანუ „სვეტი სიცოცხლის მიმნიჭებელი“. ",
      name4: "",
      name5: "",
      description4: "",
      description5: "",
    },
    slideCard: [
      {
        title: "ჯვრის მონასტერი",
        src: "/slidecard/jvari-monastery-gnta.webp",
        modalSrc: "/slidecard/jvari-monastery-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        text: "აღმოაჩინეთ ტოპ სანახაობები",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ბებრის ციხე",
        src: "/slidecard/bebris-tsikhe-fortress-gnta.webp",
        modalSrc: "/slidecard/bebris-tsikhe-fortress-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "სამთავროს მონასტერი - იუნესკოს მსოფლიო მემკვიდრეობა",
        src: "/slidecard/samtavro-church-gnta.webp",
        modalSrc: "/slidecard/samtavro-church-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ანტიოქიის ეკლესია",
        src: "/slidecard/antioquia-church-gnta.webp",
        modalSrc: "/slidecard/antioquia-church-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "არმაზის ხევი",
        src: "/slidecard/armazis-khevi-gnta.webp",
        modalSrc: "/slidecard/armazis-khevi-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "სამთავროს სამაროვანი",
        src: "/slidecard/samtavro-archeological-site-gnta.webp",
        modalSrc: "/slidecard/samtavro-archeological-site-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
    ],
    blogs: [
      {
        img: "/cardImage/10-dzegli-romelits-autsileblad-unda-nakho-saqartveloshi-gremi-1.webp",
        title: "10 ისტორიული ძეგლი, რომელიც საქართველოში უნდა ნახო",
        blogText: "მიიღეთ შთაგონება",
        desc: "საქართველოს ისტორიული ძეგლები ქვეყნის უძველესი და მდიდარი ისტორიის შესახებ მეტყველებს. მათგან რამდენიმეს ამორჩევა სუბიექტური ამბავია, მაგრამ ვეცდებით, უმნიშვნელოვანესი ძეგლებიდან 10 შევარჩიოთ.",
      },
      {
        img: "/cardImage/adjara.webp",
        title: "9 გამორჩეული სანახაობა აჭარაში",
        blogText: "",
        desc: "აჭარა ძალიან ლამაზია, როცა ბათუმს უახლოვდები, უზარმაზარი, მწვანედ მოლივლივე ზღვა და ქალაქის ზოლი, სანაპიროს რომ მიუყვება, მაღლიდან ხელისგულზე გავლებული სიცოცხლის ხაზივით ჩანს; მაღალმთიანი აჭარა კი ზაფხულში მწვანეში ჩაფლული, ზამთარში კი სახურავებამდე",
      },
      {
        img: "/cardImage/khertvisi-fortress-gnta.webp",
        title: "საქართველოს ისტორია",
        blogText: "",
        desc: "„საქართველოს ისტორიას რომ გაეცნობი, ნამდვილად ღმერთს იწამებ, რადგან არანაირი ობიექტური საფუძველი იმისა, რომ ამ ერს აქამდე მოეღწია, უბრალოდ არ არსებობს“, - ამბობდა ინგლისელი მწერალი და მთარგმნელი დევიდ ლანგი საქართველოს შესახებ.",
      },
    ],
  },
  {
    title: "ძამას ხეობა",
    src: "/home/dzama-valley-gnta.webp",
    modalSrc: "/home/dzama-valley-gnta.webp",
    additionalDescription:
      "სვანეთი ცნობილია თავისი უნიკალური კოშკებითა და მთიანი პეიზაჟებით.",
    region: "სვანეთი",
    city: "მესტია",
    description: "ბუნების ძეგლები",
    name: "სვანეთი",
    address: "მესტია, სვანეთის რეგიონი",
    phone: "+995 577 789 012",
    website: "",
    workingHours: {
      monday: "08:00 - 20:00",
      tuesday: "08:00 - 20:00",
      wednesday: "08:00 - 20:00",
      thursday: "08:00 - 20:00",
      friday: "08:00 - 20:00",
      saturday: "08:00 - 22:00",
      sunday: "08:00 - 22:00",
    },
    anotherSection: [
      {
        name1: "xcxc",
        description: "xcxcc",
        image: "xcs",
        name2: "xcxc",
        name3: "xcxc",
      },
    ],
  },
  {
    title: "ხვამლის მთა",
    src: "/home/khvamli-mountain-gnta.webp",
    modalSrc: "/home/khvamli-mountain-gnta.webp",
    additionalDescription:
      "სვანეთი ცნობილია თავისი უნიკალური კოშკებითა და მთიანი პეიზაჟებით.",
    region: "სვანეთი",
    city: "მესტია",
    description: "ბუნების ძეგლები",
    name: "სვანეთი",
    address: "მესტია, სვანეთის რეგიონი",
    phone: "+995 577 789 012",
    website: "",
    workingHours: {
      monday: "08:00 - 20:00",
      tuesday: "08:00 - 20:00",
      wednesday: "08:00 - 20:00",
      thursday: "08:00 - 20:00",
      friday: "08:00 - 20:00",
      saturday: "08:00 - 22:00",
      sunday: "08:00 - 22:00",
    },
    anotherSection: [
      {
        name1: "xcxc",
        description: "xcxcc",
        image: "xcs",
        name2: "xcxc",
        name3: "xcxc",
      },
    ],
  },
  {
    title: "თრუსოს ხეობა",
    src: "/home/trusso-valley-gnta.webp",
    modalSrc: "/home/trusso-valley-gnta.webp",
    additionalDescription:
      "სვანეთი ცნობილია თავისი უნიკალური კოშკებითა და მთიანი პეიზაჟებით.",
    region: "სვანეთი",
    city: "მესტია",
    description: "ბუნების ძეგლები",
    name: "სვანეთი",
    address: "მესტია, სვანეთის რეგიონი",
    phone: "+995 577 789 012",
    website: "",
    workingHours: {
      monday: "08:00 - 20:00",
      tuesday: "08:00 - 20:00",
      wednesday: "08:00 - 20:00",
      thursday: "08:00 - 20:00",
      friday: "08:00 - 20:00",
      saturday: "08:00 - 22:00",
      sunday: "08:00 - 22:00",
    },
    anotherSection: [
      {
        name1: "xcxc",
        description: "xcxcc",
        image: "xcs",
        name2: "xcxc",
        name3: "xcxc",
      },
    ],
  },
  {
    title: "თრიალეთის ყორღავი",
    src: "/home/trialeti-petroglyps.webp",
    modalSrc: "/home/trialeti-petroglyps.webp",
    additionalDescription:
      "სვანეთი ცნობილია თავისი უნიკალური კოშკებითა და მთიანი პეიზაჟებით.",
    region: "სვანეთი",
    city: "მესტია",
    description: "კულტურული ძეგლები",
    name: "სვანეთი",
    address: "მესტია, სვანეთის რეგიონი",
    phone: "+995 577 789 012",
    website: "",
    workingHours: {
      monday: "08:00 - 20:00",
      tuesday: "08:00 - 20:00",
      wednesday: "08:00 - 20:00",
      thursday: "08:00 - 20:00",
      friday: "08:00 - 20:00",
      saturday: "08:00 - 22:00",
      sunday: "08:00 - 22:00",
    },
    anotherSection: [
      {
        name1: "xcxc",
        description: "xcxcc",
        image: "xcs",
        name2: "xcxc",
        name3: "xcxc",
      },
    ],
  },
  {
    title: "თუშეთი",
    src: "/home/tusheti-georgia.webp",
    modalSrc: "/home/tusheti-georgia.webp",
    additionalDescription:
      "სვანეთი ცნობილია თავისი უნიკალური კოშკებითა და მთიანი პეიზაჟებით.",
    region: "სვანეთი",
    city: "მესტია",
    description: "ბუნების ძეგლები",
    name: "სვანეთი",
    address: "მესტია, სვანეთის რეგიონი",
    phone: "+995 577 789 012",
    website: "",
    workingHours: {
      monday: "08:00 - 20:00",
      tuesday: "08:00 - 20:00",
      wednesday: "08:00 - 20:00",
      thursday: "08:00 - 20:00",
      friday: "08:00 - 20:00",
      saturday: "08:00 - 22:00",
      sunday: "08:00 - 22:00",
    },
    anotherSection: [
      {
        name1: "xcxc",
        description: "xcxcc",
        image: "xcs",
        name2: "xcxc",
        name3: "xcxc",
      },
    ],
  },
  {
    title: "ლომისის წმინდა გიორგის სახელობის ეკლესია",
    src: "/home/lomisi-church-gnta.webp",
    modalSrc: "/home/lomisi-church-gnta.webp",
    additionalDescription:
      "სვანეთი ცნობილია თავისი უნიკალური კოშკებითა და მთიანი პეიზაჟებით.",
    region: "სვანეთი",
    city: "მესტია",
    description: "კულტურული ძეგლები",
    name: "სვანეთი",
    address: "მესტია, სვანეთის რეგიონი",
    phone: "+995 577 789 012",
    website: "",
    workingHours: {
      monday: "08:00 - 20:00",
      tuesday: "08:00 - 20:00",
      wednesday: "08:00 - 20:00",
      thursday: "08:00 - 20:00",
      friday: "08:00 - 20:00",
      saturday: "08:00 - 22:00",
      sunday: "08:00 - 22:00",
    },
    anotherSection: [
      {
        name1: "xcxc",
        description: "xcxcc",
        image: "xcs",
        name2: "xcxc",
        name3: "xcxc",
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
  header: string;
  desc: string;
  img: string;
}

interface CityTime {
  name: string;
  times: string[];
}

interface Title {
  id: number;
  text: string;
  bla: string[];
}

interface SlideImage {
  id: number;
  src: string;
  modalSrc: string;
  alt: string;
  region: string;
  title: Title[];
  description: string;
  citiesTimes: CityTime[];
  descriptionTexts: DescriptionTexts[];
  range: Range[];
}

export const images: SlideImage[] = [
  {
    id: 1,
    src: "/picture/modalapxazeti.webp",
    modalSrc: "/picture/modalapxazeti.webp",
    alt: "აფხაზეთი",
    region: "აფხაზეთი",
    title: [
      {
        id: 1,
        text: "აფხაზეთი",
        bla: ["სოხუმი", "გალი", "ოჩამჩირე"],
      },
    ],
    description:
      "„სულის ქვეყანა“ - ხშირად ასეც ეძახიან დღემდე იდუმალებით მოცულ ამ მხარეს, რომელიც ცნობილია თავისი ზღვაში ჩაძირული ქალაქებით, „ოქროს ვერძის“ ლეგენდით, მზის ტაძრებით, უძველესი სამარხებითა და ციხესიმაგრეებით. ადამიანები აქ ქვის ხანიდან მოყოლებული ცხოვრობდნენ, მასზე აღფრთოვანებით წერდნენ: ჰეროდოტე, სტრაბონი, ფლავიუსი, არიანე, არქანჯელო ლამბერტი თუ შარდენი.",
    citiesTimes: [
      { name: "თბილისი", times: ["7 სთ"] },
      { name: "ბათუმი", times: ["3:45 სთ"] },
      { name: "ქუთაისი", times: ["3:30 სთ"] },
    ],
    descriptionTexts: [
      {
        header: "სოხუმი",
        img: "",
        desc: "საქართველოს შემადგენელი ნაწილი - აფხაზეთი, რომლის ფართობიც 8,700 კვ.კმ-ია, ქვეყნის უკიდურეს ჩრდილო-დასავლეთში მდებარეობს, ის ჩრდილოეთიდან - კავკასიონის მთავარი ქედით, სამხრეთ-დასავლეთიდან კი შავი ზღვით არის დაცული. აფხაზეთის სანაპირო ზოლის სიგრძე 195 კმ-ია. ჰავა აქ თბილია, ნოტიო და სუბტროპიკული.",
      },
      {
        header: "სოხუმის ბოტანიკური ბაღი ",
        img: "",
        desc: "აფხაზეთის ოაზისი კავკასიაში უძველესი ბოტანიკური ბაღია, სადაც 5000-ზე მეტი ჯიშის ეგზოტიკური მცენარე წელიწადის ყველა სეზონზე ხარობს, მნახველს შეუძლია დატკბეს ჩრდილოეთ ამერიკიდან, სამხრეთ-აღმოსავლეთ აზიიდან, ავსტრალიიდან და სხვა ქვეყნებიდან ჩამოტანილი იშვიათი ჯიშის მცენარეებით, ისეირნოს ბამბუკის გრძელ ხეივანში, დაისვენოს გიგანტური, 20 მეტრის სიმაღლის 250 წლის ცაცხვის ხის ჩრდილში,  დატკბეს უდაბნოებიდან ჩამოტანილი სუკულენტებით.",
      },
      {
        header: "აფხაზეთის ღირსშესანიშნაობები ",
        img: "",
        desc: "სამხატვრო გალერეა, სახელმწიფო მუზეუმი, ბაგრატიონთა ეპოქის (XI საუკუნე) ნაგებობების ნაშთი, სტალაქტიტური მღვიმეები სოფელ შრომასთან, უნიკალური ფერმა-ლაბორატორია - პრიმატორიუმი, შერვაშიძეთა საგვარეულო სამფლობელო - ყველაფერი ეს სოხუმსა და მის შემოგარენში შეგიძლია დაათვალიერო. \n\n აქ ბევრი საინტერესო ადგილი და ულამაზესი პეიზაჟია, რომლებითაც სოხუმის ბორცვიდან, სოხუმის ციხიდან, ანაკოფიის ციხესიმაგრიდან, ბაგრატის ციხიდან, „სოხუმის შუქურადან“ დატკბები. ",
      },
      {
        header: "კიდევ რა უნდა ნახო აფხაზეთში?",
        img: "",
        desc: "გუდაუთის რაიონში ზღვის დონიდან 1950 მეტრზე მდებარეობს მსოფლიოში ერთ-ერთი ყველაზე ღრმა კარსტული მღვიმე, რომლის ზედა ნაწილი ზამთარ-ზაფხულ ყინულითაა დაფარული; აუცილებლად სანახავია ახალი ათონის კარსტული მღვიმე, გიგანტური სტალაგმიტებითა და გაქვავებული ჩანჩქერებით; ასევე - მსოფლიოში ყველაზე ღრმა, კრუბერის გამოქვაბული. \n\n ლაშქრობის მოყვარულებისთვის იდეალური ადგილია სოფელი განთიადი, სადაც რამდენიმე მეტრში ჰაშუფსეს კანიონია. ველური ბუნება, ფერდობები და პლატოები, თვალუწვდენელი კლდეები, ქვის ლაბირინთებთან ერთად, დიდ შთაბეჭდილებას ახდენს მნახველზე. აუცილებლად მოსანახულებელია სპელეოლოგების ბანაკი, რომელიც არაბიკის მასივზე 2656 მეტრის სიმაღლეზე მდებარეობს. აქ კარვის გაშლა და ღამის გათენებაც შესაძლებელია. \n\n ნახე ძოუს ულამაზესი ტბა, გეგის ფერდობი და ჩანჩქერი, ულამაზესი ფიჭვებით სავსე ბიჭვინთის ჩრდილოეთით საქართველოში ყველაზე ღრმა რიწის ტბის სილამაზე იხილე - წიწვოვანი ნაძვებითა და კოლხური ბზით გარშემორტყმული საოცრება. \n\n აფხაზეთშია საქართველოს უდიდესი მდინარეები ბზიფი და კოდორი და მსოფლიოში ყველაზე პატარა მდინარე რეპრუა, რომლის სიგრძე 18 მეტრს არ აღემატება. აქ, რიწის, ფსხუ-გუმისთისა და ბიჭვინთა-მიუსერას ნაკრძალებში, უნიკალური მცენარეებისა და ცხოველების ნახვაა შესაძლებელი.",
      },
      {
        header: "აფხაზური კერძები",
        img: "",
        desc: "აფხაზურ სამზარეულოში დიდი ადგილი უჭირავს ბოსტნეულს, ხილს, რძის პროდუქტებს. მნიშვნელობა არ აქვს, პატარა ფაცხაში შეისვენებ თუ რესტორანში, ტრადიციულ კერძებს აუცილებლად შემოგთავაზებენ. \n\n აბისტა სიმინდის ფქვილის ფაფაა, რომელიც ძალიან უხდება ლობიოს, ყველსა და ხორცს. აფხაზური ტრადიციული კერძია აშვჩაპანი, იგივე გადაზელილი ყველი, არიცმგელი, ანუ ნიგვზიანი მჭადი, აყრდცა - ლობიოს შეჭამადი, აფხაზური აჯიკა, ლეღვის ტყლაპი და სხვა. \n\n თუ გუდაუთაში, სოფელ ლიხნში მოხვდები ტრადიციულ დღესასწაულ „ლიხნაშტაზე“, აფხაზურ სამზარეულოს ნიმუშებს სრულიად უსასყიდლოდ დააგემოვნებ, თუმცა ეს არც სხვაგან გაგიჭირდება - აფხაზეთში, ისევე როგორც მთელ საქართველოში, სტუმრისთვის კარი ყოველთვის ღიაა.",
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
    src: "/modal/svaneti.webp",
    modalSrc: "/picture/samegrelo.webp",
    alt: "სამეგრელო-ზემო სვანეთი",
    region: "სამეგრელო-ზემო სვანეთი",
    title: [
      {
        id: 2,
        text: "სამეგრელო-ზემო სვანეთი",
        bla: ["მესტია", "ფოთი", "აბაშა"],
      },
    ],
    description:
      "სამეგრელო-ზემო სვანეთი საქართველოს ერთ-ერთი ულამაზესი და საინტერესო მხარეა, რომელიც ქვეყნის ცენტრალურ ჩრდილო-დასავლეთ ნაწილში მდებარეობს და ორ უძველეს, ერთმანეთისგან განსხვავებულ ისტორიულ-გეოგრაფიულ ტერიტორიას მოიცავს - სამეგრელოსა და ზემო სვანეთს, მათი ცენტრები კი, შესაბამისად, ქალაქი ზუგდიდი და დაბა მესტიაა.",
    citiesTimes: [
      { name: "თბილისი", times: ["5:30 სთ"] },
      { name: "ბათუმი", times: ["2:15 სთ"] },
      { name: "ქუთაისი", times: ["2 სთ"] },
    ],
    descriptionTexts: [
      {
        header: "",
        img: "",
        desc: "სამეგრელო-ზემო სვანეთი აღმოაჩენ ქართული ხუროთმოძღვრების სხვადასხვა ეპოქის უნიკალურ ძეგლებს, რომლებიც ჩვენს საუკუნოვან ისტორიას შენ თვალწინ გააცოცხლებს, შეგაყვარებს აქაურ საკულტო შენობებს, ძირძველ ტრადიციებს. აქ იმოგზაურებ დაუჯერებელი სილამაზის, ხელუხლებელ ბუნებაში და დააგემოვნებ არჩვეულებრივ სამზარეულოს. \n\n ამ მხარეში მარშრუტის შედგენა ნამდვილად არ გაგიჭირდება.",
      },
      {
        header: "სამეგრელო",
        img: "/image/samegrelo.webp",
        desc: "სამეგრელო დასავლეთ საქართველოს ცენტრალურ ნაწილში მდებარეობს, მოქცეულია შავ ზღვასა და მდინარეებს - რიონს, ენგურსა და ცხენისწყალს შორის. აქ ნოტიო სუბტროპიკული ჰავაა, უმეტესად უთოვლო ზამთარი და ცხელი ზაფხული იცის, უხვია მდინარეებით, ჭაობებით, წყაროებითა და ტბებით. \n\n ამ ტერიტორიაზე ჯერ კიდევ ძვ. წ. VI-II საუკუნეებში კოლხეთის სამეფო არსებობდა, რომელსაც რეგულარული კონტაქტები ჰქონდა ბერძნულ სამყაროსთან. სწორედ კოლხეთის სამეფოს უკავშირდება იასონისა და არგონავტების მითი, რომელიც ბერძნული მითოლოგიის მოყვარულებმა კარგად იციან. \n\n  ჩვენს წელთაღრიცხვამდე I საუკუნეში კოლხეთი რომაელების ბატონობის ქვეშ მოექცა. მოგვიანებით დასავლეთ და აღმოსავლეთ საქართველოების გაერთიანებით შექმნილი სამეფოს ნაწილი გახდა, შემდეგ ოდიშის სამთავროს წარმოადგენდა, XIX საუკუნეში რუსეთის პროტექტორატად გამოცხადდა, 1918 წელს დამოუკიდებელი დემოკრატიული ქვეყნის ნაწილი იყო, დღეს კი ისტორიული სამეგრელოს ტერიტორია სამეგრელო-ზემო სვანეთის ადმინისტრაციულ ერთეულს ეკუთვნის. მოიცავს აბაშას, მარტვილს, სენაკს, ჩხოროწყუს, წალენჯიხას, ხობსა და საპორტო ქალაქ ფოთს.",
      },
      {
        header: "სამეგრელოს ბუნება",
        img: "/image/kolkheti.webp",
        desc: "სამეგრელოს ბუნების აღმოჩენა კოლხეთის ეროვნული პარკიდან უნდა დაიწყო, რომელიც შავი ზღვის სანაპიროზე, პალიასტომის ტბის მიდამოებში მდებარეობს. ტბაზე გასეირნებას ნავებით, კატერით, პონტონით ან კაიაკით შეძლებ, დაათვალიერებ უნიკალურ კოლხურ ტყეს და ჭარბტენიან ტერიტორიებს, რომლებსაც დღეს იუნესკო იცავს; სათვალთვალო კოშკებიდან დააკვირდები ასამდე სახეობის გადამფრენ ფრინველს. \n\n საოცარია მთიანი სამეგრელო. ფერად-ფერადი ტბების სანახავად წალენჯიხაში, ეგრისის ქედზე უნდა ახვიდე, ზღვის დონიდან 2650 მეტრზე - აქ მყინვარული ტბა ტობავარჩხილია, იქვეა მდინარე მაგანის ჩანჩქერები და პატარა ტბები. \n\n აუცილებლად სანახავი ადგილების სიაში უნდა მოინიშნო ბუნების უნიკალური ძეგლები, როგორებიც არის ქუაქანცალია - წალენჯიხაში მისტიკურად მოქანავე 12-ტონიანი ლოდი; კაცობურის აღკვეთილი; ინწრის ხეობა; ონიორესა და ოჩხომურის ჩანჩქერები; ასევე მარტვილისა და ბალდის კანიონები. \n\n  ზღვაზე დასვენება თუ გსურს, მაშინ მალთაყვას და ანაკლიას მიაშურე.",
      },
      {
        header: "სამეგრელოს ღირსშესანიშნაობები",
        img: "/image/dadiani.webp",
        desc: "ბევრი ტურისტი სამეგრელოში მოგზაურობას იმ ზღაპრული სასახლიდან იწყებს, რომელიც სამეგრელოს დედაქალაქ ზუგდიდში დგას და XVII საუკუნიდან რეგიონის სავიზიტო ბარათია. ეს იყო სამეგრელოს სახელგანთქმული მთავრების - დადიანების რეზიდენცია. სასახლეში ახლა სახელმწიფო მუზეუმია, სადაც მსოფლიო მნიშვნელობის სამუზეუმო ექსპონატები და რელიგიური სიწმინდეები ინახება. \n\n  არა მხოლოდ სამეგრელოს, არამედ მთელი საქართველოს ერთ-ერთი უმნიშვნელოვანესი ძეგლია ნოქალაქევი, რომლის ისტორიაც ძვ. წ. VIII საუკუნიდან იწყება და რომელიც ახ.წ. V-VI საუკუნეებში დასავლეთ საქართველოს დედაქალაქად იქცა. \n\n  სამეგრელოს ხანგრძლივ ისტორიას ინახავს ხუროთმოძღვრების საინტერესო ძეგლები - მარტვილის ღვთისმშობლის სახელობის ტაძარი (VII), ცაიშის საკათედრო ტაძარი (X-XI), კორცხელის ღვთისმშობლის ეკლესია (XVII), ხობის მონასტერი (XIII-XIV), აბედათის ციხესიმაგრე ( IV-VI) და ეკლესია (IX), რუხის ციხე (XVII), შხეფის ციხე (IV-XVI) და სხვა. \n\n  სამეგრელოშია ქვეყნის ყველაზე დიდი ჰიდროელექტროსადგური „ენგურჰესი“ - XX საუკუნის საქართველოს ურთულესი და უბრწყინვალესი ნაგებობა. \n\n  აქ, მდინარე ენგურზე, ნავებით გასეირნება და ექსკურსიების მოწყობაც არის შესაზლებელი შენობის შიგნით.",
      },
      {
        header: "ზემო სვანეთი",
        img: "/image/svaneti.webp",
        desc: "როცა თოვს და გარემო თეთრად იპენტება, ირგვლივ ყველაფერი წვრილ ნაქარგებად ჩანს, ქვითა და ლოდებით ნაშენი კოშკები კი მისტიკური მდუმარების მცველებს ჰგავს. ეს სვანეთია - ზემო სვანეთი, საქართველო. \n\n სამეგრელოდან მდინარე ენგურის ხეობას მიუყვება გზა ზემო სვანეთისკენ, რომლის ტერიტორია ენგურის სათავიდან იწყება და სამეგრელოს საზღვართან მთავრდება.",
      },
      {
        header: "ზემო სვანეთის ბუნება",
        img: "/image/ushguli.webp",
        desc: "ზემო სვანეთი, მესტიის მუნიციპალიტეტი, მაღალმთიანი მხარე და ტურიზმისა და ალპინიზმის კერაა თავისი ალპური ბუნებით, კამკამა ტბებით, მდინარე ენგურითა და მისი სწრაფი შენაკადებით, ღვთაებრივი ჩანჩქერებითა და კავკასიონის დიდებული მწვერვალებით, როგორებიცაა: შხარა (5203 მ), ჯანღა (5078 მ), გისტოლა (4860 მ), თეთნულდი (4852 მ), წურუნგალა (4222 მ), აილამა (4547 მ), მაზერი (4012 მ), ჩათინი (4412 მ) და უშბა (4700 მ). \n\n მესტიის სათხილამურო კურორტებზე - ჰაწვალსა და თეთნულდზე - დაუვიწყარი ზამთარი გელის. ხანმოკლე ზაფხულში კი აქაურობა ზღაპრულად ლამაზია და ლაშქრობისა და თავგადასავლებისთვის  უკეთეს ადგილს ვერც ინატრებ.",
      },
    ],
    range: [
      {
        min: 132,
        max: 47,
      },
    ],
  },
  {
    id: 3,
    src: "/modal/rawa.webp",
    modalSrc: "/picture/rawa.webp",
    alt: "რაჭა",
    region: "რაჭა",
    title: [
      {
        id: 3,
        text: "რაჭა",
        bla: ["ამბროლაური", "ონი", "შოვი"],
      },
    ],
    description:
      "საქართველოს ამ ულამაზეს მხარეს ქვეყნის სამი საოცარი კუთხე - რაჭა, ლეჩხუმი და ქვემო სვანეთი შეადგენს. რაჭა და ლეჩხუმი კავკასიონის ქედის გასწვრივ, ქვეყნის უკიდურეს ჩრდილო-დასავლეთ ნაწილში მდებარეობს, ქვემო სვანეთი ჩრდილოეთით, კავკასიონის ქედის სამხრეთ კალთებზეა შეფენილი. მდინარეების - რიონის, ცხენისწყლისა და ლაჯანურის ხეობებში განფენილ რეგიონს იმერეთი, სამაჩაბლოში (ე. წ. სამხრეთ ოსეთი) შემავალი ჯავის მუნიციპალიტეტი და სამეგრელო-ზემო სვანეთის მხარე ესაზღვრება.",
    citiesTimes: [
      { name: "ქუთაისი", times: ["1:20 სთ"] },
      { name: "თბილისი", times: ["3:30 სთ"] },
      { name: "ბათუმი", times: ["4:20 სთ"] },
    ],
    descriptionTexts: [
      {
        header: "რაჭა ლეჩხუმის და ქვემო სვანეთის მუნიციპალიტეტები",
        img: "",
        desc: "რაჭა-ლეჩხუმ - ქვემო სვანეთში ოთხი მუნიციპალიტეტია: ამბროლაურის (ქვემო რაჭა), ონის (ზემო რაჭა), ცაგერის (ლეჩხუმი), ლენტეხის (ქვემო სვანეთი). მხარეში არის 3 ქალაქი - ამბროლაური, ონი, ცაგერი, 2 დაბა - ლენტეხი და ხარისთვალა და 251 სოფელი. მხარის ადმინისტრაციული ცენტრია ქალაქი ამბროლაური. 4954 კვ.მ ფართობის მქონე ეს მხარე უნიკალური ისტორიითა და ხუროთმოძღვრული ძეგლებით გამოირჩევა, აქ მრავალფეროვანი ბუნებაა, მწვერვალები, მღვიმეები, მდინარეები, ჩანჩქერები და ტბები.",
      },
      {
        header: "რაჭა-ლეჩხუმ - ქვემო სვანეთის ისტორია",
        img: "/image/khvamli.webp",
        desc: "ბერძნული მითოლოგიით, პრომეთესთან დაკავშირებული ხვამლის მთა, სადაც ღმერთებთან მებრძოლი მითური გმირი იყო მიჯაჭვული, სწორედ ცაგერის ტერიტორიაზე მდებარეობს. რაც შეეხება ისტორიულ წყაროებს, მათი მიხედვით, რაჭა-ლეჩხუმ - ქვემო სვანეთში ადამიანების ცხოვრების პირველი ნიშნები ქვის ხანით თარიღდება. ამ ტერიტორიებზე აღმოჩენილია ბრინჯაოსა და რკინის ხანის ნივთები. სვანეთში აღმოჩენილი ბრინჯაოს ხანის სპილენძის მაღაროები ადასტურებს, რა როლი ითამაშა მხარემ ამ მადნის მოპოვებასა და დამუშავებაში. \n\n  უძველესი სვანები მაღალი ხარისხის ბრინჯაოს იღებდნენ. ამ თვალსაზრისით გამორჩეული იყო მდინარე რიონის ზემო წელი, სადაც ბრინჯაოს წარმოების მსხვილი ცენტრები არსებობდა. სვანეთს უდიდესი როლი აქვს ოქროს წარმოების განვითარებაშიც. ადრეულ საუკუნეებში ეს მხარე კოლხეთის სამეფოს შემადგენლობაში შედიოდა და სავარაუდოდ მითი ოქროს საწმისის შესახებ სვანეთში ოქროს მოპოვების ტრადიციასაც უკავშირდება. \n\n  რაჭა-ლეჩხუმ-ქვემო სვანეთი კარგად იყო დაცული როგორც ბუნებრივი პირობებით, ისე ციხესიმაგრეებით, რის გამოც მას ხშირად აფარებდნენ თავს მტრისაგან დევნილი მეფეები და დიდგვაროვანთა ოჯახები. ცაგერს, ისევე, როგორც სვანეთს, სამეფო განძსაცავსაც უწოდებდნენ. ",
      },
      {
        header: "რაჭა-ლეჩხუმის ისტორიული ძეგლები",
        img: "/image/nik.webp",
        desc: "რაჭა-ლეჩხუმ - ქვემო სვანეთშია ქართული ხუროთმოძღვრების შედევრი - ნიკორწმინდის ტაძარი, აქაა: ბარაკონი, ლაბეჭინა, მრავალძალის, გონის მთავარანგელოზის, სხიერის სამონასტრო კომპლექსი, ხოტევისა და მინდას ციხეები, კვარაციხე, ციკლოპური ნაციხარი, გონისა და ცხეთის წმ. გიორგის ეკლესიები, მურისა და ორბელიანის ციხესიმაგრეები, ონის სინაგოგა და ბევრი სხვა.",
      },
      {
        header: "პრომეთეს მთა, შაორის წყალსაცავი და სხვა",
        img: "",
        desc: "რაჭა-ლეჩხუმ - ქვემო სვანეთის უნიკალური ბუნება - მაღალი, საშუალო და დაბალი სიმაღლის ქედები, მრავალფეროვანი ტყეები, მღვიმეები, მდინარეები, ჩანჩქერები და ტბები სათავგადასავლო მოგზაურობის მოყვარულებისთვის დაუვიწყარი შთაბეჭდილებების ზადგილია. თუმცა პრომეთესთან დაკავშირებული ხვამლის მთა ბევრ მოგზაურში მისტიკურ განწყობასაც ტოვებს. მითებისა და მისტიკური ისტორიების მოყვარულებს ის ნამდვილად დააინტერესებს. \n\n ხვამლის მთა ლეჩხუმში, ცაგერისა და წყალტუბოს მუნიციპალიტეტების ტერიტორიაზეა. ანტიკური წყაროების მიხედვით, ზევსის ბრძანებით, ხვამლზე, იგივე ხომლზე, მიაჯაჭვეს პრომეთე და მის დასახსნელად ჩამოვიდა აქ ჰერაკლე, ეს მთა იყო ბერძენი არგონავტების მოგზაურობის ადგილიც. ქართული ლეგენდის მიხედვით, ხვამლის მთა უდიდეს საიდუმლოს ინახავს. დაზუსტებით არავინ იცის, განძია საიდუმლოში ნაგულისხმევი თუ რამე სხვა. \n\n  რეგიონის სავიზიტო ბარათია შაორისა და ლაჯანის წყალსაცავები, რომლებიც ულამაზესი სანახავია. შთამბეჭდავია ნიკორწმინდისა და სხვავის კარსტული მღვიმეები, სიყვარულის, რაჩხისა და ჩქუმის ჩანჩქერები, ქულბაქის, უძირო და სასვანო ტბები. \n\n  დაუვიწყარია ლაშქრობა ბუბისა და კირტიშოს მყინვარებსა თუ ჭიორისა და ხიხათის მთებზე. გამორჩეული სანახავია საირმის სვეტები და ასხივის მასივი.",
      },
      {
        header: "რაჭა-ლეჩხუმის კურორტები",
        img: "/image/res.webp",
        desc: "რაჭა-ლეჩხუმ - ქვემო სვანეთი მთაში დასვენების მოყვარულებისთვის ერთ-ერთი საუკეთესო ადგილია. აქ მრავლადაა სამკურნალო მინერალური წყლები და კლიმატურ-ბალნეოლოგიური კურორტები: შოვი, უწერა, ლაშიჭალა, ბუგეული და ა.შ. აქ მათივე სახელობის სამკურნალო წყლები მოიპოვება.",
      },
      {
        header: "განსაკუთრებული ღვინოები და სამზარეულო",
        img: "",
        desc: "საქართველოში ვაზის 525 ჯიშია გავრცელებული და რაჭა-ლეჩხუმ - ქვემო სვანეთში მრავალ მათგანს ახარებენ. „ხვანჭკარა“, „ალექსანდროული“, „ოჯალეში“, „რაჭული თეთრა“ და სხვა აქაური ღვინოები ღრმა, საინტერესო გემოვნებით გამოირჩევა. საქართველოში და უკვე მსოფლიოში პოპულარობით სარგებლობს ქვემო რაჭის ღვინო „ხვანჭკარა“, ლეჩხუმში კი განსაკუთრებულ ყურადღებას იმსახურებს ცოლიკაურის ჯიშის ყურძნისგან დაწურული „ტვიში“. ცალკე უნდა აღინიშნოს ერთ-ერთი ყველაზე ძვირფასი ქართული ღვინო - „უსახელოური“. \n\n რაჭა-ლეჩხუმის ღვინოებთან ერთად, აუცილებლად დასაგემოვნებელია აქაური მდიდარი სამზარეულოს ნიმუშები: ხავიწი, ლორი, ლობიანი, წყალდასხმულა, ჯორმა, მაჭყვინარა და გამორჩეული სვანური კერძები: კუბდარი - ცომში მოთავსებული შესუნელებული ხორცით მომზადებული უგემრიელესი გულსართიანი; ჭვიშტარი – გამომცხვარი სიმინდის ფქვილის და წელვადი ყველის ნაზავი; ასევე თაშმიჯაბი - რომელიც კარტოფილითა და ყველით კეთდება.",
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
    id: 4,
    src: "/picture/imereti-gnta.webp",
    modalSrc: "/picture/imereti-gnta.webp",
    alt: "იმერეთი",
    region: "იმერეთი",
    title: [
      {
        id: 4,
        text: "იმერეთი",
        bla: ["ქუთაისი", "წყალტუბო", "დაღდათი"],
      },
    ],
    description:
      "საქართველოს ისტორიული დედაქალაქი ქუთაისი, ანტიკური ნაქალაქარი ვანი, დინოზავრის ნაკვალევითა და ბალნეოლოგიურ-გამაჯანსაღებელი წყლებით მდიდარი კურორტი წყალტუბო – ეს მხოლოდ მცირე ჩამონათვალია იმ ადგილებისა, რომლებსაც იმერეთში, დასავლეთ საქართველოს ერთ-ერთ გამორჩეულ მხარეში შეხვდები.",
    citiesTimes: [
      { name: "თელავი", times: ["5:10 სთ"] },
      { name: "ბათუმი", times: ["2:20 სთ"] },
      { name: "თბილისი", times: ["3:30 სთ"] },
    ],
    descriptionTexts: [
      {
        header: "იმერეთის ისტორიული და კულტურული მნიშვნელობა",
        img: "",
        desc: "არქეოლოგიური გათხრების შედეგად აღმოჩენილი ნივთები - ძვ.წ. IV საუკუნის იარაღი, ძვ.წ. VIII საუკუნით დათარიღებული კერამიკული ნაკეთობები, XI საუკუნის სახარება და ბევრი სხვა არტეფაქტი მოწმობს, რომ აქ, იმერეთში, კავკასიაში პირველი ადამიანები ცხოვრობდნენ, ქუთაისი კი კოლხეთის სამეფოს დედაქალაქი იყო. ",
      },
      {
        header: "რა ვნახოთ იმერეთში?",
        img: "",
        desc: "დედაქალაქის სტატუსი ქუთაისს შუა საუკუნეებამდე შემორჩა. ამიტომაცაა, რომ იმერეთი თავის სტუმრებს მთელი საქართველოს ისტორიას უძველესი ღირსშესანიშნაობებით უყვება. ამ ღირსშესანიშნაობების სანახავად, სულ ცოტა, ვანს, ქუთაისსა და წყალტუბოს უნდა ეწვიო - დაათვალიერო ანტიკური ნაქალაქარი, შეეხო დინოზავრის ნაკვალევს, მოისმინო ამაღელვებელი ისტორიები არგონავტების მოგზაურების შესახებ და საოცარი ბუნებითაც დატკბე. \n\n თუ ლაშქრობის მოყვარული ხარ, ქალაქების დათვალიერების შემდეგ ტური წყალტუბოს გაბზარული ტბით, კინჩხის ჩანჩქერითა და ოკაცეს კანიონით შეგიძლია გააგრძელო. ეს უკანასკნელი ხონის მუნიციპალიტეტში მდებარეობს. ის ბუნებრივი ქვახიდითა და მღვიმეებით გაგაოცებს. ექსტრემის მოყვარულებს კი გამჭვირვალე საფარის მქონე კიდული ბილიკები ელოდება. 2-3-საათიანი ტურის ბოლოს განსაკუთრებული სამახსოვრო ფოტოს გადაღების შესაძლებლობას იქ მდგარი სმარტ-სელფის აპარატი მოგცემს. \n\n მოგზაურთა შემდეგი გაჩერება სოფელი კინჩხაა, სადაც ზღვის დონიდან 843 მეტრზე სამ საფეხურად გადმომავალი ჩანჩქერის კასკადს ნახავ. \n\n იმერეთში აუცილებლად მოსანახულებელ ბუნების მშვენებებს შორისაა: ნავენახევის მღვიმე, ლომინა, ხანის ჩანჩქერი, ქვასაყდარა, მუხურას ჩანჩქერი.",
      },
      {
        header: "",
        img: "/image/vani.webp",
        desc: "ისტორიული ღირსშესანიშნაობებიდან მნიშვნელოვანი ადგილი უჭირავს სასულიერო მოღვაწის, გრიგოლ ხანძთელისა და მისი მოსწავლის მიერ IX საუკუნეში აგებულ უბისის მონასტერს. ტაძარი XIV საუკუნეში მოიხატა. ფრესკებს შორის გამორჩეულია „საიდუმლო სერობა“ და წმინდა გიორგის ფრესკა. მონასტრის გვერდით 1141 წელს აგებული ოთხსართულიანი კოშკიც დგას. \n\n უნდა ნახო ვანის ნაქალაქარი, აქ აღმოჩენილი არტეფაქტები ანტიკური საბერძნეთისა და ელინური კულტურის შესახებ მოგიყვება და დაგიდასტურებს, რომ ქრისტეს შობამდე VIII საუკუნით ადრე ამ ტერიტორიაზე კოლხეთის სამეფო არსებობდა. წითელ წიგნში შეტანილ კაცხის სვეტზეც უნდა ახვიდე - ჭიათურის მუნიციპალიტეტის სოფელ კაცხში, სადაც 40 მეტრი სიმაღლის კლდის წვერზე ეკლესიაა აშენებული. \n\n აუცილებლად მოინახულე მოწამეთაც - ქუთაისიდან 6 კმ-ში, ტყიბულის მუნიციპალიტეტში მდებარე სამონასტრო კომპლექსი, რომლის სიცოცხლეც ათვლას VIII საუკუნიდან იწყებს. მწვანეში ჩაფლულ ულამაზეს კომპლექსამდე მოკლე საფეხმავლო გზა მიგიყვანს. ეს ერთგვარი ხერხია, ბოლომდე შეიგრძნო გარემო, რომელიც შენ თვალწინ იშლება - წლის სხვადასხვა დროს სხვადასხვაფრად შეღებილი მთები და მათ შორის მორბენალი, ყოველთვის წითელი მდინარე, რომელსაც ფერადი სახელი - წყალწითელა ჰქვია.",
      },
      {
        header: "",
        img: "/image/bagrati.webp",
        desc: "ეწვიე 1003 წელს გაერთიანებული საქართველოს დედაქალაქში, ქუთაისში, ქვეყნის ერთიანობის სიმბოლოდ აგებულ ბაგრატის ტაძარსაც და UNESCO-ს მსოფლიო მემკვიდრეობის ძეგლს - გელათის სამონასტრო კომპლექსს, რომლის შუა საუკუნეებში დაარსებულ აკადემიას თანამედროვეები „აღმოსავლეთის მეორე იერუსალიმს“ უწოდებდნენ. \n\n სანახავს იმერეთში რა დალევს, მთავარია, დრო და სურვილი გქონდეს. ",
      },
      {
        header: "კლიმატი იმერეთში",
        img: "",
        desc: "იმერეთში ორი მდინარე – რიონი და ყვირილა ჩამოედინება. აქ ტყეს 2500 ჰექტარი უჭირავს. რეგიონისთვის დამახასიათებელია ნოტიო კლიმატი. ზამთარი ცივია, ზაფხული კი - ცხელი.",
      },
      {
        header: "იმერული სამზარეულო",
        img: "",
        desc: "იმერული სამზარეულო განსაკუთრებულია არა მხოლოდ საქართველოში, არამედ მთელ კავკასიაში. აქ მთავარი კერძი იმერული ხაჭაპურია, რომლის საიდუმლოც იმერულ ყველშია. \n\n  ეს მხარე ვეგეტარიანული კერძების მრავალფეროვნებით გამოირჩევა: ნიგვზიანი ფხალი, იმერული ლობიო და ბევრი სხვა… თუმცა იმერელი დიასახლისები ხორცით მომზადებული კერძების ოსტატებიც არიან: საცივის იმერული ვერსია, რომელიც ქათმის ხორცისგან მზადდება, ახალი წლის მთავარი კერძია. \n\n იმერეთი სტუმარმასპინძლობით ცნობილ საქართველოშიც კი გამორჩეული მასპინძელია. ამიტომ გამორიცხული არ არის, ამ საოცარი კერძების დაგემოვნება შენთვის სრულიად უცხო ოჯახში ექსპრომტად მიწვეულს რომ მოგიწიოს.",
      },
    ],
    range: [
      {
        min: 104,
        max: 14,
      },
    ],
  },
  {
    id: 5,
    src: "/picture/guria-gnta.webp",
    modalSrc: "/picture/guria-gnta.webp",
    alt: "გურია",
    region: "გურია",
    title: [
      {
        id: 5,
        text: "გურია",
        bla: ["ბახმარო", "ლანჩხუთი", "ოზურგეთი"],
      },
    ],
    description:
      "თუ გსურს, გაიგო, რას ნიშნავს მასპინძლობის უმაღლესი ხელოვნება, გურიაში უნდა იმოგზაურო. საქართველოს ამ ყველაზე პატარა რეგიონში ყველაფერია იმისთვის, რომ შენი დასვენების დღეები დასამახსოვრებელი გახადო - პოზიტიური გურულები, დიდებული ბუნება, ისტორიული ძეგლები, გემრიელი კერძები და გენიალური კრიმანჭული, რომელსაც საკუთარი ყურით უნდა მოუსმინო...",
    citiesTimes: [
      { name: "თბილისი", times: ["4:55 სთ"] },
      { name: "ბათუმი", times: ["1 სთ"] },
      { name: "ქუთაისი", times: ["1:30 სთ"] },
    ],
    descriptionTexts: [
      {
        header: "სად მდებარეობს გურია?",
        img: "",
        desc: "გურია დასავლეთ საქართველოში, კოლხეთის დაბლობსა და მიმდებარე მთიან ზონაში მდებარეობს; დასავლეთიდან მას შავი ზღვის 22-კილომეტრიანი სანაპირო აკრავს. მთისა და ზღვის სიახლოვე კი გურიაში საინტერესო მოგზაურობას გპირდება.",
      },
      {
        header: "გურიის კურორტები",
        img: "/image/ba.webp",
        desc: "გურიის სიმდიდრე მისი კურორტებია. \n\n მთაში ბახმარო და გომისმთაა პოპულარული. ბახმაროში განვითარებული ტურისტული ინფრასტრუქტურა დაგხვდება, გომისმთაზე კი - უფრო ველური ბუნება. ორივე კურორტი ზამთარ-ზაფხულ აქტუალურია - მთის ჰაერით, წყაროებით, სალაშქრო ადგილებით, ზამთარში კი გაუკვალავი ფაფუკი თოვლით. \n\n გურიის ზღვის კურორტები - ურეკი, შეკვეთილი და გრიგოლეთი, მაგნიტური ქვიშის გამო, ძალიან პოპულარულია. ეს ვულკანური წარმოშობის ნაშალი ქანია, რომელიც მდინარე სუფსას ბახმაროს მთებიდან შავი ზღვის ნაპირებთან ჩამოაქვს. \n\n  აქ, სანაპიროზე, ბავშვებისა და უფროსებისთვის ბევრ გასართობს ნახავ. \n\n გურიას თავისი პატარა ამაზონი აქვს - მდინარე ფიჩორი, რომელიც კოლხეთის დაბლობზე, ხელშეუხებელ ბუნებაში მოედინება და პალიასტომის ტბას უერთდება. \n\n ამასთანავე, გურია მდიდარია მინერალური წყლებითაც, მათ შორის ყველაზე ცნობილია ნაბეღლავი. ეს მინერალური წყალი მსოფლიოს ბევრ ქვეყანაში იყიდება, კურორტ ნაბეღლავში კი შეგიძლია, წყაროდანვე დალიო - რამდენიც გსურს.",
      },
      {
        header: "გურიის კურორტები",
        img: "/image/ba.webp",
        desc: "გურიის სიმდიდრე მისი კურორტებია. \n\n მთაში ბახმარო და გომისმთაა პოპულარული. ბახმაროში განვითარებული ტურისტული ინფრასტრუქტურა დაგხვდება, გომისმთაზე კი - უფრო ველური ბუნება. ორივე კურორტი ზამთარ-ზაფხულ აქტუალურია - მთის ჰაერით, წყაროებით, სალაშქრო ადგილებით, ზამთარში კი გაუკვალავი ფაფუკი თოვლით. \n\n გურიის ზღვის კურორტები - ურეკი, შეკვეთილი და გრიგოლეთი, მაგნიტური ქვიშის გამო, ძალიან პოპულარულია. ეს ვულკანური წარმოშობის ნაშალი ქანია, რომელიც მდინარე სუფსას ბახმაროს მთებიდან შავი ზღვის ნაპირებთან ჩამოაქვს. \n\n  აქ, სანაპიროზე, ბავშვებისა და უფროსებისთვის ბევრ გასართობს ნახავ. \n\n გურიას თავისი პატარა ამაზონი აქვს - მდინარე ფიჩორი, რომელიც კოლხეთის დაბლობზე, ხელშეუხებელ ბუნებაში მოედინება და პალიასტომის ტბას უერთდება. \n\n ამასთანავე, გურია მდიდარია მინერალური წყლებითაც, მათ შორის ყველაზე ცნობილია ნაბეღლავი. ეს მინერალური წყალი მსოფლიოს ბევრ ქვეყანაში იყიდება, კურორტ ნაბეღლავში კი შეგიძლია, წყაროდანვე დალიო - რამდენიც გსურს.",
      },
    ],
    range: [
      {
        min: 10,
        max: 30,
      },
    ],
  },
  {
    id: 6,
    src: "/picture/adjara-gnta-m.webp",
    modalSrc: "/picture/adjara-gnta-m.webp",
    alt: "აჭარა",
    region: "აჭარა",
    title: [
      {
        id: 6,
        text: "აჭარა",
        bla: ["ბათუმი", "ქობულეთი", "ქედა"],
      },
    ],
    description:
      "შავი ზღვის მარგალიტი ისტორიით ძველი წელთაღრიცხვიდან, ქრისტიანობის გავრცელების პირველი კერით, უძველესი ციხესიმაგრეებით, ზღვიდან გადაჭიმული მაღალმთიანეთით, ველური ბუნებით, მეხსიერებისთვის წარუშლელი ხედებით, ხავერდოვანი ზღვით, უძველესი და თანამედროვე არქიტექტურის შერწყმით, უდიდესი სატრანზიტო და ტურისტული პოტენციალით - ეს აჭარაა, საქართველოს ყველაზე ლაჟვარდოვანი რეგიონი, სადაც ერთხელ სტუმრობა არ გეყოფა, ის კვლავ დაგიძახებს დასვენებისა და განუმეორებელი შეგრძნებებისთვის!",
    citiesTimes: [
      { name: "მესტია", times: ["6:10 სთ"] },
      { name: "ქუთაისი", times: ["2:20 სთ"] },
      { name: "თბილისი", times: ["5:30 სთ"] },
    ],
    descriptionTexts: [],
    range: [
      {
        min: 10,
        max: 30,
      },
    ],
  },
  {
    id: 7,
    src: "/modal/samtskhe-javakheti.webp",
    modalSrc: "/picture/samtskhe-javakheti-gnta.webp",
    alt: "სამცხე-ჯავახეთი",
    region: "სამცხე-ჯავახეთი",
    title: [
      {
        id: 7,
        text: "სამცხე-ჯავახეთი",
        bla: ["ახალქალაქი", "ახალციხე", "ბორჯომი"],
      },
    ],
    description:
      "სამცხე-ჯავახეთი ისტორიულ სამცხესა და ჯავახეთის ტერიტორიებს აერთიანებს. თბილისიდან სამცხე-ჯავახეთში მოხვედრა ორი გზითაა შესაძლებელი, გააჩნია, რომელ მხარეში მიდიხარ. თუ ბორჯომში აპირებ ჩასვლას, დასავლეთის მაგისტრალით ჯობია, ქალაქების - გორისა და ხაშურის გავლით; თუ ნინოწმინდა, ახალქალაქი ან ახალციხეა შენი დანიშნულების ადგილი, მაშინ სამხრეთის მაგისტრალია ხელსაყრელი.",
    citiesTimes: [
      { name: "თბილისი", times: ["3 სთ"] },
      { name: "ბათუმი", times: ["3:15 სთ"] },
      { name: "ქუთაისი", times: ["2:30 სთ"] },
    ],
    descriptionTexts: [],
    range: [
      {
        min: 10,
        max: 30,
      },
    ],
  },
  {
    id: 8,
    src: "/picture/shida-kartli-gnta.webp",
    modalSrc: "/picture/shida-kartli-gnta.webp",
    alt: "შიდა ქართლი",
    region: "შიდა ქართლი",
    title: [
      {
        id: 8,
        text: "შიდა ქართლი",
        bla: ["კასპი", "გორი", "ქარელი"],
      },
    ],
    description:
      "შიდა ქართლი საქართველოს ისტორიულ-გეოგრაფიული მხარეა, რომელიც აღმოსავლეთ საქართველოში, ქართლის ცენტრალურ ნაწილში მდებარეობს. ძველად ის ცნობილი იყო, როგორც ზენა სოფელი.",
    citiesTimes: [
      { name: "ქუთაისი", times: ["2:20 სთ"] },
      { name: "თბილისი", times: ["1:05 სთ"] },
      { name: "ბათუმი", times: ["4:30 სთ"] },
    ],
    descriptionTexts: [],
    range: [
      {
        min: 10,
        max: 30,
      },
    ],
  },
  {
    id: 9,
    src: "/modal/samacablo.webp",
    modalSrc: "/picture/sam.jpg",
    alt: "სამაჩაბლო",
    region: "სამაჩაბლო",
    title: [
      {
        id: 9,
        text: "სამაჩაბლო",
        bla: ["თბილისი", "კოჯორი", "კიკეთი"],
      },
    ],
    description:
      "სამაჩაბლო (სამხრეთ ოსეთი) მდებარეობს ჩრდილოეთით, ცნობილია მთიანი ლანდშაფტით.",
    citiesTimes: [
      { name: "ქუთაისი", times: ["2:20 სთ"] },
      { name: "თბილისი", times: ["1:05 სთ"] },
      { name: "ბათუმი", times: ["4:30 სთ"] },
    ],
    descriptionTexts: [],
    range: [
      {
        min: 10,
        max: 30,
      },
    ],
  },
  {
    id: 10,
    src: "/modal/mcxeta.webp",
    modalSrc: "/picture/mcxeta.webp",
    alt: "მცხეთა-მთიანეთი",
    region: "მცხეთა-მთიანეთი",
    title: [
      {
        id: 10,
        text: "მცხეთა-მთიანეთი",
        bla: ["სტეფანწმინდა", "მცხეთა", "დუშეთი"],
      },
    ],
    description:
      "მცხეთა-მთიანეთი საქართველოს ერთ-ერთი ულამაზესი მხარეა, რომელიც აღმოსავლეთ საქართველოს ჩრდილოეთ ნაწილში მდებარეობს. სწორედ ამ მხარეშია მოქცეული ზაფხულისა და ზამთრის ისეთი ტურისტული ადგილები, როგორებიცაა მცხეთა, მყინვარწვერი, გუდაური, თრუსოს ხეობა, დარიალის ხეობა, ფშავ-ხევსურეთის და ყაზბეგის ეროვნული პარკები.",
    citiesTimes: [
      { name: "თბილისი", times: ["2:10 სთ"] },
      { name: "ბათუმი", times: ["7 სთ"] },
      { name: "ქუთაისი", times: ["4:55 სთ"] },
    ],
    descriptionTexts: [],
    range: [
      {
        min: 10,
        max: 30,
      },
    ],
  },
  {
    id: 11,
    src: "/picture/tbil.webp",
    modalSrc: "/picture/tbil.webp",
    alt: "თბილისი",
    region: "თბილისი",
    title: [
      {
        id: 11,
        text: "თბილისი",
        bla: ["თბილისი", "კოჯორი", "კიკეთი"],
      },
    ],
    description:
      "ეს ქალაქი პოლიფონიურ მუსიკას ჰგავს, რომელსაც სიტყვები ვერ აღწერს - მას თავად უნდა მოუსმინო, მისი ჰარმონიულობა შეაფასო, ინტელექტუალიზმი იგრძნო და საკუთარი ემოცია აღმოაჩინო. თბილისი ევროპის ერთ-ერთი უძველესი დედაქალაქია და ის 15 საუკუნეა, რაც ქვეყნის კულტურული, პოლიტიკური და ეკონომიკური ცენტრია. ამ საქმიანი და მკაცრი სტატუსის მიღმა აქ ისეთი ატმოსფეროა, ერთხელ თუ გაიცნობ, უკან დაბრუნების სურვილი ბევრჯერ გაგიჩნდება.",
    citiesTimes: [
      { name: "ქუთაისი", times: ["1:20 სთ"] },
      { name: "თბილისი", times: ["3:30 სთ"] },
      { name: "ბათუმი", times: ["4:20 სთ"] },
    ],
    descriptionTexts: [],
    range: [
      {
        min: 10,
        max: 30,
      },
    ],
  },
  {
    id: 12,
    src: "/picture/qart.webp",
    modalSrc: "/picture/qart.webp",
    alt: "ქვემო ქართლი",
    region: "ქვემო ქართლი",
    title: [
      {
        id: 12,
        text: "ქვემო ქართლი",
        bla: ["რუსთავი", "ბოლნისი", "გარდაბანი"],
      },
    ],
    description:
      "ტბები, მთები, დაცული ტერიტორორიები, უდაბნოები, ჩანჩქერები, ციხესიმაგრეები და ეკლესია-მონასტრები - ეს ქვემო ქართლია, საქართველოს ისტორიულ-გეოგრაფიული მხარე, მდიდარი წარსულით, ბუნებითა და ღირსშესანიშნაობებით.",
    citiesTimes: [
      { name: "თბილისი", times: ["1:10 სთ"] },
      { name: "ბათუმი", times: ["6:30 სთ"] },
      { name: "ქუთაისი", times: ["4:30 სთ"] },
    ],
    descriptionTexts: [],
    range: [
      {
        min: 10,
        max: 30,
      },
    ],
  },
  {
    id: 13,
    src: "/picture/kaceti.webp",
    modalSrc: "/picture/kaceti.webp",
    alt: "კახეთი",
    region: "კახეთი",
    title: [
      {
        id: 13,
        text: "კახეთი",
        bla: ["თელავი", "ახმეტა", "დედოფლისწყარო"],
      },
    ],
    description:
      "კახეთი ის „ჩაკრულოა“, რომელიც კოსმოსშია გაშვებული, როგორც გზავნილი დედამიწიდან; კახეთი ის უძველესი მონასტრებია, რომლებსაც, როგორც საგანძურს, მსოფლიო იცავს; კახეთი ის ქვევრია, რომლის ღვინოსაც ყველაზე გამორჩეული გემო აქვს... კახეთია ალაზნის ველი და ციცაბო უღელტეხილები, მარადმწვანე ტყეები და ნახევრად უდაბნო ადგილები, მჭიდროდ დასახლებული სოფლები და პატარა, ისტორიული ქალაქები... კახეთის სანახავად მიზეზს რა დალევს!",
    citiesTimes: [
      { name: "ბათუმი", times: ["7:15 სთ"] },
      { name: "ქუთაისი", times: ["5:10 სთ"] },
      { name: "თბილისი", times: ["1:50 სთ"] },
    ],
    descriptionTexts: [],
    range: [
      {
        min: 10,
        max: 30,
      },
    ],
  },
];

// sviper slide images array

export const sliderImages: {
  src: string;
  title: string;
  description: string;
}[] = [
  {
    src: "/image/discover.webp",
    title: "აღმოაჩინე საქართველო",
    description:
      "უძველესი კულტურის, ულამაზესი ბუნებისა და მრავალპეროვანი თავგადასავლების ქვეყანა!",
  },
  {
    src: "/image/tbilisi.webp",
    title: "თბილისი - საქართველოს \n\n დედაქალაქი",
    description:
      "აქ ნახავ უძველეს ეკლესიებს, ულამაზეს არქიტექტურას და თვალისმომჭრელი ხედებით დატკბები",
  },
  {
    src: "/image/kaceti.webp",
    title: "კახეთი - რეგიონი აღმოსავლეთ \n\n საქართველოში",
    description:
      "ალპურ ტბებს, მარადმწვანე ტყეებს და გამორჩეულ ციხე-კოშკებს აუცილებლად უნდა ესტუმრო",
  },
];
