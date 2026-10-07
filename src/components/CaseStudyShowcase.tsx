"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Target, 
  ArrowUpRight, 
  ArrowRight, 
  FileText, 
  ThumbsUp, 
  MessageSquare, 
  Share2, 
  Send, 
  Download, 
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { CASE_STUDIES } from "@/data/caseStudies";

export function CaseStudyShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);

  const campaigns = [
    {
      ...CASE_STUDIES[0],
      tabLabel: "Enterprise B2B SaaS",
      badgeColor: "bg-[#60A5FA]",
      heroTitle: "CloudScale Systems: From Low-Intent Junior Clicks to ₹38L Enterprise Pipeline",
      shortSummary: "Replaced generic 'Book Demo' forms with native un-gated technical architecture teardowns and CEO Thought Leader Ads targeting 450 verified enterprise accounts.",
      primaryNumber: "₹38L ARR",
      primaryLabel: "Verified Qualified Pipeline",
      statA: { label: "Sales Accepted", val: "82%" },
      statB: { label: "CPL Reduction", val: "-46%" },
      slideCount: "8 Pages",
      documentType: "Technical PDF Architecture Teardown",
      slideTheme: {
        bg: "bg-slate-950",
        border: "border-slate-800",
        accent: "text-[#60A5FA]",
        badgeBg: "bg-[#2563EB]/20 text-[#60A5FA] border-[#2563EB]/40",
        pill: "4-POINT PRE-FLIGHT AUDIT",
        hook: "Why 70% of Enterprise Cloud Migration Budgets Overrun by Month 3",
        hookSub: "And the architectural controls required before signing tier-1 contract proposals.",
        metricsFoot: "18.4% Lead Form Completion · 2.84% CTR"
      }
    },
    {
      ...CASE_STUDIES[1],
      tabLabel: "Industrial Manufacturing & Export",
      badgeColor: "bg-[#FDE047]",
      heroTitle: "Apex Heavy Precision: Bypassing Export Brokers for Direct OEM Supply Contracts",
      shortSummary: "Eliminated 18% export broker commissions by serving automated CNC tolerance capability carousels directly to European & US VP of Supply Chain titles.",
      primaryNumber: "₹42L",
      primaryLabel: "Closed Annual Contracts",
      statA: { label: "Direct RFQs", val: "24 Leads" },
      statB: { label: "Margin Gain", val: "+22%" },
      slideCount: "6 Pages",
      documentType: "Engineering Tolerance & QA Dossier",
      slideTheme: {
        bg: "bg-zinc-950",
        border: "border-zinc-800",
        accent: "text-[#FDE047]",
        badgeBg: "bg-amber-400/20 text-[#FDE047] border-amber-400/40",
        pill: "ISO 9001 / AS9100 CAPABILITY DOSSIER",
        hook: "Sub-Micron CNC Tolerances at 32% Lower Landed Cost: Direct Indian Sourcing",
        hookSub: "Verifiable metallurgical tolerances, automated CMM inspection, and direct OEM procurement.",
        metricsFoot: "4.8x Document Save Rate · ₹3,800 Cost Per RFQ"
      }
    },
    {
      ...CASE_STUDIES[2],
      tabLabel: "High-Ticket Advisory & FinTech",
      badgeColor: "bg-[#86EFAC]",
      heroTitle: "Novus Advisory Partners: Executive Thought Leadership to ₹18L Annual Retainers",
      shortSummary: "Monetized Managing Partner intellectual authority into contrarian regulatory teardowns, generating direct corporate advisory inbound inquiries.",
      primaryNumber: "₹18L ARR",
      primaryLabel: "New Annual Retainers Won",
      statA: { label: "Proposals Sent", val: "14 Retainers" },
      statB: { label: "CAC Payback", val: "<45 Days" },
      slideCount: "6 Pages",
      documentType: "Regulatory Flowchart & Risk Audit",
      slideTheme: {
        bg: "bg-[#0b1329]",
        border: "border-slate-800",
        accent: "text-[#86EFAC]",
        badgeBg: "bg-emerald-500/20 text-[#86EFAC] border-emerald-500/40",
        pill: "2025 REGULATORY COMPLIANCE MEMO",
        hook: "The 5 Hidden Regulatory Exposure Points in Cross-Border Payment Rails",
        hookSub: "A diagnostic framework for banking executives and cross-border fintech compliance leads.",
        metricsFoot: "38 C-Level Consultations · 3.42% CTR"
      }
    }
  ];

  const current = campaigns[activeIdx];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
      {/* Section Header */}
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
            Inspect the actual in-market ad assets, creative hooks, and verifiable revenue outcomes. Click to explore the complete campaign teardown.
          </p>
        </div>

        <Link href="/case-studies" className="neo-btn-white w-fit shrink-0">
          <span>View All Case Studies</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </Link>
      </div>

      {/* Sector Switcher Tabs (3 Clean Tactile Pills) */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {campaigns.map((item, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={item.slug}
              onClick={() => setActiveIdx(idx)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-mono text-xs sm:text-sm font-bold border-2 border-black transition-all cursor-pointer shrink-0 flex items-center gap-2 ${
                isActive
                  ? "bg-[#60A5FA] text-black shadow-[3px_3px_0px_#000000] -translate-y-0.5"
                  : "bg-white text-zinc-700 hover:bg-zinc-50 shadow-[1.5px_1.5px_0px_#000000]"
              }`}
            >
              <span className="text-[11px] uppercase opacity-75 font-mono">[{item.clientCode}]</span>
              <span>{item.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Spotlight Stage: Visual Mockup (Left) + High-Impact Proof (Right) */}
      <div className="bg-white border-2 border-black rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-[6px_6px_0px_#000000] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left 6 Columns: Realistic LinkedIn Document Ad Mockup */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="bg-[#FAF7EF] border-2 border-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_#000000] space-y-3">
            
            {/* LinkedIn Post Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-black/40 bg-zinc-200 shrink-0">
                  <Image
                    src="/team/dev-raj-saini.jpg"
                    alt="Dev Raj Saini"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-black font-sans leading-none">Dev Raj Saini</span>
                    <span className="text-[10px] text-zinc-500 font-mono">• 1st</span>
                  </div>
                  <p className="text-[10px] text-zinc-600 font-sans truncate max-w-[200px] sm:max-w-xs">
                    Founder at Saini Nexus • B2B Demand Architecture
                  </p>
                  <span className="text-[9px] font-mono text-zinc-500">Promoted • Paid Campaign</span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded bg-white text-[10px] font-mono font-bold text-zinc-700 border border-black/20">
                IN-FEED AD
              </span>
            </div>

            {/* Document Preview Canvas (The Actual Slide Asset Mockup) */}
            <div className={`${current.slideTheme.bg} ${current.slideTheme.border} border-2 rounded-xl p-5 sm:p-6 text-white space-y-4 shadow-inner relative overflow-hidden min-h-[220px] flex flex-col justify-between`}>
              
              {/* Subtle architectural watermark */}
              <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-6xl font-black pointer-events-none">
                {current.clientCode}
              </div>

              {/* Slide Header */}
              <div className="flex items-center justify-between text-xs font-mono relative z-10">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${current.slideTheme.badgeBg}`}>
                  {current.slideTheme.pill}
                </span>
                <span className="text-zinc-400 text-[11px] font-bold bg-white/10 px-2 py-0.5 rounded">
                  1 / {current.slideCount}
                </span>
              </div>

              {/* Slide Headline / Hook */}
              <div className="space-y-2 relative z-10 py-2">
                <h4 className="text-lg sm:text-xl font-serif font-bold text-white tracking-tight leading-snug">
                  &ldquo;{current.slideTheme.hook}&rdquo;
                </h4>
                <p className="text-xs text-zinc-300 font-sans leading-relaxed line-clamp-2">
                  {current.slideTheme.hookSub}
                </p>
              </div>

              {/* Slide Footer */}
              <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[10px] font-mono text-zinc-400 relative z-10">
                <span className="flex items-center gap-1.5 text-zinc-300 font-bold">
                  <FileText className="w-3.5 h-3.5 text-[#60A5FA]" />
                  <span>{current.documentType}</span>
                </span>
                <span className="text-white font-bold bg-white/20 px-2 py-0.5 rounded flex items-center gap-1">
                  <span>Swipe</span>
                  <ChevronRight className="w-3 h-3" />
                </span>
              </div>

            </div>

            {/* Social Engagement Stats Strip */}
            <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-zinc-600 border-t border-black/10">
              <span className="font-semibold text-zinc-800">
                {current.slideTheme.metricsFoot}
              </span>
              <div className="flex items-center gap-3 text-zinc-500">
                <span className="flex items-center gap-1"><ThumbsUp className="w-3 h-3" /> Like</span>
                <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> Comment</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right 6 Columns: Context, Verified Results & 1-Click Dossier */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#60A5FA] text-black font-extrabold uppercase text-xs font-mono border-2 border-black shadow-[1.5px_1.5px_0px_#000000]">
              {current.clientCode}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#FAF7EF] border border-black/30 font-bold uppercase text-xs font-mono text-zinc-800">
              {current.industry}
            </span>
            <span className="text-xs font-mono text-zinc-500 font-semibold bg-zinc-100 px-2.5 py-1 rounded-full">
              {current.timeline}
            </span>
          </div>

          {/* Headline & Story */}
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black tracking-tight leading-snug">
              {current.heroTitle}
            </h3>
            <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal">
              {current.shortSummary}
            </p>
          </div>

          {/* Big Commercial Impact Box */}
          <div className="bg-[#EFF6FF] rounded-2xl p-5 sm:p-6 border-2 border-black shadow-[3px_3px_0px_#000000] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase font-bold text-zinc-600">
                {current.primaryLabel}
              </span>
              <span className="text-[10px] font-mono font-bold text-[#2563EB] bg-white px-2 py-0.5 rounded-full border border-blue-200">
                Audited Closed-Won
              </span>
            </div>

            <div className="text-4xl sm:text-5xl font-mono font-extrabold text-[#2563EB] tracking-tight leading-none">
              {current.primaryNumber}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-black/10 text-xs font-mono">
              <div className="bg-white p-2.5 rounded-xl border border-black/20">
                <span className="text-zinc-500 block text-[10px] font-bold uppercase">{current.statA.label}</span>
                <strong className="text-black text-base font-extrabold">{current.statA.val}</strong>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-black/20">
                <span className="text-zinc-500 block text-[10px] font-bold uppercase">{current.statB.label}</span>
                <strong className="text-emerald-700 text-base font-extrabold">{current.statB.val}</strong>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href={`/case-studies/${current.slug}`}
              className="neo-btn-blue text-xs font-mono justify-center sm:justify-start"
            >
              <span>Inspect Complete Campaign Teardown &amp; Data</span>
              <ArrowRight className="w-4 h-4 ml-2 shrink-0" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
