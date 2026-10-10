'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';

export function ModernHero() {
  return (
    <section className="relative pt-28 sm:pt-36 md:pt-40 pb-20 sm:pb-28 text-white border-b border-stone-800/80 overflow-hidden bg-[#111110]">
      
      {/* ========================================================= */}
      {/* 1. ARCHITECTURAL FLUTED BANDS BACKGROUND (16:9 NATIVE)   */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/hero-fluted-bands-widescreen.jpg"
          alt="Architectural Fluted Slats Texture"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle dark vignette to ensure crisp typography readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111110]/50 via-transparent to-[#111110]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111110]/65 via-transparent to-[#111110]/20" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Architectural Protocol Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/80 backdrop-blur-md border border-stone-400/30 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-amber-200 shadow-[0_0_8px_#fde68a] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-stone-200 font-sans">
            Enterprise LinkedIn Demand Generation
          </span>
        </div>

        {/* Massive Confident Agency Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-extrabold tracking-tight text-white leading-[1.04] drop-shadow-sm">
            We turn enterprise attention on LinkedIn into{' '}
            <span className="bg-gradient-to-r from-amber-100 via-stone-200 to-white bg-clip-text text-transparent underline decoration-amber-200/50 decoration-4 underline-offset-8">
              predictable sales revenue.
            </span>
          </h1>
        </div>

        {/* Clean Sub-editorial Paragraph & Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
          <div className="md:col-span-8 space-y-4">
            <p className="text-lg sm:text-xl md:text-2xl text-stone-300 font-normal leading-relaxed drop-shadow-sm">
              A dedicated B2B demand generation practice for technology, consulting, and manufacturing firms. We combine executive Thought Leader Ads, buying committee account targeting, and high-intent inbound acquisition.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3">
            <Link
              href="/book"
              className="w-full inline-flex items-center justify-between px-7 py-4 rounded-full text-sm font-semibold text-stone-950 bg-white hover:bg-stone-100 transition-all duration-200 group shadow-lg hover:shadow-stone-200/20"
            >
              <span>Book Strategy Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-stone-950" />
            </Link>

            <Link
              href="/case-studies"
              className="w-full inline-flex items-center justify-between px-7 py-4 rounded-full text-sm font-semibold text-white bg-stone-900/80 backdrop-blur-md border border-white/20 hover:border-white/40 hover:bg-stone-900 transition-all"
            >
              <span>View Campaign Frameworks</span>
              <ArrowUpRight className="w-4 h-4 text-stone-300" />
            </Link>
          </div>
        </div>

        {/* Understated Executive Metadata Strip */}
        <div className="pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm backdrop-blur-xs">
          <div>
            <span className="text-xs text-stone-400 uppercase font-semibold block">Practice Lead</span>
            <span className="font-bold text-white mt-1 block">Dev Raj Saini</span>
          </div>
          <div>
            <span className="text-xs text-stone-400 uppercase font-semibold block">HQ &amp; Coverage</span>
            <span className="font-bold text-white mt-1 block">Jaipur, India · Global B2B</span>
          </div>
          <div>
            <span className="text-xs text-stone-400 uppercase font-semibold block">Accreditation</span>
            <span className="font-bold text-amber-200 mt-1 block">LinkedIn Marketing Labs</span>
          </div>
          <div>
            <span className="text-xs text-stone-400 uppercase font-semibold block">Client Focus</span>
            <span className="font-bold text-stone-200 mt-1 block">Mid-Market &amp; Enterprise</span>
          </div>
        </div>

      </div>
    </section>
  );
}
