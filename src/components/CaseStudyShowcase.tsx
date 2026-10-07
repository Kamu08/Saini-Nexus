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

  const ACCENTS = [
    { badgeBg: "bg-[#BFDBFE]", headerBg: "bg-[#EFF6FF]", textAccent: "text-[#1D4ED8]" },
    { badgeBg: "bg-[#FEF08A]", headerBg: "bg-[#FEFCE8]", textAccent: "text-[#A16207]" },
    { badgeBg: "bg-[#BBF7D0]", headerBg: "bg-[#F0FDF4]", textAccent: "text-[#15803D]" },
    { badgeBg: "bg-[#FED7AA]", headerBg: "bg-[#FFF7ED]", textAccent: "text-[#C2410C]" },
    { badgeBg: "bg-[#E9D5FF]", headerBg: "bg-[#FAF5FF]", textAccent: "text-[#7E22CE]" },
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
            Five empirical client teardowns across SaaS, export manufacturing, FinTech, enterprise IT, and healthcare. Click any card to inspect the full campaign dossier.
          </p>
        </div>

        <Link href="/case-studies" className="neo-btn-white w-fit shrink-0">
          <span>View All Case Studies</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </Link>
      </div>

      {/* Grid Container with Shared Animated Traveling Shadow: 2 Top Wide Cards, 3 Bottom Cards */}
      <div
        ref={containerRef}
        onMouseLeave={handleContainerMouseLeave}
        className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"
      >
        {/* The Smooth Traveling Shadow Element (Lives behind cards, glides from card to card) */}
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

        {/* Five Cards: 2 on Top Row (lg:col-span-3), 3 on Bottom Row (lg:col-span-2) */}
        {CASE_STUDIES.slice(0, 5).map((study, index) => {
          const accent = ACCENTS[index % ACCENTS.length];
          const spanClass = index < 2 ? "lg:col-span-3" : "lg:col-span-2";
          const isHovered = hoveredIdx === index;

          return (
            <div
              key={study.slug}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              className={`${spanClass} bg-white rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between border-2 border-black group relative overflow-hidden z-10 space-y-6`}
            >
              {/* Corner Accent Circle */}
              <div className={`absolute top-0 right-0 w-28 h-28 ${accent.badgeBg} opacity-20 -mr-12 -mt-12 rounded-full pointer-events-none`} />

              <div className="space-y-4 relative z-10">
                
                {/* Header: Code Pill & Industry Tag */}
                <div className="flex items-center justify-between gap-2 border-b-2 border-black/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-1 rounded-full ${accent.badgeBg} border-2 border-black text-black font-mono text-xs font-extrabold shadow-[1.5px_1.5px_0px_#000000]`}>
                      {study.clientCode}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-zinc-600 uppercase tracking-wider truncate">
                      {study.industry}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded-full shrink-0">
                    VERIFIED
                  </span>
                </div>

                {/* Primary Outcome Callout Banner */}
                <div className={`${accent.headerBg} border-2 border-black rounded-2xl p-4 shadow-[2px_2px_0px_#000000] space-y-0.5`}>
                  <span className="text-[10px] font-mono uppercase font-bold text-zinc-600 block">
                    {study.businessOutcomes[1]?.label || study.businessOutcomes[0]?.label || "Verified Growth Outcome"}
                  </span>
                  <div className="text-3xl sm:text-4xl font-serif font-black text-black tracking-tight">
                    {study.businessOutcomes[1]?.metric || study.businessOutcomes[0]?.metric}
                  </div>
                </div>

                {/* Client Name & Hero Title */}
                <div>
                  <span className="text-xs font-mono font-bold text-zinc-500 block mb-1">
                    {study.clientName}
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-black leading-snug group-hover:text-[#2563EB] transition-colors line-clamp-2">
                    {study.hypothesis}
                  </h3>
                </div>

                {/* Strategy Summary */}
                <p className="text-xs text-zinc-700 leading-relaxed font-medium line-clamp-2">
                  {study.coreChallenge}
                </p>

                {/* Two Supporting Stat Badges */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="bg-[#FAF7EF] border border-black rounded-xl p-2.5 space-y-0.5">
                    <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase block truncate">
                      {study.campaignMetrics[0]?.label || "Metric A"}
                    </span>
                    <strong className="text-sm font-mono font-extrabold text-black block truncate">
                      {study.campaignMetrics[0]?.metric}
                    </strong>
                  </div>
                  <div className="bg-[#FAF7EF] border border-black rounded-xl p-2.5 space-y-0.5">
                    <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase block truncate">
                      {study.businessOutcomes[0]?.label || "Metric B"}
                    </span>
                    <strong className="text-sm font-mono font-extrabold text-black block truncate">
                      {study.businessOutcomes[0]?.metric}
                    </strong>
                  </div>
                </div>

                {/* Campaign Hook Snippet */}
                <div className="p-3 bg-zinc-50 border border-black/30 rounded-xl space-y-1 text-xs">
                  <span className="text-[9px] font-mono uppercase font-extrabold text-[#2563EB] block">
                    In-Market Creative Hook
                  </span>
                  <p className="font-serif italic text-black text-xs font-medium leading-snug line-clamp-2">
                    {study.campaignHook}
                  </p>
                </div>

              </div>

              {/* Action Button: 1-Click Link to Detailed Teardown Page */}
              <div className="pt-4 border-t-2 border-black/10 flex items-center justify-between relative z-10">
                <span className="text-xs font-mono font-bold text-zinc-600 group-hover:text-black transition-colors">
                  {study.timeline}
                </span>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className={`px-4 py-2 rounded-full ${accent.badgeBg} border-2 border-black text-black text-xs font-mono font-bold shadow-[2px_2px_0px_#000000] hover:shadow-[3px_3px_0px_#000000] transition-all flex items-center gap-1.5`}
                >
                  <span>Read Full Dossier</span>
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
