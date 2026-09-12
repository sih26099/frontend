/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0B1420',
          900: '#0F1B2D',
          800: '#152538',
          700: '#1D3149',
          600: '#28405C',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          sunk: '#F5F6F8',
          page: '#EEF0F3',
        },
        ink: {
          900: '#151B23',
          700: '#3A4552',
          500: '#66717D',
          300: '#A2ACB6',
          200: '#D6DBE1',
          100: '#E8EBEE',
        },
        signal: {
          conflict: '#C2410C',
          conflictBg: '#FDF1EA',
          good: '#166534',
          goodBg: '#EDF7EF',
          bad: '#991B1B',
          badBg: '#FCEEEE',
          pending: '#9A6700',
          pendingBg: '#FDF6E3',
          info: '#1D4E89',
          infoBg: '#EAF1FA',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.1rem' }],
        sm: ['0.8125rem', { lineHeight: '1.25rem' }],
      },
      boxShadow: {
        none: 'none',
        panel: '0 1px 2px 0 rgba(15, 27, 45, 0.06)',
      },
      borderRadius: {
        sm: '3px',
        DEFAULT: '4px',
        md: '6px',
      },
    },
  },
  plugins: [],
}
