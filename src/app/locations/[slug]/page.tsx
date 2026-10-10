import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MapPin, ArrowRight, ArrowUpRight, CheckCircle2, HelpCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { JsonLd, getLocalBusinessSchema, getFAQSchema } from "@/components/JsonLd";
import { LOCATIONS } from "@/data/locations";

interface LocationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(LOCATIONS).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = LOCATIONS[slug];

  if (!location) {
    return {
      title: "Location Not Found | Saini Nexus",
    };
  }

  const titleMap: Record<string, string> = {
    jaipur: "B2B Marketing & LinkedIn Marketing Agency Jaipur | Saini Nexus",
    rajasthan: "B2B Marketing & LinkedIn Growth Company Rajasthan | Saini Nexus",
    india: "B2B Marketing & LinkedIn Ads Agency India | Saini Nexus",
  };

  return {
    title: titleMap[slug] || `${location.name} B2B Marketing & Growth | Saini Nexus`,
    description: location.heroDescription,
    alternates: {
      canonical: `https://saininexus.com/locations/${location.slug}`,
    },
    openGraph: {
      title: location.heroTitle,
      description: location.heroDescription,
      url: `https://saininexus.com/locations/${location.slug}`,
      siteName: "Saini Nexus",
      type: "website",
    },
  };
}

export default async function LocationDetailPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = LOCATIONS[slug];

  if (!location) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-10 sm:space-y-14">
      <JsonLd data={getLocalBusinessSchema()} />
      {location.faq && location.faq.length > 0 && (
        <JsonLd data={getFAQSchema(location.faq)} />
      )}

      <Breadcrumbs
        items={[
          { label: "Locations", href: "/locations" },
          { label: location.name },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-sm">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            {location.heroTagline}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            {location.heroTitle}
          </h1>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
            {location.heroDescription}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="neo-btn-blue w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-xs uppercase tracking-wider"
            >
              <span>Request Regional Strategy Call</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/about/dev-raj-saini"
              className="neo-btn-white w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-xs uppercase tracking-wider"
            >
              <span>Meet Founder Dev Raj Saini</span>
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Market Context */}
      <section className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 space-y-4 shadow-xs">
        <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">Market Context &amp; Economic Reality</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">The Commercial Landscape in {location.name}</h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl font-normal">{location.marketContext}</p>
      </section>

      {/* Key Sectors in this Region */}
      <section className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">Sector Specialization</span>
          <h2 className="text-3xl font-bold text-slate-900">High-Growth Industries We Serve in {location.name}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {location.keySectors.map((sector, i) => (
            <div key={i} className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs hover:border-blue-300 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-mono text-xs font-bold">
                  0{i + 1}
                </span>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">Enterprise Track</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">{sector.name}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{sector.description}</p>

              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                <div>
                  <span className="text-blue-600 font-mono text-[11px] block uppercase font-bold">Target Decision-Makers:</span>
                  <p className="text-slate-700 mt-0.5 font-medium">{sector.targetBuyers}</p>
                </div>
                <div>
                  <span className="text-slate-900 font-mono text-[11px] block uppercase font-bold">Recommended Strategy:</span>
                  <p className="text-slate-700 mt-0.5 font-medium">{sector.recommendedApproach}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Playbook */}
      <section className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-8 sm:p-10 space-y-8 shadow-xs">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">Local-to-Global Growth Playbook</span>
          <h2 className="text-3xl font-bold text-slate-900">How We Scale {location.name} Enterprises</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {location.strategicPlaybook.map((st, i) => (
            <div key={i} className="bg-white border border-slate-200/80 p-6 rounded-2xl space-y-3 shadow-xs hover:border-blue-300 transition-colors">
              <span className="text-2xl font-mono font-bold text-blue-600">{st.step}</span>
              <h3 className="text-lg font-bold text-slate-900">{st.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">{st.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Local Presence & Credentials */}
      <section className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">Local Entity &amp; Presence</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Why Regional Leaders Partner with Saini Nexus</h2>
          
          <div className="space-y-3 pt-2">
            {location.whySainiNexus.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block mb-0.5 font-bold text-base">{item.title}</strong>
                  <span className="text-slate-600">{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 space-y-3 font-mono text-xs text-slate-800 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/70 text-slate-900">
            <span className="font-bold">REGIONAL ENTITY DATA</span>
            <span className="text-blue-600 font-bold">AUTHENTICATED</span>
          </div>
          <div className="space-y-2 text-slate-700 font-normal">
            <p><span className="text-slate-900 font-bold">HQ:</span> {location.localPresence.headquarters}</p>
            <p><span className="text-slate-900 font-bold">ESTABLISHED:</span> {location.localPresence.founded}</p>
            <p><span className="text-slate-900 font-bold">SPECIALIZATION:</span> {location.localPresence.specialization}</p>
            <p><span className="text-slate-900 font-bold">COVERAGE:</span> {location.localPresence.reach}</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">Location FAQs</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {location.faq.map((item, i) => (
            <div key={i} className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-2 shadow-xs">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{item.question}</span>
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed pl-6 font-normal">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-slate-900">Scale your {location.name} enterprise pipeline.</h3>
          <p className="text-slate-600 text-sm font-normal">Let&apos;s map your target accounts and build your custom acquisition system.</p>
        </div>
        <Link
          href="/contact"
          className="neo-btn-blue inline-flex items-center px-8 py-4 rounded-full text-xs uppercase tracking-wider shrink-0"
        >
          <span>Request a Strategy Conversation</span>
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
