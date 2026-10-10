"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  ThumbsUp, 
  MessageSquare, 
  Share2, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp,
  FileText,
  User,
  ShieldCheck,
  Zap,
  Eye,
  Sliders
} from "lucide-react";

export function InteractiveAdMockup() {
  const [activeFormat, setActiveFormat] = useState<"tla" | "document" | "leadgen">("tla");

  return (
    <div className="w-full bg-slate-50/60 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm relative overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Interactive Creative Studio</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            See What High-Converting LinkedIn Ads Look Like
          </h3>
          <p className="text-slate-600 text-sm mt-1 max-w-xl font-normal">
            Toggle between our core advertising formats to see how we position B2B brands and founders inside the buyer&apos;s feed.
          </p>
        </div>

        {/* Format Switcher Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-xs">
          <button
            onClick={() => setActiveFormat("tla")}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeFormat === "tla"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            🎙️ Thought Leader Ad
          </button>
          <button
            onClick={() => setActiveFormat("document")}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeFormat === "document"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            📄 Document Carousel
          </button>
          <button
            onClick={() => setActiveFormat("leadgen")}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeFormat === "leadgen"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            ⚡ Native Lead Gen Form
          </button>
        </div>
      </div>

      {/* Main Interactive Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: The Realistic LinkedIn In-Feed Ad Simulator */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-slate-200/90 rounded-2xl shadow-md p-5 sm:p-6 space-y-4 max-w-xl mx-auto">
            
            {/* Ad Header Bar */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-200 bg-slate-100 ring-2 ring-slate-100">
                  <Image
                    src={activeFormat === "tla" ? "/team/dev-raj-saini.jpg" : "/saini-nexus-logo.png"}
                    alt="Author"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5 font-sans">
                    <span>{activeFormat === "tla" ? "Dev Raj Saini" : "Saini Nexus"}</span>
                    <span className="text-[10px] text-slate-400 font-normal">• 1st</span>
                  </div>
                  <div className="text-[11px] text-slate-600 line-clamp-1 font-normal">
                    {activeFormat === "tla" 
                      ? "Founder @ Saini Nexus | B2B Growth & Pipeline Architecture" 
                      : "B2B Marketing & LinkedIn Advertising Company"}
                  </div>
                  <div className="text-[10px] text-slate-400 flex items-center gap-1">
                    <span>Promoted by Saini Nexus</span>
                    <span>•</span>
                    <span className="text-blue-600 font-semibold">🌐 Sponsored</span>
                  </div>
                </div>
              </div>
              <span className="text-slate-400 text-xs font-bold">•••</span>
            </div>

            {/* Ad Copy Body */}
            {activeFormat === "tla" && (
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                <p className="font-bold text-slate-900">
                  95% of your target B2B buyers are NOT in the market today.
                </p>
                <p className="text-slate-600">
                  If 100% of your LinkedIn budget is spent screaming &ldquo;Book a Demo&rdquo; to cold audiences, you&apos;re paying ₹20,000+ CPLs for junior staff with zero budget authority.
                </p>
                <p className="text-slate-600">
                  Here is the 4-point Demand Architecture we deploy to generate qualified, sales-accepted conversations:
                </p>
                <div className="p-3.5 bg-blue-50/50 border border-blue-100 rounded-xl space-y-1.5 text-xs">
                  <div className="font-bold text-slate-900 uppercase text-[11px]">The 4-Point Pre-Flight Audit:</div>
                  <div className="text-slate-700">1. Strict Seniority Negative Exclusions (Cut 46% waste)</div>
                  <div className="text-slate-700">2. Ungated Technical Architecture Teardowns</div>
                  <div className="text-slate-700">3. Matched Account (ABM) Buying Group Coverage</div>
                  <div className="text-slate-700">4. Founder POV Thought Leader Ad Sponsorship</div>
                </div>
              </div>
            )}

            {activeFormat === "document" && (
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p className="font-bold text-slate-900">
                  The Complete 2026 B2B LinkedIn Ads & Demand Generation Playbook [8 Pages].
                </p>
                <p className="text-slate-600 text-xs">
                  Swipe through for the full full-funnel budget allocation, creative hooks, and CRM speed-to-lead routing setup.
                </p>
                {/* Simulated Document Carousel Slider Preview */}
                <div className="bg-slate-50 text-slate-900 rounded-xl p-6 space-y-4 text-center relative overflow-hidden border border-slate-200 shadow-xs">
                  <div className="flex justify-between items-center text-[10px] text-slate-500 font-semibold">
                    <span>SAINI NEXUS RESEARCH</span>
                    <span className="text-slate-400">SLIDE 01 / 08</span>
                  </div>
                  <div className="py-4 space-y-2">
                    <div className="text-xs uppercase text-blue-600 tracking-wider font-semibold">EXECUTIVE PLAYBOOK</div>
                    <div className="text-xl font-bold text-slate-900">How To Scale Enterprise Pipeline via LinkedIn Ads</div>
                    <div className="text-xs text-slate-500 max-w-xs mx-auto font-normal">From ICP calibration to 82% Sales-Accepted Leads</div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                    <span>PDF (8 Pages)</span>
                    <span className="text-blue-600 font-semibold">Swipe to read →</span>
                  </div>
                </div>
              </div>
            )}

            {activeFormat === "leadgen" && (
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p className="font-bold text-slate-900">
                  Audit your B2B LinkedIn Ads & Pipeline Architecture.
                </p>
                <p className="text-slate-600 text-xs">
                  Get a comprehensive 45-minute diagnostic review of your target account list, CPL efficiency, and buyer journey friction.
                </p>
                {/* Simulated Lead Gen Form Card */}
                <div className="bg-blue-50/50 border border-blue-200/80 rounded-xl p-4 space-y-3 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-blue-200/60">
                    <span className="font-semibold text-slate-900">1-Click Fast Qualification</span>
                    <span className="text-[10px] text-emerald-700 font-semibold">✓ LinkedIn Verified</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-slate-700 text-[11px] shadow-xs">
                      Work Email: <strong className="text-slate-900">vikram@techcorp.io</strong>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-slate-700 text-[11px] shadow-xs">
                      Job Title: <strong className="text-slate-900">VP of Marketing / Founder</strong>
                    </div>
                  </div>
                  <div className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-xl font-semibold text-xs uppercase tracking-wider shadow-xs cursor-pointer transition-all">
                    Submit & Request 45-Min Audit
                  </div>
                </div>
              </div>
            )}

            {/* Social Engagement Stats Bar */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-normal">
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-1">
                  <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[9px]">👍</span>
                  <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px]">💡</span>
                  <span className="w-4 h-4 rounded-full bg-purple-500 text-white flex items-center justify-center text-[9px]">❤️</span>
                </div>
                <span className="font-semibold text-slate-800">482 reactions</span>
              </div>
              <div>64 comments • 93 reposts</div>
            </div>

            {/* LinkedIn Action Buttons */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-slate-600 text-xs font-medium px-2">
              <button className="flex items-center gap-1 hover:text-slate-900"><ThumbsUp className="w-4 h-4" /> Like</button>
              <button className="flex items-center gap-1 hover:text-slate-900"><MessageSquare className="w-4 h-4" /> Comment</button>
              <button className="flex items-center gap-1 hover:text-slate-900"><Share2 className="w-4 h-4" /> Repost</button>
              <button className="flex items-center gap-1 hover:text-slate-900"><Send className="w-4 h-4" /> Send</button>
            </div>

          </div>
        </div>

        {/* Right: Format Strategic Telemetry & ROI Advantage */}
        <div className="lg:col-span-5 space-y-5">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Why This Ad Format Wins</span>
            <h4 className="text-2xl font-extrabold text-slate-900">
              {activeFormat === "tla" && "Thought Leader Ads (The Founder Voice)"}
              {activeFormat === "document" && "Zero-Friction Document Carousels"}
              {activeFormat === "leadgen" && "Native Lead Gen Conversion Engine"}
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed font-normal">
              {activeFormat === "tla" && "LinkedIn research shows B2B buyers engage significantly more with real executive voices than corporate logos. We sponsor founder insights directly into buying committees."}
              {activeFormat === "document" && "PDF carousels deliver high-value technical frameworks inside the feed, educating buyers with ungated architecture proofs before sales conversations."}
              {activeFormat === "leadgen" && "Native in-feed forms pull verified professional profile data with minimal friction, qualifying budget and seniority directly within the campaign."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 space-y-1 shadow-xs">
              <div className="text-xs uppercase text-slate-500 font-semibold">Benchmark CTR</div>
              <div className="text-2xl font-extrabold text-blue-600">
                {activeFormat === "tla" ? "2.84%" : activeFormat === "document" ? "2.10%" : "1.95%"}
              </div>
              <div className="text-[11px] text-slate-500 font-normal">vs 0.45% industry avg</div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/90 space-y-1 shadow-xs">
              <div className="text-xs uppercase text-slate-500 font-semibold">Cost Per Sales Lead</div>
              <div className="text-2xl font-extrabold text-slate-900">
                {activeFormat === "tla" ? "-46%" : activeFormat === "document" ? "-38%" : "₹3,200"}
              </div>
              <div className="text-[11px] text-slate-500 font-normal">Qualified decision-maker</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 space-y-2 shadow-xs">
            <span className="text-xs uppercase text-slate-900 font-bold block">Key Strategic Advantage:</span>
            <ul className="space-y-1.5 text-xs text-slate-600 font-normal">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span>Strict negative exclusions filter out students and entry-level staff.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span>Enriched lead routing to CRM & Slack in under 30 seconds.</span>
              </li>
            </ul>
          </div>

          <div className="pt-2">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold uppercase tracking-wider shadow-sm transition-all w-fit shrink-0"
            >
              <span>Build Custom Ads For Your Brand</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
