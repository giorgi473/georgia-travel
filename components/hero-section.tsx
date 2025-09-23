// "use client";

// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { ArrowRight } from "lucide-react";

// interface HeroSectionProps {
//   image?: string;
//   title?: string;
//   description?: string;
//   overlay?: string;
//   button?: string;
//   href?: string;
//   tours?: string;
//   className?: string | null;
// }

// export function HeroSection({
//   image,
//   title,
//   description,
//   overlay = "bg-black/30",
//   button,
//   href,
//   tours,
//   className,
// }: HeroSectionProps) {
//   const router = useRouter();
//   return (
//     <section
//       className={`relative w-full ${className} overflow-hidden select-none`}
//     >
//       <Image
//         src={image || "/placeholder.svg"}
//         alt={title as string}
//         fill
//         className="object-cover"
//         priority
//       />
//       <div className={`absolute inset-0 z-10 ${overlay}`} />
//       <div className="relative z-20 flex flex-col justify-center h-full container mx-auto px-5 sm:px-8 md:px-8 lg:px-10">
//         <div className="max-w-4xl">
//           <h1 className="text-xl lg:text-4xl font-bold text-white mb-5 text-balance">
//             {title}
//           </h1>
//           <p className="text-sm text-white/90 leading-relaxed max-w-3xl text-pretty mb-5">
//             {description}
//           </p>
//           <div className="flex items-center gap-3">
//             <button
//               className="text-white cursor-pointer font-bold hover:text-red-500 transition-all duration-200 ease-in-out"
//               onClick={() => router.push(`${href}`)}
//             >
//               {button}
//             </button>
//             <span>
//               <ArrowRight className="text-white mt-0.5" size={15} />
//             </span>
//             <button
//               className="text-white cursor-pointer font-bold hover:text-red-500 transition-all duration-200 ease-in-out"
//               onClick={() => router.push("/popular-tours")}
//             >
//               {tours}
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface HeroSectionProps {
  image?: string;
  title?: { ka: string; en: string };
  description?: { ka: string; en: string };
  overlay?: string;
  button?: { ka: string; en: string };
  href?: string;
  tours?: { ka: string; en: string };
  className?: string | null;
}

export function HeroSection({
  image,
  title,
  description,
  overlay = "bg-black/30",
  button,
  href,
  tours,
  className,
}: HeroSectionProps) {
  const { currentLanguage } = useLanguage();
  const router = useRouter();

  return (
    <section
      className={`relative w-full ${className} overflow-hidden select-none`}
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={title ? title[currentLanguage] : "Hero Section"}
        fill
        className="object-cover"
        priority
      />
      <div className={`absolute inset-0 z-10 ${overlay}`} />
      <div className="relative z-20 flex flex-col justify-center h-full container mx-auto px-5 sm:px-8 md:px-8 lg:px-10">
        <div className="max-w-4xl">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-xl lg:text-4xl font-bold text-white text-balance">
              {title ? title[currentLanguage] : ""}
            </h1>
          </div>
          <p className="text-sm text-white/90 leading-relaxed max-w-3xl text-pretty mb-5">
            {description ? description[currentLanguage] : ""}
          </p>
          <div className="flex items-center gap-3">
            <button
              className="text-white cursor-pointer font-bold hover:text-red-500 transition-all duration-200 ease-in-out"
              onClick={() => router.push(`${href}`)}
            >
              {button ? button[currentLanguage] : ""}
            </button>
            <span>
              <ArrowRight className="text-white mt-0.5" size={15} />
            </span>
            <button
              className="text-white cursor-pointer font-bold hover:text-red-500 transition-all duration-200 ease-in-out"
              onClick={() => router.push("/popular-tours")}
            >
              {tours ? tours[currentLanguage] : ""}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
