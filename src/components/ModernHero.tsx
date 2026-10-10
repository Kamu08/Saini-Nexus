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
  Workflow, 
  ThumbsUp, 
  MessageSquare, 
  Share2,
  SlidersHorizontal,
  Layers,
  Sparkles
} from 'lucide-react';

export function ModernHero() {
  const [activeTab, setActiveTab] = useState<'tla' | 'demand' | 'abm'>('tla');

  return (
    <section className="relative pt-8 sm:pt-12 md:pt-16 pb-20 sm:pb-28 overflow-hidden bg-[#0A0F1D] text-white border-b border-emerald-950/60">
      
      {/* ========================================================= */}
      {/* ATMOSPHERIC DARK BLUR & AURA LIGHT SYSTEM                 */}
      {/* Multi-layered dark emerald, cyan, and deep blue blur halos*/}
      {/* ========================================================= */}
      <div className="absolute top-[-8%] left-[-6%] w-[580px] h-[580px] sm:w-[720px] sm:h-[720px] bg-emerald-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[22%] right-[-10%] w-[520px] h-[520px] sm:w-[680px] sm:h-[680px] bg-teal-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-12%] left-[25%] w-[480px] h-[480px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none" />
      
      {/* High-Precision Blueprint Dot Matrix Texture */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#34D399 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* EDITORIAL PRACTICE MASTHEAD BANNER                         */}
        {/* ========================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800 text-xs font-mono text-slate-400 mb-8 sm:mb-12">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_rgba(52,211,153,1)]" />
            <span className="font-semibold text-emerald-300 uppercase tracking-wider">ENGINEERING SPEC: SN-2026.4</span>
            <span className="text-slate-700">/</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              Jaipur Growth Lab, India
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider">
            <span className="hidden sm:inline text-slate-500">SYSTEM ARCHITECT:</span>
            <span className="font-bold text-white">DEV RAJ SAINI</span>
            <span className="text-slate-700">·</span>
            <span className="text-emerald-300 font-semibold bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-700/60">
              STATUS: OPERATIONAL
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2-COLUMN BESPOKE ARCHITECTURE GRID                         */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Direct Human Agency Narrative (7 cols) */}
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

            {/* Technical Metric Indicators with Glass Blur */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 font-mono">
              <div className="p-3.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800 text-left hover:border-emerald-500/40 transition-colors">
                <span className="text-[10px] text-slate-400 block uppercase">Qualification SLA</span>
                <span className="text-base font-bold text-emerald-400">&lt;30 Seconds</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800 text-left hover:border-teal-500/40 transition-colors">
                <span className="text-[10px] text-slate-400 block uppercase">SAR Metric</span>
                <span className="text-base font-bold text-teal-300">82% Accepted</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800 text-left hover:border-cyan-500/40 transition-colors">
                <span className="text-[10px] text-slate-400 block uppercase">Target Accuracy</span>
                <span className="text-base font-bold text-white">100% Verified</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_25px_rgba(52,211,153,0.45)] hover:shadow-[0_0_35px_rgba(52,211,153,0.6)] transition-all group"
              >
                <span>Request Diagnostic Brief</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all"
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
                4x Verified LinkedIn Marketing Labs Certifications
              </span>
              <span className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                &lt;24h Turnaround
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Tactile Campaign Workbench with Dark Blur Halo (5 cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* Glowing blur halo hugging the workbench */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/30 via-teal-800/40 to-cyan-600/30 rounded-3xl blur-[45px] transform scale-105 pointer-events-none" />

            <div className="bg-slate-900/90 backdrop-blur-2xl text-white rounded-3xl p-6 sm:p-7 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] border border-emerald-900/50 space-y-5 relative z-10">
              
              {/* Subtle top emerald glow border */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent pointer-events-none" />

              {/* Window Controls Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-emerald-400 text-[11px] ml-2 font-mono">telemetry-node.sh</span>
                </div>
                <span className="text-emerald-300 font-mono text-[10px] uppercase font-bold tracking-wider bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-700">
                  SYS ONLINE
                </span>
              </div>

              {/* Workbench Tab Selector */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setActiveTab('tla')}
                  className={`py-1.5 px-2 rounded-lg font-bold transition-all text-center ${
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
                  className={`py-1.5 px-2 rounded-lg font-bold transition-all text-center ${
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
                  className={`py-1.5 px-2 rounded-lg font-bold transition-all text-center ${
                    activeTab === 'abm' 
                      ? 'bg-emerald-500 text-slate-950 shadow-xs' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Lead Pipeline
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
                      <span className="text-[10px] text-emerald-400 font-mono">• 1st</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-normal truncate">
                      {activeTab === 'tla' ? 'Founder & B2B Strategist · Saini Nexus' : 'B2B Marketing & Pipeline Architecture'}
                    </p>
                    <div className="flex items-center gap-1 text-[10px] text-slate-500">
                      <span>Promoted by Saini Nexus</span>
                      <span>•</span>
                      <span>🌐</span>
                    </div>
                  </div>
                </div>

                {/* Ad Hook Body */}
                <div className="text-xs text-slate-300 leading-relaxed font-sans space-y-1.5">
                  {activeTab === 'tla' && (
                    <>
                      <p className="font-semibold text-white">
                        &ldquo;95% of your B2B buyers aren&apos;t in-market right now. Sponsoring executive thought leadership establishes trust 6 months before procurement calls.&rdquo;
                      </p>
                      <p className="text-slate-400">
                        Here is the exact 3-tier Thought Leader Ad architecture we deployed to build qualified pipeline with Economic Buyers...
                      </p>
                    </>
                  )}
                  {activeTab === 'demand' && (
                    <>
                      <p className="font-semibold text-white">
                        &ldquo;The Enterprise Cloud Security Decision Matrix: How 500+ CISOs actually evaluate vendors in 2026.&rdquo;
                      </p>
                      <p className="text-slate-400">
                        Swipe through this 8-slide architecture teardown. Zero gates. Zero forced phone numbers.
                      </p>
                    </>
                  )}
                  {activeTab === 'abm' && (
                    <>
                      <p className="font-semibold text-white">
                        &ldquo;Precision ABM for Industrial Exporters: Direct RFQ Protocol from European &amp; US supply chain heads.&rdquo;
                      </p>
                      <p className="text-slate-400">
                        Matched account list filtering with verified tolerance and capacity verification.
                      </p>
                    </>
                  )}
                </div>

                {/* Ad Creative Visual Unit */}
                <div className="rounded-xl overflow-hidden bg-slate-900 p-4 border border-slate-800 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold tracking-wider">
                      {activeTab === 'tla' ? 'Executive Perspective' : activeTab === 'demand' ? 'Document Slide 01/08' : 'Matched Account List'}
                    </span>
                    <div className="text-xs font-bold text-white leading-tight">
                      {activeTab === 'tla' ? 'Why Single-Lead Gen Fails Enterprise B2B' : activeTab === 'demand' ? 'Enterprise Procurement Blueprint' : '450 Accounts · Strict Title Exclusions'}
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-300 bg-emerald-950/90 px-2.5 py-1 rounded border border-emerald-700">
                    {activeTab === 'tla' ? 'Read Analysis' : activeTab === 'demand' ? 'Download PDF' : 'Request RFQ'}
                  </span>
                </div>

                {/* Engagement Bar */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[11px] text-slate-400 font-medium">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <ThumbsUp className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                    <span>248 C-Level Reactions</span>
                  </span>
                  <span>42 Reposts</span>
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
  );
}
