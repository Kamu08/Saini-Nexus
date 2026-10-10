'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowUp, MapPin, Linkedin, ShieldCheck, Calendar } from 'lucide-react';
import { FOOTER_LINKS } from '@/data/navigation';

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800/80 pt-12 sm:pt-16 pb-0 overflow-hidden relative text-slate-300">
      {/* Expanded Wide Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Enterprise Modern Slate Card */}
        <div className="bg-slate-900/70 text-slate-200 rounded-3xl sm:rounded-[32px] p-8 sm:p-12 lg:p-14 xl:p-16 border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-md">

          {/* Ambient Blue & Indigo Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 pb-12 xl:pb-14 border-b border-slate-800/80">

            {/* Column 1: Brand & Bio */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-5 max-w-lg">
              <Link href="/" className="inline-flex items-center space-x-3 group">
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 p-1 flex items-center justify-center overflow-hidden shadow-sm group-hover:border-blue-500 transition-colors">
                  <Image
                    src="/saini-nexus-logo.png"
                    alt="Saini Nexus Logo"
                    width={32}
                    height={32}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-sans font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    Saini Nexus
                  </span>
                  <span className="text-[10px] font-sans uppercase tracking-widest text-blue-400 font-semibold">
                    B2B Growth &amp; LinkedIn Engine
                  </span>
                </div>
              </Link>

              <p className="text-sm text-slate-400 leading-relaxed font-sans font-normal">
                Helping B2B organisations build demand, reach decision-makers and generate qualified pipeline through strategy, LinkedIn, paid distribution and growth systems.
              </p>

              {/* Founder & Location Tag */}
              <div className="pt-1 space-y-2 text-xs font-sans text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Jaipur, Rajasthan, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Serving B2B organisations across India &amp; global markets</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
                >
                  <Calendar className="w-3.5 h-3.5 shrink-0" />
                  <span>Book Strategy Call</span>
                </Link>

                <a
                  href="https://www.linkedin.com/company/saini-nexus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 shadow-xs transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Column 2: Services */}
            <div className="lg:col-span-2 xl:col-span-3 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-slate-300 text-xs font-sans uppercase tracking-wider font-semibold">
                <span>Services</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-sans">
                {FOOTER_LINKS.services.slice(0, 6).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white transition-colors block py-0.5">
                      {link.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services" className="text-blue-400 hover:text-blue-300 font-sans font-semibold inline-flex items-center gap-1 pt-1 text-xs">
                    View all 8 services <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Solutions & Verticals */}
            <div className="lg:col-span-3 xl:col-span-3 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-slate-300 text-xs font-sans uppercase tracking-wider font-semibold">
                <span>Solutions</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-sans">
                {FOOTER_LINKS.solutions.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white transition-colors block py-0.5">
                      {link.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/industries" className="text-blue-400 hover:text-blue-300 font-sans font-semibold inline-flex items-center gap-1 pt-1 text-xs">
                    Industry playbooks <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Company & Resources */}
            <div className="lg:col-span-2 xl:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-slate-300 text-xs font-sans uppercase tracking-wider font-semibold">
                <span>Company</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-sans">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors block py-0.5">
                    About Saini Nexus
                  </Link>
                </li>
                <li>
                  <Link href="/about/credentials" className="hover:text-white transition-colors block py-0.5">
                    Credentials &amp; Expertise
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-white transition-colors block py-0.5">
                    Team Directory (18)
                  </Link>
                </li>
                <li>
                  <Link href="/about/dev-raj-saini" className="hover:text-white transition-colors block py-0.5">
                    Dev Raj Saini (Founder)
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="hover:text-white transition-colors block py-0.5">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/insights" className="hover:text-white transition-colors block py-0.5">
                    Field Notes &amp; Insights
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors block py-0.5">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Micro Bar */}
          <div className="relative z-10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-sans font-normal gap-4">
            <div>
              © 2026 Saini Nexus. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Link href="/privacy" className="hover:text-slate-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-slate-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="hover:text-slate-300 transition-colors">
                Sitemap
              </Link>
              <button
                onClick={scrollToTop}
                className="px-3 py-1 rounded-full text-xs bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-700 flex items-center gap-1 cursor-pointer transition-colors"
                aria-label="Back to top"
              >
                <span>Top</span>
                <ArrowUp className="w-3 h-3 shrink-0" />
              </button>
            </div>
          </div>

        </div>

        {/* Refined Modern Blurred Watermark */}
        <div className="relative pt-10 sm:pt-14 pb-6 text-center select-none pointer-events-none overflow-hidden">
          <span className="block font-sans font-black uppercase text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[12vw] leading-none py-2 tracking-tighter select-none text-white/[0.04] blur-[3px] sm:blur-[4px] transition-all">
            SAINI NEXUS
          </span>
          <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
        </div>

      </div>
    </footer>
  );
}
