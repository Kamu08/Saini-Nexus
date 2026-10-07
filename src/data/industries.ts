export interface IndustryItem {
  slug: string;
  name: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  marketContext: string;
  coreFriction: string[];
  playbookStrategy: {
    title: string;
    description: string;
  }[];
  buyingCommittee: {
    role: string;
    concern: string;
    winningAngle: string;
  }[];
  deliverables: string[];
  featuredResult: {
    metric: string;
    context: string;
  };
}

export const INDUSTRIES: Record<string, IndustryItem> = {
  "b2b-saas": {
    slug: "b2b-saas",
    name: "B2B SaaS",
    tagline: "High-ACV Software & Subscription Platforms",
    metaTitle: "B2B SaaS Marketing & LinkedIn Growth | Saini Nexus",
    metaDescription: "Scale predictable pipeline and sales-accepted demos for B2B SaaS platforms with Saini Nexus full-funnel demand generation.",
    heroHeadline: "B2B SaaS Marketing Built for ACV & Pipeline Velocity.",
    heroSubheadline: "Move beyond shallow free-trial signups. Saini Nexus helps B2B SaaS companies reach buying committees, educate out-of-market accounts, and generate high-ACV enterprise pipeline.",
    marketContext: "SaaS buyers are exhausted by generic feature pitches and cold spam. 95% of software accounts are not in an active buying cycle today. Winning requires establishing category authority and commercial point-of-view long before the RFP stage.",
    coreFriction: [
      "Spending high budgets on 'Book a Demo' ads with ₹25,000+ CPLs that sales reps reject.",
      "High landing page bounce rates on complex multi-tier pricing structures.",
      "Product marketing focused on technical features rather than business CFO impact."
    ],
    playbookStrategy: [
      { title: "Point-of-View Demand Creation", description: "Framing the commercial cost of existing manual workflows through ungated technical teardowns." },
      { title: "Matched Account ABM", description: "Targeting enterprise accounts with ACV > ₹10 Lakhs with customized multi-threading campaigns." },
      { title: "Founder Thought Leader Ads", description: "Amplifying CEO/CTO product vision for 3x higher CTR and lower customer acquisition costs." }
    ],
    buyingCommittee: [
      { role: "CFO / Finance", concern: "CAC payback, total cost of ownership, and verifiable ROI timeline.", winningAngle: "Unit economics proof and operational cost reduction metrics." },
      { role: "CTO / Engineering", concern: "Security compliance, API scalability, and integration friction.", winningAngle: "Architecture blueprints and technical data security teardowns." },
      { role: "VP / Department Head", concern: "Team adoption, workflow speed, and onboarding disruption.", winningAngle: "Zero layout shift adoption framework and workflow benchmark wins." }
    ],
    deliverables: [
      "SaaS Category Positioning & Commercial Narrative Dossier",
      "Full-Funnel LinkedIn Ads & Document Carousel Architecture",
      "Lead Gen Form Integration with Automated Demo Routing",
      "CAC Payback & Sales-Accepted Pipeline Attribution Dashboard"
    ],
    featuredResult: {
      metric: "18.4%",
      context: "Form completion rate on native LinkedIn Lead Gen campaigns"
    }
  },
  "technology": {
    slug: "technology",
    name: "Technology",
    tagline: "Enterprise Tech, Hardware & Digital Infrastructure",
    metaTitle: "Enterprise Technology Marketing Strategy | Saini Nexus",
    metaDescription: "Enterprise technology demand generation and LinkedIn marketing strategy for digital infrastructure and IT vendors.",
    heroHeadline: "Complex Tech Capabilities Translated into Boardroom Value.",
    heroSubheadline: "We help technology vendors, cloud providers, and digital infrastructure firms bridge the gap between deep engineering complexity and executive purchasing consensus.",
    marketContext: "Enterprise technology decisions involve multiple departments, rigorous security evaluations, and significant capital expenditure. Marketing must demonstrate operational reliability and compliance at every touchpoint.",
    coreFriction: [
      "Translating complex technical architecture into language executive buyers understand.",
      "Protracted 6-12 month evaluation cycles with high stakeholder turnover.",
      "Heavy reliance on traditional trade shows and RFP brokerages."
    ],
    playbookStrategy: [
      { title: "Technical Document Ads", description: "Delivering dense 8-slide architecture blueprints directly in the LinkedIn feed." },
      { title: "Multi-Stakeholder ABM", description: "Surrounding the IT Director, Security Officer, and Operations VP simultaneously." },
      { title: "Pre-Flight Audit Campaigns", description: "Offering low-friction technical diagnostic tools that uncover high-intent migration needs." }
    ],
    buyingCommittee: [
      { role: "Chief Information Officer (CIO)", concern: "Infrastructure stability and long-term vendor viability.", winningAngle: "Enterprise SLA benchmarks and client case studies." },
      { role: "Chief Information Security Officer (CISO)", concern: "Data sovereignty, encryption standards, and compliance.", winningAngle: "Security compliance documentation and audit teardowns." },
      { role: "Head of Infrastructure", concern: "Implementation bandwidth and legacy integration.", winningAngle: "Step-by-step deployment timeline and developer documentation." }
    ],
    deliverables: [
      "Enterprise Tech Positioning & Solution Architecture Playbook",
      "LinkedIn Matched Audience List (IT & Tech Buying Groups)",
      "Native In-Feed Technical Document Asset Suite",
      "Executive Account Engagement Scoring System"
    ],
    featuredResult: {
      metric: "82%",
      context: "Sales Acceptance Rate on inbound tech infrastructure leads"
    }
  },
  "consulting": {
    slug: "consulting",
    name: "Consulting",
    tagline: "Management, Strategic & Technology Consultancies",
    metaTitle: "Consulting Firm B2B Marketing & Thought Leadership | Saini Nexus",
    metaDescription: "Elevate consulting firm brand positioning, partner thought leadership, and high-ticket advisory pipeline with Saini Nexus.",
    heroHeadline: "Positioning Consulting Expertise as Unmistakable Authority.",
    heroSubheadline: "Consulting is bought on trust and intellect. Saini Nexus helps advisory firms and boutique consultancies turn partner expertise into category-defining thought leadership.",
    marketContext: "Consulting clients do not buy service packages—they hire trusted advisors to solve high-stakes business risks. Word-of-mouth alone cannot scale a practice in competitive global markets.",
    coreFriction: [
      "Partners have deep advisory wisdom but zero time for digital distribution.",
      "Company branding sounds generic and indistinguishable from Big 4 boilerplate.",
      "Difficulty establishing credibility when expanding into new geographic markets."
    ],
    playbookStrategy: [
      { title: "Partner Point-of-View Architecture", description: "Extracting contrarian strategic frameworks from partners and publishing them weekly." },
      { title: "Thought Leader Ad Amplification", description: "Promoting partner articles to C-level executives at target enterprise accounts." },
      { title: "Strategic Field Notes", description: "Publishing anonymized case teardowns demonstrating operational problem-solving." }
    ],
    buyingCommittee: [
      { role: "Chief Executive Officer (CEO)", concern: "Strategic alignment and enterprise risk mitigation.", winningAngle: "Macro-industry trend analysis and governance frameworks." },
      { role: "Chief Operating Officer (COO)", concern: "Execution feasibility and organizational disruption.", winningAngle: "Phased rollout methodology and operational KPIs." },
      { role: "Head of Transformation", concern: "Internal stakeholder buy-in and milestone delivery.", winningAngle: "Change management playbooks and benchmark evidence." }
    ],
    deliverables: [
      "Consulting Practice Positioning & Editorial Strategy",
      "Partner Thought Leadership & Ghostwriting System",
      "Target C-Level LinkedIn Account Distribution Campaign",
      "Executive Advisory Discovery Pipeline Tracking"
    ],
    featuredResult: {
      metric: "3.4x",
      context: "Increase in direct C-level inbound consultation requests"
    }
  },
  "professional-services": {
    slug: "professional-services",
    name: "Professional Services",
    tagline: "Legal, Financial, Engineering & Corporate Advisory",
    metaTitle: "Professional Services Marketing & B2B Growth | Saini Nexus",
    metaDescription: "Build premium digital presence, partner authority, and qualified corporate clients for professional service firms.",
    heroHeadline: "Building Commercial Authority for Professional Service Firms.",
    heroSubheadline: "From financial advisory and corporate law to specialized engineering, Saini Nexus connects professional expertise to corporate decision-makers.",
    marketContext: "Professional services rely heavily on reputation and fiduciary trust. Modern corporate buyers conduct extensive digital research before ever reaching out for an initial consultation.",
    coreFriction: [
      "Traditional reliance on referrals limiting geographic expansion.",
      "Strict regulatory and compliance standards constraining marketing copy.",
      "Sterile corporate websites with zero differentiated point of view."
    ],
    playbookStrategy: [
      { title: "Credibility-Led In-Feed Guides", description: "Distributing concise regulatory and market updates directly to corporate counsel and CFOs." },
      { title: "Executive Authority Syndication", description: "Elevating managing partners as the definitive voices in specialized legal and financial niches." },
      { title: "High-Intent Geographic Targeting", description: "Targeting corporate headquarters across India and international business hubs." }
    ],
    buyingCommittee: [
      { role: "Managing Director / CFO", concern: "Fiduciary accuracy, compliance, and fee transparency.", winningAngle: "Regulatory track record and transparent engagement models." },
      { role: "General Counsel", concern: "Jurisdictional expertise and conflict-of-interest safeguards.", winningAngle: "Detailed case law teardowns and peer recognition." }
    ],
    deliverables: [
      "Professional Services Digital Positioning Strategy",
      "Regulatory & Industry Thought Leadership Publication Suite",
      "Corporate Buyer Account-Level Campaign Setup",
      "Client Engagement & Retention Attribution Model"
    ],
    featuredResult: {
      metric: "4.8x",
      context: "Higher content save rate among corporate decision-makers"
    }
  },
  "industrial-manufacturing": {
    slug: "industrial-manufacturing",
    name: "Industrial & Manufacturing",
    tagline: "OEMs, Industrial Exporters & Heavy Engineering",
    metaTitle: "B2B Manufacturing & Industrial Export Marketing | Saini Nexus",
    metaDescription: "Modernize B2B acquisition for manufacturers and industrial exporters across India and global markets with Saini Nexus.",
    heroHeadline: "Industrial Precision Meets Global B2B Acquisition.",
    heroSubheadline: "From Rajasthan's manufacturing corridors to international export markets, Saini Nexus helps industrial producers win global procurement contracts.",
    marketContext: "Industrial manufacturers often produce world-class precision engineering but rely on traditional agents and middlemen. Direct digital demand systems allow manufacturers to capture higher margins and build direct buyer relationships.",
    coreFriction: [
      "Reliance on low-margin trade brokerages and volatile trade fairs.",
      "Slow adaptation to modern international buyer research behavior.",
      "Difficulty establishing premium pricing against low-cost commodity competitors."
    ],
    playbookStrategy: [
      { title: "Factory Capability Teardowns", description: "Showcasing factory floor robotics, ISO tolerances, and QA workflows in high-craft Document Ads." },
      { title: "Cross-Border Procurement ABM", description: "Targeting VP of Supply Chain and Procurement Directors across the US, UK, and Europe." },
      { title: "Direct RFQ Gate Automation", description: "Deploying 1-click technical spec submission forms with instant sales engineering routing." }
    ],
    buyingCommittee: [
      { role: "VP of Supply Chain", concern: "Lead-time reliability, supply chain resilience, and capacity.", winningAngle: "Facility certification documentation and capacity forecasting." },
      { role: "Chief Procurement Officer (CPO)", concern: "Unit cost at scale, tariff compliance, and payment terms.", winningAngle: "Landed cost calculators and international export credentials." },
      { role: "Head of Quality Control", concern: "Defect rates, metallurgical testing, and ISO standards.", winningAngle: "Inspection video walkthroughs and metallurgical test reports." }
    ],
    deliverables: [
      "Industrial Export Positioning & Capability Playbook",
      "Cross-Border Supply Chain LinkedIn Ad Architecture",
      "Technical RFQ Submission & Routing Funnel",
      "International Deal Value & Inquiry Attribution Dashboard"
    ],
    featuredResult: {
      metric: "42%",
      context: "Increase in direct overseas RFQ inquiries with 28% margin improvement"
    }
  },
  "real-estate": {
    slug: "real-estate",
    name: "Real Estate",
    tagline: "Commercial Developers, REITs & Industrial Logistics Parks",
    metaTitle: "Commercial Real Estate & B2B Developer Marketing | Saini Nexus",
    metaDescription: "Attract enterprise tenants, industrial occupiers, and institutional investors with Saini Nexus commercial real estate growth systems.",
    heroHeadline: "Commercial Real Estate Marketing Built for Enterprise Occupiers.",
    heroSubheadline: "We help commercial developers, business park operators, and REITs reach corporate real estate directors, logistics heads, and institutional investors.",
    marketContext: "Commercial real estate transactions involve massive multi-year leases and extensive boardroom diligence. Standard consumer real estate marketing fails to address corporate financial and spatial criteria.",
    coreFriction: [
      "Marketing campaigns attracting individual retail buyers instead of corporate occupiers.",
      "Long vacancy cycles due to lack of direct reach to corporate relocation committees.",
      "Inability to communicate infrastructure readiness and connectivity metrics."
    ],
    playbookStrategy: [
      { title: "Corporate Real Estate (CRE) ABM", description: "Targeting Workplace Directors and COOs at expanding enterprise companies." },
      { title: "Infrastructure & Logistics Teardowns", description: "Highlighting power redundancy, connectivity corridors, and floorplate efficiency in-feed." },
      { title: "Institutional Investor Narrative", description: "Distributing yield stability and ESG compliance assets to family offices and funds." }
    ],
    buyingCommittee: [
      { role: "Head of Corporate Real Estate", concern: "Spatial efficiency, employee commute access, and lease flexibility.", winningAngle: "Floorplate efficiency diagrams and transit connectivity maps." },
      { role: "Chief Financial Officer (CFO)", concern: "Capital expenditure vs operational lease expense, tax incentives.", winningAngle: "Total cost of occupancy financial comparison models." }
    ],
    deliverables: [
      "Commercial Property Asset Positioning & Tenant Dossier",
      "Corporate Occupier Targeted LinkedIn Campaign",
      "Enterprise Site Visit Scheduling & Routing Funnel",
      "Leasing Pipeline Velocity & Investor Reach Telemetry"
    ],
    featuredResult: {
      metric: "5.2x",
      context: "Increase in verified enterprise site inspection bookings"
    }
  }
};
