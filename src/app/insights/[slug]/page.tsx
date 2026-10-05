import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { 
  Clock, 
  Calendar, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { INSIGHTS } from "@/data/insights";

interface InsightDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return INSIGHTS.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: InsightDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHTS.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Insight Not Found | Saini Nexus",
    };
  }

  return {
    title: `${article.title} | Saini Nexus Insights`,
    description: article.summary,
    alternates: {
      canonical: `https://saininexus.com/insights/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.subtitle,
      url: `https://saininexus.com/insights/${article.slug}`,
      siteName: "Saini Nexus",
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.name],
    },
  };
}

export default async function InsightDetailPage({ params }: InsightDetailPageProps) {
  const { slug } = await params;
  const article = INSIGHTS.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    datePublished: article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
      url: `https://saininexus.com${article.author.profileUrl}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Saini Nexus",
      url: "https://saininexus.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://saininexus.com/insights/${article.slug}`,
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-10 sm:space-y-14">
      <JsonLd data={articleSchema} />

      <Breadcrumbs
        items={[
          { label: "Insights", href: "/insights" },
          { label: article.title },
        ]}
      />

      {/* Article Header */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3.5 py-1 rounded-full bg-[#60A5FA] border-2 border-black text-black text-xs font-mono font-bold uppercase tracking-wider shadow-[2px_2px_0px_#000000]">
            {article.category}
          </span>
          <span className="text-xs font-mono text-black/70 flex items-center gap-1 font-bold">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
          <span className="text-xs font-mono text-black/40">•</span>
          <span className="text-xs font-mono text-black/70 flex items-center gap-1 font-bold">
            <Calendar className="w-3.5 h-3.5" />
            {article.publishedAt}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-black leading-[1.1] tracking-tight">
          {article.title}
        </h1>

        <p className="text-base sm:text-xl text-black/80 leading-relaxed font-normal">
          {article.subtitle}
        </p>

        {/* Author Byline Box */}
        <div className="pt-4 border-t-2 border-b-2 border-black/10 py-4 flex items-center justify-between">
          <Link href={article.author.profileUrl} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#60A5FA] border-2 border-black text-black font-serif font-bold text-sm flex items-center justify-center shadow-[2px_2px_0px_#000000]">
              DRS
            </div>
            <div>
              <div className="text-sm font-bold text-black group-hover:text-[#2563EB] transition-colors">
                {article.author.name}
              </div>
              <div className="text-xs font-mono text-black/60 font-medium">
                {article.author.role}
              </div>
            </div>
          </Link>

          <Link
            href={article.author.profileUrl}
            className="text-xs font-mono text-black hover:text-[#2563EB] flex items-center gap-1 font-bold uppercase tracking-wider"
          >
            <span>Author Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* Key Takeaways Callout */}
      <section className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 space-y-4 shadow-[6px_6px_0px_#000000]">
        <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] font-bold block">
          Strategic Executive Summary
        </span>
        <ul className="space-y-2.5">
          {article.keyTakeaways.map((takeaway, i) => (
            <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-black">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span className="font-medium leading-relaxed">{takeaway}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Article Body Content */}
      <main className="space-y-10 text-black/85 text-base sm:text-lg leading-relaxed font-sans">
        {article.sections.map((sec, i) => (
          <div key={i} className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-black leading-snug">
              {sec.heading}
            </h2>
            <p className="leading-relaxed">{sec.content}</p>

            {sec.quote && (
              <blockquote className="my-6 p-6 bg-[#FAF7EF] border-2 border-black rounded-2xl font-serif italic text-black text-lg sm:text-xl leading-relaxed shadow-[4px_4px_0px_#000000]">
                &ldquo;{sec.quote}&rdquo;
              </blockquote>
            )}

            {sec.bullets && (
              <ul className="space-y-2 pl-4 pt-2">
                {sec.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm sm:text-base text-black/85">
                    <span className="w-2 h-2 rounded-full bg-[#60A5FA] border border-black mt-2 shrink-0"></span>
                    <span className="font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </main>

      {/* Related Services Links */}
      <section className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 space-y-4 shadow-[6px_6px_0px_#000000]">
        <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] block font-bold">
          Associated Strategic Solutions
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {article.relatedServices.map((rel, i) => (
            <Link
              key={i}
              href={rel.href}
              className="bg-[#FAF7EF] border-2 border-black p-4 rounded-2xl hover:bg-sky-50 transition-all flex items-center justify-between group shadow-[2px_2px_0px_#000000] hover:shadow-[4px_4px_0px_#000000]"
            >
              <span className="text-sm font-serif font-bold text-black group-hover:text-[#2563EB]">{rel.title}</span>
              <ArrowUpRight className="w-4 h-4 text-black group-hover:text-[#2563EB]" />
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA Box */}
      <section className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[6px_6px_0px_#000000]">
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black">Talk to a B2B Growth Strategist.</h3>
          <p className="text-black/80 text-sm">Schedule a direct conversation with Dev Raj Saini to discuss your enterprise acquisition model.</p>
        </div>
        <Link
          href="/contact"
          className="neo-btn-blue inline-flex items-center px-8 py-4 rounded-full text-xs uppercase tracking-wider shrink-0"
        >
          <span>Request Conversation</span>
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
