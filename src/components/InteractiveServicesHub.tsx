"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Target
} from "lucide-react";
import { SERVICES } from "@/data/services";

const ACCENT_STYLES = [
  { badgeBg: "bg-[#60A5FA]", headerBg: "bg-[#EFF6FF]", textAccent: "text-[#1D4ED8]" },
  { badgeBg: "bg-[#FDE047]", headerBg: "bg-[#FEFCE8]", textAccent: "text-[#A16207]" },
  { badgeBg: "bg-[#67E8F9]", headerBg: "bg-[#ECFEFF]", textAccent: "text-[#0E7490]" },
  { badgeBg: "bg-[#86EFAC]", headerBg: "bg-[#F0FDF4]", textAccent: "text-[#15803D]" },
  { badgeBg: "bg-[#FDBA74]", headerBg: "bg-[#FFF7ED]", textAccent: "text-[#C2410C]" },
  { badgeBg: "bg-[#C4B5FD]", headerBg: "bg-[#FAF5FF]", textAccent: "text-[#6D28D9]" },
  { badgeBg: "bg-[#F472B6]", headerBg: "bg-[#FDF2F8]", textAccent: "text-[#BE185D]" },
  { badgeBg: "bg-[#93C5FD]", headerBg: "bg-[#EFF6FF]", textAccent: "text-[#1E40AF]" }
];

export function InteractiveServicesHub() {
  const serviceList = Object.values(SERVICES);

  return (
    <section className="space-y-8 sm:space-y-10 relative">
      
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
            Scroll down to explore our 8 growth practices. Each card slides up and pins directly on top of the previous one, giving you full focus on each service.
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

      {/* 
        Card-Over-Card Full Cover Deck:
        All cards share the exact same top position (top: 5.5rem, directly below navbar).
        Each card has an increasing z-index (1 to 8).
        As the visitor scrolls, each card slides up from below and smoothly covers 
        the previous card completely, giving the card 100% of the screen height.
      */}
      <div className="relative pt-2 pb-0">
        {serviceList.map((srv, idx) => {
          const accent = ACCENT_STYLES[idx % ACCENT_STYLES.length];
          const zIndex = idx + 1;
          const isLast = idx === serviceList.length - 1;

          return (
            <div
              key={srv.slug}
              style={{
                position: "sticky",
                top: "5.5rem",
                zIndex: zIndex,
              }}
              className="w-full mb-[42vh] sm:mb-[50vh] transition-all"
            >
              {/* Card Container - Crisp neobrutalist borders with zero top padding */}
              <div className="w-full bg-white rounded-none border-3 border-black shadow-[6px_6px_0px_#000000] sm:shadow-[9px_9px_0px_#000000] relative overflow-hidden">
                
                {/* Clean Top Header Bar */}
                <div className={`w-full ${accent.headerBg} border-b-2 border-black px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3 select-none`}>
                  <div className="flex items-center gap-3">
                    <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-none ${accent.badgeBg} border-2 border-black text-black flex items-center justify-center font-mono text-xs sm:text-sm font-extrabold shadow-[1.5px_1.5px_0px_#000000]`}>
                      {srv.number}
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-extrabold uppercase tracking-widest text-black">
                      SERVICE {srv.number} OF 08 • {srv.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <span className="hidden md:inline-block px-3 py-1 rounded-none bg-white border border-black text-black font-mono text-xs font-bold shadow-[1px_1px_0px_#000000]">
                      {srv.premiumPositioning}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono font-extrabold uppercase tracking-wider text-zinc-700 bg-black/5 px-2.5 py-1 border border-black/20">
                      {srv.strategicRole}
                    </span>
                  </div>
                </div>

                {/* Card Body: Full Space, No Squishing */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    
                    {/* Left Column: Title, Short Description, Pain Points & CTAs */}
                    <div className="lg:col-span-5 space-y-5">
                      <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-[2.3rem] font-serif font-bold text-black tracking-tight leading-snug">
                          {srv.title}
                        </h3>
                        <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal mt-2">
                          {srv.shortDescription}
                        </p>
                      </div>

                      {/* Solves Friction Box */}
                      <div className={`p-4 rounded-none ${accent.headerBg} border-2 border-black space-y-2 shadow-[2px_2px_0px_#000000]`}>
                        <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-zinc-800 flex items-center gap-1.5">
                          <Zap className="w-4 h-4 text-black" />
                          Core Roadblocks Eliminated:
                        </span>
                        <ul className="space-y-2 text-xs sm:text-sm text-zinc-800 font-medium">
                          {srv.whatWeSolve.slice(0, 2).map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <span className="text-rose-600 font-bold shrink-0 text-sm">✕</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-2 flex flex-wrap items-center gap-3.5">
                        <Link
                          href={`/services/${srv.slug}`}
                          className="neo-btn-white text-xs font-bold"
                        >
                          <span>Explore Deep-Dive</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          href="/book"
                          className={`inline-flex items-center justify-center px-6 py-3 rounded-none text-xs font-mono font-extrabold uppercase tracking-wider text-black ${accent.badgeBg} border-2 border-black shadow-[3px_3px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#000000] transition-all`}
                        >
                          <span>Scope Call</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Execution Capabilities & Direct Deliverables */}
                    <div className="lg:col-span-7 space-y-5">
                      
                      {/* 4 Capabilities Grid */}
                      <div className="space-y-2.5">
                        <span className="text-xs font-mono uppercase tracking-widest text-zinc-600 font-extrabold block">
                          Included Execution Capabilities:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {srv.capabilities.map((cap, i) => (
                            <div 
                              key={i} 
                              className="p-3.5 rounded-none bg-[#FAF7EF] border-2 border-black shadow-[2px_2px_0px_#000000] space-y-1"
                            >
                              <div className="flex items-center gap-2 font-serif font-bold text-sm text-black">
                                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                                <span className="line-clamp-1">{cap.title}</span>
                              </div>
                              <p className="text-xs text-zinc-600 leading-relaxed font-normal pl-6 line-clamp-2">
                                {cap.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Direct Commercial Deliverables Bar */}
                      <div className="p-4 rounded-none bg-white border-2 border-black space-y-2 shadow-[2.5px_2.5px_0px_#000000]">
                        <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-black flex items-center gap-2">
                          <Target className="w-4 h-4 text-[#2563EB]" />
                          Direct Commercial Deliverables:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-zinc-800 font-medium">
                          {srv.deliverables.slice(0, 4).map((del, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-none bg-black shrink-0" />
                              <span className="font-semibold line-clamp-1">{del}</span>
                            </div>
                          ))}
                        </div>
                      </div>

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
