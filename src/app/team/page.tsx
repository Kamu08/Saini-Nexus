import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { 
  Users, 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Award, 
  Target, 
  Globe2 
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { TeamGrid } from "@/components/TeamGrid";

export const metadata: Metadata = {
  title: "Meet the Saini Nexus Team | B2B Marketing Specialists",
  description: "Meet the Saini Nexus team in Jaipur, India, working across B2B marketing, LinkedIn advertising, demand generation, content and campaign measurement.",
  alternates: {
    canonical: "https://saininexus.com/team",
  },
};

export default function TeamPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-10 sm:space-y-14">
      <Breadcrumbs items={[{ label: "Team" }]} />

      {/* 1. HERO SECTION */}
      <section className="text-center max-w-4xl mx-auto space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
          <Users className="w-3.5 h-3.5 text-blue-600" />
          <span>The Saini Nexus Practice</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
          Meet the <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Saini Nexus Team</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          A multidisciplinary team working across B2B marketing strategy, LinkedIn advertising, demand generation, editorial content, and campaign measurement based in Jaipur, Rajasthan.
        </p>

        {/* Status & Verification Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-slate-700 font-medium">
          <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            Jaipur, Rajasthan, India · Serving India &amp; International Markets
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            18 Team Members across 5 Specialist Functions
          </span>
          <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            LinkedIn Marketing Labs Certified
          </span>
        </div>

        {/* Key Metrics Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 max-w-3xl mx-auto">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 text-center shadow-xs">
            <div className="text-3xl font-extrabold text-slate-900">18</div>
            <div className="text-[11px] text-slate-500 uppercase font-semibold mt-0.5">Specialists</div>
          </div>
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 text-center shadow-xs">
            <div className="text-3xl font-extrabold text-slate-900">5</div>
            <div className="text-[11px] text-slate-500 uppercase font-semibold mt-0.5">Functional Pods</div>
          </div>
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 text-center shadow-xs">
            <div className="text-3xl font-extrabold text-slate-900">3</div>
            <div className="text-[11px] text-slate-500 uppercase font-semibold mt-0.5">Core Certifications</div>
          </div>
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 text-center shadow-xs">
            <div className="text-3xl font-extrabold text-slate-900">Global</div>
            <div className="text-[11px] text-slate-500 uppercase font-semibold mt-0.5">Market Coverage</div>
          </div>
        </div>
      </section>

      {/* 2. FOUNDER LEADERSHIP SPOTLIGHT */}
      <section className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 lg:p-14 text-slate-900 shadow-md relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Founder & Growth Architect</span>
            </div>

            <div className="space-y-1.5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
                Dev Raj Saini
              </h2>
              <p className="text-xs sm:text-sm text-blue-600 font-semibold">
                Founder & Lead B2B Growth Strategist · Certified by LinkedIn Marketing Labs
              </p>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Leading both <strong className="text-slate-900 font-semibold">Saini Nexus</strong> (B2B Demand, LinkedIn Growth & Commercial Pipeline) and <strong className="text-slate-900 font-semibold">Saini Prime</strong> (Executive Authority & Personal Branding Studio), Dev Raj Saini works directly with founders, CEOs, and revenue leaders to construct predictable B2B commercial pipelines.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-700">
              <div className="flex items-center gap-2 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>LinkedIn Strategy & Ads Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 font-medium">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Demand Gen & ABM Architecture</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/about/dev-raj-saini"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
              >
                <span>Read Founder Story</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </Link>
              <Link
                href="/about/credentials"
                className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-all"
              >
                <span>View Credentials</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative p-1.5 rounded-3xl bg-slate-100 ring-2 ring-slate-200 shadow-sm">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden bg-slate-100 aspect-square">
                <Image
                  src="/team/dev-raj-saini.jpg"
                  alt="Dev Raj Saini - Founder"
                  fill
                  sizes="(max-width: 640px) 192px, 224px"
                  className="object-cover"
                  style={{ objectPosition: "center 18%" }}
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE SPECIALIST DIRECTORY */}
      <TeamGrid />

      {/* 4. THE 4 OPERATING STANDARDS */}
      <section className="space-y-6">
        <div className="max-w-3xl space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Target className="w-3.5 h-3.5 text-blue-600" />
            <span>Operating Standards</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            How Our Pods Deliver Predictable Results
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            Saini Nexus embeds dedicated practitioner pods directly into your growth objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <div className="bg-white rounded-2xl p-5 sm:p-6 space-y-2.5 border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-md transition-all">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center font-bold text-xs">
              01
            </div>
            <h3 className="text-base font-bold text-slate-900">Strategy First</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Every campaign is anchored to verified buyer personas, ICP firmographics, and clear commercial positioning.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 space-y-2.5 border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-md transition-all">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center font-bold text-xs">
              02
            </div>
            <h3 className="text-base font-bold text-slate-900">Editorial + Paid</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Contrarian thought leadership paired with precision LinkedIn targeting and Thought Leader Ads.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 space-y-2.5 border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-md transition-all">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center font-bold text-xs">
              03
            </div>
            <h3 className="text-base font-bold text-slate-900">100% In-House</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Zero outsourced freelancers. All strategy, copy, creative, and media is handled directly by our Jaipur team.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 space-y-2.5 border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-md transition-all">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center font-bold text-xs">
              04
            </div>
            <h3 className="text-base font-bold text-slate-900">Pipeline Metrics</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Measured on qualified sales pipeline, sales acceptance rates, and closed-won enterprise revenue.
            </p>
          </div>
        </div>
      </section>

      {/* 5. JAIPUR GEO AUTHORITY BLOCK */}
      <section className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500 font-semibold">
            <Globe2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Jaipur Headquarters · Global Reach</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            B2B Marketing & LinkedIn Growth from Jaipur, India
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Saini Nexus is based in Jaipur, Rajasthan, India. We work with B2B organisations across India and international markets, helping them develop stronger positioning, reach relevant decision-makers, create demand and build qualified pipeline.
          </p>
        </div>
        <Link
          href="/book"
          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-all w-fit shrink-0"
        >
          <span>Book Strategy Call</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </Link>
      </section>

      {/* 6. CONVERSION CTA */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4 border border-slate-800 shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Ready to work with our B2B growth specialists?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed font-normal">
          Schedule a direct 45-minute growth consultation with our leadership team to audit your current acquisition system.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/book"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all w-fit shrink-0"
          >
            <span>Book a Strategy Conversation</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </Link>
          <Link
            href="/services"
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 shadow-xs transition-all w-fit shrink-0"
          >
            <span>Explore Services</span>
          </Link>
        </div>
      </section>
    </div>
  );
}


