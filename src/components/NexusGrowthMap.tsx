"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  ChevronLeft,
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  Layers, 
  Workflow, 
  Zap, 
  TrendingUp,
  FileCheck2,
  ShieldCheck,
  Check
} from "lucide-react";

interface FrameworkStage {
  id: string;
  step: string;
  phase: string;
  title: string;
  subtitle: string;
  question: string;
  description: string;
  deliverables: string[];
  metrics: string;
  metricLabel: string;
  salesImpact: string;
}

const FRAMEWORK_STAGES: FrameworkStage[] = [
  {
    id: "buyer-context",
    step: "01",
    phase: "PHASE 1: FOUNDATION",
    title: "Buyer Context",
    subtitle: "Understanding How Your Buyers Actually Buy",
    question: "Who is in the buying room, what triggers their search, and why do they hesitate?",
    description: "We map the complete buying committee (Economic Buyer, Technical Evaluator, Champion), studying internal purchase triggers and the friction points that delay decisions.",
    deliverables: [
      "Buying Committee Persona Dossier (5–7 Stakeholders)",
      "95% Out-of-Market Buying Trigger Research",
      "Decision Hesitation & Career-Risk Audit"
    ],
    metrics: "100% Committee Alignment",
    metricLabel: "Validation Standard",
    salesImpact: "Prevents messaging disconnect and targets real buying triggers."
  },
  {
    id: "positioning",
    step: "02",
    phase: "PHASE 1: FOUNDATION",
    title: "Positioning & POV",
    subtitle: "Articulating Commercial Point-of-View",
    question: "What is your defensible commercial point of view against industry noise?",
    description: "We translate deep technical capabilities into high-stakes business value, highlighting the cost of inaction and differentiating your firm against generic competitors.",
    deliverables: [
      "Category Point-of-View & Commercial Thesis",
      "Competitive Moat & Anti-Cliché Value Proposition",
      "Executive Messaging Architecture by Role"
    ],
    metrics: "Defensible Category Moat",
    metricLabel: "Strategic Outcome",
    salesImpact: "Arms internal champions with sharp, anti-cliché commercial ammunition."
  },
  {
    id: "content",
    step: "03",
    phase: "PHASE 2: ENGINE & ASSETS",
    title: "Editorial Content",
    subtitle: "High-Craft Technical Proof Assets",
    question: "How do you educate buyers and demonstrate operational competence without friction?",
    description: "We produce dense, insightful native Document Ads, architecture breakdowns, and founder essays that solve real problems right inside the buyer's LinkedIn feed.",
    deliverables: [
      "Native 8-Slide Technical PDF Document Ads",
      "Executive Ghostwriting & Thought Leadership Essays",
      "Un-gated Strategic Playbooks & Benchmarks"
    ],
    metrics: "4.8x Higher In-Feed Save Rate",
    metricLabel: "Engagement Quality",
    salesImpact: "Educates buyers pre-RFP so they arrive pre-sold on your competence."
  },
  {
    id: "audience",
    step: "04",
    phase: "PHASE 2: ENGINE & ASSETS",
    title: "Audience Calibration",
    subtitle: "Precision ICP & Negative Filtering",
    question: "How do you guarantee that zero marketing spend is wasted on low-fit audiences?",
    description: "We build matched account lists (ABM), apply strict seniority exclusions, and filter out students, junior coders, and job seekers to protect ad spend efficiency.",
    deliverables: [
      "Matched Account List (450+ Verified ICP Accounts)",
      "Multi-Layer Seniority & Job Title Exclusion Filter",
      "Technographic & Firmographic Qualification Gates"
    ],
    metrics: "Zero Vanity Ad Waste",
    metricLabel: "Efficiency Standard",
    salesImpact: "Guarantees 100% of impression budget reaches verified decision-makers."
  },
  {
    id: "distribution",
    step: "05",
    phase: "PHASE 3: ORCHESTRATION & ARR",
    title: "Paid & Organic Distribution",
    subtitle: "Full-Funnel Multi-Touch Orchestration",
    question: "How do you maintain continuous executive presence across target accounts?",
    description: "We combine organic company page authority, Thought Leader Ads from executives, and matched account retargeting to surround buying groups with consistent proof.",
    deliverables: [
      "LinkedIn Campaign Manager Multi-Tier Architecture",
      "Thought Leader Ad Amplification Framework",
      "Account-Level Frequency Capping & Retargeting"
    ],
    metrics: "3.2x Higher CTR via Thought Leader Ads",
    metricLabel: "Executive Ad Lift",
    salesImpact: "Surrounds buying committee accounts with steady executive authority."
  },
  {
    id: "demand",
    step: "06",
    phase: "PHASE 3: ORCHESTRATION & ARR",
    title: "Demand Creation",
    subtitle: "Nurturing the 95% Out-of-Market Pool",
    question: "How do you build trust before buyers enter an active purchasing RFP?",
    description: "We nurture accounts across the full awareness curve, creating brand affinity so that when buyers enter a buying window, your firm is the only logical choice.",
    deliverables: [
      "Full-Funnel Demand Creation & Capture Architecture",
      "Account Intent Scoring & Signal Tracking",
      "Pre-Call Buyer Education Assets"
    ],
    metrics: "48% Faster Sales Cycle Velocity",
    metricLabel: "Deal Velocity Lift",
    salesImpact: "Shortens evaluation cycles by pre-answering key buyer objections."
  },
  {
    id: "pipeline",
    step: "07",
    phase: "PHASE 3: ORCHESTRATION & ARR",
    title: "Pipeline & ARR",
    subtitle: "Sales-Accepted Opportunities & Closed ARR",
    question: "How does marketing activity connect to qualified pipeline and ARR?",
    description: "We capture high-intent leads via native in-feed forms with verified work emails, routing enriched submissions to sales in under 30 seconds with closed-loop attribution.",
    deliverables: [
      "Native In-Feed Lead Gen Form with Qualification Gates",
      "Instant CRM & Slack Webhook Integration (<30s SLA)",
      "Sales Acceptance Rate (SAR) & Closed-Loop Attribution"
    ],
    metrics: "82% Sales Acceptance Rate (SAR)",
    metricLabel: "Commercial Standard",
    salesImpact: "Routes enriched, qualified discovery opportunities directly to reps."
  }
];

