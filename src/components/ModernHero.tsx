'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Check } from 'lucide-react';

export function ModernHero() {
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Scroll animation telemetry: tracks image as it scrolls into and through the viewport
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ['start 90%', 'center 45%'],
  });

  // Ultra-fluid spring physics for natural, buttery smooth scroll expansion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Smooth expansion in width and height without any 3D rotation
  const scale = useTransform(smoothProgress, [0, 1], [0.86, 1.05]);
  const y = useTransform(smoothProgress, [0, 1], [40, 0]);

  return (
    <section className="relative pt-6 sm:pt-10 md:pt-14 pb-16 sm:pb-24 text-center overflow-hidden">
      
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CauseHouse Pill Badge & Entity Signal */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-black bg-[#93C5FD] text-black text-[11px] sm:text-xs font-mono font-extrabold uppercase tracking-wider mb-6 shadow-[2.5px_2.5px_0px_#000000]">
          <span>Jaipur, India · B2B Marketing &amp; LinkedIn Growth · Global Markets</span>
        </div>

        {/* Big Chunky Retro Fraunces Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-bold tracking-tight text-black leading-[1.08] max-w-5xl mx-auto">
          B2B Growth, Built Around How{' '}
          <span className="bubble-highlight-blue">
            Buyers
          </span>{' '}
          Actually Buy.
        </h1>

        {/* Clean Editorial Subheadline */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-zinc-800 max-w-3xl mx-auto leading-relaxed mt-6 sm:mt-7 font-normal">
          Saini Nexus helps B2B companies build demand, reach decision-makers and generate qualified pipeline through LinkedIn-led marketing, advertising and growth systems.
        </p>

        {/* Dual Centered Action Buttons (CauseHouse Neo-Pills) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 sm:mt-10">
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider text-black bg-[#60A5FA] border-2 border-black shadow-[3.5px_3.5px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#000000] active:translate-x-[3.5px] active:translate-y-[3.5px] active:shadow-none transition-all whitespace-nowrap w-fit shrink-0"
          >
            <span>Book a Strategy Conversation</span>
            <span className="ml-2 text-sm font-bold shrink-0">→</span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider text-black bg-white border-2 border-black shadow-[3.5px_3.5px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#000000] active:translate-x-[3.5px] active:translate-y-[3.5px] active:shadow-none transition-all whitespace-nowrap w-fit shrink-0"
          >
            <span>Explore Services</span>
            <span className="ml-1.5 text-sm shrink-0">↗</span>
          </Link>
        </div>

        {/* Option 4: Zero-Friction Trust Signals below CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-3 sm:gap-x-6 text-[11px] sm:text-xs font-mono text-zinc-700 mt-6 font-semibold">
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 stroke-[2.5]" />
            <span>Direct 1-on-1 Founder Consultation</span>
          </div>
          <span className="hidden sm:inline text-zinc-400">•</span>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 stroke-[2.5]" />
            <span>Actionable ICP &amp; Ad Teardown</span>
          </div>
          <span className="hidden sm:inline text-zinc-400">•</span>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 stroke-[2.5]" />
            <span>&lt;24h Response Guarantee</span>
          </div>
        </div>

        {/* Hero Artwork Image Container with Smooth Scroll Expansion */}
        <div 
          ref={imageContainerRef} 
          className="mt-12 sm:mt-16 max-w-6xl mx-auto w-full px-2 sm:px-4"
        >
          <motion.div 
            style={{ scale, y }}
            className="rounded-3xl sm:rounded-[36px] overflow-hidden border-2 border-black bg-white p-2 sm:p-3.5 shadow-[6px_6px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] transition-shadow will-change-transform"
          >
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] rounded-2xl sm:rounded-[28px] overflow-hidden bg-zinc-100 border border-black/20">
              <Image
                src="/hero-artwork.png"
                alt="Saini Nexus B2B Growth Engine Platform"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
