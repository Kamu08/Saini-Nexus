"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  ArrowUpRight, 
  ArrowRight, 
  Quote, 
  Clock, 
  CheckCircle2, 
  Newspaper,
  Sparkles,
  BookmarkCheck,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { INSIGHTS, InsightItem } from "@/data/insights";

interface IssueTheme {
  badgeBg: string;
  pillText: string;
  accentBorder: string;
  chipBg: string;
}

const ISSUE_THEMES: Record<number, IssueTheme> = {
  0: {
    badgeBg: "bg-[#60A5FA]",
    pillText: "COVER ESSAY · ISSUE #01",
    accentBorder: "border-[#2563EB]",
    chipBg: "bg-[#EFF6FF]"
  },
  1: {
    badgeBg: "bg-[#FDE047]",
    pillText: "FIELD NOTE · ISSUE #02",
    accentBorder: "border-amber-500",
    chipBg: "bg-[#FEFCE8]"
  },
  2: {
    badgeBg: "bg-[#86EFAC]",
    pillText: "TACTICAL GUIDE · ISSUE #03",
    accentBorder: "border-emerald-500",
    chipBg: "bg-[#F0FDF4]"
  },
  3: {
    badgeBg: "bg-[#F472B6]",
    pillText: "STRATEGY AUDIT · ISSUE #04",
    accentBorder: "border-rose-400",
    chipBg: "bg-[#FDF2F8]"
  }
};

