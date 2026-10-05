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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
          <BookOpen className="w-3.5 h-3.5" />
          B2B Growth Intelligence &amp; Field Notes
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-black leading-[1.1] tracking-tight">
          B2B Growth Intelligence
        </h1>
        <p className="text-black/80 text-base sm:text-lg leading-relaxed font-sans">
          Research, strategic perspectives and field observations on B2B marketing, LinkedIn, demand generation, advertising and growth.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-6 border-b-2 border-black/10">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pb-2 lg:pb-0">
          {INSIGHT_CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all whitespace-nowrap border-2 border-black ${
                activeCategory === cat.slug
                  ? "bg-[#60A5FA] text-black shadow-[3px_3px_0px_#000000] -translate-y-0.5"
                  : "bg-white text-black/80 hover:bg-[#FAF7EF] shadow-[2px_2px_0px_#000000]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-72 shrink-0">
          <Search className="w-4 h-4 text-black absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search guides & field notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border-2 border-black rounded-full pl-10 pr-4 py-2 text-xs font-mono font-bold text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-[#60A5FA] shadow-[3px_3px_0px_#000000]"
          />
        </div>

      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/insights/${article.slug}`}
            className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 transition-all group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className={`px-3 py-1 rounded-full border-2 border-black font-bold uppercase tracking-wider text-[10px] shadow-[2px_2px_0px_#000000] ${
                  article.isFieldNote 
                    ? "bg-amber-200 text-black" 
                    : "bg-[#60A5FA] text-black"
                }`}>
                  {article.category}
                </span>
                <span className="text-black/70 flex items-center gap-1 text-[11px] font-mono font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>

              <h2 className="text-2xl font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors leading-snug">
                {article.title}
              </h2>

              <p className="text-xs sm:text-sm text-black/75 leading-relaxed font-sans">
                {article.summary}
              </p>

              <div className="pt-3 border-t-2 border-black/10 space-y-1">
                <span className="text-[10px] font-mono text-black/60 uppercase tracking-wider font-bold">Key Point:</span>
                <p className="text-xs text-black italic font-medium">
                  &ldquo;{article.keyTakeaways[0]}&rdquo;
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t-2 border-black/10 flex items-center justify-between text-xs font-mono text-black">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#60A5FA] border border-black flex items-center justify-center text-[10px] font-bold text-black">
                  {article.author.name.charAt(0)}
                </div>
                <span className="font-bold">{article.author.name}</span>
              </div>
              <span className="text-black group-hover:text-[#2563EB] flex items-center gap-1 font-bold uppercase tracking-wider text-[11px]">
                <span>Read Full Article</span>
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4 shadow-[6px_6px_0px_#000000]">
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black">
          Have questions about implementing these playbooks?
        </h3>
        <p className="text-black/80 text-sm max-w-xl mx-auto leading-relaxed">
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
