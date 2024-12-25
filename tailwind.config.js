/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'footer-and-nav': '#1b1238',
      },
    },
  },
  plugins: [],
};
