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
      <div className="border-b-2 border-black/15 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7EF] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-extrabold shadow-[2px_2px_0px_#000000] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
          <span>Start a Conversation</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-black tracking-tight leading-tight">
              Let&apos;s Scale Your Pipeline.
            </h2>
            <p className="text-zinc-700 text-base sm:text-lg font-medium leading-relaxed">
              Have an enterprise ACV, a long sales cycle, or paid clicks that aren&apos;t turning into sales-accepted meetings? Tell us about your acquisition model or request a complimentary pipeline diagnostic.
            </p>
          </div>
          
          <div className="shrink-0 flex items-center gap-3">
            <Link
              href="/book"
              className="neo-btn-white text-xs font-mono font-bold flex items-center gap-2 whitespace-nowrap shadow-[3px_3px_0px_#000000]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Or Book a 30-Min Strategy Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Container: Editorial Swiss Split */}
      <div className="bg-[#FAF7EF] border-3 border-black rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-[6px_6px_0px_#000000] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* LEFT COLUMN: The Editorial Consultation Dossier (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          
          <div className="space-y-6">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#2563EB] font-extrabold block mb-1">
                How We Work
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black leading-snug">
                How We Partner With B2B Leaders
              </h3>
              <p className="text-zinc-600 text-sm mt-2 leading-relaxed">
                We work directly with founders, CMOs, and revenue leaders who require rigorous, verifiable demand architecture.
              </p>
            </div>

            {/* 3 Editorial Commitments */}
            <div className="space-y-4 pt-2">
              <div className="bg-white border-2 border-black rounded-2xl p-4 shadow-[3px_3px_0px_#000000]">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="w-6 h-6 rounded-full bg-[#60A5FA] border border-black text-black font-mono text-xs font-extrabold flex items-center justify-center">
                    01
                  </span>
                  <h4 className="font-serif font-bold text-black text-base">
                    Direct Partner Review
                  </h4>
                </div>
                <p className="text-xs text-zinc-600 pl-8 leading-relaxed">
                  Every inquiry is personally reviewed by Dev Raj Saini. Zero screening calls with junior SDRs or outsourced coordinators.
                </p>
              </div>

              <div className="bg-white border-2 border-black rounded-2xl p-4 shadow-[3px_3px_0px_#000000]">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="w-6 h-6 rounded-full bg-[#FDE047] border border-black text-black font-mono text-xs font-extrabold flex items-center justify-center">
                    02
                  </span>
                  <h4 className="font-serif font-bold text-black text-base">
                    Diagnostic in 24–48 Hours
                  </h4>
                </div>
                <p className="text-xs text-zinc-600 pl-8 leading-relaxed">
                  We evaluate your committee coverage, negative exclusions, and technical proof gaps before suggesting any budget commitment.
                </p>
              </div>

              <div className="bg-white border-2 border-black rounded-2xl p-4 shadow-[3px_3px_0px_#000000]">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="w-6 h-6 rounded-full bg-[#86EFAC] border border-black text-black font-mono text-xs font-extrabold flex items-center justify-center">
                    03
                  </span>
                  <h4 className="font-serif font-bold text-black text-base">
                    Zero Vanity Metrics
                  </h4>
                </div>
                <p className="text-xs text-zinc-600 pl-8 leading-relaxed">
                  We measure success strictly on Sales-Accepted Pipeline, qualified ACVs, and customer acquisition cost reduction.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Contact & Verified Channels */}
          <div className="bg-white/80 border-2 border-black rounded-2xl p-4 sm:p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold">
                Direct Channels &amp; Advisory Hub
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                24h Response SLA
              </span>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF7EF] border border-black/20 text-zinc-700">
                <MapPin className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                <span>Jaipur, Rajasthan, India · Serving India &amp; Global B2B</span>
              </div>

              <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-[#FAF7EF] border border-black/20 text-zinc-700">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                  <span className="font-bold text-black">Private 1-on-1 Briefing</span>
                </div>
                <Link
                  href="/book"
                  className="px-2.5 py-1 bg-white border border-black text-[10px] font-bold rounded hover:bg-zinc-100 transition-colors shrink-0 inline-flex items-center gap-1 text-black shadow-[1px_1px_0px_#000000]"
                >
                  <span>Book Call</span>
                  <ArrowUpRight className="w-3 h-3 text-[#2563EB]" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: High-Contrast Business Inquiry Card (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white border-3 border-black rounded-3xl p-6 sm:p-8 lg:p-9 shadow-[6px_6px_0px_#000000]">
            
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#86EFAC] border-3 border-black flex items-center justify-center mx-auto shadow-[4px_4px_0px_#000000]">
                  <Check className="w-8 h-8 text-black stroke-[3]" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black">
                    Diagnostic Request Received
                  </h3>
                  <p className="text-zinc-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-black">{formData.name}</strong>. Your inquiry has been routed directly to <strong className="text-black">Dev Raj Saini</strong>. We will review your company profile and respond within 24 hours.
                  </p>
                </div>

                <div className="p-4 bg-[#FAF7EF] border-2 border-black rounded-2xl max-w-md mx-auto text-left text-xs space-y-1.5 font-mono">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Selected Focus:</span>
                    <span className="font-bold text-black">{currentFocusObj.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Target Budget:</span>
                    <span className="font-bold text-black">{currentBudgetObj.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Delivery Status:</span>
                    <span className="font-bold text-emerald-700">Dispatched to Founder Email</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", workEmail: "", company: "", notes: "" });
                    }}
                    className="neo-btn-white text-xs font-mono font-bold"
                  >
                    Submit Another Inquiry
                  </button>
                  <Link
                    href="/case-studies"
                    className="neo-btn-blue text-xs font-mono font-bold flex items-center gap-1.5"
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
                  <label className="text-xs font-mono uppercase tracking-wider font-extrabold text-black flex items-center justify-between">
                    <span>1. What is your primary growth priority?</span>
                    <span className="text-[10px] text-[#2563EB] font-bold">Select One</span>
                  </label>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {FOCUS_AREAS.map((area) => {
                      const isSelected = selectedFocus === area.id;
                      return (
                        <button
                          key={area.id}
                          type="button"
                          onClick={() => setSelectedFocus(area.id)}
                          className={`text-left p-3 rounded-xl border-2 transition-all font-mono text-xs flex items-center justify-between ${
                            isSelected
                              ? "bg-[#60A5FA]/20 border-black shadow-[3px_3px_0px_#000000] font-extrabold text-black"
                              : "bg-[#FAF7EF] border-black/30 hover:border-black text-zinc-700 hover:text-black hover:bg-white"
                          }`}
                        >
                          <span className="truncate">{area.label}</span>
                          <span
                            className={`w-3.5 h-3.5 rounded-full border-2 border-black ml-2 shrink-0 ${
                              isSelected ? "bg-[#2563EB]" : "bg-white"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Estimated Monthly Budget */}
                <div className="space-y-2.5">
                  <label className="text-xs font-mono uppercase tracking-wider font-extrabold text-black flex items-center justify-between">
                    <span>2. Estimated Monthly Growth &amp; Media Budget</span>
                    <span className="text-[10px] text-zinc-500 font-bold">INR (₹)</span>
                  </label>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {BUDGET_TIERS.map((tier) => {
                      const isSelected = selectedBudget === tier.id;
                      return (
                        <button
                          key={tier.id}
                          type="button"
                          onClick={() => setSelectedBudget(tier.id)}
                          className={`py-2 px-2.5 rounded-xl border-2 text-center transition-all font-mono text-xs ${
                            isSelected
                              ? "bg-[#FDE047] border-black font-extrabold text-black shadow-[3px_3px_0px_#000000]"
                              : "bg-[#FAF7EF] border-black/30 hover:border-black text-zinc-700 hover:text-black hover:bg-white"
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
                  <label className="text-xs font-mono uppercase tracking-wider font-extrabold text-black block">
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
                        className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl px-3.5 py-2.5 text-sm font-mono text-black placeholder:text-zinc-500 focus:outline-none focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Work Email Address *"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl px-3.5 py-2.5 text-sm font-mono text-black placeholder:text-zinc-500 focus:outline-none focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
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
                      className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl px-3.5 py-2.5 text-sm font-mono text-black placeholder:text-zinc-500 focus:outline-none focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your acquisition bottleneck, target ACV, or primary objective..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl px-3.5 py-2.5 text-sm font-mono text-black placeholder:text-zinc-500 focus:outline-none focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full neo-btn-blue text-sm font-mono font-extrabold py-3.5 flex items-center justify-center gap-2 shadow-[4px_4px_0px_#000000] hover:shadow-[5px_5px_0px_#000000] transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Submitting Diagnostic Request...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry &amp; Request Diagnostic</span>
                        <ArrowRight className="w-4 h-4 shrink-0" />
                      </>
                    )}
                  </button>

                  <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-2 text-center sm:text-left">
                    <span className="flex items-center gap-1.5">
                      <Lock className="w-3 h-3 text-zinc-400 shrink-0" />
                      Strict NDA Confidentiality · No Sales Spam
                    </span>
                    <span className="flex items-center gap-1.5 text-zinc-600 font-bold">
                      <Clock className="w-3 h-3 text-[#2563EB] shrink-0" />
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
