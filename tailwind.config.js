/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        textColor: 'rgb(var(--textcolor) / <alpha-value>)',
        bgColor: 'rgb(var(--background) / <alpha-value>)',
        bgColor2: 'rgb(var(--inner-bg) / <alpha-value>)',
        purpleColor: 'rgb(var(--purple) / <alpha-value>)',
        orangeColor: 'rgb(var(--orange) / <alpha-value>)',
        yellowColor: 'rgb(var(--yellow) / <alpha-value>)',
      },
    },
  },
  plugins: ['@tailwindcss/forms'],
};
