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
      <section className="relative pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24 text-white rounded-xl sm:rounded-2xl overflow-hidden border border-blue-900/60 shadow-2xl bg-[#091528]">
        
        {/* ========================================================= */}
        {/* 1. BLUE FLUTED BANDS BACKGROUND (SAINI LOGO BLUE PALETTE) */}
        {/* ========================================================= */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/hero-fluted-saini-blue.jpg"
            alt="Architectural Blue Fluted Slats Texture with Saini Logo Colors"
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover object-center"
          />
          {/* Soft top shadow to gently darken the top while keeping the blue slats luminous */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050e1d]/50 via-[#07152b]/15 to-[#07152b]/45" />

          {/* Gentle lateral vignette for crisp typography legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050e1d]/35 via-transparent to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-[70px] sm:pt-[78px] space-y-10 sm:space-y-12 relative z-10">
        
        {/* Headline: Tuned frosted badges and Saini gradient */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-sans font-extrabold tracking-tight text-white leading-[1.12] drop-shadow-sm">
            We turn{' '}
            <span className="inline-block px-3 sm:px-4 py-0.5 sm:py-1 rounded-xl bg-[#0c2852]/85 border border-[#38a9eb]/50 backdrop-blur-md text-[#f0f9ff] shadow-[0_0_24px_rgba(56,169,235,0.3)] mx-1 align-baseline font-extrabold">
              enterprise
            </span>{' '}
            attention on{' '}
            <span className="inline-block px-3 sm:px-4 py-0.5 sm:py-1 rounded-xl bg-[#0c2852]/85 border border-[#38a9eb]/50 backdrop-blur-md text-[#f0f9ff] shadow-[0_0_24px_rgba(56,169,235,0.3)] mx-1 align-baseline font-extrabold">
              LinkedIn
            </span>{' '}
            into{' '}
            <span className="font-serif italic font-medium bg-gradient-to-r from-[#67c7f8] via-[#b9e9fe] to-white bg-clip-text text-transparent px-1 drop-shadow-sm">
              predictable sales revenue.
            </span>
          </h1>
        </div>

        {/* Sub-editorial: Option C (Border Callout) & Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
          
          <div className="md:col-span-8">
            <div className="border-l-2 border-[#38a9eb] pl-4 sm:pl-5 space-y-1.5">
              <span className="text-[11px] font-mono text-[#74cbf7] uppercase tracking-widest block font-bold">
                Core Delivery Protocol
              </span>
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                A dedicated B2B demand generation practice for technology, consulting, and manufacturing firms. We combine executive Thought Leader Ads, buying committee account targeting, and high-intent inbound acquisition.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3">
            {/* Primary Consultation CTA - High contrast pure white with glowing Saini blue shadow */}
            <Link
              href="/#contact-form"
              className="w-full inline-flex items-center justify-between px-7 py-4 rounded-full text-sm font-bold text-[#07152b] bg-white hover:bg-[#edf7fd] transition-all duration-200 group shadow-[0_4px_20px_rgba(0,0,0,0.25),0_0_15px_rgba(56,169,235,0.25)] hover:shadow-[0_6px_25px_rgba(56,169,235,0.4)] hover:-translate-y-0.5"
            >
              <span>Book Strategy Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#07152b]" />
            </Link>

            {/* Secondary Frameworks CTA - Deep glass button with crisp Saini blue border */}
            <Link
              href="/case-studies"
              className="w-full inline-flex items-center justify-between px-7 py-4 rounded-full text-sm font-semibold text-white bg-[#0b2144]/75 backdrop-blur-md border border-[#38a9eb]/40 hover:border-[#38a9eb]/80 hover:bg-[#0f2c59]/90 transition-all shadow-md group"
            >
              <span>View Campaign Frameworks</span>
              <ArrowUpRight className="w-4 h-4 text-[#74cbf7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Understated Executive Metadata Strip - tuned borders & labels */}
        <div className="pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm backdrop-blur-2xs">
          <div>
            <span className="text-xs text-[#a3d4f1] uppercase font-semibold block tracking-wider">Practice Lead</span>
            <span className="font-bold text-white mt-1 block">Dev Raj Saini</span>
          </div>
          <div>
            <span className="text-xs text-[#a3d4f1] uppercase font-semibold block tracking-wider">HQ &amp; Coverage</span>
            <span className="font-bold text-white mt-1 block">Jaipur, India · Global B2B</span>
          </div>
          <div>
            <span className="text-xs text-[#a3d4f1] uppercase font-semibold block tracking-wider">Accreditation</span>
            <span className="font-bold text-[#62c4f8] mt-1 block">LinkedIn Marketing Labs</span>
          </div>
          <div>
            <span className="text-xs text-[#a3d4f1] uppercase font-semibold block tracking-wider">Client Focus</span>
            <span className="font-bold text-[#d4effc] mt-1 block">Mid-Market &amp; Enterprise</span>
          </div>
        </div>

        </div>
      </section>
    </div>
  );
}
