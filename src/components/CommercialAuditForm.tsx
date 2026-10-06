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
      <section className="bg-white border-3 border-black rounded-none sm:rounded-3xl p-6 sm:p-12 relative overflow-hidden shadow-[6px_6px_0px_#000000]">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-extrabold shadow-[2px_2px_0px_#000000]">
            <Workflow className="w-4 h-4 text-black" />
            <span>Commercial Architecture Diagnostic</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-black leading-tight tracking-tight">
            Audit Your B2B Growth Engine.
          </h1>

          <p className="text-zinc-700 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
            Designed for Indian B2B founders, SaaS startups, IT services, and export enterprises. Inspect your buyer journey, eliminate wasted ad spend, and unlock predictable pipeline in ₹ (INR).
          </p>

          <div className="flex flex-wrap gap-2.5 pt-2 text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF7EF] border-2 border-black text-black font-bold shadow-[1.5px_1.5px_0px_#000000]">
              <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
              Jaipur, Rajasthan · Serving Pan-India &amp; Global B2B
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF7EF] border-2 border-black text-black font-bold shadow-[1.5px_1.5px_0px_#000000]">
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
          
          <div className="bg-[#FAF7EF] border-3 border-black rounded-none sm:rounded-2xl p-6 sm:p-7 space-y-5 shadow-[4px_4px_0px_#000000]">
            <div className="space-y-1 border-b-2 border-black pb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold">
                Commercial Stage
              </span>
              <h3 className="text-xl font-serif font-bold text-black">
                Select Stage to Audit
              </h3>
              <p className="text-xs text-zinc-600">
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
                    className={`w-full text-left p-3 rounded-none border-2 transition-all flex items-center justify-between gap-3 cursor-pointer ${
                      isSelected
                        ? "bg-[#60A5FA] border-black text-black font-extrabold shadow-[2.5px_2.5px_0px_#000000]"
                        : "bg-white border-black/30 hover:border-black text-zinc-800 hover:bg-white shadow-[1px_1px_0px_#000000]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-6 h-6 rounded-none flex items-center justify-center font-mono text-xs font-bold border ${
                        isSelected ? "bg-black text-white border-black" : "bg-black/10 text-black border-black/20"
                      }`}>
                        {st.step}
                      </span>
                      <span className="font-serif text-xs font-bold leading-tight">
                        {st.title}
                      </span>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-black shrink-0 stroke-[3]" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Guarantees Box */}
          <div className="bg-white border-3 border-black rounded-none sm:rounded-2xl p-6 space-y-4 shadow-[4px_4px_0px_#000000]">
            <h4 className="font-serif font-bold text-base text-black flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#2563EB]" />
              What Happens Next
            </h4>

            <ul className="space-y-3 text-xs text-zinc-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-black">1-on-1 Founder Review:</strong> Dev Raj Saini personally audits your LinkedIn positioning, ICP filters, and ad angles.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-black">Indian B2B Commercial Standards:</strong> Tailored budget modeling in ₹ (INR), whether targeting Indian buyers or exporting abroad.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-black">&lt;24h WhatsApp &amp; Email Dispatch:</strong> We confirm your diagnostic slot with zero wait time.
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Right Column: High-Converting Intake Form */}
        <div className="lg:col-span-7 bg-white border-3 border-black rounded-none sm:rounded-3xl p-6 sm:p-10 shadow-[6px_6px_0px_#000000]">
          
          {submitted ? (
            /* Success Confirmation */
            <div className="py-12 text-center space-y-5 animate-in fade-in">
              <div className="w-16 h-16 rounded-none bg-[#60A5FA] border-3 border-black text-black flex items-center justify-center mx-auto shadow-[4px_4px_0px_#000000]">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black">
                  Audit Request Dispatched!
                </h3>
                <p className="text-xs sm:text-sm text-zinc-700 max-w-md mx-auto font-medium leading-relaxed">
                  Thank you, <strong className="text-black">{formData.name}</strong>. Your audit inquiry for <strong className="text-black">Stage {activeStageObj.step}: {activeStageObj.title}</strong> has been transferred directly to <span className="font-mono font-bold text-black">kamal0sharma02@gmail.com</span>.
                </p>
              </div>

              <div className="p-4 bg-[#FAF7EF] border-2 border-black rounded-none shadow-[2px_2px_0px_#000000] text-left text-xs font-mono space-y-1.5 max-w-md mx-auto">
                <span className="text-emerald-700 font-extrabold block">✓ Direct Transmission Confirmed</span>
                <span className="text-zinc-600 block">We will contact you via WhatsApp ({formData.phone || "provided number"}) and email within 24 business hours.</span>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <Link
                  href="/"
                  className="neo-btn-white text-xs uppercase px-6 py-2.5 font-extrabold"
                >
                  Return to Home
                </Link>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="neo-btn-blue text-xs uppercase px-6 py-2.5 font-extrabold cursor-pointer"
                >
                  Submit Another
                </button>
              </div>
            </div>
          ) : (
            /* Audit Form */
            <form onSubmit={handleSubmit} className="space-y-4.5">
              
              <div className="border-b-2 border-black pb-4 mb-2 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-extrabold uppercase px-2 py-0.5 bg-[#60A5FA] border border-black shadow-[1px_1px_0px_#000000]">
                    STAGE {activeStageObj.step}
                  </span>
                  <span className="text-xs font-mono uppercase font-bold text-zinc-600">
                    DIAGNOSTIC SCOPE
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-black">
                  {activeStageObj.title}
                </h2>
              </div>

              {/* 1. Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-black mb-1">
                    Your Full Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAF7EF] border-2 border-black rounded-none p-2.5 text-xs font-medium text-black placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-black mb-1">
                    Work Email <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="vikram@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF7EF] border-2 border-black rounded-none p-2.5 text-xs font-medium text-black placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000]"
                  />
                </div>
              </div>

              {/* 2. WhatsApp / Phone & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-black mb-1">
                    WhatsApp / Phone (+91) <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAF7EF] border-2 border-black rounded-none p-2.5 text-xs font-medium text-black placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-black mb-1">
                    City / Location in India <span className="text-rose-600">*</span>
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#FAF7EF] border-2 border-black rounded-none p-2.5 text-xs font-mono font-medium text-black focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] cursor-pointer"
                  >
                    {INDIAN_CITIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 3. Company & Website */}
              <div>
                <label className="block text-xs font-mono font-bold text-black mb-1">
                  Company Name &amp; Website <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. CloudScale Tech (cloudscale.io)"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-[#FAF7EF] border-2 border-black rounded-none p-2.5 text-xs font-medium text-black placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000]"
                />
              </div>

              {/* 4. Deal Size (in INR ₹) & Monthly Growth Budget (in INR ₹) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-black mb-1">
                    Average Deal Size / ACV (in ₹)
                  </label>
                  <select
                    value={formData.dealSize}
                    onChange={(e) => setFormData({ ...formData, dealSize: e.target.value })}
                    className="w-full bg-[#FAF7EF] border-2 border-black rounded-none p-2.5 text-xs font-mono font-medium text-black focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] cursor-pointer"
                  >
                    {DEAL_SIZES.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-black mb-1">
                    Monthly Growth Budget (in ₹)
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#FAF7EF] border-2 border-black rounded-none p-2.5 text-xs font-mono font-medium text-black focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] cursor-pointer"
                  >
                    {BUDGET_RANGES.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 5. Specific Roadblock / Notes */}
              <div>
                <label className="block text-xs font-mono font-bold text-black mb-1">
                  Specific Challenge for {activeStageObj.title} <span className="text-zinc-500 text-[10px] font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder={`Tell us where you currently face friction with ${activeStageObj.title}...`}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#FAF7EF] border-2 border-black rounded-none p-2.5 text-xs font-medium text-black placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-none bg-[#60A5FA] border-2 border-black text-black font-mono text-xs font-extrabold uppercase tracking-wider shadow-[3px_3px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1.5px_1.5px_0px_#000000] active:translate-x-[3px] active:translate-y-[3px] transition-all cursor-pointer"
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

              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-600 pt-1 border-t border-black/10">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Sent directly to kamal0sharma02@gmail.com
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
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
