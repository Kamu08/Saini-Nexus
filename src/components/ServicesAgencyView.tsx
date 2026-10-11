"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles, Filter } from "lucide-react";
import { SERVICES, ServiceItem } from "@/data/services";

type CategoryFilter = "all" | "strategy" | "authority" | "paid" | "pipeline";

const CATEGORIES: { id: CategoryFilter; label: string; count: number }[] = [
  { id: "all", label: "All Capabilities", count: 8 },
  { id: "strategy", label: "Strategy & GTM", count: 2 },
  { id: "authority", label: "LinkedIn & Authority", count: 2 },
  { id: "paid", label: "Paid & ABM", count: 2 },
  { id: "pipeline", label: "Demand & Pipeline", count: 2 },
];

export function ServicesAgencyView() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const allServices = Object.values(SERVICES);

  const filteredServices = allServices.filter((srv) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "strategy") {
      return srv.slug === "b2b-growth-strategy" || srv.slug === "b2b-marketing-strategy";
    }
    if (activeCategory === "authority") {
      return srv.slug === "linkedin-b2b-marketing" || srv.slug === "founder-led-executive-b2b-marketing";
    }
    if (activeCategory === "paid") {
      return srv.slug === "linkedin-ads-thought-leader-ads" || srv.slug === "account-based-marketing";
    }
    if (activeCategory === "pipeline") {
      return srv.slug === "b2b-demand-generation" || srv.slug === "b2b-lead-pipeline-generation";
    }
    return true;
  });

  return (
    <div className="space-y-12 sm:space-y-16">
      
      {/* Category Filter Pills — Minimalist & Intuitive */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-slate-200 pb-6">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-sans font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                isActive
                  ? "bg-[#1572B8] text-white shadow-sm"
                  : "bg-white text-slate-600 hover:text-slate-950 border border-slate-200 hover:border-slate-300"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.5 ${
                  isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Services List — Sleek Architectural Agency Rows */}
      <div className="space-y-4">
        {filteredServices.map((srv) => (
          <Link
            key={srv.slug}
            href={`/services/${srv.slug}`}
            className="group block bg-white border border-slate-200 hover:border-[#1572B8] p-6 sm:p-8 lg:p-10 transition-all duration-300 relative overflow-hidden shadow-xs hover:shadow-lg"
          >
            {/* Saini Blue Left Edge Accent */}
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#1572B8] opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Col 1: Number & Title (5 cols) */}
              <div className="lg:col-span-5 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#1572B8] tracking-widest">
                    MODULE {srv.number}
                  </span>
                  <span className="text-slate-300">/</span>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-slate-500 bg-slate-50 px-2.5 py-0.5 border border-slate-200">
                    {srv.strategicRole}
                  </span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-sans font-black text-slate-900 tracking-tight group-hover:text-[#1572B8] transition-colors">
                  {srv.title}
                </h2>
                
                <p className="font-mono text-xs text-slate-400 group-hover:text-[#0E4A8A] transition-colors">
                  &ldquo;{srv.premiumPositioning}&rdquo;
                </p>
              </div>

              {/* Col 2: One Punchy Sentence & Key Capabilities (5 cols) */}
              <div className="lg:col-span-5 space-y-3">
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {srv.shortDescription}
                </p>

                {/* Capability Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {srv.capabilities.map((cap, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-1 bg-[#FAFCFF] border border-slate-200 text-slate-600 text-[11px] font-sans font-medium group-hover:border-blue-100 group-hover:text-slate-800 transition-colors"
                    >
                      {cap.title}
                    </span>
                  ))}
                </div>
              </div>

              {/* Col 3: Sleek Agency Action (2 cols) */}
              <div className="lg:col-span-2 flex items-center lg:justify-end">
                <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-50 group-hover:bg-[#1572B8] text-slate-700 group-hover:text-white border border-slate-200 group-hover:border-[#1572B8] text-xs font-sans font-bold uppercase tracking-wider transition-all duration-200">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
