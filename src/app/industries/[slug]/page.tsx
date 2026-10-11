import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Briefcase, ArrowRight, ArrowUpRight, CheckCircle2, AlertCircle, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { INDUSTRIES } from "@/data/industries";

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(INDUSTRIES).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES[slug];

  if (!industry) {
    return {
      title: "Industry Playbook Not Found | Saini Nexus",
    };
  }

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: {
      canonical: `https://saininexus.com/industries/${industry.slug}`,
    },
    openGraph: {
      title: industry.metaTitle,
      description: industry.heroSubheadline,
      url: `https://saininexus.com/industries/${industry.slug}`,
      siteName: "Saini Nexus",
      type: "article",
    },
  };
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = INDUSTRIES[slug];

  if (!industry) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16 space-y-10 sm:space-y-14">
      <Breadcrumbs
        items={[
          { label: "Industries", href: "/industries" },
          { label: industry.name },
        ]}
      />

      {/* Hero */}
      <section className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-sm">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            {industry.tagline}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            {industry.heroHeadline}
          </h1>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
            {industry.heroSubheadline}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/book"
              className="neo-btn-blue w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-xs uppercase tracking-wider"
            >
              <span>Book an Industry Consultation</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Market Context & Benchmark */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-slate-200/80 rounded-3xl p-8 space-y-4 shadow-xs">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">Market Reality</span>
          <h2 className="text-2xl font-bold text-slate-900">Industry Dynamics &amp; Buyer Behavior</h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">{industry.marketContext}</p>
        </div>

        <div className="bg-blue-600 border border-blue-500 rounded-3xl p-8 space-y-3 flex flex-col justify-center text-white shadow-xs">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-100 font-bold">Featured Benchmark</span>
          <div className="text-4xl sm:text-5xl font-mono font-bold text-white">{industry.featuredResult.metric}</div>
          <p className="text-xs text-blue-100 leading-relaxed font-medium">{industry.featuredResult.context}</p>
        </div>
      </section>

      {/* Core Friction / Bottlenecks */}
      <section className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-8 sm:p-10 space-y-6 shadow-xs">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono uppercase tracking-wider font-semibold">
            <AlertCircle className="w-4 h-4 text-rose-600" />
            Sector Friction Points
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Why Standard Generic Marketing Fails in {industry.name}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {industry.coreFriction.map((fric, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200/80 text-xs sm:text-sm text-slate-800 space-y-2 shadow-xs">
              <span className="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 flex items-center justify-center text-xs font-bold font-mono">
                0{i + 1}
              </span>
              <p className="font-medium text-slate-700">{fric}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Playbook Strategy */}
      <section className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">Playbook Strategy</span>
          <h2 className="text-3xl font-bold text-slate-900">The Saini Nexus Acquisition Blueprint for {industry.name}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industry.playbookStrategy.map((strat, i) => (
            <div key={i} className="bg-white border border-slate-200/80 rounded-3xl p-6 space-y-3 shadow-xs hover:border-blue-300 hover:shadow-md transition-all">
              <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-mono text-xs font-bold">
                0{i + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{strat.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{strat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Buying Committee Architecture */}
      <section className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-xs space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
            <Users className="w-4 h-4 text-blue-600" />
            Buying Committee Dynamics
          </div>
          <h2 className="text-2xl font-bold text-slate-900">How We Position Across the Decision Matrix</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industry.buyingCommittee.map((stakeholder, i) => (
            <div key={i} className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-3 hover:border-blue-300 transition-colors">
              <div className="font-bold text-slate-900 text-base">{stakeholder.role}</div>
              <div className="text-xs text-slate-600 space-y-1">
                <span className="font-bold text-slate-400 uppercase tracking-wider block text-[10px]">Primary Hesitation:</span>
                <p>{stakeholder.concern}</p>
              </div>
              <div className="text-xs text-blue-600 space-y-1 pt-2 border-t border-slate-200">
                <span className="font-bold uppercase tracking-wider block text-[10px]">Winning Narrative:</span>
                <p className="font-medium text-slate-800">{stakeholder.winningAngle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-xs space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">Playbook Deliverables</span>
          <h2 className="text-2xl font-bold text-slate-900">What We Build &amp; Deploy</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {industry.deliverables.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-800 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Ready to execute in {industry.name}?</h3>
          <p className="text-slate-600 text-sm font-normal">Schedule a direct strategy consultation with our senior B2B vertical leads.</p>
        </div>
        <Link
          href="/book"
          className="neo-btn-blue inline-flex items-center px-8 py-4 rounded-full text-xs uppercase tracking-wider shrink-0"
        >
          <span>Book a Strategy Call</span>
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
