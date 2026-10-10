export interface GrowthStage {
  id: string;
  step: string;
  title: string;
  shortDesc: string;
  headline: string;
  whatItMeans: string;
  whyItMatters: string;
  whatSainiNexusDoes: string[];
  keyMetric: string;
  deliverables: string[];
  serviceLink: string;
}

export const NEXUS_GROWTH_STAGES: GrowthStage[] = [
  {
    id: "positioning",
    step: "01",
    title: "Positioning",
    shortDesc: "Commercial narrative & category distinction",
    headline: "Transform vague offerings into high-stakes B2B value propositions.",
    whatItMeans: "Defining exactly who you win against, why enterprise buyers choose you, and the specific cost of inaction for your prospects.",
    whyItMatters: "Without sharp positioning, ad spend is wasted trying to convince the wrong people with generic promises.",
    whatSainiNexusDoes: [
      "Competitive narrative differentiation audit",
      "ICP problem hierarchy mapping",
      "Executive POV formulation for founders and leadership",
      "Strategic messaging framework for all downstream campaigns"
    ],
    keyMetric: "Category Clarity & Messaging Win Rate",
    deliverables: ["B2B Positioning Matrix", "Core Value Narrative", "Competitor Contrast Guide"],
    serviceLink: "/solutions/b2b-marketing"
  },
  {
    id: "icp-audience",
    step: "02",
    title: "ICP & Audience",
    shortDesc: "Buying committee & account architecture",
    headline: "Map the entire buying group, not just single titles.",
    whatItMeans: "Targeting the 4-6 decision makers (Economic Buyer, Technical Evaluator, Champion, User) inside high-intent accounts.",
    whyItMatters: "B2B deals are never closed by one person. Targeting only one title creates dead-end pipeline.",
    whatSainiNexusDoes: [
      "Tiered account list construction (Tier 1 ABM & Tier 2 Segmented)",
      "Job function, seniority & buying committee mapping",
      "First-party CRM data enrichment & exclusion filtering",
      "LinkedIn matched audience segment engineering"
    ],
    keyMetric: "Target Account Penetration Rate",
    deliverables: ["Buying Group Architecture", "Account Tiering Protocol", "Audience Exclusion Layers"],
    serviceLink: "/solutions/linkedin-marketing"
  },
  {
    id: "content",
    step: "03",
    title: "Content",
    shortDesc: "First-party insights & editorial resonance",
    headline: "Produce content that solves boardroom problems, not social fluff.",
    whatItMeans: "Original frameworks, data teardowns, tactical teardowns, and point-of-view assets that prove commercial competence.",
    whyItMatters: "Buyers read 5-7 pieces of content before talking to sales. If your content is superficial, your brand is judged as lightweight.",
    whatSainiNexusDoes: [
      "Editorial content calendar focused on buyer objections",
      "Founder ghostwriting and executive voice extraction",
      "Technical teardowns and visual decision frameworks",
      "Case story distillation from actual client wins"
    ],
    keyMetric: "Executive Engagement & Content Save Rate",
    deliverables: ["Thought Leadership Playbook", "Executive POV Articles", "Visual Framework Assets"],
    serviceLink: "/solutions/founder-led-marketing"
  },
  {
    id: "distribution",
    step: "04",
    title: "LinkedIn Distribution",
    shortDesc: "Organic reach & network authority",
    headline: "Distribute through company pages and founder profiles synergistically.",
    whatItMeans: "Leveraging algorithmic mechanics and network effects to ensure your ideas are seen by 80%+ of your total addressable market.",
    whyItMatters: "Great content without distribution creates zero pipeline.",
    whatSainiNexusDoes: [
      "Dual-channel distribution (Company Page + Key Executive Profiles)",
      "Strategic comment engagement with target account leaders",
      "Employee advocacy activation frameworks",
      "High-converting carousel and document post architectures"
    ],
    keyMetric: "Qualified Decision-Maker Impressions",
    deliverables: ["Weekly Distribution Cadence", "Executive Amplification Network", "Organic Inbound Capture"],
    serviceLink: "/solutions/linkedin-marketing"
  },
  {
    id: "linkedin-ads",
    step: "05",
    title: "LinkedIn Ads",
    shortDesc: "Precision paid media & full-funnel coverage",
    headline: "Precision advertising engineered for pipeline, not hollow clicks.",
    whatItMeans: "Deploying Sponsored Content, Document Ads, and In-Feed Lead Forms to systematically nurture and capture in-market accounts.",
    whyItMatters: "Paid media gives you guaranteed reach into the exact accounts and titles that matter most to your quarterly revenue.",
    whatSainiNexusDoes: [
      "Multi-campaign architecture (Cold Awareness, Retargeting, High-Intent Capture)",
      "High-converting Lead Gen Form design and CRM webhooks",
      "Bid strategy & cost-per-qualified-opportunity optimization",
      "Creative fatigue rotation and A/B message testing"
    ],
    keyMetric: "Cost Per Qualified Pipeline Opportunity (CPQO)",
    deliverables: ["Full-Funnel Campaign Architecture", "Conversion-Optimized Creatives", "Live CRM Attribution"],
    serviceLink: "/solutions/linkedin-ads"
  },
  {
    id: "thought-leader-ads",
    step: "06",
    title: "Thought Leader Ads",
    shortDesc: "Human-to-human executive sponsored content",
    headline: "Amplify executive perspectives to build authentic trust and engage decision-makers through credible voices.",
    whatItMeans: "Amplifying authentic posts directly from founder and C-suite profiles into target account feeds.",
    whyItMatters: "Decision-makers trust people far more than sterile corporate logos. Thought Leader Ads humanize the enterprise pitch.",
    whatSainiNexusDoes: [
      "Executive profile optimization and hook engineering",
      "Thought Leader Ad campaign segmentation & audience targeting",
      "Engagement-to-pipeline conversation sequencing",
      "Strategic commentary monitoring and lead routing"
    ],
    keyMetric: "Click-Through-Rate (CTR) & Executive Trust Score",
    deliverables: ["Executive Ad Flight Matrix", "Founder Hook Scripts", "Account Engagement Reports"],
    serviceLink: "/solutions/thought-leader-ads"
  },
  {
    id: "demand-generation",
    step: "07",
    title: "Demand Generation",
    shortDesc: "Category education & pipeline creation",
    headline: "Educate the 95% out-of-market buyers so they choose you when ready.",
    whatItMeans: "Creating uncaptured market desire through consistent problem awareness, solution frameworks, and mental availability.",
    whyItMatters: "Only 5% of your market is buying today. Demand generation ensures you are the only logical choice when the other 95% enter the market.",
    whatSainiNexusDoes: [
      "Demand creation playbooks tailored to long sales cycles",
      "Ungated high-value educational assets to build frictionless affinity",
      "Dark social and community-driven brand resonance tracking",
      "Retargeting funnels based on consumption depth"
    ],
    keyMetric: "Brand Search Lift & Inbound Intent Inquiries",
    deliverables: ["Demand Generation Framework", "Frictionless Content Assets", "Multi-Touch Retargeting Matrix"],
    serviceLink: "/solutions/demand-generation"
  },
  {
    id: "lead-generation",
    step: "08",
    title: "Lead Generation",
    shortDesc: "High-intent capture & qualification",
    headline: "Capture high-intent opportunities with zero friction.",
    whatItMeans: "Transforming educated attention into booked meetings, inbound RFPs, and pre-qualified discovery calls.",
    whyItMatters: "Traffic and impressions mean nothing if they don't convert into qualified discovery calls with actual budget holders.",
    whatSainiNexusDoes: [
      "Zero-click LinkedIn Lead Gen Forms with work email verification",
      "Landing page conversion optimization & friction elimination",
      "Speed-to-lead workflow automations (Slack/CRM alerts under 5 mins)",
      "Custom discovery questionnaire qualification"
    ],
    keyMetric: "Sales-Accepted Lead (SAL) Conversion Rate",
    deliverables: ["Frictionless Lead Capture Funnels", "CRM Sync & Lead Routing", "Lead Scoring Protocol"],
    serviceLink: "/solutions/b2b-lead-generation"
  },
  {
    id: "pipeline",
    step: "09",
    title: "Pipeline & Revenue",
    shortDesc: "Sales velocity & closed-won ARR",
    headline: "Connect every marketing rupee directly to sales pipeline and revenue.",
    whatItMeans: "Aligning marketing operations with sales outcomes so every qualified meeting progresses smoothly to closed-won deals.",
    whyItMatters: "The true measure of marketing is not cost-per-click, but pipeline velocity, deal size, and closed-won enterprise revenue.",
    whatSainiNexusDoes: [
      "Full-funnel pipeline attribution modeling",
      "Sales enablement collateral aligned with ad campaign hooks",
      "Post-lead nurturing sequences to reduce deal stall time",
      "Quarterly pipeline velocity & CAC reviews"
    ],
    keyMetric: "Closed-Won Revenue & Pipeline Velocity",
    deliverables: ["Revenue Attribution Dashboard", "Sales-Marketing SLA Protocol", "Executive Pipeline Reports"],
    serviceLink: "/solutions/b2b-marketing"
  }
];
