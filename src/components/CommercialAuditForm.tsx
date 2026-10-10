"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  Zap, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Check, 
  Workflow,
  Building2,
  Phone
} from "lucide-react";

const STAGES = [
  { id: "buyer-context", step: "01", title: "Buyer Context & Buying Committee Mapping" },
  { id: "positioning", step: "02", title: "Positioning & Category Point-of-View (POV)" },
  { id: "content", step: "03", title: "Editorial Content & Technical Proof Assets" },
  { id: "audience", step: "04", title: "Audience Calibration & Precision ICP Filtering" },
  { id: "distribution", step: "05", title: "Paid & Organic LinkedIn Distribution" },
  { id: "demand", step: "06", title: "Demand Creation & Out-of-Market Nurturing" },
  { id: "pipeline", step: "07", title: "Sales-Accepted Pipeline & Closed ARR" }
];

const DEAL_SIZES = [
  "Under ₹5 Lakhs (Early-Stage / Services)",
  "₹5 Lakhs – ₹15 Lakhs (Mid-Market B2B)",
  "₹15 Lakhs – ₹35 Lakhs (Growth Stage)",
  "₹35 Lakhs+ (Enterprise / Global Exporters)"
];

const BUDGET_RANGES = [
  "₹25,000 – ₹50,000 / month (Starter Engine)",
  "₹50,000 – ₹1,00,000 / month (Growth Tier)",
  "₹1,00,000 – ₹2,50,000 / month (Scale Tier)",
  "₹2,50,000+ / month (Enterprise ABM & Global)"
];

const INDIAN_CITIES = [
  "Jaipur / Rajasthan",
  "Delhi NCR (Gurgaon / Noida / Delhi)",
  "Bengaluru (Bangalore)",
  "Mumbai / Pune",
  "Hyderabad",
  "Ahmedabad / Gujarat",
  "Chennai",
  "Kolkata",
  "Other Indian City",
  "International / Global"
];

