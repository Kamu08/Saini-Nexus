'use client';

import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

export function ModernHero() {
  return (
    <section className="relative pt-10 sm:pt-16 md:pt-24 pb-16 sm:pb-20 text-center overflow-hidden">
      
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[400px] bg-gradient-to-b from-blue-100/70 via-indigo-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Modern Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-blue-200/80 bg-blue-50/80 text-blue-700 text-xs font-sans font-semibold tracking-wide mb-6 sm:mb-8 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>Jaipur, India · B2B Marketing &amp; LinkedIn Growth · Global Markets</span>
        </div>

        {/* Crisp Modern Sans Headline */}
        <h1 className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-extrabold tracking-tight text-slate-900 leading-[1.1] sm:leading-[1.05] max-w-5xl mx-auto">
          B2B Growth, Built Around How{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
            Buyers
          </span>{' '}
          Actually Buy.
        </h1>

        {/* Clean Modern Subheadline */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mt-6 sm:mt-8 font-normal">
          Saini Nexus helps B2B companies reach the right decision-makers, build demand and generate qualified sales opportunities through LinkedIn marketing, advertising and strategic growth programs.
        </p>

        {/* Dual Modern Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 mt-8 sm:mt-11 max-w-md sm:max-w-none mx-auto w-full px-2 sm:px-0">
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-7 sm:px-9 py-3.5 rounded-full text-sm font-sans font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all w-full sm:w-auto"
          >
            <span>Book a Strategy Conversation</span>
            <span className="ml-2.5 font-bold shrink-0">→</span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 rounded-full text-sm font-sans font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-xs hover:shadow hover:-translate-y-0.5 transition-all w-full sm:w-auto"
          >
            <span>Explore Services</span>
            <span className="ml-2 shrink-0">↗</span>
          </Link>
        </div>

        {/* Refined Trust Signals */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-6 text-xs font-sans text-slate-600 mt-9 font-medium">
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-blue-600 shrink-0 stroke-[2.5]" />
            <span>Direct 1-on-1 Strategy Consultation</span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-blue-600 shrink-0 stroke-[2.5]" />
            <span>Actionable ICP &amp; Campaign Teardown</span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-blue-600 shrink-0 stroke-[2.5]" />
            <span>&lt;24h Response Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
}