export function EditorialJournalDesk() {
  const articles = INSIGHTS.slice(0, 4);
  const [activeIdx, setActiveIdx] = useState(0);
  const activeArticle = articles[activeIdx] || articles[0];
  const activeTheme = ISSUE_THEMES[activeIdx] || ISSUE_THEMES[0];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* ========================================================= */}
      {/* 01. EDITORIAL MASTHEAD BANNER                             */}
      {/* ========================================================= */}
      <div className="border-b border-slate-200 pb-6 space-y-4">
        {/* Top Metadata Line */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] uppercase tracking-wider text-slate-500 border-b border-slate-100 pb-2.5 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-800">VOL. IV · DISPATCH CHRONICLE</span>
            <span className="text-slate-300">/</span>
            <span>PUBLISHED IN JAIPUR &amp; GLOBAL</span>
          </div>
          <div className="flex items-center gap-3 text-slate-500">
            <span>QUARTERLY RESEARCH ARCHIVE</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline font-semibold text-slate-800">ISSUES 01 – 04</span>
          </div>
        </div>

        {/* Headline & Action Ribbon */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-1">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e6f4fc] border border-[#bae6fd] text-[#0f539a] text-xs font-semibold uppercase tracking-wider">
              <Newspaper className="w-3.5 h-3.5 text-[#1572b8]" />
              <span>Saini Nexus Editorial Journal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              B2B Demand &amp; Growth Dispatches
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
              Empirical practitioner observations, algorithm teardowns, and buyer psychology frameworks from the Saini Nexus laboratory.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link 
              href="/insights" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 text-xs font-semibold shadow-xs hover:shadow-sm transition-all"
            >
              <span>Explore All Field Notes</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 02. HERO COVER STORY SPREAD (FRONT-PAGE FEATURE)          */}
      {/* ========================================================= */}
      <div className="bg-slate-50/70 border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
        
        {/* Subtle Watermark Monogram */}
        <div className="absolute top-4 right-6 text-slate-900/5 font-black text-8xl sm:text-9xl pointer-events-none select-none">
          #{String(activeIdx + 1).padStart(2, "0")}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeArticle.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch relative z-10"
          >
            {/* Left 7 Columns: Lead Article Details & Headline */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                
                {/* Meta Header Strip */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold uppercase">
                    {activeTheme.pillText}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] font-semibold uppercase shadow-xs">
                    {activeArticle.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium bg-white px-2.5 py-1 rounded-full border border-slate-200/80">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {activeArticle.readTime}
                  </span>
                  <span className="text-xs text-slate-400 font-normal hidden sm:inline">
                    · {activeArticle.publishedAt}
                  </span>
                </div>

                {/* Main Headline */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  <Link 
                    href={`/insights/${activeArticle.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {activeArticle.title}
                  </Link>
                </h3>

                {/* Subtitle Deck */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  {activeArticle.subtitle}
                </p>

                {/* Summary Hook */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  {activeArticle.summary}
                </p>
              </div>

              {/* Author & Direct Read Button */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center font-bold text-sm text-slate-800 shadow-xs">
                    DS
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block leading-tight">
                      Dev Raj Saini
                    </span>
                    <span className="text-[10px] text-slate-500 block uppercase tracking-wider font-medium">
                      Founder, Saini Nexus &middot; Lead Researcher
                    </span>
                  </div>
                </div>

                <Link
                  href={`/insights/${activeArticle.slug}`}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-2 shadow-xs transition-all"
                >
                  <span>Read Complete Field Note</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>

            </div>

            {/* Right 5 Columns: Forensic Pull-Quote & Key Findings Card */}
            <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                {/* Pull-Quote Callout */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600">
                    <Quote className="w-3.5 h-3.5 rotate-180" />
                    <span>The Practitioner Principle</span>
                  </div>
                  <blockquote className="text-sm sm:text-base italic font-semibold text-slate-800 leading-snug border-l-2 border-blue-600 pl-3.5 py-0.5">
                    &ldquo;{activeArticle.sections[0]?.quote || activeArticle.keyTakeaways[0]}&rdquo;
                  </blockquote>
                </div>

                {/* Core Empirical Takeaways */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block">
                    Core Intelligence Takeaways:
                  </span>
                  <ul className="space-y-2">
                    {activeArticle.keyTakeaways.slice(0, 3).map((takeaway, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-normal leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* In-Feed Category Tag Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-semibold uppercase tracking-wider text-slate-700">Primary Framework</span>
                <span className="text-blue-600 font-medium">Verified Practitioner Data</span>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>

      {/* ========================================================= */}
      {/* 03. THE 4 DISPATCH COLUMN CARDS                           */}
      {/* ========================================================= */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs uppercase tracking-wider font-semibold text-slate-900 flex items-center gap-2">
            <BookmarkCheck className="w-3.5 h-3.5 text-[#1572b8]" />
            Quarterly Dispatches Index (Click to spotlight or read)
          </span>
          <span className="text-xs text-slate-500 font-normal hidden sm:inline">
            4 Empirical Teardowns
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {articles.map((article, idx) => {
            const isCurrent = idx === activeIdx;

            return (
              <div
                key={article.slug}
                onClick={() => setActiveIdx(idx)}
                className={`bg-white border rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 cursor-pointer text-left relative group ${
                  isCurrent
                    ? "border-[#1572b8] ring-2 ring-[#38a9eb]/30 shadow-md"
                    : "border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                {/* Top Badge & Read Time */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#e6f4fc] text-[#0f539a] font-semibold text-[10px] uppercase">
                      #{String(idx + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[11px] text-slate-500 font-normal flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Category */}
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 block">
                    {article.category}
                  </span>

                  {/* Article Title */}
                  <h4 className="text-base font-bold text-slate-900 leading-snug group-hover:text-[#1572b8] transition-colors line-clamp-2">
                    {article.title}
                  </h4>

                  {/* Excerpt */}
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
                    {article.summary}
                  </p>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className={`text-[11px] font-medium transition-colors ${
                    isCurrent ? "text-[#1572b8] font-semibold" : "text-slate-500 group-hover:text-slate-900"
                  }`}>
                    {isCurrent ? "● Featured Now" : "Spotlight Issue"}
                  </span>

                  <Link
                    href={`/insights/${article.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className={`w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center transition-all ${
                      isCurrent 
                        ? "bg-[#1572b8] text-white border-[#1572b8] shadow-xs" 
                        : "bg-slate-50 text-slate-600 group-hover:bg-[#e6f4fc] group-hover:text-[#1572b8] group-hover:border-[#bae6fd]"
                    }`}
                    title="Read Full Article"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 04. EDITORIAL ARCHIVE STRIP                               */}
      {/* ========================================================= */}
      <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#1572b8]" />
          </div>
          <div className="text-xs">
            <span className="font-bold text-slate-900 block text-sm">
              Looking for our complete B2B marketing research database?
            </span>
            <span className="text-slate-500 text-[11px]">
              Explore detailed guides on ABM tiering, LinkedIn Document Ads, and category positioning.
            </span>
          </div>
        </div>

        <Link
          href="/insights"
          className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 hover:text-slate-900 text-xs font-semibold shadow-xs transition-all shrink-0 flex items-center gap-2 whitespace-nowrap"
        >
          <span>View All 9 Field Notes &amp; Teardowns</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </section>
  );
}
