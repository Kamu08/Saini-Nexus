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
      step: stage.step,
      recipient: "kamal0sharma02@gmail.com"
    };

    try {
      // 1. Post to our internal API route which proxies to FormSubmit for kamal0sharma02@gmail.com
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      // 2. Client-side direct fallback to ensure delivery to kamal0sharma02@gmail.com
      if (!res.ok) {
        await fetch("https://formsubmit.co/ajax/kamal0sharma02@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            _subject: `New Commercial Audit Lead: Stage ${stage.step} - ${stage.title}`,
            _template: "table",
            "Full Name": formData.name,
            "Work Email": formData.email,
            "Company": formData.company,
            "Target Stage": `Stage ${stage.step}: ${stage.title}`,
            "Deal Size": formData.dealSize,
            "Notes": formData.notes
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
          className="relative w-full max-w-xl bg-[#FAF7EF] border-3 border-black shadow-[8px_8px_0px_#000000] p-6 sm:p-8 z-10 space-y-6 max-h-[92vh] overflow-y-auto no-scrollbar"
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between gap-4 border-b-2 border-black pb-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-none bg-[#60A5FA] border-2 border-black text-black font-mono text-[11px] font-extrabold uppercase shadow-[1.5px_1.5px_0px_#000000]">
                  STAGE {stage.step} AUDIT INTAKE
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-600">
                  {stage.phase}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-black tracking-tight">
                {stage.title} Commercial Audit
              </h3>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-none border-2 border-black bg-white hover:bg-rose-100 flex items-center justify-center text-black font-bold shadow-[2px_2px_0px_#000000] transition-all cursor-pointer shrink-0"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {submitted ? (
            /* Success State */
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-none bg-[#60A5FA] border-3 border-black text-black flex items-center justify-center mx-auto shadow-[4px_4px_0px_#000000]">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-1">
                <h4 className="text-2xl font-serif font-bold text-black">
                  Audit Request Dispatched
                </h4>
                <p className="text-xs sm:text-sm text-zinc-700 max-w-md mx-auto font-medium">
                  Your diagnostic request for <strong className="text-black">Stage {stage.step}: {stage.title}</strong> has been transferred to Dev Raj Saini (<span className="font-mono text-zinc-900 font-bold">kamal0sharma02@gmail.com</span>).
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-black rounded-none shadow-[2.5px_2.5px_0px_#000000] text-left text-xs font-mono space-y-1 max-w-md mx-auto">
                <span className="text-emerald-700 font-extrabold block">✓ Lead Routing Protocol Confirmed</span>
                <span className="text-zinc-600 block">We will audit your buyer architecture and email your customized assessment within 24 business hours.</span>
              </div>

              <button
                onClick={onClose}
                className="neo-btn-blue text-xs uppercase px-8 py-3 font-extrabold cursor-pointer"
              >
                Close &amp; Return
              </button>
            </div>
          ) : (
            /* Audit Intake Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Question Context Pill */}
              <div className="p-3 bg-white border-2 border-black rounded-none text-xs font-mono space-y-0.5 shadow-[2px_2px_0px_#000000]">
                <span className="text-[#2563EB] font-extrabold uppercase text-[10px] block">
                  Diagnostic Problem Being Analyzed:
                </span>
                <span className="text-zinc-800 italic block font-serif text-xs sm:text-sm">
                  &ldquo;{stage.question}&rdquo;
                </span>
              </div>

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-mono font-bold text-black mb-1">
                    Your Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border-2 border-black rounded-none p-2.5 text-xs font-medium text-black placeholder:text-zinc-400 focus:outline-none focus:shadow-[2px_2px_0px_#000000]"
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
                    className="w-full bg-white border-2 border-black rounded-none p-2.5 text-xs font-medium text-black placeholder:text-zinc-400 focus:outline-none focus:shadow-[2px_2px_0px_#000000]"
                  />
                </div>
              </div>

              {/* Company & Deal Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-mono font-bold text-black mb-1">
                    Company Name &amp; Website <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CloudScale (cloudscale.io)"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white border-2 border-black rounded-none p-2.5 text-xs font-medium text-black placeholder:text-zinc-400 focus:outline-none focus:shadow-[2px_2px_0px_#000000]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-black mb-1">
                    Estimated Deal Size (ACV)
                  </label>
                  <select
                    value={formData.dealSize}
                    onChange={(e) => setFormData({ ...formData, dealSize: e.target.value })}
                    className="w-full bg-white border-2 border-black rounded-none p-2.5 text-xs font-mono font-medium text-black focus:outline-none focus:shadow-[2px_2px_0px_#000000] cursor-pointer"
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
                <label className="block text-xs font-mono font-bold text-black mb-1">
                  Specific Challenge for {stage.title} <span className="text-zinc-500 text-[10px] font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder={`Tell us where you currently face roadblocks regarding ${stage.title}...`}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-white border-2 border-black rounded-none p-2.5 text-xs font-medium text-black placeholder:text-zinc-400 focus:outline-none focus:shadow-[2px_2px_0px_#000000] resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-none bg-[#60A5FA] border-2 border-black text-black font-mono text-xs font-extrabold uppercase tracking-wider shadow-[3px_3px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1.5px_1.5px_0px_#000000] active:translate-x-[3px] active:translate-y-[3px] transition-all cursor-pointer"
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

              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-600 pt-1 border-t border-black/10">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Sent directly to strategy team
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#2563EB]" />
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
