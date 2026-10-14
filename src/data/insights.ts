export interface InsightItem {
  slug: string;
  category: string;
  categorySlug: string;
  title: string;
  subtitle: string;
  summary: string;
  readTime: string;
  publishedAt: string;
  isFieldNote?: boolean;
  featured?: boolean;
  author: {
    name: string;
    role: string;
    profileUrl: string;
  };
  keyTakeaways: string[];
  sections: {
    heading: string;
    content: string;
    quote?: string;
    bullets?: string[];
  }[];
  relatedServices: {
    title: string;
    href: string;
  }[];
}

export const INSIGHT_CATEGORIES = [
  { name: "All Publications", slug: "all" },
  { name: "Field Notes", slug: "field-notes" },
  { name: "LinkedIn & Thought Leader Ads", slug: "linkedin-ads" },
  { name: "B2B Demand & Pipeline", slug: "b2b-demand-generation" },
  { name: "Account-Based Marketing", slug: "account-based-marketing" },
  { name: "Founder-Led Marketing", slug: "founder-led-marketing" },
];

export const INSIGHTS: InsightItem[] = [
  {
    slug: "what-we-learned-optimising-audience-before-creative",
    category: "Field Notes",
    categorySlug: "field-notes",
    isFieldNote: true,
    featured: true,
    title: "Field Note 01: What We Learned from Optimising Audience Before Creative",
    subtitle: "Why 80% of creative testing in B2B is wasted if the account list and exclusion protocol are fundamentally uncalibrated.",
    summary: "A first-principles retrospective on B2B LinkedIn campaign data: how tightening ICP exclusions by 40% doubled conversion rates without touching ad copy.",
    readTime: "6 min read",
    publishedAt: "September 2026",
    author: {
      name: "Dev Raj Saini",
      role: "Founder, Saini Nexus",
      profileUrl: "/about"
    },
    keyTakeaways: [
      "Creative cannot fix bad targeting: great copy served to the wrong job title produces zero qualified pipeline.",
      "Strict negative exclusions (students, job seekers, junior developers) instantly reduce wasted ad spend by 30–45%.",
      "Account-level matching (ABM) combined with strict seniority filters outperforms broad algorithmic audience expansion."
    ],
    sections: [
      {
        heading: "The Assumption: Creative Is Always the Limiting Factor",
        content: "When a B2B LinkedIn campaign produces high Cost-Per-Lead (CPL) or low sales acceptance, the standard agency reaction is to rewrite ad hooks, alter background colors, or test video formats. We ran a controlled experiment: keep ad creative 100% constant and rebuild the audience architecture from zero."
      },
      {
        heading: "The Experiment: Rigorous Seniority & Negative Layering",
        content: "We added three layers of negative exclusions on LinkedIn Campaign Manager: excluded job titles containing 'Intern', 'Assistant', 'Student', and 'Junior'; excluded company sizes under 10 employees; and uploaded an enriched Matched Account list of 450 verified enterprise firms.",
        quote: "In high-ticket B2B advertising, who DOES NOT see your ad is just as important as who does."
      },
      {
        heading: "The Data: What Happened Next",
        content: "Total impressions dropped by 52%, but Sales Acceptance Rate (SAR) surged from 14% to 82%. Cost per qualified sales-accepted lead decreased by 46%. Creative testing is only meaningful after you have guaranteed that every single impression reaches a legitimate commercial decision-maker.",
        bullets: [
          "Impression volume decreased by 52% (purging vanity noise).",
          "Click-Through Rate (CTR) increased by 2.4x due to contextual relevance.",
          "Sales accepted discovery meetings increased by 5.8x across a 60-day window."
        ]
      }
    ],
    relatedServices: [
      { title: "Account-Based Marketing (ABM)", href: "/services/account-based-marketing" },
      { title: "LinkedIn Ads & Thought Leader Ads", href: "/services/linkedin-ads-thought-leader-ads" }
    ]
  },
  {
    slug: "why-engagement-doesnt-always-become-demand",
    category: "Field Notes",
    categorySlug: "field-notes",
    isFieldNote: true,
    title: "Field Note 02: Why Engagement Doesn't Always Become Demand",
    subtitle: "The critical distinction between social media popularity and commercial pipeline generation in enterprise B2B.",
    summary: "Analyzing why viral LinkedIn posts frequently fail to generate sales calls, and how to structure content for commercial intent over algorithmic applause.",
    readTime: "7 min read",
    publishedAt: "September 2026",
    author: {
      name: "Dev Raj Saini",
      role: "Founder, Saini Nexus",
      profileUrl: "/about"
    },
    keyTakeaways: [
      "Broad motivational content generates likes from people who will never buy high-ticket enterprise solutions.",
      "Commercial demand requires naming specific operational bottlenecks that CFOs, COOs, and VPs care about.",
      "High-signal technical content may receive fewer total reactions, but generates 10x higher inbound revenue."
    ],
    sections: [
      {
        heading: "The Illusion of LinkedIn Viral Reach",
        content: "A viral LinkedIn post with 50,000 views can yield exactly zero pipeline opportunities if the topic is generic career advice. Enterprise B2B decision-makers rarely comment on public feeds, but they quietly bookmark and share high-signal technical teardowns with their internal evaluation committees."
      },
      {
        heading: "Designing for Commercial Resonance",
        content: "To turn attention into buying interest, content must transition from broad industry platitudes to operational friction points: audit failures, margin erosion, technical debt, and CAC expansion.",
        quote: "You are not selling to an algorithm. You are selling to a cautious boardroom committee managing their career risk."
      },
      {
        heading: "The Saini Nexus Content Spectrum",
        content: "We structure content into three distinct layers: 1) Category Point-of-View (why status quo fails), 2) Tactical Architecture Maps (how to solve it), and 3) Commercial Evidence (case teardowns with verified business outcomes).",
        bullets: [
          "Layer 1: Category Point of View (Frame the commercial cost of inaction)",
          "Layer 2: Technical Architecture (Demonstrate operational competence)",
          "Layer 3: Commercial Evidence (Verifiable results and lessons learned)"
        ]
      }
    ],
    relatedServices: [
      { title: "B2B Demand Generation", href: "/services/b2b-demand-generation" },
      { title: "Founder-Led & Executive B2B Marketing", href: "/services/founder-led-executive-b2b-marketing" }
    ]
  },
  {
    slug: "cac-payback-protocol-partner-pov",
    category: "Field Notes",
    categorySlug: "field-notes",
    isFieldNote: true,
    title: "Field Note 03: The CAC Payback Protocol: Why High-Ticket Retainers Win with Partner POV",
    subtitle: "How advisory and consulting firms replace slow referrals with partner-led Thought Leader distribution.",
    summary: "A teardown of how deploying Managing Partner POVs as sponsored Thought Leader Ads reduced sales cycle length from 120 days to 38 days for professional services.",
    readTime: "8 min read",
    publishedAt: "October 2026",
    author: {
      name: "Dev Raj Saini",
      role: "Founder, Saini Nexus",
      profileUrl: "/about"
    },
    keyTakeaways: [
      "In high-ticket consulting, enterprise buyers choose the individual expert before they evaluate the corporate firm.",
      "Partner-authored carousel breakdowns build intellectual credibility before the first introductory consultation call.",
      "Targeting verified C-level accounts with contrarian regulatory perspectives compresses commercial evaluation timelines."
    ],
    sections: [
      {
        heading: "The Referral Trap in Professional Advisory",
        content: "Advisory, legal, and consulting practices historically depend almost entirely on word-of-mouth. While referral close rates are high, referral volume is completely unpredictable. When economic cycles soften, pipeline freezes."
      },
      {
        heading: "Deploying Partner Thought Leader Ads",
        content: "By sponsoring the personal LinkedIn profiles of Practice Leaders—highlighting nuanced regulatory teardowns rather than sales pitches—we established immediate credibility with CFOs and General Counsels.",
        quote: "Corporate logos do not give advisory advice; senior practitioners do. Put your top minds in front of your target accounts."
      },
      {
        heading: "Measuring Commercial Acceleration",
        content: "Instead of cold outbound messaging, target accounts arrived at initial discovery calls already aligned with the firm's strategic philosophy, eliminating weeks of repetitive qualification meetings.",
        bullets: [
          "Average sales cycle dropped from 120 days to 38 days.",
          "Inbound commercial consultation requests increased by 320%.",
          "Average deal size increased by 44% due to established authority."
        ]
      }
    ],
    relatedServices: [
      { title: "Founder-Led & Executive B2B Marketing", href: "/services/founder-led-executive-b2b-marketing" },
      { title: "B2B Growth Strategy", href: "/services/b2b-growth-strategy" }
    ]
  },
  {
    slug: "linkedin-ads-b2b-advertising-guide",
    category: "LinkedIn & Thought Leader Ads",
    categorySlug: "linkedin-ads",
    title: "The First-Principles Guide to B2B LinkedIn Advertising & Thought Leader Ads",
    subtitle: "A practitioner's blueprint for full-funnel LinkedIn ad architecture, audience tiering, Document Ads, and revenue attribution.",
    summary: "How modern B2B growth leaders use LinkedIn Ads to penetrate high-value buying committees, deploy Thought Leader Ads, and generate sales-accepted pipeline.",
    readTime: "9 min read",
    publishedAt: "August 2026",
    author: {
      name: "Dev Raj Saini",
      role: "Founder, Saini Nexus",
      profileUrl: "/about"
    },
    keyTakeaways: [
      "Thought Leader Ads deliver 2–3x higher CTR and lower CPC by leveraging authentic executive voices.",
      "Native Document Ads allow B2B buyers to consume full slide frameworks in-feed without landing page friction.",
      "Full-funnel segmentation (Ungated Value → Retargeting Proof → Native Lead Gen) outperforms single-touch cold pitches."
    ],
    sections: [
      {
        heading: "The Shift in B2B Buyer Behavior",
        content: "B2B buyers now complete over 70% of their research before speaking with sales. Running standard display banners or sending cold InMail spam generates instant friction. Modern LinkedIn advertising must deliver immediate educational value directly inside the feed."
      },
      {
        heading: "Why Thought Leader Ads Outperform Company Pages",
        content: "LinkedIn's Thought Leader ad format allows companies to sponsor posts directly from their founders and executives. Human voices carry inherent authenticity that corporate brand accounts cannot replicate.",
        quote: "People do not trust logos. They trust practitioners with deep domain knowledge and clear convictions."
      },
      {
        heading: "Native In-Feed Conversion vs. External Landing Pages",
        content: "Driving mobile LinkedIn users to external landing pages with 12 manual form fields causes massive 80%+ drop-off. Utilizing native Lead Gen Forms with auto-filled verified work emails doubles completion rates while preserving lead data integrity.",
        bullets: [
          "Pre-fills verified work email directly from LinkedIn's member profile database.",
          "Custom qualification gates ensure only accounts with budget can submit.",
          "Instant webhook dispatch to CRM in under 30 seconds."
        ]
      }
    ],
    relatedServices: [
      { title: "LinkedIn Ads & Thought Leader Ads", href: "/services/linkedin-ads-thought-leader-ads" },
      { title: "B2B Lead & Pipeline Generation", href: "/services/b2b-lead-pipeline-generation" }
    ]
  },
  {
    slug: "demand-generation-vs-lead-generation",
    category: "B2B Demand & Pipeline",
    categorySlug: "b2b-demand-generation",
    title: "Demand Generation vs. Lead Generation: The Strategic Distinction",
    subtitle: "Why focusing exclusively on collecting contact info damages pipeline velocity, and how to build sustained market affinity.",
    summary: "An in-depth analysis of why leading B2B organizations prioritize category demand creation over shallow lead gating.",
    readTime: "8 min read",
    publishedAt: "August 2026",
    author: {
      name: "Dev Raj Saini",
      role: "Founder, Saini Nexus",
      profileUrl: "/about"
    },
    keyTakeaways: [
      "Lead generation captures existing demand; demand generation creates future demand in the 95% out-of-market pool.",
      "Gating basic content produces fake emails and alienated prospects.",
      "Ungated distribution creates unshakeable brand affinity that wins deals before the RFP is ever written."
    ],
    sections: [
      {
        heading: "The 95-5 Rule of B2B Markets",
        content: "At any given time, only about 5% of B2B buyers are actively in-market for a solution. The remaining 95% are satisfied with their current setup or unaware of impending operational risks. If your marketing only targets the 5% with aggressive 'Book a Demo' ads, you compete in a brutal, high-cost red ocean."
      },
      {
        heading: "The Downside of Friction-Heavy Gating",
        content: "When you gate an educational guide behind 8 form fields, buyers use fake names and throwaway email addresses just to access the PDF. You end up with a database of 'leads' that sales reps waste days trying to contact.",
        quote: "If you want buyers to trust your commercial advice, stop holding basic educational content hostage behind a form."
      },
      {
        heading: "Building a Connected Demand Engine",
        content: "By distributing your best thinking freely across LinkedIn, you build category authority. When accounts eventually enter an active purchasing cycle, your brand is the obvious choice.",
        bullets: [
          "Distribute 90% of your educational frameworks ungated in-feed.",
          "Use retargeting pools to measure account intent and engagement velocity.",
          "Capture high-intent conversion only when buyers request a strategic consultation."
        ]
      }
    ],
    relatedServices: [
      { title: "B2B Demand Generation", href: "/services/b2b-demand-generation" },
      { title: "B2B Growth Strategy", href: "/services/b2b-growth-strategy" }
    ]
  },
  {
    slug: "buying-committee-penetration-enterprise-abm",
    category: "Account-Based Marketing",
    categorySlug: "account-based-marketing",
    title: "Buying Committee Penetration: How to Map Decision-Makers Across 6-Month Sales Cycles",
    subtitle: "Enterprise B2B purchases involve an average of 6 to 10 stakeholders. Here is how to build consensus across the entire table.",
    summary: "A tactical guide to orchestrating multi-stakeholder ABM campaigns that address technical evaluators, financial gatekeepers, and executive sponsors simultaneously.",
    readTime: "9 min read",
    publishedAt: "July 2026",
    author: {
      name: "Dev Raj Saini",
      role: "Founder, Saini Nexus",
      profileUrl: "/about"
    },
    keyTakeaways: [
      "Single-threading an enterprise deal through one champion leads to 70%+ deal stalls when internal committees veto.",
      "Each persona requires different proof: engineers need API specs; CFOs need payback periods; CEOs need risk mitigation.",
      "LinkedIn Matched Audiences can surround target accounts so all committee members see consistent brand proof."
    ],
    sections: [
      {
        heading: "The Multi-Stakeholder Reality",
        content: "Gartner research shows that enterprise deals involve an average of 6 to 10 distinct decision-makers, each armed with 4 to 5 pieces of information gathered independently. If your marketing only touches your primary champion, your deal is vulnerable to internal skepticism."
      },
      {
        heading: "Segmenting Content by Committee Function",
        content: "We map account campaigns into three parallel content tracks: Technical Feasibility (for VP of Engineering), Commercial Justification (for CFO/Finance), and Strategic Vision (for CEO/Board).",
        quote: "Deals do not stall because competitors have better features. They stall because the internal committee cannot agree on the risk."
      },
      {
        heading: "The Account Penetration Scorecard",
        content: "Instead of measuring individual clicks, modern ABM tracks account coverage: what percentage of known buying committee members have engaged with proof assets over the past 30 days.",
        bullets: [
          "Track committee coverage ratio: minimum 60% of target titles reached.",
          "Coordinate ad exposure with direct sales outreach cadence.",
          "Deliver tailored proof matrices prior to enterprise demo presentations."
        ]
      }
    ],
    relatedServices: [
      { title: "Account-Based Marketing (ABM)", href: "/services/account-based-marketing" },
      { title: "B2B Marketing Strategy", href: "/services/b2b-marketing-strategy" }
    ]
  },
  {
    slug: "founder-led-marketing-framework-2026",
    category: "Founder-Led Marketing",
    categorySlug: "founder-led-marketing",
    title: "The 2026 Founder-Led Marketing Framework: Turning Executive Authority into Inbound Pipeline",
    subtitle: "How visionary B2B founders build an unfair competitive advantage by turning their personal perspectives into market gravity.",
    summary: "A step-by-step methodology for busy founders to extract, ghostwrite, and distribute world-class B2B thought leadership in less than 90 minutes per month.",
    readTime: "8 min read",
    publishedAt: "July 2026",
    author: {
      name: "Dev Raj Saini",
      role: "Founder, Saini Nexus",
      profileUrl: "/about"
    },
    keyTakeaways: [
      "Founders possess deeper commercial and technical domain knowledge than any external marketing copywriter.",
      "The 90-minute interview protocol extracts authentic founder insights without requiring hours of manual writing.",
      "Sponsoring high-performing founder posts with Thought Leader Ads delivers verified B2B reach at superior economics."
    ],
    sections: [
      {
        heading: "Why Corporate Brand Accounts Fall Flat",
        content: "Company pages on LinkedIn suffer from anemic algorithmic distribution and zero emotional resonance. Buyers scroll past corporate announcements, but they stop and read candid, battle-tested perspectives shared by company founders."
      },
      {
        heading: "The 90-Minute Executive Interview Cadence",
        content: "Founders do not have time to sit and draft LinkedIn posts. We conduct a structured 90-minute monthly strategic interview, extracting proprietary client stories, market contrarian views, and technical frameworks, which our editorial team crafts into publication-ready assets.",
        quote: "The founder’s voice is the most under-leveraged asset in enterprise B2B. Don't hide it behind a corporate facade."
      },
      {
        heading: "Amplification via Thought Leader Ads",
        content: "Once organic posts demonstrate clear resonance with verified accounts, we deploy targeted paid media to amplify those exact posts directly into the feeds of pre-selected Tier-1 accounts.",
        bullets: [
          "Convert 90 minutes of founder voice into 12 high-signal monthly assets.",
          "Amplify top 20% organic winners with micro-targeted Thought Leader Ads.",
          "Attribute inbound inbound pipeline directly to executive content impressions."
        ]
      }
    ],
    relatedServices: [
      { title: "Founder-Led & Executive B2B Marketing", href: "/services/founder-led-executive-b2b-marketing" },
      { title: "LinkedIn Ads & Thought Leader Ads", href: "/services/linkedin-ads-thought-leader-ads" }
    ]
  },
  {
    slug: "account-based-retargeting-architecture",
    category: "LinkedIn & Thought Leader Ads",
    categorySlug: "linkedin-ads",
    title: "Account-Based Retargeting Architecture: Tiered Proof Without Brand Fatigue",
    subtitle: "Why standard 30-day website retargeting annoys B2B prospects, and how to sequence progressive technical proof instead.",
    summary: "How to engineer multi-stage retargeting funnels on LinkedIn that deliver progressive value, customer teardowns, and technical validations based on account maturity.",
    readTime: "7 min read",
    publishedAt: "June 2026",
    author: {
      name: "Dev Raj Saini",
      role: "Founder, Saini Nexus",
      profileUrl: "/about"
    },
    keyTakeaways: [
      "Showing the exact same 'Book a Demo' banner 50 times creates brand fatigue and banner blindness.",
      "Progressive retargeting sequences proof: Problem Framing → Architecture Blueprint → Peer Case Teardown.",
      "Frequency capping and audience exclusion keep CAC low while preserving high buyer sentiment."
    ],
    sections: [
      {
        heading: "The Fatal Flaw of Generic B2B Retargeting",
        content: "Most B2B retargeting campaigns consist of a single pixel audience bombarded with a single generic ad for 90 days. Prospective buyers tune it out or develop negative associations with the brand."
      },
      {
        heading: "Progressive Proof Sequencing",
        content: "We segment retargeting into three distinct temporal windows: Days 1–14 receive deep technical teardowns (answering 'How does this actually work?'); Days 15–30 receive verified peer case studies ('Who else in our sector trusts this?'); Days 31–45 receive low-friction consultation invites.",
        quote: "Retargeting shouldn't be a persistent nag. It should be a guided curriculum that answers buyer objections before they voice them."
      },
      {
        heading: "Managing Frequency and Buyer Sentiment",
        content: "By applying strict frequency controls (3–4 impressions per member per week) and rotating creative formats (carousels, single-image teardowns, video snippets), enterprise accounts remain receptive throughout protracted consideration cycles.",
        bullets: [
          "Tier 1 (0–14 Days): Technical architecture blueprints & whitepapers.",
          "Tier 2 (15–30 Days): Peer case studies with verified ROI figures.",
          "Tier 3 (31–45 Days): Direct access to partner consultation audits."
        ]
      }
    ],
    relatedServices: [
      { title: "LinkedIn Ads & Thought Leader Ads", href: "/services/linkedin-ads-thought-leader-ads" },
      { title: "B2B Lead & Pipeline Generation", href: "/services/b2b-lead-pipeline-generation" }
    ]
  }
];
