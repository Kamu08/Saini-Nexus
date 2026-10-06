"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  ArrowRight, 
  Briefcase, 
  Laptop, 
  Cpu, 
  Compass, 
  Scale, 
  Factory, 
  Building2, 
  Target, 
  Users, 
  TrendingUp,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { INDUSTRIES, IndustryItem } from "@/data/industries";

const SECTOR_ICONS: Record<string, React.ElementType> = {
  "b2b-saas": Laptop,
  "technology": Cpu,
  "consulting": Compass,
  "professional-services": Scale,
  "industrial-manufacturing": Factory,
  "real-estate": Building2,
};

const SECTOR_HIGHLIGHTS: Record<string, { typicalCycle: string; dealRange: string }> = {
  "b2b-saas": { typicalCycle: "45–90 Days", dealRange: "₹5L – ₹35L+ ACV" },
  "technology": { typicalCycle: "60–120 Days", dealRange: "₹15L – ₹50L+ ACV" },
  "consulting": { typicalCycle: "30–60 Days", dealRange: "₹5L – ₹20L Retainers" },
  "professional-services": { typicalCycle: "30–75 Days", dealRange: "₹3L – ₹15L Engagements" },
  "industrial-manufacturing": { typicalCycle: "60–150 Days", dealRange: "₹25L – ₹1Cr+ Contracts" },
  "real-estate": { typicalCycle: "90–180 Days", dealRange: "Multi-Year Leases / CapEx" },
};

