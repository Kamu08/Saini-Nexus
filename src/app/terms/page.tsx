import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Service | Saini Nexus",
  description: "Terms of service and engagement governing Saini Nexus commercial agreements.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-10 sm:space-y-14">
      <Breadcrumbs items={[{ label: "Terms of Service" }]} />

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-black tracking-tight">Terms of Service</h1>
        <p className="text-xs font-mono font-bold text-black/60 uppercase tracking-wider">Last updated: January 2025 · Saini Nexus (Jaipur, Rajasthan, India)</p>
      </div>

      <div className="space-y-6 text-sm text-black/85 leading-relaxed bg-white border-2 border-black p-8 rounded-3xl shadow-[6px_6px_0px_#000000]">
        <section className="space-y-2">
          <h2 className="text-xl font-serif font-bold text-black">1. Master Services Agreements</h2>
          <p>All commercial client engagements with Saini Nexus are governed by individualized Master Services Agreements (MSAs) and detailed Statements of Work (SOWs) signed between the parties.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-serif font-bold text-black">2. Proprietary Methodology &amp; Intellectual Property</h2>
          <p>The Saini Nexus Growth System, campaign models, proprietary frameworks, and website content are the exclusive intellectual property of Saini Nexus. All custom client creatives and deliverables produced under signed retainers belong to the respective client.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-serif font-bold text-black">3. Governing Jurisdiction</h2>
          <p>Any legal matters arising from website use or business agreements are subject to the exclusive jurisdiction of the competent courts in Jaipur, Rajasthan, India.</p>
        </section>
      </div>
    </div>
  );
}
