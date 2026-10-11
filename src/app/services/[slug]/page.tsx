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
  FileCheck2,
  ShieldCheck,
  Target,
  Layers,
  ArrowLeft,
  Clock,
  TrendingUp,
  Workflow
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { SERVICES, ServiceItem } from "@/data/services";

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
      title: "Service Module Not Found | Saini Nexus",
    };
  }

  return {
    title: `${service.title} | Saini Nexus Execution Module`,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `https://saininexus.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Saini Nexus Execution Module`,
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

  // Traversal for next module
  const allSlugs = Object.keys(SERVICES);
  const currentIndex = allSlugs.indexOf(slug);
  const nextSlug = allSlugs[(currentIndex + 1) % allSlugs.length];
  const nextService = SERVICES[nextSlug];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: "B2B Demand Generation Execution Module",
    provider: {
      "@type": "Organization",
      name: "Saini Nexus",
      url: "https://saininexus.com",
    },
    description: service.shortDescription,
    areaServed: ["India", "United States", "United Kingdom", "United Arab Emirates"],
  };

  return (
    <div className="w-full pb-24 overflow-x-clip space-y-16 sm:space-y-24">
      <JsonLd data={serviceSchema} />

      {/* ========================================================= */}
      {/* 01. MODULE HEADER: DOSSIER BANNER                         */}
      {/* ========================================================= */}
      <header className="pt-28 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <Breadcrumbs
              items={[
                { label: "Services", href: "/services" },
                { label: service.title },
              ]}
            />
            <Link
              href="/#services-hub"
              className="inline-flex items-center gap-1.5 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-[#1572B8] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Services Matrix</span>
            </Link>
          </div>

          <div className="max-w-4xl space-y-5">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0F172A] text-white text-[9.5px] sm:text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
                <Sparkles className="w-3 h-3 text-[#38A9EB]" />
                EXECUTION MODULE // {service.number}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EBF6FC] text-[#0E4A8A] border border-[#38A9EB]/30 text-[9.5px] sm:text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
                <Layers className="w-3 h-3 text-[#1572B8]" />
                {service.strategicRole} POD
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-sans font-black text-slate-900 leading-[1.06] tracking-tight">
              {service.title}: <br />
              <span className="text-[#1572B8]">Commercial Architecture.</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-3xl">
              {service.fullDescription}
            </p>
          </div>

          {/* Quick Metrics Ribbon */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border border-slate-200 bg-[#FAFCFF] pt-0 shadow-xs">
            <div className="p-5 sm:p-6 border-b lg:border-b-0 border-r border-slate-200">
              <div className="text-[10px] text-[#1572B8] uppercase tracking-[0.2em] font-bold mb-1">Standard</div>
              <div className="text-xl sm:text-3xl font-sans font-black text-slate-900">{service.premiumPositioning}</div>
              <p className="text-[11px] text-slate-500 font-normal mt-1">Core operating principle</p>
            </div>

            <div className="p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-slate-200">
              <div className="text-[10px] text-[#1572B8] uppercase tracking-[0.2em] font-bold mb-1">Delivery Pod</div>
              <div className="text-xl sm:text-3xl font-sans font-black text-slate-900">{service.strategicRole}</div>
              <p className="text-[11px] text-slate-500 font-normal mt-1">Dedicated specialist team</p>
            </div>

            <div className="p-5 sm:p-6 border-r border-slate-200">
              <div className="text-[10px] text-[#1572B8] uppercase tracking-[0.2em] font-bold mb-1">Scope Items</div>
              <div className="text-2xl sm:text-3xl font-sans font-black text-slate-900">{service.capabilities.length} Capabilities</div>
              <p className="text-[11px] text-slate-500 font-normal mt-1">Full-stack execution</p>
            </div>

            <div className="p-5 sm:p-6">
              <div className="text-[10px] text-[#1572B8] uppercase tracking-[0.2em] font-bold mb-1">Attribution</div>
              <div className="text-2xl sm:text-3xl font-sans font-black text-[#1572B8]">SAR Yield</div>
              <p className="text-[11px] text-slate-500 font-normal mt-1">Sales-accepted opportunities</p>
            </div>
          </div>

        </div>
      </header>

      {/* ========================================================= */}
      {/* 02. CORE EXECUTION CAPABILITIES                           */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-200 text-[#1572B8] text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
            <Target className="w-3.5 h-3.5" />
            <span>Execution Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-sans font-black text-slate-900 tracking-tight">
            What is Included in This Module
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Systematic execution engineered to eliminate commercial friction, align buying committees, and drive sales-accepted pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 p-7 flex flex-col justify-between hover:border-[#1572B8] hover:shadow-xl transition-all group relative"
            >
              <div className="absolute top-0 left-0 w-0 h-1 bg-[#1572B8] group-hover:w-full transition-all duration-500" />
              
              <div className="space-y-4">
                <span className="font-mono text-xs font-bold text-[#1572B8] tracking-widest block">
                  CAPABILITY // 0{idx + 1}
                </span>
                <h3 className="text-lg font-sans font-black text-slate-900 group-hover:text-[#1572B8] transition-colors leading-snug">
                  {cap.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 03. ROADBLOCKS ELIMINATED VS DIRECT DELIVERABLES          */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Roadblocks Eliminated (6 cols) */}
          <div className="lg:col-span-6 bg-white border border-slate-200 p-8 sm:p-10 shadow-xs space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-50 border border-rose-200 text-rose-700 text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
                <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                <span>Commercial Friction Eliminated</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-sans font-black text-slate-900 tracking-tight">
                Problems This Module Solves
              </h3>
            </div>

            <div className="space-y-3 pt-2">
              {service.whatWeSolve.map((prob, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-[#FAFCFF] border border-slate-200 text-xs sm:text-sm text-slate-700">
                  <span className="text-rose-600 font-bold font-mono shrink-0 mt-0.5">✕</span>
                  <span className="font-medium leading-relaxed">{prob}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Direct Production Deliverables (6 cols) */}
          <div className="lg:col-span-6 bg-[#0F172A] text-white border border-slate-800 p-8 sm:p-10 shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#38A9EB]" />

            <div className="space-y-2 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 border border-slate-700 text-[#38A9EB] text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>Tangible Deliverables</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-sans font-black text-white tracking-tight">
                What Saini Nexus Builds &amp; Ships
              </h3>
            </div>

            <div className="space-y-3 pt-2 relative z-10">
              {service.deliverables.map((del, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#38A9EB] shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">{del}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 04. TARGET FIT: WHO THIS SERVICE IS BUILT FOR             */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1572B8]" />
            <span>Target Client Profiles</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-sans font-black text-slate-900 tracking-tight">
            Who This Module is Built For
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Engineered exclusively for high-ticket commercial models with sales cycles from 30 to 180 days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.whoThisIsFor.map((profile, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-slate-400 transition-colors shadow-xs"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1572B8] block">
                  IDEAL CLIENT PROFILE // 0{idx + 1}
                </span>
                <p className="text-sm font-sans font-bold text-slate-900 leading-relaxed">
                  {profile}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 05. NEXT MODULE TRAVERSAL                                 */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="border border-slate-200 p-6 sm:p-8 bg-[#FAFCFF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
              NEXT EXECUTION MODULE
            </span>
            <div className="text-lg sm:text-xl font-sans font-black text-slate-900">
              {nextService.title}
            </div>
            <p className="text-xs text-slate-600 font-normal">
              {nextService.tagline}
            </p>
          </div>
          <Link
            href={`/services/${nextService.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-900 hover:text-white text-slate-900 border border-slate-300 text-xs font-sans font-bold uppercase tracking-wider transition-colors shrink-0 shadow-xs text-center justify-center"
          >
            <span>Explore {nextService.title}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 06. STRATEGY SESSION ENGAGEMENT CTA                       */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="bg-[#0B3C7E] text-white p-6 sm:p-12 lg:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 shadow-xl relative overflow-hidden">
          
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          />

          <div className="relative z-10 max-w-2xl space-y-2.5 sm:space-y-3">
            <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#67C7F8] block">
              ENGAGEMENT ARCHITECTURE
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-sans font-black tracking-tight leading-tight">
              Ready to Implement {service.title}?
            </h2>
            <p className="text-blue-100 text-xs sm:text-base font-normal leading-relaxed">
              Schedule a focused 30-minute diagnostic session with Dev Raj Saini to evaluate your current acquisition bottleneck and map out an actionable demand framework.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/#contact-form"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-white hover:bg-slate-100 text-slate-900 text-xs font-sans font-bold uppercase tracking-widest transition-colors shadow-sm text-center"
            >
              <span>Book Strategy Session</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </Link>

            <Link
              href="/audit"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-black/20 hover:bg-black/35 text-white border border-white/30 hover:border-white/60 text-xs font-sans font-bold uppercase tracking-widest transition-colors text-center"
            >
              <span>Request Growth Audit</span>
              <ArrowUpRight className="w-4 h-4 text-[#67C7F8]" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
