'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
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
          setScrolled(window.scrollY > 15);
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
    }, 150);
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 pointer-events-none px-4 sm:px-6 lg:px-8 ${
        scrolled ? 'pt-3' : 'pt-4 sm:pt-5'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Floating 3-Section Island Container */}
        <div 
          className={`pointer-events-auto bg-white/90 backdrop-blur-xl border border-slate-200/90 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-lg shadow-slate-900/5 transition-all duration-300 flex items-center justify-between gap-4 ${
            scrolled ? 'shadow-xl shadow-slate-950/8 bg-white/95' : ''
          }`}
        >
          
          {/* ========================================================= */}
          {/* 1. LEFT SECTION: BRAND IDENTITY (LOGO & WORDMARK)         */}
          {/* ========================================================= */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-950 border border-slate-800 p-1 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 shadow-sm">
                <Image
                  src="/saini-nexus-logo.png"
                  alt="Saini Nexus"
                  width={26}
                  height={26}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <span className="font-sans text-base sm:text-lg font-extrabold tracking-tight text-slate-950 group-hover:text-blue-600 transition-colors">
                Saini Nexus
              </span>
            </Link>
          </div>

          {/* ========================================================= */}
          {/* 2. CENTER SECTION: NAVIGATION PILL LINKS                  */}
          {/* ========================================================= */}
          <nav className="hidden lg:flex items-center space-x-1">
            {MAIN_NAV_ITEMS.map((item) => {
              const hasDropdown = item.children && item.children.length > 0;
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              const isDropdownOpen = activeDropdown === item.title;

              if (hasDropdown) {
                return (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className={`font-sans text-xs font-semibold flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                        isActive || isDropdownOpen
                          ? 'bg-slate-100 text-blue-600'
                          : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                      }`}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 ${
                          isDropdownOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Modern Clean Dropdown Window */}
                    {isDropdownOpen && (
                      <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-72 sm:w-80 bg-white border border-slate-200/90 rounded-2xl shadow-xl shadow-slate-900/10 p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="space-y-1">
                          {item.children?.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-800 hover:bg-blue-50/70 hover:text-blue-600 border border-transparent flex items-center justify-between group transition-colors"
                            >
                              <div className="flex flex-col text-left pr-2">
                                <span className="font-semibold text-xs">{sub.title}</span>
                                {sub.description && (
                                  <span className="text-[11px] text-slate-500 font-normal group-hover:text-blue-500 line-clamp-1 mt-0.5">
                                    {sub.description}
                                  </span>
                                )}
                              </div>
                              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 shrink-0 ml-1" />
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
                  className={`font-sans text-xs font-semibold px-3 py-1.5 rounded-full transition-all ${
                    isActive
                      ? 'bg-slate-100 text-blue-600'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* ========================================================= */}
          {/* 3. RIGHT SECTION: HIGH-CONVERTING ACTION CTAs             */}
          {/* ========================================================= */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Link
              href="/audit"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-all"
            >
              Growth Audit
            </Link>

            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-1.5 px-4.5 py-2 rounded-full text-xs font-semibold text-white bg-slate-950 hover:bg-blue-600 shadow-sm hover:shadow transition-all whitespace-nowrap"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center space-x-2">
            <Link
              href="/book"
              className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-slate-950 shadow-sm"
            >
              Book
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Sidebar) with Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden pointer-events-auto">
          {/* Dark Blurred Backdrop */}
          <div 
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity duration-200"
            aria-hidden="true"
          />

          {/* Modern Slide-out Drawer Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-[88vw] sm:w-96 max-w-sm bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between overflow-hidden z-50 animate-in slide-in-from-right duration-250">
            
            {/* Drawer Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
              <Link 
                href="/" 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2.5 group"
              >
                <div className="w-7 h-7 rounded-full overflow-hidden bg-slate-950 border border-slate-800 p-0.5 flex items-center justify-center shrink-0 shadow-sm">
                  <Image
                    src="/saini-nexus-logo.png"
                    alt="Saini Nexus"
                    width={24}
                    height={24}
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className="font-sans text-lg font-bold tracking-tight text-slate-900">
                  Saini Nexus
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 transition-all cursor-pointer"
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
                    <div key={item.title} className="rounded-xl border border-slate-200/80 bg-white overflow-hidden shadow-xs">
                      <div className="flex items-center justify-between p-3.5 bg-slate-50/50">
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`font-sans text-sm font-semibold tracking-tight flex-1 ${
                            isActive ? 'text-blue-600' : 'text-slate-900'
                          }`}
                        >
                          {item.title}
                        </Link>
                        <button
                          type="button"
                          onClick={() => toggleMobileSubmenu(item.title)}
                          className="p-1 rounded-md border border-slate-200 hover:border-slate-300 bg-white text-slate-600 ml-2 cursor-pointer"
                          aria-label={`Toggle ${item.title} submenu`}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? 'rotate-180 text-blue-600' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {isExpanded && (
                        <div className="p-2 space-y-1 bg-slate-50/60 border-t border-slate-100">
                          {item.children?.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="p-2.5 rounded-lg block hover:bg-white transition-colors"
                            >
                              <div className="font-sans text-xs font-semibold text-slate-800 flex items-center justify-between">
                                <span>{sub.title}</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                              </div>
                              {sub.description && (
                                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 font-normal">
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
                    className={`block p-3.5 rounded-xl border font-sans text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-blue-50/80 border-blue-200 text-blue-700'
                        : 'bg-white border-slate-200/80 text-slate-800 hover:bg-slate-50'
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
                className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full text-xs font-sans font-semibold text-white bg-slate-950 hover:bg-blue-600 shadow-sm transition-all"
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
