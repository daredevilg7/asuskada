import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F8FA",
        netology: {
          blue: "#005BFF",
          "blue-hover": "#004BD6",
          "blue-active": "#003EB0",
          dark: "#0E1218",
          darkCard: "#141922",
          darkBorder: "#222936",
          heading: "#141414",
          body: "#4A4D55",
          muted: "#6B7280",
          lime: "#CEF836",
          dateBadge: "#164E43",
          mintBg: "#E8F7F3",
          mintText: "#0D7A5F",
          border: "#E5E7EB",
          cardBg: "#FFFFFF",
        }
      },
      fontFamily: {
        sans: ["'Golos Text'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      borderRadius: {
        "6": "6px",
        "8": "8px",
        "10": "10px",
        "12": "12px",
        "16": "16px",
        "20": "20px",
        "24": "24px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        card: "0 2px 8px -2px rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.02)",
        popup: "0 20px 40px -10px rgba(0, 0, 0, 0.25)",
      }
    },
  },
  plugins: [],
};
export default config;
