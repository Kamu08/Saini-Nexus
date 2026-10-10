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
    <div className="p-2 sm:p-3 relative">
      {/* Outer container with uniform top/left/right margin and subtle rounded corners */}
      <section className="relative pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24 text-white rounded-xl sm:rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl bg-[#070B19]">
        
        {/* ========================================================= */}
        {/* 1. BLUE FLUTED BANDS BACKGROUND (SAINI LOGO BLUE PALETTE) */}
        {/* ========================================================= */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/hero-fluted-saini-blue.jpg"
            alt="Architectural Blue Fluted Slats Texture with Saini Logo Colors"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Subtle dark vignette to ensure crisp typography readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B19]/50 via-transparent to-[#070B19]/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070B19]/65 via-transparent to-[#070B19]/25" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 relative z-10">
          
          {/* Live Client Demand Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-400/30 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-200 font-sans">
              Enterprise LinkedIn Demand Generation
            </span>
          </div>

          {/* Headline: Hybrid Option 1 & 3 */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-sans font-extrabold tracking-tight text-white leading-[1.12]">
              We turn{' '}
              <span className="inline-block px-3 sm:px-4 py-0.5 sm:py-1 rounded-xl bg-cyan-950/60 border border-cyan-400/30 backdrop-blur-md text-cyan-200 shadow-[0_0_20px_rgba(56,189,248,0.2)] mx-1 align-baseline">
                enterprise
              </span>{' '}
              attention on{' '}
              <span className="inline-block px-3 sm:px-4 py-0.5 sm:py-1 rounded-xl bg-cyan-950/60 border border-cyan-400/30 backdrop-blur-md text-cyan-200 shadow-[0_0_20px_rgba(56,189,248,0.2)] mx-1 align-baseline">
                LinkedIn
              </span>{' '}
              into{' '}
              <span className="font-serif italic font-medium bg-gradient-to-r from-cyan-300 via-sky-200 to-white bg-clip-text text-transparent px-1">
                predictable sales revenue.
              </span>
            </h1>
          </div>

          {/* Sub-editorial: Option C (Border Callout) & Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
            
            <div className="md:col-span-8">
              <div className="border-l-2 border-cyan-400/70 pl-4 sm:pl-5 space-y-1.5">
                <span className="text-[11px] font-mono text-cyan-300 uppercase tracking-widest block font-semibold">
                  Core Delivery Protocol
                </span>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  A dedicated B2B demand generation practice for technology, consulting, and manufacturing firms. We combine executive Thought Leader Ads, buying committee account targeting, and high-intent inbound acquisition.
                </p>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-3">
              <Link
                href="/book"
                className="w-full inline-flex items-center justify-between px-7 py-4 rounded-full text-sm font-semibold text-slate-950 bg-white hover:bg-cyan-100 transition-all duration-200 group shadow-lg hover:shadow-cyan-500/20"
              >
                <span>Book Strategy Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-slate-950" />
              </Link>

              <Link
                href="/case-studies"
                className="w-full inline-flex items-center justify-between px-7 py-4 rounded-full text-sm font-semibold text-white bg-slate-900/80 backdrop-blur-md border border-white/20 hover:border-white/40 hover:bg-slate-900 transition-all"
              >
                <span>View Campaign Frameworks</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-300" />
              </Link>
            </div>
          </div>

          {/* Understated Executive Metadata Strip */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm backdrop-blur-xs">
            <div>
              <span className="text-xs text-sky-200/70 uppercase font-semibold block">Practice Lead</span>
              <span className="font-bold text-white mt-1 block">Dev Raj Saini</span>
            </div>
            <div>
              <span className="text-xs text-sky-200/70 uppercase font-semibold block">HQ &amp; Coverage</span>
              <span className="font-bold text-white mt-1 block">Jaipur, India · Global B2B</span>
            </div>
            <div>
              <span className="text-xs text-sky-200/70 uppercase font-semibold block">Accreditation</span>
              <span className="font-bold text-cyan-300 mt-1 block">LinkedIn Marketing Labs</span>
            </div>
            <div>
              <span className="text-xs text-sky-200/70 uppercase font-semibold block">Client Focus</span>
              <span className="font-bold text-sky-300 mt-1 block">Mid-Market &amp; Enterprise</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
