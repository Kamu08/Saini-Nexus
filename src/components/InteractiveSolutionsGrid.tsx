"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Target, Sparkles, CheckCircle2 } from "lucide-react";
import { SOLUTIONS } from "@/data/solutions";

export function InteractiveSolutionsGrid() {
  const solutionList = Object.values(SOLUTIONS);

  const ACCENTS = [
    { badgeBg: "bg-[#BFDBFE]", border: "border-black", tagColor: "text-[#1D4ED8]" },
    { badgeBg: "bg-[#FEF08A]", border: "border-black", tagColor: "text-[#A16207]" },
    { badgeBg: "bg-[#BBF7D0]", border: "border-black", tagColor: "text-[#15803D]" },
    { badgeBg: "bg-[#FED7AA]", border: "border-black", tagColor: "text-[#C2410C]" },
    { badgeBg: "bg-[#E9D5FF]", border: "border-black", tagColor: "text-[#7E22CE]" },
  ];

  return (
    <section className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider mb-3 font-bold shadow-[2px_2px_0px_#000000]">
            <Target className="w-3.5 h-3.5" />
            Problem-First Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black tracking-tight">
            What Challenge Needs Solving?
          </h2>
          <p className="text-zinc-700 text-sm sm:text-base mt-1 max-w-xl font-medium">
            We architect integrated acquisition campaigns tailored to your specific commercial roadblock.
          </p>
        </div>
        <Link
          href="/solutions"
          className="neo-btn-white w-fit shrink-0"
        >
          <span>View All Solutions</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </Link>
      </div>

      {/* Asymmetric layout: 2 Featured Wide Cards on top, 3 Distinct Cards below */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        {solutionList.map((sol, index) => {
          const accent = ACCENTS[index % ACCENTS.length];
          // Give first two cards a wider 3-column span on lg screens, next 3 cards a 2-column span
          const spanClass = index < 2 ? "lg:col-span-3" : "lg:col-span-2";

          return (
            <div
              key={sol.slug}
              className={`${spanClass} bg-white rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between border-2 border-black shadow-[4px_4px_0px_#000000] hover:shadow-[7px_7px_0px_#000000] hover:-translate-y-1 transition-all group relative overflow-hidden`}
            >
              {/* Corner Accent Ribbon */}
              <div className={`absolute top-0 right-0 w-24 h-24 ${accent.badgeBg} opacity-20 -mr-12 -mt-12 rounded-full pointer-events-none`} />

              <div className="space-y-4 relative z-10">
                {/* Header: Number & Tagline with clean responsive layout */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-8 h-8 rounded-xl ${accent.badgeBg} border-2 border-black text-black flex items-center justify-center font-mono text-xs font-extrabold shrink-0 shadow-[2px_2px_0px_#000000]`}>
                      {sol.number}
                    </span>
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-zinc-500">
                      SOLUTION DOSSIER
                    </span>
                  </div>
                  <span className={`${accent.badgeBg} border-2 border-black text-black font-mono font-bold uppercase tracking-wider text-[10px] px-3 py-1 rounded-full shadow-[1.5px_1.5px_0px_#000000] whitespace-nowrap`}>
                    {sol.tagline}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors tracking-tight leading-snug pt-1">
                  {sol.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                  {sol.shortDescription}
                </p>

                {/* Measured Commercial Benchmark */}
                <div className={`p-4 rounded-2xl ${index < 2 ? 'bg-[#EFF6FF]' : 'bg-[#FAF7EF]'} border-2 border-black space-y-1.5 shadow-[2px_2px_0px_#000000]`}>
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest font-bold block">
                    Proven Target Benchmark:
                  </span>
                  <div className="flex items-baseline flex-wrap gap-1.5">
                    <span className="text-xl font-serif font-bold text-[#2563EB]">
                      {sol.metricsThatMatter[0].metric}
                    </span>
                    <span className="text-xs font-sans text-zinc-800 font-medium leading-tight">
                      — {sol.metricsThatMatter[0].context}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-5 mt-5 border-t-2 border-black/10 flex items-center justify-between gap-3 relative z-10">
                <Link
                  href={`/solutions/${sol.slug}`}
                  className="text-xs font-mono text-black group-hover:text-[#2563EB] font-bold flex items-center gap-1 uppercase tracking-wider shrink-0 transition-colors"
                >
                  <span>Inspect Solution</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </Link>

                <Link
                  href="/book"
                  className={`px-4 py-1.5 rounded-full ${accent.badgeBg} border-2 border-black text-black text-xs font-mono font-bold shadow-[2px_2px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#000000] transition-all whitespace-nowrap shrink-0`}
                >
                  Scope Call
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
