"use client";

import React, { useState } from "react";
import { 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  Layers, 
  Users, 
  TrendingUp, 
  Send, 
  FileText,
  Workflow
} from "lucide-react";

interface FrameworkStage {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  question: string;
  description: string;
  deliverables: string[];
  metrics: string;
}

const FRAMEWORK_STAGES: FrameworkStage[] = [
  {
    id: "buyer-context",
    step: "01",
    title: "Buyer Context",
    subtitle: "Understanding How Your Buyers Actually Buy",
    question: "Who is in the buying room, what triggers their search, and why do they hesitate?",
    description: "We map the complete buying committee (Economic Buyer, Technical Evaluator, Champion), studying internal purchase triggers and the friction points that delay decisions.",
    deliverables: [
      "Buying Committee Persona Dossier (5–7 Stakeholders)",
      "95% Out-of-Market Buying Trigger Research",
      "Decision Hesitation & Career-Risk Audit"
    ],
    metrics: "100% Alignment with Real Buying Behavior"
  },
  {
    id: "positioning",
    step: "02",
    title: "Positioning & POV",
    subtitle: "Articulating Commercial Point-of-View",
    question: "What is your defensible commercial point of view against industry noise?",
    description: "We translate deep technical capabilities into high-stakes business value, highlighting the cost of inaction and differentiating your firm against generic competitors.",
    deliverables: [
      "Category Point-of-View & Commercial Thesis",
      "Competitive Moat & Anti-Cliché Value Proposition",
      "Executive Messaging Architecture by Role"
    ],
    metrics: "Defensible Category Authority"
  },
  {
    id: "content",
    step: "03",
    title: "Editorial Content",
    subtitle: "High-Craft Technical Proof Assets",
    question: "How do you educate buyers and demonstrate operational competence without friction?",
    description: "We produce dense, insightful native Document Ads, architecture breakdowns, and founder essays that solve real problems right inside the buyer's LinkedIn feed.",
    deliverables: [
      "Native 8-Slide Technical PDF Document Ads",
      "Executive Ghostwriting & Thought Leadership Essays",
      "Un-gated Strategic Playbooks & Benchmarks"
    ],
    metrics: "4.8x Higher In-Feed Save Rate"
  },
  {
    id: "audience",
    step: "04",
    title: "Audience Calibration",
    subtitle: "Precision ICP & Negative Filtering",
    question: "How do you guarantee that zero marketing spend is wasted on low-fit audiences?",
    description: "We build matched account lists (ABM), apply strict seniority exclusions, and filter out students, junior coders, and job seekers to protect ad spend efficiency.",
    deliverables: [
      "Matched Account List (450+ Verified ICP Accounts)",
      "Multi-Layer Seniority & Job Title Exclusion Filter",
      "Technographic & Firmographic Qualification Gates"
    ],
    metrics: "Zero Vanity Ad Waste"
  },
  {
    id: "distribution",
    step: "05",
    title: "Paid & Organic Distribution",
    subtitle: "Full-Funnel Multi-Touch Orchestration",
    question: "How do you maintain continuous executive presence across target accounts?",
    description: "We combine organic company page authority, Thought Leader Ads from executives, and matched account retargeting to surround buying groups with consistent proof.",
    deliverables: [
      "LinkedIn Campaign Manager Multi-Tier Architecture",
      "Thought Leader Ad Amplification Framework",
      "Account-Level Frequency Capping & Retargeting"
    ],
    metrics: "3x Higher CTR via Thought Leader Ads"
  },
  {
    id: "demand",
    step: "06",
    title: "Demand Creation",
    subtitle: "Nurturing the 95% Out-of-Market Pool",
    question: "How do you build trust before buyers enter an active purchasing RFP?",
    description: "We nurture accounts across the full awareness curve, creating brand affinity so that when buyers enter a buying window, your firm is the only logical choice.",
    deliverables: [
      "Full-Funnel Demand Creation & Capture Architecture",
      "Account Intent Scoring & Signal Tracking",
      "Pre-Call Buyer Education Assets"
    ],
    metrics: "48% Faster Sales Cycle Velocity"
  },
  {
    id: "pipeline",
    step: "07",
    title: "Pipeline & ARR",
    subtitle: "Sales-Accepted Opportunities & Closed-Won Revenue",
    question: "How does marketing activity connect to qualified pipeline and ARR?",
    description: "We capture high-intent leads via native in-feed forms with verified work emails, routing enriched submissions to sales in under 30 seconds with closed-loop attribution.",
    deliverables: [
      "Native In-Feed Lead Gen Form with Qualification Gates",
      "Instant CRM & Slack Webhook Integration (<30s SLA)",
      "Sales Acceptance Rate (SAR) & Closed-Loop Attribution"
    ],
    metrics: "82% Sales Acceptance Rate (SAR)"
  }
];

