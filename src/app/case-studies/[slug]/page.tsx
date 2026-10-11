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
import { JsonLd } from "@/components/JsonLd";
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
      canonical: `https://www.saininexus.com/case-studies/${study.slug}`,
    },
    openGraph: {
      title: `${study.clientName} Case Teardown | Saini Nexus`,
      description: study.coreChallenge,
      url: `https://www.saininexus.com/case-studies/${study.slug}`,
      siteName: "Saini Nexus",
      type: "article",
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

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${study.clientName} B2B Growth Case Study`,
    description: study.coreChallenge,
    author: {
      "@type": "Organization",
      name: "Saini Nexus",
      url: "https://www.saininexus.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Saini Nexus",
      url: "https://www.saininexus.com",
      logo: "https://www.saininexus.com/saini-nexus-logo.png",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.saininexus.com/case-studies/${study.slug}`,
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-24 space-y-16 sm:space-y-24">
      <JsonLd data={caseStudySchema} />
      
      {/* Navigation Breadcrumb */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <Breadcrumbs
          items={[
            { label: "Case Studies", href: "/case-studies" },
            { label: study.clientName },
          ]}
        />
        <Link 
          href="/case-studies" 
          className="inline-flex items-center gap-2 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-[#1572B8] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Case Studies</span>
        </Link>
      </div>

      {/* 01. DOSSIER HEADER */}
      <header className="bg-[#0F172A] border border-slate-800 p-8 sm:p-14 shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#67C7F8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-slate-800 relative z-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1.5 bg-[#1572B8] text-white text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
              FRAMEWORK // {study.clientCode}
            </span>
            <span className="px-3.5 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
              {study.industry}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[10px] font-sans font-bold text-slate-500 uppercase tracking-[0.2em]">
            <span>Market <strong className="text-white">{study.market}</strong></span>
            <span className="text-slate-700">|</span>
            <span>Horizon <strong className="text-white">{study.timeline}</strong></span>
          </div>
        </div>

        {/* Title & Core Context */}
        <div className="space-y-6 pt-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-sans font-black text-white leading-[1.05] tracking-tight">
            {study.clientName}: <span className="text-[#38A9EB]">Execution Blueprint.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-medium max-w-4xl">
            {study.businessContext}
          </p>
        </div>

        {/* Key Quick Takeaways Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-slate-800 mt-10 relative z-10">
          <div className="bg-[#1572B8] p-6 border-b md:border-b-0 md:border-r border-slate-800">
            <span className="text-[9px] font-sans uppercase font-bold text-[#D4EFFC] tracking-[0.2em] block mb-2">
              Primary Outcome
            </span>
            <strong className="text-3xl font-sans font-black text-white block leading-none">
              {study.businessOutcomes[1]?.metric || study.businessOutcomes[0]?.metric}
            </strong>
            <span className="text-xs text-white font-sans font-medium block mt-2">
              {study.businessOutcomes[1]?.label || study.businessOutcomes[0]?.label}
            </span>
          </div>

          <div className="bg-slate-900 p-6 border-b md:border-b-0 md:border-r border-slate-800">
            <span className="text-[9px] font-sans uppercase font-bold text-slate-500 tracking-[0.2em] block mb-2">
              Core Conversion
            </span>
            <strong className="text-3xl font-sans font-black text-white block leading-none">
              {study.businessOutcomes[0]?.metric}
            </strong>
            <span className="text-xs text-slate-400 font-sans font-medium block mt-2">
              {study.businessOutcomes[0]?.label}
            </span>
          </div>

          <div className="bg-slate-900 p-6 border-b md:border-b-0 md:border-r border-slate-800">
            <span className="text-[9px] font-sans uppercase font-bold text-slate-500 tracking-[0.2em] block mb-2">
              Ad Efficiency
            </span>
            <strong className="text-3xl font-sans font-black text-[#38A9EB] block leading-none">
              {study.campaignMetrics[0]?.metric || "N/A"}
            </strong>
            <span className="text-xs text-slate-400 font-sans font-medium block mt-2">
              {study.campaignMetrics[0]?.label || "Primary Ad Metric"}
            </span>
          </div>

          <div className="bg-slate-900 p-6">
            <span className="text-[9px] font-sans uppercase font-bold text-slate-500 tracking-[0.2em] block mb-2">
              Capital Allocation
            </span>
            <strong className="text-xl font-sans font-black text-white block leading-snug">
              {study.spendProfile}
            </strong>
            <span className="text-xs text-slate-400 font-sans font-medium block mt-2">
              Total Budget Horizon
            </span>
          </div>
        </div>
      </header>

      {/* 02. STRATEGIC DIAGNOSIS: PROBLEM & HYPOTHESIS */}
      <section className="bg-white border border-slate-200 p-8 sm:p-14 shadow-xl space-y-10 relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-slate-900" />
        <div>
          <span className="inline-block px-3 py-1 bg-slate-900 text-white text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
            Phase 01 // Diagnosis
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-slate-900 mt-4 tracking-tight">
            The Market Bottleneck & Working Hypothesis
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
          <div className="space-y-4">
            <h3 className="text-[10px] font-sans font-bold text-slate-500 uppercase tracking-[0.2em] border-b border-slate-100 pb-2">
              The Baseline Challenge
            </h3>
            <p className="text-base text-slate-700 leading-relaxed font-medium">
              {study.coreChallenge}
            </p>
            
            <div className="pt-6">
              <h3 className="text-[10px] font-sans font-bold text-[#1572B8] uppercase tracking-[0.2em] border-b border-slate-100 pb-2">
                Diagnostic Teardown
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium mt-4">
                {study.diagnosis}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 border-l-4 border-[#1572B8] p-6 shadow-sm">
              <h3 className="text-[10px] font-sans font-bold text-slate-900 uppercase tracking-[0.2em] mb-3">
                Formulated Hypothesis
              </h3>
              <p className="text-lg text-slate-800 italic font-medium leading-relaxed">
                "{study.hypothesis}"
              </p>
            </div>
            <div>
              <h3 className="text-[10px] font-sans font-bold text-slate-500 uppercase tracking-[0.2em] border-b border-slate-100 pb-2 mb-3">
                Strategic Implementation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {study.strategy}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03. EXECUTION ARCHITECTURE: 4-STEP MECHANICS */}
      <section className="space-y-8">
        <div>
          <span className="inline-block px-3 py-1 bg-[#1572B8] text-white text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
            Phase 02 // Execution Mechanics
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-slate-900 mt-4 tracking-tight">
            How We Engineered the Growth Architecture
          </h2>
          <p className="text-slate-600 text-base mt-2 max-w-3xl font-medium">
            Systematic deployment protocol across matched account targeting, creative assets, and qualification funnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {study.execution.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200 p-6 flex items-start gap-4 hover:border-[#1572B8] hover:shadow-lg transition-all group"
            >
              <div className="w-10 h-10 bg-slate-50 border border-slate-200 flex items-center justify-center text-[#1572B8] font-sans font-black text-sm shrink-0 group-hover:bg-[#1572B8] group-hover:text-white group-hover:border-[#1572B8] transition-colors">
                0{idx + 1}
              </div>
              <div className="space-y-2 pt-1">
                <span className="text-[10px] font-sans uppercase font-bold text-slate-500 tracking-[0.2em] block">
                  Implementation Step
                </span>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">
                  {step}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04. CREATIVE & FORMAT ENGINEERING */}
      <section className="bg-slate-900 text-white p-8 sm:p-14 shadow-2xl relative overflow-hidden border border-slate-800">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#67C7F8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block px-3 py-1 bg-white text-[#0F172A] text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
              Creative Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-white tracking-tight">
              Campaign Hook &amp; Angle
            </h2>
            <div className="bg-slate-800 border border-slate-700 p-6 border-l-4 border-l-[#38A9EB]">
              <p className="text-lg text-white italic font-medium leading-relaxed">
                "{study.campaignHook}"
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[10px] font-sans uppercase font-bold text-slate-500 tracking-[0.2em] block mb-2 border-b border-slate-800 pb-2">
                Primary Ad Format
              </span>
              <h3 className="text-2xl font-sans font-black text-white">
                {study.creativeFormat}
              </h3>
            </div>
            
            <div className="pt-6 border-t border-slate-800">
              <span className="text-[10px] font-sans uppercase font-bold text-slate-500 tracking-[0.2em] block mb-2 border-b border-slate-800 pb-2">
                Core Strategic Takeaway
              </span>
              <p className="text-sm text-slate-300 font-medium leading-relaxed">
                {study.keyLearning}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 05. DATA MATRIX: AD METRICS VS COMMERCIAL OUTCOMES */}
      <section className="space-y-8">
        <div>
          <span className="inline-block px-3 py-1 bg-emerald-700 text-white text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
            Phase 03 // Commercial Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-slate-900 mt-4 tracking-tight">
            Aligning Campaign Mechanics With Sales Pipeline
          </h2>
          <p className="text-slate-600 text-base mt-2 max-w-3xl font-medium">
            We structure every campaign around sales-accepted commercial pipeline rather than vanity clicks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Table 1: In-Feed Operational Metrics */}
          <div className="bg-white border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
              <span className="text-[10px] font-sans uppercase font-bold text-slate-900 tracking-[0.2em]">
                Execution Mechanics
              </span>
            </div>

            <div className="space-y-4">
              {study.campaignMetrics.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50 border border-slate-200 p-5 flex items-center justify-between"
                >
                  <div>
                    <div className="text-[10px] font-sans uppercase font-bold text-slate-900 tracking-[0.1em]">
                      {item.label}
                    </div>
                    <div className="text-xs text-slate-500 mt-1 font-medium">
                      {item.context}
                    </div>
                  </div>
                  <div className="text-2xl font-sans font-black text-slate-900 shrink-0 pl-4">
                    {item.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Table 2: Strategic Commercial Objectives */}
          <div className="bg-white border border-[#1572B8] p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#1572B8]" />
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6 relative z-10">
              <span className="text-[10px] font-sans uppercase font-bold text-[#1572B8] tracking-[0.2em]">
                Strategic Commercial Objectives
              </span>
            </div>

            <div className="space-y-4 relative z-10">
              {study.businessOutcomes.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-[#FAFCFF] border border-blue-100 p-5 flex items-center justify-between hover:border-[#1572B8] transition-colors"
                >
                  <div>
                    <div className="text-[10px] font-sans uppercase font-bold text-[#1572B8] tracking-[0.1em]">
                      {item.label}
                    </div>
                    <div className="text-xs text-slate-600 mt-1 font-medium">
                      {item.context}
                    </div>
                  </div>
                  <div className="text-3xl font-sans font-black text-[#1572B8] shrink-0 pl-4">
                    {item.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 06. THE VERDICT / WHAT CHANGED */}
      <section className="bg-slate-50 border border-slate-200 p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="space-y-4 max-w-3xl">
          <span className="text-[10px] font-sans uppercase font-bold text-slate-900 tracking-[0.2em] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Strategic Impact &amp; Architecture Shift
          </span>
          <h3 className="text-2xl sm:text-3xl font-sans font-black text-slate-900">
            The Structural Advantage of {study.clientName}
          </h3>
          <p className="text-base text-slate-600 leading-relaxed font-medium">
            {study.whatChanged}
          </p>
        </div>

        <Link 
          href="/audit"
          className="inline-flex items-center justify-center gap-2 px-6 py-4 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white bg-slate-900 hover:bg-[#1572B8] transition-colors shadow-sm shrink-0"
        >
          <span>Run Commercial Audit</span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </Link>
      </section>

      {/* 07. NEXT CASE STUDY & STRATEGY CTA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-slate-200">
        
        {/* Next Case Study Preview */}
        <Link 
          href={`/case-studies/${nextStudy.slug}`}
          className="group bg-white border border-slate-200 p-10 flex flex-col justify-between hover:border-[#1572B8] hover:shadow-xl transition-all relative"
        >
          <div className="absolute top-0 left-0 w-0 h-1 bg-[#1572B8] group-hover:w-full transition-all duration-500" />
          <div className="space-y-4">
            <span className="text-[10px] font-sans text-slate-500 uppercase font-bold block tracking-[0.2em]">
              Next Teardown →
            </span>
            <h4 className="text-3xl font-sans font-black text-slate-900 group-hover:text-[#1572B8] transition-colors">
              {nextStudy.clientName}
            </h4>
            <p className="text-[10px] text-slate-500 font-sans font-bold uppercase tracking-[0.1em]">
              {nextStudy.industry} | {nextStudy.businessOutcomes[0]?.metric}
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-slate-900 group-hover:text-[#1572B8] transition-colors">
            <span>Read Teardown</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Schedule Strategy Session */}
        <div className="bg-[#0F172A] border border-slate-800 p-10 flex flex-col justify-between shadow-xl relative overflow-hidden group">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#67C7F8 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="space-y-4 relative z-10">
            <span className="text-[10px] font-sans text-[#38A9EB] uppercase font-bold block tracking-[0.2em]">
              Want Similar Outcomes?
            </span>
            <h4 className="text-3xl font-sans font-black text-white">
              Engineering a Demand Engine for Your Firm.
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              We audit your target market, CAC tolerance, and positioning to design a verified growth sprint.
            </p>
          </div>
          <div className="pt-6 mt-6 relative z-10 border-t border-slate-800">
            <Link href="/#contact-form" className="inline-flex items-center justify-between w-full text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white hover:text-[#38A9EB] transition-colors">
              <span>Book an Acquisition Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
