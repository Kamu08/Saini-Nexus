"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Target 
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
                  href="/book"
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

export function InteractiveServicesHub() {
  const serviceList = Object.values(SERVICES);
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={containerRef} className="relative h-[400vh] sm:h-[450vh] lg:h-[500vh]">
      
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
  );
}
