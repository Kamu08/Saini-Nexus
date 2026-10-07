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
    <footer className="w-full bg-[#FAF7EF] border-t-2 border-black pt-10 sm:pt-14 pb-0 overflow-hidden relative">
      {/* Expanded Wide Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Retro Neo-Editorial Blue & White Gradient Card (Gradient strictly contained inside this card) */}
        <div className="bg-gradient-to-br from-white via-[#F0F7FF] to-[#DBEAFE] text-black rounded-3xl sm:rounded-[36px] p-8 sm:p-12 lg:p-14 xl:p-16 border-2 border-black shadow-[6px_6px_0px_#000000] relative overflow-hidden">

          {/* Ambient Blue & White Gradient Glows strictly inside card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#93C5FD]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#60A5FA]/25 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 pb-12 xl:pb-14 border-b-2 border-black/10">

            {/* Column 1: Brand & Bio */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-5 max-w-lg">
              <Link href="/" className="inline-flex items-center space-x-3 group">
                <div className="w-11 h-11 rounded-2xl bg-[#60A5FA] border-2 border-black p-1.5 flex items-center justify-center overflow-hidden shadow-[2.5px_2.5px_0px_#000000] group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-[1px_1px_0px_#000000] transition-all">
                  <Image
                    src="/saini-nexus-logo.png"
                    alt="Saini Nexus Logo"
                    width={36}
                    height={36}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-serif font-bold text-black tracking-tight group-hover:text-[#2563EB] transition-colors">
                    Saini Nexus
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#2563EB] font-bold">
                    B2B Growth &amp; LinkedIn Engine
                  </span>
                </div>
              </Link>

              <p className="text-sm text-black/80 leading-relaxed font-sans font-normal">
                Helping B2B organisations build demand, reach decision-makers and generate qualified pipeline through strategy, LinkedIn, paid distribution and growth systems.
              </p>

              {/* Founder & Location Tag */}
              <div className="pt-1 space-y-2 text-xs font-mono text-black font-semibold">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Jaipur, Rajasthan, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Serving B2B organisations across India &amp; global markets</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/book"
                  className="neo-btn-blue w-fit shrink-0"
                >
                  <Calendar className="w-3.5 h-3.5 shrink-0" />
                  <span>Book Strategy Call</span>
                </Link>

                <a
                  href="https://www.linkedin.com/company/saini-nexus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn-white w-fit shrink-0"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Column 2: Services */}
            <div className="lg:col-span-2 xl:col-span-3 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
                <span>Services</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-black/75 font-sans font-medium">
                {FOOTER_LINKS.services.slice(0, 6).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-[#2563EB] transition-colors block py-0.5">
                      {link.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services" className="text-[#2563EB] hover:underline font-mono font-bold inline-flex items-center gap-1 pt-1 text-xs uppercase tracking-wider">
                    View all 8 services <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Solutions & Verticals */}
            <div className="lg:col-span-3 xl:col-span-3 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
                <span>Solutions</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-black/75 font-sans font-medium">
                {FOOTER_LINKS.solutions.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-[#2563EB] transition-colors block py-0.5">
                      {link.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/industries" className="text-[#2563EB] hover:underline font-mono font-bold inline-flex items-center gap-1 pt-1 text-xs uppercase tracking-wider">
                    Industry playbooks <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Company & Resources */}
            <div className="lg:col-span-2 xl:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border-2 border-black text-black text-xs font-mono uppercase tracking-wider font-bold shadow-[2px_2px_0px_#000000]">
                <span>Company</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-black/75 font-sans font-medium">
                <li>
                  <Link href="/about" className="hover:text-[#2563EB] transition-colors block py-0.5">
                    About Saini Nexus
                  </Link>
                </li>
                <li>
                  <Link href="/about/credentials" className="hover:text-[#2563EB] transition-colors block py-0.5">
                    Credentials &amp; Expertise
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-[#2563EB] transition-colors block py-0.5">
                    Team Directory (18)
                  </Link>
                </li>
                <li>
                  <Link href="/about/dev-raj-saini" className="hover:text-[#2563EB] transition-colors block py-0.5">
                    Dev Raj Saini (Founder)
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="hover:text-[#2563EB] transition-colors block py-0.5">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/insights" className="hover:text-[#2563EB] transition-colors block py-0.5">
                    Field Notes &amp; Insights
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#2563EB] transition-colors block py-0.5">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Micro Bar */}
          <div className="relative z-10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-black/70 font-mono font-medium gap-4">
            <div>
              © 2026 Saini Nexus. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Link href="/privacy" className="hover:text-[#2563EB] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#2563EB] transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="hover:text-[#2563EB] transition-colors">
                Sitemap
              </Link>
              <button
                onClick={scrollToTop}
                className="neo-btn-white !px-3 !py-1 text-[11px] gap-1 cursor-pointer"
                aria-label="Back to top"
              >
                <span>Top</span>
                <ArrowUp className="w-3 h-3 shrink-0" />
              </button>
            </div>
          </div>

        </div>

        {/* Giant Retro Watermark on warm cream */}
        <div className="relative pt-8 sm:pt-10 pb-4 text-center select-none pointer-events-none overflow-hidden">
          <span className="block font-serif font-black uppercase text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[12vw] leading-none py-2 tracking-tighter select-none text-black/10 blur-[2px] sm:blur-[3px] transition-all">
            SAINI NEXUS
          </span>
          <div className="absolute inset-x-0 bottom-0 h-4 sm:h-6 bg-gradient-to-t from-[#FAF7EF] to-transparent pointer-events-none" />
        </div>

      </div>
    </footer>
  );
}
