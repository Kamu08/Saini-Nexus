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
  return (
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

        <Link href="/case-studies" className="neo-btn-white w-fit shrink-0">
          <span>Explore All Frameworks</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </Link>
      </div>

      {/* Grid Container: 2 Top Wide Cards, 3 Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">

        {CASE_PREVIEWS.map((study, index) => {
          const spanClass = index < 2 ? "lg:col-span-3" : "lg:col-span-2";

          return (
            <div
              key={study.slug}
              className={`${spanClass} bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200/90 hover:border-[#38a9eb]/60 shadow-2xs hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group relative overflow-hidden space-y-5`}
            >
              {/* Subtle Ambient Corner Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1572b8]/5 -mr-12 -mt-12 rounded-full pointer-events-none group-hover:bg-[#1572b8]/10 transition-colors" />

              <div className="space-y-4 relative z-10">
                
                {/* Header: Code Pill on Left, Sector Tag on Right */}
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#e6f4fc] text-[#0f539a] border border-[#bae6fd] font-sans text-xs font-semibold shrink-0">
                    {study.clientCode}
                  </span>
                  <span className="text-[11px] font-sans font-medium text-slate-500 uppercase tracking-wider text-right">
                    {study.sector}
                  </span>
                </div>

                {/* Primary Outcome Callout Banner */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-0.5">
                  <span className="text-[11px] font-sans uppercase font-semibold text-slate-500 block">
                    {study.metricLabel}
                  </span>
                  <div className="text-2xl sm:text-3xl font-sans font-extrabold text-slate-900 tracking-tight">
                    {study.primaryMetric}
                  </div>
                </div>

                {/* Client Name & Headline */}
                <div className="space-y-1">
                  <span className="text-xs font-sans font-semibold text-[#1572b8] block">
                    {study.clientName}
                  </span>
                  <h3 className="text-base sm:text-lg font-sans font-bold text-slate-900 leading-snug group-hover:text-[#1572b8] transition-colors">
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
                  <span className="text-[#0f539a] font-semibold">{study.secondaryStat}</span>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
                <span className="text-xs font-sans font-medium text-slate-500 group-hover:text-slate-900 transition-colors">
                  Campaign Blueprint
                </span>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="px-4 py-2 rounded-full bg-slate-900 group-hover:bg-[#1572b8] group-hover:shadow-[0_4px_14px_rgba(21,114,184,0.35)] text-white text-xs font-sans font-semibold shadow-xs transition-all flex items-center gap-1.5"
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
