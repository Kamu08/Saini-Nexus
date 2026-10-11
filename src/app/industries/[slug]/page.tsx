import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { 
  Briefcase, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  AlertCircle, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  Target, 
  Clock, 
  TrendingUp, 
  Layers, 
  Building2, 
  Cpu, 
  Globe, 
  BarChart3, 
  ChevronRight,
  ArrowLeft
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { INDUSTRIES, IndustryPlaybook } from "@/data/industries";

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const SECTOR_ICONS: Record<string, React.ElementType> = {
  "b2b-saas": Globe,
  "technology": Cpu,
  "consulting": Briefcase,
  "professional-services": BarChart3,
  "industrial-manufacturing": ShieldCheck,
  "real-estate": Building2,
};

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

  const Icon = SECTOR_ICONS[industry.slug] || Briefcase;

  // Find next industry for bottom traversal
  const allSlugs = Object.keys(INDUSTRIES);
  const currentIndex = allSlugs.indexOf(slug);
  const nextSlug = allSlugs[(currentIndex + 1) % allSlugs.length];
  const nextIndustry = INDUSTRIES[nextSlug];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: industry.name + " B2B Marketing & Growth Playbook",
    provider: {
      "@type": "Organization",
      name: "Saini Nexus",
      url: "https://saininexus.com"
    },
    description: industry.heroSubheadline,
    areaServed: ["India", "United States", "United Kingdom", "United Arab Emirates"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: industry.name + " Deliverables",
      itemListElement: industry.deliverables.map((d, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: d.title,
          description: d.description
        }
      }))
    }
  };

  return (
    <div className="w-full pb-24 overflow-x-clip space-y-16 sm:space-y-24">
      <JsonLd data={serviceJsonLd} />

      {/* ========================================================= */}
      {/* 01. HERO HEADER: DOSSIER BANNER & EXECUTIVE HOOK          */}
      {/* ========================================================= */}
      <header className="pt-28 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <Breadcrumbs
              items={[
                { label: "Industries", href: "/industries" },
                { label: industry.name },
              ]}
            />
            <Link
              href="/#sectors"
              className="inline-flex items-center gap-1.5 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-[#1572B8] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Sectors</span>
            </Link>
          </div>

          <div className="max-w-4xl space-y-5">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0F172A] text-white text-[9.5px] sm:text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
                <Sparkles className="w-3 h-3 text-[#38A9EB]" />
                {industry.sectorCode}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EBF6FC] text-[#0E4A8A] border border-[#38A9EB]/30 text-[9.5px] sm:text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
                <Icon className="w-3 h-3 text-[#1572B8]" />
                {industry.tagline}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-sans font-black text-slate-900 leading-[1.06] tracking-tight">
              {industry.name}: <br />
              <span className="text-[#1572B8]">Acquisition Blueprint.</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-3xl">
              {industry.heroSubheadline}
            </p>
          </div>

          {/* Operational Metrics Ledger Ribbon */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border border-slate-200 bg-[#FAFCFF] pt-0 shadow-xs">
            <div className="p-5 sm:p-6 border-b lg:border-b-0 border-r border-slate-200">
              <div className="text-[10px] text-[#1572B8] uppercase tracking-[0.2em] font-bold mb-1">Benchmark ROI</div>
              <div className="text-2xl sm:text-4xl font-sans font-black text-slate-900">{industry.benchmarkRoi}</div>
              <p className="text-[11px] text-slate-500 font-normal mt-1">Closed ARR pipeline multiple</p>
            </div>

            <div className="p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-slate-200">
              <div className="text-[10px] text-[#1572B8] uppercase tracking-[0.2em] font-bold mb-1">Sales Horizon</div>
              <div className="text-2xl sm:text-4xl font-sans font-black text-slate-900">{industry.typicalSalesCycle}</div>
              <p className="text-[11px] text-slate-500 font-normal mt-1">Average consensus duration</p>
            </div>

            <div className="p-5 sm:p-6 border-r border-slate-200">
              <div className="text-[10px] text-[#1572B8] uppercase tracking-[0.2em] font-bold mb-1">Typical ACV</div>
              <div className="text-xl sm:text-3xl font-sans font-black text-slate-900 truncate">{industry.averageContractValue}</div>
              <p className="text-[11px] text-slate-500 font-normal mt-1">Annual contract baseline</p>
            </div>

            <div className="p-5 sm:p-6">
              <div className="text-[10px] text-[#1572B8] uppercase tracking-[0.2em] font-bold mb-1">Buying Committee</div>
              <div className="text-2xl sm:text-4xl font-sans font-black text-[#1572B8]">{industry.targetCommitteeSize}</div>
              <p className="text-[11px] text-slate-500 font-normal mt-1">Key multi-threaded roles</p>
            </div>
          </div>

        </div>
      </header>

      {/* ========================================================= */}
      {/* 02. MARKET REALITY & BENCHMARK SPOTLIGHT                  */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Market Context (8 cols) */}
          <div className="lg:col-span-8 bg-white border border-slate-200 p-8 sm:p-10 shadow-xs flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#1572B8]" />
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-slate-50 border border-slate-200 text-[#1572B8] text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
                <Target className="w-3.5 h-3.5" />
                <span>Sector Commercial Dynamics</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-sans font-black text-slate-900 tracking-tight leading-snug">
                The Operating Environment in {industry.name}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal pt-1">
                {industry.marketContext}
              </p>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs font-sans font-bold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1572B8]" />
                <span>Zero Gated Ebooks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1572B8]" />
                <span>Multi-Threaded Targeting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1572B8]" />
                <span>SAR Attribution Model</span>
              </div>
            </div>
          </div>

          {/* Featured Result (4 cols) */}
          <div className="lg:col-span-4 bg-[#0B3C7E] text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
            />
            <div className="relative z-10 space-y-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#67C7F8] block">
                VERIFIED BENCHMARK
              </span>
              <div className="text-4xl sm:text-6xl font-sans font-black tracking-tight text-white">
                {industry.featuredResult.metric}
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#38A9EB] font-bold">
                {industry.featuredResult.label}
              </p>
              <p className="text-blue-100 text-xs sm:text-sm leading-relaxed font-normal pt-2">
                {industry.featuredResult.context}
              </p>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-white/20">
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-white hover:text-[#67C7F8] transition-colors"
              >
                <span>Request Growth Diagnostic</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 03. CORE FRICTION POINTS / WHY TRADITIONAL MARKETING FAILS*/}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-50 border border-rose-200 text-rose-700 text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
            <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
            <span>Sector Friction Diagnosis</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-sans font-black text-slate-900 tracking-tight">
            Why Generic B2B Marketing Fails in {industry.name}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Standard inbound marketing models collapse in high-ticket environments because they treat enterprise buying decisions like single-consumer ecommerce transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industry.coreFriction.map((fric, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-rose-400 hover:shadow-xl transition-all group relative"
            >
              <div className="space-y-4">
                <span className="font-mono text-xs font-bold text-rose-600 tracking-widest block">
                  BOTTLENECK // 0{idx + 1}
                </span>
                <h3 className="text-lg sm:text-xl font-sans font-black text-slate-900 leading-snug group-hover:text-rose-600 transition-colors">
                  {fric.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {fric.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 04. MULTI-STEP PLAYBOOK STRATEGY                          */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-200 text-[#1572B8] text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
            <Layers className="w-3.5 h-3.5" />
            <span>Execution Framework</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-sans font-black text-slate-900 tracking-tight">
            The Saini Nexus Playbook for {industry.name}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            A battle-tested 3-stage execution architecture designed specifically to penetrate target buying groups and generate verifiable pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industry.playbookStrategy.map((strat) => (
            <div
              key={strat.step}
              className="bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-[#1572B8] hover:shadow-xl transition-all group relative"
            >
              <div className="absolute top-0 left-0 w-0 h-1 bg-[#1572B8] group-hover:w-full transition-all duration-500" />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#1572B8] tracking-widest block">
                    STAGE // {strat.step}
                  </span>
                  <span className="w-7 h-7 rounded-none bg-[#FAFCFF] border border-slate-200 text-slate-700 text-xs font-mono font-bold flex items-center justify-center">
                    {strat.step}
                  </span>
                </div>

                <h3 className="text-xl font-sans font-black text-slate-900 group-hover:text-[#1572B8] transition-colors leading-snug">
                  {strat.title}
                </h3>
                
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {strat.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1572B8] block mb-1">
                  Expected Outcome:
                </span>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  {strat.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 05. BUYING COMMITTEE MATRIX (DECISION ARCHITECTURE)       */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
            <Users className="w-3.5 h-3.5 text-[#1572B8]" />
            <span>Buying Committee Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-sans font-black text-slate-900 tracking-tight">
            How We Navigate the {industry.name} Decision Matrix
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Enterprise deals require consensus across finance, technical, and operational stakeholders. We deploy tailored messaging for each stakeholder group simultaneously.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industry.buyingCommittee.map((stakeholder, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-slate-400 transition-colors shadow-xs"
            >
              <div className="space-y-4">
                <div className="pb-3 border-b border-slate-100">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1572B8] block mb-1">
                    STAKEHOLDER // 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-sans font-black text-slate-900 leading-snug">
                    {stakeholder.role}
                  </h3>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-slate-400 block">
                    Core Evaluation Metric:
                  </span>
                  <p className="text-xs font-semibold text-slate-800 bg-[#FAFCFF] p-2.5 border border-slate-200">
                    {stakeholder.decisionPriority}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-rose-500 block">
                    Primary Hesitation &amp; Risk:
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {stakeholder.concern}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 space-y-1.5">
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#1572B8] block">
                  Winning Commercial Narrative:
                </span>
                <p className="text-xs text-slate-800 font-medium leading-relaxed">
                  {stakeholder.winningAngle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 06. PLAYBOOK DELIVERABLES                                 */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#1572B8]" />
            <span>Complete Scope of Work</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-sans font-black text-slate-900 tracking-tight">
            What Saini Nexus Builds &amp; Deploys
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Every engagement includes complete strategic architecture, creative production, media management, and closed-loop revenue telemetry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industry.deliverables.map((deliv, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 p-6 sm:p-8 flex items-start gap-4 hover:border-[#1572B8] transition-colors shadow-xs"
            >
              <div className="w-9 h-9 rounded-none bg-[#EBF6FC] text-[#1572B8] flex items-center justify-center shrink-0 mt-0.5 border border-[#38A9EB]/30">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1572B8] block">
                  {deliv.category}
                </span>
                <h3 className="text-base sm:text-lg font-sans font-black text-slate-900 leading-snug">
                  {deliv.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {deliv.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 07. NEXT SECTOR TRAVERSAL                                 */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="border border-slate-200 p-6 sm:p-8 bg-[#FAFCFF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
              NEXT INDUSTRY DOSSIER
            </span>
            <div className="text-lg sm:text-xl font-sans font-black text-slate-900">
              {nextIndustry.name}
            </div>
            <p className="text-xs text-slate-600 font-normal">
              {nextIndustry.tagline}
            </p>
          </div>
          <Link
            href={`/industries/${nextIndustry.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-900 hover:text-white text-slate-900 border border-slate-300 text-xs font-sans font-bold uppercase tracking-wider transition-colors shrink-0 shadow-xs text-center justify-center"
          >
            <span>Explore {nextIndustry.name}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 08. BOTTOM CTA BANNER: STRATEGY SESSION ENGAGEMENT        */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="bg-[#0B3C7E] text-white p-6 sm:p-12 lg:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 shadow-xl relative overflow-hidden">
          
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          />

          <div className="relative z-10 max-w-2xl space-y-2.5 sm:space-y-3">
            <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#67C7F8] block">
              VERTICAL STRATEGY SESSION
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-sans font-black tracking-tight leading-tight">
              Ready to Deploy in {industry.name}?
            </h2>
            <p className="text-blue-100 text-xs sm:text-base font-normal leading-relaxed">
              Schedule a focused 30-minute diagnostic session with Dev Raj Saini to evaluate your current acquisition bottlenecks and calibrate your target buying committee.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/#contact-form"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-white hover:bg-slate-100 text-slate-900 text-xs font-sans font-bold uppercase tracking-widest transition-colors shadow-sm text-center"
            >
              <span>Book Strategy Call</span>
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
