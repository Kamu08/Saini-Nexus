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
  TrendingUp,
  Target,
  Layers,
  ThumbsUp,
  MessageSquare,
  Share2,
  Workflow,
  Eye,
  Sliders
} from 'lucide-react';

export type HeroTheme = 'obsidian' | 'split-cobalt' | 'cyber-terminal';

export function ModernHero() {
  const [activeTheme, setActiveTheme] = useState<HeroTheme>('obsidian');
  const [activeTab, setActiveTab] = useState<'tla' | 'demand' | 'abm'>('tla');

  return (
    <div className="relative w-full">
      
      {/* ========================================================= */}
      {/* THEME PREVIEW SWITCHER PILL (Allows user to inspect all 3) */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl p-2 sm:p-2.5 flex flex-wrap items-center justify-between gap-3 shadow-lg">
          <div className="flex items-center gap-2 px-2 text-xs font-mono text-slate-300">
            <Sliders className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-semibold text-white">HERO THEME EXPLORER:</span>
            <span className="text-slate-400 text-[11px] hidden sm:inline">Compare and choose your favorite style</span>
          </div>
          
          <div className="flex items-center gap-1.5 bg-slate-950/80 p-1 rounded-xl border border-slate-800/80">
            <button
              type="button"
              onClick={() => setActiveTheme('obsidian')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                activeTheme === 'obsidian'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
              <span>Theme 1: Obsidian Blue Blur</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTheme('split-cobalt')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                activeTheme === 'split-cobalt'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-indigo-400 inline-block" />
              <span>Theme 2: Split Cobalt Glass</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTheme('cyber-terminal')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                activeTheme === 'cyber-terminal'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              <span>Theme 3: Dark Emerald Blueprint</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* THEME 1: IMMERSIVE OBSIDIAN & ELECTRIC BLUE BLUR           */}
      {/* Deep black/slate canvas, large blurred orbs, glowing glass */}
      {/* ========================================================= */}
      {activeTheme === 'obsidian' && (
        <section className="relative pt-8 sm:pt-12 pb-20 sm:pb-28 overflow-hidden bg-slate-950 text-white border-b border-slate-800/80">
          
          {/* Multi-layered Dark Blur Aura Orbs */}
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-blue-600/25 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] sm:w-[650px] sm:h-[650px] bg-indigo-600/20 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] bg-sky-500/15 rounded-full blur-[120px] pointer-events-none" />
          
          {/* Subtle Grid Lines Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "48px 48px"
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Editorial Masthead Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800/90 text-xs font-mono text-slate-400 mb-8 sm:mb-12">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                <span className="font-semibold text-slate-200 uppercase tracking-wider">Saini Nexus Practice Hub</span>
                <span className="text-slate-700">/</span>
                <span className="flex items-center gap-1 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  Jaipur, Rajasthan, India
                </span>
              </div>

              <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider">
                <span className="hidden sm:inline text-slate-500">PRACTICE LEAD:</span>
                <span className="font-bold text-white">DEV RAJ SAINI</span>
                <span className="text-slate-700">·</span>
                <span className="text-blue-300 font-semibold bg-blue-950/80 px-2.5 py-0.5 rounded-full border border-blue-800/80">
                  ENTERPRISE LINKEDIN PRACTICE
                </span>
              </div>
            </div>

            {/* 2-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Direct Human Agency Narrative */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-mono tracking-tight backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>B2B Growth Engine · Zero Vanity Metrics</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold tracking-tight text-white leading-[1.08]">
                  We build LinkedIn engines that turn enterprise attention into{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                    closed sales pipeline.
                  </span>
                </h1>

                <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
                  Most B2B advertising fails because it treats enterprise buyers like impulse shoppers. Saini Nexus engineers full-funnel demand generation—combining Thought Leader Ads, ungated proof, and strict committee ABM for tech, industrial, and consulting firms.
                </p>

                {/* Direct Value Drivers with Glass Blur */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  <div className="p-4 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 hover:border-blue-500/50 transition-all flex items-start gap-3.5 shadow-lg">
                    <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 border border-blue-500/30">
                      01
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Thought Leader Ads</h4>
                      <p className="text-[11px] text-slate-400 leading-snug mt-1">Sponsoring executive authority to generate 10x higher trust than corporate brand pages.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 hover:border-indigo-500/50 transition-all flex items-start gap-3.5 shadow-lg">
                    <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5 border border-indigo-500/30">
                      02
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Buying Committee ABM</h4>
                      <p className="text-[11px] text-slate-400 leading-snug mt-1">Multi-threading Economic Buyers, Technical Evaluators, and Internal Champions.</p>
                    </div>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] transition-all group"
                  >
                    <span>Book Strategy Conversation</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <Link
                    href="/case-studies"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 shadow-sm transition-all"
                  >
                    <span>Inspect 5 Campaign Frameworks</span>
                    <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 text-slate-400" />
                  </Link>
                </div>

                {/* Trust Verification Bar */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400 pt-1 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                    Direct Review by Dev Raj Saini
                  </span>
                  <span className="text-slate-700">·</span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                    4x Verified LinkedIn Marketing Labs Certifications
                  </span>
                  <span className="text-slate-700">·</span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                    &lt;24h Diagnostic Turnaround
                  </span>
                </div>

              </div>

              {/* Right Column: Glassmorphism Campaign Workbench */}
              <div className="lg:col-span-5">
                <div className="bg-slate-900/80 backdrop-blur-2xl text-white rounded-3xl p-6 sm:p-7 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border border-slate-700/80 space-y-5 relative">
                  
                  {/* Subtle inner top glow */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent pointer-events-none" />

                  {/* Window Controls Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="text-slate-400 text-[11px] ml-2 font-mono">campaign-workbench.exe</span>
                    </div>
                    <span className="text-emerald-400 font-mono text-[10px] uppercase font-bold tracking-wider bg-emerald-950/90 px-2 py-0.5 rounded border border-emerald-800">
                      LIVE TELEMETRY
                    </span>
                  </div>

                  {/* Workbench Tab Selector */}
                  <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-slate-800 text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => setActiveTab('tla')}
                      className={`py-1.5 px-2 rounded-lg font-bold transition-all text-center ${
                        activeTab === 'tla' 
                          ? 'bg-blue-600 text-white shadow-xs' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Thought Leader
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('demand')}
                      className={`py-1.5 px-2 rounded-lg font-bold transition-all text-center ${
                        activeTab === 'demand' 
                          ? 'bg-blue-600 text-white shadow-xs' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Document ABM
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('abm')}
                      className={`py-1.5 px-2 rounded-lg font-bold transition-all text-center ${
                        activeTab === 'abm' 
                          ? 'bg-blue-600 text-white shadow-xs' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Lead Pipeline
                    </button>
                  </div>

                  {/* Realistic LinkedIn Feed Mockup Card */}
                  <div className="bg-white text-slate-900 rounded-2xl p-4.5 sm:p-5 space-y-3.5 shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-100 ring-2 ring-slate-100 shrink-0">
                        <Image
                          src={activeTab === 'tla' ? '/team/dev-raj-saini.jpg' : '/saini-nexus-logo.png'}
                          alt="Campaign Profile"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5 font-sans truncate">
                          <span>{activeTab === 'tla' ? 'Dev Raj Saini' : 'Saini Nexus'}</span>
                          <span className="text-[10px] text-slate-400 font-normal">• 1st</span>
                        </div>
                        <p className="text-[11px] text-slate-500 font-normal truncate">
                          {activeTab === 'tla' ? 'Founder & B2B Strategist · Saini Nexus' : 'B2B Marketing & Pipeline Architecture'}
                        </p>
                        <div className="flex items-center gap-1 text-[10px] text-slate-400">
                          <span>Promoted by Saini Nexus</span>
                          <span>•</span>
                          <span>🌐</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-xs text-slate-800 leading-relaxed font-sans space-y-1.5">
                      {activeTab === 'tla' && (
                        <>
                          <p className="font-semibold text-slate-950">
                            &ldquo;95% of your B2B buyers aren&apos;t in-market right now. If your LinkedIn strategy only bids on &apos;Book Demo&apos;, you&apos;re burning 80% of your CAC.&rdquo;
                          </p>
                          <p className="text-slate-600">
                            Here is the exact 3-tier Thought Leader Ad architecture we deployed to build qualified pipeline with Economic Buyers...
                          </p>
                        </>
                      )}
                      {activeTab === 'demand' && (
                        <>
                          <p className="font-semibold text-slate-950">
                            &ldquo;The Enterprise Cloud Security Decision Matrix: How 500+ CISOs actually evaluate vendors in 2026.&rdquo;
                          </p>
                          <p className="text-slate-600">
                            Swipe through this 8-slide architecture teardown. Zero gates. Zero forced phone numbers.
                          </p>
                        </>
                      )}
                      {activeTab === 'abm' && (
                        <>
                          <p className="font-semibold text-slate-950">
                            &ldquo;Precision ABM for Industrial Exporters: Direct RFQ Protocol from European &amp; US supply chain heads.&rdquo;
                          </p>
                          <p className="text-slate-600">
                            Matched account list filtering with verified tolerance and capacity verification.
                          </p>
                        </>
                      )}
                    </div>

                    <div className="rounded-xl overflow-hidden bg-slate-900 text-white p-4 border border-slate-800 flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider font-bold">
                          {activeTab === 'tla' ? 'Executive Perspective' : activeTab === 'demand' ? 'Document Slide 01/08' : 'Matched Account List'}
                        </span>
                        <div className="text-xs font-bold text-white leading-tight">
                          {activeTab === 'tla' ? 'Why Single-Lead Gen Fails Enterprise B2B' : activeTab === 'demand' ? 'Enterprise Procurement Blueprint' : '450 Accounts · Strict Title Exclusions'}
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-blue-400 bg-blue-950 px-2.5 py-1 rounded border border-blue-800">
                        {activeTab === 'tla' ? 'Read Analysis' : activeTab === 'demand' ? 'Download PDF' : 'Request RFQ'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                      <span className="flex items-center gap-1.5 text-blue-700">
                        <ThumbsUp className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                        <span>248 C-Level Reactions</span>
                      </span>
                      <span>42 Reposts</span>
                    </div>
                  </div>

                  {/* Bottom Real-Time Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 pt-1 text-center font-mono">
                    <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-[10px] text-slate-400 uppercase block">SAR Quality</span>
                      <span className="text-sm font-bold text-emerald-400">82%</span>
                    </div>
                    <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-[10px] text-slate-400 uppercase block">CTR Benchmark</span>
                      <span className="text-sm font-bold text-blue-400">2.84%</span>
                    </div>
                    <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-[10px] text-slate-400 uppercase block">Account Fit</span>
                      <span className="text-sm font-bold text-white">100% ICP</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* THEME 2: REFINED EDITORIAL SPLIT WITH DARK COBALT BLUR    */}
      {/* Light canvas on left with dark blue blurred glass capsule */}
      {/* ========================================================= */}
      {activeTheme === 'split-cobalt' && (
        <section className="relative pt-8 sm:pt-12 pb-20 sm:pb-28 overflow-hidden bg-slate-50/80 border-b border-slate-200">
          
          {/* Subtle light ambient glow */}
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Editorial Masthead Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200 text-xs font-mono text-slate-500 mb-8 sm:mb-12">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-slate-800 uppercase tracking-wider">Saini Nexus Practice Hub</span>
                <span className="text-slate-300">/</span>
                <span className="flex items-center gap-1 text-slate-600">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  Jaipur, India
                </span>
              </div>

              <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider">
                <span className="hidden sm:inline text-slate-400">PRACTICE LEAD:</span>
                <span className="font-bold text-slate-900">DEV RAJ SAINI</span>
                <span className="text-slate-300">·</span>
                <span className="text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  ACTIVE COHORT
                </span>
              </div>
            </div>

            {/* 2-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Direct Human Agency Narrative (Light Slate) */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50/70 text-blue-700 text-xs font-mono tracking-tight">
                  <span className="font-bold text-blue-800">01 //</span>
                  <span>B2B LinkedIn Marketing &amp; Pipeline Architecture</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.1rem] font-extrabold tracking-tight text-slate-950 leading-[1.08]">
                  We build LinkedIn engines that turn enterprise attention into{' '}
                  <span className="underline decoration-blue-600 decoration-4 underline-offset-4">
                    sales pipeline.
                  </span>
                </h1>

                <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
                  Most B2B advertising fails because it treats enterprise buyers like impulse shoppers. Saini Nexus engineers full-funnel demand generation—combining Thought Leader Ads, ungated proof, and strict committee ABM for tech, industrial, and consulting firms.
                </p>

                {/* Direct Value Drivers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                      01
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Thought Leader &amp; Founder Ads</h4>
                      <p className="text-[11px] text-slate-600 leading-snug mt-0.5">Sponsoring executive authority to 10x trust over corporate brand pages.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                      02
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Buying Committee ABM</h4>
                      <p className="text-[11px] text-slate-600 leading-snug mt-0.5">Targeting the Economic Buyer, Champion, and Technical Evaluator simultaneously.</p>
                    </div>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-blue-600 shadow-sm hover:shadow transition-all group"
                  >
                    <span>Book Strategy Conversation</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <Link
                    href="/case-studies"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-2xs transition-all"
                  >
                    <span>Inspect Playbooks</span>
                    <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 text-slate-500" />
                  </Link>
                </div>

                {/* Direct Trust Bar */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-500 pt-1 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-blue-600 stroke-[3]" />
                    Direct Review by Dev Raj Saini
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-blue-600 stroke-[3]" />
                    Verified LinkedIn Marketing Labs Certified
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-blue-600 stroke-[3]" />
                    &lt;24h Diagnostic Turnaround
                  </span>
                </div>

              </div>

              {/* Right Column: Dark Cobalt Glass Capsule with Vibrant Dark Blur */}
              <div className="lg:col-span-5 relative">
                
                {/* Intense Dark Blur Orb behind the container */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/40 via-indigo-900/60 to-purple-800/40 rounded-3xl blur-[50px] transform scale-105 pointer-events-none" />

                <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-800 space-y-5 relative z-10 backdrop-blur-xl">
                  
                  {/* Window Controls Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="text-slate-400 text-[11px] ml-2 font-mono">campaign-workbench.exe</span>
                    </div>
                    <span className="text-emerald-400 font-mono text-[10px] uppercase font-bold tracking-wider bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                      LIVE TELEMETRY
                    </span>
                  </div>

                  {/* Workbench Tab Selector */}
                  <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800 text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => setActiveTab('tla')}
                      className={`py-1.5 px-2 rounded-lg font-bold transition-all text-center ${
                        activeTab === 'tla' 
                          ? 'bg-blue-600 text-white shadow-xs' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Thought Leader
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('demand')}
                      className={`py-1.5 px-2 rounded-lg font-bold transition-all text-center ${
                        activeTab === 'demand' 
                          ? 'bg-blue-600 text-white shadow-xs' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Document ABM
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('abm')}
                      className={`py-1.5 px-2 rounded-lg font-bold transition-all text-center ${
                        activeTab === 'abm' 
                          ? 'bg-blue-600 text-white shadow-xs' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Lead Pipeline
                    </button>
                  </div>

                  {/* Realistic LinkedIn Feed Mockup Card */}
                  <div className="bg-white text-slate-900 rounded-2xl p-4.5 sm:p-5 space-y-3.5 shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-100 ring-2 ring-slate-100 shrink-0">
                        <Image
                          src={activeTab === 'tla' ? '/team/dev-raj-saini.jpg' : '/saini-nexus-logo.png'}
                          alt="Campaign Profile"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5 font-sans truncate">
                          <span>{activeTab === 'tla' ? 'Dev Raj Saini' : 'Saini Nexus'}</span>
                          <span className="text-[10px] text-slate-400 font-normal">• 1st</span>
                        </div>
                        <p className="text-[11px] text-slate-500 font-normal truncate">
                          {activeTab === 'tla' ? 'Founder & B2B Strategist · Saini Nexus' : 'B2B Marketing & Pipeline Architecture'}
                        </p>
                        <div className="flex items-center gap-1 text-[10px] text-slate-400">
                          <span>Promoted by Saini Nexus</span>
                          <span>•</span>
                          <span>🌐</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-xs text-slate-800 leading-relaxed font-sans space-y-1.5">
                      {activeTab === 'tla' && (
                        <>
                          <p className="font-semibold text-slate-950">
                            &ldquo;95% of your B2B buyers aren&apos;t in-market right now. If your LinkedIn strategy only bids on &apos;Book Demo&apos;, you&apos;re burning 80% of your CAC.&rdquo;
                          </p>
                          <p className="text-slate-600">
                            Here is the exact 3-tier Thought Leader Ad architecture we deployed to build qualified pipeline with Economic Buyers...
                          </p>
                        </>
                      )}
                      {activeTab === 'demand' && (
                        <>
                          <p className="font-semibold text-slate-950">
                            &ldquo;The Enterprise Cloud Security Decision Matrix: How 500+ CISOs actually evaluate vendors in 2026.&rdquo;
                          </p>
                          <p className="text-slate-600">
                            Swipe through this 8-slide architecture teardown. Zero gates. Zero forced phone numbers.
                          </p>
                        </>
                      )}
                      {activeTab === 'abm' && (
                        <>
                          <p className="font-semibold text-slate-950">
                            &ldquo;Precision ABM for Industrial Exporters: Direct RFQ Protocol from European &amp; US supply chain heads.&rdquo;
                          </p>
                          <p className="text-slate-600">
                            Matched account list filtering with verified tolerance and capacity verification.
                          </p>
                        </>
                      )}
                    </div>

                    <div className="rounded-xl overflow-hidden bg-slate-900 text-white p-4 border border-slate-800 flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider font-bold">
                          {activeTab === 'tla' ? 'Executive Perspective' : activeTab === 'demand' ? 'Document Slide 01/08' : 'Matched Account List'}
                        </span>
                        <div className="text-xs font-bold text-white leading-tight">
                          {activeTab === 'tla' ? 'Why Single-Lead Gen Fails Enterprise B2B' : activeTab === 'demand' ? 'Enterprise Procurement Blueprint' : '450 Accounts · Strict Title Exclusions'}
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-blue-400 bg-blue-950 px-2.5 py-1 rounded border border-blue-800">
                        {activeTab === 'tla' ? 'Read Analysis' : activeTab === 'demand' ? 'Download PDF' : 'Request RFQ'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                      <span className="flex items-center gap-1.5 text-blue-700">
                        <ThumbsUp className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                        <span>248 C-Level Reactions</span>
                      </span>
                      <span>42 Reposts</span>
                    </div>
                  </div>

                  {/* Bottom Real-Time Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 pt-1 text-center font-mono">
                    <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-[10px] text-slate-400 uppercase block">SAR Quality</span>
                      <span className="text-sm font-bold text-emerald-400">82%</span>
                    </div>
                    <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-[10px] text-slate-400 uppercase block">CTR Benchmark</span>
                      <span className="text-sm font-bold text-blue-400">2.84%</span>
                    </div>
                    <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-[10px] text-slate-400 uppercase block">Account Fit</span>
                      <span className="text-sm font-bold text-white">100% ICP</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* THEME 3: DARK EMERALD ARCHITECTURAL BLUEPRINT              */}
      {/* Deep midnight slate with dark emerald and cyan blur halos  */}
      {/* ========================================================= */}
      {activeTheme === 'cyber-terminal' && (
        <section className="relative pt-8 sm:pt-12 pb-20 sm:pb-28 overflow-hidden bg-[#0A0F1D] text-white border-b border-emerald-900/40">
          
          {/* Deep Emerald and Cyan Blur Clouds */}
          <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-emerald-600/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-[25%] right-[-10%] w-[550px] h-[550px] bg-teal-600/15 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none" />
          
          {/* Blueprint Dot Matrix */}
          <div 
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#34D399 1px, transparent 1px)",
              backgroundSize: "32px 32px"
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Blueprint Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800 text-xs font-mono text-slate-400 mb-8 sm:mb-12">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_rgba(52,211,153,1)]" />
                <span className="font-semibold text-emerald-300 uppercase tracking-wider">ENGINEERING SPEC: SN-2026.4</span>
                <span className="text-slate-700">/</span>
                <span className="text-slate-300">JAIPUR ADVANCED GROWTH LAB</span>
              </div>

              <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider">
                <span className="text-slate-500">SYSTEM ARCHITECT:</span>
                <span className="font-bold text-white">DEV RAJ SAINI</span>
                <span className="text-slate-700">·</span>
                <span className="text-emerald-300 font-semibold bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-700/60">
                  STATUS: OPERATIONAL
                </span>
              </div>
            </div>

            {/* 2-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 text-emerald-300 text-xs font-mono tracking-tight backdrop-blur-md">
                  <Workflow className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Deterministic B2B Pipeline Infrastructure</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold tracking-tight text-white leading-[1.08]">
                  Engineering LinkedIn systems that generate{' '}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    verified enterprise pipeline.
                  </span>
                </h1>

                <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
                  Enterprise deals aren&apos;t won through clickbait ads. We construct high-signal marketing machines that systematically educate buying committees across enterprise SaaS, industrial manufacturing, and advisory services.
                </p>

                {/* Technical Metric Indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 font-mono">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800 text-left">
                    <span className="text-[10px] text-slate-400 block uppercase">Qualification SLA</span>
                    <span className="text-base font-bold text-emerald-400">&lt;30 Seconds</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800 text-left">
                    <span className="text-[10px] text-slate-400 block uppercase">SAR Metric</span>
                    <span className="text-base font-bold text-teal-300">82% Accepted</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800 text-left">
                    <span className="text-[10px] text-slate-400 block uppercase">Target Accuracy</span>
                    <span className="text-base font-bold text-white">100% Verified</span>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_25px_rgba(52,211,153,0.4)] transition-all group"
                  >
                    <span>Request Diagnostic Brief</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <Link
                    href="/case-studies"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all"
                  >
                    <span>Review Architectures</span>
                    <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 text-slate-400" />
                  </Link>
                </div>

                {/* Trust Verification Bar */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400 pt-1 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                    Direct Review by Dev Raj Saini
                  </span>
                  <span className="text-slate-700">·</span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                    LinkedIn Marketing Labs Certified
                  </span>
                </div>

              </div>

              {/* Right Column */}
              <div className="lg:col-span-5">
                <div className="bg-slate-900/90 backdrop-blur-2xl text-white rounded-3xl p-6 sm:p-7 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] border border-emerald-900/50 space-y-5 relative">
                  
                  {/* Subtle top emerald glow border */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent pointer-events-none" />

                  {/* Window Controls Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="text-emerald-400 text-[11px] ml-2 font-mono">telemetry-node.sh</span>
                    </div>
                    <span className="text-emerald-300 font-mono text-[10px] uppercase font-bold tracking-wider bg-emerald-950 px-2 py-0.5 rounded border border-emerald-700">
                      SYS ONLINE
                    </span>
                  </div>

                  {/* Feed Mockup */}
                  <div className="bg-slate-950 text-slate-100 rounded-2xl p-4.5 sm:p-5 space-y-3.5 border border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-900 ring-2 ring-emerald-500/40 shrink-0">
                        <Image
                          src="/team/dev-raj-saini.jpg"
                          alt="Dev Raj Saini"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 font-sans truncate">
                          <span>Dev Raj Saini</span>
                          <span className="text-[10px] text-emerald-400 font-mono">• Lead</span>
                        </div>
                        <p className="text-[11px] text-slate-400 truncate">
                          Founder &amp; B2B Strategist · Saini Nexus
                        </p>
                      </div>
                    </div>

                    <div className="text-xs text-slate-300 leading-relaxed font-sans space-y-1.5">
                      <p className="font-semibold text-white">
                        &ldquo;High-ACV deals require multi-stakeholder consensus. Sponsoring executive thought leadership establishes trust 6 months before procurement calls.&rdquo;
                      </p>
                    </div>

                    <div className="rounded-xl overflow-hidden bg-slate-900 p-4 border border-slate-800 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">ABM Blueprint</span>
                        <div className="text-xs font-bold text-white">Economic Buyer Coverage</div>
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-700">
                        82% SAR
                      </span>
                    </div>
                  </div>

                  {/* Telemetry Footer */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
                    <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-slate-500 text-[10px] block">TARGET FIRMOGRAPHICS</span>
                      <span className="text-emerald-400 font-bold">Enterprise Only</span>
                    </div>
                    <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-slate-500 text-[10px] block">CONVERSION GATE</span>
                      <span className="text-teal-300 font-bold">Work Email Strict</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>
      )}

    </div>
  );
}
