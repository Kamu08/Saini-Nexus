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
    <div className="w-full bg-[#FAF7EF] border-2 border-black rounded-3xl p-6 sm:p-10 shadow-[4px_4px_0px_#000000]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b-2 border-black/10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider mb-3 font-bold shadow-[2px_2px_0px_#000000]">
            <FlaskConical className="w-3.5 h-3.5" />
            B2B Execution Frameworks
          </div>
          <h3 className="text-2xl sm:text-4xl font-serif font-bold text-black tracking-tight">
            The Saini Nexus Campaign Lab
          </h3>
          <p className="text-zinc-700 text-sm mt-1 max-w-xl font-medium">
            Explore our campaign methodologies: Strategic Diagnosis, Tested Hypothesis, Creative Hooks, Targeting Architecture, and Commercial KPIs.
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-2xl border-2 border-black shadow-[2px_2px_0px_#000000] overflow-x-auto no-scrollbar max-w-full">
          <span className="text-xs font-mono text-zinc-600 font-bold px-1 shrink-0">Filter:</span>
          {["all", "SaaS", "Industrial", "Consulting"].map((ind) => (
            <button
              key={ind}
              onClick={() => setFilterIndustry(ind)}
              className={`px-3 py-1 text-xs rounded-xl font-mono font-bold transition-all cursor-pointer border shrink-0 ${
                filterIndustry === ind 
                  ? "bg-[#60A5FA] text-black border-black shadow-[1.5px_1.5px_0px_#000000]" 
                  : "bg-transparent text-zinc-700 border-transparent hover:bg-zinc-100"
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
              className={`p-5 rounded-2xl border-2 border-black text-left transition-all duration-150 flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? "bg-[#60A5FA] text-black shadow-[4px_4px_0px_#000000] -translate-y-0.5"
                  : "bg-white text-zinc-800 hover:bg-[#EFF6FF] shadow-[2px_2px_0px_#000000]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="font-extrabold uppercase">{item.clientCode}</span>
                  <span className="text-zinc-700 font-medium">{item.market}</span>
                </div>
                <h4 className="text-base font-serif font-bold mb-1 text-black">{item.clientName}</h4>
                <p className="text-xs mb-3 text-zinc-700 font-medium">{item.industry}</p>
              </div>

              <div className="pt-3 border-t-2 border-black/15 w-full flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-700 font-semibold">Target Outcome:</span>
                <span className="font-extrabold text-black">{item.businessOutcomes[0].metric}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Experiment Terminal Card */}
      <div className="bg-white border-2 border-black rounded-2xl p-6 sm:p-8 space-y-6 shadow-[4px_4px_0px_#000000]">
        
        {/* Top Metadata row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b-2 border-black/10 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full bg-[#60A5FA] border-2 border-black text-black font-bold shadow-[1.5px_1.5px_0px_#000000]">
              {selectedCase.clientCode}
            </span>
            <span className="text-black font-serif font-bold text-base">{selectedCase.clientName}</span>
            <span className="text-zinc-600 font-medium">({selectedCase.industry})</span>
          </div>

          <div className="flex items-center gap-4 text-zinc-700 font-medium">
            <span>Market: <strong className="text-black font-bold">{selectedCase.market}</strong></span>
            <span>Duration: <strong className="text-black font-bold">{selectedCase.timeline}</strong></span>
          </div>
        </div>

        {/* 2-Column Core Anatomy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Problem, Diagnosis & Execution */}
          <div className="lg:col-span-7 space-y-4 text-sm leading-relaxed">
            <div>
              <span className="text-rose-700 font-mono text-xs font-bold uppercase tracking-wider block mb-1">
                The Core Bottleneck:
              </span>
              <p className="text-zinc-800">{selectedCase.coreChallenge}</p>
            </div>

            <div>
              <span className="text-[#2563EB] font-mono text-xs font-bold uppercase tracking-wider block mb-1">
                Diagnostic Teardown:
              </span>
              <p className="text-zinc-800">{selectedCase.diagnosis}</p>
            </div>

            <div>
              <span className="text-black font-mono text-xs font-bold uppercase tracking-wider block mb-1">
                The Working Hypothesis:
              </span>
              <p className="text-zinc-900 italic bg-[#EFF6FF] p-3.5 rounded-xl border-2 border-black font-medium shadow-[2px_2px_0px_#000000]">
                &ldquo;{selectedCase.hypothesis}&rdquo;
              </p>
            </div>

            <div className="pt-2">
              <span className="text-zinc-700 font-mono text-xs font-bold uppercase tracking-wider block mb-2">
                Execution Steps:
              </span>
              <ul className="space-y-1.5">
                {selectedCase.execution.map((st, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-zinc-800 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>{st}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Creative Hook, Campaign Metrics & Business Outcomes */}
          <div className="lg:col-span-5 bg-[#FAF7EF] border-2 border-black rounded-xl p-5 space-y-4 shadow-[3px_3px_0px_#000000]">
            <div>
              <span className="text-[11px] font-mono text-[#2563EB] block mb-1 font-bold uppercase">
                CAMPAIGN HOOK & CREATIVE ANGLE:
              </span>
              <p className="text-xs text-zinc-900 italic bg-white p-3 rounded-lg border-2 border-black font-medium">
                {selectedCase.campaignHook}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
              <div className="bg-white p-2.5 rounded-lg border-2 border-black">
                <span className="text-zinc-600 block text-[10px] font-bold">FORMAT:</span>
                <span className="text-black text-[11px] font-bold">{selectedCase.creativeFormat}</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border-2 border-black">
                <span className="text-zinc-600 block text-[10px] font-bold">SPEND PROFILE:</span>
                <span className="text-black text-[11px] font-bold">{selectedCase.spendProfile}</span>
              </div>
            </div>

            {/* Campaign Metrics */}
            <div className="pt-2 border-t-2 border-black/10">
              <span className="text-[11px] font-mono text-zinc-700 block mb-2 font-bold uppercase">
                CAMPAIGN OPERATIONAL METRICS:
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {selectedCase.campaignMetrics.map((res, i) => (
                  <div key={i} className="bg-white border-2 border-black p-2.5 rounded-lg flex items-center justify-between">
                    <div>
                      <div className="text-xs text-zinc-900 font-bold">{res.label}</div>
                      <div className="text-[10px] text-zinc-600">{res.context}</div>
                    </div>
                    <span className="text-sm font-mono font-extrabold text-black">{res.metric}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Outcomes */}
            <div className="pt-2 border-t-2 border-black/10">
              <span className="text-[11px] font-mono text-[#2563EB] block mb-2 font-bold uppercase">
                COMMERCIAL PIPELINE OUTCOMES:
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {selectedCase.businessOutcomes.map((res, i) => (
                  <div key={i} className="bg-white border-2 border-black p-2.5 rounded-lg flex items-center justify-between">
                    <div>
                      <div className="text-xs text-black font-bold">{res.label}</div>
                      <div className="text-[10px] text-zinc-600">{res.context}</div>
                    </div>
                    <span className="text-base font-mono font-extrabold text-[#2563EB]">{res.metric}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t-2 border-black/10 text-xs">
              <span className="text-[11px] font-mono text-zinc-700 block font-bold">KEY STRATEGIC TAKEAWAY:</span>
              <p className="text-zinc-800 text-xs mt-0.5 font-medium">{selectedCase.keyLearning}</p>
            </div>
          </div>

        </div>

        {/* Footer CTA in Card */}
        <div className="pt-4 border-t-2 border-black/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Link
            href={`/case-studies/${selectedCase.slug}`}
            className="text-xs font-mono text-black hover:text-[#2563EB] font-bold flex items-center gap-1.5 group shrink-0"
          >
            <span>Read Complete Case Teardown</span>
            <ArrowUpRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/book"
            className="neo-btn-blue w-fit shrink-0"
          >
            Book a Strategy Call
          </Link>
        </div>

      </div>

    </div>
  );
}
