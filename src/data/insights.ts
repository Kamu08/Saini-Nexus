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
  { name: "All", slug: "all" },
  { name: "Saini Nexus Field Notes", slug: "field-notes" },
  { name: "B2B Marketing Strategy", slug: "b2b-marketing-strategy" },
  { name: "LinkedIn B2B Marketing", slug: "linkedin-b2b-marketing" },
  { name: "LinkedIn Ads", slug: "linkedin-ads" },
  { name: "B2B Demand Generation", slug: "b2b-demand-generation" },
  { name: "Account-Based Marketing", slug: "account-based-marketing" },
  { name: "Founder-Led B2B Marketing", slug: "founder-led-marketing" },
  { name: "AI & B2B Growth", slug: "ai-b2b-growth" }
];

export const INSIGHTS: InsightItem[] = [
  {
    slug: "what-we-learned-optimising-audience-before-creative",
    category: "Saini Nexus Field Notes",
    categorySlug: "field-notes",
    isFieldNote: true,
    title: "Field Note 01: What We Learned from Optimising Audience Before Creative",
    subtitle: "Why 80% of creative testing in B2B is wasted if the account list and exclusion protocol are fundamentally uncalibrated.",
    summary: "A first-principles retrospective on B2B LinkedIn campaign data: how tightening ICP exclusions by 40% doubled conversion rates without touching ad copy.",
    readTime: "6 min read",
    publishedAt: "September 2026",
    author: {
      name: "Dev Raj Saini",
      role: "Founder, Saini Nexus & Saini Prime",
      profileUrl: "/about/dev-raj-saini"
    },
    keyTakeaways: [
      "Creative cannot fix bad targeting: great copy served to the wrong job title produces zero pipeline.",
      "Strict negative exclusions (students, job seekers, junior coders) instantly reduce wasted ad spend by 30-45%.",
      "Account-level matching (ABM) outperforms broad algorithmic audience expansion on LinkedIn."
    ],
    sections: [
      {
        heading: "The Assumption: Creative Is the Limiting Factor",
        content: "When a B2B LinkedIn campaign produces high Cost-Per-Lead (CPL) or low sales acceptance, the standard agency reaction is to rewrite ad hooks, change background colors, or test video formats. We decided to run a controlled experiment: keep ad creative 100% constant and rebuild the audience architecture from zero."
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
          "Click-Through Rate (CTR) increased by 2.4x due to relevance.",
          "Sales accepted discovery meetings increased by 5.8x."
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
    category: "Saini Nexus Field Notes",
    categorySlug: "field-notes",
    isFieldNote: true,
    title: "Field Note 02: Why Engagement Doesn't Always Become Demand",
    subtitle: "The critical distinction between social media popularity and commercial pipeline generation in enterprise B2B.",
    summary: "Analyzing why viral LinkedIn posts frequently fail to generate sales calls, and how to structure content for commercial intent over algorithmic applause.",
    readTime: "7 min read",
    publishedAt: "September 2026",
    author: {
      name: "Dev Raj Saini",
      role: "Founder, Saini Nexus & Saini Prime",
      profileUrl: "/about/dev-raj-saini"
    },
    keyTakeaways: [
      "Broad motivational content generates likes from people who will never buy enterprise software.",
      "Commercial demand requires naming specific operational bottlenecks that CFOs and VPs care about.",
      "High-signal technical content may get fewer total reactions, but generates 10x higher inbound revenue."
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
    slug: "linkedin-ads-b2b-advertising-guide",
    category: "LinkedIn Ads",
    categorySlug: "linkedin-ads",
    title: "The First-Principles Guide to B2B LinkedIn Advertising & Thought Leader Ads",
    subtitle: "A practitioner's blueprint for full-funnel LinkedIn ad architecture, audience tiering, Document Ads, and revenue attribution.",
    summary: "How modern B2B growth leaders use LinkedIn Ads to penetrate high-value buying committees, deploy Thought Leader Ads, and generate sales-accepted pipeline.",
    readTime: "9 min read",
    publishedAt: "August 2026",
    author: {
      name: "Dev Raj Saini",
      role: "Founder, Saini Nexus & Saini Prime",
      profileUrl: "/about/dev-raj-saini"
    },
    keyTakeaways: [
      "Thought Leader Ads deliver 2-3x higher CTR and lower CPC by leveraging authentic executive voices.",
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
    category: "B2B Demand Generation",
    categorySlug: "b2b-demand-generation",
    title: "Demand Generation vs. Lead Generation: The Strategic Distinction",
    subtitle: "Why focusing exclusively on collecting contact info damages pipeline velocity, and how to build sustained market affinity.",
    summary: "An in-depth analysis of why leading B2B organizations prioritize category demand creation over shallow lead gating.",
    readTime: "8 min read",
    publishedAt: "August 2026",
    author: {
      name: "Dev Raj Saini",
      role: "Founder, Saini Nexus & Saini Prime",
      profileUrl: "/about/dev-raj-saini"
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
  }
];
