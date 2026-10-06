"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Target, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { SOLUTIONS } from "@/data/solutions";

export function InteractiveSolutionsGrid() {
  const solutionList = Object.values(SOLUTIONS);

  const ACCENTS = [
    { badgeBg: "bg-[#BFDBFE]", border: "border-black", tagColor: "text-[#1D4ED8]" },
    { badgeBg: "bg-[#FEF08A]", border: "border-black", tagColor: "text-[#A16207]" },
    { badgeBg: "bg-[#BBF7D0]", border: "border-black", tagColor: "text-[#15803D]" },
    { badgeBg: "bg-[#FED7AA]", border: "border-black", tagColor: "text-[#C2410C]" },
    { badgeBg: "bg-[#E9D5FF]", border: "border-black", tagColor: "text-[#7E22CE]" },
  ];

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isGliding, setIsGliding] = useState(false);
  const [shadowStyle, setShadowStyle] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
    opacity: number;
  }>({ top: 0, left: 0, width: 0, height: 0, opacity: 0 });

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeHoverRef = useRef(false);

  const updateShadowPosition = (index: number, animate: boolean) => {
    const el = cardRefs.current[index];
    if (!el) return;

    // Offset strictly to the right and bottom (refined 5px width)
    const OFFSET_RIGHT = 5;
    const OFFSET_BOTTOM = 5;

    setIsGliding(animate);
    setShadowStyle({
      top: el.offsetTop + OFFSET_BOTTOM,
      left: el.offsetLeft + OFFSET_RIGHT,
      width: el.offsetWidth,
      height: el.offsetHeight,
      opacity: 1,
    });
    setHoveredIdx(index);
  };

  const handleMouseEnter = (index: number) => {
    const shouldAnimate = activeHoverRef.current;
    activeHoverRef.current = true;
    updateShadowPosition(index, shouldAnimate);
  };

  const handleContainerMouseLeave = () => {
    activeHoverRef.current = false;
    setHoveredIdx(null);
    setShadowStyle((prev) => ({ ...prev, opacity: 0 }));
    setIsGliding(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (hoveredIdx !== null) {
        updateShadowPosition(hoveredIdx, false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [hoveredIdx]);

  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider mb-3 font-bold shadow-[2px_2px_0px_#000000]">
            <Target className="w-3.5 h-3.5" />
            Problem-First Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black tracking-tight">
            What Challenge Needs Solving?
          </h2>
          <p className="text-zinc-700 text-sm sm:text-base mt-1 max-w-xl font-medium">
            We architect integrated acquisition campaigns tailored to your specific commercial roadblock.
          </p>
        </div>
        <Link
          href="/solutions"
          className="neo-btn-white w-fit shrink-0"
        >
          <span>View All Solutions</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </Link>
      </div>

      {/* Grid Container with Shared Animated Traveling Shadow */}
      <div 
        ref={containerRef}
        onMouseLeave={handleContainerMouseLeave}
        className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"
      >
        {/* The Smooth Traveling Shadow Element (Lives behind cards, glides from card to card) */}
        <motion.div
          className="absolute bg-black rounded-[2rem] pointer-events-none z-0"
          initial={false}
          animate={{
            top: shadowStyle.top,
            left: shadowStyle.left,
            width: shadowStyle.width,
            height: shadowStyle.height,
            opacity: shadowStyle.opacity,
          }}
          transition={{
            top: isGliding 
              ? { type: "spring", stiffness: 350, damping: 30, mass: 0.8 } 
              : { duration: 0 },
            left: isGliding 
              ? { type: "spring", stiffness: 350, damping: 30, mass: 0.8 } 
              : { duration: 0 },
            width: isGliding 
              ? { type: "spring", stiffness: 350, damping: 30, mass: 0.8 } 
              : { duration: 0 },
            height: isGliding 
              ? { type: "spring", stiffness: 350, damping: 30, mass: 0.8 } 
              : { duration: 0 },
            opacity: { duration: 0.2, ease: "easeInOut" },
          }}
        />

        {/* Five Cards: 2 on Top Row, 3 on Bottom Row */}
        {solutionList.map((sol, index) => {
          const accent = ACCENTS[index % ACCENTS.length];
          // First two cards: 3 cols each (top row). Next three cards: 2 cols each (bottom row)
          const spanClass = index < 2 ? "lg:col-span-3" : "lg:col-span-2";
          const isHovered = hoveredIdx === index;

          return (
            <div
              key={sol.slug}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              className={`${spanClass} bg-white rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between border-2 border-black group relative overflow-hidden z-10`}
            >
              {/* Corner Accent Ribbon */}
              <div className={`absolute top-0 right-0 w-24 h-24 ${accent.badgeBg} opacity-20 -mr-12 -mt-12 rounded-full pointer-events-none`} />

              <div className="space-y-4 relative z-10">
                {/* Header: Number & Tagline touching right edge */}
                <div className="flex items-center justify-between gap-2 -mr-6 sm:-mr-8">
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`w-8 h-8 rounded-xl ${accent.badgeBg} border-2 border-black text-black flex items-center justify-center font-mono text-xs font-extrabold shrink-0 shadow-[2px_2px_0px_#000000]`}>
                      {sol.number}
                    </span>
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-zinc-500">
                      DOSSIER
                    </span>
                  </div>
                  <span className={`${accent.badgeBg} border-2 border-r-0 border-black text-black font-mono font-bold uppercase tracking-wider text-[10px] pl-3.5 pr-4 sm:pr-6 py-1 rounded-l-full shadow-[-1.5px_2px_0px_#000000] whitespace-nowrap shrink-0`}>
                    {sol.tagline}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors tracking-tight leading-snug pt-1">
                  {sol.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                  {sol.shortDescription}
                </p>

                {/* Measured Commercial Benchmark */}
                <div className={`p-4 rounded-2xl ${index < 2 ? 'bg-[#EFF6FF]' : 'bg-[#FAF7EF]'} border-2 border-black space-y-1.5 shadow-[2px_2px_0px_#000000]`}>
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest font-bold block">
                    Proven Target Benchmark:
                  </span>
                  <div className="flex items-baseline flex-wrap gap-1.5">
                    <span className="text-xl font-serif font-bold text-[#2563EB]">
                      {sol.metricsThatMatter[0].metric}
                    </span>
                    <span className="text-xs font-sans text-zinc-800 font-medium leading-tight">
                      — {sol.metricsThatMatter[0].context}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-5 mt-5 border-t-2 border-black/10 flex items-center justify-between gap-3 relative z-10">
                <Link
                  href={`/solutions/${sol.slug}`}
                  className="text-xs font-mono text-black hover:text-[#2563EB] font-bold flex items-center gap-1 uppercase tracking-wider shrink-0 transition-colors"
                >
                  <span>Inspect Solution</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </Link>

                <Link
                  href="/book"
                  className={`px-4 py-1.5 rounded-full ${accent.badgeBg} border-2 border-black text-black text-xs font-mono font-bold shadow-[2px_2px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#000000] transition-all whitespace-nowrap shrink-0`}
                >
                  Scope Call
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
