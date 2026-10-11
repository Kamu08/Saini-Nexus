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
  Send, 
  Lock, 
  TrendingUp, 
  Building2, 
  Check 
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

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
  { id: "starter", label: "$1.5k – $2k / mo", full: "$1,500 – $2,000 / mo (Starter Engine)" },
  { id: "growth", label: "$2k – $10k / mo", full: "$2,000 – $10,000 / mo (Growth Tier)" },
  { id: "scale", label: "$10k – $15k / mo", full: "$10,000 – $15,000 / mo (Scale Tier)" },
  { id: "enterprise", label: "$15k+ / mo", full: "$15,000+ / mo (Enterprise & Global)" }
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
      notes: formData.notes
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const fallbackPayload = {
          _subject: `New Saini Nexus Inquiry: ${currentFocusObj.label} [${currentBudgetObj.label}]`,
          _template: "table",
          _cc: "devraj@saininexus.com",
          "Full Name": formData.name,
          "Work Email": formData.workEmail,
          "Company / Domain": formData.company,
          "Focus Area": currentFocusObj.label,
          "Monthly Budget Tier": currentBudgetObj.full,
          "Project Scope & Challenge": formData.notes
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
      console.warn("Contact form fallback executed:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
      trackEvent("contact_form_submission", {
        service_category: currentFocusObj.label,
        budget_tier: currentBudgetObj.full,
      });
    }
  };

  return (
    <section className="space-y-12 py-12">
      
      {/* Editorial Section Header */}
      <div className="border-b border-slate-200 pb-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1572B8] text-white text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5" />
              Start a Conversation
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-sans font-black text-slate-900 tracking-tighter leading-[1.05]">
              Let&apos;s Scale Your Pipeline.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
              Have an enterprise ACV, a long sales cycle, or paid clicks that aren&apos;t turning into sales-accepted meetings? Tell us about your acquisition model or request a complimentary pipeline diagnostic.
            </p>
          </div>
      </div>

      {/* Main Container: Sharp Architectural Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-l border-slate-200 bg-white shadow-2xl relative">
        
        {/* LEFT COLUMN: The Consultation Dossier (5 cols) */}
        <div className="lg:col-span-5 bg-[#1572B8] p-8 sm:p-12 lg:p-16 border-r border-b border-slate-200 text-white relative overflow-hidden flex flex-col justify-between">
           {/* Subtle Blueprint Grid */}
           <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
           
           <div className="relative z-10 space-y-12">
             <div className="space-y-4">
               <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#EBF6FC] opacity-90 block mb-1">
                 How We Work
               </span>
               <h3 className="text-3xl sm:text-4xl font-sans font-black text-white leading-tight tracking-tight">
                 How We Partner With B2B Leaders
               </h3>
               <p className="text-[#EBF6FC] text-sm leading-relaxed font-medium">
                 We work directly with founders, CMOs, and revenue leaders who require rigorous, verifiable demand architecture.
               </p>
             </div>

             <div className="space-y-8">
               <div className="border-l-2 border-[#67C7F8] pl-6 space-y-2">
                  <h4 className="font-sans font-bold text-white text-base tracking-wide flex items-center gap-3">
                    <span className="text-[#67C7F8] text-sm">01</span> Direct Partner Review
                  </h4>
                  <p className="text-sm text-[#EBF6FC]/90 leading-relaxed font-medium">
                    Every inquiry is personally reviewed by Dev Raj Saini. Zero screening calls with junior SDRs or outsourced coordinators.
                  </p>
               </div>
               
               <div className="border-l-2 border-[#67C7F8] pl-6 space-y-2">
                  <h4 className="font-sans font-bold text-white text-base tracking-wide flex items-center gap-3">
                    <span className="text-[#67C7F8] text-sm">02</span> Diagnostic in 24–48 Hours
                  </h4>
                  <p className="text-sm text-[#EBF6FC]/90 leading-relaxed font-medium">
                    We evaluate your committee coverage, negative exclusions, and technical proof gaps before suggesting any budget commitment.
                  </p>
               </div>

               <div className="border-l-2 border-[#67C7F8] pl-6 space-y-2">
                  <h4 className="font-sans font-bold text-white text-base tracking-wide flex items-center gap-3">
                    <span className="text-[#67C7F8] text-sm">03</span> Zero Vanity Metrics
                  </h4>
                  <p className="text-sm text-[#EBF6FC]/90 leading-relaxed font-medium">
                    We measure success strictly on Sales-Accepted Pipeline, qualified ACVs, and customer acquisition cost reduction.
                  </p>
               </div>
             </div>
           </div>

           <div className="relative z-10 mt-12 pt-10 border-t border-[#38A9EB]/40">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#EBF6FC] block mb-4">
                Direct Channels &amp; Advisory Hub
              </span>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs font-sans font-bold tracking-wider text-white uppercase">
                  <MapPin className="w-4 h-4 text-[#67C7F8]" />
                  Jaipur, Rajasthan · Serving India &amp; Global B2B
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans font-bold tracking-wider text-white uppercase">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#67C7F8]" />
                    Private 1-on-1 Briefing
                  </div>
                  <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] bg-white text-[#1572B8] px-3 py-1 font-bold">
                    <span className="w-1.5 h-1.5 bg-[#1572B8] animate-pulse" />
                    24h Response SLA
                  </span>
                </div>
              </div>
           </div>

        </div>

        {/* RIGHT COLUMN: Business Inquiry Card (7 cols) */}
        <div className="lg:col-span-7 bg-white relative z-10 p-8 sm:p-12 lg:p-16 border-r border-b border-slate-200">
            
            {submitted ? (
              <div className="py-16 text-center space-y-6">
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600 shadow-sm">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-4xl font-sans font-black text-slate-900 tracking-tight">
                    Diagnostic Request Received
                  </h3>
                  <p className="text-slate-600 text-base max-w-md mx-auto leading-relaxed font-medium">
                    Thank you, <strong className="text-slate-900 font-bold">{formData.name}</strong>. Your inquiry has been routed directly to <strong className="text-slate-900 font-bold">Dev Raj Saini</strong>. We will review your company profile and respond within 24 hours.
                  </p>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs font-sans space-y-3">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-bold uppercase tracking-wider">Selected Focus:</span>
                    <span className="font-bold text-slate-900">{currentFocusObj.label}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500 font-bold uppercase tracking-wider">Target Budget:</span>
                    <span className="font-bold text-slate-900">{currentBudgetObj.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-bold uppercase tracking-wider">Delivery Status:</span>
                    <span className="font-bold text-emerald-600 uppercase tracking-wider">Dispatched to Founder</span>
                  </div>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", workEmail: "", company: "", notes: "" });
                    }}
                    className="px-6 py-4 bg-white border border-slate-200 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-slate-700 hover:border-slate-400 hover:text-slate-900 transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                  <Link
                    href="/case-studies"
                    className="px-6 py-4 bg-[#1572B8] text-white text-[10px] font-sans font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-slate-900 transition-all cursor-pointer"
                  >
                    <span>Explore Case Studies</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                
                {/* Step 1: Strategic Focus Area */}
                <div className="space-y-4">
                  <label className="text-xs font-sans font-bold uppercase tracking-widest text-slate-900 flex items-center justify-between border-b border-slate-100 pb-2">
                    <span>1. What is your primary growth priority?</span>
                    <span className="text-[10px] text-[#1572B8]">Select One</span>
                  </label>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {FOCUS_AREAS.map((area) => {
                      const isSelected = selectedFocus === area.id;
                      return (
                        <button
                          key={area.id}
                          type="button"
                          onClick={() => setSelectedFocus(area.id)}
                          className={`text-left p-4 border transition-all text-xs font-sans font-bold uppercase tracking-wide flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? "bg-slate-900 border-slate-900 text-white shadow-md"
                              : "bg-slate-50 border-slate-200 hover:border-slate-400 text-slate-600"
                          }`}
                        >
                          <span className="truncate">{area.label}</span>
                          {isSelected && <Check className="w-4 h-4 shrink-0 ml-2" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Estimated Monthly Budget */}
                <div className="space-y-4">
                  <label className="text-xs font-sans font-bold uppercase tracking-widest text-slate-900 flex items-center justify-between border-b border-slate-100 pb-2">
                    <span>2. Estimated Monthly Growth &amp; Media Budget</span>
                    <span className="text-[10px] text-slate-400 font-bold">USD ($)</span>
                  </label>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {BUDGET_TIERS.map((tier) => {
                      const isSelected = selectedBudget === tier.id;
                      return (
                        <button
                          key={tier.id}
                          type="button"
                          onClick={() => setSelectedBudget(tier.id)}
                          className={`py-3 px-2 border text-center transition-all text-[11px] font-sans font-bold tracking-wider cursor-pointer ${
                            isSelected
                              ? "bg-[#1572B8] border-[#1572B8] text-white shadow-md"
                              : "bg-slate-50 border-slate-200 hover:border-slate-400 text-slate-600"
                          }`}
                        >
                          {tier.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Contact & Company Details */}
                <div className="space-y-4">
                  <label className="text-xs font-sans font-bold uppercase tracking-widest text-slate-900 block border-b border-slate-100 pb-2">
                    3. Your Commercial Details
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 text-sm font-sans font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1572B8] focus:ring-1 focus:ring-[#1572B8] transition-all"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Work Email Address *"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 text-sm font-sans font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1572B8] focus:ring-1 focus:ring-[#1572B8] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Company Name & Website (e.g. Acme Corp — acme.com) *"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 text-sm font-sans font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1572B8] focus:ring-1 focus:ring-[#1572B8] transition-all"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe your acquisition bottleneck, target ACV, or primary objective..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 text-sm font-sans font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#1572B8] focus:ring-1 focus:ring-[#1572B8] transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 space-y-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full py-5 px-6 bg-[#1572B8] hover:bg-slate-900 text-white font-sans font-bold text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span>Submitting Diagnostic Request...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry &amp; Request Diagnostic</span>
                        <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] font-sans font-bold uppercase tracking-wider text-slate-400 gap-3 text-center sm:text-left">
                    <span className="flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-[#1572B8] shrink-0" />
                      Strict NDA Confidentiality — No Sales Spam
                    </span>
                    <span className="flex items-center gap-2 text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-[#1572B8] shrink-0" />
                      Direct Founder Review within 24 Hours
                    </span>
                  </div>
                </div>

              </form>
            )}

        </div>

      </div>

    </section>
  );
}
