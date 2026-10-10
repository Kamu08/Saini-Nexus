import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  FlaskConical, 
  ArrowUpRight, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  TrendingUp, 
  BarChart3,
  ShieldCheck,
  Zap
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { CampaignLab } from "@/components/CampaignLab";
import { CASE_STUDIES } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "B2B Marketing Case Studies | LinkedIn & Growth Results | Saini Nexus",
  description: "Explore Saini Nexus B2B marketing, LinkedIn advertising, demand generation and growth case studies with campaign strategy, execution and results.",
  alternates: {
    canonical: "https://saininexus.com/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-20 space-y-12 sm:space-y-16">
      <Breadcrumbs items={[{ label: "Case Studies" }]} />

      {/* Header */}
      <div className="max-w-4xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
          <FlaskConical className="w-3.5 h-3.5" />
          The Campaign Lab
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
          B2B Campaign <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Architectures</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-xl leading-relaxed font-normal">
          Strategic frameworks and execution models for modern B2B demand generation. Each blueprint breaks down the underlying market bottleneck, audience targeting structure, creative format, and qualification mechanics.
        </p>

        {/* Aggregate Pillars Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs">
            <span className="text-[10px] font-mono uppercase font-bold text-slate-500 block">
              Audience Mapping Model
            </span>
            <strong className="text-lg sm:text-xl font-mono font-bold text-blue-600 block mt-1">
              Committee ABM Focus
            </strong>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs">
            <span className="text-[10px] font-mono uppercase font-bold text-slate-500 block">
              Content &amp; Creative Standard
            </span>
            <strong className="text-lg sm:text-xl font-mono font-bold text-slate-900 block mt-1">
              Ungated Proof &amp; POV
            </strong>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs">
            <span className="text-[10px] font-mono uppercase font-bold text-slate-500 block">
              Evaluation Criterion
            </span>
            <strong className="text-lg sm:text-xl font-mono font-bold text-emerald-600 block mt-1">
              Sales-Accepted Pipeline
            </strong>
          </div>
        </div>
      </div>

      {/* Interactive Campaign Lab Terminal */}
      <CampaignLab />

      {/* Grid of All Teardowns */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase text-slate-500 block mb-1">
            Complete Dossier Directory
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            All Campaign Teardowns
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CASE_STUDIES.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-blue-300 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-blue-700 font-bold px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 uppercase">
                    {study.clientCode}
                  </span>
                  <span className="text-slate-500 font-medium bg-slate-100 px-2.5 py-0.5 rounded-full">
                    {study.timeline}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight leading-snug">
                    {study.clientName}
                  </h3>
                  <p className="text-xs text-slate-500 font-bold uppercase font-mono mt-1">
                    {study.industry}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed pt-2 border-t border-slate-100">
                  {study.coreChallenge}
                </p>

                {/* Outcome Pill */}
                <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-3.5 space-y-1">
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-500 block">
                    Target Outcome
                  </span>
                  <div className="text-xl font-mono font-bold text-blue-600">
                    {study.businessOutcomes[1]?.metric || study.businessOutcomes[0].metric}
                  </div>
                  <span className="text-[11px] font-mono text-slate-600 block font-medium">
                    {study.businessOutcomes[1]?.label || study.businessOutcomes[0].label}
                  </span>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                <span className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                  Explore Framework
                </span>
                <span className="p-2 rounded-full bg-slate-50 group-hover:bg-blue-600 group-hover:text-white border border-slate-200 text-slate-700 transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4 shadow-sm">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Ready to run an acquisition experiment for your firm?
        </h3>
        <p className="text-slate-600 text-sm max-w-xl mx-auto font-normal">
          We audit your current CAC, customer economics, and target account list to design a tailored pipeline generation plan.
        </p>
        <div className="pt-2">
          <Link
            href="/book"
            className="neo-btn-blue w-fit shrink-0"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="ml-2 w-4 h-4 shrink-0" />
          </Link>
        </div>
      </div>
    </div>
  );
}
