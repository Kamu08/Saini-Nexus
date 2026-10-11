"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Target, Sparkles, CheckCircle2 } from "lucide-react";

interface CaseStudyItem {
  slug: string;
  code: string;
  sector: string;
  title: string;
  summary: string;
  tags: string[];
  outcome: string;
  outcomeLabel: string;
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    slug: "cloudscale-enterprise-saas",
    code: "FRAMEWORK 01",
    sector: "Enterprise B2B SaaS",
    title: "Full-Funnel ABM & Buying Committee Demand",
    summary: "Replaces generic 'Book Demo' forms with ungated technical teardowns and Founder Thought Leader Ads targeting verified accounts.",
    tags: ["3-Tier Account ABM", "Ungated PDF Proof", "Thought Leader Ads", "Sales-Accepted SLA"],
    outcome: "3-Tier ABM Engine",
    outcomeLabel: "Targeting Model",
  },
  {
    slug: "apex-industrial-export",
    code: "FRAMEWORK 02",
    sector: "Industrial & Precision Export",
    title: "Direct OEM Sourcing & Procurement Demand",
    summary: "Delivers technical facility tolerances and ISO/AS9100 quality dossiers directly to global supply chain and procurement decision-makers.",
    tags: ["Direct RFQ Engine", "QA Tolerance Carousels", "Supply Chain Targeting", "Zero Broker Fees"],
    outcome: "Direct OEM RFQs",
    outcomeLabel: "Commercial Yield",
  },
  {
    slug: "fintech-consulting-demand-engine",
    code: "FRAMEWORK 03",
    sector: "FinTech & Management Consulting",
    title: "Partner-Led Authority & Regulatory Teardowns",
    summary: "Transforms managing partner regulatory insights into high-signal LinkedIn carousels, driving inbound commercial consultations.",
    tags: ["Managing Partner POV", "Regulatory Breakdown", "C-Level Funnel", "Organic Inbound"],
    outcome: "C-Level Inbound",
    outcomeLabel: "Executive Pipeline",
  },
  {
    slug: "vanguard-enterprise-it-services",
    code: "FRAMEWORK 04",
    sector: "Cybersecurity & IT Infrastructure",
    title: "Technical Risk Blueprints for Enterprise IT Leaders",
    summary: "Replaces cold outbound with ungated cloud compliance risk breakdowns, educating enterprise technology buyers before sales outreach.",
    tags: ["Account-Based Ads", "CISO Risk Matrices", "Technical Evaluator Flow", "Engineering SLA"],
    outcome: "Account Penetration",
    outcomeLabel: "Audience Architecture",
  },
  {
    slug: "zenith-healthcare-diagnostics",
    code: "FRAMEWORK 05",
    sector: "Medical Devices & Diagnostic Tech",
    title: "Direct Institutional Sourcing for Hospital Networks",
    summary: "Targets hospital managing directors and lab operators with equipment uptime guarantees and direct manufacturer warranty.",
    tags: ["Institutional Direct", "Calibration Dossiers", "Hospital Decision Groups", "Direct Warranty"],
    outcome: "Institutional Deals",
    outcomeLabel: "Distribution Channel",
  },
];

type SectorFilter = "all" | "saas" | "industrial" | "consulting" | "it" | "healthcare";

const FILTERS: { id: SectorFilter; label: string; count: number }[] = [
  { id: "all", label: "All Frameworks", count: 5 },
  { id: "saas", label: "Enterprise SaaS", count: 1 },
  { id: "industrial", label: "Industrial Export", count: 1 },
  { id: "consulting", label: "Advisory & FinTech", count: 1 },
  { id: "it", label: "IT & Cybersecurity", count: 1 },
  { id: "healthcare", label: "Healthcare Tech", count: 1 },
];

export function CaseStudiesDirectory() {
  const [activeFilter, setActiveFilter] = useState<SectorFilter>("all");

  const filteredStudies = CASE_STUDIES.filter((study) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "saas") return study.slug === "cloudscale-enterprise-saas";
    if (activeFilter === "industrial") return study.slug === "apex-industrial-export";
    if (activeFilter === "consulting") return study.slug === "fintech-consulting-demand-engine";
    if (activeFilter === "it") return study.slug === "vanguard-enterprise-it-services";
    if (activeFilter === "healthcare") return study.slug === "zenith-healthcare-diagnostics";
    return true;
  });

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-6">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mr-2">
            Sector Filter:
          </span>
          {FILTERS.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 text-xs font-sans font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-[#1572B8] text-white shadow-xs"
                    : "bg-white text-slate-600 hover:text-slate-950 border border-slate-200 hover:border-slate-300"
                }`}
              >
                <span>{f.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {f.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Sleek Agency Architectural Rows */}
        <div className="space-y-4">
          {filteredStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group block bg-white border border-slate-200 hover:border-[#1572B8] p-6 sm:p-8 lg:p-10 transition-all duration-300 relative overflow-hidden shadow-xs hover:shadow-lg"
            >
              {/* Saini Blue Accent Line */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#1572B8] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Col 1: Code & Title (5 cols) */}
                <div className="lg:col-span-5 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#1572B8] tracking-widest">
                      {study.code}
                    </span>
                    <span className="text-slate-300">/</span>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-slate-500 bg-slate-50 px-2.5 py-0.5 border border-slate-200">
                      {study.sector}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-sans font-black text-slate-900 tracking-tight group-hover:text-[#1572B8] transition-colors leading-snug">
                    {study.title}
                  </h3>

                  <div className="flex items-center gap-2 pt-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                      {study.outcomeLabel}:
                    </span>
                    <span className="text-xs font-mono font-bold text-[#1572B8]">
                      {study.outcome}
                    </span>
                  </div>
                </div>

                {/* Col 2: Summary & Strategy Tags (5 cols) */}
                <div className="lg:col-span-5 space-y-3">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {study.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {study.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-[#FAFCFF] border border-slate-200 text-slate-600 text-[11px] font-sans font-medium group-hover:border-blue-100 group-hover:text-slate-800 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Col 3: Sleek Action (2 cols) */}
                <div className="lg:col-span-2 flex items-center lg:justify-end">
                  <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-50 group-hover:bg-[#1572B8] text-slate-700 group-hover:text-white border border-slate-200 group-hover:border-[#1572B8] text-xs font-sans font-bold uppercase tracking-wider transition-all duration-200">
                    <span>Read Teardown</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
