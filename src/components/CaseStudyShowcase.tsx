import React from "react";
import Link from "next/link";
import { 
  Target, 
  ArrowUpRight, 
  ArrowRight, 
  TrendingUp,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { CASE_STUDIES } from "@/data/caseStudies";

export function CaseStudyShowcase() {
  const showcaseItems = [
    {
      ...CASE_STUDIES[0],
      tagline: "Scaled from junior ad clicks to verified enterprise buyer pipeline with account-based orchestration.",
      primaryMetric: "$1.4M ARR",
      metricLabel: "Pipeline Generated",
      secondaryBadge: "82% Sales Accepted · -46% CPL",
    },
    {
      ...CASE_STUDIES[1],
      tagline: "Bypassed 18% export broker fees to secure direct OEM supply contracts across US, UK & Germany.",
      primaryMetric: "$840K",
      metricLabel: "Contracts Won",
      secondaryBadge: "24 Direct RFQs · +22% Margin",
    },
    {
      ...CASE_STUDIES[2],
      tagline: "Turned partner regulatory commentary into a predictable high-ticket advisory acquisition engine.",
      primaryMetric: "₹48L ARR",
      metricLabel: "New Annual Retainers",
      secondaryBadge: "14 Proposals · <45d CAC Payback",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
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
            We separate vanity clicks from closed-won revenue. Click any case below to inspect the full campaign teardown, creative specimens, and verified data.
          </p>
        </div>
        <Link href="/case-studies" className="neo-btn-white w-fit shrink-0">
          <span>View All Case Studies</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </Link>
      </div>

      {/* 3-Column Minimalist High-Craft Preview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {showcaseItems.map((item) => (
          <Link
            key={item.slug}
            href={`/case-studies/${item.slug}`}
            className="group bg-white border-2 border-black rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[4px_4px_0px_#000000] hover:shadow-[7px_7px_0px_#000000] hover:-translate-y-1 transition-all"
          >
            <div className="space-y-4">
              {/* Top metadata pill strip */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#60A5FA] text-black font-extrabold uppercase text-[11px] font-mono border-2 border-black shadow-[1.5px_1.5px_0px_#000000]">
                    {item.clientCode}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#FAF7EF] border border-black/40 font-bold uppercase text-[10px] font-mono text-zinc-700">
                    {item.industry.split("/")[0].trim()}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-zinc-500 font-semibold bg-zinc-100 px-2.5 py-0.5 rounded-full">
                  {item.timeline}
                </span>
              </div>

              {/* Title & One-line context */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors tracking-tight leading-snug">
                  {item.clientName}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-medium mt-2 leading-relaxed">
                  {item.tagline}
                </p>
              </div>

              {/* High-Impact Proof Number Block */}
              <div className="bg-[#EFF6FF] rounded-2xl p-4 sm:p-5 border-2 border-black shadow-[2px_2px_0px_#000000] space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase text-zinc-600 block">
                  {item.metricLabel}
                </span>
                <div className="text-3xl sm:text-4xl font-mono font-extrabold text-[#2563EB] tracking-tight leading-none">
                  {item.primaryMetric}
                </div>
                <div className="text-[11px] font-mono font-bold text-zinc-700 pt-1 border-t border-black/10">
                  {item.secondaryBadge}
                </div>
              </div>
            </div>

            {/* Bottom Footer Link */}
            <div className="pt-5 mt-5 border-t-2 border-black/10 flex items-center justify-between text-xs font-mono">
              <span className="font-bold text-black group-hover:text-[#2563EB] transition-colors">
                Inspect Teardown &amp; Data
              </span>
              <span className="p-2 rounded-full bg-[#FAF7EF] group-hover:bg-[#60A5FA] border-2 border-black shadow-[1.5px_1.5px_0px_#000000] text-black transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Discovery Strip */}
      <div className="bg-[#FAF7EF] border-2 border-black rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[2px_2px_0px_#000000]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#60A5FA] border-2 border-black flex items-center justify-center text-black shrink-0 shadow-[1px_1px_0px_#000000]">
            <Sparkles className="w-4 h-4" />
          </div>
          <p className="text-xs sm:text-sm text-zinc-800 font-medium">
            Looking for complete creative copy, spend profiles, and raw ad benchmarks?
          </p>
        </div>
        <Link 
          href="/case-studies"
          className="text-xs font-mono font-bold text-black hover:text-[#2563EB] transition-colors inline-flex items-center gap-1.5 shrink-0 bg-white px-3.5 py-1.5 rounded-xl border border-black shadow-[1.5px_1.5px_0px_#000000]"
        >
          <span>Explore All 3 Teardowns</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
