/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    colors: {
      primary_red: '#F53838',
      primary_black: '#0B132A',
      secondary_black: '#4F5665',
      secondary_red: '#FFECEC',
      primary_gray: '#EEEFF2',
    },
    extend: {
      screens: {
        '3xl': '1900px',
      },
    },
  },
  plugins: [],
};
