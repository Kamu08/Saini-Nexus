"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  Sparkles, 
  Clock, 
  Check, 
  Calendar,
  Send,
  Lock,
  ArrowUpRight,
  Target,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  Building2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ObjectiveConfig {
  id: string;
  label: string;
  tag: string;
  icon: React.ReactNode;
  format: string;
  focus: string;
  benchmark: string;
  accentBg: string;
}

const OBJECTIVES: ObjectiveConfig[] = [
  {
    id: "pipeline",
    label: "Scale Sales-Accepted Pipeline",
    tag: "Demand Capture",
    icon: <TrendingUp className="w-4 h-4" />,
    format: "Un-gated Technical Proof + 1-Click Qualified Lead Gen",
    focus: "Cut wasted clicks & drive >75% Sales Acceptance Rate",
    benchmark: "Target ACV: ₹5L – ₹35L+ Contracts",
    accentBg: "bg-[#60A5FA]"
  },
  {
    id: "ads",
    label: "Full-Funnel LinkedIn Ads",
    tag: "Paid Media Engine",
    icon: <Zap className="w-4 h-4" />,
    format: "CEO Thought Leader Ads + Native PDF Document Carousels",
    focus: "Strict seniority negative exclusions to eliminate junior student clicks",
    benchmark: "-40% to -46% Cost Per Qualified Lead",
    accentBg: "bg-[#FDE047]"
  },
  {
    id: "abm",
    label: "Enterprise Account ABM",
    tag: "High-Ticket Targeting",
    icon: <Target className="w-4 h-4" />,
    format: "3-Tier Matched Account List + Multi-Threading Buying Group",
    focus: "Reach 5-7 decision-makers per enterprise target account",
    benchmark: "70%+ Target Account Penetration Rate",
    accentBg: "bg-[#86EFAC]"
  },
  {
    id: "thought-leadership",
    label: "Executive Thought Leadership",
    tag: "Founder Authority",
    icon: <Sparkles className="w-4 h-4" />,
    format: "Founder IP Extraction + Contrarian Problem-Framing Essays",
    focus: "Transform partner intellectual authority into repeatable inbound deal flow",
    benchmark: "2.8x to 3.4x Higher CTR vs Corporate Brand Pages",
    accentBg: "bg-[#F472B6]"
  }
];

const BUDGET_TIERS = [
  { id: "starter", label: "₹25,000 – ₹50,000 / mo", sub: "Starter Engine" },
  { id: "growth", label: "₹50,000 – ₹1,00,000 / mo", sub: "Growth Tier" },
  { id: "scale", label: "₹1,00,000 – ₹2,50,000 / mo", sub: "Scale Tier" },
  { id: "enterprise", label: "₹2,50,000+ / mo", sub: "Enterprise & Global" }
];

