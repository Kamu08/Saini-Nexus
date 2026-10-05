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
        display: ["var(--font-serif)", "Georgia", "serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        neo: "3px 3px 0px #000000",
        'neo-sm': "2px 2px 0px #000000",
        'neo-lg': "5px 5px 0px #000000",
        'neo-xl': "7px 7px 0px #000000",
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