export function NexusGrowthMap() {
  const [activeStageId, setActiveStageId] = useState<string>("buyer-context");
  const currentStage = FRAMEWORK_STAGES.find((s) => s.id === activeStageId) || FRAMEWORK_STAGES[0];

  return (
    <div className="w-full bg-[#FAF7EF] rounded-3xl p-6 sm:p-12 space-y-8 relative overflow-hidden border-2 border-black shadow-[4px_4px_0px_#000000]">
      
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
          <Workflow className="w-3.5 h-3.5" />
          The 7-Stage Methodology
        </div>
        <h3 className="text-2xl sm:text-4xl font-serif font-bold text-black tracking-tight">
          The Saini Nexus Commercial Architecture.
        </h3>
        <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-medium">
          Strategy before random execution. We build an integrated 7-stage engine connecting buyer psychology directly to closed ARR.
        </p>
      </div>

      {/* Horizontal Stages Flow Selector */}
      <div className="flex sm:flex-wrap items-center gap-2.5 sm:gap-3 pt-2.5 pb-3 px-1 overflow-x-auto no-scrollbar scroll-smooth">
        {FRAMEWORK_STAGES.map((st, idx) => {
          const isActive = st.id === activeStageId;
          return (
            <button
              key={st.id}
              onClick={() => setActiveStageId(st.id)}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-mono transition-all shrink-0 border-2 border-black cursor-pointer whitespace-nowrap ${
                isActive
                  ? "bg-[#60A5FA] text-black font-bold shadow-[3.5px_3.5px_0px_#000000] -translate-y-0.5"
                  : "bg-white text-zinc-800 hover:bg-[#EFF6FF] shadow-[2px_2px_0px_#000000]"
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border border-black ${
                isActive ? "bg-black text-white" : "bg-zinc-100 text-zinc-900"
              }`}>
                {st.step}
              </span>
              <span className="font-bold">{st.title}</span>
              {idx < FRAMEWORK_STAGES.length - 1 && (
                <ChevronRight className={`w-3.5 h-3.5 ml-1 hidden xl:block ${isActive ? "text-black" : "text-zinc-400"}`} />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Stage Detail Breakdown Card */}
      <div className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-[4px_4px_0px_#000000]">
        
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold">
            <span className="px-2.5 py-1 rounded-full bg-[#60A5FA] border-2 border-black text-black shadow-[1.5px_1.5px_0px_#000000]">STAGE {currentStage.step} OF 07</span>
            <span className="text-black">•</span>
            <span className="uppercase text-black">{currentStage.title}</span>
          </div>

          <h4 className="text-2xl sm:text-3xl font-serif font-bold text-black">
            {currentStage.subtitle}
          </h4>

          <div className="p-3.5 bg-[#EFF6FF] rounded-xl border-2 border-black text-xs font-mono text-zinc-800 shadow-[2px_2px_0px_#000000]">
            <strong className="text-black font-bold uppercase">CORE QUESTION: </strong>
            <span className="font-medium">&ldquo;{currentStage.question}&rdquo;</span>
          </div>

          <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal">
            {currentStage.description}
          </p>
        </div>

        <div className="lg:col-span-5 bg-[#FAF7EF] border-2 border-black rounded-2xl p-6 space-y-4 shadow-[3px_3px_0px_#000000]">
          <span className="text-[11px] font-mono uppercase tracking-widest text-black font-bold block pb-2 border-b-2 border-black/10">
            Stage Deliverables & Output
          </span>

          <ul className="space-y-2.5 text-xs text-zinc-800">
            {currentStage.deliverables.map((del, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span className="font-semibold">{del}</span>
              </li>
            ))}
          </ul>

          <div className="pt-3 border-t-2 border-black/10 flex items-center justify-between text-xs font-mono">
            <span className="text-zinc-600 font-bold">Stage Benchmark:</span>
            <span className="text-black font-extrabold">{currentStage.metrics}</span>
          </div>
        </div>

      </div>

    </div>
  );
}
