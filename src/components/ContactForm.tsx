"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, ShieldCheck, MapPin, Sparkles, Clock, Check } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    workEmail: "",
    company: "",
    goal: "Scale Pipeline & Leads",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const GOAL_OPTIONS = [
    "Scale Pipeline & Leads",
    "Full-Funnel LinkedIn Ads",
    "Founder Thought Leadership",
    "Account-Based Marketing (ABM)"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full bg-[#FAF7EF] border-2 border-black rounded-3xl p-5 sm:p-10 lg:p-12 shadow-[4px_4px_0px_#000000] relative overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Side: High-Converting Value Proposition */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>Free 30-Min Strategy Audit</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-bold text-black leading-tight tracking-tight">
            Ready to Build Predictable B2B Pipeline?
          </h2>

          <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-medium">
            Tell us about your company. We&apos;ll audit your LinkedIn presence, inspect your target buyers, and share a custom acquisition plan—100% free.
          </p>

          <div className="space-y-3.5 pt-2 border-t-2 border-black/10 text-xs text-zinc-800">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#BFDBFE] border-2 border-black text-black flex items-center justify-center shrink-0 mt-0.5 shadow-[1px_1px_0px_#000000]">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <strong className="text-black block mb-0.5 font-serif font-bold text-sm">Direct Founder Consultation:</strong>
                <span className="font-normal text-zinc-700">1-on-1 strategy session directly with Dev Raj Saini (no sales reps).</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#BFDBFE] border-2 border-black text-black flex items-center justify-center shrink-0 mt-0.5 shadow-[1px_1px_0px_#000000]">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <strong className="text-black block mb-0.5 font-serif font-bold text-sm">Target ICP & Competitor Teardown:</strong>
                <span className="font-normal text-zinc-700">We analyze high-intent buying committees and messaging gaps before the call.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#BFDBFE] border-2 border-black text-black flex items-center justify-center shrink-0 mt-0.5 shadow-[1px_1px_0px_#000000]">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <strong className="text-black block mb-0.5 font-serif font-bold text-sm">Actionable Commercial Blueprint:</strong>
                <span className="font-normal text-zinc-700">Walk away with clear campaign angles and audience architecture.</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t-2 border-black/10 flex flex-wrap items-center gap-4 text-xs text-zinc-700 font-mono font-medium">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>&lt;24h Turnaround</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Jaipur, India · Global</span>
            </div>
          </div>
        </div>

        {/* Right Side: Fast 4-Field High-Converting Form */}
        <div className="lg:col-span-7 bg-white border-2 border-black rounded-2xl p-5 sm:p-8 shadow-[4px_4px_0px_#000000]">
          {submitted ? (
            <div className="text-center py-10 sm:py-12 space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-[#60A5FA] border-2 border-black text-black flex items-center justify-center mx-auto shadow-[3px_3px_0px_#000000]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black">Strategy Request Received</h3>
              <p className="text-sm text-zinc-700 max-w-md mx-auto font-medium">
                Thank you! Dev Raj Saini will personally review your profile and send your preliminary growth assessment within 24 business hours.
              </p>
              <div className="pt-3">
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono text-zinc-700 hover:text-black underline cursor-pointer font-bold"
                >
                  Submit another request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                    className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl px-3.5 py-2.5 text-sm text-black placeholder:text-zinc-500 focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] transition-all font-medium"
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
                    className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl px-3.5 py-2.5 text-sm text-black placeholder:text-zinc-500 focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] transition-all font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-black mb-1 font-bold">
                  Company Name or Website <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Tech (acme.com)"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl px-3.5 py-2.5 text-sm text-black placeholder:text-zinc-500 focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-black mb-1.5 font-bold">
                  Primary Growth Objective
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {GOAL_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFormData({ ...formData, goal: opt })}
                      className={`text-left text-xs font-mono font-bold px-3 py-2 rounded-xl border-2 transition-all cursor-pointer ${
                        formData.goal === opt
                          ? "bg-[#60A5FA] text-black border-black shadow-[2px_2px_0px_#000000]"
                          : "bg-[#FAF7EF] text-zinc-700 border-black/30 hover:border-black hover:text-black"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-black mb-1 font-bold">
                  Target Market / Specific Goal <span className="text-zinc-500 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Target accounts in US/Europe, reducing CAC, or scaling demo bookings..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl px-3.5 py-2 text-sm text-black placeholder:text-zinc-500 focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] transition-all font-medium"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="neo-btn-blue w-full flex items-center justify-center text-sm uppercase tracking-wider py-4 cursor-pointer"
                >
                  {loading ? (
                    <span>Submitting Growth Request...</span>
                  ) : (
                    <>
                      <span>Claim Your Free Growth Audit</span>
                      <ArrowRight className="ml-2 w-4 h-4 shrink-0" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] font-mono text-zinc-600 text-center flex flex-wrap items-center justify-center gap-2 pt-1 font-semibold">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                  <span>100% Free &amp; Confidential</span>
                </span>
                <span>•</span>
                <span>Direct Founder Review</span>
                <span>•</span>
                <span>No Sales Pressure</span>
              </div>

            </form>
          )}
        </div>

      </div>

    </div>
  );
}
