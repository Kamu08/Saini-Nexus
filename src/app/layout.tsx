import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { JsonLd, getOrganizationSchema, getLocalBusinessSchema, getWebSiteSchema } from "@/components/JsonLd";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["italic"],
  weight: ["500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.saininexus.com"),
  title: {
    default: "Saini Nexus | B2B Marketing & LinkedIn Growth Company",
    template: "%s | Saini Nexus",
  },
  description:
    "Saini Nexus is a B2B marketing and LinkedIn growth company in Jaipur, Rajasthan, helping businesses build demand, reach decision-makers and generate qualified pipeline.",
  keywords: [
    "B2B Marketing Company",
    "B2B Marketing Agency",
    "B2B Marketing Agency Jaipur",
    "B2B Marketing Rajasthan",
    "B2B Marketing Agency India",
    "LinkedIn Marketing Jaipur",
    "LinkedIn Marketing",
    "B2B Growth",
    "LinkedIn Marketing Company India",
    "LinkedIn Marketing India",
    "B2B Growth Company India",
    "B2B Growth Strategy",
    "LinkedIn B2B Marketing",
    "LinkedIn Ads Agency",
    "Thought Leader Ads",
    "Demand Generation",
    "Account-Based Marketing",
    "Founder-Led Marketing",
    "B2B Pipeline Generation",
    "B2B Demand Generation India",
    "Dev Raj Saini",
    "Saini Nexus",
  ],
  authors: [{ name: "Dev Raj Saini", url: "https://www.saininexus.com/about" }],
  creator: "Saini Nexus",
  publisher: "Saini Nexus",
  alternates: {
    canonical: "https://www.saininexus.com",
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jaipur, Rajasthan, India",
    "geo.position": "26.9124;75.7873",
    "ICBM": "26.9124, 75.7873",
    "theme-color": "#1572B8",
    "llms-txt": "https://www.saininexus.com/llms.txt",
    "llms-full-txt": "https://www.saininexus.com/llms-full.txt",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.saininexus.com",
    siteName: "Saini Nexus",
    title: "Saini Nexus | B2B Marketing & LinkedIn Growth Company",
    description:
      "B2B Growth, Built Around How Buyers Actually Buy. We help B2B companies reach decision-makers and generate measurable pipeline.",
    images: [
      {
        url: "/saini-nexus-logo.png",
        width: 800,
        height: 800,
        alt: "Saini Nexus — B2B Marketing & LinkedIn Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saini Nexus | B2B Marketing & LinkedIn Growth",
    description:
      "B2B Growth, Built Around How Buyers Actually Buy. Turn LinkedIn into a predictable revenue engine.",
    images: ["/saini-nexus-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable} scroll-smooth`}>
      <head>
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM Context" />
        <link rel="alternate" type="text/markdown" href="/llms-full.txt" title="Full LLM Context" />
      </head>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
        <GoogleAnalytics />
        <JsonLd data={getOrganizationSchema()} />
        <JsonLd data={getWebSiteSchema()} />
        <JsonLd data={getLocalBusinessSchema()} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
