import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Target, 
  Video,
  AlertCircle,
  Building2,
  Users2
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Book a B2B Growth Strategy Conversation | Saini Nexus",
  description: "Schedule a focused 30-minute B2B growth and LinkedIn strategy conversation with Dev Raj Saini and the Saini Nexus strategy team.",
  alternates: {
    canonical: "https://saininexus.com/book",
  },
};

export default function BookStrategyCallPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16 space-y-10 sm:space-y-14">
      <Breadcrumbs items={[{ label: "Book a Strategy Conversation" }]} />

      {/* Hero */}
      <section className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-sm">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            Executive Strategy Consultation
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
            Book a Strategy <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Conversation</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
            No aggressive pitches. No generic slides. A focused 30-minute diagnostic discussion of your ideal customer profile, buyer journey, LinkedIn acquisition model, and pipeline bottlenecks.
          </p>
        </div>
      </section>

      {/* Main 2-Column Booking Interface */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Agenda & Preparation */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">Call Agenda</span>
              <h2 className="text-2xl font-bold text-slate-900">What We Cover in 30 Minutes</h2>
            </div>

            <div className="space-y-3.5">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80">
                <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                  01
                </span>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-900">ICP & Buying Committee Calibration</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">Reviewing target firmographics, job title seniority, and account list exclusions to prevent wasted ad spend.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80">
                <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                  02
                </span>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-900">Commercial Point-of-View & Messaging Audit</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">Evaluating whether your messaging resonates with the 95% of buyers who are currently out-of-market.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80">
                <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                  03
                </span>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-900">LinkedIn Channel & ABM Architecture</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">Assessing the optimal mix between Thought Leader Ads, Document carousels, and Lead Gen forms.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80">
                <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                  04
                </span>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-900">Actionable 90-Day Pipeline Roadmap</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">Concrete steps to improve Sales Acceptance Rate (SAR) and reduce Customer Acquisition Cost (CAC).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Qualification Gate */}
          <div className="bg-blue-50/50 border border-blue-200/80 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-center gap-2 text-blue-700 text-xs font-mono uppercase tracking-wider font-bold">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Ideal Fit Criteria
            </div>
            <h3 className="text-lg font-bold text-slate-900">Who Gets the Most Value From This Call</h3>
            <ul className="space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span>B2B SaaS, Technology, IT Services, or Enterprise Consulting firms with Deal Size &gt; ₹2 Lakhs.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span>Industrial Manufacturing exporters seeking direct global buyers.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span>Founders & Marketing Leaders ready to build an integrated pipeline engine.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Right Column: Direct Calendar / Booking Request Form */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">Direct Scheduling</span>
              <h2 className="text-2xl font-bold text-slate-900">Request Strategy Session</h2>
              <p className="text-xs text-slate-600 font-normal">Submit your details below and our team will confirm your session slot within 4 business hours.</p>
            </div>

            <form 
              action="https://formsubmit.co/kamal0sharma02@gmail.com" 
              method="POST" 
              className="space-y-4 text-xs font-sans"
            >
              <input type="hidden" name="_cc" value="devraj@saininexus.com" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="New Strategy Call Request - Saini Nexus" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-700 text-xs font-medium">Your Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Vikram Sharma"
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-slate-700 text-xs font-medium">Work Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="vikram@company.com"
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-700 text-xs font-medium">Company Website *</label>
                  <input
                    type="text"
                    name="website"
                    required
                    placeholder="company.com"
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-slate-700 text-xs font-medium">Job Title *</label>
                  <input
                    type="text"
                    name="title"
                    required
                    placeholder="Founder / VP Marketing"
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-700 text-xs font-medium">Primary Commercial Objective *</label>
                <select
                  name="objective"
                  className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-3 text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                >
                  <option value="scale-linkedin-ads">Scale LinkedIn Ads & Thought Leader Ads</option>
                  <option value="build-demand-generation">Build B2B Demand Generation Engine</option>
                  <option value="account-based-marketing">Deploy Account-Based Marketing (ABM)</option>
                  <option value="founder-authority">Build Founder & Executive Authority</option>
                  <option value="lead-pipeline">Fix Lead Quality & Pipeline Generation</option>
                  <option value="other">Full-Funnel B2B Growth Strategy</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-700 text-xs font-medium">Current Monthly Marketing / Ad Budget</label>
                <select
                  name="budget"
                  className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-3 text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                >
                  <option value="starter">₹25,000 – ₹50,000 / month (Starter Engine)</option>
                  <option value="growth">₹50,000 – ₹1,00,000 / month (Growth Tier)</option>
                  <option value="scale">₹1,00,000 – ₹2,50,000 / month (Scale Tier)</option>
                  <option value="enterprise">₹2,50,000+ / month (Enterprise & Global)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-700 text-xs font-medium">Current Growth Roadblock / Notes</label>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="Share any specific context about your current sales cycle, target ICP, or recent acquisition tests..."
                  className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none font-medium"
                />
              </div>

              <button
                type="submit"
                className="neo-btn-blue w-full py-3.5 text-sm uppercase tracking-wider"
              >
                Confirm Strategy Call Request
              </button>

              <div className="flex items-center justify-center gap-2 text-slate-500 text-[11px] pt-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>NDA Protected · Direct Senior Strategist Access · No Spam</span>
              </div>
            </form>
          </div>
        </div>

      </section>
    </div>
  );
}
