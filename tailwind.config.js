/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Основной: Глубокий, интеллигентный синий (вместо черного/угольного)
        navy: {
          800: '#2C3E50',
          900: '#1A252F',
        },
        // Фон: Теплый, "бумажный" оттенок (вместо стерильного белого)
        sand: {
          50: '#F9F9F7',
          100: '#F0F0EB',
          200: '#E6E6E0',
        },
        // Акцент: Приглушенное золото/бронза (статусность)
        gold: {
          500: '#C5A065',
          600: '#B08D55',
        },
        // Текст: Мягкий серый для чтения
        slate: {
          600: '#64748B',
          800: '#334155',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.05)',
      }
    },
  },
  plugins: [],
}