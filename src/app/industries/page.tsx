import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Briefcase, ArrowUpRight, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { INDUSTRIES } from "@/data/industries";

export const metadata: Metadata = {
  title: "B2B Marketing Across Industries | Saini Nexus",
  description: "Saini Nexus adapts B2B marketing, LinkedIn growth, demand generation and advertising strategies to different industries, markets and buying environments.",
  alternates: {
    canonical: "https://saininexus.com/industries",
  },
};

export default function IndustriesPage() {
  const industryList = Object.values(INDUSTRIES);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16 space-y-10 sm:space-y-14">
      <Breadcrumbs items={[{ label: "Industries" }]} />

      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
          <Briefcase className="w-3.5 h-3.5" />
          Vertical Growth Architectures
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
          B2B Growth Across Industries
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
          B2B growth doesn&apos;t follow one industry template. Our approach adapts to your market, buyers, sales cycle, competitive environment and commercial objectives.
        </p>
      </div>

      {/* Industry Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industryList.map((ind) => (
          <div
            key={ind.slug}
            className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-blue-300 hover:shadow-md transition-all group"
          >
            <div className="space-y-4">
              <span className="bg-blue-50 border border-blue-100 text-blue-700 font-semibold uppercase tracking-wider text-[10px] px-2.5 py-0.5 rounded-full inline-block">
                {ind.tagline}
              </span>

              <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                {ind.name}
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {ind.heroSubheadline}
              </p>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-bold">
                  Core Playbook Elements:
                </span>
                <ul className="space-y-1 text-xs text-slate-700">
                  {ind.playbookStrategy.slice(0, 2).map((st, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-1 shrink-0"></span>
                      <span className="font-medium">{st.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono text-blue-600 font-bold">
                {ind.featuredResult.metric} <span className="font-normal text-slate-400 text-[11px]">benchmark</span>
              </span>
              <Link
                href={`/industries/${ind.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-800 group-hover:text-blue-600 font-bold uppercase tracking-wider"
              >
                <span>View Playbook</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Don't See Your Industry? */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4 shadow-sm">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Don&apos;t See Your Industry?
        </h3>
        <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed font-normal">
          Our B2B growth frameworks can be adapted to different industries and business models. Tell us about your market and we&apos;ll explore the right approach.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="neo-btn-blue inline-flex items-center justify-center px-8 py-4 rounded-full text-xs uppercase tracking-wider"
          >
            <span>Discuss Your Market</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
