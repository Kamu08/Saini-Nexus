'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, TrendingUp, Sparkles, Target, Zap } from 'lucide-react';

export function ModernHero() {
  return (
    <section className="relative bg-white text-slate-950 pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 border-b border-slate-200 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* CREATIVE MARKETING STUDIO BACKDROP: Kinetic Lighting + Subtle Dot Array   */}
      {/* ========================================================================= */}
      
      {/* 1. Subtle Precision Dot Array */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.45]"
        style={{
          backgroundImage: `radial-gradient(circle, #94a3b8 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 30%, black 40%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 30%, black 40%, transparent 95%)'
        }}
      />

      {/* 2. Primary Marketing Radiance Orb (Electric Royal Blue - top center-right) */}
      <div 
        className="absolute -top-32 right-1/4 w-[650px] h-[500px] rounded-full pointer-events-none blur-3xl opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(96,165,250,0.10) 50%, transparent 80%)'
        }}
      />

      {/* 3. Secondary Warm Indigo Glow (Top Left) */}
      <div 
        className="absolute -top-20 -left-20 w-[550px] h-[450px] rounded-full pointer-events-none blur-3xl opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.14) 0%, rgba(147,197,253,0.06) 60%, transparent 80%)'
        }}
      />

      {/* 4. Fine Architectural Studio Axis Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none border-x border-slate-200/50 hidden md:block" />

      {/* ========================================================================= */}
      {/* HERO CONTENT CONTAINER                                                   */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Creative Agency Eyebrow */}
        <div className="mb-6 sm:mb-8 flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/70 text-blue-700 text-xs font-bold tracking-wide shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>ENTERPRISE DEMAND STUDIO</span>
          </div>
          <span className="text-slate-300 hidden sm:inline">|</span>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest hidden sm:inline">
            Executive B2B LinkedIn Systems
          </span>
        </div>

        {/* Massive Headline with Gradient Text Spark & Underline */}
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-black tracking-tight text-slate-950 leading-[1.03]">
            We turn enterprise attention on LinkedIn into{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                predictable sales revenue.
              </span>
              <svg 
                className="absolute -bottom-2 left-0 w-full h-3 text-blue-600/30 overflow-visible" 
                viewBox="0 0 100 12" 
                preserveAspectRatio="none"
              >
                <path d="M0,7 Q50,0 100,7" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
        </div>

        {/* Narrative & Action Block */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start border-t border-slate-200/90 pt-10">
          
          {/* Paragraph + Creative Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xl sm:text-2xl text-slate-600 font-normal leading-relaxed">
              A dedicated B2B demand generation practice for technology, consulting, and manufacturing firms. We combine executive Thought Leader Ads, buying committee account targeting, and high-intent inbound acquisition.
            </p>

            {/* Creative Value Pills (Creative Agency Style) */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                <Target className="w-3.5 h-3.5 text-blue-600" />
                ABM Account Targeting
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                C-Suite Thought Leader Ads
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                <Zap className="w-3.5 h-3.5 text-blue-600" />
                Real-Time CRM Ingestion
              </span>
            </div>
          </div>

          {/* Action Buttons with High-Impact Creative Styling */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3.5">
            <Link
              href="/book"
              className="relative group inline-flex items-center justify-between px-7 py-4.5 rounded-xl text-sm font-bold text-white bg-slate-950 hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2">
                <span>Book Strategy Consultation</span>
              </div>
              <div className="w-7 h-7 rounded-lg bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            <Link
              href="/case-studies"
              className="group inline-flex items-center justify-between px-7 py-4.5 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-50 transition-all duration-200 border border-slate-300/90 shadow-2xs hover:border-slate-400 hover:-translate-y-0.5"
            >
              <span>View Campaign Frameworks</span>
              <div className="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-slate-200/80 flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-slate-950 transition-colors" />
              </div>
            </Link>
          </div>

        </div>

        {/* Agency Footprint / Metadata Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-1">
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block">
              Practice Lead
            </span>
            <span className="text-base font-bold text-slate-950 block">
              Dev Raj Saini
            </span>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block">
              HQ &amp; Coverage
            </span>
            <span className="text-base font-bold text-slate-950 block">
              Jaipur, India · Global B2B
            </span>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block">
              Accreditation
            </span>
            <span className="text-base font-bold text-slate-950 block">
              LinkedIn Marketing Labs
            </span>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block">
              Client Focus
            </span>
            <span className="text-base font-bold text-blue-600 block">
              Mid-Market &amp; Enterprise
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
