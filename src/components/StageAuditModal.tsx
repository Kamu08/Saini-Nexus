"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  Zap, 
  ShieldCheck, 
  Clock 
} from "lucide-react";

export interface StageAuditInfo {
  step: string;
  title: string;
  subtitle: string;
  question: string;
  phase: string;
  metrics: string;
}

interface StageAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  stage: StageAuditInfo | null;
}

export function StageAuditModal({ isOpen, onClose, stage }: StageAuditModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    dealSize: "Under ₹5 Lakhs",
    notes: ""
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !stage) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name: formData.name,
      workEmail: formData.email,
      company: formData.company,
      dealSize: formData.dealSize,
      notes: formData.notes,
      stage: stage.title,
      step: stage.step
    };

    try {
      // 1. Post to our internal API route which proxies to both recipients
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      // 2. Client-side direct fallback to ensure delivery to both recipients
      if (!res.ok) {
        const fallbackPayload = {
          _subject: `New Commercial Audit Lead: Stage ${stage.step} - ${stage.title}`,
          _template: "table",
          _cc: "devraj@saininexus.com",
          "Full Name": formData.name,
          "Work Email": formData.email,
          "Company": formData.company,
          "Target Stage": `Stage ${stage.step}: ${stage.title}`,
          "Deal Size": formData.dealSize,
          "Notes": formData.notes
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
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 sm:p-8 z-10 space-y-6 max-h-[92vh] overflow-y-auto no-scrollbar"
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold uppercase">
                  STAGE {stage.step} AUDIT INTAKE
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  {stage.phase}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                {stage.title} Commercial Audit
              </h3>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-all cursor-pointer shrink-0"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {submitted ? (
            /* Success State */
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-1">
                <h4 className="text-2xl font-extrabold text-slate-900">
                  Audit Request Dispatched
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto font-normal">
                  Your diagnostic request for <strong className="text-slate-900">Stage {stage.step}: {stage.title}</strong> has been transferred directly to our senior growth leadership.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs space-y-1 max-w-md mx-auto">
                <span className="text-emerald-700 font-semibold block">✓ Lead Routing Protocol Confirmed</span>
                <span className="text-slate-600 block">We will audit your buyer architecture and email your customized assessment within 24 business hours.</span>
              </div>

              <button
                onClick={onClose}
                className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs uppercase font-semibold tracking-wider cursor-pointer shadow-sm transition-all"
              >
                Close &amp; Return
              </button>
            </div>
          ) : (
            /* Audit Intake Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Question Context Pill */}
              <div className="p-3.5 bg-blue-50/50 border border-blue-100 rounded-xl text-xs space-y-0.5">
                <span className="text-blue-600 font-semibold uppercase text-[10px] block">
                  Diagnostic Problem Being Analyzed:
                </span>
                <span className="text-slate-700 italic block text-xs sm:text-sm">
                  &ldquo;{stage.question}&rdquo;
                </span>
              </div>

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Your Name <span className="text-rose-600">*</span>
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

              {/* Company & Deal Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Company Name &amp; Website <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CloudScale (cloudscale.io)"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Estimated Deal Size (ACV)
                  </label>
                  <select
                    value={formData.dealSize}
                    onChange={(e) => setFormData({ ...formData, dealSize: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 cursor-pointer shadow-xs"
                  >
                    <option value="Under ₹5 Lakhs">Under ₹5 Lakhs (Early-Stage / Services)</option>
                    <option value="₹5 Lakhs – ₹15 Lakhs">₹5 Lakhs – ₹15 Lakhs (Mid-Market B2B)</option>
                    <option value="₹15 Lakhs – ₹35 Lakhs">₹15 Lakhs – ₹35 Lakhs (Growth Stage)</option>
                    <option value="₹35 Lakhs+">₹35 Lakhs+ (Enterprise / Global Exporters)</option>
                  </select>
                </div>
              </div>

              {/* Current Roadblock / Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Specific Challenge for {stage.title} <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder={`Tell us where you currently face roadblocks regarding ${stage.title}...`}
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
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                >
                  {loading ? (
                    <span>Dispatching Diagnostic to Strategy Team...</span>
                  ) : (
                    <>
                      <span>Submit Stage {stage.step} Audit Request</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Sent directly to strategy team
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  &lt;24h turnaround
                </span>
              </div>

            </form>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
