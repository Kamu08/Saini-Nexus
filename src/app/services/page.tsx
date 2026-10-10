import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowUpRight, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { NexusGrowthMap } from "@/components/NexusGrowthMap";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "B2B Marketing Services | LinkedIn Growth | Saini Nexus",
  description: "Explore Saini Nexus B2B marketing services including LinkedIn marketing, LinkedIn Ads, demand generation, ABM, founder-led marketing and pipeline growth.",
  alternates: {
    canonical: "https://saininexus.com/services",
  },
};

export default function ServicesIndexPage() {
  const serviceList = Object.values(SERVICES);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-10 sm:space-y-14">
      <Breadcrumbs items={[{ label: "Services" }]} />

      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          Execution Capabilities
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
          B2B Marketing &amp; Growth Services
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
          Saini Nexus provides strategy-led B2B marketing services designed to connect positioning, LinkedIn, paid distribution, demand generation and pipeline growth.
        </p>
      </div>

      {/* Services Grid (8 Services) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceList.map((srv) => (
          <div
            key={srv.slug}
            className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-blue-300 hover:shadow-md transition-all group"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3 text-xs font-mono">
                <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-bold shrink-0">
                  {srv.number}
                </span>
                <span className="bg-blue-50/70 border border-blue-100 text-blue-800 font-semibold uppercase tracking-wider text-[10px] px-2.5 py-1 rounded-full text-right leading-tight max-w-[70%]">
                  {srv.strategicRole}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                {srv.title}
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                {srv.shortDescription}
              </p>

              <div className="pt-3 border-t border-slate-100 space-y-1.5">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold">
                  Core Capabilities:
                </span>
                <ul className="space-y-1 text-xs text-slate-700">
                  {srv.capabilities.slice(0, 2).map((cap, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1 font-medium">{cap.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
              <Link
                href={`/services/${srv.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-800 group-hover:text-blue-600 font-bold uppercase tracking-wider"
              >
                <span>Explore Service</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Growth System */}
      <NexusGrowthMap />

      {/* Bottom CTA */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4 shadow-sm">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Need an integrated scope across multiple capabilities?
        </h3>
        <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed font-normal">
          We construct tailored growth retainers that blend strategic narrative, LinkedIn execution, ABM, and pipeline generation based on your target buyer dynamic.
        </p>
        <div className="pt-2">
          <Link
            href="/book"
            className="neo-btn-blue inline-flex items-center justify-center px-7 py-3.5 rounded-full text-xs uppercase tracking-wider"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
