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
      <section className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-sm">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Verified Competence & Certifications</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            Credentials &amp; <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Expertise</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
            Certified expertise across LinkedIn marketing, advertising and measurement. We believe in proof-backed authority and verified execution rigor across every client engagement.
          </p>
        </div>
      </section>

      {/* Credentials Grid Across Key Disciplines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* 1. LinkedIn Marketing Strategy */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-8 space-y-4 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider">CERTIFIED EXPERTISE</span>
              <h2 className="text-2xl font-bold text-slate-900">LinkedIn Marketing Strategy</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Certified through LinkedIn Marketing Labs for organic strategy, company page orchestration, executive thought leadership, and audience building frameworks.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pt-3 border-t border-slate-100 font-normal">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Full-Funnel Organic & Paid Integration</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Executive Profile & Thought Leadership Positioning</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Target Account & Buyer Committee Engagement</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <a
              href="https://training.marketing.linkedin.com/verify/tpdhuiyzq33a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-blue-300 shadow-xs transition-colors"
            >
              <span>Verify Official Credential</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-blue-600" />
            </a>
          </div>
        </div>

        {/* 2. LinkedIn Advertising Fundamentals */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-8 space-y-4 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider">PAID MEDIA MASTERY</span>
              <h2 className="text-2xl font-bold text-slate-900">LinkedIn Advertising Fundamentals</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Certified through LinkedIn Marketing Labs for campaign architecture, Campaign Manager optimization, Thought Leader Ads, and native Lead Gen Forms.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pt-3 border-t border-slate-100 font-normal">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Thought Leader Ads & Single Image Ads Engineering</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Precision ABM & Matched Audience Layering</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Bid Management & Cost-Per-Qualified-Lead Control</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <a
              href="https://training.marketing.linkedin.com/verify/vjbijavyd84i"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-blue-300 shadow-xs transition-colors"
            >
              <span>Verify Official Credential</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-blue-600" />
            </a>
          </div>
        </div>

        {/* 3. Content & Creative Design */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-8 space-y-4 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider">EDITORIAL CRAFT</span>
              <h2 className="text-2xl font-bold text-slate-900">Content & Creative Design</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Certified through LinkedIn Marketing Labs for high-impact creative development, visual document carousels, and contrarian executive perspectives.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pt-3 border-t border-slate-100 font-normal">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Document Ad & Native PDF Carousel Formatting</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Executive POV Ghostwriting & Storytelling</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Ungated High-Value Intellectual Property Assets</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <a
              href="https://training.marketing.linkedin.com/verify/cres5ub84zqj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-blue-300 shadow-xs transition-colors"
            >
              <span>Verify Official Credential</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-blue-600" />
            </a>
          </div>
        </div>

        {/* 4. Marketing Measurement */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-8 space-y-4 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider">ANALYTICS & ATTRIBUTION</span>
              <h2 className="text-2xl font-bold text-slate-900">Marketing Measurement</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Certified through LinkedIn Marketing Labs for conversion tracking, offline conversion API integration, pipeline attribution, and sales velocity metrics.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pt-3 border-t border-slate-100 font-normal">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Insight Tag & Server-Side Webhook Instrumentation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Closed-Loop Pipeline & SQL Attribution</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Customer Acquisition Cost (CAC) Efficiency Audits</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <a
              href="https://training.marketing.linkedin.com/verify/wxa2wfgp5pew"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-blue-300 shadow-xs transition-colors"
            >
              <span>Verify Official Credential</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-blue-600" />
            </a>
          </div>
        </div>

      </div>

      {/* Editorial, Media & Professional Experience */}
      <section className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-12 text-slate-900 shadow-xs space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase tracking-wider text-blue-600 font-semibold">
            Track Record & Professional Experience
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Editorial, Media & Hands-On Practice
          </h2>
          <p className="text-slate-600 text-sm font-normal">
            Our credentials stem from hundreds of live B2B campaigns, empirical testing, and ongoing practitioner publications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 space-y-2 shadow-xs">
            <div className="text-xs text-blue-600 uppercase font-semibold">DISCIPLINE</div>
            <h3 className="text-lg font-bold text-slate-900">Practitioner Field Notes</h3>
            <p className="text-xs text-slate-600 font-normal">Regularly published empirical analysis on LinkedIn algorithms, creative dynamics, and B2B buying behavior.</p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 space-y-2 shadow-xs">
            <div className="text-xs text-blue-600 uppercase font-semibold">FOUNDER AUTHORITY</div>
            <h3 className="text-lg font-bold text-slate-900">Dev Raj Saini</h3>
            <p className="text-xs text-slate-600 font-normal">Leading B2B acquisition strategy across Saini Nexus and executive positioning at Saini Prime.</p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 space-y-2 shadow-xs">
            <div className="text-xs text-blue-600 uppercase font-semibold">GEOGRAPHIC REACH</div>
            <h3 className="text-lg font-bold text-slate-900">India & International</h3>
            <p className="text-xs text-slate-600 font-normal">Headquartered in Jaipur, Rajasthan, serving enterprise clients across India, North America, UK, and Europe.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4 shadow-xl border border-slate-800">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Ready to review your acquisition model?
        </h3>
        <p className="text-slate-300 text-sm max-w-xl mx-auto font-normal">
          Schedule a direct strategy conversation with our team to evaluate your current LinkedIn and demand generation setup.
        </p>
        <div className="pt-2">
          <Link
            href="/book"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 shadow-sm transition-all"
          >
            <span>Book a Strategy Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
