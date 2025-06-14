export interface NavItemDetail {
  title: string;
  image?: string;
  images?: string[];
  items: { text: string; href: string }[];
}

export interface NavItem {
  name?: string;
  natureName?: string;
  href: string;
  details: NavItemDetail[];
}
