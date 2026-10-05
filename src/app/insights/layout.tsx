import { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Marketing Insights | LinkedIn, Demand Gen & ABM | Saini Nexus",
  description:
    "Strategic insights on B2B marketing, LinkedIn, advertising, demand generation, ABM, founder-led marketing and AI-driven growth from Saini Nexus.",
  alternates: {
    canonical: "https://saininexus.com/insights",
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
