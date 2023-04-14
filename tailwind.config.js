/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#222',
        gray1: '#eee',
        gray2: '#aaa',
        gray3: '#777',
      },
    },
  },
  plugins: [],
};
