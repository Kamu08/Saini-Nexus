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
import { CaseStudyShowcase } from "@/components/CaseStudyShowcase";
import { EditorialJournalDesk } from "@/components/EditorialJournalDesk";

export default function HomePage() {

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
      {/* 01. TRUST & VERIFIED CREDENTIALS: ACCREDITATION RIBBON     */}
      {/* Sleek, compact horizontal verification bar (Idea 1)       */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7EF] border-2 border-black rounded-3xl p-5 sm:p-7 shadow-[4px_4px_0px_#000000] space-y-5">
          
          {/* Header strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-black/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#60A5FA] border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#000000]">
                <ShieldCheck className="w-5 h-5 text-black" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#2563EB] font-extrabold block">
                  Official Accreditation Protocol
                </span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-black leading-tight">
                  LinkedIn Marketing Labs Certified Practitioner
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-400 px-3 py-1 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>ACTIVE VERIFIED STATUS (2024–2026)</span>
            </div>
          </div>

          {/* 4 Sleek Horizontal Credential Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                title: "Marketing Strategy",
                code: "CERT-LMS-2024",
                issuer: "LinkedIn Marketing Labs",
                bg: "bg-white",
                dot: "bg-[#2563EB]"
              },
              {
                title: "Content & Creative Design",
                code: "CERT-CCD-2024",
                issuer: "LinkedIn Marketing Labs",
                bg: "bg-white",
                dot: "bg-amber-500"
              },
              {
                title: "Marketing Measurement",
                code: "CERT-MM-2024",
                issuer: "LinkedIn Marketing Labs",
                bg: "bg-white",
                dot: "bg-emerald-500"
              },
              {
                title: "Enterprise Ad Architecture",
                code: "DIRECT-PRACTICE",
                issuer: "Thought Leader & Document Ads",
                bg: "bg-white",
                dot: "bg-purple-500"
              }
            ].map((cert, idx) => (
              <div
                key={idx}
                className={`${cert.bg} border-2 border-black rounded-2xl p-3.5 shadow-[2px_2px_0px_#000000] hover:shadow-[3.5px_3.5px_0px_#000000] transition-all duration-150 flex items-center justify-between gap-3`}
              >
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${cert.dot} shrink-0`} />
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider truncate">
                      {cert.code}
                    </span>
                  </div>
                  <h4 className="text-sm font-serif font-bold text-black leading-tight truncate">
                    {cert.title}
                  </h4>
                  <p className="text-[10px] font-mono text-zinc-600 truncate">
                    {cert.issuer}
                  </p>
                </div>
                <div className="w-6 h-6 rounded-lg bg-[#EFF6FF] border border-black flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
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
      {/* 06. CASE STUDIES: SPOTLIGHT HERO + COMPARATIVE PROOF      */}
      {/* High-craft editorial case teardowns & verified ARR metrics */}
      {/* ========================================================= */}
      <CaseStudyShowcase />

      {/* ========================================================= */}
      {/* 07. FOUNDER AUTHORITY: EXECUTIVE PROFILE DOSSIER          */}
      {/* Two-tone accent frame with official seal styling          */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="bg-white border-3 border-black rounded-[2.5rem] sm:rounded-[3.5rem] p-6 sm:p-10 lg:p-14 text-black shadow-[6px_6px_0px_#000000] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: "url('/textures/founder-bg.jpg')",
          }}
        >
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
      {/* 08. INSIGHTS: INTERACTIVE EDITORIAL JOURNAL DESK          */}
      {/* Dynamic Magazine Cover Preview + Sliding Tracker Ledger    */}
      {/* ========================================================= */}
      <EditorialJournalDesk />

      {/* ========================================================= */}
      {/* 09. FINAL COMMERCIAL INTAKE: HAVE A B2B GROWTH CHALLENGE? */}
      {/* ========================================================= */}
      <div id="contact-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </div>

    </div>
  );
}
