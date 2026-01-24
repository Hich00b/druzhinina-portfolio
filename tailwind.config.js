/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Set Nunito as the default sans and serif (unless you want to keep Playfair for titles)
        // Based on your request "change font set up to Nunito", I will make it the primary.
        sans: ['Nunito', 'sans-serif'],
        serif: ['Nunito', 'serif'], // Switched to Nunito as requested
        display: ['"Playfair Display"', 'serif'] // Kept just in case for specific accents
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