'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { MAIN_NAV_ITEMS } from '@/data/navigation';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile sidebar drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menus on route change or click outside
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileExpandedItem(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 120);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const toggleMobileSubmenu = (title: string) => {
    setMobileExpandedItem((prev) => (prev === title ? null : title));
  };

  return (
    <header 
      ref={navRef}
      className="fixed top-0 inset-x-0 z-50 pointer-events-none px-4 sm:px-6 lg:px-8 pt-2 sm:pt-3 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 sm:gap-6">
        
        {/* ========================================================= */}
        {/* 1. LEFT BLOCK: BRAND IDENTITY (CLICKS DIRECTLY TO HOME)   */}
        {/* ========================================================= */}
        <Link 
          href="/" 
          className="pointer-events-auto bg-white border border-slate-200/90 rounded-xl shadow-xs hover:border-slate-300 transition-all duration-200 px-4 sm:px-5 h-13 sm:h-14 flex items-center shrink-0 gap-3 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg overflow-hidden bg-slate-950 border border-slate-800 p-1 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 duration-200 shadow-xs">
            <Image
              src="/saini-nexus-logo.png"
              alt="Saini Nexus"
              width={26}
              height={26}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <span className="font-sans text-base sm:text-lg font-black tracking-tight text-slate-950 group-hover:text-blue-600 transition-colors uppercase whitespace-nowrap">
            Saini Nexus
          </span>
        </Link>

        {/* ========================================================= */}
        {/* 2. CENTER BLOCK: NAVIGATION (CLEAN UNDERLINE REVEAL)      */}
        {/* Crisp text, no black blocks, smooth underline on hover   */}
        {/* ========================================================= */}
        <nav className="pointer-events-auto hidden lg:flex items-center gap-1 bg-white border border-slate-200/90 rounded-xl shadow-xs h-13 sm:h-14 px-3">
          {MAIN_NAV_ITEMS.map((item) => {
            const hasDropdown = item.children && item.children.length > 0;
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            const isDropdownOpen = activeDropdown === item.title;

            if (hasDropdown) {
              return (
                <div
                  key={item.title}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => toggleDropdown(item.title)}
                    className={`group relative h-full px-4 font-sans text-[13px] font-bold tracking-wider uppercase flex items-center transition-colors cursor-pointer select-none ${
                      isActive
                        ? 'text-blue-600 font-extrabold'
                        : isDropdownOpen
                        ? 'text-slate-950 font-extrabold'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    <span>{item.title}</span>

                    {/* Clean Minimal Underline: Expands from center on hover or locked if active */}
                    <span 
                      className={`absolute bottom-0 inset-x-3 h-0.5 transition-all duration-200 ${
                        isActive
                          ? 'bg-blue-600 opacity-100 scale-x-100'
                          : 'bg-slate-950 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                      }`}
                    />
                  </button>

                  {/* Dropdown Window: Crisp & Instant with Smooth Fade */}
                  {isDropdownOpen && (
                    <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-80 bg-white border border-slate-200 rounded-xl shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="space-y-1">
                        {item.children?.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="px-3.5 py-2.5 rounded-lg text-xs font-semibold text-slate-800 hover:bg-slate-50 hover:text-blue-600 border border-transparent flex items-center justify-between group transition-colors"
                          >
                            <div className="flex flex-col text-left pr-2">
                              <span className="font-bold text-xs uppercase tracking-wider">{sub.title}</span>
                              {sub.description && (
                                <span className="text-[11px] text-slate-500 font-normal line-clamp-1 mt-0.5">
                                  {sub.description}
                                </span>
                              )}
                            </div>
                            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 shrink-0 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`group relative h-full px-4 font-sans text-[13px] font-bold tracking-wider uppercase flex items-center transition-colors select-none ${
                  isActive
                    ? 'text-blue-600 font-extrabold'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <span>{item.title}</span>

                {/* Clean Minimal Underline: Expands smoothly on hover or locked if active */}
                <span 
                  className={`absolute bottom-0 inset-x-3 h-0.5 transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 opacity-100 scale-x-100'
                      : 'bg-slate-950 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* ========================================================= */}
        {/* 3. RIGHT BLOCK: CONVERSION CTA                            */}
        {/* ========================================================= */}
        <div className="pointer-events-auto bg-white border border-slate-200/90 rounded-xl shadow-xs h-13 sm:h-14 px-2 sm:px-2.5 flex items-center shrink-0">
          <Link
            href="/book"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 h-9 sm:h-10 rounded-lg text-xs font-sans font-bold uppercase tracking-wider text-white bg-slate-950 hover:bg-blue-600 shadow-xs hover:shadow-md transition-all duration-200 group whitespace-nowrap"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden ml-2 p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* ========================================================= */}
      {/* MOBILE DRAWER                                             */}
      {/* ========================================================= */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden pointer-events-auto">
          {/* Blurred Backdrop */}
          <div 
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity duration-200"
            aria-hidden="true"
          />

          {/* Slide-out Drawer Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-[88vw] sm:w-96 max-w-sm bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between overflow-hidden z-50 animate-in slide-in-from-right duration-250">
            
            {/* Drawer Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
              <Link 
                href="/" 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2.5 group"
              >
                <div className="w-7 h-7 rounded-lg overflow-hidden bg-slate-950 border border-slate-800 p-0.5 flex items-center justify-center shrink-0 shadow-xs">
                  <Image
                    src="/saini-nexus-logo.png"
                    alt="Saini Nexus"
                    width={24}
                    height={24}
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className="font-sans text-lg font-black tracking-tight text-slate-900 uppercase">
                  Saini Nexus
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 transition-all cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Navigation Content */}
            <div className="p-5 space-y-2.5 overflow-y-auto flex-1">
              {MAIN_NAV_ITEMS.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isExpanded = mobileExpandedItem === item.title;
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

                if (hasChildren) {
                  return (
                    <div key={item.title} className="rounded-xl border border-slate-200/90 bg-white overflow-hidden shadow-xs">
                      <div className="flex items-center justify-between p-3.5 bg-slate-50/50">
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`font-sans text-sm font-bold uppercase tracking-wider flex-1 ${
                            isActive ? 'text-blue-600' : 'text-slate-900'
                          }`}
                        >
                          {item.title}
                        </Link>
                        <button
                          type="button"
                          onClick={() => toggleMobileSubmenu(item.title)}
                          className="p-1 rounded-md border border-slate-200 hover:border-slate-300 bg-white text-slate-600 ml-2 cursor-pointer text-xs font-bold uppercase"
                          aria-label={`Toggle ${item.title} submenu`}
                        >
                          {isExpanded ? 'Hide' : 'View'}
                        </button>
                      </div>

                      {isExpanded && (
                        <div className="p-2 space-y-1 bg-slate-50/60 border-t border-slate-100">
                          {item.children?.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="p-2.5 rounded-lg block hover:bg-slate-50 transition-colors group"
                            >
                              <div className="font-sans text-xs font-bold text-slate-800 group-hover:text-blue-600 flex items-center justify-between uppercase tracking-wider">
                                <span>{sub.title}</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                              </div>
                              {sub.description && (
                                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 font-normal normal-case">
                                  {sub.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block p-3.5 rounded-xl border font-sans text-sm font-bold uppercase tracking-wider transition-all ${
                      isActive
                        ? 'bg-blue-50 border-blue-200 text-blue-600'
                        : 'bg-white border-slate-200/90 text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>

            {/* Drawer Footer CTA */}
            <div className="p-5 border-t border-slate-100 bg-white space-y-3 shrink-0">
              <Link
                href="/book"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center px-5 py-3.5 rounded-xl text-xs font-sans font-bold uppercase tracking-wider text-white bg-slate-950 hover:bg-blue-600 shadow-sm transition-all"
              >
                <span>Book Strategy Conversation</span>
                <span className="ml-2 font-bold">→</span>
              </Link>
              <p className="text-[11px] font-sans text-center text-slate-500">
                Direct 1-on-1 Strategy Consultation · Jaipur, India
              </p>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
