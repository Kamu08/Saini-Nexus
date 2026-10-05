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

  // Close menus on route change or click outside
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
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

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#FAF7EF] border-b-2 border-black px-6 py-5 space-y-4 max-h-[80vh] overflow-y-auto shadow-lg">
          <div className="space-y-1">
            {MAIN_NAV_ITEMS.map((item) => (
              <div key={item.title} className="border-b border-zinc-300 pb-2">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-1.5 font-serif text-lg text-black font-bold"
                >
                  {item.title}
                </Link>
                {item.children && item.children.length > 0 && (
                  <div className="pl-3 space-y-1 pt-1">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-1 font-mono text-xs text-zinc-700 hover:text-black font-semibold"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/book"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider text-black bg-[#60A5FA] border-2 border-black shadow-[3px_3px_0px_#000000]"
            >
              <span>Book Strategy Conversation</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
