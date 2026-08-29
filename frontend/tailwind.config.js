/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        classic: {
          navy: '#1B365D',        // Deep Classic Navy Blue
          'navy-dark': '#0E223D',
          'navy-light': '#2A4D7E',
          ochre: '#D96B27',       // Warm Classic Saffron/Ochre Accent
          'ochre-dark': '#B85519',
          'ochre-light': '#FDF4EC',
          slate: '#1E293B',       // Deep Slate Ink
          'slate-muted': '#64748B',
          bg: '#F8FAFC',          // Clean Canvas Off-White
          card: '#FFFFFF',
          border: '#E2E8F0',      // Hairline Architectural Border
          green: '#15803D',       // Classic Forest Green for verified badges
          'green-light': '#F0FDF4',
        }
      },
      fontFamily: {
        serif: ['"Times New Roman"', 'Georgia', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', '"SF Pro"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['"SF Mono"', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      },
      boxShadow: {
        'classic-sm': '0 1px 3px rgba(27, 54, 93, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'classic-md': '0 4px 16px rgba(27, 54, 93, 0.06), 0 1px 3px rgba(0, 0, 0, 0.03)',
        'classic-lg': '0 12px 32px rgba(27, 54, 93, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
