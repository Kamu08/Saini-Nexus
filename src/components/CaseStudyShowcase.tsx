import React from "react";
import Link from "next/link";
import { 
  Target, 
  ArrowUpRight, 
  ArrowRight, 
  TrendingUp, 
  CheckCircle2, 
  FileText, 
  ShieldCheck, 
  Zap,
  Globe2,
  Building2
} from "lucide-react";
import { CASE_STUDIES } from "@/data/caseStudies";

export function CaseStudyShowcase() {
  const flagship = CASE_STUDIES[0]; // CloudScale Systems (SaaS)
  const industrial = CASE_STUDIES[1]; // Apex Heavy Precision (Industrial Export)
  const consulting = CASE_STUDIES[2]; // Novus Advisory Partners (FinTech/Advisory)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider mb-3 font-bold shadow-[2px_2px_0px_#000000]">
            <Target className="w-3.5 h-3.5" />
            Evidence &amp; Teardowns
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-black tracking-tight">
            Real Work. Real Campaigns. Real Proof.
          </h2>
          <p className="text-zinc-700 text-sm sm:text-base mt-2 max-w-xl font-medium leading-relaxed">
            We separate vanity impressions from closed ARR pipeline. Every engagement is documented with forensic diagnosis, campaign architecture, and verifiable commercial numbers.
          </p>
        </div>
        <Link href="/case-studies" className="neo-btn-white w-fit shrink-0">
          <span>View All Case Studies</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </Link>
      </div>

      {/* 1. Flagship Spotlight Teardown Card */}
      {flagship && (
        <Link
          href={`/case-studies/${flagship.slug}`}
          className="group block bg-white border-2 border-black rounded-3xl p-6 sm:p-9 lg:p-10 shadow-[6px_6px_0px_#000000] hover:shadow-[9px_9px_0px_#000000] hover:-translate-y-1 transition-all relative overflow-hidden"
        >
          {/* Top Metadata Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b-2 border-black/10">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-[#60A5FA] text-black font-extrabold uppercase text-xs font-mono border-2 border-black shadow-[2px_2px_0px_#000000] flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                FLAGSHIP TEARDOWN
              </span>
              <span className="px-2.5 py-1 rounded-full bg-black text-white font-bold uppercase text-[11px] font-mono border border-black">
                {flagship.clientCode}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#EFF6FF] border border-black/40 font-bold uppercase text-[11px] font-mono text-zinc-800">
                {flagship.industry}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-600 font-bold bg-[#FAF7EF] px-3 py-1 rounded-full border border-black/30">
              <Globe2 className="w-3.5 h-3.5 text-zinc-500" />
              <span>{flagship.market}</span>
              <span className="text-zinc-400">|</span>
              <span className="text-[#2563EB]">{flagship.timeline}</span>
            </div>
          </div>

          {/* Main Grid: Context & Story (Left) + High-Impact Proof Deck (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
            
            {/* Left 7 Columns: Story, Diagnostic & Hook */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors tracking-tight leading-tight">
                  {flagship.clientName}: B2B SaaS Pipeline from Zero to $1.4M ARR
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm font-medium mt-1.5">
                  {flagship.businessContext}
                </p>
              </div>

              {/* Problem vs Strategy Split Box */}
              <div className="bg-[#FAF7EF] rounded-2xl p-4 sm:p-5 border-2 border-black shadow-[2px_2px_0px_#000000] space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-red-700">
                    <span className="w-2 h-2 rounded-full bg-red-600 inline-block" />
                    The Commercial Roadblock:
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed font-normal">
                    {flagship.coreChallenge}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-black/15 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-emerald-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
                    The Architecture Built:
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed font-normal">
                    {flagship.strategy}
                  </p>
                </div>
              </div>

              {/* Campaign Hook Quotation */}
              <div className="bg-white rounded-xl p-3 sm:p-3.5 border border-black/30 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div className="text-xs text-zinc-800">
                  <span className="font-mono font-bold text-zinc-600 uppercase text-[10px] block mb-0.5">Live Ad Creative Angle:</span>
                  <span className="font-serif italic font-medium">{flagship.campaignHook}</span>
                </div>
              </div>

              {/* CTA Link Strip */}
              <div className="pt-2 flex items-center gap-2 text-xs font-mono font-bold text-black group-hover:text-[#2563EB] transition-colors">
                <span>Inspect Complete Campaign Architecture &amp; Lead Qualification Funnel</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Right 5 Columns: Verifiable Evidence Metrics */}
            <div className="lg:col-span-5 flex flex-col gap-3.5">
              
              {/* Primary Huge Metric Box */}
              <div className="bg-[#EFF6FF] rounded-2xl p-5 sm:p-6 border-2 border-black shadow-[3px_3px_0px_#000000]">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-zinc-600 uppercase mb-2">
                  <span>Primary Business Outcome</span>
                  <span className="text-[#2563EB] bg-white px-2 py-0.5 rounded-full border border-black/20">Verified</span>
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-mono font-extrabold text-[#2563EB] tracking-tight leading-none">
                  {flagship.businessOutcomes[1]?.metric || "$1.4M"}
                </div>
                <div className="text-xs sm:text-sm font-mono font-bold text-black mt-2">
                  {flagship.businessOutcomes[1]?.label || "Pipeline Generated"}
                </div>
                <p className="text-xs text-zinc-600 mt-1 font-medium leading-relaxed">
                  {flagship.businessOutcomes[1]?.context || "Qualified sales-accepted pipeline within 90 days."}
                </p>
              </div>

              {/* 3 Secondary Hard Metrics Grid */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="bg-white rounded-xl p-3 border-2 border-black shadow-[2px_2px_0px_#000000] text-center">
                  <strong className="text-lg sm:text-xl font-mono font-extrabold text-black block leading-none">
                    {flagship.businessOutcomes[0]?.metric || "82%"}
                  </strong>
                  <span className="text-[10px] font-mono text-zinc-600 uppercase font-bold block mt-1 leading-tight">
                    Acceptance
                  </span>
                </div>
                <div className="bg-white rounded-xl p-3 border-2 border-black shadow-[2px_2px_0px_#000000] text-center">
                  <strong className="text-lg sm:text-xl font-mono font-extrabold text-[#2563EB] block leading-none">
                    {flagship.campaignMetrics[2]?.metric || "-46%"}
                  </strong>
                  <span className="text-[10px] font-mono text-zinc-600 uppercase font-bold block mt-1 leading-tight">
                    CPL Cut
                  </span>
                </div>
                <div className="bg-white rounded-xl p-3 border-2 border-black shadow-[2px_2px_0px_#000000] text-center">
                  <strong className="text-lg sm:text-xl font-mono font-extrabold text-emerald-700 block leading-none">
                    {flagship.businessOutcomes[2]?.metric || "34%"}
                  </strong>
                  <span className="text-[10px] font-mono text-zinc-600 uppercase font-bold block mt-1 leading-tight">
                    Velocity
                  </span>
                </div>
              </div>

              {/* What Changed Seal */}
              <div className="bg-[#FAF7EF] rounded-xl p-3.5 border border-black/30 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs text-zinc-700 leading-relaxed">
                  <strong className="text-black font-semibold">Net Commercial Shift: </strong>
                  {flagship.whatChanged}
                </p>
              </div>

            </div>

          </div>
        </Link>
      )}

      {/* 2. Side-by-Side Comparative Teardown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-2">
        
        {/* Industrial Export Card */}
        {industrial && (
          <Link
            href={`/case-studies/${industrial.slug}`}
            className="group bg-white border-2 border-black rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[5px_5px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] hover:-translate-y-1 transition-all"
          >
            <div className="space-y-4">
              {/* Header tags */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#60A5FA] text-black font-bold uppercase text-[11px] font-mono border-2 border-black shadow-[1.5px_1.5px_0px_#000000]">
                    {industrial.clientCode}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#FAF7EF] border border-black/40 font-bold uppercase text-[10px] font-mono text-zinc-700">
                    Industrial Export
                  </span>
                </div>
                <span className="text-xs font-mono text-zinc-500 font-semibold bg-zinc-100 px-2.5 py-0.5 rounded-full">
                  {industrial.timeline}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors tracking-tight leading-snug">
                  {industrial.clientName}: Bypassing Export Brokers for Direct OEM Contracts
                </h3>
                <p className="text-xs font-mono text-zinc-500 mt-1">
                  {industrial.market}
                </p>
              </div>

              {/* Challenge & Solution Summary */}
              <div className="bg-[#FAF7EF] rounded-2xl p-4 border-2 border-black shadow-[2px_2px_0px_#000000] space-y-2 text-xs">
                <p className="text-zinc-700 leading-relaxed">
                  <strong className="text-red-700 font-mono font-bold uppercase">The Bottleneck: </strong>
                  {industrial.coreChallenge}
                </p>
                <div className="border-t border-black/10 pt-2">
                  <p className="text-zinc-700 leading-relaxed">
                    <strong className="text-emerald-800 font-mono font-bold uppercase">Strategy: </strong>
                    {industrial.strategy}
                  </p>
                </div>
              </div>

              {/* Hook Quote */}
              <div className="bg-zinc-50 rounded-xl p-3 border border-black/20 text-xs">
                <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase block">Ad Hook:</span>
                <span className="italic font-serif text-zinc-800">{industrial.campaignHook}</span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="bg-[#EFF6FF] rounded-xl p-2.5 border-2 border-black shadow-[1.5px_1.5px_0px_#000000] text-center">
                  <strong className="text-base sm:text-lg font-mono font-extrabold text-[#2563EB] block leading-none">
                    $840K
                  </strong>
                  <span className="text-[10px] font-mono text-zinc-600 uppercase font-bold block mt-1">
                    Contracts Won
                  </span>
                </div>
                <div className="bg-white rounded-xl p-2.5 border-2 border-black shadow-[1.5px_1.5px_0px_#000000] text-center">
                  <strong className="text-base sm:text-lg font-mono font-extrabold text-black block leading-none">
                    24 RFQs
                  </strong>
                  <span className="text-[10px] font-mono text-zinc-600 uppercase font-bold block mt-1">
                    Direct Specs
                  </span>
                </div>
                <div className="bg-white rounded-xl p-2.5 border-2 border-black shadow-[1.5px_1.5px_0px_#000000] text-center">
                  <strong className="text-base sm:text-lg font-mono font-extrabold text-emerald-700 block leading-none">
                    +22%
                  </strong>
                  <span className="text-[10px] font-mono text-zinc-600 uppercase font-bold block mt-1">
                    Margin Gain
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="pt-5 mt-5 border-t-2 border-black/10 flex items-center justify-between text-xs font-mono">
              <span className="font-bold text-zinc-800">Inspect Manufacturing Teardown</span>
              <span className="p-2 rounded-full bg-[#EFF6FF] group-hover:bg-[#60A5FA] border-2 border-black shadow-[1.5px_1.5px_0px_#000000] text-black transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        )}

        {/* Consulting / FinTech Card */}
        {consulting && (
          <Link
            href={`/case-studies/${consulting.slug}`}
            className="group bg-white border-2 border-black rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[5px_5px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] hover:-translate-y-1 transition-all"
          >
            <div className="space-y-4">
              {/* Header tags */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#60A5FA] text-black font-bold uppercase text-[11px] font-mono border-2 border-black shadow-[1.5px_1.5px_0px_#000000]">
                    {consulting.clientCode}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#FAF7EF] border border-black/40 font-bold uppercase text-[10px] font-mono text-zinc-700">
                    Advisory &amp; FinTech
                  </span>
                </div>
                <span className="text-xs font-mono text-zinc-500 font-semibold bg-zinc-100 px-2.5 py-0.5 rounded-full">
                  {consulting.timeline}
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors tracking-tight leading-snug">
                  {consulting.clientName}: Partner Thought Leadership to ₹48L Retainers
                </h3>
                <p className="text-xs font-mono text-zinc-500 mt-1">
                  {consulting.market}
                </p>
              </div>

              {/* Challenge & Solution Summary */}
              <div className="bg-[#FAF7EF] rounded-2xl p-4 border-2 border-black shadow-[2px_2px_0px_#000000] space-y-2 text-xs">
                <p className="text-zinc-700 leading-relaxed">
                  <strong className="text-red-700 font-mono font-bold uppercase">The Bottleneck: </strong>
                  {consulting.coreChallenge}
                </p>
                <div className="border-t border-black/10 pt-2">
                  <p className="text-zinc-700 leading-relaxed">
                    <strong className="text-emerald-800 font-mono font-bold uppercase">Strategy: </strong>
                    {consulting.strategy}
                  </p>
                </div>
              </div>

              {/* Hook Quote */}
              <div className="bg-zinc-50 rounded-xl p-3 border border-black/20 text-xs">
                <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase block">Ad Hook:</span>
                <span className="italic font-serif text-zinc-800">{consulting.campaignHook}</span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="bg-[#EFF6FF] rounded-xl p-2.5 border-2 border-black shadow-[1.5px_1.5px_0px_#000000] text-center">
                  <strong className="text-base sm:text-lg font-mono font-extrabold text-[#2563EB] block leading-none">
                    ₹48L
                  </strong>
                  <span className="text-[10px] font-mono text-zinc-600 uppercase font-bold block mt-1">
                    New Retainers
                  </span>
                </div>
                <div className="bg-white rounded-xl p-2.5 border-2 border-black shadow-[1.5px_1.5px_0px_#000000] text-center">
                  <strong className="text-base sm:text-lg font-mono font-extrabold text-black block leading-none">
                    14 Sent
                  </strong>
                  <span className="text-[10px] font-mono text-zinc-600 uppercase font-bold block mt-1">
                    Proposals
                  </span>
                </div>
                <div className="bg-white rounded-xl p-2.5 border-2 border-black shadow-[1.5px_1.5px_0px_#000000] text-center">
                  <strong className="text-base sm:text-lg font-mono font-extrabold text-emerald-700 block leading-none">
                    &lt;45d
                  </strong>
                  <span className="text-[10px] font-mono text-zinc-600 uppercase font-bold block mt-1">
                    CAC Payback
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="pt-5 mt-5 border-t-2 border-black/10 flex items-center justify-between text-xs font-mono">
              <span className="font-bold text-zinc-800">Inspect Advisory Teardown</span>
              <span className="p-2 rounded-full bg-[#EFF6FF] group-hover:bg-[#60A5FA] border-2 border-black shadow-[1.5px_1.5px_0px_#000000] text-black transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        )}

      </div>
    </section>
  );
}
