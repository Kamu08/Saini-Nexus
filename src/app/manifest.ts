import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Saini Nexus | B2B Marketing & LinkedIn Growth",
    short_name: "Saini Nexus",
    description:
      "Saini Nexus is a B2B marketing and LinkedIn growth company in Jaipur, Rajasthan, helping businesses build demand, reach decision-makers, and generate qualified pipeline.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFCFF",
    theme_color: "#1572B8",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/saini-nexus-logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
