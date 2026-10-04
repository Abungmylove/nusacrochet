/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Syne"', 'sans-serif'],
      },
      colors: {
        brand: {
          purple: '#6d28d9',
          sage: '#059669',
          terracotta: '#ea580c',
        }
      }
    },
  },
  plugins: [],
}
