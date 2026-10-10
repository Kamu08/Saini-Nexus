import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  Layers,
  BarChart3,
  Target,
  FileText,
  IndianRupee,
  Compass,
  ArrowLeft
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { CASE_STUDIES } from "@/data/caseStudies";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES.find((c) => c.slug === slug);

  if (!study) {
    return {
      title: "Case Study Not Found | Saini Nexus",
    };
  }

  return {
    title: `${study.clientName} Case Teardown: ${study.businessOutcomes[0]?.metric || "Growth Results"} | Saini Nexus`,
    description: `How Saini Nexus solved ${study.coreChallenge.slice(0, 150)}...`,
    alternates: {
      canonical: `https://saininexus.com/case-studies/${study.slug}`,
    },
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((c) => c.slug === slug);

  if (!study) {
    notFound();
  }

  // Find next case study for footer navigation
  const currentIndex = CASE_STUDIES.findIndex((c) => c.slug === slug);
  const nextStudy = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-20 space-y-12 sm:space-y-16">
      
      {/* Navigation Breadcrumb */}
      <div className="flex items-center justify-between">
        <Breadcrumbs
          items={[
            { label: "Case Studies", href: "/case-studies" },
            { label: study.clientName },
          ]}
        />
        <Link 
          href="/case-studies" 
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-zinc-600 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Case Studies</span>
        </Link>
      </div>

      {/* 01. DOSSIER HEADER */}
      <header className="bg-white border-2 border-black rounded-3xl p-6 sm:p-12 lg:p-14 shadow-[6px_6px_0px_#000000] space-y-6 relative overflow-hidden">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b-2 border-black/10">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono font-extrabold uppercase tracking-wider shadow-[1.5px_1.5px_0px_#000000]">
              STRATEGIC FRAMEWORK // {study.clientCode}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#FAF7EF] border border-black/30 text-black text-xs font-mono font-bold uppercase">
              {study.industry}
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-[11px] font-mono font-bold">
              Sample Execution Architecture
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-600 font-semibold bg-zinc-100 px-3 py-1 rounded-full">
            <span>Market Focus: {study.market}</span>
            <span className="text-zinc-400">·</span>
            <span>Standard Horizon: {study.timeline}</span>
          </div>
        </div>

        {/* Title & Core Context */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-black leading-tight tracking-tight">
            {study.clientName}: <span className="bubble-highlight-blue">Execution Blueprint</span>
          </h1>
          <p className="text-base sm:text-xl text-zinc-700 leading-relaxed font-medium max-w-4xl">
            {study.businessContext}
          </p>
        </div>

        {/* Key Quick Takeaways Ledger */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
          <div className="bg-[#EFF6FF] border-2 border-black rounded-2xl p-4 shadow-[2px_2px_0px_#000000]">
            <span className="text-[10px] font-mono uppercase font-bold text-zinc-600 block mb-1">
              Primary Outcome
            </span>
            <strong className="text-2xl sm:text-3xl font-mono font-extrabold text-[#2563EB] block leading-none">
              {study.businessOutcomes[1]?.metric || study.businessOutcomes[0]?.metric}
            </strong>
            <span className="text-xs text-zinc-700 font-mono font-medium block mt-1">
              {study.businessOutcomes[1]?.label || study.businessOutcomes[0]?.label}
            </span>
          </div>

          <div className="bg-white border-2 border-black rounded-2xl p-4 shadow-[2px_2px_0px_#000000]">
            <span className="text-[10px] font-mono uppercase font-bold text-zinc-600 block mb-1">
              Core Conversion
            </span>
            <strong className="text-2xl sm:text-3xl font-mono font-extrabold text-black block leading-none">
              {study.businessOutcomes[0]?.metric}
            </strong>
            <span className="text-xs text-zinc-700 font-mono font-medium block mt-1">
              {study.businessOutcomes[0]?.label}
            </span>
          </div>

          <div className="bg-white border-2 border-black rounded-2xl p-4 shadow-[2px_2px_0px_#000000]">
            <span className="text-[10px] font-mono uppercase font-bold text-zinc-600 block mb-1">
              Ad Efficiency
            </span>
            <strong className="text-2xl sm:text-3xl font-mono font-extrabold text-[#2563EB] block leading-none">
              {study.campaignMetrics[2]?.metric || study.campaignMetrics[0]?.metric}
            </strong>
            <span className="text-xs text-zinc-700 font-mono font-medium block mt-1">
              {study.campaignMetrics[2]?.label || study.campaignMetrics[0]?.label}
            </span>
          </div>

          <div className="bg-[#FAF7EF] border-2 border-black rounded-2xl p-4 shadow-[2px_2px_0px_#000000]">
            <span className="text-[10px] font-mono uppercase font-bold text-zinc-600 block mb-1">
              Velocity / Payback
            </span>
            <strong className="text-2xl sm:text-3xl font-mono font-extrabold text-emerald-700 block leading-none">
              {study.businessOutcomes[2]?.metric}
            </strong>
            <span className="text-xs text-zinc-700 font-mono font-medium block mt-1">
              {study.businessOutcomes[2]?.label}
            </span>
          </div>
        </div>

        {/* Action Button Row */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <Link href="/book" className="neo-btn-blue text-xs font-mono">
            <span>Discuss This Playbook for Your Firm</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link href={study.relatedService} className="neo-btn-white text-xs font-mono">
            <span>Inspect Underlying Growth Engine</span>
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

      </header>

      {/* 02. FORENSIC DIAGNOSIS: BEFORE VS AFTER */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-black text-white text-xs font-mono uppercase font-bold">
            Phase 01 // Forensic Diagnosis
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* The Pre-Existing Bottleneck (Before) */}
          <div className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 space-y-4 shadow-[4px_4px_0px_#000000]">
            <div className="flex items-center gap-2 text-rose-700 text-xs font-mono uppercase tracking-wider font-bold">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              <span>The Commercial Roadblock</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-black">
              Why the Previous Method Failed
            </h3>
            <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
              {study.coreChallenge}
            </p>
            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-xs text-rose-900 leading-relaxed font-mono">
              <strong className="block font-bold mb-1">Pre-Audit Diagnosis:</strong>
              {study.diagnosis}
            </div>
          </div>

          {/* The Strategic Pivot (After) */}
          <div className="bg-[#FAF7EF] border-2 border-black rounded-3xl p-6 sm:p-8 space-y-4 shadow-[4px_4px_0px_#000000]">
            <div className="flex items-center gap-2 text-[#2563EB] text-xs font-mono uppercase tracking-wider font-bold">
              <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
              <span>The Strategic Bet &amp; Hypothesis</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-black">
              The Architecture Tested
            </h3>
            <p className="text-zinc-900 text-sm sm:text-base leading-relaxed italic font-serif bg-white p-4 rounded-2xl border border-black/20">
              &ldquo;{study.hypothesis}&rdquo;
            </p>
            <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed">
              <strong className="text-black font-semibold">Strategic Implementation: </strong>
              {study.strategy}
            </p>
          </div>

        </div>
      </section>

      {/* 03. EXECUTION ARCHITECTURE: 4-STEP MECHANICS */}
      <section className="bg-white border-2 border-black rounded-3xl p-6 sm:p-10 shadow-[4px_4px_0px_#000000] space-y-8">
        <div>
          <span className="px-3 py-1 rounded-full bg-black text-white text-xs font-mono uppercase font-bold">
            Phase 02 // Execution Mechanics
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-black mt-3">
            How We Engineered the Growth Architecture
          </h2>
          <p className="text-zinc-700 text-sm sm:text-base mt-1 max-w-2xl font-medium">
            Systematic deployment protocol across matched account targeting, creative assets, and qualification funnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {study.execution.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-[#FAF7EF] border-2 border-black rounded-2xl p-5 flex items-start gap-3.5 shadow-[2px_2px_0px_#000000]"
            >
              <div className="w-7 h-7 rounded-full bg-[#60A5FA] border-2 border-black flex items-center justify-center text-black font-mono font-bold text-xs shrink-0 shadow-[1px_1px_0px_#000000]">
                {idx + 1}
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-zinc-500 block">
                  Implementation Step 0{idx + 1}
                </span>
                <p className="text-xs sm:text-sm text-zinc-900 font-semibold leading-relaxed">
                  {step}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04. CREATIVE AD SPECIMEN & MEDIA DEPLOYMENT */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        
        {/* Creative Angle Specimen (7 cols) */}
        <div className="lg:col-span-7 bg-[#EFF6FF] border-2 border-black rounded-3xl p-6 sm:p-8 space-y-4 shadow-[4px_4px_0px_#000000]">
          <span className="px-3 py-1 rounded-full bg-[#60A5FA] border border-black text-black text-xs font-mono font-bold uppercase">
            In-Market Ad Specimen &amp; Angle
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-black">
            The Exact Campaign Hook Deployed
          </h3>
          <div className="bg-white border-2 border-black rounded-2xl p-5 shadow-[2px_2px_0px_#000000] space-y-2">
            <span className="text-[10px] font-mono uppercase font-bold text-zinc-500 block">
              Sponsored Post / Document Ad Angle:
            </span>
            <p className="text-base sm:text-lg font-serif italic text-black font-medium leading-relaxed">
              {study.campaignHook}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="bg-white px-3 py-1 rounded-full border border-black font-bold text-zinc-800">
              Format: {study.creativeFormat}
            </span>
          </div>
        </div>

        {/* Spend Profile & Media Budget (5 cols) */}
        <div className="lg:col-span-5 bg-white border-2 border-black rounded-3xl p-6 sm:p-8 space-y-4 shadow-[4px_4px_0px_#000000] flex flex-col justify-between">
          <div className="space-y-3">
            <span className="px-3 py-1 rounded-full bg-[#FAF7EF] border border-black text-black text-xs font-mono font-bold uppercase">
              Capital Efficiency
            </span>
            <h3 className="text-xl font-serif font-bold text-black">
              Spend Profile &amp; Pacing
            </h3>
            <div className="bg-[#FAF7EF] border-2 border-black rounded-2xl p-4 shadow-[2px_2px_0px_#000000]">
              <span className="text-[10px] font-mono uppercase font-bold text-zinc-500 block">Capital Allocation:</span>
              <p className="text-sm font-mono font-bold text-black mt-1">
                {study.spendProfile}
              </p>
            </div>
          </div>

          <div className="border-t-2 border-black/10 pt-4 text-xs text-zinc-700 leading-relaxed">
            <strong className="text-black font-mono font-bold uppercase block mb-1">
              Core Strategic Takeaway:
            </strong>
            {study.keyLearning}
          </div>
        </div>

      </section>

      {/* 05. DATA MATRIX: AD METRICS VS COMMERCIAL OUTCOMES */}
      <section className="space-y-6">
        <div>
          <span className="px-3 py-1 rounded-full bg-black text-white text-xs font-mono uppercase font-bold">
            Phase 03 // Framework Metrics &amp; Commercial Targets
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-black mt-3">
            Aligning Campaign Mechanics With Sales Pipeline
          </h2>
          <p className="text-zinc-700 text-sm sm:text-base mt-1 max-w-2xl font-medium">
            We structure every campaign around sales-accepted commercial pipeline rather than vanity clicks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Table 1: In-Feed Operational Metrics */}
          <div className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 space-y-4 shadow-[4px_4px_0px_#000000]">
            <div className="flex items-center justify-between pb-3 border-b-2 border-black/10">
              <span className="text-xs font-mono uppercase font-bold text-black">
                1. Campaign Execution Mechanics
              </span>
              <span className="text-[10px] font-mono text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-full font-bold">
                Platform Setup
              </span>
            </div>

            <div className="space-y-3">
              {study.campaignMetrics.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-[#FAF7EF] border-2 border-black rounded-xl p-4 flex items-center justify-between shadow-[2px_2px_0px_#000000]"
                >
                  <div>
                    <div className="text-xs font-mono uppercase font-bold text-black">
                      {item.label}
                    </div>
                    <div className="text-xs text-zinc-600 mt-0.5 font-medium">
                      {item.context}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-mono font-extrabold text-black shrink-0 pl-4">
                    {item.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Table 2: Strategic Commercial Objectives */}
          <div className="bg-[#EFF6FF] border-2 border-black rounded-3xl p-6 sm:p-8 space-y-4 shadow-[4px_4px_0px_#000000]">
            <div className="flex items-center justify-between pb-3 border-b-2 border-black/10">
              <span className="text-xs font-mono uppercase font-bold text-[#2563EB]">
                2. Strategic Commercial Objectives
              </span>
              <span className="text-[10px] font-mono text-blue-700 bg-white px-2 py-0.5 rounded-full border border-blue-200 font-bold">
                Commercial Target
              </span>
            </div>

            <div className="space-y-3">
              {study.businessOutcomes.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white border-2 border-black rounded-xl p-4 flex items-center justify-between shadow-[2px_2px_0px_#000000]"
                >
                  <div>
                    <div className="text-xs font-mono uppercase font-bold text-[#2563EB]">
                      {item.label}
                    </div>
                    <div className="text-xs text-zinc-600 mt-0.5 font-medium">
                      {item.context}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#2563EB] shrink-0 pl-4">
                    {item.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 06. THE VERDICT / WHAT CHANGED */}
      <section className="bg-white border-2 border-black rounded-3xl p-6 sm:p-10 shadow-[4px_4px_0px_#000000] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-3xl">
          <span className="text-xs font-mono uppercase font-bold text-emerald-700 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Strategic Impact &amp; Architecture Shift
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-black">
            The Structural Advantage of {study.clientName}
          </h3>
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-medium">
            {study.whatChanged}
          </p>
        </div>

        <Link 
          href="/audit"
          className="neo-btn-blue text-xs font-mono shrink-0"
        >
          <span>Run Commercial Audit</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </section>

      {/* 07. NEXT CASE STUDY & STRATEGY CTA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        
        {/* Next Case Study Preview */}
        <Link 
          href={`/case-studies/${nextStudy.slug}`}
          className="group bg-[#FAF7EF] border-2 border-black rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[4px_4px_0px_#000000] hover:shadow-[7px_7px_0px_#000000] hover:-translate-y-1 transition-all"
        >
          <div>
            <span className="text-xs font-mono text-zinc-500 uppercase font-bold block mb-1">
              Next Teardown →
            </span>
            <h4 className="text-2xl font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors">
              {nextStudy.clientName}
            </h4>
            <p className="text-xs text-zinc-600 mt-1 font-mono">
              {nextStudy.industry} · {nextStudy.businessOutcomes[0]?.metric}
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-black/10 flex items-center justify-between text-xs font-mono font-bold text-black">
            <span>Read Teardown</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Schedule Strategy Session */}
        <div className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[4px_4px_0px_#000000]">
          <div>
            <span className="text-xs font-mono text-[#2563EB] uppercase font-bold block mb-1">
              Want Similar Outcomes?
            </span>
            <h4 className="text-2xl font-serif font-bold text-black">
              Engineering a Demand Engine for Your Firm
            </h4>
            <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
              We audit your target market, CAC tolerance, and positioning to design a verified growth sprint.
            </p>
          </div>
          <div className="pt-4 mt-4 border-t border-black/10">
            <Link href="/book" className="neo-btn-blue w-full text-center text-xs font-mono">
              <span>Book an Acquisition Strategy Call</span>
              <ArrowRight className="w-4 h-4 ml-2 inline-block" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
