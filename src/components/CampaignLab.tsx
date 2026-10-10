"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  FlaskConical, 
  ArrowUpRight, 
  CheckCircle2, 
  Search, 
  Filter, 
  Layers, 
  Sparkles,
  TrendingUp,
  BarChart3,
  Target
} from "lucide-react";
import { CASE_STUDIES, CaseStudyItem } from "@/data/caseStudies";

export function CampaignLab() {
  const [selectedCase, setSelectedCase] = useState<CaseStudyItem>(CASE_STUDIES[0]);
  const [filterIndustry, setFilterIndustry] = useState<string>("all");

  const filteredCases = filterIndustry === "all" 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter((c) => c.industry.toLowerCase().includes(filterIndustry.toLowerCase()));

  return (
    <div className="w-full bg-slate-50/60 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-200 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <FlaskConical className="w-3.5 h-3.5 text-blue-600" />
            <span>B2B Execution Frameworks</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Saini Nexus Campaign Lab
          </h3>
          <p className="text-slate-600 text-sm mt-1 max-w-xl font-normal">
            Explore our campaign methodologies: Strategic Diagnosis, Tested Hypothesis, Creative Hooks, Targeting Architecture, and Commercial KPIs.
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-200 shadow-xs overflow-x-auto no-scrollbar max-w-full">
          <span className="text-xs text-slate-500 font-semibold px-2 shrink-0">Filter:</span>
          {["all", "SaaS", "Industrial", "Consulting"].map((ind) => (
            <button
              key={ind}
              onClick={() => setFilterIndustry(ind)}
              className={`px-3 py-1 text-xs rounded-lg font-medium transition-all cursor-pointer shrink-0 ${
                filterIndustry === ind 
                  ? "bg-blue-600 text-white shadow-xs font-semibold" 
                  : "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {ind === "all" ? "All" : ind}
            </button>
          ))}
        </div>
      </div>

      {/* Case Study Cards Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {filteredCases.map((item) => {
          const isSelected = item.slug === selectedCase.slug;
          return (
            <button
              key={item.slug}
              onClick={() => setSelectedCase(item)}
              className={`p-5 rounded-2xl border text-left transition-all duration-150 flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? "bg-blue-600 text-white border-blue-600 shadow-md -translate-y-0.5"
                  : "bg-white text-slate-800 hover:bg-slate-50 border-slate-200/90 shadow-xs"
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className={`font-bold uppercase tracking-wider ${isSelected ? "text-blue-100" : "text-blue-600"}`}>
                    {item.clientCode}
                  </span>
                  <span className={`font-medium ${isSelected ? "text-blue-100" : "text-slate-500"}`}>
                    {item.market}
                  </span>
                </div>
                <h4 className={`text-base font-bold mb-1 ${isSelected ? "text-white" : "text-slate-900"}`}>
                  {item.clientName}
                </h4>
                <p className={`text-xs mb-3 font-normal ${isSelected ? "text-blue-100" : "text-slate-600"}`}>
                  {item.industry}
                </p>
              </div>

              <div className={`pt-3 border-t w-full flex items-center justify-between text-xs ${
                isSelected ? "border-white/20" : "border-slate-100"
              }`}>
                <span className={isSelected ? "text-blue-100" : "text-slate-500"}>Target Outcome:</span>
                <span className={`font-bold ${isSelected ? "text-white" : "text-slate-900"}`}>
                  {item.businessOutcomes[0].metric}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Experiment Terminal Card */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
        
        {/* Top Metadata row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 text-xs">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-semibold">
              {selectedCase.clientCode}
            </span>
            <span className="text-slate-900 font-bold text-base">{selectedCase.clientName}</span>
            <span className="text-slate-500 font-normal">({selectedCase.industry})</span>
          </div>

          <div className="flex items-center gap-4 text-slate-600 font-normal">
            <span>Market: <strong className="text-slate-900 font-semibold">{selectedCase.market}</strong></span>
            <span>Duration: <strong className="text-slate-900 font-semibold">{selectedCase.timeline}</strong></span>
          </div>
        </div>

        {/* 2-Column Core Anatomy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Problem, Diagnosis & Execution */}
          <div className="lg:col-span-7 space-y-4 text-sm leading-relaxed">
            <div>
              <span className="text-rose-600 text-xs font-semibold uppercase tracking-wider block mb-1">
                The Core Bottleneck:
              </span>
              <p className="text-slate-700 font-normal">{selectedCase.coreChallenge}</p>
            </div>

            <div>
              <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider block mb-1">
                Diagnostic Teardown:
              </span>
              <p className="text-slate-700 font-normal">{selectedCase.diagnosis}</p>
            </div>

            <div>
              <span className="text-slate-900 text-xs font-semibold uppercase tracking-wider block mb-1">
                The Working Hypothesis:
              </span>
              <p className="text-slate-800 italic bg-blue-50/60 p-3.5 rounded-xl border border-blue-100/80 font-normal">
                &ldquo;{selectedCase.hypothesis}&rdquo;
              </p>
            </div>

            <div className="pt-2">
              <span className="text-slate-600 text-xs font-semibold uppercase tracking-wider block mb-2">
                Execution Steps:
              </span>
              <ul className="space-y-2">
                {selectedCase.execution.map((st, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-normal">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{st}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Creative Hook, Campaign Metrics & Business Outcomes */}
          <div className="lg:col-span-5 bg-slate-50/70 border border-slate-200/80 rounded-xl p-5 space-y-4">
            <div>
              <span className="text-[11px] text-blue-600 block mb-1 font-semibold uppercase">
                CAMPAIGN HOOK & CREATIVE ANGLE:
              </span>
              <p className="text-xs text-slate-800 italic bg-white p-3 rounded-lg border border-slate-200 font-normal">
                {selectedCase.campaignHook}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs pt-1">
              <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[10px] font-semibold">FORMAT:</span>
                <span className="text-slate-900 text-[11px] font-bold">{selectedCase.creativeFormat}</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[10px] font-semibold">SPEND PROFILE:</span>
                <span className="text-slate-900 text-[11px] font-bold">{selectedCase.spendProfile}</span>
              </div>
            </div>

            {/* Campaign Metrics */}
            <div className="pt-2 border-t border-slate-200">
              <span className="text-[11px] text-slate-600 block mb-2 font-semibold uppercase">
                CAMPAIGN OPERATIONAL METRICS:
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {selectedCase.campaignMetrics.map((res, i) => (
                  <div key={i} className="bg-white border border-slate-200/80 p-2.5 rounded-lg flex items-center justify-between shadow-xs">
                    <div>
                      <div className="text-xs text-slate-900 font-semibold">{res.label}</div>
                      <div className="text-[10px] text-slate-500">{res.context}</div>
                    </div>
                    <span className="text-sm font-bold text-slate-900">{res.metric}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Outcomes */}
            <div className="pt-2 border-t border-slate-200">
              <span className="text-[11px] text-blue-600 block mb-2 font-semibold uppercase">
                COMMERCIAL PIPELINE OUTCOMES:
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {selectedCase.businessOutcomes.map((res, i) => (
                  <div key={i} className="bg-white border border-slate-200/80 p-2.5 rounded-lg flex items-center justify-between shadow-xs">
                    <div>
                      <div className="text-xs text-slate-900 font-semibold">{res.label}</div>
                      <div className="text-[10px] text-slate-500">{res.context}</div>
                    </div>
                    <span className="text-base font-bold text-blue-600">{res.metric}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 text-xs">
              <span className="text-[11px] text-slate-500 block font-semibold">KEY STRATEGIC TAKEAWAY:</span>
              <p className="text-slate-700 text-xs mt-0.5 font-normal">{selectedCase.keyLearning}</p>
            </div>
          </div>

        </div>

        {/* Footer CTA in Card */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Link
            href={`/case-studies/${selectedCase.slug}`}
            className="text-xs text-slate-700 hover:text-blue-600 font-semibold flex items-center gap-1.5 group shrink-0"
          >
            <span>Read Complete Case Teardown</span>
            <ArrowUpRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/book"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-all w-fit shrink-0"
          >
            <span>Book a Strategy Call</span>
          </Link>
        </div>

      </div>

    </div>
  );
}
