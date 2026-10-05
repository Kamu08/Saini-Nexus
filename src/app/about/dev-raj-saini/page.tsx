import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { 
  Linkedin, 
  ArrowUpRight, 
  ArrowRight, 
  Award, 
  CheckCircle2, 
  MapPin, 
  BookOpen, 
  Briefcase, 
  ShieldCheck, 
  Sparkles,
  Layers,
  Building2,
  FileText
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { INSIGHTS } from "@/data/insights";

export const metadata: Metadata = {
  title: "Dev Raj Saini | Founder, Saini Nexus | B2B Marketing Strategist",
  description: "Learn about Dev Raj Saini, founder of Saini Nexus, focused on B2B marketing, LinkedIn growth, thought leadership and professional authority.",
  alternates: {
    canonical: "https://saininexus.com/about/dev-raj-saini",
  },
};

export default function DevRajSainiPage() {
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Dev Raj Saini",
      jobTitle: "Founder & Lead B2B Growth Strategist",
      worksFor: [
        {
          "@type": "Organization",
          name: "Saini Nexus",
          url: "https://saininexus.com",
        },
        {
          "@type": "Organization",
          name: "Saini Prime",
          url: "https://sainiprime.com",
        }
      ],
      description: "Founder of Saini Nexus and Saini Prime, specializing in B2B LinkedIn Marketing, Full-Funnel LinkedIn Ads, Executive Thought Leadership, and Demand Generation architecture for mid-market and enterprise companies.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        addressCountry: "India",
      },
      sameAs: [
        "https://www.linkedin.com/in/devrajsaini",
        "https://www.linkedin.com/company/saini-nexus",
      ],
      knowsAbout: [
        "B2B Demand Generation",
        "LinkedIn Advertising Strategy",
        "Thought Leader Ads",
        "Account-Based Marketing (ABM)",
        "Founder-Led Marketing",
        "Executive Personal Branding",
        "B2B Sales Pipeline Acceleration",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "LinkedIn Marketing Labs Certified",
          credentialCategory: "Certification",
        },
      ],
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 sm:space-y-16">
      <JsonLd data={profilePageSchema} />

      <Breadcrumbs
        items={[
          { label: "About", href: "/about" },
          { label: "Dev Raj Saini (Founder)" },
        ]}
      />

      {/* Profile Hero */}
      <section className="bg-white border-2 border-black rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-[6px_6px_0px_#000000]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
              <Sparkles className="w-3.5 h-3.5" />
              Founder, Saini Nexus | B2B Marketing & LinkedIn Growth Strategist
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-black leading-tight">
              Dev Raj Saini
            </h1>

            <p className="text-base sm:text-lg text-zinc-700 leading-relaxed font-medium">
              Founder of <strong className="text-black font-bold">Saini Nexus</strong> and <strong className="text-black font-bold">Saini Prime</strong>. B2B marketing architect helping high-growth SaaS, enterprise IT, consulting, and industrial exporters build integrated demand engines and scale sales pipeline across India and global markets.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-black font-bold">
              <span className="flex items-center gap-1.5 bg-[#FAF7EF] px-3 py-1.5 rounded-full border-2 border-black shadow-[1.5px_1.5px_0px_#000000]">
                <MapPin className="w-4 h-4 text-[#2563EB]" />
                Jaipur, Rajasthan, India
              </span>
              <span className="flex items-center gap-1.5 bg-[#FAF7EF] px-3 py-1.5 rounded-full border-2 border-black shadow-[1.5px_1.5px_0px_#000000]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                LinkedIn Marketing Labs Certified
              </span>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/book"
                className="neo-btn-blue w-fit shrink-0"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="ml-2 w-4 h-4 shrink-0" />
              </Link>
              <a
                href="https://www.linkedin.com/in/devrajsaini"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn-white w-fit shrink-0 inline-flex items-center"
              >
                <Linkedin className="w-4 h-4 mr-2 text-[#2563EB] shrink-0" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="ml-1 w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative p-2 rounded-3xl bg-[#FAF7EF] border-2 border-black shadow-[4px_4px_0px_#000000]">
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border-2 border-black bg-zinc-100 aspect-square">
                <Image
                  src="/team/dev-raj-saini.jpg"
                  alt="Dev Raj Saini — Founder of Saini Nexus"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Dual Venture Ecosystem */}
      <section className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 text-black shadow-[6px_6px_0px_#000000] space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
            <Layers className="w-3.5 h-3.5" />
            Dual-Venture Leadership
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-black">The Saini Commercial Ecosystem</h2>
          <p className="text-zinc-700 text-sm max-w-2xl font-medium">
            Dev Raj Saini spearheads two dedicated organizations engineered to solve distinct enterprise growth challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="bg-[#FAF7EF] border-2 border-black rounded-2xl p-6 space-y-3 shadow-[3px_3px_0px_#000000]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#2563EB] font-bold uppercase">Commercial B2B Acquisition</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#60A5FA] border border-black text-black text-[10px] font-mono font-bold">FOUNDER</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-black">Saini Nexus</h3>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
              Engineers full-funnel B2B demand generation, LinkedIn Ads architecture, account-based marketing, and qualified pipeline acceleration for SaaS, IT services, and manufacturing companies.
            </p>
          </div>

          <div className="bg-[#FAF7EF] border-2 border-black rounded-2xl p-6 space-y-3 shadow-[3px_3px_0px_#000000]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#2563EB] font-bold uppercase">Executive Authority & Thought Leadership</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white border border-black text-black text-[10px] font-mono font-bold">FOUNDER</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-black">Saini Prime</h3>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
              Provides premium executive personal branding, founder ghostwriting, narrative development, and high-impact digital presence for C-suite leaders and visionary founders.
            </p>
          </div>
        </div>
      </section>

      {/* Biography & Philosophy */}
      <section className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 shadow-[6px_6px_0px_#000000] space-y-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
            <BookOpen className="w-3.5 h-3.5" />
            Biography & Methodology
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-black">
            &ldquo;B2B Marketing is an Empirical Discipline, Not a Vanity Contest.&rdquo;
          </h2>
          
          <div className="space-y-4 text-zinc-700 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              Having observed hundreds of B2B companies burn substantial marketing budgets on shallow vanity metrics, Dev Raj Saini established Saini Nexus to introduce rigor, precision, and verifiable pipeline accountability to B2B marketing.
            </p>
            <p>
              His core philosophy centers on the reality that 95% of target accounts are not in-market at any given moment. Rather than running transactional &ldquo;Book a Demo&rdquo; spam, his framework educates out-of-market buying committees through high-craft ungated perspectives, founder authority, and tight account-based targeting on LinkedIn.
            </p>
            <p>
              Based in Jaipur, Rajasthan, Dev Raj works closely with enterprise leadership teams across India, North America, the UK, and Europe to design and execute scalable acquisition systems.
            </p>
          </div>
        </div>

        {/* Verified Credentials Grid */}
        <div className="pt-6 border-t-2 border-black/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-4 rounded-2xl bg-[#FAF7EF] border-2 border-black space-y-1 shadow-[3px_3px_0px_#000000]">
            <div className="text-xs font-mono uppercase text-[#2563EB] font-bold">CREDENTIAL</div>
            <div className="text-sm font-serif font-bold text-black">LinkedIn Marketing Labs</div>
            <div className="text-xs text-zinc-600 font-medium">Certified B2B Campaign Strategist</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7EF] border-2 border-black space-y-1 shadow-[3px_3px_0px_#000000]">
            <div className="text-xs font-mono uppercase text-[#2563EB] font-bold">SPECIALTY</div>
            <div className="text-sm font-serif font-bold text-black">Thought Leader Ads</div>
            <div className="text-xs text-zinc-600 font-medium">Executive Profile Amplification</div>
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF7EF] border-2 border-black space-y-1 shadow-[3px_3px_0px_#000000]">
            <div className="text-xs font-mono uppercase text-[#2563EB] font-bold">GEOGRAPHY</div>
            <div className="text-sm font-serif font-bold text-black">Jaipur Headquarters</div>
            <div className="text-xs text-zinc-600 font-medium">Serving India & International B2B</div>
          </div>
        </div>
      </section>

      {/* Published Thought Leadership & Field Notes */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
              <FileText className="w-3.5 h-3.5" />
              Published Writing
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-black">Articles & Field Notes by Dev Raj Saini</h2>
          </div>
          <Link
            href="/insights"
            className="neo-btn-white w-fit shrink-0"
          >
            <span>View All Insights</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INSIGHTS.slice(0, 2).map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[4px_4px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] transition-all group"
            >
              <div className="space-y-3">
                <span className="px-2.5 py-1 rounded-full bg-[#FAF7EF] border-2 border-black text-black text-xs font-mono font-bold inline-block shadow-[1.5px_1.5px_0px_#000000]">
                  {article.category}
                </span>
                <h3 className="text-lg font-serif font-bold text-black group-hover:text-[#2563EB] transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-zinc-700 leading-relaxed line-clamp-2 font-normal">
                  {article.summary}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t-2 border-black/10 flex items-center justify-between text-xs font-mono text-zinc-600">
                <span className="font-semibold">{article.readTime}</span>
                <span className="text-black group-hover:text-[#2563EB] font-bold flex items-center gap-1 transition-colors">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Book Strategy Call CTA */}
      <section className="bg-[#FAF7EF] border-2 border-black rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[4px_4px_0px_#000000]">
        <div className="space-y-2">
          <h3 className="text-2xl font-serif font-bold text-black">Schedule a 1-on-1 Strategy Call</h3>
          <p className="text-zinc-700 text-sm font-medium">Direct, candid strategic discussion with Dev Raj Saini regarding your commercial acquisition model.</p>
        </div>
        <Link
          href="/book"
          className="neo-btn-blue w-fit shrink-0"
        >
          <span>Book Strategy Call</span>
          <ArrowRight className="ml-2 w-4 h-4 shrink-0" />
        </Link>
      </section>
    </div>
  );
}
