'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  MapPin, 
  ShieldCheck, 
  Building2,
  TrendingUp,
  Target,
  Sparkles
} from 'lucide-react';

export function ModernHero() {
  return (
    <section className="relative pt-16 sm:pt-24 pb-20 sm:pb-28 bg-white text-slate-950 border-b border-slate-200">
      
      {/* Subtle top ambient warmth (barely perceptible, premium paper texture feel) */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-50/60 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Top Minimalist Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-semibold tracking-widest uppercase text-slate-500 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-slate-900 font-bold">Saini Nexus</span>
            <span className="text-slate-300">/</span>
            <span>B2B LinkedIn Marketing &amp; Demand Generation</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>ACCEPTING NEW CLIENT COHORTS</span>
          </div>
        </div>

        {/* Massive Confident Agency Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-extrabold tracking-tight text-slate-950 leading-[1.04]">
            We turn enterprise attention on LinkedIn into{' '}
            <span className="underline decoration-blue-600 decoration-4 underline-offset-8">
              predictable sales revenue.
            </span>
          </h1>
        </div>

        {/* Clean Sub-editorial Paragraph & Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
          <div className="md:col-span-8 space-y-4">
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-normal leading-relaxed">
              A dedicated B2B demand generation practice for technology, consulting, and manufacturing firms. We combine executive Thought Leader Ads, buying committee account targeting, and high-intent inbound acquisition.
            </p>

            {/* Direct Value Points */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-700 pt-2">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-blue-600 stroke-[3]" />
                Zero Vanity Metrics
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-blue-600 stroke-[3]" />
                Verified Decision Makers Only
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-blue-600 stroke-[3]" />
                Direct Lead-to-CRM Sync
              </span>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3">
            <Link
              href="/book"
              className="w-full inline-flex items-center justify-between px-7 py-4 rounded-full text-sm font-semibold text-white bg-slate-950 hover:bg-blue-600 transition-colors group shadow-sm hover:shadow"
            >
              <span>Book Strategy Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/case-studies"
              className="w-full inline-flex items-center justify-between px-7 py-4 rounded-full text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <span>View Campaign Frameworks</span>
              <ArrowUpRight className="w-4 h-4 text-slate-500" />
            </Link>
          </div>
        </div>

        {/* 3 Refined Minimal Performance Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Lead Routing Speed
            </span>
            <div className="text-2xl font-extrabold text-slate-950 tracking-tight">
              &lt;30 Seconds SLA
            </div>
            <p className="text-xs text-slate-600 font-normal">
              Instant sales team qualification via webhook &amp; CRM sync.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Opportunity Quality
            </span>
            <div className="text-2xl font-extrabold text-blue-600 tracking-tight">
              82% Sales-Accepted
            </div>
            <p className="text-xs text-slate-600 font-normal">
              Filtered for actual budget, decision authority, and intent.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Audience Precision
            </span>
            <div className="text-2xl font-extrabold text-slate-950 tracking-tight">
              100% Verified ICP
            </div>
            <p className="text-xs text-slate-600 font-normal">
              Strict exclusion of students, freelancers, and junior roles.
            </p>
          </div>
        </div>

        {/* Understated Agency Metadata Strip */}
        <div className="pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
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
  );
}
