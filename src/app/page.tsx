import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowUpRight, 
  ArrowRight, 
  MapPin, 
  ShieldCheck, 
  Sparkles,
  Briefcase,
  BookOpen,
  Target,
  Award
} from "lucide-react";
import { ModernHero } from "@/components/ModernHero";
import { InteractiveServicesHub } from "@/components/InteractiveServicesHub";
import { InteractiveSolutionsGrid } from "@/components/InteractiveSolutionsGrid";
import { NexusGrowthMap } from "@/components/NexusGrowthMap";
import { ContactForm } from "@/components/ContactForm";
import { INDUSTRIES } from "@/data/industries";
import { INSIGHTS } from "@/data/insights";
import { CASE_STUDIES } from "@/data/caseStudies";

export default function HomePage() {
  const industryList = Object.values(INDUSTRIES);
  const featuredInsights = INSIGHTS.slice(0, 3);
  const featuredCaseStudies = CASE_STUDIES.slice(0, 3);

  return (
    <div className="space-y-20 sm:space-y-28 pb-20 overflow-hidden bg-mesh-glow">
      
      {/* HERO */}
      <ModernHero />

      {/* 01. TRUST & VERIFIED CREDENTIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-black rounded-3xl p-6 sm:p-10 shadow-[4px_4px_0px_#000000] space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b-2 border-black/10">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                Verified Competence
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-black tracking-tight">
                Built on Strategy, Proof &amp; Verified Rigor
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-zinc-600 max-w-md font-medium">
              Certified expertise across LinkedIn marketing, advertising and measurement · Jaipur, Rajasthan · Serving India &amp; Global B2B Markets
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { type: "Certification", title: "LinkedIn Marketing Strategy", issuer: "LinkedIn Marketing Labs", icon: "🎯" },
              { type: "Certification", title: "Content & Creative Design", issuer: "LinkedIn Marketing Labs", icon: "✏️" },
              { type: "Certification", title: "Marketing Measurement", issuer: "LinkedIn Marketing Labs", icon: "📊" },
              { type: "Flagship Practice", title: "LinkedIn Advertising", issuer: "Thought Leader & Document Ads", icon: "🚀" },
            ].map((cert, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#EFF6FF] border-2 border-black shadow-[2px_2px_0px_#000000] space-y-2 relative overflow-hidden">
                <div className="absolute top-3 right-3 text-xl select-none opacity-50">{cert.icon}</div>
                <span className="text-[10px] font-mono text-[#2563EB] font-bold uppercase tracking-wider block">{cert.type}</span>
                <h3 className="text-sm font-serif font-bold text-black pr-7 leading-snug">{cert.title}</h3>
                <div className="flex items-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3 h-3 text-[#2563EB] shrink-0" />
                  <p className="text-[11px] text-zinc-600 font-mono">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02. SERVICES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveServicesHub />
      </div>

      {/* 03. GROWTH FRAMEWORK */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NexusGrowthMap />
      </div>

      {/* 04. SOLUTIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveSolutionsGrid />
      </div>

      {/* 05. FEATURED INDUSTRIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider mb-3 font-bold shadow-[2px_2px_0px_#000000]">
              <Briefcase className="w-3.5 h-3.5" />
              Vertical Architectures
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-black tracking-tight">
              B2B Growth Across Industries
            </h2>
            <p className="text-zinc-700 text-sm mt-2 max-w-xl font-medium leading-relaxed">
              Acquisition blueprints tailored to the buying committee dynamics and sales cycle of your industry.
            </p>
          </div>
          <Link href="/industries" className="neo-btn-white w-fit shrink-0">
            <span>Explore All Industries</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industryList.slice(0, 6).map((ind, idx) => {
            const icons = ["💻", "🏭", "🏥", "⚖️", "🏗️", "💰"];
            return (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="bg-white rounded-3xl p-6 flex flex-col justify-between group border-2 border-black shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] transition-all duration-200"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-xs font-mono text-[#2563EB] font-bold uppercase tracking-wider">
                      {ind.tagline}
                    </span>
                    <span className="text-2xl leading-none shrink-0">{icons[idx] ?? "🔹"}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors tracking-tight">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">
                    {ind.heroSubheadline}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t-2 border-black/10 flex items-center justify-between">
                  <span className="text-xs font-mono font-extrabold text-black bg-[#EFF6FF] px-2.5 py-1 rounded-full border border-black/20">
                    {ind.featuredResult.metric}
                  </span>
                  <span className="text-xs font-mono text-black group-hover:text-[#2563EB] font-bold flex items-center gap-1 transition-colors">
                    <span>View Playbook</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Adaptability Note */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF7EF] border-2 border-black shadow-[3px_3px_0px_#000000] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-zinc-800 font-medium">
            <strong className="text-black font-bold">Don&apos;t see your industry?</strong> Our B2B growth frameworks can be adapted to different markets, business models and buying environments.
          </p>
          <Link href="/contact" className="neo-btn-blue text-xs uppercase tracking-wider shrink-0 w-full sm:w-auto text-center">
            <span>Talk to Us</span>
            <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 06. CASE STUDIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider mb-3 font-bold shadow-[2px_2px_0px_#000000]">
              <Target className="w-3.5 h-3.5" />
              Strategy. Execution. Results.
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-black tracking-tight">
              Real Work. Real Campaigns. Real Learnings.
            </h2>
            <p className="text-zinc-700 text-sm mt-2 max-w-xl font-medium leading-relaxed">
              We separate campaign metrics from business outcomes to deliver senior, evidence-backed proof.
            </p>
          </div>
          <Link href="/case-studies" className="neo-btn-white w-fit shrink-0">
            <span>View All Case Studies</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredCaseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="bg-white rounded-3xl p-6 flex flex-col justify-between group border-2 border-black shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] transition-all duration-200"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-[#EFF6FF] border-2 border-black font-bold uppercase text-[10px] font-mono">
                    {study.industry}
                  </span>
                  <span className="text-[10px] text-zinc-500 font-mono font-semibold bg-zinc-100 px-2 py-0.5 rounded-full">
                    {study.timeline}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors tracking-tight leading-snug">
                  {study.clientName}
                </h3>

                <p className="text-xs text-zinc-600 line-clamp-3 leading-relaxed">
                  {study.coreChallenge}
                </p>

                {/* Stats strip */}
                <div className="flex gap-3 pt-1">
                  <div className="flex-1 bg-[#EFF6FF] rounded-xl px-3 py-2.5 border border-black/10">
                    <span className="text-[9px] text-zinc-500 uppercase font-mono font-bold block mb-0.5">Business Outcome</span>
                    <strong className="text-[#2563EB] font-extrabold text-base font-mono block leading-none">
                      {study.businessOutcomes[0]?.metric}
                    </strong>
                    <span className="text-[9px] text-zinc-600 block mt-0.5 line-clamp-1 font-mono">
                      {study.businessOutcomes[0]?.label}
                    </span>
                  </div>
                  <div className="flex-1 bg-[#FAF7EF] rounded-xl px-3 py-2.5 border border-black/10">
                    <span className="text-[9px] text-zinc-500 uppercase font-mono font-bold block mb-0.5">Ad Efficiency</span>
                    <strong className="text-black font-extrabold text-base font-mono block leading-none">
                      {study.campaignMetrics[0]?.metric}
                    </strong>
                    <span className="text-[9px] text-zinc-600 block mt-0.5 line-clamp-1 font-mono">
                      {study.campaignMetrics[0]?.label}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t-2 border-black/10 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-zinc-700">Explore Teardown</span>
                <span className="inline-flex items-center gap-1 text-xs font-mono font-bold transition-colors bg-[#60A5FA] group-hover:bg-[#93C5FD] px-2.5 py-1 rounded-full border-2 border-black">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 07. FOUNDER AUTHORITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-black rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-14 text-black shadow-[4px_4px_0px_#000000] sm:shadow-[6px_6px_0px_#000000] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative overflow-hidden">
          
          {/* Subtle dot grid accent */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(#000 1px, transparent 0)", backgroundSize: "24px 24px" }}
          />

          <div className="lg:col-span-7 space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
              <Sparkles className="w-3.5 h-3.5" />
              Led by Dev Raj Saini
            </div>

            <div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-black leading-tight tracking-tight">
                Dev Raj Saini
              </h2>
              <p className="text-sm font-mono text-[#2563EB] font-bold mt-1.5 uppercase tracking-wider">
                Founder &amp; B2B Growth Strategist
              </p>
            </div>

            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed font-medium">
              Marketing founder and strategist focused on the intersection of B2B marketing, LinkedIn, thought leadership, personal branding and professional authority. Founder of <strong className="text-black font-bold">Saini Nexus</strong> (B2B Demand &amp; Pipeline Growth) and <strong className="text-black font-bold">Saini Prime</strong> (Executive Authority &amp; Positioning). Based in Jaipur, Rajasthan, serving India &amp; global B2B markets.
            </p>

            <div className="flex flex-wrap gap-2.5 text-xs font-mono text-black font-bold pt-1">
              <span className="inline-flex items-center gap-1.5 bg-[#EFF6FF] px-3.5 py-1.5 rounded-full border-2 border-black shadow-[2px_2px_0px_#000000]">
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0" />
                Jaipur, Rajasthan, India
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#EFF6FF] px-3.5 py-1.5 rounded-full border-2 border-black shadow-[2px_2px_0px_#000000]">
                <ShieldCheck className="w-4 h-4 text-[#2563EB] shrink-0" />
                LinkedIn Marketing Labs Certified
              </span>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link href="/about/dev-raj-saini" className="neo-btn-blue w-full sm:w-auto text-center">
                <span>Meet the Founder</span>
                <ArrowRight className="ml-2 w-4 h-4 shrink-0" />
              </Link>
              <Link href="/about" className="neo-btn-white w-full sm:w-auto text-center">
                <span>About Saini Nexus</span>
                <ArrowUpRight className="ml-2 w-4 h-4 shrink-0" />
              </Link>
            </div>
          </div>

          {/* Founder photo with offset accent block */}
          <div className="lg:col-span-5 flex justify-center relative z-10">
            <div className="relative pb-3 pr-3">
              {/* Offset blue decorative block */}
              <div className="absolute bottom-0 right-0 w-full h-full rounded-3xl bg-[#60A5FA] border-2 border-black" />
              <div className="relative p-2.5 rounded-3xl bg-[#FAF7EF] border-2 border-black shadow-[4px_4px_0px_#000000]">
                <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-black bg-zinc-100">
                  <Image
                    src="/team/dev-raj-saini.jpg"
                    alt="Dev Raj Saini — Founder, Saini Nexus"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 08. INSIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider mb-3 font-bold shadow-[2px_2px_0px_#000000]">
              <BookOpen className="w-3.5 h-3.5" />
              B2B Growth Intelligence
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-black tracking-tight">
              Saini Nexus Field Notes &amp; Insights
            </h2>
            <p className="text-zinc-700 text-sm mt-2 max-w-xl font-medium leading-relaxed">
              Empirical practitioner observations, algorithm teardowns, and B2B growth intelligence.
            </p>
          </div>
          <Link href="/insights" className="neo-btn-white w-fit shrink-0">
            <span>Explore All Insights</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredInsights.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="bg-white rounded-3xl p-6 flex flex-col justify-between group border-2 border-black shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] transition-all duration-200"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold inline-block border-2 border-black shadow-[1.5px_1.5px_0px_#000000] ${
                    article.isFieldNote
                      ? "bg-[#60A5FA] text-black"
                      : "bg-[#EFF6FF] text-[#2563EB]"
                  }`}>
                    {article.category}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 font-semibold bg-zinc-100 px-2 py-0.5 rounded-full shrink-0">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors leading-snug tracking-tight">
                  {article.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t-2 border-black/10 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-zinc-700">Read Note</span>
                <span className="inline-flex items-center gap-1 text-xs font-mono font-bold transition-colors bg-[#EFF6FF] group-hover:bg-[#93C5FD] px-2.5 py-1 rounded-full border-2 border-black">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 09. CONTACT FORM */}
      <div id="contact-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </div>

    </div>
  );
}
