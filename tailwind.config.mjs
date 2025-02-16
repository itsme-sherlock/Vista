import { a } from 'framer-motion/dist/types.d-6pKw1mTI';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        bruno: ["Bruno Ace SC", "sans-serif"],
        alex: ["Alex Brush", "sans-serif"],
      }
    },
  },
  plugins: [],
};
