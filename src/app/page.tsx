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
      
      {/* HERO: B2B Growth, Built Around How Buyers Actually Buy. */}
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
            <div className="p-4 rounded-2xl bg-[#FAF7EF] border-2 border-black shadow-[2px_2px_0px_#000000] space-y-1">
              <span className="text-[10px] font-mono text-[#2563EB] font-bold uppercase tracking-wider block">Certification</span>
              <h3 className="text-sm font-serif font-bold text-black">LinkedIn Marketing Strategy</h3>
              <p className="text-[11px] text-zinc-600 font-mono">LinkedIn Marketing Labs</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7EF] border-2 border-black shadow-[2px_2px_0px_#000000] space-y-1">
              <span className="text-[10px] font-mono text-[#2563EB] font-bold uppercase tracking-wider block">Certification</span>
              <h3 className="text-sm font-serif font-bold text-black">Content &amp; Creative Design</h3>
              <p className="text-[11px] text-zinc-600 font-mono">LinkedIn Marketing Labs</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7EF] border-2 border-black shadow-[2px_2px_0px_#000000] space-y-1">
              <span className="text-[10px] font-mono text-[#2563EB] font-bold uppercase tracking-wider block">Certification</span>
              <h3 className="text-sm font-serif font-bold text-black">Marketing Measurement</h3>
              <p className="text-[11px] text-zinc-600 font-mono">LinkedIn Marketing Labs</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7EF] border-2 border-black shadow-[2px_2px_0px_#000000] space-y-1">
              <span className="text-[10px] font-mono text-[#2563EB] font-bold uppercase tracking-wider block">Flagship Practice</span>
              <h3 className="text-sm font-serif font-bold text-black">LinkedIn Advertising</h3>
              <p className="text-[11px] text-zinc-600 font-mono">Thought Leader &amp; Document Ads</p>
            </div>
          </div>
        </div>
      </section>

      {/* 02. WHAT WE DO: THE 8 SERVICES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveServicesHub />
      </div>

      {/* 03. THE SAINI NEXUS B2B GROWTH FRAMEWORK */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NexusGrowthMap />
      </div>

      {/* 04. SOLUTIONS: GROWTH CHALLENGES WE SOLVE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveSolutionsGrid />
      </div>

      {/* 05. FEATURED INDUSTRIES: B2B GROWTH ACROSS INDUSTRIES */}
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
            <p className="text-zinc-700 text-sm mt-1 max-w-xl font-medium">
              Acquisition blueprints tailored to the buying committee dynamics and sales cycle of your industry.
            </p>
          </div>
          <Link
            href="/industries"
            className="neo-btn-white w-fit shrink-0"
          >
            <span>Explore All Industries</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryList.slice(0, 6).map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between group border-2 border-black shadow-[4px_4px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] transition-all"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#2563EB] font-bold uppercase tracking-wider block">
                  {ind.tagline}
                </span>
                <h3 className="text-xl font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors tracking-tight">
                  {ind.name}
                </h3>
                <p className="text-xs text-zinc-700 line-clamp-2 leading-relaxed font-normal">
                  {ind.heroSubheadline}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t-2 border-black/10 flex items-center justify-between text-xs font-mono">
                <span className="text-black font-extrabold">
                  {ind.featuredResult.metric} <span className="font-normal text-zinc-600">benchmark</span>
                </span>
                <span className="text-black group-hover:text-[#2563EB] font-bold flex items-center gap-1 transition-colors">
                  <span>View Playbook</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Adaptability Note */}
        <div className="p-6 rounded-2xl bg-[#FAF7EF] border-2 border-black shadow-[3px_3px_0px_#000000] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-zinc-800 font-medium">
            <strong className="text-black font-bold">Don&apos;t see your industry?</strong> Our B2B growth frameworks can be adapted to different markets, business models and buying environments.
          </p>
          <Link
            href="/contact"
            className="neo-btn-blue text-xs uppercase tracking-wider shrink-0"
          >
            <span>Talk to Us</span>
            <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 06. CASE STUDIES: STRATEGY. EXECUTION. MEASURABLE RESULTS. */}
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
            <p className="text-zinc-700 text-sm mt-1 max-w-xl font-medium">
              We separate campaign metrics from business outcomes to deliver senior, evidence-backed proof.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="neo-btn-white w-fit shrink-0"
          >
            <span>View All Case Studies</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCaseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between group border-2 border-black shadow-[4px_4px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-full bg-[#EFF6FF] border border-black font-bold uppercase text-[10px]">
                    {study.industry}
                  </span>
                  <span className="text-zinc-500 font-semibold">{study.timeline}</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors tracking-tight leading-snug">
                  {study.clientName}
                </h3>

                <p className="text-xs text-zinc-700 line-clamp-3 leading-relaxed font-normal">
                  {study.coreChallenge}
                </p>

                <div className="pt-3 border-t-2 border-black/10 grid grid-cols-2 gap-2 text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase block font-bold">Business Outcome</span>
                    <strong className="text-black font-extrabold text-sm text-[#2563EB]">
                      {study.businessOutcomes[0]?.metric}
                    </strong>
                    <span className="text-[10px] text-zinc-600 block line-clamp-1">{study.businessOutcomes[0]?.label}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase block font-bold">Ad Efficiency</span>
                    <strong className="text-black font-extrabold text-sm">
                      {study.campaignMetrics[0]?.metric}
                    </strong>
                    <span className="text-[10px] text-zinc-600 block line-clamp-1">{study.campaignMetrics[0]?.label}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t-2 border-black/10 flex items-center justify-between text-xs font-mono">
                <span className="font-semibold text-zinc-600">Explore Teardown</span>
                <span className="text-black group-hover:text-[#2563EB] font-bold flex items-center gap-1 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 07. FOUNDER AUTHORITY: LED BY DEV RAJ SAINI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-black rounded-3xl sm:rounded-[36px] p-8 sm:p-14 text-black shadow-[6px_6px_0px_#000000] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative overflow-hidden">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
              <Sparkles className="w-3.5 h-3.5" />
              Led by Dev Raj Saini
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-black leading-tight tracking-tight">
              Dev Raj Saini
            </h2>

            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed font-medium">
              Marketing founder and strategist focused on the intersection of B2B marketing, LinkedIn, thought leadership, personal branding and professional authority. Founder of <strong className="text-black font-bold">Saini Nexus</strong> (B2B Demand &amp; Pipeline Growth) and <strong className="text-black font-bold">Saini Prime</strong> (Executive Authority &amp; Positioning). Based in Jaipur, Rajasthan, serving India &amp; global B2B markets.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-black font-bold pt-1">
              <span className="flex items-center gap-1.5 bg-[#EFF6FF] px-3.5 py-1.5 rounded-full border-2 border-black shadow-[2px_2px_0px_#000000]">
                <MapPin className="w-4 h-4 text-[#2563EB]" />
                Jaipur, Rajasthan, India
              </span>
              <span className="flex items-center gap-1.5 bg-[#EFF6FF] px-3.5 py-1.5 rounded-full border-2 border-black shadow-[2px_2px_0px_#000000]">
                <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                LinkedIn Marketing Labs Certified
              </span>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/about/dev-raj-saini"
                className="neo-btn-blue w-fit shrink-0"
              >
                <span>Meet the Founder</span>
                <ArrowRight className="ml-2 w-4 h-4 shrink-0" />
              </Link>
              <Link
                href="/about"
                className="neo-btn-white w-fit shrink-0"
              >
                <span>About Saini Nexus</span>
                <ArrowUpRight className="ml-2 w-4 h-4 shrink-0" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative p-2 rounded-3xl bg-[#FAF7EF] border-2 border-black shadow-[4px_4px_0px_#000000]">
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border-2 border-black bg-zinc-100 aspect-square">
                <Image
                  src="/team/dev-raj-saini.jpg"
                  alt="Dev Raj Saini"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 08. INSIGHTS: B2B GROWTH INTELLIGENCE */}
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
            <p className="text-zinc-700 text-sm mt-1 max-w-xl font-medium">
              Empirical practitioner observations, algorithm teardowns, and B2B growth intelligence.
            </p>
          </div>
          <Link
            href="/insights"
            className="neo-btn-white w-fit shrink-0"
          >
            <span>Explore All Insights</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredInsights.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between group border-2 border-black shadow-[4px_4px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] transition-all"
            >
              <div className="space-y-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold inline-block border-2 border-black shadow-[1.5px_1.5px_0px_#000000] ${
                  article.isFieldNote 
                    ? "bg-[#60A5FA] text-black" 
                    : "bg-[#FAF7EF] text-black"
                }`}>
                  {article.category}
                </span>
                <h3 className="text-lg font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors leading-snug tracking-tight">
                  {article.title}
                </h3>
                <p className="text-xs text-zinc-700 leading-relaxed line-clamp-3 font-normal">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t-2 border-black/10 flex items-center justify-between text-xs font-mono text-zinc-600">
                <span className="font-semibold">{article.readTime}</span>
                <span className="text-black group-hover:text-[#2563EB] font-bold flex items-center gap-1 transition-colors">
                  <span>Read Note</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 09. FINAL COMMERCIAL INTAKE: HAVE A B2B GROWTH CHALLENGE? */}
      <div id="contact-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </div>

    </div>
  );
}
