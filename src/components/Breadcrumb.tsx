import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "./JsonLd";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://saininexus.com"
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: item.label,
      ...(item.href ? { item: `https://saininexus.com${item.href}` } : {})
    }))
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: schemaItems
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-700 py-2.5 border-b-2 border-black/10 font-mono font-medium">
        <Link href="/" className="hover:text-[#2563EB] flex items-center gap-1 transition-colors text-zinc-800 font-bold shrink-0">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3 h-3 text-black/40 shrink-0" />
              {isLast || !item.href ? (
                <span className="text-black font-extrabold bg-[#60A5FA]/30 px-2 py-0.5 rounded-md border border-black/20 break-words">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-[#2563EB] text-zinc-800 transition-colors font-semibold shrink-0">
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}
