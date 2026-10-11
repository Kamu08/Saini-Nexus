'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Briefcase, Cpu, Shield, Globe, BarChart, Database, ChevronLeft, ChevronRight } from 'lucide-react';
import { INDUSTRIES } from '@/data/industries';

const SECTOR_ICONS: Record<string, React.ElementType> = {
  'b2b-saas': Globe,
  'technology': Cpu,
  'consulting': Briefcase,
  'professional-services': BarChart,
  'industrial-manufacturing': Shield,
  'real-estate': Database,
};

// ============================================================================
// Premium Micro-Interaction: Mouse-Tracking Spotlight Card
// ============================================================================
function SpotlightCard({ ind, idx }: { ind: any; idx: number }) {
  const divRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const Icon = SECTOR_ICONS[ind.slug] || Briefcase;

  return (
    <Link
      href={`/industries/${ind.slug}`}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="group relative flex flex-col p-8 sm:p-10 border border-white/10 bg-[#040D1F]/50 hover:bg-[#040D1F] transition-colors duration-500 overflow-hidden min-h-[360px]"
    >
      {/* Dynamic Mouse Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(56,169,235,0.15), transparent 40%)`,
        }}
      />
      
      {/* Dynamic Border Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
          maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
          WebkitMaskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <Icon className="w-10 h-10 text-[#38A9EB] mb-6 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
          
          <h3 className="text-3xl font-black text-white tracking-tight mb-4 group-hover:text-[#38A9EB] transition-colors duration-300">
            {ind.name}
          </h3>
          
          {/* SEO Optimized Hook */}
          <p className="text-slate-400 text-sm font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
            {ind.heroHeadline}
          </p>
        </div>

        {/* Conversion CTA */}
        <div className="mt-12 flex items-center gap-3 text-white font-bold text-xs uppercase tracking-[0.2em] group-hover:text-[#38A9EB] transition-colors pt-6 border-t border-white/10 group-hover:border-[#38A9EB]/30">
          Explore Playbook
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

function MobileSectorCard({ ind, idx }: { ind: any; idx: number }) {
  const Icon = SECTOR_ICONS[ind.slug] || Briefcase;

  return (
    <Link
      href={`/industries/${ind.slug}`}
      className="group relative flex flex-col justify-between p-5 border border-white/10 bg-[#040D1F]/70 active:bg-[#040D1F] transition-colors rounded-none w-[82vw] max-w-[300px] h-[230px] shrink-0 snap-center select-none overflow-hidden"
    >
      {/* Dynamic Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#38A9EB]/50 to-transparent" />
      
      <div>
        <div className="flex items-center justify-between mb-3">
          <Icon className="w-7 h-7 text-[#38A9EB] opacity-90 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-mono font-bold text-slate-500">
            0{idx + 1}
          </span>
        </div>
        
        <h3 className="text-xl font-black text-white tracking-tight mb-1.5 group-hover:text-[#38A9EB] transition-colors line-clamp-1">
          {ind.name}
        </h3>
        
        <p className="text-slate-400 text-xs font-medium leading-relaxed group-hover:text-slate-300 transition-colors line-clamp-2">
          {ind.heroHeadline}
        </p>
      </div>

      {/* Conversion CTA */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-white font-bold text-[11px] uppercase tracking-wider group-hover:text-[#38A9EB] transition-colors">
        <span>Explore Playbook</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}

// ============================================================================
// Main Section Component
// ============================================================================
export function SectorCarousel() {
  const industries = Object.values(INDUSTRIES);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const target = Math.max(0, Math.min(industries.length - 1, index));
    const card = carouselRef.current.children[target] as HTMLElement | undefined;
    if (card) {
      const container = carouselRef.current;
      const targetLeft = card.offsetLeft - (container.clientWidth - card.offsetWidth) / 2;
      container.scrollTo({
        left: targetLeft,
        behavior: "smooth"
      });
    }
    setActiveIndex(target);
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIdx = 0;
    let minDiff = Infinity;
    Array.from(container.children).forEach((child, idx) => {
      const el = child as HTMLElement;
      const childCenter = el.offsetLeft + el.offsetWidth / 2;
      const diff = Math.abs(containerCenter - childCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });
    setActiveIndex(closestIdx);
  };

  return (
    <section className="w-full pt-14 sm:pt-28 pb-14 sm:pb-20 bg-[#020617] relative overflow-hidden">
      
      {/* Subtle background noise texture to make it feel like premium matte material */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-8 sm:mb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <span className="w-12 h-[1px] bg-[#38A9EB]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#38A9EB]">
                Sector Architectures
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black text-white tracking-tighter leading-[1.1]">
              B2B Growth <br className="hidden md:block" />
              Across Key Sectors.
            </h2>
          </div>
          
          <Link 
            href="/industries" 
            className="group inline-flex items-center justify-center gap-4 px-8 sm:px-10 py-4 sm:py-5 bg-white text-slate-900 font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 shrink-0 hover:bg-[#38A9EB] hover:text-white shadow-[0_0_40px_rgba(56,169,235,0)] hover:shadow-[0_0_40px_rgba(56,169,235,0.3)]"
          >
            <span>View All Playbooks</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ========================================================= */}
        {/* MOBILE VIEW: COMPACT CENTERED SWIPEABLE CAROUSEL          */}
        {/* Reduces vertical height by ~1,800px; eliminates clutter   */}
        {/* ========================================================= */}
        <div className="block md:hidden space-y-4">
          {/* Controls: Counter and Prev / Next arrows */}
          <div className="flex items-center justify-between pb-1">
            <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-slate-400">
              <span className="text-[#38A9EB]">0{activeIndex + 1}</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-500">0{industries.length}</span>
              <span className="text-[10px] font-sans font-normal text-slate-400 ml-1">· Swipe playbooks</span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scrollToIndex(activeIndex - 1)}
                disabled={activeIndex === 0}
                className={`w-8 h-8 rounded-md border flex items-center justify-center transition-colors cursor-pointer ${
                  activeIndex === 0
                    ? "border-white/10 text-slate-600 bg-white/5 cursor-not-allowed"
                    : "border-white/20 text-white bg-slate-900/90 hover:bg-[#1572B8] shadow-xs"
                }`}
                aria-label="Previous sector playbook"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollToIndex(activeIndex + 1)}
                disabled={activeIndex === industries.length - 1}
                className={`w-8 h-8 rounded-md border flex items-center justify-center transition-colors cursor-pointer ${
                  activeIndex === industries.length - 1
                    ? "border-white/10 text-slate-600 bg-white/5 cursor-not-allowed"
                    : "border-white/20 text-white bg-slate-900/90 hover:bg-[#1572B8] shadow-xs"
                }`}
                aria-label="Next sector playbook"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Swipeable Centered Track */}
          <div 
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex items-stretch gap-3.5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 -mx-4 px-[calc((100vw-min(82vw,300px))/2)] no-scrollbar touch-pan-x"
          >
            {industries.map((ind, idx) => (
              <MobileSectorCard key={ind.slug} ind={ind} idx={idx} />
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 pt-2">
            {industries.map((ind, idx) => (
              <button
                key={ind.slug}
                type="button"
                onClick={() => scrollToIndex(idx)}
                className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === idx 
                    ? "w-6 bg-[#38A9EB]" 
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Jump to sector 0${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP/TABLET VIEW: ORIGINAL SPOTLIGHT GRID              */}
        {/* 100% Preserved: Original interactive spotlight cards      */}
        {/* ========================================================= */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => (
            <SpotlightCard key={ind.slug} ind={ind} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
