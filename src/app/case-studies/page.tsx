import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Target, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { CaseStudiesDirectory } from "@/components/CaseStudiesDirectory";

export const metadata: Metadata = {
  title: "B2B Marketing Case Studies & Teardowns | Saini Nexus",
  description: "Explore Saini Nexus B2B marketing, LinkedIn advertising, demand generation and growth case studies with campaign strategy, execution and results.",
  alternates: {
    canonical: "https://saininexus.com/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="w-full pb-24 overflow-x-clip">
      
      {/* ========================================================= */}
      {/* 01. CLEAN AGENCY HERO                                     */}
      {/* ========================================================= */}
      <section className="pt-32 lg:pt-40 pb-12 sm:pb-16 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <Breadcrumbs items={[{ label: "Case Studies" }]} />

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-white text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
              <Target className="w-3 h-3 text-[#38A9EB]" />
              Saini Nexus // Case Studies
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-black text-slate-900 leading-[1.05] tracking-tight">
              Campaign Teardowns &amp; Outcomes.
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
              Real-world B2B demand and pipeline architectures. Tested across enterprise SaaS, precision industrial exports, FinTech advisory, and cybersecurity.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 02. CASE STUDIES DIRECTORY (CLEAN AGENCY ROWS)            */}
      {/* ========================================================= */}
      <section className="py-12 sm:py-16">
        <CaseStudiesDirectory />
      </section>

      {/* ========================================================= */}
      {/* 03. CLEAN COMMERCIAL CTA BANNER                           */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="bg-[#0B3C7E] text-white p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          
          {/* Subtle architectural dot pattern */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          />

          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#67C7F8] block">
              NEXT STEPS
            </span>
            <h2 className="text-2xl sm:text-4xl font-sans font-black tracking-tight leading-tight">
              Ready to Run an Acquisition Blueprint for Your Firm?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base font-normal leading-relaxed">
              We construct tailored B2B growth architectures that blend strategic narrative, LinkedIn execution, ABM, and pipeline generation.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white hover:bg-slate-100 text-slate-900 text-xs font-sans font-bold uppercase tracking-widest transition-colors shadow-sm text-center"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </Link>

            <Link
              href="/audit"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-black/20 hover:bg-black/35 text-white border border-white/30 hover:border-white/60 text-xs font-sans font-bold uppercase tracking-widest transition-colors text-center"
            >
              <span>Request Assessment</span>
              <ArrowUpRight className="w-4 h-4 text-[#67C7F8]" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
