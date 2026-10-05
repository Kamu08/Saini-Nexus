import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  BookOpen, 
  Target,
  BarChart3,
  FileCheck
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Saini Nexus Credentials | LinkedIn Marketing Expertise",
  description: "Certified expertise across LinkedIn marketing, advertising, demand generation, and measurement at Saini Nexus in Jaipur, Rajasthan.",
  alternates: {
    canonical: "https://saininexus.com/about/credentials",
  },
};

export default function CredentialsPage() {
  const credentialsSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Saini Nexus Credentials & Expertise",
    description: "Certified expertise across LinkedIn marketing, advertising and measurement at Saini Nexus.",
    url: "https://saininexus.com/about/credentials",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 sm:space-y-16">
      <JsonLd data={credentialsSchema} />

      <Breadcrumbs
        items={[
          { label: "About", href: "/about" },
          { label: "Credentials & Expertise" },
        ]}
      />

      {/* Hero */}
      <section className="bg-white border-2 border-black rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-[6px_6px_0px_#000000]">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Competence & Certifications
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-black leading-tight">
            Credentials & <span className="bubble-highlight-blue">Expertise</span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-700 leading-relaxed font-medium">
            Certified expertise across LinkedIn marketing, advertising and measurement. We believe in proof-backed authority and verified execution rigor across every client engagement.
          </p>
        </div>
      </section>

      {/* Credentials Grid Across Key Disciplines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* 1. LinkedIn Marketing */}
        <div className="bg-white border-2 border-black rounded-3xl p-8 space-y-4 shadow-[4px_4px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] transition-all">
          <div className="w-10 h-10 rounded-xl bg-[#60A5FA] text-black border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000000]">
            <Award className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#2563EB] font-bold uppercase">CERTIFIED EXPERTISE</span>
            <h2 className="text-2xl font-serif font-bold text-black">LinkedIn Marketing Strategy</h2>
          </div>
          <p className="text-sm text-zinc-700 leading-relaxed font-normal">
            Certified through LinkedIn Marketing Labs for organic strategy, company page orchestration, executive thought leadership, and audience building frameworks.
          </p>
          <ul className="space-y-2 text-xs text-zinc-800 pt-3 border-t-2 border-black/10 font-medium">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Full-Funnel Organic & Paid Integration</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Executive Profile & Thought Leadership Positioning</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Target Account & Buyer Committee Engagement</span>
            </li>
          </ul>
        </div>

        {/* 2. LinkedIn Advertising */}
        <div className="bg-white border-2 border-black rounded-3xl p-8 space-y-4 shadow-[4px_4px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] transition-all">
          <div className="w-10 h-10 rounded-xl bg-[#60A5FA] text-black border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000000]">
            <Target className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#2563EB] font-bold uppercase">PAID MEDIA MASTERY</span>
            <h2 className="text-2xl font-serif font-bold text-black">LinkedIn Advertising</h2>
          </div>
          <p className="text-sm text-zinc-700 leading-relaxed font-normal">
            Hands-on campaign architecture and certified execution across LinkedIn Campaign Manager, Thought Leader Ads, Matched Audiences, and native Lead Gen Forms.
          </p>
          <ul className="space-y-2 text-xs text-zinc-800 pt-3 border-t-2 border-black/10 font-medium">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Thought Leader Ads & Single Image Ads Engineering</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Precision ABM & Matched Audience Layering</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Bid Management & Cost-Per-Qualified-Lead Control</span>
            </li>
          </ul>
        </div>

        {/* 3. Content & Creative */}
        <div className="bg-white border-2 border-black rounded-3xl p-8 space-y-4 shadow-[4px_4px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] transition-all">
          <div className="w-10 h-10 rounded-xl bg-[#60A5FA] text-black border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000000]">
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#2563EB] font-bold uppercase">EDITORIAL CRAFT</span>
            <h2 className="text-2xl font-serif font-bold text-black">Content & Creative Design</h2>
          </div>
          <p className="text-sm text-zinc-700 leading-relaxed font-normal">
            Certified through LinkedIn Marketing Labs for high-impact creative development, visual document carousels, and contrarian executive perspectives.
          </p>
          <ul className="space-y-2 text-xs text-zinc-800 pt-3 border-t-2 border-black/10 font-medium">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Document Ad & Native PDF Carousel Formatting</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Executive POV Ghostwriting & Storytelling</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Ungated High-Value Intellectual Property Assets</span>
            </li>
          </ul>
        </div>

        {/* 4. Marketing Measurement */}
        <div className="bg-white border-2 border-black rounded-3xl p-8 space-y-4 shadow-[4px_4px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000000] transition-all">
          <div className="w-10 h-10 rounded-xl bg-[#60A5FA] text-black border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000000]">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#2563EB] font-bold uppercase">ANALYTICS & ATTRIBUTION</span>
            <h2 className="text-2xl font-serif font-bold text-black">Marketing Measurement</h2>
          </div>
          <p className="text-sm text-zinc-700 leading-relaxed font-normal">
            Certified through LinkedIn Marketing Labs for conversion tracking, offline conversion API integration, pipeline attribution, and sales velocity metrics.
          </p>
          <ul className="space-y-2 text-xs text-zinc-800 pt-3 border-t-2 border-black/10 font-medium">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Insight Tag & Server-Side Webhook Instrumentation</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Closed-Loop Pipeline & SQL Attribution</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Customer Acquisition Cost (CAC) Efficiency Audits</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Editorial, Media & Professional Experience */}
      <section className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 text-black shadow-[6px_6px_0px_#000000] space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold">
            Track Record & Professional Experience
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-black">
            Editorial, Media & Hands-On Practice
          </h2>
          <p className="text-zinc-700 text-sm font-medium">
            Our credentials stem from hundreds of live B2B campaigns, empirical testing, and ongoing practitioner publications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          <div className="bg-[#FAF7EF] border-2 border-black rounded-2xl p-6 space-y-2 shadow-[3px_3px_0px_#000000]">
            <div className="text-xs font-mono text-[#2563EB] uppercase font-bold">DISCIPLINE</div>
            <h3 className="text-lg font-serif font-bold text-black">Practitioner Field Notes</h3>
            <p className="text-xs text-zinc-700 font-normal">Regularly published empirical analysis on LinkedIn algorithms, creative dynamics, and B2B buying behavior.</p>
          </div>

          <div className="bg-[#FAF7EF] border-2 border-black rounded-2xl p-6 space-y-2 shadow-[3px_3px_0px_#000000]">
            <div className="text-xs font-mono text-[#2563EB] uppercase font-bold">FOUNDER AUTHORITY</div>
            <h3 className="text-lg font-serif font-bold text-black">Dev Raj Saini</h3>
            <p className="text-xs text-zinc-700 font-normal">Leading B2B acquisition strategy across Saini Nexus and executive positioning at Saini Prime.</p>
          </div>

          <div className="bg-[#FAF7EF] border-2 border-black rounded-2xl p-6 space-y-2 shadow-[3px_3px_0px_#000000]">
            <div className="text-xs font-mono text-[#2563EB] uppercase font-bold">GEOGRAPHIC REACH</div>
            <h3 className="text-lg font-serif font-bold text-black">India & International</h3>
            <p className="text-xs text-zinc-700 font-normal">Headquartered in Jaipur, Rajasthan, serving enterprise clients across India, North America, UK, and Europe.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FAF7EF] border-2 border-black rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4 shadow-[4px_4px_0px_#000000]">
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black">
          Ready to review your acquisition model?
        </h3>
        <p className="text-zinc-700 text-sm max-w-xl mx-auto font-medium">
          Schedule a direct strategy conversation with our team to evaluate your current LinkedIn and demand generation setup.
        </p>
        <div className="pt-2">
          <Link
            href="/book"
            className="neo-btn-blue text-xs tracking-wider"
          >
            <span>Book a Strategy Conversation</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
