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
  Sparkles, 
  Sliders,
  Award,
  CheckCircle2,
  TrendingUp,
  Target
} from 'lucide-react';

export type CleanHeroTheme = 'dark-minimal' | 'executive-editorial' | 'light-modern';

export function ModernHero() {
  const [activeTheme, setActiveTheme] = useState<CleanHeroTheme>('dark-minimal');

  return (
    <div className="relative w-full">
      
      {/* ========================================================= */}
      {/* THEME SWITCHER BAR TO COMPARE ALL THREE CLEAN OPTIONS     */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl p-2.5 flex flex-wrap items-center justify-between gap-3 shadow-lg">
          <div className="flex items-center gap-2 px-2 text-xs text-slate-300">
            <Sliders className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-semibold text-white">HERO STYLE COMPARISON:</span>
            <span className="text-slate-400 text-[11px] hidden sm:inline">No simulated card · Refined subtle colors</span>
          </div>
          
          <div className="flex items-center gap-1.5 bg-slate-950/80 p-1 rounded-xl border border-slate-800/80">
            <button
              type="button"
              onClick={() => setActiveTheme('dark-minimal')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTheme === 'dark-minimal'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span>Option A: Minimal Dark Luxury</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTheme('executive-editorial')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTheme === 'executive-editorial'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span>Option B: Executive Editorial</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTheme('light-modern')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTheme === 'light-modern'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span>Option C: Ultra-Clean Light Modern</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* OPTION A: MINIMAL DARK LUXURY (Single-column, calm, sharp)*/}
      {/* Deep dark slate, ONE soft dark navy blur, no complex card */}
      {/* ========================================================= */}
      {activeTheme === 'dark-minimal' && (
        <section className="relative pt-12 sm:pt-20 pb-20 sm:pb-28 overflow-hidden bg-[#0A0D14] text-white border-b border-slate-800/80">
          
          {/* Single, calm dark blur in center-right */}
          <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-blue-900/15 rounded-full blur-[160px] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-700/80 bg-slate-900/70 text-slate-300 text-xs font-medium backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
              <span>B2B Growth &amp; LinkedIn Demand Generation</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl mx-auto">
              We build LinkedIn marketing that turns B2B attention into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                qualified sales pipeline.
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
              Strategic Demand Generation, Thought Leader Ads, and precision account targeting for B2B tech, industrial, and consulting firms.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/20 transition-all group"
              >
                <span>Book Strategy Consultation</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/case-studies"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-full text-sm font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-all"
              >
                <span>Explore Campaign Frameworks</span>
                <ArrowUpRight className="ml-1.5 w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Subtle Minimal Performance Proof */}
            <div className="pt-8 border-t border-slate-800/60 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
              <div className="bg-slate-900/40 p-4 rounded-2xl border border-slate-800/60">
                <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">Speed to Lead</span>
                <div className="text-lg font-bold text-white mt-1">&lt;30s CRM Sync</div>
                <p className="text-xs text-slate-400 mt-0.5">Instant routing to sales reps</p>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-2xl border border-slate-800/60">
                <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">Lead Quality</span>
                <div className="text-lg font-bold text-blue-400 mt-1">82% Sales-Accepted</div>
                <p className="text-xs text-slate-400 mt-0.5">Strict qualification criteria</p>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-2xl border border-slate-800/60">
                <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">Target Accuracy</span>
                <div className="text-lg font-bold text-white mt-1">100% Verified ICP</div>
                <p className="text-xs text-slate-400 mt-0.5">Zero budget on junior titles</p>
              </div>
            </div>

            {/* Verification Footer */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 pt-2 font-medium">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-blue-500" />
                Led by Dev Raj Saini
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-blue-500" />
                LinkedIn Marketing Labs Certified
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-blue-500" />
                Jaipur, India &amp; Global Practice
              </span>
            </div>

          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* OPTION B: EXECUTIVE EDITORIAL (2 Columns with Founder Art) */}
      {/* Clean dark canvas with calm founder portrait & badge strip */}
      {/* ========================================================= */}
      {activeTheme === 'executive-editorial' && (
        <section className="relative pt-12 sm:pt-16 pb-20 sm:pb-28 overflow-hidden bg-[#0B0F19] text-white border-b border-slate-800/80">
          
          {/* Subtle soft dark indigo blur */}
          <div className="absolute top-[15%] right-[5%] w-[450px] h-[450px] bg-indigo-950/40 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-700/80 bg-slate-900/60 text-slate-300 text-xs font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>B2B Growth &amp; LinkedIn Demand Generation</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                  We build LinkedIn campaigns that turn B2B attention into{' '}
                  <span className="text-blue-400">sales pipeline.</span>
                </h1>

                <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-xl">
                  Most B2B advertising fails because it treats enterprise buyers like impulse shoppers. Saini Nexus crafts full-funnel demand generation—combining Thought Leader Ads, high-value content proof, and precision account targeting for SaaS, industrial, and consulting firms.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/20 transition-all group"
                  >
                    <span>Book Strategy Consultation</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <Link
                    href="/case-studies"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all"
                  >
                    <span>Inspect Frameworks</span>
                    <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 text-slate-400" />
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400 pt-1 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-blue-400" />
                    Direct Strategy by Dev Raj Saini
                  </span>
                  <span className="text-slate-700">·</span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-blue-400" />
                    LinkedIn Marketing Labs Certified
                  </span>
                </div>
              </div>

              {/* Right Column: Clean Executive Profile & Credentials Card (5 cols) */}
              <div className="lg:col-span-5">
                <div className="bg-slate-900/60 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
                  
                  <div className="flex items-center gap-4 border-b border-slate-800 pb-5">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-800 ring-2 ring-blue-500/30 shrink-0">
                      <Image
                        src="/team/dev-raj-saini.jpg"
                        alt="Dev Raj Saini"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">Dev Raj Saini</h3>
                      <p className="text-xs text-blue-400 font-medium">Founder &amp; B2B Growth Strategist</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Saini Nexus · Jaipur, India</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Verified Capabilities
                    </div>

                    <div className="grid grid-cols-1 gap-2.5">
                      <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                        <span className="text-xs text-slate-200 font-medium">Thought Leader Ad Architecture</span>
                        <span className="text-[11px] text-blue-400 font-semibold bg-blue-950/60 px-2 py-0.5 rounded border border-blue-900">
                          Active
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                        <span className="text-xs text-slate-200 font-medium">Buying Committee ABM</span>
                        <span className="text-[11px] text-blue-400 font-semibold bg-blue-950/60 px-2 py-0.5 rounded border border-blue-900">
                          Active
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                        <span className="text-xs text-slate-200 font-medium">LinkedIn Marketing Labs Certified</span>
                        <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900">
                          Verified
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 text-center">
                    <span className="text-xs text-slate-500">
                      Engaging economic buyers across India &amp; global B2B markets.
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* OPTION C: ULTRA-CLEAN LIGHT MODERN                         */}
      {/* Crisp white / light canvas, dark typography, zero neon glow*/}
      {/* ========================================================= */}
      {activeTheme === 'light-modern' && (
        <section className="relative pt-12 sm:pt-20 pb-20 sm:pb-28 overflow-hidden bg-white text-slate-900 border-b border-slate-200">
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-700 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
              <span>B2B Growth &amp; LinkedIn Demand Generation</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.08] max-w-4xl mx-auto">
              We build LinkedIn marketing that turns B2B attention into{' '}
              <span className="text-blue-600">
                qualified sales pipeline.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
              Strategic Demand Generation, Thought Leader Ads, and precision account targeting for B2B tech, industrial, and consulting firms.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold text-white bg-slate-950 hover:bg-blue-600 shadow-md transition-all group"
              >
                <span>Book Strategy Consultation</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/case-studies"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-full text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition-all"
              >
                <span>Explore Campaign Frameworks</span>
                <ArrowUpRight className="ml-1.5 w-4 h-4 text-slate-500" />
              </Link>
            </div>

            {/* Clean Proof Cards */}
            <div className="pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">Speed to Lead</span>
                <div className="text-lg font-bold text-slate-900 mt-1">&lt;30s CRM Sync</div>
                <p className="text-xs text-slate-600 mt-0.5">Instant routing to sales reps</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">Lead Quality</span>
                <div className="text-lg font-bold text-blue-600 mt-1">82% Sales-Accepted</div>
                <p className="text-xs text-slate-600 mt-0.5">Strict qualification criteria</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">Target Accuracy</span>
                <div className="text-lg font-bold text-slate-900 mt-1">100% Verified ICP</div>
                <p className="text-xs text-slate-600 mt-0.5">Zero budget on junior titles</p>
              </div>
            </div>

            {/* Verification Footer */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 pt-2 font-medium">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-blue-600" />
                Led by Dev Raj Saini
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-blue-600" />
                LinkedIn Marketing Labs Certified
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-blue-600" />
                Jaipur, India &amp; Global Practice
              </span>
            </div>

          </div>
        </section>
      )}

    </div>
  );
}
