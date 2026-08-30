/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',      // Compact smartphones (iPhone SE, Galaxy S)
      'sm': '640px',      // Standard smartphones & phablets
      'md': '768px',      // Tablets & iPads (Portrait)
      'lg': '1024px',     // Tablets (Landscape) & Small Laptops
      'xl': '1280px',     // Standard Desktop & MacBook 13/14
      '2xl': '1536px',    // Large Desktop & MacBook 16
      '3xl': '1920px',    // 1080p Full HD Displays & Standard Projectors
      '4k': '2560px',     // 4K Ultra HD Monitors & Auditorium Wall Displays
    },
    extend: {
      colors: {
        hrl: {
          crimson: '#D1002D',
          'crimson-dark': '#A50024',
          'crimson-tint': 'rgba(209, 0, 45, 0.08)',
          'crimson-glow': 'rgba(209, 0, 45, 0.25)',
          blue: '#0071E3',
          'blue-dark': '#005BB5',
          'blue-light': '#EBF5FF',
          dark: '#1D1D1F',
          body: '#515154',
          muted: '#86868B',
          surface: '#F5F5F7',
          border: 'rgba(0, 0, 0, 0.08)',
          'border-hover': 'rgba(0, 0, 0, 0.16)',
          oled: '#000000',
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
      },
      aspectRatio: {
        'cinema': '21 / 9',
        'projector': '16 / 9',
        'presentation': '16 / 9',
        'a4': '1 / 1.414',
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
