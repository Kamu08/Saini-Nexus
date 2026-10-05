import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy | Saini Nexus",
  description: "Privacy policy and data protection disclosures for Saini Nexus.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-10 sm:space-y-14">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-black tracking-tight">Privacy Policy</h1>
        <p className="text-xs font-mono font-bold text-black/60 uppercase tracking-wider">Last updated: January 2025 · Saini Nexus (Jaipur, Rajasthan, India)</p>
      </div>

      <div className="space-y-6 text-sm text-black/85 leading-relaxed bg-white border-2 border-black p-8 rounded-3xl shadow-[6px_6px_0px_#000000]">
        <section className="space-y-2">
          <h2 className="text-xl font-serif font-bold text-black">1. Commitment to Data Integrity</h2>
          <p>Saini Nexus is committed to protecting the proprietary information and personal data of our enterprise clients, prospective partners, and website visitors.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-serif font-bold text-black">2. Information Collection</h2>
          <p>We collect information submitted directly via our strategy intake forms (Name, Work Email, Company, Job Title, Budget, and Marketing Requirements) strictly for assessing commercial fit and conducting requested strategy consultations.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-serif font-bold text-black">3. Non-Disclosure &amp; Confidentiality</h2>
          <p>All business metrics, revenue benchmarks, and strategic requirements shared with Saini Nexus are treated under strict non-disclosure obligations. We never sell, rent, or trade client or prospect information.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-serif font-bold text-black">4. Contact Information</h2>
          <p>For inquiries regarding data protection, please contact us at: <span className="text-[#2563EB] font-mono font-bold">privacy@saininexus.com</span> or via mail at our Jaipur, Rajasthan headquarters.</p>
        </section>
      </div>
    </div>
  );
}
