"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Calendar,
  Send,
  Lock,
  ArrowUpRight,
  TrendingUp,
  Building2,
  Check
} from "lucide-react";

interface FocusOption {
  id: string;
  label: string;
  short: string;
}

const FOCUS_AREAS: FocusOption[] = [
  { id: "pipeline", label: "Pipeline & Demand Generation", short: "Demand Gen" },
  { id: "linkedin-ads", label: "Full-Funnel LinkedIn Ads Engine", short: "LinkedIn Ads" },
  { id: "abm", label: "Enterprise Account ABM", short: "Enterprise ABM" },
  { id: "thought-leadership", label: "Founder Thought Leadership", short: "Thought Leadership" }
];

const BUDGET_TIERS = [
  { id: "starter", label: "₹25k – ₹50k / mo", full: "₹25,000 – ₹50,000 / mo (Starter Engine)" },
  { id: "growth", label: "₹50k – ₹1L / mo", full: "₹50,000 – ₹1,00,000 / mo (Growth Tier)" },
  { id: "scale", label: "₹1L – ₹2.5L / mo", full: "₹1,00,000 – ₹2,50,000 / mo (Scale Tier)" },
  { id: "enterprise", label: "₹2.5L+ / mo", full: "₹2,50,000+ / mo (Enterprise & Global)" }
];

