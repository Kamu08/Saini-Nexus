"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Check,
  Zap,
  Target
} from "lucide-react";
import { SERVICES } from "@/data/services";

export function InteractiveServicesHub() {
  const serviceList = Object.values(SERVICES);

  const ACCENT_STYLES = [
    { badgeBg: "bg-[#60A5FA]", cardBg: "bg-white", headerBg: "bg-[#EFF6FF]", textAccent: "text-[#1D4ED8]" },
    { badgeBg: "bg-[#FDE047]", cardBg: "bg-white", headerBg: "bg-[#FEFCE8]", textAccent: "text-[#A16207]" },
    { badgeBg: "bg-[#67E8F9]", cardBg: "bg-white", headerBg: "bg-[#ECFEFF]", textAccent: "text-[#0E7490]" },
    { badgeBg: "bg-[#86EFAC]", cardBg: "bg-white", headerBg: "bg-[#F0FDF4]", textAccent: "text-[#15803D]" },
    { badgeBg: "bg-[#FDBA74]", cardBg: "bg-white", headerBg: "bg-[#FFF7ED]", textAccent: "text-[#C2410C]" },
    { badgeBg: "bg-[#C4B5FD]", cardBg: "bg-white", headerBg: "bg-[#FAF5FF]", textAccent: "text-[#6D28D9]" },
    { badgeBg: "bg-[#F472B6]", cardBg: "bg-white", headerBg: "bg-[#FDF2F8]", textAccent: "text-[#BE185D]" },
    { badgeBg: "bg-[#93C5FD]", cardBg: "bg-white", headerBg: "bg-[#EFF6FF]", textAccent: "text-[#1E40AF]" }
  ];

  return (
    <section className="space-y-10 sm:space-y-14 relative">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-black/15 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider mb-3 font-extrabold shadow-[2px_2px_0px_#000000]">
            <Layers className="w-3.5 h-3.5" />
            Capabilities Matrix
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-black tracking-tight">
            What We Do: 8 Core Growth Services
          </h2>
          <p className="text-zinc-700 text-sm sm:text-base md:text-lg mt-2 max-w-2xl font-medium leading-relaxed">
            Scroll down to explore our 8 dedicated growth practices. Each system is designed to eliminate friction across your B2B buying journey.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/services"
            className="neo-btn-white w-fit"
          >
            <span>View All Services</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Sticky Scroll-Stacking Cards Container */}
      <div className="relative pb-16 space-y-8 sm:space-y-12">
        {serviceList.map((srv, idx) => {
          const accent = ACCENT_STYLES[idx % ACCENT_STYLES.length];
          // Each card stacks slightly below the previous one for a tactile deck effect
          const topOffset = `calc(5.5rem + ${idx * 14}px)`;

          return (
            <div
              key={srv.slug}
              style={{ top: topOffset }}
              className={`sticky rounded-[2.2rem] sm:rounded-[3rem] border-3 border-black ${accent.cardBg} p-6 sm:p-9 lg:p-11 shadow-[6px_6px_0px_#000000] sm:shadow-[8px_8px_0px_#000000] transition-all duration-300 relative overflow-hidden`}
            >
              {/* Top Accent Stripe / Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b-2 border-black/10">
                <div className="flex items-center gap-3">
                  <span className={`w-10 h-10 rounded-2xl ${accent.badgeBg} border-2 border-black text-black flex items-center justify-center font-mono text-sm font-extrabold shadow-[2px_2px_0px_#000000]`}>
                    {srv.number}
                  </span>
                  <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-zinc-500">
                    SERVICE {srv.number} OF 08 • {srv.strategicRole}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full ${accent.headerBg} border-2 border-black text-black font-mono text-xs font-bold shadow-[1.5px_1.5px_0px_#000000]`}>
                    {srv.premiumPositioning}
                  </span>
                </div>
              </div>

              {/* Card Body: Split Overview & Details */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 pt-6 items-start">
                
                {/* Left Side: Title & Positioning */}
                <div className="lg:col-span-5 space-y-4">
                  <h3 className="text-2xl sm:text-4xl font-serif font-bold text-black tracking-tight leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                    {srv.shortDescription}
                  </p>

                  {/* Solves Friction Box */}
                  <div className={`p-4 rounded-2xl ${accent.headerBg} border-2 border-black space-y-2 shadow-[2px_2px_0px_#000000]`}>
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-zinc-600 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-black" />
                      Core Friction This Solves:
                    </span>
                    <ul className="space-y-1.5 text-xs text-zinc-800 font-medium">
                      {srv.whatWeSolve.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-rose-600 font-bold">✕</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/services/${srv.slug}`}
                      className="neo-btn-white text-xs font-bold"
                    >
                      <span>Explore Service Deep-Dive</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/book"
                      className={`inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider text-black ${accent.badgeBg} border-2 border-black shadow-[2.5px_2.5px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#000000] transition-all`}
                    >
                      <span>Scope Call</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </div>
                </div>

                {/* Right Side: Capabilities & Deliverables Grid */}
                <div className="lg:col-span-7 space-y-5">
                  
                  {/* 4 Key Capabilities */}
                  <div className="space-y-2.5">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 font-extrabold block">
                      Execution Capabilities:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {srv.capabilities.map((cap, i) => (
                        <div 
                          key={i} 
                          className="p-3.5 rounded-2xl bg-[#FAF7EF] border-2 border-black shadow-[2px_2px_0px_#000000] space-y-1"
                        >
                          <div className="flex items-center gap-2 font-serif font-bold text-sm text-black">
                            <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                            <span>{cap.title}</span>
                          </div>
                          <p className="text-xs text-zinc-600 leading-relaxed font-normal pl-6">
                            {cap.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables Strip */}
                  <div className="p-4 rounded-2xl bg-white border-2 border-black space-y-2 shadow-[2px_2px_0px_#000000]">
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-black flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-[#2563EB]" />
                      Direct Commercial Deliverables:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-800 font-medium">
                      {srv.deliverables.map((del, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                          <span className="font-semibold">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
