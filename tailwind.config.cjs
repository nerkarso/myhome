const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1360px',
      },
    },
    extend: {
      colors: {
        base: colors.zinc,
        primary: colors.green,
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
