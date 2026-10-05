export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  strategicRole: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  fullDescription: string;
  premiumPositioning: string;
  keywords: string[];
  capabilities: {
    title: string;
    description: string;
  }[];
  whatWeSolve: string[];
  deliverables: string[];
  whoThisIsFor: string[];
  relatedSolutionHref: string;
  relatedSolutionTitle: string;
  relatedCaseStudySlug: string;
}

export const SERVICES: Record<string, ServiceItem> = {
  "b2b-growth-strategy": {
    id: "b2b-growth-strategy",
    slug: "b2b-growth-strategy",
    number: "01",
    title: "B2B Growth Strategy",
    strategicRole: "Strategy",
    tagline: "Strategic direction & market architecture",
    metaTitle: "B2B Growth Strategy Consulting | Saini Nexus",
    metaDescription: "Build a focused B2B growth strategy around your ICP, positioning, buyer journey, go-to-market priorities and pipeline objectives with Saini Nexus.",
    shortDescription: "Build a clearer path from market positioning to commercial growth across ICP, positioning, and acquisition channels.",
    fullDescription: "Build a clearer path from market positioning to commercial growth. Saini Nexus develops B2B growth strategies around your ideal customer profile, buyer journey, positioning, acquisition channels and pipeline objectives.",
    premiumPositioning: "Strategy before execution.",
    keywords: ["B2B Growth Strategy", "B2B Growth Consulting", "B2B Marketing Strategy", "B2B Growth Consultant", "ICP Strategy"],
    capabilities: [
      { title: "ICP & Buyer Strategy", description: "Granular firmographic and psychographic profiling to define high-value target accounts." },
      { title: "Positioning & Go-to-Market", description: "Clarifying category positioning, competitive differentiation, and commercial market entrance." },
      { title: "Growth Channel Strategy", description: "Selecting and structuring the right mix of organic and paid acquisition channels." },
      { title: "Measurement & Priorities", description: "Establishing pipeline metrics, closed-loop telemetry, and strategic go-to-market milestones." }
    ],
    whatWeSolve: [
      "Wasted ad budget on unfocused, broad audiences.",
      "Generic positioning that fails to differentiate your product.",
      "Misaligned sales and marketing teams chasing low-ticket leads."
    ],
    deliverables: [
      "Target ICP & Buying Committee Blueprint",
      "Category Positioning Matrix",
      "Full-Funnel GTM Channel Roadmap",
      "Pipeline Attribution Framework"
    ],
    whoThisIsFor: [
      "B2B SaaS & Tech founders scaling commercial revenue.",
      "Enterprise IT & Consulting firms expanding into international markets.",
      "Industrial manufacturing exporters modernizing direct acquisition."
    ],
    relatedSolutionHref: "/solutions/build-b2b-demand",
    relatedSolutionTitle: "Build B2B Demand",
    relatedCaseStudySlug: "cloudscale-enterprise-saas"
  },
  "b2b-marketing-strategy": {
    id: "b2b-marketing-strategy",
    slug: "b2b-marketing-strategy",
    number: "02",
    title: "B2B Marketing Strategy",
    strategicRole: "Marketing Architecture",
    tagline: "Integrated full-funnel marketing systems",
    metaTitle: "B2B Marketing Strategy Consulting | Saini Nexus",
    metaDescription: "Build an integrated B2B marketing strategy across positioning, messaging, content, channels, campaigns and measurement with Saini Nexus.",
    shortDescription: "Create a connected marketing system around your buyers, market position and commercial goals.",
    fullDescription: "Create a connected marketing system around your buyers, market position and commercial goals. We align positioning, messaging, content, channels, campaigns and measurement.",
    premiumPositioning: "Build the marketing system, not isolated campaigns.",
    keywords: ["B2B Marketing Strategy", "B2B Marketing Consulting", "B2B Marketing Agency", "B2B Marketing Company India"],
    capabilities: [
      { title: "B2B Brand Narrative", description: "Developing compelling value propositions that cut through industry noise." },
      { title: "Buyer Journey Alignment", description: "Structuring content across problem-aware to decision-ready stages." },
      { title: "Content Strategy", description: "High-craft research, playbooks, and educational assets." },
      { title: "Campaign Architecture", description: "Multi-channel distribution connected directly to pipeline tracking." }
    ],
    whatWeSolve: [
      "Random acts of marketing with zero pipeline impact.",
      "Messaging focused on technical features rather than business value.",
      "Inability to educate out-of-market buyers."
    ],
    deliverables: [
      "Master Messaging Architecture",
      "Buyer Journey Content Map",
      "Multi-Channel Campaign Blueprint",
      "Executive Marketing Telemetry Dashboard"
    ],
    whoThisIsFor: [
      "Companies with long, multi-stakeholder sales cycles.",
      "B2B service firms seeking predictable inbound demand.",
      "Founders tired of vanity metrics with no revenue."
    ],
    relatedSolutionHref: "/solutions/turn-linkedin-into-growth-channel",
    relatedSolutionTitle: "Turn LinkedIn Into a Growth Channel",
    relatedCaseStudySlug: "fintech-consulting-demand-engine"
  },
  "linkedin-b2b-marketing": {
    id: "linkedin-b2b-marketing",
    slug: "linkedin-b2b-marketing",
    number: "03",
    title: "LinkedIn B2B Marketing",
    strategicRole: "Core Channel",
    tagline: "Organic authority & audience development",
    metaTitle: "LinkedIn B2B Marketing Agency | Saini Nexus",
    metaDescription: "Saini Nexus helps B2B companies use LinkedIn strategically through content, executive positioning, audience development and demand-focused marketing.",
    shortDescription: "Turn LinkedIn from a publishing channel into a strategic B2B growth channel.",
    fullDescription: "Turn LinkedIn from a publishing channel into a strategic B2B growth channel. Saini Nexus combines company positioning, executive visibility, content strategy and audience development to reach relevant professional audiences.",
    premiumPositioning: "LinkedIn as a B2B growth channel, not simply a social platform.",
    keywords: ["LinkedIn B2B Marketing", "LinkedIn Marketing Agency", "LinkedIn Marketing Company", "LinkedIn B2B Strategy"],
    capabilities: [
      { title: "Company Page Strategy", description: "Transforming company pages into high-converting educational hubs." },
      { title: "Executive & Founder Positioning", description: "Amplifying founder and leadership voices to build market credibility and authority." },
      { title: "B2B Content Strategy", description: "Publishing high-craft frameworks, case teardowns, and industry observations." },
      { title: "Audience Development", description: "Growing engaged followers among verified target accounts and decision-makers." }
    ],
    whatWeSolve: [
      "Publishing generic corporate updates with zero engagement.",
      "Lack of executive presence on LinkedIn.",
      "Inability to build an audience of real decision-makers."
    ],
    deliverables: [
      "Company Page Positioning Playbook",
      "Monthly Editorial Content Calendar",
      "Executive Voice Guidelines",
      "Audience Growth & Engagement Reports"
    ],
    whoThisIsFor: [
      "B2B firms aiming to establish category authority.",
      "Founders wanting to lead industry conversations.",
      "Teams seeking organic LinkedIn pipeline."
    ],
    relatedSolutionHref: "/solutions/turn-linkedin-into-growth-channel",
    relatedSolutionTitle: "Turn LinkedIn Into a Growth Channel",
    relatedCaseStudySlug: "fintech-consulting-demand-engine"
  },
  "linkedin-ads-thought-leader-ads": {
    id: "linkedin-ads-thought-leader-ads",
    slug: "linkedin-ads-thought-leader-ads",
    number: "04",
    title: "LinkedIn Ads & Thought Leader Ads",
    strategicRole: "Paid Growth",
    tagline: "Flagship paid advertising & executive sponsorship",
    metaTitle: "LinkedIn Ads Agency | Thought Leader Ads | Saini Nexus",
    metaDescription: "LinkedIn Ads and Thought Leader Ads for B2B companies. Strategy, targeting, creative, campaign management, optimisation and measurement.",
    shortDescription: "Reach relevant B2B audiences through strategic LinkedIn advertising and Thought Leader Ads.",
    fullDescription: "Reach relevant B2B audiences through strategic LinkedIn advertising. Saini Nexus develops campaign architecture across audience targeting, creative, Lead Gen Forms, Thought Leader Ads, retargeting and measurement.",
    premiumPositioning: "Paid distribution built around buyer relevance, not cheap clicks.",
    keywords: ["LinkedIn Ads Agency", "LinkedIn Ads Management", "Thought Leader Ads", "LinkedIn Thought Leader Ads", "B2B LinkedIn Advertising"],
    capabilities: [
      { title: "LinkedIn Advertising Strategy", description: "Structuring full-funnel account architecture from cold demand creation to retargeting." },
      { title: "Audience Targeting", description: "Precision targeting by job seniority, company lists (ABM), and negative exclusions." },
      { title: "Thought Leader Ads", description: "Sponsoring authentic founder and executive posts for 3x higher CTR and trust." },
      { title: "Ad Creative & Lead Gen Campaigns", description: "High-converting native Document Ads, single image creatives, and in-feed forms." }
    ],
    whatWeSolve: [
      "Burning ad spend on junior staff and students.",
      "High CPLs on cold 'Book a Demo' ads that sales reps reject.",
      "Ad creatives that look like generic stock graphics."
    ],
    deliverables: [
      "Full Campaign Account Architecture",
      "Custom Creative Assets & Document Carousels",
      "Matched Account (ABM) Audiences",
      "Weekly Optimization & CAC Telemetry"
    ],
    whoThisIsFor: [
      "B2B SaaS companies scaling past $10k MRR.",
      "Enterprise IT, consulting, and export firms targeting global buyers.",
      "Growth teams looking to optimize LinkedIn Ads ROI."
    ],
    relatedSolutionHref: "/solutions/reach-high-value-accounts",
    relatedSolutionTitle: "Reach High-Value Accounts",
    relatedCaseStudySlug: "cloudscale-enterprise-saas"
  },
  "b2b-demand-generation": {
    id: "b2b-demand-generation",
    slug: "b2b-demand-generation",
    number: "05",
    title: "B2B Demand Generation",
    strategicRole: "Demand Engine",
    tagline: "Educate & convert out-of-market buyers",
    metaTitle: "B2B Demand Generation Agency | Saini Nexus",
    metaDescription: "Build B2B demand through content, LinkedIn, paid distribution and full-funnel marketing designed to create awareness, engagement and buying interest.",
    shortDescription: "Build demand before asking for the sale through content, LinkedIn, and audience strategy.",
    fullDescription: "Build demand before asking for the sale. Saini Nexus connects content, LinkedIn marketing, paid distribution and audience strategy to create awareness, credibility and buying interest.",
    premiumPositioning: "Create demand before asking for the sale.",
    keywords: ["B2B Demand Generation", "B2B Demand Gen Agency", "Demand Generation Agency India", "B2B Demand Generation Strategy"],
    capabilities: [
      { title: "Demand Strategy & Full-Funnel", description: "Guiding buying committees from unaware to problem-aware to solution readiness." },
      { title: "Content-Led Demand", description: "Ungated frameworks and practitioner playbooks that demonstrate competence in-feed." },
      { title: "LinkedIn Demand Generation", description: "Engaging target accounts systematically across organic and paid touchpoints." },
      { title: "Demand Measurement", description: "Tracking brand search lift, inbound velocity, and qualified pipeline acceleration." }
    ],
    whatWeSolve: [
      "Chasing only the 5% in-market while ignoring future buyers.",
      "Over-reliance on cold outbound spam.",
      "Gated eBooks that produce uncontactable leads."
    ],
    deliverables: [
      "Demand Generation Roadmap",
      "Ungated Strategic Content Suite",
      "Paid Distribution & Retargeting Setup",
      "Account Intent Scoring System"
    ],
    whoThisIsFor: [
      "Companies with 3–12 month enterprise sales cycles.",
      "B2B firms launching new category products.",
      "Founders wanting sustainable inbound deal flow."
    ],
    relatedSolutionHref: "/solutions/build-b2b-demand",
    relatedSolutionTitle: "Build B2B Demand",
    relatedCaseStudySlug: "cloudscale-enterprise-saas"
  },
  "account-based-marketing": {
    id: "account-based-marketing",
    slug: "account-based-marketing",
    number: "06",
    title: "Account-Based Marketing (ABM)",
    strategicRole: "Enterprise Growth",
    tagline: "High-value account penetration & consensus",
    metaTitle: "Account-Based Marketing Agency | B2B ABM | Saini Nexus",
    metaDescription: "Reach high-value B2B accounts with ABM strategy, target account selection, buyer mapping, LinkedIn targeting, personalised campaigns and engagement.",
    shortDescription: "Focus your marketing resources on the accounts that matter most.",
    fullDescription: "Focus your marketing resources on the accounts that matter most. Saini Nexus develops ABM programs around target-account selection, buying committees, personalised messaging and multi-touch engagement.",
    premiumPositioning: "Quality of accounts over quantity of leads.",
    keywords: ["Account Based Marketing", "ABM Agency", "B2B ABM", "LinkedIn ABM", "ABM Strategy"],
    capabilities: [
      { title: "Target Account Strategy & ICP", description: "Curating Tier-1 and Tier-2 account lists based on firmographic fit and ACV potential." },
      { title: "Buying Committee Mapping", description: "Mapping and engaging the economic buyer, technical evaluator, and champion simultaneously." },
      { title: "LinkedIn ABM Targeting", description: "Matched audience account lists with job function and seniority layering." },
      { title: "Personalised Messaging & Engagement", description: "Industry-specific messaging tailored to each stakeholder role across the account." }
    ],
    whatWeSolve: [
      "Sales reps wasting time on low-budget, unqualified prospects.",
      "Deals stalling because only one stakeholder was engaged.",
      "Zero account penetration in target enterprise logos."
    ],
    deliverables: [
      "Verified Target Account List (TAL)",
      "Multi-Role Messaging Matrix",
      "Matched Account LinkedIn Campaign Structure",
      "Account Engagement Telemetry Dashboard"
    ],
    whoThisIsFor: [
      "Enterprise SaaS and IT services with ACV > $15,000.",
      "Industrial manufacturing exporters selling high-ticket machinery.",
      "Consulting firms targeting corporate enterprise leadership."
    ],
    relatedSolutionHref: "/solutions/reach-high-value-accounts",
    relatedSolutionTitle: "Reach High-Value Accounts",
    relatedCaseStudySlug: "apex-industrial-export"
  },
  "founder-led-executive-b2b-marketing": {
    id: "founder-led-executive-b2b-marketing",
    slug: "founder-led-executive-b2b-marketing",
    number: "07",
    title: "Founder-Led & Executive B2B Marketing",
    strategicRole: "Authority & Influence",
    tagline: "Turn leadership expertise into pipeline",
    metaTitle: "Founder-Led B2B Marketing | Executive Thought Leadership",
    metaDescription: "Turn founder and executive expertise into a strategic B2B marketing asset through positioning, thought leadership, LinkedIn content and paid amplification.",
    shortDescription: "Turn executive expertise into a strategic growth asset through positioning and thought leadership.",
    fullDescription: "Turn executive expertise into a strategic growth asset. Saini Nexus helps B2B founders and executives develop positioning, thought leadership and LinkedIn presence that strengthen brand credibility and support demand generation.",
    premiumPositioning: "Turn executive expertise into business influence.",
    keywords: ["Founder-Led Marketing", "Executive B2B Marketing", "Executive Thought Leadership", "Thought Leader Marketing"],
    capabilities: [
      { title: "Founder Positioning & Narrative", description: "Developing a sharp, differentiated commercial point of view and category authority." },
      { title: "Executive Thought Leadership", description: "High-craft essays, contrarian perspectives, and strategic industry analysis." },
      { title: "LinkedIn Strategy & Content", description: "Systematic weekly publishing schedule and executive voice development." },
      { title: "Thought Leader Ads & Amplification", description: "Sponsoring authentic executive posts directly into target buying committees." }
    ],
    whatWeSolve: [
      "Founder's deep industry knowledge staying locked in their head.",
      "Corporate brand pages suffering from low organic reach.",
      "Lack of trust and authority compared to incumbent competitors."
    ],
    deliverables: [
      "Founder Brand Positioning Blueprint",
      "Weekly Ghostwritten Content Pipeline",
      "Thought Leader Ad Campaign Setup",
      "Executive Growth & Inbound Inquiry Tracking"
    ],
    whoThisIsFor: [
      "Founders seeking to build an authentic category voice.",
      "CEOs of high-growth B2B companies.",
      "Leadership teams aiming to shorten enterprise sales cycles."
    ],
    relatedSolutionHref: "/solutions/build-founder-executive-authority",
    relatedSolutionTitle: "Build Founder & Executive Authority",
    relatedCaseStudySlug: "fintech-consulting-demand-engine"
  },
  "b2b-lead-pipeline-generation": {
    id: "b2b-lead-pipeline-generation",
    slug: "b2b-lead-pipeline-generation",
    number: "08",
    title: "B2B Lead & Pipeline Generation",
    strategicRole: "Pipeline Outcome",
    tagline: "Sales-accepted opportunities & ARR",
    metaTitle: "B2B Lead & Pipeline Generation Agency | Saini Nexus",
    metaDescription: "Generate qualified B2B opportunities through ICP targeting, LinkedIn, demand generation, paid acquisition, conversion strategy and pipeline measurement.",
    shortDescription: "Connect marketing activity to commercial opportunity through qualified pipeline generation.",
    fullDescription: "Connect marketing activity to commercial opportunity. Saini Nexus combines audience targeting, LinkedIn, demand generation and conversion strategy to help B2B businesses create qualified sales opportunities.",
    premiumPositioning: "Qualified opportunities, not vanity lead volume.",
    keywords: ["B2B Lead Generation", "B2B Lead Generation Agency", "B2B Pipeline Generation", "Qualified B2B Leads"],
    capabilities: [
      { title: "ICP Targeting & Lead Generation", description: "Reaching decision-makers with high-intent offers and conversion pathways." },
      { title: "Lead Qualification & Forms", description: "In-feed forms with qualification gates (budget, company size, buying timeline)." },
      { title: "Conversion Strategy & Speed-to-Lead", description: "Instant CRM and Slack webhooks routing sales-accepted leads in real-time." },
      { title: "Pipeline Measurement & Attribution", description: "Tracking cost per sales-accepted opportunity and commercial revenue return." }
    ],
    whatWeSolve: [
      "Sales reps rejecting low-quality, unqualified form fills.",
      "High CAC with zero visibility on pipeline return.",
      "Slow lead follow-up cycles causing lost deals."
    ],
    deliverables: [
      "Lead Qualification Matrix",
      "High-Converting LinkedIn Lead Gen Campaigns",
      "Instant CRM & Slack Routing Webhooks",
      "Sales Acceptance Rate (SAR) Dashboard"
    ],
    whoThisIsFor: [
      "B2B companies needing qualified discovery meetings.",
      "Sales leaders tired of chasing unresponsive leads.",
      "Growth teams focused on CAC payback and ARR."
    ],
    relatedSolutionHref: "/solutions/generate-qualified-b2b-pipeline",
    relatedSolutionTitle: "Generate Qualified B2B Pipeline",
    relatedCaseStudySlug: "cloudscale-enterprise-saas"
  }
};
