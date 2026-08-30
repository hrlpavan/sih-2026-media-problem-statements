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
          crimson: '#D1002D',            // Primary Master Brand Crimson
          'crimson-dark': '#A50024',     // Hover/Active State
          'crimson-tint': 'rgba(209, 0, 45, 0.08)',
          'crimson-glow': 'rgba(209, 0, 45, 0.25)',
          blue: '#0071E3',               // Apple/HRL Vibrant Electric Blue
          'blue-dark': '#005BB5',
          'blue-light': '#EBF5FF',
          dark: '#1D1D1F',               // Charcoal Primary Text
          body: '#515154',               // Secondary Body Text
          muted: '#86868B',              // Eyebrows & Metadata
          surface: '#F5F5F7',            // Apple Light Slate Surface
          border: 'rgba(0, 0, 0, 0.08)', // Clean 1px Subtle Border
          'border-hover': 'rgba(0, 0, 0, 0.16)',
          oled: '#000000',               // Deep OLED Cinema Black
          'dark-base': '#0A0A0C',
          'dark-surface': '#121216',
          'dark-elevated': '#1C1C22',
          'dark-border': 'rgba(255, 255, 255, 0.08)',
          'dark-border-hover': 'rgba(255, 255, 255, 0.18)',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', '"SF Mono"', '"Cascadia Code"', 'Menlo', 'monospace'],
        serif: ['"Times New Roman"', 'Georgia', 'serif']
      },
      boxShadow: {
        'hrl-subtle': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'hrl-card': '0 4px 20px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'hrl-glow': '0 8px 24px rgba(209, 0, 45, 0.2)',
        'hrl-float': '0 16px 40px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
