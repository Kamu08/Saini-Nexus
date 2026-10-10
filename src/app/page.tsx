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
      <div className="w-full bg-[#60A5FA] border-y-3 border-black py-3 sm:py-3.5 shadow-[0_4px_0px_#000000]">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-2.5 text-center">
          {CAPABILITIES.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 sm:gap-5">
              <span className="font-mono text-xs sm:text-sm font-extrabold uppercase tracking-wider text-black flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-black inline-block shrink-0" />
                {item}
              </span>
              {idx < CAPABILITIES.length - 1 && (
                <span className="text-black font-mono font-bold text-sm hidden md:inline">✦</span>
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
        <div className="bg-[#FAF7EF] border-2 border-black rounded-3xl p-5 sm:p-7 shadow-[4px_4px_0px_#000000] space-y-5">
          
          {/* Header strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-black/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#60A5FA] border-2 border-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#000000]">
                <ShieldCheck className="w-5 h-5 text-black" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#2563EB] font-extrabold block">
                  Professional Credentials
                </span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-black leading-tight">
                  LinkedIn Marketing Certifications
                </h3>
                <p className="text-xs text-zinc-600 font-medium mt-0.5">
                  Saini Nexus is led by certified practitioners across LinkedIn marketing strategy, advertising fundamentals, content &amp; creative design, and marketing measurement.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-400 px-3 py-1 rounded-full w-fit shrink-0">
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
                dot: "bg-[#2563EB]"
              },
              {
                title: "Advertising Fundamentals",
                code: "Verified",
                issuer: "LinkedIn Marketing Labs",
                verifyUrl: "https://training.marketing.linkedin.com/verify/vjbijavyd84i",
                bg: "bg-white",
                dot: "bg-purple-600"
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
                className={`${cert.bg} border-2 border-black rounded-2xl p-3.5 shadow-[2px_2px_0px_#000000] hover:shadow-[4px_4px_0px_#000000] transition-all duration-150 flex items-center justify-between gap-3 group/cert`}
              >
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${cert.dot} shrink-0`} />
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider truncate">
                      {cert.code}
                    </span>
                  </div>
                  <h4 className="text-sm font-serif font-bold text-black leading-tight truncate group-hover/cert:text-[#2563EB] transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-[10px] font-mono text-zinc-600 truncate flex items-center gap-1">
                    <span>{cert.issuer}</span>
                    <span className="text-[#2563EB] font-bold">↗</span>
                  </p>
                </div>
                <div className="w-6 h-6 rounded-lg bg-[#EFF6FF] border border-black flex items-center justify-center shrink-0 group-hover/cert:bg-[#60A5FA] transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] group-hover/cert:text-black transition-colors" />
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
      {/* 03. THE 7-STAGE PIPELINE AUDIT INVITATION (LEAN CALLOUT)  */}
      {/* Clean high-converting banner directing to dedicated /audit */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7EF] border-2 border-black rounded-3xl p-6 sm:p-8 lg:p-9 shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDE047] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-extrabold shadow-[2px_2px_0px_#000000]">
              <Sparkles className="w-3.5 h-3.5" />
              The Saini Nexus Growth Architecture
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-black tracking-tight leading-snug">
              Where Is Your B2B Growth Engine Leaking Opportunities?
            </h3>
            <p className="text-zinc-700 text-sm sm:text-base font-medium leading-relaxed">
              Evaluate your buying committee coverage, content proof, and LinkedIn distribution across our 7 connected stages.
            </p>

            {/* 7-Step Mini Indicator */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] font-mono font-bold text-zinc-600">
              <span className="bg-white px-2 py-0.5 rounded border border-black/30">01 Context</span>
              <span>→</span>
              <span className="bg-white px-2 py-0.5 rounded border border-black/30">02 Positioning</span>
              <span>→</span>
              <span className="bg-white px-2 py-0.5 rounded border border-black/30">03 Proof</span>
              <span>→</span>
              <span className="bg-white px-2 py-0.5 rounded border border-black/30">04 Audience</span>
              <span>→</span>
              <span className="bg-white px-2 py-0.5 rounded border border-black/30">05 Distribution</span>
              <span>→</span>
              <span className="bg-white px-2 py-0.5 rounded border border-black/30">06 Demand</span>
              <span>→</span>
              <span className="bg-[#86EFAC] text-black px-2 py-0.5 rounded border border-black font-extrabold">07 Pipeline</span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link 
              href="/audit" 
              className="neo-btn-blue text-xs font-mono font-bold flex items-center justify-center gap-2 text-center whitespace-nowrap shadow-[3px_3px_0px_#000000]"
            >
              <span>Request Growth Assessment</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
            <span className="text-[10px] font-mono text-zinc-500 text-center">
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
      {/* 09. FINAL COMMERCIAL INTAKE: HAVE A B2B GROWTH CHALLENGE? */}
      {/* ========================================================= */}
      <div id="contact-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </div>

    </div>
  );
}
