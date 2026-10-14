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
    <footer 
      className="w-full border-t border-slate-200 pt-16 sm:pt-24 pb-0 overflow-hidden relative rounded-t-[40px] sm:rounded-t-[60px]"
      style={{
        backgroundImage: "url('/bg/footer_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top"
      }}
    >

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Architectural Grid Block */}
        <div className="border border-slate-200 bg-white shadow-xl flex flex-col">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 border-b border-slate-200">
            
            {/* Column 1: Brand & Bio */}
            <div className="lg:col-span-5 xl:col-span-4 p-8 sm:p-12 lg:p-14 border-r border-slate-200 flex flex-col justify-between space-y-12 bg-white">
              <div className="space-y-6">
                <Link href="/" className="inline-flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-slate-950 border border-slate-800 flex items-center justify-center overflow-hidden transition-colors group-hover:border-[#1572B8]">
                    <Image
                      src="/saini-nexus-logo.png"
                      alt="Saini Nexus Logo"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-sans font-black text-slate-900 tracking-tight transition-colors">
                      Saini Nexus
                    </span>
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#1572B8] font-bold mt-0.5">
                      B2B Growth Engine
                    </span>
                  </div>
                </Link>

                <p className="text-sm text-slate-600 leading-relaxed font-sans font-medium">
                  Helping B2B organisations build demand, reach decision-makers, and generate qualified pipeline through rigorous strategy and distribution.
                </p>

                <div className="space-y-3 text-[11px] font-sans font-bold uppercase tracking-widest text-slate-400">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#1572B8] shrink-0" />
                    <span>Jaipur, Rajasthan, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#1572B8] shrink-0" />
                    <span>Serving India &amp; Global B2B</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/#contact-form"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white bg-[#1572B8] hover:bg-slate-900 transition-colors"
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>Book Call</span>
                </Link>

                <a
                  href="https://www.linkedin.com/company/saini-nexus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-slate-700 bg-slate-50 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-[#1572B8] shrink-0" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Links Section (7 cols) */}
            <div className="lg:col-span-7 xl:col-span-8 grid grid-cols-1 sm:grid-cols-3 bg-slate-50/50">
               
              {/* Core Services */}
              <div className="p-8 sm:p-12 border-b sm:border-b-0 sm:border-r border-slate-200">
                <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-slate-900 mb-8 border-b border-slate-200 pb-3">Services</h4>
                <ul className="space-y-4 text-xs font-sans font-bold text-slate-500">
                  {FOOTER_LINKS.services.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="hover:text-[#1572B8] transition-colors">{link.title}</Link>
                    </li>
                  ))}
                  <li className="pt-2">
                    <Link href="/services" className="text-[#1572B8] hover:text-slate-900 flex items-center gap-2 transition-colors">
                      View All Services <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Industries (B2B SEO & Regional Targeting) */}
              <div className="p-8 sm:p-12 border-b sm:border-b-0 sm:border-r border-slate-200">
                <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-slate-900 mb-8 border-b border-slate-200 pb-3">Industries</h4>
                <ul className="space-y-4 text-xs font-sans font-bold text-slate-500">
                  {FOOTER_LINKS.industries.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="hover:text-[#1572B8] transition-colors">{link.title}</Link>
                    </li>
                  ))}
                  <li className="pt-2">
                    <Link href="/industries" className="text-[#1572B8] hover:text-slate-900 flex items-center gap-2 transition-colors">
                      View All Industries <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company & Proof */}
              <div className="p-8 sm:p-12">
                <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-slate-900 mb-8 border-b border-slate-200 pb-3">Company</h4>
                <ul className="space-y-4 text-xs font-sans font-bold text-slate-500">
                  {FOOTER_LINKS.company.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="hover:text-[#1572B8] transition-colors">{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="bg-white p-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between text-[10px] font-sans font-bold uppercase tracking-widest text-slate-400 gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-center sm:text-left">
              <span>© {new Date().getFullYear()} Saini Nexus. All rights reserved.</span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="inline-flex items-center gap-1.5 justify-center sm:justify-start">
                <span>Created by</span>
                <a
                  href="https://www.linkedin.com/in/kamal-sharma-2a654a191/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-[#1572B8] transition-colors font-extrabold"
                >
                  Kamal Sharma
                </a>
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link href="/privacy" className="hover:text-[#1572B8] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#1572B8] transition-colors">Terms of Service</Link>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-[#1572B8] hover:text-slate-900 transition-colors cursor-pointer ml-4"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 shrink-0" />
              </button>
            </div>
          </div>
        </div>

        {/* Huge Watermark */}
        <div className="relative pt-12 pb-8 text-center select-none pointer-events-none overflow-hidden">
          <span className="block font-sans font-black uppercase text-[11vw] sm:text-[12vw] leading-[0.8] tracking-tighter select-none text-slate-900/[0.03]">
            SAINI NEXUS
          </span>
        </div>

      </div>
    </footer>
  );
}
