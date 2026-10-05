import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { 
  FlaskConical, 
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
  FileText
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
    title: `${study.clientName} Case Teardown: ${study.businessOutcomes[0].metric} | Saini Nexus`,
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-10 sm:space-y-14">
      <Breadcrumbs
        items={[
          { label: "Case Studies", href: "/case-studies" },
          { label: study.clientName },
        ]}
      />

      {/* Hero */}
      <section className="bg-white border-2 border-black rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-[6px_6px_0px_#000000]">
        <div className="max-w-4xl space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono font-bold uppercase tracking-wider shadow-[1.5px_1.5px_0px_#000000]">
              {study.clientCode} · {study.industry}
            </span>
            <span className="text-xs font-mono text-zinc-700 font-bold bg-[#FAF7EF] px-3 py-1 rounded-full border border-black/20">
              Market: {study.market} · Timeline: {study.timeline}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-black leading-tight tracking-tight">
            {study.clientName} <span className="bubble-highlight-blue">Growth Teardown</span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-700 leading-relaxed font-medium">
            {study.coreChallenge}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/book"
              className="neo-btn-blue w-fit shrink-0"
            >
              <span>Book a Strategy Call</span>
              <ArrowRight className="ml-2 w-4 h-4 shrink-0" />
            </Link>
            <Link
              href={study.relatedService}
              className="neo-btn-white w-fit shrink-0"
            >
              <span>View Associated Solution</span>
              <ArrowUpRight className="ml-2 w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* Primary Outcomes Grid (Strict Campaign vs Commercial Separation) */}
      <section className="space-y-6">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
            <Sparkles className="w-3.5 h-3.5" />
            Verified Results
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-black">Campaign Metrics & Commercial Outcomes</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Campaign Operational Metrics */}
          <div className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 space-y-4 shadow-[4px_4px_0px_#000000]">
            <span className="text-xs font-mono uppercase tracking-wider text-black font-bold block pb-2 border-b-2 border-black/10">
              1. Campaign Operational Benchmarks (LinkedIn)
            </span>
            <div className="space-y-3">
              {study.campaignMetrics.map((res, i) => (
                <div key={i} className="bg-[#FAF7EF] border-2 border-black rounded-xl p-4 flex items-center justify-between shadow-[2px_2px_0px_#000000]">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-black font-bold">{res.label}</div>
                    <div className="text-xs text-zinc-600 mt-0.5 font-medium">{res.context}</div>
                  </div>
                  <div className="text-2xl font-mono font-extrabold text-black">{res.metric}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Commercial Pipeline Outcomes */}
          <div className="bg-[#EFF6FF] border-2 border-black rounded-3xl p-6 sm:p-8 space-y-4 shadow-[4px_4px_0px_#000000]">
            <span className="text-xs font-mono uppercase tracking-wider text-black font-bold block pb-2 border-b-2 border-black/10">
              2. Commercial Pipeline & Revenue Outcomes
            </span>
            <div className="space-y-3">
              {study.businessOutcomes.map((res, i) => (
                <div key={i} className="bg-white border-2 border-black rounded-xl p-4 flex items-center justify-between shadow-[2px_2px_0px_#000000]">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold">{res.label}</div>
                    <div className="text-xs text-zinc-600 mt-0.5 font-medium">{res.context}</div>
                  </div>
                  <div className="text-2xl font-mono font-extrabold text-[#2563EB]">{res.metric}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diagnosis & Hypothesis */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white border-2 border-black rounded-3xl p-8 space-y-4 shadow-[4px_4px_0px_#000000]">
          <div className="flex items-center gap-2 text-rose-700 text-xs font-mono uppercase tracking-wider font-bold">
            <AlertCircle className="w-4 h-4" />
            Diagnostic Finding
          </div>
          <h2 className="text-2xl font-serif font-bold text-black">The Pre-Existing Flaw</h2>
          <p className="text-zinc-700 text-sm leading-relaxed font-normal">{study.diagnosis}</p>
        </div>

        <div className="bg-[#FAF7EF] border-2 border-black rounded-3xl p-8 space-y-4 shadow-[4px_4px_0px_#000000]">
          <div className="flex items-center gap-2 text-[#2563EB] text-xs font-mono uppercase tracking-wider font-bold">
            <ShieldCheck className="w-4 h-4" />
            Empirical Hypothesis
          </div>
          <h2 className="text-2xl font-serif font-bold text-black">The Strategic Bet</h2>
          <p className="text-zinc-800 text-sm leading-relaxed italic font-serif">
            &ldquo;{study.hypothesis}&rdquo;
          </p>
        </div>
      </section>

      {/* Execution Details */}
      <section className="bg-white border-2 border-black rounded-3xl p-8 sm:p-10 shadow-[4px_4px_0px_#000000] space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold">Action Plan</span>
          <h2 className="text-2xl font-serif font-bold text-black">Execution Mechanics</h2>
          <p className="text-zinc-700 text-sm font-medium">{study.strategy}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {study.execution.map((step, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF7EF] border-2 border-black shadow-[2px_2px_0px_#000000]">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-zinc-800 font-semibold">{step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Creative Hook & Spend Profile */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border-2 border-black rounded-3xl p-8 space-y-3 shadow-[4px_4px_0px_#000000]">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold">Creative Angle & Hook</span>
          <p className="text-base font-serif italic text-black bg-[#EFF6FF] p-4 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000000]">
            {study.campaignHook}
          </p>
          <p className="text-xs text-zinc-600 font-mono font-bold">Format: {study.creativeFormat}</p>
        </div>

        <div className="bg-white border-2 border-black rounded-3xl p-8 space-y-3 shadow-[4px_4px_0px_#000000]">
          <span className="text-xs font-mono uppercase tracking-wider text-black font-bold">Spend Profile & Key Learning</span>
          <p className="text-sm text-black font-serif font-bold">Budget: {study.spendProfile}</p>
          <div className="pt-3 border-t-2 border-black/10 text-xs text-zinc-700 leading-relaxed font-normal">
            <strong className="text-black font-bold">Core Takeaway: </strong>{study.keyLearning}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#FAF7EF] border-2 border-black rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[4px_4px_0px_#000000]">
        <div className="space-y-2">
          <h3 className="text-2xl font-serif font-bold text-black">Run a similar B2B growth experiment?</h3>
          <p className="text-zinc-700 text-sm font-medium">Schedule a direct strategy consultation with our campaign architects.</p>
        </div>
        <Link
          href="/book"
          className="neo-btn-blue w-fit shrink-0"
        >
          <span>Book a Strategy Call</span>
          <ArrowRight className="ml-2 w-4 h-4 shrink-0" />
        </Link>
      </section>
    </div>
  );
}
