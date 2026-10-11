export interface TeamMember {
  name: string;
  role: string;
  department: "Leadership & Strategy" | "Paid Media & LinkedIn Ads" | "Demand Generation & ABM" | "Content & Creative" | "Operations & Analytics";
  image: string;
  bio: string;
  linkedin?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  // 1st: Dev Raj Saini (Founder)
  {
    name: "Dev Raj Saini",
    role: "Founder & Lead B2B Growth Strategist",
    department: "Leadership & Strategy",
    image: "/team/dev-raj-saini.jpg",
    bio: "Focused on B2B marketing strategy, LinkedIn growth systems, thought leadership positioning, and commercial demand architecture.",
    linkedin: "https://www.linkedin.com/in/devrajsaini"
  },

  // 2nd: Dau Raj Saini (Senior Growth Strategist)
  {
    name: "Dau Raj Saini",
    role: "Senior Growth Strategist",
    department: "Leadership & Strategy",
    image: "/team/dau-raj-saini.jpg",
    bio: "Conducts B2B market research, competitive audits, and audience segmentation for target accounts.",
    linkedin: "https://www.linkedin.com/in/dau-raj-saini"
  },

  // 3rd: Komal Saini
  {
    name: "Komal Saini",
    role: "Demand Generation Specialist",
    department: "Demand Generation & ABM",
    image: "/team/komal-saini.png",
    bio: "Connects content distribution with buyer engagement to drive consistent inbound interest.",
    linkedin: "https://www.linkedin.com/in/komal-s-96110b369"
  },

  // 4th: Soniya Saini
  {
    name: "Soniya Saini",
    role: "Client Success Coordinator",
    department: "Operations & Analytics",
    image: "/team/soniya-saini.png",
    bio: "Supports onboarding workflows, status updates, and transparent project communication.",
    linkedin: "https://www.linkedin.com/in/soniya-saini"
  },

  // 5th: Manish Kumar
  {
    name: "Manish Kumar",
    role: "Marketing Analytics Specialist",
    department: "Operations & Analytics",
    image: "/team/manish-kumar-saini.png",
    bio: "Tracks campaign performance, lead quality metrics, and conversion funnels to evaluate outcomes.",
    linkedin: "https://www.linkedin.com/in/manish-kumar-saini-real"
  },

  // 6th: Ashok Kumar Saini
  {
    name: "Ashok Kumar Saini",
    role: "B2B Strategy Specialist",
    department: "Leadership & Strategy",
    image: "/team/ashok-kumar-saini.png",
    bio: "Develops commercial positioning frameworks and value-proposition alignment across key B2B sectors.",
    linkedin: "https://www.linkedin.com/in/ashok-kumar-s-990939382"
  },

  // 7th: Mukesh Singh
  {
    name: "Mukesh Singh",
    role: "LinkedIn Ads Specialist",
    department: "Paid Media & LinkedIn Ads",
    image: "/team/mukesh-singh.png",
    bio: "Plans and manages LinkedIn advertising campaigns, including audience targeting, creative testing, and performance optimization.",
    linkedin: "https://www.linkedin.com/in/mukesh-singhh"
  },

  // 8th: Ankit Saini
  {
    name: "Ankit Saini",
    role: "Performance Marketing Specialist",
    department: "Paid Media & LinkedIn Ads",
    image: "/team/ankit-saini.png",
    bio: "Manages campaign pacing, retargeting pools, and conversion tracking across Campaign Manager.",
    linkedin: "https://www.linkedin.com/in/ankit-s-6677462b0"
  },

  // 9th: Kusum Saini
  {
    name: "Kusum Saini",
    role: "Account-Based Marketing Specialist",
    department: "Demand Generation & ABM",
    image: "/team/kusum-saini.png",
    bio: "Helps identify priority enterprise accounts and map the multi-stakeholder buying committees.",
    linkedin: "https://www.linkedin.com/in/kusum-saini-95baa93b0"
  },

  // 10th: Manoj Saini
  {
    name: "Manoj Saini",
    role: "B2B Research & Account Analyst",
    department: "Demand Generation & ABM",
    image: "/team/manoj-saini.png",
    bio: "Builds enriched target account lists and analyzes industry firmographics for outbound and paid alignment.",
    linkedin: "https://www.linkedin.com/in/manoj-saini-760a17249"
  },

  // 11th: Rinku Saini
  {
    name: "Rinku Saini",
    role: "Lead Qualification Specialist",
    department: "Demand Generation & ABM",
    image: "/team/rinku-saini.png",
    bio: "Reviews inquiry fit, validates commercial criteria, and ensures clean lead routing for strategy calls.",
    linkedin: "https://www.linkedin.com/in/rinku-s-785753382"
  },

  // 12th: Avantika Choudhary
  {
    name: "Avantika Choudhary",
    role: "Content & Editorial Lead",
    department: "Content & Creative",
    image: "/team/avantika-choudhary.png",
    bio: "Develops executive POV narratives, thought leadership articles, and strategic B2B messaging.",
    linkedin: "https://www.linkedin.com/in/avantika-choudhary-548874395"
  },

  // 13th: Lokesh Saini
  {
    name: "Lokesh Saini",
    role: "Creative & Document Designer",
    department: "Content & Creative",
    image: "/team/lokesh-saini.png",
    bio: "Designs visual frameworks, native LinkedIn PDF carousels, and high-contrast creative assets.",
    linkedin: "https://www.linkedin.com/in/lokesh12"
  },

  // 14th: Neha Saini
  {
    name: "Neha Saini",
    role: "Executive Branding Specialist",
    department: "Content & Creative",
    image: "/team/neha-saini.png",
    bio: "Coordinates founder profile authority, publishing schedules, and organic network development.",
    linkedin: "https://www.linkedin.com/in/neha-s-78ab45368"
  },

  // 15th: Surya Saini
  {
    name: "Surya Saini",
    role: "Digital Distribution Specialist",
    department: "Content & Creative",
    image: "/team/surya-saini.png",
    bio: "Manages multi-channel content syndication and professional community engagement.",
    linkedin: "https://www.linkedin.com/in/surya-saini-810136374"
  },

  // 16th: Jyoti Kanwar
  {
    name: "Jyoti Kanwar",
    role: "Operations & Delivery Lead",
    department: "Operations & Analytics",
    image: "/team/jyoti-kanwar.jpg",
    bio: "Orchestrates campaign schedules, project deliverables, and seamless client communication.",
    linkedin: "https://www.linkedin.com/company/saini-nexus"
  },

  // 17th: Pushpa Saini
  {
    name: "Pushpa Saini",
    role: "Campaign Operations Specialist",
    department: "Operations & Analytics",
    image: "/team/pushpa-saini.png",
    bio: "Manages quality assurance, form integrations, and CRM webhook routing.",
    linkedin: "https://www.linkedin.com/in/pushpa-saini-1880bb38a"
  },

  // 18th: Vinod Singh
  {
    name: "Vinod Singh",
    role: "Technical Integration Specialist",
    department: "Operations & Analytics",
    image: "/team/vinod-singh.png",
    bio: "Implements LinkedIn Insight Tags, tracking pixels, and CRM webhook synchronization.",
    linkedin: "https://www.linkedin.com/in/vinod-singh82"
  }
];
