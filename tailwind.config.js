import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#f06634',
          'orange-hover': '#e05320',
          'orange-light': '#fff7ed',
          navy: '#1d3d70',
          'navy-dark': '#13284b',
          'navy-light': '#2b5797',
          teal: '#005e6a',
          'bni-orange': '#f15a22',
          cream: '#FFF8F0',
        }
      },
      fontFamily: {
        worksans: ['"Work Sans"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['"Fira Code"', 'Consolas', 'Monaco', 'monospace'],
      },
      boxShadow: {
        'brand': '0 4px 20px -2px rgba(29, 61, 112, 0.12), 0 2px 6px -1px rgba(240, 102, 52, 0.08)',
        'card-hover': '0 10px 25px -3px rgba(29, 61, 112, 0.15)',
      }
    },
  },
  plugins: [
    typography,
  ],
}
