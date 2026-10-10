'use client';

import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

export function ModernHero() {
  return (
    <section className="relative pt-8 sm:pt-14 md:pt-20 pb-12 sm:pb-16 text-center overflow-hidden">
      
      {/* Themed Background Vector Accent: Retro 4-Point Starburst */}
      <div className="absolute top-12 right-8 sm:right-24 pointer-events-none hidden md:block">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          <path d="M26 2C26 15 15 26 2 26C15 26 26 37 26 50C26 37 37 26 50 26C37 26 26 15 26 2Z" fill="#BFDBFE" stroke="black" strokeWidth="2" />
          <circle cx="44" cy="8" r="3" fill="black" />
        </svg>
      </div>

      <div className="absolute top-44 left-8 sm:left-20 pointer-events-none hidden md:block opacity-75">
        <svg width="36" height="36" viewBox="0 0 52 52" fill="none">
          <path d="M26 2C26 15 15 26 2 26C15 26 26 37 26 50C26 37 37 26 50 26C37 26 26 15 26 2Z" fill="#BFDBFE" stroke="black" strokeWidth="2" />
          <circle cx="44" cy="8" r="3" fill="black" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CauseHouse Pill Badge & Entity Signal */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border-2 border-black bg-[#93C5FD] text-black text-[10px] sm:text-xs font-mono font-extrabold uppercase tracking-wider mb-6 sm:mb-8 shadow-[2.5px_2.5px_0px_#000000] text-center max-w-full">
          <span>Jaipur, India · B2B Marketing &amp; LinkedIn Growth · Global Markets</span>
        </div>

        {/* Big Chunky Retro Fraunces Headline with Fluid Scaling */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-black leading-[1.1] sm:leading-[1.05] max-w-5xl mx-auto">
          B2B Growth, Built Around How{' '}
          <span className="bubble-highlight-blue">
            Buyers
          </span>{' '}
          Actually Buy.
        </h1>

        {/* Clean Editorial Subheadline */}
        <p className="font-sans text-base sm:text-lg md:text-2xl text-zinc-800 max-w-3xl mx-auto leading-relaxed mt-6 sm:mt-8 font-normal">
          Saini Nexus helps B2B companies reach the right decision-makers, build demand and generate qualified sales opportunities through LinkedIn marketing, advertising and strategic growth programs.
        </p>

        {/* Dual Action Buttons (CauseHouse Neo-Pills) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 mt-8 sm:mt-11 max-w-md sm:max-w-none mx-auto w-full px-2 sm:px-0">
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-7 sm:px-9 py-4 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider text-black bg-[#60A5FA] border-2 border-black shadow-[4px_4px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all w-full sm:w-auto"
          >
            <span>Book a Strategy Conversation</span>
            <span className="ml-2.5 text-base font-bold shrink-0">→</span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center px-7 sm:px-8 py-4 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider text-black bg-white border-2 border-black shadow-[4px_4px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all w-full sm:w-auto"
          >
            <span>Explore Services</span>
            <span className="ml-2 text-base shrink-0">↗</span>
          </Link>
        </div>

        {/* Zero-Friction Trust Signals */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-6 text-xs font-mono text-zinc-800 mt-8 font-semibold">
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#2563EB] shrink-0 stroke-[2.5]" />
            <span>Direct 1-on-1 Founder Consultation</span>
          </div>
          <span className="hidden sm:inline text-zinc-400">•</span>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#2563EB] shrink-0 stroke-[2.5]" />
            <span>Actionable ICP &amp; Ad Teardown</span>
          </div>
          <span className="hidden sm:inline text-zinc-400">•</span>
          <div className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#2563EB] shrink-0 stroke-[2.5]" />
            <span>&lt;24h Response Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
}
