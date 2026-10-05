"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Target } from "lucide-react";
import { SOLUTIONS } from "@/data/solutions";

export function InteractiveSolutionsGrid() {
  const solutionList = Object.values(SOLUTIONS);

  return (
    <section className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider mb-3 font-bold shadow-[2px_2px_0px_#000000]">
            <Target className="w-3.5 h-3.5" />
            Problem-First Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black tracking-tight">
            What Problem Needs Solving?
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutionList.map((sol) => (
          <div
            key={sol.slug}
            className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-2 border-black shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 transition-all group"
          >
            <div className="space-y-4">
              {/* Header: Number & Tagline with clean responsive layout */}
              <div className="flex items-start justify-between gap-3">
                <span className="w-8 h-8 rounded-xl bg-[#60A5FA] border-2 border-black text-black flex items-center justify-center font-mono text-xs font-bold shrink-0 shadow-[2px_2px_0px_#000000]">
                  {sol.number}
                </span>
                <span className="bg-[#EFF6FF] border border-black text-black font-mono font-bold uppercase tracking-wider text-[10px] px-2.5 py-1 rounded-full text-right leading-tight max-w-[70%]">
                  {sol.tagline}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors tracking-tight leading-snug">
                {sol.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                {sol.shortDescription}
              </p>

              {/* Measured Commercial Benchmark */}
              <div className="p-4 rounded-2xl bg-[#FAF7EF] border-2 border-black space-y-1.5 shadow-[2.5px_2.5px_0px_#000000]">
                <span className="text-[10px] font-mono text-black/60 uppercase tracking-widest font-bold block">
                  Measured Commercial Benchmark:
                </span>
                <div className="flex items-baseline flex-wrap gap-1.5">
                  <span className="text-xl font-serif font-bold text-[#2563EB]">
                    {sol.metricsThatMatter[0].metric}
                  </span>
                  <span className="text-xs font-sans text-black/75 font-medium leading-tight">
                    — {sol.metricsThatMatter[0].context}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Card Actions */}
            <div className="pt-5 mt-5 border-t-2 border-black/10 flex flex-wrap items-center justify-between gap-3">
              <Link
                href={`/solutions/${sol.slug}`}
                className="text-xs font-mono text-black group-hover:text-[#2563EB] font-bold flex items-center gap-1 uppercase tracking-wider shrink-0 transition-colors"
              >
                <span>Inspect Solution</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </Link>

              <Link
                href="/book"
                className="px-4 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono font-bold shadow-[2px_2px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#000000] transition-all whitespace-nowrap shrink-0"
              >
                Scope Call
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
