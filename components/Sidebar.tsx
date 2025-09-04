"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/info", label: "საქართველოში ვიზიტი" },
    { href: "/info/local-transport", label: "ადგილობრივი ტრანსპორტი" },
    { href: "/info/regional-transport", label: "რეგიონალური ტრანსპორტი" },
    {
      href: "/info/local-vehicle-rental",
      label: "ადგილობრივი ტრანსპორტის გაქირავება",
    },
    {
      href: "/info/weather-local-climate",
      label: "ამინდი და ადგილობრივი კლიმატი",
    },
  ];

  const isActive = (href: string) => {
    if (href === "/info") {
      return (
        pathname === "/info" ||
        (pathname.startsWith("/info/") &&
          !navItems.slice(1).some((item) => pathname === item.href))
      );
    }
    return pathname === href;
  };

  return (
    <aside className="w-full sm:w-full lg:w-64 p-4 bg-white">
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <li key={index} className="mb-2 select-none">
              <Link
                href={item.href}
                className={`relative text-sm sm:text-base ${
                  isActive(item.href) ? "text-red-500" : ""
                }`}
              >
                {isActive(item.href) && (
                  <span className="absolute left-[-12px] top-1/2 transform -translate-y-1/2 h-5 w-px bg-red-500" />
                )}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
