export interface LocationData {
  slug: string;
  name: string;
  stateOrCountry: string;
  heroTagline: string;
  heroTitle: string;
  heroDescription: string;
  marketContext: string;
  keySectors: {
    name: string;
    description: string;
    targetBuyers: string;
    recommendedApproach: string;
  }[];
  localPresence: {
    headquarters: string;
    founded: string;
    specialization: string;
    reach: string;
  };
  whySainiNexus: {
    title: string;
    description: string;
  }[];
  strategicPlaybook: {
    step: string;
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const LOCATIONS: Record<string, LocationData> = {
  "rajasthan": {
    slug: "rajasthan",
    name: "Rajasthan",
    stateOrCountry: "India",
    heroTagline: "Rajasthan's Enterprise & B2B Growth Partner",
    heroTitle: "B2B Marketing & LinkedIn Growth for Rajasthan's Leading Enterprises",
    heroDescription: "Headquartered in Jaipur, Saini Nexus helps industrial manufacturers, tech innovators, and specialized exporters across Rajasthan turn LinkedIn into a predictable international demand engine.",
    marketContext: "Rajasthan is home to India's most dynamic industrial corridors, engineering clusters, mineral processing hubs, and a rapidly expanding startup ecosystem. As regional companies scale beyond domestic borders, traditional trade brokers and industrial fairs are no longer enough to secure premium enterprise margins.",
    keySectors: [
      {
        name: "Precision Manufacturing & Industrial Exports",
        description: "High-spec CNC engineering, automotive components, and industrial equipment catering to global OEMs.",
        targetBuyers: "Procurement Officers, Supply Chain Directors & VP Operations in North America & Europe.",
        recommendedApproach: "Technical video showcases, ISO facility tours, and Account-Based Lead Gen targeting overseas buying committees."
      },
      {
        name: "SaaS & Tech Services from Jaipur/Udaipur",
        description: "B2B software, cloud engineering, and digital transformation service providers.",
        targetBuyers: "CTOs, CIOs, and VPs of Engineering at mid-market Western enterprises.",
        recommendedApproach: "Founder-Led Thought Leadership, Document Ads with technical architecture teardowns, and LinkedIn Ads."
      },
      {
        name: "Mineral, Chemical & Raw Material Processors",
        description: "Specialized non-metallic minerals, ceramics, dimension stones, and chemical synthesis.",
        targetBuyers: "Global sourcing heads, infrastructure project developers, and institutional buyers.",
        recommendedApproach: "Targeted LinkedIn B2B campaigns highlighting environmental compliance, supply reliability, and bulk contract pricing."
      },
      {
        name: "High-Value Artisanal, Gemstone & Luxury B2B",
        description: "Jaipur's world-renowned gemstone cutting, jewelry manufacturing, and luxury textile exports.",
        targetBuyers: "Luxury boutique retailers, department store jewelry buyers, and international private label brands.",
        recommendedApproach: "High-craft visual storytelling, provenance verification, and direct C-suite outreach to retail executives."
      }
    ],
    localPresence: {
      headquarters: "Jaipur, Rajasthan, India",
      founded: "2024",
      specialization: "B2B LinkedIn Marketing, LinkedIn Ads & Demand Generation",
      reach: "Rajasthan, Pan-India & Global B2B Markets"
    },
    whySainiNexus: [
      {
        title: "Deep Roots in Rajasthan's Commercial Ecosystem",
        description: "We understand the operational realities, ownership structures, and growth ambitions of Rajasthan businesses from the inside out."
      },
      {
        title: "International B2B Strategy Standards",
        description: "We deploy the exact same sophisticated LinkedIn Account-Based Marketing (ABM) and demand generation frameworks utilized by Fortune 500 B2B brands."
      },
      {
        title: "Direct Access to Senior Growth Architects",
        description: "No junior account managers. You collaborate directly with experienced B2B growth strategists who prioritize commercial revenue and sales pipeline over vanity likes."
      }
    ],
    strategicPlaybook: [
      {
        step: "01",
        title: "Target Account & International Market Mapping",
        description: "Identifying the specific companies and decision-maker job titles across Europe, the US, GCC, or India that represent your highest-margin accounts."
      },
      {
        step: "02",
        title: "Founder & Executive Positioning",
        description: "Formulating an unassailable point of view for company leadership that builds trust with foreign procurement boards."
      },
      {
        step: "03",
        title: "Multi-Tier LinkedIn Media Orchestration",
        description: "Deploying targeted Sponsored Content, Thought Leader Ads, and zero-friction Lead Gen Forms to consistently capture qualified RFPs."
      }
    ],
    faq: [
      {
        question: "Can Saini Nexus help Rajasthan companies acquire clients in the US and Europe?",
        answer: "Yes! Over 60% of our LinkedIn advertising and demand generation campaigns are engineered specifically for cross-border B2B customer acquisition into North American, European, and Middle Eastern enterprise markets."
      },
      {
        question: "Do we need to have an in-house marketing team to work with Saini Nexus?",
        answer: "No. We operate as your complete, embedded B2B growth engine—handling positioning, copy, design, paid media, CRM integration, and pipeline reporting from end to end."
      }
    ]
  },
  "jaipur": {
    slug: "jaipur",
    name: "Jaipur",
    stateOrCountry: "Rajasthan, India",
    heroTagline: "Jaipur's Dedicated B2B & LinkedIn Growth Company",
    heroTitle: "B2B Marketing & LinkedIn Demand Generation in Jaipur",
    heroDescription: "Operating from the Pink City, Saini Nexus is building the next generation of B2B marketing—helping Jaipur's technology innovators, IT consultancies, and manufacturing leaders win global enterprise contracts.",
    marketContext: "Jaipur has rapidly grown from a historic capital into one of North India's premier tier-2 tech and startup powerhouses. From the tech parks of Mahindra World City and Sitapura to vibrant startup hubs in Malviya Nagar and Mansarovar, Jaipur-based firms are creating world-class products. We provide the enterprise go-to-market engine to match their ambition.",
    keySectors: [
      {
        name: "Jaipur IT & Software Development Hubs",
        description: "Enterprise software development, cloud infrastructure, AI automation, and custom app engineering.",
        targetBuyers: "Enterprise CIOs, VP of Product, and Tech Founders looking for high-caliber engineering partners.",
        recommendedApproach: "Technical case study teardowns, Document Ads, and Founder Thought Leadership."
      },
      {
        name: "Sitapura & Vishwakarma Industrial Corridors",
        description: "Precision CNC machining, electronics manufacturing, apparel exports, and gems & jewelry.",
        targetBuyers: "International retail chains, tier-1 industrial buyers, and global distributor networks.",
        recommendedApproach: "Direct Account-Based Advertising, ISO certification highlights, and speed-to-lead RFP capture."
      },
      {
        name: "B2B Professional Services & Consultancies",
        description: "Legal, accounting, corporate advisory, and architectural firms based in Jaipur.",
        targetBuyers: "Promoters, Board Directors, and Enterprise CFOs.",
        recommendedApproach: "Managing Partner voice amplification and ungated regulatory frameworks."
      }
    ],
    localPresence: {
      headquarters: "Jaipur, Rajasthan, India",
      founded: "2024",
      specialization: "B2B Growth Strategy, LinkedIn Paid Media & Demand Creation",
      reach: "Jaipur Local Ecosystem, National & Overseas Enterprise"
    },
    whySainiNexus: [
      {
        title: "Jaipur Headquarters with Global Vision",
        description: "We are physically present in Jaipur for face-to-face strategic workshops, executive interviews, and collaborative go-to-market roadmapping."
      },
      {
        title: "Certified LinkedIn Marketing Leadership",
        description: "Led by certified practitioners who understand the algorithmic mechanics, auction dynamics, and buying psychology of the LinkedIn platform."
      },
      {
        title: "Strict Commercial Accountability",
        description: "We measure campaign success in sales meetings booked, RFP pipeline value, and customer acquisition cost—never fluffy social media impressions."
      }
    ],
    strategicPlaybook: [
      {
        step: "01",
        title: "Local Diagnostic & Global Positioning",
        description: "Auditing your current digital footprint and crafting a distinctive value proposition that stands out in international markets."
      },
      {
        step: "02",
        title: "Executive Voice Extraction",
        description: "Conducting bi-weekly interview sessions with your leadership team right here in Jaipur to create high-impact LinkedIn content."
      },
      {
        step: "03",
        title: "Full-Funnel Paid & Organic Activation",
        description: "Launching synchronized LinkedIn Ads and executive thought leadership to generate qualified discovery calls."
      }
    ],
    faq: [
      {
        question: "Can we meet the Saini Nexus team in person in Jaipur?",
        answer: "Absolutely. We regularly conduct in-person strategy sessions and executive alignment workshops at our Jaipur offices or at your headquarters."
      },
      {
        question: "Why should a Jaipur business prioritize LinkedIn over other marketing channels?",
        answer: "LinkedIn is the only platform where 100% of the audience is verified by job title, company name, industry, and seniority. For B2B deals, it provides the highest conversion rate and lowest customer acquisition cost of any channel."
      }
    ]
  },
  "india": {
    slug: "india",
    name: "India",
    stateOrCountry: "Global",
    heroTagline: "Pan-India B2B Growth & Global Outreach",
    heroTitle: "Enterprise B2B Marketing & LinkedIn Advertising Agency in India",
    heroDescription: "Saini Nexus partners with ambitious Indian B2B SaaS companies, enterprise IT firms, and industrial exporters to orchestrate predictable customer acquisition across domestic and international markets.",
    marketContext: "India's B2B ecosystem is experiencing unprecedented acceleration. Indian SaaS companies are conquering global markets, while enterprise tech services are moving upmarket from staff augmentation to high-margin strategic consulting. Saini Nexus delivers the sophisticated marketing infrastructure necessary to scale enterprise pipeline.",
    keySectors: [
      {
        name: "Enterprise SaaS & Cloud Software",
        description: "High-velocity PLG and sales-led SaaS companies targeting US, UK, and APAC mid-market and enterprise accounts.",
        targetBuyers: "C-Suite, VP RevOps, VP Sales, and Heads of IT.",
        recommendedApproach: "Full-funnel LinkedIn ABM, interactive product demos, Document Ads, and retargeting."
      },
      {
        name: "Enterprise IT Services & System Integrators",
        description: "Leading IT firms in Bengaluru, Hyderabad, Pune, NCR, and Jaipur delivering AI, cybersecurity, and cloud migration.",
        targetBuyers: "Enterprise CIOs, Chief Digital Officers, and Engineering Directors.",
        recommendedApproach: "Thought Leader Ads from Practice Heads, Architecture Benchmark Whitepapers, and Event Retargeting."
      },
      {
        name: "Direct Global Manufacturing Exporters",
        description: "High-value Indian manufacturers replacing traditional trading companies with direct-to-OEM B2B pipelines.",
        targetBuyers: "Procurement, Sourcing, and Quality Assurance Directors in Europe and America.",
        recommendedApproach: "Video plant walkthroughs, compliance audit highlights, and speed-to-RFP routing."
      }
    ],
    localPresence: {
      headquarters: "Jaipur, Rajasthan, India",
      founded: "2024",
      specialization: "Enterprise B2B Demand Generation & LinkedIn Paid Media",
      reach: "Delhi NCR, Bengaluru, Mumbai, Hyderabad, Pune, Jaipur & Global Markets"
    },
    whySainiNexus: [
      {
        title: "Built for High-Stakes B2B Deal Cycles",
        description: "We design marketing systems tailored to 3-to-12 month enterprise sales cycles with multiple executive stakeholders."
      },
      {
        title: "Cross-Border Acquisition Competence",
        description: "Proven experience navigating time zones, cultural nuances, and localized B2B purchasing habits across Western and Asian markets."
      },
      {
        title: "Full Revenue Operations Integration",
        description: "Seamless synchronization with Salesforce, HubSpot, Zoho, and Apollo for total pipeline visibility."
      }
    ],
    strategicPlaybook: [
      {
        step: "01",
        title: "Buying Committee Matrix Construction",
        description: "Mapping the 5-7 distinct roles involved in evaluating, approving, and signing your enterprise solution."
      },
      {
        step: "02",
        title: "Omni-Stakeholder Content Deployment",
        description: "Developing tailored messaging for the Economic Buyer, Technical Evaluator, and End Champion."
      },
      {
        step: "03",
        title: "Continuous Pipeline Optimization",
        description: "Iterating on campaign hooks, bid models, and sales hand-offs to continually compress sales cycle length."
      }
    ],
    faq: [
      {
        question: "How do you handle currency and billing for international ad spend?",
        answer: "You maintain full direct ownership of your LinkedIn Campaign Manager ad account and credit card billing. Saini Nexus manages the campaigns as an authorized administrative partner with zero spend markups."
      },
      {
        question: "What is your approach to lead qualification for Indian enterprise deals?",
        answer: "We implement custom qualifying logic inside LinkedIn Lead Gen Forms and interactive landing pages to filter for company revenue, headcount, and budget readiness before handing off to your sales team."
      }
    ]
  }
};
