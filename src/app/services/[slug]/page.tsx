import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle, 
  FileCheck
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { SERVICES } from "@/data/services";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES[slug];

  if (!service) {
    return {
      title: "Service Not Found | Saini Nexus",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `https://saininexus.com/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.shortDescription,
      url: `https://saininexus.com/services/${service.slug}`,
      siteName: "Saini Nexus",
      type: "article",
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES[slug];

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: "B2B Marketing & Growth Services",
    provider: {
      "@type": "Organization",
      name: "Saini Nexus",
      url: "https://saininexus.com",
    },
    description: service.shortDescription,
    areaServed: ["India", "United States", "United Kingdom", "Rajasthan", "Jaipur"],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16 space-y-10 sm:space-y-14">
      <JsonLd data={serviceSchema} />

      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-sm">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Service {service.number} • {service.strategicRole}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl font-mono font-bold text-blue-600">
            {service.tagline}
          </p>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {service.fullDescription}
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
              href={service.relatedSolutionHref}
              className="neo-btn-white w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-xs uppercase tracking-wider"
            >
              <span>Related Solution: {service.relatedSolutionTitle}</span>
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">Core Capabilities</span>
          <h2 className="text-3xl font-bold text-slate-900">What is Included in This Service</h2>
          <p className="text-slate-600 text-sm">Systematic execution capabilities engineered to produce verifiable pipeline.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.capabilities.map((cap, i) => (
            <div key={i} className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 space-y-3 shadow-xs hover:border-blue-300 hover:shadow-md transition-all">
              <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-mono text-xs font-bold">
                0{i + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{cap.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{cap.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Solve vs Deliverables */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-8 space-y-6 shadow-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono uppercase tracking-wider font-semibold">
            <AlertCircle className="w-4 h-4 text-rose-600" />
            The Bottlenecks We Eliminate
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Common Problems Solved</h2>
          <ul className="space-y-3">
            {service.whatWeSolve.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-50/40 border border-blue-200/70 rounded-3xl p-8 space-y-6 shadow-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
            <FileCheck className="w-4 h-4 text-blue-700" />
            Tangible Deliverables
          </div>
          <h2 className="text-2xl font-bold text-slate-900">What You Receive</h2>
          <ul className="space-y-3">
            {service.deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 bg-white p-3.5 rounded-2xl border border-blue-100 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-xs space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">Target Fit</span>
          <h2 className="text-2xl font-bold text-slate-900">Who This Service Is Designed For</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.whoThisIsFor.map((item, i) => (
            <div key={i} className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-2 hover:border-blue-300 transition-colors">
              <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center text-xs font-bold font-mono">
                {i + 1}
              </div>
              <p className="text-sm text-slate-800 font-medium leading-snug">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Ready to implement {service.title}?</h3>
          <p className="text-slate-600 text-sm font-normal">Schedule a direct strategy consultation with our senior B2B team.</p>
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
