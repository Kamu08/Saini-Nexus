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
    <div className="space-y-20 sm:space-y-32 pb-24 overflow-x-clip bg-mesh-glow">
      
      {/* ========================================================= */}
      {/* 00. HERO SECTION                                          */}
      {/* ========================================================= */}
      <ModernHero />

      {/* ========================================================= */}
      {/* DYNAMIC BREAK 01: CORE CAPABILITIES RIBBON                */}
      {/* Clean, authoritative capability strip without hype claims */}
      {/* ========================================================= */}
      <div className="w-full bg-slate-900 border-y border-slate-800 py-4 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-2.5 text-center">
          {CAPABILITIES.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 sm:gap-6">
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide text-slate-200 flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block shrink-0" />
                {item}
              </span>
              {idx < CAPABILITIES.length - 1 && (
                <span className="text-slate-600 font-sans text-xs hidden md:inline">✦</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 01. TRUST & VERIFIED CREDENTIALS: CERTIFICATION RIBBON    */}
      {/* Accurate, professional LinkedIn Marketing Labs credentials */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          
          {/* Header strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/70 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <span className="text-[11px] font-sans uppercase tracking-widest text-blue-600 font-semibold block">
                  Professional Credentials
                </span>
                <h3 className="text-lg sm:text-xl font-sans font-bold text-slate-900 leading-tight">
                  LinkedIn Marketing Certifications
                </h3>
                <p className="text-xs text-slate-500 font-normal mt-0.5">
                  Saini Nexus is led by certified practitioners across LinkedIn marketing strategy, advertising fundamentals, content &amp; creative design, and marketing measurement.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-sans font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full w-fit shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>LINKEDIN MARKETING LABS VERIFIED</span>
            </div>
          </div>

          {/* 4 Verified Credential Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                title: "Marketing Strategy",
                code: "Verified",
                issuer: "LinkedIn Marketing Labs",
                verifyUrl: "https://training.marketing.linkedin.com/verify/tpdhuiyzq33a",
                bg: "bg-white",
                dot: "bg-blue-600"
              },
              {
                title: "Advertising Fundamentals",
                code: "Verified",
                issuer: "LinkedIn Marketing Labs",
                verifyUrl: "https://training.marketing.linkedin.com/verify/vjbijavyd84i",
                bg: "bg-white",
                dot: "bg-indigo-600"
              },
              {
                title: "Content & Creative Design",
                code: "Verified",
                issuer: "LinkedIn Marketing Labs",
                verifyUrl: "https://training.marketing.linkedin.com/verify/cres5ub84zqj",
                bg: "bg-white",
                dot: "bg-amber-500"
              },
              {
                title: "Marketing Measurement",
                code: "Verified",
                issuer: "LinkedIn Marketing Labs",
                verifyUrl: "https://training.marketing.linkedin.com/verify/wxa2wfgp5pew",
                bg: "bg-white",
                dot: "bg-emerald-500"
              }
            ].map((cert, idx) => (
              <a
                key={idx}
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`Verify ${cert.title} on LinkedIn Marketing Labs`}
                className={`${cert.bg} border border-slate-200/90 hover:border-blue-400 rounded-2xl p-4 shadow-2xs hover:shadow-md transition-all duration-200 flex items-center justify-between gap-3 group/cert`}
              >
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${cert.dot} shrink-0`} />
                    <span className="text-[11px] font-sans font-semibold text-slate-500 uppercase tracking-wider truncate">
                      {cert.code}
                    </span>
                  </div>
                  <h4 className="text-sm font-sans font-bold text-slate-900 leading-tight truncate group-hover/cert:text-blue-600 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-[11px] font-sans text-slate-500 truncate flex items-center gap-1">
                    <span>{cert.issuer}</span>
                    <span className="text-blue-600 font-semibold">↗</span>
                  </p>
                </div>
                <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover/cert:bg-blue-600 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 group-hover/cert:text-white transition-colors" />
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
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 border border-slate-800 rounded-3xl p-7 sm:p-10 lg:p-12 text-white shadow-xl relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-sans font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
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
              <span className="bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">01 Context</span>
              <span className="text-slate-500">→</span>
              <span className="bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">02 Positioning</span>
              <span className="text-slate-500">→</span>
              <span className="bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">03 Proof</span>
              <span className="text-slate-500">→</span>
              <span className="bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">04 Audience</span>
              <span className="text-slate-500">→</span>
              <span className="bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">05 Distribution</span>
              <span className="text-slate-500">→</span>
              <span className="bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">06 Demand</span>
              <span className="text-slate-500">→</span>
              <span className="bg-blue-600 text-white px-2.5 py-1 rounded-md font-bold shadow-xs">07 Pipeline</span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 relative z-10">
            <Link 
              href="/audit" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-sans font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 hover:shadow-lg transition-all text-center whitespace-nowrap"
            >
              <span>Request Growth Assessment</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
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
          className="bg-white border border-slate-200/90 rounded-3xl sm:rounded-[32px] p-6 sm:p-10 lg:p-14 text-slate-900 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative overflow-hidden"
        >
          <div className="lg:col-span-7 space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-sans font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Executive Profile &amp; Practice Lead
            </div>

            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-slate-900 leading-tight tracking-tight">
                Dev Raj Saini
              </h2>
              <p className="text-sm font-sans text-blue-600 font-semibold mt-1.5 uppercase tracking-wider">
                Founder &amp; Lead B2B Growth Strategist
              </p>
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Marketing founder and strategist focused on the intersection of B2B marketing, LinkedIn, thought leadership, personal branding and professional authority. Founder of <strong className="text-slate-900 font-semibold">Saini Nexus</strong> (B2B Demand &amp; Pipeline Growth) and <strong className="text-slate-900 font-semibold">Saini Prime</strong> (Executive Authority &amp; Positioning). Based in Jaipur, Rajasthan, serving India &amp; global B2B markets.
            </p>

            <div className="flex flex-wrap gap-2.5 text-xs font-sans text-slate-700 font-medium pt-1">
              <span className="inline-flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                Jaipur, Rajasthan, India
              </span>
              <span className="inline-flex items-center gap-1.5 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 text-blue-700">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
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

          {/* Founder photo with clean modern border */}
          <div className="lg:col-span-5 flex justify-center relative z-10">
            <div className="relative p-2 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-md">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden bg-slate-100">
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
