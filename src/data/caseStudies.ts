export interface CaseStudyItem {
  slug: string;
  clientName: string;
  clientCode: string;
  industry: string;
  market: string;
  timeline: string;
  coreChallenge: string;
  businessContext: string;
  hypothesis: string;
  diagnosis: string;
  strategy: string;
  execution: string[];
  campaignHook: string;
  creativeFormat: string;
  spendProfile: string;
  campaignMetrics: {
    label: string;
    metric: string;
    context: string;
  }[];
  businessOutcomes: {
    label: string;
    metric: string;
    context: string;
  }[];
  whatChanged: string;
  keyLearning: string;
  relatedService: string;
}

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    slug: "cloudscale-enterprise-saas",
    clientName: "CloudScale Systems",
    clientCode: "CSS-2024",
    industry: "B2B SaaS / DevOps",
    market: "United States & India",
    timeline: "90-Day Sprint",
    coreChallenge: "CloudScale was generating leads via LinkedIn Lead Gen forms at $220 CPL, but 86% were junior developers with zero purchasing authority. Sales reps refused to take follow-up meetings.",
    businessContext: "A Series-B funded enterprise infrastructure SaaS provider expanding into mid-market US manufacturing and financial technology accounts.",
    hypothesis: "Shifting from broad title targeting to Matched Account ABM with strict seniority exclusions and Thought Leader Ads from the CEO will lower CAC while increasing Sales Acceptance Rate to >75%.",
    diagnosis: "The previous agency targeted 'Software Engineers' without exclusion filters, using generic 'Get Free Demo' ad graphics that attracted students and entry-level coders.",
    strategy: "Constructed a 3-tier ABM architecture targeting 450 verified enterprise accounts. Used Document Ads for technical credibility and Thought Leader Ads for executive trust.",
    execution: [
      "Tier-1 account list matching 450 enterprise accounts with ACV > $25,000.",
      "Executive POV Thought Leader ad campaign sponsored from the Founder profile.",
      "8-slide technical PDF architecture teardown with zero gated friction.",
      "Mandatory qualification gate on native Lead Gen forms (Budget, Tech Stack)."
    ],
    campaignHook: "'Why 70% of Enterprise Migration Budgets Overrun by Month 3—And the 4-Point Pre-Flight Audit.'",
    creativeFormat: "8-Page Native LinkedIn Document Ad + CEO Thought Leader Ad",
    spendProfile: "Scaled from $3,500/mo test to $12,000/mo steady state",
    campaignMetrics: [
      { label: "CTR Benchmark", metric: "2.84%", context: "Thought Leader Ads outperformed industry average by 2.9x" },
      { label: "Form Completion Rate", metric: "18.4%", context: "Native 1-click in-feed form completion" },
      { label: "CPL Reduction", metric: "-46%", context: "Cost per verified decision-maker lead dropped to $118" }
    ],
    businessOutcomes: [
      { label: "Sales Acceptance Rate", metric: "82%", context: "Sales-accepted discovery meetings (up from 14%)" },
      { label: "Pipeline Generated", metric: "$1.4M", context: "Qualified sales-accepted pipeline within 90 days" },
      { label: "Sales Cycle Velocity", metric: "34%", context: "Faster progression from discovery to contract proposal" }
    ],
    whatChanged: "Sales and marketing achieved complete alignment. Inbound demo requests came exclusively from VP of Engineering and CISO titles with active enterprise projects.",
    keyLearning: "In enterprise software, educating the technical evaluator with ungated architecture proofs builds far more trust than forcing early gated demo forms.",
    relatedService: "/services/account-based-marketing"
  },
  {
    slug: "apex-industrial-export",
    clientName: "Apex Heavy Precision",
    clientCode: "AHP-2024",
    industry: "Industrial Manufacturing & Export",
    market: "Rajasthan HQ to US, Germany & UK",
    timeline: "120-Day Engagement",
    coreChallenge: "Apex relied exclusively on volatile international trade fairs and local brokerages that took 18% commissions, leaving them vulnerable to supply chain broker margin compression.",
    businessContext: "A precision CNC and metallurgical engineering exporter based in Jaipur, Rajasthan, seeking direct contracts with European and North American industrial procurement directors.",
    hypothesis: "Showcasing factory floor automated QA tolerances and metallurgical certifications via LinkedIn Document Ads directly to VP of Supply Chain titles will bypass brokers and generate direct RFQ opportunities.",
    diagnosis: "Zero digital presence—their website was an unindexed brochure. International buyers had no way of verifying their world-class factory credentials digitally.",
    strategy: "Engineered an industrial export direct-demand system targeting 300 OEM accounts across Germany, UK, and USA with technical capability dossiers and factory video teardowns.",
    execution: [
      "Built verified account list of 300 manufacturing OEMs across automotive and aerospace.",
      "Produced technical capability carousel showcasing ISO 9001/AS9100 tolerances and robotic CMM inspection.",
      "1-click Technical Spec RFQ submission form integrated with sales engineering WhatsApp & email.",
      "Founder thought leadership positioning Jaipur as an advanced precision manufacturing corridor."
    ],
    campaignHook: "'Sub-Micron CNC Tolerances at 32% Lower Landed Cost: The Direct Indian Sourcing Benchmark.'",
    creativeFormat: "Technical Specification Document Carousel + Facility QA Teardown",
    spendProfile: "$4,500/mo targeted across US, German, and UK industrial clusters",
    campaignMetrics: [
      { label: "Target Account Reach", metric: "76%", context: "Reachable decision-makers in 300 target OEM accounts" },
      { label: "Document Save Rate", metric: "4.8x", context: "Technical spec sheets saved by procurement officers" },
      { label: "Cost Per RFQ Lead", metric: "$165", context: "High-value enterprise specification submissions" }
    ],
    businessOutcomes: [
      { label: "Direct RFQ Submissions", metric: "24 RFQs", context: "Direct technical specification inquiries without middlemen" },
      { label: "New Contracts Won", metric: "3 Deals", context: "Closed annual manufacturing contracts worth $840k in first 4 months" },
      { label: "Margin Improvement", metric: "+22%", context: "Higher profit margin by eliminating export broker commission" }
    ],
    whatChanged: "Apex transitioned from an order-taker dependent on intermediaries to a recognized international tier-1 exporter with direct client procurement relationships.",
    keyLearning: "Global procurement officers care about verifiable tolerances and QA reliability far more than generic agency branding.",
    relatedService: "/services/b2b-lead-pipeline-generation"
  },
  {
    slug: "fintech-consulting-demand-engine",
    clientName: "Novus Advisory Partners",
    clientCode: "NAP-2024",
    industry: "Financial & Regulatory Consulting",
    market: "India & Southeast Asia",
    timeline: "60-Day Sprint",
    coreChallenge: "Novus had extraordinary regulatory consulting expertise across banking and fintech, but relied on partner personal referrals that dried up during seasonal market shifts.",
    businessContext: "A boutique financial compliance and cross-border fintech advisory practice serving banking executives and Series-C fintech leadership in Mumbai, Bengaluru, and Singapore.",
    hypothesis: "Publishing timely contrarian regulatory teardowns via Partner LinkedIn Thought Leader Ads will establish immediate category authority and generate direct C-level advisory inquiries.",
    diagnosis: "The firm's company LinkedIn page posted sterile corporate announcements with zero partner personality or original intellectual property.",
    strategy: "Activated the Managing Partner's personal LinkedIn profile as the central distribution hub, supported by paid Thought Leader amplification targeting CFOs and Chief Compliance Officers.",
    execution: [
      "Bi-weekly strategic extraction interviews with Managing Partners to draft high-signal regulatory teardowns.",
      "Published detailed commentary on new digital lending and cross-border remittance compliance guidelines.",
      "Sponsored partner posts to 8,500 senior fintech and banking executives across India and Singapore.",
      "Created a direct Topmate strategy consultation calendar funnel for qualified corporate buyers."
    ],
    campaignHook: "'The 5 Hidden Regulatory Exposure Points in Cross-Border Fintech Payment Rails (2025 Audit).'",
    creativeFormat: "Executive Opinion Post + 6-Slide Regulatory Flowchart Carousel",
    spendProfile: "$3,000/mo LinkedIn Thought Leader Ads",
    campaignMetrics: [
      { label: "Executive Engagement", metric: "3.2x", context: "Higher organic engagement compared to corporate page" },
      { label: "Click-Through Rate", metric: "3.42%", context: "On Thought Leader Ads targeting CFO & CCO titles" },
      { label: "Consultation Bookings", metric: "38 Calls", context: "Verified C-level discovery sessions scheduled" }
    ],
    businessOutcomes: [
      { label: "Retainer Proposals", metric: "14 Sent", context: "High-ticket regulatory advisory retainers submitted" },
      { label: "New Retainers Signed", metric: "5 Clients", context: "Generated ₹48L in new annual recurring advisory revenue" },
      { label: "CAC Payback", metric: "<45 Days", context: "Rapid commercial payback on paid campaign investment" }
    ],
    whatChanged: "The Managing Partner became a recognized regulatory voice in the Indian fintech ecosystem, turning spontaneous commentary into a repeatable client acquisition engine.",
    keyLearning: "In advisory services, positioning the human partner's intellectual authority generates 10x the pipeline of a faceless corporate entity.",
    relatedService: "/services/founder-led-executive-b2b-marketing"
  }
];
