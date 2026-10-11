"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  ShieldCheck, 
  Clock, 
  Check, 
  Workflow,
  HelpCircle,
  FileCheck2,
  Calendar,
  Lock,
  ArrowUpRight,
  TrendingUp,
  AlertCircle,
  Globe2
} from "lucide-react";

const STAGES = [
  { id: "all", step: "ALL", title: "Full 7-Stage End-to-End Pipeline Audit", badge: "Most Popular" },
  { id: "buyer-context", step: "01", title: "Buyer Context & Buying Committee Mapping" },
  { id: "positioning", step: "02", title: "Positioning & Category Point-of-View (POV)" },
  { id: "content", step: "03", title: "Editorial Content & Technical Proof Assets" },
  { id: "audience", step: "04", title: "Audience Calibration & Precision ICP Filtering" },
  { id: "distribution", step: "05", title: "Paid & Organic LinkedIn Distribution" },
  { id: "demand", step: "06", title: "Demand Creation & Out-of-Market Nurturing" },
  { id: "pipeline", step: "07", title: "Sales-Accepted Pipeline & Closed ARR" }
];

const DEAL_SIZES = [
  "Under $10,000 (Early-Stage / Boutique)",
  "$10,000 – $25,000 (Mid-Market B2B)",
  "$25,000 – $75,000 (Growth Stage)",
  "$75,000 – $200,000+ (Enterprise & Global)"
];

const BUDGET_RANGES = [
  "$1,500 – $3,000 / month (Starter Engine)",
  "$3,000 – $6,000 / month (Growth Tier)",
  "$6,000 – $15,000 / month (Scale Tier)",
  "$15,000+ / month (Enterprise & Multi-Region ABM)"
];

