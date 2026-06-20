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
        background: "#0a0a0a",
        surface: "#111111",
        "surface-alt": "#1a1a1a",
        foreground: "#f5f5f5",
        muted: "#6b7280",
        primary: "#22c55e",
        "primary-hover": "#16a34a",
        secondary: "#eab308",
        "secondary-hover": "#ca8a04",
        border: "#1f2937",
        "nav-bg": "#0d0d0d",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-down": "slideDown 0.3s ease-out forwards",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(34, 197, 94, 0.2)" },
          "50%": { boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
