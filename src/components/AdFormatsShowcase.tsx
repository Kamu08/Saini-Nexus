"use client";

import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowUpRight, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Mic2, 
  Zap, 
  Target, 
  TrendingUp,
  Layers
} from "lucide-react";

export function AdFormatsShowcase() {
  const formats = [
    {
      title: "Thought Leader Ads",
      tagline: "Founder & Executive Sponsorship",
      icon: "🎙️",
      stat: "3.2x Higher CTR",
      statDesc: "vs standard corporate image ads",
      description: "Sponsor high-conviction posts directly from your CEO or founder profile into verified buying committees for instant trust.",
      href: "/services/linkedin-ads-thought-leader-ads"
    },
    {
      title: "Document & PDF Carousels",
      tagline: "Zero-Gated In-Feed Playbooks",
      icon: "📄",
      stat: "4.8x Higher Saves",
      statDesc: "dense technical breakdowns",
      description: "Deliver multi-slide teardowns, architectural blueprints, and benchmarks directly inside the buyer's LinkedIn feed with zero friction.",
      href: "/services/b2b-demand-generation"
    },
    {
      title: "1-Click Lead Gen Forms",
      tagline: "High-Intent Mobile & Desktop Capture",
      icon: "⚡",
      stat: "18.4% Completion",
      statDesc: "verified work profile data",
      description: "Native in-feed forms that pull verified business email addresses, seniority, and budget requirements in a single click.",
      href: "/services/b2b-lead-pipeline-generation"
    },
    {
      title: "Matched Account ABM",
      tagline: "Named Enterprise Account Lists",
      icon: "🎯",
      stat: "-46% Wasted Spend",
      statDesc: "strict negative title filters",
      description: "Target named high-ACV company domains, surrounding the CFO, CTO, and VP simultaneously with role-specific creative.",
      href: "/services/account-based-marketing"
    }
  ];

  return (
    <section className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Creative Advertising Formats</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            High-Converting LinkedIn Ad Formats We Deploy
          </h3>
          <p className="text-slate-600 text-sm mt-1 max-w-xl font-normal">
            We move beyond generic stock banners to engineer high-trust native creative formats that enterprise buyers respect.
          </p>
        </div>

        <Link
          href="/services/linkedin-ads-thought-leader-ads"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 text-xs font-semibold shadow-xs hover:shadow-sm transition-all w-fit shrink-0"
        >
          <span>Explore LinkedIn Ads Service</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {formats.map((fmt, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 flex flex-col justify-between border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl p-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                  {fmt.icon}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-semibold uppercase tracking-wider border border-blue-200">
                  {fmt.stat}
                </span>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {fmt.title}
                </h4>
                <p className="text-[11px] text-blue-600 font-semibold mt-0.5 uppercase tracking-wide">
                  {fmt.tagline}
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {fmt.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 text-[11px] font-normal">{fmt.statDesc}</span>
              <Link
                href={fmt.href}
                className="text-slate-900 font-semibold flex items-center gap-1 hover:text-blue-600 transition-colors"
              >
                <span>Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
