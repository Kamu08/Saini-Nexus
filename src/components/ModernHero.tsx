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
  ThumbsUp, 
  Target,
  BarChart3,
  TrendingUp,
  Layers,
  Award
} from 'lucide-react';

export function ModernHero() {
  const [activeTab, setActiveTab] = useState<'tla' | 'demand' | 'abm'>('tla');

  return (
    <section className="relative pt-8 sm:pt-12 md:pt-16 pb-20 sm:pb-28 overflow-hidden bg-[#070D18] text-white border-b border-emerald-950/60">
      
      {/* ========================================================= */}
      {/* ATMOSPHERIC DARK BLUR & GLOW LIGHTING SYSTEM              */}
      {/* Luxurious dark emerald, teal, and deep sapphire blur orbs */}
      {/* ========================================================= */}
      <div className="absolute top-[-8%] left-[-6%] w-[580px] h-[580px] sm:w-[720px] sm:h-[720px] bg-emerald-600/18 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[22%] right-[-10%] w-[520px] h-[520px] sm:w-[680px] sm:h-[680px] bg-teal-600/14 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-12%] left-[25%] w-[480px] h-[480px] bg-blue-600/12 rounded-full blur-[130px] pointer-events-none" />
      
      {/* Subtle modern texture */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#34D399 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* AGENCY EDITORIAL MASTHEAD RIBBON (Clean, Marketing Focus) */}
        {/* ========================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800 text-xs text-slate-400 mb-8 sm:mb-12 font-medium">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_rgba(52,211,153,1)]" />
            <span className="font-bold text-emerald-300 uppercase tracking-wider">SAINI NEXUS GROWTH STUDIO</span>
            <span className="text-slate-700">/</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              Jaipur, India · Global B2B Practice
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider">
            <span className="hidden sm:inline text-slate-500 font-semibold">PRACTICE LEAD:</span>
            <span className="font-bold text-white">DEV RAJ SAINI</span>
            <span className="text-slate-700">·</span>
            <span className="text-emerald-300 font-semibold bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-700/60">
              LINKEDIN MARKETING CERTIFIED
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2-COLUMN MODERN AGENCY HERO GRID                          */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Direct Marketing Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 text-emerald-300 text-xs font-semibold tracking-tight backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>B2B Growth &amp; LinkedIn Demand Generation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-extrabold tracking-tight text-white leading-[1.08]">
              We build LinkedIn campaigns that turn B2B attention into{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                qualified sales pipeline.
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
              Most B2B advertising fails because it treats enterprise buyers like impulse shoppers. Saini Nexus crafts full-funnel demand generation—combining Thought Leader Ads, high-value content proof, and precision account targeting for SaaS, industrial, and consulting firms.
            </p>

            {/* Clear Marketing Performance Pillars with Glass Blur */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800 text-left hover:border-emerald-500/40 transition-colors shadow-sm">
                <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">Response Speed</span>
                <span className="text-base font-bold text-emerald-400 mt-0.5 block">&lt;30s Lead Routing</span>
                <span className="text-[11px] text-slate-500 mt-0.5 block">Instant CRM sales sync</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800 text-left hover:border-teal-500/40 transition-colors shadow-sm">
                <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">Opportunity Quality</span>
                <span className="text-base font-bold text-teal-300 mt-0.5 block">82% Sales-Accepted</span>
                <span className="text-[11px] text-slate-500 mt-0.5 block">Strict buyer qualification</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800 text-left hover:border-cyan-500/40 transition-colors shadow-sm">
                <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">Decision Makers</span>
                <span className="text-base font-bold text-white mt-0.5 block">100% Verified ICP</span>
                <span className="text-[11px] text-slate-500 mt-0.5 block">Zero wasted ad spend</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_25px_rgba(52,211,153,0.45)] hover:shadow-[0_0_35px_rgba(52,211,153,0.6)] transition-all group"
              >
                <span>Book Strategy Consultation</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all"
              >
                <span>Explore Campaign Playbooks</span>
                <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 text-slate-400" />
              </Link>
            </div>

            {/* Trust Verification Bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400 pt-1 font-medium">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                Direct Strategy by Dev Raj Saini
              </span>
              <span className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                4x Verified LinkedIn Marketing Labs Certifications
              </span>
              <span className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                &lt;24h Growth Audit Turnaround
              </span>
            </div>

          </div>

          {/* Right Column: Interactive LinkedIn Campaign Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* Glowing blur halo hugging the campaign card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/30 via-teal-800/40 to-cyan-600/30 rounded-3xl blur-[45px] transform scale-105 pointer-events-none" />

            <div className="bg-slate-900/90 backdrop-blur-2xl text-white rounded-3xl p-6 sm:p-7 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] border border-emerald-900/50 space-y-5 relative z-10">
              
              {/* Subtle top emerald glow border */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent pointer-events-none" />

              {/* Clean Marketing Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white leading-tight">Live Campaign Preview</h3>
                    <p className="text-[10px] text-slate-400">LinkedIn Sponsored Feed</p>
                  </div>
                </div>
                <span className="text-emerald-300 text-[10px] uppercase font-bold tracking-wider bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-700">
                  REAL-TIME AD ENGINE
                </span>
              </div>

              {/* Campaign Format Tab Selector */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('tla')}
                  className={`py-2 px-2 rounded-lg font-bold transition-all text-center ${
                    activeTab === 'tla' 
                      ? 'bg-emerald-500 text-slate-950 shadow-xs' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Thought Leader
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('demand')}
                  className={`py-2 px-2 rounded-lg font-bold transition-all text-center ${
                    activeTab === 'demand' 
                      ? 'bg-emerald-500 text-slate-950 shadow-xs' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Document ABM
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('abm')}
                  className={`py-2 px-2 rounded-lg font-bold transition-all text-center ${
                    activeTab === 'abm' 
                      ? 'bg-emerald-500 text-slate-950 shadow-xs' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Lead Gen Form
                </button>
              </div>

              {/* Realistic LinkedIn Feed Mockup Card */}
              <div className="bg-slate-950 text-slate-100 rounded-2xl p-4.5 sm:p-5 space-y-3.5 border border-slate-800 shadow-md">
                
                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-900 ring-2 ring-emerald-500/40 shrink-0">
                    <Image
                      src={activeTab === 'tla' ? '/team/dev-raj-saini.jpg' : '/saini-nexus-logo.png'}
                      alt="Campaign Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 font-sans truncate">
                      <span>{activeTab === 'tla' ? 'Dev Raj Saini' : 'Saini Nexus'}</span>
                      <span className="text-[10px] text-emerald-400 font-medium">• 1st</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-normal truncate">
                      {activeTab === 'tla' ? 'Founder & Lead B2B Growth Strategist · Saini Nexus' : 'B2B Demand & Pipeline Growth Agency'}
                    </p>
                    <div className="flex items-center gap-1 text-[10px] text-slate-500">
                      <span>Promoted by Saini Nexus</span>
                      <span>•</span>
                      <span>🌐</span>
                    </div>
                  </div>
                </div>

                {/* Ad Copy Body */}
                <div className="text-xs text-slate-300 leading-relaxed font-sans space-y-1.5">
                  {activeTab === 'tla' && (
                    <>
                      <p className="font-semibold text-white">
                        &ldquo;95% of your enterprise buyers aren&apos;t in-market today. Sponsoring executive thought leadership builds trust with decision makers months before sales outreach begins.&rdquo;
                      </p>
                      <p className="text-slate-400">
                        Here is the exact Thought Leader campaign structure we deploy to build qualified demand with Economic Buyers...
                      </p>
                    </>
                  )}
                  {activeTab === 'demand' && (
                    <>
                      <p className="font-semibold text-white">
                        &ldquo;The Enterprise Decision Blueprint: How C-suite leadership actually evaluates and approves B2B vendors in 2026.&rdquo;
                      </p>
                      <p className="text-slate-400">
                        Swipe through this 8-slide strategic breakdown. Zero friction. Pure commercial value.
                      </p>
                    </>
                  )}
                  {activeTab === 'abm' && (
                    <>
                      <p className="font-semibold text-white">
                        &ldquo;High-Intent Pipeline for Enterprise B2B: Target only verified decision makers with native 1-click qualification.&rdquo;
                      </p>
                      <p className="text-slate-400">
                        Pre-filled corporate work emails and budget confirmation directly inside LinkedIn.
                      </p>
                    </>
                  )}
                </div>

                {/* Ad Visual Unit */}
                <div className="rounded-xl overflow-hidden bg-slate-900 p-4 border border-slate-800 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider block">
                      {activeTab === 'tla' ? 'Executive Thought Leadership' : activeTab === 'demand' ? 'Document Carousel 01/08' : 'Qualified Demand Gen'}
                    </span>
                    <div className="text-xs font-bold text-white leading-tight">
                      {activeTab === 'tla' ? 'Building B2B Authority on LinkedIn' : activeTab === 'demand' ? 'Enterprise Procurement Blueprint' : 'Verified Decision Maker Targeting'}
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-300 bg-emerald-950/90 px-3 py-1.5 rounded-lg border border-emerald-700">
                    {activeTab === 'tla' ? 'Read Insights' : activeTab === 'demand' ? 'Download PDF' : 'Get In Touch'}
                  </span>
                </div>

                {/* Engagement Social Proof */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[11px] text-slate-400 font-medium">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <ThumbsUp className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                    <span>248 C-Level Reactions</span>
                  </span>
                  <span>42 Reposts · 18 Inquiries</span>
                </div>

              </div>

              {/* Marketing Results Strip */}
              <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-slate-500 text-[10px] uppercase font-semibold block">Target Audience</span>
                  <span className="text-emerald-400 font-bold">C-Suite &amp; VP Level</span>
                </div>
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-slate-500 text-[10px] uppercase font-semibold block">Lead Quality</span>
                  <span className="text-teal-300 font-bold">Work Email Verified</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
