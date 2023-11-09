/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        textColor: 'var(--textcolor)',
        bgColor: 'var(--background)',
        bgColor2: 'var(--inner-bg)',
        purpleColor: 'var(--purple)',
        orangeColor: 'var(--orange)',
        yellowColor: 'var(--yellow)',
      },
    },
  },
  plugins: ['@tailwindcss/forms'],
};
