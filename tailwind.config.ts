import type { Config } from "tailwindcss";

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
        "background-muted": "var(--background-muted)",
        foreground: "var(--foreground)",
        "foreground-muted": "var(--foreground-muted)",

        // Text Primary with shades
        "text-primary": {
          50: "var(--text-primary-50)",
          100: "var(--text-primary-100)",
          200: "var(--text-primary-200)",
          300: "var(--text-primary-300)",
          400: "var(--text-primary-400)",
          500: "var(--text-primary-500)",
          600: "var(--text-primary-600)",
          700: "var(--text-primary-700)",
          800: "var(--text-primary-800)",
          900: "var(--text-primary-900)",
          DEFAULT: "var(--text-primary-500)",
        },

        // Text Secondary with shades
        "text-secondary": {
          50: "var(--text-secondary-50)",
          100: "var(--text-secondary-100)",
          200: "var(--text-secondary-200)",
          300: "var(--text-secondary-300)",
          400: "var(--text-secondary-400)",
          500: "var(--text-secondary-500)",
          600: "var(--text-secondary-600)",
          700: "var(--text-secondary-700)",
          800: "var(--text-secondary-800)",
          900: "var(--text-secondary-900)",
          DEFAULT: "var(--text-secondary-500)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
