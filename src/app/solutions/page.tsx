import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowUpRight, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { NexusGrowthMap } from "@/components/NexusGrowthMap";
import { SOLUTIONS } from "@/data/solutions";

export const metadata: Metadata = {
  title: "B2B Growth Solutions | Demand, ABM & Pipeline | Saini Nexus",
  description: "Explore B2B growth solutions from Saini Nexus for demand generation, high-value accounts, LinkedIn growth, executive authority and qualified pipeline.",
  alternates: {
    canonical: "https://saininexus.com/solutions",
  },
};

export default function SolutionsIndexPage() {
  const solutionList = Object.values(SOLUTIONS);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-10 sm:space-y-14">
      <Breadcrumbs items={[{ label: "Solutions" }]} />

      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
          <Sparkles className="w-3.5 h-3.5" />
          Problem-First Commercial Solutions
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-black leading-[1.1] tracking-tight">
          B2B Growth Solutions
        </h1>
        <p className="text-black/80 text-base sm:text-lg leading-relaxed font-sans">
          Every B2B growth challenge requires a different combination of strategy, channels and execution. Saini Nexus builds solutions around the problem you&apos;re trying to solve.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutionList.map((sol) => (
          <div
            key={sol.slug}
            className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 transition-all group"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3 text-xs font-mono">
                <span className="w-8 h-8 rounded-xl bg-[#60A5FA] border-2 border-black text-black flex items-center justify-center font-bold shrink-0 shadow-[2px_2px_0px_#000000]">
                  {sol.number}
                </span>
                <span className="bg-[#EFF6FF] border border-black text-black font-bold uppercase tracking-wider text-[10px] px-2.5 py-1 rounded-full text-right leading-tight max-w-[70%]">
                  {sol.tagline}
                </span>
              </div>

              <h2 className="text-2xl font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors leading-snug">
                {sol.title}
              </h2>

              <p className="text-black/75 text-xs sm:text-sm leading-relaxed">
                {sol.shortDescription}
              </p>

              <div className="pt-4 border-t-2 border-black/10 space-y-2">
                <span className="text-[11px] font-mono text-black/60 uppercase tracking-wider block font-bold">
                  Key Deliverables:
                </span>
                <ul className="space-y-1.5 text-xs text-black/80">
                  {sol.deliverables.slice(0, 3).map((del, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                      <span className="font-medium">{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t-2 border-black/10 flex items-center justify-between">
              <span className="text-xs font-mono text-black font-bold">
                {sol.metricsThatMatter[0].metric} <span className="font-normal text-black/60">impact</span>
              </span>
              <Link
                href={`/solutions/${sol.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-black group-hover:text-[#2563EB] font-bold uppercase tracking-wider"
              >
                <span>View Solution</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive System */}
      <NexusGrowthMap />

      {/* Bottom CTA */}
      <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4 shadow-[6px_6px_0px_#000000]">
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black">
          Not sure which solution matches your current growth stage?
        </h3>
        <p className="text-black/80 text-sm max-w-xl mx-auto leading-relaxed">
          We conduct comprehensive B2B positioning and pipeline audits to determine the highest-leverage growth motion for your business.
        </p>
        <div className="pt-2">
          <Link
            href="/book"
            className="neo-btn-blue inline-flex items-center justify-center px-8 py-4 rounded-full text-xs uppercase tracking-wider"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
