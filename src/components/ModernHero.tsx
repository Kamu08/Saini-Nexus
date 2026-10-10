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

export type RefinedTheme = 'pure-agency' | 'hybrid-editorial' | 'ivy-editorial';

export function ModernHero() {
  const [activeTheme, setActiveTheme] = useState<RefinedTheme>('hybrid-editorial');

  return (
    <div className="relative w-full">
      
      {/* ========================================================= */}
      {/* EXPLORER BAR: OPTION 1 & 3 DEEP EXPLORATION               */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <div className="bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-2xl p-2.5 flex flex-wrap items-center justify-between gap-3 shadow-xl">
          <div className="flex items-center gap-2 px-2 text-xs text-slate-300">
            <Sliders className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-bold text-white uppercase tracking-wider text-[11px]">EXPLORING OPTION 1 &amp; 3:</span>
            <span className="text-slate-400 text-[11px] hidden md:inline">Compare 3 distinct variations of agency &amp; editorial design</span>
          </div>
          
          <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              type="button"
              onClick={() => setActiveTheme('pure-agency')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTheme === 'pure-agency'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              1. Pure Global Agency (Minimalist Sans)
            </button>

            <button
              type="button"
              onClick={() => setActiveTheme('hybrid-editorial')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTheme === 'hybrid-editorial'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              2. Hybrid Authority (Modern Serif + Clean White)
            </button>

            <button
              type="button"
              onClick={() => setActiveTheme('ivy-editorial')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTheme === 'ivy-editorial'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              3. Warm Editorial (Ivory Paper &amp; Serif)
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* VARIATION 1: PURE GLOBAL AGENCY (MINIMALIST SANS)         */}
      {/* Massive modern typography, pure white, clean asymmetry    */}
      {/* ========================================================= */}
      {activeTheme === 'pure-agency' && (
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
                <span className="text-xs text-slate-400 uppercase font-semibold block">Client Focus</span>
                <span className="font-bold text-blue-600 mt-1 block">Mid-Market &amp; Enterprise</span>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* VARIATION 2: HYBRID AUTHORITY (MODERN SERIF + CLEAN WHITE)*/}
      {/* The elegance of editorial serif with the crisp agency white*/}
      {/* ========================================================= */}
      {activeTheme === 'hybrid-editorial' && (
        <section className="relative pt-16 sm:pt-24 pb-20 sm:pb-32 bg-white text-slate-950 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Top Minimalist Tag */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5 font-sans uppercase tracking-widest text-slate-500 font-semibold">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>SAINI NEXUS · B2B GROWTH PRACTICE</span>
              </div>
              <div className="text-slate-400 font-sans uppercase tracking-wider text-[11px]">
                JAIPUR, INDIA · GLOBAL ADVISORY
              </div>
            </div>

            {/* Elegant Hybrid Headline: Serif Title + Sharp Contemporary Form */}
            <div className="space-y-6 max-w-5xl">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-serif font-normal tracking-tight text-slate-950 leading-[1.04]">
                Turning enterprise attention into <span className="italic font-normal">predictable</span> commercial pipeline.
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-sans font-normal leading-relaxed max-w-3xl">
                We design and execute B2B marketing systems centered on executive thought leadership, buyer committee consensus, and measurable pipeline velocity for technology, manufacturing, and advisory leaders.
              </p>
            </div>

            {/* Clean Action & Proof Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-sans font-semibold text-white bg-slate-950 hover:bg-blue-600 transition-colors shadow-sm"
              >
                <span>Book Strategy Consultation</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>

              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full text-sm font-sans font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <span>Review Campaign Playbooks</span>
                <ArrowUpRight className="ml-1.5 w-4 h-4 text-slate-500" />
              </Link>
            </div>

            {/* Understated Editorial Institutional Strip */}
            <div className="pt-10 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6 font-sans">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">Practice Lead</span>
                <div className="text-base font-bold text-slate-900">Dev Raj Saini</div>
                <p className="text-xs text-slate-500">Founder &amp; B2B Growth Lead</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">Verification</span>
                <div className="text-base font-bold text-slate-900">LinkedIn Certified</div>
                <p className="text-xs text-slate-500">Marketing Strategy &amp; Measurement</p>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">Execution Standard</span>
                <div className="text-base font-bold text-slate-900">Strict Committee Targeting</div>
                <p className="text-xs text-slate-500">Zero budget wasted on junior titles</p>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* VARIATION 3: WARM EDITORIAL (IVORY PAPER & SERIF)         */}
      {/* Traditional Financial Times / McKinsey Quarterly paper    */}
      {/* ========================================================= */}
      {activeTheme === 'ivy-editorial' && (
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
