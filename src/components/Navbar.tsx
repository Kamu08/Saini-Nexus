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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-[#FAF7EF]/95 backdrop-blur-md border-b-2 border-black shadow-xs' 
          : 'bg-[#FAF7EF] border-b-2 border-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name (CauseHouse Retro-Editorial) */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-black border-2 border-black p-0.5 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 shadow-[2px_2px_0px_#000000]">
              <Image
                src="/saini-nexus-logo.png"
                alt="Saini Nexus"
                width={28}
                height={28}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight text-black">
              Saini Nexus
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
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
                      className={`font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer py-2 ${
                        isActive || isDropdownOpen
                          ? 'text-[#2563EB] underline decoration-2 underline-offset-4'
                          : 'text-zinc-800 hover:text-black'
                      }`}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-150 ${
                          isDropdownOpen ? 'rotate-180 text-[#2563EB]' : 'text-zinc-500'
                        }`}
                      />
                    </button>

                    {/* Retro Neo Dropdown Window */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 w-72 sm:w-80 bg-[#FAF7EF] border-2 border-black rounded-2xl shadow-neo p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="space-y-1">
                          {item.children?.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="px-3 py-2 rounded-xl text-xs font-bold text-zinc-900 hover:bg-[#BFDBFE] hover:text-black border border-transparent hover:border-black flex items-center justify-between group transition-colors"
                            >
                              <div className="flex flex-col text-left pr-2">
                                <span className="font-bold text-xs">{sub.title}</span>
                                {sub.description && (
                                  <span className="text-[10px] text-zinc-600 font-normal group-hover:text-black line-clamp-1">
                                    {sub.description}
                                  </span>
                                )}
                              </div>
                              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-black shrink-0 ml-1" />
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
                  className={`font-mono text-xs font-bold uppercase tracking-wider transition-colors py-2 ${
                    isActive
                      ? 'text-[#2563EB] underline decoration-2 underline-offset-4'
                      : 'text-zinc-800 hover:text-black'
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/book"
              className="px-6 py-2.5 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider text-black bg-[#60A5FA] border-2 border-black shadow-[3px_3px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1.5px_1.5px_0px_#000000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all whitespace-nowrap shrink-0"
            >
              <span>Book Strategy Call</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <Link
              href="/book"
              className="px-3.5 py-1.5 rounded-full text-xs font-mono font-extrabold uppercase text-black bg-[#60A5FA] border-2 border-black shadow-[2px_2px_0px_#000000]"
            >
              Book
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-black border-2 border-black bg-white hover:bg-zinc-100 shadow-[2px_2px_0px_#000000] transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Sidebar) with Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Dark Blurred Backdrop */}
          <div 
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-200"
            aria-hidden="true"
          />

          {/* Neo Slide-out Drawer Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-[88vw] sm:w-96 max-w-sm bg-[#FAF7EF] border-l-2 border-black shadow-[-6px_0px_0px_#000000] flex flex-col justify-between overflow-hidden z-50 animate-in slide-in-from-right duration-250">
            
            {/* Drawer Header */}
            <div className="p-5 border-b-2 border-black flex items-center justify-between bg-white shrink-0">
              <Link 
                href="/" 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 group"
              >
                <div className="w-7 h-7 rounded-lg overflow-hidden bg-black border-2 border-black p-0.5 flex items-center justify-center shrink-0 shadow-[1.5px_1.5px_0px_#000000]">
                  <Image
                    src="/saini-nexus-logo.png"
                    alt="Saini Nexus"
                    width={24}
                    height={24}
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className="font-serif text-lg font-bold tracking-tight text-black">
                  Saini Nexus
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl border-2 border-black bg-[#FAF7EF] hover:bg-zinc-100 text-black shadow-[2px_2px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Navigation Content */}
            <div className="p-5 space-y-3 overflow-y-auto flex-1">
              {MAIN_NAV_ITEMS.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isExpanded = mobileExpandedItem === item.title;
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

                if (hasChildren) {
                  return (
                    <div key={item.title} className="rounded-2xl border-2 border-black bg-white overflow-hidden shadow-[2.5px_2.5px_0px_#000000]">
                      <div className="flex items-center justify-between p-3.5 bg-zinc-50 border-b border-black/10">
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`font-serif text-base font-bold tracking-tight flex-1 ${
                            isActive ? 'text-[#2563EB]' : 'text-black'
                          }`}
                        >
                          {item.title}
                        </Link>
                        <button
                          type="button"
                          onClick={() => toggleMobileSubmenu(item.title)}
                          className="p-1 rounded-lg border border-black/20 hover:border-black bg-white text-zinc-700 ml-2 cursor-pointer"
                          aria-label={`Toggle ${item.title} submenu`}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? 'rotate-180 text-[#2563EB]' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {isExpanded && (
                        <div className="p-2 space-y-1 bg-[#FAF7EF] border-t border-black/10">
                          {item.children?.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="p-2.5 rounded-xl block border border-transparent hover:border-black hover:bg-[#BFDBFE] transition-colors"
                            >
                              <div className="font-serif text-xs font-bold text-black flex items-center justify-between">
                                <span>{sub.title}</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                              </div>
                              {sub.description && (
                                <p className="text-[10px] text-zinc-600 line-clamp-1 mt-0.5 font-sans">
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
                    className={`block p-3.5 rounded-2xl border-2 border-black shadow-[2.5px_2.5px_0px_#000000] font-serif text-base font-bold transition-all ${
                      isActive
                        ? 'bg-[#60A5FA] text-black'
                        : 'bg-white text-black hover:bg-[#FAF7EF]'
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>

            {/* Drawer Footer CTA */}
            <div className="p-5 border-t-2 border-black bg-white space-y-3 shrink-0">
              <Link
                href="/book"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center px-5 py-3.5 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider text-black bg-[#60A5FA] border-2 border-black shadow-[3px_3px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
              >
                <span>Book Strategy Conversation</span>
                <span className="ml-2 font-bold">→</span>
              </Link>
              <p className="text-[10px] font-mono text-center text-zinc-600 font-semibold">
                Direct 1-on-1 Founder Consultation · Jaipur, India
              </p>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
