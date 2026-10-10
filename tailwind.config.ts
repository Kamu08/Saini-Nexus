import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        nexus: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#b9ddfe",
          300: "#7cc2fd",
          400: "#36a3fa",
          500: "#0c87eb",
          600: "#0069c7",
          700: "#0154a1",
          800: "#064785",
          900: "#0b3c6f",
          950: "#070b14",
        },
        brand: {
          primary: "#0072F5",
          secondary: "#00B4D8",
          accent: "#38BDF8",
          dark: "#070B14",
          navy: "#0B1120",
          card: "#0F172A",
          hover: "#1E293B",
          border: "#1E293B",
          lightBorder: "rgba(255, 255, 255, 0.08)",
          silver: "#94A3B8",
          platinum: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        neo: "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)",
        'neo-sm': "0 1px 2px rgba(0, 0, 0, 0.04)",
        'neo-lg': "0 10px 25px -5px rgba(0, 0, 0, 0.06), 0 8px 10px -6px rgba(0, 0, 0, 0.03)",
        'neo-xl': "0 20px 30px -10px rgba(0, 0, 0, 0.08), 0 10px 15px -5px rgba(0, 0, 0, 0.04)",
        modern: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
      },
    },
  },
  plugins: [],
};
export default config;
