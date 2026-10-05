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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-10 sm:space-y-14">
      <Breadcrumbs items={[{ label: "Industries" }]} />

      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
          <Briefcase className="w-3.5 h-3.5" />
          Vertical Growth Architectures
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-black leading-[1.1] tracking-tight">
          B2B Growth Across Industries
        </h1>
        <p className="text-black/80 text-base sm:text-lg leading-relaxed font-sans">
          B2B growth doesn&apos;t follow one industry template. Our approach adapts to your market, buyers, sales cycle, competitive environment and commercial objectives.
        </p>
      </div>

      {/* Industry Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industryList.map((ind) => (
          <div
            key={ind.slug}
            className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 transition-all group"
          >
            <div className="space-y-4">
              <span className="bg-sky-50 border border-black text-black font-bold uppercase tracking-wider text-[10px] px-2.5 py-0.5 rounded-full inline-block">
                {ind.tagline}
              </span>

              <h2 className="text-2xl font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors leading-snug">
                {ind.name}
              </h2>

              <p className="text-black/75 text-xs sm:text-sm leading-relaxed">
                {ind.heroSubheadline}
              </p>

              <div className="pt-4 border-t-2 border-black/10 space-y-2">
                <span className="text-[11px] font-mono text-black/60 uppercase tracking-wider block font-bold">
                  Core Playbook Elements:
                </span>
                <ul className="space-y-1 text-xs text-black/80">
                  {ind.playbookStrategy.slice(0, 2).map((st, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#60A5FA] border border-black mt-1 shrink-0"></span>
                      <span className="font-medium">{st.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t-2 border-black/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#2563EB] font-bold">
                {ind.featuredResult.metric} <span className="font-normal text-black/60 text-[11px]">benchmark</span>
              </span>
              <Link
                href={`/industries/${ind.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-black group-hover:text-[#2563EB] font-bold uppercase tracking-wider"
              >
                <span>View Playbook</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Don't See Your Industry? */}
      <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4 shadow-[6px_6px_0px_#000000]">
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black">
          Don&apos;t See Your Industry?
        </h3>
        <p className="text-black/80 text-sm max-w-xl mx-auto leading-relaxed">
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
