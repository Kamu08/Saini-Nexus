import { MetadataRoute } from "next";
import { SERVICES } from "@/data/services";
import { SOLUTIONS } from "@/data/solutions";
import { CASE_STUDIES } from "@/data/caseStudies";
import { INDUSTRIES } from "@/data/industries";
import { INSIGHTS } from "@/data/insights";

// Stable release date for commercial pages
const STABLE_RELEASE_DATE = new Date("2026-10-10T00:00:00Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.saininexus.com";

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: STABLE_RELEASE_DATE,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: STABLE_RELEASE_DATE,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: STABLE_RELEASE_DATE,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: STABLE_RELEASE_DATE,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: STABLE_RELEASE_DATE,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: STABLE_RELEASE_DATE,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: STABLE_RELEASE_DATE,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: STABLE_RELEASE_DATE,
    },
    {
      url: `${baseUrl}/audit`,
      lastModified: STABLE_RELEASE_DATE,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: STABLE_RELEASE_DATE,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: STABLE_RELEASE_DATE,
    },
  ];

  // Services routes (8 Services)
  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(SERVICES).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: STABLE_RELEASE_DATE,
  }));

  // Solutions routes (5 Solutions)
  const solutionRoutes: MetadataRoute.Sitemap = Object.keys(SOLUTIONS).map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: STABLE_RELEASE_DATE,
  }));

  // Case studies routes (5 Case Studies)
  const caseStudyRoutes: MetadataRoute.Sitemap = CASE_STUDIES.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: STABLE_RELEASE_DATE,
  }));

  // Industries routes (6 Industries)
  const industryRoutes: MetadataRoute.Sitemap = Object.keys(INDUSTRIES).map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: STABLE_RELEASE_DATE,
  }));

  // Insights routes (8 Insight Articles)
  const insightRoutes: MetadataRoute.Sitemap = INSIGHTS.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: STABLE_RELEASE_DATE,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...solutionRoutes,
    ...caseStudyRoutes,
    ...industryRoutes,
    ...insightRoutes,
  ];
}
