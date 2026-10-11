"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { 
  Target, 
  ArrowUpRight, 
  ArrowRight
} from "lucide-react";

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
  { 
    pillBg: "bg-blue-50", 
    pillBorder: "border-blue-200", 
    text: "text-blue-700", 
    hoverBorder: "hover:border-blue-400", 
    hoverShadow: "hover:shadow-blue-200/50", 
    glow: "bg-blue-400/20", 
    btnBg: "group-hover:bg-blue-600", 
    btnShadow: "group-hover:shadow-[0_4px_14px_rgba(37,99,235,0.35)]", 
    metricBg: "bg-blue-50/60", 
    metricBorder: "border-blue-100/60", 
    rgb: "59, 130, 246" 
  },
  { 
    pillBg: "bg-purple-50", 
    pillBorder: "border-purple-200", 
    text: "text-purple-700", 
    hoverBorder: "hover:border-purple-400", 
    hoverShadow: "hover:shadow-purple-200/50", 
    glow: "bg-purple-400/20", 
    btnBg: "group-hover:bg-purple-600", 
    btnShadow: "group-hover:shadow-[0_4px_14px_rgba(147,51,234,0.35)]", 
    metricBg: "bg-purple-50/60", 
    metricBorder: "border-purple-100/60", 
    rgb: "168, 85, 247" 
  },
  { 
    pillBg: "bg-emerald-50", 
    pillBorder: "border-emerald-200", 
    text: "text-emerald-700", 
    hoverBorder: "hover:border-emerald-400", 
    hoverShadow: "hover:shadow-emerald-200/50", 
    glow: "bg-emerald-400/20", 
    btnBg: "group-hover:bg-emerald-600", 
    btnShadow: "group-hover:shadow-[0_4px_14px_rgba(16,185,129,0.35)]", 
    metricBg: "bg-emerald-50/60", 
    metricBorder: "border-emerald-100/60", 
    rgb: "16, 185, 129" 
  },
  { 
    pillBg: "bg-amber-50", 
    pillBorder: "border-amber-200", 
    text: "text-amber-700", 
    hoverBorder: "hover:border-amber-400", 
    hoverShadow: "hover:shadow-amber-200/50", 
    glow: "bg-amber-400/20", 
    btnBg: "group-hover:bg-amber-600", 
    btnShadow: "group-hover:shadow-[0_4px_14px_rgba(217,119,6,0.35)]", 
    metricBg: "bg-amber-50/60", 
    metricBorder: "border-amber-100/60", 
    rgb: "245, 158, 11" 
  },
  { 
    pillBg: "bg-rose-50", 
    pillBorder: "border-rose-200", 
    text: "text-rose-700", 
    hoverBorder: "hover:border-rose-400", 
    hoverShadow: "hover:shadow-rose-200/50", 
    glow: "bg-rose-400/20", 
    btnBg: "group-hover:bg-rose-600", 
    btnShadow: "group-hover:shadow-[0_4px_14px_rgba(225,29,72,0.35)]", 
    metricBg: "bg-rose-50/60", 
    metricBorder: "border-rose-100/60", 
    rgb: "244, 63, 94" 
  },
];

function CaseStudyCard({ study, spanClass, theme }: { study: CasePreview; spanClass: string; theme: typeof ACCENTS[0] }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`${spanClass} bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200/90 ${theme.hoverBorder} shadow-sm hover:shadow-xl ${theme.hoverShadow} transition-all duration-300 group relative overflow-hidden space-y-5`}
    >
      {/* Light-Mode Dynamic Mouse Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(${theme.rgb}, 0.08), transparent 45%)`,
        }}
      />

      {/* Cinematic Ambient Corner Glow (Properly blurred) */}
      <div className={`absolute -top-16 -right-16 w-56 h-56 rounded-full blur-[60px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${theme.glow}`} />

      <div className="space-y-4 relative z-10">
        
        {/* Header: Code Pill on Left, Sector Tag on Right */}
        <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <span className={`px-2.5 py-1 rounded-full ${theme.pillBg} ${theme.text} border ${theme.pillBorder} font-sans text-xs font-semibold shrink-0`}>
            {study.clientCode}
          </span>
          <span className="text-[11px] font-sans font-medium text-slate-500 uppercase tracking-wider text-right">
            {study.sector}
          </span>
        </div>

        {/* Primary Outcome Callout Banner (Theme-Tinted) */}
        <div className={`${theme.metricBg} border ${theme.metricBorder} rounded-2xl p-4 space-y-0.5 transition-colors duration-300`}>
          <span className="text-[11px] font-sans uppercase font-semibold text-slate-500 block">
            {study.metricLabel}
          </span>
          <div className="text-2xl sm:text-3xl font-sans font-extrabold text-slate-900 tracking-tight">
            {study.primaryMetric}
          </div>
        </div>

        {/* Client Name & Headline */}
        <div className="space-y-1">
          <span className={`text-xs font-sans font-semibold ${theme.text} block`}>
            {study.clientName}
          </span>
          <h3 className="text-base sm:text-lg font-sans font-bold text-slate-900 leading-snug group-hover:text-slate-950 transition-colors">
            {study.headline}
          </h3>
        </div>

        {/* Concise Summary */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          {study.summary}
        </p>

        {/* Secondary Verified Stat Pill */}
        <div className="bg-slate-50 border border-slate-100 rounded-xl px-3.5 py-2.5 text-xs font-sans text-slate-700 flex items-center justify-between">
          <span className="text-slate-500 text-[11px] font-medium">Key Efficiency:</span>
          <span className={`${theme.text} font-semibold`}>{study.secondaryStat}</span>
        </div>

      </div>

      {/* Action Button */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
        <span className="text-xs font-sans font-medium text-slate-500 group-hover:text-slate-900 transition-colors">
          Campaign Blueprint
        </span>
        <Link
          href={`/case-studies/${study.slug}`}
          className={`px-4 py-2 rounded-full bg-slate-900 ${theme.btnBg} ${theme.btnShadow} text-white text-xs font-sans font-semibold shadow-xs transition-all flex items-center gap-1.5`}
        >
          <span>Read Framework</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}

export function CaseStudyShowcase() {
  return (
    <div className="w-full bg-[#FAFCFF] py-20 sm:py-28 border-b border-slate-200/80">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e6f4fc] border border-[#bae6fd] text-[#0f539a] text-xs font-sans font-semibold mb-3">
              <Target className="w-3.5 h-3.5 text-[#1572b8]" />
              Strategic Campaign Frameworks
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-slate-900 tracking-tight leading-tight">
              B2B Campaign Architectures &amp; Execution Models
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl font-normal leading-relaxed">
              Five structured B2B campaign models demonstrating our audience targeting, content proof, and LinkedIn distribution methodologies across key sectors.
            </p>
          </div>

          <Link href="/case-studies" className="neo-btn-white w-fit shrink-0 bg-white">
            <span>Explore All Frameworks</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>

        {/* Grid Container: 2 Top Wide Cards, 3 Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {CASE_PREVIEWS.map((study, index) => {
            const spanClass = index < 2 ? "lg:col-span-3" : "lg:col-span-2";
            const theme = ACCENTS[index % ACCENTS.length];

            return (
              <CaseStudyCard 
                key={study.slug}
                study={study}
                spanClass={spanClass}
                theme={theme}
              />
            );
          })}
        </div>

      </section>
    </div>
  );
}
