import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { JsonLd, getLocalBusinessSchema } from "@/components/JsonLd";
import { LOCATIONS } from "@/data/locations";

export const metadata: Metadata = {
  title: "Regional B2B Marketing & LinkedIn Hubs | Saini Nexus",
  description: "Saini Nexus regional B2B marketing authority hubs across Jaipur, Rajasthan, and India. Building the next generation of B2B growth.",
};

export default function LocationsIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-10 sm:space-y-14">
      <JsonLd data={getLocalBusinessSchema()} />
      <Breadcrumbs items={[{ label: "Locations" }]} />

      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
          <MapPin className="w-3.5 h-3.5" />
          Regional Presence &amp; Authority
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-black leading-[1.1] tracking-tight">
          Regional Roots. <br />
          <span className="text-[#2563EB]">Global B2B Acquisition Standard.</span>
        </h1>
        <p className="text-black/80 text-base sm:text-lg leading-relaxed font-sans">
          From our Jaipur headquarters, we empower industrial exporters, high-growth tech firms, and professional consultancies across Rajasthan and India to win international enterprise deals.
        </p>
      </div>

      {/* Hub Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.values(LOCATIONS).map((loc) => (
          <div
            key={loc.slug}
            className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 transition-all group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="bg-sky-50 border border-black text-black font-bold uppercase tracking-wider text-[10px] px-2.5 py-0.5 rounded-full">
                  {loc.heroTagline}
                </span>
              </div>

              <h2 className="text-2xl font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors leading-snug">
                {loc.name}
              </h2>

              <p className="text-black/75 text-xs sm:text-sm leading-relaxed">
                {loc.heroDescription}
              </p>

              <div className="pt-4 border-t-2 border-black/10 space-y-2">
                <span className="text-[11px] font-mono text-black/60 uppercase tracking-wider block font-bold">
                  Key Focus Sectors:
                </span>
                <ul className="space-y-1 text-xs text-black/80">
                  {loc.keySectors.slice(0, 3).map((sec, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#60A5FA] border border-black shrink-0"></span>
                      <span className="font-medium">{sec.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t-2 border-black/10 flex items-center justify-between">
              <span className="text-xs font-mono text-black/60 font-bold">HQ: Jaipur, RJ</span>
              <Link
                href={`/locations/${loc.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-black group-hover:text-[#2563EB] font-bold uppercase tracking-wider"
              >
                <span>Explore Hub</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Philosophy Banner */}
      <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4 shadow-[6px_6px_0px_#000000]">
        <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold">Strategic Philosophy</span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black">
          &ldquo;Building the next generation of B2B marketing from Rajasthan.&rdquo;
        </h3>
        <p className="text-black/80 text-sm max-w-2xl mx-auto leading-relaxed">
          We do not spam generic city keywords. We build legitimate topical and regional authority through verified case studies, local industrial expertise, and measurable commercial results.
        </p>
      </div>
    </div>
  );
}
