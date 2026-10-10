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
  SlidersHorizontal,
  ThumbsUp,
  MessageSquare,
  Share2
} from 'lucide-react';

export function ModernHero() {
  const [activeTab, setActiveTab] = useState<'tla' | 'demand' | 'abm'>('tla');

  return (
    <section className="relative pt-6 sm:pt-10 md:pt-14 pb-16 sm:pb-24 overflow-hidden">
      
      {/* Background Architectural Ambient Texture */}
      <div className="absolute top-0 inset-x-0 h-[640px] bg-gradient-to-b from-slate-50/80 via-blue-50/20 to-transparent pointer-events-none -z-10" />
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none -z-10"
        style={{
          backgroundImage: "radial-gradient(#1E293B 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Practice Masthead */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 sm:pb-8 border-b border-slate-200/80 text-xs font-mono text-slate-500 mb-8 sm:mb-12">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
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
            <span className="text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200/60">
              ACTIVE COHORT
            </span>
          </div>
        </div>

        {/* 2-Column Bespoke Agency Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Direct Human Agency Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50/70 text-blue-700 text-xs font-medium tracking-tight">
              <span className="font-mono font-bold text-blue-800">01 //</span>
              <span>B2B LinkedIn Marketing &amp; Pipeline Architecture</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.1rem] font-extrabold tracking-tight text-slate-950 leading-[1.08]">
              We build LinkedIn engines that turn enterprise attention into{' '}
              <span className="underline decoration-blue-500 decoration-3 underline-offset-4">sales pipeline.</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
              Most B2B advertising fails because it treats enterprise buyers like impulse shoppers. Saini Nexus engineers full-funnel demand generation—combining Thought Leader Ads, ungated proof, and strict committee ABM for tech, industrial, and consulting firms.
            </p>

            {/* Direct Value Drivers (Concrete, Not Buzzwords) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                  01
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Thought Leader &amp; Founder Ads</h4>
                  <p className="text-[11px] text-slate-600 leading-snug mt-0.5">Sponsoring executive authority to 10x trust over corporate brand pages.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3">
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

          {/* Right Column: Interactive Tactile LinkedIn Campaign Workbench (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-800 space-y-5 relative">
              
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

              {/* Realistic LinkedIn Feed Mockup Card Inside The Tech Shell */}
              <div className="bg-white text-slate-900 rounded-2xl p-4.5 sm:p-5 space-y-3.5 shadow-md">
                
                {/* Author Info */}
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

                {/* Ad Hook Body */}
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

                {/* Ad Creative Visual Unit */}
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

                {/* Engagement Bar */}
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
  );
}
