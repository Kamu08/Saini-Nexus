"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  Target, 
  ArrowUpRight, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  Award
} from "lucide-react";
import { motion } from "framer-motion";
import { CASE_STUDIES } from "@/data/caseStudies";

export function CaseStudyShowcase() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isGliding, setIsGliding] = useState(false);
  const [shadowStyle, setShadowStyle] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
    opacity: number;
  }>({ top: 0, left: 0, width: 0, height: 0, opacity: 0 });

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeHoverRef = useRef(false);

  const campaigns = [
    {
      ...CASE_STUDIES[0],
      tabLabel: "Enterprise B2B SaaS",
      badgeColor: "bg-[#60A5FA]",
      headerBg: "bg-[#EFF6FF]",
      borderAccent: "border-[#2563EB]",
      heroTitle: "CloudScale Systems: From Junior Clicks to ₹38L Pipeline",
      shortSummary: "Eliminated 86% wasted junior clicks by shifting to Matched Account ABM with un-gated technical architecture teardowns and CEO Thought Leader Ads.",
      primaryNumber: "₹38L ARR",
      primaryLabel: "Verified Qualified Pipeline",
      statA: { label: "Sales Accepted", val: "82%" },
      statB: { label: "CPL Reduction", val: "-46%" },
      hookPill: "4-POINT PRE-FLIGHT AUDIT",
      hookTitle: "Why 70% of Enterprise Cloud Migrations Overrun Budgets"
    },
    {
      ...CASE_STUDIES[1],
      tabLabel: "Industrial Manufacturing & Export",
      badgeColor: "bg-[#FDE047]",
      headerBg: "bg-[#FEFCE8]",
      borderAccent: "border-amber-500",
      heroTitle: "Apex Heavy Precision: Bypassing Brokers for Direct OEM Contracts",
      shortSummary: "Eliminated 18% export broker margins by serving sub-micron automated CNC tolerance dossiers directly to European & US VP of Supply Chain titles.",
      primaryNumber: "₹42L",
      primaryLabel: "Closed Annual Contracts",
      statA: { label: "Direct RFQs", val: "24 Leads" },
      statB: { label: "Margin Gain", val: "+22%" },
      hookPill: "ISO 9001 / AS9100 DOSSIER",
      hookTitle: "Sub-Micron CNC Tolerances at 32% Lower Landed Cost"
    },
    {
      ...CASE_STUDIES[2],
      tabLabel: "High-Ticket Advisory & FinTech",
      badgeColor: "bg-[#86EFAC]",
      headerBg: "bg-[#F0FDF4]",
      borderAccent: "border-emerald-500",
      heroTitle: "Novus Advisory Partners: Executive Authority to ₹18L Retainers",
      shortSummary: "Monetized Managing Partner regulatory IP into contrarian teardowns, generating direct corporate advisory inbound inquiries and rapid CAC payback.",
      primaryNumber: "₹18L ARR",
      primaryLabel: "New Annual Retainers Won",
      statA: { label: "Proposals Sent", val: "14 Retainers" },
      statB: { label: "CAC Payback", val: "<45 Days" },
      hookPill: "2025 REGULATORY AUDIT",
      hookTitle: "5 Hidden Regulatory Exposure Points in Cross-Border Rails"
    }
  ];

  const updateShadowPosition = (index: number, animate: boolean) => {
    const el = cardRefs.current[index];
    if (!el) return;

    // Refined 5px right and bottom offset
    const OFFSET_RIGHT = 5;
    const OFFSET_BOTTOM = 5;

    setIsGliding(animate);
    setShadowStyle({
      top: el.offsetTop + OFFSET_BOTTOM,
      left: el.offsetLeft + OFFSET_RIGHT,
      width: el.offsetWidth,
      height: el.offsetHeight,
      opacity: 1,
    });
    setHoveredIdx(index);
  };

  const handleMouseEnter = (index: number) => {
    const shouldAnimate = activeHoverRef.current;
    activeHoverRef.current = true;
    updateShadowPosition(index, shouldAnimate);
  };

  const handleContainerMouseLeave = () => {
    activeHoverRef.current = false;
    setHoveredIdx(null);
    setShadowStyle((prev) => ({ ...prev, opacity: 0 }));
    setIsGliding(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (hoveredIdx !== null) {
        updateShadowPosition(hoveredIdx, false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [hoveredIdx]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider mb-3 font-bold shadow-[2px_2px_0px_#000000]">
            <Target className="w-3.5 h-3.5" />
            Evidence &amp; Verified Teardowns
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black tracking-tight leading-tight">
            Real Work. Real Campaigns. Real Proof.
          </h2>
          <p className="text-zinc-700 text-sm sm:text-base mt-2 max-w-xl font-medium leading-relaxed">
            Inspect the actual in-market ad assets, creative hooks, and verifiable revenue outcomes. Hover over any dossier to inspect details.
          </p>
        </div>

        <Link href="/case-studies" className="neo-btn-white w-fit shrink-0">
          <span>View All Case Studies</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </Link>
      </div>

      {/* Grid Container with Smooth Traveling Right/Bottom Shadow Animation */}
      <div
        ref={containerRef}
        onMouseLeave={handleContainerMouseLeave}
        className="relative grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* The Smooth Traveling Shadow Element */}
        <motion.div
          className="absolute bg-black rounded-[2rem] pointer-events-none z-0"
          initial={false}
          animate={{
            top: shadowStyle.top,
            left: shadowStyle.left,
            width: shadowStyle.width,
            height: shadowStyle.height,
            opacity: shadowStyle.opacity,
          }}
          transition={{
            top: isGliding 
              ? { type: "spring", stiffness: 350, damping: 30, mass: 0.8 } 
              : { duration: 0 },
            left: isGliding 
              ? { type: "spring", stiffness: 350, damping: 30, mass: 0.8 } 
              : { duration: 0 },
            width: isGliding 
              ? { type: "spring", stiffness: 350, damping: 30, mass: 0.8 } 
              : { duration: 0 },
            height: isGliding 
              ? { type: "spring", stiffness: 350, damping: 30, mass: 0.8 } 
              : { duration: 0 },
            opacity: { duration: 0.2, ease: "easeInOut" },
          }}
        />

        {/* 3 Case Study Cards */}
        {campaigns.map((item, index) => {
          const isHovered = hoveredIdx === index;

          return (
            <div
              key={item.slug}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              className="bg-white rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between border-2 border-black group relative overflow-hidden z-10 space-y-6"
            >
              {/* Corner Ambient Accent */}
              <div className={`absolute top-0 right-0 w-28 h-28 ${item.badgeColor} opacity-20 -mr-12 -mt-12 rounded-full pointer-events-none`} />

              <div className="space-y-4 relative z-10">
                
                {/* Header: Code Pill & Sector Tag */}
                <div className="flex items-center justify-between gap-2 border-b-2 border-black/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-1 rounded-full ${item.badgeColor} border-2 border-black text-black font-mono text-xs font-extrabold shadow-[1.5px_1.5px_0px_#000000]`}>
                      {item.clientCode}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-zinc-600 uppercase tracking-wider">
                      {item.tabLabel}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded-full">
                    VERIFIED
                  </span>
                </div>

                {/* Main Outcome Callout Box */}
                <div className={`${item.headerBg} border-2 border-black rounded-2xl p-4 shadow-[2px_2px_0px_#000000] space-y-1`}>
                  <span className="text-[10px] font-mono uppercase font-bold text-zinc-600 block">
                    {item.primaryLabel}
                  </span>
                  <div className="text-3xl sm:text-4xl font-serif font-black text-black tracking-tight">
                    {item.primaryNumber}
                  </div>
                </div>

                {/* Hero Title */}
                <h3 className="text-lg sm:text-xl font-serif font-bold text-black leading-snug group-hover:text-[#2563EB] transition-colors">
                  {item.heroTitle}
                </h3>

                {/* Summary */}
                <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                  {item.shortSummary}
                </p>

                {/* Two Supporting Stat Badges */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="bg-[#FAF7EF] border border-black rounded-xl p-2.5 space-y-0.5">
                    <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase block truncate">
                      {item.statA.label}
                    </span>
                    <strong className="text-sm font-mono font-extrabold text-black block">
                      {item.statA.val}
                    </strong>
                  </div>
                  <div className="bg-[#FAF7EF] border border-black rounded-xl p-2.5 space-y-0.5">
                    <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase block truncate">
                      {item.statB.label}
                    </span>
                    <strong className="text-sm font-mono font-extrabold text-black block">
                      {item.statB.val}
                    </strong>
                  </div>
                </div>

                {/* Campaign Hook Pill */}
                <div className="p-3 bg-zinc-50 border border-black/30 rounded-xl space-y-1 text-xs">
                  <span className="text-[9px] font-mono uppercase font-extrabold text-[#2563EB] block">
                    Ad Hook &middot; {item.hookPill}
                  </span>
                  <p className="font-serif italic text-black text-xs font-medium leading-snug line-clamp-2">
                    &ldquo;{item.hookTitle}&rdquo;
                  </p>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-4 border-t-2 border-black/10 flex items-center justify-between relative z-10">
                <span className="text-xs font-mono font-bold text-zinc-600 group-hover:text-black transition-colors">
                  Full Teardown Dossier
                </span>
                <Link
                  href={`/case-studies/${item.slug}`}
                  className={`px-4 py-2 rounded-full ${item.badgeColor} border-2 border-black text-black text-xs font-mono font-bold shadow-[2px_2px_0px_#000000] hover:shadow-[3px_3px_0px_#000000] transition-all flex items-center gap-1.5`}
                >
                  <span>Read Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}
