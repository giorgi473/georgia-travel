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
    {
      href: "/info/frequently-asked-questions",
      label: "ხშირად დასმული კითხვები",
    },
  ];

  const isActive = (href: string) => {
    // Exact match takes precedence
    if (pathname === href) {
      return true;
    }
    // For /info, active if pathname is /info or a subpath not matching other navItems
    if (href === "/info") {
      return (
        pathname === "/info" ||
        (pathname.startsWith("/info/") &&
          !navItems.some(
            (item) => item.href !== "/info" && pathname.startsWith(item.href)
          ))
      );
    }
    // For other routes, active if pathname starts with href
    return pathname.startsWith(href);
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
