/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sih: {
          navy: '#1B365D',
          'navy-dark': '#0F223D',
          'navy-light': '#2A4B7C',
          orange: '#F37021',
          'orange-dark': '#D95A0E',
          'orange-light': '#F78C47',
          blue: '#0077C8',
          'blue-light': '#EBF5FC',
          green: '#1EA858',
          'green-light': '#E8F7EE',
        },
        surface: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          900: '#0F172A',
        }
      },
      fontFamily: {
        serif: ['Times New Roman', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


