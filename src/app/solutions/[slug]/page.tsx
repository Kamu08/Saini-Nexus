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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-10 sm:space-y-14">
      <JsonLd data={solutionSchema} />

      <Breadcrumbs
        items={[
          { label: "Solutions", href: "/solutions" },
          { label: solution.title },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-white border-2 border-black rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-[6px_6px_0px_#000000]">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
            <Sparkles className="w-3.5 h-3.5" />
            Solution {solution.number} • {solution.tagline}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-black leading-[1.1] tracking-tight">
            {solution.title}
          </h1>

          <p className="text-base sm:text-xl text-black/80 leading-relaxed font-normal">
            {solution.fullDescription}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/book"
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
          <div key={i} className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 space-y-2 shadow-[4px_4px_0px_#000000]">
            <div className="text-4xl font-serif font-bold text-[#2563EB]">{metric.metric}</div>
            <div className="text-xs sm:text-sm text-black/80 leading-relaxed font-medium">{metric.context}</div>
          </div>
        ))}
      </section>

      {/* The Core Problem */}
      <section className="bg-[#FAF7EF] border-2 border-black rounded-3xl p-8 sm:p-10 space-y-4 shadow-[6px_6px_0px_#000000]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-200 border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold">
          <AlertCircle className="w-4 h-4 text-rose-700" />
          The Commercial Challenge
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-black">Why This Problem Persists</h2>
        <p className="text-black/80 text-base leading-relaxed">{solution.problemStatement}</p>
      </section>

      {/* Strategic Framework / Multi-Phase Solution */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold">Execution Blueprint</span>
          <h2 className="text-3xl font-serif font-bold text-black">How We Solve This Systematically</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solution.strategicFramework.map((framework, i) => (
            <div key={i} className="bg-white border-2 border-black rounded-3xl p-6 space-y-3 shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 transition-all">
              <span className="px-3 py-1 bg-[#60A5FA] border-2 border-black text-black text-xs font-mono font-bold rounded-full inline-block shadow-[2px_2px_0px_#000000]">
                {framework.phase}
              </span>
              <h3 className="text-lg font-serif font-bold text-black pt-1">{framework.title}</h3>
              <p className="text-xs sm:text-sm text-black/75 leading-relaxed">{framework.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Relevant Services Combined in this Solution */}
      <section className="bg-white border-2 border-black rounded-3xl p-8 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold">Integrated Capabilities</span>
          <h2 className="text-2xl font-serif font-bold text-black">Services Combined in This Solution</h2>
          <p className="text-black/80 text-sm">We combine multiple specialized capabilities to ensure seamless execution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {solution.relevantServices.map((srv, i) => (
            <Link
              key={i}
              href={srv.href}
              className="p-5 rounded-2xl bg-[#FAF7EF] border-2 border-black hover:bg-sky-50 shadow-[3px_3px_0px_#000000] hover:shadow-[5px_5px_0px_#000000] hover:-translate-y-0.5 transition-all flex items-start justify-between group"
            >
              <div className="space-y-1 pr-4">
                <h4 className="text-base font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors">
                  {srv.title}
                </h4>
                <p className="text-xs text-black/75">{srv.description}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-black group-hover:text-[#2563EB] shrink-0 mt-0.5" />
            </Link>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-white border-2 border-black rounded-3xl p-8 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold">Tangible Outcomes</span>
          <h2 className="text-2xl font-serif font-bold text-black">What You Receive</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {solution.deliverables.map((item, i) => (
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
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black">Ready to solve {solution.title}?</h3>
          <p className="text-black/80 text-sm">Schedule a direct strategy consultation with our senior B2B team.</p>
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
