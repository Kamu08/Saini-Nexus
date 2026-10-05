import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd, getLocalBusinessSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Saini Nexus | B2B Marketing & Growth Strategy",
  description: "Talk to Saini Nexus about B2B marketing, LinkedIn growth, advertising, demand generation, ABM or pipeline growth.",
  alternates: {
    canonical: "https://saininexus.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 space-y-8">
      <JsonLd data={getLocalBusinessSchema()} />
      <Breadcrumbs items={[{ label: "Let's Talk" }]} />
      <ContactForm />
    </div>
  );
}
