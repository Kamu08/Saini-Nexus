"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  ArrowRight, 
  Briefcase, 
  Laptop, 
  Cpu, 
  Compass, 
  Scale, 
  Factory, 
  Building2, 
  ShieldAlert,
  Target, 
  Users, 
  TrendingUp,
  CheckCircle2,
  FileText
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

const SECTOR_TAGS: Record<string, { badge: string; cycle: string; acv: string }> = {
  "b2b-saas": { badge: "Recurring ARR", cycle: "45–90 Days", acv: "₹5L – ₹35L+ ACV" },
  "technology": { badge: "Multi-Stakeholder", cycle: "60–120 Days", acv: "₹15L – ₹50L+ ACV" },
  "consulting": { badge: "Retainer & Advisory", cycle: "30–60 Days", acv: "₹5L – ₹20L Retainers" },
  "professional-services": { badge: "Fiduciary Trust", cycle: "30–75 Days", acv: "₹3L – ₹15L Engagements" },
  "industrial-manufacturing": { badge: "Global Export & OEM", cycle: "60–150 Days", acv: "₹25L – ₹1Cr+ Contracts" },
  "real-estate": { badge: "Enterprise Occupiers", cycle: "90–180 Days", acv: "Multi-Year Leases / CapEx" },
};

export function SectorCarousel() {
  const industries = Object.values(INDUSTRIES);
  const [selectedSlug, setSelectedSlug] = useState<string>("b2b-saas");

  const currentSector = industries.find((ind) => ind.slug === selectedSlug) || industries[0];
  const Icon = SECTOR_ICONS[currentSector.slug] || Briefcase;
  const currentTags = SECTOR_TAGS[currentSector.slug] || {
    badge: "Enterprise B2B",
    cycle: "45–90 Days",
    acv: "₹5L – ₹25L+ ACV"
  };

  return (
    <section 
      className="w-full bg-slate-50/60 border-y border-slate-200/80 relative py-14 sm:py-24 my-10 sm:my-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          
          {/* Header Metadata Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-5">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-blue-600 inline-block animate-pulse" />
              <span className="text-[11px] font-sans uppercase tracking-widest font-semibold text-slate-500">
                SECTOR ARCHITECTURES // INDUSTRY PLAYBOOKS
              </span>
            </div>

            <div className="flex items-center gap-3 font-sans text-xs text-slate-600 font-medium">
              <span className="px-3 py-1 bg-white border border-slate-200 rounded-full shadow-2xs">
                REF: SN-IND-2026
              </span>
              <span className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 font-semibold rounded-full">
                6 Active Playbooks
              </span>
            </div>
          </div>

          {/* Section Headline */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-sans font-semibold">
                <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                <span>Industry-Specific Blueprints</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-slate-900 tracking-tight leading-tight">
                B2B Growth Across Key Sectors.
              </h2>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Enterprise buyers don&apos;t buy generic marketing. We engineer acquisition systems aligned to the specific buying committee dynamics, risk hesitations, and procurement cycles of your sector.
              </p>
            </div>

            <Link
              href="/industries"
              className="neo-btn-white text-xs shrink-0 self-start lg:self-end"
            >
              <span>Explore All 6 Industries</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* ========================================================= */}
          {/* INTERACTIVE DOSSIER CONSOLE: 2-COLUMN LAYOUT             */}
          {/* ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-2">
            
            {/* LEFT: SECTOR TABS */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 no-scrollbar">
              {industries.map((ind, idx) => {
                const ItemIcon = SECTOR_ICONS[ind.slug] || Briefcase;
                const isSelected = ind.slug === selectedSlug;
                const tagInfo = SECTOR_TAGS[ind.slug];

                return (
                  <button
                    key={ind.slug}
                    type="button"
                    onClick={() => setSelectedSlug(ind.slug)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-xl transition-all flex items-center justify-between border cursor-pointer shrink-0 min-w-[240px] lg:min-w-0 ${
                      isSelected
                        ? "bg-slate-900 text-white border-slate-900 shadow-md"
                        : "bg-white text-slate-800 hover:bg-slate-50 border-slate-200/90 shadow-2xs"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                      }`}>
                        <ItemIcon className="w-4 h-4" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[11px] font-sans font-semibold ${
                            isSelected ? "text-slate-400" : "text-slate-400"
                          }`}>
                            0{idx + 1}.
                          </span>
                          <span className={`font-sans font-bold text-sm sm:text-base block leading-tight ${
                            isSelected ? "text-white" : "text-slate-900"
                          }`}>
                            {ind.name}
                          </span>
                        </div>
                        <span className={`text-[11px] font-sans uppercase tracking-wider block mt-0.5 font-medium ${
                          isSelected ? "text-blue-300" : "text-slate-500"
                        }`}>
                          {tagInfo?.badge || "Enterprise"}
                        </span>
                      </div>
                    </div>

                    <span className={`text-xs font-sans font-bold ${
                      isSelected ? "text-blue-400" : "text-slate-300"
                    }`}>
                      {isSelected ? "●" : "→"}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* RIGHT: THE CRISP MODERN DOSSIER SHEET */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSector.slug}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg shadow-slate-900/5 space-y-7 relative"
                >
                  
                  {/* Dossier Header Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-100 pb-5">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 bg-blue-50 text-blue-700 font-sans text-xs font-semibold uppercase tracking-wider border border-blue-200/60 rounded-full">
                          {currentTags.badge}
                        </span>
                        <span className="text-slate-400 font-sans text-xs">
                          // {currentSector.tagline}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-slate-900 tracking-tight">
                        {currentSector.name}
                      </h3>
                    </div>

                    {/* Telemetry Stamps */}
                    <div className="flex sm:flex-col items-end gap-1 shrink-0 font-sans text-right">
                      <span className="text-xs text-slate-500 font-medium">
                        Typical Cycle: <strong className="text-slate-900 font-semibold">{currentTags.cycle}</strong>
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        Target ACV: <strong className="text-blue-600 font-semibold">{currentTags.acv}</strong>
                      </span>
                    </div>
                  </div>

                  {/* Subheadline & Market Context */}
                  <div className="space-y-2.5">
                    <p className="text-base sm:text-lg font-sans font-semibold text-slate-900 leading-snug">
                      {currentSector.heroHeadline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {currentSector.marketContext}
                    </p>
                  </div>

                  {/* Core Friction vs Winning Playbook */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    
                    {/* Friction / Risk */}
                    <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-100 space-y-2.5">
                      <div className="flex items-center gap-2 text-rose-800 text-xs font-sans font-bold uppercase tracking-wider">
                        <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                        <span>The Core Friction</span>
                      </div>
                      <ul className="space-y-2 text-xs text-slate-700 font-medium">
                        {currentSector.coreFriction.map((fric, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-rose-600 font-bold leading-none mt-0.5">✕</span>
                            <span className="leading-snug">{fric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Winning Angle */}
                    <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 space-y-2.5">
                      <div className="flex items-center gap-2 text-blue-800 text-xs font-sans font-bold uppercase tracking-wider">
                        <Target className="w-3.5 h-3.5 text-blue-600" />
                        <span>The Architecture Fix</span>
                      </div>
                      <ul className="space-y-2 text-xs text-slate-800 font-medium">
                        {currentSector.playbookStrategy.map((strat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold leading-none mt-0.5">✓</span>
                            <span className="leading-snug">
                              <strong className="text-slate-900 font-semibold">{strat.title}:</strong> {strat.description}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Buying Committee Addressed */}
                  <div className="space-y-2.5 pt-1">
                    <div className="flex items-center gap-2 text-slate-600 text-xs font-sans font-bold uppercase tracking-wider">
                      <Users className="w-3.5 h-3.5 text-slate-700" />
                      <span>Multi-Stakeholder Committee Addressed</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {currentSector.buyingCommittee.map((b, i) => (
                        <div key={i} className="p-3 bg-slate-50/80 border border-slate-100 rounded-xl space-y-1">
                          <span className="text-xs font-sans font-bold text-slate-900 block leading-tight">
                            {b.role.split("(")[0].trim()}
                          </span>
                          <span className="text-[11px] text-slate-600 block line-clamp-2 leading-tight font-normal">
                            <strong className="font-semibold text-slate-800">Angle:</strong> {b.winningAngle}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metric Stamped Banner & Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    
                    {/* Result Metric */}
                    <div className="flex items-center gap-3">
                      <div className="px-3.5 py-2 bg-slate-950 text-white font-sans text-lg sm:text-xl font-extrabold rounded-xl shadow-xs">
                        {currentSector.featuredResult.metric}
                      </div>
                      <div>
                        <span className="text-[10px] font-sans text-slate-500 uppercase tracking-wider block font-semibold">
                          Verified Metric
                        </span>
                        <span className="text-xs font-sans text-slate-800 font-medium block leading-tight">
                          {currentSector.featuredResult.context}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2.5 shrink-0">
                      <Link
                        href={`/audit?stage=buyer-context&industry=${currentSector.slug}`}
                        className="neo-btn-blue text-xs"
                      >
                        <span>Audit This Sector</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        href={`/industries/${currentSector.slug}`}
                        className="neo-btn-white text-xs"
                      >
                        <span>Full Playbook</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* BOTTOM ADAPTABILITY STRIP */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-0.5">
              <span className="text-sm font-sans font-bold text-slate-900 tracking-tight block">
                Don&apos;t see your specific B2B niche or specialized domain?
              </span>
              <p className="text-xs text-slate-600">
                Our 7-stage commercial architecture is built for multi-stakeholder purchasing environments across all high-ACV markets.
              </p>
            </div>

            <Link 
              href="/audit" 
              className="neo-btn-blue text-xs shrink-0 w-full sm:w-auto"
            >
              <span>Request Custom Audit</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

        </div>
    </section>
  );
}
