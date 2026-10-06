import React from "react";
import Link from "next/link";
import { 
  Target, 
  ArrowUpRight, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp,
  Sparkles,
  Zap
} from "lucide-react";
import { CASE_STUDIES } from "@/data/caseStudies";

export function CaseStudyShowcase() {
  const ledgerItems = [
    {
      ...CASE_STUDIES[0],
      strategicShift: "Eliminated $220 CPL junior developer waste with 450-account ABM and CEO Thought Leader Ads.",
      primaryMetric: "$1.4M ARR",
      metricLabel: "Enterprise Pipeline",
      subMetric: "82% Sales Accepted · -46% CPL",
      formatTag: "Document Ad + Thought Leader",
    },
    {
      ...CASE_STUDIES[1],
      strategicShift: "Bypassed 18% export broker commissions using automated CNC tolerance spec carousels & direct RFQs.",
      primaryMetric: "$840K",
      metricLabel: "Contracts Won",
      subMetric: "24 Direct RFQs · +22% Margin",
      formatTag: "Technical Spec Carousel",
    },
    {
      ...CASE_STUDIES[2],
      strategicShift: "Monetized partner regulatory commentary into a predictable high-ticket corporate advisory engine.",
      primaryMetric: "₹48L ARR",
      metricLabel: "New Retainers",
      subMetric: "14 Proposals · <45d Payback",
      formatTag: "Executive Authority Posts",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
      {/* Header */}
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
            We separate vanity clicks from closed ARR outcomes. Click any engagement below to inspect the complete campaign architecture and verified numbers.
          </p>
        </div>
        <Link href="/case-studies" className="neo-btn-white w-fit shrink-0">
          <span>Explore All Teardowns</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </Link>
      </div>

      {/* Unified Master Proof Ledger (Zero Boxy Cards) */}
      <div className="bg-white border-2 border-black rounded-3xl sm:rounded-[2.5rem] shadow-[6px_6px_0px_#000000] overflow-hidden">
        
        {/* Top Ledger Terminal Status Bar */}
        <div className="bg-[#FAF7EF] border-b-2 border-black px-6 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="font-bold text-black uppercase tracking-wider">
              VERIFIED CAMPAIGN ATTRIBUTION LEDGER
            </span>
          </div>

          <div className="flex items-center gap-2 text-zinc-700">
            <span>AGGREGATE REVENUE PIPELINE:</span>
            <strong className="text-black font-extrabold bg-[#60A5FA] px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_#000000]">
              $2.24M+ ARR
            </strong>
          </div>
        </div>

        {/* The 3 Interactive Ledger Rows */}
        <div className="divide-y-2 divide-black/15">
          {ledgerItems.map((item, index) => (
            <Link
              key={item.slug}
              href={`/case-studies/${item.slug}`}
              className="group block px-6 sm:px-8 py-6 sm:py-8 hover:bg-[#EFF6FF] transition-all cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center">
                
                {/* 1. Client & Industry (4 Cols on desktop) */}
                <div className="lg:col-span-4 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#60A5FA] text-black font-extrabold uppercase text-[11px] font-mono border border-black shadow-[1px_1px_0px_#000000]">
                      {item.clientCode}
                    </span>
                    <span className="text-xs font-mono font-bold text-zinc-500 uppercase">
                      {item.industry.split("/")[0].trim()}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors tracking-tight leading-snug">
                    {item.clientName}
                  </h3>

                  <p className="text-xs font-mono text-zinc-500">
                    {item.market} · <span className="text-zinc-700 font-semibold">{item.timeline}</span>
                  </p>
                </div>

                {/* 2. The Strategic Shift / Core Angle (4 Cols on desktop) */}
                <div className="lg:col-span-4 space-y-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2563EB] block">
                    Strategic Execution Shift:
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed font-medium">
                    {item.strategicShift}
                  </p>
                  <span className="inline-block text-[11px] font-mono text-zinc-500 bg-white px-2 py-0.5 rounded border border-black/20">
                    Format: {item.formatTag}
                  </span>
                </div>

                {/* 3. Primary Commercial Number (3 Cols on desktop) */}
                <div className="lg:col-span-3 space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase text-zinc-500 block">
                    {item.metricLabel}
                  </span>
                  <div className="text-3xl sm:text-4xl font-mono font-extrabold text-[#2563EB] tracking-tight leading-none">
                    {item.primaryMetric}
                  </div>
                  <span className="text-xs font-mono font-bold text-zinc-700 block mt-1">
                    {item.subMetric}
                  </span>
                </div>

                {/* 4. Action Arrow (1 Col on desktop) */}
                <div className="lg:col-span-1 flex justify-end">
                  <span className="w-11 h-11 rounded-full bg-white group-hover:bg-[#60A5FA] border-2 border-black flex items-center justify-center text-black shadow-[2px_2px_0px_#000000] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all shrink-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Ledger Footer Bar */}
        <div className="bg-[#FAF7EF] border-t-2 border-black px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-700 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Attribution Guarantee: All metrics audited directly against closed sales pipeline, never vanity impressions.
            </span>
          </div>

          <Link
            href="/case-studies"
            className="text-xs font-mono font-bold text-black hover:text-[#2563EB] inline-flex items-center gap-1.5 transition-colors shrink-0"
          >
            <span>Read Complete Teardowns in Campaign Lab</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
