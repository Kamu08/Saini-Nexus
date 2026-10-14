export interface NavChildItem {
  title: string;
  href: string;
  description: string;
  badge?: string;
}

export interface NavItem {
  title: string;
  href: string;
  children?: NavChildItem[];
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    title: "Services",
    href: "/services"
  },
  {
    title: "Case Studies",
    href: "/case-studies"
  },
  {
    title: "Insights",
    href: "/insights"
  },
  {
    title: "About",
    href: "/about"
  }
];

export const FOOTER_LINKS = {
  services: [
    { title: "B2B Marketing Strategy", href: "/services/b2b-marketing-strategy" },
    { title: "LinkedIn Ads & Thought Leader Ads", href: "/services/linkedin-ads-thought-leader-ads" },
    { title: "Account-Based Marketing (ABM)", href: "/services/account-based-marketing" },
    { title: "B2B Demand Generation", href: "/services/b2b-demand-generation" },
    { title: "Founder-Led Authority", href: "/services/founder-led-executive-b2b-marketing" }
  ],
  industries: [
    { title: "B2B SaaS & Software", href: "/industries/b2b-saas" },
    { title: "Technology & IT Services", href: "/industries/technology" },
    { title: "Industrial & Manufacturing", href: "/industries/industrial-manufacturing" },
    { title: "Consulting & Professional", href: "/industries/consulting" },
    { title: "Real Estate & Built World", href: "/industries/real-estate" }
  ],
  company: [
    { title: "About Saini Nexus", href: "/about" },
    { title: "Case Studies & Proof", href: "/case-studies" },
    { title: "Insights & Field Notes", href: "/insights" },
    { title: "7-Stage Pipeline Audit", href: "/audit" },
    { title: "Contact Us", href: "/contact" }
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" }
  ]
};
