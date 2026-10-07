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
  IndianRupee,
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
    title: "Closed-Won Pipeline",
    subtitle: "Sales-Accepted Discovery Meetings",
    metric: "82% SAR",
    details: "High-ACV enterprise pipeline with measured CAC payback and closed revenue.",
    tag: "Commercial Revenue"
  }
];

export function LivePipelineVisualizer() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="w-full bg-[#FAF7EF] rounded-3xl p-6 sm:p-10 border-2 border-black shadow-[4px_4px_0px_#000000] relative overflow-hidden space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold mb-3 shadow-[2px_2px_0px_#000000]">
            <Workflow className="w-3.5 h-3.5" />
            Commercial Funnel Architecture
          </div>
          <h3 className="text-2xl sm:text-4xl font-serif font-bold text-black tracking-tight">
            How Marketing Turns Into Closed Pipeline
          </h3>
          <p className="text-zinc-700 text-sm mt-1 max-w-xl font-medium">
            Click through the 5 connected stages of our LinkedIn acquisition engine.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-black font-bold px-3 py-1.5 bg-white border-2 border-black rounded-full shadow-[2px_2px_0px_#000000]">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse border border-black"></span>
          <span>Live Commercial Telemetry</span>
        </div>
      </div>

      {/* Visual Pipeline Flow Bar */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {PIPELINE_STEPS.map((node, index) => {
          const isActive = activeStep === index;
          return (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`p-4 rounded-2xl text-left border-2 border-black transition-all duration-150 flex flex-col justify-between cursor-pointer ${
                isActive
                  ? "bg-[#60A5FA] text-black shadow-[4px_4px_0px_#000000] -translate-y-0.5"
                  : "bg-white text-zinc-800 hover:bg-[#EFF6FF] shadow-[2px_2px_0px_#000000]"
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className={`w-6 h-6 shrink-0 rounded-lg flex items-center justify-center text-xs font-mono font-bold border border-black ${
                    isActive ? "bg-black text-white" : "bg-zinc-100 text-black"
                  }`}>
                    {node.step}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                    {node.metric}
                  </span>
                </div>
                <div className="text-xs font-bold leading-snug">
                  {node.title}
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-black/20 text-[10px] font-mono uppercase font-semibold">
                {node.tag}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Deep-Dive Card */}
      <div className="bg-white border-2 border-black rounded-2xl p-6 sm:p-8 shadow-[4px_4px_0px_#000000] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-8 space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-full bg-[#60A5FA] border-2 border-black text-black font-bold shadow-[2px_2px_0px_#000000]">
              STAGE {PIPELINE_STEPS[activeStep].step} DEPLOYMENT
            </span>
            <span className="text-black font-bold">•</span>
            <span className="uppercase text-black font-bold">{PIPELINE_STEPS[activeStep].tag}</span>
          </div>

          <h4 className="text-2xl sm:text-3xl font-serif font-bold text-black">
            {PIPELINE_STEPS[activeStep].title}: {PIPELINE_STEPS[activeStep].subtitle}
          </h4>

          <p className="text-zinc-800 text-sm sm:text-base leading-relaxed font-normal">
            {PIPELINE_STEPS[activeStep].details}
          </p>
        </div>

        <div className="lg:col-span-4 bg-[#EFF6FF] border-2 border-black rounded-xl p-5 text-center space-y-2 shadow-[3px_3px_0px_#000000]">
          <div className="text-[11px] font-mono uppercase text-zinc-700 font-bold tracking-wider">STAGE BENCHMARK</div>
          <div className="text-3xl sm:text-4xl font-mono font-extrabold text-black">
            {PIPELINE_STEPS[activeStep].metric}
          </div>
          <div className="text-xs text-zinc-600 font-medium">Measured across active accounts</div>
        </div>
      </div>

    </div>
  );
}