export function ContactForm() {
  const [selectedObjective, setSelectedObjective] = useState<string>("pipeline");
  const [selectedBudget, setSelectedBudget] = useState<string>("starter");

  const [formData, setFormData] = useState({
    name: "",
    workEmail: "",
    company: "",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const currentObj = OBJECTIVES.find((o) => o.id === selectedObjective) || OBJECTIVES[0];
  const currentBudgetObj = BUDGET_TIERS.find((b) => b.id === selectedBudget) || BUDGET_TIERS[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name: formData.name,
      workEmail: formData.workEmail,
      company: formData.company,
      objective: currentObj.label,
      budget: `${currentBudgetObj.label} (${currentBudgetObj.sub})`,
      notes: formData.notes,
      recipient: "kamal0sharma02@gmail.com"
    };

    try {
      // 1. Post to internal API route forwarding to kamal0sharma02@gmail.com
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      // 2. Client-side fallback to FormSubmit
      if (!res.ok) {
        await fetch("https://formsubmit.co/ajax/kamal0sharma02@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            _subject: `New Saini Nexus Lead: ${currentObj.label} [${currentBudgetObj.label}]`,
            _template: "table",
            "Full Name": formData.name,
            "Work Email": formData.workEmail,
            "Company": formData.company,
            "Objective": currentObj.label,
            "Budget Tier": `${currentBudgetObj.label} (${currentBudgetObj.sub})`,
            "Notes": formData.notes
          })
        });
      }
    } catch (err) {
      console.warn("Contact form fallback executed:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section className="space-y-8">
      
      {/* Modern Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-black/15 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-extrabold shadow-[2px_2px_0px_#000000] mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Strategy Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black tracking-tight leading-tight">
            Configure Your B2B Growth Engine
          </h2>
          <p className="text-zinc-700 text-sm sm:text-base mt-2 max-w-xl font-medium leading-relaxed">
            Select your primary objective and monthly parameters. We will audit your buyer committee coverage and prepare a preliminary diagnostic blueprint.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/book"
            className="neo-btn-white text-xs font-mono font-bold flex items-center gap-1.5 shadow-[2px_2px_0px_#000000]"
          >
            <span>Direct Calendar Booking</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>
      </div>

      {/* Modern 12-Column Split Studio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left 5 Columns: The Live Strategy Telemetry Terminal */}
        <div className="lg:col-span-5 bg-white border-2 border-black rounded-[2rem] p-6 sm:p-7 shadow-[5px_5px_0px_#000000] space-y-6 relative overflow-hidden">
          
          {/* Mac/Terminal Style Header */}
          <div className="flex items-center justify-between border-b-2 border-black/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#F472B6] border border-black" />
              <span className="w-3 h-3 rounded-full bg-[#FDE047] border border-black" />
              <span className="w-3 h-3 rounded-full bg-[#86EFAC] border border-black" />
              <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider ml-2">
                ACQUISITION-TELEMETRY.SYS
              </span>
            </div>

            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-400 text-emerald-800 text-[10px] font-mono font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              ACTIVE
            </span>
          </div>

          {/* Dynamic Blueprint Card (Reacts to user's selections) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentObj.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold block">
                  Target Blueprint Architecture:
                </span>
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-full ${currentObj.accentBg} border-2 border-black text-black font-mono text-xs font-extrabold shadow-[1.5px_1.5px_0px_#000000]`}>
                    {currentObj.tag}
                  </span>
                  <span className="text-xs font-serif font-bold text-black truncate">
                    {currentObj.label}
                  </span>
                </div>
              </div>

              {/* Forensic Metric Specs */}
              <div className="bg-[#FAF7EF] border-2 border-black rounded-2xl p-4 shadow-[2px_2px_0px_#000000] space-y-3">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#2563EB] block">
                    Ad Format Strategy:
                  </span>
                  <p className="text-xs font-sans font-bold text-black leading-snug">
                    {currentObj.format}
                  </p>
                </div>

                <div className="space-y-0.5 border-t border-black/10 pt-2">
                  <span className="text-[10px] font-mono uppercase font-bold text-zinc-600 block">
                    Execution Focus:
                  </span>
                  <p className="text-xs font-sans text-zinc-700 leading-snug">
                    {currentObj.focus}
                  </p>
                </div>

                <div className="space-y-0.5 border-t border-black/10 pt-2">
                  <span className="text-[10px] font-mono uppercase font-bold text-emerald-800 block">
                    Target Outcome Benchmark:
                  </span>
                  <p className="text-xs font-mono font-extrabold text-black">
                    {currentObj.benchmark}
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Selected Budget Summary */}
          <div className="p-3.5 bg-[#EFF6FF] border-2 border-black rounded-2xl flex items-center justify-between text-xs font-mono shadow-[2px_2px_0px_#000000]">
            <div>
              <span className="text-[10px] text-zinc-500 uppercase font-bold block">Allocated Tier:</span>
              <strong className="text-black font-extrabold">{currentBudgetObj.label}</strong>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-white border border-black font-extrabold text-[#2563EB] text-[10px]">
              {currentBudgetObj.sub}
            </span>
          </div>

          {/* Founder Verification Footer */}
          <div className="pt-4 border-t-2 border-black/10 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#FAF7EF] border-2 border-black flex items-center justify-center font-serif font-black text-sm text-black shadow-[1px_1px_0px_#000000]">
                DS
              </div>
              <div>
                <span className="font-serif font-bold text-black block leading-tight">Dev Raj Saini</span>
                <span className="text-[10px] font-mono text-zinc-500 block">Personally Reviews Each Inquiry</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-zinc-600 bg-zinc-100 px-2.5 py-1 rounded-full border border-black/20">
              <Clock className="w-3 h-3 text-[#2563EB]" />
              <span>&lt;4h SLA</span>
            </div>
          </div>

        </div>

        {/* Right 7 Columns: Modern Interactive Configurator Form */}
        <div className="lg:col-span-7 bg-[#FAF7EF] border-2 border-black rounded-[2rem] p-6 sm:p-9 shadow-[5px_5px_0px_#000000]">
          
          {submitted ? (
            <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-[4px_4px_0px_#000000] animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-[#60A5FA] border-2 border-black text-black flex items-center justify-center mx-auto shadow-[2px_2px_0px_#000000]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black">
                Diagnostic Request Received!
              </h3>
              <p className="text-sm text-zinc-700 max-w-md mx-auto font-medium">
                Thank you, <strong>{formData.name || "there"}</strong>! Dev Raj Saini will personally review your company profile and return your preliminary growth assessment within 4 business hours.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono text-zinc-700 hover:text-black underline cursor-pointer font-bold"
                >
                  Configure another session
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Objective Selector (Interactive Modern Cards) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono text-black font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-md bg-[#60A5FA] border border-black text-black flex items-center justify-center text-[10px]">
                      01
                    </span>
                    <span>Select Commercial Objective</span>
                  </label>
                  <span className="text-[10px] font-mono text-zinc-500 font-semibold">Tap to configure</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {OBJECTIVES.map((obj) => {
                    const isSelected = selectedObjective === obj.id;

                    return (
                      <button
                        type="button"
                        key={obj.id}
                        onClick={() => setSelectedObjective(obj.id)}
                        className={`p-3 rounded-2xl border-2 border-black text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          isSelected
                            ? "bg-[#60A5FA] text-black shadow-[3px_3px_0px_#000000]"
                            : "bg-white text-zinc-800 hover:bg-zinc-50 shadow-[1px_1px_0px_#000000]"
                        }`}
                      >
                        <div className="space-y-0.5 min-w-0">
                          <span className="text-[10px] font-mono uppercase font-bold text-zinc-600 block truncate">
                            {obj.tag}
                          </span>
                          <span className="text-xs font-serif font-bold text-black block leading-snug truncate">
                            {obj.label}
                          </span>
                        </div>
                        <div className={`w-6 h-6 rounded-lg border border-black flex items-center justify-center shrink-0 ${
                          isSelected ? "bg-white text-black" : "bg-zinc-100 text-zinc-400"
                        }`}>
                          {isSelected ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : obj.icon}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Budget Tier Selection (4 Tactile Pills) */}
              <div className="space-y-2 pt-1">
                <label className="text-xs font-mono text-black font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-md bg-[#FDE047] border border-black text-black flex items-center justify-center text-[10px]">
                    02
                  </span>
                  <span>Estimated Monthly Budget</span>
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {BUDGET_TIERS.map((tier) => {
                    const isSelected = selectedBudget === tier.id;

                    return (
                      <button
                        type="button"
                        key={tier.id}
                        onClick={() => setSelectedBudget(tier.id)}
                        className={`p-2.5 rounded-xl border-2 border-black text-center transition-all cursor-pointer ${
                          isSelected
                            ? "bg-black text-white shadow-[2px_2px_0px_#000000]"
                            : "bg-white text-zinc-700 hover:bg-zinc-50 shadow-[1px_1px_0px_#000000]"
                        }`}
                      >
                        <span className="text-[10px] font-mono block leading-tight font-extrabold">
                          {tier.sub}
                        </span>
                        <span className={`text-[10px] font-mono font-medium block mt-0.5 truncate ${
                          isSelected ? "text-zinc-300" : "text-zinc-500"
                        }`}>
                          {tier.label.split(" / ")[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Verified Contact & Company Inputs */}
              <div className="space-y-3 pt-1">
                <label className="text-xs font-mono text-black font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-md bg-[#86EFAC] border border-black text-black flex items-center justify-center text-[10px]">
                    03
                  </span>
                  <span>Your Contact &amp; Company Info</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-zinc-600 mb-1 font-bold">
                      Your Full Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border-2 border-black rounded-xl px-3.5 py-2.5 text-sm text-black placeholder:text-zinc-400 focus:outline-none focus:shadow-[2px_2px_0px_#000000] transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-600 mb-1 font-bold">
                      Corporate Work Email <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="vikram@company.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full bg-white border-2 border-black rounded-xl px-3.5 py-2.5 text-sm text-black placeholder:text-zinc-400 focus:outline-none focus:shadow-[2px_2px_0px_#000000] transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-zinc-600 mb-1 font-bold">
                      Company Website <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. company.com"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white border-2 border-black rounded-xl px-3.5 py-2.5 text-sm text-black placeholder:text-zinc-400 focus:outline-none focus:shadow-[2px_2px_0px_#000000] transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-600 mb-1 font-bold">
                      Current Growth Roadblock <span className="text-zinc-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. High CPLs, low sales acceptance"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-white border-2 border-black rounded-xl px-3.5 py-2.5 text-sm text-black placeholder:text-zinc-400 focus:outline-none focus:shadow-[2px_2px_0px_#000000] transition-all font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full neo-btn-blue text-sm uppercase tracking-wider py-4 cursor-pointer font-extrabold shadow-[3px_3px_0px_#000000] hover:shadow-[5px_5px_0px_#000000] transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Generating Strategy Blueprint...</span>
                  ) : (
                    <>
                      <span>Request Free Strategy Teardown</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </div>

              {/* Micro Trust Disclaimer */}
              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-zinc-500 pt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Zero sales spam &middot; Confidential NDA-grade handling &middot; Reviewed by Dev Raj Saini</span>
              </div>

            </form>
          )}

        </div>

      </div>

    </section>
  );
}
