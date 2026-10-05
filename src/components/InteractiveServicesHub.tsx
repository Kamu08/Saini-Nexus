"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Target, 
  BarChart3, 
  Users2, 
  Zap,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  FileCheck
} from "lucide-react";
import { SERVICES } from "@/data/services";

export function InteractiveServicesHub() {
  const serviceList = Object.values(SERVICES);
  const [activeSlug, setActiveSlug] = useState<string>(serviceList[0].slug);

  const activeService = SERVICES[activeSlug] || serviceList[0];

  return (
    <section className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#BFDBFE] border-2 border-black text-black text-xs font-mono uppercase tracking-wider mb-2 font-extrabold shadow-[2px_2px_0px_#000000]">
            <Layers className="w-3.5 h-3.5" />
            Capabilities Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black tracking-tight">
            What We Do: 8 Core Growth Services
          </h2>
          <p className="text-zinc-700 text-sm sm:text-base mt-1 max-w-xl">
            Select any service to inspect its capabilities, deliverables, and focus areas.
          </p>
        </div>
        <Link
          href="/services"
          className="text-xs font-mono text-black hover:text-[#2563EB] font-bold flex items-center gap-1 uppercase tracking-wider"
        >
          <span>View All 8 Services</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Main Interactive Split Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Interactive Selector List */}
        <div className="lg:col-span-5 space-y-2.5">
          {serviceList.map((srv) => {
            const isActive = srv.slug === activeSlug;
            return (
              <button
                key={srv.slug}
                onClick={() => setActiveSlug(srv.slug)}
                className={`w-full text-left p-4 rounded-2xl border-2 border-black transition-all flex items-center justify-between group cursor-pointer ${
                  isActive
                    ? "bg-[#60A5FA] text-black shadow-[3.5px_3.5px_0px_#000000] translate-x-1"
                    : "bg-white text-zinc-800 hover:bg-[#FAF7EF] shadow-[2px_2px_0px_#000000]"
                }`}
              >
                <div className="space-y-1 pr-2">
                  <div className="flex items-center gap-2.5">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-lg font-extrabold border border-black ${
                      isActive ? "bg-white text-black" : "bg-zinc-100 text-black"
                    }`}>
                      {srv.number}
                    </span>
                    <h3 className="font-serif font-bold text-base tracking-tight text-black">
                      {srv.title}
                    </h3>
                  </div>
                </div>
                <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${
                  isActive ? "text-black translate-x-1" : "text-zinc-400 group-hover:text-black group-hover:translate-x-0.5"
                }`} />
              </button>
            );
          })}
        </div>

        {/* Right Column: Live Showcase Card */}
        <div className="lg:col-span-7 bg-white border-2 border-black rounded-3xl p-5 sm:p-8 shadow-[5px_5px_0px_#000000] space-y-5 relative overflow-hidden">
          
          {/* Service Header */}
          <div className="space-y-3 pb-4 border-b-2 border-black/10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="px-3 py-1 rounded-full bg-[#BFDBFE] text-black font-mono text-[11px] sm:text-xs font-extrabold uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000000] shrink-0 whitespace-nowrap">
                Service {activeService.number} • {activeService.strategicRole}
              </span>
              <span className="text-xs font-mono text-zinc-600 font-bold tracking-tight">
                {activeService.premiumPositioning}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black tracking-tight">
              {activeService.title}
            </h3>

            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              {activeService.shortDescription}
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-600 font-bold">
              Included Capabilities:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeService.capabilities.map((cap, i) => (
                <div key={i} className="p-3 rounded-2xl bg-[#FAF7EF] border-2 border-black/80 space-y-0.5">
                  <div className="text-xs font-bold text-black flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                    <span>{cap.title}</span>
                  </div>
                  <p className="text-[11px] text-zinc-600 leading-tight pl-5">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables Bar */}
          <div className="p-4 rounded-2xl bg-[#EFF6FF] border-2 border-black space-y-1.5 shadow-[2px_2px_0px_#000000]">
            <span className="text-[10px] font-mono text-black font-extrabold uppercase tracking-wider block">
              Deliverables You Receive:
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-zinc-900 font-medium">
              {activeService.deliverables.map((del, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB] mt-1 shrink-0 border border-black"></span>
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Card Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <Link
              href={`/services/${activeService.slug}`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-extrabold text-black bg-white border-2 border-black shadow-[2.5px_2.5px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#000000] transition-all"
            >
              <span>Explore Full Service Page</span>
              <ArrowUpRight className="ml-1.5 w-4 h-4" />
            </Link>

            <Link
              href="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-extrabold text-black bg-[#60A5FA] border-2 border-black shadow-[2.5px_2.5px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#000000] transition-all"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="ml-1.5 w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
