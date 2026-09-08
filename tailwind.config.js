/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#09090b",
        surface: "#131316",
        line: "rgba(255,255,255,0.16)",
        lineSoft: "rgba(255,255,255,0.08)",
        paper: "#f4f1ea",
        muted: "#a4a2a8",
        gold: "#d8ff3e",
        teal: "#b6ffce",
      },
      fontFamily: {
        display: ["DM Sans", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      animation: {
        rise: "riseIn 0.7s ease-out both",
      },
      keyframes: {
        riseIn: {
          from: { opacity: 0, transform: "translateY(14px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
