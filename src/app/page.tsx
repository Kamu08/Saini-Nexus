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
      {/* DYNAMIC BREAK 01: CORE CAPABILITIES RIBBON                */}
      {/* Clean, authoritative capability strip framed with margins */}
      {/* ========================================================= */}
      <div className="px-2 sm:px-3">
        <div className="w-full bg-[#070B19] border border-slate-800/80 rounded-xl sm:rounded-2xl py-3.5 px-4 shadow-xl">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-2.5 text-center">
            {CAPABILITIES.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 sm:gap-6">
                <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide text-slate-200 flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#38bdf8] inline-block shrink-0" />
                  {item}
                </span>
                {idx < CAPABILITIES.length - 1 && (
                  <span className="text-slate-600 font-sans text-xs hidden md:inline">✦</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 01. TRUST & VERIFIED CREDENTIALS: CERTIFICATION RIBBON    */}
      {/* Accurate, professional LinkedIn Marketing Labs credentials */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#070B19] border border-slate-800/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-white relative overflow-hidden">
          {/* Subtle cyan ambient glow in corner */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-5 relative z-10">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-400/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                <ShieldCheck className="w-5 h-5 text-cyan-300" />
              </div>
              <div>
                <span className="text-[11px] font-sans uppercase tracking-widest text-cyan-400 font-semibold block">
                  Professional Credentials
                </span>
                <h3 className="text-lg sm:text-xl font-sans font-bold text-white leading-tight">
                  LinkedIn Marketing Certifications
                </h3>
                <p className="text-xs text-slate-400 font-normal mt-0.5">
                  Saini Nexus is led by certified practitioners across LinkedIn marketing strategy, advertising fundamentals, content &amp; creative design, and marketing measurement.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-sans font-semibold text-cyan-200 bg-cyan-950/60 border border-cyan-400/30 px-3.5 py-1.5 rounded-full w-fit shrink-0 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8] animate-pulse" />
              <span>LINKEDIN MARKETING LABS VERIFIED</span>
            </div>
          </div>

          {/* 4 Verified Credential Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 relative z-10">
            {[
              {
                title: "Marketing Strategy",
                code: "Verified",
                issuer: "LinkedIn Marketing Labs",
                verifyUrl: "https://training.marketing.linkedin.com/verify/tpdhuiyzq33a",
                dot: "bg-cyan-400 shadow-[0_0_6px_#38bdf8]"
              },
              {
                title: "Advertising Fundamentals",
                code: "Verified",
                issuer: "LinkedIn Marketing Labs",
                verifyUrl: "https://training.marketing.linkedin.com/verify/vjbijavyd84i",
                dot: "bg-blue-400 shadow-[0_0_6px_#60a5fa]"
              },
              {
                title: "Content & Creative Design",
                code: "Verified",
                issuer: "LinkedIn Marketing Labs",
                verifyUrl: "https://training.marketing.linkedin.com/verify/cres5ub84zqj",
                dot: "bg-sky-300 shadow-[0_0_6px_#7dd3fc]"
              },
              {
                title: "Marketing Measurement",
                code: "Verified",
                issuer: "LinkedIn Marketing Labs",
                verifyUrl: "https://training.marketing.linkedin.com/verify/wxa2wfgp5pew",
                dot: "bg-emerald-400 shadow-[0_0_6px_#34d399]"
              }
            ].map((cert, idx) => (
              <a
                key={idx}
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`Verify ${cert.title} on LinkedIn Marketing Labs`}
                className="bg-slate-900/60 border border-slate-800/90 hover:border-cyan-400/50 rounded-xl p-4 shadow-xs hover:shadow-cyan-500/10 transition-all duration-200 flex items-center justify-between gap-3 group/cert"
              >
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${cert.dot} shrink-0`} />
                    <span className="text-[11px] font-sans font-semibold text-slate-400 uppercase tracking-wider truncate">
                      {cert.code}
                    </span>
                  </div>
                  <h4 className="text-sm font-sans font-bold text-white leading-tight truncate group-hover/cert:text-cyan-300 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-[11px] font-sans text-slate-400 truncate flex items-center gap-1">
                    <span>{cert.issuer}</span>
                    <span className="text-cyan-400 font-semibold">↗</span>
                  </p>
                </div>
                <div className="w-7 h-7 rounded-lg bg-cyan-950/60 border border-cyan-400/30 flex items-center justify-center shrink-0 group-hover/cert:bg-cyan-500 group-hover/cert:text-slate-950 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300 group-hover/cert:text-slate-950 transition-colors" />
                </div>
              </a>
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
        <div className="bg-[#070B19] border border-slate-800/80 rounded-2xl sm:rounded-3xl p-7 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          {/* Subtle Ambient Cyan Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-200 text-xs font-sans font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
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
              <span className="bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800">01 Context</span>
              <span className="text-slate-600">→</span>
              <span className="bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800">02 Positioning</span>
              <span className="text-slate-600">→</span>
              <span className="bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800">03 Proof</span>
              <span className="text-slate-600">→</span>
              <span className="bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800">04 Audience</span>
              <span className="text-slate-600">→</span>
              <span className="bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800">05 Distribution</span>
              <span className="text-slate-600">→</span>
              <span className="bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800">06 Demand</span>
              <span className="text-slate-600">→</span>
              <span className="bg-cyan-500 text-slate-950 px-2.5 py-1 rounded-md font-bold shadow-[0_0_12px_rgba(56,189,248,0.35)]">07 Pipeline</span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 relative z-10">
            <Link 
              href="/audit" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-sans font-bold text-slate-950 bg-white hover:bg-cyan-100 shadow-lg hover:shadow-cyan-500/20 transition-all text-center whitespace-nowrap"
            >
              <span>Request Growth Assessment</span>
              <ArrowRight className="w-4 h-4 shrink-0 text-slate-950" />
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
          className="bg-[#070B19] border border-slate-800/80 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 text-white shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative overflow-hidden"
        >
          {/* Subtle Ambient Cyan Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="lg:col-span-7 space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-200 text-xs font-sans font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Executive Profile &amp; Practice Lead
            </div>

            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white leading-tight tracking-tight">
                Dev Raj Saini
              </h2>
              <p className="text-sm font-sans text-cyan-400 font-semibold mt-1.5 uppercase tracking-wider">
                Founder &amp; Lead B2B Growth Strategist
              </p>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Marketing founder and strategist focused on the intersection of B2B marketing, LinkedIn, thought leadership, personal branding and professional authority. Founder of <strong className="text-white font-semibold">Saini Nexus</strong> (B2B Demand &amp; Pipeline Growth) and <strong className="text-white font-semibold">Saini Prime</strong> (Executive Authority &amp; Positioning). Based in Jaipur, Rajasthan, serving India &amp; global B2B markets.
            </p>

            <div className="flex flex-wrap gap-2.5 text-xs font-sans text-slate-300 font-medium pt-1">
              <span className="inline-flex items-center gap-1.5 bg-slate-900/90 px-3.5 py-1.5 rounded-full border border-slate-800">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                Jaipur, Rajasthan, India
              </span>
              <span className="inline-flex items-center gap-1.5 bg-cyan-950/60 px-3.5 py-1.5 rounded-full border border-cyan-400/30 text-cyan-200">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                LinkedIn Marketing Labs Certified
              </span>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link 
                href="/about/dev-raj-saini" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-sans font-bold text-slate-950 bg-white hover:bg-cyan-100 shadow-lg hover:shadow-cyan-500/20 transition-all text-center whitespace-nowrap"
              >
                <span>Meet the Founder</span>
                <ArrowRight className="w-4 h-4 shrink-0 text-slate-950" />
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-sans font-semibold text-white bg-slate-900/80 border border-slate-700/80 hover:bg-slate-800 transition-all text-center whitespace-nowrap"
              >
                <span>About Saini Nexus</span>
                <ArrowUpRight className="w-4 h-4 shrink-0 text-cyan-300" />
              </Link>
            </div>
          </div>

          {/* Founder photo with clean modern border */}
          <div className="lg:col-span-5 flex justify-center relative z-10">
            <div className="relative p-2 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl">
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
