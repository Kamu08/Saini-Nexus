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
    <section className="relative pt-8 sm:pt-12 md:pt-14 pb-20 sm:pb-28 bg-white text-slate-950 border-b border-slate-200">
      
      {/* Subtle top ambient warmth (barely perceptible, premium paper texture feel) */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-50/60 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        


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
