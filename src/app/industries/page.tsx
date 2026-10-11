import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Briefcase, 
  ArrowUpRight, 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Globe, 
  BarChart3, 
  ShieldCheck, 
  Building2, 
  CheckCircle2 
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { INDUSTRIES } from "@/data/industries";

const SECTOR_ICONS: Record<string, React.ElementType> = {
  "b2b-saas": Globe,
  "technology": Cpu,
  "consulting": Briefcase,
  "professional-services": BarChart3,
  "industrial-manufacturing": ShieldCheck,
  "real-estate": Building2,
};

export const metadata: Metadata = {
  title: "B2B Marketing Across Key Sectors | Saini Nexus",
  description: "Explore Saini Nexus specialized B2B growth and LinkedIn demand generation playbooks tailored for SaaS, Technology, Consulting, Professional Services, Industrial Manufacturing, and Commercial Real Estate.",
  alternates: {
    canonical: "https://saininexus.com/industries",
  },
};

export default function IndustriesPage() {
  const industryList = Object.values(INDUSTRIES);

  return (
    <div className="w-full pb-24 overflow-x-clip space-y-16 sm:space-y-24">
      {/* Header */}
      <section className="pt-28 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Breadcrumbs items={[{ label: "Key Sectors" }]} />

          <div className="max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-white text-[10px] font-sans font-bold uppercase tracking-[0.2em]">
              <Sparkles className="w-3 h-3 text-[#38A9EB]" />
              Sector Practice // 6 Specialized Playbooks
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-black text-slate-900 leading-[1.05] tracking-tight">
              B2B Growth <br />
              <span className="text-[#1572B8]">Across Key Sectors.</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-3xl">
              Enterprise growth does not follow a generic, one-size-fits-all template. We adapt commercial messaging, committee multi-threading, and LinkedIn acquisition mechanics to the unique buying dynamics of your vertical.
            </p>
          </div>

          {/* Quick Metrics Ribbon */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border border-slate-200 bg-[#FAFCFF] pt-0 shadow-xs">
            <div className="p-5 sm:p-6 border-b lg:border-b-0 border-r border-slate-200">
              <div className="text-2xl sm:text-4xl font-sans font-black text-slate-900">6</div>
              <div className="text-[10px] text-[#1572B8] uppercase tracking-[0.2em] font-bold mt-1">Specialized Verticals</div>
              <p className="text-[11px] text-slate-500 font-normal mt-0.5">Engineered acquisition models</p>
            </div>
            <div className="p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-slate-200">
              <div className="text-2xl sm:text-4xl font-sans font-black text-slate-900">100%</div>
              <div className="text-[10px] text-[#1572B8] uppercase tracking-[0.2em] font-bold mt-1">Committee Focused</div>
              <p className="text-[11px] text-slate-500 font-normal mt-0.5">Economic buyers &amp; champions</p>
            </div>
            <div className="p-5 sm:p-6 border-r border-slate-200">
              <div className="text-2xl sm:text-4xl font-sans font-black text-slate-900">SAR</div>
              <div className="text-[10px] text-[#1572B8] uppercase tracking-[0.2em] font-bold mt-1">Pipeline Metric</div>
              <p className="text-[11px] text-slate-500 font-normal mt-0.5">Sales-accepted opportunities</p>
            </div>
            <div className="p-5 sm:p-6">
              <div className="text-2xl sm:text-4xl font-sans font-black text-slate-900">Global</div>
              <div className="text-[10px] text-[#1572B8] uppercase tracking-[0.2em] font-bold mt-1">Execution Reach</div>
              <p className="text-[11px] text-slate-500 font-normal mt-0.5">India, US, UK, Middle East</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryList.map((ind) => {
            const Icon = SECTOR_ICONS[ind.slug] || Briefcase;

            return (
              <div
                key={ind.slug}
                className="bg-white border border-slate-200 p-8 sm:p-9 flex flex-col justify-between hover:border-[#1572B8] hover:shadow-xl transition-all duration-300 group relative"
              >
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#1572B8] group-hover:w-full transition-all duration-500" />

                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-[#FAFCFF] border border-slate-200 flex items-center justify-center text-[#1572B8] group-hover:border-[#38A9EB] group-hover:bg-[#EBF6FC] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {ind.sectorCode}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#1572B8] block">
                      {ind.tagline}
                    </span>
                    <h2 className="text-2xl font-sans font-black text-slate-900 group-hover:text-[#1572B8] transition-colors tracking-tight">
                      {ind.name}
                    </h2>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {ind.heroSubheadline}
                  </p>

                  {/* Highlights Mini Ribbon */}
                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-100 text-xs">
                    <div className="bg-[#FAFCFF] p-2.5 border border-slate-200">
                      <span className="text-[9px] font-mono font-bold uppercase text-slate-400 block">Typical ACV</span>
                      <strong className="text-slate-900 font-sans font-bold text-xs truncate block">{ind.averageContractValue}</strong>
                    </div>
                    <div className="bg-[#FAFCFF] p-2.5 border border-slate-200">
                      <span className="text-[9px] font-mono font-bold uppercase text-slate-400 block">Sales Horizon</span>
                      <strong className="text-slate-900 font-sans font-bold text-xs truncate block">{ind.typicalSalesCycle}</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#1572B8]">
                    {ind.featuredResult.metric} {ind.featuredResult.label}
                  </span>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-slate-900 group-hover:text-[#1572B8] transition-colors"
                  >
                    <span>Explore Playbook</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Custom Market Consultation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B3C7E] text-white p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          />

          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#67C7F8] block">
              CUSTOM VERTICAL ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-4xl font-sans font-black tracking-tight leading-tight">
              Don&apos;t See Your Exact Niche?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base font-normal leading-relaxed">
              Our B2B demand generation framework adapts to any high-ticket business model. Schedule a discovery call with Dev Raj Saini to discuss your target buying committee.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/#contact-form"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white hover:bg-slate-100 text-slate-900 text-xs font-sans font-bold uppercase tracking-widest transition-colors shadow-sm text-center"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-black/20 hover:bg-black/35 text-white border border-white/30 hover:border-white/60 text-xs font-sans font-bold uppercase tracking-widest transition-colors text-center"
            >
              <span>Contact Senior Partners</span>
              <ArrowUpRight className="w-4 h-4 text-[#67C7F8]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