export function CommercialAuditForm() {
  const searchParams = useSearchParams();
  const stageParam = searchParams.get("stage") || "all";

  const [selectedStage, setSelectedStage] = useState<string>("all");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    dealSize: DEAL_SIZES[1],
    budget: BUDGET_RANGES[1],
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (stageParam && (stageParam === "all" || STAGES.some((s) => s.id === stageParam))) {
      setSelectedStage(stageParam);
    }
  }, [stageParam]);

  const activeStageObj = STAGES.find((s) => s.id === selectedStage) || STAGES[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name: formData.name,
      workEmail: formData.email,
      phone: formData.phone || "Not specified",
      company: formData.company || "Not specified",
      dealSize: formData.dealSize,
      monthlyBudget: formData.budget,
      stage: activeStageObj.title,
      step: activeStageObj.step,
      notes: formData.notes || "None provided",
      currency: "USD ($)"
    };

    try {
      // 1. Post to internal API route forwarding to both recipients
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      // 2. Direct client-side FormSubmit fallback
      if (!res.ok) {
        const fallbackPayload = {
          _subject: `New Global B2B Growth Audit Request: ${activeStageObj.title} - ${formData.company || formData.name}`,
          _template: "table",
          _cc: "devraj@saininexus.com",
          "Full Name": formData.name,
          "Work Email": formData.email,
          "Phone / WhatsApp": formData.phone || "Not specified",
          "Company / Website": formData.company || "Not specified",
          "Focus Scope": `Stage ${activeStageObj.step}: ${activeStageObj.title}`,
          "Average Deal Size (USD)": formData.dealSize,
          "Monthly Growth Budget (USD)": formData.budget,
          "Bottleneck Context": formData.notes || "None provided"
        };

        await Promise.allSettled([
          fetch("https://formsubmit.co/ajax/kamal0sharma02@gmail.com", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(fallbackPayload)
          }),
          fetch("https://formsubmit.co/ajax/devraj@saininexus.com", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(fallbackPayload)
          })
        ]);
      }
    } catch (err) {
      console.warn("Audit dispatch fallback executed:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full space-y-12 sm:space-y-16">
      
      {/* ========================================================= */}
      {/* 01. INTRO: WHY THIS FORM EXISTS & VALUE PROPOSITION       */}
      {/* ========================================================= */}
      <section className="bg-white border border-slate-200 p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#1572B8]" />

        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-white text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-3 h-3 text-[#38A9EB]" />
            Global B2B Growth Audit Intake
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black text-slate-900 tracking-tight leading-[1.08]">
            Where Is Your B2B Growth Engine <br className="hidden sm:inline" />
            <span className="text-[#1572B8]">Leaking Opportunities?</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-3xl">
            Instead of navigating multiple disconnected forms, this <strong>streamlined assessment</strong> gives our senior partners the commercial context needed to inspect your buying committee coverage, content proof, and full-funnel LinkedIn distribution model.
          </p>

          {/* Value Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-sans font-bold text-slate-700">
            <div className="flex items-center gap-2 bg-[#FAFCFF] p-3 border border-slate-200">
              <Clock className="w-4 h-4 text-[#1572B8] shrink-0" />
              <span>Takes ~60 seconds to complete</span>
            </div>
            <div className="flex items-center gap-2 bg-[#FAFCFF] p-3 border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-[#1572B8] shrink-0" />
              <span>100% Confidential · Strict NDA</span>
            </div>
            <div className="flex items-center gap-2 bg-[#FAFCFF] p-3 border border-slate-200">
              <Target className="w-4 h-4 text-[#1572B8] shrink-0" />
              <span>Direct Founder Review with Dev Raj Saini</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 02. WHY FILL THIS FORM & WHAT WILL BE THE OUTPUT?         */}
      {/* Transparent Explanation Block                            */}
      {/* ========================================================= */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card 1: Why Are You Filling This Form? */}
        <div className="bg-white border border-slate-200 p-8 sm:p-10 shadow-xs relative">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-slate-50 border border-slate-200 text-[#1572B8] text-[9.5px] font-sans font-bold uppercase tracking-[0.2em]">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Purpose of This Form</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-sans font-black text-slate-900 tracking-tight leading-snug">
              Why Fill Out This Assessment?
            </h2>
            
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              Most B2B companies burn capital on cold outreach and superficial ads without understanding where their revenue pipeline is stalling. This quick intake gives us the commercial baseline:
            </p>

            <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1572B8] shrink-0 mt-0.5" />
                <span>Identifies if you are marketing only to single users instead of multi-stakeholder buying committees.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1572B8] shrink-0 mt-0.5" />
                <span>Calibrates your annual contract value (ACV in $) against realistic customer acquisition costs (CAC).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1572B8] shrink-0 mt-0.5" />
                <span>Pins down whether your primary bottleneck is positioning (differentiation), targeting (audience), or lead capture (pipeline).</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2: What Will Be The Output? */}
        <div className="bg-[#0F172A] text-white border border-slate-800 p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#38A9EB]" />
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-slate-800 border border-slate-700 text-[#38A9EB] text-[9.5px] font-sans font-bold uppercase tracking-[0.2em]">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Deliverable &amp; Next Step</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-sans font-black text-white tracking-tight leading-snug">
              What Will You Receive as Output?
            </h2>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
              You will not receive a generic automated score or bot-generated PDF. You receive tailored strategic guidance:
            </p>

            <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300 font-medium">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#38A9EB] shrink-0 mt-0.5" />
                <span><strong className="text-white">Custom 7-Stage Leak Analysis:</strong> Clear diagnosis of where your buyer acquisition is stalling.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#38A9EB] shrink-0 mt-0.5" />
                <span><strong className="text-white">30-Minute Partner Consultation:</strong> A 1-on-1 strategic diagnostic session directly with Dev Raj Saini.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#38A9EB] shrink-0 mt-0.5" />
                <span><strong className="text-white">Actionable 90-Day Roadmap:</strong> Specific recommendations for LinkedIn Ads, Document teardowns, and committee ABM.</span>
              </li>
            </ul>
          </div>
        </div>

      </section>

      {/* ========================================================= */}
      {/* 03. THE UNIFIED AUDIT INTAKE FORM                         */}
      {/* ========================================================= */}
      <section className="bg-white border border-slate-200 p-8 sm:p-12 lg:p-14 shadow-xl relative">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {submitted ? (
            /* Success Screen */
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 bg-[#EBF6FC] text-[#1572B8] border border-[#38A9EB]/40 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-4xl font-sans font-black text-slate-900 tracking-tight">
                  Assessment Request Transferred!
                </h3>
                <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your audit details for <strong className="text-[#1572B8]">{activeStageObj.title}</strong> have been routed directly to our senior partners.
                </p>
              </div>

              <div className="p-4 sm:p-5 bg-[#FAFCFF] border border-slate-200 text-left text-xs sm:text-sm space-y-2 max-w-lg mx-auto">
                <span className="text-slate-900 font-bold block">✓ Direct Transmission Confirmed</span>
                <p className="text-slate-600 font-normal leading-relaxed">
                  We will evaluate your firm details and respond to your work email (<strong className="text-slate-900">{formData.email}</strong>) within 24 business hours with your customized diagnostic review.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link
                  href="/"
                  className="px-7 py-3.5 bg-slate-900 text-white hover:bg-slate-800 text-xs font-sans font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  Return to Homepage
                </Link>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-7 py-3.5 bg-white border border-slate-300 hover:border-[#1572B8] text-slate-900 text-xs font-sans font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Edit / Submit Another
                </button>
              </div>
            </div>
          ) : (
            /* Intake Form */
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="border-b border-slate-200 pb-5 space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#1572B8] block">
                  STEP 1 OF 1 // DIAGNOSTIC SCOPE
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-black text-slate-900 tracking-tight">
                  Commercial Architecture Diagnostic Form
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-normal">
                  Only your Name and Work Email are required. All other fields are optional to give us helpful context.
                </p>
              </div>

              {/* 1. Stage Focus Selector (All 7 or Specific Stage) */}
              <div className="space-y-3">
                <label className="block text-xs font-sans font-bold uppercase tracking-wider text-slate-900">
                  Primary Area of Concern / Audit Scope:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {STAGES.map((st) => {
                    const isSelected = st.id === selectedStage;
                    return (
                      <button
                        key={st.id}
                        type="button"
                        onClick={() => setSelectedStage(st.id)}
                        className={`p-3 text-left border transition-all cursor-pointer flex flex-col justify-between min-h-[72px] ${
                          isSelected
                            ? "bg-[#1572B8] text-white border-[#1572B8] shadow-sm"
                            : "bg-[#FAFCFF] text-slate-700 hover:text-slate-900 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className={`text-[9px] font-mono font-bold uppercase tracking-wider ${
                            isSelected ? "text-blue-100" : "text-[#1572B8]"
                          }`}>
                            STAGE // {st.step}
                          </span>
                          {st.badge && (
                            <span className={`text-[8.5px] font-sans font-bold uppercase px-1.5 py-0.2 border ${
                              isSelected ? "bg-white/20 border-white/30 text-white" : "bg-blue-50 border-blue-200 text-[#1572B8]"
                            }`}>
                              {st.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-sans font-bold leading-tight block">
                          {st.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Contact Information: ONLY NAME & WORK EMAIL ARE REQUIRED */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="space-y-1.5">
                  <label className="block text-xs font-sans font-bold uppercase tracking-wider text-slate-900">
                    Your Full Name <span className="text-[#1572B8]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAFCFF] border border-slate-200 p-3 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#1572B8] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-sans font-bold uppercase tracking-wider text-slate-900">
                    Work Email <span className="text-[#1572B8]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="david@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAFCFF] border border-slate-200 p-3 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#1572B8] transition-colors"
                  />
                </div>
              </div>

              {/* 3. Phone & Company (Both OPTIONAL) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-sans font-bold uppercase tracking-wider text-slate-900">
                      Phone / WhatsApp
                    </label>
                    <span className="text-[10px] text-slate-400 font-mono uppercase">Optional</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAFCFF] border border-slate-200 p-3 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#1572B8] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-sans font-bold uppercase tracking-wider text-slate-900">
                      Company Name &amp; Website
                    </label>
                    <span className="text-[10px] text-slate-400 font-mono uppercase">Optional</span>
                  </div>
                  <input
                    type="text"
                    placeholder="e.g. Apex Global Systems (apex.io)"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#FAFCFF] border border-slate-200 p-3 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#1572B8] transition-colors"
                  />
                </div>
              </div>

              {/* 4. Global ACV & Monthly Budget in USD ($) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-sans font-bold uppercase tracking-wider text-slate-900">
                      Average Deal Size / ACV ($ USD)
                    </label>
                    <span className="text-[10px] text-slate-400 font-mono uppercase">Optional</span>
                  </div>
                  <select
                    value={formData.dealSize}
                    onChange={(e) => setFormData({ ...formData, dealSize: e.target.value })}
                    className="w-full bg-[#FAFCFF] border border-slate-200 p-3 text-xs font-medium text-slate-900 focus:outline-none focus:bg-white focus:border-[#1572B8] transition-colors cursor-pointer"
                  >
                    {DEAL_SIZES.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-sans font-bold uppercase tracking-wider text-slate-900">
                      Monthly Growth Budget ($ USD)
                    </label>
                    <span className="text-[10px] text-slate-400 font-mono uppercase">Optional</span>
                  </div>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#FAFCFF] border border-slate-200 p-3 text-xs font-medium text-slate-900 focus:outline-none focus:bg-white focus:border-[#1572B8] transition-colors cursor-pointer"
                  >
                    {BUDGET_RANGES.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 5. Context / Roadblock (Optional) */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-sans font-bold uppercase tracking-wider text-slate-900">
                    What Specific Bottleneck Do You Need to Talk About?
                  </label>
                  <span className="text-[10px] text-slate-400 font-mono uppercase">Optional</span>
                </div>
                <textarea
                  rows={3}
                  placeholder="Share details on your current sales cycle, target accounts, or recent challenges (e.g. deals stalling with CFOs, ad leads lacking buying authority, long sales cycles)..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#FAFCFF] border border-slate-200 p-3 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#1572B8] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#1572B8] hover:bg-slate-900 text-white text-xs font-sans font-bold uppercase tracking-widest transition-colors shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Routing Assessment to Strategy Team...</span>
                  ) : (
                    <>
                      <span>Submit Commercial Audit Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Security & Confidentiality Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500 pt-3 border-t border-slate-100">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1572B8]" />
                  <span>Confidential Data · Direct Senior Partner Assessment · Strict NDA</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#1572B8]" />
                  <span>&lt;24h Response Protocol</span>
                </span>
              </div>

            </form>
          )}

        </div>
      </section>

    </div>
  );
}
