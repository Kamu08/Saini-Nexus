"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  ArrowUpRight, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Quote, 
  Clock, 
  User, 
  Bookmark,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { INSIGHTS, InsightItem } from "@/data/insights";

export function EditorialJournalDesk() {
  const articles = INSIGHTS.slice(0, 4);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeArticle = articles[selectedIndex] || articles[0];

  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const listContainerRef = useRef<HTMLDivElement>(null);

  const [trackerStyle, setTrackerStyle] = useState<{
    top: number;
    height: number;
  }>({ top: 0, height: 0 });

  const [hasInitialized, setHasInitialized] = useState(false);

  const updateTrackerPosition = (index: number) => {
    const el = rowRefs.current[index];
    if (!el) return;

    setTrackerStyle({
      top: el.offsetTop,
      height: el.offsetHeight,
    });
    setSelectedIndex(index);
    setHasInitialized(true);
  };

  useEffect(() => {
    updateTrackerPosition(0);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      updateTrackerPosition(selectedIndex);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [selectedIndex]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-black/15 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider mb-3 font-bold shadow-[2px_2px_0px_#000000]">
            <BookOpen className="w-3.5 h-3.5" />
            Field Notes &amp; Intelligence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black tracking-tight">
            Saini Nexus Editorial Journal
          </h2>
          <p className="text-zinc-700 text-sm sm:text-base mt-2 max-w-xl font-medium leading-relaxed">
            Empirical practitioner observations, algorithm teardowns, and B2B growth intelligence. Hover to inspect dispatches.
          </p>
        </div>
        <Link href="/insights" className="neo-btn-white w-fit shrink-0">
          <span>Explore All Field Notes</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </Link>
      </div>

      {/* The Split Interactive Magazine Desk */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Left Side (5 Columns): Dynamic Magazine Cover Slate */}
        <div className="lg:col-span-5 bg-[#FAF7EF] border-2 border-black rounded-3xl p-6 sm:p-8 lg:p-9 shadow-[5px_5px_0px_#000000] relative overflow-hidden flex flex-col justify-between min-h-[480px]">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeArticle.slug}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="space-y-6 flex-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Issue Header Tag */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-[#60A5FA] text-black font-extrabold uppercase text-[11px] font-mono border border-black shadow-[1px_1px_0px_#000000]">
                      ISSUE #{String(selectedIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white border border-black/30 font-bold uppercase text-[10px] font-mono text-zinc-700">
                      {activeArticle.category}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-zinc-500 bg-zinc-100 px-2.5 py-0.5 rounded-full">
                    {activeArticle.readTime}
                  </span>
                </div>

                {/* Article Headline */}
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black tracking-tight leading-snug">
                  {activeArticle.title}
                </h3>

                {/* Pull Quote Box */}
                <div className="bg-white border-2 border-black rounded-2xl p-4 sm:p-5 shadow-[2px_2px_0px_#000000] relative space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2563EB] flex items-center gap-1">
                    <Quote className="w-3 h-3 rotate-180" />
                    Key Strategic Principle:
                  </span>
                  <p className="text-xs sm:text-sm font-serif italic text-black font-medium leading-relaxed">
                    &ldquo;{activeArticle.sections[0]?.quote || activeArticle.keyTakeaways[0]}&rdquo;
                  </p>
                </div>

                {/* Core Takeaways */}
                <div className="space-y-2 pt-1">
                  <span className="text-[10px] font-mono uppercase font-bold text-zinc-500 block">
                    Core Intelligence Excerpt:
                  </span>
                  <ul className="space-y-1.5">
                    {activeArticle.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-800 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                        <span className="leading-tight">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Author & Action Button */}
              <div className="pt-6 border-t-2 border-black/10 flex items-center justify-between gap-4 mt-6">
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-zinc-500 block">Dispatch Author</span>
                  <span className="text-xs font-serif font-bold text-black">Dev Raj Saini</span>
                  <span className="text-[10px] font-mono text-zinc-500 block">Founder, Saini Nexus</span>
                </div>

                <Link
                  href={`/insights/${activeArticle.slug}`}
                  className="neo-btn-blue text-xs font-mono shrink-0"
                >
                  <span>Read Field Note</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* Right Side (7 Columns): The Interactive Dispatch Ledger */}
        <div 
          ref={listContainerRef}
          className="lg:col-span-7 bg-white border-2 border-black rounded-3xl p-4 sm:p-6 shadow-[5px_5px_0px_#000000] relative flex flex-col justify-between"
        >
          {/* Animated Sliding Highlight Tracker */}
          {hasInitialized && (
            <motion.div
              className="absolute left-4 right-4 bg-[#EFF6FF] border-2 border-black rounded-2xl pointer-events-none z-0 shadow-[2px_2px_0px_#000000]"
              initial={false}
              animate={{
                top: trackerStyle.top,
                height: trackerStyle.height,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 32,
                mass: 0.8,
              }}
            />
          )}

          {/* 4 Dispatch Rows */}
          <div className="space-y-2 relative z-10">
            {articles.map((article, idx) => {
              const isSelected = idx === selectedIndex;

              return (
                <div
                  key={article.slug}
                  ref={(el) => {
                    rowRefs.current[idx] = el;
                  }}
                  onMouseEnter={() => updateTrackerPosition(idx)}
                  onClick={() => updateTrackerPosition(idx)}
                  className="relative rounded-2xl p-4 sm:p-5 transition-colors cursor-pointer group"
                >
                  <Link 
                    href={`/insights/${article.slug}`}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-5"
                  >
                    <div className="space-y-1.5 max-w-xl">
                      {/* Number & Category Strip */}
                      <div className="flex items-center gap-2">
                        <span className={`font-mono text-xs font-bold transition-colors ${
                          isSelected ? "text-[#2563EB]" : "text-zinc-400"
                        }`}>
                          #{String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border transition-colors ${
                          isSelected 
                            ? "bg-[#60A5FA] text-black border-black shadow-[1px_1px_0px_#000000]" 
                            : "bg-[#FAF7EF] text-zinc-700 border-black/30"
                        }`}>
                          {article.category}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400 font-semibold hidden sm:inline">
                          {article.publishedAt}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className={`text-base sm:text-lg font-serif font-bold transition-colors leading-snug ${
                        isSelected ? "text-[#2563EB]" : "text-black group-hover:text-[#2563EB]"
                      }`}>
                        {article.title}
                      </h4>

                      {/* One-Line Summary */}
                      <p className="text-xs text-zinc-600 line-clamp-1 font-normal">
                        {article.summary}
                      </p>
                    </div>

                    {/* Read Time & Action Arrow */}
                    <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0">
                      <span className="text-xs font-mono text-zinc-500 font-semibold">
                        {article.readTime}
                      </span>
                      <span className={`w-9 h-9 rounded-full border-2 border-black flex items-center justify-center transition-all shadow-[1.5px_1.5px_0px_#000000] ${
                        isSelected 
                          ? "bg-[#60A5FA] text-black translate-x-1" 
                          : "bg-white text-black group-hover:bg-[#60A5FA] group-hover:translate-x-1"
                      }`}>
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Quick Footer inside Ledger */}
          <div className="pt-4 mt-3 border-t-2 border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-zinc-600 px-2">
            <span>Published monthly by the Saini Nexus Growth Practice.</span>
            <Link 
              href="/insights"
              className="font-bold text-black hover:text-[#2563EB] flex items-center gap-1 transition-colors"
            >
              <span>View All Journal Entries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
