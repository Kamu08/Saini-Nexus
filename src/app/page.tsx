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
import { SectorCarousel } from "@/components/SectorCarousel";
import { ContactForm } from "@/components/ContactForm";
import { CaseStudyShowcase } from "@/components/CaseStudyShowcase";
import { LivePipelineVisualizer } from "@/components/LivePipelineVisualizer";
import { EditorialJournalDesk } from "@/components/EditorialJournalDesk";

export default function HomePage() {
  const CAPABILITIES = [
    "B2B Marketing Strategy",
    "LinkedIn Ads & Thought Leader Ads",
    "Demand Generation",
    "Account-Based Marketing",
    "Founder-Led Marketing"
  ];

  return (
    <div className="space-y-20 sm:space-y-32 pb-24 overflow-x-clip">
      
      {/* ========================================================= */}
      {/* 00. HERO SECTION                                          */}
      {/* ========================================================= */}
      <ModernHero />

      {/* ========================================================= */}
      {/* DYNAMIC BREAK 01: CORE CAPABILITIES MOVING TICKER RIBBON  */}
      {/* Glitch-free twin-track marquee in vibrant Saini Logo Blue */}
      {/* ========================================================= */}
      <div className="w-full">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
      {/* Dark Structured Canvas                                    */}
      {/* ========================================================= */}
      <section className="bg-[#040B16] w-full border-y border-[#1572B8]/20 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveServicesHub />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 03. LIVE PIPELINE VISUALIZER: ARCHITECTURAL CRAFT          */}
      {/* Interactive 5-stage commercial engine with telemetry       */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LivePipelineVisualizer />
      </section>

      {/* ========================================================= */}
      {/* 04. THE 7-STAGE PIPELINE AUDIT INVITATION (LEAN CALLOUT)  */}
      {/* Clean high-converting banner directing to dedicated /audit */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#08152a] border border-[#1b3f73]/70 rounded-2xl sm:rounded-3xl p-7 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          {/* Subtle Ambient Blue Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#1572b8]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2852]/80 border border-[#38a9eb]/40 text-[#d4effc] text-xs font-sans font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#38a9eb]" />
              The Saini Nexus Growth Architecture
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-extrabold text-white tracking-tight leading-snug">
              Where Is Your B2B Growth Engine Leaking Opportunities?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
              Evaluate your buying committee coverage, content proof, and LinkedIn distribution across our 7 connected stages.
            </p>

            {/* 7-Step Mini Indicator */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] font-sans font-semibold text-slate-300">
              <span className="bg-[#091b36]/80 px-2.5 py-1 rounded-md border border-[#18365f]">01 Context</span>
              <span className="text-slate-500">→</span>
              <span className="bg-[#091b36]/80 px-2.5 py-1 rounded-md border border-[#18365f]">02 Positioning</span>
              <span className="text-slate-500">→</span>
              <span className="bg-[#091b36]/80 px-2.5 py-1 rounded-md border border-[#18365f]">03 Proof</span>
              <span className="text-slate-500">→</span>
              <span className="bg-[#091b36]/80 px-2.5 py-1 rounded-md border border-[#18365f]">04 Audience</span>
              <span className="text-slate-500">→</span>
              <span className="bg-[#091b36]/80 px-2.5 py-1 rounded-md border border-[#18365f]">05 Distribution</span>
              <span className="text-slate-500">→</span>
              <span className="bg-[#091b36]/80 px-2.5 py-1 rounded-md border border-[#18365f]">06 Demand</span>
              <span className="text-slate-500">→</span>
              <span className="bg-gradient-to-r from-[#1572b8] to-[#38a9eb] text-white px-2.5 py-1 rounded-md font-bold shadow-[0_0_15px_rgba(56,169,235,0.4)]">07 Pipeline</span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 relative z-10">
            <Link 
              href="/audit" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-sans font-bold text-[#07152b] bg-white hover:bg-[#edf7fd] shadow-[0_4px_20px_rgba(0,0,0,0.25),0_0_15px_rgba(56,169,235,0.25)] hover:shadow-[0_6px_25px_rgba(56,169,235,0.4)] hover:-translate-y-0.5 transition-all text-center whitespace-nowrap"
            >
              <span>Request Growth Assessment</span>
              <ArrowRight className="w-4 h-4 shrink-0 text-[#07152b]" />
            </Link>
            <span className="text-[11px] font-sans text-slate-400 text-center">
              Takes ~2 minutes · Actionable insights
            </span>
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
      {/* 06B. EDITORIAL JOURNAL DESK: RESEARCH DISPATCHES          */}
      {/* Authoritative research archive & practitioner journalism  */}
      {/* ========================================================= */}
      <EditorialJournalDesk />

      {/* ========================================================= */}
      {/* 07. FOUNDER AUTHORITY: EXECUTIVE PROFILE DOSSIER          */}
      {/* Modern corporate leadership highlight                     */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="bg-[#08152a] border border-[#1b3f73]/70 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 text-white shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative overflow-hidden"
        >
          {/* Subtle Ambient Blue Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1572b8]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="lg:col-span-7 space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2852]/80 border border-[#38a9eb]/40 text-[#d4effc] text-xs font-sans font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#38a9eb]" />
              Executive Profile &amp; Practice Lead
            </div>

            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white leading-tight tracking-tight">
                Dev Raj Saini
              </h2>
              <p className="text-sm font-sans text-[#38a9eb] font-semibold mt-1.5 uppercase tracking-wider">
                Founder &amp; Lead B2B Growth Strategist
              </p>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Marketing founder and strategist focused on the intersection of B2B marketing, LinkedIn, thought leadership, personal branding and professional authority. Founder of <strong className="text-white font-semibold">Saini Nexus</strong> (B2B Demand &amp; Pipeline Growth) and <strong className="text-white font-semibold">Saini Prime</strong> (Executive Authority &amp; Positioning). Based in Jaipur, Rajasthan, serving India &amp; global B2B markets.
            </p>

            <div className="flex flex-wrap gap-2.5 text-xs font-sans text-slate-300 font-medium pt-1">
              <span className="inline-flex items-center gap-1.5 bg-[#091b36]/80 px-3.5 py-1.5 rounded-full border border-[#18365f]">
                <MapPin className="w-4 h-4 text-[#38a9eb] shrink-0" />
                Jaipur, Rajasthan, India
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#0c2852]/80 px-3.5 py-1.5 rounded-full border border-[#38a9eb]/40 text-[#d4effc]">
                <ShieldCheck className="w-4 h-4 text-[#38a9eb] shrink-0" />
                LinkedIn Marketing Labs Certified
              </span>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link 
                href="/about/dev-raj-saini" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-sans font-bold text-[#07152b] bg-white hover:bg-[#edf7fd] shadow-[0_4px_20px_rgba(0,0,0,0.25),0_0_15px_rgba(56,169,235,0.25)] hover:shadow-[0_6px_25px_rgba(56,169,235,0.4)] hover:-translate-y-0.5 transition-all text-center whitespace-nowrap"
              >
                <span>Meet the Founder</span>
                <ArrowRight className="w-4 h-4 shrink-0 text-[#07152b]" />
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-sans font-semibold text-white bg-[#0b2144]/75 border border-[#38a9eb]/40 hover:border-[#38a9eb]/80 hover:bg-[#0f2c59]/90 transition-all text-center whitespace-nowrap"
              >
                <span>About Saini Nexus</span>
                <ArrowUpRight className="w-4 h-4 shrink-0 text-[#74cbf7]" />
              </Link>
            </div>
          </div>

          {/* Founder photo with clean modern border */}
          <div className="lg:col-span-5 flex justify-center relative z-10">
            <div className="relative p-2 rounded-3xl bg-[#091b36] border border-[#18365f] shadow-2xl">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden bg-slate-950">
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
