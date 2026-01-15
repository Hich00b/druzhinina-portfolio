/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // These match the self-hosted font names exactly
        sans: ['Lato', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        navy: { 900: '#0a192f', 800: '#112240' },
        gold: { 500: '#d4af37', 600: '#c5a028' },
        sand: { 50: '#f9f7f2', 100: '#f0ece4' },
      }
    },
  },
  plugins: [],
}