/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
          light: "var(--color-primary-light)",
        },
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        "surface-light": "var(--color-surface-light)",
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          light: "var(--color-accent-light)",
          contrast: "var(--color-accent-contrast)",
        },
        state: {
          success: "var(--color-success)",
          error: "var(--color-error)",
          warning: "var(--color-warning)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}