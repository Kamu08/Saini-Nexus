import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saininexus.com"),
  title: {
    default: "Saini Nexus | B2B Marketing & LinkedIn Growth Company",
    template: "%s | Saini Nexus",
  },
  description:
    "Saini Nexus is a B2B marketing and LinkedIn growth company in Jaipur, Rajasthan, helping businesses build demand, reach decision-makers and generate qualified pipeline.",
  keywords: [
    "B2B Marketing Company",
    "B2B Marketing Agency",
    "LinkedIn Marketing",
    "B2B Growth",
    "LinkedIn Marketing Company India",
    "B2B Marketing Jaipur",
    "B2B Marketing Rajasthan",
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
    "Dev Raj Saini"
  ],
  authors: [{ name: "Dev Raj Saini", url: "https://saininexus.com/about/dev-raj-saini" }],
  creator: "Saini Nexus",
  publisher: "Saini Nexus",
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
    url: "https://saininexus.com",
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
      <body className="min-h-screen bg-[#FAF7EF] text-[#111827] font-sans antialiased selection:bg-[#60A5FA] selection:text-black">
        <JsonLd data={getOrganizationSchema()} />
        <JsonLd data={getWebSiteSchema()} />
        <JsonLd data={getLocalBusinessSchema()} />
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
