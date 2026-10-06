import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowUpRight, 
  ArrowRight, 
  MapPin, 
  ShieldCheck, 
  Sparkles,
  Briefcase,
  BookOpen,
  Target,
  Award,
  Zap,
  TrendingUp,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronRight
} from "lucide-react";
import { ModernHero } from "@/components/ModernHero";
import { InteractiveServicesHub } from "@/components/InteractiveServicesHub";
import { InteractiveSolutionsGrid } from "@/components/InteractiveSolutionsGrid";
import { NexusGrowthMap } from "@/components/NexusGrowthMap";
import { SectorCarousel } from "@/components/SectorCarousel";
import { ContactForm } from "@/components/ContactForm";
import { INSIGHTS } from "@/data/insights";
import { CASE_STUDIES } from "@/data/caseStudies";

export default function HomePage() {
  const featuredInsights = INSIGHTS.slice(0, 4);
  const featuredCaseStudies = CASE_STUDIES.slice(0, 3);

  const TICKER_ITEMS = [
    "LINKEDIN MARKETING LABS CERTIFIED",
    "B2B DEMAND ARCHITECTURE",
    "ENTERPRISE ABM & MATCHED ACCOUNTS",
    "THOUGHT LEADER AD SPECIALISTS",
    "PREDICTABLE PIPELINE ENGINE",
    "JAIPUR, INDIA & GLOBAL B2B MARKETS",
    "ZERO VANITY AD SPEND PROTOCOL",
    "82% SALES ACCEPTANCE RATE BENCHMARK"
  ];

  return (
    <div className="space-y-20 sm:space-y-32 pb-24 overflow-x-clip bg-mesh-glow">
      
      {/* ========================================================= */}
      {/* 00. HERO SECTION                                          */}
      {/* ========================================================= */}
      <ModernHero />

      {/* ========================================================= */}
      {/* DYNAMIC BREAK 01: INFINITE RUNNING TICKER RIBBON          */}
      {/* Breaks the monotony right after Hero with high energy     */}
      {/* ========================================================= */}
      <div className="w-full bg-[#60A5FA] border-y-3 border-black py-3.5 overflow-hidden shadow-[0_4px_0px_#000000] rotate-[-0.5deg] scale-[1.01]">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 shrink-0">
              <span className="font-mono text-xs sm:text-sm font-extrabold uppercase tracking-widest text-black flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-black inline-block" />
                {item}
              </span>
              <span className="text-black font-mono font-bold text-base">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 01. TRUST & VERIFIED CREDENTIALS: AUTHENTIC STAMP GALLERY */}
      {/* Replaces the boring "box inside a box" with stamp badges */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b-2 border-black/15">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold flex items-center gap-1.5 mb-2">
                <Award className="w-4 h-4" />
                Verified Competence Protocol
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-black tracking-tight">
                Built on Strategy, Proof &amp; Verified Rigor
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-zinc-600 max-w-md font-medium">
              Certified practitioner credentials · Jaipur, Rajasthan · Serving India, US &amp; Global B2B Brands
            </p>
          </div>

          {/* Stamp-Style Credential Cards with Micro-Tilts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-2">
            {[
              { type: "Official Certification", title: "LinkedIn Marketing Strategy", issuer: "LinkedIn Marketing Labs", code: "CERT-LMS-2024", tilt: "hover:-rotate-1 sm:-rotate-1", bg: "bg-[#EFF6FF]", border: "border-black" },
              { type: "Official Certification", title: "Content & Creative Design", issuer: "LinkedIn Marketing Labs", code: "CERT-CCD-2024", tilt: "hover:rotate-1 sm:rotate-1", bg: "bg-[#FEF9E7]", border: "border-black" },
              { type: "Official Certification", title: "Marketing Measurement", issuer: "LinkedIn Marketing Labs", code: "CERT-MM-2024", tilt: "hover:-rotate-1 sm:-rotate-1", bg: "bg-[#F0FDF4]", border: "border-black" },
              { type: "Flagship Practice", title: "LinkedIn Advertising Architecture", issuer: "Thought Leader & Document Ads", code: "DIRECT-PRACTICE", tilt: "hover:rotate-1 sm:rotate-1", bg: "bg-[#FAF5FF]", border: "border-black" },
            ].map((cert, i) => (
              <div 
                key={i} 
                className={`${cert.bg} ${cert.tilt} rounded-2xl border-2 border-black p-5 shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:scale-[1.02] transition-all duration-200 relative overflow-hidden group`}
              >
                {/* Vintage stamp serration indicator */}
                <div className="flex items-center justify-between border-b-2 border-dashed border-black/20 pb-3 mb-3">
                  <span className="text-[9px] font-mono font-extrabold uppercase tracking-widest text-[#2563EB] bg-white px-2 py-0.5 rounded border border-black/30">
                    {cert.code}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider block">
                    {cert.type}
                  </span>
                  <h3 className="text-base font-serif font-bold text-black leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-zinc-600 font-mono pt-1">
                    {cert.issuer}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-black/10 flex items-center justify-between text-[10px] font-mono text-zinc-500 font-semibold">
                  <span>VERIFIED STATUS</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    ACTIVE
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 02. WHAT WE DO: THE 8 SERVICES                            */}
      {/* Light structured canvas                                   */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveServicesHub />
      </div>

      {/* ========================================================= */}
      {/* 03. THE NEXUS GROWTH FRAMEWORK: THE DARK MONOLITH SECTION */}
      {/* Distinct High-Contrast Canvas with Massive Rounded Edges  */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <NexusGrowthMap />
      </div>

      {/* ========================================================= */}
      {/* 04. SOLUTIONS: ASYMMETRIC PROBLEM-FIRST DOSSIERS          */}
      {/* 2 wide featured cards + 3 compact dossier cards           */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveSolutionsGrid />
      </div>

      {/* ========================================================= */}
      {/* 05. FEATURED INDUSTRIES: MINIMALIST HIGH-CONTRAST SLIDER  */}
      {/* Swipeable Sector Blueprints & Direct Commercial Audits   */}
      {/* ========================================================= */}
      <SectorCarousel />

      {/* ========================================================= */}
      {/* 06. CASE STUDIES: OVERLAPPING & STAGGERED EDITORIAL CARDS */}
      {/* Motion, Overlapping Stack & Asymmetrical Spotlight        */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider mb-3 font-bold shadow-[2px_2px_0px_#000000]">
              <Target className="w-3.5 h-3.5" />
              Evidence &amp; Teardowns
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black tracking-tight">
              Real Work. Real Campaigns. Real Proof.
            </h2>
            <p className="text-zinc-700 text-sm sm:text-base mt-2 max-w-xl font-medium leading-relaxed">
              We separate campaign metrics from closed ARR outcomes to deliver transparent proof.
            </p>
          </div>
          <Link href="/case-studies" className="neo-btn-white w-fit shrink-0">
            <span>View All Case Studies</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>

        {/* Dynamic Asymmetric / Overlapping Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Flagship Hero Teardown (Takes 7 columns on desktop) */}
          {featuredCaseStudies[0] && (
            <Link
              href={`/case-studies/${featuredCaseStudies[0].slug}`}
              className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 flex flex-col justify-between border-3 border-black shadow-[6px_6px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] hover:-translate-y-1 transition-all group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#60A5FA] text-black font-bold uppercase text-[10px] font-mono border-2 border-black shadow-[1.5px_1.5px_0px_#000000]">
                      FLAGSHIP TEARDOWN
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#EFF6FF] border border-black/30 font-bold uppercase text-[10px] font-mono text-zinc-700">
                      {featuredCaseStudies[0].industry}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 font-semibold bg-zinc-100 px-2.5 py-1 rounded-full">
                    {featuredCaseStudies[0].timeline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors tracking-tight leading-snug pt-1">
                  {featuredCaseStudies[0].clientName}
                </h3>

                <p className="text-sm text-zinc-700 leading-relaxed">
                  {featuredCaseStudies[0].coreChallenge}
                </p>

                {/* Big Live Metrics Strip */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#EFF6FF] rounded-2xl p-4 border-2 border-black shadow-[2px_2px_0px_#000000]">
                    <span className="text-[10px] text-zinc-600 uppercase font-mono font-bold block mb-1">
                      Business Outcome
                    </span>
                    <strong className="text-[#2563EB] font-extrabold text-2xl font-mono block leading-none">
                      {featuredCaseStudies[0].businessOutcomes[0]?.metric}
                    </strong>
                    <span className="text-xs text-zinc-700 block mt-1 font-medium font-mono">
                      {featuredCaseStudies[0].businessOutcomes[0]?.label}
                    </span>
                  </div>
                  <div className="bg-[#FAF7EF] rounded-2xl p-4 border-2 border-black shadow-[2px_2px_0px_#000000]">
                    <span className="text-[10px] text-zinc-600 uppercase font-mono font-bold block mb-1">
                      Efficiency Lift
                    </span>
                    <strong className="text-black font-extrabold text-2xl font-mono block leading-none">
                      {featuredCaseStudies[0].campaignMetrics[0]?.metric}
                    </strong>
                    <span className="text-xs text-zinc-700 block mt-1 font-medium font-mono">
                      {featuredCaseStudies[0].campaignMetrics[0]?.label}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t-2 border-black/10 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-black group-hover:text-[#2563EB] transition-colors flex items-center gap-1.5">
                  <span>Read Complete Campaign Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
                <span className="p-2.5 rounded-full bg-[#60A5FA] border-2 border-black shadow-[2px_2px_0px_#000000] text-black group-hover:translate-x-1 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          )}

          {/* Overlapping Secondary Cards Stack (Takes 5 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
            {featuredCaseStudies.slice(1, 3).map((study, idx) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className={`bg-white rounded-3xl p-6 border-2 border-black shadow-[4px_4px_0px_#000000] hover:shadow-[7px_7px_0px_#000000] transition-all duration-300 group flex flex-col justify-between ${
                  idx === 0 
                    ? "sm:-rotate-1 hover:rotate-0 hover:z-20 sm:translate-y-1" 
                    : "sm:rotate-1 hover:rotate-0 hover:z-20 sm:-translate-y-1"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FAF7EF] border border-black font-bold uppercase text-[10px] font-mono">
                      {study.industry}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 font-semibold bg-zinc-100 px-2 py-0.5 rounded-full">
                      {study.timeline}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors tracking-tight leading-snug">
                    {study.clientName}
                  </h3>

                  <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">
                    {study.coreChallenge}
                  </p>

                  <div className="flex items-center gap-3 pt-2">
                    <div className="bg-[#EFF6FF] px-3 py-1.5 rounded-xl border border-black/20 font-mono text-xs font-bold text-[#2563EB]">
                      {study.businessOutcomes[0]?.metric}
                    </div>
                    <span className="text-[11px] text-zinc-600 font-mono">
                      {study.businessOutcomes[0]?.label}
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t-2 border-black/10 flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-zinc-700">Explore Teardown</span>
                  <span className="p-1.5 rounded-full bg-[#EFF6FF] group-hover:bg-[#60A5FA] border border-black text-black transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 07. FOUNDER AUTHORITY: EXECUTIVE PROFILE DOSSIER          */}
      {/* Two-tone accent frame with official seal styling          */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-3 border-black rounded-[2.5rem] sm:rounded-[3.5rem] p-6 sm:p-10 lg:p-14 text-black shadow-[6px_6px_0px_#000000] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative overflow-hidden">
          
          {/* Subtle dot grid accent */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(#000 1px, transparent 0)", backgroundSize: "24px 24px" }}
          />

          <div className="lg:col-span-7 space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
              <Sparkles className="w-3.5 h-3.5" />
              Executive Profile &amp; Practice Lead
            </div>

            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-black leading-tight tracking-tight">
                Dev Raj Saini
              </h2>
              <p className="text-sm font-mono text-[#2563EB] font-bold mt-1.5 uppercase tracking-wider">
                Founder &amp; B2B Growth Strategist
              </p>
            </div>

            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed font-medium">
              Marketing founder and strategist focused on the intersection of B2B marketing, LinkedIn, thought leadership, personal branding and professional authority. Founder of <strong className="text-black font-bold">Saini Nexus</strong> (B2B Demand &amp; Pipeline Growth) and <strong className="text-black font-bold">Saini Prime</strong> (Executive Authority &amp; Positioning). Based in Jaipur, Rajasthan, serving India &amp; global B2B markets.
            </p>

            <div className="flex flex-wrap gap-2.5 text-xs font-mono text-black font-bold pt-1">
              <span className="inline-flex items-center gap-1.5 bg-[#EFF6FF] px-3.5 py-1.5 rounded-full border-2 border-black shadow-[2px_2px_0px_#000000]">
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0" />
                Jaipur, Rajasthan, India
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#EFF6FF] px-3.5 py-1.5 rounded-full border-2 border-black shadow-[2px_2px_0px_#000000]">
                <ShieldCheck className="w-4 h-4 text-[#2563EB] shrink-0" />
                LinkedIn Marketing Labs Certified
              </span>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link href="/about/dev-raj-saini" className="neo-btn-blue w-full sm:w-auto text-center">
                <span>Meet the Founder</span>
                <ArrowRight className="ml-2 w-4 h-4 shrink-0" />
              </Link>
              <Link href="/about" className="neo-btn-white w-full sm:w-auto text-center">
                <span>About Saini Nexus</span>
                <ArrowUpRight className="ml-2 w-4 h-4 shrink-0" />
              </Link>
            </div>
          </div>

          {/* Founder photo with offset accent block */}
          <div className="lg:col-span-5 flex justify-center relative z-10">
            <div className="relative pb-3 pr-3">
              {/* Offset blue decorative block */}
              <div className="absolute bottom-0 right-0 w-full h-full rounded-3xl bg-[#60A5FA] border-2 border-black" />
              <div className="relative p-2.5 rounded-3xl bg-[#FAF7EF] border-2 border-black shadow-[4px_4px_0px_#000000]">
                <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-black bg-zinc-100">
                  <Image
                    src="/team/dev-raj-saini.jpg"
                    alt="Dev Raj Saini — Founder, Saini Nexus"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 08. INSIGHTS: EDITORIAL JOURNAL TABLE (NO MORE BOXES!)    */}
      {/* High-Craft Magazine Ledger with horizontal line rows      */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-black/15 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider mb-3 font-bold shadow-[2px_2px_0px_#000000]">
              <BookOpen className="w-3.5 h-3.5" />
              Field Notes &amp; Intelligence
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black tracking-tight">
              Saini Nexus Editorial Journal
            </h2>
            <p className="text-zinc-700 text-sm sm:text-base mt-2 max-w-xl font-medium leading-relaxed">
              Empirical practitioner observations, algorithm teardowns, and B2B growth intelligence.
            </p>
          </div>
          <Link href="/insights" className="neo-btn-white w-fit shrink-0">
            <span>Explore All Field Notes</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>

        {/* Newspaper / Journal Table Rows: Completely breaks the box syndrome! */}
        <div className="divide-y-2 divide-black/15 border-y-2 border-black">
          {featuredInsights.map((article, index) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="py-6 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 group hover:bg-[#EFF6FF]/60 px-3 sm:px-6 -mx-3 sm:-mx-6 rounded-2xl transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 max-w-3xl">
                <div className="flex items-center gap-2 shrink-0">
                  <span className="font-mono text-xs font-bold text-zinc-400">
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border border-black ${
                    article.isFieldNote ? "bg-[#60A5FA] text-black" : "bg-[#FAF7EF] text-zinc-800"
                  }`}>
                    {article.category}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors tracking-tight leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 line-clamp-1 font-normal">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pt-2 md:pt-0">
                <span className="text-xs font-mono text-zinc-500 font-semibold">
                  {article.readTime}
                </span>
                <span className="w-9 h-9 rounded-full bg-white border-2 border-black flex items-center justify-center text-black group-hover:bg-[#60A5FA] group-hover:translate-x-1 transition-all shadow-[2px_2px_0px_#000000]">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 09. FINAL COMMERCIAL INTAKE: HAVE A B2B GROWTH CHALLENGE? */}
      {/* ========================================================= */}
      <div id="contact-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </div>

    </div>
  );
}
