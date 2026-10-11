"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FlaskConical, ArrowUpRight, CheckCircle2, ChevronRight } from "lucide-react";
import { CASE_STUDIES } from "@/data/caseStudies";

export function CampaignLab() {
  const [filterIndustry, setFilterIndustry] = useState<string>("all");
  const [activeSlug, setActiveSlug] = useState<string>(CASE_STUDIES[0].slug);

  const filteredCases = CASE_STUDIES.filter(
    (c) => filterIndustry === "all" || c.industry === filterIndustry
  );

  const selectedCase = CASE_STUDIES.find((c) => c.slug === activeSlug) || CASE_STUDIES[0];

  return (
    <div className="w-full bg-[#0F172A] border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#67C7F8 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-800 gap-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 border border-slate-700 text-white text-[10px] font-sans font-bold uppercase tracking-[0.2em] mb-4">
            <FlaskConical className="w-3.5 h-3.5 text-[#38A9EB]" />
            <span>B2B Execution Frameworks</span>
          </div>
          <h3 className="text-3xl sm:text-5xl font-sans font-black text-white tracking-tight">
            The Saini Nexus Campaign Lab
          </h3>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl font-medium leading-relaxed">
            Explore our campaign methodologies: Strategic Diagnosis, Tested Hypothesis, Creative Hooks, Targeting Architecture, and Commercial KPIs.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 bg-slate-900 p-1.5 border border-slate-800 overflow-x-auto no-scrollbar max-w-full">
          <span className="text-[10px] font-sans text-slate-500 font-bold uppercase tracking-[0.2em] px-3 shrink-0">Filter:</span>
          {["all", "SaaS", "Industrial", "Consulting"].map((ind) => (
            <button
              key={ind}
              onClick={() => setFilterIndustry(ind)}
              className={`px-4 py-2 text-[10px] font-sans font-bold uppercase tracking-[0.1em] transition-colors cursor-pointer shrink-0 ${
                filterIndustry === ind 
                  ? "bg-[#1572B8] text-white" 
                  : "bg-transparent text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              {ind}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 relative z-10">
        {filteredCases.map((item) => {
          const isSelected = item.slug === selectedCase.slug;
          return (
            <button
              key={item.slug}
              onClick={() => setActiveSlug(item.slug)}
              className={`text-left p-5 border transition-all flex flex-col justify-between h-32 group relative ${
                isSelected 
                  ? "bg-[#1572B8] border-[#38A9EB] text-white shadow-lg" 
                  : "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:border-slate-700"
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[9px] font-sans font-bold uppercase tracking-[0.2em] px-2 py-1 ${
                    isSelected ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400"
                  }`}>
                    {item.clientCode}
                  </span>
                </div>
                <h4 className={`text-lg font-sans font-black leading-tight line-clamp-1 ${
                  isSelected ? "text-white" : "group-hover:text-white"
                }`}>
                  {item.clientName}
                </h4>
                <p className={`text-[9px] font-sans font-bold uppercase tracking-[0.2em] mt-1 ${
                  isSelected ? "text-[#D4EFFC]" : "text-slate-500"
                }`}>
                  {item.industry}
                </p>
              </div>

              <div className={`pt-3 border-t w-full flex items-center justify-between text-[10px] font-sans uppercase tracking-widest ${
                isSelected ? "border-white/20" : "border-slate-800"
              }`}>
                <span className={isSelected ? "text-[#D4EFFC]" : "text-slate-500 font-bold"}>Target Outcome:</span>
                <span className={`font-black ${isSelected ? "text-white" : "text-slate-300"}`}>
                  {item.businessOutcomes[0].metric}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Experiment Terminal Card */}
      <div className="bg-white border border-slate-200 p-8 sm:p-12 relative z-10 shadow-xl">
        
        {/* Top Metadata row */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-slate-200 text-xs">
          <div className="flex items-center gap-4">
            <span className="px-3 py-1.5 bg-[#1572B8] text-white font-sans font-black uppercase tracking-[0.1em] text-sm">
              {selectedCase.clientCode}
            </span>
            <span className="text-slate-900 font-sans font-black text-xl sm:text-2xl">{selectedCase.clientName}</span>
            <span className="text-slate-500 font-sans font-bold text-[10px] uppercase tracking-[0.2em] bg-slate-50 px-2 py-1 border border-slate-200">
              {selectedCase.industry}
            </span>
          </div>

          <div className="flex items-center gap-6 text-slate-500 font-sans font-bold text-[10px] uppercase tracking-[0.1em]">
            <span className="flex flex-col">Market <strong className="text-slate-900 text-xs">{selectedCase.market}</strong></span>
            <span className="flex flex-col">Duration <strong className="text-slate-900 text-xs">{selectedCase.timeline}</strong></span>
          </div>
        </div>

        {/* 2-Column Core Anatomy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8">
          
          {/* Left Column: Problem, Diagnosis & Execution */}
          <div className="lg:col-span-7 space-y-8 text-sm leading-relaxed">
            <div className="space-y-6">
              <div>
                <span className="text-[#1572B8] text-[10px] font-sans font-bold uppercase tracking-[0.2em] block mb-2 border-b border-slate-100 pb-1">
                  The Core Bottleneck
                </span>
                <p className="text-slate-700 font-medium text-base">{selectedCase.coreChallenge}</p>
              </div>

              <div>
                <span className="text-[#1572B8] text-[10px] font-sans font-bold uppercase tracking-[0.2em] block mb-2 border-b border-slate-100 pb-1">
                  Diagnostic Teardown
                </span>
                <p className="text-slate-700 font-medium text-base">{selectedCase.diagnosis}</p>
              </div>

              <div className="bg-slate-50 border-l-4 border-[#1572B8] p-5">
                <span className="text-slate-900 text-[10px] font-sans font-bold uppercase tracking-[0.2em] block mb-2">
                  The Working Hypothesis
                </span>
                <p className="text-slate-800 italic font-medium text-lg">
                  "{selectedCase.hypothesis}"
                </p>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-slate-500 text-[10px] font-sans font-bold uppercase tracking-[0.2em] block mb-4 border-b border-slate-100 pb-1">
                Execution Architecture
              </span>
              <ul className="space-y-4">
                {selectedCase.execution.map((st, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium bg-white border border-slate-100 p-4 hover:border-[#38A9EB] transition-colors shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#38A9EB] shrink-0" />
                    <span>{st}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Creative Hook, Campaign Metrics & Business Outcomes */}
          <div className="lg:col-span-5 bg-slate-900 p-8 text-white">
            <div>
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#38A9EB] block mb-3 border-b border-slate-800 pb-2">
                Campaign Hook & Creative Angle
              </span>
              <p className="text-sm text-slate-300 italic font-medium">
                {selectedCase.campaignHook}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs pt-6 mt-6 border-t border-slate-800">
              <div>
                <span className="text-slate-500 block text-[9px] font-sans font-bold uppercase tracking-[0.2em] mb-1">Format</span>
                <span className="text-white text-xs font-sans font-bold">{selectedCase.creativeFormat}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[9px] font-sans font-bold uppercase tracking-[0.2em] mb-1">Spend Profile</span>
                <span className="text-white text-xs font-sans font-bold">{selectedCase.spendProfile}</span>
              </div>
            </div>

            {/* Campaign Metrics */}
            <div className="pt-8 mt-8 border-t border-slate-800">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-slate-500 block mb-4">
                Operational Metrics
              </span>
              <div className="grid grid-cols-1 gap-3">
                {selectedCase.campaignMetrics.map((res, i) => (
                  <div key={i} className="bg-slate-800 border border-slate-700 p-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-white font-sans font-bold">{res.label}</div>
                      <div className="text-[10px] text-slate-400 font-sans mt-0.5">{res.context}</div>
                    </div>
                    <span className="text-lg font-sans font-black text-white">{res.metric}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Outcomes */}
            <div className="pt-8 mt-8 border-t border-slate-800">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#38A9EB] block mb-4">
                Commercial Pipeline Outcomes
              </span>
              <div className="grid grid-cols-1 gap-3">
                {selectedCase.businessOutcomes.map((res, i) => (
                  <div key={i} className="bg-[#1572B8] border border-[#38A9EB] p-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-white font-sans font-bold">{res.label}</div>
                      <div className="text-[10px] text-[#D4EFFC] font-sans mt-0.5">{res.context}</div>
                    </div>
                    <span className="text-xl font-sans font-black text-white">{res.metric}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-800">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-slate-500 block mb-2">Key Strategic Takeaway</span>
              <p className="text-slate-300 text-sm font-medium italic">{selectedCase.keyLearning}</p>
            </div>
          </div>

        </div>

        {/* Footer CTA in Card */}
        <div className="pt-8 mt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href={`/case-studies/${selectedCase.slug}`}
            className="text-xs text-slate-900 hover:text-[#1572B8] font-sans font-bold uppercase tracking-[0.2em] flex items-center gap-2 group shrink-0 transition-colors"
          >
            <span>Read Complete Case Teardown</span>
            <ArrowUpRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/book"
            className="px-8 py-4 bg-[#1572B8] hover:bg-slate-900 text-white text-xs font-sans font-bold uppercase tracking-[0.2em] transition-colors w-fit shrink-0 shadow-sm"
          >
            <span>Book a Strategy Call</span>
          </Link>
        </div>

      </div>

    </div>
  );
}
