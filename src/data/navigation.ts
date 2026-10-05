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
    href: "/services",
    children: [
      {
        title: "B2B Growth Strategy",
        href: "/services/b2b-growth-strategy",
        description: "Strategic direction, ICP & GTM architecture"
      },
      {
        title: "B2B Marketing Strategy",
        href: "/services/b2b-marketing-strategy",
        description: "Positioning, messaging & full-funnel systems"
      },
      {
        title: "LinkedIn B2B Marketing",
        href: "/services/linkedin-b2b-marketing",
        description: "Organic authority & company page architecture"
      },
      {
        title: "LinkedIn Ads & Thought Leader Ads",
        href: "/services/linkedin-ads-thought-leader-ads",
        description: "Paid growth & executive voice amplification"
      },
      {
        title: "B2B Demand Generation",
        href: "/services/b2b-demand-generation",
        description: "Educate 95% out-of-market buyers"
      },
      {
        title: "Account-Based Marketing (ABM)",
        href: "/services/account-based-marketing",
        description: "Multi-touch buying committee targeting"
      },
      {
        title: "Founder-Led & Executive Marketing",
        href: "/services/founder-led-executive-b2b-marketing",
        description: "Turn leadership expertise into growth"
      },
      {
        title: "B2B Lead & Pipeline Generation",
        href: "/services/b2b-lead-pipeline-generation",
        description: "Sales-accepted discovery opportunities"
      }
    ]
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
    href: "/about",
    children: [
      {
        title: "About Saini Nexus",
        href: "/about",
        description: "Our philosophy, approach & commercial standard"
      },
      {
        title: "Dev Raj Saini (Founder)",
        href: "/about/dev-raj-saini",
        description: "Founder & Lead B2B Growth Strategist"
      },
      {
        title: "Credentials & Certifications",
        href: "/about/credentials",
        description: "LinkedIn Marketing Labs verified expertise"
      },
      {
        title: "Meet the Team",
        href: "/team",
        description: "Our 18-member growth & creative collective"
      },
      {
        title: "Regional Authority Hubs",
        href: "/locations",
        description: "Jaipur, Rajasthan & India presence"
      }
    ]
  }
];

export const FOOTER_LINKS = {
  services: [
    { title: "B2B Growth Strategy", href: "/services/b2b-growth-strategy" },
    { title: "B2B Marketing Strategy", href: "/services/b2b-marketing-strategy" },
    { title: "LinkedIn B2B Marketing", href: "/services/linkedin-b2b-marketing" },
    { title: "LinkedIn Ads & Thought Leader Ads", href: "/services/linkedin-ads-thought-leader-ads" },
    { title: "B2B Demand Generation", href: "/services/b2b-demand-generation" },
    { title: "Account-Based Marketing (ABM)", href: "/services/account-based-marketing" },
    { title: "Founder-Led & Executive Marketing", href: "/services/founder-led-executive-b2b-marketing" },
    { title: "B2B Lead & Pipeline Generation", href: "/services/b2b-lead-pipeline-generation" }
  ],
  solutions: [
    { title: "Build B2B Demand", href: "/solutions/build-b2b-demand" },
    { title: "Reach High-Value Accounts", href: "/solutions/reach-high-value-accounts" },
    { title: "Turn LinkedIn Into a Growth Channel", href: "/solutions/turn-linkedin-into-growth-channel" },
    { title: "Build Founder & Executive Authority", href: "/solutions/build-founder-executive-authority" },
    { title: "Generate Qualified B2B Pipeline", href: "/solutions/generate-qualified-b2b-pipeline" }
  ],
  industries: [
    { title: "B2B SaaS", href: "/industries/b2b-saas" },
    { title: "Technology", href: "/industries/technology" },
    { title: "Consulting", href: "/industries/consulting" },
    { title: "Professional Services", href: "/industries/professional-services" },
    { title: "Industrial & Manufacturing", href: "/industries/industrial-manufacturing" },
    { title: "Real Estate", href: "/industries/real-estate" }
  ],
  company: [
    { title: "About Saini Nexus", href: "/about" },
    { title: "Meet Our Team", href: "/team" },
    { title: "Dev Raj Saini (Founder)", href: "/about/dev-raj-saini" },
    { title: "Saini Nexus Field Notes", href: "/insights" },
    { title: "Case Studies (Teardowns)", href: "/case-studies" },
    { title: "Book a Strategy Call", href: "/book" },
    { title: "Contact Us", href: "/contact" }
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" }
  ]
};
