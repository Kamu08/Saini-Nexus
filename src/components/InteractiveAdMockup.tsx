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
    <div className="w-full bg-[#FAF7EF] rounded-3xl p-6 sm:p-10 border-2 border-black shadow-[4px_4px_0px_#000000] relative overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold mb-3 shadow-[2px_2px_0px_#000000]">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Creative Studio
          </div>
          <h3 className="text-2xl sm:text-4xl font-serif font-bold text-black tracking-tight">
            See What High-Converting LinkedIn Ads Look Like
          </h3>
          <p className="text-zinc-700 text-sm mt-1 max-w-xl font-medium">
            Toggle between our core advertising formats to see how we position B2B brands and founders inside the buyer&apos;s feed.
          </p>
        </div>

        {/* Format Switcher Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white rounded-2xl border-2 border-black shadow-[2px_2px_0px_#000000]">
          <button
            onClick={() => setActiveFormat("tla")}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer border ${
              activeFormat === "tla"
                ? "bg-[#60A5FA] text-black border-black shadow-[2px_2px_0px_#000000]"
                : "text-zinc-700 border-transparent hover:bg-zinc-100"
            }`}
          >
            🎙️ Thought Leader Ad
          </button>
          <button
            onClick={() => setActiveFormat("document")}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer border ${
              activeFormat === "document"
                ? "bg-[#60A5FA] text-black border-black shadow-[2px_2px_0px_#000000]"
                : "text-zinc-700 border-transparent hover:bg-zinc-100"
            }`}
          >
            📄 Document Carousel
          </button>
          <button
            onClick={() => setActiveFormat("leadgen")}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer border ${
              activeFormat === "leadgen"
                ? "bg-[#60A5FA] text-black border-black shadow-[2px_2px_0px_#000000]"
                : "text-zinc-700 border-transparent hover:bg-zinc-100"
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
          <div className="bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0px_#000000] p-5 sm:p-6 space-y-4 max-w-xl mx-auto">
            
            {/* Ad Header Bar */}
            <div className="flex items-center justify-between border-b-2 border-black/10 pb-3">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-black bg-zinc-100 shadow-[1.5px_1.5px_0px_#000000]">
                  <Image
                    src={activeFormat === "tla" ? "/team/dev-raj-saini.jpg" : "/saini-nexus-logo.png"}
                    alt="Author"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-black flex items-center gap-1.5 font-sans">
                    <span>{activeFormat === "tla" ? "Dev Raj Saini" : "Saini Nexus"}</span>
                    <span className="text-[10px] text-zinc-500 font-normal">• 1st</span>
                  </div>
                  <div className="text-[11px] text-zinc-600 line-clamp-1 font-medium">
                    {activeFormat === "tla" 
                      ? "Founder @ Saini Nexus | B2B Growth & Pipeline Architecture" 
                      : "B2B Marketing & LinkedIn Advertising Company"}
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono flex items-center gap-1">
                    <span>Promoted by Saini Nexus</span>
                    <span>•</span>
                    <span className="text-[#2563EB] font-bold">🌐 Sponsored</span>
                  </div>
                </div>
              </div>
              <span className="text-zinc-500 text-xs font-mono font-bold">•••</span>
            </div>

            {/* Ad Copy Body */}
            {activeFormat === "tla" && (
              <div className="space-y-3 text-xs sm:text-sm text-zinc-800 leading-relaxed font-sans">
                <p className="font-bold text-black">
                  95% of your target B2B buyers are NOT in the market today.
                </p>
                <p className="text-zinc-700">
                  If 100% of your LinkedIn budget is spent screaming &ldquo;Book a Demo&rdquo; to cold audiences, you&apos;re paying $250+ CPLs for junior staff with zero budget authority.
                </p>
                <p className="text-zinc-700">
                  Here is the exact 4-point Demand Architecture we deployed for our enterprise SaaS client to increase Sales Acceptance Rate to 82%:
                </p>
                <div className="p-3.5 bg-[#EFF6FF] border-2 border-black rounded-xl space-y-1.5 text-xs shadow-[2px_2px_0px_#000000]">
                  <div className="font-bold text-black uppercase font-mono text-[11px]">The 4-Point Pre-Flight Audit:</div>
                  <div className="text-zinc-800">1. Strict Seniority Negative Exclusions (Cut 46% waste)</div>
                  <div className="text-zinc-800">2. Ungated Technical Architecture Teardowns</div>
                  <div className="text-zinc-800">3. Matched Account (ABM) Buying Group Coverage</div>
                  <div className="text-zinc-800">4. Founder POV Thought Leader Ad Sponsorship</div>
                </div>
              </div>
            )}

            {activeFormat === "document" && (
              <div className="space-y-3 text-xs sm:text-sm text-zinc-800 leading-relaxed">
                <p className="font-bold text-black">
                  The Complete 2026 B2B LinkedIn Ads & Demand Generation Playbook [8 Pages].
                </p>
                <p className="text-zinc-700 text-xs">
                  Swipe through for the full full-funnel budget allocation, creative hooks, and CRM speed-to-lead routing setup.
                </p>
                {/* Simulated Document Carousel Slider Preview */}
                <div className="bg-[#FAF7EF] text-black rounded-xl p-6 space-y-4 text-center relative overflow-hidden border-2 border-black shadow-[3px_3px_0px_#000000]">
                  <div className="flex justify-between items-center text-[10px] font-mono text-black font-bold">
                    <span>SAINI NEXUS RESEARCH</span>
                    <span className="text-zinc-600">SLIDE 01 / 08</span>
                  </div>
                  <div className="py-4 space-y-2">
                    <div className="text-xs font-mono uppercase text-[#2563EB] tracking-wider font-bold">EXECUTIVE PLAYBOOK</div>
                    <div className="text-xl font-serif font-bold text-black">How To Scale Enterprise Pipeline via LinkedIn Ads</div>
                    <div className="text-xs text-zinc-600 max-w-xs mx-auto font-medium">From ICP calibration to 82% Sales-Accepted Leads</div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-700 pt-2 border-t-2 border-black/10 font-bold">
                    <span>PDF (8 Pages)</span>
                    <span className="text-[#2563EB]">Swipe to read →</span>
                  </div>
                </div>
              </div>
            )}

            {activeFormat === "leadgen" && (
              <div className="space-y-3 text-xs sm:text-sm text-zinc-800 leading-relaxed">
                <p className="font-bold text-black">
                  Audit your B2B LinkedIn Ads & Pipeline Architecture.
                </p>
                <p className="text-zinc-700 text-xs">
                  Get a comprehensive 45-minute diagnostic review of your target account list, CPL efficiency, and buyer journey friction.
                </p>
                {/* Simulated Lead Gen Form Card */}
                <div className="bg-[#EFF6FF] border-2 border-black rounded-xl p-4 space-y-3 text-xs font-mono shadow-[2px_2px_0px_#000000]">
                  <div className="flex items-center justify-between pb-2 border-b-2 border-black/10">
                    <span className="font-bold text-black">1-Click Fast Qualification</span>
                    <span className="text-[10px] text-emerald-700 font-bold">✓ LinkedIn Verified</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white p-2.5 rounded border-2 border-black text-zinc-800 text-[11px] shadow-[1.5px_1.5px_0px_#000000]">
                      Work Email: <strong className="text-black">vikram@techcorp.io</strong>
                    </div>
                    <div className="bg-white p-2.5 rounded border-2 border-black text-zinc-800 text-[11px] shadow-[1.5px_1.5px_0px_#000000]">
                      Job Title: <strong className="text-black">VP of Marketing / Founder</strong>
                    </div>
                  </div>
                  <div className="w-full py-2.5 bg-[#60A5FA] text-black border-2 border-black text-center rounded-full font-bold text-xs uppercase tracking-wider shadow-[2px_2px_0px_#000000]">
                    Submit & Request 45-Min Audit
                  </div>
                </div>
              </div>
            )}

            {/* Social Engagement Stats Bar */}
            <div className="pt-3 border-t-2 border-black/10 flex items-center justify-between text-xs text-zinc-600 font-mono font-medium">
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-1">
                  <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[9px] border border-black">👍</span>
                  <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px] border border-black">💡</span>
                  <span className="w-4 h-4 rounded-full bg-purple-500 text-white flex items-center justify-center text-[9px] border border-black">❤️</span>
                </div>
                <span className="font-bold text-black">482 reactions</span>
              </div>
              <div>64 comments • 93 reposts</div>
            </div>

            {/* LinkedIn Action Buttons */}
            <div className="pt-2 border-t border-black/10 flex items-center justify-between text-zinc-700 text-xs font-semibold px-2">
              <button className="flex items-center gap-1 hover:text-black font-bold"><ThumbsUp className="w-4 h-4" /> Like</button>
              <button className="flex items-center gap-1 hover:text-black font-bold"><MessageSquare className="w-4 h-4" /> Comment</button>
              <button className="flex items-center gap-1 hover:text-black font-bold"><Share2 className="w-4 h-4" /> Repost</button>
              <button className="flex items-center gap-1 hover:text-black font-bold"><Send className="w-4 h-4" /> Send</button>
            </div>

          </div>
        </div>

        {/* Right: Format Strategic Telemetry & ROI Advantage */}
        <div className="lg:col-span-5 space-y-5">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold">Why This Ad Format Wins</span>
            <h4 className="text-2xl font-serif font-bold text-black">
              {activeFormat === "tla" && "Thought Leader Ads (The Founder Voice)"}
              {activeFormat === "document" && "Zero-Friction Document Carousels"}
              {activeFormat === "leadgen" && "Native Lead Gen Conversion Engine"}
            </h4>
            <p className="text-zinc-700 text-sm leading-relaxed font-medium">
              {activeFormat === "tla" && "LinkedIn members engage 3x more with real executive voices than corporate logos. We sponsor founder insights directly into buying committees."}
              {activeFormat === "document" && "PDF carousels deliver high-value technical frameworks inside the feed. Outperforms standard image banners with 4.8x higher save rates."}
              {activeFormat === "leadgen" && "Native 1-click in-feed forms pull verified corporate profile data with zero typing friction, driving 18.4% form completion rates."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="p-4 rounded-2xl bg-white border-2 border-black space-y-1 shadow-[3px_3px_0px_#000000]">
              <div className="text-xs font-mono uppercase text-zinc-600 font-bold">Benchmark CTR</div>
              <div className="text-2xl font-mono font-extrabold text-[#2563EB]">
                {activeFormat === "tla" ? "2.84%" : activeFormat === "document" ? "2.10%" : "1.95%"}
              </div>
              <div className="text-[11px] text-zinc-600 font-medium">vs 0.45% industry avg</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border-2 border-black space-y-1 shadow-[3px_3px_0px_#000000]">
              <div className="text-xs font-mono uppercase text-zinc-600 font-bold">Cost Per Sales Lead</div>
              <div className="text-2xl font-mono font-extrabold text-black">
                {activeFormat === "tla" ? "-46%" : activeFormat === "document" ? "-38%" : "$118"}
              </div>
              <div className="text-[11px] text-zinc-600 font-medium">Qualified decision-maker</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border-2 border-black space-y-2 shadow-[3px_3px_0px_#000000]">
            <span className="text-xs font-mono uppercase text-black font-bold block">Key Strategic Advantage:</span>
            <ul className="space-y-1.5 text-xs text-zinc-700 font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>Strict negative exclusions filter out students and entry-level staff.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>Enriched lead routing to CRM & Slack in under 30 seconds.</span>
              </li>
            </ul>
          </div>

          <div className="pt-2">
            <Link
              href="/book"
              className="neo-btn-blue w-fit shrink-0"
            >
              <span>Build Custom Ads For Your Brand</span>
              <ArrowRight className="ml-2 w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
