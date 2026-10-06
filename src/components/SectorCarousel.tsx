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
  FileText,
  Bookmark
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* ========================================================= */}
      {/* TACTILE PAPER CANVAS CONTAINER                           */}
      {/* Vintage drafting paper background with texture & borders */}
      {/* ========================================================= */}
      <div 
        className="bg-[#FAF7EF] border-3 border-black rounded-none sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[8px_8px_0px_#000000] space-y-8 relative overflow-hidden"
        style={{
          backgroundImage: "url('/textures/paper-texture.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "400px 400px",
        }}
      >
        
        {/* Archival Folder Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-black/20 pb-5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-black inline-block" />
            <span className="text-[11px] font-mono uppercase tracking-widest font-extrabold text-zinc-700">
              ARCHIVE DOSSIER // SECTOR ARCHITECTURES
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px] text-zinc-600 font-semibold">
            <span className="px-2.5 py-1 bg-white border border-black/30 shadow-[1px_1px_0px_#000000]">
              REF: SN-IND-2026
            </span>
            <span className="px-2.5 py-1 bg-[#60A5FA]/20 border border-black/30 text-black font-bold">
              6 ACTIVE PLAYBOOKS
            </span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-[#FDE047] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-extrabold shadow-[2px_2px_0px_#000000]">
              <Briefcase className="w-3.5 h-3.5 text-black" />
              <span>Industry-Specific Blueprints</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black tracking-tight leading-tight">
              B2B Growth Across Key Sectors.
            </h2>
            
            <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-medium">
              Enterprise buyers don&apos;t buy generic marketing. We engineer acquisition systems aligned to the specific buying committee dynamics, risk hesitations, and procurement cycles of your sector.
            </p>
          </div>

          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-black text-black font-mono text-xs font-extrabold uppercase tracking-wider shadow-[3px_3px_0px_#000000] hover:bg-black hover:text-white hover:translate-x-[1px] hover:translate-y-[1px] transition-all shrink-0 self-start lg:self-end"
          >
            <span>Explore All 6 Industries</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ========================================================= */}
        {/* INTERACTIVE DOSSIER CONSOLE: 2-COLUMN LAYOUT             */}
        {/* Left: Tactile Stamped Sector Index Tabs                   */}
        {/* Right: Crisp Archival Dossier Sheet                       */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-2">
          
          {/* ------------------------------------------------------- */}
          {/* LEFT: SECTOR TABS (Tactile Index Tabs)                  */}
          {/* ------------------------------------------------------- */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none">
            {industries.map((ind, idx) => {
              const ItemIcon = SECTOR_ICONS[ind.slug] || Briefcase;
              const isSelected = ind.slug === selectedSlug;
              const tagInfo = SECTOR_TAGS[ind.slug];

              return (
                <button
                  key={ind.slug}
                  type="button"
                  onClick={() => setSelectedSlug(ind.slug)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-none transition-all flex items-center justify-between border-2 border-black cursor-pointer shrink-0 min-w-[240px] lg:min-w-0 ${
                    isSelected
                      ? "bg-white text-black shadow-[4px_4px_0px_#000000] translate-x-1"
                      : "bg-[#F5F1E8] text-zinc-700 hover:bg-white hover:text-black shadow-[2px_2px_0px_#000000]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-none border-2 border-black flex items-center justify-center shrink-0 ${
                      isSelected ? "bg-[#60A5FA] text-black" : "bg-white text-zinc-600"
                    }`}>
                      <ItemIcon className="w-4 h-4" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold text-zinc-500">
                          0{idx + 1}.
                        </span>
                        <span className="font-serif font-bold text-sm sm:text-base text-black block leading-tight">
                          {ind.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider block mt-0.5">
                        {tagInfo?.badge || "Enterprise"}
                      </span>
                    </div>
                  </div>

                  <span className={`text-xs font-mono font-bold ${
                    isSelected ? "text-black" : "text-zinc-400"
                  }`}>
                    {isSelected ? "●" : "→"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ------------------------------------------------------- */}
          {/* RIGHT: THE CRISP ARCHIVAL DOSSIER SHEET                 */}
          {/* Stamped white sheet with paper drop shadow               */}
          {/* ------------------------------------------------------- */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSector.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white border-3 border-black p-6 sm:p-8 lg:p-10 shadow-[6px_6px_0px_#000000] space-y-7 relative"
              >
                
                {/* Dossier Header Bar */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b-2 border-black pb-5">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-[#60A5FA] text-black font-mono text-[10px] font-extrabold uppercase tracking-wider border border-black shadow-[1.5px_1.5px_0px_#000000]">
                        {currentTags.badge}
                      </span>
                      <span className="text-zinc-500 font-mono text-[11px] font-bold">
                        // {currentSector.tagline}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black tracking-tight">
                      {currentSector.name}
                    </h3>
                  </div>

                  {/* Telemetry Stamps */}
                  <div className="flex sm:flex-col items-end gap-1 shrink-0 font-mono text-right">
                    <span className="text-[10px] text-zinc-500 uppercase font-bold">
                      Typical Cycle: <strong className="text-black">{currentTags.cycle}</strong>
                    </span>
                    <span className="text-[10px] text-zinc-500 uppercase font-bold">
                      Target ACV: <strong className="text-[#2563EB]">{currentTags.acv}</strong>
                    </span>
                  </div>
                </div>

                {/* Subheadline & Market Context */}
                <div className="space-y-3">
                  <p className="text-base sm:text-lg font-serif font-medium text-black leading-snug">
                    {currentSector.heroHeadline}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    {currentSector.marketContext}
                  </p>
                </div>

                {/* Core Friction vs Winning Playbook (Two-column comparison) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  
                  {/* Friction / Risk */}
                  <div className="p-4 bg-[#FAF7EF] border-2 border-black shadow-[2px_2px_0px_#000000] space-y-2.5">
                    <div className="flex items-center gap-2 text-red-700 text-xs font-mono font-extrabold uppercase tracking-wider">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>The Core Friction</span>
                    </div>
                    <ul className="space-y-2 text-xs text-zinc-700">
                      {currentSector.coreFriction.map((fric, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-600 font-bold leading-none mt-0.5">✕</span>
                          <span className="leading-snug">{fric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Winning Angle */}
                  <div className="p-4 bg-[#EFF6FF] border-2 border-black shadow-[2px_2px_0px_#000000] space-y-2.5">
                    <div className="flex items-center gap-2 text-[#2563EB] text-xs font-mono font-extrabold uppercase tracking-wider">
                      <Target className="w-3.5 h-3.5" />
                      <span>The Architecture Fix</span>
                    </div>
                    <ul className="space-y-2 text-xs text-zinc-800">
                      {currentSector.playbookStrategy.map((strat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#2563EB] font-bold leading-none mt-0.5">✓</span>
                          <span className="leading-snug">
                            <strong className="text-black font-semibold">{strat.title}:</strong> {strat.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Buying Committee Addressed */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-2 text-zinc-700 text-xs font-mono font-bold uppercase tracking-wider">
                    <Users className="w-3.5 h-3.5 text-black" />
                    <span>Multi-Stakeholder Committee Addressed</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {currentSector.buyingCommittee.map((b, i) => (
                      <div key={i} className="p-2.5 bg-white border border-black/30 rounded-none space-y-1">
                        <span className="text-xs font-serif font-bold text-black block leading-tight">
                          {b.role.split("(")[0].trim()}
                        </span>
                        <span className="text-[11px] text-zinc-600 block line-clamp-2 leading-tight">
                          <strong>Angle:</strong> {b.winningAngle}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metric Stamped Banner & Action Buttons */}
                <div className="pt-4 border-t-2 border-black flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  
                  {/* Result Metric */}
                  <div className="flex items-center gap-3">
                    <div className="px-3.5 py-2 bg-black text-white font-mono text-lg sm:text-xl font-extrabold border-2 border-black shadow-[2px_2px_0px_#60A5FA]">
                      {currentSector.featuredResult.metric}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block font-bold">
                        Verified Metric
                      </span>
                      <span className="text-xs font-mono text-black font-semibold block leading-tight">
                        {currentSector.featuredResult.context}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2.5 shrink-0">
                    <Link
                      href={`/audit?stage=buyer-context&industry=${currentSector.slug}`}
                      className="inline-flex items-center gap-2 py-3 px-4 bg-[#60A5FA] border-2 border-black text-black font-mono text-xs font-extrabold uppercase tracking-wider shadow-[3px_3px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1.5px_1.5px_0px_#000000] transition-all"
                    >
                      <span>Audit This Sector</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href={`/industries/${currentSector.slug}`}
                      className="inline-flex items-center gap-2 py-3 px-4 bg-white hover:bg-zinc-100 border-2 border-black text-black font-mono text-xs font-extrabold uppercase tracking-wider shadow-[3px_3px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1.5px_1.5px_0px_#000000] transition-all"
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

        {/* ========================================================= */}
        {/* BOTTOM ADAPTABILITY STRIP                                */}
        {/* Stamped paper footer card                                */}
        {/* ========================================================= */}
        <div className="p-4 sm:p-5 rounded-none bg-white border-2 border-black shadow-[3px_3px_0px_#000000] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-0.5">
            <span className="text-xs font-mono font-bold text-black uppercase tracking-wider block">
              Don&apos;t see your specific B2B niche or specialized domain?
            </span>
            <p className="text-xs text-zinc-600">
              Our 7-stage commercial architecture is built for multi-stakeholder purchasing environments across all high-ACV markets.
            </p>
          </div>

          <Link 
            href="/audit" 
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FDE047] text-black font-mono text-xs font-extrabold uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all shrink-0 w-full sm:w-auto justify-center"
          >
            <span>Request Custom Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
