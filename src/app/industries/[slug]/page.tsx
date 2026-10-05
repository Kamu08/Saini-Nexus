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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-10 sm:space-y-14">
      <Breadcrumbs
        items={[
          { label: "Industries", href: "/industries" },
          { label: industry.name },
        ]}
      />

      {/* Hero */}
      <section className="bg-white border-2 border-black rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-[6px_6px_0px_#000000]">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
            <Briefcase className="w-3.5 h-3.5" />
            {industry.tagline}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-black leading-[1.1] tracking-tight">
            {industry.heroHeadline}
          </h1>

          <p className="text-base sm:text-xl text-black/80 leading-relaxed font-normal">
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
        <div className="lg:col-span-2 bg-white border-2 border-black rounded-3xl p-8 space-y-4 shadow-[4px_4px_0px_#000000]">
          <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold">Market Reality</span>
          <h2 className="text-2xl font-serif font-bold text-black">Industry Dynamics &amp; Buyer Behavior</h2>
          <p className="text-sm sm:text-base text-black/80 leading-relaxed">{industry.marketContext}</p>
        </div>

        <div className="bg-[#60A5FA] border-2 border-black rounded-3xl p-8 space-y-3 flex flex-col justify-center shadow-[4px_4px_0px_#000000]">
          <span className="text-xs font-mono uppercase tracking-widest text-black font-bold">Featured Benchmark</span>
          <div className="text-4xl sm:text-5xl font-serif font-bold text-black">{industry.featuredResult.metric}</div>
          <p className="text-xs text-black/90 leading-relaxed font-semibold">{industry.featuredResult.context}</p>
        </div>
      </section>

      {/* Core Friction / Bottlenecks */}
      <section className="bg-[#FAF7EF] border-2 border-black rounded-3xl p-8 sm:p-10 space-y-6 shadow-[6px_6px_0px_#000000]">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-200 border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold">
            <AlertCircle className="w-4 h-4 text-rose-700" />
            Sector Friction Points
          </div>
          <h2 className="text-2xl font-serif font-bold text-black">Why Standard Generic Marketing Fails in {industry.name}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {industry.coreFriction.map((fric, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white border-2 border-black text-xs sm:text-sm text-black space-y-2 shadow-[3px_3px_0px_#000000]">
              <span className="w-7 h-7 rounded-lg bg-rose-200 border-2 border-black text-black flex items-center justify-center text-xs font-bold font-mono">
                0{i + 1}
              </span>
              <p className="font-medium text-black/85">{fric}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Playbook Strategy */}
      <section className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold">Playbook Strategy</span>
          <h2 className="text-3xl font-serif font-bold text-black">The Saini Nexus Acquisition Blueprint for {industry.name}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industry.playbookStrategy.map((strat, i) => (
            <div key={i} className="bg-white border-2 border-black rounded-3xl p-6 space-y-3 shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 transition-all">
              <div className="w-8 h-8 rounded-xl bg-[#60A5FA] border-2 border-black text-black flex items-center justify-center font-mono text-xs font-bold shadow-[2px_2px_0px_#000000]">
                0{i + 1}
              </div>
              <h3 className="text-xl font-serif font-bold text-black">{strat.title}</h3>
              <p className="text-xs sm:text-sm text-black/75 leading-relaxed">{strat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Buying Committee Architecture */}
      <section className="bg-white border-2 border-black rounded-3xl p-8 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold">
            <Users className="w-4 h-4 text-black" />
            Buying Committee Dynamics
          </div>
          <h2 className="text-2xl font-serif font-bold text-black">How We Position Across the Decision Matrix</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industry.buyingCommittee.map((stakeholder, i) => (
            <div key={i} className="p-5 rounded-2xl bg-[#FAF7EF] border-2 border-black space-y-3 shadow-[3px_3px_0px_#000000]">
              <div className="font-serif font-bold text-black text-base">{stakeholder.role}</div>
              <div className="text-xs text-black/80 space-y-1">
                <span className="font-bold text-black/60 uppercase tracking-wider block text-[10px]">Primary Hesitation:</span>
                <p>{stakeholder.concern}</p>
              </div>
              <div className="text-xs text-[#2563EB] space-y-1 pt-2 border-t-2 border-black/10">
                <span className="font-bold uppercase tracking-wider block text-[10px]">Winning Narrative:</span>
                <p className="font-semibold text-black">{stakeholder.winningAngle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-white border-2 border-black rounded-3xl p-8 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold">Playbook Deliverables</span>
          <h2 className="text-2xl font-serif font-bold text-black">What We Build &amp; Deploy</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {industry.deliverables.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-[#FAF7EF] border-2 border-black shadow-[2px_2px_0px_#000000]">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-black font-semibold">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[6px_6px_0px_#000000]">
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black">Ready to execute in {industry.name}?</h3>
          <p className="text-black/80 text-sm">Schedule a direct strategy consultation with our senior B2B vertical leads.</p>
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
