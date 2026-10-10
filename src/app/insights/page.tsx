"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, ArrowUpRight, ArrowRight, Search, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { INSIGHTS, INSIGHT_CATEGORIES } from "@/data/insights";

export default function InsightsIndexPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredArticles = INSIGHTS.filter((article) => {
    const matchesCat = activeCategory === "all" || article.categorySlug === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-10 sm:space-y-14">
      <Breadcrumbs items={[{ label: "Insights" }]} />

      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          B2B Growth Intelligence &amp; Field Notes
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
          B2B Growth Intelligence
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
          Research, strategic perspectives and field observations on B2B marketing, LinkedIn, demand generation, advertising and growth.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        
        {/* Category Pills */}
        <div className="flex sm:flex-wrap items-center gap-2 pt-2 pb-2.5 px-1 lg:pb-0 overflow-x-auto no-scrollbar scroll-smooth">
          {INSIGHT_CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium tracking-wider transition-all whitespace-nowrap border ${
                activeCategory === cat.slug
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-72 shrink-0">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search guides & field notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-full pl-10 pr-4 py-2 text-xs font-sans text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-xs"
          />
        </div>

      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/insights/${article.slug}`}
            className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-blue-300 hover:shadow-md transition-all group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className={`px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${
                  article.isFieldNote 
                    ? "bg-amber-50 text-amber-800 border-amber-200" 
                    : "bg-blue-50 text-blue-700 border-blue-200/60"
                }`}>
                  {article.category}
                </span>
                <span className="text-slate-500 flex items-center gap-1 text-[11px] font-mono font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                {article.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {article.summary}
              </p>

              <div className="pt-3 border-t border-slate-100 space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">Key Point:</span>
                <p className="text-xs text-slate-700 italic font-normal">
                  &ldquo;{article.keyTakeaways[0]}&rdquo;
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center text-[10px] font-bold">
                  {article.author.name.charAt(0)}
                </div>
                <span className="font-semibold text-slate-800">{article.author.name}</span>
              </div>
              <span className="text-slate-800 group-hover:text-blue-600 flex items-center gap-1 font-bold uppercase tracking-wider text-[11px] transition-colors">
                <span>Read Full Article</span>
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4 shadow-sm">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Have questions about implementing these playbooks?
        </h3>
        <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed font-normal">
          Book a 1-on-1 strategy session to audit your current B2B funnel and formulate an actionable roadmap.
        </p>
        <div className="pt-2">
          <Link
            href="/book"
            className="neo-btn-blue inline-flex items-center justify-center px-8 py-4 rounded-full text-xs uppercase tracking-wider"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
