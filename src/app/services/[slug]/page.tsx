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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-10 sm:space-y-14">
      <JsonLd data={serviceSchema} />

      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-white border-2 border-black rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-[6px_6px_0px_#000000]">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
            <Sparkles className="w-3.5 h-3.5" />
            Service {service.number} • {service.strategicRole}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-black leading-[1.1] tracking-tight">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl font-mono font-bold text-[#2563EB]">
            {service.tagline}
          </p>

          <p className="text-base sm:text-lg text-black/80 leading-relaxed font-normal">
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
          <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold">Core Capabilities</span>
          <h2 className="text-3xl font-serif font-bold text-black">What is Included in This Service</h2>
          <p className="text-black/80 text-sm">Systematic execution capabilities engineered to produce verifiable pipeline.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.capabilities.map((cap, i) => (
            <div key={i} className="bg-white border-2 border-black rounded-3xl p-6 sm:p-7 space-y-3 shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 transition-all">
              <div className="w-8 h-8 rounded-xl bg-[#60A5FA] border-2 border-black text-black flex items-center justify-center font-mono text-xs font-bold shadow-[2px_2px_0px_#000000]">
                0{i + 1}
              </div>
              <h3 className="text-xl font-serif font-bold text-black">{cap.title}</h3>
              <p className="text-xs sm:text-sm text-black/75 leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Solve vs Deliverables */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#FAF7EF] border-2 border-black rounded-3xl p-8 space-y-6 shadow-[6px_6px_0px_#000000]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-200 border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold">
            <AlertCircle className="w-4 h-4 text-rose-700" />
            The Bottlenecks We Eliminate
          </div>
          <h2 className="text-2xl font-serif font-bold text-black">Common Problems Solved</h2>
          <ul className="space-y-3">
            {service.whatWeSolve.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-black bg-white p-3.5 rounded-2xl border-2 border-black shadow-[2px_2px_0px_#000000]">
                <span className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-sky-50 border-2 border-black rounded-3xl p-8 space-y-6 shadow-[6px_6px_0px_#000000]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold">
            <FileCheck className="w-4 h-4 text-black" />
            Tangible Deliverables
          </div>
          <h2 className="text-2xl font-serif font-bold text-black">What You Receive</h2>
          <ul className="space-y-3">
            {service.deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-black bg-white p-3.5 rounded-2xl border-2 border-black shadow-[2px_2px_0px_#000000]">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span className="font-semibold">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-white border-2 border-black rounded-3xl p-8 sm:p-10 shadow-[6px_6px_0px_#000000] space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold">Target Fit</span>
          <h2 className="text-2xl font-serif font-bold text-black">Who This Service Is Designed For</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.whoThisIsFor.map((item, i) => (
            <div key={i} className="p-5 rounded-2xl bg-[#FAF7EF] border-2 border-black shadow-[3px_3px_0px_#000000] space-y-2">
              <div className="w-7 h-7 rounded-lg bg-[#60A5FA] border-2 border-black text-black flex items-center justify-center text-xs font-bold font-mono">
                {i + 1}
              </div>
              <p className="text-sm text-black font-semibold leading-snug">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[6px_6px_0px_#000000]">
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black">Ready to implement {service.title}?</h3>
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
