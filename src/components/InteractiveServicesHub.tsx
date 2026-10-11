"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Target,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { SERVICES, ServiceItem } from "@/data/services";

interface CardProps {
  srv: ServiceItem;
  idx: number;
  total: number;
  progress: MotionValue<number>;
}

function ServiceSlideCard({ srv, idx, total, progress }: CardProps) {
  const usableProgress = 0.95;
  const segment = usableProgress / (total - 1); // Split into 7 segments for the 7 incoming cards
  const slideDuration = segment * 0.85; // 85% of segment is sliding, 15% is resting (reading pause)

  const start = idx === 0 ? 0 : (idx * segment) - slideDuration;
  const end = idx === 0 ? 0 : (idx * segment);

  const y = useTransform(
    progress,
    idx === 0 ? [0, 1] : [start, end],
    idx === 0 ? ["0%", "0%"] : ["100vh", "0%"]
  );

  const opacity = useTransform(
    progress,
    idx === 0 ? [0, 1] : [Math.max(0, start - 0.005), start],
    idx === 0 ? [1, 1] : [0, 1]
  );

  const pointerEvents = useTransform(progress, (v) => 
    idx === 0 || v >= start ? "auto" : "none"
  );

  return (
    <motion.div
      style={{
        y,
        opacity,
        pointerEvents,
        zIndex: idx + 1,
      }}
      className="absolute inset-0"
    >
      {/* Clean Premium Light Card Shell - NO ROUNDED EDGES */}
      <div className="w-full h-full bg-white border border-slate-200 flex flex-col justify-between overflow-hidden relative shadow-md">
        
        {/* Top Header Bar - Saini Blue */}
        <div className="w-full bg-[#FAFCFF] border-b border-slate-200 px-5 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 select-none shrink-0 relative z-10">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 flex items-center justify-center font-mono text-[11px] font-bold bg-[#1572B8] text-white shadow-sm">
              {srv.number}
            </span>
            <span className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-widest text-[#0E4A8A]">
              MODULE {srv.number} // {srv.title}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="hidden md:inline-block px-3 py-1 bg-white border border-slate-200 text-[#1572B8] font-sans text-[10px] uppercase tracking-wider font-bold shadow-sm">
              {srv.premiumPositioning}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between overflow-hidden relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start h-full">
            
            {/* Left Column: Title, Short Description, Pain Points & CTAs */}
            <div className="lg:col-span-5 flex flex-col h-full gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-sans font-extrabold text-slate-900 tracking-tight leading-tight">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-2 line-clamp-3">
                  {srv.shortDescription}
                </p>
              </div>

              {/* Solves Friction Box */}
              <div className="p-3.5 bg-rose-50/50 border border-rose-100 relative overflow-hidden shrink-0 mt-auto">
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-rose-500" />
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-rose-700 flex items-center gap-1.5 mb-2">
                  <Zap className="w-3 h-3 text-rose-500" />
                  Core Roadblocks Eliminated
                </span>
                <ul className="space-y-1.5 text-[11px] text-slate-700 font-medium pl-1">
                  {srv.whatWeSolve.slice(0, 2).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold shrink-0 mt-[1px]">✕</span>
                      <span className="leading-snug line-clamp-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 shrink-0 pt-2">
                <Link
                  href={`/services/${srv.slug}`}
                  className="group flex items-center justify-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-700 text-[11px] font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md"
                >
                  <span>Explore Module</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-colors" />
                </Link>
                <Link
                  href="/#contact-form"
                  className="group flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#1572B8] to-[#0E4A8A] hover:from-[#38A9EB] hover:to-[#1572B8] text-white text-[11px] font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>Book Strategy</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Execution Capabilities & Direct Deliverables */}
            <div className="lg:col-span-7 flex flex-col gap-4 h-full overflow-hidden">
              
              {/* 4 Capabilities Grid */}
              <div className="flex-1 overflow-y-auto pr-1 space-y-3">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-2 shrink-0">
                  <span className="w-1.5 h-1.5 bg-[#38A9EB]" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-bold">
                    Execution Capabilities
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {srv.capabilities.map((cap, i) => (
                    <div 
                      key={i} 
                      className="p-3.5 bg-[#FAFCFF] border border-slate-200 hover:border-[#38A9EB]/40 hover:bg-white transition-colors duration-300 space-y-1.5 group/cap"
                    >
                      <div className="flex items-center gap-2 font-sans font-bold text-xs text-slate-900 group-hover/cap:text-[#1572B8] transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1572B8] group-hover/cap:scale-110 transition-transform shrink-0" />
                        <span className="line-clamp-1">{cap.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-normal pl-5.5 line-clamp-2">
                        {cap.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Commercial Deliverables Bar */}
              <div className="p-3.5 bg-slate-900 border border-slate-800 space-y-2 shrink-0 text-white">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#67C7F8] flex items-center gap-2 font-bold">
                  <Target className="w-3 h-3 text-[#38A9EB]" />
                  Direct Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 text-[10px] text-slate-300 font-medium">
                  {srv.deliverables.slice(0, 4).map((del, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#38A9EB]" />
                      <span className="line-clamp-1">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </motion.div>
  );
}

function MobileServiceCard({ srv }: { srv: ServiceItem }) {
  return (
    <div className="w-[84vw] max-w-[320px] h-full min-h-[460px] bg-white border border-slate-200/90 shadow-md flex flex-col justify-between overflow-hidden shrink-0 select-none text-left">
      {/* Top Header Bar */}
      <div className="w-full bg-[#FAFCFF] border-b border-slate-200 px-4 py-2.5 flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2.5">
          <span className="w-6 h-6 flex items-center justify-center font-mono text-[10px] font-bold bg-[#1572B8] text-white shadow-xs">
            {srv.number}
          </span>
          <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#0E4A8A] truncate">
            MODULE {srv.number} // {srv.title}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          <h3 className="text-lg font-sans font-black text-slate-900 tracking-tight leading-snug line-clamp-1">
            {srv.title}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2 h-9">
            {srv.shortDescription}
          </p>
        </div>

        {/* Core Roadblocks Eliminated */}
        <div className="p-3 bg-rose-50/60 border border-rose-100 relative overflow-hidden shrink-0 min-h-[96px] flex flex-col justify-center">
          <div className="absolute top-0 left-0 bottom-0 w-1 bg-rose-500" />
          <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-rose-700 flex items-center gap-1.5 mb-1.5">
            <Zap className="w-3 h-3 text-rose-500" />
            Core Roadblocks Eliminated
          </span>
          <ul className="space-y-1 text-[11px] text-slate-700 font-medium pl-1">
            {srv.whatWeSolve.slice(0, 2).map((item, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="text-rose-500 font-bold shrink-0 mt-[1px]">✕</span>
                <span className="leading-snug line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 shrink-0">
          <Link
            href={`/services/${srv.slug}`}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold uppercase tracking-wider transition-all shadow-xs"
          >
            <span>Explore</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </Link>
          <Link
            href="/#contact-form"
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#1572B8] hover:bg-[#0E4A8A] text-white text-[10px] font-bold uppercase tracking-wider transition-all shadow-xs"
          >
            <span>Strategy</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Direct Deliverables Footer */}
        <div className="p-3 bg-slate-900 border border-slate-800 space-y-1.5 text-white shrink-0 min-h-[76px] flex flex-col justify-center">
          <span className="text-[9px] font-mono uppercase tracking-wider text-[#67C7F8] flex items-center gap-1.5 font-bold">
            <Target className="w-3 h-3 text-[#38A9EB]" />
            Direct Deliverables
          </span>
          <div className="space-y-1 text-[10px] text-slate-300 font-medium">
            {srv.deliverables.slice(0, 2).map((del, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-[#38A9EB] shrink-0" />
                <span className="truncate">{del}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function InteractiveServicesHub() {
  const serviceList = Object.values(SERVICES);
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    mass: 0.5,
    restDelta: 0.0001
  });

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const target = Math.max(0, Math.min(serviceList.length - 1, index));
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
    <>
      {/* ========================================================= */}
      {/* 1. MOBILE/PHONE VIEW: USER-CONTROLLED HORIZONTAL CAROUSEL  */}
      {/* Zero auto-movement, zero blur overlays, centered cards    */}
      {/* ========================================================= */}
      <div className="block md:hidden w-full py-4 space-y-5">
        {/* Mobile Section Header */}
        <div className="space-y-3 border-b border-slate-300 pb-4">
          <div className="flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1572B8]">
              <Layers className="w-3.5 h-3.5 text-[#1572B8]" />
              Capabilities Matrix
            </div>
            <Link
              href="/services"
              className="flex items-center justify-center gap-1 px-3 py-1.5 bg-slate-900 hover:bg-[#1572B8] text-white text-[10px] font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              <span>View All</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          <h2 className="text-2xl font-sans font-black text-slate-900 tracking-tight leading-tight">
            What We Do: 8 Core Growth Services
          </h2>

          {/* User Controls: Counter and Prev / Next arrows */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-slate-700">
              <span className="text-[#1572B8]">0{activeIndex + 1}</span>
              <span className="text-slate-400">/</span>
              <span className="text-slate-500">0{serviceList.length}</span>
              <span className="text-[10px] font-sans font-normal text-slate-500 ml-1">· Swipe cards left/right</span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scrollToIndex(activeIndex - 1)}
                disabled={activeIndex === 0}
                className={`w-8 h-8 rounded-md border flex items-center justify-center transition-colors cursor-pointer ${
                  activeIndex === 0
                    ? "border-slate-200 text-slate-300 bg-slate-50 cursor-not-allowed"
                    : "border-slate-300 text-slate-800 bg-white hover:bg-slate-100 hover:text-[#1572B8] shadow-xs"
                }`}
                aria-label="Previous service module"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollToIndex(activeIndex + 1)}
                disabled={activeIndex === serviceList.length - 1}
                className={`w-8 h-8 rounded-md border flex items-center justify-center transition-colors cursor-pointer ${
                  activeIndex === serviceList.length - 1
                    ? "border-slate-200 text-slate-300 bg-slate-50 cursor-not-allowed"
                    : "border-slate-300 text-slate-800 bg-white hover:bg-slate-100 hover:text-[#1572B8] shadow-xs"
                }`}
                aria-label="Next service module"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* User-Controlled Swipeable Card Container: Centered Alignment */}
        <div 
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex items-stretch gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 -mx-4 px-[calc((100vw-min(84vw,320px))/2)] no-scrollbar touch-pan-x"
        >
          {serviceList.map((srv, idx) => (
            <div key={srv.slug} className="snap-center shrink-0 flex flex-col h-full">
              <MobileServiceCard srv={srv} />
            </div>
          ))}
        </div>

        {/* Interactive Progress Indicator Dots */}
        <div className="flex items-center justify-center gap-1.5 pt-1">
          {serviceList.map((srv, idx) => (
            <button
              key={srv.slug}
              type="button"
              onClick={() => scrollToIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                activeIndex === idx 
                  ? "w-6 bg-[#1572B8]" 
                  : "w-1.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Jump to module 0${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. DESKTOP/LAPTOP VIEW: PINNED STICKY STACKED DECK        */}
      {/* 100% Preserved: Original desktop interaction intact       */}
      {/* ========================================================= */}
      <div ref={containerRef} className="hidden md:block relative h-[400vh] sm:h-[450vh] lg:h-[500vh]">
        
        {/* Pinned Sticky Stage - Perfectly symmetrical to section padding */}
        <div className="sticky top-12 sm:top-16 w-full h-[calc(100vh-6rem)] sm:h-[calc(100vh-8rem)] min-h-[500px] flex flex-col justify-start">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-slate-300 pb-3 mb-3 shrink-0">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1572B8] mb-1">
                <Layers className="w-3.5 h-3.5 text-[#1572B8]" />
                Capabilities Matrix
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-black text-slate-900 tracking-tight">
                What We Do: 8 Core Growth Services
              </h2>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/services"
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-[#1572B8] text-white text-[11px] font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                <span>View All Services</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card Deck Viewport - Constrained width so it's not too wide */}
          <div className="relative w-full max-w-5xl mx-auto flex-1">
            {serviceList.map((srv, idx) => (
              <ServiceSlideCard
                key={srv.slug}
                srv={srv}
                idx={idx}
                total={serviceList.length}
                progress={smoothProgress}
              />
            ))}
          </div>

        </div>

      </div>
    </>
  );
}
