/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        green: {
          400: '#4ade80',
        },
        gray: {
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          800: '#1f2937',
        },
      },
    },
  },
  plugins: [],
};