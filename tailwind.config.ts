import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#0f172a", cloud: "#f8fafc", brand: { 50: "#eef2ff", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca" } },
      boxShadow: { soft: "0 24px 80px rgba(15, 23, 42, 0.10)" }
    }
  },
  plugins: []
};
export default config;
