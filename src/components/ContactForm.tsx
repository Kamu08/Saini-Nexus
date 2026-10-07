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
  Phone,
  Calendar,
  Send,
  Zap,
  Building2
} from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    workEmail: "",
    company: "",
    budget: "₹25k – ₹50k / mo",
    goal: "Scale Pipeline & Leads",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const GOAL_OPTIONS = [
    "Scale Pipeline & Leads",
    "Full-Funnel LinkedIn Ads",
    "Executive Thought Leadership",
    "Account-Based Marketing (ABM)"
  ];

  const BUDGET_OPTIONS = [
    "₹25,000 – ₹50,000 / month (Starter Engine)",
    "₹50,000 – ₹1,00,000 / month (Growth Tier)",
    "₹1,00,000 – ₹2,50,000 / month (Scale Tier)",
    "₹2,50,000+ / month (Enterprise & Global)"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Post to internal API route forwarding to kamal0sharma02@gmail.com
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          workEmail: formData.workEmail,
          company: formData.company,
          budget: formData.budget,
          goal: formData.goal,
          notes: formData.notes,
          recipient: "kamal0sharma02@gmail.com"
        })
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
            _subject: `New Saini Nexus Lead: ${formData.goal} (${formData.budget})`,
            _template: "table",
            "Full Name": formData.name,
            "Work Email": formData.workEmail,
            "Company": formData.company,
            "Monthly Budget": formData.budget,
            "Primary Goal": formData.goal,
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
    <div className="w-full bg-[#FAF7EF] border-3 border-black rounded-[2.5rem] sm:rounded-[3.5rem] p-6 sm:p-10 lg:p-12 shadow-[6px_6px_0px_#000000] relative overflow-hidden space-y-8">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Side: Value Proposition, Consultation Blueprint & Direct Booking Link */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-extrabold shadow-[2px_2px_0px_#000000]">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>Commercial Strategy Session</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-bold text-black leading-tight tracking-tight">
              Ready to Turn LinkedIn Into a Revenue Channel?
            </h2>
            <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-medium">
              Tell us about your target buyers and current growth bottleneck. We&apos;ll inspect your account tiering, test angles, and prepare a custom B2B acquisition blueprint.
            </p>
          </div>

          {/* 3 Clear Deliverable Commitments */}
          <div className="bg-white border-2 border-black rounded-2xl p-5 shadow-[3px_3px_0px_#000000] space-y-3.5">
            <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-[#2563EB] block">
              What Happens On This Strategy Call:
            </span>

            <div className="space-y-3 text-xs text-zinc-800">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-[#EFF6FF] border border-black flex items-center justify-center shrink-0 mt-0.5 font-mono font-bold text-[11px] text-[#2563EB]">
                  01
                </div>
                <div>
                  <strong className="text-black block font-serif font-bold text-sm">Direct Founder Consultation:</strong>
                  <span className="text-zinc-600">1-on-1 strategy teardown directly with Dev Raj Saini (zero junior agency account reps).</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-[#FEFCE8] border border-black flex items-center justify-center shrink-0 mt-0.5 font-mono font-bold text-[11px] text-amber-700">
                  02
                </div>
                <div>
                  <strong className="text-black block font-serif font-bold text-sm">Target ICP &amp; Negative Audit:</strong>
                  <span className="text-zinc-600">We inspect where budget is wasted on junior clicks, identifying strict seniority exclusions.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-[#F0FDF4] border border-black flex items-center justify-center shrink-0 mt-0.5 font-mono font-bold text-[11px] text-emerald-700">
                  03
                </div>
                <div>
                  <strong className="text-black block font-serif font-bold text-sm">Actionable Acquisition Roadmap:</strong>
                  <span className="text-zinc-600">Walk away with specific ad hooks, document carousel ideas, and CAC benchmarks.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Meta & Alternative Action */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-700">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#2563EB]" />
              <span>&lt;4h Business Turnaround</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#2563EB]" />
              <span>Jaipur, India &middot; Global B2B</span>
            </div>
          </div>

          {/* Quick Direct Calendar Link for Fast Bookers */}
          <div className="p-4 bg-white/70 border border-black/30 rounded-2xl flex items-center justify-between gap-3 text-xs">
            <div className="space-y-0.5">
              <span className="font-serif font-bold text-black block">Prefer direct calendar booking?</span>
              <span className="text-zinc-600 font-mono text-[11px]">Pick a slot on our scheduling board.</span>
            </div>
            <Link
              href="/book"
              className="neo-btn-white text-xs font-mono font-bold shrink-0 whitespace-nowrap shadow-[1.5px_1.5px_0px_#000000]"
            >
              <span>View Calendar</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

        </div>

        {/* Right Side: Interactive, High-Converting Intake Form */}
        <div className="lg:col-span-7 bg-white border-2 border-black rounded-3xl p-6 sm:p-9 shadow-[5px_5px_0px_#000000]">
          {submitted ? (
            <div className="text-center py-12 sm:py-16 space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-[#60A5FA] border-2 border-black text-black flex items-center justify-center mx-auto shadow-[3px_3px_0px_#000000]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black">
                Strategy Request Received!
              </h3>
              <p className="text-sm text-zinc-700 max-w-md mx-auto font-medium">
                Thank you, <strong>{formData.name || "there"}</strong>! Dev Raj Saini will personally review your company profile and respond within 4 business hours.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono text-zinc-700 hover:text-black underline cursor-pointer font-bold"
                >
                  Submit another request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Header inside Form */}
              <div className="border-b-2 border-black/10 pb-3">
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-[#2563EB] block">
                  Confidential Commercial Intake
                </span>
                <h3 className="text-lg font-serif font-bold text-black">
                  Request Your Custom B2B Growth Blueprint
                </h3>
              </div>

              {/* Step 1: Goal Quick Selection Chips */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono text-black font-bold">
                  Primary Commercial Objective <span className="text-rose-600">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {GOAL_OPTIONS.map((goal) => {
                    const isSelected = formData.goal === goal;
                    return (
                      <button
                        type="button"
                        key={goal}
                        onClick={() => setFormData({ ...formData, goal })}
                        className={`p-2.5 rounded-xl border-2 border-black text-xs font-mono font-bold text-left transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? "bg-[#60A5FA] text-black shadow-[2px_2px_0px_#000000]"
                            : "bg-[#FAF7EF] text-zinc-700 hover:bg-zinc-100 shadow-[1px_1px_0px_#000000]"
                        }`}
                      >
                        <span className="truncate">{goal}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 shrink-0 stroke-[3]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Work Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div>
                  <label className="block text-xs font-mono text-black mb-1 font-bold">
                    Your Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl px-3.5 py-2.5 text-sm text-black placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-black mb-1 font-bold">
                    Work Email <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="vikram@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl px-3.5 py-2.5 text-sm text-black placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] transition-all font-medium"
                  />
                </div>
              </div>

              {/* Company & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-mono text-black mb-1 font-bold">
                    Company Name / Website <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CloudScale (cloudscale.io)"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl px-3.5 py-2.5 text-sm text-black placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-black mb-1 font-bold">
                    Monthly Marketing / Ad Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl px-3.5 py-2.5 text-sm text-black focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] transition-all font-medium cursor-pointer"
                  >
                    {BUDGET_OPTIONS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Growth Friction or Notes */}
              <div>
                <label className="block text-xs font-mono text-black mb-1 font-bold">
                  Current Growth Friction or Notes <span className="text-zinc-500 text-[10px] font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="Share any specific context about your target buyers, average deal size, or current LinkedIn roadblocks..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl px-3.5 py-2.5 text-sm text-black placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] transition-all font-medium resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full neo-btn-blue text-sm uppercase tracking-wider py-4 cursor-pointer font-extrabold shadow-[3px_3px_0px_#000000] hover:shadow-[4px_4px_0px_#000000] transition-all flex items-center justify-center"
                >
                  {loading ? (
                    <span>Preparing Strategy Teardown...</span>
                  ) : (
                    <>
                      <span>Request Free Strategy Audit</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </div>

              <div className="pt-1 flex items-center justify-center gap-2 text-[10px] font-mono text-zinc-500">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Zero spam &middot; Confidential NDA-grade handling &middot; Reviewed by Dev Raj Saini</span>
              </div>

            </form>
          )}
        </div>

      </div>

    </div>
  );
}
