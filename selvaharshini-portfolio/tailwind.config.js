/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Dark theme (default / primary)
        base: {
          DEFAULT: '#0A0E16',
          soft: '#0E141F',
        },
        surface: {
          DEFAULT: '#121927',
          raised: '#161F30',
          border: '#232E42',
        },
        ink: {
          DEFAULT: '#E9EDF5',
          muted: '#9AA5B8',
          faint: '#5E6A80',
        },
        // Accent — use `brass` on dark backgrounds, `brass-700` on light ones
        // (brass-700 is darkened for AA text contrast on the light theme's paper bg)
        brass: {
          DEFAULT: '#D6A756',
          light: '#E8C27F',
          700: '#8F6226',
        },
        // Light theme
        paper: {
          DEFAULT: '#FAF8F4',
          surface: '#FFFFFF',
          border: '#E7E2D8',
        },
        graphite: {
          DEFAULT: '#1B2130',
          muted: '#5B6472',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(0,0,0,0.45)',
        glow: '0 0 0 1px rgba(214,167,86,0.25), 0 12px 40px -12px rgba(214,167,86,0.25)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        drawLine: {
          from: { strokeDashoffset: 1000 },
          to: { strokeDashoffset: 0 },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
