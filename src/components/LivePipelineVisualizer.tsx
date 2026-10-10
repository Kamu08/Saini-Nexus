"use client";

import React, { useState } from "react";
import { 
  Workflow, 
  Target, 
  Eye, 
  FileText, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Building2
} from "lucide-react";

interface PipelineNode {
  step: string;
  title: string;
  subtitle: string;
  metric: string;
  details: string;
  tag: string;
}

const PIPELINE_STEPS: PipelineNode[] = [
  {
    step: "01",
    title: "Target Accounts (ABM)",
    subtitle: "Matched Account & Exclusion Filters",
    metric: "450 Accounts",
    details: "Zero budget wasted on students or junior job titles. Strict ICP firmographics.",
    tag: "Audience Calibration"
  },
  {
    step: "02",
    title: "In-Feed Attention",
    subtitle: "Thought Leader Ads & PDF Carousels",
    metric: "2.84% CTR",
    details: "Ungated problem-framing essays sponsored from executive profiles.",
    tag: "Demand Creation"
  },
  {
    step: "03",
    title: "Native Qualification",
    subtitle: "1-Click Forms with Strict Gate",
    metric: "18.4% Conv Rate",
    details: "Verified corporate work emails and budget confirmation without leaving LinkedIn.",
    tag: "High-Intent Capture"
  },
  {
    step: "04",
    title: "Instant Sales Sync",
    subtitle: "CRM & Slack Webhook SLA",
    metric: "<30s SLA",
    details: "Enriched prospect context routed directly to senior sales reps in real-time.",
    tag: "Speed-to-Lead"
  },
  {
    step: "05",
    title: "Pipeline Revenue",
    subtitle: "Closed-Won Deal Attribution",
    metric: "82% SAR",
    details: "High-ACV enterprise pipeline with measured CAC payback and closed revenue.",
    tag: "Commercial Revenue"
  }
];

export function LivePipelineVisualizer() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="w-full bg-[#08152a] rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-[#1b3f73]/70 shadow-2xl relative overflow-hidden space-y-8 text-white">
      
      {/* Subtle ambient blue light in corner */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1572b8]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2852]/80 border border-[#38a9eb]/40 text-[#d4effc] text-xs font-semibold uppercase tracking-wider mb-3 shadow-[0_0_15px_rgba(56,169,235,0.2)]">
            <Workflow className="w-3.5 h-3.5 text-[#38a9eb]" />
            <span>Commercial Funnel Architecture</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Marketing Turns Into Closed Pipeline
          </h3>
          <p className="text-slate-300 text-sm mt-1 max-w-xl font-normal">
            Click through the 5 connected stages of our LinkedIn acquisition engine.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#d4effc] font-medium px-3.5 py-1.5 bg-[#091b36]/80 border border-[#18365f] rounded-full shadow-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-[#38a9eb] shadow-[0_0_8px_#38a9eb] animate-pulse"></span>
          <span>Live Commercial Telemetry</span>
        </div>
      </div>

      {/* Visual Pipeline Flow Bar */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative z-10">
        {PIPELINE_STEPS.map((node, index) => {
          const isActive = activeStep === index;
          return (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-[#1572b8] to-[#38a9eb] text-white border-[#38a9eb] shadow-[0_0_20px_rgba(56,169,235,0.4)] -translate-y-0.5"
                  : "bg-[#091830]/80 text-slate-200 hover:bg-[#0c2346]/80 border-[#18365f] shadow-xs"
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className={`w-6 h-6 shrink-0 rounded-lg flex items-center justify-center text-xs font-bold ${
                    isActive ? "bg-[#07152b] text-[#67c7f8]" : "bg-slate-800 text-slate-300"
                  }`}>
                    {node.step}
                  </span>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider ${
                    isActive ? "text-white font-extrabold" : "text-slate-400"
                  }`}>
                    {node.metric}
                  </span>
                </div>
                <div className={`text-xs font-bold leading-snug ${isActive ? "text-white font-extrabold" : "text-white"}`}>
                  {node.title}
                </div>
              </div>

              <div className={`pt-3 mt-3 border-t text-[10px] uppercase font-semibold ${
                isActive ? "border-white/25 text-white font-bold" : "border-slate-800 text-slate-400"
              }`}>
                {node.tag}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Deep-Dive Card */}
      <div className="bg-[#091830]/90 border border-[#18365f] rounded-2xl p-6 sm:p-8 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
        <div className="lg:col-span-8 space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-full bg-[#0c2852]/80 border border-[#38a9eb]/40 text-[#67c7f8] font-semibold shadow-xs">
              STAGE {PIPELINE_STEPS[activeStep].step} DEPLOYMENT
            </span>
            <span className="text-slate-600">•</span>
            <span className="uppercase text-slate-400 font-semibold">{PIPELINE_STEPS[activeStep].tag}</span>
          </div>

          <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
            {PIPELINE_STEPS[activeStep].title}: {PIPELINE_STEPS[activeStep].subtitle}
          </h4>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            {PIPELINE_STEPS[activeStep].details}
          </p>
        </div>

        <div className="lg:col-span-4 bg-[#07152b] border border-[#18365f] rounded-xl p-5 text-center space-y-2 shadow-inner">
          <div className="text-[11px] uppercase text-slate-400 font-semibold tracking-wider">STAGE BENCHMARK</div>
          <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#67c7f8] via-[#bae6fd] to-white bg-clip-text text-transparent">
            {PIPELINE_STEPS[activeStep].metric}
          </div>
          <div className="text-xs text-slate-400 font-normal">Measured across active accounts</div>
        </div>
      </div>

    </div>
  );
}
