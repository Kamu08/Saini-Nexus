import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { NexusGrowthMap } from "@/components/NexusGrowthMap";
import { InteractiveSolutionsGrid } from "@/components/InteractiveSolutionsGrid";

export const metadata: Metadata = {
  title: "B2B Growth Solutions | Demand, ABM & Pipeline | Saini Nexus",
  description: "Explore B2B growth solutions from Saini Nexus for demand generation, high-value accounts, LinkedIn growth, executive authority and qualified pipeline.",
  alternates: {
    canonical: "https://saininexus.com/solutions",
  },
};

export default function SolutionsIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-10 sm:space-y-14">
      <Breadcrumbs items={[{ label: "Solutions" }]} />

      {/* Interactive Solutions Showcase */}
      <InteractiveSolutionsGrid />

      {/* Interactive System */}
      <NexusGrowthMap />

      {/* Bottom CTA */}
      <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4 shadow-[6px_6px_0px_#000000]">
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black">
          Not sure which solution matches your current growth stage?
        </h3>
        <p className="text-black/80 text-sm max-w-xl mx-auto leading-relaxed">
          We conduct comprehensive B2B positioning and pipeline audits to determine the highest-leverage growth motion for your business.
        </p>
        <div className="pt-2">
          <Link
            href="/book"
            className="neo-btn-blue inline-flex items-center justify-center px-8 py-4 rounded-full text-xs uppercase tracking-wider"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
