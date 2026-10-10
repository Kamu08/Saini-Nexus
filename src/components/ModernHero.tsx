'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles,
  Layers,
  Moon,
  Sun,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

type VariantType = 'aurora' | 'blueprint' | 'darkLuxury';

export function ModernHero() {
  const [variant, setVariant] = useState<VariantType>('aurora');

  return (
    <div className="relative">
      {/* ========================================================= */}
      {/* LIVE VARIANT SWITCHER PILL (FLOATING CONTROLLER)          */}
      {/* ========================================================= */}
      <div className="fixed bottom-6 right-6 z-50 bg-slate-950/90 backdrop-blur-md text-white border border-slate-700/80 rounded-2xl p-2 shadow-2xl flex items-center gap-1.5 animate-in fade-in slide-in-from-bottom-3 duration-300">
        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest px-2 hidden sm:inline">
          Hero Mode:
        </span>
        <button
          onClick={() => setVariant('aurora')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            variant === 'aurora'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          <span>Option A: Aurora Glow</span>
        </button>

        <button
          onClick={() => setVariant('blueprint')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            variant === 'blueprint'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Layers className="w-3.5 h-3.5 text-sky-400" />
          <span>Option B: Blueprint</span>
        </button>

        <button
          onClick={() => setVariant('darkLuxury')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            variant === 'darkLuxury'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Moon className="w-3.5 h-3.5 text-indigo-300" />
          <span>Option C: Dark Luxury</span>
        </button>
      </div>

      {/* ========================================================= */}
      {/* VARIANT A: AURORA GLOW (VIBRANT & HIGH-CHROMA GRADIENTS)  */}
      {/* ========================================================= */}
      {variant === 'aurora' && (
        <section className="relative pt-24 sm:pt-32 md:pt-36 pb-20 sm:pb-28 bg-white text-slate-950 border-b border-slate-200 overflow-hidden transition-all duration-300">
          {/* Subtle Ambient Aurora Light Spheres */}
          <div 
            aria-hidden="true" 
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] h-[450px] bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-sky-400/20 blur-[130px] rounded-full pointer-events-none -z-0"
          />
          <div 
            aria-hidden="true" 
            className="absolute top-1/3 -right-24 w-80 h-80 bg-blue-400/10 blur-[100px] rounded-full pointer-events-none -z-0"
          />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
            {/* Live Client Pipeline Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 font-sans">
                Enterprise B2B Demand Generation
              </span>
            </div>

            {/* Massive Confident Agency Headline with Dynamic Gradient */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-extrabold tracking-tight text-slate-950 leading-[1.04]">
                We turn enterprise attention on LinkedIn into{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent underline decoration-blue-500/40 decoration-4 underline-offset-8">
                  predictable sales revenue.
                </span>
              </h1>
            </div>

            {/* Sub-editorial Paragraph & Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
              <div className="md:col-span-8 space-y-4">
                <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-normal leading-relaxed">
                  A dedicated B2B demand generation practice for technology, consulting, and manufacturing firms. We combine executive Thought Leader Ads, buying committee account targeting, and high-intent inbound acquisition.
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col gap-3">
                <Link
                  href="/book"
                  className="w-full inline-flex items-center justify-between px-7 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 group shadow-md hover:shadow-lg"
                >
                  <span>Book Strategy Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/case-studies"
                  className="w-full inline-flex items-center justify-between px-7 py-4 rounded-full text-sm font-semibold text-slate-800 bg-white border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-xs"
                >
                  <span>View Campaign Frameworks</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500" />
                </Link>
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
      )}

      {/* ========================================================= */}
      {/* VARIANT B: BLUEPRINT PRECISION (ARCHITECTURAL TECH MESH)  */}
      {/* ========================================================= */}
      {variant === 'blueprint' && (
        <section className="relative pt-24 sm:pt-32 md:pt-36 pb-20 sm:pb-28 bg-slate-50/70 text-slate-950 border-b border-slate-200 overflow-hidden transition-all duration-300">
          {/* Crisp Engineering Grid Pattern */}
          <div 
            aria-hidden="true" 
            className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-70"
          />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
            {/* Engineering Protocol Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-300/80 shadow-xs font-mono text-xs font-semibold text-slate-700">
              <span className="text-blue-600 font-bold">01 //</span>
              <span>PRECISION ACCOUNT-BASED MARKETING (ABM)</span>
            </div>

            {/* Massive Headline with LinkedIn Blue Punch Word */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-extrabold tracking-tight text-slate-950 leading-[1.04]">
                We turn enterprise attention on LinkedIn into{' '}
                <span className="text-blue-600 underline decoration-slate-300 decoration-2 underline-offset-8">
                  predictable sales revenue.
                </span>
              </h1>
            </div>

            {/* Sub-editorial Paragraph & Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
              <div className="md:col-span-8 space-y-4">
                <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-normal leading-relaxed">
                  A dedicated B2B demand generation practice for technology, consulting, and manufacturing firms. We combine executive Thought Leader Ads, buying committee account targeting, and high-intent inbound acquisition.
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col gap-3">
                <Link
                  href="/book"
                  className="w-full inline-flex items-center justify-between px-7 py-4 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors group shadow-sm hover:shadow"
                >
                  <span>Book Strategy Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/case-studies"
                  className="w-full inline-flex items-center justify-between px-7 py-4 rounded-xl text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 transition-colors"
                >
                  <span>View Campaign Frameworks</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500" />
                </Link>
              </div>
            </div>

            {/* Architectural Specs Ribbon */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm font-sans">
              <div className="bg-white/80 p-3.5 rounded-lg border border-slate-200">
                <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold block">Practice Lead</span>
                <span className="font-bold text-slate-900 mt-1 block">Dev Raj Saini</span>
              </div>
              <div className="bg-white/80 p-3.5 rounded-lg border border-slate-200">
                <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold block">HQ &amp; Coverage</span>
                <span className="font-bold text-slate-900 mt-1 block">Jaipur · Global B2B</span>
              </div>
              <div className="bg-white/80 p-3.5 rounded-lg border border-slate-200">
                <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold block">Accreditation</span>
                <span className="font-bold text-slate-900 mt-1 block">LinkedIn Labs Verified</span>
              </div>
              <div className="bg-white/80 p-3.5 rounded-lg border border-slate-200">
                <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold block">Client Focus</span>
                <span className="font-bold text-blue-600 mt-1 block">Enterprise Pipeline</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* VARIANT C: DARK LUXURY EXECUTIVE MODE (MIDNIGHT CONTRAST) */}
      {/* ========================================================= */}
      {variant === 'darkLuxury' && (
        <section className="relative pt-24 sm:pt-32 md:pt-36 pb-20 sm:pb-28 bg-[#090D16] text-white border-b border-slate-800 overflow-hidden transition-all duration-300">
          {/* Deep Nebula Ambient Glow */}
          <div 
            aria-hidden="true" 
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-cyan-500/10 blur-[140px] rounded-full pointer-events-none -z-0"
          />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
            {/* High-Ticket Authority Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 font-sans">
                High-Ticket B2B Revenue Architecture
              </span>
            </div>

            {/* Massive Pure White Headline with Electric Blue Glow */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-extrabold tracking-tight text-white leading-[1.04]">
                We turn enterprise attention on LinkedIn into{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent underline decoration-cyan-400/40 decoration-4 underline-offset-8">
                  predictable sales revenue.
                </span>
              </h1>
            </div>

            {/* Sub-editorial Paragraph & Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
              <div className="md:col-span-8 space-y-4">
                <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-normal leading-relaxed">
                  A dedicated B2B demand generation practice for technology, consulting, and manufacturing firms. We combine executive Thought Leader Ads, buying committee account targeting, and high-intent inbound acquisition.
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col gap-3">
                <Link
                  href="/book"
                  className="w-full inline-flex items-center justify-between px-7 py-4 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 group shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  <span>Book Strategy Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/case-studies"
                  className="w-full inline-flex items-center justify-between px-7 py-4 rounded-full text-sm font-semibold text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:bg-slate-800 transition-colors"
                >
                  <span>View Campaign Frameworks</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>
            </div>

            {/* Understated Executive Metadata Strip */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold block">Practice Lead</span>
                <span className="font-bold text-white mt-1 block">Dev Raj Saini</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold block">HQ &amp; Coverage</span>
                <span className="font-bold text-white mt-1 block">Jaipur, India · Global B2B</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold block">Accreditation</span>
                <span className="font-bold text-cyan-400 mt-1 block">LinkedIn Marketing Labs</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold block">Client Focus</span>
                <span className="font-bold text-blue-400 mt-1 block">Mid-Market &amp; Enterprise</span>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