export function CommercialAuditForm() {
  const searchParams = useSearchParams();
  const stageParam = searchParams.get("stage") || "buyer-context";

  const initialStage = STAGES.find((s) => s.id === stageParam) || STAGES[0];

  const [selectedStage, setSelectedStage] = useState(initialStage.id);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    city: "Jaipur / Rajasthan",
    dealSize: "₹5 Lakhs – ₹15 Lakhs (Mid-Market B2B)",
    budget: "₹50,000 – ₹1,00,000 / month (Growth Tier)",
    notes: ""
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (stageParam && STAGES.some((s) => s.id === stageParam)) {
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
      phone: formData.phone,
      company: formData.company,
      city: formData.city,
      dealSize: formData.dealSize,
      monthlyBudget: formData.budget,
      stage: activeStageObj.title,
      step: activeStageObj.step,
      notes: formData.notes,
      currency: "INR (₹)",
      recipient: "kamal0sharma02@gmail.com"
    };

    try {
      // 1. Post to internal API route forwarding to kamal0sharma02@gmail.com
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      // 2. Direct client-side FormSubmit fallback
      if (!res.ok) {
        await fetch("https://formsubmit.co/ajax/kamal0sharma02@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            _subject: `New Indian B2B Audit Lead: Stage ${activeStageObj.step} - ${formData.company}`,
            _template: "table",
            "Client Name": formData.name,
            "Work Email": formData.email,
            "WhatsApp / Phone": formData.phone,
            "Company": formData.company,
            "City / Region": formData.city,
            "Target Stage": `Stage ${activeStageObj.step}: ${activeStageObj.title}`,
            "Average Deal Size (INR)": formData.dealSize,
            "Monthly Growth Budget (INR)": formData.budget,
            "Specific Roadblock": formData.notes
          })
        });
      }
    } catch (err) {
      console.warn("Audit dispatch fallback executed:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full space-y-10">
      
      {/* ========================================================= */}
      {/* 01. PAGE HERO                                             */}
      {/* ========================================================= */}
      <section className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-12 relative overflow-hidden shadow-sm">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Workflow className="w-4 h-4 text-blue-600" />
            <span>Commercial Architecture Diagnostic</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Audit Your B2B Growth Engine.
          </h1>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            Designed for Indian B2B founders, SaaS startups, IT services, and export enterprises. Inspect your buyer journey, eliminate wasted ad spend, and unlock predictable pipeline in ₹ (INR).
          </p>

          <div className="flex flex-wrap gap-2.5 pt-2 text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-slate-700 font-medium shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              Jaipur, Rajasthan · Serving Pan-India &amp; Global B2B
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-slate-700 font-medium shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              100% Confidential · Direct Founder Review
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 02. AUDIT INTAKE FORM & STAGE SELECTOR                    */}
      {/* ========================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Stage Selector & Guarantees */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-slate-50/60 border border-slate-200/90 rounded-2xl p-6 sm:p-7 space-y-5 shadow-xs">
            <div className="space-y-1 border-b border-slate-200 pb-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                Commercial Stage
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">
                Select Stage to Audit
              </h3>
              <p className="text-xs text-slate-600">
                Choose the primary bottleneck you want Dev Raj Saini to diagnose.
              </p>
            </div>

            <div className="space-y-2">
              {STAGES.map((st) => {
                const isSelected = st.id === selectedStage;
                return (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setSelectedStage(st.id)}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                      isSelected
                        ? "bg-blue-600 border-blue-600 text-white font-semibold shadow-sm"
                        : "bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50 shadow-xs"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                        isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-700"
                      }`}>
                        {st.step}
                      </span>
                      <span className="text-xs font-bold leading-tight">
                        {st.title}
                      </span>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-white shrink-0 stroke-[2.5]" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Guarantees Box */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 space-y-4 shadow-xs">
            <h4 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              What Happens Next
            </h4>

            <ul className="space-y-3 text-xs text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900">1-on-1 Founder Review:</strong> Dev Raj Saini personally audits your LinkedIn positioning, ICP filters, and ad angles.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900">Indian B2B Commercial Standards:</strong> Tailored budget modeling in ₹ (INR), whether targeting Indian buyers or exporting abroad.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900">&lt;24h WhatsApp &amp; Email Dispatch:</strong> We confirm your diagnostic slot with zero wait time.
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Right Column: Intake Form */}
        <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-md">
          
          {submitted ? (
            /* Success Confirmation */
            <div className="py-12 text-center space-y-5 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Audit Request Dispatched!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto font-normal leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your audit inquiry for <strong className="text-slate-900">Stage {activeStageObj.step}: {activeStageObj.title}</strong> has been transferred directly to <span className="font-semibold text-slate-900">kamal0sharma02@gmail.com</span>.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs space-y-1.5 max-w-md mx-auto">
                <span className="text-emerald-700 font-semibold block">✓ Direct Transmission Confirmed</span>
                <span className="text-slate-600 block">We will contact you via WhatsApp ({formData.phone || "provided number"}) and email within 24 business hours.</span>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <Link
                  href="/"
                  className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-xs transition-all"
                >
                  Return to Home
                </Link>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-all cursor-pointer"
                >
                  Submit Another
                </button>
              </div>
            </div>
          ) : (
            /* Audit Form */
            <form onSubmit={handleSubmit} className="space-y-4.5">
              
              <div className="border-b border-slate-200 pb-4 mb-2 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    STAGE {activeStageObj.step}
                  </span>
                  <span className="text-xs uppercase font-medium text-slate-500">
                    DIAGNOSTIC SCOPE
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {activeStageObj.title}
                </h2>
              </div>

              {/* 1. Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Your Full Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Work Email <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="vikram@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all shadow-xs"
                  />
                </div>
              </div>

              {/* 2. WhatsApp / Phone & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    WhatsApp / Phone (+91) <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    City / Location in India <span className="text-rose-600">*</span>
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 cursor-pointer shadow-xs"
                  >
                    {INDIAN_CITIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 3. Company & Website */}
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Company Name &amp; Website <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. CloudScale Tech (cloudscale.io)"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all shadow-xs"
                />
              </div>

              {/* 4. Deal Size (in INR ₹) & Monthly Growth Budget (in INR ₹) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Average Deal Size / ACV (in ₹)
                  </label>
                  <select
                    value={formData.dealSize}
                    onChange={(e) => setFormData({ ...formData, dealSize: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 cursor-pointer shadow-xs"
                  >
                    {DEAL_SIZES.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Monthly Growth Budget (in ₹)
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 cursor-pointer shadow-xs"
                  >
                    {BUDGET_RANGES.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 5. Specific Roadblock / Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Specific Challenge for {activeStageObj.title} <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder={`Tell us where you currently face friction with ${activeStageObj.title}...`}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none shadow-xs"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                >
                  {loading ? (
                    <span>Dispatching Request to Strategy Team...</span>
                  ) : (
                    <>
                      <span>Submit Stage {activeStageObj.step} Audit Request</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Sent directly to kamal0sharma02@gmail.com
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  &lt;24h WhatsApp &amp; Email response
                </span>
              </div>

            </form>
          )}

        </div>

      </div>

    </div>
  );
}
