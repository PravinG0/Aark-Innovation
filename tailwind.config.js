/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aark: {
          accent: '#0284c7', // Vivid Azure / Sky-600
          'accent-hover': '#0369a1', // Sky-700
          'accent-light': '#38bdf8', // Sky-400 / Cyan
          cyan: '#0ea5e9',
          amber: '#f59e0b',
          dark: '#080808',
          surface: '#121217',
          border: 'rgba(255, 255, 255, 0.08)',
        }
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

