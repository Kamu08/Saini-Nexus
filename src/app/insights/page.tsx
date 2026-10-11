"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { BookOpen, ArrowUpRight, ArrowRight, Search, Clock, Calendar, Sparkles, X, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { INSIGHTS, INSIGHT_CATEGORIES } from "@/data/insights";

export default function InsightsIndexPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: INSIGHTS.length };
    INSIGHTS.forEach((item) => {
      counts[item.categorySlug] = (counts[item.categorySlug] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return INSIGHTS.filter((article) => {
      const matchesCat = activeCategory === "all" || article.categorySlug === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCat;
      const matchesSearch =
        article.title.toLowerCase().includes(q) ||
        article.subtitle.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Featured article is the first marked featured, or the first article overall
  const featuredArticle = useMemo(() => {
    return INSIGHTS.find((a) => a.featured) || INSIGHTS[0];
  }, []);

  // Remaining articles for the grid when showing "all" with no search
  const gridArticles = useMemo(() => {
    if (activeCategory === "all" && !searchQuery) {
      return filteredArticles.filter((a) => a.slug !== featuredArticle.slug);
    }
    return filteredArticles;
  }, [filteredArticles, activeCategory, searchQuery, featuredArticle]);

  return (
    <div className="w-full pb-24 overflow-x-clip">
      
      {/* ========================================================= */}
      {/* 01. CLEAN AGENCY HERO                                     */}
      {/* ========================================================= */}
      <section className="pt-32 lg:pt-40 pb-12 sm:pb-16 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <Breadcrumbs items={[{ label: "Insights" }]} />

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-white text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
              <BookOpen className="w-3 h-3 text-[#38A9EB]" />
              Saini Nexus // Intelligence &amp; Publications
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-black text-slate-900 leading-[1.05] tracking-tight">
              B2B Growth <span className="text-[#1572B8]">Intelligence.</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
              Research, strategic perspectives, and empirical field notes on enterprise B2B marketing, LinkedIn advertising, ABM, and commercial pipeline architecture.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 02. FEATURED BLUEPRINT SPOTLIGHT (When viewing all)       */}
      {/* ========================================================= */}
      {activeCategory === "all" && !searchQuery && featuredArticle && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
          <div className="bg-slate-900 text-white border border-slate-800 p-8 sm:p-12 lg:p-14 relative overflow-hidden group shadow-xl">
            
            {/* Subtle architectural ambient glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#1572B8]/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#1572B8]/30 transition-colors duration-700" />
            <div className="absolute -bottom-10 left-1/3 w-64 h-64 bg-[#38A9EB]/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column (7 cols): Editorial Meta & Headline */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1572B8] text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-[#67C7F8]" />
                    Featured Dossier
                  </span>
                  <span className="text-slate-400 text-xs font-mono font-medium">
                    {featuredArticle.category}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400 text-xs font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tight text-white leading-tight">
                  <Link href={`/insights/${featuredArticle.slug}`} className="hover:text-[#67C7F8] transition-colors">
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  {featuredArticle.subtitle}
                </p>

                {/* Key Takeaway Callout */}
                <div className="bg-white/5 border-l-2 border-[#38A9EB] p-4 text-xs sm:text-sm text-slate-200 italic font-normal">
                  &ldquo;{featuredArticle.keyTakeaways[0]}&rdquo;
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <Link
                    href={`/insights/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#38A9EB] text-slate-900 hover:text-white text-xs font-sans font-bold uppercase tracking-wider transition-all shadow-sm"
                  >
                    <span>Read Full Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-slate-400 text-xs font-mono hidden sm:inline-block">
                    By {featuredArticle.author.name}
                  </span>
                </div>
              </div>

              {/* Right Column (5 cols): Structured Bullet Takeaways */}
              <div className="lg:col-span-5 bg-black/40 border border-white/10 p-6 sm:p-8 space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#67C7F8] block">
                  Core Tactical Takeaways
                </span>
                <ul className="space-y-3">
                  {featuredArticle.keyTakeaways.map((takeaway, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      <CheckCircle2 className="w-4 h-4 text-[#38A9EB] shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* 03. SEARCH & CATEGORY FILTER BAR                          */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth pb-2 lg:pb-0">
            {INSIGHT_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.slug;
              const count = categoryCounts[cat.slug] || 0;

              return (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`px-4 py-2 text-xs font-sans font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 border ${
                    isActive
                      ? "bg-[#1572B8] text-white border-[#1572B8] shadow-xs"
                      : "bg-white text-slate-600 hover:text-slate-950 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search blueprints &amp; field notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 pl-10 pr-9 py-2.5 text-xs font-sans font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1572B8] focus:ring-1 focus:ring-[#1572B8] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 04. ARTICLES EDITORIAL GRID                               */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {gridArticles.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 border border-slate-200 space-y-4">
            <BookOpen className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-xl font-sans font-bold text-slate-900">
              No articles match your criteria
            </h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto font-normal">
              Try adjusting your search terms or clearing your category filter to explore all publications.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-[#1572B8] text-white text-xs font-sans font-bold uppercase tracking-wider transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {gridArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group block bg-white border border-slate-200 hover:border-[#1572B8] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden shadow-xs hover:shadow-xl"
              >
                {/* Saini Blue Animated Top Line */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#1572B8] group-hover:w-full transition-all duration-500" />

                <div className="space-y-4">
                  {/* Category Pill & Reading Time */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className={`px-2.5 py-1 text-[10px] font-sans font-bold uppercase tracking-wider border ${
                      article.isFieldNote
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-blue-50 text-[#1572B8] border-blue-200"
                    }`}>
                      {article.category}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1.5 text-[11px] font-mono font-medium">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-sans font-black text-slate-900 group-hover:text-[#1572B8] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {article.summary}
                    </p>
                  </div>

                  {/* Executive Key Point Highlight */}
                  <div className="pt-2">
                    <div className="bg-slate-50 border-l-2 border-[#1572B8] p-3.5 text-xs text-slate-700 font-normal italic">
                      &ldquo;{article.keyTakeaways[0]}&rdquo;
                    </div>
                  </div>
                </div>

                {/* Author Info & Read Action Footer */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 bg-blue-50 border border-blue-200 text-[#1572B8] flex items-center justify-center text-[10px] font-sans font-black">
                      {article.author.name.charAt(0)}
                    </div>
                    <div className="text-xs font-sans">
                      <span className="font-bold text-slate-900 block">{article.author.name}</span>
                      <span className="text-[10px] font-mono text-slate-400">{article.publishedAt}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-[#1572B8] group-hover:text-slate-900 text-xs font-sans font-bold uppercase tracking-wider transition-colors">
                    <span>Read Publication</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

              </Link>
            ))}
          </div>
        )}
      </section>

      {/* ========================================================= */}
      {/* 05. EXECUTIVE ADVISORY CTA BANNER                         */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="bg-[#0B3C7E] text-white p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          
          {/* Subtle architectural dot pattern */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          />

          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#67C7F8] block">
              OPERATIONAL EXECUTION
            </span>
            <h2 className="text-2xl sm:text-4xl font-sans font-black tracking-tight leading-tight">
              Ready to Implement These Growth Frameworks at Scale?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base font-normal leading-relaxed">
              We deploy tailored B2B demand engines, LinkedIn Thought Leader Ads, and multi-threaded account architectures for high-ticket firms.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/#contact-form"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white hover:bg-slate-100 text-slate-900 text-xs font-sans font-bold uppercase tracking-widest transition-colors shadow-sm text-center"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </Link>

            <Link
              href="/audit"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-black/20 hover:bg-black/35 text-white border border-white/30 hover:border-white/60 text-xs font-sans font-bold uppercase tracking-widest transition-colors text-center"
            >
              <span>Request Growth Audit</span>
              <ArrowUpRight className="w-4 h-4 text-[#67C7F8]" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
