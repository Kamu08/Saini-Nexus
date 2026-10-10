"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  Target, 
  ArrowUpRight, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Award
} from "lucide-react";
import { motion } from "framer-motion";

interface CasePreview {
  slug: string;
  clientCode: string;
  clientName: string;
  sector: string;
  headline: string;
  primaryMetric: string;
  metricLabel: string;
  secondaryStat: string;
  summary: string;
}

const CASE_PREVIEWS: CasePreview[] = [
  {
    slug: "cloudscale-enterprise-saas",
    clientCode: "FRAMEWORK 01",
    clientName: "Enterprise B2B SaaS Model",
    sector: "Enterprise Software & Cloud",
    headline: "Full-Funnel ABM & Buying Committee Demand",
    primaryMetric: "3-Tier ABM",
    metricLabel: "Campaign Architecture",
    secondaryStat: "Strict Seniority Filters · Ungated Proof",
    summary: "Replaces generic 'Book Demo' forms with ungated technical architecture teardowns and Founder Thought Leader Ads targeting verified accounts."
  },
  {
    slug: "apex-industrial-export",
    clientCode: "FRAMEWORK 02",
    clientName: "Industrial Manufacturing Direct Sourcing",
    sector: "Precision Engineering & Export",
    headline: "Direct OEM Sourcing & Procurement Demand",
    primaryMetric: "Direct RFQ Engine",
    metricLabel: "Execution Model",
    secondaryStat: "QA Tolerance Carousels · Zero Broker Fees",
    summary: "Delivers technical facility tolerances and ISO/AS9100 quality dossiers directly to global supply chain and procurement decision-makers."
  },
  {
    slug: "fintech-consulting-demand-engine",
    clientCode: "FRAMEWORK 03",
    clientName: "Financial & Regulatory Advisory Model",
    sector: "FinTech & Management Consulting",
    headline: "Partner-Led Authority & Regulatory Teardowns",
    primaryMetric: "Thought Leader Ads",
    metricLabel: "Executive Distribution",
    secondaryStat: "Contrarian Industry POV · C-Level Funnel",
    summary: "Transforms managing partner regulatory insights into high-signal LinkedIn carousels, driving inbound commercial consultations without broker dependencies."
  },
  {
    slug: "vanguard-enterprise-it-services",
    clientCode: "FRAMEWORK 04",
    clientName: "Enterprise IT & Cloud Security Model",
    sector: "Cybersecurity & IT Infrastructure",
    headline: "Technical Risk Blueprints for Enterprise IT Leaders",
    primaryMetric: "Account-Based Ads",
    metricLabel: "Audience Architecture",
    secondaryStat: "CISO Risk Matrices · Engineering Call SLA",
    summary: "Replaces generic cold outbound with ungated cloud compliance risk breakdowns, educating enterprise technology buyers before sales engagement."
  },
  {
    slug: "zenith-healthcare-diagnostics",
    clientCode: "FRAMEWORK 05",
    clientName: "Healthcare & Diagnostic Equipment Model",
    sector: "Medical Devices & Diagnostic Tech",
    headline: "Direct Institutional Sourcing for Hospital Networks",
    primaryMetric: "Institutional Direct",
    metricLabel: "Commercial Channel",
    secondaryStat: "Calibration Dossiers · Direct Sourcing",
    summary: "Targets hospital managing directors and lab operators with equipment uptime guarantees and direct manufacturer warranty, removing distributor friction."
  }
];