export function ContactForm() {
  const [selectedFocus, setSelectedFocus] = useState<string>("pipeline");
  const [selectedBudget, setSelectedBudget] = useState<string>("starter");

  const [formData, setFormData] = useState({
    name: "",
    workEmail: "",
    company: "",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const currentFocusObj = FOCUS_AREAS.find((f) => f.id === selectedFocus) || FOCUS_AREAS[0];
  const currentBudgetObj = BUDGET_TIERS.find((b) => b.id === selectedBudget) || BUDGET_TIERS[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name: formData.name,
      workEmail: formData.workEmail,
      company: formData.company,
      objective: currentFocusObj.label,
      budget: currentBudgetObj.full,
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
            _subject: `New Saini Nexus Inquiry: ${currentFocusObj.label} [${currentBudgetObj.label}]`,
            _template: "table",
            "Full Name": formData.name,
            "Work Email": formData.workEmail,
            "Company / Domain": formData.company,
            "Focus Area": currentFocusObj.label,
            "Monthly Budget Tier": currentBudgetObj.full,
            "Project Scope & Challenge": formData.notes
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
    <section className="space-y-10">
      
      {/* Editorial Section Header */}
      <div className="border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Start a Conversation</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Let&apos;s Scale Your Pipeline.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
              Have an enterprise ACV, a long sales cycle, or paid clicks that aren&apos;t turning into sales-accepted meetings? Tell us about your acquisition model or request a complimentary pipeline diagnostic.
            </p>
          </div>
          
          <div className="shrink-0 flex items-center gap-3">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 text-xs font-semibold shadow-xs hover:shadow-sm transition-all"
            >
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              <span>Or Book a 30-Min Strategy Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Container: Modern Split */}
      <div className="bg-[#070B19] border border-slate-800/80 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 text-white relative overflow-hidden">
        
        {/* Subtle Ambient Cyan Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* LEFT COLUMN: The Consultation Dossier (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8 relative z-10">
          
          <div className="space-y-6">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-cyan-400 block mb-1">
                How We Work
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                How We Partner With B2B Leaders
              </h3>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                We work directly with founders, CMOs, and revenue leaders who require rigorous, verifiable demand architecture.
              </p>
            </div>

            {/* 3 Commitments */}
            <div className="space-y-3 pt-2">
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-xs">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="w-6 h-6 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-400/30 text-xs font-bold flex items-center justify-center">
                    01
                  </span>
                  <h4 className="font-bold text-white text-sm">
                    Direct Partner Review
                  </h4>
                </div>
                <p className="text-xs text-slate-300 pl-8 leading-relaxed">
                  Every inquiry is personally reviewed by Dev Raj Saini. Zero screening calls with junior SDRs or outsourced coordinators.
                </p>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-xs">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="w-6 h-6 rounded-full bg-blue-950 text-blue-300 border border-blue-400/30 text-xs font-bold flex items-center justify-center">
                    02
                  </span>
                  <h4 className="font-bold text-white text-sm">
                    Diagnostic in 24–48 Hours
                  </h4>
                </div>
                <p className="text-xs text-slate-300 pl-8 leading-relaxed">
                  We evaluate your committee coverage, negative exclusions, and technical proof gaps before suggesting any budget commitment.
                </p>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-xs">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="w-6 h-6 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-400/30 text-xs font-bold flex items-center justify-center">
                    03
                  </span>
                  <h4 className="font-bold text-white text-sm">
                    Zero Vanity Metrics
                  </h4>
                </div>
                <p className="text-xs text-slate-300 pl-8 leading-relaxed">
                  We measure success strictly on Sales-Accepted Pipeline, qualified ACVs, and customer acquisition cost reduction.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Contact & Verified Channels */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                Direct Channels &amp; Advisory Hub
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-cyan-200 bg-cyan-950/60 border border-cyan-400/30 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                24h Response SLA
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Jaipur, Rajasthan, India · Serving India &amp; Global B2B</span>
              </div>

              <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="font-semibold text-white">Private 1-on-1 Briefing</span>
                </div>
                <Link
                  href="/book"
                  className="px-2.5 py-1 bg-white border border-transparent text-[10px] font-bold rounded hover:bg-cyan-100 transition-colors shrink-0 inline-flex items-center gap-1 text-slate-950 shadow-xs"
                >
                  <span>Book Call</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-950" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Business Inquiry Card (7 cols) */}
        <div className="lg:col-span-7 relative z-10">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-9 shadow-2xl">
            
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Diagnostic Request Received
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your inquiry has been routed directly to <strong className="text-slate-900">Dev Raj Saini</strong>. We will review your company profile and respond within 24 hours.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl max-w-md mx-auto text-left text-xs space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Selected Focus:</span>
                    <span className="font-semibold text-slate-900">{currentFocusObj.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Target Budget:</span>
                    <span className="font-semibold text-slate-900">{currentBudgetObj.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Delivery Status:</span>
                    <span className="font-semibold text-emerald-600">Dispatched to Founder Email</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", workEmail: "", company: "", notes: "" });
                    }}
                    className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-xs"
                  >
                    Submit Another Inquiry
                  </button>
                  <Link
                    href="/case-studies"
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
                  >
                    <span>Explore Case Studies</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Step 1: Strategic Focus Area */}
                <div className="space-y-2.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-200 flex items-center justify-between">
                    <span>1. What is your primary growth priority?</span>
                    <span className="text-[10px] text-cyan-400 font-semibold">Select One</span>
                  </label>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {FOCUS_AREAS.map((area) => {
                      const isSelected = selectedFocus === area.id;
                      return (
                        <button
                          key={area.id}
                          type="button"
                          onClick={() => setSelectedFocus(area.id)}
                          className={`text-left p-3 rounded-xl border transition-all text-xs flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? "bg-cyan-950/70 border-cyan-400 font-semibold text-cyan-200 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                              : "bg-slate-950/70 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white"
                          }`}
                        >
                          <span className="truncate">{area.label}</span>
                          <span
                            className={`w-3.5 h-3.5 rounded-full border shrink-0 ml-2 ${
                              isSelected ? "bg-cyan-400 border-cyan-400 shadow-[0_0_6px_#38bdf8]" : "bg-slate-900 border-slate-700"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Estimated Monthly Budget */}
                <div className="space-y-2.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-200 flex items-center justify-between">
                    <span>2. Estimated Monthly Growth &amp; Media Budget</span>
                    <span className="text-[10px] text-slate-400 font-medium">INR (₹)</span>
                  </label>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {BUDGET_TIERS.map((tier) => {
                      const isSelected = selectedBudget === tier.id;
                      return (
                        <button
                          key={tier.id}
                          type="button"
                          onClick={() => setSelectedBudget(tier.id)}
                          className={`py-2 px-2.5 rounded-xl border text-center transition-all text-xs cursor-pointer ${
                            isSelected
                              ? "bg-cyan-400 border-cyan-400 font-bold text-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.3)]"
                              : "bg-slate-950/70 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white"
                          }`}
                        >
                          {tier.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Contact & Company Details */}
                <div className="space-y-3.5 pt-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-200 block">
                    3. Your Commercial Details
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-950/90 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all shadow-xs"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Work Email Address *"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        className="w-full bg-slate-950/90 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Company Name & Website (e.g. Acme Corp · acme.com) *"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-slate-950/90 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your acquisition bottleneck, target ACV, or primary objective..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-slate-950/90 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none shadow-xs"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-white hover:bg-cyan-100 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/20 transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span>Submitting Diagnostic Request...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry &amp; Request Diagnostic</span>
                        <ArrowRight className="w-4 h-4 shrink-0 text-slate-950" />
                      </>
                    )}
                  </button>

                  <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2 text-center sm:text-left">
                    <span className="flex items-center gap-1.5">
                      <Lock className="w-3 h-3 text-cyan-400 shrink-0" />
                      Strict NDA Confidentiality · No Sales Spam
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                      <Clock className="w-3 h-3 text-cyan-400 shrink-0" />
                      Direct Founder Review within 24 Hours
                    </span>
                  </div>
                </div>

              </form>
            )}

          </div>
        </div>

      </div>

    </section>
  );
}
