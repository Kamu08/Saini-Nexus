import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { FlaskConical, ArrowUpRight, ArrowRight, Sparkles, Layers, TrendingUp, BarChart3 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { CampaignLab } from "@/components/CampaignLab";
import { CASE_STUDIES } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "B2B Marketing Case Studies | LinkedIn & Growth Results | Saini Nexus",
  description: "Explore Saini Nexus B2B marketing, LinkedIn advertising, demand generation and growth case studies with campaign strategy, execution and results.",
  alternates: {
    canonical: "https://saininexus.com/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-10 sm:space-y-14">
      <Breadcrumbs items={[{ label: "Case Studies" }]} />

      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
          <FlaskConical className="w-3.5 h-3.5" />
          The Campaign Lab
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-black leading-tight tracking-tight">
          B2B Growth <span className="bubble-highlight-blue">Case Studies</span>
        </h1>
        <p className="text-zinc-700 text-base sm:text-lg leading-relaxed font-medium">
          Real campaigns, strategic decisions and measurable outcomes. Explore how Saini Nexus approaches B2B marketing and LinkedIn-led growth challenges.
        </p>
      </div>

      {/* Interactive Campaign Lab Terminal */}
      <CampaignLab />

      {/* Grid of All Teardowns */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-black">All Campaign Teardowns</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.slug}
              className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[4px_4px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-black font-extrabold px-2.5 py-1 rounded-full bg-[#60A5FA] border border-black shadow-[1px_1px_0px_#000000] uppercase">{study.clientCode}</span>
                  <span className="text-zinc-600 font-semibold">{study.market}</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors">
                  {study.clientName}
                </h3>

                <p className="text-xs text-zinc-600 font-bold uppercase font-mono">{study.industry}</p>

                <p className="text-xs text-zinc-700 line-clamp-3 leading-relaxed pt-2 border-t-2 border-black/10 font-normal">
                  {study.coreChallenge}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t-2 border-black/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-zinc-600 uppercase font-bold">Commercial Outcome</div>
                  <div className="text-base font-mono font-extrabold text-black">{study.businessOutcomes[0].metric}</div>
                </div>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-mono text-black hover:text-[#2563EB] font-bold"
                >
                  <span>Read Breakdown</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#FAF7EF] border-2 border-black rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4 shadow-[4px_4px_0px_#000000]">
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black">
          Ready to run an acquisition experiment for your firm?
        </h3>
        <p className="text-zinc-700 text-sm max-w-xl mx-auto font-medium">
          We audit your current CAC, customer economics, and target account list to design a tailored pipeline generation plan.
        </p>
        <div className="pt-2">
          <Link
            href="/book"
            className="neo-btn-blue w-fit shrink-0"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="ml-2 w-4 h-4 shrink-0" />
          </Link>
        </div>
      </div>
    </div>
  );
}
