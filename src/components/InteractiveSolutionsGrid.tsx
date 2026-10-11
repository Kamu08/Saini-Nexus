"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Target, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { SOLUTIONS } from "@/data/solutions";

export function InteractiveSolutionsGrid() {
  const solutionList = Object.values(SOLUTIONS);

  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Target className="w-3.5 h-3.5 text-blue-600" />
            <span>Problem-First Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What Challenge Needs Solving?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-xl font-normal">
            We architect integrated acquisition campaigns tailored to your specific commercial roadblock.
          </p>
        </div>
        <Link
          href="/solutions"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 text-xs font-semibold shadow-xs hover:shadow-sm transition-all w-fit shrink-0"
        >
          <span>View All Solutions</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </Link>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        {/* Five Cards: 2 on Top Row, 3 on Bottom Row */}
        {solutionList.map((sol, index) => {
          const spanClass = index < 2 ? "lg:col-span-3" : "lg:col-span-2";

          return (
            <div
              key={sol.slug}
              className={`${spanClass} bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-200 group relative overflow-hidden`}
            >
              <div className="space-y-4">
                {/* Header: Number & Tagline */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 border border-blue-200/80 flex items-center justify-center text-xs font-bold shrink-0">
                      {sol.number}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      DOSSIER
                    </span>
                  </div>
                  <span className="bg-slate-100 text-slate-700 border border-slate-200 uppercase tracking-wider text-[10px] px-3 py-1 rounded-full font-semibold whitespace-nowrap shrink-0">
                    {sol.tagline}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight leading-snug pt-1">
                  {sol.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {sol.shortDescription}
                </p>

                {/* Measured Commercial Benchmark */}
                <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-1">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">
                    Proven Target Benchmark:
                  </span>
                  <div className="flex items-baseline flex-wrap gap-1.5">
                    <span className="text-xl font-bold text-blue-600">
                      {sol.metricsThatMatter[0].metric}
                    </span>
                    <span className="text-xs text-slate-600 font-normal leading-tight">
                      — {sol.metricsThatMatter[0].context}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                <Link
                  href={`/solutions/${sol.slug}`}
                  className="text-xs text-slate-700 hover:text-blue-600 font-semibold flex items-center gap-1 uppercase tracking-wider shrink-0 transition-colors"
                >
                  <span>Inspect Solution</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </Link>

                <Link
                  href="/#contact-form"
                  className="px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs hover:shadow-sm transition-all whitespace-nowrap shrink-0"
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
