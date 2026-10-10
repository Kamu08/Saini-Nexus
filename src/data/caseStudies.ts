export interface CaseStudyItem {
  slug: string;
  clientName: string;
  clientCode: string;
  industry: string;
  market: string;
  timeline: string;
  frameworkType: string;
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
    clientName: "Enterprise B2B SaaS Model",
    clientCode: "FRAMEWORK 01",
    industry: "Enterprise Software & Cloud Platforms",
    market: "India & North America B2B Markets",
    timeline: "Standard 90-Day Implementation",
    frameworkType: "Illustrative Campaign Architecture",
    coreChallenge: "Software companies frequently generate leads via broad LinkedIn forms where 80%+ are junior individual contributors with zero purchasing authority, leaving sales teams frustrated with unqualified demo requests.",
    businessContext: "Designed for mid-market and enterprise B2B software companies with deal sizes ranging from ₹5L to ₹35L+ ACV facing long evaluation cycles and multi-stakeholder buying committees.",
    hypothesis: "Shifting from broad job-title targeting to Matched Account ABM with strict seniority exclusions and Founder Thought Leader Ads will generate higher-intent sales conversations without wasting budget on junior clicks.",
    diagnosis: "Most B2B SaaS ad accounts target broad 'IT' or 'Engineering' titles without exclusion filters, using generic 'Book a Free Demo' banners that capture students and job-seekers rather than economic buyers.",
    strategy: "Construct a 3-tier ABM architecture targeting verified enterprise accounts. Use ungated Document Ads for technical credibility and executive Thought Leader Ads for leadership trust.",
    execution: [
      "Curate a tier-1 matched account list (150–400 accounts fitting the Ideal Customer Profile).",
      "Deploy Founder/Executive POV Thought Leader ads to establish strategic market authority.",
      "Distribute ungated technical architecture teardowns (PDF carousels) directly to technical evaluators.",
      "Implement native Lead Gen forms with qualifying fields (budget authority and implementation timeline)."
    ],
    campaignHook: "'Why Enterprise Architecture Migrations Stall at Month 3—And the 4-Point Pre-Flight Evaluation.'",
    creativeFormat: "8-Slide Native LinkedIn Document Carousel + Executive Thought Leader Ad",
    spendProfile: "Recommended pilot: ₹35,000 – ₹75,000 / month media spend",
    campaignMetrics: [
      { label: "Targeting Focus", metric: "Account ABM", context: "Focused on verified enterprise accounts fitting exact ICP" },
      { label: "Content Proof", metric: "Ungated PDF", context: "Technical evaluation teardown without early form friction" },
      { label: "Distribution Hub", metric: "Thought Leader Ads", context: "Founder profile distribution for authentic executive reach" }
    ],
    businessOutcomes: [
      { label: "Target Outcome", metric: "Qualified Pipeline", context: "Focus on sales-accepted opportunities rather than vanity clicks" },
      { label: "Seniority Filter", metric: "Director / C-Suite", context: "Strict negative exclusions eliminate junior non-buyers" },
      { label: "Commercial Impact", metric: "Shorter Sales Cycles", context: "Pre-educated buyers enter discovery calls with context" }
    ],
    whatChanged: "Sales and marketing achieve operational alignment. Inbound discovery inquiries come from verified decision-makers who have already reviewed the company's technical proof points.",
    keyLearning: "In enterprise software, educating the technical evaluator with ungated architecture proofs builds far more trust than forcing early gated demo forms.",
    relatedService: "/services/account-based-marketing"
  },
  {
    slug: "apex-industrial-export",
    clientName: "Industrial Manufacturing Direct Sourcing",
    clientCode: "FRAMEWORK 02",
    industry: "Precision Engineering, CNC & Export",
    market: "India HQ to North America & European Markets",
    timeline: "Standard 120-Day Engagement",
    frameworkType: "Illustrative Campaign Architecture",
    coreChallenge: "Precision manufacturers and industrial exporters frequently rely on domestic trade brokers and agents taking 15–20% margins, leaving them vulnerable to intermediary margin compression.",
    businessContext: "Designed for certified manufacturers, precision engineering firms, and industrial exporters seeking direct supply relationships with global procurement and supply chain directors.",
    hypothesis: "Delivering automated QA tolerances, facility video teardowns, and international certifications directly to VP of Supply Chain titles on LinkedIn bypasses intermediaries and generates direct RFQ opportunities.",
    diagnosis: "Industrial manufacturers often maintain basic brochure websites with zero active digital distribution, making it impossible for international corporate buyers to discover or verify their factory capabilities.",
    strategy: "Engineer a direct B2B export demand engine targeting OEM procurement directors across target export clusters with technical capability dossiers and facility walkthroughs.",
    execution: [
      "Build verified target account list of 250–500 manufacturing OEMs across automotive, aerospace, or industrial equipment.",
      "Produce technical capability carousels showcasing ISO, AS9100, and robotic CMM inspection tolerances.",
      "Deploy 1-click technical specification RFQ intake connected directly to sales engineering.",
      "Publish executive commentary positioning India's advanced precision manufacturing capabilities."
    ],
    campaignHook: "'Precision CNC Tolerances at Direct Manufacturing Value: Sourcing Architecture for Global OEMs.'",
    creativeFormat: "Technical Specification Document Carousel + Facility QA Teardown",
    spendProfile: "Recommended pilot: ₹40,000 – ₹85,000 / month media spend",
    campaignMetrics: [
      { label: "Account Mapping", metric: "Target OEMs", context: "Procurement and supply chain leadership in target markets" },
      { label: "Technical Asset", metric: "QA Dossier", context: "Detailed dimensional tolerance and metallurgical specs" },
      { label: "Channel Focus", metric: "Direct RFQ", context: "Technical spec inquiry routed directly to engineering" }
    ],
    businessOutcomes: [
      { label: "Target Outcome", metric: "Direct Contracts", context: "Establishing unmediated supplier relationships with OEMs" },
      { label: "Margin Retention", metric: "Zero Broker Fees", context: "Eliminates third-party commission deductions" },
      { label: "Pipeline Quality", metric: "Verified Specs", context: "Inquiries arrive with detailed drawing requirements" }
    ],
    whatChanged: "The manufacturing organization transitions from an order-taker dependent on intermediaries to a recognized international tier-1 exporter with direct client procurement relationships.",
    keyLearning: "Global procurement officers care about verifiable tolerances and QA reliability far more than generic agency branding.",
    relatedService: "/services/b2b-lead-pipeline-generation"
  },
  {
    slug: "fintech-consulting-demand-engine",
    clientName: "Financial & Regulatory Advisory Model",
    clientCode: "FRAMEWORK 03",
    industry: "Management Consulting & FinTech Advisory",
    market: "India, Singapore & Regional Financial Corridors",
    timeline: "Standard 60-Day Sprint",
    frameworkType: "Illustrative Campaign Architecture",
    coreChallenge: "Advisory and consulting firms often rely solely on word-of-mouth and partner networks, resulting in feast-or-famine pipeline cycles when market conditions change.",
    businessContext: "Designed for boutique consulting practices, regulatory specialists, and corporate advisory firms serving financial institutions, fintechs, and enterprise leadership.",
    hypothesis: "Publishing timely, contrarian regulatory teardowns via Managing Partner Thought Leader Ads establishes category authority and generates direct C-level advisory inquiries.",
    diagnosis: "Consultancy corporate LinkedIn pages often share generic press releases or dry corporate updates with zero human voice or actionable intellectual property.",
    strategy: "Activate the Managing Partner's personal profile as the primary intellectual distribution hub, supported by paid Thought Leader amplification to reach CFOs and Chief Compliance Officers.",
    execution: [
      "Extract proprietary partner viewpoints on emerging regulatory and compliance frameworks.",
      "Publish clear visual flowcharts breaking down complex corporate compliance requirements.",
      "Sponsor partner perspectives directly to pre-selected financial institution executives.",
      "Provide a frictionless calendar booking workflow for qualified corporate advisory briefings."
    ],
    campaignHook: "'The Hidden Compliance Exposure Points in Emerging Payment Rails: A Framework for Financial Leaders.'",
    creativeFormat: "Executive Opinion Breakdown + 6-Slide Regulatory Flowchart Carousel",
    spendProfile: "Recommended pilot: ₹30,000 – ₹60,000 / month media spend",
    campaignMetrics: [
      { label: "Distribution Model", metric: "Thought Leader Ads", context: "Partner profile amplification for authentic authority" },
      { label: "Audience Scope", metric: "CFO & CCO", context: "Targeted to finance, risk, and compliance leadership" },
      { label: "Conversion Action", metric: "Advisory Briefing", context: "Direct calendar consultation for qualified buyers" }
    ],
    businessOutcomes: [
      { label: "Target Outcome", metric: "Retainer Pipeline", context: "Predictable advisory conversations beyond personal networks" },
      { label: "Positioning", metric: "Category Authority", context: "Recognized as specialized voice in target regulatory domain" },
      { label: "Deal Quality", metric: "Executive Direct", context: "Inquiries originate directly from C-level decision-makers" }
    ],
    whatChanged: "The managing partner becomes a recognized regulatory authority in their sector, transforming periodic commentary into a predictable client inquiry engine.",
    keyLearning: "In advisory services, positioning the human partner's intellectual authority generates significantly higher engagement than a faceless corporate page.",
    relatedService: "/services/founder-led-executive-b2b-marketing"
  },
  {
    slug: "vanguard-enterprise-it-services",
    clientName: "Enterprise IT & Cloud Security Model",
    clientCode: "FRAMEWORK 04",
    industry: "Enterprise IT & Managed Cloud Services",
    market: "India & Global Technology Centers",
    timeline: "Standard 75-Day Sprint",
    frameworkType: "Illustrative Campaign Architecture",
    coreChallenge: "IT service firms frequently depend on aggressive cold outbound email with poor response rates, creating fatigue and diminishing reputation among enterprise technology leaders.",
    businessContext: "Designed for cloud migration providers, managed security service providers (MSSPs), and IT consulting firms targeting mid-market and enterprise technology departments.",
    hypothesis: "Educating technology leaders with an ungated 'Cloud Security Risk Matrix' Document Ad establishes technical credibility and generates inbound discovery sessions.",
    diagnosis: "Marketing often treats CISOs and CTOs with generic 'Get Free 15-Minute Audit' banners that busy senior technology executives instinctively disregard.",
    strategy: "Construct an account-based thought leadership program targeting enterprise IT departments with high-signal infrastructure compliance and risk teardowns.",
    execution: [
      "Map target enterprise IT departments across key regulated sectors (BFSI, healthcare, retail).",
      "Sponsor technical risk matrices authored by senior solutions architects.",
      "Deploy native Lead Gen forms with qualification criteria (cloud platform, corporate domain).",
      "Establish a rapid technical consultation response protocol."
    ],
    campaignHook: "'The 3 Critical Security Gaps in Hybrid Cloud Migrations: Architecture Review for IT Leaders.'",
    creativeFormat: "Technical Architecture Carousel + Executive POV Video",
    spendProfile: "Recommended pilot: ₹35,000 – ₹70,000 / month media spend",
    campaignMetrics: [
      { label: "Audience Focus", metric: "CISO & CTO", context: "Senior IT, security, and cloud infrastructure decision-makers" },
      { label: "Content Type", metric: "Technical Blueprint", context: "Ungated risk assessment matrix for technical evaluation" },
      { label: "Follow-up Model", metric: "Engineering Call", context: "Inquiries handled directly by technical solutions leads" }
    ],
    businessOutcomes: [
      { label: "Target Outcome", metric: "Inbound Demos", context: "Replacing low-yield cold email with educated inbound inquiries" },
      { label: "Account Quality", metric: "Regulated Enterprise", context: "Focus on accounts with active compliance deadlines" },
      { label: "Brand Equity", metric: "Technical Trust", context: "Positioned as expert advisors rather than generic vendors" }
    ],
    whatChanged: "Sales teams shift from cold prospecting to following up with accounts that have already engaged with the firm's technical security dossiers.",
    keyLearning: "Enterprise CISOs do not respond to generic sales pitches—they respond to technical threat architectures that address their active compliance challenges.",
    relatedService: "/services/account-based-marketing"
  },
  {
    slug: "zenith-healthcare-diagnostics",
    clientName: "Healthcare & Diagnostic Equipment Model",
    clientCode: "FRAMEWORK 05",
    industry: "Medical Devices & Diagnostic Equipment",
    market: "Pan-India Healthcare Networks",
    timeline: "Standard 90-Day Engagement",
    frameworkType: "Illustrative Campaign Architecture",
    coreChallenge: "Hospital procurement directors rarely respond to cold vendor calls, relying instead on traditional distributors who add substantial markups.",
    businessContext: "Designed for medical diagnostics manufacturers, equipment suppliers, and healthcare technology providers looking to establish direct hospital network relationships.",
    hypothesis: "Delivering clinical calibration dossiers and equipment uptime commitments directly to hospital managing directors builds direct relationships and bypasses distributor markups.",
    diagnosis: "Manufacturers often lack distinct digital positioning, causing hospital administrators to view them as regional distributors rather than direct ISO-certified manufacturers.",
    strategy: "Launch an institutional equipment demand program targeting private hospitals and diagnostic chains with equipment ROI calculators and certification portfolios.",
    execution: [
      "Build curated account list of private hospitals and multi-speciality clinical chains.",
      "Publish calibration dossiers comparing direct manufacturer warranty against 3rd-party brokers.",
      "Deploy direct technical specification inquiry workflows connected to sales engineering.",
      "Publish leadership commentary highlighting indigenous precision manufacturing standards."
    ],
    campaignHook: "'Diagnostic Equipment Calibration & Uptime Architecture: Direct Procurement for Hospital Networks.'",
    creativeFormat: "Clinical Specification Carousel + Equipment QA Dossier",
    spendProfile: "Recommended pilot: ₹35,000 – ₹80,000 / month media spend",
    campaignMetrics: [
      { label: "Target Accounts", metric: "Hospital Networks", context: "Private hospital leadership, procurement heads, and chief radiologists" },
      { label: "Asset Format", metric: "Calibration Dossier", context: "Verified technical specs, service SLAs, and uptime benchmarks" },
      { label: "Channel Flow", metric: "Direct Sourcing", context: "Direct manufacturer inquiry channel without brokerage markup" }
    ],
    businessOutcomes: [
      { label: "Target Outcome", metric: "Direct Sourcing Deals", context: "Multi-facility hospital equipment contracts" },
      { label: "Cost Efficiency", metric: "Reduced Intermediation", context: "Direct relationships improve margin for manufacturer and hospital" },
      { label: "Sales Relevance", metric: "Clinical Proof", context: "Conversations start with calibration data rather than pricing haggles" }
    ],
    whatChanged: "The medical equipment manufacturer establishes direct relationships with hospital networks, shifting from distributor dependence to preferred direct-sourcing partner.",
    keyLearning: "Hospital buyers prioritize calibration uptime and manufacturer service guarantees far more than aggressive promotional discounts.",
    relatedService: "/services/b2b-lead-pipeline-generation"
  }
];