export function NexusGrowthMap() {
  const [activeStageId, setActiveStageId] = useState<string>("buyer-context");
  const currentIndex = FRAMEWORK_STAGES.findIndex((s) => s.id === activeStageId);
  const currentStage = FRAMEWORK_STAGES[currentIndex] || FRAMEWORK_STAGES[0];

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveStageId(FRAMEWORK_STAGES[currentIndex - 1].id);
    } else {
      setActiveStageId(FRAMEWORK_STAGES[FRAMEWORK_STAGES.length - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < FRAMEWORK_STAGES.length - 1) {
      setActiveStageId(FRAMEWORK_STAGES[currentIndex + 1].id);
    } else {
      setActiveStageId(FRAMEWORK_STAGES[0].id);
    }
  };

  return (
    <section className="w-full bg-slate-950 text-white rounded-3xl p-6 sm:p-10 lg:p-14 space-y-10 relative overflow-hidden border border-slate-800 shadow-2xl">
      
      {/* Background Architectural Tech Grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#60A5FA 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />

      {/* Decorative Glow Orb */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* ========================================================= */}
      {/* SECTION HEADER: TITLE & CORE STATS                        */}
      {/* ========================================================= */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-800/80 pb-8 relative z-10">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Workflow className="w-4 h-4 text-blue-400" />
            <span>03 · Commercial Engine</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The Saini Nexus Commercial Architecture.
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
            Strategy before random execution. We engineer an integrated 7-stage pipeline connecting executive buyer psychology directly to sales-accepted opportunities and ARR.
          </p>
        </div>

        {/* 3 Quick Performance Anchors */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3 shrink-0">
          <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl text-center shadow-xs">
            <span className="block text-base sm:text-xl font-bold text-blue-400">07</span>
            <span className="text-[10px] uppercase text-slate-400 font-medium">Stages</span>
          </div>
          <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl text-center shadow-xs">
            <span className="block text-base sm:text-xl font-bold text-emerald-400">82%</span>
            <span className="text-[10px] uppercase text-slate-400 font-medium">SAR SLA</span>
          </div>
          <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl text-center shadow-xs">
            <span className="block text-base sm:text-xl font-bold text-amber-400">&lt;30s</span>
            <span className="text-[10px] uppercase text-slate-400 font-medium">Routing</span>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 7-STAGE PIPELINE STEPPER TRACK                            */}
      {/* ========================================================= */}
      <div className="space-y-3 relative z-10">
        <div className="flex items-center justify-between text-xs uppercase tracking-wider text-slate-400 font-medium">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Select Stage to Inspect Blueprint
          </span>
          <span className="font-semibold text-slate-200">
            {currentIndex + 1} / 07 Active
          </span>
        </div>

        {/* Stepper Buttons Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {FRAMEWORK_STAGES.map((st, idx) => {
            const isActive = st.id === activeStageId;
            return (
              <button
                key={st.id}
                onClick={() => setActiveStageId(st.id)}
                className={`p-3 rounded-xl text-left border transition-all flex flex-col justify-between gap-2 cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white font-semibold border-blue-500 shadow-md"
                    : "bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800/90 border-slate-800/80 hover:border-slate-700 shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                    isActive
                      ? "bg-white text-blue-600"
                      : "bg-slate-800 text-slate-300 border border-slate-700"
                  }`}>
                    {st.step}
                  </span>
                  <span className={`text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded ${
                    isActive
                      ? "bg-white/20 text-white font-semibold"
                      : "bg-slate-800 text-slate-400"
                  }`}>
                    P{idx < 2 ? "1" : idx < 4 ? "2" : "3"}
                  </span>
                </div>

                <div>
                  <span className="block text-xs font-bold tracking-tight line-clamp-1">
                    {st.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================= */}
      {/* ACTIVE STAGE BLUEPRINT SHOWCASE (MODERN DOSSIER)          */}
      {/* ========================================================= */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStage.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10"
        >
          {/* Left Column: Strategic Thesis & Problem Dossier */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-9 flex flex-col justify-between space-y-6 shadow-md">
            <div className="space-y-5">
              
              {/* Badge & Phase Indicator */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold">
                  STAGE {currentStage.step} OF 07
                </span>
                <span className="text-xs font-medium uppercase tracking-widest text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700/60">
                  {currentStage.phase}
                </span>
              </div>

              {/* Subtitle */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                {currentStage.subtitle}
              </h3>

              {/* Core Strategic Question Callout */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Core Strategic Question</span>
                </div>
                <p className="text-base sm:text-lg text-slate-200 font-medium italic leading-relaxed">
                  &ldquo;{currentStage.question}&rdquo;
                </p>
              </div>

              {/* Operational Narrative */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                {currentStage.description}
              </p>

              {/* Sales Impact Note */}
              <div className="p-3 bg-slate-800/60 border border-slate-700/60 rounded-xl flex items-start gap-2.5 text-xs text-slate-300">
                <Target className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white uppercase font-bold">Why Sales Wins:</strong> {currentStage.salesImpact}
                </span>
              </div>
            </div>

            {/* Stepper Navigation Buttons */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
              <button
                onClick={handlePrev}
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-white rounded-xl text-xs font-semibold cursor-pointer transition-all"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev Stage</span>
              </button>

              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 border border-blue-500 text-white rounded-xl text-xs font-semibold cursor-pointer transition-all shadow-xs"
              >
                <span>Next Stage</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Deliverables & Commercial Standard (Modern White Card) */}
          <div className="lg:col-span-5 bg-white text-slate-900 border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-md">
            <div className="space-y-5">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-slate-900" />
                  <span className="text-xs uppercase tracking-widest font-bold text-slate-900">
                    Engineering Deliverables
                  </span>
                </div>
                <span className="text-[10px] uppercase font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Production
                </span>
              </div>

              {/* Deliverables List */}
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                {currentStage.deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 border border-blue-200">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="font-medium leading-snug">{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Commercial Metric Anchor */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 block">
                  {currentStage.metricLabel}:
                </span>
                <span className="text-base sm:text-lg font-bold text-slate-900 block leading-tight">
                  {currentStage.metrics}
                </span>
              </div>

              <Link
                href={`/audit?stage=${currentStage.id}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-all cursor-pointer"
              >
                <span>Audit Stage {currentStage.step} for Your Firm</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
