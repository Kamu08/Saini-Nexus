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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold mb-3 shadow-[2px_2px_0px_#000000]">
            <Sparkles className="w-3.5 h-3.5" />
            Creative Advertising Formats
          </div>
          <h3 className="text-2xl sm:text-4xl font-serif font-bold text-black tracking-tight">
            High-Converting LinkedIn Ad Formats We Deploy
          </h3>
          <p className="text-zinc-700 text-sm mt-1 max-w-xl font-medium">
            We move beyond generic stock banners to engineer high-trust native creative formats that enterprise buyers respect.
          </p>
        </div>

        <Link
          href="/services/linkedin-ads-thought-leader-ads"
          className="neo-btn-white w-fit shrink-0"
        >
          <span>Explore LinkedIn Ads Service</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {formats.map((fmt, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 flex flex-col justify-between border-2 border-black shadow-[4px_4px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] transition-all group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl p-2.5 rounded-2xl bg-[#FAF7EF] border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000000]">
                  {fmt.icon}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#60A5FA] text-black text-[10px] font-mono font-bold uppercase tracking-wider border-2 border-black shadow-[1.5px_1.5px_0px_#000000]">
                  {fmt.stat}
                </span>
              </div>

              <div>
                <h4 className="text-lg font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors">
                  {fmt.title}
                </h4>
                <p className="text-[11px] font-mono text-[#2563EB] font-bold mt-0.5 uppercase">
                  {fmt.tagline}
                </p>
              </div>

              <p className="text-xs text-zinc-700 leading-relaxed font-normal">
                {fmt.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t-2 border-black/10 flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-600 text-[11px] font-medium">{fmt.statDesc}</span>
              <Link
                href={fmt.href}
                className="text-black font-bold flex items-center gap-1 hover:text-[#2563EB] transition-colors"
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
