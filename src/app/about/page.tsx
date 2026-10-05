import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, ShieldCheck, Award, ArrowUpRight, ArrowRight, Sparkles, Building2, Users, Target, CheckCircle2, Layers } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { JsonLd, getOrganizationSchema } from "@/components/JsonLd";
import { TeamGrid } from "@/components/TeamGrid";

export const metadata: Metadata = {
  title: "About Saini Nexus | B2B Marketing & LinkedIn Growth",
  description: "Learn about Saini Nexus, a Jaipur-based B2B marketing and LinkedIn growth company focused on strategy, demand generation, advertising and pipeline growth.",
  alternates: {
    canonical: "https://saininexus.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-10 sm:space-y-14">
      <JsonLd data={getOrganizationSchema()} />

      <Breadcrumbs items={[{ label: "About Saini Nexus" }]} />

      {/* Hero */}
      <section className="bg-white border-2 border-black rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-[6px_6px_0px_#000000]">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
            <Sparkles className="w-3.5 h-3.5" />
            Company Philosophy & Vision
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-black leading-tight tracking-tight">
            Building Better <span className="bubble-highlight-blue">B2B Growth Systems</span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-700 leading-relaxed font-medium">
            Saini Nexus is a B2B marketing and LinkedIn growth company in Jaipur, Rajasthan, helping businesses build demand, reach decision-makers, and generate qualified pipeline through LinkedIn-led marketing, strategy, and advertising systems.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="/book"
              className="neo-btn-blue w-fit shrink-0"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="ml-2 w-4 h-4 shrink-0" />
            </Link>
            <Link
              href="/team"
              className="neo-btn-white w-fit shrink-0"
            >
              <span>Meet Our 18-Member Team</span>
              <ArrowUpRight className="ml-2 w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3 Core Operating Principles */}
      <section className="space-y-6">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
            <Target className="w-3.5 h-3.5" />
            Guiding Values
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-black">How We Operate</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-black rounded-3xl p-6 sm:p-7 space-y-3 shadow-[4px_4px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] transition-all">
            <div className="w-8 h-8 rounded-lg bg-[#60A5FA] text-black border-2 border-black flex items-center justify-center font-mono text-xs font-bold shadow-[1.5px_1.5px_0px_#000000]">
              01
            </div>
            <h3 className="text-lg font-serif font-bold text-black">Commercial Pipeline Over Vanity</h3>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
              We measure marketing success by sales-accepted opportunities and customer acquisition cost—never vanity likes.
            </p>
          </div>

          <div className="bg-white border-2 border-black rounded-3xl p-6 sm:p-7 space-y-3 shadow-[4px_4px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] transition-all">
            <div className="w-8 h-8 rounded-lg bg-[#60A5FA] text-black border-2 border-black flex items-center justify-center font-mono text-xs font-bold shadow-[1.5px_1.5px_0px_#000000]">
              02
            </div>
            <h3 className="text-lg font-serif font-bold text-black">Buying Committees, Not Single Leads</h3>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
              Enterprise deals require consensus. We orchestrate messaging for the Economic Buyer, Technical Evaluator, and Champion simultaneously.
            </p>
          </div>

          <div className="bg-white border-2 border-black rounded-3xl p-6 sm:p-7 space-y-3 shadow-[4px_4px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] transition-all">
            <div className="w-8 h-8 rounded-lg bg-[#60A5FA] text-black border-2 border-black flex items-center justify-center font-mono text-xs font-bold shadow-[1.5px_1.5px_0px_#000000]">
              03
            </div>
            <h3 className="text-lg font-serif font-bold text-black">Strategy Before Execution</h3>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
              We reject random posting and disconnected tactics. Every campaign starts with ICP calibration and positioning.
            </p>
          </div>
        </div>
      </section>

      {/* Dual Venture Ecosystem (Saini Nexus & Saini Prime) */}
      <section className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 text-black shadow-[6px_6px_0px_#000000] space-y-6">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
            <Layers className="w-3.5 h-3.5" />
            The Founder Ecosystem
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-black">
            Saini Nexus & Saini Prime
          </h2>
          <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed font-medium">
            Founded and led by Dev Raj Saini, our two ventures provide full-spectrum commercial impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="bg-[#FAF7EF] border-2 border-black rounded-2xl p-6 space-y-3 shadow-[3px_3px_0px_#000000]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-[#2563EB] font-bold">B2B Growth Motion</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#60A5FA] border border-black text-black text-[10px] font-mono font-bold">SAINI NEXUS</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-black">Saini Nexus</h3>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
              B2B Marketing & LinkedIn Growth Company focusing on demand generation, LinkedIn Ads, ABM, and sales pipeline for tech, SaaS, and manufacturing exporters.
            </p>
          </div>

          <div className="bg-[#FAF7EF] border-2 border-black rounded-2xl p-6 space-y-3 shadow-[3px_3px_0px_#000000]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-[#2563EB] font-bold">Executive Authority</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white border border-black text-black text-[10px] font-mono font-bold">SAINI PRIME</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-black">Saini Prime</h3>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
              Executive Personal Branding & Thought Leadership Studio focusing on founder ghostwriting, narrative development, and C-suite authority building.
            </p>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <TeamGrid />

      {/* Jaipur Location Signal */}
      <section className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[4px_4px_0px_#000000]">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase text-[#2563EB] font-bold">Jaipur Headquarters</span>
          <h3 className="text-xl font-serif font-bold text-black">B2B Marketing & LinkedIn Growth from Jaipur, India</h3>
          <p className="text-xs sm:text-sm text-zinc-700 font-medium">Serving B2B organizations across Jaipur, Rajasthan, pan-India, and global export markets.</p>
        </div>
        <Link
          href="/book"
          className="neo-btn-blue w-fit shrink-0"
        >
          Book a Call
        </Link>
      </section>
    </div>
  );
}
