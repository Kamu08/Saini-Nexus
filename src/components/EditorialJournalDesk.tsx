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
      <div className="border-b-2 border-black pb-6 space-y-4">
        {/* Top Monospace Metadata Line */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-widest text-zinc-600 border-b border-black/15 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-black">VOL. IV · DISPATCH CHRONICLE</span>
            <span className="text-zinc-400">/</span>
            <span>PUBLISHED IN JAIPUR &amp; GLOBAL</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-500">
            <span>QUARTERLY RESEARCH ARCHIVE</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline font-bold text-black">ISSUES 01 – 04</span>
          </div>
        </div>

        {/* Headline & Action Ribbon */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-1">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-extrabold shadow-[2px_2px_0px_#000000]">
              <Newspaper className="w-3.5 h-3.5" />
              Saini Nexus Editorial Journal
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black tracking-tight leading-tight">
              B2B Demand &amp; Growth Dispatches
            </h2>
            <p className="text-zinc-700 text-sm sm:text-base font-medium leading-relaxed">
              Empirical practitioner observations, algorithm teardowns, and buyer psychology frameworks from the Saini Nexus laboratory.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link 
              href="/insights" 
              className="neo-btn-white text-xs font-mono font-bold flex items-center gap-1.5 shadow-[2px_2px_0px_#000000] hover:shadow-[3px_3px_0px_#000000] transition-all"
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
      <div className="bg-[#FAF7EF] border-2 border-black rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-[4px_4px_0px_#000000] transition-all duration-200 hover:shadow-[6px_6px_0px_#000000] relative overflow-hidden">
        
        {/* Subtle Watermark Monogram */}
        <div className="absolute top-4 right-6 text-black/5 font-serif font-black text-8xl sm:text-9xl pointer-events-none select-none">
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
                  <span className={`px-3 py-1 rounded-full ${activeTheme.badgeBg} border-2 border-black text-black font-mono text-[11px] font-extrabold uppercase shadow-[1.5px_1.5px_0px_#000000]`}>
                    {activeTheme.pillText}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white border-2 border-black text-black font-mono text-[11px] font-bold uppercase shadow-[1.5px_1.5px_0px_#000000]">
                    {activeArticle.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-zinc-600 font-bold bg-white/70 px-2.5 py-1 rounded-full border border-black/20">
                    <Clock className="w-3 h-3 text-zinc-500" />
                    {activeArticle.readTime}
                  </span>
                  <span className="text-xs font-mono text-zinc-500 font-semibold hidden sm:inline">
                    · {activeArticle.publishedAt}
                  </span>
                </div>

                {/* Main Headline */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-black tracking-tight leading-snug">
                  <Link 
                    href={`/insights/${activeArticle.slug}`}
                    className="hover:text-[#2563EB] transition-colors"
                  >
                    {activeArticle.title}
                  </Link>
                </h3>

                {/* Subtitle Deck */}
                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-medium">
                  {activeArticle.subtitle}
                </p>

                {/* Summary Hook */}
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {activeArticle.summary}
                </p>
              </div>

              {/* Author & Direct Read Button */}
              <div className="pt-6 border-t-2 border-black/15 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-black flex items-center justify-center font-serif font-extrabold text-sm text-black shadow-[1.5px_1.5px_0px_#000000]">
                    DS
                  </div>
                  <div>
                    <span className="text-xs font-serif font-bold text-black block leading-tight">
                      Dev Raj Saini
                    </span>
                    <span className="text-[10px] font-mono text-zinc-600 block uppercase tracking-wider">
                      Founder, Saini Nexus &middot; Lead Researcher
                    </span>
                  </div>
                </div>

                <Link
                  href={`/insights/${activeArticle.slug}`}
                  className="neo-btn-blue text-xs font-mono font-bold flex items-center gap-2 shadow-[2px_2px_0px_#000000] hover:shadow-[3px_3px_0px_#000000] transition-all"
                >
                  <span>Read Complete Field Note</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>

            </div>

            {/* Right 5 Columns: Forensic Pull-Quote & Key Findings Card */}
            <div className="lg:col-span-5 bg-white border-2 border-black rounded-2xl p-6 sm:p-7 shadow-[3px_3px_0px_#000000] flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                {/* Pull-Quote Callout */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-extrabold uppercase tracking-wider text-[#2563EB]">
                    <Quote className="w-3.5 h-3.5 rotate-180" />
                    <span>The Practitioner Principle</span>
                  </div>
                  <blockquote className="text-sm sm:text-base font-serif italic font-bold text-black leading-snug border-l-2 border-black pl-3 py-0.5">
                    &ldquo;{activeArticle.sections[0]?.quote || activeArticle.keyTakeaways[0]}&rdquo;
                  </blockquote>
                </div>

                {/* Core Empirical Takeaways */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-[10px] font-mono uppercase font-bold text-zinc-500 tracking-wider block">
                    Core Intelligence Takeaways:
                  </span>
                  <ul className="space-y-2">
                    {activeArticle.keyTakeaways.slice(0, 3).map((takeaway, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-800 font-medium leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* In-Feed Category Tag Footer */}
              <div className="pt-4 border-t border-black/10 flex items-center justify-between text-[11px] font-mono text-zinc-600">
                <span className="font-bold uppercase tracking-wider text-black">Primary Framework</span>
                <span className="text-[#2563EB] font-bold">Verified Practitioner Data</span>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>

      {/* ========================================================= */}
      {/* 03. THE 4 DISPATCH COLUMN CARDS                           */}
      {/* Smooth right/bottom shadow on hover, no lift              */}
      {/* ========================================================= */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-mono uppercase tracking-widest font-extrabold text-black flex items-center gap-2">
            <BookmarkCheck className="w-3.5 h-3.5 text-[#2563EB]" />
            Quarterly Dispatches Index (Click to spotlight or read)
          </span>
          <span className="text-xs font-mono text-zinc-500 font-semibold hidden sm:inline">
            4 Empirical Teardowns
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {articles.map((article, idx) => {
            const isCurrent = idx === activeIdx;
            const theme = ISSUE_THEMES[idx] || ISSUE_THEMES[0];

            return (
              <div
                key={article.slug}
                onClick={() => setActiveIdx(idx)}
                className={`bg-white border-2 border-black rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 cursor-pointer text-left relative group ${
                  isCurrent
                    ? "shadow-[4px_4px_0px_#000000] ring-2 ring-black"
                    : "shadow-[2px_2px_0px_#000000] hover:shadow-[4px_4px_0px_#000000]"
                }`}
              >
                {/* Top Badge & Read Time */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full ${theme.badgeBg} border-2 border-black text-black font-mono text-[10px] font-extrabold uppercase shadow-[1px_1px_0px_#000000]`}>
                      #{String(idx + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[11px] font-mono text-zinc-500 font-bold flex items-center gap-1">
                      <Clock className="w-3 h-3 text-zinc-400" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Category */}
                  <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-zinc-500 block">
                    {article.category}
                  </span>

                  {/* Article Title */}
                  <h4 className="text-base font-serif font-bold text-black leading-snug group-hover:text-[#2563EB] transition-colors line-clamp-2">
                    {article.title}
                  </h4>

                  {/* Excerpt */}
                  <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-4 mt-4 border-t border-black/10 flex items-center justify-between">
                  <span className={`text-[11px] font-mono font-bold transition-colors ${
                    isCurrent ? "text-[#2563EB]" : "text-zinc-500 group-hover:text-black"
                  }`}>
                    {isCurrent ? "● Featured Now" : "Spotlight Issue"}
                  </span>

                  <Link
                    href={`/insights/${article.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className={`w-7 h-7 rounded-full border-2 border-black flex items-center justify-center transition-all shadow-[1px_1px_0px_#000000] ${
                      isCurrent 
                        ? `${theme.badgeBg} text-black` 
                        : "bg-zinc-100 text-black group-hover:bg-[#60A5FA]"
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
      <div className="bg-[#FAF7EF] border-2 border-black rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[3px_3px_0px_#000000]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white border-2 border-black flex items-center justify-center shrink-0 shadow-[1.5px_1.5px_0px_#000000]">
            <Sparkles className="w-4 h-4 text-[#2563EB]" />
          </div>
          <div className="text-xs">
            <span className="font-serif font-bold text-black block text-sm">
              Looking for our complete B2B marketing research database?
            </span>
            <span className="text-zinc-600 font-mono text-[11px]">
              Explore detailed guides on ABM tiering, LinkedIn Document Ads, and category positioning.
            </span>
          </div>
        </div>

        <Link
          href="/insights"
          className="neo-btn-white text-xs font-mono font-bold shrink-0 flex items-center gap-2 whitespace-nowrap shadow-[2px_2px_0px_#000000]"
        >
          <span>View All 9 Field Notes &amp; Teardowns</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </section>
  );
}
