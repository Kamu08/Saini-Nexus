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
import { Metadata } from "next";
import { ModernHero } from "@/components/ModernHero";
import { InteractiveServicesHub } from "@/components/InteractiveServicesHub";
import { SectorCarousel } from "@/components/SectorCarousel";
import { ContactForm } from "@/components/ContactForm";
import { CaseStudyShowcase } from "@/components/CaseStudyShowcase";
import { JsonLd, getFAQSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Saini Nexus | B2B Marketing & LinkedIn Growth Company",
  description:
    "Saini Nexus is a B2B marketing and LinkedIn growth company in Jaipur, Rajasthan, helping businesses build demand, reach decision-makers, and generate qualified commercial pipeline.",
  alternates: {
    canonical: "https://www.saininexus.com",
  },
};

const HOME_FAQS = [
  {
    question: "What does Saini Nexus specialize in?",
    answer: "Saini Nexus is a B2B marketing, demand generation, and LinkedIn advertising practice that helps mid-market and enterprise companies penetrate buying committees, build category authority, and generate sales-accepted pipeline."
  },
  {
    question: "Who leads Saini Nexus and what are their qualifications?",
    answer: "Saini Nexus is founded and led by Dev Raj Saini, an accredited B2B growth strategist certified across all 4 tracks of the LinkedIn Marketing Labs program: Marketing Strategy, Advertising Fundamentals, Content & Creative, and Marketing Measurement."
  },
  {
    question: "Where is Saini Nexus located and which regions do you serve?",
    answer: "Saini Nexus is headquartered in Jaipur, Rajasthan, India, and works with B2B companies across India (including Jaipur, Rajasthan, Delhi NCR, Bangalore, and Mumbai) as well as global B2B clients in the United States, United Kingdom, and United Arab Emirates."
  },
  {
    question: "What is the 7-Stage Commercial Growth Architecture?",
    answer: "The 7-Stage Architecture is Saini Nexus's proprietary demand model that connects Buyer Context (01), Positioning POV (02), Technical Proof (03), Audience Calibration (04), Paid/Organic Distribution (05), Demand Creation (06), and Sales-Accepted Pipeline (07)."
  },
  {
    question: "What are the typical budget tiers for working with Saini Nexus?",
    answer: "Engagements typically range from $1,500 – $2,000/month for the Starter Engine, $2,000 – $10,000/month for the full Growth Tier, and $10,000 – $15,000+/month for multi-region Scale and Enterprise ABM programs."
  },
  {
    question: "How does Saini Nexus differ from traditional lead generation agencies?",
    answer: "Traditional agencies sell low-intent contact lists and gated downloads. Saini Nexus uses ungated proof, Thought Leader Ads, and full buying committee education to deliver sales-ready opportunities directly to account executives."
  }
];

