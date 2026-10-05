"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Target 
} from "lucide-react";
import { SERVICES, ServiceItem } from "@/data/services";

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

interface CardProps {
  srv: ServiceItem;
  idx: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  accent: (typeof ACCENT_STYLES)[0];
}

function ServiceSlideCard({ srv, idx, total, scrollYProgress, accent }: CardProps) {
  // Calculate precise scroll window for each card to animate in
  // Card 0 (Base): always visible at y = 0
  // Cards 1 to 7: each slides up sequentially from bottom to top
  const step = 0.85 / (total - 1);
  const start = idx === 0 ? 0 : 0.02 + (idx - 1) * step;
  const end = idx === 0 ? 0 : start + step * 0.85;

  // y-translation: slides smoothly up from 105% to 0%
  const y = useTransform(
    scrollYProgress,
    idx === 0 ? [0, 1] : [start, end],
    idx === 0 ? ["0%", "0%"] : ["105%", "0%"]
  );

  return (
    <motion.div
      style={{
        y,
        zIndex: idx + 1,
      }}
      className="absolute top-0 left-0 right-2 bottom-2 will-change-transform"
    >
      {/* Card Shell */}
      <div className="w-full h-full bg-white rounded-none border-3 border-black shadow-[8px_8px_0px_#000000] flex flex-col justify-between overflow-hidden">
        
        {/* Top Header Bar */}
        <div className={`w-full ${accent.headerBg} border-b-2 border-black px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3 select-none shrink-0`}>
          <div className="flex items-center gap-3">
            <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-none ${accent.badgeBg} border-2 border-black text-black flex items-center justify-center font-mono text-xs sm:text-sm font-extrabold shadow-[1.5px_1.5px_0px_#000000]`}>
              {srv.number}
            </span>
            <span className="text-xs sm:text-sm font-mono font-extrabold uppercase tracking-widest text-black">
              SERVICE {srv.number} OF 08 • {srv.title}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="hidden md:inline-block px-3 py-0.5 rounded-none bg-white border border-black text-black font-mono text-xs font-bold shadow-[1px_1px_0px_#000000]">
              {srv.premiumPositioning}
            </span>
            <span className="text-[10px] sm:text-xs font-mono font-extrabold uppercase tracking-wider text-zinc-700 bg-black/5 px-2.5 py-1 border border-black/20">
              {srv.strategicRole}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-7 lg:p-9 flex-1 overflow-y-auto no-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
            
            {/* Left Column: Title, Short Description, Pain Points & CTAs */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-serif font-bold text-black tracking-tight leading-snug">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal mt-1.5">
                  {srv.shortDescription}
                </p>
              </div>

              {/* Solves Friction Box */}
              <div className={`p-3.5 sm:p-4 rounded-none ${accent.headerBg} border-2 border-black space-y-1.5 shadow-[2px_2px_0px_#000000]`}>
                <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-zinc-800 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-black" />
                  Core Roadblocks Eliminated:
                </span>
                <ul className="space-y-1 text-xs text-zinc-800 font-medium">
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
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-600 font-extrabold block">
                  Included Execution Capabilities:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {srv.capabilities.map((cap, i) => (
                    <div 
                      key={i} 
                      className="p-3 rounded-none bg-[#FAF7EF] border-2 border-black shadow-[1.5px_1.5px_0px_#000000] space-y-0.5"
                    >
                      <div className="flex items-center gap-1.5 font-serif font-bold text-sm text-black">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                        <span className="line-clamp-1">{cap.title}</span>
                      </div>
                      <p className="text-xs text-zinc-600 leading-snug font-normal pl-5.5 line-clamp-2">
                        {cap.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Commercial Deliverables Bar */}
              <div className="p-3.5 sm:p-4 rounded-none bg-white border-2 border-black space-y-1.5 shadow-[2px_2px_0px_#000000]">
                <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-black flex items-center gap-1.5">
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
    </motion.div>
  );
}

export function InteractiveServicesHub() {
  const serviceList = Object.values(SERVICES);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll through the dedicated services runway
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative h-[480vh] sm:h-[520vh]">
      
      {/* Pinned Sticky Stage - Stays fixed on screen as the user scrolls */}
      <div className="sticky top-20 sm:top-24 w-full h-[620px] sm:h-[560px] lg:h-[540px] flex flex-col justify-start">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b-2 border-black/15 pb-4 mb-4 bg-[#FAF7EF] shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#60A5FA] border-2 border-black text-black text-[11px] font-mono uppercase tracking-wider mb-2 font-extrabold shadow-[2px_2px_0px_#000000]">
              <Layers className="w-3.5 h-3.5" />
              Capabilities Matrix
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-black tracking-tight">
              What We Do: 8 Core Growth Services
            </h2>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/services"
              className="neo-btn-white text-xs py-2 px-4"
            >
              <span>View All Services</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 
          The Interactive Card Deck Viewport:
          All 8 cards live inside this exact frame.
          Each card slides up from below and lands directly on top on scroll.
          Card 8 is 100% guaranteed to land on top of Card 7.
        */}
        <div className="relative w-full flex-1 overflow-hidden">
          {serviceList.map((srv, idx) => (
            <ServiceSlideCard
              key={srv.slug}
              srv={srv}
              idx={idx}
              total={serviceList.length}
              scrollYProgress={scrollYProgress}
              accent={ACCENT_STYLES[idx % ACCENT_STYLES.length]}
            />
          ))}
        </div>

      </div>

    </div>
  );
}
