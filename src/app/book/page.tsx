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
  description: "Schedule a high-intent 45-minute B2B growth and LinkedIn acquisition consultation with the Saini Nexus strategy team.",
  alternates: {
    canonical: "https://saininexus.com/book",
  },
};

export default function BookStrategyCallPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-10 sm:space-y-14">
      <Breadcrumbs items={[{ label: "Book a Strategy Conversation" }]} />

      {/* Hero */}
      <section className="bg-white border-2 border-black rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-[6px_6px_0px_#000000]">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
            <Calendar className="w-3.5 h-3.5" />
            Executive Strategy Consultation
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-black leading-tight tracking-tight">
            Book a Strategy <span className="bubble-highlight-blue">Conversation</span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-700 leading-relaxed font-medium">
            No sales pitches. No generic slides. A direct, diagnostic audit of your ideal customer profile, buyer journey, LinkedIn acquisition model, and pipeline bottlenecks.
          </p>
        </div>
      </section>

      {/* Main 2-Column Booking Interface */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Agenda & Preparation */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 space-y-6 shadow-[4px_4px_0px_#000000]">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold">Call Agenda</span>
              <h2 className="text-2xl font-serif font-bold text-black">What We Cover in 45 Minutes</h2>
            </div>

            <div className="space-y-3.5">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#FAF7EF] border-2 border-black shadow-[2px_2px_0px_#000000]">
                <span className="w-8 h-8 rounded-xl bg-[#60A5FA] border-2 border-black text-black flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 shadow-[1px_1px_0px_#000000]">
                  01
                </span>
                <div className="space-y-1">
                  <h3 className="text-sm font-serif font-bold text-black">ICP & Buying Committee Calibration</h3>
                  <p className="text-xs text-zinc-700 leading-relaxed font-normal">Reviewing target firmographics, job title seniority, and account list exclusions to prevent wasted ad spend.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#FAF7EF] border-2 border-black shadow-[2px_2px_0px_#000000]">
                <span className="w-8 h-8 rounded-xl bg-[#60A5FA] border-2 border-black text-black flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 shadow-[1px_1px_0px_#000000]">
                  02
                </span>
                <div className="space-y-1">
                  <h3 className="text-sm font-serif font-bold text-black">Commercial Point-of-View & Messaging Audit</h3>
                  <p className="text-xs text-zinc-700 leading-relaxed font-normal">Evaluating whether your messaging resonates with the 95% of buyers who are currently out-of-market.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#FAF7EF] border-2 border-black shadow-[2px_2px_0px_#000000]">
                <span className="w-8 h-8 rounded-xl bg-[#60A5FA] border-2 border-black text-black flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 shadow-[1px_1px_0px_#000000]">
                  03
                </span>
                <div className="space-y-1">
                  <h3 className="text-sm font-serif font-bold text-black">LinkedIn Channel & ABM Architecture</h3>
                  <p className="text-xs text-zinc-700 leading-relaxed font-normal">Assessing the optimal mix between Thought Leader Ads, Document carousels, and Lead Gen forms.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#FAF7EF] border-2 border-black shadow-[2px_2px_0px_#000000]">
                <span className="w-8 h-8 rounded-xl bg-[#60A5FA] border-2 border-black text-black flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 shadow-[1px_1px_0px_#000000]">
                  04
                </span>
                <div className="space-y-1">
                  <h3 className="text-sm font-serif font-bold text-black">Actionable 90-Day Pipeline Roadmap</h3>
                  <p className="text-xs text-zinc-700 leading-relaxed font-normal">Concrete steps to improve Sales Acceptance Rate (SAR) and reduce Customer Acquisition Cost (CAC).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Qualification Gate */}
          <div className="bg-[#EFF6FF] border-2 border-black rounded-3xl p-6 sm:p-8 space-y-4 shadow-[4px_4px_0px_#000000]">
            <div className="flex items-center gap-2 text-black text-xs font-mono uppercase tracking-wider font-bold">
              <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
              Ideal Fit Criteria
            </div>
            <h3 className="text-lg font-serif font-bold text-black">Who Gets the Most Value From This Call</h3>
            <ul className="space-y-2 text-xs text-zinc-800 font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>B2B SaaS, Technology, IT Services, or Enterprise Consulting firms with ACV &gt; $5,000.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>Industrial Manufacturing exporters seeking direct global buyers.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>Founders & Marketing Leaders ready to build an integrated pipeline engine.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Right Column: Direct Calendar / Booking Request Form */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 space-y-6 shadow-[4px_4px_0px_#000000]">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold">Direct Scheduling</span>
              <h2 className="text-2xl font-serif font-bold text-black">Request Strategy Session</h2>
              <p className="text-xs text-zinc-700 font-medium">Submit your details below and our team will confirm your session slot within 4 business hours.</p>
            </div>

            <form 
              action="https://formsubmit.co/kamal0sharma02@gmail.com" 
              method="POST" 
              className="space-y-4 text-xs font-mono"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-black uppercase font-bold">Your Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Vikram Sharma"
                    className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl p-3 text-black placeholder:text-zinc-500 focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] transition-all font-medium"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-black uppercase font-bold">Work Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="vikram@company.com"
                    className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl p-3 text-black placeholder:text-zinc-500 focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] transition-all font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-black uppercase font-bold">Company Website *</label>
                  <input
                    type="text"
                    name="website"
                    required
                    placeholder="company.com"
                    className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl p-3 text-black placeholder:text-zinc-500 focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] transition-all font-medium"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-black uppercase font-bold">Job Title *</label>
                  <input
                    type="text"
                    name="title"
                    required
                    placeholder="Founder / VP Marketing"
                    className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl p-3 text-black placeholder:text-zinc-500 focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-black uppercase font-bold">Primary Commercial Objective *</label>
                <select
                  name="objective"
                  className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl p-3 text-black focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] transition-all font-medium"
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
                <label className="text-black uppercase font-bold">Current Monthly Marketing / Ad Budget</label>
                <select
                  name="budget"
                  className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl p-3 text-black focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] transition-all font-medium"
                >
                  <option value="under-2k">$1,500 – $3,000 / month (₹1.2L – ₹2.5L)</option>
                  <option value="3k-10k">$3,000 – $10,000 / month (₹2.5L – ₹8L)</option>
                  <option value="10k-25k">$10,000 – $25,000 / month (₹8L – ₹20L)</option>
                  <option value="25k-plus">$25,000+ / month (₹20L+)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-black uppercase font-bold">Current Growth Roadblock / Notes</label>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="Share any specific context about your current sales cycle, target ICP, or recent acquisition tests..."
                  className="w-full bg-[#FAF7EF] border-2 border-black rounded-xl p-3 text-black placeholder:text-zinc-500 focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000000] transition-all resize-none font-medium"
                />
              </div>

              <button
                type="submit"
                className="neo-btn-blue w-full py-4 text-sm uppercase tracking-wider"
              >
                Confirm Strategy Call Request
              </button>

              <div className="flex items-center justify-center gap-2 text-zinc-600 text-[11px] pt-1 font-semibold">
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
