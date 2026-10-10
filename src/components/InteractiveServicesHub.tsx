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

const ACCENT_STYLES = [
  { badgeBg: "bg-blue-600 text-white", headerBg: "bg-blue-50/50", borderAccent: "border-blue-100", textAccent: "text-blue-600" },
  { badgeBg: "bg-indigo-600 text-white", headerBg: "bg-indigo-50/50", borderAccent: "border-indigo-100", textAccent: "text-indigo-600" },
  { badgeBg: "bg-sky-600 text-white", headerBg: "bg-sky-50/50", borderAccent: "border-sky-100", textAccent: "text-sky-600" },
  { badgeBg: "bg-emerald-600 text-white", headerBg: "bg-emerald-50/50", borderAccent: "border-emerald-100", textAccent: "text-emerald-600" },
  { badgeBg: "bg-violet-600 text-white", headerBg: "bg-violet-50/50", borderAccent: "border-violet-100", textAccent: "text-violet-600" },
  { badgeBg: "bg-cyan-600 text-white", headerBg: "bg-cyan-50/50", borderAccent: "border-cyan-100", textAccent: "text-cyan-600" },
  { badgeBg: "bg-blue-700 text-white", headerBg: "bg-blue-50/50", borderAccent: "border-blue-100", textAccent: "text-blue-700" },
  { badgeBg: "bg-slate-900 text-white", headerBg: "bg-slate-50/70", borderAccent: "border-slate-200", textAccent: "text-slate-900" }
];

interface CardProps {
  srv: ServiceItem;
  idx: number;
  total: number;
  progress: MotionValue<number>;
  accent: (typeof ACCENT_STYLES)[0];
}

function ServiceSlideCard({ srv, idx, total, progress, accent }: CardProps) {
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
      className="absolute top-0 left-0 right-0 bottom-0"
    >
      {/* Modern Card Shell */}
      <div className="w-full h-full bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-900/5 flex flex-col justify-between overflow-hidden">
        
        {/* Top Header Bar */}
        <div className={`w-full ${accent.headerBg} border-b border-slate-200/80 px-5 sm:px-7 py-3 sm:py-3.5 flex items-center justify-between gap-3 select-none shrink-0`}>
          <div className="flex items-center gap-3">
            <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${accent.badgeBg} flex items-center justify-center font-sans text-xs sm:text-sm font-bold shadow-xs`}>
              {srv.number}
            </span>
            <span className="text-xs sm:text-sm font-sans font-bold uppercase tracking-wider text-slate-800">
              SERVICE {srv.number} OF 08 • {srv.title}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="hidden md:inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 font-sans text-xs font-semibold shadow-2xs">
              {srv.premiumPositioning}
            </span>
            <span className="text-[11px] sm:text-xs font-sans font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
              {srv.strategicRole}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-7 lg:p-8 flex-1 flex flex-col justify-between overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
            
            {/* Left Column: Title, Short Description, Pain Points & CTAs */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-sans font-extrabold text-slate-900 tracking-tight leading-snug">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-1.5">
                  {srv.shortDescription}
                </p>
              </div>

              {/* Solves Friction Box */}
              <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-2">
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-rose-900 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-rose-600" />
                  Core Roadblocks Eliminated:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                  {srv.whatWeSolve.slice(0, 2).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold shrink-0">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <Link
                  href={`/services/${srv.slug}`}
                  className="neo-btn-white text-xs"
                >
                  <span>Explore Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/book"
                  className="neo-btn-blue text-xs"
                >
                  <span>Book Strategy Call</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Execution Capabilities & Direct Deliverables */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* 4 Capabilities Grid */}
              <div className="space-y-2">
                <span className="text-xs font-sans uppercase tracking-wider text-slate-500 font-bold block">
                  Included Execution Capabilities:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {srv.capabilities.map((cap, i) => (
                    <div 
                      key={i} 
                      className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 space-y-1 transition-colors"
                    >
                      <div className="flex items-center gap-2 font-sans font-semibold text-sm text-slate-900">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span className="line-clamp-1">{cap.title}</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal pl-6 line-clamp-2">
                        {cap.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Commercial Deliverables Bar */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 space-y-2 shadow-2xs">
                <span className="text-xs font-sans font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-blue-600" />
                  Direct Commercial Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-medium">
                  {srv.deliverables.slice(0, 4).map((del, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                      <span className="font-semibold line-clamp-1">{del}</span>
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
      
      {/* Pinned Sticky Stage */}
      <div className="sticky top-20 sm:top-24 w-full h-[620px] sm:h-[560px] lg:h-[540px] flex flex-col justify-start">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-slate-200/80 pb-4 mb-4 bg-white shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-sans font-semibold mb-2">
              <Layers className="w-3.5 h-3.5" />
              Capabilities Matrix
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-extrabold text-slate-900 tracking-tight">
              What We Do: 8 Core Growth Services
            </h2>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/services"
              className="neo-btn-white text-xs py-2 px-4"
            >
              <span>View All Services</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Card Deck Viewport */}
        <div className="relative w-full flex-1">
          {serviceList.map((srv, idx) => (
            <ServiceSlideCard
              key={srv.slug}
              srv={srv}
              idx={idx}
              total={serviceList.length}
              progress={smoothProgress}
              accent={ACCENT_STYLES[idx % ACCENT_STYLES.length]}
            />
          ))}
        </div>

      </div>

    </div>
  );
}
