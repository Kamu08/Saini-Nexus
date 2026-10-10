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
  const step = 0.88 / (total - 1);
  const start = idx === 0 ? 0 : (idx - 1) * step;
  const end = idx === 0 ? 0 : idx * step;

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
      className="absolute top-0 left-0 right-0 bottom-0 py-1"
    >
      {/* Sleek Dark Card Shell - ROUNDED CORNERS */}
      <div className="w-full h-full bg-[#0A1628] rounded-3xl border border-[#1572B8]/30 flex flex-col justify-between overflow-hidden relative shadow-[0_-5px_30px_rgba(0,0,0,0.4)]">
        
        {/* Glow behind card */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-100"
          style={{ background: `radial-gradient(ellipse at top left, rgba(56,169,235,0.1), transparent 70%)` }}
        />

        {/* Top Header Bar */}
        <div className="w-full bg-[#0F1E36]/90 backdrop-blur-md border-b border-[#1572B8]/20 px-5 sm:px-7 py-3 flex items-center justify-between gap-3 select-none shrink-0 relative z-10">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs sm:text-sm font-bold bg-[#38a9eb]/10 text-[#38a9eb] border border-[#38a9eb]/30 shadow-sm">
              {srv.number}
            </span>
            <span className="text-xs sm:text-sm font-sans font-bold uppercase tracking-widest text-slate-100">
              MODULE {srv.number} // {srv.title}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="hidden md:inline-block px-3 py-1 bg-white/5 border border-white/10 text-[#67C7F8] font-sans text-xs font-semibold rounded-full shadow-sm">
              {srv.premiumPositioning}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between overflow-hidden relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start h-full">
            
            {/* Left Column: Title, Short Description, Pain Points & CTAs */}
            <div className="lg:col-span-5 flex flex-col h-full gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-sans font-black text-white tracking-tight leading-tight drop-shadow-md">
                  {srv.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal mt-2 line-clamp-3">
                  {srv.shortDescription}
                </p>
              </div>

              {/* Solves Friction Box */}
              <div className="p-3.5 bg-rose-950/20 border border-rose-900/50 rounded-2xl relative overflow-hidden shrink-0 mt-auto shadow-sm">
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-rose-500/50" />
                <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-rose-400 flex items-center gap-2 mb-2">
                  <Zap className="w-3.5 h-3.5 text-rose-500" />
                  Core Roadblocks Eliminated
                </span>
                <ul className="space-y-1.5 text-[11px] text-slate-300 font-medium pl-1">
                  {srv.whatWeSolve.slice(0, 2).map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                      <span className="leading-snug line-clamp-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons at bottom of left col */}
              <div className="flex flex-wrap items-center gap-2.5 shrink-0 pt-1">
                <Link
                  href={`/services/${srv.slug}`}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>Explore</span>
                </Link>
                <Link
                  href="/book"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1572B8] hover:bg-[#38A9EB] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
                >
                  <span>Book Strategy Call</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Execution Capabilities & Direct Deliverables */}
            <div className="lg:col-span-7 flex flex-col gap-4 h-full overflow-hidden">
              
              {/* 4 Capabilities Grid */}
              <div className="flex-1 overflow-y-auto pr-1 space-y-3">
                <div className="flex items-center gap-2 border-b border-white/10 pb-2 shrink-0">
                  <span className="w-1.5 h-1.5 bg-[#38A9EB] rounded-full shadow-[0_0_8px_#38a9eb]" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#38A9EB] font-bold">
                    Execution Capabilities
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {srv.capabilities.map((cap, i) => (
                    <div 
                      key={i} 
                      className="p-3.5 bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors space-y-1.5 rounded-xl group/cap"
                    >
                      <div className="flex items-center gap-2.5 font-sans font-bold text-sm text-white">
                        <CheckCircle2 className="w-4 h-4 text-[#38a9eb] shrink-0 opacity-80 group-hover/cap:opacity-100 transition-opacity" />
                        <span className="line-clamp-1">{cap.title}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed font-normal pl-6.5 line-clamp-2">
                        {cap.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Commercial Deliverables Bar */}
              <div className="p-3.5 bg-[#050A14] border border-[#1572b8]/30 rounded-xl space-y-2 shrink-0">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#67c7f8] flex items-center gap-2 font-bold">
                  <Target className="w-3.5 h-3.5 text-[#38a9eb]" />
                  Direct Commercial Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-[11px] text-slate-300 font-medium">
                  {srv.deliverables.slice(0, 4).map((del, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-[#38a9eb]" />
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
    stiffness: 280,
    damping: 32,
    mass: 0.1,
    restDelta: 0.0001
  });

  return (
    <div ref={containerRef} className="relative h-[360vh] sm:h-[400vh]">
      
      {/* Pinned Sticky Stage - Tightened top spacing and responsive height */}
      <div className="sticky top-6 sm:top-8 w-full h-[calc(100vh-80px)] min-h-[500px] max-h-[600px] flex flex-col justify-start">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-[#1572B8]/20 pb-3 mb-3 shrink-0">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#38A9EB] mb-1">
              <span className="w-2 h-2 rounded-full bg-[#38A9EB] shadow-[0_0_8px_#38A9EB] animate-pulse" />
              Capabilities Matrix
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-black text-white tracking-tight">
              What We Do: 8 Core Growth Services
            </h2>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/services"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider transition-colors shadow-md backdrop-blur-sm"
            >
              <span>View All Services</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Card Deck Viewport - Decreased width to max-w-4xl for tighter layout */}
        <div className="relative w-full max-w-4xl mx-auto flex-1">
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
