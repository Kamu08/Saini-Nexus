'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  MapPin, 
  ShieldCheck, 
  Sliders,
  CheckCircle2,
  TrendingUp,
  Target,
  Sparkles
} from 'lucide-react';

export type WorldClassTheme = 'global-agency' | 'dark-studio' | 'editorial-authority';

export function ModernHero() {
  const [activeTheme, setActiveTheme] = useState<WorldClassTheme>('global-agency');

  return (
    <div className="relative w-full">
      
      {/* ========================================================= */}
      {/* 3 HIGH-END REAL WORLD AGENCY BENCHMARKS SWITCHER          */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <div className="bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-2xl p-2.5 flex flex-wrap items-center justify-between gap-3 shadow-xl">
          <div className="flex items-center gap-2 px-2 text-xs text-slate-300">
            <Sliders className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-bold text-white uppercase tracking-wider text-[11px]">DESIGN SYSTEM BENCHMARKS:</span>
            <span className="text-slate-400 text-[11px] hidden md:inline">Compare 3 distinct world-class agency styles</span>
          </div>
          
          <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              type="button"
              onClick={() => setActiveTheme('global-agency')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTheme === 'global-agency'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              1. Global Agency (Pentagram / Work&Co)
            </button>

            <button
              type="button"
              onClick={() => setActiveTheme('dark-studio')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTheme === 'dark-studio'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              2. Dark Studio (Matte Obsidian)
            </button>

            <button
              type="button"
              onClick={() => setActiveTheme('editorial-authority')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTheme === 'editorial-authority'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              3. Editorial Authority (Financial Times)
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 1. GLOBAL AGENCY STYLE (PENTAGRAM / WORK & CO STYLE)      */}
      {/* Pure white, confident brutalist-refined typography, 0 AI  */}
      {/* ========================================================= */}
      {activeTheme === 'global-agency' && (
        <section className="relative pt-16 sm:pt-24 pb-20 sm:pb-32 bg-white text-slate-950 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Top Minimalist Tag */}
            <div className="flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-slate-500">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>Saini Nexus · B2B LinkedIn Marketing Studio</span>
            </div>

            {/* Massive Confident Agency Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-extrabold tracking-tight text-slate-950 leading-[1.04]">
              We turn enterprise attention on LinkedIn into predictable sales revenue.
            </h1>

            {/* Clean Sub-editorial Paragraph */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
              <p className="md:col-span-8 text-lg sm:text-xl md:text-2xl text-slate-600 font-normal leading-relaxed">
                A dedicated B2B demand generation practice for technology, consulting, and manufacturing firms. We engineer executive thought leadership, buying committee ABM, and high-intent buyer acquisition.
              </p>

              <div className="md:col-span-4 flex flex-col gap-3">
                <Link
                  href="/book"
                  className="w-full inline-flex items-center justify-between px-7 py-4 rounded-full text-sm font-semibold text-white bg-slate-950 hover:bg-blue-600 transition-colors group shadow-sm"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/case-studies"
                  className="w-full inline-flex items-center justify-between px-7 py-4 rounded-full text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <span>View Case Frameworks</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500" />
                </Link>
              </div>
            </div>

            {/* Understated Agency Metadata Strip */}
            <div className="pt-10 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold block">Practice Lead</span>
                <span className="font-bold text-slate-900 mt-1 block">Dev Raj Saini</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold block">HQ &amp; Coverage</span>
                <span className="font-bold text-slate-900 mt-1 block">Jaipur, India · Global B2B</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold block">Accreditation</span>
                <span className="font-bold text-slate-900 mt-1 block">LinkedIn Marketing Labs</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold block">Client Acceptance</span>
                <span className="font-bold text-blue-600 mt-1 block">4 Cohorts / Quarter</span>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* 2. MODERN DARK STUDIO (MATTE OBSIDIAN & LINEAR STYLE)     */}
      {/* Deep matte black (#090D16), subtle slate-800 borders, 0 AI */}
      {/* ========================================================= */}
      {activeTheme === 'dark-studio' && (
        <section className="relative pt-16 sm:pt-24 pb-20 sm:pb-32 bg-[#090D16] text-white border-b border-slate-800/80 overflow-hidden">
          
          {/* Extremely subtle, calm dark navy ambient blur */}
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-blue-950/30 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-800 bg-slate-900/80 text-slate-300 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
              <span>B2B Growth &amp; LinkedIn Demand Practice</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl mx-auto">
              We turn B2B attention on LinkedIn into{' '}
              <span className="text-blue-400">qualified sales pipeline.</span>
            </h1>

            <p className="text-slate-400 text-base sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
              No generic vanity metrics. We build full-funnel LinkedIn demand generation, Thought Leader Ads, and precision account targeting for high-growth enterprise firms.
            </p>

            {/* Clean Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20 transition-all group"
              >
                <span>Book Strategy Consultation</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/case-studies"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-full text-sm font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all"
              >
                <span>Explore Frameworks</span>
                <ArrowUpRight className="ml-1.5 w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Clean Monochromatic Metric Strip */}
            <div className="pt-10 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80">
                <span className="text-xs text-slate-500 uppercase font-semibold block">Speed to Lead</span>
                <span className="text-lg font-bold text-white mt-1 block">&lt;30s CRM Sync</span>
                <span className="text-xs text-slate-400 mt-0.5 block">Instant routing to sales</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80">
                <span className="text-xs text-slate-500 uppercase font-semibold block">Lead Quality</span>
                <span className="text-lg font-bold text-blue-400 mt-1 block">82% Sales-Accepted</span>
                <span className="text-xs text-slate-400 mt-0.5 block">Strict buyer qualification</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80">
                <span className="text-xs text-slate-500 uppercase font-semibold block">Target Accuracy</span>
                <span className="text-lg font-bold text-white mt-1 block">100% Verified ICP</span>
                <span className="text-xs text-slate-400 mt-0.5 block">Zero wasted budget</span>
              </div>
            </div>

            {/* Minimalist Trust line */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 pt-2 font-medium">
              <span>Dev Raj Saini · Practice Lead</span>
              <span>•</span>
              <span>LinkedIn Marketing Labs Certified</span>
              <span>•</span>
              <span>Jaipur, India &amp; Global Practice</span>
            </div>

          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* 3. EDITORIAL AUTHORITY (FINANCIAL TIMES / FORBES STYLE)   */}
      {/* Sophisticated ivory canvas, serif typography, high trust  */}
      {/* ========================================================= */}
      {activeTheme === 'editorial-authority' && (
        <section className="relative pt-16 sm:pt-20 pb-20 sm:pb-28 bg-[#FBFBFA] text-slate-900 border-b border-stone-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            {/* Editorial Dateline */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-stone-300 text-xs font-serif text-stone-600">
              <div className="flex items-center gap-2">
                <span className="font-bold uppercase tracking-wider text-stone-900">SAINI NEXUS</span>
                <span>/</span>
                <span>B2B Growth &amp; LinkedIn Demand Practice</span>
              </div>
              <div>
                <span>EST. JAIPUR, INDIA · GLOBAL CLIENTS</span>
              </div>
            </div>

            {/* Dignified Editorial Headline */}
            <div className="space-y-6 max-w-4xl">
              <h1 className="text-4xl sm:text-6xl lg:text-[4.8rem] font-serif font-normal tracking-tight text-stone-950 leading-[1.08]">
                Turning enterprise attention into verified commercial pipeline.
              </h1>

              <p className="text-lg sm:text-xl text-stone-600 font-sans font-normal leading-relaxed max-w-2xl">
                We design and execute B2B marketing systems centered on executive thought leadership, buyer committee consensus, and measurable pipeline velocity for technology, manufacturing, and advisory leaders.
              </p>
            </div>

            {/* Editorial Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 rounded-md text-sm font-sans font-semibold text-white bg-stone-900 hover:bg-stone-800 transition-colors shadow-sm"
              >
                <span>Request Strategic Consultation</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>

              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-7 py-4 rounded-md text-sm font-sans font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 transition-colors"
              >
                <span>Read Campaign Frameworks</span>
                <ArrowUpRight className="ml-1.5 w-4 h-4 text-stone-500" />
              </Link>
            </div>

            {/* Institutional Trust Indicators */}
            <div className="pt-8 border-t border-stone-300 grid grid-cols-1 sm:grid-cols-3 gap-6 font-sans">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Leadership</span>
                <div className="text-base font-bold text-stone-900">Dev Raj Saini</div>
                <p className="text-xs text-stone-600">Founder &amp; B2B Growth Lead</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Verification</span>
                <div className="text-base font-bold text-stone-900">LinkedIn Certified</div>
                <p className="text-xs text-stone-600">Marketing Strategy &amp; Measurement</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Standard</span>
                <div className="text-base font-bold text-stone-900">Strict ICP Filtering</div>
                <p className="text-xs text-stone-600">Zero budget on non-buyers</p>
              </div>
            </div>

          </div>
        </section>
      )}

    </div>
  );
}