const ACCENTS = [
  { badgeBg: "bg-[#BFDBFE]", headerBg: "bg-[#EFF6FF]", textAccent: "text-[#1D4ED8]" },
  { badgeBg: "bg-[#FEF08A]", headerBg: "bg-[#FEFCE8]", textAccent: "text-[#A16207]" },
  { badgeBg: "bg-[#BBF7D0]", headerBg: "bg-[#F0FDF4]", textAccent: "text-[#15803D]" },
  { badgeBg: "bg-[#FED7AA]", headerBg: "bg-[#FFF7ED]", textAccent: "text-[#C2410C]" },
  { badgeBg: "bg-[#E9D5FF]", headerBg: "bg-[#FAF5FF]", textAccent: "text-[#7E22CE]" },
];

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
            Strategic Campaign Frameworks
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black tracking-tight leading-tight">
            B2B Campaign Architectures &amp; Execution Models
          </h2>
          <p className="text-zinc-700 text-sm sm:text-base mt-2 max-w-xl font-medium leading-relaxed">
            Five structured B2B campaign models demonstrating our audience targeting, content proof, and LinkedIn distribution methodologies across key sectors.
          </p>
        </div>

        <Link href="/case-studies" className="neo-btn-white w-fit shrink-0">
          <span>Explore All Frameworks</span>
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
        {CASE_PREVIEWS.map((study, index) => {
          const accent = ACCENTS[index % ACCENTS.length];
          const spanClass = index < 2 ? "lg:col-span-3" : "lg:col-span-2";

          return (
            <div
              key={study.slug}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              className={`${spanClass} bg-white rounded-[2rem] p-5 sm:p-7 flex flex-col justify-between border-2 border-black group relative overflow-hidden z-10 space-y-5`}
            >
              {/* Corner Ambient Accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 ${accent.badgeBg} opacity-20 -mr-10 -mt-10 rounded-full pointer-events-none`} />

              <div className="space-y-3.5 relative z-10">
                
                {/* Header: Code Pill on Left, Sector Tag on Right */}
                <div className="flex items-center justify-between gap-2 border-b-2 border-black/10 pb-2.5">
                  <span className={`px-2.5 py-0.5 rounded-full ${accent.badgeBg} border-2 border-black text-black font-mono text-xs font-extrabold shadow-[1px_1px_0px_#000000] shrink-0`}>
                    {study.clientCode}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-zinc-600 uppercase tracking-wider text-right">
                    {study.sector}
                  </span>
                </div>

                {/* Primary Outcome Callout Banner */}
                <div className={`${accent.headerBg} border-2 border-black rounded-2xl p-3.5 shadow-[2px_2px_0px_#000000] space-y-0.5`}>
                  <span className="text-[10px] font-mono uppercase font-bold text-zinc-600 block">
                    {study.metricLabel}
                  </span>
                  <div className="text-2xl sm:text-3xl font-serif font-black text-black tracking-tight">
                    {study.primaryMetric}
                  </div>
                </div>

                {/* Client Name & Headline */}
                <div className="space-y-1">
                  <span className="text-[11px] font-mono font-bold text-zinc-500 block">
                    {study.clientName}
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-black leading-snug group-hover:text-[#2563EB] transition-colors">
                    {study.headline}
                  </h3>
                </div>

                {/* Concise Summary */}
                <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                  {study.summary}
                </p>

                {/* Secondary Verified Stat Pill */}
                <div className="bg-[#FAF7EF] border border-black rounded-xl px-3 py-2 text-[11px] font-mono font-bold text-black flex items-center justify-between">
                  <span className="text-zinc-500 uppercase text-[10px]">Key Efficiency:</span>
                  <span className="text-[#2563EB]">{study.secondaryStat}</span>
                </div>

              </div>

              {/* Action Button: 1-Click Link to Detailed Teardown Page */}
              <div className="pt-3 border-t-2 border-black/10 flex items-center justify-between relative z-10">
                <span className="text-[11px] font-mono font-bold text-zinc-500 group-hover:text-black transition-colors">
                  Campaign Blueprint
                </span>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className={`px-3.5 py-1.5 rounded-full ${accent.badgeBg} border-2 border-black text-black text-xs font-mono font-bold shadow-[1.5px_1.5px_0px_#000000] hover:shadow-[2.5px_2.5px_0px_#000000] transition-all flex items-center gap-1.5`}
                >
                  <span>Read Framework</span>
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
