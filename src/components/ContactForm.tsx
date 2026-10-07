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
  ArrowUpRight
} from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    workEmail: "",
    company: "",
    budget: "₹25,000 – ₹50,000 / month (Starter Engine)",
    goal: "Scale Sales-Accepted Pipeline",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const GOAL_OPTIONS = [
    "Scale Sales-Accepted Pipeline",
    "Full-Funnel LinkedIn Ads",
    "Enterprise Account ABM",
    "Executive Thought Leadership"
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
    <div className="max-w-4xl mx-auto">
      {/* The Single Master Suite Container */}
      <div className="bg-[#FAF7EF] border-2 border-black rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-[6px_6px_0px_#000000] relative overflow-hidden space-y-8">
        
        {/* Header Section */}
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-extrabold shadow-[2px_2px_0px_#000000]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Commercial Strategy Inquiry</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black tracking-tight leading-tight">
            Let&apos;s Build Your B2B Growth Engine.
          </h2>

          <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-medium">
            Every inquiry is personally reviewed by Dev Raj Saini. Tell us about your company and target buyers to receive a custom acquisition blueprint.
          </p>

          {/* Quick Trust Meta Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1 text-xs font-mono font-bold text-zinc-700">
            <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-black/30 shadow-[1px_1px_0px_#000000]">
              <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
              &lt;4h Business Turnaround
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-black/30 shadow-[1px_1px_0px_#000000]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
              Direct Founder Review
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-black/30 shadow-[1px_1px_0px_#000000]">
              <Lock className="w-3.5 h-3.5 text-[#2563EB]" />
              Confidential NDA Grade
            </span>
          </div>
        </div>

        {/* The Form Body */}
        {submitted ? (
          <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-[4px_4px_0px_#000000] animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-[#60A5FA] border-2 border-black text-black flex items-center justify-center mx-auto shadow-[2px_2px_0px_#000000]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black">
              Strategy Inquiry Received!
            </h3>
            <p className="text-sm text-zinc-700 max-w-md mx-auto font-medium">
              Thank you, <strong>{formData.name || "there"}</strong>! Dev Raj Saini will personally review your profile and send a preliminary assessment within 4 business hours.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs font-mono text-zinc-700 hover:text-black underline cursor-pointer font-bold"
              >
                Submit another inquiry
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border-2 border-black rounded-3xl p-6 sm:p-10 shadow-[4px_4px_0px_#000000] space-y-6">
            
            {/* Step 1: 1-Tap Objective Selection */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-black font-bold uppercase tracking-wider">
                1. Select Your Primary Objective <span className="text-rose-600">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {GOAL_OPTIONS.map((goal) => {
                  const isSelected = formData.goal === goal;
                  return (
                    <button
                      type="button"
                      key={goal}
                      onClick={() => setFormData({ ...formData, goal })}
                      className={`p-3 rounded-2xl border-2 border-black text-xs font-mono font-bold text-left transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? "bg-[#60A5FA] text-black shadow-[2px_2px_0px_#000000]"
                          : "bg-[#FAF7EF] text-zinc-700 hover:bg-zinc-100 shadow-[1px_1px_0px_#000000]"
                      }`}
                    >
                      <span className="truncate">{goal}</span>
                      {isSelected && <Check className="w-4 h-4 shrink-0 stroke-[3]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Contact & Company Info */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-mono text-black font-bold uppercase tracking-wider">
                2. Your Company &amp; Contact Details
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-mono text-zinc-600 mb-1 font-bold">
                    Full Name <span className="text-rose-600">*</span>
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
                  <label className="block text-[11px] font-mono text-zinc-600 mb-1 font-bold">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-mono text-zinc-600 mb-1 font-bold">
                    Company Website / Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="company.com"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl px-3.5 py-2.5 text-sm text-black placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-zinc-600 mb-1 font-bold">
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
            </div>

            {/* Step 3: Specific Challenge */}
            <div className="space-y-1.5 pt-2">
              <label className="block text-xs font-mono text-black font-bold uppercase tracking-wider">
                3. Current Roadblock or Context <span className="text-zinc-400 font-normal lowercase">(optional)</span>
              </label>
              <textarea
                rows={2}
                placeholder="Share any context about your current sales cycle, target ICP, or recent campaign roadblocks..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl px-3.5 py-2.5 text-sm text-black placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] transition-all font-medium resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full neo-btn-blue text-sm uppercase tracking-wider py-4 cursor-pointer font-extrabold shadow-[3px_3px_0px_#000000] hover:shadow-[5px_5px_0px_#000000] transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Preparing Strategy Teardown...</span>
                ) : (
                  <>
                    <span>Request Free Strategy Audit</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>
            </div>

          </form>
        )}

        {/* Clean Footer Strip with Direct Scheduling Shortcut */}
        <div className="border-t-2 border-black/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="font-bold text-black font-serif text-sm">Prefer direct calendar booking?</span>
            <span>Pick a confirmed time slot directly on our calendar.</span>
          </div>

          <Link
            href="/book"
            className="neo-btn-white text-xs font-mono font-bold flex items-center gap-1.5 shrink-0 shadow-[2px_2px_0px_#000000]"
          >
            <span>Direct Scheduling</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
