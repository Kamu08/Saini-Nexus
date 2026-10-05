"use client";

import React, { useState } from "react";
import Image from "next/image";
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
    <div className="w-full bg-[#FAF7EF] border-3 border-black rounded-[2.5rem] sm:rounded-[3.5rem] p-5 sm:p-10 lg:p-12 shadow-[6px_6px_0px_#000000] relative overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Side: Value Proposition & Studio Artwork */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>Free 30-Min Strategy Audit</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-bold text-black leading-tight tracking-tight">
              Ready to Build Predictable B2B Pipeline?
            </h2>
            <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-medium">
              Tell us about your company. We&apos;ll audit your LinkedIn presence, inspect your target buyers, and share a custom acquisition blueprint—100% free.
            </p>
          </div>

          {/* Integrated Strategic Studio Artwork Card */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-black shadow-[3px_3px_0px_#000000] aspect-[16/9] w-full bg-white p-1.5 group">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-zinc-100">
              <Image
                src="/hero-artwork.png"
                alt="Saini Nexus B2B Growth Engine Studio"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2.5 left-2.5 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full border border-black text-[10px] font-mono font-extrabold text-black shadow-[1.5px_1.5px_0px_#000000] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                <span>THE SAINI NEXUS DEMAND STUDIO</span>
              </div>
            </div>
          </div>

          {/* Core Guarantees List */}
          <div className="space-y-3 pt-1 border-t-2 border-black/10 text-xs text-zinc-800">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#BFDBFE] border-2 border-black text-black flex items-center justify-center shrink-0 mt-0.5 shadow-[1px_1px_0px_#000000]">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <div>
                <strong className="text-black block mb-0.5 font-serif font-bold text-sm">Direct Founder Consultation:</strong>
                <span className="font-normal text-zinc-700">1-on-1 strategy session directly with Dev Raj Saini (no junior account reps).</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#BFDBFE] border-2 border-black text-black flex items-center justify-center shrink-0 mt-0.5 shadow-[1px_1px_0px_#000000]">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <div>
                <strong className="text-black block mb-0.5 font-serif font-bold text-sm">Target ICP &amp; Ad Teardown:</strong>
                <span className="font-normal text-zinc-700">We analyze high-intent buying committees and messaging gaps prior to the call.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#BFDBFE] border-2 border-black text-black flex items-center justify-center shrink-0 mt-0.5 shadow-[1px_1px_0px_#000000]">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <div>
                <strong className="text-black block mb-0.5 font-serif font-bold text-sm">Actionable Commercial Blueprint:</strong>
                <span className="font-normal text-zinc-700">Walk away with clear campaign angles, exclusions, and distribution architecture.</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t-2 border-black/10 flex flex-wrap items-center gap-4 text-xs text-zinc-700 font-mono font-medium">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>&lt;24h Turnaround</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Jaipur, India · Serving Global B2B</span>
            </div>
          </div>
        </div>

        {/* Right Side: Fast 4-Field High-Converting Form */}
        <div className="lg:col-span-7 bg-white border-2 border-black rounded-3xl p-6 sm:p-9 shadow-[5px_5px_0px_#000000]">
          {submitted ? (
            <div className="text-center py-10 sm:py-14 space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-[#60A5FA] border-2 border-black text-black flex items-center justify-center mx-auto shadow-[3px_3px_0px_#000000]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black">Strategy Request Received</h3>
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
                  Company Name &amp; Website <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. CloudScale (cloudscale.io)"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl px-3.5 py-2.5 text-sm text-black placeholder:text-zinc-500 focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-black mb-1 font-bold">
                  Primary Commercial Goal
                </label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl px-3.5 py-2.5 text-sm text-black focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] transition-all font-medium cursor-pointer"
                >
                  {GOAL_OPTIONS.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-black mb-1 font-bold">
                  Current Growth Friction or Context <span className="text-zinc-500 text-[10px] font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your target buyers, average deal size, or current LinkedIn advertising roadblocks..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl px-3.5 py-2.5 text-sm text-black placeholder:text-zinc-500 focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] transition-all font-medium resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full neo-btn-blue text-sm uppercase tracking-wider py-4 cursor-pointer font-extrabold"
                >
                  {loading ? (
                    <span>Analyzing Strategy...</span>
                  ) : (
                    <>
                      <span>Request Free Strategy Audit</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] font-mono text-zinc-600 text-center pt-1">
                Zero spam · Confidential NDA-grade handling · Direct review by Dev Raj Saini
              </p>

            </form>
          )}
        </div>

      </div>

    </div>
  );
}
