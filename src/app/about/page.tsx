import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { 
  Building2, 
  Users, 
  Target, 
  CheckCircle2, 
  Sparkles, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  ArrowUpRight, 
  Linkedin, 
  BookOpen,
  Briefcase,
  Layers
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { JsonLd, getOrganizationSchema } from "@/components/JsonLd";
import { TeamGrid } from "@/components/TeamGrid";

export const metadata: Metadata = {
  title: "About Saini Nexus | Leadership, Team & Growth Philosophy",
  description: "Learn about Saini Nexus, Founder Dev Raj Saini, our 18-member B2B practice in Jaipur, Rajasthan, and our commercial pipeline methodology.",
  alternates: {
    canonical: "https://saininexus.com/about",
  },
};

export default function AboutPage() {
  const organizationSchema = getOrganizationSchema();
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Dev Raj Saini",
      jobTitle: "Founder & Lead B2B Growth Strategist",
      worksFor: [
        {
          "@type": "Organization",
          name: "Saini Nexus",
          url: "https://saininexus.com",
        },
        {
          "@type": "Organization",
          name: "Saini Prime",
          url: "https://sainiprime.com",
        }
      ],
      description: "Founder of Saini Nexus and Saini Prime, specializing in B2B LinkedIn Marketing, Full-Funnel LinkedIn Ads, Executive Thought Leadership, and Demand Generation architecture.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        addressCountry: "India",
      },
      sameAs: [
        "https://www.linkedin.com/in/devrajsaini",
      ]
    }
  };

  return (
    <div className="w-full pb-24 overflow-x-clip space-y-16 sm:space-y-24">
      <JsonLd data={organizationSchema} />
      <JsonLd data={profilePageSchema} />

      {/* ========================================================= */}
      {/* 01. HERO: PHILOSOPHY & COMPANY VISION                     */}
      {/* ========================================================= */}
      <section className="pt-28 sm:pt-32 lg:pt-40 pb-10 sm:pb-16 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          
          <Breadcrumbs items={[{ label: "About Saini Nexus" }]} />

          <div className="max-w-4xl space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-slate-900 text-white text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] max-w-full">
              <Sparkles className="w-3 h-3 text-[#38A9EB] shrink-0" />
              <span className="truncate">Saini Nexus // Company Dossier &amp; Practice</span>
            </div>

            <h1 className="text-3xl sm:text-6xl lg:text-7xl font-sans font-black text-slate-900 leading-[1.08] sm:leading-[1.05] tracking-tight">
              Building Predictable <br className="hidden sm:inline" />
              <span className="text-[#1572B8]">B2B Growth Engines.</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-3xl">
              Saini Nexus is a B2B marketing and LinkedIn demand generation firm headquartered in Jaipur, Rajasthan. We help mid-market and enterprise companies penetrate verified buying committees, build category authority, and generate sales-accepted pipeline through rigorous strategy and full-funnel execution.
            </p>
          </div>

          {/* Key Operational Metrics Ribbon */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border border-slate-200 bg-[#FAFCFF]">
            <div className="p-4 sm:p-6 border-b lg:border-b-0 border-r border-slate-200">
              <div className="text-2xl sm:text-4xl font-sans font-black text-slate-900">18</div>
              <div className="text-[9px] sm:text-[10px] text-[#1572B8] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-bold mt-1">Specialists</div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-normal mt-0.5 sm:mt-1">Dedicated delivery force</p>
            </div>
            <div className="p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-slate-200">
              <div className="text-2xl sm:text-4xl font-sans font-black text-slate-900">5</div>
              <div className="text-[9px] sm:text-[10px] text-[#1572B8] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-bold mt-1">Functional Pods</div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-normal mt-0.5 sm:mt-1">Strategy, Media, Copy, Creative, Tech</p>
            </div>
            <div className="p-4 sm:p-6 border-r border-slate-200">
              <div className="text-2xl sm:text-4xl font-sans font-black text-slate-900">Jaipur</div>
              <div className="text-[9px] sm:text-[10px] text-[#1572B8] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-bold mt-1">Headquarters</div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-normal mt-0.5 sm:mt-1">Rajasthan, India base</p>
            </div>
            <div className="p-4 sm:p-6">
              <div className="text-2xl sm:text-4xl font-sans font-black text-slate-900">Global</div>
              <div className="text-[9px] sm:text-[10px] text-[#1572B8] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-bold mt-1">Market Reach</div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-normal mt-0.5 sm:mt-1">India, US, UK, Middle East</p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 02. CORE OPERATING PRINCIPLES                             */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
            <Target className="w-3.5 h-3.5 text-[#1572B8]" />
            Operating Doctrine
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-slate-900 tracking-tight">
            How We Operate
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Three non-negotiable principles that govern every campaign, media dollar, and positioning framework we deploy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-[#1572B8] hover:shadow-xl transition-all group relative">
            <div className="absolute top-0 left-0 w-0 h-1 bg-[#1572B8] group-hover:w-full transition-all duration-500" />
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold text-[#1572B8] tracking-widest block">
                PRINCIPLE // 01
              </span>
              <h3 className="text-xl font-sans font-black text-slate-900 group-hover:text-[#1572B8] transition-colors leading-snug">
                Commercial Pipeline Over Vanity
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                We measure marketing success strictly by Sales-Accepted Pipeline (SAR) and customer acquisition cost (CAC)—never vanity impressions or social applause.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-[#1572B8] hover:shadow-xl transition-all group relative">
            <div className="absolute top-0 left-0 w-0 h-1 bg-[#1572B8] group-hover:w-full transition-all duration-500" />
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold text-[#1572B8] tracking-widest block">
                PRINCIPLE // 02
              </span>
              <h3 className="text-xl font-sans font-black text-slate-900 group-hover:text-[#1572B8] transition-colors leading-snug">
                Buying Committees, Not Single Leads
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                Enterprise deals require consensus across 6–10 stakeholders. We orchestrate messaging for Economic Buyers, Technical Evaluators, and Champions simultaneously.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-[#1572B8] hover:shadow-xl transition-all group relative">
            <div className="absolute top-0 left-0 w-0 h-1 bg-[#1572B8] group-hover:w-full transition-all duration-500" />
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold text-[#1572B8] tracking-widest block">
                PRINCIPLE // 03
              </span>
              <h3 className="text-xl font-sans font-black text-slate-900 group-hover:text-[#1572B8] transition-colors leading-snug">
                Strategy Before Execution
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                We reject random posting and disconnected tactics. Every campaign begins with rigorous ICP negative layering, positioning blueprints, and commercial proof mapping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 03. FOUNDER LEADERSHIP: DEV RAJ SAINI                     */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 p-6 sm:p-12 lg:p-14 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#1572B8]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left: Bio & Details (7 cols) */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-slate-50 border border-slate-200 text-[#1572B8] text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em]">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>Founder Leadership Dossier</span>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="text-2xl sm:text-5xl font-sans font-black text-slate-900 tracking-tight leading-tight">
                  Dev Raj Saini
                </h2>
                <p className="text-[11px] sm:text-sm text-slate-500 font-sans font-bold uppercase tracking-wider">
                  Founder &amp; Lead B2B Growth Strategist • Certified by LinkedIn Marketing Labs
                </p>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Operating out of Jaipur, Rajasthan, Dev Raj Saini works directly with founders, CEOs, and revenue leaders across SaaS, industrial manufacturing, consulting, and enterprise IT. He architects integrated demand engines that transform intellectual property into high-converting LinkedIn distribution.
              </p>

              {/* Verified Badges */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-3 pt-1 text-[11px] font-sans font-bold text-slate-700">
                <div className="flex items-center gap-2 bg-[#FAFCFF] px-3 sm:px-3.5 py-2 border border-slate-200 w-full sm:w-auto">
                  <ShieldCheck className="w-4 h-4 text-[#1572B8] shrink-0" />
                  <span>LinkedIn Strategy &amp; Ads Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-[#FAFCFF] px-3 sm:px-3.5 py-2 border border-slate-200 w-full sm:w-auto">
                  <MapPin className="w-4 h-4 text-[#1572B8] shrink-0" />
                  <span>Jaipur, Rajasthan, India</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href="https://www.linkedin.com/in/devrajsaini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 bg-[#1572B8] hover:bg-slate-900 text-white text-xs font-sans font-bold uppercase tracking-wider transition-colors shadow-sm text-center"
                >
                  <Linkedin className="w-4 h-4 shrink-0" />
                  <span>Connect on LinkedIn</span>
                </a>
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 bg-slate-50 hover:bg-white text-slate-900 border border-slate-200 hover:border-[#1572B8] text-xs font-sans font-bold uppercase tracking-wider transition-colors shadow-xs text-center"
                >
                  <span>Book Strategy Call</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </div>

            {/* Right: Portrait (5 cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-last">
              <div className="relative w-48 sm:w-64 md:w-72 aspect-square border-4 border-slate-200 p-2 bg-slate-50 shadow-lg">
                <div className="w-full h-full relative overflow-hidden bg-slate-200 group">
                  <Image
                    src="/team/dev-raj-saini.jpg"
                    alt="Dev Raj Saini — Founder, Saini Nexus"
                    fill
                    sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 288px"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    style={{ objectPosition: "center 15%" }}
                    priority
                  />
                  <div className="absolute inset-0 bg-[#1572B8]/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 04. DUAL-VENTURE ARCHITECTURE (SAINI NEXUS + SAINI PRIME) */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-200 text-[#1572B8] text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
            <Building2 className="w-3.5 h-3.5" />
            <span>The Saini Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-slate-900 tracking-tight">
            Dual-Venture B2B Architecture
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Modern enterprise acquisition requires two complementary vectors: predictable commercial pipeline for the corporate brand, and authoritative positioning for the executive leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Saini Nexus */}
          <div className="border border-slate-200 p-6 sm:p-10 bg-white hover:border-[#1572B8] transition-colors relative shadow-xs">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#1572B8]" />
              <h3 className="text-xl sm:text-2xl font-sans font-black text-slate-900 tracking-tight">
                Saini Nexus
              </h3>
            </div>
            <p className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#1572B8] mb-3">
              Commercial Pipeline &amp; Demand Engine
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal mb-5 sm:mb-6">
              The flagship B2B demand generation firm. We execute full-funnel LinkedIn Ads, ABM, and commercial qualification engines for high-ticket SaaS, industrial exporters, and advisory practices.
            </p>
            <ul className="space-y-2.5 sm:space-y-3 pt-4 border-t border-slate-100 text-xs sm:text-sm font-sans font-medium text-slate-700 mb-6 sm:mb-8">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1572B8] shrink-0 mt-0.5" />
                <span>Demand Generation &amp; 95/5 Rule Implementation</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1572B8] shrink-0 mt-0.5" />
                <span>Full-Funnel LinkedIn Advertising Architecture</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1572B8] shrink-0 mt-0.5" />
                <span>Sales-Accepted Pipeline (SAR) Attribution</span>
              </li>
            </ul>
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[#1572B8] hover:text-slate-900 transition-colors"
            >
              <span>Explore Nexus Capabilities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: Saini Prime */}
          <div className="border border-slate-200 p-6 sm:p-10 bg-[#FAFCFF] hover:border-slate-400 transition-colors relative shadow-xs">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-slate-900" />
              <h3 className="text-xl sm:text-2xl font-sans font-black text-slate-900 tracking-tight">
                Saini Prime
              </h3>
            </div>
            <p className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-3">
              Executive Positioning &amp; Personal Authority
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal mb-5 sm:mb-6">
              The executive authority studio. Saini Prime transforms founders, managing partners, and practice leads into recognized category leaders through ghostwritten intellectual property and Thought Leader Ads.
            </p>
            <ul className="space-y-2.5 sm:space-y-3 pt-4 border-t border-slate-200 text-xs sm:text-sm font-sans font-medium text-slate-700 mb-6 sm:mb-8">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                <span>Founder-Led Marketing &amp; Executive Voice</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                <span>Contrarian Industry POV &amp; Ghostwriting</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                <span>Sponsored Thought Leader Ad Distribution</span>
              </li>
            </ul>
            <a 
              href="https://sainiprime.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-slate-900 hover:text-[#1572B8] transition-colors"
            >
              <span>Explore Saini Prime</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 05. THE 18-MEMBER PRACTICE & DELIVERY TEAM                */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-slate-50 border border-slate-200 text-slate-700 text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em]">
            <Users className="w-3.5 h-3.5 text-[#1572B8]" />
            <span>Delivery Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-sans font-black text-slate-900 tracking-tight">
            The 18-Member Multidisciplinary Team
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-normal leading-relaxed">
            Our practice operates across five synchronized pods: Campaign Strategy, Performance Media Buying, Technical Copywriting, Creative Architecture, and Analytics. We deploy a unified team on every client engagement.
          </p>
        </div>

        {/* The Team Grid Component */}
        <TeamGrid />
      </section>

      {/* ========================================================= */}
      {/* 06. STRATEGY CALL / CONSULTATION CTA                      */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-6">
        <div className="bg-[#0B3C7E] text-white p-6 sm:p-12 lg:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 shadow-xl relative overflow-hidden">
          
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          />

          <div className="relative z-10 max-w-2xl space-y-2.5 sm:space-y-3">
            <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#67C7F8] block">
              PARTNER ENGAGEMENT
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-sans font-black tracking-tight leading-tight">
              Ready to Build Your B2B Growth Architecture?
            </h2>
            <p className="text-blue-100 text-xs sm:text-base font-normal leading-relaxed">
              Schedule a strategic consultation directly with Dev Raj Saini to evaluate your current acquisition bottleneck and map out an actionable demand framework.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-white hover:bg-slate-100 text-slate-900 text-xs font-sans font-bold uppercase tracking-widest transition-colors shadow-sm text-center"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </Link>

            <Link
              href="/audit"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-black/20 hover:bg-black/35 text-white border border-white/30 hover:border-white/60 text-xs font-sans font-bold uppercase tracking-widest transition-colors text-center"
            >
              <span>Request Growth Audit</span>
              <ArrowUpRight className="w-4 h-4 text-[#67C7F8]" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
