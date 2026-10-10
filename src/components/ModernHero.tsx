'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  TrendingUp, 
  Target, 
  ShieldCheck, 
  Building2,
  CheckCircle2,
  BarChart3,
  Layers,
  Zap,
  Activity,
  Award
} from 'lucide-react';

export function ModernHero() {
  const [activeTab, setActiveTab] = useState<'abm' | 'thought' | 'pipeline'>('abm');

  return (
    <section className="relative pt-24 sm:pt-32 md:pt-36 pb-20 sm:pb-28 bg-white text-slate-950 border-b border-slate-200 overflow-hidden">
      
      {/* 1. Subtle Architectural Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(226, 232, 240, 0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(226, 232, 240, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* 2. Soft Ambient Lighting Radiance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-gradient-to-b from-blue-50/80 via-sky-50/30 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Floating Live Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 shadow-2xs mb-6 sm:mb-8">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="text-xs font-semibold text-slate-700 tracking-wide">
            Enterprise LinkedIn Demand Generation Practice
          </span>
          <span className="text-slate-300">·</span>
          <span className="text-xs font-medium text-blue-700 hidden sm:inline">Jaipur · Global B2B</span>
        </div>

        {/* 2-Column Split: Editorial Value Prop (Left) + Interactive Live Telemetry Engine (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Massive Authoritative Typography & High-Converting CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-[4.75rem] font-extrabold tracking-tight text-slate-950 leading-[1.05]">
              We turn enterprise attention on LinkedIn into{' '}
              <span className="relative inline-block text-slate-950 underline decoration-blue-600 decoration-[5px] underline-offset-8">
                predictable sales revenue.
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              A dedicated B2B demand generation practice for technology, consulting, and manufacturing firms. We combine executive Thought Leader Ads, buying committee account targeting, and high-intent inbound acquisition.
            </p>

            {/* Action Buttons with Modern Elevation */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-slate-950 hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
              >
                <span>Book Strategy Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200/80 transition-all duration-200 border border-slate-200/60"
              >
                <span>View Campaign Frameworks</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </Link>
            </div>

            {/* Quick Proof Badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Zero Vanity Metrics</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Verified Buying Committees</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Direct Lead-to-CRM Sync</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live LinkedIn Campaign Performance & Telemetry Sandbox */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl p-5 sm:p-6 space-y-5">
              
              {/* Header of the Card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    SN
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      Saini Nexus Campaign Suite
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    </div>
                    <div className="text-[11px] text-slate-500">Live Client Performance Radar</div>
                  </div>
                </div>

                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200/80">
                  Verified Engine
                </span>
              </div>

              {/* Interactive Tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100/80 rounded-xl">
                <button
                  type="button"
                  onClick={() => setActiveTab('abm')}
                  className={`py-2 px-2 text-xs font-semibold rounded-lg transition-all text-center ${
                    activeTab === 'abm'
                      ? 'bg-white text-slate-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  ABM Layer
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('thought')}
                  className={`py-2 px-2 text-xs font-semibold rounded-lg transition-all text-center ${
                    activeTab === 'thought'
                      ? 'bg-white text-slate-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Thought Leader
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('pipeline')}
                  className={`py-2 px-2 text-xs font-semibold rounded-lg transition-all text-center ${
                    activeTab === 'pipeline'
                      ? 'bg-white text-slate-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Revenue Sync
                </button>
              </div>

              {/* Dynamic Content based on Active Tab */}
              {activeTab === 'abm' && (
                <div className="space-y-3.5 pt-1">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-slate-700">Account Penetration (ICP)</span>
                      <span className="font-bold text-blue-600 font-mono">92.4% Match</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full w-[92%]" />
                    </div>
                    <p className="text-[11px] text-slate-500">
                      Tier-1 Accounts exclusively filtered by ARR, headcount, and hiring velocity.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Decision Makers</span>
                      <span className="text-base font-bold text-slate-900 font-mono mt-0.5 block">14,200+</span>
                      <span className="text-[10px] text-emerald-600 font-medium">VP, CXO &amp; Directors</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Wasted Ad Spend</span>
                      <span className="text-base font-bold text-emerald-600 font-mono mt-0.5 block">0.00%</span>
                      <span className="text-[10px] text-slate-500 font-medium">Job seeker/Student blocked</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'thought' && (
                <div className="space-y-3.5 pt-1">
                  <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-200/60 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
                        DR
                      </div>
                      <div className="text-xs font-semibold text-slate-900">
                        Sponsored from Founder &amp; CXO Handles
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      &quot;Ungated point-of-view breakdowns deliver 2.8x higher qualified pipeline compared to generic company page ads.&quot;
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Engagement CTR</span>
                      <span className="text-base font-bold text-blue-600 font-mono mt-0.5 block">3.18%</span>
                      <span className="text-[10px] text-slate-500 font-medium">vs 0.45% Industry avg</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Cost Per Qualified Lead</span>
                      <span className="text-base font-bold text-slate-900 font-mono mt-0.5 block">-44%</span>
                      <span className="text-[10px] text-emerald-600 font-medium">Verified corporate emails</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'pipeline' && (
                <div className="space-y-3.5 pt-1">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-slate-800">Speed-to-Lead SLA</span>
                      <span className="font-bold text-emerald-600 font-mono">&lt; 30 Seconds</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[96%]" />
                    </div>
                    <p className="text-[11px] text-slate-500">
                      Instant webhook sync directly into HubSpot, Salesforce, and client Slack channel.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Qualified SQLs / Mo</span>
                      <span className="text-base font-bold text-slate-900 font-mono mt-0.5 block">45 - 120+</span>
                      <span className="text-[10px] text-blue-600 font-medium">Per enterprise motion</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">CRM Match Rate</span>
                      <span className="text-base font-bold text-slate-900 font-mono mt-0.5 block">100%</span>
                      <span className="text-[10px] text-slate-500 font-medium">Zero manual entry</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Card Footer */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  Official Certified Partner
                </span>
                <Link 
                  href="/audit" 
                  className="font-semibold text-blue-600 hover:text-blue-700 hover:underline inline-flex items-center gap-1"
                >
                  Request Pipeline Audit
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* Agency Footprint & Institutional Credentials Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider block">Practice Lead</span>
            <span className="font-bold text-slate-900 mt-1 block">Dev Raj Saini</span>
          </div>
          <div>
            <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider block">HQ &amp; Coverage</span>
            <span className="font-bold text-slate-900 mt-1 block">Jaipur, India · Global B2B</span>
          </div>
          <div>
            <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider block">Accreditation</span>
            <span className="font-bold text-slate-900 mt-1 block">LinkedIn Marketing Labs</span>
          </div>
          <div>
            <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider block">Client Focus</span>
            <span className="font-bold text-blue-600 mt-1 block">Mid-Market &amp; Enterprise</span>
          </div>
        </div>

      </div>
    </section>
  );
}
