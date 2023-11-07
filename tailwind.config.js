const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Open Sans', 'sans-serif', ...defaultTheme.fontFamily.sans], // override default font
      'poppins': ['Poppins', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'bg-bottom': "url('../assets/bg-bottom.webp')",
      },
      colors: {
        'btn-default': '#a07e36',
        'btn-hover': '#c99d52',
        'link-color': '#b69451',
        'link-color-hover': '#c5a25c',
        'main-bg': '#171e1d',
      }
    },
  },
  plugins: [],
}

