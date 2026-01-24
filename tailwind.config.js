/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Sets Nunito as the default font for the whole site
        sans: ['Nunito', 'sans-serif'],
        serif: ['Nunito', 'serif'], 
        // We keep Playfair available if you ever want to use it for specific headers
        display: ['"Playfair Display"', 'serif'] 
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