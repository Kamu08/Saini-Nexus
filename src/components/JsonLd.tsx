import React from "react";

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Saini Nexus",
    alternateName: "Saini Nexus B2B Growth",
    url: "https://saininexus.com",
    logo: "https://saininexus.com/saini-nexus-logo.png",
    description: "Saini Nexus is a B2B marketing and LinkedIn growth company in Jaipur, Rajasthan, helping businesses build demand, reach decision-makers and generate qualified pipeline.",
    founder: {
      "@type": "Person",
      name: "Dev Raj Saini",
      jobTitle: "Founder & Lead B2B Growth Strategist",
      url: "https://saininexus.com/about/dev-raj-saini"
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "India"
    },
    knowsAbout: [
      "B2B Marketing",
      "LinkedIn Marketing",
      "LinkedIn Ads",
      "Thought Leader Ads",
      "Demand Generation",
      "Account-Based Marketing",
      "Founder-Led Marketing",
      "B2B Pipeline Generation"
    ],
    sameAs: [
      "https://www.linkedin.com/company/saini-nexus"
    ]
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Saini Nexus",
    url: "https://saininexus.com",
    description: "B2B Marketing & LinkedIn Growth Company based in Jaipur, Rajasthan, India.",
    publisher: {
      "@type": "Organization",
      name: "Saini Nexus",
      url: "https://saininexus.com"
    }
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Saini Nexus - B2B Marketing & LinkedIn Growth",
    image: "https://saininexus.com/icon.png",
    "@id": "https://saininexus.com",
    url: "https://saininexus.com",
    email: "contact@saininexus.com",
    priceRange: "₹₹ - ₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sitapura Industrial Area / Malviya Nagar",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302017",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.9124,
      longitude: 75.7873
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "18:30"
    },
    sameAs: [
      "https://www.linkedin.com/company/saini-nexus"
    ],
    areaServed: [
      { "@type": "City", name: "Jaipur" },
      { "@type": "State", name: "Rajasthan" },
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" }
    ]
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
