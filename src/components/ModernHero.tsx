'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export function ModernHero() {
  return (
    <section className="relative bg-white text-slate-950 pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Agency Category Eyebrow */}
        <div className="mb-8 sm:mb-10 flex items-center gap-3">
          <span className="h-px w-8 bg-blue-600 inline-block" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500">
            Enterprise LinkedIn Demand Generation Practice
          </span>
        </div>

        {/* Massive Editorial Headline */}
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight text-slate-950 leading-[1.02]">
            We turn enterprise attention on LinkedIn into{' '}
            <span className="underline decoration-blue-600 decoration-[6px] underline-offset-[12px]">
              predictable sales revenue.
            </span>
          </h1>
        </div>

        {/* Narrative & Action Block */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start border-t border-slate-200 pt-10">
          
          {/* Paragraph */}
          <div className="lg:col-span-7">
            <p className="text-xl sm:text-2xl text-slate-600 font-normal leading-relaxed">
              A dedicated B2B demand generation practice for technology, consulting, and manufacturing firms. We combine executive Thought Leader Ads, buying committee account targeting, and high-intent inbound acquisition.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3.5">
            <Link
              href="/book"
              className="inline-flex items-center justify-between px-7 py-4 rounded-xl text-sm font-bold text-white bg-slate-950 hover:bg-blue-600 transition-all duration-150 group shadow-sm hover:shadow"
            >
              <span>Book Strategy Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/case-studies"
              className="inline-flex items-center justify-between px-7 py-4 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-50 transition-all duration-150 border border-slate-300 shadow-2xs"
            >
              <span>View Campaign Frameworks</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
            </Link>
          </div>

        </div>

        {/* Agency Footprint / Metadata Strip */}
        <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block">
              Practice Lead
            </span>
            <span className="text-base font-bold text-slate-950 mt-1.5 block">
              Dev Raj Saini
            </span>
          </div>

          <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block">
              HQ &amp; Coverage
            </span>
            <span className="text-base font-bold text-slate-950 mt-1.5 block">
              Jaipur, India · Global B2B
            </span>
          </div>

          <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block">
              Accreditation
            </span>
            <span className="text-base font-bold text-slate-950 mt-1.5 block">
              LinkedIn Marketing Labs
            </span>
          </div>

          <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block">
              Client Focus
            </span>
            <span className="text-base font-bold text-blue-600 mt-1.5 block">
              Mid-Market &amp; Enterprise
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