export default function HomePage() {
  const CAPABILITIES = [
    "B2B Marketing Strategy",
    "LinkedIn Ads & Thought Leader Ads",
    "Demand Generation",
    "Account-Based Marketing",
    "Founder-Led Marketing"
  ];

  return (
    <div className="overflow-x-clip">
      <JsonLd data={getFAQSchema(HOME_FAQS)} />
      
      {/* ========================================================= */}
      {/* 00. HERO SECTION                                          */}
      {/* ========================================================= */}
      <ModernHero />

      {/* ========================================================= */}
      {/* DYNAMIC BREAK 01: CORE CAPABILITIES MOVING TICKER RIBBON  */}
      {/* Glitch-free twin-track marquee in vibrant Saini Logo Blue */}
      {/* ========================================================= */}
      <div className="w-full my-8 sm:my-14">
        <div className="marquee-container group w-full bg-gradient-to-r from-[#0E4A8A] via-[#1572B8] to-[#0E4A8A] border-y border-[#67c7f8]/50 rounded-none py-3.5 px-0 shadow-lg shadow-[#1572b8]/15 relative overflow-hidden select-none">
          
          {/* Edge Vignette Fades in Saini Brand Blue */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#0E4A8A] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#0E4A8A] to-transparent z-10" />

          {/* Glitch-Free Seamless Twin-Track Marquee */}
          <div className="flex w-max items-center">
            {/* Track 1 */}
            <div className="marquee-track flex items-center gap-8 sm:gap-12 pr-8 sm:pr-12">
              {[...CAPABILITIES, ...CAPABILITIES, ...CAPABILITIES].map((item, idx) => (
                <div key={`t1-${idx}`} className="flex items-center gap-3 sm:gap-4 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-[#67c7f8] shadow-[0_0_8px_#ffffff] inline-block shrink-0 animate-pulse" />
                  <span className="font-sans text-xs sm:text-sm font-bold tracking-wide text-white whitespace-nowrap drop-shadow-sm">
                    {item}
                  </span>
                  <span className="text-[#bae6fd]/80 font-sans text-xs select-none ml-5 sm:ml-8">✦</span>
                </div>
              ))}
            </div>

            {/* Track 2 (Identical Twin for 100% glitch-free continuous loop) */}
            <div className="marquee-track flex items-center gap-8 sm:gap-12 pr-8 sm:pr-12" aria-hidden="true">
              {[...CAPABILITIES, ...CAPABILITIES, ...CAPABILITIES].map((item, idx) => (
                <div key={`t2-${idx}`} className="flex items-center gap-3 sm:gap-4 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-[#67c7f8] shadow-[0_0_8px_#ffffff] inline-block shrink-0 animate-pulse" />
                  <span className="font-sans text-xs sm:text-sm font-bold tracking-wide text-white whitespace-nowrap drop-shadow-sm">
                    {item}
                  </span>
                  <span className="text-[#bae6fd]/80 font-sans text-xs select-none ml-5 sm:ml-8">✦</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* 01. TRUST & VERIFIED CREDENTIALS — BOLD EDITORIAL LAYOUT  */}
      {/* Premium dark glass credential showcase, Saini blue theme  */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12 sm:my-20">

        {/* Outer shell — rich multi-stop Saini blue gradient (darkened) */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#1260a8] via-[#0e4a8a] to-[#08346e]">

          {/* ── Decorative radial glow blobs ── */}
          <div className="pointer-events-none absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-[#38a9eb] opacity-[0.18] blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-28 right-0 w-[450px] h-[450px] rounded-full bg-[#1572b8] opacity-[0.25] blur-[110px]" />
          <div className="pointer-events-none absolute top-0 right-1/3 w-[300px] h-[300px] rounded-full bg-[#67c7f8] opacity-[0.10] blur-[80px]" />

          {/* ── Header row ── */}
          <div className="relative z-10 flex flex-col gap-4 px-7 sm:px-10 pt-8 sm:pt-10 pb-7 border-b border-white/15">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/90">
                <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse" />
                LinkedIn Marketing Labs
              </span>
              <span className="h-px w-8 bg-white/30" />
              <span className="text-[11px] font-semibold uppercase tracking-widest text-white/50">Official Accreditation</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-end gap-3">
              <div className="space-y-1.5">
                <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-white tracking-tight drop-shadow-sm">
                  Verified Practitioner Credentials
                </h3>
                <p className="text-[13px] text-white/65 leading-relaxed max-w-2xl">
                  Every strategy and campaign we deploy is backed by LinkedIn&apos;s highest accreditation standard — independently verifiable on the official registry.
                </p>
              </div>
            </div>
          </div>

          {/* ── Cards grid ── */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 p-5 sm:p-7">
            {[
              {
                num: "01",
                title: "Marketing Strategy",
                chipColor: "rgba(255,255,255,0.15)",
                chipBorder: "rgba(255,255,255,0.25)",
                glow: "rgba(255,255,255,0.08)",
                id: "tpdhuiyzq33a",
                skills: ["Buying Committee Mapping", "Full-Funnel Strategy"],
                verifyUrl: "https://training.marketing.linkedin.com/verify/tpdhuiyzq33a"
              },
              {
                num: "02",
                title: "Advertising Fundamentals",
                chipColor: "rgba(255,255,255,0.15)",
                chipBorder: "rgba(255,255,255,0.25)",
                glow: "rgba(255,255,255,0.08)",
                id: "vjbijavyd84i",
                skills: ["Campaign Manager", "Matched Audiences"],
                verifyUrl: "https://training.marketing.linkedin.com/verify/vjbijavyd84i"
              },
              {
                num: "03",
                title: "Content & Creative",
                chipColor: "rgba(255,255,255,0.15)",
                chipBorder: "rgba(255,255,255,0.25)",
                glow: "rgba(255,255,255,0.08)",
                id: "cres5ub84zqj",
                skills: ["Thought Leader Ads", "Executive Storytelling"],
                verifyUrl: "https://training.marketing.linkedin.com/verify/cres5ub84zqj"
              },
              {
                num: "04",
                title: "Marketing Measurement",
                chipColor: "rgba(255,255,255,0.15)",
                chipBorder: "rgba(255,255,255,0.25)",
                glow: "rgba(255,255,255,0.08)",
                id: "wxa2wfgp5pew",
                skills: ["Offline Conversions", "Pipeline ROI"],
                verifyUrl: "https://training.marketing.linkedin.com/verify/wxa2wfgp5pew"
              }
            ].map((cert, idx) => (
              <div key={idx} className="group/cert relative flex flex-col p-6 lg:p-7 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 transition-all duration-300 overflow-hidden rounded-none shadow-lg">

                {/* Card inner glow on hover */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at top left, ${cert.glow}, transparent 65%)` }}
                />

                {/* Glowing top line indicator */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/0 group-hover/cert:bg-white/50 transition-colors duration-500 shadow-[0_0_10px_rgba(255,255,255,0)] group-hover/cert:shadow-[0_0_10px_rgba(255,255,255,0.5)]" />

                {/* Large ghost number (moved to left and cleaner) */}
                <div
                  className="absolute -bottom-4 -right-2 text-[100px] sm:text-[120px] font-black leading-none select-none pointer-events-none opacity-[0.03] group-hover/cert:opacity-[0.08] transition-opacity font-sans text-white"
                >
                  {cert.num}
                </div>

                <div className="relative z-10 flex flex-col h-full gap-4">

                  {/* Title */}
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white leading-tight group-hover/cert:text-white transition-colors duration-300 drop-shadow-sm">
                      {cert.title}
                    </h4>
                  </div>

                  {/* Skill chips */}
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {cert.skills.map((s, si) => (
                      <span
                        key={si}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-sm text-white/80 backdrop-blur-sm shadow-sm"
                        style={{ background: cert.chipColor, border: `1px solid ${cert.chipBorder}` }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Verify link row (pushed to bottom) */}
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto pt-8 flex items-center justify-between group/link"
                  >
                    <span className="flex items-center gap-1.5 text-[11px] font-bold text-white/60 group-hover/link:text-white transition-colors">
                      Verify Credential
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </span>
                    <span className="font-mono text-[9px] text-white/30 group-hover/link:text-white/60 transition-colors">
                      {cert.id}
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ── Bottom bar ── */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-7 sm:px-10 py-4 border-t border-white/15 bg-black/10">
            <div className="flex items-center gap-2.5">
              <svg className="w-4 h-4 shrink-0 fill-white/70" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span className="text-[11px] text-white/50 font-medium">Issued by <span className="text-white/80 font-semibold">LinkedIn Marketing Labs</span> — click any card to verify on the official registry</span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-white/35 font-bold">training.marketing.linkedin.com</span>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 02. WHAT WE DO: THE 8 SERVICES                            */}
      {/* Light Structured Canvas with White Fluted Stripes Texture  */}
      {/* ========================================================= */}
      <section 
        className="relative w-full border-y border-slate-200/80 py-12 sm:py-20 bg-cover bg-top bg-fixed bg-no-repeat"
        style={{ backgroundImage: "url('/fluted-services-bg-dense.jpg')" }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <InteractiveServicesHub />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 04. THE 7-STAGE PIPELINE AUDIT INVITATION (LEAN CALLOUT)  */}
      {/* Clean high-converting banner directing to dedicated /audit */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* The Container */}
        <div className="bg-white border border-slate-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] relative flex flex-col gap-12 lg:gap-16 p-8 sm:p-12 lg:p-16 group/box overflow-hidden">
          
          {/* Accent Gradient Top Bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0B3C7E] via-[#1572B8] to-[#38A9EB]" />
          
          {/* Subtle Background Pattern (Dot Grid) */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

          {/* Top Half: Copy & CTA */}
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10 lg:gap-16 relative z-10">
            <div className="w-full max-w-2xl space-y-6 text-center lg:text-left">
              
              {/* High-Contrast Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-sans font-bold uppercase tracking-[0.2em] shadow-sm">
                <Sparkles className="w-3 h-3 text-[#38A9EB]" />
                The Saini Nexus Growth Architecture
              </div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-slate-900 tracking-tight leading-[1.15]">
                Where Is Your B2B Growth Engine <span className="text-[#1572B8]">Leaking Opportunities?</span>
              </h3>
              
              <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                Evaluate your buying committee coverage, content proof, and LinkedIn distribution across our 7 connected stages.
              </p>
            </div>

            <div className="shrink-0 flex flex-col items-center lg:items-end gap-3 w-full lg:w-auto">
              {/* Premium Gradient Button */}
              <Link 
                href="/audit" 
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1572B8] to-[#0E4A8A] hover:from-[#38A9EB] hover:to-[#1572B8] text-white text-xs font-sans font-bold uppercase tracking-widest transition-all shadow-xl hover:shadow-[0_10px_30px_rgba(21,114,184,0.3)] border border-transparent"
              >
                <span>Request Growth Assessment</span>
                <ArrowRight className="w-4 h-4 shrink-0 text-[#67C7F8] group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                Takes ~2 minutes • Actionable insights
              </span>
            </div>
          </div>

          {/* Bottom Half: 7-Stage Architectural Sequence */}
          <div className="w-full relative z-10">
            {/* Grounding line for the architecture */}
            <div className="w-full h-[2px] bg-slate-800 mb-4 sm:mb-6" />
            
            {/* Mobile View: Compact 1-Row Connected Horizontal Pipeline (Saves ~400px vertical space) */}
            <div className="block sm:hidden w-full space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                <span className="text-[#1572B8] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1572B8] animate-pulse" />
                  7-Stage Architecture
                </span>
                <span>Swipe stages →</span>
              </div>
              
              <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-2 -mx-2 px-2 snap-x snap-mandatory touch-pan-x">
                {[
                  { name: "Context", role: "Foundation" },
                  { name: "Positioning", role: "Differentiation" },
                  { name: "Proof", role: "Validation" },
                  { name: "Audience", role: "Targeting" },
                  { name: "Distribution", role: "Reach" },
                  { name: "Demand", role: "Capture" },
                  { name: "Pipeline", role: "Commercial Yield" }
                ].map((stage, idx) => (
                  <div 
                    key={idx}
                    className={`snap-start shrink-0 w-[116px] flex flex-col justify-between p-2.5 h-[72px] border ${
                      idx === 6 
                        ? 'bg-[#1572B8] border-[#1572B8] shadow-md text-white' 
                        : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono font-bold ${idx === 6 ? 'text-[#67C7F8]' : 'text-[#1572B8]'}`}>
                        0{idx + 1}
                      </span>
                      <span className={`w-1 h-1 rounded-full ${idx === 6 ? 'bg-white shadow-[0_0_6px_white]' : 'bg-slate-300'}`} />
                    </div>
                    <div>
                      <div className={`text-[8px] font-sans font-bold uppercase tracking-wider truncate ${idx === 6 ? 'text-[#67C7F8]' : 'text-slate-400'}`}>
                        {stage.role}
                      </div>
                      <div className={`text-[11px] font-sans font-extrabold tracking-tight truncate ${idx === 6 ? 'text-white' : 'text-slate-900'}`}>
                        {stage.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop & Tablet View: Original 7-Column Grid (100% Preserved) */}
            <div className="hidden sm:grid sm:grid-cols-4 lg:grid-cols-7 gap-4">
              {[
                { name: "Context", role: "Foundation" },
                { name: "Positioning", role: "Differentiation" },
                { name: "Proof", role: "Validation" },
                { name: "Audience", role: "Targeting" },
                { name: "Distribution", role: "Reach" },
                { name: "Demand", role: "Capture" },
                { name: "Pipeline", role: "Commercial Yield" }
              ].map((stage, idx) => (
                <div 
                  key={idx}
                  className={`flex flex-col justify-between p-4 h-28 border ${idx === 6 ? 'bg-[#1572B8] border-[#1572B8] shadow-lg' : 'bg-slate-50 border-slate-200 hover:border-[#38A9EB]/40 hover:bg-white'} transition-colors relative group cursor-default`}
                >
                  {/* Top: Number & Glow */}
                  <div className="flex items-start justify-between">
                    <span className={`text-[10px] font-mono font-bold ${idx === 6 ? 'text-[#67C7F8]' : 'text-slate-400 group-hover:text-[#1572B8]'} transition-colors`}>
                      0{idx + 1}
                    </span>
                    {idx === 6 ? (
                      <span className="w-1.5 h-1.5 bg-white shadow-[0_0_8px_white] animate-pulse" />
                    ) : (
                      <span className="w-1.5 h-1.5 bg-slate-200 group-hover:bg-[#38A9EB]/50 transition-colors" />
                    )}
                  </div>
                  
                  {/* Bottom: Stage Info */}
                  <div>
                    <div className={`text-[9px] font-sans font-bold uppercase tracking-wider ${idx === 6 ? 'text-[#67C7F8]' : 'text-slate-400 group-hover:text-slate-500'} transition-colors mb-1`}>
                      {stage.role}
                    </div>
                    <div className={`text-xs font-sans font-bold ${idx === 6 ? 'text-white' : 'text-slate-900'} tracking-wide`}>
                      {stage.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

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
      {/* Modern corporate leadership highlight                     */}
      {/* ========================================================= */}
      <section 
        className="w-full relative py-16 sm:py-24"
        style={{
          backgroundImage: "url('/bg/torn_paper.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 border border-slate-200 shadow-2xl bg-white overflow-hidden">
            
            {/* Left: The Photo (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-[600px] border-r border-slate-200 bg-[#FAFCFF] overflow-hidden group">
              <Image 
                src="/team/dev-raj-saini.jpg" 
                fill 
                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700" 
                alt="Dev Raj Saini — Founder, Saini Nexus" 
              />
              <div className="absolute inset-0 bg-[#1572B8]/15 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
            </div>

            {/* Right: The Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center p-8 sm:p-12 lg:p-16 relative overflow-hidden bg-white">
              
              {/* Subtle structural grid lines inside the white box */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1572B8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 text-white text-[10px] font-sans font-bold uppercase tracking-[0.2em] shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#38A9EB]" />
                  Executive Profile &amp; Practice Lead
                </div>

                <div>
                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black text-slate-900 leading-tight tracking-tight">
                    Dev Raj Saini
                  </h2>
                  <p className="text-xs sm:text-sm font-sans text-[#1572B8] font-bold mt-1.5 uppercase tracking-[0.2em]">
                    Founder &amp; Lead B2B Growth Strategist
                  </p>
                </div>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                  Marketing founder and strategist focused on the intersection of B2B marketing, LinkedIn, thought leadership, personal branding and professional authority. Founder of <strong className="text-slate-900 font-semibold">Saini Nexus</strong> (B2B Demand &amp; Pipeline Growth) and <strong className="text-slate-900 font-semibold">Saini Prime</strong> (Executive Authority &amp; Positioning). Based in Jaipur, Rajasthan, serving India &amp; global B2B markets.
                </p>

                <div className="flex flex-wrap gap-2.5 text-xs font-sans text-slate-700 font-medium pt-1">
                  <span className="inline-flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 border border-slate-200">
                    <MapPin className="w-4 h-4 text-[#1572B8] shrink-0" />
                    Jaipur, Rajasthan, India
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 border border-slate-200 text-slate-900">
                    <ShieldCheck className="w-4 h-4 text-[#1572B8] shrink-0" />
                    LinkedIn Marketing Labs Certified
                  </span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <Link 
                    href="/about" 
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-sans font-bold uppercase tracking-[0.2em] text-white bg-[#1572B8] hover:bg-[#38A9EB] transition-colors shadow-sm text-center whitespace-nowrap"
                  >
                    <span>About Saini Nexus</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </Link>
                  <Link 
                    href="/#contact-form" 
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-sans font-bold uppercase tracking-[0.2em] text-slate-700 bg-white border border-slate-200 hover:border-[#1572B8] transition-colors text-center whitespace-nowrap"
                  >
                    <span>Book Strategy Call</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-slate-400" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ========================================================= */}
      {/* 09. FINAL COMMERCIAL INTAKE: HAVE A B2B GROWTH CHALLENGE? */}
      {/* ========================================================= */}
      <div id="contact-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <ContactForm />
      </div>

    </div>
  );
}
