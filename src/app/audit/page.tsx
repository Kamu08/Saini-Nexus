import React, { Suspense } from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { CommercialAuditForm } from "@/components/CommercialAuditForm";

export const metadata: Metadata = {
  title: "B2B Commercial Architecture Audit | Saini Nexus",
  description: "Request a custom 7-stage B2B commercial architecture audit for your Indian B2B firm, tech startup, or industrial export company. Direct consultation with Dev Raj Saini.",
  alternates: {
    canonical: "https://saininexus.com/audit",
  },
};

export default function AuditPage() {
  return (
    <div className="w-full pb-20 space-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40">
        <Breadcrumbs items={[{ label: "Commercial Growth Audit" }]} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={
          <div className="w-full bg-slate-50 border border-slate-200 p-12 text-center font-mono text-sm text-slate-500">
            Loading Commercial Audit Assessment...
          </div>
        }>
          <CommercialAuditForm />
        </Suspense>
      </div>
    </div>
  );
}
