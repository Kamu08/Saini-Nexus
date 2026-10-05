export interface SolutionItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  fullDescription: string;
  problemStatement: string;
  relevantServices: {
    title: string;
    href: string;
    description: string;
  }[];
  strategicFramework: {
    phase: string;
    title: string;
    details: string;
  }[];
  deliverables: string[];
  metricsThatMatter: {
    metric: string;
    context: string;
  }[];
}

export const SOLUTIONS: Record<string, SolutionItem> = {
  "build-b2b-demand": {
    id: "build-b2b-demand",
    slug: "build-b2b-demand",
    number: "01",
    title: "Build B2B Demand",
    tagline: "Create awareness, credibility & buying interest",
    metaTitle: "Build B2B Demand | B2B Demand Generation Solutions | Saini Nexus",
    metaDescription: "Build sustained B2B demand and category awareness among high-value decision-makers with Saini Nexus full-funnel growth architecture.",
    shortDescription: "For companies that need stronger market awareness, executive credibility, and sustained buying interest before asking for the sale.",
    fullDescription: "Different businesses face different growth challenges. Saini Nexus combines strategy, LinkedIn, demand generation and performance marketing around the problem that needs solving. Building B2B demand focuses on educating the 95% of buyers who are currently out-of-market so that you are the first choice when they enter a buying cycle.",
    problemStatement: "Most B2B companies shout transactional 'Book a Demo' pitches to cold audiences, capturing only the 5% actively looking while leaving 95% of future buyers unaware and indifferent.",
    relevantServices: [
      { title: "B2B Growth Strategy", href: "/services/b2b-growth-strategy", description: "Market positioning and buyer journey architecture." },
      { title: "LinkedIn B2B Marketing", href: "/services/linkedin-b2b-marketing", description: "Organic brand presence and audience development." },
      { title: "B2B Demand Generation", href: "/services/b2b-demand-generation", description: "Ungated educational frameworks and intent creation." },
      { title: "LinkedIn Ads & Thought Leader Ads", href: "/services/linkedin-ads-thought-leader-ads", description: "Paid distribution to verified target decision-makers." }
    ],
    strategicFramework: [
      { phase: "Stage 1", title: "Problem Framing & Category POV", details: "Articulate the commercial cost of inaction for target buyers." },
      { phase: "Stage 2", title: "Ungated High-Craft Content", details: "Distribute technical frameworks, tear-downs, and actionable playbooks directly in-feed." },
      { phase: "Stage 3", title: "Paid Demand Amplification", details: "Sponsor thought leadership into buying committees using LinkedIn Campaign Manager." },
      { phase: "Stage 4", title: "Intent Signal Capture", details: "Retarget engaged accounts with proof assets, case teardowns, and low-friction conversion paths." }
    ],
    deliverables: [
      "Category Point-of-View & Problem Definition Matrix",
      "Full-Funnel Content & Creative Distribution Calendar",
      "Paid Demand Campaign Architecture on LinkedIn",
      "Account-Level Engagement & Pipeline Telemetry Dashboard"
    ],
    metricsThatMatter: [
      { metric: "3.8x", context: "Increase in target account brand search and inbound inquiry rate" },
      { metric: "48%", context: "Reduction in sales cycle length due to pre-educated prospects" },
      { metric: "100%", context: "Clean separation between vanity clicks and true ICP engagement" }
    ]
  },
  "reach-high-value-accounts": {
    id: "reach-high-value-accounts",
    slug: "reach-high-value-accounts",
    number: "02",
    title: "Reach High-Value Accounts",
    tagline: "Account-Based Marketing for high-ACV enterprise deals",
    metaTitle: "Reach High-Value Accounts | Enterprise ABM Solutions | Saini Nexus",
    metaDescription: "Focus marketing resources on strategic high-value target accounts with multi-stakeholder buying committee targeting from Saini Nexus.",
    shortDescription: "For companies selling into defined strategic accounts that require multi-stakeholder consensus across CFOs, CTOs, and Department Heads.",
    fullDescription: "Enterprise software, technology, and industrial contracts are never signed by a single individual. Saini Nexus orchestrates coordinated Account-Based Marketing (ABM) programs that engage Economic Buyers, Technical Evaluators, and Internal Champions simultaneously with personalized commercial proof.",
    problemStatement: "Enterprise sales cycles stall for months because marketing delivers single junior leads while the 5–7 executive committee members controlling the budget remain unaddressed.",
    relevantServices: [
      { title: "Account-Based Marketing (ABM)", href: "/services/account-based-marketing", description: "Target account tiering and personalized campaign orchestration." },
      { title: "LinkedIn B2B Marketing", href: "/services/linkedin-b2b-marketing", description: "Company authority and organic engagement with target firms." },
      { title: "LinkedIn Ads & Thought Leader Ads", href: "/services/linkedin-ads-thought-leader-ads", description: "Matched Audiences targeting exact company domains." },
      { title: "B2B Demand Generation", href: "/services/b2b-demand-generation", description: "Verticalized pain point proofs for enterprise decision-makers." }
    ],
    strategicFramework: [
      { phase: "Stage 1", title: "Target Account Selection & Tiering", details: "Filter accounts by revenue, technology stack, and geographic footprint." },
      { phase: "Stage 2", title: "Buying Committee Persona Mapping", details: "Identify 5-7 key stakeholders per named account across all seniority tiers." },
      { phase: "Stage 3", title: "Role-Specific Narrative Deployment", details: "Serve CFOs ROI metrics, CTOs architecture maps, and Champions workflow wins." },
      { phase: "Stage 4", title: "Sales Air-Cover & Trigger Handoff", details: "Alert outbound reps when named accounts cross the high-intent engagement threshold." }
    ],
    deliverables: [
      "Tiered Target Account List (TAL) with Committee Intelligence",
      "Custom Multi-Role Creative & Messaging Playbook",
      "LinkedIn Matched Audience & Account-Level Targeting Setup",
      "Account Intent & Sales Handoff Integration"
    ],
    metricsThatMatter: [
      { metric: "68%", context: "Target Account Penetration Rate within 90 days" },
      { metric: "$35k+", context: "Average Contract Value (ACV) targeted" },
      { metric: "82%", context: "Sales Acceptance Rate on inbound account opportunities" }
    ]
  },
  "turn-linkedin-into-growth-channel": {
    id: "turn-linkedin-into-growth-channel",
    slug: "turn-linkedin-into-growth-channel",
    number: "03",
    title: "Turn LinkedIn Into a Growth Channel",
    tagline: "Move beyond posting to a predictable commercial engine",
    metaTitle: "Turn LinkedIn Into a Growth Channel | B2B LinkedIn Growth | Saini Nexus",
    metaDescription: "Transform LinkedIn from a passive publishing page into a strategic B2B revenue and pipeline channel with Saini Nexus.",
    shortDescription: "For companies that have a LinkedIn presence but want stronger strategic contribution to pipeline, sales conversations, and category authority.",
    fullDescription: "Many B2B companies post regularly on LinkedIn but see zero correlation with sales revenue. Saini Nexus transforms LinkedIn from a superficial social media feed into a connected commercial channel integrating company page conversion architecture, executive influence, Thought Leader Ads, and in-feed lead capture.",
    problemStatement: "Companies invest time and money into LinkedIn posts that receive polite employee likes, but generate zero sales-accepted pipeline or commercial conversations.",
    relevantServices: [
      { title: "LinkedIn B2B Marketing", href: "/services/linkedin-b2b-marketing", description: "Company page architecture and organic authority." },
      { title: "LinkedIn Ads & Thought Leader Ads", href: "/services/linkedin-ads-thought-leader-ads", description: "Paid media frameworks and Thought Leader amplification." },
      { title: "Founder-Led & Executive Marketing", href: "/services/founder-led-executive-b2b-marketing", description: "Executive ghostwriting and authentic voice distribution." },
      { title: "B2B Demand Generation", href: "/services/b2b-demand-generation", description: "Content-led demand creation throughout the buyer journey." }
    ],
    strategicFramework: [
      { phase: "Stage 1", title: "LinkedIn Presence & Page Audit", details: "Transform company pages from passive bulletin boards into high-converting landing assets." },
      { phase: "Stage 2", title: "Editorial & Document Ad Engine", details: "Deploy dense technical carousels and contrarian problem breakdowns." },
      { phase: "Stage 3", title: "Executive Profile Activation", details: "Pair corporate branding with authentic executive points of view." },
      { phase: "Stage 4", title: "In-Feed Conversion Gates", details: "Deploy native Lead Gen Forms with zero external landing page bounce." }
    ],
    deliverables: [
      "Company Page Conversion Optimization & Asset Suite",
      "Monthly Editorial Publishing & Content Production Workflow",
      "Executive Ghostwriting & Engagement System",
      "LinkedIn Campaign Manager Tracking & Revenue Attribution"
    ],
    metricsThatMatter: [
      { metric: "4.8x", context: "Higher organic content save and share rate" },
      { metric: "14.8%", context: "Average native in-feed form completion rate" },
      { metric: "3.2x", context: "Increase in sales-accepted discovery calls" }
    ]
  },
  "build-founder-executive-authority": {
    id: "build-founder-executive-authority",
    slug: "build-founder-executive-authority",
    number: "04",
    title: "Build Founder & Executive Authority",
    tagline: "Turn leadership expertise into a strategic growth asset",
    metaTitle: "Build Founder & Executive Authority | Thought Leadership | Saini Nexus",
    metaDescription: "Turn executive and founder expertise into a commercial marketing and trust asset through positioning and Thought Leader Ads.",
    shortDescription: "For companies where leadership expertise and founder credibility are critical factors in closing high-stakes enterprise deals.",
    fullDescription: "In high-consideration B2B, buyers trust human experts far more than faceless corporate logos. Saini Nexus helps founders and executives develop distinctive points of view, authentic LinkedIn thought leadership, and paid amplification (Thought Leader Ads) that build boardroom trust and accelerate enterprise sales.",
    problemStatement: "Founders possess immense technical and industry knowledge but lack the time and editorial framework to translate it into consistent market authority.",
    relevantServices: [
      { title: "Founder-Led & Executive Marketing", href: "/services/founder-led-executive-b2b-marketing", description: "Executive positioning, ghostwriting, and authority building." },
      { title: "LinkedIn B2B Marketing", href: "/services/linkedin-b2b-marketing", description: "Profile optimization and strategic audience development." },
      { title: "LinkedIn Ads & Thought Leader Ads", href: "/services/linkedin-ads-thought-leader-ads", description: "Sponsoring personal posts into target account feeds." },
      { title: "B2B Growth Strategy", href: "/services/b2b-growth-strategy", description: "Aligning executive narrative with company commercial goals." }
    ],
    strategicFramework: [
      { phase: "Stage 1", title: "Executive Knowledge Extraction", details: "Extract deep domain insights in 30-minute bi-weekly strategic interviews." },
      { phase: "Stage 2", title: "Editorial Crafting & POV Synthesis", details: "Draft high-signal essays, teardowns, and contrarian perspectives without corporate fluff." },
      { phase: "Stage 3", title: "Profile Authority Optimization", details: "Refactor personal LinkedIn profiles as category authority assets." },
      { phase: "Stage 4", title: "Thought Leader Ad Amplification", details: "Sponsor top-performing personal posts into target buying committees." }
    ],
    deliverables: [
      "Executive Point-of-View & Strategic Narrative Playbook",
      "Bi-Weekly Interview & Content Production Protocol",
      "Full Month of Thought Leadership Posts & Carousel Assets",
      "Thought Leader Ad Campaign Setup & Optimization on LinkedIn"
    ],
    metricsThatMatter: [
      { metric: "3x", context: "Higher Click-Through Rate (CTR) compared to standard company ads" },
      { metric: "65%", context: "Lower Cost-Per-Click (CPC) using Thought Leader Ad formats" },
      { metric: "100%", context: "Authentic founder voice with zero generic AI filler" }
    ]
  },
  "generate-qualified-b2b-pipeline": {
    id: "generate-qualified-b2b-pipeline",
    slug: "generate-qualified-b2b-pipeline",
    number: "05",
    title: "Generate Qualified B2B Pipeline",
    tagline: "Connect marketing spend directly to closed-won revenue",
    metaTitle: "Generate Qualified B2B Pipeline | Commercial Growth Solutions | Saini Nexus",
    metaDescription: "Connect marketing activity to commercial pipeline with verified work email capture, strict qualification, and sales acceptance.",
    shortDescription: "For companies that need marketing connected closely to commercial outcomes, sales-accepted discovery calls, and closed-won ARR.",
    fullDescription: "Saini Nexus rejects marketing vanity metrics. We measure success strictly in Sales-Accepted Pipeline (SAP), customer acquisition cost (CAC), and revenue attribution. Our pipeline generation solution combines audience filtering, qualification gates, speed-to-lead webhook routing, and closed-loop CRM telemetry.",
    problemStatement: "Marketing delivers high volumes of low-intent contact submissions that sales reps reject, creating friction and wasted commercial expenditure.",
    relevantServices: [
      { title: "B2B Lead & Pipeline Generation", href: "/services/b2b-lead-pipeline-generation", description: "ICP capture, qualification gates, and speed-to-lead." },
      { title: "B2B Demand Generation", href: "/services/b2b-demand-generation", description: "Pre-educating buyers before sales discovery calls." },
      { title: "Account-Based Marketing (ABM)", href: "/services/account-based-marketing", description: "Focusing sales resources on high-ACV target accounts." },
      { title: "LinkedIn Ads & Thought Leader Ads", href: "/services/linkedin-ads-thought-leader-ads", description: "High-intent paid acquisition and retargeting." }
    ],
    strategicFramework: [
      { phase: "Stage 1", title: "Strict Qualification Gating", details: "Require verified work emails, budget range, and timeline verification." },
      { phase: "Stage 2", title: "Speed-to-Lead Webhook Routing", details: "Push submitted leads to CRM and sales Slack channels in <30 seconds." },
      { phase: "Stage 3", title: "Sales Enablement Briefs", details: "Equip SDRs with the exact ad creative and pain point that triggered the conversion." },
      { phase: "Stage 4", title: "Closed-Loop Revenue Telemetry", details: "Track opportunity progression from initial ad click to closed-won ARR." }
    ],
    deliverables: [
      "In-Feed Lead Capture Funnel with Custom Qualification Gates",
      "Real-Time CRM & Webhook Automation Pipeline (<30s SLA)",
      "Sales Handoff Intelligence Dossier for Account Executives",
      "Sales Acceptance Rate (SAR) & Closed-Loop Attribution Model"
    ],
    metricsThatMatter: [
      { metric: "82%", context: "Sales Acceptance Rate (SAR) on inbound pipeline opportunities" },
      { metric: "<30s", context: "Speed-to-lead webhook notification SLA to sales team" },
      { metric: "34%", context: "Compression in average enterprise sales cycle duration" }
    ]
  }
};
