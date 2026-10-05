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
    <section className="space-y-6 sm:space-y-8 relative">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-black/15 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider mb-2.5 font-extrabold shadow-[2px_2px_0px_#000000]">
            <Layers className="w-3.5 h-3.5" />
            Capabilities Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black tracking-tight">
            What We Do: 8 Core Growth Services
          </h2>
          <p className="text-zinc-700 text-sm sm:text-base mt-1.5 max-w-2xl font-medium leading-relaxed">
            Scroll down to watch each service stack into place. As you scroll, each card leaves one clean line visible at the top, assembling our full growth methodology.
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
        Scroll-Stacking Deck:
        Each card has a flush single-line header tab at its very top edge.
        Offset step (34px desktop / 30px mobile) matches the header tab height,
        so as cards stack, previous cards show EXACTLY ONE clean line at the top.
      */}
      <div className="relative pt-1 pb-16">
        {serviceList.map((srv, idx) => {
          const accent = ACCENT_STYLES[idx % ACCENT_STYLES.length];

          // Tightly controlled sticky offsets:
          // Starts right below navbar (~4.5rem) with a 34px step matching the header tab
          const topOffset = `calc(4.5rem + ${idx * 34}px)`;
          const zIndex = idx + 1;

          return (
            <div
              key={srv.slug}
              style={{
                position: "sticky",
                top: topOffset,
                zIndex: zIndex,
              }}
              className="w-full mb-[40vh] sm:mb-[50vh] transition-all"
            >
              {/* Card Container with zero top padding so the header tab sits flush at the very top edge */}
              <div className="w-full bg-white rounded-none border-3 border-black shadow-[6px_6px_0px_#000000] sm:shadow-[8px_8px_0px_#000000] relative overflow-hidden">
                
                {/* 
                  ONE-LINE HEADER TAB:
                  Sits flush at the top edge of each card.
                  When the next card stacks over this card, this exact line remains visible!
                */}
                <div className={`w-full ${accent.headerBg} border-b-2 border-black px-3.5 sm:px-6 h-9 sm:h-10 flex items-center justify-between gap-3 select-none`}>
                  <div className="flex items-center gap-2.5">
                    <span className={`w-6 h-6 rounded-none ${accent.badgeBg} border border-black text-black flex items-center justify-center font-mono text-[11px] font-extrabold shadow-[1px_1px_0px_#000000]`}>
                      {srv.number}
                    </span>
                    <span className="text-[11px] sm:text-xs font-mono font-extrabold uppercase tracking-widest text-black truncate">
                      SERVICE {srv.number} OF 08 • {srv.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="hidden md:inline-block px-2.5 py-0.5 rounded-none bg-white border border-black text-black font-mono text-[10px] font-bold shadow-[1px_1px_0px_#000000] truncate max-w-[280px]">
                      {srv.premiumPositioning}
                    </span>
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-zinc-600 bg-black/5 px-2 py-0.5 border border-black/20">
                      {srv.strategicRole}
                    </span>
                  </div>
                </div>

                {/* Card Body: Split Overview & Details */}
                <div className="p-5 sm:p-7 lg:p-9 pt-4 sm:pt-6">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
                    
                    {/* Left Column: Title, Short Description, Pain Points & CTAs */}
                    <div className="lg:col-span-5 space-y-4">
                      <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-serif font-bold text-black tracking-tight leading-snug">
                          {srv.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal mt-1.5">
                          {srv.shortDescription}
                        </p>
                      </div>

                      {/* Solves Friction Box */}
                      <div className={`p-3.5 rounded-none ${accent.headerBg} border-2 border-black space-y-2 shadow-[2px_2px_0px_#000000]`}>
                        <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-zinc-700 flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-black" />
                          Core Roadblocks Eliminated:
                        </span>
                        <ul className="space-y-1.5 text-xs text-zinc-800 font-medium">
                          {srv.whatWeSolve.slice(0, 2).map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-rose-600 font-bold shrink-0">✕</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-1 flex flex-wrap items-center gap-3">
                        <Link
                          href={`/services/${srv.slug}`}
                          className="neo-btn-white text-xs font-bold"
                        >
                          <span>Explore Deep-Dive</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          href="/book"
                          className={`inline-flex items-center justify-center px-5 py-2.5 rounded-none text-xs font-mono font-extrabold uppercase tracking-wider text-black ${accent.badgeBg} border-2 border-black shadow-[2.5px_2.5px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#000000] transition-all`}
                        >
                          <span>Scope Call</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Execution Capabilities & Direct Deliverables */}
                    <div className="lg:col-span-7 space-y-4">
                      
                      {/* 4 Capabilities Grid */}
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-extrabold block">
                          Included Execution Capabilities:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {srv.capabilities.map((cap, i) => (
                            <div 
                              key={i} 
                              className="p-3 rounded-none bg-[#FAF7EF] border-2 border-black shadow-[1.5px_1.5px_0px_#000000] space-y-0.5"
                            >
                              <div className="flex items-center gap-1.5 font-serif font-bold text-xs sm:text-sm text-black">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                                <span className="line-clamp-1">{cap.title}</span>
                              </div>
                              <p className="text-[11px] text-zinc-600 leading-snug font-normal pl-5 line-clamp-2">
                                {cap.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Direct Commercial Deliverables Bar */}
                      <div className="p-3.5 rounded-none bg-white border-2 border-black space-y-1.5 shadow-[2px_2px_0px_#000000]">
                        <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-black flex items-center gap-1.5">
                          <Target className="w-3.5 h-3.5 text-[#2563EB]" />
                          Direct Commercial Deliverables:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-800 font-medium">
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
