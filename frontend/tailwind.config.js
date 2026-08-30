/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hrl: {
          red: '#D6001C',         // HRL Official Crimson Red
          'red-dark': '#B30017',
          'red-light': '#FEECEE',
          blue: '#0071E3',        // Apple/HRL Vibrant Electric Blue
          'blue-dark': '#005BB5',
          'blue-light': '#EBF5FF',
          dark: '#0A0A0A',        // Deep Premium Carbon
          gray: '#666666',
          muted: '#888888',
          border: '#EAEAEA',
          bg: '#FFFFFF',
          card: '#FAFAFA'
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', '"Inter"', '"Helvetica Neue"', 'sans-serif'],
        serif: ['"Times New Roman"', 'Georgia', 'serif'],
        mono: ['"SF Mono"', 'Menlo', 'monospace']
      },
      boxShadow: {
        'hrl-card': '0 4px 24px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'hrl-float': '0 12px 36px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