export function SectorCarousel() {
  const industries = Object.values(INDUSTRIES);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);

    // Calculate approximate active card index
    const cardWidth = 440; // Approx card width + gap
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), industries.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScrollState, { passive: true });
    checkScrollState();
    return () => el.removeEventListener("scroll", checkScrollState);
  }, [industries.length]);

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start"
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToCard(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < industries.length - 1) {
      scrollToCard(activeIndex + 1);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#0B0F19] text-white border-3 border-black rounded-none sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[8px_8px_0px_#000000] space-y-8 relative overflow-hidden">
        
        {/* Subtle Tech Blueprint Dot Matrix */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#60A5FA 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />

        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

        {/* ========================================================= */}
        {/* SECTION HEADER & CAROUSEL CONTROLS                        */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b-2 border-white/10 pb-8 relative z-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-extrabold shadow-[2.5px_2.5px_0px_#000000]">
              <Briefcase className="w-3.5 h-3.5 text-black" />
              <span>Industry Architectures</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              B2B Growth Across Key Sectors.
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
              Acquisition blueprints tailored to the multi-stakeholder buying dynamics, friction points, and deal velocity of your specific industry.
            </p>
          </div>

          {/* Controls: Counter + Directional Arrows + All Industries Link */}
          <div className="flex items-center gap-3 shrink-0 self-start lg:self-end">
            <div className="px-3.5 py-2 rounded-none bg-[#161F33] border-2 border-black text-zinc-300 font-mono text-xs font-bold tracking-widest shadow-[2px_2px_0px_#000000]">
              <span className="text-[#60A5FA]">0{activeIndex + 1}</span>
              <span className="text-zinc-600"> / </span>
              <span>0{industries.length}</span>
            </div>

            <button
              type="button"
              onClick={handlePrev}
              disabled={!canScrollLeft && activeIndex === 0}
              aria-label="Previous sector"
              className="w-10 h-10 rounded-none bg-white border-2 border-black text-black flex items-center justify-center font-bold shadow-[2.5px_2.5px_0px_#000000] hover:bg-[#60A5FA] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={!canScrollRight && activeIndex === industries.length - 1}
              aria-label="Next sector"
              className="w-10 h-10 rounded-none bg-white border-2 border-black text-black flex items-center justify-center font-bold shadow-[2.5px_2.5px_0px_#000000] hover:bg-[#60A5FA] hover:translate-x-[1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#000000] active:translate-x-[2px] active:translate-y-[1px] disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            <Link
              href="/industries"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-none bg-[#1E293B] hover:bg-[#2563EB] border-2 border-black text-white text-xs font-mono font-bold uppercase tracking-wider shadow-[2.5px_2.5px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all ml-1"
            >
              <span>Explore All</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ========================================================= */}
        {/* QUICK SECTOR TABS (Pills for fast jumping)               */}
        {/* ========================================================= */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none relative z-10">
          {industries.map((ind, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={ind.slug}
                onClick={() => scrollToCard(idx)}
                className={`px-3 py-1.5 rounded-none font-mono text-xs uppercase tracking-wider font-extrabold whitespace-nowrap transition-all border-2 border-black cursor-pointer ${
                  isActive
                    ? "bg-[#60A5FA] text-black shadow-[3px_3px_0px_#000000]"
                    : "bg-[#161F33] text-zinc-400 hover:text-white hover:bg-[#1E293B] shadow-[2px_2px_0px_#000000]"
                }`}
              >
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* HORIZONTAL SWIPEABLE CAROUSEL TRACK                       */}
        {/* ========================================================= */}
        <div
          ref={scrollRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth relative z-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {industries.map((ind, idx) => {
            const Icon = SECTOR_ICONS[ind.slug] || Briefcase;
            const highlights = SECTOR_HIGHLIGHTS[ind.slug] || {
              typicalCycle: "45–90 Days",
              dealRange: "₹5L – ₹25L+ ACV"
            };

            return (
              <div
                key={ind.slug}
                className="w-[85vw] sm:w-[420px] lg:w-[460px] shrink-0 snap-start bg-[#121826] border-3 border-black p-6 sm:p-7 flex flex-col justify-between rounded-none shadow-[6px_6px_0px_#000000] hover:border-[#60A5FA] transition-all group relative"
              >
                <div className="space-y-5">
                  
                  {/* Top Bar: Sector Tag + Icon */}
                  <div className="flex items-start justify-between gap-3 border-b-2 border-white/10 pb-4">
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono text-[#60A5FA] font-bold tracking-widest uppercase block">
                        // SECTOR 0{idx + 1}
                      </span>
                      <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
                        {ind.tagline}
                      </span>
                    </div>

                    <div className="w-11 h-11 rounded-none bg-[#1E293B] border-2 border-black group-hover:bg-[#60A5FA] group-hover:text-black text-[#60A5FA] flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#000000] transition-colors">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                  </div>

                  {/* Title & Subheadline */}
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight group-hover:text-[#60A5FA] transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                      {ind.heroSubheadline}
                    </p>
                  </div>

                  {/* Operational Telemetry Tags */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="p-2.5 bg-[#161F33] border border-white/10 rounded-none space-y-0.5">
                      <span className="text-[9px] font-mono uppercase text-zinc-400 font-bold block">
                        Sales Cycle Velocity
                      </span>
                      <span className="text-xs font-mono font-extrabold text-white block">
                        {highlights.typicalCycle}
                      </span>
                    </div>
                    <div className="p-2.5 bg-[#161F33] border border-white/10 rounded-none space-y-0.5">
                      <span className="text-[9px] font-mono uppercase text-zinc-400 font-bold block">
                        Target Deal Size
                      </span>
                      <span className="text-xs font-mono font-extrabold text-[#86EFAC] block">
                        {highlights.dealRange}
                      </span>
                    </div>
                  </div>

                  {/* Buying Committee Stakeholders */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-1.5 text-zinc-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                      <Users className="w-3 h-3 text-[#60A5FA]" />
                      <span>Buying Committee Addressed</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.buyingCommittee.slice(0, 3).map((item, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-[#1E293B] border border-white/15 text-zinc-200 text-[10px] font-mono font-medium rounded-none"
                        >
                          {item.role.split("(")[0].trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Core Strategy Pillar */}
                  {ind.playbookStrategy[0] && (
                    <div className="p-3 bg-black/40 border border-white/10 rounded-none space-y-1">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono font-extrabold uppercase text-[#FDE047]">
                        <Target className="w-3 h-3 text-[#FDE047]" />
                        <span>Core Strategy Weapon</span>
                      </div>
                      <p className="text-xs text-zinc-200 font-medium leading-snug">
                        {ind.playbookStrategy[0].title}:{" "}
                        <span className="text-zinc-400 text-[11px] font-normal">
                          {ind.playbookStrategy[0].description}
                        </span>
                      </p>
                    </div>
                  )}

                </div>

                {/* Bottom Result Anchor & Dual Action Buttons */}
                <div className="pt-5 mt-6 border-t-2 border-white/10 space-y-3">
                  
                  {/* Verified Metric Banner */}
                  <div className="flex items-center justify-between p-3 bg-[#161F33] border-2 border-black rounded-none">
                    <span className="text-lg sm:text-xl font-mono font-extrabold text-[#60A5FA]">
                      {ind.featuredResult.metric}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-300 font-semibold max-w-[210px] text-right line-clamp-1">
                      {ind.featuredResult.context}
                    </span>
                  </div>

                  {/* Dual Action CTAs */}
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={`/audit?stage=buyer-context&industry=${ind.slug}`}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-none bg-[#60A5FA] border-2 border-black text-black font-mono text-[11px] font-extrabold uppercase tracking-wider shadow-[2.5px_2.5px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all text-center"
                    >
                      <span>Audit Engine</span>
                      <ArrowRight className="w-3 h-3 shrink-0" />
                    </Link>

                    <Link
                      href={`/industries/${ind.slug}`}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-none bg-white hover:bg-zinc-100 border-2 border-black text-black font-mono text-[11px] font-extrabold uppercase tracking-wider shadow-[2.5px_2.5px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all text-center"
                    >
                      <span>Playbook</span>
                      <ArrowUpRight className="w-3 h-3 shrink-0" />
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* BOTTOM ADAPTABILITY STRIP                                */}
        {/* ========================================================= */}
        <div className="p-4 sm:p-5 rounded-none bg-[#121826] border-2 border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
              Don&apos;t see your specific sector listed?
            </span>
            <p className="text-xs text-zinc-400">
              Our 7-stage commercial architecture adapts across high-ACV markets, technical industrial exporters, and multi-layered buying committees.
            </p>
          </div>

          <Link 
            href="/audit" 
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-black font-mono text-xs font-extrabold uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_#000000] hover:bg-[#60A5FA] hover:translate-x-[1px] hover:translate-y-[1px] transition-all shrink-0 w-full sm:w-auto justify-center"
          >
            <span>Request Custom Sector Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
