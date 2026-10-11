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
    legalName: "Saini Nexus",
    alternateName: "Saini Nexus B2B Growth",
    url: "https://www.saininexus.com",
    logo: "https://www.saininexus.com/saini-nexus-logo.png",
    image: "https://www.saininexus.com/saini-nexus-logo.png",
    description: "Saini Nexus is a B2B marketing and LinkedIn growth company in Jaipur, Rajasthan, helping businesses build demand, reach decision-makers, and generate qualified pipeline.",
    founder: {
      "@type": "Person",
      name: "Dev Raj Saini",
      jobTitle: "Founder & Lead B2B Growth Strategist",
      url: "https://www.saininexus.com/about",
      sameAs: [
        "https://www.linkedin.com/in/devrajsaini"
      ]
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sitapura Industrial Area / Malviya Nagar",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302017",
      addressCountry: "India"
    },
    foundingLocation: {
      "@type": "Place",
      name: "Jaipur, Rajasthan, India"
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "contact@saininexus.com",
        availableLanguage: ["English", "Hindi"],
        areaServed: ["India", "United States", "United Kingdom", "United Arab Emirates"]
      }
    ],
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
    url: "https://www.saininexus.com",
    description: "B2B Marketing & LinkedIn Growth Company based in Jaipur, Rajasthan, India.",
    publisher: {
      "@type": "Organization",
      name: "Saini Nexus",
      url: "https://www.saininexus.com"
    }
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    name: "Saini Nexus - B2B Marketing & LinkedIn Growth",
    legalName: "Saini Nexus",
    image: "https://www.saininexus.com/saini-nexus-logo.png",
    "@id": "https://www.saininexus.com/#localbusiness",
    url: "https://www.saininexus.com",
    email: "contact@saininexus.com",
    priceRange: "₹₹ - ₹₹₹",
    hasMap: "https://maps.google.com/?q=Jaipur,+Rajasthan,+India",
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
      { "@type": "City", name: "New Delhi" },
      { "@type": "City", name: "Bengaluru" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "B2B Growth & Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "B2B Marketing Strategy",
            description: "High-conviction go-to-market demand generation architecture for enterprise B2B organisations."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "LinkedIn B2B Advertising & Thought Leader Ads",
            description: "Full-funnel LinkedIn sponsored content, executive thought leadership, and precise ICP targeting."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Account-Based Marketing (ABM)",
            description: "Targeted multi-threaded account penetration for high-value enterprise contracts."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Pipeline Audit",
            description: "Comprehensive 7-stage commercial architecture audit for B2B pipeline acceleration."
          }
        }
      ]
    }
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
