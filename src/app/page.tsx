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
      {/* 01. TRUST & VERIFIED CREDENTIALS: CERTIFICATION RIBBON    */}
      {/* Official LinkedIn Marketing Labs Certifications Showcase */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-900/5 space-y-8 relative overflow-hidden">
          
          {/* Subtle Ambient Background Gradients in Saini Blue Palette */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#38a9eb]/10 via-[#1572b8]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#1572b8]/5 via-[#38a9eb]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Section Header Strip */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-100 pb-7 relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF6FC] border border-[#38a9eb]/35 flex items-center justify-center shrink-0 shadow-sm shadow-[#1572b8]/10 text-[#1572B8]">
                <ShieldCheck className="w-6 h-6 text-[#1572B8]" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-sans uppercase tracking-widest text-[#1572b8] font-bold">
                    Official Accreditation
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="text-[11px] font-sans font-semibold text-slate-500 uppercase tracking-wider">
                    Verified Competency
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-slate-950 tracking-tight leading-snug">
                  LinkedIn Marketing Certifications
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl leading-relaxed">
                  Saini Nexus is led by officially certified practitioners across LinkedIn marketing strategy, campaign architecture, executive creative, and revenue attribution. Every framework adheres to verified LinkedIn Marketing Labs standards.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs font-sans font-bold text-[#0F539A] bg-[#EBF6FC] border border-[#38a9eb]/40 px-4 py-2 rounded-full w-fit shrink-0 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#38a9eb] shadow-[0_0_8px_#38a9eb] animate-pulse" />
              <span className="tracking-wide">LINKEDIN MARKETING LABS VERIFIED</span>
            </div>
          </div>

          {/* 4 Official Verified Credential Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative z-10">
            {[
              {
                title: "Marketing Strategy",
                subtitle: "Full-Funnel Campaign Architecture",
                code: "Verified Practitioner",
                id: "tpdhuiyzq33a",
                issuer: "LinkedIn Marketing Labs",
                skills: ["Buying Committee Mapping", "Full-Funnel Strategy"],
                verifyUrl: "https://training.marketing.linkedin.com/verify/tpdhuiyzq33a"
              },
              {
                title: "Advertising Fundamentals",
                subtitle: "Campaign Delivery & Bidding",
                code: "Verified Practitioner",
                id: "vjbijavyd84i",
                issuer: "LinkedIn Marketing Labs",
                skills: ["Campaign Manager Architecture", "Matched Audiences"],
                verifyUrl: "https://training.marketing.linkedin.com/verify/vjbijavyd84i"
              },
              {
                title: "Content & Creative Design",
                subtitle: "Thought Leader & Document Ads",
                code: "Verified Practitioner",
                id: "cres5ub84zqj",
                issuer: "LinkedIn Marketing Labs",
                skills: ["Thought Leader Ads", "Executive Storytelling"],
                verifyUrl: "https://training.marketing.linkedin.com/verify/cres5ub84zqj"
              },
              {
                title: "Marketing Measurement",
                subtitle: "Pipeline Attribution & Analytics",
                code: "Verified Practitioner",
                id: "wxa2wfgp5pew",
                issuer: "LinkedIn Marketing Labs",
                skills: ["Offline Conversions", "Pipeline ROI Attribution"],
                verifyUrl: "https://training.marketing.linkedin.com/verify/wxa2wfgp5pew"
              }
            ].map((cert, idx) => (
              <div
                key={idx}
                className="bg-[#FAFCFF] hover:bg-white border border-slate-200/90 hover:border-[#1572B8] rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#1572B8]/12 hover:-translate-y-1 flex flex-col justify-between group/cert"
              >
                <div className="space-y-3.5">
                  {/* Top: LinkedIn Logo & Verified Status Pill */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#0A66C2]/10 border border-[#0A66C2]/20 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 fill-[#0A66C2]" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Verified
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h4 className="text-base font-sans font-bold text-slate-900 group-hover/cert:text-[#1572B8] transition-colors leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {cert.subtitle}
                    </p>
                  </div>

                  {/* Issuer & Credential ID */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                    <span className="font-medium text-slate-600">{cert.issuer}</span>
                    <span className="font-mono text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                      ID: {cert.id}
                    </span>
                  </div>

                  {/* Key Skills Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-medium bg-white border border-slate-200 text-slate-600 px-2 py-0.5 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom: Direct Verification Button */}
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Verify ${cert.title} credential on LinkedIn Marketing Labs`}
                  className="mt-5 pt-3.5 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold text-[#1572B8] group-hover/cert:text-[#0B3C7E] transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <span>Verify Credential</span>
                    <span className="text-[#38a9eb] font-semibold group-hover/cert:translate-x-1 group-hover/cert:-translate-y-0.5 transition-transform duration-200">↗</span>
                  </span>
                  <span className="text-[10px] font-sans font-medium text-slate-400 group-hover/cert:text-[#1572B8] transition-colors">
                    Official Registry
                  </span>
                </a>
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
