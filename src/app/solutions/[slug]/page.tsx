import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { SOLUTIONS } from "@/data/solutions";

interface SolutionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(SOLUTIONS).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = SOLUTIONS[slug];

  if (!solution) {
    return {
      title: "Solution Not Found | Saini Nexus",
    };
  }

  return {
    title: solution.metaTitle,
    description: solution.metaDescription,
    alternates: {
      canonical: `https://saininexus.com/solutions/${solution.slug}`,
    },
    openGraph: {
      title: solution.metaTitle,
      description: solution.shortDescription,
      url: `https://saininexus.com/solutions/${solution.slug}`,
      siteName: "Saini Nexus",
      type: "article",
    },
  };
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = SOLUTIONS[slug];

  if (!solution) {
    notFound();
  }

  const solutionSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.title,
    serviceType: "B2B Commercial Solutions",
    provider: {
      "@type": "Organization",
      name: "Saini Nexus",
      url: "https://saininexus.com",
    },
    description: solution.shortDescription,
    areaServed: ["India", "United States", "United Kingdom", "Rajasthan", "Jaipur"],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16 space-y-10 sm:space-y-14">
      <JsonLd data={solutionSchema} />

      <Breadcrumbs
        items={[
          { label: "Solutions", href: "/solutions" },
          { label: solution.title },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-sm">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Solution {solution.number} • {solution.tagline}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            {solution.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
            {solution.fullDescription}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/#contact-form"
              className="neo-btn-blue w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-xs uppercase tracking-wider"
            >
              <span>Book a Strategy Call</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="neo-btn-white w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-xs uppercase tracking-wider"
            >
              <span>View Case Teardowns</span>
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {solution.metricsThatMatter.map((metric, i) => (
          <div key={i} className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-2 shadow-xs">
            <div className="text-4xl font-mono font-bold text-blue-600">{metric.metric}</div>
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{metric.context}</div>
          </div>
        ))}
      </section>

      {/* The Core Problem */}
      <section className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-8 sm:p-10 space-y-4 shadow-xs">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono uppercase tracking-wider font-semibold">
          <AlertCircle className="w-4 h-4 text-rose-600" />
          The Commercial Challenge
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Why This Problem Persists</h2>
        <p className="text-slate-600 text-base leading-relaxed font-normal">{solution.problemStatement}</p>
      </section>

      {/* Strategic Framework / Multi-Phase Solution */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">Execution Blueprint</span>
          <h2 className="text-3xl font-bold text-slate-900">How We Solve This Systematically</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solution.strategicFramework.map((framework, i) => (
            <div key={i} className="bg-white border border-slate-200/80 rounded-3xl p-6 space-y-3 shadow-xs hover:border-blue-300 hover:shadow-md transition-all">
              <span className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold rounded-full inline-block">
                {framework.phase}
              </span>
              <h3 className="text-lg font-bold text-slate-900 pt-1">{framework.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{framework.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Relevant Services Combined in this Solution */}
      <section className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-xs space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">Integrated Capabilities</span>
          <h2 className="text-2xl font-bold text-slate-900">Services Combined in This Solution</h2>
          <p className="text-slate-600 text-sm">We combine multiple specialized capabilities to ensure seamless execution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {solution.relevantServices.map((srv, i) => (
            <Link
              key={i}
              href={srv.href}
              className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-blue-50/40 hover:border-blue-300 transition-all flex items-start justify-between group"
            >
              <div className="space-y-1 pr-4">
                <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {srv.title}
                </h4>
                <p className="text-xs text-slate-600">{srv.description}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-600 shrink-0 mt-0.5" />
            </Link>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-xs space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">Tangible Outcomes</span>
          <h2 className="text-2xl font-bold text-slate-900">What You Receive</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {solution.deliverables.map((item, i) => (
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
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Ready to solve {solution.title}?</h3>
          <p className="text-slate-600 text-sm font-normal">Schedule a direct strategy consultation with our senior B2B team.</p>
        </div>
        <Link
          href="/#contact-form"
          className="neo-btn-blue inline-flex items-center px-8 py-4 rounded-full text-xs uppercase tracking-wider shrink-0"
        >
          <span>Book a Strategy Call</span>
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
