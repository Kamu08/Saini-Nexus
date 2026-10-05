'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Check, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';

export function ModernHero() {
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Scroll animation telemetry: tracks image as it scrolls into and through the viewport
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ['start 95%', 'center 50%'],
  });

  // Ultra-fluid spring physics for natural, buttery smooth scroll expansion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Smooth expansion and subtle lift
  const scale = useTransform(smoothProgress, [0, 1], [0.94, 1.02]);
  const y = useTransform(smoothProgress, [0, 1], [25, -10]);

  return (
    <section className="relative pt-6 sm:pt-10 md:pt-14 pb-12 sm:pb-20 text-center overflow-hidden">
      
      {/* Themed Background Vector Accent: Retro 4-Point Starburst */}
      <div className="absolute top-16 right-8 sm:right-20 pointer-events-none hidden md:block">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
          <path d="M26 2C26 15 15 26 2 26C15 26 26 37 26 50C26 37 37 26 50 26C37 26 26 15 26 2Z" fill="#BFDBFE" stroke="black" strokeWidth="2" />
          <circle cx="44" cy="8" r="3" fill="black" />
        </svg>
      </div>

      <div className="absolute top-48 left-8 sm:left-16 pointer-events-none hidden md:block opacity-75">
        <svg width="36" height="36" viewBox="0 0 52 52" fill="none">
          <path d="M26 2C26 15 15 26 2 26C15 26 26 37 26 50C26 37 37 26 50 26C37 26 26 15 26 2Z" fill="#BFDBFE" stroke="black" strokeWidth="2" />
          <circle cx="44" cy="8" r="3" fill="black" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* CauseHouse Pill Badge & Entity Signal */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full border-2 border-black bg-[#93C5FD] text-black text-[10px] sm:text-xs font-mono font-extrabold uppercase tracking-wider mb-5 sm:mb-6 shadow-[2.5px_2.5px_0px_#000000] text-center max-w-full">
          <span>Jaipur, India · B2B Marketing &amp; LinkedIn Growth · Global Markets</span>
        </div>

        {/* Big Chunky Retro Fraunces Headline with Fluid Scaling */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[5.4rem] font-bold tracking-tight text-black leading-[1.12] sm:leading-[1.06] max-w-5xl mx-auto">
          B2B Growth, Built Around How{' '}
          <span className="bubble-highlight-blue">
            Buyers
          </span>{' '}
          Actually Buy.
        </h1>

        {/* Clean Editorial Subheadline */}
        <p className="font-sans text-sm sm:text-base md:text-xl text-zinc-800 max-w-3xl mx-auto leading-relaxed mt-4 sm:mt-6 font-normal">
          Saini Nexus helps B2B companies build demand, reach decision-makers and generate qualified pipeline through LinkedIn-led marketing, advertising and growth systems.
        </p>

        {/* Dual Action Buttons (Overlap boundary) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 max-w-md sm:max-w-none mx-auto w-full px-2 sm:px-0 relative z-30">
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider text-black bg-[#60A5FA] border-2 border-black shadow-[4px_4px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all w-full sm:w-auto"
          >
            <span>Book a Strategy Conversation</span>
            <span className="ml-2 text-sm font-bold shrink-0">→</span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider text-black bg-white border-2 border-black shadow-[4px_4px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all w-full sm:w-auto"
          >
            <span>Explore Services</span>
            <span className="ml-1.5 text-sm shrink-0">↗</span>
          </Link>
        </div>

        {/* Zero-Friction Trust Signals */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-[11px] sm:text-xs font-mono text-zinc-800 mt-5 font-semibold relative z-30">
          <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-black/20 shadow-[1px_1px_0px_#000000]">
            <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 stroke-[2.5]" />
            <span>Direct 1-on-1 Founder Consultation</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-black/20 shadow-[1px_1px_0px_#000000]">
            <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 stroke-[2.5]" />
            <span>Actionable ICP &amp; Ad Teardown</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-black/20 shadow-[1px_1px_0px_#000000]">
            <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 stroke-[2.5]" />
            <span>&lt;24h Response Guarantee</span>
          </div>
        </div>

      </div>

      {/* ========================================================= */}
      {/* BLEED & INTEGRATED HERO ARTWORK CANVAS                    */}
      {/* Pulled up with negative margin to seamlessly integrate    */}
      {/* ========================================================= */}
      <div 
        ref={imageContainerRef} 
        className="-mt-8 sm:-mt-14 md:-mt-18 max-w-7xl mx-auto w-full px-2 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div 
          style={{ scale, y }}
          className="rounded-3xl sm:rounded-[42px] overflow-hidden border-3 border-black bg-white p-2 sm:p-4 shadow-[6px_6px_0px_#000000] sm:shadow-[10px_10px_0px_#000000] hover:shadow-[12px_12px_0px_#000000] transition-shadow will-change-transform relative"
        >
          {/* Main Visual Image */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[2.4/1] rounded-2xl sm:rounded-[34px] overflow-hidden bg-[#FAF7EF] border-2 border-black/20">
            <Image
              src="/hero-artwork.png"
              alt="Saini Nexus B2B Growth Engine Platform"
              fill
              className="object-cover object-center"
              priority
            />

            {/* Subtle top vignette blend for editorial atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7EF]/20 via-transparent to-black/10 pointer-events-none" />

            {/* Floating Live Badge Top Left */}
            <div className="absolute top-3 left-3 sm:top-5 sm:left-5 hidden sm:inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full border-2 border-black shadow-[2.5px_2.5px_0px_#000000] text-[11px] font-mono font-extrabold text-black uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>LIVE B2B DEMAND ENGINE</span>
            </div>

            {/* Floating Metric Badge Bottom Right */}
            <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 inline-flex items-center gap-2 bg-[#60A5FA] px-3.5 py-1.5 rounded-full border-2 border-black shadow-[2.5px_2.5px_0px_#000000] text-[11px] sm:text-xs font-mono font-extrabold text-black uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>82% SALES ACCEPTANCE BENCHMARK</span>
            </div>

            {/* Floating City Node Tag Bottom Left */}
            <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 hidden md:inline-flex items-center gap-2 bg-[#FAF7EF] px-3 py-1 rounded-xl border border-black/40 text-[10px] font-mono font-bold text-zinc-700">
              <span>JAIPUR HQ · GLOBAL B2B DELIVERY</span>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
