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
          'navy-dark': '#0E213D',
          'navy-light': '#274C7D',
          orange: '#F37021',
          'orange-dark': '#D9580D',
          'orange-light': '#FA8A43',
          blue: '#0071E3', // Apple Blue
          'blue-light': '#F0F6FD',
          green: '#34C759', // Apple Green
          'green-light': '#EBF9EE',
        },
        apple: {
          bg: '#F5F5F7',
          card: '#FFFFFF',
          border: 'rgba(0, 0, 0, 0.08)',
          'border-dark': 'rgba(255, 255, 255, 0.12)',
          text: '#1D1D1F',
          subtext: '#86868B',
          hover: '#F5F5F7',
          gray: '#E8E8ED',
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"SF Pro"',
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        serif: [
          '"New York"',
          'Charter',
          'Georgia',
          'serif'
        ],
        mono: [
          '"SF Mono"',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace'
        ]
      },
      boxShadow: {
        'apple-sm': '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'apple-md': '0 8px 24px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.02)',
        'apple-lg': '0 20px 40px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.03)',
        'apple-float': '0 30px 60px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '32px',
      }
    },
  },
  plugins: [],
}
